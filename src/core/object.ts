import { Resolver, Token, assert, errors } from "@zorse/adk/core";

export const ComponentSymbolHandle = Symbol("ADK/Component/handle");
export const ComponentSymbolUpdate = Symbol("ADK/Component/update");
export const ComponentSymbolRender = Symbol("ADK/Component/render");
export const ComponentSymbolVerify = Symbol("ADK/Component/verify");
export const ComponentNameSeparator = "/";

export abstract class Component {
	public readonly [ComponentSymbolHandle]: ComponentHandle;
	constructor(parent: Entity) {
		parent.components.push(this);
		this[ComponentSymbolHandle] = new ComponentHandle(this, parent);
		return new Token({
			name: () => {
				const entity = this[ComponentSymbolHandle].parent;
				const type = this.constructor.name;
				const index = entity.components.length;
				const name = `${type}${index === 1 ? "" : index}`;
				return entity.path(name);
			},
			wrap: this,
		}) as any;
	}
	public async [ComponentSymbolUpdate](): Promise<void> {
		const mappings: Array<{ token: Token; v: any; k: string }> = [];
		this[ComponentSymbolHandle].walk((token, v, k) => {
			mappings.push({ token, v, k });
		});
		for (const mapping of mappings) {
			const { token, v, k } = mapping;
			v[k] = await token.resolver();
		}
	}
	public abstract [ComponentSymbolRender](out: any): void;
	public async [ComponentSymbolVerify](): Promise<boolean> {
		return true;
	}
}

class ComponentHandle {
	constructor(private readonly component: Component, readonly parent: Entity) {}
	public readonly update = this.component[ComponentSymbolUpdate].bind(this.component);
	public readonly render = this.component[ComponentSymbolRender].bind(this.component);
	public readonly verify = this.component[ComponentSymbolVerify].bind(this.component);
	public dependencies(): Set<Component> {
		const dependencies = new Set<Component>();
		this._dependencies(dependencies);
		return dependencies;
	}
	private _dependencies(out: Set<Component>): void {
		const tokens = this.tokens();
		for (const token of tokens) {
			if (token.data instanceof Component) {
				assert.false(errors.CyclicComponentTokenPair, token.data === this.component, this.component);
				const dependencyComponent = token.data as Component;
				if (out.has(dependencyComponent)) {
					continue;
				}
				out.add(dependencyComponent);
				const dependencyHandle = dependencyComponent[ComponentSymbolHandle];
				dependencyHandle._dependencies(out);
			}
		}
	}
	public tokens(): Set<Token> {
		const tokens = new Set<Token>();
		this.walk((token) => tokens.add(token));
		return tokens;
	}
	public walk(observe: (token: Token, v: any, k: string) => void) {
		_walk(this.component);
		function _walk(v: any): void {
			for (const k in v) {
				if (Token.IsToken(v[k]) && !(v[k] instanceof Component)) {
					observe(v[k], v, k);
				} else if (typeof v[k] === "object" || Array.isArray(v[k])) {
					_walk(v[k]);
				}
			}
		}
	}
	public serialize(): any {
		return JSON.parse(
			JSON.stringify(this.component, (_key, value) => {
				if (value && Token.IsToken(value)) {
					const token = value as Token;
					return token.toString();
				} else {
					return value;
				}
			}),
		);
	}
}

export class Entity {
	public readonly name: string;
	public readonly parent: Entity | System;
	public readonly children = new Set<Entity>();
	public readonly components = new Array<Component>();
	public constructor(parent: Entity | System, name?: string) {
		const type = this.constructor.name;
		const parentEntity: Entity = parent instanceof Entity ? parent : parent.root;
		if (name) {
			this.name = name;
		} else {
			const count = [...parentEntity.children].filter((c) => c.constructor.name === type).length;
			this.name = `${type}${count === 0 ? "" : count + 1}`;
		}
		parentEntity?.children.add(this);
		this.parent = parent;
	}
	public root(): System {
		let iterator: Entity | System = this.parent;
		while (iterator instanceof Entity) {
			iterator = iterator.parent;
		}
		return iterator;
	}
	public path(suffix?: string): string {
		const path = [this.name];
		let iterator: Entity | System = this.parent;
		while (iterator instanceof Entity) {
			path.push(iterator.name);
			iterator = iterator.parent;
		}
		return path.reverse().concat(suffix).filter(Boolean).join(ComponentNameSeparator);
	}
	public async update(): Promise<void> {
		for (const component of this.components) {
			await component[ComponentSymbolHandle].update();
		}
		for (const child of this.children) {
			await child.update();
		}
	}
	public render(): void {
		const system = this.root();
		for (const component of this.components) {
			Array.from(system.scenes)
				.filter((scene) => scene.accepts(component))
				.forEach((scene) => {
					scene.components.add(component);
				});
		}
		for (const child of this.children) {
			child.render();
		}
	}
}

export class System {
	public readonly root = new Entity(this, "<system>");
	public readonly scenes = new Set<Scene>();
	public async compose(): Promise<Composition> {
		await this.root.update();
		this.root.render();
		type SceneComponentPair = { component: Component; scene: Scene };
		const resolver = new Resolver<SceneComponentPair>();
		const sceneComponentPairs: SceneComponentPair[] = [];
		const findMappings = (c: Component): SceneComponentPair[] => sceneComponentPairs.filter((m) => m.component === c);
		const sceneDependencies = new Map<Scene, Set<Scene>>();
		for (const scene of this.scenes) {
			sceneDependencies.set(scene, new Set<Scene>());
			for (const component of scene.components) {
				if (findMappings(component).length === 0) {
					const mapping = { scene, component };
					sceneComponentPairs.push(mapping);
					resolver.addIsolated(mapping);
					for (const dep of component[ComponentSymbolHandle].dependencies()) {
						Array.from(this.scenes)
							.filter((s) => s !== scene && s.accepts(dep))
							.forEach((depScene) => {
								sceneDependencies.get(scene).add(depScene);
							});
					}
				}
			}
		}
		for (const [scene, deps] of sceneDependencies) {
			if (scene.type === Scene.Type.Nondirectional) {
				assert.true(errors.NonDirectionalSceneViolation, deps.size === 0, scene);
			} else if (scene.type === Scene.Type.Unidirectional) {
				for (const dep of deps) {
					assert.true(errors.UniDirectionalSceneViolation, sceneDependencies.get(dep).size === 0, scene, dep);
				}
			}
		}
		for (const mapping of sceneComponentPairs) {
			const handle = mapping.component[ComponentSymbolHandle];
			for (const dep of handle.dependencies()) {
				const depMappings = findMappings(dep);
				for (const depMapping of depMappings) {
					resolver.addDependency(mapping, depMapping);
				}
			}
		}
		const views: View[] = [];
		const resolved = resolver.resolve();
		for (const mappings of resolved) {
			for (const mapping of mappings) {
				const lastView = views[views.length - 1];
				if (lastView?.scene === mapping.scene) {
					lastView.components.add(mapping.component);
				} else {
					const view = new View(mapping.scene);
					view.components.add(mapping.component);
					views.push(view);
				}
			}
		}
		for (const view of views) {
			await view.render();
		}
		const clusteredViews = views.flatMap((view) => view.scene.cluster(view));
		return new Composition(clusteredViews);
	}
}

export abstract class Scene {
	public readonly type: Scene.Type = Scene.Type.Default;
	public readonly components = new Set<Component>();
	public abstract accepts(component: Component): boolean;
	public cleared(): any {
		return {};
	}
	public replace(token: Token): Token {
		return token;
	}
	public cluster(view: View): View[] {
		return [view];
	}
	public gizmos(): any {
		const output: { Components: any[] } = { Components: [] };
		for (const component of this.components) {
			const handle = component[ComponentSymbolHandle];
			output.Components.push(handle.serialize());
		}
		return output;
	}
}
/* istanbul ignore next */
export namespace Scene {
	export enum Type {
		Bidirectional,
		Unidirectional,
		Nondirectional,
		Default = Scene.Type.Unidirectional,
	}
}

export class View {
	public readonly components = new Set<Component>();
	public constructor(public readonly scene: Scene, public readonly output: any = scene.cleared()) {}
	public async render(): Promise<void> {
		for (const component of this.components) {
			const shadowComponent = Object.create(component) as Component;
			const shadowHandle = shadowComponent[ComponentSymbolHandle];
			shadowHandle.walk((token) => this.scene.replace(token));
			await shadowHandle.update();
			const verified = await shadowHandle.verify();
			assert.true(errors.ComponentVerificationViolation, verified, component);
			shadowHandle.render(this.output);
		}
	}
	public gizmos(): any {
		const output: { Components: any[] } = { Components: [] };
		for (const component of this.components) {
			const handle = component[ComponentSymbolHandle];
			output.Components.push(handle.serialize());
		}
		return output;
	}
}

export class Composition {
	public constructor(public readonly views: View[]) {}
	public get scenes(): Scene[] {
		const uniqueScenes = new Set<Scene>(this.views.map((view) => view.scene));
		return Array.from(uniqueScenes);
	}
	public gizmos(): any {
		return this.views.map((view) => view.gizmos());
	}
}

import { Resolver, Token, assert, errors } from "@zorse/adk/core";

/**
 * Symbols that represent methods after Component {@link Component.constructor}
 * is called. These are Symbols so they do not show up in `JSON.stringify()`.
 */
export class Symbols {
	/** Handle property symbol of a Component. @see Components's {@link Component.Handle} */
	public static readonly ComponentHandle: unique symbol = Symbol("ADK/Component/handle");
	/** Update method symbol of a Component. @see Components's {@link Component.Handle.update} */
	public static readonly ComponentUpdate: unique symbol = Symbol("ADK/Component/update");
	/** Render method symbol of a Component. @see Components's {@link Component.Handle.render} */
	public static readonly ComponentRender: unique symbol = Symbol("ADK/Component/render");
	/** Verify method symbol of a Component. @see Components's {@link Component.Handle.verify} */
	public static readonly ComponentVerify: unique symbol = Symbol("ADK/Component/verify");
}

/**
 * Components are single rendering units. Components are the lowest moving parts
 * in the entire Object model. Components are always attached to an Entity. No
 * Assumptions are ever made about Components except they subclass the abstract
 * class `Component` and implement the {@link Symbols.ComponentRender}`()`.
 *
 * Components render into an opaque object with type `any`. This design allows a
 * `Component` to stay as portable as possible. The `Component` is not aware of
 * the rendering context it is being rendered into. This property is used in the
 * process of rendering into multiple {@link Scene}s through a {@link System}.
 *
 * @see {@link System} for detail on how Components are rendered.
 */
export abstract class Component {
	public readonly [Symbols.ComponentHandle]: Component.Handle;
	constructor(parent: Entity) {
		parent.components.push(this);
		this[Symbols.ComponentHandle] = new Component.Handle(this, parent);
		return new Token({
			name: () => {
				const entity = this[Symbols.ComponentHandle].parent;
				const type = this.constructor.name;
				const index = entity.components.length;
				const name = `${type}${index === 1 ? "" : index}`;
				return entity.path(name);
			},
			wrap: this,
		}) as any;
	}
	public async [Symbols.ComponentUpdate](): Promise<void> {
		const mappings: Array<{ token: Token; v: any; k: string }> = [];
		this[Symbols.ComponentHandle].walk((token, v, k) => {
			mappings.push({ token, v, k });
		});
		for (const mapping of mappings) {
			const { token, v, k } = mapping;
			v[k] = await token.resolver();
		}
	}
	public abstract [Symbols.ComponentRender](out: any): void;
	public async [Symbols.ComponentVerify](): Promise<boolean> {
		return true;
	}
}

/** @see {@link Component.constructor} */
export namespace Component {
	/** A Handle object to expose utility API over a Component */
	export class Handle {
		/**
		 * @param component Component to create a Handle for
		 * @param parent Entity that owns the Component
		 */
		constructor(private readonly component: Component, readonly parent: Entity) {}
		/**
		 * Convenient wrapper for the update symbol on a Component.
		 * Calling this resolves all the {@link Token}s currently inside the `Component`, recursively.
		 */
		public readonly update: () => Promise<void> = this.component[Symbols.ComponentUpdate].bind(this.component);
		/**
		 * Convenient wrapper for the render symbol on a Component.
		 * This is synchronous to ensure deterministic rendering into output.
		 * @param out The output object to render into, type of this depends on Scene's {@link Scene.cleared} return value.
		 */
		public readonly render: (out: any) => void = this.component[Symbols.ComponentRender].bind(this.component);
		/**
		 * Convenient wrapper for the verify symbol on a Component.
		 * @returns `true` if the Component is valid, `false` otherwise.
		 */
		public readonly verify: () => Promise<boolean> = this.component[Symbols.ComponentVerify].bind(this.component);
		/** Recursively returns all other components that this component have a dependency on */
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
					const dependencyHandle = dependencyComponent[Symbols.ComponentHandle];
					dependencyHandle._dependencies(out);
				}
			}
		}
		/** Returns all tokens currently inside the current Component (`this`) */
		public tokens(): Set<Token> {
			const tokens = new Set<Token>();
			this.walk((token) => tokens.add(token));
			return tokens;
		}
		/**
		 * Walk and observe all tokens inside the current Component (`this`) recursively.
		 * @param observe Callback to observe tokens. Called with the token, the object it is inside, and the key it is from
		 * @note You can use `v[k] = ...` to mutate the `Component`'s state.
		 */
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
		/** Extension of `JSON.stringify` where it understands {@link Token}s. */
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
		return path.reverse().concat(suffix).filter(Boolean).join("/");
	}
	public async update(): Promise<void> {
		for (const component of this.components) {
			await component[Symbols.ComponentHandle].update();
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

/**
 * @mermaid Render Pipeline
 * stateDiagram
 *     [*] --> System.compose(): Entities, Components, and Scenes are inputs to System
 *     System.compose() --> Entity.update(): Begin Entity level rendering
 *     Entity.update() --> Entity.render(): Resolve Tokens if possible
 *     Entity.render() --> Scene.accepts(Component): Flatten Entity-Component tree into Scenes
 *     Scene.accepts(Component) --> Scene.replace(Token): Let Scenes handle unresolved Tokens
 *     Scene.replace(Token) --> View.render(): Create a "shadow" Component with replaced Tokens
 *     View.render() --> Component.update(): Begin Component level rendering
 *     Component.update() --> Component.verify(): Resolve replaced Tokens
 *     Component.verify() --> Component.render(): Render the ShadowComponent
 *     Component.render() --> Scene.cluster(): Cluster Views based on Scene limits
 *     Scene.cluster() --> Composition: Wrap Views for user consumption
 *     Composition --> [*]: Independent Views as outputs
 */
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
					for (const dep of component[Symbols.ComponentHandle].dependencies()) {
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
			const handle = mapping.component[Symbols.ComponentHandle];
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
			const handle = component[Symbols.ComponentHandle];
			output.Components.push(handle.serialize());
		}
		return output;
	}
}

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
			const shadowHandle = shadowComponent[Symbols.ComponentHandle];
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
			const handle = component[Symbols.ComponentHandle];
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

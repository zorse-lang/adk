import { Resolver, Token, assert, errors } from "@zorse/adk/core";

/**
 * Symbols that represent methods of {@link core.Component:class} is called. These are Symbols so they do
 * not show up in `JSON.stringify()`.
 */
export class Symbols {
	/** Handle property symbol of a Component. @see Components's {@link core.Component.Handle} */
	public static readonly ComponentHandle: unique symbol = Symbol("ADK/Component/handle");
	/** Update method symbol of a Component. @see Components's {@link core.Component.Handle.update} */
	public static readonly ComponentUpdate: unique symbol = Symbol("ADK/Component/update");
	/** Render method symbol of a Component. @see Components's {@link core.Component.Handle.render} */
	public static readonly ComponentRender: unique symbol = Symbol("ADK/Component/render");
	/** Verify method symbol of a Component. @see Components's {@link core.Component.Handle.verify} */
	public static readonly ComponentVerify: unique symbol = Symbol("ADK/Component/verify");
}

/**
 * Components are single rendering units. Components are the lowest moving parts in the entire Object model. Components
 * are always attached to an Entity. No Assumptions are ever made about Components except they subclass the abstract
 * class `Component` and implement {@link core.Symbols.ComponentRender}`()`.
 *
 * Components render into an opaque object with type `any`. This design allows a `Component` to stay as portable as
 * possible. The `Component` is not aware of the rendering context it is being rendered into. This property is used in
 * the process of rendering into multiple {@link core.Scene:class}s through a {@link core.System:class}.
 *
 * @see {@link core.System:class} for detail on how Components are rendered.
 */
export abstract class Component {
	/** @see {@link core.Component.Handle} */
	public readonly [Symbols.ComponentHandle]: Component.Handle;
	/** @param parent the parent Entity this Component is attached to. */
	constructor(parent: Entity) {
		parent.components.push(this);
		this[Symbols.ComponentHandle] = new Component.Handle(this, parent);
	}
	/** @see {@link core.Component.Handle.update} */
	public async [Symbols.ComponentUpdate](): Promise<void> {
		const mappings: Array<{ token: Token; v: any; k: string }> = [];
		this[Symbols.ComponentHandle].walk((token, v, k) => {
			mappings.push({ token, v, k });
		});
		for (const mapping of mappings) {
			const { token, v, k } = mapping;
			v[k] = await this[Symbols.ComponentHandle].parent.system.tracker.resolve(token);
		}
	}
	/** @see {@link core.Component.Handle.render} */
	public abstract [Symbols.ComponentRender](out: any): void | Promise<void>;

	/** @see {@link core.Component.Handle.verify} */
	public [Symbols.ComponentVerify](): void | Promise<void> {}
}

/** @see {@link core.Component:class} */
export namespace Component {
	/**
	 * The "Tokenized" variant of {@link core.Component:class}.
	 * All "undefined" member accesses return other nested {@link core.Token:class}s recursively.
	 * This variant of Component can have its {@link core.Token:class}s resolved by the {@link core.System:class}.
	 */
	export abstract class Resolvable extends Component {
		constructor(parent: Entity) {
			super(parent);
			return new Token({
				tracker: parent.system.tracker,
				wrap: this,
				name: () => {
					const entity = this[Symbols.ComponentHandle].parent;
					const type = this.constructor.name;
					const index = entity.components.length;
					const name = `${type}${index === 1 ? "" : index}`;
					return entity.path(name);
				},
			}) as any;
		}
	}

	/** A Handle object to expose utility API over a {@link core.Component:class} */
	export class Handle {
		/**
		 * @param component Component to create a Handle for
		 * @param parent Entity that owns the Component
		 */
		constructor(private readonly component: Component, readonly parent: Entity) {}
		/**
		 * Convenient wrapper for the update symbol on a Component.
		 * Calling this resolves all the {@link core.Token:class}s currently inside the `Component`, recursively.
		 */
		public readonly update: () => Promise<void> = this.component[Symbols.ComponentUpdate].bind(this.component);
		/**
		 * Convenient wrapper for the render symbol on a Component.
		 * @param out Output to render into. Type of this depends on {@link core.Scene:class}'s {@link core.Scene.empty} return value.
		 */
		public readonly render: (out: any) => Promise<void> = this.component[Symbols.ComponentRender].bind(this.component);
		/** Convenient wrapper for the verify symbol on a Component. */
		public readonly verify: () => Promise<void> = this.component[Symbols.ComponentVerify].bind(this.component);
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
		/** Returns all {@link core.Token:class}s currently inside the current Component (`this`) */
		public tokens(): Set<Token> {
			const tokens = new Set<Token>();
			this.walk((token) => tokens.add(token));
			return tokens;
		}
		/**
		 * Walk and observe all {@link core.Token:class}s inside the current Component (`this`) recursively.
		 * @param observe Callback to observe tokens. Called with the token, the object it is inside, and the key it is from
		 * @note You can use `v[k] = ...` to mutate the `Component`'s state.
		 */
		public walk(observe: (token: Token, v: any, k: string) => void): void {
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
		/** Extension of `JSON.stringify` where it understands {@link core.Token:class}s. */
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

/**
 * Entities are logical groupings of Components for end user application.
 * Entities orchestrate their child Components to render into multiple {@link core.Scene:class}s.
 * {@link core.Component:class}s are the building blocks of an Entity and describe the state of the Entity.
 *
 * @see {@link core.System:class} for detail on how Entities are rendered.
 */
export class Entity {
	/** Name of the entity, does not need to be unique */
	public readonly name: string;
	/** The {@link core.System:class} this Entity is attached to */
	public readonly system: System;
	/** The top-most parent is always the {@link core.System:class} this Entity is attached to */
	public readonly parent: Entity | System;
	/** Children of this Entity (other Entities) */
	public readonly children = new Set<Entity>();
	/** Components attached to this Entity */
	public readonly components = new Array<Component>();
	/**
	 * @param parent Parent Entity or System to attach this Entity to
	 * @param name Optional name of the Entity, defaults to `Entity${count}` of the same type in the parent Entity
	 * @note Token names are used when {@link core.Token:class} {@link core.Token.resolve}
	 * is called and `userData` attached to the Token is a {@link core.Component:class}
	 */
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
		const _findSystem = (): System => {
			let iterator = this.parent;
			while (iterator instanceof Entity) {
				iterator = iterator.parent;
			}
			return iterator as System;
		};
		this.system = _findSystem();
	}
	/** Returns the path of this Entity, which is the path of its parent Entity slash its own name */
	public path(suffix?: string): string {
		const path = [this.name];
		let iterator = this.parent;
		while (iterator instanceof Entity) {
			path.push(iterator.name);
			iterator = iterator.parent;
		}
		return path.reverse().concat(suffix).filter(Boolean).join("/");
	}
	/** Entity update calls {@link core.Component.Handle.update} on all attached {@link core.Component:class}s plus its children. */
	public async update(): Promise<void> {
		for (const component of this.components) {
			await component[Symbols.ComponentHandle].update();
		}
		for (const child of this.children) {
			await child.update();
		}
	}
	/** Entity render works with {@link core.System:class} to assign {@link core.Component:class}s to {@link core.Scene:class}s. */
	public render(): void {
		const consumed = new Set<Component>();
		for (const component of this.components) {
			Array.from(this.system.scenes)
				.filter((scene) => scene.filter(component))
				.forEach((scene) => {
					assert.false(errors.DuplicateComponentScenePair, consumed.has(component));
					scene.components.add(component);
					consumed.add(component);
				});
		}
		for (const child of this.children) {
			child.render();
		}
	}
}

/**
 * The Object model in ADK is inspired by Unity3D's GameObject from an API consumer perspective, however the Object
 * model in ADK is much more sophisticated.
 *
 * The Object model is designed as an {@link core.Entity:class} {@link core.Component:class} {@link core.System:class}. Individual
 * Components are able to render to multiple {@link core.Scene:class}s simultaneously. Components can also cross reference
 * each other across Scenes.
 *
 * This design is often times referred to as a "Multi-Headed Renderer".
 *
 * The {@link core.System:class} class is the entry point to the Object model. The System is responsible for orchestrating
 * the entire rendering process.
 *
 * System manages a set of {@link core.Scene:class}s and a root {@link core.Entity:class}.
 * The root Entity can be used to attach other Entities to the System.
 * Each Entity can have multiple {@link core.Component:class}s attached to it.
 * Each Component can be rendered into multiple {@link core.Scene:class}s simultaneously.
 * Calling the {@link core.System.compose} method will orchestrate the "Render Pipeline" shown below:
 *
 * ```mermaid
 * stateDiagram
 *     [*] --> System.compose(): Entities, Components, and Scenes are inputs to System
 *     System.compose() --> Entity.update(): Begin Entity level rendering
 *     Entity.update() --> Entity.render(): Resolve Tokens if possible
 *     Entity.render() --> Scene.filter(Component): Flatten Entity-Component tree into Scenes
 *     Scene.filter(Component) --> Scene.update(Token): Let Scenes handle unresolved Tokens and per-scene updates
 *     Scene.update(Token) --> View.render(): Create a "shadow" Component with updated Tokens
 *     View.render() --> Component.update(): Begin Component level rendering
 *     Component.update() --> Component.render(Scene): Resolve updated Tokens
 *     Component.render(Scene) --> Component.verify(): Render and Verify the ShadowComponent
 *     Component.verify() --> Scene.cluster(View): Cluster Views based on Scene limits
 *     Scene.cluster(View) --> Scene.verify(View): Verify Views are within Scene constraints
 *     Scene.verify(View) --> Scene.render(View): Send Views for Scene consumption in order
 *     Scene.render(View)--> [*]: System output is a Composition of Views
 * ```
 */
export class System {
	/** {@link core.Token:class}{@link core.Token.Tracker} used in serialization and token lookups */
	public readonly tracker = new Token.Tracker();
	/** Root {@link core.Entity:class} of the System */
	public readonly root = new Entity(this, "<system>");
	/** {@link core.Scene:class} managed by the System */
	public readonly scenes = new Set<Scene>();
	/**
	 * Orchestrates and executes the Render Pipeline.
	 * @see {@link core.System:class} for more details.
	 * @returns A {@link core.Composition:class} of {@link core.View:class}s to be presented to the user.
	 */
	public async compose(): Promise<Composition> {
		await this.root.update();
		this.root.render();
		type Frame = { component: Component; scene: Scene };
		const resolver = new Resolver<Frame>();
		const sceneComponentPairs: Frame[] = [];
		const findMappings = (c: Component): Frame[] => sceneComponentPairs.filter((m) => m.component === c);
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
							.filter((s) => s !== scene && s.filter(dep))
							.forEach((depScene) => {
								sceneDependencies.get(scene).add(depScene);
							});
					}
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
		const clusteredViews = views.flatMap((view) => view.scene.cluster(view)).reverse();
		for (const view of clusteredViews) {
			await view.render();
			await view.scene.render(view);
			await view.scene.verify(view);
		}
		return new Composition(clusteredViews);
	}
}

/**
 * Scenes are what Entities render their {@link core.Component:class}s into. Scenes are made of {@link core.View:class}s. Think of
 * Scenes as a blank notebook and {@link core.View:class}s as pages in the notebook.
 */
export abstract class Scene {
	/** {@link core.Component:class}s rendered (flattened) into this Scene. */
	public readonly components = new Set<Component>();
	/**
	 * Checks if a {@link core.Component:class} can be rendered into this Scene.
	 * @param component Component to check if it can be rendered into this Scene.
	 */
	public abstract filter(component: Component): boolean;
	/**
	 * Renders an independent {@link core.View:class} per Scene.
	 * @param view a {@link core.View:class} to be consumed by the Scene as an independent unit of work.
	 */
	public render(view: View): void | Promise<void> {}
	/**
	 * The initial state of the Scene. Can be of any type.
	 * It is expected of {@link core.Component:class}s to know how to handle the type.
	 */
	public empty(): any {
		return {};
	}
	/** Gives the Scene a chance to do per-scene {@link core.Token:class} updates. */
	public update(token: Token): Token {
		return token;
	}
	/**
	 * Lets the Scene to re-arrange a {@link core.View:class} into multiple
	 * {@link core.View:class}s based on its internal constraints.
	 */
	public cluster(view: View): View[] {
		return [view];
	}
	/**
	 * Lets the Scene to verify a View is within its internal constraints
	 * @param view View to verify. These Views are in-order and clustered by the System and the Scene already.
	 */
	public verify(view: View): void | Promise<void> {}
	/** Serializes the Scene into a portable format, mostly for internal use. */
	public gizmos(): any {
		const output: { Components: any[] } = { Components: [] };
		for (const component of this.components) {
			const handle = component[Symbols.ComponentHandle];
			output.Components.push(handle.serialize());
		}
		return output;
	}
}

/**
 * Views are the lowest level of rendering unit in the Object model. Views are
 * what {@link core.Component:class}s in each scene eventually render into.
 */
export class View {
	/** {@link core.Component:class}s rendered (flattened) into this View. */
	public readonly components = new Set<Component>();
	/**
	 * A View always belongs to a {@link core.Scene:class}. View could be seen as a subset of a {@link core.Scene:class} as well.
	 * @param scene {@link core.Scene:class} this View belongs to.
	 * @param output Output of the View. Can be of any type. @see {@link core.Scene.empty}
	 */
	public constructor(public readonly scene: Scene, public readonly output: any = scene.empty()) {}
	/** Renders the {@link core.Component:class}s into View's output through creation of shadow {@link core.Component:class}s. */
	public async render(): Promise<void> {
		for (const component of this.components) {
			const shadowComponent = Object.create(component) as Component;
			const shadowHandle = shadowComponent[Symbols.ComponentHandle];
			shadowHandle.walk((token, v, k) => {
				if (token.data instanceof Component) {
					if (this.scene.components.has(token.data)) {
						v[k] = this.scene.update(token);
					} else {
						const otherComponent = token.data as Component;
						const otherHandle = otherComponent[Symbols.ComponentHandle];
						const otherScenes = [...otherHandle.parent.system.scenes].filter(
							(scene) => scene !== this.scene && scene.components.has(otherComponent),
						);
						const otherUpdates = otherScenes.map((scene) => scene.update(token)).filter((v) => v !== token);
						assert.true(errors.AmbiguousCrossSceneReference, otherUpdates.length <= 1, otherComponent);
						v[k] = otherUpdates.pop() || token;
					}
				} else {
					v[k] = this.scene.update(token);
				}
			});
			await shadowHandle.update();
			await shadowHandle.render(this.output);
			await shadowHandle.verify();
		}
	}
	/** Serializes the View into a portable format, mostly for internal use. */
	public gizmos(): any {
		const output: { Components: any[] } = { Components: [] };
		for (const component of this.components) {
			const handle = component[Symbols.ComponentHandle];
			output.Components.push(handle.serialize());
		}
		return output;
	}
}

/**
 * Compositions are the final output of the Object model. Compositions are ordered collection of independent
 * {@link core.View:class}s that can be consumed by the end user.
 */
export class Composition {
	/** @param views {@link core.View:class}s in the order they are supposed to be presented */
	public constructor(public readonly views: View[]) {}
	/** Returns all the {@link core.Scene:class}s associated with the composition of all member {@link core.View:class}s */
	public get scenes(): Scene[] {
		const uniqueScenes = new Set<Scene>(this.views.map((view) => view.scene));
		return Array.from(uniqueScenes);
	}
	/** Serializes the Composition into a portable format, mostly for internal use. */
	public gizmos(): any {
		return this.views.map((view) => view.gizmos());
	}
}

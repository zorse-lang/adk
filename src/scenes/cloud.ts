import { Component, Entity, Scene, Symbols, System, Token, View } from "@zorse/adk/core";

/** Base class for cloud components */
export abstract class CloudComponent extends Component {}

/** Base class for Azure components */
export abstract class ArmComponent extends CloudComponent {}
/** Base class for AWS components */
export abstract class CfnComponent extends CloudComponent {}
/** Base class for Google components */
export abstract class GdmComponent extends CloudComponent {}
/** Base class for Alibaba components */
export abstract class RosComponent extends CloudComponent {}

/** Base class for Azure Resource Manager resources. */
export abstract class ArmResource<PropsType = void> extends ArmComponent {
	/**
	 * @param entity The {@link core.Entity:class} this component is attached to.
	 * @param name The name of the resource.
	 * @param type The resource type.
	 * @param apiVersion The resource API version.
	 * @param properties The resource properties.
	 * @see https://learn.microsoft.com/en-us/azure/azure-resource-manager/templates/syntax
	 */
	constructor(
		entity: Entity,
		public readonly name: string,
		public readonly type: string,
		public readonly apiVersion: string,
		public readonly properties?: PropsType,
	) {
		super(entity);
	}
	public [Symbols.ComponentRender](output: ArmScene.Template) {
		output.set(this.name, this[Symbols.ComponentHandle].serialize());
	}
}

/** Base class for Google Deployment Manager resources. */
export abstract class GdmResource<PropsType = void> extends GdmComponent {
	/**
	 * @param entity The {@link core.Entity:class} this component is attached to.
	 * @param name The name of the resource.
	 * @param type The resource type.
	 * @param properties The resource properties.
	 * @see https://cloud.google.com/deployment-manager/docs/configuration/syntax-reference
	 */
	constructor(
		entity: Entity,
		public readonly name: string,
		public readonly type: string,
		public readonly properties?: PropsType,
	) {
		super(entity);
	}
	public [Symbols.ComponentRender](output: GdmScene.Template) {
		output.set(this.name, this[Symbols.ComponentHandle].serialize());
	}
}

/** Base class for AWS Cloud Formation resources. */
export abstract class CfnResource<PropsType = void> extends CfnComponent {
	/**
	 * @param entity The {@link core.Entity:class} this component is attached to.
	 * @param LogicalId The logical ID of the resource.
	 * @param Type The resource type.
	 * @param Properties The resource properties.
	 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-reference.html
	 */
	constructor(entity: Entity, LogicalId: string, Type: string, Properties?: PropsType) {
		super(entity);
		(this as any)[LogicalId] = { Type, Properties };
	}
	public async [Symbols.ComponentRender](output: AwsScene.Template) {
		output.Resources.push(this[Symbols.ComponentHandle].serialize());
	}
}

/** Base class for Alibaba Resource Orchestration Service resources. */
export abstract class RosResource<PropsType = void> extends RosComponent {
	/**
	 * @param entity The {@link core.Entity:class} this component is attached to.
	 * @param name The name of the resource.
	 * @param type The resource type.
	 * @param properties The resource properties.
	 * @see https://www.alibabacloud.com/help/en/resource-orchestration-service/latest/resources
	 */
	constructor(entity: Entity, LogicalId: string, Type: string, Properties?: PropsType) {
		super(entity);
		(this as any)[LogicalId] = { Type, Properties };
	}
	public [Symbols.ComponentRender](output: RosScene.Template) {
		output.Resources.push(this[Symbols.ComponentHandle].serialize());
	}
}

/** Azure Resource Manager {@link core.Scene:class} implementation. */
export class AwsScene extends Scene {
	private readonly _output: AwsScene.Template = { Resources: [] };
	public empty(): AwsScene.Template {
		this._output.Resources.length = 0;
		return this._output;
	}
	public filter(component: Component): boolean {
		return component instanceof CfnComponent;
	}
}

/** @see {@link scenes.AwsScene:class} */
export namespace AwsScene {
	export type Template = {
		readonly Resources: Array<string>;
	};
}

/** Alibaba Resource Orchestration Service {@link core.Scene:class} implementation. */
export class RosScene extends Scene {
	private readonly _output: RosScene.Template = { Resources: [] };
	public empty(): RosScene.Template {
		this._output.Resources.length = 0;
		return this._output;
	}
	public filter(component: Component): boolean {
		return component instanceof RosComponent;
	}
}

/** @see {@link scenes.RosScene:class} */
export namespace RosScene {
	export type Template = {
		readonly Resources: Array<string>;
	};
}

/** Google Deployment Manager {@link core.Scene:class} implementation. */
export class GdmScene extends Scene {
	private readonly _output: GdmScene.Template = new Map();
	public empty(): GdmScene.Template {
		this._output.clear();
		return this._output;
	}
	public filter(component: Component): boolean {
		return component instanceof GdmComponent;
	}
}

/** @see {@link scenes.GdmScene:class} */
export namespace GdmScene {
	export type Template = Map<string, any>;
}

/** Azure Resource Manager {@link core.Scene:class} implementation. */
export class ArmScene extends Scene {
	private readonly _output: ArmScene.Template = new Map();
	public empty(): ArmScene.Template {
		this._output.clear();
		return this._output;
	}
	public filter(component: Component): boolean {
		return component instanceof ArmComponent;
	}
}

/** @see {@link scenes.ArmScene:class} */
export namespace ArmScene {
	export type Template = Map<string, any>;
}

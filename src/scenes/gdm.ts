import { Component, Entity, Symbols } from "@zorse/adk/core";

/** Base class for Google DeploymentManager {@link core.Component:class}s. */
export abstract class GoogleDeploymentManagerComponent<PropsType> extends Component {
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
	public [Symbols.ComponentRender](output: any) {
		if (!output.resources) {
			output.resources = [];
		}
		output.resources.push(this[Symbols.ComponentHandle].serialize());
	}
}

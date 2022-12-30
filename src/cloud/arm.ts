import { Component, Entity, Symbols } from "@zorse/adk/core";

/** Base class for Azure ResourceManager {@link core.Component:class}s. */
export abstract class AzureResourceManagerComponent<PropsType = void> extends Component.Resolvable {
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
	public [Symbols.ComponentRender](output: any) {
		if (!output.resources) {
			output.resources = [];
		}
		output.resources.push(this[Symbols.ComponentHandle].serialize());
	}
}

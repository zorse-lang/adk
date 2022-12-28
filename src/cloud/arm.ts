import { Component, Entity, Symbols } from "@zorse/adk/core";

// syntax is from:
// https://learn.microsoft.com/en-us/azure/azure-resource-manager/templates/syntax
export abstract class ArmBaseResource<PropsType = void> extends Component.Resolvable {
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

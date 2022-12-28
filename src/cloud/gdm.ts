import { Component, Entity, Symbols } from "@zorse/adk/core";

// syntax is from:
// https://cloud.google.com/deployment-manager/docs/configuration/syntax-reference
export abstract class GdmBaseResource<PropsType> extends Component.Resolvable {
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

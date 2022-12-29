import { Component, Entity, Symbols } from "@zorse/adk/core";

// syntax is from:
// https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-reference.html
export abstract class CfnBaseResource<PropsType> extends Component.Resolvable {
	constructor(entity: Entity, LogicalId: string, Type: string, Properties?: PropsType) {
		super(entity);
		(this as any)[LogicalId] = {
			Type,
			Properties,
		};
	}
	public async [Symbols.ComponentRender](output: any) {
		if (!output.Resources) {
			output.Resources = {};
		}
		Object.assign(output.Resources, this[Symbols.ComponentHandle].serialize());
	}
}

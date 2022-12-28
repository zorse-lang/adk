import { Component, Entity, Symbols } from "@zorse/adk/core";

// syntax is from:
// https://www.alibabacloud.com/help/en/resource-orchestration-service/latest/resources
export abstract class RosBaseResource<PropsType> extends Component.Resolvable {
	constructor(entity: Entity, LogicalId: string, Type: string, Properties?: PropsType) {
		super(entity);
		(this as any)[LogicalId] = {
			Type,
			Properties,
		};
	}
	public [Symbols.ComponentRender](output: any) {
		if (!output.Resources) {
			output.Resources = {};
		}
		Object.assign(output.Resources, this[Symbols.ComponentHandle].serialize());
	}
}

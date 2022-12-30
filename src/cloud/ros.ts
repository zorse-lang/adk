import { Component, Entity, Symbols } from "@zorse/adk/core";

/** Base class for Alibaba ResourceOrchestrationService {@link core.Component:class}s. */
export abstract class AlibabaResourceOrchestrationServiceComponent<PropsType> extends Component.Resolvable {
	/**
	 * @param entity The {@link core.Entity:class} this component is attached to.
	 * @param name The name of the resource.
	 * @param type The resource type.
	 * @param properties The resource properties.
	 * @see https://www.alibabacloud.com/help/en/resource-orchestration-service/latest/resources
	 */
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

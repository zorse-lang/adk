import { Component, Entity, Symbols } from "@zorse/adk/core";

/** Base class for AWS CloudFormation {@link core.Component:class}s. */
export abstract class AWSCloudFormationComponent<PropsType> extends Component.Resolvable {
	/**
	 * @param entity The {@link core.Entity:class} this component is attached to.
	 * @param LogicalId The logical ID of the resource.
	 * @param Type The resource type.
	 * @param Properties The resource properties.
	 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-reference.html
	 */
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

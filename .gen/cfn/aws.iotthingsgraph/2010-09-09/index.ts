import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class FlowTemplate extends CfnResource<FlowTemplateComponentInputs> implements FlowTemplateComponentOutputs {
	constructor(entity: ADKEntity, options: FlowTemplateComponentInputs) {
		super(entity, options.LogicalId, "AWS::IoTThingsGraph::FlowTemplate", options);
	}
}
export interface FlowTemplateComponentOutputs {}
export interface FlowTemplateComponentInputs {
	readonly Definition: DefinitionDocument;
	readonly CompatibleNamespaceVersion?: number | undefined;
	readonly LogicalId: string;
}
export interface DefinitionDocument {
	readonly Language: string;
	readonly Text: string;
}
export default {
	FlowTemplate: FlowTemplate,
};

import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Pipeline extends CfnResource<PipelineComponentInputs> implements PipelineComponentOutputs {
	constructor(entity: ADKEntity, options: PipelineComponentInputs) {
		super(entity, options.LogicalId, "AWS::DataPipeline::Pipeline", options);
	}
	public readonly PipelineId: string;
}
export interface PipelineComponentOutputs {
	readonly PipelineId: string;
}
export interface PipelineComponentInputs {
	readonly Name: string;
	readonly Activate?: (boolean | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly ParameterObjects?: (ParameterObject[] | undefined) | undefined;
	readonly ParameterValues?: (ParameterValue[] | undefined) | undefined;
	readonly PipelineObjects?: (PipelineObject[] | undefined) | undefined;
	readonly PipelineTags?: (PipelineTag[] | undefined) | undefined;
	readonly LogicalId: string;
}
export interface Field {
	readonly Key: string;
	readonly RefValue?: (string | undefined) | undefined;
	readonly StringValue?: (string | undefined) | undefined;
}
export interface ParameterAttribute {
	readonly Key: string;
	readonly StringValue: string;
}
export interface ParameterObject {
	readonly Attributes: ParameterAttribute[];
	readonly Id: string;
}
export interface ParameterValue {
	readonly Id: string;
	readonly StringValue: string;
}
export interface PipelineObject {
	readonly Fields: Field[];
	readonly Id: string;
	readonly Name: string;
}
export interface PipelineTag {
	readonly Key: string;
	readonly Value: string;
}
export default {
	Pipeline: Pipeline,
};

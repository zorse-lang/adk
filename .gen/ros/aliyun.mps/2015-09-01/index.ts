import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class Pipeline extends RosResource<PipelineComponentInputs> implements PipelineComponentOutputs {
	constructor(entity: ADKEntity, options: PipelineComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::MPS::Pipeline", options);
	}
	public readonly PipelineId: any;
}
export interface PipelineComponentOutputs {
	readonly PipelineId: any;
}
export interface PipelineComponentInputs {
	readonly Name: string;
	readonly NotifyConfig?: (NotifyConfig | undefined) | undefined;
	readonly Role?: (string | undefined) | undefined;
	readonly Speed?: (string | undefined) | undefined;
	readonly SpeedLevel?: (number | undefined) | undefined;
	readonly State?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export interface NotifyConfig {
	readonly Topic?: (string | undefined) | undefined;
	readonly QueueName?: (string | undefined) | undefined;
}
export default {
	Pipeline: Pipeline,
};

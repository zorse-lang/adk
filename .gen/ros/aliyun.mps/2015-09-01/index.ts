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
	readonly NotifyConfig?: NotifyConfig | undefined;
	readonly Role?: string | undefined;
	readonly Speed?: string | undefined;
	readonly SpeedLevel?: number | undefined;
	readonly State?: string | undefined;
	readonly LogicalId: string;
}
export interface NotifyConfig {
	readonly Topic?: string | undefined;
	readonly QueueName?: string | undefined;
}
export default {
	Pipeline: Pipeline,
};

import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class JobTemplate extends CfnResource<JobTemplateComponentInputs> implements JobTemplateComponentOutputs {
	constructor(entity: ADKEntity, options: JobTemplateComponentInputs) {
		super(entity, options.LogicalId, "AWS::MediaConvert::JobTemplate", options);
	}
	public readonly Arn: string;
}
export interface JobTemplateComponentOutputs {
	readonly Arn: string;
}
export interface JobTemplateComponentInputs {
	readonly SettingsJson: any;
	readonly AccelerationSettings?: AccelerationSettings | undefined;
	readonly Category?: string | undefined;
	readonly Description?: string | undefined;
	readonly HopDestinations?: HopDestination[] | undefined;
	readonly Name?: string;
	readonly Priority?: number | undefined;
	readonly Queue?: string | undefined;
	readonly StatusUpdateInterval?: string | undefined;
	readonly Tags?: any | undefined;
	readonly LogicalId: string;
}
export class Preset extends CfnResource<PresetComponentInputs> implements PresetComponentOutputs {
	constructor(entity: ADKEntity, options: PresetComponentInputs) {
		super(entity, options.LogicalId, "AWS::MediaConvert::Preset", options);
	}
	public readonly Arn: string;
}
export interface PresetComponentOutputs {
	readonly Arn: string;
}
export interface PresetComponentInputs {
	readonly SettingsJson: any;
	readonly Category?: string | undefined;
	readonly Description?: string | undefined;
	readonly Name?: string;
	readonly Tags?: any | undefined;
	readonly LogicalId: string;
}
export class Queue extends CfnResource<QueueComponentInputs> implements QueueComponentOutputs {
	constructor(entity: ADKEntity, options: QueueComponentInputs) {
		super(entity, options.LogicalId, "AWS::MediaConvert::Queue", options);
	}
	public readonly Arn: string;
}
export interface QueueComponentOutputs {
	readonly Arn: string;
}
export interface QueueComponentInputs {
	readonly Description?: string | undefined;
	readonly Name?: string;
	readonly PricingPlan?: string | undefined;
	readonly Status?: string | undefined;
	readonly Tags?: any | undefined;
	readonly LogicalId: string;
}
export interface AccelerationSettings {
	readonly Mode: string;
}
export interface HopDestination {
	readonly Priority?: number | undefined;
	readonly Queue?: string | undefined;
	readonly WaitMinutes?: number | undefined;
}
export default {
	JobTemplate: JobTemplate,
	Preset: Preset,
	Queue: Queue,
};

import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class InferenceScheduler
	extends CfnResource<InferenceSchedulerComponentInputs>
	implements InferenceSchedulerComponentOutputs
{
	constructor(entity: ADKEntity, options: InferenceSchedulerComponentInputs) {
		super(entity, options.LogicalId, "AWS::LookoutEquipment::InferenceScheduler", options);
	}
	public readonly InferenceSchedulerArn: string;
}
export interface InferenceSchedulerComponentOutputs {
	readonly InferenceSchedulerArn: string;
}
export interface InferenceSchedulerComponentInputs {
	readonly DataInputConfiguration: DataInputConfiguration;
	readonly DataOutputConfiguration: DataOutputConfiguration;
	readonly DataUploadFrequency: string;
	readonly ModelName: string;
	readonly RoleArn: string;
	readonly DataDelayOffsetInMinutes?: number | undefined;
	readonly InferenceSchedulerName?: string | undefined;
	readonly ServerSideKmsKeyId?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export interface DataInputConfiguration {
	readonly InferenceInputNameConfiguration?: InputNameConfiguration | undefined;
	readonly InputTimeZoneOffset?: string | undefined;
	readonly S3InputConfiguration: S3InputConfiguration;
}
export interface DataOutputConfiguration {
	readonly KmsKeyId?: string | undefined;
	readonly S3OutputConfiguration: S3OutputConfiguration;
}
export interface InputNameConfiguration {
	readonly ComponentTimestampDelimiter?: string | undefined;
	readonly TimestampFormat?: string | undefined;
}
export interface S3InputConfiguration {
	readonly Bucket: string;
	readonly Prefix?: string | undefined;
}
export interface S3OutputConfiguration {
	readonly Bucket: string;
	readonly Prefix?: string | undefined;
}
export default {
	InferenceScheduler: InferenceScheduler,
};

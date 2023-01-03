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
	readonly DataDelayOffsetInMinutes?: (number | undefined) | undefined;
	readonly InferenceSchedulerName?: (string | undefined) | undefined;
	readonly ServerSideKmsKeyId?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export interface DataInputConfiguration {
	readonly InferenceInputNameConfiguration?: (InputNameConfiguration | undefined) | undefined;
	readonly InputTimeZoneOffset?: (string | undefined) | undefined;
	readonly S3InputConfiguration: S3InputConfiguration;
}
export interface DataOutputConfiguration {
	readonly KmsKeyId?: (string | undefined) | undefined;
	readonly S3OutputConfiguration: S3OutputConfiguration;
}
export interface InputNameConfiguration {
	readonly ComponentTimestampDelimiter?: (string | undefined) | undefined;
	readonly TimestampFormat?: (string | undefined) | undefined;
}
export interface S3InputConfiguration {
	readonly Bucket: string;
	readonly Prefix?: (string | undefined) | undefined;
}
export interface S3OutputConfiguration {
	readonly Bucket: string;
	readonly Prefix?: (string | undefined) | undefined;
}
export default {
	InferenceScheduler: InferenceScheduler,
};

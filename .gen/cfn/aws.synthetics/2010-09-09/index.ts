import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Canary extends CfnResource<CanaryComponentInputs> implements CanaryComponentOutputs {
	constructor(entity: ADKEntity, options: CanaryComponentInputs) {
		super(entity, options.LogicalId, "AWS::Synthetics::Canary", options);
	}
	public readonly Id: string;
	public readonly State: string;
}
export interface CanaryComponentOutputs {
	readonly Id: string;
	readonly State: string;
}
export interface CanaryComponentInputs {
	readonly ArtifactS3Location: string;
	readonly Code: Code;
	readonly ExecutionRoleArn: string;
	readonly Name: string;
	readonly RuntimeVersion: string;
	readonly Schedule: Schedule;
	readonly StartCanaryAfterCreation: boolean;
	readonly ArtifactConfig?: (ArtifactConfig | undefined) | undefined;
	readonly DeleteLambdaResourcesOnCanaryDeletion?: (boolean | undefined) | undefined;
	readonly FailureRetentionPeriod?: (number | undefined) | undefined;
	readonly RunConfig?: (RunConfig | undefined) | undefined;
	readonly SuccessRetentionPeriod?: (number | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly VisualReference?: (VisualReference | undefined) | undefined;
	readonly VPCConfig?: (VPCConfig | undefined) | undefined;
	readonly LogicalId: string;
}
export class Group extends CfnResource<GroupComponentInputs> implements GroupComponentOutputs {
	constructor(entity: ADKEntity, options: GroupComponentInputs) {
		super(entity, options.LogicalId, "AWS::Synthetics::Group", options);
	}
	public readonly Id: string;
}
export interface GroupComponentOutputs {
	readonly Id: string;
}
export interface GroupComponentInputs {
	readonly Name: string;
	readonly ResourceArns?: (string[] | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export interface ArtifactConfig {
	readonly S3Encryption?: (S3Encryption | undefined) | undefined;
}
export interface BaseScreenshot {
	readonly IgnoreCoordinates?: (string[] | undefined) | undefined;
	readonly ScreenshotName: string;
}
export interface Code {
	readonly Handler: string;
	readonly S3Bucket?: (string | undefined) | undefined;
	readonly S3Key?: (string | undefined) | undefined;
	readonly S3ObjectVersion?: (string | undefined) | undefined;
	readonly Script?: (string | undefined) | undefined;
}
export interface RunConfig {
	readonly ActiveTracing?: (boolean | undefined) | undefined;
	readonly EnvironmentVariables?: ({ [key: string]: string } | undefined) | undefined;
	readonly MemoryInMB?: (number | undefined) | undefined;
	readonly TimeoutInSeconds?: (number | undefined) | undefined;
}
export interface S3Encryption {
	readonly EncryptionMode?: (string | undefined) | undefined;
	readonly KmsKeyArn?: (string | undefined) | undefined;
}
export interface Schedule {
	readonly DurationInSeconds?: (string | undefined) | undefined;
	readonly Expression: string;
}
export interface VPCConfig {
	readonly SecurityGroupIds: string[];
	readonly SubnetIds: string[];
	readonly VpcId?: (string | undefined) | undefined;
}
export interface VisualReference {
	readonly BaseCanaryRunId: string;
	readonly BaseScreenshots?: (BaseScreenshot[] | undefined) | undefined;
}
export default {
	Canary: Canary,
	Group: Group,
};

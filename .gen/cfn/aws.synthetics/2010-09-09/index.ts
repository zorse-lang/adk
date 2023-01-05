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
	readonly ArtifactConfig?: ArtifactConfig | undefined;
	readonly DeleteLambdaResourcesOnCanaryDeletion?: boolean | undefined;
	readonly FailureRetentionPeriod?: number | undefined;
	readonly RunConfig?: RunConfig | undefined;
	readonly SuccessRetentionPeriod?: number | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly VisualReference?: VisualReference | undefined;
	readonly VPCConfig?: VPCConfig | undefined;
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
	readonly ResourceArns?: string[] | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export interface ArtifactConfig {
	readonly S3Encryption?: S3Encryption | undefined;
}
export interface BaseScreenshot {
	readonly IgnoreCoordinates?: string[] | undefined;
	readonly ScreenshotName: string;
}
export interface Code {
	readonly Handler: string;
	readonly S3Bucket?: string | undefined;
	readonly S3Key?: string | undefined;
	readonly S3ObjectVersion?: string | undefined;
	readonly Script?: string | undefined;
}
export interface RunConfig {
	readonly ActiveTracing?: boolean | undefined;
	readonly EnvironmentVariables?: { [key: string]: string } | undefined;
	readonly MemoryInMB?: number | undefined;
	readonly TimeoutInSeconds?: number | undefined;
}
export interface S3Encryption {
	readonly EncryptionMode?: string | undefined;
	readonly KmsKeyArn?: string | undefined;
}
export interface Schedule {
	readonly DurationInSeconds?: string | undefined;
	readonly Expression: string;
}
export interface VPCConfig {
	readonly SecurityGroupIds: string[];
	readonly SubnetIds: string[];
	readonly VpcId?: string | undefined;
}
export interface VisualReference {
	readonly BaseCanaryRunId: string;
	readonly BaseScreenshots?: BaseScreenshot[] | undefined;
}
export default {
	Canary: Canary,
	Group: Group,
};

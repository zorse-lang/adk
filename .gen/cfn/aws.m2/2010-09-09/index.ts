import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Application extends CfnResource<ApplicationComponentInputs> implements ApplicationComponentOutputs {
	constructor(entity: ADKEntity, options: ApplicationComponentInputs) {
		super(entity, options.LogicalId, "AWS::M2::Application", options);
	}
	public readonly ApplicationArn: string;
	public readonly ApplicationId: string;
}
export interface ApplicationComponentOutputs {
	readonly ApplicationArn: string;
	readonly ApplicationId: string;
}
export interface ApplicationComponentInputs {
	readonly Definition: Definition;
	readonly EngineType: string;
	readonly Name: string;
	readonly Description?: (string | undefined) | undefined;
	readonly Tags?: ({ [key: string]: string } | undefined) | undefined;
	readonly LogicalId: string;
}
export class Environment extends CfnResource<EnvironmentComponentInputs> implements EnvironmentComponentOutputs {
	constructor(entity: ADKEntity, options: EnvironmentComponentInputs) {
		super(entity, options.LogicalId, "AWS::M2::Environment", options);
	}
	public readonly EnvironmentArn: string;
	public readonly EnvironmentId: string;
}
export interface EnvironmentComponentOutputs {
	readonly EnvironmentArn: string;
	readonly EnvironmentId: string;
}
export interface EnvironmentComponentInputs {
	readonly EngineType: string;
	readonly InstanceType: string;
	readonly Name: string;
	readonly Description?: (string | undefined) | undefined;
	readonly EngineVersion?: (string | undefined) | undefined;
	readonly HighAvailabilityConfig?: (HighAvailabilityConfig | undefined) | undefined;
	readonly PreferredMaintenanceWindow?: (string | undefined) | undefined;
	readonly PubliclyAccessible?: (boolean | undefined) | undefined;
	readonly SecurityGroupIds?: (string[] | undefined) | undefined;
	readonly StorageConfigurations?: (StorageConfiguration[] | undefined) | undefined;
	readonly SubnetIds?: (string[] | undefined) | undefined;
	readonly Tags?: ({ [key: string]: string } | undefined) | undefined;
	readonly LogicalId: string;
}
export interface Definition {
	readonly Content?: (string | undefined) | undefined;
	readonly S3Location?: (string | undefined) | undefined;
}
export interface EfsStorageConfiguration {
	readonly FileSystemId: string;
	readonly MountPoint: string;
}
export interface FsxStorageConfiguration {
	readonly FileSystemId: string;
	readonly MountPoint: string;
}
export interface HighAvailabilityConfig {
	readonly DesiredCapacity: number;
}
export interface StorageConfiguration {
	readonly Efs?: (EfsStorageConfiguration | undefined) | undefined;
	readonly Fsx?: (FsxStorageConfiguration | undefined) | undefined;
}
export default {
	Application: Application,
	Environment: Environment,
};

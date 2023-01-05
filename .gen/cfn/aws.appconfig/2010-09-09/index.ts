import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Application extends CfnResource<ApplicationComponentInputs> implements ApplicationComponentOutputs {
	constructor(entity: ADKEntity, options: ApplicationComponentInputs) {
		super(entity, options.LogicalId, "AWS::AppConfig::Application", options);
	}
}
export interface ApplicationComponentOutputs {}
export interface ApplicationComponentInputs {
	readonly Name: string;
	readonly Description?: string | undefined;
	readonly Tags?: Tags[] | undefined;
	readonly LogicalId: string;
}
export class ConfigurationProfile
	extends CfnResource<ConfigurationProfileComponentInputs>
	implements ConfigurationProfileComponentOutputs
{
	constructor(entity: ADKEntity, options: ConfigurationProfileComponentInputs) {
		super(entity, options.LogicalId, "AWS::AppConfig::ConfigurationProfile", options);
	}
}
export interface ConfigurationProfileComponentOutputs {}
export interface ConfigurationProfileComponentInputs {
	readonly ApplicationId: string;
	readonly LocationUri: string;
	readonly Name: string;
	readonly Description?: string | undefined;
	readonly RetrievalRoleArn?: string | undefined;
	readonly Tags?: Tags[] | undefined;
	readonly Type?: string | undefined;
	readonly Validators?: Validators[] | undefined;
	readonly LogicalId: string;
}
export class Deployment extends CfnResource<DeploymentComponentInputs> implements DeploymentComponentOutputs {
	constructor(entity: ADKEntity, options: DeploymentComponentInputs) {
		super(entity, options.LogicalId, "AWS::AppConfig::Deployment", options);
	}
}
export interface DeploymentComponentOutputs {}
export interface DeploymentComponentInputs {
	readonly ApplicationId: string;
	readonly ConfigurationProfileId: string;
	readonly ConfigurationVersion: string;
	readonly DeploymentStrategyId: string;
	readonly EnvironmentId: string;
	readonly Description?: string | undefined;
	readonly Tags?: Tags[] | undefined;
	readonly LogicalId: string;
}
export class DeploymentStrategy
	extends CfnResource<DeploymentStrategyComponentInputs>
	implements DeploymentStrategyComponentOutputs
{
	constructor(entity: ADKEntity, options: DeploymentStrategyComponentInputs) {
		super(entity, options.LogicalId, "AWS::AppConfig::DeploymentStrategy", options);
	}
}
export interface DeploymentStrategyComponentOutputs {}
export interface DeploymentStrategyComponentInputs {
	readonly DeploymentDurationInMinutes: number;
	readonly GrowthFactor: number;
	readonly Name: string;
	readonly ReplicateTo: string;
	readonly Description?: string | undefined;
	readonly FinalBakeTimeInMinutes?: number | undefined;
	readonly GrowthType?: string | undefined;
	readonly Tags?: Tags[] | undefined;
	readonly LogicalId: string;
}
export class Environment extends CfnResource<EnvironmentComponentInputs> implements EnvironmentComponentOutputs {
	constructor(entity: ADKEntity, options: EnvironmentComponentInputs) {
		super(entity, options.LogicalId, "AWS::AppConfig::Environment", options);
	}
}
export interface EnvironmentComponentOutputs {}
export interface EnvironmentComponentInputs {
	readonly ApplicationId: string;
	readonly Name: string;
	readonly Description?: string | undefined;
	readonly Monitors?: Monitors[] | undefined;
	readonly Tags?: Tags[] | undefined;
	readonly LogicalId: string;
}
export class HostedConfigurationVersion
	extends CfnResource<HostedConfigurationVersionComponentInputs>
	implements HostedConfigurationVersionComponentOutputs
{
	constructor(entity: ADKEntity, options: HostedConfigurationVersionComponentInputs) {
		super(entity, options.LogicalId, "AWS::AppConfig::HostedConfigurationVersion", options);
	}
}
export interface HostedConfigurationVersionComponentOutputs {}
export interface HostedConfigurationVersionComponentInputs {
	readonly ApplicationId: string;
	readonly ConfigurationProfileId: string;
	readonly Content: string;
	readonly ContentType: string;
	readonly Description?: string | undefined;
	readonly LatestVersionNumber?: number | undefined;
	readonly LogicalId: string;
}
export interface Tags {
	readonly Key?: string | undefined;
	readonly Value?: string | undefined;
}
export interface Validators {
	readonly Content?: string | undefined;
	readonly Type?: string | undefined;
}
export interface Monitors {
	readonly AlarmArn?: string | undefined;
	readonly AlarmRoleArn?: string | undefined;
}
export default {
	Application: Application,
	ConfigurationProfile: ConfigurationProfile,
	Deployment: Deployment,
	DeploymentStrategy: DeploymentStrategy,
	Environment: Environment,
	HostedConfigurationVersion: HostedConfigurationVersion,
};

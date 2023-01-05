import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Application extends CfnResource<ApplicationComponentInputs> implements ApplicationComponentOutputs {
	constructor(entity: ADKEntity, options: ApplicationComponentInputs) {
		super(entity, options.LogicalId, "AWS::ElasticBeanstalk::Application", options);
	}
}
export interface ApplicationComponentOutputs {}
export interface ApplicationComponentInputs {
	readonly ApplicationName?: string | undefined;
	readonly Description?: string | undefined;
	readonly ResourceLifecycleConfig?: ApplicationResourceLifecycleConfig | undefined;
	readonly LogicalId: string;
}
export class ApplicationVersion
	extends CfnResource<ApplicationVersionComponentInputs>
	implements ApplicationVersionComponentOutputs
{
	constructor(entity: ADKEntity, options: ApplicationVersionComponentInputs) {
		super(entity, options.LogicalId, "AWS::ElasticBeanstalk::ApplicationVersion", options);
	}
	public readonly Id: string;
}
export interface ApplicationVersionComponentOutputs {
	readonly Id: string;
}
export interface ApplicationVersionComponentInputs {
	readonly ApplicationName: string;
	readonly SourceBundle: SourceBundle;
	readonly Description?: string | undefined;
	readonly LogicalId: string;
}
export class ConfigurationTemplate
	extends CfnResource<ConfigurationTemplateComponentInputs>
	implements ConfigurationTemplateComponentOutputs
{
	constructor(entity: ADKEntity, options: ConfigurationTemplateComponentInputs) {
		super(entity, options.LogicalId, "AWS::ElasticBeanstalk::ConfigurationTemplate", options);
	}
}
export interface ConfigurationTemplateComponentOutputs {}
export interface ConfigurationTemplateComponentInputs {
	readonly ApplicationName: string;
	readonly Description?: string | undefined;
	readonly EnvironmentId?: string | undefined;
	readonly OptionSettings?: ConfigurationOptionSetting[] | undefined;
	readonly PlatformArn?: string | undefined;
	readonly SolutionStackName?: string | undefined;
	readonly SourceConfiguration?: SourceConfiguration | undefined;
	readonly LogicalId: string;
}
export class Environment extends CfnResource<EnvironmentComponentInputs> implements EnvironmentComponentOutputs {
	constructor(entity: ADKEntity, options: EnvironmentComponentInputs) {
		super(entity, options.LogicalId, "AWS::ElasticBeanstalk::Environment", options);
	}
	public readonly EndpointUrl: string;
}
export interface EnvironmentComponentOutputs {
	readonly EndpointUrl: string;
}
export interface EnvironmentComponentInputs {
	readonly ApplicationName: string;
	readonly CNAMEPrefix?: string | undefined;
	readonly Description?: string | undefined;
	readonly EnvironmentName?: string | undefined;
	readonly OperationsRole?: string | undefined;
	readonly OptionSettings?: OptionSetting[] | undefined;
	readonly PlatformArn?: string | undefined;
	readonly SolutionStackName?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly TemplateName?: string | undefined;
	readonly Tier?: Tier | undefined;
	readonly VersionLabel?: string | undefined;
	readonly LogicalId: string;
}
export interface ApplicationResourceLifecycleConfig {
	readonly ServiceRole?: string | undefined;
	readonly VersionLifecycleConfig?: ApplicationVersionLifecycleConfig | undefined;
}
export interface ApplicationVersionLifecycleConfig {
	readonly MaxAgeRule?: MaxAgeRule | undefined;
	readonly MaxCountRule?: MaxCountRule | undefined;
}
export interface MaxAgeRule {
	readonly DeleteSourceFromS3?: boolean | undefined;
	readonly Enabled?: boolean | undefined;
	readonly MaxAgeInDays?: number | undefined;
}
export interface MaxCountRule {
	readonly DeleteSourceFromS3?: boolean | undefined;
	readonly Enabled?: boolean | undefined;
	readonly MaxCount?: number | undefined;
}
export interface SourceBundle {
	readonly S3Bucket: string;
	readonly S3Key: string;
}
export interface ConfigurationOptionSetting {
	readonly Namespace: string;
	readonly OptionName: string;
	readonly ResourceName?: string | undefined;
	readonly Value?: string | undefined;
}
export interface SourceConfiguration {
	readonly ApplicationName: string;
	readonly TemplateName: string;
}
export interface OptionSetting {
	readonly Namespace: string;
	readonly OptionName: string;
	readonly ResourceName?: string | undefined;
	readonly Value?: string | undefined;
}
export interface Tier {
	readonly Name?: string | undefined;
	readonly Type?: string | undefined;
	readonly Version?: string | undefined;
}
export default {
	Application: Application,
	ApplicationVersion: ApplicationVersion,
	ConfigurationTemplate: ConfigurationTemplate,
	Environment: Environment,
};

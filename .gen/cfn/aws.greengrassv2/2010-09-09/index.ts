import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class ComponentVersion
	extends CfnResource<ComponentVersionComponentInputs>
	implements ComponentVersionComponentOutputs
{
	constructor(entity: ADKEntity, options: ComponentVersionComponentInputs) {
		super(entity, options.LogicalId, "AWS::GreengrassV2::ComponentVersion", options);
	}
	public readonly Arn: string;
	public readonly ComponentName: string;
	public readonly ComponentVersion: string;
}
export interface ComponentVersionComponentOutputs {
	readonly Arn: string;
	readonly ComponentName: string;
	readonly ComponentVersion: string;
}
export interface ComponentVersionComponentInputs {
	readonly InlineRecipe?: string | undefined;
	readonly LambdaFunction?: LambdaFunctionRecipeSource | undefined;
	readonly Tags?: { [key: string]: string } | undefined;
	readonly LogicalId: string;
}
export class Deployment extends CfnResource<DeploymentComponentInputs> implements DeploymentComponentOutputs {
	constructor(entity: ADKEntity, options: DeploymentComponentInputs) {
		super(entity, options.LogicalId, "AWS::GreengrassV2::Deployment", options);
	}
	public readonly DeploymentId: string;
}
export interface DeploymentComponentOutputs {
	readonly DeploymentId: string;
}
export interface DeploymentComponentInputs {
	readonly TargetArn: string;
	readonly Components?: { [key: string]: ComponentDeploymentSpecification } | undefined;
	readonly DeploymentName?: string | undefined;
	readonly DeploymentPolicies?: DeploymentPolicies | undefined;
	readonly IotJobConfiguration?: DeploymentIoTJobConfiguration | undefined;
	readonly Tags?: { [key: string]: string } | undefined;
	readonly LogicalId: string;
}
export interface ComponentDependencyRequirement {
	readonly DependencyType?: string | undefined;
	readonly VersionRequirement?: string | undefined;
}
export interface ComponentPlatform {
	readonly Attributes?: { [key: string]: string } | undefined;
	readonly Name?: string | undefined;
}
export interface LambdaContainerParams {
	readonly Devices?: LambdaDeviceMount[] | undefined;
	readonly MemorySizeInKB?: number | undefined;
	readonly MountROSysfs?: boolean | undefined;
	readonly Volumes?: LambdaVolumeMount[] | undefined;
}
export interface LambdaDeviceMount {
	readonly AddGroupOwner?: boolean | undefined;
	readonly Path?: string | undefined;
	readonly Permission?: string | undefined;
}
export interface LambdaEventSource {
	readonly Topic?: string | undefined;
	readonly Type?: string | undefined;
}
export interface LambdaExecutionParameters {
	readonly EnvironmentVariables?: { [key: string]: string } | undefined;
	readonly EventSources?: LambdaEventSource[] | undefined;
	readonly ExecArgs?: string[] | undefined;
	readonly InputPayloadEncodingType?: string | undefined;
	readonly LinuxProcessParams?: LambdaLinuxProcessParams | undefined;
	readonly MaxIdleTimeInSeconds?: number | undefined;
	readonly MaxInstancesCount?: number | undefined;
	readonly MaxQueueSize?: number | undefined;
	readonly Pinned?: boolean | undefined;
	readonly StatusTimeoutInSeconds?: number | undefined;
	readonly TimeoutInSeconds?: number | undefined;
}
export interface LambdaFunctionRecipeSource {
	readonly ComponentDependencies?: { [key: string]: ComponentDependencyRequirement } | undefined;
	readonly ComponentLambdaParameters?: LambdaExecutionParameters | undefined;
	readonly ComponentName?: string | undefined;
	readonly ComponentPlatforms?: ComponentPlatform[] | undefined;
	readonly ComponentVersion?: string | undefined;
	readonly LambdaArn?: string | undefined;
}
export interface LambdaLinuxProcessParams {
	readonly ContainerParams?: LambdaContainerParams | undefined;
	readonly IsolationMode?: string | undefined;
}
export interface LambdaVolumeMount {
	readonly AddGroupOwner?: boolean | undefined;
	readonly DestinationPath?: string | undefined;
	readonly Permission?: string | undefined;
	readonly SourcePath?: string | undefined;
}
export interface ComponentConfigurationUpdate {
	readonly Merge?: string | undefined;
	readonly Reset?: string[] | undefined;
}
export interface ComponentDeploymentSpecification {
	readonly ComponentVersion?: string | undefined;
	readonly ConfigurationUpdate?: ComponentConfigurationUpdate | undefined;
	readonly RunWith?: ComponentRunWith | undefined;
}
export interface ComponentRunWith {
	readonly PosixUser?: string | undefined;
	readonly SystemResourceLimits?: SystemResourceLimits | undefined;
	readonly WindowsUser?: string | undefined;
}
export interface DeploymentComponentUpdatePolicy {
	readonly Action?: string | undefined;
	readonly TimeoutInSeconds?: number | undefined;
}
export interface DeploymentConfigurationValidationPolicy {
	readonly TimeoutInSeconds?: number | undefined;
}
export interface DeploymentIoTJobConfiguration {
	readonly AbortConfig?: IoTJobAbortConfig | undefined;
	readonly JobExecutionsRolloutConfig?: IoTJobExecutionsRolloutConfig | undefined;
	readonly TimeoutConfig?: IoTJobTimeoutConfig | undefined;
}
export interface DeploymentPolicies {
	readonly ComponentUpdatePolicy?: DeploymentComponentUpdatePolicy | undefined;
	readonly ConfigurationValidationPolicy?: DeploymentConfigurationValidationPolicy | undefined;
	readonly FailureHandlingPolicy?: string | undefined;
}
export interface IoTJobAbortConfig {
	readonly CriteriaList: IoTJobAbortCriteria[];
}
export interface IoTJobAbortCriteria {
	readonly Action: string;
	readonly FailureType: string;
	readonly MinNumberOfExecutedThings: number;
	readonly ThresholdPercentage: number;
}
export interface IoTJobExecutionsRolloutConfig {
	readonly ExponentialRate?: IoTJobExponentialRolloutRate | undefined;
	readonly MaximumPerMinute?: number | undefined;
}
export interface IoTJobExponentialRolloutRate {
	readonly BaseRatePerMinute: number;
	readonly IncrementFactor: number;
	readonly RateIncreaseCriteria: IoTJobRateIncreaseCriteria;
}
export interface IoTJobRateIncreaseCriteria {
	readonly NumberOfNotifiedThings?: number | undefined;
	readonly NumberOfSucceededThings?: number | undefined;
}
export interface IoTJobTimeoutConfig {
	readonly InProgressTimeoutInMinutes?: number | undefined;
}
export interface SystemResourceLimits {
	readonly Cpus?: number | undefined;
	readonly Memory?: number | undefined;
}
export default {
	ComponentVersion: ComponentVersion,
	Deployment: Deployment,
};

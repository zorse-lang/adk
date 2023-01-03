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
	readonly InlineRecipe?: (string | undefined) | undefined;
	readonly LambdaFunction?: (LambdaFunctionRecipeSource | undefined) | undefined;
	readonly Tags?: ({ [key: string]: string } | undefined) | undefined;
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
	readonly Components?: ({ [key: string]: ComponentDeploymentSpecification } | undefined) | undefined;
	readonly DeploymentName?: (string | undefined) | undefined;
	readonly DeploymentPolicies?: (DeploymentPolicies | undefined) | undefined;
	readonly IotJobConfiguration?: (DeploymentIoTJobConfiguration | undefined) | undefined;
	readonly Tags?: ({ [key: string]: string } | undefined) | undefined;
	readonly LogicalId: string;
}
export interface ComponentDependencyRequirement {
	readonly DependencyType?: (string | undefined) | undefined;
	readonly VersionRequirement?: (string | undefined) | undefined;
}
export interface ComponentPlatform {
	readonly Attributes?: ({ [key: string]: string } | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
}
export interface LambdaContainerParams {
	readonly Devices?: (LambdaDeviceMount[] | undefined) | undefined;
	readonly MemorySizeInKB?: (number | undefined) | undefined;
	readonly MountROSysfs?: (boolean | undefined) | undefined;
	readonly Volumes?: (LambdaVolumeMount[] | undefined) | undefined;
}
export interface LambdaDeviceMount {
	readonly AddGroupOwner?: (boolean | undefined) | undefined;
	readonly Path?: (string | undefined) | undefined;
	readonly Permission?: (string | undefined) | undefined;
}
export interface LambdaEventSource {
	readonly Topic?: (string | undefined) | undefined;
	readonly Type?: (string | undefined) | undefined;
}
export interface LambdaExecutionParameters {
	readonly EnvironmentVariables?: ({ [key: string]: string } | undefined) | undefined;
	readonly EventSources?: (LambdaEventSource[] | undefined) | undefined;
	readonly ExecArgs?: (string[] | undefined) | undefined;
	readonly InputPayloadEncodingType?: (string | undefined) | undefined;
	readonly LinuxProcessParams?: (LambdaLinuxProcessParams | undefined) | undefined;
	readonly MaxIdleTimeInSeconds?: (number | undefined) | undefined;
	readonly MaxInstancesCount?: (number | undefined) | undefined;
	readonly MaxQueueSize?: (number | undefined) | undefined;
	readonly Pinned?: (boolean | undefined) | undefined;
	readonly StatusTimeoutInSeconds?: (number | undefined) | undefined;
	readonly TimeoutInSeconds?: (number | undefined) | undefined;
}
export interface LambdaFunctionRecipeSource {
	readonly ComponentDependencies?: ({ [key: string]: ComponentDependencyRequirement } | undefined) | undefined;
	readonly ComponentLambdaParameters?: (LambdaExecutionParameters | undefined) | undefined;
	readonly ComponentName?: (string | undefined) | undefined;
	readonly ComponentPlatforms?: (ComponentPlatform[] | undefined) | undefined;
	readonly ComponentVersion?: (string | undefined) | undefined;
	readonly LambdaArn?: (string | undefined) | undefined;
}
export interface LambdaLinuxProcessParams {
	readonly ContainerParams?: (LambdaContainerParams | undefined) | undefined;
	readonly IsolationMode?: (string | undefined) | undefined;
}
export interface LambdaVolumeMount {
	readonly AddGroupOwner?: (boolean | undefined) | undefined;
	readonly DestinationPath?: (string | undefined) | undefined;
	readonly Permission?: (string | undefined) | undefined;
	readonly SourcePath?: (string | undefined) | undefined;
}
export interface ComponentConfigurationUpdate {
	readonly Merge?: (string | undefined) | undefined;
	readonly Reset?: (string[] | undefined) | undefined;
}
export interface ComponentDeploymentSpecification {
	readonly ComponentVersion?: (string | undefined) | undefined;
	readonly ConfigurationUpdate?: (ComponentConfigurationUpdate | undefined) | undefined;
	readonly RunWith?: (ComponentRunWith | undefined) | undefined;
}
export interface ComponentRunWith {
	readonly PosixUser?: (string | undefined) | undefined;
	readonly SystemResourceLimits?: (SystemResourceLimits | undefined) | undefined;
	readonly WindowsUser?: (string | undefined) | undefined;
}
export interface DeploymentComponentUpdatePolicy {
	readonly Action?: (string | undefined) | undefined;
	readonly TimeoutInSeconds?: (number | undefined) | undefined;
}
export interface DeploymentConfigurationValidationPolicy {
	readonly TimeoutInSeconds?: (number | undefined) | undefined;
}
export interface DeploymentIoTJobConfiguration {
	readonly AbortConfig?: (IoTJobAbortConfig | undefined) | undefined;
	readonly JobExecutionsRolloutConfig?: (IoTJobExecutionsRolloutConfig | undefined) | undefined;
	readonly TimeoutConfig?: (IoTJobTimeoutConfig | undefined) | undefined;
}
export interface DeploymentPolicies {
	readonly ComponentUpdatePolicy?: (DeploymentComponentUpdatePolicy | undefined) | undefined;
	readonly ConfigurationValidationPolicy?: (DeploymentConfigurationValidationPolicy | undefined) | undefined;
	readonly FailureHandlingPolicy?: (string | undefined) | undefined;
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
	readonly ExponentialRate?: (IoTJobExponentialRolloutRate | undefined) | undefined;
	readonly MaximumPerMinute?: (number | undefined) | undefined;
}
export interface IoTJobExponentialRolloutRate {
	readonly BaseRatePerMinute: number;
	readonly IncrementFactor: number;
	readonly RateIncreaseCriteria: IoTJobRateIncreaseCriteria;
}
export interface IoTJobRateIncreaseCriteria {
	readonly NumberOfNotifiedThings?: (number | undefined) | undefined;
	readonly NumberOfSucceededThings?: (number | undefined) | undefined;
}
export interface IoTJobTimeoutConfig {
	readonly InProgressTimeoutInMinutes?: (number | undefined) | undefined;
}
export interface SystemResourceLimits {
	readonly Cpus?: (number | undefined) | undefined;
	readonly Memory?: (number | undefined) | undefined;
}
export default {
	ComponentVersion: ComponentVersion,
	Deployment: Deployment,
};

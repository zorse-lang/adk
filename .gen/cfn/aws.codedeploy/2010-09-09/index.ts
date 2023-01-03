import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Application extends CfnResource<ApplicationComponentInputs> implements ApplicationComponentOutputs {
	constructor(entity: ADKEntity, options: ApplicationComponentInputs) {
		super(entity, options.LogicalId, "AWS::CodeDeploy::Application", options);
	}
}
export interface ApplicationComponentOutputs {}
export interface ApplicationComponentInputs {
	readonly ApplicationName?: (string | undefined) | undefined;
	readonly ComputePlatform?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class DeploymentConfig
	extends CfnResource<DeploymentConfigComponentInputs>
	implements DeploymentConfigComponentOutputs
{
	constructor(entity: ADKEntity, options: DeploymentConfigComponentInputs) {
		super(entity, options.LogicalId, "AWS::CodeDeploy::DeploymentConfig", options);
	}
}
export interface DeploymentConfigComponentOutputs {}
export interface DeploymentConfigComponentInputs {
	readonly ComputePlatform?: (string | undefined) | undefined;
	readonly DeploymentConfigName?: (string | undefined) | undefined;
	readonly MinimumHealthyHosts?: (MinimumHealthyHosts | undefined) | undefined;
	readonly TrafficRoutingConfig?: (TrafficRoutingConfig | undefined) | undefined;
	readonly LogicalId: string;
}
export class DeploymentGroup
	extends CfnResource<DeploymentGroupComponentInputs>
	implements DeploymentGroupComponentOutputs
{
	constructor(entity: ADKEntity, options: DeploymentGroupComponentInputs) {
		super(entity, options.LogicalId, "AWS::CodeDeploy::DeploymentGroup", options);
	}
}
export interface DeploymentGroupComponentOutputs {}
export interface DeploymentGroupComponentInputs {
	readonly ApplicationName: string;
	readonly ServiceRoleArn: string;
	readonly AlarmConfiguration?: (AlarmConfiguration | undefined) | undefined;
	readonly AutoRollbackConfiguration?: (AutoRollbackConfiguration | undefined) | undefined;
	readonly AutoScalingGroups?: (string[] | undefined) | undefined;
	readonly BlueGreenDeploymentConfiguration?: (BlueGreenDeploymentConfiguration | undefined) | undefined;
	readonly Deployment?: (Deployment | undefined) | undefined;
	readonly DeploymentConfigName?: (string | undefined) | undefined;
	readonly DeploymentGroupName?: (string | undefined) | undefined;
	readonly DeploymentStyle?: (DeploymentStyle | undefined) | undefined;
	readonly Ec2TagFilters?: (EC2TagFilter[] | undefined) | undefined;
	readonly Ec2TagSet?: (EC2TagSet | undefined) | undefined;
	readonly ECSServices?: (ECSService[] | undefined) | undefined;
	readonly LoadBalancerInfo?: (LoadBalancerInfo | undefined) | undefined;
	readonly OnPremisesInstanceTagFilters?: (TagFilter[] | undefined) | undefined;
	readonly OnPremisesTagSet?: (OnPremisesTagSet | undefined) | undefined;
	readonly OutdatedInstancesStrategy?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly TriggerConfigurations?: (TriggerConfig[] | undefined) | undefined;
	readonly LogicalId: string;
}
export interface MinimumHealthyHosts {
	readonly Type: string;
	readonly Value: number;
}
export interface TimeBasedCanary {
	readonly CanaryInterval: number;
	readonly CanaryPercentage: number;
}
export interface TimeBasedLinear {
	readonly LinearInterval: number;
	readonly LinearPercentage: number;
}
export interface TrafficRoutingConfig {
	readonly TimeBasedCanary?: (TimeBasedCanary | undefined) | undefined;
	readonly TimeBasedLinear?: (TimeBasedLinear | undefined) | undefined;
	readonly Type: string;
}
export interface Alarm {
	readonly Name?: (string | undefined) | undefined;
}
export interface AlarmConfiguration {
	readonly Alarms?: (Alarm[] | undefined) | undefined;
	readonly Enabled?: (boolean | undefined) | undefined;
	readonly IgnorePollAlarmFailure?: (boolean | undefined) | undefined;
}
export interface AutoRollbackConfiguration {
	readonly Enabled?: (boolean | undefined) | undefined;
	readonly Events?: (string[] | undefined) | undefined;
}
export interface BlueGreenDeploymentConfiguration {
	readonly DeploymentReadyOption?: (DeploymentReadyOption | undefined) | undefined;
	readonly GreenFleetProvisioningOption?: (GreenFleetProvisioningOption | undefined) | undefined;
	readonly TerminateBlueInstancesOnDeploymentSuccess?: (BlueInstanceTerminationOption | undefined) | undefined;
}
export interface BlueInstanceTerminationOption {
	readonly Action?: (string | undefined) | undefined;
	readonly TerminationWaitTimeInMinutes?: (number | undefined) | undefined;
}
export interface Deployment {
	readonly Description?: (string | undefined) | undefined;
	readonly IgnoreApplicationStopFailures?: (boolean | undefined) | undefined;
	readonly Revision: RevisionLocation;
}
export interface DeploymentReadyOption {
	readonly ActionOnTimeout?: (string | undefined) | undefined;
	readonly WaitTimeInMinutes?: (number | undefined) | undefined;
}
export interface DeploymentStyle {
	readonly DeploymentOption?: (string | undefined) | undefined;
	readonly DeploymentType?: (string | undefined) | undefined;
}
export interface EC2TagFilter {
	readonly Key?: (string | undefined) | undefined;
	readonly Type?: (string | undefined) | undefined;
	readonly Value?: (string | undefined) | undefined;
}
export interface EC2TagSet {
	readonly Ec2TagSetList?: (EC2TagSetListObject[] | undefined) | undefined;
}
export interface EC2TagSetListObject {
	readonly Ec2TagGroup?: (EC2TagFilter[] | undefined) | undefined;
}
export interface ECSService {
	readonly ClusterName: string;
	readonly ServiceName: string;
}
export interface ELBInfo {
	readonly Name?: (string | undefined) | undefined;
}
export interface GitHubLocation {
	readonly CommitId: string;
	readonly Repository: string;
}
export interface GreenFleetProvisioningOption {
	readonly Action?: (string | undefined) | undefined;
}
export interface LoadBalancerInfo {
	readonly ElbInfoList?: (ELBInfo[] | undefined) | undefined;
	readonly TargetGroupInfoList?: (TargetGroupInfo[] | undefined) | undefined;
	readonly TargetGroupPairInfoList?: (TargetGroupPairInfo[] | undefined) | undefined;
}
export interface OnPremisesTagSet {
	readonly OnPremisesTagSetList?: (OnPremisesTagSetListObject[] | undefined) | undefined;
}
export interface OnPremisesTagSetListObject {
	readonly OnPremisesTagGroup?: (TagFilter[] | undefined) | undefined;
}
export interface RevisionLocation {
	readonly GitHubLocation?: (GitHubLocation | undefined) | undefined;
	readonly RevisionType?: (string | undefined) | undefined;
	readonly S3Location?: (S3Location | undefined) | undefined;
}
export interface S3Location {
	readonly Bucket: string;
	readonly BundleType?: (string | undefined) | undefined;
	readonly ETag?: (string | undefined) | undefined;
	readonly Key: string;
	readonly Version?: (string | undefined) | undefined;
}
export interface TagFilter {
	readonly Key?: (string | undefined) | undefined;
	readonly Type?: (string | undefined) | undefined;
	readonly Value?: (string | undefined) | undefined;
}
export interface TargetGroupInfo {
	readonly Name?: (string | undefined) | undefined;
}
export interface TargetGroupPairInfo {
	readonly ProdTrafficRoute?: (TrafficRoute | undefined) | undefined;
	readonly TargetGroups?: (TargetGroupInfo[] | undefined) | undefined;
	readonly TestTrafficRoute?: (TrafficRoute | undefined) | undefined;
}
export interface TrafficRoute {
	readonly ListenerArns?: (string[] | undefined) | undefined;
}
export interface TriggerConfig {
	readonly TriggerEvents?: (string[] | undefined) | undefined;
	readonly TriggerName?: (string | undefined) | undefined;
	readonly TriggerTargetArn?: (string | undefined) | undefined;
}
export default {
	Application: Application,
	DeploymentConfig: DeploymentConfig,
	DeploymentGroup: DeploymentGroup,
};

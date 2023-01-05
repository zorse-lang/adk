import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Application extends CfnResource<ApplicationComponentInputs> implements ApplicationComponentOutputs {
	constructor(entity: ADKEntity, options: ApplicationComponentInputs) {
		super(entity, options.LogicalId, "AWS::CodeDeploy::Application", options);
	}
}
export interface ApplicationComponentOutputs {}
export interface ApplicationComponentInputs {
	readonly ApplicationName?: string | undefined;
	readonly ComputePlatform?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
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
	readonly ComputePlatform?: string | undefined;
	readonly DeploymentConfigName?: string | undefined;
	readonly MinimumHealthyHosts?: MinimumHealthyHosts | undefined;
	readonly TrafficRoutingConfig?: TrafficRoutingConfig | undefined;
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
	readonly AlarmConfiguration?: AlarmConfiguration | undefined;
	readonly AutoRollbackConfiguration?: AutoRollbackConfiguration | undefined;
	readonly AutoScalingGroups?: string[] | undefined;
	readonly BlueGreenDeploymentConfiguration?: BlueGreenDeploymentConfiguration | undefined;
	readonly Deployment?: Deployment | undefined;
	readonly DeploymentConfigName?: string | undefined;
	readonly DeploymentGroupName?: string | undefined;
	readonly DeploymentStyle?: DeploymentStyle | undefined;
	readonly Ec2TagFilters?: EC2TagFilter[] | undefined;
	readonly Ec2TagSet?: EC2TagSet | undefined;
	readonly ECSServices?: ECSService[] | undefined;
	readonly LoadBalancerInfo?: LoadBalancerInfo | undefined;
	readonly OnPremisesInstanceTagFilters?: TagFilter[] | undefined;
	readonly OnPremisesTagSet?: OnPremisesTagSet | undefined;
	readonly OutdatedInstancesStrategy?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly TriggerConfigurations?: TriggerConfig[] | undefined;
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
	readonly TimeBasedCanary?: TimeBasedCanary | undefined;
	readonly TimeBasedLinear?: TimeBasedLinear | undefined;
	readonly Type: string;
}
export interface Alarm {
	readonly Name?: string | undefined;
}
export interface AlarmConfiguration {
	readonly Alarms?: Alarm[] | undefined;
	readonly Enabled?: boolean | undefined;
	readonly IgnorePollAlarmFailure?: boolean | undefined;
}
export interface AutoRollbackConfiguration {
	readonly Enabled?: boolean | undefined;
	readonly Events?: string[] | undefined;
}
export interface BlueGreenDeploymentConfiguration {
	readonly DeploymentReadyOption?: DeploymentReadyOption | undefined;
	readonly GreenFleetProvisioningOption?: GreenFleetProvisioningOption | undefined;
	readonly TerminateBlueInstancesOnDeploymentSuccess?: BlueInstanceTerminationOption | undefined;
}
export interface BlueInstanceTerminationOption {
	readonly Action?: string | undefined;
	readonly TerminationWaitTimeInMinutes?: number | undefined;
}
export interface Deployment {
	readonly Description?: string | undefined;
	readonly IgnoreApplicationStopFailures?: boolean | undefined;
	readonly Revision: RevisionLocation;
}
export interface DeploymentReadyOption {
	readonly ActionOnTimeout?: string | undefined;
	readonly WaitTimeInMinutes?: number | undefined;
}
export interface DeploymentStyle {
	readonly DeploymentOption?: string | undefined;
	readonly DeploymentType?: string | undefined;
}
export interface EC2TagFilter {
	readonly Key?: string | undefined;
	readonly Type?: string | undefined;
	readonly Value?: string | undefined;
}
export interface EC2TagSet {
	readonly Ec2TagSetList?: EC2TagSetListObject[] | undefined;
}
export interface EC2TagSetListObject {
	readonly Ec2TagGroup?: EC2TagFilter[] | undefined;
}
export interface ECSService {
	readonly ClusterName: string;
	readonly ServiceName: string;
}
export interface ELBInfo {
	readonly Name?: string | undefined;
}
export interface GitHubLocation {
	readonly CommitId: string;
	readonly Repository: string;
}
export interface GreenFleetProvisioningOption {
	readonly Action?: string | undefined;
}
export interface LoadBalancerInfo {
	readonly ElbInfoList?: ELBInfo[] | undefined;
	readonly TargetGroupInfoList?: TargetGroupInfo[] | undefined;
	readonly TargetGroupPairInfoList?: TargetGroupPairInfo[] | undefined;
}
export interface OnPremisesTagSet {
	readonly OnPremisesTagSetList?: OnPremisesTagSetListObject[] | undefined;
}
export interface OnPremisesTagSetListObject {
	readonly OnPremisesTagGroup?: TagFilter[] | undefined;
}
export interface RevisionLocation {
	readonly GitHubLocation?: GitHubLocation | undefined;
	readonly RevisionType?: string | undefined;
	readonly S3Location?: S3Location | undefined;
}
export interface S3Location {
	readonly Bucket: string;
	readonly BundleType?: string | undefined;
	readonly ETag?: string | undefined;
	readonly Key: string;
	readonly Version?: string | undefined;
}
export interface TagFilter {
	readonly Key?: string | undefined;
	readonly Type?: string | undefined;
	readonly Value?: string | undefined;
}
export interface TargetGroupInfo {
	readonly Name?: string | undefined;
}
export interface TargetGroupPairInfo {
	readonly ProdTrafficRoute?: TrafficRoute | undefined;
	readonly TargetGroups?: TargetGroupInfo[] | undefined;
	readonly TestTrafficRoute?: TrafficRoute | undefined;
}
export interface TrafficRoute {
	readonly ListenerArns?: string[] | undefined;
}
export interface TriggerConfig {
	readonly TriggerEvents?: string[] | undefined;
	readonly TriggerName?: string | undefined;
	readonly TriggerTargetArn?: string | undefined;
}
export default {
	Application: Application,
	DeploymentConfig: DeploymentConfig,
	DeploymentGroup: DeploymentGroup,
};

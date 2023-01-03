import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Cluster extends CfnResource<ClusterComponentInputs> implements ClusterComponentOutputs {
	constructor(entity: ADKEntity, options: ClusterComponentInputs) {
		super(entity, options.LogicalId, "AWS::EMR::Cluster", options);
	}
	public readonly MasterPublicDns: string;
}
export interface ClusterComponentOutputs {
	readonly MasterPublicDns: string;
}
export interface ClusterComponentInputs {
	readonly Instances: JobFlowInstancesConfig;
	readonly JobFlowRole: string;
	readonly Name: string;
	readonly ServiceRole: string;
	readonly AdditionalInfo?: (any | undefined) | undefined;
	readonly Applications?: (Application[] | undefined) | undefined;
	readonly AutoScalingRole?: (string | undefined) | undefined;
	readonly AutoTerminationPolicy?: (AutoTerminationPolicy | undefined) | undefined;
	readonly BootstrapActions?: (BootstrapActionConfig[] | undefined) | undefined;
	readonly Configurations?: (Configuration[] | undefined) | undefined;
	readonly CustomAmiId?: (string | undefined) | undefined;
	readonly EbsRootVolumeSize?: (number | undefined) | undefined;
	readonly KerberosAttributes?: (KerberosAttributes | undefined) | undefined;
	readonly LogEncryptionKmsKeyId?: (string | undefined) | undefined;
	readonly LogUri?: (string | undefined) | undefined;
	readonly ManagedScalingPolicy?: (ManagedScalingPolicy | undefined) | undefined;
	readonly OSReleaseLabel?: (string | undefined) | undefined;
	readonly ReleaseLabel?: (string | undefined) | undefined;
	readonly ScaleDownBehavior?: (string | undefined) | undefined;
	readonly SecurityConfiguration?: (string | undefined) | undefined;
	readonly StepConcurrencyLevel?: (number | undefined) | undefined;
	readonly Steps?: (StepConfig[] | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly VisibleToAllUsers?: (boolean | undefined) | undefined;
	readonly LogicalId: string;
}
export class InstanceFleetConfig
	extends CfnResource<InstanceFleetConfigComponentInputs>
	implements InstanceFleetConfigComponentOutputs
{
	constructor(entity: ADKEntity, options: InstanceFleetConfigComponentInputs) {
		super(entity, options.LogicalId, "AWS::EMR::InstanceFleetConfig", options);
	}
}
export interface InstanceFleetConfigComponentOutputs {}
export interface InstanceFleetConfigComponentInputs {
	readonly ClusterId: string;
	readonly InstanceFleetType: string;
	readonly InstanceTypeConfigs?: (InstanceTypeConfig[] | undefined) | undefined;
	readonly LaunchSpecifications?: (InstanceFleetProvisioningSpecifications | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly TargetOnDemandCapacity?: (number | undefined) | undefined;
	readonly TargetSpotCapacity?: (number | undefined) | undefined;
	readonly LogicalId: string;
}
export class InstanceGroupConfig
	extends CfnResource<InstanceGroupConfigComponentInputs>
	implements InstanceGroupConfigComponentOutputs
{
	constructor(entity: ADKEntity, options: InstanceGroupConfigComponentInputs) {
		super(entity, options.LogicalId, "AWS::EMR::InstanceGroupConfig", options);
	}
}
export interface InstanceGroupConfigComponentOutputs {}
export interface InstanceGroupConfigComponentInputs {
	readonly InstanceCount: number;
	readonly InstanceRole: string;
	readonly InstanceType: string;
	readonly JobFlowId: string;
	readonly AutoScalingPolicy?: (AutoScalingPolicy | undefined) | undefined;
	readonly BidPrice?: (string | undefined) | undefined;
	readonly Configurations?: (Configuration[] | undefined) | undefined;
	readonly CustomAmiId?: (string | undefined) | undefined;
	readonly EbsConfiguration?: (EbsConfiguration | undefined) | undefined;
	readonly Market?: (string | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class SecurityConfiguration
	extends CfnResource<SecurityConfigurationComponentInputs>
	implements SecurityConfigurationComponentOutputs
{
	constructor(entity: ADKEntity, options: SecurityConfigurationComponentInputs) {
		super(entity, options.LogicalId, "AWS::EMR::SecurityConfiguration", options);
	}
}
export interface SecurityConfigurationComponentOutputs {}
export interface SecurityConfigurationComponentInputs {
	readonly SecurityConfiguration: any;
	readonly Name?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class Step extends CfnResource<StepComponentInputs> implements StepComponentOutputs {
	constructor(entity: ADKEntity, options: StepComponentInputs) {
		super(entity, options.LogicalId, "AWS::EMR::Step", options);
	}
}
export interface StepComponentOutputs {}
export interface StepComponentInputs {
	readonly ActionOnFailure: string;
	readonly HadoopJarStep: HadoopJarStepConfig;
	readonly JobFlowId: string;
	readonly Name: string;
	readonly LogicalId: string;
}
export class Studio extends CfnResource<StudioComponentInputs> implements StudioComponentOutputs {
	constructor(entity: ADKEntity, options: StudioComponentInputs) {
		super(entity, options.LogicalId, "AWS::EMR::Studio", options);
	}
	public readonly Arn: string;
	public readonly StudioId: string;
	public readonly Url: string;
}
export interface StudioComponentOutputs {
	readonly Arn: string;
	readonly StudioId: string;
	readonly Url: string;
}
export interface StudioComponentInputs {
	readonly AuthMode: string;
	readonly DefaultS3Location: string;
	readonly EngineSecurityGroupId: string;
	readonly Name: string;
	readonly ServiceRole: string;
	readonly SubnetIds: string[];
	readonly VpcId: string;
	readonly WorkspaceSecurityGroupId: string;
	readonly Description?: (string | undefined) | undefined;
	readonly IdpAuthUrl?: (string | undefined) | undefined;
	readonly IdpRelayStateParameterName?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly UserRole?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class StudioSessionMapping
	extends CfnResource<StudioSessionMappingComponentInputs>
	implements StudioSessionMappingComponentOutputs
{
	constructor(entity: ADKEntity, options: StudioSessionMappingComponentInputs) {
		super(entity, options.LogicalId, "AWS::EMR::StudioSessionMapping", options);
	}
}
export interface StudioSessionMappingComponentOutputs {}
export interface StudioSessionMappingComponentInputs {
	readonly IdentityName: string;
	readonly IdentityType: string;
	readonly SessionPolicyArn: string;
	readonly StudioId: string;
	readonly LogicalId: string;
}
export interface Application {
	readonly AdditionalInfo?: ({ [key: string]: string } | undefined) | undefined;
	readonly Args?: (string[] | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly Version?: (string | undefined) | undefined;
}
export interface AutoScalingPolicy {
	readonly Constraints: ScalingConstraints;
	readonly Rules: ScalingRule[];
}
export interface AutoTerminationPolicy {
	readonly IdleTimeout?: (number | undefined) | undefined;
}
export interface BootstrapActionConfig {
	readonly Name: string;
	readonly ScriptBootstrapAction: ScriptBootstrapActionConfig;
}
export interface CloudWatchAlarmDefinition {
	readonly ComparisonOperator: string;
	readonly Dimensions?: (MetricDimension[] | undefined) | undefined;
	readonly EvaluationPeriods?: (number | undefined) | undefined;
	readonly MetricName: string;
	readonly Namespace?: (string | undefined) | undefined;
	readonly Period: number;
	readonly Statistic?: (string | undefined) | undefined;
	readonly Threshold: number;
	readonly Unit?: (string | undefined) | undefined;
}
export interface ComputeLimits {
	readonly MaximumCapacityUnits: number;
	readonly MaximumCoreCapacityUnits?: (number | undefined) | undefined;
	readonly MaximumOnDemandCapacityUnits?: (number | undefined) | undefined;
	readonly MinimumCapacityUnits: number;
	readonly UnitType: string;
}
export interface Configuration {
	readonly Classification?: (string | undefined) | undefined;
	readonly ConfigurationProperties?: ({ [key: string]: string } | undefined) | undefined;
	readonly Configurations?: (Configuration[] | undefined) | undefined;
}
export interface EbsBlockDeviceConfig {
	readonly VolumeSpecification: VolumeSpecification;
	readonly VolumesPerInstance?: (number | undefined) | undefined;
}
export interface EbsConfiguration {
	readonly EbsBlockDeviceConfigs?: (EbsBlockDeviceConfig[] | undefined) | undefined;
	readonly EbsOptimized?: (boolean | undefined) | undefined;
}
export interface HadoopJarStepConfig {
	readonly Args?: (string[] | undefined) | undefined;
	readonly Jar: string;
	readonly MainClass?: (string | undefined) | undefined;
	readonly StepProperties?: (KeyValue[] | undefined) | undefined;
}
export interface InstanceFleetConfig {
	readonly InstanceTypeConfigs?: (InstanceTypeConfig[] | undefined) | undefined;
	readonly LaunchSpecifications?: (InstanceFleetProvisioningSpecifications | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly TargetOnDemandCapacity?: (number | undefined) | undefined;
	readonly TargetSpotCapacity?: (number | undefined) | undefined;
}
export interface InstanceFleetProvisioningSpecifications {
	readonly OnDemandSpecification?: (OnDemandProvisioningSpecification | undefined) | undefined;
	readonly SpotSpecification?: (SpotProvisioningSpecification | undefined) | undefined;
}
export interface InstanceGroupConfig {
	readonly AutoScalingPolicy?: (AutoScalingPolicy | undefined) | undefined;
	readonly BidPrice?: (string | undefined) | undefined;
	readonly Configurations?: (Configuration[] | undefined) | undefined;
	readonly CustomAmiId?: (string | undefined) | undefined;
	readonly EbsConfiguration?: (EbsConfiguration | undefined) | undefined;
	readonly InstanceCount: number;
	readonly InstanceType: string;
	readonly Market?: (string | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
}
export interface InstanceTypeConfig {
	readonly BidPrice?: (string | undefined) | undefined;
	readonly BidPriceAsPercentageOfOnDemandPrice?: (number | undefined) | undefined;
	readonly Configurations?: (Configuration[] | undefined) | undefined;
	readonly CustomAmiId?: (string | undefined) | undefined;
	readonly EbsConfiguration?: (EbsConfiguration | undefined) | undefined;
	readonly InstanceType: string;
	readonly WeightedCapacity?: (number | undefined) | undefined;
}
export interface JobFlowInstancesConfig {
	readonly AdditionalMasterSecurityGroups?: (string[] | undefined) | undefined;
	readonly AdditionalSlaveSecurityGroups?: (string[] | undefined) | undefined;
	readonly CoreInstanceFleet?: (InstanceFleetConfig | undefined) | undefined;
	readonly CoreInstanceGroup?: (InstanceGroupConfig | undefined) | undefined;
	readonly Ec2KeyName?: (string | undefined) | undefined;
	readonly Ec2SubnetId?: (string | undefined) | undefined;
	readonly Ec2SubnetIds?: (string[] | undefined) | undefined;
	readonly EmrManagedMasterSecurityGroup?: (string | undefined) | undefined;
	readonly EmrManagedSlaveSecurityGroup?: (string | undefined) | undefined;
	readonly HadoopVersion?: (string | undefined) | undefined;
	readonly KeepJobFlowAliveWhenNoSteps?: (boolean | undefined) | undefined;
	readonly MasterInstanceFleet?: (InstanceFleetConfig | undefined) | undefined;
	readonly MasterInstanceGroup?: (InstanceGroupConfig | undefined) | undefined;
	readonly Placement?: (PlacementType | undefined) | undefined;
	readonly ServiceAccessSecurityGroup?: (string | undefined) | undefined;
	readonly TaskInstanceFleets?: (InstanceFleetConfig[] | undefined) | undefined;
	readonly TaskInstanceGroups?: (InstanceGroupConfig[] | undefined) | undefined;
	readonly TerminationProtected?: (boolean | undefined) | undefined;
}
export interface KerberosAttributes {
	readonly ADDomainJoinPassword?: (string | undefined) | undefined;
	readonly ADDomainJoinUser?: (string | undefined) | undefined;
	readonly CrossRealmTrustPrincipalPassword?: (string | undefined) | undefined;
	readonly KdcAdminPassword: string;
	readonly Realm: string;
}
export interface KeyValue {
	readonly Key?: (string | undefined) | undefined;
	readonly Value?: (string | undefined) | undefined;
}
export interface ManagedScalingPolicy {
	readonly ComputeLimits?: (ComputeLimits | undefined) | undefined;
}
export interface MetricDimension {
	readonly Key: string;
	readonly Value: string;
}
export interface OnDemandProvisioningSpecification {
	readonly AllocationStrategy: string;
}
export interface PlacementType {
	readonly AvailabilityZone: string;
}
export interface ScalingAction {
	readonly Market?: (string | undefined) | undefined;
	readonly SimpleScalingPolicyConfiguration: SimpleScalingPolicyConfiguration;
}
export interface ScalingConstraints {
	readonly MaxCapacity: number;
	readonly MinCapacity: number;
}
export interface ScalingRule {
	readonly Action: ScalingAction;
	readonly Description?: (string | undefined) | undefined;
	readonly Name: string;
	readonly Trigger: ScalingTrigger;
}
export interface ScalingTrigger {
	readonly CloudWatchAlarmDefinition: CloudWatchAlarmDefinition;
}
export interface ScriptBootstrapActionConfig {
	readonly Args?: (string[] | undefined) | undefined;
	readonly Path: string;
}
export interface SimpleScalingPolicyConfiguration {
	readonly AdjustmentType?: (string | undefined) | undefined;
	readonly CoolDown?: (number | undefined) | undefined;
	readonly ScalingAdjustment: number;
}
export interface SpotProvisioningSpecification {
	readonly AllocationStrategy?: (string | undefined) | undefined;
	readonly BlockDurationMinutes?: (number | undefined) | undefined;
	readonly TimeoutAction: string;
	readonly TimeoutDurationMinutes: number;
}
export interface StepConfig {
	readonly ActionOnFailure?: (string | undefined) | undefined;
	readonly HadoopJarStep: HadoopJarStepConfig;
	readonly Name: string;
}
export interface VolumeSpecification {
	readonly Iops?: (number | undefined) | undefined;
	readonly SizeInGB: number;
	readonly VolumeType: string;
}
export default {
	Cluster: Cluster,
	InstanceFleetConfig: InstanceFleetConfig,
	InstanceGroupConfig: InstanceGroupConfig,
	SecurityConfiguration: SecurityConfiguration,
	Step: Step,
	Studio: Studio,
	StudioSessionMapping: StudioSessionMapping,
};

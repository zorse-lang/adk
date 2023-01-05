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
	readonly AdditionalInfo?: any | undefined;
	readonly Applications?: Application[] | undefined;
	readonly AutoScalingRole?: string | undefined;
	readonly AutoTerminationPolicy?: AutoTerminationPolicy | undefined;
	readonly BootstrapActions?: BootstrapActionConfig[] | undefined;
	readonly Configurations?: Configuration[] | undefined;
	readonly CustomAmiId?: string | undefined;
	readonly EbsRootVolumeSize?: number | undefined;
	readonly KerberosAttributes?: KerberosAttributes | undefined;
	readonly LogEncryptionKmsKeyId?: string | undefined;
	readonly LogUri?: string | undefined;
	readonly ManagedScalingPolicy?: ManagedScalingPolicy | undefined;
	readonly OSReleaseLabel?: string | undefined;
	readonly ReleaseLabel?: string | undefined;
	readonly ScaleDownBehavior?: string | undefined;
	readonly SecurityConfiguration?: string | undefined;
	readonly StepConcurrencyLevel?: number | undefined;
	readonly Steps?: StepConfig[] | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly VisibleToAllUsers?: boolean | undefined;
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
	readonly InstanceTypeConfigs?: InstanceTypeConfig[] | undefined;
	readonly LaunchSpecifications?: InstanceFleetProvisioningSpecifications | undefined;
	readonly Name?: string | undefined;
	readonly TargetOnDemandCapacity?: number | undefined;
	readonly TargetSpotCapacity?: number | undefined;
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
	readonly AutoScalingPolicy?: AutoScalingPolicy | undefined;
	readonly BidPrice?: string | undefined;
	readonly Configurations?: Configuration[] | undefined;
	readonly CustomAmiId?: string | undefined;
	readonly EbsConfiguration?: EbsConfiguration | undefined;
	readonly Market?: string | undefined;
	readonly Name?: string | undefined;
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
	readonly Name?: string | undefined;
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
	readonly Description?: string | undefined;
	readonly IdpAuthUrl?: string | undefined;
	readonly IdpRelayStateParameterName?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly UserRole?: string | undefined;
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
	readonly AdditionalInfo?: { [key: string]: string } | undefined;
	readonly Args?: string[] | undefined;
	readonly Name?: string | undefined;
	readonly Version?: string | undefined;
}
export interface AutoScalingPolicy {
	readonly Constraints: ScalingConstraints;
	readonly Rules: ScalingRule[];
}
export interface AutoTerminationPolicy {
	readonly IdleTimeout?: number | undefined;
}
export interface BootstrapActionConfig {
	readonly Name: string;
	readonly ScriptBootstrapAction: ScriptBootstrapActionConfig;
}
export interface CloudWatchAlarmDefinition {
	readonly ComparisonOperator: string;
	readonly Dimensions?: MetricDimension[] | undefined;
	readonly EvaluationPeriods?: number | undefined;
	readonly MetricName: string;
	readonly Namespace?: string | undefined;
	readonly Period: number;
	readonly Statistic?: string | undefined;
	readonly Threshold: number;
	readonly Unit?: string | undefined;
}
export interface ComputeLimits {
	readonly MaximumCapacityUnits: number;
	readonly MaximumCoreCapacityUnits?: number | undefined;
	readonly MaximumOnDemandCapacityUnits?: number | undefined;
	readonly MinimumCapacityUnits: number;
	readonly UnitType: string;
}
export interface Configuration {
	readonly Classification?: string | undefined;
	readonly ConfigurationProperties?: { [key: string]: string } | undefined;
	readonly Configurations?: Configuration[] | undefined;
}
export interface EbsBlockDeviceConfig {
	readonly VolumeSpecification: VolumeSpecification;
	readonly VolumesPerInstance?: number | undefined;
}
export interface EbsConfiguration {
	readonly EbsBlockDeviceConfigs?: EbsBlockDeviceConfig[] | undefined;
	readonly EbsOptimized?: boolean | undefined;
}
export interface HadoopJarStepConfig {
	readonly Args?: string[] | undefined;
	readonly Jar: string;
	readonly MainClass?: string | undefined;
	readonly StepProperties?: KeyValue[] | undefined;
}
export interface InstanceFleetConfig {
	readonly InstanceTypeConfigs?: InstanceTypeConfig[] | undefined;
	readonly LaunchSpecifications?: InstanceFleetProvisioningSpecifications | undefined;
	readonly Name?: string | undefined;
	readonly TargetOnDemandCapacity?: number | undefined;
	readonly TargetSpotCapacity?: number | undefined;
}
export interface InstanceFleetProvisioningSpecifications {
	readonly OnDemandSpecification?: OnDemandProvisioningSpecification | undefined;
	readonly SpotSpecification?: SpotProvisioningSpecification | undefined;
}
export interface InstanceGroupConfig {
	readonly AutoScalingPolicy?: AutoScalingPolicy | undefined;
	readonly BidPrice?: string | undefined;
	readonly Configurations?: Configuration[] | undefined;
	readonly CustomAmiId?: string | undefined;
	readonly EbsConfiguration?: EbsConfiguration | undefined;
	readonly InstanceCount: number;
	readonly InstanceType: string;
	readonly Market?: string | undefined;
	readonly Name?: string | undefined;
}
export interface InstanceTypeConfig {
	readonly BidPrice?: string | undefined;
	readonly BidPriceAsPercentageOfOnDemandPrice?: number | undefined;
	readonly Configurations?: Configuration[] | undefined;
	readonly CustomAmiId?: string | undefined;
	readonly EbsConfiguration?: EbsConfiguration | undefined;
	readonly InstanceType: string;
	readonly WeightedCapacity?: number | undefined;
}
export interface JobFlowInstancesConfig {
	readonly AdditionalMasterSecurityGroups?: string[] | undefined;
	readonly AdditionalSlaveSecurityGroups?: string[] | undefined;
	readonly CoreInstanceFleet?: InstanceFleetConfig | undefined;
	readonly CoreInstanceGroup?: InstanceGroupConfig | undefined;
	readonly Ec2KeyName?: string | undefined;
	readonly Ec2SubnetId?: string | undefined;
	readonly Ec2SubnetIds?: string[] | undefined;
	readonly EmrManagedMasterSecurityGroup?: string | undefined;
	readonly EmrManagedSlaveSecurityGroup?: string | undefined;
	readonly HadoopVersion?: string | undefined;
	readonly KeepJobFlowAliveWhenNoSteps?: boolean | undefined;
	readonly MasterInstanceFleet?: InstanceFleetConfig | undefined;
	readonly MasterInstanceGroup?: InstanceGroupConfig | undefined;
	readonly Placement?: PlacementType | undefined;
	readonly ServiceAccessSecurityGroup?: string | undefined;
	readonly TaskInstanceFleets?: InstanceFleetConfig[] | undefined;
	readonly TaskInstanceGroups?: InstanceGroupConfig[] | undefined;
	readonly TerminationProtected?: boolean | undefined;
}
export interface KerberosAttributes {
	readonly ADDomainJoinPassword?: string | undefined;
	readonly ADDomainJoinUser?: string | undefined;
	readonly CrossRealmTrustPrincipalPassword?: string | undefined;
	readonly KdcAdminPassword: string;
	readonly Realm: string;
}
export interface KeyValue {
	readonly Key?: string | undefined;
	readonly Value?: string | undefined;
}
export interface ManagedScalingPolicy {
	readonly ComputeLimits?: ComputeLimits | undefined;
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
	readonly Market?: string | undefined;
	readonly SimpleScalingPolicyConfiguration: SimpleScalingPolicyConfiguration;
}
export interface ScalingConstraints {
	readonly MaxCapacity: number;
	readonly MinCapacity: number;
}
export interface ScalingRule {
	readonly Action: ScalingAction;
	readonly Description?: string | undefined;
	readonly Name: string;
	readonly Trigger: ScalingTrigger;
}
export interface ScalingTrigger {
	readonly CloudWatchAlarmDefinition: CloudWatchAlarmDefinition;
}
export interface ScriptBootstrapActionConfig {
	readonly Args?: string[] | undefined;
	readonly Path: string;
}
export interface SimpleScalingPolicyConfiguration {
	readonly AdjustmentType?: string | undefined;
	readonly CoolDown?: number | undefined;
	readonly ScalingAdjustment: number;
}
export interface SpotProvisioningSpecification {
	readonly AllocationStrategy?: string | undefined;
	readonly BlockDurationMinutes?: number | undefined;
	readonly TimeoutAction: string;
	readonly TimeoutDurationMinutes: number;
}
export interface StepConfig {
	readonly ActionOnFailure?: string | undefined;
	readonly HadoopJarStep: HadoopJarStepConfig;
	readonly Name: string;
}
export interface VolumeSpecification {
	readonly Iops?: number | undefined;
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

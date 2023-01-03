import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class AutoScalingGroup
	extends CfnResource<AutoScalingGroupComponentInputs>
	implements AutoScalingGroupComponentOutputs
{
	constructor(entity: ADKEntity, options: AutoScalingGroupComponentInputs) {
		super(entity, options.LogicalId, "AWS::AutoScaling::AutoScalingGroup", options);
	}
}
export interface AutoScalingGroupComponentOutputs {}
export interface AutoScalingGroupComponentInputs {
	readonly MaxSize: string;
	readonly MinSize: string;
	readonly AutoScalingGroupName?: (string | undefined) | undefined;
	readonly AvailabilityZones?: (string[] | undefined) | undefined;
	readonly CapacityRebalance?: (boolean | undefined) | undefined;
	readonly Context?: (string | undefined) | undefined;
	readonly Cooldown?: (string | undefined) | undefined;
	readonly DefaultInstanceWarmup?: (number | undefined) | undefined;
	readonly DesiredCapacity?: (string | undefined) | undefined;
	readonly DesiredCapacityType?: (string | undefined) | undefined;
	readonly HealthCheckGracePeriod?: (number | undefined) | undefined;
	readonly HealthCheckType?: (string | undefined) | undefined;
	readonly InstanceId?: (string | undefined) | undefined;
	readonly LaunchConfigurationName?: (string | undefined) | undefined;
	readonly LaunchTemplate?: (LaunchTemplateSpecification | undefined) | undefined;
	readonly LifecycleHookSpecificationList?: (LifecycleHookSpecification[] | undefined) | undefined;
	readonly LoadBalancerNames?: (string[] | undefined) | undefined;
	readonly MaxInstanceLifetime?: (number | undefined) | undefined;
	readonly MetricsCollection?: (MetricsCollection[] | undefined) | undefined;
	readonly MixedInstancesPolicy?: (MixedInstancesPolicy | undefined) | undefined;
	readonly NewInstancesProtectedFromScaleIn?: (boolean | undefined) | undefined;
	readonly NotificationConfigurations?: (NotificationConfiguration[] | undefined) | undefined;
	readonly PlacementGroup?: (string | undefined) | undefined;
	readonly ServiceLinkedRoleARN?: (string | undefined) | undefined;
	readonly Tags?: (Tag[] | undefined) | undefined;
	readonly TargetGroupARNs?: (string[] | undefined) | undefined;
	readonly TerminationPolicies?: (string[] | undefined) | undefined;
	readonly VPCZoneIdentifier?: (string[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class LaunchConfiguration
	extends CfnResource<LaunchConfigurationComponentInputs>
	implements LaunchConfigurationComponentOutputs
{
	constructor(entity: ADKEntity, options: LaunchConfigurationComponentInputs) {
		super(entity, options.LogicalId, "AWS::AutoScaling::LaunchConfiguration", options);
	}
}
export interface LaunchConfigurationComponentOutputs {}
export interface LaunchConfigurationComponentInputs {
	readonly ImageId: string;
	readonly InstanceType: string;
	readonly AssociatePublicIpAddress?: (boolean | undefined) | undefined;
	readonly BlockDeviceMappings?: (BlockDeviceMapping[] | undefined) | undefined;
	readonly ClassicLinkVPCId?: (string | undefined) | undefined;
	readonly ClassicLinkVPCSecurityGroups?: (string[] | undefined) | undefined;
	readonly EbsOptimized?: (boolean | undefined) | undefined;
	readonly IamInstanceProfile?: (string | undefined) | undefined;
	readonly InstanceId?: (string | undefined) | undefined;
	readonly InstanceMonitoring?: (boolean | undefined) | undefined;
	readonly KernelId?: (string | undefined) | undefined;
	readonly KeyName?: (string | undefined) | undefined;
	readonly LaunchConfigurationName?: (string | undefined) | undefined;
	readonly MetadataOptions?: (MetadataOptions | undefined) | undefined;
	readonly PlacementTenancy?: (string | undefined) | undefined;
	readonly RamDiskId?: (string | undefined) | undefined;
	readonly SecurityGroups?: (string[] | undefined) | undefined;
	readonly SpotPrice?: (string | undefined) | undefined;
	readonly UserData?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class LifecycleHook extends CfnResource<LifecycleHookComponentInputs> implements LifecycleHookComponentOutputs {
	constructor(entity: ADKEntity, options: LifecycleHookComponentInputs) {
		super(entity, options.LogicalId, "AWS::AutoScaling::LifecycleHook", options);
	}
}
export interface LifecycleHookComponentOutputs {}
export interface LifecycleHookComponentInputs {
	readonly AutoScalingGroupName: string;
	readonly LifecycleTransition: string;
	readonly DefaultResult?: (string | undefined) | undefined;
	readonly HeartbeatTimeout?: (number | undefined) | undefined;
	readonly LifecycleHookName?: (string | undefined) | undefined;
	readonly NotificationMetadata?: (string | undefined) | undefined;
	readonly NotificationTargetARN?: (string | undefined) | undefined;
	readonly RoleARN?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class ScalingPolicy extends CfnResource<ScalingPolicyComponentInputs> implements ScalingPolicyComponentOutputs {
	constructor(entity: ADKEntity, options: ScalingPolicyComponentInputs) {
		super(entity, options.LogicalId, "AWS::AutoScaling::ScalingPolicy", options);
	}
	public readonly Arn: string;
	public readonly PolicyName: string;
}
export interface ScalingPolicyComponentOutputs {
	readonly Arn: string;
	readonly PolicyName: string;
}
export interface ScalingPolicyComponentInputs {
	readonly AutoScalingGroupName: string;
	readonly AdjustmentType?: (string | undefined) | undefined;
	readonly Cooldown?: (string | undefined) | undefined;
	readonly EstimatedInstanceWarmup?: (number | undefined) | undefined;
	readonly MetricAggregationType?: (string | undefined) | undefined;
	readonly MinAdjustmentMagnitude?: (number | undefined) | undefined;
	readonly PolicyType?: (string | undefined) | undefined;
	readonly PredictiveScalingConfiguration?: (PredictiveScalingConfiguration | undefined) | undefined;
	readonly ScalingAdjustment?: (number | undefined) | undefined;
	readonly StepAdjustments?: (StepAdjustment[] | undefined) | undefined;
	readonly TargetTrackingConfiguration?: (TargetTrackingConfiguration | undefined) | undefined;
	readonly LogicalId: string;
}
export class ScheduledAction
	extends CfnResource<ScheduledActionComponentInputs>
	implements ScheduledActionComponentOutputs
{
	constructor(entity: ADKEntity, options: ScheduledActionComponentInputs) {
		super(entity, options.LogicalId, "AWS::AutoScaling::ScheduledAction", options);
	}
	public readonly ScheduledActionName: string;
}
export interface ScheduledActionComponentOutputs {
	readonly ScheduledActionName: string;
}
export interface ScheduledActionComponentInputs {
	readonly AutoScalingGroupName: string;
	readonly DesiredCapacity?: (number | undefined) | undefined;
	readonly EndTime?: (string | undefined) | undefined;
	readonly MaxSize?: (number | undefined) | undefined;
	readonly MinSize?: (number | undefined) | undefined;
	readonly Recurrence?: (string | undefined) | undefined;
	readonly StartTime?: (string | undefined) | undefined;
	readonly TimeZone?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class WarmPool extends CfnResource<WarmPoolComponentInputs> implements WarmPoolComponentOutputs {
	constructor(entity: ADKEntity, options: WarmPoolComponentInputs) {
		super(entity, options.LogicalId, "AWS::AutoScaling::WarmPool", options);
	}
}
export interface WarmPoolComponentOutputs {}
export interface WarmPoolComponentInputs {
	readonly AutoScalingGroupName: string;
	readonly InstanceReusePolicy?: (InstanceReusePolicy | undefined) | undefined;
	readonly MaxGroupPreparedCapacity?: (number | undefined) | undefined;
	readonly MinSize?: (number | undefined) | undefined;
	readonly PoolState?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export interface AcceleratorCountRequest {
	readonly Max?: (number | undefined) | undefined;
	readonly Min?: (number | undefined) | undefined;
}
export interface AcceleratorTotalMemoryMiBRequest {
	readonly Max?: (number | undefined) | undefined;
	readonly Min?: (number | undefined) | undefined;
}
export interface BaselineEbsBandwidthMbpsRequest {
	readonly Max?: (number | undefined) | undefined;
	readonly Min?: (number | undefined) | undefined;
}
export interface InstanceRequirements {
	readonly AcceleratorCount?: (AcceleratorCountRequest | undefined) | undefined;
	readonly AcceleratorManufacturers?: (string[] | undefined) | undefined;
	readonly AcceleratorNames?: (string[] | undefined) | undefined;
	readonly AcceleratorTotalMemoryMiB?: (AcceleratorTotalMemoryMiBRequest | undefined) | undefined;
	readonly AcceleratorTypes?: (string[] | undefined) | undefined;
	readonly AllowedInstanceTypes?: (string[] | undefined) | undefined;
	readonly BareMetal?: (string | undefined) | undefined;
	readonly BaselineEbsBandwidthMbps?: (BaselineEbsBandwidthMbpsRequest | undefined) | undefined;
	readonly BurstablePerformance?: (string | undefined) | undefined;
	readonly CpuManufacturers?: (string[] | undefined) | undefined;
	readonly ExcludedInstanceTypes?: (string[] | undefined) | undefined;
	readonly InstanceGenerations?: (string[] | undefined) | undefined;
	readonly LocalStorage?: (string | undefined) | undefined;
	readonly LocalStorageTypes?: (string[] | undefined) | undefined;
	readonly MemoryGiBPerVCpu?: (MemoryGiBPerVCpuRequest | undefined) | undefined;
	readonly MemoryMiB?: (MemoryMiBRequest | undefined) | undefined;
	readonly NetworkBandwidthGbps?: (NetworkBandwidthGbpsRequest | undefined) | undefined;
	readonly NetworkInterfaceCount?: (NetworkInterfaceCountRequest | undefined) | undefined;
	readonly OnDemandMaxPricePercentageOverLowestPrice?: (number | undefined) | undefined;
	readonly RequireHibernateSupport?: (boolean | undefined) | undefined;
	readonly SpotMaxPricePercentageOverLowestPrice?: (number | undefined) | undefined;
	readonly TotalLocalStorageGB?: (TotalLocalStorageGBRequest | undefined) | undefined;
	readonly VCpuCount?: (VCpuCountRequest | undefined) | undefined;
}
export interface InstancesDistribution {
	readonly OnDemandAllocationStrategy?: (string | undefined) | undefined;
	readonly OnDemandBaseCapacity?: (number | undefined) | undefined;
	readonly OnDemandPercentageAboveBaseCapacity?: (number | undefined) | undefined;
	readonly SpotAllocationStrategy?: (string | undefined) | undefined;
	readonly SpotInstancePools?: (number | undefined) | undefined;
	readonly SpotMaxPrice?: (string | undefined) | undefined;
}
export interface LaunchTemplate {
	readonly LaunchTemplateSpecification: LaunchTemplateSpecification;
	readonly Overrides?: (LaunchTemplateOverrides[] | undefined) | undefined;
}
export interface LaunchTemplateOverrides {
	readonly InstanceRequirements?: (InstanceRequirements | undefined) | undefined;
	readonly InstanceType?: (string | undefined) | undefined;
	readonly LaunchTemplateSpecification?: (LaunchTemplateSpecification | undefined) | undefined;
	readonly WeightedCapacity?: (string | undefined) | undefined;
}
export interface LaunchTemplateSpecification {
	readonly LaunchTemplateId?: (string | undefined) | undefined;
	readonly LaunchTemplateName?: (string | undefined) | undefined;
	readonly Version: string;
}
export interface LifecycleHookSpecification {
	readonly DefaultResult?: (string | undefined) | undefined;
	readonly HeartbeatTimeout?: (number | undefined) | undefined;
	readonly LifecycleHookName: string;
	readonly LifecycleTransition: string;
	readonly NotificationMetadata?: (string | undefined) | undefined;
	readonly NotificationTargetARN?: (string | undefined) | undefined;
	readonly RoleARN?: (string | undefined) | undefined;
}
export interface MemoryGiBPerVCpuRequest {
	readonly Max?: (number | undefined) | undefined;
	readonly Min?: (number | undefined) | undefined;
}
export interface MemoryMiBRequest {
	readonly Max?: (number | undefined) | undefined;
	readonly Min?: (number | undefined) | undefined;
}
export interface MetricsCollection {
	readonly Granularity: string;
	readonly Metrics?: (string[] | undefined) | undefined;
}
export interface MixedInstancesPolicy {
	readonly InstancesDistribution?: (InstancesDistribution | undefined) | undefined;
	readonly LaunchTemplate: LaunchTemplate;
}
export interface NetworkBandwidthGbpsRequest {
	readonly Max?: (number | undefined) | undefined;
	readonly Min?: (number | undefined) | undefined;
}
export interface NetworkInterfaceCountRequest {
	readonly Max?: (number | undefined) | undefined;
	readonly Min?: (number | undefined) | undefined;
}
export interface NotificationConfiguration {
	readonly NotificationTypes?: (string[] | undefined) | undefined;
	readonly TopicARN: string;
}
export interface Tag {
	readonly Key: string;
	readonly PropagateAtLaunch: boolean;
	readonly Value: string;
}
export interface TotalLocalStorageGBRequest {
	readonly Max?: (number | undefined) | undefined;
	readonly Min?: (number | undefined) | undefined;
}
export interface VCpuCountRequest {
	readonly Max?: (number | undefined) | undefined;
	readonly Min?: (number | undefined) | undefined;
}
export interface BlockDevice {
	readonly DeleteOnTermination?: (boolean | undefined) | undefined;
	readonly Encrypted?: (boolean | undefined) | undefined;
	readonly Iops?: (number | undefined) | undefined;
	readonly SnapshotId?: (string | undefined) | undefined;
	readonly Throughput?: (number | undefined) | undefined;
	readonly VolumeSize?: (number | undefined) | undefined;
	readonly VolumeType?: (string | undefined) | undefined;
}
export interface BlockDeviceMapping {
	readonly DeviceName: string;
	readonly Ebs?: (BlockDevice | undefined) | undefined;
	readonly NoDevice?: (boolean | undefined) | undefined;
	readonly VirtualName?: (string | undefined) | undefined;
}
export interface MetadataOptions {
	readonly HttpEndpoint?: (string | undefined) | undefined;
	readonly HttpPutResponseHopLimit?: (number | undefined) | undefined;
	readonly HttpTokens?: (string | undefined) | undefined;
}
export interface CustomizedMetricSpecification {
	readonly Dimensions?: (MetricDimension[] | undefined) | undefined;
	readonly MetricName: string;
	readonly Namespace: string;
	readonly Statistic: string;
	readonly Unit?: (string | undefined) | undefined;
}
export interface Metric {
	readonly Dimensions?: (MetricDimension[] | undefined) | undefined;
	readonly MetricName: string;
	readonly Namespace: string;
}
export interface MetricDataQuery {
	readonly Expression?: (string | undefined) | undefined;
	readonly Id: string;
	readonly Label?: (string | undefined) | undefined;
	readonly MetricStat?: (MetricStat | undefined) | undefined;
	readonly ReturnData?: (boolean | undefined) | undefined;
}
export interface MetricDimension {
	readonly Name: string;
	readonly Value: string;
}
export interface MetricStat {
	readonly Metric: Metric;
	readonly Stat: string;
	readonly Unit?: (string | undefined) | undefined;
}
export interface PredefinedMetricSpecification {
	readonly PredefinedMetricType: string;
	readonly ResourceLabel?: (string | undefined) | undefined;
}
export interface PredictiveScalingConfiguration {
	readonly MaxCapacityBreachBehavior?: (string | undefined) | undefined;
	readonly MaxCapacityBuffer?: (number | undefined) | undefined;
	readonly MetricSpecifications: PredictiveScalingMetricSpecification[];
	readonly Mode?: (string | undefined) | undefined;
	readonly SchedulingBufferTime?: (number | undefined) | undefined;
}
export interface PredictiveScalingCustomizedCapacityMetric {
	readonly MetricDataQueries: MetricDataQuery[];
}
export interface PredictiveScalingCustomizedLoadMetric {
	readonly MetricDataQueries: MetricDataQuery[];
}
export interface PredictiveScalingCustomizedScalingMetric {
	readonly MetricDataQueries: MetricDataQuery[];
}
export interface PredictiveScalingMetricSpecification {
	readonly CustomizedCapacityMetricSpecification?: (PredictiveScalingCustomizedCapacityMetric | undefined) | undefined;
	readonly CustomizedLoadMetricSpecification?: (PredictiveScalingCustomizedLoadMetric | undefined) | undefined;
	readonly CustomizedScalingMetricSpecification?: (PredictiveScalingCustomizedScalingMetric | undefined) | undefined;
	readonly PredefinedLoadMetricSpecification?: (PredictiveScalingPredefinedLoadMetric | undefined) | undefined;
	readonly PredefinedMetricPairSpecification?: (PredictiveScalingPredefinedMetricPair | undefined) | undefined;
	readonly PredefinedScalingMetricSpecification?: (PredictiveScalingPredefinedScalingMetric | undefined) | undefined;
	readonly TargetValue: number;
}
export interface PredictiveScalingPredefinedLoadMetric {
	readonly PredefinedMetricType: string;
	readonly ResourceLabel?: (string | undefined) | undefined;
}
export interface PredictiveScalingPredefinedMetricPair {
	readonly PredefinedMetricType: string;
	readonly ResourceLabel?: (string | undefined) | undefined;
}
export interface PredictiveScalingPredefinedScalingMetric {
	readonly PredefinedMetricType: string;
	readonly ResourceLabel?: (string | undefined) | undefined;
}
export interface StepAdjustment {
	readonly MetricIntervalLowerBound?: (number | undefined) | undefined;
	readonly MetricIntervalUpperBound?: (number | undefined) | undefined;
	readonly ScalingAdjustment: number;
}
export interface TargetTrackingConfiguration {
	readonly CustomizedMetricSpecification?: (CustomizedMetricSpecification | undefined) | undefined;
	readonly DisableScaleIn?: (boolean | undefined) | undefined;
	readonly PredefinedMetricSpecification?: (PredefinedMetricSpecification | undefined) | undefined;
	readonly TargetValue: number;
}
export interface InstanceReusePolicy {
	readonly ReuseOnScaleIn?: (boolean | undefined) | undefined;
}
export default {
	AutoScalingGroup: AutoScalingGroup,
	LaunchConfiguration: LaunchConfiguration,
	LifecycleHook: LifecycleHook,
	ScalingPolicy: ScalingPolicy,
	ScheduledAction: ScheduledAction,
	WarmPool: WarmPool,
};

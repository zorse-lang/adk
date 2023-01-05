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
	readonly AutoScalingGroupName?: string | undefined;
	readonly AvailabilityZones?: string[] | undefined;
	readonly CapacityRebalance?: boolean | undefined;
	readonly Context?: string | undefined;
	readonly Cooldown?: string | undefined;
	readonly DefaultInstanceWarmup?: number | undefined;
	readonly DesiredCapacity?: string | undefined;
	readonly DesiredCapacityType?: string | undefined;
	readonly HealthCheckGracePeriod?: number | undefined;
	readonly HealthCheckType?: string | undefined;
	readonly InstanceId?: string | undefined;
	readonly LaunchConfigurationName?: string | undefined;
	readonly LaunchTemplate?: LaunchTemplateSpecification | undefined;
	readonly LifecycleHookSpecificationList?: LifecycleHookSpecification[] | undefined;
	readonly LoadBalancerNames?: string[] | undefined;
	readonly MaxInstanceLifetime?: number | undefined;
	readonly MetricsCollection?: MetricsCollection[] | undefined;
	readonly MixedInstancesPolicy?: MixedInstancesPolicy | undefined;
	readonly NewInstancesProtectedFromScaleIn?: boolean | undefined;
	readonly NotificationConfigurations?: NotificationConfiguration[] | undefined;
	readonly PlacementGroup?: string | undefined;
	readonly ServiceLinkedRoleARN?: string | undefined;
	readonly Tags?: Tag[] | undefined;
	readonly TargetGroupARNs?: string[] | undefined;
	readonly TerminationPolicies?: string[] | undefined;
	readonly VPCZoneIdentifier?: string[] | undefined;
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
	readonly AssociatePublicIpAddress?: boolean | undefined;
	readonly BlockDeviceMappings?: BlockDeviceMapping[] | undefined;
	readonly ClassicLinkVPCId?: string | undefined;
	readonly ClassicLinkVPCSecurityGroups?: string[] | undefined;
	readonly EbsOptimized?: boolean | undefined;
	readonly IamInstanceProfile?: string | undefined;
	readonly InstanceId?: string | undefined;
	readonly InstanceMonitoring?: boolean | undefined;
	readonly KernelId?: string | undefined;
	readonly KeyName?: string | undefined;
	readonly LaunchConfigurationName?: string | undefined;
	readonly MetadataOptions?: MetadataOptions | undefined;
	readonly PlacementTenancy?: string | undefined;
	readonly RamDiskId?: string | undefined;
	readonly SecurityGroups?: string[] | undefined;
	readonly SpotPrice?: string | undefined;
	readonly UserData?: string | undefined;
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
	readonly DefaultResult?: string | undefined;
	readonly HeartbeatTimeout?: number | undefined;
	readonly LifecycleHookName?: string | undefined;
	readonly NotificationMetadata?: string | undefined;
	readonly NotificationTargetARN?: string | undefined;
	readonly RoleARN?: string | undefined;
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
	readonly AdjustmentType?: string | undefined;
	readonly Cooldown?: string | undefined;
	readonly EstimatedInstanceWarmup?: number | undefined;
	readonly MetricAggregationType?: string | undefined;
	readonly MinAdjustmentMagnitude?: number | undefined;
	readonly PolicyType?: string | undefined;
	readonly PredictiveScalingConfiguration?: PredictiveScalingConfiguration | undefined;
	readonly ScalingAdjustment?: number | undefined;
	readonly StepAdjustments?: StepAdjustment[] | undefined;
	readonly TargetTrackingConfiguration?: TargetTrackingConfiguration | undefined;
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
	readonly DesiredCapacity?: number | undefined;
	readonly EndTime?: string | undefined;
	readonly MaxSize?: number | undefined;
	readonly MinSize?: number | undefined;
	readonly Recurrence?: string | undefined;
	readonly StartTime?: string | undefined;
	readonly TimeZone?: string | undefined;
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
	readonly InstanceReusePolicy?: InstanceReusePolicy | undefined;
	readonly MaxGroupPreparedCapacity?: number | undefined;
	readonly MinSize?: number | undefined;
	readonly PoolState?: string | undefined;
	readonly LogicalId: string;
}
export interface AcceleratorCountRequest {
	readonly Max?: number | undefined;
	readonly Min?: number | undefined;
}
export interface AcceleratorTotalMemoryMiBRequest {
	readonly Max?: number | undefined;
	readonly Min?: number | undefined;
}
export interface BaselineEbsBandwidthMbpsRequest {
	readonly Max?: number | undefined;
	readonly Min?: number | undefined;
}
export interface InstanceRequirements {
	readonly AcceleratorCount?: AcceleratorCountRequest | undefined;
	readonly AcceleratorManufacturers?: string[] | undefined;
	readonly AcceleratorNames?: string[] | undefined;
	readonly AcceleratorTotalMemoryMiB?: AcceleratorTotalMemoryMiBRequest | undefined;
	readonly AcceleratorTypes?: string[] | undefined;
	readonly AllowedInstanceTypes?: string[] | undefined;
	readonly BareMetal?: string | undefined;
	readonly BaselineEbsBandwidthMbps?: BaselineEbsBandwidthMbpsRequest | undefined;
	readonly BurstablePerformance?: string | undefined;
	readonly CpuManufacturers?: string[] | undefined;
	readonly ExcludedInstanceTypes?: string[] | undefined;
	readonly InstanceGenerations?: string[] | undefined;
	readonly LocalStorage?: string | undefined;
	readonly LocalStorageTypes?: string[] | undefined;
	readonly MemoryGiBPerVCpu?: MemoryGiBPerVCpuRequest | undefined;
	readonly MemoryMiB?: MemoryMiBRequest | undefined;
	readonly NetworkBandwidthGbps?: NetworkBandwidthGbpsRequest | undefined;
	readonly NetworkInterfaceCount?: NetworkInterfaceCountRequest | undefined;
	readonly OnDemandMaxPricePercentageOverLowestPrice?: number | undefined;
	readonly RequireHibernateSupport?: boolean | undefined;
	readonly SpotMaxPricePercentageOverLowestPrice?: number | undefined;
	readonly TotalLocalStorageGB?: TotalLocalStorageGBRequest | undefined;
	readonly VCpuCount?: VCpuCountRequest | undefined;
}
export interface InstancesDistribution {
	readonly OnDemandAllocationStrategy?: string | undefined;
	readonly OnDemandBaseCapacity?: number | undefined;
	readonly OnDemandPercentageAboveBaseCapacity?: number | undefined;
	readonly SpotAllocationStrategy?: string | undefined;
	readonly SpotInstancePools?: number | undefined;
	readonly SpotMaxPrice?: string | undefined;
}
export interface LaunchTemplate {
	readonly LaunchTemplateSpecification: LaunchTemplateSpecification;
	readonly Overrides?: LaunchTemplateOverrides[] | undefined;
}
export interface LaunchTemplateOverrides {
	readonly InstanceRequirements?: InstanceRequirements | undefined;
	readonly InstanceType?: string | undefined;
	readonly LaunchTemplateSpecification?: LaunchTemplateSpecification | undefined;
	readonly WeightedCapacity?: string | undefined;
}
export interface LaunchTemplateSpecification {
	readonly LaunchTemplateId?: string | undefined;
	readonly LaunchTemplateName?: string | undefined;
	readonly Version: string;
}
export interface LifecycleHookSpecification {
	readonly DefaultResult?: string | undefined;
	readonly HeartbeatTimeout?: number | undefined;
	readonly LifecycleHookName: string;
	readonly LifecycleTransition: string;
	readonly NotificationMetadata?: string | undefined;
	readonly NotificationTargetARN?: string | undefined;
	readonly RoleARN?: string | undefined;
}
export interface MemoryGiBPerVCpuRequest {
	readonly Max?: number | undefined;
	readonly Min?: number | undefined;
}
export interface MemoryMiBRequest {
	readonly Max?: number | undefined;
	readonly Min?: number | undefined;
}
export interface MetricsCollection {
	readonly Granularity: string;
	readonly Metrics?: string[] | undefined;
}
export interface MixedInstancesPolicy {
	readonly InstancesDistribution?: InstancesDistribution | undefined;
	readonly LaunchTemplate: LaunchTemplate;
}
export interface NetworkBandwidthGbpsRequest {
	readonly Max?: number | undefined;
	readonly Min?: number | undefined;
}
export interface NetworkInterfaceCountRequest {
	readonly Max?: number | undefined;
	readonly Min?: number | undefined;
}
export interface NotificationConfiguration {
	readonly NotificationTypes?: string[] | undefined;
	readonly TopicARN: string;
}
export interface Tag {
	readonly Key: string;
	readonly PropagateAtLaunch: boolean;
	readonly Value: string;
}
export interface TotalLocalStorageGBRequest {
	readonly Max?: number | undefined;
	readonly Min?: number | undefined;
}
export interface VCpuCountRequest {
	readonly Max?: number | undefined;
	readonly Min?: number | undefined;
}
export interface BlockDevice {
	readonly DeleteOnTermination?: boolean | undefined;
	readonly Encrypted?: boolean | undefined;
	readonly Iops?: number | undefined;
	readonly SnapshotId?: string | undefined;
	readonly Throughput?: number | undefined;
	readonly VolumeSize?: number | undefined;
	readonly VolumeType?: string | undefined;
}
export interface BlockDeviceMapping {
	readonly DeviceName: string;
	readonly Ebs?: BlockDevice | undefined;
	readonly NoDevice?: boolean | undefined;
	readonly VirtualName?: string | undefined;
}
export interface MetadataOptions {
	readonly HttpEndpoint?: string | undefined;
	readonly HttpPutResponseHopLimit?: number | undefined;
	readonly HttpTokens?: string | undefined;
}
export interface CustomizedMetricSpecification {
	readonly Dimensions?: MetricDimension[] | undefined;
	readonly MetricName: string;
	readonly Namespace: string;
	readonly Statistic: string;
	readonly Unit?: string | undefined;
}
export interface Metric {
	readonly Dimensions?: MetricDimension[] | undefined;
	readonly MetricName: string;
	readonly Namespace: string;
}
export interface MetricDataQuery {
	readonly Expression?: string | undefined;
	readonly Id: string;
	readonly Label?: string | undefined;
	readonly MetricStat?: MetricStat | undefined;
	readonly ReturnData?: boolean | undefined;
}
export interface MetricDimension {
	readonly Name: string;
	readonly Value: string;
}
export interface MetricStat {
	readonly Metric: Metric;
	readonly Stat: string;
	readonly Unit?: string | undefined;
}
export interface PredefinedMetricSpecification {
	readonly PredefinedMetricType: string;
	readonly ResourceLabel?: string | undefined;
}
export interface PredictiveScalingConfiguration {
	readonly MaxCapacityBreachBehavior?: string | undefined;
	readonly MaxCapacityBuffer?: number | undefined;
	readonly MetricSpecifications: PredictiveScalingMetricSpecification[];
	readonly Mode?: string | undefined;
	readonly SchedulingBufferTime?: number | undefined;
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
	readonly CustomizedCapacityMetricSpecification?: PredictiveScalingCustomizedCapacityMetric | undefined;
	readonly CustomizedLoadMetricSpecification?: PredictiveScalingCustomizedLoadMetric | undefined;
	readonly CustomizedScalingMetricSpecification?: PredictiveScalingCustomizedScalingMetric | undefined;
	readonly PredefinedLoadMetricSpecification?: PredictiveScalingPredefinedLoadMetric | undefined;
	readonly PredefinedMetricPairSpecification?: PredictiveScalingPredefinedMetricPair | undefined;
	readonly PredefinedScalingMetricSpecification?: PredictiveScalingPredefinedScalingMetric | undefined;
	readonly TargetValue: number;
}
export interface PredictiveScalingPredefinedLoadMetric {
	readonly PredefinedMetricType: string;
	readonly ResourceLabel?: string | undefined;
}
export interface PredictiveScalingPredefinedMetricPair {
	readonly PredefinedMetricType: string;
	readonly ResourceLabel?: string | undefined;
}
export interface PredictiveScalingPredefinedScalingMetric {
	readonly PredefinedMetricType: string;
	readonly ResourceLabel?: string | undefined;
}
export interface StepAdjustment {
	readonly MetricIntervalLowerBound?: number | undefined;
	readonly MetricIntervalUpperBound?: number | undefined;
	readonly ScalingAdjustment: number;
}
export interface TargetTrackingConfiguration {
	readonly CustomizedMetricSpecification?: CustomizedMetricSpecification | undefined;
	readonly DisableScaleIn?: boolean | undefined;
	readonly PredefinedMetricSpecification?: PredefinedMetricSpecification | undefined;
	readonly TargetValue: number;
}
export interface InstanceReusePolicy {
	readonly ReuseOnScaleIn?: boolean | undefined;
}
export default {
	AutoScalingGroup: AutoScalingGroup,
	LaunchConfiguration: LaunchConfiguration,
	LifecycleHook: LifecycleHook,
	ScalingPolicy: ScalingPolicy,
	ScheduledAction: ScheduledAction,
	WarmPool: WarmPool,
};

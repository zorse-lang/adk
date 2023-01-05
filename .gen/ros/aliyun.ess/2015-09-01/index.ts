import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class AlarmTask extends RosResource<AlarmTaskComponentInputs> implements AlarmTaskComponentOutputs {
	constructor(entity: ADKEntity, options: AlarmTaskComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ESS::AlarmTask", options);
	}
	public readonly AlarmTaskId: any;
}
export interface AlarmTaskComponentOutputs {
	readonly AlarmTaskId: any;
}
export interface AlarmTaskComponentInputs {
	readonly AlarmAction: string[];
	readonly MetricName: string;
	readonly ScalingGroupId: string;
	readonly Threshold: number;
	readonly ComparisonOperator?: string | undefined;
	readonly Description?: string | undefined;
	readonly Dimensions?: Dimensions[] | undefined;
	readonly EvaluationCount?: number | undefined;
	readonly GroupId?: number | undefined;
	readonly MetricType?: string | undefined;
	readonly Name?: string | undefined;
	readonly Period?: number | undefined;
	readonly Statistics?: string | undefined;
	readonly LogicalId: string;
}
export class AlarmTaskEnable
	extends RosResource<AlarmTaskEnableComponentInputs>
	implements AlarmTaskEnableComponentOutputs
{
	constructor(entity: ADKEntity, options: AlarmTaskEnableComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ESS::AlarmTaskEnable", options);
	}
}
export interface AlarmTaskEnableComponentOutputs {}
export interface AlarmTaskEnableComponentInputs {
	readonly AlarmTaskId: string;
	readonly Enable: boolean;
	readonly LogicalId: string;
}
export class LifecycleHook extends RosResource<LifecycleHookComponentInputs> implements LifecycleHookComponentOutputs {
	constructor(entity: ADKEntity, options: LifecycleHookComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ESS::LifecycleHook", options);
	}
	public readonly LifecycleHookId: any;
}
export interface LifecycleHookComponentOutputs {
	readonly LifecycleHookId: any;
}
export interface LifecycleHookComponentInputs {
	readonly LifecycleTransition: string;
	readonly ScalingGroupId: string;
	readonly DefaultResult?: string | undefined;
	readonly HeartbeatTimeout?: number | undefined;
	readonly LifecycleHookName?: string | undefined;
	readonly NotificationArn?: string | undefined;
	readonly NotificationMetadata?: string | undefined;
	readonly LogicalId: string;
}
export class ScalingConfiguration
	extends RosResource<ScalingConfigurationComponentInputs>
	implements ScalingConfigurationComponentOutputs
{
	constructor(entity: ADKEntity, options: ScalingConfigurationComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ESS::ScalingConfiguration", options);
	}
	public readonly ScalingConfigurationId: any;
}
export interface ScalingConfigurationComponentOutputs {
	readonly ScalingConfigurationId: any;
}
export interface ScalingConfigurationComponentInputs {
	readonly ScalingGroupId: string;
	readonly CreditSpecification?: string | undefined;
	readonly DeploymentSetId?: string | undefined;
	readonly DiskMappings?: DiskMappings[] | undefined;
	readonly HpcClusterId?: string | undefined;
	readonly ImageFamily?: string | undefined;
	readonly ImageId?: string | undefined;
	readonly InstanceId?: string | undefined;
	readonly InstanceName?: string | undefined;
	readonly InstanceType?: string | undefined;
	readonly InstanceTypes?: any[] | undefined;
	readonly InternetChargeType?: string | undefined;
	readonly InternetMaxBandwidthIn?: number | undefined;
	readonly InternetMaxBandwidthOut?: number | undefined;
	readonly IoOptimized?: string | undefined;
	readonly Ipv6AddressCount?: number | undefined;
	readonly KeyPairName?: string | undefined;
	readonly LoadBalancerWeight?: number | undefined;
	readonly PasswordInherit?: boolean | undefined;
	readonly RamRoleName?: string | undefined;
	readonly ResourceGroupId?: string | undefined;
	readonly ScalingConfigurationName?: string | undefined;
	readonly SecurityGroupId?: string | undefined;
	readonly SpotPriceLimit?: number | undefined;
	readonly SpotPriceLimitForInstanceType?: { [key: string]: any } | undefined;
	readonly SpotStrategy?: string | undefined;
	readonly SystemDiskAutoSnapshotPolicyId?: string | undefined;
	readonly SystemDiskCategory?: string | undefined;
	readonly SystemDiskPerformanceLevel?: string | undefined;
	readonly SystemDiskSize?: number | undefined;
	readonly TagList?: TagList[] | undefined;
	readonly UserData?: string | undefined;
	readonly LogicalId: string;
}
export class ScalingGroup extends RosResource<ScalingGroupComponentInputs> implements ScalingGroupComponentOutputs {
	constructor(entity: ADKEntity, options: ScalingGroupComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ESS::ScalingGroup", options);
	}
	public readonly ScalingGroupId: any;
}
export interface ScalingGroupComponentOutputs {
	readonly ScalingGroupId: any;
}
export interface ScalingGroupComponentInputs {
	readonly MaxSize: number;
	readonly MinSize: number;
	readonly CompensateWithOnDemand?: boolean | undefined;
	readonly ContainerGroupId?: string | undefined;
	readonly DBInstanceIds?: any[] | undefined;
	readonly DefaultCooldown?: number | undefined;
	readonly DesiredCapacity?: number | undefined;
	readonly GroupDeletionProtection?: boolean | undefined;
	readonly GroupType?: string | undefined;
	readonly HealthCheckType?: string | undefined;
	readonly InstanceId?: string | undefined;
	readonly LaunchTemplateId?: string | undefined;
	readonly LaunchTemplateVersion?: string | undefined;
	readonly LoadBalancerIds?: any[] | undefined;
	readonly MultiAZPolicy?: string | undefined;
	readonly NotificationConfigurations?: NotificationConfigurations[] | undefined;
	readonly OnDemandBaseCapacity?: number | undefined;
	readonly OnDemandPercentageAboveBaseCapacity?: number | undefined;
	readonly ProtectedInstances?: any[] | undefined;
	readonly RemovalPolicys?: any[] | undefined;
	readonly ScalingGroupName?: any | string;
	readonly ScalingPolicy?: string | undefined;
	readonly SpotInstancePools?: number | undefined;
	readonly SpotInstanceRemedy?: boolean | undefined;
	readonly StandbyInstances?: any[] | undefined;
	readonly Tags?: Tags[] | undefined;
	readonly VSwitchId?: string | undefined;
	readonly VSwitchIds?: any[] | undefined;
	readonly LogicalId: string;
}
export class ScalingGroupEnable
	extends RosResource<ScalingGroupEnableComponentInputs>
	implements ScalingGroupEnableComponentOutputs
{
	constructor(entity: ADKEntity, options: ScalingGroupEnableComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ESS::ScalingGroupEnable", options);
	}
	public readonly ScalingInstanceDetails: any;
	public readonly ScalingRuleArisExecuteResultInstancesRemoved: any;
	public readonly ScalingRuleArisExecuteResultInstancesAdded: any;
	public readonly ScalingInstances: any;
	public readonly ScalingRuleArisExecuteResultNumberOfAddedInstances: any;
	public readonly LifecycleState: any;
	public readonly ScalingRuleArisExecuteErrorInfo: any;
}
export interface ScalingGroupEnableComponentOutputs {
	readonly ScalingInstanceDetails: any;
	readonly ScalingRuleArisExecuteResultInstancesRemoved: any;
	readonly ScalingRuleArisExecuteResultInstancesAdded: any;
	readonly ScalingInstances: any;
	readonly ScalingRuleArisExecuteResultNumberOfAddedInstances: any;
	readonly LifecycleState: any;
	readonly ScalingRuleArisExecuteErrorInfo: any;
}
export interface ScalingGroupEnableComponentInputs {
	readonly ScalingGroupId: any | string;
	readonly InstanceIds?: any[] | undefined;
	readonly RemoveInstanceIds?: any[] | undefined;
	readonly ScalingConfigurationId?: string | undefined;
	readonly ScalingRuleAris?: any[] | undefined;
	readonly ScalingRuleArisExecuteVersion?: number | undefined;
	readonly LogicalId: string;
}
export class ScalingRule extends RosResource<ScalingRuleComponentInputs> implements ScalingRuleComponentOutputs {
	constructor(entity: ADKEntity, options: ScalingRuleComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ESS::ScalingRule", options);
	}
	public readonly ScalingRuleAri: any;
	public readonly ScalingRuleId: any;
}
export interface ScalingRuleComponentOutputs {
	readonly ScalingRuleAri: any;
	readonly ScalingRuleId: any;
}
export interface ScalingRuleComponentInputs {
	readonly ScalingGroupId: string;
	readonly AdjustmentType?: string | undefined;
	readonly AdjustmentValue?: number | undefined;
	readonly Cooldown?: number | undefined;
	readonly DisableScaleIn?: boolean | undefined;
	readonly EstimatedInstanceWarmup?: number | undefined;
	readonly InitialMaxSize?: number | undefined;
	readonly MetricName?: string | undefined;
	readonly MinAdjustmentMagnitude?: number | undefined;
	readonly PredictiveScalingMode?: string | undefined;
	readonly PredictiveTaskBufferTime?: number | undefined;
	readonly PredictiveValueBehavior?: string | undefined;
	readonly PredictiveValueBuffer?: number | undefined;
	readonly ScaleInEvaluationCount?: number | undefined;
	readonly ScaleOutEvaluationCount?: number | undefined;
	readonly ScalingRuleName?: string | undefined;
	readonly ScalingRuleType?: string | undefined;
	readonly StepAdjustment?: StepAdjustment[] | undefined;
	readonly TargetValue?: number | undefined;
	readonly LogicalId: string;
}
export class ScheduledTask extends RosResource<ScheduledTaskComponentInputs> implements ScheduledTaskComponentOutputs {
	constructor(entity: ADKEntity, options: ScheduledTaskComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::ESS::ScheduledTask", options);
	}
	public readonly ScheduledTaskId: any;
}
export interface ScheduledTaskComponentOutputs {
	readonly ScheduledTaskId: any;
}
export interface ScheduledTaskComponentInputs {
	readonly LaunchTime: string;
	readonly ScheduledAction: string;
	readonly Description?: string | undefined;
	readonly LaunchExpirationTime?: number | undefined;
	readonly RecurrenceEndTime?: string | undefined;
	readonly RecurrenceType?: string | undefined;
	readonly RecurrenceValue?: string | undefined;
	readonly ScheduledTaskName?: string | undefined;
	readonly TaskEnabled?: boolean | undefined;
	readonly LogicalId: string;
}
export interface Dimensions {
	readonly DimensionValue: string;
	readonly DimensionKey: string;
}
export interface DiskMappings {
	readonly SnapshotId?: string | undefined;
	readonly Category?: string | undefined;
	readonly Description?: string | undefined;
	readonly KMSKeyId?: string | undefined;
	readonly Encrypted?: string | undefined;
	readonly Device?: string | undefined;
	readonly PerformanceLevel?: string | undefined;
	readonly Size?: string | undefined;
	readonly AutoSnapshotPolicyId?: string | undefined;
	readonly DiskName?: string | undefined;
}
export interface TagList {
	readonly Value?: string | undefined;
	readonly Key: string;
}
export interface NotificationConfigurations {
	readonly NotificationArn: string;
	readonly NotificationTypes: any[];
}
export interface Tags {
	readonly Value?: string | undefined;
	readonly Key: string;
}
export interface StepAdjustment {
	readonly MetricIntervalUpperBound?: number | undefined;
	readonly MetricIntervalLowerBound?: number | undefined;
	readonly ScalingAdjustment?: number | undefined;
}
export default {
	AlarmTask: AlarmTask,
	AlarmTaskEnable: AlarmTaskEnable,
	LifecycleHook: LifecycleHook,
	ScalingConfiguration: ScalingConfiguration,
	ScalingGroup: ScalingGroup,
	ScalingGroupEnable: ScalingGroupEnable,
	ScalingRule: ScalingRule,
	ScheduledTask: ScheduledTask,
};

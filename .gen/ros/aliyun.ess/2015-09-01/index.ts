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
	readonly ComparisonOperator?: (string | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly Dimensions?: (Dimensions[] | undefined) | undefined;
	readonly EvaluationCount?: (number | undefined) | undefined;
	readonly GroupId?: (number | undefined) | undefined;
	readonly MetricType?: (string | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly Period?: (number | undefined) | undefined;
	readonly Statistics?: (string | undefined) | undefined;
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
	readonly DefaultResult?: (string | undefined) | undefined;
	readonly HeartbeatTimeout?: (number | undefined) | undefined;
	readonly LifecycleHookName?: (string | undefined) | undefined;
	readonly NotificationArn?: (string | undefined) | undefined;
	readonly NotificationMetadata?: (string | undefined) | undefined;
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
	readonly CreditSpecification?: (string | undefined) | undefined;
	readonly DeploymentSetId?: (string | undefined) | undefined;
	readonly DiskMappings?: (DiskMappings[] | undefined) | undefined;
	readonly HpcClusterId?: (string | undefined) | undefined;
	readonly ImageFamily?: (string | undefined) | undefined;
	readonly ImageId?: (string | undefined) | undefined;
	readonly InstanceId?: (string | undefined) | undefined;
	readonly InstanceName?: (string | undefined) | undefined;
	readonly InstanceType?: (string | undefined) | undefined;
	readonly InstanceTypes?: (any[] | undefined) | undefined;
	readonly InternetChargeType?: (string | undefined) | undefined;
	readonly InternetMaxBandwidthIn?: (number | undefined) | undefined;
	readonly InternetMaxBandwidthOut?: (number | undefined) | undefined;
	readonly IoOptimized?: (string | undefined) | undefined;
	readonly Ipv6AddressCount?: (number | undefined) | undefined;
	readonly KeyPairName?: (string | undefined) | undefined;
	readonly LoadBalancerWeight?: (number | undefined) | undefined;
	readonly PasswordInherit?: (boolean | undefined) | undefined;
	readonly RamRoleName?: (string | undefined) | undefined;
	readonly ResourceGroupId?: (string | undefined) | undefined;
	readonly ScalingConfigurationName?: (string | undefined) | undefined;
	readonly SecurityGroupId?: (string | undefined) | undefined;
	readonly SpotPriceLimit?: (number | undefined) | undefined;
	readonly SpotPriceLimitForInstanceType?: ({ [key: string]: any } | undefined) | undefined;
	readonly SpotStrategy?: (string | undefined) | undefined;
	readonly SystemDiskAutoSnapshotPolicyId?: (string | undefined) | undefined;
	readonly SystemDiskCategory?: (string | undefined) | undefined;
	readonly SystemDiskPerformanceLevel?: (string | undefined) | undefined;
	readonly SystemDiskSize?: (number | undefined) | undefined;
	readonly TagList?: (TagList[] | undefined) | undefined;
	readonly UserData?: (string | undefined) | undefined;
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
	readonly CompensateWithOnDemand?: (boolean | undefined) | undefined;
	readonly ContainerGroupId?: (string | undefined) | undefined;
	readonly DBInstanceIds?: (any[] | undefined) | undefined;
	readonly DefaultCooldown?: (number | undefined) | undefined;
	readonly DesiredCapacity?: (number | undefined) | undefined;
	readonly GroupDeletionProtection?: (boolean | undefined) | undefined;
	readonly GroupType?: (string | undefined) | undefined;
	readonly HealthCheckType?: (string | undefined) | undefined;
	readonly InstanceId?: (string | undefined) | undefined;
	readonly LaunchTemplateId?: (string | undefined) | undefined;
	readonly LaunchTemplateVersion?: (string | undefined) | undefined;
	readonly LoadBalancerIds?: (any[] | undefined) | undefined;
	readonly MultiAZPolicy?: (string | undefined) | undefined;
	readonly NotificationConfigurations?: (NotificationConfigurations[] | undefined) | undefined;
	readonly OnDemandBaseCapacity?: (number | undefined) | undefined;
	readonly OnDemandPercentageAboveBaseCapacity?: (number | undefined) | undefined;
	readonly ProtectedInstances?: (any[] | undefined) | undefined;
	readonly RemovalPolicys?: (any[] | undefined) | undefined;
	readonly ScalingGroupName?: (any | string) | undefined;
	readonly ScalingPolicy?: (string | undefined) | undefined;
	readonly SpotInstancePools?: (number | undefined) | undefined;
	readonly SpotInstanceRemedy?: (boolean | undefined) | undefined;
	readonly StandbyInstances?: (any[] | undefined) | undefined;
	readonly Tags?: (Tags[] | undefined) | undefined;
	readonly VSwitchId?: (string | undefined) | undefined;
	readonly VSwitchIds?: (any[] | undefined) | undefined;
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
	readonly InstanceIds?: (any[] | undefined) | undefined;
	readonly RemoveInstanceIds?: (any[] | undefined) | undefined;
	readonly ScalingConfigurationId?: (string | undefined) | undefined;
	readonly ScalingRuleAris?: (any[] | undefined) | undefined;
	readonly ScalingRuleArisExecuteVersion?: (number | undefined) | undefined;
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
	readonly AdjustmentType?: (string | undefined) | undefined;
	readonly AdjustmentValue?: (number | undefined) | undefined;
	readonly Cooldown?: (number | undefined) | undefined;
	readonly DisableScaleIn?: (boolean | undefined) | undefined;
	readonly EstimatedInstanceWarmup?: (number | undefined) | undefined;
	readonly InitialMaxSize?: (number | undefined) | undefined;
	readonly MetricName?: (string | undefined) | undefined;
	readonly MinAdjustmentMagnitude?: (number | undefined) | undefined;
	readonly PredictiveScalingMode?: (string | undefined) | undefined;
	readonly PredictiveTaskBufferTime?: (number | undefined) | undefined;
	readonly PredictiveValueBehavior?: (string | undefined) | undefined;
	readonly PredictiveValueBuffer?: (number | undefined) | undefined;
	readonly ScaleInEvaluationCount?: (number | undefined) | undefined;
	readonly ScaleOutEvaluationCount?: (number | undefined) | undefined;
	readonly ScalingRuleName?: (string | undefined) | undefined;
	readonly ScalingRuleType?: (string | undefined) | undefined;
	readonly StepAdjustment?: (StepAdjustment[] | undefined) | undefined;
	readonly TargetValue?: (number | undefined) | undefined;
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
	readonly Description?: (string | undefined) | undefined;
	readonly LaunchExpirationTime?: (number | undefined) | undefined;
	readonly RecurrenceEndTime?: (string | undefined) | undefined;
	readonly RecurrenceType?: (string | undefined) | undefined;
	readonly RecurrenceValue?: (string | undefined) | undefined;
	readonly ScheduledTaskName?: (string | undefined) | undefined;
	readonly TaskEnabled?: (boolean | undefined) | undefined;
	readonly LogicalId: string;
}
export interface Dimensions {
	readonly DimensionValue: string;
	readonly DimensionKey: string;
}
export interface DiskMappings {
	readonly SnapshotId?: (string | undefined) | undefined;
	readonly Category?: (string | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly KMSKeyId?: (string | undefined) | undefined;
	readonly Encrypted?: (string | undefined) | undefined;
	readonly Device?: (string | undefined) | undefined;
	readonly PerformanceLevel?: (string | undefined) | undefined;
	readonly Size?: (string | undefined) | undefined;
	readonly AutoSnapshotPolicyId?: (string | undefined) | undefined;
	readonly DiskName?: (string | undefined) | undefined;
}
export interface TagList {
	readonly Value?: (string | undefined) | undefined;
	readonly Key: string;
}
export interface NotificationConfigurations {
	readonly NotificationArn: string;
	readonly NotificationTypes: any[];
}
export interface Tags {
	readonly Value?: (string | undefined) | undefined;
	readonly Key: string;
}
export interface StepAdjustment {
	readonly MetricIntervalUpperBound?: (number | undefined) | undefined;
	readonly MetricIntervalLowerBound?: (number | undefined) | undefined;
	readonly ScalingAdjustment?: (number | undefined) | undefined;
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

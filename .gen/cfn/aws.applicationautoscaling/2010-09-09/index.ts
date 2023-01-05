import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class ScalableTarget extends CfnResource<ScalableTargetComponentInputs> implements ScalableTargetComponentOutputs {
	constructor(entity: ADKEntity, options: ScalableTargetComponentInputs) {
		super(entity, options.LogicalId, "AWS::ApplicationAutoScaling::ScalableTarget", options);
	}
}
export interface ScalableTargetComponentOutputs {}
export interface ScalableTargetComponentInputs {
	readonly MaxCapacity: number;
	readonly MinCapacity: number;
	readonly ResourceId: string;
	readonly RoleARN: string;
	readonly ScalableDimension: string;
	readonly ServiceNamespace: string;
	readonly ScheduledActions?: ScheduledAction[] | undefined;
	readonly SuspendedState?: SuspendedState | undefined;
	readonly LogicalId: string;
}
export class ScalingPolicy extends CfnResource<ScalingPolicyComponentInputs> implements ScalingPolicyComponentOutputs {
	constructor(entity: ADKEntity, options: ScalingPolicyComponentInputs) {
		super(entity, options.LogicalId, "AWS::ApplicationAutoScaling::ScalingPolicy", options);
	}
}
export interface ScalingPolicyComponentOutputs {}
export interface ScalingPolicyComponentInputs {
	readonly PolicyName: string;
	readonly PolicyType: string;
	readonly ResourceId?: string | undefined;
	readonly ScalableDimension?: string | undefined;
	readonly ScalingTargetId?: string | undefined;
	readonly ServiceNamespace?: string | undefined;
	readonly StepScalingPolicyConfiguration?: StepScalingPolicyConfiguration | undefined;
	readonly TargetTrackingScalingPolicyConfiguration?: TargetTrackingScalingPolicyConfiguration | undefined;
	readonly LogicalId: string;
}
export interface ScalableTargetAction {
	readonly MaxCapacity?: number | undefined;
	readonly MinCapacity?: number | undefined;
}
export interface ScheduledAction {
	readonly EndTime?: Date | undefined;
	readonly ScalableTargetAction?: ScalableTargetAction | undefined;
	readonly Schedule: string;
	readonly ScheduledActionName: string;
	readonly StartTime?: Date | undefined;
	readonly Timezone?: string | undefined;
}
export interface SuspendedState {
	readonly DynamicScalingInSuspended?: boolean | undefined;
	readonly DynamicScalingOutSuspended?: boolean | undefined;
	readonly ScheduledScalingSuspended?: boolean | undefined;
}
export interface CustomizedMetricSpecification {
	readonly Dimensions?: MetricDimension[] | undefined;
	readonly MetricName: string;
	readonly Namespace: string;
	readonly Statistic: string;
	readonly Unit?: string | undefined;
}
export interface MetricDimension {
	readonly Name: string;
	readonly Value: string;
}
export interface PredefinedMetricSpecification {
	readonly PredefinedMetricType: string;
	readonly ResourceLabel?: string | undefined;
}
export interface StepAdjustment {
	readonly MetricIntervalLowerBound?: number | undefined;
	readonly MetricIntervalUpperBound?: number | undefined;
	readonly ScalingAdjustment: number;
}
export interface StepScalingPolicyConfiguration {
	readonly AdjustmentType?: string | undefined;
	readonly Cooldown?: number | undefined;
	readonly MetricAggregationType?: string | undefined;
	readonly MinAdjustmentMagnitude?: number | undefined;
	readonly StepAdjustments?: StepAdjustment[] | undefined;
}
export interface TargetTrackingScalingPolicyConfiguration {
	readonly CustomizedMetricSpecification?: CustomizedMetricSpecification | undefined;
	readonly DisableScaleIn?: boolean | undefined;
	readonly PredefinedMetricSpecification?: PredefinedMetricSpecification | undefined;
	readonly ScaleInCooldown?: number | undefined;
	readonly ScaleOutCooldown?: number | undefined;
	readonly TargetValue: number;
}
export default {
	ScalableTarget: ScalableTarget,
	ScalingPolicy: ScalingPolicy,
};

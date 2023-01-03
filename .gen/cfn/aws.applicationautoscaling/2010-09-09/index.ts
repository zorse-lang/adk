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
	readonly ScheduledActions?: (ScheduledAction[] | undefined) | undefined;
	readonly SuspendedState?: (SuspendedState | undefined) | undefined;
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
	readonly ResourceId?: (string | undefined) | undefined;
	readonly ScalableDimension?: (string | undefined) | undefined;
	readonly ScalingTargetId?: (string | undefined) | undefined;
	readonly ServiceNamespace?: (string | undefined) | undefined;
	readonly StepScalingPolicyConfiguration?: (StepScalingPolicyConfiguration | undefined) | undefined;
	readonly TargetTrackingScalingPolicyConfiguration?:
		| (TargetTrackingScalingPolicyConfiguration | undefined)
		| undefined;
	readonly LogicalId: string;
}
export interface ScalableTargetAction {
	readonly MaxCapacity?: (number | undefined) | undefined;
	readonly MinCapacity?: (number | undefined) | undefined;
}
export interface ScheduledAction {
	readonly EndTime?: (Date | undefined) | undefined;
	readonly ScalableTargetAction?: (ScalableTargetAction | undefined) | undefined;
	readonly Schedule: string;
	readonly ScheduledActionName: string;
	readonly StartTime?: (Date | undefined) | undefined;
	readonly Timezone?: (string | undefined) | undefined;
}
export interface SuspendedState {
	readonly DynamicScalingInSuspended?: (boolean | undefined) | undefined;
	readonly DynamicScalingOutSuspended?: (boolean | undefined) | undefined;
	readonly ScheduledScalingSuspended?: (boolean | undefined) | undefined;
}
export interface CustomizedMetricSpecification {
	readonly Dimensions?: (MetricDimension[] | undefined) | undefined;
	readonly MetricName: string;
	readonly Namespace: string;
	readonly Statistic: string;
	readonly Unit?: (string | undefined) | undefined;
}
export interface MetricDimension {
	readonly Name: string;
	readonly Value: string;
}
export interface PredefinedMetricSpecification {
	readonly PredefinedMetricType: string;
	readonly ResourceLabel?: (string | undefined) | undefined;
}
export interface StepAdjustment {
	readonly MetricIntervalLowerBound?: (number | undefined) | undefined;
	readonly MetricIntervalUpperBound?: (number | undefined) | undefined;
	readonly ScalingAdjustment: number;
}
export interface StepScalingPolicyConfiguration {
	readonly AdjustmentType?: (string | undefined) | undefined;
	readonly Cooldown?: (number | undefined) | undefined;
	readonly MetricAggregationType?: (string | undefined) | undefined;
	readonly MinAdjustmentMagnitude?: (number | undefined) | undefined;
	readonly StepAdjustments?: (StepAdjustment[] | undefined) | undefined;
}
export interface TargetTrackingScalingPolicyConfiguration {
	readonly CustomizedMetricSpecification?: (CustomizedMetricSpecification | undefined) | undefined;
	readonly DisableScaleIn?: (boolean | undefined) | undefined;
	readonly PredefinedMetricSpecification?: (PredefinedMetricSpecification | undefined) | undefined;
	readonly ScaleInCooldown?: (number | undefined) | undefined;
	readonly ScaleOutCooldown?: (number | undefined) | undefined;
	readonly TargetValue: number;
}
export default {
	ScalableTarget: ScalableTarget,
	ScalingPolicy: ScalingPolicy,
};

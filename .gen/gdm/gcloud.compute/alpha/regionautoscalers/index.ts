import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class RegionAutoscalers
	extends GdmResource<RegionAutoscalersComponentInputs>
	implements RegionAutoscalersComponentOutputs
{
	constructor(entity: ADKEntity, options: RegionAutoscalersComponentInputs) {
		super(entity, options.name, "compute.alpha.RegionAutoscalers", options);
	}
	public readonly creationTimestamp?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly recommendedSize?: number;
	public readonly region?: string;
	public readonly scalingScheduleStatus?: { [P in string]: ScalingScheduleStatus
	};
	public readonly selfLink?: string;
	public readonly selfLinkWithId?: string;
	public readonly status?: string;
	public readonly statusDetails?: AutoscalerStatusDetails[];
	public readonly zone?: string;
}
export interface RegionAutoscalersComponentOutputs {
	readonly creationTimestamp?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly recommendedSize?: number;
	readonly region?: string;
	readonly scalingScheduleStatus?: { [P in string]: ScalingScheduleStatus };
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
	readonly status?: string;
	readonly statusDetails?: AutoscalerStatusDetails[];
	readonly zone?: string;
}
export interface RegionAutoscalersComponentInputs {
	readonly autoscalingPolicy?: AutoscalingPolicy;
	readonly description?: string;
	readonly name: string;
	readonly requestId?: string;
	readonly target?: string;
}
export interface Autoscaler {
	readonly autoscalingPolicy?: AutoscalingPolicy;
	readonly creationTimestamp?: string;
	readonly description?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly name?: string;
	readonly recommendedSize?: number;
	readonly region?: string;
	readonly scalingScheduleStatus?: { [P in string]: ScalingScheduleStatus };
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
	readonly status?: string;
	readonly statusDetails?: AutoscalerStatusDetails[];
	readonly target?: string;
	readonly zone?: string;
}
export interface AutoscalerStatusDetails {
	readonly message?: string;
	readonly type?: string;
}
export interface AutoscalingPolicy {
	readonly coolDownPeriodSec?: number;
	readonly cpuUtilization?: AutoscalingPolicyCpuUtilization;
	readonly customMetricUtilizations?: AutoscalingPolicyCustomMetricUtilization[];
	readonly loadBalancingUtilization?: AutoscalingPolicyLoadBalancingUtilization;
	readonly maxNumReplicas?: number;
	readonly minNumReplicas?: number;
	readonly mode?: string;
	readonly scaleDownControl?: AutoscalingPolicyScaleDownControl;
	readonly scaleInControl?: AutoscalingPolicyScaleInControl;
	readonly scalingSchedules?: { [P in string]: AutoscalingPolicyScalingSchedule };
}
export interface AutoscalingPolicyCpuUtilization {
	readonly predictiveMethod?: string;
	readonly utilizationTarget?: number;
}
export interface AutoscalingPolicyCustomMetricUtilization {
	readonly filter?: string;
	readonly metric?: string;
	readonly singleInstanceAssignment?: number;
	readonly utilizationTarget?: number;
	readonly utilizationTargetType?: string;
}
export interface AutoscalingPolicyLoadBalancingUtilization {
	readonly utilizationTarget?: number;
}
export interface AutoscalingPolicyScaleDownControl {
	readonly maxScaledDownReplicas?: FixedOrPercent;
	readonly timeWindowSec?: number;
}
export interface AutoscalingPolicyScaleInControl {
	readonly maxScaledInReplicas?: FixedOrPercent;
	readonly timeWindowSec?: number;
}
export interface AutoscalingPolicyScalingSchedule {
	readonly description?: string;
	readonly disabled?: boolean;
	readonly durationSec?: number;
	readonly minRequiredReplicas?: number;
	readonly schedule?: string;
	readonly timeZone?: string;
}
export interface FixedOrPercent {
	readonly calculated?: number;
	readonly fixed?: number;
	readonly percent?: number;
}
export interface ScalingScheduleStatus {
	readonly lastStartTime?: string;
	readonly nextStartTime?: string;
	readonly state?: string;
}
export default {
	RegionAutoscalers: RegionAutoscalers,
};

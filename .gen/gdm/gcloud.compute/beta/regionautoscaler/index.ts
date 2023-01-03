import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export interface Autoscaler {
	readonly autoscalingPolicy?: AutoscalingPolicy | undefined;
	readonly creationTimestamp?: string | undefined;
	readonly description?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly name?: string | undefined;
	readonly recommendedSize?: number | undefined;
	readonly region?: string | undefined;
	readonly scalingScheduleStatus?: { [P in string]: ScalingScheduleStatus } | undefined;
	readonly selfLink?: string | undefined;
	readonly status?: string | undefined;
	readonly statusDetails?: AutoscalerStatusDetails[] | undefined;
	readonly target?: string | undefined;
	readonly zone?: string | undefined;
}
export interface AutoscalerStatusDetails {
	readonly message?: string | undefined;
	readonly type?: string | undefined;
}
export interface AutoscalingPolicy {
	readonly coolDownPeriodSec?: number | undefined;
	readonly cpuUtilization?: AutoscalingPolicyCpuUtilization | undefined;
	readonly customMetricUtilizations?: AutoscalingPolicyCustomMetricUtilization[] | undefined;
	readonly loadBalancingUtilization?: AutoscalingPolicyLoadBalancingUtilization | undefined;
	readonly maxNumReplicas?: number | undefined;
	readonly minNumReplicas?: number | undefined;
	readonly mode?: string | undefined;
	readonly scaleDownControl?: AutoscalingPolicyScaleDownControl | undefined;
	readonly scaleInControl?: AutoscalingPolicyScaleInControl | undefined;
	readonly scalingSchedules?: { [P in string]: AutoscalingPolicyScalingSchedule } | undefined;
}
export interface AutoscalingPolicyCpuUtilization {
	readonly predictiveMethod?: string | undefined;
	readonly utilizationTarget?: number | undefined;
}
export interface AutoscalingPolicyCustomMetricUtilization {
	readonly filter?: string | undefined;
	readonly metric?: string | undefined;
	readonly singleInstanceAssignment?: number | undefined;
	readonly utilizationTarget?: number | undefined;
	readonly utilizationTargetType?: string | undefined;
}
export interface AutoscalingPolicyLoadBalancingUtilization {
	readonly utilizationTarget?: number | undefined;
}
export interface AutoscalingPolicyScaleDownControl {
	readonly maxScaledDownReplicas?: FixedOrPercent | undefined;
	readonly timeWindowSec?: number | undefined;
}
export interface AutoscalingPolicyScaleInControl {
	readonly maxScaledInReplicas?: FixedOrPercent | undefined;
	readonly timeWindowSec?: number | undefined;
}
export interface AutoscalingPolicyScalingSchedule {
	readonly description?: string | undefined;
	readonly disabled?: boolean | undefined;
	readonly durationSec?: number | undefined;
	readonly minRequiredReplicas?: number | undefined;
	readonly schedule?: string | undefined;
	readonly timeZone?: string | undefined;
}
export interface FixedOrPercent {
	readonly calculated?: number | undefined;
	readonly fixed?: number | undefined;
	readonly percent?: number | undefined;
}
export interface ScalingScheduleStatus {
	readonly lastStartTime?: string | undefined;
	readonly nextStartTime?: string | undefined;
	readonly state?: string | undefined;
}
export default {};

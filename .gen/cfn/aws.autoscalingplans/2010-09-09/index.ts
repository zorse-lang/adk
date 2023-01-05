import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class ScalingPlan extends CfnResource<ScalingPlanComponentInputs> implements ScalingPlanComponentOutputs {
	constructor(entity: ADKEntity, options: ScalingPlanComponentInputs) {
		super(entity, options.LogicalId, "AWS::AutoScalingPlans::ScalingPlan", options);
	}
	public readonly ScalingPlanName: string;
	public readonly ScalingPlanVersion: string;
}
export interface ScalingPlanComponentOutputs {
	readonly ScalingPlanName: string;
	readonly ScalingPlanVersion: string;
}
export interface ScalingPlanComponentInputs {
	readonly ApplicationSource: ApplicationSource;
	readonly ScalingInstructions: ScalingInstruction[];
	readonly LogicalId: string;
}
export interface ApplicationSource {
	readonly CloudFormationStackARN?: string | undefined;
	readonly TagFilters?: TagFilter[] | undefined;
}
export interface CustomizedLoadMetricSpecification {
	readonly Dimensions?: MetricDimension[] | undefined;
	readonly MetricName: string;
	readonly Namespace: string;
	readonly Statistic: string;
	readonly Unit?: string | undefined;
}
export interface CustomizedScalingMetricSpecification {
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
export interface PredefinedLoadMetricSpecification {
	readonly PredefinedLoadMetricType: string;
	readonly ResourceLabel?: string | undefined;
}
export interface PredefinedScalingMetricSpecification {
	readonly PredefinedScalingMetricType: string;
	readonly ResourceLabel?: string | undefined;
}
export interface ScalingInstruction {
	readonly CustomizedLoadMetricSpecification?: CustomizedLoadMetricSpecification | undefined;
	readonly DisableDynamicScaling?: boolean | undefined;
	readonly MaxCapacity: number;
	readonly MinCapacity: number;
	readonly PredefinedLoadMetricSpecification?: PredefinedLoadMetricSpecification | undefined;
	readonly PredictiveScalingMaxCapacityBehavior?: string | undefined;
	readonly PredictiveScalingMaxCapacityBuffer?: number | undefined;
	readonly PredictiveScalingMode?: string | undefined;
	readonly ResourceId: string;
	readonly ScalableDimension: string;
	readonly ScalingPolicyUpdateBehavior?: string | undefined;
	readonly ScheduledActionBufferTime?: number | undefined;
	readonly ServiceNamespace: string;
	readonly TargetTrackingConfigurations: TargetTrackingConfiguration[];
}
export interface TagFilter {
	readonly Key: string;
	readonly Values?: string[] | undefined;
}
export interface TargetTrackingConfiguration {
	readonly CustomizedScalingMetricSpecification?: CustomizedScalingMetricSpecification | undefined;
	readonly DisableScaleIn?: boolean | undefined;
	readonly EstimatedInstanceWarmup?: number | undefined;
	readonly PredefinedScalingMetricSpecification?: PredefinedScalingMetricSpecification | undefined;
	readonly ScaleInCooldown?: number | undefined;
	readonly ScaleOutCooldown?: number | undefined;
	readonly TargetValue: number;
}
export default {
	ScalingPlan: ScalingPlan,
};

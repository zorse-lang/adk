import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Experiment extends CfnResource<ExperimentComponentInputs> implements ExperimentComponentOutputs {
	constructor(entity: ADKEntity, options: ExperimentComponentInputs) {
		super(entity, options.LogicalId, "AWS::Evidently::Experiment", options);
	}
	public readonly Arn: string;
}
export interface ExperimentComponentOutputs {
	readonly Arn: string;
}
export interface ExperimentComponentInputs {
	readonly MetricGoals: MetricGoalObject[];
	readonly Name: string;
	readonly OnlineAbConfig: OnlineAbConfigObject;
	readonly Project: string;
	readonly Treatments: TreatmentObject[];
	readonly Description?: string | undefined;
	readonly RandomizationSalt?: string | undefined;
	readonly RemoveSegment?: boolean | undefined;
	readonly RunningStatus?: RunningStatusObject | undefined;
	readonly SamplingRate?: number | undefined;
	readonly Segment?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class Feature extends CfnResource<FeatureComponentInputs> implements FeatureComponentOutputs {
	constructor(entity: ADKEntity, options: FeatureComponentInputs) {
		super(entity, options.LogicalId, "AWS::Evidently::Feature", options);
	}
	public readonly Arn: string;
}
export interface FeatureComponentOutputs {
	readonly Arn: string;
}
export interface FeatureComponentInputs {
	readonly Name: string;
	readonly Project: string;
	readonly Variations: VariationObject[];
	readonly DefaultVariation?: string | undefined;
	readonly Description?: string | undefined;
	readonly EntityOverrides?: EntityOverride[] | undefined;
	readonly EvaluationStrategy?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class Launch extends CfnResource<LaunchComponentInputs> implements LaunchComponentOutputs {
	constructor(entity: ADKEntity, options: LaunchComponentInputs) {
		super(entity, options.LogicalId, "AWS::Evidently::Launch", options);
	}
	public readonly Arn: string;
}
export interface LaunchComponentOutputs {
	readonly Arn: string;
}
export interface LaunchComponentInputs {
	readonly Groups: LaunchGroupObject[];
	readonly Name: string;
	readonly Project: string;
	readonly ScheduledSplitsConfig: StepConfig[];
	readonly Description?: string | undefined;
	readonly ExecutionStatus?: ExecutionStatusObject | undefined;
	readonly MetricMonitors?: MetricDefinitionObject[] | undefined;
	readonly RandomizationSalt?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class Project extends CfnResource<ProjectComponentInputs> implements ProjectComponentOutputs {
	constructor(entity: ADKEntity, options: ProjectComponentInputs) {
		super(entity, options.LogicalId, "AWS::Evidently::Project", options);
	}
	public readonly Arn: string;
}
export interface ProjectComponentOutputs {
	readonly Arn: string;
}
export interface ProjectComponentInputs {
	readonly Name: string;
	readonly AppConfigResource?: AppConfigResourceObject | undefined;
	readonly DataDelivery?: DataDeliveryObject | undefined;
	readonly Description?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class Segment extends CfnResource<SegmentComponentInputs> implements SegmentComponentOutputs {
	constructor(entity: ADKEntity, options: SegmentComponentInputs) {
		super(entity, options.LogicalId, "AWS::Evidently::Segment", options);
	}
	public readonly Arn: string;
}
export interface SegmentComponentOutputs {
	readonly Arn: string;
}
export interface SegmentComponentInputs {
	readonly Name: string;
	readonly Description?: string | undefined;
	readonly Pattern?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export interface MetricGoalObject {
	readonly DesiredChange: string;
	readonly EntityIdKey: string;
	readonly EventPattern: string;
	readonly MetricName: string;
	readonly UnitLabel?: string | undefined;
	readonly ValueKey: string;
}
export interface OnlineAbConfigObject {
	readonly ControlTreatmentName?: string | undefined;
	readonly TreatmentWeights?: TreatmentToWeight[] | undefined;
}
export interface RunningStatusObject {
	readonly AnalysisCompleteTime?: string | undefined;
	readonly DesiredState?: string | undefined;
	readonly Reason?: string | undefined;
	readonly Status: string;
}
export interface TreatmentObject {
	readonly Description?: string | undefined;
	readonly Feature: string;
	readonly TreatmentName: string;
	readonly Variation: string;
}
export interface TreatmentToWeight {
	readonly SplitWeight: number;
	readonly Treatment: string;
}
export interface EntityOverride {
	readonly EntityId?: string | undefined;
	readonly Variation?: string | undefined;
}
export interface VariationObject {
	readonly BooleanValue?: boolean | undefined;
	readonly DoubleValue?: number | undefined;
	readonly LongValue?: number | undefined;
	readonly StringValue?: string | undefined;
	readonly VariationName: string;
}
export interface ExecutionStatusObject {
	readonly DesiredState?: string | undefined;
	readonly Reason?: string | undefined;
	readonly Status: string;
}
export interface GroupToWeight {
	readonly GroupName: string;
	readonly SplitWeight: number;
}
export interface LaunchGroupObject {
	readonly Description?: string | undefined;
	readonly Feature: string;
	readonly GroupName: string;
	readonly Variation: string;
}
export interface MetricDefinitionObject {
	readonly EntityIdKey: string;
	readonly EventPattern: string;
	readonly MetricName: string;
	readonly UnitLabel?: string | undefined;
	readonly ValueKey: string;
}
export interface SegmentOverride {
	readonly EvaluationOrder: number;
	readonly Segment: string;
	readonly Weights: GroupToWeight[];
}
export interface StepConfig {
	readonly GroupWeights: GroupToWeight[];
	readonly SegmentOverrides?: SegmentOverride[] | undefined;
	readonly StartTime: string;
}
export interface AppConfigResourceObject {
	readonly ApplicationId: string;
	readonly EnvironmentId: string;
}
export interface DataDeliveryObject {
	readonly LogGroup?: string | undefined;
	readonly S3?: S3Destination | undefined;
}
export interface S3Destination {
	readonly BucketName: string;
	readonly Prefix?: string | undefined;
}
export default {
	Experiment: Experiment,
	Feature: Feature,
	Launch: Launch,
	Project: Project,
	Segment: Segment,
};

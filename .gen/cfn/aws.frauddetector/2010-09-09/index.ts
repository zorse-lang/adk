import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Detector extends CfnResource<DetectorComponentInputs> implements DetectorComponentOutputs {
	constructor(entity: ADKEntity, options: DetectorComponentInputs) {
		super(entity, options.LogicalId, "AWS::FraudDetector::Detector", options);
	}
	public readonly Arn: string;
	public readonly CreatedTime: string;
	public readonly DetectorVersionId: string;
	public readonly EventTypeArn: string;
	public readonly EventTypeCreatedTime: string;
	public readonly EventTypeLastUpdatedTime: string;
	public readonly LastUpdatedTime: string;
}
export interface DetectorComponentOutputs {
	readonly Arn: string;
	readonly CreatedTime: string;
	readonly DetectorVersionId: string;
	readonly EventTypeArn: string;
	readonly EventTypeCreatedTime: string;
	readonly EventTypeLastUpdatedTime: string;
	readonly LastUpdatedTime: string;
}
export interface DetectorComponentInputs {
	readonly DetectorId: string;
	readonly EventType: EventType;
	readonly Rules: Rule[];
	readonly AssociatedModels?: Model[] | undefined;
	readonly Description?: string | undefined;
	readonly DetectorVersionStatus?: string | undefined;
	readonly RuleExecutionMode?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class EntityType extends CfnResource<EntityTypeComponentInputs> implements EntityTypeComponentOutputs {
	constructor(entity: ADKEntity, options: EntityTypeComponentInputs) {
		super(entity, options.LogicalId, "AWS::FraudDetector::EntityType", options);
	}
	public readonly Arn: string;
	public readonly CreatedTime: string;
	public readonly LastUpdatedTime: string;
}
export interface EntityTypeComponentOutputs {
	readonly Arn: string;
	readonly CreatedTime: string;
	readonly LastUpdatedTime: string;
}
export interface EntityTypeComponentInputs {
	readonly Name: string;
	readonly Description?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class EventType extends CfnResource<EventTypeComponentInputs> implements EventTypeComponentOutputs {
	constructor(entity: ADKEntity, options: EventTypeComponentInputs) {
		super(entity, options.LogicalId, "AWS::FraudDetector::EventType", options);
	}
	public readonly Arn: string;
	public readonly CreatedTime: string;
	public readonly LastUpdatedTime: string;
}
export interface EventTypeComponentOutputs {
	readonly Arn: string;
	readonly CreatedTime: string;
	readonly LastUpdatedTime: string;
}
export interface EventTypeComponentInputs {
	readonly EntityTypes: EntityType[];
	readonly EventVariables: EventVariable[];
	readonly Labels: Label[];
	readonly Name: string;
	readonly Description?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class Label extends CfnResource<LabelComponentInputs> implements LabelComponentOutputs {
	constructor(entity: ADKEntity, options: LabelComponentInputs) {
		super(entity, options.LogicalId, "AWS::FraudDetector::Label", options);
	}
	public readonly Arn: string;
	public readonly CreatedTime: string;
	public readonly LastUpdatedTime: string;
}
export interface LabelComponentOutputs {
	readonly Arn: string;
	readonly CreatedTime: string;
	readonly LastUpdatedTime: string;
}
export interface LabelComponentInputs {
	readonly Name: string;
	readonly Description?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class Outcome extends CfnResource<OutcomeComponentInputs> implements OutcomeComponentOutputs {
	constructor(entity: ADKEntity, options: OutcomeComponentInputs) {
		super(entity, options.LogicalId, "AWS::FraudDetector::Outcome", options);
	}
	public readonly Arn: string;
	public readonly CreatedTime: string;
	public readonly LastUpdatedTime: string;
}
export interface OutcomeComponentOutputs {
	readonly Arn: string;
	readonly CreatedTime: string;
	readonly LastUpdatedTime: string;
}
export interface OutcomeComponentInputs {
	readonly Name: string;
	readonly Description?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class Variable extends CfnResource<VariableComponentInputs> implements VariableComponentOutputs {
	constructor(entity: ADKEntity, options: VariableComponentInputs) {
		super(entity, options.LogicalId, "AWS::FraudDetector::Variable", options);
	}
	public readonly Arn: string;
	public readonly CreatedTime: string;
	public readonly LastUpdatedTime: string;
}
export interface VariableComponentOutputs {
	readonly Arn: string;
	readonly CreatedTime: string;
	readonly LastUpdatedTime: string;
}
export interface VariableComponentInputs {
	readonly DataSource: string;
	readonly DataType: string;
	readonly DefaultValue: string;
	readonly Name: string;
	readonly Description?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly VariableType?: string | undefined;
	readonly LogicalId: string;
}
export interface EntityTypeOptions {
	readonly Arn?: string | undefined;
	readonly CreatedTime?: string | undefined;
	readonly Description?: string | undefined;
	readonly Inline?: boolean | undefined;
	readonly LastUpdatedTime?: string | undefined;
	readonly Name?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
}
export interface EventTypeOptions {
	readonly Arn?: string | undefined;
	readonly CreatedTime?: string | undefined;
	readonly Description?: string | undefined;
	readonly EntityTypes?: EntityType[] | undefined;
	readonly EventVariables?: EventVariable[] | undefined;
	readonly Inline?: boolean | undefined;
	readonly Labels?: Label[] | undefined;
	readonly LastUpdatedTime?: string | undefined;
	readonly Name?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
}
export interface EventVariable {
	readonly Arn?: string | undefined;
	readonly CreatedTime?: string | undefined;
	readonly DataSource?: string | undefined;
	readonly DataType?: string | undefined;
	readonly DefaultValue?: string | undefined;
	readonly Description?: string | undefined;
	readonly Inline?: boolean | undefined;
	readonly LastUpdatedTime?: string | undefined;
	readonly Name?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly VariableType?: string | undefined;
}
export interface LabelOptions {
	readonly Arn?: string | undefined;
	readonly CreatedTime?: string | undefined;
	readonly Description?: string | undefined;
	readonly Inline?: boolean | undefined;
	readonly LastUpdatedTime?: string | undefined;
	readonly Name?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
}
export interface Model {
	readonly Arn?: string | undefined;
}
export interface OutcomeOptions {
	readonly Arn?: string | undefined;
	readonly CreatedTime?: string | undefined;
	readonly Description?: string | undefined;
	readonly Inline?: boolean | undefined;
	readonly LastUpdatedTime?: string | undefined;
	readonly Name?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
}
export interface Rule {
	readonly Arn?: string | undefined;
	readonly CreatedTime?: string | undefined;
	readonly Description?: string | undefined;
	readonly DetectorId?: string | undefined;
	readonly Expression?: string | undefined;
	readonly Language?: string | undefined;
	readonly LastUpdatedTime?: string | undefined;
	readonly Outcomes?: Outcome[] | undefined;
	readonly RuleId?: string | undefined;
	readonly RuleVersion?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
}
export default {
	Detector: Detector,
	EntityType: EntityType,
	EventType: EventType,
	Label: Label,
	Outcome: Outcome,
	Variable: Variable,
};

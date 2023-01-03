import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class AlarmModel extends CfnResource<AlarmModelComponentInputs> implements AlarmModelComponentOutputs {
	constructor(entity: ADKEntity, options: AlarmModelComponentInputs) {
		super(entity, options.LogicalId, "AWS::IoTEvents::AlarmModel", options);
	}
}
export interface AlarmModelComponentOutputs {}
export interface AlarmModelComponentInputs {
	readonly AlarmRule: AlarmRule;
	readonly RoleArn: string;
	readonly AlarmCapabilities?: (AlarmCapabilities | undefined) | undefined;
	readonly AlarmEventActions?: (AlarmEventActions | undefined) | undefined;
	readonly AlarmModelDescription?: (string | undefined) | undefined;
	readonly AlarmModelName?: (string | undefined) | undefined;
	readonly Key?: (string | undefined) | undefined;
	readonly Severity?: (number | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class DetectorModel extends CfnResource<DetectorModelComponentInputs> implements DetectorModelComponentOutputs {
	constructor(entity: ADKEntity, options: DetectorModelComponentInputs) {
		super(entity, options.LogicalId, "AWS::IoTEvents::DetectorModel", options);
	}
}
export interface DetectorModelComponentOutputs {}
export interface DetectorModelComponentInputs {
	readonly DetectorModelDefinition: DetectorModelDefinition;
	readonly RoleArn: string;
	readonly DetectorModelDescription?: (string | undefined) | undefined;
	readonly DetectorModelName?: (string | undefined) | undefined;
	readonly EvaluationMethod?: (string | undefined) | undefined;
	readonly Key?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class Input extends CfnResource<InputComponentInputs> implements InputComponentOutputs {
	constructor(entity: ADKEntity, options: InputComponentInputs) {
		super(entity, options.LogicalId, "AWS::IoTEvents::Input", options);
	}
}
export interface InputComponentOutputs {}
export interface InputComponentInputs {
	readonly InputDefinition: InputDefinition;
	readonly InputDescription?: (string | undefined) | undefined;
	readonly InputName?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export interface AcknowledgeFlow {
	readonly Enabled?: (boolean | undefined) | undefined;
}
export interface AlarmAction {
	readonly DynamoDB?: (DynamoDB | undefined) | undefined;
	readonly DynamoDBv2?: (DynamoDBv2 | undefined) | undefined;
	readonly Firehose?: (Firehose | undefined) | undefined;
	readonly IotEvents?: (IotEvents | undefined) | undefined;
	readonly IotSiteWise?: (IotSiteWise | undefined) | undefined;
	readonly IotTopicPublish?: (IotTopicPublish | undefined) | undefined;
	readonly Lambda?: (Lambda | undefined) | undefined;
	readonly Sns?: (Sns | undefined) | undefined;
	readonly Sqs?: (Sqs | undefined) | undefined;
}
export interface AlarmCapabilities {
	readonly AcknowledgeFlow?: (AcknowledgeFlow | undefined) | undefined;
	readonly InitializationConfiguration?: (InitializationConfiguration | undefined) | undefined;
}
export interface AlarmEventActions {
	readonly AlarmActions?: (AlarmAction[] | undefined) | undefined;
}
export interface AlarmRule {
	readonly SimpleRule?: (SimpleRule | undefined) | undefined;
}
export interface AssetPropertyTimestamp {
	readonly OffsetInNanos?: (string | undefined) | undefined;
	readonly TimeInSeconds: string;
}
export interface AssetPropertyValue {
	readonly Quality?: (string | undefined) | undefined;
	readonly Timestamp?: (AssetPropertyTimestamp | undefined) | undefined;
	readonly Value: AssetPropertyVariant;
}
export interface AssetPropertyVariant {
	readonly BooleanValue?: (string | undefined) | undefined;
	readonly DoubleValue?: (string | undefined) | undefined;
	readonly IntegerValue?: (string | undefined) | undefined;
	readonly StringValue?: (string | undefined) | undefined;
}
export interface DynamoDB {
	readonly HashKeyField: string;
	readonly HashKeyType?: (string | undefined) | undefined;
	readonly HashKeyValue: string;
	readonly Operation?: (string | undefined) | undefined;
	readonly Payload?: (Payload | undefined) | undefined;
	readonly PayloadField?: (string | undefined) | undefined;
	readonly RangeKeyField?: (string | undefined) | undefined;
	readonly RangeKeyType?: (string | undefined) | undefined;
	readonly RangeKeyValue?: (string | undefined) | undefined;
	readonly TableName: string;
}
export interface DynamoDBv2 {
	readonly Payload?: (Payload | undefined) | undefined;
	readonly TableName: string;
}
export interface Firehose {
	readonly DeliveryStreamName: string;
	readonly Payload?: (Payload | undefined) | undefined;
	readonly Separator?: (string | undefined) | undefined;
}
export interface InitializationConfiguration {
	readonly DisabledOnInitialization: boolean;
}
export interface IotEvents {
	readonly InputName: string;
	readonly Payload?: (Payload | undefined) | undefined;
}
export interface IotSiteWise {
	readonly AssetId?: (string | undefined) | undefined;
	readonly EntryId?: (string | undefined) | undefined;
	readonly PropertyAlias?: (string | undefined) | undefined;
	readonly PropertyId?: (string | undefined) | undefined;
	readonly PropertyValue?: (AssetPropertyValue | undefined) | undefined;
}
export interface IotTopicPublish {
	readonly MqttTopic: string;
	readonly Payload?: (Payload | undefined) | undefined;
}
export interface Lambda {
	readonly FunctionArn: string;
	readonly Payload?: (Payload | undefined) | undefined;
}
export interface Payload {
	readonly ContentExpression: string;
	readonly Type: string;
}
export interface SimpleRule {
	readonly ComparisonOperator: string;
	readonly InputProperty: string;
	readonly Threshold: string;
}
export interface Sns {
	readonly Payload?: (Payload | undefined) | undefined;
	readonly TargetArn: string;
}
export interface Sqs {
	readonly Payload?: (Payload | undefined) | undefined;
	readonly QueueUrl: string;
	readonly UseBase64?: (boolean | undefined) | undefined;
}
export interface Action {
	readonly ClearTimer?: (ClearTimer | undefined) | undefined;
	readonly DynamoDB?: (DynamoDB | undefined) | undefined;
	readonly DynamoDBv2?: (DynamoDBv2 | undefined) | undefined;
	readonly Firehose?: (Firehose | undefined) | undefined;
	readonly IotEvents?: (IotEvents | undefined) | undefined;
	readonly IotSiteWise?: (IotSiteWise | undefined) | undefined;
	readonly IotTopicPublish?: (IotTopicPublish | undefined) | undefined;
	readonly Lambda?: (Lambda | undefined) | undefined;
	readonly ResetTimer?: (ResetTimer | undefined) | undefined;
	readonly SetTimer?: (SetTimer | undefined) | undefined;
	readonly SetVariable?: (SetVariable | undefined) | undefined;
	readonly Sns?: (Sns | undefined) | undefined;
	readonly Sqs?: (Sqs | undefined) | undefined;
}
export interface ClearTimer {
	readonly TimerName: string;
}
export interface DetectorModelDefinition {
	readonly InitialStateName: string;
	readonly States: State[];
}
export interface Event {
	readonly Actions?: (Action[] | undefined) | undefined;
	readonly Condition?: (string | undefined) | undefined;
	readonly EventName: string;
}
export interface OnEnter {
	readonly Events?: (Event[] | undefined) | undefined;
}
export interface OnExit {
	readonly Events?: (Event[] | undefined) | undefined;
}
export interface OnInput {
	readonly Events?: (Event[] | undefined) | undefined;
	readonly TransitionEvents?: (TransitionEvent[] | undefined) | undefined;
}
export interface ResetTimer {
	readonly TimerName: string;
}
export interface SetTimer {
	readonly DurationExpression?: (string | undefined) | undefined;
	readonly Seconds?: (number | undefined) | undefined;
	readonly TimerName: string;
}
export interface SetVariable {
	readonly Value: string;
	readonly VariableName: string;
}
export interface State {
	readonly OnEnter?: (OnEnter | undefined) | undefined;
	readonly OnExit?: (OnExit | undefined) | undefined;
	readonly OnInput?: (OnInput | undefined) | undefined;
	readonly StateName: string;
}
export interface TransitionEvent {
	readonly Actions?: (Action[] | undefined) | undefined;
	readonly Condition: string;
	readonly EventName: string;
	readonly NextState: string;
}
export interface Attribute {
	readonly JsonPath: string;
}
export interface InputDefinition {
	readonly Attributes: Attribute[];
}
export default {
	AlarmModel: AlarmModel,
	DetectorModel: DetectorModel,
	Input: Input,
};

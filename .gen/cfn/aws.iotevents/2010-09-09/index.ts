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
	readonly AlarmCapabilities?: AlarmCapabilities | undefined;
	readonly AlarmEventActions?: AlarmEventActions | undefined;
	readonly AlarmModelDescription?: string | undefined;
	readonly AlarmModelName?: string | undefined;
	readonly Key?: string | undefined;
	readonly Severity?: number | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
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
	readonly DetectorModelDescription?: string | undefined;
	readonly DetectorModelName?: string | undefined;
	readonly EvaluationMethod?: string | undefined;
	readonly Key?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
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
	readonly InputDescription?: string | undefined;
	readonly InputName?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export interface AcknowledgeFlow {
	readonly Enabled?: boolean | undefined;
}
export interface AlarmAction {
	readonly DynamoDB?: DynamoDB | undefined;
	readonly DynamoDBv2?: DynamoDBv2 | undefined;
	readonly Firehose?: Firehose | undefined;
	readonly IotEvents?: IotEvents | undefined;
	readonly IotSiteWise?: IotSiteWise | undefined;
	readonly IotTopicPublish?: IotTopicPublish | undefined;
	readonly Lambda?: Lambda | undefined;
	readonly Sns?: Sns | undefined;
	readonly Sqs?: Sqs | undefined;
}
export interface AlarmCapabilities {
	readonly AcknowledgeFlow?: AcknowledgeFlow | undefined;
	readonly InitializationConfiguration?: InitializationConfiguration | undefined;
}
export interface AlarmEventActions {
	readonly AlarmActions?: AlarmAction[] | undefined;
}
export interface AlarmRule {
	readonly SimpleRule?: SimpleRule | undefined;
}
export interface AssetPropertyTimestamp {
	readonly OffsetInNanos?: string | undefined;
	readonly TimeInSeconds: string;
}
export interface AssetPropertyValue {
	readonly Quality?: string | undefined;
	readonly Timestamp?: AssetPropertyTimestamp | undefined;
	readonly Value: AssetPropertyVariant;
}
export interface AssetPropertyVariant {
	readonly BooleanValue?: string | undefined;
	readonly DoubleValue?: string | undefined;
	readonly IntegerValue?: string | undefined;
	readonly StringValue?: string | undefined;
}
export interface DynamoDB {
	readonly HashKeyField: string;
	readonly HashKeyType?: string | undefined;
	readonly HashKeyValue: string;
	readonly Operation?: string | undefined;
	readonly Payload?: Payload | undefined;
	readonly PayloadField?: string | undefined;
	readonly RangeKeyField?: string | undefined;
	readonly RangeKeyType?: string | undefined;
	readonly RangeKeyValue?: string | undefined;
	readonly TableName: string;
}
export interface DynamoDBv2 {
	readonly Payload?: Payload | undefined;
	readonly TableName: string;
}
export interface Firehose {
	readonly DeliveryStreamName: string;
	readonly Payload?: Payload | undefined;
	readonly Separator?: string | undefined;
}
export interface InitializationConfiguration {
	readonly DisabledOnInitialization: boolean;
}
export interface IotEvents {
	readonly InputName: string;
	readonly Payload?: Payload | undefined;
}
export interface IotSiteWise {
	readonly AssetId?: string | undefined;
	readonly EntryId?: string | undefined;
	readonly PropertyAlias?: string | undefined;
	readonly PropertyId?: string | undefined;
	readonly PropertyValue?: AssetPropertyValue | undefined;
}
export interface IotTopicPublish {
	readonly MqttTopic: string;
	readonly Payload?: Payload | undefined;
}
export interface Lambda {
	readonly FunctionArn: string;
	readonly Payload?: Payload | undefined;
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
	readonly Payload?: Payload | undefined;
	readonly TargetArn: string;
}
export interface Sqs {
	readonly Payload?: Payload | undefined;
	readonly QueueUrl: string;
	readonly UseBase64?: boolean | undefined;
}
export interface Action {
	readonly ClearTimer?: ClearTimer | undefined;
	readonly DynamoDB?: DynamoDB | undefined;
	readonly DynamoDBv2?: DynamoDBv2 | undefined;
	readonly Firehose?: Firehose | undefined;
	readonly IotEvents?: IotEvents | undefined;
	readonly IotSiteWise?: IotSiteWise | undefined;
	readonly IotTopicPublish?: IotTopicPublish | undefined;
	readonly Lambda?: Lambda | undefined;
	readonly ResetTimer?: ResetTimer | undefined;
	readonly SetTimer?: SetTimer | undefined;
	readonly SetVariable?: SetVariable | undefined;
	readonly Sns?: Sns | undefined;
	readonly Sqs?: Sqs | undefined;
}
export interface ClearTimer {
	readonly TimerName: string;
}
export interface DetectorModelDefinition {
	readonly InitialStateName: string;
	readonly States: State[];
}
export interface Event {
	readonly Actions?: Action[] | undefined;
	readonly Condition?: string | undefined;
	readonly EventName: string;
}
export interface OnEnter {
	readonly Events?: Event[] | undefined;
}
export interface OnExit {
	readonly Events?: Event[] | undefined;
}
export interface OnInput {
	readonly Events?: Event[] | undefined;
	readonly TransitionEvents?: TransitionEvent[] | undefined;
}
export interface ResetTimer {
	readonly TimerName: string;
}
export interface SetTimer {
	readonly DurationExpression?: string | undefined;
	readonly Seconds?: number | undefined;
	readonly TimerName: string;
}
export interface SetVariable {
	readonly Value: string;
	readonly VariableName: string;
}
export interface State {
	readonly OnEnter?: OnEnter | undefined;
	readonly OnExit?: OnExit | undefined;
	readonly OnInput?: OnInput | undefined;
	readonly StateName: string;
}
export interface TransitionEvent {
	readonly Actions?: Action[] | undefined;
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

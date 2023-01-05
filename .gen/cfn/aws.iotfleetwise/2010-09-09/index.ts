import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Campaign extends CfnResource<CampaignComponentInputs> implements CampaignComponentOutputs {
	constructor(entity: ADKEntity, options: CampaignComponentInputs) {
		super(entity, options.LogicalId, "AWS::IoTFleetWise::Campaign", options);
	}
	public readonly Arn: string;
	public readonly CreationTime: string;
	public readonly LastModificationTime: string;
	public readonly Status: string;
}
export interface CampaignComponentOutputs {
	readonly Arn: string;
	readonly CreationTime: string;
	readonly LastModificationTime: string;
	readonly Status: string;
}
export interface CampaignComponentInputs {
	readonly Action: string;
	readonly CollectionScheme: CollectionScheme;
	readonly Name: string;
	readonly SignalCatalogArn: string;
	readonly TargetArn: string;
	readonly Compression?: string | undefined;
	readonly DataExtraDimensions?: string[] | undefined;
	readonly Description?: string | undefined;
	readonly DiagnosticsMode?: string | undefined;
	readonly ExpiryTime?: string | undefined;
	readonly PostTriggerCollectionDuration?: number | undefined;
	readonly Priority?: number | undefined;
	readonly SignalsToCollect?: SignalInformation[] | undefined;
	readonly SpoolingMode?: string | undefined;
	readonly StartTime?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class DecoderManifest
	extends CfnResource<DecoderManifestComponentInputs>
	implements DecoderManifestComponentOutputs
{
	constructor(entity: ADKEntity, options: DecoderManifestComponentInputs) {
		super(entity, options.LogicalId, "AWS::IoTFleetWise::DecoderManifest", options);
	}
	public readonly Arn: string;
	public readonly CreationTime: string;
	public readonly LastModificationTime: string;
}
export interface DecoderManifestComponentOutputs {
	readonly Arn: string;
	readonly CreationTime: string;
	readonly LastModificationTime: string;
}
export interface DecoderManifestComponentInputs {
	readonly ModelManifestArn: string;
	readonly Name: string;
	readonly Description?: string | undefined;
	readonly NetworkInterfaces?: NetworkInterfacesItems[] | undefined;
	readonly SignalDecoders?: SignalDecodersItems[] | undefined;
	readonly Status?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class Fleet extends CfnResource<FleetComponentInputs> implements FleetComponentOutputs {
	constructor(entity: ADKEntity, options: FleetComponentInputs) {
		super(entity, options.LogicalId, "AWS::IoTFleetWise::Fleet", options);
	}
	public readonly Arn: string;
	public readonly CreationTime: string;
	public readonly LastModificationTime: string;
}
export interface FleetComponentOutputs {
	readonly Arn: string;
	readonly CreationTime: string;
	readonly LastModificationTime: string;
}
export interface FleetComponentInputs {
	readonly Id: string;
	readonly SignalCatalogArn: string;
	readonly Description?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class ModelManifest extends CfnResource<ModelManifestComponentInputs> implements ModelManifestComponentOutputs {
	constructor(entity: ADKEntity, options: ModelManifestComponentInputs) {
		super(entity, options.LogicalId, "AWS::IoTFleetWise::ModelManifest", options);
	}
	public readonly Arn: string;
	public readonly CreationTime: string;
	public readonly LastModificationTime: string;
}
export interface ModelManifestComponentOutputs {
	readonly Arn: string;
	readonly CreationTime: string;
	readonly LastModificationTime: string;
}
export interface ModelManifestComponentInputs {
	readonly Name: string;
	readonly SignalCatalogArn: string;
	readonly Description?: string | undefined;
	readonly Nodes?: string[] | undefined;
	readonly Status?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class SignalCatalog extends CfnResource<SignalCatalogComponentInputs> implements SignalCatalogComponentOutputs {
	constructor(entity: ADKEntity, options: SignalCatalogComponentInputs) {
		super(entity, options.LogicalId, "AWS::IoTFleetWise::SignalCatalog", options);
	}
	public readonly Arn: string;
	public readonly CreationTime: string;
	public readonly LastModificationTime: string;
	public readonly NodeCountsTotalActuators: number;
	public readonly NodeCountsTotalAttributes: number;
	public readonly NodeCountsTotalBranches: number;
	public readonly NodeCountsTotalNodes: number;
	public readonly NodeCountsTotalSensors: number;
}
export interface SignalCatalogComponentOutputs {
	readonly Arn: string;
	readonly CreationTime: string;
	readonly LastModificationTime: string;
	readonly NodeCountsTotalActuators: number;
	readonly NodeCountsTotalAttributes: number;
	readonly NodeCountsTotalBranches: number;
	readonly NodeCountsTotalNodes: number;
	readonly NodeCountsTotalSensors: number;
}
export interface SignalCatalogComponentInputs {
	readonly Description?: string | undefined;
	readonly Name?: string | undefined;
	readonly NodeCounts?: NodeCounts | undefined;
	readonly Nodes?: Node[] | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class Vehicle extends CfnResource<VehicleComponentInputs> implements VehicleComponentOutputs {
	constructor(entity: ADKEntity, options: VehicleComponentInputs) {
		super(entity, options.LogicalId, "AWS::IoTFleetWise::Vehicle", options);
	}
	public readonly Arn: string;
	public readonly CreationTime: string;
	public readonly LastModificationTime: string;
}
export interface VehicleComponentOutputs {
	readonly Arn: string;
	readonly CreationTime: string;
	readonly LastModificationTime: string;
}
export interface VehicleComponentInputs {
	readonly DecoderManifestArn: string;
	readonly ModelManifestArn: string;
	readonly Name: string;
	readonly AssociationBehavior?: string | undefined;
	readonly Attributes?: { [key: string]: string } | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export interface CollectionScheme {
	readonly ConditionBasedCollectionScheme?: ConditionBasedCollectionScheme | undefined;
	readonly TimeBasedCollectionScheme?: TimeBasedCollectionScheme | undefined;
}
export interface ConditionBasedCollectionScheme {
	readonly ConditionLanguageVersion?: number | undefined;
	readonly Expression: string;
	readonly MinimumTriggerIntervalMs?: number | undefined;
	readonly TriggerMode?: string | undefined;
}
export interface SignalInformation {
	readonly MaxSampleCount?: number | undefined;
	readonly MinimumSamplingIntervalMs?: number | undefined;
	readonly Name: string;
}
export interface TimeBasedCollectionScheme {
	readonly PeriodMs: number;
}
export interface CanInterface {
	readonly Name: string;
	readonly ProtocolName?: string | undefined;
	readonly ProtocolVersion?: string | undefined;
}
export interface CanSignal {
	readonly Factor: string;
	readonly IsBigEndian: string;
	readonly IsSigned: string;
	readonly Length: string;
	readonly MessageId: string;
	readonly Name?: string | undefined;
	readonly Offset: string;
	readonly StartBit: string;
}
export interface NetworkInterfacesItems {
	readonly CanInterface?: CanInterface | undefined;
	readonly InterfaceId: string;
	readonly ObdInterface?: ObdInterface | undefined;
	readonly Type: string;
}
export interface ObdInterface {
	readonly DtcRequestIntervalSeconds?: string | undefined;
	readonly HasTransmissionEcu?: string | undefined;
	readonly Name: string;
	readonly ObdStandard?: string | undefined;
	readonly PidRequestIntervalSeconds?: string | undefined;
	readonly RequestMessageId: string;
	readonly UseExtendedIds?: string | undefined;
}
export interface ObdSignal {
	readonly BitMaskLength?: string | undefined;
	readonly BitRightShift?: string | undefined;
	readonly ByteLength: string;
	readonly Offset: string;
	readonly Pid: string;
	readonly PidResponseLength: string;
	readonly Scaling: string;
	readonly ServiceMode: string;
	readonly StartByte: string;
}
export interface SignalDecodersItems {
	readonly CanSignal?: CanSignal | undefined;
	readonly FullyQualifiedName: string;
	readonly InterfaceId: string;
	readonly ObdSignal?: ObdSignal | undefined;
	readonly Type: string;
}
export interface Actuator {
	readonly AllowedValues?: string[] | undefined;
	readonly AssignedValue?: string | undefined;
	readonly DataType: string;
	readonly Description?: string | undefined;
	readonly FullyQualifiedName: string;
	readonly Max?: number | undefined;
	readonly Min?: number | undefined;
	readonly Unit?: string | undefined;
}
export interface Attribute {
	readonly AllowedValues?: string[] | undefined;
	readonly AssignedValue?: string | undefined;
	readonly DataType: string;
	readonly DefaultValue?: string | undefined;
	readonly Description?: string | undefined;
	readonly FullyQualifiedName: string;
	readonly Max?: number | undefined;
	readonly Min?: number | undefined;
	readonly Unit?: string | undefined;
}
export interface Branch {
	readonly Description?: string | undefined;
	readonly FullyQualifiedName: string;
}
export interface Node {
	readonly Actuator?: Actuator | undefined;
	readonly Attribute?: Attribute | undefined;
	readonly Branch?: Branch | undefined;
	readonly Sensor?: Sensor | undefined;
}
export interface NodeCounts {
	readonly TotalActuators?: number | undefined;
	readonly TotalAttributes?: number | undefined;
	readonly TotalBranches?: number | undefined;
	readonly TotalNodes?: number | undefined;
	readonly TotalSensors?: number | undefined;
}
export interface Sensor {
	readonly AllowedValues?: string[] | undefined;
	readonly DataType: string;
	readonly Description?: string | undefined;
	readonly FullyQualifiedName: string;
	readonly Max?: number | undefined;
	readonly Min?: number | undefined;
	readonly Unit?: string | undefined;
}
export default {
	Campaign: Campaign,
	DecoderManifest: DecoderManifest,
	Fleet: Fleet,
	ModelManifest: ModelManifest,
	SignalCatalog: SignalCatalog,
	Vehicle: Vehicle,
};

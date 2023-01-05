import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Destination extends CfnResource<DestinationComponentInputs> implements DestinationComponentOutputs {
	constructor(entity: ADKEntity, options: DestinationComponentInputs) {
		super(entity, options.LogicalId, "AWS::IoTWireless::Destination", options);
	}
	public readonly Arn: string;
}
export interface DestinationComponentOutputs {
	readonly Arn: string;
}
export interface DestinationComponentInputs {
	readonly Expression: string;
	readonly ExpressionType: string;
	readonly Name: string;
	readonly RoleArn: string;
	readonly Description?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class DeviceProfile extends CfnResource<DeviceProfileComponentInputs> implements DeviceProfileComponentOutputs {
	constructor(entity: ADKEntity, options: DeviceProfileComponentInputs) {
		super(entity, options.LogicalId, "AWS::IoTWireless::DeviceProfile", options);
	}
	public readonly Arn: string;
	public readonly Id: string;
}
export interface DeviceProfileComponentOutputs {
	readonly Arn: string;
	readonly Id: string;
}
export interface DeviceProfileComponentInputs {
	readonly LoRaWAN?: LoRaWANDeviceProfile | undefined;
	readonly Name?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class FuotaTask extends CfnResource<FuotaTaskComponentInputs> implements FuotaTaskComponentOutputs {
	constructor(entity: ADKEntity, options: FuotaTaskComponentInputs) {
		super(entity, options.LogicalId, "AWS::IoTWireless::FuotaTask", options);
	}
	public readonly Arn: string;
	public readonly FuotaTaskStatus: string;
	public readonly Id: string;
	public readonly LoRaWanStartTime: string;
}
export interface FuotaTaskComponentOutputs {
	readonly Arn: string;
	readonly FuotaTaskStatus: string;
	readonly Id: string;
	readonly LoRaWanStartTime: string;
}
export interface FuotaTaskComponentInputs {
	readonly FirmwareUpdateImage: string;
	readonly FirmwareUpdateRole: string;
	readonly LoRaWAN: LoRaWAN;
	readonly AssociateMulticastGroup?: string | undefined;
	readonly AssociateWirelessDevice?: string | undefined;
	readonly Description?: string | undefined;
	readonly DisassociateMulticastGroup?: string | undefined;
	readonly DisassociateWirelessDevice?: string | undefined;
	readonly Name?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class MulticastGroup extends CfnResource<MulticastGroupComponentInputs> implements MulticastGroupComponentOutputs {
	constructor(entity: ADKEntity, options: MulticastGroupComponentInputs) {
		super(entity, options.LogicalId, "AWS::IoTWireless::MulticastGroup", options);
	}
	public readonly Arn: string;
	public readonly Id: string;
	public readonly LoRaWanNumberOfDevicesInGroup: number;
	public readonly LoRaWanNumberOfDevicesRequested: number;
	public readonly Status: string;
}
export interface MulticastGroupComponentOutputs {
	readonly Arn: string;
	readonly Id: string;
	readonly LoRaWanNumberOfDevicesInGroup: number;
	readonly LoRaWanNumberOfDevicesRequested: number;
	readonly Status: string;
}
export interface MulticastGroupComponentInputs {
	readonly LoRaWAN: LoRaWAN;
	readonly AssociateWirelessDevice?: string | undefined;
	readonly Description?: string | undefined;
	readonly DisassociateWirelessDevice?: string | undefined;
	readonly Name?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class NetworkAnalyzerConfiguration
	extends CfnResource<NetworkAnalyzerConfigurationComponentInputs>
	implements NetworkAnalyzerConfigurationComponentOutputs
{
	constructor(entity: ADKEntity, options: NetworkAnalyzerConfigurationComponentInputs) {
		super(entity, options.LogicalId, "AWS::IoTWireless::NetworkAnalyzerConfiguration", options);
	}
	public readonly Arn: string;
}
export interface NetworkAnalyzerConfigurationComponentOutputs {
	readonly Arn: string;
}
export interface NetworkAnalyzerConfigurationComponentInputs {
	readonly Name: string;
	readonly Description?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly TraceContent?: TraceContent | undefined;
	readonly WirelessDevices?: string[] | undefined;
	readonly WirelessGateways?: string[] | undefined;
	readonly LogicalId: string;
}
export class PartnerAccount extends CfnResource<PartnerAccountComponentInputs> implements PartnerAccountComponentOutputs {
	constructor(entity: ADKEntity, options: PartnerAccountComponentInputs) {
		super(entity, options.LogicalId, "AWS::IoTWireless::PartnerAccount", options);
	}
	public readonly Arn: string;
	public readonly SidewalkResponseAmazonId: string;
	public readonly SidewalkResponseArn: string;
	public readonly SidewalkResponseFingerprint: string;
}
export interface PartnerAccountComponentOutputs {
	readonly Arn: string;
	readonly SidewalkResponseAmazonId: string;
	readonly SidewalkResponseArn: string;
	readonly SidewalkResponseFingerprint: string;
}
export interface PartnerAccountComponentInputs {
	readonly AccountLinked?: boolean | undefined;
	readonly Fingerprint?: string | undefined;
	readonly PartnerAccountId?: string | undefined;
	readonly PartnerType?: string | undefined;
	readonly Sidewalk?: SidewalkAccountInfo | undefined;
	readonly SidewalkUpdate?: SidewalkUpdateAccount | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class ServiceProfile extends CfnResource<ServiceProfileComponentInputs> implements ServiceProfileComponentOutputs {
	constructor(entity: ADKEntity, options: ServiceProfileComponentInputs) {
		super(entity, options.LogicalId, "AWS::IoTWireless::ServiceProfile", options);
	}
	public readonly Arn: string;
	public readonly Id: string;
	public readonly LoRaWanChannelMask: string;
	public readonly LoRaWanDevStatusReqFreq: number;
	public readonly LoRaWanDlBucketSize: number;
	public readonly LoRaWanDlRate: number;
	public readonly LoRaWanDlRatePolicy: string;
	public readonly LoRaWanDrMax: number;
	public readonly LoRaWanDrMin: number;
	public readonly LoRaWanHrAllowed: boolean;
	public readonly LoRaWanMinGwDiversity: number;
	public readonly LoRaWanNwkGeoLoc: boolean;
	public readonly LoRaWanPrAllowed: boolean;
	public readonly LoRaWanRaAllowed: boolean;
	public readonly LoRaWanReportDevStatusBattery: boolean;
	public readonly LoRaWanReportDevStatusMargin: boolean;
	public readonly LoRaWanTargetPer: number;
	public readonly LoRaWanUlBucketSize: number;
	public readonly LoRaWanUlRate: number;
	public readonly LoRaWanUlRatePolicy: string;
	public readonly LoRaWanResponse: Map<string, string>;
}
export interface ServiceProfileComponentOutputs {
	readonly Arn: string;
	readonly Id: string;
	readonly LoRaWanChannelMask: string;
	readonly LoRaWanDevStatusReqFreq: number;
	readonly LoRaWanDlBucketSize: number;
	readonly LoRaWanDlRate: number;
	readonly LoRaWanDlRatePolicy: string;
	readonly LoRaWanDrMax: number;
	readonly LoRaWanDrMin: number;
	readonly LoRaWanHrAllowed: boolean;
	readonly LoRaWanMinGwDiversity: number;
	readonly LoRaWanNwkGeoLoc: boolean;
	readonly LoRaWanPrAllowed: boolean;
	readonly LoRaWanRaAllowed: boolean;
	readonly LoRaWanReportDevStatusBattery: boolean;
	readonly LoRaWanReportDevStatusMargin: boolean;
	readonly LoRaWanTargetPer: number;
	readonly LoRaWanUlBucketSize: number;
	readonly LoRaWanUlRate: number;
	readonly LoRaWanUlRatePolicy: string;
	readonly LoRaWanResponse: Map<string, string>;
}
export interface ServiceProfileComponentInputs {
	readonly LoRaWAN?: LoRaWANServiceProfile | undefined;
	readonly Name?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class TaskDefinition extends CfnResource<TaskDefinitionComponentInputs> implements TaskDefinitionComponentOutputs {
	constructor(entity: ADKEntity, options: TaskDefinitionComponentInputs) {
		super(entity, options.LogicalId, "AWS::IoTWireless::TaskDefinition", options);
	}
	public readonly Arn: string;
	public readonly Id: string;
}
export interface TaskDefinitionComponentOutputs {
	readonly Arn: string;
	readonly Id: string;
}
export interface TaskDefinitionComponentInputs {
	readonly AutoCreateTasks: boolean;
	readonly LoRaWANUpdateGatewayTaskEntry?: LoRaWANUpdateGatewayTaskEntry | undefined;
	readonly Name?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly TaskDefinitionType?: string | undefined;
	readonly Update?: UpdateWirelessGatewayTaskCreate | undefined;
	readonly LogicalId: string;
}
export class WirelessDevice extends CfnResource<WirelessDeviceComponentInputs> implements WirelessDeviceComponentOutputs {
	constructor(entity: ADKEntity, options: WirelessDeviceComponentInputs) {
		super(entity, options.LogicalId, "AWS::IoTWireless::WirelessDevice", options);
	}
	public readonly Arn: string;
	public readonly Id: string;
	public readonly ThingName: string;
}
export interface WirelessDeviceComponentOutputs {
	readonly Arn: string;
	readonly Id: string;
	readonly ThingName: string;
}
export interface WirelessDeviceComponentInputs {
	readonly DestinationName: string;
	readonly Type: string;
	readonly Description?: string | undefined;
	readonly LastUplinkReceivedAt?: string | undefined;
	readonly LoRaWAN?: LoRaWANDevice | undefined;
	readonly Name?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly ThingArn?: string | undefined;
	readonly LogicalId: string;
}
export class WirelessGateway
	extends CfnResource<WirelessGatewayComponentInputs>
	implements WirelessGatewayComponentOutputs
{
	constructor(entity: ADKEntity, options: WirelessGatewayComponentInputs) {
		super(entity, options.LogicalId, "AWS::IoTWireless::WirelessGateway", options);
	}
	public readonly Arn: string;
	public readonly Id: string;
}
export interface WirelessGatewayComponentOutputs {
	readonly Arn: string;
	readonly Id: string;
}
export interface WirelessGatewayComponentInputs {
	readonly LoRaWAN: LoRaWANGateway;
	readonly Description?: string | undefined;
	readonly LastUplinkReceivedAt?: string | undefined;
	readonly Name?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly ThingArn?: string | undefined;
	readonly ThingName?: string | undefined;
	readonly LogicalId: string;
}
export interface LoRaWANDeviceProfile {
	readonly ClassBTimeout?: number | undefined;
	readonly ClassCTimeout?: number | undefined;
	readonly FactoryPresetFreqsList?: number[] | undefined;
	readonly MacVersion?: string | undefined;
	readonly MaxDutyCycle?: number | undefined;
	readonly MaxEirp?: number | undefined;
	readonly PingSlotDr?: number | undefined;
	readonly PingSlotFreq?: number | undefined;
	readonly PingSlotPeriod?: number | undefined;
	readonly RegParamsRevision?: string | undefined;
	readonly RfRegion?: string | undefined;
	readonly RxDataRate2?: number | undefined;
	readonly RxDelay1?: number | undefined;
	readonly RxDrOffset1?: number | undefined;
	readonly RxFreq2?: number | undefined;
	readonly Supports32BitFCnt?: boolean | undefined;
	readonly SupportsClassB?: boolean | undefined;
	readonly SupportsClassC?: boolean | undefined;
	readonly SupportsJoin?: boolean | undefined;
}
export interface LoRaWAN {
	readonly RfRegion: string;
	readonly StartTime?: string | undefined;
}
export interface TraceContent {
	readonly LogLevel?: string | undefined;
	readonly WirelessDeviceFrameInfo?: string | undefined;
}
export interface SidewalkAccountInfo {
	readonly AppServerPrivateKey: string;
}
export interface SidewalkAccountInfoWithFingerprint {
	readonly AmazonId?: string | undefined;
	readonly Arn?: string | undefined;
	readonly Fingerprint?: string | undefined;
}
export interface SidewalkUpdateAccount {
	readonly AppServerPrivateKey?: string | undefined;
}
export interface LoRaWANServiceProfile {
	readonly AddGwMetadata?: boolean | undefined;
	readonly ChannelMask?: string | undefined;
	readonly DevStatusReqFreq?: number | undefined;
	readonly DlBucketSize?: number | undefined;
	readonly DlRate?: number | undefined;
	readonly DlRatePolicy?: string | undefined;
	readonly DrMax?: number | undefined;
	readonly DrMin?: number | undefined;
	readonly HrAllowed?: boolean | undefined;
	readonly MinGwDiversity?: number | undefined;
	readonly NwkGeoLoc?: boolean | undefined;
	readonly PrAllowed?: boolean | undefined;
	readonly RaAllowed?: boolean | undefined;
	readonly ReportDevStatusBattery?: boolean | undefined;
	readonly ReportDevStatusMargin?: boolean | undefined;
	readonly TargetPer?: number | undefined;
	readonly UlBucketSize?: number | undefined;
	readonly UlRate?: number | undefined;
	readonly UlRatePolicy?: string | undefined;
}
export interface LoRaWANGatewayVersion {
	readonly Model?: string | undefined;
	readonly PackageVersion?: string | undefined;
	readonly Station?: string | undefined;
}
export interface LoRaWANUpdateGatewayTaskCreate {
	readonly CurrentVersion?: LoRaWANGatewayVersion | undefined;
	readonly SigKeyCrc?: number | undefined;
	readonly UpdateSignature?: string | undefined;
	readonly UpdateVersion?: LoRaWANGatewayVersion | undefined;
}
export interface LoRaWANUpdateGatewayTaskEntry {
	readonly CurrentVersion?: LoRaWANGatewayVersion | undefined;
	readonly UpdateVersion?: LoRaWANGatewayVersion | undefined;
}
export interface UpdateWirelessGatewayTaskCreate {
	readonly LoRaWAN?: LoRaWANUpdateGatewayTaskCreate | undefined;
	readonly UpdateDataRole?: string | undefined;
	readonly UpdateDataSource?: string | undefined;
}
export interface AbpV10x {
	readonly DevAddr: string;
	readonly SessionKeys: SessionKeysAbpV10x;
}
export interface AbpV11 {
	readonly DevAddr: string;
	readonly SessionKeys: SessionKeysAbpV11;
}
export interface LoRaWANDevice {
	readonly AbpV10x?: AbpV10x | undefined;
	readonly AbpV11?: AbpV11 | undefined;
	readonly DevEui?: string | undefined;
	readonly DeviceProfileId?: string | undefined;
	readonly OtaaV10x?: OtaaV10x | undefined;
	readonly OtaaV11?: OtaaV11 | undefined;
	readonly ServiceProfileId?: string | undefined;
}
export interface OtaaV10x {
	readonly AppEui: string;
	readonly AppKey: string;
}
export interface OtaaV11 {
	readonly AppKey: string;
	readonly JoinEui: string;
	readonly NwkKey: string;
}
export interface SessionKeysAbpV10x {
	readonly AppSKey: string;
	readonly NwkSKey: string;
}
export interface SessionKeysAbpV11 {
	readonly AppSKey: string;
	readonly FNwkSIntKey: string;
	readonly NwkSEncKey: string;
	readonly SNwkSIntKey: string;
}
export interface LoRaWANGateway {
	readonly GatewayEui: string;
	readonly RfRegion: string;
}
export default {
	Destination: Destination,
	DeviceProfile: DeviceProfile,
	FuotaTask: FuotaTask,
	MulticastGroup: MulticastGroup,
	NetworkAnalyzerConfiguration: NetworkAnalyzerConfiguration,
	PartnerAccount: PartnerAccount,
	ServiceProfile: ServiceProfile,
	TaskDefinition: TaskDefinition,
	WirelessDevice: WirelessDevice,
	WirelessGateway: WirelessGateway,
};

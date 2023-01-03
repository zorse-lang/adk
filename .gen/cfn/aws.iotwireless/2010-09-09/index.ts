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
	readonly Description?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
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
	readonly LoRaWAN?: (LoRaWANDeviceProfile | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
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
	readonly AssociateMulticastGroup?: (string | undefined) | undefined;
	readonly AssociateWirelessDevice?: (string | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly DisassociateMulticastGroup?: (string | undefined) | undefined;
	readonly DisassociateWirelessDevice?: (string | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
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
	readonly AssociateWirelessDevice?: (string | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly DisassociateWirelessDevice?: (string | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
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
	readonly Description?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly TraceContent?: (TraceContent | undefined) | undefined;
	readonly WirelessDevices?: (string[] | undefined) | undefined;
	readonly WirelessGateways?: (string[] | undefined) | undefined;
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
	readonly AccountLinked?: (boolean | undefined) | undefined;
	readonly Fingerprint?: (string | undefined) | undefined;
	readonly PartnerAccountId?: (string | undefined) | undefined;
	readonly PartnerType?: (string | undefined) | undefined;
	readonly Sidewalk?: (SidewalkAccountInfo | undefined) | undefined;
	readonly SidewalkUpdate?: (SidewalkUpdateAccount | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
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
	readonly LoRaWAN?: (LoRaWANServiceProfile | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
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
	readonly LoRaWANUpdateGatewayTaskEntry?: (LoRaWANUpdateGatewayTaskEntry | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly TaskDefinitionType?: (string | undefined) | undefined;
	readonly Update?: (UpdateWirelessGatewayTaskCreate | undefined) | undefined;
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
	readonly Description?: (string | undefined) | undefined;
	readonly LastUplinkReceivedAt?: (string | undefined) | undefined;
	readonly LoRaWAN?: (LoRaWANDevice | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly ThingArn?: (string | undefined) | undefined;
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
	readonly Description?: (string | undefined) | undefined;
	readonly LastUplinkReceivedAt?: (string | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly ThingArn?: (string | undefined) | undefined;
	readonly ThingName?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export interface LoRaWANDeviceProfile {
	readonly ClassBTimeout?: (number | undefined) | undefined;
	readonly ClassCTimeout?: (number | undefined) | undefined;
	readonly FactoryPresetFreqsList?: (number[] | undefined) | undefined;
	readonly MacVersion?: (string | undefined) | undefined;
	readonly MaxDutyCycle?: (number | undefined) | undefined;
	readonly MaxEirp?: (number | undefined) | undefined;
	readonly PingSlotDr?: (number | undefined) | undefined;
	readonly PingSlotFreq?: (number | undefined) | undefined;
	readonly PingSlotPeriod?: (number | undefined) | undefined;
	readonly RegParamsRevision?: (string | undefined) | undefined;
	readonly RfRegion?: (string | undefined) | undefined;
	readonly RxDataRate2?: (number | undefined) | undefined;
	readonly RxDelay1?: (number | undefined) | undefined;
	readonly RxDrOffset1?: (number | undefined) | undefined;
	readonly RxFreq2?: (number | undefined) | undefined;
	readonly Supports32BitFCnt?: (boolean | undefined) | undefined;
	readonly SupportsClassB?: (boolean | undefined) | undefined;
	readonly SupportsClassC?: (boolean | undefined) | undefined;
	readonly SupportsJoin?: (boolean | undefined) | undefined;
}
export interface LoRaWAN {
	readonly RfRegion: string;
	readonly StartTime?: (string | undefined) | undefined;
}
export interface TraceContent {
	readonly LogLevel?: (string | undefined) | undefined;
	readonly WirelessDeviceFrameInfo?: (string | undefined) | undefined;
}
export interface SidewalkAccountInfo {
	readonly AppServerPrivateKey: string;
}
export interface SidewalkAccountInfoWithFingerprint {
	readonly AmazonId?: (string | undefined) | undefined;
	readonly Arn?: (string | undefined) | undefined;
	readonly Fingerprint?: (string | undefined) | undefined;
}
export interface SidewalkUpdateAccount {
	readonly AppServerPrivateKey?: (string | undefined) | undefined;
}
export interface LoRaWANServiceProfile {
	readonly AddGwMetadata?: (boolean | undefined) | undefined;
	readonly ChannelMask?: (string | undefined) | undefined;
	readonly DevStatusReqFreq?: (number | undefined) | undefined;
	readonly DlBucketSize?: (number | undefined) | undefined;
	readonly DlRate?: (number | undefined) | undefined;
	readonly DlRatePolicy?: (string | undefined) | undefined;
	readonly DrMax?: (number | undefined) | undefined;
	readonly DrMin?: (number | undefined) | undefined;
	readonly HrAllowed?: (boolean | undefined) | undefined;
	readonly MinGwDiversity?: (number | undefined) | undefined;
	readonly NwkGeoLoc?: (boolean | undefined) | undefined;
	readonly PrAllowed?: (boolean | undefined) | undefined;
	readonly RaAllowed?: (boolean | undefined) | undefined;
	readonly ReportDevStatusBattery?: (boolean | undefined) | undefined;
	readonly ReportDevStatusMargin?: (boolean | undefined) | undefined;
	readonly TargetPer?: (number | undefined) | undefined;
	readonly UlBucketSize?: (number | undefined) | undefined;
	readonly UlRate?: (number | undefined) | undefined;
	readonly UlRatePolicy?: (string | undefined) | undefined;
}
export interface LoRaWANGatewayVersion {
	readonly Model?: (string | undefined) | undefined;
	readonly PackageVersion?: (string | undefined) | undefined;
	readonly Station?: (string | undefined) | undefined;
}
export interface LoRaWANUpdateGatewayTaskCreate {
	readonly CurrentVersion?: (LoRaWANGatewayVersion | undefined) | undefined;
	readonly SigKeyCrc?: (number | undefined) | undefined;
	readonly UpdateSignature?: (string | undefined) | undefined;
	readonly UpdateVersion?: (LoRaWANGatewayVersion | undefined) | undefined;
}
export interface LoRaWANUpdateGatewayTaskEntry {
	readonly CurrentVersion?: (LoRaWANGatewayVersion | undefined) | undefined;
	readonly UpdateVersion?: (LoRaWANGatewayVersion | undefined) | undefined;
}
export interface UpdateWirelessGatewayTaskCreate {
	readonly LoRaWAN?: (LoRaWANUpdateGatewayTaskCreate | undefined) | undefined;
	readonly UpdateDataRole?: (string | undefined) | undefined;
	readonly UpdateDataSource?: (string | undefined) | undefined;
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
	readonly AbpV10x?: (AbpV10x | undefined) | undefined;
	readonly AbpV11?: (AbpV11 | undefined) | undefined;
	readonly DevEui?: (string | undefined) | undefined;
	readonly DeviceProfileId?: (string | undefined) | undefined;
	readonly OtaaV10x?: (OtaaV10x | undefined) | undefined;
	readonly OtaaV11?: (OtaaV11 | undefined) | undefined;
	readonly ServiceProfileId?: (string | undefined) | undefined;
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

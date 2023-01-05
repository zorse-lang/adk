import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Flow extends CfnResource<FlowComponentInputs> implements FlowComponentOutputs {
	constructor(entity: ADKEntity, options: FlowComponentInputs) {
		super(entity, options.LogicalId, "AWS::MediaConnect::Flow", options);
	}
	public readonly FlowArn: string;
	public readonly FlowAvailabilityZone: string;
	public readonly SourceIngestIp: string;
	public readonly SourceSourceArn: string;
	public readonly SourceSourceIngestPort: string;
}
export interface FlowComponentOutputs {
	readonly FlowArn: string;
	readonly FlowAvailabilityZone: string;
	readonly SourceIngestIp: string;
	readonly SourceSourceArn: string;
	readonly SourceSourceIngestPort: string;
}
export interface FlowComponentInputs {
	readonly Name: string;
	readonly Source: Source;
	readonly AvailabilityZone?: string | undefined;
	readonly SourceFailoverConfig?: FailoverConfig | undefined;
	readonly LogicalId: string;
}
export class FlowEntitlement
	extends CfnResource<FlowEntitlementComponentInputs>
	implements FlowEntitlementComponentOutputs
{
	constructor(entity: ADKEntity, options: FlowEntitlementComponentInputs) {
		super(entity, options.LogicalId, "AWS::MediaConnect::FlowEntitlement", options);
	}
	public readonly EntitlementArn: string;
}
export interface FlowEntitlementComponentOutputs {
	readonly EntitlementArn: string;
}
export interface FlowEntitlementComponentInputs {
	readonly Description: string;
	readonly FlowArn: string;
	readonly Name: string;
	readonly Subscribers: string[];
	readonly DataTransferSubscriberFeePercent?: number | undefined;
	readonly Encryption?: Encryption | undefined;
	readonly EntitlementStatus?: string | undefined;
	readonly LogicalId: string;
}
export class FlowOutput extends CfnResource<FlowOutputComponentInputs> implements FlowOutputComponentOutputs {
	constructor(entity: ADKEntity, options: FlowOutputComponentInputs) {
		super(entity, options.LogicalId, "AWS::MediaConnect::FlowOutput", options);
	}
	public readonly OutputArn: string;
}
export interface FlowOutputComponentOutputs {
	readonly OutputArn: string;
}
export interface FlowOutputComponentInputs {
	readonly FlowArn: string;
	readonly Protocol: string;
	readonly CidrAllowList?: string[] | undefined;
	readonly Description?: string | undefined;
	readonly Destination?: string | undefined;
	readonly Encryption?: Encryption | undefined;
	readonly MaxLatency?: number | undefined;
	readonly MinLatency?: number | undefined;
	readonly Name?: string | undefined;
	readonly Port?: number | undefined;
	readonly RemoteId?: string | undefined;
	readonly SmoothingLatency?: number | undefined;
	readonly StreamId?: string | undefined;
	readonly VpcInterfaceAttachment?: VpcInterfaceAttachment | undefined;
	readonly LogicalId: string;
}
export class FlowSource extends CfnResource<FlowSourceComponentInputs> implements FlowSourceComponentOutputs {
	constructor(entity: ADKEntity, options: FlowSourceComponentInputs) {
		super(entity, options.LogicalId, "AWS::MediaConnect::FlowSource", options);
	}
	public readonly IngestIp: string;
	public readonly SourceArn: string;
	public readonly SourceIngestPort: string;
}
export interface FlowSourceComponentOutputs {
	readonly IngestIp: string;
	readonly SourceArn: string;
	readonly SourceIngestPort: string;
}
export interface FlowSourceComponentInputs {
	readonly Description: string;
	readonly Name: string;
	readonly Decryption?: Encryption | undefined;
	readonly EntitlementArn?: string | undefined;
	readonly FlowArn?: string | undefined;
	readonly IngestPort?: number | undefined;
	readonly MaxBitrate?: number | undefined;
	readonly MaxLatency?: number | undefined;
	readonly Protocol?: string | undefined;
	readonly StreamId?: string | undefined;
	readonly VpcInterfaceName?: string | undefined;
	readonly WhitelistCidr?: string | undefined;
	readonly LogicalId: string;
}
export class FlowVpcInterface
	extends CfnResource<FlowVpcInterfaceComponentInputs>
	implements FlowVpcInterfaceComponentOutputs
{
	constructor(entity: ADKEntity, options: FlowVpcInterfaceComponentInputs) {
		super(entity, options.LogicalId, "AWS::MediaConnect::FlowVpcInterface", options);
	}
	public readonly NetworkInterfaceIds: string[];
}
export interface FlowVpcInterfaceComponentOutputs {
	readonly NetworkInterfaceIds: string[];
}
export interface FlowVpcInterfaceComponentInputs {
	readonly FlowArn: string;
	readonly Name: string;
	readonly RoleArn: string;
	readonly SecurityGroupIds: string[];
	readonly SubnetId: string;
	readonly LogicalId: string;
}
export interface Encryption {
	readonly Algorithm?: string | undefined;
	readonly ConstantInitializationVector?: string | undefined;
	readonly DeviceId?: string | undefined;
	readonly KeyType?: string | undefined;
	readonly Region?: string | undefined;
	readonly ResourceId?: string | undefined;
	readonly RoleArn: string;
	readonly SecretArn?: string | undefined;
	readonly Url?: string | undefined;
}
export interface FailoverConfig {
	readonly FailoverMode?: string | undefined;
	readonly RecoveryWindow?: number | undefined;
	readonly SourcePriority?: SourcePriority | undefined;
	readonly State?: string | undefined;
}
export interface Source {
	readonly Decryption?: Encryption | undefined;
	readonly Description?: string | undefined;
	readonly EntitlementArn?: string | undefined;
	readonly IngestIp?: string | undefined;
	readonly IngestPort?: number | undefined;
	readonly MaxBitrate?: number | undefined;
	readonly MaxLatency?: number | undefined;
	readonly MinLatency?: number | undefined;
	readonly Name?: string | undefined;
	readonly Protocol?: string | undefined;
	readonly SenderControlPort?: number | undefined;
	readonly SenderIpAddress?: string | undefined;
	readonly SourceArn?: string | undefined;
	readonly SourceIngestPort?: string | undefined;
	readonly SourceListenerAddress?: string | undefined;
	readonly SourceListenerPort?: number | undefined;
	readonly StreamId?: string | undefined;
	readonly VpcInterfaceName?: string | undefined;
	readonly WhitelistCidr?: string | undefined;
}
export interface SourcePriority {
	readonly PrimarySource: string;
}
export interface VpcInterfaceAttachment {
	readonly VpcInterfaceName?: string | undefined;
}
export default {
	Flow: Flow,
	FlowEntitlement: FlowEntitlement,
	FlowOutput: FlowOutput,
	FlowSource: FlowSource,
	FlowVpcInterface: FlowVpcInterface,
};

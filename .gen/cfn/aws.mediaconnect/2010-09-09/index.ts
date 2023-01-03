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
	readonly AvailabilityZone?: (string | undefined) | undefined;
	readonly SourceFailoverConfig?: (FailoverConfig | undefined) | undefined;
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
	readonly DataTransferSubscriberFeePercent?: (number | undefined) | undefined;
	readonly Encryption?: (Encryption | undefined) | undefined;
	readonly EntitlementStatus?: (string | undefined) | undefined;
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
	readonly CidrAllowList?: (string[] | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly Destination?: (string | undefined) | undefined;
	readonly Encryption?: (Encryption | undefined) | undefined;
	readonly MaxLatency?: (number | undefined) | undefined;
	readonly MinLatency?: (number | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly Port?: (number | undefined) | undefined;
	readonly RemoteId?: (string | undefined) | undefined;
	readonly SmoothingLatency?: (number | undefined) | undefined;
	readonly StreamId?: (string | undefined) | undefined;
	readonly VpcInterfaceAttachment?: (VpcInterfaceAttachment | undefined) | undefined;
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
	readonly Decryption?: (Encryption | undefined) | undefined;
	readonly EntitlementArn?: (string | undefined) | undefined;
	readonly FlowArn?: (string | undefined) | undefined;
	readonly IngestPort?: (number | undefined) | undefined;
	readonly MaxBitrate?: (number | undefined) | undefined;
	readonly MaxLatency?: (number | undefined) | undefined;
	readonly Protocol?: (string | undefined) | undefined;
	readonly StreamId?: (string | undefined) | undefined;
	readonly VpcInterfaceName?: (string | undefined) | undefined;
	readonly WhitelistCidr?: (string | undefined) | undefined;
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
	readonly Algorithm?: (string | undefined) | undefined;
	readonly ConstantInitializationVector?: (string | undefined) | undefined;
	readonly DeviceId?: (string | undefined) | undefined;
	readonly KeyType?: (string | undefined) | undefined;
	readonly Region?: (string | undefined) | undefined;
	readonly ResourceId?: (string | undefined) | undefined;
	readonly RoleArn: string;
	readonly SecretArn?: (string | undefined) | undefined;
	readonly Url?: (string | undefined) | undefined;
}
export interface FailoverConfig {
	readonly FailoverMode?: (string | undefined) | undefined;
	readonly RecoveryWindow?: (number | undefined) | undefined;
	readonly SourcePriority?: (SourcePriority | undefined) | undefined;
	readonly State?: (string | undefined) | undefined;
}
export interface Source {
	readonly Decryption?: (Encryption | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly EntitlementArn?: (string | undefined) | undefined;
	readonly IngestIp?: (string | undefined) | undefined;
	readonly IngestPort?: (number | undefined) | undefined;
	readonly MaxBitrate?: (number | undefined) | undefined;
	readonly MaxLatency?: (number | undefined) | undefined;
	readonly MinLatency?: (number | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly Protocol?: (string | undefined) | undefined;
	readonly SenderControlPort?: (number | undefined) | undefined;
	readonly SenderIpAddress?: (string | undefined) | undefined;
	readonly SourceArn?: (string | undefined) | undefined;
	readonly SourceIngestPort?: (string | undefined) | undefined;
	readonly SourceListenerAddress?: (string | undefined) | undefined;
	readonly SourceListenerPort?: (number | undefined) | undefined;
	readonly StreamId?: (string | undefined) | undefined;
	readonly VpcInterfaceName?: (string | undefined) | undefined;
	readonly WhitelistCidr?: (string | undefined) | undefined;
}
export interface SourcePriority {
	readonly PrimarySource: string;
}
export interface VpcInterfaceAttachment {
	readonly VpcInterfaceName?: (string | undefined) | undefined;
}
export default {
	Flow: Flow,
	FlowEntitlement: FlowEntitlement,
	FlowOutput: FlowOutput,
	FlowSource: FlowSource,
	FlowVpcInterface: FlowVpcInterface,
};

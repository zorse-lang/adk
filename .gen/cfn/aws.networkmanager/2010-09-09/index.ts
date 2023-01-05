import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class ConnectAttachment
	extends CfnResource<ConnectAttachmentComponentInputs>
	implements ConnectAttachmentComponentOutputs
{
	constructor(entity: ADKEntity, options: ConnectAttachmentComponentInputs) {
		super(entity, options.LogicalId, "AWS::NetworkManager::ConnectAttachment", options);
	}
	public readonly AttachmentId: string;
	public readonly AttachmentPolicyRuleNumber: number;
	public readonly AttachmentType: string;
	public readonly CoreNetworkArn: string;
	public readonly CreatedAt: string;
	public readonly OwnerAccountId: string;
	public readonly ProposedSegmentChangeAttachmentPolicyRuleNumber: number;
	public readonly ProposedSegmentChangeSegmentName: string;
	public readonly ProposedSegmentChangeTags: Map<string, any>;
	public readonly ResourceArn: string;
	public readonly SegmentName: string;
	public readonly State: string;
	public readonly UpdatedAt: string;
}
export interface ConnectAttachmentComponentOutputs {
	readonly AttachmentId: string;
	readonly AttachmentPolicyRuleNumber: number;
	readonly AttachmentType: string;
	readonly CoreNetworkArn: string;
	readonly CreatedAt: string;
	readonly OwnerAccountId: string;
	readonly ProposedSegmentChangeAttachmentPolicyRuleNumber: number;
	readonly ProposedSegmentChangeSegmentName: string;
	readonly ProposedSegmentChangeTags: Map<string, any>;
	readonly ResourceArn: string;
	readonly SegmentName: string;
	readonly State: string;
	readonly UpdatedAt: string;
}
export interface ConnectAttachmentComponentInputs {
	readonly CoreNetworkId: string;
	readonly EdgeLocation: string;
	readonly Options: ConnectAttachmentOptions;
	readonly TransportAttachmentId: string;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class ConnectPeer extends CfnResource<ConnectPeerComponentInputs> implements ConnectPeerComponentOutputs {
	constructor(entity: ADKEntity, options: ConnectPeerComponentInputs) {
		super(entity, options.LogicalId, "AWS::NetworkManager::ConnectPeer", options);
	}
	public readonly ConfigurationBgpConfigurations: Map<string, ConnectPeerBgpConfiguration>;
	public readonly ConfigurationCoreNetworkAddress: string;
	public readonly ConfigurationInsideCidrBlocks: string[];
	public readonly ConfigurationPeerAddress: string;
	public readonly ConfigurationProtocol: string;
	public readonly ConnectPeerId: string;
	public readonly CoreNetworkId: string;
	public readonly CreatedAt: string;
	public readonly EdgeLocation: string;
	public readonly State: string;
}
export interface ConnectPeerComponentOutputs {
	readonly ConfigurationBgpConfigurations: Map<string, ConnectPeerBgpConfiguration>;
	readonly ConfigurationCoreNetworkAddress: string;
	readonly ConfigurationInsideCidrBlocks: string[];
	readonly ConfigurationPeerAddress: string;
	readonly ConfigurationProtocol: string;
	readonly ConnectPeerId: string;
	readonly CoreNetworkId: string;
	readonly CreatedAt: string;
	readonly EdgeLocation: string;
	readonly State: string;
}
export interface ConnectPeerComponentInputs {
	readonly BgpOptions?: BgpOptions | undefined;
	readonly ConnectAttachmentId?: string | undefined;
	readonly CoreNetworkAddress?: string | undefined;
	readonly InsideCidrBlocks?: string[] | undefined;
	readonly PeerAddress?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class CoreNetwork extends CfnResource<CoreNetworkComponentInputs> implements CoreNetworkComponentOutputs {
	constructor(entity: ADKEntity, options: CoreNetworkComponentInputs) {
		super(entity, options.LogicalId, "AWS::NetworkManager::CoreNetwork", options);
	}
	public readonly CoreNetworkArn: string;
	public readonly CoreNetworkId: string;
	public readonly CreatedAt: string;
	public readonly Edges: Map<string, CoreNetworkEdge>;
	public readonly OwnerAccount: string;
	public readonly Segments: Map<string, CoreNetworkSegment>;
	public readonly State: string;
}
export interface CoreNetworkComponentOutputs {
	readonly CoreNetworkArn: string;
	readonly CoreNetworkId: string;
	readonly CreatedAt: string;
	readonly Edges: Map<string, CoreNetworkEdge>;
	readonly OwnerAccount: string;
	readonly Segments: Map<string, CoreNetworkSegment>;
	readonly State: string;
}
export interface CoreNetworkComponentInputs {
	readonly GlobalNetworkId: string;
	readonly Description?: string | undefined;
	readonly PolicyDocument?: any | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class CustomerGatewayAssociation
	extends CfnResource<CustomerGatewayAssociationComponentInputs>
	implements CustomerGatewayAssociationComponentOutputs
{
	constructor(entity: ADKEntity, options: CustomerGatewayAssociationComponentInputs) {
		super(entity, options.LogicalId, "AWS::NetworkManager::CustomerGatewayAssociation", options);
	}
}
export interface CustomerGatewayAssociationComponentOutputs {}
export interface CustomerGatewayAssociationComponentInputs {
	readonly CustomerGatewayArn: string;
	readonly DeviceId: string;
	readonly GlobalNetworkId: string;
	readonly LinkId?: string | undefined;
	readonly LogicalId: string;
}
export class Device extends CfnResource<DeviceComponentInputs> implements DeviceComponentOutputs {
	constructor(entity: ADKEntity, options: DeviceComponentInputs) {
		super(entity, options.LogicalId, "AWS::NetworkManager::Device", options);
	}
	public readonly DeviceArn: string;
	public readonly DeviceId: string;
}
export interface DeviceComponentOutputs {
	readonly DeviceArn: string;
	readonly DeviceId: string;
}
export interface DeviceComponentInputs {
	readonly GlobalNetworkId: string;
	readonly Description?: string | undefined;
	readonly Location?: Location | undefined;
	readonly Model?: string | undefined;
	readonly SerialNumber?: string | undefined;
	readonly SiteId?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly Type?: string | undefined;
	readonly Vendor?: string | undefined;
	readonly LogicalId: string;
}
export class GlobalNetwork extends CfnResource<GlobalNetworkComponentInputs> implements GlobalNetworkComponentOutputs {
	constructor(entity: ADKEntity, options: GlobalNetworkComponentInputs) {
		super(entity, options.LogicalId, "AWS::NetworkManager::GlobalNetwork", options);
	}
	public readonly Arn: string;
	public readonly Id: string;
}
export interface GlobalNetworkComponentOutputs {
	readonly Arn: string;
	readonly Id: string;
}
export interface GlobalNetworkComponentInputs {
	readonly Description?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class Link extends CfnResource<LinkComponentInputs> implements LinkComponentOutputs {
	constructor(entity: ADKEntity, options: LinkComponentInputs) {
		super(entity, options.LogicalId, "AWS::NetworkManager::Link", options);
	}
	public readonly LinkArn: string;
	public readonly LinkId: string;
}
export interface LinkComponentOutputs {
	readonly LinkArn: string;
	readonly LinkId: string;
}
export interface LinkComponentInputs {
	readonly Bandwidth: Bandwidth;
	readonly GlobalNetworkId: string;
	readonly SiteId: string;
	readonly Description?: string | undefined;
	readonly Provider?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly Type?: string | undefined;
	readonly LogicalId: string;
}
export class LinkAssociation
	extends CfnResource<LinkAssociationComponentInputs>
	implements LinkAssociationComponentOutputs
{
	constructor(entity: ADKEntity, options: LinkAssociationComponentInputs) {
		super(entity, options.LogicalId, "AWS::NetworkManager::LinkAssociation", options);
	}
}
export interface LinkAssociationComponentOutputs {}
export interface LinkAssociationComponentInputs {
	readonly DeviceId: string;
	readonly GlobalNetworkId: string;
	readonly LinkId: string;
	readonly LogicalId: string;
}
export class Site extends CfnResource<SiteComponentInputs> implements SiteComponentOutputs {
	constructor(entity: ADKEntity, options: SiteComponentInputs) {
		super(entity, options.LogicalId, "AWS::NetworkManager::Site", options);
	}
	public readonly SiteArn: string;
	public readonly SiteId: string;
}
export interface SiteComponentOutputs {
	readonly SiteArn: string;
	readonly SiteId: string;
}
export interface SiteComponentInputs {
	readonly GlobalNetworkId: string;
	readonly Description?: string | undefined;
	readonly Location?: Location | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class SiteToSiteVpnAttachment
	extends CfnResource<SiteToSiteVpnAttachmentComponentInputs>
	implements SiteToSiteVpnAttachmentComponentOutputs
{
	constructor(entity: ADKEntity, options: SiteToSiteVpnAttachmentComponentInputs) {
		super(entity, options.LogicalId, "AWS::NetworkManager::SiteToSiteVpnAttachment", options);
	}
	public readonly AttachmentId: string;
	public readonly AttachmentPolicyRuleNumber: number;
	public readonly AttachmentType: string;
	public readonly CoreNetworkArn: string;
	public readonly CreatedAt: string;
	public readonly EdgeLocation: string;
	public readonly OwnerAccountId: string;
	public readonly ProposedSegmentChangeAttachmentPolicyRuleNumber: number;
	public readonly ProposedSegmentChangeSegmentName: string;
	public readonly ProposedSegmentChangeTags: Map<string, any>;
	public readonly ResourceArn: string;
	public readonly SegmentName: string;
	public readonly State: string;
	public readonly UpdatedAt: string;
}
export interface SiteToSiteVpnAttachmentComponentOutputs {
	readonly AttachmentId: string;
	readonly AttachmentPolicyRuleNumber: number;
	readonly AttachmentType: string;
	readonly CoreNetworkArn: string;
	readonly CreatedAt: string;
	readonly EdgeLocation: string;
	readonly OwnerAccountId: string;
	readonly ProposedSegmentChangeAttachmentPolicyRuleNumber: number;
	readonly ProposedSegmentChangeSegmentName: string;
	readonly ProposedSegmentChangeTags: Map<string, any>;
	readonly ResourceArn: string;
	readonly SegmentName: string;
	readonly State: string;
	readonly UpdatedAt: string;
}
export interface SiteToSiteVpnAttachmentComponentInputs {
	readonly CoreNetworkId?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly VpnConnectionArn?: string | undefined;
	readonly LogicalId: string;
}
export class TransitGatewayRegistration
	extends CfnResource<TransitGatewayRegistrationComponentInputs>
	implements TransitGatewayRegistrationComponentOutputs
{
	constructor(entity: ADKEntity, options: TransitGatewayRegistrationComponentInputs) {
		super(entity, options.LogicalId, "AWS::NetworkManager::TransitGatewayRegistration", options);
	}
}
export interface TransitGatewayRegistrationComponentOutputs {}
export interface TransitGatewayRegistrationComponentInputs {
	readonly GlobalNetworkId: string;
	readonly TransitGatewayArn: string;
	readonly LogicalId: string;
}
export class VpcAttachment extends CfnResource<VpcAttachmentComponentInputs> implements VpcAttachmentComponentOutputs {
	constructor(entity: ADKEntity, options: VpcAttachmentComponentInputs) {
		super(entity, options.LogicalId, "AWS::NetworkManager::VpcAttachment", options);
	}
	public readonly AttachmentId: string;
	public readonly AttachmentPolicyRuleNumber: number;
	public readonly AttachmentType: string;
	public readonly CoreNetworkArn: string;
	public readonly CreatedAt: string;
	public readonly EdgeLocation: string;
	public readonly OwnerAccountId: string;
	public readonly ProposedSegmentChangeAttachmentPolicyRuleNumber: number;
	public readonly ProposedSegmentChangeSegmentName: string;
	public readonly ProposedSegmentChangeTags: Map<string, any>;
	public readonly ResourceArn: string;
	public readonly SegmentName: string;
	public readonly State: string;
	public readonly UpdatedAt: string;
}
export interface VpcAttachmentComponentOutputs {
	readonly AttachmentId: string;
	readonly AttachmentPolicyRuleNumber: number;
	readonly AttachmentType: string;
	readonly CoreNetworkArn: string;
	readonly CreatedAt: string;
	readonly EdgeLocation: string;
	readonly OwnerAccountId: string;
	readonly ProposedSegmentChangeAttachmentPolicyRuleNumber: number;
	readonly ProposedSegmentChangeSegmentName: string;
	readonly ProposedSegmentChangeTags: Map<string, any>;
	readonly ResourceArn: string;
	readonly SegmentName: string;
	readonly State: string;
	readonly UpdatedAt: string;
}
export interface VpcAttachmentComponentInputs {
	readonly CoreNetworkId: string;
	readonly SubnetArns: string[];
	readonly VpcArn: string;
	readonly Options?: VpcOptions | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export interface ConnectAttachmentOptions {
	readonly Protocol?: string | undefined;
}
export interface ProposedSegmentChange {
	readonly AttachmentPolicyRuleNumber?: number | undefined;
	readonly SegmentName?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
}
export interface BgpOptions {
	readonly PeerAsn?: number | undefined;
}
export interface ConnectPeerBgpConfiguration {
	readonly CoreNetworkAddress?: string | undefined;
	readonly CoreNetworkAsn?: number | undefined;
	readonly PeerAddress?: string | undefined;
	readonly PeerAsn?: number | undefined;
}
export interface ConnectPeerConfiguration {
	readonly BgpConfigurations?: ConnectPeerBgpConfiguration[] | undefined;
	readonly CoreNetworkAddress?: string | undefined;
	readonly InsideCidrBlocks?: string[] | undefined;
	readonly PeerAddress?: string | undefined;
	readonly Protocol?: string | undefined;
}
export interface CoreNetworkEdge {
	readonly Asn?: number | undefined;
	readonly EdgeLocation?: string | undefined;
	readonly InsideCidrBlocks?: string[] | undefined;
}
export interface CoreNetworkSegment {
	readonly EdgeLocations?: string[] | undefined;
	readonly Name?: string | undefined;
	readonly SharedSegments?: string[] | undefined;
}
export interface Location {
	readonly Address?: string | undefined;
	readonly Latitude?: string | undefined;
	readonly Longitude?: string | undefined;
}
export interface Bandwidth {
	readonly DownloadSpeed?: number | undefined;
	readonly UploadSpeed?: number | undefined;
}
export interface VpcOptions {
	readonly Ipv6Support?: boolean | undefined;
}
export default {
	ConnectAttachment: ConnectAttachment,
	ConnectPeer: ConnectPeer,
	CoreNetwork: CoreNetwork,
	CustomerGatewayAssociation: CustomerGatewayAssociation,
	Device: Device,
	GlobalNetwork: GlobalNetwork,
	Link: Link,
	LinkAssociation: LinkAssociation,
	Site: Site,
	SiteToSiteVpnAttachment: SiteToSiteVpnAttachment,
	TransitGatewayRegistration: TransitGatewayRegistration,
	VpcAttachment: VpcAttachment,
};

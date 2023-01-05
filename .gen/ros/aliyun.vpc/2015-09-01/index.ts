import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class anycastEIP extends RosResource<anycastEIPComponentInputs> implements anycastEIPComponentOutputs {
	constructor(entity: ADKEntity, options: anycastEIPComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::VPC::AnycastEIP", options);
	}
	public readonly AnycastId: any;
	public readonly IpAddress: any;
	public readonly OrderId: any;
}
export interface anycastEIPComponentOutputs {
	readonly AnycastId: any;
	readonly IpAddress: any;
	readonly OrderId: any;
}
export interface anycastEIPComponentInputs {
	readonly Bandwidth?: number | undefined;
	readonly Description?: string | undefined;
	readonly InstanceChargeType?: string | undefined;
	readonly InternetChargeType?: string | undefined;
	readonly Name?: any | string;
	readonly ServiceLocation?: string | undefined;
	readonly LogicalId: string;
}
export class anycastEIPAssociation
	extends RosResource<anycastEIPAssociationComponentInputs>
	implements anycastEIPAssociationComponentOutputs
{
	constructor(entity: ADKEntity, options: anycastEIPAssociationComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::VPC::AnycastEIPAssociation", options);
	}
}
export interface anycastEIPAssociationComponentOutputs {}
export interface anycastEIPAssociationComponentInputs {
	readonly AnycastId: any | string;
	readonly BindInstanceId: any | string;
	readonly BindInstanceRegionId: any | string;
	readonly BindInstanceType: any | string;
	readonly LogicalId: string;
}
export class BgpGroup extends RosResource<BgpGroupComponentInputs> implements BgpGroupComponentOutputs {
	constructor(entity: ADKEntity, options: BgpGroupComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::VPC::BgpGroup", options);
	}
	public readonly BgpGroupId: any;
}
export interface BgpGroupComponentOutputs {
	readonly BgpGroupId: any;
}
export interface BgpGroupComponentInputs {
	readonly PeerAsn: number;
	readonly RouterId: string;
	readonly AuthKey?: string | undefined;
	readonly Description?: string | undefined;
	readonly IsFakeAsn?: boolean | undefined;
	readonly LocalAsn?: number | undefined;
	readonly Name?: any | string;
	readonly LogicalId: string;
}
export class BgpNetwork extends RosResource<BgpNetworkComponentInputs> implements BgpNetworkComponentOutputs {
	constructor(entity: ADKEntity, options: BgpNetworkComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::VPC::BgpNetwork", options);
	}
}
export interface BgpNetworkComponentOutputs {}
export interface BgpNetworkComponentInputs {
	readonly DstCidrBlock: any | string;
	readonly RouterId: any | string;
	readonly LogicalId: string;
}
export class BgpPeer extends RosResource<BgpPeerComponentInputs> implements BgpPeerComponentOutputs {
	constructor(entity: ADKEntity, options: BgpPeerComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::VPC::BgpPeer", options);
	}
	public readonly BgpPeerId: any;
}
export interface BgpPeerComponentOutputs {
	readonly BgpPeerId: any;
}
export interface BgpPeerComponentInputs {
	readonly BgpGroupId: string;
	readonly EnableBfd?: boolean | undefined;
	readonly PeerIpAddress?: string | undefined;
	readonly LogicalId: string;
}
export class CommonBandwidthPackage
	extends RosResource<CommonBandwidthPackageComponentInputs>
	implements CommonBandwidthPackageComponentOutputs
{
	constructor(entity: ADKEntity, options: CommonBandwidthPackageComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::VPC::CommonBandwidthPackage", options);
	}
	public readonly BandwidthPackageId: any;
}
export interface CommonBandwidthPackageComponentOutputs {
	readonly BandwidthPackageId: any;
}
export interface CommonBandwidthPackageComponentInputs {
	readonly Bandwidth: number;
	readonly Description?: string | undefined;
	readonly InternetChargeType?: string | undefined;
	readonly ISP?: string | undefined;
	readonly Name?: string | undefined;
	readonly Ratio?: number | undefined;
	readonly ResourceGroupId?: string | undefined;
	readonly Tags?: Tags[] | undefined;
	readonly Zone?: string | undefined;
	readonly LogicalId: string;
}
export class CommonBandwidthPackageIp
	extends RosResource<CommonBandwidthPackageIpComponentInputs>
	implements CommonBandwidthPackageIpComponentOutputs
{
	constructor(entity: ADKEntity, options: CommonBandwidthPackageIpComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::VPC::CommonBandwidthPackageIp", options);
	}
	public readonly IpAddresses: any;
	public readonly AllocationIds: any;
}
export interface CommonBandwidthPackageIpComponentOutputs {
	readonly IpAddresses: any;
	readonly AllocationIds: any;
}
export interface CommonBandwidthPackageIpComponentInputs {
	readonly BandwidthPackageId: string;
	readonly Eips: Eips[];
	readonly LogicalId: string;
}
export class CustomerGateway
	extends RosResource<CustomerGatewayComponentInputs>
	implements CustomerGatewayComponentOutputs
{
	constructor(entity: ADKEntity, options: CustomerGatewayComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::VPC::CustomerGateway", options);
	}
	public readonly CustomerGatewayId: any;
}
export interface CustomerGatewayComponentOutputs {
	readonly CustomerGatewayId: any;
}
export interface CustomerGatewayComponentInputs {
	readonly IpAddress: string;
	readonly Description?: string | undefined;
	readonly Name?: string | undefined;
	readonly LogicalId: string;
}
export class DhcpOptionsSet extends RosResource<DhcpOptionsSetComponentInputs> implements DhcpOptionsSetComponentOutputs {
	constructor(entity: ADKEntity, options: DhcpOptionsSetComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::VPC::DhcpOptionsSet", options);
	}
	public readonly DhcpOptionsSetId: any;
}
export interface DhcpOptionsSetComponentOutputs {
	readonly DhcpOptionsSetId: any;
}
export interface DhcpOptionsSetComponentInputs {
	readonly DhcpOptionsSetDescription?: string | undefined;
	readonly DhcpOptionsSetName?: string | undefined;
	readonly DomainName?: string | undefined;
	readonly DomainNameServers?: string[] | undefined;
	readonly LogicalId: string;
}
export class DhcpOptionsSetAttachment
	extends RosResource<DhcpOptionsSetAttachmentComponentInputs>
	implements DhcpOptionsSetAttachmentComponentOutputs
{
	constructor(entity: ADKEntity, options: DhcpOptionsSetAttachmentComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::VPC::DhcpOptionsSetAttachment", options);
	}
}
export interface DhcpOptionsSetAttachmentComponentOutputs {}
export interface DhcpOptionsSetAttachmentComponentInputs {
	readonly DhcpOptionsSetId: any | string;
	readonly VpcId: any | string;
	readonly LogicalId: string;
}
export class EIP extends RosResource<EIPComponentInputs> implements EIPComponentOutputs {
	constructor(entity: ADKEntity, options: EIPComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::VPC::EIP", options);
	}
	public readonly AllocationId: any;
	public readonly EipAddress: any;
	public readonly OrderId: any;
}
export interface EIPComponentOutputs {
	readonly AllocationId: any;
	readonly EipAddress: any;
	readonly OrderId: any;
}
export interface EIPComponentInputs {
	readonly AutoPay?: boolean | undefined;
	readonly Bandwidth?: number | undefined;
	readonly DeletionProtection?: boolean | undefined;
	readonly Description?: string | undefined;
	readonly InstanceChargeType?: string | undefined;
	readonly InternetChargeType?: string | undefined;
	readonly Isp?: any | string;
	readonly Name?: string | undefined;
	readonly Netmode?: string | undefined;
	readonly Period?: number | undefined;
	readonly PricingCycle?: string | undefined;
	readonly PublicIpAddressPoolId?: string | undefined;
	readonly ResourceGroupId?: string | undefined;
	readonly SecurityProtectionTypes?: string[] | undefined;
	readonly Tags?: Tags[] | undefined;
	readonly LogicalId: string;
}
export class EIPAssociation extends RosResource<EIPAssociationComponentInputs> implements EIPAssociationComponentOutputs {
	constructor(entity: ADKEntity, options: EIPAssociationComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::VPC::EIPAssociation", options);
	}
	public readonly EipAddress: any;
}
export interface EIPAssociationComponentOutputs {
	readonly EipAddress: any;
}
export interface EIPAssociationComponentInputs {
	readonly AllocationId: any | string;
	readonly InstanceId: string;
	readonly Mode?: string | undefined;
	readonly PrivateIpAddress?: string | undefined;
	readonly LogicalId: string;
}
export class EIPPro extends RosResource<EIPProComponentInputs> implements EIPProComponentOutputs {
	constructor(entity: ADKEntity, options: EIPProComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::VPC::EIPPro", options);
	}
	public readonly Isp: any;
	public readonly AllocationId: any;
	public readonly EipAddress: any;
	public readonly OrderId: any;
}
export interface EIPProComponentOutputs {
	readonly Isp: any;
	readonly AllocationId: any;
	readonly EipAddress: any;
	readonly OrderId: any;
}
export interface EIPProComponentInputs {
	readonly AutoPay?: boolean | undefined;
	readonly Bandwidth?: number | undefined;
	readonly DeletionProtection?: boolean | undefined;
	readonly Description?: string | undefined;
	readonly InstanceChargeType?: string | undefined;
	readonly InstanceId?: string | undefined;
	readonly InternetChargeType?: string | undefined;
	readonly IpAddress?: string | undefined;
	readonly ISP?: string | undefined;
	readonly Name?: string | undefined;
	readonly Netmode?: string | undefined;
	readonly Period?: number | undefined;
	readonly PricingCycle?: string | undefined;
	readonly PublicIpAddressPoolId?: string | undefined;
	readonly ResourceGroupId?: string | undefined;
	readonly SecurityProtectionTypes?: string[] | undefined;
	readonly Tags?: Tags[] | undefined;
	readonly LogicalId: string;
}
export class EIPSegment extends RosResource<EIPSegmentComponentInputs> implements EIPSegmentComponentOutputs {
	constructor(entity: ADKEntity, options: EIPSegmentComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::VPC::EIPSegment", options);
	}
	public readonly EipSegmentInstanceId: any;
	public readonly EipAddresses: any;
}
export interface EIPSegmentComponentOutputs {
	readonly EipSegmentInstanceId: any;
	readonly EipAddresses: any;
}
export interface EIPSegmentComponentInputs {
	readonly EipMask: number;
	readonly Bandwidth?: number | undefined;
	readonly InternetChargeType?: string | undefined;
	readonly Netmode?: string | undefined;
	readonly ResourceGroupId?: string | undefined;
	readonly LogicalId: string;
}
export class FlowLog extends RosResource<FlowLogComponentInputs> implements FlowLogComponentOutputs {
	constructor(entity: ADKEntity, options: FlowLogComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::VPC::FlowLog", options);
	}
	public readonly FlowLogId: any;
}
export interface FlowLogComponentOutputs {
	readonly FlowLogId: any;
}
export interface FlowLogComponentInputs {
	readonly LogStoreName: any | string;
	readonly ProjectName: any | string;
	readonly ResourceId: any | string;
	readonly ResourceType: any | string;
	readonly TrafficType: any | string;
	readonly Description?: any | string;
	readonly FlowLogName?: any | string;
	readonly LogicalId: string;
}
export class GrantInstanceToCen
	extends RosResource<GrantInstanceToCenComponentInputs>
	implements GrantInstanceToCenComponentOutputs
{
	constructor(entity: ADKEntity, options: GrantInstanceToCenComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::VPC::GrantInstanceToCen", options);
	}
}
export interface GrantInstanceToCenComponentOutputs {}
export interface GrantInstanceToCenComponentInputs {
	readonly CenId: any | string;
	readonly CenOwnerId: number;
	readonly InstanceId: any | string;
	readonly InstanceType: string;
	readonly LogicalId: string;
}
export class IpsecServer extends RosResource<IpsecServerComponentInputs> implements IpsecServerComponentOutputs {
	constructor(entity: ADKEntity, options: IpsecServerComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::VPC::IpsecServer", options);
	}
	public readonly IpsecServerId: any;
}
export interface IpsecServerComponentOutputs {
	readonly IpsecServerId: any;
}
export interface IpsecServerComponentInputs {
	readonly ClientIpPool: string;
	readonly LocalSubnet: string;
	readonly VpnGatewayId: string;
	readonly EffectImmediately?: boolean | undefined;
	readonly IkeConfig?: IkeConfig | undefined;
	readonly IpsecConfig?: IpsecConfig | undefined;
	readonly IpsecServerName?: any | string;
	readonly Psk?: string | undefined;
	readonly PskEnabled?: boolean | undefined;
	readonly LogicalId: string;
}
export class Ipv6Gateway extends RosResource<Ipv6GatewayComponentInputs> implements Ipv6GatewayComponentOutputs {
	constructor(entity: ADKEntity, options: Ipv6GatewayComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::VPC::Ipv6Gateway", options);
	}
	public readonly Ipv6GatewayId: any;
}
export interface Ipv6GatewayComponentOutputs {
	readonly Ipv6GatewayId: any;
}
export interface Ipv6GatewayComponentInputs {
	readonly VpcId: string;
	readonly Description?: string | undefined;
	readonly Name?: string | undefined;
	readonly Spec?: string | undefined;
	readonly Tags?: Tags[] | undefined;
	readonly LogicalId: string;
}
export class Ipv6InternetBandwidth
	extends RosResource<Ipv6InternetBandwidthComponentInputs>
	implements Ipv6InternetBandwidthComponentOutputs
{
	constructor(entity: ADKEntity, options: Ipv6InternetBandwidthComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::VPC::Ipv6InternetBandwidth", options);
	}
	public readonly InternetBandwidthId: any;
}
export interface Ipv6InternetBandwidthComponentOutputs {
	readonly InternetBandwidthId: any;
}
export interface Ipv6InternetBandwidthComponentInputs {
	readonly Bandwidth: number;
	readonly Ipv6AddressId: string;
	readonly Ipv6GatewayId: string;
	readonly InternetChargeType?: string | undefined;
	readonly Tags?: Tags[] | undefined;
	readonly LogicalId: string;
}
export class NatGateway extends RosResource<NatGatewayComponentInputs> implements NatGatewayComponentOutputs {
	constructor(entity: ADKEntity, options: NatGatewayComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::VPC::NatGateway", options);
	}
	public readonly NatGatewayId: any;
	public readonly SNatTableId: any;
	public readonly ForwardTableId: any;
}
export interface NatGatewayComponentOutputs {
	readonly NatGatewayId: any;
	readonly SNatTableId: any;
	readonly ForwardTableId: any;
}
export interface NatGatewayComponentInputs {
	readonly VpcId: string;
	readonly VSwitchId: string;
	readonly AutoPay?: boolean | undefined;
	readonly DeletionForce?: boolean | undefined;
	readonly DeletionProtection?: boolean | undefined;
	readonly Description?: string | undefined;
	readonly Duration?: number | undefined;
	readonly EipBindMode?: string | undefined;
	readonly InstanceChargeType?: string | undefined;
	readonly InternetChargeType?: string | undefined;
	readonly NatGatewayName?: string | undefined;
	readonly NatType?: string | undefined;
	readonly NetworkType?: string | undefined;
	readonly PricingCycle?: string | undefined;
	readonly Tags?: Tags[] | undefined;
	readonly LogicalId: string;
}
export class NatIp extends RosResource<NatIpComponentInputs> implements NatIpComponentOutputs {
	constructor(entity: ADKEntity, options: NatIpComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::VPC::NatIp", options);
	}
	public readonly NatIpId: any;
}
export interface NatIpComponentOutputs {
	readonly NatIpId: any;
}
export interface NatIpComponentInputs {
	readonly NatGatewayId: string;
	readonly NatIpCidr: string;
	readonly NatIpDescription: string;
	readonly NatIpName: string;
	readonly NatIp?: any | string;
	readonly NatIpCidrId?: string | undefined;
	readonly LogicalId: string;
}
export class NetworkAcl extends RosResource<NetworkAclComponentInputs> implements NetworkAclComponentOutputs {
	constructor(entity: ADKEntity, options: NetworkAclComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::VPC::NetworkAcl", options);
	}
	public readonly NetworkAclId: any;
	public readonly NetworkAclEntryName: any;
}
export interface NetworkAclComponentOutputs {
	readonly NetworkAclId: any;
	readonly NetworkAclEntryName: any;
}
export interface NetworkAclComponentInputs {
	readonly VpcId: string;
	readonly Description?: string | undefined;
	readonly EgressAclEntries?: EgressAclEntries[] | undefined;
	readonly IngressAclEntries?: IngressAclEntries[] | undefined;
	readonly NetworkAclName?: string | undefined;
	readonly LogicalId: string;
}
export class NetworkAclAssociation
	extends RosResource<NetworkAclAssociationComponentInputs>
	implements NetworkAclAssociationComponentOutputs
{
	constructor(entity: ADKEntity, options: NetworkAclAssociationComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::VPC::NetworkAclAssociation", options);
	}
}
export interface NetworkAclAssociationComponentOutputs {}
export interface NetworkAclAssociationComponentInputs {
	readonly NetworkAclId: any | string;
	readonly Resources: Resources[];
	readonly LogicalId: string;
}
export class PeeringRouterInterfaceBinding
	extends RosResource<PeeringRouterInterfaceBindingComponentInputs>
	implements PeeringRouterInterfaceBindingComponentOutputs
{
	constructor(entity: ADKEntity, options: PeeringRouterInterfaceBindingComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::VPC::PeeringRouterInterfaceBinding", options);
	}
}
export interface PeeringRouterInterfaceBindingComponentOutputs {}
export interface PeeringRouterInterfaceBindingComponentInputs {
	readonly OppositeInterfaceId: string;
	readonly RouterInterfaceId: any | string;
	readonly OppositeInterfaceOwnerId?: string | undefined;
	readonly OppositeRouterId?: string | undefined;
	readonly LogicalId: string;
}
export class PeeringRouterInterfaceConnection
	extends RosResource<PeeringRouterInterfaceConnectionComponentInputs>
	implements PeeringRouterInterfaceConnectionComponentOutputs
{
	constructor(entity: ADKEntity, options: PeeringRouterInterfaceConnectionComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::VPC::PeeringRouterInterfaceConnection", options);
	}
}
export interface PeeringRouterInterfaceConnectionComponentOutputs {}
export interface PeeringRouterInterfaceConnectionComponentInputs {
	readonly OppositeInterfaceId: any | string;
	readonly RouterInterfaceId: any | string;
	readonly LogicalId: string;
}
export class RouteTable extends RosResource<RouteTableComponentInputs> implements RouteTableComponentOutputs {
	constructor(entity: ADKEntity, options: RouteTableComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::VPC::RouteTable", options);
	}
	public readonly RouteTableId: any;
	public readonly VSwitchIds: any;
	public readonly RouteTableType: any;
}
export interface RouteTableComponentOutputs {
	readonly RouteTableId: any;
	readonly VSwitchIds: any;
	readonly RouteTableType: any;
}
export interface RouteTableComponentInputs {
	readonly VpcId: any | string;
	readonly Description?: string | undefined;
	readonly RouteTableName?: any | string;
	readonly Tags?: Tags[] | undefined;
	readonly LogicalId: string;
}
export class RouteTableAssociation
	extends RosResource<RouteTableAssociationComponentInputs>
	implements RouteTableAssociationComponentOutputs
{
	constructor(entity: ADKEntity, options: RouteTableAssociationComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::VPC::RouteTableAssociation", options);
	}
}
export interface RouteTableAssociationComponentOutputs {}
export interface RouteTableAssociationComponentInputs {
	readonly RouteTableId: any | string;
	readonly VSwitchId: any | string;
	readonly LogicalId: string;
}
export class RouterInterface
	extends RosResource<RouterInterfaceComponentInputs>
	implements RouterInterfaceComponentOutputs
{
	constructor(entity: ADKEntity, options: RouterInterfaceComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::VPC::RouterInterface", options);
	}
	public readonly RouterInterfaceId: any;
}
export interface RouterInterfaceComponentOutputs {
	readonly RouterInterfaceId: any;
}
export interface RouterInterfaceComponentInputs {
	readonly Role: string;
	readonly RouterId: string;
	readonly AccessPointId?: string | undefined;
	readonly AutoPay?: boolean | undefined;
	readonly Description?: string | undefined;
	readonly HealthCheckSourceIp?: string | undefined;
	readonly HealthCheckTargetIp?: string | undefined;
	readonly InstanceChargeType?: string | undefined;
	readonly Name?: string | undefined;
	readonly OppositeAccessPointId?: string | undefined;
	readonly OppositeInterfaceId?: string | undefined;
	readonly OppositeInterfaceOwnerId?: string | undefined;
	readonly OppositeRegionId?: string | undefined;
	readonly OppositeRouterId?: string | undefined;
	readonly OppositeRouterType?: string | undefined;
	readonly Period?: number | undefined;
	readonly PricingCycle?: string | undefined;
	readonly RouterType?: string | undefined;
	readonly Spec?: string | undefined;
	readonly LogicalId: string;
}
export class SnatEntry extends RosResource<SnatEntryComponentInputs> implements SnatEntryComponentOutputs {
	constructor(entity: ADKEntity, options: SnatEntryComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::VPC::SnatEntry", options);
	}
	public readonly SnatEntryIds: any;
}
export interface SnatEntryComponentOutputs {
	readonly SnatEntryIds: any;
}
export interface SnatEntryComponentInputs {
	readonly SnatIp: string;
	readonly SnatTableId: string;
	readonly SnatEntryName?: string | undefined;
	readonly SourceCIDR?: string | undefined;
	readonly SourceVSwitchIds?: any[] | undefined;
	readonly LogicalId: string;
}
export class SslVpnClientCert
	extends RosResource<SslVpnClientCertComponentInputs>
	implements SslVpnClientCertComponentOutputs
{
	constructor(entity: ADKEntity, options: SslVpnClientCertComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::VPC::SslVpnClientCert", options);
	}
	public readonly SslVpnClientCertId: any;
}
export interface SslVpnClientCertComponentOutputs {
	readonly SslVpnClientCertId: any;
}
export interface SslVpnClientCertComponentInputs {
	readonly SslVpnServerId: string;
	readonly Name?: string | undefined;
	readonly LogicalId: string;
}
export class SslVpnServer extends RosResource<SslVpnServerComponentInputs> implements SslVpnServerComponentOutputs {
	constructor(entity: ADKEntity, options: SslVpnServerComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::VPC::SslVpnServer", options);
	}
	public readonly SslVpnServerId: any;
}
export interface SslVpnServerComponentOutputs {
	readonly SslVpnServerId: any;
}
export interface SslVpnServerComponentInputs {
	readonly ClientIpPool: string;
	readonly LocalSubnet: string;
	readonly VpnGatewayId: string;
	readonly Cipher?: string | undefined;
	readonly Compress?: boolean | undefined;
	readonly Name?: string | undefined;
	readonly Port?: number | undefined;
	readonly Proto?: string | undefined;
	readonly LogicalId: string;
}
export class VirtualBorderRouter
	extends RosResource<VirtualBorderRouterComponentInputs>
	implements VirtualBorderRouterComponentOutputs
{
	constructor(entity: ADKEntity, options: VirtualBorderRouterComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::VPC::VirtualBorderRouter", options);
	}
	public readonly RouteTableId: any;
	public readonly VlanInterfaceId: any;
	public readonly VbrId: any;
}
export interface VirtualBorderRouterComponentOutputs {
	readonly RouteTableId: any;
	readonly VlanInterfaceId: any;
	readonly VbrId: any;
}
export interface VirtualBorderRouterComponentInputs {
	readonly LocalGatewayIp: string;
	readonly PeerGatewayIp: string;
	readonly PeeringSubnetMask: string;
	readonly PhysicalConnectionId: string;
	readonly VlanId: number;
	readonly CircuitCode?: string | undefined;
	readonly Description?: string | undefined;
	readonly Name?: any | string;
	readonly LogicalId: string;
}
export class VpcPeerConnection
	extends RosResource<VpcPeerConnectionComponentInputs>
	implements VpcPeerConnectionComponentOutputs
{
	constructor(entity: ADKEntity, options: VpcPeerConnectionComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::VPC::VpcPeerConnection", options);
	}
	public readonly InstanceId: any;
}
export interface VpcPeerConnectionComponentOutputs {
	readonly InstanceId: any;
}
export interface VpcPeerConnectionComponentInputs {
	readonly AcceptingVpcId: string;
	readonly VpcId: string;
	readonly AcceptingAliUid?: number | undefined;
	readonly AcceptingRegionId?: string | undefined;
	readonly DeletionForce?: boolean | undefined;
	readonly Description?: string | undefined;
	readonly Name?: string | undefined;
	readonly LogicalId: string;
}
export class VpnConnection extends RosResource<VpnConnectionComponentInputs> implements VpnConnectionComponentOutputs {
	constructor(entity: ADKEntity, options: VpnConnectionComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::VPC::VpnConnection", options);
	}
	public readonly Status: any;
	public readonly PeerVpnConnectionConfig: any;
	public readonly VpnConnectionId: any;
}
export interface VpnConnectionComponentOutputs {
	readonly Status: any;
	readonly PeerVpnConnectionConfig: any;
	readonly VpnConnectionId: any;
}
export interface VpnConnectionComponentInputs {
	readonly CustomerGatewayId: string;
	readonly LocalSubnet: string;
	readonly RemoteSubnet: string;
	readonly VpnGatewayId: string;
	readonly EffectImmediately?: boolean | undefined;
	readonly HealthCheckConfig?: HealthCheckConfig | undefined;
	readonly IkeConfig?: IkeConfig | undefined;
	readonly IpsecConfig?: IpsecConfig | undefined;
	readonly Name?: string | undefined;
	readonly LogicalId: string;
}
export class VpnGateway extends RosResource<VpnGatewayComponentInputs> implements VpnGatewayComponentOutputs {
	constructor(entity: ADKEntity, options: VpnGatewayComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::VPC::VpnGateway", options);
	}
	public readonly InternetIp: any;
	public readonly VpnGatewayId: any;
	public readonly OrderId: any;
	public readonly Spec: any;
	public readonly SslMaxConnections: any;
}
export interface VpnGatewayComponentOutputs {
	readonly InternetIp: any;
	readonly VpnGatewayId: any;
	readonly OrderId: any;
	readonly Spec: any;
	readonly SslMaxConnections: any;
}
export interface VpnGatewayComponentInputs {
	readonly Bandwidth: number;
	readonly VpcId: string;
	readonly AutoPay?: boolean | undefined;
	readonly Description?: string | undefined;
	readonly EnableIpsec?: boolean | undefined;
	readonly EnableSsl?: boolean | undefined;
	readonly InstanceChargeType?: string | undefined;
	readonly Name?: string | undefined;
	readonly Period?: number | undefined;
	readonly SslConnections?: number | undefined;
	readonly Tags?: Tags[] | undefined;
	readonly VSwitchId?: string | undefined;
	readonly LogicalId: string;
}
export class VpnPbrRouteEntry
	extends RosResource<VpnPbrRouteEntryComponentInputs>
	implements VpnPbrRouteEntryComponentOutputs
{
	constructor(entity: ADKEntity, options: VpnPbrRouteEntryComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::VPC::VpnPbrRouteEntry", options);
	}
}
export interface VpnPbrRouteEntryComponentOutputs {}
export interface VpnPbrRouteEntryComponentInputs {
	readonly NextHop: any | string;
	readonly PublishVpc: boolean;
	readonly RouteDest: any | string;
	readonly RouteSource: any | string;
	readonly VpnGatewayId: any | string;
	readonly Weight: number;
	readonly Description?: string | undefined;
	readonly OverlayMode?: string | undefined;
	readonly LogicalId: string;
}
export class VpnRouteEntry extends RosResource<VpnRouteEntryComponentInputs> implements VpnRouteEntryComponentOutputs {
	constructor(entity: ADKEntity, options: VpnRouteEntryComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::VPC::VpnRouteEntry", options);
	}
}
export interface VpnRouteEntryComponentOutputs {}
export interface VpnRouteEntryComponentInputs {
	readonly NextHop: any | string;
	readonly PublishVpc: boolean;
	readonly RouteDest: any | string;
	readonly VpnGatewayId: any | string;
	readonly Weight: number;
	readonly Description?: string | undefined;
	readonly OverlayMode?: string | undefined;
	readonly LogicalId: string;
}
export interface Tags {
	readonly Value?: string | undefined;
	readonly Key: string;
}
export interface Eips {
	readonly Bandwidth?: number | undefined;
	readonly AllocationId: string;
}
export interface IkeConfig {
	readonly IkeAuthAlg?: string | undefined;
	readonly LocalId?: string | undefined;
	readonly IkeEncAlg?: string | undefined;
	readonly IkeVersion?: string | undefined;
	readonly IkeMode?: string | undefined;
	readonly IkeLifetime?: number | undefined;
	readonly RemoteId?: string | undefined;
	readonly IkePfs?: string | undefined;
}
export interface IpsecConfig {
	readonly IpsecPfs?: string | undefined;
	readonly IpsecEncAlg?: string | undefined;
	readonly IpsecAuthAlg?: string | undefined;
	readonly IpsecLifetime?: number | undefined;
}
export interface EgressAclEntries {
	readonly Policy: string;
	readonly Description?: string | undefined;
	readonly DestinationCidrIp?: string | undefined;
	readonly EntryType?: string | undefined;
	readonly Port: string;
	readonly Protocol: string;
	readonly NetworkAclEntryName?: string | undefined;
}
export interface IngressAclEntries {
	readonly Policy: string;
	readonly Description?: string | undefined;
	readonly EntryType?: string | undefined;
	readonly Port: string;
	readonly SourceCidrIp?: string | undefined;
	readonly Protocol: string;
	readonly NetworkAclEntryName?: string | undefined;
}
export interface Resources {
	readonly ResourceId: string;
	readonly ResourceType?: string | undefined;
}
export interface HealthCheckConfig {
	readonly Enable?: boolean | undefined;
	readonly Dip?: boolean | undefined;
	readonly Retry?: number | undefined;
	readonly Sip?: string | undefined;
	readonly Interval?: number | undefined;
}
export default {
	AnycastEIP: anycastEIP,
	AnycastEIPAssociation: anycastEIPAssociation,
	BgpGroup: BgpGroup,
	BgpNetwork: BgpNetwork,
	BgpPeer: BgpPeer,
	CommonBandwidthPackage: CommonBandwidthPackage,
	CommonBandwidthPackageIp: CommonBandwidthPackageIp,
	CustomerGateway: CustomerGateway,
	DhcpOptionsSet: DhcpOptionsSet,
	DhcpOptionsSetAttachment: DhcpOptionsSetAttachment,
	EIP: EIP,
	EIPAssociation: EIPAssociation,
	EIPPro: EIPPro,
	EIPSegment: EIPSegment,
	FlowLog: FlowLog,
	GrantInstanceToCen: GrantInstanceToCen,
	IpsecServer: IpsecServer,
	Ipv6Gateway: Ipv6Gateway,
	Ipv6InternetBandwidth: Ipv6InternetBandwidth,
	NatGateway: NatGateway,
	NatIp: NatIp,
	NetworkAcl: NetworkAcl,
	NetworkAclAssociation: NetworkAclAssociation,
	PeeringRouterInterfaceBinding: PeeringRouterInterfaceBinding,
	PeeringRouterInterfaceConnection: PeeringRouterInterfaceConnection,
	RouteTable: RouteTable,
	RouteTableAssociation: RouteTableAssociation,
	RouterInterface: RouterInterface,
	SnatEntry: SnatEntry,
	SslVpnClientCert: SslVpnClientCert,
	SslVpnServer: SslVpnServer,
	VirtualBorderRouter: VirtualBorderRouter,
	VpcPeerConnection: VpcPeerConnection,
	VpnConnection: VpnConnection,
	VpnGateway: VpnGateway,
	VpnPbrRouteEntry: VpnPbrRouteEntry,
	VpnRouteEntry: VpnRouteEntry,
};

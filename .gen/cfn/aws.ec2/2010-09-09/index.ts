import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class CapacityReservation
	extends CfnResource<CapacityReservationComponentInputs>
	implements CapacityReservationComponentOutputs
{
	constructor(entity: ADKEntity, options: CapacityReservationComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::CapacityReservation", options);
	}
	public readonly AvailabilityZone: string;
	public readonly AvailableInstanceCount: number;
	public readonly Id: string;
	public readonly InstanceType: string;
	public readonly TotalInstanceCount: number;
}
export interface CapacityReservationComponentOutputs {
	readonly AvailabilityZone: string;
	readonly AvailableInstanceCount: number;
	readonly Id: string;
	readonly InstanceType: string;
	readonly TotalInstanceCount: number;
}
export interface CapacityReservationComponentInputs {
	readonly AvailabilityZone: string;
	readonly InstanceCount: number;
	readonly InstancePlatform: string;
	readonly InstanceType: string;
	readonly EbsOptimized?: boolean | undefined;
	readonly EndDate?: string | undefined;
	readonly EndDateType?: string | undefined;
	readonly EphemeralStorage?: boolean | undefined;
	readonly InstanceMatchCriteria?: string | undefined;
	readonly OutPostArn?: string | undefined;
	readonly PlacementGroupArn?: string | undefined;
	readonly TagSpecifications?: TagSpecification[] | undefined;
	readonly Tenancy?: string;
	readonly LogicalId: string;
}
export class CapacityReservationFleet
	extends CfnResource<CapacityReservationFleetComponentInputs>
	implements CapacityReservationFleetComponentOutputs
{
	constructor(entity: ADKEntity, options: CapacityReservationFleetComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::CapacityReservationFleet", options);
	}
	public readonly CapacityReservationFleetId: string;
}
export interface CapacityReservationFleetComponentOutputs {
	readonly CapacityReservationFleetId: string;
}
export interface CapacityReservationFleetComponentInputs {
	readonly AllocationStrategy?: string | undefined;
	readonly EndDate?: string | undefined;
	readonly InstanceMatchCriteria?: string | undefined;
	readonly InstanceTypeSpecifications?: InstanceTypeSpecification[] | undefined;
	readonly NoRemoveEndDate?: boolean | undefined;
	readonly RemoveEndDate?: boolean | undefined;
	readonly TagSpecifications?: TagSpecification[] | undefined;
	readonly Tenancy?: string | undefined;
	readonly TotalTargetCapacity?: number | undefined;
	readonly LogicalId: string;
}
export class CarrierGateway extends CfnResource<CarrierGatewayComponentInputs> implements CarrierGatewayComponentOutputs {
	constructor(entity: ADKEntity, options: CarrierGatewayComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::CarrierGateway", options);
	}
	public readonly CarrierGatewayId: string;
	public readonly OwnerId: string;
	public readonly State: string;
}
export interface CarrierGatewayComponentOutputs {
	readonly CarrierGatewayId: string;
	readonly OwnerId: string;
	readonly State: string;
}
export interface CarrierGatewayComponentInputs {
	readonly VpcId: string;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class ClientVpnAuthorizationRule
	extends CfnResource<ClientVpnAuthorizationRuleComponentInputs>
	implements ClientVpnAuthorizationRuleComponentOutputs
{
	constructor(entity: ADKEntity, options: ClientVpnAuthorizationRuleComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::ClientVpnAuthorizationRule", options);
	}
}
export interface ClientVpnAuthorizationRuleComponentOutputs {}
export interface ClientVpnAuthorizationRuleComponentInputs {
	readonly ClientVpnEndpointId: string;
	readonly TargetNetworkCidr: string;
	readonly AccessGroupId?: string | undefined;
	readonly AuthorizeAllGroups?: boolean | undefined;
	readonly Description?: string | undefined;
	readonly LogicalId: string;
}
export class ClientVpnEndpoint
	extends CfnResource<ClientVpnEndpointComponentInputs>
	implements ClientVpnEndpointComponentOutputs
{
	constructor(entity: ADKEntity, options: ClientVpnEndpointComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::ClientVpnEndpoint", options);
	}
}
export interface ClientVpnEndpointComponentOutputs {}
export interface ClientVpnEndpointComponentInputs {
	readonly AuthenticationOptions: ClientAuthenticationRequest[];
	readonly ClientCidrBlock: string;
	readonly ConnectionLogOptions: ConnectionLogOptions;
	readonly ServerCertificateArn: string;
	readonly ClientConnectOptions?: ClientConnectOptions | undefined;
	readonly ClientLoginBannerOptions?: ClientLoginBannerOptions | undefined;
	readonly Description?: string | undefined;
	readonly DnsServers?: string[] | undefined;
	readonly SecurityGroupIds?: string[] | undefined;
	readonly SelfServicePortal?: string | undefined;
	readonly SessionTimeoutHours?: number | undefined;
	readonly SplitTunnel?: boolean | undefined;
	readonly TagSpecifications?: TagSpecification[] | undefined;
	readonly TransportProtocol?: string | undefined;
	readonly VpcId?: string | undefined;
	readonly VpnPort?: number | undefined;
	readonly LogicalId: string;
}
export class ClientVpnRoute extends CfnResource<ClientVpnRouteComponentInputs> implements ClientVpnRouteComponentOutputs {
	constructor(entity: ADKEntity, options: ClientVpnRouteComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::ClientVpnRoute", options);
	}
}
export interface ClientVpnRouteComponentOutputs {}
export interface ClientVpnRouteComponentInputs {
	readonly ClientVpnEndpointId: string;
	readonly DestinationCidrBlock: string;
	readonly TargetVpcSubnetId: string;
	readonly Description?: string | undefined;
	readonly LogicalId: string;
}
export class ClientVpnTargetNetworkAssociation
	extends CfnResource<ClientVpnTargetNetworkAssociationComponentInputs>
	implements ClientVpnTargetNetworkAssociationComponentOutputs
{
	constructor(entity: ADKEntity, options: ClientVpnTargetNetworkAssociationComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::ClientVpnTargetNetworkAssociation", options);
	}
}
export interface ClientVpnTargetNetworkAssociationComponentOutputs {}
export interface ClientVpnTargetNetworkAssociationComponentInputs {
	readonly ClientVpnEndpointId: string;
	readonly SubnetId: string;
	readonly LogicalId: string;
}
export class CustomerGateway
	extends CfnResource<CustomerGatewayComponentInputs>
	implements CustomerGatewayComponentOutputs
{
	constructor(entity: ADKEntity, options: CustomerGatewayComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::CustomerGateway", options);
	}
	public readonly CustomerGatewayId: string;
}
export interface CustomerGatewayComponentOutputs {
	readonly CustomerGatewayId: string;
}
export interface CustomerGatewayComponentInputs {
	readonly BgpAsn: number;
	readonly IpAddress: string;
	readonly Type: string;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class DHCPOptions extends CfnResource<DHCPOptionsComponentInputs> implements DHCPOptionsComponentOutputs {
	constructor(entity: ADKEntity, options: DHCPOptionsComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::DHCPOptions", options);
	}
	public readonly DhcpOptionsId: string;
}
export interface DHCPOptionsComponentOutputs {
	readonly DhcpOptionsId: string;
}
export interface DHCPOptionsComponentInputs {
	readonly DomainName?: string | undefined;
	readonly DomainNameServers?: string[] | undefined;
	readonly NetbiosNameServers?: string[] | undefined;
	readonly NetbiosNodeType?: number | undefined;
	readonly NtpServers?: string[] | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class EC2Fleet extends CfnResource<EC2FleetComponentInputs> implements EC2FleetComponentOutputs {
	constructor(entity: ADKEntity, options: EC2FleetComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::EC2Fleet", options);
	}
	public readonly FleetId: string;
}
export interface EC2FleetComponentOutputs {
	readonly FleetId: string;
}
export interface EC2FleetComponentInputs {
	readonly LaunchTemplateConfigs: FleetLaunchTemplateConfigRequest[];
	readonly TargetCapacitySpecification: TargetCapacitySpecificationRequest;
	readonly Context?: string | undefined;
	readonly ExcessCapacityTerminationPolicy?: string | undefined;
	readonly OnDemandOptions?: OnDemandOptionsRequest | undefined;
	readonly ReplaceUnhealthyInstances?: boolean | undefined;
	readonly SpotOptions?: SpotOptionsRequest | undefined;
	readonly TagSpecifications?: TagSpecification[] | undefined;
	readonly TerminateInstancesWithExpiration?: boolean | undefined;
	readonly Type?: string | undefined;
	readonly ValidFrom?: string | undefined;
	readonly ValidUntil?: string | undefined;
	readonly LogicalId: string;
}
export class EIP extends CfnResource<EIPComponentInputs> implements EIPComponentOutputs {
	constructor(entity: ADKEntity, options: EIPComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::EIP", options);
	}
	public readonly AllocationId: string;
	public readonly PublicIp: string;
}
export interface EIPComponentOutputs {
	readonly AllocationId: string;
	readonly PublicIp: string;
}
export interface EIPComponentInputs {
	readonly Domain?: string | undefined;
	readonly InstanceId?: string | undefined;
	readonly NetworkBorderGroup?: string | undefined;
	readonly PublicIpv4Pool?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly TransferAddress?: string | undefined;
	readonly LogicalId: string;
}
export class EIPAssociation extends CfnResource<EIPAssociationComponentInputs> implements EIPAssociationComponentOutputs {
	constructor(entity: ADKEntity, options: EIPAssociationComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::EIPAssociation", options);
	}
}
export interface EIPAssociationComponentOutputs {}
export interface EIPAssociationComponentInputs {
	readonly AllocationId?: string | undefined;
	readonly EIP?: string | undefined;
	readonly InstanceId?: string | undefined;
	readonly NetworkInterfaceId?: string | undefined;
	readonly PrivateIpAddress?: string | undefined;
	readonly LogicalId: string;
}
export class EgressOnlyInternetGateway
	extends CfnResource<EgressOnlyInternetGatewayComponentInputs>
	implements EgressOnlyInternetGatewayComponentOutputs
{
	constructor(entity: ADKEntity, options: EgressOnlyInternetGatewayComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::EgressOnlyInternetGateway", options);
	}
	public readonly Id: string;
}
export interface EgressOnlyInternetGatewayComponentOutputs {
	readonly Id: string;
}
export interface EgressOnlyInternetGatewayComponentInputs {
	readonly VpcId: string;
	readonly LogicalId: string;
}
export class EnclaveCertificateIamRoleAssociation
	extends CfnResource<EnclaveCertificateIamRoleAssociationComponentInputs>
	implements EnclaveCertificateIamRoleAssociationComponentOutputs
{
	constructor(entity: ADKEntity, options: EnclaveCertificateIamRoleAssociationComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::EnclaveCertificateIamRoleAssociation", options);
	}
	public readonly CertificateS3BucketName: string;
	public readonly CertificateS3ObjectKey: string;
	public readonly EncryptionKmsKeyId: string;
}
export interface EnclaveCertificateIamRoleAssociationComponentOutputs {
	readonly CertificateS3BucketName: string;
	readonly CertificateS3ObjectKey: string;
	readonly EncryptionKmsKeyId: string;
}
export interface EnclaveCertificateIamRoleAssociationComponentInputs {
	readonly CertificateArn: string;
	readonly RoleArn: string;
	readonly LogicalId: string;
}
export class FlowLog extends CfnResource<FlowLogComponentInputs> implements FlowLogComponentOutputs {
	constructor(entity: ADKEntity, options: FlowLogComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::FlowLog", options);
	}
	public readonly Id: string;
}
export interface FlowLogComponentOutputs {
	readonly Id: string;
}
export interface FlowLogComponentInputs {
	readonly ResourceId: string;
	readonly ResourceType: string;
	readonly DeliverLogsPermissionArn?: string | undefined;
	readonly DestinationOptions?: DestinationOptions | undefined;
	readonly LogDestination?: string | undefined;
	readonly LogDestinationType?: string | undefined;
	readonly LogFormat?: string | undefined;
	readonly LogGroupName?: string | undefined;
	readonly MaxAggregationInterval?: number | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly TrafficType?: string | undefined;
	readonly LogicalId: string;
}
export class GatewayRouteTableAssociation
	extends CfnResource<GatewayRouteTableAssociationComponentInputs>
	implements GatewayRouteTableAssociationComponentOutputs
{
	constructor(entity: ADKEntity, options: GatewayRouteTableAssociationComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::GatewayRouteTableAssociation", options);
	}
	public readonly AssociationId: string;
}
export interface GatewayRouteTableAssociationComponentOutputs {
	readonly AssociationId: string;
}
export interface GatewayRouteTableAssociationComponentInputs {
	readonly GatewayId: string;
	readonly RouteTableId: string;
	readonly LogicalId: string;
}
export class Host extends CfnResource<HostComponentInputs> implements HostComponentOutputs {
	constructor(entity: ADKEntity, options: HostComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::Host", options);
	}
	public readonly HostId: string;
}
export interface HostComponentOutputs {
	readonly HostId: string;
}
export interface HostComponentInputs {
	readonly AvailabilityZone: string;
	readonly AutoPlacement?: string | undefined;
	readonly HostRecovery?: string | undefined;
	readonly InstanceFamily?: string | undefined;
	readonly InstanceType?: string | undefined;
	readonly OutpostArn?: string | undefined;
	readonly LogicalId: string;
}
export class IPAM extends CfnResource<IPAMComponentInputs> implements IPAMComponentOutputs {
	constructor(entity: ADKEntity, options: IPAMComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::IPAM", options);
	}
	public readonly Arn: string;
	public readonly IpamId: string;
	public readonly PrivateDefaultScopeId: string;
	public readonly PublicDefaultScopeId: string;
	public readonly ScopeCount: number;
}
export interface IPAMComponentOutputs {
	readonly Arn: string;
	readonly IpamId: string;
	readonly PrivateDefaultScopeId: string;
	readonly PublicDefaultScopeId: string;
	readonly ScopeCount: number;
}
export interface IPAMComponentInputs {
	readonly Description?: string | undefined;
	readonly OperatingRegions?: IpamOperatingRegion[] | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class IPAMAllocation extends CfnResource<IPAMAllocationComponentInputs> implements IPAMAllocationComponentOutputs {
	constructor(entity: ADKEntity, options: IPAMAllocationComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::IPAMAllocation", options);
	}
	public readonly IpamPoolAllocationId: string;
}
export interface IPAMAllocationComponentOutputs {
	readonly IpamPoolAllocationId: string;
}
export interface IPAMAllocationComponentInputs {
	readonly IpamPoolId: string;
	readonly Cidr?: string | undefined;
	readonly Description?: string | undefined;
	readonly NetmaskLength?: number | undefined;
	readonly LogicalId: string;
}
export class IPAMPool extends CfnResource<IPAMPoolComponentInputs> implements IPAMPoolComponentOutputs {
	constructor(entity: ADKEntity, options: IPAMPoolComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::IPAMPool", options);
	}
	public readonly Arn: string;
	public readonly IpamArn: string;
	public readonly IpamPoolId: string;
	public readonly IpamScopeArn: string;
	public readonly IpamScopeType: string;
	public readonly PoolDepth: number;
	public readonly State: string;
	public readonly StateMessage: string;
}
export interface IPAMPoolComponentOutputs {
	readonly Arn: string;
	readonly IpamArn: string;
	readonly IpamPoolId: string;
	readonly IpamScopeArn: string;
	readonly IpamScopeType: string;
	readonly PoolDepth: number;
	readonly State: string;
	readonly StateMessage: string;
}
export interface IPAMPoolComponentInputs {
	readonly AddressFamily: string;
	readonly IpamScopeId: string;
	readonly AllocationDefaultNetmaskLength?: number | undefined;
	readonly AllocationMaxNetmaskLength?: number | undefined;
	readonly AllocationMinNetmaskLength?: number | undefined;
	readonly AllocationResourceTags?: { key: string; value: string }[] | undefined;
	readonly AutoImport?: boolean | undefined;
	readonly AwsService?: string | undefined;
	readonly Description?: string | undefined;
	readonly Locale?: string | undefined;
	readonly ProvisionedCidrs?: ProvisionedCidr[] | undefined;
	readonly PubliclyAdvertisable?: boolean | undefined;
	readonly SourceIpamPoolId?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class IPAMScope extends CfnResource<IPAMScopeComponentInputs> implements IPAMScopeComponentOutputs {
	constructor(entity: ADKEntity, options: IPAMScopeComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::IPAMScope", options);
	}
	public readonly Arn: string;
	public readonly IpamArn: string;
	public readonly IpamScopeId: string;
	public readonly IpamScopeType: string;
	public readonly IsDefault: boolean;
	public readonly PoolCount: number;
}
export interface IPAMScopeComponentOutputs {
	readonly Arn: string;
	readonly IpamArn: string;
	readonly IpamScopeId: string;
	readonly IpamScopeType: string;
	readonly IsDefault: boolean;
	readonly PoolCount: number;
}
export interface IPAMScopeComponentInputs {
	readonly IpamId: string;
	readonly Description?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class Instance extends CfnResource<InstanceComponentInputs> implements InstanceComponentOutputs {
	constructor(entity: ADKEntity, options: InstanceComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::Instance", options);
	}
	public readonly PrivateDnsName: string;
	public readonly PrivateIp: string;
	public readonly PublicDnsName: string;
	public readonly PublicIp: string;
}
export interface InstanceComponentOutputs {
	readonly PrivateDnsName: string;
	readonly PrivateIp: string;
	readonly PublicDnsName: string;
	readonly PublicIp: string;
}
export interface InstanceComponentInputs {
	readonly AdditionalInfo?: string | undefined;
	readonly Affinity?: string | undefined;
	readonly AvailabilityZone?: string;
	readonly BlockDeviceMappings?: BlockDeviceMapping[] | undefined;
	readonly CpuOptions?: CpuOptions | undefined;
	readonly CreditSpecification?: CreditSpecification | undefined;
	readonly DisableApiTermination?: boolean | undefined;
	readonly EbsOptimized?: boolean | undefined;
	readonly ElasticGpuSpecifications?: ElasticGpuSpecification[] | undefined;
	readonly ElasticInferenceAccelerators?: ElasticInferenceAccelerator[] | undefined;
	readonly EnclaveOptions?: EnclaveOptions | undefined;
	readonly HibernationOptions?: HibernationOptions | undefined;
	readonly HostId?: string | undefined;
	readonly HostResourceGroupArn?: string | undefined;
	readonly IamInstanceProfile?: string | undefined;
	readonly ImageId?: string | undefined;
	readonly InstanceInitiatedShutdownBehavior?: string | undefined;
	readonly InstanceType?: string | undefined;
	readonly Ipv6AddressCount?: number | undefined;
	readonly Ipv6Addresses?: InstanceIpv6Address[] | undefined;
	readonly KernelId?: string | undefined;
	readonly KeyName?: string | undefined;
	readonly LaunchTemplate?: LaunchTemplateSpecification | undefined;
	readonly LicenseSpecifications?: LicenseSpecification[] | undefined;
	readonly Monitoring?: boolean | undefined;
	readonly NetworkInterfaces?: NetworkInterface[] | undefined;
	readonly PlacementGroupName?: string | undefined;
	readonly PrivateDnsNameOptions?: PrivateDnsNameOptions | undefined;
	readonly PrivateIpAddress?: string | undefined;
	readonly PropagateTagsToVolumeOnCreation?: boolean | undefined;
	readonly RamdiskId?: string | undefined;
	readonly SecurityGroupIds?: string[] | undefined;
	readonly SecurityGroups?: string[] | undefined;
	readonly SourceDestCheck?: boolean | undefined;
	readonly SsmAssociations?: SsmAssociation[] | undefined;
	readonly SubnetId?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly Tenancy?: string | undefined;
	readonly UserData?: string | undefined;
	readonly Volumes?: Volume[] | undefined;
	readonly LogicalId: string;
}
export class InternetGateway
	extends CfnResource<InternetGatewayComponentInputs>
	implements InternetGatewayComponentOutputs
{
	constructor(entity: ADKEntity, options: InternetGatewayComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::InternetGateway", options);
	}
	public readonly InternetGatewayId: string;
}
export interface InternetGatewayComponentOutputs {
	readonly InternetGatewayId: string;
}
export interface InternetGatewayComponentInputs {
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class KeyPair extends CfnResource<KeyPairComponentInputs> implements KeyPairComponentOutputs {
	constructor(entity: ADKEntity, options: KeyPairComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::KeyPair", options);
	}
	public readonly KeyFingerprint: string;
	public readonly KeyPairId: string;
}
export interface KeyPairComponentOutputs {
	readonly KeyFingerprint: string;
	readonly KeyPairId: string;
}
export interface KeyPairComponentInputs {
	readonly KeyName: string;
	readonly KeyType?: string | undefined;
	readonly PublicKeyMaterial?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class LaunchTemplate extends CfnResource<LaunchTemplateComponentInputs> implements LaunchTemplateComponentOutputs {
	constructor(entity: ADKEntity, options: LaunchTemplateComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::LaunchTemplate", options);
	}
	public readonly DefaultVersionNumber: string;
	public readonly LatestVersionNumber: string;
}
export interface LaunchTemplateComponentOutputs {
	readonly DefaultVersionNumber: string;
	readonly LatestVersionNumber: string;
}
export interface LaunchTemplateComponentInputs {
	readonly LaunchTemplateData: LaunchTemplateData;
	readonly LaunchTemplateName?: string | undefined;
	readonly TagSpecifications?: LaunchTemplateTagSpecification[] | undefined;
	readonly VersionDescription?: string | undefined;
	readonly LogicalId: string;
}
export class LocalGatewayRoute
	extends CfnResource<LocalGatewayRouteComponentInputs>
	implements LocalGatewayRouteComponentOutputs
{
	constructor(entity: ADKEntity, options: LocalGatewayRouteComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::LocalGatewayRoute", options);
	}
	public readonly State: string;
	public readonly Type: string;
}
export interface LocalGatewayRouteComponentOutputs {
	readonly State: string;
	readonly Type: string;
}
export interface LocalGatewayRouteComponentInputs {
	readonly DestinationCidrBlock: string;
	readonly LocalGatewayRouteTableId: string;
	readonly LocalGatewayVirtualInterfaceGroupId?: string | undefined;
	readonly NetworkInterfaceId?: string | undefined;
	readonly LogicalId: string;
}
export class LocalGatewayRouteTableVPCAssociation
	extends CfnResource<LocalGatewayRouteTableVPCAssociationComponentInputs>
	implements LocalGatewayRouteTableVPCAssociationComponentOutputs
{
	constructor(entity: ADKEntity, options: LocalGatewayRouteTableVPCAssociationComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::LocalGatewayRouteTableVPCAssociation", options);
	}
	public readonly LocalGatewayId: string;
	public readonly LocalGatewayRouteTableVpcAssociationId: string;
	public readonly State: string;
}
export interface LocalGatewayRouteTableVPCAssociationComponentOutputs {
	readonly LocalGatewayId: string;
	readonly LocalGatewayRouteTableVpcAssociationId: string;
	readonly State: string;
}
export interface LocalGatewayRouteTableVPCAssociationComponentInputs {
	readonly LocalGatewayRouteTableId: string;
	readonly VpcId: string;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class NatGateway extends CfnResource<NatGatewayComponentInputs> implements NatGatewayComponentOutputs {
	constructor(entity: ADKEntity, options: NatGatewayComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::NatGateway", options);
	}
	public readonly NatGatewayId: string;
}
export interface NatGatewayComponentOutputs {
	readonly NatGatewayId: string;
}
export interface NatGatewayComponentInputs {
	readonly SubnetId: string;
	readonly AllocationId?: string | undefined;
	readonly ConnectivityType?: string | undefined;
	readonly PrivateIpAddress?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class NetworkAcl extends CfnResource<NetworkAclComponentInputs> implements NetworkAclComponentOutputs {
	constructor(entity: ADKEntity, options: NetworkAclComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::NetworkAcl", options);
	}
	public readonly Id: string;
}
export interface NetworkAclComponentOutputs {
	readonly Id: string;
}
export interface NetworkAclComponentInputs {
	readonly VpcId: string;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class NetworkAclEntry
	extends CfnResource<NetworkAclEntryComponentInputs>
	implements NetworkAclEntryComponentOutputs
{
	constructor(entity: ADKEntity, options: NetworkAclEntryComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::NetworkAclEntry", options);
	}
	public readonly Id: string;
}
export interface NetworkAclEntryComponentOutputs {
	readonly Id: string;
}
export interface NetworkAclEntryComponentInputs {
	readonly NetworkAclId: string;
	readonly Protocol: number;
	readonly RuleAction: string;
	readonly RuleNumber: number;
	readonly CidrBlock?: string | undefined;
	readonly Egress?: boolean | undefined;
	readonly Icmp?: Icmp | undefined;
	readonly Ipv6CidrBlock?: string | undefined;
	readonly PortRange?: PortRange | undefined;
	readonly LogicalId: string;
}
export class NetworkInsightsAccessScope
	extends CfnResource<NetworkInsightsAccessScopeComponentInputs>
	implements NetworkInsightsAccessScopeComponentOutputs
{
	constructor(entity: ADKEntity, options: NetworkInsightsAccessScopeComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::NetworkInsightsAccessScope", options);
	}
	public readonly CreatedDate: string;
	public readonly NetworkInsightsAccessScopeArn: string;
	public readonly NetworkInsightsAccessScopeId: string;
	public readonly UpdatedDate: string;
}
export interface NetworkInsightsAccessScopeComponentOutputs {
	readonly CreatedDate: string;
	readonly NetworkInsightsAccessScopeArn: string;
	readonly NetworkInsightsAccessScopeId: string;
	readonly UpdatedDate: string;
}
export interface NetworkInsightsAccessScopeComponentInputs {
	readonly ExcludePaths?: AccessScopePathRequest[] | undefined;
	readonly MatchPaths?: AccessScopePathRequest[] | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class NetworkInsightsAccessScopeAnalysis
	extends CfnResource<NetworkInsightsAccessScopeAnalysisComponentInputs>
	implements NetworkInsightsAccessScopeAnalysisComponentOutputs
{
	constructor(entity: ADKEntity, options: NetworkInsightsAccessScopeAnalysisComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::NetworkInsightsAccessScopeAnalysis", options);
	}
	public readonly AnalyzedEniCount: number;
	public readonly EndDate: string;
	public readonly FindingsFound: string;
	public readonly NetworkInsightsAccessScopeAnalysisArn: string;
	public readonly NetworkInsightsAccessScopeAnalysisId: string;
	public readonly StartDate: string;
	public readonly Status: string;
	public readonly StatusMessage: string;
}
export interface NetworkInsightsAccessScopeAnalysisComponentOutputs {
	readonly AnalyzedEniCount: number;
	readonly EndDate: string;
	readonly FindingsFound: string;
	readonly NetworkInsightsAccessScopeAnalysisArn: string;
	readonly NetworkInsightsAccessScopeAnalysisId: string;
	readonly StartDate: string;
	readonly Status: string;
	readonly StatusMessage: string;
}
export interface NetworkInsightsAccessScopeAnalysisComponentInputs {
	readonly NetworkInsightsAccessScopeId: string;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class NetworkInsightsAnalysis
	extends CfnResource<NetworkInsightsAnalysisComponentInputs>
	implements NetworkInsightsAnalysisComponentOutputs
{
	constructor(entity: ADKEntity, options: NetworkInsightsAnalysisComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::NetworkInsightsAnalysis", options);
	}
	public readonly AlternatePathHints: Map<string, AlternatePathHint>;
	public readonly Explanations: Map<string, Explanation>;
	public readonly ForwardPathComponents: Map<string, PathComponent>;
	public readonly NetworkInsightsAnalysisArn: string;
	public readonly NetworkInsightsAnalysisId: string;
	public readonly NetworkPathFound: boolean;
	public readonly ReturnPathComponents: Map<string, PathComponent>;
	public readonly StartDate: string;
	public readonly Status: string;
	public readonly StatusMessage: string;
	public readonly SuggestedAccounts: string[];
}
export interface NetworkInsightsAnalysisComponentOutputs {
	readonly AlternatePathHints: Map<string, AlternatePathHint>;
	readonly Explanations: Map<string, Explanation>;
	readonly ForwardPathComponents: Map<string, PathComponent>;
	readonly NetworkInsightsAnalysisArn: string;
	readonly NetworkInsightsAnalysisId: string;
	readonly NetworkPathFound: boolean;
	readonly ReturnPathComponents: Map<string, PathComponent>;
	readonly StartDate: string;
	readonly Status: string;
	readonly StatusMessage: string;
	readonly SuggestedAccounts: string[];
}
export interface NetworkInsightsAnalysisComponentInputs {
	readonly NetworkInsightsPathId: string;
	readonly AdditionalAccounts?: string[] | undefined;
	readonly FilterInArns?: string[] | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class NetworkInsightsPath
	extends CfnResource<NetworkInsightsPathComponentInputs>
	implements NetworkInsightsPathComponentOutputs
{
	constructor(entity: ADKEntity, options: NetworkInsightsPathComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::NetworkInsightsPath", options);
	}
	public readonly CreatedDate: string;
	public readonly DestinationArn: string;
	public readonly NetworkInsightsPathArn: string;
	public readonly NetworkInsightsPathId: string;
	public readonly SourceArn: string;
}
export interface NetworkInsightsPathComponentOutputs {
	readonly CreatedDate: string;
	readonly DestinationArn: string;
	readonly NetworkInsightsPathArn: string;
	readonly NetworkInsightsPathId: string;
	readonly SourceArn: string;
}
export interface NetworkInsightsPathComponentInputs {
	readonly Destination: string;
	readonly Protocol: string;
	readonly Source: string;
	readonly DestinationIp?: string | undefined;
	readonly DestinationPort?: number | undefined;
	readonly SourceIp?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class NetworkInterface
	extends CfnResource<NetworkInterfaceComponentInputs>
	implements NetworkInterfaceComponentOutputs
{
	constructor(entity: ADKEntity, options: NetworkInterfaceComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::NetworkInterface", options);
	}
	public readonly Id: string;
	public readonly PrimaryPrivateIpAddress: string;
	public readonly SecondaryPrivateIpAddresses: string[];
}
export interface NetworkInterfaceComponentOutputs {
	readonly Id: string;
	readonly PrimaryPrivateIpAddress: string;
	readonly SecondaryPrivateIpAddresses: string[];
}
export interface NetworkInterfaceComponentInputs {
	readonly SubnetId: string;
	readonly Description?: string | undefined;
	readonly GroupSet?: string[] | undefined;
	readonly InterfaceType?: string | undefined;
	readonly Ipv6AddressCount?: number | undefined;
	readonly Ipv6Addresses?: InstanceIpv6Address[] | undefined;
	readonly PrivateIpAddress?: string | undefined;
	readonly PrivateIpAddresses?: PrivateIpAddressSpecification[] | undefined;
	readonly SecondaryPrivateIpAddressCount?: number | undefined;
	readonly SourceDestCheck?: boolean | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class NetworkInterfaceAttachment
	extends CfnResource<NetworkInterfaceAttachmentComponentInputs>
	implements NetworkInterfaceAttachmentComponentOutputs
{
	constructor(entity: ADKEntity, options: NetworkInterfaceAttachmentComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::NetworkInterfaceAttachment", options);
	}
}
export interface NetworkInterfaceAttachmentComponentOutputs {}
export interface NetworkInterfaceAttachmentComponentInputs {
	readonly DeviceIndex: string;
	readonly InstanceId: string;
	readonly NetworkInterfaceId: string;
	readonly DeleteOnTermination?: boolean | undefined;
	readonly LogicalId: string;
}
export class NetworkInterfacePermission
	extends CfnResource<NetworkInterfacePermissionComponentInputs>
	implements NetworkInterfacePermissionComponentOutputs
{
	constructor(entity: ADKEntity, options: NetworkInterfacePermissionComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::NetworkInterfacePermission", options);
	}
}
export interface NetworkInterfacePermissionComponentOutputs {}
export interface NetworkInterfacePermissionComponentInputs {
	readonly AwsAccountId: string;
	readonly NetworkInterfaceId: string;
	readonly Permission: string;
	readonly LogicalId: string;
}
export class NetworkPerformanceMetricSubscription
	extends CfnResource<NetworkPerformanceMetricSubscriptionComponentInputs>
	implements NetworkPerformanceMetricSubscriptionComponentOutputs
{
	constructor(entity: ADKEntity, options: NetworkPerformanceMetricSubscriptionComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::NetworkPerformanceMetricSubscription", options);
	}
}
export interface NetworkPerformanceMetricSubscriptionComponentOutputs {}
export interface NetworkPerformanceMetricSubscriptionComponentInputs {
	readonly Destination: string;
	readonly Metric: string;
	readonly Source: string;
	readonly Statistic: string;
	readonly LogicalId: string;
}
export class PlacementGroup extends CfnResource<PlacementGroupComponentInputs> implements PlacementGroupComponentOutputs {
	constructor(entity: ADKEntity, options: PlacementGroupComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::PlacementGroup", options);
	}
	public readonly GroupName: string;
}
export interface PlacementGroupComponentOutputs {
	readonly GroupName: string;
}
export interface PlacementGroupComponentInputs {
	readonly SpreadLevel?: string | undefined;
	readonly Strategy?: string | undefined;
	readonly LogicalId: string;
}
export class PrefixList extends CfnResource<PrefixListComponentInputs> implements PrefixListComponentOutputs {
	constructor(entity: ADKEntity, options: PrefixListComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::PrefixList", options);
	}
	public readonly Arn: string;
	public readonly OwnerId: string;
	public readonly PrefixListId: string;
	public readonly Version: number;
}
export interface PrefixListComponentOutputs {
	readonly Arn: string;
	readonly OwnerId: string;
	readonly PrefixListId: string;
	readonly Version: number;
}
export interface PrefixListComponentInputs {
	readonly AddressFamily: string;
	readonly MaxEntries: number;
	readonly PrefixListName: string;
	readonly Entries?: Entry[] | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class Route extends CfnResource<RouteComponentInputs> implements RouteComponentOutputs {
	constructor(entity: ADKEntity, options: RouteComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::Route", options);
	}
}
export interface RouteComponentOutputs {}
export interface RouteComponentInputs {
	readonly RouteTableId: string;
	readonly CarrierGatewayId?: string | undefined;
	readonly DestinationCidrBlock?: string | undefined;
	readonly DestinationIpv6CidrBlock?: string | undefined;
	readonly EgressOnlyInternetGatewayId?: string | undefined;
	readonly GatewayId?: string | undefined;
	readonly InstanceId?: string | undefined;
	readonly LocalGatewayId?: string | undefined;
	readonly NatGatewayId?: string | undefined;
	readonly NetworkInterfaceId?: string | undefined;
	readonly TransitGatewayId?: string | undefined;
	readonly VpcEndpointId?: string | undefined;
	readonly VpcPeeringConnectionId?: string | undefined;
	readonly LogicalId: string;
}
export class RouteTable extends CfnResource<RouteTableComponentInputs> implements RouteTableComponentOutputs {
	constructor(entity: ADKEntity, options: RouteTableComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::RouteTable", options);
	}
	public readonly RouteTableId: string;
}
export interface RouteTableComponentOutputs {
	readonly RouteTableId: string;
}
export interface RouteTableComponentInputs {
	readonly VpcId: string;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class SecurityGroup extends CfnResource<SecurityGroupComponentInputs> implements SecurityGroupComponentOutputs {
	constructor(entity: ADKEntity, options: SecurityGroupComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::SecurityGroup", options);
	}
	public readonly GroupId: string;
}
export interface SecurityGroupComponentOutputs {
	readonly GroupId: string;
}
export interface SecurityGroupComponentInputs {
	readonly GroupDescription: string;
	readonly GroupName?: string | undefined;
	readonly SecurityGroupEgress?: Egress[] | undefined;
	readonly SecurityGroupIngress?: Ingress[] | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly VpcId?: string;
	readonly LogicalId: string;
}
export class SecurityGroupEgress
	extends CfnResource<SecurityGroupEgressComponentInputs>
	implements SecurityGroupEgressComponentOutputs
{
	constructor(entity: ADKEntity, options: SecurityGroupEgressComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::SecurityGroupEgress", options);
	}
}
export interface SecurityGroupEgressComponentOutputs {}
export interface SecurityGroupEgressComponentInputs {
	readonly GroupId: string;
	readonly IpProtocol: string;
	readonly CidrIp?: string | undefined;
	readonly CidrIpv6?: string | undefined;
	readonly Description?: string | undefined;
	readonly DestinationPrefixListId?: string | undefined;
	readonly DestinationSecurityGroupId?: string | undefined;
	readonly FromPort?: number | undefined;
	readonly ToPort?: number | undefined;
	readonly LogicalId: string;
}
export class SecurityGroupIngress
	extends CfnResource<SecurityGroupIngressComponentInputs>
	implements SecurityGroupIngressComponentOutputs
{
	constructor(entity: ADKEntity, options: SecurityGroupIngressComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::SecurityGroupIngress", options);
	}
}
export interface SecurityGroupIngressComponentOutputs {}
export interface SecurityGroupIngressComponentInputs {
	readonly IpProtocol: string;
	readonly CidrIp?: string | undefined;
	readonly CidrIpv6?: string | undefined;
	readonly Description?: string | undefined;
	readonly FromPort?: number | undefined;
	readonly GroupId?: string | undefined;
	readonly GroupName?: string | undefined;
	readonly SourcePrefixListId?: string | undefined;
	readonly SourceSecurityGroupId?: string | undefined;
	readonly SourceSecurityGroupName?: string | undefined;
	readonly SourceSecurityGroupOwnerId?: string | undefined;
	readonly ToPort?: number | undefined;
	readonly LogicalId: string;
}
export class SpotFleet extends CfnResource<SpotFleetComponentInputs> implements SpotFleetComponentOutputs {
	constructor(entity: ADKEntity, options: SpotFleetComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::SpotFleet", options);
	}
	public readonly Id: string;
}
export interface SpotFleetComponentOutputs {
	readonly Id: string;
}
export interface SpotFleetComponentInputs {
	readonly SpotFleetRequestConfigData: SpotFleetRequestConfigData;
	readonly LogicalId: string;
}
export class Subnet extends CfnResource<SubnetComponentInputs> implements SubnetComponentOutputs {
	constructor(entity: ADKEntity, options: SubnetComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::Subnet", options);
	}
	public readonly Ipv6CidrBlocks: string[];
	public readonly NetworkAclAssociationId: string;
	public readonly SubnetId: string;
	public readonly VpcId: string;
}
export interface SubnetComponentOutputs {
	readonly Ipv6CidrBlocks: string[];
	readonly NetworkAclAssociationId: string;
	readonly SubnetId: string;
	readonly VpcId: string;
}
export interface SubnetComponentInputs {
	readonly VpcId: string;
	readonly AssignIpv6AddressOnCreation?: boolean | undefined;
	readonly AvailabilityZone?: string;
	readonly AvailabilityZoneId?: string | undefined;
	readonly CidrBlock?: string | undefined;
	readonly EnableDns64?: boolean | undefined;
	readonly Ipv6CidrBlock?: string | undefined;
	readonly Ipv6Native?: boolean | undefined;
	readonly MapPublicIpOnLaunch?: boolean | undefined;
	readonly OutpostArn?: string;
	readonly PrivateDnsNameOptionsOnLaunch?: PrivateDnsNameOptionsOnLaunch | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class SubnetCidrBlock
	extends CfnResource<SubnetCidrBlockComponentInputs>
	implements SubnetCidrBlockComponentOutputs
{
	constructor(entity: ADKEntity, options: SubnetCidrBlockComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::SubnetCidrBlock", options);
	}
}
export interface SubnetCidrBlockComponentOutputs {}
export interface SubnetCidrBlockComponentInputs {
	readonly Ipv6CidrBlock: string;
	readonly SubnetId: string;
	readonly LogicalId: string;
}
export class SubnetNetworkAclAssociation
	extends CfnResource<SubnetNetworkAclAssociationComponentInputs>
	implements SubnetNetworkAclAssociationComponentOutputs
{
	constructor(entity: ADKEntity, options: SubnetNetworkAclAssociationComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::SubnetNetworkAclAssociation", options);
	}
	public readonly AssociationId: string;
}
export interface SubnetNetworkAclAssociationComponentOutputs {
	readonly AssociationId: string;
}
export interface SubnetNetworkAclAssociationComponentInputs {
	readonly NetworkAclId: string;
	readonly SubnetId: string;
	readonly LogicalId: string;
}
export class SubnetRouteTableAssociation
	extends CfnResource<SubnetRouteTableAssociationComponentInputs>
	implements SubnetRouteTableAssociationComponentOutputs
{
	constructor(entity: ADKEntity, options: SubnetRouteTableAssociationComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::SubnetRouteTableAssociation", options);
	}
	public readonly Id: string;
}
export interface SubnetRouteTableAssociationComponentOutputs {
	readonly Id: string;
}
export interface SubnetRouteTableAssociationComponentInputs {
	readonly RouteTableId: string;
	readonly SubnetId: string;
	readonly LogicalId: string;
}
export class TrafficMirrorFilter
	extends CfnResource<TrafficMirrorFilterComponentInputs>
	implements TrafficMirrorFilterComponentOutputs
{
	constructor(entity: ADKEntity, options: TrafficMirrorFilterComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::TrafficMirrorFilter", options);
	}
}
export interface TrafficMirrorFilterComponentOutputs {}
export interface TrafficMirrorFilterComponentInputs {
	readonly Description?: string | undefined;
	readonly NetworkServices?: string[] | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class TrafficMirrorFilterRule
	extends CfnResource<TrafficMirrorFilterRuleComponentInputs>
	implements TrafficMirrorFilterRuleComponentOutputs
{
	constructor(entity: ADKEntity, options: TrafficMirrorFilterRuleComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::TrafficMirrorFilterRule", options);
	}
}
export interface TrafficMirrorFilterRuleComponentOutputs {}
export interface TrafficMirrorFilterRuleComponentInputs {
	readonly DestinationCidrBlock: string;
	readonly RuleAction: string;
	readonly RuleNumber: number;
	readonly SourceCidrBlock: string;
	readonly TrafficDirection: string;
	readonly TrafficMirrorFilterId: string;
	readonly Description?: string | undefined;
	readonly DestinationPortRange?: TrafficMirrorPortRange | undefined;
	readonly Protocol?: number | undefined;
	readonly SourcePortRange?: TrafficMirrorPortRange | undefined;
	readonly LogicalId: string;
}
export class TrafficMirrorSession
	extends CfnResource<TrafficMirrorSessionComponentInputs>
	implements TrafficMirrorSessionComponentOutputs
{
	constructor(entity: ADKEntity, options: TrafficMirrorSessionComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::TrafficMirrorSession", options);
	}
}
export interface TrafficMirrorSessionComponentOutputs {}
export interface TrafficMirrorSessionComponentInputs {
	readonly NetworkInterfaceId: string;
	readonly SessionNumber: number;
	readonly TrafficMirrorFilterId: string;
	readonly TrafficMirrorTargetId: string;
	readonly Description?: string | undefined;
	readonly PacketLength?: number | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly VirtualNetworkId?: number | undefined;
	readonly LogicalId: string;
}
export class TrafficMirrorTarget
	extends CfnResource<TrafficMirrorTargetComponentInputs>
	implements TrafficMirrorTargetComponentOutputs
{
	constructor(entity: ADKEntity, options: TrafficMirrorTargetComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::TrafficMirrorTarget", options);
	}
}
export interface TrafficMirrorTargetComponentOutputs {}
export interface TrafficMirrorTargetComponentInputs {
	readonly Description?: string | undefined;
	readonly GatewayLoadBalancerEndpointId?: string | undefined;
	readonly NetworkInterfaceId?: string | undefined;
	readonly NetworkLoadBalancerArn?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class TransitGateway extends CfnResource<TransitGatewayComponentInputs> implements TransitGatewayComponentOutputs {
	constructor(entity: ADKEntity, options: TransitGatewayComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::TransitGateway", options);
	}
	public readonly Id: string;
}
export interface TransitGatewayComponentOutputs {
	readonly Id: string;
}
export interface TransitGatewayComponentInputs {
	readonly AmazonSideAsn?: number | undefined;
	readonly AssociationDefaultRouteTableId?: string | undefined;
	readonly AutoAcceptSharedAttachments?: string | undefined;
	readonly DefaultRouteTableAssociation?: string | undefined;
	readonly DefaultRouteTablePropagation?: string | undefined;
	readonly Description?: string | undefined;
	readonly DnsSupport?: string | undefined;
	readonly MulticastSupport?: string | undefined;
	readonly PropagationDefaultRouteTableId?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly TransitGatewayCidrBlocks?: string[] | undefined;
	readonly VpnEcmpSupport?: string | undefined;
	readonly LogicalId: string;
}
export class TransitGatewayAttachment
	extends CfnResource<TransitGatewayAttachmentComponentInputs>
	implements TransitGatewayAttachmentComponentOutputs
{
	constructor(entity: ADKEntity, options: TransitGatewayAttachmentComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::TransitGatewayAttachment", options);
	}
	public readonly Id: string;
}
export interface TransitGatewayAttachmentComponentOutputs {
	readonly Id: string;
}
export interface TransitGatewayAttachmentComponentInputs {
	readonly SubnetIds: string[];
	readonly TransitGatewayId: string;
	readonly VpcId: string;
	readonly Options?: Options | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class TransitGatewayConnect
	extends CfnResource<TransitGatewayConnectComponentInputs>
	implements TransitGatewayConnectComponentOutputs
{
	constructor(entity: ADKEntity, options: TransitGatewayConnectComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::TransitGatewayConnect", options);
	}
	public readonly CreationTime: string;
	public readonly State: string;
	public readonly TransitGatewayAttachmentId: string;
	public readonly TransitGatewayId: string;
}
export interface TransitGatewayConnectComponentOutputs {
	readonly CreationTime: string;
	readonly State: string;
	readonly TransitGatewayAttachmentId: string;
	readonly TransitGatewayId: string;
}
export interface TransitGatewayConnectComponentInputs {
	readonly Options: TransitGatewayConnectOptions;
	readonly TransportTransitGatewayAttachmentId: string;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class TransitGatewayMulticastDomain
	extends CfnResource<TransitGatewayMulticastDomainComponentInputs>
	implements TransitGatewayMulticastDomainComponentOutputs
{
	constructor(entity: ADKEntity, options: TransitGatewayMulticastDomainComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::TransitGatewayMulticastDomain", options);
	}
	public readonly CreationTime: string;
	public readonly State: string;
	public readonly TransitGatewayMulticastDomainArn: string;
	public readonly TransitGatewayMulticastDomainId: string;
}
export interface TransitGatewayMulticastDomainComponentOutputs {
	readonly CreationTime: string;
	readonly State: string;
	readonly TransitGatewayMulticastDomainArn: string;
	readonly TransitGatewayMulticastDomainId: string;
}
export interface TransitGatewayMulticastDomainComponentInputs {
	readonly TransitGatewayId: string;
	readonly Options?: Options | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class TransitGatewayMulticastDomainAssociation
	extends CfnResource<TransitGatewayMulticastDomainAssociationComponentInputs>
	implements TransitGatewayMulticastDomainAssociationComponentOutputs
{
	constructor(entity: ADKEntity, options: TransitGatewayMulticastDomainAssociationComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::TransitGatewayMulticastDomainAssociation", options);
	}
	public readonly ResourceId: string;
	public readonly ResourceType: string;
	public readonly State: string;
}
export interface TransitGatewayMulticastDomainAssociationComponentOutputs {
	readonly ResourceId: string;
	readonly ResourceType: string;
	readonly State: string;
}
export interface TransitGatewayMulticastDomainAssociationComponentInputs {
	readonly SubnetId: string;
	readonly TransitGatewayAttachmentId: string;
	readonly TransitGatewayMulticastDomainId: string;
	readonly LogicalId: string;
}
export class TransitGatewayMulticastGroupMember
	extends CfnResource<TransitGatewayMulticastGroupMemberComponentInputs>
	implements TransitGatewayMulticastGroupMemberComponentOutputs
{
	constructor(entity: ADKEntity, options: TransitGatewayMulticastGroupMemberComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::TransitGatewayMulticastGroupMember", options);
	}
	public readonly GroupMember: boolean;
	public readonly GroupSource: boolean;
	public readonly MemberType: string;
	public readonly ResourceId: string;
	public readonly ResourceType: string;
	public readonly SourceType: string;
	public readonly SubnetId: string;
	public readonly TransitGatewayAttachmentId: string;
}
export interface TransitGatewayMulticastGroupMemberComponentOutputs {
	readonly GroupMember: boolean;
	readonly GroupSource: boolean;
	readonly MemberType: string;
	readonly ResourceId: string;
	readonly ResourceType: string;
	readonly SourceType: string;
	readonly SubnetId: string;
	readonly TransitGatewayAttachmentId: string;
}
export interface TransitGatewayMulticastGroupMemberComponentInputs {
	readonly GroupIpAddress: string;
	readonly NetworkInterfaceId: string;
	readonly TransitGatewayMulticastDomainId: string;
	readonly LogicalId: string;
}
export class TransitGatewayMulticastGroupSource
	extends CfnResource<TransitGatewayMulticastGroupSourceComponentInputs>
	implements TransitGatewayMulticastGroupSourceComponentOutputs
{
	constructor(entity: ADKEntity, options: TransitGatewayMulticastGroupSourceComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::TransitGatewayMulticastGroupSource", options);
	}
	public readonly GroupMember: boolean;
	public readonly GroupSource: boolean;
	public readonly MemberType: string;
	public readonly ResourceId: string;
	public readonly ResourceType: string;
	public readonly SourceType: string;
	public readonly SubnetId: string;
	public readonly TransitGatewayAttachmentId: string;
}
export interface TransitGatewayMulticastGroupSourceComponentOutputs {
	readonly GroupMember: boolean;
	readonly GroupSource: boolean;
	readonly MemberType: string;
	readonly ResourceId: string;
	readonly ResourceType: string;
	readonly SourceType: string;
	readonly SubnetId: string;
	readonly TransitGatewayAttachmentId: string;
}
export interface TransitGatewayMulticastGroupSourceComponentInputs {
	readonly GroupIpAddress: string;
	readonly NetworkInterfaceId: string;
	readonly TransitGatewayMulticastDomainId: string;
	readonly LogicalId: string;
}
export class TransitGatewayPeeringAttachment
	extends CfnResource<TransitGatewayPeeringAttachmentComponentInputs>
	implements TransitGatewayPeeringAttachmentComponentOutputs
{
	constructor(entity: ADKEntity, options: TransitGatewayPeeringAttachmentComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::TransitGatewayPeeringAttachment", options);
	}
	public readonly CreationTime: string;
	public readonly State: string;
	public readonly StatusCode: string;
	public readonly StatusMessage: string;
	public readonly TransitGatewayAttachmentId: string;
}
export interface TransitGatewayPeeringAttachmentComponentOutputs {
	readonly CreationTime: string;
	readonly State: string;
	readonly StatusCode: string;
	readonly StatusMessage: string;
	readonly TransitGatewayAttachmentId: string;
}
export interface TransitGatewayPeeringAttachmentComponentInputs {
	readonly PeerAccountId: string;
	readonly PeerRegion: string;
	readonly PeerTransitGatewayId: string;
	readonly TransitGatewayId: string;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class TransitGatewayRoute
	extends CfnResource<TransitGatewayRouteComponentInputs>
	implements TransitGatewayRouteComponentOutputs
{
	constructor(entity: ADKEntity, options: TransitGatewayRouteComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::TransitGatewayRoute", options);
	}
}
export interface TransitGatewayRouteComponentOutputs {}
export interface TransitGatewayRouteComponentInputs {
	readonly TransitGatewayRouteTableId: string;
	readonly Blackhole?: boolean | undefined;
	readonly DestinationCidrBlock?: string | undefined;
	readonly TransitGatewayAttachmentId?: string | undefined;
	readonly LogicalId: string;
}
export class TransitGatewayRouteTable
	extends CfnResource<TransitGatewayRouteTableComponentInputs>
	implements TransitGatewayRouteTableComponentOutputs
{
	constructor(entity: ADKEntity, options: TransitGatewayRouteTableComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::TransitGatewayRouteTable", options);
	}
}
export interface TransitGatewayRouteTableComponentOutputs {}
export interface TransitGatewayRouteTableComponentInputs {
	readonly TransitGatewayId: string;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class TransitGatewayRouteTableAssociation
	extends CfnResource<TransitGatewayRouteTableAssociationComponentInputs>
	implements TransitGatewayRouteTableAssociationComponentOutputs
{
	constructor(entity: ADKEntity, options: TransitGatewayRouteTableAssociationComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::TransitGatewayRouteTableAssociation", options);
	}
}
export interface TransitGatewayRouteTableAssociationComponentOutputs {}
export interface TransitGatewayRouteTableAssociationComponentInputs {
	readonly TransitGatewayAttachmentId: string;
	readonly TransitGatewayRouteTableId: string;
	readonly LogicalId: string;
}
export class TransitGatewayRouteTablePropagation
	extends CfnResource<TransitGatewayRouteTablePropagationComponentInputs>
	implements TransitGatewayRouteTablePropagationComponentOutputs
{
	constructor(entity: ADKEntity, options: TransitGatewayRouteTablePropagationComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::TransitGatewayRouteTablePropagation", options);
	}
}
export interface TransitGatewayRouteTablePropagationComponentOutputs {}
export interface TransitGatewayRouteTablePropagationComponentInputs {
	readonly TransitGatewayAttachmentId: string;
	readonly TransitGatewayRouteTableId: string;
	readonly LogicalId: string;
}
export class TransitGatewayVpcAttachment
	extends CfnResource<TransitGatewayVpcAttachmentComponentInputs>
	implements TransitGatewayVpcAttachmentComponentOutputs
{
	constructor(entity: ADKEntity, options: TransitGatewayVpcAttachmentComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::TransitGatewayVpcAttachment", options);
	}
	public readonly Id: string;
}
export interface TransitGatewayVpcAttachmentComponentOutputs {
	readonly Id: string;
}
export interface TransitGatewayVpcAttachmentComponentInputs {
	readonly SubnetIds: string[];
	readonly TransitGatewayId: string;
	readonly VpcId: string;
	readonly AddSubnetIds?: string[] | undefined;
	readonly Options?: Options | undefined;
	readonly RemoveSubnetIds?: string[] | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class VPC extends CfnResource<VPCComponentInputs> implements VPCComponentOutputs {
	constructor(entity: ADKEntity, options: VPCComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::VPC", options);
	}
	public readonly CidrBlockAssociations: string[];
	public readonly DefaultNetworkAcl: string;
	public readonly DefaultSecurityGroup: string;
	public readonly Ipv6CidrBlocks: string[];
	public readonly VpcId: string;
}
export interface VPCComponentOutputs {
	readonly CidrBlockAssociations: string[];
	readonly DefaultNetworkAcl: string;
	readonly DefaultSecurityGroup: string;
	readonly Ipv6CidrBlocks: string[];
	readonly VpcId: string;
}
export interface VPCComponentInputs {
	readonly CidrBlock?: string;
	readonly EnableDnsHostnames?: boolean | undefined;
	readonly EnableDnsSupport?: boolean | undefined;
	readonly InstanceTenancy?: string | undefined;
	readonly Ipv4IpamPoolId?: string | undefined;
	readonly Ipv4NetmaskLength?: number | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class VPCCidrBlock extends CfnResource<VPCCidrBlockComponentInputs> implements VPCCidrBlockComponentOutputs {
	constructor(entity: ADKEntity, options: VPCCidrBlockComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::VPCCidrBlock", options);
	}
}
export interface VPCCidrBlockComponentOutputs {}
export interface VPCCidrBlockComponentInputs {
	readonly VpcId: string;
	readonly AmazonProvidedIpv6CidrBlock?: boolean | undefined;
	readonly CidrBlock?: string | undefined;
	readonly Ipv4IpamPoolId?: string | undefined;
	readonly Ipv4NetmaskLength?: number | undefined;
	readonly Ipv6CidrBlock?: string | undefined;
	readonly Ipv6IpamPoolId?: string | undefined;
	readonly Ipv6NetmaskLength?: number | undefined;
	readonly Ipv6Pool?: string | undefined;
	readonly LogicalId: string;
}
export class VPCDHCPOptionsAssociation
	extends CfnResource<VPCDHCPOptionsAssociationComponentInputs>
	implements VPCDHCPOptionsAssociationComponentOutputs
{
	constructor(entity: ADKEntity, options: VPCDHCPOptionsAssociationComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::VPCDHCPOptionsAssociation", options);
	}
	public readonly Id: string;
}
export interface VPCDHCPOptionsAssociationComponentOutputs {
	readonly Id: string;
}
export interface VPCDHCPOptionsAssociationComponentInputs {
	readonly DhcpOptionsId: string;
	readonly VpcId: string;
	readonly LogicalId: string;
}
export class VPCEndpoint extends CfnResource<VPCEndpointComponentInputs> implements VPCEndpointComponentOutputs {
	constructor(entity: ADKEntity, options: VPCEndpointComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::VPCEndpoint", options);
	}
	public readonly CreationTimestamp: string;
	public readonly DnsEntries: string[];
	public readonly NetworkInterfaceIds: string[];
}
export interface VPCEndpointComponentOutputs {
	readonly CreationTimestamp: string;
	readonly DnsEntries: string[];
	readonly NetworkInterfaceIds: string[];
}
export interface VPCEndpointComponentInputs {
	readonly ServiceName: string;
	readonly VpcId: string;
	readonly PolicyDocument?: any | undefined;
	readonly PrivateDnsEnabled?: boolean | undefined;
	readonly RouteTableIds?: string[] | undefined;
	readonly SecurityGroupIds?: string[] | undefined;
	readonly SubnetIds?: string[] | undefined;
	readonly VpcEndpointType?: string | undefined;
	readonly LogicalId: string;
}
export class VPCEndpointConnectionNotification
	extends CfnResource<VPCEndpointConnectionNotificationComponentInputs>
	implements VPCEndpointConnectionNotificationComponentOutputs
{
	constructor(entity: ADKEntity, options: VPCEndpointConnectionNotificationComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::VPCEndpointConnectionNotification", options);
	}
}
export interface VPCEndpointConnectionNotificationComponentOutputs {}
export interface VPCEndpointConnectionNotificationComponentInputs {
	readonly ConnectionEvents: string[];
	readonly ConnectionNotificationArn: string;
	readonly ServiceId?: string | undefined;
	readonly VPCEndpointId?: string | undefined;
	readonly LogicalId: string;
}
export class VPCEndpointService
	extends CfnResource<VPCEndpointServiceComponentInputs>
	implements VPCEndpointServiceComponentOutputs
{
	constructor(entity: ADKEntity, options: VPCEndpointServiceComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::VPCEndpointService", options);
	}
}
export interface VPCEndpointServiceComponentOutputs {}
export interface VPCEndpointServiceComponentInputs {
	readonly AcceptanceRequired?: boolean | undefined;
	readonly ContributorInsightsEnabled?: boolean | undefined;
	readonly GatewayLoadBalancerArns?: string[] | undefined;
	readonly NetworkLoadBalancerArns?: string[] | undefined;
	readonly PayerResponsibility?: string | undefined;
	readonly LogicalId: string;
}
export class VPCEndpointServicePermissions
	extends CfnResource<VPCEndpointServicePermissionsComponentInputs>
	implements VPCEndpointServicePermissionsComponentOutputs
{
	constructor(entity: ADKEntity, options: VPCEndpointServicePermissionsComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::VPCEndpointServicePermissions", options);
	}
}
export interface VPCEndpointServicePermissionsComponentOutputs {}
export interface VPCEndpointServicePermissionsComponentInputs {
	readonly ServiceId: string;
	readonly AllowedPrincipals?: string[] | undefined;
	readonly LogicalId: string;
}
export class VPCGatewayAttachment
	extends CfnResource<VPCGatewayAttachmentComponentInputs>
	implements VPCGatewayAttachmentComponentOutputs
{
	constructor(entity: ADKEntity, options: VPCGatewayAttachmentComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::VPCGatewayAttachment", options);
	}
}
export interface VPCGatewayAttachmentComponentOutputs {}
export interface VPCGatewayAttachmentComponentInputs {
	readonly VpcId: string;
	readonly InternetGatewayId?: string | undefined;
	readonly VpnGatewayId?: string | undefined;
	readonly LogicalId: string;
}
export class VPCPeeringConnection
	extends CfnResource<VPCPeeringConnectionComponentInputs>
	implements VPCPeeringConnectionComponentOutputs
{
	constructor(entity: ADKEntity, options: VPCPeeringConnectionComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::VPCPeeringConnection", options);
	}
	public readonly Id: string;
}
export interface VPCPeeringConnectionComponentOutputs {
	readonly Id: string;
}
export interface VPCPeeringConnectionComponentInputs {
	readonly PeerVpcId: string;
	readonly VpcId: string;
	readonly PeerOwnerId?: string | undefined;
	readonly PeerRegion?: string | undefined;
	readonly PeerRoleArn?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class VPNConnection extends CfnResource<VPNConnectionComponentInputs> implements VPNConnectionComponentOutputs {
	constructor(entity: ADKEntity, options: VPNConnectionComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::VPNConnection", options);
	}
	public readonly VpnConnectionId: string;
}
export interface VPNConnectionComponentOutputs {
	readonly VpnConnectionId: string;
}
export interface VPNConnectionComponentInputs {
	readonly CustomerGatewayId: string;
	readonly Type: string;
	readonly StaticRoutesOnly?: boolean | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly TransitGatewayId?: string | undefined;
	readonly VpnGatewayId?: string | undefined;
	readonly VpnTunnelOptionsSpecifications?: VpnTunnelOptionsSpecification[] | undefined;
	readonly LogicalId: string;
}
export class VPNConnectionRoute
	extends CfnResource<VPNConnectionRouteComponentInputs>
	implements VPNConnectionRouteComponentOutputs
{
	constructor(entity: ADKEntity, options: VPNConnectionRouteComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::VPNConnectionRoute", options);
	}
}
export interface VPNConnectionRouteComponentOutputs {}
export interface VPNConnectionRouteComponentInputs {
	readonly DestinationCidrBlock: string;
	readonly VpnConnectionId: string;
	readonly LogicalId: string;
}
export class VPNGateway extends CfnResource<VPNGatewayComponentInputs> implements VPNGatewayComponentOutputs {
	constructor(entity: ADKEntity, options: VPNGatewayComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::VPNGateway", options);
	}
	public readonly VpnGatewayId: string;
}
export interface VPNGatewayComponentOutputs {
	readonly VpnGatewayId: string;
}
export interface VPNGatewayComponentInputs {
	readonly Type: string;
	readonly AmazonSideAsn?: number | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class VPNGatewayRoutePropagation
	extends CfnResource<VPNGatewayRoutePropagationComponentInputs>
	implements VPNGatewayRoutePropagationComponentOutputs
{
	constructor(entity: ADKEntity, options: VPNGatewayRoutePropagationComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::VPNGatewayRoutePropagation", options);
	}
	public readonly Id: string;
}
export interface VPNGatewayRoutePropagationComponentOutputs {
	readonly Id: string;
}
export interface VPNGatewayRoutePropagationComponentInputs {
	readonly RouteTableIds: string[];
	readonly VpnGatewayId: string;
	readonly LogicalId: string;
}
export class Volume extends CfnResource<VolumeComponentInputs> implements VolumeComponentOutputs {
	constructor(entity: ADKEntity, options: VolumeComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::Volume", options);
	}
}
export interface VolumeComponentOutputs {}
export interface VolumeComponentInputs {
	readonly AvailabilityZone: string;
	readonly AutoEnableIO?: boolean | undefined;
	readonly Encrypted?: boolean | undefined;
	readonly Iops?: number | undefined;
	readonly KmsKeyId?: string | undefined;
	readonly MultiAttachEnabled?: boolean | undefined;
	readonly OutpostArn?: string | undefined;
	readonly Size?: number | undefined;
	readonly SnapshotId?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly Throughput?: number | undefined;
	readonly VolumeType?: string | undefined;
	readonly LogicalId: string;
}
export class VolumeAttachment
	extends CfnResource<VolumeAttachmentComponentInputs>
	implements VolumeAttachmentComponentOutputs
{
	constructor(entity: ADKEntity, options: VolumeAttachmentComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::VolumeAttachment", options);
	}
}
export interface VolumeAttachmentComponentOutputs {}
export interface VolumeAttachmentComponentInputs {
	readonly Device: string;
	readonly InstanceId: string;
	readonly VolumeId: string;
	readonly LogicalId: string;
}
export interface TagSpecification {
	readonly ResourceType?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
}
export interface InstanceTypeSpecification {
	readonly AvailabilityZone?: string | undefined;
	readonly AvailabilityZoneId?: string | undefined;
	readonly EbsOptimized?: boolean | undefined;
	readonly InstancePlatform?: string | undefined;
	readonly InstanceType?: string | undefined;
	readonly Priority?: number | undefined;
	readonly Weight?: number | undefined;
}
export interface CertificateAuthenticationRequest {
	readonly ClientRootCertificateChainArn: string;
}
export interface ClientAuthenticationRequest {
	readonly ActiveDirectory?: DirectoryServiceAuthenticationRequest | undefined;
	readonly FederatedAuthentication?: FederatedAuthenticationRequest | undefined;
	readonly MutualAuthentication?: CertificateAuthenticationRequest | undefined;
	readonly Type: string;
}
export interface ClientConnectOptions {
	readonly Enabled: boolean;
	readonly LambdaFunctionArn?: string | undefined;
}
export interface ClientLoginBannerOptions {
	readonly BannerText?: string | undefined;
	readonly Enabled: boolean;
}
export interface ConnectionLogOptions {
	readonly CloudwatchLogGroup?: string | undefined;
	readonly CloudwatchLogStream?: string | undefined;
	readonly Enabled: boolean;
}
export interface DirectoryServiceAuthenticationRequest {
	readonly DirectoryId: string;
}
export interface FederatedAuthenticationRequest {
	readonly SAMLProviderArn: string;
	readonly SelfServiceSAMLProviderArn?: string | undefined;
}
export interface AcceleratorCountRequest {
	readonly Max?: number | undefined;
	readonly Min?: number | undefined;
}
export interface AcceleratorTotalMemoryMiBRequest {
	readonly Max?: number | undefined;
	readonly Min?: number | undefined;
}
export interface BaselineEbsBandwidthMbpsRequest {
	readonly Max?: number | undefined;
	readonly Min?: number | undefined;
}
export interface CapacityRebalance {
	readonly ReplacementStrategy?: string | undefined;
	readonly TerminationDelay?: number | undefined;
}
export interface CapacityReservationOptionsRequest {
	readonly UsageStrategy?: string | undefined;
}
export interface FleetLaunchTemplateConfigRequest {
	readonly LaunchTemplateSpecification?: FleetLaunchTemplateSpecificationRequest | undefined;
	readonly Overrides?: FleetLaunchTemplateOverridesRequest[] | undefined;
}
export interface FleetLaunchTemplateOverridesRequest {
	readonly AvailabilityZone?: string | undefined;
	readonly InstanceRequirements?: InstanceRequirementsRequest | undefined;
	readonly InstanceType?: string | undefined;
	readonly MaxPrice?: string | undefined;
	readonly Placement?: Placement | undefined;
	readonly Priority?: number | undefined;
	readonly SubnetId?: string | undefined;
	readonly WeightedCapacity?: number | undefined;
}
export interface FleetLaunchTemplateSpecificationRequest {
	readonly LaunchTemplateId?: string | undefined;
	readonly LaunchTemplateName?: string | undefined;
	readonly Version: string;
}
export interface InstanceRequirementsRequest {
	readonly AcceleratorCount?: AcceleratorCountRequest | undefined;
	readonly AcceleratorManufacturers?: string[] | undefined;
	readonly AcceleratorNames?: string[] | undefined;
	readonly AcceleratorTotalMemoryMiB?: AcceleratorTotalMemoryMiBRequest | undefined;
	readonly AcceleratorTypes?: string[] | undefined;
	readonly AllowedInstanceTypes?: string[] | undefined;
	readonly BareMetal?: string | undefined;
	readonly BaselineEbsBandwidthMbps?: BaselineEbsBandwidthMbpsRequest | undefined;
	readonly BurstablePerformance?: string | undefined;
	readonly CpuManufacturers?: string[] | undefined;
	readonly ExcludedInstanceTypes?: string[] | undefined;
	readonly InstanceGenerations?: string[] | undefined;
	readonly LocalStorage?: string | undefined;
	readonly LocalStorageTypes?: string[] | undefined;
	readonly MemoryGiBPerVCpu?: MemoryGiBPerVCpuRequest | undefined;
	readonly MemoryMiB?: MemoryMiBRequest | undefined;
	readonly NetworkBandwidthGbps?: NetworkBandwidthGbpsRequest | undefined;
	readonly NetworkInterfaceCount?: NetworkInterfaceCountRequest | undefined;
	readonly OnDemandMaxPricePercentageOverLowestPrice?: number | undefined;
	readonly RequireHibernateSupport?: boolean | undefined;
	readonly SpotMaxPricePercentageOverLowestPrice?: number | undefined;
	readonly TotalLocalStorageGB?: TotalLocalStorageGBRequest | undefined;
	readonly VCpuCount?: VCpuCountRangeRequest | undefined;
}
export interface MaintenanceStrategies {
	readonly CapacityRebalance?: CapacityRebalance | undefined;
}
export interface MemoryGiBPerVCpuRequest {
	readonly Max?: number | undefined;
	readonly Min?: number | undefined;
}
export interface MemoryMiBRequest {
	readonly Max?: number | undefined;
	readonly Min?: number | undefined;
}
export interface NetworkBandwidthGbpsRequest {
	readonly Max?: number | undefined;
	readonly Min?: number | undefined;
}
export interface NetworkInterfaceCountRequest {
	readonly Max?: number | undefined;
	readonly Min?: number | undefined;
}
export interface OnDemandOptionsRequest {
	readonly AllocationStrategy?: string | undefined;
	readonly CapacityReservationOptions?: CapacityReservationOptionsRequest | undefined;
	readonly MaxTotalPrice?: string | undefined;
	readonly MinTargetCapacity?: number | undefined;
	readonly SingleAvailabilityZone?: boolean | undefined;
	readonly SingleInstanceType?: boolean | undefined;
}
export interface Placement {
	readonly Affinity?: string | undefined;
	readonly AvailabilityZone?: string | undefined;
	readonly GroupName?: string | undefined;
	readonly HostId?: string | undefined;
	readonly HostResourceGroupArn?: string | undefined;
	readonly PartitionNumber?: number | undefined;
	readonly SpreadDomain?: string | undefined;
	readonly Tenancy?: string | undefined;
}
export interface SpotOptionsRequest {
	readonly AllocationStrategy?: string | undefined;
	readonly InstanceInterruptionBehavior?: string | undefined;
	readonly InstancePoolsToUseCount?: number | undefined;
	readonly MaintenanceStrategies?: MaintenanceStrategies | undefined;
	readonly MaxTotalPrice?: string | undefined;
	readonly MinTargetCapacity?: number | undefined;
	readonly SingleAvailabilityZone?: boolean | undefined;
	readonly SingleInstanceType?: boolean | undefined;
}
export interface TargetCapacitySpecificationRequest {
	readonly DefaultTargetCapacityType?: string | undefined;
	readonly OnDemandTargetCapacity?: number | undefined;
	readonly SpotTargetCapacity?: number | undefined;
	readonly TargetCapacityUnitType?: string | undefined;
	readonly TotalTargetCapacity: number;
}
export interface TotalLocalStorageGBRequest {
	readonly Max?: number | undefined;
	readonly Min?: number | undefined;
}
export interface VCpuCountRangeRequest {
	readonly Max?: number | undefined;
	readonly Min?: number | undefined;
}
export interface DestinationOptions {
	readonly FileFormat: string;
	readonly HiveCompatiblePartitions: boolean;
	readonly PerHourPartition: boolean;
}
export interface IpamOperatingRegion {
	readonly RegionName: string;
}
export interface ProvisionedCidr {
	readonly Cidr: string;
}
export interface AssociationParameter {
	readonly Key: string;
	readonly Value: string[];
}
export interface BlockDeviceMapping {
	readonly DeviceName: string;
	readonly Ebs?: Ebs | undefined;
	readonly NoDevice?: NoDevice | undefined;
	readonly VirtualName?: string | undefined;
}
export interface CpuOptions {
	readonly CoreCount?: number | undefined;
	readonly ThreadsPerCore?: number | undefined;
}
export interface CreditSpecification {
	readonly CPUCredits?: string | undefined;
}
export interface Ebs {
	readonly DeleteOnTermination?: boolean | undefined;
	readonly Encrypted?: boolean | undefined;
	readonly Iops?: number | undefined;
	readonly KmsKeyId?: string | undefined;
	readonly SnapshotId?: string | undefined;
	readonly VolumeSize?: number | undefined;
	readonly VolumeType?: string | undefined;
}
export interface ElasticGpuSpecification {
	readonly Type: string;
}
export interface ElasticInferenceAccelerator {
	readonly Count?: number | undefined;
	readonly Type: string;
}
export interface EnclaveOptions {
	readonly Enabled?: boolean | undefined;
}
export interface HibernationOptions {
	readonly Configured?: boolean | undefined;
}
export interface InstanceIpv6Address {
	readonly Ipv6Address: string;
}
export interface LaunchTemplateSpecification {
	readonly LaunchTemplateId?: string | undefined;
	readonly LaunchTemplateName?: string | undefined;
	readonly Version: string;
}
export interface LicenseSpecification {
	readonly LicenseConfigurationArn: string;
}
export interface NetworkInterface {
	readonly AssociateCarrierIpAddress?: boolean | undefined;
	readonly AssociatePublicIpAddress?: boolean | undefined;
	readonly DeleteOnTermination?: boolean | undefined;
	readonly Description?: string | undefined;
	readonly DeviceIndex: string;
	readonly GroupSet?: string[] | undefined;
	readonly Ipv6AddressCount?: number | undefined;
	readonly Ipv6Addresses?: InstanceIpv6Address[] | undefined;
	readonly NetworkInterfaceId?: string | undefined;
	readonly PrivateIpAddress?: string | undefined;
	readonly PrivateIpAddresses?: PrivateIpAddressSpecification[] | undefined;
	readonly SecondaryPrivateIpAddressCount?: number | undefined;
	readonly SubnetId?: string | undefined;
}
export interface NoDevice {}
export interface PrivateDnsNameOptions {
	readonly EnableResourceNameDnsAAAARecord?: boolean | undefined;
	readonly EnableResourceNameDnsARecord?: boolean | undefined;
	readonly HostnameType?: string | undefined;
}
export interface PrivateIpAddressSpecification {
	readonly Primary: boolean;
	readonly PrivateIpAddress: string;
}
export interface SsmAssociation {
	readonly AssociationParameters?: AssociationParameter[] | undefined;
	readonly DocumentName: string;
}
export interface Volume {
	readonly Device: string;
	readonly VolumeId: string;
}
export interface AcceleratorCount {
	readonly Max?: number | undefined;
	readonly Min?: number | undefined;
}
export interface AcceleratorTotalMemoryMiB {
	readonly Max?: number | undefined;
	readonly Min?: number | undefined;
}
export interface BaselineEbsBandwidthMbps {
	readonly Max?: number | undefined;
	readonly Min?: number | undefined;
}
export interface CapacityReservationSpecification {
	readonly CapacityReservationPreference?: string | undefined;
	readonly CapacityReservationTarget?: CapacityReservationTarget | undefined;
}
export interface CapacityReservationTarget {
	readonly CapacityReservationId?: string | undefined;
	readonly CapacityReservationResourceGroupArn?: string | undefined;
}
export interface IamInstanceProfile {
	readonly Arn?: string | undefined;
	readonly Name?: string | undefined;
}
export interface InstanceMarketOptions {
	readonly MarketType?: string | undefined;
	readonly SpotOptions?: SpotOptions | undefined;
}
export interface InstanceRequirements {
	readonly AcceleratorCount?: AcceleratorCount | undefined;
	readonly AcceleratorManufacturers?: string[] | undefined;
	readonly AcceleratorNames?: string[] | undefined;
	readonly AcceleratorTotalMemoryMiB?: AcceleratorTotalMemoryMiB | undefined;
	readonly AcceleratorTypes?: string[] | undefined;
	readonly AllowedInstanceTypes?: string[] | undefined;
	readonly BareMetal?: string | undefined;
	readonly BaselineEbsBandwidthMbps?: BaselineEbsBandwidthMbps | undefined;
	readonly BurstablePerformance?: string | undefined;
	readonly CpuManufacturers?: string[] | undefined;
	readonly ExcludedInstanceTypes?: string[] | undefined;
	readonly InstanceGenerations?: string[] | undefined;
	readonly LocalStorage?: string | undefined;
	readonly LocalStorageTypes?: string[] | undefined;
	readonly MemoryGiBPerVCpu?: MemoryGiBPerVCpu | undefined;
	readonly MemoryMiB?: MemoryMiB | undefined;
	readonly NetworkBandwidthGbps?: NetworkBandwidthGbps | undefined;
	readonly NetworkInterfaceCount?: NetworkInterfaceCount | undefined;
	readonly OnDemandMaxPricePercentageOverLowestPrice?: number | undefined;
	readonly RequireHibernateSupport?: boolean | undefined;
	readonly SpotMaxPricePercentageOverLowestPrice?: number | undefined;
	readonly TotalLocalStorageGB?: TotalLocalStorageGB | undefined;
	readonly VCpuCount?: VCpuCount | undefined;
}
export interface Ipv4PrefixSpecification {
	readonly Ipv4Prefix?: string | undefined;
}
export interface Ipv6Add {
	readonly Ipv6Address?: string | undefined;
}
export interface Ipv6PrefixSpecification {
	readonly Ipv6Prefix?: string | undefined;
}
export interface LaunchTemplateData {
	readonly BlockDeviceMappings?: BlockDeviceMapping[] | undefined;
	readonly CapacityReservationSpecification?: CapacityReservationSpecification | undefined;
	readonly CpuOptions?: CpuOptions | undefined;
	readonly CreditSpecification?: CreditSpecification | undefined;
	readonly DisableApiStop?: boolean | undefined;
	readonly DisableApiTermination?: boolean | undefined;
	readonly EbsOptimized?: boolean | undefined;
	readonly ElasticGpuSpecifications?: ElasticGpuSpecification[] | undefined;
	readonly ElasticInferenceAccelerators?: LaunchTemplateElasticInferenceAccelerator[] | undefined;
	readonly EnclaveOptions?: EnclaveOptions | undefined;
	readonly HibernationOptions?: HibernationOptions | undefined;
	readonly IamInstanceProfile?: IamInstanceProfile | undefined;
	readonly ImageId?: string | undefined;
	readonly InstanceInitiatedShutdownBehavior?: string | undefined;
	readonly InstanceMarketOptions?: InstanceMarketOptions | undefined;
	readonly InstanceRequirements?: InstanceRequirements | undefined;
	readonly InstanceType?: string | undefined;
	readonly KernelId?: string | undefined;
	readonly KeyName?: string | undefined;
	readonly LicenseSpecifications?: LicenseSpecification[] | undefined;
	readonly MaintenanceOptions?: MaintenanceOptions | undefined;
	readonly MetadataOptions?: MetadataOptions | undefined;
	readonly Monitoring?: Monitoring | undefined;
	readonly NetworkInterfaces?: NetworkInterface[] | undefined;
	readonly Placement?: Placement | undefined;
	readonly PrivateDnsNameOptions?: PrivateDnsNameOptions | undefined;
	readonly RamDiskId?: string | undefined;
	readonly SecurityGroupIds?: string[] | undefined;
	readonly SecurityGroups?: string[] | undefined;
	readonly TagSpecifications?: TagSpecification[] | undefined;
	readonly UserData?: string | undefined;
}
export interface LaunchTemplateElasticInferenceAccelerator {
	readonly Count?: number | undefined;
	readonly Type?: string | undefined;
}
export interface LaunchTemplateTagSpecification {
	readonly ResourceType?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
}
export interface MaintenanceOptions {
	readonly AutoRecovery?: string | undefined;
}
export interface MemoryGiBPerVCpu {
	readonly Max?: number | undefined;
	readonly Min?: number | undefined;
}
export interface MemoryMiB {
	readonly Max?: number | undefined;
	readonly Min?: number | undefined;
}
export interface MetadataOptions {
	readonly HttpEndpoint?: string | undefined;
	readonly HttpProtocolIpv6?: string | undefined;
	readonly HttpPutResponseHopLimit?: number | undefined;
	readonly HttpTokens?: string | undefined;
	readonly InstanceMetadataTags?: string | undefined;
}
export interface Monitoring {
	readonly Enabled?: boolean | undefined;
}
export interface NetworkBandwidthGbps {
	readonly Max?: number | undefined;
	readonly Min?: number | undefined;
}
export interface NetworkInterfaceCount {
	readonly Max?: number | undefined;
	readonly Min?: number | undefined;
}
export interface PrivateIpAdd {
	readonly Primary?: boolean | undefined;
	readonly PrivateIpAddress?: string | undefined;
}
export interface SpotOptions {
	readonly BlockDurationMinutes?: number | undefined;
	readonly InstanceInterruptionBehavior?: string | undefined;
	readonly MaxPrice?: string | undefined;
	readonly SpotInstanceType?: string | undefined;
	readonly ValidUntil?: string | undefined;
}
export interface TotalLocalStorageGB {
	readonly Max?: number | undefined;
	readonly Min?: number | undefined;
}
export interface VCpuCount {
	readonly Max?: number | undefined;
	readonly Min?: number | undefined;
}
export interface Icmp {
	readonly Code?: number | undefined;
	readonly Type?: number | undefined;
}
export interface PortRange {
	readonly From?: number | undefined;
	readonly To?: number | undefined;
}
export interface AccessScopePathRequest {
	readonly Destination?: PathStatementRequest | undefined;
	readonly Source?: PathStatementRequest | undefined;
	readonly ThroughResources?: ThroughResourcesStatementRequest[] | undefined;
}
export interface PacketHeaderStatementRequest {
	readonly DestinationAddresses?: string[] | undefined;
	readonly DestinationPorts?: string[] | undefined;
	readonly DestinationPrefixLists?: string[] | undefined;
	readonly Protocols?: string[] | undefined;
	readonly SourceAddresses?: string[] | undefined;
	readonly SourcePorts?: string[] | undefined;
	readonly SourcePrefixLists?: string[] | undefined;
}
export interface PathStatementRequest {
	readonly PacketHeaderStatement?: PacketHeaderStatementRequest | undefined;
	readonly ResourceStatement?: ResourceStatementRequest | undefined;
}
export interface ResourceStatementRequest {
	readonly ResourceTypes?: string[] | undefined;
	readonly Resources?: string[] | undefined;
}
export interface ThroughResourcesStatementRequest {
	readonly ResourceStatement?: ResourceStatementRequest | undefined;
}
export interface AdditionalDetail {
	readonly AdditionalDetailType?: string | undefined;
	readonly Component?: AnalysisComponent | undefined;
}
export interface AlternatePathHint {
	readonly ComponentArn?: string | undefined;
	readonly ComponentId?: string | undefined;
}
export interface AnalysisAclRule {
	readonly Cidr?: string | undefined;
	readonly Egress?: boolean | undefined;
	readonly PortRange?: PortRange | undefined;
	readonly Protocol?: string | undefined;
	readonly RuleAction?: string | undefined;
	readonly RuleNumber?: number | undefined;
}
export interface AnalysisComponent {
	readonly Arn?: string | undefined;
	readonly Id?: string | undefined;
}
export interface AnalysisLoadBalancerListener {
	readonly InstancePort?: number | undefined;
	readonly LoadBalancerPort?: number | undefined;
}
export interface AnalysisLoadBalancerTarget {
	readonly Address?: string | undefined;
	readonly AvailabilityZone?: string | undefined;
	readonly Instance?: AnalysisComponent | undefined;
	readonly Port?: number | undefined;
}
export interface AnalysisPacketHeader {
	readonly DestinationAddresses?: string[] | undefined;
	readonly DestinationPortRanges?: PortRange[] | undefined;
	readonly Protocol?: string | undefined;
	readonly SourceAddresses?: string[] | undefined;
	readonly SourcePortRanges?: PortRange[] | undefined;
}
export interface AnalysisRouteTableRoute {
	readonly NatGatewayId?: string | undefined;
	readonly NetworkInterfaceId?: string | undefined;
	readonly Origin?: string | undefined;
	readonly State?: string | undefined;
	readonly TransitGatewayId?: string | undefined;
	readonly VpcPeeringConnectionId?: string | undefined;
	readonly destinationCidr?: string | undefined;
	readonly destinationPrefixListId?: string | undefined;
	readonly egressOnlyInternetGatewayId?: string | undefined;
	readonly gatewayId?: string | undefined;
	readonly instanceId?: string | undefined;
}
export interface AnalysisSecurityGroupRule {
	readonly Cidr?: string | undefined;
	readonly Direction?: string | undefined;
	readonly PortRange?: PortRange | undefined;
	readonly PrefixListId?: string | undefined;
	readonly Protocol?: string | undefined;
	readonly SecurityGroupId?: string | undefined;
}
export interface Explanation {
	readonly Acl?: AnalysisComponent | undefined;
	readonly AclRule?: AnalysisAclRule | undefined;
	readonly Address?: string | undefined;
	readonly Addresses?: string[] | undefined;
	readonly AttachedTo?: AnalysisComponent | undefined;
	readonly AvailabilityZones?: string[] | undefined;
	readonly Cidrs?: string[] | undefined;
	readonly ClassicLoadBalancerListener?: AnalysisLoadBalancerListener | undefined;
	readonly Component?: AnalysisComponent | undefined;
	readonly ComponentAccount?: string | undefined;
	readonly ComponentRegion?: string | undefined;
	readonly CustomerGateway?: AnalysisComponent | undefined;
	readonly Destination?: AnalysisComponent | undefined;
	readonly DestinationVpc?: AnalysisComponent | undefined;
	readonly Direction?: string | undefined;
	readonly ElasticLoadBalancerListener?: AnalysisComponent | undefined;
	readonly ExplanationCode?: string | undefined;
	readonly IngressRouteTable?: AnalysisComponent | undefined;
	readonly InternetGateway?: AnalysisComponent | undefined;
	readonly LoadBalancerArn?: string | undefined;
	readonly LoadBalancerListenerPort?: number | undefined;
	readonly LoadBalancerTarget?: AnalysisLoadBalancerTarget | undefined;
	readonly LoadBalancerTargetGroup?: AnalysisComponent | undefined;
	readonly LoadBalancerTargetGroups?: AnalysisComponent[] | undefined;
	readonly LoadBalancerTargetPort?: number | undefined;
	readonly MissingComponent?: string | undefined;
	readonly NatGateway?: AnalysisComponent | undefined;
	readonly NetworkInterface?: AnalysisComponent | undefined;
	readonly PacketField?: string | undefined;
	readonly Port?: number | undefined;
	readonly PortRanges?: PortRange[] | undefined;
	readonly PrefixList?: AnalysisComponent | undefined;
	readonly Protocols?: string[] | undefined;
	readonly RouteTable?: AnalysisComponent | undefined;
	readonly RouteTableRoute?: AnalysisRouteTableRoute | undefined;
	readonly SecurityGroup?: AnalysisComponent | undefined;
	readonly SecurityGroupRule?: AnalysisSecurityGroupRule | undefined;
	readonly SecurityGroups?: AnalysisComponent[] | undefined;
	readonly SourceVpc?: AnalysisComponent | undefined;
	readonly State?: string | undefined;
	readonly Subnet?: AnalysisComponent | undefined;
	readonly SubnetRouteTable?: AnalysisComponent | undefined;
	readonly TransitGateway?: AnalysisComponent | undefined;
	readonly TransitGatewayAttachment?: AnalysisComponent | undefined;
	readonly TransitGatewayRouteTable?: AnalysisComponent | undefined;
	readonly TransitGatewayRouteTableRoute?: TransitGatewayRouteTableRoute | undefined;
	readonly Vpc?: AnalysisComponent | undefined;
	readonly VpcPeeringConnection?: AnalysisComponent | undefined;
	readonly VpnConnection?: AnalysisComponent | undefined;
	readonly VpnGateway?: AnalysisComponent | undefined;
	readonly vpcEndpoint?: AnalysisComponent | undefined;
}
export interface PathComponent {
	readonly AclRule?: AnalysisAclRule | undefined;
	readonly AdditionalDetails?: AdditionalDetail[] | undefined;
	readonly Component?: AnalysisComponent | undefined;
	readonly DestinationVpc?: AnalysisComponent | undefined;
	readonly ElasticLoadBalancerListener?: AnalysisComponent | undefined;
	readonly Explanations?: Explanation[] | undefined;
	readonly InboundHeader?: AnalysisPacketHeader | undefined;
	readonly OutboundHeader?: AnalysisPacketHeader | undefined;
	readonly RouteTableRoute?: AnalysisRouteTableRoute | undefined;
	readonly SecurityGroupRule?: AnalysisSecurityGroupRule | undefined;
	readonly SequenceNumber?: number | undefined;
	readonly SourceVpc?: AnalysisComponent | undefined;
	readonly Subnet?: AnalysisComponent | undefined;
	readonly TransitGateway?: AnalysisComponent | undefined;
	readonly TransitGatewayRouteTableRoute?: TransitGatewayRouteTableRoute | undefined;
	readonly Vpc?: AnalysisComponent | undefined;
}
export interface TransitGatewayRouteTableRoute {
	readonly AttachmentId?: string | undefined;
	readonly DestinationCidr?: string | undefined;
	readonly PrefixListId?: string | undefined;
	readonly ResourceId?: string | undefined;
	readonly ResourceType?: string | undefined;
	readonly RouteOrigin?: string | undefined;
	readonly State?: string | undefined;
}
export interface Entry {
	readonly Cidr: string;
	readonly Description?: string | undefined;
}
export interface Egress {
	readonly CidrIp?: string | undefined;
	readonly CidrIpv6?: string | undefined;
	readonly Description?: string | undefined;
	readonly DestinationPrefixListId?: string | undefined;
	readonly DestinationSecurityGroupId?: string | undefined;
	readonly FromPort?: number | undefined;
	readonly IpProtocol: string;
	readonly ToPort?: number | undefined;
}
export interface Ingress {
	readonly CidrIp?: string | undefined;
	readonly CidrIpv6?: string | undefined;
	readonly Description?: string | undefined;
	readonly FromPort?: number | undefined;
	readonly IpProtocol: string;
	readonly SourcePrefixListId?: string | undefined;
	readonly SourceSecurityGroupId?: string | undefined;
	readonly SourceSecurityGroupName?: string | undefined;
	readonly SourceSecurityGroupOwnerId?: string | undefined;
	readonly ToPort?: number | undefined;
}
export interface ClassicLoadBalancer {
	readonly Name: string;
}
export interface ClassicLoadBalancersConfig {
	readonly ClassicLoadBalancers: ClassicLoadBalancer[];
}
export interface EbsBlockDevice {
	readonly DeleteOnTermination?: boolean | undefined;
	readonly Encrypted?: boolean | undefined;
	readonly Iops?: number | undefined;
	readonly SnapshotId?: string | undefined;
	readonly VolumeSize?: number | undefined;
	readonly VolumeType?: string | undefined;
}
export interface FleetLaunchTemplateSpecification {
	readonly LaunchTemplateId?: string | undefined;
	readonly LaunchTemplateName?: string | undefined;
	readonly Version: string;
}
export interface GroupIdentifier {
	readonly GroupId: string;
}
export interface IamInstanceProfileSpecification {
	readonly Arn?: string | undefined;
}
export interface InstanceNetworkInterfaceSpecification {
	readonly AssociatePublicIpAddress?: boolean | undefined;
	readonly DeleteOnTermination?: boolean | undefined;
	readonly Description?: string | undefined;
	readonly DeviceIndex?: number | undefined;
	readonly Groups?: string[] | undefined;
	readonly Ipv6AddressCount?: number | undefined;
	readonly Ipv6Addresses?: InstanceIpv6Address[] | undefined;
	readonly NetworkInterfaceId?: string | undefined;
	readonly PrivateIpAddresses?: PrivateIpAddressSpecification[] | undefined;
	readonly SecondaryPrivateIpAddressCount?: number | undefined;
	readonly SubnetId?: string | undefined;
}
export interface LaunchTemplateConfig {
	readonly LaunchTemplateSpecification?: FleetLaunchTemplateSpecification | undefined;
	readonly Overrides?: LaunchTemplateOverrides[] | undefined;
}
export interface LaunchTemplateOverrides {
	readonly AvailabilityZone?: string | undefined;
	readonly InstanceRequirements?: InstanceRequirementsRequest | undefined;
	readonly InstanceType?: string | undefined;
	readonly Priority?: number | undefined;
	readonly SpotPrice?: string | undefined;
	readonly SubnetId?: string | undefined;
	readonly WeightedCapacity?: number | undefined;
}
export interface LoadBalancersConfig {
	readonly ClassicLoadBalancersConfig?: ClassicLoadBalancersConfig | undefined;
	readonly TargetGroupsConfig?: TargetGroupsConfig | undefined;
}
export interface SpotCapacityRebalance {
	readonly ReplacementStrategy?: string | undefined;
	readonly TerminationDelay?: number | undefined;
}
export interface SpotFleetLaunchSpecification {
	readonly BlockDeviceMappings?: BlockDeviceMapping[] | undefined;
	readonly EbsOptimized?: boolean | undefined;
	readonly IamInstanceProfile?: IamInstanceProfileSpecification | undefined;
	readonly ImageId: string;
	readonly InstanceRequirements?: InstanceRequirementsRequest | undefined;
	readonly InstanceType?: string | undefined;
	readonly KernelId?: string | undefined;
	readonly KeyName?: string | undefined;
	readonly Monitoring?: SpotFleetMonitoring | undefined;
	readonly NetworkInterfaces?: InstanceNetworkInterfaceSpecification[] | undefined;
	readonly Placement?: SpotPlacement | undefined;
	readonly RamdiskId?: string | undefined;
	readonly SecurityGroups?: GroupIdentifier[] | undefined;
	readonly SpotPrice?: string | undefined;
	readonly SubnetId?: string | undefined;
	readonly TagSpecifications?: SpotFleetTagSpecification[] | undefined;
	readonly UserData?: string | undefined;
	readonly WeightedCapacity?: number | undefined;
}
export interface SpotFleetMonitoring {
	readonly Enabled?: boolean | undefined;
}
export interface SpotFleetRequestConfigData {
	readonly AllocationStrategy?: string | undefined;
	readonly Context?: string | undefined;
	readonly ExcessCapacityTerminationPolicy?: string | undefined;
	readonly IamFleetRole: string;
	readonly InstanceInterruptionBehavior?: string | undefined;
	readonly InstancePoolsToUseCount?: number | undefined;
	readonly LaunchSpecifications?: SpotFleetLaunchSpecification[] | undefined;
	readonly LaunchTemplateConfigs?: LaunchTemplateConfig[] | undefined;
	readonly LoadBalancersConfig?: LoadBalancersConfig | undefined;
	readonly OnDemandAllocationStrategy?: string | undefined;
	readonly OnDemandMaxTotalPrice?: string | undefined;
	readonly OnDemandTargetCapacity?: number | undefined;
	readonly ReplaceUnhealthyInstances?: boolean | undefined;
	readonly SpotMaintenanceStrategies?: SpotMaintenanceStrategies | undefined;
	readonly SpotMaxTotalPrice?: string | undefined;
	readonly SpotPrice?: string | undefined;
	readonly TagSpecifications?: SpotFleetTagSpecification[] | undefined;
	readonly TargetCapacity: number;
	readonly TargetCapacityUnitType?: string | undefined;
	readonly TerminateInstancesWithExpiration?: boolean | undefined;
	readonly Type?: string | undefined;
	readonly ValidFrom?: string | undefined;
	readonly ValidUntil?: string | undefined;
}
export interface SpotFleetTagSpecification {
	readonly ResourceType?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
}
export interface SpotMaintenanceStrategies {
	readonly CapacityRebalance?: SpotCapacityRebalance | undefined;
}
export interface SpotPlacement {
	readonly AvailabilityZone?: string | undefined;
	readonly GroupName?: string | undefined;
	readonly Tenancy?: string | undefined;
}
export interface TargetGroup {
	readonly Arn: string;
}
export interface TargetGroupsConfig {
	readonly TargetGroups: TargetGroup[];
}
export interface PrivateDnsNameOptionsOnLaunch {
	readonly EnableResourceNameDnsAAAARecord?: boolean | undefined;
	readonly EnableResourceNameDnsARecord?: boolean | undefined;
	readonly HostnameType?: string | undefined;
}
export interface TrafficMirrorPortRange {
	readonly FromPort: number;
	readonly ToPort: number;
}
export interface Options {
	readonly ApplianceModeSupport?: string | undefined;
	readonly DnsSupport?: string | undefined;
	readonly Ipv6Support?: string | undefined;
}
export interface TransitGatewayConnectOptions {
	readonly Protocol?: string | undefined;
}
export interface PeeringAttachmentStatus {
	readonly Code?: string | undefined;
	readonly Message?: string | undefined;
}
export interface VpnTunnelOptionsSpecification {
	readonly PreSharedKey?: string | undefined;
	readonly TunnelInsideCidr?: string | undefined;
}
export default {
	CapacityReservation: CapacityReservation,
	CapacityReservationFleet: CapacityReservationFleet,
	CarrierGateway: CarrierGateway,
	ClientVpnAuthorizationRule: ClientVpnAuthorizationRule,
	ClientVpnEndpoint: ClientVpnEndpoint,
	ClientVpnRoute: ClientVpnRoute,
	ClientVpnTargetNetworkAssociation: ClientVpnTargetNetworkAssociation,
	CustomerGateway: CustomerGateway,
	DHCPOptions: DHCPOptions,
	EC2Fleet: EC2Fleet,
	EIP: EIP,
	EIPAssociation: EIPAssociation,
	EgressOnlyInternetGateway: EgressOnlyInternetGateway,
	EnclaveCertificateIamRoleAssociation: EnclaveCertificateIamRoleAssociation,
	FlowLog: FlowLog,
	GatewayRouteTableAssociation: GatewayRouteTableAssociation,
	Host: Host,
	IPAM: IPAM,
	IPAMAllocation: IPAMAllocation,
	IPAMPool: IPAMPool,
	IPAMScope: IPAMScope,
	Instance: Instance,
	InternetGateway: InternetGateway,
	KeyPair: KeyPair,
	LaunchTemplate: LaunchTemplate,
	LocalGatewayRoute: LocalGatewayRoute,
	LocalGatewayRouteTableVPCAssociation: LocalGatewayRouteTableVPCAssociation,
	NatGateway: NatGateway,
	NetworkAcl: NetworkAcl,
	NetworkAclEntry: NetworkAclEntry,
	NetworkInsightsAccessScope: NetworkInsightsAccessScope,
	NetworkInsightsAccessScopeAnalysis: NetworkInsightsAccessScopeAnalysis,
	NetworkInsightsAnalysis: NetworkInsightsAnalysis,
	NetworkInsightsPath: NetworkInsightsPath,
	NetworkInterface: NetworkInterface,
	NetworkInterfaceAttachment: NetworkInterfaceAttachment,
	NetworkInterfacePermission: NetworkInterfacePermission,
	NetworkPerformanceMetricSubscription: NetworkPerformanceMetricSubscription,
	PlacementGroup: PlacementGroup,
	PrefixList: PrefixList,
	Route: Route,
	RouteTable: RouteTable,
	SecurityGroup: SecurityGroup,
	SecurityGroupEgress: SecurityGroupEgress,
	SecurityGroupIngress: SecurityGroupIngress,
	SpotFleet: SpotFleet,
	Subnet: Subnet,
	SubnetCidrBlock: SubnetCidrBlock,
	SubnetNetworkAclAssociation: SubnetNetworkAclAssociation,
	SubnetRouteTableAssociation: SubnetRouteTableAssociation,
	TrafficMirrorFilter: TrafficMirrorFilter,
	TrafficMirrorFilterRule: TrafficMirrorFilterRule,
	TrafficMirrorSession: TrafficMirrorSession,
	TrafficMirrorTarget: TrafficMirrorTarget,
	TransitGateway: TransitGateway,
	TransitGatewayAttachment: TransitGatewayAttachment,
	TransitGatewayConnect: TransitGatewayConnect,
	TransitGatewayMulticastDomain: TransitGatewayMulticastDomain,
	TransitGatewayMulticastDomainAssociation: TransitGatewayMulticastDomainAssociation,
	TransitGatewayMulticastGroupMember: TransitGatewayMulticastGroupMember,
	TransitGatewayMulticastGroupSource: TransitGatewayMulticastGroupSource,
	TransitGatewayPeeringAttachment: TransitGatewayPeeringAttachment,
	TransitGatewayRoute: TransitGatewayRoute,
	TransitGatewayRouteTable: TransitGatewayRouteTable,
	TransitGatewayRouteTableAssociation: TransitGatewayRouteTableAssociation,
	TransitGatewayRouteTablePropagation: TransitGatewayRouteTablePropagation,
	TransitGatewayVpcAttachment: TransitGatewayVpcAttachment,
	VPC: VPC,
	VPCCidrBlock: VPCCidrBlock,
	VPCDHCPOptionsAssociation: VPCDHCPOptionsAssociation,
	VPCEndpoint: VPCEndpoint,
	VPCEndpointConnectionNotification: VPCEndpointConnectionNotification,
	VPCEndpointService: VPCEndpointService,
	VPCEndpointServicePermissions: VPCEndpointServicePermissions,
	VPCGatewayAttachment: VPCGatewayAttachment,
	VPCPeeringConnection: VPCPeeringConnection,
	VPNConnection: VPNConnection,
	VPNConnectionRoute: VPNConnectionRoute,
	VPNGateway: VPNGateway,
	VPNGatewayRoutePropagation: VPNGatewayRoutePropagation,
	Volume: Volume,
	VolumeAttachment: VolumeAttachment,
};

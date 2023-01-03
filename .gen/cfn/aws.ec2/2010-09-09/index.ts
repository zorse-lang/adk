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
	readonly EbsOptimized?: (boolean | undefined) | undefined;
	readonly EndDate?: (string | undefined) | undefined;
	readonly EndDateType?: (string | undefined) | undefined;
	readonly EphemeralStorage?: (boolean | undefined) | undefined;
	readonly InstanceMatchCriteria?: (string | undefined) | undefined;
	readonly OutPostArn?: (string | undefined) | undefined;
	readonly PlacementGroupArn?: (string | undefined) | undefined;
	readonly TagSpecifications?: (TagSpecification[] | undefined) | undefined;
	readonly Tenancy?: string | undefined;
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
	readonly AllocationStrategy?: (string | undefined) | undefined;
	readonly EndDate?: (string | undefined) | undefined;
	readonly InstanceMatchCriteria?: (string | undefined) | undefined;
	readonly InstanceTypeSpecifications?: (InstanceTypeSpecification[] | undefined) | undefined;
	readonly NoRemoveEndDate?: (boolean | undefined) | undefined;
	readonly RemoveEndDate?: (boolean | undefined) | undefined;
	readonly TagSpecifications?: (TagSpecification[] | undefined) | undefined;
	readonly Tenancy?: (string | undefined) | undefined;
	readonly TotalTargetCapacity?: (number | undefined) | undefined;
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
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
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
	readonly AccessGroupId?: (string | undefined) | undefined;
	readonly AuthorizeAllGroups?: (boolean | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
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
	readonly ClientConnectOptions?: (ClientConnectOptions | undefined) | undefined;
	readonly ClientLoginBannerOptions?: (ClientLoginBannerOptions | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly DnsServers?: (string[] | undefined) | undefined;
	readonly SecurityGroupIds?: (string[] | undefined) | undefined;
	readonly SelfServicePortal?: (string | undefined) | undefined;
	readonly SessionTimeoutHours?: (number | undefined) | undefined;
	readonly SplitTunnel?: (boolean | undefined) | undefined;
	readonly TagSpecifications?: (TagSpecification[] | undefined) | undefined;
	readonly TransportProtocol?: (string | undefined) | undefined;
	readonly VpcId?: (string | undefined) | undefined;
	readonly VpnPort?: (number | undefined) | undefined;
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
	readonly Description?: (string | undefined) | undefined;
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
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
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
	readonly DomainName?: (string | undefined) | undefined;
	readonly DomainNameServers?: (string[] | undefined) | undefined;
	readonly NetbiosNameServers?: (string[] | undefined) | undefined;
	readonly NetbiosNodeType?: (number | undefined) | undefined;
	readonly NtpServers?: (string[] | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
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
	readonly Context?: (string | undefined) | undefined;
	readonly ExcessCapacityTerminationPolicy?: (string | undefined) | undefined;
	readonly OnDemandOptions?: (OnDemandOptionsRequest | undefined) | undefined;
	readonly ReplaceUnhealthyInstances?: (boolean | undefined) | undefined;
	readonly SpotOptions?: (SpotOptionsRequest | undefined) | undefined;
	readonly TagSpecifications?: (TagSpecification[] | undefined) | undefined;
	readonly TerminateInstancesWithExpiration?: (boolean | undefined) | undefined;
	readonly Type?: (string | undefined) | undefined;
	readonly ValidFrom?: (string | undefined) | undefined;
	readonly ValidUntil?: (string | undefined) | undefined;
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
	readonly Domain?: (string | undefined) | undefined;
	readonly InstanceId?: (string | undefined) | undefined;
	readonly NetworkBorderGroup?: (string | undefined) | undefined;
	readonly PublicIpv4Pool?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly TransferAddress?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class EIPAssociation extends CfnResource<EIPAssociationComponentInputs> implements EIPAssociationComponentOutputs {
	constructor(entity: ADKEntity, options: EIPAssociationComponentInputs) {
		super(entity, options.LogicalId, "AWS::EC2::EIPAssociation", options);
	}
}
export interface EIPAssociationComponentOutputs {}
export interface EIPAssociationComponentInputs {
	readonly AllocationId?: (string | undefined) | undefined;
	readonly EIP?: (string | undefined) | undefined;
	readonly InstanceId?: (string | undefined) | undefined;
	readonly NetworkInterfaceId?: (string | undefined) | undefined;
	readonly PrivateIpAddress?: (string | undefined) | undefined;
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
	readonly DeliverLogsPermissionArn?: (string | undefined) | undefined;
	readonly DestinationOptions?: (DestinationOptions | undefined) | undefined;
	readonly LogDestination?: (string | undefined) | undefined;
	readonly LogDestinationType?: (string | undefined) | undefined;
	readonly LogFormat?: (string | undefined) | undefined;
	readonly LogGroupName?: (string | undefined) | undefined;
	readonly MaxAggregationInterval?: (number | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly TrafficType?: (string | undefined) | undefined;
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
	readonly AutoPlacement?: (string | undefined) | undefined;
	readonly HostRecovery?: (string | undefined) | undefined;
	readonly InstanceFamily?: (string | undefined) | undefined;
	readonly InstanceType?: (string | undefined) | undefined;
	readonly OutpostArn?: (string | undefined) | undefined;
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
	readonly Description?: (string | undefined) | undefined;
	readonly OperatingRegions?: (IpamOperatingRegion[] | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
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
	readonly Cidr?: (string | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly NetmaskLength?: (number | undefined) | undefined;
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
	readonly AllocationDefaultNetmaskLength?: (number | undefined) | undefined;
	readonly AllocationMaxNetmaskLength?: (number | undefined) | undefined;
	readonly AllocationMinNetmaskLength?: (number | undefined) | undefined;
	readonly AllocationResourceTags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly AutoImport?: (boolean | undefined) | undefined;
	readonly AwsService?: (string | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly Locale?: (string | undefined) | undefined;
	readonly ProvisionedCidrs?: (ProvisionedCidr[] | undefined) | undefined;
	readonly PubliclyAdvertisable?: (boolean | undefined) | undefined;
	readonly SourceIpamPoolId?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
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
	readonly Description?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
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
	readonly AdditionalInfo?: (string | undefined) | undefined;
	readonly Affinity?: (string | undefined) | undefined;
	readonly AvailabilityZone?: string | undefined;
	readonly BlockDeviceMappings?: (BlockDeviceMapping[] | undefined) | undefined;
	readonly CpuOptions?: (CpuOptions | undefined) | undefined;
	readonly CreditSpecification?: (CreditSpecification | undefined) | undefined;
	readonly DisableApiTermination?: (boolean | undefined) | undefined;
	readonly EbsOptimized?: (boolean | undefined) | undefined;
	readonly ElasticGpuSpecifications?: (ElasticGpuSpecification[] | undefined) | undefined;
	readonly ElasticInferenceAccelerators?: (ElasticInferenceAccelerator[] | undefined) | undefined;
	readonly EnclaveOptions?: (EnclaveOptions | undefined) | undefined;
	readonly HibernationOptions?: (HibernationOptions | undefined) | undefined;
	readonly HostId?: (string | undefined) | undefined;
	readonly HostResourceGroupArn?: (string | undefined) | undefined;
	readonly IamInstanceProfile?: (string | undefined) | undefined;
	readonly ImageId?: (string | undefined) | undefined;
	readonly InstanceInitiatedShutdownBehavior?: (string | undefined) | undefined;
	readonly InstanceType?: (string | undefined) | undefined;
	readonly Ipv6AddressCount?: (number | undefined) | undefined;
	readonly Ipv6Addresses?: (InstanceIpv6Address[] | undefined) | undefined;
	readonly KernelId?: (string | undefined) | undefined;
	readonly KeyName?: (string | undefined) | undefined;
	readonly LaunchTemplate?: (LaunchTemplateSpecification | undefined) | undefined;
	readonly LicenseSpecifications?: (LicenseSpecification[] | undefined) | undefined;
	readonly Monitoring?: (boolean | undefined) | undefined;
	readonly NetworkInterfaces?: (NetworkInterface[] | undefined) | undefined;
	readonly PlacementGroupName?: (string | undefined) | undefined;
	readonly PrivateDnsNameOptions?: (PrivateDnsNameOptions | undefined) | undefined;
	readonly PrivateIpAddress?: (string | undefined) | undefined;
	readonly PropagateTagsToVolumeOnCreation?: (boolean | undefined) | undefined;
	readonly RamdiskId?: (string | undefined) | undefined;
	readonly SecurityGroupIds?: (string[] | undefined) | undefined;
	readonly SecurityGroups?: (string[] | undefined) | undefined;
	readonly SourceDestCheck?: (boolean | undefined) | undefined;
	readonly SsmAssociations?: (SsmAssociation[] | undefined) | undefined;
	readonly SubnetId?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly Tenancy?: (string | undefined) | undefined;
	readonly UserData?: (string | undefined) | undefined;
	readonly Volumes?: (Volume[] | undefined) | undefined;
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
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
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
	readonly KeyType?: (string | undefined) | undefined;
	readonly PublicKeyMaterial?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
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
	readonly LaunchTemplateName?: (string | undefined) | undefined;
	readonly TagSpecifications?: (LaunchTemplateTagSpecification[] | undefined) | undefined;
	readonly VersionDescription?: (string | undefined) | undefined;
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
	readonly LocalGatewayVirtualInterfaceGroupId?: (string | undefined) | undefined;
	readonly NetworkInterfaceId?: (string | undefined) | undefined;
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
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
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
	readonly AllocationId?: (string | undefined) | undefined;
	readonly ConnectivityType?: (string | undefined) | undefined;
	readonly PrivateIpAddress?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
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
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
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
	readonly CidrBlock?: (string | undefined) | undefined;
	readonly Egress?: (boolean | undefined) | undefined;
	readonly Icmp?: (Icmp | undefined) | undefined;
	readonly Ipv6CidrBlock?: (string | undefined) | undefined;
	readonly PortRange?: (PortRange | undefined) | undefined;
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
	readonly ExcludePaths?: (AccessScopePathRequest[] | undefined) | undefined;
	readonly MatchPaths?: (AccessScopePathRequest[] | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
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
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
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
	readonly AdditionalAccounts?: (string[] | undefined) | undefined;
	readonly FilterInArns?: (string[] | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
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
	readonly DestinationIp?: (string | undefined) | undefined;
	readonly DestinationPort?: (number | undefined) | undefined;
	readonly SourceIp?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
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
	readonly Description?: (string | undefined) | undefined;
	readonly GroupSet?: (string[] | undefined) | undefined;
	readonly InterfaceType?: (string | undefined) | undefined;
	readonly Ipv6AddressCount?: (number | undefined) | undefined;
	readonly Ipv6Addresses?: (InstanceIpv6Address[] | undefined) | undefined;
	readonly PrivateIpAddress?: (string | undefined) | undefined;
	readonly PrivateIpAddresses?: (PrivateIpAddressSpecification[] | undefined) | undefined;
	readonly SecondaryPrivateIpAddressCount?: (number | undefined) | undefined;
	readonly SourceDestCheck?: (boolean | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
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
	readonly DeleteOnTermination?: (boolean | undefined) | undefined;
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
	readonly SpreadLevel?: (string | undefined) | undefined;
	readonly Strategy?: (string | undefined) | undefined;
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
	readonly Entries?: (Entry[] | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
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
	readonly CarrierGatewayId?: (string | undefined) | undefined;
	readonly DestinationCidrBlock?: (string | undefined) | undefined;
	readonly DestinationIpv6CidrBlock?: (string | undefined) | undefined;
	readonly EgressOnlyInternetGatewayId?: (string | undefined) | undefined;
	readonly GatewayId?: (string | undefined) | undefined;
	readonly InstanceId?: (string | undefined) | undefined;
	readonly LocalGatewayId?: (string | undefined) | undefined;
	readonly NatGatewayId?: (string | undefined) | undefined;
	readonly NetworkInterfaceId?: (string | undefined) | undefined;
	readonly TransitGatewayId?: (string | undefined) | undefined;
	readonly VpcEndpointId?: (string | undefined) | undefined;
	readonly VpcPeeringConnectionId?: (string | undefined) | undefined;
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
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
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
	readonly GroupName?: (string | undefined) | undefined;
	readonly SecurityGroupEgress?: (Egress[] | undefined) | undefined;
	readonly SecurityGroupIngress?: (Ingress[] | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly VpcId?: string | undefined;
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
	readonly CidrIp?: (string | undefined) | undefined;
	readonly CidrIpv6?: (string | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly DestinationPrefixListId?: (string | undefined) | undefined;
	readonly DestinationSecurityGroupId?: (string | undefined) | undefined;
	readonly FromPort?: (number | undefined) | undefined;
	readonly ToPort?: (number | undefined) | undefined;
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
	readonly CidrIp?: (string | undefined) | undefined;
	readonly CidrIpv6?: (string | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly FromPort?: (number | undefined) | undefined;
	readonly GroupId?: (string | undefined) | undefined;
	readonly GroupName?: (string | undefined) | undefined;
	readonly SourcePrefixListId?: (string | undefined) | undefined;
	readonly SourceSecurityGroupId?: (string | undefined) | undefined;
	readonly SourceSecurityGroupName?: (string | undefined) | undefined;
	readonly SourceSecurityGroupOwnerId?: (string | undefined) | undefined;
	readonly ToPort?: (number | undefined) | undefined;
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
	readonly AssignIpv6AddressOnCreation?: (boolean | undefined) | undefined;
	readonly AvailabilityZone?: string | undefined;
	readonly AvailabilityZoneId?: (string | undefined) | undefined;
	readonly CidrBlock?: (string | undefined) | undefined;
	readonly EnableDns64?: (boolean | undefined) | undefined;
	readonly Ipv6CidrBlock?: (string | undefined) | undefined;
	readonly Ipv6Native?: (boolean | undefined) | undefined;
	readonly MapPublicIpOnLaunch?: (boolean | undefined) | undefined;
	readonly OutpostArn?: string | undefined;
	readonly PrivateDnsNameOptionsOnLaunch?: (PrivateDnsNameOptionsOnLaunch | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
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
	readonly Description?: (string | undefined) | undefined;
	readonly NetworkServices?: (string[] | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
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
	readonly Description?: (string | undefined) | undefined;
	readonly DestinationPortRange?: (TrafficMirrorPortRange | undefined) | undefined;
	readonly Protocol?: (number | undefined) | undefined;
	readonly SourcePortRange?: (TrafficMirrorPortRange | undefined) | undefined;
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
	readonly Description?: (string | undefined) | undefined;
	readonly PacketLength?: (number | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly VirtualNetworkId?: (number | undefined) | undefined;
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
	readonly Description?: (string | undefined) | undefined;
	readonly GatewayLoadBalancerEndpointId?: (string | undefined) | undefined;
	readonly NetworkInterfaceId?: (string | undefined) | undefined;
	readonly NetworkLoadBalancerArn?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
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
	readonly AmazonSideAsn?: (number | undefined) | undefined;
	readonly AssociationDefaultRouteTableId?: (string | undefined) | undefined;
	readonly AutoAcceptSharedAttachments?: (string | undefined) | undefined;
	readonly DefaultRouteTableAssociation?: (string | undefined) | undefined;
	readonly DefaultRouteTablePropagation?: (string | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly DnsSupport?: (string | undefined) | undefined;
	readonly MulticastSupport?: (string | undefined) | undefined;
	readonly PropagationDefaultRouteTableId?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly TransitGatewayCidrBlocks?: (string[] | undefined) | undefined;
	readonly VpnEcmpSupport?: (string | undefined) | undefined;
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
	readonly Options?: (Options | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
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
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
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
	readonly Options?: (Options | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
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
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
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
	readonly Blackhole?: (boolean | undefined) | undefined;
	readonly DestinationCidrBlock?: (string | undefined) | undefined;
	readonly TransitGatewayAttachmentId?: (string | undefined) | undefined;
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
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
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
	readonly AddSubnetIds?: (string[] | undefined) | undefined;
	readonly Options?: (Options | undefined) | undefined;
	readonly RemoveSubnetIds?: (string[] | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
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
	readonly CidrBlock?: string | undefined;
	readonly EnableDnsHostnames?: (boolean | undefined) | undefined;
	readonly EnableDnsSupport?: (boolean | undefined) | undefined;
	readonly InstanceTenancy?: (string | undefined) | undefined;
	readonly Ipv4IpamPoolId?: (string | undefined) | undefined;
	readonly Ipv4NetmaskLength?: (number | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
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
	readonly AmazonProvidedIpv6CidrBlock?: (boolean | undefined) | undefined;
	readonly CidrBlock?: (string | undefined) | undefined;
	readonly Ipv4IpamPoolId?: (string | undefined) | undefined;
	readonly Ipv4NetmaskLength?: (number | undefined) | undefined;
	readonly Ipv6CidrBlock?: (string | undefined) | undefined;
	readonly Ipv6IpamPoolId?: (string | undefined) | undefined;
	readonly Ipv6NetmaskLength?: (number | undefined) | undefined;
	readonly Ipv6Pool?: (string | undefined) | undefined;
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
	readonly PolicyDocument?: (any | undefined) | undefined;
	readonly PrivateDnsEnabled?: (boolean | undefined) | undefined;
	readonly RouteTableIds?: (string[] | undefined) | undefined;
	readonly SecurityGroupIds?: (string[] | undefined) | undefined;
	readonly SubnetIds?: (string[] | undefined) | undefined;
	readonly VpcEndpointType?: (string | undefined) | undefined;
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
	readonly ServiceId?: (string | undefined) | undefined;
	readonly VPCEndpointId?: (string | undefined) | undefined;
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
	readonly AcceptanceRequired?: (boolean | undefined) | undefined;
	readonly ContributorInsightsEnabled?: (boolean | undefined) | undefined;
	readonly GatewayLoadBalancerArns?: (string[] | undefined) | undefined;
	readonly NetworkLoadBalancerArns?: (string[] | undefined) | undefined;
	readonly PayerResponsibility?: (string | undefined) | undefined;
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
	readonly AllowedPrincipals?: (string[] | undefined) | undefined;
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
	readonly InternetGatewayId?: (string | undefined) | undefined;
	readonly VpnGatewayId?: (string | undefined) | undefined;
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
	readonly PeerOwnerId?: (string | undefined) | undefined;
	readonly PeerRegion?: (string | undefined) | undefined;
	readonly PeerRoleArn?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
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
	readonly StaticRoutesOnly?: (boolean | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly TransitGatewayId?: (string | undefined) | undefined;
	readonly VpnGatewayId?: (string | undefined) | undefined;
	readonly VpnTunnelOptionsSpecifications?: (VpnTunnelOptionsSpecification[] | undefined) | undefined;
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
	readonly AmazonSideAsn?: (number | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
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
	readonly AutoEnableIO?: (boolean | undefined) | undefined;
	readonly Encrypted?: (boolean | undefined) | undefined;
	readonly Iops?: (number | undefined) | undefined;
	readonly KmsKeyId?: (string | undefined) | undefined;
	readonly MultiAttachEnabled?: (boolean | undefined) | undefined;
	readonly OutpostArn?: (string | undefined) | undefined;
	readonly Size?: (number | undefined) | undefined;
	readonly SnapshotId?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly Throughput?: (number | undefined) | undefined;
	readonly VolumeType?: (string | undefined) | undefined;
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
	readonly ResourceType?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
}
export interface InstanceTypeSpecification {
	readonly AvailabilityZone?: (string | undefined) | undefined;
	readonly AvailabilityZoneId?: (string | undefined) | undefined;
	readonly EbsOptimized?: (boolean | undefined) | undefined;
	readonly InstancePlatform?: (string | undefined) | undefined;
	readonly InstanceType?: (string | undefined) | undefined;
	readonly Priority?: (number | undefined) | undefined;
	readonly Weight?: (number | undefined) | undefined;
}
export interface CertificateAuthenticationRequest {
	readonly ClientRootCertificateChainArn: string;
}
export interface ClientAuthenticationRequest {
	readonly ActiveDirectory?: (DirectoryServiceAuthenticationRequest | undefined) | undefined;
	readonly FederatedAuthentication?: (FederatedAuthenticationRequest | undefined) | undefined;
	readonly MutualAuthentication?: (CertificateAuthenticationRequest | undefined) | undefined;
	readonly Type: string;
}
export interface ClientConnectOptions {
	readonly Enabled: boolean;
	readonly LambdaFunctionArn?: (string | undefined) | undefined;
}
export interface ClientLoginBannerOptions {
	readonly BannerText?: (string | undefined) | undefined;
	readonly Enabled: boolean;
}
export interface ConnectionLogOptions {
	readonly CloudwatchLogGroup?: (string | undefined) | undefined;
	readonly CloudwatchLogStream?: (string | undefined) | undefined;
	readonly Enabled: boolean;
}
export interface DirectoryServiceAuthenticationRequest {
	readonly DirectoryId: string;
}
export interface FederatedAuthenticationRequest {
	readonly SAMLProviderArn: string;
	readonly SelfServiceSAMLProviderArn?: (string | undefined) | undefined;
}
export interface AcceleratorCountRequest {
	readonly Max?: (number | undefined) | undefined;
	readonly Min?: (number | undefined) | undefined;
}
export interface AcceleratorTotalMemoryMiBRequest {
	readonly Max?: (number | undefined) | undefined;
	readonly Min?: (number | undefined) | undefined;
}
export interface BaselineEbsBandwidthMbpsRequest {
	readonly Max?: (number | undefined) | undefined;
	readonly Min?: (number | undefined) | undefined;
}
export interface CapacityRebalance {
	readonly ReplacementStrategy?: (string | undefined) | undefined;
	readonly TerminationDelay?: (number | undefined) | undefined;
}
export interface CapacityReservationOptionsRequest {
	readonly UsageStrategy?: (string | undefined) | undefined;
}
export interface FleetLaunchTemplateConfigRequest {
	readonly LaunchTemplateSpecification?: (FleetLaunchTemplateSpecificationRequest | undefined) | undefined;
	readonly Overrides?: (FleetLaunchTemplateOverridesRequest[] | undefined) | undefined;
}
export interface FleetLaunchTemplateOverridesRequest {
	readonly AvailabilityZone?: (string | undefined) | undefined;
	readonly InstanceRequirements?: (InstanceRequirementsRequest | undefined) | undefined;
	readonly InstanceType?: (string | undefined) | undefined;
	readonly MaxPrice?: (string | undefined) | undefined;
	readonly Placement?: (Placement | undefined) | undefined;
	readonly Priority?: (number | undefined) | undefined;
	readonly SubnetId?: (string | undefined) | undefined;
	readonly WeightedCapacity?: (number | undefined) | undefined;
}
export interface FleetLaunchTemplateSpecificationRequest {
	readonly LaunchTemplateId?: (string | undefined) | undefined;
	readonly LaunchTemplateName?: (string | undefined) | undefined;
	readonly Version: string;
}
export interface InstanceRequirementsRequest {
	readonly AcceleratorCount?: (AcceleratorCountRequest | undefined) | undefined;
	readonly AcceleratorManufacturers?: (string[] | undefined) | undefined;
	readonly AcceleratorNames?: (string[] | undefined) | undefined;
	readonly AcceleratorTotalMemoryMiB?: (AcceleratorTotalMemoryMiBRequest | undefined) | undefined;
	readonly AcceleratorTypes?: (string[] | undefined) | undefined;
	readonly AllowedInstanceTypes?: (string[] | undefined) | undefined;
	readonly BareMetal?: (string | undefined) | undefined;
	readonly BaselineEbsBandwidthMbps?: (BaselineEbsBandwidthMbpsRequest | undefined) | undefined;
	readonly BurstablePerformance?: (string | undefined) | undefined;
	readonly CpuManufacturers?: (string[] | undefined) | undefined;
	readonly ExcludedInstanceTypes?: (string[] | undefined) | undefined;
	readonly InstanceGenerations?: (string[] | undefined) | undefined;
	readonly LocalStorage?: (string | undefined) | undefined;
	readonly LocalStorageTypes?: (string[] | undefined) | undefined;
	readonly MemoryGiBPerVCpu?: (MemoryGiBPerVCpuRequest | undefined) | undefined;
	readonly MemoryMiB?: (MemoryMiBRequest | undefined) | undefined;
	readonly NetworkBandwidthGbps?: (NetworkBandwidthGbpsRequest | undefined) | undefined;
	readonly NetworkInterfaceCount?: (NetworkInterfaceCountRequest | undefined) | undefined;
	readonly OnDemandMaxPricePercentageOverLowestPrice?: (number | undefined) | undefined;
	readonly RequireHibernateSupport?: (boolean | undefined) | undefined;
	readonly SpotMaxPricePercentageOverLowestPrice?: (number | undefined) | undefined;
	readonly TotalLocalStorageGB?: (TotalLocalStorageGBRequest | undefined) | undefined;
	readonly VCpuCount?: (VCpuCountRangeRequest | undefined) | undefined;
}
export interface MaintenanceStrategies {
	readonly CapacityRebalance?: (CapacityRebalance | undefined) | undefined;
}
export interface MemoryGiBPerVCpuRequest {
	readonly Max?: (number | undefined) | undefined;
	readonly Min?: (number | undefined) | undefined;
}
export interface MemoryMiBRequest {
	readonly Max?: (number | undefined) | undefined;
	readonly Min?: (number | undefined) | undefined;
}
export interface NetworkBandwidthGbpsRequest {
	readonly Max?: (number | undefined) | undefined;
	readonly Min?: (number | undefined) | undefined;
}
export interface NetworkInterfaceCountRequest {
	readonly Max?: (number | undefined) | undefined;
	readonly Min?: (number | undefined) | undefined;
}
export interface OnDemandOptionsRequest {
	readonly AllocationStrategy?: (string | undefined) | undefined;
	readonly CapacityReservationOptions?: (CapacityReservationOptionsRequest | undefined) | undefined;
	readonly MaxTotalPrice?: (string | undefined) | undefined;
	readonly MinTargetCapacity?: (number | undefined) | undefined;
	readonly SingleAvailabilityZone?: (boolean | undefined) | undefined;
	readonly SingleInstanceType?: (boolean | undefined) | undefined;
}
export interface Placement {
	readonly Affinity?: (string | undefined) | undefined;
	readonly AvailabilityZone?: (string | undefined) | undefined;
	readonly GroupName?: (string | undefined) | undefined;
	readonly HostId?: (string | undefined) | undefined;
	readonly HostResourceGroupArn?: (string | undefined) | undefined;
	readonly PartitionNumber?: (number | undefined) | undefined;
	readonly SpreadDomain?: (string | undefined) | undefined;
	readonly Tenancy?: (string | undefined) | undefined;
}
export interface SpotOptionsRequest {
	readonly AllocationStrategy?: (string | undefined) | undefined;
	readonly InstanceInterruptionBehavior?: (string | undefined) | undefined;
	readonly InstancePoolsToUseCount?: (number | undefined) | undefined;
	readonly MaintenanceStrategies?: (MaintenanceStrategies | undefined) | undefined;
	readonly MaxTotalPrice?: (string | undefined) | undefined;
	readonly MinTargetCapacity?: (number | undefined) | undefined;
	readonly SingleAvailabilityZone?: (boolean | undefined) | undefined;
	readonly SingleInstanceType?: (boolean | undefined) | undefined;
}
export interface TargetCapacitySpecificationRequest {
	readonly DefaultTargetCapacityType?: (string | undefined) | undefined;
	readonly OnDemandTargetCapacity?: (number | undefined) | undefined;
	readonly SpotTargetCapacity?: (number | undefined) | undefined;
	readonly TargetCapacityUnitType?: (string | undefined) | undefined;
	readonly TotalTargetCapacity: number;
}
export interface TotalLocalStorageGBRequest {
	readonly Max?: (number | undefined) | undefined;
	readonly Min?: (number | undefined) | undefined;
}
export interface VCpuCountRangeRequest {
	readonly Max?: (number | undefined) | undefined;
	readonly Min?: (number | undefined) | undefined;
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
	readonly Ebs?: (Ebs | undefined) | undefined;
	readonly NoDevice?: (NoDevice | undefined) | undefined;
	readonly VirtualName?: (string | undefined) | undefined;
}
export interface CpuOptions {
	readonly CoreCount?: (number | undefined) | undefined;
	readonly ThreadsPerCore?: (number | undefined) | undefined;
}
export interface CreditSpecification {
	readonly CPUCredits?: (string | undefined) | undefined;
}
export interface Ebs {
	readonly DeleteOnTermination?: (boolean | undefined) | undefined;
	readonly Encrypted?: (boolean | undefined) | undefined;
	readonly Iops?: (number | undefined) | undefined;
	readonly KmsKeyId?: (string | undefined) | undefined;
	readonly SnapshotId?: (string | undefined) | undefined;
	readonly VolumeSize?: (number | undefined) | undefined;
	readonly VolumeType?: (string | undefined) | undefined;
}
export interface ElasticGpuSpecification {
	readonly Type: string;
}
export interface ElasticInferenceAccelerator {
	readonly Count?: (number | undefined) | undefined;
	readonly Type: string;
}
export interface EnclaveOptions {
	readonly Enabled?: (boolean | undefined) | undefined;
}
export interface HibernationOptions {
	readonly Configured?: (boolean | undefined) | undefined;
}
export interface InstanceIpv6Address {
	readonly Ipv6Address: string;
}
export interface LaunchTemplateSpecification {
	readonly LaunchTemplateId?: (string | undefined) | undefined;
	readonly LaunchTemplateName?: (string | undefined) | undefined;
	readonly Version: string;
}
export interface LicenseSpecification {
	readonly LicenseConfigurationArn: string;
}
export interface NetworkInterface {
	readonly AssociateCarrierIpAddress?: (boolean | undefined) | undefined;
	readonly AssociatePublicIpAddress?: (boolean | undefined) | undefined;
	readonly DeleteOnTermination?: (boolean | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly DeviceIndex: string;
	readonly GroupSet?: (string[] | undefined) | undefined;
	readonly Ipv6AddressCount?: (number | undefined) | undefined;
	readonly Ipv6Addresses?: (InstanceIpv6Address[] | undefined) | undefined;
	readonly NetworkInterfaceId?: (string | undefined) | undefined;
	readonly PrivateIpAddress?: (string | undefined) | undefined;
	readonly PrivateIpAddresses?: (PrivateIpAddressSpecification[] | undefined) | undefined;
	readonly SecondaryPrivateIpAddressCount?: (number | undefined) | undefined;
	readonly SubnetId?: (string | undefined) | undefined;
}
export interface NoDevice {}
export interface PrivateDnsNameOptions {
	readonly EnableResourceNameDnsAAAARecord?: (boolean | undefined) | undefined;
	readonly EnableResourceNameDnsARecord?: (boolean | undefined) | undefined;
	readonly HostnameType?: (string | undefined) | undefined;
}
export interface PrivateIpAddressSpecification {
	readonly Primary: boolean;
	readonly PrivateIpAddress: string;
}
export interface SsmAssociation {
	readonly AssociationParameters?: (AssociationParameter[] | undefined) | undefined;
	readonly DocumentName: string;
}
export interface Volume {
	readonly Device: string;
	readonly VolumeId: string;
}
export interface AcceleratorCount {
	readonly Max?: (number | undefined) | undefined;
	readonly Min?: (number | undefined) | undefined;
}
export interface AcceleratorTotalMemoryMiB {
	readonly Max?: (number | undefined) | undefined;
	readonly Min?: (number | undefined) | undefined;
}
export interface BaselineEbsBandwidthMbps {
	readonly Max?: (number | undefined) | undefined;
	readonly Min?: (number | undefined) | undefined;
}
export interface CapacityReservationSpecification {
	readonly CapacityReservationPreference?: (string | undefined) | undefined;
	readonly CapacityReservationTarget?: (CapacityReservationTarget | undefined) | undefined;
}
export interface CapacityReservationTarget {
	readonly CapacityReservationId?: (string | undefined) | undefined;
	readonly CapacityReservationResourceGroupArn?: (string | undefined) | undefined;
}
export interface IamInstanceProfile {
	readonly Arn?: (string | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
}
export interface InstanceMarketOptions {
	readonly MarketType?: (string | undefined) | undefined;
	readonly SpotOptions?: (SpotOptions | undefined) | undefined;
}
export interface InstanceRequirements {
	readonly AcceleratorCount?: (AcceleratorCount | undefined) | undefined;
	readonly AcceleratorManufacturers?: (string[] | undefined) | undefined;
	readonly AcceleratorNames?: (string[] | undefined) | undefined;
	readonly AcceleratorTotalMemoryMiB?: (AcceleratorTotalMemoryMiB | undefined) | undefined;
	readonly AcceleratorTypes?: (string[] | undefined) | undefined;
	readonly AllowedInstanceTypes?: (string[] | undefined) | undefined;
	readonly BareMetal?: (string | undefined) | undefined;
	readonly BaselineEbsBandwidthMbps?: (BaselineEbsBandwidthMbps | undefined) | undefined;
	readonly BurstablePerformance?: (string | undefined) | undefined;
	readonly CpuManufacturers?: (string[] | undefined) | undefined;
	readonly ExcludedInstanceTypes?: (string[] | undefined) | undefined;
	readonly InstanceGenerations?: (string[] | undefined) | undefined;
	readonly LocalStorage?: (string | undefined) | undefined;
	readonly LocalStorageTypes?: (string[] | undefined) | undefined;
	readonly MemoryGiBPerVCpu?: (MemoryGiBPerVCpu | undefined) | undefined;
	readonly MemoryMiB?: (MemoryMiB | undefined) | undefined;
	readonly NetworkBandwidthGbps?: (NetworkBandwidthGbps | undefined) | undefined;
	readonly NetworkInterfaceCount?: (NetworkInterfaceCount | undefined) | undefined;
	readonly OnDemandMaxPricePercentageOverLowestPrice?: (number | undefined) | undefined;
	readonly RequireHibernateSupport?: (boolean | undefined) | undefined;
	readonly SpotMaxPricePercentageOverLowestPrice?: (number | undefined) | undefined;
	readonly TotalLocalStorageGB?: (TotalLocalStorageGB | undefined) | undefined;
	readonly VCpuCount?: (VCpuCount | undefined) | undefined;
}
export interface Ipv4PrefixSpecification {
	readonly Ipv4Prefix?: (string | undefined) | undefined;
}
export interface Ipv6Add {
	readonly Ipv6Address?: (string | undefined) | undefined;
}
export interface Ipv6PrefixSpecification {
	readonly Ipv6Prefix?: (string | undefined) | undefined;
}
export interface LaunchTemplateData {
	readonly BlockDeviceMappings?: (BlockDeviceMapping[] | undefined) | undefined;
	readonly CapacityReservationSpecification?: (CapacityReservationSpecification | undefined) | undefined;
	readonly CpuOptions?: (CpuOptions | undefined) | undefined;
	readonly CreditSpecification?: (CreditSpecification | undefined) | undefined;
	readonly DisableApiStop?: (boolean | undefined) | undefined;
	readonly DisableApiTermination?: (boolean | undefined) | undefined;
	readonly EbsOptimized?: (boolean | undefined) | undefined;
	readonly ElasticGpuSpecifications?: (ElasticGpuSpecification[] | undefined) | undefined;
	readonly ElasticInferenceAccelerators?: (LaunchTemplateElasticInferenceAccelerator[] | undefined) | undefined;
	readonly EnclaveOptions?: (EnclaveOptions | undefined) | undefined;
	readonly HibernationOptions?: (HibernationOptions | undefined) | undefined;
	readonly IamInstanceProfile?: (IamInstanceProfile | undefined) | undefined;
	readonly ImageId?: (string | undefined) | undefined;
	readonly InstanceInitiatedShutdownBehavior?: (string | undefined) | undefined;
	readonly InstanceMarketOptions?: (InstanceMarketOptions | undefined) | undefined;
	readonly InstanceRequirements?: (InstanceRequirements | undefined) | undefined;
	readonly InstanceType?: (string | undefined) | undefined;
	readonly KernelId?: (string | undefined) | undefined;
	readonly KeyName?: (string | undefined) | undefined;
	readonly LicenseSpecifications?: (LicenseSpecification[] | undefined) | undefined;
	readonly MaintenanceOptions?: (MaintenanceOptions | undefined) | undefined;
	readonly MetadataOptions?: (MetadataOptions | undefined) | undefined;
	readonly Monitoring?: (Monitoring | undefined) | undefined;
	readonly NetworkInterfaces?: (NetworkInterface[] | undefined) | undefined;
	readonly Placement?: (Placement | undefined) | undefined;
	readonly PrivateDnsNameOptions?: (PrivateDnsNameOptions | undefined) | undefined;
	readonly RamDiskId?: (string | undefined) | undefined;
	readonly SecurityGroupIds?: (string[] | undefined) | undefined;
	readonly SecurityGroups?: (string[] | undefined) | undefined;
	readonly TagSpecifications?: (TagSpecification[] | undefined) | undefined;
	readonly UserData?: (string | undefined) | undefined;
}
export interface LaunchTemplateElasticInferenceAccelerator {
	readonly Count?: (number | undefined) | undefined;
	readonly Type?: (string | undefined) | undefined;
}
export interface LaunchTemplateTagSpecification {
	readonly ResourceType?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
}
export interface MaintenanceOptions {
	readonly AutoRecovery?: (string | undefined) | undefined;
}
export interface MemoryGiBPerVCpu {
	readonly Max?: (number | undefined) | undefined;
	readonly Min?: (number | undefined) | undefined;
}
export interface MemoryMiB {
	readonly Max?: (number | undefined) | undefined;
	readonly Min?: (number | undefined) | undefined;
}
export interface MetadataOptions {
	readonly HttpEndpoint?: (string | undefined) | undefined;
	readonly HttpProtocolIpv6?: (string | undefined) | undefined;
	readonly HttpPutResponseHopLimit?: (number | undefined) | undefined;
	readonly HttpTokens?: (string | undefined) | undefined;
	readonly InstanceMetadataTags?: (string | undefined) | undefined;
}
export interface Monitoring {
	readonly Enabled?: (boolean | undefined) | undefined;
}
export interface NetworkBandwidthGbps {
	readonly Max?: (number | undefined) | undefined;
	readonly Min?: (number | undefined) | undefined;
}
export interface NetworkInterfaceCount {
	readonly Max?: (number | undefined) | undefined;
	readonly Min?: (number | undefined) | undefined;
}
export interface PrivateIpAdd {
	readonly Primary?: (boolean | undefined) | undefined;
	readonly PrivateIpAddress?: (string | undefined) | undefined;
}
export interface SpotOptions {
	readonly BlockDurationMinutes?: (number | undefined) | undefined;
	readonly InstanceInterruptionBehavior?: (string | undefined) | undefined;
	readonly MaxPrice?: (string | undefined) | undefined;
	readonly SpotInstanceType?: (string | undefined) | undefined;
	readonly ValidUntil?: (string | undefined) | undefined;
}
export interface TotalLocalStorageGB {
	readonly Max?: (number | undefined) | undefined;
	readonly Min?: (number | undefined) | undefined;
}
export interface VCpuCount {
	readonly Max?: (number | undefined) | undefined;
	readonly Min?: (number | undefined) | undefined;
}
export interface Icmp {
	readonly Code?: (number | undefined) | undefined;
	readonly Type?: (number | undefined) | undefined;
}
export interface PortRange {
	readonly From?: (number | undefined) | undefined;
	readonly To?: (number | undefined) | undefined;
}
export interface AccessScopePathRequest {
	readonly Destination?: (PathStatementRequest | undefined) | undefined;
	readonly Source?: (PathStatementRequest | undefined) | undefined;
	readonly ThroughResources?: (ThroughResourcesStatementRequest[] | undefined) | undefined;
}
export interface PacketHeaderStatementRequest {
	readonly DestinationAddresses?: (string[] | undefined) | undefined;
	readonly DestinationPorts?: (string[] | undefined) | undefined;
	readonly DestinationPrefixLists?: (string[] | undefined) | undefined;
	readonly Protocols?: (string[] | undefined) | undefined;
	readonly SourceAddresses?: (string[] | undefined) | undefined;
	readonly SourcePorts?: (string[] | undefined) | undefined;
	readonly SourcePrefixLists?: (string[] | undefined) | undefined;
}
export interface PathStatementRequest {
	readonly PacketHeaderStatement?: (PacketHeaderStatementRequest | undefined) | undefined;
	readonly ResourceStatement?: (ResourceStatementRequest | undefined) | undefined;
}
export interface ResourceStatementRequest {
	readonly ResourceTypes?: (string[] | undefined) | undefined;
	readonly Resources?: (string[] | undefined) | undefined;
}
export interface ThroughResourcesStatementRequest {
	readonly ResourceStatement?: (ResourceStatementRequest | undefined) | undefined;
}
export interface AdditionalDetail {
	readonly AdditionalDetailType?: (string | undefined) | undefined;
	readonly Component?: (AnalysisComponent | undefined) | undefined;
}
export interface AlternatePathHint {
	readonly ComponentArn?: (string | undefined) | undefined;
	readonly ComponentId?: (string | undefined) | undefined;
}
export interface AnalysisAclRule {
	readonly Cidr?: (string | undefined) | undefined;
	readonly Egress?: (boolean | undefined) | undefined;
	readonly PortRange?: (PortRange | undefined) | undefined;
	readonly Protocol?: (string | undefined) | undefined;
	readonly RuleAction?: (string | undefined) | undefined;
	readonly RuleNumber?: (number | undefined) | undefined;
}
export interface AnalysisComponent {
	readonly Arn?: (string | undefined) | undefined;
	readonly Id?: (string | undefined) | undefined;
}
export interface AnalysisLoadBalancerListener {
	readonly InstancePort?: (number | undefined) | undefined;
	readonly LoadBalancerPort?: (number | undefined) | undefined;
}
export interface AnalysisLoadBalancerTarget {
	readonly Address?: (string | undefined) | undefined;
	readonly AvailabilityZone?: (string | undefined) | undefined;
	readonly Instance?: (AnalysisComponent | undefined) | undefined;
	readonly Port?: (number | undefined) | undefined;
}
export interface AnalysisPacketHeader {
	readonly DestinationAddresses?: (string[] | undefined) | undefined;
	readonly DestinationPortRanges?: (PortRange[] | undefined) | undefined;
	readonly Protocol?: (string | undefined) | undefined;
	readonly SourceAddresses?: (string[] | undefined) | undefined;
	readonly SourcePortRanges?: (PortRange[] | undefined) | undefined;
}
export interface AnalysisRouteTableRoute {
	readonly NatGatewayId?: (string | undefined) | undefined;
	readonly NetworkInterfaceId?: (string | undefined) | undefined;
	readonly Origin?: (string | undefined) | undefined;
	readonly State?: (string | undefined) | undefined;
	readonly TransitGatewayId?: (string | undefined) | undefined;
	readonly VpcPeeringConnectionId?: (string | undefined) | undefined;
	readonly destinationCidr?: (string | undefined) | undefined;
	readonly destinationPrefixListId?: (string | undefined) | undefined;
	readonly egressOnlyInternetGatewayId?: (string | undefined) | undefined;
	readonly gatewayId?: (string | undefined) | undefined;
	readonly instanceId?: (string | undefined) | undefined;
}
export interface AnalysisSecurityGroupRule {
	readonly Cidr?: (string | undefined) | undefined;
	readonly Direction?: (string | undefined) | undefined;
	readonly PortRange?: (PortRange | undefined) | undefined;
	readonly PrefixListId?: (string | undefined) | undefined;
	readonly Protocol?: (string | undefined) | undefined;
	readonly SecurityGroupId?: (string | undefined) | undefined;
}
export interface Explanation {
	readonly Acl?: (AnalysisComponent | undefined) | undefined;
	readonly AclRule?: (AnalysisAclRule | undefined) | undefined;
	readonly Address?: (string | undefined) | undefined;
	readonly Addresses?: (string[] | undefined) | undefined;
	readonly AttachedTo?: (AnalysisComponent | undefined) | undefined;
	readonly AvailabilityZones?: (string[] | undefined) | undefined;
	readonly Cidrs?: (string[] | undefined) | undefined;
	readonly ClassicLoadBalancerListener?: (AnalysisLoadBalancerListener | undefined) | undefined;
	readonly Component?: (AnalysisComponent | undefined) | undefined;
	readonly ComponentAccount?: (string | undefined) | undefined;
	readonly ComponentRegion?: (string | undefined) | undefined;
	readonly CustomerGateway?: (AnalysisComponent | undefined) | undefined;
	readonly Destination?: (AnalysisComponent | undefined) | undefined;
	readonly DestinationVpc?: (AnalysisComponent | undefined) | undefined;
	readonly Direction?: (string | undefined) | undefined;
	readonly ElasticLoadBalancerListener?: (AnalysisComponent | undefined) | undefined;
	readonly ExplanationCode?: (string | undefined) | undefined;
	readonly IngressRouteTable?: (AnalysisComponent | undefined) | undefined;
	readonly InternetGateway?: (AnalysisComponent | undefined) | undefined;
	readonly LoadBalancerArn?: (string | undefined) | undefined;
	readonly LoadBalancerListenerPort?: (number | undefined) | undefined;
	readonly LoadBalancerTarget?: (AnalysisLoadBalancerTarget | undefined) | undefined;
	readonly LoadBalancerTargetGroup?: (AnalysisComponent | undefined) | undefined;
	readonly LoadBalancerTargetGroups?: (AnalysisComponent[] | undefined) | undefined;
	readonly LoadBalancerTargetPort?: (number | undefined) | undefined;
	readonly MissingComponent?: (string | undefined) | undefined;
	readonly NatGateway?: (AnalysisComponent | undefined) | undefined;
	readonly NetworkInterface?: (AnalysisComponent | undefined) | undefined;
	readonly PacketField?: (string | undefined) | undefined;
	readonly Port?: (number | undefined) | undefined;
	readonly PortRanges?: (PortRange[] | undefined) | undefined;
	readonly PrefixList?: (AnalysisComponent | undefined) | undefined;
	readonly Protocols?: (string[] | undefined) | undefined;
	readonly RouteTable?: (AnalysisComponent | undefined) | undefined;
	readonly RouteTableRoute?: (AnalysisRouteTableRoute | undefined) | undefined;
	readonly SecurityGroup?: (AnalysisComponent | undefined) | undefined;
	readonly SecurityGroupRule?: (AnalysisSecurityGroupRule | undefined) | undefined;
	readonly SecurityGroups?: (AnalysisComponent[] | undefined) | undefined;
	readonly SourceVpc?: (AnalysisComponent | undefined) | undefined;
	readonly State?: (string | undefined) | undefined;
	readonly Subnet?: (AnalysisComponent | undefined) | undefined;
	readonly SubnetRouteTable?: (AnalysisComponent | undefined) | undefined;
	readonly TransitGateway?: (AnalysisComponent | undefined) | undefined;
	readonly TransitGatewayAttachment?: (AnalysisComponent | undefined) | undefined;
	readonly TransitGatewayRouteTable?: (AnalysisComponent | undefined) | undefined;
	readonly TransitGatewayRouteTableRoute?: (TransitGatewayRouteTableRoute | undefined) | undefined;
	readonly Vpc?: (AnalysisComponent | undefined) | undefined;
	readonly VpcPeeringConnection?: (AnalysisComponent | undefined) | undefined;
	readonly VpnConnection?: (AnalysisComponent | undefined) | undefined;
	readonly VpnGateway?: (AnalysisComponent | undefined) | undefined;
	readonly vpcEndpoint?: (AnalysisComponent | undefined) | undefined;
}
export interface PathComponent {
	readonly AclRule?: (AnalysisAclRule | undefined) | undefined;
	readonly AdditionalDetails?: (AdditionalDetail[] | undefined) | undefined;
	readonly Component?: (AnalysisComponent | undefined) | undefined;
	readonly DestinationVpc?: (AnalysisComponent | undefined) | undefined;
	readonly ElasticLoadBalancerListener?: (AnalysisComponent | undefined) | undefined;
	readonly Explanations?: (Explanation[] | undefined) | undefined;
	readonly InboundHeader?: (AnalysisPacketHeader | undefined) | undefined;
	readonly OutboundHeader?: (AnalysisPacketHeader | undefined) | undefined;
	readonly RouteTableRoute?: (AnalysisRouteTableRoute | undefined) | undefined;
	readonly SecurityGroupRule?: (AnalysisSecurityGroupRule | undefined) | undefined;
	readonly SequenceNumber?: (number | undefined) | undefined;
	readonly SourceVpc?: (AnalysisComponent | undefined) | undefined;
	readonly Subnet?: (AnalysisComponent | undefined) | undefined;
	readonly TransitGateway?: (AnalysisComponent | undefined) | undefined;
	readonly TransitGatewayRouteTableRoute?: (TransitGatewayRouteTableRoute | undefined) | undefined;
	readonly Vpc?: (AnalysisComponent | undefined) | undefined;
}
export interface TransitGatewayRouteTableRoute {
	readonly AttachmentId?: (string | undefined) | undefined;
	readonly DestinationCidr?: (string | undefined) | undefined;
	readonly PrefixListId?: (string | undefined) | undefined;
	readonly ResourceId?: (string | undefined) | undefined;
	readonly ResourceType?: (string | undefined) | undefined;
	readonly RouteOrigin?: (string | undefined) | undefined;
	readonly State?: (string | undefined) | undefined;
}
export interface Entry {
	readonly Cidr: string;
	readonly Description?: (string | undefined) | undefined;
}
export interface Egress {
	readonly CidrIp?: (string | undefined) | undefined;
	readonly CidrIpv6?: (string | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly DestinationPrefixListId?: (string | undefined) | undefined;
	readonly DestinationSecurityGroupId?: (string | undefined) | undefined;
	readonly FromPort?: (number | undefined) | undefined;
	readonly IpProtocol: string;
	readonly ToPort?: (number | undefined) | undefined;
}
export interface Ingress {
	readonly CidrIp?: (string | undefined) | undefined;
	readonly CidrIpv6?: (string | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly FromPort?: (number | undefined) | undefined;
	readonly IpProtocol: string;
	readonly SourcePrefixListId?: (string | undefined) | undefined;
	readonly SourceSecurityGroupId?: (string | undefined) | undefined;
	readonly SourceSecurityGroupName?: (string | undefined) | undefined;
	readonly SourceSecurityGroupOwnerId?: (string | undefined) | undefined;
	readonly ToPort?: (number | undefined) | undefined;
}
export interface ClassicLoadBalancer {
	readonly Name: string;
}
export interface ClassicLoadBalancersConfig {
	readonly ClassicLoadBalancers: ClassicLoadBalancer[];
}
export interface EbsBlockDevice {
	readonly DeleteOnTermination?: (boolean | undefined) | undefined;
	readonly Encrypted?: (boolean | undefined) | undefined;
	readonly Iops?: (number | undefined) | undefined;
	readonly SnapshotId?: (string | undefined) | undefined;
	readonly VolumeSize?: (number | undefined) | undefined;
	readonly VolumeType?: (string | undefined) | undefined;
}
export interface FleetLaunchTemplateSpecification {
	readonly LaunchTemplateId?: (string | undefined) | undefined;
	readonly LaunchTemplateName?: (string | undefined) | undefined;
	readonly Version: string;
}
export interface GroupIdentifier {
	readonly GroupId: string;
}
export interface IamInstanceProfileSpecification {
	readonly Arn?: (string | undefined) | undefined;
}
export interface InstanceNetworkInterfaceSpecification {
	readonly AssociatePublicIpAddress?: (boolean | undefined) | undefined;
	readonly DeleteOnTermination?: (boolean | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly DeviceIndex?: (number | undefined) | undefined;
	readonly Groups?: (string[] | undefined) | undefined;
	readonly Ipv6AddressCount?: (number | undefined) | undefined;
	readonly Ipv6Addresses?: (InstanceIpv6Address[] | undefined) | undefined;
	readonly NetworkInterfaceId?: (string | undefined) | undefined;
	readonly PrivateIpAddresses?: (PrivateIpAddressSpecification[] | undefined) | undefined;
	readonly SecondaryPrivateIpAddressCount?: (number | undefined) | undefined;
	readonly SubnetId?: (string | undefined) | undefined;
}
export interface LaunchTemplateConfig {
	readonly LaunchTemplateSpecification?: (FleetLaunchTemplateSpecification | undefined) | undefined;
	readonly Overrides?: (LaunchTemplateOverrides[] | undefined) | undefined;
}
export interface LaunchTemplateOverrides {
	readonly AvailabilityZone?: (string | undefined) | undefined;
	readonly InstanceRequirements?: (InstanceRequirementsRequest | undefined) | undefined;
	readonly InstanceType?: (string | undefined) | undefined;
	readonly Priority?: (number | undefined) | undefined;
	readonly SpotPrice?: (string | undefined) | undefined;
	readonly SubnetId?: (string | undefined) | undefined;
	readonly WeightedCapacity?: (number | undefined) | undefined;
}
export interface LoadBalancersConfig {
	readonly ClassicLoadBalancersConfig?: (ClassicLoadBalancersConfig | undefined) | undefined;
	readonly TargetGroupsConfig?: (TargetGroupsConfig | undefined) | undefined;
}
export interface SpotCapacityRebalance {
	readonly ReplacementStrategy?: (string | undefined) | undefined;
	readonly TerminationDelay?: (number | undefined) | undefined;
}
export interface SpotFleetLaunchSpecification {
	readonly BlockDeviceMappings?: (BlockDeviceMapping[] | undefined) | undefined;
	readonly EbsOptimized?: (boolean | undefined) | undefined;
	readonly IamInstanceProfile?: (IamInstanceProfileSpecification | undefined) | undefined;
	readonly ImageId: string;
	readonly InstanceRequirements?: (InstanceRequirementsRequest | undefined) | undefined;
	readonly InstanceType?: (string | undefined) | undefined;
	readonly KernelId?: (string | undefined) | undefined;
	readonly KeyName?: (string | undefined) | undefined;
	readonly Monitoring?: (SpotFleetMonitoring | undefined) | undefined;
	readonly NetworkInterfaces?: (InstanceNetworkInterfaceSpecification[] | undefined) | undefined;
	readonly Placement?: (SpotPlacement | undefined) | undefined;
	readonly RamdiskId?: (string | undefined) | undefined;
	readonly SecurityGroups?: (GroupIdentifier[] | undefined) | undefined;
	readonly SpotPrice?: (string | undefined) | undefined;
	readonly SubnetId?: (string | undefined) | undefined;
	readonly TagSpecifications?: (SpotFleetTagSpecification[] | undefined) | undefined;
	readonly UserData?: (string | undefined) | undefined;
	readonly WeightedCapacity?: (number | undefined) | undefined;
}
export interface SpotFleetMonitoring {
	readonly Enabled?: (boolean | undefined) | undefined;
}
export interface SpotFleetRequestConfigData {
	readonly AllocationStrategy?: (string | undefined) | undefined;
	readonly Context?: (string | undefined) | undefined;
	readonly ExcessCapacityTerminationPolicy?: (string | undefined) | undefined;
	readonly IamFleetRole: string;
	readonly InstanceInterruptionBehavior?: (string | undefined) | undefined;
	readonly InstancePoolsToUseCount?: (number | undefined) | undefined;
	readonly LaunchSpecifications?: (SpotFleetLaunchSpecification[] | undefined) | undefined;
	readonly LaunchTemplateConfigs?: (LaunchTemplateConfig[] | undefined) | undefined;
	readonly LoadBalancersConfig?: (LoadBalancersConfig | undefined) | undefined;
	readonly OnDemandAllocationStrategy?: (string | undefined) | undefined;
	readonly OnDemandMaxTotalPrice?: (string | undefined) | undefined;
	readonly OnDemandTargetCapacity?: (number | undefined) | undefined;
	readonly ReplaceUnhealthyInstances?: (boolean | undefined) | undefined;
	readonly SpotMaintenanceStrategies?: (SpotMaintenanceStrategies | undefined) | undefined;
	readonly SpotMaxTotalPrice?: (string | undefined) | undefined;
	readonly SpotPrice?: (string | undefined) | undefined;
	readonly TagSpecifications?: (SpotFleetTagSpecification[] | undefined) | undefined;
	readonly TargetCapacity: number;
	readonly TargetCapacityUnitType?: (string | undefined) | undefined;
	readonly TerminateInstancesWithExpiration?: (boolean | undefined) | undefined;
	readonly Type?: (string | undefined) | undefined;
	readonly ValidFrom?: (string | undefined) | undefined;
	readonly ValidUntil?: (string | undefined) | undefined;
}
export interface SpotFleetTagSpecification {
	readonly ResourceType?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
}
export interface SpotMaintenanceStrategies {
	readonly CapacityRebalance?: (SpotCapacityRebalance | undefined) | undefined;
}
export interface SpotPlacement {
	readonly AvailabilityZone?: (string | undefined) | undefined;
	readonly GroupName?: (string | undefined) | undefined;
	readonly Tenancy?: (string | undefined) | undefined;
}
export interface TargetGroup {
	readonly Arn: string;
}
export interface TargetGroupsConfig {
	readonly TargetGroups: TargetGroup[];
}
export interface PrivateDnsNameOptionsOnLaunch {
	readonly EnableResourceNameDnsAAAARecord?: (boolean | undefined) | undefined;
	readonly EnableResourceNameDnsARecord?: (boolean | undefined) | undefined;
	readonly HostnameType?: (string | undefined) | undefined;
}
export interface TrafficMirrorPortRange {
	readonly FromPort: number;
	readonly ToPort: number;
}
export interface Options {
	readonly ApplianceModeSupport?: (string | undefined) | undefined;
	readonly DnsSupport?: (string | undefined) | undefined;
	readonly Ipv6Support?: (string | undefined) | undefined;
}
export interface TransitGatewayConnectOptions {
	readonly Protocol?: (string | undefined) | undefined;
}
export interface PeeringAttachmentStatus {
	readonly Code?: (string | undefined) | undefined;
	readonly Message?: (string | undefined) | undefined;
}
export interface VpnTunnelOptionsSpecification {
	readonly PreSharedKey?: (string | undefined) | undefined;
	readonly TunnelInsideCidr?: (string | undefined) | undefined;
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

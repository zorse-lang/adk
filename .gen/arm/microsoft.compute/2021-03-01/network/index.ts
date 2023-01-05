import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class cloudServices_roleInstances_networkInterfaces
	extends ArmResource<cloudServices_roleInstances_networkInterfacesComponentInputs>
	implements cloudServices_roleInstances_networkInterfacesComponentOutputs
{
	constructor(entity: ADKEntity, options: cloudServices_roleInstances_networkInterfacesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Compute/cloudServices/roleInstances/networkInterfaces",
			"2021-03-01",
			options,
		);
	}
	public readonly apiVersion: "2021-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/cloudServices/roleInstances/networkInterfaces";
}
export interface cloudServices_roleInstances_networkInterfacesComponentOutputs {
	readonly apiVersion: "2021-03-01";
	readonly id: string;
	readonly type: "Microsoft.Compute/cloudServices/roleInstances/networkInterfaces";
}
export interface cloudServices_roleInstances_networkInterfacesComponentInputs {
	readonly etag?: string;
	readonly extendedLocation?: ExtendedLocation;
	readonly location?: string;
	readonly name: string;
	readonly properties?: NetworkInterfacePropertiesFormat;
	readonly tags?: ResourceTags;
}
export class cloudServices_roleInstances_networkInterfaces_ipconfigurations_publicipaddresses
	extends ArmResource<cloudServices_roleInstances_networkInterfaces_ipconfigurations_publicipaddressesComponentInputs>
	implements cloudServices_roleInstances_networkInterfaces_ipconfigurations_publicipaddressesComponentOutputs
{
	constructor(
		entity: ADKEntity,
		options: cloudServices_roleInstances_networkInterfaces_ipconfigurations_publicipaddressesComponentInputs,
	) {
		super(
			entity,
			options.name,
			"Microsoft.Compute/cloudServices/roleInstances/networkInterfaces/ipconfigurations/publicipaddresses",
			"2021-03-01",
			options,
		);
	}
	public readonly apiVersion: "2021-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/cloudServices/roleInstances/networkInterfaces/ipconfigurations/publicipaddresses";
}
export interface cloudServices_roleInstances_networkInterfaces_ipconfigurations_publicipaddressesComponentOutputs {
	readonly apiVersion: "2021-03-01";
	readonly id: string;
	readonly type: "Microsoft.Compute/cloudServices/roleInstances/networkInterfaces/ipconfigurations/publicipaddresses";
}
export interface cloudServices_roleInstances_networkInterfaces_ipconfigurations_publicipaddressesComponentInputs {
	readonly etag?: string;
	readonly extendedLocation?: ExtendedLocation;
	readonly location?: string;
	readonly name: string;
	readonly properties?: PublicIPAddressPropertiesFormat;
	readonly sku?: PublicIPAddressSku;
	readonly tags?: ResourceTags;
	readonly zones?: string[];
}
export class microsoft_Compute_virtualMachineScaleSets_virtualMachines_networkInterfaces
	extends ArmResource<microsoft_Compute_virtualMachineScaleSets_virtualMachines_networkInterfacesComponentInputs>
	implements microsoft_Compute_virtualMachineScaleSets_virtualMachines_networkInterfacesComponentOutputs
{
	constructor(
		entity: ADKEntity,
		options: microsoft_Compute_virtualMachineScaleSets_virtualMachines_networkInterfacesComponentInputs,
	) {
		super(
			entity,
			options.name,
			"Microsoft.Compute/microsoft.Compute/virtualMachineScaleSets/virtualMachines/networkInterfaces",
			"2021-03-01",
			options,
		);
	}
	public readonly apiVersion: "2021-03-01";
	public readonly id: string;
	public readonly type: "microsoft.Compute/virtualMachineScaleSets/virtualMachines/networkInterfaces";
}
export interface microsoft_Compute_virtualMachineScaleSets_virtualMachines_networkInterfacesComponentOutputs {
	readonly apiVersion: "2021-03-01";
	readonly id: string;
	readonly type: "microsoft.Compute/virtualMachineScaleSets/virtualMachines/networkInterfaces";
}
export interface microsoft_Compute_virtualMachineScaleSets_virtualMachines_networkInterfacesComponentInputs {
	readonly etag?: string;
	readonly extendedLocation?: ExtendedLocation;
	readonly location?: string;
	readonly name: string;
	readonly properties?: NetworkInterfacePropertiesFormat;
	readonly tags?: ResourceTags;
}
export class microsoft_Compute_virtualMachineScaleSets_virtualMachines_networkInterfaces_ipConfigurations
	extends ArmResource<microsoft_Compute_virtualMachineScaleSets_virtualMachines_networkInterfaces_ipConfigurationsComponentInputs>
	implements
		microsoft_Compute_virtualMachineScaleSets_virtualMachines_networkInterfaces_ipConfigurationsComponentOutputs
{
	constructor(
		entity: ADKEntity,
		options: microsoft_Compute_virtualMachineScaleSets_virtualMachines_networkInterfaces_ipConfigurationsComponentInputs,
	) {
		super(
			entity,
			options.name,
			"Microsoft.Compute/microsoft.Compute/virtualMachineScaleSets/virtualMachines/networkInterfaces/ipConfigurations",
			"2021-03-01",
			options,
		);
	}
	public readonly apiVersion: "2021-03-01";
	public readonly id: string;
	public readonly type: "microsoft.Compute/virtualMachineScaleSets/virtualMachines/networkInterfaces/ipConfigurations";
}
export interface microsoft_Compute_virtualMachineScaleSets_virtualMachines_networkInterfaces_ipConfigurationsComponentOutputs {
	readonly apiVersion: "2021-03-01";
	readonly id: string;
	readonly type: "microsoft.Compute/virtualMachineScaleSets/virtualMachines/networkInterfaces/ipConfigurations";
}
export interface microsoft_Compute_virtualMachineScaleSets_virtualMachines_networkInterfaces_ipConfigurationsComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: NetworkInterfaceIPConfigurationPropertiesFormat;
}
export class virtualMachineScaleSets_virtualMachines_networkInterfaces_ipconfigurations_publicipaddresses
	extends ArmResource<virtualMachineScaleSets_virtualMachines_networkInterfaces_ipconfigurations_publicipaddressesComponentInputs>
	implements
		virtualMachineScaleSets_virtualMachines_networkInterfaces_ipconfigurations_publicipaddressesComponentOutputs
{
	constructor(
		entity: ADKEntity,
		options: virtualMachineScaleSets_virtualMachines_networkInterfaces_ipconfigurations_publicipaddressesComponentInputs,
	) {
		super(
			entity,
			options.name,
			"Microsoft.Compute/virtualMachineScaleSets/virtualMachines/networkInterfaces/ipconfigurations/publicipaddresses",
			"2021-03-01",
			options,
		);
	}
	public readonly apiVersion: "2021-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/virtualMachineScaleSets/virtualMachines/networkInterfaces/ipconfigurations/publicipaddresses";
}
export interface virtualMachineScaleSets_virtualMachines_networkInterfaces_ipconfigurations_publicipaddressesComponentOutputs {
	readonly apiVersion: "2021-03-01";
	readonly id: string;
	readonly type: "Microsoft.Compute/virtualMachineScaleSets/virtualMachines/networkInterfaces/ipconfigurations/publicipaddresses";
}
export interface virtualMachineScaleSets_virtualMachines_networkInterfaces_ipconfigurations_publicipaddressesComponentInputs {
	readonly etag?: string;
	readonly extendedLocation?: ExtendedLocation;
	readonly location?: string;
	readonly name: string;
	readonly properties?: PublicIPAddressPropertiesFormat;
	readonly sku?: PublicIPAddressSku;
	readonly tags?: ResourceTags;
	readonly zones?: string[];
}
export interface ApplicationGatewayBackendAddress {
	readonly fqdn?: string;
	readonly ipAddress?: string;
}
export interface ApplicationGatewayBackendAddressPool {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: ApplicationGatewayBackendAddressPoolPropertiesFormat;
	readonly type?: string;
}
export interface ApplicationGatewayBackendAddressPoolPropertiesFormat {
	readonly backendAddresses?: ApplicationGatewayBackendAddress[];
	readonly backendIPConfigurations?: NetworkInterfaceIPConfiguration[];
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface ApplicationGatewayIPConfiguration {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: ApplicationGatewayIPConfigurationPropertiesFormat;
	readonly type?: string;
}
export interface ApplicationGatewayIPConfigurationPropertiesFormat {
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly subnet?: SubResource;
}
export interface ApplicationSecurityGroup {
	readonly etag?: string;
	readonly id?: string;
	readonly location?: string;
	readonly name?: string;
	readonly properties?: ApplicationSecurityGroupPropertiesFormat;
	readonly tags?: ResourceTags;
	readonly type?: string;
}
export interface ApplicationSecurityGroupPropertiesFormat {
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly resourceGuid?: string;
}
export interface BackendAddressPool {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: BackendAddressPoolPropertiesFormat;
	readonly type?: string;
}
export interface BackendAddressPoolPropertiesFormat {
	readonly backendIPConfigurations?: NetworkInterfaceIPConfiguration[];
	readonly loadBalancerBackendAddresses?: LoadBalancerBackendAddress[];
	readonly loadBalancingRules?: SubResource[];
	readonly location?: string;
	readonly outboundRule?: SubResource;
	readonly outboundRules?: SubResource[];
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly tunnelInterfaces?: GatewayLoadBalancerTunnelInterface[];
}
export interface CustomDnsConfigPropertiesFormat {
	readonly fqdn?: string;
	readonly ipAddresses?: string[];
}
export interface DdosSettings {
	readonly ddosCustomPolicy?: SubResource;
	readonly protectedIP?: boolean;
	readonly protectionCoverage?: "Basic" | "Standard";
}
export interface Delegation {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: ServiceDelegationPropertiesFormat;
	readonly type?: string;
}
export interface ExtendedLocation {
	readonly name?: string;
	readonly type?: "EdgeZone";
}
export interface FlowLog {
	readonly etag?: string;
	readonly id?: string;
	readonly location?: string;
	readonly name?: string;
	readonly properties?: FlowLogPropertiesFormat;
	readonly tags?: ResourceTags;
	readonly type?: string;
}
export interface FlowLogFormatParameters {
	readonly type?: "JSON";
	readonly version?: number;
}
export interface FlowLogPropertiesFormat {
	readonly enabled?: boolean;
	readonly flowAnalyticsConfiguration?: TrafficAnalyticsProperties;
	readonly format?: FlowLogFormatParameters;
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly retentionPolicy?: RetentionPolicyParameters;
	readonly storageId: string;
	readonly targetResourceGuid?: string;
	readonly targetResourceId: string;
}
export interface FrontendIPConfiguration {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: FrontendIPConfigurationPropertiesFormat;
	readonly type?: string;
	readonly zones?: string[];
}
export interface FrontendIPConfigurationPropertiesFormat {
	readonly gatewayLoadBalancer?: SubResource;
	readonly inboundNatPools?: SubResource[];
	readonly inboundNatRules?: SubResource[];
	readonly loadBalancingRules?: SubResource[];
	readonly outboundRules?: SubResource[];
	readonly privateIPAddress?: string;
	readonly privateIPAddressVersion?: "IPv4" | "IPv6";
	readonly privateIPAllocationMethod?: "Dynamic" | "Static";
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly publicIPAddress?: PublicIPAddress;
	readonly publicIPPrefix?: SubResource;
	readonly subnet?: Subnet;
}
export interface GatewayLoadBalancerTunnelInterface {
	readonly identifier?: number;
	readonly port?: number;
	readonly protocol?: "Native" | "None" | "VXLAN";
	readonly type?: "External" | "Internal" | "None";
}
export interface InboundNatRule {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: InboundNatRulePropertiesFormat;
	readonly type?: string;
}
export interface InboundNatRulePropertiesFormat {
	readonly backendAddressPool?: SubResource;
	readonly backendIPConfiguration?: NetworkInterfaceIPConfiguration;
	readonly backendPort?: number;
	readonly enableFloatingIP?: boolean;
	readonly enableTcpReset?: boolean;
	readonly frontendIPConfiguration?: SubResource;
	readonly frontendPort?: number;
	readonly frontendPortRangeEnd?: number;
	readonly frontendPortRangeStart?: number;
	readonly idleTimeoutInMinutes?: number;
	readonly protocol?: "All" | "Tcp" | "Udp";
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface IPConfiguration {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: IPConfigurationPropertiesFormat;
}
export interface IPConfigurationProfile {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: IPConfigurationProfilePropertiesFormat;
	readonly type?: string;
}
export interface IPConfigurationProfilePropertiesFormat {
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly subnet?: Subnet;
}
export interface IPConfigurationPropertiesFormat {
	readonly privateIPAddress?: string;
	readonly privateIPAllocationMethod?: "Dynamic" | "Static";
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly publicIPAddress?: PublicIPAddress;
	readonly subnet?: Subnet;
}
export interface IpTag {
	readonly ipTagType?: string;
	readonly tag?: string;
}
export interface LoadBalancerBackendAddress {
	readonly name?: string;
	readonly properties?: LoadBalancerBackendAddressPropertiesFormat;
}
export interface LoadBalancerBackendAddressPropertiesFormat {
	readonly ipAddress?: string;
	readonly loadBalancerFrontendIPConfiguration?: SubResource;
	readonly networkInterfaceIPConfiguration?: SubResource;
	readonly subnet?: SubResource;
	readonly virtualNetwork?: SubResource;
}
export interface NatGateway {
	readonly etag?: string;
	readonly id?: string;
	readonly location?: string;
	readonly name?: string;
	readonly properties?: NatGatewayPropertiesFormat;
	readonly sku?: NatGatewaySku;
	readonly tags?: ResourceTags;
	readonly type?: string;
	readonly zones?: string[];
}
export interface NatGatewayPropertiesFormat {
	readonly idleTimeoutInMinutes?: number;
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly publicIpAddresses?: SubResource[];
	readonly publicIpPrefixes?: SubResource[];
	readonly resourceGuid?: string;
	readonly subnets?: SubResource[];
}
export interface NatGatewaySku {
	readonly name?: "Standard";
}
export interface NetworkInterface {
	readonly etag?: string;
	readonly extendedLocation?: ExtendedLocation;
	readonly id?: string;
	readonly location?: string;
	readonly name?: string;
	readonly properties?: NetworkInterfacePropertiesFormat;
	readonly tags?: ResourceTags;
	readonly type?: string;
}
export interface NetworkInterfaceDnsSettings {
	readonly appliedDnsServers?: string[];
	readonly dnsServers?: string[];
	readonly internalDnsNameLabel?: string;
	readonly internalDomainNameSuffix?: string;
	readonly internalFqdn?: string;
}
export interface NetworkInterfaceIPConfiguration {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: NetworkInterfaceIPConfigurationPropertiesFormat;
	readonly type?: string;
}
export interface NetworkInterfaceIPConfigurationPrivateLinkConnectionProperties {
	readonly fqdns?: string[];
	readonly groupId?: string;
	readonly requiredMemberName?: string;
}
export interface NetworkInterfaceIPConfigurationPropertiesFormat {
	readonly applicationGatewayBackendAddressPools?: ApplicationGatewayBackendAddressPool[];
	readonly applicationSecurityGroups?: ApplicationSecurityGroup[];
	readonly gatewayLoadBalancer?: SubResource;
	readonly loadBalancerBackendAddressPools?: BackendAddressPool[];
	readonly loadBalancerInboundNatRules?: InboundNatRule[];
	readonly primary?: boolean;
	readonly privateIPAddress?: string;
	readonly privateIPAddressVersion?: "IPv4" | "IPv6";
	readonly privateIPAllocationMethod?: "Dynamic" | "Static";
	readonly privateLinkConnectionProperties?: NetworkInterfaceIPConfigurationPrivateLinkConnectionProperties;
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly publicIPAddress?: PublicIPAddress;
	readonly subnet?: Subnet;
	readonly virtualNetworkTaps?: VirtualNetworkTap[];
}
export interface NetworkInterfacePropertiesFormat {
	readonly dnsSettings?: NetworkInterfaceDnsSettings;
	readonly dscpConfiguration?: SubResource;
	readonly enableAcceleratedNetworking?: boolean;
	readonly enableIPForwarding?: boolean;
	readonly hostedWorkloads?: string[];
	readonly ipConfigurations?: NetworkInterfaceIPConfiguration[];
	readonly macAddress?: string;
	readonly migrationPhase?: "Abort" | "Commit" | "Committed" | "None" | "Prepare";
	readonly networkSecurityGroup?: NetworkSecurityGroup;
	readonly nicType?: "Elastic" | "Standard";
	readonly primary?: boolean;
	readonly privateEndpoint?: PrivateEndpoint;
	readonly privateLinkService?: PrivateLinkService;
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly resourceGuid?: string;
	readonly tapConfigurations?: NetworkInterfaceTapConfiguration[];
	readonly virtualMachine?: SubResource;
	readonly workloadType?: string;
}
export interface NetworkInterfaceTapConfiguration {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: NetworkInterfaceTapConfigurationPropertiesFormat;
	readonly type?: string;
}
export interface NetworkInterfaceTapConfigurationPropertiesFormat {
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly virtualNetworkTap?: VirtualNetworkTap;
}
export interface NetworkSecurityGroup {
	readonly etag?: string;
	readonly id?: string;
	readonly location?: string;
	readonly name?: string;
	readonly properties?: NetworkSecurityGroupPropertiesFormat;
	readonly tags?: ResourceTags;
	readonly type?: string;
}
export interface NetworkSecurityGroupPropertiesFormat {
	readonly defaultSecurityRules?: SecurityRule[];
	readonly flowLogs?: FlowLog[];
	readonly networkInterfaces?: NetworkInterface[];
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly resourceGuid?: string;
	readonly securityRules?: SecurityRule[];
	readonly subnets?: Subnet[];
}
export interface PrivateEndpoint {
	readonly etag?: string;
	readonly extendedLocation?: ExtendedLocation;
	readonly id?: string;
	readonly location?: string;
	readonly name?: string;
	readonly properties?: PrivateEndpointProperties;
	readonly tags?: ResourceTags;
	readonly type?: string;
}
export interface PrivateEndpointConnection {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: PrivateEndpointConnectionProperties;
	readonly type?: string;
}
export interface PrivateEndpointConnectionProperties {
	readonly linkIdentifier?: string;
	readonly privateEndpoint?: PrivateEndpoint;
	readonly privateLinkServiceConnectionState?: PrivateLinkServiceConnectionState;
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface PrivateEndpointIPConfiguration {
	readonly etag?: string;
	readonly name?: string;
	readonly properties?: PrivateEndpointIPConfigurationProperties;
	readonly type?: string;
}
export interface PrivateEndpointIPConfigurationProperties {
	readonly groupId?: string;
	readonly memberName?: string;
	readonly privateIPAddress?: string;
}
export interface PrivateEndpointProperties {
	readonly applicationSecurityGroups?: ApplicationSecurityGroup[];
	readonly customDnsConfigs?: CustomDnsConfigPropertiesFormat[];
	readonly customNetworkInterfaceName?: string;
	readonly ipConfigurations?: PrivateEndpointIPConfiguration[];
	readonly manualPrivateLinkServiceConnections?: PrivateLinkServiceConnection[];
	readonly networkInterfaces?: NetworkInterface[];
	readonly privateLinkServiceConnections?: PrivateLinkServiceConnection[];
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly subnet?: Subnet;
}
export interface PrivateLinkService {
	readonly etag?: string;
	readonly extendedLocation?: ExtendedLocation;
	readonly id?: string;
	readonly location?: string;
	readonly name?: string;
	readonly properties?: PrivateLinkServiceProperties;
	readonly tags?: ResourceTags;
	readonly type?: string;
}
export interface PrivateLinkServiceConnection {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: PrivateLinkServiceConnectionProperties;
	readonly type?: string;
}
export interface PrivateLinkServiceConnectionProperties {
	readonly groupIds?: string[];
	readonly privateLinkServiceConnectionState?: PrivateLinkServiceConnectionState;
	readonly privateLinkServiceId?: string;
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly requestMessage?: string;
}
export interface PrivateLinkServiceConnectionState {
	readonly actionsRequired?: string;
	readonly description?: string;
	readonly status?: string;
}
export interface PrivateLinkServiceIpConfiguration {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: PrivateLinkServiceIpConfigurationProperties;
	readonly type?: string;
}
export interface PrivateLinkServiceIpConfigurationProperties {
	readonly primary?: boolean;
	readonly privateIPAddress?: string;
	readonly privateIPAddressVersion?: "IPv4" | "IPv6";
	readonly privateIPAllocationMethod?: "Dynamic" | "Static";
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly subnet?: Subnet;
}
export interface PrivateLinkServiceProperties {
	readonly alias?: string;
	readonly autoApproval?: PrivateLinkServicePropertiesAutoApproval;
	readonly enableProxyProtocol?: boolean;
	readonly fqdns?: string[];
	readonly ipConfigurations?: PrivateLinkServiceIpConfiguration[];
	readonly loadBalancerFrontendIpConfigurations?: FrontendIPConfiguration[];
	readonly networkInterfaces?: NetworkInterface[];
	readonly privateEndpointConnections?: PrivateEndpointConnection[];
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly visibility?: PrivateLinkServicePropertiesVisibility;
}
export interface PrivateLinkServicePropertiesAutoApproval {
	readonly subscriptions?: string[];
}
export interface PrivateLinkServicePropertiesVisibility {
	readonly subscriptions?: string[];
}
export interface PublicIPAddress {
	readonly etag?: string;
	readonly extendedLocation?: ExtendedLocation;
	readonly id?: string;
	readonly location?: string;
	readonly name?: string;
	readonly properties?: PublicIPAddressPropertiesFormat;
	readonly sku?: PublicIPAddressSku;
	readonly tags?: ResourceTags;
	readonly type?: string;
	readonly zones?: string[];
}
export interface PublicIPAddressDnsSettings {
	readonly domainNameLabel?: string;
	readonly fqdn?: string;
	readonly reverseFqdn?: string;
}
export interface PublicIPAddressPropertiesFormat {
	readonly ddosSettings?: DdosSettings;
	readonly deleteOption?: "Delete" | "Detach";
	readonly dnsSettings?: PublicIPAddressDnsSettings;
	readonly idleTimeoutInMinutes?: number;
	readonly ipAddress?: string;
	readonly ipConfiguration?: IPConfiguration;
	readonly ipTags?: IpTag[];
	readonly linkedPublicIPAddress?: PublicIPAddress;
	readonly migrationPhase?: "Abort" | "Commit" | "Committed" | "None" | "Prepare";
	readonly natGateway?: NatGateway;
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly publicIPAddressVersion?: "IPv4" | "IPv6";
	readonly publicIPAllocationMethod?: "Dynamic" | "Static";
	readonly publicIPPrefix?: SubResource;
	readonly resourceGuid?: string;
	readonly servicePublicIPAddress?: PublicIPAddress;
}
export interface PublicIPAddressSku {
	readonly name?: "Basic" | "Standard";
	readonly tier?: "Global" | "Regional";
}
export interface ResourceNavigationLink {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: ResourceNavigationLinkFormat;
	readonly type?: string;
}
export interface ResourceNavigationLinkFormat {
	readonly link?: string;
	readonly linkedResourceType?: string;
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface RetentionPolicyParameters {
	readonly days?: number;
	readonly enabled?: boolean;
}
export interface Route {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: RoutePropertiesFormat;
	readonly type?: string;
}
export interface RoutePropertiesFormat {
	readonly addressPrefix?: string;
	readonly hasBgpOverride?: boolean;
	readonly nextHopIpAddress?: string;
	readonly nextHopType: "Internet" | "None" | "VirtualAppliance" | "VirtualNetworkGateway" | "VnetLocal";
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface RouteTable {
	readonly etag?: string;
	readonly id?: string;
	readonly location?: string;
	readonly name?: string;
	readonly properties?: RouteTablePropertiesFormat;
	readonly tags?: ResourceTags;
	readonly type?: string;
}
export interface RouteTablePropertiesFormat {
	readonly disableBgpRoutePropagation?: boolean;
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly resourceGuid?: string;
	readonly routes?: Route[];
	readonly subnets?: Subnet[];
}
export interface SecurityRule {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: SecurityRulePropertiesFormat;
	readonly type?: string;
}
export interface SecurityRulePropertiesFormat {
	readonly access: "Allow" | "Deny";
	readonly description?: string;
	readonly destinationAddressPrefix?: string;
	readonly destinationAddressPrefixes?: string[];
	readonly destinationApplicationSecurityGroups?: ApplicationSecurityGroup[];
	readonly destinationPortRange?: string;
	readonly destinationPortRanges?: string[];
	readonly direction: "Inbound" | "Outbound";
	readonly priority?: number;
	readonly protocol: "*" | "Ah" | "Esp" | "Icmp" | "Tcp" | "Udp";
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly sourceAddressPrefix?: string;
	readonly sourceAddressPrefixes?: string[];
	readonly sourceApplicationSecurityGroups?: ApplicationSecurityGroup[];
	readonly sourcePortRange?: string;
	readonly sourcePortRanges?: string[];
}
export interface ServiceAssociationLink {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: ServiceAssociationLinkPropertiesFormat;
	readonly type?: string;
}
export interface ServiceAssociationLinkPropertiesFormat {
	readonly allowDelete?: boolean;
	readonly link?: string;
	readonly linkedResourceType?: string;
	readonly locations?: string[];
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface ServiceDelegationPropertiesFormat {
	readonly actions?: string[];
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly serviceName?: string;
}
export interface ServiceEndpointPolicy {
	readonly etag?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly location?: string;
	readonly name?: string;
	readonly properties?: ServiceEndpointPolicyPropertiesFormat;
	readonly tags?: ResourceTags;
	readonly type?: string;
}
export interface ServiceEndpointPolicyDefinition {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: ServiceEndpointPolicyDefinitionPropertiesFormat;
	readonly type?: string;
}
export interface ServiceEndpointPolicyDefinitionPropertiesFormat {
	readonly description?: string;
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly service?: string;
	readonly serviceResources?: string[];
}
export interface ServiceEndpointPolicyPropertiesFormat {
	readonly contextualServiceEndpointPolicies?: string[];
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly resourceGuid?: string;
	readonly serviceAlias?: string;
	readonly serviceEndpointPolicyDefinitions?: ServiceEndpointPolicyDefinition[];
	readonly subnets?: Subnet[];
}
export interface ServiceEndpointPropertiesFormat {
	readonly locations?: string[];
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly service?: string;
}
export interface Subnet {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: SubnetPropertiesFormat;
	readonly type?: string;
}
export interface SubnetPropertiesFormat {
	readonly addressPrefix?: string;
	readonly addressPrefixes?: string[];
	readonly applicationGatewayIpConfigurations?: ApplicationGatewayIPConfiguration[];
	readonly delegations?: Delegation[];
	readonly ipAllocations?: SubResource[];
	readonly ipConfigurationProfiles?: IPConfigurationProfile[];
	readonly ipConfigurations?: IPConfiguration[];
	readonly natGateway?: SubResource;
	readonly networkSecurityGroup?: NetworkSecurityGroup;
	readonly privateEndpointNetworkPolicies?: "Disabled" | "Enabled";
	readonly privateEndpoints?: PrivateEndpoint[];
	readonly privateLinkServiceNetworkPolicies?: "Disabled" | "Enabled";
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly purpose?: string;
	readonly resourceNavigationLinks?: ResourceNavigationLink[];
	readonly routeTable?: RouteTable;
	readonly serviceAssociationLinks?: ServiceAssociationLink[];
	readonly serviceEndpointPolicies?: ServiceEndpointPolicy[];
	readonly serviceEndpoints?: ServiceEndpointPropertiesFormat[];
}
export interface SubResource {
	readonly id?: string;
}
export interface TrafficAnalyticsConfigurationProperties {
	readonly enabled?: boolean;
	readonly trafficAnalyticsInterval?: number;
	readonly workspaceId?: string;
	readonly workspaceRegion?: string;
	readonly workspaceResourceId?: string;
}
export interface TrafficAnalyticsProperties {
	readonly networkWatcherFlowAnalyticsConfiguration?: TrafficAnalyticsConfigurationProperties;
}
export interface VirtualNetworkTap {
	readonly etag?: string;
	readonly id?: string;
	readonly location?: string;
	readonly name?: string;
	readonly properties?: VirtualNetworkTapPropertiesFormat;
	readonly tags?: ResourceTags;
	readonly type?: string;
}
export interface VirtualNetworkTapPropertiesFormat {
	readonly destinationLoadBalancerFrontEndIPConfiguration?: FrontendIPConfiguration;
	readonly destinationNetworkInterfaceIPConfiguration?: NetworkInterfaceIPConfiguration;
	readonly destinationPort?: number;
	readonly networkInterfaceTapConfigurations?: NetworkInterfaceTapConfiguration[];
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly resourceGuid?: string;
}
export default {
	"cloudServices/roleInstances/networkInterfaces": cloudServices_roleInstances_networkInterfaces,
	"cloudServices/roleInstances/networkInterfaces/ipconfigurations/publicipaddresses":
		cloudServices_roleInstances_networkInterfaces_ipconfigurations_publicipaddresses,
	"microsoft.Compute/virtualMachineScaleSets/virtualMachines/networkInterfaces":
		microsoft_Compute_virtualMachineScaleSets_virtualMachines_networkInterfaces,
	"microsoft.Compute/virtualMachineScaleSets/virtualMachines/networkInterfaces/ipConfigurations":
		microsoft_Compute_virtualMachineScaleSets_virtualMachines_networkInterfaces_ipConfigurations,
	"virtualMachineScaleSets/virtualMachines/networkInterfaces/ipconfigurations/publicipaddresses":
		virtualMachineScaleSets_virtualMachines_networkInterfaces_ipconfigurations_publicipaddresses,
};

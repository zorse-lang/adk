import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class virtualMachineScaleSets_virtualMachines_networkInterfaces
	extends ArmResource<virtualMachineScaleSets_virtualMachines_networkInterfacesComponentInputs>
	implements virtualMachineScaleSets_virtualMachines_networkInterfacesComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualMachineScaleSets_virtualMachines_networkInterfacesComponentInputs) {
		super(
			entity,
			options.name,
			"microsoft.Compute/virtualMachineScaleSets/virtualMachines/networkInterfaces",
			"2019-02-01",
			options,
		);
	}
	public readonly apiVersion: "2019-02-01";
	public readonly id: string;
	public readonly type: "microsoft.Compute/virtualMachineScaleSets/virtualMachines/networkInterfaces";
}
export interface virtualMachineScaleSets_virtualMachines_networkInterfacesComponentOutputs {
	readonly apiVersion: "2019-02-01";
	readonly id: string;
	readonly type: "microsoft.Compute/virtualMachineScaleSets/virtualMachines/networkInterfaces";
}
export interface virtualMachineScaleSets_virtualMachines_networkInterfacesComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: NetworkInterfacePropertiesFormat;
	readonly tags?: ResourceTags;
}
export class virtualMachineScaleSets_virtualMachines_networkInterfaces_ipConfigurations
	extends ArmResource<virtualMachineScaleSets_virtualMachines_networkInterfaces_ipConfigurationsComponentInputs>
	implements virtualMachineScaleSets_virtualMachines_networkInterfaces_ipConfigurationsComponentOutputs
{
	constructor(
		entity: ADKEntity,
		options: virtualMachineScaleSets_virtualMachines_networkInterfaces_ipConfigurationsComponentInputs,
	) {
		super(
			entity,
			options.name,
			"microsoft.Compute/virtualMachineScaleSets/virtualMachines/networkInterfaces/ipConfigurations",
			"2019-02-01",
			options,
		);
	}
	public readonly apiVersion: "2019-02-01";
	public readonly id: string;
	public readonly type: "microsoft.Compute/virtualMachineScaleSets/virtualMachines/networkInterfaces/ipConfigurations";
}
export interface virtualMachineScaleSets_virtualMachines_networkInterfaces_ipConfigurationsComponentOutputs {
	readonly apiVersion: "2019-02-01";
	readonly id: string;
	readonly type: "microsoft.Compute/virtualMachineScaleSets/virtualMachines/networkInterfaces/ipConfigurations";
}
export interface virtualMachineScaleSets_virtualMachines_networkInterfaces_ipConfigurationsComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: NetworkInterfaceIPConfigurationPropertiesFormat;
}
export class Microsoft_Compute_virtualMachineScaleSets_virtualMachines_networkInterfaces_ipconfigurations_publicipaddresses
	extends ArmResource<Microsoft_Compute_virtualMachineScaleSets_virtualMachines_networkInterfaces_ipconfigurations_publicipaddressesComponentInputs>
	implements
		Microsoft_Compute_virtualMachineScaleSets_virtualMachines_networkInterfaces_ipconfigurations_publicipaddressesComponentOutputs
{
	constructor(
		entity: ADKEntity,
		options: Microsoft_Compute_virtualMachineScaleSets_virtualMachines_networkInterfaces_ipconfigurations_publicipaddressesComponentInputs,
	) {
		super(
			entity,
			options.name,
			"microsoft.Compute/Microsoft.Compute/virtualMachineScaleSets/virtualMachines/networkInterfaces/ipconfigurations/publicipaddresses",
			"2019-02-01",
			options,
		);
	}
	public readonly apiVersion: "2019-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/virtualMachineScaleSets/virtualMachines/networkInterfaces/ipconfigurations/publicipaddresses";
}
export interface Microsoft_Compute_virtualMachineScaleSets_virtualMachines_networkInterfaces_ipconfigurations_publicipaddressesComponentOutputs {
	readonly apiVersion: "2019-02-01";
	readonly id: string;
	readonly type: "Microsoft.Compute/virtualMachineScaleSets/virtualMachines/networkInterfaces/ipconfigurations/publicipaddresses";
}
export interface Microsoft_Compute_virtualMachineScaleSets_virtualMachines_networkInterfaces_ipconfigurations_publicipaddressesComponentInputs {
	readonly etag?: string;
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
	readonly provisioningState?: string;
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
	readonly provisioningState?: string;
	readonly resourceGuid?: string;
}
export interface BackendAddressPool {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: BackendAddressPoolPropertiesFormat;
}
export interface BackendAddressPoolPropertiesFormat {
	readonly backendIPConfigurations?: NetworkInterfaceIPConfiguration[];
	readonly loadBalancingRules?: SubResource[];
	readonly outboundRule?: SubResource;
	readonly outboundRules?: SubResource[];
	readonly provisioningState?: string;
}
export interface DdosSettings {
	readonly ddosCustomPolicy?: SubResource;
	readonly protectionCoverage?: "Basic" | "Standard";
}
export interface Delegation {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: ServiceDelegationPropertiesFormat;
}
export interface EndpointService {
	readonly id?: string;
}
export interface FrontendIPConfiguration {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: FrontendIPConfigurationPropertiesFormat;
	readonly zones?: string[];
}
export interface FrontendIPConfigurationPropertiesFormat {
	readonly inboundNatPools?: SubResource[];
	readonly inboundNatRules?: SubResource[];
	readonly loadBalancingRules?: SubResource[];
	readonly outboundRules?: SubResource[];
	readonly privateIPAddress?: string;
	readonly privateIPAllocationMethod?: "Dynamic" | "Static";
	readonly provisioningState?: string;
	readonly publicIPAddress?: PublicIPAddress;
	readonly publicIPPrefix?: SubResource;
	readonly subnet?: Subnet;
}
export interface InboundNatRule {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: InboundNatRulePropertiesFormat;
}
export interface InboundNatRulePropertiesFormat {
	readonly backendIPConfiguration?: NetworkInterfaceIPConfiguration;
	readonly backendPort?: number;
	readonly enableFloatingIP?: boolean;
	readonly enableTcpReset?: boolean;
	readonly frontendIPConfiguration?: SubResource;
	readonly frontendPort?: number;
	readonly idleTimeoutInMinutes?: number;
	readonly protocol?: "All" | "Tcp" | "Udp";
	readonly provisioningState?: string;
}
export interface InterfaceEndpoint {
	readonly etag?: string;
	readonly id?: string;
	readonly location?: string;
	readonly name?: string;
	readonly properties?: InterfaceEndpointProperties;
	readonly tags?: ResourceTags;
	readonly type?: string;
}
export interface InterfaceEndpointProperties {
	readonly endpointService?: EndpointService;
	readonly fqdn?: string;
	readonly networkInterfaces?: NetworkInterface[];
	readonly owner?: string;
	readonly provisioningState?: string;
	readonly subnet?: Subnet;
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
	readonly provisioningState?: string;
	readonly subnet?: Subnet;
}
export interface IPConfigurationPropertiesFormat {
	readonly privateIPAddress?: string;
	readonly privateIPAllocationMethod?: "Dynamic" | "Static";
	readonly provisioningState?: string;
	readonly publicIPAddress?: PublicIPAddress;
	readonly subnet?: Subnet;
}
export interface IpTag {
	readonly ipTagType?: string;
	readonly tag?: string;
}
export interface NetworkInterface {
	readonly etag?: string;
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
}
export interface NetworkInterfaceIPConfigurationPropertiesFormat {
	readonly applicationGatewayBackendAddressPools?: ApplicationGatewayBackendAddressPool[];
	readonly applicationSecurityGroups?: ApplicationSecurityGroup[];
	readonly loadBalancerBackendAddressPools?: BackendAddressPool[];
	readonly loadBalancerInboundNatRules?: InboundNatRule[];
	readonly primary?: boolean;
	readonly privateIPAddress?: string;
	readonly privateIPAddressVersion?: "IPv4" | "IPv6";
	readonly privateIPAllocationMethod?: "Dynamic" | "Static";
	readonly provisioningState?: string;
	readonly publicIPAddress?: PublicIPAddress;
	readonly subnet?: Subnet;
	readonly virtualNetworkTaps?: VirtualNetworkTap[];
}
export interface NetworkInterfacePropertiesFormat {
	readonly dnsSettings?: NetworkInterfaceDnsSettings;
	readonly enableAcceleratedNetworking?: boolean;
	readonly enableIPForwarding?: boolean;
	readonly hostedWorkloads?: string[];
	readonly interfaceEndpoint?: InterfaceEndpoint;
	readonly ipConfigurations?: NetworkInterfaceIPConfiguration[];
	readonly macAddress?: string;
	readonly networkSecurityGroup?: NetworkSecurityGroup;
	readonly primary?: boolean;
	readonly provisioningState?: string;
	readonly resourceGuid?: string;
	readonly tapConfigurations?: NetworkInterfaceTapConfiguration[];
	readonly virtualMachine?: SubResource;
}
export interface NetworkInterfaceTapConfiguration {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: NetworkInterfaceTapConfigurationPropertiesFormat;
	readonly type?: string;
}
export interface NetworkInterfaceTapConfigurationPropertiesFormat {
	readonly provisioningState?: string;
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
	readonly networkInterfaces?: NetworkInterface[];
	readonly provisioningState?: string;
	readonly resourceGuid?: string;
	readonly securityRules?: SecurityRule[];
	readonly subnets?: Subnet[];
}
export interface PublicIPAddress {
	readonly etag?: string;
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
	readonly dnsSettings?: PublicIPAddressDnsSettings;
	readonly idleTimeoutInMinutes?: number;
	readonly ipAddress?: string;
	readonly ipConfiguration?: IPConfiguration;
	readonly ipTags?: IpTag[];
	readonly provisioningState?: string;
	readonly publicIPAddressVersion?: "IPv4" | "IPv6";
	readonly publicIPAllocationMethod?: "Dynamic" | "Static";
	readonly publicIPPrefix?: SubResource;
	readonly resourceGuid?: string;
}
export interface PublicIPAddressSku {
	readonly name?: "Basic" | "Standard";
}
export interface ResourceNavigationLink {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: ResourceNavigationLinkFormat;
}
export interface ResourceNavigationLinkFormat {
	readonly link?: string;
	readonly linkedResourceType?: string;
	readonly provisioningState?: string;
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface Route {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: RoutePropertiesFormat;
}
export interface RoutePropertiesFormat {
	readonly addressPrefix?: string;
	readonly nextHopIpAddress?: string;
	readonly nextHopType: "Internet" | "None" | "VirtualAppliance" | "VirtualNetworkGateway" | "VnetLocal";
	readonly provisioningState?: string;
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
	readonly provisioningState?: string;
	readonly routes?: Route[];
	readonly subnets?: Subnet[];
}
export interface SecurityRule {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: SecurityRulePropertiesFormat;
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
	readonly protocol: "" | "Esp" | "Icmp" | "Tcp" | "Udp";
	readonly provisioningState?: string;
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
}
export interface ServiceAssociationLinkPropertiesFormat {
	readonly link?: string;
	readonly linkedResourceType?: string;
	readonly provisioningState?: string;
}
export interface ServiceDelegationPropertiesFormat {
	readonly actions?: string[];
	readonly provisioningState?: string;
	readonly serviceName?: string;
}
export interface ServiceEndpointPolicy {
	readonly etag?: string;
	readonly id?: string;
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
}
export interface ServiceEndpointPolicyDefinitionPropertiesFormat {
	readonly description?: string;
	readonly provisioningState?: string;
	readonly service?: string;
	readonly serviceResources?: string[];
}
export interface ServiceEndpointPolicyPropertiesFormat {
	readonly provisioningState?: string;
	readonly resourceGuid?: string;
	readonly serviceEndpointPolicyDefinitions?: ServiceEndpointPolicyDefinition[];
	readonly subnets?: Subnet[];
}
export interface ServiceEndpointPropertiesFormat {
	readonly locations?: string[];
	readonly provisioningState?: string;
	readonly service?: string;
}
export interface Subnet {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: SubnetPropertiesFormat;
}
export interface SubnetPropertiesFormat {
	readonly addressPrefix?: string;
	readonly addressPrefixes?: string[];
	readonly delegations?: Delegation[];
	readonly interfaceEndpoints?: InterfaceEndpoint[];
	readonly ipConfigurationProfiles?: IPConfigurationProfile[];
	readonly ipConfigurations?: IPConfiguration[];
	readonly natGateway?: SubResource;
	readonly networkSecurityGroup?: NetworkSecurityGroup;
	readonly provisioningState?: string;
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
	readonly provisioningState?: string;
	readonly resourceGuid?: string;
}
export default {
	"virtualMachineScaleSets/virtualMachines/networkInterfaces":
		virtualMachineScaleSets_virtualMachines_networkInterfaces,
	"virtualMachineScaleSets/virtualMachines/networkInterfaces/ipConfigurations":
		virtualMachineScaleSets_virtualMachines_networkInterfaces_ipConfigurations,
	"Microsoft.Compute/virtualMachineScaleSets/virtualMachines/networkInterfaces/ipconfigurations/publicipaddresses":
		Microsoft_Compute_virtualMachineScaleSets_virtualMachines_networkInterfaces_ipconfigurations_publicipaddresses,
};

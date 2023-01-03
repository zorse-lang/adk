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
			"2017-08-01",
			options,
		);
	}
	public readonly apiVersion: "2017-08-01";
	public readonly id: string;
	public readonly type: "microsoft.Compute/virtualMachineScaleSets/virtualMachines/networkInterfaces";
}
export interface virtualMachineScaleSets_virtualMachines_networkInterfacesComponentOutputs {
	readonly apiVersion: "2017-08-01";
	readonly id: string;
	readonly type: "microsoft.Compute/virtualMachineScaleSets/virtualMachines/networkInterfaces";
}
export interface virtualMachineScaleSets_virtualMachines_networkInterfacesComponentInputs {
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: NetworkInterfacePropertiesFormat | undefined;
	readonly tags?: ResourceTags | undefined;
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
			"2017-08-01",
			options,
		);
	}
	public readonly apiVersion: "2017-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/virtualMachineScaleSets/virtualMachines/networkInterfaces/ipconfigurations/publicipaddresses";
}
export interface Microsoft_Compute_virtualMachineScaleSets_virtualMachines_networkInterfaces_ipconfigurations_publicipaddressesComponentOutputs {
	readonly apiVersion: "2017-08-01";
	readonly id: string;
	readonly type: "Microsoft.Compute/virtualMachineScaleSets/virtualMachines/networkInterfaces/ipconfigurations/publicipaddresses";
}
export interface Microsoft_Compute_virtualMachineScaleSets_virtualMachines_networkInterfaces_ipconfigurations_publicipaddressesComponentInputs {
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: PublicIPAddressPropertiesFormat | undefined;
	readonly sku?: PublicIPAddressSku | undefined;
	readonly tags?: ResourceTags | undefined;
	readonly zones?: string[] | undefined;
}
export interface ApplicationGatewayBackendAddress {
	readonly fqdn?: string | undefined;
	readonly ipAddress?: string | undefined;
}
export interface ApplicationGatewayBackendAddressPool {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: ApplicationGatewayBackendAddressPoolPropertiesFormat | undefined;
	readonly type?: string | undefined;
}
export interface ApplicationGatewayBackendAddressPoolPropertiesFormat {
	readonly backendAddresses?: ApplicationGatewayBackendAddress[] | undefined;
	readonly backendIPConfigurations?: NetworkInterfaceIPConfiguration[] | undefined;
	readonly provisioningState?: string | undefined;
}
export interface BackendAddressPool {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: BackendAddressPoolPropertiesFormat | undefined;
}
export interface BackendAddressPoolPropertiesFormat {
	readonly backendIPConfigurations?: NetworkInterfaceIPConfiguration[] | undefined;
	readonly loadBalancingRules?: SubResource[] | undefined;
	readonly outboundNatRule?: SubResource | undefined;
	readonly provisioningState?: string | undefined;
}
export interface InboundNatRule {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: InboundNatRulePropertiesFormat | undefined;
}
export interface InboundNatRulePropertiesFormat {
	readonly backendIPConfiguration?: NetworkInterfaceIPConfiguration | undefined;
	readonly backendPort?: number | undefined;
	readonly enableFloatingIP?: boolean | undefined;
	readonly frontendIPConfiguration?: SubResource | undefined;
	readonly frontendPort?: number | undefined;
	readonly idleTimeoutInMinutes?: number | undefined;
	readonly protocol?: ("Tcp" | "Udp") | undefined;
	readonly provisioningState?: string | undefined;
}
export interface IPConfiguration {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: IPConfigurationPropertiesFormat | undefined;
}
export interface IPConfigurationPropertiesFormat {
	readonly privateIPAddress?: string | undefined;
	readonly privateIPAllocationMethod?: ("Dynamic" | "Static") | undefined;
	readonly provisioningState?: string | undefined;
	readonly publicIPAddress?: PublicIPAddress | undefined;
	readonly subnet?: Subnet | undefined;
}
export interface NetworkInterface {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly location?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: NetworkInterfacePropertiesFormat | undefined;
	readonly tags?: ResourceTags | undefined;
	readonly type?: string | undefined;
}
export interface NetworkInterfaceDnsSettings {
	readonly appliedDnsServers?: string[] | undefined;
	readonly dnsServers?: string[] | undefined;
	readonly internalDnsNameLabel?: string | undefined;
	readonly internalDomainNameSuffix?: string | undefined;
	readonly internalFqdn?: string | undefined;
}
export interface NetworkInterfaceIPConfiguration {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: NetworkInterfaceIPConfigurationPropertiesFormat | undefined;
}
export interface NetworkInterfaceIPConfigurationPropertiesFormat {
	readonly applicationGatewayBackendAddressPools?: ApplicationGatewayBackendAddressPool[] | undefined;
	readonly loadBalancerBackendAddressPools?: BackendAddressPool[] | undefined;
	readonly loadBalancerInboundNatRules?: InboundNatRule[] | undefined;
	readonly primary?: boolean | undefined;
	readonly privateIPAddress?: string | undefined;
	readonly privateIPAddressVersion?: ("IPv4" | "IPv6") | undefined;
	readonly privateIPAllocationMethod?: ("Dynamic" | "Static") | undefined;
	readonly provisioningState?: string | undefined;
	readonly publicIPAddress?: PublicIPAddress | undefined;
	readonly subnet?: Subnet | undefined;
}
export interface NetworkInterfacePropertiesFormat {
	readonly dnsSettings?: NetworkInterfaceDnsSettings | undefined;
	readonly enableAcceleratedNetworking?: boolean | undefined;
	readonly enableIPForwarding?: boolean | undefined;
	readonly ipConfigurations?: NetworkInterfaceIPConfiguration[] | undefined;
	readonly macAddress?: string | undefined;
	readonly networkSecurityGroup?: NetworkSecurityGroup | undefined;
	readonly primary?: boolean | undefined;
	readonly provisioningState?: string | undefined;
	readonly resourceGuid?: string | undefined;
	readonly virtualMachine?: SubResource | undefined;
}
export interface NetworkSecurityGroup {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly location?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: NetworkSecurityGroupPropertiesFormat | undefined;
	readonly tags?: ResourceTags | undefined;
	readonly type?: string | undefined;
}
export interface NetworkSecurityGroupPropertiesFormat {
	readonly defaultSecurityRules?: SecurityRule[] | undefined;
	readonly networkInterfaces?: NetworkInterface[] | undefined;
	readonly provisioningState?: string | undefined;
	readonly resourceGuid?: string | undefined;
	readonly securityRules?: SecurityRule[] | undefined;
	readonly subnets?: Subnet[] | undefined;
}
export interface PublicIPAddress {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly location?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: PublicIPAddressPropertiesFormat | undefined;
	readonly sku?: PublicIPAddressSku | undefined;
	readonly tags?: ResourceTags | undefined;
	readonly type?: string | undefined;
	readonly zones?: string[] | undefined;
}
export interface PublicIPAddressDnsSettings {
	readonly domainNameLabel?: string | undefined;
	readonly fqdn?: string | undefined;
	readonly reverseFqdn?: string | undefined;
}
export interface PublicIPAddressPropertiesFormat {
	readonly dnsSettings?: PublicIPAddressDnsSettings | undefined;
	readonly idleTimeoutInMinutes?: number | undefined;
	readonly ipAddress?: string | undefined;
	readonly ipConfiguration?: IPConfiguration | undefined;
	readonly provisioningState?: string | undefined;
	readonly publicIPAddressVersion?: ("IPv4" | "IPv6") | undefined;
	readonly publicIPAllocationMethod?: ("Dynamic" | "Static") | undefined;
	readonly resourceGuid?: string | undefined;
}
export interface PublicIPAddressSku {
	readonly name?: ("Basic" | "Standard") | undefined;
}
export interface ResourceNavigationLink {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: ResourceNavigationLinkFormat | undefined;
}
export interface ResourceNavigationLinkFormat {
	readonly link?: string | undefined;
	readonly linkedResourceType?: string | undefined;
	readonly provisioningState?: string | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface Route {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: RoutePropertiesFormat | undefined;
}
export interface RoutePropertiesFormat {
	readonly addressPrefix?: string | undefined;
	readonly nextHopIpAddress?: string | undefined;
	readonly nextHopType: "Internet" | "None" | "VirtualAppliance" | "VirtualNetworkGateway" | "VnetLocal";
	readonly provisioningState?: string | undefined;
}
export interface RouteTable {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly location?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: RouteTablePropertiesFormat | undefined;
	readonly tags?: ResourceTags | undefined;
	readonly type?: string | undefined;
}
export interface RouteTablePropertiesFormat {
	readonly provisioningState?: string | undefined;
	readonly routes?: Route[] | undefined;
	readonly subnets?: Subnet[] | undefined;
}
export interface SecurityRule {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: SecurityRulePropertiesFormat | undefined;
}
export interface SecurityRulePropertiesFormat {
	readonly access: "Allow" | "Deny";
	readonly description?: string | undefined;
	readonly destinationAddressPrefix?: string | undefined;
	readonly destinationAddressPrefixes?: string[] | undefined;
	readonly destinationPortRange?: string | undefined;
	readonly destinationPortRanges?: string[] | undefined;
	readonly direction: "Inbound" | "Outbound";
	readonly priority?: number | undefined;
	readonly protocol: "" | "Tcp" | "Udp";
	readonly provisioningState?: string | undefined;
	readonly sourceAddressPrefix?: string | undefined;
	readonly sourceAddressPrefixes?: string[] | undefined;
	readonly sourcePortRange?: string | undefined;
	readonly sourcePortRanges?: string[] | undefined;
}
export interface ServiceEndpointPropertiesFormat {
	readonly locations?: string[] | undefined;
	readonly provisioningState?: string | undefined;
	readonly service?: string | undefined;
}
export interface Subnet {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: SubnetPropertiesFormat | undefined;
}
export interface SubnetPropertiesFormat {
	readonly addressPrefix?: string | undefined;
	readonly ipConfigurations?: IPConfiguration[] | undefined;
	readonly networkSecurityGroup?: NetworkSecurityGroup | undefined;
	readonly provisioningState?: string | undefined;
	readonly resourceNavigationLinks?: ResourceNavigationLink[] | undefined;
	readonly routeTable?: RouteTable | undefined;
	readonly serviceEndpoints?: ServiceEndpointPropertiesFormat[] | undefined;
}
export interface SubResource {
	readonly id?: string | undefined;
}
export default {
	"virtualMachineScaleSets/virtualMachines/networkInterfaces":
		virtualMachineScaleSets_virtualMachines_networkInterfaces,
	"Microsoft.Compute/virtualMachineScaleSets/virtualMachines/networkInterfaces/ipconfigurations/publicipaddresses":
		Microsoft_Compute_virtualMachineScaleSets_virtualMachines_networkInterfaces_ipconfigurations_publicipaddresses,
};

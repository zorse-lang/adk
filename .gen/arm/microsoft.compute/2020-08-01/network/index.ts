import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class Microsoft_Compute_cloudServices_roleInstances_networkInterfaces
	extends ArmResource<Microsoft_Compute_cloudServices_roleInstances_networkInterfacesComponentInputs>
	implements Microsoft_Compute_cloudServices_roleInstances_networkInterfacesComponentOutputs
{
	constructor(
		entity: ADKEntity,
		options: Microsoft_Compute_cloudServices_roleInstances_networkInterfacesComponentInputs,
	) {
		super(
			entity,
			options.name,
			"microsoft.Compute/Microsoft.Compute/cloudServices/roleInstances/networkInterfaces",
			"2020-08-01",
			options,
		);
	}
	public readonly apiVersion: "2020-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/cloudServices/roleInstances/networkInterfaces";
}
export interface Microsoft_Compute_cloudServices_roleInstances_networkInterfacesComponentOutputs {
	readonly apiVersion: "2020-08-01";
	readonly id: string;
	readonly type: "Microsoft.Compute/cloudServices/roleInstances/networkInterfaces";
}
export interface Microsoft_Compute_cloudServices_roleInstances_networkInterfacesComponentInputs {
	readonly etag?: string | undefined;
	readonly extendedLocation?: ExtendedLocation | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: NetworkInterfacePropertiesFormat | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class Microsoft_Compute_cloudServices_roleInstances_networkInterfaces_ipconfigurations_publicipaddresses
	extends ArmResource<Microsoft_Compute_cloudServices_roleInstances_networkInterfaces_ipconfigurations_publicipaddressesComponentInputs>
	implements
		Microsoft_Compute_cloudServices_roleInstances_networkInterfaces_ipconfigurations_publicipaddressesComponentOutputs
{
	constructor(
		entity: ADKEntity,
		options: Microsoft_Compute_cloudServices_roleInstances_networkInterfaces_ipconfigurations_publicipaddressesComponentInputs,
	) {
		super(
			entity,
			options.name,
			"microsoft.Compute/Microsoft.Compute/cloudServices/roleInstances/networkInterfaces/ipconfigurations/publicipaddresses",
			"2020-08-01",
			options,
		);
	}
	public readonly apiVersion: "2020-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/cloudServices/roleInstances/networkInterfaces/ipconfigurations/publicipaddresses";
}
export interface Microsoft_Compute_cloudServices_roleInstances_networkInterfaces_ipconfigurations_publicipaddressesComponentOutputs {
	readonly apiVersion: "2020-08-01";
	readonly id: string;
	readonly type: "Microsoft.Compute/cloudServices/roleInstances/networkInterfaces/ipconfigurations/publicipaddresses";
}
export interface Microsoft_Compute_cloudServices_roleInstances_networkInterfaces_ipconfigurations_publicipaddressesComponentInputs {
	readonly etag?: string | undefined;
	readonly extendedLocation?: ExtendedLocation | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: PublicIPAddressPropertiesFormat | undefined;
	readonly sku?: PublicIPAddressSku | undefined;
	readonly tags?: ResourceTags | undefined;
	readonly zones?: string[] | undefined;
}
export class virtualMachineScaleSets_virtualMachines_networkInterfaces
	extends ArmResource<virtualMachineScaleSets_virtualMachines_networkInterfacesComponentInputs>
	implements virtualMachineScaleSets_virtualMachines_networkInterfacesComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualMachineScaleSets_virtualMachines_networkInterfacesComponentInputs) {
		super(
			entity,
			options.name,
			"microsoft.Compute/virtualMachineScaleSets/virtualMachines/networkInterfaces",
			"2020-08-01",
			options,
		);
	}
	public readonly apiVersion: "2020-08-01";
	public readonly id: string;
	public readonly type: "microsoft.Compute/virtualMachineScaleSets/virtualMachines/networkInterfaces";
}
export interface virtualMachineScaleSets_virtualMachines_networkInterfacesComponentOutputs {
	readonly apiVersion: "2020-08-01";
	readonly id: string;
	readonly type: "microsoft.Compute/virtualMachineScaleSets/virtualMachines/networkInterfaces";
}
export interface virtualMachineScaleSets_virtualMachines_networkInterfacesComponentInputs {
	readonly etag?: string | undefined;
	readonly extendedLocation?: ExtendedLocation | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: NetworkInterfacePropertiesFormat | undefined;
	readonly tags?: ResourceTags | undefined;
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
			"2020-08-01",
			options,
		);
	}
	public readonly apiVersion: "2020-08-01";
	public readonly id: string;
	public readonly type: "microsoft.Compute/virtualMachineScaleSets/virtualMachines/networkInterfaces/ipConfigurations";
}
export interface virtualMachineScaleSets_virtualMachines_networkInterfaces_ipConfigurationsComponentOutputs {
	readonly apiVersion: "2020-08-01";
	readonly id: string;
	readonly type: "microsoft.Compute/virtualMachineScaleSets/virtualMachines/networkInterfaces/ipConfigurations";
}
export interface virtualMachineScaleSets_virtualMachines_networkInterfaces_ipConfigurationsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: NetworkInterfaceIPConfigurationPropertiesFormat | undefined;
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
			"2020-08-01",
			options,
		);
	}
	public readonly apiVersion: "2020-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Compute/virtualMachineScaleSets/virtualMachines/networkInterfaces/ipconfigurations/publicipaddresses";
}
export interface Microsoft_Compute_virtualMachineScaleSets_virtualMachines_networkInterfaces_ipconfigurations_publicipaddressesComponentOutputs {
	readonly apiVersion: "2020-08-01";
	readonly id: string;
	readonly type: "Microsoft.Compute/virtualMachineScaleSets/virtualMachines/networkInterfaces/ipconfigurations/publicipaddresses";
}
export interface Microsoft_Compute_virtualMachineScaleSets_virtualMachines_networkInterfaces_ipconfigurations_publicipaddressesComponentInputs {
	readonly etag?: string | undefined;
	readonly extendedLocation?: ExtendedLocation | undefined;
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
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface ApplicationGatewayIPConfiguration {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: ApplicationGatewayIPConfigurationPropertiesFormat | undefined;
	readonly type?: string | undefined;
}
export interface ApplicationGatewayIPConfigurationPropertiesFormat {
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly subnet?: SubResource | undefined;
}
export interface ApplicationSecurityGroup {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly location?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: ApplicationSecurityGroupPropertiesFormat | undefined;
	readonly tags?: ResourceTags | undefined;
	readonly type?: string | undefined;
}
export interface ApplicationSecurityGroupPropertiesFormat {
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly resourceGuid?: string | undefined;
}
export interface BackendAddressPool {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: BackendAddressPoolPropertiesFormat | undefined;
	readonly type?: string | undefined;
}
export interface BackendAddressPoolPropertiesFormat {
	readonly backendIPConfigurations?: NetworkInterfaceIPConfiguration[] | undefined;
	readonly loadBalancerBackendAddresses?: LoadBalancerBackendAddress[] | undefined;
	readonly loadBalancingRules?: SubResource[] | undefined;
	readonly location?: string | undefined;
	readonly outboundRule?: SubResource | undefined;
	readonly outboundRules?: SubResource[] | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface CustomDnsConfigPropertiesFormat {
	readonly fqdn?: string | undefined;
	readonly ipAddresses?: string[] | undefined;
}
export interface DdosSettings {
	readonly ddosCustomPolicy?: SubResource | undefined;
	readonly protectedIP?: boolean | undefined;
	readonly protectionCoverage?: ("Basic" | "Standard") | undefined;
}
export interface Delegation {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: ServiceDelegationPropertiesFormat | undefined;
	readonly type?: string | undefined;
}
export interface ExtendedLocation {
	readonly name: string;
	readonly type: "EdgeZone";
}
export interface FlowLog {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly location?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: FlowLogPropertiesFormat | undefined;
	readonly tags?: ResourceTags | undefined;
	readonly type?: string | undefined;
}
export interface FlowLogFormatParameters {
	readonly type?: "JSON" | undefined;
	readonly version?: number | undefined;
}
export interface FlowLogPropertiesFormat {
	readonly enabled?: boolean | undefined;
	readonly flowAnalyticsConfiguration?: TrafficAnalyticsProperties | undefined;
	readonly format?: FlowLogFormatParameters | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly retentionPolicy?: RetentionPolicyParameters | undefined;
	readonly storageId: string;
	readonly targetResourceGuid?: string | undefined;
	readonly targetResourceId: string;
}
export interface FrontendIPConfiguration {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: FrontendIPConfigurationPropertiesFormat | undefined;
	readonly type?: string | undefined;
	readonly zones?: string[] | undefined;
}
export interface FrontendIPConfigurationPropertiesFormat {
	readonly inboundNatPools?: SubResource[] | undefined;
	readonly inboundNatRules?: SubResource[] | undefined;
	readonly loadBalancingRules?: SubResource[] | undefined;
	readonly outboundRules?: SubResource[] | undefined;
	readonly privateIPAddress?: string | undefined;
	readonly privateIPAddressVersion?: ("IPv4" | "IPv6") | undefined;
	readonly privateIPAllocationMethod?: ("Dynamic" | "Static") | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly publicIPAddress?: PublicIPAddress | undefined;
	readonly publicIPPrefix?: SubResource | undefined;
	readonly subnet?: Subnet | undefined;
}
export interface InboundNatRule {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: InboundNatRulePropertiesFormat | undefined;
	readonly type?: string | undefined;
}
export interface InboundNatRulePropertiesFormat {
	readonly backendIPConfiguration?: NetworkInterfaceIPConfiguration | undefined;
	readonly backendPort?: number | undefined;
	readonly enableFloatingIP?: boolean | undefined;
	readonly enableTcpReset?: boolean | undefined;
	readonly frontendIPConfiguration?: SubResource | undefined;
	readonly frontendPort?: number | undefined;
	readonly idleTimeoutInMinutes?: number | undefined;
	readonly protocol?: ("All" | "Tcp" | "Udp") | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface IPConfiguration {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: IPConfigurationPropertiesFormat | undefined;
}
export interface IPConfigurationProfile {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: IPConfigurationProfilePropertiesFormat | undefined;
	readonly type?: string | undefined;
}
export interface IPConfigurationProfilePropertiesFormat {
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly subnet?: Subnet | undefined;
}
export interface IPConfigurationPropertiesFormat {
	readonly privateIPAddress?: string | undefined;
	readonly privateIPAllocationMethod?: ("Dynamic" | "Static") | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly publicIPAddress?: PublicIPAddress | undefined;
	readonly subnet?: Subnet | undefined;
}
export interface IpTag {
	readonly ipTagType?: string | undefined;
	readonly tag?: string | undefined;
}
export interface LoadBalancerBackendAddress {
	readonly name?: string | undefined;
	readonly properties?: LoadBalancerBackendAddressPropertiesFormat | undefined;
}
export interface LoadBalancerBackendAddressPropertiesFormat {
	readonly ipAddress?: string | undefined;
	readonly loadBalancerFrontendIPConfiguration?: SubResource | undefined;
	readonly networkInterfaceIPConfiguration?: SubResource | undefined;
	readonly virtualNetwork?: SubResource | undefined;
}
export interface NatGateway {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly location?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: NatGatewayPropertiesFormat | undefined;
	readonly sku?: NatGatewaySku | undefined;
	readonly tags?: ResourceTags | undefined;
	readonly type?: string | undefined;
	readonly zones?: string[] | undefined;
}
export interface NatGatewayPropertiesFormat {
	readonly idleTimeoutInMinutes?: number | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly publicIpAddresses?: SubResource[] | undefined;
	readonly publicIpPrefixes?: SubResource[] | undefined;
	readonly resourceGuid?: string | undefined;
	readonly subnets?: SubResource[] | undefined;
}
export interface NatGatewaySku {
	readonly name?: "Standard" | undefined;
}
export interface NetworkInterface {
	readonly etag?: string | undefined;
	readonly extendedLocation?: ExtendedLocation | undefined;
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
	readonly type?: string | undefined;
}
export interface NetworkInterfaceIPConfigurationPrivateLinkConnectionProperties {
	readonly fqdns?: string[] | undefined;
	readonly groupId?: string | undefined;
	readonly requiredMemberName?: string | undefined;
}
export interface NetworkInterfaceIPConfigurationPropertiesFormat {
	readonly applicationGatewayBackendAddressPools?: ApplicationGatewayBackendAddressPool[] | undefined;
	readonly applicationSecurityGroups?: ApplicationSecurityGroup[] | undefined;
	readonly loadBalancerBackendAddressPools?: BackendAddressPool[] | undefined;
	readonly loadBalancerInboundNatRules?: InboundNatRule[] | undefined;
	readonly primary?: boolean | undefined;
	readonly privateIPAddress?: string | undefined;
	readonly privateIPAddressVersion?: ("IPv4" | "IPv6") | undefined;
	readonly privateIPAllocationMethod?: ("Dynamic" | "Static") | undefined;
	readonly privateLinkConnectionProperties?: NetworkInterfaceIPConfigurationPrivateLinkConnectionProperties | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly publicIPAddress?: PublicIPAddress | undefined;
	readonly subnet?: Subnet | undefined;
	readonly virtualNetworkTaps?: VirtualNetworkTap[] | undefined;
}
export interface NetworkInterfacePropertiesFormat {
	readonly dnsSettings?: NetworkInterfaceDnsSettings | undefined;
	readonly dscpConfiguration?: SubResource | undefined;
	readonly enableAcceleratedNetworking?: boolean | undefined;
	readonly enableIPForwarding?: boolean | undefined;
	readonly hostedWorkloads?: string[] | undefined;
	readonly ipConfigurations?: NetworkInterfaceIPConfiguration[] | undefined;
	readonly macAddress?: string | undefined;
	readonly migrationPhase?: ("Abort" | "Commit" | "Committed" | "None" | "Prepare") | undefined;
	readonly networkSecurityGroup?: NetworkSecurityGroup | undefined;
	readonly nicType?: ("Elastic" | "Standard") | undefined;
	readonly primary?: boolean | undefined;
	readonly privateEndpoint?: PrivateEndpoint | undefined;
	readonly privateLinkService?: PrivateLinkService | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly resourceGuid?: string | undefined;
	readonly tapConfigurations?: NetworkInterfaceTapConfiguration[] | undefined;
	readonly virtualMachine?: SubResource | undefined;
}
export interface NetworkInterfaceTapConfiguration {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: NetworkInterfaceTapConfigurationPropertiesFormat | undefined;
	readonly type?: string | undefined;
}
export interface NetworkInterfaceTapConfigurationPropertiesFormat {
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly virtualNetworkTap?: VirtualNetworkTap | undefined;
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
	readonly flowLogs?: FlowLog[] | undefined;
	readonly networkInterfaces?: NetworkInterface[] | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly resourceGuid?: string | undefined;
	readonly securityRules?: SecurityRule[] | undefined;
	readonly subnets?: Subnet[] | undefined;
}
export interface PrivateEndpoint {
	readonly etag?: string | undefined;
	readonly extendedLocation?: ExtendedLocation | undefined;
	readonly id?: string | undefined;
	readonly location?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: PrivateEndpointProperties | undefined;
	readonly tags?: ResourceTags | undefined;
	readonly type?: string | undefined;
}
export interface PrivateEndpointConnection {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
	readonly type?: string | undefined;
}
export interface PrivateEndpointConnectionProperties {
	readonly linkIdentifier?: string | undefined;
	readonly privateEndpoint?: PrivateEndpoint | undefined;
	readonly privateLinkServiceConnectionState?: PrivateLinkServiceConnectionState | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface PrivateEndpointProperties {
	readonly customDnsConfigs?: CustomDnsConfigPropertiesFormat[] | undefined;
	readonly manualPrivateLinkServiceConnections?: PrivateLinkServiceConnection[] | undefined;
	readonly networkInterfaces?: NetworkInterface[] | undefined;
	readonly privateLinkServiceConnections?: PrivateLinkServiceConnection[] | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly subnet?: Subnet | undefined;
}
export interface PrivateLinkService {
	readonly etag?: string | undefined;
	readonly extendedLocation?: ExtendedLocation | undefined;
	readonly id?: string | undefined;
	readonly location?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: PrivateLinkServiceProperties | undefined;
	readonly tags?: ResourceTags | undefined;
	readonly type?: string | undefined;
}
export interface PrivateLinkServiceConnection {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: PrivateLinkServiceConnectionProperties | undefined;
	readonly type?: string | undefined;
}
export interface PrivateLinkServiceConnectionProperties {
	readonly groupIds?: string[] | undefined;
	readonly privateLinkServiceConnectionState?: PrivateLinkServiceConnectionState | undefined;
	readonly privateLinkServiceId?: string | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly requestMessage?: string | undefined;
}
export interface PrivateLinkServiceConnectionState {
	readonly actionsRequired?: string | undefined;
	readonly description?: string | undefined;
	readonly status?: string | undefined;
}
export interface PrivateLinkServiceIpConfiguration {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: PrivateLinkServiceIpConfigurationProperties | undefined;
	readonly type?: string | undefined;
}
export interface PrivateLinkServiceIpConfigurationProperties {
	readonly primary?: boolean | undefined;
	readonly privateIPAddress?: string | undefined;
	readonly privateIPAddressVersion?: ("IPv4" | "IPv6") | undefined;
	readonly privateIPAllocationMethod?: ("Dynamic" | "Static") | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly subnet?: Subnet | undefined;
}
export interface PrivateLinkServiceProperties {
	readonly alias?: string | undefined;
	readonly autoApproval?: PrivateLinkServicePropertiesAutoApproval | undefined;
	readonly enableProxyProtocol?: boolean | undefined;
	readonly fqdns?: string[] | undefined;
	readonly ipConfigurations?: PrivateLinkServiceIpConfiguration[] | undefined;
	readonly loadBalancerFrontendIpConfigurations?: FrontendIPConfiguration[] | undefined;
	readonly networkInterfaces?: NetworkInterface[] | undefined;
	readonly privateEndpointConnections?: PrivateEndpointConnection[] | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly visibility?: PrivateLinkServicePropertiesVisibility | undefined;
}
export interface PrivateLinkServicePropertiesAutoApproval {
	readonly subscriptions?: string[] | undefined;
}
export interface PrivateLinkServicePropertiesVisibility {
	readonly subscriptions?: string[] | undefined;
}
export interface PublicIPAddress {
	readonly etag?: string | undefined;
	readonly extendedLocation?: ExtendedLocation | undefined;
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
	readonly ddosSettings?: DdosSettings | undefined;
	readonly dnsSettings?: PublicIPAddressDnsSettings | undefined;
	readonly idleTimeoutInMinutes?: number | undefined;
	readonly ipAddress?: string | undefined;
	readonly ipConfiguration?: IPConfiguration | undefined;
	readonly ipTags?: IpTag[] | undefined;
	readonly linkedPublicIPAddress?: PublicIPAddress | undefined;
	readonly migrationPhase?: ("Abort" | "Commit" | "Committed" | "None" | "Prepare") | undefined;
	readonly natGateway?: NatGateway | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly publicIPAddressVersion?: ("IPv4" | "IPv6") | undefined;
	readonly publicIPAllocationMethod?: ("Dynamic" | "Static") | undefined;
	readonly publicIPPrefix?: SubResource | undefined;
	readonly resourceGuid?: string | undefined;
	readonly servicePublicIPAddress?: PublicIPAddress | undefined;
}
export interface PublicIPAddressSku {
	readonly name?: ("Basic" | "Standard") | undefined;
	readonly tier?: ("Global" | "Regional") | undefined;
}
export interface ResourceNavigationLink {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: ResourceNavigationLinkFormat | undefined;
	readonly type?: string | undefined;
}
export interface ResourceNavigationLinkFormat {
	readonly link?: string | undefined;
	readonly linkedResourceType?: string | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface RetentionPolicyParameters {
	readonly days?: number | undefined;
	readonly enabled?: boolean | undefined;
}
export interface Route {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: RoutePropertiesFormat | undefined;
	readonly type?: string | undefined;
}
export interface RoutePropertiesFormat {
	readonly addressPrefix?: string | undefined;
	readonly hasBgpOverride?: boolean | undefined;
	readonly nextHopIpAddress?: string | undefined;
	readonly nextHopType: "Internet" | "None" | "VirtualAppliance" | "VirtualNetworkGateway" | "VnetLocal";
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
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
	readonly disableBgpRoutePropagation?: boolean | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly resourceGuid?: string | undefined;
	readonly routes?: Route[] | undefined;
	readonly subnets?: Subnet[] | undefined;
}
export interface SecurityRule {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: SecurityRulePropertiesFormat | undefined;
	readonly type?: string | undefined;
}
export interface SecurityRulePropertiesFormat {
	readonly access: "Allow" | "Deny";
	readonly description?: string | undefined;
	readonly destinationAddressPrefix?: string | undefined;
	readonly destinationAddressPrefixes?: string[] | undefined;
	readonly destinationApplicationSecurityGroups?: ApplicationSecurityGroup[] | undefined;
	readonly destinationPortRange?: string | undefined;
	readonly destinationPortRanges?: string[] | undefined;
	readonly direction: "Inbound" | "Outbound";
	readonly priority?: number | undefined;
	readonly protocol: "*" | "Ah" | "Esp" | "Icmp" | "Tcp" | "Udp";
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly sourceAddressPrefix?: string | undefined;
	readonly sourceAddressPrefixes?: string[] | undefined;
	readonly sourceApplicationSecurityGroups?: ApplicationSecurityGroup[] | undefined;
	readonly sourcePortRange?: string | undefined;
	readonly sourcePortRanges?: string[] | undefined;
}
export interface ServiceAssociationLink {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: ServiceAssociationLinkPropertiesFormat | undefined;
	readonly type?: string | undefined;
}
export interface ServiceAssociationLinkPropertiesFormat {
	readonly allowDelete?: boolean | undefined;
	readonly link?: string | undefined;
	readonly linkedResourceType?: string | undefined;
	readonly locations?: string[] | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface ServiceDelegationPropertiesFormat {
	readonly actions?: string[] | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly serviceName?: string | undefined;
}
export interface ServiceEndpointPolicy {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly location?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: ServiceEndpointPolicyPropertiesFormat | undefined;
	readonly tags?: ResourceTags | undefined;
	readonly type?: string | undefined;
}
export interface ServiceEndpointPolicyDefinition {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: ServiceEndpointPolicyDefinitionPropertiesFormat | undefined;
}
export interface ServiceEndpointPolicyDefinitionPropertiesFormat {
	readonly description?: string | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly service?: string | undefined;
	readonly serviceResources?: string[] | undefined;
}
export interface ServiceEndpointPolicyPropertiesFormat {
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly resourceGuid?: string | undefined;
	readonly serviceEndpointPolicyDefinitions?: ServiceEndpointPolicyDefinition[] | undefined;
	readonly subnets?: Subnet[] | undefined;
}
export interface ServiceEndpointPropertiesFormat {
	readonly locations?: string[] | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly service?: string | undefined;
}
export interface Subnet {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: SubnetPropertiesFormat | undefined;
	readonly type?: string | undefined;
}
export interface SubnetPropertiesFormat {
	readonly addressPrefix?: string | undefined;
	readonly addressPrefixes?: string[] | undefined;
	readonly applicationGatewayIpConfigurations?: ApplicationGatewayIPConfiguration[] | undefined;
	readonly delegations?: Delegation[] | undefined;
	readonly ipAllocations?: SubResource[] | undefined;
	readonly ipConfigurationProfiles?: IPConfigurationProfile[] | undefined;
	readonly ipConfigurations?: IPConfiguration[] | undefined;
	readonly natGateway?: SubResource | undefined;
	readonly networkSecurityGroup?: NetworkSecurityGroup | undefined;
	readonly privateEndpointNetworkPolicies?: ("Disabled" | "Enabled") | undefined;
	readonly privateEndpoints?: PrivateEndpoint[] | undefined;
	readonly privateLinkServiceNetworkPolicies?: ("Disabled" | "Enabled") | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly purpose?: string | undefined;
	readonly resourceNavigationLinks?: ResourceNavigationLink[] | undefined;
	readonly routeTable?: RouteTable | undefined;
	readonly serviceAssociationLinks?: ServiceAssociationLink[] | undefined;
	readonly serviceEndpointPolicies?: ServiceEndpointPolicy[] | undefined;
	readonly serviceEndpoints?: ServiceEndpointPropertiesFormat[] | undefined;
}
export interface SubResource {
	readonly id?: string | undefined;
}
export interface TrafficAnalyticsConfigurationProperties {
	readonly enabled?: boolean | undefined;
	readonly trafficAnalyticsInterval?: number | undefined;
	readonly workspaceId?: string | undefined;
	readonly workspaceRegion?: string | undefined;
	readonly workspaceResourceId?: string | undefined;
}
export interface TrafficAnalyticsProperties {
	readonly networkWatcherFlowAnalyticsConfiguration?: TrafficAnalyticsConfigurationProperties | undefined;
}
export interface VirtualNetworkTap {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly location?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: VirtualNetworkTapPropertiesFormat | undefined;
	readonly tags?: ResourceTags | undefined;
	readonly type?: string | undefined;
}
export interface VirtualNetworkTapPropertiesFormat {
	readonly destinationLoadBalancerFrontEndIPConfiguration?: FrontendIPConfiguration | undefined;
	readonly destinationNetworkInterfaceIPConfiguration?: NetworkInterfaceIPConfiguration | undefined;
	readonly destinationPort?: number | undefined;
	readonly networkInterfaceTapConfigurations?: NetworkInterfaceTapConfiguration[] | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly resourceGuid?: string | undefined;
}
export default {
	"Microsoft.Compute/cloudServices/roleInstances/networkInterfaces":
		Microsoft_Compute_cloudServices_roleInstances_networkInterfaces,
	"Microsoft.Compute/cloudServices/roleInstances/networkInterfaces/ipconfigurations/publicipaddresses":
		Microsoft_Compute_cloudServices_roleInstances_networkInterfaces_ipconfigurations_publicipaddresses,
	"virtualMachineScaleSets/virtualMachines/networkInterfaces":
		virtualMachineScaleSets_virtualMachines_networkInterfaces,
	"virtualMachineScaleSets/virtualMachines/networkInterfaces/ipConfigurations":
		virtualMachineScaleSets_virtualMachines_networkInterfaces_ipConfigurations,
	"Microsoft.Compute/virtualMachineScaleSets/virtualMachines/networkInterfaces/ipconfigurations/publicipaddresses":
		Microsoft_Compute_virtualMachineScaleSets_virtualMachines_networkInterfaces_ipconfigurations_publicipaddresses,
};

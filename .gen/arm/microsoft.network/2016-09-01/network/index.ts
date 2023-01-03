import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class applicationGateways
	extends ArmResource<applicationGatewaysComponentInputs>
	implements applicationGatewaysComponentOutputs
{
	constructor(entity: ADKEntity, options: applicationGatewaysComponentInputs) {
		super(entity, options.name, "Microsoft.Network/applicationGateways", "2016-09-01", options);
	}
	public readonly apiVersion: "2016-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/applicationGateways";
}
export interface applicationGatewaysComponentOutputs {
	readonly apiVersion: "2016-09-01";
	readonly id: string;
	readonly type: "Microsoft.Network/applicationGateways";
}
export interface applicationGatewaysComponentInputs {
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ApplicationGatewayPropertiesFormat | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class connections extends ArmResource<connectionsComponentInputs> implements connectionsComponentOutputs {
	constructor(entity: ADKEntity, options: connectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/connections", "2016-09-01", options);
	}
	public readonly apiVersion: "2016-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/connections";
}
export interface connectionsComponentOutputs {
	readonly apiVersion: "2016-09-01";
	readonly id: string;
	readonly type: "Microsoft.Network/connections";
}
export interface connectionsComponentInputs {
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: VirtualNetworkGatewayConnectionPropertiesFormat;
	readonly tags?: ResourceTags | undefined;
}
export class expressRouteCircuits
	extends ArmResource<expressRouteCircuitsComponentInputs>
	implements expressRouteCircuitsComponentOutputs
{
	constructor(entity: ADKEntity, options: expressRouteCircuitsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/expressRouteCircuits", "2016-09-01", options);
	}
	public readonly apiVersion: "2016-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/expressRouteCircuits";
}
export interface expressRouteCircuitsComponentOutputs {
	readonly apiVersion: "2016-09-01";
	readonly id: string;
	readonly type: "Microsoft.Network/expressRouteCircuits";
}
export interface expressRouteCircuitsComponentInputs {
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ExpressRouteCircuitPropertiesFormat | undefined;
	readonly sku?: ExpressRouteCircuitSku | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class expressRouteCircuits_authorizations
	extends ArmResource<expressRouteCircuits_authorizationsComponentInputs>
	implements expressRouteCircuits_authorizationsComponentOutputs
{
	constructor(entity: ADKEntity, options: expressRouteCircuits_authorizationsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/expressRouteCircuits/authorizations", "2016-09-01", options);
	}
	public readonly apiVersion: "2016-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/expressRouteCircuits/authorizations";
}
export interface expressRouteCircuits_authorizationsComponentOutputs {
	readonly apiVersion: "2016-09-01";
	readonly id: string;
	readonly type: "Microsoft.Network/expressRouteCircuits/authorizations";
}
export interface expressRouteCircuits_authorizationsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: AuthorizationPropertiesFormat | undefined;
}
export class expressRouteCircuits_peerings
	extends ArmResource<expressRouteCircuits_peeringsComponentInputs>
	implements expressRouteCircuits_peeringsComponentOutputs
{
	constructor(entity: ADKEntity, options: expressRouteCircuits_peeringsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/expressRouteCircuits/peerings", "2016-09-01", options);
	}
	public readonly apiVersion: "2016-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/expressRouteCircuits/peerings";
}
export interface expressRouteCircuits_peeringsComponentOutputs {
	readonly apiVersion: "2016-09-01";
	readonly id: string;
	readonly type: "Microsoft.Network/expressRouteCircuits/peerings";
}
export interface expressRouteCircuits_peeringsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: ExpressRouteCircuitPeeringPropertiesFormat | undefined;
}
export class loadBalancers extends ArmResource<loadBalancersComponentInputs> implements loadBalancersComponentOutputs {
	constructor(entity: ADKEntity, options: loadBalancersComponentInputs) {
		super(entity, options.name, "Microsoft.Network/loadBalancers", "2016-09-01", options);
	}
	public readonly apiVersion: "2016-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/loadBalancers";
}
export interface loadBalancersComponentOutputs {
	readonly apiVersion: "2016-09-01";
	readonly id: string;
	readonly type: "Microsoft.Network/loadBalancers";
}
export interface loadBalancersComponentInputs {
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: LoadBalancerPropertiesFormat | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class localNetworkGateways
	extends ArmResource<localNetworkGatewaysComponentInputs>
	implements localNetworkGatewaysComponentOutputs
{
	constructor(entity: ADKEntity, options: localNetworkGatewaysComponentInputs) {
		super(entity, options.name, "Microsoft.Network/localNetworkGateways", "2016-09-01", options);
	}
	public readonly apiVersion: "2016-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/localNetworkGateways";
}
export interface localNetworkGatewaysComponentOutputs {
	readonly apiVersion: "2016-09-01";
	readonly id: string;
	readonly type: "Microsoft.Network/localNetworkGateways";
}
export interface localNetworkGatewaysComponentInputs {
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: LocalNetworkGatewayPropertiesFormat;
	readonly tags?: ResourceTags | undefined;
}
export class networkInterfaces
	extends ArmResource<networkInterfacesComponentInputs>
	implements networkInterfacesComponentOutputs
{
	constructor(entity: ADKEntity, options: networkInterfacesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/networkInterfaces", "2016-09-01", options);
	}
	public readonly apiVersion: "2016-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkInterfaces";
}
export interface networkInterfacesComponentOutputs {
	readonly apiVersion: "2016-09-01";
	readonly id: string;
	readonly type: "Microsoft.Network/networkInterfaces";
}
export interface networkInterfacesComponentInputs {
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: NetworkInterfacePropertiesFormat | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class networkSecurityGroups
	extends ArmResource<networkSecurityGroupsComponentInputs>
	implements networkSecurityGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: networkSecurityGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/networkSecurityGroups", "2016-09-01", options);
	}
	public readonly apiVersion: "2016-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkSecurityGroups";
}
export interface networkSecurityGroupsComponentOutputs {
	readonly apiVersion: "2016-09-01";
	readonly id: string;
	readonly type: "Microsoft.Network/networkSecurityGroups";
}
export interface networkSecurityGroupsComponentInputs {
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: NetworkSecurityGroupPropertiesFormat | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class networkSecurityGroups_securityRules
	extends ArmResource<networkSecurityGroups_securityRulesComponentInputs>
	implements networkSecurityGroups_securityRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: networkSecurityGroups_securityRulesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/networkSecurityGroups/securityRules", "2016-09-01", options);
	}
	public readonly apiVersion: "2016-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkSecurityGroups/securityRules";
}
export interface networkSecurityGroups_securityRulesComponentOutputs {
	readonly apiVersion: "2016-09-01";
	readonly id: string;
	readonly type: "Microsoft.Network/networkSecurityGroups/securityRules";
}
export interface networkSecurityGroups_securityRulesComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: SecurityRulePropertiesFormat | undefined;
}
export class networkWatchers
	extends ArmResource<networkWatchersComponentInputs>
	implements networkWatchersComponentOutputs
{
	constructor(entity: ADKEntity, options: networkWatchersComponentInputs) {
		super(entity, options.name, "Microsoft.Network/networkWatchers", "2016-09-01", options);
	}
	public readonly apiVersion: "2016-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkWatchers";
}
export interface networkWatchersComponentOutputs {
	readonly apiVersion: "2016-09-01";
	readonly id: string;
	readonly type: "Microsoft.Network/networkWatchers";
}
export interface networkWatchersComponentInputs {
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: NetworkWatcherPropertiesFormat | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class networkWatchers_packetCaptures
	extends ArmResource<networkWatchers_packetCapturesComponentInputs>
	implements networkWatchers_packetCapturesComponentOutputs
{
	constructor(entity: ADKEntity, options: networkWatchers_packetCapturesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/networkWatchers/packetCaptures", "2016-09-01", options);
	}
	public readonly apiVersion: "2016-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkWatchers/packetCaptures";
}
export interface networkWatchers_packetCapturesComponentOutputs {
	readonly apiVersion: "2016-09-01";
	readonly id: string;
	readonly type: "Microsoft.Network/networkWatchers/packetCaptures";
}
export interface networkWatchers_packetCapturesComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties: PacketCaptureParametersOrPacketCaptureResultProperties;
}
export class publicIPAddresses
	extends ArmResource<publicIPAddressesComponentInputs>
	implements publicIPAddressesComponentOutputs
{
	constructor(entity: ADKEntity, options: publicIPAddressesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/publicIPAddresses", "2016-09-01", options);
	}
	public readonly apiVersion: "2016-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/publicIPAddresses";
}
export interface publicIPAddressesComponentOutputs {
	readonly apiVersion: "2016-09-01";
	readonly id: string;
	readonly type: "Microsoft.Network/publicIPAddresses";
}
export interface publicIPAddressesComponentInputs {
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: PublicIPAddressPropertiesFormat | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class routeTables extends ArmResource<routeTablesComponentInputs> implements routeTablesComponentOutputs {
	constructor(entity: ADKEntity, options: routeTablesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/routeTables", "2016-09-01", options);
	}
	public readonly apiVersion: "2016-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/routeTables";
}
export interface routeTablesComponentOutputs {
	readonly apiVersion: "2016-09-01";
	readonly id: string;
	readonly type: "Microsoft.Network/routeTables";
}
export interface routeTablesComponentInputs {
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: RouteTablePropertiesFormat | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class routeTables_routes
	extends ArmResource<routeTables_routesComponentInputs>
	implements routeTables_routesComponentOutputs
{
	constructor(entity: ADKEntity, options: routeTables_routesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/routeTables/routes", "2016-09-01", options);
	}
	public readonly apiVersion: "2016-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/routeTables/routes";
}
export interface routeTables_routesComponentOutputs {
	readonly apiVersion: "2016-09-01";
	readonly id: string;
	readonly type: "Microsoft.Network/routeTables/routes";
}
export interface routeTables_routesComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: RoutePropertiesFormat | undefined;
}
export class virtualNetworkGateways
	extends ArmResource<virtualNetworkGatewaysComponentInputs>
	implements virtualNetworkGatewaysComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualNetworkGatewaysComponentInputs) {
		super(entity, options.name, "Microsoft.Network/virtualNetworkGateways", "2016-09-01", options);
	}
	public readonly apiVersion: "2016-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/virtualNetworkGateways";
}
export interface virtualNetworkGatewaysComponentOutputs {
	readonly apiVersion: "2016-09-01";
	readonly id: string;
	readonly type: "Microsoft.Network/virtualNetworkGateways";
}
export interface virtualNetworkGatewaysComponentInputs {
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: VirtualNetworkGatewayPropertiesFormat;
	readonly tags?: ResourceTags | undefined;
}
export class virtualNetworks
	extends ArmResource<virtualNetworksComponentInputs>
	implements virtualNetworksComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualNetworksComponentInputs) {
		super(entity, options.name, "Microsoft.Network/virtualNetworks", "2016-09-01", options);
	}
	public readonly apiVersion: "2016-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/virtualNetworks";
}
export interface virtualNetworksComponentOutputs {
	readonly apiVersion: "2016-09-01";
	readonly id: string;
	readonly type: "Microsoft.Network/virtualNetworks";
}
export interface virtualNetworksComponentInputs {
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: VirtualNetworkPropertiesFormat | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class virtualNetworks_subnets
	extends ArmResource<virtualNetworks_subnetsComponentInputs>
	implements virtualNetworks_subnetsComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualNetworks_subnetsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/virtualNetworks/subnets", "2016-09-01", options);
	}
	public readonly apiVersion: "2016-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/virtualNetworks/subnets";
}
export interface virtualNetworks_subnetsComponentOutputs {
	readonly apiVersion: "2016-09-01";
	readonly id: string;
	readonly type: "Microsoft.Network/virtualNetworks/subnets";
}
export interface virtualNetworks_subnetsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: SubnetPropertiesFormat | undefined;
}
export class virtualNetworks_virtualNetworkPeerings
	extends ArmResource<virtualNetworks_virtualNetworkPeeringsComponentInputs>
	implements virtualNetworks_virtualNetworkPeeringsComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualNetworks_virtualNetworkPeeringsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/virtualNetworks/virtualNetworkPeerings", "2016-09-01", options);
	}
	public readonly apiVersion: "2016-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/virtualNetworks/virtualNetworkPeerings";
}
export interface virtualNetworks_virtualNetworkPeeringsComponentOutputs {
	readonly apiVersion: "2016-09-01";
	readonly id: string;
	readonly type: "Microsoft.Network/virtualNetworks/virtualNetworkPeerings";
}
export interface virtualNetworks_virtualNetworkPeeringsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: VirtualNetworkPeeringPropertiesFormat | undefined;
}
export interface AddressSpace {
	readonly addressPrefixes?: string[] | undefined;
}
export interface ApplicationGatewayAuthenticationCertificate {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: ApplicationGatewayAuthenticationCertificatePropertiesFormat | undefined;
}
export interface ApplicationGatewayAuthenticationCertificatePropertiesFormat {
	readonly data?: string | undefined;
	readonly provisioningState?: string | undefined;
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
}
export interface ApplicationGatewayBackendAddressPoolPropertiesFormat {
	readonly backendAddresses?: ApplicationGatewayBackendAddress[] | undefined;
	readonly backendIPConfigurations?: NetworkInterfaceIPConfiguration[] | undefined;
	readonly provisioningState?: string | undefined;
}
export interface ApplicationGatewayBackendHttpSettings {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: ApplicationGatewayBackendHttpSettingsPropertiesFormat | undefined;
}
export interface ApplicationGatewayBackendHttpSettingsPropertiesFormat {
	readonly authenticationCertificates?: SubResource[] | undefined;
	readonly cookieBasedAffinity?: ("Disabled" | "Enabled") | undefined;
	readonly port?: number | undefined;
	readonly probe?: SubResource | undefined;
	readonly protocol?: ("Http" | "Https") | undefined;
	readonly provisioningState?: string | undefined;
	readonly requestTimeout?: number | undefined;
}
export interface ApplicationGatewayFrontendIPConfiguration {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: ApplicationGatewayFrontendIPConfigurationPropertiesFormat | undefined;
}
export interface ApplicationGatewayFrontendIPConfigurationPropertiesFormat {
	readonly privateIPAddress?: string | undefined;
	readonly privateIPAllocationMethod?: ("Dynamic" | "Static") | undefined;
	readonly provisioningState?: string | undefined;
	readonly publicIPAddress?: SubResource | undefined;
	readonly subnet?: SubResource | undefined;
}
export interface ApplicationGatewayFrontendPort {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: ApplicationGatewayFrontendPortPropertiesFormat | undefined;
}
export interface ApplicationGatewayFrontendPortPropertiesFormat {
	readonly port?: number | undefined;
	readonly provisioningState?: string | undefined;
}
export interface ApplicationGatewayHttpListener {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: ApplicationGatewayHttpListenerPropertiesFormat | undefined;
}
export interface ApplicationGatewayHttpListenerPropertiesFormat {
	readonly frontendIPConfiguration?: SubResource | undefined;
	readonly frontendPort?: SubResource | undefined;
	readonly hostName?: string | undefined;
	readonly protocol?: ("Http" | "Https") | undefined;
	readonly provisioningState?: string | undefined;
	readonly requireServerNameIndication?: boolean | undefined;
	readonly sslCertificate?: SubResource | undefined;
}
export interface ApplicationGatewayIPConfiguration {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: ApplicationGatewayIPConfigurationPropertiesFormat | undefined;
}
export interface ApplicationGatewayIPConfigurationPropertiesFormat {
	readonly provisioningState?: string | undefined;
	readonly subnet?: SubResource | undefined;
}
export interface ApplicationGatewayPathRule {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: ApplicationGatewayPathRulePropertiesFormat | undefined;
}
export interface ApplicationGatewayPathRulePropertiesFormat {
	readonly backendAddressPool?: SubResource | undefined;
	readonly backendHttpSettings?: SubResource | undefined;
	readonly paths?: string[] | undefined;
	readonly provisioningState?: string | undefined;
}
export interface ApplicationGatewayProbe {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: ApplicationGatewayProbePropertiesFormat | undefined;
}
export interface ApplicationGatewayProbePropertiesFormat {
	readonly host?: string | undefined;
	readonly interval?: number | undefined;
	readonly path?: string | undefined;
	readonly protocol?: ("Http" | "Https") | undefined;
	readonly provisioningState?: string | undefined;
	readonly timeout?: number | undefined;
	readonly unhealthyThreshold?: number | undefined;
}
export interface ApplicationGatewayPropertiesFormat {
	readonly authenticationCertificates?: ApplicationGatewayAuthenticationCertificate[] | undefined;
	readonly backendAddressPools?: ApplicationGatewayBackendAddressPool[] | undefined;
	readonly backendHttpSettingsCollection?: ApplicationGatewayBackendHttpSettings[] | undefined;
	readonly frontendIPConfigurations?: ApplicationGatewayFrontendIPConfiguration[] | undefined;
	readonly frontendPorts?: ApplicationGatewayFrontendPort[] | undefined;
	readonly gatewayIPConfigurations?: ApplicationGatewayIPConfiguration[] | undefined;
	readonly httpListeners?: ApplicationGatewayHttpListener[] | undefined;
	readonly operationalState?: ("Running" | "Starting" | "Stopped" | "Stopping") | undefined;
	readonly probes?: ApplicationGatewayProbe[] | undefined;
	readonly provisioningState?: string | undefined;
	readonly requestRoutingRules?: ApplicationGatewayRequestRoutingRule[] | undefined;
	readonly resourceGuid?: string | undefined;
	readonly sku?: ApplicationGatewaySku | undefined;
	readonly sslCertificates?: ApplicationGatewaySslCertificate[] | undefined;
	readonly sslPolicy?: ApplicationGatewaySslPolicy | undefined;
	readonly urlPathMaps?: ApplicationGatewayUrlPathMap[] | undefined;
	readonly webApplicationFirewallConfiguration?: ApplicationGatewayWebApplicationFirewallConfiguration | undefined;
}
export interface ApplicationGatewayRequestRoutingRule {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: ApplicationGatewayRequestRoutingRulePropertiesFormat | undefined;
}
export interface ApplicationGatewayRequestRoutingRulePropertiesFormat {
	readonly backendAddressPool?: SubResource | undefined;
	readonly backendHttpSettings?: SubResource | undefined;
	readonly httpListener?: SubResource | undefined;
	readonly provisioningState?: string | undefined;
	readonly ruleType?: ("Basic" | "PathBasedRouting") | undefined;
	readonly urlPathMap?: SubResource | undefined;
}
export interface ApplicationGatewaySku {
	readonly capacity?: number | undefined;
	readonly name?: ("Standard_Large" | "Standard_Medium" | "Standard_Small" | "WAF_Large" | "WAF_Medium") | undefined;
	readonly tier?: ("Standard" | "WAF") | undefined;
}
export interface ApplicationGatewaySslCertificate {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: ApplicationGatewaySslCertificatePropertiesFormat | undefined;
}
export interface ApplicationGatewaySslCertificatePropertiesFormat {
	readonly data?: string | undefined;
	readonly password?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly publicCertData?: string | undefined;
}
export interface ApplicationGatewaySslPolicy {
	readonly disabledSslProtocols?: ("TLSv1_0" | "TLSv1_1" | "TLSv1_2"[]) | undefined;
}
export interface ApplicationGatewayUrlPathMap {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: ApplicationGatewayUrlPathMapPropertiesFormat | undefined;
}
export interface ApplicationGatewayUrlPathMapPropertiesFormat {
	readonly defaultBackendAddressPool?: SubResource | undefined;
	readonly defaultBackendHttpSettings?: SubResource | undefined;
	readonly pathRules?: ApplicationGatewayPathRule[] | undefined;
	readonly provisioningState?: string | undefined;
}
export interface ApplicationGatewayWebApplicationFirewallConfiguration {
	readonly enabled: boolean;
	readonly firewallMode?: ("Detection" | "Prevention") | undefined;
}
export interface AuthorizationPropertiesFormat {
	readonly authorizationKey?: string | undefined;
	readonly authorizationUseStatus?: ("Available" | "InUse") | undefined;
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
export interface BgpSettings {
	readonly asn?: number | undefined;
	readonly bgpPeeringAddress?: string | undefined;
	readonly peerWeight?: number | undefined;
}
export interface DhcpOptions {
	readonly dnsServers?: string[] | undefined;
}
export interface ExpressRouteCircuitAuthorization {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: AuthorizationPropertiesFormat | undefined;
}
export interface ExpressRouteCircuitPeering {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: ExpressRouteCircuitPeeringPropertiesFormat | undefined;
}
export interface ExpressRouteCircuitPeeringConfig {
	readonly advertisedPublicPrefixes?: string[] | undefined;
	readonly advertisedPublicPrefixesState?:
		| ("Configured" | "Configuring" | "NotConfigured" | "ValidationNeeded")
		| undefined;
	readonly customerASN?: number | undefined;
	readonly routingRegistryName?: string | undefined;
}
export interface ExpressRouteCircuitPeeringPropertiesFormat {
	readonly azureASN?: number | undefined;
	readonly gatewayManagerEtag?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly microsoftPeeringConfig?: ExpressRouteCircuitPeeringConfig | undefined;
	readonly peerASN?: number | undefined;
	readonly peeringType?: ("AzurePrivatePeering" | "AzurePublicPeering" | "MicrosoftPeering") | undefined;
	readonly primaryAzurePort?: string | undefined;
	readonly primaryPeerAddressPrefix?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly secondaryAzurePort?: string | undefined;
	readonly secondaryPeerAddressPrefix?: string | undefined;
	readonly sharedKey?: string | undefined;
	readonly state?: ("Disabled" | "Enabled") | undefined;
	readonly stats?: ExpressRouteCircuitStats | undefined;
	readonly vlanId?: number | undefined;
}
export interface ExpressRouteCircuitPropertiesFormat {
	readonly allowClassicOperations?: boolean | undefined;
	readonly authorizations?: ExpressRouteCircuitAuthorization[] | undefined;
	readonly circuitProvisioningState?: string | undefined;
	readonly gatewayManagerEtag?: string | undefined;
	readonly peerings?: ExpressRouteCircuitPeering[] | undefined;
	readonly provisioningState?: string | undefined;
	readonly serviceKey?: string | undefined;
	readonly serviceProviderNotes?: string | undefined;
	readonly serviceProviderProperties?: ExpressRouteCircuitServiceProviderProperties | undefined;
	readonly serviceProviderProvisioningState?:
		| ("Deprovisioning" | "NotProvisioned" | "Provisioned" | "Provisioning")
		| undefined;
}
export interface ExpressRouteCircuitServiceProviderProperties {
	readonly bandwidthInMbps?: number | undefined;
	readonly peeringLocation?: string | undefined;
	readonly serviceProviderName?: string | undefined;
}
export interface ExpressRouteCircuitSku {
	readonly family?: ("MeteredData" | "UnlimitedData") | undefined;
	readonly name?: string | undefined;
	readonly tier?: ("Premium" | "Standard") | undefined;
}
export interface ExpressRouteCircuitStats {
	readonly primarybytesIn?: number | undefined;
	readonly primarybytesOut?: number | undefined;
	readonly secondarybytesIn?: number | undefined;
	readonly secondarybytesOut?: number | undefined;
}
export interface FrontendIPConfiguration {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: FrontendIPConfigurationPropertiesFormat | undefined;
}
export interface FrontendIPConfigurationPropertiesFormat {
	readonly inboundNatPools?: SubResource[] | undefined;
	readonly inboundNatRules?: SubResource[] | undefined;
	readonly loadBalancingRules?: SubResource[] | undefined;
	readonly outboundNatRules?: SubResource[] | undefined;
	readonly privateIPAddress?: string | undefined;
	readonly privateIPAllocationMethod?: ("Dynamic" | "Static") | undefined;
	readonly provisioningState?: string | undefined;
	readonly publicIPAddress?: PublicIPAddress | undefined;
	readonly subnet?: Subnet | undefined;
}
export interface InboundNatPool {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: InboundNatPoolPropertiesFormat | undefined;
}
export interface InboundNatPoolPropertiesFormat {
	readonly backendPort: number;
	readonly frontendIPConfiguration?: SubResource | undefined;
	readonly frontendPortRangeEnd: number;
	readonly frontendPortRangeStart: number;
	readonly protocol: "Tcp" | "Udp";
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
export interface LoadBalancerPropertiesFormat {
	readonly backendAddressPools?: BackendAddressPool[] | undefined;
	readonly frontendIPConfigurations?: FrontendIPConfiguration[] | undefined;
	readonly inboundNatPools?: InboundNatPool[] | undefined;
	readonly inboundNatRules?: InboundNatRule[] | undefined;
	readonly loadBalancingRules?: LoadBalancingRule[] | undefined;
	readonly outboundNatRules?: OutboundNatRule[] | undefined;
	readonly probes?: Probe[] | undefined;
	readonly provisioningState?: string | undefined;
	readonly resourceGuid?: string | undefined;
}
export interface LoadBalancingRule {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: LoadBalancingRulePropertiesFormat | undefined;
}
export interface LoadBalancingRulePropertiesFormat {
	readonly backendAddressPool?: SubResource | undefined;
	readonly backendPort?: number | undefined;
	readonly enableFloatingIP?: boolean | undefined;
	readonly frontendIPConfiguration?: SubResource | undefined;
	readonly frontendPort: number;
	readonly idleTimeoutInMinutes?: number | undefined;
	readonly loadDistribution?: ("Default" | "SourceIP" | "SourceIPProtocol") | undefined;
	readonly probe?: SubResource | undefined;
	readonly protocol: "Tcp" | "Udp";
	readonly provisioningState?: string | undefined;
}
export interface LocalNetworkGateway {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly location?: string | undefined;
	readonly name?: string | undefined;
	readonly properties: LocalNetworkGatewayPropertiesFormat;
	readonly tags?: ResourceTags | undefined;
	readonly type?: string | undefined;
}
export interface LocalNetworkGatewayPropertiesFormat {
	readonly bgpSettings?: BgpSettings | undefined;
	readonly gatewayIpAddress?: string | undefined;
	readonly localNetworkAddressSpace: AddressSpace;
	readonly provisioningState?: string | undefined;
	readonly resourceGuid?: string | undefined;
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
export interface NetworkWatcherPropertiesFormat {
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface OutboundNatRule {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: OutboundNatRulePropertiesFormat | undefined;
}
export interface OutboundNatRulePropertiesFormat {
	readonly allocatedOutboundPorts?: number | undefined;
	readonly backendAddressPool: SubResource;
	readonly frontendIPConfigurations?: SubResource[] | undefined;
	readonly provisioningState?: string | undefined;
}
export interface PacketCaptureFilter {
	readonly localIPAddress?: string | undefined;
	readonly localPort?: string | undefined;
	readonly protocol?: ("any" | "TCP" | "UDP") | undefined;
	readonly remoteIPAddress?: string | undefined;
	readonly remotePort?: string | undefined;
}
export interface PacketCaptureParametersOrPacketCaptureResultProperties {
	readonly bytesToCapturePerPacket?: number | undefined;
	readonly filters?: PacketCaptureFilter[] | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly storageLocation: PacketCaptureStorageLocation;
	readonly target: string;
	readonly timeLimitInSeconds?: number | undefined;
	readonly totalBytesPerSession?: number | undefined;
}
export interface PacketCaptureStorageLocation {
	readonly filePath?: string | undefined;
	readonly storageId?: string | undefined;
	readonly storagePath?: string | undefined;
}
export interface Probe {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: ProbePropertiesFormat | undefined;
}
export interface ProbePropertiesFormat {
	readonly intervalInSeconds?: number | undefined;
	readonly loadBalancingRules?: SubResource[] | undefined;
	readonly numberOfProbes?: number | undefined;
	readonly port: number;
	readonly protocol: "Http" | "Tcp";
	readonly provisioningState?: string | undefined;
	readonly requestPath?: string | undefined;
}
export interface PublicIPAddress {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly location?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: PublicIPAddressPropertiesFormat | undefined;
	readonly tags?: ResourceTags | undefined;
	readonly type?: string | undefined;
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
	readonly destinationAddressPrefix: string;
	readonly destinationPortRange?: string | undefined;
	readonly direction: "Inbound" | "Outbound";
	readonly priority?: number | undefined;
	readonly protocol: "" | "Tcp" | "Udp";
	readonly provisioningState?: string | undefined;
	readonly sourceAddressPrefix: string;
	readonly sourcePortRange?: string | undefined;
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
}
export interface SubResource {
	readonly id?: string | undefined;
}
export interface TunnelConnectionHealth {
	readonly connectionStatus?: ("Connected" | "Connecting" | "NotConnected" | "Unknown") | undefined;
	readonly egressBytesTransferred?: number | undefined;
	readonly ingressBytesTransferred?: number | undefined;
	readonly lastConnectionEstablishedUtcTime?: string | undefined;
	readonly tunnel?: string | undefined;
}
export interface VirtualNetworkGateway {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly location?: string | undefined;
	readonly name?: string | undefined;
	readonly properties: VirtualNetworkGatewayPropertiesFormat;
	readonly tags?: ResourceTags | undefined;
	readonly type?: string | undefined;
}
export interface VirtualNetworkGatewayConnectionPropertiesFormat {
	readonly authorizationKey?: string | undefined;
	readonly connectionStatus?: ("Connected" | "Connecting" | "NotConnected" | "Unknown") | undefined;
	readonly connectionType: "ExpressRoute" | "IPsec" | "VPNClient" | "Vnet2Vnet";
	readonly egressBytesTransferred?: number | undefined;
	readonly enableBgp?: boolean | undefined;
	readonly ingressBytesTransferred?: number | undefined;
	readonly localNetworkGateway2?: LocalNetworkGateway | undefined;
	readonly peer?: SubResource | undefined;
	readonly provisioningState?: string | undefined;
	readonly resourceGuid?: string | undefined;
	readonly routingWeight?: number | undefined;
	readonly sharedKey?: string | undefined;
	readonly tunnelConnectionStatus?: TunnelConnectionHealth[] | undefined;
	readonly virtualNetworkGateway1: VirtualNetworkGateway;
	readonly virtualNetworkGateway2?: VirtualNetworkGateway | undefined;
}
export interface VirtualNetworkGatewayIPConfiguration {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: VirtualNetworkGatewayIPConfigurationPropertiesFormat | undefined;
}
export interface VirtualNetworkGatewayIPConfigurationPropertiesFormat {
	readonly privateIPAllocationMethod?: ("Dynamic" | "Static") | undefined;
	readonly provisioningState?: string | undefined;
	readonly publicIPAddress: SubResource;
	readonly subnet: SubResource;
}
export interface VirtualNetworkGatewayPropertiesFormat {
	readonly activeActive?: boolean | undefined;
	readonly bgpSettings?: BgpSettings | undefined;
	readonly enableBgp?: boolean | undefined;
	readonly gatewayDefaultSite?: SubResource | undefined;
	readonly gatewayType: "ExpressRoute" | "Vpn";
	readonly ipConfigurations: VirtualNetworkGatewayIPConfiguration[];
	readonly provisioningState?: string | undefined;
	readonly resourceGuid?: string | undefined;
	readonly sku?: VirtualNetworkGatewaySku | undefined;
	readonly vpnClientConfiguration?: VpnClientConfiguration | undefined;
	readonly vpnType: "PolicyBased" | "RouteBased";
}
export interface VirtualNetworkGatewaySku {
	readonly capacity?: number | undefined;
	readonly name: "Basic" | "HighPerformance" | "Standard" | "UltraPerformance";
	readonly tier: "Basic" | "HighPerformance" | "Standard" | "UltraPerformance";
}
export interface VirtualNetworkPeering {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: VirtualNetworkPeeringPropertiesFormat | undefined;
}
export interface VirtualNetworkPeeringPropertiesFormat {
	readonly allowForwardedTraffic?: boolean | undefined;
	readonly allowGatewayTransit?: boolean | undefined;
	readonly allowVirtualNetworkAccess?: boolean | undefined;
	readonly peeringState?: ("Connected" | "Disconnected" | "Initiated") | undefined;
	readonly provisioningState?: string | undefined;
	readonly remoteVirtualNetwork?: SubResource | undefined;
	readonly useRemoteGateways?: boolean | undefined;
}
export interface VirtualNetworkPropertiesFormat {
	readonly addressSpace?: AddressSpace | undefined;
	readonly dhcpOptions?: DhcpOptions | undefined;
	readonly provisioningState?: string | undefined;
	readonly resourceGuid?: string | undefined;
	readonly subnets?: Subnet[] | undefined;
	readonly virtualNetworkPeerings?: VirtualNetworkPeering[] | undefined;
}
export interface VpnClientConfiguration {
	readonly vpnClientAddressPool?: AddressSpace | undefined;
	readonly vpnClientRevokedCertificates?: VpnClientRevokedCertificate[] | undefined;
	readonly vpnClientRootCertificates?: VpnClientRootCertificate[] | undefined;
}
export interface VpnClientRevokedCertificate {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: VpnClientRevokedCertificatePropertiesFormat | undefined;
}
export interface VpnClientRevokedCertificatePropertiesFormat {
	readonly provisioningState?: string | undefined;
	readonly thumbprint?: string | undefined;
}
export interface VpnClientRootCertificate {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties: VpnClientRootCertificatePropertiesFormat;
}
export interface VpnClientRootCertificatePropertiesFormat {
	readonly provisioningState?: string | undefined;
	readonly publicCertData: string;
}
export default {
	applicationGateways: applicationGateways,
	connections: connections,
	expressRouteCircuits: expressRouteCircuits,
	"expressRouteCircuits/authorizations": expressRouteCircuits_authorizations,
	"expressRouteCircuits/peerings": expressRouteCircuits_peerings,
	loadBalancers: loadBalancers,
	localNetworkGateways: localNetworkGateways,
	networkInterfaces: networkInterfaces,
	networkSecurityGroups: networkSecurityGroups,
	"networkSecurityGroups/securityRules": networkSecurityGroups_securityRules,
	networkWatchers: networkWatchers,
	"networkWatchers/packetCaptures": networkWatchers_packetCaptures,
	publicIPAddresses: publicIPAddresses,
	routeTables: routeTables,
	"routeTables/routes": routeTables_routes,
	virtualNetworkGateways: virtualNetworkGateways,
	virtualNetworks: virtualNetworks,
	"virtualNetworks/subnets": virtualNetworks_subnets,
	"virtualNetworks/virtualNetworkPeerings": virtualNetworks_virtualNetworkPeerings,
};

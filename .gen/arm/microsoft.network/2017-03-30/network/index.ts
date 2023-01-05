import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class applicationGateways
	extends ArmResource<applicationGatewaysComponentInputs>
	implements applicationGatewaysComponentOutputs
{
	constructor(entity: ADKEntity, options: applicationGatewaysComponentInputs) {
		super(entity, options.name, "Microsoft.Network/applicationGateways", "2017-03-30", options);
	}
	public readonly apiVersion: "2017-03-30";
	public readonly id: string;
	public readonly type: "Microsoft.Network/applicationGateways";
}
export interface applicationGatewaysComponentOutputs {
	readonly apiVersion: "2017-03-30";
	readonly id: string;
	readonly type: "Microsoft.Network/applicationGateways";
}
export interface applicationGatewaysComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: ApplicationGatewayPropertiesFormat;
	readonly tags?: ResourceTags;
}
export class connections extends ArmResource<connectionsComponentInputs> implements connectionsComponentOutputs {
	constructor(entity: ADKEntity, options: connectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/connections", "2017-03-30", options);
	}
	public readonly apiVersion: "2017-03-30";
	public readonly id: string;
	public readonly type: "Microsoft.Network/connections";
}
export interface connectionsComponentOutputs {
	readonly apiVersion: "2017-03-30";
	readonly id: string;
	readonly type: "Microsoft.Network/connections";
}
export interface connectionsComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties: VirtualNetworkGatewayConnectionPropertiesFormat;
	readonly tags?: ResourceTags;
}
export class expressRouteCircuits
	extends ArmResource<expressRouteCircuitsComponentInputs>
	implements expressRouteCircuitsComponentOutputs
{
	constructor(entity: ADKEntity, options: expressRouteCircuitsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/expressRouteCircuits", "2017-03-30", options);
	}
	public readonly apiVersion: "2017-03-30";
	public readonly id: string;
	public readonly type: "Microsoft.Network/expressRouteCircuits";
}
export interface expressRouteCircuitsComponentOutputs {
	readonly apiVersion: "2017-03-30";
	readonly id: string;
	readonly type: "Microsoft.Network/expressRouteCircuits";
}
export interface expressRouteCircuitsComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: ExpressRouteCircuitPropertiesFormat;
	readonly sku?: ExpressRouteCircuitSku;
	readonly tags?: ResourceTags;
}
export class expressRouteCircuits_authorizations
	extends ArmResource<expressRouteCircuits_authorizationsComponentInputs>
	implements expressRouteCircuits_authorizationsComponentOutputs
{
	constructor(entity: ADKEntity, options: expressRouteCircuits_authorizationsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/expressRouteCircuits/authorizations", "2017-03-30", options);
	}
	public readonly apiVersion: "2017-03-30";
	public readonly id: string;
	public readonly type: "Microsoft.Network/expressRouteCircuits/authorizations";
}
export interface expressRouteCircuits_authorizationsComponentOutputs {
	readonly apiVersion: "2017-03-30";
	readonly id: string;
	readonly type: "Microsoft.Network/expressRouteCircuits/authorizations";
}
export interface expressRouteCircuits_authorizationsComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: AuthorizationPropertiesFormat;
}
export class expressRouteCircuits_peerings
	extends ArmResource<expressRouteCircuits_peeringsComponentInputs>
	implements expressRouteCircuits_peeringsComponentOutputs
{
	constructor(entity: ADKEntity, options: expressRouteCircuits_peeringsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/expressRouteCircuits/peerings", "2017-03-30", options);
	}
	public readonly apiVersion: "2017-03-30";
	public readonly id: string;
	public readonly type: "Microsoft.Network/expressRouteCircuits/peerings";
}
export interface expressRouteCircuits_peeringsComponentOutputs {
	readonly apiVersion: "2017-03-30";
	readonly id: string;
	readonly type: "Microsoft.Network/expressRouteCircuits/peerings";
}
export interface expressRouteCircuits_peeringsComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: ExpressRouteCircuitPeeringPropertiesFormat;
}
export class loadBalancers extends ArmResource<loadBalancersComponentInputs> implements loadBalancersComponentOutputs {
	constructor(entity: ADKEntity, options: loadBalancersComponentInputs) {
		super(entity, options.name, "Microsoft.Network/loadBalancers", "2017-03-30", options);
	}
	public readonly apiVersion: "2017-03-30";
	public readonly id: string;
	public readonly type: "Microsoft.Network/loadBalancers";
}
export interface loadBalancersComponentOutputs {
	readonly apiVersion: "2017-03-30";
	readonly id: string;
	readonly type: "Microsoft.Network/loadBalancers";
}
export interface loadBalancersComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: LoadBalancerPropertiesFormat;
	readonly tags?: ResourceTags;
}
export class localNetworkGateways
	extends ArmResource<localNetworkGatewaysComponentInputs>
	implements localNetworkGatewaysComponentOutputs
{
	constructor(entity: ADKEntity, options: localNetworkGatewaysComponentInputs) {
		super(entity, options.name, "Microsoft.Network/localNetworkGateways", "2017-03-30", options);
	}
	public readonly apiVersion: "2017-03-30";
	public readonly id: string;
	public readonly type: "Microsoft.Network/localNetworkGateways";
}
export interface localNetworkGatewaysComponentOutputs {
	readonly apiVersion: "2017-03-30";
	readonly id: string;
	readonly type: "Microsoft.Network/localNetworkGateways";
}
export interface localNetworkGatewaysComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties: LocalNetworkGatewayPropertiesFormat;
	readonly tags?: ResourceTags;
}
export class networkInterfaces
	extends ArmResource<networkInterfacesComponentInputs>
	implements networkInterfacesComponentOutputs
{
	constructor(entity: ADKEntity, options: networkInterfacesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/networkInterfaces", "2017-03-30", options);
	}
	public readonly apiVersion: "2017-03-30";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkInterfaces";
}
export interface networkInterfacesComponentOutputs {
	readonly apiVersion: "2017-03-30";
	readonly id: string;
	readonly type: "Microsoft.Network/networkInterfaces";
}
export interface networkInterfacesComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: NetworkInterfacePropertiesFormat;
	readonly tags?: ResourceTags;
}
export class networkSecurityGroups
	extends ArmResource<networkSecurityGroupsComponentInputs>
	implements networkSecurityGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: networkSecurityGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/networkSecurityGroups", "2017-03-30", options);
	}
	public readonly apiVersion: "2017-03-30";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkSecurityGroups";
}
export interface networkSecurityGroupsComponentOutputs {
	readonly apiVersion: "2017-03-30";
	readonly id: string;
	readonly type: "Microsoft.Network/networkSecurityGroups";
}
export interface networkSecurityGroupsComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: NetworkSecurityGroupPropertiesFormat;
	readonly tags?: ResourceTags;
}
export class networkSecurityGroups_securityRules
	extends ArmResource<networkSecurityGroups_securityRulesComponentInputs>
	implements networkSecurityGroups_securityRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: networkSecurityGroups_securityRulesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/networkSecurityGroups/securityRules", "2017-03-30", options);
	}
	public readonly apiVersion: "2017-03-30";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkSecurityGroups/securityRules";
}
export interface networkSecurityGroups_securityRulesComponentOutputs {
	readonly apiVersion: "2017-03-30";
	readonly id: string;
	readonly type: "Microsoft.Network/networkSecurityGroups/securityRules";
}
export interface networkSecurityGroups_securityRulesComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: SecurityRulePropertiesFormat;
}
export class networkWatchers
	extends ArmResource<networkWatchersComponentInputs>
	implements networkWatchersComponentOutputs
{
	constructor(entity: ADKEntity, options: networkWatchersComponentInputs) {
		super(entity, options.name, "Microsoft.Network/networkWatchers", "2017-03-30", options);
	}
	public readonly apiVersion: "2017-03-30";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkWatchers";
}
export interface networkWatchersComponentOutputs {
	readonly apiVersion: "2017-03-30";
	readonly id: string;
	readonly type: "Microsoft.Network/networkWatchers";
}
export interface networkWatchersComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: NetworkWatcherPropertiesFormat;
	readonly tags?: ResourceTags;
}
export class networkWatchers_packetCaptures
	extends ArmResource<networkWatchers_packetCapturesComponentInputs>
	implements networkWatchers_packetCapturesComponentOutputs
{
	constructor(entity: ADKEntity, options: networkWatchers_packetCapturesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/networkWatchers/packetCaptures", "2017-03-30", options);
	}
	public readonly apiVersion: "2017-03-30";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkWatchers/packetCaptures";
}
export interface networkWatchers_packetCapturesComponentOutputs {
	readonly apiVersion: "2017-03-30";
	readonly id: string;
	readonly type: "Microsoft.Network/networkWatchers/packetCaptures";
}
export interface networkWatchers_packetCapturesComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties: PacketCaptureParametersOrPacketCaptureResultProperties;
}
export class publicIPAddresses
	extends ArmResource<publicIPAddressesComponentInputs>
	implements publicIPAddressesComponentOutputs
{
	constructor(entity: ADKEntity, options: publicIPAddressesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/publicIPAddresses", "2017-03-30", options);
	}
	public readonly apiVersion: "2017-03-30";
	public readonly id: string;
	public readonly type: "Microsoft.Network/publicIPAddresses";
}
export interface publicIPAddressesComponentOutputs {
	readonly apiVersion: "2017-03-30";
	readonly id: string;
	readonly type: "Microsoft.Network/publicIPAddresses";
}
export interface publicIPAddressesComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: PublicIPAddressPropertiesFormat;
	readonly tags?: ResourceTags;
}
export class routeFilters extends ArmResource<routeFiltersComponentInputs> implements routeFiltersComponentOutputs {
	constructor(entity: ADKEntity, options: routeFiltersComponentInputs) {
		super(entity, options.name, "Microsoft.Network/routeFilters", "2017-03-30", options);
	}
	public readonly apiVersion: "2017-03-30";
	public readonly id: string;
	public readonly type: "Microsoft.Network/routeFilters";
}
export interface routeFiltersComponentOutputs {
	readonly apiVersion: "2017-03-30";
	readonly id: string;
	readonly type: "Microsoft.Network/routeFilters";
}
export interface routeFiltersComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: RouteFilterPropertiesFormat;
	readonly tags?: ResourceTags;
}
export class routeFilters_routeFilterRules
	extends ArmResource<routeFilters_routeFilterRulesComponentInputs>
	implements routeFilters_routeFilterRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: routeFilters_routeFilterRulesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/routeFilters/routeFilterRules", "2017-03-30", options);
	}
	public readonly apiVersion: "2017-03-30";
	public readonly id: string;
	public readonly type: "Microsoft.Network/routeFilters/routeFilterRules";
}
export interface routeFilters_routeFilterRulesComponentOutputs {
	readonly apiVersion: "2017-03-30";
	readonly id: string;
	readonly type: "Microsoft.Network/routeFilters/routeFilterRules";
}
export interface routeFilters_routeFilterRulesComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: RouteFilterRulePropertiesFormat;
	readonly tags?: RouteFilterRuleTags;
}
export class routeTables extends ArmResource<routeTablesComponentInputs> implements routeTablesComponentOutputs {
	constructor(entity: ADKEntity, options: routeTablesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/routeTables", "2017-03-30", options);
	}
	public readonly apiVersion: "2017-03-30";
	public readonly id: string;
	public readonly type: "Microsoft.Network/routeTables";
}
export interface routeTablesComponentOutputs {
	readonly apiVersion: "2017-03-30";
	readonly id: string;
	readonly type: "Microsoft.Network/routeTables";
}
export interface routeTablesComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: RouteTablePropertiesFormat;
	readonly tags?: ResourceTags;
}
export class routeTables_routes
	extends ArmResource<routeTables_routesComponentInputs>
	implements routeTables_routesComponentOutputs
{
	constructor(entity: ADKEntity, options: routeTables_routesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/routeTables/routes", "2017-03-30", options);
	}
	public readonly apiVersion: "2017-03-30";
	public readonly id: string;
	public readonly type: "Microsoft.Network/routeTables/routes";
}
export interface routeTables_routesComponentOutputs {
	readonly apiVersion: "2017-03-30";
	readonly id: string;
	readonly type: "Microsoft.Network/routeTables/routes";
}
export interface routeTables_routesComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: RoutePropertiesFormat;
}
export class virtualNetworkGateways
	extends ArmResource<virtualNetworkGatewaysComponentInputs>
	implements virtualNetworkGatewaysComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualNetworkGatewaysComponentInputs) {
		super(entity, options.name, "Microsoft.Network/virtualNetworkGateways", "2017-03-30", options);
	}
	public readonly apiVersion: "2017-03-30";
	public readonly id: string;
	public readonly type: "Microsoft.Network/virtualNetworkGateways";
}
export interface virtualNetworkGatewaysComponentOutputs {
	readonly apiVersion: "2017-03-30";
	readonly id: string;
	readonly type: "Microsoft.Network/virtualNetworkGateways";
}
export interface virtualNetworkGatewaysComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties: VirtualNetworkGatewayPropertiesFormat;
	readonly tags?: ResourceTags;
}
export class virtualNetworks
	extends ArmResource<virtualNetworksComponentInputs>
	implements virtualNetworksComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualNetworksComponentInputs) {
		super(entity, options.name, "Microsoft.Network/virtualNetworks", "2017-03-30", options);
	}
	public readonly apiVersion: "2017-03-30";
	public readonly id: string;
	public readonly type: "Microsoft.Network/virtualNetworks";
}
export interface virtualNetworksComponentOutputs {
	readonly apiVersion: "2017-03-30";
	readonly id: string;
	readonly type: "Microsoft.Network/virtualNetworks";
}
export interface virtualNetworksComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: VirtualNetworkPropertiesFormat;
	readonly tags?: ResourceTags;
}
export class virtualNetworks_subnets
	extends ArmResource<virtualNetworks_subnetsComponentInputs>
	implements virtualNetworks_subnetsComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualNetworks_subnetsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/virtualNetworks/subnets", "2017-03-30", options);
	}
	public readonly apiVersion: "2017-03-30";
	public readonly id: string;
	public readonly type: "Microsoft.Network/virtualNetworks/subnets";
}
export interface virtualNetworks_subnetsComponentOutputs {
	readonly apiVersion: "2017-03-30";
	readonly id: string;
	readonly type: "Microsoft.Network/virtualNetworks/subnets";
}
export interface virtualNetworks_subnetsComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: SubnetPropertiesFormat;
}
export class virtualNetworks_virtualNetworkPeerings
	extends ArmResource<virtualNetworks_virtualNetworkPeeringsComponentInputs>
	implements virtualNetworks_virtualNetworkPeeringsComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualNetworks_virtualNetworkPeeringsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/virtualNetworks/virtualNetworkPeerings", "2017-03-30", options);
	}
	public readonly apiVersion: "2017-03-30";
	public readonly id: string;
	public readonly type: "Microsoft.Network/virtualNetworks/virtualNetworkPeerings";
}
export interface virtualNetworks_virtualNetworkPeeringsComponentOutputs {
	readonly apiVersion: "2017-03-30";
	readonly id: string;
	readonly type: "Microsoft.Network/virtualNetworks/virtualNetworkPeerings";
}
export interface virtualNetworks_virtualNetworkPeeringsComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: VirtualNetworkPeeringPropertiesFormat;
}
export interface AddressSpace {
	readonly addressPrefixes?: string[];
}
export interface ApplicationGatewayAuthenticationCertificate {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: ApplicationGatewayAuthenticationCertificatePropertiesFormat;
}
export interface ApplicationGatewayAuthenticationCertificatePropertiesFormat {
	readonly data?: string;
	readonly provisioningState?: string;
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
}
export interface ApplicationGatewayBackendAddressPoolPropertiesFormat {
	readonly backendAddresses?: ApplicationGatewayBackendAddress[];
	readonly backendIPConfigurations?: NetworkInterfaceIPConfiguration[];
	readonly provisioningState?: string;
}
export interface ApplicationGatewayBackendHttpSettings {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: ApplicationGatewayBackendHttpSettingsPropertiesFormat;
}
export interface ApplicationGatewayBackendHttpSettingsPropertiesFormat {
	readonly authenticationCertificates?: SubResource[];
	readonly connectionDraining?: ApplicationGatewayConnectionDraining;
	readonly cookieBasedAffinity?: "Disabled" | "Enabled";
	readonly port?: number;
	readonly probe?: SubResource;
	readonly protocol?: "Http" | "Https";
	readonly provisioningState?: string;
	readonly requestTimeout?: number;
}
export interface ApplicationGatewayConnectionDraining {
	readonly drainTimeoutInSec: number;
	readonly enabled: boolean;
}
export interface ApplicationGatewayFirewallDisabledRuleGroup {
	readonly ruleGroupName: string;
	readonly rules?: number[];
}
export interface ApplicationGatewayFrontendIPConfiguration {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: ApplicationGatewayFrontendIPConfigurationPropertiesFormat;
}
export interface ApplicationGatewayFrontendIPConfigurationPropertiesFormat {
	readonly privateIPAddress?: string;
	readonly privateIPAllocationMethod?: "Dynamic" | "Static";
	readonly provisioningState?: string;
	readonly publicIPAddress?: SubResource;
	readonly subnet?: SubResource;
}
export interface ApplicationGatewayFrontendPort {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: ApplicationGatewayFrontendPortPropertiesFormat;
}
export interface ApplicationGatewayFrontendPortPropertiesFormat {
	readonly port?: number;
	readonly provisioningState?: string;
}
export interface ApplicationGatewayHttpListener {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: ApplicationGatewayHttpListenerPropertiesFormat;
}
export interface ApplicationGatewayHttpListenerPropertiesFormat {
	readonly frontendIPConfiguration?: SubResource;
	readonly frontendPort?: SubResource;
	readonly hostName?: string;
	readonly protocol?: "Http" | "Https";
	readonly provisioningState?: string;
	readonly requireServerNameIndication?: boolean;
	readonly sslCertificate?: SubResource;
}
export interface ApplicationGatewayIPConfiguration {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: ApplicationGatewayIPConfigurationPropertiesFormat;
}
export interface ApplicationGatewayIPConfigurationPropertiesFormat {
	readonly provisioningState?: string;
	readonly subnet?: SubResource;
}
export interface ApplicationGatewayPathRule {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: ApplicationGatewayPathRulePropertiesFormat;
}
export interface ApplicationGatewayPathRulePropertiesFormat {
	readonly backendAddressPool?: SubResource;
	readonly backendHttpSettings?: SubResource;
	readonly paths?: string[];
	readonly provisioningState?: string;
}
export interface ApplicationGatewayProbe {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: ApplicationGatewayProbePropertiesFormat;
}
export interface ApplicationGatewayProbePropertiesFormat {
	readonly host?: string;
	readonly interval?: number;
	readonly path?: string;
	readonly protocol?: "Http" | "Https";
	readonly provisioningState?: string;
	readonly timeout?: number;
	readonly unhealthyThreshold?: number;
}
export interface ApplicationGatewayPropertiesFormat {
	readonly authenticationCertificates?: ApplicationGatewayAuthenticationCertificate[];
	readonly backendAddressPools?: ApplicationGatewayBackendAddressPool[];
	readonly backendHttpSettingsCollection?: ApplicationGatewayBackendHttpSettings[];
	readonly frontendIPConfigurations?: ApplicationGatewayFrontendIPConfiguration[];
	readonly frontendPorts?: ApplicationGatewayFrontendPort[];
	readonly gatewayIPConfigurations?: ApplicationGatewayIPConfiguration[];
	readonly httpListeners?: ApplicationGatewayHttpListener[];
	readonly operationalState?: "Running" | "Starting" | "Stopped" | "Stopping";
	readonly probes?: ApplicationGatewayProbe[];
	readonly provisioningState?: string;
	readonly requestRoutingRules?: ApplicationGatewayRequestRoutingRule[];
	readonly resourceGuid?: string;
	readonly sku?: ApplicationGatewaySku;
	readonly sslCertificates?: ApplicationGatewaySslCertificate[];
	readonly sslPolicy?: ApplicationGatewaySslPolicy;
	readonly urlPathMaps?: ApplicationGatewayUrlPathMap[];
	readonly webApplicationFirewallConfiguration?: ApplicationGatewayWebApplicationFirewallConfiguration;
}
export interface ApplicationGatewayRequestRoutingRule {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: ApplicationGatewayRequestRoutingRulePropertiesFormat;
}
export interface ApplicationGatewayRequestRoutingRulePropertiesFormat {
	readonly backendAddressPool?: SubResource;
	readonly backendHttpSettings?: SubResource;
	readonly httpListener?: SubResource;
	readonly provisioningState?: string;
	readonly ruleType?: "Basic" | "PathBasedRouting";
	readonly urlPathMap?: SubResource;
}
export interface ApplicationGatewaySku {
	readonly capacity?: number;
	readonly name?: "Standard_Large" | "Standard_Medium" | "Standard_Small" | "WAF_Large" | "WAF_Medium";
	readonly tier?: "Standard" | "WAF";
}
export interface ApplicationGatewaySslCertificate {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: ApplicationGatewaySslCertificatePropertiesFormat;
}
export interface ApplicationGatewaySslCertificatePropertiesFormat {
	readonly data?: string;
	readonly password?: string;
	readonly provisioningState?: string;
	readonly publicCertData?: string;
}
export interface ApplicationGatewaySslPolicy {
	readonly disabledSslProtocols?: "TLSv1_0" | "TLSv1_1" | "TLSv1_2"[];
}
export interface ApplicationGatewayUrlPathMap {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: ApplicationGatewayUrlPathMapPropertiesFormat;
}
export interface ApplicationGatewayUrlPathMapPropertiesFormat {
	readonly defaultBackendAddressPool?: SubResource;
	readonly defaultBackendHttpSettings?: SubResource;
	readonly pathRules?: ApplicationGatewayPathRule[];
	readonly provisioningState?: string;
}
export interface ApplicationGatewayWebApplicationFirewallConfiguration {
	readonly disabledRuleGroups?: ApplicationGatewayFirewallDisabledRuleGroup[];
	readonly enabled: boolean;
	readonly firewallMode: "Detection" | "Prevention";
	readonly ruleSetType: string;
	readonly ruleSetVersion: string;
}
export interface AuthorizationPropertiesFormat {
	readonly authorizationKey?: string;
	readonly authorizationUseStatus?: "Available" | "InUse";
	readonly provisioningState?: string;
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
	readonly outboundNatRule?: SubResource;
	readonly provisioningState?: string;
}
export interface BgpSettings {
	readonly asn?: number;
	readonly bgpPeeringAddress?: string;
	readonly peerWeight?: number;
}
export interface DhcpOptions {
	readonly dnsServers?: string[];
}
export interface ExpressRouteCircuitAuthorization {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: AuthorizationPropertiesFormat;
}
export interface ExpressRouteCircuitPeering {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: ExpressRouteCircuitPeeringPropertiesFormat;
}
export interface ExpressRouteCircuitPeeringConfig {
	readonly advertisedPublicPrefixes?: string[];
	readonly advertisedPublicPrefixesState?: "Configured" | "Configuring" | "NotConfigured" | "ValidationNeeded";
	readonly customerASN?: number;
	readonly routingRegistryName?: string;
}
export interface ExpressRouteCircuitPeeringPropertiesFormat {
	readonly azureASN?: number;
	readonly gatewayManagerEtag?: string;
	readonly ipv6PeeringConfig?: Ipv6ExpressRouteCircuitPeeringConfig;
	readonly lastModifiedBy?: string;
	readonly microsoftPeeringConfig?: ExpressRouteCircuitPeeringConfig;
	readonly peerASN?: number;
	readonly peeringType?: "AzurePrivatePeering" | "AzurePublicPeering" | "MicrosoftPeering";
	readonly primaryAzurePort?: string;
	readonly primaryPeerAddressPrefix?: string;
	readonly provisioningState?: string;
	readonly routeFilter?: RouteFilter;
	readonly secondaryAzurePort?: string;
	readonly secondaryPeerAddressPrefix?: string;
	readonly sharedKey?: string;
	readonly state?: "Disabled" | "Enabled";
	readonly stats?: ExpressRouteCircuitStats;
	readonly vlanId?: number;
}
export interface ExpressRouteCircuitPropertiesFormat {
	readonly allowClassicOperations?: boolean;
	readonly authorizations?: ExpressRouteCircuitAuthorization[];
	readonly circuitProvisioningState?: string;
	readonly gatewayManagerEtag?: string;
	readonly peerings?: ExpressRouteCircuitPeering[];
	readonly provisioningState?: string;
	readonly serviceKey?: string;
	readonly serviceProviderNotes?: string;
	readonly serviceProviderProperties?: ExpressRouteCircuitServiceProviderProperties;
	readonly serviceProviderProvisioningState?: "Deprovisioning" | "NotProvisioned" | "Provisioned" | "Provisioning";
}
export interface ExpressRouteCircuitServiceProviderProperties {
	readonly bandwidthInMbps?: number;
	readonly peeringLocation?: string;
	readonly serviceProviderName?: string;
}
export interface ExpressRouteCircuitSku {
	readonly family?: "MeteredData" | "UnlimitedData";
	readonly name?: string;
	readonly tier?: "Premium" | "Standard";
}
export interface ExpressRouteCircuitStats {
	readonly primarybytesIn?: number;
	readonly primarybytesOut?: number;
	readonly secondarybytesIn?: number;
	readonly secondarybytesOut?: number;
}
export interface FrontendIPConfiguration {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: FrontendIPConfigurationPropertiesFormat;
}
export interface FrontendIPConfigurationPropertiesFormat {
	readonly inboundNatPools?: SubResource[];
	readonly inboundNatRules?: SubResource[];
	readonly loadBalancingRules?: SubResource[];
	readonly outboundNatRules?: SubResource[];
	readonly privateIPAddress?: string;
	readonly privateIPAllocationMethod?: "Dynamic" | "Static";
	readonly provisioningState?: string;
	readonly publicIPAddress?: PublicIPAddress;
	readonly subnet?: Subnet;
}
export interface InboundNatPool {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: InboundNatPoolPropertiesFormat;
}
export interface InboundNatPoolPropertiesFormat {
	readonly backendPort: number;
	readonly frontendIPConfiguration?: SubResource;
	readonly frontendPortRangeEnd: number;
	readonly frontendPortRangeStart: number;
	readonly protocol: "Tcp" | "Udp";
	readonly provisioningState?: string;
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
	readonly frontendIPConfiguration?: SubResource;
	readonly frontendPort?: number;
	readonly idleTimeoutInMinutes?: number;
	readonly protocol?: "Tcp" | "Udp";
	readonly provisioningState?: string;
}
export interface IPConfiguration {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: IPConfigurationPropertiesFormat;
}
export interface IPConfigurationPropertiesFormat {
	readonly privateIPAddress?: string;
	readonly privateIPAllocationMethod?: "Dynamic" | "Static";
	readonly provisioningState?: string;
	readonly publicIPAddress?: PublicIPAddress;
	readonly subnet?: Subnet;
}
export interface IpsecPolicy {
	readonly dhGroup: "DHGroup1" | "DHGroup14" | "DHGroup2" | "DHGroup2048" | "DHGroup24" | "ECP256" | "ECP384" | "None";
	readonly ikeEncryption: "AES128" | "AES192" | "AES256" | "DES" | "DES3";
	readonly ikeIntegrity: "MD5" | "SHA1" | "SHA256" | "SHA384";
	readonly ipsecEncryption:
		| "AES128"
		| "AES192"
		| "AES256"
		| "DES"
		| "DES3"
		| "GCMAES128"
		| "GCMAES192"
		| "GCMAES256"
		| "None";
	readonly ipsecIntegrity: "GCMAES128" | "GCMAES192" | "GCMAES256" | "MD5" | "SHA1" | "SHA256";
	readonly pfsGroup: "ECP256" | "ECP384" | "None" | "PFS1" | "PFS2" | "PFS2048" | "PFS24";
	readonly saDataSizeKilobytes: number;
	readonly saLifeTimeSeconds: number;
}
export interface Ipv6ExpressRouteCircuitPeeringConfig {
	readonly microsoftPeeringConfig?: ExpressRouteCircuitPeeringConfig;
	readonly primaryPeerAddressPrefix?: string;
	readonly routeFilter?: RouteFilter;
	readonly secondaryPeerAddressPrefix?: string;
	readonly state?: "Disabled" | "Enabled";
}
export interface LoadBalancerPropertiesFormat {
	readonly backendAddressPools?: BackendAddressPool[];
	readonly frontendIPConfigurations?: FrontendIPConfiguration[];
	readonly inboundNatPools?: InboundNatPool[];
	readonly inboundNatRules?: InboundNatRule[];
	readonly loadBalancingRules?: LoadBalancingRule[];
	readonly outboundNatRules?: OutboundNatRule[];
	readonly probes?: Probe[];
	readonly provisioningState?: string;
	readonly resourceGuid?: string;
}
export interface LoadBalancingRule {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: LoadBalancingRulePropertiesFormat;
}
export interface LoadBalancingRulePropertiesFormat {
	readonly backendAddressPool?: SubResource;
	readonly backendPort?: number;
	readonly enableFloatingIP?: boolean;
	readonly frontendIPConfiguration?: SubResource;
	readonly frontendPort: number;
	readonly idleTimeoutInMinutes?: number;
	readonly loadDistribution?: "Default" | "SourceIP" | "SourceIPProtocol";
	readonly probe?: SubResource;
	readonly protocol: "Tcp" | "Udp";
	readonly provisioningState?: string;
}
export interface LocalNetworkGateway {
	readonly etag?: string;
	readonly id?: string;
	readonly location?: string;
	readonly name?: string;
	readonly properties: LocalNetworkGatewayPropertiesFormat;
	readonly tags?: ResourceTags;
	readonly type?: string;
}
export interface LocalNetworkGatewayPropertiesFormat {
	readonly bgpSettings?: BgpSettings;
	readonly gatewayIpAddress?: string;
	readonly localNetworkAddressSpace?: AddressSpace;
	readonly provisioningState?: string;
	readonly resourceGuid?: string;
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
	readonly loadBalancerBackendAddressPools?: BackendAddressPool[];
	readonly loadBalancerInboundNatRules?: InboundNatRule[];
	readonly primary?: boolean;
	readonly privateIPAddress?: string;
	readonly privateIPAddressVersion?: "IPv4" | "IPv6";
	readonly privateIPAllocationMethod?: "Dynamic" | "Static";
	readonly provisioningState?: string;
	readonly publicIPAddress?: PublicIPAddress;
	readonly subnet?: Subnet;
}
export interface NetworkInterfacePropertiesFormat {
	readonly dnsSettings?: NetworkInterfaceDnsSettings;
	readonly enableAcceleratedNetworking?: boolean;
	readonly enableIPForwarding?: boolean;
	readonly ipConfigurations?: NetworkInterfaceIPConfiguration[];
	readonly macAddress?: string;
	readonly networkSecurityGroup?: NetworkSecurityGroup;
	readonly primary?: boolean;
	readonly provisioningState?: string;
	readonly resourceGuid?: string;
	readonly virtualMachine?: SubResource;
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
export interface NetworkWatcherPropertiesFormat {
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface OutboundNatRule {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: OutboundNatRulePropertiesFormat;
}
export interface OutboundNatRulePropertiesFormat {
	readonly allocatedOutboundPorts?: number;
	readonly backendAddressPool: SubResource;
	readonly frontendIPConfigurations?: SubResource[];
	readonly provisioningState?: string;
}
export interface PacketCaptureFilter {
	readonly localIPAddress?: string;
	readonly localPort?: string;
	readonly protocol?: "any" | "TCP" | "UDP";
	readonly remoteIPAddress?: string;
	readonly remotePort?: string;
}
export interface PacketCaptureParametersOrPacketCaptureResultProperties {
	readonly bytesToCapturePerPacket?: number;
	readonly filters?: PacketCaptureFilter[];
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly storageLocation: PacketCaptureStorageLocation;
	readonly target: string;
	readonly timeLimitInSeconds?: number;
	readonly totalBytesPerSession?: number;
}
export interface PacketCaptureStorageLocation {
	readonly filePath?: string;
	readonly storageId?: string;
	readonly storagePath?: string;
}
export interface Probe {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: ProbePropertiesFormat;
}
export interface ProbePropertiesFormat {
	readonly intervalInSeconds?: number;
	readonly loadBalancingRules?: SubResource[];
	readonly numberOfProbes?: number;
	readonly port: number;
	readonly protocol: "Http" | "Tcp";
	readonly provisioningState?: string;
	readonly requestPath?: string;
}
export interface PublicIPAddress {
	readonly etag?: string;
	readonly id?: string;
	readonly location?: string;
	readonly name?: string;
	readonly properties?: PublicIPAddressPropertiesFormat;
	readonly tags?: ResourceTags;
	readonly type?: string;
}
export interface PublicIPAddressDnsSettings {
	readonly domainNameLabel?: string;
	readonly fqdn?: string;
	readonly reverseFqdn?: string;
}
export interface PublicIPAddressPropertiesFormat {
	readonly dnsSettings?: PublicIPAddressDnsSettings;
	readonly idleTimeoutInMinutes?: number;
	readonly ipAddress?: string;
	readonly ipConfiguration?: IPConfiguration;
	readonly provisioningState?: string;
	readonly publicIPAddressVersion?: "IPv4" | "IPv6";
	readonly publicIPAllocationMethod?: "Dynamic" | "Static";
	readonly resourceGuid?: string;
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
export interface RouteFilter {
	readonly etag?: string;
	readonly id?: string;
	readonly location?: string;
	readonly name?: string;
	readonly properties?: RouteFilterPropertiesFormat;
	readonly tags?: ResourceTags;
	readonly type?: string;
}
export interface RouteFilterPropertiesFormat {
	readonly peerings?: ExpressRouteCircuitPeering[];
	readonly provisioningState?: string;
	readonly rules?: RouteFilterRule[];
}
export interface RouteFilterRule {
	readonly etag?: string;
	readonly id?: string;
	readonly location?: string;
	readonly name?: string;
	readonly properties?: RouteFilterRulePropertiesFormat;
	readonly tags?: RouteFilterRuleTags;
}
export interface RouteFilterRulePropertiesFormat {
	readonly access: "Allow" | "Deny";
	readonly communities: string[];
	readonly provisioningState?: string;
	readonly routeFilterRuleType: "Community";
}
export interface RouteFilterRuleTags {
	readonly [key: string]: string;
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
	readonly destinationAddressPrefix: string;
	readonly destinationPortRange?: string;
	readonly direction: "Inbound" | "Outbound";
	readonly priority?: number;
	readonly protocol: "" | "Tcp" | "Udp";
	readonly provisioningState?: string;
	readonly sourceAddressPrefix: string;
	readonly sourcePortRange?: string;
}
export interface Subnet {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: SubnetPropertiesFormat;
}
export interface SubnetPropertiesFormat {
	readonly addressPrefix?: string;
	readonly ipConfigurations?: IPConfiguration[];
	readonly networkSecurityGroup?: NetworkSecurityGroup;
	readonly provisioningState?: string;
	readonly resourceNavigationLinks?: ResourceNavigationLink[];
	readonly routeTable?: RouteTable;
}
export interface SubResource {
	readonly id?: string;
}
export interface TunnelConnectionHealth {
	readonly connectionStatus?: "Connected" | "Connecting" | "NotConnected" | "Unknown";
	readonly egressBytesTransferred?: number;
	readonly ingressBytesTransferred?: number;
	readonly lastConnectionEstablishedUtcTime?: string;
	readonly tunnel?: string;
}
export interface VirtualNetworkGateway {
	readonly etag?: string;
	readonly id?: string;
	readonly location?: string;
	readonly name?: string;
	readonly properties: VirtualNetworkGatewayPropertiesFormat;
	readonly tags?: ResourceTags;
	readonly type?: string;
}
export interface VirtualNetworkGatewayConnectionPropertiesFormat {
	readonly authorizationKey?: string;
	readonly connectionStatus?: "Connected" | "Connecting" | "NotConnected" | "Unknown";
	readonly connectionType: "ExpressRoute" | "IPsec" | "VPNClient" | "Vnet2Vnet";
	readonly egressBytesTransferred?: number;
	readonly enableBgp?: boolean;
	readonly ingressBytesTransferred?: number;
	readonly ipsecPolicies?: IpsecPolicy[];
	readonly localNetworkGateway2?: LocalNetworkGateway;
	readonly peer?: SubResource;
	readonly provisioningState?: string;
	readonly resourceGuid?: string;
	readonly routingWeight?: number;
	readonly sharedKey?: string;
	readonly tunnelConnectionStatus?: TunnelConnectionHealth[];
	readonly usePolicyBasedTrafficSelectors?: boolean;
	readonly virtualNetworkGateway1: VirtualNetworkGateway;
	readonly virtualNetworkGateway2?: VirtualNetworkGateway;
}
export interface VirtualNetworkGatewayIPConfiguration {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: VirtualNetworkGatewayIPConfigurationPropertiesFormat;
}
export interface VirtualNetworkGatewayIPConfigurationPropertiesFormat {
	readonly privateIPAllocationMethod?: "Dynamic" | "Static";
	readonly provisioningState?: string;
	readonly publicIPAddress?: SubResource;
	readonly subnet?: SubResource;
}
export interface VirtualNetworkGatewayPropertiesFormat {
	readonly activeActive?: boolean;
	readonly bgpSettings?: BgpSettings;
	readonly enableBgp?: boolean;
	readonly gatewayDefaultSite?: SubResource;
	readonly gatewayType?: "ExpressRoute" | "Vpn";
	readonly ipConfigurations?: VirtualNetworkGatewayIPConfiguration[];
	readonly provisioningState?: string;
	readonly resourceGuid?: string;
	readonly sku?: VirtualNetworkGatewaySku;
	readonly vpnClientConfiguration?: VpnClientConfiguration;
	readonly vpnType?: "PolicyBased" | "RouteBased";
}
export interface VirtualNetworkGatewaySku {
	readonly capacity?: number;
	readonly name?: "Basic" | "HighPerformance" | "Standard" | "UltraPerformance" | "VpnGw1" | "VpnGw2" | "VpnGw3";
	readonly tier?: "Basic" | "HighPerformance" | "Standard" | "UltraPerformance" | "VpnGw1" | "VpnGw2" | "VpnGw3";
}
export interface VirtualNetworkPeering {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: VirtualNetworkPeeringPropertiesFormat;
}
export interface VirtualNetworkPeeringPropertiesFormat {
	readonly allowForwardedTraffic?: boolean;
	readonly allowGatewayTransit?: boolean;
	readonly allowVirtualNetworkAccess?: boolean;
	readonly peeringState?: "Connected" | "Disconnected" | "Initiated";
	readonly provisioningState?: string;
	readonly remoteVirtualNetwork?: SubResource;
	readonly useRemoteGateways?: boolean;
}
export interface VirtualNetworkPropertiesFormat {
	readonly addressSpace?: AddressSpace;
	readonly dhcpOptions?: DhcpOptions;
	readonly provisioningState?: string;
	readonly resourceGuid?: string;
	readonly subnets?: Subnet[];
	readonly virtualNetworkPeerings?: VirtualNetworkPeering[];
}
export interface VpnClientConfiguration {
	readonly vpnClientAddressPool?: AddressSpace;
	readonly vpnClientRevokedCertificates?: VpnClientRevokedCertificate[];
	readonly vpnClientRootCertificates?: VpnClientRootCertificate[];
}
export interface VpnClientRevokedCertificate {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: VpnClientRevokedCertificatePropertiesFormat;
}
export interface VpnClientRevokedCertificatePropertiesFormat {
	readonly provisioningState?: string;
	readonly thumbprint?: string;
}
export interface VpnClientRootCertificate {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties: VpnClientRootCertificatePropertiesFormat;
}
export interface VpnClientRootCertificatePropertiesFormat {
	readonly provisioningState?: string;
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
	routeFilters: routeFilters,
	"routeFilters/routeFilterRules": routeFilters_routeFilterRules,
	routeTables: routeTables,
	"routeTables/routes": routeTables_routes,
	virtualNetworkGateways: virtualNetworkGateways,
	virtualNetworks: virtualNetworks,
	"virtualNetworks/subnets": virtualNetworks_subnets,
	"virtualNetworks/virtualNetworkPeerings": virtualNetworks_virtualNetworkPeerings,
};

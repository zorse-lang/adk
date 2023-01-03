import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class applicationGatewayAvailableSslOptions
	extends ArmResource<applicationGatewayAvailableSslOptionsComponentInputs>
	implements applicationGatewayAvailableSslOptionsComponentOutputs
{
	constructor(entity: ADKEntity, options: applicationGatewayAvailableSslOptionsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/applicationGatewayAvailableSslOptions", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/applicationGatewayAvailableSslOptions";
}
export interface applicationGatewayAvailableSslOptionsComponentOutputs {
	readonly apiVersion: "2018-01-01";
	readonly id: string;
	readonly type: "Microsoft.Network/applicationGatewayAvailableSslOptions";
}
export interface applicationGatewayAvailableSslOptionsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ApplicationGatewayAvailableSslOptionsPropertiesFormat | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class applicationGatewayAvailableSslOptions_predefinedPolicies
	extends ArmResource<applicationGatewayAvailableSslOptions_predefinedPoliciesComponentInputs>
	implements applicationGatewayAvailableSslOptions_predefinedPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: applicationGatewayAvailableSslOptions_predefinedPoliciesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Network/applicationGatewayAvailableSslOptions/predefinedPolicies",
			"2018-01-01",
			options,
		);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/applicationGatewayAvailableSslOptions/predefinedPolicies";
}
export interface applicationGatewayAvailableSslOptions_predefinedPoliciesComponentOutputs {
	readonly apiVersion: "2018-01-01";
	readonly id: string;
	readonly type: "Microsoft.Network/applicationGatewayAvailableSslOptions/predefinedPolicies";
}
export interface applicationGatewayAvailableSslOptions_predefinedPoliciesComponentInputs {
	readonly name: string;
	readonly properties?: ApplicationGatewaySslPredefinedPolicyPropertiesFormat | undefined;
}
export class applicationGateways
	extends ArmResource<applicationGatewaysComponentInputs>
	implements applicationGatewaysComponentOutputs
{
	constructor(entity: ADKEntity, options: applicationGatewaysComponentInputs) {
		super(entity, options.name, "Microsoft.Network/applicationGateways", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/applicationGateways";
}
export interface applicationGatewaysComponentOutputs {
	readonly apiVersion: "2018-01-01";
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
export class applicationSecurityGroups
	extends ArmResource<applicationSecurityGroupsComponentInputs>
	implements applicationSecurityGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: applicationSecurityGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/applicationSecurityGroups", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/applicationSecurityGroups";
}
export interface applicationSecurityGroupsComponentOutputs {
	readonly apiVersion: "2018-01-01";
	readonly id: string;
	readonly type: "Microsoft.Network/applicationSecurityGroups";
}
export interface applicationSecurityGroupsComponentInputs {
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ApplicationSecurityGroupPropertiesFormat | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class connections extends ArmResource<connectionsComponentInputs> implements connectionsComponentOutputs {
	constructor(entity: ADKEntity, options: connectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/connections", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/connections";
}
export interface connectionsComponentOutputs {
	readonly apiVersion: "2018-01-01";
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
		super(entity, options.name, "Microsoft.Network/expressRouteCircuits", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/expressRouteCircuits";
}
export interface expressRouteCircuitsComponentOutputs {
	readonly apiVersion: "2018-01-01";
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
		super(entity, options.name, "Microsoft.Network/expressRouteCircuits/authorizations", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/expressRouteCircuits/authorizations";
}
export interface expressRouteCircuits_authorizationsComponentOutputs {
	readonly apiVersion: "2018-01-01";
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
		super(entity, options.name, "Microsoft.Network/expressRouteCircuits/peerings", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/expressRouteCircuits/peerings";
}
export interface expressRouteCircuits_peeringsComponentOutputs {
	readonly apiVersion: "2018-01-01";
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
		super(entity, options.name, "Microsoft.Network/loadBalancers", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/loadBalancers";
}
export interface loadBalancersComponentOutputs {
	readonly apiVersion: "2018-01-01";
	readonly id: string;
	readonly type: "Microsoft.Network/loadBalancers";
}
export interface loadBalancersComponentInputs {
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: LoadBalancerPropertiesFormat | undefined;
	readonly sku?: LoadBalancerSku | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class loadBalancers_backendAddressPools
	extends ArmResource<loadBalancers_backendAddressPoolsComponentInputs>
	implements loadBalancers_backendAddressPoolsComponentOutputs
{
	constructor(entity: ADKEntity, options: loadBalancers_backendAddressPoolsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/loadBalancers/backendAddressPools", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/loadBalancers/backendAddressPools";
}
export interface loadBalancers_backendAddressPoolsComponentOutputs {
	readonly apiVersion: "2018-01-01";
	readonly id: string;
	readonly type: "Microsoft.Network/loadBalancers/backendAddressPools";
}
export interface loadBalancers_backendAddressPoolsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: BackendAddressPoolPropertiesFormat | undefined;
}
export class loadBalancers_frontendIPConfigurations
	extends ArmResource<loadBalancers_frontendIPConfigurationsComponentInputs>
	implements loadBalancers_frontendIPConfigurationsComponentOutputs
{
	constructor(entity: ADKEntity, options: loadBalancers_frontendIPConfigurationsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/loadBalancers/frontendIPConfigurations", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/loadBalancers/frontendIPConfigurations";
}
export interface loadBalancers_frontendIPConfigurationsComponentOutputs {
	readonly apiVersion: "2018-01-01";
	readonly id: string;
	readonly type: "Microsoft.Network/loadBalancers/frontendIPConfigurations";
}
export interface loadBalancers_frontendIPConfigurationsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: FrontendIPConfigurationPropertiesFormat | undefined;
	readonly zones?: string[] | undefined;
}
export class loadBalancers_inboundNatRules
	extends ArmResource<loadBalancers_inboundNatRulesComponentInputs>
	implements loadBalancers_inboundNatRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: loadBalancers_inboundNatRulesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/loadBalancers/inboundNatRules", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/loadBalancers/inboundNatRules";
}
export interface loadBalancers_inboundNatRulesComponentOutputs {
	readonly apiVersion: "2018-01-01";
	readonly id: string;
	readonly type: "Microsoft.Network/loadBalancers/inboundNatRules";
}
export interface loadBalancers_inboundNatRulesComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: InboundNatRulePropertiesFormat | undefined;
}
export class loadBalancers_loadBalancingRules
	extends ArmResource<loadBalancers_loadBalancingRulesComponentInputs>
	implements loadBalancers_loadBalancingRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: loadBalancers_loadBalancingRulesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/loadBalancers/loadBalancingRules", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/loadBalancers/loadBalancingRules";
}
export interface loadBalancers_loadBalancingRulesComponentOutputs {
	readonly apiVersion: "2018-01-01";
	readonly id: string;
	readonly type: "Microsoft.Network/loadBalancers/loadBalancingRules";
}
export interface loadBalancers_loadBalancingRulesComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: LoadBalancingRulePropertiesFormat | undefined;
}
export class loadBalancers_probes
	extends ArmResource<loadBalancers_probesComponentInputs>
	implements loadBalancers_probesComponentOutputs
{
	constructor(entity: ADKEntity, options: loadBalancers_probesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/loadBalancers/probes", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/loadBalancers/probes";
}
export interface loadBalancers_probesComponentOutputs {
	readonly apiVersion: "2018-01-01";
	readonly id: string;
	readonly type: "Microsoft.Network/loadBalancers/probes";
}
export interface loadBalancers_probesComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: ProbePropertiesFormat | undefined;
}
export class localNetworkGateways
	extends ArmResource<localNetworkGatewaysComponentInputs>
	implements localNetworkGatewaysComponentOutputs
{
	constructor(entity: ADKEntity, options: localNetworkGatewaysComponentInputs) {
		super(entity, options.name, "Microsoft.Network/localNetworkGateways", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/localNetworkGateways";
}
export interface localNetworkGatewaysComponentOutputs {
	readonly apiVersion: "2018-01-01";
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
		super(entity, options.name, "Microsoft.Network/networkInterfaces", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkInterfaces";
}
export interface networkInterfacesComponentOutputs {
	readonly apiVersion: "2018-01-01";
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
export class networkInterfaces_ipConfigurations
	extends ArmResource<networkInterfaces_ipConfigurationsComponentInputs>
	implements networkInterfaces_ipConfigurationsComponentOutputs
{
	constructor(entity: ADKEntity, options: networkInterfaces_ipConfigurationsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/networkInterfaces/ipConfigurations", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkInterfaces/ipConfigurations";
}
export interface networkInterfaces_ipConfigurationsComponentOutputs {
	readonly apiVersion: "2018-01-01";
	readonly id: string;
	readonly type: "Microsoft.Network/networkInterfaces/ipConfigurations";
}
export interface networkInterfaces_ipConfigurationsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: NetworkInterfaceIPConfigurationPropertiesFormat | undefined;
}
export class networkSecurityGroups
	extends ArmResource<networkSecurityGroupsComponentInputs>
	implements networkSecurityGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: networkSecurityGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/networkSecurityGroups", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkSecurityGroups";
}
export interface networkSecurityGroupsComponentOutputs {
	readonly apiVersion: "2018-01-01";
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
export class networkSecurityGroups_defaultSecurityRules
	extends ArmResource<networkSecurityGroups_defaultSecurityRulesComponentInputs>
	implements networkSecurityGroups_defaultSecurityRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: networkSecurityGroups_defaultSecurityRulesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/networkSecurityGroups/defaultSecurityRules", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkSecurityGroups/defaultSecurityRules";
}
export interface networkSecurityGroups_defaultSecurityRulesComponentOutputs {
	readonly apiVersion: "2018-01-01";
	readonly id: string;
	readonly type: "Microsoft.Network/networkSecurityGroups/defaultSecurityRules";
}
export interface networkSecurityGroups_defaultSecurityRulesComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: SecurityRulePropertiesFormat | undefined;
}
export class networkSecurityGroups_securityRules
	extends ArmResource<networkSecurityGroups_securityRulesComponentInputs>
	implements networkSecurityGroups_securityRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: networkSecurityGroups_securityRulesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/networkSecurityGroups/securityRules", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkSecurityGroups/securityRules";
}
export interface networkSecurityGroups_securityRulesComponentOutputs {
	readonly apiVersion: "2018-01-01";
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
		super(entity, options.name, "Microsoft.Network/networkWatchers", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkWatchers";
}
export interface networkWatchersComponentOutputs {
	readonly apiVersion: "2018-01-01";
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
export class networkWatchers_connectionMonitors
	extends ArmResource<networkWatchers_connectionMonitorsComponentInputs>
	implements networkWatchers_connectionMonitorsComponentOutputs
{
	constructor(entity: ADKEntity, options: networkWatchers_connectionMonitorsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/networkWatchers/connectionMonitors", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkWatchers/connectionMonitors";
}
export interface networkWatchers_connectionMonitorsComponentOutputs {
	readonly apiVersion: "2018-01-01";
	readonly id: string;
	readonly type: "Microsoft.Network/networkWatchers/connectionMonitors";
}
export interface networkWatchers_connectionMonitorsComponentInputs {
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: ConnectionMonitorParametersOrConnectionMonitorResultProperties;
	readonly tags?: ConnectionMonitorTags | undefined;
}
export class networkWatchers_packetCaptures
	extends ArmResource<networkWatchers_packetCapturesComponentInputs>
	implements networkWatchers_packetCapturesComponentOutputs
{
	constructor(entity: ADKEntity, options: networkWatchers_packetCapturesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/networkWatchers/packetCaptures", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkWatchers/packetCaptures";
}
export interface networkWatchers_packetCapturesComponentOutputs {
	readonly apiVersion: "2018-01-01";
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
		super(entity, options.name, "Microsoft.Network/publicIPAddresses", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/publicIPAddresses";
}
export interface publicIPAddressesComponentOutputs {
	readonly apiVersion: "2018-01-01";
	readonly id: string;
	readonly type: "Microsoft.Network/publicIPAddresses";
}
export interface publicIPAddressesComponentInputs {
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: PublicIPAddressPropertiesFormat | undefined;
	readonly sku?: PublicIPAddressSku | undefined;
	readonly tags?: ResourceTags | undefined;
	readonly zones?: string[] | undefined;
}
export class routeFilters extends ArmResource<routeFiltersComponentInputs> implements routeFiltersComponentOutputs {
	constructor(entity: ADKEntity, options: routeFiltersComponentInputs) {
		super(entity, options.name, "Microsoft.Network/routeFilters", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/routeFilters";
}
export interface routeFiltersComponentOutputs {
	readonly apiVersion: "2018-01-01";
	readonly id: string;
	readonly type: "Microsoft.Network/routeFilters";
}
export interface routeFiltersComponentInputs {
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: RouteFilterPropertiesFormat | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class routeFilters_routeFilterRules
	extends ArmResource<routeFilters_routeFilterRulesComponentInputs>
	implements routeFilters_routeFilterRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: routeFilters_routeFilterRulesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/routeFilters/routeFilterRules", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/routeFilters/routeFilterRules";
}
export interface routeFilters_routeFilterRulesComponentOutputs {
	readonly apiVersion: "2018-01-01";
	readonly id: string;
	readonly type: "Microsoft.Network/routeFilters/routeFilterRules";
}
export interface routeFilters_routeFilterRulesComponentInputs {
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: RouteFilterRulePropertiesFormat | undefined;
}
export class routeTables extends ArmResource<routeTablesComponentInputs> implements routeTablesComponentOutputs {
	constructor(entity: ADKEntity, options: routeTablesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/routeTables", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/routeTables";
}
export interface routeTablesComponentOutputs {
	readonly apiVersion: "2018-01-01";
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
		super(entity, options.name, "Microsoft.Network/routeTables/routes", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/routeTables/routes";
}
export interface routeTables_routesComponentOutputs {
	readonly apiVersion: "2018-01-01";
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
		super(entity, options.name, "Microsoft.Network/virtualNetworkGateways", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/virtualNetworkGateways";
}
export interface virtualNetworkGatewaysComponentOutputs {
	readonly apiVersion: "2018-01-01";
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
		super(entity, options.name, "Microsoft.Network/virtualNetworks", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/virtualNetworks";
}
export interface virtualNetworksComponentOutputs {
	readonly apiVersion: "2018-01-01";
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
		super(entity, options.name, "Microsoft.Network/virtualNetworks/subnets", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/virtualNetworks/subnets";
}
export interface virtualNetworks_subnetsComponentOutputs {
	readonly apiVersion: "2018-01-01";
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
		super(entity, options.name, "Microsoft.Network/virtualNetworks/virtualNetworkPeerings", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/virtualNetworks/virtualNetworkPeerings";
}
export interface virtualNetworks_virtualNetworkPeeringsComponentOutputs {
	readonly apiVersion: "2018-01-01";
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
	readonly type?: string | undefined;
}
export interface ApplicationGatewayAuthenticationCertificatePropertiesFormat {
	readonly data?: string | undefined;
	readonly provisioningState?: string | undefined;
}
export interface ApplicationGatewayAvailableSslOptionsPropertiesFormat {
	readonly availableCipherSuites?:
		| (
				| "TLS_DHE_DSS_WITH_3DES_EDE_CBC_SHA"
				| "TLS_DHE_DSS_WITH_AES_128_CBC_SHA"
				| "TLS_DHE_DSS_WITH_AES_128_CBC_SHA256"
				| "TLS_DHE_DSS_WITH_AES_256_CBC_SHA"
				| "TLS_DHE_DSS_WITH_AES_256_CBC_SHA256"
				| "TLS_DHE_RSA_WITH_AES_128_CBC_SHA"
				| "TLS_DHE_RSA_WITH_AES_128_GCM_SHA256"
				| "TLS_DHE_RSA_WITH_AES_256_CBC_SHA"
				| "TLS_DHE_RSA_WITH_AES_256_GCM_SHA384"
				| "TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA"
				| "TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256"
				| "TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256"
				| "TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA"
				| "TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384"
				| "TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384"
				| "TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA"
				| "TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256"
				| "TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256"
				| "TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA"
				| "TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384"
				| "TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384"
				| "TLS_RSA_WITH_3DES_EDE_CBC_SHA"
				| "TLS_RSA_WITH_AES_128_CBC_SHA"
				| "TLS_RSA_WITH_AES_128_CBC_SHA256"
				| "TLS_RSA_WITH_AES_128_GCM_SHA256"
				| "TLS_RSA_WITH_AES_256_CBC_SHA"
				| "TLS_RSA_WITH_AES_256_CBC_SHA256"
				| "TLS_RSA_WITH_AES_256_GCM_SHA384"[]
		  )
		| undefined;
	readonly availableProtocols?: ("TLSv1_0" | "TLSv1_1" | "TLSv1_2"[]) | undefined;
	readonly defaultPolicy?:
		| ("AppGwSslPolicy20150501" | "AppGwSslPolicy20170401" | "AppGwSslPolicy20170401S")
		| undefined;
	readonly predefinedPolicies?: SubResource[] | undefined;
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
export interface ApplicationGatewayBackendHttpSettings {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: ApplicationGatewayBackendHttpSettingsPropertiesFormat | undefined;
	readonly type?: string | undefined;
}
export interface ApplicationGatewayBackendHttpSettingsPropertiesFormat {
	readonly affinityCookieName?: string | undefined;
	readonly authenticationCertificates?: SubResource[] | undefined;
	readonly connectionDraining?: ApplicationGatewayConnectionDraining | undefined;
	readonly cookieBasedAffinity?: ("Disabled" | "Enabled") | undefined;
	readonly hostName?: string | undefined;
	readonly path?: string | undefined;
	readonly pickHostNameFromBackendAddress?: boolean | undefined;
	readonly port?: number | undefined;
	readonly probe?: SubResource | undefined;
	readonly probeEnabled?: boolean | undefined;
	readonly protocol?: ("Http" | "Https") | undefined;
	readonly provisioningState?: string | undefined;
	readonly requestTimeout?: number | undefined;
}
export interface ApplicationGatewayConnectionDraining {
	readonly drainTimeoutInSec: number;
	readonly enabled: boolean;
}
export interface ApplicationGatewayFirewallDisabledRuleGroup {
	readonly ruleGroupName: string;
	readonly rules?: number[] | undefined;
}
export interface ApplicationGatewayFrontendIPConfiguration {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: ApplicationGatewayFrontendIPConfigurationPropertiesFormat | undefined;
	readonly type?: string | undefined;
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
	readonly type?: string | undefined;
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
	readonly type?: string | undefined;
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
	readonly type?: string | undefined;
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
	readonly type?: string | undefined;
}
export interface ApplicationGatewayPathRulePropertiesFormat {
	readonly backendAddressPool?: SubResource | undefined;
	readonly backendHttpSettings?: SubResource | undefined;
	readonly paths?: string[] | undefined;
	readonly provisioningState?: string | undefined;
	readonly redirectConfiguration?: SubResource | undefined;
}
export interface ApplicationGatewayProbe {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: ApplicationGatewayProbePropertiesFormat | undefined;
	readonly type?: string | undefined;
}
export interface ApplicationGatewayProbeHealthResponseMatch {
	readonly body?: string | undefined;
	readonly statusCodes?: string[] | undefined;
}
export interface ApplicationGatewayProbePropertiesFormat {
	readonly host?: string | undefined;
	readonly interval?: number | undefined;
	readonly match?: ApplicationGatewayProbeHealthResponseMatch | undefined;
	readonly minServers?: number | undefined;
	readonly path?: string | undefined;
	readonly pickHostNameFromBackendHttpSettings?: boolean | undefined;
	readonly protocol?: ("Http" | "Https") | undefined;
	readonly provisioningState?: string | undefined;
	readonly timeout?: number | undefined;
	readonly unhealthyThreshold?: number | undefined;
}
export interface ApplicationGatewayPropertiesFormat {
	readonly authenticationCertificates?: ApplicationGatewayAuthenticationCertificate[] | undefined;
	readonly backendAddressPools?: ApplicationGatewayBackendAddressPool[] | undefined;
	readonly backendHttpSettingsCollection?: ApplicationGatewayBackendHttpSettings[] | undefined;
	readonly enableHttp2?: boolean | undefined;
	readonly frontendIPConfigurations?: ApplicationGatewayFrontendIPConfiguration[] | undefined;
	readonly frontendPorts?: ApplicationGatewayFrontendPort[] | undefined;
	readonly gatewayIPConfigurations?: ApplicationGatewayIPConfiguration[] | undefined;
	readonly httpListeners?: ApplicationGatewayHttpListener[] | undefined;
	readonly operationalState?: ("Running" | "Starting" | "Stopped" | "Stopping") | undefined;
	readonly probes?: ApplicationGatewayProbe[] | undefined;
	readonly provisioningState?: string | undefined;
	readonly redirectConfigurations?: ApplicationGatewayRedirectConfiguration[] | undefined;
	readonly requestRoutingRules?: ApplicationGatewayRequestRoutingRule[] | undefined;
	readonly resourceGuid?: string | undefined;
	readonly sku?: ApplicationGatewaySku | undefined;
	readonly sslCertificates?: ApplicationGatewaySslCertificate[] | undefined;
	readonly sslPolicy?: ApplicationGatewaySslPolicy | undefined;
	readonly urlPathMaps?: ApplicationGatewayUrlPathMap[] | undefined;
	readonly webApplicationFirewallConfiguration?: ApplicationGatewayWebApplicationFirewallConfiguration | undefined;
}
export interface ApplicationGatewayRedirectConfiguration {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: ApplicationGatewayRedirectConfigurationPropertiesFormat | undefined;
	readonly type?: string | undefined;
}
export interface ApplicationGatewayRedirectConfigurationPropertiesFormat {
	readonly includePath?: boolean | undefined;
	readonly includeQueryString?: boolean | undefined;
	readonly pathRules?: SubResource[] | undefined;
	readonly redirectType?: ("Found" | "Permanent" | "SeeOther" | "Temporary") | undefined;
	readonly requestRoutingRules?: SubResource[] | undefined;
	readonly targetListener?: SubResource | undefined;
	readonly targetUrl?: string | undefined;
	readonly urlPathMaps?: SubResource[] | undefined;
}
export interface ApplicationGatewayRequestRoutingRule {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: ApplicationGatewayRequestRoutingRulePropertiesFormat | undefined;
	readonly type?: string | undefined;
}
export interface ApplicationGatewayRequestRoutingRulePropertiesFormat {
	readonly backendAddressPool?: SubResource | undefined;
	readonly backendHttpSettings?: SubResource | undefined;
	readonly httpListener?: SubResource | undefined;
	readonly provisioningState?: string | undefined;
	readonly redirectConfiguration?: SubResource | undefined;
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
	readonly type?: string | undefined;
}
export interface ApplicationGatewaySslCertificatePropertiesFormat {
	readonly data?: string | undefined;
	readonly password?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly publicCertData?: string | undefined;
}
export interface ApplicationGatewaySslPolicy {
	readonly cipherSuites?:
		| (
				| "TLS_DHE_DSS_WITH_3DES_EDE_CBC_SHA"
				| "TLS_DHE_DSS_WITH_AES_128_CBC_SHA"
				| "TLS_DHE_DSS_WITH_AES_128_CBC_SHA256"
				| "TLS_DHE_DSS_WITH_AES_256_CBC_SHA"
				| "TLS_DHE_DSS_WITH_AES_256_CBC_SHA256"
				| "TLS_DHE_RSA_WITH_AES_128_CBC_SHA"
				| "TLS_DHE_RSA_WITH_AES_128_GCM_SHA256"
				| "TLS_DHE_RSA_WITH_AES_256_CBC_SHA"
				| "TLS_DHE_RSA_WITH_AES_256_GCM_SHA384"
				| "TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA"
				| "TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256"
				| "TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256"
				| "TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA"
				| "TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384"
				| "TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384"
				| "TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA"
				| "TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256"
				| "TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256"
				| "TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA"
				| "TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384"
				| "TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384"
				| "TLS_RSA_WITH_3DES_EDE_CBC_SHA"
				| "TLS_RSA_WITH_AES_128_CBC_SHA"
				| "TLS_RSA_WITH_AES_128_CBC_SHA256"
				| "TLS_RSA_WITH_AES_128_GCM_SHA256"
				| "TLS_RSA_WITH_AES_256_CBC_SHA"
				| "TLS_RSA_WITH_AES_256_CBC_SHA256"
				| "TLS_RSA_WITH_AES_256_GCM_SHA384"[]
		  )
		| undefined;
	readonly disabledSslProtocols?: ("TLSv1_0" | "TLSv1_1" | "TLSv1_2"[]) | undefined;
	readonly minProtocolVersion?: ("TLSv1_0" | "TLSv1_1" | "TLSv1_2") | undefined;
	readonly policyName?: ("AppGwSslPolicy20150501" | "AppGwSslPolicy20170401" | "AppGwSslPolicy20170401S") | undefined;
	readonly policyType?: ("Custom" | "Predefined") | undefined;
}
export interface ApplicationGatewaySslPredefinedPolicyPropertiesFormat {
	readonly cipherSuites?:
		| (
				| "TLS_DHE_DSS_WITH_3DES_EDE_CBC_SHA"
				| "TLS_DHE_DSS_WITH_AES_128_CBC_SHA"
				| "TLS_DHE_DSS_WITH_AES_128_CBC_SHA256"
				| "TLS_DHE_DSS_WITH_AES_256_CBC_SHA"
				| "TLS_DHE_DSS_WITH_AES_256_CBC_SHA256"
				| "TLS_DHE_RSA_WITH_AES_128_CBC_SHA"
				| "TLS_DHE_RSA_WITH_AES_128_GCM_SHA256"
				| "TLS_DHE_RSA_WITH_AES_256_CBC_SHA"
				| "TLS_DHE_RSA_WITH_AES_256_GCM_SHA384"
				| "TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA"
				| "TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256"
				| "TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256"
				| "TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA"
				| "TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384"
				| "TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384"
				| "TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA"
				| "TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256"
				| "TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256"
				| "TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA"
				| "TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384"
				| "TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384"
				| "TLS_RSA_WITH_3DES_EDE_CBC_SHA"
				| "TLS_RSA_WITH_AES_128_CBC_SHA"
				| "TLS_RSA_WITH_AES_128_CBC_SHA256"
				| "TLS_RSA_WITH_AES_128_GCM_SHA256"
				| "TLS_RSA_WITH_AES_256_CBC_SHA"
				| "TLS_RSA_WITH_AES_256_CBC_SHA256"
				| "TLS_RSA_WITH_AES_256_GCM_SHA384"[]
		  )
		| undefined;
	readonly minProtocolVersion?: ("TLSv1_0" | "TLSv1_1" | "TLSv1_2") | undefined;
}
export interface ApplicationGatewayUrlPathMap {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: ApplicationGatewayUrlPathMapPropertiesFormat | undefined;
	readonly type?: string | undefined;
}
export interface ApplicationGatewayUrlPathMapPropertiesFormat {
	readonly defaultBackendAddressPool?: SubResource | undefined;
	readonly defaultBackendHttpSettings?: SubResource | undefined;
	readonly defaultRedirectConfiguration?: SubResource | undefined;
	readonly pathRules?: ApplicationGatewayPathRule[] | undefined;
	readonly provisioningState?: string | undefined;
}
export interface ApplicationGatewayWebApplicationFirewallConfiguration {
	readonly disabledRuleGroups?: ApplicationGatewayFirewallDisabledRuleGroup[] | undefined;
	readonly enabled: boolean;
	readonly firewallMode: "Detection" | "Prevention";
	readonly maxRequestBodySize?: number | undefined;
	readonly requestBodyCheck?: boolean | undefined;
	readonly ruleSetType: string;
	readonly ruleSetVersion: string;
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
	readonly provisioningState?: string | undefined;
	readonly resourceGuid?: string | undefined;
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
export interface ConnectionMonitorDestination {
	readonly address?: string | undefined;
	readonly port?: number | undefined;
	readonly resourceId?: string | undefined;
}
export interface ConnectionMonitorParametersOrConnectionMonitorResultProperties {
	readonly autoStart?: boolean | undefined;
	readonly destination: ConnectionMonitorDestination;
	readonly monitoringIntervalInSeconds?: number | undefined;
	readonly monitoringStatus?: string | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly source: ConnectionMonitorSource;
	readonly startTime?: string | undefined;
}
export interface ConnectionMonitorSource {
	readonly port?: number | undefined;
	readonly resourceId: string;
}
export interface ConnectionMonitorTags {
	readonly "[ key: string ]"?: string | undefined;
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
	readonly advertisedCommunities?: string[] | undefined;
	readonly advertisedPublicPrefixes?: string[] | undefined;
	readonly advertisedPublicPrefixesState?:
		| ("Configured" | "Configuring" | "NotConfigured" | "ValidationNeeded")
		| undefined;
	readonly customerASN?: number | undefined;
	readonly legacyMode?: number | undefined;
	readonly routingRegistryName?: string | undefined;
}
export interface ExpressRouteCircuitPeeringPropertiesFormat {
	readonly azureASN?: number | undefined;
	readonly gatewayManagerEtag?: string | undefined;
	readonly ipv6PeeringConfig?: Ipv6ExpressRouteCircuitPeeringConfig | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly microsoftPeeringConfig?: ExpressRouteCircuitPeeringConfig | undefined;
	readonly peerASN?: number | undefined;
	readonly peeringType?: ("AzurePrivatePeering" | "AzurePublicPeering" | "MicrosoftPeering") | undefined;
	readonly primaryAzurePort?: string | undefined;
	readonly primaryPeerAddressPrefix?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly routeFilter?: RouteFilter | undefined;
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
	readonly zones?: string[] | undefined;
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
	readonly enableFloatingIP?: boolean | undefined;
	readonly frontendIPConfiguration?: SubResource | undefined;
	readonly frontendPortRangeEnd: number;
	readonly frontendPortRangeStart: number;
	readonly idleTimeoutInMinutes?: number | undefined;
	readonly protocol: "All" | "Tcp" | "Udp";
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
	readonly protocol?: ("All" | "Tcp" | "Udp") | undefined;
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
export interface IpTag {
	readonly ipTagType?: string | undefined;
	readonly tag?: string | undefined;
}
export interface Ipv6ExpressRouteCircuitPeeringConfig {
	readonly microsoftPeeringConfig?: ExpressRouteCircuitPeeringConfig | undefined;
	readonly primaryPeerAddressPrefix?: string | undefined;
	readonly routeFilter?: RouteFilter | undefined;
	readonly secondaryPeerAddressPrefix?: string | undefined;
	readonly state?: ("Disabled" | "Enabled") | undefined;
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
export interface LoadBalancerSku {
	readonly name?: ("Basic" | "Standard") | undefined;
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
	readonly disableOutboundSnat?: boolean | undefined;
	readonly enableFloatingIP?: boolean | undefined;
	readonly frontendIPConfiguration?: SubResource | undefined;
	readonly frontendPort: number;
	readonly idleTimeoutInMinutes?: number | undefined;
	readonly loadDistribution?: ("Default" | "SourceIP" | "SourceIPProtocol") | undefined;
	readonly probe?: SubResource | undefined;
	readonly protocol: "All" | "Tcp" | "Udp";
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
	readonly localNetworkAddressSpace?: AddressSpace | undefined;
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
	readonly applicationSecurityGroups?: ApplicationSecurityGroup[] | undefined;
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
	readonly ipTags?: IpTag[] | undefined;
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
export interface RouteFilter {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly location?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: RouteFilterPropertiesFormat | undefined;
	readonly tags?: ResourceTags | undefined;
	readonly type?: string | undefined;
}
export interface RouteFilterPropertiesFormat {
	readonly peerings?: ExpressRouteCircuitPeering[] | undefined;
	readonly provisioningState?: string | undefined;
	readonly rules?: RouteFilterRule[] | undefined;
}
export interface RouteFilterRule {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly location?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: RouteFilterRulePropertiesFormat | undefined;
}
export interface RouteFilterRulePropertiesFormat {
	readonly access: "Allow" | "Deny";
	readonly communities: string[];
	readonly provisioningState?: string | undefined;
	readonly routeFilterRuleType: "Community";
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
	readonly disableBgpRoutePropagation?: boolean | undefined;
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
	readonly destinationApplicationSecurityGroups?: ApplicationSecurityGroup[] | undefined;
	readonly destinationPortRange?: string | undefined;
	readonly destinationPortRanges?: string[] | undefined;
	readonly direction: "Inbound" | "Outbound";
	readonly priority?: number | undefined;
	readonly protocol: "" | "Tcp" | "Udp";
	readonly provisioningState?: string | undefined;
	readonly sourceAddressPrefix?: string | undefined;
	readonly sourceAddressPrefixes?: string[] | undefined;
	readonly sourceApplicationSecurityGroups?: ApplicationSecurityGroup[] | undefined;
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
	readonly ipsecPolicies?: IpsecPolicy[] | undefined;
	readonly localNetworkGateway2?: LocalNetworkGateway | undefined;
	readonly peer?: SubResource | undefined;
	readonly provisioningState?: string | undefined;
	readonly resourceGuid?: string | undefined;
	readonly routingWeight?: number | undefined;
	readonly sharedKey?: string | undefined;
	readonly tunnelConnectionStatus?: TunnelConnectionHealth[] | undefined;
	readonly usePolicyBasedTrafficSelectors?: boolean | undefined;
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
	readonly publicIPAddress?: SubResource | undefined;
	readonly subnet?: SubResource | undefined;
}
export interface VirtualNetworkGatewayPropertiesFormat {
	readonly activeActive?: boolean | undefined;
	readonly bgpSettings?: BgpSettings | undefined;
	readonly enableBgp?: boolean | undefined;
	readonly gatewayDefaultSite?: SubResource | undefined;
	readonly gatewayType?: ("ExpressRoute" | "Vpn") | undefined;
	readonly ipConfigurations?: VirtualNetworkGatewayIPConfiguration[] | undefined;
	readonly provisioningState?: string | undefined;
	readonly resourceGuid?: string | undefined;
	readonly sku?: VirtualNetworkGatewaySku | undefined;
	readonly vpnClientConfiguration?: VpnClientConfiguration | undefined;
	readonly vpnType?: ("PolicyBased" | "RouteBased") | undefined;
}
export interface VirtualNetworkGatewaySku {
	readonly capacity?: number | undefined;
	readonly name?:
		| ("Basic" | "HighPerformance" | "Standard" | "UltraPerformance" | "VpnGw1" | "VpnGw2" | "VpnGw3")
		| undefined;
	readonly tier?:
		| ("Basic" | "HighPerformance" | "Standard" | "UltraPerformance" | "VpnGw1" | "VpnGw2" | "VpnGw3")
		| undefined;
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
	readonly remoteAddressSpace?: AddressSpace | undefined;
	readonly remoteVirtualNetwork?: SubResource | undefined;
	readonly useRemoteGateways?: boolean | undefined;
}
export interface VirtualNetworkPropertiesFormat {
	readonly addressSpace?: AddressSpace | undefined;
	readonly dhcpOptions?: DhcpOptions | undefined;
	readonly enableDdosProtection?: boolean | undefined;
	readonly enableVmProtection?: boolean | undefined;
	readonly provisioningState?: string | undefined;
	readonly resourceGuid?: string | undefined;
	readonly subnets?: Subnet[] | undefined;
	readonly virtualNetworkPeerings?: VirtualNetworkPeering[] | undefined;
}
export interface VpnClientConfiguration {
	readonly radiusServerAddress?: string | undefined;
	readonly radiusServerSecret?: string | undefined;
	readonly vpnClientAddressPool?: AddressSpace | undefined;
	readonly vpnClientProtocols?: ("IkeV2" | "SSTP"[]) | undefined;
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
	applicationGatewayAvailableSslOptions: applicationGatewayAvailableSslOptions,
	"applicationGatewayAvailableSslOptions/predefinedPolicies": applicationGatewayAvailableSslOptions_predefinedPolicies,
	applicationGateways: applicationGateways,
	applicationSecurityGroups: applicationSecurityGroups,
	connections: connections,
	expressRouteCircuits: expressRouteCircuits,
	"expressRouteCircuits/authorizations": expressRouteCircuits_authorizations,
	"expressRouteCircuits/peerings": expressRouteCircuits_peerings,
	loadBalancers: loadBalancers,
	"loadBalancers/backendAddressPools": loadBalancers_backendAddressPools,
	"loadBalancers/frontendIPConfigurations": loadBalancers_frontendIPConfigurations,
	"loadBalancers/inboundNatRules": loadBalancers_inboundNatRules,
	"loadBalancers/loadBalancingRules": loadBalancers_loadBalancingRules,
	"loadBalancers/probes": loadBalancers_probes,
	localNetworkGateways: localNetworkGateways,
	networkInterfaces: networkInterfaces,
	"networkInterfaces/ipConfigurations": networkInterfaces_ipConfigurations,
	networkSecurityGroups: networkSecurityGroups,
	"networkSecurityGroups/defaultSecurityRules": networkSecurityGroups_defaultSecurityRules,
	"networkSecurityGroups/securityRules": networkSecurityGroups_securityRules,
	networkWatchers: networkWatchers,
	"networkWatchers/connectionMonitors": networkWatchers_connectionMonitors,
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

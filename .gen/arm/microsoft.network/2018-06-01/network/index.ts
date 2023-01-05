import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class applicationGatewayAvailableSslOptions
	extends ArmResource<applicationGatewayAvailableSslOptionsComponentInputs>
	implements applicationGatewayAvailableSslOptionsComponentOutputs
{
	constructor(entity: ADKEntity, options: applicationGatewayAvailableSslOptionsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/applicationGatewayAvailableSslOptions", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/applicationGatewayAvailableSslOptions";
}
export interface applicationGatewayAvailableSslOptionsComponentOutputs {
	readonly apiVersion: "2018-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/applicationGatewayAvailableSslOptions";
}
export interface applicationGatewayAvailableSslOptionsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: ApplicationGatewayAvailableSslOptionsPropertiesFormat;
	readonly tags?: ResourceTags;
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
			"2018-06-01",
			options,
		);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/applicationGatewayAvailableSslOptions/predefinedPolicies";
}
export interface applicationGatewayAvailableSslOptions_predefinedPoliciesComponentOutputs {
	readonly apiVersion: "2018-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/applicationGatewayAvailableSslOptions/predefinedPolicies";
}
export interface applicationGatewayAvailableSslOptions_predefinedPoliciesComponentInputs {
	readonly name: string;
	readonly properties?: ApplicationGatewaySslPredefinedPolicyPropertiesFormat;
}
export class applicationGateways
	extends ArmResource<applicationGatewaysComponentInputs>
	implements applicationGatewaysComponentOutputs
{
	constructor(entity: ADKEntity, options: applicationGatewaysComponentInputs) {
		super(entity, options.name, "Microsoft.Network/applicationGateways", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/applicationGateways";
}
export interface applicationGatewaysComponentOutputs {
	readonly apiVersion: "2018-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/applicationGateways";
}
export interface applicationGatewaysComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: ApplicationGatewayPropertiesFormat;
	readonly tags?: ResourceTags;
	readonly zones?: string[];
}
export class applicationSecurityGroups
	extends ArmResource<applicationSecurityGroupsComponentInputs>
	implements applicationSecurityGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: applicationSecurityGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/applicationSecurityGroups", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/applicationSecurityGroups";
}
export interface applicationSecurityGroupsComponentOutputs {
	readonly apiVersion: "2018-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/applicationSecurityGroups";
}
export interface applicationSecurityGroupsComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: ApplicationSecurityGroupPropertiesFormat;
	readonly tags?: ResourceTags;
}
export class azureFirewalls extends ArmResource<azureFirewallsComponentInputs> implements azureFirewallsComponentOutputs {
	constructor(entity: ADKEntity, options: azureFirewallsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/azureFirewalls", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/azureFirewalls";
}
export interface azureFirewallsComponentOutputs {
	readonly apiVersion: "2018-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/azureFirewalls";
}
export interface azureFirewallsComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: AzureFirewallPropertiesFormat;
	readonly tags?: ResourceTags;
}
export class connections extends ArmResource<connectionsComponentInputs> implements connectionsComponentOutputs {
	constructor(entity: ADKEntity, options: connectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/connections", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/connections";
}
export interface connectionsComponentOutputs {
	readonly apiVersion: "2018-06-01";
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
export class ddosProtectionPlans
	extends ArmResource<ddosProtectionPlansComponentInputs>
	implements ddosProtectionPlansComponentOutputs
{
	constructor(entity: ADKEntity, options: ddosProtectionPlansComponentInputs) {
		super(entity, options.name, "Microsoft.Network/ddosProtectionPlans", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/ddosProtectionPlans";
}
export interface ddosProtectionPlansComponentOutputs {
	readonly apiVersion: "2018-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/ddosProtectionPlans";
}
export interface ddosProtectionPlansComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: DdosProtectionPlanPropertiesFormat;
	readonly tags?: DdosProtectionPlanTags;
}
export class expressRouteCircuits
	extends ArmResource<expressRouteCircuitsComponentInputs>
	implements expressRouteCircuitsComponentOutputs
{
	constructor(entity: ADKEntity, options: expressRouteCircuitsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/expressRouteCircuits", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/expressRouteCircuits";
}
export interface expressRouteCircuitsComponentOutputs {
	readonly apiVersion: "2018-06-01";
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
		super(entity, options.name, "Microsoft.Network/expressRouteCircuits/authorizations", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/expressRouteCircuits/authorizations";
}
export interface expressRouteCircuits_authorizationsComponentOutputs {
	readonly apiVersion: "2018-06-01";
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
		super(entity, options.name, "Microsoft.Network/expressRouteCircuits/peerings", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/expressRouteCircuits/peerings";
}
export interface expressRouteCircuits_peeringsComponentOutputs {
	readonly apiVersion: "2018-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/expressRouteCircuits/peerings";
}
export interface expressRouteCircuits_peeringsComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: ExpressRouteCircuitPeeringPropertiesFormat;
}
export class expressRouteCircuits_peerings_connections
	extends ArmResource<expressRouteCircuits_peerings_connectionsComponentInputs>
	implements expressRouteCircuits_peerings_connectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: expressRouteCircuits_peerings_connectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/expressRouteCircuits/peerings/connections", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/expressRouteCircuits/peerings/connections";
}
export interface expressRouteCircuits_peerings_connectionsComponentOutputs {
	readonly apiVersion: "2018-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/expressRouteCircuits/peerings/connections";
}
export interface expressRouteCircuits_peerings_connectionsComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: ExpressRouteCircuitConnectionPropertiesFormat;
}
export class expressRouteCrossConnections
	extends ArmResource<expressRouteCrossConnectionsComponentInputs>
	implements expressRouteCrossConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: expressRouteCrossConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/expressRouteCrossConnections", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/expressRouteCrossConnections";
}
export interface expressRouteCrossConnectionsComponentOutputs {
	readonly apiVersion: "2018-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/expressRouteCrossConnections";
}
export interface expressRouteCrossConnectionsComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: ExpressRouteCrossConnectionProperties;
	readonly tags?: ResourceTags;
}
export class expressRouteCrossConnections_peerings
	extends ArmResource<expressRouteCrossConnections_peeringsComponentInputs>
	implements expressRouteCrossConnections_peeringsComponentOutputs
{
	constructor(entity: ADKEntity, options: expressRouteCrossConnections_peeringsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/expressRouteCrossConnections/peerings", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/expressRouteCrossConnections/peerings";
}
export interface expressRouteCrossConnections_peeringsComponentOutputs {
	readonly apiVersion: "2018-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/expressRouteCrossConnections/peerings";
}
export interface expressRouteCrossConnections_peeringsComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: ExpressRouteCrossConnectionPeeringProperties;
}
export class loadBalancers extends ArmResource<loadBalancersComponentInputs> implements loadBalancersComponentOutputs {
	constructor(entity: ADKEntity, options: loadBalancersComponentInputs) {
		super(entity, options.name, "Microsoft.Network/loadBalancers", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/loadBalancers";
}
export interface loadBalancersComponentOutputs {
	readonly apiVersion: "2018-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/loadBalancers";
}
export interface loadBalancersComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: LoadBalancerPropertiesFormat;
	readonly sku?: LoadBalancerSku;
	readonly tags?: ResourceTags;
}
export class loadBalancers_backendAddressPools
	extends ArmResource<loadBalancers_backendAddressPoolsComponentInputs>
	implements loadBalancers_backendAddressPoolsComponentOutputs
{
	constructor(entity: ADKEntity, options: loadBalancers_backendAddressPoolsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/loadBalancers/backendAddressPools", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/loadBalancers/backendAddressPools";
}
export interface loadBalancers_backendAddressPoolsComponentOutputs {
	readonly apiVersion: "2018-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/loadBalancers/backendAddressPools";
}
export interface loadBalancers_backendAddressPoolsComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: BackendAddressPoolPropertiesFormat;
}
export class loadBalancers_frontendIPConfigurations
	extends ArmResource<loadBalancers_frontendIPConfigurationsComponentInputs>
	implements loadBalancers_frontendIPConfigurationsComponentOutputs
{
	constructor(entity: ADKEntity, options: loadBalancers_frontendIPConfigurationsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/loadBalancers/frontendIPConfigurations", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/loadBalancers/frontendIPConfigurations";
}
export interface loadBalancers_frontendIPConfigurationsComponentOutputs {
	readonly apiVersion: "2018-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/loadBalancers/frontendIPConfigurations";
}
export interface loadBalancers_frontendIPConfigurationsComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: FrontendIPConfigurationPropertiesFormat;
	readonly zones?: string[];
}
export class loadBalancers_inboundNatRules
	extends ArmResource<loadBalancers_inboundNatRulesComponentInputs>
	implements loadBalancers_inboundNatRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: loadBalancers_inboundNatRulesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/loadBalancers/inboundNatRules", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/loadBalancers/inboundNatRules";
}
export interface loadBalancers_inboundNatRulesComponentOutputs {
	readonly apiVersion: "2018-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/loadBalancers/inboundNatRules";
}
export interface loadBalancers_inboundNatRulesComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: InboundNatRulePropertiesFormat;
}
export class loadBalancers_loadBalancingRules
	extends ArmResource<loadBalancers_loadBalancingRulesComponentInputs>
	implements loadBalancers_loadBalancingRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: loadBalancers_loadBalancingRulesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/loadBalancers/loadBalancingRules", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/loadBalancers/loadBalancingRules";
}
export interface loadBalancers_loadBalancingRulesComponentOutputs {
	readonly apiVersion: "2018-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/loadBalancers/loadBalancingRules";
}
export interface loadBalancers_loadBalancingRulesComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: LoadBalancingRulePropertiesFormat;
}
export class loadBalancers_probes
	extends ArmResource<loadBalancers_probesComponentInputs>
	implements loadBalancers_probesComponentOutputs
{
	constructor(entity: ADKEntity, options: loadBalancers_probesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/loadBalancers/probes", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/loadBalancers/probes";
}
export interface loadBalancers_probesComponentOutputs {
	readonly apiVersion: "2018-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/loadBalancers/probes";
}
export interface loadBalancers_probesComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: ProbePropertiesFormat;
}
export class localNetworkGateways
	extends ArmResource<localNetworkGatewaysComponentInputs>
	implements localNetworkGatewaysComponentOutputs
{
	constructor(entity: ADKEntity, options: localNetworkGatewaysComponentInputs) {
		super(entity, options.name, "Microsoft.Network/localNetworkGateways", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/localNetworkGateways";
}
export interface localNetworkGatewaysComponentOutputs {
	readonly apiVersion: "2018-06-01";
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
		super(entity, options.name, "Microsoft.Network/networkInterfaces", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkInterfaces";
}
export interface networkInterfacesComponentOutputs {
	readonly apiVersion: "2018-06-01";
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
export class networkInterfaces_ipConfigurations
	extends ArmResource<networkInterfaces_ipConfigurationsComponentInputs>
	implements networkInterfaces_ipConfigurationsComponentOutputs
{
	constructor(entity: ADKEntity, options: networkInterfaces_ipConfigurationsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/networkInterfaces/ipConfigurations", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkInterfaces/ipConfigurations";
}
export interface networkInterfaces_ipConfigurationsComponentOutputs {
	readonly apiVersion: "2018-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/networkInterfaces/ipConfigurations";
}
export interface networkInterfaces_ipConfigurationsComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: NetworkInterfaceIPConfigurationPropertiesFormat;
}
export class networkSecurityGroups
	extends ArmResource<networkSecurityGroupsComponentInputs>
	implements networkSecurityGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: networkSecurityGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/networkSecurityGroups", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkSecurityGroups";
}
export interface networkSecurityGroupsComponentOutputs {
	readonly apiVersion: "2018-06-01";
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
export class networkSecurityGroups_defaultSecurityRules
	extends ArmResource<networkSecurityGroups_defaultSecurityRulesComponentInputs>
	implements networkSecurityGroups_defaultSecurityRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: networkSecurityGroups_defaultSecurityRulesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/networkSecurityGroups/defaultSecurityRules", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkSecurityGroups/defaultSecurityRules";
}
export interface networkSecurityGroups_defaultSecurityRulesComponentOutputs {
	readonly apiVersion: "2018-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/networkSecurityGroups/defaultSecurityRules";
}
export interface networkSecurityGroups_defaultSecurityRulesComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: SecurityRulePropertiesFormat;
}
export class networkSecurityGroups_securityRules
	extends ArmResource<networkSecurityGroups_securityRulesComponentInputs>
	implements networkSecurityGroups_securityRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: networkSecurityGroups_securityRulesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/networkSecurityGroups/securityRules", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkSecurityGroups/securityRules";
}
export interface networkSecurityGroups_securityRulesComponentOutputs {
	readonly apiVersion: "2018-06-01";
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
		super(entity, options.name, "Microsoft.Network/networkWatchers", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkWatchers";
}
export interface networkWatchersComponentOutputs {
	readonly apiVersion: "2018-06-01";
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
export class networkWatchers_connectionMonitors
	extends ArmResource<networkWatchers_connectionMonitorsComponentInputs>
	implements networkWatchers_connectionMonitorsComponentOutputs
{
	constructor(entity: ADKEntity, options: networkWatchers_connectionMonitorsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/networkWatchers/connectionMonitors", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkWatchers/connectionMonitors";
}
export interface networkWatchers_connectionMonitorsComponentOutputs {
	readonly apiVersion: "2018-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/networkWatchers/connectionMonitors";
}
export interface networkWatchers_connectionMonitorsComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties: ConnectionMonitorParametersOrConnectionMonitorResultProperties;
	readonly tags?: ConnectionMonitorTags;
}
export class networkWatchers_packetCaptures
	extends ArmResource<networkWatchers_packetCapturesComponentInputs>
	implements networkWatchers_packetCapturesComponentOutputs
{
	constructor(entity: ADKEntity, options: networkWatchers_packetCapturesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/networkWatchers/packetCaptures", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkWatchers/packetCaptures";
}
export interface networkWatchers_packetCapturesComponentOutputs {
	readonly apiVersion: "2018-06-01";
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
		super(entity, options.name, "Microsoft.Network/publicIPAddresses", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/publicIPAddresses";
}
export interface publicIPAddressesComponentOutputs {
	readonly apiVersion: "2018-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/publicIPAddresses";
}
export interface publicIPAddressesComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: PublicIPAddressPropertiesFormat;
	readonly sku?: PublicIPAddressSku;
	readonly tags?: ResourceTags;
	readonly zones?: string[];
}
export class routeFilters extends ArmResource<routeFiltersComponentInputs> implements routeFiltersComponentOutputs {
	constructor(entity: ADKEntity, options: routeFiltersComponentInputs) {
		super(entity, options.name, "Microsoft.Network/routeFilters", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/routeFilters";
}
export interface routeFiltersComponentOutputs {
	readonly apiVersion: "2018-06-01";
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
		super(entity, options.name, "Microsoft.Network/routeFilters/routeFilterRules", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/routeFilters/routeFilterRules";
}
export interface routeFilters_routeFilterRulesComponentOutputs {
	readonly apiVersion: "2018-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/routeFilters/routeFilterRules";
}
export interface routeFilters_routeFilterRulesComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: RouteFilterRulePropertiesFormat;
}
export class routeTables extends ArmResource<routeTablesComponentInputs> implements routeTablesComponentOutputs {
	constructor(entity: ADKEntity, options: routeTablesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/routeTables", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/routeTables";
}
export interface routeTablesComponentOutputs {
	readonly apiVersion: "2018-06-01";
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
		super(entity, options.name, "Microsoft.Network/routeTables/routes", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/routeTables/routes";
}
export interface routeTables_routesComponentOutputs {
	readonly apiVersion: "2018-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/routeTables/routes";
}
export interface routeTables_routesComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: RoutePropertiesFormat;
}
export class virtualHubs extends ArmResource<virtualHubsComponentInputs> implements virtualHubsComponentOutputs {
	constructor(entity: ADKEntity, options: virtualHubsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/virtualHubs", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/virtualHubs";
}
export interface virtualHubsComponentOutputs {
	readonly apiVersion: "2018-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/virtualHubs";
}
export interface virtualHubsComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: VirtualHubProperties;
	readonly tags?: ResourceTags;
}
export class virtualHubs_hubVirtualNetworkConnections
	extends ArmResource<virtualHubs_hubVirtualNetworkConnectionsComponentInputs>
	implements virtualHubs_hubVirtualNetworkConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualHubs_hubVirtualNetworkConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/virtualHubs/hubVirtualNetworkConnections", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/virtualHubs/hubVirtualNetworkConnections";
}
export interface virtualHubs_hubVirtualNetworkConnectionsComponentOutputs {
	readonly apiVersion: "2018-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/virtualHubs/hubVirtualNetworkConnections";
}
export interface virtualHubs_hubVirtualNetworkConnectionsComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: HubVirtualNetworkConnectionProperties;
	readonly tags?: ResourceTags;
}
export class virtualNetworkGateways
	extends ArmResource<virtualNetworkGatewaysComponentInputs>
	implements virtualNetworkGatewaysComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualNetworkGatewaysComponentInputs) {
		super(entity, options.name, "Microsoft.Network/virtualNetworkGateways", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/virtualNetworkGateways";
}
export interface virtualNetworkGatewaysComponentOutputs {
	readonly apiVersion: "2018-06-01";
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
		super(entity, options.name, "Microsoft.Network/virtualNetworks", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/virtualNetworks";
}
export interface virtualNetworksComponentOutputs {
	readonly apiVersion: "2018-06-01";
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
		super(entity, options.name, "Microsoft.Network/virtualNetworks/subnets", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/virtualNetworks/subnets";
}
export interface virtualNetworks_subnetsComponentOutputs {
	readonly apiVersion: "2018-06-01";
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
		super(entity, options.name, "Microsoft.Network/virtualNetworks/virtualNetworkPeerings", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/virtualNetworks/virtualNetworkPeerings";
}
export interface virtualNetworks_virtualNetworkPeeringsComponentOutputs {
	readonly apiVersion: "2018-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/virtualNetworks/virtualNetworkPeerings";
}
export interface virtualNetworks_virtualNetworkPeeringsComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: VirtualNetworkPeeringPropertiesFormat;
}
export class virtualWans extends ArmResource<virtualWansComponentInputs> implements virtualWansComponentOutputs {
	constructor(entity: ADKEntity, options: virtualWansComponentInputs) {
		super(entity, options.name, "Microsoft.Network/virtualWans", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/virtualWans";
}
export interface virtualWansComponentOutputs {
	readonly apiVersion: "2018-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/virtualWans";
}
export interface virtualWansComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: VirtualWanProperties;
	readonly tags?: ResourceTags;
}
export class vpnGateways extends ArmResource<vpnGatewaysComponentInputs> implements vpnGatewaysComponentOutputs {
	constructor(entity: ADKEntity, options: vpnGatewaysComponentInputs) {
		super(entity, options.name, "Microsoft.Network/vpnGateways", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/vpnGateways";
}
export interface vpnGatewaysComponentOutputs {
	readonly apiVersion: "2018-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/vpnGateways";
}
export interface vpnGatewaysComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: VpnGatewayProperties;
	readonly tags?: ResourceTags;
}
export class vpnGateways_vpnConnections
	extends ArmResource<vpnGateways_vpnConnectionsComponentInputs>
	implements vpnGateways_vpnConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: vpnGateways_vpnConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/vpnGateways/vpnConnections", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/vpnGateways/vpnConnections";
}
export interface vpnGateways_vpnConnectionsComponentOutputs {
	readonly apiVersion: "2018-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/vpnGateways/vpnConnections";
}
export interface vpnGateways_vpnConnectionsComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: VpnConnectionProperties;
}
export class vpnSites extends ArmResource<vpnSitesComponentInputs> implements vpnSitesComponentOutputs {
	constructor(entity: ADKEntity, options: vpnSitesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/vpnSites", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/vpnSites";
}
export interface vpnSitesComponentOutputs {
	readonly apiVersion: "2018-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/vpnSites";
}
export interface vpnSitesComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: VpnSiteProperties;
	readonly tags?: ResourceTags;
}
export interface AddressSpace {
	readonly addressPrefixes?: string[];
}
export interface ApplicationGatewayAuthenticationCertificate {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: ApplicationGatewayAuthenticationCertificatePropertiesFormat;
	readonly type?: string;
}
export interface ApplicationGatewayAuthenticationCertificatePropertiesFormat {
	readonly data?: string;
	readonly provisioningState?: string;
}
export interface ApplicationGatewayAutoscaleBounds {
	readonly max: number;
	readonly min: number;
}
export interface ApplicationGatewayAutoscaleConfiguration {
	readonly bounds: ApplicationGatewayAutoscaleBounds;
}
export interface ApplicationGatewayAvailableSslOptionsPropertiesFormat {
	readonly availableCipherSuites?:
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
		| "TLS_RSA_WITH_AES_256_GCM_SHA384"[];
	readonly availableProtocols?: "TLSv1_0" | "TLSv1_1" | "TLSv1_2"[];
	readonly defaultPolicy?: "AppGwSslPolicy20150501" | "AppGwSslPolicy20170401" | "AppGwSslPolicy20170401S";
	readonly predefinedPolicies?: SubResource[];
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
export interface ApplicationGatewayBackendHttpSettings {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: ApplicationGatewayBackendHttpSettingsPropertiesFormat;
	readonly type?: string;
}
export interface ApplicationGatewayBackendHttpSettingsPropertiesFormat {
	readonly affinityCookieName?: string;
	readonly authenticationCertificates?: SubResource[];
	readonly connectionDraining?: ApplicationGatewayConnectionDraining;
	readonly cookieBasedAffinity?: "Disabled" | "Enabled";
	readonly hostName?: string;
	readonly path?: string;
	readonly pickHostNameFromBackendAddress?: boolean;
	readonly port?: number;
	readonly probe?: SubResource;
	readonly probeEnabled?: boolean;
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
	readonly type?: string;
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
	readonly type?: string;
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
	readonly type?: string;
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
	readonly type?: string;
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
	readonly type?: string;
}
export interface ApplicationGatewayPathRulePropertiesFormat {
	readonly backendAddressPool?: SubResource;
	readonly backendHttpSettings?: SubResource;
	readonly paths?: string[];
	readonly provisioningState?: string;
	readonly redirectConfiguration?: SubResource;
}
export interface ApplicationGatewayProbe {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: ApplicationGatewayProbePropertiesFormat;
	readonly type?: string;
}
export interface ApplicationGatewayProbeHealthResponseMatch {
	readonly body?: string;
	readonly statusCodes?: string[];
}
export interface ApplicationGatewayProbePropertiesFormat {
	readonly host?: string;
	readonly interval?: number;
	readonly match?: ApplicationGatewayProbeHealthResponseMatch;
	readonly minServers?: number;
	readonly path?: string;
	readonly pickHostNameFromBackendHttpSettings?: boolean;
	readonly protocol?: "Http" | "Https";
	readonly provisioningState?: string;
	readonly timeout?: number;
	readonly unhealthyThreshold?: number;
}
export interface ApplicationGatewayPropertiesFormat {
	readonly authenticationCertificates?: ApplicationGatewayAuthenticationCertificate[];
	readonly autoscaleConfiguration?: ApplicationGatewayAutoscaleConfiguration;
	readonly backendAddressPools?: ApplicationGatewayBackendAddressPool[];
	readonly backendHttpSettingsCollection?: ApplicationGatewayBackendHttpSettings[];
	readonly enableFips?: boolean;
	readonly enableHttp2?: boolean;
	readonly frontendIPConfigurations?: ApplicationGatewayFrontendIPConfiguration[];
	readonly frontendPorts?: ApplicationGatewayFrontendPort[];
	readonly gatewayIPConfigurations?: ApplicationGatewayIPConfiguration[];
	readonly httpListeners?: ApplicationGatewayHttpListener[];
	readonly operationalState?: "Running" | "Starting" | "Stopped" | "Stopping";
	readonly probes?: ApplicationGatewayProbe[];
	readonly provisioningState?: string;
	readonly redirectConfigurations?: ApplicationGatewayRedirectConfiguration[];
	readonly requestRoutingRules?: ApplicationGatewayRequestRoutingRule[];
	readonly resourceGuid?: string;
	readonly sku?: ApplicationGatewaySku;
	readonly sslCertificates?: ApplicationGatewaySslCertificate[];
	readonly sslPolicy?: ApplicationGatewaySslPolicy;
	readonly urlPathMaps?: ApplicationGatewayUrlPathMap[];
	readonly webApplicationFirewallConfiguration?: ApplicationGatewayWebApplicationFirewallConfiguration;
}
export interface ApplicationGatewayRedirectConfiguration {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: ApplicationGatewayRedirectConfigurationPropertiesFormat;
	readonly type?: string;
}
export interface ApplicationGatewayRedirectConfigurationPropertiesFormat {
	readonly includePath?: boolean;
	readonly includeQueryString?: boolean;
	readonly pathRules?: SubResource[];
	readonly redirectType?: "Found" | "Permanent" | "SeeOther" | "Temporary";
	readonly requestRoutingRules?: SubResource[];
	readonly targetListener?: SubResource;
	readonly targetUrl?: string;
	readonly urlPathMaps?: SubResource[];
}
export interface ApplicationGatewayRequestRoutingRule {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: ApplicationGatewayRequestRoutingRulePropertiesFormat;
	readonly type?: string;
}
export interface ApplicationGatewayRequestRoutingRulePropertiesFormat {
	readonly backendAddressPool?: SubResource;
	readonly backendHttpSettings?: SubResource;
	readonly httpListener?: SubResource;
	readonly provisioningState?: string;
	readonly redirectConfiguration?: SubResource;
	readonly ruleType?: "Basic" | "PathBasedRouting";
	readonly urlPathMap?: SubResource;
}
export interface ApplicationGatewaySku {
	readonly capacity?: number;
	readonly name?:
		| "Standard_Large"
		| "Standard_Medium"
		| "Standard_Small"
		| "Standard_v2"
		| "WAF_Large"
		| "WAF_Medium"
		| "WAF_v2";
	readonly tier?: "Standard" | "Standard_v2" | "WAF" | "WAF_v2";
}
export interface ApplicationGatewaySslCertificate {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: ApplicationGatewaySslCertificatePropertiesFormat;
	readonly type?: string;
}
export interface ApplicationGatewaySslCertificatePropertiesFormat {
	readonly data?: string;
	readonly password?: string;
	readonly provisioningState?: string;
	readonly publicCertData?: string;
}
export interface ApplicationGatewaySslPolicy {
	readonly cipherSuites?:
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
		| "TLS_RSA_WITH_AES_256_GCM_SHA384"[];
	readonly disabledSslProtocols?: "TLSv1_0" | "TLSv1_1" | "TLSv1_2"[];
	readonly minProtocolVersion?: "TLSv1_0" | "TLSv1_1" | "TLSv1_2";
	readonly policyName?: "AppGwSslPolicy20150501" | "AppGwSslPolicy20170401" | "AppGwSslPolicy20170401S";
	readonly policyType?: "Custom" | "Predefined";
}
export interface ApplicationGatewaySslPredefinedPolicyPropertiesFormat {
	readonly cipherSuites?:
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
		| "TLS_RSA_WITH_AES_256_GCM_SHA384"[];
	readonly minProtocolVersion?: "TLSv1_0" | "TLSv1_1" | "TLSv1_2";
}
export interface ApplicationGatewayUrlPathMap {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: ApplicationGatewayUrlPathMapPropertiesFormat;
	readonly type?: string;
}
export interface ApplicationGatewayUrlPathMapPropertiesFormat {
	readonly defaultBackendAddressPool?: SubResource;
	readonly defaultBackendHttpSettings?: SubResource;
	readonly defaultRedirectConfiguration?: SubResource;
	readonly pathRules?: ApplicationGatewayPathRule[];
	readonly provisioningState?: string;
}
export interface ApplicationGatewayWebApplicationFirewallConfiguration {
	readonly disabledRuleGroups?: ApplicationGatewayFirewallDisabledRuleGroup[];
	readonly enabled: boolean;
	readonly firewallMode: "Detection" | "Prevention";
	readonly maxRequestBodySize?: number;
	readonly requestBodyCheck?: boolean;
	readonly ruleSetType: string;
	readonly ruleSetVersion: string;
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
export interface AuthorizationPropertiesFormat {
	readonly authorizationKey?: string;
	readonly authorizationUseStatus?: "Available" | "InUse";
	readonly provisioningState?: string;
}
export interface AzureFirewallApplicationRule {
	readonly description?: string;
	readonly name?: string;
	readonly protocols?: AzureFirewallApplicationRuleProtocol[];
	readonly sourceAddresses?: string[];
	readonly targetUrls?: string[];
}
export interface AzureFirewallApplicationRuleCollection {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: AzureFirewallApplicationRuleCollectionPropertiesFormat;
}
export interface AzureFirewallApplicationRuleCollectionPropertiesFormat {
	readonly action?: AzureFirewallRCAction;
	readonly priority?: number;
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly rules?: AzureFirewallApplicationRule[];
}
export interface AzureFirewallApplicationRuleProtocol {
	readonly port?: number;
	readonly protocolType?: "Http" | "Https";
}
export interface AzureFirewallIPConfiguration {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: AzureFirewallIPConfigurationPropertiesFormat;
}
export interface AzureFirewallIPConfigurationPropertiesFormat {
	readonly internalPublicIpAddress?: SubResource;
	readonly privateIPAddress?: string;
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly publicIPAddress?: SubResource;
	readonly subnet?: SubResource;
}
export interface AzureFirewallNetworkRule {
	readonly description?: string;
	readonly destinationAddresses?: string[];
	readonly destinationPorts?: string[];
	readonly name?: string;
	readonly protocols?: "any" | "ICMP" | "TCP" | "UDP"[];
	readonly sourceAddresses?: string[];
}
export interface AzureFirewallNetworkRuleCollection {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: AzureFirewallNetworkRuleCollectionPropertiesFormat;
}
export interface AzureFirewallNetworkRuleCollectionPropertiesFormat {
	readonly action?: AzureFirewallRCAction;
	readonly priority?: number;
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly rules?: AzureFirewallNetworkRule[];
}
export interface AzureFirewallPropertiesFormat {
	readonly applicationRuleCollections?: AzureFirewallApplicationRuleCollection[];
	readonly ipConfigurations?: AzureFirewallIPConfiguration[];
	readonly networkRuleCollections?: AzureFirewallNetworkRuleCollection[];
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface AzureFirewallRCAction {
	readonly type?: "Allow" | "Deny";
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
export interface ConnectionMonitorDestination {
	readonly address?: string;
	readonly port?: number;
	readonly resourceId?: string;
}
export interface ConnectionMonitorParametersOrConnectionMonitorResultProperties {
	readonly autoStart?: boolean;
	readonly destination: ConnectionMonitorDestination;
	readonly monitoringIntervalInSeconds?: number;
	readonly monitoringStatus?: string;
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly source: ConnectionMonitorSource;
	readonly startTime?: string;
}
export interface ConnectionMonitorSource {
	readonly port?: number;
	readonly resourceId: string;
}
export interface ConnectionMonitorTags {
	readonly [key: string]: string;
}
export interface DdosProtectionPlanPropertiesFormat {
	readonly provisioningState?: string;
	readonly resourceGuid?: string;
	readonly virtualNetworks?: SubResource[];
}
export interface DdosProtectionPlanTags {
	readonly [key: string]: string;
}
export interface DeviceProperties {
	readonly deviceModel?: string;
	readonly deviceVendor?: string;
	readonly linkSpeedInMbps?: number;
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
export interface ExpressRouteCircuitConnection {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: ExpressRouteCircuitConnectionPropertiesFormat;
}
export interface ExpressRouteCircuitConnectionPropertiesFormat {
	readonly addressPrefix?: string;
	readonly authorizationKey?: string;
	readonly circuitConnectionStatus?: "Connected" | "Connecting" | "Disconnected";
	readonly expressRouteCircuitPeering?: SubResource;
	readonly peerExpressRouteCircuitPeering?: SubResource;
	readonly provisioningState?: string;
}
export interface ExpressRouteCircuitPeering {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: ExpressRouteCircuitPeeringPropertiesFormat;
}
export interface ExpressRouteCircuitPeeringConfig {
	readonly advertisedCommunities?: string[];
	readonly advertisedPublicPrefixes?: string[];
	readonly advertisedPublicPrefixesState?: "Configured" | "Configuring" | "NotConfigured" | "ValidationNeeded";
	readonly customerASN?: number;
	readonly legacyMode?: number;
	readonly routingRegistryName?: string;
}
export interface ExpressRouteCircuitPeeringPropertiesFormat {
	readonly azureASN?: number;
	readonly connections?: ExpressRouteCircuitConnection[];
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
export interface ExpressRouteCircuitReference {
	readonly id?: string;
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
export interface ExpressRouteCrossConnectionPeering {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: ExpressRouteCrossConnectionPeeringProperties;
}
export interface ExpressRouteCrossConnectionPeeringProperties {
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
	readonly secondaryAzurePort?: string;
	readonly secondaryPeerAddressPrefix?: string;
	readonly sharedKey?: string;
	readonly state?: "Disabled" | "Enabled";
	readonly vlanId?: number;
}
export interface ExpressRouteCrossConnectionProperties {
	readonly bandwidthInMbps?: number;
	readonly expressRouteCircuit?: ExpressRouteCircuitReference;
	readonly peeringLocation?: string;
	readonly peerings?: ExpressRouteCrossConnectionPeering[];
	readonly primaryAzurePort?: string;
	readonly provisioningState?: string;
	readonly secondaryAzurePort?: string;
	readonly serviceProviderNotes?: string;
	readonly serviceProviderProvisioningState?: "Deprovisioning" | "NotProvisioned" | "Provisioned" | "Provisioning";
	readonly sTag?: number;
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
	readonly outboundNatRules?: SubResource[];
	readonly privateIPAddress?: string;
	readonly privateIPAllocationMethod?: "Dynamic" | "Static";
	readonly provisioningState?: string;
	readonly publicIPAddress?: PublicIPAddress;
	readonly subnet?: Subnet;
}
export interface HubVirtualNetworkConnection {
	readonly etag?: string;
	readonly id?: string;
	readonly location?: string;
	readonly name?: string;
	readonly properties?: HubVirtualNetworkConnectionProperties;
	readonly tags?: ResourceTags;
	readonly type?: string;
}
export interface HubVirtualNetworkConnectionProperties {
	readonly allowHubToRemoteVnetTransit?: boolean;
	readonly allowRemoteVnetToUseHubVnetGateways?: boolean;
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly remoteVirtualNetwork?: SubResource;
}
export interface InboundNatPool {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: InboundNatPoolPropertiesFormat;
}
export interface InboundNatPoolPropertiesFormat {
	readonly backendPort: number;
	readonly enableFloatingIP?: boolean;
	readonly frontendIPConfiguration?: SubResource;
	readonly frontendPortRangeEnd: number;
	readonly frontendPortRangeStart: number;
	readonly idleTimeoutInMinutes?: number;
	readonly protocol: "All" | "Tcp" | "Udp";
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
	readonly protocol?: "All" | "Tcp" | "Udp";
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
	readonly ikeEncryption: "AES128" | "AES192" | "AES256" | "DES" | "DES3" | "GCMAES128" | "GCMAES256";
	readonly ikeIntegrity: "GCMAES128" | "GCMAES256" | "MD5" | "SHA1" | "SHA256" | "SHA384";
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
	readonly pfsGroup: "ECP256" | "ECP384" | "None" | "PFS1" | "PFS14" | "PFS2" | "PFS2048" | "PFS24" | "PFSMM";
	readonly saDataSizeKilobytes: number;
	readonly saLifeTimeSeconds: number;
}
export interface IpTag {
	readonly ipTagType?: string;
	readonly tag?: string;
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
export interface LoadBalancerSku {
	readonly name?: "Basic" | "Standard";
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
	readonly disableOutboundSnat?: boolean;
	readonly enableFloatingIP?: boolean;
	readonly frontendIPConfiguration?: SubResource;
	readonly frontendPort: number;
	readonly idleTimeoutInMinutes?: number;
	readonly loadDistribution?: "Default" | "SourceIP" | "SourceIPProtocol";
	readonly probe?: SubResource;
	readonly protocol: "All" | "Tcp" | "Udp";
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
export interface Policies {
	readonly allowBranchToBranchTraffic?: boolean;
	readonly allowVnetToVnetTraffic?: boolean;
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
	readonly protocol: "Http" | "Https" | "Tcp";
	readonly provisioningState?: string;
	readonly requestPath?: string;
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
	readonly dnsSettings?: PublicIPAddressDnsSettings;
	readonly idleTimeoutInMinutes?: number;
	readonly ipAddress?: string;
	readonly ipConfiguration?: IPConfiguration;
	readonly ipTags?: IpTag[];
	readonly provisioningState?: string;
	readonly publicIPAddressVersion?: "IPv4" | "IPv6";
	readonly publicIPAllocationMethod?: "Dynamic" | "Static";
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
}
export interface RouteFilterRulePropertiesFormat {
	readonly access: "Allow" | "Deny";
	readonly communities: string[];
	readonly provisioningState?: string;
	readonly routeFilterRuleType: "Community";
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
	readonly protocol: "" | "Tcp" | "Udp";
	readonly provisioningState?: string;
	readonly sourceAddressPrefix?: string;
	readonly sourceAddressPrefixes?: string[];
	readonly sourceApplicationSecurityGroups?: ApplicationSecurityGroup[];
	readonly sourcePortRange?: string;
	readonly sourcePortRanges?: string[];
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
	readonly ipConfigurations?: IPConfiguration[];
	readonly networkSecurityGroup?: NetworkSecurityGroup;
	readonly provisioningState?: string;
	readonly resourceNavigationLinks?: ResourceNavigationLink[];
	readonly routeTable?: RouteTable;
	readonly serviceEndpoints?: ServiceEndpointPropertiesFormat[];
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
export interface VirtualHubProperties {
	readonly addressPrefix?: string;
	readonly hubVirtualNetworkConnections?: HubVirtualNetworkConnection[];
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly virtualWan?: SubResource;
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
	readonly name?:
		| "Basic"
		| "ErGw1AZ"
		| "ErGw2AZ"
		| "ErGw3AZ"
		| "HighPerformance"
		| "Standard"
		| "UltraPerformance"
		| "VpnGw1"
		| "VpnGw1AZ"
		| "VpnGw2"
		| "VpnGw2AZ"
		| "VpnGw3"
		| "VpnGw3AZ";
	readonly tier?:
		| "Basic"
		| "ErGw1AZ"
		| "ErGw2AZ"
		| "ErGw3AZ"
		| "HighPerformance"
		| "Standard"
		| "UltraPerformance"
		| "VpnGw1"
		| "VpnGw1AZ"
		| "VpnGw2"
		| "VpnGw2AZ"
		| "VpnGw3"
		| "VpnGw3AZ";
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
	readonly remoteAddressSpace?: AddressSpace;
	readonly remoteVirtualNetwork?: SubResource;
	readonly useRemoteGateways?: boolean;
}
export interface VirtualNetworkPropertiesFormat {
	readonly addressSpace?: AddressSpace;
	readonly ddosProtectionPlan?: SubResource;
	readonly dhcpOptions?: DhcpOptions;
	readonly enableDdosProtection?: boolean;
	readonly enableVmProtection?: boolean;
	readonly provisioningState?: string;
	readonly resourceGuid?: string;
	readonly subnets?: Subnet[];
	readonly virtualNetworkPeerings?: VirtualNetworkPeering[];
}
export interface VirtualWanProperties {
	readonly disableVpnEncryption?: boolean;
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly virtualHubs?: SubResource[];
	readonly vpnSites?: SubResource[];
}
export interface VpnClientConfiguration {
	readonly radiusServerAddress?: string;
	readonly radiusServerSecret?: string;
	readonly vpnClientAddressPool?: AddressSpace;
	readonly vpnClientIpsecPolicies?: IpsecPolicy[];
	readonly vpnClientProtocols?: "IkeV2" | "OpenVPN" | "SSTP"[];
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
export interface VpnConnection {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: VpnConnectionProperties;
}
export interface VpnConnectionProperties {
	readonly connectionBandwidthInMbps?: number;
	readonly connectionStatus?: "Connected" | "Connecting" | "NotConnected" | "Unknown";
	readonly egressBytesTransferred?: number;
	readonly enableBgp?: boolean;
	readonly ingressBytesTransferred?: number;
	readonly ipsecPolicies?: IpsecPolicy[];
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly remoteVpnSite?: SubResource;
	readonly routingWeight?: number;
	readonly sharedKey?: string;
}
export interface VpnGatewayProperties {
	readonly bgpSettings?: BgpSettings;
	readonly connections?: VpnConnection[];
	readonly policies?: Policies;
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly virtualHub?: SubResource;
}
export interface VpnSiteProperties {
	readonly addressSpace?: AddressSpace;
	readonly bgpProperties?: BgpSettings;
	readonly deviceProperties?: DeviceProperties;
	readonly ipAddress?: string;
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly siteKey?: string;
	readonly virtualWAN?: SubResource;
}
export default {
	applicationGatewayAvailableSslOptions: applicationGatewayAvailableSslOptions,
	"applicationGatewayAvailableSslOptions/predefinedPolicies": applicationGatewayAvailableSslOptions_predefinedPolicies,
	applicationGateways: applicationGateways,
	applicationSecurityGroups: applicationSecurityGroups,
	azureFirewalls: azureFirewalls,
	connections: connections,
	ddosProtectionPlans: ddosProtectionPlans,
	expressRouteCircuits: expressRouteCircuits,
	"expressRouteCircuits/authorizations": expressRouteCircuits_authorizations,
	"expressRouteCircuits/peerings": expressRouteCircuits_peerings,
	"expressRouteCircuits/peerings/connections": expressRouteCircuits_peerings_connections,
	expressRouteCrossConnections: expressRouteCrossConnections,
	"expressRouteCrossConnections/peerings": expressRouteCrossConnections_peerings,
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
	virtualHubs: virtualHubs,
	"virtualHubs/hubVirtualNetworkConnections": virtualHubs_hubVirtualNetworkConnections,
	virtualNetworkGateways: virtualNetworkGateways,
	virtualNetworks: virtualNetworks,
	"virtualNetworks/subnets": virtualNetworks_subnets,
	"virtualNetworks/virtualNetworkPeerings": virtualNetworks_virtualNetworkPeerings,
	virtualWans: virtualWans,
	vpnGateways: vpnGateways,
	"vpnGateways/vpnConnections": vpnGateways_vpnConnections,
	vpnSites: vpnSites,
};

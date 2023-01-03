import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class applicationGatewayAvailableSslOptions
	extends ArmResource<applicationGatewayAvailableSslOptionsComponentInputs>
	implements applicationGatewayAvailableSslOptionsComponentOutputs
{
	constructor(entity: ADKEntity, options: applicationGatewayAvailableSslOptionsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/applicationGatewayAvailableSslOptions", "2019-04-01", options);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/applicationGatewayAvailableSslOptions";
}
export interface applicationGatewayAvailableSslOptionsComponentOutputs {
	readonly apiVersion: "2019-04-01";
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
			"2019-04-01",
			options,
		);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/applicationGatewayAvailableSslOptions/predefinedPolicies";
}
export interface applicationGatewayAvailableSslOptions_predefinedPoliciesComponentOutputs {
	readonly apiVersion: "2019-04-01";
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
		super(entity, options.name, "Microsoft.Network/applicationGateways", "2019-04-01", options);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/applicationGateways";
}
export interface applicationGatewaysComponentOutputs {
	readonly apiVersion: "2019-04-01";
	readonly id: string;
	readonly type: "Microsoft.Network/applicationGateways";
}
export interface applicationGatewaysComponentInputs {
	readonly etag?: string | undefined;
	readonly identity?: ManagedServiceIdentity | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ApplicationGatewayPropertiesFormat | undefined;
	readonly tags?: ResourceTags | undefined;
	readonly zones?: string[] | undefined;
}
export class ApplicationGatewayWebApplicationFirewallPolicies
	extends ArmResource<ApplicationGatewayWebApplicationFirewallPoliciesComponentInputs>
	implements ApplicationGatewayWebApplicationFirewallPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: ApplicationGatewayWebApplicationFirewallPoliciesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Network/ApplicationGatewayWebApplicationFirewallPolicies",
			"2019-04-01",
			options,
		);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/ApplicationGatewayWebApplicationFirewallPolicies";
}
export interface ApplicationGatewayWebApplicationFirewallPoliciesComponentOutputs {
	readonly apiVersion: "2019-04-01";
	readonly id: string;
	readonly type: "Microsoft.Network/ApplicationGatewayWebApplicationFirewallPolicies";
}
export interface ApplicationGatewayWebApplicationFirewallPoliciesComponentInputs {
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: WebApplicationFirewallPolicyPropertiesFormat | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class applicationSecurityGroups
	extends ArmResource<applicationSecurityGroupsComponentInputs>
	implements applicationSecurityGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: applicationSecurityGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/applicationSecurityGroups", "2019-04-01", options);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/applicationSecurityGroups";
}
export interface applicationSecurityGroupsComponentOutputs {
	readonly apiVersion: "2019-04-01";
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
export class azureFirewalls extends ArmResource<azureFirewallsComponentInputs> implements azureFirewallsComponentOutputs {
	constructor(entity: ADKEntity, options: azureFirewallsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/azureFirewalls", "2019-04-01", options);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/azureFirewalls";
}
export interface azureFirewallsComponentOutputs {
	readonly apiVersion: "2019-04-01";
	readonly id: string;
	readonly type: "Microsoft.Network/azureFirewalls";
}
export interface azureFirewallsComponentInputs {
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: AzureFirewallPropertiesFormat | undefined;
	readonly tags?: ResourceTags | undefined;
	readonly zones?: string[] | undefined;
}
export class bastionHosts extends ArmResource<bastionHostsComponentInputs> implements bastionHostsComponentOutputs {
	constructor(entity: ADKEntity, options: bastionHostsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/bastionHosts", "2019-04-01", options);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/bastionHosts";
}
export interface bastionHostsComponentOutputs {
	readonly apiVersion: "2019-04-01";
	readonly id: string;
	readonly type: "Microsoft.Network/bastionHosts";
}
export interface bastionHostsComponentInputs {
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: BastionHostPropertiesFormat | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class connections extends ArmResource<connectionsComponentInputs> implements connectionsComponentOutputs {
	constructor(entity: ADKEntity, options: connectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/connections", "2019-04-01", options);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/connections";
}
export interface connectionsComponentOutputs {
	readonly apiVersion: "2019-04-01";
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
export class ddosCustomPolicies
	extends ArmResource<ddosCustomPoliciesComponentInputs>
	implements ddosCustomPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: ddosCustomPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/ddosCustomPolicies", "2019-04-01", options);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/ddosCustomPolicies";
}
export interface ddosCustomPoliciesComponentOutputs {
	readonly apiVersion: "2019-04-01";
	readonly id: string;
	readonly type: "Microsoft.Network/ddosCustomPolicies";
}
export interface ddosCustomPoliciesComponentInputs {
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: DdosCustomPolicyPropertiesFormat | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class ddosProtectionPlans
	extends ArmResource<ddosProtectionPlansComponentInputs>
	implements ddosProtectionPlansComponentOutputs
{
	constructor(entity: ADKEntity, options: ddosProtectionPlansComponentInputs) {
		super(entity, options.name, "Microsoft.Network/ddosProtectionPlans", "2019-04-01", options);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/ddosProtectionPlans";
}
export interface ddosProtectionPlansComponentOutputs {
	readonly apiVersion: "2019-04-01";
	readonly id: string;
	readonly type: "Microsoft.Network/ddosProtectionPlans";
}
export interface ddosProtectionPlansComponentInputs {
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: DdosProtectionPlanPropertiesFormat | undefined;
	readonly tags?: DdosProtectionPlanTags | undefined;
}
export class expressRouteCircuits
	extends ArmResource<expressRouteCircuitsComponentInputs>
	implements expressRouteCircuitsComponentOutputs
{
	constructor(entity: ADKEntity, options: expressRouteCircuitsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/expressRouteCircuits", "2019-04-01", options);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/expressRouteCircuits";
}
export interface expressRouteCircuitsComponentOutputs {
	readonly apiVersion: "2019-04-01";
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
		super(entity, options.name, "Microsoft.Network/expressRouteCircuits/authorizations", "2019-04-01", options);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/expressRouteCircuits/authorizations";
}
export interface expressRouteCircuits_authorizationsComponentOutputs {
	readonly apiVersion: "2019-04-01";
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
		super(entity, options.name, "Microsoft.Network/expressRouteCircuits/peerings", "2019-04-01", options);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/expressRouteCircuits/peerings";
}
export interface expressRouteCircuits_peeringsComponentOutputs {
	readonly apiVersion: "2019-04-01";
	readonly id: string;
	readonly type: "Microsoft.Network/expressRouteCircuits/peerings";
}
export interface expressRouteCircuits_peeringsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: ExpressRouteCircuitPeeringPropertiesFormat | undefined;
}
export class expressRouteCircuits_peerings_connections
	extends ArmResource<expressRouteCircuits_peerings_connectionsComponentInputs>
	implements expressRouteCircuits_peerings_connectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: expressRouteCircuits_peerings_connectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/expressRouteCircuits/peerings/connections", "2019-04-01", options);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/expressRouteCircuits/peerings/connections";
}
export interface expressRouteCircuits_peerings_connectionsComponentOutputs {
	readonly apiVersion: "2019-04-01";
	readonly id: string;
	readonly type: "Microsoft.Network/expressRouteCircuits/peerings/connections";
}
export interface expressRouteCircuits_peerings_connectionsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: ExpressRouteCircuitConnectionPropertiesFormat | undefined;
}
export class expressRouteCircuits_peerings_peerConnections
	extends ArmResource<expressRouteCircuits_peerings_peerConnectionsComponentInputs>
	implements expressRouteCircuits_peerings_peerConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: expressRouteCircuits_peerings_peerConnectionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Network/expressRouteCircuits/peerings/peerConnections",
			"2019-04-01",
			options,
		);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/expressRouteCircuits/peerings/peerConnections";
}
export interface expressRouteCircuits_peerings_peerConnectionsComponentOutputs {
	readonly apiVersion: "2019-04-01";
	readonly id: string;
	readonly type: "Microsoft.Network/expressRouteCircuits/peerings/peerConnections";
}
export interface expressRouteCircuits_peerings_peerConnectionsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: PeerExpressRouteCircuitConnectionPropertiesFormat | undefined;
}
export class expressRouteCrossConnections
	extends ArmResource<expressRouteCrossConnectionsComponentInputs>
	implements expressRouteCrossConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: expressRouteCrossConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/expressRouteCrossConnections", "2019-04-01", options);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/expressRouteCrossConnections";
}
export interface expressRouteCrossConnectionsComponentOutputs {
	readonly apiVersion: "2019-04-01";
	readonly id: string;
	readonly type: "Microsoft.Network/expressRouteCrossConnections";
}
export interface expressRouteCrossConnectionsComponentInputs {
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ExpressRouteCrossConnectionProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class expressRouteCrossConnections_peerings
	extends ArmResource<expressRouteCrossConnections_peeringsComponentInputs>
	implements expressRouteCrossConnections_peeringsComponentOutputs
{
	constructor(entity: ADKEntity, options: expressRouteCrossConnections_peeringsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/expressRouteCrossConnections/peerings", "2019-04-01", options);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/expressRouteCrossConnections/peerings";
}
export interface expressRouteCrossConnections_peeringsComponentOutputs {
	readonly apiVersion: "2019-04-01";
	readonly id: string;
	readonly type: "Microsoft.Network/expressRouteCrossConnections/peerings";
}
export interface expressRouteCrossConnections_peeringsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: ExpressRouteCrossConnectionPeeringProperties | undefined;
}
export class expressRouteGateways
	extends ArmResource<expressRouteGatewaysComponentInputs>
	implements expressRouteGatewaysComponentOutputs
{
	constructor(entity: ADKEntity, options: expressRouteGatewaysComponentInputs) {
		super(entity, options.name, "Microsoft.Network/expressRouteGateways", "2019-04-01", options);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/expressRouteGateways";
}
export interface expressRouteGatewaysComponentOutputs {
	readonly apiVersion: "2019-04-01";
	readonly id: string;
	readonly type: "Microsoft.Network/expressRouteGateways";
}
export interface expressRouteGatewaysComponentInputs {
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ExpressRouteGatewayProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class expressRouteGateways_expressRouteConnections
	extends ArmResource<expressRouteGateways_expressRouteConnectionsComponentInputs>
	implements expressRouteGateways_expressRouteConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: expressRouteGateways_expressRouteConnectionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Network/expressRouteGateways/expressRouteConnections",
			"2019-04-01",
			options,
		);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/expressRouteGateways/expressRouteConnections";
}
export interface expressRouteGateways_expressRouteConnectionsComponentOutputs {
	readonly apiVersion: "2019-04-01";
	readonly id: string;
	readonly type: "Microsoft.Network/expressRouteGateways/expressRouteConnections";
}
export interface expressRouteGateways_expressRouteConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: ExpressRouteConnectionProperties | undefined;
}
export class ExpressRoutePorts
	extends ArmResource<ExpressRoutePortsComponentInputs>
	implements ExpressRoutePortsComponentOutputs
{
	constructor(entity: ADKEntity, options: ExpressRoutePortsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/ExpressRoutePorts", "2019-04-01", options);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/ExpressRoutePorts";
}
export interface ExpressRoutePortsComponentOutputs {
	readonly apiVersion: "2019-04-01";
	readonly id: string;
	readonly type: "Microsoft.Network/ExpressRoutePorts";
}
export interface ExpressRoutePortsComponentInputs {
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ExpressRoutePortPropertiesFormat | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class ExpressRoutePorts_links
	extends ArmResource<ExpressRoutePorts_linksComponentInputs>
	implements ExpressRoutePorts_linksComponentOutputs
{
	constructor(entity: ADKEntity, options: ExpressRoutePorts_linksComponentInputs) {
		super(entity, options.name, "Microsoft.Network/ExpressRoutePorts/links", "2019-04-01", options);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/ExpressRoutePorts/links";
}
export interface ExpressRoutePorts_linksComponentOutputs {
	readonly apiVersion: "2019-04-01";
	readonly id: string;
	readonly type: "Microsoft.Network/ExpressRoutePorts/links";
}
export interface ExpressRoutePorts_linksComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: ExpressRouteLinkPropertiesFormat | undefined;
}
export class ExpressRoutePortsLocations
	extends ArmResource<ExpressRoutePortsLocationsComponentInputs>
	implements ExpressRoutePortsLocationsComponentOutputs
{
	constructor(entity: ADKEntity, options: ExpressRoutePortsLocationsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/ExpressRoutePortsLocations", "2019-04-01", options);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/ExpressRoutePortsLocations";
}
export interface ExpressRoutePortsLocationsComponentOutputs {
	readonly apiVersion: "2019-04-01";
	readonly id: string;
	readonly type: "Microsoft.Network/ExpressRoutePortsLocations";
}
export interface ExpressRoutePortsLocationsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ExpressRoutePortsLocationPropertiesFormat | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class loadBalancers extends ArmResource<loadBalancersComponentInputs> implements loadBalancersComponentOutputs {
	constructor(entity: ADKEntity, options: loadBalancersComponentInputs) {
		super(entity, options.name, "Microsoft.Network/loadBalancers", "2019-04-01", options);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/loadBalancers";
}
export interface loadBalancersComponentOutputs {
	readonly apiVersion: "2019-04-01";
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
		super(entity, options.name, "Microsoft.Network/loadBalancers/backendAddressPools", "2019-04-01", options);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/loadBalancers/backendAddressPools";
}
export interface loadBalancers_backendAddressPoolsComponentOutputs {
	readonly apiVersion: "2019-04-01";
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
		super(entity, options.name, "Microsoft.Network/loadBalancers/frontendIPConfigurations", "2019-04-01", options);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/loadBalancers/frontendIPConfigurations";
}
export interface loadBalancers_frontendIPConfigurationsComponentOutputs {
	readonly apiVersion: "2019-04-01";
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
		super(entity, options.name, "Microsoft.Network/loadBalancers/inboundNatRules", "2019-04-01", options);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/loadBalancers/inboundNatRules";
}
export interface loadBalancers_inboundNatRulesComponentOutputs {
	readonly apiVersion: "2019-04-01";
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
		super(entity, options.name, "Microsoft.Network/loadBalancers/loadBalancingRules", "2019-04-01", options);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/loadBalancers/loadBalancingRules";
}
export interface loadBalancers_loadBalancingRulesComponentOutputs {
	readonly apiVersion: "2019-04-01";
	readonly id: string;
	readonly type: "Microsoft.Network/loadBalancers/loadBalancingRules";
}
export interface loadBalancers_loadBalancingRulesComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: LoadBalancingRulePropertiesFormat | undefined;
}
export class loadBalancers_outboundRules
	extends ArmResource<loadBalancers_outboundRulesComponentInputs>
	implements loadBalancers_outboundRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: loadBalancers_outboundRulesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/loadBalancers/outboundRules", "2019-04-01", options);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/loadBalancers/outboundRules";
}
export interface loadBalancers_outboundRulesComponentOutputs {
	readonly apiVersion: "2019-04-01";
	readonly id: string;
	readonly type: "Microsoft.Network/loadBalancers/outboundRules";
}
export interface loadBalancers_outboundRulesComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: OutboundRulePropertiesFormat | undefined;
}
export class loadBalancers_probes
	extends ArmResource<loadBalancers_probesComponentInputs>
	implements loadBalancers_probesComponentOutputs
{
	constructor(entity: ADKEntity, options: loadBalancers_probesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/loadBalancers/probes", "2019-04-01", options);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/loadBalancers/probes";
}
export interface loadBalancers_probesComponentOutputs {
	readonly apiVersion: "2019-04-01";
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
		super(entity, options.name, "Microsoft.Network/localNetworkGateways", "2019-04-01", options);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/localNetworkGateways";
}
export interface localNetworkGatewaysComponentOutputs {
	readonly apiVersion: "2019-04-01";
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
export class natGateways extends ArmResource<natGatewaysComponentInputs> implements natGatewaysComponentOutputs {
	constructor(entity: ADKEntity, options: natGatewaysComponentInputs) {
		super(entity, options.name, "Microsoft.Network/natGateways", "2019-04-01", options);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/natGateways";
}
export interface natGatewaysComponentOutputs {
	readonly apiVersion: "2019-04-01";
	readonly id: string;
	readonly type: "Microsoft.Network/natGateways";
}
export interface natGatewaysComponentInputs {
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: NatGatewayPropertiesFormat | undefined;
	readonly sku?: NatGatewaySku | undefined;
	readonly tags?: ResourceTags | undefined;
	readonly zones?: string[] | undefined;
}
export class networkInterfaces
	extends ArmResource<networkInterfacesComponentInputs>
	implements networkInterfacesComponentOutputs
{
	constructor(entity: ADKEntity, options: networkInterfacesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/networkInterfaces", "2019-04-01", options);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkInterfaces";
}
export interface networkInterfacesComponentOutputs {
	readonly apiVersion: "2019-04-01";
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
		super(entity, options.name, "Microsoft.Network/networkInterfaces/ipConfigurations", "2019-04-01", options);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkInterfaces/ipConfigurations";
}
export interface networkInterfaces_ipConfigurationsComponentOutputs {
	readonly apiVersion: "2019-04-01";
	readonly id: string;
	readonly type: "Microsoft.Network/networkInterfaces/ipConfigurations";
}
export interface networkInterfaces_ipConfigurationsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: NetworkInterfaceIPConfigurationPropertiesFormat | undefined;
}
export class networkInterfaces_tapConfigurations
	extends ArmResource<networkInterfaces_tapConfigurationsComponentInputs>
	implements networkInterfaces_tapConfigurationsComponentOutputs
{
	constructor(entity: ADKEntity, options: networkInterfaces_tapConfigurationsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/networkInterfaces/tapConfigurations", "2019-04-01", options);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkInterfaces/tapConfigurations";
}
export interface networkInterfaces_tapConfigurationsComponentOutputs {
	readonly apiVersion: "2019-04-01";
	readonly id: string;
	readonly type: "Microsoft.Network/networkInterfaces/tapConfigurations";
}
export interface networkInterfaces_tapConfigurationsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: NetworkInterfaceTapConfigurationPropertiesFormat | undefined;
}
export class networkProfiles
	extends ArmResource<networkProfilesComponentInputs>
	implements networkProfilesComponentOutputs
{
	constructor(entity: ADKEntity, options: networkProfilesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/networkProfiles", "2019-04-01", options);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkProfiles";
}
export interface networkProfilesComponentOutputs {
	readonly apiVersion: "2019-04-01";
	readonly id: string;
	readonly type: "Microsoft.Network/networkProfiles";
}
export interface networkProfilesComponentInputs {
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: NetworkProfilePropertiesFormat | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class networkSecurityGroups
	extends ArmResource<networkSecurityGroupsComponentInputs>
	implements networkSecurityGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: networkSecurityGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/networkSecurityGroups", "2019-04-01", options);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkSecurityGroups";
}
export interface networkSecurityGroupsComponentOutputs {
	readonly apiVersion: "2019-04-01";
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
		super(entity, options.name, "Microsoft.Network/networkSecurityGroups/defaultSecurityRules", "2019-04-01", options);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkSecurityGroups/defaultSecurityRules";
}
export interface networkSecurityGroups_defaultSecurityRulesComponentOutputs {
	readonly apiVersion: "2019-04-01";
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
		super(entity, options.name, "Microsoft.Network/networkSecurityGroups/securityRules", "2019-04-01", options);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkSecurityGroups/securityRules";
}
export interface networkSecurityGroups_securityRulesComponentOutputs {
	readonly apiVersion: "2019-04-01";
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
		super(entity, options.name, "Microsoft.Network/networkWatchers", "2019-04-01", options);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkWatchers";
}
export interface networkWatchersComponentOutputs {
	readonly apiVersion: "2019-04-01";
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
		super(entity, options.name, "Microsoft.Network/networkWatchers/connectionMonitors", "2019-04-01", options);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkWatchers/connectionMonitors";
}
export interface networkWatchers_connectionMonitorsComponentOutputs {
	readonly apiVersion: "2019-04-01";
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
		super(entity, options.name, "Microsoft.Network/networkWatchers/packetCaptures", "2019-04-01", options);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkWatchers/packetCaptures";
}
export interface networkWatchers_packetCapturesComponentOutputs {
	readonly apiVersion: "2019-04-01";
	readonly id: string;
	readonly type: "Microsoft.Network/networkWatchers/packetCaptures";
}
export interface networkWatchers_packetCapturesComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties: PacketCaptureParametersOrPacketCaptureResultProperties;
}
export class p2svpnGateways extends ArmResource<p2svpnGatewaysComponentInputs> implements p2svpnGatewaysComponentOutputs {
	constructor(entity: ADKEntity, options: p2svpnGatewaysComponentInputs) {
		super(entity, options.name, "Microsoft.Network/p2svpnGateways", "2019-04-01", options);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/p2svpnGateways";
}
export interface p2svpnGatewaysComponentOutputs {
	readonly apiVersion: "2019-04-01";
	readonly id: string;
	readonly type: "Microsoft.Network/p2svpnGateways";
}
export interface p2svpnGatewaysComponentInputs {
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: P2SVpnGatewayProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class privateEndpoints
	extends ArmResource<privateEndpointsComponentInputs>
	implements privateEndpointsComponentOutputs
{
	constructor(entity: ADKEntity, options: privateEndpointsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/privateEndpoints", "2019-04-01", options);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/privateEndpoints";
}
export interface privateEndpointsComponentOutputs {
	readonly apiVersion: "2019-04-01";
	readonly id: string;
	readonly type: "Microsoft.Network/privateEndpoints";
}
export interface privateEndpointsComponentInputs {
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: PrivateEndpointProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class privateLinkServices
	extends ArmResource<privateLinkServicesComponentInputs>
	implements privateLinkServicesComponentOutputs
{
	constructor(entity: ADKEntity, options: privateLinkServicesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/privateLinkServices", "2019-04-01", options);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/privateLinkServices";
}
export interface privateLinkServicesComponentOutputs {
	readonly apiVersion: "2019-04-01";
	readonly id: string;
	readonly type: "Microsoft.Network/privateLinkServices";
}
export interface privateLinkServicesComponentInputs {
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: PrivateLinkServiceProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class privateLinkServices_privateEndpointConnections
	extends ArmResource<privateLinkServices_privateEndpointConnectionsComponentInputs>
	implements privateLinkServices_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: privateLinkServices_privateEndpointConnectionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Network/privateLinkServices/privateEndpointConnections",
			"2019-04-01",
			options,
		);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/privateLinkServices/privateEndpointConnections";
}
export interface privateLinkServices_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2019-04-01";
	readonly id: string;
	readonly type: "Microsoft.Network/privateLinkServices/privateEndpointConnections";
}
export interface privateLinkServices_privateEndpointConnectionsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
}
export class publicIPAddresses
	extends ArmResource<publicIPAddressesComponentInputs>
	implements publicIPAddressesComponentOutputs
{
	constructor(entity: ADKEntity, options: publicIPAddressesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/publicIPAddresses", "2019-04-01", options);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/publicIPAddresses";
}
export interface publicIPAddressesComponentOutputs {
	readonly apiVersion: "2019-04-01";
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
export class publicIPPrefixes
	extends ArmResource<publicIPPrefixesComponentInputs>
	implements publicIPPrefixesComponentOutputs
{
	constructor(entity: ADKEntity, options: publicIPPrefixesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/publicIPPrefixes", "2019-04-01", options);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/publicIPPrefixes";
}
export interface publicIPPrefixesComponentOutputs {
	readonly apiVersion: "2019-04-01";
	readonly id: string;
	readonly type: "Microsoft.Network/publicIPPrefixes";
}
export interface publicIPPrefixesComponentInputs {
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: PublicIPPrefixPropertiesFormat | undefined;
	readonly sku?: PublicIPPrefixSku | undefined;
	readonly tags?: ResourceTags | undefined;
	readonly zones?: string[] | undefined;
}
export class routeFilters extends ArmResource<routeFiltersComponentInputs> implements routeFiltersComponentOutputs {
	constructor(entity: ADKEntity, options: routeFiltersComponentInputs) {
		super(entity, options.name, "Microsoft.Network/routeFilters", "2019-04-01", options);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/routeFilters";
}
export interface routeFiltersComponentOutputs {
	readonly apiVersion: "2019-04-01";
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
		super(entity, options.name, "Microsoft.Network/routeFilters/routeFilterRules", "2019-04-01", options);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/routeFilters/routeFilterRules";
}
export interface routeFilters_routeFilterRulesComponentOutputs {
	readonly apiVersion: "2019-04-01";
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
		super(entity, options.name, "Microsoft.Network/routeTables", "2019-04-01", options);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/routeTables";
}
export interface routeTablesComponentOutputs {
	readonly apiVersion: "2019-04-01";
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
		super(entity, options.name, "Microsoft.Network/routeTables/routes", "2019-04-01", options);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/routeTables/routes";
}
export interface routeTables_routesComponentOutputs {
	readonly apiVersion: "2019-04-01";
	readonly id: string;
	readonly type: "Microsoft.Network/routeTables/routes";
}
export interface routeTables_routesComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: RoutePropertiesFormat | undefined;
}
export class serviceEndpointPolicies
	extends ArmResource<serviceEndpointPoliciesComponentInputs>
	implements serviceEndpointPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: serviceEndpointPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/serviceEndpointPolicies", "2019-04-01", options);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/serviceEndpointPolicies";
}
export interface serviceEndpointPoliciesComponentOutputs {
	readonly apiVersion: "2019-04-01";
	readonly id: string;
	readonly type: "Microsoft.Network/serviceEndpointPolicies";
}
export interface serviceEndpointPoliciesComponentInputs {
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ServiceEndpointPolicyPropertiesFormat | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class serviceEndpointPolicies_serviceEndpointPolicyDefinitions
	extends ArmResource<serviceEndpointPolicies_serviceEndpointPolicyDefinitionsComponentInputs>
	implements serviceEndpointPolicies_serviceEndpointPolicyDefinitionsComponentOutputs
{
	constructor(entity: ADKEntity, options: serviceEndpointPolicies_serviceEndpointPolicyDefinitionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Network/serviceEndpointPolicies/serviceEndpointPolicyDefinitions",
			"2019-04-01",
			options,
		);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/serviceEndpointPolicies/serviceEndpointPolicyDefinitions";
}
export interface serviceEndpointPolicies_serviceEndpointPolicyDefinitionsComponentOutputs {
	readonly apiVersion: "2019-04-01";
	readonly id: string;
	readonly type: "Microsoft.Network/serviceEndpointPolicies/serviceEndpointPolicyDefinitions";
}
export interface serviceEndpointPolicies_serviceEndpointPolicyDefinitionsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: ServiceEndpointPolicyDefinitionPropertiesFormat | undefined;
}
export class virtualHubs extends ArmResource<virtualHubsComponentInputs> implements virtualHubsComponentOutputs {
	constructor(entity: ADKEntity, options: virtualHubsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/virtualHubs", "2019-04-01", options);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/virtualHubs";
}
export interface virtualHubsComponentOutputs {
	readonly apiVersion: "2019-04-01";
	readonly id: string;
	readonly type: "Microsoft.Network/virtualHubs";
}
export interface virtualHubsComponentInputs {
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: VirtualHubProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class virtualHubs_hubVirtualNetworkConnections
	extends ArmResource<virtualHubs_hubVirtualNetworkConnectionsComponentInputs>
	implements virtualHubs_hubVirtualNetworkConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualHubs_hubVirtualNetworkConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/virtualHubs/hubVirtualNetworkConnections", "2019-04-01", options);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/virtualHubs/hubVirtualNetworkConnections";
}
export interface virtualHubs_hubVirtualNetworkConnectionsComponentOutputs {
	readonly apiVersion: "2019-04-01";
	readonly id: string;
	readonly type: "Microsoft.Network/virtualHubs/hubVirtualNetworkConnections";
}
export interface virtualHubs_hubVirtualNetworkConnectionsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: HubVirtualNetworkConnectionProperties | undefined;
}
export class virtualNetworkGateways
	extends ArmResource<virtualNetworkGatewaysComponentInputs>
	implements virtualNetworkGatewaysComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualNetworkGatewaysComponentInputs) {
		super(entity, options.name, "Microsoft.Network/virtualNetworkGateways", "2019-04-01", options);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/virtualNetworkGateways";
}
export interface virtualNetworkGatewaysComponentOutputs {
	readonly apiVersion: "2019-04-01";
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
		super(entity, options.name, "Microsoft.Network/virtualNetworks", "2019-04-01", options);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/virtualNetworks";
}
export interface virtualNetworksComponentOutputs {
	readonly apiVersion: "2019-04-01";
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
		super(entity, options.name, "Microsoft.Network/virtualNetworks/subnets", "2019-04-01", options);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/virtualNetworks/subnets";
}
export interface virtualNetworks_subnetsComponentOutputs {
	readonly apiVersion: "2019-04-01";
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
		super(entity, options.name, "Microsoft.Network/virtualNetworks/virtualNetworkPeerings", "2019-04-01", options);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/virtualNetworks/virtualNetworkPeerings";
}
export interface virtualNetworks_virtualNetworkPeeringsComponentOutputs {
	readonly apiVersion: "2019-04-01";
	readonly id: string;
	readonly type: "Microsoft.Network/virtualNetworks/virtualNetworkPeerings";
}
export interface virtualNetworks_virtualNetworkPeeringsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: VirtualNetworkPeeringPropertiesFormat | undefined;
}
export class virtualNetworkTaps
	extends ArmResource<virtualNetworkTapsComponentInputs>
	implements virtualNetworkTapsComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualNetworkTapsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/virtualNetworkTaps", "2019-04-01", options);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/virtualNetworkTaps";
}
export interface virtualNetworkTapsComponentOutputs {
	readonly apiVersion: "2019-04-01";
	readonly id: string;
	readonly type: "Microsoft.Network/virtualNetworkTaps";
}
export interface virtualNetworkTapsComponentInputs {
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: VirtualNetworkTapPropertiesFormat | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class virtualWans extends ArmResource<virtualWansComponentInputs> implements virtualWansComponentOutputs {
	constructor(entity: ADKEntity, options: virtualWansComponentInputs) {
		super(entity, options.name, "Microsoft.Network/virtualWans", "2019-04-01", options);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/virtualWans";
}
export interface virtualWansComponentOutputs {
	readonly apiVersion: "2019-04-01";
	readonly id: string;
	readonly type: "Microsoft.Network/virtualWans";
}
export interface virtualWansComponentInputs {
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: VirtualWanProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class virtualWans_p2sVpnServerConfigurations
	extends ArmResource<virtualWans_p2sVpnServerConfigurationsComponentInputs>
	implements virtualWans_p2sVpnServerConfigurationsComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualWans_p2sVpnServerConfigurationsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/virtualWans/p2sVpnServerConfigurations", "2019-04-01", options);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/virtualWans/p2sVpnServerConfigurations";
}
export interface virtualWans_p2sVpnServerConfigurationsComponentOutputs {
	readonly apiVersion: "2019-04-01";
	readonly id: string;
	readonly type: "Microsoft.Network/virtualWans/p2sVpnServerConfigurations";
}
export interface virtualWans_p2sVpnServerConfigurationsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: P2SVpnServerConfigurationProperties | undefined;
}
export class vpnGateways extends ArmResource<vpnGatewaysComponentInputs> implements vpnGatewaysComponentOutputs {
	constructor(entity: ADKEntity, options: vpnGatewaysComponentInputs) {
		super(entity, options.name, "Microsoft.Network/vpnGateways", "2019-04-01", options);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/vpnGateways";
}
export interface vpnGatewaysComponentOutputs {
	readonly apiVersion: "2019-04-01";
	readonly id: string;
	readonly type: "Microsoft.Network/vpnGateways";
}
export interface vpnGatewaysComponentInputs {
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: VpnGatewayProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class vpnGateways_vpnConnections
	extends ArmResource<vpnGateways_vpnConnectionsComponentInputs>
	implements vpnGateways_vpnConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: vpnGateways_vpnConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/vpnGateways/vpnConnections", "2019-04-01", options);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/vpnGateways/vpnConnections";
}
export interface vpnGateways_vpnConnectionsComponentOutputs {
	readonly apiVersion: "2019-04-01";
	readonly id: string;
	readonly type: "Microsoft.Network/vpnGateways/vpnConnections";
}
export interface vpnGateways_vpnConnectionsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: VpnConnectionProperties | undefined;
}
export class vpnSites extends ArmResource<vpnSitesComponentInputs> implements vpnSitesComponentOutputs {
	constructor(entity: ADKEntity, options: vpnSitesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/vpnSites", "2019-04-01", options);
	}
	public readonly apiVersion: "2019-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/vpnSites";
}
export interface vpnSitesComponentOutputs {
	readonly apiVersion: "2019-04-01";
	readonly id: string;
	readonly type: "Microsoft.Network/vpnSites";
}
export interface vpnSitesComponentInputs {
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: VpnSiteProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export interface AddressSpace {
	readonly addressPrefixes?: string[] | undefined;
}
export interface ApplicationGateway {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly identity?: ManagedServiceIdentity | undefined;
	readonly location?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: ApplicationGatewayPropertiesFormat | undefined;
	readonly tags?: ResourceTags | undefined;
	readonly type?: string | undefined;
	readonly zones?: string[] | undefined;
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
export interface ApplicationGatewayAutoscaleConfiguration {
	readonly maxCapacity?: number | undefined;
	readonly minCapacity: number;
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
	readonly trustedRootCertificates?: SubResource[] | undefined;
}
export interface ApplicationGatewayConnectionDraining {
	readonly drainTimeoutInSec: number;
	readonly enabled: boolean;
}
export interface ApplicationGatewayCustomError {
	readonly customErrorPageUrl?: string | undefined;
	readonly statusCode?: ("HttpStatus403" | "HttpStatus502") | undefined;
}
export interface ApplicationGatewayFirewallDisabledRuleGroup {
	readonly ruleGroupName: string;
	readonly rules?: number[] | undefined;
}
export interface ApplicationGatewayFirewallExclusion {
	readonly matchVariable: string;
	readonly selector: string;
	readonly selectorMatchOperator: string;
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
export interface ApplicationGatewayHeaderConfiguration {
	readonly headerName?: string | undefined;
	readonly headerValue?: string | undefined;
}
export interface ApplicationGatewayHttpListener {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: ApplicationGatewayHttpListenerPropertiesFormat | undefined;
	readonly type?: string | undefined;
}
export interface ApplicationGatewayHttpListenerPropertiesFormat {
	readonly customErrorConfigurations?: ApplicationGatewayCustomError[] | undefined;
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
	readonly rewriteRuleSet?: SubResource | undefined;
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
	readonly port?: number | undefined;
	readonly protocol?: ("Http" | "Https") | undefined;
	readonly provisioningState?: string | undefined;
	readonly timeout?: number | undefined;
	readonly unhealthyThreshold?: number | undefined;
}
export interface ApplicationGatewayPropertiesFormat {
	readonly authenticationCertificates?: ApplicationGatewayAuthenticationCertificate[] | undefined;
	readonly autoscaleConfiguration?: ApplicationGatewayAutoscaleConfiguration | undefined;
	readonly backendAddressPools?: ApplicationGatewayBackendAddressPool[] | undefined;
	readonly backendHttpSettingsCollection?: ApplicationGatewayBackendHttpSettings[] | undefined;
	readonly customErrorConfigurations?: ApplicationGatewayCustomError[] | undefined;
	readonly enableFips?: boolean | undefined;
	readonly enableHttp2?: boolean | undefined;
	readonly firewallPolicy?: SubResource | undefined;
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
	readonly rewriteRuleSets?: ApplicationGatewayRewriteRuleSet[] | undefined;
	readonly sku?: ApplicationGatewaySku | undefined;
	readonly sslCertificates?: ApplicationGatewaySslCertificate[] | undefined;
	readonly sslPolicy?: ApplicationGatewaySslPolicy | undefined;
	readonly trustedRootCertificates?: ApplicationGatewayTrustedRootCertificate[] | undefined;
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
	readonly rewriteRuleSet?: SubResource | undefined;
	readonly ruleType?: ("Basic" | "PathBasedRouting") | undefined;
	readonly urlPathMap?: SubResource | undefined;
}
export interface ApplicationGatewayRewriteRule {
	readonly actionSet?: ApplicationGatewayRewriteRuleActionSet | undefined;
	readonly conditions?: ApplicationGatewayRewriteRuleCondition[] | undefined;
	readonly name?: string | undefined;
	readonly ruleSequence?: number | undefined;
}
export interface ApplicationGatewayRewriteRuleActionSet {
	readonly requestHeaderConfigurations?: ApplicationGatewayHeaderConfiguration[] | undefined;
	readonly responseHeaderConfigurations?: ApplicationGatewayHeaderConfiguration[] | undefined;
}
export interface ApplicationGatewayRewriteRuleCondition {
	readonly ignoreCase?: boolean | undefined;
	readonly negate?: boolean | undefined;
	readonly pattern?: string | undefined;
	readonly variable?: string | undefined;
}
export interface ApplicationGatewayRewriteRuleSet {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: ApplicationGatewayRewriteRuleSetPropertiesFormat | undefined;
}
export interface ApplicationGatewayRewriteRuleSetPropertiesFormat {
	readonly provisioningState?: string | undefined;
	readonly rewriteRules?: ApplicationGatewayRewriteRule[] | undefined;
}
export interface ApplicationGatewaySku {
	readonly capacity?: number | undefined;
	readonly name?:
		| ("Standard_Large" | "Standard_Medium" | "Standard_Small" | "Standard_v2" | "WAF_Large" | "WAF_Medium" | "WAF_v2")
		| undefined;
	readonly tier?: ("Standard" | "Standard_v2" | "WAF" | "WAF_v2") | undefined;
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
	readonly keyVaultSecretId?: string | undefined;
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
export interface ApplicationGatewayTrustedRootCertificate {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: ApplicationGatewayTrustedRootCertificatePropertiesFormat | undefined;
	readonly type?: string | undefined;
}
export interface ApplicationGatewayTrustedRootCertificatePropertiesFormat {
	readonly data?: string | undefined;
	readonly keyVaultSecretId?: string | undefined;
	readonly provisioningState?: string | undefined;
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
	readonly defaultRewriteRuleSet?: SubResource | undefined;
	readonly pathRules?: ApplicationGatewayPathRule[] | undefined;
	readonly provisioningState?: string | undefined;
}
export interface ApplicationGatewayWebApplicationFirewallConfiguration {
	readonly disabledRuleGroups?: ApplicationGatewayFirewallDisabledRuleGroup[] | undefined;
	readonly enabled: boolean;
	readonly exclusions?: ApplicationGatewayFirewallExclusion[] | undefined;
	readonly fileUploadLimitInMb?: number | undefined;
	readonly firewallMode: "Detection" | "Prevention";
	readonly maxRequestBodySize?: number | undefined;
	readonly maxRequestBodySizeInKb?: number | undefined;
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
export interface AzureFirewallApplicationRule {
	readonly description?: string | undefined;
	readonly fqdnTags?: string[] | undefined;
	readonly name?: string | undefined;
	readonly protocols?: AzureFirewallApplicationRuleProtocol[] | undefined;
	readonly sourceAddresses?: string[] | undefined;
	readonly targetFqdns?: string[] | undefined;
}
export interface AzureFirewallApplicationRuleCollection {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: AzureFirewallApplicationRuleCollectionPropertiesFormat | undefined;
}
export interface AzureFirewallApplicationRuleCollectionPropertiesFormat {
	readonly action?: AzureFirewallRCAction | undefined;
	readonly priority?: number | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly rules?: AzureFirewallApplicationRule[] | undefined;
}
export interface AzureFirewallApplicationRuleProtocol {
	readonly port?: number | undefined;
	readonly protocolType?: ("Http" | "Https") | undefined;
}
export interface AzureFirewallIPConfiguration {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: AzureFirewallIPConfigurationPropertiesFormat | undefined;
}
export interface AzureFirewallIPConfigurationPropertiesFormat {
	readonly privateIPAddress?: string | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly publicIPAddress?: SubResource | undefined;
	readonly subnet?: SubResource | undefined;
}
export interface AzureFirewallNatRCAction {
	readonly type?: ("Dnat" | "Snat") | undefined;
}
export interface AzureFirewallNatRule {
	readonly description?: string | undefined;
	readonly destinationAddresses?: string[] | undefined;
	readonly destinationPorts?: string[] | undefined;
	readonly name?: string | undefined;
	readonly protocols?: ("any" | "ICMP" | "TCP" | "UDP"[]) | undefined;
	readonly sourceAddresses?: string[] | undefined;
	readonly translatedAddress?: string | undefined;
	readonly translatedPort?: string | undefined;
}
export interface AzureFirewallNatRuleCollection {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: AzureFirewallNatRuleCollectionProperties | undefined;
}
export interface AzureFirewallNatRuleCollectionProperties {
	readonly action?: AzureFirewallNatRCAction | undefined;
	readonly priority?: number | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly rules?: AzureFirewallNatRule[] | undefined;
}
export interface AzureFirewallNetworkRule {
	readonly description?: string | undefined;
	readonly destinationAddresses?: string[] | undefined;
	readonly destinationPorts?: string[] | undefined;
	readonly name?: string | undefined;
	readonly protocols?: ("any" | "ICMP" | "TCP" | "UDP"[]) | undefined;
	readonly sourceAddresses?: string[] | undefined;
}
export interface AzureFirewallNetworkRuleCollection {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: AzureFirewallNetworkRuleCollectionPropertiesFormat | undefined;
}
export interface AzureFirewallNetworkRuleCollectionPropertiesFormat {
	readonly action?: AzureFirewallRCAction | undefined;
	readonly priority?: number | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly rules?: AzureFirewallNetworkRule[] | undefined;
}
export interface AzureFirewallPropertiesFormat {
	readonly applicationRuleCollections?: AzureFirewallApplicationRuleCollection[] | undefined;
	readonly ipConfigurations?: AzureFirewallIPConfiguration[] | undefined;
	readonly natRuleCollections?: AzureFirewallNatRuleCollection[] | undefined;
	readonly networkRuleCollections?: AzureFirewallNetworkRuleCollection[] | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly threatIntelMode?: ("Alert" | "Deny" | "Off") | undefined;
}
export interface AzureFirewallRCAction {
	readonly type?: ("Allow" | "Deny") | undefined;
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
	readonly outboundRule?: SubResource | undefined;
	readonly outboundRules?: SubResource[] | undefined;
	readonly provisioningState?: string | undefined;
}
export interface BastionHostIPConfiguration {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: BastionHostIPConfigurationPropertiesFormat | undefined;
	readonly type?: string | undefined;
}
export interface BastionHostIPConfigurationPropertiesFormat {
	readonly privateIPAllocationMethod?: ("Dynamic" | "Static") | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly publicIPAddress: SubResource;
	readonly subnet: SubResource;
}
export interface BastionHostPropertiesFormat {
	readonly dnsName?: string | undefined;
	readonly ipConfigurations?: BastionHostIPConfiguration[] | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface BgpSettings {
	readonly asn?: number | undefined;
	readonly bgpPeeringAddress?: string | undefined;
	readonly peerWeight?: number | undefined;
}
export interface Components1Jq1T4ISchemasManagedserviceidentityPropertiesUserassignedidentitiesAdditionalproperties {
	readonly clientId?: string | undefined;
	readonly principalId?: string | undefined;
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
export interface Container {
	readonly id?: string | undefined;
}
export interface ContainerNetworkInterface {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: ContainerNetworkInterfacePropertiesFormat | undefined;
	readonly type?: string | undefined;
}
export interface ContainerNetworkInterfaceConfiguration {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: ContainerNetworkInterfaceConfigurationPropertiesFormat | undefined;
	readonly type?: string | undefined;
}
export interface ContainerNetworkInterfaceConfigurationPropertiesFormat {
	readonly containerNetworkInterfaces?: SubResource[] | undefined;
	readonly ipConfigurations?: IPConfigurationProfile[] | undefined;
	readonly provisioningState?: string | undefined;
}
export interface ContainerNetworkInterfaceIpConfiguration {
	readonly etag?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: ContainerNetworkInterfaceIpConfigurationPropertiesFormat | undefined;
	readonly type?: string | undefined;
}
export interface ContainerNetworkInterfaceIpConfigurationPropertiesFormat {
	readonly provisioningState?: string | undefined;
}
export interface ContainerNetworkInterfacePropertiesFormat {
	readonly container?: Container | undefined;
	readonly containerNetworkInterfaceConfiguration?: ContainerNetworkInterfaceConfiguration | undefined;
	readonly ipConfigurations?: ContainerNetworkInterfaceIpConfiguration[] | undefined;
	readonly provisioningState?: string | undefined;
}
export interface DdosCustomPolicyPropertiesFormat {
	readonly protocolCustomSettings?: ProtocolCustomSettingsFormat[] | undefined;
	readonly provisioningState?: string | undefined;
	readonly publicIPAddresses?: SubResource[] | undefined;
	readonly resourceGuid?: string | undefined;
}
export interface DdosProtectionPlanPropertiesFormat {
	readonly provisioningState?: string | undefined;
	readonly resourceGuid?: string | undefined;
	readonly virtualNetworks?: SubResource[] | undefined;
}
export interface DdosProtectionPlanTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface DdosSettings {
	readonly ddosCustomPolicy?: SubResource | undefined;
	readonly protectionCoverage?: ("Basic" | "Standard") | undefined;
}
export interface Delegation {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: ServiceDelegationPropertiesFormat | undefined;
}
export interface DeviceProperties {
	readonly deviceModel?: string | undefined;
	readonly deviceVendor?: string | undefined;
	readonly linkSpeedInMbps?: number | undefined;
}
export interface DhcpOptions {
	readonly dnsServers?: string[] | undefined;
}
export interface ExpressRouteCircuitAuthorization {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: AuthorizationPropertiesFormat | undefined;
	readonly type?: string | undefined;
}
export interface ExpressRouteCircuitConnection {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: ExpressRouteCircuitConnectionPropertiesFormat | undefined;
	readonly type?: string | undefined;
}
export interface ExpressRouteCircuitConnectionPropertiesFormat {
	readonly addressPrefix?: string | undefined;
	readonly authorizationKey?: string | undefined;
	readonly circuitConnectionStatus?: ("Connected" | "Connecting" | "Disconnected") | undefined;
	readonly expressRouteCircuitPeering?: SubResource | undefined;
	readonly peerExpressRouteCircuitPeering?: SubResource | undefined;
	readonly provisioningState?: string | undefined;
}
export interface ExpressRouteCircuitPeering {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: ExpressRouteCircuitPeeringPropertiesFormat | undefined;
	readonly type?: string | undefined;
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
export interface ExpressRouteCircuitPeeringId {
	readonly id?: string | undefined;
}
export interface ExpressRouteCircuitPeeringPropertiesFormat {
	readonly azureASN?: number | undefined;
	readonly connections?: ExpressRouteCircuitConnection[] | undefined;
	readonly expressRouteConnection?: ExpressRouteConnectionId | undefined;
	readonly gatewayManagerEtag?: string | undefined;
	readonly ipv6PeeringConfig?: Ipv6ExpressRouteCircuitPeeringConfig | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly microsoftPeeringConfig?: ExpressRouteCircuitPeeringConfig | undefined;
	readonly peerASN?: number | undefined;
	readonly peeredConnections?: PeerExpressRouteCircuitConnection[] | undefined;
	readonly peeringType?: ("AzurePrivatePeering" | "AzurePublicPeering" | "MicrosoftPeering") | undefined;
	readonly primaryAzurePort?: string | undefined;
	readonly primaryPeerAddressPrefix?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly routeFilter?: SubResource | undefined;
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
	readonly bandwidthInGbps?: number | undefined;
	readonly circuitProvisioningState?: string | undefined;
	readonly expressRoutePort?: SubResource | undefined;
	readonly gatewayManagerEtag?: string | undefined;
	readonly globalReachEnabled?: boolean | undefined;
	readonly peerings?: ExpressRouteCircuitPeering[] | undefined;
	readonly provisioningState?: string | undefined;
	readonly serviceKey?: string | undefined;
	readonly serviceProviderNotes?: string | undefined;
	readonly serviceProviderProperties?: ExpressRouteCircuitServiceProviderProperties | undefined;
	readonly serviceProviderProvisioningState?:
		| ("Deprovisioning" | "NotProvisioned" | "Provisioned" | "Provisioning")
		| undefined;
	readonly stag?: number | undefined;
}
export interface ExpressRouteCircuitReference {
	readonly id?: string | undefined;
}
export interface ExpressRouteCircuitServiceProviderProperties {
	readonly bandwidthInMbps?: number | undefined;
	readonly peeringLocation?: string | undefined;
	readonly serviceProviderName?: string | undefined;
}
export interface ExpressRouteCircuitSku {
	readonly family?: ("MeteredData" | "UnlimitedData") | undefined;
	readonly name?: string | undefined;
	readonly tier?: ("Basic" | "Local" | "Premium" | "Standard") | undefined;
}
export interface ExpressRouteCircuitStats {
	readonly primarybytesIn?: number | undefined;
	readonly primarybytesOut?: number | undefined;
	readonly secondarybytesIn?: number | undefined;
	readonly secondarybytesOut?: number | undefined;
}
export interface ExpressRouteConnection {
	readonly id?: string | undefined;
	readonly name: string;
	readonly properties?: ExpressRouteConnectionProperties | undefined;
}
export interface ExpressRouteConnectionId {
	readonly id?: string | undefined;
}
export interface ExpressRouteConnectionProperties {
	readonly authorizationKey?: string | undefined;
	readonly expressRouteCircuitPeering: ExpressRouteCircuitPeeringId;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly routingWeight?: number | undefined;
}
export interface ExpressRouteCrossConnectionPeering {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: ExpressRouteCrossConnectionPeeringProperties | undefined;
}
export interface ExpressRouteCrossConnectionPeeringProperties {
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
	readonly secondaryAzurePort?: string | undefined;
	readonly secondaryPeerAddressPrefix?: string | undefined;
	readonly sharedKey?: string | undefined;
	readonly state?: ("Disabled" | "Enabled") | undefined;
	readonly vlanId?: number | undefined;
}
export interface ExpressRouteCrossConnectionProperties {
	readonly bandwidthInMbps?: number | undefined;
	readonly expressRouteCircuit?: ExpressRouteCircuitReference | undefined;
	readonly peeringLocation?: string | undefined;
	readonly peerings?: ExpressRouteCrossConnectionPeering[] | undefined;
	readonly primaryAzurePort?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly secondaryAzurePort?: string | undefined;
	readonly serviceProviderNotes?: string | undefined;
	readonly serviceProviderProvisioningState?:
		| ("Deprovisioning" | "NotProvisioned" | "Provisioned" | "Provisioning")
		| undefined;
	readonly sTag?: number | undefined;
}
export interface ExpressRouteGatewayProperties {
	readonly autoScaleConfiguration?: ExpressRouteGatewayPropertiesAutoScaleConfiguration | undefined;
	readonly expressRouteConnections?: ExpressRouteConnection[] | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly virtualHub: VirtualHubId;
}
export interface ExpressRouteGatewayPropertiesAutoScaleConfiguration {
	readonly bounds?: ExpressRouteGatewayPropertiesAutoScaleConfigurationBounds | undefined;
}
export interface ExpressRouteGatewayPropertiesAutoScaleConfigurationBounds {
	readonly max?: number | undefined;
	readonly min?: number | undefined;
}
export interface ExpressRouteLink {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: ExpressRouteLinkPropertiesFormat | undefined;
}
export interface ExpressRouteLinkPropertiesFormat {
	readonly adminState?: ("Disabled" | "Enabled") | undefined;
	readonly connectorType?: ("LC" | "SC") | undefined;
	readonly interfaceName?: string | undefined;
	readonly patchPanelId?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly rackId?: string | undefined;
	readonly routerName?: string | undefined;
}
export interface ExpressRoutePortPropertiesFormat {
	readonly allocationDate?: string | undefined;
	readonly bandwidthInGbps?: number | undefined;
	readonly circuits?: SubResource[] | undefined;
	readonly encapsulation?: ("Dot1Q" | "QinQ") | undefined;
	readonly etherType?: string | undefined;
	readonly links?: ExpressRouteLink[] | undefined;
	readonly mtu?: string | undefined;
	readonly peeringLocation?: string | undefined;
	readonly provisionedBandwidthInGbps?: number | undefined;
	readonly provisioningState?: string | undefined;
	readonly resourceGuid?: string | undefined;
}
export interface ExpressRoutePortsLocationBandwidths {
	readonly offerName?: string | undefined;
	readonly valueInGbps?: number | undefined;
}
export interface ExpressRoutePortsLocationPropertiesFormat {
	readonly address?: string | undefined;
	readonly availableBandwidths?: ExpressRoutePortsLocationBandwidths[] | undefined;
	readonly contact?: string | undefined;
	readonly provisioningState?: string | undefined;
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
	readonly outboundRules?: SubResource[] | undefined;
	readonly privateIPAddress?: string | undefined;
	readonly privateIPAddressVersion?: ("IPv4" | "IPv6") | undefined;
	readonly privateIPAllocationMethod?: ("Dynamic" | "Static") | undefined;
	readonly provisioningState?: string | undefined;
	readonly publicIPAddress?: PublicIPAddress | undefined;
	readonly publicIPPrefix?: SubResource | undefined;
	readonly subnet?: Subnet | undefined;
}
export interface HubVirtualNetworkConnection {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: HubVirtualNetworkConnectionProperties | undefined;
}
export interface HubVirtualNetworkConnectionProperties {
	readonly allowHubToRemoteVnetTransit?: boolean | undefined;
	readonly allowRemoteVnetToUseHubVnetGateways?: boolean | undefined;
	readonly enableInternetSecurity?: boolean | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly remoteVirtualNetwork?: SubResource | undefined;
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
	readonly enableTcpReset?: boolean | undefined;
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
	readonly enableTcpReset?: boolean | undefined;
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
export interface IPConfigurationProfile {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: IPConfigurationProfilePropertiesFormat | undefined;
	readonly type?: string | undefined;
}
export interface IPConfigurationProfilePropertiesFormat {
	readonly provisioningState?: string | undefined;
	readonly subnet?: Subnet | undefined;
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
	readonly ipTagType?: string | undefined;
	readonly tag?: string | undefined;
}
export interface Ipv6ExpressRouteCircuitPeeringConfig {
	readonly microsoftPeeringConfig?: ExpressRouteCircuitPeeringConfig | undefined;
	readonly primaryPeerAddressPrefix?: string | undefined;
	readonly routeFilter?: SubResource | undefined;
	readonly secondaryPeerAddressPrefix?: string | undefined;
	readonly state?: ("Disabled" | "Enabled") | undefined;
}
export interface LoadBalancerPropertiesFormat {
	readonly backendAddressPools?: BackendAddressPool[] | undefined;
	readonly frontendIPConfigurations?: FrontendIPConfiguration[] | undefined;
	readonly inboundNatPools?: InboundNatPool[] | undefined;
	readonly inboundNatRules?: InboundNatRule[] | undefined;
	readonly loadBalancingRules?: LoadBalancingRule[] | undefined;
	readonly outboundRules?: OutboundRule[] | undefined;
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
	readonly enableTcpReset?: boolean | undefined;
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
export interface ManagedServiceIdentity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: ("None" | "SystemAssigned" | "SystemAssigned, UserAssigned") | undefined;
	readonly userAssignedIdentities?: ManagedServiceIdentityUserAssignedIdentities | undefined;
}
export interface ManagedServiceIdentityUserAssignedIdentities {
	readonly "[ key: string ]"?:
		| Components1Jq1T4ISchemasManagedserviceidentityPropertiesUserassignedidentitiesAdditionalproperties
		| undefined;
}
export interface MatchCondition {
	readonly matchValues: string[];
	readonly matchVariables: MatchVariable[];
	readonly negationConditon?: boolean | undefined;
	readonly operator:
		| "BeginsWith"
		| "Contains"
		| "EndsWith"
		| "Equal"
		| "GreaterThan"
		| "GreaterThanOrEqual"
		| "IPMatch"
		| "LessThan"
		| "LessThanOrEqual"
		| "Regex";
	readonly transforms?:
		| ("HtmlEntityDecode" | "Lowercase" | "RemoveNulls" | "Trim" | "UrlDecode" | "UrlEncode"[])
		| undefined;
}
export interface MatchVariable {
	readonly selector?: string | undefined;
	readonly variableName:
		| "PostArgs"
		| "QueryString"
		| "RemoteAddr"
		| "RequestBody"
		| "RequestCookies"
		| "RequestHeaders"
		| "RequestMethod"
		| "RequestUri";
}
export interface NatGatewayPropertiesFormat {
	readonly idleTimeoutInMinutes?: number | undefined;
	readonly provisioningState?: string | undefined;
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
	readonly virtualNetworkTaps?: VirtualNetworkTap[] | undefined;
}
export interface NetworkInterfacePropertiesFormat {
	readonly dnsSettings?: NetworkInterfaceDnsSettings | undefined;
	readonly enableAcceleratedNetworking?: boolean | undefined;
	readonly enableIPForwarding?: boolean | undefined;
	readonly hostedWorkloads?: string[] | undefined;
	readonly ipConfigurations?: NetworkInterfaceIPConfiguration[] | undefined;
	readonly macAddress?: string | undefined;
	readonly networkSecurityGroup?: NetworkSecurityGroup | undefined;
	readonly primary?: boolean | undefined;
	readonly privateEndpoint?: PrivateEndpoint | undefined;
	readonly provisioningState?: string | undefined;
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
	readonly provisioningState?: string | undefined;
	readonly virtualNetworkTap?: VirtualNetworkTap | undefined;
}
export interface NetworkProfilePropertiesFormat {
	readonly containerNetworkInterfaceConfigurations?: ContainerNetworkInterfaceConfiguration[] | undefined;
	readonly containerNetworkInterfaces?: ContainerNetworkInterface[] | undefined;
	readonly provisioningState?: string | undefined;
	readonly resourceGuid?: string | undefined;
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
export interface OutboundRule {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: OutboundRulePropertiesFormat | undefined;
}
export interface OutboundRulePropertiesFormat {
	readonly allocatedOutboundPorts?: number | undefined;
	readonly backendAddressPool: SubResource;
	readonly enableTcpReset?: boolean | undefined;
	readonly frontendIPConfigurations: SubResource[];
	readonly idleTimeoutInMinutes?: number | undefined;
	readonly protocol: "All" | "Tcp" | "Udp";
	readonly provisioningState?: string | undefined;
}
export interface P2SVpnGatewayProperties {
	readonly customRoutes?: AddressSpace | undefined;
	readonly p2SVpnServerConfiguration?: SubResource | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly virtualHub?: SubResource | undefined;
	readonly vpnClientAddressPool?: AddressSpace | undefined;
	readonly vpnClientConnectionHealth?: VpnClientConnectionHealth | undefined;
	readonly vpnGatewayScaleUnit?: number | undefined;
}
export interface P2SVpnServerConfigRadiusClientRootCertificate {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: P2SVpnServerConfigRadiusClientRootCertificatePropertiesFormat | undefined;
}
export interface P2SVpnServerConfigRadiusClientRootCertificatePropertiesFormat {
	readonly provisioningState?: string | undefined;
	readonly thumbprint?: string | undefined;
}
export interface P2SVpnServerConfigRadiusServerRootCertificate {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties: P2SVpnServerConfigRadiusServerRootCertificatePropertiesFormat;
}
export interface P2SVpnServerConfigRadiusServerRootCertificatePropertiesFormat {
	readonly provisioningState?: string | undefined;
	readonly publicCertData: string;
}
export interface P2SVpnServerConfiguration {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: P2SVpnServerConfigurationProperties | undefined;
}
export interface P2SVpnServerConfigurationProperties {
	readonly etag?: string | undefined;
	readonly name?: string | undefined;
	readonly p2SVpnGateways?: SubResource[] | undefined;
	readonly p2SVpnServerConfigRadiusClientRootCertificates?: P2SVpnServerConfigRadiusClientRootCertificate[] | undefined;
	readonly p2SVpnServerConfigRadiusServerRootCertificates?: P2SVpnServerConfigRadiusServerRootCertificate[] | undefined;
	readonly p2SVpnServerConfigVpnClientRevokedCertificates?: P2SVpnServerConfigVpnClientRevokedCertificate[] | undefined;
	readonly p2SVpnServerConfigVpnClientRootCertificates?: P2SVpnServerConfigVpnClientRootCertificate[] | undefined;
	readonly provisioningState?: string | undefined;
	readonly radiusServerAddress?: string | undefined;
	readonly radiusServerSecret?: string | undefined;
	readonly vpnClientIpsecPolicies?: IpsecPolicy[] | undefined;
	readonly vpnProtocols?: ("IkeV2" | "OpenVPN"[]) | undefined;
}
export interface P2SVpnServerConfigVpnClientRevokedCertificate {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: P2SVpnServerConfigVpnClientRevokedCertificatePropertiesFormat | undefined;
}
export interface P2SVpnServerConfigVpnClientRevokedCertificatePropertiesFormat {
	readonly provisioningState?: string | undefined;
	readonly thumbprint?: string | undefined;
}
export interface P2SVpnServerConfigVpnClientRootCertificate {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties: P2SVpnServerConfigVpnClientRootCertificatePropertiesFormat;
}
export interface P2SVpnServerConfigVpnClientRootCertificatePropertiesFormat {
	readonly provisioningState?: string | undefined;
	readonly publicCertData: string;
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
export interface PeerExpressRouteCircuitConnection {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: PeerExpressRouteCircuitConnectionPropertiesFormat | undefined;
	readonly type?: string | undefined;
}
export interface PeerExpressRouteCircuitConnectionPropertiesFormat {
	readonly addressPrefix?: string | undefined;
	readonly authResourceGuid?: string | undefined;
	readonly circuitConnectionStatus?: ("Connected" | "Connecting" | "Disconnected") | undefined;
	readonly connectionName?: string | undefined;
	readonly expressRouteCircuitPeering?: SubResource | undefined;
	readonly peerExpressRouteCircuitPeering?: SubResource | undefined;
	readonly provisioningState?: string | undefined;
}
export interface PolicySettings {
	readonly enabledState?: ("Disabled" | "Enabled") | undefined;
	readonly mode?: ("Detection" | "Prevention") | undefined;
}
export interface PrivateEndpoint {
	readonly etag?: string | undefined;
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
	readonly privateEndpoint?: PrivateEndpoint | undefined;
	readonly privateLinkServiceConnectionState?: PrivateLinkServiceConnectionState | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface PrivateEndpointProperties {
	readonly manualPrivateLinkServiceConnections?: PrivateLinkServiceConnection[] | undefined;
	readonly networkInterfaces?: NetworkInterface[] | undefined;
	readonly privateLinkServiceConnections?: PrivateLinkServiceConnection[] | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly subnet?: Subnet | undefined;
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
	readonly protocol: "Http" | "Https" | "Tcp";
	readonly provisioningState?: string | undefined;
	readonly requestPath?: string | undefined;
}
export interface ProtocolCustomSettingsFormat {
	readonly protocol?: ("Syn" | "Tcp" | "Udp") | undefined;
	readonly sourceRateOverride?: string | undefined;
	readonly triggerRateOverride?: string | undefined;
	readonly triggerSensitivityOverride?: ("Default" | "High" | "Low" | "Relaxed") | undefined;
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
	readonly ddosSettings?: DdosSettings | undefined;
	readonly dnsSettings?: PublicIPAddressDnsSettings | undefined;
	readonly idleTimeoutInMinutes?: number | undefined;
	readonly ipAddress?: string | undefined;
	readonly ipConfiguration?: IPConfiguration | undefined;
	readonly ipTags?: IpTag[] | undefined;
	readonly provisioningState?: string | undefined;
	readonly publicIPAddressVersion?: ("IPv4" | "IPv6") | undefined;
	readonly publicIPAllocationMethod?: ("Dynamic" | "Static") | undefined;
	readonly publicIPPrefix?: SubResource | undefined;
	readonly resourceGuid?: string | undefined;
}
export interface PublicIPAddressSku {
	readonly name?: ("Basic" | "Standard") | undefined;
}
export interface PublicIPPrefixPropertiesFormat {
	readonly ipPrefix?: string | undefined;
	readonly ipTags?: IpTag[] | undefined;
	readonly loadBalancerFrontendIpConfiguration?: SubResource | undefined;
	readonly prefixLength?: number | undefined;
	readonly provisioningState?: string | undefined;
	readonly publicIPAddresses?: ReferencedPublicIpAddress[] | undefined;
	readonly publicIPAddressVersion?: ("IPv4" | "IPv6") | undefined;
	readonly resourceGuid?: string | undefined;
}
export interface PublicIPPrefixSku {
	readonly name?: "Standard" | undefined;
}
export interface ReferencedPublicIpAddress {
	readonly id?: string | undefined;
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
export interface RouteFilterPropertiesFormat {
	readonly ipv6Peerings?: ExpressRouteCircuitPeering[] | undefined;
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
	readonly protocol: "*" | "Esp" | "Icmp" | "Tcp" | "Udp";
	readonly provisioningState?: string | undefined;
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
	readonly provisioningState?: string | undefined;
}
export interface ServiceDelegationPropertiesFormat {
	readonly actions?: string[] | undefined;
	readonly provisioningState?: string | undefined;
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
	readonly provisioningState?: string | undefined;
	readonly service?: string | undefined;
	readonly serviceResources?: string[] | undefined;
}
export interface ServiceEndpointPolicyPropertiesFormat {
	readonly provisioningState?: string | undefined;
	readonly resourceGuid?: string | undefined;
	readonly serviceEndpointPolicyDefinitions?: ServiceEndpointPolicyDefinition[] | undefined;
	readonly subnets?: Subnet[] | undefined;
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
	readonly addressPrefixes?: string[] | undefined;
	readonly delegations?: Delegation[] | undefined;
	readonly ipConfigurationProfiles?: IPConfigurationProfile[] | undefined;
	readonly ipConfigurations?: IPConfiguration[] | undefined;
	readonly natGateway?: SubResource | undefined;
	readonly networkSecurityGroup?: NetworkSecurityGroup | undefined;
	readonly privateEndpointNetworkPolicies?: string | undefined;
	readonly privateEndpoints?: PrivateEndpoint[] | undefined;
	readonly privateLinkServiceNetworkPolicies?: string | undefined;
	readonly provisioningState?: string | undefined;
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
export interface TunnelConnectionHealth {
	readonly connectionStatus?: ("Connected" | "Connecting" | "NotConnected" | "Unknown") | undefined;
	readonly egressBytesTransferred?: number | undefined;
	readonly ingressBytesTransferred?: number | undefined;
	readonly lastConnectionEstablishedUtcTime?: string | undefined;
	readonly tunnel?: string | undefined;
}
export interface VirtualHubId {
	readonly id?: string | undefined;
}
export interface VirtualHubProperties {
	readonly addressPrefix?: string | undefined;
	readonly expressRouteGateway?: SubResource | undefined;
	readonly p2SVpnGateway?: SubResource | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly routeTable?: VirtualHubRouteTable | undefined;
	readonly virtualNetworkConnections?: HubVirtualNetworkConnection[] | undefined;
	readonly virtualWan?: SubResource | undefined;
	readonly vpnGateway?: SubResource | undefined;
}
export interface VirtualHubRoute {
	readonly addressPrefixes?: string[] | undefined;
	readonly nextHopIpAddress?: string | undefined;
}
export interface VirtualHubRouteTable {
	readonly routes?: VirtualHubRoute[] | undefined;
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
	readonly connectionProtocol?: ("IKEv1" | "IKEv2") | undefined;
	readonly connectionStatus?: ("Connected" | "Connecting" | "NotConnected" | "Unknown") | undefined;
	readonly connectionType: "ExpressRoute" | "IPsec" | "VPNClient" | "Vnet2Vnet";
	readonly egressBytesTransferred?: number | undefined;
	readonly enableBgp?: boolean | undefined;
	readonly expressRouteGatewayBypass?: boolean | undefined;
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
	readonly customRoutes?: AddressSpace | undefined;
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
		| (
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
				| "VpnGw3AZ"
		  )
		| undefined;
	readonly tier?:
		| (
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
				| "VpnGw3AZ"
		  )
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
	readonly ddosProtectionPlan?: SubResource | undefined;
	readonly dhcpOptions?: DhcpOptions | undefined;
	readonly enableDdosProtection?: boolean | undefined;
	readonly enableVmProtection?: boolean | undefined;
	readonly provisioningState?: string | undefined;
	readonly resourceGuid?: string | undefined;
	readonly subnets?: Subnet[] | undefined;
	readonly virtualNetworkPeerings?: VirtualNetworkPeering[] | undefined;
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
	readonly provisioningState?: string | undefined;
	readonly resourceGuid?: string | undefined;
}
export interface VirtualWanProperties {
	readonly allowBranchToBranchTraffic?: boolean | undefined;
	readonly allowVnetToVnetTraffic?: boolean | undefined;
	readonly disableVpnEncryption?: boolean | undefined;
	readonly office365LocalBreakoutCategory?: ("All" | "None" | "Optimize" | "OptimizeAndAllow") | undefined;
	readonly p2SVpnServerConfigurations?: P2SVpnServerConfiguration[] | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly securityProviderName?: string | undefined;
	readonly virtualHubs?: SubResource[] | undefined;
	readonly vpnSites?: SubResource[] | undefined;
}
export interface VpnClientConfiguration {
	readonly aadAudience?: string | undefined;
	readonly aadIssuer?: string | undefined;
	readonly aadTenant?: string | undefined;
	readonly radiusServerAddress?: string | undefined;
	readonly radiusServerSecret?: string | undefined;
	readonly vpnClientAddressPool?: AddressSpace | undefined;
	readonly vpnClientIpsecPolicies?: IpsecPolicy[] | undefined;
	readonly vpnClientProtocols?: ("IkeV2" | "OpenVPN" | "SSTP"[]) | undefined;
	readonly vpnClientRevokedCertificates?: VpnClientRevokedCertificate[] | undefined;
	readonly vpnClientRootCertificates?: VpnClientRootCertificate[] | undefined;
}
export interface VpnClientConnectionHealth {
	readonly allocatedIpAddresses?: string[] | undefined;
	readonly totalEgressBytesTransferred?: number | undefined;
	readonly totalIngressBytesTransferred?: number | undefined;
	readonly vpnClientConnectionsCount?: number | undefined;
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
export interface VpnConnection {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: VpnConnectionProperties | undefined;
}
export interface VpnConnectionProperties {
	readonly connectionBandwidth?: number | undefined;
	readonly connectionStatus?: ("Connected" | "Connecting" | "NotConnected" | "Unknown") | undefined;
	readonly egressBytesTransferred?: number | undefined;
	readonly enableBgp?: boolean | undefined;
	readonly enableInternetSecurity?: boolean | undefined;
	readonly enableRateLimiting?: boolean | undefined;
	readonly ingressBytesTransferred?: number | undefined;
	readonly ipsecPolicies?: IpsecPolicy[] | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly remoteVpnSite?: SubResource | undefined;
	readonly routingWeight?: number | undefined;
	readonly sharedKey?: string | undefined;
	readonly useLocalAzureIpAddress?: boolean | undefined;
	readonly usePolicyBasedTrafficSelectors?: boolean | undefined;
	readonly vpnConnectionProtocolType?: ("IKEv1" | "IKEv2") | undefined;
}
export interface VpnGatewayProperties {
	readonly bgpSettings?: BgpSettings | undefined;
	readonly connections?: VpnConnection[] | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly virtualHub?: SubResource | undefined;
	readonly vpnGatewayScaleUnit?: number | undefined;
}
export interface VpnSiteProperties {
	readonly addressSpace?: AddressSpace | undefined;
	readonly bgpProperties?: BgpSettings | undefined;
	readonly deviceProperties?: DeviceProperties | undefined;
	readonly ipAddress?: string | undefined;
	readonly isSecuritySite?: boolean | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly siteKey?: string | undefined;
	readonly virtualWan?: SubResource | undefined;
}
export interface WebApplicationFirewallCustomRule {
	readonly action: "Allow" | "Block" | "Log";
	readonly etag?: string | undefined;
	readonly matchConditions: MatchCondition[];
	readonly name?: string | undefined;
	readonly priority: number;
	readonly ruleType: "Invalid" | "MatchRule";
}
export interface WebApplicationFirewallPolicyPropertiesFormat {
	readonly applicationGateways?: ApplicationGateway[] | undefined;
	readonly customRules?: WebApplicationFirewallCustomRule[] | undefined;
	readonly policySettings?: PolicySettings | undefined;
	readonly provisioningState?: string | undefined;
	readonly resourceState?: ("Creating" | "Deleting" | "Disabled" | "Disabling" | "Enabled" | "Enabling") | undefined;
}
export default {
	applicationGatewayAvailableSslOptions: applicationGatewayAvailableSslOptions,
	"applicationGatewayAvailableSslOptions/predefinedPolicies": applicationGatewayAvailableSslOptions_predefinedPolicies,
	applicationGateways: applicationGateways,
	ApplicationGatewayWebApplicationFirewallPolicies: ApplicationGatewayWebApplicationFirewallPolicies,
	applicationSecurityGroups: applicationSecurityGroups,
	azureFirewalls: azureFirewalls,
	bastionHosts: bastionHosts,
	connections: connections,
	ddosCustomPolicies: ddosCustomPolicies,
	ddosProtectionPlans: ddosProtectionPlans,
	expressRouteCircuits: expressRouteCircuits,
	"expressRouteCircuits/authorizations": expressRouteCircuits_authorizations,
	"expressRouteCircuits/peerings": expressRouteCircuits_peerings,
	"expressRouteCircuits/peerings/connections": expressRouteCircuits_peerings_connections,
	"expressRouteCircuits/peerings/peerConnections": expressRouteCircuits_peerings_peerConnections,
	expressRouteCrossConnections: expressRouteCrossConnections,
	"expressRouteCrossConnections/peerings": expressRouteCrossConnections_peerings,
	expressRouteGateways: expressRouteGateways,
	"expressRouteGateways/expressRouteConnections": expressRouteGateways_expressRouteConnections,
	ExpressRoutePorts: ExpressRoutePorts,
	"ExpressRoutePorts/links": ExpressRoutePorts_links,
	ExpressRoutePortsLocations: ExpressRoutePortsLocations,
	loadBalancers: loadBalancers,
	"loadBalancers/backendAddressPools": loadBalancers_backendAddressPools,
	"loadBalancers/frontendIPConfigurations": loadBalancers_frontendIPConfigurations,
	"loadBalancers/inboundNatRules": loadBalancers_inboundNatRules,
	"loadBalancers/loadBalancingRules": loadBalancers_loadBalancingRules,
	"loadBalancers/outboundRules": loadBalancers_outboundRules,
	"loadBalancers/probes": loadBalancers_probes,
	localNetworkGateways: localNetworkGateways,
	natGateways: natGateways,
	networkInterfaces: networkInterfaces,
	"networkInterfaces/ipConfigurations": networkInterfaces_ipConfigurations,
	"networkInterfaces/tapConfigurations": networkInterfaces_tapConfigurations,
	networkProfiles: networkProfiles,
	networkSecurityGroups: networkSecurityGroups,
	"networkSecurityGroups/defaultSecurityRules": networkSecurityGroups_defaultSecurityRules,
	"networkSecurityGroups/securityRules": networkSecurityGroups_securityRules,
	networkWatchers: networkWatchers,
	"networkWatchers/connectionMonitors": networkWatchers_connectionMonitors,
	"networkWatchers/packetCaptures": networkWatchers_packetCaptures,
	p2svpnGateways: p2svpnGateways,
	privateEndpoints: privateEndpoints,
	privateLinkServices: privateLinkServices,
	"privateLinkServices/privateEndpointConnections": privateLinkServices_privateEndpointConnections,
	publicIPAddresses: publicIPAddresses,
	publicIPPrefixes: publicIPPrefixes,
	routeFilters: routeFilters,
	"routeFilters/routeFilterRules": routeFilters_routeFilterRules,
	routeTables: routeTables,
	"routeTables/routes": routeTables_routes,
	serviceEndpointPolicies: serviceEndpointPolicies,
	"serviceEndpointPolicies/serviceEndpointPolicyDefinitions": serviceEndpointPolicies_serviceEndpointPolicyDefinitions,
	virtualHubs: virtualHubs,
	"virtualHubs/hubVirtualNetworkConnections": virtualHubs_hubVirtualNetworkConnections,
	virtualNetworkGateways: virtualNetworkGateways,
	virtualNetworks: virtualNetworks,
	"virtualNetworks/subnets": virtualNetworks_subnets,
	"virtualNetworks/virtualNetworkPeerings": virtualNetworks_virtualNetworkPeerings,
	virtualNetworkTaps: virtualNetworkTaps,
	virtualWans: virtualWans,
	"virtualWans/p2sVpnServerConfigurations": virtualWans_p2sVpnServerConfigurations,
	vpnGateways: vpnGateways,
	"vpnGateways/vpnConnections": vpnGateways_vpnConnections,
	vpnSites: vpnSites,
};

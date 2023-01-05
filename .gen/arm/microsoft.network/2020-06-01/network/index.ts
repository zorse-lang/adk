import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class applicationGatewayAvailableSslOptions
	extends ArmResource<applicationGatewayAvailableSslOptionsComponentInputs>
	implements applicationGatewayAvailableSslOptionsComponentOutputs
{
	constructor(entity: ADKEntity, options: applicationGatewayAvailableSslOptionsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/applicationGatewayAvailableSslOptions", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/applicationGatewayAvailableSslOptions";
}
export interface applicationGatewayAvailableSslOptionsComponentOutputs {
	readonly apiVersion: "2020-06-01";
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
			"2020-06-01",
			options,
		);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/applicationGatewayAvailableSslOptions/predefinedPolicies";
}
export interface applicationGatewayAvailableSslOptions_predefinedPoliciesComponentOutputs {
	readonly apiVersion: "2020-06-01";
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
		super(entity, options.name, "Microsoft.Network/applicationGateways", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/applicationGateways";
}
export interface applicationGatewaysComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/applicationGateways";
}
export interface applicationGatewaysComponentInputs {
	readonly etag?: string;
	readonly identity?: ManagedServiceIdentity;
	readonly location?: string;
	readonly name: string;
	readonly properties?: ApplicationGatewayPropertiesFormat;
	readonly tags?: ResourceTags;
	readonly zones?: string[];
}
export class applicationGateways_privateEndpointConnections
	extends ArmResource<applicationGateways_privateEndpointConnectionsComponentInputs>
	implements applicationGateways_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: applicationGateways_privateEndpointConnectionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Network/applicationGateways/privateEndpointConnections",
			"2020-06-01",
			options,
		);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/applicationGateways/privateEndpointConnections";
}
export interface applicationGateways_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/applicationGateways/privateEndpointConnections";
}
export interface applicationGateways_privateEndpointConnectionsComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: ApplicationGatewayPrivateEndpointConnectionProperties;
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
			"2020-06-01",
			options,
		);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/ApplicationGatewayWebApplicationFirewallPolicies";
}
export interface ApplicationGatewayWebApplicationFirewallPoliciesComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/ApplicationGatewayWebApplicationFirewallPolicies";
}
export interface ApplicationGatewayWebApplicationFirewallPoliciesComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: WebApplicationFirewallPolicyPropertiesFormat;
	readonly tags?: ResourceTags;
}
export class applicationSecurityGroups
	extends ArmResource<applicationSecurityGroupsComponentInputs>
	implements applicationSecurityGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: applicationSecurityGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/applicationSecurityGroups", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/applicationSecurityGroups";
}
export interface applicationSecurityGroupsComponentOutputs {
	readonly apiVersion: "2020-06-01";
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
		super(entity, options.name, "Microsoft.Network/azureFirewalls", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/azureFirewalls";
}
export interface azureFirewallsComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/azureFirewalls";
}
export interface azureFirewallsComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: AzureFirewallPropertiesFormat;
	readonly tags?: ResourceTags;
	readonly zones?: string[];
}
export class bastionHosts extends ArmResource<bastionHostsComponentInputs> implements bastionHostsComponentOutputs {
	constructor(entity: ADKEntity, options: bastionHostsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/bastionHosts", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/bastionHosts";
}
export interface bastionHostsComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/bastionHosts";
}
export interface bastionHostsComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: BastionHostPropertiesFormat;
	readonly tags?: ResourceTags;
}
export class connections extends ArmResource<connectionsComponentInputs> implements connectionsComponentOutputs {
	constructor(entity: ADKEntity, options: connectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/connections", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/connections";
}
export interface connectionsComponentOutputs {
	readonly apiVersion: "2020-06-01";
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
export class customIpPrefixes
	extends ArmResource<customIpPrefixesComponentInputs>
	implements customIpPrefixesComponentOutputs
{
	constructor(entity: ADKEntity, options: customIpPrefixesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/customIpPrefixes", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/customIpPrefixes";
}
export interface customIpPrefixesComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/customIpPrefixes";
}
export interface customIpPrefixesComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: CustomIpPrefixPropertiesFormat;
	readonly tags?: ResourceTags;
	readonly zones?: string[];
}
export class ddosCustomPolicies
	extends ArmResource<ddosCustomPoliciesComponentInputs>
	implements ddosCustomPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: ddosCustomPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/ddosCustomPolicies", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/ddosCustomPolicies";
}
export interface ddosCustomPoliciesComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/ddosCustomPolicies";
}
export interface ddosCustomPoliciesComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: DdosCustomPolicyPropertiesFormat;
	readonly tags?: ResourceTags;
}
export class ddosProtectionPlans
	extends ArmResource<ddosProtectionPlansComponentInputs>
	implements ddosProtectionPlansComponentOutputs
{
	constructor(entity: ADKEntity, options: ddosProtectionPlansComponentInputs) {
		super(entity, options.name, "Microsoft.Network/ddosProtectionPlans", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/ddosProtectionPlans";
}
export interface ddosProtectionPlansComponentOutputs {
	readonly apiVersion: "2020-06-01";
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
export class dscpConfigurations
	extends ArmResource<dscpConfigurationsComponentInputs>
	implements dscpConfigurationsComponentOutputs
{
	constructor(entity: ADKEntity, options: dscpConfigurationsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/dscpConfigurations", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/dscpConfigurations";
}
export interface dscpConfigurationsComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/dscpConfigurations";
}
export interface dscpConfigurationsComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: DscpConfigurationPropertiesFormat;
	readonly tags?: ResourceTags;
}
export class expressRouteCircuits
	extends ArmResource<expressRouteCircuitsComponentInputs>
	implements expressRouteCircuitsComponentOutputs
{
	constructor(entity: ADKEntity, options: expressRouteCircuitsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/expressRouteCircuits", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/expressRouteCircuits";
}
export interface expressRouteCircuitsComponentOutputs {
	readonly apiVersion: "2020-06-01";
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
		super(entity, options.name, "Microsoft.Network/expressRouteCircuits/authorizations", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/expressRouteCircuits/authorizations";
}
export interface expressRouteCircuits_authorizationsComponentOutputs {
	readonly apiVersion: "2020-06-01";
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
		super(entity, options.name, "Microsoft.Network/expressRouteCircuits/peerings", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/expressRouteCircuits/peerings";
}
export interface expressRouteCircuits_peeringsComponentOutputs {
	readonly apiVersion: "2020-06-01";
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
		super(entity, options.name, "Microsoft.Network/expressRouteCircuits/peerings/connections", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/expressRouteCircuits/peerings/connections";
}
export interface expressRouteCircuits_peerings_connectionsComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/expressRouteCircuits/peerings/connections";
}
export interface expressRouteCircuits_peerings_connectionsComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: ExpressRouteCircuitConnectionPropertiesFormat;
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
			"2020-06-01",
			options,
		);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/expressRouteCircuits/peerings/peerConnections";
}
export interface expressRouteCircuits_peerings_peerConnectionsComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/expressRouteCircuits/peerings/peerConnections";
}
export interface expressRouteCircuits_peerings_peerConnectionsComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: PeerExpressRouteCircuitConnectionPropertiesFormat;
}
export class expressRouteCrossConnections
	extends ArmResource<expressRouteCrossConnectionsComponentInputs>
	implements expressRouteCrossConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: expressRouteCrossConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/expressRouteCrossConnections", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/expressRouteCrossConnections";
}
export interface expressRouteCrossConnectionsComponentOutputs {
	readonly apiVersion: "2020-06-01";
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
		super(entity, options.name, "Microsoft.Network/expressRouteCrossConnections/peerings", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/expressRouteCrossConnections/peerings";
}
export interface expressRouteCrossConnections_peeringsComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/expressRouteCrossConnections/peerings";
}
export interface expressRouteCrossConnections_peeringsComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: ExpressRouteCrossConnectionPeeringProperties;
}
export class expressRouteGateways
	extends ArmResource<expressRouteGatewaysComponentInputs>
	implements expressRouteGatewaysComponentOutputs
{
	constructor(entity: ADKEntity, options: expressRouteGatewaysComponentInputs) {
		super(entity, options.name, "Microsoft.Network/expressRouteGateways", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/expressRouteGateways";
}
export interface expressRouteGatewaysComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/expressRouteGateways";
}
export interface expressRouteGatewaysComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: ExpressRouteGatewayProperties;
	readonly tags?: ResourceTags;
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
			"2020-06-01",
			options,
		);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/expressRouteGateways/expressRouteConnections";
}
export interface expressRouteGateways_expressRouteConnectionsComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/expressRouteGateways/expressRouteConnections";
}
export interface expressRouteGateways_expressRouteConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: ExpressRouteConnectionProperties;
}
export class ExpressRoutePorts
	extends ArmResource<ExpressRoutePortsComponentInputs>
	implements ExpressRoutePortsComponentOutputs
{
	constructor(entity: ADKEntity, options: ExpressRoutePortsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/ExpressRoutePorts", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/ExpressRoutePorts";
}
export interface ExpressRoutePortsComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/ExpressRoutePorts";
}
export interface ExpressRoutePortsComponentInputs {
	readonly etag?: string;
	readonly identity?: ManagedServiceIdentity;
	readonly location?: string;
	readonly name: string;
	readonly properties?: ExpressRoutePortPropertiesFormat;
	readonly tags?: ResourceTags;
}
export class ExpressRoutePorts_links
	extends ArmResource<ExpressRoutePorts_linksComponentInputs>
	implements ExpressRoutePorts_linksComponentOutputs
{
	constructor(entity: ADKEntity, options: ExpressRoutePorts_linksComponentInputs) {
		super(entity, options.name, "Microsoft.Network/ExpressRoutePorts/links", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/ExpressRoutePorts/links";
}
export interface ExpressRoutePorts_linksComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/ExpressRoutePorts/links";
}
export interface ExpressRoutePorts_linksComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: ExpressRouteLinkPropertiesFormat;
}
export class ExpressRoutePortsLocations
	extends ArmResource<ExpressRoutePortsLocationsComponentInputs>
	implements ExpressRoutePortsLocationsComponentOutputs
{
	constructor(entity: ADKEntity, options: ExpressRoutePortsLocationsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/ExpressRoutePortsLocations", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/ExpressRoutePortsLocations";
}
export interface ExpressRoutePortsLocationsComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/ExpressRoutePortsLocations";
}
export interface ExpressRoutePortsLocationsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: ExpressRoutePortsLocationPropertiesFormat;
	readonly tags?: ResourceTags;
}
export class firewallPolicies
	extends ArmResource<firewallPoliciesComponentInputs>
	implements firewallPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: firewallPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/firewallPolicies", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/firewallPolicies";
}
export interface firewallPoliciesComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/firewallPolicies";
}
export interface firewallPoliciesComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: FirewallPolicyPropertiesFormat;
	readonly tags?: ResourceTags;
}
export class firewallPolicies_ruleCollectionGroups
	extends ArmResource<firewallPolicies_ruleCollectionGroupsComponentInputs>
	implements firewallPolicies_ruleCollectionGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: firewallPolicies_ruleCollectionGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/firewallPolicies/ruleCollectionGroups", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/firewallPolicies/ruleCollectionGroups";
}
export interface firewallPolicies_ruleCollectionGroupsComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/firewallPolicies/ruleCollectionGroups";
}
export interface firewallPolicies_ruleCollectionGroupsComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: FirewallPolicyRuleCollectionGroupProperties;
}
export class IpAllocations extends ArmResource<IpAllocationsComponentInputs> implements IpAllocationsComponentOutputs {
	constructor(entity: ADKEntity, options: IpAllocationsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/IpAllocations", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/IpAllocations";
}
export interface IpAllocationsComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/IpAllocations";
}
export interface IpAllocationsComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: IpAllocationPropertiesFormat;
	readonly tags?: ResourceTags;
}
export class ipGroups extends ArmResource<ipGroupsComponentInputs> implements ipGroupsComponentOutputs {
	constructor(entity: ADKEntity, options: ipGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/ipGroups", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/ipGroups";
}
export interface ipGroupsComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/ipGroups";
}
export interface ipGroupsComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: IpGroupPropertiesFormat;
	readonly tags?: ResourceTags;
}
export class loadBalancers extends ArmResource<loadBalancersComponentInputs> implements loadBalancersComponentOutputs {
	constructor(entity: ADKEntity, options: loadBalancersComponentInputs) {
		super(entity, options.name, "Microsoft.Network/loadBalancers", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/loadBalancers";
}
export interface loadBalancersComponentOutputs {
	readonly apiVersion: "2020-06-01";
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
		super(entity, options.name, "Microsoft.Network/loadBalancers/backendAddressPools", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/loadBalancers/backendAddressPools";
}
export interface loadBalancers_backendAddressPoolsComponentOutputs {
	readonly apiVersion: "2020-06-01";
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
		super(entity, options.name, "Microsoft.Network/loadBalancers/frontendIPConfigurations", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/loadBalancers/frontendIPConfigurations";
}
export interface loadBalancers_frontendIPConfigurationsComponentOutputs {
	readonly apiVersion: "2020-06-01";
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
		super(entity, options.name, "Microsoft.Network/loadBalancers/inboundNatRules", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/loadBalancers/inboundNatRules";
}
export interface loadBalancers_inboundNatRulesComponentOutputs {
	readonly apiVersion: "2020-06-01";
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
		super(entity, options.name, "Microsoft.Network/loadBalancers/loadBalancingRules", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/loadBalancers/loadBalancingRules";
}
export interface loadBalancers_loadBalancingRulesComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/loadBalancers/loadBalancingRules";
}
export interface loadBalancers_loadBalancingRulesComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: LoadBalancingRulePropertiesFormat;
}
export class loadBalancers_outboundRules
	extends ArmResource<loadBalancers_outboundRulesComponentInputs>
	implements loadBalancers_outboundRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: loadBalancers_outboundRulesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/loadBalancers/outboundRules", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/loadBalancers/outboundRules";
}
export interface loadBalancers_outboundRulesComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/loadBalancers/outboundRules";
}
export interface loadBalancers_outboundRulesComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: OutboundRulePropertiesFormat;
}
export class loadBalancers_probes
	extends ArmResource<loadBalancers_probesComponentInputs>
	implements loadBalancers_probesComponentOutputs
{
	constructor(entity: ADKEntity, options: loadBalancers_probesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/loadBalancers/probes", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/loadBalancers/probes";
}
export interface loadBalancers_probesComponentOutputs {
	readonly apiVersion: "2020-06-01";
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
		super(entity, options.name, "Microsoft.Network/localNetworkGateways", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/localNetworkGateways";
}
export interface localNetworkGatewaysComponentOutputs {
	readonly apiVersion: "2020-06-01";
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
export class natGateways extends ArmResource<natGatewaysComponentInputs> implements natGatewaysComponentOutputs {
	constructor(entity: ADKEntity, options: natGatewaysComponentInputs) {
		super(entity, options.name, "Microsoft.Network/natGateways", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/natGateways";
}
export interface natGatewaysComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/natGateways";
}
export interface natGatewaysComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: NatGatewayPropertiesFormat;
	readonly sku?: NatGatewaySku;
	readonly tags?: ResourceTags;
	readonly zones?: string[];
}
export class networkInterfaces
	extends ArmResource<networkInterfacesComponentInputs>
	implements networkInterfacesComponentOutputs
{
	constructor(entity: ADKEntity, options: networkInterfacesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/networkInterfaces", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkInterfaces";
}
export interface networkInterfacesComponentOutputs {
	readonly apiVersion: "2020-06-01";
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
		super(entity, options.name, "Microsoft.Network/networkInterfaces/ipConfigurations", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkInterfaces/ipConfigurations";
}
export interface networkInterfaces_ipConfigurationsComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/networkInterfaces/ipConfigurations";
}
export interface networkInterfaces_ipConfigurationsComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: NetworkInterfaceIPConfigurationPropertiesFormat;
}
export class networkInterfaces_tapConfigurations
	extends ArmResource<networkInterfaces_tapConfigurationsComponentInputs>
	implements networkInterfaces_tapConfigurationsComponentOutputs
{
	constructor(entity: ADKEntity, options: networkInterfaces_tapConfigurationsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/networkInterfaces/tapConfigurations", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkInterfaces/tapConfigurations";
}
export interface networkInterfaces_tapConfigurationsComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/networkInterfaces/tapConfigurations";
}
export interface networkInterfaces_tapConfigurationsComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: NetworkInterfaceTapConfigurationPropertiesFormat;
}
export class networkProfiles
	extends ArmResource<networkProfilesComponentInputs>
	implements networkProfilesComponentOutputs
{
	constructor(entity: ADKEntity, options: networkProfilesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/networkProfiles", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkProfiles";
}
export interface networkProfilesComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/networkProfiles";
}
export interface networkProfilesComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: NetworkProfilePropertiesFormat;
	readonly tags?: ResourceTags;
}
export class networkSecurityGroups
	extends ArmResource<networkSecurityGroupsComponentInputs>
	implements networkSecurityGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: networkSecurityGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/networkSecurityGroups", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkSecurityGroups";
}
export interface networkSecurityGroupsComponentOutputs {
	readonly apiVersion: "2020-06-01";
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
		super(entity, options.name, "Microsoft.Network/networkSecurityGroups/defaultSecurityRules", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkSecurityGroups/defaultSecurityRules";
}
export interface networkSecurityGroups_defaultSecurityRulesComponentOutputs {
	readonly apiVersion: "2020-06-01";
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
		super(entity, options.name, "Microsoft.Network/networkSecurityGroups/securityRules", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkSecurityGroups/securityRules";
}
export interface networkSecurityGroups_securityRulesComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/networkSecurityGroups/securityRules";
}
export interface networkSecurityGroups_securityRulesComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: SecurityRulePropertiesFormat;
}
export class networkVirtualAppliances
	extends ArmResource<networkVirtualAppliancesComponentInputs>
	implements networkVirtualAppliancesComponentOutputs
{
	constructor(entity: ADKEntity, options: networkVirtualAppliancesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/networkVirtualAppliances", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkVirtualAppliances";
}
export interface networkVirtualAppliancesComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/networkVirtualAppliances";
}
export interface networkVirtualAppliancesComponentInputs {
	readonly etag?: string;
	readonly identity?: ManagedServiceIdentity;
	readonly location?: string;
	readonly name: string;
	readonly properties?: NetworkVirtualAppliancePropertiesFormat;
	readonly tags?: ResourceTags;
}
export class networkVirtualAppliances_inboundSecurityRules
	extends ArmResource<networkVirtualAppliances_inboundSecurityRulesComponentInputs>
	implements networkVirtualAppliances_inboundSecurityRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: networkVirtualAppliances_inboundSecurityRulesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Network/networkVirtualAppliances/inboundSecurityRules",
			"2020-06-01",
			options,
		);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkVirtualAppliances/inboundSecurityRules";
}
export interface networkVirtualAppliances_inboundSecurityRulesComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/networkVirtualAppliances/inboundSecurityRules";
}
export interface networkVirtualAppliances_inboundSecurityRulesComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: InboundSecurityRuleProperties;
}
export class networkVirtualAppliances_virtualApplianceSites
	extends ArmResource<networkVirtualAppliances_virtualApplianceSitesComponentInputs>
	implements networkVirtualAppliances_virtualApplianceSitesComponentOutputs
{
	constructor(entity: ADKEntity, options: networkVirtualAppliances_virtualApplianceSitesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Network/networkVirtualAppliances/virtualApplianceSites",
			"2020-06-01",
			options,
		);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkVirtualAppliances/virtualApplianceSites";
}
export interface networkVirtualAppliances_virtualApplianceSitesComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/networkVirtualAppliances/virtualApplianceSites";
}
export interface networkVirtualAppliances_virtualApplianceSitesComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: VirtualApplianceSiteProperties;
}
export class networkVirtualApplianceSkus
	extends ArmResource<networkVirtualApplianceSkusComponentInputs>
	implements networkVirtualApplianceSkusComponentOutputs
{
	constructor(entity: ADKEntity, options: networkVirtualApplianceSkusComponentInputs) {
		super(entity, options.name, "Microsoft.Network/networkVirtualApplianceSkus", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkVirtualApplianceSkus";
}
export interface networkVirtualApplianceSkusComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/networkVirtualApplianceSkus";
}
export interface networkVirtualApplianceSkusComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: NetworkVirtualApplianceSkuPropertiesFormat;
	readonly tags?: ResourceTags;
}
export class networkWatchers
	extends ArmResource<networkWatchersComponentInputs>
	implements networkWatchersComponentOutputs
{
	constructor(entity: ADKEntity, options: networkWatchersComponentInputs) {
		super(entity, options.name, "Microsoft.Network/networkWatchers", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkWatchers";
}
export interface networkWatchersComponentOutputs {
	readonly apiVersion: "2020-06-01";
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
		super(entity, options.name, "Microsoft.Network/networkWatchers/connectionMonitors", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkWatchers/connectionMonitors";
}
export interface networkWatchers_connectionMonitorsComponentOutputs {
	readonly apiVersion: "2020-06-01";
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
export class networkWatchers_flowLogs
	extends ArmResource<networkWatchers_flowLogsComponentInputs>
	implements networkWatchers_flowLogsComponentOutputs
{
	constructor(entity: ADKEntity, options: networkWatchers_flowLogsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/networkWatchers/flowLogs", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkWatchers/flowLogs";
}
export interface networkWatchers_flowLogsComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/networkWatchers/flowLogs";
}
export interface networkWatchers_flowLogsComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: FlowLogPropertiesFormat;
	readonly tags?: ResourceTags;
}
export class networkWatchers_packetCaptures
	extends ArmResource<networkWatchers_packetCapturesComponentInputs>
	implements networkWatchers_packetCapturesComponentOutputs
{
	constructor(entity: ADKEntity, options: networkWatchers_packetCapturesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/networkWatchers/packetCaptures", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkWatchers/packetCaptures";
}
export interface networkWatchers_packetCapturesComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/networkWatchers/packetCaptures";
}
export interface networkWatchers_packetCapturesComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties: PacketCaptureParametersOrPacketCaptureResultProperties;
}
export class p2svpnGateways extends ArmResource<p2svpnGatewaysComponentInputs> implements p2svpnGatewaysComponentOutputs {
	constructor(entity: ADKEntity, options: p2svpnGatewaysComponentInputs) {
		super(entity, options.name, "Microsoft.Network/p2svpnGateways", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/p2svpnGateways";
}
export interface p2svpnGatewaysComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/p2svpnGateways";
}
export interface p2svpnGatewaysComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: P2SVpnGatewayProperties;
	readonly tags?: ResourceTags;
}
export class privateEndpoints
	extends ArmResource<privateEndpointsComponentInputs>
	implements privateEndpointsComponentOutputs
{
	constructor(entity: ADKEntity, options: privateEndpointsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/privateEndpoints", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/privateEndpoints";
}
export interface privateEndpointsComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/privateEndpoints";
}
export interface privateEndpointsComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: PrivateEndpointProperties;
	readonly tags?: ResourceTags;
}
export class privateEndpoints_privateDnsZoneGroups
	extends ArmResource<privateEndpoints_privateDnsZoneGroupsComponentInputs>
	implements privateEndpoints_privateDnsZoneGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: privateEndpoints_privateDnsZoneGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/privateEndpoints/privateDnsZoneGroups", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/privateEndpoints/privateDnsZoneGroups";
}
export interface privateEndpoints_privateDnsZoneGroupsComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/privateEndpoints/privateDnsZoneGroups";
}
export interface privateEndpoints_privateDnsZoneGroupsComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: PrivateDnsZoneGroupPropertiesFormat;
}
export class privateLinkServices
	extends ArmResource<privateLinkServicesComponentInputs>
	implements privateLinkServicesComponentOutputs
{
	constructor(entity: ADKEntity, options: privateLinkServicesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/privateLinkServices", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/privateLinkServices";
}
export interface privateLinkServicesComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/privateLinkServices";
}
export interface privateLinkServicesComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: PrivateLinkServiceProperties;
	readonly tags?: ResourceTags;
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
			"2020-06-01",
			options,
		);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/privateLinkServices/privateEndpointConnections";
}
export interface privateLinkServices_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/privateLinkServices/privateEndpointConnections";
}
export interface privateLinkServices_privateEndpointConnectionsComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties;
}
export class publicIPAddresses
	extends ArmResource<publicIPAddressesComponentInputs>
	implements publicIPAddressesComponentOutputs
{
	constructor(entity: ADKEntity, options: publicIPAddressesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/publicIPAddresses", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/publicIPAddresses";
}
export interface publicIPAddressesComponentOutputs {
	readonly apiVersion: "2020-06-01";
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
export class publicIPPrefixes
	extends ArmResource<publicIPPrefixesComponentInputs>
	implements publicIPPrefixesComponentOutputs
{
	constructor(entity: ADKEntity, options: publicIPPrefixesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/publicIPPrefixes", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/publicIPPrefixes";
}
export interface publicIPPrefixesComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/publicIPPrefixes";
}
export interface publicIPPrefixesComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: PublicIPPrefixPropertiesFormat;
	readonly sku?: PublicIPPrefixSku;
	readonly tags?: ResourceTags;
	readonly zones?: string[];
}
export class routeFilters extends ArmResource<routeFiltersComponentInputs> implements routeFiltersComponentOutputs {
	constructor(entity: ADKEntity, options: routeFiltersComponentInputs) {
		super(entity, options.name, "Microsoft.Network/routeFilters", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/routeFilters";
}
export interface routeFiltersComponentOutputs {
	readonly apiVersion: "2020-06-01";
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
		super(entity, options.name, "Microsoft.Network/routeFilters/routeFilterRules", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/routeFilters/routeFilterRules";
}
export interface routeFilters_routeFilterRulesComponentOutputs {
	readonly apiVersion: "2020-06-01";
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
		super(entity, options.name, "Microsoft.Network/routeTables", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/routeTables";
}
export interface routeTablesComponentOutputs {
	readonly apiVersion: "2020-06-01";
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
		super(entity, options.name, "Microsoft.Network/routeTables/routes", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/routeTables/routes";
}
export interface routeTables_routesComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/routeTables/routes";
}
export interface routeTables_routesComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: RoutePropertiesFormat;
}
export class securityPartnerProviders
	extends ArmResource<securityPartnerProvidersComponentInputs>
	implements securityPartnerProvidersComponentOutputs
{
	constructor(entity: ADKEntity, options: securityPartnerProvidersComponentInputs) {
		super(entity, options.name, "Microsoft.Network/securityPartnerProviders", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/securityPartnerProviders";
}
export interface securityPartnerProvidersComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/securityPartnerProviders";
}
export interface securityPartnerProvidersComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: SecurityPartnerProviderPropertiesFormat;
	readonly tags?: ResourceTags;
}
export class serviceEndpointPolicies
	extends ArmResource<serviceEndpointPoliciesComponentInputs>
	implements serviceEndpointPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: serviceEndpointPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/serviceEndpointPolicies", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/serviceEndpointPolicies";
}
export interface serviceEndpointPoliciesComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/serviceEndpointPolicies";
}
export interface serviceEndpointPoliciesComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: ServiceEndpointPolicyPropertiesFormat;
	readonly tags?: ResourceTags;
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
			"2020-06-01",
			options,
		);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/serviceEndpointPolicies/serviceEndpointPolicyDefinitions";
}
export interface serviceEndpointPolicies_serviceEndpointPolicyDefinitionsComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/serviceEndpointPolicies/serviceEndpointPolicyDefinitions";
}
export interface serviceEndpointPolicies_serviceEndpointPolicyDefinitionsComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: ServiceEndpointPolicyDefinitionPropertiesFormat;
}
export class virtualHubs extends ArmResource<virtualHubsComponentInputs> implements virtualHubsComponentOutputs {
	constructor(entity: ADKEntity, options: virtualHubsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/virtualHubs", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/virtualHubs";
}
export interface virtualHubsComponentOutputs {
	readonly apiVersion: "2020-06-01";
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
export class virtualHubs_bgpConnections
	extends ArmResource<virtualHubs_bgpConnectionsComponentInputs>
	implements virtualHubs_bgpConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualHubs_bgpConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/virtualHubs/bgpConnections", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/virtualHubs/bgpConnections";
}
export interface virtualHubs_bgpConnectionsComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/virtualHubs/bgpConnections";
}
export interface virtualHubs_bgpConnectionsComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: BgpConnectionProperties;
}
export class virtualHubs_hubRouteTables
	extends ArmResource<virtualHubs_hubRouteTablesComponentInputs>
	implements virtualHubs_hubRouteTablesComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualHubs_hubRouteTablesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/virtualHubs/hubRouteTables", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/virtualHubs/hubRouteTables";
}
export interface virtualHubs_hubRouteTablesComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/virtualHubs/hubRouteTables";
}
export interface virtualHubs_hubRouteTablesComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: HubRouteTableProperties;
}
export class virtualHubs_hubVirtualNetworkConnections
	extends ArmResource<virtualHubs_hubVirtualNetworkConnectionsComponentInputs>
	implements virtualHubs_hubVirtualNetworkConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualHubs_hubVirtualNetworkConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/virtualHubs/hubVirtualNetworkConnections", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/virtualHubs/hubVirtualNetworkConnections";
}
export interface virtualHubs_hubVirtualNetworkConnectionsComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/virtualHubs/hubVirtualNetworkConnections";
}
export interface virtualHubs_hubVirtualNetworkConnectionsComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: HubVirtualNetworkConnectionProperties;
}
export class virtualHubs_ipConfigurations
	extends ArmResource<virtualHubs_ipConfigurationsComponentInputs>
	implements virtualHubs_ipConfigurationsComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualHubs_ipConfigurationsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/virtualHubs/ipConfigurations", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/virtualHubs/ipConfigurations";
}
export interface virtualHubs_ipConfigurationsComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/virtualHubs/ipConfigurations";
}
export interface virtualHubs_ipConfigurationsComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: HubIPConfigurationPropertiesFormat;
}
export class virtualHubs_routeTables
	extends ArmResource<virtualHubs_routeTablesComponentInputs>
	implements virtualHubs_routeTablesComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualHubs_routeTablesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/virtualHubs/routeTables", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/virtualHubs/routeTables";
}
export interface virtualHubs_routeTablesComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/virtualHubs/routeTables";
}
export interface virtualHubs_routeTablesComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: VirtualHubRouteTableV2Properties;
}
export class virtualNetworkGateways
	extends ArmResource<virtualNetworkGatewaysComponentInputs>
	implements virtualNetworkGatewaysComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualNetworkGatewaysComponentInputs) {
		super(entity, options.name, "Microsoft.Network/virtualNetworkGateways", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/virtualNetworkGateways";
}
export interface virtualNetworkGatewaysComponentOutputs {
	readonly apiVersion: "2020-06-01";
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
		super(entity, options.name, "Microsoft.Network/virtualNetworks", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/virtualNetworks";
}
export interface virtualNetworksComponentOutputs {
	readonly apiVersion: "2020-06-01";
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
		super(entity, options.name, "Microsoft.Network/virtualNetworks/subnets", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/virtualNetworks/subnets";
}
export interface virtualNetworks_subnetsComponentOutputs {
	readonly apiVersion: "2020-06-01";
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
		super(entity, options.name, "Microsoft.Network/virtualNetworks/virtualNetworkPeerings", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/virtualNetworks/virtualNetworkPeerings";
}
export interface virtualNetworks_virtualNetworkPeeringsComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/virtualNetworks/virtualNetworkPeerings";
}
export interface virtualNetworks_virtualNetworkPeeringsComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: VirtualNetworkPeeringPropertiesFormat;
}
export class virtualNetworkTaps
	extends ArmResource<virtualNetworkTapsComponentInputs>
	implements virtualNetworkTapsComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualNetworkTapsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/virtualNetworkTaps", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/virtualNetworkTaps";
}
export interface virtualNetworkTapsComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/virtualNetworkTaps";
}
export interface virtualNetworkTapsComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: VirtualNetworkTapPropertiesFormat;
	readonly tags?: ResourceTags;
}
export class virtualRouters extends ArmResource<virtualRoutersComponentInputs> implements virtualRoutersComponentOutputs {
	constructor(entity: ADKEntity, options: virtualRoutersComponentInputs) {
		super(entity, options.name, "Microsoft.Network/virtualRouters", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/virtualRouters";
}
export interface virtualRoutersComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/virtualRouters";
}
export interface virtualRoutersComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: VirtualRouterPropertiesFormat;
	readonly tags?: ResourceTags;
}
export class virtualRouters_peerings
	extends ArmResource<virtualRouters_peeringsComponentInputs>
	implements virtualRouters_peeringsComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualRouters_peeringsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/virtualRouters/peerings", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/virtualRouters/peerings";
}
export interface virtualRouters_peeringsComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/virtualRouters/peerings";
}
export interface virtualRouters_peeringsComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: VirtualRouterPeeringProperties;
}
export class virtualWans extends ArmResource<virtualWansComponentInputs> implements virtualWansComponentOutputs {
	constructor(entity: ADKEntity, options: virtualWansComponentInputs) {
		super(entity, options.name, "Microsoft.Network/virtualWans", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/virtualWans";
}
export interface virtualWansComponentOutputs {
	readonly apiVersion: "2020-06-01";
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
		super(entity, options.name, "Microsoft.Network/vpnGateways", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/vpnGateways";
}
export interface vpnGatewaysComponentOutputs {
	readonly apiVersion: "2020-06-01";
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
		super(entity, options.name, "Microsoft.Network/vpnGateways/vpnConnections", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/vpnGateways/vpnConnections";
}
export interface vpnGateways_vpnConnectionsComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/vpnGateways/vpnConnections";
}
export interface vpnGateways_vpnConnectionsComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: VpnConnectionProperties;
}
export class vpnGateways_vpnConnections_vpnLinkConnections
	extends ArmResource<vpnGateways_vpnConnections_vpnLinkConnectionsComponentInputs>
	implements vpnGateways_vpnConnections_vpnLinkConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: vpnGateways_vpnConnections_vpnLinkConnectionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Network/vpnGateways/vpnConnections/vpnLinkConnections",
			"2020-06-01",
			options,
		);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/vpnGateways/vpnConnections/vpnLinkConnections";
}
export interface vpnGateways_vpnConnections_vpnLinkConnectionsComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/vpnGateways/vpnConnections/vpnLinkConnections";
}
export interface vpnGateways_vpnConnections_vpnLinkConnectionsComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: VpnSiteLinkConnectionProperties;
}
export class vpnServerConfigurations
	extends ArmResource<vpnServerConfigurationsComponentInputs>
	implements vpnServerConfigurationsComponentOutputs
{
	constructor(entity: ADKEntity, options: vpnServerConfigurationsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/vpnServerConfigurations", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/vpnServerConfigurations";
}
export interface vpnServerConfigurationsComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/vpnServerConfigurations";
}
export interface vpnServerConfigurationsComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: VpnServerConfigurationProperties;
	readonly tags?: ResourceTags;
}
export class vpnSites extends ArmResource<vpnSitesComponentInputs> implements vpnSitesComponentOutputs {
	constructor(entity: ADKEntity, options: vpnSitesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/vpnSites", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/vpnSites";
}
export interface vpnSitesComponentOutputs {
	readonly apiVersion: "2020-06-01";
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
export class vpnSites_vpnSiteLinks
	extends ArmResource<vpnSites_vpnSiteLinksComponentInputs>
	implements vpnSites_vpnSiteLinksComponentOutputs
{
	constructor(entity: ADKEntity, options: vpnSites_vpnSiteLinksComponentInputs) {
		super(entity, options.name, "Microsoft.Network/vpnSites/vpnSiteLinks", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/vpnSites/vpnSiteLinks";
}
export interface vpnSites_vpnSiteLinksComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/vpnSites/vpnSiteLinks";
}
export interface vpnSites_vpnSiteLinksComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: VpnSiteLinkProperties;
}
export interface AadAuthenticationParameters {
	readonly aadAudience?: string;
	readonly aadIssuer?: string;
	readonly aadTenant?: string;
}
export interface AddressSpace {
	readonly addressPrefixes?: string[];
}
export interface ApplicationGateway {
	readonly etag?: string;
	readonly id?: string;
	readonly identity?: ManagedServiceIdentity;
	readonly location?: string;
	readonly name?: string;
	readonly properties?: ApplicationGatewayPropertiesFormat;
	readonly tags?: ResourceTags;
	readonly type?: string;
	readonly zones?: string[];
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
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface ApplicationGatewayAutoscaleConfiguration {
	readonly maxCapacity?: number;
	readonly minCapacity: number;
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
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
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
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly requestTimeout?: number;
	readonly trustedRootCertificates?: SubResource[];
}
export interface ApplicationGatewayClientAuthConfiguration {
	readonly verifyClientCertIssuerDN?: boolean;
}
export interface ApplicationGatewayConnectionDraining {
	readonly drainTimeoutInSec: number;
	readonly enabled: boolean;
}
export interface ApplicationGatewayCustomError {
	readonly customErrorPageUrl?: string;
	readonly statusCode?: "HttpStatus403" | "HttpStatus502";
}
export interface ApplicationGatewayFirewallDisabledRuleGroup {
	readonly ruleGroupName: string;
	readonly rules?: number[];
}
export interface ApplicationGatewayFirewallExclusion {
	readonly matchVariable: string;
	readonly selector: string;
	readonly selectorMatchOperator: string;
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
	readonly privateLinkConfiguration?: SubResource;
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
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
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface ApplicationGatewayHeaderConfiguration {
	readonly headerName?: string;
	readonly headerValue?: string;
}
export interface ApplicationGatewayHttpListener {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: ApplicationGatewayHttpListenerPropertiesFormat;
	readonly type?: string;
}
export interface ApplicationGatewayHttpListenerPropertiesFormat {
	readonly customErrorConfigurations?: ApplicationGatewayCustomError[];
	readonly firewallPolicy?: SubResource;
	readonly frontendIPConfiguration?: SubResource;
	readonly frontendPort?: SubResource;
	readonly hostName?: string;
	readonly hostNames?: string[];
	readonly protocol?: "Http" | "Https";
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly requireServerNameIndication?: boolean;
	readonly sslCertificate?: SubResource;
	readonly sslProfile?: SubResource;
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
	readonly firewallPolicy?: SubResource;
	readonly paths?: string[];
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly redirectConfiguration?: SubResource;
	readonly rewriteRuleSet?: SubResource;
}
export interface ApplicationGatewayPrivateEndpointConnection {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: ApplicationGatewayPrivateEndpointConnectionProperties;
	readonly type?: string;
}
export interface ApplicationGatewayPrivateEndpointConnectionProperties {
	readonly linkIdentifier?: string;
	readonly privateEndpoint?: PrivateEndpoint;
	readonly privateLinkServiceConnectionState?: PrivateLinkServiceConnectionState;
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface ApplicationGatewayPrivateLinkConfiguration {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: ApplicationGatewayPrivateLinkConfigurationProperties;
	readonly type?: string;
}
export interface ApplicationGatewayPrivateLinkConfigurationProperties {
	readonly ipConfigurations?: ApplicationGatewayPrivateLinkIpConfiguration[];
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface ApplicationGatewayPrivateLinkIpConfiguration {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: ApplicationGatewayPrivateLinkIpConfigurationProperties;
	readonly type?: string;
}
export interface ApplicationGatewayPrivateLinkIpConfigurationProperties {
	readonly primary?: boolean;
	readonly privateIPAddress?: string;
	readonly privateIPAllocationMethod?: "Dynamic" | "Static";
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly subnet?: SubResource;
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
	readonly port?: number;
	readonly protocol?: "Http" | "Https";
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly timeout?: number;
	readonly unhealthyThreshold?: number;
}
export interface ApplicationGatewayPropertiesFormat {
	readonly authenticationCertificates?: ApplicationGatewayAuthenticationCertificate[];
	readonly autoscaleConfiguration?: ApplicationGatewayAutoscaleConfiguration;
	readonly backendAddressPools?: ApplicationGatewayBackendAddressPool[];
	readonly backendHttpSettingsCollection?: ApplicationGatewayBackendHttpSettings[];
	readonly customErrorConfigurations?: ApplicationGatewayCustomError[];
	readonly enableFips?: boolean;
	readonly enableHttp2?: boolean;
	readonly firewallPolicy?: SubResource;
	readonly forceFirewallPolicyAssociation?: boolean;
	readonly frontendIPConfigurations?: ApplicationGatewayFrontendIPConfiguration[];
	readonly frontendPorts?: ApplicationGatewayFrontendPort[];
	readonly gatewayIPConfigurations?: ApplicationGatewayIPConfiguration[];
	readonly httpListeners?: ApplicationGatewayHttpListener[];
	readonly operationalState?: "Running" | "Starting" | "Stopped" | "Stopping";
	readonly privateEndpointConnections?: ApplicationGatewayPrivateEndpointConnection[];
	readonly privateLinkConfigurations?: ApplicationGatewayPrivateLinkConfiguration[];
	readonly probes?: ApplicationGatewayProbe[];
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly redirectConfigurations?: ApplicationGatewayRedirectConfiguration[];
	readonly requestRoutingRules?: ApplicationGatewayRequestRoutingRule[];
	readonly resourceGuid?: string;
	readonly rewriteRuleSets?: ApplicationGatewayRewriteRuleSet[];
	readonly sku?: ApplicationGatewaySku;
	readonly sslCertificates?: ApplicationGatewaySslCertificate[];
	readonly sslPolicy?: ApplicationGatewaySslPolicy;
	readonly sslProfiles?: ApplicationGatewaySslProfile[];
	readonly trustedClientCertificates?: ApplicationGatewayTrustedClientCertificate[];
	readonly trustedRootCertificates?: ApplicationGatewayTrustedRootCertificate[];
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
	readonly priority?: number;
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly redirectConfiguration?: SubResource;
	readonly rewriteRuleSet?: SubResource;
	readonly ruleType?: "Basic" | "PathBasedRouting";
	readonly urlPathMap?: SubResource;
}
export interface ApplicationGatewayRewriteRule {
	readonly actionSet?: ApplicationGatewayRewriteRuleActionSet;
	readonly conditions?: ApplicationGatewayRewriteRuleCondition[];
	readonly name?: string;
	readonly ruleSequence?: number;
}
export interface ApplicationGatewayRewriteRuleActionSet {
	readonly requestHeaderConfigurations?: ApplicationGatewayHeaderConfiguration[];
	readonly responseHeaderConfigurations?: ApplicationGatewayHeaderConfiguration[];
	readonly urlConfiguration?: ApplicationGatewayUrlConfiguration;
}
export interface ApplicationGatewayRewriteRuleCondition {
	readonly ignoreCase?: boolean;
	readonly negate?: boolean;
	readonly pattern?: string;
	readonly variable?: string;
}
export interface ApplicationGatewayRewriteRuleSet {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: ApplicationGatewayRewriteRuleSetPropertiesFormat;
}
export interface ApplicationGatewayRewriteRuleSetPropertiesFormat {
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly rewriteRules?: ApplicationGatewayRewriteRule[];
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
	readonly keyVaultSecretId?: string;
	readonly password?: string;
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
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
export interface ApplicationGatewaySslProfile {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: ApplicationGatewaySslProfilePropertiesFormat;
	readonly type?: string;
}
export interface ApplicationGatewaySslProfilePropertiesFormat {
	readonly clientAuthConfiguration?: ApplicationGatewayClientAuthConfiguration;
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly sslPolicy?: ApplicationGatewaySslPolicy;
	readonly trustedClientCertificates?: SubResource[];
}
export interface ApplicationGatewayTrustedClientCertificate {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: ApplicationGatewayTrustedClientCertificatePropertiesFormat;
	readonly type?: string;
}
export interface ApplicationGatewayTrustedClientCertificatePropertiesFormat {
	readonly data?: string;
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface ApplicationGatewayTrustedRootCertificate {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: ApplicationGatewayTrustedRootCertificatePropertiesFormat;
	readonly type?: string;
}
export interface ApplicationGatewayTrustedRootCertificatePropertiesFormat {
	readonly data?: string;
	readonly keyVaultSecretId?: string;
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface ApplicationGatewayUrlConfiguration {
	readonly modifiedPath?: string;
	readonly modifiedQueryString?: string;
	readonly reroute?: boolean;
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
	readonly defaultRewriteRuleSet?: SubResource;
	readonly pathRules?: ApplicationGatewayPathRule[];
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface ApplicationGatewayWebApplicationFirewallConfiguration {
	readonly disabledRuleGroups?: ApplicationGatewayFirewallDisabledRuleGroup[];
	readonly enabled: boolean;
	readonly exclusions?: ApplicationGatewayFirewallExclusion[];
	readonly fileUploadLimitInMb?: number;
	readonly firewallMode: "Detection" | "Prevention";
	readonly maxRequestBodySize?: number;
	readonly maxRequestBodySizeInKb?: number;
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
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly resourceGuid?: string;
}
export interface AuthorizationPropertiesFormat {
	readonly authorizationKey?: string;
	readonly authorizationUseStatus?: "Available" | "InUse";
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface AzureFirewallAdditionalProperties {
	readonly [key: string]: string;
}
export interface AzureFirewallApplicationRule {
	readonly description?: string;
	readonly fqdnTags?: string[];
	readonly name?: string;
	readonly protocols?: AzureFirewallApplicationRuleProtocol[];
	readonly sourceAddresses?: string[];
	readonly sourceIpGroups?: string[];
	readonly targetFqdns?: string[];
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
	readonly protocolType?: "Http" | "Https" | "Mssql";
}
export interface AzureFirewallIPConfiguration {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: AzureFirewallIPConfigurationPropertiesFormat;
	readonly type?: string;
}
export interface AzureFirewallIPConfigurationPropertiesFormat {
	readonly privateIPAddress?: string;
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly publicIPAddress?: SubResource;
	readonly subnet?: SubResource;
}
export interface AzureFirewallIpGroups {
	readonly changeNumber?: string;
	readonly id?: string;
}
export interface AzureFirewallNatRCAction {
	readonly type?: "Dnat" | "Snat";
}
export interface AzureFirewallNatRule {
	readonly description?: string;
	readonly destinationAddresses?: string[];
	readonly destinationPorts?: string[];
	readonly name?: string;
	readonly protocols?: "any" | "ICMP" | "TCP" | "UDP"[];
	readonly sourceAddresses?: string[];
	readonly sourceIpGroups?: string[];
	readonly translatedAddress?: string;
	readonly translatedFqdn?: string;
	readonly translatedPort?: string;
}
export interface AzureFirewallNatRuleCollection {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: AzureFirewallNatRuleCollectionProperties;
}
export interface AzureFirewallNatRuleCollectionProperties {
	readonly action?: AzureFirewallNatRCAction;
	readonly priority?: number;
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly rules?: AzureFirewallNatRule[];
}
export interface AzureFirewallNetworkRule {
	readonly description?: string;
	readonly destinationAddresses?: string[];
	readonly destinationFqdns?: string[];
	readonly destinationIpGroups?: string[];
	readonly destinationPorts?: string[];
	readonly name?: string;
	readonly protocols?: "any" | "ICMP" | "TCP" | "UDP"[];
	readonly sourceAddresses?: string[];
	readonly sourceIpGroups?: string[];
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
	readonly additionalProperties?: AzureFirewallAdditionalProperties;
	readonly applicationRuleCollections?: AzureFirewallApplicationRuleCollection[];
	readonly firewallPolicy?: SubResource;
	readonly hubIPAddresses?: HubIPAddresses;
	readonly ipConfigurations?: AzureFirewallIPConfiguration[];
	readonly ipGroups?: AzureFirewallIpGroups[];
	readonly managementIpConfiguration?: AzureFirewallIPConfiguration;
	readonly natRuleCollections?: AzureFirewallNatRuleCollection[];
	readonly networkRuleCollections?: AzureFirewallNetworkRuleCollection[];
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly sku?: AzureFirewallSku;
	readonly threatIntelMode?: "Alert" | "Deny" | "Off";
	readonly virtualHub?: SubResource;
}
export interface AzureFirewallPublicIPAddress {
	readonly address?: string;
}
export interface AzureFirewallRCAction {
	readonly type?: "Allow" | "Deny";
}
export interface AzureFirewallSku {
	readonly name?: "AZFW_Hub" | "AZFW_VNet";
	readonly tier?: "Premium" | "Standard";
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
	readonly outboundRule?: SubResource;
	readonly outboundRules?: SubResource[];
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface BastionHostIPConfiguration {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: BastionHostIPConfigurationPropertiesFormat;
	readonly type?: string;
}
export interface BastionHostIPConfigurationPropertiesFormat {
	readonly privateIPAllocationMethod?: "Dynamic" | "Static";
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly publicIPAddress: SubResource;
	readonly subnet: SubResource;
}
export interface BastionHostPropertiesFormat {
	readonly dnsName?: string;
	readonly ipConfigurations?: BastionHostIPConfiguration[];
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface BgpConnectionProperties {
	readonly connectionState?: "Connected" | "Connecting" | "NotConnected" | "Unknown";
	readonly peerAsn?: number;
	readonly peerIp?: string;
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface BgpSettings {
	readonly asn?: number;
	readonly bgpPeeringAddress?: string;
	readonly bgpPeeringAddresses?: IPConfigurationBgpPeeringAddress[];
	readonly peerWeight?: number;
}
export interface BreakOutCategoryPolicies {
	readonly allow?: boolean;
	readonly default?: boolean;
	readonly optimize?: boolean;
}
export interface Components1Jq1T4ISchemasManagedserviceidentityPropertiesUserassignedidentitiesAdditionalproperties {
	readonly clientId?: string;
	readonly principalId?: string;
}
export interface ConnectionMonitorDestination {
	readonly address?: string;
	readonly port?: number;
	readonly resourceId?: string;
}
export interface ConnectionMonitorEndpoint {
	readonly address?: string;
	readonly coverageLevel?: "AboveAverage" | "Average" | "BelowAverage" | "Default" | "Full" | "Low";
	readonly filter?: ConnectionMonitorEndpointFilter;
	readonly name: string;
	readonly resourceId?: string;
	readonly scope?: ConnectionMonitorEndpointScope;
	readonly type?:
		| "AzureSubnet"
		| "AzureVM"
		| "AzureVNet"
		| "ExternalAddress"
		| "MMAWorkspaceMachine"
		| "MMAWorkspaceNetwork";
}
export interface ConnectionMonitorEndpointFilter {
	readonly items?: ConnectionMonitorEndpointFilterItem[];
	readonly type?: "Include";
}
export interface ConnectionMonitorEndpointFilterItem {
	readonly address?: string;
	readonly type?: "AgentAddress";
}
export interface ConnectionMonitorEndpointScope {
	readonly exclude?: ConnectionMonitorEndpointScopeItem[];
	readonly include?: ConnectionMonitorEndpointScopeItem[];
}
export interface ConnectionMonitorEndpointScopeItem {
	readonly address?: string;
}
export interface ConnectionMonitorHttpConfiguration {
	readonly method?: "Get" | "Post";
	readonly path?: string;
	readonly port?: number;
	readonly preferHTTPS?: boolean;
	readonly requestHeaders?: HttpHeader[];
	readonly validStatusCodeRanges?: string[];
}
export interface ConnectionMonitorIcmpConfiguration {
	readonly disableTraceRoute?: boolean;
}
export interface ConnectionMonitorOutput {
	readonly type?: "Workspace";
	readonly workspaceSettings?: ConnectionMonitorWorkspaceSettings;
}
export interface ConnectionMonitorParametersOrConnectionMonitorResultProperties {
	readonly autoStart?: boolean;
	readonly connectionMonitorType?: "MultiEndpoint" | "SingleSourceDestination";
	readonly destination?: ConnectionMonitorDestination;
	readonly endpoints?: ConnectionMonitorEndpoint[];
	readonly monitoringIntervalInSeconds?: number;
	readonly monitoringStatus?: string;
	readonly notes?: string;
	readonly outputs?: ConnectionMonitorOutput[];
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly source?: ConnectionMonitorSource;
	readonly startTime?: string;
	readonly testConfigurations?: ConnectionMonitorTestConfiguration[];
	readonly testGroups?: ConnectionMonitorTestGroup[];
}
export interface ConnectionMonitorSource {
	readonly port?: number;
	readonly resourceId: string;
}
export interface ConnectionMonitorSuccessThreshold {
	readonly checksFailedPercent?: number;
	readonly roundTripTimeMs?: number;
}
export interface ConnectionMonitorTags {
	readonly [key: string]: string;
}
export interface ConnectionMonitorTcpConfiguration {
	readonly destinationPortBehavior?: "ListenIfAvailable" | "None";
	readonly disableTraceRoute?: boolean;
	readonly port?: number;
}
export interface ConnectionMonitorTestConfiguration {
	readonly httpConfiguration?: ConnectionMonitorHttpConfiguration;
	readonly icmpConfiguration?: ConnectionMonitorIcmpConfiguration;
	readonly name: string;
	readonly preferredIPVersion?: "IPv4" | "IPv6";
	readonly protocol: "Http" | "Icmp" | "Tcp";
	readonly successThreshold?: ConnectionMonitorSuccessThreshold;
	readonly tcpConfiguration?: ConnectionMonitorTcpConfiguration;
	readonly testFrequencySec?: number;
}
export interface ConnectionMonitorTestGroup {
	readonly destinations: string[];
	readonly disable?: boolean;
	readonly name: string;
	readonly sources: string[];
	readonly testConfigurations: string[];
}
export interface ConnectionMonitorWorkspaceSettings {
	readonly workspaceResourceId?: string;
}
export interface Container {
	readonly id?: string;
}
export interface ContainerNetworkInterface {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: ContainerNetworkInterfacePropertiesFormat;
	readonly type?: string;
}
export interface ContainerNetworkInterfaceConfiguration {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: ContainerNetworkInterfaceConfigurationPropertiesFormat;
	readonly type?: string;
}
export interface ContainerNetworkInterfaceConfigurationPropertiesFormat {
	readonly containerNetworkInterfaces?: SubResource[];
	readonly ipConfigurations?: IPConfigurationProfile[];
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface ContainerNetworkInterfaceIpConfiguration {
	readonly etag?: string;
	readonly name?: string;
	readonly properties?: ContainerNetworkInterfaceIpConfigurationPropertiesFormat;
	readonly type?: string;
}
export interface ContainerNetworkInterfaceIpConfigurationPropertiesFormat {
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface ContainerNetworkInterfacePropertiesFormat {
	readonly container?: Container;
	readonly containerNetworkInterfaceConfiguration?: ContainerNetworkInterfaceConfiguration;
	readonly ipConfigurations?: ContainerNetworkInterfaceIpConfiguration[];
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface CustomDnsConfigPropertiesFormat {
	readonly fqdn?: string;
	readonly ipAddresses?: string[];
}
export interface CustomIpPrefixPropertiesFormat {
	readonly cidr?: string;
	readonly commissionedState?:
		| "Commissioned"
		| "Commissioning"
		| "Decommissioning"
		| "Deprovisioning"
		| "Provisioned"
		| "Provisioning";
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly publicIpPrefixes?: SubResource[];
	readonly resourceGuid?: string;
}
export interface DdosCustomPolicyPropertiesFormat {
	readonly protocolCustomSettings?: ProtocolCustomSettingsFormat[];
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly publicIPAddresses?: SubResource[];
	readonly resourceGuid?: string;
}
export interface DdosProtectionPlanPropertiesFormat {
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly resourceGuid?: string;
	readonly virtualNetworks?: SubResource[];
}
export interface DdosProtectionPlanTags {
	readonly [key: string]: string;
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
}
export interface DeviceProperties {
	readonly deviceModel?: string;
	readonly deviceVendor?: string;
	readonly linkSpeedInMbps?: number;
}
export interface DhcpOptions {
	readonly dnsServers?: string[];
}
export interface DnsSettings {
	readonly enableProxy?: boolean;
	readonly requireProxyForNetworkRules?: boolean;
	readonly servers?: string[];
}
export interface DscpConfigurationPropertiesFormat {
	readonly associatedNetworkInterfaces?: NetworkInterface[];
	readonly destinationIpRanges?: QosIpRange[];
	readonly destinationPortRanges?: QosPortRange[];
	readonly markings?: number[];
	readonly protocol?: "Ah" | "All" | "DoNotUse" | "Esp" | "Gre" | "Icmp" | "Tcp" | "Udp" | "Vxlan";
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly qosCollectionId?: string;
	readonly resourceGuid?: string;
	readonly sourceIpRanges?: QosIpRange[];
	readonly sourcePortRanges?: QosPortRange[];
}
export interface ExpressRouteCircuitAuthorization {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: AuthorizationPropertiesFormat;
	readonly type?: string;
}
export interface ExpressRouteCircuitConnection {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: ExpressRouteCircuitConnectionPropertiesFormat;
	readonly type?: string;
}
export interface ExpressRouteCircuitConnectionPropertiesFormat {
	readonly addressPrefix?: string;
	readonly authorizationKey?: string;
	readonly circuitConnectionStatus?: "Connected" | "Connecting" | "Disconnected";
	readonly expressRouteCircuitPeering?: SubResource;
	readonly ipv6CircuitConnectionConfig?: Ipv6CircuitConnectionConfig;
	readonly peerExpressRouteCircuitPeering?: SubResource;
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface ExpressRouteCircuitPeering {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: ExpressRouteCircuitPeeringPropertiesFormat;
	readonly type?: string;
}
export interface ExpressRouteCircuitPeeringConfig {
	readonly advertisedCommunities?: string[];
	readonly advertisedPublicPrefixes?: string[];
	readonly advertisedPublicPrefixesState?: "Configured" | "Configuring" | "NotConfigured" | "ValidationNeeded";
	readonly customerASN?: number;
	readonly legacyMode?: number;
	readonly routingRegistryName?: string;
}
export interface ExpressRouteCircuitPeeringId {
	readonly id?: string;
}
export interface ExpressRouteCircuitPeeringPropertiesFormat {
	readonly azureASN?: number;
	readonly connections?: ExpressRouteCircuitConnection[];
	readonly expressRouteConnection?: ExpressRouteConnectionId;
	readonly gatewayManagerEtag?: string;
	readonly ipv6PeeringConfig?: Ipv6ExpressRouteCircuitPeeringConfig;
	readonly lastModifiedBy?: string;
	readonly microsoftPeeringConfig?: ExpressRouteCircuitPeeringConfig;
	readonly peerASN?: number;
	readonly peeredConnections?: PeerExpressRouteCircuitConnection[];
	readonly peeringType?: "AzurePrivatePeering" | "AzurePublicPeering" | "MicrosoftPeering";
	readonly primaryAzurePort?: string;
	readonly primaryPeerAddressPrefix?: string;
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly routeFilter?: SubResource;
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
	readonly bandwidthInGbps?: number;
	readonly circuitProvisioningState?: string;
	readonly expressRoutePort?: SubResource;
	readonly gatewayManagerEtag?: string;
	readonly globalReachEnabled?: boolean;
	readonly peerings?: ExpressRouteCircuitPeering[];
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly serviceKey?: string;
	readonly serviceProviderNotes?: string;
	readonly serviceProviderProperties?: ExpressRouteCircuitServiceProviderProperties;
	readonly serviceProviderProvisioningState?: "Deprovisioning" | "NotProvisioned" | "Provisioned" | "Provisioning";
	readonly stag?: number;
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
	readonly tier?: "Basic" | "Local" | "Premium" | "Standard";
}
export interface ExpressRouteCircuitStats {
	readonly primarybytesIn?: number;
	readonly primarybytesOut?: number;
	readonly secondarybytesIn?: number;
	readonly secondarybytesOut?: number;
}
export interface ExpressRouteConnection {
	readonly id?: string;
	readonly name: string;
	readonly properties?: ExpressRouteConnectionProperties;
}
export interface ExpressRouteConnectionId {
	readonly id?: string;
}
export interface ExpressRouteConnectionProperties {
	readonly authorizationKey?: string;
	readonly enableInternetSecurity?: boolean;
	readonly expressRouteCircuitPeering: ExpressRouteCircuitPeeringId;
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly routingConfiguration?: RoutingConfiguration;
	readonly routingWeight?: number;
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
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
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
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly secondaryAzurePort?: string;
	readonly serviceProviderNotes?: string;
	readonly serviceProviderProvisioningState?: "Deprovisioning" | "NotProvisioned" | "Provisioned" | "Provisioning";
	readonly sTag?: number;
}
export interface ExpressRouteGatewayProperties {
	readonly autoScaleConfiguration?: ExpressRouteGatewayPropertiesAutoScaleConfiguration;
	readonly expressRouteConnections?: ExpressRouteConnection[];
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly virtualHub: VirtualHubId;
}
export interface ExpressRouteGatewayPropertiesAutoScaleConfiguration {
	readonly bounds?: ExpressRouteGatewayPropertiesAutoScaleConfigurationBounds;
}
export interface ExpressRouteGatewayPropertiesAutoScaleConfigurationBounds {
	readonly max?: number;
	readonly min?: number;
}
export interface ExpressRouteLink {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: ExpressRouteLinkPropertiesFormat;
}
export interface ExpressRouteLinkMacSecConfig {
	readonly cakSecretIdentifier?: string;
	readonly cipher?: "GcmAes128" | "GcmAes256" | "GcmAesXpn128" | "GcmAesXpn256";
	readonly cknSecretIdentifier?: string;
	readonly sciState?: "Disabled" | "Enabled";
}
export interface ExpressRouteLinkPropertiesFormat {
	readonly adminState?: "Disabled" | "Enabled";
	readonly connectorType?: "LC" | "SC";
	readonly interfaceName?: string;
	readonly macSecConfig?: ExpressRouteLinkMacSecConfig;
	readonly patchPanelId?: string;
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly rackId?: string;
	readonly routerName?: string;
}
export interface ExpressRoutePortPropertiesFormat {
	readonly allocationDate?: string;
	readonly bandwidthInGbps?: number;
	readonly circuits?: SubResource[];
	readonly encapsulation?: "Dot1Q" | "QinQ";
	readonly etherType?: string;
	readonly links?: ExpressRouteLink[];
	readonly mtu?: string;
	readonly peeringLocation?: string;
	readonly provisionedBandwidthInGbps?: number;
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly resourceGuid?: string;
}
export interface ExpressRoutePortsLocationBandwidths {
	readonly offerName?: string;
	readonly valueInGbps?: number;
}
export interface ExpressRoutePortsLocationPropertiesFormat {
	readonly address?: string;
	readonly availableBandwidths?: ExpressRoutePortsLocationBandwidths[];
	readonly contact?: string;
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface FirewallPolicyFilterRuleCollectionAction {
	readonly type?: "Allow" | "Deny";
}
export interface FirewallPolicyNatRuleCollectionAction {
	readonly type?: "DNAT";
}
export interface FirewallPolicyPropertiesFormat {
	readonly basePolicy?: SubResource;
	readonly childPolicies?: SubResource[];
	readonly dnsSettings?: DnsSettings;
	readonly firewalls?: SubResource[];
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly ruleCollectionGroups?: SubResource[];
	readonly threatIntelMode?: "Alert" | "Deny" | "Off";
	readonly threatIntelWhitelist?: FirewallPolicyThreatIntelWhitelist;
}
export interface FirewallPolicyRule {
	readonly description?: string;
	readonly name?: string;
}
export interface FirewallPolicyRuleApplicationProtocol {
	readonly port?: number;
	readonly protocolType?: "Http" | "Https";
}
export interface FirewallPolicyRuleCollection {
	readonly name?: string;
	readonly priority?: number;
}
export interface FirewallPolicyRuleCollectionGroupProperties {
	readonly priority?: number;
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly ruleCollections?: FirewallPolicyRuleCollection[];
}
export interface FirewallPolicyThreatIntelWhitelist {
	readonly fqdns?: string[];
	readonly ipAddresses?: string[];
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
export interface HttpHeader {
	readonly name?: string;
	readonly value?: string;
}
export interface HubIPAddresses {
	readonly privateIPAddress?: string;
	readonly publicIPs?: HubPublicIPAddresses;
}
export interface HubIPConfigurationPropertiesFormat {
	readonly privateIPAddress?: string;
	readonly privateIPAllocationMethod?: "Dynamic" | "Static";
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly publicIPAddress?: PublicIPAddress;
	readonly subnet?: Subnet;
}
export interface HubPublicIPAddresses {
	readonly addresses?: AzureFirewallPublicIPAddress[];
	readonly count?: number;
}
export interface HubRoute {
	readonly destinations: string[];
	readonly destinationType: string;
	readonly name: string;
	readonly nextHop: string;
	readonly nextHopType: string;
}
export interface HubRouteTableProperties {
	readonly associatedConnections?: string[];
	readonly labels?: string[];
	readonly propagatingConnections?: string[];
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly routes?: HubRoute[];
}
export interface HubVirtualNetworkConnectionProperties {
	readonly allowHubToRemoteVnetTransit?: boolean;
	readonly allowRemoteVnetToUseHubVnetGateways?: boolean;
	readonly enableInternetSecurity?: boolean;
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly remoteVirtualNetwork?: SubResource;
	readonly routingConfiguration?: RoutingConfiguration;
}
export interface InboundNatPool {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: InboundNatPoolPropertiesFormat;
	readonly type?: string;
}
export interface InboundNatPoolPropertiesFormat {
	readonly backendPort: number;
	readonly enableFloatingIP?: boolean;
	readonly enableTcpReset?: boolean;
	readonly frontendIPConfiguration?: SubResource;
	readonly frontendPortRangeEnd: number;
	readonly frontendPortRangeStart: number;
	readonly idleTimeoutInMinutes?: number;
	readonly protocol: "All" | "Tcp" | "Udp";
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface InboundNatRule {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: InboundNatRulePropertiesFormat;
	readonly type?: string;
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
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface InboundSecurityRuleProperties {
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly rules?: InboundSecurityRules[];
}
export interface InboundSecurityRules {
	readonly destinationPortRange?: number;
	readonly protocol?: "TCP" | "UDP";
	readonly sourceAddressPrefix?: string;
}
export interface IpAllocationPropertiesFormat {
	readonly allocationTags?: IpAllocationPropertiesFormatAllocationTags;
	readonly ipamAllocationId?: string;
	readonly prefix?: string;
	readonly prefixLength?: number;
	readonly prefixType?: "IPv4" | "IPv6";
	readonly subnet?: SubResource;
	readonly type?: "Hypernet" | "Undefined";
	readonly virtualNetwork?: SubResource;
}
export interface IpAllocationPropertiesFormatAllocationTags {
	readonly [key: string]: string;
}
export interface IPConfiguration {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: IPConfigurationPropertiesFormat;
}
export interface IPConfigurationBgpPeeringAddress {
	readonly customBgpIpAddresses?: string[];
	readonly defaultBgpIpAddresses?: string[];
	readonly ipconfigurationId?: string;
	readonly tunnelIpAddresses?: string[];
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
export interface IpGroupPropertiesFormat {
	readonly firewalls?: SubResource[];
	readonly ipAddresses?: string[];
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
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
export interface Ipv6CircuitConnectionConfig {
	readonly addressPrefix?: string;
	readonly circuitConnectionStatus?: "Connected" | "Connecting" | "Disconnected";
}
export interface Ipv6ExpressRouteCircuitPeeringConfig {
	readonly microsoftPeeringConfig?: ExpressRouteCircuitPeeringConfig;
	readonly primaryPeerAddressPrefix?: string;
	readonly routeFilter?: SubResource;
	readonly secondaryPeerAddressPrefix?: string;
	readonly state?: "Disabled" | "Enabled";
}
export interface LoadBalancerBackendAddress {
	readonly name?: string;
	readonly properties?: LoadBalancerBackendAddressPropertiesFormat;
}
export interface LoadBalancerBackendAddressPropertiesFormat {
	readonly ipAddress?: string;
	readonly networkInterfaceIPConfiguration?: SubResource;
	readonly virtualNetwork?: SubResource;
}
export interface LoadBalancerPropertiesFormat {
	readonly backendAddressPools?: BackendAddressPool[];
	readonly frontendIPConfigurations?: FrontendIPConfiguration[];
	readonly inboundNatPools?: InboundNatPool[];
	readonly inboundNatRules?: InboundNatRule[];
	readonly loadBalancingRules?: LoadBalancingRule[];
	readonly outboundRules?: OutboundRule[];
	readonly probes?: Probe[];
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
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
	readonly type?: string;
}
export interface LoadBalancingRulePropertiesFormat {
	readonly backendAddressPool?: SubResource;
	readonly backendPort?: number;
	readonly disableOutboundSnat?: boolean;
	readonly enableFloatingIP?: boolean;
	readonly enableTcpReset?: boolean;
	readonly frontendIPConfiguration?: SubResource;
	readonly frontendPort: number;
	readonly idleTimeoutInMinutes?: number;
	readonly loadDistribution?: "Default" | "SourceIP" | "SourceIPProtocol";
	readonly probe?: SubResource;
	readonly protocol: "All" | "Tcp" | "Udp";
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
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
	readonly fqdn?: string;
	readonly gatewayIpAddress?: string;
	readonly localNetworkAddressSpace?: AddressSpace;
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly resourceGuid?: string;
}
export interface ManagedRuleGroupOverride {
	readonly ruleGroupName: string;
	readonly rules?: ManagedRuleOverride[];
}
export interface ManagedRuleOverride {
	readonly ruleId: string;
	readonly state?: "Disabled";
}
export interface ManagedRulesDefinition {
	readonly exclusions?: OwaspCrsExclusionEntry[];
	readonly managedRuleSets: ManagedRuleSet[];
}
export interface ManagedRuleSet {
	readonly ruleGroupOverrides?: ManagedRuleGroupOverride[];
	readonly ruleSetType: string;
	readonly ruleSetVersion: string;
}
export interface ManagedServiceIdentity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "None" | "SystemAssigned" | "SystemAssigned, UserAssigned";
	readonly userAssignedIdentities?: ManagedServiceIdentityUserAssignedIdentities;
}
export interface ManagedServiceIdentityUserAssignedIdentities {
	readonly [key: string]: Components1Jq1T4ISchemasManagedserviceidentityPropertiesUserassignedidentitiesAdditionalproperties;
}
export interface MatchCondition {
	readonly matchValues: string[];
	readonly matchVariables: MatchVariable[];
	readonly negationConditon?: boolean;
	readonly operator:
		| "BeginsWith"
		| "Contains"
		| "EndsWith"
		| "Equal"
		| "GeoMatch"
		| "GreaterThan"
		| "GreaterThanOrEqual"
		| "IPMatch"
		| "LessThan"
		| "LessThanOrEqual"
		| "Regex";
	readonly transforms?: "HtmlEntityDecode" | "Lowercase" | "RemoveNulls" | "Trim" | "UrlDecode" | "UrlEncode"[];
}
export interface MatchVariable {
	readonly selector?: string;
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
export interface NetworkInterfaceIPConfigurationPrivateLinkConnectionProperties {
	readonly fqdns?: string[];
	readonly groupId?: string;
	readonly requiredMemberName?: string;
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
	readonly networkSecurityGroup?: NetworkSecurityGroup;
	readonly primary?: boolean;
	readonly privateEndpoint?: PrivateEndpoint;
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
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
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly virtualNetworkTap?: VirtualNetworkTap;
}
export interface NetworkProfilePropertiesFormat {
	readonly containerNetworkInterfaceConfigurations?: ContainerNetworkInterfaceConfiguration[];
	readonly containerNetworkInterfaces?: ContainerNetworkInterface[];
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly resourceGuid?: string;
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
export interface NetworkVirtualAppliancePropertiesFormat {
	readonly addressPrefix?: string;
	readonly bootStrapConfigurationBlobs?: string[];
	readonly cloudInitConfiguration?: string;
	readonly cloudInitConfigurationBlobs?: string[];
	readonly inboundSecurityRules?: SubResource[];
	readonly nvaSku?: VirtualApplianceSkuProperties;
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly virtualApplianceAsn?: number;
	readonly virtualApplianceNics?: VirtualApplianceNicProperties[];
	readonly virtualApplianceSites?: SubResource[];
	readonly virtualHub?: SubResource;
}
export interface NetworkVirtualApplianceSkuInstances {
	readonly instanceCount?: number;
	readonly scaleUnit?: string;
}
export interface NetworkVirtualApplianceSkuPropertiesFormat {
	readonly availableScaleUnits?: NetworkVirtualApplianceSkuInstances[];
	readonly availableVersions?: string[];
	readonly vendor?: string;
}
export interface NetworkWatcherPropertiesFormat {
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface O365BreakOutCategoryPolicies {
	readonly allow?: boolean;
	readonly default?: boolean;
	readonly optimize?: boolean;
}
export interface O365PolicyProperties {
	readonly breakOutCategories?: O365BreakOutCategoryPolicies;
}
export interface Office365PolicyProperties {
	readonly breakOutCategories?: BreakOutCategoryPolicies;
}
export interface OutboundRule {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: OutboundRulePropertiesFormat;
	readonly type?: string;
}
export interface OutboundRulePropertiesFormat {
	readonly allocatedOutboundPorts?: number;
	readonly backendAddressPool: SubResource;
	readonly enableTcpReset?: boolean;
	readonly frontendIPConfigurations: SubResource[];
	readonly idleTimeoutInMinutes?: number;
	readonly protocol: "All" | "Tcp" | "Udp";
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface OwaspCrsExclusionEntry {
	readonly matchVariable: "RequestArgNames" | "RequestCookieNames" | "RequestHeaderNames";
	readonly selector: string;
	readonly selectorMatchOperator: "Contains" | "EndsWith" | "Equals" | "Equalsany" | "StartsWith";
}
export interface P2SConnectionConfiguration {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: P2SConnectionConfigurationProperties;
}
export interface P2SConnectionConfigurationProperties {
	readonly enableInternetSecurity?: boolean;
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly routingConfiguration?: RoutingConfiguration;
	readonly vpnClientAddressPool?: AddressSpace;
}
export interface P2SVpnGateway {
	readonly etag?: string;
	readonly id?: string;
	readonly location?: string;
	readonly name?: string;
	readonly properties?: P2SVpnGatewayProperties;
	readonly tags?: ResourceTags;
	readonly type?: string;
}
export interface P2SVpnGatewayProperties {
	readonly customDnsServers?: string[];
	readonly p2SConnectionConfigurations?: P2SConnectionConfiguration[];
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly virtualHub?: SubResource;
	readonly vpnClientConnectionHealth?: VpnClientConnectionHealth;
	readonly vpnGatewayScaleUnit?: number;
	readonly vpnServerConfiguration?: SubResource;
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
export interface PeerExpressRouteCircuitConnection {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: PeerExpressRouteCircuitConnectionPropertiesFormat;
	readonly type?: string;
}
export interface PeerExpressRouteCircuitConnectionPropertiesFormat {
	readonly addressPrefix?: string;
	readonly authResourceGuid?: string;
	readonly circuitConnectionStatus?: "Connected" | "Connecting" | "Disconnected";
	readonly connectionName?: string;
	readonly expressRouteCircuitPeering?: SubResource;
	readonly peerExpressRouteCircuitPeering?: SubResource;
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface PolicySettings {
	readonly fileUploadLimitInMb?: number;
	readonly maxRequestBodySizeInKb?: number;
	readonly mode?: "Detection" | "Prevention";
	readonly requestBodyCheck?: boolean;
	readonly state?: "Disabled" | "Enabled";
}
export interface PrivateDnsZoneConfig {
	readonly name?: string;
	readonly properties?: PrivateDnsZonePropertiesFormat;
}
export interface PrivateDnsZoneGroupPropertiesFormat {
	readonly privateDnsZoneConfigs?: PrivateDnsZoneConfig[];
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface PrivateDnsZonePropertiesFormat {
	readonly privateDnsZoneId?: string;
	readonly recordSets?: RecordSet[];
}
export interface PrivateEndpoint {
	readonly etag?: string;
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
export interface PrivateEndpointProperties {
	readonly customDnsConfigs?: CustomDnsConfigPropertiesFormat[];
	readonly manualPrivateLinkServiceConnections?: PrivateLinkServiceConnection[];
	readonly networkInterfaces?: NetworkInterface[];
	readonly privateLinkServiceConnections?: PrivateLinkServiceConnection[];
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly subnet?: Subnet;
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
export interface Probe {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: ProbePropertiesFormat;
	readonly type?: string;
}
export interface ProbePropertiesFormat {
	readonly intervalInSeconds?: number;
	readonly loadBalancingRules?: SubResource[];
	readonly numberOfProbes?: number;
	readonly port: number;
	readonly protocol: "Http" | "Https" | "Tcp";
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly requestPath?: string;
}
export interface PropagatedRouteTable {
	readonly ids?: SubResource[];
	readonly labels?: string[];
}
export interface ProtocolCustomSettingsFormat {
	readonly protocol?: "Syn" | "Tcp" | "Udp";
	readonly sourceRateOverride?: string;
	readonly triggerRateOverride?: string;
	readonly triggerSensitivityOverride?: "Default" | "High" | "Low" | "Relaxed";
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
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly publicIPAddressVersion?: "IPv4" | "IPv6";
	readonly publicIPAllocationMethod?: "Dynamic" | "Static";
	readonly publicIPPrefix?: SubResource;
	readonly resourceGuid?: string;
}
export interface PublicIPAddressSku {
	readonly name?: "Basic" | "Standard";
}
export interface PublicIPPrefixPropertiesFormat {
	readonly customIPPrefix?: SubResource;
	readonly ipPrefix?: string;
	readonly ipTags?: IpTag[];
	readonly loadBalancerFrontendIpConfiguration?: SubResource;
	readonly prefixLength?: number;
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly publicIPAddresses?: ReferencedPublicIpAddress[];
	readonly publicIPAddressVersion?: "IPv4" | "IPv6";
	readonly resourceGuid?: string;
}
export interface PublicIPPrefixSku {
	readonly name?: "Standard";
}
export interface QosIpRange {
	readonly endIP?: string;
	readonly startIP?: string;
}
export interface QosPortRange {
	readonly end?: number;
	readonly start?: number;
}
export interface RadiusServer {
	readonly radiusServerAddress: string;
	readonly radiusServerScore?: number;
	readonly radiusServerSecret?: string;
}
export interface RecordSet {
	readonly fqdn?: string;
	readonly ipAddresses?: string[];
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly recordSetName?: string;
	readonly recordType?: string;
	readonly ttl?: number;
}
export interface ReferencedPublicIpAddress {
	readonly id?: string;
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
}
export interface RouteFilterPropertiesFormat {
	readonly ipv6Peerings?: ExpressRouteCircuitPeering[];
	readonly peerings?: ExpressRouteCircuitPeering[];
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
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
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly routeFilterRuleType: "Community";
}
export interface RoutePropertiesFormat {
	readonly addressPrefix?: string;
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
	readonly routes?: Route[];
	readonly subnets?: Subnet[];
}
export interface RoutingConfiguration {
	readonly associatedRouteTable?: SubResource;
	readonly propagatedRouteTables?: PropagatedRouteTable;
	readonly vnetRoutes?: VnetRoute;
}
export interface SecurityPartnerProviderPropertiesFormat {
	readonly connectionStatus?: "Connected" | "NotConnected" | "PartiallyConnected" | "Unknown";
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly securityProviderName?: "Checkpoint" | "IBoss" | "ZScaler";
	readonly virtualHub?: SubResource;
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
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly service?: string;
	readonly serviceResources?: string[];
}
export interface ServiceEndpointPolicyPropertiesFormat {
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly resourceGuid?: string;
	readonly serviceEndpointPolicyDefinitions?: ServiceEndpointPolicyDefinition[];
	readonly subnets?: Subnet[];
}
export interface ServiceEndpointPropertiesFormat {
	readonly locations?: string[];
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly service?: string;
}
export interface StaticRoute {
	readonly addressPrefixes?: string[];
	readonly name?: string;
	readonly nextHopIpAddress?: string;
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
	readonly ipAllocations?: SubResource[];
	readonly ipConfigurationProfiles?: IPConfigurationProfile[];
	readonly ipConfigurations?: IPConfiguration[];
	readonly natGateway?: SubResource;
	readonly networkSecurityGroup?: NetworkSecurityGroup;
	readonly privateEndpointNetworkPolicies?: string;
	readonly privateEndpoints?: PrivateEndpoint[];
	readonly privateLinkServiceNetworkPolicies?: string;
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
export interface TrafficSelectorPolicy {
	readonly localAddressRanges: string[];
	readonly remoteAddressRanges: string[];
}
export interface TunnelConnectionHealth {
	readonly connectionStatus?: "Connected" | "Connecting" | "NotConnected" | "Unknown";
	readonly egressBytesTransferred?: number;
	readonly ingressBytesTransferred?: number;
	readonly lastConnectionEstablishedUtcTime?: string;
	readonly tunnel?: string;
}
export interface VirtualApplianceNicProperties {
	readonly name?: string;
	readonly privateIpAddress?: string;
	readonly publicIpAddress?: string;
}
export interface VirtualApplianceSiteProperties {
	readonly addressPrefix?: string;
	readonly o365Policy?: Office365PolicyProperties;
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface VirtualApplianceSkuProperties {
	readonly bundledScaleUnit?: string;
	readonly marketPlaceVersion?: string;
	readonly vendor?: string;
}
export interface VirtualHubId {
	readonly id?: string;
}
export interface VirtualHubProperties {
	readonly addressPrefix?: string;
	readonly azureFirewall?: SubResource;
	readonly bgpConnections?: SubResource[];
	readonly enableVirtualRouterRoutePropogation?: boolean;
	readonly expressRouteGateway?: SubResource;
	readonly ipConfigurations?: SubResource[];
	readonly p2SVpnGateway?: SubResource;
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly routeTable?: VirtualHubRouteTable;
	readonly routingState?: "Failed" | "None" | "Provisioned" | "Provisioning";
	readonly securityPartnerProvider?: SubResource;
	readonly securityProviderName?: string;
	readonly sku?: string;
	readonly virtualHubRouteTableV2s?: VirtualHubRouteTableV2[];
	readonly virtualRouterAsn?: number;
	readonly virtualRouterIps?: string[];
	readonly virtualWan?: SubResource;
	readonly vpnGateway?: SubResource;
}
export interface VirtualHubRoute {
	readonly addressPrefixes?: string[];
	readonly nextHopIpAddress?: string;
}
export interface VirtualHubRouteTable {
	readonly routes?: VirtualHubRoute[];
}
export interface VirtualHubRouteTableV2 {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: VirtualHubRouteTableV2Properties;
}
export interface VirtualHubRouteTableV2Properties {
	readonly attachedConnections?: string[];
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly routes?: VirtualHubRouteV2[];
}
export interface VirtualHubRouteV2 {
	readonly destinations?: string[];
	readonly destinationType?: string;
	readonly nextHops?: string[];
	readonly nextHopType?: string;
}
export interface VirtualNetworkBgpCommunities {
	readonly regionalCommunity?: string;
	readonly virtualNetworkCommunity: string;
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
	readonly connectionProtocol?: "IKEv1" | "IKEv2";
	readonly connectionStatus?: "Connected" | "Connecting" | "NotConnected" | "Unknown";
	readonly connectionType: "ExpressRoute" | "IPsec" | "VPNClient" | "Vnet2Vnet";
	readonly dpdTimeoutSeconds?: number;
	readonly egressBytesTransferred?: number;
	readonly enableBgp?: boolean;
	readonly expressRouteGatewayBypass?: boolean;
	readonly ingressBytesTransferred?: number;
	readonly ipsecPolicies?: IpsecPolicy[];
	readonly localNetworkGateway2?: LocalNetworkGateway;
	readonly peer?: SubResource;
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly resourceGuid?: string;
	readonly routingWeight?: number;
	readonly sharedKey?: string;
	readonly trafficSelectorPolicies?: TrafficSelectorPolicy[];
	readonly tunnelConnectionStatus?: TunnelConnectionHealth[];
	readonly useLocalAzureIpAddress?: boolean;
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
	readonly privateIPAddress?: string;
	readonly privateIPAllocationMethod?: "Dynamic" | "Static";
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly publicIPAddress?: SubResource;
	readonly subnet?: SubResource;
}
export interface VirtualNetworkGatewayPropertiesFormat {
	readonly activeActive?: boolean;
	readonly bgpSettings?: BgpSettings;
	readonly customRoutes?: AddressSpace;
	readonly enableBgp?: boolean;
	readonly enableDnsForwarding?: boolean;
	readonly enablePrivateIpAddress?: boolean;
	readonly gatewayDefaultSite?: SubResource;
	readonly gatewayType?: "ExpressRoute" | "Vpn";
	readonly inboundDnsForwardingEndpoint?: string;
	readonly ipConfigurations?: VirtualNetworkGatewayIPConfiguration[];
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly resourceGuid?: string;
	readonly sku?: VirtualNetworkGatewaySku;
	readonly vpnClientConfiguration?: VpnClientConfiguration;
	readonly vpnGatewayGeneration?: "Generation1" | "Generation2" | "None";
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
		| "VpnGw3AZ"
		| "VpnGw4"
		| "VpnGw4AZ"
		| "VpnGw5"
		| "VpnGw5AZ";
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
		| "VpnGw3AZ"
		| "VpnGw4"
		| "VpnGw4AZ"
		| "VpnGw5"
		| "VpnGw5AZ";
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
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly remoteAddressSpace?: AddressSpace;
	readonly remoteBgpCommunities?: VirtualNetworkBgpCommunities;
	readonly remoteVirtualNetwork?: SubResource;
	readonly useRemoteGateways?: boolean;
}
export interface VirtualNetworkPropertiesFormat {
	readonly addressSpace?: AddressSpace;
	readonly bgpCommunities?: VirtualNetworkBgpCommunities;
	readonly ddosProtectionPlan?: SubResource;
	readonly dhcpOptions?: DhcpOptions;
	readonly enableDdosProtection?: boolean;
	readonly enableVmProtection?: boolean;
	readonly ipAllocations?: SubResource[];
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly resourceGuid?: string;
	readonly subnets?: Subnet[];
	readonly virtualNetworkPeerings?: VirtualNetworkPeering[];
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
export interface VirtualRouterPeeringProperties {
	readonly peerAsn?: number;
	readonly peerIp?: string;
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface VirtualRouterPropertiesFormat {
	readonly hostedGateway?: SubResource;
	readonly hostedSubnet?: SubResource;
	readonly peerings?: SubResource[];
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly virtualRouterAsn?: number;
	readonly virtualRouterIps?: string[];
}
export interface VirtualWanProperties {
	readonly allowBranchToBranchTraffic?: boolean;
	readonly allowVnetToVnetTraffic?: boolean;
	readonly disableVpnEncryption?: boolean;
	readonly office365LocalBreakoutCategory?: "All" | "None" | "Optimize" | "OptimizeAndAllow";
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly type?: string;
	readonly virtualHubs?: SubResource[];
	readonly vpnSites?: SubResource[];
}
export interface VnetRoute {
	readonly staticRoutes?: StaticRoute[];
}
export interface VpnClientConfiguration {
	readonly aadAudience?: string;
	readonly aadIssuer?: string;
	readonly aadTenant?: string;
	readonly radiusServerAddress?: string;
	readonly radiusServers?: RadiusServer[];
	readonly radiusServerSecret?: string;
	readonly vpnClientAddressPool?: AddressSpace;
	readonly vpnClientIpsecPolicies?: IpsecPolicy[];
	readonly vpnClientProtocols?: "IkeV2" | "OpenVPN" | "SSTP"[];
	readonly vpnClientRevokedCertificates?: VpnClientRevokedCertificate[];
	readonly vpnClientRootCertificates?: VpnClientRootCertificate[];
}
export interface VpnClientConnectionHealth {
	readonly allocatedIpAddresses?: string[];
	readonly totalEgressBytesTransferred?: number;
	readonly totalIngressBytesTransferred?: number;
	readonly vpnClientConnectionsCount?: number;
}
export interface VpnClientRevokedCertificate {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: VpnClientRevokedCertificatePropertiesFormat;
}
export interface VpnClientRevokedCertificatePropertiesFormat {
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly thumbprint?: string;
}
export interface VpnClientRootCertificate {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties: VpnClientRootCertificatePropertiesFormat;
}
export interface VpnClientRootCertificatePropertiesFormat {
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly publicCertData: string;
}
export interface VpnConnection {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: VpnConnectionProperties;
}
export interface VpnConnectionProperties {
	readonly connectionBandwidth?: number;
	readonly connectionStatus?: "Connected" | "Connecting" | "NotConnected" | "Unknown";
	readonly dpdTimeoutSeconds?: number;
	readonly egressBytesTransferred?: number;
	readonly enableBgp?: boolean;
	readonly enableInternetSecurity?: boolean;
	readonly enableRateLimiting?: boolean;
	readonly ingressBytesTransferred?: number;
	readonly ipsecPolicies?: IpsecPolicy[];
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly remoteVpnSite?: SubResource;
	readonly routingConfiguration?: RoutingConfiguration;
	readonly routingWeight?: number;
	readonly sharedKey?: string;
	readonly useLocalAzureIpAddress?: boolean;
	readonly usePolicyBasedTrafficSelectors?: boolean;
	readonly vpnConnectionProtocolType?: "IKEv1" | "IKEv2";
	readonly vpnLinkConnections?: VpnSiteLinkConnection[];
}
export interface VpnGatewayIpConfiguration {
	readonly id?: string;
	readonly privateIpAddress?: string;
	readonly publicIpAddress?: string;
}
export interface VpnGatewayProperties {
	readonly bgpSettings?: BgpSettings;
	readonly connections?: VpnConnection[];
	readonly ipConfigurations?: VpnGatewayIpConfiguration[];
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly virtualHub?: SubResource;
	readonly vpnGatewayScaleUnit?: number;
}
export interface VpnLinkBgpSettings {
	readonly asn?: number;
	readonly bgpPeeringAddress?: string;
}
export interface VpnLinkProviderProperties {
	readonly linkProviderName?: string;
	readonly linkSpeedInMbps?: number;
}
export interface VpnServerConfigRadiusClientRootCertificate {
	readonly name?: string;
	readonly thumbprint?: string;
}
export interface VpnServerConfigRadiusServerRootCertificate {
	readonly name?: string;
	readonly publicCertData?: string;
}
export interface VpnServerConfigurationProperties {
	readonly aadAuthenticationParameters?: AadAuthenticationParameters;
	readonly etag?: string;
	readonly name?: string;
	readonly p2SVpnGateways?: P2SVpnGateway[];
	readonly provisioningState?: string;
	readonly radiusClientRootCertificates?: VpnServerConfigRadiusClientRootCertificate[];
	readonly radiusServerAddress?: string;
	readonly radiusServerRootCertificates?: VpnServerConfigRadiusServerRootCertificate[];
	readonly radiusServers?: RadiusServer[];
	readonly radiusServerSecret?: string;
	readonly vpnAuthenticationTypes?: "AAD" | "Certificate" | "Radius"[];
	readonly vpnClientIpsecPolicies?: IpsecPolicy[];
	readonly vpnClientRevokedCertificates?: VpnServerConfigVpnClientRevokedCertificate[];
	readonly vpnClientRootCertificates?: VpnServerConfigVpnClientRootCertificate[];
	readonly vpnProtocols?: "IkeV2" | "OpenVPN"[];
}
export interface VpnServerConfigVpnClientRevokedCertificate {
	readonly name?: string;
	readonly thumbprint?: string;
}
export interface VpnServerConfigVpnClientRootCertificate {
	readonly name?: string;
	readonly publicCertData?: string;
}
export interface VpnSiteLink {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: VpnSiteLinkProperties;
	readonly type?: string;
}
export interface VpnSiteLinkConnection {
	readonly etag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: VpnSiteLinkConnectionProperties;
	readonly type?: string;
}
export interface VpnSiteLinkConnectionProperties {
	readonly connectionBandwidth?: number;
	readonly connectionStatus?: "Connected" | "Connecting" | "NotConnected" | "Unknown";
	readonly egressBytesTransferred?: number;
	readonly enableBgp?: boolean;
	readonly enableRateLimiting?: boolean;
	readonly ingressBytesTransferred?: number;
	readonly ipsecPolicies?: IpsecPolicy[];
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly routingWeight?: number;
	readonly sharedKey?: string;
	readonly useLocalAzureIpAddress?: boolean;
	readonly usePolicyBasedTrafficSelectors?: boolean;
	readonly vpnConnectionProtocolType?: "IKEv1" | "IKEv2";
	readonly vpnSiteLink?: SubResource;
}
export interface VpnSiteLinkProperties {
	readonly bgpProperties?: VpnLinkBgpSettings;
	readonly fqdn?: string;
	readonly ipAddress?: string;
	readonly linkProperties?: VpnLinkProviderProperties;
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface VpnSiteProperties {
	readonly addressSpace?: AddressSpace;
	readonly bgpProperties?: BgpSettings;
	readonly deviceProperties?: DeviceProperties;
	readonly ipAddress?: string;
	readonly isSecuritySite?: boolean;
	readonly o365Policy?: O365PolicyProperties;
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly siteKey?: string;
	readonly virtualWan?: SubResource;
	readonly vpnSiteLinks?: VpnSiteLink[];
}
export interface WebApplicationFirewallCustomRule {
	readonly action: "Allow" | "Block" | "Log";
	readonly etag?: string;
	readonly matchConditions: MatchCondition[];
	readonly name?: string;
	readonly priority: number;
	readonly ruleType: "Invalid" | "MatchRule";
}
export interface WebApplicationFirewallPolicyPropertiesFormat {
	readonly applicationGateways?: ApplicationGateway[];
	readonly customRules?: WebApplicationFirewallCustomRule[];
	readonly httpListeners?: SubResource[];
	readonly managedRules: ManagedRulesDefinition;
	readonly pathBasedRules?: SubResource[];
	readonly policySettings?: PolicySettings;
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly resourceState?: "Creating" | "Deleting" | "Disabled" | "Disabling" | "Enabled" | "Enabling";
}
export default {
	applicationGatewayAvailableSslOptions: applicationGatewayAvailableSslOptions,
	"applicationGatewayAvailableSslOptions/predefinedPolicies": applicationGatewayAvailableSslOptions_predefinedPolicies,
	applicationGateways: applicationGateways,
	"applicationGateways/privateEndpointConnections": applicationGateways_privateEndpointConnections,
	ApplicationGatewayWebApplicationFirewallPolicies: ApplicationGatewayWebApplicationFirewallPolicies,
	applicationSecurityGroups: applicationSecurityGroups,
	azureFirewalls: azureFirewalls,
	bastionHosts: bastionHosts,
	connections: connections,
	customIpPrefixes: customIpPrefixes,
	ddosCustomPolicies: ddosCustomPolicies,
	ddosProtectionPlans: ddosProtectionPlans,
	dscpConfigurations: dscpConfigurations,
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
	firewallPolicies: firewallPolicies,
	"firewallPolicies/ruleCollectionGroups": firewallPolicies_ruleCollectionGroups,
	IpAllocations: IpAllocations,
	ipGroups: ipGroups,
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
	networkVirtualAppliances: networkVirtualAppliances,
	"networkVirtualAppliances/inboundSecurityRules": networkVirtualAppliances_inboundSecurityRules,
	"networkVirtualAppliances/virtualApplianceSites": networkVirtualAppliances_virtualApplianceSites,
	networkVirtualApplianceSkus: networkVirtualApplianceSkus,
	networkWatchers: networkWatchers,
	"networkWatchers/connectionMonitors": networkWatchers_connectionMonitors,
	"networkWatchers/flowLogs": networkWatchers_flowLogs,
	"networkWatchers/packetCaptures": networkWatchers_packetCaptures,
	p2svpnGateways: p2svpnGateways,
	privateEndpoints: privateEndpoints,
	"privateEndpoints/privateDnsZoneGroups": privateEndpoints_privateDnsZoneGroups,
	privateLinkServices: privateLinkServices,
	"privateLinkServices/privateEndpointConnections": privateLinkServices_privateEndpointConnections,
	publicIPAddresses: publicIPAddresses,
	publicIPPrefixes: publicIPPrefixes,
	routeFilters: routeFilters,
	"routeFilters/routeFilterRules": routeFilters_routeFilterRules,
	routeTables: routeTables,
	"routeTables/routes": routeTables_routes,
	securityPartnerProviders: securityPartnerProviders,
	serviceEndpointPolicies: serviceEndpointPolicies,
	"serviceEndpointPolicies/serviceEndpointPolicyDefinitions": serviceEndpointPolicies_serviceEndpointPolicyDefinitions,
	virtualHubs: virtualHubs,
	"virtualHubs/bgpConnections": virtualHubs_bgpConnections,
	"virtualHubs/hubRouteTables": virtualHubs_hubRouteTables,
	"virtualHubs/hubVirtualNetworkConnections": virtualHubs_hubVirtualNetworkConnections,
	"virtualHubs/ipConfigurations": virtualHubs_ipConfigurations,
	"virtualHubs/routeTables": virtualHubs_routeTables,
	virtualNetworkGateways: virtualNetworkGateways,
	virtualNetworks: virtualNetworks,
	"virtualNetworks/subnets": virtualNetworks_subnets,
	"virtualNetworks/virtualNetworkPeerings": virtualNetworks_virtualNetworkPeerings,
	virtualNetworkTaps: virtualNetworkTaps,
	virtualRouters: virtualRouters,
	"virtualRouters/peerings": virtualRouters_peerings,
	virtualWans: virtualWans,
	vpnGateways: vpnGateways,
	"vpnGateways/vpnConnections": vpnGateways_vpnConnections,
	"vpnGateways/vpnConnections/vpnLinkConnections": vpnGateways_vpnConnections_vpnLinkConnections,
	vpnServerConfigurations: vpnServerConfigurations,
	vpnSites: vpnSites,
	"vpnSites/vpnSiteLinks": vpnSites_vpnSiteLinks,
};

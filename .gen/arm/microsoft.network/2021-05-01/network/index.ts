import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class applicationGatewayAvailableSslOptions
	extends ArmResource<applicationGatewayAvailableSslOptionsComponentInputs>
	implements applicationGatewayAvailableSslOptionsComponentOutputs
{
	constructor(entity: ADKEntity, options: applicationGatewayAvailableSslOptionsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/applicationGatewayAvailableSslOptions", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/applicationGatewayAvailableSslOptions";
}
export interface applicationGatewayAvailableSslOptionsComponentOutputs {
	readonly apiVersion: "2021-05-01";
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
			"2021-05-01",
			options,
		);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/applicationGatewayAvailableSslOptions/predefinedPolicies";
}
export interface applicationGatewayAvailableSslOptions_predefinedPoliciesComponentOutputs {
	readonly apiVersion: "2021-05-01";
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
		super(entity, options.name, "Microsoft.Network/applicationGateways", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/applicationGateways";
}
export interface applicationGatewaysComponentOutputs {
	readonly apiVersion: "2021-05-01";
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
export class applicationGateways_privateEndpointConnections
	extends ArmResource<applicationGateways_privateEndpointConnectionsComponentInputs>
	implements applicationGateways_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: applicationGateways_privateEndpointConnectionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Network/applicationGateways/privateEndpointConnections",
			"2021-05-01",
			options,
		);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/applicationGateways/privateEndpointConnections";
}
export interface applicationGateways_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Network/applicationGateways/privateEndpointConnections";
}
export interface applicationGateways_privateEndpointConnectionsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: ApplicationGatewayPrivateEndpointConnectionProperties | undefined;
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
			"2021-05-01",
			options,
		);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/ApplicationGatewayWebApplicationFirewallPolicies";
}
export interface ApplicationGatewayWebApplicationFirewallPoliciesComponentOutputs {
	readonly apiVersion: "2021-05-01";
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
		super(entity, options.name, "Microsoft.Network/applicationSecurityGroups", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/applicationSecurityGroups";
}
export interface applicationSecurityGroupsComponentOutputs {
	readonly apiVersion: "2021-05-01";
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
		super(entity, options.name, "Microsoft.Network/azureFirewalls", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/azureFirewalls";
}
export interface azureFirewallsComponentOutputs {
	readonly apiVersion: "2021-05-01";
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
		super(entity, options.name, "Microsoft.Network/bastionHosts", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/bastionHosts";
}
export interface bastionHostsComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Network/bastionHosts";
}
export interface bastionHostsComponentInputs {
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: BastionHostPropertiesFormat | undefined;
	readonly sku?: Sku | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class connections extends ArmResource<connectionsComponentInputs> implements connectionsComponentOutputs {
	constructor(entity: ADKEntity, options: connectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/connections", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/connections";
}
export interface connectionsComponentOutputs {
	readonly apiVersion: "2021-05-01";
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
export class customIpPrefixes
	extends ArmResource<customIpPrefixesComponentInputs>
	implements customIpPrefixesComponentOutputs
{
	constructor(entity: ADKEntity, options: customIpPrefixesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/customIpPrefixes", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/customIpPrefixes";
}
export interface customIpPrefixesComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Network/customIpPrefixes";
}
export interface customIpPrefixesComponentInputs {
	readonly etag?: string | undefined;
	readonly extendedLocation?: ExtendedLocation | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: CustomIpPrefixPropertiesFormat | undefined;
	readonly tags?: ResourceTags | undefined;
	readonly zones?: string[] | undefined;
}
export class ddosCustomPolicies
	extends ArmResource<ddosCustomPoliciesComponentInputs>
	implements ddosCustomPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: ddosCustomPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/ddosCustomPolicies", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/ddosCustomPolicies";
}
export interface ddosCustomPoliciesComponentOutputs {
	readonly apiVersion: "2021-05-01";
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
		super(entity, options.name, "Microsoft.Network/ddosProtectionPlans", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/ddosProtectionPlans";
}
export interface ddosProtectionPlansComponentOutputs {
	readonly apiVersion: "2021-05-01";
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
export class dscpConfigurations
	extends ArmResource<dscpConfigurationsComponentInputs>
	implements dscpConfigurationsComponentOutputs
{
	constructor(entity: ADKEntity, options: dscpConfigurationsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/dscpConfigurations", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/dscpConfigurations";
}
export interface dscpConfigurationsComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Network/dscpConfigurations";
}
export interface dscpConfigurationsComponentInputs {
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: DscpConfigurationPropertiesFormat | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class expressRouteCircuits
	extends ArmResource<expressRouteCircuitsComponentInputs>
	implements expressRouteCircuitsComponentOutputs
{
	constructor(entity: ADKEntity, options: expressRouteCircuitsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/expressRouteCircuits", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/expressRouteCircuits";
}
export interface expressRouteCircuitsComponentOutputs {
	readonly apiVersion: "2021-05-01";
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
		super(entity, options.name, "Microsoft.Network/expressRouteCircuits/authorizations", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/expressRouteCircuits/authorizations";
}
export interface expressRouteCircuits_authorizationsComponentOutputs {
	readonly apiVersion: "2021-05-01";
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
		super(entity, options.name, "Microsoft.Network/expressRouteCircuits/peerings", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/expressRouteCircuits/peerings";
}
export interface expressRouteCircuits_peeringsComponentOutputs {
	readonly apiVersion: "2021-05-01";
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
		super(entity, options.name, "Microsoft.Network/expressRouteCircuits/peerings/connections", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/expressRouteCircuits/peerings/connections";
}
export interface expressRouteCircuits_peerings_connectionsComponentOutputs {
	readonly apiVersion: "2021-05-01";
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
			"2021-05-01",
			options,
		);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/expressRouteCircuits/peerings/peerConnections";
}
export interface expressRouteCircuits_peerings_peerConnectionsComponentOutputs {
	readonly apiVersion: "2021-05-01";
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
		super(entity, options.name, "Microsoft.Network/expressRouteCrossConnections", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/expressRouteCrossConnections";
}
export interface expressRouteCrossConnectionsComponentOutputs {
	readonly apiVersion: "2021-05-01";
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
		super(entity, options.name, "Microsoft.Network/expressRouteCrossConnections/peerings", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/expressRouteCrossConnections/peerings";
}
export interface expressRouteCrossConnections_peeringsComponentOutputs {
	readonly apiVersion: "2021-05-01";
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
		super(entity, options.name, "Microsoft.Network/expressRouteGateways", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/expressRouteGateways";
}
export interface expressRouteGatewaysComponentOutputs {
	readonly apiVersion: "2021-05-01";
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
			"2021-05-01",
			options,
		);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/expressRouteGateways/expressRouteConnections";
}
export interface expressRouteGateways_expressRouteConnectionsComponentOutputs {
	readonly apiVersion: "2021-05-01";
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
		super(entity, options.name, "Microsoft.Network/ExpressRoutePorts", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/ExpressRoutePorts";
}
export interface ExpressRoutePortsComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Network/ExpressRoutePorts";
}
export interface ExpressRoutePortsComponentInputs {
	readonly etag?: string | undefined;
	readonly identity?: ManagedServiceIdentity | undefined;
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
		super(entity, options.name, "Microsoft.Network/ExpressRoutePorts/links", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/ExpressRoutePorts/links";
}
export interface ExpressRoutePorts_linksComponentOutputs {
	readonly apiVersion: "2021-05-01";
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
		super(entity, options.name, "Microsoft.Network/ExpressRoutePortsLocations", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/ExpressRoutePortsLocations";
}
export interface ExpressRoutePortsLocationsComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Network/ExpressRoutePortsLocations";
}
export interface ExpressRoutePortsLocationsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ExpressRoutePortsLocationPropertiesFormat | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class firewallPolicies
	extends ArmResource<firewallPoliciesComponentInputs>
	implements firewallPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: firewallPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/firewallPolicies", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/firewallPolicies";
}
export interface firewallPoliciesComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Network/firewallPolicies";
}
export interface firewallPoliciesComponentInputs {
	readonly etag?: string | undefined;
	readonly identity?: ManagedServiceIdentity | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: FirewallPolicyPropertiesFormat | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class firewallPolicies_ruleCollectionGroups
	extends ArmResource<firewallPolicies_ruleCollectionGroupsComponentInputs>
	implements firewallPolicies_ruleCollectionGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: firewallPolicies_ruleCollectionGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/firewallPolicies/ruleCollectionGroups", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/firewallPolicies/ruleCollectionGroups";
}
export interface firewallPolicies_ruleCollectionGroupsComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Network/firewallPolicies/ruleCollectionGroups";
}
export interface firewallPolicies_ruleCollectionGroupsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: FirewallPolicyRuleCollectionGroupProperties | undefined;
}
export class firewallPolicies_signatureOverrides
	extends ArmResource<firewallPolicies_signatureOverridesComponentInputs>
	implements firewallPolicies_signatureOverridesComponentOutputs
{
	constructor(entity: ADKEntity, options: firewallPolicies_signatureOverridesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/firewallPolicies/signatureOverrides", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/firewallPolicies/signatureOverrides";
}
export interface firewallPolicies_signatureOverridesComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Network/firewallPolicies/signatureOverrides";
}
export interface firewallPolicies_signatureOverridesComponentInputs {
	readonly name: string;
	readonly properties?: SignaturesOverridesProperties | undefined;
}
export class IpAllocations extends ArmResource<IpAllocationsComponentInputs> implements IpAllocationsComponentOutputs {
	constructor(entity: ADKEntity, options: IpAllocationsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/IpAllocations", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/IpAllocations";
}
export interface IpAllocationsComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Network/IpAllocations";
}
export interface IpAllocationsComponentInputs {
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: IpAllocationPropertiesFormat | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class ipGroups extends ArmResource<ipGroupsComponentInputs> implements ipGroupsComponentOutputs {
	constructor(entity: ADKEntity, options: ipGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/ipGroups", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/ipGroups";
}
export interface ipGroupsComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Network/ipGroups";
}
export interface ipGroupsComponentInputs {
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: IpGroupPropertiesFormat | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class loadBalancers extends ArmResource<loadBalancersComponentInputs> implements loadBalancersComponentOutputs {
	constructor(entity: ADKEntity, options: loadBalancersComponentInputs) {
		super(entity, options.name, "Microsoft.Network/loadBalancers", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/loadBalancers";
}
export interface loadBalancersComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Network/loadBalancers";
}
export interface loadBalancersComponentInputs {
	readonly etag?: string | undefined;
	readonly extendedLocation?: ExtendedLocation | undefined;
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
		super(entity, options.name, "Microsoft.Network/loadBalancers/backendAddressPools", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/loadBalancers/backendAddressPools";
}
export interface loadBalancers_backendAddressPoolsComponentOutputs {
	readonly apiVersion: "2021-05-01";
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
		super(entity, options.name, "Microsoft.Network/loadBalancers/frontendIPConfigurations", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/loadBalancers/frontendIPConfigurations";
}
export interface loadBalancers_frontendIPConfigurationsComponentOutputs {
	readonly apiVersion: "2021-05-01";
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
		super(entity, options.name, "Microsoft.Network/loadBalancers/inboundNatRules", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/loadBalancers/inboundNatRules";
}
export interface loadBalancers_inboundNatRulesComponentOutputs {
	readonly apiVersion: "2021-05-01";
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
		super(entity, options.name, "Microsoft.Network/loadBalancers/loadBalancingRules", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/loadBalancers/loadBalancingRules";
}
export interface loadBalancers_loadBalancingRulesComponentOutputs {
	readonly apiVersion: "2021-05-01";
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
		super(entity, options.name, "Microsoft.Network/loadBalancers/outboundRules", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/loadBalancers/outboundRules";
}
export interface loadBalancers_outboundRulesComponentOutputs {
	readonly apiVersion: "2021-05-01";
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
		super(entity, options.name, "Microsoft.Network/loadBalancers/probes", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/loadBalancers/probes";
}
export interface loadBalancers_probesComponentOutputs {
	readonly apiVersion: "2021-05-01";
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
		super(entity, options.name, "Microsoft.Network/localNetworkGateways", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/localNetworkGateways";
}
export interface localNetworkGatewaysComponentOutputs {
	readonly apiVersion: "2021-05-01";
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
		super(entity, options.name, "Microsoft.Network/natGateways", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/natGateways";
}
export interface natGatewaysComponentOutputs {
	readonly apiVersion: "2021-05-01";
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
		super(entity, options.name, "Microsoft.Network/networkInterfaces", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkInterfaces";
}
export interface networkInterfacesComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Network/networkInterfaces";
}
export interface networkInterfacesComponentInputs {
	readonly etag?: string | undefined;
	readonly extendedLocation?: ExtendedLocation | undefined;
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
		super(entity, options.name, "Microsoft.Network/networkInterfaces/ipConfigurations", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkInterfaces/ipConfigurations";
}
export interface networkInterfaces_ipConfigurationsComponentOutputs {
	readonly apiVersion: "2021-05-01";
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
		super(entity, options.name, "Microsoft.Network/networkInterfaces/tapConfigurations", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkInterfaces/tapConfigurations";
}
export interface networkInterfaces_tapConfigurationsComponentOutputs {
	readonly apiVersion: "2021-05-01";
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
		super(entity, options.name, "Microsoft.Network/networkProfiles", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkProfiles";
}
export interface networkProfilesComponentOutputs {
	readonly apiVersion: "2021-05-01";
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
		super(entity, options.name, "Microsoft.Network/networkSecurityGroups", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkSecurityGroups";
}
export interface networkSecurityGroupsComponentOutputs {
	readonly apiVersion: "2021-05-01";
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
		super(entity, options.name, "Microsoft.Network/networkSecurityGroups/defaultSecurityRules", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkSecurityGroups/defaultSecurityRules";
}
export interface networkSecurityGroups_defaultSecurityRulesComponentOutputs {
	readonly apiVersion: "2021-05-01";
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
		super(entity, options.name, "Microsoft.Network/networkSecurityGroups/securityRules", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkSecurityGroups/securityRules";
}
export interface networkSecurityGroups_securityRulesComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Network/networkSecurityGroups/securityRules";
}
export interface networkSecurityGroups_securityRulesComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: SecurityRulePropertiesFormat | undefined;
}
export class networkVirtualAppliances
	extends ArmResource<networkVirtualAppliancesComponentInputs>
	implements networkVirtualAppliancesComponentOutputs
{
	constructor(entity: ADKEntity, options: networkVirtualAppliancesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/networkVirtualAppliances", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkVirtualAppliances";
}
export interface networkVirtualAppliancesComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Network/networkVirtualAppliances";
}
export interface networkVirtualAppliancesComponentInputs {
	readonly etag?: string | undefined;
	readonly identity?: ManagedServiceIdentity | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: NetworkVirtualAppliancePropertiesFormat | undefined;
	readonly tags?: ResourceTags | undefined;
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
			"2021-05-01",
			options,
		);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkVirtualAppliances/inboundSecurityRules";
}
export interface networkVirtualAppliances_inboundSecurityRulesComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Network/networkVirtualAppliances/inboundSecurityRules";
}
export interface networkVirtualAppliances_inboundSecurityRulesComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: InboundSecurityRuleProperties | undefined;
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
			"2021-05-01",
			options,
		);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkVirtualAppliances/virtualApplianceSites";
}
export interface networkVirtualAppliances_virtualApplianceSitesComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Network/networkVirtualAppliances/virtualApplianceSites";
}
export interface networkVirtualAppliances_virtualApplianceSitesComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: VirtualApplianceSiteProperties | undefined;
}
export class networkVirtualApplianceSkus
	extends ArmResource<networkVirtualApplianceSkusComponentInputs>
	implements networkVirtualApplianceSkusComponentOutputs
{
	constructor(entity: ADKEntity, options: networkVirtualApplianceSkusComponentInputs) {
		super(entity, options.name, "Microsoft.Network/networkVirtualApplianceSkus", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkVirtualApplianceSkus";
}
export interface networkVirtualApplianceSkusComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Network/networkVirtualApplianceSkus";
}
export interface networkVirtualApplianceSkusComponentInputs {
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: NetworkVirtualApplianceSkuPropertiesFormat | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class networkWatchers
	extends ArmResource<networkWatchersComponentInputs>
	implements networkWatchersComponentOutputs
{
	constructor(entity: ADKEntity, options: networkWatchersComponentInputs) {
		super(entity, options.name, "Microsoft.Network/networkWatchers", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkWatchers";
}
export interface networkWatchersComponentOutputs {
	readonly apiVersion: "2021-05-01";
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
		super(entity, options.name, "Microsoft.Network/networkWatchers/connectionMonitors", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkWatchers/connectionMonitors";
}
export interface networkWatchers_connectionMonitorsComponentOutputs {
	readonly apiVersion: "2021-05-01";
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
export class networkWatchers_flowLogs
	extends ArmResource<networkWatchers_flowLogsComponentInputs>
	implements networkWatchers_flowLogsComponentOutputs
{
	constructor(entity: ADKEntity, options: networkWatchers_flowLogsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/networkWatchers/flowLogs", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkWatchers/flowLogs";
}
export interface networkWatchers_flowLogsComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Network/networkWatchers/flowLogs";
}
export interface networkWatchers_flowLogsComponentInputs {
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: FlowLogPropertiesFormat | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class networkWatchers_packetCaptures
	extends ArmResource<networkWatchers_packetCapturesComponentInputs>
	implements networkWatchers_packetCapturesComponentOutputs
{
	constructor(entity: ADKEntity, options: networkWatchers_packetCapturesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/networkWatchers/packetCaptures", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkWatchers/packetCaptures";
}
export interface networkWatchers_packetCapturesComponentOutputs {
	readonly apiVersion: "2021-05-01";
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
		super(entity, options.name, "Microsoft.Network/p2svpnGateways", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/p2svpnGateways";
}
export interface p2svpnGatewaysComponentOutputs {
	readonly apiVersion: "2021-05-01";
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
		super(entity, options.name, "Microsoft.Network/privateEndpoints", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/privateEndpoints";
}
export interface privateEndpointsComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Network/privateEndpoints";
}
export interface privateEndpointsComponentInputs {
	readonly etag?: string | undefined;
	readonly extendedLocation?: ExtendedLocation | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: PrivateEndpointProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class privateEndpoints_privateDnsZoneGroups
	extends ArmResource<privateEndpoints_privateDnsZoneGroupsComponentInputs>
	implements privateEndpoints_privateDnsZoneGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: privateEndpoints_privateDnsZoneGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/privateEndpoints/privateDnsZoneGroups", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/privateEndpoints/privateDnsZoneGroups";
}
export interface privateEndpoints_privateDnsZoneGroupsComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Network/privateEndpoints/privateDnsZoneGroups";
}
export interface privateEndpoints_privateDnsZoneGroupsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: PrivateDnsZoneGroupPropertiesFormat | undefined;
}
export class privateLinkServices
	extends ArmResource<privateLinkServicesComponentInputs>
	implements privateLinkServicesComponentOutputs
{
	constructor(entity: ADKEntity, options: privateLinkServicesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/privateLinkServices", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/privateLinkServices";
}
export interface privateLinkServicesComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Network/privateLinkServices";
}
export interface privateLinkServicesComponentInputs {
	readonly etag?: string | undefined;
	readonly extendedLocation?: ExtendedLocation | undefined;
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
			"2021-05-01",
			options,
		);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/privateLinkServices/privateEndpointConnections";
}
export interface privateLinkServices_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2021-05-01";
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
		super(entity, options.name, "Microsoft.Network/publicIPAddresses", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/publicIPAddresses";
}
export interface publicIPAddressesComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Network/publicIPAddresses";
}
export interface publicIPAddressesComponentInputs {
	readonly etag?: string | undefined;
	readonly extendedLocation?: ExtendedLocation | undefined;
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
		super(entity, options.name, "Microsoft.Network/publicIPPrefixes", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/publicIPPrefixes";
}
export interface publicIPPrefixesComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Network/publicIPPrefixes";
}
export interface publicIPPrefixesComponentInputs {
	readonly etag?: string | undefined;
	readonly extendedLocation?: ExtendedLocation | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: PublicIPPrefixPropertiesFormat | undefined;
	readonly sku?: PublicIPPrefixSku | undefined;
	readonly tags?: ResourceTags | undefined;
	readonly zones?: string[] | undefined;
}
export class routeFilters extends ArmResource<routeFiltersComponentInputs> implements routeFiltersComponentOutputs {
	constructor(entity: ADKEntity, options: routeFiltersComponentInputs) {
		super(entity, options.name, "Microsoft.Network/routeFilters", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/routeFilters";
}
export interface routeFiltersComponentOutputs {
	readonly apiVersion: "2021-05-01";
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
		super(entity, options.name, "Microsoft.Network/routeFilters/routeFilterRules", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/routeFilters/routeFilterRules";
}
export interface routeFilters_routeFilterRulesComponentOutputs {
	readonly apiVersion: "2021-05-01";
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
		super(entity, options.name, "Microsoft.Network/routeTables", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/routeTables";
}
export interface routeTablesComponentOutputs {
	readonly apiVersion: "2021-05-01";
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
		super(entity, options.name, "Microsoft.Network/routeTables/routes", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/routeTables/routes";
}
export interface routeTables_routesComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Network/routeTables/routes";
}
export interface routeTables_routesComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: RoutePropertiesFormat | undefined;
}
export class securityPartnerProviders
	extends ArmResource<securityPartnerProvidersComponentInputs>
	implements securityPartnerProvidersComponentOutputs
{
	constructor(entity: ADKEntity, options: securityPartnerProvidersComponentInputs) {
		super(entity, options.name, "Microsoft.Network/securityPartnerProviders", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/securityPartnerProviders";
}
export interface securityPartnerProvidersComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Network/securityPartnerProviders";
}
export interface securityPartnerProvidersComponentInputs {
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: SecurityPartnerProviderPropertiesFormat | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class serviceEndpointPolicies
	extends ArmResource<serviceEndpointPoliciesComponentInputs>
	implements serviceEndpointPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: serviceEndpointPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/serviceEndpointPolicies", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/serviceEndpointPolicies";
}
export interface serviceEndpointPoliciesComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Network/serviceEndpointPolicies";
}
export interface serviceEndpointPoliciesComponentInputs {
	readonly etag?: string | undefined;
	readonly kind?: string | undefined;
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
			"2021-05-01",
			options,
		);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/serviceEndpointPolicies/serviceEndpointPolicyDefinitions";
}
export interface serviceEndpointPolicies_serviceEndpointPolicyDefinitionsComponentOutputs {
	readonly apiVersion: "2021-05-01";
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
		super(entity, options.name, "Microsoft.Network/virtualHubs", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/virtualHubs";
}
export interface virtualHubsComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Network/virtualHubs";
}
export interface virtualHubsComponentInputs {
	readonly etag?: string | undefined;
	readonly kind?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: VirtualHubProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class virtualHubs_bgpConnections
	extends ArmResource<virtualHubs_bgpConnectionsComponentInputs>
	implements virtualHubs_bgpConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualHubs_bgpConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/virtualHubs/bgpConnections", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/virtualHubs/bgpConnections";
}
export interface virtualHubs_bgpConnectionsComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Network/virtualHubs/bgpConnections";
}
export interface virtualHubs_bgpConnectionsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: BgpConnectionProperties | undefined;
}
export class virtualHubs_hubRouteTables
	extends ArmResource<virtualHubs_hubRouteTablesComponentInputs>
	implements virtualHubs_hubRouteTablesComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualHubs_hubRouteTablesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/virtualHubs/hubRouteTables", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/virtualHubs/hubRouteTables";
}
export interface virtualHubs_hubRouteTablesComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Network/virtualHubs/hubRouteTables";
}
export interface virtualHubs_hubRouteTablesComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: HubRouteTableProperties | undefined;
}
export class virtualHubs_hubVirtualNetworkConnections
	extends ArmResource<virtualHubs_hubVirtualNetworkConnectionsComponentInputs>
	implements virtualHubs_hubVirtualNetworkConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualHubs_hubVirtualNetworkConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/virtualHubs/hubVirtualNetworkConnections", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/virtualHubs/hubVirtualNetworkConnections";
}
export interface virtualHubs_hubVirtualNetworkConnectionsComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Network/virtualHubs/hubVirtualNetworkConnections";
}
export interface virtualHubs_hubVirtualNetworkConnectionsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: HubVirtualNetworkConnectionProperties | undefined;
}
export class virtualHubs_ipConfigurations
	extends ArmResource<virtualHubs_ipConfigurationsComponentInputs>
	implements virtualHubs_ipConfigurationsComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualHubs_ipConfigurationsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/virtualHubs/ipConfigurations", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/virtualHubs/ipConfigurations";
}
export interface virtualHubs_ipConfigurationsComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Network/virtualHubs/ipConfigurations";
}
export interface virtualHubs_ipConfigurationsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: HubIPConfigurationPropertiesFormat | undefined;
}
export class virtualHubs_routeTables
	extends ArmResource<virtualHubs_routeTablesComponentInputs>
	implements virtualHubs_routeTablesComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualHubs_routeTablesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/virtualHubs/routeTables", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/virtualHubs/routeTables";
}
export interface virtualHubs_routeTablesComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Network/virtualHubs/routeTables";
}
export interface virtualHubs_routeTablesComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: VirtualHubRouteTableV2Properties | undefined;
}
export class virtualHubs_routingIntent
	extends ArmResource<virtualHubs_routingIntentComponentInputs>
	implements virtualHubs_routingIntentComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualHubs_routingIntentComponentInputs) {
		super(entity, options.name, "Microsoft.Network/virtualHubs/routingIntent", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/virtualHubs/routingIntent";
}
export interface virtualHubs_routingIntentComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Network/virtualHubs/routingIntent";
}
export interface virtualHubs_routingIntentComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: RoutingIntentProperties | undefined;
}
export class virtualNetworkGateways
	extends ArmResource<virtualNetworkGatewaysComponentInputs>
	implements virtualNetworkGatewaysComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualNetworkGatewaysComponentInputs) {
		super(entity, options.name, "Microsoft.Network/virtualNetworkGateways", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/virtualNetworkGateways";
}
export interface virtualNetworkGatewaysComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Network/virtualNetworkGateways";
}
export interface virtualNetworkGatewaysComponentInputs {
	readonly etag?: string | undefined;
	readonly extendedLocation?: ExtendedLocation | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: VirtualNetworkGatewayPropertiesFormat;
	readonly tags?: ResourceTags | undefined;
}
export class virtualNetworkGateways_natRules
	extends ArmResource<virtualNetworkGateways_natRulesComponentInputs>
	implements virtualNetworkGateways_natRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualNetworkGateways_natRulesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/virtualNetworkGateways/natRules", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/virtualNetworkGateways/natRules";
}
export interface virtualNetworkGateways_natRulesComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Network/virtualNetworkGateways/natRules";
}
export interface virtualNetworkGateways_natRulesComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: VirtualNetworkGatewayNatRuleProperties | undefined;
}
export class virtualNetworks
	extends ArmResource<virtualNetworksComponentInputs>
	implements virtualNetworksComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualNetworksComponentInputs) {
		super(entity, options.name, "Microsoft.Network/virtualNetworks", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/virtualNetworks";
}
export interface virtualNetworksComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Network/virtualNetworks";
}
export interface virtualNetworksComponentInputs {
	readonly etag?: string | undefined;
	readonly extendedLocation?: ExtendedLocation | undefined;
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
		super(entity, options.name, "Microsoft.Network/virtualNetworks/subnets", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/virtualNetworks/subnets";
}
export interface virtualNetworks_subnetsComponentOutputs {
	readonly apiVersion: "2021-05-01";
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
		super(entity, options.name, "Microsoft.Network/virtualNetworks/virtualNetworkPeerings", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/virtualNetworks/virtualNetworkPeerings";
}
export interface virtualNetworks_virtualNetworkPeeringsComponentOutputs {
	readonly apiVersion: "2021-05-01";
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
		super(entity, options.name, "Microsoft.Network/virtualNetworkTaps", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/virtualNetworkTaps";
}
export interface virtualNetworkTapsComponentOutputs {
	readonly apiVersion: "2021-05-01";
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
export class virtualRouters extends ArmResource<virtualRoutersComponentInputs> implements virtualRoutersComponentOutputs {
	constructor(entity: ADKEntity, options: virtualRoutersComponentInputs) {
		super(entity, options.name, "Microsoft.Network/virtualRouters", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/virtualRouters";
}
export interface virtualRoutersComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Network/virtualRouters";
}
export interface virtualRoutersComponentInputs {
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: VirtualRouterPropertiesFormat | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class virtualRouters_peerings
	extends ArmResource<virtualRouters_peeringsComponentInputs>
	implements virtualRouters_peeringsComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualRouters_peeringsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/virtualRouters/peerings", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/virtualRouters/peerings";
}
export interface virtualRouters_peeringsComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Network/virtualRouters/peerings";
}
export interface virtualRouters_peeringsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: VirtualRouterPeeringProperties | undefined;
}
export class virtualWans extends ArmResource<virtualWansComponentInputs> implements virtualWansComponentOutputs {
	constructor(entity: ADKEntity, options: virtualWansComponentInputs) {
		super(entity, options.name, "Microsoft.Network/virtualWans", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/virtualWans";
}
export interface virtualWansComponentOutputs {
	readonly apiVersion: "2021-05-01";
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
export class vpnGateways extends ArmResource<vpnGatewaysComponentInputs> implements vpnGatewaysComponentOutputs {
	constructor(entity: ADKEntity, options: vpnGatewaysComponentInputs) {
		super(entity, options.name, "Microsoft.Network/vpnGateways", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/vpnGateways";
}
export interface vpnGatewaysComponentOutputs {
	readonly apiVersion: "2021-05-01";
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
export class vpnGateways_natRules
	extends ArmResource<vpnGateways_natRulesComponentInputs>
	implements vpnGateways_natRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: vpnGateways_natRulesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/vpnGateways/natRules", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/vpnGateways/natRules";
}
export interface vpnGateways_natRulesComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Network/vpnGateways/natRules";
}
export interface vpnGateways_natRulesComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: VpnGatewayNatRuleProperties | undefined;
}
export class vpnGateways_vpnConnections
	extends ArmResource<vpnGateways_vpnConnectionsComponentInputs>
	implements vpnGateways_vpnConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: vpnGateways_vpnConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/vpnGateways/vpnConnections", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/vpnGateways/vpnConnections";
}
export interface vpnGateways_vpnConnectionsComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Network/vpnGateways/vpnConnections";
}
export interface vpnGateways_vpnConnectionsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: VpnConnectionProperties | undefined;
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
			"2021-05-01",
			options,
		);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/vpnGateways/vpnConnections/vpnLinkConnections";
}
export interface vpnGateways_vpnConnections_vpnLinkConnectionsComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Network/vpnGateways/vpnConnections/vpnLinkConnections";
}
export interface vpnGateways_vpnConnections_vpnLinkConnectionsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: VpnSiteLinkConnectionProperties | undefined;
}
export class vpnServerConfigurations
	extends ArmResource<vpnServerConfigurationsComponentInputs>
	implements vpnServerConfigurationsComponentOutputs
{
	constructor(entity: ADKEntity, options: vpnServerConfigurationsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/vpnServerConfigurations", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/vpnServerConfigurations";
}
export interface vpnServerConfigurationsComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Network/vpnServerConfigurations";
}
export interface vpnServerConfigurationsComponentInputs {
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: VpnServerConfigurationProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class vpnSites extends ArmResource<vpnSitesComponentInputs> implements vpnSitesComponentOutputs {
	constructor(entity: ADKEntity, options: vpnSitesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/vpnSites", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/vpnSites";
}
export interface vpnSitesComponentOutputs {
	readonly apiVersion: "2021-05-01";
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
export class vpnSites_vpnSiteLinks
	extends ArmResource<vpnSites_vpnSiteLinksComponentInputs>
	implements vpnSites_vpnSiteLinksComponentOutputs
{
	constructor(entity: ADKEntity, options: vpnSites_vpnSiteLinksComponentInputs) {
		super(entity, options.name, "Microsoft.Network/vpnSites/vpnSiteLinks", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/vpnSites/vpnSiteLinks";
}
export interface vpnSites_vpnSiteLinksComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.Network/vpnSites/vpnSiteLinks";
}
export interface vpnSites_vpnSiteLinksComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: VpnSiteLinkProperties | undefined;
}
export function listIdpsFilterOptions(
	resource: firewallPolicies,
	input: SignatureOverridesFilterValuesQuery,
): SignatureOverridesFilterValuesResponse {
	if (resource.apiVersion !== "2021-05-01") {
		throw new Error(`listIdpsFilterOptions is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Network/firewallPolicies") {
		throw new Error(`listIdpsFilterOptions is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listIdpsSignatures(resource: firewallPolicies, input: IdpsQueryObject): QueryResults {
	if (resource.apiVersion !== "2021-05-01") {
		throw new Error(`listIdpsSignatures is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Network/firewallPolicies") {
		throw new Error(`listIdpsSignatures is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AadAuthenticationParameters {
	readonly aadAudience?: string | undefined;
	readonly aadIssuer?: string | undefined;
	readonly aadTenant?: string | undefined;
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
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
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
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
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
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly requestTimeout?: number | undefined;
	readonly trustedRootCertificates?: SubResource[] | undefined;
}
export interface ApplicationGatewayClientAuthConfiguration {
	readonly verifyClientCertIssuerDN?: boolean | undefined;
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
	readonly privateLinkConfiguration?: SubResource | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
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
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface ApplicationGatewayGlobalConfiguration {
	readonly enableRequestBuffering?: boolean | undefined;
	readonly enableResponseBuffering?: boolean | undefined;
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
	readonly firewallPolicy?: SubResource | undefined;
	readonly frontendIPConfiguration?: SubResource | undefined;
	readonly frontendPort?: SubResource | undefined;
	readonly hostName?: string | undefined;
	readonly hostNames?: string[] | undefined;
	readonly protocol?: ("Http" | "Https") | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly requireServerNameIndication?: boolean | undefined;
	readonly sslCertificate?: SubResource | undefined;
	readonly sslProfile?: SubResource | undefined;
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
export interface ApplicationGatewayLoadDistributionPolicy {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: ApplicationGatewayLoadDistributionPolicyPropertiesFormat | undefined;
	readonly type?: string | undefined;
}
export interface ApplicationGatewayLoadDistributionPolicyPropertiesFormat {
	readonly loadDistributionAlgorithm?: ("IpHash" | "LeastConnections" | "RoundRobin") | undefined;
	readonly loadDistributionTargets?: ApplicationGatewayLoadDistributionTarget[] | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface ApplicationGatewayLoadDistributionTarget {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: ApplicationGatewayLoadDistributionTargetPropertiesFormat | undefined;
	readonly type?: string | undefined;
}
export interface ApplicationGatewayLoadDistributionTargetPropertiesFormat {
	readonly backendAddressPool?: SubResource | undefined;
	readonly weightPerServer?: number | undefined;
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
	readonly firewallPolicy?: SubResource | undefined;
	readonly loadDistributionPolicy?: SubResource | undefined;
	readonly paths?: string[] | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly redirectConfiguration?: SubResource | undefined;
	readonly rewriteRuleSet?: SubResource | undefined;
}
export interface ApplicationGatewayPrivateEndpointConnection {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: ApplicationGatewayPrivateEndpointConnectionProperties | undefined;
	readonly type?: string | undefined;
}
export interface ApplicationGatewayPrivateEndpointConnectionProperties {
	readonly linkIdentifier?: string | undefined;
	readonly privateEndpoint?: PrivateEndpoint | undefined;
	readonly privateLinkServiceConnectionState?: PrivateLinkServiceConnectionState | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface ApplicationGatewayPrivateLinkConfiguration {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: ApplicationGatewayPrivateLinkConfigurationProperties | undefined;
	readonly type?: string | undefined;
}
export interface ApplicationGatewayPrivateLinkConfigurationProperties {
	readonly ipConfigurations?: ApplicationGatewayPrivateLinkIpConfiguration[] | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface ApplicationGatewayPrivateLinkIpConfiguration {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: ApplicationGatewayPrivateLinkIpConfigurationProperties | undefined;
	readonly type?: string | undefined;
}
export interface ApplicationGatewayPrivateLinkIpConfigurationProperties {
	readonly primary?: boolean | undefined;
	readonly privateIPAddress?: string | undefined;
	readonly privateIPAllocationMethod?: ("Dynamic" | "Static") | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly subnet?: SubResource | undefined;
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
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
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
	readonly forceFirewallPolicyAssociation?: boolean | undefined;
	readonly frontendIPConfigurations?: ApplicationGatewayFrontendIPConfiguration[] | undefined;
	readonly frontendPorts?: ApplicationGatewayFrontendPort[] | undefined;
	readonly gatewayIPConfigurations?: ApplicationGatewayIPConfiguration[] | undefined;
	readonly globalConfiguration?: ApplicationGatewayGlobalConfiguration | undefined;
	readonly httpListeners?: ApplicationGatewayHttpListener[] | undefined;
	readonly loadDistributionPolicies?: ApplicationGatewayLoadDistributionPolicy[] | undefined;
	readonly operationalState?: ("Running" | "Starting" | "Stopped" | "Stopping") | undefined;
	readonly privateEndpointConnections?: ApplicationGatewayPrivateEndpointConnection[] | undefined;
	readonly privateLinkConfigurations?: ApplicationGatewayPrivateLinkConfiguration[] | undefined;
	readonly probes?: ApplicationGatewayProbe[] | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly redirectConfigurations?: ApplicationGatewayRedirectConfiguration[] | undefined;
	readonly requestRoutingRules?: ApplicationGatewayRequestRoutingRule[] | undefined;
	readonly resourceGuid?: string | undefined;
	readonly rewriteRuleSets?: ApplicationGatewayRewriteRuleSet[] | undefined;
	readonly sku?: ApplicationGatewaySku | undefined;
	readonly sslCertificates?: ApplicationGatewaySslCertificate[] | undefined;
	readonly sslPolicy?: ApplicationGatewaySslPolicy | undefined;
	readonly sslProfiles?: ApplicationGatewaySslProfile[] | undefined;
	readonly trustedClientCertificates?: ApplicationGatewayTrustedClientCertificate[] | undefined;
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
	readonly loadDistributionPolicy?: SubResource | undefined;
	readonly priority?: number | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
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
	readonly urlConfiguration?: ApplicationGatewayUrlConfiguration | undefined;
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
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
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
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
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
export interface ApplicationGatewaySslProfile {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: ApplicationGatewaySslProfilePropertiesFormat | undefined;
	readonly type?: string | undefined;
}
export interface ApplicationGatewaySslProfilePropertiesFormat {
	readonly clientAuthConfiguration?: ApplicationGatewayClientAuthConfiguration | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly sslPolicy?: ApplicationGatewaySslPolicy | undefined;
	readonly trustedClientCertificates?: SubResource[] | undefined;
}
export interface ApplicationGatewayTrustedClientCertificate {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: ApplicationGatewayTrustedClientCertificatePropertiesFormat | undefined;
	readonly type?: string | undefined;
}
export interface ApplicationGatewayTrustedClientCertificatePropertiesFormat {
	readonly clientCertIssuerDN?: string | undefined;
	readonly data?: string | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly validatedCertData?: string | undefined;
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
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface ApplicationGatewayUrlConfiguration {
	readonly modifiedPath?: string | undefined;
	readonly modifiedQueryString?: string | undefined;
	readonly reroute?: boolean | undefined;
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
	readonly defaultLoadDistributionPolicy?: SubResource | undefined;
	readonly defaultRedirectConfiguration?: SubResource | undefined;
	readonly defaultRewriteRuleSet?: SubResource | undefined;
	readonly pathRules?: ApplicationGatewayPathRule[] | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
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
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly resourceGuid?: string | undefined;
}
export interface AuthorizationPropertiesFormat {
	readonly authorizationKey?: string | undefined;
	readonly authorizationUseStatus?: ("Available" | "InUse") | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface AzureFirewallAdditionalProperties {
	readonly "[ key: string ]"?: string | undefined;
}
export interface AzureFirewallApplicationRule {
	readonly description?: string | undefined;
	readonly fqdnTags?: string[] | undefined;
	readonly name?: string | undefined;
	readonly protocols?: AzureFirewallApplicationRuleProtocol[] | undefined;
	readonly sourceAddresses?: string[] | undefined;
	readonly sourceIpGroups?: string[] | undefined;
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
	readonly protocolType?: ("Http" | "Https" | "Mssql") | undefined;
}
export interface AzureFirewallIPConfiguration {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: AzureFirewallIPConfigurationPropertiesFormat | undefined;
	readonly type?: string | undefined;
}
export interface AzureFirewallIPConfigurationPropertiesFormat {
	readonly privateIPAddress?: string | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly publicIPAddress?: SubResource | undefined;
	readonly subnet?: SubResource | undefined;
}
export interface AzureFirewallIpGroups {
	readonly changeNumber?: string | undefined;
	readonly id?: string | undefined;
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
	readonly sourceIpGroups?: string[] | undefined;
	readonly translatedAddress?: string | undefined;
	readonly translatedFqdn?: string | undefined;
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
	readonly destinationFqdns?: string[] | undefined;
	readonly destinationIpGroups?: string[] | undefined;
	readonly destinationPorts?: string[] | undefined;
	readonly name?: string | undefined;
	readonly protocols?: ("any" | "ICMP" | "TCP" | "UDP"[]) | undefined;
	readonly sourceAddresses?: string[] | undefined;
	readonly sourceIpGroups?: string[] | undefined;
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
	readonly additionalProperties?: AzureFirewallAdditionalProperties | undefined;
	readonly applicationRuleCollections?: AzureFirewallApplicationRuleCollection[] | undefined;
	readonly firewallPolicy?: SubResource | undefined;
	readonly hubIPAddresses?: HubIPAddresses | undefined;
	readonly ipConfigurations?: AzureFirewallIPConfiguration[] | undefined;
	readonly ipGroups?: AzureFirewallIpGroups[] | undefined;
	readonly managementIpConfiguration?: AzureFirewallIPConfiguration | undefined;
	readonly natRuleCollections?: AzureFirewallNatRuleCollection[] | undefined;
	readonly networkRuleCollections?: AzureFirewallNetworkRuleCollection[] | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly sku?: AzureFirewallSku | undefined;
	readonly threatIntelMode?: ("Alert" | "Deny" | "Off") | undefined;
	readonly virtualHub?: SubResource | undefined;
}
export interface AzureFirewallPublicIPAddress {
	readonly address?: string | undefined;
}
export interface AzureFirewallRCAction {
	readonly type?: ("Allow" | "Deny") | undefined;
}
export interface AzureFirewallSku {
	readonly name?: ("AZFW_Hub" | "AZFW_VNet") | undefined;
	readonly tier?: ("Basic" | "Premium" | "Standard") | undefined;
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
	readonly inboundNatRules?: SubResource[] | undefined;
	readonly loadBalancerBackendAddresses?: LoadBalancerBackendAddress[] | undefined;
	readonly loadBalancingRules?: SubResource[] | undefined;
	readonly location?: string | undefined;
	readonly outboundRule?: SubResource | undefined;
	readonly outboundRules?: SubResource[] | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly tunnelInterfaces?: GatewayLoadBalancerTunnelInterface[] | undefined;
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
	readonly disableCopyPaste?: boolean | undefined;
	readonly dnsName?: string | undefined;
	readonly enableFileCopy?: boolean | undefined;
	readonly enableIpConnect?: boolean | undefined;
	readonly enableShareableLink?: boolean | undefined;
	readonly enableTunneling?: boolean | undefined;
	readonly ipConfigurations?: BastionHostIPConfiguration[] | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly scaleUnits?: number | undefined;
}
export interface BgpConnectionProperties {
	readonly connectionState?: ("Connected" | "Connecting" | "NotConnected" | "Unknown") | undefined;
	readonly hubVirtualNetworkConnection?: SubResource | undefined;
	readonly peerAsn?: number | undefined;
	readonly peerIp?: string | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface BgpSettings {
	readonly asn?: number | undefined;
	readonly bgpPeeringAddress?: string | undefined;
	readonly bgpPeeringAddresses?: IPConfigurationBgpPeeringAddress[] | undefined;
	readonly peerWeight?: number | undefined;
}
export interface BreakOutCategoryPolicies {
	readonly allow?: boolean | undefined;
	readonly default?: boolean | undefined;
	readonly optimize?: boolean | undefined;
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
export interface ConnectionMonitorEndpoint {
	readonly address?: string | undefined;
	readonly coverageLevel?: ("AboveAverage" | "Average" | "BelowAverage" | "Default" | "Full" | "Low") | undefined;
	readonly filter?: ConnectionMonitorEndpointFilter | undefined;
	readonly name: string;
	readonly resourceId?: string | undefined;
	readonly scope?: ConnectionMonitorEndpointScope | undefined;
	readonly type?:
		| ("AzureSubnet" | "AzureVM" | "AzureVNet" | "ExternalAddress" | "MMAWorkspaceMachine" | "MMAWorkspaceNetwork")
		| undefined;
}
export interface ConnectionMonitorEndpointFilter {
	readonly items?: ConnectionMonitorEndpointFilterItem[] | undefined;
	readonly type?: "Include" | undefined;
}
export interface ConnectionMonitorEndpointFilterItem {
	readonly address?: string | undefined;
	readonly type?: "AgentAddress" | undefined;
}
export interface ConnectionMonitorEndpointScope {
	readonly exclude?: ConnectionMonitorEndpointScopeItem[] | undefined;
	readonly include?: ConnectionMonitorEndpointScopeItem[] | undefined;
}
export interface ConnectionMonitorEndpointScopeItem {
	readonly address?: string | undefined;
}
export interface ConnectionMonitorHttpConfiguration {
	readonly method?: ("Get" | "Post") | undefined;
	readonly path?: string | undefined;
	readonly port?: number | undefined;
	readonly preferHTTPS?: boolean | undefined;
	readonly requestHeaders?: HttpHeader[] | undefined;
	readonly validStatusCodeRanges?: string[] | undefined;
}
export interface ConnectionMonitorIcmpConfiguration {
	readonly disableTraceRoute?: boolean | undefined;
}
export interface ConnectionMonitorOutput {
	readonly type?: "Workspace" | undefined;
	readonly workspaceSettings?: ConnectionMonitorWorkspaceSettings | undefined;
}
export interface ConnectionMonitorParametersOrConnectionMonitorResultProperties {
	readonly autoStart?: boolean | undefined;
	readonly connectionMonitorType?: ("MultiEndpoint" | "SingleSourceDestination") | undefined;
	readonly destination?: ConnectionMonitorDestination | undefined;
	readonly endpoints?: ConnectionMonitorEndpoint[] | undefined;
	readonly monitoringIntervalInSeconds?: number | undefined;
	readonly monitoringStatus?: string | undefined;
	readonly notes?: string | undefined;
	readonly outputs?: ConnectionMonitorOutput[] | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly source?: ConnectionMonitorSource | undefined;
	readonly startTime?: string | undefined;
	readonly testConfigurations?: ConnectionMonitorTestConfiguration[] | undefined;
	readonly testGroups?: ConnectionMonitorTestGroup[] | undefined;
}
export interface ConnectionMonitorSource {
	readonly port?: number | undefined;
	readonly resourceId: string;
}
export interface ConnectionMonitorSuccessThreshold {
	readonly checksFailedPercent?: number | undefined;
	readonly roundTripTimeMs?: number | undefined;
}
export interface ConnectionMonitorTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ConnectionMonitorTcpConfiguration {
	readonly destinationPortBehavior?: ("ListenIfAvailable" | "None") | undefined;
	readonly disableTraceRoute?: boolean | undefined;
	readonly port?: number | undefined;
}
export interface ConnectionMonitorTestConfiguration {
	readonly httpConfiguration?: ConnectionMonitorHttpConfiguration | undefined;
	readonly icmpConfiguration?: ConnectionMonitorIcmpConfiguration | undefined;
	readonly name: string;
	readonly preferredIPVersion?: ("IPv4" | "IPv6") | undefined;
	readonly protocol: "Http" | "Icmp" | "Tcp";
	readonly successThreshold?: ConnectionMonitorSuccessThreshold | undefined;
	readonly tcpConfiguration?: ConnectionMonitorTcpConfiguration | undefined;
	readonly testFrequencySec?: number | undefined;
}
export interface ConnectionMonitorTestGroup {
	readonly destinations: string[];
	readonly disable?: boolean | undefined;
	readonly name: string;
	readonly sources: string[];
	readonly testConfigurations: string[];
}
export interface ConnectionMonitorWorkspaceSettings {
	readonly workspaceResourceId?: string | undefined;
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
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface ContainerNetworkInterfaceIpConfiguration {
	readonly etag?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: ContainerNetworkInterfaceIpConfigurationPropertiesFormat | undefined;
	readonly type?: string | undefined;
}
export interface ContainerNetworkInterfaceIpConfigurationPropertiesFormat {
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface ContainerNetworkInterfacePropertiesFormat {
	readonly container?: Container | undefined;
	readonly containerNetworkInterfaceConfiguration?: ContainerNetworkInterfaceConfiguration | undefined;
	readonly ipConfigurations?: ContainerNetworkInterfaceIpConfiguration[] | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface CustomDnsConfigPropertiesFormat {
	readonly fqdn?: string | undefined;
	readonly ipAddresses?: string[] | undefined;
}
export interface CustomIpPrefixPropertiesFormat {
	readonly authorizationMessage?: string | undefined;
	readonly childCustomIpPrefixes?: SubResource[] | undefined;
	readonly cidr?: string | undefined;
	readonly commissionedState?:
		| ("Commissioned" | "Commissioning" | "Decommissioning" | "Deprovisioning" | "Provisioned" | "Provisioning")
		| undefined;
	readonly customIpPrefixParent?: SubResource | undefined;
	readonly failedReason?: string | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly publicIpPrefixes?: SubResource[] | undefined;
	readonly resourceGuid?: string | undefined;
	readonly signedMessage?: string | undefined;
}
export interface DdosCustomPolicyPropertiesFormat {
	readonly protocolCustomSettings?: ProtocolCustomSettingsFormat[] | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly publicIPAddresses?: SubResource[] | undefined;
	readonly resourceGuid?: string | undefined;
}
export interface DdosProtectionPlanPropertiesFormat {
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly resourceGuid?: string | undefined;
	readonly virtualNetworks?: SubResource[] | undefined;
}
export interface DdosProtectionPlanTags {
	readonly "[ key: string ]"?: string | undefined;
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
export interface DeviceProperties {
	readonly deviceModel?: string | undefined;
	readonly deviceVendor?: string | undefined;
	readonly linkSpeedInMbps?: number | undefined;
}
export interface DhcpOptions {
	readonly dnsServers?: string[] | undefined;
}
export interface DnsSettings {
	readonly enableProxy?: boolean | undefined;
	readonly requireProxyForNetworkRules?: boolean | undefined;
	readonly servers?: string[] | undefined;
}
export interface DscpConfigurationPropertiesFormat {
	readonly associatedNetworkInterfaces?: NetworkInterface[] | undefined;
	readonly destinationIpRanges?: QosIpRange[] | undefined;
	readonly destinationPortRanges?: QosPortRange[] | undefined;
	readonly markings?: number[] | undefined;
	readonly protocol?: ("Ah" | "All" | "DoNotUse" | "Esp" | "Gre" | "Icmp" | "Tcp" | "Udp" | "Vxlan") | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly qosCollectionId?: string | undefined;
	readonly qosDefinitionCollection?: QosDefinition[] | undefined;
	readonly resourceGuid?: string | undefined;
	readonly sourceIpRanges?: QosIpRange[] | undefined;
	readonly sourcePortRanges?: QosPortRange[] | undefined;
}
export interface ExclusionManagedRule {
	readonly ruleId: string;
}
export interface ExclusionManagedRuleGroup {
	readonly ruleGroupName: string;
	readonly rules?: ExclusionManagedRule[] | undefined;
}
export interface ExclusionManagedRuleSet {
	readonly ruleGroups?: ExclusionManagedRuleGroup[] | undefined;
	readonly ruleSetType: string;
	readonly ruleSetVersion: string;
}
export interface ExplicitProxySettings {
	readonly enableExplicitProxy?: boolean | undefined;
	readonly httpPort?: number | undefined;
	readonly httpsPort?: number | undefined;
	readonly pacFile?: string | undefined;
	readonly pacFilePort?: number | undefined;
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
	readonly ipv6CircuitConnectionConfig?: Ipv6CircuitConnectionConfig | undefined;
	readonly peerExpressRouteCircuitPeering?: SubResource | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
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
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
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
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
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
	readonly enableInternetSecurity?: boolean | undefined;
	readonly expressRouteCircuitPeering: ExpressRouteCircuitPeeringId;
	readonly expressRouteGatewayBypass?: boolean | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly routingConfiguration?: RoutingConfiguration | undefined;
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
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
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
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
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
export interface ExpressRouteLinkMacSecConfig {
	readonly cakSecretIdentifier?: string | undefined;
	readonly cipher?: ("GcmAes128" | "GcmAes256" | "GcmAesXpn128" | "GcmAesXpn256") | undefined;
	readonly cknSecretIdentifier?: string | undefined;
	readonly sciState?: ("Disabled" | "Enabled") | undefined;
}
export interface ExpressRouteLinkPropertiesFormat {
	readonly adminState?: ("Disabled" | "Enabled") | undefined;
	readonly connectorType?: ("LC" | "SC") | undefined;
	readonly interfaceName?: string | undefined;
	readonly macSecConfig?: ExpressRouteLinkMacSecConfig | undefined;
	readonly patchPanelId?: string | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
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
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
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
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface ExtendedLocation {
	readonly name?: string | undefined;
	readonly type?: "EdgeZone" | undefined;
}
export interface FilterItems {
	readonly field?: string | undefined;
	readonly values?: string[] | undefined;
}
export interface FirewallPolicyCertificateAuthority {
	readonly keyVaultSecretId?: string | undefined;
	readonly name?: string | undefined;
}
export interface FirewallPolicyFilterRuleCollectionAction {
	readonly type?: ("Allow" | "Deny") | undefined;
}
export interface FirewallPolicyInsights {
	readonly isEnabled?: boolean | undefined;
	readonly logAnalyticsResources?: FirewallPolicyLogAnalyticsResources | undefined;
	readonly retentionDays?: number | undefined;
}
export interface FirewallPolicyIntrusionDetection {
	readonly configuration?: FirewallPolicyIntrusionDetectionConfiguration | undefined;
	readonly mode?: ("Alert" | "Deny" | "Off") | undefined;
}
export interface FirewallPolicyIntrusionDetectionBypassTrafficSpecifications {
	readonly description?: string | undefined;
	readonly destinationAddresses?: string[] | undefined;
	readonly destinationIpGroups?: string[] | undefined;
	readonly destinationPorts?: string[] | undefined;
	readonly name?: string | undefined;
	readonly protocol?: ("ANY" | "ICMP" | "TCP" | "UDP") | undefined;
	readonly sourceAddresses?: string[] | undefined;
	readonly sourceIpGroups?: string[] | undefined;
}
export interface FirewallPolicyIntrusionDetectionConfiguration {
	readonly bypassTrafficSettings?: FirewallPolicyIntrusionDetectionBypassTrafficSpecifications[] | undefined;
	readonly signatureOverrides?: FirewallPolicyIntrusionDetectionSignatureSpecification[] | undefined;
}
export interface FirewallPolicyIntrusionDetectionSignatureSpecification {
	readonly id?: string | undefined;
	readonly mode?: ("Alert" | "Deny" | "Off") | undefined;
}
export interface FirewallPolicyLogAnalyticsResources {
	readonly defaultWorkspaceId?: SubResource | undefined;
	readonly workspaces?: FirewallPolicyLogAnalyticsWorkspace[] | undefined;
}
export interface FirewallPolicyLogAnalyticsWorkspace {
	readonly region?: string | undefined;
	readonly workspaceId?: SubResource | undefined;
}
export interface FirewallPolicyNatRuleCollectionAction {
	readonly type?: "DNAT" | undefined;
}
export interface FirewallPolicyPropertiesFormat {
	readonly basePolicy?: SubResource | undefined;
	readonly childPolicies?: SubResource[] | undefined;
	readonly dnsSettings?: DnsSettings | undefined;
	readonly explicitProxySettings?: ExplicitProxySettings | undefined;
	readonly firewalls?: SubResource[] | undefined;
	readonly insights?: FirewallPolicyInsights | undefined;
	readonly intrusionDetection?: FirewallPolicyIntrusionDetection | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly ruleCollectionGroups?: SubResource[] | undefined;
	readonly sku?: FirewallPolicySku | undefined;
	readonly snat?: FirewallPolicySnat | undefined;
	readonly sql?: FirewallPolicySQL | undefined;
	readonly threatIntelMode?: ("Alert" | "Deny" | "Off") | undefined;
	readonly threatIntelWhitelist?: FirewallPolicyThreatIntelWhitelist | undefined;
	readonly transportSecurity?: FirewallPolicyTransportSecurity | undefined;
}
export interface FirewallPolicyRule {
	readonly description?: string | undefined;
	readonly name?: string | undefined;
}
export interface FirewallPolicyRuleApplicationProtocol {
	readonly port?: number | undefined;
	readonly protocolType?: ("Http" | "Https") | undefined;
}
export interface FirewallPolicyRuleCollection {
	readonly name?: string | undefined;
	readonly priority?: number | undefined;
}
export interface FirewallPolicyRuleCollectionGroupProperties {
	readonly priority?: number | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly ruleCollections?: FirewallPolicyRuleCollection[] | undefined;
}
export interface FirewallPolicySku {
	readonly tier?: ("Basic" | "Premium" | "Standard") | undefined;
}
export interface FirewallPolicySnat {
	readonly privateRanges?: string[] | undefined;
}
export interface FirewallPolicySQL {
	readonly allowSqlRedirect?: boolean | undefined;
}
export interface FirewallPolicyThreatIntelWhitelist {
	readonly fqdns?: string[] | undefined;
	readonly ipAddresses?: string[] | undefined;
}
export interface FirewallPolicyTransportSecurity {
	readonly certificateAuthority?: FirewallPolicyCertificateAuthority | undefined;
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
	readonly gatewayLoadBalancer?: SubResource | undefined;
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
export interface GatewayLoadBalancerTunnelInterface {
	readonly identifier?: number | undefined;
	readonly port?: number | undefined;
	readonly protocol?: ("Native" | "None" | "VXLAN") | undefined;
	readonly type?: ("External" | "Internal" | "None") | undefined;
}
export interface HttpHeader {
	readonly name?: string | undefined;
	readonly value?: string | undefined;
}
export interface HubIPAddresses {
	readonly privateIPAddress?: string | undefined;
	readonly publicIPs?: HubPublicIPAddresses | undefined;
}
export interface HubIPConfigurationPropertiesFormat {
	readonly privateIPAddress?: string | undefined;
	readonly privateIPAllocationMethod?: ("Dynamic" | "Static") | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly publicIPAddress?: PublicIPAddress | undefined;
	readonly subnet?: Subnet | undefined;
}
export interface HubPublicIPAddresses {
	readonly addresses?: AzureFirewallPublicIPAddress[] | undefined;
	readonly count?: number | undefined;
}
export interface HubRoute {
	readonly destinations: string[];
	readonly destinationType: string;
	readonly name: string;
	readonly nextHop: string;
	readonly nextHopType: string;
}
export interface HubRouteTableProperties {
	readonly associatedConnections?: string[] | undefined;
	readonly labels?: string[] | undefined;
	readonly propagatingConnections?: string[] | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly routes?: HubRoute[] | undefined;
}
export interface HubVirtualNetworkConnectionProperties {
	readonly allowHubToRemoteVnetTransit?: boolean | undefined;
	readonly allowRemoteVnetToUseHubVnetGateways?: boolean | undefined;
	readonly enableInternetSecurity?: boolean | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly remoteVirtualNetwork?: SubResource | undefined;
	readonly routingConfiguration?: RoutingConfiguration | undefined;
}
export interface IdpsQueryObject {
	readonly filters?: FilterItems[] | undefined;
	readonly orderBy?: OrderBy | undefined;
	readonly resultsPerPage?: number | undefined;
	readonly search?: string | undefined;
	readonly skip?: number | undefined;
}
export interface InboundNatPool {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: InboundNatPoolPropertiesFormat | undefined;
	readonly type?: string | undefined;
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
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface InboundNatRule {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: InboundNatRulePropertiesFormat | undefined;
	readonly type?: string | undefined;
}
export interface InboundNatRulePropertiesFormat {
	readonly backendAddressPool?: SubResource | undefined;
	readonly backendIPConfiguration?: NetworkInterfaceIPConfiguration | undefined;
	readonly backendPort?: number | undefined;
	readonly enableFloatingIP?: boolean | undefined;
	readonly enableTcpReset?: boolean | undefined;
	readonly frontendIPConfiguration?: SubResource | undefined;
	readonly frontendPort?: number | undefined;
	readonly frontendPortRangeEnd?: number | undefined;
	readonly frontendPortRangeStart?: number | undefined;
	readonly idleTimeoutInMinutes?: number | undefined;
	readonly protocol?: ("All" | "Tcp" | "Udp") | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface InboundSecurityRuleProperties {
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly rules?: InboundSecurityRules[] | undefined;
}
export interface InboundSecurityRules {
	readonly destinationPortRange?: number | undefined;
	readonly protocol?: ("TCP" | "UDP") | undefined;
	readonly sourceAddressPrefix?: string | undefined;
}
export interface IpAllocationPropertiesFormat {
	readonly allocationTags?: IpAllocationPropertiesFormatAllocationTags | undefined;
	readonly ipamAllocationId?: string | undefined;
	readonly prefix?: string | undefined;
	readonly prefixLength?: number | undefined;
	readonly prefixType?: ("IPv4" | "IPv6") | undefined;
	readonly subnet?: SubResource | undefined;
	readonly type?: ("Hypernet" | "Undefined") | undefined;
	readonly virtualNetwork?: SubResource | undefined;
}
export interface IpAllocationPropertiesFormatAllocationTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface IPConfiguration {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: IPConfigurationPropertiesFormat | undefined;
}
export interface IPConfigurationBgpPeeringAddress {
	readonly customBgpIpAddresses?: string[] | undefined;
	readonly defaultBgpIpAddresses?: string[] | undefined;
	readonly ipconfigurationId?: string | undefined;
	readonly tunnelIpAddresses?: string[] | undefined;
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
export interface IpGroupPropertiesFormat {
	readonly firewallPolicies?: SubResource[] | undefined;
	readonly firewalls?: SubResource[] | undefined;
	readonly ipAddresses?: string[] | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
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
export interface Ipv6CircuitConnectionConfig {
	readonly addressPrefix?: string | undefined;
	readonly circuitConnectionStatus?: ("Connected" | "Connecting" | "Disconnected") | undefined;
}
export interface Ipv6ExpressRouteCircuitPeeringConfig {
	readonly microsoftPeeringConfig?: ExpressRouteCircuitPeeringConfig | undefined;
	readonly primaryPeerAddressPrefix?: string | undefined;
	readonly routeFilter?: SubResource | undefined;
	readonly secondaryPeerAddressPrefix?: string | undefined;
	readonly state?: ("Disabled" | "Enabled") | undefined;
}
export interface LoadBalancerBackendAddress {
	readonly name?: string | undefined;
	readonly properties?: LoadBalancerBackendAddressPropertiesFormat | undefined;
}
export interface LoadBalancerBackendAddressPropertiesFormat {
	readonly inboundNatRulesPortMapping?: NatRulePortMapping[] | undefined;
	readonly ipAddress?: string | undefined;
	readonly loadBalancerFrontendIPConfiguration?: SubResource | undefined;
	readonly networkInterfaceIPConfiguration?: SubResource | undefined;
	readonly subnet?: SubResource | undefined;
	readonly virtualNetwork?: SubResource | undefined;
}
export interface LoadBalancerPropertiesFormat {
	readonly backendAddressPools?: BackendAddressPool[] | undefined;
	readonly frontendIPConfigurations?: FrontendIPConfiguration[] | undefined;
	readonly inboundNatPools?: InboundNatPool[] | undefined;
	readonly inboundNatRules?: InboundNatRule[] | undefined;
	readonly loadBalancingRules?: LoadBalancingRule[] | undefined;
	readonly outboundRules?: OutboundRule[] | undefined;
	readonly probes?: Probe[] | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly resourceGuid?: string | undefined;
}
export interface LoadBalancerSku {
	readonly name?: ("Basic" | "Gateway" | "Standard") | undefined;
	readonly tier?: ("Global" | "Regional") | undefined;
}
export interface LoadBalancingRule {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: LoadBalancingRulePropertiesFormat | undefined;
	readonly type?: string | undefined;
}
export interface LoadBalancingRulePropertiesFormat {
	readonly backendAddressPool?: SubResource | undefined;
	readonly backendAddressPools?: SubResource[] | undefined;
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
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
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
	readonly fqdn?: string | undefined;
	readonly gatewayIpAddress?: string | undefined;
	readonly localNetworkAddressSpace?: AddressSpace | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly resourceGuid?: string | undefined;
}
export interface ManagedRuleGroupOverride {
	readonly ruleGroupName: string;
	readonly rules?: ManagedRuleOverride[] | undefined;
}
export interface ManagedRuleOverride {
	readonly ruleId: string;
	readonly state?: "Disabled" | undefined;
}
export interface ManagedRulesDefinition {
	readonly exclusions?: OwaspCrsExclusionEntry[] | undefined;
	readonly managedRuleSets: ManagedRuleSet[];
}
export interface ManagedRuleSet {
	readonly ruleGroupOverrides?: ManagedRuleGroupOverride[] | undefined;
	readonly ruleSetType: string;
	readonly ruleSetVersion: string;
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
		| "GeoMatch"
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
export interface NatRulePortMapping {
	readonly backendPort?: number | undefined;
	readonly frontendPort?: number | undefined;
	readonly inboundNatRuleName?: string | undefined;
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
	readonly gatewayLoadBalancer?: SubResource | undefined;
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
	readonly vnetEncryptionSupported?: boolean | undefined;
	readonly workloadType?: string | undefined;
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
export interface NetworkProfilePropertiesFormat {
	readonly containerNetworkInterfaceConfigurations?: ContainerNetworkInterfaceConfiguration[] | undefined;
	readonly containerNetworkInterfaces?: ContainerNetworkInterface[] | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
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
	readonly flowLogs?: FlowLog[] | undefined;
	readonly networkInterfaces?: NetworkInterface[] | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly resourceGuid?: string | undefined;
	readonly securityRules?: SecurityRule[] | undefined;
	readonly subnets?: Subnet[] | undefined;
}
export interface NetworkVirtualAppliancePropertiesFormat {
	readonly addressPrefix?: string | undefined;
	readonly bootStrapConfigurationBlobs?: string[] | undefined;
	readonly cloudInitConfiguration?: string | undefined;
	readonly cloudInitConfigurationBlobs?: string[] | undefined;
	readonly inboundSecurityRules?: SubResource[] | undefined;
	readonly nvaSku?: VirtualApplianceSkuProperties | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly sshPublicKey?: string | undefined;
	readonly virtualApplianceAsn?: number | undefined;
	readonly virtualApplianceNics?: VirtualApplianceNicProperties[] | undefined;
	readonly virtualApplianceSites?: SubResource[] | undefined;
	readonly virtualHub?: SubResource | undefined;
}
export interface NetworkVirtualApplianceSkuInstances {
	readonly instanceCount?: number | undefined;
	readonly scaleUnit?: string | undefined;
}
export interface NetworkVirtualApplianceSkuPropertiesFormat {
	readonly availableScaleUnits?: NetworkVirtualApplianceSkuInstances[] | undefined;
	readonly availableVersions?: string[] | undefined;
	readonly vendor?: string | undefined;
}
export interface NetworkWatcherPropertiesFormat {
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface O365BreakOutCategoryPolicies {
	readonly allow?: boolean | undefined;
	readonly default?: boolean | undefined;
	readonly optimize?: boolean | undefined;
}
export interface O365PolicyProperties {
	readonly breakOutCategories?: O365BreakOutCategoryPolicies | undefined;
}
export interface Office365PolicyProperties {
	readonly breakOutCategories?: BreakOutCategoryPolicies | undefined;
}
export interface OrderBy {
	readonly field?: string | undefined;
	readonly order?: ("Ascending" | "Descending") | undefined;
}
export interface OutboundRule {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: OutboundRulePropertiesFormat | undefined;
	readonly type?: string | undefined;
}
export interface OutboundRulePropertiesFormat {
	readonly allocatedOutboundPorts?: number | undefined;
	readonly backendAddressPool: SubResource;
	readonly enableTcpReset?: boolean | undefined;
	readonly frontendIPConfigurations: SubResource[];
	readonly idleTimeoutInMinutes?: number | undefined;
	readonly protocol: "All" | "Tcp" | "Udp";
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface OwaspCrsExclusionEntry {
	readonly exclusionManagedRuleSets?: ExclusionManagedRuleSet[] | undefined;
	readonly matchVariable:
		| "RequestArgKeys"
		| "RequestArgNames"
		| "RequestArgValues"
		| "RequestCookieKeys"
		| "RequestCookieNames"
		| "RequestCookieValues"
		| "RequestHeaderKeys"
		| "RequestHeaderNames"
		| "RequestHeaderValues";
	readonly selector: string;
	readonly selectorMatchOperator: "Contains" | "EndsWith" | "Equals" | "Equalsany" | "StartsWith";
}
export interface P2SConnectionConfiguration {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: P2SConnectionConfigurationProperties | undefined;
}
export interface P2SConnectionConfigurationProperties {
	readonly enableInternetSecurity?: boolean | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly routingConfiguration?: RoutingConfiguration | undefined;
	readonly vpnClientAddressPool?: AddressSpace | undefined;
}
export interface P2SVpnGateway {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly location?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: P2SVpnGatewayProperties | undefined;
	readonly tags?: ResourceTags | undefined;
	readonly type?: string | undefined;
}
export interface P2SVpnGatewayProperties {
	readonly customDnsServers?: string[] | undefined;
	readonly isRoutingPreferenceInternet?: boolean | undefined;
	readonly p2SConnectionConfigurations?: P2SConnectionConfiguration[] | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly virtualHub?: SubResource | undefined;
	readonly vpnClientConnectionHealth?: VpnClientConnectionHealth | undefined;
	readonly vpnGatewayScaleUnit?: number | undefined;
	readonly vpnServerConfiguration?: SubResource | undefined;
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
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface PolicySettings {
	readonly fileUploadLimitInMb?: number | undefined;
	readonly maxRequestBodySizeInKb?: number | undefined;
	readonly mode?: ("Detection" | "Prevention") | undefined;
	readonly requestBodyCheck?: boolean | undefined;
	readonly state?: ("Disabled" | "Enabled") | undefined;
}
export interface PrivateDnsZoneConfig {
	readonly name?: string | undefined;
	readonly properties?: PrivateDnsZonePropertiesFormat | undefined;
}
export interface PrivateDnsZoneGroupPropertiesFormat {
	readonly privateDnsZoneConfigs?: PrivateDnsZoneConfig[] | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface PrivateDnsZonePropertiesFormat {
	readonly privateDnsZoneId?: string | undefined;
	readonly recordSets?: RecordSet[] | undefined;
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
export interface PrivateEndpointIPConfiguration {
	readonly etag?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: PrivateEndpointIPConfigurationProperties | undefined;
	readonly type?: string | undefined;
}
export interface PrivateEndpointIPConfigurationProperties {
	readonly groupId?: string | undefined;
	readonly memberName?: string | undefined;
	readonly privateIPAddress?: string | undefined;
}
export interface PrivateEndpointProperties {
	readonly applicationSecurityGroups?: ApplicationSecurityGroup[] | undefined;
	readonly customDnsConfigs?: CustomDnsConfigPropertiesFormat[] | undefined;
	readonly customNetworkInterfaceName?: string | undefined;
	readonly ipConfigurations?: PrivateEndpointIPConfiguration[] | undefined;
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
export interface Probe {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: ProbePropertiesFormat | undefined;
	readonly type?: string | undefined;
}
export interface ProbePropertiesFormat {
	readonly intervalInSeconds?: number | undefined;
	readonly loadBalancingRules?: SubResource[] | undefined;
	readonly numberOfProbes?: number | undefined;
	readonly port: number;
	readonly protocol: "Http" | "Https" | "Tcp";
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly requestPath?: string | undefined;
}
export interface PropagatedRouteTable {
	readonly ids?: SubResource[] | undefined;
	readonly labels?: string[] | undefined;
}
export interface ProtocolCustomSettingsFormat {
	readonly protocol?: ("Syn" | "Tcp" | "Udp") | undefined;
	readonly sourceRateOverride?: string | undefined;
	readonly triggerRateOverride?: string | undefined;
	readonly triggerSensitivityOverride?: ("Default" | "High" | "Low" | "Relaxed") | undefined;
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
	readonly deleteOption?: ("Delete" | "Detach") | undefined;
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
export interface PublicIPPrefixPropertiesFormat {
	readonly customIPPrefix?: SubResource | undefined;
	readonly ipPrefix?: string | undefined;
	readonly ipTags?: IpTag[] | undefined;
	readonly loadBalancerFrontendIpConfiguration?: SubResource | undefined;
	readonly natGateway?: NatGateway | undefined;
	readonly prefixLength?: number | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly publicIPAddresses?: ReferencedPublicIpAddress[] | undefined;
	readonly publicIPAddressVersion?: ("IPv4" | "IPv6") | undefined;
	readonly resourceGuid?: string | undefined;
}
export interface PublicIPPrefixSku {
	readonly name?: "Standard" | undefined;
	readonly tier?: ("Global" | "Regional") | undefined;
}
export interface QosDefinition {
	readonly destinationIpRanges?: QosIpRange[] | undefined;
	readonly destinationPortRanges?: QosPortRange[] | undefined;
	readonly markings?: number[] | undefined;
	readonly protocol?: ("Ah" | "All" | "DoNotUse" | "Esp" | "Gre" | "Icmp" | "Tcp" | "Udp" | "Vxlan") | undefined;
	readonly sourceIpRanges?: QosIpRange[] | undefined;
	readonly sourcePortRanges?: QosPortRange[] | undefined;
}
export interface QosIpRange {
	readonly endIP?: string | undefined;
	readonly startIP?: string | undefined;
}
export interface QosPortRange {
	readonly end?: number | undefined;
	readonly start?: number | undefined;
}
export interface QueryResults {
	readonly matchingRecordsCount?: number | undefined;
	readonly signatures?: SingleQueryResult[] | undefined;
}
export interface RadiusServer {
	readonly radiusServerAddress: string;
	readonly radiusServerScore?: number | undefined;
	readonly radiusServerSecret?: string | undefined;
}
export interface RecordSet {
	readonly fqdn?: string | undefined;
	readonly ipAddresses?: string[] | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly recordSetName?: string | undefined;
	readonly recordType?: string | undefined;
	readonly ttl?: number | undefined;
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
export interface RouteFilterPropertiesFormat {
	readonly ipv6Peerings?: ExpressRouteCircuitPeering[] | undefined;
	readonly peerings?: ExpressRouteCircuitPeering[] | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
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
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly routeFilterRuleType: "Community";
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
export interface RoutingConfiguration {
	readonly associatedRouteTable?: SubResource | undefined;
	readonly propagatedRouteTables?: PropagatedRouteTable | undefined;
	readonly vnetRoutes?: VnetRoute | undefined;
}
export interface RoutingIntentProperties {
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly routingPolicies?: RoutingPolicy[] | undefined;
}
export interface RoutingPolicy {
	readonly destinations: string[];
	readonly name: string;
	readonly nextHop: string;
}
export interface SecurityPartnerProviderPropertiesFormat {
	readonly connectionStatus?: ("Connected" | "NotConnected" | "PartiallyConnected" | "Unknown") | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly securityProviderName?: ("Checkpoint" | "IBoss" | "ZScaler") | undefined;
	readonly virtualHub?: SubResource | undefined;
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
	readonly kind?: string | undefined;
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
	readonly type?: string | undefined;
}
export interface ServiceEndpointPolicyDefinitionPropertiesFormat {
	readonly description?: string | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly service?: string | undefined;
	readonly serviceResources?: string[] | undefined;
}
export interface ServiceEndpointPolicyPropertiesFormat {
	readonly contextualServiceEndpointPolicies?: string[] | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly resourceGuid?: string | undefined;
	readonly serviceAlias?: string | undefined;
	readonly serviceEndpointPolicyDefinitions?: ServiceEndpointPolicyDefinition[] | undefined;
	readonly subnets?: Subnet[] | undefined;
}
export interface ServiceEndpointPropertiesFormat {
	readonly locations?: string[] | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly service?: string | undefined;
}
export interface SignatureOverridesFilterValuesQuery {
	readonly filterName?: string | undefined;
}
export interface SignatureOverridesFilterValuesResponse {
	readonly filterValues?: string[] | undefined;
}
export interface Signatures {
	readonly "[ key: string ]"?: string | undefined;
}
export interface SignaturesOverridesProperties {
	readonly signatures?: Signatures | undefined;
}
export interface SingleQueryResult {
	readonly description?: string | undefined;
	readonly destinationPorts?: string[] | undefined;
	readonly direction?: number | undefined;
	readonly group?: string | undefined;
	readonly inheritedFromParentPolicy?: boolean | undefined;
	readonly lastUpdated?: string | undefined;
	readonly mode?: number | undefined;
	readonly protocol?: string | undefined;
	readonly severity?: number | undefined;
	readonly signatureId?: number | undefined;
	readonly sourcePorts?: string[] | undefined;
}
export interface Sku {
	readonly name?: ("Basic" | "Standard") | undefined;
}
export interface StaticRoute {
	readonly addressPrefixes?: string[] | undefined;
	readonly name?: string | undefined;
	readonly nextHopIpAddress?: string | undefined;
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
export interface TrafficSelectorPolicy {
	readonly localAddressRanges: string[];
	readonly remoteAddressRanges: string[];
}
export interface TunnelConnectionHealth {
	readonly connectionStatus?: ("Connected" | "Connecting" | "NotConnected" | "Unknown") | undefined;
	readonly egressBytesTransferred?: number | undefined;
	readonly ingressBytesTransferred?: number | undefined;
	readonly lastConnectionEstablishedUtcTime?: string | undefined;
	readonly tunnel?: string | undefined;
}
export interface VirtualApplianceNicProperties {
	readonly name?: string | undefined;
	readonly privateIpAddress?: string | undefined;
	readonly publicIpAddress?: string | undefined;
}
export interface VirtualApplianceSiteProperties {
	readonly addressPrefix?: string | undefined;
	readonly o365Policy?: Office365PolicyProperties | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface VirtualApplianceSkuProperties {
	readonly bundledScaleUnit?: string | undefined;
	readonly marketPlaceVersion?: string | undefined;
	readonly vendor?: string | undefined;
}
export interface VirtualHubId {
	readonly id?: string | undefined;
}
export interface VirtualHubProperties {
	readonly addressPrefix?: string | undefined;
	readonly allowBranchToBranchTraffic?: boolean | undefined;
	readonly azureFirewall?: SubResource | undefined;
	readonly bgpConnections?: SubResource[] | undefined;
	readonly expressRouteGateway?: SubResource | undefined;
	readonly ipConfigurations?: SubResource[] | undefined;
	readonly p2SVpnGateway?: SubResource | undefined;
	readonly preferredRoutingGateway?: ("ExpressRoute" | "None" | "VpnGateway") | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly routeTable?: VirtualHubRouteTable | undefined;
	readonly routingState?: ("Failed" | "None" | "Provisioned" | "Provisioning") | undefined;
	readonly securityPartnerProvider?: SubResource | undefined;
	readonly securityProviderName?: string | undefined;
	readonly sku?: string | undefined;
	readonly virtualHubRouteTableV2s?: VirtualHubRouteTableV2[] | undefined;
	readonly virtualRouterAsn?: number | undefined;
	readonly virtualRouterIps?: string[] | undefined;
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
export interface VirtualHubRouteTableV2 {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: VirtualHubRouteTableV2Properties | undefined;
}
export interface VirtualHubRouteTableV2Properties {
	readonly attachedConnections?: string[] | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly routes?: VirtualHubRouteV2[] | undefined;
}
export interface VirtualHubRouteV2 {
	readonly destinations?: string[] | undefined;
	readonly destinationType?: string | undefined;
	readonly nextHops?: string[] | undefined;
	readonly nextHopType?: string | undefined;
}
export interface VirtualNetworkBgpCommunities {
	readonly regionalCommunity?: string | undefined;
	readonly virtualNetworkCommunity: string;
}
export interface VirtualNetworkEncryption {
	readonly enabled: boolean;
	readonly enforcement?: ("AllowUnencrypted" | "DropUnencrypted") | undefined;
}
export interface VirtualNetworkGateway {
	readonly etag?: string | undefined;
	readonly extendedLocation?: ExtendedLocation | undefined;
	readonly id?: string | undefined;
	readonly location?: string | undefined;
	readonly name?: string | undefined;
	readonly properties: VirtualNetworkGatewayPropertiesFormat;
	readonly tags?: ResourceTags | undefined;
	readonly type?: string | undefined;
}
export interface VirtualNetworkGatewayConnectionPropertiesFormat {
	readonly authorizationKey?: string | undefined;
	readonly connectionMode?: ("Default" | "InitiatorOnly" | "ResponderOnly") | undefined;
	readonly connectionProtocol?: ("IKEv1" | "IKEv2") | undefined;
	readonly connectionStatus?: ("Connected" | "Connecting" | "NotConnected" | "Unknown") | undefined;
	readonly connectionType: "ExpressRoute" | "IPsec" | "VPNClient" | "Vnet2Vnet";
	readonly dpdTimeoutSeconds?: number | undefined;
	readonly egressBytesTransferred?: number | undefined;
	readonly egressNatRules?: SubResource[] | undefined;
	readonly enableBgp?: boolean | undefined;
	readonly expressRouteGatewayBypass?: boolean | undefined;
	readonly ingressBytesTransferred?: number | undefined;
	readonly ingressNatRules?: SubResource[] | undefined;
	readonly ipsecPolicies?: IpsecPolicy[] | undefined;
	readonly localNetworkGateway2?: LocalNetworkGateway | undefined;
	readonly peer?: SubResource | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly resourceGuid?: string | undefined;
	readonly routingWeight?: number | undefined;
	readonly sharedKey?: string | undefined;
	readonly trafficSelectorPolicies?: TrafficSelectorPolicy[] | undefined;
	readonly tunnelConnectionStatus?: TunnelConnectionHealth[] | undefined;
	readonly useLocalAzureIpAddress?: boolean | undefined;
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
	readonly privateIPAddress?: string | undefined;
	readonly privateIPAllocationMethod?: ("Dynamic" | "Static") | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly publicIPAddress?: SubResource | undefined;
	readonly subnet?: SubResource | undefined;
}
export interface VirtualNetworkGatewayNatRule {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: VirtualNetworkGatewayNatRuleProperties | undefined;
	readonly type?: string | undefined;
}
export interface VirtualNetworkGatewayNatRuleProperties {
	readonly externalMappings?: VpnNatRuleMapping[] | undefined;
	readonly internalMappings?: VpnNatRuleMapping[] | undefined;
	readonly ipConfigurationId?: string | undefined;
	readonly mode?: ("EgressSnat" | "IngressSnat") | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly type?: ("Dynamic" | "Static") | undefined;
}
export interface VirtualNetworkGatewayPropertiesFormat {
	readonly activeActive?: boolean | undefined;
	readonly bgpSettings?: BgpSettings | undefined;
	readonly customRoutes?: AddressSpace | undefined;
	readonly disableIPSecReplayProtection?: boolean | undefined;
	readonly enableBgp?: boolean | undefined;
	readonly enableBgpRouteTranslationForNat?: boolean | undefined;
	readonly enableDnsForwarding?: boolean | undefined;
	readonly enablePrivateIpAddress?: boolean | undefined;
	readonly gatewayDefaultSite?: SubResource | undefined;
	readonly gatewayType?: ("ExpressRoute" | "LocalGateway" | "Vpn") | undefined;
	readonly inboundDnsForwardingEndpoint?: string | undefined;
	readonly ipConfigurations?: VirtualNetworkGatewayIPConfiguration[] | undefined;
	readonly natRules?: VirtualNetworkGatewayNatRule[] | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly resourceGuid?: string | undefined;
	readonly sku?: VirtualNetworkGatewaySku | undefined;
	readonly vNetExtendedLocationResourceId?: string | undefined;
	readonly vpnClientConfiguration?: VpnClientConfiguration | undefined;
	readonly vpnGatewayGeneration?: ("Generation1" | "Generation2" | "None") | undefined;
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
				| "VpnGw4"
				| "VpnGw4AZ"
				| "VpnGw5"
				| "VpnGw5AZ"
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
				| "VpnGw4"
				| "VpnGw4AZ"
				| "VpnGw5"
				| "VpnGw5AZ"
		  )
		| undefined;
}
export interface VirtualNetworkPeering {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: VirtualNetworkPeeringPropertiesFormat | undefined;
	readonly type?: string | undefined;
}
export interface VirtualNetworkPeeringPropertiesFormat {
	readonly allowForwardedTraffic?: boolean | undefined;
	readonly allowGatewayTransit?: boolean | undefined;
	readonly allowVirtualNetworkAccess?: boolean | undefined;
	readonly doNotVerifyRemoteGateways?: boolean | undefined;
	readonly peeringState?: ("Connected" | "Disconnected" | "Initiated") | undefined;
	readonly peeringSyncLevel?:
		| ("FullyInSync" | "LocalAndRemoteNotInSync" | "LocalNotInSync" | "RemoteNotInSync")
		| undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly remoteAddressSpace?: AddressSpace | undefined;
	readonly remoteBgpCommunities?: VirtualNetworkBgpCommunities | undefined;
	readonly remoteVirtualNetwork?: SubResource | undefined;
	readonly remoteVirtualNetworkAddressSpace?: AddressSpace | undefined;
	readonly remoteVirtualNetworkEncryption?: VirtualNetworkEncryption | undefined;
	readonly resourceGuid?: string | undefined;
	readonly useRemoteGateways?: boolean | undefined;
}
export interface VirtualNetworkPropertiesFormat {
	readonly addressSpace?: AddressSpace | undefined;
	readonly bgpCommunities?: VirtualNetworkBgpCommunities | undefined;
	readonly ddosProtectionPlan?: SubResource | undefined;
	readonly dhcpOptions?: DhcpOptions | undefined;
	readonly enableDdosProtection?: boolean | undefined;
	readonly enableVmProtection?: boolean | undefined;
	readonly encryption?: VirtualNetworkEncryption | undefined;
	readonly flowTimeoutInMinutes?: number | undefined;
	readonly ipAllocations?: SubResource[] | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
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
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly resourceGuid?: string | undefined;
}
export interface VirtualRouterPeeringProperties {
	readonly peerAsn?: number | undefined;
	readonly peerIp?: string | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface VirtualRouterPropertiesFormat {
	readonly hostedGateway?: SubResource | undefined;
	readonly hostedSubnet?: SubResource | undefined;
	readonly peerings?: SubResource[] | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly virtualRouterAsn?: number | undefined;
	readonly virtualRouterIps?: string[] | undefined;
}
export interface VirtualWanProperties {
	readonly allowBranchToBranchTraffic?: boolean | undefined;
	readonly allowVnetToVnetTraffic?: boolean | undefined;
	readonly disableVpnEncryption?: boolean | undefined;
	readonly office365LocalBreakoutCategory?: ("All" | "None" | "Optimize" | "OptimizeAndAllow") | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly type?: string | undefined;
	readonly virtualHubs?: SubResource[] | undefined;
	readonly vpnSites?: SubResource[] | undefined;
}
export interface VnetRoute {
	readonly bgpConnections?: SubResource[] | undefined;
	readonly staticRoutes?: StaticRoute[] | undefined;
}
export interface VpnClientConfiguration {
	readonly aadAudience?: string | undefined;
	readonly aadIssuer?: string | undefined;
	readonly aadTenant?: string | undefined;
	readonly radiusServerAddress?: string | undefined;
	readonly radiusServers?: RadiusServer[] | undefined;
	readonly radiusServerSecret?: string | undefined;
	readonly vpnAuthenticationTypes?: ("AAD" | "Certificate" | "Radius"[]) | undefined;
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
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly thumbprint?: string | undefined;
}
export interface VpnClientRootCertificate {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties: VpnClientRootCertificatePropertiesFormat;
}
export interface VpnClientRootCertificatePropertiesFormat {
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
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
	readonly dpdTimeoutSeconds?: number | undefined;
	readonly egressBytesTransferred?: number | undefined;
	readonly enableBgp?: boolean | undefined;
	readonly enableInternetSecurity?: boolean | undefined;
	readonly enableRateLimiting?: boolean | undefined;
	readonly ingressBytesTransferred?: number | undefined;
	readonly ipsecPolicies?: IpsecPolicy[] | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly remoteVpnSite?: SubResource | undefined;
	readonly routingConfiguration?: RoutingConfiguration | undefined;
	readonly routingWeight?: number | undefined;
	readonly sharedKey?: string | undefined;
	readonly trafficSelectorPolicies?: TrafficSelectorPolicy[] | undefined;
	readonly useLocalAzureIpAddress?: boolean | undefined;
	readonly usePolicyBasedTrafficSelectors?: boolean | undefined;
	readonly vpnConnectionProtocolType?: ("IKEv1" | "IKEv2") | undefined;
	readonly vpnLinkConnections?: VpnSiteLinkConnection[] | undefined;
}
export interface VpnGatewayIpConfiguration {
	readonly id?: string | undefined;
	readonly privateIpAddress?: string | undefined;
	readonly publicIpAddress?: string | undefined;
}
export interface VpnGatewayNatRule {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: VpnGatewayNatRuleProperties | undefined;
	readonly type?: string | undefined;
}
export interface VpnGatewayNatRuleProperties {
	readonly egressVpnSiteLinkConnections?: SubResource[] | undefined;
	readonly externalMappings?: VpnNatRuleMapping[] | undefined;
	readonly ingressVpnSiteLinkConnections?: SubResource[] | undefined;
	readonly internalMappings?: VpnNatRuleMapping[] | undefined;
	readonly ipConfigurationId?: string | undefined;
	readonly mode?: ("EgressSnat" | "IngressSnat") | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly type?: ("Dynamic" | "Static") | undefined;
}
export interface VpnGatewayProperties {
	readonly bgpSettings?: BgpSettings | undefined;
	readonly connections?: VpnConnection[] | undefined;
	readonly enableBgpRouteTranslationForNat?: boolean | undefined;
	readonly ipConfigurations?: VpnGatewayIpConfiguration[] | undefined;
	readonly isRoutingPreferenceInternet?: boolean | undefined;
	readonly natRules?: VpnGatewayNatRule[] | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly virtualHub?: SubResource | undefined;
	readonly vpnGatewayScaleUnit?: number | undefined;
}
export interface VpnLinkBgpSettings {
	readonly asn?: number | undefined;
	readonly bgpPeeringAddress?: string | undefined;
}
export interface VpnLinkProviderProperties {
	readonly linkProviderName?: string | undefined;
	readonly linkSpeedInMbps?: number | undefined;
}
export interface VpnNatRuleMapping {
	readonly addressSpace?: string | undefined;
	readonly portRange?: string | undefined;
}
export interface VpnServerConfigRadiusClientRootCertificate {
	readonly name?: string | undefined;
	readonly thumbprint?: string | undefined;
}
export interface VpnServerConfigRadiusServerRootCertificate {
	readonly name?: string | undefined;
	readonly publicCertData?: string | undefined;
}
export interface VpnServerConfigurationProperties {
	readonly aadAuthenticationParameters?: AadAuthenticationParameters | undefined;
	readonly etag?: string | undefined;
	readonly name?: string | undefined;
	readonly p2SVpnGateways?: P2SVpnGateway[] | undefined;
	readonly provisioningState?: string | undefined;
	readonly radiusClientRootCertificates?: VpnServerConfigRadiusClientRootCertificate[] | undefined;
	readonly radiusServerAddress?: string | undefined;
	readonly radiusServerRootCertificates?: VpnServerConfigRadiusServerRootCertificate[] | undefined;
	readonly radiusServers?: RadiusServer[] | undefined;
	readonly radiusServerSecret?: string | undefined;
	readonly vpnAuthenticationTypes?: ("AAD" | "Certificate" | "Radius"[]) | undefined;
	readonly vpnClientIpsecPolicies?: IpsecPolicy[] | undefined;
	readonly vpnClientRevokedCertificates?: VpnServerConfigVpnClientRevokedCertificate[] | undefined;
	readonly vpnClientRootCertificates?: VpnServerConfigVpnClientRootCertificate[] | undefined;
	readonly vpnProtocols?: ("IkeV2" | "OpenVPN"[]) | undefined;
}
export interface VpnServerConfigVpnClientRevokedCertificate {
	readonly name?: string | undefined;
	readonly thumbprint?: string | undefined;
}
export interface VpnServerConfigVpnClientRootCertificate {
	readonly name?: string | undefined;
	readonly publicCertData?: string | undefined;
}
export interface VpnSiteLink {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: VpnSiteLinkProperties | undefined;
	readonly type?: string | undefined;
}
export interface VpnSiteLinkConnection {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: VpnSiteLinkConnectionProperties | undefined;
	readonly type?: string | undefined;
}
export interface VpnSiteLinkConnectionProperties {
	readonly connectionBandwidth?: number | undefined;
	readonly connectionStatus?: ("Connected" | "Connecting" | "NotConnected" | "Unknown") | undefined;
	readonly egressBytesTransferred?: number | undefined;
	readonly egressNatRules?: SubResource[] | undefined;
	readonly enableBgp?: boolean | undefined;
	readonly enableRateLimiting?: boolean | undefined;
	readonly ingressBytesTransferred?: number | undefined;
	readonly ingressNatRules?: SubResource[] | undefined;
	readonly ipsecPolicies?: IpsecPolicy[] | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly routingWeight?: number | undefined;
	readonly sharedKey?: string | undefined;
	readonly useLocalAzureIpAddress?: boolean | undefined;
	readonly usePolicyBasedTrafficSelectors?: boolean | undefined;
	readonly vpnConnectionProtocolType?: ("IKEv1" | "IKEv2") | undefined;
	readonly vpnLinkConnectionMode?: ("Default" | "InitiatorOnly" | "ResponderOnly") | undefined;
	readonly vpnSiteLink?: SubResource | undefined;
}
export interface VpnSiteLinkProperties {
	readonly bgpProperties?: VpnLinkBgpSettings | undefined;
	readonly fqdn?: string | undefined;
	readonly ipAddress?: string | undefined;
	readonly linkProperties?: VpnLinkProviderProperties | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface VpnSiteProperties {
	readonly addressSpace?: AddressSpace | undefined;
	readonly bgpProperties?: BgpSettings | undefined;
	readonly deviceProperties?: DeviceProperties | undefined;
	readonly ipAddress?: string | undefined;
	readonly isSecuritySite?: boolean | undefined;
	readonly o365Policy?: O365PolicyProperties | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly siteKey?: string | undefined;
	readonly virtualWan?: SubResource | undefined;
	readonly vpnSiteLinks?: VpnSiteLink[] | undefined;
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
	readonly httpListeners?: SubResource[] | undefined;
	readonly managedRules: ManagedRulesDefinition;
	readonly pathBasedRules?: SubResource[] | undefined;
	readonly policySettings?: PolicySettings | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly resourceState?: ("Creating" | "Deleting" | "Disabled" | "Disabling" | "Enabled" | "Enabling") | undefined;
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
	"firewallPolicies/signatureOverrides": firewallPolicies_signatureOverrides,
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
	"virtualHubs/routingIntent": virtualHubs_routingIntent,
	virtualNetworkGateways: virtualNetworkGateways,
	"virtualNetworkGateways/natRules": virtualNetworkGateways_natRules,
	virtualNetworks: virtualNetworks,
	"virtualNetworks/subnets": virtualNetworks_subnets,
	"virtualNetworks/virtualNetworkPeerings": virtualNetworks_virtualNetworkPeerings,
	virtualNetworkTaps: virtualNetworkTaps,
	virtualRouters: virtualRouters,
	"virtualRouters/peerings": virtualRouters_peerings,
	virtualWans: virtualWans,
	vpnGateways: vpnGateways,
	"vpnGateways/natRules": vpnGateways_natRules,
	"vpnGateways/vpnConnections": vpnGateways_vpnConnections,
	"vpnGateways/vpnConnections/vpnLinkConnections": vpnGateways_vpnConnections_vpnLinkConnections,
	vpnServerConfigurations: vpnServerConfigurations,
	vpnSites: vpnSites,
	"vpnSites/vpnSiteLinks": vpnSites_vpnSiteLinks,
};

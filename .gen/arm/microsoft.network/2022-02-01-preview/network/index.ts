import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class networkManagerConnections
	extends ArmResource<networkManagerConnectionsComponentInputs>
	implements networkManagerConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: networkManagerConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/networkManagerConnections", "2022-02-01-preview", options);
	}
	public readonly apiVersion: "2022-02-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkManagerConnections";
}
export interface networkManagerConnectionsComponentOutputs {
	readonly apiVersion: "2022-02-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Network/networkManagerConnections";
}
export interface networkManagerConnectionsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: NetworkManagerConnectionProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class networkManagers
	extends ArmResource<networkManagersComponentInputs>
	implements networkManagersComponentOutputs
{
	constructor(entity: ADKEntity, options: networkManagersComponentInputs) {
		super(entity, options.name, "Microsoft.Network/networkManagers", "2022-02-01-preview", options);
	}
	public readonly apiVersion: "2022-02-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkManagers";
}
export interface networkManagersComponentOutputs {
	readonly apiVersion: "2022-02-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Network/networkManagers";
}
export interface networkManagersComponentInputs {
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: NetworkManagerProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class networkManagers_connectivityConfigurations
	extends ArmResource<networkManagers_connectivityConfigurationsComponentInputs>
	implements networkManagers_connectivityConfigurationsComponentOutputs
{
	constructor(entity: ADKEntity, options: networkManagers_connectivityConfigurationsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Network/networkManagers/connectivityConfigurations",
			"2022-02-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-02-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkManagers/connectivityConfigurations";
}
export interface networkManagers_connectivityConfigurationsComponentOutputs {
	readonly apiVersion: "2022-02-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Network/networkManagers/connectivityConfigurations";
}
export interface networkManagers_connectivityConfigurationsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: ConnectivityConfigurationProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class networkManagers_networkGroups
	extends ArmResource<networkManagers_networkGroupsComponentInputs>
	implements networkManagers_networkGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: networkManagers_networkGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/networkManagers/networkGroups", "2022-02-01-preview", options);
	}
	public readonly apiVersion: "2022-02-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkManagers/networkGroups";
}
export interface networkManagers_networkGroupsComponentOutputs {
	readonly apiVersion: "2022-02-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Network/networkManagers/networkGroups";
}
export interface networkManagers_networkGroupsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: NetworkGroupProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class networkManagers_networkGroups_staticMembers
	extends ArmResource<networkManagers_networkGroups_staticMembersComponentInputs>
	implements networkManagers_networkGroups_staticMembersComponentOutputs
{
	constructor(entity: ADKEntity, options: networkManagers_networkGroups_staticMembersComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Network/networkManagers/networkGroups/staticMembers",
			"2022-02-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-02-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkManagers/networkGroups/staticMembers";
}
export interface networkManagers_networkGroups_staticMembersComponentOutputs {
	readonly apiVersion: "2022-02-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Network/networkManagers/networkGroups/staticMembers";
}
export interface networkManagers_networkGroups_staticMembersComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: StaticMemberProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class networkManagers_scopeConnections
	extends ArmResource<networkManagers_scopeConnectionsComponentInputs>
	implements networkManagers_scopeConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: networkManagers_scopeConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/networkManagers/scopeConnections", "2022-02-01-preview", options);
	}
	public readonly apiVersion: "2022-02-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkManagers/scopeConnections";
}
export interface networkManagers_scopeConnectionsComponentOutputs {
	readonly apiVersion: "2022-02-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Network/networkManagers/scopeConnections";
}
export interface networkManagers_scopeConnectionsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: ScopeConnectionProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class networkManagers_securityAdminConfigurations
	extends ArmResource<networkManagers_securityAdminConfigurationsComponentInputs>
	implements networkManagers_securityAdminConfigurationsComponentOutputs
{
	constructor(entity: ADKEntity, options: networkManagers_securityAdminConfigurationsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Network/networkManagers/securityAdminConfigurations",
			"2022-02-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-02-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkManagers/securityAdminConfigurations";
}
export interface networkManagers_securityAdminConfigurationsComponentOutputs {
	readonly apiVersion: "2022-02-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Network/networkManagers/securityAdminConfigurations";
}
export interface networkManagers_securityAdminConfigurationsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: SecurityAdminConfigurationPropertiesFormat | undefined;
	readonly systemData?: SystemData | undefined;
}
export class networkManagers_securityAdminConfigurations_ruleCollections
	extends ArmResource<networkManagers_securityAdminConfigurations_ruleCollectionsComponentInputs>
	implements networkManagers_securityAdminConfigurations_ruleCollectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: networkManagers_securityAdminConfigurations_ruleCollectionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Network/networkManagers/securityAdminConfigurations/ruleCollections",
			"2022-02-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-02-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkManagers/securityAdminConfigurations/ruleCollections";
}
export interface networkManagers_securityAdminConfigurations_ruleCollectionsComponentOutputs {
	readonly apiVersion: "2022-02-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Network/networkManagers/securityAdminConfigurations/ruleCollections";
}
export interface networkManagers_securityAdminConfigurations_ruleCollectionsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: AdminRuleCollectionPropertiesFormat | undefined;
	readonly systemData?: SystemData | undefined;
}
export class networkManagers_securityAdminConfigurations_ruleCollections_rules_Custom
	extends ArmResource<networkManagers_securityAdminConfigurations_ruleCollections_rules_CustomComponentInputs>
	implements networkManagers_securityAdminConfigurations_ruleCollections_rules_CustomComponentOutputs
{
	constructor(
		entity: ADKEntity,
		options: networkManagers_securityAdminConfigurations_ruleCollections_rules_CustomComponentInputs,
	) {
		super(
			entity,
			options.name,
			"Microsoft.Network/networkManagers/securityAdminConfigurations/ruleCollections/rules",
			"2022-02-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-02-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkManagers/securityAdminConfigurations/ruleCollections/rules";
}
export interface networkManagers_securityAdminConfigurations_ruleCollections_rules_CustomComponentOutputs {
	readonly apiVersion: "2022-02-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Network/networkManagers/securityAdminConfigurations/ruleCollections/rules";
}
export interface networkManagers_securityAdminConfigurations_ruleCollections_rules_CustomComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "Custom";
	readonly properties?: AdminPropertiesFormat | undefined;
}
export class networkManagers_securityAdminConfigurations_ruleCollections_rules_Default
	extends ArmResource<networkManagers_securityAdminConfigurations_ruleCollections_rules_DefaultComponentInputs>
	implements networkManagers_securityAdminConfigurations_ruleCollections_rules_DefaultComponentOutputs
{
	constructor(
		entity: ADKEntity,
		options: networkManagers_securityAdminConfigurations_ruleCollections_rules_DefaultComponentInputs,
	) {
		super(
			entity,
			options.name,
			"Microsoft.Network/networkManagers/securityAdminConfigurations/ruleCollections/rules",
			"2022-02-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-02-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkManagers/securityAdminConfigurations/ruleCollections/rules";
}
export interface networkManagers_securityAdminConfigurations_ruleCollections_rules_DefaultComponentOutputs {
	readonly apiVersion: "2022-02-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Network/networkManagers/securityAdminConfigurations/ruleCollections/rules";
}
export interface networkManagers_securityAdminConfigurations_ruleCollections_rules_DefaultComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "Default";
	readonly properties?: DefaultAdminPropertiesFormat | undefined;
}
export class networkManagers_securityUserConfigurations
	extends ArmResource<networkManagers_securityUserConfigurationsComponentInputs>
	implements networkManagers_securityUserConfigurationsComponentOutputs
{
	constructor(entity: ADKEntity, options: networkManagers_securityUserConfigurationsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Network/networkManagers/securityUserConfigurations",
			"2022-02-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-02-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkManagers/securityUserConfigurations";
}
export interface networkManagers_securityUserConfigurationsComponentOutputs {
	readonly apiVersion: "2022-02-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Network/networkManagers/securityUserConfigurations";
}
export interface networkManagers_securityUserConfigurationsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: SecurityUserConfigurationPropertiesFormat | undefined;
	readonly systemData?: SystemData | undefined;
}
export class networkManagers_securityUserConfigurations_ruleCollections
	extends ArmResource<networkManagers_securityUserConfigurations_ruleCollectionsComponentInputs>
	implements networkManagers_securityUserConfigurations_ruleCollectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: networkManagers_securityUserConfigurations_ruleCollectionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Network/networkManagers/securityUserConfigurations/ruleCollections",
			"2022-02-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-02-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkManagers/securityUserConfigurations/ruleCollections";
}
export interface networkManagers_securityUserConfigurations_ruleCollectionsComponentOutputs {
	readonly apiVersion: "2022-02-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Network/networkManagers/securityUserConfigurations/ruleCollections";
}
export interface networkManagers_securityUserConfigurations_ruleCollectionsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: UserRuleCollectionPropertiesFormat | undefined;
	readonly systemData?: SystemData | undefined;
}
export class networkManagers_securityUserConfigurations_ruleCollections_rules_Custom
	extends ArmResource<networkManagers_securityUserConfigurations_ruleCollections_rules_CustomComponentInputs>
	implements networkManagers_securityUserConfigurations_ruleCollections_rules_CustomComponentOutputs
{
	constructor(
		entity: ADKEntity,
		options: networkManagers_securityUserConfigurations_ruleCollections_rules_CustomComponentInputs,
	) {
		super(
			entity,
			options.name,
			"Microsoft.Network/networkManagers/securityUserConfigurations/ruleCollections/rules",
			"2022-02-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-02-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkManagers/securityUserConfigurations/ruleCollections/rules";
}
export interface networkManagers_securityUserConfigurations_ruleCollections_rules_CustomComponentOutputs {
	readonly apiVersion: "2022-02-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Network/networkManagers/securityUserConfigurations/ruleCollections/rules";
}
export interface networkManagers_securityUserConfigurations_ruleCollections_rules_CustomComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "Custom";
	readonly properties?: UserRulePropertiesFormat | undefined;
}
export class networkManagers_securityUserConfigurations_ruleCollections_rules_Default
	extends ArmResource<networkManagers_securityUserConfigurations_ruleCollections_rules_DefaultComponentInputs>
	implements networkManagers_securityUserConfigurations_ruleCollections_rules_DefaultComponentOutputs
{
	constructor(
		entity: ADKEntity,
		options: networkManagers_securityUserConfigurations_ruleCollections_rules_DefaultComponentInputs,
	) {
		super(
			entity,
			options.name,
			"Microsoft.Network/networkManagers/securityUserConfigurations/ruleCollections/rules",
			"2022-02-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-02-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkManagers/securityUserConfigurations/ruleCollections/rules";
}
export interface networkManagers_securityUserConfigurations_ruleCollections_rules_DefaultComponentOutputs {
	readonly apiVersion: "2022-02-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Network/networkManagers/securityUserConfigurations/ruleCollections/rules";
}
export interface networkManagers_securityUserConfigurations_ruleCollections_rules_DefaultComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "Default";
	readonly properties?: DefaultUserRulePropertiesFormat | undefined;
}
export function listActiveConnectivityConfigurations(
	resource: networkManagers,
	input: ActiveConfigurationParameter,
): ActiveConnectivityConfigurationsListResult {
	if (resource.apiVersion !== "2022-02-01-preview") {
		throw new Error(`listActiveConnectivityConfigurations is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Network/networkManagers") {
		throw new Error(`listActiveConnectivityConfigurations is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listActiveSecurityAdminRules(
	resource: networkManagers,
	input: ActiveConfigurationParameter,
): ActiveSecurityAdminRulesListResult {
	if (resource.apiVersion !== "2022-02-01-preview") {
		throw new Error(`listActiveSecurityAdminRules is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Network/networkManagers") {
		throw new Error(`listActiveSecurityAdminRules is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listActiveSecurityUserRules(
	resource: networkManagers,
	input: ActiveConfigurationParameter,
): ActiveSecurityUserRulesListResult {
	if (resource.apiVersion !== "2022-02-01-preview") {
		throw new Error(`listActiveSecurityUserRules is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Network/networkManagers") {
		throw new Error(`listActiveSecurityUserRules is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listDeploymentStatus(
	resource: networkManagers,
	input: NetworkManagerDeploymentStatusParameter,
): NetworkManagerDeploymentStatusListResult {
	if (resource.apiVersion !== "2022-02-01-preview") {
		throw new Error(`listDeploymentStatus is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Network/networkManagers") {
		throw new Error(`listDeploymentStatus is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listEffectiveVirtualNetworks(
	resource: networkManagers,
	input: EffectiveVirtualNetworksParameter,
): EffectiveVirtualNetworksListResult {
	if (resource.apiVersion !== "2022-02-01-preview") {
		throw new Error(`listEffectiveVirtualNetworks is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Network/networkManagers") {
		throw new Error(`listEffectiveVirtualNetworks is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listNetworkManagerEffectiveConnectivityConfigurations(
	resource: ArmResource,
	input: QueryRequestOptions,
): NetworkManagerEffectiveConnectivityConfigurationListResult {
	if (resource.apiVersion !== "2022-02-01-preview") {
		throw new Error(
			`listNetworkManagerEffectiveConnectivityConfigurations is not available for api version ${resource.apiVersion}`,
		);
	}
	if (resource.type !== "Microsoft.Network/virtualNetworks") {
		throw new Error(
			`listNetworkManagerEffectiveConnectivityConfigurations is not available for resource type ${resource.type}`,
		);
	}
	throw new Error("not implemented");
}
export function listNetworkManagerEffectiveSecurityAdminRules(
	resource: ArmResource,
	input: QueryRequestOptions,
): NetworkManagerEffectiveSecurityAdminRulesListResult {
	if (resource.apiVersion !== "2022-02-01-preview") {
		throw new Error(
			`listNetworkManagerEffectiveSecurityAdminRules is not available for api version ${resource.apiVersion}`,
		);
	}
	if (resource.type !== "Microsoft.Network/virtualNetworks") {
		throw new Error(
			`listNetworkManagerEffectiveSecurityAdminRules is not available for resource type ${resource.type}`,
		);
	}
	throw new Error("not implemented");
}
export interface ActiveBaseSecurityAdminRule {
	readonly commitTime?: string | undefined;
	readonly configurationDescription?: string | undefined;
	readonly id?: string | undefined;
	readonly region?: string | undefined;
	readonly ruleCollectionAppliesToGroups?: NetworkManagerSecurityGroupItem[] | undefined;
	readonly ruleCollectionDescription?: string | undefined;
	readonly ruleGroups?: ConfigurationGroup[] | undefined;
}
export interface ActiveBaseSecurityUserRule {
	readonly commitTime?: string | undefined;
	readonly configurationDescription?: string | undefined;
	readonly id?: string | undefined;
	readonly region?: string | undefined;
	readonly ruleCollectionAppliesToGroups?: NetworkManagerSecurityGroupItem[] | undefined;
	readonly ruleCollectionDescription?: string | undefined;
	readonly ruleGroups?: ConfigurationGroup[] | undefined;
}
export interface ActiveConfigurationParameter {
	readonly regions?: string[] | undefined;
	readonly skipToken?: string | undefined;
}
export interface ActiveConnectivityConfiguration {
	readonly commitTime?: string | undefined;
	readonly configurationGroups?: ConfigurationGroup[] | undefined;
	readonly id?: string | undefined;
	readonly properties?: ConnectivityConfigurationProperties | undefined;
	readonly region?: string | undefined;
}
export interface ActiveConnectivityConfigurationsListResult {
	readonly skipToken?: string | undefined;
	readonly value?: ActiveConnectivityConfiguration[] | undefined;
}
export interface ActiveSecurityAdminRulesListResult {
	readonly skipToken?: string | undefined;
	readonly value?: ActiveBaseSecurityAdminRule[] | undefined;
}
export interface ActiveSecurityUserRulesListResult {
	readonly skipToken?: string | undefined;
	readonly value?: ActiveBaseSecurityUserRule[] | undefined;
}
export interface AddressPrefixItem {
	readonly addressPrefix?: string | undefined;
	readonly addressPrefixType?: ("IPPrefix" | "ServiceTag") | undefined;
}
export interface AdminPropertiesFormat {
	readonly access: "Allow" | "AlwaysAllow" | "Deny";
	readonly description?: string | undefined;
	readonly destinationPortRanges?: string[] | undefined;
	readonly destinations?: AddressPrefixItem[] | undefined;
	readonly direction: "Inbound" | "Outbound";
	readonly priority: number;
	readonly protocol: "Ah" | "any" | "Esp" | "Icmp" | "Tcp" | "Udp";
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly sourcePortRanges?: string[] | undefined;
	readonly sources?: AddressPrefixItem[] | undefined;
}
export interface AdminRuleCollectionPropertiesFormat {
	readonly appliesToGroups: NetworkManagerSecurityGroupItem[];
	readonly description?: string | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface ConfigurationGroup {
	readonly id?: string | undefined;
	readonly properties?: NetworkGroupProperties | undefined;
}
export interface ConnectivityConfigurationProperties {
	readonly appliesToGroups: ConnectivityGroupItem[];
	readonly connectivityTopology: "HubAndSpoke" | "Mesh";
	readonly deleteExistingPeering?: ("False" | "True") | undefined;
	readonly description?: string | undefined;
	readonly hubs?: Hub[] | undefined;
	readonly isGlobal?: ("False" | "True") | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface ConnectivityGroupItem {
	readonly groupConnectivity: "DirectlyConnected" | "None";
	readonly isGlobal?: ("False" | "True") | undefined;
	readonly networkGroupId: string;
	readonly useHubGateway?: ("False" | "True") | undefined;
}
export interface CrossTenantScopes {
	readonly managementGroups?: string[] | undefined;
	readonly subscriptions?: string[] | undefined;
	readonly tenantId?: string | undefined;
}
export interface DefaultAdminPropertiesFormat {
	readonly access?: ("Allow" | "AlwaysAllow" | "Deny") | undefined;
	readonly description?: string | undefined;
	readonly destinationPortRanges?: string[] | undefined;
	readonly destinations?: AddressPrefixItem[] | undefined;
	readonly direction?: ("Inbound" | "Outbound") | undefined;
	readonly flag?: string | undefined;
	readonly priority?: number | undefined;
	readonly protocol?: ("Ah" | "any" | "Esp" | "Icmp" | "Tcp" | "Udp") | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly sourcePortRanges?: string[] | undefined;
	readonly sources?: AddressPrefixItem[] | undefined;
}
export interface DefaultUserRulePropertiesFormat {
	readonly description?: string | undefined;
	readonly destinationPortRanges?: string[] | undefined;
	readonly destinations?: AddressPrefixItem[] | undefined;
	readonly direction?: ("Inbound" | "Outbound") | undefined;
	readonly flag?: string | undefined;
	readonly protocol?: ("Ah" | "any" | "Esp" | "Icmp" | "Tcp" | "Udp") | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly sourcePortRanges?: string[] | undefined;
	readonly sources?: AddressPrefixItem[] | undefined;
}
export interface EffectiveBaseSecurityAdminRule {
	readonly configurationDescription?: string | undefined;
	readonly id?: string | undefined;
	readonly ruleCollectionAppliesToGroups?: NetworkManagerSecurityGroupItem[] | undefined;
	readonly ruleCollectionDescription?: string | undefined;
	readonly ruleGroups?: ConfigurationGroup[] | undefined;
}
export interface EffectiveConnectivityConfiguration {
	readonly configurationGroups?: ConfigurationGroup[] | undefined;
	readonly id?: string | undefined;
	readonly properties?: ConnectivityConfigurationProperties | undefined;
}
export interface EffectiveVirtualNetwork {
	readonly id?: string | undefined;
	readonly location?: string | undefined;
	readonly membershipType?: ("Dynamic" | "Static") | undefined;
}
export interface EffectiveVirtualNetworksListResult {
	readonly skipToken?: string | undefined;
	readonly value?: EffectiveVirtualNetwork[] | undefined;
}
export interface EffectiveVirtualNetworksParameter {
	readonly conditionalMembers?: string | undefined;
	readonly skipToken?: string | undefined;
}
export interface Hub {
	readonly resourceId?: string | undefined;
	readonly resourceType?: string | undefined;
}
export interface NetworkGroupProperties {
	readonly description?: string | undefined;
	readonly memberType: string;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface NetworkManagerConnectionProperties {
	readonly connectionState?: ("Conflict" | "Connected" | "Pending" | "Rejected" | "Revoked") | undefined;
	readonly description?: string | undefined;
	readonly networkManagerId?: string | undefined;
}
export interface NetworkManagerDeploymentStatus {
	readonly commitTime?: string | undefined;
	readonly configurationIds?: string[] | undefined;
	readonly deploymentStatus?: ("Deployed" | "Deploying" | "Failed" | "NotStarted") | undefined;
	readonly deploymentType?: ("Connectivity" | "SecurityAdmin" | "SecurityUser") | undefined;
	readonly errorMessage?: string | undefined;
	readonly region?: string | undefined;
}
export interface NetworkManagerDeploymentStatusListResult {
	readonly skipToken?: string | undefined;
	readonly value?: NetworkManagerDeploymentStatus[] | undefined;
}
export interface NetworkManagerDeploymentStatusParameter {
	readonly deploymentTypes?: ("Connectivity" | "SecurityAdmin" | "SecurityUser"[]) | undefined;
	readonly regions?: string[] | undefined;
	readonly skipToken?: string | undefined;
}
export interface NetworkManagerEffectiveConnectivityConfigurationListResult {
	readonly skipToken?: string | undefined;
	readonly value?: EffectiveConnectivityConfiguration[] | undefined;
}
export interface NetworkManagerEffectiveSecurityAdminRulesListResult {
	readonly skipToken?: string | undefined;
	readonly value?: EffectiveBaseSecurityAdminRule[] | undefined;
}
export interface NetworkManagerProperties {
	readonly description?: string | undefined;
	readonly networkManagerScopeAccesses: "Connectivity" | "SecurityAdmin" | "SecurityUser"[];
	readonly networkManagerScopes: NetworkManagerPropertiesNetworkManagerScopes;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface NetworkManagerPropertiesNetworkManagerScopes {
	readonly crossTenantScopes?: CrossTenantScopes[] | undefined;
	readonly managementGroups?: string[] | undefined;
	readonly subscriptions?: string[] | undefined;
}
export interface NetworkManagerSecurityGroupItem {
	readonly networkGroupId: string;
}
export interface QueryRequestOptions {
	readonly skipToken?: string | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ScopeConnectionProperties {
	readonly connectionState?: ("Conflict" | "Connected" | "Pending" | "Rejected" | "Revoked") | undefined;
	readonly description?: string | undefined;
	readonly resourceId?: string | undefined;
	readonly tenantId?: string | undefined;
}
export interface SecurityAdminConfigurationPropertiesFormat {
	readonly applyOnNetworkIntentPolicyBasedServices?: ("All" | "None"[]) | undefined;
	readonly description?: string | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface SecurityUserConfigurationPropertiesFormat {
	readonly deleteExistingNSGs?: ("False" | "True") | undefined;
	readonly description?: string | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface StaticMemberProperties {
	readonly resourceId?: string | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface UserRuleCollectionPropertiesFormat {
	readonly appliesToGroups: NetworkManagerSecurityGroupItem[];
	readonly description?: string | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface UserRulePropertiesFormat {
	readonly description?: string | undefined;
	readonly destinationPortRanges?: string[] | undefined;
	readonly destinations?: AddressPrefixItem[] | undefined;
	readonly direction: "Inbound" | "Outbound";
	readonly protocol: "Ah" | "any" | "Esp" | "Icmp" | "Tcp" | "Udp";
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly sourcePortRanges?: string[] | undefined;
	readonly sources?: AddressPrefixItem[] | undefined;
}
export type networkManagers_securityAdminConfigurations_ruleCollections_rules =
	| networkManagers_securityAdminConfigurations_ruleCollections_rules_Custom
	| networkManagers_securityAdminConfigurations_ruleCollections_rules_Default;
export type networkManagers_securityUserConfigurations_ruleCollections_rules =
	| networkManagers_securityUserConfigurations_ruleCollections_rules_Custom
	| networkManagers_securityUserConfigurations_ruleCollections_rules_Default;
export default {
	networkManagerConnections: networkManagerConnections,
	networkManagers: networkManagers,
	"networkManagers/connectivityConfigurations": networkManagers_connectivityConfigurations,
	"networkManagers/networkGroups": networkManagers_networkGroups,
	"networkManagers/networkGroups/staticMembers": networkManagers_networkGroups_staticMembers,
	"networkManagers/scopeConnections": networkManagers_scopeConnections,
	"networkManagers/securityAdminConfigurations": networkManagers_securityAdminConfigurations,
	"networkManagers/securityAdminConfigurations/ruleCollections":
		networkManagers_securityAdminConfigurations_ruleCollections,
	"networkManagers/securityAdminConfigurations/ruleCollections/rules/Custom":
		networkManagers_securityAdminConfigurations_ruleCollections_rules_Custom,
	"networkManagers/securityAdminConfigurations/ruleCollections/rules/Default":
		networkManagers_securityAdminConfigurations_ruleCollections_rules_Default,
	"networkManagers/securityUserConfigurations": networkManagers_securityUserConfigurations,
	"networkManagers/securityUserConfigurations/ruleCollections":
		networkManagers_securityUserConfigurations_ruleCollections,
	"networkManagers/securityUserConfigurations/ruleCollections/rules/Custom":
		networkManagers_securityUserConfigurations_ruleCollections_rules_Custom,
	"networkManagers/securityUserConfigurations/ruleCollections/rules/Default":
		networkManagers_securityUserConfigurations_ruleCollections_rules_Default,
};

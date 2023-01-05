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
	readonly etag?: string;
	readonly name: string;
	readonly properties?: NetworkManagerConnectionProperties;
	readonly systemData?: SystemData;
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
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: NetworkManagerProperties;
	readonly systemData?: SystemData;
	readonly tags?: ResourceTags;
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
	readonly etag?: string;
	readonly name: string;
	readonly properties?: ConnectivityConfigurationProperties;
	readonly systemData?: SystemData;
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
	readonly etag?: string;
	readonly name: string;
	readonly properties?: NetworkGroupProperties;
	readonly systemData?: SystemData;
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
	readonly etag?: string;
	readonly name: string;
	readonly properties?: StaticMemberProperties;
	readonly systemData?: SystemData;
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
	readonly etag?: string;
	readonly name: string;
	readonly properties?: ScopeConnectionProperties;
	readonly systemData?: SystemData;
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
	readonly etag?: string;
	readonly name: string;
	readonly properties?: SecurityAdminConfigurationPropertiesFormat;
	readonly systemData?: SystemData;
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
	readonly etag?: string;
	readonly name: string;
	readonly properties?: AdminRuleCollectionPropertiesFormat;
	readonly systemData?: SystemData;
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
	readonly etag?: string;
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "Custom";
	readonly properties?: AdminPropertiesFormat;
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
	readonly etag?: string;
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "Default";
	readonly properties?: DefaultAdminPropertiesFormat;
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
	readonly etag?: string;
	readonly name: string;
	readonly properties?: SecurityUserConfigurationPropertiesFormat;
	readonly systemData?: SystemData;
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
	readonly etag?: string;
	readonly name: string;
	readonly properties?: UserRuleCollectionPropertiesFormat;
	readonly systemData?: SystemData;
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
	readonly etag?: string;
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "Custom";
	readonly properties?: UserRulePropertiesFormat;
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
	readonly etag?: string;
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "Default";
	readonly properties?: DefaultUserRulePropertiesFormat;
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
	readonly commitTime?: string;
	readonly configurationDescription?: string;
	readonly id?: string;
	readonly region?: string;
	readonly ruleCollectionAppliesToGroups?: NetworkManagerSecurityGroupItem[];
	readonly ruleCollectionDescription?: string;
	readonly ruleGroups?: ConfigurationGroup[];
}
export interface ActiveBaseSecurityUserRule {
	readonly commitTime?: string;
	readonly configurationDescription?: string;
	readonly id?: string;
	readonly region?: string;
	readonly ruleCollectionAppliesToGroups?: NetworkManagerSecurityGroupItem[];
	readonly ruleCollectionDescription?: string;
	readonly ruleGroups?: ConfigurationGroup[];
}
export interface ActiveConfigurationParameter {
	readonly regions?: string[];
	readonly skipToken?: string;
}
export interface ActiveConnectivityConfiguration {
	readonly commitTime?: string;
	readonly configurationGroups?: ConfigurationGroup[];
	readonly id?: string;
	readonly properties?: ConnectivityConfigurationProperties;
	readonly region?: string;
}
export interface ActiveConnectivityConfigurationsListResult {
	readonly skipToken?: string;
	readonly value?: ActiveConnectivityConfiguration[];
}
export interface ActiveSecurityAdminRulesListResult {
	readonly skipToken?: string;
	readonly value?: ActiveBaseSecurityAdminRule[];
}
export interface ActiveSecurityUserRulesListResult {
	readonly skipToken?: string;
	readonly value?: ActiveBaseSecurityUserRule[];
}
export interface AddressPrefixItem {
	readonly addressPrefix?: string;
	readonly addressPrefixType?: "IPPrefix" | "ServiceTag";
}
export interface AdminPropertiesFormat {
	readonly access: "Allow" | "AlwaysAllow" | "Deny";
	readonly description?: string;
	readonly destinationPortRanges?: string[];
	readonly destinations?: AddressPrefixItem[];
	readonly direction: "Inbound" | "Outbound";
	readonly priority: number;
	readonly protocol: "Ah" | "any" | "Esp" | "Icmp" | "Tcp" | "Udp";
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly sourcePortRanges?: string[];
	readonly sources?: AddressPrefixItem[];
}
export interface AdminRuleCollectionPropertiesFormat {
	readonly appliesToGroups: NetworkManagerSecurityGroupItem[];
	readonly description?: string;
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface ConfigurationGroup {
	readonly id?: string;
	readonly properties?: NetworkGroupProperties;
}
export interface ConnectivityConfigurationProperties {
	readonly appliesToGroups: ConnectivityGroupItem[];
	readonly connectivityTopology: "HubAndSpoke" | "Mesh";
	readonly deleteExistingPeering?: "False" | "True";
	readonly description?: string;
	readonly hubs?: Hub[];
	readonly isGlobal?: "False" | "True";
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface ConnectivityGroupItem {
	readonly groupConnectivity: "DirectlyConnected" | "None";
	readonly isGlobal?: "False" | "True";
	readonly networkGroupId: string;
	readonly useHubGateway?: "False" | "True";
}
export interface CrossTenantScopes {
	readonly managementGroups?: string[];
	readonly subscriptions?: string[];
	readonly tenantId?: string;
}
export interface DefaultAdminPropertiesFormat {
	readonly access?: "Allow" | "AlwaysAllow" | "Deny";
	readonly description?: string;
	readonly destinationPortRanges?: string[];
	readonly destinations?: AddressPrefixItem[];
	readonly direction?: "Inbound" | "Outbound";
	readonly flag?: string;
	readonly priority?: number;
	readonly protocol?: "Ah" | "any" | "Esp" | "Icmp" | "Tcp" | "Udp";
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly sourcePortRanges?: string[];
	readonly sources?: AddressPrefixItem[];
}
export interface DefaultUserRulePropertiesFormat {
	readonly description?: string;
	readonly destinationPortRanges?: string[];
	readonly destinations?: AddressPrefixItem[];
	readonly direction?: "Inbound" | "Outbound";
	readonly flag?: string;
	readonly protocol?: "Ah" | "any" | "Esp" | "Icmp" | "Tcp" | "Udp";
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly sourcePortRanges?: string[];
	readonly sources?: AddressPrefixItem[];
}
export interface EffectiveBaseSecurityAdminRule {
	readonly configurationDescription?: string;
	readonly id?: string;
	readonly ruleCollectionAppliesToGroups?: NetworkManagerSecurityGroupItem[];
	readonly ruleCollectionDescription?: string;
	readonly ruleGroups?: ConfigurationGroup[];
}
export interface EffectiveConnectivityConfiguration {
	readonly configurationGroups?: ConfigurationGroup[];
	readonly id?: string;
	readonly properties?: ConnectivityConfigurationProperties;
}
export interface EffectiveVirtualNetwork {
	readonly id?: string;
	readonly location?: string;
	readonly membershipType?: "Dynamic" | "Static";
}
export interface EffectiveVirtualNetworksListResult {
	readonly skipToken?: string;
	readonly value?: EffectiveVirtualNetwork[];
}
export interface EffectiveVirtualNetworksParameter {
	readonly conditionalMembers?: string;
	readonly skipToken?: string;
}
export interface Hub {
	readonly resourceId?: string;
	readonly resourceType?: string;
}
export interface NetworkGroupProperties {
	readonly description?: string;
	readonly memberType: string;
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface NetworkManagerConnectionProperties {
	readonly connectionState?: "Conflict" | "Connected" | "Pending" | "Rejected" | "Revoked";
	readonly description?: string;
	readonly networkManagerId?: string;
}
export interface NetworkManagerDeploymentStatus {
	readonly commitTime?: string;
	readonly configurationIds?: string[];
	readonly deploymentStatus?: "Deployed" | "Deploying" | "Failed" | "NotStarted";
	readonly deploymentType?: "Connectivity" | "SecurityAdmin" | "SecurityUser";
	readonly errorMessage?: string;
	readonly region?: string;
}
export interface NetworkManagerDeploymentStatusListResult {
	readonly skipToken?: string;
	readonly value?: NetworkManagerDeploymentStatus[];
}
export interface NetworkManagerDeploymentStatusParameter {
	readonly deploymentTypes?: "Connectivity" | "SecurityAdmin" | "SecurityUser"[];
	readonly regions?: string[];
	readonly skipToken?: string;
}
export interface NetworkManagerEffectiveConnectivityConfigurationListResult {
	readonly skipToken?: string;
	readonly value?: EffectiveConnectivityConfiguration[];
}
export interface NetworkManagerEffectiveSecurityAdminRulesListResult {
	readonly skipToken?: string;
	readonly value?: EffectiveBaseSecurityAdminRule[];
}
export interface NetworkManagerProperties {
	readonly description?: string;
	readonly networkManagerScopeAccesses: "Connectivity" | "SecurityAdmin" | "SecurityUser"[];
	readonly networkManagerScopes: NetworkManagerPropertiesNetworkManagerScopes;
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface NetworkManagerPropertiesNetworkManagerScopes {
	readonly crossTenantScopes?: CrossTenantScopes[];
	readonly managementGroups?: string[];
	readonly subscriptions?: string[];
}
export interface NetworkManagerSecurityGroupItem {
	readonly networkGroupId: string;
}
export interface QueryRequestOptions {
	readonly skipToken?: string;
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface ScopeConnectionProperties {
	readonly connectionState?: "Conflict" | "Connected" | "Pending" | "Rejected" | "Revoked";
	readonly description?: string;
	readonly resourceId?: string;
	readonly tenantId?: string;
}
export interface SecurityAdminConfigurationPropertiesFormat {
	readonly applyOnNetworkIntentPolicyBasedServices?: "All" | "None"[];
	readonly description?: string;
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface SecurityUserConfigurationPropertiesFormat {
	readonly deleteExistingNSGs?: "False" | "True";
	readonly description?: string;
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface StaticMemberProperties {
	readonly resourceId?: string;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface UserRuleCollectionPropertiesFormat {
	readonly appliesToGroups: NetworkManagerSecurityGroupItem[];
	readonly description?: string;
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface UserRulePropertiesFormat {
	readonly description?: string;
	readonly destinationPortRanges?: string[];
	readonly destinations?: AddressPrefixItem[];
	readonly direction: "Inbound" | "Outbound";
	readonly protocol: "Ah" | "any" | "Esp" | "Icmp" | "Tcp" | "Udp";
	readonly provisioningState?: "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly sourcePortRanges?: string[];
	readonly sources?: AddressPrefixItem[];
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

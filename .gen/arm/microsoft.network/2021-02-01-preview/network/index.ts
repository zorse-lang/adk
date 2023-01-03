import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class networkManagers
	extends ArmResource<networkManagersComponentInputs>
	implements networkManagersComponentOutputs
{
	constructor(entity: ADKEntity, options: networkManagersComponentInputs) {
		super(entity, options.name, "Microsoft.Network/networkManagers", "2021-02-01-preview", options);
	}
	public readonly apiVersion: "2021-02-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkManagers";
}
export interface networkManagersComponentOutputs {
	readonly apiVersion: "2021-02-01-preview";
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
			"2021-02-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-02-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkManagers/connectivityConfigurations";
}
export interface networkManagers_connectivityConfigurationsComponentOutputs {
	readonly apiVersion: "2021-02-01-preview";
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
		super(entity, options.name, "Microsoft.Network/networkManagers/networkGroups", "2021-02-01-preview", options);
	}
	public readonly apiVersion: "2021-02-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkManagers/networkGroups";
}
export interface networkManagers_networkGroupsComponentOutputs {
	readonly apiVersion: "2021-02-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Network/networkManagers/networkGroups";
}
export interface networkManagers_networkGroupsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: NetworkGroupProperties | undefined;
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
			"2021-02-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-02-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkManagers/securityAdminConfigurations";
}
export interface networkManagers_securityAdminConfigurationsComponentOutputs {
	readonly apiVersion: "2021-02-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Network/networkManagers/securityAdminConfigurations";
}
export interface networkManagers_securityAdminConfigurationsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: SecurityConfigurationPropertiesFormat | undefined;
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
			"2021-02-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-02-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkManagers/securityAdminConfigurations/ruleCollections";
}
export interface networkManagers_securityAdminConfigurations_ruleCollectionsComponentOutputs {
	readonly apiVersion: "2021-02-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Network/networkManagers/securityAdminConfigurations/ruleCollections";
}
export interface networkManagers_securityAdminConfigurations_ruleCollectionsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: RuleCollectionPropertiesFormat | undefined;
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
			"2021-02-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-02-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkManagers/securityAdminConfigurations/ruleCollections/rules";
}
export interface networkManagers_securityAdminConfigurations_ruleCollections_rules_CustomComponentOutputs {
	readonly apiVersion: "2021-02-01-preview";
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
			"2021-02-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-02-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkManagers/securityAdminConfigurations/ruleCollections/rules";
}
export interface networkManagers_securityAdminConfigurations_ruleCollections_rules_DefaultComponentOutputs {
	readonly apiVersion: "2021-02-01-preview";
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
			"2021-02-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-02-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkManagers/securityUserConfigurations";
}
export interface networkManagers_securityUserConfigurationsComponentOutputs {
	readonly apiVersion: "2021-02-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Network/networkManagers/securityUserConfigurations";
}
export interface networkManagers_securityUserConfigurationsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: SecurityConfigurationPropertiesFormat | undefined;
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
			"2021-02-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-02-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkManagers/securityUserConfigurations/ruleCollections";
}
export interface networkManagers_securityUserConfigurations_ruleCollectionsComponentOutputs {
	readonly apiVersion: "2021-02-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Network/networkManagers/securityUserConfigurations/ruleCollections";
}
export interface networkManagers_securityUserConfigurations_ruleCollectionsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: RuleCollectionPropertiesFormat | undefined;
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
			"2021-02-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-02-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkManagers/securityUserConfigurations/ruleCollections/rules";
}
export interface networkManagers_securityUserConfigurations_ruleCollections_rules_CustomComponentOutputs {
	readonly apiVersion: "2021-02-01-preview";
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
			"2021-02-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-02-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkManagers/securityUserConfigurations/ruleCollections/rules";
}
export interface networkManagers_securityUserConfigurations_ruleCollections_rules_DefaultComponentOutputs {
	readonly apiVersion: "2021-02-01-preview";
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
export class networkSecurityPerimeters
	extends ArmResource<networkSecurityPerimetersComponentInputs>
	implements networkSecurityPerimetersComponentOutputs
{
	constructor(entity: ADKEntity, options: networkSecurityPerimetersComponentInputs) {
		super(entity, options.name, "Microsoft.Network/networkSecurityPerimeters", "2021-02-01-preview", options);
	}
	public readonly apiVersion: "2021-02-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkSecurityPerimeters";
}
export interface networkSecurityPerimetersComponentOutputs {
	readonly apiVersion: "2021-02-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Network/networkSecurityPerimeters";
}
export interface networkSecurityPerimetersComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: NetworkSecurityPerimeterProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class networkSecurityPerimeters_linkReferences
	extends ArmResource<networkSecurityPerimeters_linkReferencesComponentInputs>
	implements networkSecurityPerimeters_linkReferencesComponentOutputs
{
	constructor(entity: ADKEntity, options: networkSecurityPerimeters_linkReferencesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Network/networkSecurityPerimeters/linkReferences",
			"2021-02-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-02-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkSecurityPerimeters/linkReferences";
}
export interface networkSecurityPerimeters_linkReferencesComponentOutputs {
	readonly apiVersion: "2021-02-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Network/networkSecurityPerimeters/linkReferences";
}
export interface networkSecurityPerimeters_linkReferencesComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: NspLinkReferenceProperties | undefined;
}
export class networkSecurityPerimeters_links
	extends ArmResource<networkSecurityPerimeters_linksComponentInputs>
	implements networkSecurityPerimeters_linksComponentOutputs
{
	constructor(entity: ADKEntity, options: networkSecurityPerimeters_linksComponentInputs) {
		super(entity, options.name, "Microsoft.Network/networkSecurityPerimeters/links", "2021-02-01-preview", options);
	}
	public readonly apiVersion: "2021-02-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkSecurityPerimeters/links";
}
export interface networkSecurityPerimeters_linksComponentOutputs {
	readonly apiVersion: "2021-02-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Network/networkSecurityPerimeters/links";
}
export interface networkSecurityPerimeters_linksComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: NspLinkProperties | undefined;
}
export class networkSecurityPerimeters_profiles
	extends ArmResource<networkSecurityPerimeters_profilesComponentInputs>
	implements networkSecurityPerimeters_profilesComponentOutputs
{
	constructor(entity: ADKEntity, options: networkSecurityPerimeters_profilesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/networkSecurityPerimeters/profiles", "2021-02-01-preview", options);
	}
	public readonly apiVersion: "2021-02-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkSecurityPerimeters/profiles";
}
export interface networkSecurityPerimeters_profilesComponentOutputs {
	readonly apiVersion: "2021-02-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Network/networkSecurityPerimeters/profiles";
}
export interface networkSecurityPerimeters_profilesComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: NspProfileProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class networkSecurityPerimeters_profiles_accessRules
	extends ArmResource<networkSecurityPerimeters_profiles_accessRulesComponentInputs>
	implements networkSecurityPerimeters_profiles_accessRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: networkSecurityPerimeters_profiles_accessRulesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Network/networkSecurityPerimeters/profiles/accessRules",
			"2021-02-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-02-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkSecurityPerimeters/profiles/accessRules";
}
export interface networkSecurityPerimeters_profiles_accessRulesComponentOutputs {
	readonly apiVersion: "2021-02-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Network/networkSecurityPerimeters/profiles/accessRules";
}
export interface networkSecurityPerimeters_profiles_accessRulesComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: NspAccessRuleProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class networkSecurityPerimeters_resourceAssociations
	extends ArmResource<networkSecurityPerimeters_resourceAssociationsComponentInputs>
	implements networkSecurityPerimeters_resourceAssociationsComponentOutputs
{
	constructor(entity: ADKEntity, options: networkSecurityPerimeters_resourceAssociationsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Network/networkSecurityPerimeters/resourceAssociations",
			"2021-02-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-02-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Network/networkSecurityPerimeters/resourceAssociations";
}
export interface networkSecurityPerimeters_resourceAssociationsComponentOutputs {
	readonly apiVersion: "2021-02-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Network/networkSecurityPerimeters/resourceAssociations";
}
export interface networkSecurityPerimeters_resourceAssociationsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: NspAssociationProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export function listActiveConnectivityConfigurations(
	resource: networkManagers,
	input: ActiveConfigurationParameter,
): ActiveConnectivityConfigurationsListResult {
	if (resource.apiVersion !== "2021-02-01-preview") {
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
	if (resource.apiVersion !== "2021-02-01-preview") {
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
	if (resource.apiVersion !== "2021-02-01-preview") {
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
	if (resource.apiVersion !== "2021-02-01-preview") {
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
	if (resource.apiVersion !== "2021-02-01-preview") {
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
	if (resource.apiVersion !== "2021-02-01-preview") {
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
	if (resource.apiVersion !== "2021-02-01-preview") {
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
	readonly configurationDisplayName?: string | undefined;
	readonly id?: string | undefined;
	readonly region?: string | undefined;
	readonly ruleCollectionAppliesToGroups?: NetworkManagerSecurityGroupItem[] | undefined;
	readonly ruleCollectionDescription?: string | undefined;
	readonly ruleCollectionDisplayName?: string | undefined;
	readonly ruleGroups?: ConfigurationGroup[] | undefined;
}
export interface ActiveBaseSecurityUserRule {
	readonly commitTime?: string | undefined;
	readonly configurationDescription?: string | undefined;
	readonly configurationDisplayName?: string | undefined;
	readonly id?: string | undefined;
	readonly region?: string | undefined;
	readonly ruleCollectionAppliesToGroups?: NetworkManagerSecurityGroupItem[] | undefined;
	readonly ruleCollectionDescription?: string | undefined;
	readonly ruleCollectionDisplayName?: string | undefined;
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
	readonly displayName?: string | undefined;
	readonly priority?: number | undefined;
	readonly protocol: "Ah" | "any" | "Esp" | "Icmp" | "Tcp" | "Udp";
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly sourcePortRanges?: string[] | undefined;
	readonly sources?: AddressPrefixItem[] | undefined;
}
export interface ConfigurationGroup {
	readonly id?: string | undefined;
	readonly properties?: NetworkGroupProperties | undefined;
}
export interface ConnectivityConfigurationProperties {
	readonly appliesToGroups?: ConnectivityGroupItem[] | undefined;
	readonly connectivityTopology: "HubAndSpoke" | "Mesh";
	readonly deleteExistingPeering?: ("False" | "True") | undefined;
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly hubs?: Hub[] | undefined;
	readonly isGlobal?: ("False" | "True") | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface ConnectivityGroupItem {
	readonly groupConnectivity?: ("DirectlyConnected" | "None") | undefined;
	readonly isGlobal?: ("False" | "True") | undefined;
	readonly networkGroupId?: string | undefined;
	readonly useHubGateway?: ("False" | "True") | undefined;
}
export interface DefaultAdminPropertiesFormat {
	readonly access?: ("Allow" | "AlwaysAllow" | "Deny") | undefined;
	readonly description?: string | undefined;
	readonly destinationPortRanges?: string[] | undefined;
	readonly destinations?: AddressPrefixItem[] | undefined;
	readonly direction?: ("Inbound" | "Outbound") | undefined;
	readonly displayName?: string | undefined;
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
	readonly displayName?: string | undefined;
	readonly flag?: string | undefined;
	readonly protocol?: ("Ah" | "any" | "Esp" | "Icmp" | "Tcp" | "Udp") | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly sourcePortRanges?: string[] | undefined;
	readonly sources?: AddressPrefixItem[] | undefined;
}
export interface EffectiveBaseSecurityAdminRule {
	readonly configurationDescription?: string | undefined;
	readonly configurationDisplayName?: string | undefined;
	readonly id?: string | undefined;
	readonly ruleCollectionAppliesToGroups?: NetworkManagerSecurityGroupItem[] | undefined;
	readonly ruleCollectionDescription?: string | undefined;
	readonly ruleCollectionDisplayName?: string | undefined;
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
export interface GroupMembersItem {
	readonly resourceId?: string | undefined;
}
export interface Hub {
	readonly resourceId?: string | undefined;
	readonly resourceType?: string | undefined;
}
export interface NetworkGroupProperties {
	readonly conditionalMembership?: string | undefined;
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly groupMembers?: GroupMembersItem[] | undefined;
	readonly memberType?: string | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
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
	readonly displayName?: string | undefined;
	readonly networkManagerScopeAccesses?: ("Connectivity" | "SecurityAdmin" | "SecurityUser"[]) | undefined;
	readonly networkManagerScopes?: NetworkManagerPropertiesNetworkManagerScopes | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface NetworkManagerPropertiesNetworkManagerScopes {
	readonly managementGroups?: string[] | undefined;
	readonly subscriptions?: string[] | undefined;
}
export interface NetworkManagerSecurityGroupItem {
	readonly networkGroupId?: string | undefined;
}
export interface NetworkSecurityPerimeterProperties {
	readonly perimeterGuid?: string | undefined;
	readonly provisioningState?: ("Accepted" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface NspAccessRuleProperties {
	readonly addressPrefixes?: string[] | undefined;
	readonly direction?: ("Inbound" | "Outbound") | undefined;
	readonly fullyQualifiedDomainNames?: string[] | undefined;
	readonly networkSecurityPerimeters?: PerimeterBasedAccessRule[] | undefined;
	readonly provisioningState?: ("Accepted" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly subscriptions?: SubscriptionId[] | undefined;
}
export interface NspAssociationProperties {
	readonly accessMode?: ("Audit" | "Enforced" | "Learning") | undefined;
	readonly hasProvisioningIssues?: string | undefined;
	readonly privateLinkResource?: SubResource | undefined;
	readonly profile?: SubResource | undefined;
	readonly provisioningState?: ("Accepted" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface NspLinkProperties {
	readonly autoApprovedRemotePerimeterResourceId?: string | undefined;
	readonly description?: string | undefined;
	readonly localInboundProfiles?: string[] | undefined;
	readonly localOutboundProfiles?: string[] | undefined;
	readonly provisioningState?: ("Accepted" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly remoteInboundProfiles?: string[] | undefined;
	readonly remoteOutboundProfiles?: string[] | undefined;
	readonly remotePerimeterGuid?: string | undefined;
	readonly status?: ("Approved" | "Disconnected" | "Pending" | "Rejected") | undefined;
}
export interface NspLinkReferenceProperties {
	readonly description?: string | undefined;
	readonly localInboundProfiles?: string[] | undefined;
	readonly localOutboundProfiles?: string[] | undefined;
	readonly provisioningState?: ("Accepted" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly remoteInboundProfiles?: string[] | undefined;
	readonly remoteOutboundProfiles?: string[] | undefined;
	readonly remotePerimeterGuid?: string | undefined;
	readonly remotePerimeterResourceId?: string | undefined;
	readonly status?: ("Approved" | "Disconnected" | "Pending" | "Rejected") | undefined;
}
export interface NspProfileProperties {
	readonly accessRulesVersion?: string | undefined;
	readonly diagnosticSettingsVersion?: string | undefined;
}
export interface PerimeterBasedAccessRule {
	readonly id?: string | undefined;
	readonly location?: string | undefined;
	readonly perimeterGuid?: string | undefined;
}
export interface QueryRequestOptions {
	readonly skipToken?: string | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface RuleCollectionPropertiesFormat {
	readonly appliesToGroups?: NetworkManagerSecurityGroupItem[] | undefined;
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface SecurityConfigurationPropertiesFormat {
	readonly deleteExistingNSGs?: ("False" | "True") | undefined;
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly provisioningState?: ("Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly securityType?: ("AdminPolicy" | "UserPolicy") | undefined;
}
export interface SubResource {
	readonly id?: string | undefined;
}
export interface SubscriptionId {
	readonly id?: string | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface UserRulePropertiesFormat {
	readonly description?: string | undefined;
	readonly destinationPortRanges?: string[] | undefined;
	readonly destinations?: AddressPrefixItem[] | undefined;
	readonly direction: "Inbound" | "Outbound";
	readonly displayName?: string | undefined;
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
	networkManagers: networkManagers,
	"networkManagers/connectivityConfigurations": networkManagers_connectivityConfigurations,
	"networkManagers/networkGroups": networkManagers_networkGroups,
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
	networkSecurityPerimeters: networkSecurityPerimeters,
	"networkSecurityPerimeters/linkReferences": networkSecurityPerimeters_linkReferences,
	"networkSecurityPerimeters/links": networkSecurityPerimeters_links,
	"networkSecurityPerimeters/profiles": networkSecurityPerimeters_profiles,
	"networkSecurityPerimeters/profiles/accessRules": networkSecurityPerimeters_profiles_accessRules,
	"networkSecurityPerimeters/resourceAssociations": networkSecurityPerimeters_resourceAssociations,
};

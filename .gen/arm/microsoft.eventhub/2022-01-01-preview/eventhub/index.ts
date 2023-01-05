import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class clusters extends ArmResource<clustersComponentInputs> implements clustersComponentOutputs {
	constructor(entity: ADKEntity, options: clustersComponentInputs) {
		super(entity, options.name, "Microsoft.EventHub/clusters", "2022-01-01-preview", options);
	}
	public readonly apiVersion: "2022-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.EventHub/clusters";
}
export interface clustersComponentOutputs {
	readonly apiVersion: "2022-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.EventHub/clusters";
}
export interface clustersComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: ClusterProperties;
	readonly sku?: ClusterSku;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class namespaces extends ArmResource<namespacesComponentInputs> implements namespacesComponentOutputs {
	constructor(entity: ADKEntity, options: namespacesComponentInputs) {
		super(entity, options.name, "Microsoft.EventHub/namespaces", "2022-01-01-preview", options);
	}
	public readonly apiVersion: "2022-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.EventHub/namespaces";
}
export interface namespacesComponentOutputs {
	readonly apiVersion: "2022-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.EventHub/namespaces";
}
export interface namespacesComponentInputs {
	readonly identity?: Identity;
	readonly location?: string;
	readonly name: string;
	readonly properties?: EHNamespaceProperties;
	readonly sku?: Sku;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class namespaces_applicationGroups
	extends ArmResource<namespaces_applicationGroupsComponentInputs>
	implements namespaces_applicationGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: namespaces_applicationGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.EventHub/namespaces/applicationGroups", "2022-01-01-preview", options);
	}
	public readonly apiVersion: "2022-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.EventHub/namespaces/applicationGroups";
}
export interface namespaces_applicationGroupsComponentOutputs {
	readonly apiVersion: "2022-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.EventHub/namespaces/applicationGroups";
}
export interface namespaces_applicationGroupsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: ApplicationGroupProperties;
	readonly systemData?: SystemData;
}
export class namespaces_authorizationRules
	extends ArmResource<namespaces_authorizationRulesComponentInputs>
	implements namespaces_authorizationRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: namespaces_authorizationRulesComponentInputs) {
		super(entity, options.name, "Microsoft.EventHub/namespaces/authorizationRules", "2022-01-01-preview", options);
	}
	public readonly apiVersion: "2022-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.EventHub/namespaces/authorizationRules";
}
export interface namespaces_authorizationRulesComponentOutputs {
	readonly apiVersion: "2022-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.EventHub/namespaces/authorizationRules";
}
export interface namespaces_authorizationRulesComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: AuthorizationRuleProperties;
	readonly systemData?: SystemData;
}
export class namespaces_disasterRecoveryConfigs
	extends ArmResource<namespaces_disasterRecoveryConfigsComponentInputs>
	implements namespaces_disasterRecoveryConfigsComponentOutputs
{
	constructor(entity: ADKEntity, options: namespaces_disasterRecoveryConfigsComponentInputs) {
		super(entity, options.name, "Microsoft.EventHub/namespaces/disasterRecoveryConfigs", "2022-01-01-preview", options);
	}
	public readonly apiVersion: "2022-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.EventHub/namespaces/disasterRecoveryConfigs";
}
export interface namespaces_disasterRecoveryConfigsComponentOutputs {
	readonly apiVersion: "2022-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.EventHub/namespaces/disasterRecoveryConfigs";
}
export interface namespaces_disasterRecoveryConfigsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: ArmDisasterRecoveryProperties;
	readonly systemData?: SystemData;
}
export class namespaces_disasterRecoveryConfigs_authorizationRules
	extends ArmResource<namespaces_disasterRecoveryConfigs_authorizationRulesComponentInputs>
	implements namespaces_disasterRecoveryConfigs_authorizationRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: namespaces_disasterRecoveryConfigs_authorizationRulesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.EventHub/namespaces/disasterRecoveryConfigs/authorizationRules",
			"2022-01-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.EventHub/namespaces/disasterRecoveryConfigs/authorizationRules";
}
export interface namespaces_disasterRecoveryConfigs_authorizationRulesComponentOutputs {
	readonly apiVersion: "2022-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.EventHub/namespaces/disasterRecoveryConfigs/authorizationRules";
}
export interface namespaces_disasterRecoveryConfigs_authorizationRulesComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: AuthorizationRuleProperties;
	readonly systemData?: SystemData;
}
export class namespaces_eventhubs
	extends ArmResource<namespaces_eventhubsComponentInputs>
	implements namespaces_eventhubsComponentOutputs
{
	constructor(entity: ADKEntity, options: namespaces_eventhubsComponentInputs) {
		super(entity, options.name, "Microsoft.EventHub/namespaces/eventhubs", "2022-01-01-preview", options);
	}
	public readonly apiVersion: "2022-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.EventHub/namespaces/eventhubs";
}
export interface namespaces_eventhubsComponentOutputs {
	readonly apiVersion: "2022-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.EventHub/namespaces/eventhubs";
}
export interface namespaces_eventhubsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: EventhubProperties;
	readonly systemData?: SystemData;
}
export class namespaces_eventhubs_authorizationRules
	extends ArmResource<namespaces_eventhubs_authorizationRulesComponentInputs>
	implements namespaces_eventhubs_authorizationRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: namespaces_eventhubs_authorizationRulesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.EventHub/namespaces/eventhubs/authorizationRules",
			"2022-01-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.EventHub/namespaces/eventhubs/authorizationRules";
}
export interface namespaces_eventhubs_authorizationRulesComponentOutputs {
	readonly apiVersion: "2022-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.EventHub/namespaces/eventhubs/authorizationRules";
}
export interface namespaces_eventhubs_authorizationRulesComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: AuthorizationRuleProperties;
	readonly systemData?: SystemData;
}
export class namespaces_eventhubs_consumergroups
	extends ArmResource<namespaces_eventhubs_consumergroupsComponentInputs>
	implements namespaces_eventhubs_consumergroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: namespaces_eventhubs_consumergroupsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.EventHub/namespaces/eventhubs/consumergroups",
			"2022-01-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.EventHub/namespaces/eventhubs/consumergroups";
}
export interface namespaces_eventhubs_consumergroupsComponentOutputs {
	readonly apiVersion: "2022-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.EventHub/namespaces/eventhubs/consumergroups";
}
export interface namespaces_eventhubs_consumergroupsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: ConsumerGroupProperties;
	readonly systemData?: SystemData;
}
export class namespaces_networkRuleSets
	extends ArmResource<namespaces_networkRuleSetsComponentInputs>
	implements namespaces_networkRuleSetsComponentOutputs
{
	constructor(entity: ADKEntity, options: namespaces_networkRuleSetsComponentInputs) {
		super(entity, options.name, "Microsoft.EventHub/namespaces/networkRuleSets", "2022-01-01-preview", options);
	}
	public readonly apiVersion: "2022-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.EventHub/namespaces/networkRuleSets";
}
export interface namespaces_networkRuleSetsComponentOutputs {
	readonly apiVersion: "2022-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.EventHub/namespaces/networkRuleSets";
}
export interface namespaces_networkRuleSetsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: NetworkRuleSetProperties;
	readonly systemData?: SystemData;
}
export class namespaces_privateEndpointConnections
	extends ArmResource<namespaces_privateEndpointConnectionsComponentInputs>
	implements namespaces_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: namespaces_privateEndpointConnectionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.EventHub/namespaces/privateEndpointConnections",
			"2022-01-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.EventHub/namespaces/privateEndpointConnections";
}
export interface namespaces_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2022-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.EventHub/namespaces/privateEndpointConnections";
}
export interface namespaces_privateEndpointConnectionsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties;
	readonly systemData?: SystemData;
}
export class namespaces_schemagroups
	extends ArmResource<namespaces_schemagroupsComponentInputs>
	implements namespaces_schemagroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: namespaces_schemagroupsComponentInputs) {
		super(entity, options.name, "Microsoft.EventHub/namespaces/schemagroups", "2022-01-01-preview", options);
	}
	public readonly apiVersion: "2022-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.EventHub/namespaces/schemagroups";
}
export interface namespaces_schemagroupsComponentOutputs {
	readonly apiVersion: "2022-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.EventHub/namespaces/schemagroups";
}
export interface namespaces_schemagroupsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: SchemaGroupProperties;
	readonly systemData?: SystemData;
}
export function listKeys(resource: namespaces_authorizationRules): AccessKeys {
	if (resource.apiVersion !== "2022-01-01-preview") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.EventHub/namespaces/authorizationRules") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AccessKeys {
	readonly aliasPrimaryConnectionString?: string;
	readonly aliasSecondaryConnectionString?: string;
	readonly keyName?: string;
	readonly primaryConnectionString?: string;
	readonly primaryKey?: string;
	readonly secondaryConnectionString?: string;
	readonly secondaryKey?: string;
}
export interface ApplicationGroupPolicy {
	readonly name: string;
}
export interface ApplicationGroupProperties {
	readonly clientAppGroupIdentifier: string;
	readonly isEnabled?: boolean;
	readonly policies?: ApplicationGroupPolicy[];
}
export interface ArmDisasterRecoveryProperties {
	readonly alternateName?: string;
	readonly partnerNamespace?: string;
	readonly pendingReplicationOperationsCount?: number;
	readonly provisioningState?: "Accepted" | "Failed";
	readonly role?: "Primary" | "PrimaryNotReplicating";
}
export interface AuthorizationRuleProperties {
	readonly rights: "Listen" | "Manage" | "Send"[];
}
export interface CaptureDescription {
	readonly destination?: Destination;
	readonly enabled?: boolean;
	readonly encoding?: "Avro";
	readonly intervalInSeconds?: number;
	readonly sizeLimitInBytes?: number;
	readonly skipEmptyArchives?: boolean;
}
export interface ClusterProperties {
	readonly createdAt?: string;
	readonly metricId?: string;
	readonly status?: string;
	readonly supportsScaling?: boolean;
	readonly updatedAt?: string;
}
export interface ClusterSku {
	readonly capacity?: number;
	readonly name: "Dedicated";
}
export interface ConnectionState {
	readonly description?: string;
	readonly status?: "Approved" | "Disconnected" | "Pending" | "Rejected";
}
export interface ConsumerGroupProperties {
	readonly createdAt?: string;
	readonly updatedAt?: string;
	readonly userMetadata?: string;
}
export interface Destination {
	readonly name?: string;
	readonly properties?: DestinationProperties;
}
export interface DestinationProperties {
	readonly archiveNameFormat?: string;
	readonly blobContainer?: string;
	readonly dataLakeAccountName?: string;
	readonly dataLakeFolderPath?: string;
	readonly dataLakeSubscriptionId?: string;
	readonly storageAccountResourceId?: string;
}
export interface EHNamespaceProperties {
	readonly alternateName?: string;
	readonly clusterArmId?: string;
	readonly createdAt?: string;
	readonly disableLocalAuth?: boolean;
	readonly encryption?: Encryption;
	readonly isAutoInflateEnabled?: boolean;
	readonly kafkaEnabled?: boolean;
	readonly maximumThroughputUnits?: number;
	readonly metricId?: string;
	readonly minimumTlsVersion?: "1.0" | "1.1" | "1.2";
	readonly privateEndpointConnections?: PrivateEndpointConnection[];
	readonly provisioningState?: string;
	readonly publicNetworkAccess?: "Disabled" | "Enabled" | "SecuredByPerimeter";
	readonly serviceBusEndpoint?: string;
	readonly status?: string;
	readonly updatedAt?: string;
	readonly zoneRedundant?: boolean;
}
export interface Encryption {
	readonly keySource?: "Microsoft.KeyVault";
	readonly keyVaultProperties?: KeyVaultProperties[];
	readonly requireInfrastructureEncryption?: boolean;
}
export interface EventhubProperties {
	readonly captureDescription?: CaptureDescription;
	readonly createdAt?: string;
	readonly messageRetentionInDays?: number;
	readonly partitionCount?: number;
	readonly partitionIds?: string[];
	readonly status?:
		| "Active"
		| "Creating"
		| "Deleting"
		| "Disabled"
		| "ReceiveDisabled"
		| "Renaming"
		| "Restoring"
		| "SendDisabled";
	readonly updatedAt?: string;
}
export interface Identity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "None" | "SystemAssigned" | "SystemAssigned, UserAssigned";
	readonly userAssignedIdentities?: IdentityUserAssignedIdentities;
}
export interface IdentityUserAssignedIdentities {
	readonly [key: string]: UserAssignedIdentity;
}
export interface KeyVaultProperties {
	readonly identity?: UserAssignedIdentityProperties;
	readonly keyName?: string;
	readonly keyVaultUri?: string;
	readonly keyVersion?: string;
}
export interface NetworkRuleSetProperties {
	readonly defaultAction?: "Allow" | "Deny";
	readonly ipRules?: NWRuleSetIpRules[];
	readonly publicNetworkAccess?: "Disabled" | "Enabled" | "SecuredByPerimeter";
	readonly trustedServiceAccessEnabled?: boolean;
	readonly virtualNetworkRules?: NWRuleSetVirtualNetworkRules[];
}
export interface NWRuleSetIpRules {
	readonly action?: "Allow";
	readonly ipMask?: string;
}
export interface NWRuleSetVirtualNetworkRules {
	readonly ignoreMissingVnetServiceEndpoint?: boolean;
	readonly subnet?: Subnet;
}
export interface PrivateEndpoint {
	readonly id?: string;
}
export interface PrivateEndpointConnection {
	readonly id?: string;
	readonly location?: string;
	readonly name?: string;
	readonly properties?: PrivateEndpointConnectionProperties;
	readonly systemData?: SystemData;
	readonly type?: string;
}
export interface PrivateEndpointConnectionProperties {
	readonly privateEndpoint?: PrivateEndpoint;
	readonly privateLinkServiceConnectionState?: ConnectionState;
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface SchemaGroupProperties {
	readonly createdAtUtc?: string;
	readonly eTag?: string;
	readonly groupProperties?: SchemaGroupProperties;
	readonly schemaCompatibility?: "Backward" | "Forward" | "None";
	readonly schemaType?: "Avro" | "Unknown";
	readonly updatedAtUtc?: string;
}
export interface Sku {
	readonly capacity?: number;
	readonly name: "Basic" | "Premium" | "Standard";
	readonly tier?: "Basic" | "Premium" | "Standard";
}
export interface Subnet {
	readonly id?: string;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export interface UserAssignedIdentity {
	readonly clientId?: string;
	readonly principalId?: string;
}
export interface UserAssignedIdentityProperties {
	readonly userAssignedIdentity?: string;
}
export default {
	clusters: clusters,
	namespaces: namespaces,
	"namespaces/applicationGroups": namespaces_applicationGroups,
	"namespaces/authorizationRules": namespaces_authorizationRules,
	"namespaces/disasterRecoveryConfigs": namespaces_disasterRecoveryConfigs,
	"namespaces/disasterRecoveryConfigs/authorizationRules": namespaces_disasterRecoveryConfigs_authorizationRules,
	"namespaces/eventhubs": namespaces_eventhubs,
	"namespaces/eventhubs/authorizationRules": namespaces_eventhubs_authorizationRules,
	"namespaces/eventhubs/consumergroups": namespaces_eventhubs_consumergroups,
	"namespaces/networkRuleSets": namespaces_networkRuleSets,
	"namespaces/privateEndpointConnections": namespaces_privateEndpointConnections,
	"namespaces/schemagroups": namespaces_schemagroups,
};

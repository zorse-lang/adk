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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ClusterProperties | undefined;
	readonly sku?: ClusterSku | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly identity?: Identity | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: EHNamespaceProperties | undefined;
	readonly sku?: Sku | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ApplicationGroupProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: AuthorizationRuleProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ArmDisasterRecoveryProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: AuthorizationRuleProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: EventhubProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: AuthorizationRuleProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ConsumerGroupProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: NetworkRuleSetProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: SchemaGroupProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly aliasPrimaryConnectionString?: string | undefined;
	readonly aliasSecondaryConnectionString?: string | undefined;
	readonly keyName?: string | undefined;
	readonly primaryConnectionString?: string | undefined;
	readonly primaryKey?: string | undefined;
	readonly secondaryConnectionString?: string | undefined;
	readonly secondaryKey?: string | undefined;
}
export interface ApplicationGroupPolicy {
	readonly name: string;
}
export interface ApplicationGroupProperties {
	readonly clientAppGroupIdentifier: string;
	readonly isEnabled?: boolean | undefined;
	readonly policies?: ApplicationGroupPolicy[] | undefined;
}
export interface ArmDisasterRecoveryProperties {
	readonly alternateName?: string | undefined;
	readonly partnerNamespace?: string | undefined;
	readonly pendingReplicationOperationsCount?: number | undefined;
	readonly provisioningState?: ("Accepted" | "Failed") | undefined;
	readonly role?: ("Primary" | "PrimaryNotReplicating") | undefined;
}
export interface AuthorizationRuleProperties {
	readonly rights: "Listen" | "Manage" | "Send"[];
}
export interface CaptureDescription {
	readonly destination?: Destination | undefined;
	readonly enabled?: boolean | undefined;
	readonly encoding?: "Avro" | undefined;
	readonly intervalInSeconds?: number | undefined;
	readonly sizeLimitInBytes?: number | undefined;
	readonly skipEmptyArchives?: boolean | undefined;
}
export interface ClusterProperties {
	readonly createdAt?: string | undefined;
	readonly metricId?: string | undefined;
	readonly status?: string | undefined;
	readonly supportsScaling?: boolean | undefined;
	readonly updatedAt?: string | undefined;
}
export interface ClusterSku {
	readonly capacity?: number | undefined;
	readonly name: "Dedicated";
}
export interface ConnectionState {
	readonly description?: string | undefined;
	readonly status?: ("Approved" | "Disconnected" | "Pending" | "Rejected") | undefined;
}
export interface ConsumerGroupProperties {
	readonly createdAt?: string | undefined;
	readonly updatedAt?: string | undefined;
	readonly userMetadata?: string | undefined;
}
export interface Destination {
	readonly name?: string | undefined;
	readonly properties?: DestinationProperties | undefined;
}
export interface DestinationProperties {
	readonly archiveNameFormat?: string | undefined;
	readonly blobContainer?: string | undefined;
	readonly dataLakeAccountName?: string | undefined;
	readonly dataLakeFolderPath?: string | undefined;
	readonly dataLakeSubscriptionId?: string | undefined;
	readonly storageAccountResourceId?: string | undefined;
}
export interface EHNamespaceProperties {
	readonly alternateName?: string | undefined;
	readonly clusterArmId?: string | undefined;
	readonly createdAt?: string | undefined;
	readonly disableLocalAuth?: boolean | undefined;
	readonly encryption?: Encryption | undefined;
	readonly isAutoInflateEnabled?: boolean | undefined;
	readonly kafkaEnabled?: boolean | undefined;
	readonly maximumThroughputUnits?: number | undefined;
	readonly metricId?: string | undefined;
	readonly minimumTlsVersion?: ("1.0" | "1.1" | "1.2") | undefined;
	readonly privateEndpointConnections?: PrivateEndpointConnection[] | undefined;
	readonly provisioningState?: string | undefined;
	readonly publicNetworkAccess?: ("Disabled" | "Enabled" | "SecuredByPerimeter") | undefined;
	readonly serviceBusEndpoint?: string | undefined;
	readonly status?: string | undefined;
	readonly updatedAt?: string | undefined;
	readonly zoneRedundant?: boolean | undefined;
}
export interface Encryption {
	readonly keySource?: "Microsoft.KeyVault" | undefined;
	readonly keyVaultProperties?: KeyVaultProperties[] | undefined;
	readonly requireInfrastructureEncryption?: boolean | undefined;
}
export interface EventhubProperties {
	readonly captureDescription?: CaptureDescription | undefined;
	readonly createdAt?: string | undefined;
	readonly messageRetentionInDays?: number | undefined;
	readonly partitionCount?: number | undefined;
	readonly partitionIds?: string[] | undefined;
	readonly status?:
		| ("Active" | "Creating" | "Deleting" | "Disabled" | "ReceiveDisabled" | "Renaming" | "Restoring" | "SendDisabled")
		| undefined;
	readonly updatedAt?: string | undefined;
}
export interface Identity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: ("None" | "SystemAssigned" | "SystemAssigned, UserAssigned") | undefined;
	readonly userAssignedIdentities?: IdentityUserAssignedIdentities | undefined;
}
export interface IdentityUserAssignedIdentities {
	readonly "[ key: string ]"?: UserAssignedIdentity | undefined;
}
export interface KeyVaultProperties {
	readonly identity?: UserAssignedIdentityProperties | undefined;
	readonly keyName?: string | undefined;
	readonly keyVaultUri?: string | undefined;
	readonly keyVersion?: string | undefined;
}
export interface NetworkRuleSetProperties {
	readonly defaultAction?: ("Allow" | "Deny") | undefined;
	readonly ipRules?: NWRuleSetIpRules[] | undefined;
	readonly publicNetworkAccess?: ("Disabled" | "Enabled" | "SecuredByPerimeter") | undefined;
	readonly trustedServiceAccessEnabled?: boolean | undefined;
	readonly virtualNetworkRules?: NWRuleSetVirtualNetworkRules[] | undefined;
}
export interface NWRuleSetIpRules {
	readonly action?: "Allow" | undefined;
	readonly ipMask?: string | undefined;
}
export interface NWRuleSetVirtualNetworkRules {
	readonly ignoreMissingVnetServiceEndpoint?: boolean | undefined;
	readonly subnet?: Subnet | undefined;
}
export interface PrivateEndpoint {
	readonly id?: string | undefined;
}
export interface PrivateEndpointConnection {
	readonly id?: string | undefined;
	readonly location?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly type?: string | undefined;
}
export interface PrivateEndpointConnectionProperties {
	readonly privateEndpoint?: PrivateEndpoint | undefined;
	readonly privateLinkServiceConnectionState?: ConnectionState | undefined;
	readonly provisioningState?: ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface SchemaGroupProperties {
	readonly createdAtUtc?: string | undefined;
	readonly eTag?: string | undefined;
	readonly groupProperties?: SchemaGroupProperties | undefined;
	readonly schemaCompatibility?: ("Backward" | "Forward" | "None") | undefined;
	readonly schemaType?: ("Avro" | "Unknown") | undefined;
	readonly updatedAtUtc?: string | undefined;
}
export interface Sku {
	readonly capacity?: number | undefined;
	readonly name: "Basic" | "Premium" | "Standard";
	readonly tier?: ("Basic" | "Premium" | "Standard") | undefined;
}
export interface Subnet {
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
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface UserAssignedIdentity {
	readonly clientId?: string | undefined;
	readonly principalId?: string | undefined;
}
export interface UserAssignedIdentityProperties {
	readonly userAssignedIdentity?: string | undefined;
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

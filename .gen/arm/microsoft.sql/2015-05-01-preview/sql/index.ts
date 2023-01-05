import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class locations_usages
	extends ArmResource<locations_usagesComponentInputs>
	implements locations_usagesComponentOutputs
{
	constructor(entity: ADKEntity, options: locations_usagesComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/locations/usages", "2015-05-01-preview", options);
	}
	public readonly apiVersion: "2015-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/locations/usages";
}
export interface locations_usagesComponentOutputs {
	readonly apiVersion: "2015-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/locations/usages";
}
export interface locations_usagesComponentInputs {
	readonly name: string;
	readonly properties?: SubscriptionUsageProperties;
}
export class managedInstances
	extends ArmResource<managedInstancesComponentInputs>
	implements managedInstancesComponentOutputs
{
	constructor(entity: ADKEntity, options: managedInstancesComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/managedInstances", "2015-05-01-preview", options);
	}
	public readonly apiVersion: "2015-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/managedInstances";
}
export interface managedInstancesComponentOutputs {
	readonly apiVersion: "2015-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/managedInstances";
}
export interface managedInstancesComponentInputs {
	readonly identity?: ResourceIdentity;
	readonly location: string;
	readonly name: string;
	readonly properties?: ManagedInstanceProperties;
	readonly sku?: Sku;
	readonly tags?: TrackedResourceTags;
}
export class servers extends ArmResource<serversComponentInputs> implements serversComponentOutputs {
	constructor(entity: ADKEntity, options: serversComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers", "2015-05-01-preview", options);
	}
	public readonly apiVersion: "2015-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers";
}
export interface serversComponentOutputs {
	readonly apiVersion: "2015-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers";
}
export interface serversComponentInputs {
	readonly identity?: ResourceIdentity;
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: ServerProperties;
	readonly tags?: TrackedResourceTags;
}
export class servers_advisors
	extends ArmResource<servers_advisorsComponentInputs>
	implements servers_advisorsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_advisorsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/advisors", "2015-05-01-preview", options);
	}
	public readonly apiVersion: "2015-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/advisors";
}
export interface servers_advisorsComponentOutputs {
	readonly apiVersion: "2015-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/advisors";
}
export interface servers_advisorsComponentInputs {
	readonly kind?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: AdvisorProperties;
}
export class servers_databases_advisors
	extends ArmResource<servers_databases_advisorsComponentInputs>
	implements servers_databases_advisorsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_databases_advisorsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/databases/advisors", "2015-05-01-preview", options);
	}
	public readonly apiVersion: "2015-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/databases/advisors";
}
export interface servers_databases_advisorsComponentOutputs {
	readonly apiVersion: "2015-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/databases/advisors";
}
export interface servers_databases_advisorsComponentInputs {
	readonly kind?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: AdvisorProperties;
}
export class servers_databases_advisors_recommendedActions
	extends ArmResource<servers_databases_advisors_recommendedActionsComponentInputs>
	implements servers_databases_advisors_recommendedActionsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_databases_advisors_recommendedActionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Sql/servers/databases/advisors/recommendedActions",
			"2015-05-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2015-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/databases/advisors/recommendedActions";
}
export interface servers_databases_advisors_recommendedActionsComponentOutputs {
	readonly apiVersion: "2015-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/databases/advisors/recommendedActions";
}
export interface servers_databases_advisors_recommendedActionsComponentInputs {
	readonly kind?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: RecommendedActionProperties;
}
export class servers_databases_auditingSettings
	extends ArmResource<servers_databases_auditingSettingsComponentInputs>
	implements servers_databases_auditingSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_databases_auditingSettingsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/databases/auditingSettings", "2015-05-01-preview", options);
	}
	public readonly apiVersion: "2015-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/databases/auditingSettings";
}
export interface servers_databases_auditingSettingsComponentOutputs {
	readonly apiVersion: "2015-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/databases/auditingSettings";
}
export interface servers_databases_auditingSettingsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: DatabaseBlobAuditingPolicyProperties;
}
export class servers_databases_automaticTuning
	extends ArmResource<servers_databases_automaticTuningComponentInputs>
	implements servers_databases_automaticTuningComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_databases_automaticTuningComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/databases/automaticTuning", "2015-05-01-preview", options);
	}
	public readonly apiVersion: "2015-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/databases/automaticTuning";
}
export interface servers_databases_automaticTuningComponentOutputs {
	readonly apiVersion: "2015-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/databases/automaticTuning";
}
export interface servers_databases_automaticTuningComponentInputs {
	readonly name: string;
	readonly properties?: DatabaseAutomaticTuningProperties;
}
export class servers_databases_syncGroups
	extends ArmResource<servers_databases_syncGroupsComponentInputs>
	implements servers_databases_syncGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_databases_syncGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/databases/syncGroups", "2015-05-01-preview", options);
	}
	public readonly apiVersion: "2015-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/databases/syncGroups";
}
export interface servers_databases_syncGroupsComponentOutputs {
	readonly apiVersion: "2015-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/databases/syncGroups";
}
export interface servers_databases_syncGroupsComponentInputs {
	readonly name: string;
	readonly properties?: SyncGroupProperties;
}
export class servers_databases_syncGroups_syncMembers
	extends ArmResource<servers_databases_syncGroups_syncMembersComponentInputs>
	implements servers_databases_syncGroups_syncMembersComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_databases_syncGroups_syncMembersComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Sql/servers/databases/syncGroups/syncMembers",
			"2015-05-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2015-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/databases/syncGroups/syncMembers";
}
export interface servers_databases_syncGroups_syncMembersComponentOutputs {
	readonly apiVersion: "2015-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/databases/syncGroups/syncMembers";
}
export interface servers_databases_syncGroups_syncMembersComponentInputs {
	readonly name: string;
	readonly properties?: SyncMemberProperties;
}
export class servers_encryptionProtector
	extends ArmResource<servers_encryptionProtectorComponentInputs>
	implements servers_encryptionProtectorComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_encryptionProtectorComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/encryptionProtector", "2015-05-01-preview", options);
	}
	public readonly apiVersion: "2015-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/encryptionProtector";
}
export interface servers_encryptionProtectorComponentOutputs {
	readonly apiVersion: "2015-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/encryptionProtector";
}
export interface servers_encryptionProtectorComponentInputs {
	readonly kind?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: EncryptionProtectorProperties;
}
export class servers_failoverGroups
	extends ArmResource<servers_failoverGroupsComponentInputs>
	implements servers_failoverGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_failoverGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/failoverGroups", "2015-05-01-preview", options);
	}
	public readonly apiVersion: "2015-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/failoverGroups";
}
export interface servers_failoverGroupsComponentOutputs {
	readonly apiVersion: "2015-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/failoverGroups";
}
export interface servers_failoverGroupsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: FailoverGroupProperties;
	readonly tags?: FailoverGroupTags;
}
export class servers_firewallRules
	extends ArmResource<servers_firewallRulesComponentInputs>
	implements servers_firewallRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_firewallRulesComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/firewallRules", "2015-05-01-preview", options);
	}
	public readonly apiVersion: "2015-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/firewallRules";
}
export interface servers_firewallRulesComponentOutputs {
	readonly apiVersion: "2015-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/firewallRules";
}
export interface servers_firewallRulesComponentInputs {
	readonly name: string;
	readonly properties?: ServerFirewallRuleProperties;
}
export class servers_keys extends ArmResource<servers_keysComponentInputs> implements servers_keysComponentOutputs {
	constructor(entity: ADKEntity, options: servers_keysComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/keys", "2015-05-01-preview", options);
	}
	public readonly apiVersion: "2015-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/keys";
}
export interface servers_keysComponentOutputs {
	readonly apiVersion: "2015-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/keys";
}
export interface servers_keysComponentInputs {
	readonly kind?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: ServerKeyProperties;
}
export class servers_syncAgents
	extends ArmResource<servers_syncAgentsComponentInputs>
	implements servers_syncAgentsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_syncAgentsComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/syncAgents", "2015-05-01-preview", options);
	}
	public readonly apiVersion: "2015-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/syncAgents";
}
export interface servers_syncAgentsComponentOutputs {
	readonly apiVersion: "2015-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/syncAgents";
}
export interface servers_syncAgentsComponentInputs {
	readonly name: string;
	readonly properties?: SyncAgentProperties;
}
export class servers_virtualNetworkRules
	extends ArmResource<servers_virtualNetworkRulesComponentInputs>
	implements servers_virtualNetworkRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_virtualNetworkRulesComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/servers/virtualNetworkRules", "2015-05-01-preview", options);
	}
	public readonly apiVersion: "2015-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/servers/virtualNetworkRules";
}
export interface servers_virtualNetworkRulesComponentOutputs {
	readonly apiVersion: "2015-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/servers/virtualNetworkRules";
}
export interface servers_virtualNetworkRulesComponentInputs {
	readonly name: string;
	readonly properties?: VirtualNetworkRuleProperties;
}
export class virtualClusters
	extends ArmResource<virtualClustersComponentInputs>
	implements virtualClustersComponentOutputs
{
	constructor(entity: ADKEntity, options: virtualClustersComponentInputs) {
		super(entity, options.name, "Microsoft.Sql/virtualClusters", "2015-05-01-preview", options);
	}
	public readonly apiVersion: "2015-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Sql/virtualClusters";
}
export interface virtualClustersComponentOutputs {
	readonly apiVersion: "2015-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Sql/virtualClusters";
}
export interface virtualClustersComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: VirtualClusterProperties;
	readonly tags?: TrackedResourceTags;
}
export interface AdvisorProperties {
	readonly advisorStatus?: "GA" | "LimitedPublicPreview" | "PrivatePreview";
	readonly autoExecuteStatus: "Default" | "Disabled";
	readonly autoExecuteStatusInheritedFrom?: "Database" | "Default" | "ElasticPool" | "Server";
	readonly lastChecked?: string;
	readonly recommendationsStatus?: string;
	readonly recommendedActions?: RecommendedAction[];
}
export interface AutomaticTuningOptions {
	readonly actualState?: "Off";
	readonly desiredState?: "Default" | "Off";
	readonly reasonCode?: number;
	readonly reasonDesc?:
		| "AutoConfigured"
		| "Default"
		| "Disabled"
		| "InheritedFromServer"
		| "NotSupported"
		| "QueryStoreOff";
}
export interface DatabaseAutomaticTuningProperties {
	readonly actualState?: "Auto" | "Custom" | "Inherit";
	readonly desiredState?: "Auto" | "Custom" | "Inherit";
	readonly options?: DatabaseAutomaticTuningPropertiesOptions;
}
export interface DatabaseAutomaticTuningPropertiesOptions {
	readonly [key: string]: AutomaticTuningOptions;
}
export interface DatabaseBlobAuditingPolicyProperties {
	readonly auditActionsAndGroups?: string[];
}
export interface EncryptionProtectorProperties {
	readonly serverKeyName?: string;
	readonly serverKeyType: "AzureKeyVault" | "ServiceManaged";
	readonly subregion?: string;
	readonly thumbprint?: string;
	readonly uri?: string;
}
export interface FailoverGroupProperties {
	readonly databases?: string[];
	readonly partnerServers: PartnerInfo[];
	readonly readOnlyEndpoint?: FailoverGroupReadOnlyEndpoint;
	readonly readWriteEndpoint: FailoverGroupReadWriteEndpoint;
	readonly replicationRole?: "Primary" | "Secondary";
	readonly replicationState?: string;
}
export interface FailoverGroupReadOnlyEndpoint {
	readonly failoverPolicy?: "Disabled" | "Enabled";
}
export interface FailoverGroupReadWriteEndpoint {
	readonly failoverPolicy: "Automatic" | "Manual";
	readonly failoverWithDataLossGracePeriodMinutes?: number;
}
export interface FailoverGroupTags {
	readonly [key: string]: string;
}
export interface ManagedInstanceProperties {
	readonly administratorLogin?: string;
	readonly administratorLoginPassword?: string;
	readonly collation?: string;
	readonly dnsZone?: string;
	readonly dnsZonePartner?: string;
	readonly fullyQualifiedDomainName?: string;
	readonly instancePoolId?: string;
	readonly licenseType?: "BasePrice" | "LicenseIncluded";
	readonly maintenanceConfigurationId?: string;
	readonly managedInstanceCreateMode?: "Default" | "PointInTimeRestore";
}
export interface PartnerInfo {
	readonly id: string;
	readonly location?: string;
	readonly replicationRole?: "Primary" | "Secondary";
}
export interface RecommendedAction {
	readonly id?: string;
	readonly kind?: string;
	readonly location?: string;
	readonly name?: string;
	readonly properties?: RecommendedActionProperties;
	readonly type?: string;
}
export interface RecommendedActionErrorInfo {
	readonly errorCode?: string;
	readonly isRetryable?: "No";
}
export interface RecommendedActionImpactRecord {
	readonly absoluteValue?: number;
	readonly changeValueAbsolute?: number;
	readonly changeValueRelative?: number;
	readonly dimensionName?: string;
	readonly unit?: string;
}
export interface RecommendedActionImplementationInfo {
	readonly method?: "AzurePowerShell";
	readonly script?: string;
}
export interface RecommendedActionMetricInfo {
	readonly metricName?: string;
	readonly startTime?: string;
	readonly timeGrain?: string;
	readonly unit?: string;
	readonly value?: number;
}
export interface RecommendedActionProperties {
	readonly details?: RecommendedActionPropertiesDetails;
	readonly errorDetails?: RecommendedActionErrorInfo;
	readonly estimatedImpact?: RecommendedActionImpactRecord[];
	readonly executeActionDuration?: string;
	readonly executeActionInitiatedBy?: "System";
	readonly executeActionInitiatedTime?: string;
	readonly executeActionStartTime?: string;
	readonly implementationDetails?: RecommendedActionImplementationInfo;
	readonly isArchivedAction?: boolean;
	readonly isExecutableAction?: boolean;
	readonly isRevertableAction?: boolean;
	readonly lastRefresh?: string;
	readonly linkedObjects?: string[];
	readonly observedImpact?: RecommendedActionImpactRecord[];
	readonly recommendationReason?: string;
	readonly revertActionDuration?: string;
	readonly revertActionInitiatedBy?: "System";
	readonly revertActionInitiatedTime?: string;
	readonly revertActionStartTime?: string;
	readonly score?: number;
	readonly state: RecommendedActionStateInfo;
	readonly timeSeries?: RecommendedActionMetricInfo[];
	readonly validSince?: string;
}
export interface RecommendedActionPropertiesDetails {
	readonly [key: string]: any;
}
export interface RecommendedActionStateInfo {
	readonly actionInitiatedBy?: "System";
	readonly currentValue:
		| "Active"
		| "Error"
		| "Executing"
		| "Expired"
		| "Ignored"
		| "Monitoring"
		| "Pending"
		| "PendingRevert"
		| "Resolved"
		| "RevertCancelled"
		| "Reverted"
		| "Reverting"
		| "Success"
		| "Verifying";
	readonly lastModified?: string;
}
export interface ResourceIdentity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "None" | "SystemAssigned" | "SystemAssigned,UserAssigned" | "UserAssigned";
}
export interface ServerFirewallRuleProperties {
	readonly endIpAddress?: string;
	readonly startIpAddress?: string;
}
export interface ServerKeyProperties {
	readonly creationDate?: string;
	readonly serverKeyType: "AzureKeyVault" | "ServiceManaged";
	readonly subregion?: string;
	readonly thumbprint?: string;
	readonly uri?: string;
}
export interface ServerProperties {
	readonly administratorLogin?: string;
	readonly administratorLoginPassword?: string;
	readonly fullyQualifiedDomainName?: string;
	readonly state?: string;
	readonly version?: string;
}
export interface Sku {
	readonly capacity?: number;
	readonly family?: string;
	readonly name: string;
	readonly size?: string;
	readonly tier?: string;
}
export interface SubscriptionUsageProperties {
	readonly currentValue?: number;
	readonly displayName?: string;
	readonly limit?: number;
	readonly unit?: string;
}
export interface SyncAgentProperties {
	readonly expiryTime?: string;
	readonly isUpToDate?: boolean;
	readonly lastAliveTime?: string;
	readonly name?: string;
	readonly state?: "NeverConnected" | "Offline" | "Online";
	readonly syncDatabaseId?: string;
	readonly version?: string;
}
export interface SyncGroupProperties {
	readonly conflictResolutionPolicy?: "HubWin" | "MemberWin";
	readonly hubDatabasePassword?: string;
	readonly hubDatabaseUserName?: string;
	readonly interval?: number;
	readonly lastSyncTime?: string;
	readonly schema?: SyncGroupSchema;
	readonly syncDatabaseId?: string;
	readonly syncState?: "Error" | "Good" | "NotReady" | "Progressing" | "Warning";
}
export interface SyncGroupSchema {
	readonly masterSyncMemberName?: string;
	readonly tables?: SyncGroupSchemaTable[];
}
export interface SyncGroupSchemaTable {
	readonly columns?: SyncGroupSchemaTableColumn[];
	readonly quotedName?: string;
}
export interface SyncGroupSchemaTableColumn {
	readonly dataSize?: string;
	readonly dataType?: string;
	readonly quotedName?: string;
}
export interface SyncMemberProperties {
	readonly databaseName?: string;
	readonly databaseType?: "AzureSqlDatabase" | "SqlServerDatabase";
	readonly password?: string;
	readonly serverName?: string;
	readonly sqlServerDatabaseId?: string;
	readonly syncAgentId?: string;
	readonly syncDirection?: "Bidirectional" | "OneWayHubToMember" | "OneWayMemberToHub";
	readonly syncState?:
		| "DeProvisionFailed"
		| "DeProvisioned"
		| "DeProvisioning"
		| "DisabledBackupRestore"
		| "DisabledTombstoneCleanup"
		| "ProvisionFailed"
		| "Provisioned"
		| "Provisioning"
		| "ReprovisionFailed"
		| "Reprovisioning"
		| "SyncCancelled"
		| "SyncCancelling"
		| "SyncFailed"
		| "SyncInProgress"
		| "SyncSucceeded"
		| "SyncSucceededWithWarnings"
		| "UnProvisioned"
		| "UnReprovisioned";
	readonly userName?: string;
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export interface VirtualClusterProperties {
	readonly childResources?: string[];
	readonly family?: string;
	readonly subnetId?: string;
}
export interface VirtualNetworkRuleProperties {
	readonly ignoreMissingVnetServiceEndpoint?: boolean;
	readonly state?: "Deleting" | "InProgress" | "Initializing" | "Ready" | "Unknown";
	readonly virtualNetworkSubnetId: string;
}
export default {
	"locations/usages": locations_usages,
	managedInstances: managedInstances,
	servers: servers,
	"servers/advisors": servers_advisors,
	"servers/databases/advisors": servers_databases_advisors,
	"servers/databases/advisors/recommendedActions": servers_databases_advisors_recommendedActions,
	"servers/databases/auditingSettings": servers_databases_auditingSettings,
	"servers/databases/automaticTuning": servers_databases_automaticTuning,
	"servers/databases/syncGroups": servers_databases_syncGroups,
	"servers/databases/syncGroups/syncMembers": servers_databases_syncGroups_syncMembers,
	"servers/encryptionProtector": servers_encryptionProtector,
	"servers/failoverGroups": servers_failoverGroups,
	"servers/firewallRules": servers_firewallRules,
	"servers/keys": servers_keys,
	"servers/syncAgents": servers_syncAgents,
	"servers/virtualNetworkRules": servers_virtualNetworkRules,
	virtualClusters: virtualClusters,
};

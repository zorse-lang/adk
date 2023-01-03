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
	readonly properties?: SubscriptionUsageProperties | undefined;
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
	readonly identity?: ResourceIdentity | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: ManagedInstanceProperties | undefined;
	readonly sku?: Sku | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly identity?: ResourceIdentity | undefined;
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: ServerProperties | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly kind?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: AdvisorProperties | undefined;
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
	readonly kind?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: AdvisorProperties | undefined;
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
	readonly kind?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: RecommendedActionProperties | undefined;
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
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: DatabaseBlobAuditingPolicyProperties | undefined;
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
	readonly properties?: DatabaseAutomaticTuningProperties | undefined;
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
	readonly properties?: SyncGroupProperties | undefined;
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
	readonly properties?: SyncMemberProperties | undefined;
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
	readonly kind?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: EncryptionProtectorProperties | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: FailoverGroupProperties | undefined;
	readonly tags?: FailoverGroupTags | undefined;
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
	readonly properties?: ServerFirewallRuleProperties | undefined;
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
	readonly kind?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ServerKeyProperties | undefined;
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
	readonly properties?: SyncAgentProperties | undefined;
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
	readonly properties?: VirtualNetworkRuleProperties | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: VirtualClusterProperties | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export interface AdvisorProperties {
	readonly advisorStatus?: ("GA" | "LimitedPublicPreview" | "PrivatePreview") | undefined;
	readonly autoExecuteStatus: "Default" | "Disabled";
	readonly autoExecuteStatusInheritedFrom?: ("Database" | "Default" | "ElasticPool" | "Server") | undefined;
	readonly lastChecked?: string | undefined;
	readonly recommendationsStatus?: string | undefined;
	readonly recommendedActions?: RecommendedAction[] | undefined;
}
export interface AutomaticTuningOptions {
	readonly actualState?: "Off" | undefined;
	readonly desiredState?: ("Default" | "Off") | undefined;
	readonly reasonCode?: number | undefined;
	readonly reasonDesc?:
		| ("AutoConfigured" | "Default" | "Disabled" | "InheritedFromServer" | "NotSupported" | "QueryStoreOff")
		| undefined;
}
export interface DatabaseAutomaticTuningProperties {
	readonly actualState?: ("Auto" | "Custom" | "Inherit") | undefined;
	readonly desiredState?: ("Auto" | "Custom" | "Inherit") | undefined;
	readonly options?: DatabaseAutomaticTuningPropertiesOptions | undefined;
}
export interface DatabaseAutomaticTuningPropertiesOptions {
	readonly "[ key: string ]"?: AutomaticTuningOptions | undefined;
}
export interface DatabaseBlobAuditingPolicyProperties {
	readonly auditActionsAndGroups?: string[] | undefined;
}
export interface EncryptionProtectorProperties {
	readonly serverKeyName?: string | undefined;
	readonly serverKeyType: "AzureKeyVault" | "ServiceManaged";
	readonly subregion?: string | undefined;
	readonly thumbprint?: string | undefined;
	readonly uri?: string | undefined;
}
export interface FailoverGroupProperties {
	readonly databases?: string[] | undefined;
	readonly partnerServers: PartnerInfo[];
	readonly readOnlyEndpoint?: FailoverGroupReadOnlyEndpoint | undefined;
	readonly readWriteEndpoint: FailoverGroupReadWriteEndpoint;
	readonly replicationRole?: ("Primary" | "Secondary") | undefined;
	readonly replicationState?: string | undefined;
}
export interface FailoverGroupReadOnlyEndpoint {
	readonly failoverPolicy?: ("Disabled" | "Enabled") | undefined;
}
export interface FailoverGroupReadWriteEndpoint {
	readonly failoverPolicy: "Automatic" | "Manual";
	readonly failoverWithDataLossGracePeriodMinutes?: number | undefined;
}
export interface FailoverGroupTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ManagedInstanceProperties {
	readonly administratorLogin?: string | undefined;
	readonly administratorLoginPassword?: string | undefined;
	readonly collation?: string | undefined;
	readonly dnsZone?: string | undefined;
	readonly dnsZonePartner?: string | undefined;
	readonly fullyQualifiedDomainName?: string | undefined;
	readonly instancePoolId?: string | undefined;
	readonly licenseType?: ("BasePrice" | "LicenseIncluded") | undefined;
	readonly maintenanceConfigurationId?: string | undefined;
	readonly managedInstanceCreateMode?: ("Default" | "PointInTimeRestore") | undefined;
}
export interface PartnerInfo {
	readonly id: string;
	readonly location?: string | undefined;
	readonly replicationRole?: ("Primary" | "Secondary") | undefined;
}
export interface RecommendedAction {
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly location?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: RecommendedActionProperties | undefined;
	readonly type?: string | undefined;
}
export interface RecommendedActionErrorInfo {
	readonly errorCode?: string | undefined;
	readonly isRetryable?: "No" | undefined;
}
export interface RecommendedActionImpactRecord {
	readonly absoluteValue?: number | undefined;
	readonly changeValueAbsolute?: number | undefined;
	readonly changeValueRelative?: number | undefined;
	readonly dimensionName?: string | undefined;
	readonly unit?: string | undefined;
}
export interface RecommendedActionImplementationInfo {
	readonly method?: "AzurePowerShell" | undefined;
	readonly script?: string | undefined;
}
export interface RecommendedActionMetricInfo {
	readonly metricName?: string | undefined;
	readonly startTime?: string | undefined;
	readonly timeGrain?: string | undefined;
	readonly unit?: string | undefined;
	readonly value?: number | undefined;
}
export interface RecommendedActionProperties {
	readonly details?: RecommendedActionPropertiesDetails | undefined;
	readonly errorDetails?: RecommendedActionErrorInfo | undefined;
	readonly estimatedImpact?: RecommendedActionImpactRecord[] | undefined;
	readonly executeActionDuration?: string | undefined;
	readonly executeActionInitiatedBy?: "System" | undefined;
	readonly executeActionInitiatedTime?: string | undefined;
	readonly executeActionStartTime?: string | undefined;
	readonly implementationDetails?: RecommendedActionImplementationInfo | undefined;
	readonly isArchivedAction?: boolean | undefined;
	readonly isExecutableAction?: boolean | undefined;
	readonly isRevertableAction?: boolean | undefined;
	readonly lastRefresh?: string | undefined;
	readonly linkedObjects?: string[] | undefined;
	readonly observedImpact?: RecommendedActionImpactRecord[] | undefined;
	readonly recommendationReason?: string | undefined;
	readonly revertActionDuration?: string | undefined;
	readonly revertActionInitiatedBy?: "System" | undefined;
	readonly revertActionInitiatedTime?: string | undefined;
	readonly revertActionStartTime?: string | undefined;
	readonly score?: number | undefined;
	readonly state: RecommendedActionStateInfo;
	readonly timeSeries?: RecommendedActionMetricInfo[] | undefined;
	readonly validSince?: string | undefined;
}
export interface RecommendedActionPropertiesDetails {
	readonly "[ key: string ]"?: any | undefined;
}
export interface RecommendedActionStateInfo {
	readonly actionInitiatedBy?: "System" | undefined;
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
	readonly lastModified?: string | undefined;
}
export interface ResourceIdentity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: ("None" | "SystemAssigned" | "SystemAssigned,UserAssigned" | "UserAssigned") | undefined;
}
export interface ServerFirewallRuleProperties {
	readonly endIpAddress?: string | undefined;
	readonly startIpAddress?: string | undefined;
}
export interface ServerKeyProperties {
	readonly creationDate?: string | undefined;
	readonly serverKeyType: "AzureKeyVault" | "ServiceManaged";
	readonly subregion?: string | undefined;
	readonly thumbprint?: string | undefined;
	readonly uri?: string | undefined;
}
export interface ServerProperties {
	readonly administratorLogin?: string | undefined;
	readonly administratorLoginPassword?: string | undefined;
	readonly fullyQualifiedDomainName?: string | undefined;
	readonly state?: string | undefined;
	readonly version?: string | undefined;
}
export interface Sku {
	readonly capacity?: number | undefined;
	readonly family?: string | undefined;
	readonly name: string;
	readonly size?: string | undefined;
	readonly tier?: string | undefined;
}
export interface SubscriptionUsageProperties {
	readonly currentValue?: number | undefined;
	readonly displayName?: string | undefined;
	readonly limit?: number | undefined;
	readonly unit?: string | undefined;
}
export interface SyncAgentProperties {
	readonly expiryTime?: string | undefined;
	readonly isUpToDate?: boolean | undefined;
	readonly lastAliveTime?: string | undefined;
	readonly name?: string | undefined;
	readonly state?: ("NeverConnected" | "Offline" | "Online") | undefined;
	readonly syncDatabaseId?: string | undefined;
	readonly version?: string | undefined;
}
export interface SyncGroupProperties {
	readonly conflictResolutionPolicy?: ("HubWin" | "MemberWin") | undefined;
	readonly hubDatabasePassword?: string | undefined;
	readonly hubDatabaseUserName?: string | undefined;
	readonly interval?: number | undefined;
	readonly lastSyncTime?: string | undefined;
	readonly schema?: SyncGroupSchema | undefined;
	readonly syncDatabaseId?: string | undefined;
	readonly syncState?: ("Error" | "Good" | "NotReady" | "Progressing" | "Warning") | undefined;
}
export interface SyncGroupSchema {
	readonly masterSyncMemberName?: string | undefined;
	readonly tables?: SyncGroupSchemaTable[] | undefined;
}
export interface SyncGroupSchemaTable {
	readonly columns?: SyncGroupSchemaTableColumn[] | undefined;
	readonly quotedName?: string | undefined;
}
export interface SyncGroupSchemaTableColumn {
	readonly dataSize?: string | undefined;
	readonly dataType?: string | undefined;
	readonly quotedName?: string | undefined;
}
export interface SyncMemberProperties {
	readonly databaseName?: string | undefined;
	readonly databaseType?: ("AzureSqlDatabase" | "SqlServerDatabase") | undefined;
	readonly password?: string | undefined;
	readonly serverName?: string | undefined;
	readonly sqlServerDatabaseId?: string | undefined;
	readonly syncAgentId?: string | undefined;
	readonly syncDirection?: ("Bidirectional" | "OneWayHubToMember" | "OneWayMemberToHub") | undefined;
	readonly syncState?:
		| (
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
				| "UnReprovisioned"
		  )
		| undefined;
	readonly userName?: string | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface VirtualClusterProperties {
	readonly childResources?: string[] | undefined;
	readonly family?: string | undefined;
	readonly subnetId?: string | undefined;
}
export interface VirtualNetworkRuleProperties {
	readonly ignoreMissingVnetServiceEndpoint?: boolean | undefined;
	readonly state?: ("Deleting" | "InProgress" | "Initializing" | "Ready" | "Unknown") | undefined;
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

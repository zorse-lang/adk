import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class servers extends ArmResource<serversComponentInputs> implements serversComponentOutputs {
	constructor(entity: ADKEntity, options: serversComponentInputs) {
		super(entity, options.name, "Microsoft.DBforMariaDB/servers", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.DBforMariaDB/servers";
}
export interface serversComponentOutputs {
	readonly apiVersion: "2018-06-01";
	readonly id: string;
	readonly type: "Microsoft.DBforMariaDB/servers";
}
export interface serversComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: ServerPropertiesForCreateOrServerProperties;
	readonly sku?: Sku | undefined;
	readonly tags?: ServerForCreateTags | undefined;
}
export class servers_advisors
	extends ArmResource<servers_advisorsComponentInputs>
	implements servers_advisorsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_advisorsComponentInputs) {
		super(entity, options.name, "Microsoft.DBforMariaDB/servers/advisors", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.DBforMariaDB/servers/advisors";
}
export interface servers_advisorsComponentOutputs {
	readonly apiVersion: "2018-06-01";
	readonly id: string;
	readonly type: "Microsoft.DBforMariaDB/servers/advisors";
}
export interface servers_advisorsComponentInputs {
	readonly name: string;
	readonly properties?: any | undefined;
}
export class servers_advisors_recommendedActions
	extends ArmResource<servers_advisors_recommendedActionsComponentInputs>
	implements servers_advisors_recommendedActionsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_advisors_recommendedActionsComponentInputs) {
		super(entity, options.name, "Microsoft.DBforMariaDB/servers/advisors/recommendedActions", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.DBforMariaDB/servers/advisors/recommendedActions";
}
export interface servers_advisors_recommendedActionsComponentOutputs {
	readonly apiVersion: "2018-06-01";
	readonly id: string;
	readonly type: "Microsoft.DBforMariaDB/servers/advisors/recommendedActions";
}
export interface servers_advisors_recommendedActionsComponentInputs {
	readonly name: string;
	readonly properties?: RecommendationActionProperties | undefined;
}
export class servers_configurations
	extends ArmResource<servers_configurationsComponentInputs>
	implements servers_configurationsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_configurationsComponentInputs) {
		super(entity, options.name, "Microsoft.DBforMariaDB/servers/configurations", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.DBforMariaDB/servers/configurations";
}
export interface servers_configurationsComponentOutputs {
	readonly apiVersion: "2018-06-01";
	readonly id: string;
	readonly type: "Microsoft.DBforMariaDB/servers/configurations";
}
export interface servers_configurationsComponentInputs {
	readonly name: string;
	readonly properties?: ConfigurationProperties | undefined;
}
export class servers_databases
	extends ArmResource<servers_databasesComponentInputs>
	implements servers_databasesComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_databasesComponentInputs) {
		super(entity, options.name, "Microsoft.DBforMariaDB/servers/databases", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.DBforMariaDB/servers/databases";
}
export interface servers_databasesComponentOutputs {
	readonly apiVersion: "2018-06-01";
	readonly id: string;
	readonly type: "Microsoft.DBforMariaDB/servers/databases";
}
export interface servers_databasesComponentInputs {
	readonly name: string;
	readonly properties?: DatabaseProperties | undefined;
}
export class servers_firewallRules
	extends ArmResource<servers_firewallRulesComponentInputs>
	implements servers_firewallRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_firewallRulesComponentInputs) {
		super(entity, options.name, "Microsoft.DBforMariaDB/servers/firewallRules", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.DBforMariaDB/servers/firewallRules";
}
export interface servers_firewallRulesComponentOutputs {
	readonly apiVersion: "2018-06-01";
	readonly id: string;
	readonly type: "Microsoft.DBforMariaDB/servers/firewallRules";
}
export interface servers_firewallRulesComponentInputs {
	readonly name: string;
	readonly properties: FirewallRuleProperties;
}
export class servers_privateEndpointConnections
	extends ArmResource<servers_privateEndpointConnectionsComponentInputs>
	implements servers_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_privateEndpointConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.DBforMariaDB/servers/privateEndpointConnections", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.DBforMariaDB/servers/privateEndpointConnections";
}
export interface servers_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2018-06-01";
	readonly id: string;
	readonly type: "Microsoft.DBforMariaDB/servers/privateEndpointConnections";
}
export interface servers_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
}
export class servers_privateLinkResources
	extends ArmResource<servers_privateLinkResourcesComponentInputs>
	implements servers_privateLinkResourcesComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_privateLinkResourcesComponentInputs) {
		super(entity, options.name, "Microsoft.DBforMariaDB/servers/privateLinkResources", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.DBforMariaDB/servers/privateLinkResources";
}
export interface servers_privateLinkResourcesComponentOutputs {
	readonly apiVersion: "2018-06-01";
	readonly id: string;
	readonly type: "Microsoft.DBforMariaDB/servers/privateLinkResources";
}
export interface servers_privateLinkResourcesComponentInputs {
	readonly name: string;
	readonly properties?: PrivateLinkResourceProperties | undefined;
}
export class servers_queryTexts
	extends ArmResource<servers_queryTextsComponentInputs>
	implements servers_queryTextsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_queryTextsComponentInputs) {
		super(entity, options.name, "Microsoft.DBforMariaDB/servers/queryTexts", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.DBforMariaDB/servers/queryTexts";
}
export interface servers_queryTextsComponentOutputs {
	readonly apiVersion: "2018-06-01";
	readonly id: string;
	readonly type: "Microsoft.DBforMariaDB/servers/queryTexts";
}
export interface servers_queryTextsComponentInputs {
	readonly name: string;
	readonly properties?: QueryTextProperties | undefined;
}
export class servers_securityAlertPolicies
	extends ArmResource<servers_securityAlertPoliciesComponentInputs>
	implements servers_securityAlertPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_securityAlertPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.DBforMariaDB/servers/securityAlertPolicies", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.DBforMariaDB/servers/securityAlertPolicies";
}
export interface servers_securityAlertPoliciesComponentOutputs {
	readonly apiVersion: "2018-06-01";
	readonly id: string;
	readonly type: "Microsoft.DBforMariaDB/servers/securityAlertPolicies";
}
export interface servers_securityAlertPoliciesComponentInputs {
	readonly name: string;
	readonly properties?: SecurityAlertPolicyProperties | undefined;
}
export class servers_topQueryStatistics
	extends ArmResource<servers_topQueryStatisticsComponentInputs>
	implements servers_topQueryStatisticsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_topQueryStatisticsComponentInputs) {
		super(entity, options.name, "Microsoft.DBforMariaDB/servers/topQueryStatistics", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.DBforMariaDB/servers/topQueryStatistics";
}
export interface servers_topQueryStatisticsComponentOutputs {
	readonly apiVersion: "2018-06-01";
	readonly id: string;
	readonly type: "Microsoft.DBforMariaDB/servers/topQueryStatistics";
}
export interface servers_topQueryStatisticsComponentInputs {
	readonly name: string;
	readonly properties?: QueryStatisticProperties | undefined;
}
export class servers_virtualNetworkRules
	extends ArmResource<servers_virtualNetworkRulesComponentInputs>
	implements servers_virtualNetworkRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_virtualNetworkRulesComponentInputs) {
		super(entity, options.name, "Microsoft.DBforMariaDB/servers/virtualNetworkRules", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.DBforMariaDB/servers/virtualNetworkRules";
}
export interface servers_virtualNetworkRulesComponentOutputs {
	readonly apiVersion: "2018-06-01";
	readonly id: string;
	readonly type: "Microsoft.DBforMariaDB/servers/virtualNetworkRules";
}
export interface servers_virtualNetworkRulesComponentInputs {
	readonly name: string;
	readonly properties?: VirtualNetworkRuleProperties | undefined;
}
export class servers_waitStatistics
	extends ArmResource<servers_waitStatisticsComponentInputs>
	implements servers_waitStatisticsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_waitStatisticsComponentInputs) {
		super(entity, options.name, "Microsoft.DBforMariaDB/servers/waitStatistics", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.DBforMariaDB/servers/waitStatistics";
}
export interface servers_waitStatisticsComponentOutputs {
	readonly apiVersion: "2018-06-01";
	readonly id: string;
	readonly type: "Microsoft.DBforMariaDB/servers/waitStatistics";
}
export interface servers_waitStatisticsComponentInputs {
	readonly name: string;
	readonly properties?: WaitStatisticProperties | undefined;
}
export interface ConfigurationProperties {
	readonly allowedValues?: string | undefined;
	readonly dataType?: string | undefined;
	readonly defaultValue?: string | undefined;
	readonly description?: string | undefined;
	readonly source?: string | undefined;
	readonly value?: string | undefined;
}
export interface DatabaseProperties {
	readonly charset?: string | undefined;
	readonly collation?: string | undefined;
}
export interface FirewallRuleProperties {
	readonly endIpAddress: string;
	readonly startIpAddress: string;
}
export interface PrivateEndpointConnectionProperties {
	readonly privateEndpoint?: PrivateEndpointProperty | undefined;
	readonly privateLinkServiceConnectionState?: PrivateLinkServiceConnectionStateProperty | undefined;
	readonly provisioningState?: string | undefined;
}
export interface PrivateEndpointProperty {
	readonly id?: string | undefined;
}
export interface PrivateLinkResourceProperties {
	readonly groupId?: string | undefined;
	readonly requiredMembers?: string[] | undefined;
}
export interface PrivateLinkServiceConnectionStateProperty {
	readonly actionsRequired?: string | undefined;
	readonly description: string;
	readonly status: string;
}
export interface QueryStatisticProperties {
	readonly aggregationFunction?: string | undefined;
	readonly databaseNames?: string[] | undefined;
	readonly endTime?: string | undefined;
	readonly metricDisplayName?: string | undefined;
	readonly metricName?: string | undefined;
	readonly metricValue?: number | undefined;
	readonly metricValueUnit?: string | undefined;
	readonly queryExecutionCount?: number | undefined;
	readonly queryId?: string | undefined;
	readonly startTime?: string | undefined;
}
export interface QueryTextProperties {
	readonly queryId?: string | undefined;
	readonly queryText?: string | undefined;
}
export interface RecommendationActionProperties {
	readonly actionId?: number | undefined;
	readonly advisorName?: string | undefined;
	readonly createdTime?: string | undefined;
	readonly details?: RecommendationActionPropertiesDetails | undefined;
	readonly expirationTime?: string | undefined;
	readonly reason?: string | undefined;
	readonly recommendationType?: string | undefined;
	readonly sessionId?: string | undefined;
}
export interface RecommendationActionPropertiesDetails {
	readonly "[ key: string ]"?: string | undefined;
}
export interface SecurityAlertPolicyProperties {
	readonly disabledAlerts?: string[] | undefined;
	readonly emailAccountAdmins?: boolean | undefined;
	readonly emailAddresses?: string[] | undefined;
	readonly retentionDays?: number | undefined;
	readonly state: "Disabled";
	readonly storageAccountAccessKey?: string | undefined;
	readonly storageEndpoint?: string | undefined;
}
export interface ServerForCreateTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ServerPrivateEndpointConnection {
	readonly id?: string | undefined;
	readonly properties?: ServerPrivateEndpointConnectionProperties | undefined;
}
export interface ServerPrivateEndpointConnectionProperties {
	readonly privateEndpoint?: PrivateEndpointProperty | undefined;
	readonly privateLinkServiceConnectionState?: ServerPrivateLinkServiceConnectionStateProperty | undefined;
	readonly provisioningState?: ("Approving" | "Dropping" | "Failed" | "Ready" | "Rejecting") | undefined;
}
export interface ServerPrivateLinkServiceConnectionStateProperty {
	readonly actionsRequired?: "None" | undefined;
	readonly description: string;
	readonly status: "Approved" | "Disconnected" | "Pending" | "Rejected";
}
export interface ServerPropertiesForCreateOrServerProperties {
	readonly administratorLogin?: string | undefined;
	readonly earliestRestoreDate?: string | undefined;
	readonly fullyQualifiedDomainName?: string | undefined;
	readonly masterServerId?: string | undefined;
	readonly minimalTlsVersion?: ("TLS1_0" | "TLS1_1" | "TLS1_2" | "TLSEnforcementDisabled") | undefined;
	readonly privateEndpointConnections?: ServerPrivateEndpointConnection[] | undefined;
	readonly publicNetworkAccess?: ("Disabled" | "Enabled") | undefined;
	readonly replicaCapacity?: number | undefined;
	readonly replicationRole?: string | undefined;
	readonly sslEnforcement?: "Disabled" | undefined;
	readonly storageProfile?: StorageProfile | undefined;
	readonly userVisibleState?: ("Disabled" | "Dropping" | "Ready") | undefined;
	readonly version?: ("10.2" | "10.3") | undefined;
}
export interface Sku {
	readonly capacity?: number | undefined;
	readonly family?: string | undefined;
	readonly name: string;
	readonly size?: string | undefined;
	readonly tier?: ("Basic" | "GeneralPurpose" | "MemoryOptimized") | undefined;
}
export interface StorageProfile {
	readonly backupRetentionDays?: number | undefined;
	readonly geoRedundantBackup?: ("Disabled" | "Enabled") | undefined;
	readonly storageAutogrow?: ("Disabled" | "Enabled") | undefined;
	readonly storageMB?: number | undefined;
}
export interface VirtualNetworkRuleProperties {
	readonly ignoreMissingVnetServiceEndpoint?: boolean | undefined;
	readonly state?: ("Deleting" | "InProgress" | "Initializing" | "Ready" | "Unknown") | undefined;
	readonly virtualNetworkSubnetId: string;
}
export interface WaitStatisticProperties {
	readonly count?: number | undefined;
	readonly databaseName?: string | undefined;
	readonly endTime?: string | undefined;
	readonly eventName?: string | undefined;
	readonly eventTypeName?: string | undefined;
	readonly queryId?: number | undefined;
	readonly startTime?: string | undefined;
	readonly totalTimeInMs?: number | undefined;
	readonly userId?: number | undefined;
}
export default {
	servers: servers,
	"servers/advisors": servers_advisors,
	"servers/advisors/recommendedActions": servers_advisors_recommendedActions,
	"servers/configurations": servers_configurations,
	"servers/databases": servers_databases,
	"servers/firewallRules": servers_firewallRules,
	"servers/privateEndpointConnections": servers_privateEndpointConnections,
	"servers/privateLinkResources": servers_privateLinkResources,
	"servers/queryTexts": servers_queryTexts,
	"servers/securityAlertPolicies": servers_securityAlertPolicies,
	"servers/topQueryStatistics": servers_topQueryStatistics,
	"servers/virtualNetworkRules": servers_virtualNetworkRules,
	"servers/waitStatistics": servers_waitStatistics,
};

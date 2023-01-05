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
	readonly sku?: Sku;
	readonly tags?: ServerForCreateTags;
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
	readonly properties?: any;
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
	readonly properties?: RecommendationActionProperties;
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
	readonly properties?: ConfigurationProperties;
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
	readonly properties?: DatabaseProperties;
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
	readonly properties?: PrivateEndpointConnectionProperties;
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
	readonly properties?: PrivateLinkResourceProperties;
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
	readonly properties?: QueryTextProperties;
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
	readonly properties?: SecurityAlertPolicyProperties;
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
	readonly properties?: QueryStatisticProperties;
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
	readonly properties?: VirtualNetworkRuleProperties;
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
	readonly properties?: WaitStatisticProperties;
}
export interface ConfigurationProperties {
	readonly allowedValues?: string;
	readonly dataType?: string;
	readonly defaultValue?: string;
	readonly description?: string;
	readonly source?: string;
	readonly value?: string;
}
export interface DatabaseProperties {
	readonly charset?: string;
	readonly collation?: string;
}
export interface FirewallRuleProperties {
	readonly endIpAddress: string;
	readonly startIpAddress: string;
}
export interface PrivateEndpointConnectionProperties {
	readonly privateEndpoint?: PrivateEndpointProperty;
	readonly privateLinkServiceConnectionState?: PrivateLinkServiceConnectionStateProperty;
	readonly provisioningState?: string;
}
export interface PrivateEndpointProperty {
	readonly id?: string;
}
export interface PrivateLinkResourceProperties {
	readonly groupId?: string;
	readonly requiredMembers?: string[];
}
export interface PrivateLinkServiceConnectionStateProperty {
	readonly actionsRequired?: string;
	readonly description: string;
	readonly status: string;
}
export interface QueryStatisticProperties {
	readonly aggregationFunction?: string;
	readonly databaseNames?: string[];
	readonly endTime?: string;
	readonly metricDisplayName?: string;
	readonly metricName?: string;
	readonly metricValue?: number;
	readonly metricValueUnit?: string;
	readonly queryExecutionCount?: number;
	readonly queryId?: string;
	readonly startTime?: string;
}
export interface QueryTextProperties {
	readonly queryId?: string;
	readonly queryText?: string;
}
export interface RecommendationActionProperties {
	readonly actionId?: number;
	readonly advisorName?: string;
	readonly createdTime?: string;
	readonly details?: RecommendationActionPropertiesDetails;
	readonly expirationTime?: string;
	readonly reason?: string;
	readonly recommendationType?: string;
	readonly sessionId?: string;
}
export interface RecommendationActionPropertiesDetails {
	readonly [key: string]: string;
}
export interface SecurityAlertPolicyProperties {
	readonly disabledAlerts?: string[];
	readonly emailAccountAdmins?: boolean;
	readonly emailAddresses?: string[];
	readonly retentionDays?: number;
	readonly state: "Disabled";
	readonly storageAccountAccessKey?: string;
	readonly storageEndpoint?: string;
}
export interface ServerForCreateTags {
	readonly [key: string]: string;
}
export interface ServerPrivateEndpointConnection {
	readonly id?: string;
	readonly properties?: ServerPrivateEndpointConnectionProperties;
}
export interface ServerPrivateEndpointConnectionProperties {
	readonly privateEndpoint?: PrivateEndpointProperty;
	readonly privateLinkServiceConnectionState?: ServerPrivateLinkServiceConnectionStateProperty;
	readonly provisioningState?: "Approving" | "Dropping" | "Failed" | "Ready" | "Rejecting";
}
export interface ServerPrivateLinkServiceConnectionStateProperty {
	readonly actionsRequired?: "None";
	readonly description: string;
	readonly status: "Approved" | "Disconnected" | "Pending" | "Rejected";
}
export interface ServerPropertiesForCreateOrServerProperties {
	readonly administratorLogin?: string;
	readonly earliestRestoreDate?: string;
	readonly fullyQualifiedDomainName?: string;
	readonly masterServerId?: string;
	readonly minimalTlsVersion?: "TLS1_0" | "TLS1_1" | "TLS1_2" | "TLSEnforcementDisabled";
	readonly privateEndpointConnections?: ServerPrivateEndpointConnection[];
	readonly publicNetworkAccess?: "Disabled" | "Enabled";
	readonly replicaCapacity?: number;
	readonly replicationRole?: string;
	readonly sslEnforcement?: "Disabled";
	readonly storageProfile?: StorageProfile;
	readonly userVisibleState?: "Disabled" | "Dropping" | "Ready";
	readonly version?: "10.2" | "10.3";
}
export interface Sku {
	readonly capacity?: number;
	readonly family?: string;
	readonly name: string;
	readonly size?: string;
	readonly tier?: "Basic" | "GeneralPurpose" | "MemoryOptimized";
}
export interface StorageProfile {
	readonly backupRetentionDays?: number;
	readonly geoRedundantBackup?: "Disabled" | "Enabled";
	readonly storageAutogrow?: "Disabled" | "Enabled";
	readonly storageMB?: number;
}
export interface VirtualNetworkRuleProperties {
	readonly ignoreMissingVnetServiceEndpoint?: boolean;
	readonly state?: "Deleting" | "InProgress" | "Initializing" | "Ready" | "Unknown";
	readonly virtualNetworkSubnetId: string;
}
export interface WaitStatisticProperties {
	readonly count?: number;
	readonly databaseName?: string;
	readonly endTime?: string;
	readonly eventName?: string;
	readonly eventTypeName?: string;
	readonly queryId?: number;
	readonly startTime?: string;
	readonly totalTimeInMs?: number;
	readonly userId?: number;
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

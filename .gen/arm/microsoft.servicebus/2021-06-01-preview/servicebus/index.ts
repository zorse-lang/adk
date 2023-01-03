import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class namespaces extends ArmResource<namespacesComponentInputs> implements namespacesComponentOutputs {
	constructor(entity: ADKEntity, options: namespacesComponentInputs) {
		super(entity, options.name, "Microsoft.ServiceBus/namespaces", "2021-06-01-preview", options);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceBus/namespaces";
}
export interface namespacesComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ServiceBus/namespaces";
}
export interface namespacesComponentInputs {
	readonly identity?: Identity | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: SBNamespaceProperties | undefined;
	readonly sku?: SBSku | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class namespaces_AuthorizationRules
	extends ArmResource<namespaces_AuthorizationRulesComponentInputs>
	implements namespaces_AuthorizationRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: namespaces_AuthorizationRulesComponentInputs) {
		super(entity, options.name, "Microsoft.ServiceBus/namespaces/AuthorizationRules", "2021-06-01-preview", options);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceBus/namespaces/AuthorizationRules";
}
export interface namespaces_AuthorizationRulesComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ServiceBus/namespaces/AuthorizationRules";
}
export interface namespaces_AuthorizationRulesComponentInputs {
	readonly name: string;
	readonly properties?: SBAuthorizationRuleProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class namespaces_disasterRecoveryConfigs
	extends ArmResource<namespaces_disasterRecoveryConfigsComponentInputs>
	implements namespaces_disasterRecoveryConfigsComponentOutputs
{
	constructor(entity: ADKEntity, options: namespaces_disasterRecoveryConfigsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.ServiceBus/namespaces/disasterRecoveryConfigs",
			"2021-06-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceBus/namespaces/disasterRecoveryConfigs";
}
export interface namespaces_disasterRecoveryConfigsComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ServiceBus/namespaces/disasterRecoveryConfigs";
}
export interface namespaces_disasterRecoveryConfigsComponentInputs {
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
			"Microsoft.ServiceBus/namespaces/disasterRecoveryConfigs/authorizationRules",
			"2021-06-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceBus/namespaces/disasterRecoveryConfigs/authorizationRules";
}
export interface namespaces_disasterRecoveryConfigs_authorizationRulesComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ServiceBus/namespaces/disasterRecoveryConfigs/authorizationRules";
}
export interface namespaces_disasterRecoveryConfigs_authorizationRulesComponentInputs {
	readonly name: string;
	readonly properties?: SBAuthorizationRuleProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class namespaces_migrationConfigurations
	extends ArmResource<namespaces_migrationConfigurationsComponentInputs>
	implements namespaces_migrationConfigurationsComponentOutputs
{
	constructor(entity: ADKEntity, options: namespaces_migrationConfigurationsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.ServiceBus/namespaces/migrationConfigurations",
			"2021-06-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceBus/namespaces/migrationConfigurations";
}
export interface namespaces_migrationConfigurationsComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ServiceBus/namespaces/migrationConfigurations";
}
export interface namespaces_migrationConfigurationsComponentInputs {
	readonly name: string;
	readonly properties?: MigrationConfigPropertiesProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class namespaces_networkRuleSets
	extends ArmResource<namespaces_networkRuleSetsComponentInputs>
	implements namespaces_networkRuleSetsComponentOutputs
{
	constructor(entity: ADKEntity, options: namespaces_networkRuleSetsComponentInputs) {
		super(entity, options.name, "Microsoft.ServiceBus/namespaces/networkRuleSets", "2021-06-01-preview", options);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceBus/namespaces/networkRuleSets";
}
export interface namespaces_networkRuleSetsComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ServiceBus/namespaces/networkRuleSets";
}
export interface namespaces_networkRuleSetsComponentInputs {
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
			"Microsoft.ServiceBus/namespaces/privateEndpointConnections",
			"2021-06-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceBus/namespaces/privateEndpointConnections";
}
export interface namespaces_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ServiceBus/namespaces/privateEndpointConnections";
}
export interface namespaces_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class namespaces_queues
	extends ArmResource<namespaces_queuesComponentInputs>
	implements namespaces_queuesComponentOutputs
{
	constructor(entity: ADKEntity, options: namespaces_queuesComponentInputs) {
		super(entity, options.name, "Microsoft.ServiceBus/namespaces/queues", "2021-06-01-preview", options);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceBus/namespaces/queues";
}
export interface namespaces_queuesComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ServiceBus/namespaces/queues";
}
export interface namespaces_queuesComponentInputs {
	readonly name: string;
	readonly properties?: SBQueueProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class namespaces_queues_authorizationRules
	extends ArmResource<namespaces_queues_authorizationRulesComponentInputs>
	implements namespaces_queues_authorizationRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: namespaces_queues_authorizationRulesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.ServiceBus/namespaces/queues/authorizationRules",
			"2021-06-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceBus/namespaces/queues/authorizationRules";
}
export interface namespaces_queues_authorizationRulesComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ServiceBus/namespaces/queues/authorizationRules";
}
export interface namespaces_queues_authorizationRulesComponentInputs {
	readonly name: string;
	readonly properties?: SBAuthorizationRuleProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class namespaces_topics
	extends ArmResource<namespaces_topicsComponentInputs>
	implements namespaces_topicsComponentOutputs
{
	constructor(entity: ADKEntity, options: namespaces_topicsComponentInputs) {
		super(entity, options.name, "Microsoft.ServiceBus/namespaces/topics", "2021-06-01-preview", options);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceBus/namespaces/topics";
}
export interface namespaces_topicsComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ServiceBus/namespaces/topics";
}
export interface namespaces_topicsComponentInputs {
	readonly name: string;
	readonly properties?: SBTopicProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class namespaces_topics_authorizationRules
	extends ArmResource<namespaces_topics_authorizationRulesComponentInputs>
	implements namespaces_topics_authorizationRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: namespaces_topics_authorizationRulesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.ServiceBus/namespaces/topics/authorizationRules",
			"2021-06-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceBus/namespaces/topics/authorizationRules";
}
export interface namespaces_topics_authorizationRulesComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ServiceBus/namespaces/topics/authorizationRules";
}
export interface namespaces_topics_authorizationRulesComponentInputs {
	readonly name: string;
	readonly properties?: SBAuthorizationRuleProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class namespaces_topics_subscriptions
	extends ArmResource<namespaces_topics_subscriptionsComponentInputs>
	implements namespaces_topics_subscriptionsComponentOutputs
{
	constructor(entity: ADKEntity, options: namespaces_topics_subscriptionsComponentInputs) {
		super(entity, options.name, "Microsoft.ServiceBus/namespaces/topics/subscriptions", "2021-06-01-preview", options);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceBus/namespaces/topics/subscriptions";
}
export interface namespaces_topics_subscriptionsComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ServiceBus/namespaces/topics/subscriptions";
}
export interface namespaces_topics_subscriptionsComponentInputs {
	readonly name: string;
	readonly properties?: SBSubscriptionProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class namespaces_topics_subscriptions_rules
	extends ArmResource<namespaces_topics_subscriptions_rulesComponentInputs>
	implements namespaces_topics_subscriptions_rulesComponentOutputs
{
	constructor(entity: ADKEntity, options: namespaces_topics_subscriptions_rulesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.ServiceBus/namespaces/topics/subscriptions/rules",
			"2021-06-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceBus/namespaces/topics/subscriptions/rules";
}
export interface namespaces_topics_subscriptions_rulesComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ServiceBus/namespaces/topics/subscriptions/rules";
}
export interface namespaces_topics_subscriptions_rulesComponentInputs {
	readonly name: string;
	readonly properties?: Ruleproperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export function listKeys(resource: namespaces_AuthorizationRules): AccessKeys {
	if (resource.apiVersion !== "2021-06-01-preview") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.ServiceBus/namespaces/AuthorizationRules") {
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
export interface Action {
	readonly compatibilityLevel?: number | undefined;
	readonly requiresPreprocessing?: boolean | undefined;
	readonly sqlExpression?: string | undefined;
}
export interface ArmDisasterRecoveryProperties {
	readonly alternateName?: string | undefined;
	readonly partnerNamespace?: string | undefined;
	readonly pendingReplicationOperationsCount?: number | undefined;
	readonly provisioningState?: ("Accepted" | "Failed") | undefined;
	readonly role?: ("Primary" | "PrimaryNotReplicating") | undefined;
}
export interface ConnectionState {
	readonly description?: string | undefined;
	readonly status?: ("Approved" | "Disconnected" | "Pending" | "Rejected") | undefined;
}
export interface CorrelationFilter {
	readonly contentType?: string | undefined;
	readonly correlationId?: string | undefined;
	readonly label?: string | undefined;
	readonly messageId?: string | undefined;
	readonly properties?: CorrelationFilterProperties | undefined;
	readonly replyTo?: string | undefined;
	readonly replyToSessionId?: string | undefined;
	readonly requiresPreprocessing?: boolean | undefined;
	readonly sessionId?: string | undefined;
	readonly to?: string | undefined;
}
export interface CorrelationFilterProperties {
	readonly "[ key: string ]"?: string | undefined;
}
export interface Encryption {
	readonly keySource?: "Microsoft.KeyVault" | undefined;
	readonly keyVaultProperties?: KeyVaultProperties[] | undefined;
	readonly requireInfrastructureEncryption?: boolean | undefined;
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
export interface MessageCountDetails {
	readonly activeMessageCount?: number | undefined;
	readonly deadLetterMessageCount?: number | undefined;
	readonly scheduledMessageCount?: number | undefined;
	readonly transferDeadLetterMessageCount?: number | undefined;
	readonly transferMessageCount?: number | undefined;
}
export interface MigrationConfigPropertiesProperties {
	readonly migrationState?: string | undefined;
	readonly pendingReplicationOperationsCount?: number | undefined;
	readonly postMigrationName: string;
	readonly provisioningState?: string | undefined;
	readonly targetNamespace: string;
}
export interface NetworkRuleSetProperties {
	readonly defaultAction?: ("Allow" | "Deny") | undefined;
	readonly ipRules?: NWRuleSetIpRules[] | undefined;
	readonly publicNetworkAccess?: ("Disabled" | "Enabled") | undefined;
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
export interface Ruleproperties {
	readonly action?: Action | undefined;
	readonly correlationFilter?: CorrelationFilter | undefined;
	readonly filterType?: "CorrelationFilter" | undefined;
	readonly sqlFilter?: SqlFilter | undefined;
}
export interface SBAuthorizationRuleProperties {
	readonly rights: "Listen" | "Manage"[];
}
export interface SBClientAffineProperties {
	readonly clientId?: string | undefined;
	readonly isDurable?: boolean | undefined;
	readonly isShared?: boolean | undefined;
}
export interface SBNamespaceProperties {
	readonly createdAt?: string | undefined;
	readonly disableLocalAuth?: boolean | undefined;
	readonly encryption?: Encryption | undefined;
	readonly metricId?: string | undefined;
	readonly privateEndpointConnections?: PrivateEndpointConnection[] | undefined;
	readonly provisioningState?: string | undefined;
	readonly serviceBusEndpoint?: string | undefined;
	readonly status?: string | undefined;
	readonly updatedAt?: string | undefined;
	readonly zoneRedundant?: boolean | undefined;
}
export interface SBQueueProperties {
	readonly accessedAt?: string | undefined;
	readonly autoDeleteOnIdle?: string | undefined;
	readonly countDetails?: MessageCountDetails | undefined;
	readonly createdAt?: string | undefined;
	readonly deadLetteringOnMessageExpiration?: boolean | undefined;
	readonly defaultMessageTimeToLive?: string | undefined;
	readonly duplicateDetectionHistoryTimeWindow?: string | undefined;
	readonly enableBatchedOperations?: boolean | undefined;
	readonly enableExpress?: boolean | undefined;
	readonly enablePartitioning?: boolean | undefined;
	readonly forwardDeadLetteredMessagesTo?: string | undefined;
	readonly forwardTo?: string | undefined;
	readonly lockDuration?: string | undefined;
	readonly maxDeliveryCount?: number | undefined;
	readonly maxMessageSizeInKilobytes?: number | undefined;
	readonly maxSizeInMegabytes?: number | undefined;
	readonly messageCount?: number | undefined;
	readonly requiresDuplicateDetection?: boolean | undefined;
	readonly requiresSession?: boolean | undefined;
	readonly sizeInBytes?: number | undefined;
	readonly status?:
		| ("Active" | "Creating" | "Deleting" | "Disabled" | "ReceiveDisabled" | "Renaming" | "Restoring" | "SendDisabled")
		| undefined;
	readonly updatedAt?: string | undefined;
}
export interface SBSku {
	readonly capacity?: number | undefined;
	readonly name: "Basic" | "Premium";
	readonly tier?: ("Basic" | "Premium") | undefined;
}
export interface SBSubscriptionProperties {
	readonly accessedAt?: string | undefined;
	readonly autoDeleteOnIdle?: string | undefined;
	readonly clientAffineProperties?: SBClientAffineProperties | undefined;
	readonly countDetails?: MessageCountDetails | undefined;
	readonly createdAt?: string | undefined;
	readonly deadLetteringOnFilterEvaluationExceptions?: boolean | undefined;
	readonly deadLetteringOnMessageExpiration?: boolean | undefined;
	readonly defaultMessageTimeToLive?: string | undefined;
	readonly duplicateDetectionHistoryTimeWindow?: string | undefined;
	readonly enableBatchedOperations?: boolean | undefined;
	readonly forwardDeadLetteredMessagesTo?: string | undefined;
	readonly forwardTo?: string | undefined;
	readonly isClientAffine?: boolean | undefined;
	readonly lockDuration?: string | undefined;
	readonly maxDeliveryCount?: number | undefined;
	readonly messageCount?: number | undefined;
	readonly requiresSession?: boolean | undefined;
	readonly status?:
		| ("Active" | "Creating" | "Deleting" | "Disabled" | "ReceiveDisabled" | "Renaming" | "Restoring" | "SendDisabled")
		| undefined;
	readonly updatedAt?: string | undefined;
}
export interface SBTopicProperties {
	readonly accessedAt?: string | undefined;
	readonly autoDeleteOnIdle?: string | undefined;
	readonly countDetails?: MessageCountDetails | undefined;
	readonly createdAt?: string | undefined;
	readonly defaultMessageTimeToLive?: string | undefined;
	readonly duplicateDetectionHistoryTimeWindow?: string | undefined;
	readonly enableBatchedOperations?: boolean | undefined;
	readonly enableExpress?: boolean | undefined;
	readonly enablePartitioning?: boolean | undefined;
	readonly maxMessageSizeInKilobytes?: number | undefined;
	readonly maxSizeInMegabytes?: number | undefined;
	readonly requiresDuplicateDetection?: boolean | undefined;
	readonly sizeInBytes?: number | undefined;
	readonly status?:
		| ("Active" | "Creating" | "Deleting" | "Disabled" | "ReceiveDisabled" | "Renaming" | "Restoring" | "SendDisabled")
		| undefined;
	readonly subscriptionCount?: number | undefined;
	readonly supportOrdering?: boolean | undefined;
	readonly updatedAt?: string | undefined;
}
export interface SqlFilter {
	readonly compatibilityLevel?: number | undefined;
	readonly requiresPreprocessing?: boolean | undefined;
	readonly sqlExpression?: string | undefined;
}
export interface Subnet {
	readonly id: string;
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
	namespaces: namespaces,
	"namespaces/AuthorizationRules": namespaces_AuthorizationRules,
	"namespaces/disasterRecoveryConfigs": namespaces_disasterRecoveryConfigs,
	"namespaces/disasterRecoveryConfigs/authorizationRules": namespaces_disasterRecoveryConfigs_authorizationRules,
	"namespaces/migrationConfigurations": namespaces_migrationConfigurations,
	"namespaces/networkRuleSets": namespaces_networkRuleSets,
	"namespaces/privateEndpointConnections": namespaces_privateEndpointConnections,
	"namespaces/queues": namespaces_queues,
	"namespaces/queues/authorizationRules": namespaces_queues_authorizationRules,
	"namespaces/topics": namespaces_topics,
	"namespaces/topics/authorizationRules": namespaces_topics_authorizationRules,
	"namespaces/topics/subscriptions": namespaces_topics_subscriptions,
	"namespaces/topics/subscriptions/rules": namespaces_topics_subscriptions_rules,
};

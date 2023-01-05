import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class namespaces extends ArmResource<namespacesComponentInputs> implements namespacesComponentOutputs {
	constructor(entity: ADKEntity, options: namespacesComponentInputs) {
		super(entity, options.name, "Microsoft.ServiceBus/namespaces", "2017-04-01", options);
	}
	public readonly apiVersion: "2017-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceBus/namespaces";
}
export interface namespacesComponentOutputs {
	readonly apiVersion: "2017-04-01";
	readonly id: string;
	readonly type: "Microsoft.ServiceBus/namespaces";
}
export interface namespacesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: SBNamespaceProperties;
	readonly sku?: SBSku;
	readonly tags?: TrackedResourceTags;
}
export class namespaces_AuthorizationRules
	extends ArmResource<namespaces_AuthorizationRulesComponentInputs>
	implements namespaces_AuthorizationRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: namespaces_AuthorizationRulesComponentInputs) {
		super(entity, options.name, "Microsoft.ServiceBus/namespaces/AuthorizationRules", "2017-04-01", options);
	}
	public readonly apiVersion: "2017-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceBus/namespaces/AuthorizationRules";
}
export interface namespaces_AuthorizationRulesComponentOutputs {
	readonly apiVersion: "2017-04-01";
	readonly id: string;
	readonly type: "Microsoft.ServiceBus/namespaces/AuthorizationRules";
}
export interface namespaces_AuthorizationRulesComponentInputs {
	readonly name: string;
	readonly properties?: SBAuthorizationRuleProperties;
}
export class namespaces_disasterRecoveryConfigs
	extends ArmResource<namespaces_disasterRecoveryConfigsComponentInputs>
	implements namespaces_disasterRecoveryConfigsComponentOutputs
{
	constructor(entity: ADKEntity, options: namespaces_disasterRecoveryConfigsComponentInputs) {
		super(entity, options.name, "Microsoft.ServiceBus/namespaces/disasterRecoveryConfigs", "2017-04-01", options);
	}
	public readonly apiVersion: "2017-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceBus/namespaces/disasterRecoveryConfigs";
}
export interface namespaces_disasterRecoveryConfigsComponentOutputs {
	readonly apiVersion: "2017-04-01";
	readonly id: string;
	readonly type: "Microsoft.ServiceBus/namespaces/disasterRecoveryConfigs";
}
export interface namespaces_disasterRecoveryConfigsComponentInputs {
	readonly name: string;
	readonly properties?: ArmDisasterRecoveryProperties;
}
export class namespaces_disasterRecoveryConfigs_AuthorizationRules
	extends ArmResource<namespaces_disasterRecoveryConfigs_AuthorizationRulesComponentInputs>
	implements namespaces_disasterRecoveryConfigs_AuthorizationRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: namespaces_disasterRecoveryConfigs_AuthorizationRulesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.ServiceBus/namespaces/disasterRecoveryConfigs/AuthorizationRules",
			"2017-04-01",
			options,
		);
	}
	public readonly apiVersion: "2017-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceBus/namespaces/disasterRecoveryConfigs/AuthorizationRules";
}
export interface namespaces_disasterRecoveryConfigs_AuthorizationRulesComponentOutputs {
	readonly apiVersion: "2017-04-01";
	readonly id: string;
	readonly type: "Microsoft.ServiceBus/namespaces/disasterRecoveryConfigs/AuthorizationRules";
}
export interface namespaces_disasterRecoveryConfigs_AuthorizationRulesComponentInputs {
	readonly name: string;
	readonly properties?: SBAuthorizationRuleProperties;
}
export class namespaces_migrationConfigurations
	extends ArmResource<namespaces_migrationConfigurationsComponentInputs>
	implements namespaces_migrationConfigurationsComponentOutputs
{
	constructor(entity: ADKEntity, options: namespaces_migrationConfigurationsComponentInputs) {
		super(entity, options.name, "Microsoft.ServiceBus/namespaces/migrationConfigurations", "2017-04-01", options);
	}
	public readonly apiVersion: "2017-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceBus/namespaces/migrationConfigurations";
}
export interface namespaces_migrationConfigurationsComponentOutputs {
	readonly apiVersion: "2017-04-01";
	readonly id: string;
	readonly type: "Microsoft.ServiceBus/namespaces/migrationConfigurations";
}
export interface namespaces_migrationConfigurationsComponentInputs {
	readonly name: string;
	readonly properties?: MigrationConfigPropertiesProperties;
}
export class namespaces_networkRuleSets
	extends ArmResource<namespaces_networkRuleSetsComponentInputs>
	implements namespaces_networkRuleSetsComponentOutputs
{
	constructor(entity: ADKEntity, options: namespaces_networkRuleSetsComponentInputs) {
		super(entity, options.name, "Microsoft.ServiceBus/namespaces/networkRuleSets", "2017-04-01", options);
	}
	public readonly apiVersion: "2017-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceBus/namespaces/networkRuleSets";
}
export interface namespaces_networkRuleSetsComponentOutputs {
	readonly apiVersion: "2017-04-01";
	readonly id: string;
	readonly type: "Microsoft.ServiceBus/namespaces/networkRuleSets";
}
export interface namespaces_networkRuleSetsComponentInputs {
	readonly name: string;
	readonly properties?: NetworkRuleSetProperties;
}
export class namespaces_queues
	extends ArmResource<namespaces_queuesComponentInputs>
	implements namespaces_queuesComponentOutputs
{
	constructor(entity: ADKEntity, options: namespaces_queuesComponentInputs) {
		super(entity, options.name, "Microsoft.ServiceBus/namespaces/queues", "2017-04-01", options);
	}
	public readonly apiVersion: "2017-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceBus/namespaces/queues";
}
export interface namespaces_queuesComponentOutputs {
	readonly apiVersion: "2017-04-01";
	readonly id: string;
	readonly type: "Microsoft.ServiceBus/namespaces/queues";
}
export interface namespaces_queuesComponentInputs {
	readonly name: string;
	readonly properties?: SBQueueProperties;
}
export class namespaces_queues_authorizationRules
	extends ArmResource<namespaces_queues_authorizationRulesComponentInputs>
	implements namespaces_queues_authorizationRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: namespaces_queues_authorizationRulesComponentInputs) {
		super(entity, options.name, "Microsoft.ServiceBus/namespaces/queues/authorizationRules", "2017-04-01", options);
	}
	public readonly apiVersion: "2017-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceBus/namespaces/queues/authorizationRules";
}
export interface namespaces_queues_authorizationRulesComponentOutputs {
	readonly apiVersion: "2017-04-01";
	readonly id: string;
	readonly type: "Microsoft.ServiceBus/namespaces/queues/authorizationRules";
}
export interface namespaces_queues_authorizationRulesComponentInputs {
	readonly name: string;
	readonly properties?: SBAuthorizationRuleProperties;
}
export class namespaces_topics
	extends ArmResource<namespaces_topicsComponentInputs>
	implements namespaces_topicsComponentOutputs
{
	constructor(entity: ADKEntity, options: namespaces_topicsComponentInputs) {
		super(entity, options.name, "Microsoft.ServiceBus/namespaces/topics", "2017-04-01", options);
	}
	public readonly apiVersion: "2017-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceBus/namespaces/topics";
}
export interface namespaces_topicsComponentOutputs {
	readonly apiVersion: "2017-04-01";
	readonly id: string;
	readonly type: "Microsoft.ServiceBus/namespaces/topics";
}
export interface namespaces_topicsComponentInputs {
	readonly name: string;
	readonly properties?: SBTopicProperties;
}
export class namespaces_topics_authorizationRules
	extends ArmResource<namespaces_topics_authorizationRulesComponentInputs>
	implements namespaces_topics_authorizationRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: namespaces_topics_authorizationRulesComponentInputs) {
		super(entity, options.name, "Microsoft.ServiceBus/namespaces/topics/authorizationRules", "2017-04-01", options);
	}
	public readonly apiVersion: "2017-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceBus/namespaces/topics/authorizationRules";
}
export interface namespaces_topics_authorizationRulesComponentOutputs {
	readonly apiVersion: "2017-04-01";
	readonly id: string;
	readonly type: "Microsoft.ServiceBus/namespaces/topics/authorizationRules";
}
export interface namespaces_topics_authorizationRulesComponentInputs {
	readonly name: string;
	readonly properties?: SBAuthorizationRuleProperties;
}
export class namespaces_topics_subscriptions
	extends ArmResource<namespaces_topics_subscriptionsComponentInputs>
	implements namespaces_topics_subscriptionsComponentOutputs
{
	constructor(entity: ADKEntity, options: namespaces_topics_subscriptionsComponentInputs) {
		super(entity, options.name, "Microsoft.ServiceBus/namespaces/topics/subscriptions", "2017-04-01", options);
	}
	public readonly apiVersion: "2017-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceBus/namespaces/topics/subscriptions";
}
export interface namespaces_topics_subscriptionsComponentOutputs {
	readonly apiVersion: "2017-04-01";
	readonly id: string;
	readonly type: "Microsoft.ServiceBus/namespaces/topics/subscriptions";
}
export interface namespaces_topics_subscriptionsComponentInputs {
	readonly name: string;
	readonly properties?: SBSubscriptionProperties;
}
export class namespaces_topics_subscriptions_rules
	extends ArmResource<namespaces_topics_subscriptions_rulesComponentInputs>
	implements namespaces_topics_subscriptions_rulesComponentOutputs
{
	constructor(entity: ADKEntity, options: namespaces_topics_subscriptions_rulesComponentInputs) {
		super(entity, options.name, "Microsoft.ServiceBus/namespaces/topics/subscriptions/rules", "2017-04-01", options);
	}
	public readonly apiVersion: "2017-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceBus/namespaces/topics/subscriptions/rules";
}
export interface namespaces_topics_subscriptions_rulesComponentOutputs {
	readonly apiVersion: "2017-04-01";
	readonly id: string;
	readonly type: "Microsoft.ServiceBus/namespaces/topics/subscriptions/rules";
}
export interface namespaces_topics_subscriptions_rulesComponentInputs {
	readonly name: string;
	readonly properties?: Ruleproperties;
}
export function listKeys(resource: namespaces_AuthorizationRules): AccessKeys {
	if (resource.apiVersion !== "2017-04-01") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.ServiceBus/namespaces/AuthorizationRules") {
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
export interface Action {
	readonly compatibilityLevel?: number;
	readonly requiresPreprocessing?: boolean;
	readonly sqlExpression?: string;
}
export interface ArmDisasterRecoveryProperties {
	readonly alternateName?: string;
	readonly partnerNamespace?: string;
	readonly pendingReplicationOperationsCount?: number;
	readonly provisioningState?: "Accepted" | "Failed";
	readonly role?: "Primary" | "PrimaryNotReplicating";
}
export interface CorrelationFilter {
	readonly contentType?: string;
	readonly correlationId?: string;
	readonly label?: string;
	readonly messageId?: string;
	readonly properties?: CorrelationFilterProperties;
	readonly replyTo?: string;
	readonly replyToSessionId?: string;
	readonly requiresPreprocessing?: boolean;
	readonly sessionId?: string;
	readonly to?: string;
}
export interface CorrelationFilterProperties {
	readonly [key: string]: string;
}
export interface MessageCountDetails {
	readonly activeMessageCount?: number;
	readonly deadLetterMessageCount?: number;
	readonly scheduledMessageCount?: number;
	readonly transferDeadLetterMessageCount?: number;
	readonly transferMessageCount?: number;
}
export interface MigrationConfigPropertiesProperties {
	readonly migrationState?: string;
	readonly pendingReplicationOperationsCount?: number;
	readonly postMigrationName: string;
	readonly provisioningState?: string;
	readonly targetNamespace: string;
}
export interface NetworkRuleSetProperties {
	readonly defaultAction?: "Allow" | "Deny";
	readonly ipRules?: NWRuleSetIpRules[];
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
export interface Ruleproperties {
	readonly action?: Action;
	readonly correlationFilter?: CorrelationFilter;
	readonly filterType?: "CorrelationFilter";
	readonly sqlFilter?: SqlFilter;
}
export interface SBAuthorizationRuleProperties {
	readonly rights: "Listen" | "Manage"[];
}
export interface SBNamespaceProperties {
	readonly createdAt?: string;
	readonly metricId?: string;
	readonly provisioningState?: string;
	readonly serviceBusEndpoint?: string;
	readonly updatedAt?: string;
}
export interface SBQueueProperties {
	readonly accessedAt?: string;
	readonly autoDeleteOnIdle?: string;
	readonly countDetails?: MessageCountDetails;
	readonly createdAt?: string;
	readonly deadLetteringOnMessageExpiration?: boolean;
	readonly defaultMessageTimeToLive?: string;
	readonly duplicateDetectionHistoryTimeWindow?: string;
	readonly enableBatchedOperations?: boolean;
	readonly enableExpress?: boolean;
	readonly enablePartitioning?: boolean;
	readonly forwardDeadLetteredMessagesTo?: string;
	readonly forwardTo?: string;
	readonly lockDuration?: string;
	readonly maxDeliveryCount?: number;
	readonly maxSizeInMegabytes?: number;
	readonly messageCount?: number;
	readonly requiresDuplicateDetection?: boolean;
	readonly requiresSession?: boolean;
	readonly sizeInBytes?: number;
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
export interface SBSku {
	readonly capacity?: number;
	readonly name: "Basic" | "Premium";
	readonly tier?: "Basic" | "Premium";
}
export interface SBSubscriptionProperties {
	readonly accessedAt?: string;
	readonly autoDeleteOnIdle?: string;
	readonly countDetails?: MessageCountDetails;
	readonly createdAt?: string;
	readonly deadLetteringOnFilterEvaluationExceptions?: boolean;
	readonly deadLetteringOnMessageExpiration?: boolean;
	readonly defaultMessageTimeToLive?: string;
	readonly duplicateDetectionHistoryTimeWindow?: string;
	readonly enableBatchedOperations?: boolean;
	readonly forwardDeadLetteredMessagesTo?: string;
	readonly forwardTo?: string;
	readonly lockDuration?: string;
	readonly maxDeliveryCount?: number;
	readonly messageCount?: number;
	readonly requiresSession?: boolean;
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
export interface SBTopicProperties {
	readonly accessedAt?: string;
	readonly autoDeleteOnIdle?: string;
	readonly countDetails?: MessageCountDetails;
	readonly createdAt?: string;
	readonly defaultMessageTimeToLive?: string;
	readonly duplicateDetectionHistoryTimeWindow?: string;
	readonly enableBatchedOperations?: boolean;
	readonly enableExpress?: boolean;
	readonly enablePartitioning?: boolean;
	readonly maxSizeInMegabytes?: number;
	readonly requiresDuplicateDetection?: boolean;
	readonly sizeInBytes?: number;
	readonly status?:
		| "Active"
		| "Creating"
		| "Deleting"
		| "Disabled"
		| "ReceiveDisabled"
		| "Renaming"
		| "Restoring"
		| "SendDisabled";
	readonly subscriptionCount?: number;
	readonly supportOrdering?: boolean;
	readonly updatedAt?: string;
}
export interface SqlFilter {
	readonly compatibilityLevel?: number;
	readonly requiresPreprocessing?: boolean;
	readonly sqlExpression?: string;
}
export interface Subnet {
	readonly id: string;
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export default {
	namespaces: namespaces,
	"namespaces/AuthorizationRules": namespaces_AuthorizationRules,
	"namespaces/disasterRecoveryConfigs": namespaces_disasterRecoveryConfigs,
	"namespaces/disasterRecoveryConfigs/AuthorizationRules": namespaces_disasterRecoveryConfigs_AuthorizationRules,
	"namespaces/migrationConfigurations": namespaces_migrationConfigurations,
	"namespaces/networkRuleSets": namespaces_networkRuleSets,
	"namespaces/queues": namespaces_queues,
	"namespaces/queues/authorizationRules": namespaces_queues_authorizationRules,
	"namespaces/topics": namespaces_topics,
	"namespaces/topics/authorizationRules": namespaces_topics_authorizationRules,
	"namespaces/topics/subscriptions": namespaces_topics_subscriptions,
	"namespaces/topics/subscriptions/rules": namespaces_topics_subscriptions_rules,
};

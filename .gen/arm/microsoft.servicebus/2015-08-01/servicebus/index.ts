import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class namespaces extends ArmResource<namespacesComponentInputs> implements namespacesComponentOutputs {
	constructor(entity: ADKEntity, options: namespacesComponentInputs) {
		super(entity, options.name, "Microsoft.ServiceBus/namespaces", "2015-08-01", options);
	}
	public readonly apiVersion: "2015-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceBus/namespaces";
}
export interface namespacesComponentOutputs {
	readonly apiVersion: "2015-08-01";
	readonly id: string;
	readonly type: "Microsoft.ServiceBus/namespaces";
}
export interface namespacesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: NamespaceProperties;
	readonly sku?: Sku;
	readonly tags?: NamespaceCreateOrUpdateParametersTags;
}
export class namespaces_AuthorizationRules
	extends ArmResource<namespaces_AuthorizationRulesComponentInputs>
	implements namespaces_AuthorizationRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: namespaces_AuthorizationRulesComponentInputs) {
		super(entity, options.name, "Microsoft.ServiceBus/namespaces/AuthorizationRules", "2015-08-01", options);
	}
	public readonly apiVersion: "2015-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceBus/namespaces/AuthorizationRules";
}
export interface namespaces_AuthorizationRulesComponentOutputs {
	readonly apiVersion: "2015-08-01";
	readonly id: string;
	readonly type: "Microsoft.ServiceBus/namespaces/AuthorizationRules";
}
export interface namespaces_AuthorizationRulesComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: SharedAccessAuthorizationRuleProperties;
}
export class namespaces_queues
	extends ArmResource<namespaces_queuesComponentInputs>
	implements namespaces_queuesComponentOutputs
{
	constructor(entity: ADKEntity, options: namespaces_queuesComponentInputs) {
		super(entity, options.name, "Microsoft.ServiceBus/namespaces/queues", "2015-08-01", options);
	}
	public readonly apiVersion: "2015-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceBus/namespaces/queues";
}
export interface namespaces_queuesComponentOutputs {
	readonly apiVersion: "2015-08-01";
	readonly id: string;
	readonly type: "Microsoft.ServiceBus/namespaces/queues";
}
export interface namespaces_queuesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: QueueProperties;
}
export class namespaces_queues_authorizationRules
	extends ArmResource<namespaces_queues_authorizationRulesComponentInputs>
	implements namespaces_queues_authorizationRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: namespaces_queues_authorizationRulesComponentInputs) {
		super(entity, options.name, "Microsoft.ServiceBus/namespaces/queues/authorizationRules", "2015-08-01", options);
	}
	public readonly apiVersion: "2015-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceBus/namespaces/queues/authorizationRules";
}
export interface namespaces_queues_authorizationRulesComponentOutputs {
	readonly apiVersion: "2015-08-01";
	readonly id: string;
	readonly type: "Microsoft.ServiceBus/namespaces/queues/authorizationRules";
}
export interface namespaces_queues_authorizationRulesComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: SharedAccessAuthorizationRuleProperties;
}
export class namespaces_topics
	extends ArmResource<namespaces_topicsComponentInputs>
	implements namespaces_topicsComponentOutputs
{
	constructor(entity: ADKEntity, options: namespaces_topicsComponentInputs) {
		super(entity, options.name, "Microsoft.ServiceBus/namespaces/topics", "2015-08-01", options);
	}
	public readonly apiVersion: "2015-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceBus/namespaces/topics";
}
export interface namespaces_topicsComponentOutputs {
	readonly apiVersion: "2015-08-01";
	readonly id: string;
	readonly type: "Microsoft.ServiceBus/namespaces/topics";
}
export interface namespaces_topicsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: TopicProperties;
}
export class namespaces_topics_authorizationRules
	extends ArmResource<namespaces_topics_authorizationRulesComponentInputs>
	implements namespaces_topics_authorizationRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: namespaces_topics_authorizationRulesComponentInputs) {
		super(entity, options.name, "Microsoft.ServiceBus/namespaces/topics/authorizationRules", "2015-08-01", options);
	}
	public readonly apiVersion: "2015-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceBus/namespaces/topics/authorizationRules";
}
export interface namespaces_topics_authorizationRulesComponentOutputs {
	readonly apiVersion: "2015-08-01";
	readonly id: string;
	readonly type: "Microsoft.ServiceBus/namespaces/topics/authorizationRules";
}
export interface namespaces_topics_authorizationRulesComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: SharedAccessAuthorizationRuleProperties;
}
export class namespaces_topics_subscriptions
	extends ArmResource<namespaces_topics_subscriptionsComponentInputs>
	implements namespaces_topics_subscriptionsComponentOutputs
{
	constructor(entity: ADKEntity, options: namespaces_topics_subscriptionsComponentInputs) {
		super(entity, options.name, "Microsoft.ServiceBus/namespaces/topics/subscriptions", "2015-08-01", options);
	}
	public readonly apiVersion: "2015-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceBus/namespaces/topics/subscriptions";
}
export interface namespaces_topics_subscriptionsComponentOutputs {
	readonly apiVersion: "2015-08-01";
	readonly id: string;
	readonly type: "Microsoft.ServiceBus/namespaces/topics/subscriptions";
}
export interface namespaces_topics_subscriptionsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: SubscriptionProperties;
}
export function listKeys(resource: namespaces_AuthorizationRules): ResourceListKeys {
	if (resource.apiVersion !== "2015-08-01") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.ServiceBus/namespaces/AuthorizationRules") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface MessageCountDetails {
	readonly activeMessageCount?: number;
	readonly deadLetterMessageCount?: number;
	readonly scheduledMessageCount?: number;
	readonly transferDeadLetterMessageCount?: number;
	readonly transferMessageCount?: number;
}
export interface NamespaceCreateOrUpdateParametersTags {
	readonly [key: string]: string;
}
export interface NamespaceProperties {
	readonly createACSNamespace?: boolean;
	readonly createdAt?: string;
	readonly enabled?: boolean;
	readonly provisioningState?: string;
	readonly serviceBusEndpoint?: string;
	readonly status?:
		| "Activating"
		| "Active"
		| "Created"
		| "Creating"
		| "Disabled"
		| "Disabling"
		| "Enabling"
		| "Failed"
		| "Removed"
		| "Removing"
		| "SoftDeleted"
		| "SoftDeleting";
	readonly updatedAt?: string;
}
export interface QueueProperties {
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
	readonly entityAvailabilityStatus?: "Available" | "Limited" | "Renaming" | "Restoring";
	readonly isAnonymousAccessible?: boolean;
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
	readonly supportOrdering?: boolean;
	readonly updatedAt?: string;
}
export interface ResourceListKeys {
	readonly keyName?: string;
	readonly primaryConnectionString?: string;
	readonly primaryKey?: string;
	readonly secondaryConnectionString?: string;
	readonly secondaryKey?: string;
}
export interface SharedAccessAuthorizationRuleProperties {
	readonly rights: "Listen" | "Manage"[];
}
export interface Sku {
	readonly capacity?: number;
	readonly name?: "Basic" | "Premium" | "Standard";
	readonly tier: "Basic" | "Premium" | "Standard";
}
export interface SubscriptionProperties {
	readonly accessedAt?: string;
	readonly autoDeleteOnIdle?: string;
	readonly countDetails?: MessageCountDetails;
	readonly createdAt?: string;
	readonly deadLetteringOnFilterEvaluationExceptions?: boolean;
	readonly deadLetteringOnMessageExpiration?: boolean;
	readonly defaultMessageTimeToLive?: string;
	readonly enableBatchedOperations?: boolean;
	readonly entityAvailabilityStatus?: "Available" | "Limited" | "Renaming" | "Restoring";
	readonly isReadOnly?: boolean;
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
export interface TopicProperties {
	readonly accessedAt?: string;
	readonly autoDeleteOnIdle?: string;
	readonly countDetails?: MessageCountDetails;
	readonly createdAt?: string;
	readonly defaultMessageTimeToLive?: string;
	readonly duplicateDetectionHistoryTimeWindow?: string;
	readonly enableBatchedOperations?: boolean;
	readonly enableExpress?: boolean;
	readonly enablePartitioning?: boolean;
	readonly entityAvailabilityStatus?: "Available" | "Limited" | "Renaming" | "Restoring";
	readonly filteringMessagesBeforePublishing?: boolean;
	readonly isAnonymousAccessible?: boolean;
	readonly isExpress?: boolean;
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
export default {
	namespaces: namespaces,
	"namespaces/AuthorizationRules": namespaces_AuthorizationRules,
	"namespaces/queues": namespaces_queues,
	"namespaces/queues/authorizationRules": namespaces_queues_authorizationRules,
	"namespaces/topics": namespaces_topics,
	"namespaces/topics/authorizationRules": namespaces_topics_authorizationRules,
	"namespaces/topics/subscriptions": namespaces_topics_subscriptions,
};

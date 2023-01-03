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
	readonly properties?: NamespaceProperties | undefined;
	readonly sku?: Sku | undefined;
	readonly tags?: NamespaceCreateOrUpdateParametersTags | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: SharedAccessAuthorizationRuleProperties | undefined;
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
	readonly properties?: QueueProperties | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: SharedAccessAuthorizationRuleProperties | undefined;
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
	readonly properties?: TopicProperties | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: SharedAccessAuthorizationRuleProperties | undefined;
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
	readonly properties?: SubscriptionProperties | undefined;
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
	readonly activeMessageCount?: number | undefined;
	readonly deadLetterMessageCount?: number | undefined;
	readonly scheduledMessageCount?: number | undefined;
	readonly transferDeadLetterMessageCount?: number | undefined;
	readonly transferMessageCount?: number | undefined;
}
export interface NamespaceCreateOrUpdateParametersTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface NamespaceProperties {
	readonly createACSNamespace?: boolean | undefined;
	readonly createdAt?: string | undefined;
	readonly enabled?: boolean | undefined;
	readonly provisioningState?: string | undefined;
	readonly serviceBusEndpoint?: string | undefined;
	readonly status?:
		| (
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
				| "SoftDeleting"
		  )
		| undefined;
	readonly updatedAt?: string | undefined;
}
export interface QueueProperties {
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
	readonly entityAvailabilityStatus?: ("Available" | "Limited" | "Renaming" | "Restoring") | undefined;
	readonly isAnonymousAccessible?: boolean | undefined;
	readonly lockDuration?: string | undefined;
	readonly maxDeliveryCount?: number | undefined;
	readonly maxSizeInMegabytes?: number | undefined;
	readonly messageCount?: number | undefined;
	readonly requiresDuplicateDetection?: boolean | undefined;
	readonly requiresSession?: boolean | undefined;
	readonly sizeInBytes?: number | undefined;
	readonly status?:
		| ("Active" | "Creating" | "Deleting" | "Disabled" | "ReceiveDisabled" | "Renaming" | "Restoring" | "SendDisabled")
		| undefined;
	readonly supportOrdering?: boolean | undefined;
	readonly updatedAt?: string | undefined;
}
export interface ResourceListKeys {
	readonly keyName?: string | undefined;
	readonly primaryConnectionString?: string | undefined;
	readonly primaryKey?: string | undefined;
	readonly secondaryConnectionString?: string | undefined;
	readonly secondaryKey?: string | undefined;
}
export interface SharedAccessAuthorizationRuleProperties {
	readonly rights: "Listen" | "Manage"[];
}
export interface Sku {
	readonly capacity?: number | undefined;
	readonly name?: ("Basic" | "Premium" | "Standard") | undefined;
	readonly tier: "Basic" | "Premium" | "Standard";
}
export interface SubscriptionProperties {
	readonly accessedAt?: string | undefined;
	readonly autoDeleteOnIdle?: string | undefined;
	readonly countDetails?: MessageCountDetails | undefined;
	readonly createdAt?: string | undefined;
	readonly deadLetteringOnFilterEvaluationExceptions?: boolean | undefined;
	readonly deadLetteringOnMessageExpiration?: boolean | undefined;
	readonly defaultMessageTimeToLive?: string | undefined;
	readonly enableBatchedOperations?: boolean | undefined;
	readonly entityAvailabilityStatus?: ("Available" | "Limited" | "Renaming" | "Restoring") | undefined;
	readonly isReadOnly?: boolean | undefined;
	readonly lockDuration?: string | undefined;
	readonly maxDeliveryCount?: number | undefined;
	readonly messageCount?: number | undefined;
	readonly requiresSession?: boolean | undefined;
	readonly status?:
		| ("Active" | "Creating" | "Deleting" | "Disabled" | "ReceiveDisabled" | "Renaming" | "Restoring" | "SendDisabled")
		| undefined;
	readonly updatedAt?: string | undefined;
}
export interface TopicProperties {
	readonly accessedAt?: string | undefined;
	readonly autoDeleteOnIdle?: string | undefined;
	readonly countDetails?: MessageCountDetails | undefined;
	readonly createdAt?: string | undefined;
	readonly defaultMessageTimeToLive?: string | undefined;
	readonly duplicateDetectionHistoryTimeWindow?: string | undefined;
	readonly enableBatchedOperations?: boolean | undefined;
	readonly enableExpress?: boolean | undefined;
	readonly enablePartitioning?: boolean | undefined;
	readonly entityAvailabilityStatus?: ("Available" | "Limited" | "Renaming" | "Restoring") | undefined;
	readonly filteringMessagesBeforePublishing?: boolean | undefined;
	readonly isAnonymousAccessible?: boolean | undefined;
	readonly isExpress?: boolean | undefined;
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
export default {
	namespaces: namespaces,
	"namespaces/AuthorizationRules": namespaces_AuthorizationRules,
	"namespaces/queues": namespaces_queues,
	"namespaces/queues/authorizationRules": namespaces_queues_authorizationRules,
	"namespaces/topics": namespaces_topics,
	"namespaces/topics/authorizationRules": namespaces_topics_authorizationRules,
	"namespaces/topics/subscriptions": namespaces_topics_subscriptions,
};

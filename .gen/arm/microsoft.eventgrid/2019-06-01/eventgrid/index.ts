import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class domains extends ArmResource<domainsComponentInputs> implements domainsComponentOutputs {
	constructor(entity: ADKEntity, options: domainsComponentInputs) {
		super(entity, options.name, "Microsoft.EventGrid/domains", "2019-06-01", options);
	}
	public readonly apiVersion: "2019-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.EventGrid/domains";
}
export interface domainsComponentOutputs {
	readonly apiVersion: "2019-06-01";
	readonly id: string;
	readonly type: "Microsoft.EventGrid/domains";
}
export interface domainsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: DomainProperties;
	readonly tags?: TrackedResourceTags;
}
export class domains_topics extends ArmResource<domains_topicsComponentInputs> implements domains_topicsComponentOutputs {
	constructor(entity: ADKEntity, options: domains_topicsComponentInputs) {
		super(entity, options.name, "Microsoft.EventGrid/domains/topics", "2019-06-01", options);
	}
	public readonly apiVersion: "2019-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.EventGrid/domains/topics";
}
export interface domains_topicsComponentOutputs {
	readonly apiVersion: "2019-06-01";
	readonly id: string;
	readonly type: "Microsoft.EventGrid/domains/topics";
}
export interface domains_topicsComponentInputs {
	readonly name: string;
	readonly properties?: DomainTopicProperties;
}
export class eventSubscriptions
	extends ArmResource<eventSubscriptionsComponentInputs>
	implements eventSubscriptionsComponentOutputs
{
	constructor(entity: ADKEntity, options: eventSubscriptionsComponentInputs) {
		super(entity, options.name, "Microsoft.EventGrid/eventSubscriptions", "2019-06-01", options);
	}
	public readonly apiVersion: "2019-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.EventGrid/eventSubscriptions";
}
export interface eventSubscriptionsComponentOutputs {
	readonly apiVersion: "2019-06-01";
	readonly id: string;
	readonly type: "Microsoft.EventGrid/eventSubscriptions";
}
export interface eventSubscriptionsComponentInputs {
	readonly name: string;
	readonly properties?: EventSubscriptionProperties;
}
export class topics extends ArmResource<topicsComponentInputs> implements topicsComponentOutputs {
	constructor(entity: ADKEntity, options: topicsComponentInputs) {
		super(entity, options.name, "Microsoft.EventGrid/topics", "2019-06-01", options);
	}
	public readonly apiVersion: "2019-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.EventGrid/topics";
}
export interface topicsComponentOutputs {
	readonly apiVersion: "2019-06-01";
	readonly id: string;
	readonly type: "Microsoft.EventGrid/topics";
}
export interface topicsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: TopicProperties;
	readonly tags?: TrackedResourceTags;
}
export class topicTypes extends ArmResource<topicTypesComponentInputs> implements topicTypesComponentOutputs {
	constructor(entity: ADKEntity, options: topicTypesComponentInputs) {
		super(entity, options.name, "Microsoft.EventGrid/topicTypes", "2019-06-01", options);
	}
	public readonly apiVersion: "2019-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.EventGrid/topicTypes";
}
export interface topicTypesComponentOutputs {
	readonly apiVersion: "2019-06-01";
	readonly id: string;
	readonly type: "Microsoft.EventGrid/topicTypes";
}
export interface topicTypesComponentInputs {
	readonly name: string;
	readonly properties?: TopicTypeProperties;
}
export function listKeys(resource: domains): DomainSharedAccessKeys {
	if (resource.apiVersion !== "2019-06-01") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.EventGrid/domains") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AdvancedFilter {
	readonly key?: string;
}
export interface DeadLetterDestination {}
export interface DomainProperties {
	readonly endpoint?: string;
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface DomainSharedAccessKeys {
	readonly key1?: string;
	readonly key2?: string;
}
export interface DomainTopicProperties {
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface EventHubEventSubscriptionDestinationProperties {
	readonly resourceId?: string;
}
export interface EventSubscriptionDestination {}
export interface EventSubscriptionFilter {
	readonly advancedFilters?: AdvancedFilter[];
	readonly includedEventTypes?: string[];
	readonly isSubjectCaseSensitive?: boolean;
	readonly subjectBeginsWith?: string;
	readonly subjectEndsWith?: string;
}
export interface EventSubscriptionProperties {
	readonly deadLetterDestination?: DeadLetterDestination;
	readonly destination?: EventSubscriptionDestination;
	readonly expirationTimeUtc?: string;
	readonly filter?: EventSubscriptionFilter;
	readonly labels?: string[];
	readonly provisioningState?:
		| "AwaitingManualAction"
		| "Canceled"
		| "Creating"
		| "Deleting"
		| "Failed"
		| "Succeeded"
		| "Updating";
	readonly retryPolicy?: RetryPolicy;
	readonly topic?: string;
}
export interface HybridConnectionEventSubscriptionDestinationProperties {
	readonly resourceId?: string;
}
export interface RetryPolicy {
	readonly eventTimeToLiveInMinutes?: number;
	readonly maxDeliveryAttempts?: number;
}
export interface ServiceBusQueueEventSubscriptionDestinationProperties {
	readonly resourceId?: string;
}
export interface StorageBlobDeadLetterDestinationProperties {
	readonly blobContainerName?: string;
	readonly resourceId?: string;
}
export interface StorageQueueEventSubscriptionDestinationProperties {
	readonly queueName?: string;
	readonly resourceId?: string;
}
export interface TopicProperties {
	readonly endpoint?: string;
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface TopicSharedAccessKeys {
	readonly key1?: string;
	readonly key2?: string;
}
export interface TopicTypeProperties {
	readonly description?: string;
	readonly displayName?: string;
	readonly provider?: string;
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly resourceRegionType?: "GlobalResource" | "RegionalResource";
	readonly supportedLocations?: string[];
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export interface WebHookEventSubscriptionDestinationProperties {
	readonly endpointBaseUrl?: string;
	readonly endpointUrl?: string;
}
export default {
	domains: domains,
	"domains/topics": domains_topics,
	eventSubscriptions: eventSubscriptions,
	topics: topics,
	topicTypes: topicTypes,
};

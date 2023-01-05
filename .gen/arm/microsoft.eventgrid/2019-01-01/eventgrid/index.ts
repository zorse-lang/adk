import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class eventSubscriptions
	extends ArmResource<eventSubscriptionsComponentInputs>
	implements eventSubscriptionsComponentOutputs
{
	constructor(entity: ADKEntity, options: eventSubscriptionsComponentInputs) {
		super(entity, options.name, "Microsoft.EventGrid/eventSubscriptions", "2019-01-01", options);
	}
	public readonly apiVersion: "2019-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.EventGrid/eventSubscriptions";
}
export interface eventSubscriptionsComponentOutputs {
	readonly apiVersion: "2019-01-01";
	readonly id: string;
	readonly type: "Microsoft.EventGrid/eventSubscriptions";
}
export interface eventSubscriptionsComponentInputs {
	readonly name: string;
	readonly properties?: EventSubscriptionProperties;
}
export class topics extends ArmResource<topicsComponentInputs> implements topicsComponentOutputs {
	constructor(entity: ADKEntity, options: topicsComponentInputs) {
		super(entity, options.name, "Microsoft.EventGrid/topics", "2019-01-01", options);
	}
	public readonly apiVersion: "2019-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.EventGrid/topics";
}
export interface topicsComponentOutputs {
	readonly apiVersion: "2019-01-01";
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
		super(entity, options.name, "Microsoft.EventGrid/topicTypes", "2019-01-01", options);
	}
	public readonly apiVersion: "2019-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.EventGrid/topicTypes";
}
export interface topicTypesComponentOutputs {
	readonly apiVersion: "2019-01-01";
	readonly id: string;
	readonly type: "Microsoft.EventGrid/topicTypes";
}
export interface topicTypesComponentInputs {
	readonly name: string;
	readonly properties?: TopicTypeProperties;
}
export function listKeys(resource: topics): TopicSharedAccessKeys {
	if (resource.apiVersion !== "2019-01-01") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.EventGrid/topics") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface DeadLetterDestination {}
export interface EventHubEventSubscriptionDestinationProperties {
	readonly resourceId?: string;
}
export interface EventSubscriptionDestination {}
export interface EventSubscriptionFilter {
	readonly includedEventTypes?: string[];
	readonly isSubjectCaseSensitive?: boolean;
	readonly subjectBeginsWith?: string;
	readonly subjectEndsWith?: string;
}
export interface EventSubscriptionProperties {
	readonly deadLetterDestination?: DeadLetterDestination;
	readonly destination?: EventSubscriptionDestination;
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
	eventSubscriptions: eventSubscriptions,
	topics: topics,
	topicTypes: topicTypes,
};

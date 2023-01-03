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
	readonly properties?: EventSubscriptionProperties | undefined;
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
	readonly properties?: TopicProperties | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly properties?: TopicTypeProperties | undefined;
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
	readonly resourceId?: string | undefined;
}
export interface EventSubscriptionDestination {}
export interface EventSubscriptionFilter {
	readonly includedEventTypes?: string[] | undefined;
	readonly isSubjectCaseSensitive?: boolean | undefined;
	readonly subjectBeginsWith?: string | undefined;
	readonly subjectEndsWith?: string | undefined;
}
export interface EventSubscriptionProperties {
	readonly deadLetterDestination?: DeadLetterDestination | undefined;
	readonly destination?: EventSubscriptionDestination | undefined;
	readonly filter?: EventSubscriptionFilter | undefined;
	readonly labels?: string[] | undefined;
	readonly provisioningState?:
		| ("AwaitingManualAction" | "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating")
		| undefined;
	readonly retryPolicy?: RetryPolicy | undefined;
	readonly topic?: string | undefined;
}
export interface HybridConnectionEventSubscriptionDestinationProperties {
	readonly resourceId?: string | undefined;
}
export interface RetryPolicy {
	readonly eventTimeToLiveInMinutes?: number | undefined;
	readonly maxDeliveryAttempts?: number | undefined;
}
export interface StorageBlobDeadLetterDestinationProperties {
	readonly blobContainerName?: string | undefined;
	readonly resourceId?: string | undefined;
}
export interface StorageQueueEventSubscriptionDestinationProperties {
	readonly queueName?: string | undefined;
	readonly resourceId?: string | undefined;
}
export interface TopicProperties {
	readonly endpoint?: string | undefined;
	readonly provisioningState?: ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface TopicSharedAccessKeys {
	readonly key1?: string | undefined;
	readonly key2?: string | undefined;
}
export interface TopicTypeProperties {
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly provider?: string | undefined;
	readonly provisioningState?: ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly resourceRegionType?: ("GlobalResource" | "RegionalResource") | undefined;
	readonly supportedLocations?: string[] | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface WebHookEventSubscriptionDestinationProperties {
	readonly endpointBaseUrl?: string | undefined;
	readonly endpointUrl?: string | undefined;
}
export default {
	eventSubscriptions: eventSubscriptions,
	topics: topics,
	topicTypes: topicTypes,
};

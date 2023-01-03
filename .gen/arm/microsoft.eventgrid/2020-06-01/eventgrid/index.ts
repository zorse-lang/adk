import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class domains extends ArmResource<domainsComponentInputs> implements domainsComponentOutputs {
	constructor(entity: ADKEntity, options: domainsComponentInputs) {
		super(entity, options.name, "Microsoft.EventGrid/domains", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.EventGrid/domains";
}
export interface domainsComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.EventGrid/domains";
}
export interface domainsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: DomainProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class domains_privateEndpointConnections
	extends ArmResource<domains_privateEndpointConnectionsComponentInputs>
	implements domains_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: domains_privateEndpointConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.EventGrid/domains/privateEndpointConnections", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.EventGrid/domains/privateEndpointConnections";
}
export interface domains_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.EventGrid/domains/privateEndpointConnections";
}
export interface domains_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
}
export class domains_topics extends ArmResource<domains_topicsComponentInputs> implements domains_topicsComponentOutputs {
	constructor(entity: ADKEntity, options: domains_topicsComponentInputs) {
		super(entity, options.name, "Microsoft.EventGrid/domains/topics", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.EventGrid/domains/topics";
}
export interface domains_topicsComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.EventGrid/domains/topics";
}
export interface domains_topicsComponentInputs {
	readonly name: string;
	readonly properties?: DomainTopicProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class eventSubscriptions
	extends ArmResource<eventSubscriptionsComponentInputs>
	implements eventSubscriptionsComponentOutputs
{
	constructor(entity: ADKEntity, options: eventSubscriptionsComponentInputs) {
		super(entity, options.name, "Microsoft.EventGrid/eventSubscriptions", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.EventGrid/eventSubscriptions";
}
export interface eventSubscriptionsComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.EventGrid/eventSubscriptions";
}
export interface eventSubscriptionsComponentInputs {
	readonly name: string;
	readonly properties?: EventSubscriptionProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class topics extends ArmResource<topicsComponentInputs> implements topicsComponentOutputs {
	constructor(entity: ADKEntity, options: topicsComponentInputs) {
		super(entity, options.name, "Microsoft.EventGrid/topics", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.EventGrid/topics";
}
export interface topicsComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.EventGrid/topics";
}
export interface topicsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: TopicProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class topics_privateEndpointConnections
	extends ArmResource<topics_privateEndpointConnectionsComponentInputs>
	implements topics_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: topics_privateEndpointConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.EventGrid/topics/privateEndpointConnections", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.EventGrid/topics/privateEndpointConnections";
}
export interface topics_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.EventGrid/topics/privateEndpointConnections";
}
export interface topics_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
}
export class topicTypes extends ArmResource<topicTypesComponentInputs> implements topicTypesComponentOutputs {
	constructor(entity: ADKEntity, options: topicTypesComponentInputs) {
		super(entity, options.name, "Microsoft.EventGrid/topicTypes", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.EventGrid/topicTypes";
}
export interface topicTypesComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.EventGrid/topicTypes";
}
export interface topicTypesComponentInputs {
	readonly name: string;
	readonly properties?: TopicTypeProperties | undefined;
}
export function listKeys(resource: domains): DomainSharedAccessKeys {
	if (resource.apiVersion !== "2020-06-01") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.EventGrid/domains") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AdvancedFilter {
	readonly key?: string | undefined;
}
export interface AzureFunctionEventSubscriptionDestinationProperties {
	readonly maxEventsPerBatch?: number | undefined;
	readonly preferredBatchSizeInKilobytes?: number | undefined;
	readonly resourceId?: string | undefined;
}
export interface ConnectionState {
	readonly actionsRequired?: string | undefined;
	readonly description?: string | undefined;
	readonly status?: ("Approved" | "Disconnected" | "Pending" | "Rejected") | undefined;
}
export interface DeadLetterDestination {}
export interface DomainProperties {
	readonly endpoint?: string | undefined;
	readonly inboundIpRules?: InboundIpRule[] | undefined;
	readonly inputSchema?: ("CloudEventSchemaV1_0" | "CustomEventSchema" | "EventGridSchema") | undefined;
	readonly inputSchemaMapping?: InputSchemaMapping | undefined;
	readonly metricResourceId?: string | undefined;
	readonly privateEndpointConnections?: PrivateEndpointConnection[] | undefined;
	readonly provisioningState?: ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly publicNetworkAccess?: ("Disabled" | "Enabled") | undefined;
}
export interface DomainSharedAccessKeys {
	readonly key1?: string | undefined;
	readonly key2?: string | undefined;
}
export interface DomainTopicProperties {
	readonly provisioningState?: ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface EventHubEventSubscriptionDestinationProperties {
	readonly resourceId?: string | undefined;
}
export interface EventSubscriptionDestination {}
export interface EventSubscriptionFilter {
	readonly advancedFilters?: AdvancedFilter[] | undefined;
	readonly includedEventTypes?: string[] | undefined;
	readonly isSubjectCaseSensitive?: boolean | undefined;
	readonly subjectBeginsWith?: string | undefined;
	readonly subjectEndsWith?: string | undefined;
}
export interface EventSubscriptionProperties {
	readonly deadLetterDestination?: DeadLetterDestination | undefined;
	readonly destination?: EventSubscriptionDestination | undefined;
	readonly eventDeliverySchema?: ("CloudEventSchemaV1_0" | "CustomInputSchema" | "EventGridSchema") | undefined;
	readonly expirationTimeUtc?: string | undefined;
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
export interface InboundIpRule {
	readonly action?: "Allow" | undefined;
	readonly ipMask?: string | undefined;
}
export interface InputSchemaMapping {}
export interface JsonField {
	readonly sourceField?: string | undefined;
}
export interface JsonFieldWithDefault {
	readonly defaultValue?: string | undefined;
	readonly sourceField?: string | undefined;
}
export interface JsonInputSchemaMappingProperties {
	readonly dataVersion?: JsonFieldWithDefault | undefined;
	readonly eventTime?: JsonField | undefined;
	readonly eventType?: JsonFieldWithDefault | undefined;
	readonly id?: JsonField | undefined;
	readonly subject?: JsonFieldWithDefault | undefined;
	readonly topic?: JsonField | undefined;
}
export interface PrivateEndpoint {
	readonly id?: string | undefined;
}
export interface PrivateEndpointConnection {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
	readonly type?: string | undefined;
}
export interface PrivateEndpointConnectionProperties {
	readonly groupIds?: string[] | undefined;
	readonly privateEndpoint?: PrivateEndpoint | undefined;
	readonly privateLinkServiceConnectionState?: ConnectionState | undefined;
	readonly provisioningState?: ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface RetryPolicy {
	readonly eventTimeToLiveInMinutes?: number | undefined;
	readonly maxDeliveryAttempts?: number | undefined;
}
export interface ServiceBusQueueEventSubscriptionDestinationProperties {
	readonly resourceId?: string | undefined;
}
export interface ServiceBusTopicEventSubscriptionDestinationProperties {
	readonly resourceId?: string | undefined;
}
export interface StorageBlobDeadLetterDestinationProperties {
	readonly blobContainerName?: string | undefined;
	readonly resourceId?: string | undefined;
}
export interface StorageQueueEventSubscriptionDestinationProperties {
	readonly queueName?: string | undefined;
	readonly resourceId?: string | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface TopicProperties {
	readonly endpoint?: string | undefined;
	readonly inboundIpRules?: InboundIpRule[] | undefined;
	readonly inputSchema?: ("CloudEventSchemaV1_0" | "CustomEventSchema" | "EventGridSchema") | undefined;
	readonly inputSchemaMapping?: InputSchemaMapping | undefined;
	readonly metricResourceId?: string | undefined;
	readonly privateEndpointConnections?: PrivateEndpointConnection[] | undefined;
	readonly provisioningState?: ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly publicNetworkAccess?: ("Disabled" | "Enabled") | undefined;
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
	readonly sourceResourceFormat?: string | undefined;
	readonly supportedLocations?: string[] | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface WebHookEventSubscriptionDestinationProperties {
	readonly azureActiveDirectoryApplicationIdOrUri?: string | undefined;
	readonly azureActiveDirectoryTenantId?: string | undefined;
	readonly endpointBaseUrl?: string | undefined;
	readonly endpointUrl?: string | undefined;
	readonly maxEventsPerBatch?: number | undefined;
	readonly preferredBatchSizeInKilobytes?: number | undefined;
}
export default {
	domains: domains,
	"domains/privateEndpointConnections": domains_privateEndpointConnections,
	"domains/topics": domains_topics,
	eventSubscriptions: eventSubscriptions,
	topics: topics,
	"topics/privateEndpointConnections": topics_privateEndpointConnections,
	topicTypes: topicTypes,
};

import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class domains extends ArmResource<domainsComponentInputs> implements domainsComponentOutputs {
	constructor(entity: ADKEntity, options: domainsComponentInputs) {
		super(entity, options.name, "Microsoft.EventGrid/domains", "2021-12-01", options);
	}
	public readonly apiVersion: "2021-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.EventGrid/domains";
}
export interface domainsComponentOutputs {
	readonly apiVersion: "2021-12-01";
	readonly id: string;
	readonly type: "Microsoft.EventGrid/domains";
}
export interface domainsComponentInputs {
	readonly identity?: IdentityInfo | undefined;
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
		super(entity, options.name, "Microsoft.EventGrid/domains/privateEndpointConnections", "2021-12-01", options);
	}
	public readonly apiVersion: "2021-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.EventGrid/domains/privateEndpointConnections";
}
export interface domains_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2021-12-01";
	readonly id: string;
	readonly type: "Microsoft.EventGrid/domains/privateEndpointConnections";
}
export interface domains_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
}
export class domains_topics extends ArmResource<domains_topicsComponentInputs> implements domains_topicsComponentOutputs {
	constructor(entity: ADKEntity, options: domains_topicsComponentInputs) {
		super(entity, options.name, "Microsoft.EventGrid/domains/topics", "2021-12-01", options);
	}
	public readonly apiVersion: "2021-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.EventGrid/domains/topics";
}
export interface domains_topicsComponentOutputs {
	readonly apiVersion: "2021-12-01";
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
		super(entity, options.name, "Microsoft.EventGrid/eventSubscriptions", "2021-12-01", options);
	}
	public readonly apiVersion: "2021-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.EventGrid/eventSubscriptions";
}
export interface eventSubscriptionsComponentOutputs {
	readonly apiVersion: "2021-12-01";
	readonly id: string;
	readonly type: "Microsoft.EventGrid/eventSubscriptions";
}
export interface eventSubscriptionsComponentInputs {
	readonly name: string;
	readonly properties?: EventSubscriptionProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class extensionTopics
	extends ArmResource<extensionTopicsComponentInputs>
	implements extensionTopicsComponentOutputs
{
	constructor(entity: ADKEntity, options: extensionTopicsComponentInputs) {
		super(entity, options.name, "Microsoft.EventGrid/extensionTopics", "2021-12-01", options);
	}
	public readonly apiVersion: "2021-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.EventGrid/extensionTopics";
}
export interface extensionTopicsComponentOutputs {
	readonly apiVersion: "2021-12-01";
	readonly id: string;
	readonly type: "Microsoft.EventGrid/extensionTopics";
}
export interface extensionTopicsComponentInputs {
	readonly name: string;
	readonly properties?: ExtensionTopicProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class systemTopics extends ArmResource<systemTopicsComponentInputs> implements systemTopicsComponentOutputs {
	constructor(entity: ADKEntity, options: systemTopicsComponentInputs) {
		super(entity, options.name, "Microsoft.EventGrid/systemTopics", "2021-12-01", options);
	}
	public readonly apiVersion: "2021-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.EventGrid/systemTopics";
}
export interface systemTopicsComponentOutputs {
	readonly apiVersion: "2021-12-01";
	readonly id: string;
	readonly type: "Microsoft.EventGrid/systemTopics";
}
export interface systemTopicsComponentInputs {
	readonly identity?: IdentityInfo | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: SystemTopicProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class systemTopics_eventSubscriptions
	extends ArmResource<systemTopics_eventSubscriptionsComponentInputs>
	implements systemTopics_eventSubscriptionsComponentOutputs
{
	constructor(entity: ADKEntity, options: systemTopics_eventSubscriptionsComponentInputs) {
		super(entity, options.name, "Microsoft.EventGrid/systemTopics/eventSubscriptions", "2021-12-01", options);
	}
	public readonly apiVersion: "2021-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.EventGrid/systemTopics/eventSubscriptions";
}
export interface systemTopics_eventSubscriptionsComponentOutputs {
	readonly apiVersion: "2021-12-01";
	readonly id: string;
	readonly type: "Microsoft.EventGrid/systemTopics/eventSubscriptions";
}
export interface systemTopics_eventSubscriptionsComponentInputs {
	readonly name: string;
	readonly properties?: EventSubscriptionProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class topics extends ArmResource<topicsComponentInputs> implements topicsComponentOutputs {
	constructor(entity: ADKEntity, options: topicsComponentInputs) {
		super(entity, options.name, "Microsoft.EventGrid/topics", "2021-12-01", options);
	}
	public readonly apiVersion: "2021-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.EventGrid/topics";
}
export interface topicsComponentOutputs {
	readonly apiVersion: "2021-12-01";
	readonly id: string;
	readonly type: "Microsoft.EventGrid/topics";
}
export interface topicsComponentInputs {
	readonly identity?: IdentityInfo | undefined;
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
		super(entity, options.name, "Microsoft.EventGrid/topics/privateEndpointConnections", "2021-12-01", options);
	}
	public readonly apiVersion: "2021-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.EventGrid/topics/privateEndpointConnections";
}
export interface topics_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2021-12-01";
	readonly id: string;
	readonly type: "Microsoft.EventGrid/topics/privateEndpointConnections";
}
export interface topics_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
}
export class topicTypes extends ArmResource<topicTypesComponentInputs> implements topicTypesComponentOutputs {
	constructor(entity: ADKEntity, options: topicTypesComponentInputs) {
		super(entity, options.name, "Microsoft.EventGrid/topicTypes", "2021-12-01", options);
	}
	public readonly apiVersion: "2021-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.EventGrid/topicTypes";
}
export interface topicTypesComponentOutputs {
	readonly apiVersion: "2021-12-01";
	readonly id: string;
	readonly type: "Microsoft.EventGrid/topicTypes";
}
export interface topicTypesComponentInputs {
	readonly name: string;
	readonly properties?: TopicTypeProperties | undefined;
}
export function listKeys(resource: domains): DomainSharedAccessKeys {
	if (resource.apiVersion !== "2021-12-01") {
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
	readonly deliveryAttributeMappings?: DeliveryAttributeMapping[] | undefined;
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
export interface DeadLetterWithResourceIdentity {
	readonly deadLetterDestination?: DeadLetterDestination | undefined;
	readonly identity?: EventSubscriptionIdentity | undefined;
}
export interface DeliveryAttributeMapping {
	readonly name?: string | undefined;
}
export interface DeliveryWithResourceIdentity {
	readonly destination?: EventSubscriptionDestination | undefined;
	readonly identity?: EventSubscriptionIdentity | undefined;
}
export interface DomainProperties {
	readonly autoCreateTopicWithFirstSubscription?: boolean | undefined;
	readonly autoDeleteTopicWithLastSubscription?: boolean | undefined;
	readonly disableLocalAuth?: boolean | undefined;
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
export interface DynamicDeliveryAttributeMappingProperties {
	readonly sourceField?: string | undefined;
}
export interface EventHubEventSubscriptionDestinationProperties {
	readonly deliveryAttributeMappings?: DeliveryAttributeMapping[] | undefined;
	readonly resourceId?: string | undefined;
}
export interface EventSubscriptionDestination {}
export interface EventSubscriptionFilter {
	readonly advancedFilters?: AdvancedFilter[] | undefined;
	readonly enableAdvancedFilteringOnArrays?: boolean | undefined;
	readonly includedEventTypes?: string[] | undefined;
	readonly isSubjectCaseSensitive?: boolean | undefined;
	readonly subjectBeginsWith?: string | undefined;
	readonly subjectEndsWith?: string | undefined;
}
export interface EventSubscriptionIdentity {
	readonly type?: ("SystemAssigned" | "UserAssigned") | undefined;
	readonly userAssignedIdentity?: string | undefined;
}
export interface EventSubscriptionProperties {
	readonly deadLetterDestination?: DeadLetterDestination | undefined;
	readonly deadLetterWithResourceIdentity?: DeadLetterWithResourceIdentity | undefined;
	readonly deliveryWithResourceIdentity?: DeliveryWithResourceIdentity | undefined;
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
export interface ExtensionTopicProperties {
	readonly description?: string | undefined;
	readonly systemTopic?: string | undefined;
}
export interface HybridConnectionEventSubscriptionDestinationProperties {
	readonly deliveryAttributeMappings?: DeliveryAttributeMapping[] | undefined;
	readonly resourceId?: string | undefined;
}
export interface IdentityInfo {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: ("None" | "SystemAssigned" | "SystemAssigned, UserAssigned" | "UserAssigned") | undefined;
	readonly userAssignedIdentities?: IdentityInfoUserAssignedIdentities | undefined;
}
export interface IdentityInfoUserAssignedIdentities {
	readonly "[ key: string ]"?: UserIdentityProperties | undefined;
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
	readonly deliveryAttributeMappings?: DeliveryAttributeMapping[] | undefined;
	readonly resourceId?: string | undefined;
}
export interface ServiceBusTopicEventSubscriptionDestinationProperties {
	readonly deliveryAttributeMappings?: DeliveryAttributeMapping[] | undefined;
	readonly resourceId?: string | undefined;
}
export interface StaticDeliveryAttributeMappingProperties {
	readonly isSecret?: boolean | undefined;
	readonly value?: string | undefined;
}
export interface StorageBlobDeadLetterDestinationProperties {
	readonly blobContainerName?: string | undefined;
	readonly resourceId?: string | undefined;
}
export interface StorageQueueEventSubscriptionDestinationProperties {
	readonly queueMessageTimeToLiveInSeconds?: number | undefined;
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
export interface SystemTopicProperties {
	readonly metricResourceId?: string | undefined;
	readonly provisioningState?: ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly source?: string | undefined;
	readonly topicType?: string | undefined;
}
export interface TopicProperties {
	readonly disableLocalAuth?: boolean | undefined;
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
	readonly supportedScopesForSource?: ("AzureSubscription" | "Resource" | "ResourceGroup"[]) | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface UserIdentityProperties {
	readonly clientId?: string | undefined;
	readonly principalId?: string | undefined;
}
export interface WebHookEventSubscriptionDestinationProperties {
	readonly azureActiveDirectoryApplicationIdOrUri?: string | undefined;
	readonly azureActiveDirectoryTenantId?: string | undefined;
	readonly deliveryAttributeMappings?: DeliveryAttributeMapping[] | undefined;
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
	extensionTopics: extensionTopics,
	systemTopics: systemTopics,
	"systemTopics/eventSubscriptions": systemTopics_eventSubscriptions,
	topics: topics,
	"topics/privateEndpointConnections": topics_privateEndpointConnections,
	topicTypes: topicTypes,
};

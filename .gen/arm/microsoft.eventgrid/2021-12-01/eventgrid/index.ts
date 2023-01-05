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
	readonly identity?: IdentityInfo;
	readonly location: string;
	readonly name: string;
	readonly properties?: DomainProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
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
	readonly properties?: PrivateEndpointConnectionProperties;
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
	readonly properties?: DomainTopicProperties;
	readonly systemData?: SystemData;
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
	readonly properties?: EventSubscriptionProperties;
	readonly systemData?: SystemData;
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
	readonly properties?: ExtensionTopicProperties;
	readonly systemData?: SystemData;
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
	readonly identity?: IdentityInfo;
	readonly location: string;
	readonly name: string;
	readonly properties?: SystemTopicProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
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
	readonly properties?: EventSubscriptionProperties;
	readonly systemData?: SystemData;
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
	readonly identity?: IdentityInfo;
	readonly location: string;
	readonly name: string;
	readonly properties?: TopicProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
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
	readonly properties?: PrivateEndpointConnectionProperties;
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
	readonly properties?: TopicTypeProperties;
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
	readonly key?: string;
}
export interface AzureFunctionEventSubscriptionDestinationProperties {
	readonly deliveryAttributeMappings?: DeliveryAttributeMapping[];
	readonly maxEventsPerBatch?: number;
	readonly preferredBatchSizeInKilobytes?: number;
	readonly resourceId?: string;
}
export interface ConnectionState {
	readonly actionsRequired?: string;
	readonly description?: string;
	readonly status?: "Approved" | "Disconnected" | "Pending" | "Rejected";
}
export interface DeadLetterDestination {}
export interface DeadLetterWithResourceIdentity {
	readonly deadLetterDestination?: DeadLetterDestination;
	readonly identity?: EventSubscriptionIdentity;
}
export interface DeliveryAttributeMapping {
	readonly name?: string;
}
export interface DeliveryWithResourceIdentity {
	readonly destination?: EventSubscriptionDestination;
	readonly identity?: EventSubscriptionIdentity;
}
export interface DomainProperties {
	readonly autoCreateTopicWithFirstSubscription?: boolean;
	readonly autoDeleteTopicWithLastSubscription?: boolean;
	readonly disableLocalAuth?: boolean;
	readonly endpoint?: string;
	readonly inboundIpRules?: InboundIpRule[];
	readonly inputSchema?: "CloudEventSchemaV1_0" | "CustomEventSchema" | "EventGridSchema";
	readonly inputSchemaMapping?: InputSchemaMapping;
	readonly metricResourceId?: string;
	readonly privateEndpointConnections?: PrivateEndpointConnection[];
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly publicNetworkAccess?: "Disabled" | "Enabled";
}
export interface DomainSharedAccessKeys {
	readonly key1?: string;
	readonly key2?: string;
}
export interface DomainTopicProperties {
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface DynamicDeliveryAttributeMappingProperties {
	readonly sourceField?: string;
}
export interface EventHubEventSubscriptionDestinationProperties {
	readonly deliveryAttributeMappings?: DeliveryAttributeMapping[];
	readonly resourceId?: string;
}
export interface EventSubscriptionDestination {}
export interface EventSubscriptionFilter {
	readonly advancedFilters?: AdvancedFilter[];
	readonly enableAdvancedFilteringOnArrays?: boolean;
	readonly includedEventTypes?: string[];
	readonly isSubjectCaseSensitive?: boolean;
	readonly subjectBeginsWith?: string;
	readonly subjectEndsWith?: string;
}
export interface EventSubscriptionIdentity {
	readonly type?: "SystemAssigned" | "UserAssigned";
	readonly userAssignedIdentity?: string;
}
export interface EventSubscriptionProperties {
	readonly deadLetterDestination?: DeadLetterDestination;
	readonly deadLetterWithResourceIdentity?: DeadLetterWithResourceIdentity;
	readonly deliveryWithResourceIdentity?: DeliveryWithResourceIdentity;
	readonly destination?: EventSubscriptionDestination;
	readonly eventDeliverySchema?: "CloudEventSchemaV1_0" | "CustomInputSchema" | "EventGridSchema";
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
export interface ExtensionTopicProperties {
	readonly description?: string;
	readonly systemTopic?: string;
}
export interface HybridConnectionEventSubscriptionDestinationProperties {
	readonly deliveryAttributeMappings?: DeliveryAttributeMapping[];
	readonly resourceId?: string;
}
export interface IdentityInfo {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "None" | "SystemAssigned" | "SystemAssigned, UserAssigned" | "UserAssigned";
	readonly userAssignedIdentities?: IdentityInfoUserAssignedIdentities;
}
export interface IdentityInfoUserAssignedIdentities {
	readonly [key: string]: UserIdentityProperties;
}
export interface InboundIpRule {
	readonly action?: "Allow";
	readonly ipMask?: string;
}
export interface InputSchemaMapping {}
export interface JsonField {
	readonly sourceField?: string;
}
export interface JsonFieldWithDefault {
	readonly defaultValue?: string;
	readonly sourceField?: string;
}
export interface JsonInputSchemaMappingProperties {
	readonly dataVersion?: JsonFieldWithDefault;
	readonly eventTime?: JsonField;
	readonly eventType?: JsonFieldWithDefault;
	readonly id?: JsonField;
	readonly subject?: JsonFieldWithDefault;
	readonly topic?: JsonField;
}
export interface PrivateEndpoint {
	readonly id?: string;
}
export interface PrivateEndpointConnection {
	readonly id?: string;
	readonly name?: string;
	readonly properties?: PrivateEndpointConnectionProperties;
	readonly type?: string;
}
export interface PrivateEndpointConnectionProperties {
	readonly groupIds?: string[];
	readonly privateEndpoint?: PrivateEndpoint;
	readonly privateLinkServiceConnectionState?: ConnectionState;
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface RetryPolicy {
	readonly eventTimeToLiveInMinutes?: number;
	readonly maxDeliveryAttempts?: number;
}
export interface ServiceBusQueueEventSubscriptionDestinationProperties {
	readonly deliveryAttributeMappings?: DeliveryAttributeMapping[];
	readonly resourceId?: string;
}
export interface ServiceBusTopicEventSubscriptionDestinationProperties {
	readonly deliveryAttributeMappings?: DeliveryAttributeMapping[];
	readonly resourceId?: string;
}
export interface StaticDeliveryAttributeMappingProperties {
	readonly isSecret?: boolean;
	readonly value?: string;
}
export interface StorageBlobDeadLetterDestinationProperties {
	readonly blobContainerName?: string;
	readonly resourceId?: string;
}
export interface StorageQueueEventSubscriptionDestinationProperties {
	readonly queueMessageTimeToLiveInSeconds?: number;
	readonly queueName?: string;
	readonly resourceId?: string;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface SystemTopicProperties {
	readonly metricResourceId?: string;
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly source?: string;
	readonly topicType?: string;
}
export interface TopicProperties {
	readonly disableLocalAuth?: boolean;
	readonly endpoint?: string;
	readonly inboundIpRules?: InboundIpRule[];
	readonly inputSchema?: "CloudEventSchemaV1_0" | "CustomEventSchema" | "EventGridSchema";
	readonly inputSchemaMapping?: InputSchemaMapping;
	readonly metricResourceId?: string;
	readonly privateEndpointConnections?: PrivateEndpointConnection[];
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly publicNetworkAccess?: "Disabled" | "Enabled";
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
	readonly sourceResourceFormat?: string;
	readonly supportedLocations?: string[];
	readonly supportedScopesForSource?: "AzureSubscription" | "Resource" | "ResourceGroup"[];
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export interface UserIdentityProperties {
	readonly clientId?: string;
	readonly principalId?: string;
}
export interface WebHookEventSubscriptionDestinationProperties {
	readonly azureActiveDirectoryApplicationIdOrUri?: string;
	readonly azureActiveDirectoryTenantId?: string;
	readonly deliveryAttributeMappings?: DeliveryAttributeMapping[];
	readonly endpointBaseUrl?: string;
	readonly endpointUrl?: string;
	readonly maxEventsPerBatch?: number;
	readonly preferredBatchSizeInKilobytes?: number;
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

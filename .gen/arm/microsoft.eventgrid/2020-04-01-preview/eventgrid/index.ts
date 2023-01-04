import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class domains extends ArmResource<domainsComponentInputs> implements domainsComponentOutputs {
	constructor(entity: ADKEntity, options: domainsComponentInputs) {
		super(entity, options.name, "Microsoft.EventGrid/domains", "2020-04-01-preview", options);
	}
	public readonly apiVersion: "2020-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.EventGrid/domains";
}
export interface domainsComponentOutputs {
	readonly apiVersion: "2020-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.EventGrid/domains";
}
export interface domainsComponentInputs {
	readonly identity?: IdentityInfo | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: DomainProperties | undefined;
	readonly sku?: ResourceSku | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class domains_privateEndpointConnections
	extends ArmResource<domains_privateEndpointConnectionsComponentInputs>
	implements domains_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: domains_privateEndpointConnectionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.EventGrid/domains/privateEndpointConnections",
			"2020-04-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2020-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.EventGrid/domains/privateEndpointConnections";
}
export interface domains_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2020-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.EventGrid/domains/privateEndpointConnections";
}
export interface domains_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
}
export class domains_topics extends ArmResource<domains_topicsComponentInputs> implements domains_topicsComponentOutputs {
	constructor(entity: ADKEntity, options: domains_topicsComponentInputs) {
		super(entity, options.name, "Microsoft.EventGrid/domains/topics", "2020-04-01-preview", options);
	}
	public readonly apiVersion: "2020-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.EventGrid/domains/topics";
}
export interface domains_topicsComponentOutputs {
	readonly apiVersion: "2020-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.EventGrid/domains/topics";
}
export interface domains_topicsComponentInputs {
	readonly name: string;
	readonly properties?: DomainTopicProperties | undefined;
}
export class eventSubscriptions
	extends ArmResource<eventSubscriptionsComponentInputs>
	implements eventSubscriptionsComponentOutputs
{
	constructor(entity: ADKEntity, options: eventSubscriptionsComponentInputs) {
		super(entity, options.name, "Microsoft.EventGrid/eventSubscriptions", "2020-04-01-preview", options);
	}
	public readonly apiVersion: "2020-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.EventGrid/eventSubscriptions";
}
export interface eventSubscriptionsComponentOutputs {
	readonly apiVersion: "2020-04-01-preview";
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
		super(entity, options.name, "Microsoft.EventGrid/extensionTopics", "2020-04-01-preview", options);
	}
	public readonly apiVersion: "2020-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.EventGrid/extensionTopics";
}
export interface extensionTopicsComponentOutputs {
	readonly apiVersion: "2020-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.EventGrid/extensionTopics";
}
export interface extensionTopicsComponentInputs {
	readonly name: string;
	readonly properties?: ExtensionTopicProperties | undefined;
}
export class partnerNamespaces
	extends ArmResource<partnerNamespacesComponentInputs>
	implements partnerNamespacesComponentOutputs
{
	constructor(entity: ADKEntity, options: partnerNamespacesComponentInputs) {
		super(entity, options.name, "Microsoft.EventGrid/partnerNamespaces", "2020-04-01-preview", options);
	}
	public readonly apiVersion: "2020-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.EventGrid/partnerNamespaces";
}
export interface partnerNamespacesComponentOutputs {
	readonly apiVersion: "2020-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.EventGrid/partnerNamespaces";
}
export interface partnerNamespacesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: PartnerNamespaceProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class partnerNamespaces_eventChannels
	extends ArmResource<partnerNamespaces_eventChannelsComponentInputs>
	implements partnerNamespaces_eventChannelsComponentOutputs
{
	constructor(entity: ADKEntity, options: partnerNamespaces_eventChannelsComponentInputs) {
		super(entity, options.name, "Microsoft.EventGrid/partnerNamespaces/eventChannels", "2020-04-01-preview", options);
	}
	public readonly apiVersion: "2020-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.EventGrid/partnerNamespaces/eventChannels";
}
export interface partnerNamespaces_eventChannelsComponentOutputs {
	readonly apiVersion: "2020-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.EventGrid/partnerNamespaces/eventChannels";
}
export interface partnerNamespaces_eventChannelsComponentInputs {
	readonly name: string;
	readonly properties?: EventChannelProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class partnerRegistrations
	extends ArmResource<partnerRegistrationsComponentInputs>
	implements partnerRegistrationsComponentOutputs
{
	constructor(entity: ADKEntity, options: partnerRegistrationsComponentInputs) {
		super(entity, options.name, "Microsoft.EventGrid/partnerRegistrations", "2020-04-01-preview", options);
	}
	public readonly apiVersion: "2020-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.EventGrid/partnerRegistrations";
}
export interface partnerRegistrationsComponentOutputs {
	readonly apiVersion: "2020-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.EventGrid/partnerRegistrations";
}
export interface partnerRegistrationsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: PartnerRegistrationProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class partnerTopics extends ArmResource<partnerTopicsComponentInputs> implements partnerTopicsComponentOutputs {
	constructor(entity: ADKEntity, options: partnerTopicsComponentInputs) {
		super(entity, options.name, "Microsoft.EventGrid/partnerTopics", "2020-04-01-preview", options);
	}
	public readonly apiVersion: "2020-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.EventGrid/partnerTopics";
}
export interface partnerTopicsComponentOutputs {
	readonly apiVersion: "2020-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.EventGrid/partnerTopics";
}
export interface partnerTopicsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: PartnerTopicProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class partnerTopics_eventSubscriptions
	extends ArmResource<partnerTopics_eventSubscriptionsComponentInputs>
	implements partnerTopics_eventSubscriptionsComponentOutputs
{
	constructor(entity: ADKEntity, options: partnerTopics_eventSubscriptionsComponentInputs) {
		super(entity, options.name, "Microsoft.EventGrid/partnerTopics/eventSubscriptions", "2020-04-01-preview", options);
	}
	public readonly apiVersion: "2020-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.EventGrid/partnerTopics/eventSubscriptions";
}
export interface partnerTopics_eventSubscriptionsComponentOutputs {
	readonly apiVersion: "2020-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.EventGrid/partnerTopics/eventSubscriptions";
}
export interface partnerTopics_eventSubscriptionsComponentInputs {
	readonly name: string;
	readonly properties?: EventSubscriptionProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class systemTopics extends ArmResource<systemTopicsComponentInputs> implements systemTopicsComponentOutputs {
	constructor(entity: ADKEntity, options: systemTopicsComponentInputs) {
		super(entity, options.name, "Microsoft.EventGrid/systemTopics", "2020-04-01-preview", options);
	}
	public readonly apiVersion: "2020-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.EventGrid/systemTopics";
}
export interface systemTopicsComponentOutputs {
	readonly apiVersion: "2020-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.EventGrid/systemTopics";
}
export interface systemTopicsComponentInputs {
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
		super(entity, options.name, "Microsoft.EventGrid/systemTopics/eventSubscriptions", "2020-04-01-preview", options);
	}
	public readonly apiVersion: "2020-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.EventGrid/systemTopics/eventSubscriptions";
}
export interface systemTopics_eventSubscriptionsComponentOutputs {
	readonly apiVersion: "2020-04-01-preview";
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
		super(entity, options.name, "Microsoft.EventGrid/topics", "2020-04-01-preview", options);
	}
	public readonly apiVersion: "2020-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.EventGrid/topics";
}
export interface topicsComponentOutputs {
	readonly apiVersion: "2020-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.EventGrid/topics";
}
export interface topicsComponentInputs {
	readonly identity?: IdentityInfo | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: TopicProperties | undefined;
	readonly sku?: ResourceSku | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class topics_privateEndpointConnections
	extends ArmResource<topics_privateEndpointConnectionsComponentInputs>
	implements topics_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: topics_privateEndpointConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.EventGrid/topics/privateEndpointConnections", "2020-04-01-preview", options);
	}
	public readonly apiVersion: "2020-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.EventGrid/topics/privateEndpointConnections";
}
export interface topics_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2020-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.EventGrid/topics/privateEndpointConnections";
}
export interface topics_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
}
export class topicTypes extends ArmResource<topicTypesComponentInputs> implements topicTypesComponentOutputs {
	constructor(entity: ADKEntity, options: topicTypesComponentInputs) {
		super(entity, options.name, "Microsoft.EventGrid/topicTypes", "2020-04-01-preview", options);
	}
	public readonly apiVersion: "2020-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.EventGrid/topicTypes";
}
export interface topicTypesComponentOutputs {
	readonly apiVersion: "2020-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.EventGrid/topicTypes";
}
export interface topicTypesComponentInputs {
	readonly name: string;
	readonly properties?: TopicTypeProperties | undefined;
}
export function listKeys(resource: domains): DomainSharedAccessKeys {
	if (resource.apiVersion !== "2020-04-01-preview") {
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
export interface DeadLetterWithResourceIdentity {
	readonly deadLetterDestination?: DeadLetterDestination | undefined;
	readonly identity?: EventSubscriptionIdentity | undefined;
}
export interface DeliveryWithResourceIdentity {
	readonly destination?: EventSubscriptionDestination | undefined;
	readonly identity?: EventSubscriptionIdentity | undefined;
}
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
export interface EventChannelDestination {
	readonly azureSubscriptionId?: string | undefined;
	readonly partnerTopicName?: string | undefined;
	readonly resourceGroup?: string | undefined;
}
export interface EventChannelFilter {
	readonly advancedFilters?: AdvancedFilter[] | undefined;
}
export interface EventChannelProperties {
	readonly destination?: EventChannelDestination | undefined;
	readonly expirationTimeIfNotActivatedUtc?: string | undefined;
	readonly filter?: EventChannelFilter | undefined;
	readonly partnerTopicFriendlyDescription?: string | undefined;
	readonly partnerTopicReadinessState?:
		| ("ActivatedByUser" | "DeactivatedByUser" | "DeletedByUser" | "NotActivatedByUserYet")
		| undefined;
	readonly provisioningState?: ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly source?: EventChannelSource | undefined;
}
export interface EventChannelSource {
	readonly source?: string | undefined;
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
export interface PartnerNamespaceProperties {
	readonly endpoint?: string | undefined;
	readonly partnerRegistrationFullyQualifiedId?: string | undefined;
	readonly provisioningState?: ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface PartnerNamespaceSharedAccessKeys {
	readonly key1?: string | undefined;
	readonly key2?: string | undefined;
}
export interface PartnerRegistrationProperties {
	readonly authorizedAzureSubscriptionIds?: string[] | undefined;
	readonly customerServiceUri?: string | undefined;
	readonly logoUri?: string | undefined;
	readonly longDescription?: string | undefined;
	readonly partnerCustomerServiceExtension?: string | undefined;
	readonly partnerCustomerServiceNumber?: string | undefined;
	readonly partnerName?: string | undefined;
	readonly partnerResourceTypeDescription?: string | undefined;
	readonly partnerResourceTypeDisplayName?: string | undefined;
	readonly partnerResourceTypeName?: string | undefined;
	readonly provisioningState?: ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly setupUri?: string | undefined;
	readonly visibilityState?: ("GenerallyAvailable" | "Hidden" | "PublicPreview") | undefined;
}
export interface PartnerTopicProperties {
	readonly activationState?: ("Activated" | "Deactivated" | "NeverActivated") | undefined;
	readonly expirationTimeIfNotActivatedUtc?: string | undefined;
	readonly partnerTopicFriendlyDescription?: string | undefined;
	readonly provisioningState?: ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly source?: string | undefined;
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
export interface ResourceSku {
	readonly name?: ("Basic" | "Premium") | undefined;
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
export interface SystemTopicProperties {
	readonly metricResourceId?: string | undefined;
	readonly provisioningState?: ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly source?: string | undefined;
	readonly topicType?: string | undefined;
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
export interface UserIdentityProperties {
	readonly clientId?: string | undefined;
	readonly principalId?: string | undefined;
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
	extensionTopics: extensionTopics,
	partnerNamespaces: partnerNamespaces,
	"partnerNamespaces/eventChannels": partnerNamespaces_eventChannels,
	partnerRegistrations: partnerRegistrations,
	partnerTopics: partnerTopics,
	"partnerTopics/eventSubscriptions": partnerTopics_eventSubscriptions,
	systemTopics: systemTopics,
	"systemTopics/eventSubscriptions": systemTopics_eventSubscriptions,
	topics: topics,
	"topics/privateEndpointConnections": topics_privateEndpointConnections,
	topicTypes: topicTypes,
};
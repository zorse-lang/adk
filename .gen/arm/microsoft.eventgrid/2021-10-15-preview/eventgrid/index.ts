import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class domains extends ArmResource<domainsComponentInputs> implements domainsComponentOutputs {
	constructor(entity: ADKEntity, options: domainsComponentInputs) {
		super(entity, options.name, "Microsoft.EventGrid/domains", "2021-10-15-preview", options);
	}
	public readonly apiVersion: "2021-10-15-preview";
	public readonly id: string;
	public readonly type: "Microsoft.EventGrid/domains";
}
export interface domainsComponentOutputs {
	readonly apiVersion: "2021-10-15-preview";
	readonly id: string;
	readonly type: "Microsoft.EventGrid/domains";
}
export interface domainsComponentInputs {
	readonly identity?: IdentityInfo;
	readonly location: string;
	readonly name: string;
	readonly properties?: DomainProperties;
	readonly sku?: ResourceSku;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class domains_eventSubscriptions
	extends ArmResource<domains_eventSubscriptionsComponentInputs>
	implements domains_eventSubscriptionsComponentOutputs
{
	constructor(entity: ADKEntity, options: domains_eventSubscriptionsComponentInputs) {
		super(entity, options.name, "Microsoft.EventGrid/domains/eventSubscriptions", "2021-10-15-preview", options);
	}
	public readonly apiVersion: "2021-10-15-preview";
	public readonly id: string;
	public readonly type: "Microsoft.EventGrid/domains/eventSubscriptions";
}
export interface domains_eventSubscriptionsComponentOutputs {
	readonly apiVersion: "2021-10-15-preview";
	readonly id: string;
	readonly type: "Microsoft.EventGrid/domains/eventSubscriptions";
}
export interface domains_eventSubscriptionsComponentInputs {
	readonly name: string;
	readonly properties?: EventSubscriptionProperties;
	readonly systemData?: SystemData;
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
			"2021-10-15-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-10-15-preview";
	public readonly id: string;
	public readonly type: "Microsoft.EventGrid/domains/privateEndpointConnections";
}
export interface domains_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2021-10-15-preview";
	readonly id: string;
	readonly type: "Microsoft.EventGrid/domains/privateEndpointConnections";
}
export interface domains_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties;
}
export class domains_topics extends ArmResource<domains_topicsComponentInputs> implements domains_topicsComponentOutputs {
	constructor(entity: ADKEntity, options: domains_topicsComponentInputs) {
		super(entity, options.name, "Microsoft.EventGrid/domains/topics", "2021-10-15-preview", options);
	}
	public readonly apiVersion: "2021-10-15-preview";
	public readonly id: string;
	public readonly type: "Microsoft.EventGrid/domains/topics";
}
export interface domains_topicsComponentOutputs {
	readonly apiVersion: "2021-10-15-preview";
	readonly id: string;
	readonly type: "Microsoft.EventGrid/domains/topics";
}
export interface domains_topicsComponentInputs {
	readonly name: string;
	readonly properties?: DomainTopicProperties;
	readonly systemData?: SystemData;
}
export class domains_topics_eventSubscriptions
	extends ArmResource<domains_topics_eventSubscriptionsComponentInputs>
	implements domains_topics_eventSubscriptionsComponentOutputs
{
	constructor(entity: ADKEntity, options: domains_topics_eventSubscriptionsComponentInputs) {
		super(entity, options.name, "Microsoft.EventGrid/domains/topics/eventSubscriptions", "2021-10-15-preview", options);
	}
	public readonly apiVersion: "2021-10-15-preview";
	public readonly id: string;
	public readonly type: "Microsoft.EventGrid/domains/topics/eventSubscriptions";
}
export interface domains_topics_eventSubscriptionsComponentOutputs {
	readonly apiVersion: "2021-10-15-preview";
	readonly id: string;
	readonly type: "Microsoft.EventGrid/domains/topics/eventSubscriptions";
}
export interface domains_topics_eventSubscriptionsComponentInputs {
	readonly name: string;
	readonly properties?: EventSubscriptionProperties;
	readonly systemData?: SystemData;
}
export class eventSubscriptions
	extends ArmResource<eventSubscriptionsComponentInputs>
	implements eventSubscriptionsComponentOutputs
{
	constructor(entity: ADKEntity, options: eventSubscriptionsComponentInputs) {
		super(entity, options.name, "Microsoft.EventGrid/eventSubscriptions", "2021-10-15-preview", options);
	}
	public readonly apiVersion: "2021-10-15-preview";
	public readonly id: string;
	public readonly type: "Microsoft.EventGrid/eventSubscriptions";
}
export interface eventSubscriptionsComponentOutputs {
	readonly apiVersion: "2021-10-15-preview";
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
		super(entity, options.name, "Microsoft.EventGrid/extensionTopics", "2021-10-15-preview", options);
	}
	public readonly apiVersion: "2021-10-15-preview";
	public readonly id: string;
	public readonly type: "Microsoft.EventGrid/extensionTopics";
}
export interface extensionTopicsComponentOutputs {
	readonly apiVersion: "2021-10-15-preview";
	readonly id: string;
	readonly type: "Microsoft.EventGrid/extensionTopics";
}
export interface extensionTopicsComponentInputs {
	readonly name: string;
	readonly properties?: ExtensionTopicProperties;
	readonly systemData?: SystemData;
}
export class partnerConfigurations
	extends ArmResource<partnerConfigurationsComponentInputs>
	implements partnerConfigurationsComponentOutputs
{
	constructor(entity: ADKEntity, options: partnerConfigurationsComponentInputs) {
		super(entity, options.name, "Microsoft.EventGrid/partnerConfigurations", "2021-10-15-preview", options);
	}
	public readonly apiVersion: "2021-10-15-preview";
	public readonly id: string;
	public readonly type: "Microsoft.EventGrid/partnerConfigurations";
}
export interface partnerConfigurationsComponentOutputs {
	readonly apiVersion: "2021-10-15-preview";
	readonly id: string;
	readonly type: "Microsoft.EventGrid/partnerConfigurations";
}
export interface partnerConfigurationsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: PartnerConfigurationProperties;
	readonly systemData?: SystemData;
	readonly tags?: PartnerConfigurationTags;
}
export class partnerDestinations
	extends ArmResource<partnerDestinationsComponentInputs>
	implements partnerDestinationsComponentOutputs
{
	constructor(entity: ADKEntity, options: partnerDestinationsComponentInputs) {
		super(entity, options.name, "Microsoft.EventGrid/partnerDestinations", "2021-10-15-preview", options);
	}
	public readonly apiVersion: "2021-10-15-preview";
	public readonly id: string;
	public readonly type: "Microsoft.EventGrid/partnerDestinations";
}
export interface partnerDestinationsComponentOutputs {
	readonly apiVersion: "2021-10-15-preview";
	readonly id: string;
	readonly type: "Microsoft.EventGrid/partnerDestinations";
}
export interface partnerDestinationsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: PartnerDestinationProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class partnerNamespaces
	extends ArmResource<partnerNamespacesComponentInputs>
	implements partnerNamespacesComponentOutputs
{
	constructor(entity: ADKEntity, options: partnerNamespacesComponentInputs) {
		super(entity, options.name, "Microsoft.EventGrid/partnerNamespaces", "2021-10-15-preview", options);
	}
	public readonly apiVersion: "2021-10-15-preview";
	public readonly id: string;
	public readonly type: "Microsoft.EventGrid/partnerNamespaces";
}
export interface partnerNamespacesComponentOutputs {
	readonly apiVersion: "2021-10-15-preview";
	readonly id: string;
	readonly type: "Microsoft.EventGrid/partnerNamespaces";
}
export interface partnerNamespacesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: PartnerNamespaceProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class partnerNamespaces_channels
	extends ArmResource<partnerNamespaces_channelsComponentInputs>
	implements partnerNamespaces_channelsComponentOutputs
{
	constructor(entity: ADKEntity, options: partnerNamespaces_channelsComponentInputs) {
		super(entity, options.name, "Microsoft.EventGrid/partnerNamespaces/channels", "2021-10-15-preview", options);
	}
	public readonly apiVersion: "2021-10-15-preview";
	public readonly id: string;
	public readonly type: "Microsoft.EventGrid/partnerNamespaces/channels";
}
export interface partnerNamespaces_channelsComponentOutputs {
	readonly apiVersion: "2021-10-15-preview";
	readonly id: string;
	readonly type: "Microsoft.EventGrid/partnerNamespaces/channels";
}
export interface partnerNamespaces_channelsComponentInputs {
	readonly name: string;
	readonly properties?: ChannelProperties;
	readonly systemData?: SystemData;
}
export class partnerNamespaces_eventChannels
	extends ArmResource<partnerNamespaces_eventChannelsComponentInputs>
	implements partnerNamespaces_eventChannelsComponentOutputs
{
	constructor(entity: ADKEntity, options: partnerNamespaces_eventChannelsComponentInputs) {
		super(entity, options.name, "Microsoft.EventGrid/partnerNamespaces/eventChannels", "2021-10-15-preview", options);
	}
	public readonly apiVersion: "2021-10-15-preview";
	public readonly id: string;
	public readonly type: "Microsoft.EventGrid/partnerNamespaces/eventChannels";
}
export interface partnerNamespaces_eventChannelsComponentOutputs {
	readonly apiVersion: "2021-10-15-preview";
	readonly id: string;
	readonly type: "Microsoft.EventGrid/partnerNamespaces/eventChannels";
}
export interface partnerNamespaces_eventChannelsComponentInputs {
	readonly name: string;
	readonly properties?: EventChannelProperties;
	readonly systemData?: SystemData;
}
export class partnerNamespaces_privateEndpointConnections
	extends ArmResource<partnerNamespaces_privateEndpointConnectionsComponentInputs>
	implements partnerNamespaces_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: partnerNamespaces_privateEndpointConnectionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.EventGrid/partnerNamespaces/privateEndpointConnections",
			"2021-10-15-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-10-15-preview";
	public readonly id: string;
	public readonly type: "Microsoft.EventGrid/partnerNamespaces/privateEndpointConnections";
}
export interface partnerNamespaces_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2021-10-15-preview";
	readonly id: string;
	readonly type: "Microsoft.EventGrid/partnerNamespaces/privateEndpointConnections";
}
export interface partnerNamespaces_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties;
}
export class partnerRegistrations
	extends ArmResource<partnerRegistrationsComponentInputs>
	implements partnerRegistrationsComponentOutputs
{
	constructor(entity: ADKEntity, options: partnerRegistrationsComponentInputs) {
		super(entity, options.name, "Microsoft.EventGrid/partnerRegistrations", "2021-10-15-preview", options);
	}
	public readonly apiVersion: "2021-10-15-preview";
	public readonly id: string;
	public readonly type: "Microsoft.EventGrid/partnerRegistrations";
}
export interface partnerRegistrationsComponentOutputs {
	readonly apiVersion: "2021-10-15-preview";
	readonly id: string;
	readonly type: "Microsoft.EventGrid/partnerRegistrations";
}
export interface partnerRegistrationsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: PartnerRegistrationProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class partnerTopics extends ArmResource<partnerTopicsComponentInputs> implements partnerTopicsComponentOutputs {
	constructor(entity: ADKEntity, options: partnerTopicsComponentInputs) {
		super(entity, options.name, "Microsoft.EventGrid/partnerTopics", "2021-10-15-preview", options);
	}
	public readonly apiVersion: "2021-10-15-preview";
	public readonly id: string;
	public readonly type: "Microsoft.EventGrid/partnerTopics";
}
export interface partnerTopicsComponentOutputs {
	readonly apiVersion: "2021-10-15-preview";
	readonly id: string;
	readonly type: "Microsoft.EventGrid/partnerTopics";
}
export interface partnerTopicsComponentInputs {
	readonly identity?: IdentityInfo;
	readonly location: string;
	readonly name: string;
	readonly properties?: PartnerTopicProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class partnerTopics_eventSubscriptions
	extends ArmResource<partnerTopics_eventSubscriptionsComponentInputs>
	implements partnerTopics_eventSubscriptionsComponentOutputs
{
	constructor(entity: ADKEntity, options: partnerTopics_eventSubscriptionsComponentInputs) {
		super(entity, options.name, "Microsoft.EventGrid/partnerTopics/eventSubscriptions", "2021-10-15-preview", options);
	}
	public readonly apiVersion: "2021-10-15-preview";
	public readonly id: string;
	public readonly type: "Microsoft.EventGrid/partnerTopics/eventSubscriptions";
}
export interface partnerTopics_eventSubscriptionsComponentOutputs {
	readonly apiVersion: "2021-10-15-preview";
	readonly id: string;
	readonly type: "Microsoft.EventGrid/partnerTopics/eventSubscriptions";
}
export interface partnerTopics_eventSubscriptionsComponentInputs {
	readonly name: string;
	readonly properties?: EventSubscriptionProperties;
	readonly systemData?: SystemData;
}
export class systemTopics extends ArmResource<systemTopicsComponentInputs> implements systemTopicsComponentOutputs {
	constructor(entity: ADKEntity, options: systemTopicsComponentInputs) {
		super(entity, options.name, "Microsoft.EventGrid/systemTopics", "2021-10-15-preview", options);
	}
	public readonly apiVersion: "2021-10-15-preview";
	public readonly id: string;
	public readonly type: "Microsoft.EventGrid/systemTopics";
}
export interface systemTopicsComponentOutputs {
	readonly apiVersion: "2021-10-15-preview";
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
		super(entity, options.name, "Microsoft.EventGrid/systemTopics/eventSubscriptions", "2021-10-15-preview", options);
	}
	public readonly apiVersion: "2021-10-15-preview";
	public readonly id: string;
	public readonly type: "Microsoft.EventGrid/systemTopics/eventSubscriptions";
}
export interface systemTopics_eventSubscriptionsComponentOutputs {
	readonly apiVersion: "2021-10-15-preview";
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
		super(entity, options.name, "Microsoft.EventGrid/topics", "2021-10-15-preview", options);
	}
	public readonly apiVersion: "2021-10-15-preview";
	public readonly id: string;
	public readonly type: "Microsoft.EventGrid/topics";
}
export interface topicsComponentOutputs {
	readonly apiVersion: "2021-10-15-preview";
	readonly id: string;
	readonly type: "Microsoft.EventGrid/topics";
}
export interface topicsComponentInputs {
	readonly extendedLocation?: ExtendedLocation;
	readonly identity?: IdentityInfo;
	readonly kind?: "Azure" | "AzureArc";
	readonly location: string;
	readonly name: string;
	readonly properties?: TopicProperties;
	readonly sku?: ResourceSku;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class topics_eventSubscriptions
	extends ArmResource<topics_eventSubscriptionsComponentInputs>
	implements topics_eventSubscriptionsComponentOutputs
{
	constructor(entity: ADKEntity, options: topics_eventSubscriptionsComponentInputs) {
		super(entity, options.name, "Microsoft.EventGrid/topics/eventSubscriptions", "2021-10-15-preview", options);
	}
	public readonly apiVersion: "2021-10-15-preview";
	public readonly id: string;
	public readonly type: "Microsoft.EventGrid/topics/eventSubscriptions";
}
export interface topics_eventSubscriptionsComponentOutputs {
	readonly apiVersion: "2021-10-15-preview";
	readonly id: string;
	readonly type: "Microsoft.EventGrid/topics/eventSubscriptions";
}
export interface topics_eventSubscriptionsComponentInputs {
	readonly name: string;
	readonly properties?: EventSubscriptionProperties;
	readonly systemData?: SystemData;
}
export class topics_privateEndpointConnections
	extends ArmResource<topics_privateEndpointConnectionsComponentInputs>
	implements topics_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: topics_privateEndpointConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.EventGrid/topics/privateEndpointConnections", "2021-10-15-preview", options);
	}
	public readonly apiVersion: "2021-10-15-preview";
	public readonly id: string;
	public readonly type: "Microsoft.EventGrid/topics/privateEndpointConnections";
}
export interface topics_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2021-10-15-preview";
	readonly id: string;
	readonly type: "Microsoft.EventGrid/topics/privateEndpointConnections";
}
export interface topics_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties;
}
export class topicTypes extends ArmResource<topicTypesComponentInputs> implements topicTypesComponentOutputs {
	constructor(entity: ADKEntity, options: topicTypesComponentInputs) {
		super(entity, options.name, "Microsoft.EventGrid/topicTypes", "2021-10-15-preview", options);
	}
	public readonly apiVersion: "2021-10-15-preview";
	public readonly id: string;
	public readonly type: "Microsoft.EventGrid/topicTypes";
}
export interface topicTypesComponentOutputs {
	readonly apiVersion: "2021-10-15-preview";
	readonly id: string;
	readonly type: "Microsoft.EventGrid/topicTypes";
}
export interface topicTypesComponentInputs {
	readonly name: string;
	readonly properties?: TopicTypeProperties;
}
export class verifiedPartners
	extends ArmResource<verifiedPartnersComponentInputs>
	implements verifiedPartnersComponentOutputs
{
	constructor(entity: ADKEntity, options: verifiedPartnersComponentInputs) {
		super(entity, options.name, "Microsoft.EventGrid/verifiedPartners", "2021-10-15-preview", options);
	}
	public readonly apiVersion: "2021-10-15-preview";
	public readonly id: string;
	public readonly type: "Microsoft.EventGrid/verifiedPartners";
}
export interface verifiedPartnersComponentOutputs {
	readonly apiVersion: "2021-10-15-preview";
	readonly id: string;
	readonly type: "Microsoft.EventGrid/verifiedPartners";
}
export interface verifiedPartnersComponentInputs {
	readonly name: string;
	readonly properties?: VerifiedPartnerProperties;
	readonly systemData?: SystemData;
}
export function listKeys(resource: domains): DomainSharedAccessKeys {
	if (resource.apiVersion !== "2021-10-15-preview") {
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
export interface AzureADPartnerClientAuthenticationProperties {
	readonly azureActiveDirectoryApplicationIdOrUri?: string;
	readonly azureActiveDirectoryTenantId?: string;
}
export interface AzureFunctionEventSubscriptionDestinationProperties {
	readonly deliveryAttributeMappings?: DeliveryAttributeMapping[];
	readonly maxEventsPerBatch?: number;
	readonly preferredBatchSizeInKilobytes?: number;
	readonly resourceId?: string;
}
export interface ChannelProperties {
	readonly channelType?: "PartnerDestination" | "PartnerTopic";
	readonly expirationTimeIfNotActivatedUtc?: string;
	readonly messageForActivation?: string;
	readonly partnerDestinationInfo?: PartnerDestinationInfo;
	readonly partnerTopicInfo?: PartnerTopicInfo;
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly readinessState?: "Activated" | "NeverActivated";
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
	readonly dataResidencyBoundary?: "WithinGeopair" | "WithinRegion";
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
export interface EventChannelDestination {
	readonly azureSubscriptionId?: string;
	readonly partnerTopicName?: string;
	readonly resourceGroup?: string;
}
export interface EventChannelFilter {
	readonly advancedFilters?: AdvancedFilter[];
	readonly enableAdvancedFilteringOnArrays?: boolean;
}
export interface EventChannelProperties {
	readonly destination?: EventChannelDestination;
	readonly expirationTimeIfNotActivatedUtc?: string;
	readonly filter?: EventChannelFilter;
	readonly partnerTopicFriendlyDescription?: string;
	readonly partnerTopicReadinessState?:
		| "ActivatedByUser"
		| "DeactivatedByUser"
		| "DeletedByUser"
		| "NotActivatedByUserYet";
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly source?: EventChannelSource;
}
export interface EventChannelSource {
	readonly source?: string;
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
export interface EventTypeInfo {
	readonly inlineEventTypes?: EventTypeInfoInlineEventTypes;
	readonly kind?: "Inline";
}
export interface EventTypeInfoInlineEventTypes {
	readonly [key: string]: InlineEventProperties;
}
export interface ExtendedLocation {
	readonly name?: string;
	readonly type?: string;
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
export interface InlineEventProperties {
	readonly dataSchemaUrl?: string;
	readonly description?: string;
	readonly documentationUrl?: string;
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
export interface Partner {
	readonly authorizationExpirationTimeInUtc?: string;
	readonly partnerName?: string;
	readonly partnerRegistrationImmutableId?: string;
}
export interface PartnerAuthorization {
	readonly authorizedPartnersList?: Partner[];
	readonly defaultMaximumExpirationTimeInDays?: number;
}
export interface PartnerClientAuthentication {}
export interface PartnerConfigurationProperties {
	readonly partnerAuthorization?: PartnerAuthorization;
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface PartnerConfigurationTags {
	readonly [key: string]: string;
}
export interface PartnerDestinationInfo {
	readonly azureSubscriptionId?: string;
	readonly endpointServiceContext?: string;
	readonly name?: string;
	readonly resourceGroupName?: string;
	readonly resourceMoveChangeHistory?: ResourceMoveChangeHistory[];
}
export interface PartnerDestinationProperties {
	readonly activationState?: "Activated" | "NeverActivated";
	readonly endpointBaseUrl?: string;
	readonly endpointServiceContext?: string;
	readonly expirationTimeIfNotActivatedUtc?: string;
	readonly messageForActivation?: string;
	readonly partnerRegistrationImmutableId?: string;
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface PartnerDetails {
	readonly description?: string;
	readonly longDescription?: string;
	readonly setupUri?: string;
}
export interface PartnerEventSubscriptionDestinationProperties {
	readonly resourceId?: string;
}
export interface PartnerNamespaceProperties {
	readonly disableLocalAuth?: boolean;
	readonly endpoint?: string;
	readonly inboundIpRules?: InboundIpRule[];
	readonly partnerRegistrationFullyQualifiedId?: string;
	readonly partnerTopicRoutingMode?: "ChannelNameHeader" | "SourceEventAttribute";
	readonly privateEndpointConnections?: PrivateEndpointConnection[];
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly publicNetworkAccess?: "Disabled" | "Enabled";
}
export interface PartnerNamespaceSharedAccessKeys {
	readonly key1?: string;
	readonly key2?: string;
}
export interface PartnerRegistrationProperties {
	readonly authorizedAzureSubscriptionIds?: string[];
	readonly customerServiceUri?: string;
	readonly logoUri?: string;
	readonly longDescription?: string;
	readonly partnerCustomerServiceExtension?: string;
	readonly partnerCustomerServiceNumber?: string;
	readonly partnerName?: string;
	readonly partnerRegistrationImmutableId?: string;
	readonly partnerResourceTypeDescription?: string;
	readonly partnerResourceTypeDisplayName?: string;
	readonly partnerResourceTypeName?: string;
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly setupUri?: string;
	readonly visibilityState?: "GenerallyAvailable" | "Hidden" | "PublicPreview";
}
export interface PartnerTopicInfo {
	readonly azureSubscriptionId?: string;
	readonly eventTypeInfo?: EventTypeInfo;
	readonly name?: string;
	readonly resourceGroupName?: string;
	readonly source?: string;
}
export interface PartnerTopicProperties {
	readonly activationState?: "Activated" | "Deactivated" | "NeverActivated";
	readonly eventTypeInfo?: EventTypeInfo;
	readonly expirationTimeIfNotActivatedUtc?: string;
	readonly messageForActivation?: string;
	readonly partnerRegistrationImmutableId?: string;
	readonly partnerTopicFriendlyDescription?: string;
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly source?: string;
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
export interface ResourceMoveChangeHistory {
	readonly azureSubscriptionId?: string;
	readonly changedTimeUtc?: string;
	readonly resourceGroupName?: string;
}
export interface ResourceSku {
	readonly name?: "Basic" | "Premium";
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
	readonly dataResidencyBoundary?: "WithinGeopair" | "WithinRegion";
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
	readonly supportedScopesForSource?: "AzureSubscription" | "ManagementGroup" | "Resource" | "ResourceGroup"[];
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export interface UserIdentityProperties {
	readonly clientId?: string;
	readonly principalId?: string;
}
export interface VerifiedPartnerProperties {
	readonly organizationName?: string;
	readonly partnerDestinationDetails?: PartnerDetails;
	readonly partnerDisplayName?: string;
	readonly partnerRegistrationImmutableId?: string;
	readonly partnerTopicDetails?: PartnerDetails;
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
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
export interface WebhookPartnerDestinationProperties {
	readonly clientAuthentication?: PartnerClientAuthentication;
	readonly endpointBaseUrl?: string;
	readonly endpointUrl?: string;
}
export default {
	domains: domains,
	"domains/eventSubscriptions": domains_eventSubscriptions,
	"domains/privateEndpointConnections": domains_privateEndpointConnections,
	"domains/topics": domains_topics,
	"domains/topics/eventSubscriptions": domains_topics_eventSubscriptions,
	eventSubscriptions: eventSubscriptions,
	extensionTopics: extensionTopics,
	partnerConfigurations: partnerConfigurations,
	partnerDestinations: partnerDestinations,
	partnerNamespaces: partnerNamespaces,
	"partnerNamespaces/channels": partnerNamespaces_channels,
	"partnerNamespaces/eventChannels": partnerNamespaces_eventChannels,
	"partnerNamespaces/privateEndpointConnections": partnerNamespaces_privateEndpointConnections,
	partnerRegistrations: partnerRegistrations,
	partnerTopics: partnerTopics,
	"partnerTopics/eventSubscriptions": partnerTopics_eventSubscriptions,
	systemTopics: systemTopics,
	"systemTopics/eventSubscriptions": systemTopics_eventSubscriptions,
	topics: topics,
	"topics/eventSubscriptions": topics_eventSubscriptions,
	"topics/privateEndpointConnections": topics_privateEndpointConnections,
	topicTypes: topicTypes,
	verifiedPartners: verifiedPartners,
};

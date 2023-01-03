import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class IotHubs extends ArmResource<IotHubsComponentInputs> implements IotHubsComponentOutputs {
	constructor(entity: ADKEntity, options: IotHubsComponentInputs) {
		super(entity, options.name, "Microsoft.Devices/IotHubs", "2020-03-01", options);
	}
	public readonly apiVersion: "2020-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.Devices/IotHubs";
}
export interface IotHubsComponentOutputs {
	readonly apiVersion: "2020-03-01";
	readonly id: string;
	readonly type: "Microsoft.Devices/IotHubs";
}
export interface IotHubsComponentInputs {
	readonly etag?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: IotHubProperties | undefined;
	readonly sku: IotHubSkuInfo;
	readonly tags?: ResourceTags | undefined;
}
export class IotHubs_certificates
	extends ArmResource<IotHubs_certificatesComponentInputs>
	implements IotHubs_certificatesComponentOutputs
{
	constructor(entity: ADKEntity, options: IotHubs_certificatesComponentInputs) {
		super(entity, options.name, "Microsoft.Devices/IotHubs/certificates", "2020-03-01", options);
	}
	public readonly apiVersion: "2020-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.Devices/IotHubs/certificates";
}
export interface IotHubs_certificatesComponentOutputs {
	readonly apiVersion: "2020-03-01";
	readonly id: string;
	readonly type: "Microsoft.Devices/IotHubs/certificates";
}
export interface IotHubs_certificatesComponentInputs {
	readonly certificate?: string | undefined;
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: CertificateProperties | undefined;
}
export class IotHubs_eventHubEndpoints_ConsumerGroups
	extends ArmResource<IotHubs_eventHubEndpoints_ConsumerGroupsComponentInputs>
	implements IotHubs_eventHubEndpoints_ConsumerGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: IotHubs_eventHubEndpoints_ConsumerGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.Devices/IotHubs/eventHubEndpoints/ConsumerGroups", "2020-03-01", options);
	}
	public readonly apiVersion: "2020-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.Devices/IotHubs/eventHubEndpoints/ConsumerGroups";
}
export interface IotHubs_eventHubEndpoints_ConsumerGroupsComponentOutputs {
	readonly apiVersion: "2020-03-01";
	readonly id: string;
	readonly type: "Microsoft.Devices/IotHubs/eventHubEndpoints/ConsumerGroups";
}
export interface IotHubs_eventHubEndpoints_ConsumerGroupsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: EventHubConsumerGroupInfoProperties | undefined;
}
export class iotHubs_privateEndpointConnections
	extends ArmResource<iotHubs_privateEndpointConnectionsComponentInputs>
	implements iotHubs_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: iotHubs_privateEndpointConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Devices/iotHubs/privateEndpointConnections", "2020-03-01", options);
	}
	public readonly apiVersion: "2020-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.Devices/iotHubs/privateEndpointConnections";
}
export interface iotHubs_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2020-03-01";
	readonly id: string;
	readonly type: "Microsoft.Devices/iotHubs/privateEndpointConnections";
}
export interface iotHubs_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties: PrivateEndpointConnectionProperties;
}
export function listkeys(resource: IotHubs): SharedAccessSignatureAuthorizationRuleListResult {
	if (resource.apiVersion !== "2020-03-01") {
		throw new Error(`listkeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Devices/IotHubs") {
		throw new Error(`listkeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface CertificateProperties {
	readonly certificate?: string | undefined;
	readonly created?: string | undefined;
	readonly expiry?: string | undefined;
	readonly isVerified?: boolean | undefined;
	readonly subject?: string | undefined;
	readonly thumbprint?: string | undefined;
	readonly updated?: string | undefined;
}
export interface CloudToDeviceProperties {
	readonly defaultTtlAsIso8601?: string | undefined;
	readonly feedback?: FeedbackProperties | undefined;
	readonly maxDeliveryCount?: number | undefined;
}
export interface EnrichmentProperties {
	readonly endpointNames: string[];
	readonly key: string;
	readonly value: string;
}
export interface EventHubConsumerGroupInfoProperties {
	readonly "[ key: string ]"?: string | undefined;
}
export interface EventHubProperties {
	readonly endpoint?: string | undefined;
	readonly partitionCount?: number | undefined;
	readonly partitionIds?: string[] | undefined;
	readonly path?: string | undefined;
	readonly retentionTimeInDays?: number | undefined;
}
export interface FallbackRouteProperties {
	readonly condition?: string | undefined;
	readonly endpointNames: string[];
	readonly isEnabled: boolean;
	readonly name?: string | undefined;
	readonly source:
		| "DeviceJobLifecycleEvents"
		| "DeviceLifecycleEvents"
		| "DeviceMessages"
		| "Invalid"
		| "TwinChangeEvents";
}
export interface FeedbackProperties {
	readonly lockDurationAsIso8601?: string | undefined;
	readonly maxDeliveryCount?: number | undefined;
	readonly ttlAsIso8601?: string | undefined;
}
export interface IotHubLocationDescription {
	readonly location?: string | undefined;
	readonly role?: ("primary" | "secondary") | undefined;
}
export interface IotHubProperties {
	readonly authorizationPolicies?: SharedAccessSignatureAuthorizationRule[] | undefined;
	readonly cloudToDevice?: CloudToDeviceProperties | undefined;
	readonly comments?: string | undefined;
	readonly enableFileUploadNotifications?: boolean | undefined;
	readonly eventHubEndpoints?: IotHubPropertiesEventHubEndpoints | undefined;
	readonly features?: ("DeviceManagement" | "None") | undefined;
	readonly hostName?: string | undefined;
	readonly ipFilterRules?: IpFilterRule[] | undefined;
	readonly locations?: IotHubLocationDescription[] | undefined;
	readonly messagingEndpoints?: IotHubPropertiesMessagingEndpoints | undefined;
	readonly minTlsVersion?: string | undefined;
	readonly privateEndpointConnections?: PrivateEndpointConnection[] | undefined;
	readonly provisioningState?: string | undefined;
	readonly publicNetworkAccess?: ("Disabled" | "Enabled") | undefined;
	readonly routing?: RoutingProperties | undefined;
	readonly state?: string | undefined;
	readonly storageEndpoints?: IotHubPropertiesStorageEndpoints | undefined;
}
export interface IotHubPropertiesEventHubEndpoints {
	readonly "[ key: string ]"?: EventHubProperties | undefined;
}
export interface IotHubPropertiesMessagingEndpoints {
	readonly "[ key: string ]"?: MessagingEndpointProperties | undefined;
}
export interface IotHubPropertiesStorageEndpoints {
	readonly "[ key: string ]"?: StorageEndpointProperties | undefined;
}
export interface IotHubSkuInfo {
	readonly capacity?: number | undefined;
	readonly name: "B1" | "B2" | "B3" | "F1" | "S1" | "S2" | "S3";
	readonly tier?: ("Basic" | "Free") | undefined;
}
export interface IpFilterRule {
	readonly action: "Accept";
	readonly filterName: string;
	readonly ipMask: string;
}
export interface MessagingEndpointProperties {
	readonly lockDurationAsIso8601?: string | undefined;
	readonly maxDeliveryCount?: number | undefined;
	readonly ttlAsIso8601?: string | undefined;
}
export interface PrivateEndpoint {
	readonly id?: string | undefined;
}
export interface PrivateEndpointConnection {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties: PrivateEndpointConnectionProperties;
	readonly type?: string | undefined;
}
export interface PrivateEndpointConnectionProperties {
	readonly privateEndpoint?: PrivateEndpoint | undefined;
	readonly privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
}
export interface PrivateLinkServiceConnectionState {
	readonly actionsRequired?: string | undefined;
	readonly description: string;
	readonly status: "Approved" | "Disconnected" | "Pending" | "Rejected";
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface RouteProperties {
	readonly condition?: string | undefined;
	readonly endpointNames: string[];
	readonly isEnabled: boolean;
	readonly name: string;
	readonly source:
		| "DeviceJobLifecycleEvents"
		| "DeviceLifecycleEvents"
		| "DeviceMessages"
		| "Invalid"
		| "TwinChangeEvents";
}
export interface RoutingEndpoints {
	readonly eventHubs?: RoutingEventHubProperties[] | undefined;
	readonly serviceBusQueues?: RoutingServiceBusQueueEndpointProperties[] | undefined;
	readonly serviceBusTopics?: RoutingServiceBusTopicEndpointProperties[] | undefined;
	readonly storageContainers?: RoutingStorageContainerProperties[] | undefined;
}
export interface RoutingEventHubProperties {
	readonly authenticationType?: ("identityBased" | "keyBased") | undefined;
	readonly connectionString?: string | undefined;
	readonly endpointUri?: string | undefined;
	readonly entityPath?: string | undefined;
	readonly id?: string | undefined;
	readonly name: string;
	readonly resourceGroup?: string | undefined;
	readonly subscriptionId?: string | undefined;
}
export interface RoutingProperties {
	readonly endpoints?: RoutingEndpoints | undefined;
	readonly enrichments?: EnrichmentProperties[] | undefined;
	readonly fallbackRoute?: FallbackRouteProperties | undefined;
	readonly routes?: RouteProperties[] | undefined;
}
export interface RoutingServiceBusQueueEndpointProperties {
	readonly authenticationType?: ("identityBased" | "keyBased") | undefined;
	readonly connectionString?: string | undefined;
	readonly endpointUri?: string | undefined;
	readonly entityPath?: string | undefined;
	readonly id?: string | undefined;
	readonly name: string;
	readonly resourceGroup?: string | undefined;
	readonly subscriptionId?: string | undefined;
}
export interface RoutingServiceBusTopicEndpointProperties {
	readonly authenticationType?: ("identityBased" | "keyBased") | undefined;
	readonly connectionString?: string | undefined;
	readonly endpointUri?: string | undefined;
	readonly entityPath?: string | undefined;
	readonly id?: string | undefined;
	readonly name: string;
	readonly resourceGroup?: string | undefined;
	readonly subscriptionId?: string | undefined;
}
export interface RoutingStorageContainerProperties {
	readonly authenticationType?: ("identityBased" | "keyBased") | undefined;
	readonly batchFrequencyInSeconds?: number | undefined;
	readonly connectionString?: string | undefined;
	readonly containerName: string;
	readonly encoding?: ("Avro" | "AvroDeflate" | "JSON") | undefined;
	readonly endpointUri?: string | undefined;
	readonly fileNameFormat?: string | undefined;
	readonly id?: string | undefined;
	readonly maxChunkSizeInBytes?: number | undefined;
	readonly name: string;
	readonly resourceGroup?: string | undefined;
	readonly subscriptionId?: string | undefined;
}
export interface SharedAccessSignatureAuthorizationRule {
	readonly keyName: string;
	readonly primaryKey?: string | undefined;
	readonly rights:
		| "DeviceConnect"
		| "RegistryRead"
		| "RegistryRead, DeviceConnect"
		| "RegistryRead, RegistryWrite"
		| "RegistryRead, RegistryWrite, DeviceConnect"
		| "RegistryRead, RegistryWrite, ServiceConnect"
		| "RegistryRead, RegistryWrite, ServiceConnect, DeviceConnect"
		| "RegistryRead, ServiceConnect"
		| "RegistryRead, ServiceConnect, DeviceConnect"
		| "RegistryWrite"
		| "RegistryWrite, DeviceConnect"
		| "RegistryWrite, ServiceConnect"
		| "RegistryWrite, ServiceConnect, DeviceConnect"
		| "ServiceConnect";
	readonly secondaryKey?: string | undefined;
}
export interface SharedAccessSignatureAuthorizationRuleListResult {
	readonly nextLink?: string | undefined;
	readonly value?: SharedAccessSignatureAuthorizationRule[] | undefined;
}
export interface StorageEndpointProperties {
	readonly authenticationType?: ("identityBased" | "keyBased") | undefined;
	readonly connectionString: string;
	readonly containerName: string;
	readonly sasTtlAsIso8601?: string | undefined;
}
export default {
	IotHubs: IotHubs,
	"IotHubs/certificates": IotHubs_certificates,
	"IotHubs/eventHubEndpoints/ConsumerGroups": IotHubs_eventHubEndpoints_ConsumerGroups,
	"iotHubs/privateEndpointConnections": iotHubs_privateEndpointConnections,
};

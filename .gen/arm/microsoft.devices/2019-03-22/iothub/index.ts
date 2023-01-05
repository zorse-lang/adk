import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class IotHubs extends ArmResource<IotHubsComponentInputs> implements IotHubsComponentOutputs {
	constructor(entity: ADKEntity, options: IotHubsComponentInputs) {
		super(entity, options.name, "Microsoft.Devices/IotHubs", "2019-03-22", options);
	}
	public readonly apiVersion: "2019-03-22";
	public readonly id: string;
	public readonly type: "Microsoft.Devices/IotHubs";
}
export interface IotHubsComponentOutputs {
	readonly apiVersion: "2019-03-22";
	readonly id: string;
	readonly type: "Microsoft.Devices/IotHubs";
}
export interface IotHubsComponentInputs {
	readonly etag?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: IotHubProperties;
	readonly sku: IotHubSkuInfo;
	readonly tags?: ResourceTags;
}
export class IotHubs_certificates
	extends ArmResource<IotHubs_certificatesComponentInputs>
	implements IotHubs_certificatesComponentOutputs
{
	constructor(entity: ADKEntity, options: IotHubs_certificatesComponentInputs) {
		super(entity, options.name, "Microsoft.Devices/IotHubs/certificates", "2019-03-22", options);
	}
	public readonly apiVersion: "2019-03-22";
	public readonly id: string;
	public readonly type: "Microsoft.Devices/IotHubs/certificates";
}
export interface IotHubs_certificatesComponentOutputs {
	readonly apiVersion: "2019-03-22";
	readonly id: string;
	readonly type: "Microsoft.Devices/IotHubs/certificates";
}
export interface IotHubs_certificatesComponentInputs {
	readonly certificate?: string;
	readonly etag?: string;
	readonly name: string;
	readonly properties?: CertificateProperties;
}
export class IotHubs_eventHubEndpoints_ConsumerGroups
	extends ArmResource<IotHubs_eventHubEndpoints_ConsumerGroupsComponentInputs>
	implements IotHubs_eventHubEndpoints_ConsumerGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: IotHubs_eventHubEndpoints_ConsumerGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.Devices/IotHubs/eventHubEndpoints/ConsumerGroups", "2019-03-22", options);
	}
	public readonly apiVersion: "2019-03-22";
	public readonly id: string;
	public readonly type: "Microsoft.Devices/IotHubs/eventHubEndpoints/ConsumerGroups";
}
export interface IotHubs_eventHubEndpoints_ConsumerGroupsComponentOutputs {
	readonly apiVersion: "2019-03-22";
	readonly id: string;
	readonly type: "Microsoft.Devices/IotHubs/eventHubEndpoints/ConsumerGroups";
}
export interface IotHubs_eventHubEndpoints_ConsumerGroupsComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: EventHubConsumerGroupInfoProperties;
}
export function listkeys(resource: IotHubs): SharedAccessSignatureAuthorizationRuleListResult {
	if (resource.apiVersion !== "2019-03-22") {
		throw new Error(`listkeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Devices/IotHubs") {
		throw new Error(`listkeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface CertificateProperties {
	readonly certificate?: string;
	readonly created?: string;
	readonly expiry?: string;
	readonly isVerified?: boolean;
	readonly subject?: string;
	readonly thumbprint?: string;
	readonly updated?: string;
}
export interface CloudToDeviceProperties {
	readonly defaultTtlAsIso8601?: string;
	readonly feedback?: FeedbackProperties;
	readonly maxDeliveryCount?: number;
}
export interface EventHubConsumerGroupInfoProperties {
	readonly [key: string]: string;
}
export interface EventHubProperties {
	readonly endpoint?: string;
	readonly partitionCount?: number;
	readonly partitionIds?: string[];
	readonly path?: string;
	readonly retentionTimeInDays?: number;
}
export interface FallbackRouteProperties {
	readonly condition?: string;
	readonly endpointNames: string[];
	readonly isEnabled: boolean;
	readonly name?: string;
	readonly source:
		| "DeviceJobLifecycleEvents"
		| "DeviceLifecycleEvents"
		| "DeviceMessages"
		| "Invalid"
		| "TwinChangeEvents";
}
export interface FeedbackProperties {
	readonly lockDurationAsIso8601?: string;
	readonly maxDeliveryCount?: number;
	readonly ttlAsIso8601?: string;
}
export interface IotHubLocationDescription {
	readonly location?: string;
	readonly role?: "primary" | "secondary";
}
export interface IotHubProperties {
	readonly authorizationPolicies?: SharedAccessSignatureAuthorizationRule[];
	readonly cloudToDevice?: CloudToDeviceProperties;
	readonly comments?: string;
	readonly enableFileUploadNotifications?: boolean;
	readonly eventHubEndpoints?: IotHubPropertiesEventHubEndpoints;
	readonly features?: "DeviceManagement" | "None";
	readonly hostName?: string;
	readonly ipFilterRules?: IpFilterRule[];
	readonly locations?: IotHubLocationDescription[];
	readonly messagingEndpoints?: IotHubPropertiesMessagingEndpoints;
	readonly provisioningState?: string;
	readonly routing?: RoutingProperties;
	readonly state?: string;
	readonly storageEndpoints?: IotHubPropertiesStorageEndpoints;
}
export interface IotHubPropertiesEventHubEndpoints {
	readonly [key: string]: EventHubProperties;
}
export interface IotHubPropertiesMessagingEndpoints {
	readonly [key: string]: MessagingEndpointProperties;
}
export interface IotHubPropertiesStorageEndpoints {
	readonly [key: string]: StorageEndpointProperties;
}
export interface IotHubSkuInfo {
	readonly capacity?: number;
	readonly name: "B1" | "B2" | "B3" | "F1" | "S1" | "S2" | "S3";
	readonly tier?: "Basic" | "Free";
}
export interface IpFilterRule {
	readonly action: "Accept";
	readonly filterName: string;
	readonly ipMask: string;
}
export interface MessagingEndpointProperties {
	readonly lockDurationAsIso8601?: string;
	readonly maxDeliveryCount?: number;
	readonly ttlAsIso8601?: string;
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface RouteProperties {
	readonly condition?: string;
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
	readonly eventHubs?: RoutingEventHubProperties[];
	readonly serviceBusQueues?: RoutingServiceBusQueueEndpointProperties[];
	readonly serviceBusTopics?: RoutingServiceBusTopicEndpointProperties[];
	readonly storageContainers?: RoutingStorageContainerProperties[];
}
export interface RoutingEventHubProperties {
	readonly connectionString: string;
	readonly name: string;
	readonly resourceGroup?: string;
	readonly subscriptionId?: string;
}
export interface RoutingProperties {
	readonly endpoints?: RoutingEndpoints;
	readonly fallbackRoute?: FallbackRouteProperties;
	readonly routes?: RouteProperties[];
}
export interface RoutingServiceBusQueueEndpointProperties {
	readonly connectionString: string;
	readonly name: string;
	readonly resourceGroup?: string;
	readonly subscriptionId?: string;
}
export interface RoutingServiceBusTopicEndpointProperties {
	readonly connectionString: string;
	readonly name: string;
	readonly resourceGroup?: string;
	readonly subscriptionId?: string;
}
export interface RoutingStorageContainerProperties {
	readonly batchFrequencyInSeconds?: number;
	readonly connectionString: string;
	readonly containerName: string;
	readonly encoding?: "Avro" | "AvroDeflate" | "JSON";
	readonly fileNameFormat?: string;
	readonly maxChunkSizeInBytes?: number;
	readonly name: string;
	readonly resourceGroup?: string;
	readonly subscriptionId?: string;
}
export interface SharedAccessSignatureAuthorizationRule {
	readonly keyName: string;
	readonly primaryKey?: string;
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
	readonly secondaryKey?: string;
}
export interface SharedAccessSignatureAuthorizationRuleListResult {
	readonly nextLink?: string;
	readonly value?: SharedAccessSignatureAuthorizationRule[];
}
export interface StorageEndpointProperties {
	readonly connectionString: string;
	readonly containerName: string;
	readonly sasTtlAsIso8601?: string;
}
export default {
	IotHubs: IotHubs,
	"IotHubs/certificates": IotHubs_certificates,
	"IotHubs/eventHubEndpoints/ConsumerGroups": IotHubs_eventHubEndpoints_ConsumerGroups,
};

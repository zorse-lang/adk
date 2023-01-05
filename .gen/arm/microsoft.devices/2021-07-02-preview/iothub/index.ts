import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class IotHubs extends ArmResource<IotHubsComponentInputs> implements IotHubsComponentOutputs {
	constructor(entity: ADKEntity, options: IotHubsComponentInputs) {
		super(entity, options.name, "Microsoft.Devices/IotHubs", "2021-07-02-preview", options);
	}
	public readonly apiVersion: "2021-07-02-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Devices/IotHubs";
}
export interface IotHubsComponentOutputs {
	readonly apiVersion: "2021-07-02-preview";
	readonly id: string;
	readonly type: "Microsoft.Devices/IotHubs";
}
export interface IotHubsComponentInputs {
	readonly etag?: string;
	readonly identity?: ArmIdentity;
	readonly location: string;
	readonly name: string;
	readonly properties?: IotHubProperties;
	readonly sku: IotHubSkuInfo;
	readonly systemData?: SystemData;
	readonly tags?: ResourceTags;
}
export class IotHubs_certificates
	extends ArmResource<IotHubs_certificatesComponentInputs>
	implements IotHubs_certificatesComponentOutputs
{
	constructor(entity: ADKEntity, options: IotHubs_certificatesComponentInputs) {
		super(entity, options.name, "Microsoft.Devices/IotHubs/certificates", "2021-07-02-preview", options);
	}
	public readonly apiVersion: "2021-07-02-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Devices/IotHubs/certificates";
}
export interface IotHubs_certificatesComponentOutputs {
	readonly apiVersion: "2021-07-02-preview";
	readonly id: string;
	readonly type: "Microsoft.Devices/IotHubs/certificates";
}
export interface IotHubs_certificatesComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: CertificateProperties;
}
export class IotHubs_eventHubEndpoints_ConsumerGroups
	extends ArmResource<IotHubs_eventHubEndpoints_ConsumerGroupsComponentInputs>
	implements IotHubs_eventHubEndpoints_ConsumerGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: IotHubs_eventHubEndpoints_ConsumerGroupsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Devices/IotHubs/eventHubEndpoints/ConsumerGroups",
			"2021-07-02-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-07-02-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Devices/IotHubs/eventHubEndpoints/ConsumerGroups";
}
export interface IotHubs_eventHubEndpoints_ConsumerGroupsComponentOutputs {
	readonly apiVersion: "2021-07-02-preview";
	readonly id: string;
	readonly type: "Microsoft.Devices/IotHubs/eventHubEndpoints/ConsumerGroups";
}
export interface IotHubs_eventHubEndpoints_ConsumerGroupsComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties: EventHubConsumerGroupNameOrEventHubConsumerGroupInfoProperties;
}
export class iotHubs_privateEndpointConnections
	extends ArmResource<iotHubs_privateEndpointConnectionsComponentInputs>
	implements iotHubs_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: iotHubs_privateEndpointConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Devices/iotHubs/privateEndpointConnections", "2021-07-02-preview", options);
	}
	public readonly apiVersion: "2021-07-02-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Devices/iotHubs/privateEndpointConnections";
}
export interface iotHubs_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2021-07-02-preview";
	readonly id: string;
	readonly type: "Microsoft.Devices/iotHubs/privateEndpointConnections";
}
export interface iotHubs_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties: PrivateEndpointConnectionProperties;
}
export function listkeys(resource: IotHubs): SharedAccessSignatureAuthorizationRuleListResult {
	if (resource.apiVersion !== "2021-07-02-preview") {
		throw new Error(`listkeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Devices/IotHubs") {
		throw new Error(`listkeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface ArmIdentity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "None" | "SystemAssigned" | "SystemAssigned, UserAssigned";
	readonly userAssignedIdentities?: ArmIdentityUserAssignedIdentities;
}
export interface ArmIdentityUserAssignedIdentities {
	readonly [key: string]: ArmUserIdentity;
}
export interface ArmUserIdentity {
	readonly clientId?: string;
	readonly principalId?: string;
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
export interface EncryptionPropertiesDescription {
	readonly keySource?: string;
	readonly keyVaultProperties?: KeyVaultKeyProperties[];
}
export interface EnrichmentProperties {
	readonly endpointNames: string[];
	readonly key: string;
	readonly value: string;
}
export interface EventHubConsumerGroupNameOrEventHubConsumerGroupInfoProperties {
	readonly name: string;
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
		| "DeviceConnectionStateEvents"
		| "DeviceJobLifecycleEvents"
		| "DeviceLifecycleEvents"
		| "DeviceMessages"
		| "DigitalTwinChangeEvents"
		| "Invalid"
		| "MqttBrokerMessages"
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
	readonly allowedFqdnList?: string[];
	readonly authorizationPolicies?: SharedAccessSignatureAuthorizationRule[];
	readonly cloudToDevice?: CloudToDeviceProperties;
	readonly comments?: string;
	readonly deviceStreams?: IotHubPropertiesDeviceStreams;
	readonly disableDeviceSAS?: boolean;
	readonly disableLocalAuth?: boolean;
	readonly disableModuleSAS?: boolean;
	readonly enableDataResidency?: boolean;
	readonly enableFileUploadNotifications?: boolean;
	readonly encryption?: EncryptionPropertiesDescription;
	readonly eventHubEndpoints?: IotHubPropertiesEventHubEndpoints;
	readonly features?: "DeviceManagement" | "None";
	readonly hostName?: string;
	readonly ipFilterRules?: IpFilterRule[];
	readonly locations?: IotHubLocationDescription[];
	readonly messagingEndpoints?: IotHubPropertiesMessagingEndpoints;
	readonly minTlsVersion?: string;
	readonly networkRuleSets?: NetworkRuleSetProperties;
	readonly privateEndpointConnections?: PrivateEndpointConnection[];
	readonly provisioningState?: string;
	readonly publicNetworkAccess?: "Disabled" | "Enabled";
	readonly restrictOutboundNetworkAccess?: boolean;
	readonly routing?: RoutingProperties;
	readonly state?: string;
	readonly storageEndpoints?: IotHubPropertiesStorageEndpoints;
}
export interface IotHubPropertiesDeviceStreams {
	readonly streamingEndpoints?: string[];
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
export interface KeyVaultKeyProperties {
	readonly identity?: ManagedIdentity;
	readonly keyIdentifier?: string;
}
export interface ManagedIdentity {
	readonly userAssignedIdentity?: string;
}
export interface MessagingEndpointProperties {
	readonly lockDurationAsIso8601?: string;
	readonly maxDeliveryCount?: number;
	readonly ttlAsIso8601?: string;
}
export interface NetworkRuleSetIpRule {
	readonly action?: "Allow";
	readonly filterName: string;
	readonly ipMask: string;
}
export interface NetworkRuleSetProperties {
	readonly applyToBuiltInEventHubEndpoint: boolean;
	readonly defaultAction?: "Allow" | "Deny";
	readonly ipRules: NetworkRuleSetIpRule[];
}
export interface PrivateEndpoint {
	readonly id?: string;
}
export interface PrivateEndpointConnection {
	readonly id?: string;
	readonly name?: string;
	readonly properties: PrivateEndpointConnectionProperties;
	readonly type?: string;
}
export interface PrivateEndpointConnectionProperties {
	readonly privateEndpoint?: PrivateEndpoint;
	readonly privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
}
export interface PrivateLinkServiceConnectionState {
	readonly actionsRequired?: string;
	readonly description: string;
	readonly status: "Approved" | "Disconnected" | "Pending" | "Rejected";
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
		| "DeviceConnectionStateEvents"
		| "DeviceJobLifecycleEvents"
		| "DeviceLifecycleEvents"
		| "DeviceMessages"
		| "DigitalTwinChangeEvents"
		| "Invalid"
		| "MqttBrokerMessages"
		| "TwinChangeEvents";
}
export interface RoutingEndpoints {
	readonly eventHubs?: RoutingEventHubProperties[];
	readonly serviceBusQueues?: RoutingServiceBusQueueEndpointProperties[];
	readonly serviceBusTopics?: RoutingServiceBusTopicEndpointProperties[];
	readonly storageContainers?: RoutingStorageContainerProperties[];
}
export interface RoutingEventHubProperties {
	readonly authenticationType?: "identityBased" | "keyBased";
	readonly connectionString?: string;
	readonly endpointUri?: string;
	readonly entityPath?: string;
	readonly id?: string;
	readonly identity?: ManagedIdentity;
	readonly name: string;
	readonly resourceGroup?: string;
	readonly subscriptionId?: string;
}
export interface RoutingProperties {
	readonly endpoints?: RoutingEndpoints;
	readonly enrichments?: EnrichmentProperties[];
	readonly fallbackRoute?: FallbackRouteProperties;
	readonly routes?: RouteProperties[];
}
export interface RoutingServiceBusQueueEndpointProperties {
	readonly authenticationType?: "identityBased" | "keyBased";
	readonly connectionString?: string;
	readonly endpointUri?: string;
	readonly entityPath?: string;
	readonly id?: string;
	readonly identity?: ManagedIdentity;
	readonly name: string;
	readonly resourceGroup?: string;
	readonly subscriptionId?: string;
}
export interface RoutingServiceBusTopicEndpointProperties {
	readonly authenticationType?: "identityBased" | "keyBased";
	readonly connectionString?: string;
	readonly endpointUri?: string;
	readonly entityPath?: string;
	readonly id?: string;
	readonly identity?: ManagedIdentity;
	readonly name: string;
	readonly resourceGroup?: string;
	readonly subscriptionId?: string;
}
export interface RoutingStorageContainerProperties {
	readonly authenticationType?: "identityBased" | "keyBased";
	readonly batchFrequencyInSeconds?: number;
	readonly connectionString?: string;
	readonly containerName: string;
	readonly encoding?: "Avro" | "AvroDeflate" | "JSON";
	readonly endpointUri?: string;
	readonly fileNameFormat?: string;
	readonly id?: string;
	readonly identity?: ManagedIdentity;
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
	readonly authenticationType?: "identityBased" | "keyBased";
	readonly connectionString: string;
	readonly containerName: string;
	readonly identity?: ManagedIdentity;
	readonly sasTtlAsIso8601?: string;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export default {
	IotHubs: IotHubs,
	"IotHubs/certificates": IotHubs_certificates,
	"IotHubs/eventHubEndpoints/ConsumerGroups": IotHubs_eventHubEndpoints_ConsumerGroups,
	"iotHubs/privateEndpointConnections": iotHubs_privateEndpointConnections,
};

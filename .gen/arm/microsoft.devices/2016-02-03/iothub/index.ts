import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class IotHubs extends ArmResource<IotHubsComponentInputs> implements IotHubsComponentOutputs {
	constructor(entity: ADKEntity, options: IotHubsComponentInputs) {
		super(entity, options.name, "Microsoft.Devices/IotHubs", "2016-02-03", options);
	}
	public readonly apiVersion: "2016-02-03";
	public readonly id: string;
	public readonly type: "Microsoft.Devices/IotHubs";
}
export interface IotHubsComponentOutputs {
	readonly apiVersion: "2016-02-03";
	readonly id: string;
	readonly type: "Microsoft.Devices/IotHubs";
}
export interface IotHubsComponentInputs {
	readonly etag?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: IotHubProperties | undefined;
	readonly resourcegroup: string;
	readonly sku: IotHubSkuInfo;
	readonly subscriptionid: string;
	readonly tags?: ResourceTags | undefined;
}
export class IotHubs_eventHubEndpoints_ConsumerGroups
	extends ArmResource<IotHubs_eventHubEndpoints_ConsumerGroupsComponentInputs>
	implements IotHubs_eventHubEndpoints_ConsumerGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: IotHubs_eventHubEndpoints_ConsumerGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.Devices/IotHubs/eventHubEndpoints/ConsumerGroups", "2016-02-03", options);
	}
	public readonly apiVersion: "2016-02-03";
	public readonly id: string;
	public readonly type: "Microsoft.Devices/IotHubs/eventHubEndpoints/ConsumerGroups";
}
export interface IotHubs_eventHubEndpoints_ConsumerGroupsComponentOutputs {
	readonly apiVersion: "2016-02-03";
	readonly id: string;
	readonly type: "Microsoft.Devices/IotHubs/eventHubEndpoints/ConsumerGroups";
}
export interface IotHubs_eventHubEndpoints_ConsumerGroupsComponentInputs {
	readonly name: string;
	readonly tags?: EventHubConsumerGroupInfoTags | undefined;
}
export function listkeys(resource: IotHubs): SharedAccessSignatureAuthorizationRuleListResult {
	if (resource.apiVersion !== "2016-02-03") {
		throw new Error(`listkeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Devices/IotHubs") {
		throw new Error(`listkeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface CloudToDeviceProperties {
	readonly defaultTtlAsIso8601?: string | undefined;
	readonly feedback?: FeedbackProperties | undefined;
	readonly maxDeliveryCount?: number | undefined;
}
export interface EventHubConsumerGroupInfoTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface EventHubProperties {
	readonly endpoint?: string | undefined;
	readonly partitionCount?: number | undefined;
	readonly partitionIds?: string[] | undefined;
	readonly path?: string | undefined;
	readonly retentionTimeInDays?: number | undefined;
}
export interface FeedbackProperties {
	readonly lockDurationAsIso8601?: string | undefined;
	readonly maxDeliveryCount?: number | undefined;
	readonly ttlAsIso8601?: string | undefined;
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
	readonly messagingEndpoints?: IotHubPropertiesMessagingEndpoints | undefined;
	readonly operationsMonitoringProperties?: OperationsMonitoringProperties | undefined;
	readonly provisioningState?: string | undefined;
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
	readonly capacity: number;
	readonly name: "F1" | "S1" | "S2" | "S3";
	readonly tier?: "Free" | undefined;
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
export interface OperationsMonitoringProperties {
	readonly events?: OperationsMonitoringPropertiesEvents | undefined;
}
export interface OperationsMonitoringPropertiesEvents {
	readonly "[ key: string ]"?: ("Error" | "Error, Information" | "Information" | "None") | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
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
	readonly connectionString: string;
	readonly containerName: string;
	readonly sasTtlAsIso8601?: string | undefined;
}
export default {
	IotHubs: IotHubs,
	"IotHubs/eventHubEndpoints/ConsumerGroups": IotHubs_eventHubEndpoints_ConsumerGroups,
};

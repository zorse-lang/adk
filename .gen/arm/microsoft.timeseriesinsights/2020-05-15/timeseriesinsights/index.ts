import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class environments_Gen1
	extends ArmResource<environments_Gen1ComponentInputs>
	implements environments_Gen1ComponentOutputs
{
	constructor(entity: ADKEntity, options: environments_Gen1ComponentInputs) {
		super(entity, options.name, "Microsoft.TimeSeriesInsights/environments", "2020-05-15", options);
	}
	public readonly apiVersion: "2020-05-15";
	public readonly id: string;
	public readonly type: "Microsoft.TimeSeriesInsights/environments";
}
export interface environments_Gen1ComponentOutputs {
	readonly apiVersion: "2020-05-15";
	readonly id: string;
	readonly type: "Microsoft.TimeSeriesInsights/environments";
}
export interface environments_Gen1ComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly sku: Sku;
	readonly tags?: CreateOrUpdateTrackedResourcePropertiesTags;
	readonly kind: "Gen1";
	readonly properties: Gen1EnvironmentCreationPropertiesOrGen1EnvironmentResourceProperties;
}
export class environments_Gen2
	extends ArmResource<environments_Gen2ComponentInputs>
	implements environments_Gen2ComponentOutputs
{
	constructor(entity: ADKEntity, options: environments_Gen2ComponentInputs) {
		super(entity, options.name, "Microsoft.TimeSeriesInsights/environments", "2020-05-15", options);
	}
	public readonly apiVersion: "2020-05-15";
	public readonly id: string;
	public readonly type: "Microsoft.TimeSeriesInsights/environments";
}
export interface environments_Gen2ComponentOutputs {
	readonly apiVersion: "2020-05-15";
	readonly id: string;
	readonly type: "Microsoft.TimeSeriesInsights/environments";
}
export interface environments_Gen2ComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly sku: Sku;
	readonly tags?: CreateOrUpdateTrackedResourcePropertiesTags;
	readonly kind: "Gen2";
	readonly properties: Gen2EnvironmentCreationPropertiesOrGen2EnvironmentResourceProperties;
}
export class environments_accessPolicies
	extends ArmResource<environments_accessPoliciesComponentInputs>
	implements environments_accessPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: environments_accessPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.TimeSeriesInsights/environments/accessPolicies", "2020-05-15", options);
	}
	public readonly apiVersion: "2020-05-15";
	public readonly id: string;
	public readonly type: "Microsoft.TimeSeriesInsights/environments/accessPolicies";
}
export interface environments_accessPoliciesComponentOutputs {
	readonly apiVersion: "2020-05-15";
	readonly id: string;
	readonly type: "Microsoft.TimeSeriesInsights/environments/accessPolicies";
}
export interface environments_accessPoliciesComponentInputs {
	readonly name: string;
	readonly properties: AccessPolicyResourceProperties;
}
export class environments_eventSources_Microsoft_EventHub
	extends ArmResource<environments_eventSources_Microsoft_EventHubComponentInputs>
	implements environments_eventSources_Microsoft_EventHubComponentOutputs
{
	constructor(entity: ADKEntity, options: environments_eventSources_Microsoft_EventHubComponentInputs) {
		super(entity, options.name, "Microsoft.TimeSeriesInsights/environments/eventSources", "2020-05-15", options);
	}
	public readonly apiVersion: "2020-05-15";
	public readonly id: string;
	public readonly type: "Microsoft.TimeSeriesInsights/environments/eventSources";
}
export interface environments_eventSources_Microsoft_EventHubComponentOutputs {
	readonly apiVersion: "2020-05-15";
	readonly id: string;
	readonly type: "Microsoft.TimeSeriesInsights/environments/eventSources";
}
export interface environments_eventSources_Microsoft_EventHubComponentInputs {
	readonly localTimestamp?: LocalTimestamp;
	readonly location: string;
	readonly name: string;
	readonly tags?: CreateOrUpdateTrackedResourcePropertiesTags;
	readonly kind: "Microsoft.EventHub";
	readonly properties: EventHubEventSourceCreationPropertiesOrEventHubEventSourceResourceProperties;
}
export class environments_eventSources_Microsoft_IoTHub
	extends ArmResource<environments_eventSources_Microsoft_IoTHubComponentInputs>
	implements environments_eventSources_Microsoft_IoTHubComponentOutputs
{
	constructor(entity: ADKEntity, options: environments_eventSources_Microsoft_IoTHubComponentInputs) {
		super(entity, options.name, "Microsoft.TimeSeriesInsights/environments/eventSources", "2020-05-15", options);
	}
	public readonly apiVersion: "2020-05-15";
	public readonly id: string;
	public readonly type: "Microsoft.TimeSeriesInsights/environments/eventSources";
}
export interface environments_eventSources_Microsoft_IoTHubComponentOutputs {
	readonly apiVersion: "2020-05-15";
	readonly id: string;
	readonly type: "Microsoft.TimeSeriesInsights/environments/eventSources";
}
export interface environments_eventSources_Microsoft_IoTHubComponentInputs {
	readonly localTimestamp?: LocalTimestamp;
	readonly location: string;
	readonly name: string;
	readonly tags?: CreateOrUpdateTrackedResourcePropertiesTags;
	readonly kind: "Microsoft.IoTHub";
	readonly properties: IoTHubEventSourceCreationPropertiesOrIoTHubEventSourceResourceProperties;
}
export class environments_referenceDataSets
	extends ArmResource<environments_referenceDataSetsComponentInputs>
	implements environments_referenceDataSetsComponentOutputs
{
	constructor(entity: ADKEntity, options: environments_referenceDataSetsComponentInputs) {
		super(entity, options.name, "Microsoft.TimeSeriesInsights/environments/referenceDataSets", "2020-05-15", options);
	}
	public readonly apiVersion: "2020-05-15";
	public readonly id: string;
	public readonly type: "Microsoft.TimeSeriesInsights/environments/referenceDataSets";
}
export interface environments_referenceDataSetsComponentOutputs {
	readonly apiVersion: "2020-05-15";
	readonly id: string;
	readonly type: "Microsoft.TimeSeriesInsights/environments/referenceDataSets";
}
export interface environments_referenceDataSetsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: ReferenceDataSetCreationPropertiesOrReferenceDataSetResourceProperties;
	readonly tags?: CreateOrUpdateTrackedResourcePropertiesTags;
}
export interface AccessPolicyResourceProperties {
	readonly description?: string;
	readonly principalObjectId?: string;
	readonly roles?: "Contributor" | "Reader"[];
}
export interface CreateOrUpdateTrackedResourcePropertiesTags {
	readonly [key: string]: string;
}
export interface EnvironmentStateDetails {
	readonly code?: string;
	readonly message?: string;
}
export interface EnvironmentStatus {
	readonly ingress?: IngressEnvironmentStatus;
	readonly warmStorage?: WarmStorageEnvironmentStatus;
}
export interface EventHubEventSourceCreationPropertiesOrEventHubEventSourceResourceProperties {
	readonly consumerGroupName: string;
	readonly creationTime?: string;
	readonly eventHubName: string;
	readonly eventSourceResourceId: string;
	readonly ingressStartAt?: IngressStartAtProperties;
	readonly keyName: string;
	readonly localTimestamp?: LocalTimestamp;
	readonly provisioningState?: "Accepted" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly serviceBusNamespace: string;
	readonly sharedAccessKey: string;
	readonly timestampPropertyName?: string;
}
export interface Gen1EnvironmentCreationPropertiesOrGen1EnvironmentResourceProperties {
	readonly creationTime?: string;
	readonly dataAccessFqdn?: string;
	readonly dataAccessId?: string;
	readonly dataRetentionTime: string;
	readonly partitionKeyProperties?: TimeSeriesIdProperty[];
	readonly provisioningState?: "Accepted" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly status?: EnvironmentStatus;
	readonly storageLimitExceededBehavior?: "PauseIngress" | "PurgeOldData";
}
export interface Gen2EnvironmentCreationPropertiesOrGen2EnvironmentResourceProperties {
	readonly creationTime?: string;
	readonly dataAccessFqdn?: string;
	readonly dataAccessId?: string;
	readonly provisioningState?: "Accepted" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly status?: EnvironmentStatus;
	readonly storageConfiguration: Gen2StorageConfigurationInputOrGen2StorageConfigurationOutput;
	readonly timeSeriesIdProperties: TimeSeriesIdProperty[];
	readonly warmStoreConfiguration?: WarmStoreConfigurationProperties;
}
export interface Gen2StorageConfigurationInputOrGen2StorageConfigurationOutput {
	readonly accountName: string;
	readonly managementKey: string;
}
export interface IngressEnvironmentStatus {
	readonly state?: "Disabled" | "Paused" | "Ready" | "Running" | "Unknown";
	readonly stateDetails?: EnvironmentStateDetails;
}
export interface IngressStartAtProperties {
	readonly time?: string;
	readonly type?: "CustomEnqueuedTime" | "EarliestAvailable" | "EventSourceCreationTime";
}
export interface IoTHubEventSourceCreationPropertiesOrIoTHubEventSourceResourceProperties {
	readonly consumerGroupName: string;
	readonly creationTime?: string;
	readonly eventSourceResourceId: string;
	readonly ingressStartAt?: IngressStartAtProperties;
	readonly iotHubName: string;
	readonly keyName: string;
	readonly localTimestamp?: LocalTimestamp;
	readonly provisioningState?: "Accepted" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly sharedAccessKey: string;
	readonly timestampPropertyName?: string;
}
export interface LocalTimestamp {
	readonly format?: "Embedded";
	readonly timeZoneOffset?: LocalTimestampTimeZoneOffset;
}
export interface LocalTimestampTimeZoneOffset {
	readonly propertyName?: string;
}
export interface ReferenceDataSetCreationPropertiesOrReferenceDataSetResourceProperties {
	readonly creationTime?: string;
	readonly dataStringComparisonBehavior?: "Ordinal" | "OrdinalIgnoreCase";
	readonly keyProperties: ReferenceDataSetKeyProperty[];
	readonly provisioningState?: "Accepted" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface ReferenceDataSetKeyProperty {
	readonly name?: string;
	readonly type?: "Bool" | "DateTime" | "Double" | "String";
}
export interface Sku {
	readonly capacity: number;
	readonly name: "L1" | "P1" | "S1" | "S2";
}
export interface TimeSeriesIdProperty {
	readonly name?: string;
	readonly type?: "String";
}
export interface WarmStorageEnvironmentStatus {
	readonly propertiesUsage?: WarmStoragePropertiesUsage;
}
export interface WarmStoragePropertiesUsage {
	readonly state?: "Error" | "Ok" | "Unknown";
	readonly stateDetails?: WarmStoragePropertiesUsageStateDetails;
}
export interface WarmStoragePropertiesUsageStateDetails {
	readonly currentCount?: number;
	readonly maxCount?: number;
}
export interface WarmStoreConfigurationProperties {
	readonly dataRetention: string;
}
export type environments = environments_Gen1 | environments_Gen2;
export type environments_eventSources =
	| environments_eventSources_Microsoft_EventHub
	| environments_eventSources_Microsoft_IoTHub;
export default {
	"environments/Gen1": environments_Gen1,
	"environments/Gen2": environments_Gen2,
	"environments/accessPolicies": environments_accessPolicies,
	"environments/eventSources/Microsoft.EventHub": environments_eventSources_Microsoft_EventHub,
	"environments/eventSources/Microsoft.IoTHub": environments_eventSources_Microsoft_IoTHub,
	"environments/referenceDataSets": environments_referenceDataSets,
};

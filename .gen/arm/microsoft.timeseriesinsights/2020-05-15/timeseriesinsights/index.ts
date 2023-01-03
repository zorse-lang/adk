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
	readonly tags?: CreateOrUpdateTrackedResourcePropertiesTags | undefined;
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
	readonly tags?: CreateOrUpdateTrackedResourcePropertiesTags | undefined;
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
	readonly localTimestamp?: LocalTimestamp | undefined;
	readonly location: string;
	readonly name: string;
	readonly tags?: CreateOrUpdateTrackedResourcePropertiesTags | undefined;
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
	readonly localTimestamp?: LocalTimestamp | undefined;
	readonly location: string;
	readonly name: string;
	readonly tags?: CreateOrUpdateTrackedResourcePropertiesTags | undefined;
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
	readonly tags?: CreateOrUpdateTrackedResourcePropertiesTags | undefined;
}
export interface AccessPolicyResourceProperties {
	readonly description?: string | undefined;
	readonly principalObjectId?: string | undefined;
	readonly roles?: ("Contributor" | "Reader"[]) | undefined;
}
export interface CreateOrUpdateTrackedResourcePropertiesTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface EnvironmentStateDetails {
	readonly code?: string | undefined;
	readonly message?: string | undefined;
}
export interface EnvironmentStatus {
	readonly ingress?: IngressEnvironmentStatus | undefined;
	readonly warmStorage?: WarmStorageEnvironmentStatus | undefined;
}
export interface EventHubEventSourceCreationPropertiesOrEventHubEventSourceResourceProperties {
	readonly consumerGroupName: string;
	readonly creationTime?: string | undefined;
	readonly eventHubName: string;
	readonly eventSourceResourceId: string;
	readonly ingressStartAt?: IngressStartAtProperties | undefined;
	readonly keyName: string;
	readonly localTimestamp?: LocalTimestamp | undefined;
	readonly provisioningState?: ("Accepted" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly serviceBusNamespace: string;
	readonly sharedAccessKey: string;
	readonly timestampPropertyName?: string | undefined;
}
export interface Gen1EnvironmentCreationPropertiesOrGen1EnvironmentResourceProperties {
	readonly creationTime?: string | undefined;
	readonly dataAccessFqdn?: string | undefined;
	readonly dataAccessId?: string | undefined;
	readonly dataRetentionTime: string;
	readonly partitionKeyProperties?: TimeSeriesIdProperty[] | undefined;
	readonly provisioningState?: ("Accepted" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly status?: EnvironmentStatus | undefined;
	readonly storageLimitExceededBehavior?: ("PauseIngress" | "PurgeOldData") | undefined;
}
export interface Gen2EnvironmentCreationPropertiesOrGen2EnvironmentResourceProperties {
	readonly creationTime?: string | undefined;
	readonly dataAccessFqdn?: string | undefined;
	readonly dataAccessId?: string | undefined;
	readonly provisioningState?: ("Accepted" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly status?: EnvironmentStatus | undefined;
	readonly storageConfiguration: Gen2StorageConfigurationInputOrGen2StorageConfigurationOutput;
	readonly timeSeriesIdProperties: TimeSeriesIdProperty[];
	readonly warmStoreConfiguration?: WarmStoreConfigurationProperties | undefined;
}
export interface Gen2StorageConfigurationInputOrGen2StorageConfigurationOutput {
	readonly accountName: string;
	readonly managementKey: string;
}
export interface IngressEnvironmentStatus {
	readonly state?: ("Disabled" | "Paused" | "Ready" | "Running" | "Unknown") | undefined;
	readonly stateDetails?: EnvironmentStateDetails | undefined;
}
export interface IngressStartAtProperties {
	readonly time?: string | undefined;
	readonly type?: ("CustomEnqueuedTime" | "EarliestAvailable" | "EventSourceCreationTime") | undefined;
}
export interface IoTHubEventSourceCreationPropertiesOrIoTHubEventSourceResourceProperties {
	readonly consumerGroupName: string;
	readonly creationTime?: string | undefined;
	readonly eventSourceResourceId: string;
	readonly ingressStartAt?: IngressStartAtProperties | undefined;
	readonly iotHubName: string;
	readonly keyName: string;
	readonly localTimestamp?: LocalTimestamp | undefined;
	readonly provisioningState?: ("Accepted" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly sharedAccessKey: string;
	readonly timestampPropertyName?: string | undefined;
}
export interface LocalTimestamp {
	readonly format?: "Embedded" | undefined;
	readonly timeZoneOffset?: LocalTimestampTimeZoneOffset | undefined;
}
export interface LocalTimestampTimeZoneOffset {
	readonly propertyName?: string | undefined;
}
export interface ReferenceDataSetCreationPropertiesOrReferenceDataSetResourceProperties {
	readonly creationTime?: string | undefined;
	readonly dataStringComparisonBehavior?: ("Ordinal" | "OrdinalIgnoreCase") | undefined;
	readonly keyProperties: ReferenceDataSetKeyProperty[];
	readonly provisioningState?: ("Accepted" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface ReferenceDataSetKeyProperty {
	readonly name?: string | undefined;
	readonly type?: ("Bool" | "DateTime" | "Double" | "String") | undefined;
}
export interface Sku {
	readonly capacity: number;
	readonly name: "L1" | "P1" | "S1" | "S2";
}
export interface TimeSeriesIdProperty {
	readonly name?: string | undefined;
	readonly type?: "String" | undefined;
}
export interface WarmStorageEnvironmentStatus {
	readonly propertiesUsage?: WarmStoragePropertiesUsage | undefined;
}
export interface WarmStoragePropertiesUsage {
	readonly state?: ("Error" | "Ok" | "Unknown") | undefined;
	readonly stateDetails?: WarmStoragePropertiesUsageStateDetails | undefined;
}
export interface WarmStoragePropertiesUsageStateDetails {
	readonly currentCount?: number | undefined;
	readonly maxCount?: number | undefined;
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

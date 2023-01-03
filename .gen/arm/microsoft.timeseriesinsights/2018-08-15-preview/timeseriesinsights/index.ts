import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class environments_LongTerm
	extends ArmResource<environments_LongTermComponentInputs>
	implements environments_LongTermComponentOutputs
{
	constructor(entity: ADKEntity, options: environments_LongTermComponentInputs) {
		super(entity, options.name, "Microsoft.TimeSeriesInsights/environments", "2018-08-15-preview", options);
	}
	public readonly apiVersion: "2018-08-15-preview";
	public readonly id: string;
	public readonly type: "Microsoft.TimeSeriesInsights/environments";
}
export interface environments_LongTermComponentOutputs {
	readonly apiVersion: "2018-08-15-preview";
	readonly id: string;
	readonly type: "Microsoft.TimeSeriesInsights/environments";
}
export interface environments_LongTermComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly sku: Sku;
	readonly tags?: CreateOrUpdateTrackedResourcePropertiesTags | undefined;
	readonly kind: "LongTerm";
	readonly properties: LongTermEnvironmentCreationPropertiesOrLongTermEnvironmentResourceProperties;
}
export class environments_Standard
	extends ArmResource<environments_StandardComponentInputs>
	implements environments_StandardComponentOutputs
{
	constructor(entity: ADKEntity, options: environments_StandardComponentInputs) {
		super(entity, options.name, "Microsoft.TimeSeriesInsights/environments", "2018-08-15-preview", options);
	}
	public readonly apiVersion: "2018-08-15-preview";
	public readonly id: string;
	public readonly type: "Microsoft.TimeSeriesInsights/environments";
}
export interface environments_StandardComponentOutputs {
	readonly apiVersion: "2018-08-15-preview";
	readonly id: string;
	readonly type: "Microsoft.TimeSeriesInsights/environments";
}
export interface environments_StandardComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly sku: Sku;
	readonly tags?: CreateOrUpdateTrackedResourcePropertiesTags | undefined;
	readonly kind: "Standard";
	readonly properties: StandardEnvironmentCreationPropertiesOrStandardEnvironmentResourceProperties;
}
export class environments_accessPolicies
	extends ArmResource<environments_accessPoliciesComponentInputs>
	implements environments_accessPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: environments_accessPoliciesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.TimeSeriesInsights/environments/accessPolicies",
			"2018-08-15-preview",
			options,
		);
	}
	public readonly apiVersion: "2018-08-15-preview";
	public readonly id: string;
	public readonly type: "Microsoft.TimeSeriesInsights/environments/accessPolicies";
}
export interface environments_accessPoliciesComponentOutputs {
	readonly apiVersion: "2018-08-15-preview";
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
		super(
			entity,
			options.name,
			"Microsoft.TimeSeriesInsights/environments/eventSources",
			"2018-08-15-preview",
			options,
		);
	}
	public readonly apiVersion: "2018-08-15-preview";
	public readonly id: string;
	public readonly type: "Microsoft.TimeSeriesInsights/environments/eventSources";
}
export interface environments_eventSources_Microsoft_EventHubComponentOutputs {
	readonly apiVersion: "2018-08-15-preview";
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
		super(
			entity,
			options.name,
			"Microsoft.TimeSeriesInsights/environments/eventSources",
			"2018-08-15-preview",
			options,
		);
	}
	public readonly apiVersion: "2018-08-15-preview";
	public readonly id: string;
	public readonly type: "Microsoft.TimeSeriesInsights/environments/eventSources";
}
export interface environments_eventSources_Microsoft_IoTHubComponentOutputs {
	readonly apiVersion: "2018-08-15-preview";
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
		super(
			entity,
			options.name,
			"Microsoft.TimeSeriesInsights/environments/referenceDataSets",
			"2018-08-15-preview",
			options,
		);
	}
	public readonly apiVersion: "2018-08-15-preview";
	public readonly id: string;
	public readonly type: "Microsoft.TimeSeriesInsights/environments/referenceDataSets";
}
export interface environments_referenceDataSetsComponentOutputs {
	readonly apiVersion: "2018-08-15-preview";
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
	readonly keyName: string;
	readonly provisioningState?: ("Accepted" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly serviceBusNamespace: string;
	readonly sharedAccessKey: string;
	readonly timestampPropertyName?: string | undefined;
}
export interface IngressEnvironmentStatus {
	readonly state?: ("Disabled" | "Paused" | "Ready" | "Running" | "Unknown") | undefined;
	readonly stateDetails?: EnvironmentStateDetails | undefined;
}
export interface IoTHubEventSourceCreationPropertiesOrIoTHubEventSourceResourceProperties {
	readonly consumerGroupName: string;
	readonly creationTime?: string | undefined;
	readonly eventSourceResourceId: string;
	readonly iotHubName: string;
	readonly keyName: string;
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
export interface LongTermEnvironmentCreationPropertiesOrLongTermEnvironmentResourceProperties {
	readonly creationTime?: string | undefined;
	readonly dataAccessFqdn?: string | undefined;
	readonly dataAccessId?: string | undefined;
	readonly provisioningState?: ("Accepted" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly status?: EnvironmentStatus | undefined;
	readonly storageConfiguration: LongTermStorageConfigurationInputOrLongTermStorageConfigurationOutput;
	readonly timeSeriesIdProperties: TimeSeriesIdProperty[];
	readonly warmStoreConfiguration?: WarmStoreConfigurationProperties | undefined;
}
export interface LongTermStorageConfigurationInputOrLongTermStorageConfigurationOutput {
	readonly accountName: string;
	readonly managementKey: string;
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
export interface StandardEnvironmentCreationPropertiesOrStandardEnvironmentResourceProperties {
	readonly creationTime?: string | undefined;
	readonly dataAccessFqdn?: string | undefined;
	readonly dataAccessId?: string | undefined;
	readonly dataRetentionTime: string;
	readonly partitionKeyProperties?: TimeSeriesIdProperty[] | undefined;
	readonly provisioningState?: ("Accepted" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly status?: EnvironmentStatus | undefined;
	readonly storageLimitExceededBehavior?: ("PauseIngress" | "PurgeOldData") | undefined;
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
export type environments = environments_LongTerm | environments_Standard;
export type environments_eventSources =
	| environments_eventSources_Microsoft_EventHub
	| environments_eventSources_Microsoft_IoTHub;
export default {
	"environments/LongTerm": environments_LongTerm,
	"environments/Standard": environments_Standard,
	"environments/accessPolicies": environments_accessPolicies,
	"environments/eventSources/Microsoft.EventHub": environments_eventSources_Microsoft_EventHub,
	"environments/eventSources/Microsoft.IoTHub": environments_eventSources_Microsoft_IoTHub,
	"environments/referenceDataSets": environments_referenceDataSets,
};

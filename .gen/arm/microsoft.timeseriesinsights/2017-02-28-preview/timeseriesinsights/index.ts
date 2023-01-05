import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class environments extends ArmResource<environmentsComponentInputs> implements environmentsComponentOutputs {
	constructor(entity: ADKEntity, options: environmentsComponentInputs) {
		super(entity, options.name, "Microsoft.TimeSeriesInsights/environments", "2017-02-28-preview", options);
	}
	public readonly apiVersion: "2017-02-28-preview";
	public readonly id: string;
	public readonly type: "Microsoft.TimeSeriesInsights/environments";
}
export interface environmentsComponentOutputs {
	readonly apiVersion: "2017-02-28-preview";
	readonly id: string;
	readonly type: "Microsoft.TimeSeriesInsights/environments";
}
export interface environmentsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: EnvironmentCreationPropertiesOrEnvironmentResourceProperties;
	readonly sku: Sku;
	readonly tags?: CreateOrUpdateTrackedResourcePropertiesTags;
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
			"2017-02-28-preview",
			options,
		);
	}
	public readonly apiVersion: "2017-02-28-preview";
	public readonly id: string;
	public readonly type: "Microsoft.TimeSeriesInsights/environments/accessPolicies";
}
export interface environments_accessPoliciesComponentOutputs {
	readonly apiVersion: "2017-02-28-preview";
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
			"2017-02-28-preview",
			options,
		);
	}
	public readonly apiVersion: "2017-02-28-preview";
	public readonly id: string;
	public readonly type: "Microsoft.TimeSeriesInsights/environments/eventSources";
}
export interface environments_eventSources_Microsoft_EventHubComponentOutputs {
	readonly apiVersion: "2017-02-28-preview";
	readonly id: string;
	readonly type: "Microsoft.TimeSeriesInsights/environments/eventSources";
}
export interface environments_eventSources_Microsoft_EventHubComponentInputs {
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
		super(
			entity,
			options.name,
			"Microsoft.TimeSeriesInsights/environments/eventSources",
			"2017-02-28-preview",
			options,
		);
	}
	public readonly apiVersion: "2017-02-28-preview";
	public readonly id: string;
	public readonly type: "Microsoft.TimeSeriesInsights/environments/eventSources";
}
export interface environments_eventSources_Microsoft_IoTHubComponentOutputs {
	readonly apiVersion: "2017-02-28-preview";
	readonly id: string;
	readonly type: "Microsoft.TimeSeriesInsights/environments/eventSources";
}
export interface environments_eventSources_Microsoft_IoTHubComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly tags?: CreateOrUpdateTrackedResourcePropertiesTags;
	readonly kind: "Microsoft.IoTHub";
	readonly properties: IoTHubEventSourceCreationProperties;
}
export class environments_eventSources_Microsoft_IotHub
	extends ArmResource<environments_eventSources_Microsoft_IotHubComponentInputs>
	implements environments_eventSources_Microsoft_IotHubComponentOutputs
{
	constructor(entity: ADKEntity, options: environments_eventSources_Microsoft_IotHubComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.TimeSeriesInsights/environments/eventSources",
			"2017-02-28-preview",
			options,
		);
	}
	public readonly apiVersion: "2017-02-28-preview";
	public readonly id: string;
	public readonly type: "Microsoft.TimeSeriesInsights/environments/eventSources";
}
export interface environments_eventSources_Microsoft_IotHubComponentOutputs {
	readonly apiVersion: "2017-02-28-preview";
	readonly id: string;
	readonly type: "Microsoft.TimeSeriesInsights/environments/eventSources";
}
export interface environments_eventSources_Microsoft_IotHubComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly tags?: CreateOrUpdateTrackedResourcePropertiesTags;
	readonly kind: "Microsoft.IotHub";
	readonly properties?: IoTHubEventSourceResourceProperties;
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
			"2017-02-28-preview",
			options,
		);
	}
	public readonly apiVersion: "2017-02-28-preview";
	public readonly id: string;
	public readonly type: "Microsoft.TimeSeriesInsights/environments/referenceDataSets";
}
export interface environments_referenceDataSetsComponentOutputs {
	readonly apiVersion: "2017-02-28-preview";
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
	readonly roles?: "Contributor"[];
}
export interface CreateOrUpdateTrackedResourcePropertiesTags {
	readonly [key: string]: string;
}
export interface EnvironmentCreationPropertiesOrEnvironmentResourceProperties {
	readonly creationTime?: string;
	readonly dataAccessFqdn?: string;
	readonly dataAccessId?: string;
	readonly dataRetentionTime: string;
	readonly provisioningState?: "Accepted" | "Creating" | "Deleting" | "Failed" | "Succeeded";
	readonly storageLimitExceededBehavior?: "PauseIngress";
}
export interface EventHubEventSourceCreationPropertiesOrEventHubEventSourceResourceProperties {
	readonly consumerGroupName: string;
	readonly creationTime?: string;
	readonly eventHubName: string;
	readonly eventSourceResourceId: string;
	readonly keyName: string;
	readonly provisioningState?: "Accepted" | "Creating" | "Deleting" | "Failed" | "Succeeded";
	readonly serviceBusNamespace: string;
	readonly sharedAccessKey: string;
	readonly timestampPropertyName?: string;
}
export interface IoTHubEventSourceCreationProperties {
	readonly consumerGroupName: string;
	readonly creationTime?: string;
	readonly eventSourceResourceId: string;
	readonly iotHubName: string;
	readonly keyName: string;
	readonly provisioningState?: "Accepted" | "Creating" | "Deleting" | "Failed" | "Succeeded";
	readonly sharedAccessKey: string;
	readonly timestampPropertyName?: string;
}
export interface IoTHubEventSourceResourceProperties {
	readonly consumerGroupName: string;
	readonly creationTime?: string;
	readonly eventSourceResourceId: string;
	readonly iotHubName: string;
	readonly keyName: string;
	readonly provisioningState?: "Accepted" | "Creating" | "Deleting" | "Failed" | "Succeeded";
	readonly timestampPropertyName?: string;
}
export interface ReferenceDataSetCreationPropertiesOrReferenceDataSetResourceProperties {
	readonly creationTime?: string;
	readonly keyProperties: ReferenceDataSetKeyProperty[];
	readonly provisioningState?: "Accepted" | "Creating" | "Deleting" | "Failed" | "Succeeded";
}
export interface ReferenceDataSetKeyProperty {
	readonly name?: string;
	readonly type?: "Bool" | "DateTime" | "Double";
}
export interface Sku {
	readonly capacity: number;
	readonly name: "S1";
}
export type environments_eventSources =
	| environments_eventSources_Microsoft_EventHub
	| environments_eventSources_Microsoft_IoTHub
	| environments_eventSources_Microsoft_IotHub;
export default {
	environments: environments,
	"environments/accessPolicies": environments_accessPolicies,
	"environments/eventSources/Microsoft.EventHub": environments_eventSources_Microsoft_EventHub,
	"environments/eventSources/Microsoft.IoTHub": environments_eventSources_Microsoft_IoTHub,
	"environments/eventSources/Microsoft.IotHub": environments_eventSources_Microsoft_IotHub,
	"environments/referenceDataSets": environments_referenceDataSets,
};

import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class farmBeats extends ArmResource<farmBeatsComponentInputs> implements farmBeatsComponentOutputs {
	constructor(entity: ADKEntity, options: farmBeatsComponentInputs) {
		super(entity, options.name, "Microsoft.AgFoodPlatform/farmBeats", "2021-09-01-preview", options);
	}
	public readonly apiVersion: "2021-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AgFoodPlatform/farmBeats";
}
export interface farmBeatsComponentOutputs {
	readonly apiVersion: "2021-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AgFoodPlatform/farmBeats";
}
export interface farmBeatsComponentInputs {
	readonly identity?: Identity;
	readonly location: string;
	readonly name: string;
	readonly properties?: FarmBeatsProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class farmBeats_extensions
	extends ArmResource<farmBeats_extensionsComponentInputs>
	implements farmBeats_extensionsComponentOutputs
{
	constructor(entity: ADKEntity, options: farmBeats_extensionsComponentInputs) {
		super(entity, options.name, "Microsoft.AgFoodPlatform/farmBeats/extensions", "2021-09-01-preview", options);
	}
	public readonly apiVersion: "2021-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AgFoodPlatform/farmBeats/extensions";
}
export interface farmBeats_extensionsComponentOutputs {
	readonly apiVersion: "2021-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AgFoodPlatform/farmBeats/extensions";
}
export interface farmBeats_extensionsComponentInputs {
	readonly additionalApiProperties?: ExtensionInstallationRequestAdditionalApiProperties;
	readonly eTag?: string;
	readonly extensionVersion?: string;
	readonly name: string;
	readonly properties?: ExtensionProperties;
	readonly systemData?: SystemData;
}
export class farmBeats_privateEndpointConnections
	extends ArmResource<farmBeats_privateEndpointConnectionsComponentInputs>
	implements farmBeats_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: farmBeats_privateEndpointConnectionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.AgFoodPlatform/farmBeats/privateEndpointConnections",
			"2021-09-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AgFoodPlatform/farmBeats/privateEndpointConnections";
}
export interface farmBeats_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2021-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AgFoodPlatform/farmBeats/privateEndpointConnections";
}
export interface farmBeats_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties;
	readonly systemData?: SystemData;
}
export class farmBeats_privateLinkResources
	extends ArmResource<farmBeats_privateLinkResourcesComponentInputs>
	implements farmBeats_privateLinkResourcesComponentOutputs
{
	constructor(entity: ADKEntity, options: farmBeats_privateLinkResourcesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.AgFoodPlatform/farmBeats/privateLinkResources",
			"2021-09-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AgFoodPlatform/farmBeats/privateLinkResources";
}
export interface farmBeats_privateLinkResourcesComponentOutputs {
	readonly apiVersion: "2021-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AgFoodPlatform/farmBeats/privateLinkResources";
}
export interface farmBeats_privateLinkResourcesComponentInputs {
	readonly name: string;
	readonly properties?: PrivateLinkResourceProperties;
	readonly systemData?: SystemData;
}
export class farmBeatsExtensionDefinitions
	extends ArmResource<farmBeatsExtensionDefinitionsComponentInputs>
	implements farmBeatsExtensionDefinitionsComponentOutputs
{
	constructor(entity: ADKEntity, options: farmBeatsExtensionDefinitionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.AgFoodPlatform/farmBeatsExtensionDefinitions",
			"2021-09-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AgFoodPlatform/farmBeatsExtensionDefinitions";
}
export interface farmBeatsExtensionDefinitionsComponentOutputs {
	readonly apiVersion: "2021-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AgFoodPlatform/farmBeatsExtensionDefinitions";
}
export interface farmBeatsExtensionDefinitionsComponentInputs {
	readonly name: string;
	readonly properties?: FarmBeatsExtensionProperties;
	readonly systemData?: SystemData;
}
export interface ApiProperties {
	readonly apiFreshnessWindowInMinutes?: number;
}
export interface DetailedInformation {
	readonly apiInputParameters?: string[];
	readonly apiName?: string;
	readonly customParameters?: string[];
	readonly platformParameters?: string[];
	readonly unitsSupported?: UnitSystemsInfo;
}
export interface ErrorAdditionalInfo {
	readonly info?: any;
	readonly type?: string;
}
export interface ErrorDetail {
	readonly additionalInfo?: ErrorAdditionalInfo[];
	readonly code?: string;
	readonly details?: ErrorDetail[];
	readonly message?: string;
	readonly target?: string;
}
export interface ErrorResponse {
	readonly error?: ErrorDetail;
}
export interface ExtensionInstallationRequestAdditionalApiProperties {
	readonly [key: string]: ApiProperties;
}
export interface ExtensionProperties {
	readonly additionalApiProperties?: ExtensionPropertiesAdditionalApiProperties;
	readonly extensionApiDocsLink?: string;
	readonly extensionAuthLink?: string;
	readonly extensionCategory?: string;
	readonly extensionId?: string;
	readonly installedExtensionVersion?: string;
}
export interface ExtensionPropertiesAdditionalApiProperties {
	readonly [key: string]: ApiProperties;
}
export interface FarmBeatsExtensionProperties {
	readonly description?: string;
	readonly detailedInformation?: DetailedInformation[];
	readonly extensionApiDocsLink?: string;
	readonly extensionAuthLink?: string;
	readonly extensionCategory?: string;
	readonly farmBeatsExtensionId?: string;
	readonly farmBeatsExtensionName?: string;
	readonly farmBeatsExtensionVersion?: string;
	readonly publisherId?: string;
	readonly targetResourceType?: string;
}
export interface FarmBeatsProperties {
	readonly instanceUri?: string;
	readonly privateEndpointConnections?: PrivateEndpointConnection;
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly publicNetworkAccess?: "Enabled" | "Hybrid";
	readonly sensorIntegration?: SensorIntegration;
}
export interface Identity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "SystemAssigned";
}
export interface PrivateEndpoint {
	readonly id?: string;
}
export interface PrivateEndpointConnection {
	readonly id?: string;
	readonly name?: string;
	readonly properties?: PrivateEndpointConnectionProperties;
	readonly systemData?: SystemData;
	readonly type?: string;
}
export interface PrivateEndpointConnectionProperties {
	readonly groupIds?: string[];
	readonly privateEndpoint?: PrivateEndpoint;
	readonly privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Succeeded";
}
export interface PrivateLinkResourceProperties {
	readonly groupId?: string;
	readonly requiredMembers?: string[];
	readonly requiredZoneNames?: string[];
}
export interface PrivateLinkServiceConnectionState {
	readonly actionsRequired?: string;
	readonly description?: string;
	readonly status?: "Approved" | "Pending" | "Rejected";
}
export interface SensorIntegration {
	readonly enabled?: string;
	readonly provisioningInfo?: ErrorResponse;
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export interface UnitSystemsInfo {
	readonly key: string;
	readonly values: string[];
}
export default {
	farmBeats: farmBeats,
	"farmBeats/extensions": farmBeats_extensions,
	"farmBeats/privateEndpointConnections": farmBeats_privateEndpointConnections,
	"farmBeats/privateLinkResources": farmBeats_privateLinkResources,
	farmBeatsExtensionDefinitions: farmBeatsExtensionDefinitions,
};

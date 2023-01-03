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
	readonly identity?: Identity | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: FarmBeatsProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly additionalApiProperties?: ExtensionInstallationRequestAdditionalApiProperties | undefined;
	readonly eTag?: string | undefined;
	readonly extensionVersion?: string | undefined;
	readonly name: string;
	readonly properties?: ExtensionProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly properties?: PrivateLinkResourceProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly properties?: FarmBeatsExtensionProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export interface ApiProperties {
	readonly apiFreshnessWindowInMinutes?: number | undefined;
}
export interface DetailedInformation {
	readonly apiInputParameters?: string[] | undefined;
	readonly apiName?: string | undefined;
	readonly customParameters?: string[] | undefined;
	readonly platformParameters?: string[] | undefined;
	readonly unitsSupported?: UnitSystemsInfo | undefined;
}
export interface ErrorAdditionalInfo {
	readonly info?: any | undefined;
	readonly type?: string | undefined;
}
export interface ErrorDetail {
	readonly additionalInfo?: ErrorAdditionalInfo[] | undefined;
	readonly code?: string | undefined;
	readonly details?: ErrorDetail[] | undefined;
	readonly message?: string | undefined;
	readonly target?: string | undefined;
}
export interface ErrorResponse {
	readonly error?: ErrorDetail | undefined;
}
export interface ExtensionInstallationRequestAdditionalApiProperties {
	readonly "[ key: string ]"?: ApiProperties | undefined;
}
export interface ExtensionProperties {
	readonly additionalApiProperties?: ExtensionPropertiesAdditionalApiProperties | undefined;
	readonly extensionApiDocsLink?: string | undefined;
	readonly extensionAuthLink?: string | undefined;
	readonly extensionCategory?: string | undefined;
	readonly extensionId?: string | undefined;
	readonly installedExtensionVersion?: string | undefined;
}
export interface ExtensionPropertiesAdditionalApiProperties {
	readonly "[ key: string ]"?: ApiProperties | undefined;
}
export interface FarmBeatsExtensionProperties {
	readonly description?: string | undefined;
	readonly detailedInformation?: DetailedInformation[] | undefined;
	readonly extensionApiDocsLink?: string | undefined;
	readonly extensionAuthLink?: string | undefined;
	readonly extensionCategory?: string | undefined;
	readonly farmBeatsExtensionId?: string | undefined;
	readonly farmBeatsExtensionName?: string | undefined;
	readonly farmBeatsExtensionVersion?: string | undefined;
	readonly publisherId?: string | undefined;
	readonly targetResourceType?: string | undefined;
}
export interface FarmBeatsProperties {
	readonly instanceUri?: string | undefined;
	readonly privateEndpointConnections?: PrivateEndpointConnection | undefined;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly publicNetworkAccess?: ("Enabled" | "Hybrid") | undefined;
	readonly sensorIntegration?: SensorIntegration | undefined;
}
export interface Identity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: "SystemAssigned" | undefined;
}
export interface PrivateEndpoint {
	readonly id?: string | undefined;
}
export interface PrivateEndpointConnection {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly type?: string | undefined;
}
export interface PrivateEndpointConnectionProperties {
	readonly groupIds?: string[] | undefined;
	readonly privateEndpoint?: PrivateEndpoint | undefined;
	readonly privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Succeeded") | undefined;
}
export interface PrivateLinkResourceProperties {
	readonly groupId?: string | undefined;
	readonly requiredMembers?: string[] | undefined;
	readonly requiredZoneNames?: string[] | undefined;
}
export interface PrivateLinkServiceConnectionState {
	readonly actionsRequired?: string | undefined;
	readonly description?: string | undefined;
	readonly status?: ("Approved" | "Pending" | "Rejected") | undefined;
}
export interface SensorIntegration {
	readonly enabled?: string | undefined;
	readonly provisioningInfo?: ErrorResponse | undefined;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
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

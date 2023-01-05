import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class services extends ArmResource<servicesComponentInputs> implements servicesComponentOutputs {
	constructor(entity: ADKEntity, options: servicesComponentInputs) {
		super(entity, options.name, "Microsoft.HealthcareApis/services", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.HealthcareApis/services";
}
export interface servicesComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.HealthcareApis/services";
}
export interface servicesComponentInputs {
	readonly etag?: string;
	readonly identity?: ServicesResourceIdentity;
	readonly kind: "fhir" | "fhir-R4";
	readonly location: string;
	readonly name: string;
	readonly properties?: ServicesProperties;
	readonly systemData?: SystemData;
	readonly tags?: ServicesResourceTags;
}
export class services_privateEndpointConnections
	extends ArmResource<services_privateEndpointConnectionsComponentInputs>
	implements services_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: services_privateEndpointConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.HealthcareApis/services/privateEndpointConnections", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.HealthcareApis/services/privateEndpointConnections";
}
export interface services_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.HealthcareApis/services/privateEndpointConnections";
}
export interface services_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties;
	readonly systemData?: SystemData;
}
export class services_privateLinkResources
	extends ArmResource<services_privateLinkResourcesComponentInputs>
	implements services_privateLinkResourcesComponentOutputs
{
	constructor(entity: ADKEntity, options: services_privateLinkResourcesComponentInputs) {
		super(entity, options.name, "Microsoft.HealthcareApis/services/privateLinkResources", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.HealthcareApis/services/privateLinkResources";
}
export interface services_privateLinkResourcesComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.HealthcareApis/services/privateLinkResources";
}
export interface services_privateLinkResourcesComponentInputs {
	readonly name: string;
	readonly properties?: PrivateLinkResourceProperties;
	readonly systemData?: SystemData;
}
export class workspaces extends ArmResource<workspacesComponentInputs> implements workspacesComponentOutputs {
	constructor(entity: ADKEntity, options: workspacesComponentInputs) {
		super(entity, options.name, "Microsoft.HealthcareApis/workspaces", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.HealthcareApis/workspaces";
}
export interface workspacesComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.HealthcareApis/workspaces";
}
export interface workspacesComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: WorkspaceProperties;
	readonly systemData?: SystemData;
	readonly tags?: ResourceTags;
}
export class workspaces_dicomservices
	extends ArmResource<workspaces_dicomservicesComponentInputs>
	implements workspaces_dicomservicesComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_dicomservicesComponentInputs) {
		super(entity, options.name, "Microsoft.HealthcareApis/workspaces/dicomservices", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.HealthcareApis/workspaces/dicomservices";
}
export interface workspaces_dicomservicesComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.HealthcareApis/workspaces/dicomservices";
}
export interface workspaces_dicomservicesComponentInputs {
	readonly etag?: string;
	readonly identity?: ServiceManagedIdentityIdentity;
	readonly location?: string;
	readonly name: string;
	readonly properties?: DicomServiceProperties;
	readonly systemData?: SystemData;
	readonly tags?: ResourceTags;
}
export class workspaces_fhirservices
	extends ArmResource<workspaces_fhirservicesComponentInputs>
	implements workspaces_fhirservicesComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_fhirservicesComponentInputs) {
		super(entity, options.name, "Microsoft.HealthcareApis/workspaces/fhirservices", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.HealthcareApis/workspaces/fhirservices";
}
export interface workspaces_fhirservicesComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.HealthcareApis/workspaces/fhirservices";
}
export interface workspaces_fhirservicesComponentInputs {
	readonly etag?: string;
	readonly identity?: ServiceManagedIdentityIdentity;
	readonly kind?: "fhir-R4" | "fhir-Stu3";
	readonly location?: string;
	readonly name: string;
	readonly properties?: FhirServiceProperties;
	readonly systemData?: SystemData;
	readonly tags?: ResourceTags;
}
export class workspaces_iotconnectors
	extends ArmResource<workspaces_iotconnectorsComponentInputs>
	implements workspaces_iotconnectorsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_iotconnectorsComponentInputs) {
		super(entity, options.name, "Microsoft.HealthcareApis/workspaces/iotconnectors", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.HealthcareApis/workspaces/iotconnectors";
}
export interface workspaces_iotconnectorsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.HealthcareApis/workspaces/iotconnectors";
}
export interface workspaces_iotconnectorsComponentInputs {
	readonly etag?: string;
	readonly identity?: ServiceManagedIdentityIdentity;
	readonly location?: string;
	readonly name: string;
	readonly properties?: IotConnectorProperties;
	readonly systemData?: SystemData;
	readonly tags?: ResourceTags;
}
export class workspaces_iotconnectors_fhirdestinations
	extends ArmResource<workspaces_iotconnectors_fhirdestinationsComponentInputs>
	implements workspaces_iotconnectors_fhirdestinationsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_iotconnectors_fhirdestinationsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.HealthcareApis/workspaces/iotconnectors/fhirdestinations",
			"2021-11-01",
			options,
		);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.HealthcareApis/workspaces/iotconnectors/fhirdestinations";
}
export interface workspaces_iotconnectors_fhirdestinationsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.HealthcareApis/workspaces/iotconnectors/fhirdestinations";
}
export interface workspaces_iotconnectors_fhirdestinationsComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties: IotFhirDestinationProperties;
	readonly systemData?: SystemData;
}
export class workspaces_privateEndpointConnections
	extends ArmResource<workspaces_privateEndpointConnectionsComponentInputs>
	implements workspaces_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_privateEndpointConnectionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.HealthcareApis/workspaces/privateEndpointConnections",
			"2021-11-01",
			options,
		);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.HealthcareApis/workspaces/privateEndpointConnections";
}
export interface workspaces_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.HealthcareApis/workspaces/privateEndpointConnections";
}
export interface workspaces_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties;
	readonly systemData?: SystemData;
}
export class workspaces_privateLinkResources
	extends ArmResource<workspaces_privateLinkResourcesComponentInputs>
	implements workspaces_privateLinkResourcesComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_privateLinkResourcesComponentInputs) {
		super(entity, options.name, "Microsoft.HealthcareApis/workspaces/privateLinkResources", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.HealthcareApis/workspaces/privateLinkResources";
}
export interface workspaces_privateLinkResourcesComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.HealthcareApis/workspaces/privateLinkResources";
}
export interface workspaces_privateLinkResourcesComponentInputs {
	readonly name: string;
	readonly properties?: PrivateLinkResourceProperties;
	readonly systemData?: SystemData;
}
export interface DicomServiceAuthenticationConfiguration {
	readonly audiences?: string[];
	readonly authority?: string;
}
export interface DicomServiceProperties {
	readonly authenticationConfiguration?: DicomServiceAuthenticationConfiguration;
	readonly privateEndpointConnections?: PrivateEndpointConnection[];
	readonly provisioningState?:
		| "Accepted"
		| "Canceled"
		| "Creating"
		| "Deleting"
		| "Deprovisioned"
		| "Failed"
		| "Moving"
		| "Succeeded"
		| "Suspended"
		| "SystemMaintenance"
		| "Updating"
		| "Verifying"
		| "Warned";
	readonly publicNetworkAccess?: "Disabled" | "Enabled";
	readonly serviceUrl?: string;
}
export interface FhirServiceAccessPolicyEntry {
	readonly objectId: string;
}
export interface FhirServiceAcrConfiguration {
	readonly loginServers?: string[];
	readonly ociArtifacts?: ServiceOciArtifactEntry[];
}
export interface FhirServiceAuthenticationConfiguration {
	readonly audience?: string;
	readonly authority?: string;
	readonly smartProxyEnabled?: boolean;
}
export interface FhirServiceCorsConfiguration {
	readonly allowCredentials?: boolean;
	readonly headers?: string[];
	readonly maxAge?: number;
	readonly methods?: string[];
	readonly origins?: string[];
}
export interface FhirServiceExportConfiguration {
	readonly storageAccountName?: string;
}
export interface FhirServiceProperties {
	readonly accessPolicies?: FhirServiceAccessPolicyEntry[];
	readonly acrConfiguration?: FhirServiceAcrConfiguration;
	readonly authenticationConfiguration?: FhirServiceAuthenticationConfiguration;
	readonly corsConfiguration?: FhirServiceCorsConfiguration;
	readonly eventState?: "Disabled" | "Enabled" | "Updating";
	readonly exportConfiguration?: FhirServiceExportConfiguration;
	readonly privateEndpointConnections?: PrivateEndpointConnection[];
	readonly provisioningState?:
		| "Accepted"
		| "Canceled"
		| "Creating"
		| "Deleting"
		| "Deprovisioned"
		| "Failed"
		| "Moving"
		| "Succeeded"
		| "Suspended"
		| "SystemMaintenance"
		| "Updating"
		| "Verifying"
		| "Warned";
	readonly publicNetworkAccess?: "Disabled" | "Enabled";
	readonly resourceVersionPolicyConfiguration?: ResourceVersionPolicyConfiguration;
}
export interface IotConnectorProperties {
	readonly deviceMapping?: IotMappingProperties;
	readonly ingestionEndpointConfiguration?: IotEventHubIngestionEndpointConfiguration;
	readonly provisioningState?:
		| "Accepted"
		| "Canceled"
		| "Creating"
		| "Deleting"
		| "Deprovisioned"
		| "Failed"
		| "Moving"
		| "Succeeded"
		| "Suspended"
		| "SystemMaintenance"
		| "Updating"
		| "Verifying"
		| "Warned";
}
export interface IotEventHubIngestionEndpointConfiguration {
	readonly consumerGroup?: string;
	readonly eventHubName?: string;
	readonly fullyQualifiedEventHubNamespace?: string;
}
export interface IotFhirDestinationProperties {
	readonly fhirMapping: IotMappingProperties;
	readonly fhirServiceResourceId: string;
	readonly provisioningState?:
		| "Accepted"
		| "Canceled"
		| "Creating"
		| "Deleting"
		| "Deprovisioned"
		| "Failed"
		| "Moving"
		| "Succeeded"
		| "Suspended"
		| "SystemMaintenance"
		| "Updating"
		| "Verifying"
		| "Warned";
	readonly resourceIdentityResolutionType: "Create" | "Lookup";
}
export interface IotMappingProperties {
	readonly content?: any;
}
export interface PrivateEndpoint {
	readonly id?: string;
}
export interface PrivateEndpointConnection {
	readonly id?: string;
	readonly name?: string;
	readonly properties?: PrivateEndpointConnectionProperties;
	readonly type?: string;
}
export interface PrivateEndpointConnectionProperties {
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
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface ResourceVersionPolicyConfiguration {
	readonly default?: "no-version" | "versioned" | "versioned-update";
	readonly resourceTypeOverrides?: ResourceVersionPolicyConfigurationResourceTypeOverrides;
}
export interface ResourceVersionPolicyConfigurationResourceTypeOverrides {
	readonly [key: string]: "no-version" | "versioned" | "versioned-update";
}
export interface ServiceAccessPolicyEntry {
	readonly objectId: string;
}
export interface ServiceAcrConfigurationInfo {
	readonly loginServers?: string[];
	readonly ociArtifacts?: ServiceOciArtifactEntry[];
}
export interface ServiceAuthenticationConfigurationInfo {
	readonly audience?: string;
	readonly authority?: string;
	readonly smartProxyEnabled?: boolean;
}
export interface ServiceCorsConfigurationInfo {
	readonly allowCredentials?: boolean;
	readonly headers?: string[];
	readonly maxAge?: number;
	readonly methods?: string[];
	readonly origins?: string[];
}
export interface ServiceCosmosDbConfigurationInfo {
	readonly keyVaultKeyUri?: string;
	readonly offerThroughput?: number;
}
export interface ServiceExportConfigurationInfo {
	readonly storageAccountName?: string;
}
export interface ServiceManagedIdentityIdentity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type: "None" | "SystemAssigned" | "SystemAssigned,UserAssigned" | "UserAssigned";
	readonly userAssignedIdentities?: UserAssignedIdentities;
}
export interface ServiceOciArtifactEntry {
	readonly digest?: string;
	readonly imageName?: string;
	readonly loginServer?: string;
}
export interface ServicesProperties {
	readonly accessPolicies?: ServiceAccessPolicyEntry[];
	readonly acrConfiguration?: ServiceAcrConfigurationInfo;
	readonly authenticationConfiguration?: ServiceAuthenticationConfigurationInfo;
	readonly corsConfiguration?: ServiceCorsConfigurationInfo;
	readonly cosmosDbConfiguration?: ServiceCosmosDbConfigurationInfo;
	readonly exportConfiguration?: ServiceExportConfigurationInfo;
	readonly privateEndpointConnections?: PrivateEndpointConnection[];
	readonly provisioningState?:
		| "Accepted"
		| "Canceled"
		| "Creating"
		| "Deleting"
		| "Deprovisioned"
		| "Failed"
		| "Moving"
		| "Succeeded"
		| "Suspended"
		| "SystemMaintenance"
		| "Updating"
		| "Verifying"
		| "Warned";
	readonly publicNetworkAccess?: "Disabled" | "Enabled";
}
export interface ServicesResourceIdentity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "None" | "SystemAssigned";
}
export interface ServicesResourceTags {
	readonly [key: string]: string;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface UserAssignedIdentities {
	readonly [key: string]: UserAssignedIdentity;
}
export interface UserAssignedIdentity {
	readonly clientId?: string;
	readonly principalId?: string;
}
export interface WorkspaceProperties {
	readonly privateEndpointConnections?: PrivateEndpointConnection[];
	readonly provisioningState?:
		| "Accepted"
		| "Canceled"
		| "Creating"
		| "Deleting"
		| "Deprovisioned"
		| "Failed"
		| "Moving"
		| "Succeeded"
		| "Suspended"
		| "SystemMaintenance"
		| "Updating"
		| "Verifying"
		| "Warned";
	readonly publicNetworkAccess?: "Disabled" | "Enabled";
}
export default {
	services: services,
	"services/privateEndpointConnections": services_privateEndpointConnections,
	"services/privateLinkResources": services_privateLinkResources,
	workspaces: workspaces,
	"workspaces/dicomservices": workspaces_dicomservices,
	"workspaces/fhirservices": workspaces_fhirservices,
	"workspaces/iotconnectors": workspaces_iotconnectors,
	"workspaces/iotconnectors/fhirdestinations": workspaces_iotconnectors_fhirdestinations,
	"workspaces/privateEndpointConnections": workspaces_privateEndpointConnections,
	"workspaces/privateLinkResources": workspaces_privateLinkResources,
};

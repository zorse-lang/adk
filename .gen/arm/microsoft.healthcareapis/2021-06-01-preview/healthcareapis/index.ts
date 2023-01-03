import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class services extends ArmResource<servicesComponentInputs> implements servicesComponentOutputs {
	constructor(entity: ADKEntity, options: servicesComponentInputs) {
		super(entity, options.name, "Microsoft.HealthcareApis/services", "2021-06-01-preview", options);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.HealthcareApis/services";
}
export interface servicesComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.HealthcareApis/services";
}
export interface servicesComponentInputs {
	readonly etag?: string | undefined;
	readonly identity?: ServicesResourceIdentity | undefined;
	readonly kind: "fhir" | "fhir-R4";
	readonly location: string;
	readonly name: string;
	readonly properties?: ServicesProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: ServicesResourceTags | undefined;
}
export class services_privateEndpointConnections
	extends ArmResource<services_privateEndpointConnectionsComponentInputs>
	implements services_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: services_privateEndpointConnectionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.HealthcareApis/services/privateEndpointConnections",
			"2021-06-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.HealthcareApis/services/privateEndpointConnections";
}
export interface services_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.HealthcareApis/services/privateEndpointConnections";
}
export interface services_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class services_privateLinkResources
	extends ArmResource<services_privateLinkResourcesComponentInputs>
	implements services_privateLinkResourcesComponentOutputs
{
	constructor(entity: ADKEntity, options: services_privateLinkResourcesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.HealthcareApis/services/privateLinkResources",
			"2021-06-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.HealthcareApis/services/privateLinkResources";
}
export interface services_privateLinkResourcesComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.HealthcareApis/services/privateLinkResources";
}
export interface services_privateLinkResourcesComponentInputs {
	readonly name: string;
	readonly properties?: PrivateLinkResourceProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class workspaces extends ArmResource<workspacesComponentInputs> implements workspacesComponentOutputs {
	constructor(entity: ADKEntity, options: workspacesComponentInputs) {
		super(entity, options.name, "Microsoft.HealthcareApis/workspaces", "2021-06-01-preview", options);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.HealthcareApis/workspaces";
}
export interface workspacesComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.HealthcareApis/workspaces";
}
export interface workspacesComponentInputs {
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: WorkspaceProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class workspaces_dicomservices
	extends ArmResource<workspaces_dicomservicesComponentInputs>
	implements workspaces_dicomservicesComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_dicomservicesComponentInputs) {
		super(entity, options.name, "Microsoft.HealthcareApis/workspaces/dicomservices", "2021-06-01-preview", options);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.HealthcareApis/workspaces/dicomservices";
}
export interface workspaces_dicomservicesComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.HealthcareApis/workspaces/dicomservices";
}
export interface workspaces_dicomservicesComponentInputs {
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: DicomServiceProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class workspaces_fhirservices
	extends ArmResource<workspaces_fhirservicesComponentInputs>
	implements workspaces_fhirservicesComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_fhirservicesComponentInputs) {
		super(entity, options.name, "Microsoft.HealthcareApis/workspaces/fhirservices", "2021-06-01-preview", options);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.HealthcareApis/workspaces/fhirservices";
}
export interface workspaces_fhirservicesComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.HealthcareApis/workspaces/fhirservices";
}
export interface workspaces_fhirservicesComponentInputs {
	readonly etag?: string | undefined;
	readonly identity?: ServiceManagedIdentityIdentity | undefined;
	readonly kind?: ("fhir-R4" | "fhir-Stu3") | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: FhirServiceProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class workspaces_iotconnectors
	extends ArmResource<workspaces_iotconnectorsComponentInputs>
	implements workspaces_iotconnectorsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaces_iotconnectorsComponentInputs) {
		super(entity, options.name, "Microsoft.HealthcareApis/workspaces/iotconnectors", "2021-06-01-preview", options);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.HealthcareApis/workspaces/iotconnectors";
}
export interface workspaces_iotconnectorsComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.HealthcareApis/workspaces/iotconnectors";
}
export interface workspaces_iotconnectorsComponentInputs {
	readonly etag?: string | undefined;
	readonly identity?: ServiceManagedIdentityIdentity | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: IotConnectorProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: ResourceTags | undefined;
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
			"2021-06-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.HealthcareApis/workspaces/iotconnectors/fhirdestinations";
}
export interface workspaces_iotconnectors_fhirdestinationsComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.HealthcareApis/workspaces/iotconnectors/fhirdestinations";
}
export interface workspaces_iotconnectors_fhirdestinationsComponentInputs {
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: IotFhirDestinationProperties;
	readonly systemData?: SystemData | undefined;
}
export interface DicomServiceAuthenticationConfiguration {
	readonly audiences?: string[] | undefined;
	readonly authority?: string | undefined;
}
export interface DicomServiceProperties {
	readonly authenticationConfiguration?: DicomServiceAuthenticationConfiguration | undefined;
	readonly provisioningState?:
		| (
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
				| "Warned"
		  )
		| undefined;
	readonly serviceUrl?: string | undefined;
}
export interface FhirServiceAccessPolicyEntry {
	readonly objectId: string;
}
export interface FhirServiceAcrConfiguration {
	readonly loginServers?: string[] | undefined;
}
export interface FhirServiceAuthenticationConfiguration {
	readonly audience?: string | undefined;
	readonly authority?: string | undefined;
	readonly smartProxyEnabled?: boolean | undefined;
}
export interface FhirServiceCorsConfiguration {
	readonly allowCredentials?: boolean | undefined;
	readonly headers?: string[] | undefined;
	readonly maxAge?: number | undefined;
	readonly methods?: string[] | undefined;
	readonly origins?: string[] | undefined;
}
export interface FhirServiceExportConfiguration {
	readonly storageAccountName?: string | undefined;
}
export interface FhirServiceProperties {
	readonly accessPolicies?: FhirServiceAccessPolicyEntry[] | undefined;
	readonly acrConfiguration?: FhirServiceAcrConfiguration | undefined;
	readonly authenticationConfiguration?: FhirServiceAuthenticationConfiguration | undefined;
	readonly corsConfiguration?: FhirServiceCorsConfiguration | undefined;
	readonly exportConfiguration?: FhirServiceExportConfiguration | undefined;
	readonly provisioningState?:
		| (
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
				| "Warned"
		  )
		| undefined;
}
export interface IotConnectorProperties {
	readonly deviceMapping?: IotMappingProperties | undefined;
	readonly ingestionEndpointConfiguration?: IotEventHubIngestionEndpointConfiguration | undefined;
	readonly provisioningState?:
		| (
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
				| "Warned"
		  )
		| undefined;
}
export interface IotEventHubIngestionEndpointConfiguration {
	readonly consumerGroup?: string | undefined;
	readonly eventHubName?: string | undefined;
	readonly fullyQualifiedEventHubNamespace?: string | undefined;
}
export interface IotFhirDestinationProperties {
	readonly fhirMapping: IotMappingProperties;
	readonly fhirServiceResourceId: string;
	readonly provisioningState?:
		| (
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
				| "Warned"
		  )
		| undefined;
	readonly resourceIdentityResolutionType: "Create" | "Lookup";
}
export interface IotMappingProperties {
	readonly content?: any | undefined;
}
export interface PrivateEndpoint {
	readonly id?: string | undefined;
}
export interface PrivateEndpointConnection {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
	readonly type?: string | undefined;
}
export interface PrivateEndpointConnectionProperties {
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
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ServiceAccessPolicyEntry {
	readonly objectId: string;
}
export interface ServiceAcrConfigurationInfo {
	readonly loginServers?: string[] | undefined;
}
export interface ServiceAuthenticationConfigurationInfo {
	readonly audience?: string | undefined;
	readonly authority?: string | undefined;
	readonly smartProxyEnabled?: boolean | undefined;
}
export interface ServiceCorsConfigurationInfo {
	readonly allowCredentials?: boolean | undefined;
	readonly headers?: string[] | undefined;
	readonly maxAge?: number | undefined;
	readonly methods?: string[] | undefined;
	readonly origins?: string[] | undefined;
}
export interface ServiceCosmosDbConfigurationInfo {
	readonly keyVaultKeyUri?: string | undefined;
	readonly offerThroughput?: number | undefined;
}
export interface ServiceExportConfigurationInfo {
	readonly storageAccountName?: string | undefined;
}
export interface ServiceManagedIdentityIdentity {
	readonly type?: ("None" | "SystemAssigned") | undefined;
}
export interface ServicesProperties {
	readonly accessPolicies?: ServiceAccessPolicyEntry[] | undefined;
	readonly acrConfiguration?: ServiceAcrConfigurationInfo | undefined;
	readonly authenticationConfiguration?: ServiceAuthenticationConfigurationInfo | undefined;
	readonly corsConfiguration?: ServiceCorsConfigurationInfo | undefined;
	readonly cosmosDbConfiguration?: ServiceCosmosDbConfigurationInfo | undefined;
	readonly exportConfiguration?: ServiceExportConfigurationInfo | undefined;
	readonly privateEndpointConnections?: PrivateEndpointConnection[] | undefined;
	readonly provisioningState?:
		| (
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
				| "Warned"
		  )
		| undefined;
	readonly publicNetworkAccess?: ("Disabled" | "Enabled") | undefined;
}
export interface ServicesResourceIdentity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: ("None" | "SystemAssigned") | undefined;
}
export interface ServicesResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface WorkspaceProperties {
	readonly provisioningState?:
		| (
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
				| "Warned"
		  )
		| undefined;
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
};

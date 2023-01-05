import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class services extends ArmResource<servicesComponentInputs> implements servicesComponentOutputs {
	constructor(entity: ADKEntity, options: servicesComponentInputs) {
		super(entity, options.name, "Microsoft.HealthcareApis/services", "2021-01-11", options);
	}
	public readonly apiVersion: "2021-01-11";
	public readonly id: string;
	public readonly type: "Microsoft.HealthcareApis/services";
}
export interface servicesComponentOutputs {
	readonly apiVersion: "2021-01-11";
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
		super(entity, options.name, "Microsoft.HealthcareApis/services/privateEndpointConnections", "2021-01-11", options);
	}
	public readonly apiVersion: "2021-01-11";
	public readonly id: string;
	public readonly type: "Microsoft.HealthcareApis/services/privateEndpointConnections";
}
export interface services_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2021-01-11";
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
		super(entity, options.name, "Microsoft.HealthcareApis/services/privateLinkResources", "2021-01-11", options);
	}
	public readonly apiVersion: "2021-01-11";
	public readonly id: string;
	public readonly type: "Microsoft.HealthcareApis/services/privateLinkResources";
}
export interface services_privateLinkResourcesComponentOutputs {
	readonly apiVersion: "2021-01-11";
	readonly id: string;
	readonly type: "Microsoft.HealthcareApis/services/privateLinkResources";
}
export interface services_privateLinkResourcesComponentInputs {
	readonly name: string;
	readonly properties?: PrivateLinkResourceProperties;
	readonly systemData?: SystemData;
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
export interface ServiceAccessPolicyEntry {
	readonly objectId: string;
}
export interface ServiceAcrConfigurationInfo {
	readonly loginServers?: string[];
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
		| "Succeeded"
		| "Updating"
		| "Verifying";
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
export default {
	services: services,
	"services/privateEndpointConnections": services_privateEndpointConnections,
	"services/privateLinkResources": services_privateLinkResources,
};

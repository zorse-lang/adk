import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class services extends ArmResource<servicesComponentInputs> implements servicesComponentOutputs {
	constructor(entity: ADKEntity, options: servicesComponentInputs) {
		super(entity, options.name, "Microsoft.HealthcareApis/services", "2020-03-30", options);
	}
	public readonly apiVersion: "2020-03-30";
	public readonly id: string;
	public readonly type: "Microsoft.HealthcareApis/services";
}
export interface servicesComponentOutputs {
	readonly apiVersion: "2020-03-30";
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
	readonly tags?: ServicesResourceTags | undefined;
}
export class services_privateEndpointConnections
	extends ArmResource<services_privateEndpointConnectionsComponentInputs>
	implements services_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: services_privateEndpointConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.HealthcareApis/services/privateEndpointConnections", "2020-03-30", options);
	}
	public readonly apiVersion: "2020-03-30";
	public readonly id: string;
	public readonly type: "Microsoft.HealthcareApis/services/privateEndpointConnections";
}
export interface services_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2020-03-30";
	readonly id: string;
	readonly type: "Microsoft.HealthcareApis/services/privateEndpointConnections";
}
export interface services_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
}
export class services_privateLinkResources
	extends ArmResource<services_privateLinkResourcesComponentInputs>
	implements services_privateLinkResourcesComponentOutputs
{
	constructor(entity: ADKEntity, options: services_privateLinkResourcesComponentInputs) {
		super(entity, options.name, "Microsoft.HealthcareApis/services/privateLinkResources", "2020-03-30", options);
	}
	public readonly apiVersion: "2020-03-30";
	public readonly id: string;
	public readonly type: "Microsoft.HealthcareApis/services/privateLinkResources";
}
export interface services_privateLinkResourcesComponentOutputs {
	readonly apiVersion: "2020-03-30";
	readonly id: string;
	readonly type: "Microsoft.HealthcareApis/services/privateLinkResources";
}
export interface services_privateLinkResourcesComponentInputs {
	readonly name: string;
	readonly properties?: PrivateLinkResourceProperties | undefined;
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
export interface ServiceAccessPolicyEntry {
	readonly objectId: string;
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
export interface ServicesProperties {
	readonly accessPolicies?: ServiceAccessPolicyEntry[] | undefined;
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
				| "Succeeded"
				| "Updating"
				| "Verifying"
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
export default {
	services: services,
	"services/privateEndpointConnections": services_privateEndpointConnections,
	"services/privateLinkResources": services_privateLinkResources,
};

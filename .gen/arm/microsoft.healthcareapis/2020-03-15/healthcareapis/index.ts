import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class services extends ArmResource<servicesComponentInputs> implements servicesComponentOutputs {
	constructor(entity: ADKEntity, options: servicesComponentInputs) {
		super(entity, options.name, "Microsoft.HealthcareApis/services", "2020-03-15", options);
	}
	public readonly apiVersion: "2020-03-15";
	public readonly id: string;
	public readonly type: "Microsoft.HealthcareApis/services";
}
export interface servicesComponentOutputs {
	readonly apiVersion: "2020-03-15";
	readonly id: string;
	readonly type: "Microsoft.HealthcareApis/services";
}
export interface servicesComponentInputs {
	readonly etag?: string;
	readonly identity?: ResourceIdentity;
	readonly kind: "fhir" | "fhir-R4";
	readonly location: string;
	readonly name: string;
	readonly properties?: ServicesProperties;
	readonly tags?: ResourceTags;
}
export interface ResourceIdentity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "None" | "SystemAssigned";
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface ServiceAccessPolicyEntry {
	readonly objectId: string;
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
	readonly authenticationConfiguration?: ServiceAuthenticationConfigurationInfo;
	readonly corsConfiguration?: ServiceCorsConfigurationInfo;
	readonly cosmosDbConfiguration?: ServiceCosmosDbConfigurationInfo;
	readonly exportConfiguration?: ServiceExportConfigurationInfo;
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
}
export default {
	services: services,
};

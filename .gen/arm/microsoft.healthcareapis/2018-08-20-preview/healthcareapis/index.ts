import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class services extends ArmResource<servicesComponentInputs> implements servicesComponentOutputs {
	constructor(entity: ADKEntity, options: servicesComponentInputs) {
		super(entity, options.name, "Microsoft.HealthcareApis/services", "2018-08-20-preview", options);
	}
	public readonly apiVersion: "2018-08-20-preview";
	public readonly id: string;
	public readonly type: "Microsoft.HealthcareApis/services";
}
export interface servicesComponentOutputs {
	readonly apiVersion: "2018-08-20-preview";
	readonly id: string;
	readonly type: "Microsoft.HealthcareApis/services";
}
export interface servicesComponentInputs {
	readonly etag?: string | undefined;
	readonly identity?: ResourceIdentity | undefined;
	readonly kind: "fhir" | "fhir-R4";
	readonly location: string;
	readonly name: string;
	readonly properties?: ServicesProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export interface ResourceIdentity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: ("None" | "SystemAssigned") | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
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
	readonly offerThroughput?: number | undefined;
}
export interface ServicesProperties {
	readonly accessPolicies?: ServiceAccessPolicyEntry[] | undefined;
	readonly authenticationConfiguration?: ServiceAuthenticationConfigurationInfo | undefined;
	readonly corsConfiguration?: ServiceCorsConfigurationInfo | undefined;
	readonly cosmosDbConfiguration?: ServiceCosmosDbConfigurationInfo | undefined;
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
}
export default {
	services: services,
};

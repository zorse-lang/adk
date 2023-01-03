import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class b2cDirectories extends ArmResource<b2cDirectoriesComponentInputs> implements b2cDirectoriesComponentOutputs {
	constructor(entity: ADKEntity, options: b2cDirectoriesComponentInputs) {
		super(entity, options.name, "Microsoft.AzureActiveDirectory/b2cDirectories", "2019-01-01-preview", options);
	}
	public readonly apiVersion: "2019-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AzureActiveDirectory/b2cDirectories";
}
export interface b2cDirectoriesComponentOutputs {
	readonly apiVersion: "2019-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AzureActiveDirectory/b2cDirectories";
}
export interface b2cDirectoriesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: CreateTenantRequestBodyPropertiesOrB2CTenantResourceProperties;
	readonly sku: B2CResourceSKU;
	readonly tags?: CreateTenantRequestBodyTags | undefined;
}
export interface B2CResourceSKU {
	readonly name?: ("PremiumP1" | "PremiumP2") | undefined;
	readonly tier?: "A0" | undefined;
}
export interface B2CTenantResourcePropertiesBillingConfig {
	readonly billingType?: "Auths" | undefined;
	readonly effectiveStartDateUtc?: string | undefined;
}
export interface CreateTenantProperties {
	readonly countryCode?: string | undefined;
	readonly displayName?: string | undefined;
}
export interface CreateTenantRequestBodyPropertiesOrB2CTenantResourceProperties {
	readonly billingConfig?: B2CTenantResourcePropertiesBillingConfig | undefined;
	readonly createTenantProperties?: CreateTenantProperties | undefined;
	readonly tenantId?: string | undefined;
}
export interface CreateTenantRequestBodyTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	b2cDirectories: b2cDirectories,
};

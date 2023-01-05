import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class b2cDirectories extends ArmResource<b2cDirectoriesComponentInputs> implements b2cDirectoriesComponentOutputs {
	constructor(entity: ADKEntity, options: b2cDirectoriesComponentInputs) {
		super(entity, options.name, "Microsoft.AzureActiveDirectory/b2cDirectories", "2021-04-01", options);
	}
	public readonly apiVersion: "2021-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.AzureActiveDirectory/b2cDirectories";
}
export interface b2cDirectoriesComponentOutputs {
	readonly apiVersion: "2021-04-01";
	readonly id: string;
	readonly type: "Microsoft.AzureActiveDirectory/b2cDirectories";
}
export interface b2cDirectoriesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: CreateTenantRequestBodyPropertiesOrB2CTenantResourceProperties;
	readonly sku: B2CResourceSKU;
	readonly systemData?: SystemData;
	readonly tags?: CreateTenantRequestBodyTags;
}
export class guestUsages extends ArmResource<guestUsagesComponentInputs> implements guestUsagesComponentOutputs {
	constructor(entity: ADKEntity, options: guestUsagesComponentInputs) {
		super(entity, options.name, "Microsoft.AzureActiveDirectory/guestUsages", "2021-04-01", options);
	}
	public readonly apiVersion: "2021-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.AzureActiveDirectory/guestUsages";
}
export interface guestUsagesComponentOutputs {
	readonly apiVersion: "2021-04-01";
	readonly id: string;
	readonly type: "Microsoft.AzureActiveDirectory/guestUsages";
}
export interface guestUsagesComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: GuestUsagesResourceProperties;
	readonly systemData?: SystemData;
	readonly tags?: GuestUsagesResourceTags;
}
export interface B2CResourceSKU {
	readonly name?: "PremiumP1" | "PremiumP2" | "Standard";
	readonly tier?: "A0";
}
export interface B2CTenantResourcePropertiesBillingConfig {
	readonly billingType?: "Auths" | "MAU";
	readonly effectiveStartDateUtc?: string;
}
export interface CreateTenantProperties {
	readonly countryCode?: string;
	readonly displayName?: string;
}
export interface CreateTenantRequestBodyPropertiesOrB2CTenantResourceProperties {
	readonly billingConfig?: B2CTenantResourcePropertiesBillingConfig;
	readonly createTenantProperties?: CreateTenantProperties;
	readonly tenantId?: string;
}
export interface CreateTenantRequestBodyTags {
	readonly [key: string]: string;
}
export interface GuestUsagesResourceProperties {
	readonly tenantId?: string;
}
export interface GuestUsagesResourceTags {
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
	b2cDirectories: b2cDirectories,
	guestUsages: guestUsages,
};

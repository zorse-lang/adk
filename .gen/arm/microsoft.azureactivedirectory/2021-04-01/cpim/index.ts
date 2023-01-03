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
	readonly systemData?: SystemData | undefined;
	readonly tags?: CreateTenantRequestBodyTags | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: GuestUsagesResourceProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: GuestUsagesResourceTags | undefined;
}
export interface B2CResourceSKU {
	readonly name?: ("PremiumP1" | "PremiumP2" | "Standard") | undefined;
	readonly tier?: "A0" | undefined;
}
export interface B2CTenantResourcePropertiesBillingConfig {
	readonly billingType?: ("Auths" | "MAU") | undefined;
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
export interface GuestUsagesResourceProperties {
	readonly tenantId?: string | undefined;
}
export interface GuestUsagesResourceTags {
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
export default {
	b2cDirectories: b2cDirectories,
	guestUsages: guestUsages,
};

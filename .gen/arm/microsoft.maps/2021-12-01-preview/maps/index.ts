import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class accounts extends ArmResource<accountsComponentInputs> implements accountsComponentOutputs {
	constructor(entity: ADKEntity, options: accountsComponentInputs) {
		super(entity, options.name, "Microsoft.Maps/accounts", "2021-12-01-preview", options);
	}
	public readonly apiVersion: "2021-12-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Maps/accounts";
}
export interface accountsComponentOutputs {
	readonly apiVersion: "2021-12-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Maps/accounts";
}
export interface accountsComponentInputs {
	readonly identity?: ManagedServiceIdentity;
	readonly kind?: "Gen1" | "Gen2";
	readonly location: string;
	readonly name: string;
	readonly properties?: MapsAccountProperties;
	readonly sku: Sku;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class accounts_creators
	extends ArmResource<accounts_creatorsComponentInputs>
	implements accounts_creatorsComponentOutputs
{
	constructor(entity: ADKEntity, options: accounts_creatorsComponentInputs) {
		super(entity, options.name, "Microsoft.Maps/accounts/creators", "2021-12-01-preview", options);
	}
	public readonly apiVersion: "2021-12-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Maps/accounts/creators";
}
export interface accounts_creatorsComponentOutputs {
	readonly apiVersion: "2021-12-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Maps/accounts/creators";
}
export interface accounts_creatorsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: CreatorProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export function listKeys(resource: accounts): MapsAccountKeys {
	if (resource.apiVersion !== "2021-12-01-preview") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Maps/accounts") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listSas(resource: accounts, input: AccountSasParameters): MapsAccountSasToken {
	if (resource.apiVersion !== "2021-12-01-preview") {
		throw new Error(`listSas is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Maps/accounts") {
		throw new Error(`listSas is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AccountSasParameters {
	readonly expiry: string;
	readonly maxRatePerSecond: number;
	readonly principalId: string;
	readonly regions?: string[];
	readonly signingKey: "primaryKey" | "secondaryKey";
	readonly start: string;
}
export interface Components1Jq1T4ISchemasManagedserviceidentityPropertiesUserassignedidentitiesAdditionalproperties {
	readonly clientId?: string;
	readonly principalId?: string;
}
export interface CorsRule {
	readonly allowedOrigins: string[];
}
export interface CorsRules {
	readonly corsRules?: CorsRule[];
}
export interface CreatorProperties {
	readonly provisioningState?: string;
	readonly storageUnits: number;
}
export interface LinkedResource {
	readonly id: string;
	readonly uniqueName: string;
}
export interface ManagedServiceIdentity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "None" | "SystemAssigned" | "SystemAssigned, UserAssigned";
	readonly userAssignedIdentities?: ManagedServiceIdentityUserAssignedIdentities;
}
export interface ManagedServiceIdentityUserAssignedIdentities {
	readonly [key: string]: Components1Jq1T4ISchemasManagedserviceidentityPropertiesUserassignedidentitiesAdditionalproperties;
}
export interface MapsAccountKeys {
	readonly primaryKey?: string;
	readonly primaryKeyLastUpdated?: string;
	readonly secondaryKey?: string;
	readonly secondaryKeyLastUpdated?: string;
}
export interface MapsAccountProperties {
	readonly cors?: CorsRules;
	readonly disableLocalAuth?: boolean;
	readonly linkedResources?: LinkedResource[];
	readonly provisioningState?: string;
	readonly uniqueId?: string;
}
export interface MapsAccountSasToken {
	readonly accountSasToken?: string;
}
export interface Sku {
	readonly name: "G2" | "S0" | "S1";
	readonly tier?: string;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export default {
	accounts: accounts,
	"accounts/creators": accounts_creators,
};

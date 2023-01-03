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
	readonly identity?: ManagedServiceIdentity | undefined;
	readonly kind?: ("Gen1" | "Gen2") | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: MapsAccountProperties | undefined;
	readonly sku: Sku;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly regions?: string[] | undefined;
	readonly signingKey: "primaryKey" | "secondaryKey";
	readonly start: string;
}
export interface Components1Jq1T4ISchemasManagedserviceidentityPropertiesUserassignedidentitiesAdditionalproperties {
	readonly clientId?: string | undefined;
	readonly principalId?: string | undefined;
}
export interface CorsRule {
	readonly allowedOrigins: string[];
}
export interface CorsRules {
	readonly corsRules?: CorsRule[] | undefined;
}
export interface CreatorProperties {
	readonly provisioningState?: string | undefined;
	readonly storageUnits: number;
}
export interface LinkedResource {
	readonly id: string;
	readonly uniqueName: string;
}
export interface ManagedServiceIdentity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: ("None" | "SystemAssigned" | "SystemAssigned, UserAssigned") | undefined;
	readonly userAssignedIdentities?: ManagedServiceIdentityUserAssignedIdentities | undefined;
}
export interface ManagedServiceIdentityUserAssignedIdentities {
	readonly "[ key: string ]"?:
		| Components1Jq1T4ISchemasManagedserviceidentityPropertiesUserassignedidentitiesAdditionalproperties
		| undefined;
}
export interface MapsAccountKeys {
	readonly primaryKey?: string | undefined;
	readonly primaryKeyLastUpdated?: string | undefined;
	readonly secondaryKey?: string | undefined;
	readonly secondaryKeyLastUpdated?: string | undefined;
}
export interface MapsAccountProperties {
	readonly cors?: CorsRules | undefined;
	readonly disableLocalAuth?: boolean | undefined;
	readonly linkedResources?: LinkedResource[] | undefined;
	readonly provisioningState?: string | undefined;
	readonly uniqueId?: string | undefined;
}
export interface MapsAccountSasToken {
	readonly accountSasToken?: string | undefined;
}
export interface Sku {
	readonly name: "G2" | "S0" | "S1";
	readonly tier?: string | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	accounts: accounts,
	"accounts/creators": accounts_creators,
};

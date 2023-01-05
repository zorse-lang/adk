import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class accounts extends ArmResource<accountsComponentInputs> implements accountsComponentOutputs {
	constructor(entity: ADKEntity, options: accountsComponentInputs) {
		super(entity, options.name, "Microsoft.Maps/accounts", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Maps/accounts";
}
export interface accountsComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Maps/accounts";
}
export interface accountsComponentInputs {
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
		super(entity, options.name, "Microsoft.Maps/accounts/creators", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Maps/accounts/creators";
}
export interface accounts_creatorsComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Maps/accounts/creators";
}
export interface accounts_creatorsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: CreatorProperties;
	readonly tags?: TrackedResourceTags;
}
export function listKeys(resource: accounts): MapsAccountKeys {
	if (resource.apiVersion !== "2021-02-01") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Maps/accounts") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface CreatorProperties {
	readonly provisioningState?: string;
	readonly storageUnits: number;
}
export interface MapsAccountKeys {
	readonly primaryKey?: string;
	readonly primaryKeyLastUpdated?: string;
	readonly secondaryKey?: string;
	readonly secondaryKeyLastUpdated?: string;
}
export interface MapsAccountProperties {
	readonly disableLocalAuth?: boolean;
	readonly provisioningState?: string;
	readonly uniqueId?: string;
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

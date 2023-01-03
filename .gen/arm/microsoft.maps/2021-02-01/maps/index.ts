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
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly provisioningState?: string | undefined;
	readonly storageUnits: number;
}
export interface MapsAccountKeys {
	readonly primaryKey?: string | undefined;
	readonly primaryKeyLastUpdated?: string | undefined;
	readonly secondaryKey?: string | undefined;
	readonly secondaryKeyLastUpdated?: string | undefined;
}
export interface MapsAccountProperties {
	readonly disableLocalAuth?: boolean | undefined;
	readonly provisioningState?: string | undefined;
	readonly uniqueId?: string | undefined;
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

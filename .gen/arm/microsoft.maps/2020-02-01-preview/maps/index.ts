import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class accounts extends ArmResource<accountsComponentInputs> implements accountsComponentOutputs {
	constructor(entity: ADKEntity, options: accountsComponentInputs) {
		super(entity, options.name, "Microsoft.Maps/accounts", "2020-02-01-preview", options);
	}
	public readonly apiVersion: "2020-02-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Maps/accounts";
}
export interface accountsComponentOutputs {
	readonly apiVersion: "2020-02-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Maps/accounts";
}
export interface accountsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: MapsAccountProperties | undefined;
	readonly sku: Sku;
	readonly systemData?: SystemData | undefined;
	readonly tags?: MapsAccountCreateParametersTags | undefined;
}
export class accounts_creators
	extends ArmResource<accounts_creatorsComponentInputs>
	implements accounts_creatorsComponentOutputs
{
	constructor(entity: ADKEntity, options: accounts_creatorsComponentInputs) {
		super(entity, options.name, "Microsoft.Maps/accounts/creators", "2020-02-01-preview", options);
	}
	public readonly apiVersion: "2020-02-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Maps/accounts/creators";
}
export interface accounts_creatorsComponentOutputs {
	readonly apiVersion: "2020-02-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Maps/accounts/creators";
}
export interface accounts_creatorsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: CreatorProperties | undefined;
	readonly tags?: CreatorCreateParametersTags | undefined;
}
export class accounts_privateAtlases
	extends ArmResource<accounts_privateAtlasesComponentInputs>
	implements accounts_privateAtlasesComponentOutputs
{
	constructor(entity: ADKEntity, options: accounts_privateAtlasesComponentInputs) {
		super(entity, options.name, "Microsoft.Maps/accounts/privateAtlases", "2020-02-01-preview", options);
	}
	public readonly apiVersion: "2020-02-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Maps/accounts/privateAtlases";
}
export interface accounts_privateAtlasesComponentOutputs {
	readonly apiVersion: "2020-02-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Maps/accounts/privateAtlases";
}
export interface accounts_privateAtlasesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: PrivateAtlasProperties | undefined;
	readonly tags?: PrivateAtlasCreateParametersTags | undefined;
}
export function listKeys(resource: accounts): MapsAccountKeys {
	if (resource.apiVersion !== "2020-02-01-preview") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Maps/accounts") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface CreatorCreateParametersTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface CreatorProperties {
	readonly provisioningState?: string | undefined;
}
export interface MapsAccountCreateParametersTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface MapsAccountKeys {
	readonly id?: string | undefined;
	readonly primaryKey?: string | undefined;
	readonly secondaryKey?: string | undefined;
}
export interface MapsAccountProperties {
	readonly "x-ms-client-id"?: string | undefined;
}
export interface PrivateAtlasCreateParametersTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface PrivateAtlasProperties {
	readonly provisioningState?: string | undefined;
}
export interface Sku {
	readonly name: string;
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
export default {
	accounts: accounts,
	"accounts/creators": accounts_creators,
	"accounts/privateAtlases": accounts_privateAtlases,
};

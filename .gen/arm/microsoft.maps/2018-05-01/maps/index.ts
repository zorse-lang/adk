import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class accounts extends ArmResource<accountsComponentInputs> implements accountsComponentOutputs {
	constructor(entity: ADKEntity, options: accountsComponentInputs) {
		super(entity, options.name, "Microsoft.Maps/accounts", "2018-05-01", options);
	}
	public readonly apiVersion: "2018-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Maps/accounts";
}
export interface accountsComponentOutputs {
	readonly apiVersion: "2018-05-01";
	readonly id: string;
	readonly type: "Microsoft.Maps/accounts";
}
export interface accountsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: MapsAccountProperties | undefined;
	readonly sku: Sku;
	readonly tags?: MapsAccountCreateParametersTags | undefined;
}
export function listKeys(resource: accounts): MapsAccountKeys {
	if (resource.apiVersion !== "2018-05-01") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Maps/accounts") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
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
export interface Sku {
	readonly name: string;
	readonly tier?: string | undefined;
}
export default {
	accounts: accounts,
};

import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class configurationStores
	extends ArmResource<configurationStoresComponentInputs>
	implements configurationStoresComponentOutputs
{
	constructor(entity: ADKEntity, options: configurationStoresComponentInputs) {
		super(entity, options.name, "Microsoft.AppConfiguration/configurationStores", "2019-02-01-preview", options);
	}
	public readonly apiVersion: "2019-02-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AppConfiguration/configurationStores";
}
export interface configurationStoresComponentOutputs {
	readonly apiVersion: "2019-02-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AppConfiguration/configurationStores";
}
export interface configurationStoresComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: ConfigurationStoreProperties;
	readonly tags?: ResourceTags;
}
export function listKeys(resource: configurationStores): ApiKeyListResult {
	if (resource.apiVersion !== "2019-02-01-preview") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.AppConfiguration/configurationStores") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listKeyValue(resource: configurationStores, input: ListKeyValueParameters): KeyValue {
	if (resource.apiVersion !== "2019-02-01-preview") {
		throw new Error(`listKeyValue is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.AppConfiguration/configurationStores") {
		throw new Error(`listKeyValue is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface ApiKey {
	readonly connectionString?: string;
	readonly id?: string;
	readonly lastModified?: string;
	readonly name?: string;
	readonly readOnly?: boolean;
	readonly value?: string;
}
export interface ApiKeyListResult {
	readonly nextLink?: string;
	readonly value?: ApiKey[];
}
export interface ConfigurationStoreProperties {
	readonly creationDate?: string;
	readonly endpoint?: string;
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface KeyValue {
	readonly contentType?: string;
	readonly eTag?: string;
	readonly key?: string;
	readonly label?: string;
	readonly lastModified?: string;
	readonly locked?: boolean;
	readonly tags?: KeyValueTags;
	readonly value?: string;
}
export interface KeyValueTags {
	readonly [key: string]: string;
}
export interface ListKeyValueParameters {
	readonly key: string;
	readonly label?: string;
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export default {
	configurationStores: configurationStores,
};

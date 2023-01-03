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
	readonly properties?: ConfigurationStoreProperties | undefined;
	readonly tags?: ResourceTags | undefined;
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
	readonly connectionString?: string | undefined;
	readonly id?: string | undefined;
	readonly lastModified?: string | undefined;
	readonly name?: string | undefined;
	readonly readOnly?: boolean | undefined;
	readonly value?: string | undefined;
}
export interface ApiKeyListResult {
	readonly nextLink?: string | undefined;
	readonly value?: ApiKey[] | undefined;
}
export interface ConfigurationStoreProperties {
	readonly creationDate?: string | undefined;
	readonly endpoint?: string | undefined;
	readonly provisioningState?: ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface KeyValue {
	readonly contentType?: string | undefined;
	readonly eTag?: string | undefined;
	readonly key?: string | undefined;
	readonly label?: string | undefined;
	readonly lastModified?: string | undefined;
	readonly locked?: boolean | undefined;
	readonly tags?: KeyValueTags | undefined;
	readonly value?: string | undefined;
}
export interface KeyValueTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ListKeyValueParameters {
	readonly key: string;
	readonly label?: string | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	configurationStores: configurationStores,
};

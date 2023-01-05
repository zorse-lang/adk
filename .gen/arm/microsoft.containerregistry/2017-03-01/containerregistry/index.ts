import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class registries extends ArmResource<registriesComponentInputs> implements registriesComponentOutputs {
	constructor(entity: ADKEntity, options: registriesComponentInputs) {
		super(entity, options.name, "Microsoft.ContainerRegistry/registries", "2017-03-01", options);
	}
	public readonly apiVersion: "2017-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.ContainerRegistry/registries";
}
export interface registriesComponentOutputs {
	readonly apiVersion: "2017-03-01";
	readonly id: string;
	readonly type: "Microsoft.ContainerRegistry/registries";
}
export interface registriesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: RegistryPropertiesCreateParametersOrRegistryProperties;
	readonly sku: Sku;
	readonly tags?: RegistryCreateParametersTags;
}
export function listCredentials(resource: registries): RegistryListCredentialsResult {
	if (resource.apiVersion !== "2017-03-01") {
		throw new Error(`listCredentials is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.ContainerRegistry/registries") {
		throw new Error(`listCredentials is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface RegistryCreateParametersTags {
	readonly [key: string]: string;
}
export interface RegistryListCredentialsResult {
	readonly passwords?: RegistryPassword[];
	readonly username?: string;
}
export interface RegistryPassword {
	readonly name?: "password";
	readonly value?: string;
}
export interface RegistryPropertiesCreateParametersOrRegistryProperties {
	readonly adminUserEnabled?: boolean;
	readonly creationDate?: string;
	readonly loginServer?: string;
	readonly provisioningState?: "Creating";
	readonly storageAccount: StorageAccountParametersOrStorageAccountProperties;
}
export interface Sku {
	readonly name: string;
	readonly tier?: "Basic";
}
export interface StorageAccountParametersOrStorageAccountProperties {
	readonly accessKey: string;
	readonly name: string;
}
export default {
	registries: registries,
};

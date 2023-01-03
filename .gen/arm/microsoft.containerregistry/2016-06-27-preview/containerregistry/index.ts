import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class registries extends ArmResource<registriesComponentInputs> implements registriesComponentOutputs {
	constructor(entity: ADKEntity, options: registriesComponentInputs) {
		super(entity, options.name, "Microsoft.ContainerRegistry/registries", "2016-06-27-preview", options);
	}
	public readonly apiVersion: "2016-06-27-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ContainerRegistry/registries";
}
export interface registriesComponentOutputs {
	readonly apiVersion: "2016-06-27-preview";
	readonly id: string;
	readonly type: "Microsoft.ContainerRegistry/registries";
}
export interface registriesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: RegistryProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export interface RegistryProperties {
	readonly adminUserEnabled?: boolean | undefined;
	readonly creationDate?: string | undefined;
	readonly loginServer?: string | undefined;
	readonly storageAccount: StorageAccountProperties;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface StorageAccountProperties {
	readonly accessKey: string;
	readonly name: string;
}
export default {
	registries: registries,
};

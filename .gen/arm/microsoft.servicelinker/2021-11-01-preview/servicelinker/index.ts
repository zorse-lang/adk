import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class linkers extends ArmResource<linkersComponentInputs> implements linkersComponentOutputs {
	constructor(entity: ADKEntity, options: linkersComponentInputs) {
		super(entity, options.name, "Microsoft.ServiceLinker/linkers", "2021-11-01-preview", options);
	}
	public readonly apiVersion: "2021-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceLinker/linkers";
}
export interface linkersComponentOutputs {
	readonly apiVersion: "2021-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ServiceLinker/linkers";
}
export interface linkersComponentInputs {
	readonly name: string;
	readonly properties: LinkerProperties;
	readonly systemData?: SystemData;
}
export function listConfigurations(resource: linkers): SourceConfigurationResult {
	if (resource.apiVersion !== "2021-11-01-preview") {
		throw new Error(`listConfigurations is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.ServiceLinker/linkers") {
		throw new Error(`listConfigurations is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AuthInfoBase {}
export interface LinkerProperties {
	readonly authInfo?: AuthInfoBase;
	readonly clientType?:
		| "django"
		| "dotnet"
		| "go"
		| "java"
		| "nodejs"
		| "none"
		| "php"
		| "python"
		| "ruby"
		| "springBoot";
	readonly provisioningState?: string;
	readonly secretStore?: SecretStore;
	readonly targetId?: string;
	readonly vNetSolution?: VNetSolution;
}
export interface SecretStore {
	readonly keyVaultId?: string;
}
export interface SourceConfiguration {
	readonly name?: string;
	readonly value?: string;
}
export interface SourceConfigurationResult {
	readonly configurations?: SourceConfiguration[];
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface VNetSolution {
	readonly type?: "privateLink" | "serviceEndpoint";
}
export default {
	linkers: linkers,
};

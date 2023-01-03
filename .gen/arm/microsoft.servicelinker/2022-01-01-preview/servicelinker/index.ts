import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class linkers extends ArmResource<linkersComponentInputs> implements linkersComponentOutputs {
	constructor(entity: ADKEntity, options: linkersComponentInputs) {
		super(entity, options.name, "Microsoft.ServiceLinker/linkers", "2022-01-01-preview", options);
	}
	public readonly apiVersion: "2022-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceLinker/linkers";
}
export interface linkersComponentOutputs {
	readonly apiVersion: "2022-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ServiceLinker/linkers";
}
export interface linkersComponentInputs {
	readonly name: string;
	readonly properties: LinkerProperties;
	readonly systemData?: SystemData | undefined;
}
export function listConfigurations(resource: linkers): SourceConfigurationResult {
	if (resource.apiVersion !== "2022-01-01-preview") {
		throw new Error(`listConfigurations is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.ServiceLinker/linkers") {
		throw new Error(`listConfigurations is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AuthInfoBase {}
export interface AzureResourcePropertiesBase {}
export interface LinkerProperties {
	readonly authInfo?: AuthInfoBase | undefined;
	readonly clientType?:
		| ("django" | "dotnet" | "go" | "java" | "nodejs" | "none" | "php" | "python" | "ruby" | "springBoot")
		| undefined;
	readonly provisioningState?: string | undefined;
	readonly scope?: string | undefined;
	readonly secretStore?: SecretStore | undefined;
	readonly targetService?: TargetServiceBase | undefined;
	readonly vNetSolution?: VNetSolution | undefined;
}
export interface SecretInfoBase {}
export interface SecretStore {
	readonly keyVaultId?: string | undefined;
}
export interface SourceConfiguration {
	readonly name?: string | undefined;
	readonly value?: string | undefined;
}
export interface SourceConfigurationResult {
	readonly configurations?: SourceConfiguration[] | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface TargetServiceBase {}
export interface VNetSolution {
	readonly type?: ("privateLink" | "serviceEndpoint") | undefined;
}
export default {
	linkers: linkers,
};

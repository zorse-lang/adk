import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class dryruns extends ArmResource<dryrunsComponentInputs> implements dryrunsComponentOutputs {
	constructor(entity: ADKEntity, options: dryrunsComponentInputs) {
		super(entity, options.name, "Microsoft.ServiceLinker/dryruns", "2022-11-01-preview", options);
	}
	public readonly apiVersion: "2022-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceLinker/dryruns";
}
export interface dryrunsComponentOutputs {
	readonly apiVersion: "2022-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ServiceLinker/dryruns";
}
export interface dryrunsComponentInputs {
	readonly name: string;
	readonly properties?: DryrunProperties;
	readonly systemData?: SystemData;
}
export class linkers extends ArmResource<linkersComponentInputs> implements linkersComponentOutputs {
	constructor(entity: ADKEntity, options: linkersComponentInputs) {
		super(entity, options.name, "Microsoft.ServiceLinker/linkers", "2022-11-01-preview", options);
	}
	public readonly apiVersion: "2022-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceLinker/linkers";
}
export interface linkersComponentOutputs {
	readonly apiVersion: "2022-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ServiceLinker/linkers";
}
export interface linkersComponentInputs {
	readonly name: string;
	readonly properties: LinkerProperties;
	readonly systemData?: SystemData;
}
export class locations_connectors
	extends ArmResource<locations_connectorsComponentInputs>
	implements locations_connectorsComponentOutputs
{
	constructor(entity: ADKEntity, options: locations_connectorsComponentInputs) {
		super(entity, options.name, "Microsoft.ServiceLinker/locations/connectors", "2022-11-01-preview", options);
	}
	public readonly apiVersion: "2022-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceLinker/locations/connectors";
}
export interface locations_connectorsComponentOutputs {
	readonly apiVersion: "2022-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ServiceLinker/locations/connectors";
}
export interface locations_connectorsComponentInputs {
	readonly name: string;
	readonly properties: LinkerProperties;
	readonly systemData?: SystemData;
}
export class locations_dryruns
	extends ArmResource<locations_dryrunsComponentInputs>
	implements locations_dryrunsComponentOutputs
{
	constructor(entity: ADKEntity, options: locations_dryrunsComponentInputs) {
		super(entity, options.name, "Microsoft.ServiceLinker/locations/dryruns", "2022-11-01-preview", options);
	}
	public readonly apiVersion: "2022-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ServiceLinker/locations/dryruns";
}
export interface locations_dryrunsComponentOutputs {
	readonly apiVersion: "2022-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ServiceLinker/locations/dryruns";
}
export interface locations_dryrunsComponentInputs {
	readonly name: string;
	readonly properties?: DryrunProperties;
	readonly systemData?: SystemData;
}
export function listConfigurations(resource: linkers): ConfigurationResult {
	if (resource.apiVersion !== "2022-11-01-preview") {
		throw new Error(`listConfigurations is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.ServiceLinker/linkers") {
		throw new Error(`listConfigurations is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AuthInfoBase {}
export interface AzureResourcePropertiesBase {}
export interface ConfigurationInfo {
	readonly action?: "Internal" | "enable" | "optOut";
	readonly additionalConfigurations?: ConfigurationInfoAdditionalConfigurations;
	readonly customizedKeys?: ConfigurationInfoCustomizedKeys;
	readonly deleteOrUpdateBehavior?: "Default" | "ForcedCleanup";
}
export interface ConfigurationInfoAdditionalConfigurations {
	readonly [key: string]: string;
}
export interface ConfigurationInfoCustomizedKeys {
	readonly [key: string]: string;
}
export interface ConfigurationResult {
	readonly configurations?: SourceConfiguration[];
}
export interface DryrunOperationPreview {
	readonly action?: string;
	readonly description?: string;
	readonly name?: string;
	readonly operationType?: "configAuth" | "configConnection" | "configNetwork";
	readonly scope?: string;
}
export interface DryrunParameters {}
export interface DryrunPrerequisiteResult {}
export interface DryrunProperties {
	readonly operationPreviews?: DryrunOperationPreview[];
	readonly parameters?: DryrunParameters;
	readonly prerequisiteResults?: DryrunPrerequisiteResult[];
	readonly provisioningState?: string;
}
export interface FirewallRules {
	readonly azureServices?: "false" | "true";
	readonly callerClientIP?: "false" | "true";
	readonly ipRanges?: string[];
}
export interface LinkerProperties {
	readonly authInfo?: AuthInfoBase;
	readonly clientType?:
		| "django"
		| "dotnet"
		| "go"
		| "java"
		| "kafka-springBoot"
		| "nodejs"
		| "none"
		| "php"
		| "python"
		| "ruby"
		| "springBoot";
	readonly configurationInfo?: ConfigurationInfo;
	readonly provisioningState?: string;
	readonly publicNetworkSolution?: PublicNetworkSolution;
	readonly scope?: string;
	readonly secretStore?: SecretStore;
	readonly targetService?: TargetServiceBase;
	readonly vNetSolution?: VNetSolution;
}
export interface PublicNetworkSolution {
	readonly action?: "Internal" | "enable" | "optOut";
	readonly deleteOrUpdateBehavior?: "Default" | "ForcedCleanup";
	readonly firewallRules?: FirewallRules;
}
export interface SecretInfoBase {}
export interface SecretStore {
	readonly keyVaultId?: string;
	readonly keyVaultSecretName?: string;
}
export interface SourceConfiguration {
	readonly name?: string;
	readonly value?: string;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface TargetServiceBase {}
export interface VNetSolution {
	readonly deleteOrUpdateBehavior?: "Default" | "ForcedCleanup";
	readonly type?: "privateLink" | "serviceEndpoint";
}
export default {
	dryruns: dryruns,
	linkers: linkers,
	"locations/connectors": locations_connectors,
	"locations/dryruns": locations_dryruns,
};

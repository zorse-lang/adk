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
	readonly properties?: DryrunProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly systemData?: SystemData | undefined;
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
	readonly systemData?: SystemData | undefined;
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
	readonly properties?: DryrunProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly action?: ("Internal" | "enable" | "optOut") | undefined;
	readonly additionalConfigurations?: ConfigurationInfoAdditionalConfigurations | undefined;
	readonly customizedKeys?: ConfigurationInfoCustomizedKeys | undefined;
	readonly deleteOrUpdateBehavior?: ("Default" | "ForcedCleanup") | undefined;
}
export interface ConfigurationInfoAdditionalConfigurations {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ConfigurationInfoCustomizedKeys {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ConfigurationResult {
	readonly configurations?: SourceConfiguration[] | undefined;
}
export interface DryrunOperationPreview {
	readonly action?: string | undefined;
	readonly description?: string | undefined;
	readonly name?: string | undefined;
	readonly operationType?: ("configAuth" | "configConnection" | "configNetwork") | undefined;
	readonly scope?: string | undefined;
}
export interface DryrunParameters {}
export interface DryrunPrerequisiteResult {}
export interface DryrunProperties {
	readonly operationPreviews?: DryrunOperationPreview[] | undefined;
	readonly parameters?: DryrunParameters | undefined;
	readonly prerequisiteResults?: DryrunPrerequisiteResult[] | undefined;
	readonly provisioningState?: string | undefined;
}
export interface FirewallRules {
	readonly azureServices?: ("false" | "true") | undefined;
	readonly callerClientIP?: ("false" | "true") | undefined;
	readonly ipRanges?: string[] | undefined;
}
export interface LinkerProperties {
	readonly authInfo?: AuthInfoBase | undefined;
	readonly clientType?:
		| (
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
				| "springBoot"
		  )
		| undefined;
	readonly configurationInfo?: ConfigurationInfo | undefined;
	readonly provisioningState?: string | undefined;
	readonly publicNetworkSolution?: PublicNetworkSolution | undefined;
	readonly scope?: string | undefined;
	readonly secretStore?: SecretStore | undefined;
	readonly targetService?: TargetServiceBase | undefined;
	readonly vNetSolution?: VNetSolution | undefined;
}
export interface PublicNetworkSolution {
	readonly action?: ("Internal" | "enable" | "optOut") | undefined;
	readonly deleteOrUpdateBehavior?: ("Default" | "ForcedCleanup") | undefined;
	readonly firewallRules?: FirewallRules | undefined;
}
export interface SecretInfoBase {}
export interface SecretStore {
	readonly keyVaultId?: string | undefined;
	readonly keyVaultSecretName?: string | undefined;
}
export interface SourceConfiguration {
	readonly name?: string | undefined;
	readonly value?: string | undefined;
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
	readonly deleteOrUpdateBehavior?: ("Default" | "ForcedCleanup") | undefined;
	readonly type?: ("privateLink" | "serviceEndpoint") | undefined;
}
export default {
	dryruns: dryruns,
	linkers: linkers,
	"locations/connectors": locations_connectors,
	"locations/dryruns": locations_dryruns,
};

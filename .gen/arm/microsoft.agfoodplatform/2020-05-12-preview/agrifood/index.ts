import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class farmBeats extends ArmResource<farmBeatsComponentInputs> implements farmBeatsComponentOutputs {
	constructor(entity: ADKEntity, options: farmBeatsComponentInputs) {
		super(entity, options.name, "Microsoft.AgFoodPlatform/farmBeats", "2020-05-12-preview", options);
	}
	public readonly apiVersion: "2020-05-12-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AgFoodPlatform/farmBeats";
}
export interface farmBeatsComponentOutputs {
	readonly apiVersion: "2020-05-12-preview";
	readonly id: string;
	readonly type: "Microsoft.AgFoodPlatform/farmBeats";
}
export interface farmBeatsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: FarmBeatsProperties;
	readonly sku?: Sku;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class farmBeats_extensions
	extends ArmResource<farmBeats_extensionsComponentInputs>
	implements farmBeats_extensionsComponentOutputs
{
	constructor(entity: ADKEntity, options: farmBeats_extensionsComponentInputs) {
		super(entity, options.name, "Microsoft.AgFoodPlatform/farmBeats/extensions", "2020-05-12-preview", options);
	}
	public readonly apiVersion: "2020-05-12-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AgFoodPlatform/farmBeats/extensions";
}
export interface farmBeats_extensionsComponentOutputs {
	readonly apiVersion: "2020-05-12-preview";
	readonly id: string;
	readonly type: "Microsoft.AgFoodPlatform/farmBeats/extensions";
}
export interface farmBeats_extensionsComponentInputs {
	readonly eTag?: string;
	readonly name: string;
	readonly properties?: ExtensionProperties;
	readonly systemData?: SystemData;
}
export class farmBeatsExtensionDefinitions
	extends ArmResource<farmBeatsExtensionDefinitionsComponentInputs>
	implements farmBeatsExtensionDefinitionsComponentOutputs
{
	constructor(entity: ADKEntity, options: farmBeatsExtensionDefinitionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.AgFoodPlatform/farmBeatsExtensionDefinitions",
			"2020-05-12-preview",
			options,
		);
	}
	public readonly apiVersion: "2020-05-12-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AgFoodPlatform/farmBeatsExtensionDefinitions";
}
export interface farmBeatsExtensionDefinitionsComponentOutputs {
	readonly apiVersion: "2020-05-12-preview";
	readonly id: string;
	readonly type: "Microsoft.AgFoodPlatform/farmBeatsExtensionDefinitions";
}
export interface farmBeatsExtensionDefinitionsComponentInputs {
	readonly name: string;
	readonly properties?: FarmBeatsExtensionProperties;
	readonly systemData?: SystemData;
}
export interface DetailedInformation {
	readonly apiInputParameters?: string[];
	readonly apiName?: string;
	readonly customParameters?: string[];
	readonly platformParameters?: string[];
	readonly unitsSupported?: UnitSystemsInfo;
}
export interface ExtensionProperties {
	readonly extensionApiDocsLink?: string;
	readonly extensionAuthLink?: string;
	readonly extensionCategory?: string;
	readonly extensionId?: string;
	readonly installedExtensionVersion?: string;
}
export interface FarmBeatsExtensionProperties {
	readonly description?: string;
	readonly detailedInformation?: DetailedInformation[];
	readonly extensionApiDocsLink?: string;
	readonly extensionAuthLink?: string;
	readonly extensionCategory?: string;
	readonly farmBeatsExtensionId?: string;
	readonly farmBeatsExtensionName?: string;
	readonly farmBeatsExtensionVersion?: string;
	readonly publisherId?: string;
	readonly targetResourceType?: string;
}
export interface FarmBeatsProperties {
	readonly instanceUri?: string;
	readonly provisioningState?: "Failed" | "Succeeded";
}
export interface Sku {
	readonly capacity?: number;
	readonly family?: string;
	readonly name: string;
	readonly size?: string;
	readonly tier?: "Basic" | "Free" | "Premium";
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export interface UnitSystemsInfo {
	readonly key: string;
	readonly values: string[];
}
export default {
	farmBeats: farmBeats,
	"farmBeats/extensions": farmBeats_extensions,
	farmBeatsExtensionDefinitions: farmBeatsExtensionDefinitions,
};

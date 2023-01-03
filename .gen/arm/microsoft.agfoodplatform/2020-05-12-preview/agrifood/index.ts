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
	readonly properties?: FarmBeatsProperties | undefined;
	readonly sku?: Sku | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly eTag?: string | undefined;
	readonly name: string;
	readonly properties?: ExtensionProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly properties?: FarmBeatsExtensionProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export interface DetailedInformation {
	readonly apiInputParameters?: string[] | undefined;
	readonly apiName?: string | undefined;
	readonly customParameters?: string[] | undefined;
	readonly platformParameters?: string[] | undefined;
	readonly unitsSupported?: UnitSystemsInfo | undefined;
}
export interface ExtensionProperties {
	readonly extensionApiDocsLink?: string | undefined;
	readonly extensionAuthLink?: string | undefined;
	readonly extensionCategory?: string | undefined;
	readonly extensionId?: string | undefined;
	readonly installedExtensionVersion?: string | undefined;
}
export interface FarmBeatsExtensionProperties {
	readonly description?: string | undefined;
	readonly detailedInformation?: DetailedInformation[] | undefined;
	readonly extensionApiDocsLink?: string | undefined;
	readonly extensionAuthLink?: string | undefined;
	readonly extensionCategory?: string | undefined;
	readonly farmBeatsExtensionId?: string | undefined;
	readonly farmBeatsExtensionName?: string | undefined;
	readonly farmBeatsExtensionVersion?: string | undefined;
	readonly publisherId?: string | undefined;
	readonly targetResourceType?: string | undefined;
}
export interface FarmBeatsProperties {
	readonly instanceUri?: string | undefined;
	readonly provisioningState?: ("Failed" | "Succeeded") | undefined;
}
export interface Sku {
	readonly capacity?: number | undefined;
	readonly family?: string | undefined;
	readonly name: string;
	readonly size?: string | undefined;
	readonly tier?: ("Basic" | "Free" | "Premium") | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
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

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
export interface FarmBeatsProperties {
	readonly instanceUri?: string;
	readonly provisioningState?: "Failed";
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity";
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export interface ExtensionProperties {
	readonly extensionApiDocsLink?: string;
	readonly extensionAuthLink?: string;
	readonly extensionCategory?: string;
	readonly extensionId?: string;
	readonly installedExtensionVersion?: string;
}
export default {
	farmBeats: farmBeats,
	"farmBeats/extensions": farmBeats_extensions,
};

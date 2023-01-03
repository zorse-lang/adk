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
export interface FarmBeatsProperties {
	readonly instanceUri?: string | undefined;
	readonly provisioningState?: "Failed" | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity") | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ExtensionProperties {
	readonly extensionApiDocsLink?: string | undefined;
	readonly extensionAuthLink?: string | undefined;
	readonly extensionCategory?: string | undefined;
	readonly extensionId?: string | undefined;
	readonly installedExtensionVersion?: string | undefined;
}
export default {
	farmBeats: farmBeats,
	"farmBeats/extensions": farmBeats_extensions,
};

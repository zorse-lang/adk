import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class customLocations
	extends ArmResource<customLocationsComponentInputs>
	implements customLocationsComponentOutputs
{
	constructor(entity: ADKEntity, options: customLocationsComponentInputs) {
		super(entity, options.name, "Microsoft.ExtendedLocation/customLocations", "2021-03-15-preview", options);
	}
	public readonly apiVersion: "2021-03-15-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ExtendedLocation/customLocations";
}
export interface customLocationsComponentOutputs {
	readonly apiVersion: "2021-03-15-preview";
	readonly id: string;
	readonly type: "Microsoft.ExtendedLocation/customLocations";
}
export interface customLocationsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: CustomLocationProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export interface CustomLocationProperties {
	readonly authentication?: CustomLocationPropertiesAuthentication | undefined;
	readonly clusterExtensionIds?: string[] | undefined;
	readonly displayName?: string | undefined;
	readonly hostResourceId?: string | undefined;
	readonly hostType?: "Kubernetes" | undefined;
	readonly namespace?: string | undefined;
	readonly provisioningState?: string | undefined;
}
export interface CustomLocationPropertiesAuthentication {
	readonly type?: string | undefined;
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
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	customLocations: customLocations,
};

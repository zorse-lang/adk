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
	readonly properties?: CustomLocationProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export interface CustomLocationProperties {
	readonly authentication?: CustomLocationPropertiesAuthentication;
	readonly clusterExtensionIds?: string[];
	readonly displayName?: string;
	readonly hostResourceId?: string;
	readonly hostType?: "Kubernetes";
	readonly namespace?: string;
	readonly provisioningState?: string;
}
export interface CustomLocationPropertiesAuthentication {
	readonly type?: string;
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
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export default {
	customLocations: customLocations,
};

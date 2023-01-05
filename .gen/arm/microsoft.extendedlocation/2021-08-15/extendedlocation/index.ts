import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class customLocations
	extends ArmResource<customLocationsComponentInputs>
	implements customLocationsComponentOutputs
{
	constructor(entity: ADKEntity, options: customLocationsComponentInputs) {
		super(entity, options.name, "Microsoft.ExtendedLocation/customLocations", "2021-08-15", options);
	}
	public readonly apiVersion: "2021-08-15";
	public readonly id: string;
	public readonly type: "Microsoft.ExtendedLocation/customLocations";
}
export interface customLocationsComponentOutputs {
	readonly apiVersion: "2021-08-15";
	readonly id: string;
	readonly type: "Microsoft.ExtendedLocation/customLocations";
}
export interface customLocationsComponentInputs {
	readonly identity?: Identity;
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
export interface Identity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "None" | "SystemAssigned";
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

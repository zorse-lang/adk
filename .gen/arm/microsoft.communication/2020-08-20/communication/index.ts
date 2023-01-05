import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class communicationServices
	extends ArmResource<communicationServicesComponentInputs>
	implements communicationServicesComponentOutputs
{
	constructor(entity: ADKEntity, options: communicationServicesComponentInputs) {
		super(entity, options.name, "Microsoft.Communication/communicationServices", "2020-08-20", options);
	}
	public readonly apiVersion: "2020-08-20";
	public readonly id: string;
	public readonly type: "Microsoft.Communication/communicationServices";
}
export interface communicationServicesComponentOutputs {
	readonly apiVersion: "2020-08-20";
	readonly id: string;
	readonly type: "Microsoft.Communication/communicationServices";
}
export interface communicationServicesComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: CommunicationServiceProperties;
	readonly systemData?: SystemData;
	readonly tags?: TaggedResourceTags;
}
export function listKeys(resource: communicationServices): CommunicationServiceKeys {
	if (resource.apiVersion !== "2020-08-20") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Communication/communicationServices") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface CommunicationServiceKeys {
	readonly primaryConnectionString?: string;
	readonly primaryKey?: string;
	readonly secondaryConnectionString?: string;
	readonly secondaryKey?: string;
}
export interface CommunicationServiceProperties {
	readonly dataLocation: string;
	readonly hostName?: string;
	readonly immutableResourceId?: string;
	readonly notificationHubId?: string;
	readonly provisioningState?:
		| "Canceled"
		| "Creating"
		| "Deleting"
		| "Failed"
		| "Moving"
		| "Running"
		| "Succeeded"
		| "Unknown"
		| "Updating";
	readonly version?: string;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface TaggedResourceTags {
	readonly [key: string]: string;
}
export default {
	communicationServices: communicationServices,
};

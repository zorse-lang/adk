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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: CommunicationServiceProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TaggedResourceTags | undefined;
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
	readonly primaryConnectionString?: string | undefined;
	readonly primaryKey?: string | undefined;
	readonly secondaryConnectionString?: string | undefined;
	readonly secondaryKey?: string | undefined;
}
export interface CommunicationServiceProperties {
	readonly dataLocation: string;
	readonly hostName?: string | undefined;
	readonly immutableResourceId?: string | undefined;
	readonly notificationHubId?: string | undefined;
	readonly provisioningState?:
		| ("Canceled" | "Creating" | "Deleting" | "Failed" | "Moving" | "Running" | "Succeeded" | "Unknown" | "Updating")
		| undefined;
	readonly version?: string | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface TaggedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	communicationServices: communicationServices,
};

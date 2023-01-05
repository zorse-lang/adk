import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class instances extends ArmResource<instancesComponentInputs> implements instancesComponentOutputs {
	constructor(entity: ADKEntity, options: instancesComponentInputs) {
		super(entity, options.name, "Microsoft.Dynamics365FraudProtection/instances", "2021-02-01-preview", options);
	}
	public readonly apiVersion: "2021-02-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Dynamics365FraudProtection/instances";
}
export interface instancesComponentOutputs {
	readonly apiVersion: "2021-02-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Dynamics365FraudProtection/instances";
}
export interface instancesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: DFPInstanceProperties;
	readonly systemData?: SystemData;
	readonly tags?: DFPInstanceTags;
}
export interface DFPInstanceAdministrators {
	readonly members?: string[];
}
export interface DFPInstanceProperties {
	readonly administration?: DFPInstanceAdministrators;
	readonly provisioningState?:
		| "Deleting"
		| "Failed"
		| "Paused"
		| "Pausing"
		| "Preparing"
		| "Provisioning"
		| "Resuming"
		| "Scaling"
		| "Succeeded"
		| "Suspended"
		| "Suspending"
		| "Updating";
}
export interface DFPInstanceTags {
	readonly [key: string]: string;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export default {
	instances: instances,
};

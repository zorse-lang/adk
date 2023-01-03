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
	readonly properties?: DFPInstanceProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: DFPInstanceTags | undefined;
}
export interface DFPInstanceAdministrators {
	readonly members?: string[] | undefined;
}
export interface DFPInstanceProperties {
	readonly administration?: DFPInstanceAdministrators | undefined;
	readonly provisioningState?:
		| (
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
				| "Updating"
		  )
		| undefined;
}
export interface DFPInstanceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export default {
	instances: instances,
};

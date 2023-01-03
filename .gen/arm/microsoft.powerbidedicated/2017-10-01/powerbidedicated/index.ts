import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class capacities extends ArmResource<capacitiesComponentInputs> implements capacitiesComponentOutputs {
	constructor(entity: ADKEntity, options: capacitiesComponentInputs) {
		super(entity, options.name, "Microsoft.PowerBIDedicated/capacities", "2017-10-01", options);
	}
	public readonly apiVersion: "2017-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.PowerBIDedicated/capacities";
}
export interface capacitiesComponentOutputs {
	readonly apiVersion: "2017-10-01";
	readonly id: string;
	readonly type: "Microsoft.PowerBIDedicated/capacities";
}
export interface capacitiesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: DedicatedCapacityProperties | undefined;
	readonly sku: ResourceSku;
	readonly tags?: ResourceTags | undefined;
}
export interface DedicatedCapacityAdministrators {
	readonly members?: string[] | undefined;
}
export interface DedicatedCapacityProperties {
	readonly administration?: DedicatedCapacityAdministrators | undefined;
	readonly friendlyName?: string | undefined;
	readonly mode?: string | undefined;
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
	readonly state?:
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
	readonly tenantId?: string | undefined;
}
export interface ResourceSku {
	readonly capacity?: number | undefined;
	readonly name: string;
	readonly tier?: "PBIE_Azure" | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	capacities: capacities,
};

import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class autoScaleVCores
	extends ArmResource<autoScaleVCoresComponentInputs>
	implements autoScaleVCoresComponentOutputs
{
	constructor(entity: ADKEntity, options: autoScaleVCoresComponentInputs) {
		super(entity, options.name, "Microsoft.PowerBIDedicated/autoScaleVCores", "2021-01-01", options);
	}
	public readonly apiVersion: "2021-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.PowerBIDedicated/autoScaleVCores";
}
export interface autoScaleVCoresComponentOutputs {
	readonly apiVersion: "2021-01-01";
	readonly id: string;
	readonly type: "Microsoft.PowerBIDedicated/autoScaleVCores";
}
export interface autoScaleVCoresComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: AutoScaleVCoreProperties | undefined;
	readonly sku: AutoScaleVCoreSku;
	readonly systemData?: SystemData | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class capacities extends ArmResource<capacitiesComponentInputs> implements capacitiesComponentOutputs {
	constructor(entity: ADKEntity, options: capacitiesComponentInputs) {
		super(entity, options.name, "Microsoft.PowerBIDedicated/capacities", "2021-01-01", options);
	}
	public readonly apiVersion: "2021-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.PowerBIDedicated/capacities";
}
export interface capacitiesComponentOutputs {
	readonly apiVersion: "2021-01-01";
	readonly id: string;
	readonly type: "Microsoft.PowerBIDedicated/capacities";
}
export interface capacitiesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: DedicatedCapacityProperties | undefined;
	readonly sku: CapacitySku;
	readonly systemData?: SystemData | undefined;
	readonly tags?: ResourceTags | undefined;
}
export interface AutoScaleVCoreProperties {
	readonly capacityLimit?: number | undefined;
	readonly capacityObjectId?: string | undefined;
	readonly provisioningState?: "Succeeded" | undefined;
}
export interface AutoScaleVCoreSku {
	readonly capacity?: number | undefined;
	readonly name: string;
	readonly tier?: "AutoScale" | undefined;
}
export interface CapacitySku {
	readonly capacity?: number | undefined;
	readonly name: string;
	readonly tier?: ("AutoPremiumHost" | "PBIE_Azure" | "Premium") | undefined;
}
export interface DedicatedCapacityAdministrators {
	readonly members?: string[] | undefined;
}
export interface DedicatedCapacityProperties {
	readonly administration?: DedicatedCapacityAdministrators | undefined;
	readonly friendlyName?: string | undefined;
	readonly mode?: ("Gen1" | "Gen2") | undefined;
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
export interface ResourceTags {
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
	autoScaleVCores: autoScaleVCores,
	capacities: capacities,
};

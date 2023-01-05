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
	readonly properties?: AutoScaleVCoreProperties;
	readonly sku: AutoScaleVCoreSku;
	readonly systemData?: SystemData;
	readonly tags?: ResourceTags;
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
	readonly properties?: DedicatedCapacityProperties;
	readonly sku: CapacitySku;
	readonly systemData?: SystemData;
	readonly tags?: ResourceTags;
}
export interface AutoScaleVCoreProperties {
	readonly capacityLimit?: number;
	readonly capacityObjectId?: string;
	readonly provisioningState?: "Succeeded";
}
export interface AutoScaleVCoreSku {
	readonly capacity?: number;
	readonly name: string;
	readonly tier?: "AutoScale";
}
export interface CapacitySku {
	readonly capacity?: number;
	readonly name: string;
	readonly tier?: "AutoPremiumHost" | "PBIE_Azure" | "Premium";
}
export interface DedicatedCapacityAdministrators {
	readonly members?: string[];
}
export interface DedicatedCapacityProperties {
	readonly administration?: DedicatedCapacityAdministrators;
	readonly friendlyName?: string;
	readonly mode?: "Gen1" | "Gen2";
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
	readonly state?:
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
	readonly tenantId?: string;
}
export interface ResourceTags {
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
	autoScaleVCores: autoScaleVCores,
	capacities: capacities,
};

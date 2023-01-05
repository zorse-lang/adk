import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class iotApps extends ArmResource<iotAppsComponentInputs> implements iotAppsComponentOutputs {
	constructor(entity: ADKEntity, options: iotAppsComponentInputs) {
		super(entity, options.name, "Microsoft.IoTCentral/iotApps", "2021-06-01", options);
	}
	public readonly apiVersion: "2021-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.IoTCentral/iotApps";
}
export interface iotAppsComponentOutputs {
	readonly apiVersion: "2021-06-01";
	readonly id: string;
	readonly type: "Microsoft.IoTCentral/iotApps";
}
export interface iotAppsComponentInputs {
	readonly identity?: SystemAssignedServiceIdentity;
	readonly location: string;
	readonly name: string;
	readonly properties?: AppProperties;
	readonly sku: AppSkuInfo;
	readonly tags?: ResourceTags;
}
export interface AppProperties {
	readonly applicationId?: string;
	readonly displayName?: string;
	readonly state?: "created" | "suspended";
	readonly subdomain?: string;
	readonly template?: string;
}
export interface AppSkuInfo {
	readonly name: "ST0" | "ST1" | "ST2";
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface SystemAssignedServiceIdentity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type: "None" | "SystemAssigned";
}
export default {
	iotApps: iotApps,
};

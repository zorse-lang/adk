import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class iotApps extends ArmResource<iotAppsComponentInputs> implements iotAppsComponentOutputs {
	constructor(entity: ADKEntity, options: iotAppsComponentInputs) {
		super(entity, options.name, "Microsoft.IoTCentral/iotApps", "2018-09-01", options);
	}
	public readonly apiVersion: "2018-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.IoTCentral/iotApps";
}
export interface iotAppsComponentOutputs {
	readonly apiVersion: "2018-09-01";
	readonly id: string;
	readonly type: "Microsoft.IoTCentral/iotApps";
}
export interface iotAppsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: AppProperties | undefined;
	readonly sku: AppSkuInfo;
	readonly tags?: ResourceTags | undefined;
}
export interface AppProperties {
	readonly applicationId?: string | undefined;
	readonly displayName?: string | undefined;
	readonly geography?: string | undefined;
	readonly state?: ("created" | "suspended") | undefined;
	readonly subdomain?: string | undefined;
	readonly template?: string | undefined;
	readonly tenant?: string | undefined;
	readonly thumbnailUrl?: string | undefined;
}
export interface AppSkuInfo {
	readonly name: "F1" | "S1" | "ST0" | "ST1" | "ST2";
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	iotApps: iotApps,
};

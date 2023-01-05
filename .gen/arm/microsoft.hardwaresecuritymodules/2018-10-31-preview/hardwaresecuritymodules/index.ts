import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class dedicatedHSMs extends ArmResource<dedicatedHSMsComponentInputs> implements dedicatedHSMsComponentOutputs {
	constructor(entity: ADKEntity, options: dedicatedHSMsComponentInputs) {
		super(entity, options.name, "Microsoft.HardwareSecurityModules/dedicatedHSMs", "2018-10-31-preview", options);
	}
	public readonly apiVersion: "2018-10-31-preview";
	public readonly id: string;
	public readonly type: "Microsoft.HardwareSecurityModules/dedicatedHSMs";
}
export interface dedicatedHSMsComponentOutputs {
	readonly apiVersion: "2018-10-31-preview";
	readonly id: string;
	readonly type: "Microsoft.HardwareSecurityModules/dedicatedHSMs";
}
export interface dedicatedHSMsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: DedicatedHsmProperties;
	readonly sku?: Sku;
	readonly tags?: ResourceTags;
	readonly zones?: string[];
}
export interface ApiEntityReference {
	readonly id?: string;
}
export interface DedicatedHsmProperties {
	readonly networkProfile?: NetworkProfile;
	readonly provisioningState?:
		| "Allocating"
		| "CheckingQuota"
		| "Connecting"
		| "Deleting"
		| "Failed"
		| "Provisioning"
		| "Succeeded";
	readonly stampId?: string;
	readonly statusMessage?: string;
}
export interface NetworkInterface {
	readonly id?: string;
	readonly privateIpAddress?: string;
}
export interface NetworkProfile {
	readonly networkInterfaces?: NetworkInterface[];
	readonly subnet?: ApiEntityReference;
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface Sku {
	readonly name?:
		| "SafeNet Luna Network HSM A790"
		| "payShield10K_LMK1_CPS250"
		| "payShield10K_LMK1_CPS2500"
		| "payShield10K_LMK1_CPS60"
		| "payShield10K_LMK2_CPS250"
		| "payShield10K_LMK2_CPS2500"
		| "payShield10K_LMK2_CPS60";
}
export default {
	dedicatedHSMs: dedicatedHSMs,
};

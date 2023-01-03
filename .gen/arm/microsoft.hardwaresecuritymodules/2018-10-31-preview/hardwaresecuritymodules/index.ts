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
	readonly sku?: Sku | undefined;
	readonly tags?: ResourceTags | undefined;
	readonly zones?: string[] | undefined;
}
export interface ApiEntityReference {
	readonly id?: string | undefined;
}
export interface DedicatedHsmProperties {
	readonly networkProfile?: NetworkProfile | undefined;
	readonly provisioningState?:
		| ("Allocating" | "CheckingQuota" | "Connecting" | "Deleting" | "Failed" | "Provisioning" | "Succeeded")
		| undefined;
	readonly stampId?: string | undefined;
	readonly statusMessage?: string | undefined;
}
export interface NetworkInterface {
	readonly id?: string | undefined;
	readonly privateIpAddress?: string | undefined;
}
export interface NetworkProfile {
	readonly networkInterfaces?: NetworkInterface[] | undefined;
	readonly subnet?: ApiEntityReference | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface Sku {
	readonly name?:
		| (
				| "SafeNet Luna Network HSM A790"
				| "payShield10K_LMK1_CPS250"
				| "payShield10K_LMK1_CPS2500"
				| "payShield10K_LMK1_CPS60"
				| "payShield10K_LMK2_CPS250"
				| "payShield10K_LMK2_CPS2500"
				| "payShield10K_LMK2_CPS60"
		  )
		| undefined;
}
export default {
	dedicatedHSMs: dedicatedHSMs,
};

import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class multipleActivationKeys
	extends ArmResource<multipleActivationKeysComponentInputs>
	implements multipleActivationKeysComponentOutputs
{
	constructor(entity: ADKEntity, options: multipleActivationKeysComponentInputs) {
		super(entity, options.name, "Microsoft.WindowsESU/multipleActivationKeys", "2019-09-16-preview", options);
	}
	public readonly apiVersion: "2019-09-16-preview";
	public readonly id: string;
	public readonly type: "Microsoft.WindowsESU/multipleActivationKeys";
}
export interface multipleActivationKeysComponentOutputs {
	readonly apiVersion: "2019-09-16-preview";
	readonly id: string;
	readonly type: "Microsoft.WindowsESU/multipleActivationKeys";
}
export interface multipleActivationKeysComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: MultipleActivationKeyProperties;
	readonly tags?: TrackedResourceTags;
}
export interface MultipleActivationKeyProperties {
	readonly agreementNumber?: string;
	readonly expirationDate?: string;
	readonly installedServerNumber?: number;
	readonly isEligible?: boolean;
	readonly multipleActivationKey?: string;
	readonly osType?: "Windows7" | "WindowsServer2008" | "WindowsServer2008R2";
	readonly provisioningState?: "Accepted" | "Canceled" | "Failed" | "Provisioning" | "Succeeded";
	readonly supportType?: "PremiumAssurance" | "SupplementalServicing";
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export default {
	multipleActivationKeys: multipleActivationKeys,
};

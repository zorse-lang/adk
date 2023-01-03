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
	readonly properties?: MultipleActivationKeyProperties | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export interface MultipleActivationKeyProperties {
	readonly agreementNumber?: string | undefined;
	readonly expirationDate?: string | undefined;
	readonly installedServerNumber?: number | undefined;
	readonly isEligible?: boolean | undefined;
	readonly multipleActivationKey?: string | undefined;
	readonly osType?: ("Windows7" | "WindowsServer2008" | "WindowsServer2008R2") | undefined;
	readonly provisioningState?: ("Accepted" | "Canceled" | "Failed" | "Provisioning" | "Succeeded") | undefined;
	readonly supportType?: ("PremiumAssurance" | "SupplementalServicing") | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	multipleActivationKeys: multipleActivationKeys,
};

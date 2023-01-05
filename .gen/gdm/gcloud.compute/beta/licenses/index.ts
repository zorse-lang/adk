import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Licenses extends GdmResource<LicensesComponentInputs> implements LicensesComponentOutputs {
	constructor(entity: ADKEntity, options: LicensesComponentInputs) {
		super(entity, options.name, "compute.beta.Licenses", options);
	}
	public readonly chargesUseFee?: boolean;
	public readonly creationTimestamp?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly licenseCode?: string;
	public readonly selfLink?: string;
}
export interface LicensesComponentOutputs {
	readonly chargesUseFee?: boolean;
	readonly creationTimestamp?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly licenseCode?: string;
	readonly selfLink?: string;
}
export interface LicensesComponentInputs {
	readonly description?: string;
	readonly name: string;
	readonly requestId?: string;
	readonly resourceRequirements?: LicenseResourceRequirements;
	readonly transferable?: boolean;
}
export interface License {
	readonly chargesUseFee?: boolean;
	readonly creationTimestamp?: string;
	readonly description?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly licenseCode?: string;
	readonly name?: string;
	readonly resourceRequirements?: LicenseResourceRequirements;
	readonly selfLink?: string;
	readonly transferable?: boolean;
}
export interface LicenseResourceRequirements {
	readonly minGuestCpuCount?: number;
	readonly minMemoryMb?: number;
}
export default {
	Licenses: Licenses,
};

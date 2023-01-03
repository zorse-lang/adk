import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Licenses extends GdmResource<LicensesComponentInputs> implements LicensesComponentOutputs {
	constructor(entity: ADKEntity, options: LicensesComponentInputs) {
		super(entity, options.name, "compute.alpha.Licenses", options);
	}
	public readonly chargesUseFee?: boolean | undefined;
	public readonly creationTimestamp?: string | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly licenseCode?: string | undefined;
	public readonly selfLink?: string | undefined;
	public readonly selfLinkWithId?: string | undefined;
}
export interface LicensesComponentOutputs {
	readonly chargesUseFee?: boolean | undefined;
	readonly creationTimestamp?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly licenseCode?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly selfLinkWithId?: string | undefined;
}
export interface LicensesComponentInputs {
	readonly description?: string | undefined;
	readonly name: string;
	readonly requestId?: string | undefined;
	readonly resourceRequirements?: LicenseResourceRequirements | undefined;
	readonly transferable?: boolean | undefined;
	readonly type: string;
}
export interface License {
	readonly chargesUseFee?: boolean | undefined;
	readonly creationTimestamp?: string | undefined;
	readonly description?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly licenseCode?: string | undefined;
	readonly name?: string | undefined;
	readonly resourceRequirements?: LicenseResourceRequirements | undefined;
	readonly selfLink?: string | undefined;
	readonly selfLinkWithId?: string | undefined;
	readonly transferable?: boolean | undefined;
}
export interface LicenseResourceRequirements {
	readonly minGuestCpuCount?: number | undefined;
	readonly minMemoryMb?: number | undefined;
}
export default {
	Licenses: Licenses,
};

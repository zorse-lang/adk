import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class LicenseCodes extends GdmResource<LicenseCodesComponentInputs> implements LicenseCodesComponentOutputs {
	constructor(entity: ADKEntity, options: LicenseCodesComponentInputs) {
		super(entity, options.name, "compute.alpha.LicenseCodes", options);
	}
	public readonly creationTimestamp?: string;
	public readonly description?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly licenseAlias?: LicenseCodeLicenseAlias[];
	public readonly selfLink?: string;
	public readonly state?: string;
	public readonly transferable?: boolean;
}
export interface LicenseCodesComponentOutputs {
	readonly creationTimestamp?: string;
	readonly description?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly licenseAlias?: LicenseCodeLicenseAlias[];
	readonly selfLink?: string;
	readonly state?: string;
	readonly transferable?: boolean;
}
export interface LicenseCodesComponentInputs {
	readonly name: string;
}
export interface LicenseCode {
	readonly creationTimestamp?: string;
	readonly description?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly licenseAlias?: LicenseCodeLicenseAlias[];
	readonly name?: string;
	readonly selfLink?: string;
	readonly state?: string;
	readonly transferable?: boolean;
}
export interface LicenseCodeLicenseAlias {
	readonly description?: string;
	readonly selfLink?: string;
}
export default {
	LicenseCodes: LicenseCodes,
};

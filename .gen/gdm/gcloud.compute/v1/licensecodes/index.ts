import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class LicenseCodes extends GdmResource<LicenseCodesComponentInputs> implements LicenseCodesComponentOutputs {
	constructor(entity: ADKEntity, options: LicenseCodesComponentInputs) {
		super(entity, options.name, "compute.v1.LicenseCodes", options);
	}
	public readonly creationTimestamp?: string | undefined;
	public readonly description?: string | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly licenseAlias?: LicenseCodeLicenseAlias[] | undefined;
	public readonly selfLink?: string | undefined;
	public readonly state?: string | undefined;
	public readonly transferable?: boolean | undefined;
}
export interface LicenseCodesComponentOutputs {
	readonly creationTimestamp?: string | undefined;
	readonly description?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly licenseAlias?: LicenseCodeLicenseAlias[] | undefined;
	readonly selfLink?: string | undefined;
	readonly state?: string | undefined;
	readonly transferable?: boolean | undefined;
}
export interface LicenseCodesComponentInputs {
	readonly name: string;
	readonly type: string;
}
export interface LicenseCode {
	readonly creationTimestamp?: string | undefined;
	readonly description?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly licenseAlias?: LicenseCodeLicenseAlias[] | undefined;
	readonly name?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly state?: string | undefined;
	readonly transferable?: boolean | undefined;
}
export interface LicenseCodeLicenseAlias {
	readonly description?: string | undefined;
	readonly selfLink?: string | undefined;
}
export default {
	LicenseCodes: LicenseCodes,
};

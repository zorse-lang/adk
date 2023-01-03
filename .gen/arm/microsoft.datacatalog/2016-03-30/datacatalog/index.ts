import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class catalogs extends ArmResource<catalogsComponentInputs> implements catalogsComponentOutputs {
	constructor(entity: ADKEntity, options: catalogsComponentInputs) {
		super(entity, options.name, "Microsoft.DataCatalog/catalogs", "2016-03-30", options);
	}
	public readonly apiVersion: "2016-03-30";
	public readonly id: string;
	public readonly type: "Microsoft.DataCatalog/catalogs";
}
export interface catalogsComponentOutputs {
	readonly apiVersion: "2016-03-30";
	readonly id: string;
	readonly type: "Microsoft.DataCatalog/catalogs";
}
export interface catalogsComponentInputs {
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ADCCatalogProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export interface ADCCatalogProperties {
	readonly admins?: Principals[] | undefined;
	readonly enableAutomaticUnitAdjustment?: boolean | undefined;
	readonly sku?: ("Free" | "Standard") | undefined;
	readonly successfullyProvisioned?: boolean | undefined;
	readonly units?: number | undefined;
	readonly users?: Principals[] | undefined;
}
export interface Principals {
	readonly objectId?: string | undefined;
	readonly upn?: string | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	catalogs: catalogs,
};

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
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: ADCCatalogProperties;
	readonly tags?: ResourceTags;
}
export interface ADCCatalogProperties {
	readonly admins?: Principals[];
	readonly enableAutomaticUnitAdjustment?: boolean;
	readonly sku?: "Free" | "Standard";
	readonly successfullyProvisioned?: boolean;
	readonly units?: number;
	readonly users?: Principals[];
}
export interface Principals {
	readonly objectId?: string;
	readonly upn?: string;
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export default {
	catalogs: catalogs,
};

import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class Catalog extends RosResource<CatalogComponentInputs> implements CatalogComponentOutputs {
	constructor(entity: ADKEntity, options: CatalogComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::DLF::Catalog", options);
	}
}
export interface CatalogComponentOutputs {}
export interface CatalogComponentInputs {
	readonly CatalogId: any | string;
	readonly Description?: (string | undefined) | undefined;
	readonly LocationUri?: (string | undefined) | undefined;
	readonly Owner?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export default {
	Catalog: Catalog,
};

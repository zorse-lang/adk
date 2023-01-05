import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Tabledata extends GdmResource<TabledataComponentInputs> implements TabledataComponentOutputs {
	constructor(entity: ADKEntity, options: TabledataComponentInputs) {
		super(entity, options.name, "bigquery.v2.Tabledata", options);
	}
}
export interface TabledataComponentOutputs {}
export interface TabledataComponentInputs {
	readonly name: string;
}
export default {
	Tabledata: Tabledata,
};

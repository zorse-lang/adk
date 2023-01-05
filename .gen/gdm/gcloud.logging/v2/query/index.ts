import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Query extends GdmResource<QueryComponentInputs> implements QueryComponentOutputs {
	constructor(entity: ADKEntity, options: QueryComponentInputs) {
		super(entity, options.name, "logging.v2.Query", options);
	}
}
export interface QueryComponentOutputs {}
export interface QueryComponentInputs {
	readonly name: string;
}
export default {
	Query: Query,
};

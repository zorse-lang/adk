import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Aggregations extends GdmResource<AggregationsComponentInputs> implements AggregationsComponentOutputs {
	constructor(entity: ADKEntity, options: AggregationsComponentInputs) {
		super(entity, options.name, "logging.v2.Aggregations", options);
	}
}
export interface AggregationsComponentOutputs {}
export interface AggregationsComponentInputs {
	readonly name: string;
}
export default {
	Aggregations: Aggregations,
};

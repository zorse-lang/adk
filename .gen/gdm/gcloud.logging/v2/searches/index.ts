import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Searches extends GdmResource<SearchesComponentInputs> implements SearchesComponentOutputs {
	constructor(entity: ADKEntity, options: SearchesComponentInputs) {
		super(entity, options.name, "logging.v2.Searches", options);
	}
}
export interface SearchesComponentOutputs {}
export interface SearchesComponentInputs {
	readonly type: string;
	readonly name: string;
}
export default {
	Searches: Searches,
};

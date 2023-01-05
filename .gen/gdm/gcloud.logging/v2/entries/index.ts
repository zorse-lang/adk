import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Entries extends GdmResource<EntriesComponentInputs> implements EntriesComponentOutputs {
	constructor(entity: ADKEntity, options: EntriesComponentInputs) {
		super(entity, options.name, "logging.v2.Entries", options);
	}
}
export interface EntriesComponentOutputs {}
export interface EntriesComponentInputs {
	readonly name: string;
}
export default {
	Entries: Entries,
};

import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Tiers extends GdmResource<TiersComponentInputs> implements TiersComponentOutputs {
	constructor(entity: ADKEntity, options: TiersComponentInputs) {
		super(entity, options.name, "sqladmin.v1beta4.Tiers", options);
	}
}
export interface TiersComponentOutputs {}
export interface TiersComponentInputs {
	readonly name: string;
}
export default {
	Tiers: Tiers,
};

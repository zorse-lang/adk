import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Scans extends GdmResource<ScansComponentInputs> implements ScansComponentOutputs {
	constructor(entity: ADKEntity, options: ScansComponentInputs) {
		super(entity, options.name, "spanner.v1.Scans", options);
	}
}
export interface ScansComponentOutputs {}
export interface ScansComponentInputs {
	readonly type: string;
	readonly name: string;
}
export default {
	Scans: Scans,
};

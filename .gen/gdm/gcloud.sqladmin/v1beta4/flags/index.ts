import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Flags extends GdmResource<FlagsComponentInputs> implements FlagsComponentOutputs {
	constructor(entity: ADKEntity, options: FlagsComponentInputs) {
		super(entity, options.name, "sqladmin.v1beta4.Flags", options);
	}
}
export interface FlagsComponentOutputs {}
export interface FlagsComponentInputs {
	readonly type: string;
	readonly name: string;
}
export default {
	Flags: Flags,
};

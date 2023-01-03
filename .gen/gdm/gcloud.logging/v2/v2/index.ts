import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class V2 extends GdmResource<V2ComponentInputs> implements V2ComponentOutputs {
	constructor(entity: ADKEntity, options: V2ComponentInputs) {
		super(entity, options.name, "logging.v2.V2", options);
	}
}
export interface V2ComponentOutputs {}
export interface V2ComponentInputs {
	readonly type: string;
	readonly name: string;
}
export default {
	V2: V2,
};

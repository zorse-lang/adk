import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class V1 extends GdmResource<V1ComponentInputs> implements V1ComponentOutputs {
	constructor(entity: ADKEntity, options: V1ComponentInputs) {
		super(entity, options.name, "cloudbuild.v1.V1", options);
	}
}
export interface V1ComponentOutputs {}
export interface V1ComponentInputs {
	readonly name: string;
}
export default {
	V1: V1,
};

import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class PublicServices extends GdmResource<PublicServicesComponentInputs> implements PublicServicesComponentOutputs {
	constructor(entity: ADKEntity, options: PublicServicesComponentInputs) {
		super(entity, options.name, "serviceusage.v1.PublicServices", options);
	}
}
export interface PublicServicesComponentOutputs {}
export interface PublicServicesComponentInputs {
	readonly type: string;
	readonly name: string;
}
export default {
	PublicServices: PublicServices,
};

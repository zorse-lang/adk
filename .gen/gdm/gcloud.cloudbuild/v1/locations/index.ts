import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Locations extends GdmResource<LocationsComponentInputs> implements LocationsComponentOutputs {
	constructor(entity: ADKEntity, options: LocationsComponentInputs) {
		super(entity, options.name, "cloudbuild.v1.Locations", options);
	}
}
export interface LocationsComponentOutputs {}
export interface LocationsComponentInputs {
	readonly type: string;
	readonly name: string;
}
export default {
	Locations: Locations,
};

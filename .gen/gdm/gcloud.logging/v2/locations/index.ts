import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Locations extends GdmResource<LocationsComponentInputs> implements LocationsComponentOutputs {
	constructor(entity: ADKEntity, options: LocationsComponentInputs) {
		super(entity, options.name, "logging.v2.Locations", options);
	}
}
export interface LocationsComponentOutputs {}
export interface LocationsComponentInputs {
	readonly displayName?: string;
	readonly labels?: { [P in string]: string };
	readonly locationId?: string;
	readonly metadata?: { [P in string]: any };
	readonly name: string;
}
export interface Location {
	readonly displayName?: string;
	readonly labels?: { [P in string]: string };
	readonly locationId?: string;
	readonly metadata?: { [P in string]: any };
	readonly name?: string;
}
export default {
	Locations: Locations,
};

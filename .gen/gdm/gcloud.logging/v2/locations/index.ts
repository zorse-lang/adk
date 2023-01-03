import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Locations extends GdmResource<LocationsComponentInputs> implements LocationsComponentOutputs {
	constructor(entity: ADKEntity, options: LocationsComponentInputs) {
		super(entity, options.name, "logging.v2.Locations", options);
	}
}
export interface LocationsComponentOutputs {}
export interface LocationsComponentInputs {
	readonly displayName?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly locationId?: string | undefined;
	readonly metadata?: { [P in string]: any } | undefined;
	readonly name: string;
	readonly type: string;
}
export interface Location {
	readonly displayName?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly locationId?: string | undefined;
	readonly metadata?: { [P in string]: any } | undefined;
	readonly name?: string | undefined;
}
export default {
	Locations: Locations,
};

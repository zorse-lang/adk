import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class AppsLocations extends GdmResource<AppsLocationsComponentInputs> implements AppsLocationsComponentOutputs {
	constructor(entity: ADKEntity, options: AppsLocationsComponentInputs) {
		super(entity, options.name, "appengine.v1.AppsLocations", options);
	}
}
export interface AppsLocationsComponentOutputs {}
export interface AppsLocationsComponentInputs {
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
	AppsLocations: AppsLocations,
};

import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class AppsLocations extends GdmResource<AppsLocationsComponentInputs> implements AppsLocationsComponentOutputs {
	constructor(entity: ADKEntity, options: AppsLocationsComponentInputs) {
		super(entity, options.name, "appengine.v1.AppsLocations", options);
	}
}
export interface AppsLocationsComponentOutputs {}
export interface AppsLocationsComponentInputs {
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
	AppsLocations: AppsLocations,
};

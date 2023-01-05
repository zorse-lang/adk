import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class OrganizationsLocations
	extends GdmResource<OrganizationsLocationsComponentInputs>
	implements OrganizationsLocationsComponentOutputs
{
	constructor(entity: ADKEntity, options: OrganizationsLocationsComponentInputs) {
		super(entity, options.name, "logging.v2.OrganizationsLocations", options);
	}
}
export interface OrganizationsLocationsComponentOutputs {}
export interface OrganizationsLocationsComponentInputs {
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
	OrganizationsLocations: OrganizationsLocations,
};

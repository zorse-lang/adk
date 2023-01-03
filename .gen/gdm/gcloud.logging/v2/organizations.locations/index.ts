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
	OrganizationsLocations: OrganizationsLocations,
};

import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocations
	extends GdmResource<ProjectsLocationsComponentInputs>
	implements ProjectsLocationsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsComponentInputs) {
		super(entity, options.name, "bigtableadmin.v2.ProjectsLocations", options);
	}
}
export interface ProjectsLocationsComponentOutputs {}
export interface ProjectsLocationsComponentInputs {
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
	ProjectsLocations: ProjectsLocations,
};

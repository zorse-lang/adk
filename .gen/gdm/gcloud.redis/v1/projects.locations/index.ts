import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocations
	extends GdmResource<ProjectsLocationsComponentInputs>
	implements ProjectsLocationsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsComponentInputs) {
		super(entity, options.name, "redis.v1.ProjectsLocations", options);
	}
	public readonly metadata?: { [P in string]: any } | undefined;
}
export interface ProjectsLocationsComponentOutputs {
	readonly metadata?: { [P in string]: any } | undefined;
}
export interface ProjectsLocationsComponentInputs {
	readonly displayName?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly locationId?: string | undefined;
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
	ProjectsLocations: ProjectsLocations,
};

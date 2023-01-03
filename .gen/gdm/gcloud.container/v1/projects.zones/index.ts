import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsZones extends GdmResource<ProjectsZonesComponentInputs> implements ProjectsZonesComponentOutputs {
	constructor(entity: ADKEntity, options: ProjectsZonesComponentInputs) {
		super(entity, options.name, "container.v1.ProjectsZones", options);
	}
}
export interface ProjectsZonesComponentOutputs {}
export interface ProjectsZonesComponentInputs {
	readonly type: string;
	readonly name: string;
}
export default {
	ProjectsZones: ProjectsZones,
};

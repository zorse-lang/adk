import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsGroups extends GdmResource<ProjectsGroupsComponentInputs> implements ProjectsGroupsComponentOutputs {
	constructor(entity: ADKEntity, options: ProjectsGroupsComponentInputs) {
		super(entity, options.name, "monitoring.v3.ProjectsGroups", options);
	}
}
export interface ProjectsGroupsComponentOutputs {}
export interface ProjectsGroupsComponentInputs {
	readonly displayName?: string;
	readonly filter?: string;
	readonly isCluster?: boolean;
	readonly name: string;
	readonly parentName?: string;
	readonly validateOnly?: boolean;
}
export interface Group {
	readonly displayName?: string;
	readonly filter?: string;
	readonly isCluster?: boolean;
	readonly name?: string;
	readonly parentName?: string;
}
export default {
	ProjectsGroups: ProjectsGroups,
};

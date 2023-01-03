import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsGroups extends GdmResource<ProjectsGroupsComponentInputs> implements ProjectsGroupsComponentOutputs {
	constructor(entity: ADKEntity, options: ProjectsGroupsComponentInputs) {
		super(entity, options.name, "monitoring.v3.ProjectsGroups", options);
	}
}
export interface ProjectsGroupsComponentOutputs {}
export interface ProjectsGroupsComponentInputs {
	readonly displayName?: string | undefined;
	readonly filter?: string | undefined;
	readonly isCluster?: boolean | undefined;
	readonly name: string;
	readonly parentName?: string | undefined;
	readonly validateOnly?: boolean | undefined;
	readonly type: string;
}
export interface Group {
	readonly displayName?: string | undefined;
	readonly filter?: string | undefined;
	readonly isCluster?: boolean | undefined;
	readonly name?: string | undefined;
	readonly parentName?: string | undefined;
}
export default {
	ProjectsGroups: ProjectsGroups,
};

import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsGroupsMembers
	extends GdmResource<ProjectsGroupsMembersComponentInputs>
	implements ProjectsGroupsMembersComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsGroupsMembersComponentInputs) {
		super(entity, options.name, "monitoring.v3.ProjectsGroupsMembers", options);
	}
}
export interface ProjectsGroupsMembersComponentOutputs {}
export interface ProjectsGroupsMembersComponentInputs {
	readonly type: string;
	readonly name: string;
}
export default {
	ProjectsGroupsMembers: ProjectsGroupsMembers,
};

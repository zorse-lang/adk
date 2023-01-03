import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Projects extends GdmResource<ProjectsComponentInputs> implements ProjectsComponentOutputs {
	constructor(entity: ADKEntity, options: ProjectsComponentInputs) {
		super(entity, options.name, "cloudresourcemanager.v1.Projects", options);
	}
}
export interface ProjectsComponentOutputs {}
export interface ProjectsComponentInputs {
	readonly createTime?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly lifecycleState?: string | undefined;
	readonly name: string;
	readonly parent?: ResourceId | undefined;
	readonly projectId?: string | undefined;
	readonly projectNumber?: string | undefined;
	readonly type: string;
}
export interface Project {
	readonly createTime?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly lifecycleState?: string | undefined;
	readonly name?: string | undefined;
	readonly parent?: ResourceId | undefined;
	readonly projectId?: string | undefined;
	readonly projectNumber?: string | undefined;
}
export interface ResourceId {
	readonly id?: string | undefined;
	readonly type?: string | undefined;
}
export default {
	Projects: Projects,
};

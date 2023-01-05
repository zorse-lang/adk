import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Projects extends GdmResource<ProjectsComponentInputs> implements ProjectsComponentOutputs {
	constructor(entity: ADKEntity, options: ProjectsComponentInputs) {
		super(entity, options.name, "cloudresourcemanager.v1.Projects", options);
	}
}
export interface ProjectsComponentOutputs {}
export interface ProjectsComponentInputs {
	readonly createTime?: string;
	readonly labels?: { [P in string]: string };
	readonly lifecycleState?: string;
	readonly name: string;
	readonly parent?: ResourceId;
	readonly projectId?: string;
	readonly projectNumber?: string;
}
export interface Project {
	readonly createTime?: string;
	readonly labels?: { [P in string]: string };
	readonly lifecycleState?: string;
	readonly name?: string;
	readonly parent?: ResourceId;
	readonly projectId?: string;
	readonly projectNumber?: string;
}
export interface ResourceId {
	readonly id?: string;
	readonly type?: string;
}
export default {
	Projects: Projects,
};

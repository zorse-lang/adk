import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Project extends GdmResource<ProjectComponentInputs> implements ProjectComponentOutputs {
	constructor(entity: ADKEntity, options: ProjectComponentInputs) {
		super(entity, options.name, "cloudresourcemanager.v1.project", options);
	}
}
export interface ProjectComponentOutputs {}
export interface ProjectComponentInputs {
	readonly createTime?: string;
	readonly labels?: { [P in string]: string };
	readonly lifecycleState?: string;
	readonly name: string;
	readonly parent?: ResourceId;
	readonly projectId?: string;
	readonly projectNumber?: string;
}
export interface ResourceId {
	readonly id?: string;
	readonly type?: string;
}
export default {
	Project: Project,
};

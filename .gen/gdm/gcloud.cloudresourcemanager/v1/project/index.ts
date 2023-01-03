import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Project extends GdmResource<ProjectComponentInputs> implements ProjectComponentOutputs {
	constructor(entity: ADKEntity, options: ProjectComponentInputs) {
		super(entity, options.name, "cloudresourcemanager.v1.project", options);
	}
}
export interface ProjectComponentOutputs {}
export interface ProjectComponentInputs {
	readonly createTime?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly lifecycleState?: string | undefined;
	readonly name: string;
	readonly parent?: ResourceId | undefined;
	readonly projectId?: string | undefined;
	readonly projectNumber?: string | undefined;
	readonly type: string;
}
export interface ResourceId {
	readonly id?: string | undefined;
	readonly type?: string | undefined;
}
export default {
	Project: Project,
};

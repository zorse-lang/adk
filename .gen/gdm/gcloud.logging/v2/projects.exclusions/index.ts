import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsExclusions
	extends GdmResource<ProjectsExclusionsComponentInputs>
	implements ProjectsExclusionsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsExclusionsComponentInputs) {
		super(entity, options.name, "logging.v2.ProjectsExclusions", options);
	}
	public readonly createTime?: string;
	public readonly updateTime?: string;
}
export interface ProjectsExclusionsComponentOutputs {
	readonly createTime?: string;
	readonly updateTime?: string;
}
export interface ProjectsExclusionsComponentInputs {
	readonly description?: string;
	readonly disabled?: boolean;
	readonly filter: string;
	readonly name: string;
	readonly parent: string;
}
export interface LogExclusion {
	readonly createTime?: string;
	readonly description?: string;
	readonly disabled?: boolean;
	readonly filter: string;
	readonly name: string;
	readonly updateTime?: string;
}
export default {
	ProjectsExclusions: ProjectsExclusions,
};

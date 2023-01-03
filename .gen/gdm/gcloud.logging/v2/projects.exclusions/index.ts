import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsExclusions
	extends GdmResource<ProjectsExclusionsComponentInputs>
	implements ProjectsExclusionsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsExclusionsComponentInputs) {
		super(entity, options.name, "logging.v2.ProjectsExclusions", options);
	}
	public readonly createTime?: string | undefined;
	public readonly updateTime?: string | undefined;
}
export interface ProjectsExclusionsComponentOutputs {
	readonly createTime?: string | undefined;
	readonly updateTime?: string | undefined;
}
export interface ProjectsExclusionsComponentInputs {
	readonly description?: string | undefined;
	readonly disabled?: boolean | undefined;
	readonly filter: string;
	readonly name: string;
	readonly parent: string;
	readonly type: string;
}
export interface LogExclusion {
	readonly createTime?: string | undefined;
	readonly description?: string | undefined;
	readonly disabled?: boolean | undefined;
	readonly filter: string;
	readonly name: string;
	readonly updateTime?: string | undefined;
}
export default {
	ProjectsExclusions: ProjectsExclusions,
};

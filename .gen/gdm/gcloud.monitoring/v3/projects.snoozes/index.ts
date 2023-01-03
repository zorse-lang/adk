import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsSnoozes
	extends GdmResource<ProjectsSnoozesComponentInputs>
	implements ProjectsSnoozesComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsSnoozesComponentInputs) {
		super(entity, options.name, "monitoring.v3.ProjectsSnoozes", options);
	}
}
export interface ProjectsSnoozesComponentOutputs {}
export interface ProjectsSnoozesComponentInputs {
	readonly criteria: Criteria;
	readonly displayName: string;
	readonly interval: TimeInterval;
	readonly name: string;
	readonly parent: string;
	readonly type: string;
}
export interface Criteria {
	readonly policies?: string[] | undefined;
}
export interface Snooze {
	readonly criteria: Criteria;
	readonly displayName: string;
	readonly interval: TimeInterval;
	readonly name: string;
}
export interface TimeInterval {
	readonly endTime: string;
	readonly startTime?: string | undefined;
}
export default {
	ProjectsSnoozes: ProjectsSnoozes,
};

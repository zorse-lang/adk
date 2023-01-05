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
}
export interface Criteria {
	readonly policies?: string[];
}
export interface Snooze {
	readonly criteria: Criteria;
	readonly displayName: string;
	readonly interval: TimeInterval;
	readonly name: string;
}
export interface TimeInterval {
	readonly endTime: string;
	readonly startTime?: string;
}
export default {
	ProjectsSnoozes: ProjectsSnoozes,
};

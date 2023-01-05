import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLogs extends GdmResource<ProjectsLogsComponentInputs> implements ProjectsLogsComponentOutputs {
	constructor(entity: ADKEntity, options: ProjectsLogsComponentInputs) {
		super(entity, options.name, "logging.v2.ProjectsLogs", options);
	}
}
export interface ProjectsLogsComponentOutputs {}
export interface ProjectsLogsComponentInputs {
	readonly name: string;
}
export default {
	ProjectsLogs: ProjectsLogs,
};

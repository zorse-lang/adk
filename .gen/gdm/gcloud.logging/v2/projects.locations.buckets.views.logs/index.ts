import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationsBucketsViewsLogs
	extends GdmResource<ProjectsLocationsBucketsViewsLogsComponentInputs>
	implements ProjectsLocationsBucketsViewsLogsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsBucketsViewsLogsComponentInputs) {
		super(entity, options.name, "logging.v2.ProjectsLocationsBucketsViewsLogs", options);
	}
}
export interface ProjectsLocationsBucketsViewsLogsComponentOutputs {}
export interface ProjectsLocationsBucketsViewsLogsComponentInputs {
	readonly name: string;
}
export default {
	ProjectsLocationsBucketsViewsLogs: ProjectsLocationsBucketsViewsLogs,
};

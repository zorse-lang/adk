import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationPrometheusApiV1Label
	extends GdmResource<ProjectsLocationPrometheusApiV1LabelComponentInputs>
	implements ProjectsLocationPrometheusApiV1LabelComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationPrometheusApiV1LabelComponentInputs) {
		super(entity, options.name, "monitoring.v1.ProjectsLocationPrometheusApiV1Label", options);
	}
}
export interface ProjectsLocationPrometheusApiV1LabelComponentOutputs {}
export interface ProjectsLocationPrometheusApiV1LabelComponentInputs {
	readonly name: string;
}
export default {
	ProjectsLocationPrometheusApiV1Label: ProjectsLocationPrometheusApiV1Label,
};

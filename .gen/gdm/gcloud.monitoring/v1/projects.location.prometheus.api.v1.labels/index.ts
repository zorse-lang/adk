import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationPrometheusApiV1Labels
	extends GdmResource<ProjectsLocationPrometheusApiV1LabelsComponentInputs>
	implements ProjectsLocationPrometheusApiV1LabelsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationPrometheusApiV1LabelsComponentInputs) {
		super(entity, options.name, "monitoring.v1.ProjectsLocationPrometheusApiV1Labels", options);
	}
}
export interface ProjectsLocationPrometheusApiV1LabelsComponentOutputs {}
export interface ProjectsLocationPrometheusApiV1LabelsComponentInputs {
	readonly name: string;
}
export default {
	ProjectsLocationPrometheusApiV1Labels: ProjectsLocationPrometheusApiV1Labels,
};

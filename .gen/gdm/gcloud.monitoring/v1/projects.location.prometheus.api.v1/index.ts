import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationPrometheusApiV1
	extends GdmResource<ProjectsLocationPrometheusApiV1ComponentInputs>
	implements ProjectsLocationPrometheusApiV1ComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationPrometheusApiV1ComponentInputs) {
		super(entity, options.name, "monitoring.v1.ProjectsLocationPrometheusApiV1", options);
	}
}
export interface ProjectsLocationPrometheusApiV1ComponentOutputs {}
export interface ProjectsLocationPrometheusApiV1ComponentInputs {
	readonly name: string;
}
export default {
	ProjectsLocationPrometheusApiV1: ProjectsLocationPrometheusApiV1,
};

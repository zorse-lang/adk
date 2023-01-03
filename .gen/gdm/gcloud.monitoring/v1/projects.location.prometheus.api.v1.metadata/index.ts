import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationPrometheusApiV1Metadata
	extends GdmResource<ProjectsLocationPrometheusApiV1MetadataComponentInputs>
	implements ProjectsLocationPrometheusApiV1MetadataComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationPrometheusApiV1MetadataComponentInputs) {
		super(entity, options.name, "monitoring.v1.ProjectsLocationPrometheusApiV1Metadata", options);
	}
}
export interface ProjectsLocationPrometheusApiV1MetadataComponentOutputs {}
export interface ProjectsLocationPrometheusApiV1MetadataComponentInputs {
	readonly type: string;
	readonly name: string;
}
export default {
	ProjectsLocationPrometheusApiV1Metadata: ProjectsLocationPrometheusApiV1Metadata,
};

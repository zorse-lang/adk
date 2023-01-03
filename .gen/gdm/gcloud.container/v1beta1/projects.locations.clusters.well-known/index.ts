import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationsClustersWellKnown
	extends GdmResource<ProjectsLocationsClustersWellKnownComponentInputs>
	implements ProjectsLocationsClustersWellKnownComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsClustersWellKnownComponentInputs) {
		super(entity, options.name, "container.v1beta1.ProjectsLocationsClustersWellKnown", options);
	}
}
export interface ProjectsLocationsClustersWellKnownComponentOutputs {}
export interface ProjectsLocationsClustersWellKnownComponentInputs {
	readonly type: string;
	readonly name: string;
}
export default {
	ProjectsLocationsClustersWellKnown: ProjectsLocationsClustersWellKnown,
};

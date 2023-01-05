import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsAggregatedUsableSubnetworks
	extends GdmResource<ProjectsAggregatedUsableSubnetworksComponentInputs>
	implements ProjectsAggregatedUsableSubnetworksComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsAggregatedUsableSubnetworksComponentInputs) {
		super(entity, options.name, "container.v1.ProjectsAggregatedUsableSubnetworks", options);
	}
}
export interface ProjectsAggregatedUsableSubnetworksComponentOutputs {}
export interface ProjectsAggregatedUsableSubnetworksComponentInputs {
	readonly name: string;
}
export default {
	ProjectsAggregatedUsableSubnetworks: ProjectsAggregatedUsableSubnetworks,
};

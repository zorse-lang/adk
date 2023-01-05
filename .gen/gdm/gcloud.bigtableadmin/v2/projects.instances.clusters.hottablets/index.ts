import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsInstancesClustersHotTablets
	extends GdmResource<ProjectsInstancesClustersHotTabletsComponentInputs>
	implements ProjectsInstancesClustersHotTabletsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsInstancesClustersHotTabletsComponentInputs) {
		super(entity, options.name, "bigtableadmin.v2.ProjectsInstancesClustersHotTablets", options);
	}
}
export interface ProjectsInstancesClustersHotTabletsComponentOutputs {}
export interface ProjectsInstancesClustersHotTabletsComponentInputs {
	readonly name: string;
}
export default {
	ProjectsInstancesClustersHotTablets: ProjectsInstancesClustersHotTablets,
};

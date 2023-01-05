import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsTopicsSnapshots
	extends GdmResource<ProjectsTopicsSnapshotsComponentInputs>
	implements ProjectsTopicsSnapshotsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsTopicsSnapshotsComponentInputs) {
		super(entity, options.name, "pubsub.v1.ProjectsTopicsSnapshots", options);
	}
}
export interface ProjectsTopicsSnapshotsComponentOutputs {}
export interface ProjectsTopicsSnapshotsComponentInputs {
	readonly name: string;
}
export default {
	ProjectsTopicsSnapshots: ProjectsTopicsSnapshots,
};

import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsSnapshots
	extends GdmResource<ProjectsSnapshotsComponentInputs>
	implements ProjectsSnapshotsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsSnapshotsComponentInputs) {
		super(entity, options.name, "pubsub.v1.ProjectsSnapshots", options);
	}
}
export interface ProjectsSnapshotsComponentOutputs {}
export interface ProjectsSnapshotsComponentInputs {
	readonly expireTime?: string;
	readonly labels?: { [P in string]: string };
	readonly name: string;
	readonly subscription: string;
	readonly topic?: string;
}
export interface CreateSnapshotRequest {
	readonly labels?: { [P in string]: string };
	readonly subscription: string;
}
export interface Snapshot {
	readonly expireTime?: string;
	readonly labels?: { [P in string]: string };
	readonly name?: string;
	readonly topic?: string;
}
export default {
	ProjectsSnapshots: ProjectsSnapshots,
};

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
	readonly expireTime?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly name: string;
	readonly subscription: string;
	readonly topic?: string | undefined;
	readonly type: string;
}
export interface CreateSnapshotRequest {
	readonly labels?: { [P in string]: string } | undefined;
	readonly subscription: string;
}
export interface Snapshot {
	readonly expireTime?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly name?: string | undefined;
	readonly topic?: string | undefined;
}
export default {
	ProjectsSnapshots: ProjectsSnapshots,
};

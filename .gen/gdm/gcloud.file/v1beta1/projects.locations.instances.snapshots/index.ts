import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationsInstancesSnapshots
	extends GdmResource<ProjectsLocationsInstancesSnapshotsComponentInputs>
	implements ProjectsLocationsInstancesSnapshotsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsInstancesSnapshotsComponentInputs) {
		super(entity, options.name, "file.v1beta1.ProjectsLocationsInstancesSnapshots", options);
	}
	public readonly createTime?: string;
	public readonly filesystemUsedBytes?: string;
	public readonly state?: string;
}
export interface ProjectsLocationsInstancesSnapshotsComponentOutputs {
	readonly createTime?: string;
	readonly filesystemUsedBytes?: string;
	readonly state?: string;
}
export interface ProjectsLocationsInstancesSnapshotsComponentInputs {
	readonly description?: string;
	readonly labels?: { [P in string]: string };
	readonly name: string;
	readonly parent: string;
	readonly snapshotId: string;
}
export interface Snapshot {
	readonly createTime?: string;
	readonly description?: string;
	readonly filesystemUsedBytes?: string;
	readonly labels?: { [P in string]: string };
	readonly name?: string;
	readonly state?: string;
}
export default {
	ProjectsLocationsInstancesSnapshots: ProjectsLocationsInstancesSnapshots,
};

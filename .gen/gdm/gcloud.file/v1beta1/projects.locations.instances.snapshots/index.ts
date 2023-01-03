import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationsInstancesSnapshots
	extends GdmResource<ProjectsLocationsInstancesSnapshotsComponentInputs>
	implements ProjectsLocationsInstancesSnapshotsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsInstancesSnapshotsComponentInputs) {
		super(entity, options.name, "file.v1beta1.ProjectsLocationsInstancesSnapshots", options);
	}
	public readonly createTime?: string | undefined;
	public readonly filesystemUsedBytes?: string | undefined;
	public readonly state?: string | undefined;
}
export interface ProjectsLocationsInstancesSnapshotsComponentOutputs {
	readonly createTime?: string | undefined;
	readonly filesystemUsedBytes?: string | undefined;
	readonly state?: string | undefined;
}
export interface ProjectsLocationsInstancesSnapshotsComponentInputs {
	readonly description?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly name: string;
	readonly parent: string;
	readonly snapshotId: string;
	readonly type: string;
}
export interface Snapshot {
	readonly createTime?: string | undefined;
	readonly description?: string | undefined;
	readonly filesystemUsedBytes?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly name?: string | undefined;
	readonly state?: string | undefined;
}
export default {
	ProjectsLocationsInstancesSnapshots: ProjectsLocationsInstancesSnapshots,
};

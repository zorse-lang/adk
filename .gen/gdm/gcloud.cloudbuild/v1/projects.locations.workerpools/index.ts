import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationsWorkerPools
	extends GdmResource<ProjectsLocationsWorkerPoolsComponentInputs>
	implements ProjectsLocationsWorkerPoolsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsWorkerPoolsComponentInputs) {
		super(entity, options.name, "cloudbuild.v1.ProjectsLocationsWorkerPools", options);
	}
	public readonly createTime?: string | undefined;
	public readonly deleteTime?: string | undefined;
	public readonly etag?: string | undefined;
	public readonly state?: string | undefined;
	public readonly uid?: string | undefined;
	public readonly updateTime?: string | undefined;
}
export interface ProjectsLocationsWorkerPoolsComponentOutputs {
	readonly createTime?: string | undefined;
	readonly deleteTime?: string | undefined;
	readonly etag?: string | undefined;
	readonly state?: string | undefined;
	readonly uid?: string | undefined;
	readonly updateTime?: string | undefined;
}
export interface ProjectsLocationsWorkerPoolsComponentInputs {
	readonly annotations?: { [P in string]: string } | undefined;
	readonly displayName?: string | undefined;
	readonly name: string;
	readonly parent: string;
	readonly privatePoolV1Config?: PrivatePoolV1Config | undefined;
	readonly validateOnly?: boolean | undefined;
	readonly workerPoolId: string;
	readonly type: string;
}
export interface NetworkConfig {
	readonly egressOption?: string | undefined;
	readonly peeredNetwork: string;
	readonly peeredNetworkIpRange?: string | undefined;
}
export interface PrivatePoolV1Config {
	readonly networkConfig?: NetworkConfig | undefined;
	readonly workerConfig?: WorkerConfig | undefined;
}
export interface WorkerConfig {
	readonly diskSizeGb?: string | undefined;
	readonly machineType?: string | undefined;
}
export interface WorkerPool {
	readonly annotations?: { [P in string]: string } | undefined;
	readonly createTime?: string | undefined;
	readonly deleteTime?: string | undefined;
	readonly displayName?: string | undefined;
	readonly etag?: string | undefined;
	readonly name?: string | undefined;
	readonly privatePoolV1Config?: PrivatePoolV1Config | undefined;
	readonly state?: string | undefined;
	readonly uid?: string | undefined;
	readonly updateTime?: string | undefined;
}
export default {
	ProjectsLocationsWorkerPools: ProjectsLocationsWorkerPools,
};

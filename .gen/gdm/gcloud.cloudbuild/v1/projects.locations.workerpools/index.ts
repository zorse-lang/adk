import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationsWorkerPools
	extends GdmResource<ProjectsLocationsWorkerPoolsComponentInputs>
	implements ProjectsLocationsWorkerPoolsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsWorkerPoolsComponentInputs) {
		super(entity, options.name, "cloudbuild.v1.ProjectsLocationsWorkerPools", options);
	}
	public readonly createTime?: string;
	public readonly deleteTime?: string;
	public readonly etag?: string;
	public readonly state?: string;
	public readonly uid?: string;
	public readonly updateTime?: string;
}
export interface ProjectsLocationsWorkerPoolsComponentOutputs {
	readonly createTime?: string;
	readonly deleteTime?: string;
	readonly etag?: string;
	readonly state?: string;
	readonly uid?: string;
	readonly updateTime?: string;
}
export interface ProjectsLocationsWorkerPoolsComponentInputs {
	readonly annotations?: { [P in string]: string };
	readonly displayName?: string;
	readonly name: string;
	readonly parent: string;
	readonly privatePoolV1Config?: PrivatePoolV1Config;
	readonly validateOnly?: boolean;
	readonly workerPoolId: string;
}
export interface NetworkConfig {
	readonly egressOption?: string;
	readonly peeredNetwork: string;
	readonly peeredNetworkIpRange?: string;
}
export interface PrivatePoolV1Config {
	readonly networkConfig?: NetworkConfig;
	readonly workerConfig?: WorkerConfig;
}
export interface WorkerConfig {
	readonly diskSizeGb?: string;
	readonly machineType?: string;
}
export interface WorkerPool {
	readonly annotations?: { [P in string]: string };
	readonly createTime?: string;
	readonly deleteTime?: string;
	readonly displayName?: string;
	readonly etag?: string;
	readonly name?: string;
	readonly privatePoolV1Config?: PrivatePoolV1Config;
	readonly state?: string;
	readonly uid?: string;
	readonly updateTime?: string;
}
export default {
	ProjectsLocationsWorkerPools: ProjectsLocationsWorkerPools,
};

import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsInstanceConfigs
	extends GdmResource<ProjectsInstanceConfigsComponentInputs>
	implements ProjectsInstanceConfigsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsInstanceConfigsComponentInputs) {
		super(entity, options.name, "spanner.v1.ProjectsInstanceConfigs", options);
	}
	public readonly configType?: string;
	public readonly freeInstanceAvailability?: string;
	public readonly optionalReplicas?: ReplicaInfo[];
	public readonly reconciling?: boolean;
	public readonly state?: string;
}
export interface ProjectsInstanceConfigsComponentOutputs {
	readonly configType?: string;
	readonly freeInstanceAvailability?: string;
	readonly optionalReplicas?: ReplicaInfo[];
	readonly reconciling?: boolean;
	readonly state?: string;
}
export interface ProjectsInstanceConfigsComponentInputs {
	readonly baseConfig?: string;
	readonly displayName?: string;
	readonly etag?: string;
	readonly instanceConfig: InstanceConfig;
	readonly instanceConfigId: string;
	readonly labels?: { [P in string]: string };
	readonly leaderOptions?: string[];
	readonly name: string;
	readonly parent: string;
	readonly replicas?: ReplicaInfo[];
	readonly validateOnly?: boolean;
}
export interface CreateInstanceConfigRequest {
	readonly instanceConfig: InstanceConfig;
	readonly instanceConfigId: string;
	readonly validateOnly?: boolean;
}
export interface InstanceConfig {
	readonly baseConfig?: string;
	readonly configType?: string;
	readonly displayName?: string;
	readonly etag?: string;
	readonly freeInstanceAvailability?: string;
	readonly labels?: { [P in string]: string };
	readonly leaderOptions?: string[];
	readonly name?: string;
	readonly optionalReplicas?: ReplicaInfo[];
	readonly reconciling?: boolean;
	readonly replicas?: ReplicaInfo[];
	readonly state?: string;
}
export interface ReplicaInfo {
	readonly defaultLeaderLocation?: boolean;
	readonly location?: string;
	readonly type?: string;
}
export default {
	ProjectsInstanceConfigs: ProjectsInstanceConfigs,
};

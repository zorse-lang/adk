import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsInstanceConfigs
	extends GdmResource<ProjectsInstanceConfigsComponentInputs>
	implements ProjectsInstanceConfigsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsInstanceConfigsComponentInputs) {
		super(entity, options.name, "spanner.v1.ProjectsInstanceConfigs", options);
	}
	public readonly configType?: string | undefined;
	public readonly freeInstanceAvailability?: string | undefined;
	public readonly optionalReplicas?: ReplicaInfo[] | undefined;
	public readonly reconciling?: boolean | undefined;
	public readonly state?: string | undefined;
}
export interface ProjectsInstanceConfigsComponentOutputs {
	readonly configType?: string | undefined;
	readonly freeInstanceAvailability?: string | undefined;
	readonly optionalReplicas?: ReplicaInfo[] | undefined;
	readonly reconciling?: boolean | undefined;
	readonly state?: string | undefined;
}
export interface ProjectsInstanceConfigsComponentInputs {
	readonly baseConfig?: string | undefined;
	readonly displayName?: string | undefined;
	readonly etag?: string | undefined;
	readonly instanceConfig: InstanceConfig;
	readonly instanceConfigId: string;
	readonly labels?: { [P in string]: string } | undefined;
	readonly leaderOptions?: string[] | undefined;
	readonly name: string;
	readonly parent: string;
	readonly replicas?: ReplicaInfo[] | undefined;
	readonly validateOnly?: boolean | undefined;
	readonly type: string;
}
export interface CreateInstanceConfigRequest {
	readonly instanceConfig: InstanceConfig;
	readonly instanceConfigId: string;
	readonly validateOnly?: boolean | undefined;
}
export interface InstanceConfig {
	readonly baseConfig?: string | undefined;
	readonly configType?: string | undefined;
	readonly displayName?: string | undefined;
	readonly etag?: string | undefined;
	readonly freeInstanceAvailability?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly leaderOptions?: string[] | undefined;
	readonly name?: string | undefined;
	readonly optionalReplicas?: ReplicaInfo[] | undefined;
	readonly reconciling?: boolean | undefined;
	readonly replicas?: ReplicaInfo[] | undefined;
	readonly state?: string | undefined;
}
export interface ReplicaInfo {
	readonly defaultLeaderLocation?: boolean | undefined;
	readonly location?: string | undefined;
	readonly type?: string | undefined;
}
export default {
	ProjectsInstanceConfigs: ProjectsInstanceConfigs,
};

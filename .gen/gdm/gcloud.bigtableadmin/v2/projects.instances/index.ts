import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsInstances
	extends GdmResource<ProjectsInstancesComponentInputs>
	implements ProjectsInstancesComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsInstancesComponentInputs) {
		super(entity, options.name, "bigtableadmin.v2.ProjectsInstances", options);
	}
	public readonly createTime?: string | undefined;
	public readonly satisfiesPzs?: boolean | undefined;
	public readonly state?: string | undefined;
}
export interface ProjectsInstancesComponentOutputs {
	readonly createTime?: string | undefined;
	readonly satisfiesPzs?: boolean | undefined;
	readonly state?: string | undefined;
}
export interface ProjectsInstancesComponentInputs {
	readonly clusters: { [P in string]: Cluster };
	readonly displayName: string;
	readonly instance: Instance;
	readonly instanceId: string;
	readonly labels?: { [P in string]: string } | undefined;
	readonly name: string;
	readonly parent: string;
	readonly type: string;
}
export interface AutoscalingLimits {
	readonly maxServeNodes: number;
	readonly minServeNodes: number;
}
export interface AutoscalingTargets {
	readonly cpuUtilizationPercent?: number | undefined;
	readonly storageUtilizationGibPerNode?: number | undefined;
}
export interface Cluster {
	readonly clusterConfig?: ClusterConfig | undefined;
	readonly defaultStorageType?: string | undefined;
	readonly encryptionConfig?: EncryptionConfig | undefined;
	readonly location?: string | undefined;
	readonly name?: string | undefined;
	readonly serveNodes?: number | undefined;
}
export interface ClusterAutoscalingConfig {
	readonly autoscalingLimits: AutoscalingLimits;
	readonly autoscalingTargets: AutoscalingTargets;
}
export interface ClusterConfig {
	readonly clusterAutoscalingConfig?: ClusterAutoscalingConfig | undefined;
}
export interface CreateInstanceRequest {
	readonly clusters: { [P in string]: Cluster };
	readonly instance: Instance;
	readonly instanceId: string;
	readonly parent: string;
}
export interface EncryptionConfig {
	readonly kmsKeyName?: string | undefined;
}
export interface Instance {
	readonly createTime?: string | undefined;
	readonly displayName: string;
	readonly labels?: { [P in string]: string } | undefined;
	readonly name?: string | undefined;
	readonly satisfiesPzs?: boolean | undefined;
	readonly state?: string | undefined;
	readonly type?: string | undefined;
}
export default {
	ProjectsInstances: ProjectsInstances,
};

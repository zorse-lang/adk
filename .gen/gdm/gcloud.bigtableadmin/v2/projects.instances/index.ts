import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsInstances
	extends GdmResource<ProjectsInstancesComponentInputs>
	implements ProjectsInstancesComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsInstancesComponentInputs) {
		super(entity, options.name, "bigtableadmin.v2.ProjectsInstances", options);
	}
	public readonly createTime?: string;
	public readonly satisfiesPzs?: boolean;
	public readonly state?: string;
}
export interface ProjectsInstancesComponentOutputs {
	readonly createTime?: string;
	readonly satisfiesPzs?: boolean;
	readonly state?: string;
}
export interface ProjectsInstancesComponentInputs {
	readonly clusters: { [P in string]: Cluster };
	readonly displayName: string;
	readonly instance: Instance;
	readonly instanceId: string;
	readonly labels?: { [P in string]: string };
	readonly name: string;
	readonly parent: string;
}
export interface AutoscalingLimits {
	readonly maxServeNodes: number;
	readonly minServeNodes: number;
}
export interface AutoscalingTargets {
	readonly cpuUtilizationPercent?: number;
	readonly storageUtilizationGibPerNode?: number;
}
export interface Cluster {
	readonly clusterConfig?: ClusterConfig;
	readonly defaultStorageType?: string;
	readonly encryptionConfig?: EncryptionConfig;
	readonly location?: string;
	readonly name?: string;
	readonly serveNodes?: number;
}
export interface ClusterAutoscalingConfig {
	readonly autoscalingLimits: AutoscalingLimits;
	readonly autoscalingTargets: AutoscalingTargets;
}
export interface ClusterConfig {
	readonly clusterAutoscalingConfig?: ClusterAutoscalingConfig;
}
export interface CreateInstanceRequest {
	readonly clusters: { [P in string]: Cluster };
	readonly instance: Instance;
	readonly instanceId: string;
	readonly parent: string;
}
export interface EncryptionConfig {
	readonly kmsKeyName?: string;
}
export interface Instance {
	readonly createTime?: string;
	readonly displayName: string;
	readonly labels?: { [P in string]: string };
	readonly name?: string;
	readonly satisfiesPzs?: boolean;
	readonly state?: string;
	readonly type?: string;
}
export default {
	ProjectsInstances: ProjectsInstances,
};

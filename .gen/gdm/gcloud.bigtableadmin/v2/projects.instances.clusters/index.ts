import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsInstancesClusters
	extends GdmResource<ProjectsInstancesClustersComponentInputs>
	implements ProjectsInstancesClustersComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsInstancesClustersComponentInputs) {
		super(entity, options.name, "bigtableadmin.v2.ProjectsInstancesClusters", options);
	}
	public readonly state?: string;
}
export interface ProjectsInstancesClustersComponentOutputs {
	readonly state?: string;
}
export interface ProjectsInstancesClustersComponentInputs {
	readonly clusterConfig?: ClusterConfig;
	readonly clusterId: string;
	readonly defaultStorageType?: string;
	readonly encryptionConfig?: EncryptionConfig;
	readonly location?: string;
	readonly name: string;
	readonly parent: string;
	readonly serveNodes?: number;
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
	readonly state?: string;
}
export interface ClusterAutoscalingConfig {
	readonly autoscalingLimits: AutoscalingLimits;
	readonly autoscalingTargets: AutoscalingTargets;
}
export interface ClusterConfig {
	readonly clusterAutoscalingConfig?: ClusterAutoscalingConfig;
}
export interface EncryptionConfig {
	readonly kmsKeyName?: string;
}
export default {
	ProjectsInstancesClusters: ProjectsInstancesClusters,
};

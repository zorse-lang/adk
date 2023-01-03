import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsInstancesClusters
	extends GdmResource<ProjectsInstancesClustersComponentInputs>
	implements ProjectsInstancesClustersComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsInstancesClustersComponentInputs) {
		super(entity, options.name, "bigtableadmin.v2.ProjectsInstancesClusters", options);
	}
	public readonly state?: string | undefined;
}
export interface ProjectsInstancesClustersComponentOutputs {
	readonly state?: string | undefined;
}
export interface ProjectsInstancesClustersComponentInputs {
	readonly clusterConfig?: ClusterConfig | undefined;
	readonly clusterId: string;
	readonly defaultStorageType?: string | undefined;
	readonly encryptionConfig?: EncryptionConfig | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly parent: string;
	readonly serveNodes?: number | undefined;
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
	readonly state?: string | undefined;
}
export interface ClusterAutoscalingConfig {
	readonly autoscalingLimits: AutoscalingLimits;
	readonly autoscalingTargets: AutoscalingTargets;
}
export interface ClusterConfig {
	readonly clusterAutoscalingConfig?: ClusterAutoscalingConfig | undefined;
}
export interface EncryptionConfig {
	readonly kmsKeyName?: string | undefined;
}
export default {
	ProjectsInstancesClusters: ProjectsInstancesClusters,
};

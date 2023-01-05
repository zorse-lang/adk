import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationsBatches
	extends GdmResource<ProjectsLocationsBatchesComponentInputs>
	implements ProjectsLocationsBatchesComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsBatchesComponentInputs) {
		super(entity, options.name, "dataproc.v1.ProjectsLocationsBatches", options);
	}
	public readonly createTime?: string;
	public readonly creator?: string;
	public readonly operation?: string;
	public readonly runtimeInfo?: RuntimeInfo;
	public readonly state?: string;
	public readonly stateHistory?: StateHistory[];
	public readonly stateMessage?: string;
	public readonly stateTime?: string;
	public readonly uuid?: string;
}
export interface ProjectsLocationsBatchesComponentOutputs {
	readonly createTime?: string;
	readonly creator?: string;
	readonly operation?: string;
	readonly runtimeInfo?: RuntimeInfo;
	readonly state?: string;
	readonly stateHistory?: StateHistory[];
	readonly stateMessage?: string;
	readonly stateTime?: string;
	readonly uuid?: string;
}
export interface ProjectsLocationsBatchesComponentInputs {
	readonly batchId?: string;
	readonly environmentConfig?: EnvironmentConfig;
	readonly labels?: { [P in string]: string };
	readonly name: string;
	readonly parent: string;
	readonly pysparkBatch?: PySparkBatch;
	readonly requestId?: string;
	readonly runtimeConfig?: RuntimeConfig;
	readonly sparkBatch?: SparkBatch;
	readonly sparkRBatch?: SparkRBatch;
	readonly sparkSqlBatch?: SparkSqlBatch;
}
export interface Batch {
	readonly createTime?: string;
	readonly creator?: string;
	readonly environmentConfig?: EnvironmentConfig;
	readonly labels?: { [P in string]: string };
	readonly name?: string;
	readonly operation?: string;
	readonly pysparkBatch?: PySparkBatch;
	readonly runtimeConfig?: RuntimeConfig;
	readonly runtimeInfo?: RuntimeInfo;
	readonly sparkBatch?: SparkBatch;
	readonly sparkRBatch?: SparkRBatch;
	readonly sparkSqlBatch?: SparkSqlBatch;
	readonly state?: string;
	readonly stateHistory?: StateHistory[];
	readonly stateMessage?: string;
	readonly stateTime?: string;
	readonly uuid?: string;
}
export interface EnvironmentConfig {
	readonly executionConfig?: ExecutionConfig;
	readonly peripheralsConfig?: PeripheralsConfig;
}
export interface ExecutionConfig {
	readonly idleTtl?: string;
	readonly kmsKey?: string;
	readonly networkTags?: string[];
	readonly networkUri?: string;
	readonly serviceAccount?: string;
	readonly subnetworkUri?: string;
}
export interface PeripheralsConfig {
	readonly metastoreService?: string;
	readonly sparkHistoryServerConfig?: SparkHistoryServerConfig;
}
export interface PySparkBatch {
	readonly archiveUris?: string[];
	readonly args?: string[];
	readonly fileUris?: string[];
	readonly jarFileUris?: string[];
	readonly mainPythonFileUri: string;
	readonly pythonFileUris?: string[];
}
export interface RuntimeConfig {
	readonly containerImage?: string;
	readonly properties?: { [P in string]: string };
	readonly version?: string;
}
export interface RuntimeInfo {
	readonly approximateUsage?: UsageMetrics;
	readonly currentUsage?: UsageSnapshot;
	readonly diagnosticOutputUri?: string;
	readonly endpoints?: { [P in string]: string };
	readonly outputUri?: string;
}
export interface SparkBatch {
	readonly archiveUris?: string[];
	readonly args?: string[];
	readonly fileUris?: string[];
	readonly jarFileUris?: string[];
	readonly mainClass?: string;
	readonly mainJarFileUri?: string;
}
export interface SparkHistoryServerConfig {
	readonly dataprocCluster?: string;
}
export interface SparkRBatch {
	readonly archiveUris?: string[];
	readonly args?: string[];
	readonly fileUris?: string[];
	readonly mainRFileUri: string;
}
export interface SparkSqlBatch {
	readonly jarFileUris?: string[];
	readonly queryFileUri: string;
	readonly queryVariables?: { [P in string]: string };
}
export interface StateHistory {
	readonly state?: string;
	readonly stateMessage?: string;
	readonly stateStartTime?: string;
}
export interface UsageMetrics {
	readonly milliDcuSeconds?: string;
	readonly shuffleStorageGbSeconds?: string;
}
export interface UsageSnapshot {
	readonly milliDcu?: string;
	readonly shuffleStorageGb?: string;
	readonly snapshotTime?: string;
}
export default {
	ProjectsLocationsBatches: ProjectsLocationsBatches,
};

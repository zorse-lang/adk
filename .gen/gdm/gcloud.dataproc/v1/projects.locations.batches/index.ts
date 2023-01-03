import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationsBatches
	extends GdmResource<ProjectsLocationsBatchesComponentInputs>
	implements ProjectsLocationsBatchesComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsBatchesComponentInputs) {
		super(entity, options.name, "dataproc.v1.ProjectsLocationsBatches", options);
	}
	public readonly createTime?: string | undefined;
	public readonly creator?: string | undefined;
	public readonly operation?: string | undefined;
	public readonly runtimeInfo?: RuntimeInfo | undefined;
	public readonly state?: string | undefined;
	public readonly stateHistory?: StateHistory[] | undefined;
	public readonly stateMessage?: string | undefined;
	public readonly stateTime?: string | undefined;
	public readonly uuid?: string | undefined;
}
export interface ProjectsLocationsBatchesComponentOutputs {
	readonly createTime?: string | undefined;
	readonly creator?: string | undefined;
	readonly operation?: string | undefined;
	readonly runtimeInfo?: RuntimeInfo | undefined;
	readonly state?: string | undefined;
	readonly stateHistory?: StateHistory[] | undefined;
	readonly stateMessage?: string | undefined;
	readonly stateTime?: string | undefined;
	readonly uuid?: string | undefined;
}
export interface ProjectsLocationsBatchesComponentInputs {
	readonly batchId?: string | undefined;
	readonly environmentConfig?: EnvironmentConfig | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly name: string;
	readonly parent: string;
	readonly pysparkBatch?: PySparkBatch | undefined;
	readonly requestId?: string | undefined;
	readonly runtimeConfig?: RuntimeConfig | undefined;
	readonly sparkBatch?: SparkBatch | undefined;
	readonly sparkRBatch?: SparkRBatch | undefined;
	readonly sparkSqlBatch?: SparkSqlBatch | undefined;
	readonly type: string;
}
export interface Batch {
	readonly createTime?: string | undefined;
	readonly creator?: string | undefined;
	readonly environmentConfig?: EnvironmentConfig | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly name?: string | undefined;
	readonly operation?: string | undefined;
	readonly pysparkBatch?: PySparkBatch | undefined;
	readonly runtimeConfig?: RuntimeConfig | undefined;
	readonly runtimeInfo?: RuntimeInfo | undefined;
	readonly sparkBatch?: SparkBatch | undefined;
	readonly sparkRBatch?: SparkRBatch | undefined;
	readonly sparkSqlBatch?: SparkSqlBatch | undefined;
	readonly state?: string | undefined;
	readonly stateHistory?: StateHistory[] | undefined;
	readonly stateMessage?: string | undefined;
	readonly stateTime?: string | undefined;
	readonly uuid?: string | undefined;
}
export interface EnvironmentConfig {
	readonly executionConfig?: ExecutionConfig | undefined;
	readonly peripheralsConfig?: PeripheralsConfig | undefined;
}
export interface ExecutionConfig {
	readonly idleTtl?: string | undefined;
	readonly kmsKey?: string | undefined;
	readonly networkTags?: string[] | undefined;
	readonly networkUri?: string | undefined;
	readonly serviceAccount?: string | undefined;
	readonly subnetworkUri?: string | undefined;
}
export interface PeripheralsConfig {
	readonly metastoreService?: string | undefined;
	readonly sparkHistoryServerConfig?: SparkHistoryServerConfig | undefined;
}
export interface PySparkBatch {
	readonly archiveUris?: string[] | undefined;
	readonly args?: string[] | undefined;
	readonly fileUris?: string[] | undefined;
	readonly jarFileUris?: string[] | undefined;
	readonly mainPythonFileUri: string;
	readonly pythonFileUris?: string[] | undefined;
}
export interface RuntimeConfig {
	readonly containerImage?: string | undefined;
	readonly properties?: { [P in string]: string } | undefined;
	readonly version?: string | undefined;
}
export interface RuntimeInfo {
	readonly approximateUsage?: UsageMetrics | undefined;
	readonly currentUsage?: UsageSnapshot | undefined;
	readonly diagnosticOutputUri?: string | undefined;
	readonly endpoints?: { [P in string]: string } | undefined;
	readonly outputUri?: string | undefined;
}
export interface SparkBatch {
	readonly archiveUris?: string[] | undefined;
	readonly args?: string[] | undefined;
	readonly fileUris?: string[] | undefined;
	readonly jarFileUris?: string[] | undefined;
	readonly mainClass?: string | undefined;
	readonly mainJarFileUri?: string | undefined;
}
export interface SparkHistoryServerConfig {
	readonly dataprocCluster?: string | undefined;
}
export interface SparkRBatch {
	readonly archiveUris?: string[] | undefined;
	readonly args?: string[] | undefined;
	readonly fileUris?: string[] | undefined;
	readonly mainRFileUri: string;
}
export interface SparkSqlBatch {
	readonly jarFileUris?: string[] | undefined;
	readonly queryFileUri: string;
	readonly queryVariables?: { [P in string]: string } | undefined;
}
export interface StateHistory {
	readonly state?: string | undefined;
	readonly stateMessage?: string | undefined;
	readonly stateStartTime?: string | undefined;
}
export interface UsageMetrics {
	readonly milliDcuSeconds?: string | undefined;
	readonly shuffleStorageGbSeconds?: string | undefined;
}
export interface UsageSnapshot {
	readonly milliDcu?: string | undefined;
	readonly shuffleStorageGb?: string | undefined;
	readonly snapshotTime?: string | undefined;
}
export default {
	ProjectsLocationsBatches: ProjectsLocationsBatches,
};

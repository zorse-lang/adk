import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsRegionsJobs
	extends GdmResource<ProjectsRegionsJobsComponentInputs>
	implements ProjectsRegionsJobsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsRegionsJobsComponentInputs) {
		super(entity, options.name, "dataproc.v1.ProjectsRegionsJobs", options);
	}
	public readonly done?: boolean | undefined;
	public readonly driverControlFilesUri?: string | undefined;
	public readonly driverOutputResourceUri?: string | undefined;
	public readonly jobUuid?: string | undefined;
	public readonly status?: JobStatus | undefined;
	public readonly statusHistory?: JobStatus[] | undefined;
	public readonly yarnApplications?: YarnApplication[] | undefined;
}
export interface ProjectsRegionsJobsComponentOutputs {
	readonly done?: boolean | undefined;
	readonly driverControlFilesUri?: string | undefined;
	readonly driverOutputResourceUri?: string | undefined;
	readonly jobUuid?: string | undefined;
	readonly status?: JobStatus | undefined;
	readonly statusHistory?: JobStatus[] | undefined;
	readonly yarnApplications?: YarnApplication[] | undefined;
}
export interface ProjectsRegionsJobsComponentInputs {
	readonly driverSchedulingConfig?: DriverSchedulingConfig | undefined;
	readonly hadoopJob?: HadoopJob | undefined;
	readonly hiveJob?: HiveJob | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly pigJob?: PigJob | undefined;
	readonly placement: JobPlacement;
	readonly prestoJob?: PrestoJob | undefined;
	readonly pysparkJob?: PySparkJob | undefined;
	readonly reference?: JobReference | undefined;
	readonly scheduling?: JobScheduling | undefined;
	readonly sparkJob?: SparkJob | undefined;
	readonly sparkRJob?: SparkRJob | undefined;
	readonly sparkSqlJob?: SparkSqlJob | undefined;
	readonly trinoJob?: TrinoJob | undefined;
	readonly type: string;
	readonly name: string;
}
export interface DriverSchedulingConfig {
	readonly memoryMb: number;
	readonly vcores: number;
}
export interface HadoopJob {
	readonly archiveUris?: string[] | undefined;
	readonly args?: string[] | undefined;
	readonly fileUris?: string[] | undefined;
	readonly jarFileUris?: string[] | undefined;
	readonly loggingConfig?: LoggingConfig | undefined;
	readonly mainClass?: string | undefined;
	readonly mainJarFileUri?: string | undefined;
	readonly properties?: { [P in string]: string } | undefined;
}
export interface HiveJob {
	readonly continueOnFailure?: boolean | undefined;
	readonly jarFileUris?: string[] | undefined;
	readonly properties?: { [P in string]: string } | undefined;
	readonly queryFileUri?: string | undefined;
	readonly queryList?: QueryList | undefined;
	readonly scriptVariables?: { [P in string]: string } | undefined;
}
export interface Job {
	readonly done?: boolean | undefined;
	readonly driverControlFilesUri?: string | undefined;
	readonly driverOutputResourceUri?: string | undefined;
	readonly driverSchedulingConfig?: DriverSchedulingConfig | undefined;
	readonly hadoopJob?: HadoopJob | undefined;
	readonly hiveJob?: HiveJob | undefined;
	readonly jobUuid?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly pigJob?: PigJob | undefined;
	readonly placement: JobPlacement;
	readonly prestoJob?: PrestoJob | undefined;
	readonly pysparkJob?: PySparkJob | undefined;
	readonly reference?: JobReference | undefined;
	readonly scheduling?: JobScheduling | undefined;
	readonly sparkJob?: SparkJob | undefined;
	readonly sparkRJob?: SparkRJob | undefined;
	readonly sparkSqlJob?: SparkSqlJob | undefined;
	readonly status?: JobStatus | undefined;
	readonly statusHistory?: JobStatus[] | undefined;
	readonly trinoJob?: TrinoJob | undefined;
	readonly yarnApplications?: YarnApplication[] | undefined;
}
export interface JobPlacement {
	readonly clusterLabels?: { [P in string]: string } | undefined;
	readonly clusterName: string;
	readonly clusterUuid?: string | undefined;
}
export interface JobReference {
	readonly jobId?: string | undefined;
	readonly projectId?: string | undefined;
}
export interface JobScheduling {
	readonly maxFailuresPerHour?: number | undefined;
	readonly maxFailuresTotal?: number | undefined;
}
export interface JobStatus {
	readonly details?: string | undefined;
	readonly state?: string | undefined;
	readonly stateStartTime?: string | undefined;
	readonly substate?: string | undefined;
}
export interface LoggingConfig {
	readonly driverLogLevels?: { [P in string]: string } | undefined;
}
export interface PigJob {
	readonly continueOnFailure?: boolean | undefined;
	readonly jarFileUris?: string[] | undefined;
	readonly loggingConfig?: LoggingConfig | undefined;
	readonly properties?: { [P in string]: string } | undefined;
	readonly queryFileUri?: string | undefined;
	readonly queryList?: QueryList | undefined;
	readonly scriptVariables?: { [P in string]: string } | undefined;
}
export interface PrestoJob {
	readonly clientTags?: string[] | undefined;
	readonly continueOnFailure?: boolean | undefined;
	readonly loggingConfig?: LoggingConfig | undefined;
	readonly outputFormat?: string | undefined;
	readonly properties?: { [P in string]: string } | undefined;
	readonly queryFileUri?: string | undefined;
	readonly queryList?: QueryList | undefined;
}
export interface PySparkJob {
	readonly archiveUris?: string[] | undefined;
	readonly args?: string[] | undefined;
	readonly fileUris?: string[] | undefined;
	readonly jarFileUris?: string[] | undefined;
	readonly loggingConfig?: LoggingConfig | undefined;
	readonly mainPythonFileUri: string;
	readonly properties?: { [P in string]: string } | undefined;
	readonly pythonFileUris?: string[] | undefined;
}
export interface QueryList {
	readonly queries: string[];
}
export interface SparkJob {
	readonly archiveUris?: string[] | undefined;
	readonly args?: string[] | undefined;
	readonly fileUris?: string[] | undefined;
	readonly jarFileUris?: string[] | undefined;
	readonly loggingConfig?: LoggingConfig | undefined;
	readonly mainClass?: string | undefined;
	readonly mainJarFileUri?: string | undefined;
	readonly properties?: { [P in string]: string } | undefined;
}
export interface SparkRJob {
	readonly archiveUris?: string[] | undefined;
	readonly args?: string[] | undefined;
	readonly fileUris?: string[] | undefined;
	readonly loggingConfig?: LoggingConfig | undefined;
	readonly mainRFileUri: string;
	readonly properties?: { [P in string]: string } | undefined;
}
export interface SparkSqlJob {
	readonly jarFileUris?: string[] | undefined;
	readonly loggingConfig?: LoggingConfig | undefined;
	readonly properties?: { [P in string]: string } | undefined;
	readonly queryFileUri?: string | undefined;
	readonly queryList?: QueryList | undefined;
	readonly scriptVariables?: { [P in string]: string } | undefined;
}
export interface TrinoJob {
	readonly clientTags?: string[] | undefined;
	readonly continueOnFailure?: boolean | undefined;
	readonly loggingConfig?: LoggingConfig | undefined;
	readonly outputFormat?: string | undefined;
	readonly properties?: { [P in string]: string } | undefined;
	readonly queryFileUri?: string | undefined;
	readonly queryList?: QueryList | undefined;
}
export interface YarnApplication {
	readonly name: string;
	readonly progress: number;
	readonly state: string;
	readonly trackingUrl?: string | undefined;
}
export default {
	ProjectsRegionsJobs: ProjectsRegionsJobs,
};

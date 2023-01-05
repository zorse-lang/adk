import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsRegionsJobs
	extends GdmResource<ProjectsRegionsJobsComponentInputs>
	implements ProjectsRegionsJobsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsRegionsJobsComponentInputs) {
		super(entity, options.name, "dataproc.v1.ProjectsRegionsJobs", options);
	}
	public readonly done?: boolean;
	public readonly driverControlFilesUri?: string;
	public readonly driverOutputResourceUri?: string;
	public readonly jobUuid?: string;
	public readonly status?: JobStatus;
	public readonly statusHistory?: JobStatus[];
	public readonly yarnApplications?: YarnApplication[];
}
export interface ProjectsRegionsJobsComponentOutputs {
	readonly done?: boolean;
	readonly driverControlFilesUri?: string;
	readonly driverOutputResourceUri?: string;
	readonly jobUuid?: string;
	readonly status?: JobStatus;
	readonly statusHistory?: JobStatus[];
	readonly yarnApplications?: YarnApplication[];
}
export interface ProjectsRegionsJobsComponentInputs {
	readonly driverSchedulingConfig?: DriverSchedulingConfig;
	readonly hadoopJob?: HadoopJob;
	readonly hiveJob?: HiveJob;
	readonly labels?: { [P in string]: string };
	readonly pigJob?: PigJob;
	readonly placement: JobPlacement;
	readonly prestoJob?: PrestoJob;
	readonly pysparkJob?: PySparkJob;
	readonly reference?: JobReference;
	readonly scheduling?: JobScheduling;
	readonly sparkJob?: SparkJob;
	readonly sparkRJob?: SparkRJob;
	readonly sparkSqlJob?: SparkSqlJob;
	readonly trinoJob?: TrinoJob;
	readonly name: string;
}
export interface DriverSchedulingConfig {
	readonly memoryMb: number;
	readonly vcores: number;
}
export interface HadoopJob {
	readonly archiveUris?: string[];
	readonly args?: string[];
	readonly fileUris?: string[];
	readonly jarFileUris?: string[];
	readonly loggingConfig?: LoggingConfig;
	readonly mainClass?: string;
	readonly mainJarFileUri?: string;
	readonly properties?: { [P in string]: string };
}
export interface HiveJob {
	readonly continueOnFailure?: boolean;
	readonly jarFileUris?: string[];
	readonly properties?: { [P in string]: string };
	readonly queryFileUri?: string;
	readonly queryList?: QueryList;
	readonly scriptVariables?: { [P in string]: string };
}
export interface Job {
	readonly done?: boolean;
	readonly driverControlFilesUri?: string;
	readonly driverOutputResourceUri?: string;
	readonly driverSchedulingConfig?: DriverSchedulingConfig;
	readonly hadoopJob?: HadoopJob;
	readonly hiveJob?: HiveJob;
	readonly jobUuid?: string;
	readonly labels?: { [P in string]: string };
	readonly pigJob?: PigJob;
	readonly placement: JobPlacement;
	readonly prestoJob?: PrestoJob;
	readonly pysparkJob?: PySparkJob;
	readonly reference?: JobReference;
	readonly scheduling?: JobScheduling;
	readonly sparkJob?: SparkJob;
	readonly sparkRJob?: SparkRJob;
	readonly sparkSqlJob?: SparkSqlJob;
	readonly status?: JobStatus;
	readonly statusHistory?: JobStatus[];
	readonly trinoJob?: TrinoJob;
	readonly yarnApplications?: YarnApplication[];
}
export interface JobPlacement {
	readonly clusterLabels?: { [P in string]: string };
	readonly clusterName: string;
	readonly clusterUuid?: string;
}
export interface JobReference {
	readonly jobId?: string;
	readonly projectId?: string;
}
export interface JobScheduling {
	readonly maxFailuresPerHour?: number;
	readonly maxFailuresTotal?: number;
}
export interface JobStatus {
	readonly details?: string;
	readonly state?: string;
	readonly stateStartTime?: string;
	readonly substate?: string;
}
export interface LoggingConfig {
	readonly driverLogLevels?: { [P in string]: string };
}
export interface PigJob {
	readonly continueOnFailure?: boolean;
	readonly jarFileUris?: string[];
	readonly loggingConfig?: LoggingConfig;
	readonly properties?: { [P in string]: string };
	readonly queryFileUri?: string;
	readonly queryList?: QueryList;
	readonly scriptVariables?: { [P in string]: string };
}
export interface PrestoJob {
	readonly clientTags?: string[];
	readonly continueOnFailure?: boolean;
	readonly loggingConfig?: LoggingConfig;
	readonly outputFormat?: string;
	readonly properties?: { [P in string]: string };
	readonly queryFileUri?: string;
	readonly queryList?: QueryList;
}
export interface PySparkJob {
	readonly archiveUris?: string[];
	readonly args?: string[];
	readonly fileUris?: string[];
	readonly jarFileUris?: string[];
	readonly loggingConfig?: LoggingConfig;
	readonly mainPythonFileUri: string;
	readonly properties?: { [P in string]: string };
	readonly pythonFileUris?: string[];
}
export interface QueryList {
	readonly queries: string[];
}
export interface SparkJob {
	readonly archiveUris?: string[];
	readonly args?: string[];
	readonly fileUris?: string[];
	readonly jarFileUris?: string[];
	readonly loggingConfig?: LoggingConfig;
	readonly mainClass?: string;
	readonly mainJarFileUri?: string;
	readonly properties?: { [P in string]: string };
}
export interface SparkRJob {
	readonly archiveUris?: string[];
	readonly args?: string[];
	readonly fileUris?: string[];
	readonly loggingConfig?: LoggingConfig;
	readonly mainRFileUri: string;
	readonly properties?: { [P in string]: string };
}
export interface SparkSqlJob {
	readonly jarFileUris?: string[];
	readonly loggingConfig?: LoggingConfig;
	readonly properties?: { [P in string]: string };
	readonly queryFileUri?: string;
	readonly queryList?: QueryList;
	readonly scriptVariables?: { [P in string]: string };
}
export interface TrinoJob {
	readonly clientTags?: string[];
	readonly continueOnFailure?: boolean;
	readonly loggingConfig?: LoggingConfig;
	readonly outputFormat?: string;
	readonly properties?: { [P in string]: string };
	readonly queryFileUri?: string;
	readonly queryList?: QueryList;
}
export interface YarnApplication {
	readonly name: string;
	readonly progress: number;
	readonly state: string;
	readonly trackingUrl?: string;
}
export default {
	ProjectsRegionsJobs: ProjectsRegionsJobs,
};

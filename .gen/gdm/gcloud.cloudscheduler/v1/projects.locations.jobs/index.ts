import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationsJobs
	extends GdmResource<ProjectsLocationsJobsComponentInputs>
	implements ProjectsLocationsJobsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsJobsComponentInputs) {
		super(entity, options.name, "cloudscheduler.v1.ProjectsLocationsJobs", options);
	}
	public readonly lastAttemptTime?: string | undefined;
	public readonly scheduleTime?: string | undefined;
	public readonly state?: string | undefined;
	public readonly status?: Status | undefined;
	public readonly userUpdateTime?: string | undefined;
}
export interface ProjectsLocationsJobsComponentOutputs {
	readonly lastAttemptTime?: string | undefined;
	readonly scheduleTime?: string | undefined;
	readonly state?: string | undefined;
	readonly status?: Status | undefined;
	readonly userUpdateTime?: string | undefined;
}
export interface ProjectsLocationsJobsComponentInputs {
	readonly appEngineHttpTarget?: AppEngineHttpTarget | undefined;
	readonly attemptDeadline?: string | undefined;
	readonly description?: string | undefined;
	readonly httpTarget?: HttpTarget | undefined;
	readonly name: string;
	readonly parent: string;
	readonly pubsubTarget?: PubsubTarget | undefined;
	readonly retryConfig?: RetryConfig | undefined;
	readonly schedule: string;
	readonly timeZone?: string | undefined;
	readonly type: string;
}
export interface AppEngineHttpTarget {
	readonly appEngineRouting?: AppEngineRouting | undefined;
	readonly body?: string | undefined;
	readonly headers?: { [P in string]: string } | undefined;
	readonly httpMethod?: string | undefined;
	readonly relativeUri?: string | undefined;
}
export interface AppEngineRouting {
	readonly host?: string | undefined;
	readonly instance?: string | undefined;
	readonly service?: string | undefined;
	readonly version?: string | undefined;
}
export interface HttpTarget {
	readonly body?: string | undefined;
	readonly headers?: { [P in string]: string } | undefined;
	readonly httpMethod?: string | undefined;
	readonly oauthToken?: OAuthToken | undefined;
	readonly oidcToken?: OidcToken | undefined;
	readonly uri: string;
}
export interface Job {
	readonly appEngineHttpTarget?: AppEngineHttpTarget | undefined;
	readonly attemptDeadline?: string | undefined;
	readonly description?: string | undefined;
	readonly httpTarget?: HttpTarget | undefined;
	readonly lastAttemptTime?: string | undefined;
	readonly name?: string | undefined;
	readonly pubsubTarget?: PubsubTarget | undefined;
	readonly retryConfig?: RetryConfig | undefined;
	readonly schedule: string;
	readonly scheduleTime?: string | undefined;
	readonly state?: string | undefined;
	readonly status?: Status | undefined;
	readonly timeZone?: string | undefined;
	readonly userUpdateTime?: string | undefined;
}
export interface OAuthToken {
	readonly scope?: string | undefined;
	readonly serviceAccountEmail?: string | undefined;
}
export interface OidcToken {
	readonly audience?: string | undefined;
	readonly serviceAccountEmail?: string | undefined;
}
export interface PubsubTarget {
	readonly attributes?: { [P in string]: string } | undefined;
	readonly data?: string | undefined;
	readonly topicName: string;
}
export interface RetryConfig {
	readonly maxBackoffDuration?: string | undefined;
	readonly maxDoublings?: number | undefined;
	readonly maxRetryDuration?: string | undefined;
	readonly minBackoffDuration?: string | undefined;
	readonly retryCount?: number | undefined;
}
export interface Status {
	readonly code?: number | undefined;
	readonly details?: Array<{ [P in string]: any }> | undefined;
	readonly message?: string | undefined;
}
export default {
	ProjectsLocationsJobs: ProjectsLocationsJobs,
};

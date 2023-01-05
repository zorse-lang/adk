import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationsJobs
	extends GdmResource<ProjectsLocationsJobsComponentInputs>
	implements ProjectsLocationsJobsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsJobsComponentInputs) {
		super(entity, options.name, "cloudscheduler.v1.ProjectsLocationsJobs", options);
	}
	public readonly lastAttemptTime?: string;
	public readonly scheduleTime?: string;
	public readonly state?: string;
	public readonly status?: Status;
	public readonly userUpdateTime?: string;
}
export interface ProjectsLocationsJobsComponentOutputs {
	readonly lastAttemptTime?: string;
	readonly scheduleTime?: string;
	readonly state?: string;
	readonly status?: Status;
	readonly userUpdateTime?: string;
}
export interface ProjectsLocationsJobsComponentInputs {
	readonly appEngineHttpTarget?: AppEngineHttpTarget;
	readonly attemptDeadline?: string;
	readonly description?: string;
	readonly httpTarget?: HttpTarget;
	readonly name: string;
	readonly parent: string;
	readonly pubsubTarget?: PubsubTarget;
	readonly retryConfig?: RetryConfig;
	readonly schedule: string;
	readonly timeZone?: string;
}
export interface AppEngineHttpTarget {
	readonly appEngineRouting?: AppEngineRouting;
	readonly body?: string;
	readonly headers?: { [P in string]: string };
	readonly httpMethod?: string;
	readonly relativeUri?: string;
}
export interface AppEngineRouting {
	readonly host?: string;
	readonly instance?: string;
	readonly service?: string;
	readonly version?: string;
}
export interface HttpTarget {
	readonly body?: string;
	readonly headers?: { [P in string]: string };
	readonly httpMethod?: string;
	readonly oauthToken?: OAuthToken;
	readonly oidcToken?: OidcToken;
	readonly uri: string;
}
export interface Job {
	readonly appEngineHttpTarget?: AppEngineHttpTarget;
	readonly attemptDeadline?: string;
	readonly description?: string;
	readonly httpTarget?: HttpTarget;
	readonly lastAttemptTime?: string;
	readonly name?: string;
	readonly pubsubTarget?: PubsubTarget;
	readonly retryConfig?: RetryConfig;
	readonly schedule: string;
	readonly scheduleTime?: string;
	readonly state?: string;
	readonly status?: Status;
	readonly timeZone?: string;
	readonly userUpdateTime?: string;
}
export interface OAuthToken {
	readonly scope?: string;
	readonly serviceAccountEmail?: string;
}
export interface OidcToken {
	readonly audience?: string;
	readonly serviceAccountEmail?: string;
}
export interface PubsubTarget {
	readonly attributes?: { [P in string]: string };
	readonly data?: string;
	readonly topicName: string;
}
export interface RetryConfig {
	readonly maxBackoffDuration?: string;
	readonly maxDoublings?: number;
	readonly maxRetryDuration?: string;
	readonly minBackoffDuration?: string;
	readonly retryCount?: number;
}
export interface Status {
	readonly code?: number;
	readonly details?: Array<{ [P in string]: any }>;
	readonly message?: string;
}
export default {
	ProjectsLocationsJobs: ProjectsLocationsJobs,
};

import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class jobCollections extends ArmResource<jobCollectionsComponentInputs> implements jobCollectionsComponentOutputs {
	constructor(entity: ADKEntity, options: jobCollectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Scheduler/jobCollections", "2014-08-01-preview", options);
	}
	public readonly apiVersion: "2014-08-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Scheduler/jobCollections";
}
export interface jobCollectionsComponentOutputs {
	readonly apiVersion: "2014-08-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Scheduler/jobCollections";
}
export interface jobCollectionsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: JobCollectionProperties;
	readonly tags?: JobCollectionDefinitionTags;
}
export class jobCollections_jobs
	extends ArmResource<jobCollections_jobsComponentInputs>
	implements jobCollections_jobsComponentOutputs
{
	constructor(entity: ADKEntity, options: jobCollections_jobsComponentInputs) {
		super(entity, options.name, "Microsoft.Scheduler/jobCollections/jobs", "2014-08-01-preview", options);
	}
	public readonly apiVersion: "2014-08-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Scheduler/jobCollections/jobs";
}
export interface jobCollections_jobsComponentOutputs {
	readonly apiVersion: "2014-08-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Scheduler/jobCollections/jobs";
}
export interface jobCollections_jobsComponentInputs {
	readonly name: string;
	readonly properties?: JobProperties;
}
export interface HttpAuthentication {
	readonly type?: "ActiveDirectoryOAuth" | "Basic" | "ClientCertificate";
}
export interface HttpRequest {
	readonly authentication?: HttpAuthentication;
	readonly body?: string;
	readonly headers?: HttpRequestHeaders;
	readonly method?: string;
	readonly uri?: string;
}
export interface HttpRequestHeaders {
	readonly [key: string]: string;
}
export interface JobAction {
	readonly errorAction?: JobErrorAction;
	readonly queueMessage?: StorageQueueMessage;
	readonly request?: HttpRequest;
	readonly retryPolicy?: RetryPolicy;
	readonly serviceBusQueueMessage?: ServiceBusQueueMessage;
	readonly serviceBusTopicMessage?: ServiceBusTopicMessage;
	readonly type?: "Http" | "Https" | "ServiceBusQueue" | "ServiceBusTopic";
}
export interface JobCollectionDefinitionTags {
	readonly [key: string]: string;
}
export interface JobCollectionProperties {
	readonly quota?: JobCollectionQuota;
	readonly sku?: Sku;
	readonly state?: "Deleted" | "Disabled" | "Enabled";
}
export interface JobCollectionQuota {
	readonly maxJobCount?: number;
	readonly maxJobOccurrence?: number;
	readonly maxRecurrence?: JobMaxRecurrence;
}
export interface JobErrorAction {
	readonly queueMessage?: StorageQueueMessage;
	readonly request?: HttpRequest;
	readonly retryPolicy?: RetryPolicy;
	readonly serviceBusQueueMessage?: ServiceBusQueueMessage;
	readonly serviceBusTopicMessage?: ServiceBusTopicMessage;
	readonly type?: "Http" | "Https" | "ServiceBusQueue" | "ServiceBusTopic";
}
export interface JobMaxRecurrence {
	readonly frequency?: "Day" | "Hour" | "Minute" | "Month";
	readonly interval?: number;
}
export interface JobProperties {
	readonly action?: JobAction;
	readonly recurrence?: JobRecurrence;
	readonly startTime?: string;
	readonly state?: "Completed" | "Disabled" | "Enabled";
	readonly status?: JobStatus;
}
export interface JobRecurrence {
	readonly count?: number;
	readonly endTime?: string;
	readonly frequency?: "Day" | "Hour" | "Minute" | "Month";
	readonly interval?: number;
	readonly schedule?: JobRecurrenceSchedule;
}
export interface JobRecurrenceSchedule {
	readonly hours?: number[];
	readonly minutes?: number[];
	readonly monthDays?: number[];
	readonly monthlyOccurrences?: JobRecurrenceScheduleMonthlyOccurrence[];
	readonly weekDays?: "Friday" | "Monday" | "Saturday" | "Sunday" | "Thursday" | "Tuesday"[];
}
export interface JobRecurrenceScheduleMonthlyOccurrence {
	readonly day?: "Friday" | "Monday" | "Saturday" | "Sunday" | "Thursday" | "Tuesday";
	readonly Occurrence?: number;
}
export interface JobStatus {
	readonly executionCount?: number;
	readonly failureCount?: number;
	readonly faultedCount?: number;
	readonly lastExecutionTime?: string;
	readonly nextExecutionTime?: string;
}
export interface RetryPolicy {
	readonly retryCount?: number;
	readonly retryInterval?: string;
	readonly retryType?: "Fixed";
}
export interface ServiceBusAuthentication {
	readonly sasKey?: string;
	readonly sasKeyName?: string;
	readonly type?: "NotSpecified";
}
export interface ServiceBusBrokeredMessageProperties {
	readonly contentType?: string;
	readonly correlationId?: string;
	readonly forcePersistence?: boolean;
	readonly label?: string;
	readonly messageId?: string;
	readonly partitionKey?: string;
	readonly replyTo?: string;
	readonly replyToSessionId?: string;
	readonly scheduledEnqueueTimeUtc?: string;
	readonly sessionId?: string;
	readonly timeToLive?: string;
	readonly to?: string;
	readonly viaPartitionKey?: string;
}
export interface ServiceBusMessageCustomMessageProperties {
	readonly [key: string]: string;
}
export interface ServiceBusQueueMessage {
	readonly authentication?: ServiceBusAuthentication;
	readonly brokeredMessageProperties?: ServiceBusBrokeredMessageProperties;
	readonly customMessageProperties?: ServiceBusMessageCustomMessageProperties;
	readonly message?: string;
	readonly namespace?: string;
	readonly queueName?: string;
	readonly transportType?: "AMQP" | "NetMessaging";
}
export interface ServiceBusTopicMessage {
	readonly authentication?: ServiceBusAuthentication;
	readonly brokeredMessageProperties?: ServiceBusBrokeredMessageProperties;
	readonly customMessageProperties?: ServiceBusMessageCustomMessageProperties;
	readonly message?: string;
	readonly namespace?: string;
	readonly topicPath?: string;
	readonly transportType?: "AMQP" | "NetMessaging";
}
export interface Sku {
	readonly name?: "Free" | "Premium";
}
export interface StorageQueueMessage {
	readonly message?: string;
	readonly queueName?: string;
	readonly sasToken?: string;
	readonly storageAccount?: string;
}
export default {
	jobCollections: jobCollections,
	"jobCollections/jobs": jobCollections_jobs,
};

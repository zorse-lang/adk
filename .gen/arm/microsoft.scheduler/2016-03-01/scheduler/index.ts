import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class jobCollections extends ArmResource<jobCollectionsComponentInputs> implements jobCollectionsComponentOutputs {
	constructor(entity: ADKEntity, options: jobCollectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Scheduler/jobCollections", "2016-03-01", options);
	}
	public readonly apiVersion: "2016-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.Scheduler/jobCollections";
}
export interface jobCollectionsComponentOutputs {
	readonly apiVersion: "2016-03-01";
	readonly id: string;
	readonly type: "Microsoft.Scheduler/jobCollections";
}
export interface jobCollectionsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: JobCollectionProperties | undefined;
	readonly tags?: JobCollectionDefinitionTags | undefined;
}
export class jobCollections_jobs
	extends ArmResource<jobCollections_jobsComponentInputs>
	implements jobCollections_jobsComponentOutputs
{
	constructor(entity: ADKEntity, options: jobCollections_jobsComponentInputs) {
		super(entity, options.name, "Microsoft.Scheduler/jobCollections/jobs", "2016-03-01", options);
	}
	public readonly apiVersion: "2016-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.Scheduler/jobCollections/jobs";
}
export interface jobCollections_jobsComponentOutputs {
	readonly apiVersion: "2016-03-01";
	readonly id: string;
	readonly type: "Microsoft.Scheduler/jobCollections/jobs";
}
export interface jobCollections_jobsComponentInputs {
	readonly name: string;
	readonly properties?: JobProperties | undefined;
}
export interface HttpAuthentication {}
export interface HttpRequest {
	readonly authentication?: HttpAuthentication | undefined;
	readonly body?: string | undefined;
	readonly headers?: HttpRequestHeaders | undefined;
	readonly method?: string | undefined;
	readonly uri?: string | undefined;
}
export interface HttpRequestHeaders {
	readonly "[ key: string ]"?: string | undefined;
}
export interface JobAction {
	readonly errorAction?: JobErrorAction | undefined;
	readonly queueMessage?: StorageQueueMessage | undefined;
	readonly request?: HttpRequest | undefined;
	readonly retryPolicy?: RetryPolicy | undefined;
	readonly serviceBusQueueMessage?: ServiceBusQueueMessage | undefined;
	readonly serviceBusTopicMessage?: ServiceBusTopicMessage | undefined;
	readonly type?: ("Http" | "Https" | "ServiceBusQueue" | "ServiceBusTopic") | undefined;
}
export interface JobCollectionDefinitionTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface JobCollectionProperties {
	readonly quota?: JobCollectionQuota | undefined;
	readonly sku?: Sku | undefined;
	readonly state?: ("Deleted" | "Disabled" | "Enabled") | undefined;
}
export interface JobCollectionQuota {
	readonly maxJobCount?: number | undefined;
	readonly maxJobOccurrence?: number | undefined;
	readonly maxRecurrence?: JobMaxRecurrence | undefined;
}
export interface JobErrorAction {
	readonly queueMessage?: StorageQueueMessage | undefined;
	readonly request?: HttpRequest | undefined;
	readonly retryPolicy?: RetryPolicy | undefined;
	readonly serviceBusQueueMessage?: ServiceBusQueueMessage | undefined;
	readonly serviceBusTopicMessage?: ServiceBusTopicMessage | undefined;
	readonly type?: ("Http" | "Https" | "ServiceBusQueue" | "ServiceBusTopic") | undefined;
}
export interface JobMaxRecurrence {
	readonly frequency?: ("Day" | "Hour" | "Minute" | "Month") | undefined;
	readonly interval?: number | undefined;
}
export interface JobProperties {
	readonly action?: JobAction | undefined;
	readonly recurrence?: JobRecurrence | undefined;
	readonly startTime?: string | undefined;
	readonly state?: ("Completed" | "Disabled" | "Enabled") | undefined;
	readonly status?: JobStatus | undefined;
}
export interface JobRecurrence {
	readonly count?: number | undefined;
	readonly endTime?: string | undefined;
	readonly frequency?: ("Day" | "Hour" | "Minute" | "Month") | undefined;
	readonly interval?: number | undefined;
	readonly schedule?: JobRecurrenceSchedule | undefined;
}
export interface JobRecurrenceSchedule {
	readonly hours?: number[] | undefined;
	readonly minutes?: number[] | undefined;
	readonly monthDays?: number[] | undefined;
	readonly monthlyOccurrences?: JobRecurrenceScheduleMonthlyOccurrence[] | undefined;
	readonly weekDays?: ("Friday" | "Monday" | "Saturday" | "Sunday" | "Thursday" | "Tuesday"[]) | undefined;
}
export interface JobRecurrenceScheduleMonthlyOccurrence {
	readonly day?: ("Friday" | "Monday" | "Saturday" | "Sunday" | "Thursday" | "Tuesday") | undefined;
	readonly Occurrence?: number | undefined;
}
export interface JobStatus {
	readonly executionCount?: number | undefined;
	readonly failureCount?: number | undefined;
	readonly faultedCount?: number | undefined;
	readonly lastExecutionTime?: string | undefined;
	readonly nextExecutionTime?: string | undefined;
}
export interface RetryPolicy {
	readonly retryCount?: number | undefined;
	readonly retryInterval?: string | undefined;
	readonly retryType?: "Fixed" | undefined;
}
export interface ServiceBusAuthentication {
	readonly sasKey?: string | undefined;
	readonly sasKeyName?: string | undefined;
	readonly type?: "NotSpecified" | undefined;
}
export interface ServiceBusBrokeredMessageProperties {
	readonly contentType?: string | undefined;
	readonly correlationId?: string | undefined;
	readonly forcePersistence?: boolean | undefined;
	readonly label?: string | undefined;
	readonly messageId?: string | undefined;
	readonly partitionKey?: string | undefined;
	readonly replyTo?: string | undefined;
	readonly replyToSessionId?: string | undefined;
	readonly scheduledEnqueueTimeUtc?: string | undefined;
	readonly sessionId?: string | undefined;
	readonly timeToLive?: string | undefined;
	readonly to?: string | undefined;
	readonly viaPartitionKey?: string | undefined;
}
export interface ServiceBusMessageCustomMessageProperties {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ServiceBusQueueMessage {
	readonly authentication?: ServiceBusAuthentication | undefined;
	readonly brokeredMessageProperties?: ServiceBusBrokeredMessageProperties | undefined;
	readonly customMessageProperties?: ServiceBusMessageCustomMessageProperties | undefined;
	readonly message?: string | undefined;
	readonly namespace?: string | undefined;
	readonly queueName?: string | undefined;
	readonly transportType?: ("AMQP" | "NetMessaging") | undefined;
}
export interface ServiceBusTopicMessage {
	readonly authentication?: ServiceBusAuthentication | undefined;
	readonly brokeredMessageProperties?: ServiceBusBrokeredMessageProperties | undefined;
	readonly customMessageProperties?: ServiceBusMessageCustomMessageProperties | undefined;
	readonly message?: string | undefined;
	readonly namespace?: string | undefined;
	readonly topicPath?: string | undefined;
	readonly transportType?: ("AMQP" | "NetMessaging") | undefined;
}
export interface Sku {
	readonly name?: ("Free" | "P10Premium" | "P20Premium") | undefined;
}
export interface StorageQueueMessage {
	readonly message?: string | undefined;
	readonly queueName?: string | undefined;
	readonly sasToken?: string | undefined;
	readonly storageAccount?: string | undefined;
}
export default {
	jobCollections: jobCollections,
	"jobCollections/jobs": jobCollections_jobs,
};

import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsSubscriptions
	extends GdmResource<ProjectsSubscriptionsComponentInputs>
	implements ProjectsSubscriptionsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsSubscriptionsComponentInputs) {
		super(entity, options.name, "pubsub.v1.ProjectsSubscriptions", options);
	}
	public readonly state?: string | undefined;
	public readonly topicMessageRetentionDuration?: string | undefined;
}
export interface ProjectsSubscriptionsComponentOutputs {
	readonly state?: string | undefined;
	readonly topicMessageRetentionDuration?: string | undefined;
}
export interface ProjectsSubscriptionsComponentInputs {
	readonly ackDeadlineSeconds?: number | undefined;
	readonly bigqueryConfig?: BigQueryConfig | undefined;
	readonly deadLetterPolicy?: DeadLetterPolicy | undefined;
	readonly detached?: boolean | undefined;
	readonly enableExactlyOnceDelivery?: boolean | undefined;
	readonly enableMessageOrdering?: boolean | undefined;
	readonly expirationPolicy?: ExpirationPolicy | undefined;
	readonly filter?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly messageRetentionDuration?: string | undefined;
	readonly name: string;
	readonly pushConfig?: PushConfig | undefined;
	readonly retainAckedMessages?: boolean | undefined;
	readonly retryPolicy?: RetryPolicy | undefined;
	readonly topic: string;
	readonly type: string;
}
export interface BigQueryConfig {
	readonly dropUnknownFields?: boolean | undefined;
	readonly state?: string | undefined;
	readonly table?: string | undefined;
	readonly useTopicSchema?: boolean | undefined;
	readonly writeMetadata?: boolean | undefined;
}
export interface DeadLetterPolicy {
	readonly deadLetterTopic?: string | undefined;
	readonly maxDeliveryAttempts?: number | undefined;
}
export interface ExpirationPolicy {
	readonly ttl?: string | undefined;
}
export interface OidcToken {
	readonly audience?: string | undefined;
	readonly serviceAccountEmail?: string | undefined;
}
export interface PushConfig {
	readonly attributes?: { [P in string]: string } | undefined;
	readonly oidcToken?: OidcToken | undefined;
	readonly pushEndpoint?: string | undefined;
}
export interface RetryPolicy {
	readonly maximumBackoff?: string | undefined;
	readonly minimumBackoff?: string | undefined;
}
export interface Subscription {
	readonly ackDeadlineSeconds?: number | undefined;
	readonly bigqueryConfig?: BigQueryConfig | undefined;
	readonly deadLetterPolicy?: DeadLetterPolicy | undefined;
	readonly detached?: boolean | undefined;
	readonly enableExactlyOnceDelivery?: boolean | undefined;
	readonly enableMessageOrdering?: boolean | undefined;
	readonly expirationPolicy?: ExpirationPolicy | undefined;
	readonly filter?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly messageRetentionDuration?: string | undefined;
	readonly name: string;
	readonly pushConfig?: PushConfig | undefined;
	readonly retainAckedMessages?: boolean | undefined;
	readonly retryPolicy?: RetryPolicy | undefined;
	readonly state?: string | undefined;
	readonly topic: string;
	readonly topicMessageRetentionDuration?: string | undefined;
}
export default {
	ProjectsSubscriptions: ProjectsSubscriptions,
};

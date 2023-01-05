import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Subscription extends GdmResource<SubscriptionComponentInputs> implements SubscriptionComponentOutputs {
	constructor(entity: ADKEntity, options: SubscriptionComponentInputs) {
		super(entity, options.name, "pubsub.v1.subscription", options);
	}
	public readonly state?: string;
	public readonly topicMessageRetentionDuration?: string;
}
export interface SubscriptionComponentOutputs {
	readonly state?: string;
	readonly topicMessageRetentionDuration?: string;
}
export interface SubscriptionComponentInputs {
	readonly ackDeadlineSeconds?: number;
	readonly bigqueryConfig?: BigQueryConfig;
	readonly deadLetterPolicy?: DeadLetterPolicy;
	readonly detached?: boolean;
	readonly enableExactlyOnceDelivery?: boolean;
	readonly enableMessageOrdering?: boolean;
	readonly expirationPolicy?: ExpirationPolicy;
	readonly filter?: string;
	readonly labels?: { [P in string]: string };
	readonly messageRetentionDuration?: string;
	readonly name: string;
	readonly pushConfig?: PushConfig;
	readonly retainAckedMessages?: boolean;
	readonly retryPolicy?: RetryPolicy;
	readonly topic: string;
}
export interface BigQueryConfig {
	readonly dropUnknownFields?: boolean;
	readonly state?: string;
	readonly table?: string;
	readonly useTopicSchema?: boolean;
	readonly writeMetadata?: boolean;
}
export interface DeadLetterPolicy {
	readonly deadLetterTopic?: string;
	readonly maxDeliveryAttempts?: number;
}
export interface ExpirationPolicy {
	readonly ttl?: string;
}
export interface OidcToken {
	readonly audience?: string;
	readonly serviceAccountEmail?: string;
}
export interface PushConfig {
	readonly attributes?: { [P in string]: string };
	readonly oidcToken?: OidcToken;
	readonly pushEndpoint?: string;
}
export interface RetryPolicy {
	readonly maximumBackoff?: string;
	readonly minimumBackoff?: string;
}
export default {
	Subscription: Subscription,
};

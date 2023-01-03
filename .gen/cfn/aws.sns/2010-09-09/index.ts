import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Subscription extends CfnResource<SubscriptionComponentInputs> implements SubscriptionComponentOutputs {
	constructor(entity: ADKEntity, options: SubscriptionComponentInputs) {
		super(entity, options.LogicalId, "AWS::SNS::Subscription", options);
	}
}
export interface SubscriptionComponentOutputs {}
export interface SubscriptionComponentInputs {
	readonly Protocol: string;
	readonly TopicArn: string;
	readonly DeliveryPolicy?: (any | undefined) | undefined;
	readonly Endpoint?: (string | undefined) | undefined;
	readonly FilterPolicy?: (any | undefined) | undefined;
	readonly RawMessageDelivery?: (boolean | undefined) | undefined;
	readonly RedrivePolicy?: (any | undefined) | undefined;
	readonly Region?: (string | undefined) | undefined;
	readonly SubscriptionRoleArn?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class Topic extends CfnResource<TopicComponentInputs> implements TopicComponentOutputs {
	constructor(entity: ADKEntity, options: TopicComponentInputs) {
		super(entity, options.LogicalId, "AWS::SNS::Topic", options);
	}
	public readonly TopicArn: string;
}
export interface TopicComponentOutputs {
	readonly TopicArn: string;
}
export interface TopicComponentInputs {
	readonly ContentBasedDeduplication?: (boolean | undefined) | undefined;
	readonly DataProtectionPolicy?: (any | undefined) | undefined;
	readonly DisplayName?: (string | undefined) | undefined;
	readonly FifoTopic?: (boolean | undefined) | undefined;
	readonly KmsMasterKeyId?: (string | undefined) | undefined;
	readonly SignatureVersion?: (string | undefined) | undefined;
	readonly Subscription?: (Subscription[] | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly TopicName?: string | undefined;
	readonly LogicalId: string;
}
export class TopicPolicy extends CfnResource<TopicPolicyComponentInputs> implements TopicPolicyComponentOutputs {
	constructor(entity: ADKEntity, options: TopicPolicyComponentInputs) {
		super(entity, options.LogicalId, "AWS::SNS::TopicPolicy", options);
	}
}
export interface TopicPolicyComponentOutputs {}
export interface TopicPolicyComponentInputs {
	readonly PolicyDocument: any;
	readonly Topics: string[];
	readonly LogicalId: string;
}
export interface Subscription {
	readonly Endpoint: string;
	readonly Protocol: string;
}
export default {
	Subscription: Subscription,
	Topic: Topic,
	TopicPolicy: TopicPolicy,
};

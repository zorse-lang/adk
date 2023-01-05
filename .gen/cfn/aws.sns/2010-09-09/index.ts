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
	readonly DeliveryPolicy?: any | undefined;
	readonly Endpoint?: string | undefined;
	readonly FilterPolicy?: any | undefined;
	readonly RawMessageDelivery?: boolean | undefined;
	readonly RedrivePolicy?: any | undefined;
	readonly Region?: string | undefined;
	readonly SubscriptionRoleArn?: string | undefined;
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
	readonly ContentBasedDeduplication?: boolean | undefined;
	readonly DataProtectionPolicy?: any | undefined;
	readonly DisplayName?: string | undefined;
	readonly FifoTopic?: boolean | undefined;
	readonly KmsMasterKeyId?: string | undefined;
	readonly SignatureVersion?: string | undefined;
	readonly Subscription?: Subscription[] | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly TopicName?: string;
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

import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class Queue extends RosResource<QueueComponentInputs> implements QueueComponentOutputs {
	constructor(entity: ADKEntity, options: QueueComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::MNS::Queue", options);
	}
	public readonly ArnWithSlash: any;
	public readonly QueueUrl: any;
}
export interface QueueComponentOutputs {
	readonly ArnWithSlash: any;
	readonly QueueUrl: any;
}
export interface QueueComponentInputs {
	readonly QueueName: any | string;
	readonly DelaySeconds?: (number | undefined) | undefined;
	readonly LoggingEnabled?: (boolean | undefined) | undefined;
	readonly MaximumMessageSize?: (number | undefined) | undefined;
	readonly MessageRetentionPeriod?: (number | undefined) | undefined;
	readonly PollingWaitSeconds?: (number | undefined) | undefined;
	readonly VisibilityTimeout?: (number | undefined) | undefined;
	readonly LogicalId: string;
}
export class Subscription extends RosResource<SubscriptionComponentInputs> implements SubscriptionComponentOutputs {
	constructor(entity: ADKEntity, options: SubscriptionComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::MNS::Subscription", options);
	}
	public readonly SubscriptionUrl: any;
}
export interface SubscriptionComponentOutputs {
	readonly SubscriptionUrl: any;
}
export interface SubscriptionComponentInputs {
	readonly Endpoint: string;
	readonly SubscriptionName: any | string;
	readonly TopicName: any | string;
	readonly FilterTag?: (string | undefined) | undefined;
	readonly NotifyContentFormat?: (string | undefined) | undefined;
	readonly NotifyStrategy?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class Topic extends RosResource<TopicComponentInputs> implements TopicComponentOutputs {
	constructor(entity: ADKEntity, options: TopicComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::MNS::Topic", options);
	}
	public readonly TopicUrl: any;
	public readonly ArnWithSlash: any;
}
export interface TopicComponentOutputs {
	readonly TopicUrl: any;
	readonly ArnWithSlash: any;
}
export interface TopicComponentInputs {
	readonly TopicName: any | string;
	readonly LoggingEnabled?: (boolean | undefined) | undefined;
	readonly MaximumMessageSize?: (number | undefined) | undefined;
	readonly LogicalId: string;
}
export default {
	Queue: Queue,
	Subscription: Subscription,
	Topic: Topic,
};

import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Queue extends CfnResource<QueueComponentInputs> implements QueueComponentOutputs {
	constructor(entity: ADKEntity, options: QueueComponentInputs) {
		super(entity, options.LogicalId, "AWS::SQS::Queue", options);
	}
	public readonly Arn: string;
	public readonly QueueUrl: string;
}
export interface QueueComponentOutputs {
	readonly Arn: string;
	readonly QueueUrl: string;
}
export interface QueueComponentInputs {
	readonly ContentBasedDeduplication?: (boolean | undefined) | undefined;
	readonly DeduplicationScope?: (string | undefined) | undefined;
	readonly DelaySeconds?: (number | undefined) | undefined;
	readonly FifoQueue?: (boolean | undefined) | undefined;
	readonly FifoThroughputLimit?: (string | undefined) | undefined;
	readonly KmsDataKeyReusePeriodSeconds?: (number | undefined) | undefined;
	readonly KmsMasterKeyId?: (string | undefined) | undefined;
	readonly MaximumMessageSize?: (number | undefined) | undefined;
	readonly MessageRetentionPeriod?: (number | undefined) | undefined;
	readonly QueueName?: string | undefined;
	readonly ReceiveMessageWaitTimeSeconds?: (number | undefined) | undefined;
	readonly RedriveAllowPolicy?: (any | undefined) | undefined;
	readonly RedrivePolicy?: (any | undefined) | undefined;
	readonly SqsManagedSseEnabled?: (boolean | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly VisibilityTimeout?: (number | undefined) | undefined;
	readonly LogicalId: string;
}
export class QueuePolicy extends CfnResource<QueuePolicyComponentInputs> implements QueuePolicyComponentOutputs {
	constructor(entity: ADKEntity, options: QueuePolicyComponentInputs) {
		super(entity, options.LogicalId, "AWS::SQS::QueuePolicy", options);
	}
}
export interface QueuePolicyComponentOutputs {}
export interface QueuePolicyComponentInputs {
	readonly PolicyDocument: any;
	readonly Queues: string[];
	readonly LogicalId: string;
}
export default {
	Queue: Queue,
	QueuePolicy: QueuePolicy,
};

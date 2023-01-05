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
	readonly ContentBasedDeduplication?: boolean | undefined;
	readonly DeduplicationScope?: string | undefined;
	readonly DelaySeconds?: number | undefined;
	readonly FifoQueue?: boolean | undefined;
	readonly FifoThroughputLimit?: string | undefined;
	readonly KmsDataKeyReusePeriodSeconds?: number | undefined;
	readonly KmsMasterKeyId?: string | undefined;
	readonly MaximumMessageSize?: number | undefined;
	readonly MessageRetentionPeriod?: number | undefined;
	readonly QueueName?: string;
	readonly ReceiveMessageWaitTimeSeconds?: number | undefined;
	readonly RedriveAllowPolicy?: any | undefined;
	readonly RedrivePolicy?: any | undefined;
	readonly SqsManagedSseEnabled?: boolean | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly VisibilityTimeout?: number | undefined;
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

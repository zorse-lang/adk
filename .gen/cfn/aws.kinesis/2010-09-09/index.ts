import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Stream extends CfnResource<StreamComponentInputs> implements StreamComponentOutputs {
	constructor(entity: ADKEntity, options: StreamComponentInputs) {
		super(entity, options.LogicalId, "AWS::Kinesis::Stream", options);
	}
	public readonly Arn: string;
}
export interface StreamComponentOutputs {
	readonly Arn: string;
}
export interface StreamComponentInputs {
	readonly Name?: string | undefined;
	readonly RetentionPeriodHours?: number | undefined;
	readonly ShardCount?: number | undefined;
	readonly StreamEncryption?: StreamEncryption | undefined;
	readonly StreamModeDetails?: StreamModeDetails | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export class StreamConsumer extends CfnResource<StreamConsumerComponentInputs> implements StreamConsumerComponentOutputs {
	constructor(entity: ADKEntity, options: StreamConsumerComponentInputs) {
		super(entity, options.LogicalId, "AWS::Kinesis::StreamConsumer", options);
	}
	public readonly ConsumerArn: string;
	public readonly ConsumerCreationTimestamp: string;
	public readonly ConsumerName: string;
	public readonly ConsumerStatus: string;
	public readonly StreamArn: string;
}
export interface StreamConsumerComponentOutputs {
	readonly ConsumerArn: string;
	readonly ConsumerCreationTimestamp: string;
	readonly ConsumerName: string;
	readonly ConsumerStatus: string;
	readonly StreamArn: string;
}
export interface StreamConsumerComponentInputs {
	readonly ConsumerName: string;
	readonly StreamARN: string;
	readonly LogicalId: string;
}
export interface StreamEncryption {
	readonly EncryptionType: string;
	readonly KeyId: string;
}
export interface StreamModeDetails {
	readonly StreamMode: string;
}
export default {
	Stream: Stream,
	StreamConsumer: StreamConsumer,
};

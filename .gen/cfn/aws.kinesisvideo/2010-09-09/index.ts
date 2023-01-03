import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class SignalingChannel
	extends CfnResource<SignalingChannelComponentInputs>
	implements SignalingChannelComponentOutputs
{
	constructor(entity: ADKEntity, options: SignalingChannelComponentInputs) {
		super(entity, options.LogicalId, "AWS::KinesisVideo::SignalingChannel", options);
	}
	public readonly Arn: string;
}
export interface SignalingChannelComponentOutputs {
	readonly Arn: string;
}
export interface SignalingChannelComponentInputs {
	readonly MessageTtlSeconds?: (number | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly Type?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class Stream extends CfnResource<StreamComponentInputs> implements StreamComponentOutputs {
	constructor(entity: ADKEntity, options: StreamComponentInputs) {
		super(entity, options.LogicalId, "AWS::KinesisVideo::Stream", options);
	}
	public readonly Arn: string;
}
export interface StreamComponentOutputs {
	readonly Arn: string;
}
export interface StreamComponentInputs {
	readonly DataRetentionInHours?: (number | undefined) | undefined;
	readonly DeviceName?: (string | undefined) | undefined;
	readonly KmsKeyId?: (string | undefined) | undefined;
	readonly MediaType?: (string | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export default {
	SignalingChannel: SignalingChannel,
	Stream: Stream,
};

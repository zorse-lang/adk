import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Channel extends CfnResource<ChannelComponentInputs> implements ChannelComponentOutputs {
	constructor(entity: ADKEntity, options: ChannelComponentInputs) {
		super(entity, options.LogicalId, "AWS::IVS::Channel", options);
	}
	public readonly Arn: string;
	public readonly IngestEndpoint: string;
	public readonly PlaybackUrl: string;
}
export interface ChannelComponentOutputs {
	readonly Arn: string;
	readonly IngestEndpoint: string;
	readonly PlaybackUrl: string;
}
export interface ChannelComponentInputs {
	readonly Authorized?: (boolean | undefined) | undefined;
	readonly LatencyMode?: (string | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly RecordingConfigurationArn?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly Type?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export class PlaybackKeyPair
	extends CfnResource<PlaybackKeyPairComponentInputs>
	implements PlaybackKeyPairComponentOutputs
{
	constructor(entity: ADKEntity, options: PlaybackKeyPairComponentInputs) {
		super(entity, options.LogicalId, "AWS::IVS::PlaybackKeyPair", options);
	}
	public readonly Arn: string;
	public readonly Fingerprint: string;
}
export interface PlaybackKeyPairComponentOutputs {
	readonly Arn: string;
	readonly Fingerprint: string;
}
export interface PlaybackKeyPairComponentInputs {
	readonly Name?: (string | undefined) | undefined;
	readonly PublicKeyMaterial?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class RecordingConfiguration
	extends CfnResource<RecordingConfigurationComponentInputs>
	implements RecordingConfigurationComponentOutputs
{
	constructor(entity: ADKEntity, options: RecordingConfigurationComponentInputs) {
		super(entity, options.LogicalId, "AWS::IVS::RecordingConfiguration", options);
	}
	public readonly Arn: string;
	public readonly State: string;
}
export interface RecordingConfigurationComponentOutputs {
	readonly Arn: string;
	readonly State: string;
}
export interface RecordingConfigurationComponentInputs {
	readonly DestinationConfiguration: DestinationConfiguration;
	readonly Name?: (string | undefined) | undefined;
	readonly RecordingReconnectWindowSeconds?: (number | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly ThumbnailConfiguration?: (ThumbnailConfiguration | undefined) | undefined;
	readonly LogicalId: string;
}
export class StreamKey extends CfnResource<StreamKeyComponentInputs> implements StreamKeyComponentOutputs {
	constructor(entity: ADKEntity, options: StreamKeyComponentInputs) {
		super(entity, options.LogicalId, "AWS::IVS::StreamKey", options);
	}
	public readonly Arn: string;
	public readonly Value: string;
}
export interface StreamKeyComponentOutputs {
	readonly Arn: string;
	readonly Value: string;
}
export interface StreamKeyComponentInputs {
	readonly ChannelArn: string;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export interface DestinationConfiguration {
	readonly S3: S3DestinationConfiguration;
}
export interface S3DestinationConfiguration {
	readonly BucketName: string;
}
export interface ThumbnailConfiguration {
	readonly RecordingMode: string;
	readonly TargetIntervalSeconds?: (number | undefined) | undefined;
}
export default {
	Channel: Channel,
	PlaybackKeyPair: PlaybackKeyPair,
	RecordingConfiguration: RecordingConfiguration,
	StreamKey: StreamKey,
};

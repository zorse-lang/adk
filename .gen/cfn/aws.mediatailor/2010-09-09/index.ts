import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class PlaybackConfiguration
	extends CfnResource<PlaybackConfigurationComponentInputs>
	implements PlaybackConfigurationComponentOutputs
{
	constructor(entity: ADKEntity, options: PlaybackConfigurationComponentInputs) {
		super(entity, options.LogicalId, "AWS::MediaTailor::PlaybackConfiguration", options);
	}
	public readonly DashConfigurationManifestEndpointPrefix: string;
	public readonly HlsConfigurationManifestEndpointPrefix: string;
	public readonly PlaybackConfigurationArn: string;
	public readonly PlaybackEndpointPrefix: string;
	public readonly SessionInitializationEndpointPrefix: string;
}
export interface PlaybackConfigurationComponentOutputs {
	readonly DashConfigurationManifestEndpointPrefix: string;
	readonly HlsConfigurationManifestEndpointPrefix: string;
	readonly PlaybackConfigurationArn: string;
	readonly PlaybackEndpointPrefix: string;
	readonly SessionInitializationEndpointPrefix: string;
}
export interface PlaybackConfigurationComponentInputs {
	readonly AdDecisionServerUrl: string;
	readonly Name: string;
	readonly VideoContentSourceUrl: string;
	readonly AvailSuppression?: AvailSuppression | undefined;
	readonly Bumper?: Bumper | undefined;
	readonly CdnConfiguration?: CdnConfiguration | undefined;
	readonly ConfigurationAliases?: { [key: string]: any } | undefined;
	readonly DashConfiguration?: DashConfiguration | undefined;
	readonly HlsConfiguration?: HlsConfiguration | undefined;
	readonly LivePreRollConfiguration?: LivePreRollConfiguration | undefined;
	readonly ManifestProcessingRules?: ManifestProcessingRules | undefined;
	readonly PersonalizationThresholdSeconds?: number | undefined;
	readonly SlateAdUrl?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly TranscodeProfileName?: string | undefined;
	readonly LogicalId: string;
}
export interface AdMarkerPassthrough {
	readonly Enabled?: boolean | undefined;
}
export interface AvailSuppression {
	readonly Mode?: string | undefined;
	readonly Value?: string | undefined;
}
export interface Bumper {
	readonly EndUrl?: string | undefined;
	readonly StartUrl?: string | undefined;
}
export interface CdnConfiguration {
	readonly AdSegmentUrlPrefix?: string | undefined;
	readonly ContentSegmentUrlPrefix?: string | undefined;
}
export interface DashConfiguration {
	readonly ManifestEndpointPrefix?: string | undefined;
	readonly MpdLocation?: string | undefined;
	readonly OriginManifestType?: string | undefined;
}
export interface HlsConfiguration {
	readonly ManifestEndpointPrefix?: string | undefined;
}
export interface LivePreRollConfiguration {
	readonly AdDecisionServerUrl?: string | undefined;
	readonly MaxDurationSeconds?: number | undefined;
}
export interface ManifestProcessingRules {
	readonly AdMarkerPassthrough?: AdMarkerPassthrough | undefined;
}
export default {
	PlaybackConfiguration: PlaybackConfiguration,
};

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
	readonly AvailSuppression?: (AvailSuppression | undefined) | undefined;
	readonly Bumper?: (Bumper | undefined) | undefined;
	readonly CdnConfiguration?: (CdnConfiguration | undefined) | undefined;
	readonly ConfigurationAliases?: ({ [key: string]: any } | undefined) | undefined;
	readonly DashConfiguration?: (DashConfiguration | undefined) | undefined;
	readonly HlsConfiguration?: (HlsConfiguration | undefined) | undefined;
	readonly LivePreRollConfiguration?: (LivePreRollConfiguration | undefined) | undefined;
	readonly ManifestProcessingRules?: (ManifestProcessingRules | undefined) | undefined;
	readonly PersonalizationThresholdSeconds?: (number | undefined) | undefined;
	readonly SlateAdUrl?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly TranscodeProfileName?: (string | undefined) | undefined;
	readonly LogicalId: string;
}
export interface AdMarkerPassthrough {
	readonly Enabled?: (boolean | undefined) | undefined;
}
export interface AvailSuppression {
	readonly Mode?: (string | undefined) | undefined;
	readonly Value?: (string | undefined) | undefined;
}
export interface Bumper {
	readonly EndUrl?: (string | undefined) | undefined;
	readonly StartUrl?: (string | undefined) | undefined;
}
export interface CdnConfiguration {
	readonly AdSegmentUrlPrefix?: (string | undefined) | undefined;
	readonly ContentSegmentUrlPrefix?: (string | undefined) | undefined;
}
export interface DashConfiguration {
	readonly ManifestEndpointPrefix?: (string | undefined) | undefined;
	readonly MpdLocation?: (string | undefined) | undefined;
	readonly OriginManifestType?: (string | undefined) | undefined;
}
export interface HlsConfiguration {
	readonly ManifestEndpointPrefix?: (string | undefined) | undefined;
}
export interface LivePreRollConfiguration {
	readonly AdDecisionServerUrl?: (string | undefined) | undefined;
	readonly MaxDurationSeconds?: (number | undefined) | undefined;
}
export interface ManifestProcessingRules {
	readonly AdMarkerPassthrough?: (AdMarkerPassthrough | undefined) | undefined;
}
export default {
	PlaybackConfiguration: PlaybackConfiguration,
};

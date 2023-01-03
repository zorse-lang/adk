import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Asset extends CfnResource<AssetComponentInputs> implements AssetComponentOutputs {
	constructor(entity: ADKEntity, options: AssetComponentInputs) {
		super(entity, options.LogicalId, "AWS::MediaPackage::Asset", options);
	}
	public readonly Arn: string;
	public readonly CreatedAt: string;
	public readonly EgressEndpoints: Map<string, EgressEndpoint>;
}
export interface AssetComponentOutputs {
	readonly Arn: string;
	readonly CreatedAt: string;
	readonly EgressEndpoints: Map<string, EgressEndpoint>;
}
export interface AssetComponentInputs {
	readonly Id: string;
	readonly PackagingGroupId: string;
	readonly SourceArn: string;
	readonly SourceRoleArn: string;
	readonly ResourceId?: (string | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class Channel extends CfnResource<ChannelComponentInputs> implements ChannelComponentOutputs {
	constructor(entity: ADKEntity, options: ChannelComponentInputs) {
		super(entity, options.LogicalId, "AWS::MediaPackage::Channel", options);
	}
	public readonly Arn: string;
	public readonly HlsIngestingestEndpoints: Map<string, IngestEndpoint>;
}
export interface ChannelComponentOutputs {
	readonly Arn: string;
	readonly HlsIngestingestEndpoints: Map<string, IngestEndpoint>;
}
export interface ChannelComponentInputs {
	readonly Id: string;
	readonly Description?: (string | undefined) | undefined;
	readonly EgressAccessLogs?: (LogConfiguration | undefined) | undefined;
	readonly IngressAccessLogs?: (LogConfiguration | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class OriginEndpoint extends CfnResource<OriginEndpointComponentInputs> implements OriginEndpointComponentOutputs {
	constructor(entity: ADKEntity, options: OriginEndpointComponentInputs) {
		super(entity, options.LogicalId, "AWS::MediaPackage::OriginEndpoint", options);
	}
	public readonly Arn: string;
	public readonly Url: string;
}
export interface OriginEndpointComponentOutputs {
	readonly Arn: string;
	readonly Url: string;
}
export interface OriginEndpointComponentInputs {
	readonly ChannelId: string;
	readonly Id: string;
	readonly Authorization?: (Authorization | undefined) | undefined;
	readonly CmafPackage?: (CmafPackage | undefined) | undefined;
	readonly DashPackage?: (DashPackage | undefined) | undefined;
	readonly Description?: (string | undefined) | undefined;
	readonly HlsPackage?: (HlsPackage | undefined) | undefined;
	readonly ManifestName?: (string | undefined) | undefined;
	readonly MssPackage?: (MssPackage | undefined) | undefined;
	readonly Origination?: (string | undefined) | undefined;
	readonly StartoverWindowSeconds?: (number | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly TimeDelaySeconds?: (number | undefined) | undefined;
	readonly Whitelist?: (string[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class PackagingConfiguration
	extends CfnResource<PackagingConfigurationComponentInputs>
	implements PackagingConfigurationComponentOutputs
{
	constructor(entity: ADKEntity, options: PackagingConfigurationComponentInputs) {
		super(entity, options.LogicalId, "AWS::MediaPackage::PackagingConfiguration", options);
	}
	public readonly Arn: string;
}
export interface PackagingConfigurationComponentOutputs {
	readonly Arn: string;
}
export interface PackagingConfigurationComponentInputs {
	readonly Id: string;
	readonly PackagingGroupId: string;
	readonly CmafPackage?: (CmafPackage | undefined) | undefined;
	readonly DashPackage?: (DashPackage | undefined) | undefined;
	readonly HlsPackage?: (HlsPackage | undefined) | undefined;
	readonly MssPackage?: (MssPackage | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export class PackagingGroup extends CfnResource<PackagingGroupComponentInputs> implements PackagingGroupComponentOutputs {
	constructor(entity: ADKEntity, options: PackagingGroupComponentInputs) {
		super(entity, options.LogicalId, "AWS::MediaPackage::PackagingGroup", options);
	}
	public readonly Arn: string;
	public readonly DomainName: string;
}
export interface PackagingGroupComponentOutputs {
	readonly Arn: string;
	readonly DomainName: string;
}
export interface PackagingGroupComponentInputs {
	readonly Id: string;
	readonly Authorization?: (Authorization | undefined) | undefined;
	readonly EgressAccessLogs?: (LogConfiguration | undefined) | undefined;
	readonly Tags?: ({ key: string; value: string }[] | undefined) | undefined;
	readonly LogicalId: string;
}
export interface EgressEndpoint {
	readonly PackagingConfigurationId: string;
	readonly Url: string;
}
export interface HlsIngest {
	readonly ingestEndpoints?: (IngestEndpoint[] | undefined) | undefined;
}
export interface IngestEndpoint {
	readonly Id?: (string | undefined) | undefined;
	readonly Password?: (string | undefined) | undefined;
	readonly Url?: (string | undefined) | undefined;
	readonly Username?: (string | undefined) | undefined;
}
export interface LogConfiguration {
	readonly LogGroupName?: (string | undefined) | undefined;
}
export interface Authorization {
	readonly CdnIdentifierSecret: string;
	readonly SecretsRoleArn: string;
}
export interface CmafEncryption {
	readonly ConstantInitializationVector?: (string | undefined) | undefined;
	readonly EncryptionMethod?: (string | undefined) | undefined;
	readonly KeyRotationIntervalSeconds?: (number | undefined) | undefined;
	readonly SpekeKeyProvider: SpekeKeyProvider;
}
export interface CmafPackage {
	readonly Encryption?: (CmafEncryption | undefined) | undefined;
	readonly HlsManifests?: (HlsManifest[] | undefined) | undefined;
	readonly SegmentDurationSeconds?: (number | undefined) | undefined;
	readonly SegmentPrefix?: (string | undefined) | undefined;
	readonly StreamSelection?: (StreamSelection | undefined) | undefined;
}
export interface DashEncryption {
	readonly KeyRotationIntervalSeconds?: (number | undefined) | undefined;
	readonly SpekeKeyProvider: SpekeKeyProvider;
}
export interface DashPackage {
	readonly AdTriggers?: (string[] | undefined) | undefined;
	readonly AdsOnDeliveryRestrictions?: (string | undefined) | undefined;
	readonly Encryption?: (DashEncryption | undefined) | undefined;
	readonly IncludeIframeOnlyStream?: (boolean | undefined) | undefined;
	readonly ManifestLayout?: (string | undefined) | undefined;
	readonly ManifestWindowSeconds?: (number | undefined) | undefined;
	readonly MinBufferTimeSeconds?: (number | undefined) | undefined;
	readonly MinUpdatePeriodSeconds?: (number | undefined) | undefined;
	readonly PeriodTriggers?: (string[] | undefined) | undefined;
	readonly Profile?: (string | undefined) | undefined;
	readonly SegmentDurationSeconds?: (number | undefined) | undefined;
	readonly SegmentTemplateFormat?: (string | undefined) | undefined;
	readonly StreamSelection?: (StreamSelection | undefined) | undefined;
	readonly SuggestedPresentationDelaySeconds?: (number | undefined) | undefined;
	readonly UtcTiming?: (string | undefined) | undefined;
	readonly UtcTimingUri?: (string | undefined) | undefined;
}
export interface EncryptionContractConfiguration {
	readonly PresetSpeke20Audio: string;
	readonly PresetSpeke20Video: string;
}
export interface HlsEncryption {
	readonly ConstantInitializationVector?: (string | undefined) | undefined;
	readonly EncryptionMethod?: (string | undefined) | undefined;
	readonly KeyRotationIntervalSeconds?: (number | undefined) | undefined;
	readonly RepeatExtXKey?: (boolean | undefined) | undefined;
	readonly SpekeKeyProvider: SpekeKeyProvider;
}
export interface HlsManifest {
	readonly AdMarkers?: (string | undefined) | undefined;
	readonly AdTriggers?: (string[] | undefined) | undefined;
	readonly AdsOnDeliveryRestrictions?: (string | undefined) | undefined;
	readonly Id: string;
	readonly IncludeIframeOnlyStream?: (boolean | undefined) | undefined;
	readonly ManifestName?: (string | undefined) | undefined;
	readonly PlaylistType?: (string | undefined) | undefined;
	readonly PlaylistWindowSeconds?: (number | undefined) | undefined;
	readonly ProgramDateTimeIntervalSeconds?: (number | undefined) | undefined;
	readonly Url?: (string | undefined) | undefined;
}
export interface HlsPackage {
	readonly AdMarkers?: (string | undefined) | undefined;
	readonly AdTriggers?: (string[] | undefined) | undefined;
	readonly AdsOnDeliveryRestrictions?: (string | undefined) | undefined;
	readonly Encryption?: (HlsEncryption | undefined) | undefined;
	readonly IncludeDvbSubtitles?: (boolean | undefined) | undefined;
	readonly IncludeIframeOnlyStream?: (boolean | undefined) | undefined;
	readonly PlaylistType?: (string | undefined) | undefined;
	readonly PlaylistWindowSeconds?: (number | undefined) | undefined;
	readonly ProgramDateTimeIntervalSeconds?: (number | undefined) | undefined;
	readonly SegmentDurationSeconds?: (number | undefined) | undefined;
	readonly StreamSelection?: (StreamSelection | undefined) | undefined;
	readonly UseAudioRenditionGroup?: (boolean | undefined) | undefined;
}
export interface MssEncryption {
	readonly SpekeKeyProvider: SpekeKeyProvider;
}
export interface MssPackage {
	readonly Encryption?: (MssEncryption | undefined) | undefined;
	readonly ManifestWindowSeconds?: (number | undefined) | undefined;
	readonly SegmentDurationSeconds?: (number | undefined) | undefined;
	readonly StreamSelection?: (StreamSelection | undefined) | undefined;
}
export interface SpekeKeyProvider {
	readonly CertificateArn?: (string | undefined) | undefined;
	readonly EncryptionContractConfiguration?: (EncryptionContractConfiguration | undefined) | undefined;
	readonly ResourceId: string;
	readonly RoleArn: string;
	readonly SystemIds: string[];
	readonly Url: string;
}
export interface StreamSelection {
	readonly MaxVideoBitsPerSecond?: (number | undefined) | undefined;
	readonly MinVideoBitsPerSecond?: (number | undefined) | undefined;
	readonly StreamOrder?: (string | undefined) | undefined;
}
export interface DashManifest {
	readonly ManifestLayout?: (string | undefined) | undefined;
	readonly ManifestName?: (string | undefined) | undefined;
	readonly MinBufferTimeSeconds?: (number | undefined) | undefined;
	readonly Profile?: (string | undefined) | undefined;
	readonly ScteMarkersSource?: (string | undefined) | undefined;
	readonly StreamSelection?: (StreamSelection | undefined) | undefined;
}
export interface MssManifest {
	readonly ManifestName?: (string | undefined) | undefined;
	readonly StreamSelection?: (StreamSelection | undefined) | undefined;
}
export default {
	Asset: Asset,
	Channel: Channel,
	OriginEndpoint: OriginEndpoint,
	PackagingConfiguration: PackagingConfiguration,
	PackagingGroup: PackagingGroup,
};

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
	readonly ResourceId?: string | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
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
	readonly Description?: string | undefined;
	readonly EgressAccessLogs?: LogConfiguration | undefined;
	readonly IngressAccessLogs?: LogConfiguration | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
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
	readonly Authorization?: Authorization | undefined;
	readonly CmafPackage?: CmafPackage | undefined;
	readonly DashPackage?: DashPackage | undefined;
	readonly Description?: string | undefined;
	readonly HlsPackage?: HlsPackage | undefined;
	readonly ManifestName?: string | undefined;
	readonly MssPackage?: MssPackage | undefined;
	readonly Origination?: string | undefined;
	readonly StartoverWindowSeconds?: number | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly TimeDelaySeconds?: number | undefined;
	readonly Whitelist?: string[] | undefined;
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
	readonly CmafPackage?: CmafPackage | undefined;
	readonly DashPackage?: DashPackage | undefined;
	readonly HlsPackage?: HlsPackage | undefined;
	readonly MssPackage?: MssPackage | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
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
	readonly Authorization?: Authorization | undefined;
	readonly EgressAccessLogs?: LogConfiguration | undefined;
	readonly Tags?: { key: string; value: string }[] | undefined;
	readonly LogicalId: string;
}
export interface EgressEndpoint {
	readonly PackagingConfigurationId: string;
	readonly Url: string;
}
export interface HlsIngest {
	readonly ingestEndpoints?: IngestEndpoint[] | undefined;
}
export interface IngestEndpoint {
	readonly Id?: string | undefined;
	readonly Password?: string | undefined;
	readonly Url?: string | undefined;
	readonly Username?: string | undefined;
}
export interface LogConfiguration {
	readonly LogGroupName?: string | undefined;
}
export interface Authorization {
	readonly CdnIdentifierSecret: string;
	readonly SecretsRoleArn: string;
}
export interface CmafEncryption {
	readonly ConstantInitializationVector?: string | undefined;
	readonly EncryptionMethod?: string | undefined;
	readonly KeyRotationIntervalSeconds?: number | undefined;
	readonly SpekeKeyProvider: SpekeKeyProvider;
}
export interface CmafPackage {
	readonly Encryption?: CmafEncryption | undefined;
	readonly HlsManifests?: HlsManifest[] | undefined;
	readonly SegmentDurationSeconds?: number | undefined;
	readonly SegmentPrefix?: string | undefined;
	readonly StreamSelection?: StreamSelection | undefined;
}
export interface DashEncryption {
	readonly KeyRotationIntervalSeconds?: number | undefined;
	readonly SpekeKeyProvider: SpekeKeyProvider;
}
export interface DashPackage {
	readonly AdTriggers?: string[] | undefined;
	readonly AdsOnDeliveryRestrictions?: string | undefined;
	readonly Encryption?: DashEncryption | undefined;
	readonly IncludeIframeOnlyStream?: boolean | undefined;
	readonly ManifestLayout?: string | undefined;
	readonly ManifestWindowSeconds?: number | undefined;
	readonly MinBufferTimeSeconds?: number | undefined;
	readonly MinUpdatePeriodSeconds?: number | undefined;
	readonly PeriodTriggers?: string[] | undefined;
	readonly Profile?: string | undefined;
	readonly SegmentDurationSeconds?: number | undefined;
	readonly SegmentTemplateFormat?: string | undefined;
	readonly StreamSelection?: StreamSelection | undefined;
	readonly SuggestedPresentationDelaySeconds?: number | undefined;
	readonly UtcTiming?: string | undefined;
	readonly UtcTimingUri?: string | undefined;
}
export interface EncryptionContractConfiguration {
	readonly PresetSpeke20Audio: string;
	readonly PresetSpeke20Video: string;
}
export interface HlsEncryption {
	readonly ConstantInitializationVector?: string | undefined;
	readonly EncryptionMethod?: string | undefined;
	readonly KeyRotationIntervalSeconds?: number | undefined;
	readonly RepeatExtXKey?: boolean | undefined;
	readonly SpekeKeyProvider: SpekeKeyProvider;
}
export interface HlsManifest {
	readonly AdMarkers?: string | undefined;
	readonly AdTriggers?: string[] | undefined;
	readonly AdsOnDeliveryRestrictions?: string | undefined;
	readonly Id: string;
	readonly IncludeIframeOnlyStream?: boolean | undefined;
	readonly ManifestName?: string | undefined;
	readonly PlaylistType?: string | undefined;
	readonly PlaylistWindowSeconds?: number | undefined;
	readonly ProgramDateTimeIntervalSeconds?: number | undefined;
	readonly Url?: string | undefined;
}
export interface HlsPackage {
	readonly AdMarkers?: string | undefined;
	readonly AdTriggers?: string[] | undefined;
	readonly AdsOnDeliveryRestrictions?: string | undefined;
	readonly Encryption?: HlsEncryption | undefined;
	readonly IncludeDvbSubtitles?: boolean | undefined;
	readonly IncludeIframeOnlyStream?: boolean | undefined;
	readonly PlaylistType?: string | undefined;
	readonly PlaylistWindowSeconds?: number | undefined;
	readonly ProgramDateTimeIntervalSeconds?: number | undefined;
	readonly SegmentDurationSeconds?: number | undefined;
	readonly StreamSelection?: StreamSelection | undefined;
	readonly UseAudioRenditionGroup?: boolean | undefined;
}
export interface MssEncryption {
	readonly SpekeKeyProvider: SpekeKeyProvider;
}
export interface MssPackage {
	readonly Encryption?: MssEncryption | undefined;
	readonly ManifestWindowSeconds?: number | undefined;
	readonly SegmentDurationSeconds?: number | undefined;
	readonly StreamSelection?: StreamSelection | undefined;
}
export interface SpekeKeyProvider {
	readonly CertificateArn?: string | undefined;
	readonly EncryptionContractConfiguration?: EncryptionContractConfiguration | undefined;
	readonly ResourceId: string;
	readonly RoleArn: string;
	readonly SystemIds: string[];
	readonly Url: string;
}
export interface StreamSelection {
	readonly MaxVideoBitsPerSecond?: number | undefined;
	readonly MinVideoBitsPerSecond?: number | undefined;
	readonly StreamOrder?: string | undefined;
}
export interface DashManifest {
	readonly ManifestLayout?: string | undefined;
	readonly ManifestName?: string | undefined;
	readonly MinBufferTimeSeconds?: number | undefined;
	readonly Profile?: string | undefined;
	readonly ScteMarkersSource?: string | undefined;
	readonly StreamSelection?: StreamSelection | undefined;
}
export interface MssManifest {
	readonly ManifestName?: string | undefined;
	readonly StreamSelection?: StreamSelection | undefined;
}
export default {
	Asset: Asset,
	Channel: Channel,
	OriginEndpoint: OriginEndpoint,
	PackagingConfiguration: PackagingConfiguration,
	PackagingGroup: PackagingGroup,
};

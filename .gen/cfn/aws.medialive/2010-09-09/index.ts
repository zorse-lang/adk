import { CfnResource, Entity as ADKEntity } from "@zorse/adk";

export class Channel extends CfnResource<ChannelComponentInputs> implements ChannelComponentOutputs {
	constructor(entity: ADKEntity, options: ChannelComponentInputs) {
		super(entity, options.LogicalId, "AWS::MediaLive::Channel", options);
	}
	public readonly Arn: string;
	public readonly Inputs: string[];
}
export interface ChannelComponentOutputs {
	readonly Arn: string;
	readonly Inputs: string[];
}
export interface ChannelComponentInputs {
	readonly CdiInputSpecification?: (CdiInputSpecification | undefined) | undefined;
	readonly ChannelClass?: (string | undefined) | undefined;
	readonly Destinations?: (OutputDestination[] | undefined) | undefined;
	readonly EncoderSettings?: (EncoderSettings | undefined) | undefined;
	readonly InputAttachments?: (InputAttachment[] | undefined) | undefined;
	readonly InputSpecification?: (InputSpecification | undefined) | undefined;
	readonly LogLevel?: (string | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly RoleArn?: (string | undefined) | undefined;
	readonly Tags?: (any | undefined) | undefined;
	readonly Vpc?: (VpcOutputSettings | undefined) | undefined;
	readonly LogicalId: string;
}
export class Input extends CfnResource<InputComponentInputs> implements InputComponentOutputs {
	constructor(entity: ADKEntity, options: InputComponentInputs) {
		super(entity, options.LogicalId, "AWS::MediaLive::Input", options);
	}
	public readonly Arn: string;
}
export interface InputComponentOutputs {
	readonly Arn: string;
}
export interface InputComponentInputs {
	readonly Destinations?: (InputDestinationRequest[] | string[]) | undefined;
	readonly InputDevices?: (InputDeviceSettings[] | undefined) | undefined;
	readonly InputSecurityGroups?: (string[] | undefined) | undefined;
	readonly MediaConnectFlows?: (MediaConnectFlowRequest[] | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly RoleArn?: (string | undefined) | undefined;
	readonly Sources?: (InputSourceRequest[] | string[]) | undefined;
	readonly Tags?: (any | undefined) | undefined;
	readonly Type?: (string | undefined) | undefined;
	readonly Vpc?: (InputVpcRequest | undefined) | undefined;
	readonly LogicalId: string;
}
export class InputSecurityGroup
	extends CfnResource<InputSecurityGroupComponentInputs>
	implements InputSecurityGroupComponentOutputs
{
	constructor(entity: ADKEntity, options: InputSecurityGroupComponentInputs) {
		super(entity, options.LogicalId, "AWS::MediaLive::InputSecurityGroup", options);
	}
	public readonly Arn: string;
}
export interface InputSecurityGroupComponentOutputs {
	readonly Arn: string;
}
export interface InputSecurityGroupComponentInputs {
	readonly Tags?: (any | undefined) | undefined;
	readonly WhitelistRules?: (InputWhitelistRuleCidr[] | undefined) | undefined;
	readonly LogicalId: string;
}
export interface AacSettings {
	readonly Bitrate?: (number | undefined) | undefined;
	readonly CodingMode?: (string | undefined) | undefined;
	readonly InputType?: (string | undefined) | undefined;
	readonly Profile?: (string | undefined) | undefined;
	readonly RateControlMode?: (string | undefined) | undefined;
	readonly RawFormat?: (string | undefined) | undefined;
	readonly SampleRate?: (number | undefined) | undefined;
	readonly Spec?: (string | undefined) | undefined;
	readonly VbrQuality?: (string | undefined) | undefined;
}
export interface Ac3Settings {
	readonly Bitrate?: (number | undefined) | undefined;
	readonly BitstreamMode?: (string | undefined) | undefined;
	readonly CodingMode?: (string | undefined) | undefined;
	readonly Dialnorm?: (number | undefined) | undefined;
	readonly DrcProfile?: (string | undefined) | undefined;
	readonly LfeFilter?: (string | undefined) | undefined;
	readonly MetadataControl?: (string | undefined) | undefined;
}
export interface AncillarySourceSettings {
	readonly SourceAncillaryChannelNumber?: (number | undefined) | undefined;
}
export interface ArchiveCdnSettings {
	readonly ArchiveS3Settings?: (ArchiveS3Settings | undefined) | undefined;
}
export interface ArchiveContainerSettings {
	readonly M2tsSettings?: (M2tsSettings | undefined) | undefined;
	readonly RawSettings?: (RawSettings | undefined) | undefined;
}
export interface ArchiveGroupSettings {
	readonly ArchiveCdnSettings?: (ArchiveCdnSettings | undefined) | undefined;
	readonly Destination?: (OutputLocationRef | undefined) | undefined;
	readonly RolloverInterval?: (number | undefined) | undefined;
}
export interface ArchiveOutputSettings {
	readonly ContainerSettings?: (ArchiveContainerSettings | undefined) | undefined;
	readonly Extension?: (string | undefined) | undefined;
	readonly NameModifier?: (string | undefined) | undefined;
}
export interface ArchiveS3Settings {
	readonly CannedAcl?: (string | undefined) | undefined;
}
export interface AribDestinationSettings {}
export interface AribSourceSettings {}
export interface AudioChannelMapping {
	readonly InputChannelLevels?: (InputChannelLevel[] | undefined) | undefined;
	readonly OutputChannel?: (number | undefined) | undefined;
}
export interface AudioCodecSettings {
	readonly AacSettings?: (AacSettings | undefined) | undefined;
	readonly Ac3Settings?: (Ac3Settings | undefined) | undefined;
	readonly Eac3Settings?: (Eac3Settings | undefined) | undefined;
	readonly Mp2Settings?: (Mp2Settings | undefined) | undefined;
	readonly PassThroughSettings?: (PassThroughSettings | undefined) | undefined;
	readonly WavSettings?: (WavSettings | undefined) | undefined;
}
export interface AudioDescription {
	readonly AudioNormalizationSettings?: (AudioNormalizationSettings | undefined) | undefined;
	readonly AudioSelectorName?: (string | undefined) | undefined;
	readonly AudioType?: (string | undefined) | undefined;
	readonly AudioTypeControl?: (string | undefined) | undefined;
	readonly AudioWatermarkingSettings?: (AudioWatermarkSettings | undefined) | undefined;
	readonly CodecSettings?: (AudioCodecSettings | undefined) | undefined;
	readonly LanguageCode?: (string | undefined) | undefined;
	readonly LanguageCodeControl?: (string | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly RemixSettings?: (RemixSettings | undefined) | undefined;
	readonly StreamName?: (string | undefined) | undefined;
}
export interface AudioHlsRenditionSelection {
	readonly GroupId?: (string | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
}
export interface AudioLanguageSelection {
	readonly LanguageCode?: (string | undefined) | undefined;
	readonly LanguageSelectionPolicy?: (string | undefined) | undefined;
}
export interface AudioNormalizationSettings {
	readonly Algorithm?: (string | undefined) | undefined;
	readonly AlgorithmControl?: (string | undefined) | undefined;
	readonly TargetLkfs?: (number | undefined) | undefined;
}
export interface AudioOnlyHlsSettings {
	readonly AudioGroupId?: (string | undefined) | undefined;
	readonly AudioOnlyImage?: (InputLocation | undefined) | undefined;
	readonly AudioTrackType?: (string | undefined) | undefined;
	readonly SegmentType?: (string | undefined) | undefined;
}
export interface AudioPidSelection {
	readonly Pid?: (number | undefined) | undefined;
}
export interface AudioSelector {
	readonly Name?: (string | undefined) | undefined;
	readonly SelectorSettings?: (AudioSelectorSettings | undefined) | undefined;
}
export interface AudioSelectorSettings {
	readonly AudioHlsRenditionSelection?: (AudioHlsRenditionSelection | undefined) | undefined;
	readonly AudioLanguageSelection?: (AudioLanguageSelection | undefined) | undefined;
	readonly AudioPidSelection?: (AudioPidSelection | undefined) | undefined;
	readonly AudioTrackSelection?: (AudioTrackSelection | undefined) | undefined;
}
export interface AudioSilenceFailoverSettings {
	readonly AudioSelectorName?: (string | undefined) | undefined;
	readonly AudioSilenceThresholdMsec?: (number | undefined) | undefined;
}
export interface AudioTrack {
	readonly Track?: (number | undefined) | undefined;
}
export interface AudioTrackSelection {
	readonly Tracks?: (AudioTrack[] | undefined) | undefined;
}
export interface AudioWatermarkSettings {
	readonly NielsenWatermarksSettings?: (NielsenWatermarksSettings | undefined) | undefined;
}
export interface AutomaticInputFailoverSettings {
	readonly ErrorClearTimeMsec?: (number | undefined) | undefined;
	readonly FailoverConditions?: (FailoverCondition[] | undefined) | undefined;
	readonly InputPreference?: (string | undefined) | undefined;
	readonly SecondaryInputId?: (string | undefined) | undefined;
}
export interface AvailBlanking {
	readonly AvailBlankingImage?: (InputLocation | undefined) | undefined;
	readonly State?: (string | undefined) | undefined;
}
export interface AvailConfiguration {
	readonly AvailSettings?: (AvailSettings | undefined) | undefined;
}
export interface AvailSettings {
	readonly Scte35SpliceInsert?: (Scte35SpliceInsert | undefined) | undefined;
	readonly Scte35TimeSignalApos?: (Scte35TimeSignalApos | undefined) | undefined;
}
export interface BlackoutSlate {
	readonly BlackoutSlateImage?: (InputLocation | undefined) | undefined;
	readonly NetworkEndBlackout?: (string | undefined) | undefined;
	readonly NetworkEndBlackoutImage?: (InputLocation | undefined) | undefined;
	readonly NetworkId?: (string | undefined) | undefined;
	readonly State?: (string | undefined) | undefined;
}
export interface BurnInDestinationSettings {
	readonly Alignment?: (string | undefined) | undefined;
	readonly BackgroundColor?: (string | undefined) | undefined;
	readonly BackgroundOpacity?: (number | undefined) | undefined;
	readonly Font?: (InputLocation | undefined) | undefined;
	readonly FontColor?: (string | undefined) | undefined;
	readonly FontOpacity?: (number | undefined) | undefined;
	readonly FontResolution?: (number | undefined) | undefined;
	readonly FontSize?: (string | undefined) | undefined;
	readonly OutlineColor?: (string | undefined) | undefined;
	readonly OutlineSize?: (number | undefined) | undefined;
	readonly ShadowColor?: (string | undefined) | undefined;
	readonly ShadowOpacity?: (number | undefined) | undefined;
	readonly ShadowXOffset?: (number | undefined) | undefined;
	readonly ShadowYOffset?: (number | undefined) | undefined;
	readonly TeletextGridControl?: (string | undefined) | undefined;
	readonly XPosition?: (number | undefined) | undefined;
	readonly YPosition?: (number | undefined) | undefined;
}
export interface CaptionDescription {
	readonly CaptionSelectorName?: (string | undefined) | undefined;
	readonly DestinationSettings?: (CaptionDestinationSettings | undefined) | undefined;
	readonly LanguageCode?: (string | undefined) | undefined;
	readonly LanguageDescription?: (string | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
}
export interface CaptionDestinationSettings {
	readonly AribDestinationSettings?: (AribDestinationSettings | undefined) | undefined;
	readonly BurnInDestinationSettings?: (BurnInDestinationSettings | undefined) | undefined;
	readonly DvbSubDestinationSettings?: (DvbSubDestinationSettings | undefined) | undefined;
	readonly EbuTtDDestinationSettings?: (EbuTtDDestinationSettings | undefined) | undefined;
	readonly EmbeddedDestinationSettings?: (EmbeddedDestinationSettings | undefined) | undefined;
	readonly EmbeddedPlusScte20DestinationSettings?: (EmbeddedPlusScte20DestinationSettings | undefined) | undefined;
	readonly RtmpCaptionInfoDestinationSettings?: (RtmpCaptionInfoDestinationSettings | undefined) | undefined;
	readonly Scte20PlusEmbeddedDestinationSettings?: (Scte20PlusEmbeddedDestinationSettings | undefined) | undefined;
	readonly Scte27DestinationSettings?: (Scte27DestinationSettings | undefined) | undefined;
	readonly SmpteTtDestinationSettings?: (SmpteTtDestinationSettings | undefined) | undefined;
	readonly TeletextDestinationSettings?: (TeletextDestinationSettings | undefined) | undefined;
	readonly TtmlDestinationSettings?: (TtmlDestinationSettings | undefined) | undefined;
	readonly WebvttDestinationSettings?: (WebvttDestinationSettings | undefined) | undefined;
}
export interface CaptionLanguageMapping {
	readonly CaptionChannel?: (number | undefined) | undefined;
	readonly LanguageCode?: (string | undefined) | undefined;
	readonly LanguageDescription?: (string | undefined) | undefined;
}
export interface CaptionRectangle {
	readonly Height?: (number | undefined) | undefined;
	readonly LeftOffset?: (number | undefined) | undefined;
	readonly TopOffset?: (number | undefined) | undefined;
	readonly Width?: (number | undefined) | undefined;
}
export interface CaptionSelector {
	readonly LanguageCode?: (string | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly SelectorSettings?: (CaptionSelectorSettings | undefined) | undefined;
}
export interface CaptionSelectorSettings {
	readonly AncillarySourceSettings?: (AncillarySourceSettings | undefined) | undefined;
	readonly AribSourceSettings?: (AribSourceSettings | undefined) | undefined;
	readonly DvbSubSourceSettings?: (DvbSubSourceSettings | undefined) | undefined;
	readonly EmbeddedSourceSettings?: (EmbeddedSourceSettings | undefined) | undefined;
	readonly Scte20SourceSettings?: (Scte20SourceSettings | undefined) | undefined;
	readonly Scte27SourceSettings?: (Scte27SourceSettings | undefined) | undefined;
	readonly TeletextSourceSettings?: (TeletextSourceSettings | undefined) | undefined;
}
export interface CdiInputSpecification {
	readonly Resolution?: (string | undefined) | undefined;
}
export interface ColorSpacePassthroughSettings {}
export interface DvbNitSettings {
	readonly NetworkId?: (number | undefined) | undefined;
	readonly NetworkName?: (string | undefined) | undefined;
	readonly RepInterval?: (number | undefined) | undefined;
}
export interface DvbSdtSettings {
	readonly OutputSdt?: (string | undefined) | undefined;
	readonly RepInterval?: (number | undefined) | undefined;
	readonly ServiceName?: (string | undefined) | undefined;
	readonly ServiceProviderName?: (string | undefined) | undefined;
}
export interface DvbSubDestinationSettings {
	readonly Alignment?: (string | undefined) | undefined;
	readonly BackgroundColor?: (string | undefined) | undefined;
	readonly BackgroundOpacity?: (number | undefined) | undefined;
	readonly Font?: (InputLocation | undefined) | undefined;
	readonly FontColor?: (string | undefined) | undefined;
	readonly FontOpacity?: (number | undefined) | undefined;
	readonly FontResolution?: (number | undefined) | undefined;
	readonly FontSize?: (string | undefined) | undefined;
	readonly OutlineColor?: (string | undefined) | undefined;
	readonly OutlineSize?: (number | undefined) | undefined;
	readonly ShadowColor?: (string | undefined) | undefined;
	readonly ShadowOpacity?: (number | undefined) | undefined;
	readonly ShadowXOffset?: (number | undefined) | undefined;
	readonly ShadowYOffset?: (number | undefined) | undefined;
	readonly TeletextGridControl?: (string | undefined) | undefined;
	readonly XPosition?: (number | undefined) | undefined;
	readonly YPosition?: (number | undefined) | undefined;
}
export interface DvbSubSourceSettings {
	readonly OcrLanguage?: (string | undefined) | undefined;
	readonly Pid?: (number | undefined) | undefined;
}
export interface DvbTdtSettings {
	readonly RepInterval?: (number | undefined) | undefined;
}
export interface Eac3Settings {
	readonly AttenuationControl?: (string | undefined) | undefined;
	readonly Bitrate?: (number | undefined) | undefined;
	readonly BitstreamMode?: (string | undefined) | undefined;
	readonly CodingMode?: (string | undefined) | undefined;
	readonly DcFilter?: (string | undefined) | undefined;
	readonly Dialnorm?: (number | undefined) | undefined;
	readonly DrcLine?: (string | undefined) | undefined;
	readonly DrcRf?: (string | undefined) | undefined;
	readonly LfeControl?: (string | undefined) | undefined;
	readonly LfeFilter?: (string | undefined) | undefined;
	readonly LoRoCenterMixLevel?: (number | undefined) | undefined;
	readonly LoRoSurroundMixLevel?: (number | undefined) | undefined;
	readonly LtRtCenterMixLevel?: (number | undefined) | undefined;
	readonly LtRtSurroundMixLevel?: (number | undefined) | undefined;
	readonly MetadataControl?: (string | undefined) | undefined;
	readonly PassthroughControl?: (string | undefined) | undefined;
	readonly PhaseControl?: (string | undefined) | undefined;
	readonly StereoDownmix?: (string | undefined) | undefined;
	readonly SurroundExMode?: (string | undefined) | undefined;
	readonly SurroundMode?: (string | undefined) | undefined;
}
export interface EbuTtDDestinationSettings {
	readonly CopyrightHolder?: (string | undefined) | undefined;
	readonly FillLineGap?: (string | undefined) | undefined;
	readonly FontFamily?: (string | undefined) | undefined;
	readonly StyleControl?: (string | undefined) | undefined;
}
export interface EmbeddedDestinationSettings {}
export interface EmbeddedPlusScte20DestinationSettings {}
export interface EmbeddedSourceSettings {
	readonly Convert608To708?: (string | undefined) | undefined;
	readonly Scte20Detection?: (string | undefined) | undefined;
	readonly Source608ChannelNumber?: (number | undefined) | undefined;
	readonly Source608TrackNumber?: (number | undefined) | undefined;
}
export interface EncoderSettings {
	readonly AudioDescriptions?: (AudioDescription[] | undefined) | undefined;
	readonly AvailBlanking?: (AvailBlanking | undefined) | undefined;
	readonly AvailConfiguration?: (AvailConfiguration | undefined) | undefined;
	readonly BlackoutSlate?: (BlackoutSlate | undefined) | undefined;
	readonly CaptionDescriptions?: (CaptionDescription[] | undefined) | undefined;
	readonly FeatureActivations?: (FeatureActivations | undefined) | undefined;
	readonly GlobalConfiguration?: (GlobalConfiguration | undefined) | undefined;
	readonly MotionGraphicsConfiguration?: (MotionGraphicsConfiguration | undefined) | undefined;
	readonly NielsenConfiguration?: (NielsenConfiguration | undefined) | undefined;
	readonly OutputGroups?: (OutputGroup[] | undefined) | undefined;
	readonly TimecodeConfig?: (TimecodeConfig | undefined) | undefined;
	readonly VideoDescriptions?: (VideoDescription[] | undefined) | undefined;
}
export interface FailoverCondition {
	readonly FailoverConditionSettings?: (FailoverConditionSettings | undefined) | undefined;
}
export interface FailoverConditionSettings {
	readonly AudioSilenceSettings?: (AudioSilenceFailoverSettings | undefined) | undefined;
	readonly InputLossSettings?: (InputLossFailoverSettings | undefined) | undefined;
	readonly VideoBlackSettings?: (VideoBlackFailoverSettings | undefined) | undefined;
}
export interface FeatureActivations {
	readonly InputPrepareScheduleActions?: (string | undefined) | undefined;
}
export interface FecOutputSettings {
	readonly ColumnDepth?: (number | undefined) | undefined;
	readonly IncludeFec?: (string | undefined) | undefined;
	readonly RowLength?: (number | undefined) | undefined;
}
export interface Fmp4HlsSettings {
	readonly AudioRenditionSets?: (string | undefined) | undefined;
	readonly NielsenId3Behavior?: (string | undefined) | undefined;
	readonly TimedMetadataBehavior?: (string | undefined) | undefined;
}
export interface FrameCaptureCdnSettings {
	readonly FrameCaptureS3Settings?: (FrameCaptureS3Settings | undefined) | undefined;
}
export interface FrameCaptureGroupSettings {
	readonly Destination?: (OutputLocationRef | undefined) | undefined;
	readonly FrameCaptureCdnSettings?: (FrameCaptureCdnSettings | undefined) | undefined;
}
export interface FrameCaptureHlsSettings {}
export interface FrameCaptureOutputSettings {
	readonly NameModifier?: (string | undefined) | undefined;
}
export interface FrameCaptureS3Settings {
	readonly CannedAcl?: (string | undefined) | undefined;
}
export interface FrameCaptureSettings {
	readonly CaptureInterval?: (number | undefined) | undefined;
	readonly CaptureIntervalUnits?: (string | undefined) | undefined;
}
export interface GlobalConfiguration {
	readonly InitialAudioGain?: (number | undefined) | undefined;
	readonly InputEndAction?: (string | undefined) | undefined;
	readonly InputLossBehavior?: (InputLossBehavior | undefined) | undefined;
	readonly OutputLockingMode?: (string | undefined) | undefined;
	readonly OutputTimingSource?: (string | undefined) | undefined;
	readonly SupportLowFramerateInputs?: (string | undefined) | undefined;
}
export interface H264ColorSpaceSettings {
	readonly ColorSpacePassthroughSettings?: (ColorSpacePassthroughSettings | undefined) | undefined;
	readonly Rec601Settings?: (Rec601Settings | undefined) | undefined;
	readonly Rec709Settings?: (Rec709Settings | undefined) | undefined;
}
export interface H264FilterSettings {
	readonly TemporalFilterSettings?: (TemporalFilterSettings | undefined) | undefined;
}
export interface H264Settings {
	readonly AdaptiveQuantization?: (string | undefined) | undefined;
	readonly AfdSignaling?: (string | undefined) | undefined;
	readonly Bitrate?: (number | undefined) | undefined;
	readonly BufFillPct?: (number | undefined) | undefined;
	readonly BufSize?: (number | undefined) | undefined;
	readonly ColorMetadata?: (string | undefined) | undefined;
	readonly ColorSpaceSettings?: (H264ColorSpaceSettings | undefined) | undefined;
	readonly EntropyEncoding?: (string | undefined) | undefined;
	readonly FilterSettings?: (H264FilterSettings | undefined) | undefined;
	readonly FixedAfd?: (string | undefined) | undefined;
	readonly FlickerAq?: (string | undefined) | undefined;
	readonly ForceFieldPictures?: (string | undefined) | undefined;
	readonly FramerateControl?: (string | undefined) | undefined;
	readonly FramerateDenominator?: (number | undefined) | undefined;
	readonly FramerateNumerator?: (number | undefined) | undefined;
	readonly GopBReference?: (string | undefined) | undefined;
	readonly GopClosedCadence?: (number | undefined) | undefined;
	readonly GopNumBFrames?: (number | undefined) | undefined;
	readonly GopSize?: (number | undefined) | undefined;
	readonly GopSizeUnits?: (string | undefined) | undefined;
	readonly Level?: (string | undefined) | undefined;
	readonly LookAheadRateControl?: (string | undefined) | undefined;
	readonly MaxBitrate?: (number | undefined) | undefined;
	readonly MinIInterval?: (number | undefined) | undefined;
	readonly NumRefFrames?: (number | undefined) | undefined;
	readonly ParControl?: (string | undefined) | undefined;
	readonly ParDenominator?: (number | undefined) | undefined;
	readonly ParNumerator?: (number | undefined) | undefined;
	readonly Profile?: (string | undefined) | undefined;
	readonly QualityLevel?: (string | undefined) | undefined;
	readonly QvbrQualityLevel?: (number | undefined) | undefined;
	readonly RateControlMode?: (string | undefined) | undefined;
	readonly ScanType?: (string | undefined) | undefined;
	readonly SceneChangeDetect?: (string | undefined) | undefined;
	readonly Slices?: (number | undefined) | undefined;
	readonly Softness?: (number | undefined) | undefined;
	readonly SpatialAq?: (string | undefined) | undefined;
	readonly SubgopLength?: (string | undefined) | undefined;
	readonly Syntax?: (string | undefined) | undefined;
	readonly TemporalAq?: (string | undefined) | undefined;
	readonly TimecodeInsertion?: (string | undefined) | undefined;
}
export interface H265ColorSpaceSettings {
	readonly ColorSpacePassthroughSettings?: (ColorSpacePassthroughSettings | undefined) | undefined;
	readonly Hdr10Settings?: (Hdr10Settings | undefined) | undefined;
	readonly Rec601Settings?: (Rec601Settings | undefined) | undefined;
	readonly Rec709Settings?: (Rec709Settings | undefined) | undefined;
}
export interface H265FilterSettings {
	readonly TemporalFilterSettings?: (TemporalFilterSettings | undefined) | undefined;
}
export interface H265Settings {
	readonly AdaptiveQuantization?: (string | undefined) | undefined;
	readonly AfdSignaling?: (string | undefined) | undefined;
	readonly AlternativeTransferFunction?: (string | undefined) | undefined;
	readonly Bitrate?: (number | undefined) | undefined;
	readonly BufSize?: (number | undefined) | undefined;
	readonly ColorMetadata?: (string | undefined) | undefined;
	readonly ColorSpaceSettings?: (H265ColorSpaceSettings | undefined) | undefined;
	readonly FilterSettings?: (H265FilterSettings | undefined) | undefined;
	readonly FixedAfd?: (string | undefined) | undefined;
	readonly FlickerAq?: (string | undefined) | undefined;
	readonly FramerateDenominator?: (number | undefined) | undefined;
	readonly FramerateNumerator?: (number | undefined) | undefined;
	readonly GopClosedCadence?: (number | undefined) | undefined;
	readonly GopSize?: (number | undefined) | undefined;
	readonly GopSizeUnits?: (string | undefined) | undefined;
	readonly Level?: (string | undefined) | undefined;
	readonly LookAheadRateControl?: (string | undefined) | undefined;
	readonly MaxBitrate?: (number | undefined) | undefined;
	readonly MinIInterval?: (number | undefined) | undefined;
	readonly ParDenominator?: (number | undefined) | undefined;
	readonly ParNumerator?: (number | undefined) | undefined;
	readonly Profile?: (string | undefined) | undefined;
	readonly QvbrQualityLevel?: (number | undefined) | undefined;
	readonly RateControlMode?: (string | undefined) | undefined;
	readonly ScanType?: (string | undefined) | undefined;
	readonly SceneChangeDetect?: (string | undefined) | undefined;
	readonly Slices?: (number | undefined) | undefined;
	readonly Tier?: (string | undefined) | undefined;
	readonly TimecodeInsertion?: (string | undefined) | undefined;
}
export interface Hdr10Settings {
	readonly MaxCll?: (number | undefined) | undefined;
	readonly MaxFall?: (number | undefined) | undefined;
}
export interface HlsAkamaiSettings {
	readonly ConnectionRetryInterval?: (number | undefined) | undefined;
	readonly FilecacheDuration?: (number | undefined) | undefined;
	readonly HttpTransferMode?: (string | undefined) | undefined;
	readonly NumRetries?: (number | undefined) | undefined;
	readonly RestartDelay?: (number | undefined) | undefined;
	readonly Salt?: (string | undefined) | undefined;
	readonly Token?: (string | undefined) | undefined;
}
export interface HlsBasicPutSettings {
	readonly ConnectionRetryInterval?: (number | undefined) | undefined;
	readonly FilecacheDuration?: (number | undefined) | undefined;
	readonly NumRetries?: (number | undefined) | undefined;
	readonly RestartDelay?: (number | undefined) | undefined;
}
export interface HlsCdnSettings {
	readonly HlsAkamaiSettings?: (HlsAkamaiSettings | undefined) | undefined;
	readonly HlsBasicPutSettings?: (HlsBasicPutSettings | undefined) | undefined;
	readonly HlsMediaStoreSettings?: (HlsMediaStoreSettings | undefined) | undefined;
	readonly HlsS3Settings?: (HlsS3Settings | undefined) | undefined;
	readonly HlsWebdavSettings?: (HlsWebdavSettings | undefined) | undefined;
}
export interface HlsGroupSettings {
	readonly AdMarkers?: (string[] | undefined) | undefined;
	readonly BaseUrlContent?: (string | undefined) | undefined;
	readonly BaseUrlContent1?: (string | undefined) | undefined;
	readonly BaseUrlManifest?: (string | undefined) | undefined;
	readonly BaseUrlManifest1?: (string | undefined) | undefined;
	readonly CaptionLanguageMappings?: (CaptionLanguageMapping[] | undefined) | undefined;
	readonly CaptionLanguageSetting?: (string | undefined) | undefined;
	readonly ClientCache?: (string | undefined) | undefined;
	readonly CodecSpecification?: (string | undefined) | undefined;
	readonly ConstantIv?: (string | undefined) | undefined;
	readonly Destination?: (OutputLocationRef | undefined) | undefined;
	readonly DirectoryStructure?: (string | undefined) | undefined;
	readonly DiscontinuityTags?: (string | undefined) | undefined;
	readonly EncryptionType?: (string | undefined) | undefined;
	readonly HlsCdnSettings?: (HlsCdnSettings | undefined) | undefined;
	readonly HlsId3SegmentTagging?: (string | undefined) | undefined;
	readonly IFrameOnlyPlaylists?: (string | undefined) | undefined;
	readonly IncompleteSegmentBehavior?: (string | undefined) | undefined;
	readonly IndexNSegments?: (number | undefined) | undefined;
	readonly InputLossAction?: (string | undefined) | undefined;
	readonly IvInManifest?: (string | undefined) | undefined;
	readonly IvSource?: (string | undefined) | undefined;
	readonly KeepSegments?: (number | undefined) | undefined;
	readonly KeyFormat?: (string | undefined) | undefined;
	readonly KeyFormatVersions?: (string | undefined) | undefined;
	readonly KeyProviderSettings?: (KeyProviderSettings | undefined) | undefined;
	readonly ManifestCompression?: (string | undefined) | undefined;
	readonly ManifestDurationFormat?: (string | undefined) | undefined;
	readonly MinSegmentLength?: (number | undefined) | undefined;
	readonly Mode?: (string | undefined) | undefined;
	readonly OutputSelection?: (string | undefined) | undefined;
	readonly ProgramDateTime?: (string | undefined) | undefined;
	readonly ProgramDateTimeClock?: (string | undefined) | undefined;
	readonly ProgramDateTimePeriod?: (number | undefined) | undefined;
	readonly RedundantManifest?: (string | undefined) | undefined;
	readonly SegmentLength?: (number | undefined) | undefined;
	readonly SegmentationMode?: (string | undefined) | undefined;
	readonly SegmentsPerSubdirectory?: (number | undefined) | undefined;
	readonly StreamInfResolution?: (string | undefined) | undefined;
	readonly TimedMetadataId3Frame?: (string | undefined) | undefined;
	readonly TimedMetadataId3Period?: (number | undefined) | undefined;
	readonly TimestampDeltaMilliseconds?: (number | undefined) | undefined;
	readonly TsFileMode?: (string | undefined) | undefined;
}
export interface HlsInputSettings {
	readonly Bandwidth?: (number | undefined) | undefined;
	readonly BufferSegments?: (number | undefined) | undefined;
	readonly Retries?: (number | undefined) | undefined;
	readonly RetryInterval?: (number | undefined) | undefined;
	readonly Scte35Source?: (string | undefined) | undefined;
}
export interface HlsMediaStoreSettings {
	readonly ConnectionRetryInterval?: (number | undefined) | undefined;
	readonly FilecacheDuration?: (number | undefined) | undefined;
	readonly MediaStoreStorageClass?: (string | undefined) | undefined;
	readonly NumRetries?: (number | undefined) | undefined;
	readonly RestartDelay?: (number | undefined) | undefined;
}
export interface HlsOutputSettings {
	readonly H265PackagingType?: (string | undefined) | undefined;
	readonly HlsSettings?: (HlsSettings | undefined) | undefined;
	readonly NameModifier?: (string | undefined) | undefined;
	readonly SegmentModifier?: (string | undefined) | undefined;
}
export interface HlsS3Settings {
	readonly CannedAcl?: (string | undefined) | undefined;
}
export interface HlsSettings {
	readonly AudioOnlyHlsSettings?: (AudioOnlyHlsSettings | undefined) | undefined;
	readonly Fmp4HlsSettings?: (Fmp4HlsSettings | undefined) | undefined;
	readonly FrameCaptureHlsSettings?: (FrameCaptureHlsSettings | undefined) | undefined;
	readonly StandardHlsSettings?: (StandardHlsSettings | undefined) | undefined;
}
export interface HlsWebdavSettings {
	readonly ConnectionRetryInterval?: (number | undefined) | undefined;
	readonly FilecacheDuration?: (number | undefined) | undefined;
	readonly HttpTransferMode?: (string | undefined) | undefined;
	readonly NumRetries?: (number | undefined) | undefined;
	readonly RestartDelay?: (number | undefined) | undefined;
}
export interface HtmlMotionGraphicsSettings {}
export interface InputAttachment {
	readonly AutomaticInputFailoverSettings?: (AutomaticInputFailoverSettings | undefined) | undefined;
	readonly InputAttachmentName?: (string | undefined) | undefined;
	readonly InputId?: (string | undefined) | undefined;
	readonly InputSettings?: (InputSettings | undefined) | undefined;
}
export interface InputChannelLevel {
	readonly Gain?: (number | undefined) | undefined;
	readonly InputChannel?: (number | undefined) | undefined;
}
export interface InputLocation {
	readonly PasswordParam?: (string | undefined) | undefined;
	readonly Uri?: (string | undefined) | undefined;
	readonly Username?: (string | undefined) | undefined;
}
export interface InputLossBehavior {
	readonly BlackFrameMsec?: (number | undefined) | undefined;
	readonly InputLossImageColor?: (string | undefined) | undefined;
	readonly InputLossImageSlate?: (InputLocation | undefined) | undefined;
	readonly InputLossImageType?: (string | undefined) | undefined;
	readonly RepeatFrameMsec?: (number | undefined) | undefined;
}
export interface InputLossFailoverSettings {
	readonly InputLossThresholdMsec?: (number | undefined) | undefined;
}
export interface InputSettings {
	readonly AudioSelectors?: (AudioSelector[] | undefined) | undefined;
	readonly CaptionSelectors?: (CaptionSelector[] | undefined) | undefined;
	readonly DeblockFilter?: (string | undefined) | undefined;
	readonly DenoiseFilter?: (string | undefined) | undefined;
	readonly FilterStrength?: (number | undefined) | undefined;
	readonly InputFilter?: (string | undefined) | undefined;
	readonly NetworkInputSettings?: (NetworkInputSettings | undefined) | undefined;
	readonly Scte35Pid?: (number | undefined) | undefined;
	readonly Smpte2038DataPreference?: (string | undefined) | undefined;
	readonly SourceEndBehavior?: (string | undefined) | undefined;
	readonly VideoSelector?: (VideoSelector | undefined) | undefined;
}
export interface InputSpecification {
	readonly Codec?: (string | undefined) | undefined;
	readonly MaximumBitrate?: (string | undefined) | undefined;
	readonly Resolution?: (string | undefined) | undefined;
}
export interface KeyProviderSettings {
	readonly StaticKeySettings?: (StaticKeySettings | undefined) | undefined;
}
export interface M2tsSettings {
	readonly AbsentInputAudioBehavior?: (string | undefined) | undefined;
	readonly Arib?: (string | undefined) | undefined;
	readonly AribCaptionsPid?: (string | undefined) | undefined;
	readonly AribCaptionsPidControl?: (string | undefined) | undefined;
	readonly AudioBufferModel?: (string | undefined) | undefined;
	readonly AudioFramesPerPes?: (number | undefined) | undefined;
	readonly AudioPids?: (string | undefined) | undefined;
	readonly AudioStreamType?: (string | undefined) | undefined;
	readonly Bitrate?: (number | undefined) | undefined;
	readonly BufferModel?: (string | undefined) | undefined;
	readonly CcDescriptor?: (string | undefined) | undefined;
	readonly DvbNitSettings?: (DvbNitSettings | undefined) | undefined;
	readonly DvbSdtSettings?: (DvbSdtSettings | undefined) | undefined;
	readonly DvbSubPids?: (string | undefined) | undefined;
	readonly DvbTdtSettings?: (DvbTdtSettings | undefined) | undefined;
	readonly DvbTeletextPid?: (string | undefined) | undefined;
	readonly Ebif?: (string | undefined) | undefined;
	readonly EbpAudioInterval?: (string | undefined) | undefined;
	readonly EbpLookaheadMs?: (number | undefined) | undefined;
	readonly EbpPlacement?: (string | undefined) | undefined;
	readonly EcmPid?: (string | undefined) | undefined;
	readonly EsRateInPes?: (string | undefined) | undefined;
	readonly EtvPlatformPid?: (string | undefined) | undefined;
	readonly EtvSignalPid?: (string | undefined) | undefined;
	readonly FragmentTime?: (number | undefined) | undefined;
	readonly Klv?: (string | undefined) | undefined;
	readonly KlvDataPids?: (string | undefined) | undefined;
	readonly NielsenId3Behavior?: (string | undefined) | undefined;
	readonly NullPacketBitrate?: (number | undefined) | undefined;
	readonly PatInterval?: (number | undefined) | undefined;
	readonly PcrControl?: (string | undefined) | undefined;
	readonly PcrPeriod?: (number | undefined) | undefined;
	readonly PcrPid?: (string | undefined) | undefined;
	readonly PmtInterval?: (number | undefined) | undefined;
	readonly PmtPid?: (string | undefined) | undefined;
	readonly ProgramNum?: (number | undefined) | undefined;
	readonly RateMode?: (string | undefined) | undefined;
	readonly Scte27Pids?: (string | undefined) | undefined;
	readonly Scte35Control?: (string | undefined) | undefined;
	readonly Scte35Pid?: (string | undefined) | undefined;
	readonly SegmentationMarkers?: (string | undefined) | undefined;
	readonly SegmentationStyle?: (string | undefined) | undefined;
	readonly SegmentationTime?: (number | undefined) | undefined;
	readonly TimedMetadataBehavior?: (string | undefined) | undefined;
	readonly TimedMetadataPid?: (string | undefined) | undefined;
	readonly TransportStreamId?: (number | undefined) | undefined;
	readonly VideoPid?: (string | undefined) | undefined;
}
export interface M3u8Settings {
	readonly AudioFramesPerPes?: (number | undefined) | undefined;
	readonly AudioPids?: (string | undefined) | undefined;
	readonly EcmPid?: (string | undefined) | undefined;
	readonly NielsenId3Behavior?: (string | undefined) | undefined;
	readonly PatInterval?: (number | undefined) | undefined;
	readonly PcrControl?: (string | undefined) | undefined;
	readonly PcrPeriod?: (number | undefined) | undefined;
	readonly PcrPid?: (string | undefined) | undefined;
	readonly PmtInterval?: (number | undefined) | undefined;
	readonly PmtPid?: (string | undefined) | undefined;
	readonly ProgramNum?: (number | undefined) | undefined;
	readonly Scte35Behavior?: (string | undefined) | undefined;
	readonly Scte35Pid?: (string | undefined) | undefined;
	readonly TimedMetadataBehavior?: (string | undefined) | undefined;
	readonly TimedMetadataPid?: (string | undefined) | undefined;
	readonly TransportStreamId?: (number | undefined) | undefined;
	readonly VideoPid?: (string | undefined) | undefined;
}
export interface MediaPackageGroupSettings {
	readonly Destination?: (OutputLocationRef | undefined) | undefined;
}
export interface MediaPackageOutputDestinationSettings {
	readonly ChannelId?: (string | undefined) | undefined;
}
export interface MediaPackageOutputSettings {}
export interface MotionGraphicsConfiguration {
	readonly MotionGraphicsInsertion?: (string | undefined) | undefined;
	readonly MotionGraphicsSettings?: (MotionGraphicsSettings | undefined) | undefined;
}
export interface MotionGraphicsSettings {
	readonly HtmlMotionGraphicsSettings?: (HtmlMotionGraphicsSettings | undefined) | undefined;
}
export interface Mp2Settings {
	readonly Bitrate?: (number | undefined) | undefined;
	readonly CodingMode?: (string | undefined) | undefined;
	readonly SampleRate?: (number | undefined) | undefined;
}
export interface Mpeg2FilterSettings {
	readonly TemporalFilterSettings?: (TemporalFilterSettings | undefined) | undefined;
}
export interface Mpeg2Settings {
	readonly AdaptiveQuantization?: (string | undefined) | undefined;
	readonly AfdSignaling?: (string | undefined) | undefined;
	readonly ColorMetadata?: (string | undefined) | undefined;
	readonly ColorSpace?: (string | undefined) | undefined;
	readonly DisplayAspectRatio?: (string | undefined) | undefined;
	readonly FilterSettings?: (Mpeg2FilterSettings | undefined) | undefined;
	readonly FixedAfd?: (string | undefined) | undefined;
	readonly FramerateDenominator?: (number | undefined) | undefined;
	readonly FramerateNumerator?: (number | undefined) | undefined;
	readonly GopClosedCadence?: (number | undefined) | undefined;
	readonly GopNumBFrames?: (number | undefined) | undefined;
	readonly GopSize?: (number | undefined) | undefined;
	readonly GopSizeUnits?: (string | undefined) | undefined;
	readonly ScanType?: (string | undefined) | undefined;
	readonly SubgopLength?: (string | undefined) | undefined;
	readonly TimecodeInsertion?: (string | undefined) | undefined;
}
export interface MsSmoothGroupSettings {
	readonly AcquisitionPointId?: (string | undefined) | undefined;
	readonly AudioOnlyTimecodeControl?: (string | undefined) | undefined;
	readonly CertificateMode?: (string | undefined) | undefined;
	readonly ConnectionRetryInterval?: (number | undefined) | undefined;
	readonly Destination?: (OutputLocationRef | undefined) | undefined;
	readonly EventId?: (string | undefined) | undefined;
	readonly EventIdMode?: (string | undefined) | undefined;
	readonly EventStopBehavior?: (string | undefined) | undefined;
	readonly FilecacheDuration?: (number | undefined) | undefined;
	readonly FragmentLength?: (number | undefined) | undefined;
	readonly InputLossAction?: (string | undefined) | undefined;
	readonly NumRetries?: (number | undefined) | undefined;
	readonly RestartDelay?: (number | undefined) | undefined;
	readonly SegmentationMode?: (string | undefined) | undefined;
	readonly SendDelayMs?: (number | undefined) | undefined;
	readonly SparseTrackType?: (string | undefined) | undefined;
	readonly StreamManifestBehavior?: (string | undefined) | undefined;
	readonly TimestampOffset?: (string | undefined) | undefined;
	readonly TimestampOffsetMode?: (string | undefined) | undefined;
}
export interface MsSmoothOutputSettings {
	readonly H265PackagingType?: (string | undefined) | undefined;
	readonly NameModifier?: (string | undefined) | undefined;
}
export interface MultiplexGroupSettings {}
export interface MultiplexOutputSettings {
	readonly Destination?: (OutputLocationRef | undefined) | undefined;
}
export interface MultiplexProgramChannelDestinationSettings {
	readonly MultiplexId?: (string | undefined) | undefined;
	readonly ProgramName?: (string | undefined) | undefined;
}
export interface NetworkInputSettings {
	readonly HlsInputSettings?: (HlsInputSettings | undefined) | undefined;
	readonly ServerValidation?: (string | undefined) | undefined;
}
export interface NielsenCBET {
	readonly CbetCheckDigitString?: (string | undefined) | undefined;
	readonly CbetStepaside?: (string | undefined) | undefined;
	readonly Csid?: (string | undefined) | undefined;
}
export interface NielsenConfiguration {
	readonly DistributorId?: (string | undefined) | undefined;
	readonly NielsenPcmToId3Tagging?: (string | undefined) | undefined;
}
export interface NielsenNaesIiNw {
	readonly CheckDigitString?: (string | undefined) | undefined;
	readonly Sid?: (number | undefined) | undefined;
}
export interface NielsenWatermarksSettings {
	readonly NielsenCbetSettings?: (NielsenCBET | undefined) | undefined;
	readonly NielsenDistributionType?: (string | undefined) | undefined;
	readonly NielsenNaesIiNwSettings?: (NielsenNaesIiNw | undefined) | undefined;
}
export interface Output {
	readonly AudioDescriptionNames?: (string[] | undefined) | undefined;
	readonly CaptionDescriptionNames?: (string[] | undefined) | undefined;
	readonly OutputName?: (string | undefined) | undefined;
	readonly OutputSettings?: (OutputSettings | undefined) | undefined;
	readonly VideoDescriptionName?: (string | undefined) | undefined;
}
export interface OutputDestination {
	readonly Id?: (string | undefined) | undefined;
	readonly MediaPackageSettings?: (MediaPackageOutputDestinationSettings[] | undefined) | undefined;
	readonly MultiplexSettings?: (MultiplexProgramChannelDestinationSettings | undefined) | undefined;
	readonly Settings?: (OutputDestinationSettings[] | undefined) | undefined;
}
export interface OutputDestinationSettings {
	readonly PasswordParam?: (string | undefined) | undefined;
	readonly StreamName?: (string | undefined) | undefined;
	readonly Url?: (string | undefined) | undefined;
	readonly Username?: (string | undefined) | undefined;
}
export interface OutputGroup {
	readonly Name?: (string | undefined) | undefined;
	readonly OutputGroupSettings?: (OutputGroupSettings | undefined) | undefined;
	readonly Outputs?: (Output[] | undefined) | undefined;
}
export interface OutputGroupSettings {
	readonly ArchiveGroupSettings?: (ArchiveGroupSettings | undefined) | undefined;
	readonly FrameCaptureGroupSettings?: (FrameCaptureGroupSettings | undefined) | undefined;
	readonly HlsGroupSettings?: (HlsGroupSettings | undefined) | undefined;
	readonly MediaPackageGroupSettings?: (MediaPackageGroupSettings | undefined) | undefined;
	readonly MsSmoothGroupSettings?: (MsSmoothGroupSettings | undefined) | undefined;
	readonly MultiplexGroupSettings?: (MultiplexGroupSettings | undefined) | undefined;
	readonly RtmpGroupSettings?: (RtmpGroupSettings | undefined) | undefined;
	readonly UdpGroupSettings?: (UdpGroupSettings | undefined) | undefined;
}
export interface OutputLocationRef {
	readonly DestinationRefId?: (string | undefined) | undefined;
}
export interface OutputSettings {
	readonly ArchiveOutputSettings?: (ArchiveOutputSettings | undefined) | undefined;
	readonly FrameCaptureOutputSettings?: (FrameCaptureOutputSettings | undefined) | undefined;
	readonly HlsOutputSettings?: (HlsOutputSettings | undefined) | undefined;
	readonly MediaPackageOutputSettings?: (MediaPackageOutputSettings | undefined) | undefined;
	readonly MsSmoothOutputSettings?: (MsSmoothOutputSettings | undefined) | undefined;
	readonly MultiplexOutputSettings?: (MultiplexOutputSettings | undefined) | undefined;
	readonly RtmpOutputSettings?: (RtmpOutputSettings | undefined) | undefined;
	readonly UdpOutputSettings?: (UdpOutputSettings | undefined) | undefined;
}
export interface PassThroughSettings {}
export interface RawSettings {}
export interface Rec601Settings {}
export interface Rec709Settings {}
export interface RemixSettings {
	readonly ChannelMappings?: (AudioChannelMapping[] | undefined) | undefined;
	readonly ChannelsIn?: (number | undefined) | undefined;
	readonly ChannelsOut?: (number | undefined) | undefined;
}
export interface RtmpCaptionInfoDestinationSettings {}
export interface RtmpGroupSettings {
	readonly AdMarkers?: (string[] | undefined) | undefined;
	readonly AuthenticationScheme?: (string | undefined) | undefined;
	readonly CacheFullBehavior?: (string | undefined) | undefined;
	readonly CacheLength?: (number | undefined) | undefined;
	readonly CaptionData?: (string | undefined) | undefined;
	readonly InputLossAction?: (string | undefined) | undefined;
	readonly RestartDelay?: (number | undefined) | undefined;
}
export interface RtmpOutputSettings {
	readonly CertificateMode?: (string | undefined) | undefined;
	readonly ConnectionRetryInterval?: (number | undefined) | undefined;
	readonly Destination?: (OutputLocationRef | undefined) | undefined;
	readonly NumRetries?: (number | undefined) | undefined;
}
export interface Scte20PlusEmbeddedDestinationSettings {}
export interface Scte20SourceSettings {
	readonly Convert608To708?: (string | undefined) | undefined;
	readonly Source608ChannelNumber?: (number | undefined) | undefined;
}
export interface Scte27DestinationSettings {}
export interface Scte27SourceSettings {
	readonly OcrLanguage?: (string | undefined) | undefined;
	readonly Pid?: (number | undefined) | undefined;
}
export interface Scte35SpliceInsert {
	readonly AdAvailOffset?: (number | undefined) | undefined;
	readonly NoRegionalBlackoutFlag?: (string | undefined) | undefined;
	readonly WebDeliveryAllowedFlag?: (string | undefined) | undefined;
}
export interface Scte35TimeSignalApos {
	readonly AdAvailOffset?: (number | undefined) | undefined;
	readonly NoRegionalBlackoutFlag?: (string | undefined) | undefined;
	readonly WebDeliveryAllowedFlag?: (string | undefined) | undefined;
}
export interface SmpteTtDestinationSettings {}
export interface StandardHlsSettings {
	readonly AudioRenditionSets?: (string | undefined) | undefined;
	readonly M3u8Settings?: (M3u8Settings | undefined) | undefined;
}
export interface StaticKeySettings {
	readonly KeyProviderServer?: (InputLocation | undefined) | undefined;
	readonly StaticKeyValue?: (string | undefined) | undefined;
}
export interface TeletextDestinationSettings {}
export interface TeletextSourceSettings {
	readonly OutputRectangle?: (CaptionRectangle | undefined) | undefined;
	readonly PageNumber?: (string | undefined) | undefined;
}
export interface TemporalFilterSettings {
	readonly PostFilterSharpening?: (string | undefined) | undefined;
	readonly Strength?: (string | undefined) | undefined;
}
export interface TimecodeConfig {
	readonly Source?: (string | undefined) | undefined;
	readonly SyncThreshold?: (number | undefined) | undefined;
}
export interface TtmlDestinationSettings {
	readonly StyleControl?: (string | undefined) | undefined;
}
export interface UdpContainerSettings {
	readonly M2tsSettings?: (M2tsSettings | undefined) | undefined;
}
export interface UdpGroupSettings {
	readonly InputLossAction?: (string | undefined) | undefined;
	readonly TimedMetadataId3Frame?: (string | undefined) | undefined;
	readonly TimedMetadataId3Period?: (number | undefined) | undefined;
}
export interface UdpOutputSettings {
	readonly BufferMsec?: (number | undefined) | undefined;
	readonly ContainerSettings?: (UdpContainerSettings | undefined) | undefined;
	readonly Destination?: (OutputLocationRef | undefined) | undefined;
	readonly FecOutputSettings?: (FecOutputSettings | undefined) | undefined;
}
export interface VideoBlackFailoverSettings {
	readonly BlackDetectThreshold?: (number | undefined) | undefined;
	readonly VideoBlackThresholdMsec?: (number | undefined) | undefined;
}
export interface VideoCodecSettings {
	readonly FrameCaptureSettings?: (FrameCaptureSettings | undefined) | undefined;
	readonly H264Settings?: (H264Settings | undefined) | undefined;
	readonly H265Settings?: (H265Settings | undefined) | undefined;
	readonly Mpeg2Settings?: (Mpeg2Settings | undefined) | undefined;
}
export interface VideoDescription {
	readonly CodecSettings?: (VideoCodecSettings | undefined) | undefined;
	readonly Height?: (number | undefined) | undefined;
	readonly Name?: (string | undefined) | undefined;
	readonly RespondToAfd?: (string | undefined) | undefined;
	readonly ScalingBehavior?: (string | undefined) | undefined;
	readonly Sharpness?: (number | undefined) | undefined;
	readonly Width?: (number | undefined) | undefined;
}
export interface VideoSelector {
	readonly ColorSpace?: (string | undefined) | undefined;
	readonly ColorSpaceSettings?: (VideoSelectorColorSpaceSettings | undefined) | undefined;
	readonly ColorSpaceUsage?: (string | undefined) | undefined;
	readonly SelectorSettings?: (VideoSelectorSettings | undefined) | undefined;
}
export interface VideoSelectorColorSpaceSettings {
	readonly Hdr10Settings?: (Hdr10Settings | undefined) | undefined;
}
export interface VideoSelectorPid {
	readonly Pid?: (number | undefined) | undefined;
}
export interface VideoSelectorProgramId {
	readonly ProgramId?: (number | undefined) | undefined;
}
export interface VideoSelectorSettings {
	readonly VideoSelectorPid?: (VideoSelectorPid | undefined) | undefined;
	readonly VideoSelectorProgramId?: (VideoSelectorProgramId | undefined) | undefined;
}
export interface VpcOutputSettings {
	readonly PublicAddressAllocationIds?: (string[] | undefined) | undefined;
	readonly SecurityGroupIds?: (string[] | undefined) | undefined;
	readonly SubnetIds?: (string[] | undefined) | undefined;
}
export interface WavSettings {
	readonly BitDepth?: (number | undefined) | undefined;
	readonly CodingMode?: (string | undefined) | undefined;
	readonly SampleRate?: (number | undefined) | undefined;
}
export interface WebvttDestinationSettings {
	readonly StyleControl?: (string | undefined) | undefined;
}
export interface InputDestinationRequest {
	readonly StreamName?: (string | undefined) | undefined;
}
export interface InputDeviceRequest {
	readonly Id?: (string | undefined) | undefined;
}
export interface InputDeviceSettings {
	readonly Id?: (string | undefined) | undefined;
}
export interface InputSourceRequest {
	readonly PasswordParam?: (string | undefined) | undefined;
	readonly Url?: (string | undefined) | undefined;
	readonly Username?: (string | undefined) | undefined;
}
export interface InputVpcRequest {
	readonly SecurityGroupIds?: (string[] | undefined) | undefined;
	readonly SubnetIds?: (string[] | undefined) | undefined;
}
export interface MediaConnectFlowRequest {
	readonly FlowArn?: (string | undefined) | undefined;
}
export interface InputWhitelistRuleCidr {
	readonly Cidr?: (string | undefined) | undefined;
}
export default {
	Channel: Channel,
	Input: Input,
	InputSecurityGroup: InputSecurityGroup,
};

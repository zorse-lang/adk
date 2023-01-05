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
	readonly CdiInputSpecification?: CdiInputSpecification | undefined;
	readonly ChannelClass?: string | undefined;
	readonly Destinations?: OutputDestination[] | undefined;
	readonly EncoderSettings?: EncoderSettings | undefined;
	readonly InputAttachments?: InputAttachment[] | undefined;
	readonly InputSpecification?: InputSpecification | undefined;
	readonly LogLevel?: string | undefined;
	readonly Name?: string | undefined;
	readonly RoleArn?: string | undefined;
	readonly Tags?: any | undefined;
	readonly Vpc?: VpcOutputSettings | undefined;
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
	readonly Destinations?: InputDestinationRequest[] | string[];
	readonly InputDevices?: InputDeviceSettings[] | undefined;
	readonly InputSecurityGroups?: string[] | undefined;
	readonly MediaConnectFlows?: MediaConnectFlowRequest[] | undefined;
	readonly Name?: string | undefined;
	readonly RoleArn?: string | undefined;
	readonly Sources?: InputSourceRequest[] | string[];
	readonly Tags?: any | undefined;
	readonly Type?: string | undefined;
	readonly Vpc?: InputVpcRequest | undefined;
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
	readonly Tags?: any | undefined;
	readonly WhitelistRules?: InputWhitelistRuleCidr[] | undefined;
	readonly LogicalId: string;
}
export interface AacSettings {
	readonly Bitrate?: number | undefined;
	readonly CodingMode?: string | undefined;
	readonly InputType?: string | undefined;
	readonly Profile?: string | undefined;
	readonly RateControlMode?: string | undefined;
	readonly RawFormat?: string | undefined;
	readonly SampleRate?: number | undefined;
	readonly Spec?: string | undefined;
	readonly VbrQuality?: string | undefined;
}
export interface Ac3Settings {
	readonly Bitrate?: number | undefined;
	readonly BitstreamMode?: string | undefined;
	readonly CodingMode?: string | undefined;
	readonly Dialnorm?: number | undefined;
	readonly DrcProfile?: string | undefined;
	readonly LfeFilter?: string | undefined;
	readonly MetadataControl?: string | undefined;
}
export interface AncillarySourceSettings {
	readonly SourceAncillaryChannelNumber?: number | undefined;
}
export interface ArchiveCdnSettings {
	readonly ArchiveS3Settings?: ArchiveS3Settings | undefined;
}
export interface ArchiveContainerSettings {
	readonly M2tsSettings?: M2tsSettings | undefined;
	readonly RawSettings?: RawSettings | undefined;
}
export interface ArchiveGroupSettings {
	readonly ArchiveCdnSettings?: ArchiveCdnSettings | undefined;
	readonly Destination?: OutputLocationRef | undefined;
	readonly RolloverInterval?: number | undefined;
}
export interface ArchiveOutputSettings {
	readonly ContainerSettings?: ArchiveContainerSettings | undefined;
	readonly Extension?: string | undefined;
	readonly NameModifier?: string | undefined;
}
export interface ArchiveS3Settings {
	readonly CannedAcl?: string | undefined;
}
export interface AribDestinationSettings {}
export interface AribSourceSettings {}
export interface AudioChannelMapping {
	readonly InputChannelLevels?: InputChannelLevel[] | undefined;
	readonly OutputChannel?: number | undefined;
}
export interface AudioCodecSettings {
	readonly AacSettings?: AacSettings | undefined;
	readonly Ac3Settings?: Ac3Settings | undefined;
	readonly Eac3Settings?: Eac3Settings | undefined;
	readonly Mp2Settings?: Mp2Settings | undefined;
	readonly PassThroughSettings?: PassThroughSettings | undefined;
	readonly WavSettings?: WavSettings | undefined;
}
export interface AudioDescription {
	readonly AudioNormalizationSettings?: AudioNormalizationSettings | undefined;
	readonly AudioSelectorName?: string | undefined;
	readonly AudioType?: string | undefined;
	readonly AudioTypeControl?: string | undefined;
	readonly AudioWatermarkingSettings?: AudioWatermarkSettings | undefined;
	readonly CodecSettings?: AudioCodecSettings | undefined;
	readonly LanguageCode?: string | undefined;
	readonly LanguageCodeControl?: string | undefined;
	readonly Name?: string | undefined;
	readonly RemixSettings?: RemixSettings | undefined;
	readonly StreamName?: string | undefined;
}
export interface AudioHlsRenditionSelection {
	readonly GroupId?: string | undefined;
	readonly Name?: string | undefined;
}
export interface AudioLanguageSelection {
	readonly LanguageCode?: string | undefined;
	readonly LanguageSelectionPolicy?: string | undefined;
}
export interface AudioNormalizationSettings {
	readonly Algorithm?: string | undefined;
	readonly AlgorithmControl?: string | undefined;
	readonly TargetLkfs?: number | undefined;
}
export interface AudioOnlyHlsSettings {
	readonly AudioGroupId?: string | undefined;
	readonly AudioOnlyImage?: InputLocation | undefined;
	readonly AudioTrackType?: string | undefined;
	readonly SegmentType?: string | undefined;
}
export interface AudioPidSelection {
	readonly Pid?: number | undefined;
}
export interface AudioSelector {
	readonly Name?: string | undefined;
	readonly SelectorSettings?: AudioSelectorSettings | undefined;
}
export interface AudioSelectorSettings {
	readonly AudioHlsRenditionSelection?: AudioHlsRenditionSelection | undefined;
	readonly AudioLanguageSelection?: AudioLanguageSelection | undefined;
	readonly AudioPidSelection?: AudioPidSelection | undefined;
	readonly AudioTrackSelection?: AudioTrackSelection | undefined;
}
export interface AudioSilenceFailoverSettings {
	readonly AudioSelectorName?: string | undefined;
	readonly AudioSilenceThresholdMsec?: number | undefined;
}
export interface AudioTrack {
	readonly Track?: number | undefined;
}
export interface AudioTrackSelection {
	readonly Tracks?: AudioTrack[] | undefined;
}
export interface AudioWatermarkSettings {
	readonly NielsenWatermarksSettings?: NielsenWatermarksSettings | undefined;
}
export interface AutomaticInputFailoverSettings {
	readonly ErrorClearTimeMsec?: number | undefined;
	readonly FailoverConditions?: FailoverCondition[] | undefined;
	readonly InputPreference?: string | undefined;
	readonly SecondaryInputId?: string | undefined;
}
export interface AvailBlanking {
	readonly AvailBlankingImage?: InputLocation | undefined;
	readonly State?: string | undefined;
}
export interface AvailConfiguration {
	readonly AvailSettings?: AvailSettings | undefined;
}
export interface AvailSettings {
	readonly Scte35SpliceInsert?: Scte35SpliceInsert | undefined;
	readonly Scte35TimeSignalApos?: Scte35TimeSignalApos | undefined;
}
export interface BlackoutSlate {
	readonly BlackoutSlateImage?: InputLocation | undefined;
	readonly NetworkEndBlackout?: string | undefined;
	readonly NetworkEndBlackoutImage?: InputLocation | undefined;
	readonly NetworkId?: string | undefined;
	readonly State?: string | undefined;
}
export interface BurnInDestinationSettings {
	readonly Alignment?: string | undefined;
	readonly BackgroundColor?: string | undefined;
	readonly BackgroundOpacity?: number | undefined;
	readonly Font?: InputLocation | undefined;
	readonly FontColor?: string | undefined;
	readonly FontOpacity?: number | undefined;
	readonly FontResolution?: number | undefined;
	readonly FontSize?: string | undefined;
	readonly OutlineColor?: string | undefined;
	readonly OutlineSize?: number | undefined;
	readonly ShadowColor?: string | undefined;
	readonly ShadowOpacity?: number | undefined;
	readonly ShadowXOffset?: number | undefined;
	readonly ShadowYOffset?: number | undefined;
	readonly TeletextGridControl?: string | undefined;
	readonly XPosition?: number | undefined;
	readonly YPosition?: number | undefined;
}
export interface CaptionDescription {
	readonly CaptionSelectorName?: string | undefined;
	readonly DestinationSettings?: CaptionDestinationSettings | undefined;
	readonly LanguageCode?: string | undefined;
	readonly LanguageDescription?: string | undefined;
	readonly Name?: string | undefined;
}
export interface CaptionDestinationSettings {
	readonly AribDestinationSettings?: AribDestinationSettings | undefined;
	readonly BurnInDestinationSettings?: BurnInDestinationSettings | undefined;
	readonly DvbSubDestinationSettings?: DvbSubDestinationSettings | undefined;
	readonly EbuTtDDestinationSettings?: EbuTtDDestinationSettings | undefined;
	readonly EmbeddedDestinationSettings?: EmbeddedDestinationSettings | undefined;
	readonly EmbeddedPlusScte20DestinationSettings?: EmbeddedPlusScte20DestinationSettings | undefined;
	readonly RtmpCaptionInfoDestinationSettings?: RtmpCaptionInfoDestinationSettings | undefined;
	readonly Scte20PlusEmbeddedDestinationSettings?: Scte20PlusEmbeddedDestinationSettings | undefined;
	readonly Scte27DestinationSettings?: Scte27DestinationSettings | undefined;
	readonly SmpteTtDestinationSettings?: SmpteTtDestinationSettings | undefined;
	readonly TeletextDestinationSettings?: TeletextDestinationSettings | undefined;
	readonly TtmlDestinationSettings?: TtmlDestinationSettings | undefined;
	readonly WebvttDestinationSettings?: WebvttDestinationSettings | undefined;
}
export interface CaptionLanguageMapping {
	readonly CaptionChannel?: number | undefined;
	readonly LanguageCode?: string | undefined;
	readonly LanguageDescription?: string | undefined;
}
export interface CaptionRectangle {
	readonly Height?: number | undefined;
	readonly LeftOffset?: number | undefined;
	readonly TopOffset?: number | undefined;
	readonly Width?: number | undefined;
}
export interface CaptionSelector {
	readonly LanguageCode?: string | undefined;
	readonly Name?: string | undefined;
	readonly SelectorSettings?: CaptionSelectorSettings | undefined;
}
export interface CaptionSelectorSettings {
	readonly AncillarySourceSettings?: AncillarySourceSettings | undefined;
	readonly AribSourceSettings?: AribSourceSettings | undefined;
	readonly DvbSubSourceSettings?: DvbSubSourceSettings | undefined;
	readonly EmbeddedSourceSettings?: EmbeddedSourceSettings | undefined;
	readonly Scte20SourceSettings?: Scte20SourceSettings | undefined;
	readonly Scte27SourceSettings?: Scte27SourceSettings | undefined;
	readonly TeletextSourceSettings?: TeletextSourceSettings | undefined;
}
export interface CdiInputSpecification {
	readonly Resolution?: string | undefined;
}
export interface ColorSpacePassthroughSettings {}
export interface DvbNitSettings {
	readonly NetworkId?: number | undefined;
	readonly NetworkName?: string | undefined;
	readonly RepInterval?: number | undefined;
}
export interface DvbSdtSettings {
	readonly OutputSdt?: string | undefined;
	readonly RepInterval?: number | undefined;
	readonly ServiceName?: string | undefined;
	readonly ServiceProviderName?: string | undefined;
}
export interface DvbSubDestinationSettings {
	readonly Alignment?: string | undefined;
	readonly BackgroundColor?: string | undefined;
	readonly BackgroundOpacity?: number | undefined;
	readonly Font?: InputLocation | undefined;
	readonly FontColor?: string | undefined;
	readonly FontOpacity?: number | undefined;
	readonly FontResolution?: number | undefined;
	readonly FontSize?: string | undefined;
	readonly OutlineColor?: string | undefined;
	readonly OutlineSize?: number | undefined;
	readonly ShadowColor?: string | undefined;
	readonly ShadowOpacity?: number | undefined;
	readonly ShadowXOffset?: number | undefined;
	readonly ShadowYOffset?: number | undefined;
	readonly TeletextGridControl?: string | undefined;
	readonly XPosition?: number | undefined;
	readonly YPosition?: number | undefined;
}
export interface DvbSubSourceSettings {
	readonly OcrLanguage?: string | undefined;
	readonly Pid?: number | undefined;
}
export interface DvbTdtSettings {
	readonly RepInterval?: number | undefined;
}
export interface Eac3Settings {
	readonly AttenuationControl?: string | undefined;
	readonly Bitrate?: number | undefined;
	readonly BitstreamMode?: string | undefined;
	readonly CodingMode?: string | undefined;
	readonly DcFilter?: string | undefined;
	readonly Dialnorm?: number | undefined;
	readonly DrcLine?: string | undefined;
	readonly DrcRf?: string | undefined;
	readonly LfeControl?: string | undefined;
	readonly LfeFilter?: string | undefined;
	readonly LoRoCenterMixLevel?: number | undefined;
	readonly LoRoSurroundMixLevel?: number | undefined;
	readonly LtRtCenterMixLevel?: number | undefined;
	readonly LtRtSurroundMixLevel?: number | undefined;
	readonly MetadataControl?: string | undefined;
	readonly PassthroughControl?: string | undefined;
	readonly PhaseControl?: string | undefined;
	readonly StereoDownmix?: string | undefined;
	readonly SurroundExMode?: string | undefined;
	readonly SurroundMode?: string | undefined;
}
export interface EbuTtDDestinationSettings {
	readonly CopyrightHolder?: string | undefined;
	readonly FillLineGap?: string | undefined;
	readonly FontFamily?: string | undefined;
	readonly StyleControl?: string | undefined;
}
export interface EmbeddedDestinationSettings {}
export interface EmbeddedPlusScte20DestinationSettings {}
export interface EmbeddedSourceSettings {
	readonly Convert608To708?: string | undefined;
	readonly Scte20Detection?: string | undefined;
	readonly Source608ChannelNumber?: number | undefined;
	readonly Source608TrackNumber?: number | undefined;
}
export interface EncoderSettings {
	readonly AudioDescriptions?: AudioDescription[] | undefined;
	readonly AvailBlanking?: AvailBlanking | undefined;
	readonly AvailConfiguration?: AvailConfiguration | undefined;
	readonly BlackoutSlate?: BlackoutSlate | undefined;
	readonly CaptionDescriptions?: CaptionDescription[] | undefined;
	readonly FeatureActivations?: FeatureActivations | undefined;
	readonly GlobalConfiguration?: GlobalConfiguration | undefined;
	readonly MotionGraphicsConfiguration?: MotionGraphicsConfiguration | undefined;
	readonly NielsenConfiguration?: NielsenConfiguration | undefined;
	readonly OutputGroups?: OutputGroup[] | undefined;
	readonly TimecodeConfig?: TimecodeConfig | undefined;
	readonly VideoDescriptions?: VideoDescription[] | undefined;
}
export interface FailoverCondition {
	readonly FailoverConditionSettings?: FailoverConditionSettings | undefined;
}
export interface FailoverConditionSettings {
	readonly AudioSilenceSettings?: AudioSilenceFailoverSettings | undefined;
	readonly InputLossSettings?: InputLossFailoverSettings | undefined;
	readonly VideoBlackSettings?: VideoBlackFailoverSettings | undefined;
}
export interface FeatureActivations {
	readonly InputPrepareScheduleActions?: string | undefined;
}
export interface FecOutputSettings {
	readonly ColumnDepth?: number | undefined;
	readonly IncludeFec?: string | undefined;
	readonly RowLength?: number | undefined;
}
export interface Fmp4HlsSettings {
	readonly AudioRenditionSets?: string | undefined;
	readonly NielsenId3Behavior?: string | undefined;
	readonly TimedMetadataBehavior?: string | undefined;
}
export interface FrameCaptureCdnSettings {
	readonly FrameCaptureS3Settings?: FrameCaptureS3Settings | undefined;
}
export interface FrameCaptureGroupSettings {
	readonly Destination?: OutputLocationRef | undefined;
	readonly FrameCaptureCdnSettings?: FrameCaptureCdnSettings | undefined;
}
export interface FrameCaptureHlsSettings {}
export interface FrameCaptureOutputSettings {
	readonly NameModifier?: string | undefined;
}
export interface FrameCaptureS3Settings {
	readonly CannedAcl?: string | undefined;
}
export interface FrameCaptureSettings {
	readonly CaptureInterval?: number | undefined;
	readonly CaptureIntervalUnits?: string | undefined;
}
export interface GlobalConfiguration {
	readonly InitialAudioGain?: number | undefined;
	readonly InputEndAction?: string | undefined;
	readonly InputLossBehavior?: InputLossBehavior | undefined;
	readonly OutputLockingMode?: string | undefined;
	readonly OutputTimingSource?: string | undefined;
	readonly SupportLowFramerateInputs?: string | undefined;
}
export interface H264ColorSpaceSettings {
	readonly ColorSpacePassthroughSettings?: ColorSpacePassthroughSettings | undefined;
	readonly Rec601Settings?: Rec601Settings | undefined;
	readonly Rec709Settings?: Rec709Settings | undefined;
}
export interface H264FilterSettings {
	readonly TemporalFilterSettings?: TemporalFilterSettings | undefined;
}
export interface H264Settings {
	readonly AdaptiveQuantization?: string | undefined;
	readonly AfdSignaling?: string | undefined;
	readonly Bitrate?: number | undefined;
	readonly BufFillPct?: number | undefined;
	readonly BufSize?: number | undefined;
	readonly ColorMetadata?: string | undefined;
	readonly ColorSpaceSettings?: H264ColorSpaceSettings | undefined;
	readonly EntropyEncoding?: string | undefined;
	readonly FilterSettings?: H264FilterSettings | undefined;
	readonly FixedAfd?: string | undefined;
	readonly FlickerAq?: string | undefined;
	readonly ForceFieldPictures?: string | undefined;
	readonly FramerateControl?: string | undefined;
	readonly FramerateDenominator?: number | undefined;
	readonly FramerateNumerator?: number | undefined;
	readonly GopBReference?: string | undefined;
	readonly GopClosedCadence?: number | undefined;
	readonly GopNumBFrames?: number | undefined;
	readonly GopSize?: number | undefined;
	readonly GopSizeUnits?: string | undefined;
	readonly Level?: string | undefined;
	readonly LookAheadRateControl?: string | undefined;
	readonly MaxBitrate?: number | undefined;
	readonly MinIInterval?: number | undefined;
	readonly NumRefFrames?: number | undefined;
	readonly ParControl?: string | undefined;
	readonly ParDenominator?: number | undefined;
	readonly ParNumerator?: number | undefined;
	readonly Profile?: string | undefined;
	readonly QualityLevel?: string | undefined;
	readonly QvbrQualityLevel?: number | undefined;
	readonly RateControlMode?: string | undefined;
	readonly ScanType?: string | undefined;
	readonly SceneChangeDetect?: string | undefined;
	readonly Slices?: number | undefined;
	readonly Softness?: number | undefined;
	readonly SpatialAq?: string | undefined;
	readonly SubgopLength?: string | undefined;
	readonly Syntax?: string | undefined;
	readonly TemporalAq?: string | undefined;
	readonly TimecodeInsertion?: string | undefined;
}
export interface H265ColorSpaceSettings {
	readonly ColorSpacePassthroughSettings?: ColorSpacePassthroughSettings | undefined;
	readonly Hdr10Settings?: Hdr10Settings | undefined;
	readonly Rec601Settings?: Rec601Settings | undefined;
	readonly Rec709Settings?: Rec709Settings | undefined;
}
export interface H265FilterSettings {
	readonly TemporalFilterSettings?: TemporalFilterSettings | undefined;
}
export interface H265Settings {
	readonly AdaptiveQuantization?: string | undefined;
	readonly AfdSignaling?: string | undefined;
	readonly AlternativeTransferFunction?: string | undefined;
	readonly Bitrate?: number | undefined;
	readonly BufSize?: number | undefined;
	readonly ColorMetadata?: string | undefined;
	readonly ColorSpaceSettings?: H265ColorSpaceSettings | undefined;
	readonly FilterSettings?: H265FilterSettings | undefined;
	readonly FixedAfd?: string | undefined;
	readonly FlickerAq?: string | undefined;
	readonly FramerateDenominator?: number | undefined;
	readonly FramerateNumerator?: number | undefined;
	readonly GopClosedCadence?: number | undefined;
	readonly GopSize?: number | undefined;
	readonly GopSizeUnits?: string | undefined;
	readonly Level?: string | undefined;
	readonly LookAheadRateControl?: string | undefined;
	readonly MaxBitrate?: number | undefined;
	readonly MinIInterval?: number | undefined;
	readonly ParDenominator?: number | undefined;
	readonly ParNumerator?: number | undefined;
	readonly Profile?: string | undefined;
	readonly QvbrQualityLevel?: number | undefined;
	readonly RateControlMode?: string | undefined;
	readonly ScanType?: string | undefined;
	readonly SceneChangeDetect?: string | undefined;
	readonly Slices?: number | undefined;
	readonly Tier?: string | undefined;
	readonly TimecodeInsertion?: string | undefined;
}
export interface Hdr10Settings {
	readonly MaxCll?: number | undefined;
	readonly MaxFall?: number | undefined;
}
export interface HlsAkamaiSettings {
	readonly ConnectionRetryInterval?: number | undefined;
	readonly FilecacheDuration?: number | undefined;
	readonly HttpTransferMode?: string | undefined;
	readonly NumRetries?: number | undefined;
	readonly RestartDelay?: number | undefined;
	readonly Salt?: string | undefined;
	readonly Token?: string | undefined;
}
export interface HlsBasicPutSettings {
	readonly ConnectionRetryInterval?: number | undefined;
	readonly FilecacheDuration?: number | undefined;
	readonly NumRetries?: number | undefined;
	readonly RestartDelay?: number | undefined;
}
export interface HlsCdnSettings {
	readonly HlsAkamaiSettings?: HlsAkamaiSettings | undefined;
	readonly HlsBasicPutSettings?: HlsBasicPutSettings | undefined;
	readonly HlsMediaStoreSettings?: HlsMediaStoreSettings | undefined;
	readonly HlsS3Settings?: HlsS3Settings | undefined;
	readonly HlsWebdavSettings?: HlsWebdavSettings | undefined;
}
export interface HlsGroupSettings {
	readonly AdMarkers?: string[] | undefined;
	readonly BaseUrlContent?: string | undefined;
	readonly BaseUrlContent1?: string | undefined;
	readonly BaseUrlManifest?: string | undefined;
	readonly BaseUrlManifest1?: string | undefined;
	readonly CaptionLanguageMappings?: CaptionLanguageMapping[] | undefined;
	readonly CaptionLanguageSetting?: string | undefined;
	readonly ClientCache?: string | undefined;
	readonly CodecSpecification?: string | undefined;
	readonly ConstantIv?: string | undefined;
	readonly Destination?: OutputLocationRef | undefined;
	readonly DirectoryStructure?: string | undefined;
	readonly DiscontinuityTags?: string | undefined;
	readonly EncryptionType?: string | undefined;
	readonly HlsCdnSettings?: HlsCdnSettings | undefined;
	readonly HlsId3SegmentTagging?: string | undefined;
	readonly IFrameOnlyPlaylists?: string | undefined;
	readonly IncompleteSegmentBehavior?: string | undefined;
	readonly IndexNSegments?: number | undefined;
	readonly InputLossAction?: string | undefined;
	readonly IvInManifest?: string | undefined;
	readonly IvSource?: string | undefined;
	readonly KeepSegments?: number | undefined;
	readonly KeyFormat?: string | undefined;
	readonly KeyFormatVersions?: string | undefined;
	readonly KeyProviderSettings?: KeyProviderSettings | undefined;
	readonly ManifestCompression?: string | undefined;
	readonly ManifestDurationFormat?: string | undefined;
	readonly MinSegmentLength?: number | undefined;
	readonly Mode?: string | undefined;
	readonly OutputSelection?: string | undefined;
	readonly ProgramDateTime?: string | undefined;
	readonly ProgramDateTimeClock?: string | undefined;
	readonly ProgramDateTimePeriod?: number | undefined;
	readonly RedundantManifest?: string | undefined;
	readonly SegmentLength?: number | undefined;
	readonly SegmentationMode?: string | undefined;
	readonly SegmentsPerSubdirectory?: number | undefined;
	readonly StreamInfResolution?: string | undefined;
	readonly TimedMetadataId3Frame?: string | undefined;
	readonly TimedMetadataId3Period?: number | undefined;
	readonly TimestampDeltaMilliseconds?: number | undefined;
	readonly TsFileMode?: string | undefined;
}
export interface HlsInputSettings {
	readonly Bandwidth?: number | undefined;
	readonly BufferSegments?: number | undefined;
	readonly Retries?: number | undefined;
	readonly RetryInterval?: number | undefined;
	readonly Scte35Source?: string | undefined;
}
export interface HlsMediaStoreSettings {
	readonly ConnectionRetryInterval?: number | undefined;
	readonly FilecacheDuration?: number | undefined;
	readonly MediaStoreStorageClass?: string | undefined;
	readonly NumRetries?: number | undefined;
	readonly RestartDelay?: number | undefined;
}
export interface HlsOutputSettings {
	readonly H265PackagingType?: string | undefined;
	readonly HlsSettings?: HlsSettings | undefined;
	readonly NameModifier?: string | undefined;
	readonly SegmentModifier?: string | undefined;
}
export interface HlsS3Settings {
	readonly CannedAcl?: string | undefined;
}
export interface HlsSettings {
	readonly AudioOnlyHlsSettings?: AudioOnlyHlsSettings | undefined;
	readonly Fmp4HlsSettings?: Fmp4HlsSettings | undefined;
	readonly FrameCaptureHlsSettings?: FrameCaptureHlsSettings | undefined;
	readonly StandardHlsSettings?: StandardHlsSettings | undefined;
}
export interface HlsWebdavSettings {
	readonly ConnectionRetryInterval?: number | undefined;
	readonly FilecacheDuration?: number | undefined;
	readonly HttpTransferMode?: string | undefined;
	readonly NumRetries?: number | undefined;
	readonly RestartDelay?: number | undefined;
}
export interface HtmlMotionGraphicsSettings {}
export interface InputAttachment {
	readonly AutomaticInputFailoverSettings?: AutomaticInputFailoverSettings | undefined;
	readonly InputAttachmentName?: string | undefined;
	readonly InputId?: string | undefined;
	readonly InputSettings?: InputSettings | undefined;
}
export interface InputChannelLevel {
	readonly Gain?: number | undefined;
	readonly InputChannel?: number | undefined;
}
export interface InputLocation {
	readonly PasswordParam?: string | undefined;
	readonly Uri?: string | undefined;
	readonly Username?: string | undefined;
}
export interface InputLossBehavior {
	readonly BlackFrameMsec?: number | undefined;
	readonly InputLossImageColor?: string | undefined;
	readonly InputLossImageSlate?: InputLocation | undefined;
	readonly InputLossImageType?: string | undefined;
	readonly RepeatFrameMsec?: number | undefined;
}
export interface InputLossFailoverSettings {
	readonly InputLossThresholdMsec?: number | undefined;
}
export interface InputSettings {
	readonly AudioSelectors?: AudioSelector[] | undefined;
	readonly CaptionSelectors?: CaptionSelector[] | undefined;
	readonly DeblockFilter?: string | undefined;
	readonly DenoiseFilter?: string | undefined;
	readonly FilterStrength?: number | undefined;
	readonly InputFilter?: string | undefined;
	readonly NetworkInputSettings?: NetworkInputSettings | undefined;
	readonly Scte35Pid?: number | undefined;
	readonly Smpte2038DataPreference?: string | undefined;
	readonly SourceEndBehavior?: string | undefined;
	readonly VideoSelector?: VideoSelector | undefined;
}
export interface InputSpecification {
	readonly Codec?: string | undefined;
	readonly MaximumBitrate?: string | undefined;
	readonly Resolution?: string | undefined;
}
export interface KeyProviderSettings {
	readonly StaticKeySettings?: StaticKeySettings | undefined;
}
export interface M2tsSettings {
	readonly AbsentInputAudioBehavior?: string | undefined;
	readonly Arib?: string | undefined;
	readonly AribCaptionsPid?: string | undefined;
	readonly AribCaptionsPidControl?: string | undefined;
	readonly AudioBufferModel?: string | undefined;
	readonly AudioFramesPerPes?: number | undefined;
	readonly AudioPids?: string | undefined;
	readonly AudioStreamType?: string | undefined;
	readonly Bitrate?: number | undefined;
	readonly BufferModel?: string | undefined;
	readonly CcDescriptor?: string | undefined;
	readonly DvbNitSettings?: DvbNitSettings | undefined;
	readonly DvbSdtSettings?: DvbSdtSettings | undefined;
	readonly DvbSubPids?: string | undefined;
	readonly DvbTdtSettings?: DvbTdtSettings | undefined;
	readonly DvbTeletextPid?: string | undefined;
	readonly Ebif?: string | undefined;
	readonly EbpAudioInterval?: string | undefined;
	readonly EbpLookaheadMs?: number | undefined;
	readonly EbpPlacement?: string | undefined;
	readonly EcmPid?: string | undefined;
	readonly EsRateInPes?: string | undefined;
	readonly EtvPlatformPid?: string | undefined;
	readonly EtvSignalPid?: string | undefined;
	readonly FragmentTime?: number | undefined;
	readonly Klv?: string | undefined;
	readonly KlvDataPids?: string | undefined;
	readonly NielsenId3Behavior?: string | undefined;
	readonly NullPacketBitrate?: number | undefined;
	readonly PatInterval?: number | undefined;
	readonly PcrControl?: string | undefined;
	readonly PcrPeriod?: number | undefined;
	readonly PcrPid?: string | undefined;
	readonly PmtInterval?: number | undefined;
	readonly PmtPid?: string | undefined;
	readonly ProgramNum?: number | undefined;
	readonly RateMode?: string | undefined;
	readonly Scte27Pids?: string | undefined;
	readonly Scte35Control?: string | undefined;
	readonly Scte35Pid?: string | undefined;
	readonly SegmentationMarkers?: string | undefined;
	readonly SegmentationStyle?: string | undefined;
	readonly SegmentationTime?: number | undefined;
	readonly TimedMetadataBehavior?: string | undefined;
	readonly TimedMetadataPid?: string | undefined;
	readonly TransportStreamId?: number | undefined;
	readonly VideoPid?: string | undefined;
}
export interface M3u8Settings {
	readonly AudioFramesPerPes?: number | undefined;
	readonly AudioPids?: string | undefined;
	readonly EcmPid?: string | undefined;
	readonly NielsenId3Behavior?: string | undefined;
	readonly PatInterval?: number | undefined;
	readonly PcrControl?: string | undefined;
	readonly PcrPeriod?: number | undefined;
	readonly PcrPid?: string | undefined;
	readonly PmtInterval?: number | undefined;
	readonly PmtPid?: string | undefined;
	readonly ProgramNum?: number | undefined;
	readonly Scte35Behavior?: string | undefined;
	readonly Scte35Pid?: string | undefined;
	readonly TimedMetadataBehavior?: string | undefined;
	readonly TimedMetadataPid?: string | undefined;
	readonly TransportStreamId?: number | undefined;
	readonly VideoPid?: string | undefined;
}
export interface MediaPackageGroupSettings {
	readonly Destination?: OutputLocationRef | undefined;
}
export interface MediaPackageOutputDestinationSettings {
	readonly ChannelId?: string | undefined;
}
export interface MediaPackageOutputSettings {}
export interface MotionGraphicsConfiguration {
	readonly MotionGraphicsInsertion?: string | undefined;
	readonly MotionGraphicsSettings?: MotionGraphicsSettings | undefined;
}
export interface MotionGraphicsSettings {
	readonly HtmlMotionGraphicsSettings?: HtmlMotionGraphicsSettings | undefined;
}
export interface Mp2Settings {
	readonly Bitrate?: number | undefined;
	readonly CodingMode?: string | undefined;
	readonly SampleRate?: number | undefined;
}
export interface Mpeg2FilterSettings {
	readonly TemporalFilterSettings?: TemporalFilterSettings | undefined;
}
export interface Mpeg2Settings {
	readonly AdaptiveQuantization?: string | undefined;
	readonly AfdSignaling?: string | undefined;
	readonly ColorMetadata?: string | undefined;
	readonly ColorSpace?: string | undefined;
	readonly DisplayAspectRatio?: string | undefined;
	readonly FilterSettings?: Mpeg2FilterSettings | undefined;
	readonly FixedAfd?: string | undefined;
	readonly FramerateDenominator?: number | undefined;
	readonly FramerateNumerator?: number | undefined;
	readonly GopClosedCadence?: number | undefined;
	readonly GopNumBFrames?: number | undefined;
	readonly GopSize?: number | undefined;
	readonly GopSizeUnits?: string | undefined;
	readonly ScanType?: string | undefined;
	readonly SubgopLength?: string | undefined;
	readonly TimecodeInsertion?: string | undefined;
}
export interface MsSmoothGroupSettings {
	readonly AcquisitionPointId?: string | undefined;
	readonly AudioOnlyTimecodeControl?: string | undefined;
	readonly CertificateMode?: string | undefined;
	readonly ConnectionRetryInterval?: number | undefined;
	readonly Destination?: OutputLocationRef | undefined;
	readonly EventId?: string | undefined;
	readonly EventIdMode?: string | undefined;
	readonly EventStopBehavior?: string | undefined;
	readonly FilecacheDuration?: number | undefined;
	readonly FragmentLength?: number | undefined;
	readonly InputLossAction?: string | undefined;
	readonly NumRetries?: number | undefined;
	readonly RestartDelay?: number | undefined;
	readonly SegmentationMode?: string | undefined;
	readonly SendDelayMs?: number | undefined;
	readonly SparseTrackType?: string | undefined;
	readonly StreamManifestBehavior?: string | undefined;
	readonly TimestampOffset?: string | undefined;
	readonly TimestampOffsetMode?: string | undefined;
}
export interface MsSmoothOutputSettings {
	readonly H265PackagingType?: string | undefined;
	readonly NameModifier?: string | undefined;
}
export interface MultiplexGroupSettings {}
export interface MultiplexOutputSettings {
	readonly Destination?: OutputLocationRef | undefined;
}
export interface MultiplexProgramChannelDestinationSettings {
	readonly MultiplexId?: string | undefined;
	readonly ProgramName?: string | undefined;
}
export interface NetworkInputSettings {
	readonly HlsInputSettings?: HlsInputSettings | undefined;
	readonly ServerValidation?: string | undefined;
}
export interface NielsenCBET {
	readonly CbetCheckDigitString?: string | undefined;
	readonly CbetStepaside?: string | undefined;
	readonly Csid?: string | undefined;
}
export interface NielsenConfiguration {
	readonly DistributorId?: string | undefined;
	readonly NielsenPcmToId3Tagging?: string | undefined;
}
export interface NielsenNaesIiNw {
	readonly CheckDigitString?: string | undefined;
	readonly Sid?: number | undefined;
}
export interface NielsenWatermarksSettings {
	readonly NielsenCbetSettings?: NielsenCBET | undefined;
	readonly NielsenDistributionType?: string | undefined;
	readonly NielsenNaesIiNwSettings?: NielsenNaesIiNw | undefined;
}
export interface Output {
	readonly AudioDescriptionNames?: string[] | undefined;
	readonly CaptionDescriptionNames?: string[] | undefined;
	readonly OutputName?: string | undefined;
	readonly OutputSettings?: OutputSettings | undefined;
	readonly VideoDescriptionName?: string | undefined;
}
export interface OutputDestination {
	readonly Id?: string | undefined;
	readonly MediaPackageSettings?: MediaPackageOutputDestinationSettings[] | undefined;
	readonly MultiplexSettings?: MultiplexProgramChannelDestinationSettings | undefined;
	readonly Settings?: OutputDestinationSettings[] | undefined;
}
export interface OutputDestinationSettings {
	readonly PasswordParam?: string | undefined;
	readonly StreamName?: string | undefined;
	readonly Url?: string | undefined;
	readonly Username?: string | undefined;
}
export interface OutputGroup {
	readonly Name?: string | undefined;
	readonly OutputGroupSettings?: OutputGroupSettings | undefined;
	readonly Outputs?: Output[] | undefined;
}
export interface OutputGroupSettings {
	readonly ArchiveGroupSettings?: ArchiveGroupSettings | undefined;
	readonly FrameCaptureGroupSettings?: FrameCaptureGroupSettings | undefined;
	readonly HlsGroupSettings?: HlsGroupSettings | undefined;
	readonly MediaPackageGroupSettings?: MediaPackageGroupSettings | undefined;
	readonly MsSmoothGroupSettings?: MsSmoothGroupSettings | undefined;
	readonly MultiplexGroupSettings?: MultiplexGroupSettings | undefined;
	readonly RtmpGroupSettings?: RtmpGroupSettings | undefined;
	readonly UdpGroupSettings?: UdpGroupSettings | undefined;
}
export interface OutputLocationRef {
	readonly DestinationRefId?: string | undefined;
}
export interface OutputSettings {
	readonly ArchiveOutputSettings?: ArchiveOutputSettings | undefined;
	readonly FrameCaptureOutputSettings?: FrameCaptureOutputSettings | undefined;
	readonly HlsOutputSettings?: HlsOutputSettings | undefined;
	readonly MediaPackageOutputSettings?: MediaPackageOutputSettings | undefined;
	readonly MsSmoothOutputSettings?: MsSmoothOutputSettings | undefined;
	readonly MultiplexOutputSettings?: MultiplexOutputSettings | undefined;
	readonly RtmpOutputSettings?: RtmpOutputSettings | undefined;
	readonly UdpOutputSettings?: UdpOutputSettings | undefined;
}
export interface PassThroughSettings {}
export interface RawSettings {}
export interface Rec601Settings {}
export interface Rec709Settings {}
export interface RemixSettings {
	readonly ChannelMappings?: AudioChannelMapping[] | undefined;
	readonly ChannelsIn?: number | undefined;
	readonly ChannelsOut?: number | undefined;
}
export interface RtmpCaptionInfoDestinationSettings {}
export interface RtmpGroupSettings {
	readonly AdMarkers?: string[] | undefined;
	readonly AuthenticationScheme?: string | undefined;
	readonly CacheFullBehavior?: string | undefined;
	readonly CacheLength?: number | undefined;
	readonly CaptionData?: string | undefined;
	readonly InputLossAction?: string | undefined;
	readonly RestartDelay?: number | undefined;
}
export interface RtmpOutputSettings {
	readonly CertificateMode?: string | undefined;
	readonly ConnectionRetryInterval?: number | undefined;
	readonly Destination?: OutputLocationRef | undefined;
	readonly NumRetries?: number | undefined;
}
export interface Scte20PlusEmbeddedDestinationSettings {}
export interface Scte20SourceSettings {
	readonly Convert608To708?: string | undefined;
	readonly Source608ChannelNumber?: number | undefined;
}
export interface Scte27DestinationSettings {}
export interface Scte27SourceSettings {
	readonly OcrLanguage?: string | undefined;
	readonly Pid?: number | undefined;
}
export interface Scte35SpliceInsert {
	readonly AdAvailOffset?: number | undefined;
	readonly NoRegionalBlackoutFlag?: string | undefined;
	readonly WebDeliveryAllowedFlag?: string | undefined;
}
export interface Scte35TimeSignalApos {
	readonly AdAvailOffset?: number | undefined;
	readonly NoRegionalBlackoutFlag?: string | undefined;
	readonly WebDeliveryAllowedFlag?: string | undefined;
}
export interface SmpteTtDestinationSettings {}
export interface StandardHlsSettings {
	readonly AudioRenditionSets?: string | undefined;
	readonly M3u8Settings?: M3u8Settings | undefined;
}
export interface StaticKeySettings {
	readonly KeyProviderServer?: InputLocation | undefined;
	readonly StaticKeyValue?: string | undefined;
}
export interface TeletextDestinationSettings {}
export interface TeletextSourceSettings {
	readonly OutputRectangle?: CaptionRectangle | undefined;
	readonly PageNumber?: string | undefined;
}
export interface TemporalFilterSettings {
	readonly PostFilterSharpening?: string | undefined;
	readonly Strength?: string | undefined;
}
export interface TimecodeConfig {
	readonly Source?: string | undefined;
	readonly SyncThreshold?: number | undefined;
}
export interface TtmlDestinationSettings {
	readonly StyleControl?: string | undefined;
}
export interface UdpContainerSettings {
	readonly M2tsSettings?: M2tsSettings | undefined;
}
export interface UdpGroupSettings {
	readonly InputLossAction?: string | undefined;
	readonly TimedMetadataId3Frame?: string | undefined;
	readonly TimedMetadataId3Period?: number | undefined;
}
export interface UdpOutputSettings {
	readonly BufferMsec?: number | undefined;
	readonly ContainerSettings?: UdpContainerSettings | undefined;
	readonly Destination?: OutputLocationRef | undefined;
	readonly FecOutputSettings?: FecOutputSettings | undefined;
}
export interface VideoBlackFailoverSettings {
	readonly BlackDetectThreshold?: number | undefined;
	readonly VideoBlackThresholdMsec?: number | undefined;
}
export interface VideoCodecSettings {
	readonly FrameCaptureSettings?: FrameCaptureSettings | undefined;
	readonly H264Settings?: H264Settings | undefined;
	readonly H265Settings?: H265Settings | undefined;
	readonly Mpeg2Settings?: Mpeg2Settings | undefined;
}
export interface VideoDescription {
	readonly CodecSettings?: VideoCodecSettings | undefined;
	readonly Height?: number | undefined;
	readonly Name?: string | undefined;
	readonly RespondToAfd?: string | undefined;
	readonly ScalingBehavior?: string | undefined;
	readonly Sharpness?: number | undefined;
	readonly Width?: number | undefined;
}
export interface VideoSelector {
	readonly ColorSpace?: string | undefined;
	readonly ColorSpaceSettings?: VideoSelectorColorSpaceSettings | undefined;
	readonly ColorSpaceUsage?: string | undefined;
	readonly SelectorSettings?: VideoSelectorSettings | undefined;
}
export interface VideoSelectorColorSpaceSettings {
	readonly Hdr10Settings?: Hdr10Settings | undefined;
}
export interface VideoSelectorPid {
	readonly Pid?: number | undefined;
}
export interface VideoSelectorProgramId {
	readonly ProgramId?: number | undefined;
}
export interface VideoSelectorSettings {
	readonly VideoSelectorPid?: VideoSelectorPid | undefined;
	readonly VideoSelectorProgramId?: VideoSelectorProgramId | undefined;
}
export interface VpcOutputSettings {
	readonly PublicAddressAllocationIds?: string[] | undefined;
	readonly SecurityGroupIds?: string[] | undefined;
	readonly SubnetIds?: string[] | undefined;
}
export interface WavSettings {
	readonly BitDepth?: number | undefined;
	readonly CodingMode?: string | undefined;
	readonly SampleRate?: number | undefined;
}
export interface WebvttDestinationSettings {
	readonly StyleControl?: string | undefined;
}
export interface InputDestinationRequest {
	readonly StreamName?: string | undefined;
}
export interface InputDeviceRequest {
	readonly Id?: string | undefined;
}
export interface InputDeviceSettings {
	readonly Id?: string | undefined;
}
export interface InputSourceRequest {
	readonly PasswordParam?: string | undefined;
	readonly Url?: string | undefined;
	readonly Username?: string | undefined;
}
export interface InputVpcRequest {
	readonly SecurityGroupIds?: string[] | undefined;
	readonly SubnetIds?: string[] | undefined;
}
export interface MediaConnectFlowRequest {
	readonly FlowArn?: string | undefined;
}
export interface InputWhitelistRuleCidr {
	readonly Cidr?: string | undefined;
}
export default {
	Channel: Channel,
	Input: Input,
	InputSecurityGroup: InputSecurityGroup,
};

import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class mediaservices extends ArmResource<mediaservicesComponentInputs> implements mediaservicesComponentOutputs {
	constructor(entity: ADKEntity, options: mediaservicesComponentInputs) {
		super(entity, options.name, "Microsoft.Media/mediaservices", "2018-07-01", options);
	}
	public readonly apiVersion: "2018-07-01";
	public readonly id: string;
	public readonly type: "Microsoft.Media/mediaservices";
}
export interface mediaservicesComponentOutputs {
	readonly apiVersion: "2018-07-01";
	readonly id: string;
	readonly type: "Microsoft.Media/mediaservices";
}
export interface mediaservicesComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: MediaServiceProperties | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class mediaServices_accountFilters
	extends ArmResource<mediaServices_accountFiltersComponentInputs>
	implements mediaServices_accountFiltersComponentOutputs
{
	constructor(entity: ADKEntity, options: mediaServices_accountFiltersComponentInputs) {
		super(entity, options.name, "Microsoft.Media/mediaServices/accountFilters", "2018-07-01", options);
	}
	public readonly apiVersion: "2018-07-01";
	public readonly id: string;
	public readonly type: "Microsoft.Media/mediaServices/accountFilters";
}
export interface mediaServices_accountFiltersComponentOutputs {
	readonly apiVersion: "2018-07-01";
	readonly id: string;
	readonly type: "Microsoft.Media/mediaServices/accountFilters";
}
export interface mediaServices_accountFiltersComponentInputs {
	readonly name: string;
	readonly properties?: MediaFilterProperties | undefined;
}
export class mediaServices_assets
	extends ArmResource<mediaServices_assetsComponentInputs>
	implements mediaServices_assetsComponentOutputs
{
	constructor(entity: ADKEntity, options: mediaServices_assetsComponentInputs) {
		super(entity, options.name, "Microsoft.Media/mediaServices/assets", "2018-07-01", options);
	}
	public readonly apiVersion: "2018-07-01";
	public readonly id: string;
	public readonly type: "Microsoft.Media/mediaServices/assets";
}
export interface mediaServices_assetsComponentOutputs {
	readonly apiVersion: "2018-07-01";
	readonly id: string;
	readonly type: "Microsoft.Media/mediaServices/assets";
}
export interface mediaServices_assetsComponentInputs {
	readonly name: string;
	readonly properties?: AssetProperties | undefined;
}
export class mediaServices_assets_assetFilters
	extends ArmResource<mediaServices_assets_assetFiltersComponentInputs>
	implements mediaServices_assets_assetFiltersComponentOutputs
{
	constructor(entity: ADKEntity, options: mediaServices_assets_assetFiltersComponentInputs) {
		super(entity, options.name, "Microsoft.Media/mediaServices/assets/assetFilters", "2018-07-01", options);
	}
	public readonly apiVersion: "2018-07-01";
	public readonly id: string;
	public readonly type: "Microsoft.Media/mediaServices/assets/assetFilters";
}
export interface mediaServices_assets_assetFiltersComponentOutputs {
	readonly apiVersion: "2018-07-01";
	readonly id: string;
	readonly type: "Microsoft.Media/mediaServices/assets/assetFilters";
}
export interface mediaServices_assets_assetFiltersComponentInputs {
	readonly name: string;
	readonly properties?: MediaFilterProperties | undefined;
}
export class mediaServices_contentKeyPolicies
	extends ArmResource<mediaServices_contentKeyPoliciesComponentInputs>
	implements mediaServices_contentKeyPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: mediaServices_contentKeyPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.Media/mediaServices/contentKeyPolicies", "2018-07-01", options);
	}
	public readonly apiVersion: "2018-07-01";
	public readonly id: string;
	public readonly type: "Microsoft.Media/mediaServices/contentKeyPolicies";
}
export interface mediaServices_contentKeyPoliciesComponentOutputs {
	readonly apiVersion: "2018-07-01";
	readonly id: string;
	readonly type: "Microsoft.Media/mediaServices/contentKeyPolicies";
}
export interface mediaServices_contentKeyPoliciesComponentInputs {
	readonly name: string;
	readonly properties?: ContentKeyPolicyProperties | undefined;
}
export class mediaservices_liveEvents
	extends ArmResource<mediaservices_liveEventsComponentInputs>
	implements mediaservices_liveEventsComponentOutputs
{
	constructor(entity: ADKEntity, options: mediaservices_liveEventsComponentInputs) {
		super(entity, options.name, "Microsoft.Media/mediaservices/liveEvents", "2018-07-01", options);
	}
	public readonly apiVersion: "2018-07-01";
	public readonly id: string;
	public readonly type: "Microsoft.Media/mediaservices/liveEvents";
}
export interface mediaservices_liveEventsComponentOutputs {
	readonly apiVersion: "2018-07-01";
	readonly id: string;
	readonly type: "Microsoft.Media/mediaservices/liveEvents";
}
export interface mediaservices_liveEventsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: LiveEventProperties | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class mediaservices_liveEvents_liveOutputs
	extends ArmResource<mediaservices_liveEvents_liveOutputsComponentInputs>
	implements mediaservices_liveEvents_liveOutputsComponentOutputs
{
	constructor(entity: ADKEntity, options: mediaservices_liveEvents_liveOutputsComponentInputs) {
		super(entity, options.name, "Microsoft.Media/mediaservices/liveEvents/liveOutputs", "2018-07-01", options);
	}
	public readonly apiVersion: "2018-07-01";
	public readonly id: string;
	public readonly type: "Microsoft.Media/mediaservices/liveEvents/liveOutputs";
}
export interface mediaservices_liveEvents_liveOutputsComponentOutputs {
	readonly apiVersion: "2018-07-01";
	readonly id: string;
	readonly type: "Microsoft.Media/mediaservices/liveEvents/liveOutputs";
}
export interface mediaservices_liveEvents_liveOutputsComponentInputs {
	readonly name: string;
	readonly properties?: LiveOutputProperties | undefined;
}
export class mediaservices_streamingEndpoints
	extends ArmResource<mediaservices_streamingEndpointsComponentInputs>
	implements mediaservices_streamingEndpointsComponentOutputs
{
	constructor(entity: ADKEntity, options: mediaservices_streamingEndpointsComponentInputs) {
		super(entity, options.name, "Microsoft.Media/mediaservices/streamingEndpoints", "2018-07-01", options);
	}
	public readonly apiVersion: "2018-07-01";
	public readonly id: string;
	public readonly type: "Microsoft.Media/mediaservices/streamingEndpoints";
}
export interface mediaservices_streamingEndpointsComponentOutputs {
	readonly apiVersion: "2018-07-01";
	readonly id: string;
	readonly type: "Microsoft.Media/mediaservices/streamingEndpoints";
}
export interface mediaservices_streamingEndpointsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: StreamingEndpointProperties | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class mediaServices_streamingLocators
	extends ArmResource<mediaServices_streamingLocatorsComponentInputs>
	implements mediaServices_streamingLocatorsComponentOutputs
{
	constructor(entity: ADKEntity, options: mediaServices_streamingLocatorsComponentInputs) {
		super(entity, options.name, "Microsoft.Media/mediaServices/streamingLocators", "2018-07-01", options);
	}
	public readonly apiVersion: "2018-07-01";
	public readonly id: string;
	public readonly type: "Microsoft.Media/mediaServices/streamingLocators";
}
export interface mediaServices_streamingLocatorsComponentOutputs {
	readonly apiVersion: "2018-07-01";
	readonly id: string;
	readonly type: "Microsoft.Media/mediaServices/streamingLocators";
}
export interface mediaServices_streamingLocatorsComponentInputs {
	readonly name: string;
	readonly properties?: StreamingLocatorProperties | undefined;
}
export class mediaServices_streamingPolicies
	extends ArmResource<mediaServices_streamingPoliciesComponentInputs>
	implements mediaServices_streamingPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: mediaServices_streamingPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.Media/mediaServices/streamingPolicies", "2018-07-01", options);
	}
	public readonly apiVersion: "2018-07-01";
	public readonly id: string;
	public readonly type: "Microsoft.Media/mediaServices/streamingPolicies";
}
export interface mediaServices_streamingPoliciesComponentOutputs {
	readonly apiVersion: "2018-07-01";
	readonly id: string;
	readonly type: "Microsoft.Media/mediaServices/streamingPolicies";
}
export interface mediaServices_streamingPoliciesComponentInputs {
	readonly name: string;
	readonly properties?: StreamingPolicyProperties | undefined;
}
export class mediaServices_transforms
	extends ArmResource<mediaServices_transformsComponentInputs>
	implements mediaServices_transformsComponentOutputs
{
	constructor(entity: ADKEntity, options: mediaServices_transformsComponentInputs) {
		super(entity, options.name, "Microsoft.Media/mediaServices/transforms", "2018-07-01", options);
	}
	public readonly apiVersion: "2018-07-01";
	public readonly id: string;
	public readonly type: "Microsoft.Media/mediaServices/transforms";
}
export interface mediaServices_transformsComponentOutputs {
	readonly apiVersion: "2018-07-01";
	readonly id: string;
	readonly type: "Microsoft.Media/mediaServices/transforms";
}
export interface mediaServices_transformsComponentInputs {
	readonly name: string;
	readonly properties?: TransformProperties | undefined;
}
export class mediaServices_transforms_jobs
	extends ArmResource<mediaServices_transforms_jobsComponentInputs>
	implements mediaServices_transforms_jobsComponentOutputs
{
	constructor(entity: ADKEntity, options: mediaServices_transforms_jobsComponentInputs) {
		super(entity, options.name, "Microsoft.Media/mediaServices/transforms/jobs", "2018-07-01", options);
	}
	public readonly apiVersion: "2018-07-01";
	public readonly id: string;
	public readonly type: "Microsoft.Media/mediaServices/transforms/jobs";
}
export interface mediaServices_transforms_jobsComponentOutputs {
	readonly apiVersion: "2018-07-01";
	readonly id: string;
	readonly type: "Microsoft.Media/mediaServices/transforms/jobs";
}
export interface mediaServices_transforms_jobsComponentInputs {
	readonly name: string;
	readonly properties?: JobProperties | undefined;
}
export function listContainerSas(resource: mediaServices_assets, input: ListContainerSasInput): AssetContainerSas {
	if (resource.apiVersion !== "2018-07-01") {
		throw new Error(`listContainerSas is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Media/mediaServices/assets") {
		throw new Error(`listContainerSas is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listContentKeys(resource: mediaServices_streamingLocators): ListContentKeysResponse {
	if (resource.apiVersion !== "2018-07-01") {
		throw new Error(`listContentKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Media/mediaServices/streamingLocators") {
		throw new Error(`listContentKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listPaths(resource: mediaServices_streamingLocators): ListPathsResponse {
	if (resource.apiVersion !== "2018-07-01") {
		throw new Error(`listPaths is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Media/mediaServices/streamingLocators") {
		throw new Error(`listPaths is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listStreamingLocators(resource: mediaServices_assets): ListStreamingLocatorsResponse {
	if (resource.apiVersion !== "2018-07-01") {
		throw new Error(`listStreamingLocators is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Media/mediaServices/assets") {
		throw new Error(`listStreamingLocators is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AkamaiAccessControl {
	readonly akamaiSignatureHeaderAuthenticationKeyList?: AkamaiSignatureHeaderAuthenticationKey[] | undefined;
}
export interface AkamaiSignatureHeaderAuthenticationKey {
	readonly base64Key?: string | undefined;
	readonly expiration?: string | undefined;
	readonly identifier?: string | undefined;
}
export interface AssetContainerSas {
	readonly assetContainerSasUrls?: string[] | undefined;
}
export interface AssetProperties {
	readonly alternateId?: string | undefined;
	readonly assetId?: string | undefined;
	readonly container?: string | undefined;
	readonly created?: string | undefined;
	readonly description?: string | undefined;
	readonly lastModified?: string | undefined;
	readonly storageAccountName?: string | undefined;
	readonly storageEncryptionFormat?: ("MediaStorageClientEncryption" | "None") | undefined;
}
export interface AssetStreamingLocator {
	readonly assetName?: string | undefined;
	readonly created?: string | undefined;
	readonly defaultContentKeyPolicyName?: string | undefined;
	readonly endTime?: string | undefined;
	readonly name?: string | undefined;
	readonly startTime?: string | undefined;
	readonly streamingLocatorId?: string | undefined;
	readonly streamingPolicyName?: string | undefined;
}
export interface CbcsDrmConfiguration {
	readonly fairPlay?: StreamingPolicyFairPlayConfiguration | undefined;
	readonly playReady?: StreamingPolicyPlayReadyConfiguration | undefined;
	readonly widevine?: StreamingPolicyWidevineConfiguration | undefined;
}
export interface CencDrmConfiguration {
	readonly playReady?: StreamingPolicyPlayReadyConfiguration | undefined;
	readonly widevine?: StreamingPolicyWidevineConfiguration | undefined;
}
export interface ClipTime {}
export interface Codec {
	readonly label?: string | undefined;
}
export interface CommonEncryptionCbcs {
	readonly clearTracks?: TrackSelection[] | undefined;
	readonly contentKeys?: StreamingPolicyContentKeys | undefined;
	readonly drm?: CbcsDrmConfiguration | undefined;
	readonly enabledProtocols?: EnabledProtocols | undefined;
}
export interface CommonEncryptionCenc {
	readonly clearTracks?: TrackSelection[] | undefined;
	readonly contentKeys?: StreamingPolicyContentKeys | undefined;
	readonly drm?: CencDrmConfiguration | undefined;
	readonly enabledProtocols?: EnabledProtocols | undefined;
}
export interface ContentKeyPolicyConfiguration {}
export interface ContentKeyPolicyOption {
	readonly configuration: ContentKeyPolicyConfiguration;
	readonly name?: string | undefined;
	readonly policyOptionId?: string | undefined;
	readonly restriction: ContentKeyPolicyRestriction;
}
export interface ContentKeyPolicyPlayReadyContentKeyLocation {}
export interface ContentKeyPolicyPlayReadyExplicitAnalogTelevisionRestriction {
	readonly bestEffort: boolean;
	readonly configurationData: number;
}
export interface ContentKeyPolicyPlayReadyLicense {
	readonly allowTestDevices: boolean;
	readonly beginDate?: string | undefined;
	readonly contentKeyLocation: ContentKeyPolicyPlayReadyContentKeyLocation;
	readonly contentType: "UltraVioletDownload" | "UltraVioletStreaming" | "Unknown" | "Unspecified";
	readonly expirationDate?: string | undefined;
	readonly gracePeriod?: string | undefined;
	readonly licenseType: "NonPersistent" | "Persistent" | "Unknown";
	readonly playRight?: ContentKeyPolicyPlayReadyPlayRight | undefined;
	readonly relativeBeginDate?: string | undefined;
	readonly relativeExpirationDate?: string | undefined;
}
export interface ContentKeyPolicyPlayReadyPlayRight {
	readonly agcAndColorStripeRestriction?: number | undefined;
	readonly allowPassingVideoContentToUnknownOutput:
		| "Allowed"
		| "AllowedWithVideoConstriction"
		| "NotAllowed"
		| "Unknown";
	readonly analogVideoOpl?: number | undefined;
	readonly compressedDigitalAudioOpl?: number | undefined;
	readonly compressedDigitalVideoOpl?: number | undefined;
	readonly digitalVideoOnlyContentRestriction: boolean;
	readonly explicitAnalogTelevisionOutputRestriction?:
		| ContentKeyPolicyPlayReadyExplicitAnalogTelevisionRestriction
		| undefined;
	readonly firstPlayExpiration?: string | undefined;
	readonly imageConstraintForAnalogComponentVideoRestriction: boolean;
	readonly imageConstraintForAnalogComputerMonitorRestriction: boolean;
	readonly scmsRestriction?: number | undefined;
	readonly uncompressedDigitalAudioOpl?: number | undefined;
	readonly uncompressedDigitalVideoOpl?: number | undefined;
}
export interface ContentKeyPolicyProperties {
	readonly created?: string | undefined;
	readonly description?: string | undefined;
	readonly lastModified?: string | undefined;
	readonly options: ContentKeyPolicyOption[];
	readonly policyId?: string | undefined;
}
export interface ContentKeyPolicyRestriction {}
export interface ContentKeyPolicyRestrictionTokenKey {}
export interface ContentKeyPolicyTokenClaim {
	readonly claimType?: string | undefined;
	readonly claimValue?: string | undefined;
}
export interface CrossSiteAccessPolicies {
	readonly clientAccessPolicy?: string | undefined;
	readonly crossDomainPolicy?: string | undefined;
}
export interface DefaultKey {
	readonly label?: string | undefined;
	readonly policyName?: string | undefined;
}
export interface Deinterlace {
	readonly mode?: ("AutoPixelAdaptive" | "Off") | undefined;
	readonly parity?: ("Auto" | "BottomFieldFirst" | "TopFieldFirst") | undefined;
}
export interface EnabledProtocols {
	readonly dash: boolean;
	readonly download: boolean;
	readonly hls: boolean;
	readonly smoothStreaming: boolean;
}
export interface EnvelopeEncryption {
	readonly clearTracks?: TrackSelection[] | undefined;
	readonly contentKeys?: StreamingPolicyContentKeys | undefined;
	readonly customKeyAcquisitionUrlTemplate?: string | undefined;
	readonly enabledProtocols?: EnabledProtocols | undefined;
}
export interface Filters {
	readonly crop?: Rectangle | undefined;
	readonly deinterlace?: Deinterlace | undefined;
	readonly overlays?: Overlay[] | undefined;
	readonly rotation?: ("Auto" | "None" | "Rotate0" | "Rotate180" | "Rotate270" | "Rotate90") | undefined;
}
export interface FilterTrackPropertyCondition {
	readonly operation: "Equal" | "NotEqual";
	readonly property: "Bitrate" | "FourCC" | "Language" | "Name" | "Type" | "Unknown";
	readonly value: string;
}
export interface FilterTrackSelection {
	readonly trackSelections: FilterTrackPropertyCondition[];
}
export interface FirstQuality {
	readonly bitrate: number;
}
export interface Format {
	readonly filenamePattern: string;
}
export interface H264Layer {
	readonly "@odata.type": string;
	readonly adaptiveBFrame?: boolean | undefined;
	readonly bFrames?: number | undefined;
	readonly bitrate: number;
	readonly bufferWindow?: string | undefined;
	readonly entropyMode?: ("Cabac" | "Cavlc") | undefined;
	readonly frameRate?: string | undefined;
	readonly height?: string | undefined;
	readonly label?: string | undefined;
	readonly level?: string | undefined;
	readonly maxBitrate?: number | undefined;
	readonly profile?: ("Auto" | "Baseline" | "High" | "High422" | "High444" | "Main") | undefined;
	readonly referenceFrames?: number | undefined;
	readonly slices?: number | undefined;
	readonly width?: string | undefined;
}
export interface Hls {
	readonly fragmentsPerTsSegment?: number | undefined;
}
export interface IPAccessControl {
	readonly allow?: IPRange[] | undefined;
}
export interface IPRange {
	readonly address?: string | undefined;
	readonly name?: string | undefined;
	readonly subnetPrefixLength?: number | undefined;
}
export interface JobError {
	readonly category?: ("Configuration" | "Content" | "Download" | "Service" | "Upload") | undefined;
	readonly code?:
		| (
				| "ConfigurationUnsupported"
				| "ContentMalformed"
				| "ContentUnsupported"
				| "DownloadNotAccessible"
				| "DownloadTransientError"
				| "ServiceError"
				| "ServiceTransientError"
				| "UploadNotAccessible"
				| "UploadTransientError"
		  )
		| undefined;
	readonly details?: JobErrorDetail[] | undefined;
	readonly message?: string | undefined;
	readonly retry?: ("DoNotRetry" | "MayRetry") | undefined;
}
export interface JobErrorDetail {
	readonly code?: string | undefined;
	readonly message?: string | undefined;
}
export interface JobInput {}
export interface JobOutput {
	readonly error?: JobError | undefined;
	readonly label?: string | undefined;
	readonly progress?: number | undefined;
	readonly state?:
		| ("Canceled" | "Canceling" | "Error" | "Finished" | "Processing" | "Queued" | "Scheduled")
		| undefined;
}
export interface JobProperties {
	readonly correlationData?: JobPropertiesCorrelationData | undefined;
	readonly created?: string | undefined;
	readonly description?: string | undefined;
	readonly input: JobInput;
	readonly lastModified?: string | undefined;
	readonly outputs: JobOutput[];
	readonly priority?: ("High" | "Low" | "Normal") | undefined;
	readonly state?:
		| ("Canceled" | "Canceling" | "Error" | "Finished" | "Processing" | "Queued" | "Scheduled")
		| undefined;
}
export interface JobPropertiesCorrelationData {
	readonly "[ key: string ]"?: string | undefined;
}
export interface JpgLayer {
	readonly "@odata.type": string;
	readonly height?: string | undefined;
	readonly label?: string | undefined;
	readonly quality?: number | undefined;
	readonly width?: string | undefined;
}
export interface ListContainerSasInput {
	readonly expiryTime?: string | undefined;
	readonly permissions?: ("Read" | "ReadWrite" | "ReadWriteDelete") | undefined;
}
export interface ListContentKeysResponse {
	readonly contentKeys?: StreamingLocatorContentKey[] | undefined;
}
export interface ListPathsResponse {
	readonly downloadPaths?: string[] | undefined;
	readonly streamingPaths?: StreamingPath[] | undefined;
}
export interface ListStreamingLocatorsResponse {
	readonly streamingLocators?: AssetStreamingLocator[] | undefined;
}
export interface LiveEventEncoding {
	readonly encodingType?: ("Basic" | "None" | "Premium1080p" | "Standard") | undefined;
	readonly presetName?: string | undefined;
}
export interface LiveEventEndpoint {
	readonly protocol?: string | undefined;
	readonly url?: string | undefined;
}
export interface LiveEventInput {
	readonly accessControl?: LiveEventInputAccessControl | undefined;
	readonly accessToken?: string | undefined;
	readonly endpoints?: LiveEventEndpoint[] | undefined;
	readonly keyFrameIntervalDuration?: string | undefined;
	readonly streamingProtocol: "FragmentedMP4" | "RTMP";
}
export interface LiveEventInputAccessControl {
	readonly ip?: IPAccessControl | undefined;
}
export interface LiveEventInputTrackSelection {
	readonly operation?: string | undefined;
	readonly property?: string | undefined;
	readonly value?: string | undefined;
}
export interface LiveEventOutputTranscriptionTrack {
	readonly trackName: string;
}
export interface LiveEventPreview {
	readonly accessControl?: LiveEventPreviewAccessControl | undefined;
	readonly alternativeMediaId?: string | undefined;
	readonly endpoints?: LiveEventEndpoint[] | undefined;
	readonly previewLocator?: string | undefined;
	readonly streamingPolicyName?: string | undefined;
}
export interface LiveEventPreviewAccessControl {
	readonly ip?: IPAccessControl | undefined;
}
export interface LiveEventProperties {
	readonly created?: string | undefined;
	readonly crossSiteAccessPolicies?: CrossSiteAccessPolicies | undefined;
	readonly description?: string | undefined;
	readonly encoding?: LiveEventEncoding | undefined;
	readonly input: LiveEventInput;
	readonly lastModified?: string | undefined;
	readonly preview?: LiveEventPreview | undefined;
	readonly provisioningState?: string | undefined;
	readonly resourceState?: ("Deleting" | "Running" | "Starting" | "Stopped" | "Stopping") | undefined;
	readonly streamOptions?: ("Default" | "LowLatency"[]) | undefined;
	readonly transcriptions?: LiveEventTranscription[] | undefined;
	readonly vanityUrl?: boolean | undefined;
}
export interface LiveEventTranscription {
	readonly inputTrackSelection?: LiveEventInputTrackSelection[] | undefined;
	readonly language?: string | undefined;
	readonly outputTranscriptionTrack?: LiveEventOutputTranscriptionTrack | undefined;
}
export interface LiveOutputProperties {
	readonly archiveWindowLength: string;
	readonly assetName: string;
	readonly created?: string | undefined;
	readonly description?: string | undefined;
	readonly hls?: Hls | undefined;
	readonly lastModified?: string | undefined;
	readonly manifestName?: string | undefined;
	readonly outputSnapTime?: number | undefined;
	readonly provisioningState?: string | undefined;
	readonly resourceState?: ("Creating" | "Deleting" | "Running") | undefined;
}
export interface MediaFilterProperties {
	readonly firstQuality?: FirstQuality | undefined;
	readonly presentationTimeRange?: PresentationTimeRange | undefined;
	readonly tracks?: FilterTrackSelection[] | undefined;
}
export interface MediaServiceProperties {
	readonly mediaServiceId?: string | undefined;
	readonly storageAccounts?: StorageAccount[] | undefined;
}
export interface NoEncryption {
	readonly enabledProtocols?: EnabledProtocols | undefined;
}
export interface OutputFile {
	readonly labels: string[];
}
export interface Overlay {
	readonly audioGainLevel?: number | undefined;
	readonly end?: string | undefined;
	readonly fadeInDuration?: string | undefined;
	readonly fadeOutDuration?: string | undefined;
	readonly inputLabel: string;
	readonly start?: string | undefined;
}
export interface PngLayer {
	readonly "@odata.type": string;
	readonly height?: string | undefined;
	readonly label?: string | undefined;
	readonly width?: string | undefined;
}
export interface PresentationTimeRange {
	readonly endTimestamp?: number | undefined;
	readonly forceEndTimestamp?: boolean | undefined;
	readonly liveBackoffDuration?: number | undefined;
	readonly presentationWindowDuration?: number | undefined;
	readonly startTimestamp?: number | undefined;
	readonly timescale?: number | undefined;
}
export interface Preset {}
export interface Rectangle {
	readonly height?: string | undefined;
	readonly left?: string | undefined;
	readonly top?: string | undefined;
	readonly width?: string | undefined;
}
export interface StorageAccount {
	readonly id?: string | undefined;
	readonly type: "Primary" | "Secondary";
}
export interface StreamingEndpointAccessControl {
	readonly akamai?: AkamaiAccessControl | undefined;
	readonly ip?: IPAccessControl | undefined;
}
export interface StreamingEndpointProperties {
	readonly accessControl?: StreamingEndpointAccessControl | undefined;
	readonly availabilitySetName?: string | undefined;
	readonly cdnEnabled?: boolean | undefined;
	readonly cdnProfile?: string | undefined;
	readonly cdnProvider?: string | undefined;
	readonly created?: string | undefined;
	readonly crossSiteAccessPolicies?: CrossSiteAccessPolicies | undefined;
	readonly customHostNames?: string[] | undefined;
	readonly description?: string | undefined;
	readonly freeTrialEndTime?: string | undefined;
	readonly hostName?: string | undefined;
	readonly lastModified?: string | undefined;
	readonly maxCacheAge?: number | undefined;
	readonly provisioningState?: string | undefined;
	readonly resourceState?: ("Deleting" | "Running" | "Scaling" | "Starting" | "Stopped" | "Stopping") | undefined;
	readonly scaleUnits: number;
}
export interface StreamingLocatorContentKey {
	readonly id: string;
	readonly labelReferenceInStreamingPolicy?: string | undefined;
	readonly policyName?: string | undefined;
	readonly tracks?: TrackSelection[] | undefined;
	readonly type?: ("CommonEncryptionCbcs" | "CommonEncryptionCenc" | "EnvelopeEncryption") | undefined;
	readonly value?: string | undefined;
}
export interface StreamingLocatorProperties {
	readonly alternativeMediaId?: string | undefined;
	readonly assetName: string;
	readonly contentKeys?: StreamingLocatorContentKey[] | undefined;
	readonly created?: string | undefined;
	readonly defaultContentKeyPolicyName?: string | undefined;
	readonly endTime?: string | undefined;
	readonly filters?: string[] | undefined;
	readonly startTime?: string | undefined;
	readonly streamingLocatorId?: string | undefined;
	readonly streamingPolicyName: string;
}
export interface StreamingPath {
	readonly encryptionScheme: "CommonEncryptionCbcs" | "CommonEncryptionCenc" | "EnvelopeEncryption" | "NoEncryption";
	readonly paths?: string[] | undefined;
	readonly streamingProtocol: "Dash" | "Download" | "Hls" | "SmoothStreaming";
}
export interface StreamingPolicyContentKey {
	readonly label?: string | undefined;
	readonly policyName?: string | undefined;
	readonly tracks?: TrackSelection[] | undefined;
}
export interface StreamingPolicyContentKeys {
	readonly defaultKey?: DefaultKey | undefined;
	readonly keyToTrackMappings?: StreamingPolicyContentKey[] | undefined;
}
export interface StreamingPolicyFairPlayConfiguration {
	readonly allowPersistentLicense: boolean;
	readonly customLicenseAcquisitionUrlTemplate?: string | undefined;
}
export interface StreamingPolicyPlayReadyConfiguration {
	readonly customLicenseAcquisitionUrlTemplate?: string | undefined;
	readonly playReadyCustomAttributes?: string | undefined;
}
export interface StreamingPolicyProperties {
	readonly commonEncryptionCbcs?: CommonEncryptionCbcs | undefined;
	readonly commonEncryptionCenc?: CommonEncryptionCenc | undefined;
	readonly created?: string | undefined;
	readonly defaultContentKeyPolicyName?: string | undefined;
	readonly envelopeEncryption?: EnvelopeEncryption | undefined;
	readonly noEncryption?: NoEncryption | undefined;
}
export interface StreamingPolicyWidevineConfiguration {
	readonly customLicenseAcquisitionUrlTemplate?: string | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface TrackPropertyCondition {
	readonly operation: "Equal" | "Unknown";
	readonly property: "FourCC" | "Unknown";
	readonly value?: string | undefined;
}
export interface TrackSelection {
	readonly trackSelections?: TrackPropertyCondition[] | undefined;
}
export interface TransformOutput {
	readonly onError?: ("ContinueJob" | "StopProcessingJob") | undefined;
	readonly preset: Preset;
	readonly relativePriority?: ("High" | "Low" | "Normal") | undefined;
}
export interface TransformProperties {
	readonly created?: string | undefined;
	readonly description?: string | undefined;
	readonly lastModified?: string | undefined;
	readonly outputs: TransformOutput[];
}
export default {
	mediaservices: mediaservices,
	"mediaServices/accountFilters": mediaServices_accountFilters,
	"mediaServices/assets": mediaServices_assets,
	"mediaServices/assets/assetFilters": mediaServices_assets_assetFilters,
	"mediaServices/contentKeyPolicies": mediaServices_contentKeyPolicies,
	"mediaservices/liveEvents": mediaservices_liveEvents,
	"mediaservices/liveEvents/liveOutputs": mediaservices_liveEvents_liveOutputs,
	"mediaservices/streamingEndpoints": mediaservices_streamingEndpoints,
	"mediaServices/streamingLocators": mediaServices_streamingLocators,
	"mediaServices/streamingPolicies": mediaServices_streamingPolicies,
	"mediaServices/transforms": mediaServices_transforms,
	"mediaServices/transforms/jobs": mediaServices_transforms_jobs,
};

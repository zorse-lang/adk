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
	readonly location?: string;
	readonly name: string;
	readonly properties?: MediaServiceProperties;
	readonly tags?: TrackedResourceTags;
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
	readonly properties?: MediaFilterProperties;
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
	readonly properties?: AssetProperties;
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
	readonly properties?: MediaFilterProperties;
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
	readonly properties?: ContentKeyPolicyProperties;
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
	readonly location?: string;
	readonly name: string;
	readonly properties?: LiveEventProperties;
	readonly tags?: TrackedResourceTags;
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
	readonly properties?: LiveOutputProperties;
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
	readonly location?: string;
	readonly name: string;
	readonly properties?: StreamingEndpointProperties;
	readonly tags?: TrackedResourceTags;
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
	readonly properties?: StreamingLocatorProperties;
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
	readonly properties?: StreamingPolicyProperties;
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
	readonly properties?: TransformProperties;
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
	readonly properties?: JobProperties;
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
	readonly akamaiSignatureHeaderAuthenticationKeyList?: AkamaiSignatureHeaderAuthenticationKey[];
}
export interface AkamaiSignatureHeaderAuthenticationKey {
	readonly base64Key?: string;
	readonly expiration?: string;
	readonly identifier?: string;
}
export interface AssetContainerSas {
	readonly assetContainerSasUrls?: string[];
}
export interface AssetProperties {
	readonly alternateId?: string;
	readonly assetId?: string;
	readonly container?: string;
	readonly created?: string;
	readonly description?: string;
	readonly lastModified?: string;
	readonly storageAccountName?: string;
	readonly storageEncryptionFormat?: "MediaStorageClientEncryption" | "None";
}
export interface AssetStreamingLocator {
	readonly assetName?: string;
	readonly created?: string;
	readonly defaultContentKeyPolicyName?: string;
	readonly endTime?: string;
	readonly name?: string;
	readonly startTime?: string;
	readonly streamingLocatorId?: string;
	readonly streamingPolicyName?: string;
}
export interface CbcsDrmConfiguration {
	readonly fairPlay?: StreamingPolicyFairPlayConfiguration;
	readonly playReady?: StreamingPolicyPlayReadyConfiguration;
	readonly widevine?: StreamingPolicyWidevineConfiguration;
}
export interface CencDrmConfiguration {
	readonly playReady?: StreamingPolicyPlayReadyConfiguration;
	readonly widevine?: StreamingPolicyWidevineConfiguration;
}
export interface ClipTime {}
export interface Codec {
	readonly label?: string;
}
export interface CommonEncryptionCbcs {
	readonly clearTracks?: TrackSelection[];
	readonly contentKeys?: StreamingPolicyContentKeys;
	readonly drm?: CbcsDrmConfiguration;
	readonly enabledProtocols?: EnabledProtocols;
}
export interface CommonEncryptionCenc {
	readonly clearTracks?: TrackSelection[];
	readonly contentKeys?: StreamingPolicyContentKeys;
	readonly drm?: CencDrmConfiguration;
	readonly enabledProtocols?: EnabledProtocols;
}
export interface ContentKeyPolicyConfiguration {}
export interface ContentKeyPolicyOption {
	readonly configuration: ContentKeyPolicyConfiguration;
	readonly name?: string;
	readonly policyOptionId?: string;
	readonly restriction: ContentKeyPolicyRestriction;
}
export interface ContentKeyPolicyPlayReadyContentKeyLocation {}
export interface ContentKeyPolicyPlayReadyExplicitAnalogTelevisionRestriction {
	readonly bestEffort: boolean;
	readonly configurationData: number;
}
export interface ContentKeyPolicyPlayReadyLicense {
	readonly allowTestDevices: boolean;
	readonly beginDate?: string;
	readonly contentKeyLocation: ContentKeyPolicyPlayReadyContentKeyLocation;
	readonly contentType: "UltraVioletDownload" | "UltraVioletStreaming" | "Unknown" | "Unspecified";
	readonly expirationDate?: string;
	readonly gracePeriod?: string;
	readonly licenseType: "NonPersistent" | "Persistent" | "Unknown";
	readonly playRight?: ContentKeyPolicyPlayReadyPlayRight;
	readonly relativeBeginDate?: string;
	readonly relativeExpirationDate?: string;
}
export interface ContentKeyPolicyPlayReadyPlayRight {
	readonly agcAndColorStripeRestriction?: number;
	readonly allowPassingVideoContentToUnknownOutput:
		| "Allowed"
		| "AllowedWithVideoConstriction"
		| "NotAllowed"
		| "Unknown";
	readonly analogVideoOpl?: number;
	readonly compressedDigitalAudioOpl?: number;
	readonly compressedDigitalVideoOpl?: number;
	readonly digitalVideoOnlyContentRestriction: boolean;
	readonly explicitAnalogTelevisionOutputRestriction?: ContentKeyPolicyPlayReadyExplicitAnalogTelevisionRestriction;
	readonly firstPlayExpiration?: string;
	readonly imageConstraintForAnalogComponentVideoRestriction: boolean;
	readonly imageConstraintForAnalogComputerMonitorRestriction: boolean;
	readonly scmsRestriction?: number;
	readonly uncompressedDigitalAudioOpl?: number;
	readonly uncompressedDigitalVideoOpl?: number;
}
export interface ContentKeyPolicyProperties {
	readonly created?: string;
	readonly description?: string;
	readonly lastModified?: string;
	readonly options: ContentKeyPolicyOption[];
	readonly policyId?: string;
}
export interface ContentKeyPolicyRestriction {}
export interface ContentKeyPolicyRestrictionTokenKey {}
export interface ContentKeyPolicyTokenClaim {
	readonly claimType?: string;
	readonly claimValue?: string;
}
export interface CrossSiteAccessPolicies {
	readonly clientAccessPolicy?: string;
	readonly crossDomainPolicy?: string;
}
export interface DefaultKey {
	readonly label?: string;
	readonly policyName?: string;
}
export interface Deinterlace {
	readonly mode?: "AutoPixelAdaptive" | "Off";
	readonly parity?: "Auto" | "BottomFieldFirst" | "TopFieldFirst";
}
export interface EnabledProtocols {
	readonly dash: boolean;
	readonly download: boolean;
	readonly hls: boolean;
	readonly smoothStreaming: boolean;
}
export interface EnvelopeEncryption {
	readonly clearTracks?: TrackSelection[];
	readonly contentKeys?: StreamingPolicyContentKeys;
	readonly customKeyAcquisitionUrlTemplate?: string;
	readonly enabledProtocols?: EnabledProtocols;
}
export interface Filters {
	readonly crop?: Rectangle;
	readonly deinterlace?: Deinterlace;
	readonly overlays?: Overlay[];
	readonly rotation?: "Auto" | "None" | "Rotate0" | "Rotate180" | "Rotate270" | "Rotate90";
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
	readonly adaptiveBFrame?: boolean;
	readonly bFrames?: number;
	readonly bitrate: number;
	readonly bufferWindow?: string;
	readonly entropyMode?: "Cabac" | "Cavlc";
	readonly frameRate?: string;
	readonly height?: string;
	readonly label?: string;
	readonly level?: string;
	readonly maxBitrate?: number;
	readonly profile?: "Auto" | "Baseline" | "High" | "High422" | "High444" | "Main";
	readonly referenceFrames?: number;
	readonly slices?: number;
	readonly width?: string;
}
export interface Hls {
	readonly fragmentsPerTsSegment?: number;
}
export interface IPAccessControl {
	readonly allow?: IPRange[];
}
export interface IPRange {
	readonly address?: string;
	readonly name?: string;
	readonly subnetPrefixLength?: number;
}
export interface JobError {
	readonly category?: "Configuration" | "Content" | "Download" | "Service" | "Upload";
	readonly code?:
		| "ConfigurationUnsupported"
		| "ContentMalformed"
		| "ContentUnsupported"
		| "DownloadNotAccessible"
		| "DownloadTransientError"
		| "ServiceError"
		| "ServiceTransientError"
		| "UploadNotAccessible"
		| "UploadTransientError";
	readonly details?: JobErrorDetail[];
	readonly message?: string;
	readonly retry?: "DoNotRetry" | "MayRetry";
}
export interface JobErrorDetail {
	readonly code?: string;
	readonly message?: string;
}
export interface JobInput {}
export interface JobOutput {
	readonly error?: JobError;
	readonly label?: string;
	readonly progress?: number;
	readonly state?: "Canceled" | "Canceling" | "Error" | "Finished" | "Processing" | "Queued" | "Scheduled";
}
export interface JobProperties {
	readonly correlationData?: JobPropertiesCorrelationData;
	readonly created?: string;
	readonly description?: string;
	readonly input: JobInput;
	readonly lastModified?: string;
	readonly outputs: JobOutput[];
	readonly priority?: "High" | "Low" | "Normal";
	readonly state?: "Canceled" | "Canceling" | "Error" | "Finished" | "Processing" | "Queued" | "Scheduled";
}
export interface JobPropertiesCorrelationData {
	readonly [key: string]: string;
}
export interface JpgLayer {
	readonly "@odata.type": string;
	readonly height?: string;
	readonly label?: string;
	readonly quality?: number;
	readonly width?: string;
}
export interface ListContainerSasInput {
	readonly expiryTime?: string;
	readonly permissions?: "Read" | "ReadWrite" | "ReadWriteDelete";
}
export interface ListContentKeysResponse {
	readonly contentKeys?: StreamingLocatorContentKey[];
}
export interface ListPathsResponse {
	readonly downloadPaths?: string[];
	readonly streamingPaths?: StreamingPath[];
}
export interface ListStreamingLocatorsResponse {
	readonly streamingLocators?: AssetStreamingLocator[];
}
export interface LiveEventEncoding {
	readonly encodingType?: "Basic" | "None" | "Premium1080p" | "Standard";
	readonly presetName?: string;
}
export interface LiveEventEndpoint {
	readonly protocol?: string;
	readonly url?: string;
}
export interface LiveEventInput {
	readonly accessControl?: LiveEventInputAccessControl;
	readonly accessToken?: string;
	readonly endpoints?: LiveEventEndpoint[];
	readonly keyFrameIntervalDuration?: string;
	readonly streamingProtocol: "FragmentedMP4" | "RTMP";
}
export interface LiveEventInputAccessControl {
	readonly ip?: IPAccessControl;
}
export interface LiveEventInputTrackSelection {
	readonly operation?: string;
	readonly property?: string;
	readonly value?: string;
}
export interface LiveEventOutputTranscriptionTrack {
	readonly trackName: string;
}
export interface LiveEventPreview {
	readonly accessControl?: LiveEventPreviewAccessControl;
	readonly alternativeMediaId?: string;
	readonly endpoints?: LiveEventEndpoint[];
	readonly previewLocator?: string;
	readonly streamingPolicyName?: string;
}
export interface LiveEventPreviewAccessControl {
	readonly ip?: IPAccessControl;
}
export interface LiveEventProperties {
	readonly created?: string;
	readonly crossSiteAccessPolicies?: CrossSiteAccessPolicies;
	readonly description?: string;
	readonly encoding?: LiveEventEncoding;
	readonly input: LiveEventInput;
	readonly lastModified?: string;
	readonly preview?: LiveEventPreview;
	readonly provisioningState?: string;
	readonly resourceState?: "Deleting" | "Running" | "Starting" | "Stopped" | "Stopping";
	readonly streamOptions?: "Default" | "LowLatency"[];
	readonly transcriptions?: LiveEventTranscription[];
	readonly vanityUrl?: boolean;
}
export interface LiveEventTranscription {
	readonly inputTrackSelection?: LiveEventInputTrackSelection[];
	readonly language?: string;
	readonly outputTranscriptionTrack?: LiveEventOutputTranscriptionTrack;
}
export interface LiveOutputProperties {
	readonly archiveWindowLength: string;
	readonly assetName: string;
	readonly created?: string;
	readonly description?: string;
	readonly hls?: Hls;
	readonly lastModified?: string;
	readonly manifestName?: string;
	readonly outputSnapTime?: number;
	readonly provisioningState?: string;
	readonly resourceState?: "Creating" | "Deleting" | "Running";
}
export interface MediaFilterProperties {
	readonly firstQuality?: FirstQuality;
	readonly presentationTimeRange?: PresentationTimeRange;
	readonly tracks?: FilterTrackSelection[];
}
export interface MediaServiceProperties {
	readonly mediaServiceId?: string;
	readonly storageAccounts?: StorageAccount[];
}
export interface NoEncryption {
	readonly enabledProtocols?: EnabledProtocols;
}
export interface OutputFile {
	readonly labels: string[];
}
export interface Overlay {
	readonly audioGainLevel?: number;
	readonly end?: string;
	readonly fadeInDuration?: string;
	readonly fadeOutDuration?: string;
	readonly inputLabel: string;
	readonly start?: string;
}
export interface PngLayer {
	readonly "@odata.type": string;
	readonly height?: string;
	readonly label?: string;
	readonly width?: string;
}
export interface PresentationTimeRange {
	readonly endTimestamp?: number;
	readonly forceEndTimestamp?: boolean;
	readonly liveBackoffDuration?: number;
	readonly presentationWindowDuration?: number;
	readonly startTimestamp?: number;
	readonly timescale?: number;
}
export interface Preset {}
export interface Rectangle {
	readonly height?: string;
	readonly left?: string;
	readonly top?: string;
	readonly width?: string;
}
export interface StorageAccount {
	readonly id?: string;
	readonly type: "Primary" | "Secondary";
}
export interface StreamingEndpointAccessControl {
	readonly akamai?: AkamaiAccessControl;
	readonly ip?: IPAccessControl;
}
export interface StreamingEndpointProperties {
	readonly accessControl?: StreamingEndpointAccessControl;
	readonly availabilitySetName?: string;
	readonly cdnEnabled?: boolean;
	readonly cdnProfile?: string;
	readonly cdnProvider?: string;
	readonly created?: string;
	readonly crossSiteAccessPolicies?: CrossSiteAccessPolicies;
	readonly customHostNames?: string[];
	readonly description?: string;
	readonly freeTrialEndTime?: string;
	readonly hostName?: string;
	readonly lastModified?: string;
	readonly maxCacheAge?: number;
	readonly provisioningState?: string;
	readonly resourceState?: "Deleting" | "Running" | "Scaling" | "Starting" | "Stopped" | "Stopping";
	readonly scaleUnits: number;
}
export interface StreamingLocatorContentKey {
	readonly id: string;
	readonly labelReferenceInStreamingPolicy?: string;
	readonly policyName?: string;
	readonly tracks?: TrackSelection[];
	readonly type?: "CommonEncryptionCbcs" | "CommonEncryptionCenc" | "EnvelopeEncryption";
	readonly value?: string;
}
export interface StreamingLocatorProperties {
	readonly alternativeMediaId?: string;
	readonly assetName: string;
	readonly contentKeys?: StreamingLocatorContentKey[];
	readonly created?: string;
	readonly defaultContentKeyPolicyName?: string;
	readonly endTime?: string;
	readonly filters?: string[];
	readonly startTime?: string;
	readonly streamingLocatorId?: string;
	readonly streamingPolicyName: string;
}
export interface StreamingPath {
	readonly encryptionScheme: "CommonEncryptionCbcs" | "CommonEncryptionCenc" | "EnvelopeEncryption" | "NoEncryption";
	readonly paths?: string[];
	readonly streamingProtocol: "Dash" | "Download" | "Hls" | "SmoothStreaming";
}
export interface StreamingPolicyContentKey {
	readonly label?: string;
	readonly policyName?: string;
	readonly tracks?: TrackSelection[];
}
export interface StreamingPolicyContentKeys {
	readonly defaultKey?: DefaultKey;
	readonly keyToTrackMappings?: StreamingPolicyContentKey[];
}
export interface StreamingPolicyFairPlayConfiguration {
	readonly allowPersistentLicense: boolean;
	readonly customLicenseAcquisitionUrlTemplate?: string;
}
export interface StreamingPolicyPlayReadyConfiguration {
	readonly customLicenseAcquisitionUrlTemplate?: string;
	readonly playReadyCustomAttributes?: string;
}
export interface StreamingPolicyProperties {
	readonly commonEncryptionCbcs?: CommonEncryptionCbcs;
	readonly commonEncryptionCenc?: CommonEncryptionCenc;
	readonly created?: string;
	readonly defaultContentKeyPolicyName?: string;
	readonly envelopeEncryption?: EnvelopeEncryption;
	readonly noEncryption?: NoEncryption;
}
export interface StreamingPolicyWidevineConfiguration {
	readonly customLicenseAcquisitionUrlTemplate?: string;
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export interface TrackPropertyCondition {
	readonly operation: "Equal" | "Unknown";
	readonly property: "FourCC" | "Unknown";
	readonly value?: string;
}
export interface TrackSelection {
	readonly trackSelections?: TrackPropertyCondition[];
}
export interface TransformOutput {
	readonly onError?: "ContinueJob" | "StopProcessingJob";
	readonly preset: Preset;
	readonly relativePriority?: "High" | "Low" | "Normal";
}
export interface TransformProperties {
	readonly created?: string;
	readonly description?: string;
	readonly lastModified?: string;
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

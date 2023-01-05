import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class locations_mediaServicesOperationResults
	extends ArmResource<locations_mediaServicesOperationResultsComponentInputs>
	implements locations_mediaServicesOperationResultsComponentOutputs
{
	constructor(entity: ADKEntity, options: locations_mediaServicesOperationResultsComponentInputs) {
		super(entity, options.name, "Microsoft.Media/locations/mediaServicesOperationResults", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Media/locations/mediaServicesOperationResults";
}
export interface locations_mediaServicesOperationResultsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Media/locations/mediaServicesOperationResults";
}
export interface locations_mediaServicesOperationResultsComponentInputs {
	readonly identity?: MediaServiceIdentity;
	readonly location?: string;
	readonly name: string;
	readonly properties?: MediaServiceProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class mediaservices extends ArmResource<mediaservicesComponentInputs> implements mediaservicesComponentOutputs {
	constructor(entity: ADKEntity, options: mediaservicesComponentInputs) {
		super(entity, options.name, "Microsoft.Media/mediaservices", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Media/mediaservices";
}
export interface mediaservicesComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Media/mediaservices";
}
export interface mediaservicesComponentInputs {
	readonly identity?: MediaServiceIdentity;
	readonly location: string;
	readonly name: string;
	readonly properties?: MediaServiceProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class mediaServices_accountFilters
	extends ArmResource<mediaServices_accountFiltersComponentInputs>
	implements mediaServices_accountFiltersComponentOutputs
{
	constructor(entity: ADKEntity, options: mediaServices_accountFiltersComponentInputs) {
		super(entity, options.name, "Microsoft.Media/mediaServices/accountFilters", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Media/mediaServices/accountFilters";
}
export interface mediaServices_accountFiltersComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Media/mediaServices/accountFilters";
}
export interface mediaServices_accountFiltersComponentInputs {
	readonly name: string;
	readonly properties?: MediaFilterProperties;
	readonly systemData?: SystemData;
}
export class mediaServices_assets
	extends ArmResource<mediaServices_assetsComponentInputs>
	implements mediaServices_assetsComponentOutputs
{
	constructor(entity: ADKEntity, options: mediaServices_assetsComponentInputs) {
		super(entity, options.name, "Microsoft.Media/mediaServices/assets", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Media/mediaServices/assets";
}
export interface mediaServices_assetsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Media/mediaServices/assets";
}
export interface mediaServices_assetsComponentInputs {
	readonly name: string;
	readonly properties?: AssetProperties;
	readonly systemData?: SystemData;
}
export class mediaServices_assets_assetFilters
	extends ArmResource<mediaServices_assets_assetFiltersComponentInputs>
	implements mediaServices_assets_assetFiltersComponentOutputs
{
	constructor(entity: ADKEntity, options: mediaServices_assets_assetFiltersComponentInputs) {
		super(entity, options.name, "Microsoft.Media/mediaServices/assets/assetFilters", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Media/mediaServices/assets/assetFilters";
}
export interface mediaServices_assets_assetFiltersComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Media/mediaServices/assets/assetFilters";
}
export interface mediaServices_assets_assetFiltersComponentInputs {
	readonly name: string;
	readonly properties?: MediaFilterProperties;
	readonly systemData?: SystemData;
}
export class mediaServices_assets_tracks
	extends ArmResource<mediaServices_assets_tracksComponentInputs>
	implements mediaServices_assets_tracksComponentOutputs
{
	constructor(entity: ADKEntity, options: mediaServices_assets_tracksComponentInputs) {
		super(entity, options.name, "Microsoft.Media/mediaServices/assets/tracks", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Media/mediaServices/assets/tracks";
}
export interface mediaServices_assets_tracksComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Media/mediaServices/assets/tracks";
}
export interface mediaServices_assets_tracksComponentInputs {
	readonly name: string;
	readonly properties?: AssetTrackProperties;
}
export class mediaServices_assets_tracks_operationResults
	extends ArmResource<mediaServices_assets_tracks_operationResultsComponentInputs>
	implements mediaServices_assets_tracks_operationResultsComponentOutputs
{
	constructor(entity: ADKEntity, options: mediaServices_assets_tracks_operationResultsComponentInputs) {
		super(entity, options.name, "Microsoft.Media/mediaServices/assets/tracks/operationResults", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Media/mediaServices/assets/tracks/operationResults";
}
export interface mediaServices_assets_tracks_operationResultsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Media/mediaServices/assets/tracks/operationResults";
}
export interface mediaServices_assets_tracks_operationResultsComponentInputs {
	readonly name: string;
	readonly properties?: AssetTrackProperties;
}
export class mediaServices_contentKeyPolicies
	extends ArmResource<mediaServices_contentKeyPoliciesComponentInputs>
	implements mediaServices_contentKeyPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: mediaServices_contentKeyPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.Media/mediaServices/contentKeyPolicies", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Media/mediaServices/contentKeyPolicies";
}
export interface mediaServices_contentKeyPoliciesComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Media/mediaServices/contentKeyPolicies";
}
export interface mediaServices_contentKeyPoliciesComponentInputs {
	readonly name: string;
	readonly properties?: ContentKeyPolicyProperties;
	readonly systemData?: SystemData;
}
export class mediaservices_liveEvents
	extends ArmResource<mediaservices_liveEventsComponentInputs>
	implements mediaservices_liveEventsComponentOutputs
{
	constructor(entity: ADKEntity, options: mediaservices_liveEventsComponentInputs) {
		super(entity, options.name, "Microsoft.Media/mediaservices/liveEvents", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Media/mediaservices/liveEvents";
}
export interface mediaservices_liveEventsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Media/mediaservices/liveEvents";
}
export interface mediaservices_liveEventsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: LiveEventProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class mediaservices_liveEvents_liveOutputs
	extends ArmResource<mediaservices_liveEvents_liveOutputsComponentInputs>
	implements mediaservices_liveEvents_liveOutputsComponentOutputs
{
	constructor(entity: ADKEntity, options: mediaservices_liveEvents_liveOutputsComponentInputs) {
		super(entity, options.name, "Microsoft.Media/mediaservices/liveEvents/liveOutputs", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Media/mediaservices/liveEvents/liveOutputs";
}
export interface mediaservices_liveEvents_liveOutputsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Media/mediaservices/liveEvents/liveOutputs";
}
export interface mediaservices_liveEvents_liveOutputsComponentInputs {
	readonly name: string;
	readonly properties?: LiveOutputProperties;
	readonly systemData?: SystemData;
}
export class mediaservices_privateEndpointConnections
	extends ArmResource<mediaservices_privateEndpointConnectionsComponentInputs>
	implements mediaservices_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: mediaservices_privateEndpointConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Media/mediaservices/privateEndpointConnections", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Media/mediaservices/privateEndpointConnections";
}
export interface mediaservices_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Media/mediaservices/privateEndpointConnections";
}
export interface mediaservices_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties;
}
export class mediaservices_privateLinkResources
	extends ArmResource<mediaservices_privateLinkResourcesComponentInputs>
	implements mediaservices_privateLinkResourcesComponentOutputs
{
	constructor(entity: ADKEntity, options: mediaservices_privateLinkResourcesComponentInputs) {
		super(entity, options.name, "Microsoft.Media/mediaservices/privateLinkResources", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Media/mediaservices/privateLinkResources";
}
export interface mediaservices_privateLinkResourcesComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Media/mediaservices/privateLinkResources";
}
export interface mediaservices_privateLinkResourcesComponentInputs {
	readonly name: string;
	readonly properties?: PrivateLinkResourceProperties;
}
export class mediaservices_streamingEndpoints
	extends ArmResource<mediaservices_streamingEndpointsComponentInputs>
	implements mediaservices_streamingEndpointsComponentOutputs
{
	constructor(entity: ADKEntity, options: mediaservices_streamingEndpointsComponentInputs) {
		super(entity, options.name, "Microsoft.Media/mediaservices/streamingEndpoints", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Media/mediaservices/streamingEndpoints";
}
export interface mediaservices_streamingEndpointsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Media/mediaservices/streamingEndpoints";
}
export interface mediaservices_streamingEndpointsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: StreamingEndpointProperties;
	readonly sku?: ArmStreamingEndpointCurrentSku;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class mediaServices_streamingLocators
	extends ArmResource<mediaServices_streamingLocatorsComponentInputs>
	implements mediaServices_streamingLocatorsComponentOutputs
{
	constructor(entity: ADKEntity, options: mediaServices_streamingLocatorsComponentInputs) {
		super(entity, options.name, "Microsoft.Media/mediaServices/streamingLocators", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Media/mediaServices/streamingLocators";
}
export interface mediaServices_streamingLocatorsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Media/mediaServices/streamingLocators";
}
export interface mediaServices_streamingLocatorsComponentInputs {
	readonly name: string;
	readonly properties?: StreamingLocatorProperties;
	readonly systemData?: SystemData;
}
export class mediaServices_streamingPolicies
	extends ArmResource<mediaServices_streamingPoliciesComponentInputs>
	implements mediaServices_streamingPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: mediaServices_streamingPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.Media/mediaServices/streamingPolicies", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Media/mediaServices/streamingPolicies";
}
export interface mediaServices_streamingPoliciesComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Media/mediaServices/streamingPolicies";
}
export interface mediaServices_streamingPoliciesComponentInputs {
	readonly name: string;
	readonly properties?: StreamingPolicyProperties;
	readonly systemData?: SystemData;
}
export class mediaServices_transforms
	extends ArmResource<mediaServices_transformsComponentInputs>
	implements mediaServices_transformsComponentOutputs
{
	constructor(entity: ADKEntity, options: mediaServices_transformsComponentInputs) {
		super(entity, options.name, "Microsoft.Media/mediaServices/transforms", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Media/mediaServices/transforms";
}
export interface mediaServices_transformsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Media/mediaServices/transforms";
}
export interface mediaServices_transformsComponentInputs {
	readonly name: string;
	readonly properties?: TransformProperties;
	readonly systemData?: SystemData;
}
export class mediaServices_transforms_jobs
	extends ArmResource<mediaServices_transforms_jobsComponentInputs>
	implements mediaServices_transforms_jobsComponentOutputs
{
	constructor(entity: ADKEntity, options: mediaServices_transforms_jobsComponentInputs) {
		super(entity, options.name, "Microsoft.Media/mediaServices/transforms/jobs", "2021-11-01", options);
	}
	public readonly apiVersion: "2021-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Media/mediaServices/transforms/jobs";
}
export interface mediaServices_transforms_jobsComponentOutputs {
	readonly apiVersion: "2021-11-01";
	readonly id: string;
	readonly type: "Microsoft.Media/mediaServices/transforms/jobs";
}
export interface mediaServices_transforms_jobsComponentInputs {
	readonly name: string;
	readonly properties?: JobProperties;
	readonly systemData?: SystemData;
}
export function listContainerSas(resource: mediaServices_assets, input: ListContainerSasInput): AssetContainerSas {
	if (resource.apiVersion !== "2021-11-01") {
		throw new Error(`listContainerSas is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Media/mediaServices/assets") {
		throw new Error(`listContainerSas is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listContentKeys(resource: mediaServices_streamingLocators): ListContentKeysResponse {
	if (resource.apiVersion !== "2021-11-01") {
		throw new Error(`listContentKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Media/mediaServices/streamingLocators") {
		throw new Error(`listContentKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listEdgePolicies(resource: mediaservices, input: ListEdgePoliciesInput): EdgePolicies {
	if (resource.apiVersion !== "2021-11-01") {
		throw new Error(`listEdgePolicies is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Media/mediaservices") {
		throw new Error(`listEdgePolicies is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listPaths(resource: mediaServices_streamingLocators): ListPathsResponse {
	if (resource.apiVersion !== "2021-11-01") {
		throw new Error(`listPaths is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Media/mediaServices/streamingLocators") {
		throw new Error(`listPaths is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listStreamingLocators(resource: mediaServices_assets): ListStreamingLocatorsResponse {
	if (resource.apiVersion !== "2021-11-01") {
		throw new Error(`listStreamingLocators is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Media/mediaServices/assets") {
		throw new Error(`listStreamingLocators is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AccessControl {
	readonly defaultAction?: "Allow" | "Deny";
	readonly ipAllowList?: string[];
}
export interface AccountEncryption {
	readonly identity?: ResourceIdentity;
	readonly keyVaultProperties?: KeyVaultProperties;
	readonly status?: string;
	readonly type: "CustomerKey" | "SystemKey";
}
export interface AkamaiAccessControl {
	readonly akamaiSignatureHeaderAuthenticationKeyList?: AkamaiSignatureHeaderAuthenticationKey[];
}
export interface AkamaiSignatureHeaderAuthenticationKey {
	readonly base64Key?: string;
	readonly expiration?: string;
	readonly identifier?: string;
}
export interface ArmStreamingEndpointCurrentSku {
	readonly capacity?: number;
	readonly name?: string;
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
export interface AssetTrackProperties {
	readonly provisioningState?: "Failed" | "InProgress" | "Succeeded";
	readonly track?: TrackBase;
}
export interface AudioAnalyzerPresetExperimentalOptions {
	readonly [key: string]: string;
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
export interface ContentKeyPolicyFairPlayOfflineRentalConfiguration {
	readonly playbackDurationSeconds: number;
	readonly storageDurationSeconds: number;
}
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
export interface EdgePolicies {
	readonly usageDataCollectionPolicy?: EdgeUsageDataCollectionPolicy;
}
export interface EdgeUsageDataCollectionPolicy {
	readonly dataCollectionFrequency?: string;
	readonly dataReportingFrequency?: string;
	readonly eventHubDetails?: EdgeUsageDataEventHub;
	readonly maxAllowedUnreportedUsageDuration?: string;
}
export interface EdgeUsageDataEventHub {
	readonly name?: string;
	readonly namespace?: string;
	readonly token?: string;
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
export interface FaceDetectorPresetExperimentalOptions {
	readonly [key: string]: string;
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
	readonly adaptiveBFrame?: boolean;
	readonly bFrames?: number;
	readonly bitrate: number;
	readonly bufferWindow?: string;
	readonly crf?: number;
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
export interface H265Layer {
	readonly adaptiveBFrame?: boolean;
	readonly bFrames?: number;
	readonly bitrate: number;
	readonly bufferWindow?: string;
	readonly crf?: number;
	readonly frameRate?: string;
	readonly height?: string;
	readonly label?: string;
	readonly level?: string;
	readonly maxBitrate?: number;
	readonly profile?: "Auto" | "Main" | "Main10";
	readonly referenceFrames?: number;
	readonly slices?: number;
	readonly width?: string;
}
export interface Hls {
	readonly fragmentsPerTsSegment?: number;
}
export interface HlsSettings {
	readonly characteristics?: string;
	readonly default?: boolean;
	readonly forced?: boolean;
}
export interface InputDefinition {
	readonly includedTracks?: TrackDescriptor[];
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
export interface JobInputClip {
	readonly end?: ClipTime;
	readonly files?: string[];
	readonly inputDefinitions?: InputDefinition[];
	readonly label?: string;
	readonly start?: ClipTime;
}
export interface JobOutput {
	readonly endTime?: string;
	readonly error?: JobError;
	readonly label?: string;
	readonly presetOverride?: Preset;
	readonly progress?: number;
	readonly startTime?: string;
	readonly state?: "Canceled" | "Canceling" | "Error" | "Finished" | "Processing" | "Queued" | "Scheduled";
}
export interface JobProperties {
	readonly correlationData?: JobPropertiesCorrelationData;
	readonly created?: string;
	readonly description?: string;
	readonly endTime?: string;
	readonly input: JobInput;
	readonly lastModified?: string;
	readonly outputs: JobOutput[];
	readonly priority?: "High" | "Low" | "Normal";
	readonly startTime?: string;
	readonly state?: "Canceled" | "Canceling" | "Error" | "Finished" | "Processing" | "Queued" | "Scheduled";
}
export interface JobPropertiesCorrelationData {
	readonly [key: string]: string;
}
export interface JpgLayer {
	readonly height?: string;
	readonly label?: string;
	readonly quality?: number;
	readonly width?: string;
}
export interface KeyDelivery {
	readonly accessControl?: AccessControl;
}
export interface KeyVaultProperties {
	readonly currentKeyIdentifier?: string;
	readonly keyIdentifier?: string;
}
export interface ListContainerSasInput {
	readonly expiryTime?: string;
	readonly permissions?: "Read" | "ReadWrite" | "ReadWriteDelete";
}
export interface ListContentKeysResponse {
	readonly contentKeys?: StreamingLocatorContentKey[];
}
export interface ListEdgePoliciesInput {
	readonly deviceId?: string;
}
export interface ListPathsResponse {
	readonly downloadPaths?: string[];
	readonly streamingPaths?: StreamingPath[];
}
export interface ListStreamingLocatorsResponse {
	readonly streamingLocators?: AssetStreamingLocator[];
}
export interface LiveEventEncoding {
	readonly encodingType?: "None" | "PassthroughBasic" | "PassthroughStandard" | "Premium1080p" | "Standard";
	readonly keyFrameInterval?: string;
	readonly presetName?: string;
	readonly stretchMode?: "AutoFit" | "AutoSize" | "None";
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
	readonly hostnamePrefix?: string;
	readonly input: LiveEventInput;
	readonly lastModified?: string;
	readonly preview?: LiveEventPreview;
	readonly provisioningState?: string;
	readonly resourceState?: "Allocating" | "Deleting" | "Running" | "StandBy" | "Starting" | "Stopped" | "Stopping";
	readonly streamOptions?: "Default" | "LowLatency" | "LowLatencyV2"[];
	readonly transcriptions?: LiveEventTranscription[];
	readonly useStaticHostname?: boolean;
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
export interface MediaServiceIdentity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type: string;
	readonly userAssignedIdentities?: UserAssignedManagedIdentities;
}
export interface MediaServiceProperties {
	readonly encryption?: AccountEncryption;
	readonly keyDelivery?: KeyDelivery;
	readonly mediaServiceId?: string;
	readonly privateEndpointConnections?: PrivateEndpointConnection[];
	readonly provisioningState?: "Failed" | "InProgress" | "Succeeded";
	readonly publicNetworkAccess?: "Disabled" | "Enabled";
	readonly storageAccounts?: StorageAccount[];
	readonly storageAuthentication?: "ManagedIdentity" | "System";
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
export interface PresetConfigurations {
	readonly complexity?: "Balanced" | "Quality" | "Speed";
	readonly interleaveOutput?: "InterleavedOutput" | "NonInterleavedOutput";
	readonly keyFrameIntervalInSeconds?: number;
	readonly maxBitrateBps?: number;
	readonly maxHeight?: number;
	readonly maxLayers?: number;
	readonly minBitrateBps?: number;
	readonly minHeight?: number;
}
export interface PrivateEndpoint {
	readonly id?: string;
}
export interface PrivateEndpointConnection {
	readonly id?: string;
	readonly name?: string;
	readonly properties?: PrivateEndpointConnectionProperties;
	readonly type?: string;
}
export interface PrivateEndpointConnectionProperties {
	readonly privateEndpoint?: PrivateEndpoint;
	readonly privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Succeeded";
}
export interface PrivateLinkResourceProperties {
	readonly groupId?: string;
	readonly requiredMembers?: string[];
	readonly requiredZoneNames?: string[];
}
export interface PrivateLinkServiceConnectionState {
	readonly actionsRequired?: string;
	readonly description?: string;
	readonly status?: "Approved" | "Pending" | "Rejected";
}
export interface Rectangle {
	readonly height?: string;
	readonly left?: string;
	readonly top?: string;
	readonly width?: string;
}
export interface ResourceIdentity {
	readonly userAssignedIdentity?: string;
	readonly useSystemAssignedIdentity: boolean;
}
export interface StorageAccount {
	readonly id?: string;
	readonly identity?: ResourceIdentity;
	readonly status?: string;
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
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface TrackBase {}
export interface TrackDescriptor {}
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
export interface UserAssignedManagedIdentities {
	readonly [key: string]: UserAssignedManagedIdentity;
}
export interface UserAssignedManagedIdentity {
	readonly clientId?: string;
	readonly principalId?: string;
}
export default {
	"locations/mediaServicesOperationResults": locations_mediaServicesOperationResults,
	mediaservices: mediaservices,
	"mediaServices/accountFilters": mediaServices_accountFilters,
	"mediaServices/assets": mediaServices_assets,
	"mediaServices/assets/assetFilters": mediaServices_assets_assetFilters,
	"mediaServices/assets/tracks": mediaServices_assets_tracks,
	"mediaServices/assets/tracks/operationResults": mediaServices_assets_tracks_operationResults,
	"mediaServices/contentKeyPolicies": mediaServices_contentKeyPolicies,
	"mediaservices/liveEvents": mediaservices_liveEvents,
	"mediaservices/liveEvents/liveOutputs": mediaservices_liveEvents_liveOutputs,
	"mediaservices/privateEndpointConnections": mediaservices_privateEndpointConnections,
	"mediaservices/privateLinkResources": mediaservices_privateLinkResources,
	"mediaservices/streamingEndpoints": mediaservices_streamingEndpoints,
	"mediaServices/streamingLocators": mediaServices_streamingLocators,
	"mediaServices/streamingPolicies": mediaServices_streamingPolicies,
	"mediaServices/transforms": mediaServices_transforms,
	"mediaServices/transforms/jobs": mediaServices_transforms_jobs,
};

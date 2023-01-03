import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class mediaServices_accountFilters
	extends ArmResource<mediaServices_accountFiltersComponentInputs>
	implements mediaServices_accountFiltersComponentOutputs
{
	constructor(entity: ADKEntity, options: mediaServices_accountFiltersComponentInputs) {
		super(entity, options.name, "Microsoft.Media/mediaServices/accountFilters", "2022-08-01", options);
	}
	public readonly apiVersion: "2022-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Media/mediaServices/accountFilters";
}
export interface mediaServices_accountFiltersComponentOutputs {
	readonly apiVersion: "2022-08-01";
	readonly id: string;
	readonly type: "Microsoft.Media/mediaServices/accountFilters";
}
export interface mediaServices_accountFiltersComponentInputs {
	readonly name: string;
	readonly properties?: MediaFilterProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class mediaServices_assets
	extends ArmResource<mediaServices_assetsComponentInputs>
	implements mediaServices_assetsComponentOutputs
{
	constructor(entity: ADKEntity, options: mediaServices_assetsComponentInputs) {
		super(entity, options.name, "Microsoft.Media/mediaServices/assets", "2022-08-01", options);
	}
	public readonly apiVersion: "2022-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Media/mediaServices/assets";
}
export interface mediaServices_assetsComponentOutputs {
	readonly apiVersion: "2022-08-01";
	readonly id: string;
	readonly type: "Microsoft.Media/mediaServices/assets";
}
export interface mediaServices_assetsComponentInputs {
	readonly name: string;
	readonly properties?: AssetProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class mediaServices_assets_assetFilters
	extends ArmResource<mediaServices_assets_assetFiltersComponentInputs>
	implements mediaServices_assets_assetFiltersComponentOutputs
{
	constructor(entity: ADKEntity, options: mediaServices_assets_assetFiltersComponentInputs) {
		super(entity, options.name, "Microsoft.Media/mediaServices/assets/assetFilters", "2022-08-01", options);
	}
	public readonly apiVersion: "2022-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Media/mediaServices/assets/assetFilters";
}
export interface mediaServices_assets_assetFiltersComponentOutputs {
	readonly apiVersion: "2022-08-01";
	readonly id: string;
	readonly type: "Microsoft.Media/mediaServices/assets/assetFilters";
}
export interface mediaServices_assets_assetFiltersComponentInputs {
	readonly name: string;
	readonly properties?: MediaFilterProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class mediaServices_assets_tracks
	extends ArmResource<mediaServices_assets_tracksComponentInputs>
	implements mediaServices_assets_tracksComponentOutputs
{
	constructor(entity: ADKEntity, options: mediaServices_assets_tracksComponentInputs) {
		super(entity, options.name, "Microsoft.Media/mediaServices/assets/tracks", "2022-08-01", options);
	}
	public readonly apiVersion: "2022-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Media/mediaServices/assets/tracks";
}
export interface mediaServices_assets_tracksComponentOutputs {
	readonly apiVersion: "2022-08-01";
	readonly id: string;
	readonly type: "Microsoft.Media/mediaServices/assets/tracks";
}
export interface mediaServices_assets_tracksComponentInputs {
	readonly name: string;
	readonly properties?: AssetTrackProperties | undefined;
}
export class mediaServices_assets_tracks_operationResults
	extends ArmResource<mediaServices_assets_tracks_operationResultsComponentInputs>
	implements mediaServices_assets_tracks_operationResultsComponentOutputs
{
	constructor(entity: ADKEntity, options: mediaServices_assets_tracks_operationResultsComponentInputs) {
		super(entity, options.name, "Microsoft.Media/mediaServices/assets/tracks/operationResults", "2022-08-01", options);
	}
	public readonly apiVersion: "2022-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Media/mediaServices/assets/tracks/operationResults";
}
export interface mediaServices_assets_tracks_operationResultsComponentOutputs {
	readonly apiVersion: "2022-08-01";
	readonly id: string;
	readonly type: "Microsoft.Media/mediaServices/assets/tracks/operationResults";
}
export interface mediaServices_assets_tracks_operationResultsComponentInputs {
	readonly name: string;
	readonly properties?: AssetTrackProperties | undefined;
}
export class mediaServices_contentKeyPolicies
	extends ArmResource<mediaServices_contentKeyPoliciesComponentInputs>
	implements mediaServices_contentKeyPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: mediaServices_contentKeyPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.Media/mediaServices/contentKeyPolicies", "2022-08-01", options);
	}
	public readonly apiVersion: "2022-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Media/mediaServices/contentKeyPolicies";
}
export interface mediaServices_contentKeyPoliciesComponentOutputs {
	readonly apiVersion: "2022-08-01";
	readonly id: string;
	readonly type: "Microsoft.Media/mediaServices/contentKeyPolicies";
}
export interface mediaServices_contentKeyPoliciesComponentInputs {
	readonly name: string;
	readonly properties?: ContentKeyPolicyProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class mediaservices_liveEvents
	extends ArmResource<mediaservices_liveEventsComponentInputs>
	implements mediaservices_liveEventsComponentOutputs
{
	constructor(entity: ADKEntity, options: mediaservices_liveEventsComponentInputs) {
		super(entity, options.name, "Microsoft.Media/mediaservices/liveEvents", "2022-08-01", options);
	}
	public readonly apiVersion: "2022-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Media/mediaservices/liveEvents";
}
export interface mediaservices_liveEventsComponentOutputs {
	readonly apiVersion: "2022-08-01";
	readonly id: string;
	readonly type: "Microsoft.Media/mediaservices/liveEvents";
}
export interface mediaservices_liveEventsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: LiveEventProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class mediaservices_liveEvents_liveOutputs
	extends ArmResource<mediaservices_liveEvents_liveOutputsComponentInputs>
	implements mediaservices_liveEvents_liveOutputsComponentOutputs
{
	constructor(entity: ADKEntity, options: mediaservices_liveEvents_liveOutputsComponentInputs) {
		super(entity, options.name, "Microsoft.Media/mediaservices/liveEvents/liveOutputs", "2022-08-01", options);
	}
	public readonly apiVersion: "2022-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Media/mediaservices/liveEvents/liveOutputs";
}
export interface mediaservices_liveEvents_liveOutputsComponentOutputs {
	readonly apiVersion: "2022-08-01";
	readonly id: string;
	readonly type: "Microsoft.Media/mediaservices/liveEvents/liveOutputs";
}
export interface mediaservices_liveEvents_liveOutputsComponentInputs {
	readonly name: string;
	readonly properties?: LiveOutputProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class mediaservices_liveEvents_liveOutputs_operationLocations
	extends ArmResource<mediaservices_liveEvents_liveOutputs_operationLocationsComponentInputs>
	implements mediaservices_liveEvents_liveOutputs_operationLocationsComponentOutputs
{
	constructor(entity: ADKEntity, options: mediaservices_liveEvents_liveOutputs_operationLocationsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Media/mediaservices/liveEvents/liveOutputs/operationLocations",
			"2022-08-01",
			options,
		);
	}
	public readonly apiVersion: "2022-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Media/mediaservices/liveEvents/liveOutputs/operationLocations";
}
export interface mediaservices_liveEvents_liveOutputs_operationLocationsComponentOutputs {
	readonly apiVersion: "2022-08-01";
	readonly id: string;
	readonly type: "Microsoft.Media/mediaservices/liveEvents/liveOutputs/operationLocations";
}
export interface mediaservices_liveEvents_liveOutputs_operationLocationsComponentInputs {
	readonly name: string;
	readonly properties?: LiveOutputProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class mediaservices_liveEvents_operationLocations
	extends ArmResource<mediaservices_liveEvents_operationLocationsComponentInputs>
	implements mediaservices_liveEvents_operationLocationsComponentOutputs
{
	constructor(entity: ADKEntity, options: mediaservices_liveEvents_operationLocationsComponentInputs) {
		super(entity, options.name, "Microsoft.Media/mediaservices/liveEvents/operationLocations", "2022-08-01", options);
	}
	public readonly apiVersion: "2022-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Media/mediaservices/liveEvents/operationLocations";
}
export interface mediaservices_liveEvents_operationLocationsComponentOutputs {
	readonly apiVersion: "2022-08-01";
	readonly id: string;
	readonly type: "Microsoft.Media/mediaservices/liveEvents/operationLocations";
}
export interface mediaservices_liveEvents_operationLocationsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: LiveEventProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class mediaservices_streamingEndpoints
	extends ArmResource<mediaservices_streamingEndpointsComponentInputs>
	implements mediaservices_streamingEndpointsComponentOutputs
{
	constructor(entity: ADKEntity, options: mediaservices_streamingEndpointsComponentInputs) {
		super(entity, options.name, "Microsoft.Media/mediaservices/streamingEndpoints", "2022-08-01", options);
	}
	public readonly apiVersion: "2022-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Media/mediaservices/streamingEndpoints";
}
export interface mediaservices_streamingEndpointsComponentOutputs {
	readonly apiVersion: "2022-08-01";
	readonly id: string;
	readonly type: "Microsoft.Media/mediaservices/streamingEndpoints";
}
export interface mediaservices_streamingEndpointsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: StreamingEndpointProperties | undefined;
	readonly sku?: ArmStreamingEndpointCurrentSku | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class mediaservices_streamingEndpoints_operationLocations
	extends ArmResource<mediaservices_streamingEndpoints_operationLocationsComponentInputs>
	implements mediaservices_streamingEndpoints_operationLocationsComponentOutputs
{
	constructor(entity: ADKEntity, options: mediaservices_streamingEndpoints_operationLocationsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Media/mediaservices/streamingEndpoints/operationLocations",
			"2022-08-01",
			options,
		);
	}
	public readonly apiVersion: "2022-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Media/mediaservices/streamingEndpoints/operationLocations";
}
export interface mediaservices_streamingEndpoints_operationLocationsComponentOutputs {
	readonly apiVersion: "2022-08-01";
	readonly id: string;
	readonly type: "Microsoft.Media/mediaservices/streamingEndpoints/operationLocations";
}
export interface mediaservices_streamingEndpoints_operationLocationsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: StreamingEndpointProperties | undefined;
	readonly sku?: ArmStreamingEndpointCurrentSku | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class mediaServices_streamingLocators
	extends ArmResource<mediaServices_streamingLocatorsComponentInputs>
	implements mediaServices_streamingLocatorsComponentOutputs
{
	constructor(entity: ADKEntity, options: mediaServices_streamingLocatorsComponentInputs) {
		super(entity, options.name, "Microsoft.Media/mediaServices/streamingLocators", "2022-08-01", options);
	}
	public readonly apiVersion: "2022-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Media/mediaServices/streamingLocators";
}
export interface mediaServices_streamingLocatorsComponentOutputs {
	readonly apiVersion: "2022-08-01";
	readonly id: string;
	readonly type: "Microsoft.Media/mediaServices/streamingLocators";
}
export interface mediaServices_streamingLocatorsComponentInputs {
	readonly name: string;
	readonly properties?: StreamingLocatorProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class mediaServices_streamingPolicies
	extends ArmResource<mediaServices_streamingPoliciesComponentInputs>
	implements mediaServices_streamingPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: mediaServices_streamingPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.Media/mediaServices/streamingPolicies", "2022-08-01", options);
	}
	public readonly apiVersion: "2022-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Media/mediaServices/streamingPolicies";
}
export interface mediaServices_streamingPoliciesComponentOutputs {
	readonly apiVersion: "2022-08-01";
	readonly id: string;
	readonly type: "Microsoft.Media/mediaServices/streamingPolicies";
}
export interface mediaServices_streamingPoliciesComponentInputs {
	readonly name: string;
	readonly properties?: StreamingPolicyProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export function listContainerSas(resource: mediaServices_assets, input: ListContainerSasInput): AssetContainerSas {
	if (resource.apiVersion !== "2022-08-01") {
		throw new Error(`listContainerSas is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Media/mediaServices/assets") {
		throw new Error(`listContainerSas is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listContentKeys(resource: mediaServices_streamingLocators): ListContentKeysResponse {
	if (resource.apiVersion !== "2022-08-01") {
		throw new Error(`listContentKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Media/mediaServices/streamingLocators") {
		throw new Error(`listContentKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listPaths(resource: mediaServices_streamingLocators): ListPathsResponse {
	if (resource.apiVersion !== "2022-08-01") {
		throw new Error(`listPaths is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Media/mediaServices/streamingLocators") {
		throw new Error(`listPaths is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listStreamingLocators(resource: mediaServices_assets): ListStreamingLocatorsResponse {
	if (resource.apiVersion !== "2022-08-01") {
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
export interface ArmStreamingEndpointCurrentSku {
	readonly capacity?: number | undefined;
	readonly name?: string | undefined;
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
export interface AssetTrackProperties {
	readonly provisioningState?: ("Failed" | "InProgress" | "Succeeded") | undefined;
	readonly track?: TrackBase | undefined;
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
export interface ClearKeyEncryptionConfiguration {
	readonly customKeysAcquisitionUrlTemplate?: string | undefined;
}
export interface CommonEncryptionCbcs {
	readonly clearKeyEncryptionConfiguration?: ClearKeyEncryptionConfiguration | undefined;
	readonly clearTracks?: TrackSelection[] | undefined;
	readonly contentKeys?: StreamingPolicyContentKeys | undefined;
	readonly drm?: CbcsDrmConfiguration | undefined;
	readonly enabledProtocols?: EnabledProtocols | undefined;
}
export interface CommonEncryptionCenc {
	readonly clearKeyEncryptionConfiguration?: ClearKeyEncryptionConfiguration | undefined;
	readonly clearTracks?: TrackSelection[] | undefined;
	readonly contentKeys?: StreamingPolicyContentKeys | undefined;
	readonly drm?: CencDrmConfiguration | undefined;
	readonly enabledProtocols?: EnabledProtocols | undefined;
}
export interface ContentKeyPolicyConfiguration {}
export interface ContentKeyPolicyFairPlayOfflineRentalConfiguration {
	readonly playbackDurationSeconds: number;
	readonly storageDurationSeconds: number;
}
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
	readonly securityLevel?: ("SL150" | "SL2000" | "SL3000" | "Unknown") | undefined;
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
export interface DashSettings {
	readonly role?: string | undefined;
}
export interface DefaultKey {
	readonly label?: string | undefined;
	readonly policyName?: string | undefined;
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
export interface Hls {
	readonly fragmentsPerTsSegment?: number | undefined;
}
export interface HlsSettings {
	readonly characteristics?: string | undefined;
	readonly default?: boolean | undefined;
	readonly forced?: boolean | undefined;
}
export interface IPAccessControl {
	readonly allow?: IPRange[] | undefined;
}
export interface IPRange {
	readonly address?: string | undefined;
	readonly name?: string | undefined;
	readonly subnetPrefixLength?: number | undefined;
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
	readonly encodingType?:
		| ("None" | "PassthroughBasic" | "PassthroughStandard" | "Premium1080p" | "Standard")
		| undefined;
	readonly keyFrameInterval?: string | undefined;
	readonly presetName?: string | undefined;
	readonly stretchMode?: ("AutoFit" | "AutoSize" | "None") | undefined;
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
	readonly hostnamePrefix?: string | undefined;
	readonly input: LiveEventInput;
	readonly lastModified?: string | undefined;
	readonly preview?: LiveEventPreview | undefined;
	readonly provisioningState?: string | undefined;
	readonly resourceState?:
		| ("Allocating" | "Deleting" | "Running" | "StandBy" | "Starting" | "Stopped" | "Stopping")
		| undefined;
	readonly streamOptions?: ("Default" | "LowLatency" | "LowLatencyV2"[]) | undefined;
	readonly transcriptions?: LiveEventTranscription[] | undefined;
	readonly useStaticHostname?: boolean | undefined;
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
	readonly rewindWindowLength?: string | undefined;
}
export interface MediaFilterProperties {
	readonly firstQuality?: FirstQuality | undefined;
	readonly presentationTimeRange?: PresentationTimeRange | undefined;
	readonly tracks?: FilterTrackSelection[] | undefined;
}
export interface NoEncryption {
	readonly enabledProtocols?: EnabledProtocols | undefined;
}
export interface PresentationTimeRange {
	readonly endTimestamp?: number | undefined;
	readonly forceEndTimestamp?: boolean | undefined;
	readonly liveBackoffDuration?: number | undefined;
	readonly presentationWindowDuration?: number | undefined;
	readonly startTimestamp?: number | undefined;
	readonly timescale?: number | undefined;
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
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface TrackBase {}
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
export default {
	"mediaServices/accountFilters": mediaServices_accountFilters,
	"mediaServices/assets": mediaServices_assets,
	"mediaServices/assets/assetFilters": mediaServices_assets_assetFilters,
	"mediaServices/assets/tracks": mediaServices_assets_tracks,
	"mediaServices/assets/tracks/operationResults": mediaServices_assets_tracks_operationResults,
	"mediaServices/contentKeyPolicies": mediaServices_contentKeyPolicies,
	"mediaservices/liveEvents": mediaservices_liveEvents,
	"mediaservices/liveEvents/liveOutputs": mediaservices_liveEvents_liveOutputs,
	"mediaservices/liveEvents/liveOutputs/operationLocations": mediaservices_liveEvents_liveOutputs_operationLocations,
	"mediaservices/liveEvents/operationLocations": mediaservices_liveEvents_operationLocations,
	"mediaservices/streamingEndpoints": mediaservices_streamingEndpoints,
	"mediaservices/streamingEndpoints/operationLocations": mediaservices_streamingEndpoints_operationLocations,
	"mediaServices/streamingLocators": mediaServices_streamingLocators,
	"mediaServices/streamingPolicies": mediaServices_streamingPolicies,
};

import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class locations_videoAnalyzerOperationResults
	extends ArmResource<locations_videoAnalyzerOperationResultsComponentInputs>
	implements locations_videoAnalyzerOperationResultsComponentOutputs
{
	constructor(entity: ADKEntity, options: locations_videoAnalyzerOperationResultsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Media/locations/videoAnalyzerOperationResults",
			"2021-11-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Media/locations/videoAnalyzerOperationResults";
}
export interface locations_videoAnalyzerOperationResultsComponentOutputs {
	readonly apiVersion: "2021-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Media/locations/videoAnalyzerOperationResults";
}
export interface locations_videoAnalyzerOperationResultsComponentInputs {
	readonly identity?: VideoAnalyzerIdentity;
	readonly location?: string;
	readonly name: string;
	readonly properties?: VideoAnalyzerProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class videoAnalyzers extends ArmResource<videoAnalyzersComponentInputs> implements videoAnalyzersComponentOutputs {
	constructor(entity: ADKEntity, options: videoAnalyzersComponentInputs) {
		super(entity, options.name, "Microsoft.Media/videoAnalyzers", "2021-11-01-preview", options);
	}
	public readonly apiVersion: "2021-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Media/videoAnalyzers";
}
export interface videoAnalyzersComponentOutputs {
	readonly apiVersion: "2021-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Media/videoAnalyzers";
}
export interface videoAnalyzersComponentInputs {
	readonly identity?: VideoAnalyzerIdentity;
	readonly location: string;
	readonly name: string;
	readonly properties?: VideoAnalyzerProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class videoAnalyzers_accessPolicies
	extends ArmResource<videoAnalyzers_accessPoliciesComponentInputs>
	implements videoAnalyzers_accessPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: videoAnalyzers_accessPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.Media/videoAnalyzers/accessPolicies", "2021-11-01-preview", options);
	}
	public readonly apiVersion: "2021-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Media/videoAnalyzers/accessPolicies";
}
export interface videoAnalyzers_accessPoliciesComponentOutputs {
	readonly apiVersion: "2021-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Media/videoAnalyzers/accessPolicies";
}
export interface videoAnalyzers_accessPoliciesComponentInputs {
	readonly name: string;
	readonly properties?: AccessPolicyProperties;
	readonly systemData?: SystemData;
}
export class videoAnalyzers_edgeModules
	extends ArmResource<videoAnalyzers_edgeModulesComponentInputs>
	implements videoAnalyzers_edgeModulesComponentOutputs
{
	constructor(entity: ADKEntity, options: videoAnalyzers_edgeModulesComponentInputs) {
		super(entity, options.name, "Microsoft.Media/videoAnalyzers/edgeModules", "2021-11-01-preview", options);
	}
	public readonly apiVersion: "2021-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Media/videoAnalyzers/edgeModules";
}
export interface videoAnalyzers_edgeModulesComponentOutputs {
	readonly apiVersion: "2021-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Media/videoAnalyzers/edgeModules";
}
export interface videoAnalyzers_edgeModulesComponentInputs {
	readonly name: string;
	readonly properties?: EdgeModuleProperties;
	readonly systemData?: SystemData;
}
export class videoAnalyzers_livePipelines
	extends ArmResource<videoAnalyzers_livePipelinesComponentInputs>
	implements videoAnalyzers_livePipelinesComponentOutputs
{
	constructor(entity: ADKEntity, options: videoAnalyzers_livePipelinesComponentInputs) {
		super(entity, options.name, "Microsoft.Media/videoAnalyzers/livePipelines", "2021-11-01-preview", options);
	}
	public readonly apiVersion: "2021-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Media/videoAnalyzers/livePipelines";
}
export interface videoAnalyzers_livePipelinesComponentOutputs {
	readonly apiVersion: "2021-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Media/videoAnalyzers/livePipelines";
}
export interface videoAnalyzers_livePipelinesComponentInputs {
	readonly name: string;
	readonly properties?: LivePipelineProperties;
	readonly systemData?: SystemData;
}
export class videoAnalyzers_pipelineJobs
	extends ArmResource<videoAnalyzers_pipelineJobsComponentInputs>
	implements videoAnalyzers_pipelineJobsComponentOutputs
{
	constructor(entity: ADKEntity, options: videoAnalyzers_pipelineJobsComponentInputs) {
		super(entity, options.name, "Microsoft.Media/videoAnalyzers/pipelineJobs", "2021-11-01-preview", options);
	}
	public readonly apiVersion: "2021-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Media/videoAnalyzers/pipelineJobs";
}
export interface videoAnalyzers_pipelineJobsComponentOutputs {
	readonly apiVersion: "2021-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Media/videoAnalyzers/pipelineJobs";
}
export interface videoAnalyzers_pipelineJobsComponentInputs {
	readonly name: string;
	readonly properties?: PipelineJobProperties;
	readonly systemData?: SystemData;
}
export class videoAnalyzers_pipelineTopologies
	extends ArmResource<videoAnalyzers_pipelineTopologiesComponentInputs>
	implements videoAnalyzers_pipelineTopologiesComponentOutputs
{
	constructor(entity: ADKEntity, options: videoAnalyzers_pipelineTopologiesComponentInputs) {
		super(entity, options.name, "Microsoft.Media/videoAnalyzers/pipelineTopologies", "2021-11-01-preview", options);
	}
	public readonly apiVersion: "2021-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Media/videoAnalyzers/pipelineTopologies";
}
export interface videoAnalyzers_pipelineTopologiesComponentOutputs {
	readonly apiVersion: "2021-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Media/videoAnalyzers/pipelineTopologies";
}
export interface videoAnalyzers_pipelineTopologiesComponentInputs {
	readonly kind: "Batch" | "Live";
	readonly name: string;
	readonly properties?: PipelineTopologyProperties;
	readonly sku: Sku;
	readonly systemData?: SystemData;
}
export class videoAnalyzers_privateEndpointConnections
	extends ArmResource<videoAnalyzers_privateEndpointConnectionsComponentInputs>
	implements videoAnalyzers_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: videoAnalyzers_privateEndpointConnectionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Media/videoAnalyzers/privateEndpointConnections",
			"2021-11-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Media/videoAnalyzers/privateEndpointConnections";
}
export interface videoAnalyzers_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2021-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Media/videoAnalyzers/privateEndpointConnections";
}
export interface videoAnalyzers_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties;
	readonly systemData?: SystemData;
}
export class videoAnalyzers_privateEndpointConnections_operationResults
	extends ArmResource<videoAnalyzers_privateEndpointConnections_operationResultsComponentInputs>
	implements videoAnalyzers_privateEndpointConnections_operationResultsComponentOutputs
{
	constructor(entity: ADKEntity, options: videoAnalyzers_privateEndpointConnections_operationResultsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Media/videoAnalyzers/privateEndpointConnections/operationResults",
			"2021-11-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Media/videoAnalyzers/privateEndpointConnections/operationResults";
}
export interface videoAnalyzers_privateEndpointConnections_operationResultsComponentOutputs {
	readonly apiVersion: "2021-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Media/videoAnalyzers/privateEndpointConnections/operationResults";
}
export interface videoAnalyzers_privateEndpointConnections_operationResultsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties;
	readonly systemData?: SystemData;
}
export class videoAnalyzers_privateLinkResources
	extends ArmResource<videoAnalyzers_privateLinkResourcesComponentInputs>
	implements videoAnalyzers_privateLinkResourcesComponentOutputs
{
	constructor(entity: ADKEntity, options: videoAnalyzers_privateLinkResourcesComponentInputs) {
		super(entity, options.name, "Microsoft.Media/videoAnalyzers/privateLinkResources", "2021-11-01-preview", options);
	}
	public readonly apiVersion: "2021-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Media/videoAnalyzers/privateLinkResources";
}
export interface videoAnalyzers_privateLinkResourcesComponentOutputs {
	readonly apiVersion: "2021-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Media/videoAnalyzers/privateLinkResources";
}
export interface videoAnalyzers_privateLinkResourcesComponentInputs {
	readonly name: string;
	readonly properties?: PrivateLinkResourceProperties;
	readonly systemData?: SystemData;
}
export class videoAnalyzers_videos
	extends ArmResource<videoAnalyzers_videosComponentInputs>
	implements videoAnalyzers_videosComponentOutputs
{
	constructor(entity: ADKEntity, options: videoAnalyzers_videosComponentInputs) {
		super(entity, options.name, "Microsoft.Media/videoAnalyzers/videos", "2021-11-01-preview", options);
	}
	public readonly apiVersion: "2021-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Media/videoAnalyzers/videos";
}
export interface videoAnalyzers_videosComponentOutputs {
	readonly apiVersion: "2021-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Media/videoAnalyzers/videos";
}
export interface videoAnalyzers_videosComponentInputs {
	readonly name: string;
	readonly properties?: VideoProperties;
	readonly systemData?: SystemData;
}
export function listContentToken(resource: videoAnalyzers_videos): VideoContentToken {
	if (resource.apiVersion !== "2021-11-01-preview") {
		throw new Error(`listContentToken is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Media/videoAnalyzers/videos") {
		throw new Error(`listContentToken is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listProvisioningToken(
	resource: videoAnalyzers_edgeModules,
	input: ListProvisioningTokenInput,
): EdgeModuleProvisioningToken {
	if (resource.apiVersion !== "2021-11-01-preview") {
		throw new Error(`listProvisioningToken is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Media/videoAnalyzers/edgeModules") {
		throw new Error(`listProvisioningToken is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AccessPolicyProperties {
	readonly authentication?: AuthenticationBase;
	readonly role?: "Reader";
}
export interface AccountEncryption {
	readonly identity?: ResourceIdentity;
	readonly keyVaultProperties?: KeyVaultProperties;
	readonly status?: string;
	readonly type: "CustomerKey" | "SystemKey";
}
export interface AudioEncoderBase {
	readonly bitrateKbps?: string;
}
export interface AuthenticationBase {}
export interface CertificateSource {}
export interface CredentialsBase {}
export interface EdgeModuleProperties {
	readonly edgeModuleId?: string;
}
export interface EdgeModuleProvisioningToken {
	readonly expirationDate?: string;
	readonly token?: string;
}
export interface EncoderPresetBase {}
export interface Endpoint {
	readonly endpointUrl?: string;
	readonly type: "ClientApi";
}
export interface EndpointBase {
	readonly credentials: CredentialsBase;
	readonly tunnel?: TunnelBase;
	readonly url: string;
}
export interface GroupLevelAccessControl {
	readonly publicNetworkAccess?: "Disabled" | "Enabled";
}
export interface IotHub {
	readonly id: string;
	readonly identity: ResourceIdentity;
	readonly status?: string;
}
export interface KeyVaultProperties {
	readonly currentKeyIdentifier?: string;
	readonly keyIdentifier: string;
}
export interface ListProvisioningTokenInput {
	readonly expirationDate: string;
}
export interface LivePipelineProperties {
	readonly bitrateKbps: number;
	readonly description?: string;
	readonly parameters?: ParameterDefinition[];
	readonly state?: "Activating" | "Active" | "Deactivating" | "Inactive";
	readonly topologyName: string;
}
export interface NetworkAccessControl {
	readonly consumption?: GroupLevelAccessControl;
	readonly ingestion?: GroupLevelAccessControl;
	readonly integration?: GroupLevelAccessControl;
}
export interface NodeInput {
	readonly nodeName: string;
}
export interface ParameterDeclaration {
	readonly default?: string;
	readonly description?: string;
	readonly name: string;
	readonly type: "Bool" | "Double" | "Int" | "SecretString" | "String";
}
export interface ParameterDefinition {
	readonly name: string;
	readonly value?: string;
}
export interface PipelineJobError {
	readonly code?: string;
	readonly message?: string;
}
export interface PipelineJobProperties {
	readonly description?: string;
	readonly error?: PipelineJobError;
	readonly expiration?: string;
	readonly parameters?: ParameterDefinition[];
	readonly state?: "Canceled" | "Completed" | "Failed" | "Processing";
	readonly topologyName: string;
}
export interface PipelineTopologyProperties {
	readonly description?: string;
	readonly parameters?: ParameterDeclaration[];
	readonly processors?: ProcessorNodeBase[];
	readonly sinks: SinkNodeBase[];
	readonly sources: SourceNodeBase[];
}
export interface PrivateEndpoint {
	readonly id?: string;
}
export interface PrivateEndpointConnection {
	readonly id?: string;
	readonly name?: string;
	readonly properties?: PrivateEndpointConnectionProperties;
	readonly systemData?: SystemData;
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
export interface ProcessorNodeBase {
	readonly inputs: NodeInput[];
	readonly name: string;
}
export interface ResourceIdentity {
	readonly userAssignedIdentity: string;
}
export interface SinkNodeBase {
	readonly inputs: NodeInput[];
	readonly name: string;
}
export interface Sku {
	readonly name: "Batch_S1" | "Live_S1";
	readonly tier?: "Standard";
}
export interface SourceNodeBase {
	readonly name: string;
}
export interface StorageAccount {
	readonly id: string;
	readonly identity?: ResourceIdentity;
	readonly status?: string;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface TimeSequenceBase {}
export interface TlsValidationOptions {
	readonly ignoreHostname?: string;
	readonly ignoreSignature?: string;
}
export interface TokenClaim {
	readonly name: string;
	readonly value: string;
}
export interface TokenKey {
	readonly kid: string;
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export interface TunnelBase {}
export interface UserAssignedManagedIdentities {
	readonly [key: string]: UserAssignedManagedIdentity;
}
export interface UserAssignedManagedIdentity {
	readonly clientId?: string;
	readonly principalId?: string;
}
export interface VideoAnalyzerIdentity {
	readonly type: string;
	readonly userAssignedIdentities?: UserAssignedManagedIdentities;
}
export interface VideoAnalyzerProperties {
	readonly encryption?: AccountEncryption;
	readonly endpoints?: Endpoint[];
	readonly iotHubs?: IotHub[];
	readonly networkAccessControl?: NetworkAccessControl;
	readonly privateEndpointConnections?: PrivateEndpointConnection[];
	readonly provisioningState?: "Failed" | "InProgress" | "Succeeded";
	readonly publicNetworkAccess?: "Disabled" | "Enabled";
	readonly storageAccounts: StorageAccount[];
}
export interface VideoArchival {
	readonly retentionPeriod?: string;
}
export interface VideoContentToken {
	readonly expirationDate?: string;
	readonly token?: string;
}
export interface VideoContentUrls {
	readonly archiveBaseUrl?: string;
	readonly downloadUrl?: string;
	readonly previewImageUrls?: VideoPreviewImageUrls;
	readonly rtspTunnelUrl?: string;
}
export interface VideoCreationProperties {
	readonly description?: string;
	readonly retentionPeriod?: string;
	readonly segmentLength?: string;
	readonly title?: string;
}
export interface VideoEncoderBase {
	readonly bitrateKbps?: string;
	readonly frameRate?: string;
	readonly scale?: VideoScale;
}
export interface VideoFlags {
	readonly canStream: boolean;
	readonly hasData: boolean;
	readonly isInUse: boolean;
}
export interface VideoMediaInfo {
	readonly segmentLength?: string;
}
export interface VideoPreviewImageUrls {
	readonly large?: string;
	readonly medium?: string;
	readonly small?: string;
}
export interface VideoProperties {
	readonly archival?: VideoArchival;
	readonly contentUrls?: VideoContentUrls;
	readonly description?: string;
	readonly flags?: VideoFlags;
	readonly mediaInfo?: VideoMediaInfo;
	readonly title?: string;
	readonly type?: "Archive" | "File";
}
export interface VideoPublishingOptions {
	readonly disableArchive?: string;
	readonly disableRtspPublishing?: string;
}
export interface VideoScale {
	readonly height?: string;
	readonly mode?: "Pad" | "PreserveAspectRatio" | "Stretch";
	readonly width?: string;
}
export default {
	"locations/videoAnalyzerOperationResults": locations_videoAnalyzerOperationResults,
	videoAnalyzers: videoAnalyzers,
	"videoAnalyzers/accessPolicies": videoAnalyzers_accessPolicies,
	"videoAnalyzers/edgeModules": videoAnalyzers_edgeModules,
	"videoAnalyzers/livePipelines": videoAnalyzers_livePipelines,
	"videoAnalyzers/pipelineJobs": videoAnalyzers_pipelineJobs,
	"videoAnalyzers/pipelineTopologies": videoAnalyzers_pipelineTopologies,
	"videoAnalyzers/privateEndpointConnections": videoAnalyzers_privateEndpointConnections,
	"videoAnalyzers/privateEndpointConnections/operationResults":
		videoAnalyzers_privateEndpointConnections_operationResults,
	"videoAnalyzers/privateLinkResources": videoAnalyzers_privateLinkResources,
	"videoAnalyzers/videos": videoAnalyzers_videos,
};

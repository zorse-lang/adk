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
	readonly identity?: VideoAnalyzerIdentity | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: VideoAnalyzerProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly identity?: VideoAnalyzerIdentity | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: VideoAnalyzerProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly properties?: AccessPolicyProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly properties?: EdgeModuleProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly properties?: LivePipelineProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly properties?: PipelineJobProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly properties?: PipelineTopologyProperties | undefined;
	readonly sku: Sku;
	readonly systemData?: SystemData | undefined;
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
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly properties?: PrivateLinkResourceProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly properties?: VideoProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly authentication?: AuthenticationBase | undefined;
	readonly role?: "Reader" | undefined;
}
export interface AccountEncryption {
	readonly identity?: ResourceIdentity | undefined;
	readonly keyVaultProperties?: KeyVaultProperties | undefined;
	readonly status?: string | undefined;
	readonly type: "CustomerKey" | "SystemKey";
}
export interface AudioEncoderBase {
	readonly bitrateKbps?: string | undefined;
}
export interface AuthenticationBase {}
export interface CertificateSource {}
export interface CredentialsBase {}
export interface EdgeModuleProperties {
	readonly edgeModuleId?: string | undefined;
}
export interface EdgeModuleProvisioningToken {
	readonly expirationDate?: string | undefined;
	readonly token?: string | undefined;
}
export interface EncoderPresetBase {}
export interface Endpoint {
	readonly endpointUrl?: string | undefined;
	readonly type: "ClientApi";
}
export interface EndpointBase {
	readonly credentials: CredentialsBase;
	readonly tunnel?: TunnelBase | undefined;
	readonly url: string;
}
export interface GroupLevelAccessControl {
	readonly publicNetworkAccess?: ("Disabled" | "Enabled") | undefined;
}
export interface IotHub {
	readonly id: string;
	readonly identity: ResourceIdentity;
	readonly status?: string | undefined;
}
export interface KeyVaultProperties {
	readonly currentKeyIdentifier?: string | undefined;
	readonly keyIdentifier: string;
}
export interface ListProvisioningTokenInput {
	readonly expirationDate: string;
}
export interface LivePipelineProperties {
	readonly bitrateKbps: number;
	readonly description?: string | undefined;
	readonly parameters?: ParameterDefinition[] | undefined;
	readonly state?: ("Activating" | "Active" | "Deactivating" | "Inactive") | undefined;
	readonly topologyName: string;
}
export interface NetworkAccessControl {
	readonly consumption?: GroupLevelAccessControl | undefined;
	readonly ingestion?: GroupLevelAccessControl | undefined;
	readonly integration?: GroupLevelAccessControl | undefined;
}
export interface NodeInput {
	readonly nodeName: string;
}
export interface ParameterDeclaration {
	readonly default?: string | undefined;
	readonly description?: string | undefined;
	readonly name: string;
	readonly type: "Bool" | "Double" | "Int" | "SecretString" | "String";
}
export interface ParameterDefinition {
	readonly name: string;
	readonly value?: string | undefined;
}
export interface PipelineJobError {
	readonly code?: string | undefined;
	readonly message?: string | undefined;
}
export interface PipelineJobProperties {
	readonly description?: string | undefined;
	readonly error?: PipelineJobError | undefined;
	readonly expiration?: string | undefined;
	readonly parameters?: ParameterDefinition[] | undefined;
	readonly state?: ("Canceled" | "Completed" | "Failed" | "Processing") | undefined;
	readonly topologyName: string;
}
export interface PipelineTopologyProperties {
	readonly description?: string | undefined;
	readonly parameters?: ParameterDeclaration[] | undefined;
	readonly processors?: ProcessorNodeBase[] | undefined;
	readonly sinks: SinkNodeBase[];
	readonly sources: SourceNodeBase[];
}
export interface PrivateEndpoint {
	readonly id?: string | undefined;
}
export interface PrivateEndpointConnection {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly type?: string | undefined;
}
export interface PrivateEndpointConnectionProperties {
	readonly privateEndpoint?: PrivateEndpoint | undefined;
	readonly privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Succeeded") | undefined;
}
export interface PrivateLinkResourceProperties {
	readonly groupId?: string | undefined;
	readonly requiredMembers?: string[] | undefined;
	readonly requiredZoneNames?: string[] | undefined;
}
export interface PrivateLinkServiceConnectionState {
	readonly actionsRequired?: string | undefined;
	readonly description?: string | undefined;
	readonly status?: ("Approved" | "Pending" | "Rejected") | undefined;
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
	readonly tier?: "Standard" | undefined;
}
export interface SourceNodeBase {
	readonly name: string;
}
export interface StorageAccount {
	readonly id: string;
	readonly identity?: ResourceIdentity | undefined;
	readonly status?: string | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface TimeSequenceBase {}
export interface TlsValidationOptions {
	readonly ignoreHostname?: string | undefined;
	readonly ignoreSignature?: string | undefined;
}
export interface TokenClaim {
	readonly name: string;
	readonly value: string;
}
export interface TokenKey {
	readonly kid: string;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface TunnelBase {}
export interface UserAssignedManagedIdentities {
	readonly "[ key: string ]"?: UserAssignedManagedIdentity | undefined;
}
export interface UserAssignedManagedIdentity {
	readonly clientId?: string | undefined;
	readonly principalId?: string | undefined;
}
export interface VideoAnalyzerIdentity {
	readonly type: string;
	readonly userAssignedIdentities?: UserAssignedManagedIdentities | undefined;
}
export interface VideoAnalyzerProperties {
	readonly encryption?: AccountEncryption | undefined;
	readonly endpoints?: Endpoint[] | undefined;
	readonly iotHubs?: IotHub[] | undefined;
	readonly networkAccessControl?: NetworkAccessControl | undefined;
	readonly privateEndpointConnections?: PrivateEndpointConnection[] | undefined;
	readonly provisioningState?: ("Failed" | "InProgress" | "Succeeded") | undefined;
	readonly publicNetworkAccess?: ("Disabled" | "Enabled") | undefined;
	readonly storageAccounts: StorageAccount[];
}
export interface VideoArchival {
	readonly retentionPeriod?: string | undefined;
}
export interface VideoContentToken {
	readonly expirationDate?: string | undefined;
	readonly token?: string | undefined;
}
export interface VideoContentUrls {
	readonly archiveBaseUrl?: string | undefined;
	readonly downloadUrl?: string | undefined;
	readonly previewImageUrls?: VideoPreviewImageUrls | undefined;
	readonly rtspTunnelUrl?: string | undefined;
}
export interface VideoCreationProperties {
	readonly description?: string | undefined;
	readonly retentionPeriod?: string | undefined;
	readonly segmentLength?: string | undefined;
	readonly title?: string | undefined;
}
export interface VideoEncoderBase {
	readonly bitrateKbps?: string | undefined;
	readonly frameRate?: string | undefined;
	readonly scale?: VideoScale | undefined;
}
export interface VideoFlags {
	readonly canStream: boolean;
	readonly hasData: boolean;
	readonly isInUse: boolean;
}
export interface VideoMediaInfo {
	readonly segmentLength?: string | undefined;
}
export interface VideoPreviewImageUrls {
	readonly large?: string | undefined;
	readonly medium?: string | undefined;
	readonly small?: string | undefined;
}
export interface VideoProperties {
	readonly archival?: VideoArchival | undefined;
	readonly contentUrls?: VideoContentUrls | undefined;
	readonly description?: string | undefined;
	readonly flags?: VideoFlags | undefined;
	readonly mediaInfo?: VideoMediaInfo | undefined;
	readonly title?: string | undefined;
	readonly type?: ("Archive" | "File") | undefined;
}
export interface VideoPublishingOptions {
	readonly disableArchive?: string | undefined;
	readonly disableRtspPublishing?: string | undefined;
}
export interface VideoScale {
	readonly height?: string | undefined;
	readonly mode?: ("Pad" | "PreserveAspectRatio" | "Stretch") | undefined;
	readonly width?: string | undefined;
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

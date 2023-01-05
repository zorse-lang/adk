import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class registries extends ArmResource<registriesComponentInputs> implements registriesComponentOutputs {
	constructor(entity: ADKEntity, options: registriesComponentInputs) {
		super(entity, options.name, "Microsoft.ContainerRegistry/registries", "2021-12-01-preview", options);
	}
	public readonly apiVersion: "2021-12-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ContainerRegistry/registries";
}
export interface registriesComponentOutputs {
	readonly apiVersion: "2021-12-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ContainerRegistry/registries";
}
export interface registriesComponentInputs {
	readonly identity?: IdentityProperties;
	readonly location: string;
	readonly name: string;
	readonly properties?: RegistryProperties;
	readonly sku: Sku;
	readonly systemData?: SystemData;
	readonly tags?: ResourceTags;
}
export class registries_connectedRegistries
	extends ArmResource<registries_connectedRegistriesComponentInputs>
	implements registries_connectedRegistriesComponentOutputs
{
	constructor(entity: ADKEntity, options: registries_connectedRegistriesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.ContainerRegistry/registries/connectedRegistries",
			"2021-12-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-12-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ContainerRegistry/registries/connectedRegistries";
}
export interface registries_connectedRegistriesComponentOutputs {
	readonly apiVersion: "2021-12-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ContainerRegistry/registries/connectedRegistries";
}
export interface registries_connectedRegistriesComponentInputs {
	readonly name: string;
	readonly properties?: ConnectedRegistryProperties;
	readonly systemData?: SystemData;
}
export class registries_exportPipelines
	extends ArmResource<registries_exportPipelinesComponentInputs>
	implements registries_exportPipelinesComponentOutputs
{
	constructor(entity: ADKEntity, options: registries_exportPipelinesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.ContainerRegistry/registries/exportPipelines",
			"2021-12-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-12-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ContainerRegistry/registries/exportPipelines";
}
export interface registries_exportPipelinesComponentOutputs {
	readonly apiVersion: "2021-12-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ContainerRegistry/registries/exportPipelines";
}
export interface registries_exportPipelinesComponentInputs {
	readonly identity?: IdentityProperties;
	readonly location?: string;
	readonly name: string;
	readonly properties?: ExportPipelineProperties;
	readonly systemData?: SystemData;
}
export class registries_importPipelines
	extends ArmResource<registries_importPipelinesComponentInputs>
	implements registries_importPipelinesComponentOutputs
{
	constructor(entity: ADKEntity, options: registries_importPipelinesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.ContainerRegistry/registries/importPipelines",
			"2021-12-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-12-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ContainerRegistry/registries/importPipelines";
}
export interface registries_importPipelinesComponentOutputs {
	readonly apiVersion: "2021-12-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ContainerRegistry/registries/importPipelines";
}
export interface registries_importPipelinesComponentInputs {
	readonly identity?: IdentityProperties;
	readonly location?: string;
	readonly name: string;
	readonly properties?: ImportPipelineProperties;
	readonly systemData?: SystemData;
}
export class registries_pipelineRuns
	extends ArmResource<registries_pipelineRunsComponentInputs>
	implements registries_pipelineRunsComponentOutputs
{
	constructor(entity: ADKEntity, options: registries_pipelineRunsComponentInputs) {
		super(entity, options.name, "Microsoft.ContainerRegistry/registries/pipelineRuns", "2021-12-01-preview", options);
	}
	public readonly apiVersion: "2021-12-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ContainerRegistry/registries/pipelineRuns";
}
export interface registries_pipelineRunsComponentOutputs {
	readonly apiVersion: "2021-12-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ContainerRegistry/registries/pipelineRuns";
}
export interface registries_pipelineRunsComponentInputs {
	readonly name: string;
	readonly properties?: PipelineRunProperties;
	readonly systemData?: SystemData;
}
export class registries_privateEndpointConnections
	extends ArmResource<registries_privateEndpointConnectionsComponentInputs>
	implements registries_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: registries_privateEndpointConnectionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.ContainerRegistry/registries/privateEndpointConnections",
			"2021-12-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-12-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ContainerRegistry/registries/privateEndpointConnections";
}
export interface registries_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2021-12-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ContainerRegistry/registries/privateEndpointConnections";
}
export interface registries_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties;
	readonly systemData?: SystemData;
}
export class registries_replications
	extends ArmResource<registries_replicationsComponentInputs>
	implements registries_replicationsComponentOutputs
{
	constructor(entity: ADKEntity, options: registries_replicationsComponentInputs) {
		super(entity, options.name, "Microsoft.ContainerRegistry/registries/replications", "2021-12-01-preview", options);
	}
	public readonly apiVersion: "2021-12-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ContainerRegistry/registries/replications";
}
export interface registries_replicationsComponentOutputs {
	readonly apiVersion: "2021-12-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ContainerRegistry/registries/replications";
}
export interface registries_replicationsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: ReplicationProperties;
	readonly systemData?: SystemData;
	readonly tags?: ResourceTags;
}
export class registries_scopeMaps
	extends ArmResource<registries_scopeMapsComponentInputs>
	implements registries_scopeMapsComponentOutputs
{
	constructor(entity: ADKEntity, options: registries_scopeMapsComponentInputs) {
		super(entity, options.name, "Microsoft.ContainerRegistry/registries/scopeMaps", "2021-12-01-preview", options);
	}
	public readonly apiVersion: "2021-12-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ContainerRegistry/registries/scopeMaps";
}
export interface registries_scopeMapsComponentOutputs {
	readonly apiVersion: "2021-12-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ContainerRegistry/registries/scopeMaps";
}
export interface registries_scopeMapsComponentInputs {
	readonly name: string;
	readonly properties?: ScopeMapProperties;
	readonly systemData?: SystemData;
}
export class registries_tokens
	extends ArmResource<registries_tokensComponentInputs>
	implements registries_tokensComponentOutputs
{
	constructor(entity: ADKEntity, options: registries_tokensComponentInputs) {
		super(entity, options.name, "Microsoft.ContainerRegistry/registries/tokens", "2021-12-01-preview", options);
	}
	public readonly apiVersion: "2021-12-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ContainerRegistry/registries/tokens";
}
export interface registries_tokensComponentOutputs {
	readonly apiVersion: "2021-12-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ContainerRegistry/registries/tokens";
}
export interface registries_tokensComponentInputs {
	readonly name: string;
	readonly properties?: TokenProperties;
	readonly systemData?: SystemData;
}
export class registries_webhooks
	extends ArmResource<registries_webhooksComponentInputs>
	implements registries_webhooksComponentOutputs
{
	constructor(entity: ADKEntity, options: registries_webhooksComponentInputs) {
		super(entity, options.name, "Microsoft.ContainerRegistry/registries/webhooks", "2021-12-01-preview", options);
	}
	public readonly apiVersion: "2021-12-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ContainerRegistry/registries/webhooks";
}
export interface registries_webhooksComponentOutputs {
	readonly apiVersion: "2021-12-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ContainerRegistry/registries/webhooks";
}
export interface registries_webhooksComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: WebhookPropertiesCreateParametersOrWebhookProperties;
	readonly systemData?: SystemData;
	readonly tags?: WebhookCreateParametersTags;
}
export function listCredentials(resource: registries): RegistryListCredentialsResult {
	if (resource.apiVersion !== "2021-12-01-preview") {
		throw new Error(`listCredentials is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.ContainerRegistry/registries") {
		throw new Error(`listCredentials is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listEvents(resource: registries_webhooks): EventListResult {
	if (resource.apiVersion !== "2021-12-01-preview") {
		throw new Error(`listEvents is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.ContainerRegistry/registries/webhooks") {
		throw new Error(`listEvents is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface ActivationProperties {
	readonly status?: "Active" | "Inactive";
}
export interface Actor {
	readonly name?: string;
}
export interface ConnectedRegistryProperties {
	readonly activation?: ActivationProperties;
	readonly clientTokenIds?: string[];
	readonly connectionState?: "Offline" | "Online" | "Syncing" | "Unhealthy";
	readonly lastActivityTime?: string;
	readonly logging?: LoggingProperties;
	readonly loginServer?: LoginServerProperties;
	readonly mode: "Mirror" | "ReadOnly" | "ReadWrite" | "Registry";
	readonly notificationsList?: string[];
	readonly parent: ParentProperties;
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly statusDetails?: StatusDetailProperties[];
	readonly version?: string;
}
export interface EncryptionProperty {
	readonly keyVaultProperties?: KeyVaultProperties;
	readonly status?: "disabled" | "enabled";
}
export interface Event {
	readonly eventRequestMessage?: EventRequestMessage;
	readonly eventResponseMessage?: EventResponseMessage;
	readonly id?: string;
}
export interface EventContent {
	readonly action?: string;
	readonly actor?: Actor;
	readonly id?: string;
	readonly request?: Request;
	readonly source?: Source;
	readonly target?: Target;
	readonly timestamp?: string;
}
export interface EventListResult {
	readonly nextLink?: string;
	readonly value?: Event[];
}
export interface EventRequestMessage {
	readonly content?: EventContent;
	readonly headers?: EventRequestMessageHeaders;
	readonly method?: string;
	readonly requestUri?: string;
	readonly version?: string;
}
export interface EventRequestMessageHeaders {
	readonly [key: string]: string;
}
export interface EventResponseMessage {
	readonly content?: string;
	readonly headers?: EventResponseMessageHeaders;
	readonly reasonPhrase?: string;
	readonly statusCode?: string;
	readonly version?: string;
}
export interface EventResponseMessageHeaders {
	readonly [key: string]: string;
}
export interface ExportPipelineProperties {
	readonly options?: "ContinueOnErrors" | "DeleteSourceBlobOnSuccess" | "OverwriteBlobs" | "OverwriteTags"[];
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly target: ExportPipelineTargetProperties;
}
export interface ExportPipelineTargetProperties {
	readonly keyVaultUri: string;
	readonly type?: string;
	readonly uri?: string;
}
export interface ExportPolicy {
	readonly status?: "disabled" | "enabled";
}
export interface IdentityProperties {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "None" | "SystemAssigned" | "SystemAssigned, UserAssigned";
	readonly userAssignedIdentities?: IdentityPropertiesUserAssignedIdentities;
}
export interface IdentityPropertiesUserAssignedIdentities {
	readonly [key: string]: UserIdentityProperties;
}
export interface ImportPipelineProperties {
	readonly options?: "ContinueOnErrors" | "DeleteSourceBlobOnSuccess" | "OverwriteBlobs" | "OverwriteTags"[];
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly source: ImportPipelineSourceProperties;
	readonly trigger?: PipelineTriggerProperties;
}
export interface ImportPipelineSourceProperties {
	readonly keyVaultUri: string;
	readonly type?: "AzureStorageBlobContainer";
	readonly uri?: string;
}
export interface IPRule {
	readonly action?: "Allow";
	readonly value: string;
}
export interface KeyVaultProperties {
	readonly identity?: string;
	readonly keyIdentifier?: string;
	readonly keyRotationEnabled?: boolean;
	readonly lastKeyRotationTimestamp?: string;
	readonly versionedKeyIdentifier?: string;
}
export interface LoggingProperties {
	readonly auditLogStatus?: "Disabled" | "Enabled";
	readonly logLevel?: "Debug" | "Error" | "Information" | "None" | "Warning";
}
export interface LoginServerProperties {
	readonly host?: string;
	readonly tls?: TlsProperties;
}
export interface NetworkRuleSet {
	readonly defaultAction: "Allow" | "Deny";
	readonly ipRules?: IPRule[];
	readonly virtualNetworkRules?: VirtualNetworkRule[];
}
export interface ParentProperties {
	readonly id?: string;
	readonly syncProperties: SyncProperties;
}
export interface PipelineRunProperties {
	readonly forceUpdateTag?: string;
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly request?: PipelineRunRequest;
	readonly response?: PipelineRunResponse;
}
export interface PipelineRunRequest {
	readonly artifacts?: string[];
	readonly catalogDigest?: string;
	readonly pipelineResourceId?: string;
	readonly source?: PipelineRunSourceProperties;
	readonly target?: PipelineRunTargetProperties;
}
export interface PipelineRunResponse {
	readonly catalogDigest?: string;
	readonly finishTime?: string;
	readonly importedArtifacts?: string[];
	readonly pipelineRunErrorMessage?: string;
	readonly progress?: ProgressProperties;
	readonly source?: ImportPipelineSourceProperties;
	readonly startTime?: string;
	readonly status?: string;
	readonly target?: ExportPipelineTargetProperties;
	readonly trigger?: PipelineTriggerDescriptor;
}
export interface PipelineRunSourceProperties {
	readonly name?: string;
	readonly type?: "AzureStorageBlob";
}
export interface PipelineRunTargetProperties {
	readonly name?: string;
	readonly type?: "AzureStorageBlob";
}
export interface PipelineSourceTriggerDescriptor {
	readonly timestamp?: string;
}
export interface PipelineSourceTriggerProperties {
	readonly status: "Disabled" | "Enabled";
}
export interface PipelineTriggerDescriptor {
	readonly sourceTrigger?: PipelineSourceTriggerDescriptor;
}
export interface PipelineTriggerProperties {
	readonly sourceTrigger?: PipelineSourceTriggerProperties;
}
export interface Policies {
	readonly exportPolicy?: ExportPolicy;
	readonly quarantinePolicy?: QuarantinePolicy;
	readonly retentionPolicy?: RetentionPolicy;
	readonly trustPolicy?: TrustPolicy;
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
	readonly privateLinkServiceConnectionState?: PrivateLinkServiceConnectionState;
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface PrivateLinkServiceConnectionState {
	readonly actionsRequired?: "None" | "Recreate";
	readonly description?: string;
	readonly status?: "Approved" | "Disconnected" | "Pending" | "Rejected";
}
export interface ProgressProperties {
	readonly percentage?: string;
}
export interface QuarantinePolicy {
	readonly status?: "disabled" | "enabled";
}
export interface RegistryListCredentialsResult {
	readonly passwords?: RegistryPassword[];
	readonly username?: string;
}
export interface RegistryPassword {
	readonly name?: "password";
	readonly value?: string;
}
export interface RegistryProperties {
	readonly adminUserEnabled?: boolean;
	readonly anonymousPullEnabled?: boolean;
	readonly creationDate?: string;
	readonly dataEndpointEnabled?: boolean;
	readonly dataEndpointHostNames?: string[];
	readonly encryption?: EncryptionProperty;
	readonly loginServer?: string;
	readonly networkRuleBypassOptions?: "AzureServices" | "None";
	readonly networkRuleSet?: NetworkRuleSet;
	readonly policies?: Policies;
	readonly privateEndpointConnections?: PrivateEndpointConnection[];
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly publicNetworkAccess?: "Disabled" | "Enabled";
	readonly status?: Status;
	readonly zoneRedundancy?: "Disabled" | "Enabled";
}
export interface ReplicationProperties {
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly regionEndpointEnabled?: boolean;
	readonly status?: Status;
	readonly zoneRedundancy?: "Disabled" | "Enabled";
}
export interface Request {
	readonly addr?: string;
	readonly host?: string;
	readonly id?: string;
	readonly method?: string;
	readonly useragent?: string;
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface RetentionPolicy {
	readonly days?: number;
	readonly lastUpdatedTime?: string;
	readonly status?: "disabled" | "enabled";
}
export interface ScopeMapProperties {
	readonly actions: string[];
	readonly creationDate?: string;
	readonly description?: string;
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly type?: string;
}
export interface Sku {
	readonly name: "Basic" | "Classic" | "Premium" | "Standard";
	readonly tier?: "Basic" | "Classic" | "Premium" | "Standard";
}
export interface Source {
	readonly addr?: string;
	readonly instanceID?: string;
}
export interface Status {
	readonly displayStatus?: string;
	readonly message?: string;
	readonly timestamp?: string;
}
export interface StatusDetailProperties {
	readonly code?: string;
	readonly correlationId?: string;
	readonly description?: string;
	readonly timestamp?: string;
	readonly type?: string;
}
export interface SyncProperties {
	readonly gatewayEndpoint?: string;
	readonly lastSyncTime?: string;
	readonly messageTtl: string;
	readonly schedule?: string;
	readonly syncWindow?: string;
	readonly tokenId: string;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface Target {
	readonly digest?: string;
	readonly length?: number;
	readonly mediaType?: string;
	readonly name?: string;
	readonly repository?: string;
	readonly size?: number;
	readonly tag?: string;
	readonly url?: string;
	readonly version?: string;
}
export interface TlsCertificateProperties {
	readonly location?: string;
	readonly type?: "LocalDirectory";
}
export interface TlsProperties {
	readonly certificate?: TlsCertificateProperties;
	readonly status?: "Disabled" | "Enabled";
}
export interface TokenCertificate {
	readonly encodedPemCertificate?: string;
	readonly expiry?: string;
	readonly name?: "certificate1" | "certificate2";
	readonly thumbprint?: string;
}
export interface TokenCredentialsProperties {
	readonly certificates?: TokenCertificate[];
	readonly passwords?: TokenPassword[];
}
export interface TokenPassword {
	readonly creationTime?: string;
	readonly expiry?: string;
	readonly name?: "password1" | "password2";
	readonly value?: string;
}
export interface TokenProperties {
	readonly creationDate?: string;
	readonly credentials?: TokenCredentialsProperties;
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly scopeMapId?: string;
	readonly status?: "disabled" | "enabled";
}
export interface TrustPolicy {
	readonly status?: "disabled" | "enabled";
	readonly type?: "Notary";
}
export interface UserIdentityProperties {
	readonly clientId?: string;
	readonly principalId?: string;
}
export interface VirtualNetworkRule {
	readonly action?: "Allow";
	readonly id: string;
}
export interface WebhookCreateParametersTags {
	readonly [key: string]: string;
}
export interface WebhookPropertiesCreateParametersCustomHeaders {
	readonly [key: string]: string;
}
export interface WebhookPropertiesCreateParametersOrWebhookProperties {
	readonly actions: "chart_delete" | "chart_push" | "delete" | "push" | "quarantine"[];
	readonly customHeaders?: WebhookPropertiesCreateParametersCustomHeaders;
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly scope?: string;
	readonly serviceUri: string;
	readonly status?: "disabled" | "enabled";
}
export default {
	registries: registries,
	"registries/connectedRegistries": registries_connectedRegistries,
	"registries/exportPipelines": registries_exportPipelines,
	"registries/importPipelines": registries_importPipelines,
	"registries/pipelineRuns": registries_pipelineRuns,
	"registries/privateEndpointConnections": registries_privateEndpointConnections,
	"registries/replications": registries_replications,
	"registries/scopeMaps": registries_scopeMaps,
	"registries/tokens": registries_tokens,
	"registries/webhooks": registries_webhooks,
};

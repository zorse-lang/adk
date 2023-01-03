import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class registries extends ArmResource<registriesComponentInputs> implements registriesComponentOutputs {
	constructor(entity: ADKEntity, options: registriesComponentInputs) {
		super(entity, options.name, "Microsoft.ContainerRegistry/registries", "2021-08-01-preview", options);
	}
	public readonly apiVersion: "2021-08-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ContainerRegistry/registries";
}
export interface registriesComponentOutputs {
	readonly apiVersion: "2021-08-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ContainerRegistry/registries";
}
export interface registriesComponentInputs {
	readonly identity?: IdentityProperties | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: RegistryProperties | undefined;
	readonly sku: Sku;
	readonly systemData?: SystemData | undefined;
	readonly tags?: ResourceTags | undefined;
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
			"2021-08-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-08-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ContainerRegistry/registries/connectedRegistries";
}
export interface registries_connectedRegistriesComponentOutputs {
	readonly apiVersion: "2021-08-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ContainerRegistry/registries/connectedRegistries";
}
export interface registries_connectedRegistriesComponentInputs {
	readonly name: string;
	readonly properties?: ConnectedRegistryProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
			"2021-08-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-08-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ContainerRegistry/registries/exportPipelines";
}
export interface registries_exportPipelinesComponentOutputs {
	readonly apiVersion: "2021-08-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ContainerRegistry/registries/exportPipelines";
}
export interface registries_exportPipelinesComponentInputs {
	readonly identity?: IdentityProperties | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ExportPipelineProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
			"2021-08-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-08-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ContainerRegistry/registries/importPipelines";
}
export interface registries_importPipelinesComponentOutputs {
	readonly apiVersion: "2021-08-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ContainerRegistry/registries/importPipelines";
}
export interface registries_importPipelinesComponentInputs {
	readonly identity?: IdentityProperties | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ImportPipelineProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class registries_pipelineRuns
	extends ArmResource<registries_pipelineRunsComponentInputs>
	implements registries_pipelineRunsComponentOutputs
{
	constructor(entity: ADKEntity, options: registries_pipelineRunsComponentInputs) {
		super(entity, options.name, "Microsoft.ContainerRegistry/registries/pipelineRuns", "2021-08-01-preview", options);
	}
	public readonly apiVersion: "2021-08-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ContainerRegistry/registries/pipelineRuns";
}
export interface registries_pipelineRunsComponentOutputs {
	readonly apiVersion: "2021-08-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ContainerRegistry/registries/pipelineRuns";
}
export interface registries_pipelineRunsComponentInputs {
	readonly name: string;
	readonly properties?: PipelineRunProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
			"2021-08-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-08-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ContainerRegistry/registries/privateEndpointConnections";
}
export interface registries_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2021-08-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ContainerRegistry/registries/privateEndpointConnections";
}
export interface registries_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class registries_replications
	extends ArmResource<registries_replicationsComponentInputs>
	implements registries_replicationsComponentOutputs
{
	constructor(entity: ADKEntity, options: registries_replicationsComponentInputs) {
		super(entity, options.name, "Microsoft.ContainerRegistry/registries/replications", "2021-08-01-preview", options);
	}
	public readonly apiVersion: "2021-08-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ContainerRegistry/registries/replications";
}
export interface registries_replicationsComponentOutputs {
	readonly apiVersion: "2021-08-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ContainerRegistry/registries/replications";
}
export interface registries_replicationsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: ReplicationProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class registries_scopeMaps
	extends ArmResource<registries_scopeMapsComponentInputs>
	implements registries_scopeMapsComponentOutputs
{
	constructor(entity: ADKEntity, options: registries_scopeMapsComponentInputs) {
		super(entity, options.name, "Microsoft.ContainerRegistry/registries/scopeMaps", "2021-08-01-preview", options);
	}
	public readonly apiVersion: "2021-08-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ContainerRegistry/registries/scopeMaps";
}
export interface registries_scopeMapsComponentOutputs {
	readonly apiVersion: "2021-08-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ContainerRegistry/registries/scopeMaps";
}
export interface registries_scopeMapsComponentInputs {
	readonly name: string;
	readonly properties?: ScopeMapProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class registries_tokens
	extends ArmResource<registries_tokensComponentInputs>
	implements registries_tokensComponentOutputs
{
	constructor(entity: ADKEntity, options: registries_tokensComponentInputs) {
		super(entity, options.name, "Microsoft.ContainerRegistry/registries/tokens", "2021-08-01-preview", options);
	}
	public readonly apiVersion: "2021-08-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ContainerRegistry/registries/tokens";
}
export interface registries_tokensComponentOutputs {
	readonly apiVersion: "2021-08-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ContainerRegistry/registries/tokens";
}
export interface registries_tokensComponentInputs {
	readonly name: string;
	readonly properties?: TokenProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class registries_webhooks
	extends ArmResource<registries_webhooksComponentInputs>
	implements registries_webhooksComponentOutputs
{
	constructor(entity: ADKEntity, options: registries_webhooksComponentInputs) {
		super(entity, options.name, "Microsoft.ContainerRegistry/registries/webhooks", "2021-08-01-preview", options);
	}
	public readonly apiVersion: "2021-08-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ContainerRegistry/registries/webhooks";
}
export interface registries_webhooksComponentOutputs {
	readonly apiVersion: "2021-08-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ContainerRegistry/registries/webhooks";
}
export interface registries_webhooksComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: WebhookPropertiesCreateParametersOrWebhookProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: WebhookCreateParametersTags | undefined;
}
export function listCredentials(resource: registries): RegistryListCredentialsResult {
	if (resource.apiVersion !== "2021-08-01-preview") {
		throw new Error(`listCredentials is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.ContainerRegistry/registries") {
		throw new Error(`listCredentials is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listEvents(resource: registries_webhooks): EventListResult {
	if (resource.apiVersion !== "2021-08-01-preview") {
		throw new Error(`listEvents is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.ContainerRegistry/registries/webhooks") {
		throw new Error(`listEvents is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface ActivationProperties {
	readonly status?: ("Active" | "Inactive") | undefined;
}
export interface Actor {
	readonly name?: string | undefined;
}
export interface ConnectedRegistryProperties {
	readonly activation?: ActivationProperties | undefined;
	readonly clientTokenIds?: string[] | undefined;
	readonly connectionState?: ("Offline" | "Online" | "Syncing" | "Unhealthy") | undefined;
	readonly lastActivityTime?: string | undefined;
	readonly logging?: LoggingProperties | undefined;
	readonly loginServer?: LoginServerProperties | undefined;
	readonly mode: "Mirror" | "ReadOnly" | "ReadWrite" | "Registry";
	readonly notificationsList?: string[] | undefined;
	readonly parent: ParentProperties;
	readonly provisioningState?: ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly statusDetails?: StatusDetailProperties[] | undefined;
	readonly version?: string | undefined;
}
export interface EncryptionProperty {
	readonly keyVaultProperties?: KeyVaultProperties | undefined;
	readonly status?: ("disabled" | "enabled") | undefined;
}
export interface Event {
	readonly eventRequestMessage?: EventRequestMessage | undefined;
	readonly eventResponseMessage?: EventResponseMessage | undefined;
	readonly id?: string | undefined;
}
export interface EventContent {
	readonly action?: string | undefined;
	readonly actor?: Actor | undefined;
	readonly id?: string | undefined;
	readonly request?: Request | undefined;
	readonly source?: Source | undefined;
	readonly target?: Target | undefined;
	readonly timestamp?: string | undefined;
}
export interface EventListResult {
	readonly nextLink?: string | undefined;
	readonly value?: Event[] | undefined;
}
export interface EventRequestMessage {
	readonly content?: EventContent | undefined;
	readonly headers?: EventRequestMessageHeaders | undefined;
	readonly method?: string | undefined;
	readonly requestUri?: string | undefined;
	readonly version?: string | undefined;
}
export interface EventRequestMessageHeaders {
	readonly "[ key: string ]"?: string | undefined;
}
export interface EventResponseMessage {
	readonly content?: string | undefined;
	readonly headers?: EventResponseMessageHeaders | undefined;
	readonly reasonPhrase?: string | undefined;
	readonly statusCode?: string | undefined;
	readonly version?: string | undefined;
}
export interface EventResponseMessageHeaders {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ExportPipelineProperties {
	readonly options?:
		| ("ContinueOnErrors" | "DeleteSourceBlobOnSuccess" | "OverwriteBlobs" | "OverwriteTags"[])
		| undefined;
	readonly provisioningState?: ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly target: ExportPipelineTargetProperties;
}
export interface ExportPipelineTargetProperties {
	readonly keyVaultUri: string;
	readonly type?: string | undefined;
	readonly uri?: string | undefined;
}
export interface ExportPolicy {
	readonly status?: ("disabled" | "enabled") | undefined;
}
export interface IdentityProperties {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: ("None" | "SystemAssigned" | "SystemAssigned, UserAssigned") | undefined;
	readonly userAssignedIdentities?: IdentityPropertiesUserAssignedIdentities | undefined;
}
export interface IdentityPropertiesUserAssignedIdentities {
	readonly "[ key: string ]"?: UserIdentityProperties | undefined;
}
export interface ImportPipelineProperties {
	readonly options?:
		| ("ContinueOnErrors" | "DeleteSourceBlobOnSuccess" | "OverwriteBlobs" | "OverwriteTags"[])
		| undefined;
	readonly provisioningState?: ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly source: ImportPipelineSourceProperties;
	readonly trigger?: PipelineTriggerProperties | undefined;
}
export interface ImportPipelineSourceProperties {
	readonly keyVaultUri: string;
	readonly type?: "AzureStorageBlobContainer" | undefined;
	readonly uri?: string | undefined;
}
export interface IPRule {
	readonly action?: "Allow" | undefined;
	readonly value: string;
}
export interface KeyVaultProperties {
	readonly identity?: string | undefined;
	readonly keyIdentifier?: string | undefined;
	readonly keyRotationEnabled?: boolean | undefined;
	readonly lastKeyRotationTimestamp?: string | undefined;
	readonly versionedKeyIdentifier?: string | undefined;
}
export interface LoggingProperties {
	readonly auditLogStatus?: ("Disabled" | "Enabled") | undefined;
	readonly logLevel?: ("Debug" | "Error" | "Information" | "None" | "Warning") | undefined;
}
export interface LoginServerProperties {
	readonly host?: string | undefined;
	readonly tls?: TlsProperties | undefined;
}
export interface NetworkRuleSet {
	readonly defaultAction: "Allow" | "Deny";
	readonly ipRules?: IPRule[] | undefined;
	readonly virtualNetworkRules?: VirtualNetworkRule[] | undefined;
}
export interface ParentProperties {
	readonly id?: string | undefined;
	readonly syncProperties: SyncProperties;
}
export interface PipelineRunProperties {
	readonly forceUpdateTag?: string | undefined;
	readonly provisioningState?: ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly request?: PipelineRunRequest | undefined;
	readonly response?: PipelineRunResponse | undefined;
}
export interface PipelineRunRequest {
	readonly artifacts?: string[] | undefined;
	readonly catalogDigest?: string | undefined;
	readonly pipelineResourceId?: string | undefined;
	readonly source?: PipelineRunSourceProperties | undefined;
	readonly target?: PipelineRunTargetProperties | undefined;
}
export interface PipelineRunResponse {
	readonly catalogDigest?: string | undefined;
	readonly finishTime?: string | undefined;
	readonly importedArtifacts?: string[] | undefined;
	readonly pipelineRunErrorMessage?: string | undefined;
	readonly progress?: ProgressProperties | undefined;
	readonly source?: ImportPipelineSourceProperties | undefined;
	readonly startTime?: string | undefined;
	readonly status?: string | undefined;
	readonly target?: ExportPipelineTargetProperties | undefined;
	readonly trigger?: PipelineTriggerDescriptor | undefined;
}
export interface PipelineRunSourceProperties {
	readonly name?: string | undefined;
	readonly type?: "AzureStorageBlob" | undefined;
}
export interface PipelineRunTargetProperties {
	readonly name?: string | undefined;
	readonly type?: "AzureStorageBlob" | undefined;
}
export interface PipelineSourceTriggerDescriptor {
	readonly timestamp?: string | undefined;
}
export interface PipelineSourceTriggerProperties {
	readonly status: "Disabled" | "Enabled";
}
export interface PipelineTriggerDescriptor {
	readonly sourceTrigger?: PipelineSourceTriggerDescriptor | undefined;
}
export interface PipelineTriggerProperties {
	readonly sourceTrigger?: PipelineSourceTriggerProperties | undefined;
}
export interface Policies {
	readonly exportPolicy?: ExportPolicy | undefined;
	readonly quarantinePolicy?: QuarantinePolicy | undefined;
	readonly retentionPolicy?: RetentionPolicy | undefined;
	readonly trustPolicy?: TrustPolicy | undefined;
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
	readonly privateLinkServiceConnectionState?: PrivateLinkServiceConnectionState | undefined;
	readonly provisioningState?: ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface PrivateLinkServiceConnectionState {
	readonly actionsRequired?: ("None" | "Recreate") | undefined;
	readonly description?: string | undefined;
	readonly status?: ("Approved" | "Disconnected" | "Pending" | "Rejected") | undefined;
}
export interface ProgressProperties {
	readonly percentage?: string | undefined;
}
export interface QuarantinePolicy {
	readonly status?: ("disabled" | "enabled") | undefined;
}
export interface RegistryListCredentialsResult {
	readonly passwords?: RegistryPassword[] | undefined;
	readonly username?: string | undefined;
}
export interface RegistryPassword {
	readonly name?: "password" | undefined;
	readonly value?: string | undefined;
}
export interface RegistryProperties {
	readonly adminUserEnabled?: boolean | undefined;
	readonly anonymousPullEnabled?: boolean | undefined;
	readonly creationDate?: string | undefined;
	readonly dataEndpointEnabled?: boolean | undefined;
	readonly dataEndpointHostNames?: string[] | undefined;
	readonly encryption?: EncryptionProperty | undefined;
	readonly loginServer?: string | undefined;
	readonly networkRuleBypassOptions?: ("AzureServices" | "None") | undefined;
	readonly networkRuleSet?: NetworkRuleSet | undefined;
	readonly policies?: Policies | undefined;
	readonly privateEndpointConnections?: PrivateEndpointConnection[] | undefined;
	readonly provisioningState?: ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly publicNetworkAccess?: ("Disabled" | "Enabled") | undefined;
	readonly status?: Status | undefined;
	readonly zoneRedundancy?: ("Disabled" | "Enabled") | undefined;
}
export interface ReplicationProperties {
	readonly provisioningState?: ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly regionEndpointEnabled?: boolean | undefined;
	readonly status?: Status | undefined;
	readonly zoneRedundancy?: ("Disabled" | "Enabled") | undefined;
}
export interface Request {
	readonly addr?: string | undefined;
	readonly host?: string | undefined;
	readonly id?: string | undefined;
	readonly method?: string | undefined;
	readonly useragent?: string | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface RetentionPolicy {
	readonly days?: number | undefined;
	readonly lastUpdatedTime?: string | undefined;
	readonly status?: ("disabled" | "enabled") | undefined;
}
export interface ScopeMapProperties {
	readonly actions: string[];
	readonly creationDate?: string | undefined;
	readonly description?: string | undefined;
	readonly provisioningState?: ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly type?: string | undefined;
}
export interface Sku {
	readonly name: "Basic" | "Classic" | "Premium" | "Standard";
	readonly tier?: ("Basic" | "Classic" | "Premium" | "Standard") | undefined;
}
export interface Source {
	readonly addr?: string | undefined;
	readonly instanceID?: string | undefined;
}
export interface Status {
	readonly displayStatus?: string | undefined;
	readonly message?: string | undefined;
	readonly timestamp?: string | undefined;
}
export interface StatusDetailProperties {
	readonly code?: string | undefined;
	readonly correlationId?: string | undefined;
	readonly description?: string | undefined;
	readonly timestamp?: string | undefined;
	readonly type?: string | undefined;
}
export interface SyncProperties {
	readonly gatewayEndpoint?: string | undefined;
	readonly lastSyncTime?: string | undefined;
	readonly messageTtl: string;
	readonly schedule?: string | undefined;
	readonly syncWindow?: string | undefined;
	readonly tokenId: string;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface Target {
	readonly digest?: string | undefined;
	readonly length?: number | undefined;
	readonly mediaType?: string | undefined;
	readonly name?: string | undefined;
	readonly repository?: string | undefined;
	readonly size?: number | undefined;
	readonly tag?: string | undefined;
	readonly url?: string | undefined;
	readonly version?: string | undefined;
}
export interface TlsCertificateProperties {
	readonly location?: string | undefined;
	readonly type?: "LocalDirectory" | undefined;
}
export interface TlsProperties {
	readonly certificate?: TlsCertificateProperties | undefined;
	readonly status?: ("Disabled" | "Enabled") | undefined;
}
export interface TokenCertificate {
	readonly encodedPemCertificate?: string | undefined;
	readonly expiry?: string | undefined;
	readonly name?: ("certificate1" | "certificate2") | undefined;
	readonly thumbprint?: string | undefined;
}
export interface TokenCredentialsProperties {
	readonly certificates?: TokenCertificate[] | undefined;
	readonly passwords?: TokenPassword[] | undefined;
}
export interface TokenPassword {
	readonly creationTime?: string | undefined;
	readonly expiry?: string | undefined;
	readonly name?: ("password1" | "password2") | undefined;
	readonly value?: string | undefined;
}
export interface TokenProperties {
	readonly creationDate?: string | undefined;
	readonly credentials?: TokenCredentialsProperties | undefined;
	readonly provisioningState?: ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly scopeMapId?: string | undefined;
	readonly status?: ("disabled" | "enabled") | undefined;
}
export interface TrustPolicy {
	readonly status?: ("disabled" | "enabled") | undefined;
	readonly type?: "Notary" | undefined;
}
export interface UserIdentityProperties {
	readonly clientId?: string | undefined;
	readonly principalId?: string | undefined;
}
export interface VirtualNetworkRule {
	readonly action?: "Allow" | undefined;
	readonly id: string;
}
export interface WebhookCreateParametersTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface WebhookPropertiesCreateParametersCustomHeaders {
	readonly "[ key: string ]"?: string | undefined;
}
export interface WebhookPropertiesCreateParametersOrWebhookProperties {
	readonly actions: "chart_delete" | "chart_push" | "delete" | "push" | "quarantine"[];
	readonly customHeaders?: WebhookPropertiesCreateParametersCustomHeaders | undefined;
	readonly provisioningState?: ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly scope?: string | undefined;
	readonly serviceUri: string;
	readonly status?: ("disabled" | "enabled") | undefined;
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

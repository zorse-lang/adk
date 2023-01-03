import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class registries extends ArmResource<registriesComponentInputs> implements registriesComponentOutputs {
	constructor(entity: ADKEntity, options: registriesComponentInputs) {
		super(entity, options.name, "Microsoft.ContainerRegistry/registries", "2021-09-01", options);
	}
	public readonly apiVersion: "2021-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.ContainerRegistry/registries";
}
export interface registriesComponentOutputs {
	readonly apiVersion: "2021-09-01";
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
export class registries_privateEndpointConnections
	extends ArmResource<registries_privateEndpointConnectionsComponentInputs>
	implements registries_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: registries_privateEndpointConnectionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.ContainerRegistry/registries/privateEndpointConnections",
			"2021-09-01",
			options,
		);
	}
	public readonly apiVersion: "2021-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.ContainerRegistry/registries/privateEndpointConnections";
}
export interface registries_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2021-09-01";
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
		super(entity, options.name, "Microsoft.ContainerRegistry/registries/replications", "2021-09-01", options);
	}
	public readonly apiVersion: "2021-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.ContainerRegistry/registries/replications";
}
export interface registries_replicationsComponentOutputs {
	readonly apiVersion: "2021-09-01";
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
export class registries_webhooks
	extends ArmResource<registries_webhooksComponentInputs>
	implements registries_webhooksComponentOutputs
{
	constructor(entity: ADKEntity, options: registries_webhooksComponentInputs) {
		super(entity, options.name, "Microsoft.ContainerRegistry/registries/webhooks", "2021-09-01", options);
	}
	public readonly apiVersion: "2021-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.ContainerRegistry/registries/webhooks";
}
export interface registries_webhooksComponentOutputs {
	readonly apiVersion: "2021-09-01";
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
	if (resource.apiVersion !== "2021-09-01") {
		throw new Error(`listCredentials is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.ContainerRegistry/registries") {
		throw new Error(`listCredentials is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listEvents(resource: registries_webhooks): EventListResult {
	if (resource.apiVersion !== "2021-09-01") {
		throw new Error(`listEvents is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.ContainerRegistry/registries/webhooks") {
		throw new Error(`listEvents is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface Actor {
	readonly name?: string | undefined;
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
export interface NetworkRuleSet {
	readonly defaultAction: "Allow" | "Deny";
	readonly ipRules?: IPRule[] | undefined;
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
export interface TrustPolicy {
	readonly status?: ("disabled" | "enabled") | undefined;
	readonly type?: "Notary" | undefined;
}
export interface UserIdentityProperties {
	readonly clientId?: string | undefined;
	readonly principalId?: string | undefined;
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
	"registries/privateEndpointConnections": registries_privateEndpointConnections,
	"registries/replications": registries_replications,
	"registries/webhooks": registries_webhooks,
};

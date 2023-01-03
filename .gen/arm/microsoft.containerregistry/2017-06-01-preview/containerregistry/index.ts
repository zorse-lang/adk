import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class registries extends ArmResource<registriesComponentInputs> implements registriesComponentOutputs {
	constructor(entity: ADKEntity, options: registriesComponentInputs) {
		super(entity, options.name, "Microsoft.ContainerRegistry/registries", "2017-06-01-preview", options);
	}
	public readonly apiVersion: "2017-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ContainerRegistry/registries";
}
export interface registriesComponentOutputs {
	readonly apiVersion: "2017-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ContainerRegistry/registries";
}
export interface registriesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: RegistryProperties | undefined;
	readonly sku: Sku;
	readonly tags?: ResourceTags | undefined;
}
export class registries_replications
	extends ArmResource<registries_replicationsComponentInputs>
	implements registries_replicationsComponentOutputs
{
	constructor(entity: ADKEntity, options: registries_replicationsComponentInputs) {
		super(entity, options.name, "Microsoft.ContainerRegistry/registries/replications", "2017-06-01-preview", options);
	}
	public readonly apiVersion: "2017-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ContainerRegistry/registries/replications";
}
export interface registries_replicationsComponentOutputs {
	readonly apiVersion: "2017-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ContainerRegistry/registries/replications";
}
export interface registries_replicationsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: ReplicationProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class registries_webhooks
	extends ArmResource<registries_webhooksComponentInputs>
	implements registries_webhooksComponentOutputs
{
	constructor(entity: ADKEntity, options: registries_webhooksComponentInputs) {
		super(entity, options.name, "Microsoft.ContainerRegistry/registries/webhooks", "2017-06-01-preview", options);
	}
	public readonly apiVersion: "2017-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ContainerRegistry/registries/webhooks";
}
export interface registries_webhooksComponentOutputs {
	readonly apiVersion: "2017-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ContainerRegistry/registries/webhooks";
}
export interface registries_webhooksComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: WebhookPropertiesCreateParametersOrWebhookProperties | undefined;
	readonly tags?: WebhookCreateParametersTags | undefined;
}
export function listCredentials(resource: registries): RegistryListCredentialsResult {
	if (resource.apiVersion !== "2017-06-01-preview") {
		throw new Error(`listCredentials is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.ContainerRegistry/registries") {
		throw new Error(`listCredentials is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listEvents(resource: registries_webhooks): EventListResult {
	if (resource.apiVersion !== "2017-06-01-preview") {
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
	readonly loginServer?: string | undefined;
	readonly provisioningState?: ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly status?: Status | undefined;
	readonly storageAccount?: StorageAccountProperties | undefined;
}
export interface ReplicationProperties {
	readonly provisioningState?: ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly status?: Status | undefined;
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
export interface Sku {
	readonly name: "Basic" | "Managed_Basic" | "Managed_Premium" | "Managed_Standard";
	readonly tier?: ("Basic" | "Managed") | undefined;
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
export interface StorageAccountProperties {
	readonly id: string;
}
export interface Target {
	readonly digest?: string | undefined;
	readonly length?: number | undefined;
	readonly mediaType?: string | undefined;
	readonly repository?: string | undefined;
	readonly size?: number | undefined;
	readonly tag?: string | undefined;
	readonly url?: string | undefined;
}
export interface WebhookCreateParametersTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface WebhookPropertiesCreateParametersCustomHeaders {
	readonly "[ key: string ]"?: string | undefined;
}
export interface WebhookPropertiesCreateParametersOrWebhookProperties {
	readonly actions: "delete" | "push"[];
	readonly customHeaders?: WebhookPropertiesCreateParametersCustomHeaders | undefined;
	readonly provisioningState?: ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly scope?: string | undefined;
	readonly serviceUri: string;
	readonly status?: ("disabled" | "enabled") | undefined;
}
export default {
	registries: registries,
	"registries/replications": registries_replications,
	"registries/webhooks": registries_webhooks,
};

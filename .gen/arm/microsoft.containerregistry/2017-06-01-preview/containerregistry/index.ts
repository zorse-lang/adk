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
	readonly properties?: RegistryProperties;
	readonly sku: Sku;
	readonly tags?: ResourceTags;
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
	readonly properties?: ReplicationProperties;
	readonly tags?: ResourceTags;
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
	readonly properties?: WebhookPropertiesCreateParametersOrWebhookProperties;
	readonly tags?: WebhookCreateParametersTags;
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
	readonly name?: string;
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
	readonly creationDate?: string;
	readonly loginServer?: string;
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly status?: Status;
	readonly storageAccount?: StorageAccountProperties;
}
export interface ReplicationProperties {
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly status?: Status;
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
export interface Sku {
	readonly name: "Basic" | "Managed_Basic" | "Managed_Premium" | "Managed_Standard";
	readonly tier?: "Basic" | "Managed";
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
export interface StorageAccountProperties {
	readonly id: string;
}
export interface Target {
	readonly digest?: string;
	readonly length?: number;
	readonly mediaType?: string;
	readonly repository?: string;
	readonly size?: number;
	readonly tag?: string;
	readonly url?: string;
}
export interface WebhookCreateParametersTags {
	readonly [key: string]: string;
}
export interface WebhookPropertiesCreateParametersCustomHeaders {
	readonly [key: string]: string;
}
export interface WebhookPropertiesCreateParametersOrWebhookProperties {
	readonly actions: "delete" | "push"[];
	readonly customHeaders?: WebhookPropertiesCreateParametersCustomHeaders;
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly scope?: string;
	readonly serviceUri: string;
	readonly status?: "disabled" | "enabled";
}
export default {
	registries: registries,
	"registries/replications": registries_replications,
	"registries/webhooks": registries_webhooks,
};

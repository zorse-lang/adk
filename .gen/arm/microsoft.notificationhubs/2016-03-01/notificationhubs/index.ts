import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class namespaces extends ArmResource<namespacesComponentInputs> implements namespacesComponentOutputs {
	constructor(entity: ADKEntity, options: namespacesComponentInputs) {
		super(entity, options.name, "Microsoft.NotificationHubs/namespaces", "2016-03-01", options);
	}
	public readonly apiVersion: "2016-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.NotificationHubs/namespaces";
}
export interface namespacesComponentOutputs {
	readonly apiVersion: "2016-03-01";
	readonly id: string;
	readonly type: "Microsoft.NotificationHubs/namespaces";
}
export interface namespacesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: NamespaceProperties | undefined;
	readonly sku?: Sku | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class namespaces_AuthorizationRules
	extends ArmResource<namespaces_AuthorizationRulesComponentInputs>
	implements namespaces_AuthorizationRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: namespaces_AuthorizationRulesComponentInputs) {
		super(entity, options.name, "Microsoft.NotificationHubs/namespaces/AuthorizationRules", "2016-03-01", options);
	}
	public readonly apiVersion: "2016-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.NotificationHubs/namespaces/AuthorizationRules";
}
export interface namespaces_AuthorizationRulesComponentOutputs {
	readonly apiVersion: "2016-03-01";
	readonly id: string;
	readonly type: "Microsoft.NotificationHubs/namespaces/AuthorizationRules";
}
export interface namespaces_AuthorizationRulesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: SharedAccessAuthorizationRuleProperties;
	readonly sku?: Sku | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class namespaces_notificationHubs
	extends ArmResource<namespaces_notificationHubsComponentInputs>
	implements namespaces_notificationHubsComponentOutputs
{
	constructor(entity: ADKEntity, options: namespaces_notificationHubsComponentInputs) {
		super(entity, options.name, "Microsoft.NotificationHubs/namespaces/notificationHubs", "2016-03-01", options);
	}
	public readonly apiVersion: "2016-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.NotificationHubs/namespaces/notificationHubs";
}
export interface namespaces_notificationHubsComponentOutputs {
	readonly apiVersion: "2016-03-01";
	readonly id: string;
	readonly type: "Microsoft.NotificationHubs/namespaces/notificationHubs";
}
export interface namespaces_notificationHubsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: NotificationHubProperties;
	readonly sku?: Sku | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class namespaces_notificationHubs_AuthorizationRules
	extends ArmResource<namespaces_notificationHubs_AuthorizationRulesComponentInputs>
	implements namespaces_notificationHubs_AuthorizationRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: namespaces_notificationHubs_AuthorizationRulesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.NotificationHubs/namespaces/notificationHubs/AuthorizationRules",
			"2016-03-01",
			options,
		);
	}
	public readonly apiVersion: "2016-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.NotificationHubs/namespaces/notificationHubs/AuthorizationRules";
}
export interface namespaces_notificationHubs_AuthorizationRulesComponentOutputs {
	readonly apiVersion: "2016-03-01";
	readonly id: string;
	readonly type: "Microsoft.NotificationHubs/namespaces/notificationHubs/AuthorizationRules";
}
export interface namespaces_notificationHubs_AuthorizationRulesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: SharedAccessAuthorizationRuleProperties;
	readonly sku?: Sku | undefined;
	readonly tags?: ResourceTags | undefined;
}
export function listKeys(resource: namespaces_AuthorizationRules): ResourceListKeys {
	if (resource.apiVersion !== "2016-03-01") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.NotificationHubs/namespaces/AuthorizationRules") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AdmCredential {
	readonly properties?: AdmCredentialProperties | undefined;
}
export interface AdmCredentialProperties {
	readonly authTokenUrl?: string | undefined;
	readonly clientId?: string | undefined;
	readonly clientSecret?: string | undefined;
}
export interface ApnsCredential {
	readonly properties?: ApnsCredentialProperties | undefined;
}
export interface ApnsCredentialProperties {
	readonly apnsCertificate?: string | undefined;
	readonly certificateKey?: string | undefined;
	readonly endpoint?: string | undefined;
	readonly thumbprint?: string | undefined;
}
export interface BaiduCredential {
	readonly properties?: BaiduCredentialProperties | undefined;
}
export interface BaiduCredentialProperties {
	readonly baiduApiKey?: string | undefined;
	readonly baiduEndPoint?: string | undefined;
	readonly baiduSecretKey?: string | undefined;
}
export interface GcmCredential {
	readonly properties?: GcmCredentialProperties | undefined;
}
export interface GcmCredentialProperties {
	readonly gcmEndpoint?: string | undefined;
	readonly googleApiKey?: string | undefined;
}
export interface MpnsCredential {
	readonly properties?: MpnsCredentialProperties | undefined;
}
export interface MpnsCredentialProperties {
	readonly certificateKey?: string | undefined;
	readonly mpnsCertificate?: string | undefined;
	readonly thumbprint?: string | undefined;
}
export interface NamespaceProperties {
	readonly createdAt?: string | undefined;
	readonly critical?: boolean | undefined;
	readonly enabled?: boolean | undefined;
	readonly name?: string | undefined;
	readonly namespaceType?: "Messaging" | undefined;
	readonly provisioningState?: string | undefined;
	readonly region?: string | undefined;
	readonly scaleUnit?: string | undefined;
	readonly serviceBusEndpoint?: string | undefined;
	readonly status?: string | undefined;
	readonly subscriptionId?: string | undefined;
}
export interface NotificationHubProperties {
	readonly admCredential?: AdmCredential | undefined;
	readonly apnsCredential?: ApnsCredential | undefined;
	readonly authorizationRules?: SharedAccessAuthorizationRuleProperties[] | undefined;
	readonly baiduCredential?: BaiduCredential | undefined;
	readonly gcmCredential?: GcmCredential | undefined;
	readonly mpnsCredential?: MpnsCredential | undefined;
	readonly name?: string | undefined;
	readonly registrationTtl?: string | undefined;
	readonly wnsCredential?: WnsCredential | undefined;
}
export interface ResourceListKeys {
	readonly keyName?: string | undefined;
	readonly primaryConnectionString?: string | undefined;
	readonly primaryKey?: string | undefined;
	readonly secondaryConnectionString?: string | undefined;
	readonly secondaryKey?: string | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface SharedAccessAuthorizationRuleProperties {
	readonly rights?: ("Listen" | "Manage"[]) | undefined;
}
export interface Sku {
	readonly capacity?: number | undefined;
	readonly family?: string | undefined;
	readonly name: "Basic" | "Free" | "Standard";
	readonly size?: string | undefined;
	readonly tier?: string | undefined;
}
export interface WnsCredential {
	readonly properties?: WnsCredentialProperties | undefined;
}
export interface WnsCredentialProperties {
	readonly packageSid?: string | undefined;
	readonly secretKey?: string | undefined;
	readonly windowsLiveEndpoint?: string | undefined;
}
export default {
	namespaces: namespaces,
	"namespaces/AuthorizationRules": namespaces_AuthorizationRules,
	"namespaces/notificationHubs": namespaces_notificationHubs,
	"namespaces/notificationHubs/AuthorizationRules": namespaces_notificationHubs_AuthorizationRules,
};

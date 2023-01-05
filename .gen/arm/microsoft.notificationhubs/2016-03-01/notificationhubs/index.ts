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
	readonly properties?: NamespaceProperties;
	readonly sku?: Sku;
	readonly tags?: ResourceTags;
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
	readonly sku?: Sku;
	readonly tags?: ResourceTags;
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
	readonly sku?: Sku;
	readonly tags?: ResourceTags;
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
	readonly sku?: Sku;
	readonly tags?: ResourceTags;
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
	readonly properties?: AdmCredentialProperties;
}
export interface AdmCredentialProperties {
	readonly authTokenUrl?: string;
	readonly clientId?: string;
	readonly clientSecret?: string;
}
export interface ApnsCredential {
	readonly properties?: ApnsCredentialProperties;
}
export interface ApnsCredentialProperties {
	readonly apnsCertificate?: string;
	readonly certificateKey?: string;
	readonly endpoint?: string;
	readonly thumbprint?: string;
}
export interface BaiduCredential {
	readonly properties?: BaiduCredentialProperties;
}
export interface BaiduCredentialProperties {
	readonly baiduApiKey?: string;
	readonly baiduEndPoint?: string;
	readonly baiduSecretKey?: string;
}
export interface GcmCredential {
	readonly properties?: GcmCredentialProperties;
}
export interface GcmCredentialProperties {
	readonly gcmEndpoint?: string;
	readonly googleApiKey?: string;
}
export interface MpnsCredential {
	readonly properties?: MpnsCredentialProperties;
}
export interface MpnsCredentialProperties {
	readonly certificateKey?: string;
	readonly mpnsCertificate?: string;
	readonly thumbprint?: string;
}
export interface NamespaceProperties {
	readonly createdAt?: string;
	readonly critical?: boolean;
	readonly enabled?: boolean;
	readonly name?: string;
	readonly namespaceType?: "Messaging";
	readonly provisioningState?: string;
	readonly region?: string;
	readonly scaleUnit?: string;
	readonly serviceBusEndpoint?: string;
	readonly status?: string;
	readonly subscriptionId?: string;
}
export interface NotificationHubProperties {
	readonly admCredential?: AdmCredential;
	readonly apnsCredential?: ApnsCredential;
	readonly authorizationRules?: SharedAccessAuthorizationRuleProperties[];
	readonly baiduCredential?: BaiduCredential;
	readonly gcmCredential?: GcmCredential;
	readonly mpnsCredential?: MpnsCredential;
	readonly name?: string;
	readonly registrationTtl?: string;
	readonly wnsCredential?: WnsCredential;
}
export interface ResourceListKeys {
	readonly keyName?: string;
	readonly primaryConnectionString?: string;
	readonly primaryKey?: string;
	readonly secondaryConnectionString?: string;
	readonly secondaryKey?: string;
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface SharedAccessAuthorizationRuleProperties {
	readonly rights?: "Listen" | "Manage"[];
}
export interface Sku {
	readonly capacity?: number;
	readonly family?: string;
	readonly name: "Basic" | "Free" | "Standard";
	readonly size?: string;
	readonly tier?: string;
}
export interface WnsCredential {
	readonly properties?: WnsCredentialProperties;
}
export interface WnsCredentialProperties {
	readonly packageSid?: string;
	readonly secretKey?: string;
	readonly windowsLiveEndpoint?: string;
}
export default {
	namespaces: namespaces,
	"namespaces/AuthorizationRules": namespaces_AuthorizationRules,
	"namespaces/notificationHubs": namespaces_notificationHubs,
	"namespaces/notificationHubs/AuthorizationRules": namespaces_notificationHubs_AuthorizationRules,
};

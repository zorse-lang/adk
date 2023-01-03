import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class connections extends ArmResource<connectionsComponentInputs> implements connectionsComponentOutputs {
	constructor(entity: ADKEntity, options: connectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/connections", "2015-08-01-preview", options);
	}
	public readonly apiVersion: "2015-08-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Web/connections";
}
export interface connectionsComponentOutputs {
	readonly apiVersion: "2015-08-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Web/connections";
}
export interface connectionsComponentInputs {
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: ConnectionProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class locations_managedApis
	extends ArmResource<locations_managedApisComponentInputs>
	implements locations_managedApisComponentOutputs
{
	constructor(entity: ADKEntity, options: locations_managedApisComponentInputs) {
		super(entity, options.name, "Microsoft.Web/locations/managedApis", "2015-08-01-preview", options);
	}
	public readonly apiVersion: "2015-08-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Web/locations/managedApis";
}
export interface locations_managedApisComponentOutputs {
	readonly apiVersion: "2015-08-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Web/locations/managedApis";
}
export interface locations_managedApisComponentInputs {
	readonly kind?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ApiEntityProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export function listConnectionKeys(resource: connections, input: ListConnectionKeysInput): ConnectionSecrets {
	if (resource.apiVersion !== "2015-08-01-preview") {
		throw new Error(`listConnectionKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Web/connections") {
		throw new Error(`listConnectionKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listConsentLinks(resource: connections, input: ConsentLinkInput): ConsentLinkPayload {
	if (resource.apiVersion !== "2015-08-01-preview") {
		throw new Error(`listConsentLinks is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Web/connections") {
		throw new Error(`listConsentLinks is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface ApiEntity {
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name?: string | undefined;
	readonly properties?: ApiEntityProperties | undefined;
	readonly tags?: ResourceTags | undefined;
	readonly type?: string | undefined;
}
export interface ApiEntityProperties {
	readonly apiDefinitionUrl?: string | undefined;
	readonly backendService?: BackendServiceDefinition | undefined;
	readonly capabilities?: string[] | undefined;
	readonly changedTime?: string | undefined;
	readonly connectionParameters?: ApiEntityPropertiesConnectionParameters | undefined;
	readonly createdTime?: string | undefined;
	readonly generalInformation?: GeneralApiInformation | undefined;
	readonly metadata?: any | undefined;
	readonly name?: string | undefined;
	readonly path?: string | undefined;
	readonly policies?: ApiPolicies | undefined;
	readonly protocols?: string[] | undefined;
	readonly runtimeUrls?: string[] | undefined;
}
export interface ApiEntityPropertiesConnectionParameters {
	readonly "[ key: string ]"?: ConnectionParameter | undefined;
}
export interface ApiOAuthSettings {
	readonly clientId?: string | undefined;
	readonly clientSecret?: string | undefined;
	readonly customParameters?: ApiOAuthSettingsCustomParameters | undefined;
	readonly identityProvider?: string | undefined;
	readonly properties?: any | undefined;
	readonly redirectUrl?: string | undefined;
	readonly scopes?: string[] | undefined;
}
export interface ApiOAuthSettingsCustomParameters {
	readonly "[ key: string ]"?: ApiOAuthSettingsParameter | undefined;
}
export interface ApiOAuthSettingsParameter {
	readonly options?: any | undefined;
	readonly uiDefinition?: any | undefined;
	readonly value?: string | undefined;
}
export interface ApiPolicies {
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name?: string | undefined;
	readonly properties?: ApiPoliciesProperties | undefined;
	readonly tags?: ResourceTags | undefined;
	readonly type?: string | undefined;
}
export interface ApiPoliciesProperties {
	readonly content?: string | undefined;
}
export interface ArmPlan {
	readonly name?: string | undefined;
	readonly product?: string | undefined;
	readonly promotionCode?: string | undefined;
	readonly publisher?: string | undefined;
	readonly version?: string | undefined;
}
export interface BackendServiceDefinition {
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name?: string | undefined;
	readonly properties?: BackendServiceDefinitionProperties | undefined;
	readonly tags?: ResourceTags | undefined;
	readonly type?: string | undefined;
}
export interface BackendServiceDefinitionProperties {
	readonly hostingEnvironmentServiceUrls?: HostingEnvironmentServiceDescriptions[] | undefined;
	readonly serviceUrl?: string | undefined;
}
export interface ConnectionError {
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name?: string | undefined;
	readonly properties?: ConnectionErrorProperties | undefined;
	readonly tags?: ResourceTags | undefined;
	readonly type?: string | undefined;
}
export interface ConnectionErrorProperties {
	readonly code?: string | undefined;
	readonly message?: string | undefined;
}
export interface ConnectionParameter {
	readonly defaultValue?: any | undefined;
	readonly oAuthSettings?: ApiOAuthSettings | undefined;
	readonly type?:
		| ("array" | "bool" | "connection" | "int" | "oauthSetting" | "object" | "secureobject" | "securestring")
		| undefined;
	readonly uiDefinition?: any | undefined;
}
export interface ConnectionProperties {
	readonly api?: ExpandedParentApiEntity | undefined;
	readonly changedTime?: string | undefined;
	readonly createdTime?: string | undefined;
	readonly customParameterValues?: ConnectionPropertiesCustomParameterValues | undefined;
	readonly displayName?: string | undefined;
	readonly firstExpirationTime?: string | undefined;
	readonly keywords?: string[] | undefined;
	readonly metadata?: any | undefined;
	readonly name?: string | undefined;
	readonly nonSecretParameterValues?: ConnectionPropertiesNonSecretParameterValues | undefined;
	readonly parameterValues?: ConnectionPropertiesParameterValues | undefined;
	readonly statuses?: ConnectionStatus[] | undefined;
	readonly tenantId?: string | undefined;
}
export interface ConnectionPropertiesCustomParameterValues {
	readonly "[ key: string ]"?: ParameterCustomLoginSettingValues | undefined;
}
export interface ConnectionPropertiesNonSecretParameterValues {
	readonly "[ key: string ]"?: any | undefined;
}
export interface ConnectionPropertiesParameterValues {
	readonly "[ key: string ]"?: any | undefined;
}
export interface ConnectionSecrets {
	readonly connectionKey?: string | undefined;
	readonly parameterValues?: ConnectionSecretsParameterValues | undefined;
}
export interface ConnectionSecretsParameterValues {
	readonly "[ key: string ]"?: any | undefined;
}
export interface ConnectionStatus {
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name?: string | undefined;
	readonly properties?: ConnectionStatusProperties | undefined;
	readonly tags?: ResourceTags | undefined;
	readonly type?: string | undefined;
}
export interface ConnectionStatusProperties {
	readonly error?: ConnectionError | undefined;
	readonly status?: string | undefined;
	readonly target?: string | undefined;
}
export interface ConsentLink {
	readonly displayName?: string | undefined;
	readonly firstPartyLoginUri?: string | undefined;
	readonly link?: string | undefined;
	readonly status?: ("Authenticated" | "Error") | undefined;
}
export interface ConsentLinkInput {
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name?: string | undefined;
	readonly properties?: ConsentLinkInputProperties | undefined;
	readonly tags?: ResourceTags | undefined;
	readonly type?: string | undefined;
}
export interface ConsentLinkInputParameter {
	readonly objectId?: string | undefined;
	readonly parameterName?: string | undefined;
	readonly principalType?: ("ActiveDirectory" | "Connection") | undefined;
	readonly redirectUrl?: string | undefined;
	readonly tenantId?: string | undefined;
}
export interface ConsentLinkInputProperties {
	readonly parameters?: ConsentLinkInputParameter[] | undefined;
}
export interface ConsentLinkPayload {
	readonly value?: ConsentLink[] | undefined;
}
export interface CustomLoginSettingValue {
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name?: string | undefined;
	readonly properties?: CustomLoginSettingValueProperties | undefined;
	readonly tags?: ResourceTags | undefined;
	readonly type?: string | undefined;
}
export interface CustomLoginSettingValueProperties {
	readonly option?: string | undefined;
}
export interface ExpandedParentApiEntity {
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name?: string | undefined;
	readonly properties?: ExpandedParentApiEntityProperties | undefined;
	readonly tags?: ResourceTags | undefined;
	readonly type?: string | undefined;
}
export interface ExpandedParentApiEntityProperties {
	readonly entity?: ResponseMessageEnvelopeApiEntity | undefined;
	readonly id?: string | undefined;
}
export interface GeneralApiInformation {
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name?: string | undefined;
	readonly properties?: GeneralApiInformationProperties | undefined;
	readonly tags?: ResourceTags | undefined;
	readonly type?: string | undefined;
}
export interface GeneralApiInformationProperties {
	readonly connectionDisplayName?: string | undefined;
	readonly connectionPortalUrl?: any | undefined;
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly iconUrl?: string | undefined;
	readonly termsOfUseUrl?: string | undefined;
}
export interface HostingEnvironmentServiceDescriptions {
	readonly hostId?: string | undefined;
	readonly hostingEnvironmentId?: string | undefined;
	readonly serviceUrl?: string | undefined;
	readonly useInternalRouting?: boolean | undefined;
}
export interface ListConnectionKeysInput {
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name?: string | undefined;
	readonly properties?: ListConnectionKeysInputProperties | undefined;
	readonly tags?: ResourceTags | undefined;
	readonly type?: string | undefined;
}
export interface ListConnectionKeysInputProperties {
	readonly validityTimeSpan?: string | undefined;
}
export interface ParameterCustomLoginSettingValues {
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name?: string | undefined;
	readonly properties?: ParameterCustomLoginSettingValuesProperties | undefined;
	readonly tags?: ResourceTags | undefined;
	readonly type?: string | undefined;
}
export interface ParameterCustomLoginSettingValuesProperties {
	readonly customParameters?: ParameterCustomLoginSettingValuesPropertiesCustomParameters | undefined;
}
export interface ParameterCustomLoginSettingValuesPropertiesCustomParameters {
	readonly "[ key: string ]"?: CustomLoginSettingValue | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ResponseMessageEnvelopeApiEntity {
	readonly id?: string | undefined;
	readonly location?: string | undefined;
	readonly name?: string | undefined;
	readonly plan?: ArmPlan | undefined;
	readonly properties?: ApiEntity | undefined;
	readonly sku?: SkuDescription | undefined;
	readonly tags?: ResponseMessageEnvelopeApiEntityTags | undefined;
	readonly type?: string | undefined;
}
export interface ResponseMessageEnvelopeApiEntityTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface SkuDescription {
	readonly capacity?: number | undefined;
	readonly family?: string | undefined;
	readonly name?: string | undefined;
	readonly size?: string | undefined;
	readonly tier?: string | undefined;
}
export default {
	connections: connections,
	"locations/managedApis": locations_managedApis,
};

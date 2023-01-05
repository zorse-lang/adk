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
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: ConnectionProperties;
	readonly tags?: ResourceTags;
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
	readonly kind?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: ApiEntityProperties;
	readonly tags?: ResourceTags;
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
	readonly id?: string;
	readonly kind?: string;
	readonly location: string;
	readonly name?: string;
	readonly properties?: ApiEntityProperties;
	readonly tags?: ResourceTags;
	readonly type?: string;
}
export interface ApiEntityProperties {
	readonly apiDefinitionUrl?: string;
	readonly backendService?: BackendServiceDefinition;
	readonly capabilities?: string[];
	readonly changedTime?: string;
	readonly connectionParameters?: ApiEntityPropertiesConnectionParameters;
	readonly createdTime?: string;
	readonly generalInformation?: GeneralApiInformation;
	readonly metadata?: any;
	readonly name?: string;
	readonly path?: string;
	readonly policies?: ApiPolicies;
	readonly protocols?: string[];
	readonly runtimeUrls?: string[];
}
export interface ApiEntityPropertiesConnectionParameters {
	readonly [key: string]: ConnectionParameter;
}
export interface ApiOAuthSettings {
	readonly clientId?: string;
	readonly clientSecret?: string;
	readonly customParameters?: ApiOAuthSettingsCustomParameters;
	readonly identityProvider?: string;
	readonly properties?: any;
	readonly redirectUrl?: string;
	readonly scopes?: string[];
}
export interface ApiOAuthSettingsCustomParameters {
	readonly [key: string]: ApiOAuthSettingsParameter;
}
export interface ApiOAuthSettingsParameter {
	readonly options?: any;
	readonly uiDefinition?: any;
	readonly value?: string;
}
export interface ApiPolicies {
	readonly id?: string;
	readonly kind?: string;
	readonly location: string;
	readonly name?: string;
	readonly properties?: ApiPoliciesProperties;
	readonly tags?: ResourceTags;
	readonly type?: string;
}
export interface ApiPoliciesProperties {
	readonly content?: string;
}
export interface ArmPlan {
	readonly name?: string;
	readonly product?: string;
	readonly promotionCode?: string;
	readonly publisher?: string;
	readonly version?: string;
}
export interface BackendServiceDefinition {
	readonly id?: string;
	readonly kind?: string;
	readonly location: string;
	readonly name?: string;
	readonly properties?: BackendServiceDefinitionProperties;
	readonly tags?: ResourceTags;
	readonly type?: string;
}
export interface BackendServiceDefinitionProperties {
	readonly hostingEnvironmentServiceUrls?: HostingEnvironmentServiceDescriptions[];
	readonly serviceUrl?: string;
}
export interface ConnectionError {
	readonly id?: string;
	readonly kind?: string;
	readonly location: string;
	readonly name?: string;
	readonly properties?: ConnectionErrorProperties;
	readonly tags?: ResourceTags;
	readonly type?: string;
}
export interface ConnectionErrorProperties {
	readonly code?: string;
	readonly message?: string;
}
export interface ConnectionParameter {
	readonly defaultValue?: any;
	readonly oAuthSettings?: ApiOAuthSettings;
	readonly type?: "array" | "bool" | "connection" | "int" | "oauthSetting" | "object" | "secureobject" | "securestring";
	readonly uiDefinition?: any;
}
export interface ConnectionProperties {
	readonly api?: ExpandedParentApiEntity;
	readonly changedTime?: string;
	readonly createdTime?: string;
	readonly customParameterValues?: ConnectionPropertiesCustomParameterValues;
	readonly displayName?: string;
	readonly firstExpirationTime?: string;
	readonly keywords?: string[];
	readonly metadata?: any;
	readonly name?: string;
	readonly nonSecretParameterValues?: ConnectionPropertiesNonSecretParameterValues;
	readonly parameterValues?: ConnectionPropertiesParameterValues;
	readonly statuses?: ConnectionStatus[];
	readonly tenantId?: string;
}
export interface ConnectionPropertiesCustomParameterValues {
	readonly [key: string]: ParameterCustomLoginSettingValues;
}
export interface ConnectionPropertiesNonSecretParameterValues {
	readonly [key: string]: any;
}
export interface ConnectionPropertiesParameterValues {
	readonly [key: string]: any;
}
export interface ConnectionSecrets {
	readonly connectionKey?: string;
	readonly parameterValues?: ConnectionSecretsParameterValues;
}
export interface ConnectionSecretsParameterValues {
	readonly [key: string]: any;
}
export interface ConnectionStatus {
	readonly id?: string;
	readonly kind?: string;
	readonly location: string;
	readonly name?: string;
	readonly properties?: ConnectionStatusProperties;
	readonly tags?: ResourceTags;
	readonly type?: string;
}
export interface ConnectionStatusProperties {
	readonly error?: ConnectionError;
	readonly status?: string;
	readonly target?: string;
}
export interface ConsentLink {
	readonly displayName?: string;
	readonly firstPartyLoginUri?: string;
	readonly link?: string;
	readonly status?: "Authenticated" | "Error";
}
export interface ConsentLinkInput {
	readonly id?: string;
	readonly kind?: string;
	readonly location: string;
	readonly name?: string;
	readonly properties?: ConsentLinkInputProperties;
	readonly tags?: ResourceTags;
	readonly type?: string;
}
export interface ConsentLinkInputParameter {
	readonly objectId?: string;
	readonly parameterName?: string;
	readonly principalType?: "ActiveDirectory" | "Connection";
	readonly redirectUrl?: string;
	readonly tenantId?: string;
}
export interface ConsentLinkInputProperties {
	readonly parameters?: ConsentLinkInputParameter[];
}
export interface ConsentLinkPayload {
	readonly value?: ConsentLink[];
}
export interface CustomLoginSettingValue {
	readonly id?: string;
	readonly kind?: string;
	readonly location: string;
	readonly name?: string;
	readonly properties?: CustomLoginSettingValueProperties;
	readonly tags?: ResourceTags;
	readonly type?: string;
}
export interface CustomLoginSettingValueProperties {
	readonly option?: string;
}
export interface ExpandedParentApiEntity {
	readonly id?: string;
	readonly kind?: string;
	readonly location: string;
	readonly name?: string;
	readonly properties?: ExpandedParentApiEntityProperties;
	readonly tags?: ResourceTags;
	readonly type?: string;
}
export interface ExpandedParentApiEntityProperties {
	readonly entity?: ResponseMessageEnvelopeApiEntity;
	readonly id?: string;
}
export interface GeneralApiInformation {
	readonly id?: string;
	readonly kind?: string;
	readonly location: string;
	readonly name?: string;
	readonly properties?: GeneralApiInformationProperties;
	readonly tags?: ResourceTags;
	readonly type?: string;
}
export interface GeneralApiInformationProperties {
	readonly connectionDisplayName?: string;
	readonly connectionPortalUrl?: any;
	readonly description?: string;
	readonly displayName?: string;
	readonly iconUrl?: string;
	readonly termsOfUseUrl?: string;
}
export interface HostingEnvironmentServiceDescriptions {
	readonly hostId?: string;
	readonly hostingEnvironmentId?: string;
	readonly serviceUrl?: string;
	readonly useInternalRouting?: boolean;
}
export interface ListConnectionKeysInput {
	readonly id?: string;
	readonly kind?: string;
	readonly location: string;
	readonly name?: string;
	readonly properties?: ListConnectionKeysInputProperties;
	readonly tags?: ResourceTags;
	readonly type?: string;
}
export interface ListConnectionKeysInputProperties {
	readonly validityTimeSpan?: string;
}
export interface ParameterCustomLoginSettingValues {
	readonly id?: string;
	readonly kind?: string;
	readonly location: string;
	readonly name?: string;
	readonly properties?: ParameterCustomLoginSettingValuesProperties;
	readonly tags?: ResourceTags;
	readonly type?: string;
}
export interface ParameterCustomLoginSettingValuesProperties {
	readonly customParameters?: ParameterCustomLoginSettingValuesPropertiesCustomParameters;
}
export interface ParameterCustomLoginSettingValuesPropertiesCustomParameters {
	readonly [key: string]: CustomLoginSettingValue;
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface ResponseMessageEnvelopeApiEntity {
	readonly id?: string;
	readonly location?: string;
	readonly name?: string;
	readonly plan?: ArmPlan;
	readonly properties?: ApiEntity;
	readonly sku?: SkuDescription;
	readonly tags?: ResponseMessageEnvelopeApiEntityTags;
	readonly type?: string;
}
export interface ResponseMessageEnvelopeApiEntityTags {
	readonly [key: string]: string;
}
export interface SkuDescription {
	readonly capacity?: number;
	readonly family?: string;
	readonly name?: string;
	readonly size?: string;
	readonly tier?: string;
}
export default {
	connections: connections,
	"locations/managedApis": locations_managedApis,
};

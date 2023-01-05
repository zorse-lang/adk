import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class connectionGateways
	extends ArmResource<connectionGatewaysComponentInputs>
	implements connectionGatewaysComponentOutputs
{
	constructor(entity: ADKEntity, options: connectionGatewaysComponentInputs) {
		super(entity, options.name, "Microsoft.Web/connectionGateways", "2016-06-01", options);
	}
	public readonly apiVersion: "2016-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/connectionGateways";
}
export interface connectionGatewaysComponentOutputs {
	readonly apiVersion: "2016-06-01";
	readonly id: string;
	readonly type: "Microsoft.Web/connectionGateways";
}
export interface connectionGatewaysComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: ConnectionGatewayDefinitionProperties;
	readonly tags?: TagsDictionary;
}
export class connections extends ArmResource<connectionsComponentInputs> implements connectionsComponentOutputs {
	constructor(entity: ADKEntity, options: connectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/connections", "2016-06-01", options);
	}
	public readonly apiVersion: "2016-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/connections";
}
export interface connectionsComponentOutputs {
	readonly apiVersion: "2016-06-01";
	readonly id: string;
	readonly type: "Microsoft.Web/connections";
}
export interface connectionsComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: ApiConnectionDefinitionProperties;
	readonly tags?: TagsDictionary;
}
export class customApis extends ArmResource<customApisComponentInputs> implements customApisComponentOutputs {
	constructor(entity: ADKEntity, options: customApisComponentInputs) {
		super(entity, options.name, "Microsoft.Web/customApis", "2016-06-01", options);
	}
	public readonly apiVersion: "2016-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/customApis";
}
export interface customApisComponentOutputs {
	readonly apiVersion: "2016-06-01";
	readonly id: string;
	readonly type: "Microsoft.Web/customApis";
}
export interface customApisComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: CustomApiPropertiesDefinition;
	readonly tags?: TagsDictionary;
}
export class locations_connectionGatewayInstallations
	extends ArmResource<locations_connectionGatewayInstallationsComponentInputs>
	implements locations_connectionGatewayInstallationsComponentOutputs
{
	constructor(entity: ADKEntity, options: locations_connectionGatewayInstallationsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/locations/connectionGatewayInstallations", "2016-06-01", options);
	}
	public readonly apiVersion: "2016-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/locations/connectionGatewayInstallations";
}
export interface locations_connectionGatewayInstallationsComponentOutputs {
	readonly apiVersion: "2016-06-01";
	readonly id: string;
	readonly type: "Microsoft.Web/locations/connectionGatewayInstallations";
}
export interface locations_connectionGatewayInstallationsComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: ConnectionGatewayInstallationDefinitionProperties;
	readonly tags?: TagsDictionary;
}
export class locations_managedApis
	extends ArmResource<locations_managedApisComponentInputs>
	implements locations_managedApisComponentOutputs
{
	constructor(entity: ADKEntity, options: locations_managedApisComponentInputs) {
		super(entity, options.name, "Microsoft.Web/locations/managedApis", "2016-06-01", options);
	}
	public readonly apiVersion: "2016-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/locations/managedApis";
}
export interface locations_managedApisComponentOutputs {
	readonly apiVersion: "2016-06-01";
	readonly id: string;
	readonly type: "Microsoft.Web/locations/managedApis";
}
export interface locations_managedApisComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: ApiResourceProperties;
	readonly tags?: TagsDictionary;
}
export function listConsentLinks(resource: connections, input: ListConsentLinksDefinition): ConsentLinkCollection {
	if (resource.apiVersion !== "2016-06-01") {
		throw new Error(`listConsentLinks is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Web/connections") {
		throw new Error(`listConsentLinks is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listWsdlInterfaces(resource: ArmResource, input: WsdlDefinition): WsdlServiceCollection {
	if (resource.apiVersion !== "2016-06-01") {
		throw new Error(`listWsdlInterfaces is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Web/locations") {
		throw new Error(`listWsdlInterfaces is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface ApiConnectionDefinitionProperties {
	readonly api?: ApiReference;
	readonly changedTime?: string;
	readonly createdTime?: string;
	readonly customParameterValues?: ApiConnectionDefinitionPropertiesCustomParameterValues;
	readonly displayName?: string;
	readonly nonSecretParameterValues?: ApiConnectionDefinitionPropertiesNonSecretParameterValues;
	readonly parameterValues?: ApiConnectionDefinitionPropertiesParameterValues;
	readonly statuses?: ConnectionStatusDefinition[];
	readonly testLinks?: ApiConnectionTestLink[];
}
export interface ApiConnectionDefinitionPropertiesCustomParameterValues {
	readonly [key: string]: string;
}
export interface ApiConnectionDefinitionPropertiesNonSecretParameterValues {
	readonly [key: string]: string;
}
export interface ApiConnectionDefinitionPropertiesParameterValues {
	readonly [key: string]: string;
}
export interface ApiConnectionTestLink {
	readonly method?: string;
	readonly requestUri?: string;
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
export interface ApiReference {
	readonly brandColor?: string;
	readonly description?: string;
	readonly displayName?: string;
	readonly iconUri?: string;
	readonly id?: string;
	readonly name?: string;
	readonly swagger?: any;
	readonly type?: string;
}
export interface ApiResourceBackendService {
	readonly serviceUrl?: string;
}
export interface ApiResourceDefinitions {
	readonly modifiedSwaggerUrl?: string;
	readonly originalSwaggerUrl?: string;
}
export interface ApiResourceGeneralInformation {
	readonly description?: string;
	readonly displayName?: string;
	readonly iconUrl?: string;
	readonly releaseTag?: string;
	readonly termsOfUseUrl?: string;
}
export interface ApiResourceMetadata {
	readonly apiType?: "NotSpecified" | "Rest" | "Soap";
	readonly brandColor?: string;
	readonly connectionType?: string;
	readonly hideKey?: string;
	readonly source?: string;
	readonly tags?: TagsDictionary;
	readonly wsdlImportMethod?: "NotSpecified" | "SoapPassThrough" | "SoapToRest";
	readonly wsdlService?: WsdlService;
}
export interface ApiResourcePolicies {
	readonly content?: string;
	readonly contentLink?: string;
}
export interface ApiResourceProperties {
	readonly apiDefinitions?: ApiResourceDefinitions;
	readonly apiDefinitionUrl?: string;
	readonly backendService?: ApiResourceBackendService;
	readonly capabilities?: string[];
	readonly connectionParameters?: ApiResourcePropertiesConnectionParameters;
	readonly generalInformation?: ApiResourceGeneralInformation;
	readonly metadata?: ApiResourceMetadata;
	readonly name?: string;
	readonly policies?: ApiResourcePolicies;
	readonly runtimeUrls?: string[];
	readonly swagger?: any;
}
export interface ApiResourcePropertiesConnectionParameters {
	readonly [key: string]: ConnectionParameter;
}
export interface ConnectionError {
	readonly etag?: string;
	readonly id?: string;
	readonly location?: string;
	readonly name?: string;
	readonly properties?: ConnectionErrorProperties;
	readonly tags?: TagsDictionary;
	readonly type?: string;
}
export interface ConnectionErrorProperties {
	readonly code?: string;
	readonly message?: string;
}
export interface ConnectionGatewayDefinitionProperties {
	readonly backendUri?: string;
	readonly connectionGatewayInstallation?: ConnectionGatewayReference;
	readonly contactInformation?: string[];
	readonly description?: string;
	readonly displayName?: string;
	readonly machineName?: string;
	readonly status?: any;
}
export interface ConnectionGatewayInstallationDefinitionProperties {
	readonly backendUri?: string;
	readonly connectionGateway?: ConnectionGatewayReference;
	readonly contactInformation?: string[];
	readonly description?: string;
	readonly displayName?: string;
	readonly machineName?: string;
	readonly status?: any;
}
export interface ConnectionGatewayReference {
	readonly id?: string;
	readonly location?: string;
	readonly name?: string;
	readonly type?: string;
}
export interface ConnectionParameter {
	readonly oAuthSettings?: ApiOAuthSettings;
	readonly type?: "array" | "bool" | "connection" | "int" | "oauthSetting" | "object" | "secureobject" | "securestring";
}
export interface ConnectionStatusDefinition {
	readonly error?: ConnectionError;
	readonly status?: string;
	readonly target?: string;
}
export interface ConsentLinkCollection {
	readonly value?: ConsentLinkDefinition[];
}
export interface ConsentLinkDefinition {
	readonly displayName?: string;
	readonly firstPartyLoginUri?: string;
	readonly link?: string;
	readonly status?: "Authenticated" | "Error" | "Unauthenticated";
}
export interface ConsentLinkParameterDefinition {
	readonly objectId?: string;
	readonly parameterName?: string;
	readonly redirectUrl?: string;
	readonly tenantId?: string;
}
export interface CustomApiPropertiesDefinition {
	readonly apiDefinitions?: ApiResourceDefinitions;
	readonly apiType?: "NotSpecified" | "Rest" | "Soap";
	readonly backendService?: ApiResourceBackendService;
	readonly brandColor?: string;
	readonly capabilities?: string[];
	readonly connectionParameters?: CustomApiPropertiesDefinitionConnectionParameters;
	readonly description?: string;
	readonly displayName?: string;
	readonly iconUri?: string;
	readonly runtimeUrls?: string[];
	readonly swagger?: any;
	readonly wsdlDefinition?: WsdlDefinition;
}
export interface CustomApiPropertiesDefinitionConnectionParameters {
	readonly [key: string]: ConnectionParameter;
}
export interface ListConsentLinksDefinition {
	readonly parameters?: ConsentLinkParameterDefinition[];
}
export interface TagsDictionary {
	readonly [key: string]: string;
}
export interface WsdlDefinition {
	readonly content?: string;
	readonly importMethod?: "NotSpecified" | "SoapPassThrough" | "SoapToRest";
	readonly service?: WsdlService;
	readonly url?: string;
}
export interface WsdlService {
	readonly endpointQualifiedNames?: string[];
	readonly qualifiedName: string;
}
export interface WsdlServiceCollection {
	readonly value?: WsdlService[];
}
export default {
	connectionGateways: connectionGateways,
	connections: connections,
	customApis: customApis,
	"locations/connectionGatewayInstallations": locations_connectionGatewayInstallations,
	"locations/managedApis": locations_managedApis,
};

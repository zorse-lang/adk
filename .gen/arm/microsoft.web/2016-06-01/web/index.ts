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
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ConnectionGatewayDefinitionProperties | undefined;
	readonly tags?: TagsDictionary | undefined;
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
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ApiConnectionDefinitionProperties | undefined;
	readonly tags?: TagsDictionary | undefined;
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
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: CustomApiPropertiesDefinition | undefined;
	readonly tags?: TagsDictionary | undefined;
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
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ConnectionGatewayInstallationDefinitionProperties | undefined;
	readonly tags?: TagsDictionary | undefined;
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
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ApiResourceProperties | undefined;
	readonly tags?: TagsDictionary | undefined;
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
	readonly api?: ApiReference | undefined;
	readonly changedTime?: string | undefined;
	readonly createdTime?: string | undefined;
	readonly customParameterValues?: ApiConnectionDefinitionPropertiesCustomParameterValues | undefined;
	readonly displayName?: string | undefined;
	readonly nonSecretParameterValues?: ApiConnectionDefinitionPropertiesNonSecretParameterValues | undefined;
	readonly parameterValues?: ApiConnectionDefinitionPropertiesParameterValues | undefined;
	readonly statuses?: ConnectionStatusDefinition[] | undefined;
	readonly testLinks?: ApiConnectionTestLink[] | undefined;
}
export interface ApiConnectionDefinitionPropertiesCustomParameterValues {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ApiConnectionDefinitionPropertiesNonSecretParameterValues {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ApiConnectionDefinitionPropertiesParameterValues {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ApiConnectionTestLink {
	readonly method?: string | undefined;
	readonly requestUri?: string | undefined;
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
export interface ApiReference {
	readonly brandColor?: string | undefined;
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly iconUri?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly swagger?: any | undefined;
	readonly type?: string | undefined;
}
export interface ApiResourceBackendService {
	readonly serviceUrl?: string | undefined;
}
export interface ApiResourceDefinitions {
	readonly modifiedSwaggerUrl?: string | undefined;
	readonly originalSwaggerUrl?: string | undefined;
}
export interface ApiResourceGeneralInformation {
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly iconUrl?: string | undefined;
	readonly releaseTag?: string | undefined;
	readonly termsOfUseUrl?: string | undefined;
}
export interface ApiResourceMetadata {
	readonly apiType?: ("NotSpecified" | "Rest" | "Soap") | undefined;
	readonly brandColor?: string | undefined;
	readonly connectionType?: string | undefined;
	readonly hideKey?: string | undefined;
	readonly source?: string | undefined;
	readonly tags?: TagsDictionary | undefined;
	readonly wsdlImportMethod?: ("NotSpecified" | "SoapPassThrough" | "SoapToRest") | undefined;
	readonly wsdlService?: WsdlService | undefined;
}
export interface ApiResourcePolicies {
	readonly content?: string | undefined;
	readonly contentLink?: string | undefined;
}
export interface ApiResourceProperties {
	readonly apiDefinitions?: ApiResourceDefinitions | undefined;
	readonly apiDefinitionUrl?: string | undefined;
	readonly backendService?: ApiResourceBackendService | undefined;
	readonly capabilities?: string[] | undefined;
	readonly connectionParameters?: ApiResourcePropertiesConnectionParameters | undefined;
	readonly generalInformation?: ApiResourceGeneralInformation | undefined;
	readonly metadata?: ApiResourceMetadata | undefined;
	readonly name?: string | undefined;
	readonly policies?: ApiResourcePolicies | undefined;
	readonly runtimeUrls?: string[] | undefined;
	readonly swagger?: any | undefined;
}
export interface ApiResourcePropertiesConnectionParameters {
	readonly "[ key: string ]"?: ConnectionParameter | undefined;
}
export interface ConnectionError {
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly location?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: ConnectionErrorProperties | undefined;
	readonly tags?: TagsDictionary | undefined;
	readonly type?: string | undefined;
}
export interface ConnectionErrorProperties {
	readonly code?: string | undefined;
	readonly message?: string | undefined;
}
export interface ConnectionGatewayDefinitionProperties {
	readonly backendUri?: string | undefined;
	readonly connectionGatewayInstallation?: ConnectionGatewayReference | undefined;
	readonly contactInformation?: string[] | undefined;
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly machineName?: string | undefined;
	readonly status?: any | undefined;
}
export interface ConnectionGatewayInstallationDefinitionProperties {
	readonly backendUri?: string | undefined;
	readonly connectionGateway?: ConnectionGatewayReference | undefined;
	readonly contactInformation?: string[] | undefined;
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly machineName?: string | undefined;
	readonly status?: any | undefined;
}
export interface ConnectionGatewayReference {
	readonly id?: string | undefined;
	readonly location?: string | undefined;
	readonly name?: string | undefined;
	readonly type?: string | undefined;
}
export interface ConnectionParameter {
	readonly oAuthSettings?: ApiOAuthSettings | undefined;
	readonly type?:
		| ("array" | "bool" | "connection" | "int" | "oauthSetting" | "object" | "secureobject" | "securestring")
		| undefined;
}
export interface ConnectionStatusDefinition {
	readonly error?: ConnectionError | undefined;
	readonly status?: string | undefined;
	readonly target?: string | undefined;
}
export interface ConsentLinkCollection {
	readonly value?: ConsentLinkDefinition[] | undefined;
}
export interface ConsentLinkDefinition {
	readonly displayName?: string | undefined;
	readonly firstPartyLoginUri?: string | undefined;
	readonly link?: string | undefined;
	readonly status?: ("Authenticated" | "Error" | "Unauthenticated") | undefined;
}
export interface ConsentLinkParameterDefinition {
	readonly objectId?: string | undefined;
	readonly parameterName?: string | undefined;
	readonly redirectUrl?: string | undefined;
	readonly tenantId?: string | undefined;
}
export interface CustomApiPropertiesDefinition {
	readonly apiDefinitions?: ApiResourceDefinitions | undefined;
	readonly apiType?: ("NotSpecified" | "Rest" | "Soap") | undefined;
	readonly backendService?: ApiResourceBackendService | undefined;
	readonly brandColor?: string | undefined;
	readonly capabilities?: string[] | undefined;
	readonly connectionParameters?: CustomApiPropertiesDefinitionConnectionParameters | undefined;
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly iconUri?: string | undefined;
	readonly runtimeUrls?: string[] | undefined;
	readonly swagger?: any | undefined;
	readonly wsdlDefinition?: WsdlDefinition | undefined;
}
export interface CustomApiPropertiesDefinitionConnectionParameters {
	readonly "[ key: string ]"?: ConnectionParameter | undefined;
}
export interface ListConsentLinksDefinition {
	readonly parameters?: ConsentLinkParameterDefinition[] | undefined;
}
export interface TagsDictionary {
	readonly "[ key: string ]"?: string | undefined;
}
export interface WsdlDefinition {
	readonly content?: string | undefined;
	readonly importMethod?: ("NotSpecified" | "SoapPassThrough" | "SoapToRest") | undefined;
	readonly service?: WsdlService | undefined;
	readonly url?: string | undefined;
}
export interface WsdlService {
	readonly endpointQualifiedNames?: string[] | undefined;
	readonly qualifiedName: string;
}
export interface WsdlServiceCollection {
	readonly value?: WsdlService[] | undefined;
}
export default {
	connectionGateways: connectionGateways,
	connections: connections,
	customApis: customApis,
	"locations/connectionGatewayInstallations": locations_connectionGatewayInstallations,
	"locations/managedApis": locations_managedApis,
};

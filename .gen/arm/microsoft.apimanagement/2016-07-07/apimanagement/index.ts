import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class service extends ArmResource<serviceComponentInputs> implements serviceComponentOutputs {
	constructor(entity: ADKEntity, options: serviceComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service", "2016-07-07", options);
	}
	public readonly apiVersion: "2016-07-07";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service";
}
export interface serviceComponentOutputs {
	readonly apiVersion: "2016-07-07";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service";
}
export interface serviceComponentInputs {
	readonly etag?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: ApiManagementServiceProperties | undefined;
	readonly sku?: ApiManagementServiceSkuProperties | undefined;
	readonly tags?: ApiManagementServiceBaseParametersTags | undefined;
}
export class service_apis extends ArmResource<service_apisComponentInputs> implements service_apisComponentOutputs {
	constructor(entity: ADKEntity, options: service_apisComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/apis", "2016-07-07", options);
	}
	public readonly apiVersion: "2016-07-07";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/apis";
}
export interface service_apisComponentOutputs {
	readonly apiVersion: "2016-07-07";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/apis";
}
export interface service_apisComponentInputs {
	readonly authenticationSettings?: AuthenticationSettingsContract | undefined;
	readonly content?: any | undefined;
	readonly description?: string | undefined;
	readonly name: string;
	readonly path: string;
	readonly protocols: "Http"[];
	readonly requestId?: string | undefined;
	readonly serviceUrl: string;
	readonly statusCode?: ("Accepted" | "Conflict" | "Continue" | "Created" | "NotFound") | undefined;
	readonly subscriptionKeyParameterNames?: SubscriptionKeyParameterNamesContract | undefined;
}
export class service_apis_operations
	extends ArmResource<service_apis_operationsComponentInputs>
	implements service_apis_operationsComponentOutputs
{
	constructor(entity: ADKEntity, options: service_apis_operationsComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/apis/operations", "2016-07-07", options);
	}
	public readonly apiVersion: "2016-07-07";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/apis/operations";
}
export interface service_apis_operationsComponentOutputs {
	readonly apiVersion: "2016-07-07";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/apis/operations";
}
export interface service_apis_operationsComponentInputs {
	readonly description?: string | undefined;
	readonly method: string;
	readonly name: string;
	readonly request?: RequestContract | undefined;
	readonly responses?: ResultContract[] | undefined;
	readonly templateParameters?: ParameterContract[] | undefined;
	readonly urlTemplate: string;
}
export class service_authorizationServers
	extends ArmResource<service_authorizationServersComponentInputs>
	implements service_authorizationServersComponentOutputs
{
	constructor(entity: ADKEntity, options: service_authorizationServersComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/authorizationServers", "2016-07-07", options);
	}
	public readonly apiVersion: "2016-07-07";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/authorizationServers";
}
export interface service_authorizationServersComponentOutputs {
	readonly apiVersion: "2016-07-07";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/authorizationServers";
}
export interface service_authorizationServersComponentInputs {
	readonly authorizationEndpoint: string;
	readonly authorizationMethods?: ("DELETE" | "GET" | "HEAD" | "OPTIONS" | "PATCH" | "POST" | "PUT"[]) | undefined;
	readonly bearerTokenSendingMethods?: "authorizationHeader"[] | undefined;
	readonly clientAuthenticationMethod?: "Basic"[] | undefined;
	readonly clientId: string;
	readonly clientRegistrationEndpoint: string;
	readonly clientSecret?: string | undefined;
	readonly defaultScope?: string | undefined;
	readonly description?: string | undefined;
	readonly grantTypes: "authorizationCode" | "clientCredentials" | "implicit"[];
	readonly name: string;
	readonly resourceOwnerPassword?: string | undefined;
	readonly resourceOwnerUsername?: string | undefined;
	readonly supportState?: boolean | undefined;
	readonly tokenBodyParameters?: TokenBodyParameterContract[] | undefined;
	readonly tokenEndpoint?: string | undefined;
}
export class service_backends
	extends ArmResource<service_backendsComponentInputs>
	implements service_backendsComponentOutputs
{
	constructor(entity: ADKEntity, options: service_backendsComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/backends", "2016-07-07", options);
	}
	public readonly apiVersion: "2016-07-07";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/backends";
}
export interface service_backendsComponentOutputs {
	readonly apiVersion: "2016-07-07";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/backends";
}
export interface service_backendsComponentInputs {
	readonly host: string;
	readonly name: string;
	readonly skipCertificateChainValidation?: boolean | undefined;
}
export class service_certificates
	extends ArmResource<service_certificatesComponentInputs>
	implements service_certificatesComponentOutputs
{
	constructor(entity: ADKEntity, options: service_certificatesComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/certificates", "2016-07-07", options);
	}
	public readonly apiVersion: "2016-07-07";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/certificates";
}
export interface service_certificatesComponentOutputs {
	readonly apiVersion: "2016-07-07";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/certificates";
}
export interface service_certificatesComponentInputs {
	readonly data: string;
	readonly expirationDate?: string | undefined;
	readonly name: string;
	readonly password: string;
	readonly subject?: string | undefined;
	readonly thumbprint?: string | undefined;
}
export class service_groups extends ArmResource<service_groupsComponentInputs> implements service_groupsComponentOutputs {
	constructor(entity: ADKEntity, options: service_groupsComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/groups", "2016-07-07", options);
	}
	public readonly apiVersion: "2016-07-07";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/groups";
}
export interface service_groupsComponentOutputs {
	readonly apiVersion: "2016-07-07";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/groups";
}
export interface service_groupsComponentInputs {
	readonly builtIn?: boolean | undefined;
	readonly description?: string | undefined;
	readonly externalId?: string | undefined;
	readonly name: string;
}
export class service_groups_users
	extends ArmResource<service_groups_usersComponentInputs>
	implements service_groups_usersComponentOutputs
{
	constructor(entity: ADKEntity, options: service_groups_usersComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/groups/users", "2016-07-07", options);
	}
	public readonly apiVersion: "2016-07-07";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/groups/users";
}
export interface service_groups_usersComponentOutputs {
	readonly apiVersion: "2016-07-07";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/groups/users";
}
export interface service_groups_usersComponentInputs {
	readonly name: string;
}
export class service_identityProviders
	extends ArmResource<service_identityProvidersComponentInputs>
	implements service_identityProvidersComponentOutputs
{
	constructor(entity: ADKEntity, options: service_identityProvidersComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/identityProviders", "2016-07-07", options);
	}
	public readonly apiVersion: "2016-07-07";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/identityProviders";
}
export interface service_identityProvidersComponentOutputs {
	readonly apiVersion: "2016-07-07";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/identityProviders";
}
export interface service_identityProvidersComponentInputs {
	readonly allowedTenants?: string[] | undefined;
	readonly clientId: string;
	readonly clientSecret: string;
	readonly name: string;
}
export class service_loggers
	extends ArmResource<service_loggersComponentInputs>
	implements service_loggersComponentOutputs
{
	constructor(entity: ADKEntity, options: service_loggersComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/loggers", "2016-07-07", options);
	}
	public readonly apiVersion: "2016-07-07";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/loggers";
}
export interface service_loggersComponentOutputs {
	readonly apiVersion: "2016-07-07";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/loggers";
}
export interface service_loggersComponentInputs {
	readonly credentials: LoggerCreateParametersCredentials;
	readonly description?: string | undefined;
	readonly isBuffered?: boolean | undefined;
	readonly name: string;
}
export class service_openidConnectProviders
	extends ArmResource<service_openidConnectProvidersComponentInputs>
	implements service_openidConnectProvidersComponentOutputs
{
	constructor(entity: ADKEntity, options: service_openidConnectProvidersComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/openidConnectProviders", "2016-07-07", options);
	}
	public readonly apiVersion: "2016-07-07";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/openidConnectProviders";
}
export interface service_openidConnectProvidersComponentOutputs {
	readonly apiVersion: "2016-07-07";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/openidConnectProviders";
}
export interface service_openidConnectProvidersComponentInputs {
	readonly clientId: string;
	readonly clientSecret?: string | undefined;
	readonly description?: string | undefined;
	readonly metadataEndpoint: string;
	readonly name: string;
}
export class service_products
	extends ArmResource<service_productsComponentInputs>
	implements service_productsComponentOutputs
{
	constructor(entity: ADKEntity, options: service_productsComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/products", "2016-07-07", options);
	}
	public readonly apiVersion: "2016-07-07";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/products";
}
export interface service_productsComponentOutputs {
	readonly apiVersion: "2016-07-07";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/products";
}
export interface service_productsComponentInputs {
	readonly approvalRequired?: boolean | undefined;
	readonly description?: string | undefined;
	readonly name: string;
	readonly state?: "NotPublished" | undefined;
	readonly subscriptionRequired?: boolean | undefined;
	readonly subscriptionsLimit?: number | undefined;
	readonly terms?: string | undefined;
}
export class service_products_apis
	extends ArmResource<service_products_apisComponentInputs>
	implements service_products_apisComponentOutputs
{
	constructor(entity: ADKEntity, options: service_products_apisComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/products/apis", "2016-07-07", options);
	}
	public readonly apiVersion: "2016-07-07";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/products/apis";
}
export interface service_products_apisComponentOutputs {
	readonly apiVersion: "2016-07-07";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/products/apis";
}
export interface service_products_apisComponentInputs {
	readonly name: string;
}
export class service_products_groups
	extends ArmResource<service_products_groupsComponentInputs>
	implements service_products_groupsComponentOutputs
{
	constructor(entity: ADKEntity, options: service_products_groupsComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/products/groups", "2016-07-07", options);
	}
	public readonly apiVersion: "2016-07-07";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/products/groups";
}
export interface service_products_groupsComponentOutputs {
	readonly apiVersion: "2016-07-07";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/products/groups";
}
export interface service_products_groupsComponentInputs {
	readonly name: string;
}
export class service_properties
	extends ArmResource<service_propertiesComponentInputs>
	implements service_propertiesComponentOutputs
{
	constructor(entity: ADKEntity, options: service_propertiesComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/properties", "2016-07-07", options);
	}
	public readonly apiVersion: "2016-07-07";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/properties";
}
export interface service_propertiesComponentOutputs {
	readonly apiVersion: "2016-07-07";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/properties";
}
export interface service_propertiesComponentInputs {
	readonly name: string;
	readonly secret?: boolean | undefined;
	readonly tags?: string[] | undefined;
	readonly value: string;
}
export class service_subscriptions
	extends ArmResource<service_subscriptionsComponentInputs>
	implements service_subscriptionsComponentOutputs
{
	constructor(entity: ADKEntity, options: service_subscriptionsComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/subscriptions", "2016-07-07", options);
	}
	public readonly apiVersion: "2016-07-07";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/subscriptions";
}
export interface service_subscriptionsComponentOutputs {
	readonly apiVersion: "2016-07-07";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/subscriptions";
}
export interface service_subscriptionsComponentInputs {
	readonly createdDate?: string | undefined;
	readonly endDate?: string | undefined;
	readonly expirationDate?: string | undefined;
	readonly name: string;
	readonly notificationDate?: string | undefined;
	readonly primaryKey?: string | undefined;
	readonly productId: string;
	readonly secondaryKey?: string | undefined;
	readonly startDate?: string | undefined;
	readonly state?: ("Active" | "Cancelled" | "Expired" | "Rejected" | "Submitted") | undefined;
	readonly stateComment?: string | undefined;
	readonly userId: string;
}
export class service_users extends ArmResource<service_usersComponentInputs> implements service_usersComponentOutputs {
	constructor(entity: ADKEntity, options: service_usersComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/users", "2016-07-07", options);
	}
	public readonly apiVersion: "2016-07-07";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/users";
}
export interface service_usersComponentOutputs {
	readonly apiVersion: "2016-07-07";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/users";
}
export interface service_usersComponentInputs {
	readonly email: string;
	readonly firstName: string;
	readonly identities?: UserIdentityContract[] | undefined;
	readonly lastName: string;
	readonly name: string;
	readonly note?: string | undefined;
	readonly password: string;
	readonly registrationDate?: string | undefined;
	readonly state?: "Active" | undefined;
}
export interface AdditionalRegion {
	readonly location: string;
	readonly skuType: "Developer" | "Premium";
	readonly skuUnitCount?: number | undefined;
	readonly staticIPs?: string[] | undefined;
	readonly vpnconfiguration?: VirtualNetworkConfiguration | undefined;
}
export interface ApiManagementServiceBaseParametersTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ApiManagementServiceProperties {
	readonly additionalLocations?: AdditionalRegion[] | undefined;
	readonly addresserEmail?: string | undefined;
	readonly createdAtUtc?: string | undefined;
	readonly customProperties?: ApiManagementServicePropertiesCustomProperties | undefined;
	readonly hostnameConfigurations?: HostnameConfiguration[] | undefined;
	readonly managementApiUrl?: string | undefined;
	readonly portalUrl?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly publisherEmail: string;
	readonly publisherName: string;
	readonly runtimeUrl?: string | undefined;
	readonly scmUrl?: string | undefined;
	readonly staticIPs?: string[] | undefined;
	readonly targetProvisioningState?: string | undefined;
	readonly vpnconfiguration?: VirtualNetworkConfiguration | undefined;
	readonly vpnType?: ("External" | "Internal") | undefined;
}
export interface ApiManagementServicePropertiesCustomProperties {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ApiManagementServiceSkuProperties {
	readonly capacity?: number | undefined;
	readonly name: "Developer" | "Premium";
}
export interface AuthenticationSettingsContract {
	readonly oAuth2?: OAuth2AuthenticationSettingsContract | undefined;
}
export interface CertificateInformation {
	readonly expiry: string;
	readonly subject: string;
	readonly thumbprint: string;
}
export interface HostnameConfiguration {
	readonly certificate: CertificateInformation;
	readonly hostname: string;
	readonly type: "Management" | "Portal" | "Proxy";
}
export interface LoggerCreateParametersCredentials {
	readonly "[ key: string ]"?: string | undefined;
}
export interface OAuth2AuthenticationSettingsContract {
	readonly authorizationServerId?: string | undefined;
	readonly scope?: string | undefined;
}
export interface ParameterContract {
	readonly defaultValue?: string | undefined;
	readonly description?: string | undefined;
	readonly name: string;
	readonly required?: boolean | undefined;
	readonly type: string;
	readonly values?: string[] | undefined;
}
export interface RepresentationContract {
	readonly contentType: string;
	readonly sample?: string | undefined;
}
export interface RequestContract {
	readonly description?: string | undefined;
	readonly headers?: ParameterContract[] | undefined;
	readonly queryParameters?: ParameterContract[] | undefined;
	readonly representations?: RepresentationContract[] | undefined;
}
export interface ResultContract {
	readonly description?: string | undefined;
	readonly representations?: RepresentationContract[] | undefined;
	readonly statusCode: number;
}
export interface SubscriptionKeyParameterNamesContract {
	readonly header?: string | undefined;
	readonly query?: string | undefined;
}
export interface TokenBodyParameterContract {
	readonly name: string;
	readonly value: string;
}
export interface UserIdentityContract {
	readonly id?: string | undefined;
	readonly provider?: string | undefined;
}
export interface VirtualNetworkConfiguration {
	readonly location?: string | undefined;
	readonly subnetname?: string | undefined;
	readonly subnetResourceId?: string | undefined;
	readonly vnetid?: string | undefined;
}
export default {
	service: service,
	"service/apis": service_apis,
	"service/apis/operations": service_apis_operations,
	"service/authorizationServers": service_authorizationServers,
	"service/backends": service_backends,
	"service/certificates": service_certificates,
	"service/groups": service_groups,
	"service/groups/users": service_groups_users,
	"service/identityProviders": service_identityProviders,
	"service/loggers": service_loggers,
	"service/openidConnectProviders": service_openidConnectProviders,
	"service/products": service_products,
	"service/products/apis": service_products_apis,
	"service/products/groups": service_products_groups,
	"service/properties": service_properties,
	"service/subscriptions": service_subscriptions,
	"service/users": service_users,
};

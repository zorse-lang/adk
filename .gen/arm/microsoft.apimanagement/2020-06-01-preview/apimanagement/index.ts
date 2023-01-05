import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class locations_deletedservices
	extends ArmResource<locations_deletedservicesComponentInputs>
	implements locations_deletedservicesComponentOutputs
{
	constructor(entity: ADKEntity, options: locations_deletedservicesComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/locations/deletedservices", "2020-06-01-preview", options);
	}
	public readonly apiVersion: "2020-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/locations/deletedservices";
}
export interface locations_deletedservicesComponentOutputs {
	readonly apiVersion: "2020-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/locations/deletedservices";
}
export interface locations_deletedservicesComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: DeletedServiceContractProperties;
}
export class service extends ArmResource<serviceComponentInputs> implements serviceComponentOutputs {
	constructor(entity: ADKEntity, options: serviceComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service", "2020-06-01-preview", options);
	}
	public readonly apiVersion: "2020-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service";
}
export interface serviceComponentOutputs {
	readonly apiVersion: "2020-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service";
}
export interface serviceComponentInputs {
	readonly etag?: string;
	readonly identity?: ApiManagementServiceIdentity;
	readonly location: string;
	readonly name: string;
	readonly properties: ApiManagementServiceProperties;
	readonly sku: ApiManagementServiceSkuProperties;
	readonly tags?: ApimResourceTags;
	readonly zones?: string[];
}
export class service_apis extends ArmResource<service_apisComponentInputs> implements service_apisComponentOutputs {
	constructor(entity: ADKEntity, options: service_apisComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/apis", "2020-06-01-preview", options);
	}
	public readonly apiVersion: "2020-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/apis";
}
export interface service_apisComponentOutputs {
	readonly apiVersion: "2020-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/apis";
}
export interface service_apisComponentInputs {
	readonly name: string;
	readonly properties?: ApiCreateOrUpdatePropertiesOrApiContractProperties;
}
export class service_apis_diagnostics
	extends ArmResource<service_apis_diagnosticsComponentInputs>
	implements service_apis_diagnosticsComponentOutputs
{
	constructor(entity: ADKEntity, options: service_apis_diagnosticsComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/apis/diagnostics", "2020-06-01-preview", options);
	}
	public readonly apiVersion: "2020-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/apis/diagnostics";
}
export interface service_apis_diagnosticsComponentOutputs {
	readonly apiVersion: "2020-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/apis/diagnostics";
}
export interface service_apis_diagnosticsComponentInputs {
	readonly name: string;
	readonly properties?: DiagnosticContractProperties;
}
export class service_apis_issues
	extends ArmResource<service_apis_issuesComponentInputs>
	implements service_apis_issuesComponentOutputs
{
	constructor(entity: ADKEntity, options: service_apis_issuesComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/apis/issues", "2020-06-01-preview", options);
	}
	public readonly apiVersion: "2020-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/apis/issues";
}
export interface service_apis_issuesComponentOutputs {
	readonly apiVersion: "2020-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/apis/issues";
}
export interface service_apis_issuesComponentInputs {
	readonly name: string;
	readonly properties?: IssueContractProperties;
}
export class service_apis_issues_attachments
	extends ArmResource<service_apis_issues_attachmentsComponentInputs>
	implements service_apis_issues_attachmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: service_apis_issues_attachmentsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.ApiManagement/service/apis/issues/attachments",
			"2020-06-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2020-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/apis/issues/attachments";
}
export interface service_apis_issues_attachmentsComponentOutputs {
	readonly apiVersion: "2020-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/apis/issues/attachments";
}
export interface service_apis_issues_attachmentsComponentInputs {
	readonly name: string;
	readonly properties?: IssueAttachmentContractProperties;
}
export class service_apis_issues_comments
	extends ArmResource<service_apis_issues_commentsComponentInputs>
	implements service_apis_issues_commentsComponentOutputs
{
	constructor(entity: ADKEntity, options: service_apis_issues_commentsComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/apis/issues/comments", "2020-06-01-preview", options);
	}
	public readonly apiVersion: "2020-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/apis/issues/comments";
}
export interface service_apis_issues_commentsComponentOutputs {
	readonly apiVersion: "2020-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/apis/issues/comments";
}
export interface service_apis_issues_commentsComponentInputs {
	readonly name: string;
	readonly properties?: IssueCommentContractProperties;
}
export class service_apis_operations
	extends ArmResource<service_apis_operationsComponentInputs>
	implements service_apis_operationsComponentOutputs
{
	constructor(entity: ADKEntity, options: service_apis_operationsComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/apis/operations", "2020-06-01-preview", options);
	}
	public readonly apiVersion: "2020-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/apis/operations";
}
export interface service_apis_operationsComponentOutputs {
	readonly apiVersion: "2020-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/apis/operations";
}
export interface service_apis_operationsComponentInputs {
	readonly name: string;
	readonly properties?: OperationContractProperties;
}
export class service_apis_operations_policies
	extends ArmResource<service_apis_operations_policiesComponentInputs>
	implements service_apis_operations_policiesComponentOutputs
{
	constructor(entity: ADKEntity, options: service_apis_operations_policiesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.ApiManagement/service/apis/operations/policies",
			"2020-06-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2020-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/apis/operations/policies";
}
export interface service_apis_operations_policiesComponentOutputs {
	readonly apiVersion: "2020-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/apis/operations/policies";
}
export interface service_apis_operations_policiesComponentInputs {
	readonly name: string;
	readonly properties?: PolicyContractProperties;
}
export class service_apis_operations_tags
	extends ArmResource<service_apis_operations_tagsComponentInputs>
	implements service_apis_operations_tagsComponentOutputs
{
	constructor(entity: ADKEntity, options: service_apis_operations_tagsComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/apis/operations/tags", "2020-06-01-preview", options);
	}
	public readonly apiVersion: "2020-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/apis/operations/tags";
}
export interface service_apis_operations_tagsComponentOutputs {
	readonly apiVersion: "2020-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/apis/operations/tags";
}
export interface service_apis_operations_tagsComponentInputs {
	readonly name: string;
	readonly properties?: TagContractProperties;
}
export class service_apis_policies
	extends ArmResource<service_apis_policiesComponentInputs>
	implements service_apis_policiesComponentOutputs
{
	constructor(entity: ADKEntity, options: service_apis_policiesComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/apis/policies", "2020-06-01-preview", options);
	}
	public readonly apiVersion: "2020-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/apis/policies";
}
export interface service_apis_policiesComponentOutputs {
	readonly apiVersion: "2020-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/apis/policies";
}
export interface service_apis_policiesComponentInputs {
	readonly name: string;
	readonly properties?: PolicyContractProperties;
}
export class service_apis_releases
	extends ArmResource<service_apis_releasesComponentInputs>
	implements service_apis_releasesComponentOutputs
{
	constructor(entity: ADKEntity, options: service_apis_releasesComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/apis/releases", "2020-06-01-preview", options);
	}
	public readonly apiVersion: "2020-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/apis/releases";
}
export interface service_apis_releasesComponentOutputs {
	readonly apiVersion: "2020-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/apis/releases";
}
export interface service_apis_releasesComponentInputs {
	readonly name: string;
	readonly properties?: ApiReleaseContractProperties;
}
export class service_apis_schemas
	extends ArmResource<service_apis_schemasComponentInputs>
	implements service_apis_schemasComponentOutputs
{
	constructor(entity: ADKEntity, options: service_apis_schemasComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/apis/schemas", "2020-06-01-preview", options);
	}
	public readonly apiVersion: "2020-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/apis/schemas";
}
export interface service_apis_schemasComponentOutputs {
	readonly apiVersion: "2020-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/apis/schemas";
}
export interface service_apis_schemasComponentInputs {
	readonly name: string;
	readonly properties?: SchemaContractProperties;
}
export class service_apis_tagDescriptions
	extends ArmResource<service_apis_tagDescriptionsComponentInputs>
	implements service_apis_tagDescriptionsComponentOutputs
{
	constructor(entity: ADKEntity, options: service_apis_tagDescriptionsComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/apis/tagDescriptions", "2020-06-01-preview", options);
	}
	public readonly apiVersion: "2020-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/apis/tagDescriptions";
}
export interface service_apis_tagDescriptionsComponentOutputs {
	readonly apiVersion: "2020-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/apis/tagDescriptions";
}
export interface service_apis_tagDescriptionsComponentInputs {
	readonly name: string;
	readonly properties?: TagDescriptionBasePropertiesOrTagDescriptionContractProperties;
}
export class service_apis_tags
	extends ArmResource<service_apis_tagsComponentInputs>
	implements service_apis_tagsComponentOutputs
{
	constructor(entity: ADKEntity, options: service_apis_tagsComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/apis/tags", "2020-06-01-preview", options);
	}
	public readonly apiVersion: "2020-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/apis/tags";
}
export interface service_apis_tagsComponentOutputs {
	readonly apiVersion: "2020-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/apis/tags";
}
export interface service_apis_tagsComponentInputs {
	readonly name: string;
	readonly properties?: TagContractProperties;
}
export class service_apiVersionSets
	extends ArmResource<service_apiVersionSetsComponentInputs>
	implements service_apiVersionSetsComponentOutputs
{
	constructor(entity: ADKEntity, options: service_apiVersionSetsComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/apiVersionSets", "2020-06-01-preview", options);
	}
	public readonly apiVersion: "2020-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/apiVersionSets";
}
export interface service_apiVersionSetsComponentOutputs {
	readonly apiVersion: "2020-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/apiVersionSets";
}
export interface service_apiVersionSetsComponentInputs {
	readonly name: string;
	readonly properties?: ApiVersionSetContractProperties;
}
export class service_authorizationServers
	extends ArmResource<service_authorizationServersComponentInputs>
	implements service_authorizationServersComponentOutputs
{
	constructor(entity: ADKEntity, options: service_authorizationServersComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/authorizationServers", "2020-06-01-preview", options);
	}
	public readonly apiVersion: "2020-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/authorizationServers";
}
export interface service_authorizationServersComponentOutputs {
	readonly apiVersion: "2020-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/authorizationServers";
}
export interface service_authorizationServersComponentInputs {
	readonly name: string;
	readonly properties?: AuthorizationServerContractProperties;
}
export class service_backends
	extends ArmResource<service_backendsComponentInputs>
	implements service_backendsComponentOutputs
{
	constructor(entity: ADKEntity, options: service_backendsComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/backends", "2020-06-01-preview", options);
	}
	public readonly apiVersion: "2020-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/backends";
}
export interface service_backendsComponentOutputs {
	readonly apiVersion: "2020-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/backends";
}
export interface service_backendsComponentInputs {
	readonly name: string;
	readonly properties?: BackendContractProperties;
}
export class service_caches extends ArmResource<service_cachesComponentInputs> implements service_cachesComponentOutputs {
	constructor(entity: ADKEntity, options: service_cachesComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/caches", "2020-06-01-preview", options);
	}
	public readonly apiVersion: "2020-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/caches";
}
export interface service_cachesComponentOutputs {
	readonly apiVersion: "2020-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/caches";
}
export interface service_cachesComponentInputs {
	readonly name: string;
	readonly properties?: CacheContractProperties;
}
export class service_certificates
	extends ArmResource<service_certificatesComponentInputs>
	implements service_certificatesComponentOutputs
{
	constructor(entity: ADKEntity, options: service_certificatesComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/certificates", "2020-06-01-preview", options);
	}
	public readonly apiVersion: "2020-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/certificates";
}
export interface service_certificatesComponentOutputs {
	readonly apiVersion: "2020-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/certificates";
}
export interface service_certificatesComponentInputs {
	readonly name: string;
	readonly properties?: CertificateCreateOrUpdatePropertiesOrCertificateContractProperties;
}
export class service_contentTypes
	extends ArmResource<service_contentTypesComponentInputs>
	implements service_contentTypesComponentOutputs
{
	constructor(entity: ADKEntity, options: service_contentTypesComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/contentTypes", "2020-06-01-preview", options);
	}
	public readonly apiVersion: "2020-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/contentTypes";
}
export interface service_contentTypesComponentOutputs {
	readonly apiVersion: "2020-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/contentTypes";
}
export interface service_contentTypesComponentInputs {
	readonly name: string;
	readonly properties?: ContentTypeContractProperties;
}
export class service_contentTypes_contentItems
	extends ArmResource<service_contentTypes_contentItemsComponentInputs>
	implements service_contentTypes_contentItemsComponentOutputs
{
	constructor(entity: ADKEntity, options: service_contentTypes_contentItemsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.ApiManagement/service/contentTypes/contentItems",
			"2020-06-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2020-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/contentTypes/contentItems";
}
export interface service_contentTypes_contentItemsComponentOutputs {
	readonly apiVersion: "2020-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/contentTypes/contentItems";
}
export interface service_contentTypes_contentItemsComponentInputs {
	readonly name: string;
	readonly properties?: ContentItemContractProperties;
}
export class service_diagnostics
	extends ArmResource<service_diagnosticsComponentInputs>
	implements service_diagnosticsComponentOutputs
{
	constructor(entity: ADKEntity, options: service_diagnosticsComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/diagnostics", "2020-06-01-preview", options);
	}
	public readonly apiVersion: "2020-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/diagnostics";
}
export interface service_diagnosticsComponentOutputs {
	readonly apiVersion: "2020-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/diagnostics";
}
export interface service_diagnosticsComponentInputs {
	readonly name: string;
	readonly properties?: DiagnosticContractProperties;
}
export class service_gateways
	extends ArmResource<service_gatewaysComponentInputs>
	implements service_gatewaysComponentOutputs
{
	constructor(entity: ADKEntity, options: service_gatewaysComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/gateways", "2020-06-01-preview", options);
	}
	public readonly apiVersion: "2020-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/gateways";
}
export interface service_gatewaysComponentOutputs {
	readonly apiVersion: "2020-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/gateways";
}
export interface service_gatewaysComponentInputs {
	readonly name: string;
	readonly properties?: GatewayContractProperties;
}
export class service_gateways_apis
	extends ArmResource<service_gateways_apisComponentInputs>
	implements service_gateways_apisComponentOutputs
{
	constructor(entity: ADKEntity, options: service_gateways_apisComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/gateways/apis", "2020-06-01-preview", options);
	}
	public readonly apiVersion: "2020-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/gateways/apis";
}
export interface service_gateways_apisComponentOutputs {
	readonly apiVersion: "2020-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/gateways/apis";
}
export interface service_gateways_apisComponentInputs {
	readonly name: string;
	readonly properties?: AssociationContractProperties;
}
export class service_gateways_certificateAuthorities
	extends ArmResource<service_gateways_certificateAuthoritiesComponentInputs>
	implements service_gateways_certificateAuthoritiesComponentOutputs
{
	constructor(entity: ADKEntity, options: service_gateways_certificateAuthoritiesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.ApiManagement/service/gateways/certificateAuthorities",
			"2020-06-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2020-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/gateways/certificateAuthorities";
}
export interface service_gateways_certificateAuthoritiesComponentOutputs {
	readonly apiVersion: "2020-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/gateways/certificateAuthorities";
}
export interface service_gateways_certificateAuthoritiesComponentInputs {
	readonly name: string;
	readonly properties?: GatewayCertificateAuthorityContractProperties;
}
export class service_gateways_hostnameConfigurations
	extends ArmResource<service_gateways_hostnameConfigurationsComponentInputs>
	implements service_gateways_hostnameConfigurationsComponentOutputs
{
	constructor(entity: ADKEntity, options: service_gateways_hostnameConfigurationsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.ApiManagement/service/gateways/hostnameConfigurations",
			"2020-06-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2020-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/gateways/hostnameConfigurations";
}
export interface service_gateways_hostnameConfigurationsComponentOutputs {
	readonly apiVersion: "2020-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/gateways/hostnameConfigurations";
}
export interface service_gateways_hostnameConfigurationsComponentInputs {
	readonly name: string;
	readonly properties?: GatewayHostnameConfigurationContractProperties;
}
export class service_groups extends ArmResource<service_groupsComponentInputs> implements service_groupsComponentOutputs {
	constructor(entity: ADKEntity, options: service_groupsComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/groups", "2020-06-01-preview", options);
	}
	public readonly apiVersion: "2020-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/groups";
}
export interface service_groupsComponentOutputs {
	readonly apiVersion: "2020-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/groups";
}
export interface service_groupsComponentInputs {
	readonly name: string;
	readonly properties?: GroupCreateParametersPropertiesOrGroupContractProperties;
}
export class service_groups_users
	extends ArmResource<service_groups_usersComponentInputs>
	implements service_groups_usersComponentOutputs
{
	constructor(entity: ADKEntity, options: service_groups_usersComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/groups/users", "2020-06-01-preview", options);
	}
	public readonly apiVersion: "2020-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/groups/users";
}
export interface service_groups_usersComponentOutputs {
	readonly apiVersion: "2020-06-01-preview";
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
		super(entity, options.name, "Microsoft.ApiManagement/service/identityProviders", "2020-06-01-preview", options);
	}
	public readonly apiVersion: "2020-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/identityProviders";
}
export interface service_identityProvidersComponentOutputs {
	readonly apiVersion: "2020-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/identityProviders";
}
export interface service_identityProvidersComponentInputs {
	readonly name: string;
	readonly properties?: IdentityProviderCreateContractPropertiesOrIdentityProviderContractProperties;
}
export class service_issues extends ArmResource<service_issuesComponentInputs> implements service_issuesComponentOutputs {
	constructor(entity: ADKEntity, options: service_issuesComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/issues", "2020-06-01-preview", options);
	}
	public readonly apiVersion: "2020-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/issues";
}
export interface service_issuesComponentOutputs {
	readonly apiVersion: "2020-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/issues";
}
export interface service_issuesComponentInputs {
	readonly name: string;
	readonly properties?: IssueContractProperties;
}
export class service_loggers
	extends ArmResource<service_loggersComponentInputs>
	implements service_loggersComponentOutputs
{
	constructor(entity: ADKEntity, options: service_loggersComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/loggers", "2020-06-01-preview", options);
	}
	public readonly apiVersion: "2020-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/loggers";
}
export interface service_loggersComponentOutputs {
	readonly apiVersion: "2020-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/loggers";
}
export interface service_loggersComponentInputs {
	readonly name: string;
	readonly properties?: LoggerContractProperties;
}
export class service_namedValues
	extends ArmResource<service_namedValuesComponentInputs>
	implements service_namedValuesComponentOutputs
{
	constructor(entity: ADKEntity, options: service_namedValuesComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/namedValues", "2020-06-01-preview", options);
	}
	public readonly apiVersion: "2020-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/namedValues";
}
export interface service_namedValuesComponentOutputs {
	readonly apiVersion: "2020-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/namedValues";
}
export interface service_namedValuesComponentInputs {
	readonly name: string;
	readonly properties?: NamedValueCreateContractPropertiesOrNamedValueContractProperties;
}
export class service_notifications
	extends ArmResource<service_notificationsComponentInputs>
	implements service_notificationsComponentOutputs
{
	constructor(entity: ADKEntity, options: service_notificationsComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/notifications", "2020-06-01-preview", options);
	}
	public readonly apiVersion: "2020-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/notifications";
}
export interface service_notificationsComponentOutputs {
	readonly apiVersion: "2020-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/notifications";
}
export interface service_notificationsComponentInputs {
	readonly name: string;
	readonly properties?: NotificationContractProperties;
}
export class service_notifications_recipientEmails
	extends ArmResource<service_notifications_recipientEmailsComponentInputs>
	implements service_notifications_recipientEmailsComponentOutputs
{
	constructor(entity: ADKEntity, options: service_notifications_recipientEmailsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.ApiManagement/service/notifications/recipientEmails",
			"2020-06-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2020-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/notifications/recipientEmails";
}
export interface service_notifications_recipientEmailsComponentOutputs {
	readonly apiVersion: "2020-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/notifications/recipientEmails";
}
export interface service_notifications_recipientEmailsComponentInputs {
	readonly name: string;
}
export class service_notifications_recipientUsers
	extends ArmResource<service_notifications_recipientUsersComponentInputs>
	implements service_notifications_recipientUsersComponentOutputs
{
	constructor(entity: ADKEntity, options: service_notifications_recipientUsersComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.ApiManagement/service/notifications/recipientUsers",
			"2020-06-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2020-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/notifications/recipientUsers";
}
export interface service_notifications_recipientUsersComponentOutputs {
	readonly apiVersion: "2020-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/notifications/recipientUsers";
}
export interface service_notifications_recipientUsersComponentInputs {
	readonly name: string;
}
export class service_openidConnectProviders
	extends ArmResource<service_openidConnectProvidersComponentInputs>
	implements service_openidConnectProvidersComponentOutputs
{
	constructor(entity: ADKEntity, options: service_openidConnectProvidersComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.ApiManagement/service/openidConnectProviders",
			"2020-06-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2020-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/openidConnectProviders";
}
export interface service_openidConnectProvidersComponentOutputs {
	readonly apiVersion: "2020-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/openidConnectProviders";
}
export interface service_openidConnectProvidersComponentInputs {
	readonly name: string;
	readonly properties?: OpenidConnectProviderContractProperties;
}
export class service_policies
	extends ArmResource<service_policiesComponentInputs>
	implements service_policiesComponentOutputs
{
	constructor(entity: ADKEntity, options: service_policiesComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/policies", "2020-06-01-preview", options);
	}
	public readonly apiVersion: "2020-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/policies";
}
export interface service_policiesComponentOutputs {
	readonly apiVersion: "2020-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/policies";
}
export interface service_policiesComponentInputs {
	readonly name: string;
	readonly properties?: PolicyContractProperties;
}
export class service_portalRevisions
	extends ArmResource<service_portalRevisionsComponentInputs>
	implements service_portalRevisionsComponentOutputs
{
	constructor(entity: ADKEntity, options: service_portalRevisionsComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/portalRevisions", "2020-06-01-preview", options);
	}
	public readonly apiVersion: "2020-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/portalRevisions";
}
export interface service_portalRevisionsComponentOutputs {
	readonly apiVersion: "2020-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/portalRevisions";
}
export interface service_portalRevisionsComponentInputs {
	readonly name: string;
	readonly properties?: PortalRevisionContractProperties;
}
export class service_portalsettings_delegation
	extends ArmResource<service_portalsettings_delegationComponentInputs>
	implements service_portalsettings_delegationComponentOutputs
{
	constructor(entity: ADKEntity, options: service_portalsettings_delegationComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/portalsettings", "2020-06-01-preview", options);
	}
	public readonly apiVersion: "2020-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/portalsettings";
}
export interface service_portalsettings_delegationComponentOutputs {
	readonly apiVersion: "2020-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/portalsettings";
}
export interface service_portalsettings_delegationComponentInputs {
	readonly name: string;
	readonly properties?: PortalDelegationSettingsProperties;
}
export class service_portalsettings_signin
	extends ArmResource<service_portalsettings_signinComponentInputs>
	implements service_portalsettings_signinComponentOutputs
{
	constructor(entity: ADKEntity, options: service_portalsettings_signinComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/portalsettings", "2020-06-01-preview", options);
	}
	public readonly apiVersion: "2020-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/portalsettings";
}
export interface service_portalsettings_signinComponentOutputs {
	readonly apiVersion: "2020-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/portalsettings";
}
export interface service_portalsettings_signinComponentInputs {
	readonly name: string;
	readonly properties?: PortalSigninSettingProperties;
}
export class service_portalsettings_signup
	extends ArmResource<service_portalsettings_signupComponentInputs>
	implements service_portalsettings_signupComponentOutputs
{
	constructor(entity: ADKEntity, options: service_portalsettings_signupComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/portalsettings", "2020-06-01-preview", options);
	}
	public readonly apiVersion: "2020-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/portalsettings";
}
export interface service_portalsettings_signupComponentOutputs {
	readonly apiVersion: "2020-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/portalsettings";
}
export interface service_portalsettings_signupComponentInputs {
	readonly name: string;
	readonly properties?: PortalSignupSettingsProperties;
}
export class service_products
	extends ArmResource<service_productsComponentInputs>
	implements service_productsComponentOutputs
{
	constructor(entity: ADKEntity, options: service_productsComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/products", "2020-06-01-preview", options);
	}
	public readonly apiVersion: "2020-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/products";
}
export interface service_productsComponentOutputs {
	readonly apiVersion: "2020-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/products";
}
export interface service_productsComponentInputs {
	readonly name: string;
	readonly properties?: ProductContractProperties;
}
export class service_products_apis
	extends ArmResource<service_products_apisComponentInputs>
	implements service_products_apisComponentOutputs
{
	constructor(entity: ADKEntity, options: service_products_apisComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/products/apis", "2020-06-01-preview", options);
	}
	public readonly apiVersion: "2020-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/products/apis";
}
export interface service_products_apisComponentOutputs {
	readonly apiVersion: "2020-06-01-preview";
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
		super(entity, options.name, "Microsoft.ApiManagement/service/products/groups", "2020-06-01-preview", options);
	}
	public readonly apiVersion: "2020-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/products/groups";
}
export interface service_products_groupsComponentOutputs {
	readonly apiVersion: "2020-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/products/groups";
}
export interface service_products_groupsComponentInputs {
	readonly name: string;
}
export class service_products_policies
	extends ArmResource<service_products_policiesComponentInputs>
	implements service_products_policiesComponentOutputs
{
	constructor(entity: ADKEntity, options: service_products_policiesComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/products/policies", "2020-06-01-preview", options);
	}
	public readonly apiVersion: "2020-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/products/policies";
}
export interface service_products_policiesComponentOutputs {
	readonly apiVersion: "2020-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/products/policies";
}
export interface service_products_policiesComponentInputs {
	readonly name: string;
	readonly properties?: PolicyContractProperties;
}
export class service_products_tags
	extends ArmResource<service_products_tagsComponentInputs>
	implements service_products_tagsComponentOutputs
{
	constructor(entity: ADKEntity, options: service_products_tagsComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/products/tags", "2020-06-01-preview", options);
	}
	public readonly apiVersion: "2020-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/products/tags";
}
export interface service_products_tagsComponentOutputs {
	readonly apiVersion: "2020-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/products/tags";
}
export interface service_products_tagsComponentInputs {
	readonly name: string;
	readonly properties?: TagContractProperties;
}
export class service_settings
	extends ArmResource<service_settingsComponentInputs>
	implements service_settingsComponentOutputs
{
	constructor(entity: ADKEntity, options: service_settingsComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/settings", "2020-06-01-preview", options);
	}
	public readonly apiVersion: "2020-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/settings";
}
export interface service_settingsComponentOutputs {
	readonly apiVersion: "2020-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/settings";
}
export interface service_settingsComponentInputs {
	readonly name: string;
	readonly properties?: TenantSettingsContractProperties;
}
export class service_subscriptions
	extends ArmResource<service_subscriptionsComponentInputs>
	implements service_subscriptionsComponentOutputs
{
	constructor(entity: ADKEntity, options: service_subscriptionsComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/subscriptions", "2020-06-01-preview", options);
	}
	public readonly apiVersion: "2020-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/subscriptions";
}
export interface service_subscriptionsComponentOutputs {
	readonly apiVersion: "2020-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/subscriptions";
}
export interface service_subscriptionsComponentInputs {
	readonly name: string;
	readonly properties?: SubscriptionCreateParameterPropertiesOrSubscriptionContractProperties;
}
export class service_tags extends ArmResource<service_tagsComponentInputs> implements service_tagsComponentOutputs {
	constructor(entity: ADKEntity, options: service_tagsComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/tags", "2020-06-01-preview", options);
	}
	public readonly apiVersion: "2020-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/tags";
}
export interface service_tagsComponentOutputs {
	readonly apiVersion: "2020-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/tags";
}
export interface service_tagsComponentInputs {
	readonly name: string;
	readonly properties?: TagContractProperties;
}
export class service_templates
	extends ArmResource<service_templatesComponentInputs>
	implements service_templatesComponentOutputs
{
	constructor(entity: ADKEntity, options: service_templatesComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/templates", "2020-06-01-preview", options);
	}
	public readonly apiVersion: "2020-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/templates";
}
export interface service_templatesComponentOutputs {
	readonly apiVersion: "2020-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/templates";
}
export interface service_templatesComponentInputs {
	readonly name: string;
	readonly properties?: EmailTemplateUpdateParameterPropertiesOrEmailTemplateContractProperties;
}
export class service_tenant extends ArmResource<service_tenantComponentInputs> implements service_tenantComponentOutputs {
	constructor(entity: ADKEntity, options: service_tenantComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/tenant", "2020-06-01-preview", options);
	}
	public readonly apiVersion: "2020-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/tenant";
}
export interface service_tenantComponentOutputs {
	readonly apiVersion: "2020-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/tenant";
}
export interface service_tenantComponentInputs {
	readonly name: string;
	readonly properties?: AccessInformationCreateParameterPropertiesOrAccessInformationContractProperties;
}
export class service_users extends ArmResource<service_usersComponentInputs> implements service_usersComponentOutputs {
	constructor(entity: ADKEntity, options: service_usersComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/users", "2020-06-01-preview", options);
	}
	public readonly apiVersion: "2020-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/users";
}
export interface service_usersComponentOutputs {
	readonly apiVersion: "2020-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/users";
}
export interface service_usersComponentInputs {
	readonly name: string;
	readonly properties?: UserCreateParameterPropertiesOrUserContractProperties;
}
export class service_users_subscriptions
	extends ArmResource<service_users_subscriptionsComponentInputs>
	implements service_users_subscriptionsComponentOutputs
{
	constructor(entity: ADKEntity, options: service_users_subscriptionsComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/users/subscriptions", "2020-06-01-preview", options);
	}
	public readonly apiVersion: "2020-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/users/subscriptions";
}
export interface service_users_subscriptionsComponentOutputs {
	readonly apiVersion: "2020-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/users/subscriptions";
}
export interface service_users_subscriptionsComponentInputs {
	readonly name: string;
	readonly properties?: SubscriptionContractProperties;
}
export function listKeys(resource: service_gateways): GatewayKeysContract {
	if (resource.apiVersion !== "2020-06-01-preview") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.ApiManagement/service/gateways") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listSecrets(resource: service_authorizationServers): AuthorizationServerSecretsContract {
	if (resource.apiVersion !== "2020-06-01-preview") {
		throw new Error(`listSecrets is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.ApiManagement/service/authorizationServers") {
		throw new Error(`listSecrets is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listValue(resource: service_namedValues): NamedValueSecretContract {
	if (resource.apiVersion !== "2020-06-01-preview") {
		throw new Error(`listValue is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.ApiManagement/service/namedValues") {
		throw new Error(`listValue is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AccessInformationCreateParameterPropertiesOrAccessInformationContractProperties {
	readonly enabled?: boolean;
	readonly primaryKey?: string;
	readonly principalId?: string;
	readonly secondaryKey?: string;
}
export interface AccessInformationSecretsContract {
	readonly enabled?: boolean;
	readonly id?: string;
	readonly primaryKey?: string;
	readonly principalId?: string;
	readonly secondaryKey?: string;
}
export interface AdditionalLocation {
	readonly disableGateway?: boolean;
	readonly gatewayRegionalUrl?: string;
	readonly location: string;
	readonly privateIPAddresses?: string[];
	readonly publicIPAddresses?: string[];
	readonly sku: ApiManagementServiceSkuProperties;
	readonly virtualNetworkConfiguration?: VirtualNetworkConfiguration;
	readonly zones?: string[];
}
export interface ApiCreateOrUpdatePropertiesOrApiContractProperties {
	readonly apiRevision?: string;
	readonly apiRevisionDescription?: string;
	readonly apiType?: "http" | "soap";
	readonly apiVersion?: string;
	readonly apiVersionDescription?: string;
	readonly apiVersionSet?: ApiVersionSetContractDetails;
	readonly apiVersionSetId?: string;
	readonly authenticationSettings?: AuthenticationSettingsContract;
	readonly description?: string;
	readonly displayName?: string;
	readonly format?:
		| "openapi"
		| "openapi+json"
		| "openapi+json-link"
		| "openapi-link"
		| "swagger-json"
		| "swagger-link-json"
		| "wadl-link-json"
		| "wadl-xml"
		| "wsdl"
		| "wsdl-link";
	readonly isCurrent?: boolean;
	readonly isOnline?: boolean;
	readonly path: string;
	readonly protocols?: "http"[];
	readonly serviceUrl?: string;
	readonly sourceApiId?: string;
	readonly subscriptionKeyParameterNames?: SubscriptionKeyParameterNamesContract;
	readonly subscriptionRequired?: boolean;
	readonly type?: "http" | "soap";
	readonly value?: string;
	readonly wsdlSelector?: ApiCreateOrUpdatePropertiesWsdlSelector;
}
export interface ApiCreateOrUpdatePropertiesWsdlSelector {
	readonly wsdlEndpointName?: string;
	readonly wsdlServiceName?: string;
}
export interface ApiManagementServiceBasePropertiesCustomProperties {
	readonly [key: string]: string;
}
export interface ApiManagementServiceIdentity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type: "None" | "SystemAssigned" | "SystemAssigned, UserAssigned" | "UserAssigned";
	readonly userAssignedIdentities?: ApiManagementServiceIdentityUserAssignedIdentities;
}
export interface ApiManagementServiceIdentityUserAssignedIdentities {
	readonly [key: string]: UserIdentityProperties;
}
export interface ApiManagementServiceProperties {
	readonly additionalLocations?: AdditionalLocation[];
	readonly apiVersionConstraint?: ApiVersionConstraint;
	readonly certificates?: CertificateConfiguration[];
	readonly createdAtUtc?: string;
	readonly customProperties?: ApiManagementServiceBasePropertiesCustomProperties;
	readonly developerPortalUrl?: string;
	readonly disableGateway?: boolean;
	readonly enableClientCertificate?: boolean;
	readonly gatewayRegionalUrl?: string;
	readonly gatewayUrl?: string;
	readonly hostnameConfigurations?: HostnameConfiguration[];
	readonly managementApiUrl?: string;
	readonly notificationSenderEmail?: string;
	readonly portalUrl?: string;
	readonly privateIPAddresses?: string[];
	readonly provisioningState?: string;
	readonly publicIPAddresses?: string[];
	readonly publisherEmail: string;
	readonly publisherName: string;
	readonly restore?: boolean;
	readonly scmUrl?: string;
	readonly targetProvisioningState?: string;
	readonly virtualNetworkConfiguration?: VirtualNetworkConfiguration;
	readonly virtualNetworkType?: "External" | "Internal" | "None";
}
export interface ApiManagementServiceSkuProperties {
	readonly capacity: number;
	readonly name: "Basic" | "Consumption" | "Developer" | "Isolated" | "Premium" | "Standard";
}
export interface ApimResourceTags {
	readonly [key: string]: string;
}
export interface ApiReleaseContractProperties {
	readonly apiId?: string;
	readonly createdDateTime?: string;
	readonly notes?: string;
	readonly updatedDateTime?: string;
}
export interface ApiVersionConstraint {
	readonly minApiVersion?: string;
}
export interface ApiVersionSetContractDetails {
	readonly description?: string;
	readonly id?: string;
	readonly name?: string;
	readonly versionHeaderName?: string;
	readonly versioningScheme?: "Header" | "Query" | "Segment";
	readonly versionQueryName?: string;
}
export interface ApiVersionSetContractProperties {
	readonly description?: string;
	readonly displayName: string;
	readonly versionHeaderName?: string;
	readonly versioningScheme: "Header" | "Query" | "Segment";
	readonly versionQueryName?: string;
}
export interface AssociationContractProperties {
	readonly provisioningState?: "created";
}
export interface AuthenticationSettingsContract {
	readonly oAuth2?: OAuth2AuthenticationSettingsContract;
	readonly openid?: OpenIdAuthenticationSettingsContract;
}
export interface AuthorizationServerContractProperties {
	readonly authorizationEndpoint: string;
	readonly authorizationMethods?: "DELETE" | "GET" | "HEAD" | "OPTIONS" | "PATCH" | "POST" | "PUT"[];
	readonly bearerTokenSendingMethods?: "authorizationHeader" | "query"[];
	readonly clientAuthenticationMethod?: "Basic" | "Body"[];
	readonly clientId: string;
	readonly clientRegistrationEndpoint: string;
	readonly clientSecret?: string;
	readonly defaultScope?: string;
	readonly description?: string;
	readonly displayName: string;
	readonly grantTypes: "authorizationCode" | "clientCredentials" | "implicit" | "resourceOwnerPassword"[];
	readonly resourceOwnerPassword?: string;
	readonly resourceOwnerUsername?: string;
	readonly supportState?: boolean;
	readonly tokenBodyParameters?: TokenBodyParameterContract[];
	readonly tokenEndpoint?: string;
}
export interface AuthorizationServerSecretsContract {
	readonly clientSecret?: string;
	readonly resourceOwnerPassword?: string;
	readonly resourceOwnerUsername?: string;
}
export interface BackendAuthorizationHeaderCredentials {
	readonly parameter: string;
	readonly scheme: string;
}
export interface BackendContractProperties {
	readonly credentials?: BackendCredentialsContract;
	readonly description?: string;
	readonly properties?: BackendProperties;
	readonly protocol: "http" | "soap";
	readonly proxy?: BackendProxyContract;
	readonly resourceId?: string;
	readonly title?: string;
	readonly tls?: BackendTlsProperties;
	readonly url: string;
}
export interface BackendCredentialsContract {
	readonly authorization?: BackendAuthorizationHeaderCredentials;
	readonly certificate?: string[];
	readonly certificateIds?: string[];
	readonly header?: BackendCredentialsContractHeader;
	readonly query?: BackendCredentialsContractQuery;
}
export interface BackendCredentialsContractHeader {
	readonly [key: string]: string[];
}
export interface BackendCredentialsContractQuery {
	readonly [key: string]: string[];
}
export interface BackendProperties {
	readonly serviceFabricCluster?: BackendServiceFabricClusterProperties;
}
export interface BackendProxyContract {
	readonly password?: string;
	readonly url: string;
	readonly username?: string;
}
export interface BackendServiceFabricClusterProperties {
	readonly clientCertificateId?: string;
	readonly clientCertificatethumbprint?: string;
	readonly managementEndpoints: string[];
	readonly maxPartitionResolutionRetries?: number;
	readonly serverCertificateThumbprints?: string[];
	readonly serverX509Names?: X509CertificateName[];
}
export interface BackendTlsProperties {
	readonly validateCertificateChain?: boolean;
	readonly validateCertificateName?: boolean;
}
export interface BodyDiagnosticSettings {
	readonly bytes?: number;
}
export interface CacheContractProperties {
	readonly connectionString: string;
	readonly description?: string;
	readonly resourceId?: string;
	readonly useFromLocation: string;
}
export interface CertificateConfiguration {
	readonly certificate?: CertificateInformation;
	readonly certificatePassword?: string;
	readonly encodedCertificate?: string;
	readonly storeName: "CertificateAuthority" | "Root";
}
export interface CertificateCreateOrUpdatePropertiesOrCertificateContractProperties {
	readonly data?: string;
	readonly expirationDate?: string;
	readonly keyVault?: KeyVaultContractCreatePropertiesOrKeyVaultContractProperties;
	readonly password?: string;
	readonly subject?: string;
	readonly thumbprint?: string;
}
export interface CertificateInformation {
	readonly expiry: string;
	readonly subject: string;
	readonly thumbprint: string;
}
export interface ClientSecretContract {
	readonly clientSecret?: string;
}
export interface ContentItemContractProperties {
	readonly [key: string]: any;
}
export interface ContentTypeContractProperties {
	readonly description?: string;
	readonly id?: string;
	readonly name?: string;
	readonly schema?: any;
	readonly version?: string;
}
export interface DataMasking {
	readonly headers?: DataMaskingEntity[];
	readonly queryParams?: DataMaskingEntity[];
}
export interface DataMaskingEntity {
	readonly mode?: "Hide" | "Mask";
	readonly value?: string;
}
export interface DeletedServiceContractProperties {
	readonly deletionDate?: string;
	readonly scheduledPurgeDate?: string;
	readonly serviceId?: string;
}
export interface DiagnosticContractProperties {
	readonly alwaysLog?: "allErrors";
	readonly backend?: PipelineDiagnosticSettings;
	readonly frontend?: PipelineDiagnosticSettings;
	readonly httpCorrelationProtocol?: "Legacy" | "None" | "W3C";
	readonly logClientIp?: boolean;
	readonly loggerId: string;
	readonly metrics?: boolean;
	readonly operationNameFormat?: "Name" | "Url";
	readonly sampling?: SamplingSettings;
	readonly verbosity?: "error" | "information" | "verbose";
}
export interface EmailTemplateParametersContractProperties {
	readonly description?: string;
	readonly name?: string;
	readonly title?: string;
}
export interface EmailTemplateUpdateParameterPropertiesOrEmailTemplateContractProperties {
	readonly body?: string;
	readonly description?: string;
	readonly isDefault?: boolean;
	readonly parameters?: EmailTemplateParametersContractProperties[];
	readonly subject?: string;
	readonly title?: string;
}
export interface GatewayCertificateAuthorityContractProperties {
	readonly isTrusted?: boolean;
}
export interface GatewayContractProperties {
	readonly description?: string;
	readonly locationData?: ResourceLocationDataContract;
}
export interface GatewayHostnameConfigurationContractProperties {
	readonly certificateId?: string;
	readonly hostname?: string;
	readonly http2Enabled?: boolean;
	readonly negotiateClientCertificate?: boolean;
	readonly tls10Enabled?: boolean;
	readonly tls11Enabled?: boolean;
}
export interface GatewayKeysContract {
	readonly primary?: string;
	readonly secondary?: string;
}
export interface GroupContractProperties {
	readonly builtIn?: boolean;
	readonly description?: string;
	readonly displayName: string;
	readonly externalId?: string;
	readonly type?: "custom" | "external";
}
export interface GroupCreateParametersPropertiesOrGroupContractProperties {
	readonly builtIn?: boolean;
	readonly description?: string;
	readonly displayName: string;
	readonly externalId?: string;
	readonly type?: "custom" | "external";
}
export interface HostnameConfiguration {
	readonly certificate?: CertificateInformation;
	readonly certificatePassword?: string;
	readonly defaultSslBinding?: boolean;
	readonly encodedCertificate?: string;
	readonly hostName: string;
	readonly identityClientId?: string;
	readonly keyVaultId?: string;
	readonly negotiateClientCertificate?: boolean;
	readonly type: "DeveloperPortal" | "Management" | "Portal" | "Proxy" | "Scm";
}
export interface HttpMessageDiagnostic {
	readonly body?: BodyDiagnosticSettings;
	readonly dataMasking?: DataMasking;
	readonly headers?: string[];
}
export interface IdentityProviderCreateContractPropertiesOrIdentityProviderContractProperties {
	readonly allowedTenants?: string[];
	readonly authority?: string;
	readonly clientId: string;
	readonly clientSecret: string;
	readonly passwordResetPolicyName?: string;
	readonly profileEditingPolicyName?: string;
	readonly signinPolicyName?: string;
	readonly signinTenant?: string;
	readonly signupPolicyName?: string;
	readonly type?: "aad" | "aadB2C" | "facebook" | "google" | "microsoft" | "twitter";
}
export interface IssueAttachmentContractProperties {
	readonly content: string;
	readonly contentFormat: string;
	readonly title: string;
}
export interface IssueCommentContractProperties {
	readonly createdDate?: string;
	readonly text: string;
	readonly userId: string;
}
export interface IssueContractProperties {
	readonly apiId?: string;
	readonly createdDate?: string;
	readonly description: string;
	readonly state?: "closed" | "open" | "proposed" | "removed" | "resolved";
	readonly title: string;
	readonly userId: string;
}
export interface KeyVaultContractCreatePropertiesOrKeyVaultContractProperties {
	readonly identityClientId?: string;
	readonly lastStatus?: KeyVaultLastAccessStatusContractProperties;
	readonly secretIdentifier?: string;
}
export interface KeyVaultLastAccessStatusContractProperties {
	readonly code?: string;
	readonly message?: string;
	readonly timeStampUtc?: string;
}
export interface LoggerContractProperties {
	readonly credentials?: LoggerContractPropertiesCredentials;
	readonly description?: string;
	readonly isBuffered?: boolean;
	readonly loggerType: "applicationInsights" | "azureEventHub" | "azureMonitor";
	readonly resourceId?: string;
}
export interface LoggerContractPropertiesCredentials {
	readonly [key: string]: string;
}
export interface NamedValueCreateContractPropertiesOrNamedValueContractProperties {
	readonly displayName: string;
	readonly keyVault?: KeyVaultContractCreatePropertiesOrKeyVaultContractProperties;
	readonly secret?: boolean;
	readonly tags?: string[];
	readonly value?: string;
}
export interface NamedValueSecretContract {
	readonly value?: string;
}
export interface NotificationContractProperties {
	readonly description?: string;
	readonly recipients?: RecipientsContractProperties;
	readonly title: string;
}
export interface OAuth2AuthenticationSettingsContract {
	readonly authorizationServerId?: string;
	readonly scope?: string;
}
export interface OpenIdAuthenticationSettingsContract {
	readonly bearerTokenSendingMethods?: "authorizationHeader" | "query"[];
	readonly openidProviderId?: string;
}
export interface OpenidConnectProviderContractProperties {
	readonly clientId: string;
	readonly clientSecret?: string;
	readonly description?: string;
	readonly displayName: string;
	readonly metadataEndpoint: string;
}
export interface OperationContractProperties {
	readonly description?: string;
	readonly displayName: string;
	readonly method: string;
	readonly policies?: string;
	readonly request?: RequestContract;
	readonly responses?: ResponseContract[];
	readonly templateParameters?: ParameterContract[];
	readonly urlTemplate: string;
}
export interface ParameterContract {
	readonly defaultValue?: string;
	readonly description?: string;
	readonly name: string;
	readonly required?: boolean;
	readonly type: string;
	readonly values?: string[];
}
export interface PipelineDiagnosticSettings {
	readonly request?: HttpMessageDiagnostic;
	readonly response?: HttpMessageDiagnostic;
}
export interface PolicyContractProperties {
	readonly format?: "rawxml" | "rawxml-link" | "xml" | "xml-link";
	readonly value: string;
}
export interface PortalDelegationSettingsProperties {
	readonly subscriptions?: SubscriptionsDelegationSettingsProperties;
	readonly url?: string;
	readonly userRegistration?: RegistrationDelegationSettingsProperties;
	readonly validationKey?: string;
}
export interface PortalRevisionContractProperties {
	readonly createdDateTime?: string;
	readonly description?: string;
	readonly isCurrent?: boolean;
	readonly status?: "completed" | "failed" | "pending" | "publishing";
	readonly statusDetails?: string;
	readonly updatedDateTime?: string;
}
export interface PortalSettingValidationKeyContract {
	readonly validationKey?: string;
}
export interface PortalSigninSettingProperties {
	readonly enabled?: boolean;
}
export interface PortalSignupSettingsProperties {
	readonly enabled?: boolean;
	readonly termsOfService?: TermsOfServiceProperties;
}
export interface ProductContractProperties {
	readonly approvalRequired?: boolean;
	readonly description?: string;
	readonly displayName: string;
	readonly state?: "notPublished";
	readonly subscriptionRequired?: boolean;
	readonly subscriptionsLimit?: number;
	readonly terms?: string;
}
export interface RecipientsContractProperties {
	readonly emails?: string[];
	readonly users?: string[];
}
export interface RegistrationDelegationSettingsProperties {
	readonly enabled?: boolean;
}
export interface RepresentationContract {
	readonly contentType: string;
	readonly formParameters?: ParameterContract[];
	readonly sample?: string;
	readonly schemaId?: string;
	readonly typeName?: string;
}
export interface RequestContract {
	readonly description?: string;
	readonly headers?: ParameterContract[];
	readonly queryParameters?: ParameterContract[];
	readonly representations?: RepresentationContract[];
}
export interface ResourceLocationDataContract {
	readonly city?: string;
	readonly countryOrRegion?: string;
	readonly district?: string;
	readonly name: string;
}
export interface ResponseContract {
	readonly description?: string;
	readonly headers?: ParameterContract[];
	readonly representations?: RepresentationContract[];
	readonly statusCode: number;
}
export interface SamplingSettings {
	readonly percentage?: number;
	readonly samplingType?: "fixed";
}
export interface SchemaContractProperties {
	readonly contentType: string;
	readonly document?: SchemaDocumentProperties;
}
export interface SchemaDocumentProperties {
	readonly definitions?: any;
	readonly value?: string;
}
export interface SubscriptionContractProperties {
	readonly allowTracing?: boolean;
	readonly createdDate?: string;
	readonly displayName?: string;
	readonly endDate?: string;
	readonly expirationDate?: string;
	readonly notificationDate?: string;
	readonly ownerId?: string;
	readonly primaryKey?: string;
	readonly scope: string;
	readonly secondaryKey?: string;
	readonly startDate?: string;
	readonly state: "active" | "cancelled" | "expired" | "rejected" | "submitted";
	readonly stateComment?: string;
}
export interface SubscriptionCreateParameterPropertiesOrSubscriptionContractProperties {
	readonly allowTracing?: boolean;
	readonly createdDate?: string;
	readonly displayName: string;
	readonly endDate?: string;
	readonly expirationDate?: string;
	readonly notificationDate?: string;
	readonly ownerId?: string;
	readonly primaryKey?: string;
	readonly scope: string;
	readonly secondaryKey?: string;
	readonly startDate?: string;
	readonly state?: "active" | "cancelled" | "expired" | "rejected" | "submitted";
	readonly stateComment?: string;
}
export interface SubscriptionKeyParameterNamesContract {
	readonly header?: string;
	readonly query?: string;
}
export interface SubscriptionKeysContract {
	readonly primaryKey?: string;
	readonly secondaryKey?: string;
}
export interface SubscriptionsDelegationSettingsProperties {
	readonly enabled?: boolean;
}
export interface TagContractProperties {
	readonly displayName: string;
}
export interface TagDescriptionBasePropertiesOrTagDescriptionContractProperties {
	readonly description?: string;
	readonly displayName?: string;
	readonly externalDocsDescription?: string;
	readonly externalDocsUrl?: string;
	readonly tagId?: string;
}
export interface TenantSettingsContractProperties {
	readonly settings?: TenantSettingsContractPropertiesSettings;
}
export interface TenantSettingsContractPropertiesSettings {
	readonly [key: string]: string;
}
export interface TermsOfServiceProperties {
	readonly consentRequired?: boolean;
	readonly enabled?: boolean;
	readonly text?: string;
}
export interface TokenBodyParameterContract {
	readonly name: string;
	readonly value: string;
}
export interface UserCreateParameterPropertiesOrUserContractProperties {
	readonly appType?: "developerPortal" | "portal";
	readonly confirmation?: "invite" | "signup";
	readonly email: string;
	readonly firstName: string;
	readonly groups?: GroupContractProperties[];
	readonly identities?: UserIdentityContract[];
	readonly lastName: string;
	readonly note?: string;
	readonly password?: string;
	readonly registrationDate?: string;
	readonly state?: "active" | "blocked" | "deleted" | "pending";
}
export interface UserIdentityContract {
	readonly id?: string;
	readonly provider?: string;
}
export interface UserIdentityProperties {
	readonly clientId?: string;
	readonly principalId?: string;
}
export interface VirtualNetworkConfiguration {
	readonly subnetname?: string;
	readonly subnetResourceId?: string;
	readonly vnetid?: string;
}
export interface X509CertificateName {
	readonly issuerCertificateThumbprint?: string;
	readonly name?: string;
}
export type service_portalsettings =
	| service_portalsettings_delegation
	| service_portalsettings_signin
	| service_portalsettings_signup;
export default {
	"locations/deletedservices": locations_deletedservices,
	service: service,
	"service/apis": service_apis,
	"service/apis/diagnostics": service_apis_diagnostics,
	"service/apis/issues": service_apis_issues,
	"service/apis/issues/attachments": service_apis_issues_attachments,
	"service/apis/issues/comments": service_apis_issues_comments,
	"service/apis/operations": service_apis_operations,
	"service/apis/operations/policies": service_apis_operations_policies,
	"service/apis/operations/tags": service_apis_operations_tags,
	"service/apis/policies": service_apis_policies,
	"service/apis/releases": service_apis_releases,
	"service/apis/schemas": service_apis_schemas,
	"service/apis/tagDescriptions": service_apis_tagDescriptions,
	"service/apis/tags": service_apis_tags,
	"service/apiVersionSets": service_apiVersionSets,
	"service/authorizationServers": service_authorizationServers,
	"service/backends": service_backends,
	"service/caches": service_caches,
	"service/certificates": service_certificates,
	"service/contentTypes": service_contentTypes,
	"service/contentTypes/contentItems": service_contentTypes_contentItems,
	"service/diagnostics": service_diagnostics,
	"service/gateways": service_gateways,
	"service/gateways/apis": service_gateways_apis,
	"service/gateways/certificateAuthorities": service_gateways_certificateAuthorities,
	"service/gateways/hostnameConfigurations": service_gateways_hostnameConfigurations,
	"service/groups": service_groups,
	"service/groups/users": service_groups_users,
	"service/identityProviders": service_identityProviders,
	"service/issues": service_issues,
	"service/loggers": service_loggers,
	"service/namedValues": service_namedValues,
	"service/notifications": service_notifications,
	"service/notifications/recipientEmails": service_notifications_recipientEmails,
	"service/notifications/recipientUsers": service_notifications_recipientUsers,
	"service/openidConnectProviders": service_openidConnectProviders,
	"service/policies": service_policies,
	"service/portalRevisions": service_portalRevisions,
	"service/portalsettings/delegation": service_portalsettings_delegation,
	"service/portalsettings/signin": service_portalsettings_signin,
	"service/portalsettings/signup": service_portalsettings_signup,
	"service/products": service_products,
	"service/products/apis": service_products_apis,
	"service/products/groups": service_products_groups,
	"service/products/policies": service_products_policies,
	"service/products/tags": service_products_tags,
	"service/settings": service_settings,
	"service/subscriptions": service_subscriptions,
	"service/tags": service_tags,
	"service/templates": service_templates,
	"service/tenant": service_tenant,
	"service/users": service_users,
	"service/users/subscriptions": service_users_subscriptions,
};

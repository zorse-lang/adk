import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class locations_deletedservices
	extends ArmResource<locations_deletedservicesComponentInputs>
	implements locations_deletedservicesComponentOutputs
{
	constructor(entity: ADKEntity, options: locations_deletedservicesComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/locations/deletedservices", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/locations/deletedservices";
}
export interface locations_deletedservicesComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/locations/deletedservices";
}
export interface locations_deletedservicesComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: DeletedServiceContractProperties | undefined;
}
export class service extends ArmResource<serviceComponentInputs> implements serviceComponentOutputs {
	constructor(entity: ADKEntity, options: serviceComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service";
}
export interface serviceComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service";
}
export interface serviceComponentInputs {
	readonly etag?: string | undefined;
	readonly identity?: ApiManagementServiceIdentity | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties: ApiManagementServiceProperties;
	readonly sku: ApiManagementServiceSkuProperties;
	readonly tags?: ApimResourceTags | undefined;
	readonly zones?: string[] | undefined;
}
export class service_apis extends ArmResource<service_apisComponentInputs> implements service_apisComponentOutputs {
	constructor(entity: ADKEntity, options: service_apisComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/apis", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/apis";
}
export interface service_apisComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/apis";
}
export interface service_apisComponentInputs {
	readonly name: string;
	readonly properties?: ApiCreateOrUpdatePropertiesOrApiContractProperties | undefined;
}
export class service_apis_diagnostics
	extends ArmResource<service_apis_diagnosticsComponentInputs>
	implements service_apis_diagnosticsComponentOutputs
{
	constructor(entity: ADKEntity, options: service_apis_diagnosticsComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/apis/diagnostics", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/apis/diagnostics";
}
export interface service_apis_diagnosticsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/apis/diagnostics";
}
export interface service_apis_diagnosticsComponentInputs {
	readonly name: string;
	readonly properties?: DiagnosticContractProperties | undefined;
}
export class service_apis_issues
	extends ArmResource<service_apis_issuesComponentInputs>
	implements service_apis_issuesComponentOutputs
{
	constructor(entity: ADKEntity, options: service_apis_issuesComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/apis/issues", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/apis/issues";
}
export interface service_apis_issuesComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/apis/issues";
}
export interface service_apis_issuesComponentInputs {
	readonly name: string;
	readonly properties?: IssueContractProperties | undefined;
}
export class service_apis_issues_attachments
	extends ArmResource<service_apis_issues_attachmentsComponentInputs>
	implements service_apis_issues_attachmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: service_apis_issues_attachmentsComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/apis/issues/attachments", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/apis/issues/attachments";
}
export interface service_apis_issues_attachmentsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/apis/issues/attachments";
}
export interface service_apis_issues_attachmentsComponentInputs {
	readonly name: string;
	readonly properties?: IssueAttachmentContractProperties | undefined;
}
export class service_apis_issues_comments
	extends ArmResource<service_apis_issues_commentsComponentInputs>
	implements service_apis_issues_commentsComponentOutputs
{
	constructor(entity: ADKEntity, options: service_apis_issues_commentsComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/apis/issues/comments", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/apis/issues/comments";
}
export interface service_apis_issues_commentsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/apis/issues/comments";
}
export interface service_apis_issues_commentsComponentInputs {
	readonly name: string;
	readonly properties?: IssueCommentContractProperties | undefined;
}
export class service_apis_operations
	extends ArmResource<service_apis_operationsComponentInputs>
	implements service_apis_operationsComponentOutputs
{
	constructor(entity: ADKEntity, options: service_apis_operationsComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/apis/operations", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/apis/operations";
}
export interface service_apis_operationsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/apis/operations";
}
export interface service_apis_operationsComponentInputs {
	readonly name: string;
	readonly properties?: OperationContractProperties | undefined;
}
export class service_apis_operations_policies
	extends ArmResource<service_apis_operations_policiesComponentInputs>
	implements service_apis_operations_policiesComponentOutputs
{
	constructor(entity: ADKEntity, options: service_apis_operations_policiesComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/apis/operations/policies", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/apis/operations/policies";
}
export interface service_apis_operations_policiesComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/apis/operations/policies";
}
export interface service_apis_operations_policiesComponentInputs {
	readonly name: string;
	readonly properties?: PolicyContractProperties | undefined;
}
export class service_apis_operations_tags
	extends ArmResource<service_apis_operations_tagsComponentInputs>
	implements service_apis_operations_tagsComponentOutputs
{
	constructor(entity: ADKEntity, options: service_apis_operations_tagsComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/apis/operations/tags", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/apis/operations/tags";
}
export interface service_apis_operations_tagsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/apis/operations/tags";
}
export interface service_apis_operations_tagsComponentInputs {
	readonly name: string;
	readonly properties?: TagContractProperties | undefined;
}
export class service_apis_policies
	extends ArmResource<service_apis_policiesComponentInputs>
	implements service_apis_policiesComponentOutputs
{
	constructor(entity: ADKEntity, options: service_apis_policiesComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/apis/policies", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/apis/policies";
}
export interface service_apis_policiesComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/apis/policies";
}
export interface service_apis_policiesComponentInputs {
	readonly name: string;
	readonly properties?: PolicyContractProperties | undefined;
}
export class service_apis_releases
	extends ArmResource<service_apis_releasesComponentInputs>
	implements service_apis_releasesComponentOutputs
{
	constructor(entity: ADKEntity, options: service_apis_releasesComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/apis/releases", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/apis/releases";
}
export interface service_apis_releasesComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/apis/releases";
}
export interface service_apis_releasesComponentInputs {
	readonly name: string;
	readonly properties?: ApiReleaseContractProperties | undefined;
}
export class service_apis_schemas
	extends ArmResource<service_apis_schemasComponentInputs>
	implements service_apis_schemasComponentOutputs
{
	constructor(entity: ADKEntity, options: service_apis_schemasComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/apis/schemas", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/apis/schemas";
}
export interface service_apis_schemasComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/apis/schemas";
}
export interface service_apis_schemasComponentInputs {
	readonly name: string;
	readonly properties?: SchemaContractProperties | undefined;
}
export class service_apis_tagDescriptions
	extends ArmResource<service_apis_tagDescriptionsComponentInputs>
	implements service_apis_tagDescriptionsComponentOutputs
{
	constructor(entity: ADKEntity, options: service_apis_tagDescriptionsComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/apis/tagDescriptions", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/apis/tagDescriptions";
}
export interface service_apis_tagDescriptionsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/apis/tagDescriptions";
}
export interface service_apis_tagDescriptionsComponentInputs {
	readonly name: string;
	readonly properties?: TagDescriptionBasePropertiesOrTagDescriptionContractProperties | undefined;
}
export class service_apis_tags
	extends ArmResource<service_apis_tagsComponentInputs>
	implements service_apis_tagsComponentOutputs
{
	constructor(entity: ADKEntity, options: service_apis_tagsComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/apis/tags", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/apis/tags";
}
export interface service_apis_tagsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/apis/tags";
}
export interface service_apis_tagsComponentInputs {
	readonly name: string;
	readonly properties?: TagContractProperties | undefined;
}
export class service_apiVersionSets
	extends ArmResource<service_apiVersionSetsComponentInputs>
	implements service_apiVersionSetsComponentOutputs
{
	constructor(entity: ADKEntity, options: service_apiVersionSetsComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/apiVersionSets", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/apiVersionSets";
}
export interface service_apiVersionSetsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/apiVersionSets";
}
export interface service_apiVersionSetsComponentInputs {
	readonly name: string;
	readonly properties?: ApiVersionSetContractProperties | undefined;
}
export class service_authorizationServers
	extends ArmResource<service_authorizationServersComponentInputs>
	implements service_authorizationServersComponentOutputs
{
	constructor(entity: ADKEntity, options: service_authorizationServersComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/authorizationServers", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/authorizationServers";
}
export interface service_authorizationServersComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/authorizationServers";
}
export interface service_authorizationServersComponentInputs {
	readonly name: string;
	readonly properties?: AuthorizationServerContractProperties | undefined;
}
export class service_backends
	extends ArmResource<service_backendsComponentInputs>
	implements service_backendsComponentOutputs
{
	constructor(entity: ADKEntity, options: service_backendsComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/backends", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/backends";
}
export interface service_backendsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/backends";
}
export interface service_backendsComponentInputs {
	readonly name: string;
	readonly properties?: BackendContractProperties | undefined;
}
export class service_caches extends ArmResource<service_cachesComponentInputs> implements service_cachesComponentOutputs {
	constructor(entity: ADKEntity, options: service_cachesComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/caches", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/caches";
}
export interface service_cachesComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/caches";
}
export interface service_cachesComponentInputs {
	readonly name: string;
	readonly properties?: CacheContractProperties | undefined;
}
export class service_certificates
	extends ArmResource<service_certificatesComponentInputs>
	implements service_certificatesComponentOutputs
{
	constructor(entity: ADKEntity, options: service_certificatesComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/certificates", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/certificates";
}
export interface service_certificatesComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/certificates";
}
export interface service_certificatesComponentInputs {
	readonly name: string;
	readonly properties?: CertificateCreateOrUpdatePropertiesOrCertificateContractProperties | undefined;
}
export class service_contentTypes
	extends ArmResource<service_contentTypesComponentInputs>
	implements service_contentTypesComponentOutputs
{
	constructor(entity: ADKEntity, options: service_contentTypesComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/contentTypes", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/contentTypes";
}
export interface service_contentTypesComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/contentTypes";
}
export interface service_contentTypesComponentInputs {
	readonly name: string;
	readonly properties?: ContentTypeContractProperties | undefined;
}
export class service_contentTypes_contentItems
	extends ArmResource<service_contentTypes_contentItemsComponentInputs>
	implements service_contentTypes_contentItemsComponentOutputs
{
	constructor(entity: ADKEntity, options: service_contentTypes_contentItemsComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/contentTypes/contentItems", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/contentTypes/contentItems";
}
export interface service_contentTypes_contentItemsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/contentTypes/contentItems";
}
export interface service_contentTypes_contentItemsComponentInputs {
	readonly name: string;
	readonly properties?: ContentItemContractProperties | undefined;
}
export class service_diagnostics
	extends ArmResource<service_diagnosticsComponentInputs>
	implements service_diagnosticsComponentOutputs
{
	constructor(entity: ADKEntity, options: service_diagnosticsComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/diagnostics", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/diagnostics";
}
export interface service_diagnosticsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/diagnostics";
}
export interface service_diagnosticsComponentInputs {
	readonly name: string;
	readonly properties?: DiagnosticContractProperties | undefined;
}
export class service_gateways
	extends ArmResource<service_gatewaysComponentInputs>
	implements service_gatewaysComponentOutputs
{
	constructor(entity: ADKEntity, options: service_gatewaysComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/gateways", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/gateways";
}
export interface service_gatewaysComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/gateways";
}
export interface service_gatewaysComponentInputs {
	readonly name: string;
	readonly properties?: GatewayContractProperties | undefined;
}
export class service_gateways_apis
	extends ArmResource<service_gateways_apisComponentInputs>
	implements service_gateways_apisComponentOutputs
{
	constructor(entity: ADKEntity, options: service_gateways_apisComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/gateways/apis", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/gateways/apis";
}
export interface service_gateways_apisComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/gateways/apis";
}
export interface service_gateways_apisComponentInputs {
	readonly name: string;
	readonly properties?: AssociationContractProperties | undefined;
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
			"2020-12-01",
			options,
		);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/gateways/certificateAuthorities";
}
export interface service_gateways_certificateAuthoritiesComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/gateways/certificateAuthorities";
}
export interface service_gateways_certificateAuthoritiesComponentInputs {
	readonly name: string;
	readonly properties?: GatewayCertificateAuthorityContractProperties | undefined;
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
			"2020-12-01",
			options,
		);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/gateways/hostnameConfigurations";
}
export interface service_gateways_hostnameConfigurationsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/gateways/hostnameConfigurations";
}
export interface service_gateways_hostnameConfigurationsComponentInputs {
	readonly name: string;
	readonly properties?: GatewayHostnameConfigurationContractProperties | undefined;
}
export class service_groups extends ArmResource<service_groupsComponentInputs> implements service_groupsComponentOutputs {
	constructor(entity: ADKEntity, options: service_groupsComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/groups", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/groups";
}
export interface service_groupsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/groups";
}
export interface service_groupsComponentInputs {
	readonly name: string;
	readonly properties?: GroupCreateParametersPropertiesOrGroupContractProperties | undefined;
}
export class service_groups_users
	extends ArmResource<service_groups_usersComponentInputs>
	implements service_groups_usersComponentOutputs
{
	constructor(entity: ADKEntity, options: service_groups_usersComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/groups/users", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/groups/users";
}
export interface service_groups_usersComponentOutputs {
	readonly apiVersion: "2020-12-01";
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
		super(entity, options.name, "Microsoft.ApiManagement/service/identityProviders", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/identityProviders";
}
export interface service_identityProvidersComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/identityProviders";
}
export interface service_identityProvidersComponentInputs {
	readonly name: string;
	readonly properties?: IdentityProviderCreateContractPropertiesOrIdentityProviderContractProperties | undefined;
}
export class service_issues extends ArmResource<service_issuesComponentInputs> implements service_issuesComponentOutputs {
	constructor(entity: ADKEntity, options: service_issuesComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/issues", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/issues";
}
export interface service_issuesComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/issues";
}
export interface service_issuesComponentInputs {
	readonly name: string;
	readonly properties?: IssueContractProperties | undefined;
}
export class service_loggers
	extends ArmResource<service_loggersComponentInputs>
	implements service_loggersComponentOutputs
{
	constructor(entity: ADKEntity, options: service_loggersComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/loggers", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/loggers";
}
export interface service_loggersComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/loggers";
}
export interface service_loggersComponentInputs {
	readonly name: string;
	readonly properties?: LoggerContractProperties | undefined;
}
export class service_namedValues
	extends ArmResource<service_namedValuesComponentInputs>
	implements service_namedValuesComponentOutputs
{
	constructor(entity: ADKEntity, options: service_namedValuesComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/namedValues", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/namedValues";
}
export interface service_namedValuesComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/namedValues";
}
export interface service_namedValuesComponentInputs {
	readonly name: string;
	readonly properties?: NamedValueCreateContractPropertiesOrNamedValueContractProperties | undefined;
}
export class service_notifications
	extends ArmResource<service_notificationsComponentInputs>
	implements service_notificationsComponentOutputs
{
	constructor(entity: ADKEntity, options: service_notificationsComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/notifications", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/notifications";
}
export interface service_notificationsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/notifications";
}
export interface service_notificationsComponentInputs {
	readonly name: string;
	readonly properties?: NotificationContractProperties | undefined;
}
export class service_notifications_recipientEmails
	extends ArmResource<service_notifications_recipientEmailsComponentInputs>
	implements service_notifications_recipientEmailsComponentOutputs
{
	constructor(entity: ADKEntity, options: service_notifications_recipientEmailsComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/notifications/recipientEmails", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/notifications/recipientEmails";
}
export interface service_notifications_recipientEmailsComponentOutputs {
	readonly apiVersion: "2020-12-01";
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
		super(entity, options.name, "Microsoft.ApiManagement/service/notifications/recipientUsers", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/notifications/recipientUsers";
}
export interface service_notifications_recipientUsersComponentOutputs {
	readonly apiVersion: "2020-12-01";
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
		super(entity, options.name, "Microsoft.ApiManagement/service/openidConnectProviders", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/openidConnectProviders";
}
export interface service_openidConnectProvidersComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/openidConnectProviders";
}
export interface service_openidConnectProvidersComponentInputs {
	readonly name: string;
	readonly properties?: OpenidConnectProviderContractProperties | undefined;
}
export class service_policies
	extends ArmResource<service_policiesComponentInputs>
	implements service_policiesComponentOutputs
{
	constructor(entity: ADKEntity, options: service_policiesComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/policies", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/policies";
}
export interface service_policiesComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/policies";
}
export interface service_policiesComponentInputs {
	readonly name: string;
	readonly properties?: PolicyContractProperties | undefined;
}
export class service_portalRevisions
	extends ArmResource<service_portalRevisionsComponentInputs>
	implements service_portalRevisionsComponentOutputs
{
	constructor(entity: ADKEntity, options: service_portalRevisionsComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/portalRevisions", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/portalRevisions";
}
export interface service_portalRevisionsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/portalRevisions";
}
export interface service_portalRevisionsComponentInputs {
	readonly name: string;
	readonly properties?: PortalRevisionContractProperties | undefined;
}
export class service_portalsettings_delegation
	extends ArmResource<service_portalsettings_delegationComponentInputs>
	implements service_portalsettings_delegationComponentOutputs
{
	constructor(entity: ADKEntity, options: service_portalsettings_delegationComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/portalsettings", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/portalsettings";
}
export interface service_portalsettings_delegationComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/portalsettings";
}
export interface service_portalsettings_delegationComponentInputs {
	readonly name: string;
	readonly properties?: PortalDelegationSettingsProperties | undefined;
}
export class service_portalsettings_signin
	extends ArmResource<service_portalsettings_signinComponentInputs>
	implements service_portalsettings_signinComponentOutputs
{
	constructor(entity: ADKEntity, options: service_portalsettings_signinComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/portalsettings", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/portalsettings";
}
export interface service_portalsettings_signinComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/portalsettings";
}
export interface service_portalsettings_signinComponentInputs {
	readonly name: string;
	readonly properties?: PortalSigninSettingProperties | undefined;
}
export class service_portalsettings_signup
	extends ArmResource<service_portalsettings_signupComponentInputs>
	implements service_portalsettings_signupComponentOutputs
{
	constructor(entity: ADKEntity, options: service_portalsettings_signupComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/portalsettings", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/portalsettings";
}
export interface service_portalsettings_signupComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/portalsettings";
}
export interface service_portalsettings_signupComponentInputs {
	readonly name: string;
	readonly properties?: PortalSignupSettingsProperties | undefined;
}
export class service_products
	extends ArmResource<service_productsComponentInputs>
	implements service_productsComponentOutputs
{
	constructor(entity: ADKEntity, options: service_productsComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/products", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/products";
}
export interface service_productsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/products";
}
export interface service_productsComponentInputs {
	readonly name: string;
	readonly properties?: ProductContractProperties | undefined;
}
export class service_products_apis
	extends ArmResource<service_products_apisComponentInputs>
	implements service_products_apisComponentOutputs
{
	constructor(entity: ADKEntity, options: service_products_apisComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/products/apis", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/products/apis";
}
export interface service_products_apisComponentOutputs {
	readonly apiVersion: "2020-12-01";
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
		super(entity, options.name, "Microsoft.ApiManagement/service/products/groups", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/products/groups";
}
export interface service_products_groupsComponentOutputs {
	readonly apiVersion: "2020-12-01";
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
		super(entity, options.name, "Microsoft.ApiManagement/service/products/policies", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/products/policies";
}
export interface service_products_policiesComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/products/policies";
}
export interface service_products_policiesComponentInputs {
	readonly name: string;
	readonly properties?: PolicyContractProperties | undefined;
}
export class service_products_tags
	extends ArmResource<service_products_tagsComponentInputs>
	implements service_products_tagsComponentOutputs
{
	constructor(entity: ADKEntity, options: service_products_tagsComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/products/tags", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/products/tags";
}
export interface service_products_tagsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/products/tags";
}
export interface service_products_tagsComponentInputs {
	readonly name: string;
	readonly properties?: TagContractProperties | undefined;
}
export class service_settings
	extends ArmResource<service_settingsComponentInputs>
	implements service_settingsComponentOutputs
{
	constructor(entity: ADKEntity, options: service_settingsComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/settings", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/settings";
}
export interface service_settingsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/settings";
}
export interface service_settingsComponentInputs {
	readonly name: string;
	readonly properties?: TenantSettingsContractProperties | undefined;
}
export class service_subscriptions
	extends ArmResource<service_subscriptionsComponentInputs>
	implements service_subscriptionsComponentOutputs
{
	constructor(entity: ADKEntity, options: service_subscriptionsComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/subscriptions", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/subscriptions";
}
export interface service_subscriptionsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/subscriptions";
}
export interface service_subscriptionsComponentInputs {
	readonly name: string;
	readonly properties?: SubscriptionCreateParameterPropertiesOrSubscriptionContractProperties | undefined;
}
export class service_tags extends ArmResource<service_tagsComponentInputs> implements service_tagsComponentOutputs {
	constructor(entity: ADKEntity, options: service_tagsComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/tags", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/tags";
}
export interface service_tagsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/tags";
}
export interface service_tagsComponentInputs {
	readonly name: string;
	readonly properties?: TagContractProperties | undefined;
}
export class service_templates
	extends ArmResource<service_templatesComponentInputs>
	implements service_templatesComponentOutputs
{
	constructor(entity: ADKEntity, options: service_templatesComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/templates", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/templates";
}
export interface service_templatesComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/templates";
}
export interface service_templatesComponentInputs {
	readonly name: string;
	readonly properties?: EmailTemplateUpdateParameterPropertiesOrEmailTemplateContractProperties | undefined;
}
export class service_tenant extends ArmResource<service_tenantComponentInputs> implements service_tenantComponentOutputs {
	constructor(entity: ADKEntity, options: service_tenantComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/tenant", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/tenant";
}
export interface service_tenantComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/tenant";
}
export interface service_tenantComponentInputs {
	readonly name: string;
	readonly properties?: AccessInformationCreateParameterPropertiesOrAccessInformationContractProperties | undefined;
}
export class service_users extends ArmResource<service_usersComponentInputs> implements service_usersComponentOutputs {
	constructor(entity: ADKEntity, options: service_usersComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/users", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/users";
}
export interface service_usersComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/users";
}
export interface service_usersComponentInputs {
	readonly name: string;
	readonly properties?: UserCreateParameterPropertiesOrUserContractProperties | undefined;
}
export class service_users_subscriptions
	extends ArmResource<service_users_subscriptionsComponentInputs>
	implements service_users_subscriptionsComponentOutputs
{
	constructor(entity: ADKEntity, options: service_users_subscriptionsComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/users/subscriptions", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/users/subscriptions";
}
export interface service_users_subscriptionsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/users/subscriptions";
}
export interface service_users_subscriptionsComponentInputs {
	readonly name: string;
	readonly properties?: SubscriptionContractProperties | undefined;
}
export function listKeys(resource: service_gateways): GatewayKeysContract {
	if (resource.apiVersion !== "2020-12-01") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.ApiManagement/service/gateways") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listSecrets(resource: service_authorizationServers): AuthorizationServerSecretsContract {
	if (resource.apiVersion !== "2020-12-01") {
		throw new Error(`listSecrets is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.ApiManagement/service/authorizationServers") {
		throw new Error(`listSecrets is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listValue(resource: service_namedValues): NamedValueSecretContract {
	if (resource.apiVersion !== "2020-12-01") {
		throw new Error(`listValue is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.ApiManagement/service/namedValues") {
		throw new Error(`listValue is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AccessInformationCreateParameterPropertiesOrAccessInformationContractProperties {
	readonly enabled?: boolean | undefined;
	readonly id?: string | undefined;
	readonly primaryKey?: string | undefined;
	readonly principalId?: string | undefined;
	readonly secondaryKey?: string | undefined;
}
export interface AccessInformationSecretsContract {
	readonly enabled?: boolean | undefined;
	readonly id?: string | undefined;
	readonly primaryKey?: string | undefined;
	readonly principalId?: string | undefined;
	readonly secondaryKey?: string | undefined;
}
export interface AdditionalLocation {
	readonly disableGateway?: boolean | undefined;
	readonly gatewayRegionalUrl?: string | undefined;
	readonly location: string;
	readonly privateIPAddresses?: string[] | undefined;
	readonly publicIPAddresses?: string[] | undefined;
	readonly sku: ApiManagementServiceSkuProperties;
	readonly virtualNetworkConfiguration?: VirtualNetworkConfiguration | undefined;
	readonly zones?: string[] | undefined;
}
export interface ApiCreateOrUpdatePropertiesOrApiContractProperties {
	readonly apiRevision?: string | undefined;
	readonly apiRevisionDescription?: string | undefined;
	readonly apiType?: ("http" | "soap") | undefined;
	readonly apiVersion?: string | undefined;
	readonly apiVersionDescription?: string | undefined;
	readonly apiVersionSet?: ApiVersionSetContractDetails | undefined;
	readonly apiVersionSetId?: string | undefined;
	readonly authenticationSettings?: AuthenticationSettingsContract | undefined;
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly format?:
		| (
				| "openapi"
				| "openapi+json"
				| "openapi+json-link"
				| "openapi-link"
				| "swagger-json"
				| "swagger-link-json"
				| "wadl-link-json"
				| "wadl-xml"
				| "wsdl"
				| "wsdl-link"
		  )
		| undefined;
	readonly isCurrent?: boolean | undefined;
	readonly isOnline?: boolean | undefined;
	readonly path: string;
	readonly protocols?: "http"[] | undefined;
	readonly serviceUrl?: string | undefined;
	readonly sourceApiId?: string | undefined;
	readonly subscriptionKeyParameterNames?: SubscriptionKeyParameterNamesContract | undefined;
	readonly subscriptionRequired?: boolean | undefined;
	readonly type?: ("http" | "soap") | undefined;
	readonly value?: string | undefined;
	readonly wsdlSelector?: ApiCreateOrUpdatePropertiesWsdlSelector | undefined;
}
export interface ApiCreateOrUpdatePropertiesWsdlSelector {
	readonly wsdlEndpointName?: string | undefined;
	readonly wsdlServiceName?: string | undefined;
}
export interface ApiManagementServiceBasePropertiesCustomProperties {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ApiManagementServiceIdentity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type: "None" | "SystemAssigned" | "SystemAssigned, UserAssigned" | "UserAssigned";
	readonly userAssignedIdentities?: ApiManagementServiceIdentityUserAssignedIdentities | undefined;
}
export interface ApiManagementServiceIdentityUserAssignedIdentities {
	readonly "[ key: string ]"?: UserIdentityProperties | undefined;
}
export interface ApiManagementServiceProperties {
	readonly additionalLocations?: AdditionalLocation[] | undefined;
	readonly apiVersionConstraint?: ApiVersionConstraint | undefined;
	readonly certificates?: CertificateConfiguration[] | undefined;
	readonly createdAtUtc?: string | undefined;
	readonly customProperties?: ApiManagementServiceBasePropertiesCustomProperties | undefined;
	readonly developerPortalUrl?: string | undefined;
	readonly disableGateway?: boolean | undefined;
	readonly enableClientCertificate?: boolean | undefined;
	readonly gatewayRegionalUrl?: string | undefined;
	readonly gatewayUrl?: string | undefined;
	readonly hostnameConfigurations?: HostnameConfiguration[] | undefined;
	readonly managementApiUrl?: string | undefined;
	readonly notificationSenderEmail?: string | undefined;
	readonly portalUrl?: string | undefined;
	readonly privateIPAddresses?: string[] | undefined;
	readonly provisioningState?: string | undefined;
	readonly publicIPAddresses?: string[] | undefined;
	readonly publisherEmail: string;
	readonly publisherName: string;
	readonly restore?: boolean | undefined;
	readonly scmUrl?: string | undefined;
	readonly targetProvisioningState?: string | undefined;
	readonly virtualNetworkConfiguration?: VirtualNetworkConfiguration | undefined;
	readonly virtualNetworkType?: ("External" | "Internal" | "None") | undefined;
}
export interface ApiManagementServiceSkuProperties {
	readonly capacity: number;
	readonly name: "Basic" | "Consumption" | "Developer" | "Isolated" | "Premium" | "Standard";
}
export interface ApimResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ApiReleaseContractProperties {
	readonly apiId?: string | undefined;
	readonly createdDateTime?: string | undefined;
	readonly notes?: string | undefined;
	readonly updatedDateTime?: string | undefined;
}
export interface ApiVersionConstraint {
	readonly minApiVersion?: string | undefined;
}
export interface ApiVersionSetContractDetails {
	readonly description?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly versionHeaderName?: string | undefined;
	readonly versioningScheme?: ("Header" | "Query" | "Segment") | undefined;
	readonly versionQueryName?: string | undefined;
}
export interface ApiVersionSetContractProperties {
	readonly description?: string | undefined;
	readonly displayName: string;
	readonly versionHeaderName?: string | undefined;
	readonly versioningScheme: "Header" | "Query" | "Segment";
	readonly versionQueryName?: string | undefined;
}
export interface AssociationContractProperties {
	readonly provisioningState?: "created" | undefined;
}
export interface AuthenticationSettingsContract {
	readonly oAuth2?: OAuth2AuthenticationSettingsContract | undefined;
	readonly openid?: OpenIdAuthenticationSettingsContract | undefined;
}
export interface AuthorizationServerContractProperties {
	readonly authorizationEndpoint: string;
	readonly authorizationMethods?: ("DELETE" | "GET" | "HEAD" | "OPTIONS" | "PATCH" | "POST" | "PUT"[]) | undefined;
	readonly bearerTokenSendingMethods?: ("authorizationHeader" | "query"[]) | undefined;
	readonly clientAuthenticationMethod?: ("Basic" | "Body"[]) | undefined;
	readonly clientId: string;
	readonly clientRegistrationEndpoint: string;
	readonly clientSecret?: string | undefined;
	readonly defaultScope?: string | undefined;
	readonly description?: string | undefined;
	readonly displayName: string;
	readonly grantTypes: "authorizationCode" | "clientCredentials" | "implicit" | "resourceOwnerPassword"[];
	readonly resourceOwnerPassword?: string | undefined;
	readonly resourceOwnerUsername?: string | undefined;
	readonly supportState?: boolean | undefined;
	readonly tokenBodyParameters?: TokenBodyParameterContract[] | undefined;
	readonly tokenEndpoint?: string | undefined;
}
export interface AuthorizationServerSecretsContract {
	readonly clientSecret?: string | undefined;
	readonly resourceOwnerPassword?: string | undefined;
	readonly resourceOwnerUsername?: string | undefined;
}
export interface BackendAuthorizationHeaderCredentials {
	readonly parameter: string;
	readonly scheme: string;
}
export interface BackendContractProperties {
	readonly credentials?: BackendCredentialsContract | undefined;
	readonly description?: string | undefined;
	readonly properties?: BackendProperties | undefined;
	readonly protocol: "http" | "soap";
	readonly proxy?: BackendProxyContract | undefined;
	readonly resourceId?: string | undefined;
	readonly title?: string | undefined;
	readonly tls?: BackendTlsProperties | undefined;
	readonly url: string;
}
export interface BackendCredentialsContract {
	readonly authorization?: BackendAuthorizationHeaderCredentials | undefined;
	readonly certificate?: string[] | undefined;
	readonly certificateIds?: string[] | undefined;
	readonly header?: BackendCredentialsContractHeader | undefined;
	readonly query?: BackendCredentialsContractQuery | undefined;
}
export interface BackendCredentialsContractHeader {
	readonly "[ key: string ]"?: string[] | undefined;
}
export interface BackendCredentialsContractQuery {
	readonly "[ key: string ]"?: string[] | undefined;
}
export interface BackendProperties {
	readonly serviceFabricCluster?: BackendServiceFabricClusterProperties | undefined;
}
export interface BackendProxyContract {
	readonly password?: string | undefined;
	readonly url: string;
	readonly username?: string | undefined;
}
export interface BackendServiceFabricClusterProperties {
	readonly clientCertificateId?: string | undefined;
	readonly clientCertificatethumbprint?: string | undefined;
	readonly managementEndpoints: string[];
	readonly maxPartitionResolutionRetries?: number | undefined;
	readonly serverCertificateThumbprints?: string[] | undefined;
	readonly serverX509Names?: X509CertificateName[] | undefined;
}
export interface BackendTlsProperties {
	readonly validateCertificateChain?: boolean | undefined;
	readonly validateCertificateName?: boolean | undefined;
}
export interface BodyDiagnosticSettings {
	readonly bytes?: number | undefined;
}
export interface CacheContractProperties {
	readonly connectionString: string;
	readonly description?: string | undefined;
	readonly resourceId?: string | undefined;
	readonly useFromLocation: string;
}
export interface CertificateConfiguration {
	readonly certificate?: CertificateInformation | undefined;
	readonly certificatePassword?: string | undefined;
	readonly encodedCertificate?: string | undefined;
	readonly storeName: "CertificateAuthority" | "Root";
}
export interface CertificateCreateOrUpdatePropertiesOrCertificateContractProperties {
	readonly data?: string | undefined;
	readonly expirationDate?: string | undefined;
	readonly keyVault?: KeyVaultContractCreatePropertiesOrKeyVaultContractProperties | undefined;
	readonly password?: string | undefined;
	readonly subject?: string | undefined;
	readonly thumbprint?: string | undefined;
}
export interface CertificateInformation {
	readonly expiry: string;
	readonly subject: string;
	readonly thumbprint: string;
}
export interface ClientSecretContract {
	readonly clientSecret?: string | undefined;
}
export interface ContentItemContractProperties {
	readonly "[ key: string ]"?: any | undefined;
}
export interface ContentTypeContractProperties {
	readonly description?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly schema?: any | undefined;
	readonly version?: string | undefined;
}
export interface DataMasking {
	readonly headers?: DataMaskingEntity[] | undefined;
	readonly queryParams?: DataMaskingEntity[] | undefined;
}
export interface DataMaskingEntity {
	readonly mode?: ("Hide" | "Mask") | undefined;
	readonly value?: string | undefined;
}
export interface DeletedServiceContractProperties {
	readonly deletionDate?: string | undefined;
	readonly scheduledPurgeDate?: string | undefined;
	readonly serviceId?: string | undefined;
}
export interface DiagnosticContractProperties {
	readonly alwaysLog?: "allErrors" | undefined;
	readonly backend?: PipelineDiagnosticSettings | undefined;
	readonly frontend?: PipelineDiagnosticSettings | undefined;
	readonly httpCorrelationProtocol?: ("Legacy" | "None" | "W3C") | undefined;
	readonly logClientIp?: boolean | undefined;
	readonly loggerId: string;
	readonly metrics?: boolean | undefined;
	readonly operationNameFormat?: ("Name" | "Url") | undefined;
	readonly sampling?: SamplingSettings | undefined;
	readonly verbosity?: ("error" | "information" | "verbose") | undefined;
}
export interface EmailTemplateParametersContractProperties {
	readonly description?: string | undefined;
	readonly name?: string | undefined;
	readonly title?: string | undefined;
}
export interface EmailTemplateUpdateParameterPropertiesOrEmailTemplateContractProperties {
	readonly body?: string | undefined;
	readonly description?: string | undefined;
	readonly isDefault?: boolean | undefined;
	readonly parameters?: EmailTemplateParametersContractProperties[] | undefined;
	readonly subject?: string | undefined;
	readonly title?: string | undefined;
}
export interface GatewayCertificateAuthorityContractProperties {
	readonly isTrusted?: boolean | undefined;
}
export interface GatewayContractProperties {
	readonly description?: string | undefined;
	readonly locationData?: ResourceLocationDataContract | undefined;
}
export interface GatewayHostnameConfigurationContractProperties {
	readonly certificateId?: string | undefined;
	readonly hostname?: string | undefined;
	readonly http2Enabled?: boolean | undefined;
	readonly negotiateClientCertificate?: boolean | undefined;
	readonly tls10Enabled?: boolean | undefined;
	readonly tls11Enabled?: boolean | undefined;
}
export interface GatewayKeysContract {
	readonly primary?: string | undefined;
	readonly secondary?: string | undefined;
}
export interface GroupContractProperties {
	readonly builtIn?: boolean | undefined;
	readonly description?: string | undefined;
	readonly displayName: string;
	readonly externalId?: string | undefined;
	readonly type?: ("custom" | "external") | undefined;
}
export interface GroupCreateParametersPropertiesOrGroupContractProperties {
	readonly builtIn?: boolean | undefined;
	readonly description?: string | undefined;
	readonly displayName: string;
	readonly externalId?: string | undefined;
	readonly type?: ("custom" | "external") | undefined;
}
export interface HostnameConfiguration {
	readonly certificate?: CertificateInformation | undefined;
	readonly certificatePassword?: string | undefined;
	readonly defaultSslBinding?: boolean | undefined;
	readonly encodedCertificate?: string | undefined;
	readonly hostName: string;
	readonly identityClientId?: string | undefined;
	readonly keyVaultId?: string | undefined;
	readonly negotiateClientCertificate?: boolean | undefined;
	readonly type: "DeveloperPortal" | "Management" | "Portal" | "Proxy" | "Scm";
}
export interface HttpMessageDiagnostic {
	readonly body?: BodyDiagnosticSettings | undefined;
	readonly dataMasking?: DataMasking | undefined;
	readonly headers?: string[] | undefined;
}
export interface IdentityProviderCreateContractPropertiesOrIdentityProviderContractProperties {
	readonly allowedTenants?: string[] | undefined;
	readonly authority?: string | undefined;
	readonly clientId: string;
	readonly clientSecret: string;
	readonly passwordResetPolicyName?: string | undefined;
	readonly profileEditingPolicyName?: string | undefined;
	readonly signinPolicyName?: string | undefined;
	readonly signinTenant?: string | undefined;
	readonly signupPolicyName?: string | undefined;
	readonly type?: ("aad" | "aadB2C" | "facebook" | "google" | "microsoft" | "twitter") | undefined;
}
export interface IssueAttachmentContractProperties {
	readonly content: string;
	readonly contentFormat: string;
	readonly title: string;
}
export interface IssueCommentContractProperties {
	readonly createdDate?: string | undefined;
	readonly text: string;
	readonly userId: string;
}
export interface IssueContractProperties {
	readonly apiId?: string | undefined;
	readonly createdDate?: string | undefined;
	readonly description: string;
	readonly state?: ("closed" | "open" | "proposed" | "removed" | "resolved") | undefined;
	readonly title: string;
	readonly userId: string;
}
export interface KeyVaultContractCreatePropertiesOrKeyVaultContractProperties {
	readonly identityClientId?: string | undefined;
	readonly lastStatus?: KeyVaultLastAccessStatusContractProperties | undefined;
	readonly secretIdentifier?: string | undefined;
}
export interface KeyVaultLastAccessStatusContractProperties {
	readonly code?: string | undefined;
	readonly message?: string | undefined;
	readonly timeStampUtc?: string | undefined;
}
export interface LoggerContractProperties {
	readonly credentials?: LoggerContractPropertiesCredentials | undefined;
	readonly description?: string | undefined;
	readonly isBuffered?: boolean | undefined;
	readonly loggerType: "applicationInsights" | "azureEventHub" | "azureMonitor";
	readonly resourceId?: string | undefined;
}
export interface LoggerContractPropertiesCredentials {
	readonly "[ key: string ]"?: string | undefined;
}
export interface NamedValueCreateContractPropertiesOrNamedValueContractProperties {
	readonly displayName: string;
	readonly keyVault?: KeyVaultContractCreatePropertiesOrKeyVaultContractProperties | undefined;
	readonly secret?: boolean | undefined;
	readonly tags?: string[] | undefined;
	readonly value?: string | undefined;
}
export interface NamedValueSecretContract {
	readonly value?: string | undefined;
}
export interface NotificationContractProperties {
	readonly description?: string | undefined;
	readonly recipients?: RecipientsContractProperties | undefined;
	readonly title: string;
}
export interface OAuth2AuthenticationSettingsContract {
	readonly authorizationServerId?: string | undefined;
	readonly scope?: string | undefined;
}
export interface OpenIdAuthenticationSettingsContract {
	readonly bearerTokenSendingMethods?: ("authorizationHeader" | "query"[]) | undefined;
	readonly openidProviderId?: string | undefined;
}
export interface OpenidConnectProviderContractProperties {
	readonly clientId: string;
	readonly clientSecret?: string | undefined;
	readonly description?: string | undefined;
	readonly displayName: string;
	readonly metadataEndpoint: string;
}
export interface OperationContractProperties {
	readonly description?: string | undefined;
	readonly displayName: string;
	readonly method: string;
	readonly policies?: string | undefined;
	readonly request?: RequestContract | undefined;
	readonly responses?: ResponseContract[] | undefined;
	readonly templateParameters?: ParameterContract[] | undefined;
	readonly urlTemplate: string;
}
export interface ParameterContract {
	readonly defaultValue?: string | undefined;
	readonly description?: string | undefined;
	readonly name: string;
	readonly required?: boolean | undefined;
	readonly type: string;
	readonly values?: string[] | undefined;
}
export interface PipelineDiagnosticSettings {
	readonly request?: HttpMessageDiagnostic | undefined;
	readonly response?: HttpMessageDiagnostic | undefined;
}
export interface PolicyContractProperties {
	readonly format?: ("rawxml" | "rawxml-link" | "xml" | "xml-link") | undefined;
	readonly value: string;
}
export interface PortalDelegationSettingsProperties {
	readonly subscriptions?: SubscriptionsDelegationSettingsProperties | undefined;
	readonly url?: string | undefined;
	readonly userRegistration?: RegistrationDelegationSettingsProperties | undefined;
	readonly validationKey?: string | undefined;
}
export interface PortalRevisionContractProperties {
	readonly createdDateTime?: string | undefined;
	readonly description?: string | undefined;
	readonly isCurrent?: boolean | undefined;
	readonly status?: ("completed" | "failed" | "pending" | "publishing") | undefined;
	readonly statusDetails?: string | undefined;
	readonly updatedDateTime?: string | undefined;
}
export interface PortalSettingValidationKeyContract {
	readonly validationKey?: string | undefined;
}
export interface PortalSigninSettingProperties {
	readonly enabled?: boolean | undefined;
}
export interface PortalSignupSettingsProperties {
	readonly enabled?: boolean | undefined;
	readonly termsOfService?: TermsOfServiceProperties | undefined;
}
export interface ProductContractProperties {
	readonly approvalRequired?: boolean | undefined;
	readonly description?: string | undefined;
	readonly displayName: string;
	readonly state?: "notPublished" | undefined;
	readonly subscriptionRequired?: boolean | undefined;
	readonly subscriptionsLimit?: number | undefined;
	readonly terms?: string | undefined;
}
export interface RecipientsContractProperties {
	readonly emails?: string[] | undefined;
	readonly users?: string[] | undefined;
}
export interface RegistrationDelegationSettingsProperties {
	readonly enabled?: boolean | undefined;
}
export interface RepresentationContract {
	readonly contentType: string;
	readonly formParameters?: ParameterContract[] | undefined;
	readonly sample?: string | undefined;
	readonly schemaId?: string | undefined;
	readonly typeName?: string | undefined;
}
export interface RequestContract {
	readonly description?: string | undefined;
	readonly headers?: ParameterContract[] | undefined;
	readonly queryParameters?: ParameterContract[] | undefined;
	readonly representations?: RepresentationContract[] | undefined;
}
export interface ResourceLocationDataContract {
	readonly city?: string | undefined;
	readonly countryOrRegion?: string | undefined;
	readonly district?: string | undefined;
	readonly name: string;
}
export interface ResponseContract {
	readonly description?: string | undefined;
	readonly headers?: ParameterContract[] | undefined;
	readonly representations?: RepresentationContract[] | undefined;
	readonly statusCode: number;
}
export interface SamplingSettings {
	readonly percentage?: number | undefined;
	readonly samplingType?: "fixed" | undefined;
}
export interface SchemaContractProperties {
	readonly contentType: string;
	readonly document?: SchemaDocumentProperties | undefined;
}
export interface SchemaDocumentProperties {
	readonly definitions?: any | undefined;
	readonly value?: string | undefined;
}
export interface SubscriptionContractProperties {
	readonly allowTracing?: boolean | undefined;
	readonly createdDate?: string | undefined;
	readonly displayName?: string | undefined;
	readonly endDate?: string | undefined;
	readonly expirationDate?: string | undefined;
	readonly notificationDate?: string | undefined;
	readonly ownerId?: string | undefined;
	readonly primaryKey?: string | undefined;
	readonly scope: string;
	readonly secondaryKey?: string | undefined;
	readonly startDate?: string | undefined;
	readonly state: "active" | "cancelled" | "expired" | "rejected" | "submitted";
	readonly stateComment?: string | undefined;
}
export interface SubscriptionCreateParameterPropertiesOrSubscriptionContractProperties {
	readonly allowTracing?: boolean | undefined;
	readonly createdDate?: string | undefined;
	readonly displayName: string;
	readonly endDate?: string | undefined;
	readonly expirationDate?: string | undefined;
	readonly notificationDate?: string | undefined;
	readonly ownerId?: string | undefined;
	readonly primaryKey?: string | undefined;
	readonly scope: string;
	readonly secondaryKey?: string | undefined;
	readonly startDate?: string | undefined;
	readonly state?: ("active" | "cancelled" | "expired" | "rejected" | "submitted") | undefined;
	readonly stateComment?: string | undefined;
}
export interface SubscriptionKeyParameterNamesContract {
	readonly header?: string | undefined;
	readonly query?: string | undefined;
}
export interface SubscriptionKeysContract {
	readonly primaryKey?: string | undefined;
	readonly secondaryKey?: string | undefined;
}
export interface SubscriptionsDelegationSettingsProperties {
	readonly enabled?: boolean | undefined;
}
export interface TagContractProperties {
	readonly displayName: string;
}
export interface TagDescriptionBasePropertiesOrTagDescriptionContractProperties {
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly externalDocsDescription?: string | undefined;
	readonly externalDocsUrl?: string | undefined;
	readonly tagId?: string | undefined;
}
export interface TenantSettingsContractProperties {
	readonly settings?: TenantSettingsContractPropertiesSettings | undefined;
}
export interface TenantSettingsContractPropertiesSettings {
	readonly "[ key: string ]"?: string | undefined;
}
export interface TermsOfServiceProperties {
	readonly consentRequired?: boolean | undefined;
	readonly enabled?: boolean | undefined;
	readonly text?: string | undefined;
}
export interface TokenBodyParameterContract {
	readonly name: string;
	readonly value: string;
}
export interface UserCreateParameterPropertiesOrUserContractProperties {
	readonly appType?: ("developerPortal" | "portal") | undefined;
	readonly confirmation?: ("invite" | "signup") | undefined;
	readonly email: string;
	readonly firstName: string;
	readonly groups?: GroupContractProperties[] | undefined;
	readonly identities?: UserIdentityContract[] | undefined;
	readonly lastName: string;
	readonly note?: string | undefined;
	readonly password?: string | undefined;
	readonly registrationDate?: string | undefined;
	readonly state?: ("active" | "blocked" | "deleted" | "pending") | undefined;
}
export interface UserIdentityContract {
	readonly id?: string | undefined;
	readonly provider?: string | undefined;
}
export interface UserIdentityProperties {
	readonly clientId?: string | undefined;
	readonly principalId?: string | undefined;
}
export interface VirtualNetworkConfiguration {
	readonly subnetname?: string | undefined;
	readonly subnetResourceId?: string | undefined;
	readonly vnetid?: string | undefined;
}
export interface X509CertificateName {
	readonly issuerCertificateThumbprint?: string | undefined;
	readonly name?: string | undefined;
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
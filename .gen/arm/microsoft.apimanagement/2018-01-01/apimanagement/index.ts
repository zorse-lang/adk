import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class service extends ArmResource<serviceComponentInputs> implements serviceComponentOutputs {
	constructor(entity: ADKEntity, options: serviceComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service";
}
export interface serviceComponentOutputs {
	readonly apiVersion: "2018-01-01";
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
}
export class service_api_version_sets
	extends ArmResource<service_api_version_setsComponentInputs>
	implements service_api_version_setsComponentOutputs
{
	constructor(entity: ADKEntity, options: service_api_version_setsComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/api-version-sets", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/api-version-sets";
}
export interface service_api_version_setsComponentOutputs {
	readonly apiVersion: "2018-01-01";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/api-version-sets";
}
export interface service_api_version_setsComponentInputs {
	readonly name: string;
	readonly properties?: ApiVersionSetContractProperties;
}
export class service_apis extends ArmResource<service_apisComponentInputs> implements service_apisComponentOutputs {
	constructor(entity: ADKEntity, options: service_apisComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/apis", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/apis";
}
export interface service_apisComponentOutputs {
	readonly apiVersion: "2018-01-01";
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
		super(entity, options.name, "Microsoft.ApiManagement/service/apis/diagnostics", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/apis/diagnostics";
}
export interface service_apis_diagnosticsComponentOutputs {
	readonly apiVersion: "2018-01-01";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/apis/diagnostics";
}
export interface service_apis_diagnosticsComponentInputs {
	readonly name: string;
	readonly properties?: DiagnosticContractProperties;
}
export class service_apis_diagnostics_loggers
	extends ArmResource<service_apis_diagnostics_loggersComponentInputs>
	implements service_apis_diagnostics_loggersComponentOutputs
{
	constructor(entity: ADKEntity, options: service_apis_diagnostics_loggersComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/apis/diagnostics/loggers", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/apis/diagnostics/loggers";
}
export interface service_apis_diagnostics_loggersComponentOutputs {
	readonly apiVersion: "2018-01-01";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/apis/diagnostics/loggers";
}
export interface service_apis_diagnostics_loggersComponentInputs {
	readonly name: string;
}
export class service_apis_issues
	extends ArmResource<service_apis_issuesComponentInputs>
	implements service_apis_issuesComponentOutputs
{
	constructor(entity: ADKEntity, options: service_apis_issuesComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/apis/issues", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/apis/issues";
}
export interface service_apis_issuesComponentOutputs {
	readonly apiVersion: "2018-01-01";
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
		super(entity, options.name, "Microsoft.ApiManagement/service/apis/issues/attachments", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/apis/issues/attachments";
}
export interface service_apis_issues_attachmentsComponentOutputs {
	readonly apiVersion: "2018-01-01";
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
		super(entity, options.name, "Microsoft.ApiManagement/service/apis/issues/comments", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/apis/issues/comments";
}
export interface service_apis_issues_commentsComponentOutputs {
	readonly apiVersion: "2018-01-01";
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
		super(entity, options.name, "Microsoft.ApiManagement/service/apis/operations", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/apis/operations";
}
export interface service_apis_operationsComponentOutputs {
	readonly apiVersion: "2018-01-01";
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
		super(entity, options.name, "Microsoft.ApiManagement/service/apis/operations/policies", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/apis/operations/policies";
}
export interface service_apis_operations_policiesComponentOutputs {
	readonly apiVersion: "2018-01-01";
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
		super(entity, options.name, "Microsoft.ApiManagement/service/apis/operations/tags", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/apis/operations/tags";
}
export interface service_apis_operations_tagsComponentOutputs {
	readonly apiVersion: "2018-01-01";
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
		super(entity, options.name, "Microsoft.ApiManagement/service/apis/policies", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/apis/policies";
}
export interface service_apis_policiesComponentOutputs {
	readonly apiVersion: "2018-01-01";
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
		super(entity, options.name, "Microsoft.ApiManagement/service/apis/releases", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/apis/releases";
}
export interface service_apis_releasesComponentOutputs {
	readonly apiVersion: "2018-01-01";
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
		super(entity, options.name, "Microsoft.ApiManagement/service/apis/schemas", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/apis/schemas";
}
export interface service_apis_schemasComponentOutputs {
	readonly apiVersion: "2018-01-01";
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
		super(entity, options.name, "Microsoft.ApiManagement/service/apis/tagDescriptions", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/apis/tagDescriptions";
}
export interface service_apis_tagDescriptionsComponentOutputs {
	readonly apiVersion: "2018-01-01";
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
		super(entity, options.name, "Microsoft.ApiManagement/service/apis/tags", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/apis/tags";
}
export interface service_apis_tagsComponentOutputs {
	readonly apiVersion: "2018-01-01";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/apis/tags";
}
export interface service_apis_tagsComponentInputs {
	readonly name: string;
	readonly properties?: TagContractProperties;
}
export class service_authorizationServers
	extends ArmResource<service_authorizationServersComponentInputs>
	implements service_authorizationServersComponentOutputs
{
	constructor(entity: ADKEntity, options: service_authorizationServersComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/authorizationServers", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/authorizationServers";
}
export interface service_authorizationServersComponentOutputs {
	readonly apiVersion: "2018-01-01";
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
		super(entity, options.name, "Microsoft.ApiManagement/service/backends", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/backends";
}
export interface service_backendsComponentOutputs {
	readonly apiVersion: "2018-01-01";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/backends";
}
export interface service_backendsComponentInputs {
	readonly name: string;
	readonly properties?: BackendContractProperties;
}
export class service_certificates
	extends ArmResource<service_certificatesComponentInputs>
	implements service_certificatesComponentOutputs
{
	constructor(entity: ADKEntity, options: service_certificatesComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/certificates", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/certificates";
}
export interface service_certificatesComponentOutputs {
	readonly apiVersion: "2018-01-01";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/certificates";
}
export interface service_certificatesComponentInputs {
	readonly name: string;
	readonly properties?: CertificateCreateOrUpdatePropertiesOrCertificateContractProperties;
}
export class service_diagnostics
	extends ArmResource<service_diagnosticsComponentInputs>
	implements service_diagnosticsComponentOutputs
{
	constructor(entity: ADKEntity, options: service_diagnosticsComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/diagnostics", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/diagnostics";
}
export interface service_diagnosticsComponentOutputs {
	readonly apiVersion: "2018-01-01";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/diagnostics";
}
export interface service_diagnosticsComponentInputs {
	readonly name: string;
	readonly properties?: DiagnosticContractProperties;
}
export class service_diagnostics_loggers
	extends ArmResource<service_diagnostics_loggersComponentInputs>
	implements service_diagnostics_loggersComponentOutputs
{
	constructor(entity: ADKEntity, options: service_diagnostics_loggersComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/diagnostics/loggers", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/diagnostics/loggers";
}
export interface service_diagnostics_loggersComponentOutputs {
	readonly apiVersion: "2018-01-01";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/diagnostics/loggers";
}
export interface service_diagnostics_loggersComponentInputs {
	readonly name: string;
}
export class service_groups extends ArmResource<service_groupsComponentInputs> implements service_groupsComponentOutputs {
	constructor(entity: ADKEntity, options: service_groupsComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/groups", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/groups";
}
export interface service_groupsComponentOutputs {
	readonly apiVersion: "2018-01-01";
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
		super(entity, options.name, "Microsoft.ApiManagement/service/groups/users", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/groups/users";
}
export interface service_groups_usersComponentOutputs {
	readonly apiVersion: "2018-01-01";
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
		super(entity, options.name, "Microsoft.ApiManagement/service/identityProviders", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/identityProviders";
}
export interface service_identityProvidersComponentOutputs {
	readonly apiVersion: "2018-01-01";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/identityProviders";
}
export interface service_identityProvidersComponentInputs {
	readonly name: string;
	readonly properties?: IdentityProviderContractProperties;
}
export class service_loggers
	extends ArmResource<service_loggersComponentInputs>
	implements service_loggersComponentOutputs
{
	constructor(entity: ADKEntity, options: service_loggersComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/loggers", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/loggers";
}
export interface service_loggersComponentOutputs {
	readonly apiVersion: "2018-01-01";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/loggers";
}
export interface service_loggersComponentInputs {
	readonly name: string;
	readonly properties?: LoggerContractProperties;
}
export class service_notifications
	extends ArmResource<service_notificationsComponentInputs>
	implements service_notificationsComponentOutputs
{
	constructor(entity: ADKEntity, options: service_notificationsComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/notifications", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/notifications";
}
export interface service_notificationsComponentOutputs {
	readonly apiVersion: "2018-01-01";
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
		super(entity, options.name, "Microsoft.ApiManagement/service/notifications/recipientEmails", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/notifications/recipientEmails";
}
export interface service_notifications_recipientEmailsComponentOutputs {
	readonly apiVersion: "2018-01-01";
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
		super(entity, options.name, "Microsoft.ApiManagement/service/notifications/recipientUsers", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/notifications/recipientUsers";
}
export interface service_notifications_recipientUsersComponentOutputs {
	readonly apiVersion: "2018-01-01";
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
		super(entity, options.name, "Microsoft.ApiManagement/service/openidConnectProviders", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/openidConnectProviders";
}
export interface service_openidConnectProvidersComponentOutputs {
	readonly apiVersion: "2018-01-01";
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
		super(entity, options.name, "Microsoft.ApiManagement/service/policies", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/policies";
}
export interface service_policiesComponentOutputs {
	readonly apiVersion: "2018-01-01";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/policies";
}
export interface service_policiesComponentInputs {
	readonly name: string;
	readonly properties?: PolicyContractProperties;
}
export class service_portalsettings_delegation
	extends ArmResource<service_portalsettings_delegationComponentInputs>
	implements service_portalsettings_delegationComponentOutputs
{
	constructor(entity: ADKEntity, options: service_portalsettings_delegationComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/portalsettings", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/portalsettings";
}
export interface service_portalsettings_delegationComponentOutputs {
	readonly apiVersion: "2018-01-01";
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
		super(entity, options.name, "Microsoft.ApiManagement/service/portalsettings", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/portalsettings";
}
export interface service_portalsettings_signinComponentOutputs {
	readonly apiVersion: "2018-01-01";
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
		super(entity, options.name, "Microsoft.ApiManagement/service/portalsettings", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/portalsettings";
}
export interface service_portalsettings_signupComponentOutputs {
	readonly apiVersion: "2018-01-01";
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
		super(entity, options.name, "Microsoft.ApiManagement/service/products", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/products";
}
export interface service_productsComponentOutputs {
	readonly apiVersion: "2018-01-01";
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
		super(entity, options.name, "Microsoft.ApiManagement/service/products/apis", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/products/apis";
}
export interface service_products_apisComponentOutputs {
	readonly apiVersion: "2018-01-01";
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
		super(entity, options.name, "Microsoft.ApiManagement/service/products/groups", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/products/groups";
}
export interface service_products_groupsComponentOutputs {
	readonly apiVersion: "2018-01-01";
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
		super(entity, options.name, "Microsoft.ApiManagement/service/products/policies", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/products/policies";
}
export interface service_products_policiesComponentOutputs {
	readonly apiVersion: "2018-01-01";
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
		super(entity, options.name, "Microsoft.ApiManagement/service/products/tags", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/products/tags";
}
export interface service_products_tagsComponentOutputs {
	readonly apiVersion: "2018-01-01";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/products/tags";
}
export interface service_products_tagsComponentInputs {
	readonly name: string;
	readonly properties?: TagContractProperties;
}
export class service_properties
	extends ArmResource<service_propertiesComponentInputs>
	implements service_propertiesComponentOutputs
{
	constructor(entity: ADKEntity, options: service_propertiesComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/properties", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/properties";
}
export interface service_propertiesComponentOutputs {
	readonly apiVersion: "2018-01-01";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/properties";
}
export interface service_propertiesComponentInputs {
	readonly name: string;
	readonly properties?: PropertyContractProperties;
}
export class service_subscriptions
	extends ArmResource<service_subscriptionsComponentInputs>
	implements service_subscriptionsComponentOutputs
{
	constructor(entity: ADKEntity, options: service_subscriptionsComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/subscriptions", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/subscriptions";
}
export interface service_subscriptionsComponentOutputs {
	readonly apiVersion: "2018-01-01";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/subscriptions";
}
export interface service_subscriptionsComponentInputs {
	readonly name: string;
	readonly properties?: SubscriptionCreateParameterPropertiesOrSubscriptionContractProperties;
}
export class service_tags extends ArmResource<service_tagsComponentInputs> implements service_tagsComponentOutputs {
	constructor(entity: ADKEntity, options: service_tagsComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/tags", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/tags";
}
export interface service_tagsComponentOutputs {
	readonly apiVersion: "2018-01-01";
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
		super(entity, options.name, "Microsoft.ApiManagement/service/templates", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/templates";
}
export interface service_templatesComponentOutputs {
	readonly apiVersion: "2018-01-01";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/templates";
}
export interface service_templatesComponentInputs {
	readonly name: string;
	readonly properties?: EmailTemplateUpdateParameterPropertiesOrEmailTemplateContractProperties;
}
export class service_users extends ArmResource<service_usersComponentInputs> implements service_usersComponentOutputs {
	constructor(entity: ADKEntity, options: service_usersComponentInputs) {
		super(entity, options.name, "Microsoft.ApiManagement/service/users", "2018-01-01", options);
	}
	public readonly apiVersion: "2018-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.ApiManagement/service/users";
}
export interface service_usersComponentOutputs {
	readonly apiVersion: "2018-01-01";
	readonly id: string;
	readonly type: "Microsoft.ApiManagement/service/users";
}
export interface service_usersComponentInputs {
	readonly name: string;
	readonly properties?: UserCreateParameterPropertiesOrUserContractProperties;
}
export interface AdditionalLocation {
	readonly gatewayRegionalUrl?: string;
	readonly location: string;
	readonly privateIPAddresses?: string[];
	readonly publicIPAddresses?: string[];
	readonly sku: ApiManagementServiceSkuProperties;
	readonly virtualNetworkConfiguration?: VirtualNetworkConfiguration;
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
	readonly contentFormat?: "swagger-json" | "swagger-link-json" | "wadl-link-json" | "wadl-xml" | "wsdl" | "wsdl-link";
	readonly contentValue?: string;
	readonly description?: string;
	readonly displayName?: string;
	readonly isCurrent?: boolean;
	readonly isOnline?: boolean;
	readonly path: string;
	readonly protocols?: "http"[];
	readonly serviceUrl?: string;
	readonly subscriptionKeyParameterNames?: SubscriptionKeyParameterNamesContract;
	readonly type?: "http" | "soap";
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
	readonly type: "SystemAssigned";
}
export interface ApiManagementServiceProperties {
	readonly additionalLocations?: AdditionalLocation[];
	readonly certificates?: CertificateConfiguration[];
	readonly createdAtUtc?: string;
	readonly customProperties?: ApiManagementServiceBasePropertiesCustomProperties;
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
	readonly scmUrl?: string;
	readonly targetProvisioningState?: string;
	readonly virtualNetworkConfiguration?: VirtualNetworkConfiguration;
	readonly virtualNetworkType?: "External" | "Internal" | "None";
}
export interface ApiManagementServiceSkuProperties {
	readonly capacity?: number;
	readonly name: "Basic" | "Developer" | "Premium" | "Standard";
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
export interface ApiVersionSetContractDetails {
	readonly description?: string;
	readonly id?: string;
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
export interface AuthenticationSettingsContract {
	readonly oAuth2?: OAuth2AuthenticationSettingsContract;
	readonly openid?: OpenIdAuthenticationSettingsContract;
	readonly subscriptionKeyRequired?: boolean;
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
	readonly clientCertificatethumbprint: string;
	readonly managementEndpoints: string[];
	readonly maxPartitionResolutionRetries?: number;
	readonly serverCertificateThumbprints?: string[];
	readonly serverX509Names?: X509CertificateName[];
}
export interface BackendTlsProperties {
	readonly validateCertificateChain?: boolean;
	readonly validateCertificateName?: boolean;
}
export interface CertificateConfiguration {
	readonly certificate?: CertificateInformation;
	readonly certificatePassword?: string;
	readonly encodedCertificate?: string;
	readonly storeName: "CertificateAuthority" | "Root";
}
export interface CertificateCreateOrUpdatePropertiesOrCertificateContractProperties {
	readonly data: string;
	readonly expirationDate?: string;
	readonly password: string;
	readonly subject?: string;
	readonly thumbprint?: string;
}
export interface CertificateInformation {
	readonly expiry: string;
	readonly subject: string;
	readonly thumbprint: string;
}
export interface DiagnosticContractProperties {
	readonly enabled: boolean;
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
	readonly keyVaultId?: string;
	readonly negotiateClientCertificate?: boolean;
	readonly type: "Management" | "Portal" | "Proxy";
}
export interface IdentityProviderContractProperties {
	readonly allowedTenants?: string[];
	readonly clientId: string;
	readonly clientSecret: string;
	readonly passwordResetPolicyName?: string;
	readonly profileEditingPolicyName?: string;
	readonly signinPolicyName?: string;
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
export interface LoggerContractProperties {
	readonly credentials: LoggerContractPropertiesCredentials;
	readonly description?: string;
	readonly isBuffered?: boolean;
	readonly loggerType: "applicationInsights" | "azureEventHub";
}
export interface LoggerContractPropertiesCredentials {
	readonly [key: string]: string;
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
export interface PolicyContractProperties {
	readonly contentFormat?: "rawxml" | "rawxml-link" | "xml" | "xml-link";
	readonly policyContent: string;
}
export interface PortalDelegationSettingsProperties {
	readonly subscriptions?: SubscriptionsDelegationSettingsProperties;
	readonly url?: string;
	readonly userRegistration?: RegistrationDelegationSettingsProperties;
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
export interface PropertyContractProperties {
	readonly displayName: string;
	readonly secret?: boolean;
	readonly tags?: string[];
	readonly value: string;
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
export interface ResponseContract {
	readonly description?: string;
	readonly headers?: ParameterContract[];
	readonly representations?: RepresentationContract[];
	readonly statusCode: number;
}
export interface SchemaContractProperties {
	readonly contentType: string;
	readonly document?: SchemaDocumentProperties;
}
export interface SchemaDocumentProperties {
	readonly value?: string;
}
export interface SubscriptionCreateParameterPropertiesOrSubscriptionContractProperties {
	readonly createdDate?: string;
	readonly displayName: string;
	readonly endDate?: string;
	readonly expirationDate?: string;
	readonly notificationDate?: string;
	readonly primaryKey?: string;
	readonly productId: string;
	readonly secondaryKey?: string;
	readonly startDate?: string;
	readonly state?: "active" | "cancelled" | "expired" | "rejected" | "submitted";
	readonly stateComment?: string;
	readonly userId: string;
}
export interface SubscriptionKeyParameterNamesContract {
	readonly header?: string;
	readonly query?: string;
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
	service: service,
	"service/api-version-sets": service_api_version_sets,
	"service/apis": service_apis,
	"service/apis/diagnostics": service_apis_diagnostics,
	"service/apis/diagnostics/loggers": service_apis_diagnostics_loggers,
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
	"service/authorizationServers": service_authorizationServers,
	"service/backends": service_backends,
	"service/certificates": service_certificates,
	"service/diagnostics": service_diagnostics,
	"service/diagnostics/loggers": service_diagnostics_loggers,
	"service/groups": service_groups,
	"service/groups/users": service_groups_users,
	"service/identityProviders": service_identityProviders,
	"service/loggers": service_loggers,
	"service/notifications": service_notifications,
	"service/notifications/recipientEmails": service_notifications_recipientEmails,
	"service/notifications/recipientUsers": service_notifications_recipientUsers,
	"service/openidConnectProviders": service_openidConnectProviders,
	"service/policies": service_policies,
	"service/portalsettings/delegation": service_portalsettings_delegation,
	"service/portalsettings/signin": service_portalsettings_signin,
	"service/portalsettings/signup": service_portalsettings_signup,
	"service/products": service_products,
	"service/products/apis": service_products_apis,
	"service/products/groups": service_products_groups,
	"service/products/policies": service_products_policies,
	"service/products/tags": service_products_tags,
	"service/properties": service_properties,
	"service/subscriptions": service_subscriptions,
	"service/tags": service_tags,
	"service/templates": service_templates,
	"service/users": service_users,
};

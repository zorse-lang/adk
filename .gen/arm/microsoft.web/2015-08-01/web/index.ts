import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class certificates extends ArmResource<certificatesComponentInputs> implements certificatesComponentOutputs {
	constructor(entity: ADKEntity, options: certificatesComponentInputs) {
		super(entity, options.name, "Microsoft.Web/certificates", "2015-08-01", options);
	}
	public readonly apiVersion: "2015-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/certificates";
}
export interface certificatesComponentOutputs {
	readonly apiVersion: "2015-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/certificates";
}
export interface certificatesComponentInputs {
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: CertificateProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class classicMobileServices
	extends ArmResource<classicMobileServicesComponentInputs>
	implements classicMobileServicesComponentOutputs
{
	constructor(entity: ADKEntity, options: classicMobileServicesComponentInputs) {
		super(entity, options.name, "Microsoft.Web/classicMobileServices", "2015-08-01", options);
	}
	public readonly apiVersion: "2015-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/classicMobileServices";
}
export interface classicMobileServicesComponentOutputs {
	readonly apiVersion: "2015-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/classicMobileServices";
}
export interface classicMobileServicesComponentInputs {
	readonly kind?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ClassicMobileServiceProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class csrs extends ArmResource<csrsComponentInputs> implements csrsComponentOutputs {
	constructor(entity: ADKEntity, options: csrsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/csrs", "2015-08-01", options);
	}
	public readonly apiVersion: "2015-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/csrs";
}
export interface csrsComponentOutputs {
	readonly apiVersion: "2015-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/csrs";
}
export interface csrsComponentInputs {
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: CsrProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class hostingEnvironments
	extends ArmResource<hostingEnvironmentsComponentInputs>
	implements hostingEnvironmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: hostingEnvironmentsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/hostingEnvironments", "2015-08-01", options);
	}
	public readonly apiVersion: "2015-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/hostingEnvironments";
}
export interface hostingEnvironmentsComponentOutputs {
	readonly apiVersion: "2015-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/hostingEnvironments";
}
export interface hostingEnvironmentsComponentInputs {
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: HostingEnvironmentProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class hostingEnvironments_multiRolePools
	extends ArmResource<hostingEnvironments_multiRolePoolsComponentInputs>
	implements hostingEnvironments_multiRolePoolsComponentOutputs
{
	constructor(entity: ADKEntity, options: hostingEnvironments_multiRolePoolsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/hostingEnvironments/multiRolePools", "2015-08-01", options);
	}
	public readonly apiVersion: "2015-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/hostingEnvironments/multiRolePools";
}
export interface hostingEnvironments_multiRolePoolsComponentOutputs {
	readonly apiVersion: "2015-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/hostingEnvironments/multiRolePools";
}
export interface hostingEnvironments_multiRolePoolsComponentInputs {
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: WorkerPoolProperties | undefined;
	readonly sku?: SkuDescription | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class hostingEnvironments_workerPools
	extends ArmResource<hostingEnvironments_workerPoolsComponentInputs>
	implements hostingEnvironments_workerPoolsComponentOutputs
{
	constructor(entity: ADKEntity, options: hostingEnvironments_workerPoolsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/hostingEnvironments/workerPools", "2015-08-01", options);
	}
	public readonly apiVersion: "2015-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/hostingEnvironments/workerPools";
}
export interface hostingEnvironments_workerPoolsComponentOutputs {
	readonly apiVersion: "2015-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/hostingEnvironments/workerPools";
}
export interface hostingEnvironments_workerPoolsComponentInputs {
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: WorkerPoolProperties | undefined;
	readonly sku?: SkuDescription | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class managedHostingEnvironments
	extends ArmResource<managedHostingEnvironmentsComponentInputs>
	implements managedHostingEnvironmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: managedHostingEnvironmentsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/managedHostingEnvironments", "2015-08-01", options);
	}
	public readonly apiVersion: "2015-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/managedHostingEnvironments";
}
export interface managedHostingEnvironmentsComponentOutputs {
	readonly apiVersion: "2015-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/managedHostingEnvironments";
}
export interface managedHostingEnvironmentsComponentInputs {
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: HostingEnvironmentPropertiesOrManagedHostingEnvironmentProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class publishingUsers
	extends ArmResource<publishingUsersComponentInputs>
	implements publishingUsersComponentOutputs
{
	constructor(entity: ADKEntity, options: publishingUsersComponentInputs) {
		super(entity, options.name, "Microsoft.Web/publishingUsers", "2015-08-01", options);
	}
	public readonly apiVersion: "2015-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/publishingUsers";
}
export interface publishingUsersComponentOutputs {
	readonly apiVersion: "2015-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/publishingUsers";
}
export interface publishingUsersComponentInputs {
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: UserProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class serverfarms extends ArmResource<serverfarmsComponentInputs> implements serverfarmsComponentOutputs {
	constructor(entity: ADKEntity, options: serverfarmsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/serverfarms", "2015-08-01", options);
	}
	public readonly apiVersion: "2015-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/serverfarms";
}
export interface serverfarmsComponentOutputs {
	readonly apiVersion: "2015-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/serverfarms";
}
export interface serverfarmsComponentInputs {
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: ServerFarmWithRichSkuProperties | undefined;
	readonly sku?: SkuDescription | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class serverfarms_operationresults
	extends ArmResource<serverfarms_operationresultsComponentInputs>
	implements serverfarms_operationresultsComponentOutputs
{
	constructor(entity: ADKEntity, options: serverfarms_operationresultsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/serverfarms/operationresults", "2015-08-01", options);
	}
	public readonly apiVersion: "2015-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/serverfarms/operationresults";
}
export interface serverfarms_operationresultsComponentOutputs {
	readonly apiVersion: "2015-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/serverfarms/operationresults";
}
export interface serverfarms_operationresultsComponentInputs {
	readonly kind?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ServerFarmWithRichSkuProperties | undefined;
	readonly sku?: SkuDescription | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class serverfarms_virtualNetworkConnections
	extends ArmResource<serverfarms_virtualNetworkConnectionsComponentInputs>
	implements serverfarms_virtualNetworkConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: serverfarms_virtualNetworkConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/serverfarms/virtualNetworkConnections", "2015-08-01", options);
	}
	public readonly apiVersion: "2015-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/serverfarms/virtualNetworkConnections";
}
export interface serverfarms_virtualNetworkConnectionsComponentOutputs {
	readonly apiVersion: "2015-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/serverfarms/virtualNetworkConnections";
}
export interface serverfarms_virtualNetworkConnectionsComponentInputs {
	readonly kind?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: VnetInfoProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class serverfarms_virtualNetworkConnections_gateways
	extends ArmResource<serverfarms_virtualNetworkConnections_gatewaysComponentInputs>
	implements serverfarms_virtualNetworkConnections_gatewaysComponentOutputs
{
	constructor(entity: ADKEntity, options: serverfarms_virtualNetworkConnections_gatewaysComponentInputs) {
		super(entity, options.name, "Microsoft.Web/serverfarms/virtualNetworkConnections/gateways", "2015-08-01", options);
	}
	public readonly apiVersion: "2015-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/serverfarms/virtualNetworkConnections/gateways";
}
export interface serverfarms_virtualNetworkConnections_gatewaysComponentOutputs {
	readonly apiVersion: "2015-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/serverfarms/virtualNetworkConnections/gateways";
}
export interface serverfarms_virtualNetworkConnections_gatewaysComponentInputs {
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: VnetGatewayProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class serverfarms_virtualNetworkConnections_routes
	extends ArmResource<serverfarms_virtualNetworkConnections_routesComponentInputs>
	implements serverfarms_virtualNetworkConnections_routesComponentOutputs
{
	constructor(entity: ADKEntity, options: serverfarms_virtualNetworkConnections_routesComponentInputs) {
		super(entity, options.name, "Microsoft.Web/serverfarms/virtualNetworkConnections/routes", "2015-08-01", options);
	}
	public readonly apiVersion: "2015-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/serverfarms/virtualNetworkConnections/routes";
}
export interface serverfarms_virtualNetworkConnections_routesComponentOutputs {
	readonly apiVersion: "2015-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/serverfarms/virtualNetworkConnections/routes";
}
export interface serverfarms_virtualNetworkConnections_routesComponentInputs {
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: VnetRouteProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class sites extends ArmResource<sitesComponentInputs> implements sitesComponentOutputs {
	constructor(entity: ADKEntity, options: sitesComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites", "2015-08-01", options);
	}
	public readonly apiVersion: "2015-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites";
}
export interface sitesComponentOutputs {
	readonly apiVersion: "2015-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites";
}
export interface sitesComponentInputs {
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: SiteProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class sites_backups extends ArmResource<sites_backupsComponentInputs> implements sites_backupsComponentOutputs {
	constructor(entity: ADKEntity, options: sites_backupsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/backups", "2015-08-01", options);
	}
	public readonly apiVersion: "2015-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/backups";
}
export interface sites_backupsComponentOutputs {
	readonly apiVersion: "2015-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/backups";
}
export interface sites_backupsComponentInputs {
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: RestoreRequestPropertiesOrBackupItemProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class sites_config_appsettings
	extends ArmResource<sites_config_appsettingsComponentInputs>
	implements sites_config_appsettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_config_appsettingsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/config", "2015-08-01", options);
	}
	public readonly apiVersion: "2015-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_appsettingsComponentOutputs {
	readonly apiVersion: "2015-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_appsettingsComponentInputs {
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: StringDictionaryProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class sites_config_authsettings
	extends ArmResource<sites_config_authsettingsComponentInputs>
	implements sites_config_authsettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_config_authsettingsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/config", "2015-08-01", options);
	}
	public readonly apiVersion: "2015-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_authsettingsComponentOutputs {
	readonly apiVersion: "2015-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_authsettingsComponentInputs {
	readonly aadClientId?: string | undefined;
	readonly additionalLoginParams?: string[] | undefined;
	readonly allowedAudiences?: string[] | undefined;
	readonly allowedExternalRedirectUrls?: string[] | undefined;
	readonly clientId?: string | undefined;
	readonly clientSecret?: string | undefined;
	readonly defaultProvider?: ("AzureActiveDirectory" | "Facebook" | "Google" | "MicrosoftAccount") | undefined;
	readonly enabled?: boolean | undefined;
	readonly facebookAppId?: string | undefined;
	readonly facebookAppSecret?: string | undefined;
	readonly facebookOAuthScopes?: string[] | undefined;
	readonly googleClientId?: string | undefined;
	readonly googleClientSecret?: string | undefined;
	readonly googleOAuthScopes?: string[] | undefined;
	readonly httpApiPrefixPath?: string | undefined;
	readonly issuer?: string | undefined;
	readonly microsoftAccountClientId?: string | undefined;
	readonly microsoftAccountClientSecret?: string | undefined;
	readonly microsoftAccountOAuthScopes?: string[] | undefined;
	readonly name: string;
	readonly openIdIssuer?: string | undefined;
	readonly tokenRefreshExtensionHours?: number | undefined;
	readonly tokenStoreEnabled?: boolean | undefined;
	readonly twitterConsumerKey?: string | undefined;
	readonly twitterConsumerSecret?: string | undefined;
	readonly unauthenticatedClientAction?: "AllowAnonymous" | undefined;
}
export class sites_config_backup
	extends ArmResource<sites_config_backupComponentInputs>
	implements sites_config_backupComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_config_backupComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/config", "2015-08-01", options);
	}
	public readonly apiVersion: "2015-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_backupComponentOutputs {
	readonly apiVersion: "2015-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_backupComponentInputs {
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: BackupRequestProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class sites_config_connectionstrings
	extends ArmResource<sites_config_connectionstringsComponentInputs>
	implements sites_config_connectionstringsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_config_connectionstringsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/config", "2015-08-01", options);
	}
	public readonly apiVersion: "2015-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_connectionstringsComponentOutputs {
	readonly apiVersion: "2015-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_connectionstringsComponentInputs {
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: ConnectionStringDictionaryProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class sites_config_logs
	extends ArmResource<sites_config_logsComponentInputs>
	implements sites_config_logsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_config_logsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/config", "2015-08-01", options);
	}
	public readonly apiVersion: "2015-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_logsComponentOutputs {
	readonly apiVersion: "2015-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_logsComponentInputs {
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: SiteLogsConfigProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class sites_config_metadata
	extends ArmResource<sites_config_metadataComponentInputs>
	implements sites_config_metadataComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_config_metadataComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/config", "2015-08-01", options);
	}
	public readonly apiVersion: "2015-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_metadataComponentOutputs {
	readonly apiVersion: "2015-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_metadataComponentInputs {
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: StringDictionaryProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class sites_config_slotConfigNames
	extends ArmResource<sites_config_slotConfigNamesComponentInputs>
	implements sites_config_slotConfigNamesComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_config_slotConfigNamesComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/config", "2015-08-01", options);
	}
	public readonly apiVersion: "2015-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_slotConfigNamesComponentOutputs {
	readonly apiVersion: "2015-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_slotConfigNamesComponentInputs {
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: SlotConfigNamesResourceProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class sites_config_web
	extends ArmResource<sites_config_webComponentInputs>
	implements sites_config_webComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_config_webComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/config", "2015-08-01", options);
	}
	public readonly apiVersion: "2015-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_webComponentOutputs {
	readonly apiVersion: "2015-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_webComponentInputs {
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: SiteConfigProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class sites_deployments
	extends ArmResource<sites_deploymentsComponentInputs>
	implements sites_deploymentsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_deploymentsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/deployments", "2015-08-01", options);
	}
	public readonly apiVersion: "2015-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/deployments";
}
export interface sites_deploymentsComponentOutputs {
	readonly apiVersion: "2015-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/deployments";
}
export interface sites_deploymentsComponentInputs {
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: DeploymentProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class sites_hostNameBindings
	extends ArmResource<sites_hostNameBindingsComponentInputs>
	implements sites_hostNameBindingsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_hostNameBindingsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/hostNameBindings", "2015-08-01", options);
	}
	public readonly apiVersion: "2015-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/hostNameBindings";
}
export interface sites_hostNameBindingsComponentOutputs {
	readonly apiVersion: "2015-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/hostNameBindings";
}
export interface sites_hostNameBindingsComponentInputs {
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: HostNameBindingProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class sites_hybridconnection
	extends ArmResource<sites_hybridconnectionComponentInputs>
	implements sites_hybridconnectionComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_hybridconnectionComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/hybridconnection", "2015-08-01", options);
	}
	public readonly apiVersion: "2015-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/hybridconnection";
}
export interface sites_hybridconnectionComponentOutputs {
	readonly apiVersion: "2015-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/hybridconnection";
}
export interface sites_hybridconnectionComponentInputs {
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: RelayServiceConnectionEntityProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class sites_instances_deployments
	extends ArmResource<sites_instances_deploymentsComponentInputs>
	implements sites_instances_deploymentsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_instances_deploymentsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/instances/deployments", "2015-08-01", options);
	}
	public readonly apiVersion: "2015-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/instances/deployments";
}
export interface sites_instances_deploymentsComponentOutputs {
	readonly apiVersion: "2015-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/instances/deployments";
}
export interface sites_instances_deploymentsComponentInputs {
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: DeploymentProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class sites_networkFeatures
	extends ArmResource<sites_networkFeaturesComponentInputs>
	implements sites_networkFeaturesComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_networkFeaturesComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/networkFeatures", "2015-08-01", options);
	}
	public readonly apiVersion: "2015-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/networkFeatures";
}
export interface sites_networkFeaturesComponentOutputs {
	readonly apiVersion: "2015-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/networkFeatures";
}
export interface sites_networkFeaturesComponentInputs {
	readonly kind?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: NetworkFeaturesProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class sites_premieraddons
	extends ArmResource<sites_premieraddonsComponentInputs>
	implements sites_premieraddonsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_premieraddonsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/premieraddons", "2015-08-01", options);
	}
	public readonly apiVersion: "2015-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/premieraddons";
}
export interface sites_premieraddonsComponentOutputs {
	readonly apiVersion: "2015-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/premieraddons";
}
export interface sites_premieraddonsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly plan?: ArmPlan | undefined;
	readonly properties?: any | undefined;
	readonly sku?: SkuDescription | undefined;
	readonly tags?: PremierAddOnRequestTags | undefined;
}
export class sites_slots extends ArmResource<sites_slotsComponentInputs> implements sites_slotsComponentOutputs {
	constructor(entity: ADKEntity, options: sites_slotsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots", "2015-08-01", options);
	}
	public readonly apiVersion: "2015-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots";
}
export interface sites_slotsComponentOutputs {
	readonly apiVersion: "2015-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots";
}
export interface sites_slotsComponentInputs {
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: SiteProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class sites_slots_backups
	extends ArmResource<sites_slots_backupsComponentInputs>
	implements sites_slots_backupsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_backupsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/backups", "2015-08-01", options);
	}
	public readonly apiVersion: "2015-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/backups";
}
export interface sites_slots_backupsComponentOutputs {
	readonly apiVersion: "2015-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/backups";
}
export interface sites_slots_backupsComponentInputs {
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: RestoreRequestPropertiesOrBackupItemProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class sites_slots_config_appsettings
	extends ArmResource<sites_slots_config_appsettingsComponentInputs>
	implements sites_slots_config_appsettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_config_appsettingsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/config", "2015-08-01", options);
	}
	public readonly apiVersion: "2015-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/config";
}
export interface sites_slots_config_appsettingsComponentOutputs {
	readonly apiVersion: "2015-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/config";
}
export interface sites_slots_config_appsettingsComponentInputs {
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: StringDictionaryProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class sites_slots_config_authsettings
	extends ArmResource<sites_slots_config_authsettingsComponentInputs>
	implements sites_slots_config_authsettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_config_authsettingsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/config", "2015-08-01", options);
	}
	public readonly apiVersion: "2015-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/config";
}
export interface sites_slots_config_authsettingsComponentOutputs {
	readonly apiVersion: "2015-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/config";
}
export interface sites_slots_config_authsettingsComponentInputs {
	readonly aadClientId?: string | undefined;
	readonly additionalLoginParams?: string[] | undefined;
	readonly allowedAudiences?: string[] | undefined;
	readonly allowedExternalRedirectUrls?: string[] | undefined;
	readonly clientId?: string | undefined;
	readonly clientSecret?: string | undefined;
	readonly defaultProvider?: ("AzureActiveDirectory" | "Facebook" | "Google" | "MicrosoftAccount") | undefined;
	readonly enabled?: boolean | undefined;
	readonly facebookAppId?: string | undefined;
	readonly facebookAppSecret?: string | undefined;
	readonly facebookOAuthScopes?: string[] | undefined;
	readonly googleClientId?: string | undefined;
	readonly googleClientSecret?: string | undefined;
	readonly googleOAuthScopes?: string[] | undefined;
	readonly httpApiPrefixPath?: string | undefined;
	readonly issuer?: string | undefined;
	readonly microsoftAccountClientId?: string | undefined;
	readonly microsoftAccountClientSecret?: string | undefined;
	readonly microsoftAccountOAuthScopes?: string[] | undefined;
	readonly name: string;
	readonly openIdIssuer?: string | undefined;
	readonly tokenRefreshExtensionHours?: number | undefined;
	readonly tokenStoreEnabled?: boolean | undefined;
	readonly twitterConsumerKey?: string | undefined;
	readonly twitterConsumerSecret?: string | undefined;
	readonly unauthenticatedClientAction?: "AllowAnonymous" | undefined;
}
export class sites_slots_config_backup
	extends ArmResource<sites_slots_config_backupComponentInputs>
	implements sites_slots_config_backupComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_config_backupComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/config", "2015-08-01", options);
	}
	public readonly apiVersion: "2015-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/config";
}
export interface sites_slots_config_backupComponentOutputs {
	readonly apiVersion: "2015-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/config";
}
export interface sites_slots_config_backupComponentInputs {
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: BackupRequestProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class sites_slots_config_connectionstrings
	extends ArmResource<sites_slots_config_connectionstringsComponentInputs>
	implements sites_slots_config_connectionstringsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_config_connectionstringsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/config", "2015-08-01", options);
	}
	public readonly apiVersion: "2015-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/config";
}
export interface sites_slots_config_connectionstringsComponentOutputs {
	readonly apiVersion: "2015-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/config";
}
export interface sites_slots_config_connectionstringsComponentInputs {
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: ConnectionStringDictionaryProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class sites_slots_config_logs
	extends ArmResource<sites_slots_config_logsComponentInputs>
	implements sites_slots_config_logsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_config_logsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/config", "2015-08-01", options);
	}
	public readonly apiVersion: "2015-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/config";
}
export interface sites_slots_config_logsComponentOutputs {
	readonly apiVersion: "2015-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/config";
}
export interface sites_slots_config_logsComponentInputs {
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: SiteLogsConfigProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class sites_slots_config_metadata
	extends ArmResource<sites_slots_config_metadataComponentInputs>
	implements sites_slots_config_metadataComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_config_metadataComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/config", "2015-08-01", options);
	}
	public readonly apiVersion: "2015-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/config";
}
export interface sites_slots_config_metadataComponentOutputs {
	readonly apiVersion: "2015-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/config";
}
export interface sites_slots_config_metadataComponentInputs {
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: StringDictionaryProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class sites_slots_config_web
	extends ArmResource<sites_slots_config_webComponentInputs>
	implements sites_slots_config_webComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_config_webComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/config", "2015-08-01", options);
	}
	public readonly apiVersion: "2015-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/config";
}
export interface sites_slots_config_webComponentOutputs {
	readonly apiVersion: "2015-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/config";
}
export interface sites_slots_config_webComponentInputs {
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: SiteConfigProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class sites_slots_deployments
	extends ArmResource<sites_slots_deploymentsComponentInputs>
	implements sites_slots_deploymentsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_deploymentsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/deployments", "2015-08-01", options);
	}
	public readonly apiVersion: "2015-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/deployments";
}
export interface sites_slots_deploymentsComponentOutputs {
	readonly apiVersion: "2015-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/deployments";
}
export interface sites_slots_deploymentsComponentInputs {
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: DeploymentProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class sites_slots_hostNameBindings
	extends ArmResource<sites_slots_hostNameBindingsComponentInputs>
	implements sites_slots_hostNameBindingsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_hostNameBindingsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/hostNameBindings", "2015-08-01", options);
	}
	public readonly apiVersion: "2015-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/hostNameBindings";
}
export interface sites_slots_hostNameBindingsComponentOutputs {
	readonly apiVersion: "2015-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/hostNameBindings";
}
export interface sites_slots_hostNameBindingsComponentInputs {
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: HostNameBindingProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class sites_slots_hybridconnection
	extends ArmResource<sites_slots_hybridconnectionComponentInputs>
	implements sites_slots_hybridconnectionComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_hybridconnectionComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/hybridconnection", "2015-08-01", options);
	}
	public readonly apiVersion: "2015-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/hybridconnection";
}
export interface sites_slots_hybridconnectionComponentOutputs {
	readonly apiVersion: "2015-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/hybridconnection";
}
export interface sites_slots_hybridconnectionComponentInputs {
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: RelayServiceConnectionEntityProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class sites_slots_instances_deployments
	extends ArmResource<sites_slots_instances_deploymentsComponentInputs>
	implements sites_slots_instances_deploymentsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_instances_deploymentsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/instances/deployments", "2015-08-01", options);
	}
	public readonly apiVersion: "2015-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/instances/deployments";
}
export interface sites_slots_instances_deploymentsComponentOutputs {
	readonly apiVersion: "2015-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/instances/deployments";
}
export interface sites_slots_instances_deploymentsComponentInputs {
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: DeploymentProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class sites_slots_networkFeatures
	extends ArmResource<sites_slots_networkFeaturesComponentInputs>
	implements sites_slots_networkFeaturesComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_networkFeaturesComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/networkFeatures", "2015-08-01", options);
	}
	public readonly apiVersion: "2015-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/networkFeatures";
}
export interface sites_slots_networkFeaturesComponentOutputs {
	readonly apiVersion: "2015-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/networkFeatures";
}
export interface sites_slots_networkFeaturesComponentInputs {
	readonly kind?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: NetworkFeaturesProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class sites_slots_premieraddons
	extends ArmResource<sites_slots_premieraddonsComponentInputs>
	implements sites_slots_premieraddonsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_premieraddonsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/premieraddons", "2015-08-01", options);
	}
	public readonly apiVersion: "2015-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/premieraddons";
}
export interface sites_slots_premieraddonsComponentOutputs {
	readonly apiVersion: "2015-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/premieraddons";
}
export interface sites_slots_premieraddonsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly plan?: ArmPlan | undefined;
	readonly properties?: any | undefined;
	readonly sku?: SkuDescription | undefined;
	readonly tags?: PremierAddOnRequestTags | undefined;
}
export class sites_slots_sourcecontrols
	extends ArmResource<sites_slots_sourcecontrolsComponentInputs>
	implements sites_slots_sourcecontrolsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_sourcecontrolsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/sourcecontrols", "2015-08-01", options);
	}
	public readonly apiVersion: "2015-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/sourcecontrols";
}
export interface sites_slots_sourcecontrolsComponentOutputs {
	readonly apiVersion: "2015-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/sourcecontrols";
}
export interface sites_slots_sourcecontrolsComponentInputs {
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: SiteSourceControlProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class sites_slots_virtualNetworkConnections
	extends ArmResource<sites_slots_virtualNetworkConnectionsComponentInputs>
	implements sites_slots_virtualNetworkConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_virtualNetworkConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/virtualNetworkConnections", "2015-08-01", options);
	}
	public readonly apiVersion: "2015-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/virtualNetworkConnections";
}
export interface sites_slots_virtualNetworkConnectionsComponentOutputs {
	readonly apiVersion: "2015-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/virtualNetworkConnections";
}
export interface sites_slots_virtualNetworkConnectionsComponentInputs {
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: VnetInfoProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class sites_slots_virtualNetworkConnections_gateways
	extends ArmResource<sites_slots_virtualNetworkConnections_gatewaysComponentInputs>
	implements sites_slots_virtualNetworkConnections_gatewaysComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_virtualNetworkConnections_gatewaysComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/virtualNetworkConnections/gateways", "2015-08-01", options);
	}
	public readonly apiVersion: "2015-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/virtualNetworkConnections/gateways";
}
export interface sites_slots_virtualNetworkConnections_gatewaysComponentOutputs {
	readonly apiVersion: "2015-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/virtualNetworkConnections/gateways";
}
export interface sites_slots_virtualNetworkConnections_gatewaysComponentInputs {
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: VnetGatewayProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class sites_sourcecontrols
	extends ArmResource<sites_sourcecontrolsComponentInputs>
	implements sites_sourcecontrolsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_sourcecontrolsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/sourcecontrols", "2015-08-01", options);
	}
	public readonly apiVersion: "2015-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/sourcecontrols";
}
export interface sites_sourcecontrolsComponentOutputs {
	readonly apiVersion: "2015-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/sourcecontrols";
}
export interface sites_sourcecontrolsComponentInputs {
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: SiteSourceControlProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class sites_virtualNetworkConnections
	extends ArmResource<sites_virtualNetworkConnectionsComponentInputs>
	implements sites_virtualNetworkConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_virtualNetworkConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/virtualNetworkConnections", "2015-08-01", options);
	}
	public readonly apiVersion: "2015-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/virtualNetworkConnections";
}
export interface sites_virtualNetworkConnectionsComponentOutputs {
	readonly apiVersion: "2015-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/virtualNetworkConnections";
}
export interface sites_virtualNetworkConnectionsComponentInputs {
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: VnetInfoProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class sites_virtualNetworkConnections_gateways
	extends ArmResource<sites_virtualNetworkConnections_gatewaysComponentInputs>
	implements sites_virtualNetworkConnections_gatewaysComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_virtualNetworkConnections_gatewaysComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/virtualNetworkConnections/gateways", "2015-08-01", options);
	}
	public readonly apiVersion: "2015-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/virtualNetworkConnections/gateways";
}
export interface sites_virtualNetworkConnections_gatewaysComponentOutputs {
	readonly apiVersion: "2015-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/virtualNetworkConnections/gateways";
}
export interface sites_virtualNetworkConnections_gatewaysComponentInputs {
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: VnetGatewayProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class sourcecontrols extends ArmResource<sourcecontrolsComponentInputs> implements sourcecontrolsComponentOutputs {
	constructor(entity: ADKEntity, options: sourcecontrolsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sourcecontrols", "2015-08-01", options);
	}
	public readonly apiVersion: "2015-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sourcecontrols";
}
export interface sourcecontrolsComponentOutputs {
	readonly apiVersion: "2015-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sourcecontrols";
}
export interface sourcecontrolsComponentInputs {
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: SourceControlProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export function list(resource: ArmResource): StringDictionary {
	if (resource.apiVersion !== "2015-08-01") {
		throw new Error(`list is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Web/sites/slots/config") {
		throw new Error(`list is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface ApiDefinitionInfo {
	readonly url?: string | undefined;
}
export interface ApplicationLogsConfig {
	readonly azureBlobStorage?: AzureBlobStorageApplicationLogsConfig | undefined;
	readonly azureTableStorage?: AzureTableStorageApplicationLogsConfig | undefined;
	readonly fileSystem?: FileSystemApplicationLogsConfig | undefined;
}
export interface ArmPlan {
	readonly name?: string | undefined;
	readonly product?: string | undefined;
	readonly promotionCode?: string | undefined;
	readonly publisher?: string | undefined;
	readonly version?: string | undefined;
}
export interface AutoHealActions {
	readonly actionType: "CustomAction" | "LogEvent";
	readonly customAction?: AutoHealCustomAction | undefined;
	readonly minProcessExecutionTime?: string | undefined;
}
export interface AutoHealCustomAction {
	readonly exe?: string | undefined;
	readonly parameters?: string | undefined;
}
export interface AutoHealRules {
	readonly actions?: AutoHealActions | undefined;
	readonly triggers?: AutoHealTriggers | undefined;
}
export interface AutoHealTriggers {
	readonly privateBytesInKB?: number | undefined;
	readonly requests?: RequestsBasedTrigger | undefined;
	readonly slowRequests?: SlowRequestsBasedTrigger | undefined;
	readonly statusCodes?: StatusCodesBasedTrigger[] | undefined;
}
export interface AzureBlobStorageApplicationLogsConfig {
	readonly level?: ("Error" | "Information" | "Off" | "Verbose") | undefined;
	readonly retentionInDays?: number | undefined;
	readonly sasUrl?: string | undefined;
}
export interface AzureBlobStorageHttpLogsConfig {
	readonly enabled?: boolean | undefined;
	readonly retentionInDays?: number | undefined;
	readonly sasUrl?: string | undefined;
}
export interface AzureTableStorageApplicationLogsConfig {
	readonly level?: ("Error" | "Information" | "Off" | "Verbose") | undefined;
	readonly sasUrl?: string | undefined;
}
export interface BackupItem {
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name?: string | undefined;
	readonly properties?: BackupItemProperties | undefined;
	readonly tags?: ResourceTags | undefined;
	readonly type?: string | undefined;
}
export interface BackupItemProperties {
	readonly blobName?: string | undefined;
	readonly correlationId?: string | undefined;
	readonly created?: string | undefined;
	readonly databases?: DatabaseBackupSetting[] | undefined;
	readonly finishedTimeStamp?: string | undefined;
	readonly id?: number | undefined;
	readonly lastRestoreTimeStamp?: string | undefined;
	readonly log?: string | undefined;
	readonly name?: string | undefined;
	readonly scheduled?: boolean | undefined;
	readonly sizeInBytes?: number | undefined;
	readonly status:
		| "Created"
		| "DeleteFailed"
		| "DeleteInProgress"
		| "Deleted"
		| "Failed"
		| "InProgress"
		| "PartiallySucceeded"
		| "Skipped"
		| "Succeeded";
	readonly storageAccountUrl?: string | undefined;
	readonly websiteSizeInBytes?: number | undefined;
}
export interface BackupRequest {
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name?: string | undefined;
	readonly properties?: BackupRequestProperties | undefined;
	readonly tags?: ResourceTags | undefined;
	readonly type?: string | undefined;
}
export interface BackupRequestProperties {
	readonly backupSchedule?: BackupSchedule | undefined;
	readonly databases?: DatabaseBackupSetting[] | undefined;
	readonly enabled?: boolean | undefined;
	readonly name?: string | undefined;
	readonly storageAccountUrl?: string | undefined;
	readonly type: "Clone" | "Default";
}
export interface BackupSchedule {
	readonly frequencyInterval?: number | undefined;
	readonly frequencyUnit: "Day";
	readonly keepAtLeastOneBackup?: boolean | undefined;
	readonly lastExecutionTime?: string | undefined;
	readonly retentionPeriodInDays?: number | undefined;
	readonly startTime?: string | undefined;
}
export interface CertificateProperties {
	readonly cerBlob?: string | undefined;
	readonly expirationDate?: string | undefined;
	readonly friendlyName?: string | undefined;
	readonly hostingEnvironmentProfile?: HostingEnvironmentProfile | undefined;
	readonly hostNames?: string[] | undefined;
	readonly issueDate?: string | undefined;
	readonly issuer?: string | undefined;
	readonly password?: string | undefined;
	readonly pfxBlob?: string | undefined;
	readonly publicKeyHash?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly siteName?: string | undefined;
	readonly subjectName?: string | undefined;
	readonly thumbprint?: string | undefined;
	readonly valid?: boolean | undefined;
}
export interface ClassicMobileServiceProperties {
	readonly name?: string | undefined;
}
export interface CloningInfo {
	readonly appSettingsOverrides?: CloningInfoAppSettingsOverrides | undefined;
	readonly cloneCustomHostNames?: boolean | undefined;
	readonly cloneSourceControl?: boolean | undefined;
	readonly configureLoadBalancing?: boolean | undefined;
	readonly correlationId?: string | undefined;
	readonly hostingEnvironment?: string | undefined;
	readonly overwrite?: boolean | undefined;
	readonly sourceWebAppId?: string | undefined;
	readonly trafficManagerProfileId?: string | undefined;
	readonly trafficManagerProfileName?: string | undefined;
}
export interface CloningInfoAppSettingsOverrides {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ConnectionStringDictionaryProperties {
	readonly "[ key: string ]"?: ConnStringValueTypePair | undefined;
}
export interface ConnStringInfo {
	readonly connectionString?: string | undefined;
	readonly name?: string | undefined;
	readonly type: "Custom" | "MySql" | "SQLAzure";
}
export interface ConnStringValueTypePair {
	readonly type: "Custom" | "MySql" | "SQLAzure";
	readonly value?: string | undefined;
}
export interface CorsSettings {
	readonly allowedOrigins?: string[] | undefined;
}
export interface CsrProperties {
	readonly csrString?: string | undefined;
	readonly distinguishedName?: string | undefined;
	readonly hostingEnvironment?: string | undefined;
	readonly name?: string | undefined;
	readonly password?: string | undefined;
	readonly pfxBlob?: string | undefined;
	readonly publicKeyHash?: string | undefined;
}
export interface DatabaseBackupSetting {
	readonly connectionString?: string | undefined;
	readonly connectionStringName?: string | undefined;
	readonly databaseType?: string | undefined;
	readonly name?: string | undefined;
}
export interface DeploymentProperties {
	readonly active?: boolean | undefined;
	readonly author?: string | undefined;
	readonly author_email?: string | undefined;
	readonly deployer?: string | undefined;
	readonly details?: string | undefined;
	readonly end_time?: string | undefined;
	readonly id?: string | undefined;
	readonly message?: string | undefined;
	readonly start_time?: string | undefined;
	readonly status?: number | undefined;
}
export interface EnabledConfig {
	readonly enabled?: boolean | undefined;
}
export interface Experiments {
	readonly rampUpRules?: RampUpRule[] | undefined;
}
export interface FileSystemApplicationLogsConfig {
	readonly level?: ("Error" | "Information" | "Off" | "Verbose") | undefined;
}
export interface FileSystemHttpLogsConfig {
	readonly enabled?: boolean | undefined;
	readonly retentionInDays?: number | undefined;
	readonly retentionInMb?: number | undefined;
}
export interface HandlerMapping {
	readonly arguments?: string | undefined;
	readonly extension?: string | undefined;
	readonly scriptProcessor?: string | undefined;
}
export interface HostingEnvironmentProfile {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly type?: string | undefined;
}
export interface HostingEnvironmentProperties {
	readonly allowedMultiSizes?: string | undefined;
	readonly allowedWorkerSizes?: string | undefined;
	readonly apiManagementAccountId?: string | undefined;
	readonly clusterSettings?: NameValuePair[] | undefined;
	readonly databaseEdition?: string | undefined;
	readonly databaseServiceObjective?: string | undefined;
	readonly dnsSuffix?: string | undefined;
	readonly environmentCapacities?: StampCapacity[] | undefined;
	readonly environmentIsHealthy?: boolean | undefined;
	readonly environmentStatus?: string | undefined;
	readonly internalLoadBalancingMode?: ("None" | "Publishing") | undefined;
	readonly ipsslAddressCount?: number | undefined;
	readonly lastAction?: string | undefined;
	readonly lastActionResult?: string | undefined;
	readonly location?: string | undefined;
	readonly maximumNumberOfMachines?: number | undefined;
	readonly multiRoleCount?: number | undefined;
	readonly multiSize?: string | undefined;
	readonly name?: string | undefined;
	readonly networkAccessControlList?: NetworkAccessControlEntry[] | undefined;
	readonly provisioningState?: ("Canceled" | "Deleting" | "Failed" | "InProgress") | undefined;
	readonly resourceGroup?: string | undefined;
	readonly status: "Deleting" | "Preparing" | "Ready";
	readonly subscriptionId?: string | undefined;
	readonly suspended?: boolean | undefined;
	readonly upgradeDomains?: number | undefined;
	readonly vipMappings?: VirtualIPMapping[] | undefined;
	readonly virtualNetwork?: VirtualNetworkProfile | undefined;
	readonly vnetName?: string | undefined;
	readonly vnetResourceGroupName?: string | undefined;
	readonly vnetSubnetName?: string | undefined;
	readonly workerPools?: WorkerPool[] | undefined;
}
export interface HostingEnvironmentPropertiesOrManagedHostingEnvironmentProperties {
	readonly allowedMultiSizes?: string | undefined;
	readonly allowedWorkerSizes?: string | undefined;
	readonly apiManagementAccount?: string | undefined;
	readonly apiManagementAccountId?: string | undefined;
	readonly clusterSettings?: NameValuePair[] | undefined;
	readonly databaseEdition?: string | undefined;
	readonly databaseServiceObjective?: string | undefined;
	readonly dnsSuffix?: string | undefined;
	readonly environmentCapacities?: StampCapacity[] | undefined;
	readonly environmentIsHealthy?: boolean | undefined;
	readonly environmentStatus?: string | undefined;
	readonly internalLoadBalancingMode?: ("None" | "Publishing") | undefined;
	readonly ipsslAddressCount?: number | undefined;
	readonly lastAction?: string | undefined;
	readonly lastActionResult?: string | undefined;
	readonly location?: string | undefined;
	readonly maximumNumberOfMachines?: number | undefined;
	readonly multiRoleCount?: number | undefined;
	readonly multiSize?: string | undefined;
	readonly name?: string | undefined;
	readonly networkAccessControlList?: NetworkAccessControlEntry[] | undefined;
	readonly provisioningState?: ("Canceled" | "Deleting" | "Failed" | "InProgress") | undefined;
	readonly resourceGroup?: string | undefined;
	readonly status: "Deleting" | "Preparing" | "Ready";
	readonly subscriptionId?: string | undefined;
	readonly suspended?: boolean | undefined;
	readonly upgradeDomains?: number | undefined;
	readonly vipMappings?: VirtualIPMapping[] | undefined;
	readonly virtualNetwork?: VirtualNetworkProfile | undefined;
	readonly vnetName?: string | undefined;
	readonly vnetResourceGroupName?: string | undefined;
	readonly vnetSubnetName?: string | undefined;
	readonly workerPools?: WorkerPool[] | undefined;
}
export interface HostNameBindingProperties {
	readonly azureResourceName?: string | undefined;
	readonly azureResourceType?: "TrafficManager" | undefined;
	readonly customHostNameDnsRecordType?: "A" | undefined;
	readonly domainId?: string | undefined;
	readonly hostNameType?: "Managed" | undefined;
	readonly name?: string | undefined;
	readonly siteName?: string | undefined;
}
export interface HostNameSslState {
	readonly name?: string | undefined;
	readonly sslState: "Disabled" | "IpBasedEnabled";
	readonly thumbprint?: string | undefined;
	readonly toUpdate?: boolean | undefined;
	readonly virtualIP?: string | undefined;
}
export interface HttpLogsConfig {
	readonly azureBlobStorage?: AzureBlobStorageHttpLogsConfig | undefined;
	readonly fileSystem?: FileSystemHttpLogsConfig | undefined;
}
export interface IpSecurityRestriction {
	readonly ipAddress?: string | undefined;
	readonly subnetMask?: string | undefined;
}
export interface NameValuePair {
	readonly name?: string | undefined;
	readonly value?: string | undefined;
}
export interface NetworkAccessControlEntry {
	readonly action?: "Deny" | undefined;
	readonly description?: string | undefined;
	readonly order?: number | undefined;
	readonly remoteSubnet?: string | undefined;
}
export interface NetworkFeaturesProperties {
	readonly hybridConnections?: RelayServiceConnectionEntity[] | undefined;
	readonly virtualNetworkConnection?: VnetInfo | undefined;
	readonly virtualNetworkName?: string | undefined;
}
export interface PremierAddOnRequestTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface RampUpRule {
	readonly actionHostName?: string | undefined;
	readonly changeDecisionCallbackUrl?: string | undefined;
	readonly changeIntervalInMinutes?: number | undefined;
	readonly changeStep?: number | undefined;
	readonly maxReroutePercentage?: number | undefined;
	readonly minReroutePercentage?: number | undefined;
	readonly name?: string | undefined;
	readonly reroutePercentage?: number | undefined;
}
export interface RelayServiceConnectionEntity {
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name?: string | undefined;
	readonly properties?: RelayServiceConnectionEntityProperties | undefined;
	readonly tags?: ResourceTags | undefined;
	readonly type?: string | undefined;
}
export interface RelayServiceConnectionEntityProperties {
	readonly biztalkUri?: string | undefined;
	readonly entityConnectionString?: string | undefined;
	readonly entityName?: string | undefined;
	readonly hostname?: string | undefined;
	readonly port?: number | undefined;
	readonly resourceConnectionString?: string | undefined;
	readonly resourceType?: string | undefined;
}
export interface RequestsBasedTrigger {
	readonly count?: number | undefined;
	readonly timeInterval?: string | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface RestoreRequestPropertiesOrBackupItemProperties {
	readonly adjustConnectionStrings?: boolean | undefined;
	readonly blobName?: string | undefined;
	readonly correlationId?: string | undefined;
	readonly created?: string | undefined;
	readonly databases?: DatabaseBackupSetting[] | undefined;
	readonly finishedTimeStamp?: string | undefined;
	readonly hostingEnvironment?: string | undefined;
	readonly id?: number | undefined;
	readonly ignoreConflictingHostNames?: boolean | undefined;
	readonly lastRestoreTimeStamp?: string | undefined;
	readonly log?: string | undefined;
	readonly name?: string | undefined;
	readonly operationType: "Clone" | "Default";
	readonly overwrite?: boolean | undefined;
	readonly scheduled?: boolean | undefined;
	readonly siteName?: string | undefined;
	readonly sizeInBytes?: number | undefined;
	readonly status?:
		| (
				| "Created"
				| "DeleteFailed"
				| "DeleteInProgress"
				| "Deleted"
				| "Failed"
				| "InProgress"
				| "PartiallySucceeded"
				| "Skipped"
				| "Succeeded"
		  )
		| undefined;
	readonly storageAccountUrl?: string | undefined;
	readonly websiteSizeInBytes?: number | undefined;
}
export interface ServerFarmWithRichSkuProperties {
	readonly adminSiteName?: string | undefined;
	readonly geoRegion?: string | undefined;
	readonly hostingEnvironmentProfile?: HostingEnvironmentProfile | undefined;
	readonly maximumNumberOfWorkers?: number | undefined;
	readonly name?: string | undefined;
	readonly numberOfSites?: number | undefined;
	readonly perSiteScaling?: boolean | undefined;
	readonly reserved?: boolean | undefined;
	readonly resourceGroup?: string | undefined;
	readonly status: "Pending";
	readonly subscription?: string | undefined;
	readonly workerTierName?: string | undefined;
}
export interface SiteConfig {
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name?: string | undefined;
	readonly properties?: SiteConfigProperties | undefined;
	readonly tags?: ResourceTags | undefined;
	readonly type?: string | undefined;
}
export interface SiteConfigProperties {
	readonly alwaysOn?: boolean | undefined;
	readonly apiDefinition?: ApiDefinitionInfo | undefined;
	readonly appCommandLine?: string | undefined;
	readonly appSettings?: NameValuePair[] | undefined;
	readonly autoHealEnabled?: boolean | undefined;
	readonly autoHealRules?: AutoHealRules | undefined;
	readonly autoSwapSlotName?: string | undefined;
	readonly connectionStrings?: ConnStringInfo[] | undefined;
	readonly cors?: CorsSettings | undefined;
	readonly defaultDocuments?: string[] | undefined;
	readonly detailedErrorLoggingEnabled?: boolean | undefined;
	readonly documentRoot?: string | undefined;
	readonly experiments?: Experiments | undefined;
	readonly handlerMappings?: HandlerMapping[] | undefined;
	readonly httpLoggingEnabled?: boolean | undefined;
	readonly ipSecurityRestrictions?: IpSecurityRestriction[] | undefined;
	readonly javaContainer?: string | undefined;
	readonly javaContainerVersion?: string | undefined;
	readonly javaVersion?: string | undefined;
	readonly limits?: SiteLimits | undefined;
	readonly loadBalancing?: ("LeastRequests" | "LeastResponseTime" | "RequestHash" | "WeightedRoundRobin") | undefined;
	readonly localMySqlEnabled?: boolean | undefined;
	readonly logsDirectorySizeLimit?: number | undefined;
	readonly managedPipelineMode?: "Classic" | undefined;
	readonly metadata?: NameValuePair[] | undefined;
	readonly netFrameworkVersion?: string | undefined;
	readonly nodeVersion?: string | undefined;
	readonly numberOfWorkers?: number | undefined;
	readonly phpVersion?: string | undefined;
	readonly publishingPassword?: string | undefined;
	readonly publishingUsername?: string | undefined;
	readonly pythonVersion?: string | undefined;
	readonly remoteDebuggingEnabled?: boolean | undefined;
	readonly remoteDebuggingVersion?: string | undefined;
	readonly requestTracingEnabled?: boolean | undefined;
	readonly requestTracingExpirationTime?: string | undefined;
	readonly scmType?: string | undefined;
	readonly tracingOptions?: string | undefined;
	readonly use32BitWorkerProcess?: boolean | undefined;
	readonly virtualApplications?: VirtualApplication[] | undefined;
	readonly vnetName?: string | undefined;
	readonly webSocketsEnabled?: boolean | undefined;
}
export interface SiteLimits {
	readonly maxDiskSizeInMb?: number | undefined;
	readonly maxMemoryInMb?: number | undefined;
	readonly maxPercentageCpu?: number | undefined;
}
export interface SiteLogsConfigProperties {
	readonly applicationLogs?: ApplicationLogsConfig | undefined;
	readonly detailedErrorMessages?: EnabledConfig | undefined;
	readonly failedRequestsTracing?: EnabledConfig | undefined;
	readonly httpLogs?: HttpLogsConfig | undefined;
}
export interface SiteProperties {
	readonly availabilityState: "DisasterRecoveryMode" | "Limited";
	readonly clientAffinityEnabled?: boolean | undefined;
	readonly clientCertEnabled?: boolean | undefined;
	readonly cloningInfo?: CloningInfo | undefined;
	readonly containerSize?: number | undefined;
	readonly defaultHostName?: string | undefined;
	readonly enabled?: boolean | undefined;
	readonly enabledHostNames?: string[] | undefined;
	readonly gatewaySiteName?: string | undefined;
	readonly hostingEnvironmentProfile?: HostingEnvironmentProfile | undefined;
	readonly hostNames?: string[] | undefined;
	readonly hostNamesDisabled?: boolean | undefined;
	readonly hostNameSslStates?: HostNameSslState[] | undefined;
	readonly isDefaultContainer?: boolean | undefined;
	readonly lastModifiedTimeUtc?: string | undefined;
	readonly maxNumberOfWorkers?: number | undefined;
	readonly microService?: string | undefined;
	readonly name?: string | undefined;
	readonly outboundIpAddresses?: string | undefined;
	readonly premiumAppDeployed?: boolean | undefined;
	readonly repositorySiteName?: string | undefined;
	readonly resourceGroup?: string | undefined;
	readonly scmSiteAlsoStopped?: boolean | undefined;
	readonly serverFarmId?: string | undefined;
	readonly siteConfig?: SiteConfig | undefined;
	readonly state?: string | undefined;
	readonly targetSwapSlot?: string | undefined;
	readonly trafficManagerHostNames?: string[] | undefined;
	readonly usageState: "Exceeded";
}
export interface SiteSourceControlProperties {
	readonly branch?: string | undefined;
	readonly deploymentRollbackEnabled?: boolean | undefined;
	readonly isManualIntegration?: boolean | undefined;
	readonly isMercurial?: boolean | undefined;
	readonly repoUrl?: string | undefined;
}
export interface SkuDescription {
	readonly capacity?: number | undefined;
	readonly family?: string | undefined;
	readonly name?: string | undefined;
	readonly size?: string | undefined;
	readonly tier?: string | undefined;
}
export interface SlotConfigNamesResourceProperties {
	readonly appSettingNames?: string[] | undefined;
	readonly connectionStringNames?: string[] | undefined;
}
export interface SlowRequestsBasedTrigger {
	readonly count?: number | undefined;
	readonly timeInterval?: string | undefined;
	readonly timeTaken?: string | undefined;
}
export interface SourceControlProperties {
	readonly expirationTime?: string | undefined;
	readonly name?: string | undefined;
	readonly refreshToken?: string | undefined;
	readonly token?: string | undefined;
	readonly tokenSecret?: string | undefined;
}
export interface StampCapacity {
	readonly availableCapacity?: number | undefined;
	readonly computeMode?: ("Dedicated" | "Dynamic") | undefined;
	readonly excludeFromCapacityAllocation?: boolean | undefined;
	readonly isApplicableForAllComputeModes?: boolean | undefined;
	readonly name?: string | undefined;
	readonly siteMode?: string | undefined;
	readonly totalCapacity?: number | undefined;
	readonly unit?: string | undefined;
	readonly workerSize?: ("Default" | "Large" | "Medium") | undefined;
	readonly workerSizeId?: number | undefined;
}
export interface StatusCodesBasedTrigger {
	readonly count?: number | undefined;
	readonly status?: number | undefined;
	readonly subStatus?: number | undefined;
	readonly timeInterval?: string | undefined;
	readonly win32Status?: number | undefined;
}
export interface StringDictionary {
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name?: string | undefined;
	readonly properties?: StringDictionaryProperties | undefined;
	readonly tags?: ResourceTags | undefined;
	readonly type?: string | undefined;
}
export interface StringDictionaryProperties {
	readonly "[ key: string ]"?: string | undefined;
}
export interface UserProperties {
	readonly name?: string | undefined;
	readonly publishingPassword?: string | undefined;
	readonly publishingUserName?: string | undefined;
	readonly scmUri?: string | undefined;
}
export interface VirtualApplication {
	readonly physicalPath?: string | undefined;
	readonly preloadEnabled?: boolean | undefined;
	readonly virtualDirectories?: VirtualDirectory[] | undefined;
	readonly virtualPath?: string | undefined;
}
export interface VirtualDirectory {
	readonly physicalPath?: string | undefined;
	readonly virtualPath?: string | undefined;
}
export interface VirtualIPMapping {
	readonly internalHttpPort?: number | undefined;
	readonly internalHttpsPort?: number | undefined;
	readonly inUse?: boolean | undefined;
	readonly virtualIP?: string | undefined;
}
export interface VirtualNetworkProfile {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly subnet?: string | undefined;
	readonly type?: string | undefined;
}
export interface VnetGatewayProperties {
	readonly vnetName?: string | undefined;
	readonly vpnPackageUri?: string | undefined;
}
export interface VnetInfo {
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name?: string | undefined;
	readonly properties?: VnetInfoProperties | undefined;
	readonly tags?: ResourceTags | undefined;
	readonly type?: string | undefined;
}
export interface VnetInfoProperties {
	readonly certBlob?: string | undefined;
	readonly certThumbprint?: string | undefined;
	readonly dnsServers?: string | undefined;
	readonly resyncRequired?: boolean | undefined;
	readonly routes?: VnetRoute[] | undefined;
	readonly vnetResourceId?: string | undefined;
}
export interface VnetRoute {
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name?: string | undefined;
	readonly properties?: VnetRouteProperties | undefined;
	readonly tags?: ResourceTags | undefined;
	readonly type?: string | undefined;
}
export interface VnetRouteProperties {
	readonly endAddress?: string | undefined;
	readonly name?: string | undefined;
	readonly routeType?: string | undefined;
	readonly startAddress?: string | undefined;
}
export interface WorkerPool {
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name?: string | undefined;
	readonly properties?: WorkerPoolProperties | undefined;
	readonly sku?: SkuDescription | undefined;
	readonly tags?: ResourceTags | undefined;
	readonly type?: string | undefined;
}
export interface WorkerPoolProperties {
	readonly computeMode?: ("Dedicated" | "Dynamic") | undefined;
	readonly instanceNames?: string[] | undefined;
	readonly workerCount?: number | undefined;
	readonly workerSize?: string | undefined;
	readonly workerSizeId?: number | undefined;
}
export type sites_config =
	| sites_config_appsettings
	| sites_config_authsettings
	| sites_config_backup
	| sites_config_connectionstrings
	| sites_config_logs
	| sites_config_metadata
	| sites_config_slotConfigNames
	| sites_config_web;
export type sites_slots_config =
	| sites_slots_config_appsettings
	| sites_slots_config_authsettings
	| sites_slots_config_backup
	| sites_slots_config_connectionstrings
	| sites_slots_config_logs
	| sites_slots_config_metadata
	| sites_slots_config_web;
export default {
	certificates: certificates,
	classicMobileServices: classicMobileServices,
	csrs: csrs,
	hostingEnvironments: hostingEnvironments,
	"hostingEnvironments/multiRolePools": hostingEnvironments_multiRolePools,
	"hostingEnvironments/workerPools": hostingEnvironments_workerPools,
	managedHostingEnvironments: managedHostingEnvironments,
	publishingUsers: publishingUsers,
	serverfarms: serverfarms,
	"serverfarms/operationresults": serverfarms_operationresults,
	"serverfarms/virtualNetworkConnections": serverfarms_virtualNetworkConnections,
	"serverfarms/virtualNetworkConnections/gateways": serverfarms_virtualNetworkConnections_gateways,
	"serverfarms/virtualNetworkConnections/routes": serverfarms_virtualNetworkConnections_routes,
	sites: sites,
	"sites/backups": sites_backups,
	"sites/config/appsettings": sites_config_appsettings,
	"sites/config/authsettings": sites_config_authsettings,
	"sites/config/backup": sites_config_backup,
	"sites/config/connectionstrings": sites_config_connectionstrings,
	"sites/config/logs": sites_config_logs,
	"sites/config/metadata": sites_config_metadata,
	"sites/config/slotConfigNames": sites_config_slotConfigNames,
	"sites/config/web": sites_config_web,
	"sites/deployments": sites_deployments,
	"sites/hostNameBindings": sites_hostNameBindings,
	"sites/hybridconnection": sites_hybridconnection,
	"sites/instances/deployments": sites_instances_deployments,
	"sites/networkFeatures": sites_networkFeatures,
	"sites/premieraddons": sites_premieraddons,
	"sites/slots": sites_slots,
	"sites/slots/backups": sites_slots_backups,
	"sites/slots/config/appsettings": sites_slots_config_appsettings,
	"sites/slots/config/authsettings": sites_slots_config_authsettings,
	"sites/slots/config/backup": sites_slots_config_backup,
	"sites/slots/config/connectionstrings": sites_slots_config_connectionstrings,
	"sites/slots/config/logs": sites_slots_config_logs,
	"sites/slots/config/metadata": sites_slots_config_metadata,
	"sites/slots/config/web": sites_slots_config_web,
	"sites/slots/deployments": sites_slots_deployments,
	"sites/slots/hostNameBindings": sites_slots_hostNameBindings,
	"sites/slots/hybridconnection": sites_slots_hybridconnection,
	"sites/slots/instances/deployments": sites_slots_instances_deployments,
	"sites/slots/networkFeatures": sites_slots_networkFeatures,
	"sites/slots/premieraddons": sites_slots_premieraddons,
	"sites/slots/sourcecontrols": sites_slots_sourcecontrols,
	"sites/slots/virtualNetworkConnections": sites_slots_virtualNetworkConnections,
	"sites/slots/virtualNetworkConnections/gateways": sites_slots_virtualNetworkConnections_gateways,
	"sites/sourcecontrols": sites_sourcecontrols,
	"sites/virtualNetworkConnections": sites_virtualNetworkConnections,
	"sites/virtualNetworkConnections/gateways": sites_virtualNetworkConnections_gateways,
	sourcecontrols: sourcecontrols,
};

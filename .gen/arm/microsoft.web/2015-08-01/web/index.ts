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
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: CertificateProperties;
	readonly tags?: ResourceTags;
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
	readonly kind?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: ClassicMobileServiceProperties;
	readonly tags?: ResourceTags;
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
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: CsrProperties;
	readonly tags?: ResourceTags;
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
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: HostingEnvironmentProperties;
	readonly tags?: ResourceTags;
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
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: WorkerPoolProperties;
	readonly sku?: SkuDescription;
	readonly tags?: ResourceTags;
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
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: WorkerPoolProperties;
	readonly sku?: SkuDescription;
	readonly tags?: ResourceTags;
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
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: HostingEnvironmentPropertiesOrManagedHostingEnvironmentProperties;
	readonly tags?: ResourceTags;
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
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: UserProperties;
	readonly tags?: ResourceTags;
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
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: ServerFarmWithRichSkuProperties;
	readonly sku?: SkuDescription;
	readonly tags?: ResourceTags;
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
	readonly kind?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: ServerFarmWithRichSkuProperties;
	readonly sku?: SkuDescription;
	readonly tags?: ResourceTags;
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
	readonly kind?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: VnetInfoProperties;
	readonly tags?: ResourceTags;
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
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: VnetGatewayProperties;
	readonly tags?: ResourceTags;
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
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: VnetRouteProperties;
	readonly tags?: ResourceTags;
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
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: SiteProperties;
	readonly tags?: ResourceTags;
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
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: RestoreRequestPropertiesOrBackupItemProperties;
	readonly tags?: ResourceTags;
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
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: StringDictionaryProperties;
	readonly tags?: ResourceTags;
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
	readonly aadClientId?: string;
	readonly additionalLoginParams?: string[];
	readonly allowedAudiences?: string[];
	readonly allowedExternalRedirectUrls?: string[];
	readonly clientId?: string;
	readonly clientSecret?: string;
	readonly defaultProvider?: "AzureActiveDirectory" | "Facebook" | "Google" | "MicrosoftAccount";
	readonly enabled?: boolean;
	readonly facebookAppId?: string;
	readonly facebookAppSecret?: string;
	readonly facebookOAuthScopes?: string[];
	readonly googleClientId?: string;
	readonly googleClientSecret?: string;
	readonly googleOAuthScopes?: string[];
	readonly httpApiPrefixPath?: string;
	readonly issuer?: string;
	readonly microsoftAccountClientId?: string;
	readonly microsoftAccountClientSecret?: string;
	readonly microsoftAccountOAuthScopes?: string[];
	readonly name: string;
	readonly openIdIssuer?: string;
	readonly tokenRefreshExtensionHours?: number;
	readonly tokenStoreEnabled?: boolean;
	readonly twitterConsumerKey?: string;
	readonly twitterConsumerSecret?: string;
	readonly unauthenticatedClientAction?: "AllowAnonymous";
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
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: BackupRequestProperties;
	readonly tags?: ResourceTags;
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
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: ConnectionStringDictionaryProperties;
	readonly tags?: ResourceTags;
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
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: SiteLogsConfigProperties;
	readonly tags?: ResourceTags;
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
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: StringDictionaryProperties;
	readonly tags?: ResourceTags;
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
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: SlotConfigNamesResourceProperties;
	readonly tags?: ResourceTags;
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
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: SiteConfigProperties;
	readonly tags?: ResourceTags;
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
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: DeploymentProperties;
	readonly tags?: ResourceTags;
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
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: HostNameBindingProperties;
	readonly tags?: ResourceTags;
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
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: RelayServiceConnectionEntityProperties;
	readonly tags?: ResourceTags;
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
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: DeploymentProperties;
	readonly tags?: ResourceTags;
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
	readonly kind?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: NetworkFeaturesProperties;
	readonly tags?: ResourceTags;
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
	readonly location?: string;
	readonly name: string;
	readonly plan?: ArmPlan;
	readonly properties?: any;
	readonly sku?: SkuDescription;
	readonly tags?: PremierAddOnRequestTags;
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
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: SiteProperties;
	readonly tags?: ResourceTags;
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
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: RestoreRequestPropertiesOrBackupItemProperties;
	readonly tags?: ResourceTags;
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
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: StringDictionaryProperties;
	readonly tags?: ResourceTags;
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
	readonly aadClientId?: string;
	readonly additionalLoginParams?: string[];
	readonly allowedAudiences?: string[];
	readonly allowedExternalRedirectUrls?: string[];
	readonly clientId?: string;
	readonly clientSecret?: string;
	readonly defaultProvider?: "AzureActiveDirectory" | "Facebook" | "Google" | "MicrosoftAccount";
	readonly enabled?: boolean;
	readonly facebookAppId?: string;
	readonly facebookAppSecret?: string;
	readonly facebookOAuthScopes?: string[];
	readonly googleClientId?: string;
	readonly googleClientSecret?: string;
	readonly googleOAuthScopes?: string[];
	readonly httpApiPrefixPath?: string;
	readonly issuer?: string;
	readonly microsoftAccountClientId?: string;
	readonly microsoftAccountClientSecret?: string;
	readonly microsoftAccountOAuthScopes?: string[];
	readonly name: string;
	readonly openIdIssuer?: string;
	readonly tokenRefreshExtensionHours?: number;
	readonly tokenStoreEnabled?: boolean;
	readonly twitterConsumerKey?: string;
	readonly twitterConsumerSecret?: string;
	readonly unauthenticatedClientAction?: "AllowAnonymous";
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
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: BackupRequestProperties;
	readonly tags?: ResourceTags;
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
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: ConnectionStringDictionaryProperties;
	readonly tags?: ResourceTags;
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
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: SiteLogsConfigProperties;
	readonly tags?: ResourceTags;
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
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: StringDictionaryProperties;
	readonly tags?: ResourceTags;
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
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: SiteConfigProperties;
	readonly tags?: ResourceTags;
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
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: DeploymentProperties;
	readonly tags?: ResourceTags;
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
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: HostNameBindingProperties;
	readonly tags?: ResourceTags;
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
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: RelayServiceConnectionEntityProperties;
	readonly tags?: ResourceTags;
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
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: DeploymentProperties;
	readonly tags?: ResourceTags;
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
	readonly kind?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: NetworkFeaturesProperties;
	readonly tags?: ResourceTags;
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
	readonly location?: string;
	readonly name: string;
	readonly plan?: ArmPlan;
	readonly properties?: any;
	readonly sku?: SkuDescription;
	readonly tags?: PremierAddOnRequestTags;
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
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: SiteSourceControlProperties;
	readonly tags?: ResourceTags;
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
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: VnetInfoProperties;
	readonly tags?: ResourceTags;
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
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: VnetGatewayProperties;
	readonly tags?: ResourceTags;
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
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: SiteSourceControlProperties;
	readonly tags?: ResourceTags;
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
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: VnetInfoProperties;
	readonly tags?: ResourceTags;
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
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: VnetGatewayProperties;
	readonly tags?: ResourceTags;
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
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: SourceControlProperties;
	readonly tags?: ResourceTags;
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
	readonly url?: string;
}
export interface ApplicationLogsConfig {
	readonly azureBlobStorage?: AzureBlobStorageApplicationLogsConfig;
	readonly azureTableStorage?: AzureTableStorageApplicationLogsConfig;
	readonly fileSystem?: FileSystemApplicationLogsConfig;
}
export interface ArmPlan {
	readonly name?: string;
	readonly product?: string;
	readonly promotionCode?: string;
	readonly publisher?: string;
	readonly version?: string;
}
export interface AutoHealActions {
	readonly actionType: "CustomAction" | "LogEvent";
	readonly customAction?: AutoHealCustomAction;
	readonly minProcessExecutionTime?: string;
}
export interface AutoHealCustomAction {
	readonly exe?: string;
	readonly parameters?: string;
}
export interface AutoHealRules {
	readonly actions?: AutoHealActions;
	readonly triggers?: AutoHealTriggers;
}
export interface AutoHealTriggers {
	readonly privateBytesInKB?: number;
	readonly requests?: RequestsBasedTrigger;
	readonly slowRequests?: SlowRequestsBasedTrigger;
	readonly statusCodes?: StatusCodesBasedTrigger[];
}
export interface AzureBlobStorageApplicationLogsConfig {
	readonly level?: "Error" | "Information" | "Off" | "Verbose";
	readonly retentionInDays?: number;
	readonly sasUrl?: string;
}
export interface AzureBlobStorageHttpLogsConfig {
	readonly enabled?: boolean;
	readonly retentionInDays?: number;
	readonly sasUrl?: string;
}
export interface AzureTableStorageApplicationLogsConfig {
	readonly level?: "Error" | "Information" | "Off" | "Verbose";
	readonly sasUrl?: string;
}
export interface BackupItem {
	readonly id?: string;
	readonly kind?: string;
	readonly location: string;
	readonly name?: string;
	readonly properties?: BackupItemProperties;
	readonly tags?: ResourceTags;
	readonly type?: string;
}
export interface BackupItemProperties {
	readonly blobName?: string;
	readonly correlationId?: string;
	readonly created?: string;
	readonly databases?: DatabaseBackupSetting[];
	readonly finishedTimeStamp?: string;
	readonly id?: number;
	readonly lastRestoreTimeStamp?: string;
	readonly log?: string;
	readonly name?: string;
	readonly scheduled?: boolean;
	readonly sizeInBytes?: number;
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
	readonly storageAccountUrl?: string;
	readonly websiteSizeInBytes?: number;
}
export interface BackupRequest {
	readonly id?: string;
	readonly kind?: string;
	readonly location: string;
	readonly name?: string;
	readonly properties?: BackupRequestProperties;
	readonly tags?: ResourceTags;
	readonly type?: string;
}
export interface BackupRequestProperties {
	readonly backupSchedule?: BackupSchedule;
	readonly databases?: DatabaseBackupSetting[];
	readonly enabled?: boolean;
	readonly name?: string;
	readonly storageAccountUrl?: string;
	readonly type: "Clone" | "Default";
}
export interface BackupSchedule {
	readonly frequencyInterval?: number;
	readonly frequencyUnit: "Day";
	readonly keepAtLeastOneBackup?: boolean;
	readonly lastExecutionTime?: string;
	readonly retentionPeriodInDays?: number;
	readonly startTime?: string;
}
export interface CertificateProperties {
	readonly cerBlob?: string;
	readonly expirationDate?: string;
	readonly friendlyName?: string;
	readonly hostingEnvironmentProfile?: HostingEnvironmentProfile;
	readonly hostNames?: string[];
	readonly issueDate?: string;
	readonly issuer?: string;
	readonly password?: string;
	readonly pfxBlob?: string;
	readonly publicKeyHash?: string;
	readonly selfLink?: string;
	readonly siteName?: string;
	readonly subjectName?: string;
	readonly thumbprint?: string;
	readonly valid?: boolean;
}
export interface ClassicMobileServiceProperties {
	readonly name?: string;
}
export interface CloningInfo {
	readonly appSettingsOverrides?: CloningInfoAppSettingsOverrides;
	readonly cloneCustomHostNames?: boolean;
	readonly cloneSourceControl?: boolean;
	readonly configureLoadBalancing?: boolean;
	readonly correlationId?: string;
	readonly hostingEnvironment?: string;
	readonly overwrite?: boolean;
	readonly sourceWebAppId?: string;
	readonly trafficManagerProfileId?: string;
	readonly trafficManagerProfileName?: string;
}
export interface CloningInfoAppSettingsOverrides {
	readonly [key: string]: string;
}
export interface ConnectionStringDictionaryProperties {
	readonly [key: string]: ConnStringValueTypePair;
}
export interface ConnStringInfo {
	readonly connectionString?: string;
	readonly name?: string;
	readonly type: "Custom" | "MySql" | "SQLAzure";
}
export interface ConnStringValueTypePair {
	readonly type: "Custom" | "MySql" | "SQLAzure";
	readonly value?: string;
}
export interface CorsSettings {
	readonly allowedOrigins?: string[];
}
export interface CsrProperties {
	readonly csrString?: string;
	readonly distinguishedName?: string;
	readonly hostingEnvironment?: string;
	readonly name?: string;
	readonly password?: string;
	readonly pfxBlob?: string;
	readonly publicKeyHash?: string;
}
export interface DatabaseBackupSetting {
	readonly connectionString?: string;
	readonly connectionStringName?: string;
	readonly databaseType?: string;
	readonly name?: string;
}
export interface DeploymentProperties {
	readonly active?: boolean;
	readonly author?: string;
	readonly author_email?: string;
	readonly deployer?: string;
	readonly details?: string;
	readonly end_time?: string;
	readonly id?: string;
	readonly message?: string;
	readonly start_time?: string;
	readonly status?: number;
}
export interface EnabledConfig {
	readonly enabled?: boolean;
}
export interface Experiments {
	readonly rampUpRules?: RampUpRule[];
}
export interface FileSystemApplicationLogsConfig {
	readonly level?: "Error" | "Information" | "Off" | "Verbose";
}
export interface FileSystemHttpLogsConfig {
	readonly enabled?: boolean;
	readonly retentionInDays?: number;
	readonly retentionInMb?: number;
}
export interface HandlerMapping {
	readonly arguments?: string;
	readonly extension?: string;
	readonly scriptProcessor?: string;
}
export interface HostingEnvironmentProfile {
	readonly id?: string;
	readonly name?: string;
	readonly type?: string;
}
export interface HostingEnvironmentProperties {
	readonly allowedMultiSizes?: string;
	readonly allowedWorkerSizes?: string;
	readonly apiManagementAccountId?: string;
	readonly clusterSettings?: NameValuePair[];
	readonly databaseEdition?: string;
	readonly databaseServiceObjective?: string;
	readonly dnsSuffix?: string;
	readonly environmentCapacities?: StampCapacity[];
	readonly environmentIsHealthy?: boolean;
	readonly environmentStatus?: string;
	readonly internalLoadBalancingMode?: "None" | "Publishing";
	readonly ipsslAddressCount?: number;
	readonly lastAction?: string;
	readonly lastActionResult?: string;
	readonly location?: string;
	readonly maximumNumberOfMachines?: number;
	readonly multiRoleCount?: number;
	readonly multiSize?: string;
	readonly name?: string;
	readonly networkAccessControlList?: NetworkAccessControlEntry[];
	readonly provisioningState?: "Canceled" | "Deleting" | "Failed" | "InProgress";
	readonly resourceGroup?: string;
	readonly status: "Deleting" | "Preparing" | "Ready";
	readonly subscriptionId?: string;
	readonly suspended?: boolean;
	readonly upgradeDomains?: number;
	readonly vipMappings?: VirtualIPMapping[];
	readonly virtualNetwork?: VirtualNetworkProfile;
	readonly vnetName?: string;
	readonly vnetResourceGroupName?: string;
	readonly vnetSubnetName?: string;
	readonly workerPools?: WorkerPool[];
}
export interface HostingEnvironmentPropertiesOrManagedHostingEnvironmentProperties {
	readonly allowedMultiSizes?: string;
	readonly allowedWorkerSizes?: string;
	readonly apiManagementAccount?: string;
	readonly apiManagementAccountId?: string;
	readonly clusterSettings?: NameValuePair[];
	readonly databaseEdition?: string;
	readonly databaseServiceObjective?: string;
	readonly dnsSuffix?: string;
	readonly environmentCapacities?: StampCapacity[];
	readonly environmentIsHealthy?: boolean;
	readonly environmentStatus?: string;
	readonly internalLoadBalancingMode?: "None" | "Publishing";
	readonly ipsslAddressCount?: number;
	readonly lastAction?: string;
	readonly lastActionResult?: string;
	readonly location?: string;
	readonly maximumNumberOfMachines?: number;
	readonly multiRoleCount?: number;
	readonly multiSize?: string;
	readonly name?: string;
	readonly networkAccessControlList?: NetworkAccessControlEntry[];
	readonly provisioningState?: "Canceled" | "Deleting" | "Failed" | "InProgress";
	readonly resourceGroup?: string;
	readonly status: "Deleting" | "Preparing" | "Ready";
	readonly subscriptionId?: string;
	readonly suspended?: boolean;
	readonly upgradeDomains?: number;
	readonly vipMappings?: VirtualIPMapping[];
	readonly virtualNetwork?: VirtualNetworkProfile;
	readonly vnetName?: string;
	readonly vnetResourceGroupName?: string;
	readonly vnetSubnetName?: string;
	readonly workerPools?: WorkerPool[];
}
export interface HostNameBindingProperties {
	readonly azureResourceName?: string;
	readonly azureResourceType?: "TrafficManager";
	readonly customHostNameDnsRecordType?: "A";
	readonly domainId?: string;
	readonly hostNameType?: "Managed";
	readonly name?: string;
	readonly siteName?: string;
}
export interface HostNameSslState {
	readonly name?: string;
	readonly sslState: "Disabled" | "IpBasedEnabled";
	readonly thumbprint?: string;
	readonly toUpdate?: boolean;
	readonly virtualIP?: string;
}
export interface HttpLogsConfig {
	readonly azureBlobStorage?: AzureBlobStorageHttpLogsConfig;
	readonly fileSystem?: FileSystemHttpLogsConfig;
}
export interface IpSecurityRestriction {
	readonly ipAddress?: string;
	readonly subnetMask?: string;
}
export interface NameValuePair {
	readonly name?: string;
	readonly value?: string;
}
export interface NetworkAccessControlEntry {
	readonly action?: "Deny";
	readonly description?: string;
	readonly order?: number;
	readonly remoteSubnet?: string;
}
export interface NetworkFeaturesProperties {
	readonly hybridConnections?: RelayServiceConnectionEntity[];
	readonly virtualNetworkConnection?: VnetInfo;
	readonly virtualNetworkName?: string;
}
export interface PremierAddOnRequestTags {
	readonly [key: string]: string;
}
export interface RampUpRule {
	readonly actionHostName?: string;
	readonly changeDecisionCallbackUrl?: string;
	readonly changeIntervalInMinutes?: number;
	readonly changeStep?: number;
	readonly maxReroutePercentage?: number;
	readonly minReroutePercentage?: number;
	readonly name?: string;
	readonly reroutePercentage?: number;
}
export interface RelayServiceConnectionEntity {
	readonly id?: string;
	readonly kind?: string;
	readonly location: string;
	readonly name?: string;
	readonly properties?: RelayServiceConnectionEntityProperties;
	readonly tags?: ResourceTags;
	readonly type?: string;
}
export interface RelayServiceConnectionEntityProperties {
	readonly biztalkUri?: string;
	readonly entityConnectionString?: string;
	readonly entityName?: string;
	readonly hostname?: string;
	readonly port?: number;
	readonly resourceConnectionString?: string;
	readonly resourceType?: string;
}
export interface RequestsBasedTrigger {
	readonly count?: number;
	readonly timeInterval?: string;
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface RestoreRequestPropertiesOrBackupItemProperties {
	readonly adjustConnectionStrings?: boolean;
	readonly blobName?: string;
	readonly correlationId?: string;
	readonly created?: string;
	readonly databases?: DatabaseBackupSetting[];
	readonly finishedTimeStamp?: string;
	readonly hostingEnvironment?: string;
	readonly id?: number;
	readonly ignoreConflictingHostNames?: boolean;
	readonly lastRestoreTimeStamp?: string;
	readonly log?: string;
	readonly name?: string;
	readonly operationType: "Clone" | "Default";
	readonly overwrite?: boolean;
	readonly scheduled?: boolean;
	readonly siteName?: string;
	readonly sizeInBytes?: number;
	readonly status?:
		| "Created"
		| "DeleteFailed"
		| "DeleteInProgress"
		| "Deleted"
		| "Failed"
		| "InProgress"
		| "PartiallySucceeded"
		| "Skipped"
		| "Succeeded";
	readonly storageAccountUrl?: string;
	readonly websiteSizeInBytes?: number;
}
export interface ServerFarmWithRichSkuProperties {
	readonly adminSiteName?: string;
	readonly geoRegion?: string;
	readonly hostingEnvironmentProfile?: HostingEnvironmentProfile;
	readonly maximumNumberOfWorkers?: number;
	readonly name?: string;
	readonly numberOfSites?: number;
	readonly perSiteScaling?: boolean;
	readonly reserved?: boolean;
	readonly resourceGroup?: string;
	readonly status: "Pending";
	readonly subscription?: string;
	readonly workerTierName?: string;
}
export interface SiteConfig {
	readonly id?: string;
	readonly kind?: string;
	readonly location: string;
	readonly name?: string;
	readonly properties?: SiteConfigProperties;
	readonly tags?: ResourceTags;
	readonly type?: string;
}
export interface SiteConfigProperties {
	readonly alwaysOn?: boolean;
	readonly apiDefinition?: ApiDefinitionInfo;
	readonly appCommandLine?: string;
	readonly appSettings?: NameValuePair[];
	readonly autoHealEnabled?: boolean;
	readonly autoHealRules?: AutoHealRules;
	readonly autoSwapSlotName?: string;
	readonly connectionStrings?: ConnStringInfo[];
	readonly cors?: CorsSettings;
	readonly defaultDocuments?: string[];
	readonly detailedErrorLoggingEnabled?: boolean;
	readonly documentRoot?: string;
	readonly experiments?: Experiments;
	readonly handlerMappings?: HandlerMapping[];
	readonly httpLoggingEnabled?: boolean;
	readonly ipSecurityRestrictions?: IpSecurityRestriction[];
	readonly javaContainer?: string;
	readonly javaContainerVersion?: string;
	readonly javaVersion?: string;
	readonly limits?: SiteLimits;
	readonly loadBalancing?: "LeastRequests" | "LeastResponseTime" | "RequestHash" | "WeightedRoundRobin";
	readonly localMySqlEnabled?: boolean;
	readonly logsDirectorySizeLimit?: number;
	readonly managedPipelineMode?: "Classic";
	readonly metadata?: NameValuePair[];
	readonly netFrameworkVersion?: string;
	readonly nodeVersion?: string;
	readonly numberOfWorkers?: number;
	readonly phpVersion?: string;
	readonly publishingPassword?: string;
	readonly publishingUsername?: string;
	readonly pythonVersion?: string;
	readonly remoteDebuggingEnabled?: boolean;
	readonly remoteDebuggingVersion?: string;
	readonly requestTracingEnabled?: boolean;
	readonly requestTracingExpirationTime?: string;
	readonly scmType?: string;
	readonly tracingOptions?: string;
	readonly use32BitWorkerProcess?: boolean;
	readonly virtualApplications?: VirtualApplication[];
	readonly vnetName?: string;
	readonly webSocketsEnabled?: boolean;
}
export interface SiteLimits {
	readonly maxDiskSizeInMb?: number;
	readonly maxMemoryInMb?: number;
	readonly maxPercentageCpu?: number;
}
export interface SiteLogsConfigProperties {
	readonly applicationLogs?: ApplicationLogsConfig;
	readonly detailedErrorMessages?: EnabledConfig;
	readonly failedRequestsTracing?: EnabledConfig;
	readonly httpLogs?: HttpLogsConfig;
}
export interface SiteProperties {
	readonly availabilityState: "DisasterRecoveryMode" | "Limited";
	readonly clientAffinityEnabled?: boolean;
	readonly clientCertEnabled?: boolean;
	readonly cloningInfo?: CloningInfo;
	readonly containerSize?: number;
	readonly defaultHostName?: string;
	readonly enabled?: boolean;
	readonly enabledHostNames?: string[];
	readonly gatewaySiteName?: string;
	readonly hostingEnvironmentProfile?: HostingEnvironmentProfile;
	readonly hostNames?: string[];
	readonly hostNamesDisabled?: boolean;
	readonly hostNameSslStates?: HostNameSslState[];
	readonly isDefaultContainer?: boolean;
	readonly lastModifiedTimeUtc?: string;
	readonly maxNumberOfWorkers?: number;
	readonly microService?: string;
	readonly name?: string;
	readonly outboundIpAddresses?: string;
	readonly premiumAppDeployed?: boolean;
	readonly repositorySiteName?: string;
	readonly resourceGroup?: string;
	readonly scmSiteAlsoStopped?: boolean;
	readonly serverFarmId?: string;
	readonly siteConfig?: SiteConfig;
	readonly state?: string;
	readonly targetSwapSlot?: string;
	readonly trafficManagerHostNames?: string[];
	readonly usageState: "Exceeded";
}
export interface SiteSourceControlProperties {
	readonly branch?: string;
	readonly deploymentRollbackEnabled?: boolean;
	readonly isManualIntegration?: boolean;
	readonly isMercurial?: boolean;
	readonly repoUrl?: string;
}
export interface SkuDescription {
	readonly capacity?: number;
	readonly family?: string;
	readonly name?: string;
	readonly size?: string;
	readonly tier?: string;
}
export interface SlotConfigNamesResourceProperties {
	readonly appSettingNames?: string[];
	readonly connectionStringNames?: string[];
}
export interface SlowRequestsBasedTrigger {
	readonly count?: number;
	readonly timeInterval?: string;
	readonly timeTaken?: string;
}
export interface SourceControlProperties {
	readonly expirationTime?: string;
	readonly name?: string;
	readonly refreshToken?: string;
	readonly token?: string;
	readonly tokenSecret?: string;
}
export interface StampCapacity {
	readonly availableCapacity?: number;
	readonly computeMode?: "Dedicated" | "Dynamic";
	readonly excludeFromCapacityAllocation?: boolean;
	readonly isApplicableForAllComputeModes?: boolean;
	readonly name?: string;
	readonly siteMode?: string;
	readonly totalCapacity?: number;
	readonly unit?: string;
	readonly workerSize?: "Default" | "Large" | "Medium";
	readonly workerSizeId?: number;
}
export interface StatusCodesBasedTrigger {
	readonly count?: number;
	readonly status?: number;
	readonly subStatus?: number;
	readonly timeInterval?: string;
	readonly win32Status?: number;
}
export interface StringDictionary {
	readonly id?: string;
	readonly kind?: string;
	readonly location: string;
	readonly name?: string;
	readonly properties?: StringDictionaryProperties;
	readonly tags?: ResourceTags;
	readonly type?: string;
}
export interface StringDictionaryProperties {
	readonly [key: string]: string;
}
export interface UserProperties {
	readonly name?: string;
	readonly publishingPassword?: string;
	readonly publishingUserName?: string;
	readonly scmUri?: string;
}
export interface VirtualApplication {
	readonly physicalPath?: string;
	readonly preloadEnabled?: boolean;
	readonly virtualDirectories?: VirtualDirectory[];
	readonly virtualPath?: string;
}
export interface VirtualDirectory {
	readonly physicalPath?: string;
	readonly virtualPath?: string;
}
export interface VirtualIPMapping {
	readonly internalHttpPort?: number;
	readonly internalHttpsPort?: number;
	readonly inUse?: boolean;
	readonly virtualIP?: string;
}
export interface VirtualNetworkProfile {
	readonly id?: string;
	readonly name?: string;
	readonly subnet?: string;
	readonly type?: string;
}
export interface VnetGatewayProperties {
	readonly vnetName?: string;
	readonly vpnPackageUri?: string;
}
export interface VnetInfo {
	readonly id?: string;
	readonly kind?: string;
	readonly location: string;
	readonly name?: string;
	readonly properties?: VnetInfoProperties;
	readonly tags?: ResourceTags;
	readonly type?: string;
}
export interface VnetInfoProperties {
	readonly certBlob?: string;
	readonly certThumbprint?: string;
	readonly dnsServers?: string;
	readonly resyncRequired?: boolean;
	readonly routes?: VnetRoute[];
	readonly vnetResourceId?: string;
}
export interface VnetRoute {
	readonly id?: string;
	readonly kind?: string;
	readonly location: string;
	readonly name?: string;
	readonly properties?: VnetRouteProperties;
	readonly tags?: ResourceTags;
	readonly type?: string;
}
export interface VnetRouteProperties {
	readonly endAddress?: string;
	readonly name?: string;
	readonly routeType?: string;
	readonly startAddress?: string;
}
export interface WorkerPool {
	readonly id?: string;
	readonly kind?: string;
	readonly location: string;
	readonly name?: string;
	readonly properties?: WorkerPoolProperties;
	readonly sku?: SkuDescription;
	readonly tags?: ResourceTags;
	readonly type?: string;
}
export interface WorkerPoolProperties {
	readonly computeMode?: "Dedicated" | "Dynamic";
	readonly instanceNames?: string[];
	readonly workerCount?: number;
	readonly workerSize?: string;
	readonly workerSizeId?: number;
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

import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class certificates extends ArmResource<certificatesComponentInputs> implements certificatesComponentOutputs {
	constructor(entity: ADKEntity, options: certificatesComponentInputs) {
		super(entity, options.name, "Microsoft.Web/certificates", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/certificates";
}
export interface certificatesComponentOutputs {
	readonly apiVersion: "2020-12-01";
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
export class deletedSites extends ArmResource<deletedSitesComponentInputs> implements deletedSitesComponentOutputs {
	constructor(entity: ADKEntity, options: deletedSitesComponentInputs) {
		super(entity, options.name, "Microsoft.Web/deletedSites", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/deletedSites";
}
export interface deletedSitesComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/deletedSites";
}
export interface deletedSitesComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: DeletedSiteProperties;
}
export class hostingEnvironments
	extends ArmResource<hostingEnvironmentsComponentInputs>
	implements hostingEnvironmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: hostingEnvironmentsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/hostingEnvironments", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/hostingEnvironments";
}
export interface hostingEnvironmentsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/hostingEnvironments";
}
export interface hostingEnvironmentsComponentInputs {
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: AppServiceEnvironment;
	readonly tags?: ResourceTags;
}
export class hostingEnvironments_capacities
	extends ArmResource<hostingEnvironments_capacitiesComponentInputs>
	implements hostingEnvironments_capacitiesComponentOutputs
{
	constructor(entity: ADKEntity, options: hostingEnvironments_capacitiesComponentInputs) {
		super(entity, options.name, "Microsoft.Web/hostingEnvironments/capacities", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/hostingEnvironments/capacities";
}
export interface hostingEnvironments_capacitiesComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/hostingEnvironments/capacities";
}
export interface hostingEnvironments_capacitiesComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: AddressResponseProperties;
}
export class hostingEnvironments_configurations
	extends ArmResource<hostingEnvironments_configurationsComponentInputs>
	implements hostingEnvironments_configurationsComponentOutputs
{
	constructor(entity: ADKEntity, options: hostingEnvironments_configurationsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/hostingEnvironments/configurations", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/hostingEnvironments/configurations";
}
export interface hostingEnvironments_configurationsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/hostingEnvironments/configurations";
}
export interface hostingEnvironments_configurationsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: AseV3NetworkingConfigurationProperties;
}
export class hostingEnvironments_detectors
	extends ArmResource<hostingEnvironments_detectorsComponentInputs>
	implements hostingEnvironments_detectorsComponentOutputs
{
	constructor(entity: ADKEntity, options: hostingEnvironments_detectorsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/hostingEnvironments/detectors", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/hostingEnvironments/detectors";
}
export interface hostingEnvironments_detectorsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/hostingEnvironments/detectors";
}
export interface hostingEnvironments_detectorsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: DetectorResponseProperties;
}
export class hostingEnvironments_multiRolePools
	extends ArmResource<hostingEnvironments_multiRolePoolsComponentInputs>
	implements hostingEnvironments_multiRolePoolsComponentOutputs
{
	constructor(entity: ADKEntity, options: hostingEnvironments_multiRolePoolsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/hostingEnvironments/multiRolePools", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/hostingEnvironments/multiRolePools";
}
export interface hostingEnvironments_multiRolePoolsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/hostingEnvironments/multiRolePools";
}
export interface hostingEnvironments_multiRolePoolsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: WorkerPool;
	readonly sku?: SkuDescription;
}
export class hostingEnvironments_privateEndpointConnections
	extends ArmResource<hostingEnvironments_privateEndpointConnectionsComponentInputs>
	implements hostingEnvironments_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: hostingEnvironments_privateEndpointConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/hostingEnvironments/privateEndpointConnections", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/hostingEnvironments/privateEndpointConnections";
}
export interface hostingEnvironments_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/hostingEnvironments/privateEndpointConnections";
}
export interface hostingEnvironments_privateEndpointConnectionsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: PrivateLinkConnectionApprovalRequestOrRemotePrivateEndpointConnectionARMResourceProperties;
}
export class hostingEnvironments_recommendations
	extends ArmResource<hostingEnvironments_recommendationsComponentInputs>
	implements hostingEnvironments_recommendationsComponentOutputs
{
	constructor(entity: ADKEntity, options: hostingEnvironments_recommendationsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/hostingEnvironments/recommendations", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/hostingEnvironments/recommendations";
}
export interface hostingEnvironments_recommendationsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/hostingEnvironments/recommendations";
}
export interface hostingEnvironments_recommendationsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: RecommendationRuleProperties;
}
export class hostingEnvironments_workerPools
	extends ArmResource<hostingEnvironments_workerPoolsComponentInputs>
	implements hostingEnvironments_workerPoolsComponentOutputs
{
	constructor(entity: ADKEntity, options: hostingEnvironments_workerPoolsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/hostingEnvironments/workerPools", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/hostingEnvironments/workerPools";
}
export interface hostingEnvironments_workerPoolsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/hostingEnvironments/workerPools";
}
export interface hostingEnvironments_workerPoolsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: WorkerPool;
	readonly sku?: SkuDescription;
}
export class locations_deletedSites
	extends ArmResource<locations_deletedSitesComponentInputs>
	implements locations_deletedSitesComponentOutputs
{
	constructor(entity: ADKEntity, options: locations_deletedSitesComponentInputs) {
		super(entity, options.name, "Microsoft.Web/locations/deletedSites", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/locations/deletedSites";
}
export interface locations_deletedSitesComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/locations/deletedSites";
}
export interface locations_deletedSitesComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: DeletedSiteProperties;
}
export class publishingUsers
	extends ArmResource<publishingUsersComponentInputs>
	implements publishingUsersComponentOutputs
{
	constructor(entity: ADKEntity, options: publishingUsersComponentInputs) {
		super(entity, options.name, "Microsoft.Web/publishingUsers", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/publishingUsers";
}
export interface publishingUsersComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/publishingUsers";
}
export interface publishingUsersComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: UserProperties;
}
export class serverfarms extends ArmResource<serverfarmsComponentInputs> implements serverfarmsComponentOutputs {
	constructor(entity: ADKEntity, options: serverfarmsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/serverfarms", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/serverfarms";
}
export interface serverfarmsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/serverfarms";
}
export interface serverfarmsComponentInputs {
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: AppServicePlanProperties;
	readonly sku?: SkuDescription;
	readonly tags?: ResourceTags;
}
export class serverfarms_hybridConnectionNamespaces_relays
	extends ArmResource<serverfarms_hybridConnectionNamespaces_relaysComponentInputs>
	implements serverfarms_hybridConnectionNamespaces_relaysComponentOutputs
{
	constructor(entity: ADKEntity, options: serverfarms_hybridConnectionNamespaces_relaysComponentInputs) {
		super(entity, options.name, "Microsoft.Web/serverfarms/hybridConnectionNamespaces/relays", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/serverfarms/hybridConnectionNamespaces/relays";
}
export interface serverfarms_hybridConnectionNamespaces_relaysComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/serverfarms/hybridConnectionNamespaces/relays";
}
export interface serverfarms_hybridConnectionNamespaces_relaysComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: HybridConnectionProperties;
}
export class serverfarms_hybridConnectionPlanLimits
	extends ArmResource<serverfarms_hybridConnectionPlanLimitsComponentInputs>
	implements serverfarms_hybridConnectionPlanLimitsComponentOutputs
{
	constructor(entity: ADKEntity, options: serverfarms_hybridConnectionPlanLimitsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/serverfarms/hybridConnectionPlanLimits", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/serverfarms/hybridConnectionPlanLimits";
}
export interface serverfarms_hybridConnectionPlanLimitsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/serverfarms/hybridConnectionPlanLimits";
}
export interface serverfarms_hybridConnectionPlanLimitsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: HybridConnectionLimitsProperties;
}
export class serverfarms_virtualNetworkConnections
	extends ArmResource<serverfarms_virtualNetworkConnectionsComponentInputs>
	implements serverfarms_virtualNetworkConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: serverfarms_virtualNetworkConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/serverfarms/virtualNetworkConnections", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/serverfarms/virtualNetworkConnections";
}
export interface serverfarms_virtualNetworkConnectionsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/serverfarms/virtualNetworkConnections";
}
export interface serverfarms_virtualNetworkConnectionsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: VnetInfoProperties;
}
export class serverfarms_virtualNetworkConnections_gateways
	extends ArmResource<serverfarms_virtualNetworkConnections_gatewaysComponentInputs>
	implements serverfarms_virtualNetworkConnections_gatewaysComponentOutputs
{
	constructor(entity: ADKEntity, options: serverfarms_virtualNetworkConnections_gatewaysComponentInputs) {
		super(entity, options.name, "Microsoft.Web/serverfarms/virtualNetworkConnections/gateways", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/serverfarms/virtualNetworkConnections/gateways";
}
export interface serverfarms_virtualNetworkConnections_gatewaysComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/serverfarms/virtualNetworkConnections/gateways";
}
export interface serverfarms_virtualNetworkConnections_gatewaysComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: VnetGatewayProperties;
}
export class serverfarms_virtualNetworkConnections_routes
	extends ArmResource<serverfarms_virtualNetworkConnections_routesComponentInputs>
	implements serverfarms_virtualNetworkConnections_routesComponentOutputs
{
	constructor(entity: ADKEntity, options: serverfarms_virtualNetworkConnections_routesComponentInputs) {
		super(entity, options.name, "Microsoft.Web/serverfarms/virtualNetworkConnections/routes", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/serverfarms/virtualNetworkConnections/routes";
}
export interface serverfarms_virtualNetworkConnections_routesComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/serverfarms/virtualNetworkConnections/routes";
}
export interface serverfarms_virtualNetworkConnections_routesComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: VnetRouteProperties;
}
export class sites extends ArmResource<sitesComponentInputs> implements sitesComponentOutputs {
	constructor(entity: ADKEntity, options: sitesComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites";
}
export interface sitesComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites";
}
export interface sitesComponentInputs {
	readonly identity?: ManagedServiceIdentity;
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: SiteProperties;
	readonly tags?: ResourceTags;
}
export class sites_backups extends ArmResource<sites_backupsComponentInputs> implements sites_backupsComponentOutputs {
	constructor(entity: ADKEntity, options: sites_backupsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/backups", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/backups";
}
export interface sites_backupsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/backups";
}
export interface sites_backupsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: BackupItemProperties;
}
export class sites_basicPublishingCredentialsPolicies_ftp
	extends ArmResource<sites_basicPublishingCredentialsPolicies_ftpComponentInputs>
	implements sites_basicPublishingCredentialsPolicies_ftpComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_basicPublishingCredentialsPolicies_ftpComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/basicPublishingCredentialsPolicies", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/basicPublishingCredentialsPolicies";
}
export interface sites_basicPublishingCredentialsPolicies_ftpComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/basicPublishingCredentialsPolicies";
}
export interface sites_basicPublishingCredentialsPolicies_ftpComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: CsmPublishingCredentialsPoliciesEntityProperties;
}
export class sites_basicPublishingCredentialsPolicies_scm
	extends ArmResource<sites_basicPublishingCredentialsPolicies_scmComponentInputs>
	implements sites_basicPublishingCredentialsPolicies_scmComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_basicPublishingCredentialsPolicies_scmComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/basicPublishingCredentialsPolicies", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/basicPublishingCredentialsPolicies";
}
export interface sites_basicPublishingCredentialsPolicies_scmComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/basicPublishingCredentialsPolicies";
}
export interface sites_basicPublishingCredentialsPolicies_scmComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: CsmPublishingCredentialsPoliciesEntityProperties;
}
export class sites_config_appsettings
	extends ArmResource<sites_config_appsettingsComponentInputs>
	implements sites_config_appsettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_config_appsettingsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/config", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_appsettingsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_appsettingsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: StringDictionaryProperties;
}
export class sites_config_authsettings
	extends ArmResource<sites_config_authsettingsComponentInputs>
	implements sites_config_authsettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_config_authsettingsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/config", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_authsettingsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_authsettingsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: SiteAuthSettingsProperties;
}
export class sites_config_authsettingsV2
	extends ArmResource<sites_config_authsettingsV2ComponentInputs>
	implements sites_config_authsettingsV2ComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_config_authsettingsV2ComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/config", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_authsettingsV2ComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_authsettingsV2ComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: SiteAuthSettingsV2Properties;
}
export class sites_config_azurestorageaccounts
	extends ArmResource<sites_config_azurestorageaccountsComponentInputs>
	implements sites_config_azurestorageaccountsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_config_azurestorageaccountsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/config", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_azurestorageaccountsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_azurestorageaccountsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: AzureStoragePropertyDictionaryResourceProperties;
}
export class sites_config_backup
	extends ArmResource<sites_config_backupComponentInputs>
	implements sites_config_backupComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_config_backupComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/config", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_backupComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_backupComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: BackupRequestProperties;
}
export class sites_config_connectionstrings
	extends ArmResource<sites_config_connectionstringsComponentInputs>
	implements sites_config_connectionstringsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_config_connectionstringsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/config", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_connectionstringsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_connectionstringsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: ConnectionStringDictionaryProperties;
}
export class sites_config_logs
	extends ArmResource<sites_config_logsComponentInputs>
	implements sites_config_logsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_config_logsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/config", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_logsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_logsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: SiteLogsConfigProperties;
}
export class sites_config_metadata
	extends ArmResource<sites_config_metadataComponentInputs>
	implements sites_config_metadataComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_config_metadataComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/config", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_metadataComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_metadataComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: StringDictionaryProperties;
}
export class sites_config_pushsettings
	extends ArmResource<sites_config_pushsettingsComponentInputs>
	implements sites_config_pushsettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_config_pushsettingsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/config", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_pushsettingsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_pushsettingsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: PushSettingsProperties;
}
export class sites_config_slotConfigNames
	extends ArmResource<sites_config_slotConfigNamesComponentInputs>
	implements sites_config_slotConfigNamesComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_config_slotConfigNamesComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/config", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_slotConfigNamesComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_slotConfigNamesComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: SlotConfigNames;
}
export class sites_config_web
	extends ArmResource<sites_config_webComponentInputs>
	implements sites_config_webComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_config_webComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/config", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_webComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_webComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: SiteConfig;
}
export class sites_config_snapshots
	extends ArmResource<sites_config_snapshotsComponentInputs>
	implements sites_config_snapshotsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_config_snapshotsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/config/snapshots", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/config/snapshots";
}
export interface sites_config_snapshotsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/config/snapshots";
}
export interface sites_config_snapshotsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: SiteConfig;
}
export class sites_continuouswebjobs
	extends ArmResource<sites_continuouswebjobsComponentInputs>
	implements sites_continuouswebjobsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_continuouswebjobsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/continuouswebjobs", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/continuouswebjobs";
}
export interface sites_continuouswebjobsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/continuouswebjobs";
}
export interface sites_continuouswebjobsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: ContinuousWebJobProperties;
}
export class sites_deployments
	extends ArmResource<sites_deploymentsComponentInputs>
	implements sites_deploymentsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_deploymentsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/deployments", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/deployments";
}
export interface sites_deploymentsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/deployments";
}
export interface sites_deploymentsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: DeploymentProperties;
}
export class sites_detectors
	extends ArmResource<sites_detectorsComponentInputs>
	implements sites_detectorsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_detectorsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/detectors", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/detectors";
}
export interface sites_detectorsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/detectors";
}
export interface sites_detectorsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: DetectorResponseProperties;
}
export class sites_diagnostics
	extends ArmResource<sites_diagnosticsComponentInputs>
	implements sites_diagnosticsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_diagnosticsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/diagnostics", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/diagnostics";
}
export interface sites_diagnosticsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/diagnostics";
}
export interface sites_diagnosticsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: DiagnosticCategoryProperties;
}
export class sites_diagnostics_analyses
	extends ArmResource<sites_diagnostics_analysesComponentInputs>
	implements sites_diagnostics_analysesComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_diagnostics_analysesComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/diagnostics/analyses", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/diagnostics/analyses";
}
export interface sites_diagnostics_analysesComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/diagnostics/analyses";
}
export interface sites_diagnostics_analysesComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: AnalysisDefinitionProperties;
}
export class sites_diagnostics_detectors
	extends ArmResource<sites_diagnostics_detectorsComponentInputs>
	implements sites_diagnostics_detectorsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_diagnostics_detectorsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/diagnostics/detectors", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/diagnostics/detectors";
}
export interface sites_diagnostics_detectorsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/diagnostics/detectors";
}
export interface sites_diagnostics_detectorsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: DetectorDefinitionProperties;
}
export class sites_domainOwnershipIdentifiers
	extends ArmResource<sites_domainOwnershipIdentifiersComponentInputs>
	implements sites_domainOwnershipIdentifiersComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_domainOwnershipIdentifiersComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/domainOwnershipIdentifiers", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/domainOwnershipIdentifiers";
}
export interface sites_domainOwnershipIdentifiersComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/domainOwnershipIdentifiers";
}
export interface sites_domainOwnershipIdentifiersComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: IdentifierProperties;
}
export class sites_extensions
	extends ArmResource<sites_extensionsComponentInputs>
	implements sites_extensionsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_extensionsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/extensions", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/extensions";
}
export interface sites_extensionsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/extensions";
}
export interface sites_extensionsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: MSDeployCoreOrMSDeployStatusProperties;
}
export class sites_functions
	extends ArmResource<sites_functionsComponentInputs>
	implements sites_functionsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_functionsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/functions", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/functions";
}
export interface sites_functionsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/functions";
}
export interface sites_functionsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: FunctionEnvelopeProperties;
}
export class sites_functions_keys
	extends ArmResource<sites_functions_keysComponentInputs>
	implements sites_functions_keysComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_functions_keysComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/functions/keys", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/functions/keys";
}
export interface sites_functions_keysComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/functions/keys";
}
export interface sites_functions_keysComponentInputs {
	readonly name: string;
	readonly value?: string;
}
export class sites_hostNameBindings
	extends ArmResource<sites_hostNameBindingsComponentInputs>
	implements sites_hostNameBindingsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_hostNameBindingsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/hostNameBindings", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/hostNameBindings";
}
export interface sites_hostNameBindingsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/hostNameBindings";
}
export interface sites_hostNameBindingsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: HostNameBindingProperties;
}
export class sites_hybridconnection
	extends ArmResource<sites_hybridconnectionComponentInputs>
	implements sites_hybridconnectionComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_hybridconnectionComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/hybridconnection", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/hybridconnection";
}
export interface sites_hybridconnectionComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/hybridconnection";
}
export interface sites_hybridconnectionComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: RelayServiceConnectionEntityProperties;
}
export class sites_hybridConnectionNamespaces_relays
	extends ArmResource<sites_hybridConnectionNamespaces_relaysComponentInputs>
	implements sites_hybridConnectionNamespaces_relaysComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_hybridConnectionNamespaces_relaysComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/hybridConnectionNamespaces/relays", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/hybridConnectionNamespaces/relays";
}
export interface sites_hybridConnectionNamespaces_relaysComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/hybridConnectionNamespaces/relays";
}
export interface sites_hybridConnectionNamespaces_relaysComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: HybridConnectionProperties;
}
export class sites_instances
	extends ArmResource<sites_instancesComponentInputs>
	implements sites_instancesComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_instancesComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/instances", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/instances";
}
export interface sites_instancesComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/instances";
}
export interface sites_instancesComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: WebSiteInstanceStatusProperties;
}
export class sites_instances_extensions
	extends ArmResource<sites_instances_extensionsComponentInputs>
	implements sites_instances_extensionsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_instances_extensionsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/instances/extensions", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/instances/extensions";
}
export interface sites_instances_extensionsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/instances/extensions";
}
export interface sites_instances_extensionsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: MSDeployCoreOrMSDeployStatusProperties;
}
export class sites_instances_processes
	extends ArmResource<sites_instances_processesComponentInputs>
	implements sites_instances_processesComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_instances_processesComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/instances/processes", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/instances/processes";
}
export interface sites_instances_processesComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/instances/processes";
}
export interface sites_instances_processesComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: ProcessInfoProperties;
}
export class sites_instances_processes_modules
	extends ArmResource<sites_instances_processes_modulesComponentInputs>
	implements sites_instances_processes_modulesComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_instances_processes_modulesComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/instances/processes/modules", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/instances/processes/modules";
}
export interface sites_instances_processes_modulesComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/instances/processes/modules";
}
export interface sites_instances_processes_modulesComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: ProcessModuleInfoProperties;
}
export class sites_migratemysql
	extends ArmResource<sites_migratemysqlComponentInputs>
	implements sites_migratemysqlComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_migratemysqlComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/migratemysql", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/migratemysql";
}
export interface sites_migratemysqlComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/migratemysql";
}
export interface sites_migratemysqlComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: MigrateMySqlStatusProperties;
}
export class sites_networkConfig
	extends ArmResource<sites_networkConfigComponentInputs>
	implements sites_networkConfigComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_networkConfigComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/networkConfig", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/networkConfig";
}
export interface sites_networkConfigComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/networkConfig";
}
export interface sites_networkConfigComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: SwiftVirtualNetworkProperties;
}
export class sites_networkFeatures
	extends ArmResource<sites_networkFeaturesComponentInputs>
	implements sites_networkFeaturesComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_networkFeaturesComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/networkFeatures", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/networkFeatures";
}
export interface sites_networkFeaturesComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/networkFeatures";
}
export interface sites_networkFeaturesComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: NetworkFeaturesProperties;
}
export class sites_premieraddons
	extends ArmResource<sites_premieraddonsComponentInputs>
	implements sites_premieraddonsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_premieraddonsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/premieraddons", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/premieraddons";
}
export interface sites_premieraddonsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/premieraddons";
}
export interface sites_premieraddonsComponentInputs {
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: PremierAddOnProperties;
	readonly tags?: ResourceTags;
}
export class sites_privateAccess
	extends ArmResource<sites_privateAccessComponentInputs>
	implements sites_privateAccessComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_privateAccessComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/privateAccess", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/privateAccess";
}
export interface sites_privateAccessComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/privateAccess";
}
export interface sites_privateAccessComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: PrivateAccessProperties;
}
export class sites_privateEndpointConnections
	extends ArmResource<sites_privateEndpointConnectionsComponentInputs>
	implements sites_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_privateEndpointConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/privateEndpointConnections", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/privateEndpointConnections";
}
export interface sites_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/privateEndpointConnections";
}
export interface sites_privateEndpointConnectionsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: PrivateLinkConnectionApprovalRequestOrRemotePrivateEndpointConnectionARMResourceProperties;
}
export class sites_processes
	extends ArmResource<sites_processesComponentInputs>
	implements sites_processesComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_processesComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/processes", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/processes";
}
export interface sites_processesComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/processes";
}
export interface sites_processesComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: ProcessInfoProperties;
}
export class sites_processes_modules
	extends ArmResource<sites_processes_modulesComponentInputs>
	implements sites_processes_modulesComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_processes_modulesComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/processes/modules", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/processes/modules";
}
export interface sites_processes_modulesComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/processes/modules";
}
export interface sites_processes_modulesComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: ProcessModuleInfoProperties;
}
export class sites_publicCertificates
	extends ArmResource<sites_publicCertificatesComponentInputs>
	implements sites_publicCertificatesComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_publicCertificatesComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/publicCertificates", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/publicCertificates";
}
export interface sites_publicCertificatesComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/publicCertificates";
}
export interface sites_publicCertificatesComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: PublicCertificateProperties;
}
export class sites_recommendations
	extends ArmResource<sites_recommendationsComponentInputs>
	implements sites_recommendationsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_recommendationsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/recommendations", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/recommendations";
}
export interface sites_recommendationsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/recommendations";
}
export interface sites_recommendationsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: RecommendationRuleProperties;
}
export class sites_resourceHealthMetadata
	extends ArmResource<sites_resourceHealthMetadataComponentInputs>
	implements sites_resourceHealthMetadataComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_resourceHealthMetadataComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/resourceHealthMetadata", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/resourceHealthMetadata";
}
export interface sites_resourceHealthMetadataComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/resourceHealthMetadata";
}
export interface sites_resourceHealthMetadataComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: ResourceHealthMetadataProperties;
}
export class sites_siteextensions
	extends ArmResource<sites_siteextensionsComponentInputs>
	implements sites_siteextensionsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_siteextensionsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/siteextensions", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/siteextensions";
}
export interface sites_siteextensionsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/siteextensions";
}
export interface sites_siteextensionsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: SiteExtensionInfoProperties;
}
export class sites_slots extends ArmResource<sites_slotsComponentInputs> implements sites_slotsComponentOutputs {
	constructor(entity: ADKEntity, options: sites_slotsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots";
}
export interface sites_slotsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots";
}
export interface sites_slotsComponentInputs {
	readonly identity?: ManagedServiceIdentity;
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
		super(entity, options.name, "Microsoft.Web/sites/slots/backups", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/backups";
}
export interface sites_slots_backupsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/backups";
}
export interface sites_slots_backupsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: BackupItemProperties;
}
export class sites_slots_basicPublishingCredentialsPolicies_ftp
	extends ArmResource<sites_slots_basicPublishingCredentialsPolicies_ftpComponentInputs>
	implements sites_slots_basicPublishingCredentialsPolicies_ftpComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_basicPublishingCredentialsPolicies_ftpComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/basicPublishingCredentialsPolicies", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/basicPublishingCredentialsPolicies";
}
export interface sites_slots_basicPublishingCredentialsPolicies_ftpComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/basicPublishingCredentialsPolicies";
}
export interface sites_slots_basicPublishingCredentialsPolicies_ftpComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: CsmPublishingCredentialsPoliciesEntityProperties;
}
export class sites_slots_basicPublishingCredentialsPolicies_scm
	extends ArmResource<sites_slots_basicPublishingCredentialsPolicies_scmComponentInputs>
	implements sites_slots_basicPublishingCredentialsPolicies_scmComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_basicPublishingCredentialsPolicies_scmComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/basicPublishingCredentialsPolicies", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/basicPublishingCredentialsPolicies";
}
export interface sites_slots_basicPublishingCredentialsPolicies_scmComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/basicPublishingCredentialsPolicies";
}
export interface sites_slots_basicPublishingCredentialsPolicies_scmComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: CsmPublishingCredentialsPoliciesEntityProperties;
}
export class sites_slots_config_appsettings
	extends ArmResource<sites_slots_config_appsettingsComponentInputs>
	implements sites_slots_config_appsettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_config_appsettingsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/config", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/config";
}
export interface sites_slots_config_appsettingsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/config";
}
export interface sites_slots_config_appsettingsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: StringDictionaryProperties;
}
export class sites_slots_config_authsettings
	extends ArmResource<sites_slots_config_authsettingsComponentInputs>
	implements sites_slots_config_authsettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_config_authsettingsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/config", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/config";
}
export interface sites_slots_config_authsettingsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/config";
}
export interface sites_slots_config_authsettingsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: SiteAuthSettingsProperties;
}
export class sites_slots_config_authsettingsV2
	extends ArmResource<sites_slots_config_authsettingsV2ComponentInputs>
	implements sites_slots_config_authsettingsV2ComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_config_authsettingsV2ComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/config", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/config";
}
export interface sites_slots_config_authsettingsV2ComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/config";
}
export interface sites_slots_config_authsettingsV2ComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: SiteAuthSettingsV2Properties;
}
export class sites_slots_config_azurestorageaccounts
	extends ArmResource<sites_slots_config_azurestorageaccountsComponentInputs>
	implements sites_slots_config_azurestorageaccountsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_config_azurestorageaccountsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/config", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/config";
}
export interface sites_slots_config_azurestorageaccountsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/config";
}
export interface sites_slots_config_azurestorageaccountsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: AzureStoragePropertyDictionaryResourceProperties;
}
export class sites_slots_config_backup
	extends ArmResource<sites_slots_config_backupComponentInputs>
	implements sites_slots_config_backupComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_config_backupComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/config", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/config";
}
export interface sites_slots_config_backupComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/config";
}
export interface sites_slots_config_backupComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: BackupRequestProperties;
}
export class sites_slots_config_connectionstrings
	extends ArmResource<sites_slots_config_connectionstringsComponentInputs>
	implements sites_slots_config_connectionstringsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_config_connectionstringsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/config", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/config";
}
export interface sites_slots_config_connectionstringsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/config";
}
export interface sites_slots_config_connectionstringsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: ConnectionStringDictionaryProperties;
}
export class sites_slots_config_logs
	extends ArmResource<sites_slots_config_logsComponentInputs>
	implements sites_slots_config_logsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_config_logsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/config", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/config";
}
export interface sites_slots_config_logsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/config";
}
export interface sites_slots_config_logsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: SiteLogsConfigProperties;
}
export class sites_slots_config_metadata
	extends ArmResource<sites_slots_config_metadataComponentInputs>
	implements sites_slots_config_metadataComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_config_metadataComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/config", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/config";
}
export interface sites_slots_config_metadataComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/config";
}
export interface sites_slots_config_metadataComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: StringDictionaryProperties;
}
export class sites_slots_config_pushsettings
	extends ArmResource<sites_slots_config_pushsettingsComponentInputs>
	implements sites_slots_config_pushsettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_config_pushsettingsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/config", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/config";
}
export interface sites_slots_config_pushsettingsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/config";
}
export interface sites_slots_config_pushsettingsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: PushSettingsProperties;
}
export class sites_slots_config_web
	extends ArmResource<sites_slots_config_webComponentInputs>
	implements sites_slots_config_webComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_config_webComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/config", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/config";
}
export interface sites_slots_config_webComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/config";
}
export interface sites_slots_config_webComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: SiteConfig;
}
export class sites_slots_config_snapshots
	extends ArmResource<sites_slots_config_snapshotsComponentInputs>
	implements sites_slots_config_snapshotsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_config_snapshotsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/config/snapshots", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/config/snapshots";
}
export interface sites_slots_config_snapshotsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/config/snapshots";
}
export interface sites_slots_config_snapshotsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: SiteConfig;
}
export class sites_slots_continuouswebjobs
	extends ArmResource<sites_slots_continuouswebjobsComponentInputs>
	implements sites_slots_continuouswebjobsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_continuouswebjobsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/continuouswebjobs", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/continuouswebjobs";
}
export interface sites_slots_continuouswebjobsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/continuouswebjobs";
}
export interface sites_slots_continuouswebjobsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: ContinuousWebJobProperties;
}
export class sites_slots_deployments
	extends ArmResource<sites_slots_deploymentsComponentInputs>
	implements sites_slots_deploymentsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_deploymentsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/deployments", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/deployments";
}
export interface sites_slots_deploymentsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/deployments";
}
export interface sites_slots_deploymentsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: DeploymentProperties;
}
export class sites_slots_detectors
	extends ArmResource<sites_slots_detectorsComponentInputs>
	implements sites_slots_detectorsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_detectorsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/detectors", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/detectors";
}
export interface sites_slots_detectorsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/detectors";
}
export interface sites_slots_detectorsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: DetectorResponseProperties;
}
export class sites_slots_diagnostics
	extends ArmResource<sites_slots_diagnosticsComponentInputs>
	implements sites_slots_diagnosticsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_diagnosticsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/diagnostics", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/diagnostics";
}
export interface sites_slots_diagnosticsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/diagnostics";
}
export interface sites_slots_diagnosticsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: DiagnosticCategoryProperties;
}
export class sites_slots_diagnostics_analyses
	extends ArmResource<sites_slots_diagnostics_analysesComponentInputs>
	implements sites_slots_diagnostics_analysesComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_diagnostics_analysesComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/diagnostics/analyses", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/diagnostics/analyses";
}
export interface sites_slots_diagnostics_analysesComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/diagnostics/analyses";
}
export interface sites_slots_diagnostics_analysesComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: AnalysisDefinitionProperties;
}
export class sites_slots_diagnostics_detectors
	extends ArmResource<sites_slots_diagnostics_detectorsComponentInputs>
	implements sites_slots_diagnostics_detectorsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_diagnostics_detectorsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/diagnostics/detectors", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/diagnostics/detectors";
}
export interface sites_slots_diagnostics_detectorsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/diagnostics/detectors";
}
export interface sites_slots_diagnostics_detectorsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: DetectorDefinitionProperties;
}
export class sites_slots_domainOwnershipIdentifiers
	extends ArmResource<sites_slots_domainOwnershipIdentifiersComponentInputs>
	implements sites_slots_domainOwnershipIdentifiersComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_domainOwnershipIdentifiersComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/domainOwnershipIdentifiers", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/domainOwnershipIdentifiers";
}
export interface sites_slots_domainOwnershipIdentifiersComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/domainOwnershipIdentifiers";
}
export interface sites_slots_domainOwnershipIdentifiersComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: IdentifierProperties;
}
export class sites_slots_extensions
	extends ArmResource<sites_slots_extensionsComponentInputs>
	implements sites_slots_extensionsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_extensionsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/extensions", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/extensions";
}
export interface sites_slots_extensionsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/extensions";
}
export interface sites_slots_extensionsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: MSDeployCoreOrMSDeployStatusProperties;
}
export class sites_slots_functions
	extends ArmResource<sites_slots_functionsComponentInputs>
	implements sites_slots_functionsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_functionsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/functions", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/functions";
}
export interface sites_slots_functionsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/functions";
}
export interface sites_slots_functionsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: FunctionEnvelopeProperties;
}
export class sites_slots_functions_keys
	extends ArmResource<sites_slots_functions_keysComponentInputs>
	implements sites_slots_functions_keysComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_functions_keysComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/functions/keys", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/functions/keys";
}
export interface sites_slots_functions_keysComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/functions/keys";
}
export interface sites_slots_functions_keysComponentInputs {
	readonly name: string;
	readonly value?: string;
}
export class sites_slots_hostNameBindings
	extends ArmResource<sites_slots_hostNameBindingsComponentInputs>
	implements sites_slots_hostNameBindingsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_hostNameBindingsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/hostNameBindings", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/hostNameBindings";
}
export interface sites_slots_hostNameBindingsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/hostNameBindings";
}
export interface sites_slots_hostNameBindingsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: HostNameBindingProperties;
}
export class sites_slots_hybridconnection
	extends ArmResource<sites_slots_hybridconnectionComponentInputs>
	implements sites_slots_hybridconnectionComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_hybridconnectionComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/hybridconnection", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/hybridconnection";
}
export interface sites_slots_hybridconnectionComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/hybridconnection";
}
export interface sites_slots_hybridconnectionComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: RelayServiceConnectionEntityProperties;
}
export class sites_slots_hybridConnectionNamespaces_relays
	extends ArmResource<sites_slots_hybridConnectionNamespaces_relaysComponentInputs>
	implements sites_slots_hybridConnectionNamespaces_relaysComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_hybridConnectionNamespaces_relaysComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/hybridConnectionNamespaces/relays", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/hybridConnectionNamespaces/relays";
}
export interface sites_slots_hybridConnectionNamespaces_relaysComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/hybridConnectionNamespaces/relays";
}
export interface sites_slots_hybridConnectionNamespaces_relaysComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: HybridConnectionProperties;
}
export class sites_slots_instances
	extends ArmResource<sites_slots_instancesComponentInputs>
	implements sites_slots_instancesComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_instancesComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/instances", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/instances";
}
export interface sites_slots_instancesComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/instances";
}
export interface sites_slots_instancesComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: WebSiteInstanceStatusProperties;
}
export class sites_slots_instances_extensions
	extends ArmResource<sites_slots_instances_extensionsComponentInputs>
	implements sites_slots_instances_extensionsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_instances_extensionsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/instances/extensions", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/instances/extensions";
}
export interface sites_slots_instances_extensionsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/instances/extensions";
}
export interface sites_slots_instances_extensionsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: MSDeployCoreOrMSDeployStatusProperties;
}
export class sites_slots_instances_processes
	extends ArmResource<sites_slots_instances_processesComponentInputs>
	implements sites_slots_instances_processesComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_instances_processesComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/instances/processes", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/instances/processes";
}
export interface sites_slots_instances_processesComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/instances/processes";
}
export interface sites_slots_instances_processesComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: ProcessInfoProperties;
}
export class sites_slots_instances_processes_modules
	extends ArmResource<sites_slots_instances_processes_modulesComponentInputs>
	implements sites_slots_instances_processes_modulesComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_instances_processes_modulesComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/instances/processes/modules", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/instances/processes/modules";
}
export interface sites_slots_instances_processes_modulesComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/instances/processes/modules";
}
export interface sites_slots_instances_processes_modulesComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: ProcessModuleInfoProperties;
}
export class sites_slots_migratemysql
	extends ArmResource<sites_slots_migratemysqlComponentInputs>
	implements sites_slots_migratemysqlComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_migratemysqlComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/migratemysql", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/migratemysql";
}
export interface sites_slots_migratemysqlComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/migratemysql";
}
export interface sites_slots_migratemysqlComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: MigrateMySqlStatusProperties;
}
export class sites_slots_networkConfig
	extends ArmResource<sites_slots_networkConfigComponentInputs>
	implements sites_slots_networkConfigComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_networkConfigComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/networkConfig", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/networkConfig";
}
export interface sites_slots_networkConfigComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/networkConfig";
}
export interface sites_slots_networkConfigComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: SwiftVirtualNetworkProperties;
}
export class sites_slots_networkFeatures
	extends ArmResource<sites_slots_networkFeaturesComponentInputs>
	implements sites_slots_networkFeaturesComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_networkFeaturesComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/networkFeatures", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/networkFeatures";
}
export interface sites_slots_networkFeaturesComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/networkFeatures";
}
export interface sites_slots_networkFeaturesComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: NetworkFeaturesProperties;
}
export class sites_slots_premieraddons
	extends ArmResource<sites_slots_premieraddonsComponentInputs>
	implements sites_slots_premieraddonsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_premieraddonsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/premieraddons", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/premieraddons";
}
export interface sites_slots_premieraddonsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/premieraddons";
}
export interface sites_slots_premieraddonsComponentInputs {
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: PremierAddOnProperties;
	readonly tags?: ResourceTags;
}
export class sites_slots_privateAccess
	extends ArmResource<sites_slots_privateAccessComponentInputs>
	implements sites_slots_privateAccessComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_privateAccessComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/privateAccess", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/privateAccess";
}
export interface sites_slots_privateAccessComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/privateAccess";
}
export interface sites_slots_privateAccessComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: PrivateAccessProperties;
}
export class sites_slots_privateEndpointConnections
	extends ArmResource<sites_slots_privateEndpointConnectionsComponentInputs>
	implements sites_slots_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_privateEndpointConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/privateEndpointConnections", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/privateEndpointConnections";
}
export interface sites_slots_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/privateEndpointConnections";
}
export interface sites_slots_privateEndpointConnectionsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: PrivateLinkConnectionApprovalRequestOrRemotePrivateEndpointConnectionARMResourceProperties;
}
export class sites_slots_processes
	extends ArmResource<sites_slots_processesComponentInputs>
	implements sites_slots_processesComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_processesComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/processes", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/processes";
}
export interface sites_slots_processesComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/processes";
}
export interface sites_slots_processesComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: ProcessInfoProperties;
}
export class sites_slots_processes_modules
	extends ArmResource<sites_slots_processes_modulesComponentInputs>
	implements sites_slots_processes_modulesComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_processes_modulesComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/processes/modules", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/processes/modules";
}
export interface sites_slots_processes_modulesComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/processes/modules";
}
export interface sites_slots_processes_modulesComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: ProcessModuleInfoProperties;
}
export class sites_slots_publicCertificates
	extends ArmResource<sites_slots_publicCertificatesComponentInputs>
	implements sites_slots_publicCertificatesComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_publicCertificatesComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/publicCertificates", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/publicCertificates";
}
export interface sites_slots_publicCertificatesComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/publicCertificates";
}
export interface sites_slots_publicCertificatesComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: PublicCertificateProperties;
}
export class sites_slots_resourceHealthMetadata
	extends ArmResource<sites_slots_resourceHealthMetadataComponentInputs>
	implements sites_slots_resourceHealthMetadataComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_resourceHealthMetadataComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/resourceHealthMetadata", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/resourceHealthMetadata";
}
export interface sites_slots_resourceHealthMetadataComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/resourceHealthMetadata";
}
export interface sites_slots_resourceHealthMetadataComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: ResourceHealthMetadataProperties;
}
export class sites_slots_siteextensions
	extends ArmResource<sites_slots_siteextensionsComponentInputs>
	implements sites_slots_siteextensionsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_siteextensionsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/siteextensions", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/siteextensions";
}
export interface sites_slots_siteextensionsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/siteextensions";
}
export interface sites_slots_siteextensionsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: SiteExtensionInfoProperties;
}
export class sites_slots_sourcecontrols
	extends ArmResource<sites_slots_sourcecontrolsComponentInputs>
	implements sites_slots_sourcecontrolsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_sourcecontrolsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/sourcecontrols", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/sourcecontrols";
}
export interface sites_slots_sourcecontrolsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/sourcecontrols";
}
export interface sites_slots_sourcecontrolsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: SiteSourceControlProperties;
}
export class sites_slots_triggeredwebjobs
	extends ArmResource<sites_slots_triggeredwebjobsComponentInputs>
	implements sites_slots_triggeredwebjobsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_triggeredwebjobsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/triggeredwebjobs", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/triggeredwebjobs";
}
export interface sites_slots_triggeredwebjobsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/triggeredwebjobs";
}
export interface sites_slots_triggeredwebjobsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: TriggeredWebJobProperties;
}
export class sites_slots_triggeredwebjobs_history
	extends ArmResource<sites_slots_triggeredwebjobs_historyComponentInputs>
	implements sites_slots_triggeredwebjobs_historyComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_triggeredwebjobs_historyComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/triggeredwebjobs/history", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/triggeredwebjobs/history";
}
export interface sites_slots_triggeredwebjobs_historyComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/triggeredwebjobs/history";
}
export interface sites_slots_triggeredwebjobs_historyComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: TriggeredJobHistoryProperties;
}
export class sites_slots_virtualNetworkConnections
	extends ArmResource<sites_slots_virtualNetworkConnectionsComponentInputs>
	implements sites_slots_virtualNetworkConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_virtualNetworkConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/virtualNetworkConnections", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/virtualNetworkConnections";
}
export interface sites_slots_virtualNetworkConnectionsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/virtualNetworkConnections";
}
export interface sites_slots_virtualNetworkConnectionsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: VnetInfoProperties;
}
export class sites_slots_virtualNetworkConnections_gateways
	extends ArmResource<sites_slots_virtualNetworkConnections_gatewaysComponentInputs>
	implements sites_slots_virtualNetworkConnections_gatewaysComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_virtualNetworkConnections_gatewaysComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/virtualNetworkConnections/gateways", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/virtualNetworkConnections/gateways";
}
export interface sites_slots_virtualNetworkConnections_gatewaysComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/virtualNetworkConnections/gateways";
}
export interface sites_slots_virtualNetworkConnections_gatewaysComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: VnetGatewayProperties;
}
export class sites_slots_webjobs
	extends ArmResource<sites_slots_webjobsComponentInputs>
	implements sites_slots_webjobsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_webjobsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/webjobs", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/webjobs";
}
export interface sites_slots_webjobsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/webjobs";
}
export interface sites_slots_webjobsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: WebJobProperties;
}
export class sites_sourcecontrols
	extends ArmResource<sites_sourcecontrolsComponentInputs>
	implements sites_sourcecontrolsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_sourcecontrolsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/sourcecontrols", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/sourcecontrols";
}
export interface sites_sourcecontrolsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/sourcecontrols";
}
export interface sites_sourcecontrolsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: SiteSourceControlProperties;
}
export class sites_triggeredwebjobs
	extends ArmResource<sites_triggeredwebjobsComponentInputs>
	implements sites_triggeredwebjobsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_triggeredwebjobsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/triggeredwebjobs", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/triggeredwebjobs";
}
export interface sites_triggeredwebjobsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/triggeredwebjobs";
}
export interface sites_triggeredwebjobsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: TriggeredWebJobProperties;
}
export class sites_triggeredwebjobs_history
	extends ArmResource<sites_triggeredwebjobs_historyComponentInputs>
	implements sites_triggeredwebjobs_historyComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_triggeredwebjobs_historyComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/triggeredwebjobs/history", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/triggeredwebjobs/history";
}
export interface sites_triggeredwebjobs_historyComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/triggeredwebjobs/history";
}
export interface sites_triggeredwebjobs_historyComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: TriggeredJobHistoryProperties;
}
export class sites_virtualNetworkConnections
	extends ArmResource<sites_virtualNetworkConnectionsComponentInputs>
	implements sites_virtualNetworkConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_virtualNetworkConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/virtualNetworkConnections", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/virtualNetworkConnections";
}
export interface sites_virtualNetworkConnectionsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/virtualNetworkConnections";
}
export interface sites_virtualNetworkConnectionsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: VnetInfoProperties;
}
export class sites_virtualNetworkConnections_gateways
	extends ArmResource<sites_virtualNetworkConnections_gatewaysComponentInputs>
	implements sites_virtualNetworkConnections_gatewaysComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_virtualNetworkConnections_gatewaysComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/virtualNetworkConnections/gateways", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/virtualNetworkConnections/gateways";
}
export interface sites_virtualNetworkConnections_gatewaysComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/virtualNetworkConnections/gateways";
}
export interface sites_virtualNetworkConnections_gatewaysComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: VnetGatewayProperties;
}
export class sites_webjobs extends ArmResource<sites_webjobsComponentInputs> implements sites_webjobsComponentOutputs {
	constructor(entity: ADKEntity, options: sites_webjobsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/webjobs", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/webjobs";
}
export interface sites_webjobsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/webjobs";
}
export interface sites_webjobsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: WebJobProperties;
}
export class sourcecontrols extends ArmResource<sourcecontrolsComponentInputs> implements sourcecontrolsComponentOutputs {
	constructor(entity: ADKEntity, options: sourcecontrolsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sourcecontrols", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sourcecontrols";
}
export interface sourcecontrolsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sourcecontrols";
}
export interface sourcecontrolsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: SourceControlProperties;
}
export class staticSites extends ArmResource<staticSitesComponentInputs> implements staticSitesComponentOutputs {
	constructor(entity: ADKEntity, options: staticSitesComponentInputs) {
		super(entity, options.name, "Microsoft.Web/staticSites", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/staticSites";
}
export interface staticSitesComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/staticSites";
}
export interface staticSitesComponentInputs {
	readonly identity?: ManagedServiceIdentity;
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: StaticSite;
	readonly sku?: SkuDescription;
	readonly tags?: ResourceTags;
}
export class staticSites_builds
	extends ArmResource<staticSites_buildsComponentInputs>
	implements staticSites_buildsComponentOutputs
{
	constructor(entity: ADKEntity, options: staticSites_buildsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/staticSites/builds", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/staticSites/builds";
}
export interface staticSites_buildsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/staticSites/builds";
}
export interface staticSites_buildsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: StaticSiteBuildARMResourceProperties;
}
export class staticSites_builds_config_appsettings
	extends ArmResource<staticSites_builds_config_appsettingsComponentInputs>
	implements staticSites_builds_config_appsettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: staticSites_builds_config_appsettingsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/staticSites/builds/config", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/staticSites/builds/config";
}
export interface staticSites_builds_config_appsettingsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/staticSites/builds/config";
}
export interface staticSites_builds_config_appsettingsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: StringDictionaryProperties;
}
export class staticSites_builds_config_functionappsettings
	extends ArmResource<staticSites_builds_config_functionappsettingsComponentInputs>
	implements staticSites_builds_config_functionappsettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: staticSites_builds_config_functionappsettingsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/staticSites/builds/config", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/staticSites/builds/config";
}
export interface staticSites_builds_config_functionappsettingsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/staticSites/builds/config";
}
export interface staticSites_builds_config_functionappsettingsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: StringDictionaryProperties;
}
export class staticSites_builds_userProvidedFunctionApps
	extends ArmResource<staticSites_builds_userProvidedFunctionAppsComponentInputs>
	implements staticSites_builds_userProvidedFunctionAppsComponentOutputs
{
	constructor(entity: ADKEntity, options: staticSites_builds_userProvidedFunctionAppsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/staticSites/builds/userProvidedFunctionApps", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/staticSites/builds/userProvidedFunctionApps";
}
export interface staticSites_builds_userProvidedFunctionAppsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/staticSites/builds/userProvidedFunctionApps";
}
export interface staticSites_builds_userProvidedFunctionAppsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: StaticSiteUserProvidedFunctionAppARMResourceProperties;
}
export class staticSites_config_appsettings
	extends ArmResource<staticSites_config_appsettingsComponentInputs>
	implements staticSites_config_appsettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: staticSites_config_appsettingsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/staticSites/config", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/staticSites/config";
}
export interface staticSites_config_appsettingsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/staticSites/config";
}
export interface staticSites_config_appsettingsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: StringDictionaryProperties;
}
export class staticSites_config_functionappsettings
	extends ArmResource<staticSites_config_functionappsettingsComponentInputs>
	implements staticSites_config_functionappsettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: staticSites_config_functionappsettingsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/staticSites/config", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/staticSites/config";
}
export interface staticSites_config_functionappsettingsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/staticSites/config";
}
export interface staticSites_config_functionappsettingsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: StringDictionaryProperties;
}
export class staticSites_customDomains
	extends ArmResource<staticSites_customDomainsComponentInputs>
	implements staticSites_customDomainsComponentOutputs
{
	constructor(entity: ADKEntity, options: staticSites_customDomainsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/staticSites/customDomains", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/staticSites/customDomains";
}
export interface staticSites_customDomainsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/staticSites/customDomains";
}
export interface staticSites_customDomainsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: StaticSiteCustomDomainRequestPropertiesARMResourcePropertiesOrStaticSiteCustomDomainOverviewARMResourceProperties;
}
export class staticSites_privateEndpointConnections
	extends ArmResource<staticSites_privateEndpointConnectionsComponentInputs>
	implements staticSites_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: staticSites_privateEndpointConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/staticSites/privateEndpointConnections", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/staticSites/privateEndpointConnections";
}
export interface staticSites_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/staticSites/privateEndpointConnections";
}
export interface staticSites_privateEndpointConnectionsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: PrivateLinkConnectionApprovalRequestOrRemotePrivateEndpointConnectionARMResourceProperties;
}
export class staticSites_userProvidedFunctionApps
	extends ArmResource<staticSites_userProvidedFunctionAppsComponentInputs>
	implements staticSites_userProvidedFunctionAppsComponentOutputs
{
	constructor(entity: ADKEntity, options: staticSites_userProvidedFunctionAppsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/staticSites/userProvidedFunctionApps", "2020-12-01", options);
	}
	public readonly apiVersion: "2020-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/staticSites/userProvidedFunctionApps";
}
export interface staticSites_userProvidedFunctionAppsComponentOutputs {
	readonly apiVersion: "2020-12-01";
	readonly id: string;
	readonly type: "Microsoft.Web/staticSites/userProvidedFunctionApps";
}
export interface staticSites_userProvidedFunctionAppsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: StaticSiteUserProvidedFunctionAppARMResourceProperties;
}
export function list(resource: sites_backups, input: BackupRequest): BackupItem {
	if (resource.apiVersion !== "2020-12-01") {
		throw new Error(`list is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Web/sites/backups") {
		throw new Error(`list is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listAppSettings(resource: staticSites_builds): StringDictionary {
	if (resource.apiVersion !== "2020-12-01") {
		throw new Error(`listAppSettings is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Web/staticSites/builds") {
		throw new Error(`listAppSettings is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listbackups(resource: sites): BackupItemCollection {
	if (resource.apiVersion !== "2020-12-01") {
		throw new Error(`listbackups is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Web/sites") {
		throw new Error(`listbackups is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listConfiguredRoles(resource: staticSites): StringList {
	if (resource.apiVersion !== "2020-12-01") {
		throw new Error(`listConfiguredRoles is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Web/staticSites") {
		throw new Error(`listConfiguredRoles is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listFunctionAppSettings(resource: staticSites_builds): StringDictionary {
	if (resource.apiVersion !== "2020-12-01") {
		throw new Error(`listFunctionAppSettings is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Web/staticSites/builds") {
		throw new Error(`listFunctionAppSettings is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listkeys(resource: sites_functions): StringDictionary {
	if (resource.apiVersion !== "2020-12-01") {
		throw new Error(`listkeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Web/sites/functions") {
		throw new Error(`listkeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listKeys(resource: serverfarms_hybridConnectionNamespaces_relays): HybridConnectionKey {
	if (resource.apiVersion !== "2020-12-01") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Web/serverfarms/hybridConnectionNamespaces/relays") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listsecrets(resource: sites_functions): FunctionSecrets {
	if (resource.apiVersion !== "2020-12-01") {
		throw new Error(`listsecrets is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Web/sites/functions") {
		throw new Error(`listsecrets is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listSecrets(resource: staticSites): StringDictionary {
	if (resource.apiVersion !== "2020-12-01") {
		throw new Error(`listSecrets is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Web/staticSites") {
		throw new Error(`listSecrets is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listsyncfunctiontriggerstatus(resource: sites): FunctionSecrets {
	if (resource.apiVersion !== "2020-12-01") {
		throw new Error(`listsyncfunctiontriggerstatus is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Web/sites") {
		throw new Error(`listsyncfunctiontriggerstatus is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listUsers(resource: ArmResource): StaticSiteUserCollection {
	if (resource.apiVersion !== "2020-12-01") {
		throw new Error(`listUsers is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Web/staticSites/authproviders") {
		throw new Error(`listUsers is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AddressResponseProperties {
	readonly internalIpAddress?: string;
	readonly outboundIpAddresses?: string[];
	readonly serviceIpAddress?: string;
	readonly vipMappings?: VirtualIPMapping[];
}
export interface AllowedAudiencesValidation {
	readonly allowedAudiences?: string[];
}
export interface AnalysisDefinitionProperties {
	readonly description?: string;
}
export interface ApiDefinitionInfo {
	readonly url?: string;
}
export interface ApiKVReferenceProperties {
	readonly activeVersion?: string;
	readonly details?: string;
	readonly identityType?: ManagedServiceIdentity;
	readonly reference?: string;
	readonly secretName?: string;
	readonly secretVersion?: string;
	readonly source?: "KeyVault";
	readonly status?:
		| "AccessToKeyVaultDenied"
		| "FetchTimedOut"
		| "Initialized"
		| "InvalidSyntax"
		| "MSINotEnabled"
		| "OtherReasons"
		| "Resolved"
		| "SecretNotFound"
		| "SecretVersionNotFound"
		| "UnauthorizedClient";
	readonly vaultName?: string;
}
export interface ApiManagementConfig {
	readonly id?: string;
}
export interface Apple {
	readonly enabled?: boolean;
	readonly login?: LoginScopes;
	readonly registration?: AppleRegistration;
}
export interface AppleRegistration {
	readonly clientId?: string;
	readonly clientSecretSettingName?: string;
}
export interface ApplicationLogsConfig {
	readonly azureBlobStorage?: AzureBlobStorageApplicationLogsConfig;
	readonly azureTableStorage?: AzureTableStorageApplicationLogsConfig;
	readonly fileSystem?: FileSystemApplicationLogsConfig;
}
export interface AppRegistration {
	readonly appId?: string;
	readonly appSecretSettingName?: string;
}
export interface AppServiceEnvironment {
	readonly clusterSettings?: NameValuePair[];
	readonly dedicatedHostCount?: number;
	readonly dnsSuffix?: string;
	readonly frontEndScaleFactor?: number;
	readonly hasLinuxWorkers?: boolean;
	readonly internalLoadBalancingMode?: "None" | "Publishing" | "Web" | "Web, Publishing";
	readonly ipsslAddressCount?: number;
	readonly maximumNumberOfMachines?: number;
	readonly multiRoleCount?: number;
	readonly multiSize?: string;
	readonly provisioningState?: "Canceled" | "Deleting" | "Failed" | "InProgress";
	readonly status?: "Deleting" | "Preparing" | "Ready";
	readonly suspended?: boolean;
	readonly userWhitelistedIpRanges?: string[];
	readonly virtualNetwork: VirtualNetworkProfile;
}
export interface AppServicePlanProperties {
	readonly freeOfferExpirationTime?: string;
	readonly geoRegion?: string;
	readonly hostingEnvironmentProfile?: HostingEnvironmentProfile;
	readonly hyperV?: boolean;
	readonly isSpot?: boolean;
	readonly isXenon?: boolean;
	readonly kubeEnvironmentProfile?: KubeEnvironmentProfile;
	readonly maximumElasticWorkerCount?: number;
	readonly maximumNumberOfWorkers?: number;
	readonly numberOfSites?: number;
	readonly perSiteScaling?: boolean;
	readonly provisioningState?: "Canceled" | "Deleting" | "Failed" | "InProgress";
	readonly reserved?: boolean;
	readonly resourceGroup?: string;
	readonly spotExpirationTime?: string;
	readonly status?: "Creating" | "Pending";
	readonly subscription?: string;
	readonly targetWorkerCount?: number;
	readonly targetWorkerSizeId?: number;
	readonly workerTierName?: string;
}
export interface ArmIdWrapper {
	readonly id?: string;
}
export interface ArmPlan {
	readonly name?: string;
	readonly product?: string;
	readonly promotionCode?: string;
	readonly publisher?: string;
	readonly version?: string;
}
export interface AseV3NetworkingConfigurationProperties {
	readonly allowNewPrivateEndpointConnections?: boolean;
	readonly linuxOutboundIpAddresses?: string[];
	readonly windowsOutboundIpAddresses?: string[];
}
export interface AuthPlatform {
	readonly configFilePath?: string;
	readonly enabled?: boolean;
	readonly runtimeVersion?: string;
}
export interface AutoHealActions {
	readonly actionType?: "CustomAction" | "LogEvent";
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
	readonly slowRequestsWithPath?: SlowRequestsBasedTrigger[];
	readonly statusCodes?: StatusCodesBasedTrigger[];
	readonly statusCodesRange?: StatusCodesRangeBasedTrigger[];
}
export interface AzureActiveDirectory {
	readonly enabled?: boolean;
	readonly isAutoProvisioned?: boolean;
	readonly login?: AzureActiveDirectoryLogin;
	readonly registration?: AzureActiveDirectoryRegistration;
	readonly validation?: AzureActiveDirectoryValidation;
}
export interface AzureActiveDirectoryLogin {
	readonly disableWWWAuthenticate?: boolean;
	readonly loginParameters?: string[];
}
export interface AzureActiveDirectoryRegistration {
	readonly clientId?: string;
	readonly clientSecretCertificateIssuer?: string;
	readonly clientSecretCertificateSubjectAlternativeName?: string;
	readonly clientSecretCertificateThumbprint?: string;
	readonly clientSecretSettingName?: string;
	readonly openIdIssuer?: string;
}
export interface AzureActiveDirectoryValidation {
	readonly allowedAudiences?: string[];
	readonly jwtClaimChecks?: JwtClaimChecks;
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
export interface AzureStaticWebApps {
	readonly enabled?: boolean;
	readonly registration?: AzureStaticWebAppsRegistration;
}
export interface AzureStaticWebAppsRegistration {
	readonly clientId?: string;
}
export interface AzureStorageInfoValue {
	readonly accessKey?: string;
	readonly accountName?: string;
	readonly mountPath?: string;
	readonly shareName?: string;
	readonly state?: "InvalidCredentials" | "InvalidShare" | "NotValidated";
	readonly type?: "AzureBlob";
}
export interface AzureStoragePropertyDictionaryResourceProperties {
	readonly [key: string]: AzureStorageInfoValue;
}
export interface AzureTableStorageApplicationLogsConfig {
	readonly level?: "Error" | "Information" | "Off" | "Verbose";
	readonly sasUrl: string;
}
export interface BackupItem {
	readonly id?: string;
	readonly kind?: string;
	readonly name?: string;
	readonly properties?: BackupItemProperties;
	readonly type?: string;
}
export interface BackupItemCollection {
	readonly nextLink?: string;
	readonly value: BackupItem[];
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
export interface BackupRequest {
	readonly id?: string;
	readonly kind?: string;
	readonly name?: string;
	readonly properties?: BackupRequestProperties;
	readonly type?: string;
}
export interface BackupRequestProperties {
	readonly backupName?: string;
	readonly backupSchedule?: BackupSchedule;
	readonly databases?: DatabaseBackupSetting[];
	readonly enabled?: boolean;
	readonly storageAccountUrl: string;
}
export interface BackupSchedule {
	readonly frequencyInterval: number;
	readonly frequencyUnit: "Day";
	readonly keepAtLeastOneBackup: boolean;
	readonly lastExecutionTime?: string;
	readonly retentionPeriodInDays: number;
	readonly startTime?: string;
}
export interface BlobStorageTokenStore {
	readonly sasUrlSettingName?: string;
}
export interface Capability {
	readonly name?: string;
	readonly reason?: string;
	readonly value?: string;
}
export interface CertificateProperties {
	readonly canonicalName?: string;
	readonly cerBlob?: any;
	readonly domainValidationMethod?: string;
	readonly expirationDate?: string;
	readonly friendlyName?: string;
	readonly hostingEnvironmentProfile?: HostingEnvironmentProfile;
	readonly hostNames?: string[];
	readonly issueDate?: string;
	readonly issuer?: string;
	readonly keyVaultId?: string;
	readonly keyVaultSecretName?: string;
	readonly keyVaultSecretStatus?:
		| "AzureServiceUnauthorizedToAccessKeyVault"
		| "CertificateOrderFailed"
		| "ExternalPrivateKey"
		| "Initialized"
		| "KeyVaultDoesNotExist"
		| "KeyVaultSecretDoesNotExist"
		| "OperationNotPermittedOnKeyVault"
		| "Succeeded"
		| "Unknown"
		| "UnknownError";
	readonly password?: string;
	readonly pfxBlob?: any;
	readonly publicKeyHash?: string;
	readonly selfLink?: string;
	readonly serverFarmId?: string;
	readonly siteName?: string;
	readonly subjectName?: string;
	readonly thumbprint?: string;
	readonly valid?: boolean;
}
export interface ClientRegistration {
	readonly clientId?: string;
	readonly clientSecretSettingName?: string;
}
export interface CloningInfo {
	readonly appSettingsOverrides?: CloningInfoAppSettingsOverrides;
	readonly cloneCustomHostNames?: boolean;
	readonly cloneSourceControl?: boolean;
	readonly configureLoadBalancing?: boolean;
	readonly correlationId?: string;
	readonly hostingEnvironment?: string;
	readonly overwrite?: boolean;
	readonly sourceWebAppId: string;
	readonly sourceWebAppLocation?: string;
	readonly trafficManagerProfileId?: string;
	readonly trafficManagerProfileName?: string;
}
export interface CloningInfoAppSettingsOverrides {
	readonly [key: string]: string;
}
export interface Components1Jq1T4ISchemasManagedserviceidentityPropertiesUserassignedidentitiesAdditionalproperties {
	readonly clientId?: string;
	readonly principalId?: string;
}
export interface ConnectionStringDictionaryProperties {
	readonly [key: string]: ConnStringValueTypePair;
}
export interface ConnStringInfo {
	readonly connectionString?: string;
	readonly name?: string;
	readonly type?:
		| "ApiHub"
		| "Custom"
		| "DocDb"
		| "EventHub"
		| "MySql"
		| "NotificationHub"
		| "PostgreSQL"
		| "RedisCache"
		| "SQLAzure"
		| "SQLServer";
}
export interface ConnStringValueTypePair {
	readonly type:
		| "ApiHub"
		| "Custom"
		| "DocDb"
		| "EventHub"
		| "MySql"
		| "NotificationHub"
		| "PostgreSQL"
		| "RedisCache"
		| "SQLAzure"
		| "SQLServer";
	readonly value: string;
}
export interface ContainerCpuStatistics {
	readonly cpuUsage?: ContainerCpuUsage;
	readonly onlineCpuCount?: number;
	readonly systemCpuUsage?: number;
	readonly throttlingData?: ContainerThrottlingData;
}
export interface ContainerCpuUsage {
	readonly kernelModeUsage?: number;
	readonly perCpuUsage?: number[];
	readonly totalUsage?: number;
	readonly userModeUsage?: number;
}
export interface ContainerInfo {
	readonly currentCpuStats?: ContainerCpuStatistics;
	readonly currentTimeStamp?: string;
	readonly eth0?: ContainerNetworkInterfaceStatistics;
	readonly id?: string;
	readonly memoryStats?: ContainerMemoryStatistics;
	readonly name?: string;
	readonly previousCpuStats?: ContainerCpuStatistics;
	readonly previousTimeStamp?: string;
}
export interface ContainerMemoryStatistics {
	readonly limit?: number;
	readonly maxUsage?: number;
	readonly usage?: number;
}
export interface ContainerNetworkInterfaceStatistics {
	readonly rxBytes?: number;
	readonly rxDropped?: number;
	readonly rxErrors?: number;
	readonly rxPackets?: number;
	readonly txBytes?: number;
	readonly txDropped?: number;
	readonly txErrors?: number;
	readonly txPackets?: number;
}
export interface ContainerThrottlingData {
	readonly periods?: number;
	readonly throttledPeriods?: number;
	readonly throttledTime?: number;
}
export interface ContinuousWebJobProperties {
	readonly detailed_status?: string;
	readonly error?: string;
	readonly extra_info_url?: string;
	readonly log_url?: string;
	readonly run_command?: string;
	readonly settings?: ContinuousWebJobPropertiesSettings;
	readonly status?: "Initializing" | "PendingRestart" | "Running" | "Starting";
	readonly url?: string;
	readonly using_sdk?: boolean;
	readonly web_job_type?: "Continuous";
}
export interface ContinuousWebJobPropertiesSettings {
	readonly [key: string]: any;
}
export interface CookieExpiration {
	readonly convention?: "FixedTime";
	readonly timeToExpiration?: string;
}
export interface CorsSettings {
	readonly allowedOrigins?: string[];
	readonly supportCredentials?: boolean;
}
export interface CsmPublishingCredentialsPoliciesEntityProperties {
	readonly allow: boolean;
}
export interface CustomOpenIdConnectProvider {
	readonly enabled?: boolean;
	readonly login?: OpenIdConnectLogin;
	readonly registration?: OpenIdConnectRegistration;
}
export interface DatabaseBackupSetting {
	readonly connectionString?: string;
	readonly connectionStringName?: string;
	readonly databaseType: "LocalMySql" | "MySql" | "PostgreSql" | "SqlAzure";
	readonly name?: string;
}
export interface DataProviderMetadata {
	readonly propertyBag?: KeyValuePairStringObject[];
	readonly providerName?: string;
}
export interface DataTableResponseColumn {
	readonly columnName?: string;
	readonly columnType?: string;
	readonly dataType?: string;
}
export interface DataTableResponseObject {
	readonly columns?: DataTableResponseColumn[];
	readonly rows?: string[][];
	readonly tableName?: string;
}
export interface DeletedSiteProperties {
	readonly deletedSiteId?: number;
	readonly deletedSiteName?: string;
	readonly deletedTimestamp?: string;
	readonly geoRegionName?: string;
	readonly kind?: string;
	readonly resourceGroup?: string;
	readonly slot?: string;
	readonly subscription?: string;
}
export interface DeploymentProperties {
	readonly active?: boolean;
	readonly author?: string;
	readonly author_email?: string;
	readonly deployer?: string;
	readonly details?: string;
	readonly end_time?: string;
	readonly message?: string;
	readonly start_time?: string;
	readonly status?: number;
}
export interface DetectorDefinitionProperties {
	readonly description?: string;
	readonly displayName?: string;
	readonly isEnabled?: boolean;
	readonly rank?: number;
}
export interface DetectorInfo {
	readonly analysisType?: string[];
	readonly author?: string;
	readonly category?: string;
	readonly description?: string;
	readonly id?: string;
	readonly name?: string;
	readonly score?: number;
	readonly supportTopicList?: SupportTopic[];
	readonly type?: "Analysis" | "CategoryOverview";
}
export interface DetectorResponseProperties {
	readonly dataProvidersMetadata?: DataProviderMetadata[];
	readonly dataset?: DiagnosticData[];
	readonly metadata?: DetectorInfo;
	readonly status?: Status;
	readonly suggestedUtterances?: QueryUtterancesResults;
}
export interface DiagnosticCategoryProperties {
	readonly description?: string;
}
export interface DiagnosticData {
	readonly renderingProperties?: Rendering;
	readonly table?: DataTableResponseObject;
}
export interface EnabledConfig {
	readonly enabled?: boolean;
}
export interface ErrorEntity {
	readonly code?: string;
	readonly extendedCode?: string;
	readonly innerErrors?: ErrorEntity[];
	readonly message?: string;
	readonly messageTemplate?: string;
	readonly parameters?: string[];
}
export interface Experiments {
	readonly rampUpRules?: RampUpRule[];
}
export interface Facebook {
	readonly enabled?: boolean;
	readonly graphApiVersion?: string;
	readonly login?: LoginScopes;
	readonly registration?: AppRegistration;
}
export interface FileSystemApplicationLogsConfig {
	readonly level?: "Error" | "Information" | "Off" | "Verbose";
}
export interface FileSystemHttpLogsConfig {
	readonly enabled?: boolean;
	readonly retentionInDays?: number;
	readonly retentionInMb?: number;
}
export interface FileSystemTokenStore {
	readonly directory?: string;
}
export interface ForwardProxy {
	readonly convention?: "Custom" | "NoProxy";
	readonly customHostHeaderName?: string;
	readonly customProtoHeaderName?: string;
}
export interface FunctionEnvelopeProperties {
	readonly config?: any;
	readonly config_href?: string;
	readonly files?: FunctionEnvelopePropertiesFiles;
	readonly function_app_id?: string;
	readonly href?: string;
	readonly invoke_url_template?: string;
	readonly isDisabled?: boolean;
	readonly language?: string;
	readonly script_href?: string;
	readonly script_root_path_href?: string;
	readonly secrets_file_href?: string;
	readonly test_data?: string;
	readonly test_data_href?: string;
}
export interface FunctionEnvelopePropertiesFiles {
	readonly [key: string]: string;
}
export interface FunctionSecrets {
	readonly key?: string;
	readonly trigger_url?: string;
}
export interface GitHub {
	readonly enabled?: boolean;
	readonly login?: LoginScopes;
	readonly registration?: ClientRegistration;
}
export interface GitHubActionCodeConfiguration {
	readonly runtimeStack?: string;
	readonly runtimeVersion?: string;
}
export interface GitHubActionConfiguration {
	readonly codeConfiguration?: GitHubActionCodeConfiguration;
	readonly containerConfiguration?: GitHubActionContainerConfiguration;
	readonly generateWorkflowFile?: boolean;
	readonly isLinux?: boolean;
}
export interface GitHubActionContainerConfiguration {
	readonly imageName?: string;
	readonly password?: string;
	readonly serverUrl?: string;
	readonly username?: string;
}
export interface GlobalValidation {
	readonly excludedPaths?: string[];
	readonly redirectToProvider?: string;
	readonly requireAuthentication?: boolean;
	readonly unauthenticatedClientAction?: "AllowAnonymous" | "RedirectToLoginPage" | "Return401";
}
export interface Google {
	readonly enabled?: boolean;
	readonly login?: LoginScopes;
	readonly registration?: ClientRegistration;
	readonly validation?: AllowedAudiencesValidation;
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
export interface HostKeys {
	readonly functionKeys?: HostKeysFunctionKeys;
	readonly masterKey?: string;
	readonly systemKeys?: HostKeysSystemKeys;
}
export interface HostKeysFunctionKeys {
	readonly [key: string]: string;
}
export interface HostKeysSystemKeys {
	readonly [key: string]: string;
}
export interface HostNameBindingProperties {
	readonly azureResourceName?: string;
	readonly azureResourceType?: "TrafficManager";
	readonly customHostNameDnsRecordType?: "A";
	readonly domainId?: string;
	readonly hostNameType?: "Managed";
	readonly siteName?: string;
	readonly sslState?: "Disabled" | "IpBasedEnabled";
	readonly thumbprint?: string;
	readonly virtualIP?: string;
}
export interface HostNameSslState {
	readonly hostType?: "Repository";
	readonly name?: string;
	readonly sslState?: "Disabled" | "IpBasedEnabled";
	readonly thumbprint?: string;
	readonly toUpdate?: boolean;
	readonly virtualIP?: string;
}
export interface HttpLogsConfig {
	readonly azureBlobStorage?: AzureBlobStorageHttpLogsConfig;
	readonly fileSystem?: FileSystemHttpLogsConfig;
}
export interface HttpSettings {
	readonly forwardProxy?: ForwardProxy;
	readonly requireHttps?: boolean;
	readonly routes?: HttpSettingsRoutes;
}
export interface HttpSettingsRoutes {
	readonly apiPrefix?: string;
}
export interface HybridConnection {
	readonly id?: string;
	readonly kind?: string;
	readonly name?: string;
	readonly properties?: HybridConnectionProperties;
	readonly type?: string;
}
export interface HybridConnectionKey {
	readonly id?: string;
	readonly kind?: string;
	readonly name?: string;
	readonly properties?: HybridConnectionKeyProperties;
	readonly type?: string;
}
export interface HybridConnectionKeyProperties {
	readonly sendKeyName?: string;
	readonly sendKeyValue?: string;
}
export interface HybridConnectionLimitsProperties {
	readonly current?: number;
	readonly maximum?: number;
}
export interface HybridConnectionProperties {
	readonly hostname?: string;
	readonly port?: number;
	readonly relayArmUri?: string;
	readonly relayName?: string;
	readonly sendKeyName?: string;
	readonly sendKeyValue?: string;
	readonly serviceBusNamespace?: string;
	readonly serviceBusSuffix?: string;
}
export interface IdentifierProperties {
	readonly id?: string;
}
export interface IdentityProviders {
	readonly apple?: Apple;
	readonly azureActiveDirectory?: AzureActiveDirectory;
	readonly azureStaticWebApps?: AzureStaticWebApps;
	readonly customOpenIdConnectProviders?: IdentityProvidersCustomOpenIdConnectProviders;
	readonly facebook?: Facebook;
	readonly gitHub?: GitHub;
	readonly google?: Google;
	readonly legacyMicrosoftAccount?: LegacyMicrosoftAccount;
	readonly twitter?: Twitter;
}
export interface IdentityProvidersCustomOpenIdConnectProviders {
	readonly [key: string]: CustomOpenIdConnectProvider;
}
export interface IpSecurityRestriction {
	readonly action?: string;
	readonly description?: string;
	readonly headers?: IpSecurityRestrictionHeaders;
}
export interface IpSecurityRestrictionHeaders {
	readonly [key: string]: string[];
}
export interface JwtClaimChecks {
	readonly allowedClientApplications?: string[];
	readonly allowedGroups?: string[];
}
export interface KeyValuePairStringObject {
	readonly key?: string;
	readonly value?: any;
}
export interface KubeEnvironmentProfile {
	readonly id?: string;
	readonly name?: string;
	readonly type?: string;
}
export interface LegacyMicrosoftAccount {
	readonly enabled?: boolean;
	readonly login?: LoginScopes;
	readonly registration?: ClientRegistration;
	readonly validation?: AllowedAudiencesValidation;
}
export interface Login {
	readonly allowedExternalRedirectUrls?: string[];
	readonly cookieExpiration?: CookieExpiration;
	readonly nonce?: Nonce;
	readonly preserveUrlFragmentsForLogins?: boolean;
	readonly routes?: LoginRoutes;
	readonly tokenStore?: TokenStore;
}
export interface LoginRoutes {
	readonly logoutEndpoint?: string;
}
export interface LoginScopes {
	readonly scopes?: string[];
}
export interface ManagedServiceIdentity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "None" | "SystemAssigned" | "SystemAssigned, UserAssigned";
	readonly userAssignedIdentities?: ManagedServiceIdentityUserAssignedIdentities;
}
export interface ManagedServiceIdentityUserAssignedIdentities {
	readonly [key: string]: Components1Jq1T4ISchemasManagedserviceidentityPropertiesUserassignedidentitiesAdditionalproperties;
}
export interface MigrateMySqlStatusProperties {
	readonly localMySqlEnabled?: boolean;
	readonly migrationOperationStatus?: "Created" | "Failed" | "InProgress" | "Succeeded";
	readonly operationId?: string;
}
export interface MSDeployCoreOrMSDeployStatusProperties {
	readonly appOffline?: boolean;
	readonly complete?: boolean;
	readonly connectionString?: string;
	readonly dbType?: string;
	readonly deployer?: string;
	readonly endTime?: string;
	readonly packageUri?: string;
	readonly provisioningState?: "accepted" | "canceled" | "failed" | "running";
	readonly setParameters?: MSDeployCoreSetParameters;
	readonly setParametersXmlFileUri?: string;
	readonly skipAppData?: boolean;
	readonly startTime?: string;
}
export interface MSDeployCoreSetParameters {
	readonly [key: string]: string;
}
export interface NameValuePair {
	readonly name?: string;
	readonly value?: string;
}
export interface NetworkFeaturesProperties {
	readonly hybridConnections?: RelayServiceConnectionEntity[];
	readonly hybridConnectionsV2?: HybridConnection[];
	readonly virtualNetworkConnection?: VnetInfo;
	readonly virtualNetworkName?: string;
}
export interface Nonce {
	readonly nonceExpirationInterval?: string;
	readonly validateNonce?: boolean;
}
export interface OpenIdConnectClientCredential {
	readonly clientSecretSettingName?: string;
	readonly method?: "ClientSecretPost";
}
export interface OpenIdConnectConfig {
	readonly authorizationEndpoint?: string;
	readonly certificationUri?: string;
	readonly issuer?: string;
	readonly tokenEndpoint?: string;
	readonly wellKnownOpenIdConfiguration?: string;
}
export interface OpenIdConnectLogin {
	readonly nameClaimType?: string;
	readonly scopes?: string[];
}
export interface OpenIdConnectRegistration {
	readonly clientCredential?: OpenIdConnectClientCredential;
	readonly clientId?: string;
	readonly openIdConnectConfiguration?: OpenIdConnectConfig;
}
export interface PremierAddOnProperties {
	readonly marketplaceOffer?: string;
	readonly marketplacePublisher?: string;
	readonly product?: string;
	readonly sku?: string;
	readonly vendor?: string;
}
export interface PrivateAccessProperties {
	readonly enabled?: boolean;
	readonly virtualNetworks?: PrivateAccessVirtualNetwork[];
}
export interface PrivateAccessSubnet {
	readonly key?: number;
	readonly name?: string;
}
export interface PrivateAccessVirtualNetwork {
	readonly key?: number;
	readonly name?: string;
	readonly resourceId?: string;
	readonly subnets?: PrivateAccessSubnet[];
}
export interface PrivateLinkConnectionApprovalRequestOrRemotePrivateEndpointConnectionARMResourceProperties {
	readonly ipAddresses?: string[];
	readonly privateEndpoint?: ArmIdWrapper;
	readonly privateLinkServiceConnectionState?: PrivateLinkConnectionState;
	readonly provisioningState?: string;
}
export interface PrivateLinkConnectionState {
	readonly actionsRequired?: string;
	readonly description?: string;
	readonly status?: string;
}
export interface ProcessInfoProperties {
	readonly children?: string[];
	readonly command_line?: string;
	readonly deployment_name?: string;
	readonly description?: string;
	readonly environment_variables?: ProcessInfoPropertiesEnvironmentVariables;
	readonly file_name?: string;
	readonly handle_count?: number;
	readonly href?: string;
	readonly identifier?: number;
	readonly iis_profile_timeout_in_seconds?: number;
	readonly is_iis_profile_running?: boolean;
	readonly is_profile_running?: boolean;
	readonly is_scm_site?: boolean;
	readonly is_webjob?: boolean;
	readonly minidump?: string;
	readonly module_count?: number;
	readonly modules?: ProcessModuleInfo[];
	readonly non_paged_system_memory?: number;
	readonly open_file_handles?: string[];
	readonly paged_memory?: number;
	readonly paged_system_memory?: number;
	readonly parent?: string;
	readonly peak_paged_memory?: number;
	readonly peak_virtual_memory?: number;
	readonly peak_working_set?: number;
	readonly private_memory?: number;
	readonly privileged_cpu_time?: string;
	readonly start_time?: string;
	readonly thread_count?: number;
	readonly threads?: ProcessThreadInfo[];
	readonly time_stamp?: string;
	readonly total_cpu_time?: string;
	readonly user_cpu_time?: string;
	readonly user_name?: string;
	readonly virtual_memory?: number;
	readonly working_set?: number;
}
export interface ProcessInfoPropertiesEnvironmentVariables {
	readonly [key: string]: string;
}
export interface ProcessModuleInfo {
	readonly id?: string;
	readonly kind?: string;
	readonly name?: string;
	readonly properties?: ProcessModuleInfoProperties;
	readonly type?: string;
}
export interface ProcessModuleInfoProperties {
	readonly base_address?: string;
	readonly file_description?: string;
	readonly file_name?: string;
	readonly file_path?: string;
	readonly file_version?: string;
	readonly href?: string;
	readonly is_debug?: boolean;
	readonly language?: string;
	readonly module_memory_size?: number;
	readonly product?: string;
	readonly product_version?: string;
}
export interface ProcessThreadInfo {
	readonly id?: string;
	readonly kind?: string;
	readonly name?: string;
	readonly properties?: ProcessThreadInfoProperties;
	readonly type?: string;
}
export interface ProcessThreadInfoProperties {
	readonly base_priority?: number;
	readonly current_priority?: number;
	readonly href?: string;
	readonly identifier?: number;
	readonly priority_level?: string;
	readonly process?: string;
	readonly start_address?: string;
	readonly start_time?: string;
	readonly state?: string;
	readonly total_processor_time?: string;
	readonly user_processor_time?: string;
	readonly wait_reason?: string;
}
export interface PublicCertificateProperties {
	readonly blob?: any;
	readonly publicCertificateLocation?: "CurrentUserMy" | "LocalMachineMy";
	readonly thumbprint?: string;
}
export interface PushSettings {
	readonly id?: string;
	readonly kind?: string;
	readonly name?: string;
	readonly properties?: PushSettingsProperties;
	readonly type?: string;
}
export interface PushSettingsProperties {
	readonly dynamicTagsJson?: string;
	readonly isPushEnabled: boolean;
	readonly tagsRequiringAuth?: string;
	readonly tagWhitelistJson?: string;
}
export interface QueryUtterancesResult {
	readonly sampleUtterance?: SampleUtterance;
	readonly score?: number;
}
export interface QueryUtterancesResults {
	readonly query?: string;
	readonly results?: QueryUtterancesResult[];
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
export interface RecommendationRuleProperties {
	readonly actionName?: string;
	readonly bladeName?: string;
	readonly categoryTags?: string[];
	readonly channels?: "All" | "Api" | "Email" | "Notification";
	readonly description?: string;
	readonly displayName?: string;
	readonly extensionName?: string;
	readonly forwardLink?: string;
	readonly isDynamic?: boolean;
	readonly level?: "Critical" | "Information" | "NonUrgentSuggestion";
	readonly message?: string;
	readonly recommendationId?: string;
	readonly recommendationName?: string;
}
export interface RelayServiceConnectionEntity {
	readonly id?: string;
	readonly kind?: string;
	readonly name?: string;
	readonly properties?: RelayServiceConnectionEntityProperties;
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
export interface RemotePrivateEndpointConnection {
	readonly id?: string;
	readonly kind?: string;
	readonly name?: string;
	readonly properties?: RemotePrivateEndpointConnectionProperties;
	readonly type?: string;
}
export interface RemotePrivateEndpointConnectionProperties {
	readonly ipAddresses?: string[];
	readonly privateEndpoint?: ArmIdWrapper;
	readonly privateLinkServiceConnectionState?: PrivateLinkConnectionState;
	readonly provisioningState?: string;
}
export interface Rendering {
	readonly description?: string;
	readonly title?: string;
	readonly type?:
		| "AppInsight"
		| "AppInsightEnablement"
		| "Card"
		| "ChangeAnalysisOnboarding"
		| "ChangeSets"
		| "ChangesView"
		| "DataSummary"
		| "DependencyGraph"
		| "Detector"
		| "DownTime"
		| "DropDown"
		| "DynamicInsight"
		| "Email"
		| "Form"
		| "Guage"
		| "Insights"
		| "Markdown"
		| "NoGraph"
		| "PieChart"
		| "SearchComponent"
		| "Solution"
		| "SummaryCard"
		| "Table"
		| "TimeSeries";
}
export interface RequestsBasedTrigger {
	readonly count?: number;
	readonly timeInterval?: string;
}
export interface ResourceHealthMetadataProperties {
	readonly category?: string;
	readonly signalAvailability?: boolean;
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface ResponseMessageEnvelopeRemotePrivateEndpointConnection {
	readonly error?: ErrorEntity;
	readonly id?: string;
	readonly identity?: ManagedServiceIdentity;
	readonly location?: string;
	readonly name?: string;
	readonly plan?: ArmPlan;
	readonly properties?: RemotePrivateEndpointConnection;
	readonly sku?: SkuDescription;
	readonly status?: string;
	readonly tags?: ResponseMessageEnvelopeRemotePrivateEndpointConnectionTags;
	readonly type?: string;
	readonly zones?: string[];
}
export interface ResponseMessageEnvelopeRemotePrivateEndpointConnectionTags {
	readonly [key: string]: string;
}
export interface SampleUtterance {
	readonly links?: string[];
	readonly qid?: string;
	readonly text?: string;
}
export interface SiteAuthSettingsProperties {
	readonly aadClaimsAuthorization?: string;
	readonly additionalLoginParams?: string[];
	readonly allowedAudiences?: string[];
	readonly allowedExternalRedirectUrls?: string[];
	readonly authFilePath?: string;
	readonly clientId?: string;
	readonly clientSecret?: string;
	readonly clientSecretCertificateThumbprint?: string;
	readonly clientSecretSettingName?: string;
	readonly configVersion?: string;
	readonly defaultProvider?: "AzureActiveDirectory" | "Facebook" | "Github" | "Google" | "MicrosoftAccount";
	readonly enabled?: boolean;
	readonly facebookAppId?: string;
	readonly facebookAppSecret?: string;
	readonly facebookAppSecretSettingName?: string;
	readonly facebookOAuthScopes?: string[];
	readonly gitHubClientId?: string;
	readonly gitHubClientSecret?: string;
	readonly gitHubClientSecretSettingName?: string;
	readonly gitHubOAuthScopes?: string[];
	readonly googleClientId?: string;
	readonly googleClientSecret?: string;
	readonly googleClientSecretSettingName?: string;
	readonly googleOAuthScopes?: string[];
	readonly isAuthFromFile?: string;
	readonly issuer?: string;
	readonly microsoftAccountClientId?: string;
	readonly microsoftAccountClientSecret?: string;
	readonly microsoftAccountClientSecretSettingName?: string;
	readonly microsoftAccountOAuthScopes?: string[];
	readonly runtimeVersion?: string;
	readonly tokenRefreshExtensionHours?: number;
	readonly tokenStoreEnabled?: boolean;
	readonly twitterConsumerKey?: string;
	readonly twitterConsumerSecret?: string;
	readonly twitterConsumerSecretSettingName?: string;
	readonly unauthenticatedClientAction?: "AllowAnonymous";
	readonly validateIssuer?: boolean;
}
export interface SiteAuthSettingsV2Properties {
	readonly globalValidation?: GlobalValidation;
	readonly httpSettings?: HttpSettings;
	readonly identityProviders?: IdentityProviders;
	readonly login?: Login;
	readonly platform?: AuthPlatform;
}
export interface SiteConfig {
	readonly acrUseManagedIdentityCreds?: boolean;
	readonly acrUserManagedIdentityID?: string;
	readonly alwaysOn?: boolean;
	readonly apiDefinition?: ApiDefinitionInfo;
	readonly apiManagementConfig?: ApiManagementConfig;
	readonly appCommandLine?: string;
	readonly appSettings?: NameValuePair[];
	readonly autoHealEnabled?: boolean;
	readonly autoHealRules?: AutoHealRules;
	readonly autoSwapSlotName?: string;
	readonly azureStorageAccounts?: SiteConfigAzureStorageAccounts;
	readonly connectionStrings?: ConnStringInfo[];
	readonly cors?: CorsSettings;
	readonly defaultDocuments?: string[];
	readonly detailedErrorLoggingEnabled?: boolean;
	readonly documentRoot?: string;
	readonly experiments?: Experiments;
	readonly ftpsState?: "AllAllowed" | "Disabled" | "FtpsOnly";
	readonly functionAppScaleLimit?: number;
	readonly functionsRuntimeScaleMonitoringEnabled?: boolean;
	readonly handlerMappings?: HandlerMapping[];
	readonly healthCheckPath?: string;
	readonly http20Enabled?: boolean;
	readonly httpLoggingEnabled?: boolean;
	readonly ipSecurityRestrictions?: IpSecurityRestriction[];
	readonly javaContainer?: string;
	readonly javaContainerVersion?: string;
	readonly javaVersion?: string;
	readonly keyVaultReferenceIdentity?: string;
	readonly limits?: SiteLimits;
	readonly linuxFxVersion?: string;
	readonly loadBalancing?:
		| "LeastRequests"
		| "LeastResponseTime"
		| "PerSiteRoundRobin"
		| "RequestHash"
		| "WeightedRoundRobin";
	readonly localMySqlEnabled?: boolean;
	readonly logsDirectorySizeLimit?: number;
	readonly machineKey?: SiteMachineKey;
	readonly managedPipelineMode?: "Classic";
	readonly managedServiceIdentityId?: number;
	readonly minimumElasticInstanceCount?: number;
	readonly minTlsVersion?: "1.0" | "1.1" | "1.2";
	readonly netFrameworkVersion?: string;
	readonly nodeVersion?: string;
	readonly numberOfWorkers?: number;
	readonly phpVersion?: string;
	readonly powerShellVersion?: string;
	readonly preWarmedInstanceCount?: number;
	readonly publicNetworkAccess?: string;
	readonly publishingUsername?: string;
	readonly push?: PushSettings;
	readonly pythonVersion?: string;
	readonly remoteDebuggingEnabled?: boolean;
	readonly remoteDebuggingVersion?: string;
	readonly requestTracingEnabled?: boolean;
	readonly requestTracingExpirationTime?: string;
	readonly scmIpSecurityRestrictions?: IpSecurityRestriction[];
	readonly scmIpSecurityRestrictionsUseMain?: boolean;
	readonly scmMinTlsVersion?: "1.0" | "1.1" | "1.2";
	readonly scmType?:
		| "BitbucketGit"
		| "BitbucketHg"
		| "CodePlexGit"
		| "CodePlexHg"
		| "Dropbox"
		| "ExternalGit"
		| "ExternalHg"
		| "GitHub"
		| "LocalGit"
		| "None"
		| "OneDrive"
		| "Tfs"
		| "VSO"
		| "VSTSRM";
	readonly tracingOptions?: string;
	readonly use32BitWorkerProcess?: boolean;
	readonly virtualApplications?: VirtualApplication[];
	readonly vnetName?: string;
	readonly vnetPrivatePortsCount?: number;
	readonly vnetRouteAllEnabled?: boolean;
	readonly websiteTimeZone?: string;
	readonly webSocketsEnabled?: boolean;
	readonly windowsFxVersion?: string;
	readonly xManagedServiceIdentityId?: number;
}
export interface SiteConfigAzureStorageAccounts {
	readonly [key: string]: AzureStorageInfoValue;
}
export interface SiteExtensionInfoProperties {
	readonly authors?: string[];
	readonly comment?: string;
	readonly description?: string;
	readonly download_count?: number;
	readonly extension_id?: string;
	readonly extension_type?: "Gallery";
	readonly extension_url?: string;
	readonly feed_url?: string;
	readonly icon_url?: string;
	readonly installed_date_time?: string;
	readonly installer_command_line_params?: string;
	readonly license_url?: string;
	readonly local_is_latest_version?: boolean;
	readonly local_path?: string;
	readonly project_url?: string;
	readonly provisioningState?: string;
	readonly published_date_time?: string;
	readonly summary?: string;
	readonly title?: string;
	readonly version?: string;
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
export interface SiteMachineKey {
	readonly decryption?: string;
	readonly decryptionKey?: string;
	readonly validation?: string;
	readonly validationKey?: string;
}
export interface SiteProperties {
	readonly availabilityState?: "DisasterRecoveryMode" | "Limited";
	readonly clientAffinityEnabled?: boolean;
	readonly clientCertEnabled?: boolean;
	readonly clientCertExclusionPaths?: string;
	readonly clientCertMode?: "Optional" | "OptionalInteractiveUser";
}
export interface SiteSourceControlProperties {
	readonly branch?: string;
	readonly deploymentRollbackEnabled?: boolean;
	readonly gitHubActionConfiguration?: GitHubActionConfiguration;
	readonly isGitHubAction?: boolean;
	readonly isManualIntegration?: boolean;
	readonly isMercurial?: boolean;
	readonly repoUrl?: string;
}
export interface SkuCapacity {
	readonly default?: number;
	readonly elasticMaximum?: number;
	readonly maximum?: number;
	readonly minimum?: number;
	readonly scaleType?: string;
}
export interface SkuDescription {
	readonly capabilities?: Capability[];
	readonly capacity?: number;
	readonly family?: string;
	readonly locations?: string[];
	readonly name?: string;
	readonly size?: string;
	readonly skuCapacity?: SkuCapacity;
	readonly tier?: string;
}
export interface SlotConfigNames {
	readonly appSettingNames?: string[];
	readonly azureStorageConfigNames?: string[];
	readonly connectionStringNames?: string[];
}
export interface SlotSwapStatus {
	readonly destinationSlotName?: string;
	readonly sourceSlotName?: string;
	readonly timestampUtc?: string;
}
export interface SlowRequestsBasedTrigger {
	readonly count?: number;
	readonly path?: string;
	readonly timeInterval?: string;
	readonly timeTaken?: string;
}
export interface SourceControlProperties {
	readonly expirationTime?: string;
	readonly refreshToken?: string;
	readonly token?: string;
	readonly tokenSecret?: string;
}
export interface StaticSite {
	readonly allowConfigFileUpdates?: boolean;
	readonly branch?: string;
	readonly buildProperties?: StaticSiteBuildProperties;
	readonly contentDistributionEndpoint?: string;
	readonly customDomains?: string[];
	readonly defaultHostname?: string;
	readonly keyVaultReferenceIdentity?: string;
	readonly privateEndpointConnections?: ResponseMessageEnvelopeRemotePrivateEndpointConnection[];
	readonly provider?: string;
	readonly repositoryToken?: string;
	readonly repositoryUrl?: string;
	readonly stagingEnvironmentPolicy?: "Disabled";
	readonly templateProperties?: StaticSiteTemplateOptions;
	readonly userProvidedFunctionApps?: StaticSiteUserProvidedFunctionApp[];
}
export interface StaticSiteBuildARMResourceProperties {
	readonly buildId?: string;
	readonly createdTimeUtc?: string;
	readonly hostname?: string;
	readonly lastUpdatedOn?: string;
	readonly pullRequestTitle?: string;
	readonly sourceBranch?: string;
	readonly status?: "Deleting" | "Deploying" | "Detached" | "Failed" | "Ready" | "Uploading" | "WaitingForDeployment";
	readonly userProvidedFunctionApps?: StaticSiteUserProvidedFunctionApp[];
}
export interface StaticSiteBuildProperties {
	readonly apiBuildCommand?: string;
	readonly apiLocation?: string;
	readonly appArtifactLocation?: string;
	readonly appBuildCommand?: string;
	readonly appLocation?: string;
	readonly githubActionSecretNameOverride?: string;
	readonly outputLocation?: string;
	readonly skipGithubActionWorkflowGeneration?: boolean;
}
export interface StaticSiteCustomDomainRequestPropertiesARMResourcePropertiesOrStaticSiteCustomDomainOverviewARMResourceProperties {
	readonly createdOn?: string;
	readonly domainName?: string;
	readonly errorMessage?: string;
	readonly status?: "Adding" | "Deleting" | "Failed" | "Ready" | "RetrievingValidationToken" | "Validating";
	readonly validationMethod?: string;
	readonly validationToken?: string;
}
export interface StaticSiteTemplateOptions {
	readonly description?: string;
	readonly isPrivate?: boolean;
	readonly owner?: string;
	readonly repositoryName?: string;
	readonly templateRepositoryUrl?: string;
}
export interface StaticSiteUserARMResource {
	readonly id?: string;
	readonly kind?: string;
	readonly name?: string;
	readonly properties?: StaticSiteUserARMResourceProperties;
	readonly type?: string;
}
export interface StaticSiteUserARMResourceProperties {
	readonly displayName?: string;
	readonly provider?: string;
	readonly roles?: string;
	readonly userId?: string;
}
export interface StaticSiteUserCollection {
	readonly nextLink?: string;
	readonly value: StaticSiteUserARMResource[];
}
export interface StaticSiteUserProvidedFunctionApp {
	readonly id?: string;
	readonly kind?: string;
	readonly name?: string;
	readonly properties?: StaticSiteUserProvidedFunctionAppProperties;
	readonly type?: string;
}
export interface StaticSiteUserProvidedFunctionAppARMResourceProperties {
	readonly createdOn?: string;
	readonly functionAppRegion?: string;
	readonly functionAppResourceId?: string;
}
export interface StaticSiteUserProvidedFunctionAppProperties {
	readonly createdOn?: string;
	readonly functionAppRegion?: string;
	readonly functionAppResourceId?: string;
}
export interface Status {
	readonly message?: string;
	readonly statusId?: "Critical" | "Info" | "None" | "Success";
}
export interface StatusCodesBasedTrigger {
	readonly count?: number;
	readonly path?: string;
	readonly status?: number;
	readonly subStatus?: number;
	readonly timeInterval?: string;
	readonly win32Status?: number;
}
export interface StatusCodesRangeBasedTrigger {
	readonly count?: number;
	readonly path?: string;
	readonly statusCodes?: string;
	readonly timeInterval?: string;
}
export interface StringDictionary {
	readonly id?: string;
	readonly kind?: string;
	readonly name?: string;
	readonly properties?: StringDictionaryProperties;
	readonly type?: string;
}
export interface StringDictionaryProperties {
	readonly [key: string]: string;
}
export interface StringList {
	readonly id?: string;
	readonly kind?: string;
	readonly name?: string;
	readonly properties?: string[];
	readonly type?: string;
}
export interface SupportTopic {
	readonly id?: string;
	readonly pesId?: string;
}
export interface SwiftVirtualNetworkProperties {
	readonly subnetResourceId?: string;
	readonly swiftSupported?: boolean;
}
export interface TokenStore {
	readonly azureBlobStorage?: BlobStorageTokenStore;
	readonly enabled?: boolean;
	readonly fileSystem?: FileSystemTokenStore;
	readonly tokenRefreshExtensionHours?: number;
}
export interface TriggeredJobHistoryProperties {
	readonly runs?: TriggeredJobRun[];
}
export interface TriggeredJobRun {
	readonly id?: string;
	readonly kind?: string;
	readonly name?: string;
	readonly properties?: TriggeredJobRunProperties;
	readonly type?: string;
}
export interface TriggeredJobRunProperties {
	readonly duration?: string;
	readonly end_time?: string;
	readonly error_url?: string;
	readonly job_name?: string;
	readonly output_url?: string;
	readonly start_time?: string;
	readonly status?: "Error" | "Failed";
	readonly trigger?: string;
	readonly url?: string;
	readonly web_job_id?: string;
	readonly web_job_name?: string;
}
export interface TriggeredWebJobProperties {
	readonly error?: string;
	readonly extra_info_url?: string;
	readonly history_url?: string;
	readonly latest_run?: TriggeredJobRun;
	readonly run_command?: string;
	readonly scheduler_logs_url?: string;
	readonly settings?: TriggeredWebJobPropertiesSettings;
	readonly url?: string;
	readonly using_sdk?: boolean;
	readonly web_job_type?: "Continuous";
}
export interface TriggeredWebJobPropertiesSettings {
	readonly [key: string]: any;
}
export interface Twitter {
	readonly enabled?: boolean;
	readonly registration?: TwitterRegistration;
}
export interface TwitterRegistration {
	readonly consumerKey?: string;
	readonly consumerSecretSettingName?: string;
}
export interface UserProperties {
	readonly publishingPassword?: string;
	readonly publishingPasswordHash?: string;
	readonly publishingPasswordHashSalt?: string;
	readonly publishingUserName: string;
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
	readonly serviceName?: string;
	readonly virtualIP?: string;
}
export interface VirtualNetworkProfile {
	readonly id: string;
	readonly name?: string;
	readonly subnet?: string;
	readonly type?: string;
}
export interface VnetGatewayProperties {
	readonly vnetName?: string;
	readonly vpnPackageUri: string;
}
export interface VnetInfo {
	readonly id?: string;
	readonly kind?: string;
	readonly name?: string;
	readonly properties?: VnetInfoProperties;
	readonly type?: string;
}
export interface VnetInfoProperties {
	readonly certBlob?: string;
	readonly certThumbprint?: string;
	readonly dnsServers?: string;
	readonly isSwift?: boolean;
	readonly resyncRequired?: boolean;
	readonly routes?: VnetRoute[];
	readonly vnetResourceId?: string;
}
export interface VnetRoute {
	readonly id?: string;
	readonly kind?: string;
	readonly name?: string;
	readonly properties?: VnetRouteProperties;
	readonly type?: string;
}
export interface VnetRouteProperties {
	readonly endAddress?: string;
	readonly routeType?: "DEFAULT" | "INHERITED" | "STATIC";
}
export interface WebJobProperties {
	readonly error?: string;
	readonly extra_info_url?: string;
	readonly run_command?: string;
	readonly settings?: WebJobPropertiesSettings;
	readonly url?: string;
	readonly using_sdk?: boolean;
	readonly web_job_type?: "Continuous";
}
export interface WebJobPropertiesSettings {
	readonly [key: string]: any;
}
export interface WebSiteInstanceStatusProperties {
	readonly consoleUrl?: string;
	readonly containers?: WebSiteInstanceStatusPropertiesContainers;
	readonly detectorUrl?: string;
	readonly healthCheckUrl?: string;
	readonly state?: "READY" | "STOPPED";
	readonly statusUrl?: string;
}
export interface WebSiteInstanceStatusPropertiesContainers {
	readonly [key: string]: ContainerInfo;
}
export interface WorkerPool {
	readonly computeMode?: "Dedicated" | "Dynamic";
	readonly instanceNames?: string[];
	readonly workerCount?: number;
	readonly workerSize?: string;
	readonly workerSizeId?: number;
}
export type sites_basicPublishingCredentialsPolicies =
	| sites_basicPublishingCredentialsPolicies_ftp
	| sites_basicPublishingCredentialsPolicies_scm;
export type sites_config =
	| sites_config_appsettings
	| sites_config_authsettings
	| sites_config_authsettingsV2
	| sites_config_azurestorageaccounts
	| sites_config_backup
	| sites_config_connectionstrings
	| sites_config_logs
	| sites_config_metadata
	| sites_config_pushsettings
	| sites_config_slotConfigNames
	| sites_config_web;
export type sites_slots_basicPublishingCredentialsPolicies =
	| sites_slots_basicPublishingCredentialsPolicies_ftp
	| sites_slots_basicPublishingCredentialsPolicies_scm;
export type sites_slots_config =
	| sites_slots_config_appsettings
	| sites_slots_config_authsettings
	| sites_slots_config_authsettingsV2
	| sites_slots_config_azurestorageaccounts
	| sites_slots_config_backup
	| sites_slots_config_connectionstrings
	| sites_slots_config_logs
	| sites_slots_config_metadata
	| sites_slots_config_pushsettings
	| sites_slots_config_web;
export type staticSites_builds_config =
	| staticSites_builds_config_appsettings
	| staticSites_builds_config_functionappsettings;
export type staticSites_config = staticSites_config_appsettings | staticSites_config_functionappsettings;
export default {
	certificates: certificates,
	deletedSites: deletedSites,
	hostingEnvironments: hostingEnvironments,
	"hostingEnvironments/capacities": hostingEnvironments_capacities,
	"hostingEnvironments/configurations": hostingEnvironments_configurations,
	"hostingEnvironments/detectors": hostingEnvironments_detectors,
	"hostingEnvironments/multiRolePools": hostingEnvironments_multiRolePools,
	"hostingEnvironments/privateEndpointConnections": hostingEnvironments_privateEndpointConnections,
	"hostingEnvironments/recommendations": hostingEnvironments_recommendations,
	"hostingEnvironments/workerPools": hostingEnvironments_workerPools,
	"locations/deletedSites": locations_deletedSites,
	publishingUsers: publishingUsers,
	serverfarms: serverfarms,
	"serverfarms/hybridConnectionNamespaces/relays": serverfarms_hybridConnectionNamespaces_relays,
	"serverfarms/hybridConnectionPlanLimits": serverfarms_hybridConnectionPlanLimits,
	"serverfarms/virtualNetworkConnections": serverfarms_virtualNetworkConnections,
	"serverfarms/virtualNetworkConnections/gateways": serverfarms_virtualNetworkConnections_gateways,
	"serverfarms/virtualNetworkConnections/routes": serverfarms_virtualNetworkConnections_routes,
	sites: sites,
	"sites/backups": sites_backups,
	"sites/basicPublishingCredentialsPolicies/ftp": sites_basicPublishingCredentialsPolicies_ftp,
	"sites/basicPublishingCredentialsPolicies/scm": sites_basicPublishingCredentialsPolicies_scm,
	"sites/config/appsettings": sites_config_appsettings,
	"sites/config/authsettings": sites_config_authsettings,
	"sites/config/authsettingsV2": sites_config_authsettingsV2,
	"sites/config/azurestorageaccounts": sites_config_azurestorageaccounts,
	"sites/config/backup": sites_config_backup,
	"sites/config/connectionstrings": sites_config_connectionstrings,
	"sites/config/logs": sites_config_logs,
	"sites/config/metadata": sites_config_metadata,
	"sites/config/pushsettings": sites_config_pushsettings,
	"sites/config/slotConfigNames": sites_config_slotConfigNames,
	"sites/config/web": sites_config_web,
	"sites/config/snapshots": sites_config_snapshots,
	"sites/continuouswebjobs": sites_continuouswebjobs,
	"sites/deployments": sites_deployments,
	"sites/detectors": sites_detectors,
	"sites/diagnostics": sites_diagnostics,
	"sites/diagnostics/analyses": sites_diagnostics_analyses,
	"sites/diagnostics/detectors": sites_diagnostics_detectors,
	"sites/domainOwnershipIdentifiers": sites_domainOwnershipIdentifiers,
	"sites/extensions": sites_extensions,
	"sites/functions": sites_functions,
	"sites/functions/keys": sites_functions_keys,
	"sites/hostNameBindings": sites_hostNameBindings,
	"sites/hybridconnection": sites_hybridconnection,
	"sites/hybridConnectionNamespaces/relays": sites_hybridConnectionNamespaces_relays,
	"sites/instances": sites_instances,
	"sites/instances/extensions": sites_instances_extensions,
	"sites/instances/processes": sites_instances_processes,
	"sites/instances/processes/modules": sites_instances_processes_modules,
	"sites/migratemysql": sites_migratemysql,
	"sites/networkConfig": sites_networkConfig,
	"sites/networkFeatures": sites_networkFeatures,
	"sites/premieraddons": sites_premieraddons,
	"sites/privateAccess": sites_privateAccess,
	"sites/privateEndpointConnections": sites_privateEndpointConnections,
	"sites/processes": sites_processes,
	"sites/processes/modules": sites_processes_modules,
	"sites/publicCertificates": sites_publicCertificates,
	"sites/recommendations": sites_recommendations,
	"sites/resourceHealthMetadata": sites_resourceHealthMetadata,
	"sites/siteextensions": sites_siteextensions,
	"sites/slots": sites_slots,
	"sites/slots/backups": sites_slots_backups,
	"sites/slots/basicPublishingCredentialsPolicies/ftp": sites_slots_basicPublishingCredentialsPolicies_ftp,
	"sites/slots/basicPublishingCredentialsPolicies/scm": sites_slots_basicPublishingCredentialsPolicies_scm,
	"sites/slots/config/appsettings": sites_slots_config_appsettings,
	"sites/slots/config/authsettings": sites_slots_config_authsettings,
	"sites/slots/config/authsettingsV2": sites_slots_config_authsettingsV2,
	"sites/slots/config/azurestorageaccounts": sites_slots_config_azurestorageaccounts,
	"sites/slots/config/backup": sites_slots_config_backup,
	"sites/slots/config/connectionstrings": sites_slots_config_connectionstrings,
	"sites/slots/config/logs": sites_slots_config_logs,
	"sites/slots/config/metadata": sites_slots_config_metadata,
	"sites/slots/config/pushsettings": sites_slots_config_pushsettings,
	"sites/slots/config/web": sites_slots_config_web,
	"sites/slots/config/snapshots": sites_slots_config_snapshots,
	"sites/slots/continuouswebjobs": sites_slots_continuouswebjobs,
	"sites/slots/deployments": sites_slots_deployments,
	"sites/slots/detectors": sites_slots_detectors,
	"sites/slots/diagnostics": sites_slots_diagnostics,
	"sites/slots/diagnostics/analyses": sites_slots_diagnostics_analyses,
	"sites/slots/diagnostics/detectors": sites_slots_diagnostics_detectors,
	"sites/slots/domainOwnershipIdentifiers": sites_slots_domainOwnershipIdentifiers,
	"sites/slots/extensions": sites_slots_extensions,
	"sites/slots/functions": sites_slots_functions,
	"sites/slots/functions/keys": sites_slots_functions_keys,
	"sites/slots/hostNameBindings": sites_slots_hostNameBindings,
	"sites/slots/hybridconnection": sites_slots_hybridconnection,
	"sites/slots/hybridConnectionNamespaces/relays": sites_slots_hybridConnectionNamespaces_relays,
	"sites/slots/instances": sites_slots_instances,
	"sites/slots/instances/extensions": sites_slots_instances_extensions,
	"sites/slots/instances/processes": sites_slots_instances_processes,
	"sites/slots/instances/processes/modules": sites_slots_instances_processes_modules,
	"sites/slots/migratemysql": sites_slots_migratemysql,
	"sites/slots/networkConfig": sites_slots_networkConfig,
	"sites/slots/networkFeatures": sites_slots_networkFeatures,
	"sites/slots/premieraddons": sites_slots_premieraddons,
	"sites/slots/privateAccess": sites_slots_privateAccess,
	"sites/slots/privateEndpointConnections": sites_slots_privateEndpointConnections,
	"sites/slots/processes": sites_slots_processes,
	"sites/slots/processes/modules": sites_slots_processes_modules,
	"sites/slots/publicCertificates": sites_slots_publicCertificates,
	"sites/slots/resourceHealthMetadata": sites_slots_resourceHealthMetadata,
	"sites/slots/siteextensions": sites_slots_siteextensions,
	"sites/slots/sourcecontrols": sites_slots_sourcecontrols,
	"sites/slots/triggeredwebjobs": sites_slots_triggeredwebjobs,
	"sites/slots/triggeredwebjobs/history": sites_slots_triggeredwebjobs_history,
	"sites/slots/virtualNetworkConnections": sites_slots_virtualNetworkConnections,
	"sites/slots/virtualNetworkConnections/gateways": sites_slots_virtualNetworkConnections_gateways,
	"sites/slots/webjobs": sites_slots_webjobs,
	"sites/sourcecontrols": sites_sourcecontrols,
	"sites/triggeredwebjobs": sites_triggeredwebjobs,
	"sites/triggeredwebjobs/history": sites_triggeredwebjobs_history,
	"sites/virtualNetworkConnections": sites_virtualNetworkConnections,
	"sites/virtualNetworkConnections/gateways": sites_virtualNetworkConnections_gateways,
	"sites/webjobs": sites_webjobs,
	sourcecontrols: sourcecontrols,
	staticSites: staticSites,
	"staticSites/builds": staticSites_builds,
	"staticSites/builds/config/appsettings": staticSites_builds_config_appsettings,
	"staticSites/builds/config/functionappsettings": staticSites_builds_config_functionappsettings,
	"staticSites/builds/userProvidedFunctionApps": staticSites_builds_userProvidedFunctionApps,
	"staticSites/config/appsettings": staticSites_config_appsettings,
	"staticSites/config/functionappsettings": staticSites_config_functionappsettings,
	"staticSites/customDomains": staticSites_customDomains,
	"staticSites/privateEndpointConnections": staticSites_privateEndpointConnections,
	"staticSites/userProvidedFunctionApps": staticSites_userProvidedFunctionApps,
};

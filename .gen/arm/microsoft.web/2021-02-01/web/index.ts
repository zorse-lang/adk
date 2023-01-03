import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class certificates extends ArmResource<certificatesComponentInputs> implements certificatesComponentOutputs {
	constructor(entity: ADKEntity, options: certificatesComponentInputs) {
		super(entity, options.name, "Microsoft.Web/certificates", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/certificates";
}
export interface certificatesComponentOutputs {
	readonly apiVersion: "2021-02-01";
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
export class deletedSites extends ArmResource<deletedSitesComponentInputs> implements deletedSitesComponentOutputs {
	constructor(entity: ADKEntity, options: deletedSitesComponentInputs) {
		super(entity, options.name, "Microsoft.Web/deletedSites", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/deletedSites";
}
export interface deletedSitesComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/deletedSites";
}
export interface deletedSitesComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: DeletedSiteProperties | undefined;
}
export class hostingEnvironments
	extends ArmResource<hostingEnvironmentsComponentInputs>
	implements hostingEnvironmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: hostingEnvironmentsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/hostingEnvironments", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/hostingEnvironments";
}
export interface hostingEnvironmentsComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/hostingEnvironments";
}
export interface hostingEnvironmentsComponentInputs {
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: AppServiceEnvironment | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class hostingEnvironments_capacities
	extends ArmResource<hostingEnvironments_capacitiesComponentInputs>
	implements hostingEnvironments_capacitiesComponentOutputs
{
	constructor(entity: ADKEntity, options: hostingEnvironments_capacitiesComponentInputs) {
		super(entity, options.name, "Microsoft.Web/hostingEnvironments/capacities", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/hostingEnvironments/capacities";
}
export interface hostingEnvironments_capacitiesComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/hostingEnvironments/capacities";
}
export interface hostingEnvironments_capacitiesComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: AddressResponseProperties | undefined;
}
export class hostingEnvironments_configurations
	extends ArmResource<hostingEnvironments_configurationsComponentInputs>
	implements hostingEnvironments_configurationsComponentOutputs
{
	constructor(entity: ADKEntity, options: hostingEnvironments_configurationsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/hostingEnvironments/configurations", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/hostingEnvironments/configurations";
}
export interface hostingEnvironments_configurationsComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/hostingEnvironments/configurations";
}
export interface hostingEnvironments_configurationsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: AseV3NetworkingConfigurationProperties | undefined;
}
export class hostingEnvironments_detectors
	extends ArmResource<hostingEnvironments_detectorsComponentInputs>
	implements hostingEnvironments_detectorsComponentOutputs
{
	constructor(entity: ADKEntity, options: hostingEnvironments_detectorsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/hostingEnvironments/detectors", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/hostingEnvironments/detectors";
}
export interface hostingEnvironments_detectorsComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/hostingEnvironments/detectors";
}
export interface hostingEnvironments_detectorsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: DetectorResponseProperties | undefined;
}
export class hostingEnvironments_multiRolePools
	extends ArmResource<hostingEnvironments_multiRolePoolsComponentInputs>
	implements hostingEnvironments_multiRolePoolsComponentOutputs
{
	constructor(entity: ADKEntity, options: hostingEnvironments_multiRolePoolsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/hostingEnvironments/multiRolePools", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/hostingEnvironments/multiRolePools";
}
export interface hostingEnvironments_multiRolePoolsComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/hostingEnvironments/multiRolePools";
}
export interface hostingEnvironments_multiRolePoolsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: WorkerPool | undefined;
	readonly sku?: SkuDescription | undefined;
}
export class hostingEnvironments_privateEndpointConnections
	extends ArmResource<hostingEnvironments_privateEndpointConnectionsComponentInputs>
	implements hostingEnvironments_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: hostingEnvironments_privateEndpointConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/hostingEnvironments/privateEndpointConnections", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/hostingEnvironments/privateEndpointConnections";
}
export interface hostingEnvironments_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/hostingEnvironments/privateEndpointConnections";
}
export interface hostingEnvironments_privateEndpointConnectionsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?:
		| PrivateLinkConnectionApprovalRequestOrRemotePrivateEndpointConnectionARMResourceProperties
		| undefined;
}
export class hostingEnvironments_recommendations
	extends ArmResource<hostingEnvironments_recommendationsComponentInputs>
	implements hostingEnvironments_recommendationsComponentOutputs
{
	constructor(entity: ADKEntity, options: hostingEnvironments_recommendationsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/hostingEnvironments/recommendations", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/hostingEnvironments/recommendations";
}
export interface hostingEnvironments_recommendationsComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/hostingEnvironments/recommendations";
}
export interface hostingEnvironments_recommendationsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: RecommendationRuleProperties | undefined;
}
export class hostingEnvironments_workerPools
	extends ArmResource<hostingEnvironments_workerPoolsComponentInputs>
	implements hostingEnvironments_workerPoolsComponentOutputs
{
	constructor(entity: ADKEntity, options: hostingEnvironments_workerPoolsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/hostingEnvironments/workerPools", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/hostingEnvironments/workerPools";
}
export interface hostingEnvironments_workerPoolsComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/hostingEnvironments/workerPools";
}
export interface hostingEnvironments_workerPoolsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: WorkerPool | undefined;
	readonly sku?: SkuDescription | undefined;
}
export class kubeEnvironments
	extends ArmResource<kubeEnvironmentsComponentInputs>
	implements kubeEnvironmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: kubeEnvironmentsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/kubeEnvironments", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/kubeEnvironments";
}
export interface kubeEnvironmentsComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/kubeEnvironments";
}
export interface kubeEnvironmentsComponentInputs {
	readonly extendedLocation?: ExtendedLocation | undefined;
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: KubeEnvironmentProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class locations_deletedSites
	extends ArmResource<locations_deletedSitesComponentInputs>
	implements locations_deletedSitesComponentOutputs
{
	constructor(entity: ADKEntity, options: locations_deletedSitesComponentInputs) {
		super(entity, options.name, "Microsoft.Web/locations/deletedSites", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/locations/deletedSites";
}
export interface locations_deletedSitesComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/locations/deletedSites";
}
export interface locations_deletedSitesComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: DeletedSiteProperties | undefined;
}
export class publishingUsers
	extends ArmResource<publishingUsersComponentInputs>
	implements publishingUsersComponentOutputs
{
	constructor(entity: ADKEntity, options: publishingUsersComponentInputs) {
		super(entity, options.name, "Microsoft.Web/publishingUsers", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/publishingUsers";
}
export interface publishingUsersComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/publishingUsers";
}
export interface publishingUsersComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: UserProperties | undefined;
}
export class serverfarms extends ArmResource<serverfarmsComponentInputs> implements serverfarmsComponentOutputs {
	constructor(entity: ADKEntity, options: serverfarmsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/serverfarms", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/serverfarms";
}
export interface serverfarmsComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/serverfarms";
}
export interface serverfarmsComponentInputs {
	readonly extendedLocation?: ExtendedLocation | undefined;
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: AppServicePlanProperties | undefined;
	readonly sku?: SkuDescription | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class serverfarms_hybridConnectionNamespaces_relays
	extends ArmResource<serverfarms_hybridConnectionNamespaces_relaysComponentInputs>
	implements serverfarms_hybridConnectionNamespaces_relaysComponentOutputs
{
	constructor(entity: ADKEntity, options: serverfarms_hybridConnectionNamespaces_relaysComponentInputs) {
		super(entity, options.name, "Microsoft.Web/serverfarms/hybridConnectionNamespaces/relays", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/serverfarms/hybridConnectionNamespaces/relays";
}
export interface serverfarms_hybridConnectionNamespaces_relaysComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/serverfarms/hybridConnectionNamespaces/relays";
}
export interface serverfarms_hybridConnectionNamespaces_relaysComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: HybridConnectionProperties | undefined;
}
export class serverfarms_hybridConnectionPlanLimits
	extends ArmResource<serverfarms_hybridConnectionPlanLimitsComponentInputs>
	implements serverfarms_hybridConnectionPlanLimitsComponentOutputs
{
	constructor(entity: ADKEntity, options: serverfarms_hybridConnectionPlanLimitsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/serverfarms/hybridConnectionPlanLimits", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/serverfarms/hybridConnectionPlanLimits";
}
export interface serverfarms_hybridConnectionPlanLimitsComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/serverfarms/hybridConnectionPlanLimits";
}
export interface serverfarms_hybridConnectionPlanLimitsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: HybridConnectionLimitsProperties | undefined;
}
export class serverfarms_virtualNetworkConnections
	extends ArmResource<serverfarms_virtualNetworkConnectionsComponentInputs>
	implements serverfarms_virtualNetworkConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: serverfarms_virtualNetworkConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/serverfarms/virtualNetworkConnections", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/serverfarms/virtualNetworkConnections";
}
export interface serverfarms_virtualNetworkConnectionsComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/serverfarms/virtualNetworkConnections";
}
export interface serverfarms_virtualNetworkConnectionsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: VnetInfo | undefined;
}
export class serverfarms_virtualNetworkConnections_gateways
	extends ArmResource<serverfarms_virtualNetworkConnections_gatewaysComponentInputs>
	implements serverfarms_virtualNetworkConnections_gatewaysComponentOutputs
{
	constructor(entity: ADKEntity, options: serverfarms_virtualNetworkConnections_gatewaysComponentInputs) {
		super(entity, options.name, "Microsoft.Web/serverfarms/virtualNetworkConnections/gateways", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/serverfarms/virtualNetworkConnections/gateways";
}
export interface serverfarms_virtualNetworkConnections_gatewaysComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/serverfarms/virtualNetworkConnections/gateways";
}
export interface serverfarms_virtualNetworkConnections_gatewaysComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: VnetGatewayProperties | undefined;
}
export class serverfarms_virtualNetworkConnections_routes
	extends ArmResource<serverfarms_virtualNetworkConnections_routesComponentInputs>
	implements serverfarms_virtualNetworkConnections_routesComponentOutputs
{
	constructor(entity: ADKEntity, options: serverfarms_virtualNetworkConnections_routesComponentInputs) {
		super(entity, options.name, "Microsoft.Web/serverfarms/virtualNetworkConnections/routes", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/serverfarms/virtualNetworkConnections/routes";
}
export interface serverfarms_virtualNetworkConnections_routesComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/serverfarms/virtualNetworkConnections/routes";
}
export interface serverfarms_virtualNetworkConnections_routesComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: VnetRouteProperties | undefined;
}
export class sites extends ArmResource<sitesComponentInputs> implements sitesComponentOutputs {
	constructor(entity: ADKEntity, options: sitesComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites";
}
export interface sitesComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites";
}
export interface sitesComponentInputs {
	readonly extendedLocation?: ExtendedLocation | undefined;
	readonly identity?: ManagedServiceIdentity | undefined;
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: SiteProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class sites_backups extends ArmResource<sites_backupsComponentInputs> implements sites_backupsComponentOutputs {
	constructor(entity: ADKEntity, options: sites_backupsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/backups", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/backups";
}
export interface sites_backupsComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/backups";
}
export interface sites_backupsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: BackupItemProperties | undefined;
}
export class sites_basicPublishingCredentialsPolicies_ftp
	extends ArmResource<sites_basicPublishingCredentialsPolicies_ftpComponentInputs>
	implements sites_basicPublishingCredentialsPolicies_ftpComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_basicPublishingCredentialsPolicies_ftpComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/basicPublishingCredentialsPolicies", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/basicPublishingCredentialsPolicies";
}
export interface sites_basicPublishingCredentialsPolicies_ftpComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/basicPublishingCredentialsPolicies";
}
export interface sites_basicPublishingCredentialsPolicies_ftpComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: CsmPublishingCredentialsPoliciesEntityProperties | undefined;
}
export class sites_basicPublishingCredentialsPolicies_scm
	extends ArmResource<sites_basicPublishingCredentialsPolicies_scmComponentInputs>
	implements sites_basicPublishingCredentialsPolicies_scmComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_basicPublishingCredentialsPolicies_scmComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/basicPublishingCredentialsPolicies", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/basicPublishingCredentialsPolicies";
}
export interface sites_basicPublishingCredentialsPolicies_scmComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/basicPublishingCredentialsPolicies";
}
export interface sites_basicPublishingCredentialsPolicies_scmComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: CsmPublishingCredentialsPoliciesEntityProperties | undefined;
}
export class sites_config_appsettings
	extends ArmResource<sites_config_appsettingsComponentInputs>
	implements sites_config_appsettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_config_appsettingsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/config", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_appsettingsComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_appsettingsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: StringDictionaryProperties | undefined;
}
export class sites_config_authsettings
	extends ArmResource<sites_config_authsettingsComponentInputs>
	implements sites_config_authsettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_config_authsettingsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/config", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_authsettingsComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_authsettingsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: SiteAuthSettingsProperties | undefined;
}
export class sites_config_authsettingsV2
	extends ArmResource<sites_config_authsettingsV2ComponentInputs>
	implements sites_config_authsettingsV2ComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_config_authsettingsV2ComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/config", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_authsettingsV2ComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_authsettingsV2ComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: SiteAuthSettingsV2Properties | undefined;
}
export class sites_config_azurestorageaccounts
	extends ArmResource<sites_config_azurestorageaccountsComponentInputs>
	implements sites_config_azurestorageaccountsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_config_azurestorageaccountsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/config", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_azurestorageaccountsComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_azurestorageaccountsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: AzureStoragePropertyDictionaryResourceProperties | undefined;
}
export class sites_config_backup
	extends ArmResource<sites_config_backupComponentInputs>
	implements sites_config_backupComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_config_backupComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/config", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_backupComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_backupComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: BackupRequestProperties | undefined;
}
export class sites_config_connectionstrings
	extends ArmResource<sites_config_connectionstringsComponentInputs>
	implements sites_config_connectionstringsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_config_connectionstringsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/config", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_connectionstringsComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_connectionstringsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: ConnectionStringDictionaryProperties | undefined;
}
export class sites_config_logs
	extends ArmResource<sites_config_logsComponentInputs>
	implements sites_config_logsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_config_logsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/config", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_logsComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_logsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: SiteLogsConfigProperties | undefined;
}
export class sites_config_metadata
	extends ArmResource<sites_config_metadataComponentInputs>
	implements sites_config_metadataComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_config_metadataComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/config", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_metadataComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_metadataComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: StringDictionaryProperties | undefined;
}
export class sites_config_pushsettings
	extends ArmResource<sites_config_pushsettingsComponentInputs>
	implements sites_config_pushsettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_config_pushsettingsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/config", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_pushsettingsComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_pushsettingsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: PushSettingsProperties | undefined;
}
export class sites_config_slotConfigNames
	extends ArmResource<sites_config_slotConfigNamesComponentInputs>
	implements sites_config_slotConfigNamesComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_config_slotConfigNamesComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/config", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_slotConfigNamesComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_slotConfigNamesComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: SlotConfigNames | undefined;
}
export class sites_config_web
	extends ArmResource<sites_config_webComponentInputs>
	implements sites_config_webComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_config_webComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/config", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_webComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_webComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: SiteConfig | undefined;
}
export class sites_config_snapshots
	extends ArmResource<sites_config_snapshotsComponentInputs>
	implements sites_config_snapshotsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_config_snapshotsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/config/snapshots", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/config/snapshots";
}
export interface sites_config_snapshotsComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/config/snapshots";
}
export interface sites_config_snapshotsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: SiteConfig | undefined;
}
export class sites_continuouswebjobs
	extends ArmResource<sites_continuouswebjobsComponentInputs>
	implements sites_continuouswebjobsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_continuouswebjobsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/continuouswebjobs", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/continuouswebjobs";
}
export interface sites_continuouswebjobsComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/continuouswebjobs";
}
export interface sites_continuouswebjobsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: ContinuousWebJobProperties | undefined;
}
export class sites_deployments
	extends ArmResource<sites_deploymentsComponentInputs>
	implements sites_deploymentsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_deploymentsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/deployments", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/deployments";
}
export interface sites_deploymentsComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/deployments";
}
export interface sites_deploymentsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: DeploymentProperties | undefined;
}
export class sites_detectors
	extends ArmResource<sites_detectorsComponentInputs>
	implements sites_detectorsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_detectorsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/detectors", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/detectors";
}
export interface sites_detectorsComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/detectors";
}
export interface sites_detectorsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: DetectorResponseProperties | undefined;
}
export class sites_diagnostics
	extends ArmResource<sites_diagnosticsComponentInputs>
	implements sites_diagnosticsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_diagnosticsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/diagnostics", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/diagnostics";
}
export interface sites_diagnosticsComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/diagnostics";
}
export interface sites_diagnosticsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: DiagnosticCategoryProperties | undefined;
}
export class sites_diagnostics_analyses
	extends ArmResource<sites_diagnostics_analysesComponentInputs>
	implements sites_diagnostics_analysesComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_diagnostics_analysesComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/diagnostics/analyses", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/diagnostics/analyses";
}
export interface sites_diagnostics_analysesComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/diagnostics/analyses";
}
export interface sites_diagnostics_analysesComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: AnalysisDefinitionProperties | undefined;
}
export class sites_diagnostics_detectors
	extends ArmResource<sites_diagnostics_detectorsComponentInputs>
	implements sites_diagnostics_detectorsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_diagnostics_detectorsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/diagnostics/detectors", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/diagnostics/detectors";
}
export interface sites_diagnostics_detectorsComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/diagnostics/detectors";
}
export interface sites_diagnostics_detectorsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: DetectorDefinition | undefined;
}
export class sites_domainOwnershipIdentifiers
	extends ArmResource<sites_domainOwnershipIdentifiersComponentInputs>
	implements sites_domainOwnershipIdentifiersComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_domainOwnershipIdentifiersComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/domainOwnershipIdentifiers", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/domainOwnershipIdentifiers";
}
export interface sites_domainOwnershipIdentifiersComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/domainOwnershipIdentifiers";
}
export interface sites_domainOwnershipIdentifiersComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: IdentifierProperties | undefined;
}
export class sites_extensions
	extends ArmResource<sites_extensionsComponentInputs>
	implements sites_extensionsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_extensionsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/extensions", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/extensions";
}
export interface sites_extensionsComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/extensions";
}
export interface sites_extensionsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: MSDeployCoreOrMSDeployStatusProperties | undefined;
}
export class sites_functions
	extends ArmResource<sites_functionsComponentInputs>
	implements sites_functionsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_functionsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/functions", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/functions";
}
export interface sites_functionsComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/functions";
}
export interface sites_functionsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: FunctionEnvelopeProperties | undefined;
}
export class sites_functions_keys
	extends ArmResource<sites_functions_keysComponentInputs>
	implements sites_functions_keysComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_functions_keysComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/functions/keys", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/functions/keys";
}
export interface sites_functions_keysComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/functions/keys";
}
export interface sites_functions_keysComponentInputs {
	readonly name: string;
	readonly value?: string | undefined;
}
export class sites_hostNameBindings
	extends ArmResource<sites_hostNameBindingsComponentInputs>
	implements sites_hostNameBindingsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_hostNameBindingsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/hostNameBindings", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/hostNameBindings";
}
export interface sites_hostNameBindingsComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/hostNameBindings";
}
export interface sites_hostNameBindingsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: HostNameBindingProperties | undefined;
}
export class sites_hybridconnection
	extends ArmResource<sites_hybridconnectionComponentInputs>
	implements sites_hybridconnectionComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_hybridconnectionComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/hybridconnection", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/hybridconnection";
}
export interface sites_hybridconnectionComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/hybridconnection";
}
export interface sites_hybridconnectionComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: RelayServiceConnectionEntityProperties | undefined;
}
export class sites_hybridConnectionNamespaces_relays
	extends ArmResource<sites_hybridConnectionNamespaces_relaysComponentInputs>
	implements sites_hybridConnectionNamespaces_relaysComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_hybridConnectionNamespaces_relaysComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/hybridConnectionNamespaces/relays", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/hybridConnectionNamespaces/relays";
}
export interface sites_hybridConnectionNamespaces_relaysComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/hybridConnectionNamespaces/relays";
}
export interface sites_hybridConnectionNamespaces_relaysComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: HybridConnectionProperties | undefined;
}
export class sites_instances
	extends ArmResource<sites_instancesComponentInputs>
	implements sites_instancesComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_instancesComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/instances", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/instances";
}
export interface sites_instancesComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/instances";
}
export interface sites_instancesComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: WebSiteInstanceStatusProperties | undefined;
}
export class sites_instances_extensions
	extends ArmResource<sites_instances_extensionsComponentInputs>
	implements sites_instances_extensionsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_instances_extensionsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/instances/extensions", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/instances/extensions";
}
export interface sites_instances_extensionsComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/instances/extensions";
}
export interface sites_instances_extensionsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: MSDeployCoreOrMSDeployStatusProperties | undefined;
}
export class sites_instances_processes
	extends ArmResource<sites_instances_processesComponentInputs>
	implements sites_instances_processesComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_instances_processesComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/instances/processes", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/instances/processes";
}
export interface sites_instances_processesComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/instances/processes";
}
export interface sites_instances_processesComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: ProcessInfoProperties | undefined;
}
export class sites_instances_processes_modules
	extends ArmResource<sites_instances_processes_modulesComponentInputs>
	implements sites_instances_processes_modulesComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_instances_processes_modulesComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/instances/processes/modules", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/instances/processes/modules";
}
export interface sites_instances_processes_modulesComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/instances/processes/modules";
}
export interface sites_instances_processes_modulesComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: ProcessModuleInfoProperties | undefined;
}
export class sites_migratemysql
	extends ArmResource<sites_migratemysqlComponentInputs>
	implements sites_migratemysqlComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_migratemysqlComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/migratemysql", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/migratemysql";
}
export interface sites_migratemysqlComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/migratemysql";
}
export interface sites_migratemysqlComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: MigrateMySqlStatusProperties | undefined;
}
export class sites_networkConfig
	extends ArmResource<sites_networkConfigComponentInputs>
	implements sites_networkConfigComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_networkConfigComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/networkConfig", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/networkConfig";
}
export interface sites_networkConfigComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/networkConfig";
}
export interface sites_networkConfigComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: SwiftVirtualNetworkProperties | undefined;
}
export class sites_networkFeatures
	extends ArmResource<sites_networkFeaturesComponentInputs>
	implements sites_networkFeaturesComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_networkFeaturesComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/networkFeatures", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/networkFeatures";
}
export interface sites_networkFeaturesComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/networkFeatures";
}
export interface sites_networkFeaturesComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: NetworkFeaturesProperties | undefined;
}
export class sites_premieraddons
	extends ArmResource<sites_premieraddonsComponentInputs>
	implements sites_premieraddonsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_premieraddonsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/premieraddons", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/premieraddons";
}
export interface sites_premieraddonsComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/premieraddons";
}
export interface sites_premieraddonsComponentInputs {
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: PremierAddOnProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class sites_privateAccess
	extends ArmResource<sites_privateAccessComponentInputs>
	implements sites_privateAccessComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_privateAccessComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/privateAccess", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/privateAccess";
}
export interface sites_privateAccessComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/privateAccess";
}
export interface sites_privateAccessComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: PrivateAccessProperties | undefined;
}
export class sites_privateEndpointConnections
	extends ArmResource<sites_privateEndpointConnectionsComponentInputs>
	implements sites_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_privateEndpointConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/privateEndpointConnections", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/privateEndpointConnections";
}
export interface sites_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/privateEndpointConnections";
}
export interface sites_privateEndpointConnectionsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?:
		| PrivateLinkConnectionApprovalRequestOrRemotePrivateEndpointConnectionARMResourceProperties
		| undefined;
}
export class sites_processes
	extends ArmResource<sites_processesComponentInputs>
	implements sites_processesComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_processesComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/processes", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/processes";
}
export interface sites_processesComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/processes";
}
export interface sites_processesComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: ProcessInfoProperties | undefined;
}
export class sites_processes_modules
	extends ArmResource<sites_processes_modulesComponentInputs>
	implements sites_processes_modulesComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_processes_modulesComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/processes/modules", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/processes/modules";
}
export interface sites_processes_modulesComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/processes/modules";
}
export interface sites_processes_modulesComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: ProcessModuleInfoProperties | undefined;
}
export class sites_publicCertificates
	extends ArmResource<sites_publicCertificatesComponentInputs>
	implements sites_publicCertificatesComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_publicCertificatesComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/publicCertificates", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/publicCertificates";
}
export interface sites_publicCertificatesComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/publicCertificates";
}
export interface sites_publicCertificatesComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: PublicCertificateProperties | undefined;
}
export class sites_recommendations
	extends ArmResource<sites_recommendationsComponentInputs>
	implements sites_recommendationsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_recommendationsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/recommendations", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/recommendations";
}
export interface sites_recommendationsComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/recommendations";
}
export interface sites_recommendationsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: RecommendationRuleProperties | undefined;
}
export class sites_resourceHealthMetadata
	extends ArmResource<sites_resourceHealthMetadataComponentInputs>
	implements sites_resourceHealthMetadataComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_resourceHealthMetadataComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/resourceHealthMetadata", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/resourceHealthMetadata";
}
export interface sites_resourceHealthMetadataComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/resourceHealthMetadata";
}
export interface sites_resourceHealthMetadataComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: ResourceHealthMetadataProperties | undefined;
}
export class sites_siteextensions
	extends ArmResource<sites_siteextensionsComponentInputs>
	implements sites_siteextensionsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_siteextensionsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/siteextensions", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/siteextensions";
}
export interface sites_siteextensionsComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/siteextensions";
}
export interface sites_siteextensionsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: SiteExtensionInfoProperties | undefined;
}
export class sites_slots extends ArmResource<sites_slotsComponentInputs> implements sites_slotsComponentOutputs {
	constructor(entity: ADKEntity, options: sites_slotsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots";
}
export interface sites_slotsComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots";
}
export interface sites_slotsComponentInputs {
	readonly extendedLocation?: ExtendedLocation | undefined;
	readonly identity?: ManagedServiceIdentity | undefined;
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
		super(entity, options.name, "Microsoft.Web/sites/slots/backups", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/backups";
}
export interface sites_slots_backupsComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/backups";
}
export interface sites_slots_backupsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: BackupItemProperties | undefined;
}
export class sites_slots_basicPublishingCredentialsPolicies_ftp
	extends ArmResource<sites_slots_basicPublishingCredentialsPolicies_ftpComponentInputs>
	implements sites_slots_basicPublishingCredentialsPolicies_ftpComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_basicPublishingCredentialsPolicies_ftpComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/basicPublishingCredentialsPolicies", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/basicPublishingCredentialsPolicies";
}
export interface sites_slots_basicPublishingCredentialsPolicies_ftpComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/basicPublishingCredentialsPolicies";
}
export interface sites_slots_basicPublishingCredentialsPolicies_ftpComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: CsmPublishingCredentialsPoliciesEntityProperties | undefined;
}
export class sites_slots_basicPublishingCredentialsPolicies_scm
	extends ArmResource<sites_slots_basicPublishingCredentialsPolicies_scmComponentInputs>
	implements sites_slots_basicPublishingCredentialsPolicies_scmComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_basicPublishingCredentialsPolicies_scmComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/basicPublishingCredentialsPolicies", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/basicPublishingCredentialsPolicies";
}
export interface sites_slots_basicPublishingCredentialsPolicies_scmComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/basicPublishingCredentialsPolicies";
}
export interface sites_slots_basicPublishingCredentialsPolicies_scmComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: CsmPublishingCredentialsPoliciesEntityProperties | undefined;
}
export class sites_slots_config_appsettings
	extends ArmResource<sites_slots_config_appsettingsComponentInputs>
	implements sites_slots_config_appsettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_config_appsettingsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/config", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/config";
}
export interface sites_slots_config_appsettingsComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/config";
}
export interface sites_slots_config_appsettingsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: StringDictionaryProperties | undefined;
}
export class sites_slots_config_authsettings
	extends ArmResource<sites_slots_config_authsettingsComponentInputs>
	implements sites_slots_config_authsettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_config_authsettingsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/config", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/config";
}
export interface sites_slots_config_authsettingsComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/config";
}
export interface sites_slots_config_authsettingsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: SiteAuthSettingsProperties | undefined;
}
export class sites_slots_config_authsettingsV2
	extends ArmResource<sites_slots_config_authsettingsV2ComponentInputs>
	implements sites_slots_config_authsettingsV2ComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_config_authsettingsV2ComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/config", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/config";
}
export interface sites_slots_config_authsettingsV2ComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/config";
}
export interface sites_slots_config_authsettingsV2ComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: SiteAuthSettingsV2Properties | undefined;
}
export class sites_slots_config_azurestorageaccounts
	extends ArmResource<sites_slots_config_azurestorageaccountsComponentInputs>
	implements sites_slots_config_azurestorageaccountsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_config_azurestorageaccountsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/config", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/config";
}
export interface sites_slots_config_azurestorageaccountsComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/config";
}
export interface sites_slots_config_azurestorageaccountsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: AzureStoragePropertyDictionaryResourceProperties | undefined;
}
export class sites_slots_config_backup
	extends ArmResource<sites_slots_config_backupComponentInputs>
	implements sites_slots_config_backupComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_config_backupComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/config", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/config";
}
export interface sites_slots_config_backupComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/config";
}
export interface sites_slots_config_backupComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: BackupRequestProperties | undefined;
}
export class sites_slots_config_connectionstrings
	extends ArmResource<sites_slots_config_connectionstringsComponentInputs>
	implements sites_slots_config_connectionstringsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_config_connectionstringsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/config", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/config";
}
export interface sites_slots_config_connectionstringsComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/config";
}
export interface sites_slots_config_connectionstringsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: ConnectionStringDictionaryProperties | undefined;
}
export class sites_slots_config_logs
	extends ArmResource<sites_slots_config_logsComponentInputs>
	implements sites_slots_config_logsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_config_logsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/config", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/config";
}
export interface sites_slots_config_logsComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/config";
}
export interface sites_slots_config_logsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: SiteLogsConfigProperties | undefined;
}
export class sites_slots_config_metadata
	extends ArmResource<sites_slots_config_metadataComponentInputs>
	implements sites_slots_config_metadataComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_config_metadataComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/config", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/config";
}
export interface sites_slots_config_metadataComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/config";
}
export interface sites_slots_config_metadataComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: StringDictionaryProperties | undefined;
}
export class sites_slots_config_pushsettings
	extends ArmResource<sites_slots_config_pushsettingsComponentInputs>
	implements sites_slots_config_pushsettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_config_pushsettingsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/config", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/config";
}
export interface sites_slots_config_pushsettingsComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/config";
}
export interface sites_slots_config_pushsettingsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: PushSettingsProperties | undefined;
}
export class sites_slots_config_web
	extends ArmResource<sites_slots_config_webComponentInputs>
	implements sites_slots_config_webComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_config_webComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/config", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/config";
}
export interface sites_slots_config_webComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/config";
}
export interface sites_slots_config_webComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: SiteConfig | undefined;
}
export class sites_slots_config_snapshots
	extends ArmResource<sites_slots_config_snapshotsComponentInputs>
	implements sites_slots_config_snapshotsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_config_snapshotsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/config/snapshots", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/config/snapshots";
}
export interface sites_slots_config_snapshotsComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/config/snapshots";
}
export interface sites_slots_config_snapshotsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: SiteConfig | undefined;
}
export class sites_slots_continuouswebjobs
	extends ArmResource<sites_slots_continuouswebjobsComponentInputs>
	implements sites_slots_continuouswebjobsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_continuouswebjobsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/continuouswebjobs", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/continuouswebjobs";
}
export interface sites_slots_continuouswebjobsComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/continuouswebjobs";
}
export interface sites_slots_continuouswebjobsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: ContinuousWebJobProperties | undefined;
}
export class sites_slots_deployments
	extends ArmResource<sites_slots_deploymentsComponentInputs>
	implements sites_slots_deploymentsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_deploymentsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/deployments", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/deployments";
}
export interface sites_slots_deploymentsComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/deployments";
}
export interface sites_slots_deploymentsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: DeploymentProperties | undefined;
}
export class sites_slots_detectors
	extends ArmResource<sites_slots_detectorsComponentInputs>
	implements sites_slots_detectorsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_detectorsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/detectors", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/detectors";
}
export interface sites_slots_detectorsComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/detectors";
}
export interface sites_slots_detectorsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: DetectorResponseProperties | undefined;
}
export class sites_slots_diagnostics
	extends ArmResource<sites_slots_diagnosticsComponentInputs>
	implements sites_slots_diagnosticsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_diagnosticsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/diagnostics", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/diagnostics";
}
export interface sites_slots_diagnosticsComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/diagnostics";
}
export interface sites_slots_diagnosticsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: DiagnosticCategoryProperties | undefined;
}
export class sites_slots_diagnostics_analyses
	extends ArmResource<sites_slots_diagnostics_analysesComponentInputs>
	implements sites_slots_diagnostics_analysesComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_diagnostics_analysesComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/diagnostics/analyses", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/diagnostics/analyses";
}
export interface sites_slots_diagnostics_analysesComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/diagnostics/analyses";
}
export interface sites_slots_diagnostics_analysesComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: AnalysisDefinitionProperties | undefined;
}
export class sites_slots_diagnostics_detectors
	extends ArmResource<sites_slots_diagnostics_detectorsComponentInputs>
	implements sites_slots_diagnostics_detectorsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_diagnostics_detectorsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/diagnostics/detectors", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/diagnostics/detectors";
}
export interface sites_slots_diagnostics_detectorsComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/diagnostics/detectors";
}
export interface sites_slots_diagnostics_detectorsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: DetectorDefinition | undefined;
}
export class sites_slots_domainOwnershipIdentifiers
	extends ArmResource<sites_slots_domainOwnershipIdentifiersComponentInputs>
	implements sites_slots_domainOwnershipIdentifiersComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_domainOwnershipIdentifiersComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/domainOwnershipIdentifiers", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/domainOwnershipIdentifiers";
}
export interface sites_slots_domainOwnershipIdentifiersComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/domainOwnershipIdentifiers";
}
export interface sites_slots_domainOwnershipIdentifiersComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: IdentifierProperties | undefined;
}
export class sites_slots_extensions
	extends ArmResource<sites_slots_extensionsComponentInputs>
	implements sites_slots_extensionsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_extensionsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/extensions", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/extensions";
}
export interface sites_slots_extensionsComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/extensions";
}
export interface sites_slots_extensionsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: MSDeployCoreOrMSDeployStatusProperties | undefined;
}
export class sites_slots_functions
	extends ArmResource<sites_slots_functionsComponentInputs>
	implements sites_slots_functionsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_functionsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/functions", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/functions";
}
export interface sites_slots_functionsComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/functions";
}
export interface sites_slots_functionsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: FunctionEnvelopeProperties | undefined;
}
export class sites_slots_functions_keys
	extends ArmResource<sites_slots_functions_keysComponentInputs>
	implements sites_slots_functions_keysComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_functions_keysComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/functions/keys", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/functions/keys";
}
export interface sites_slots_functions_keysComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/functions/keys";
}
export interface sites_slots_functions_keysComponentInputs {
	readonly name: string;
	readonly value?: string | undefined;
}
export class sites_slots_hostNameBindings
	extends ArmResource<sites_slots_hostNameBindingsComponentInputs>
	implements sites_slots_hostNameBindingsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_hostNameBindingsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/hostNameBindings", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/hostNameBindings";
}
export interface sites_slots_hostNameBindingsComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/hostNameBindings";
}
export interface sites_slots_hostNameBindingsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: HostNameBindingProperties | undefined;
}
export class sites_slots_hybridconnection
	extends ArmResource<sites_slots_hybridconnectionComponentInputs>
	implements sites_slots_hybridconnectionComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_hybridconnectionComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/hybridconnection", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/hybridconnection";
}
export interface sites_slots_hybridconnectionComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/hybridconnection";
}
export interface sites_slots_hybridconnectionComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: RelayServiceConnectionEntityProperties | undefined;
}
export class sites_slots_hybridConnectionNamespaces_relays
	extends ArmResource<sites_slots_hybridConnectionNamespaces_relaysComponentInputs>
	implements sites_slots_hybridConnectionNamespaces_relaysComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_hybridConnectionNamespaces_relaysComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/hybridConnectionNamespaces/relays", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/hybridConnectionNamespaces/relays";
}
export interface sites_slots_hybridConnectionNamespaces_relaysComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/hybridConnectionNamespaces/relays";
}
export interface sites_slots_hybridConnectionNamespaces_relaysComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: HybridConnectionProperties | undefined;
}
export class sites_slots_instances
	extends ArmResource<sites_slots_instancesComponentInputs>
	implements sites_slots_instancesComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_instancesComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/instances", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/instances";
}
export interface sites_slots_instancesComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/instances";
}
export interface sites_slots_instancesComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: WebSiteInstanceStatusProperties | undefined;
}
export class sites_slots_instances_extensions
	extends ArmResource<sites_slots_instances_extensionsComponentInputs>
	implements sites_slots_instances_extensionsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_instances_extensionsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/instances/extensions", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/instances/extensions";
}
export interface sites_slots_instances_extensionsComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/instances/extensions";
}
export interface sites_slots_instances_extensionsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: MSDeployCoreOrMSDeployStatusProperties | undefined;
}
export class sites_slots_instances_processes
	extends ArmResource<sites_slots_instances_processesComponentInputs>
	implements sites_slots_instances_processesComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_instances_processesComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/instances/processes", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/instances/processes";
}
export interface sites_slots_instances_processesComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/instances/processes";
}
export interface sites_slots_instances_processesComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: ProcessInfoProperties | undefined;
}
export class sites_slots_instances_processes_modules
	extends ArmResource<sites_slots_instances_processes_modulesComponentInputs>
	implements sites_slots_instances_processes_modulesComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_instances_processes_modulesComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/instances/processes/modules", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/instances/processes/modules";
}
export interface sites_slots_instances_processes_modulesComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/instances/processes/modules";
}
export interface sites_slots_instances_processes_modulesComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: ProcessModuleInfoProperties | undefined;
}
export class sites_slots_migratemysql
	extends ArmResource<sites_slots_migratemysqlComponentInputs>
	implements sites_slots_migratemysqlComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_migratemysqlComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/migratemysql", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/migratemysql";
}
export interface sites_slots_migratemysqlComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/migratemysql";
}
export interface sites_slots_migratemysqlComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: MigrateMySqlStatusProperties | undefined;
}
export class sites_slots_networkConfig
	extends ArmResource<sites_slots_networkConfigComponentInputs>
	implements sites_slots_networkConfigComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_networkConfigComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/networkConfig", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/networkConfig";
}
export interface sites_slots_networkConfigComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/networkConfig";
}
export interface sites_slots_networkConfigComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: SwiftVirtualNetworkProperties | undefined;
}
export class sites_slots_networkFeatures
	extends ArmResource<sites_slots_networkFeaturesComponentInputs>
	implements sites_slots_networkFeaturesComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_networkFeaturesComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/networkFeatures", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/networkFeatures";
}
export interface sites_slots_networkFeaturesComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/networkFeatures";
}
export interface sites_slots_networkFeaturesComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: NetworkFeaturesProperties | undefined;
}
export class sites_slots_premieraddons
	extends ArmResource<sites_slots_premieraddonsComponentInputs>
	implements sites_slots_premieraddonsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_premieraddonsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/premieraddons", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/premieraddons";
}
export interface sites_slots_premieraddonsComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/premieraddons";
}
export interface sites_slots_premieraddonsComponentInputs {
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: PremierAddOnProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class sites_slots_privateAccess
	extends ArmResource<sites_slots_privateAccessComponentInputs>
	implements sites_slots_privateAccessComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_privateAccessComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/privateAccess", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/privateAccess";
}
export interface sites_slots_privateAccessComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/privateAccess";
}
export interface sites_slots_privateAccessComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: PrivateAccessProperties | undefined;
}
export class sites_slots_privateEndpointConnections
	extends ArmResource<sites_slots_privateEndpointConnectionsComponentInputs>
	implements sites_slots_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_privateEndpointConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/privateEndpointConnections", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/privateEndpointConnections";
}
export interface sites_slots_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/privateEndpointConnections";
}
export interface sites_slots_privateEndpointConnectionsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?:
		| PrivateLinkConnectionApprovalRequestOrRemotePrivateEndpointConnectionARMResourceProperties
		| undefined;
}
export class sites_slots_processes
	extends ArmResource<sites_slots_processesComponentInputs>
	implements sites_slots_processesComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_processesComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/processes", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/processes";
}
export interface sites_slots_processesComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/processes";
}
export interface sites_slots_processesComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: ProcessInfoProperties | undefined;
}
export class sites_slots_processes_modules
	extends ArmResource<sites_slots_processes_modulesComponentInputs>
	implements sites_slots_processes_modulesComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_processes_modulesComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/processes/modules", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/processes/modules";
}
export interface sites_slots_processes_modulesComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/processes/modules";
}
export interface sites_slots_processes_modulesComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: ProcessModuleInfoProperties | undefined;
}
export class sites_slots_publicCertificates
	extends ArmResource<sites_slots_publicCertificatesComponentInputs>
	implements sites_slots_publicCertificatesComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_publicCertificatesComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/publicCertificates", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/publicCertificates";
}
export interface sites_slots_publicCertificatesComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/publicCertificates";
}
export interface sites_slots_publicCertificatesComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: PublicCertificateProperties | undefined;
}
export class sites_slots_resourceHealthMetadata
	extends ArmResource<sites_slots_resourceHealthMetadataComponentInputs>
	implements sites_slots_resourceHealthMetadataComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_resourceHealthMetadataComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/resourceHealthMetadata", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/resourceHealthMetadata";
}
export interface sites_slots_resourceHealthMetadataComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/resourceHealthMetadata";
}
export interface sites_slots_resourceHealthMetadataComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: ResourceHealthMetadataProperties | undefined;
}
export class sites_slots_siteextensions
	extends ArmResource<sites_slots_siteextensionsComponentInputs>
	implements sites_slots_siteextensionsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_siteextensionsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/siteextensions", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/siteextensions";
}
export interface sites_slots_siteextensionsComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/siteextensions";
}
export interface sites_slots_siteextensionsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: SiteExtensionInfoProperties | undefined;
}
export class sites_slots_sourcecontrols
	extends ArmResource<sites_slots_sourcecontrolsComponentInputs>
	implements sites_slots_sourcecontrolsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_sourcecontrolsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/sourcecontrols", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/sourcecontrols";
}
export interface sites_slots_sourcecontrolsComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/sourcecontrols";
}
export interface sites_slots_sourcecontrolsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: SiteSourceControlProperties | undefined;
}
export class sites_slots_triggeredwebjobs
	extends ArmResource<sites_slots_triggeredwebjobsComponentInputs>
	implements sites_slots_triggeredwebjobsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_triggeredwebjobsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/triggeredwebjobs", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/triggeredwebjobs";
}
export interface sites_slots_triggeredwebjobsComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/triggeredwebjobs";
}
export interface sites_slots_triggeredwebjobsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: TriggeredWebJobProperties | undefined;
}
export class sites_slots_triggeredwebjobs_history
	extends ArmResource<sites_slots_triggeredwebjobs_historyComponentInputs>
	implements sites_slots_triggeredwebjobs_historyComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_triggeredwebjobs_historyComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/triggeredwebjobs/history", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/triggeredwebjobs/history";
}
export interface sites_slots_triggeredwebjobs_historyComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/triggeredwebjobs/history";
}
export interface sites_slots_triggeredwebjobs_historyComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: TriggeredJobHistoryProperties | undefined;
}
export class sites_slots_virtualNetworkConnections
	extends ArmResource<sites_slots_virtualNetworkConnectionsComponentInputs>
	implements sites_slots_virtualNetworkConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_virtualNetworkConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/virtualNetworkConnections", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/virtualNetworkConnections";
}
export interface sites_slots_virtualNetworkConnectionsComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/virtualNetworkConnections";
}
export interface sites_slots_virtualNetworkConnectionsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: VnetInfo | undefined;
}
export class sites_slots_virtualNetworkConnections_gateways
	extends ArmResource<sites_slots_virtualNetworkConnections_gatewaysComponentInputs>
	implements sites_slots_virtualNetworkConnections_gatewaysComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_virtualNetworkConnections_gatewaysComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/virtualNetworkConnections/gateways", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/virtualNetworkConnections/gateways";
}
export interface sites_slots_virtualNetworkConnections_gatewaysComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/virtualNetworkConnections/gateways";
}
export interface sites_slots_virtualNetworkConnections_gatewaysComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: VnetGatewayProperties | undefined;
}
export class sites_slots_webjobs
	extends ArmResource<sites_slots_webjobsComponentInputs>
	implements sites_slots_webjobsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_webjobsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/webjobs", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/webjobs";
}
export interface sites_slots_webjobsComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/webjobs";
}
export interface sites_slots_webjobsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: WebJobProperties | undefined;
}
export class sites_sourcecontrols
	extends ArmResource<sites_sourcecontrolsComponentInputs>
	implements sites_sourcecontrolsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_sourcecontrolsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/sourcecontrols", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/sourcecontrols";
}
export interface sites_sourcecontrolsComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/sourcecontrols";
}
export interface sites_sourcecontrolsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: SiteSourceControlProperties | undefined;
}
export class sites_triggeredwebjobs
	extends ArmResource<sites_triggeredwebjobsComponentInputs>
	implements sites_triggeredwebjobsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_triggeredwebjobsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/triggeredwebjobs", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/triggeredwebjobs";
}
export interface sites_triggeredwebjobsComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/triggeredwebjobs";
}
export interface sites_triggeredwebjobsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: TriggeredWebJobProperties | undefined;
}
export class sites_triggeredwebjobs_history
	extends ArmResource<sites_triggeredwebjobs_historyComponentInputs>
	implements sites_triggeredwebjobs_historyComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_triggeredwebjobs_historyComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/triggeredwebjobs/history", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/triggeredwebjobs/history";
}
export interface sites_triggeredwebjobs_historyComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/triggeredwebjobs/history";
}
export interface sites_triggeredwebjobs_historyComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: TriggeredJobHistoryProperties | undefined;
}
export class sites_virtualNetworkConnections
	extends ArmResource<sites_virtualNetworkConnectionsComponentInputs>
	implements sites_virtualNetworkConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_virtualNetworkConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/virtualNetworkConnections", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/virtualNetworkConnections";
}
export interface sites_virtualNetworkConnectionsComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/virtualNetworkConnections";
}
export interface sites_virtualNetworkConnectionsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: VnetInfo | undefined;
}
export class sites_virtualNetworkConnections_gateways
	extends ArmResource<sites_virtualNetworkConnections_gatewaysComponentInputs>
	implements sites_virtualNetworkConnections_gatewaysComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_virtualNetworkConnections_gatewaysComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/virtualNetworkConnections/gateways", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/virtualNetworkConnections/gateways";
}
export interface sites_virtualNetworkConnections_gatewaysComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/virtualNetworkConnections/gateways";
}
export interface sites_virtualNetworkConnections_gatewaysComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: VnetGatewayProperties | undefined;
}
export class sites_webjobs extends ArmResource<sites_webjobsComponentInputs> implements sites_webjobsComponentOutputs {
	constructor(entity: ADKEntity, options: sites_webjobsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/webjobs", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/webjobs";
}
export interface sites_webjobsComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/webjobs";
}
export interface sites_webjobsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: WebJobProperties | undefined;
}
export class sourcecontrols extends ArmResource<sourcecontrolsComponentInputs> implements sourcecontrolsComponentOutputs {
	constructor(entity: ADKEntity, options: sourcecontrolsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sourcecontrols", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sourcecontrols";
}
export interface sourcecontrolsComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sourcecontrols";
}
export interface sourcecontrolsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: SourceControlProperties | undefined;
}
export class staticSites extends ArmResource<staticSitesComponentInputs> implements staticSitesComponentOutputs {
	constructor(entity: ADKEntity, options: staticSitesComponentInputs) {
		super(entity, options.name, "Microsoft.Web/staticSites", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/staticSites";
}
export interface staticSitesComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/staticSites";
}
export interface staticSitesComponentInputs {
	readonly identity?: ManagedServiceIdentity | undefined;
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: StaticSite | undefined;
	readonly sku?: SkuDescription | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class staticSites_builds
	extends ArmResource<staticSites_buildsComponentInputs>
	implements staticSites_buildsComponentOutputs
{
	constructor(entity: ADKEntity, options: staticSites_buildsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/staticSites/builds", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/staticSites/builds";
}
export interface staticSites_buildsComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/staticSites/builds";
}
export interface staticSites_buildsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: StaticSiteBuildARMResourceProperties | undefined;
}
export class staticSites_builds_config_appsettings
	extends ArmResource<staticSites_builds_config_appsettingsComponentInputs>
	implements staticSites_builds_config_appsettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: staticSites_builds_config_appsettingsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/staticSites/builds/config", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/staticSites/builds/config";
}
export interface staticSites_builds_config_appsettingsComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/staticSites/builds/config";
}
export interface staticSites_builds_config_appsettingsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: StringDictionaryProperties | undefined;
}
export class staticSites_builds_config_functionappsettings
	extends ArmResource<staticSites_builds_config_functionappsettingsComponentInputs>
	implements staticSites_builds_config_functionappsettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: staticSites_builds_config_functionappsettingsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/staticSites/builds/config", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/staticSites/builds/config";
}
export interface staticSites_builds_config_functionappsettingsComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/staticSites/builds/config";
}
export interface staticSites_builds_config_functionappsettingsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: StringDictionaryProperties | undefined;
}
export class staticSites_builds_userProvidedFunctionApps
	extends ArmResource<staticSites_builds_userProvidedFunctionAppsComponentInputs>
	implements staticSites_builds_userProvidedFunctionAppsComponentOutputs
{
	constructor(entity: ADKEntity, options: staticSites_builds_userProvidedFunctionAppsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/staticSites/builds/userProvidedFunctionApps", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/staticSites/builds/userProvidedFunctionApps";
}
export interface staticSites_builds_userProvidedFunctionAppsComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/staticSites/builds/userProvidedFunctionApps";
}
export interface staticSites_builds_userProvidedFunctionAppsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: StaticSiteUserProvidedFunctionAppARMResourceProperties | undefined;
}
export class staticSites_config_appsettings
	extends ArmResource<staticSites_config_appsettingsComponentInputs>
	implements staticSites_config_appsettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: staticSites_config_appsettingsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/staticSites/config", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/staticSites/config";
}
export interface staticSites_config_appsettingsComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/staticSites/config";
}
export interface staticSites_config_appsettingsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: StringDictionaryProperties | undefined;
}
export class staticSites_config_functionappsettings
	extends ArmResource<staticSites_config_functionappsettingsComponentInputs>
	implements staticSites_config_functionappsettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: staticSites_config_functionappsettingsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/staticSites/config", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/staticSites/config";
}
export interface staticSites_config_functionappsettingsComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/staticSites/config";
}
export interface staticSites_config_functionappsettingsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: StringDictionaryProperties | undefined;
}
export class staticSites_customDomains
	extends ArmResource<staticSites_customDomainsComponentInputs>
	implements staticSites_customDomainsComponentOutputs
{
	constructor(entity: ADKEntity, options: staticSites_customDomainsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/staticSites/customDomains", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/staticSites/customDomains";
}
export interface staticSites_customDomainsComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/staticSites/customDomains";
}
export interface staticSites_customDomainsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?:
		| StaticSiteCustomDomainRequestPropertiesARMResourcePropertiesOrStaticSiteCustomDomainOverviewARMResourceProperties
		| undefined;
}
export class staticSites_privateEndpointConnections
	extends ArmResource<staticSites_privateEndpointConnectionsComponentInputs>
	implements staticSites_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: staticSites_privateEndpointConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/staticSites/privateEndpointConnections", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/staticSites/privateEndpointConnections";
}
export interface staticSites_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/staticSites/privateEndpointConnections";
}
export interface staticSites_privateEndpointConnectionsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?:
		| PrivateLinkConnectionApprovalRequestOrRemotePrivateEndpointConnectionARMResourceProperties
		| undefined;
}
export class staticSites_userProvidedFunctionApps
	extends ArmResource<staticSites_userProvidedFunctionAppsComponentInputs>
	implements staticSites_userProvidedFunctionAppsComponentOutputs
{
	constructor(entity: ADKEntity, options: staticSites_userProvidedFunctionAppsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/staticSites/userProvidedFunctionApps", "2021-02-01", options);
	}
	public readonly apiVersion: "2021-02-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/staticSites/userProvidedFunctionApps";
}
export interface staticSites_userProvidedFunctionAppsComponentOutputs {
	readonly apiVersion: "2021-02-01";
	readonly id: string;
	readonly type: "Microsoft.Web/staticSites/userProvidedFunctionApps";
}
export interface staticSites_userProvidedFunctionAppsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: StaticSiteUserProvidedFunctionAppARMResourceProperties | undefined;
}
export function list(resource: sites_backups, input: BackupRequest): BackupItem {
	if (resource.apiVersion !== "2021-02-01") {
		throw new Error(`list is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Web/sites/backups") {
		throw new Error(`list is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listAppSettings(resource: staticSites_builds): StringDictionary {
	if (resource.apiVersion !== "2021-02-01") {
		throw new Error(`listAppSettings is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Web/staticSites/builds") {
		throw new Error(`listAppSettings is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listbackups(resource: sites): BackupItemCollection {
	if (resource.apiVersion !== "2021-02-01") {
		throw new Error(`listbackups is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Web/sites") {
		throw new Error(`listbackups is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listConfiguredRoles(resource: staticSites): StringList {
	if (resource.apiVersion !== "2021-02-01") {
		throw new Error(`listConfiguredRoles is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Web/staticSites") {
		throw new Error(`listConfiguredRoles is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listFunctionAppSettings(resource: staticSites_builds): StringDictionary {
	if (resource.apiVersion !== "2021-02-01") {
		throw new Error(`listFunctionAppSettings is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Web/staticSites/builds") {
		throw new Error(`listFunctionAppSettings is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listKeys(resource: serverfarms_hybridConnectionNamespaces_relays): HybridConnectionKey {
	if (resource.apiVersion !== "2021-02-01") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Web/serverfarms/hybridConnectionNamespaces/relays") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listkeys(resource: sites_functions): StringDictionary {
	if (resource.apiVersion !== "2021-02-01") {
		throw new Error(`listkeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Web/sites/functions") {
		throw new Error(`listkeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listSecrets(resource: staticSites): StringDictionary {
	if (resource.apiVersion !== "2021-02-01") {
		throw new Error(`listSecrets is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Web/staticSites") {
		throw new Error(`listSecrets is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listsecrets(resource: sites_functions): FunctionSecrets {
	if (resource.apiVersion !== "2021-02-01") {
		throw new Error(`listsecrets is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Web/sites/functions") {
		throw new Error(`listsecrets is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listsyncfunctiontriggerstatus(resource: sites): FunctionSecrets {
	if (resource.apiVersion !== "2021-02-01") {
		throw new Error(`listsyncfunctiontriggerstatus is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Web/sites") {
		throw new Error(`listsyncfunctiontriggerstatus is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listUsers(resource: ArmResource): StaticSiteUserCollection {
	if (resource.apiVersion !== "2021-02-01") {
		throw new Error(`listUsers is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Web/staticSites/authproviders") {
		throw new Error(`listUsers is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AddressResponseProperties {
	readonly internalIpAddress?: string | undefined;
	readonly outboundIpAddresses?: string[] | undefined;
	readonly serviceIpAddress?: string | undefined;
	readonly vipMappings?: VirtualIPMapping[] | undefined;
}
export interface AllowedAudiencesValidation {
	readonly allowedAudiences?: string[] | undefined;
}
export interface AllowedPrincipals {
	readonly groups?: string[] | undefined;
	readonly identities?: string[] | undefined;
}
export interface AnalysisDefinitionProperties {
	readonly description?: string | undefined;
}
export interface ApiDefinitionInfo {
	readonly url?: string | undefined;
}
export interface ApiKVReferenceProperties {
	readonly activeVersion?: string | undefined;
	readonly details?: string | undefined;
	readonly identityType?: ManagedServiceIdentity | undefined;
	readonly reference?: string | undefined;
	readonly secretName?: string | undefined;
	readonly secretVersion?: string | undefined;
	readonly source?: "KeyVault" | undefined;
	readonly status?:
		| (
				| "AccessToKeyVaultDenied"
				| "FetchTimedOut"
				| "Initialized"
				| "InvalidSyntax"
				| "MSINotEnabled"
				| "OtherReasons"
				| "Resolved"
				| "SecretNotFound"
				| "SecretVersionNotFound"
				| "UnauthorizedClient"
		  )
		| undefined;
	readonly vaultName?: string | undefined;
}
export interface ApiManagementConfig {
	readonly id?: string | undefined;
}
export interface Apple {
	readonly enabled?: boolean | undefined;
	readonly login?: LoginScopes | undefined;
	readonly registration?: AppleRegistration | undefined;
}
export interface AppleRegistration {
	readonly clientId?: string | undefined;
	readonly clientSecretSettingName?: string | undefined;
}
export interface ApplicationLogsConfig {
	readonly azureBlobStorage?: AzureBlobStorageApplicationLogsConfig | undefined;
	readonly azureTableStorage?: AzureTableStorageApplicationLogsConfig | undefined;
	readonly fileSystem?: FileSystemApplicationLogsConfig | undefined;
}
export interface AppLogsConfiguration {
	readonly destination?: string | undefined;
	readonly logAnalyticsConfiguration?: LogAnalyticsConfiguration | undefined;
}
export interface AppRegistration {
	readonly appId?: string | undefined;
	readonly appSecretSettingName?: string | undefined;
}
export interface AppServiceEnvironment {
	readonly clusterSettings?: NameValuePair[] | undefined;
	readonly dedicatedHostCount?: number | undefined;
	readonly dnsSuffix?: string | undefined;
	readonly frontEndScaleFactor?: number | undefined;
	readonly hasLinuxWorkers?: boolean | undefined;
	readonly internalLoadBalancingMode?: ("None" | "Publishing" | "Web" | "Web, Publishing") | undefined;
	readonly ipsslAddressCount?: number | undefined;
	readonly maximumNumberOfMachines?: number | undefined;
	readonly multiRoleCount?: number | undefined;
	readonly multiSize?: string | undefined;
	readonly provisioningState?: ("Canceled" | "Deleting" | "Failed" | "InProgress") | undefined;
	readonly status?: ("Deleting" | "Preparing" | "Ready") | undefined;
	readonly suspended?: boolean | undefined;
	readonly userWhitelistedIpRanges?: string[] | undefined;
	readonly virtualNetwork: VirtualNetworkProfile;
	readonly zoneRedundant?: boolean | undefined;
}
export interface AppServicePlanProperties {
	readonly elasticScaleEnabled?: boolean | undefined;
	readonly freeOfferExpirationTime?: string | undefined;
	readonly geoRegion?: string | undefined;
	readonly hostingEnvironmentProfile?: HostingEnvironmentProfile | undefined;
	readonly hyperV?: boolean | undefined;
	readonly isSpot?: boolean | undefined;
	readonly isXenon?: boolean | undefined;
	readonly kubeEnvironmentProfile?: KubeEnvironmentProfile | undefined;
	readonly maximumElasticWorkerCount?: number | undefined;
	readonly maximumNumberOfWorkers?: number | undefined;
	readonly numberOfSites?: number | undefined;
	readonly perSiteScaling?: boolean | undefined;
	readonly provisioningState?: ("Canceled" | "Deleting" | "Failed" | "InProgress") | undefined;
	readonly reserved?: boolean | undefined;
	readonly resourceGroup?: string | undefined;
	readonly spotExpirationTime?: string | undefined;
	readonly status?: ("Creating" | "Pending") | undefined;
	readonly subscription?: string | undefined;
	readonly targetWorkerCount?: number | undefined;
	readonly targetWorkerSizeId?: number | undefined;
	readonly workerTierName?: string | undefined;
	readonly zoneRedundant?: boolean | undefined;
}
export interface ArcConfiguration {
	readonly artifactsStorageType?: "LocalNode" | undefined;
	readonly artifactStorageAccessMode?: string | undefined;
	readonly artifactStorageClassName?: string | undefined;
	readonly artifactStorageMountPath?: string | undefined;
	readonly artifactStorageNodeName?: string | undefined;
	readonly frontEndServiceConfiguration?: FrontEndConfiguration | undefined;
	readonly kubeConfig?: string | undefined;
}
export interface ArmIdWrapper {
	readonly id?: string | undefined;
}
export interface ArmPlan {
	readonly name?: string | undefined;
	readonly product?: string | undefined;
	readonly promotionCode?: string | undefined;
	readonly publisher?: string | undefined;
	readonly version?: string | undefined;
}
export interface AseV3NetworkingConfigurationProperties {
	readonly allowNewPrivateEndpointConnections?: boolean | undefined;
	readonly externalInboundIpAddresses?: string[] | undefined;
	readonly internalInboundIpAddresses?: string[] | undefined;
	readonly linuxOutboundIpAddresses?: string[] | undefined;
	readonly windowsOutboundIpAddresses?: string[] | undefined;
}
export interface AuthPlatform {
	readonly configFilePath?: string | undefined;
	readonly enabled?: boolean | undefined;
	readonly runtimeVersion?: string | undefined;
}
export interface AutoHealActions {
	readonly actionType?: ("CustomAction" | "LogEvent") | undefined;
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
	readonly slowRequestsWithPath?: SlowRequestsBasedTrigger[] | undefined;
	readonly statusCodes?: StatusCodesBasedTrigger[] | undefined;
	readonly statusCodesRange?: StatusCodesRangeBasedTrigger[] | undefined;
}
export interface AzureActiveDirectory {
	readonly enabled?: boolean | undefined;
	readonly isAutoProvisioned?: boolean | undefined;
	readonly login?: AzureActiveDirectoryLogin | undefined;
	readonly registration?: AzureActiveDirectoryRegistration | undefined;
	readonly validation?: AzureActiveDirectoryValidation | undefined;
}
export interface AzureActiveDirectoryLogin {
	readonly disableWWWAuthenticate?: boolean | undefined;
	readonly loginParameters?: string[] | undefined;
}
export interface AzureActiveDirectoryRegistration {
	readonly clientId?: string | undefined;
	readonly clientSecretCertificateIssuer?: string | undefined;
	readonly clientSecretCertificateSubjectAlternativeName?: string | undefined;
	readonly clientSecretCertificateThumbprint?: string | undefined;
	readonly clientSecretSettingName?: string | undefined;
	readonly openIdIssuer?: string | undefined;
}
export interface AzureActiveDirectoryValidation {
	readonly allowedAudiences?: string[] | undefined;
	readonly defaultAuthorizationPolicy?: DefaultAuthorizationPolicy | undefined;
	readonly jwtClaimChecks?: JwtClaimChecks | undefined;
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
export interface AzureStaticWebApps {
	readonly enabled?: boolean | undefined;
	readonly registration?: AzureStaticWebAppsRegistration | undefined;
}
export interface AzureStaticWebAppsRegistration {
	readonly clientId?: string | undefined;
}
export interface AzureStorageInfoValue {
	readonly accessKey?: string | undefined;
	readonly accountName?: string | undefined;
	readonly mountPath?: string | undefined;
	readonly shareName?: string | undefined;
	readonly state?: ("InvalidCredentials" | "InvalidShare" | "NotValidated") | undefined;
	readonly type?: "AzureBlob" | undefined;
}
export interface AzureStoragePropertyDictionaryResourceProperties {
	readonly "[ key: string ]"?: AzureStorageInfoValue | undefined;
}
export interface AzureTableStorageApplicationLogsConfig {
	readonly level?: ("Error" | "Information" | "Off" | "Verbose") | undefined;
	readonly sasUrl: string;
}
export interface BackupItem {
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: BackupItemProperties | undefined;
	readonly type?: string | undefined;
}
export interface BackupItemCollection {
	readonly nextLink?: string | undefined;
	readonly value: BackupItem[];
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
export interface BackupRequest {
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: BackupRequestProperties | undefined;
	readonly type?: string | undefined;
}
export interface BackupRequestProperties {
	readonly backupName?: string | undefined;
	readonly backupSchedule?: BackupSchedule | undefined;
	readonly databases?: DatabaseBackupSetting[] | undefined;
	readonly enabled?: boolean | undefined;
	readonly storageAccountUrl: string;
}
export interface BackupSchedule {
	readonly frequencyInterval: number;
	readonly frequencyUnit: "Day";
	readonly keepAtLeastOneBackup: boolean;
	readonly lastExecutionTime?: string | undefined;
	readonly retentionPeriodInDays: number;
	readonly startTime?: string | undefined;
}
export interface BlobStorageTokenStore {
	readonly sasUrlSettingName?: string | undefined;
}
export interface Capability {
	readonly name?: string | undefined;
	readonly reason?: string | undefined;
	readonly value?: string | undefined;
}
export interface CertificateProperties {
	readonly canonicalName?: string | undefined;
	readonly cerBlob?: any | undefined;
	readonly domainValidationMethod?: string | undefined;
	readonly expirationDate?: string | undefined;
	readonly friendlyName?: string | undefined;
	readonly hostingEnvironmentProfile?: HostingEnvironmentProfile | undefined;
	readonly hostNames?: string[] | undefined;
	readonly issueDate?: string | undefined;
	readonly issuer?: string | undefined;
	readonly keyVaultId?: string | undefined;
	readonly keyVaultSecretName?: string | undefined;
	readonly keyVaultSecretStatus?:
		| (
				| "AzureServiceUnauthorizedToAccessKeyVault"
				| "CertificateOrderFailed"
				| "ExternalPrivateKey"
				| "Initialized"
				| "KeyVaultDoesNotExist"
				| "KeyVaultSecretDoesNotExist"
				| "OperationNotPermittedOnKeyVault"
				| "Succeeded"
				| "Unknown"
				| "UnknownError"
		  )
		| undefined;
	readonly password?: string | undefined;
	readonly pfxBlob?: any | undefined;
	readonly publicKeyHash?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly serverFarmId?: string | undefined;
	readonly siteName?: string | undefined;
	readonly subjectName?: string | undefined;
	readonly thumbprint?: string | undefined;
	readonly valid?: boolean | undefined;
}
export interface ClientRegistration {
	readonly clientId?: string | undefined;
	readonly clientSecretSettingName?: string | undefined;
}
export interface CloningInfo {
	readonly appSettingsOverrides?: CloningInfoAppSettingsOverrides | undefined;
	readonly cloneCustomHostNames?: boolean | undefined;
	readonly cloneSourceControl?: boolean | undefined;
	readonly configureLoadBalancing?: boolean | undefined;
	readonly correlationId?: string | undefined;
	readonly hostingEnvironment?: string | undefined;
	readonly overwrite?: boolean | undefined;
	readonly sourceWebAppId: string;
	readonly sourceWebAppLocation?: string | undefined;
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
	readonly type?:
		| (
				| "ApiHub"
				| "Custom"
				| "DocDb"
				| "EventHub"
				| "MySql"
				| "NotificationHub"
				| "PostgreSQL"
				| "RedisCache"
				| "SQLAzure"
				| "SQLServer"
		  )
		| undefined;
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
	readonly cpuUsage?: ContainerCpuUsage | undefined;
	readonly onlineCpuCount?: number | undefined;
	readonly systemCpuUsage?: number | undefined;
	readonly throttlingData?: ContainerThrottlingData | undefined;
}
export interface ContainerCpuUsage {
	readonly kernelModeUsage?: number | undefined;
	readonly perCpuUsage?: number[] | undefined;
	readonly totalUsage?: number | undefined;
	readonly userModeUsage?: number | undefined;
}
export interface ContainerInfo {
	readonly currentCpuStats?: ContainerCpuStatistics | undefined;
	readonly currentTimeStamp?: string | undefined;
	readonly eth0?: ContainerNetworkInterfaceStatistics | undefined;
	readonly id?: string | undefined;
	readonly memoryStats?: ContainerMemoryStatistics | undefined;
	readonly name?: string | undefined;
	readonly previousCpuStats?: ContainerCpuStatistics | undefined;
	readonly previousTimeStamp?: string | undefined;
}
export interface ContainerMemoryStatistics {
	readonly limit?: number | undefined;
	readonly maxUsage?: number | undefined;
	readonly usage?: number | undefined;
}
export interface ContainerNetworkInterfaceStatistics {
	readonly rxBytes?: number | undefined;
	readonly rxDropped?: number | undefined;
	readonly rxErrors?: number | undefined;
	readonly rxPackets?: number | undefined;
	readonly txBytes?: number | undefined;
	readonly txDropped?: number | undefined;
	readonly txErrors?: number | undefined;
	readonly txPackets?: number | undefined;
}
export interface ContainerThrottlingData {
	readonly periods?: number | undefined;
	readonly throttledPeriods?: number | undefined;
	readonly throttledTime?: number | undefined;
}
export interface ContinuousWebJobProperties {
	readonly detailed_status?: string | undefined;
	readonly error?: string | undefined;
	readonly extra_info_url?: string | undefined;
	readonly log_url?: string | undefined;
	readonly run_command?: string | undefined;
	readonly settings?: ContinuousWebJobPropertiesSettings | undefined;
	readonly status?: ("Initializing" | "PendingRestart" | "Running" | "Starting") | undefined;
	readonly url?: string | undefined;
	readonly using_sdk?: boolean | undefined;
	readonly web_job_type?: "Continuous" | undefined;
}
export interface ContinuousWebJobPropertiesSettings {
	readonly "[ key: string ]"?: any | undefined;
}
export interface CookieExpiration {
	readonly convention?: "FixedTime" | undefined;
	readonly timeToExpiration?: string | undefined;
}
export interface CorsSettings {
	readonly allowedOrigins?: string[] | undefined;
	readonly supportCredentials?: boolean | undefined;
}
export interface CsmPublishingCredentialsPoliciesEntityProperties {
	readonly allow: boolean;
}
export interface CustomOpenIdConnectProvider {
	readonly enabled?: boolean | undefined;
	readonly login?: OpenIdConnectLogin | undefined;
	readonly registration?: OpenIdConnectRegistration | undefined;
}
export interface DatabaseBackupSetting {
	readonly connectionString?: string | undefined;
	readonly connectionStringName?: string | undefined;
	readonly databaseType: "LocalMySql" | "MySql" | "PostgreSql" | "SqlAzure";
	readonly name?: string | undefined;
}
export interface DataProviderMetadata {
	readonly propertyBag?: KeyValuePairStringObject[] | undefined;
	readonly providerName?: string | undefined;
}
export interface DataTableResponseColumn {
	readonly columnName?: string | undefined;
	readonly columnType?: string | undefined;
	readonly dataType?: string | undefined;
}
export interface DataTableResponseObject {
	readonly columns?: DataTableResponseColumn[] | undefined;
	readonly rows?: string[][] | undefined;
	readonly tableName?: string | undefined;
}
export interface DefaultAuthorizationPolicy {
	readonly allowedApplications?: string[] | undefined;
	readonly allowedPrincipals?: AllowedPrincipals | undefined;
}
export interface DeletedSiteProperties {
	readonly deletedSiteId?: number | undefined;
	readonly deletedSiteName?: string | undefined;
	readonly deletedTimestamp?: string | undefined;
	readonly geoRegionName?: string | undefined;
	readonly kind?: string | undefined;
	readonly resourceGroup?: string | undefined;
	readonly slot?: string | undefined;
	readonly subscription?: string | undefined;
}
export interface DeploymentProperties {
	readonly active?: boolean | undefined;
	readonly author?: string | undefined;
	readonly author_email?: string | undefined;
	readonly deployer?: string | undefined;
	readonly details?: string | undefined;
	readonly end_time?: string | undefined;
	readonly message?: string | undefined;
	readonly start_time?: string | undefined;
	readonly status?: number | undefined;
}
export interface DetectorDefinition {
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly isEnabled?: boolean | undefined;
	readonly rank?: number | undefined;
}
export interface DetectorInfo {
	readonly analysisType?: string[] | undefined;
	readonly author?: string | undefined;
	readonly category?: string | undefined;
	readonly description?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly score?: number | undefined;
	readonly supportTopicList?: SupportTopic[] | undefined;
	readonly type?: ("Analysis" | "CategoryOverview") | undefined;
}
export interface DetectorResponseProperties {
	readonly dataProvidersMetadata?: DataProviderMetadata[] | undefined;
	readonly dataset?: DiagnosticData[] | undefined;
	readonly metadata?: DetectorInfo | undefined;
	readonly status?: Status | undefined;
	readonly suggestedUtterances?: QueryUtterancesResults | undefined;
}
export interface DiagnosticCategoryProperties {
	readonly description?: string | undefined;
}
export interface DiagnosticData {
	readonly renderingProperties?: Rendering | undefined;
	readonly table?: DataTableResponseObject | undefined;
}
export interface EnabledConfig {
	readonly enabled?: boolean | undefined;
}
export interface ErrorEntity {
	readonly code?: string | undefined;
	readonly details?: ErrorEntity[] | undefined;
	readonly extendedCode?: string | undefined;
	readonly innerErrors?: ErrorEntity[] | undefined;
	readonly message?: string | undefined;
	readonly messageTemplate?: string | undefined;
	readonly parameters?: string[] | undefined;
	readonly target?: string | undefined;
}
export interface Experiments {
	readonly rampUpRules?: RampUpRule[] | undefined;
}
export interface ExtendedLocation {
	readonly name?: string | undefined;
	readonly type?: string | undefined;
}
export interface Facebook {
	readonly enabled?: boolean | undefined;
	readonly graphApiVersion?: string | undefined;
	readonly login?: LoginScopes | undefined;
	readonly registration?: AppRegistration | undefined;
}
export interface FileSystemApplicationLogsConfig {
	readonly level?: ("Error" | "Information" | "Off" | "Verbose") | undefined;
}
export interface FileSystemHttpLogsConfig {
	readonly enabled?: boolean | undefined;
	readonly retentionInDays?: number | undefined;
	readonly retentionInMb?: number | undefined;
}
export interface FileSystemTokenStore {
	readonly directory?: string | undefined;
}
export interface ForwardProxy {
	readonly convention?: ("Custom" | "NoProxy") | undefined;
	readonly customHostHeaderName?: string | undefined;
	readonly customProtoHeaderName?: string | undefined;
}
export interface FrontEndConfiguration {
	readonly kind?: "LoadBalancer" | undefined;
}
export interface FunctionEnvelopeProperties {
	readonly config?: any | undefined;
	readonly config_href?: string | undefined;
	readonly files?: FunctionEnvelopePropertiesFiles | undefined;
	readonly function_app_id?: string | undefined;
	readonly href?: string | undefined;
	readonly invoke_url_template?: string | undefined;
	readonly isDisabled?: boolean | undefined;
	readonly language?: string | undefined;
	readonly script_href?: string | undefined;
	readonly script_root_path_href?: string | undefined;
	readonly secrets_file_href?: string | undefined;
	readonly test_data?: string | undefined;
	readonly test_data_href?: string | undefined;
}
export interface FunctionEnvelopePropertiesFiles {
	readonly "[ key: string ]"?: string | undefined;
}
export interface FunctionSecrets {
	readonly key?: string | undefined;
	readonly trigger_url?: string | undefined;
}
export interface GitHub {
	readonly enabled?: boolean | undefined;
	readonly login?: LoginScopes | undefined;
	readonly registration?: ClientRegistration | undefined;
}
export interface GitHubActionCodeConfiguration {
	readonly runtimeStack?: string | undefined;
	readonly runtimeVersion?: string | undefined;
}
export interface GitHubActionConfiguration {
	readonly codeConfiguration?: GitHubActionCodeConfiguration | undefined;
	readonly containerConfiguration?: GitHubActionContainerConfiguration | undefined;
	readonly generateWorkflowFile?: boolean | undefined;
	readonly isLinux?: boolean | undefined;
}
export interface GitHubActionContainerConfiguration {
	readonly imageName?: string | undefined;
	readonly password?: string | undefined;
	readonly serverUrl?: string | undefined;
	readonly username?: string | undefined;
}
export interface GlobalValidation {
	readonly excludedPaths?: string[] | undefined;
	readonly redirectToProvider?: string | undefined;
	readonly requireAuthentication?: boolean | undefined;
	readonly unauthenticatedClientAction?: ("AllowAnonymous" | "RedirectToLoginPage" | "Return401") | undefined;
}
export interface Google {
	readonly enabled?: boolean | undefined;
	readonly login?: LoginScopes | undefined;
	readonly registration?: ClientRegistration | undefined;
	readonly validation?: AllowedAudiencesValidation | undefined;
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
export interface HostKeys {
	readonly functionKeys?: HostKeysFunctionKeys | undefined;
	readonly masterKey?: string | undefined;
	readonly systemKeys?: HostKeysSystemKeys | undefined;
}
export interface HostKeysFunctionKeys {
	readonly "[ key: string ]"?: string | undefined;
}
export interface HostKeysSystemKeys {
	readonly "[ key: string ]"?: string | undefined;
}
export interface HostNameBindingProperties {
	readonly azureResourceName?: string | undefined;
	readonly azureResourceType?: "TrafficManager" | undefined;
	readonly customHostNameDnsRecordType?: "A" | undefined;
	readonly domainId?: string | undefined;
	readonly hostNameType?: "Managed" | undefined;
	readonly siteName?: string | undefined;
	readonly sslState?: ("Disabled" | "IpBasedEnabled") | undefined;
	readonly thumbprint?: string | undefined;
	readonly virtualIP?: string | undefined;
}
export interface HostNameSslState {
	readonly hostType?: "Repository" | undefined;
	readonly name?: string | undefined;
	readonly sslState?: ("Disabled" | "IpBasedEnabled") | undefined;
	readonly thumbprint?: string | undefined;
	readonly toUpdate?: boolean | undefined;
	readonly virtualIP?: string | undefined;
}
export interface HttpLogsConfig {
	readonly azureBlobStorage?: AzureBlobStorageHttpLogsConfig | undefined;
	readonly fileSystem?: FileSystemHttpLogsConfig | undefined;
}
export interface HttpSettings {
	readonly forwardProxy?: ForwardProxy | undefined;
	readonly requireHttps?: boolean | undefined;
	readonly routes?: HttpSettingsRoutes | undefined;
}
export interface HttpSettingsRoutes {
	readonly apiPrefix?: string | undefined;
}
export interface HybridConnection {
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: HybridConnectionProperties | undefined;
	readonly type?: string | undefined;
}
export interface HybridConnectionKey {
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: HybridConnectionKeyProperties | undefined;
	readonly type?: string | undefined;
}
export interface HybridConnectionKeyProperties {
	readonly sendKeyName?: string | undefined;
	readonly sendKeyValue?: string | undefined;
}
export interface HybridConnectionLimitsProperties {
	readonly current?: number | undefined;
	readonly maximum?: number | undefined;
}
export interface HybridConnectionProperties {
	readonly hostname?: string | undefined;
	readonly port?: number | undefined;
	readonly relayArmUri?: string | undefined;
	readonly relayName?: string | undefined;
	readonly sendKeyName?: string | undefined;
	readonly sendKeyValue?: string | undefined;
	readonly serviceBusNamespace?: string | undefined;
	readonly serviceBusSuffix?: string | undefined;
}
export interface IdentifierProperties {
	readonly id?: string | undefined;
}
export interface IdentityProviders {
	readonly apple?: Apple | undefined;
	readonly azureActiveDirectory?: AzureActiveDirectory | undefined;
	readonly azureStaticWebApps?: AzureStaticWebApps | undefined;
	readonly customOpenIdConnectProviders?: IdentityProvidersCustomOpenIdConnectProviders | undefined;
	readonly facebook?: Facebook | undefined;
	readonly gitHub?: GitHub | undefined;
	readonly google?: Google | undefined;
	readonly legacyMicrosoftAccount?: LegacyMicrosoftAccount | undefined;
	readonly twitter?: Twitter | undefined;
}
export interface IdentityProvidersCustomOpenIdConnectProviders {
	readonly "[ key: string ]"?: CustomOpenIdConnectProvider | undefined;
}
export interface IpSecurityRestriction {
	readonly action?: string | undefined;
	readonly description?: string | undefined;
	readonly headers?: IpSecurityRestrictionHeaders | undefined;
}
export interface IpSecurityRestrictionHeaders {
	readonly "[ key: string ]"?: string[] | undefined;
}
export interface JwtClaimChecks {
	readonly allowedClientApplications?: string[] | undefined;
	readonly allowedGroups?: string[] | undefined;
}
export interface KeyValuePairStringObject {
	readonly key?: string | undefined;
	readonly value?: any | undefined;
}
export interface KubeEnvironmentProfile {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly type?: string | undefined;
}
export interface KubeEnvironmentProperties {
	readonly aksResourceID?: string | undefined;
	readonly appLogsConfiguration?: AppLogsConfiguration | undefined;
	readonly arcConfiguration?: ArcConfiguration | undefined;
	readonly defaultDomain?: string | undefined;
	readonly deploymentErrors?: string | undefined;
	readonly internalLoadBalancerEnabled?: boolean | undefined;
	readonly provisioningState?:
		| (
				| "Canceled"
				| "Failed"
				| "InfrastructureSetupComplete"
				| "InfrastructureSetupInProgress"
				| "InitializationInProgress"
				| "ScheduledForDelete"
				| "Succeeded"
				| "UpgradeFailed"
				| "UpgradeRequested"
		  )
		| undefined;
	readonly staticIp?: string | undefined;
}
export interface LegacyMicrosoftAccount {
	readonly enabled?: boolean | undefined;
	readonly login?: LoginScopes | undefined;
	readonly registration?: ClientRegistration | undefined;
	readonly validation?: AllowedAudiencesValidation | undefined;
}
export interface LogAnalyticsConfiguration {
	readonly customerId?: string | undefined;
	readonly sharedKey?: string | undefined;
}
export interface Login {
	readonly allowedExternalRedirectUrls?: string[] | undefined;
	readonly cookieExpiration?: CookieExpiration | undefined;
	readonly nonce?: Nonce | undefined;
	readonly preserveUrlFragmentsForLogins?: boolean | undefined;
	readonly routes?: LoginRoutes | undefined;
	readonly tokenStore?: TokenStore | undefined;
}
export interface LoginRoutes {
	readonly logoutEndpoint?: string | undefined;
}
export interface LoginScopes {
	readonly scopes?: string[] | undefined;
}
export interface ManagedServiceIdentity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: ("None" | "SystemAssigned" | "SystemAssigned, UserAssigned") | undefined;
	readonly userAssignedIdentities?: ManagedServiceIdentityUserAssignedIdentities | undefined;
}
export interface ManagedServiceIdentityUserAssignedIdentities {
	readonly "[ key: string ]"?: UserAssignedIdentity | undefined;
}
export interface MigrateMySqlStatusProperties {
	readonly localMySqlEnabled?: boolean | undefined;
	readonly migrationOperationStatus?: ("Created" | "Failed" | "InProgress" | "Succeeded") | undefined;
	readonly operationId?: string | undefined;
}
export interface MSDeployCoreOrMSDeployStatusProperties {
	readonly appOffline?: boolean | undefined;
	readonly complete?: boolean | undefined;
	readonly connectionString?: string | undefined;
	readonly dbType?: string | undefined;
	readonly deployer?: string | undefined;
	readonly endTime?: string | undefined;
	readonly packageUri?: string | undefined;
	readonly provisioningState?: ("accepted" | "canceled" | "failed" | "running") | undefined;
	readonly setParameters?: MSDeployCoreSetParameters | undefined;
	readonly setParametersXmlFileUri?: string | undefined;
	readonly skipAppData?: boolean | undefined;
	readonly startTime?: string | undefined;
}
export interface MSDeployCoreSetParameters {
	readonly "[ key: string ]"?: string | undefined;
}
export interface NameValuePair {
	readonly name?: string | undefined;
	readonly value?: string | undefined;
}
export interface NetworkFeaturesProperties {
	readonly hybridConnections?: RelayServiceConnectionEntity[] | undefined;
	readonly hybridConnectionsV2?: HybridConnection[] | undefined;
	readonly virtualNetworkConnection?: VnetInfo | undefined;
	readonly virtualNetworkName?: string | undefined;
}
export interface Nonce {
	readonly nonceExpirationInterval?: string | undefined;
	readonly validateNonce?: boolean | undefined;
}
export interface OpenIdConnectClientCredential {
	readonly clientSecretSettingName?: string | undefined;
	readonly method?: "ClientSecretPost" | undefined;
}
export interface OpenIdConnectConfig {
	readonly authorizationEndpoint?: string | undefined;
	readonly certificationUri?: string | undefined;
	readonly issuer?: string | undefined;
	readonly tokenEndpoint?: string | undefined;
	readonly wellKnownOpenIdConfiguration?: string | undefined;
}
export interface OpenIdConnectLogin {
	readonly nameClaimType?: string | undefined;
	readonly scopes?: string[] | undefined;
}
export interface OpenIdConnectRegistration {
	readonly clientCredential?: OpenIdConnectClientCredential | undefined;
	readonly clientId?: string | undefined;
	readonly openIdConnectConfiguration?: OpenIdConnectConfig | undefined;
}
export interface PremierAddOnProperties {
	readonly marketplaceOffer?: string | undefined;
	readonly marketplacePublisher?: string | undefined;
	readonly product?: string | undefined;
	readonly sku?: string | undefined;
	readonly vendor?: string | undefined;
}
export interface PrivateAccessProperties {
	readonly enabled?: boolean | undefined;
	readonly virtualNetworks?: PrivateAccessVirtualNetwork[] | undefined;
}
export interface PrivateAccessSubnet {
	readonly key?: number | undefined;
	readonly name?: string | undefined;
}
export interface PrivateAccessVirtualNetwork {
	readonly key?: number | undefined;
	readonly name?: string | undefined;
	readonly resourceId?: string | undefined;
	readonly subnets?: PrivateAccessSubnet[] | undefined;
}
export interface PrivateLinkConnectionApprovalRequestOrRemotePrivateEndpointConnectionARMResourceProperties {
	readonly ipAddresses?: string[] | undefined;
	readonly privateEndpoint?: ArmIdWrapper | undefined;
	readonly privateLinkServiceConnectionState?: PrivateLinkConnectionState | undefined;
	readonly provisioningState?: string | undefined;
}
export interface PrivateLinkConnectionState {
	readonly actionsRequired?: string | undefined;
	readonly description?: string | undefined;
	readonly status?: string | undefined;
}
export interface ProcessInfoProperties {
	readonly children?: string[] | undefined;
	readonly command_line?: string | undefined;
	readonly deployment_name?: string | undefined;
	readonly description?: string | undefined;
	readonly environment_variables?: ProcessInfoPropertiesEnvironmentVariables | undefined;
	readonly file_name?: string | undefined;
	readonly handle_count?: number | undefined;
	readonly href?: string | undefined;
	readonly identifier?: number | undefined;
	readonly iis_profile_timeout_in_seconds?: number | undefined;
	readonly is_iis_profile_running?: boolean | undefined;
	readonly is_profile_running?: boolean | undefined;
	readonly is_scm_site?: boolean | undefined;
	readonly is_webjob?: boolean | undefined;
	readonly minidump?: string | undefined;
	readonly module_count?: number | undefined;
	readonly modules?: ProcessModuleInfo[] | undefined;
	readonly non_paged_system_memory?: number | undefined;
	readonly open_file_handles?: string[] | undefined;
	readonly paged_memory?: number | undefined;
	readonly paged_system_memory?: number | undefined;
	readonly parent?: string | undefined;
	readonly peak_paged_memory?: number | undefined;
	readonly peak_virtual_memory?: number | undefined;
	readonly peak_working_set?: number | undefined;
	readonly private_memory?: number | undefined;
	readonly privileged_cpu_time?: string | undefined;
	readonly start_time?: string | undefined;
	readonly thread_count?: number | undefined;
	readonly threads?: ProcessThreadInfo[] | undefined;
	readonly time_stamp?: string | undefined;
	readonly total_cpu_time?: string | undefined;
	readonly user_cpu_time?: string | undefined;
	readonly user_name?: string | undefined;
	readonly virtual_memory?: number | undefined;
	readonly working_set?: number | undefined;
}
export interface ProcessInfoPropertiesEnvironmentVariables {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ProcessModuleInfo {
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: ProcessModuleInfoProperties | undefined;
	readonly type?: string | undefined;
}
export interface ProcessModuleInfoProperties {
	readonly base_address?: string | undefined;
	readonly file_description?: string | undefined;
	readonly file_name?: string | undefined;
	readonly file_path?: string | undefined;
	readonly file_version?: string | undefined;
	readonly href?: string | undefined;
	readonly is_debug?: boolean | undefined;
	readonly language?: string | undefined;
	readonly module_memory_size?: number | undefined;
	readonly product?: string | undefined;
	readonly product_version?: string | undefined;
}
export interface ProcessThreadInfo {
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: ProcessThreadInfoProperties | undefined;
	readonly type?: string | undefined;
}
export interface ProcessThreadInfoProperties {
	readonly base_priority?: number | undefined;
	readonly current_priority?: number | undefined;
	readonly href?: string | undefined;
	readonly identifier?: number | undefined;
	readonly priority_level?: string | undefined;
	readonly process?: string | undefined;
	readonly start_address?: string | undefined;
	readonly start_time?: string | undefined;
	readonly state?: string | undefined;
	readonly total_processor_time?: string | undefined;
	readonly user_processor_time?: string | undefined;
	readonly wait_reason?: string | undefined;
}
export interface PublicCertificateProperties {
	readonly blob?: any | undefined;
	readonly publicCertificateLocation?: ("CurrentUserMy" | "LocalMachineMy") | undefined;
	readonly thumbprint?: string | undefined;
}
export interface PushSettings {
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: PushSettingsProperties | undefined;
	readonly type?: string | undefined;
}
export interface PushSettingsProperties {
	readonly dynamicTagsJson?: string | undefined;
	readonly isPushEnabled: boolean;
	readonly tagsRequiringAuth?: string | undefined;
	readonly tagWhitelistJson?: string | undefined;
}
export interface QueryUtterancesResult {
	readonly sampleUtterance?: SampleUtterance | undefined;
	readonly score?: number | undefined;
}
export interface QueryUtterancesResults {
	readonly query?: string | undefined;
	readonly results?: QueryUtterancesResult[] | undefined;
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
export interface RecommendationRuleProperties {
	readonly actionName?: string | undefined;
	readonly bladeName?: string | undefined;
	readonly categoryTags?: string[] | undefined;
	readonly channels?: ("All" | "Api" | "Email" | "Notification") | undefined;
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly extensionName?: string | undefined;
	readonly forwardLink?: string | undefined;
	readonly isDynamic?: boolean | undefined;
	readonly level?: ("Critical" | "Information" | "NonUrgentSuggestion") | undefined;
	readonly message?: string | undefined;
	readonly recommendationId?: string | undefined;
	readonly recommendationName?: string | undefined;
}
export interface RelayServiceConnectionEntity {
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: RelayServiceConnectionEntityProperties | undefined;
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
export interface RemotePrivateEndpointConnection {
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: RemotePrivateEndpointConnectionProperties | undefined;
	readonly type?: string | undefined;
}
export interface RemotePrivateEndpointConnectionProperties {
	readonly ipAddresses?: string[] | undefined;
	readonly privateEndpoint?: ArmIdWrapper | undefined;
	readonly privateLinkServiceConnectionState?: PrivateLinkConnectionState | undefined;
	readonly provisioningState?: string | undefined;
}
export interface Rendering {
	readonly description?: string | undefined;
	readonly title?: string | undefined;
	readonly type?:
		| (
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
				| "TimeSeries"
		  )
		| undefined;
}
export interface RequestsBasedTrigger {
	readonly count?: number | undefined;
	readonly timeInterval?: string | undefined;
}
export interface ResourceHealthMetadataProperties {
	readonly category?: string | undefined;
	readonly signalAvailability?: boolean | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ResponseMessageEnvelopeRemotePrivateEndpointConnection {
	readonly error?: ErrorEntity | undefined;
	readonly id?: string | undefined;
	readonly identity?: ManagedServiceIdentity | undefined;
	readonly location?: string | undefined;
	readonly name?: string | undefined;
	readonly plan?: ArmPlan | undefined;
	readonly properties?: RemotePrivateEndpointConnection | undefined;
	readonly sku?: SkuDescription | undefined;
	readonly status?: string | undefined;
	readonly tags?: ResponseMessageEnvelopeRemotePrivateEndpointConnectionTags | undefined;
	readonly type?: string | undefined;
	readonly zones?: string[] | undefined;
}
export interface ResponseMessageEnvelopeRemotePrivateEndpointConnectionTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface SampleUtterance {
	readonly links?: string[] | undefined;
	readonly qid?: string | undefined;
	readonly text?: string | undefined;
}
export interface SiteAuthSettingsProperties {
	readonly aadClaimsAuthorization?: string | undefined;
	readonly additionalLoginParams?: string[] | undefined;
	readonly allowedAudiences?: string[] | undefined;
	readonly allowedExternalRedirectUrls?: string[] | undefined;
	readonly authFilePath?: string | undefined;
	readonly clientId?: string | undefined;
	readonly clientSecret?: string | undefined;
	readonly clientSecretCertificateThumbprint?: string | undefined;
	readonly clientSecretSettingName?: string | undefined;
	readonly configVersion?: string | undefined;
	readonly defaultProvider?:
		| ("AzureActiveDirectory" | "Facebook" | "Github" | "Google" | "MicrosoftAccount")
		| undefined;
	readonly enabled?: boolean | undefined;
	readonly facebookAppId?: string | undefined;
	readonly facebookAppSecret?: string | undefined;
	readonly facebookAppSecretSettingName?: string | undefined;
	readonly facebookOAuthScopes?: string[] | undefined;
	readonly gitHubClientId?: string | undefined;
	readonly gitHubClientSecret?: string | undefined;
	readonly gitHubClientSecretSettingName?: string | undefined;
	readonly gitHubOAuthScopes?: string[] | undefined;
	readonly googleClientId?: string | undefined;
	readonly googleClientSecret?: string | undefined;
	readonly googleClientSecretSettingName?: string | undefined;
	readonly googleOAuthScopes?: string[] | undefined;
	readonly isAuthFromFile?: string | undefined;
	readonly issuer?: string | undefined;
	readonly microsoftAccountClientId?: string | undefined;
	readonly microsoftAccountClientSecret?: string | undefined;
	readonly microsoftAccountClientSecretSettingName?: string | undefined;
	readonly microsoftAccountOAuthScopes?: string[] | undefined;
	readonly runtimeVersion?: string | undefined;
	readonly tokenRefreshExtensionHours?: number | undefined;
	readonly tokenStoreEnabled?: boolean | undefined;
	readonly twitterConsumerKey?: string | undefined;
	readonly twitterConsumerSecret?: string | undefined;
	readonly twitterConsumerSecretSettingName?: string | undefined;
	readonly unauthenticatedClientAction?: "AllowAnonymous" | undefined;
	readonly validateIssuer?: boolean | undefined;
}
export interface SiteAuthSettingsV2Properties {
	readonly globalValidation?: GlobalValidation | undefined;
	readonly httpSettings?: HttpSettings | undefined;
	readonly identityProviders?: IdentityProviders | undefined;
	readonly login?: Login | undefined;
	readonly platform?: AuthPlatform | undefined;
}
export interface SiteConfig {
	readonly acrUseManagedIdentityCreds?: boolean | undefined;
	readonly acrUserManagedIdentityID?: string | undefined;
	readonly alwaysOn?: boolean | undefined;
	readonly apiDefinition?: ApiDefinitionInfo | undefined;
	readonly apiManagementConfig?: ApiManagementConfig | undefined;
	readonly appCommandLine?: string | undefined;
	readonly appSettings?: NameValuePair[] | undefined;
	readonly autoHealEnabled?: boolean | undefined;
	readonly autoHealRules?: AutoHealRules | undefined;
	readonly autoSwapSlotName?: string | undefined;
	readonly azureStorageAccounts?: SiteConfigAzureStorageAccounts | undefined;
	readonly connectionStrings?: ConnStringInfo[] | undefined;
	readonly cors?: CorsSettings | undefined;
	readonly defaultDocuments?: string[] | undefined;
	readonly detailedErrorLoggingEnabled?: boolean | undefined;
	readonly documentRoot?: string | undefined;
	readonly experiments?: Experiments | undefined;
	readonly ftpsState?: ("AllAllowed" | "Disabled" | "FtpsOnly") | undefined;
	readonly functionAppScaleLimit?: number | undefined;
	readonly functionsRuntimeScaleMonitoringEnabled?: boolean | undefined;
	readonly handlerMappings?: HandlerMapping[] | undefined;
	readonly healthCheckPath?: string | undefined;
	readonly http20Enabled?: boolean | undefined;
	readonly httpLoggingEnabled?: boolean | undefined;
	readonly ipSecurityRestrictions?: IpSecurityRestriction[] | undefined;
	readonly javaContainer?: string | undefined;
	readonly javaContainerVersion?: string | undefined;
	readonly javaVersion?: string | undefined;
	readonly keyVaultReferenceIdentity?: string | undefined;
	readonly limits?: SiteLimits | undefined;
	readonly linuxFxVersion?: string | undefined;
	readonly loadBalancing?:
		| ("LeastRequests" | "LeastResponseTime" | "PerSiteRoundRobin" | "RequestHash" | "WeightedRoundRobin")
		| undefined;
	readonly localMySqlEnabled?: boolean | undefined;
	readonly logsDirectorySizeLimit?: number | undefined;
	readonly machineKey?: SiteMachineKey | undefined;
	readonly managedPipelineMode?: "Classic" | undefined;
	readonly managedServiceIdentityId?: number | undefined;
	readonly minimumElasticInstanceCount?: number | undefined;
	readonly minTlsVersion?: ("1.0" | "1.1" | "1.2") | undefined;
	readonly netFrameworkVersion?: string | undefined;
	readonly nodeVersion?: string | undefined;
	readonly numberOfWorkers?: number | undefined;
	readonly phpVersion?: string | undefined;
	readonly powerShellVersion?: string | undefined;
	readonly preWarmedInstanceCount?: number | undefined;
	readonly publicNetworkAccess?: string | undefined;
	readonly publishingUsername?: string | undefined;
	readonly push?: PushSettings | undefined;
	readonly pythonVersion?: string | undefined;
	readonly remoteDebuggingEnabled?: boolean | undefined;
	readonly remoteDebuggingVersion?: string | undefined;
	readonly requestTracingEnabled?: boolean | undefined;
	readonly requestTracingExpirationTime?: string | undefined;
	readonly scmIpSecurityRestrictions?: IpSecurityRestriction[] | undefined;
	readonly scmIpSecurityRestrictionsUseMain?: boolean | undefined;
	readonly scmMinTlsVersion?: ("1.0" | "1.1" | "1.2") | undefined;
	readonly scmType?:
		| (
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
				| "VSTSRM"
		  )
		| undefined;
	readonly tracingOptions?: string | undefined;
	readonly use32BitWorkerProcess?: boolean | undefined;
	readonly virtualApplications?: VirtualApplication[] | undefined;
	readonly vnetName?: string | undefined;
	readonly vnetPrivatePortsCount?: number | undefined;
	readonly vnetRouteAllEnabled?: boolean | undefined;
	readonly websiteTimeZone?: string | undefined;
	readonly webSocketsEnabled?: boolean | undefined;
	readonly windowsFxVersion?: string | undefined;
	readonly xManagedServiceIdentityId?: number | undefined;
}
export interface SiteConfigAzureStorageAccounts {
	readonly "[ key: string ]"?: AzureStorageInfoValue | undefined;
}
export interface SiteExtensionInfoProperties {
	readonly authors?: string[] | undefined;
	readonly comment?: string | undefined;
	readonly description?: string | undefined;
	readonly download_count?: number | undefined;
	readonly extension_id?: string | undefined;
	readonly extension_type?: "Gallery" | undefined;
	readonly extension_url?: string | undefined;
	readonly feed_url?: string | undefined;
	readonly icon_url?: string | undefined;
	readonly installed_date_time?: string | undefined;
	readonly installer_command_line_params?: string | undefined;
	readonly license_url?: string | undefined;
	readonly local_is_latest_version?: boolean | undefined;
	readonly local_path?: string | undefined;
	readonly project_url?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly published_date_time?: string | undefined;
	readonly summary?: string | undefined;
	readonly title?: string | undefined;
	readonly version?: string | undefined;
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
export interface SiteMachineKey {
	readonly decryption?: string | undefined;
	readonly decryptionKey?: string | undefined;
	readonly validation?: string | undefined;
	readonly validationKey?: string | undefined;
}
export interface SiteProperties {
	readonly availabilityState?: ("DisasterRecoveryMode" | "Limited") | undefined;
	readonly clientAffinityEnabled?: boolean | undefined;
	readonly clientCertEnabled?: boolean | undefined;
	readonly clientCertExclusionPaths?: string | undefined;
	readonly clientCertMode?: ("Optional" | "OptionalInteractiveUser") | undefined;
}
export interface SiteSourceControlProperties {
	readonly branch?: string | undefined;
	readonly deploymentRollbackEnabled?: boolean | undefined;
	readonly gitHubActionConfiguration?: GitHubActionConfiguration | undefined;
	readonly isGitHubAction?: boolean | undefined;
	readonly isManualIntegration?: boolean | undefined;
	readonly isMercurial?: boolean | undefined;
	readonly repoUrl?: string | undefined;
}
export interface SkuCapacity {
	readonly default?: number | undefined;
	readonly elasticMaximum?: number | undefined;
	readonly maximum?: number | undefined;
	readonly minimum?: number | undefined;
	readonly scaleType?: string | undefined;
}
export interface SkuDescription {
	readonly capabilities?: Capability[] | undefined;
	readonly capacity?: number | undefined;
	readonly family?: string | undefined;
	readonly locations?: string[] | undefined;
	readonly name?: string | undefined;
	readonly size?: string | undefined;
	readonly skuCapacity?: SkuCapacity | undefined;
	readonly tier?: string | undefined;
}
export interface SlotConfigNames {
	readonly appSettingNames?: string[] | undefined;
	readonly azureStorageConfigNames?: string[] | undefined;
	readonly connectionStringNames?: string[] | undefined;
}
export interface SlotSwapStatus {
	readonly destinationSlotName?: string | undefined;
	readonly sourceSlotName?: string | undefined;
	readonly timestampUtc?: string | undefined;
}
export interface SlowRequestsBasedTrigger {
	readonly count?: number | undefined;
	readonly path?: string | undefined;
	readonly timeInterval?: string | undefined;
	readonly timeTaken?: string | undefined;
}
export interface SourceControlProperties {
	readonly expirationTime?: string | undefined;
	readonly refreshToken?: string | undefined;
	readonly token?: string | undefined;
	readonly tokenSecret?: string | undefined;
}
export interface StaticSite {
	readonly allowConfigFileUpdates?: boolean | undefined;
	readonly branch?: string | undefined;
	readonly buildProperties?: StaticSiteBuildProperties | undefined;
	readonly contentDistributionEndpoint?: string | undefined;
	readonly customDomains?: string[] | undefined;
	readonly defaultHostname?: string | undefined;
	readonly keyVaultReferenceIdentity?: string | undefined;
	readonly privateEndpointConnections?: ResponseMessageEnvelopeRemotePrivateEndpointConnection[] | undefined;
	readonly provider?: string | undefined;
	readonly repositoryToken?: string | undefined;
	readonly repositoryUrl?: string | undefined;
	readonly stagingEnvironmentPolicy?: "Disabled" | undefined;
	readonly templateProperties?: StaticSiteTemplateOptions | undefined;
	readonly userProvidedFunctionApps?: StaticSiteUserProvidedFunctionApp[] | undefined;
}
export interface StaticSiteBuildARMResourceProperties {
	readonly buildId?: string | undefined;
	readonly createdTimeUtc?: string | undefined;
	readonly hostname?: string | undefined;
	readonly lastUpdatedOn?: string | undefined;
	readonly pullRequestTitle?: string | undefined;
	readonly sourceBranch?: string | undefined;
	readonly status?:
		| ("Deleting" | "Deploying" | "Detached" | "Failed" | "Ready" | "Uploading" | "WaitingForDeployment")
		| undefined;
	readonly userProvidedFunctionApps?: StaticSiteUserProvidedFunctionApp[] | undefined;
}
export interface StaticSiteBuildProperties {
	readonly apiBuildCommand?: string | undefined;
	readonly apiLocation?: string | undefined;
	readonly appArtifactLocation?: string | undefined;
	readonly appBuildCommand?: string | undefined;
	readonly appLocation?: string | undefined;
	readonly githubActionSecretNameOverride?: string | undefined;
	readonly outputLocation?: string | undefined;
	readonly skipGithubActionWorkflowGeneration?: boolean | undefined;
}
export interface StaticSiteCustomDomainRequestPropertiesARMResourcePropertiesOrStaticSiteCustomDomainOverviewARMResourceProperties {
	readonly createdOn?: string | undefined;
	readonly domainName?: string | undefined;
	readonly errorMessage?: string | undefined;
	readonly status?:
		| ("Adding" | "Deleting" | "Failed" | "Ready" | "RetrievingValidationToken" | "Validating")
		| undefined;
	readonly validationMethod?: string | undefined;
	readonly validationToken?: string | undefined;
}
export interface StaticSiteTemplateOptions {
	readonly description?: string | undefined;
	readonly isPrivate?: boolean | undefined;
	readonly owner?: string | undefined;
	readonly repositoryName?: string | undefined;
	readonly templateRepositoryUrl?: string | undefined;
}
export interface StaticSiteUserARMResource {
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: StaticSiteUserARMResourceProperties | undefined;
	readonly type?: string | undefined;
}
export interface StaticSiteUserARMResourceProperties {
	readonly displayName?: string | undefined;
	readonly provider?: string | undefined;
	readonly roles?: string | undefined;
	readonly userId?: string | undefined;
}
export interface StaticSiteUserCollection {
	readonly nextLink?: string | undefined;
	readonly value: StaticSiteUserARMResource[];
}
export interface StaticSiteUserProvidedFunctionApp {
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: StaticSiteUserProvidedFunctionAppProperties | undefined;
	readonly type?: string | undefined;
}
export interface StaticSiteUserProvidedFunctionAppARMResourceProperties {
	readonly createdOn?: string | undefined;
	readonly functionAppRegion?: string | undefined;
	readonly functionAppResourceId?: string | undefined;
}
export interface StaticSiteUserProvidedFunctionAppProperties {
	readonly createdOn?: string | undefined;
	readonly functionAppRegion?: string | undefined;
	readonly functionAppResourceId?: string | undefined;
}
export interface Status {
	readonly message?: string | undefined;
	readonly statusId?: ("Critical" | "Info" | "None" | "Success") | undefined;
}
export interface StatusCodesBasedTrigger {
	readonly count?: number | undefined;
	readonly path?: string | undefined;
	readonly status?: number | undefined;
	readonly subStatus?: number | undefined;
	readonly timeInterval?: string | undefined;
	readonly win32Status?: number | undefined;
}
export interface StatusCodesRangeBasedTrigger {
	readonly count?: number | undefined;
	readonly path?: string | undefined;
	readonly statusCodes?: string | undefined;
	readonly timeInterval?: string | undefined;
}
export interface StringDictionary {
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: StringDictionaryProperties | undefined;
	readonly type?: string | undefined;
}
export interface StringDictionaryProperties {
	readonly "[ key: string ]"?: string | undefined;
}
export interface StringList {
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: string[] | undefined;
	readonly type?: string | undefined;
}
export interface SupportTopic {
	readonly id?: string | undefined;
	readonly pesId?: string | undefined;
}
export interface SwiftVirtualNetworkProperties {
	readonly subnetResourceId?: string | undefined;
	readonly swiftSupported?: boolean | undefined;
}
export interface TokenStore {
	readonly azureBlobStorage?: BlobStorageTokenStore | undefined;
	readonly enabled?: boolean | undefined;
	readonly fileSystem?: FileSystemTokenStore | undefined;
	readonly tokenRefreshExtensionHours?: number | undefined;
}
export interface TriggeredJobHistoryProperties {
	readonly runs?: TriggeredJobRun[] | undefined;
}
export interface TriggeredJobRun {
	readonly duration?: string | undefined;
	readonly end_time?: string | undefined;
	readonly error_url?: string | undefined;
	readonly job_name?: string | undefined;
	readonly output_url?: string | undefined;
	readonly start_time?: string | undefined;
	readonly status?: ("Error" | "Failed") | undefined;
	readonly trigger?: string | undefined;
	readonly url?: string | undefined;
	readonly web_job_id?: string | undefined;
	readonly web_job_name?: string | undefined;
}
export interface TriggeredWebJobProperties {
	readonly error?: string | undefined;
	readonly extra_info_url?: string | undefined;
	readonly history_url?: string | undefined;
	readonly latest_run?: TriggeredJobRun | undefined;
	readonly run_command?: string | undefined;
	readonly scheduler_logs_url?: string | undefined;
	readonly settings?: TriggeredWebJobPropertiesSettings | undefined;
	readonly url?: string | undefined;
	readonly using_sdk?: boolean | undefined;
	readonly web_job_type?: "Continuous" | undefined;
}
export interface TriggeredWebJobPropertiesSettings {
	readonly "[ key: string ]"?: any | undefined;
}
export interface Twitter {
	readonly enabled?: boolean | undefined;
	readonly registration?: TwitterRegistration | undefined;
}
export interface TwitterRegistration {
	readonly consumerKey?: string | undefined;
	readonly consumerSecretSettingName?: string | undefined;
}
export interface UserAssignedIdentity {
	readonly clientId?: string | undefined;
	readonly principalId?: string | undefined;
}
export interface UserProperties {
	readonly publishingPassword?: string | undefined;
	readonly publishingPasswordHash?: string | undefined;
	readonly publishingPasswordHashSalt?: string | undefined;
	readonly publishingUserName: string;
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
	readonly serviceName?: string | undefined;
	readonly virtualIP?: string | undefined;
}
export interface VirtualNetworkProfile {
	readonly id: string;
	readonly name?: string | undefined;
	readonly subnet?: string | undefined;
	readonly type?: string | undefined;
}
export interface VnetGatewayProperties {
	readonly vnetName?: string | undefined;
	readonly vpnPackageUri: string;
}
export interface VnetInfo {
	readonly certBlob?: string | undefined;
	readonly certThumbprint?: string | undefined;
	readonly dnsServers?: string | undefined;
	readonly isSwift?: boolean | undefined;
	readonly resyncRequired?: boolean | undefined;
	readonly routes?: VnetRoute[] | undefined;
	readonly vnetResourceId?: string | undefined;
}
export interface VnetRoute {
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: VnetRouteProperties | undefined;
	readonly type?: string | undefined;
}
export interface VnetRouteProperties {
	readonly endAddress?: string | undefined;
	readonly routeType?: ("DEFAULT" | "INHERITED" | "STATIC") | undefined;
}
export interface WebJobProperties {
	readonly error?: string | undefined;
	readonly extra_info_url?: string | undefined;
	readonly run_command?: string | undefined;
	readonly settings?: WebJobPropertiesSettings | undefined;
	readonly url?: string | undefined;
	readonly using_sdk?: boolean | undefined;
	readonly web_job_type?: "Continuous" | undefined;
}
export interface WebJobPropertiesSettings {
	readonly "[ key: string ]"?: any | undefined;
}
export interface WebSiteInstanceStatusProperties {
	readonly consoleUrl?: string | undefined;
	readonly containers?: WebSiteInstanceStatusPropertiesContainers | undefined;
	readonly detectorUrl?: string | undefined;
	readonly healthCheckUrl?: string | undefined;
	readonly state?: ("READY" | "STOPPED") | undefined;
	readonly statusUrl?: string | undefined;
}
export interface WebSiteInstanceStatusPropertiesContainers {
	readonly "[ key: string ]"?: ContainerInfo | undefined;
}
export interface WorkerPool {
	readonly computeMode?: ("Dedicated" | "Dynamic") | undefined;
	readonly instanceNames?: string[] | undefined;
	readonly workerCount?: number | undefined;
	readonly workerSize?: string | undefined;
	readonly workerSizeId?: number | undefined;
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
	kubeEnvironments: kubeEnvironments,
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

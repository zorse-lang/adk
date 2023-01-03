import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class certificates extends ArmResource<certificatesComponentInputs> implements certificatesComponentOutputs {
	constructor(entity: ADKEntity, options: certificatesComponentInputs) {
		super(entity, options.name, "Microsoft.Web/certificates", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/certificates";
}
export interface certificatesComponentOutputs {
	readonly apiVersion: "2018-11-01";
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
export class sites extends ArmResource<sitesComponentInputs> implements sitesComponentOutputs {
	constructor(entity: ADKEntity, options: sitesComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites";
}
export interface sitesComponentOutputs {
	readonly apiVersion: "2018-11-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites";
}
export interface sitesComponentInputs {
	readonly identity?: ManagedServiceIdentity | undefined;
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: SiteProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class sites_backups extends ArmResource<sites_backupsComponentInputs> implements sites_backupsComponentOutputs {
	constructor(entity: ADKEntity, options: sites_backupsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/backups", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/backups";
}
export interface sites_backupsComponentOutputs {
	readonly apiVersion: "2018-11-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/backups";
}
export interface sites_backupsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: BackupItemProperties | undefined;
}
export class sites_config_appsettings
	extends ArmResource<sites_config_appsettingsComponentInputs>
	implements sites_config_appsettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_config_appsettingsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/config", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_appsettingsComponentOutputs {
	readonly apiVersion: "2018-11-01";
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
		super(entity, options.name, "Microsoft.Web/sites/config", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_authsettingsComponentOutputs {
	readonly apiVersion: "2018-11-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_authsettingsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: SiteAuthSettingsProperties | undefined;
}
export class sites_config_azurestorageaccounts
	extends ArmResource<sites_config_azurestorageaccountsComponentInputs>
	implements sites_config_azurestorageaccountsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_config_azurestorageaccountsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/config", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_azurestorageaccountsComponentOutputs {
	readonly apiVersion: "2018-11-01";
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
		super(entity, options.name, "Microsoft.Web/sites/config", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_backupComponentOutputs {
	readonly apiVersion: "2018-11-01";
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
		super(entity, options.name, "Microsoft.Web/sites/config", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_connectionstringsComponentOutputs {
	readonly apiVersion: "2018-11-01";
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
		super(entity, options.name, "Microsoft.Web/sites/config", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_logsComponentOutputs {
	readonly apiVersion: "2018-11-01";
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
		super(entity, options.name, "Microsoft.Web/sites/config", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_metadataComponentOutputs {
	readonly apiVersion: "2018-11-01";
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
		super(entity, options.name, "Microsoft.Web/sites/config", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_pushsettingsComponentOutputs {
	readonly apiVersion: "2018-11-01";
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
		super(entity, options.name, "Microsoft.Web/sites/config", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_slotConfigNamesComponentOutputs {
	readonly apiVersion: "2018-11-01";
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
		super(entity, options.name, "Microsoft.Web/sites/config", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_webComponentOutputs {
	readonly apiVersion: "2018-11-01";
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
		super(entity, options.name, "Microsoft.Web/sites/config/snapshots", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/config/snapshots";
}
export interface sites_config_snapshotsComponentOutputs {
	readonly apiVersion: "2018-11-01";
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
		super(entity, options.name, "Microsoft.Web/sites/continuouswebjobs", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/continuouswebjobs";
}
export interface sites_continuouswebjobsComponentOutputs {
	readonly apiVersion: "2018-11-01";
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
		super(entity, options.name, "Microsoft.Web/sites/deployments", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/deployments";
}
export interface sites_deploymentsComponentOutputs {
	readonly apiVersion: "2018-11-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/deployments";
}
export interface sites_deploymentsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: DeploymentProperties | undefined;
}
export class sites_domainOwnershipIdentifiers
	extends ArmResource<sites_domainOwnershipIdentifiersComponentInputs>
	implements sites_domainOwnershipIdentifiersComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_domainOwnershipIdentifiersComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/domainOwnershipIdentifiers", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/domainOwnershipIdentifiers";
}
export interface sites_domainOwnershipIdentifiersComponentOutputs {
	readonly apiVersion: "2018-11-01";
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
		super(entity, options.name, "Microsoft.Web/sites/extensions", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/extensions";
}
export interface sites_extensionsComponentOutputs {
	readonly apiVersion: "2018-11-01";
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
		super(entity, options.name, "Microsoft.Web/sites/functions", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/functions";
}
export interface sites_functionsComponentOutputs {
	readonly apiVersion: "2018-11-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/functions";
}
export interface sites_functionsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: FunctionEnvelopeProperties | undefined;
}
export class sites_hostNameBindings
	extends ArmResource<sites_hostNameBindingsComponentInputs>
	implements sites_hostNameBindingsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_hostNameBindingsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/hostNameBindings", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/hostNameBindings";
}
export interface sites_hostNameBindingsComponentOutputs {
	readonly apiVersion: "2018-11-01";
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
		super(entity, options.name, "Microsoft.Web/sites/hybridconnection", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/hybridconnection";
}
export interface sites_hybridconnectionComponentOutputs {
	readonly apiVersion: "2018-11-01";
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
		super(entity, options.name, "Microsoft.Web/sites/hybridConnectionNamespaces/relays", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/hybridConnectionNamespaces/relays";
}
export interface sites_hybridConnectionNamespaces_relaysComponentOutputs {
	readonly apiVersion: "2018-11-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/hybridConnectionNamespaces/relays";
}
export interface sites_hybridConnectionNamespaces_relaysComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: HybridConnectionProperties | undefined;
}
export class sites_instances_extensions
	extends ArmResource<sites_instances_extensionsComponentInputs>
	implements sites_instances_extensionsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_instances_extensionsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/instances/extensions", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/instances/extensions";
}
export interface sites_instances_extensionsComponentOutputs {
	readonly apiVersion: "2018-11-01";
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
		super(entity, options.name, "Microsoft.Web/sites/instances/processes", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/instances/processes";
}
export interface sites_instances_processesComponentOutputs {
	readonly apiVersion: "2018-11-01";
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
		super(entity, options.name, "Microsoft.Web/sites/instances/processes/modules", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/instances/processes/modules";
}
export interface sites_instances_processes_modulesComponentOutputs {
	readonly apiVersion: "2018-11-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/instances/processes/modules";
}
export interface sites_instances_processes_modulesComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: ProcessModuleInfoProperties | undefined;
}
export class sites_instances_processes_threads
	extends ArmResource<sites_instances_processes_threadsComponentInputs>
	implements sites_instances_processes_threadsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_instances_processes_threadsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/instances/processes/threads", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/instances/processes/threads";
}
export interface sites_instances_processes_threadsComponentOutputs {
	readonly apiVersion: "2018-11-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/instances/processes/threads";
}
export interface sites_instances_processes_threadsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: ProcessThreadInfoProperties | undefined;
}
export class sites_migratemysql
	extends ArmResource<sites_migratemysqlComponentInputs>
	implements sites_migratemysqlComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_migratemysqlComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/migratemysql", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/migratemysql";
}
export interface sites_migratemysqlComponentOutputs {
	readonly apiVersion: "2018-11-01";
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
		super(entity, options.name, "Microsoft.Web/sites/networkConfig", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/networkConfig";
}
export interface sites_networkConfigComponentOutputs {
	readonly apiVersion: "2018-11-01";
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
		super(entity, options.name, "Microsoft.Web/sites/networkFeatures", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/networkFeatures";
}
export interface sites_networkFeaturesComponentOutputs {
	readonly apiVersion: "2018-11-01";
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
		super(entity, options.name, "Microsoft.Web/sites/premieraddons", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/premieraddons";
}
export interface sites_premieraddonsComponentOutputs {
	readonly apiVersion: "2018-11-01";
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
		super(entity, options.name, "Microsoft.Web/sites/privateAccess", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/privateAccess";
}
export interface sites_privateAccessComponentOutputs {
	readonly apiVersion: "2018-11-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/privateAccess";
}
export interface sites_privateAccessComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: PrivateAccessProperties | undefined;
}
export class sites_processes
	extends ArmResource<sites_processesComponentInputs>
	implements sites_processesComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_processesComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/processes", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/processes";
}
export interface sites_processesComponentOutputs {
	readonly apiVersion: "2018-11-01";
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
		super(entity, options.name, "Microsoft.Web/sites/processes/modules", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/processes/modules";
}
export interface sites_processes_modulesComponentOutputs {
	readonly apiVersion: "2018-11-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/processes/modules";
}
export interface sites_processes_modulesComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: ProcessModuleInfoProperties | undefined;
}
export class sites_processes_threads
	extends ArmResource<sites_processes_threadsComponentInputs>
	implements sites_processes_threadsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_processes_threadsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/processes/threads", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/processes/threads";
}
export interface sites_processes_threadsComponentOutputs {
	readonly apiVersion: "2018-11-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/processes/threads";
}
export interface sites_processes_threadsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: ProcessThreadInfoProperties | undefined;
}
export class sites_publicCertificates
	extends ArmResource<sites_publicCertificatesComponentInputs>
	implements sites_publicCertificatesComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_publicCertificatesComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/publicCertificates", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/publicCertificates";
}
export interface sites_publicCertificatesComponentOutputs {
	readonly apiVersion: "2018-11-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/publicCertificates";
}
export interface sites_publicCertificatesComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: PublicCertificateProperties | undefined;
}
export class sites_siteextensions
	extends ArmResource<sites_siteextensionsComponentInputs>
	implements sites_siteextensionsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_siteextensionsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/siteextensions", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/siteextensions";
}
export interface sites_siteextensionsComponentOutputs {
	readonly apiVersion: "2018-11-01";
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
		super(entity, options.name, "Microsoft.Web/sites/slots", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots";
}
export interface sites_slotsComponentOutputs {
	readonly apiVersion: "2018-11-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots";
}
export interface sites_slotsComponentInputs {
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
		super(entity, options.name, "Microsoft.Web/sites/slots/backups", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/backups";
}
export interface sites_slots_backupsComponentOutputs {
	readonly apiVersion: "2018-11-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/backups";
}
export interface sites_slots_backupsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: BackupItemProperties | undefined;
}
export class sites_slots_config_appsettings
	extends ArmResource<sites_slots_config_appsettingsComponentInputs>
	implements sites_slots_config_appsettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_config_appsettingsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/config", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/config";
}
export interface sites_slots_config_appsettingsComponentOutputs {
	readonly apiVersion: "2018-11-01";
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
		super(entity, options.name, "Microsoft.Web/sites/slots/config", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/config";
}
export interface sites_slots_config_authsettingsComponentOutputs {
	readonly apiVersion: "2018-11-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/config";
}
export interface sites_slots_config_authsettingsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: SiteAuthSettingsProperties | undefined;
}
export class sites_slots_config_azurestorageaccounts
	extends ArmResource<sites_slots_config_azurestorageaccountsComponentInputs>
	implements sites_slots_config_azurestorageaccountsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_config_azurestorageaccountsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/config", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/config";
}
export interface sites_slots_config_azurestorageaccountsComponentOutputs {
	readonly apiVersion: "2018-11-01";
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
		super(entity, options.name, "Microsoft.Web/sites/slots/config", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/config";
}
export interface sites_slots_config_backupComponentOutputs {
	readonly apiVersion: "2018-11-01";
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
		super(entity, options.name, "Microsoft.Web/sites/slots/config", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/config";
}
export interface sites_slots_config_connectionstringsComponentOutputs {
	readonly apiVersion: "2018-11-01";
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
		super(entity, options.name, "Microsoft.Web/sites/slots/config", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/config";
}
export interface sites_slots_config_logsComponentOutputs {
	readonly apiVersion: "2018-11-01";
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
		super(entity, options.name, "Microsoft.Web/sites/slots/config", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/config";
}
export interface sites_slots_config_metadataComponentOutputs {
	readonly apiVersion: "2018-11-01";
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
		super(entity, options.name, "Microsoft.Web/sites/slots/config", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/config";
}
export interface sites_slots_config_pushsettingsComponentOutputs {
	readonly apiVersion: "2018-11-01";
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
		super(entity, options.name, "Microsoft.Web/sites/slots/config", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/config";
}
export interface sites_slots_config_webComponentOutputs {
	readonly apiVersion: "2018-11-01";
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
		super(entity, options.name, "Microsoft.Web/sites/slots/config/snapshots", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/config/snapshots";
}
export interface sites_slots_config_snapshotsComponentOutputs {
	readonly apiVersion: "2018-11-01";
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
		super(entity, options.name, "Microsoft.Web/sites/slots/continuouswebjobs", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/continuouswebjobs";
}
export interface sites_slots_continuouswebjobsComponentOutputs {
	readonly apiVersion: "2018-11-01";
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
		super(entity, options.name, "Microsoft.Web/sites/slots/deployments", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/deployments";
}
export interface sites_slots_deploymentsComponentOutputs {
	readonly apiVersion: "2018-11-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/deployments";
}
export interface sites_slots_deploymentsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: DeploymentProperties | undefined;
}
export class sites_slots_domainOwnershipIdentifiers
	extends ArmResource<sites_slots_domainOwnershipIdentifiersComponentInputs>
	implements sites_slots_domainOwnershipIdentifiersComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_domainOwnershipIdentifiersComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/domainOwnershipIdentifiers", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/domainOwnershipIdentifiers";
}
export interface sites_slots_domainOwnershipIdentifiersComponentOutputs {
	readonly apiVersion: "2018-11-01";
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
		super(entity, options.name, "Microsoft.Web/sites/slots/extensions", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/extensions";
}
export interface sites_slots_extensionsComponentOutputs {
	readonly apiVersion: "2018-11-01";
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
		super(entity, options.name, "Microsoft.Web/sites/slots/functions", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/functions";
}
export interface sites_slots_functionsComponentOutputs {
	readonly apiVersion: "2018-11-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/functions";
}
export interface sites_slots_functionsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: FunctionEnvelopeProperties | undefined;
}
export class sites_slots_hostNameBindings
	extends ArmResource<sites_slots_hostNameBindingsComponentInputs>
	implements sites_slots_hostNameBindingsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_hostNameBindingsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/hostNameBindings", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/hostNameBindings";
}
export interface sites_slots_hostNameBindingsComponentOutputs {
	readonly apiVersion: "2018-11-01";
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
		super(entity, options.name, "Microsoft.Web/sites/slots/hybridconnection", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/hybridconnection";
}
export interface sites_slots_hybridconnectionComponentOutputs {
	readonly apiVersion: "2018-11-01";
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
		super(entity, options.name, "Microsoft.Web/sites/slots/hybridConnectionNamespaces/relays", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/hybridConnectionNamespaces/relays";
}
export interface sites_slots_hybridConnectionNamespaces_relaysComponentOutputs {
	readonly apiVersion: "2018-11-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/hybridConnectionNamespaces/relays";
}
export interface sites_slots_hybridConnectionNamespaces_relaysComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: HybridConnectionProperties | undefined;
}
export class sites_slots_instances_extensions
	extends ArmResource<sites_slots_instances_extensionsComponentInputs>
	implements sites_slots_instances_extensionsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_instances_extensionsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/instances/extensions", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/instances/extensions";
}
export interface sites_slots_instances_extensionsComponentOutputs {
	readonly apiVersion: "2018-11-01";
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
		super(entity, options.name, "Microsoft.Web/sites/slots/instances/processes", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/instances/processes";
}
export interface sites_slots_instances_processesComponentOutputs {
	readonly apiVersion: "2018-11-01";
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
		super(entity, options.name, "Microsoft.Web/sites/slots/instances/processes/modules", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/instances/processes/modules";
}
export interface sites_slots_instances_processes_modulesComponentOutputs {
	readonly apiVersion: "2018-11-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/instances/processes/modules";
}
export interface sites_slots_instances_processes_modulesComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: ProcessModuleInfoProperties | undefined;
}
export class sites_slots_instances_processes_threads
	extends ArmResource<sites_slots_instances_processes_threadsComponentInputs>
	implements sites_slots_instances_processes_threadsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_instances_processes_threadsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/instances/processes/threads", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/instances/processes/threads";
}
export interface sites_slots_instances_processes_threadsComponentOutputs {
	readonly apiVersion: "2018-11-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/instances/processes/threads";
}
export interface sites_slots_instances_processes_threadsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: ProcessThreadInfoProperties | undefined;
}
export class sites_slots_migratemysql
	extends ArmResource<sites_slots_migratemysqlComponentInputs>
	implements sites_slots_migratemysqlComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_migratemysqlComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/migratemysql", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/migratemysql";
}
export interface sites_slots_migratemysqlComponentOutputs {
	readonly apiVersion: "2018-11-01";
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
		super(entity, options.name, "Microsoft.Web/sites/slots/networkConfig", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/networkConfig";
}
export interface sites_slots_networkConfigComponentOutputs {
	readonly apiVersion: "2018-11-01";
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
		super(entity, options.name, "Microsoft.Web/sites/slots/networkFeatures", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/networkFeatures";
}
export interface sites_slots_networkFeaturesComponentOutputs {
	readonly apiVersion: "2018-11-01";
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
		super(entity, options.name, "Microsoft.Web/sites/slots/premieraddons", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/premieraddons";
}
export interface sites_slots_premieraddonsComponentOutputs {
	readonly apiVersion: "2018-11-01";
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
		super(entity, options.name, "Microsoft.Web/sites/slots/privateAccess", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/privateAccess";
}
export interface sites_slots_privateAccessComponentOutputs {
	readonly apiVersion: "2018-11-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/privateAccess";
}
export interface sites_slots_privateAccessComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: PrivateAccessProperties | undefined;
}
export class sites_slots_processes
	extends ArmResource<sites_slots_processesComponentInputs>
	implements sites_slots_processesComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_processesComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/processes", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/processes";
}
export interface sites_slots_processesComponentOutputs {
	readonly apiVersion: "2018-11-01";
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
		super(entity, options.name, "Microsoft.Web/sites/slots/processes/modules", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/processes/modules";
}
export interface sites_slots_processes_modulesComponentOutputs {
	readonly apiVersion: "2018-11-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/processes/modules";
}
export interface sites_slots_processes_modulesComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: ProcessModuleInfoProperties | undefined;
}
export class sites_slots_processes_threads
	extends ArmResource<sites_slots_processes_threadsComponentInputs>
	implements sites_slots_processes_threadsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_processes_threadsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/processes/threads", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/processes/threads";
}
export interface sites_slots_processes_threadsComponentOutputs {
	readonly apiVersion: "2018-11-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/processes/threads";
}
export interface sites_slots_processes_threadsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: ProcessThreadInfoProperties | undefined;
}
export class sites_slots_publicCertificates
	extends ArmResource<sites_slots_publicCertificatesComponentInputs>
	implements sites_slots_publicCertificatesComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_publicCertificatesComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/publicCertificates", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/publicCertificates";
}
export interface sites_slots_publicCertificatesComponentOutputs {
	readonly apiVersion: "2018-11-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/publicCertificates";
}
export interface sites_slots_publicCertificatesComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: PublicCertificateProperties | undefined;
}
export class sites_slots_siteextensions
	extends ArmResource<sites_slots_siteextensionsComponentInputs>
	implements sites_slots_siteextensionsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_siteextensionsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/siteextensions", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/siteextensions";
}
export interface sites_slots_siteextensionsComponentOutputs {
	readonly apiVersion: "2018-11-01";
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
		super(entity, options.name, "Microsoft.Web/sites/slots/sourcecontrols", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/sourcecontrols";
}
export interface sites_slots_sourcecontrolsComponentOutputs {
	readonly apiVersion: "2018-11-01";
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
		super(entity, options.name, "Microsoft.Web/sites/slots/triggeredwebjobs", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/triggeredwebjobs";
}
export interface sites_slots_triggeredwebjobsComponentOutputs {
	readonly apiVersion: "2018-11-01";
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
		super(entity, options.name, "Microsoft.Web/sites/slots/triggeredwebjobs/history", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/triggeredwebjobs/history";
}
export interface sites_slots_triggeredwebjobs_historyComponentOutputs {
	readonly apiVersion: "2018-11-01";
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
		super(entity, options.name, "Microsoft.Web/sites/slots/virtualNetworkConnections", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/virtualNetworkConnections";
}
export interface sites_slots_virtualNetworkConnectionsComponentOutputs {
	readonly apiVersion: "2018-11-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/virtualNetworkConnections";
}
export interface sites_slots_virtualNetworkConnectionsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: VnetInfoProperties | undefined;
}
export class sites_slots_virtualNetworkConnections_gateways
	extends ArmResource<sites_slots_virtualNetworkConnections_gatewaysComponentInputs>
	implements sites_slots_virtualNetworkConnections_gatewaysComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_virtualNetworkConnections_gatewaysComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/virtualNetworkConnections/gateways", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/virtualNetworkConnections/gateways";
}
export interface sites_slots_virtualNetworkConnections_gatewaysComponentOutputs {
	readonly apiVersion: "2018-11-01";
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
		super(entity, options.name, "Microsoft.Web/sites/slots/webjobs", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/webjobs";
}
export interface sites_slots_webjobsComponentOutputs {
	readonly apiVersion: "2018-11-01";
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
		super(entity, options.name, "Microsoft.Web/sites/sourcecontrols", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/sourcecontrols";
}
export interface sites_sourcecontrolsComponentOutputs {
	readonly apiVersion: "2018-11-01";
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
		super(entity, options.name, "Microsoft.Web/sites/triggeredwebjobs", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/triggeredwebjobs";
}
export interface sites_triggeredwebjobsComponentOutputs {
	readonly apiVersion: "2018-11-01";
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
		super(entity, options.name, "Microsoft.Web/sites/triggeredwebjobs/history", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/triggeredwebjobs/history";
}
export interface sites_triggeredwebjobs_historyComponentOutputs {
	readonly apiVersion: "2018-11-01";
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
		super(entity, options.name, "Microsoft.Web/sites/virtualNetworkConnections", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/virtualNetworkConnections";
}
export interface sites_virtualNetworkConnectionsComponentOutputs {
	readonly apiVersion: "2018-11-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/virtualNetworkConnections";
}
export interface sites_virtualNetworkConnectionsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: VnetInfoProperties | undefined;
}
export class sites_virtualNetworkConnections_gateways
	extends ArmResource<sites_virtualNetworkConnections_gatewaysComponentInputs>
	implements sites_virtualNetworkConnections_gatewaysComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_virtualNetworkConnections_gatewaysComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/virtualNetworkConnections/gateways", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/virtualNetworkConnections/gateways";
}
export interface sites_virtualNetworkConnections_gatewaysComponentOutputs {
	readonly apiVersion: "2018-11-01";
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
		super(entity, options.name, "Microsoft.Web/sites/webjobs", "2018-11-01", options);
	}
	public readonly apiVersion: "2018-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/webjobs";
}
export interface sites_webjobsComponentOutputs {
	readonly apiVersion: "2018-11-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/webjobs";
}
export interface sites_webjobsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: WebJobProperties | undefined;
}
export function list(resource: sites_backups, input: BackupRequest): BackupItem {
	if (resource.apiVersion !== "2018-11-01") {
		throw new Error(`list is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Web/sites/backups") {
		throw new Error(`list is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listKeys(resource: sites_hybridConnectionNamespaces_relays): HybridConnectionKey {
	if (resource.apiVersion !== "2018-11-01") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Web/sites/hybridConnectionNamespaces/relays") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listsecrets(resource: sites_functions): FunctionSecrets {
	if (resource.apiVersion !== "2018-11-01") {
		throw new Error(`listsecrets is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Web/sites/functions") {
		throw new Error(`listsecrets is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listsyncfunctiontriggerstatus(resource: sites): FunctionSecrets {
	if (resource.apiVersion !== "2018-11-01") {
		throw new Error(`listsyncfunctiontriggerstatus is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Web/sites") {
		throw new Error(`listsyncfunctiontriggerstatus is not available for resource type ${resource.type}`);
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
export interface AzureStorageInfoValue {
	readonly accessKey?: string | undefined;
	readonly accountName?: string | undefined;
	readonly mountPath?: string | undefined;
	readonly shareName?: string | undefined;
	readonly state?: ("InvalidCredentials" | "InvalidShare") | undefined;
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
export interface CertificateProperties {
	readonly cerBlob?: any | undefined;
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
	readonly password: string;
	readonly pfxBlob?: any | undefined;
	readonly publicKeyHash?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly serverFarmId?: string | undefined;
	readonly siteName?: string | undefined;
	readonly subjectName?: string | undefined;
	readonly thumbprint?: string | undefined;
	readonly valid?: boolean | undefined;
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
export interface Components1Jq1T4ISchemasManagedserviceidentityPropertiesUserassignedidentitiesAdditionalproperties {
	readonly clientId?: string | undefined;
	readonly principalId?: string | undefined;
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
export interface CorsSettings {
	readonly allowedOrigins?: string[] | undefined;
	readonly supportCredentials?: boolean | undefined;
}
export interface DatabaseBackupSetting {
	readonly connectionString?: string | undefined;
	readonly connectionStringName?: string | undefined;
	readonly databaseType: "LocalMySql" | "MySql" | "PostgreSql" | "SqlAzure";
	readonly name?: string | undefined;
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
export interface FunctionEnvelopeProperties {
	readonly config?: any | undefined;
	readonly config_href?: string | undefined;
	readonly files?: FunctionEnvelopePropertiesFiles | undefined;
	readonly function_app_id?: string | undefined;
	readonly href?: string | undefined;
	readonly script_href?: string | undefined;
	readonly script_root_path_href?: string | undefined;
	readonly secrets_file_href?: string | undefined;
	readonly test_data?: string | undefined;
}
export interface FunctionEnvelopePropertiesFiles {
	readonly "[ key: string ]"?: string | undefined;
}
export interface FunctionSecrets {
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: FunctionSecretsProperties | undefined;
	readonly type?: string | undefined;
}
export interface FunctionSecretsProperties {
	readonly key?: string | undefined;
	readonly trigger_url?: string | undefined;
}
export interface GeoDistribution {
	readonly location?: string | undefined;
	readonly numberOfWorkers?: number | undefined;
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
export interface IpSecurityRestriction {
	readonly action?: string | undefined;
	readonly description?: string | undefined;
	readonly ipAddress?: string | undefined;
	readonly name?: string | undefined;
	readonly priority?: number | undefined;
	readonly subnetMask?: string | undefined;
	readonly subnetTrafficTag?: number | undefined;
	readonly tag?: "Default" | undefined;
	readonly vnetSubnetResourceId?: string | undefined;
	readonly vnetTrafficTag?: number | undefined;
}
export interface ManagedServiceIdentity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: ("None" | "SystemAssigned" | "SystemAssigned, UserAssigned" | "UserAssigned") | undefined;
	readonly userAssignedIdentities?: ManagedServiceIdentityUserAssignedIdentities | undefined;
}
export interface ManagedServiceIdentityUserAssignedIdentities {
	readonly "[ key: string ]"?:
		| Components1Jq1T4ISchemasManagedserviceidentityPropertiesUserassignedidentitiesAdditionalproperties
		| undefined;
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
	readonly priviledged_processor_time?: string | undefined;
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
export interface RequestsBasedTrigger {
	readonly count?: number | undefined;
	readonly timeInterval?: string | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface SiteAuthSettingsProperties {
	readonly additionalLoginParams?: string[] | undefined;
	readonly allowedAudiences?: string[] | undefined;
	readonly allowedExternalRedirectUrls?: string[] | undefined;
	readonly clientId?: string | undefined;
	readonly clientSecret?: string | undefined;
	readonly clientSecretCertificateThumbprint?: string | undefined;
	readonly defaultProvider?: ("AzureActiveDirectory" | "Facebook" | "Google" | "MicrosoftAccount") | undefined;
	readonly enabled?: boolean | undefined;
	readonly facebookAppId?: string | undefined;
	readonly facebookAppSecret?: string | undefined;
	readonly facebookOAuthScopes?: string[] | undefined;
	readonly googleClientId?: string | undefined;
	readonly googleClientSecret?: string | undefined;
	readonly googleOAuthScopes?: string[] | undefined;
	readonly issuer?: string | undefined;
	readonly microsoftAccountClientId?: string | undefined;
	readonly microsoftAccountClientSecret?: string | undefined;
	readonly microsoftAccountOAuthScopes?: string[] | undefined;
	readonly runtimeVersion?: string | undefined;
	readonly tokenRefreshExtensionHours?: number | undefined;
	readonly tokenStoreEnabled?: boolean | undefined;
	readonly twitterConsumerKey?: string | undefined;
	readonly twitterConsumerSecret?: string | undefined;
	readonly unauthenticatedClientAction?: "AllowAnonymous" | undefined;
	readonly validateIssuer?: boolean | undefined;
}
export interface SiteConfig {
	readonly alwaysOn?: boolean | undefined;
	readonly apiDefinition?: ApiDefinitionInfo | undefined;
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
	readonly handlerMappings?: HandlerMapping[] | undefined;
	readonly http20Enabled?: boolean | undefined;
	readonly httpLoggingEnabled?: boolean | undefined;
	readonly ipSecurityRestrictions?: IpSecurityRestriction[] | undefined;
	readonly javaContainer?: string | undefined;
	readonly javaContainerVersion?: string | undefined;
	readonly javaVersion?: string | undefined;
	readonly limits?: SiteLimits | undefined;
	readonly linuxFxVersion?: string | undefined;
	readonly loadBalancing?: ("LeastRequests" | "LeastResponseTime" | "RequestHash" | "WeightedRoundRobin") | undefined;
	readonly localMySqlEnabled?: boolean | undefined;
	readonly logsDirectorySizeLimit?: number | undefined;
	readonly machineKey?: SiteMachineKey | undefined;
	readonly managedPipelineMode?: "Classic" | undefined;
	readonly managedServiceIdentityId?: number | undefined;
	readonly minTlsVersion?: ("1.0" | "1.1" | "1.2") | undefined;
	readonly netFrameworkVersion?: string | undefined;
	readonly nodeVersion?: string | undefined;
	readonly numberOfWorkers?: number | undefined;
	readonly phpVersion?: string | undefined;
	readonly publishingUsername?: string | undefined;
	readonly push?: PushSettings | undefined;
	readonly pythonVersion?: string | undefined;
	readonly remoteDebuggingEnabled?: boolean | undefined;
	readonly remoteDebuggingVersion?: string | undefined;
	readonly requestTracingEnabled?: boolean | undefined;
	readonly requestTracingExpirationTime?: string | undefined;
	readonly reservedInstanceCount?: number | undefined;
	readonly scmIpSecurityRestrictions?: IpSecurityRestriction[] | undefined;
	readonly scmIpSecurityRestrictionsUseMain?: boolean | undefined;
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
		  )
		| undefined;
	readonly tracingOptions?: string | undefined;
	readonly use32BitWorkerProcess?: boolean | undefined;
	readonly virtualApplications?: VirtualApplication[] | undefined;
	readonly vnetName?: string | undefined;
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
	readonly cloningInfo?: CloningInfo | undefined;
	readonly containerSize?: number | undefined;
	readonly dailyMemoryTimeQuota?: number | undefined;
	readonly defaultHostName?: string | undefined;
	readonly enabled?: boolean | undefined;
	readonly enabledHostNames?: string[] | undefined;
	readonly geoDistributions?: GeoDistribution[] | undefined;
	readonly hostingEnvironmentProfile?: HostingEnvironmentProfile | undefined;
	readonly hostNames?: string[] | undefined;
	readonly hostNamesDisabled?: boolean | undefined;
	readonly hostNameSslStates?: HostNameSslState[] | undefined;
	readonly httpsOnly?: boolean | undefined;
	readonly hyperV?: boolean | undefined;
	readonly inProgressOperationId?: string | undefined;
	readonly isDefaultContainer?: boolean | undefined;
	readonly isXenon?: boolean | undefined;
	readonly lastModifiedTimeUtc?: string | undefined;
	readonly maxNumberOfWorkers?: number | undefined;
	readonly outboundIpAddresses?: string | undefined;
	readonly possibleOutboundIpAddresses?: string | undefined;
	readonly redundancyMode?: ("ActiveActive" | "Failover" | "GeoRedundant" | "Manual") | undefined;
	readonly repositorySiteName?: string | undefined;
	readonly reserved?: boolean | undefined;
	readonly resourceGroup?: string | undefined;
	readonly scmSiteAlsoStopped?: boolean | undefined;
	readonly serverFarmId?: string | undefined;
	readonly siteConfig?: SiteConfig | undefined;
	readonly slotSwapStatus?: SlotSwapStatus | undefined;
	readonly state?: string | undefined;
	readonly suspendedTill?: string | undefined;
	readonly targetSwapSlot?: string | undefined;
	readonly trafficManagerHostNames?: string[] | undefined;
	readonly usageState?: "Exceeded" | undefined;
}
export interface SiteSourceControlProperties {
	readonly branch?: string | undefined;
	readonly deploymentRollbackEnabled?: boolean | undefined;
	readonly isManualIntegration?: boolean | undefined;
	readonly isMercurial?: boolean | undefined;
	readonly repoUrl?: string | undefined;
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
	readonly timeInterval?: string | undefined;
	readonly timeTaken?: string | undefined;
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
	readonly name?: string | undefined;
	readonly properties?: StringDictionaryProperties | undefined;
	readonly type?: string | undefined;
}
export interface StringDictionaryProperties {
	readonly "[ key: string ]"?: string | undefined;
}
export interface SwiftVirtualNetworkProperties {
	readonly subnetResourceId?: string | undefined;
	readonly swiftSupported?: boolean | undefined;
}
export interface TriggeredJobHistoryProperties {
	readonly runs?: TriggeredJobRun[] | undefined;
}
export interface TriggeredJobRun {
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: TriggeredJobRunProperties | undefined;
	readonly type?: string | undefined;
}
export interface TriggeredJobRunProperties {
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
export interface VnetGatewayProperties {
	readonly vnetName?: string | undefined;
	readonly vpnPackageUri: string;
}
export interface VnetInfo {
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: VnetInfoProperties | undefined;
	readonly type?: string | undefined;
}
export interface VnetInfoProperties {
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
export type sites_config =
	| sites_config_appsettings
	| sites_config_authsettings
	| sites_config_azurestorageaccounts
	| sites_config_backup
	| sites_config_connectionstrings
	| sites_config_logs
	| sites_config_metadata
	| sites_config_pushsettings
	| sites_config_slotConfigNames
	| sites_config_web;
export type sites_slots_config =
	| sites_slots_config_appsettings
	| sites_slots_config_authsettings
	| sites_slots_config_azurestorageaccounts
	| sites_slots_config_backup
	| sites_slots_config_connectionstrings
	| sites_slots_config_logs
	| sites_slots_config_metadata
	| sites_slots_config_pushsettings
	| sites_slots_config_web;
export default {
	certificates: certificates,
	sites: sites,
	"sites/backups": sites_backups,
	"sites/config/appsettings": sites_config_appsettings,
	"sites/config/authsettings": sites_config_authsettings,
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
	"sites/domainOwnershipIdentifiers": sites_domainOwnershipIdentifiers,
	"sites/extensions": sites_extensions,
	"sites/functions": sites_functions,
	"sites/hostNameBindings": sites_hostNameBindings,
	"sites/hybridconnection": sites_hybridconnection,
	"sites/hybridConnectionNamespaces/relays": sites_hybridConnectionNamespaces_relays,
	"sites/instances/extensions": sites_instances_extensions,
	"sites/instances/processes": sites_instances_processes,
	"sites/instances/processes/modules": sites_instances_processes_modules,
	"sites/instances/processes/threads": sites_instances_processes_threads,
	"sites/migratemysql": sites_migratemysql,
	"sites/networkConfig": sites_networkConfig,
	"sites/networkFeatures": sites_networkFeatures,
	"sites/premieraddons": sites_premieraddons,
	"sites/privateAccess": sites_privateAccess,
	"sites/processes": sites_processes,
	"sites/processes/modules": sites_processes_modules,
	"sites/processes/threads": sites_processes_threads,
	"sites/publicCertificates": sites_publicCertificates,
	"sites/siteextensions": sites_siteextensions,
	"sites/slots": sites_slots,
	"sites/slots/backups": sites_slots_backups,
	"sites/slots/config/appsettings": sites_slots_config_appsettings,
	"sites/slots/config/authsettings": sites_slots_config_authsettings,
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
	"sites/slots/domainOwnershipIdentifiers": sites_slots_domainOwnershipIdentifiers,
	"sites/slots/extensions": sites_slots_extensions,
	"sites/slots/functions": sites_slots_functions,
	"sites/slots/hostNameBindings": sites_slots_hostNameBindings,
	"sites/slots/hybridconnection": sites_slots_hybridconnection,
	"sites/slots/hybridConnectionNamespaces/relays": sites_slots_hybridConnectionNamespaces_relays,
	"sites/slots/instances/extensions": sites_slots_instances_extensions,
	"sites/slots/instances/processes": sites_slots_instances_processes,
	"sites/slots/instances/processes/modules": sites_slots_instances_processes_modules,
	"sites/slots/instances/processes/threads": sites_slots_instances_processes_threads,
	"sites/slots/migratemysql": sites_slots_migratemysql,
	"sites/slots/networkConfig": sites_slots_networkConfig,
	"sites/slots/networkFeatures": sites_slots_networkFeatures,
	"sites/slots/premieraddons": sites_slots_premieraddons,
	"sites/slots/privateAccess": sites_slots_privateAccess,
	"sites/slots/processes": sites_slots_processes,
	"sites/slots/processes/modules": sites_slots_processes_modules,
	"sites/slots/processes/threads": sites_slots_processes_threads,
	"sites/slots/publicCertificates": sites_slots_publicCertificates,
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
};

import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class sites extends ArmResource<sitesComponentInputs> implements sitesComponentOutputs {
	constructor(entity: ADKEntity, options: sitesComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites";
}
export interface sitesComponentOutputs {
	readonly apiVersion: "2016-08-01";
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
		super(entity, options.name, "Microsoft.Web/sites/backups", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/backups";
}
export interface sites_backupsComponentOutputs {
	readonly apiVersion: "2016-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/backups";
}
export interface sites_backupsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: RestoreRequestPropertiesOrBackupItemProperties;
}
export class sites_config_appsettings
	extends ArmResource<sites_config_appsettingsComponentInputs>
	implements sites_config_appsettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_config_appsettingsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/config", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_appsettingsComponentOutputs {
	readonly apiVersion: "2016-08-01";
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
		super(entity, options.name, "Microsoft.Web/sites/config", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_authsettingsComponentOutputs {
	readonly apiVersion: "2016-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_authsettingsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: SiteAuthSettingsProperties;
}
export class sites_config_backup
	extends ArmResource<sites_config_backupComponentInputs>
	implements sites_config_backupComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_config_backupComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/config", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_backupComponentOutputs {
	readonly apiVersion: "2016-08-01";
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
		super(entity, options.name, "Microsoft.Web/sites/config", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_connectionstringsComponentOutputs {
	readonly apiVersion: "2016-08-01";
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
		super(entity, options.name, "Microsoft.Web/sites/config", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_logsComponentOutputs {
	readonly apiVersion: "2016-08-01";
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
		super(entity, options.name, "Microsoft.Web/sites/config", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_metadataComponentOutputs {
	readonly apiVersion: "2016-08-01";
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
		super(entity, options.name, "Microsoft.Web/sites/config", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_pushsettingsComponentOutputs {
	readonly apiVersion: "2016-08-01";
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
		super(entity, options.name, "Microsoft.Web/sites/config", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_slotConfigNamesComponentOutputs {
	readonly apiVersion: "2016-08-01";
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
		super(entity, options.name, "Microsoft.Web/sites/config", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/config";
}
export interface sites_config_webComponentOutputs {
	readonly apiVersion: "2016-08-01";
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
		super(entity, options.name, "Microsoft.Web/sites/config/snapshots", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/config/snapshots";
}
export interface sites_config_snapshotsComponentOutputs {
	readonly apiVersion: "2016-08-01";
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
		super(entity, options.name, "Microsoft.Web/sites/continuouswebjobs", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/continuouswebjobs";
}
export interface sites_continuouswebjobsComponentOutputs {
	readonly apiVersion: "2016-08-01";
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
		super(entity, options.name, "Microsoft.Web/sites/deployments", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/deployments";
}
export interface sites_deploymentsComponentOutputs {
	readonly apiVersion: "2016-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/deployments";
}
export interface sites_deploymentsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: DeploymentProperties;
}
export class sites_domainOwnershipIdentifiers
	extends ArmResource<sites_domainOwnershipIdentifiersComponentInputs>
	implements sites_domainOwnershipIdentifiersComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_domainOwnershipIdentifiersComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/domainOwnershipIdentifiers", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/domainOwnershipIdentifiers";
}
export interface sites_domainOwnershipIdentifiersComponentOutputs {
	readonly apiVersion: "2016-08-01";
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
		super(entity, options.name, "Microsoft.Web/sites/extensions", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/extensions";
}
export interface sites_extensionsComponentOutputs {
	readonly apiVersion: "2016-08-01";
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
		super(entity, options.name, "Microsoft.Web/sites/functions", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/functions";
}
export interface sites_functionsComponentOutputs {
	readonly apiVersion: "2016-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/functions";
}
export interface sites_functionsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: FunctionEnvelopeProperties;
}
export class sites_hostNameBindings
	extends ArmResource<sites_hostNameBindingsComponentInputs>
	implements sites_hostNameBindingsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_hostNameBindingsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/hostNameBindings", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/hostNameBindings";
}
export interface sites_hostNameBindingsComponentOutputs {
	readonly apiVersion: "2016-08-01";
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
		super(entity, options.name, "Microsoft.Web/sites/hybridconnection", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/hybridconnection";
}
export interface sites_hybridconnectionComponentOutputs {
	readonly apiVersion: "2016-08-01";
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
		super(entity, options.name, "Microsoft.Web/sites/hybridConnectionNamespaces/relays", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/hybridConnectionNamespaces/relays";
}
export interface sites_hybridConnectionNamespaces_relaysComponentOutputs {
	readonly apiVersion: "2016-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/hybridConnectionNamespaces/relays";
}
export interface sites_hybridConnectionNamespaces_relaysComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: HybridConnectionProperties;
}
export class sites_instances_extensions
	extends ArmResource<sites_instances_extensionsComponentInputs>
	implements sites_instances_extensionsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_instances_extensionsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/instances/extensions", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/instances/extensions";
}
export interface sites_instances_extensionsComponentOutputs {
	readonly apiVersion: "2016-08-01";
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
		super(entity, options.name, "Microsoft.Web/sites/instances/processes", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/instances/processes";
}
export interface sites_instances_processesComponentOutputs {
	readonly apiVersion: "2016-08-01";
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
		super(entity, options.name, "Microsoft.Web/sites/instances/processes/modules", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/instances/processes/modules";
}
export interface sites_instances_processes_modulesComponentOutputs {
	readonly apiVersion: "2016-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/instances/processes/modules";
}
export interface sites_instances_processes_modulesComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: ProcessModuleInfoProperties;
}
export class sites_instances_processes_threads
	extends ArmResource<sites_instances_processes_threadsComponentInputs>
	implements sites_instances_processes_threadsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_instances_processes_threadsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/instances/processes/threads", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/instances/processes/threads";
}
export interface sites_instances_processes_threadsComponentOutputs {
	readonly apiVersion: "2016-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/instances/processes/threads";
}
export interface sites_instances_processes_threadsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: ProcessThreadInfoProperties;
}
export class sites_migratemysql
	extends ArmResource<sites_migratemysqlComponentInputs>
	implements sites_migratemysqlComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_migratemysqlComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/migratemysql", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/migratemysql";
}
export interface sites_migratemysqlComponentOutputs {
	readonly apiVersion: "2016-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/migratemysql";
}
export interface sites_migratemysqlComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: MigrateMySqlStatusProperties;
}
export class sites_networkFeatures
	extends ArmResource<sites_networkFeaturesComponentInputs>
	implements sites_networkFeaturesComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_networkFeaturesComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/networkFeatures", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/networkFeatures";
}
export interface sites_networkFeaturesComponentOutputs {
	readonly apiVersion: "2016-08-01";
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
		super(entity, options.name, "Microsoft.Web/sites/premieraddons", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/premieraddons";
}
export interface sites_premieraddonsComponentOutputs {
	readonly apiVersion: "2016-08-01";
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
export class sites_processes
	extends ArmResource<sites_processesComponentInputs>
	implements sites_processesComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_processesComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/processes", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/processes";
}
export interface sites_processesComponentOutputs {
	readonly apiVersion: "2016-08-01";
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
		super(entity, options.name, "Microsoft.Web/sites/processes/modules", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/processes/modules";
}
export interface sites_processes_modulesComponentOutputs {
	readonly apiVersion: "2016-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/processes/modules";
}
export interface sites_processes_modulesComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: ProcessModuleInfoProperties;
}
export class sites_processes_threads
	extends ArmResource<sites_processes_threadsComponentInputs>
	implements sites_processes_threadsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_processes_threadsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/processes/threads", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/processes/threads";
}
export interface sites_processes_threadsComponentOutputs {
	readonly apiVersion: "2016-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/processes/threads";
}
export interface sites_processes_threadsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: ProcessThreadInfoProperties;
}
export class sites_publicCertificates
	extends ArmResource<sites_publicCertificatesComponentInputs>
	implements sites_publicCertificatesComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_publicCertificatesComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/publicCertificates", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/publicCertificates";
}
export interface sites_publicCertificatesComponentOutputs {
	readonly apiVersion: "2016-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/publicCertificates";
}
export interface sites_publicCertificatesComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: PublicCertificateProperties;
}
export class sites_siteextensions
	extends ArmResource<sites_siteextensionsComponentInputs>
	implements sites_siteextensionsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_siteextensionsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/siteextensions", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/siteextensions";
}
export interface sites_siteextensionsComponentOutputs {
	readonly apiVersion: "2016-08-01";
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
		super(entity, options.name, "Microsoft.Web/sites/slots", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots";
}
export interface sites_slotsComponentOutputs {
	readonly apiVersion: "2016-08-01";
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
		super(entity, options.name, "Microsoft.Web/sites/slots/backups", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/backups";
}
export interface sites_slots_backupsComponentOutputs {
	readonly apiVersion: "2016-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/backups";
}
export interface sites_slots_backupsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: RestoreRequestPropertiesOrBackupItemProperties;
}
export class sites_slots_config_appsettings
	extends ArmResource<sites_slots_config_appsettingsComponentInputs>
	implements sites_slots_config_appsettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_config_appsettingsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/config", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/config";
}
export interface sites_slots_config_appsettingsComponentOutputs {
	readonly apiVersion: "2016-08-01";
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
		super(entity, options.name, "Microsoft.Web/sites/slots/config", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/config";
}
export interface sites_slots_config_authsettingsComponentOutputs {
	readonly apiVersion: "2016-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/config";
}
export interface sites_slots_config_authsettingsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: SiteAuthSettingsProperties;
}
export class sites_slots_config_backup
	extends ArmResource<sites_slots_config_backupComponentInputs>
	implements sites_slots_config_backupComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_config_backupComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/config", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/config";
}
export interface sites_slots_config_backupComponentOutputs {
	readonly apiVersion: "2016-08-01";
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
		super(entity, options.name, "Microsoft.Web/sites/slots/config", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/config";
}
export interface sites_slots_config_connectionstringsComponentOutputs {
	readonly apiVersion: "2016-08-01";
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
		super(entity, options.name, "Microsoft.Web/sites/slots/config", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/config";
}
export interface sites_slots_config_logsComponentOutputs {
	readonly apiVersion: "2016-08-01";
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
		super(entity, options.name, "Microsoft.Web/sites/slots/config", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/config";
}
export interface sites_slots_config_metadataComponentOutputs {
	readonly apiVersion: "2016-08-01";
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
		super(entity, options.name, "Microsoft.Web/sites/slots/config", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/config";
}
export interface sites_slots_config_pushsettingsComponentOutputs {
	readonly apiVersion: "2016-08-01";
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
		super(entity, options.name, "Microsoft.Web/sites/slots/config", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/config";
}
export interface sites_slots_config_webComponentOutputs {
	readonly apiVersion: "2016-08-01";
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
		super(entity, options.name, "Microsoft.Web/sites/slots/config/snapshots", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/config/snapshots";
}
export interface sites_slots_config_snapshotsComponentOutputs {
	readonly apiVersion: "2016-08-01";
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
		super(entity, options.name, "Microsoft.Web/sites/slots/continuouswebjobs", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/continuouswebjobs";
}
export interface sites_slots_continuouswebjobsComponentOutputs {
	readonly apiVersion: "2016-08-01";
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
		super(entity, options.name, "Microsoft.Web/sites/slots/deployments", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/deployments";
}
export interface sites_slots_deploymentsComponentOutputs {
	readonly apiVersion: "2016-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/deployments";
}
export interface sites_slots_deploymentsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: DeploymentProperties;
}
export class sites_slots_domainOwnershipIdentifiers
	extends ArmResource<sites_slots_domainOwnershipIdentifiersComponentInputs>
	implements sites_slots_domainOwnershipIdentifiersComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_domainOwnershipIdentifiersComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/domainOwnershipIdentifiers", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/domainOwnershipIdentifiers";
}
export interface sites_slots_domainOwnershipIdentifiersComponentOutputs {
	readonly apiVersion: "2016-08-01";
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
		super(entity, options.name, "Microsoft.Web/sites/slots/extensions", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/extensions";
}
export interface sites_slots_extensionsComponentOutputs {
	readonly apiVersion: "2016-08-01";
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
		super(entity, options.name, "Microsoft.Web/sites/slots/functions", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/functions";
}
export interface sites_slots_functionsComponentOutputs {
	readonly apiVersion: "2016-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/functions";
}
export interface sites_slots_functionsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: FunctionEnvelopeProperties;
}
export class sites_slots_hostNameBindings
	extends ArmResource<sites_slots_hostNameBindingsComponentInputs>
	implements sites_slots_hostNameBindingsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_hostNameBindingsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/hostNameBindings", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/hostNameBindings";
}
export interface sites_slots_hostNameBindingsComponentOutputs {
	readonly apiVersion: "2016-08-01";
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
		super(entity, options.name, "Microsoft.Web/sites/slots/hybridconnection", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/hybridconnection";
}
export interface sites_slots_hybridconnectionComponentOutputs {
	readonly apiVersion: "2016-08-01";
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
		super(entity, options.name, "Microsoft.Web/sites/slots/hybridConnectionNamespaces/relays", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/hybridConnectionNamespaces/relays";
}
export interface sites_slots_hybridConnectionNamespaces_relaysComponentOutputs {
	readonly apiVersion: "2016-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/hybridConnectionNamespaces/relays";
}
export interface sites_slots_hybridConnectionNamespaces_relaysComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: HybridConnectionProperties;
}
export class sites_slots_instances_extensions
	extends ArmResource<sites_slots_instances_extensionsComponentInputs>
	implements sites_slots_instances_extensionsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_instances_extensionsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/instances/extensions", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/instances/extensions";
}
export interface sites_slots_instances_extensionsComponentOutputs {
	readonly apiVersion: "2016-08-01";
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
		super(entity, options.name, "Microsoft.Web/sites/slots/instances/processes", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/instances/processes";
}
export interface sites_slots_instances_processesComponentOutputs {
	readonly apiVersion: "2016-08-01";
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
		super(entity, options.name, "Microsoft.Web/sites/slots/instances/processes/modules", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/instances/processes/modules";
}
export interface sites_slots_instances_processes_modulesComponentOutputs {
	readonly apiVersion: "2016-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/instances/processes/modules";
}
export interface sites_slots_instances_processes_modulesComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: ProcessModuleInfoProperties;
}
export class sites_slots_instances_processes_threads
	extends ArmResource<sites_slots_instances_processes_threadsComponentInputs>
	implements sites_slots_instances_processes_threadsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_instances_processes_threadsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/instances/processes/threads", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/instances/processes/threads";
}
export interface sites_slots_instances_processes_threadsComponentOutputs {
	readonly apiVersion: "2016-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/instances/processes/threads";
}
export interface sites_slots_instances_processes_threadsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: ProcessThreadInfoProperties;
}
export class sites_slots_migratemysql
	extends ArmResource<sites_slots_migratemysqlComponentInputs>
	implements sites_slots_migratemysqlComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_migratemysqlComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/migratemysql", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/migratemysql";
}
export interface sites_slots_migratemysqlComponentOutputs {
	readonly apiVersion: "2016-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/migratemysql";
}
export interface sites_slots_migratemysqlComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: MigrateMySqlStatusProperties;
}
export class sites_slots_networkFeatures
	extends ArmResource<sites_slots_networkFeaturesComponentInputs>
	implements sites_slots_networkFeaturesComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_networkFeaturesComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/networkFeatures", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/networkFeatures";
}
export interface sites_slots_networkFeaturesComponentOutputs {
	readonly apiVersion: "2016-08-01";
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
		super(entity, options.name, "Microsoft.Web/sites/slots/premieraddons", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/premieraddons";
}
export interface sites_slots_premieraddonsComponentOutputs {
	readonly apiVersion: "2016-08-01";
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
export class sites_slots_processes
	extends ArmResource<sites_slots_processesComponentInputs>
	implements sites_slots_processesComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_processesComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/processes", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/processes";
}
export interface sites_slots_processesComponentOutputs {
	readonly apiVersion: "2016-08-01";
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
		super(entity, options.name, "Microsoft.Web/sites/slots/processes/modules", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/processes/modules";
}
export interface sites_slots_processes_modulesComponentOutputs {
	readonly apiVersion: "2016-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/processes/modules";
}
export interface sites_slots_processes_modulesComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: ProcessModuleInfoProperties;
}
export class sites_slots_processes_threads
	extends ArmResource<sites_slots_processes_threadsComponentInputs>
	implements sites_slots_processes_threadsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_processes_threadsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/processes/threads", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/processes/threads";
}
export interface sites_slots_processes_threadsComponentOutputs {
	readonly apiVersion: "2016-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/processes/threads";
}
export interface sites_slots_processes_threadsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: ProcessThreadInfoProperties;
}
export class sites_slots_publicCertificates
	extends ArmResource<sites_slots_publicCertificatesComponentInputs>
	implements sites_slots_publicCertificatesComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_publicCertificatesComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/publicCertificates", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/publicCertificates";
}
export interface sites_slots_publicCertificatesComponentOutputs {
	readonly apiVersion: "2016-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/slots/publicCertificates";
}
export interface sites_slots_publicCertificatesComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: PublicCertificateProperties;
}
export class sites_slots_siteextensions
	extends ArmResource<sites_slots_siteextensionsComponentInputs>
	implements sites_slots_siteextensionsComponentOutputs
{
	constructor(entity: ADKEntity, options: sites_slots_siteextensionsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/sites/slots/siteextensions", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/siteextensions";
}
export interface sites_slots_siteextensionsComponentOutputs {
	readonly apiVersion: "2016-08-01";
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
		super(entity, options.name, "Microsoft.Web/sites/slots/sourcecontrols", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/sourcecontrols";
}
export interface sites_slots_sourcecontrolsComponentOutputs {
	readonly apiVersion: "2016-08-01";
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
		super(entity, options.name, "Microsoft.Web/sites/slots/triggeredwebjobs", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/triggeredwebjobs";
}
export interface sites_slots_triggeredwebjobsComponentOutputs {
	readonly apiVersion: "2016-08-01";
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
		super(entity, options.name, "Microsoft.Web/sites/slots/triggeredwebjobs/history", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/triggeredwebjobs/history";
}
export interface sites_slots_triggeredwebjobs_historyComponentOutputs {
	readonly apiVersion: "2016-08-01";
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
		super(entity, options.name, "Microsoft.Web/sites/slots/virtualNetworkConnections", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/virtualNetworkConnections";
}
export interface sites_slots_virtualNetworkConnectionsComponentOutputs {
	readonly apiVersion: "2016-08-01";
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
		super(entity, options.name, "Microsoft.Web/sites/slots/virtualNetworkConnections/gateways", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/virtualNetworkConnections/gateways";
}
export interface sites_slots_virtualNetworkConnections_gatewaysComponentOutputs {
	readonly apiVersion: "2016-08-01";
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
		super(entity, options.name, "Microsoft.Web/sites/slots/webjobs", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/slots/webjobs";
}
export interface sites_slots_webjobsComponentOutputs {
	readonly apiVersion: "2016-08-01";
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
		super(entity, options.name, "Microsoft.Web/sites/sourcecontrols", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/sourcecontrols";
}
export interface sites_sourcecontrolsComponentOutputs {
	readonly apiVersion: "2016-08-01";
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
		super(entity, options.name, "Microsoft.Web/sites/triggeredwebjobs", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/triggeredwebjobs";
}
export interface sites_triggeredwebjobsComponentOutputs {
	readonly apiVersion: "2016-08-01";
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
		super(entity, options.name, "Microsoft.Web/sites/triggeredwebjobs/history", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/triggeredwebjobs/history";
}
export interface sites_triggeredwebjobs_historyComponentOutputs {
	readonly apiVersion: "2016-08-01";
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
		super(entity, options.name, "Microsoft.Web/sites/virtualNetworkConnections", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/virtualNetworkConnections";
}
export interface sites_virtualNetworkConnectionsComponentOutputs {
	readonly apiVersion: "2016-08-01";
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
		super(entity, options.name, "Microsoft.Web/sites/virtualNetworkConnections/gateways", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/virtualNetworkConnections/gateways";
}
export interface sites_virtualNetworkConnections_gatewaysComponentOutputs {
	readonly apiVersion: "2016-08-01";
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
		super(entity, options.name, "Microsoft.Web/sites/webjobs", "2016-08-01", options);
	}
	public readonly apiVersion: "2016-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/sites/webjobs";
}
export interface sites_webjobsComponentOutputs {
	readonly apiVersion: "2016-08-01";
	readonly id: string;
	readonly type: "Microsoft.Web/sites/webjobs";
}
export interface sites_webjobsComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: WebJobProperties;
}
export function list(resource: sites_backups, input: BackupRequest): BackupItem {
	if (resource.apiVersion !== "2016-08-01") {
		throw new Error(`list is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Web/sites/backups") {
		throw new Error(`list is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listKeys(resource: sites_hybridConnectionNamespaces_relays): HybridConnectionKey {
	if (resource.apiVersion !== "2016-08-01") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Web/sites/hybridConnectionNamespaces/relays") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listsecrets(resource: sites_functions): FunctionSecrets {
	if (resource.apiVersion !== "2016-08-01") {
		throw new Error(`listsecrets is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Web/sites/functions") {
		throw new Error(`listsecrets is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listsyncfunctiontriggerstatus(resource: sites): FunctionSecrets {
	if (resource.apiVersion !== "2016-08-01") {
		throw new Error(`listsyncfunctiontriggerstatus is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Web/sites") {
		throw new Error(`listsyncfunctiontriggerstatus is not available for resource type ${resource.type}`);
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
	readonly sasUrl: string;
}
export interface BackupItem {
	readonly id?: string;
	readonly kind?: string;
	readonly name?: string;
	readonly properties?: BackupItemProperties;
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
	readonly backupSchedule?: BackupSchedule;
	readonly databases?: DatabaseBackupSetting[];
	readonly enabled?: boolean;
	readonly name: string;
	readonly storageAccountUrl: string;
	readonly type?: "Clone" | "Default" | "Relocation";
}
export interface BackupSchedule {
	readonly frequencyInterval: number;
	readonly frequencyUnit: "Day";
	readonly keepAtLeastOneBackup: boolean;
	readonly lastExecutionTime?: string;
	readonly retentionPeriodInDays: number;
	readonly startTime?: string;
}
export interface CloningInfo {
	readonly appSettingsOverrides?: CloningInfoAppSettingsOverrides;
	readonly cloneCustomHostNames?: boolean;
	readonly cloneSourceControl?: boolean;
	readonly configureLoadBalancing?: boolean;
	readonly correlationId?: string;
	readonly hostingEnvironment?: string;
	readonly ignoreQuotas?: boolean;
	readonly overwrite?: boolean;
	readonly sourceWebAppId: string;
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
export interface ContinuousWebJobProperties {
	readonly detailedStatus?: string;
	readonly error?: string;
	readonly extraInfoUrl?: string;
	readonly jobType?: "Continuous";
	readonly logUrl?: string;
	readonly name?: string;
	readonly runCommand?: string;
	readonly settings?: ContinuousWebJobPropertiesSettings;
	readonly status?: "Initializing" | "PendingRestart" | "Running" | "Starting";
	readonly url?: string;
	readonly usingSdk?: boolean;
}
export interface ContinuousWebJobPropertiesSettings {
	readonly [key: string]: any;
}
export interface CorsSettings {
	readonly allowedOrigins?: string[];
}
export interface DatabaseBackupSetting {
	readonly connectionString?: string;
	readonly connectionStringName?: string;
	readonly databaseType: "LocalMySql" | "MySql" | "PostgreSql" | "SqlAzure";
	readonly name?: string;
}
export interface DeploymentProperties {
	readonly active?: boolean;
	readonly author?: string;
	readonly authorEmail?: string;
	readonly deployer?: string;
	readonly details?: string;
	readonly endTime?: string;
	readonly id?: string;
	readonly message?: string;
	readonly startTime?: string;
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
export interface FunctionEnvelopeProperties {
	readonly config?: any;
	readonly configHref?: string;
	readonly files?: FunctionEnvelopePropertiesFiles;
	readonly functionAppId?: string;
	readonly href?: string;
	readonly name?: string;
	readonly scriptHref?: string;
	readonly scriptRootPathHref?: string;
	readonly secretsFileHref?: string;
	readonly testData?: string;
}
export interface FunctionEnvelopePropertiesFiles {
	readonly [key: string]: string;
}
export interface FunctionSecrets {
	readonly id?: string;
	readonly kind?: string;
	readonly name?: string;
	readonly properties?: FunctionSecretsProperties;
	readonly type?: string;
}
export interface FunctionSecretsProperties {
	readonly key?: string;
	readonly triggerUrl?: string;
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
export interface IpSecurityRestriction {
	readonly ipAddress: string;
	readonly subnetMask?: string;
}
export interface ManagedServiceIdentity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "SystemAssigned";
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
export interface PremierAddOnProperties {
	readonly location?: string;
	readonly marketplaceOffer?: string;
	readonly marketplacePublisher?: string;
	readonly name?: string;
	readonly product?: string;
	readonly sku?: string;
	readonly tags?: PremierAddOnPropertiesTags;
	readonly vendor?: string;
}
export interface PremierAddOnPropertiesTags {
	readonly [key: string]: string;
}
export interface ProcessInfoProperties {
	readonly children?: string[];
	readonly commandLine?: string;
	readonly description?: string;
	readonly environmentVariables?: ProcessInfoPropertiesEnvironmentVariables;
	readonly fileName?: string;
	readonly handleCount?: number;
	readonly href?: string;
	readonly id?: number;
	readonly iisProfileTimeoutInSeconds?: number;
	readonly isIisProfileRunning?: boolean;
	readonly isProfileRunning?: boolean;
	readonly isScmSite?: boolean;
	readonly isWebJob?: boolean;
	readonly miniDump?: string;
	readonly moduleCount?: number;
	readonly modules?: ProcessModuleInfo[];
	readonly name?: string;
	readonly nonpagedSystemMemorySize64?: number;
	readonly openFileHandles?: string[];
	readonly pagedMemorySize64?: number;
	readonly pagedSystemMemorySize64?: number;
	readonly parent?: string;
	readonly peakPagedMemorySize64?: number;
	readonly peakVirtualMemorySize64?: number;
	readonly peakWorkingSet64?: number;
	readonly privateMemorySize64?: number;
	readonly privilegedProcessorTime?: string;
	readonly startTime?: string;
	readonly threadCount?: number;
	readonly threads?: ProcessThreadInfo[];
	readonly timeStamp?: string;
	readonly totalProcessorTime?: string;
	readonly userName?: string;
	readonly userProcessorTime?: string;
	readonly virtualMemorySize64?: number;
	readonly workingSet64?: number;
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
	readonly baseAddress?: string;
	readonly fileDescription?: string;
	readonly fileName?: string;
	readonly filePath?: string;
	readonly fileVersion?: string;
	readonly href?: string;
	readonly isDebug?: boolean;
	readonly language?: string;
	readonly moduleMemorySize?: number;
	readonly product?: string;
	readonly productVersion?: string;
}
export interface ProcessThreadInfo {
	readonly id?: string;
	readonly kind?: string;
	readonly name?: string;
	readonly properties?: ProcessThreadInfoProperties;
	readonly type?: string;
}
export interface ProcessThreadInfoProperties {
	readonly basePriority?: number;
	readonly currentPriority?: number;
	readonly href?: string;
	readonly id?: number;
	readonly priorityLevel?: string;
	readonly priviledgedProcessorTime?: string;
	readonly process?: string;
	readonly startAddress?: string;
	readonly startTime?: string;
	readonly state?: string;
	readonly totalProcessorTime?: string;
	readonly userProcessorTime?: string;
	readonly waitReason?: string;
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
export interface RequestsBasedTrigger {
	readonly count?: number;
	readonly timeInterval?: string;
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface RestoreRequestPropertiesOrBackupItemProperties {
	readonly adjustConnectionStrings?: boolean;
	readonly appServicePlan?: string;
	readonly blobName?: string;
	readonly correlationId?: string;
	readonly created?: string;
	readonly databases?: DatabaseBackupSetting[];
	readonly finishedTimeStamp?: string;
	readonly hostingEnvironment?: string;
	readonly id?: number;
	readonly ignoreConflictingHostNames?: boolean;
	readonly ignoreDatabases?: boolean;
	readonly lastRestoreTimeStamp?: string;
	readonly log?: string;
	readonly name?: string;
	readonly operationType?: "Clone" | "Default" | "Relocation";
	readonly overwrite: boolean;
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
	readonly storageAccountUrl: string;
	readonly websiteSizeInBytes?: number;
}
export interface SiteAuthSettingsProperties {
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
	readonly issuer?: string;
	readonly microsoftAccountClientId?: string;
	readonly microsoftAccountClientSecret?: string;
	readonly microsoftAccountOAuthScopes?: string[];
	readonly runtimeVersion?: string;
	readonly tokenRefreshExtensionHours?: number;
	readonly tokenStoreEnabled?: boolean;
	readonly twitterConsumerKey?: string;
	readonly twitterConsumerSecret?: string;
	readonly unauthenticatedClientAction?: "AllowAnonymous";
}
export interface SiteConfig {
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
	readonly http20Enabled?: boolean;
	readonly httpLoggingEnabled?: boolean;
	readonly ipSecurityRestrictions?: IpSecurityRestriction[];
	readonly javaContainer?: string;
	readonly javaContainerVersion?: string;
	readonly javaVersion?: string;
	readonly limits?: SiteLimits;
	readonly linuxFxVersion?: string;
	readonly loadBalancing?: "LeastRequests" | "LeastResponseTime" | "RequestHash" | "WeightedRoundRobin";
	readonly localMySqlEnabled?: boolean;
	readonly logsDirectorySizeLimit?: number;
	readonly machineKey?: SiteMachineKey;
	readonly managedPipelineMode?: "Classic";
	readonly minTlsVersion?: "1.0" | "1.1" | "1.2";
	readonly netFrameworkVersion?: string;
	readonly nodeVersion?: string;
	readonly numberOfWorkers?: number;
	readonly phpVersion?: string;
	readonly publishingUsername?: string;
	readonly push?: PushSettings;
	readonly pythonVersion?: string;
	readonly remoteDebuggingEnabled?: boolean;
	readonly remoteDebuggingVersion?: string;
	readonly requestTracingEnabled?: boolean;
	readonly requestTracingExpirationTime?: string;
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
		| "VSO";
	readonly tracingOptions?: string;
	readonly use32BitWorkerProcess?: boolean;
	readonly virtualApplications?: VirtualApplication[];
	readonly vnetName?: string;
	readonly webSocketsEnabled?: boolean;
}
export interface SiteExtensionInfoProperties {
	readonly authors?: string[];
	readonly comment?: string;
	readonly description?: string;
	readonly downloadCount?: number;
	readonly extensionUrl?: string;
	readonly feedUrl?: string;
	readonly iconUrl?: string;
	readonly id?: string;
	readonly installationArgs?: string;
	readonly installedDateTime?: string;
	readonly licenseUrl?: string;
	readonly localIsLatestVersion?: boolean;
	readonly localPath?: string;
	readonly projectUrl?: string;
	readonly provisioningState?: string;
	readonly publishedDateTime?: string;
	readonly summary?: string;
	readonly title?: string;
	readonly type?: "Gallery";
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
	readonly cloningInfo?: CloningInfo;
	readonly containerSize?: number;
	readonly dailyMemoryTimeQuota?: number;
	readonly defaultHostName?: string;
	readonly enabled?: boolean;
	readonly enabledHostNames?: string[];
	readonly hostingEnvironmentProfile?: HostingEnvironmentProfile;
	readonly hostNames?: string[];
	readonly hostNamesDisabled?: boolean;
	readonly hostNameSslStates?: HostNameSslState[];
	readonly httpsOnly?: boolean;
	readonly isDefaultContainer?: boolean;
	readonly lastModifiedTimeUtc?: string;
	readonly maxNumberOfWorkers?: number;
	readonly outboundIpAddresses?: string;
	readonly possibleOutboundIpAddresses?: string;
	readonly repositorySiteName?: string;
	readonly reserved?: boolean;
	readonly resourceGroup?: string;
	readonly scmSiteAlsoStopped?: boolean;
	readonly serverFarmId?: string;
	readonly siteConfig?: SiteConfig;
	readonly slotSwapStatus?: SlotSwapStatus;
	readonly snapshotInfo?: SnapshotRecoveryRequest;
	readonly state?: string;
	readonly suspendedTill?: string;
	readonly targetSwapSlot?: string;
	readonly trafficManagerHostNames?: string[];
	readonly usageState?: "Exceeded";
}
export interface SiteSourceControlProperties {
	readonly branch?: string;
	readonly deploymentRollbackEnabled?: boolean;
	readonly isManualIntegration?: boolean;
	readonly isMercurial?: boolean;
	readonly repoUrl?: string;
}
export interface SlotConfigNames {
	readonly appSettingNames?: string[];
	readonly connectionStringNames?: string[];
}
export interface SlotSwapStatus {
	readonly destinationSlotName?: string;
	readonly sourceSlotName?: string;
	readonly timestampUtc?: string;
}
export interface SlowRequestsBasedTrigger {
	readonly count?: number;
	readonly timeInterval?: string;
	readonly timeTaken?: string;
}
export interface SnapshotRecoveryRequest {
	readonly id?: string;
	readonly kind?: string;
	readonly name?: string;
	readonly properties?: SnapshotRecoveryRequestProperties;
	readonly type?: string;
}
export interface SnapshotRecoveryRequestProperties {
	readonly ignoreConflictingHostNames?: boolean;
	readonly overwrite: boolean;
	readonly recoverConfiguration?: boolean;
	readonly recoveryTarget?: SnapshotRecoveryTarget;
	readonly snapshotTime?: string;
}
export interface SnapshotRecoveryTarget {
	readonly id?: string;
	readonly location?: string;
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
	readonly name?: string;
	readonly properties?: StringDictionaryProperties;
	readonly type?: string;
}
export interface StringDictionaryProperties {
	readonly [key: string]: string;
}
export interface TriggeredJobHistoryProperties {
	readonly triggeredJobRuns?: TriggeredJobRun[];
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
	readonly endTime?: string;
	readonly errorUrl?: string;
	readonly id?: string;
	readonly jobName?: string;
	readonly name?: string;
	readonly outputUrl?: string;
	readonly startTime?: string;
	readonly status?: "Error" | "Failed";
	readonly trigger?: string;
	readonly url?: string;
}
export interface TriggeredWebJobProperties {
	readonly error?: string;
	readonly extraInfoUrl?: string;
	readonly historyUrl?: string;
	readonly jobType?: "Continuous";
	readonly latestRun?: TriggeredJobRun;
	readonly name?: string;
	readonly runCommand?: string;
	readonly schedulerLogsUrl?: string;
	readonly settings?: TriggeredWebJobPropertiesSettings;
	readonly url?: string;
	readonly usingSdk?: boolean;
}
export interface TriggeredWebJobPropertiesSettings {
	readonly [key: string]: any;
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
	readonly certBlob?: any;
	readonly certThumbprint?: string;
	readonly dnsServers?: string;
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
	readonly name?: string;
	readonly routeType?: "DEFAULT" | "INHERITED" | "STATIC";
}
export interface WebJobProperties {
	readonly error?: string;
	readonly extraInfoUrl?: string;
	readonly jobType?: "Continuous";
	readonly name?: string;
	readonly runCommand?: string;
	readonly settings?: WebJobPropertiesSettings;
	readonly url?: string;
	readonly usingSdk?: boolean;
}
export interface WebJobPropertiesSettings {
	readonly [key: string]: any;
}
export type sites_config =
	| sites_config_appsettings
	| sites_config_authsettings
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
	| sites_slots_config_backup
	| sites_slots_config_connectionstrings
	| sites_slots_config_logs
	| sites_slots_config_metadata
	| sites_slots_config_pushsettings
	| sites_slots_config_web;
export default {
	sites: sites,
	"sites/backups": sites_backups,
	"sites/config/appsettings": sites_config_appsettings,
	"sites/config/authsettings": sites_config_authsettings,
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
	"sites/networkFeatures": sites_networkFeatures,
	"sites/premieraddons": sites_premieraddons,
	"sites/processes": sites_processes,
	"sites/processes/modules": sites_processes_modules,
	"sites/processes/threads": sites_processes_threads,
	"sites/publicCertificates": sites_publicCertificates,
	"sites/siteextensions": sites_siteextensions,
	"sites/slots": sites_slots,
	"sites/slots/backups": sites_slots_backups,
	"sites/slots/config/appsettings": sites_slots_config_appsettings,
	"sites/slots/config/authsettings": sites_slots_config_authsettings,
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
	"sites/slots/networkFeatures": sites_slots_networkFeatures,
	"sites/slots/premieraddons": sites_slots_premieraddons,
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

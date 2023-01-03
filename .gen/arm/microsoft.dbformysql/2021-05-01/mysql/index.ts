import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class flexibleServers
	extends ArmResource<flexibleServersComponentInputs>
	implements flexibleServersComponentOutputs
{
	constructor(entity: ADKEntity, options: flexibleServersComponentInputs) {
		super(entity, options.name, "Microsoft.DBforMySQL/flexibleServers", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.DBforMySQL/flexibleServers";
}
export interface flexibleServersComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.DBforMySQL/flexibleServers";
}
export interface flexibleServersComponentInputs {
	readonly identity?: Identity | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: ServerProperties | undefined;
	readonly sku?: Sku | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class flexibleServers_backups
	extends ArmResource<flexibleServers_backupsComponentInputs>
	implements flexibleServers_backupsComponentOutputs
{
	constructor(entity: ADKEntity, options: flexibleServers_backupsComponentInputs) {
		super(entity, options.name, "Microsoft.DBforMySQL/flexibleServers/backups", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.DBforMySQL/flexibleServers/backups";
}
export interface flexibleServers_backupsComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.DBforMySQL/flexibleServers/backups";
}
export interface flexibleServers_backupsComponentInputs {
	readonly name: string;
	readonly properties?: ServerBackupProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class flexibleServers_configurations
	extends ArmResource<flexibleServers_configurationsComponentInputs>
	implements flexibleServers_configurationsComponentOutputs
{
	constructor(entity: ADKEntity, options: flexibleServers_configurationsComponentInputs) {
		super(entity, options.name, "Microsoft.DBforMySQL/flexibleServers/configurations", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.DBforMySQL/flexibleServers/configurations";
}
export interface flexibleServers_configurationsComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.DBforMySQL/flexibleServers/configurations";
}
export interface flexibleServers_configurationsComponentInputs {
	readonly name: string;
	readonly properties?: ConfigurationProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class flexibleServers_databases
	extends ArmResource<flexibleServers_databasesComponentInputs>
	implements flexibleServers_databasesComponentOutputs
{
	constructor(entity: ADKEntity, options: flexibleServers_databasesComponentInputs) {
		super(entity, options.name, "Microsoft.DBforMySQL/flexibleServers/databases", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.DBforMySQL/flexibleServers/databases";
}
export interface flexibleServers_databasesComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.DBforMySQL/flexibleServers/databases";
}
export interface flexibleServers_databasesComponentInputs {
	readonly name: string;
	readonly properties?: DatabaseProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class flexibleServers_firewallRules
	extends ArmResource<flexibleServers_firewallRulesComponentInputs>
	implements flexibleServers_firewallRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: flexibleServers_firewallRulesComponentInputs) {
		super(entity, options.name, "Microsoft.DBforMySQL/flexibleServers/firewallRules", "2021-05-01", options);
	}
	public readonly apiVersion: "2021-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.DBforMySQL/flexibleServers/firewallRules";
}
export interface flexibleServers_firewallRulesComponentOutputs {
	readonly apiVersion: "2021-05-01";
	readonly id: string;
	readonly type: "Microsoft.DBforMySQL/flexibleServers/firewallRules";
}
export interface flexibleServers_firewallRulesComponentInputs {
	readonly name: string;
	readonly properties: FirewallRuleProperties;
	readonly systemData?: SystemData | undefined;
}
export interface Backup {
	readonly backupRetentionDays?: number | undefined;
	readonly earliestRestoreDate?: string | undefined;
	readonly geoRedundantBackup?: ("Disabled" | "Enabled") | undefined;
}
export interface ConfigurationProperties {
	readonly allowedValues?: string | undefined;
	readonly dataType?: string | undefined;
	readonly defaultValue?: string | undefined;
	readonly description?: string | undefined;
	readonly isConfigPendingRestart?: ("False" | "True") | undefined;
	readonly isDynamicConfig?: ("False" | "True") | undefined;
	readonly isReadOnly?: ("False" | "True") | undefined;
	readonly source?: ("system-default" | "user-override") | undefined;
	readonly value?: string | undefined;
}
export interface DatabaseProperties {
	readonly charset?: string | undefined;
	readonly collation?: string | undefined;
}
export interface DataEncryption {
	readonly geoBackupKeyURI?: string | undefined;
	readonly geoBackupUserAssignedIdentityId?: string | undefined;
	readonly primaryKeyURI?: string | undefined;
	readonly primaryUserAssignedIdentityId?: string | undefined;
	readonly type?: "AzureKeyVault" | undefined;
}
export interface FirewallRuleProperties {
	readonly endIpAddress: string;
	readonly startIpAddress: string;
}
export interface HighAvailability {
	readonly mode?: ("Disabled" | "SameZone" | "ZoneRedundant") | undefined;
	readonly standbyAvailabilityZone?: string | undefined;
	readonly state?: ("CreatingStandby" | "FailingOver" | "Healthy" | "NotEnabled" | "RemovingStandby") | undefined;
}
export interface Identity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: "UserAssigned" | undefined;
	readonly userAssignedIdentities?: IdentityUserAssignedIdentities | undefined;
}
export interface IdentityUserAssignedIdentities {
	readonly "[ key: string ]"?: any | undefined;
}
export interface MaintenanceWindow {
	readonly customWindow?: string | undefined;
	readonly dayOfWeek?: number | undefined;
	readonly startHour?: number | undefined;
	readonly startMinute?: number | undefined;
}
export interface Network {
	readonly delegatedSubnetResourceId?: string | undefined;
	readonly privateDnsZoneResourceId?: string | undefined;
	readonly publicNetworkAccess?: ("Disabled" | "Enabled") | undefined;
}
export interface ServerBackupProperties {
	readonly backupType?: string | undefined;
	readonly completedTime?: string | undefined;
	readonly source?: string | undefined;
}
export interface ServerProperties {
	readonly administratorLogin?: string | undefined;
	readonly administratorLoginPassword?: string | undefined;
	readonly availabilityZone?: string | undefined;
	readonly backup?: Backup | undefined;
	readonly createMode?: ("Default" | "GeoRestore" | "PointInTimeRestore" | "Replica") | undefined;
	readonly dataEncryption?: DataEncryption | undefined;
	readonly fullyQualifiedDomainName?: string | undefined;
	readonly highAvailability?: HighAvailability | undefined;
	readonly maintenanceWindow?: MaintenanceWindow | undefined;
	readonly network?: Network | undefined;
	readonly replicaCapacity?: number | undefined;
	readonly replicationRole?: ("None" | "Replica" | "Source") | undefined;
	readonly restorePointInTime?: string | undefined;
	readonly sourceServerResourceId?: string | undefined;
	readonly state?: ("Disabled" | "Dropping" | "Ready" | "Starting" | "Stopped" | "Stopping" | "Updating") | undefined;
	readonly storage?: Storage | undefined;
	readonly version?: ("5.7" | "8.0.21") | undefined;
}
export interface Sku {
	readonly name: string;
	readonly tier: "Burstable" | "GeneralPurpose" | "MemoryOptimized";
}
export interface Storage {
	readonly autoGrow?: ("Disabled" | "Enabled") | undefined;
	readonly iops?: number | undefined;
	readonly storageSizeGB?: number | undefined;
	readonly storageSku?: string | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	flexibleServers: flexibleServers,
	"flexibleServers/backups": flexibleServers_backups,
	"flexibleServers/configurations": flexibleServers_configurations,
	"flexibleServers/databases": flexibleServers_databases,
	"flexibleServers/firewallRules": flexibleServers_firewallRules,
};

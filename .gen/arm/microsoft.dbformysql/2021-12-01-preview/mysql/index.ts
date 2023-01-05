import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class flexibleServers
	extends ArmResource<flexibleServersComponentInputs>
	implements flexibleServersComponentOutputs
{
	constructor(entity: ADKEntity, options: flexibleServersComponentInputs) {
		super(entity, options.name, "Microsoft.DBforMySQL/flexibleServers", "2021-12-01-preview", options);
	}
	public readonly apiVersion: "2021-12-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DBforMySQL/flexibleServers";
}
export interface flexibleServersComponentOutputs {
	readonly apiVersion: "2021-12-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DBforMySQL/flexibleServers";
}
export interface flexibleServersComponentInputs {
	readonly identity?: Identity;
	readonly location: string;
	readonly name: string;
	readonly properties?: ServerProperties;
	readonly sku?: Sku;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class flexibleServers_administrators
	extends ArmResource<flexibleServers_administratorsComponentInputs>
	implements flexibleServers_administratorsComponentOutputs
{
	constructor(entity: ADKEntity, options: flexibleServers_administratorsComponentInputs) {
		super(entity, options.name, "Microsoft.DBforMySQL/flexibleServers/administrators", "2021-12-01-preview", options);
	}
	public readonly apiVersion: "2021-12-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DBforMySQL/flexibleServers/administrators";
}
export interface flexibleServers_administratorsComponentOutputs {
	readonly apiVersion: "2021-12-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DBforMySQL/flexibleServers/administrators";
}
export interface flexibleServers_administratorsComponentInputs {
	readonly name: string;
	readonly properties?: AdministratorProperties;
	readonly systemData?: SystemData;
}
export class flexibleServers_backups
	extends ArmResource<flexibleServers_backupsComponentInputs>
	implements flexibleServers_backupsComponentOutputs
{
	constructor(entity: ADKEntity, options: flexibleServers_backupsComponentInputs) {
		super(entity, options.name, "Microsoft.DBforMySQL/flexibleServers/backups", "2021-12-01-preview", options);
	}
	public readonly apiVersion: "2021-12-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DBforMySQL/flexibleServers/backups";
}
export interface flexibleServers_backupsComponentOutputs {
	readonly apiVersion: "2021-12-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DBforMySQL/flexibleServers/backups";
}
export interface flexibleServers_backupsComponentInputs {
	readonly name: string;
	readonly properties?: ServerBackupProperties;
	readonly systemData?: SystemData;
}
export class flexibleServers_configurations
	extends ArmResource<flexibleServers_configurationsComponentInputs>
	implements flexibleServers_configurationsComponentOutputs
{
	constructor(entity: ADKEntity, options: flexibleServers_configurationsComponentInputs) {
		super(entity, options.name, "Microsoft.DBforMySQL/flexibleServers/configurations", "2021-12-01-preview", options);
	}
	public readonly apiVersion: "2021-12-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DBforMySQL/flexibleServers/configurations";
}
export interface flexibleServers_configurationsComponentOutputs {
	readonly apiVersion: "2021-12-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DBforMySQL/flexibleServers/configurations";
}
export interface flexibleServers_configurationsComponentInputs {
	readonly name: string;
	readonly properties?: ConfigurationProperties;
	readonly systemData?: SystemData;
}
export class flexibleServers_databases
	extends ArmResource<flexibleServers_databasesComponentInputs>
	implements flexibleServers_databasesComponentOutputs
{
	constructor(entity: ADKEntity, options: flexibleServers_databasesComponentInputs) {
		super(entity, options.name, "Microsoft.DBforMySQL/flexibleServers/databases", "2021-12-01-preview", options);
	}
	public readonly apiVersion: "2021-12-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DBforMySQL/flexibleServers/databases";
}
export interface flexibleServers_databasesComponentOutputs {
	readonly apiVersion: "2021-12-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DBforMySQL/flexibleServers/databases";
}
export interface flexibleServers_databasesComponentInputs {
	readonly name: string;
	readonly properties?: DatabaseProperties;
	readonly systemData?: SystemData;
}
export class flexibleServers_firewallRules
	extends ArmResource<flexibleServers_firewallRulesComponentInputs>
	implements flexibleServers_firewallRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: flexibleServers_firewallRulesComponentInputs) {
		super(entity, options.name, "Microsoft.DBforMySQL/flexibleServers/firewallRules", "2021-12-01-preview", options);
	}
	public readonly apiVersion: "2021-12-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DBforMySQL/flexibleServers/firewallRules";
}
export interface flexibleServers_firewallRulesComponentOutputs {
	readonly apiVersion: "2021-12-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DBforMySQL/flexibleServers/firewallRules";
}
export interface flexibleServers_firewallRulesComponentInputs {
	readonly name: string;
	readonly properties: FirewallRuleProperties;
	readonly systemData?: SystemData;
}
export interface AdministratorProperties {
	readonly administratorType?: "ActiveDirectory";
	readonly identityResourceId?: string;
	readonly login?: string;
	readonly sid?: string;
	readonly tenantId?: string;
}
export interface Backup {
	readonly backupRetentionDays?: number;
	readonly earliestRestoreDate?: string;
	readonly geoRedundantBackup?: "Disabled" | "Enabled";
}
export interface ConfigurationProperties {
	readonly allowedValues?: string;
	readonly dataType?: string;
	readonly defaultValue?: string;
	readonly description?: string;
	readonly isConfigPendingRestart?: "False" | "True";
	readonly isDynamicConfig?: "False" | "True";
	readonly isReadOnly?: "False" | "True";
	readonly source?: "system-default" | "user-override";
	readonly value?: string;
}
export interface DatabaseProperties {
	readonly charset?: string;
	readonly collation?: string;
}
export interface DataEncryption {
	readonly geoBackupKeyURI?: string;
	readonly geoBackupUserAssignedIdentityId?: string;
	readonly primaryKeyURI?: string;
	readonly primaryUserAssignedIdentityId?: string;
	readonly type?: "AzureKeyVault";
}
export interface FirewallRuleProperties {
	readonly endIpAddress: string;
	readonly startIpAddress: string;
}
export interface HighAvailability {
	readonly mode?: "Disabled" | "SameZone" | "ZoneRedundant";
	readonly standbyAvailabilityZone?: string;
	readonly state?: "CreatingStandby" | "FailingOver" | "Healthy" | "NotEnabled" | "RemovingStandby";
}
export interface Identity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "UserAssigned";
	readonly userAssignedIdentities?: IdentityUserAssignedIdentities;
}
export interface IdentityUserAssignedIdentities {
	readonly [key: string]: any;
}
export interface MaintenanceWindow {
	readonly customWindow?: string;
	readonly dayOfWeek?: number;
	readonly startHour?: number;
	readonly startMinute?: number;
}
export interface Network {
	readonly delegatedSubnetResourceId?: string;
	readonly privateDnsZoneResourceId?: string;
	readonly publicNetworkAccess?: "Disabled" | "Enabled";
}
export interface ServerBackupProperties {
	readonly backupType?: string;
	readonly completedTime?: string;
	readonly source?: string;
}
export interface ServerProperties {
	readonly administratorLogin?: string;
	readonly administratorLoginPassword?: string;
	readonly availabilityZone?: string;
	readonly backup?: Backup;
	readonly createMode?: "Default" | "GeoRestore" | "PointInTimeRestore" | "Replica";
	readonly dataEncryption?: DataEncryption;
	readonly fullyQualifiedDomainName?: string;
	readonly highAvailability?: HighAvailability;
	readonly maintenanceWindow?: MaintenanceWindow;
	readonly network?: Network;
	readonly replicaCapacity?: number;
	readonly replicationRole?: "None" | "Replica" | "Source";
	readonly restorePointInTime?: string;
	readonly sourceServerResourceId?: string;
	readonly state?: "Disabled" | "Dropping" | "Ready" | "Starting" | "Stopped" | "Stopping" | "Updating";
	readonly storage?: Storage;
	readonly version?: "5.7" | "8.0.21";
}
export interface Sku {
	readonly name: string;
	readonly tier: "Burstable" | "GeneralPurpose" | "MemoryOptimized";
}
export interface Storage {
	readonly autoGrow?: "Disabled" | "Enabled";
	readonly autoIoScaling?: "Disabled" | "Enabled";
	readonly iops?: number;
	readonly storageSizeGB?: number;
	readonly storageSku?: string;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export default {
	flexibleServers: flexibleServers,
	"flexibleServers/administrators": flexibleServers_administrators,
	"flexibleServers/backups": flexibleServers_backups,
	"flexibleServers/configurations": flexibleServers_configurations,
	"flexibleServers/databases": flexibleServers_databases,
	"flexibleServers/firewallRules": flexibleServers_firewallRules,
};

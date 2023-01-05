import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class flexibleServers
	extends ArmResource<flexibleServersComponentInputs>
	implements flexibleServersComponentOutputs
{
	constructor(entity: ADKEntity, options: flexibleServersComponentInputs) {
		super(entity, options.name, "Microsoft.DBforPostgreSQL/flexibleServers", "2021-06-01", options);
	}
	public readonly apiVersion: "2021-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.DBforPostgreSQL/flexibleServers";
}
export interface flexibleServersComponentOutputs {
	readonly apiVersion: "2021-06-01";
	readonly id: string;
	readonly type: "Microsoft.DBforPostgreSQL/flexibleServers";
}
export interface flexibleServersComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: ServerProperties;
	readonly sku?: Sku;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class flexibleServers_configurations
	extends ArmResource<flexibleServers_configurationsComponentInputs>
	implements flexibleServers_configurationsComponentOutputs
{
	constructor(entity: ADKEntity, options: flexibleServers_configurationsComponentInputs) {
		super(entity, options.name, "Microsoft.DBforPostgreSQL/flexibleServers/configurations", "2021-06-01", options);
	}
	public readonly apiVersion: "2021-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.DBforPostgreSQL/flexibleServers/configurations";
}
export interface flexibleServers_configurationsComponentOutputs {
	readonly apiVersion: "2021-06-01";
	readonly id: string;
	readonly type: "Microsoft.DBforPostgreSQL/flexibleServers/configurations";
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
		super(entity, options.name, "Microsoft.DBforPostgreSQL/flexibleServers/databases", "2021-06-01", options);
	}
	public readonly apiVersion: "2021-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.DBforPostgreSQL/flexibleServers/databases";
}
export interface flexibleServers_databasesComponentOutputs {
	readonly apiVersion: "2021-06-01";
	readonly id: string;
	readonly type: "Microsoft.DBforPostgreSQL/flexibleServers/databases";
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
		super(entity, options.name, "Microsoft.DBforPostgreSQL/flexibleServers/firewallRules", "2021-06-01", options);
	}
	public readonly apiVersion: "2021-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.DBforPostgreSQL/flexibleServers/firewallRules";
}
export interface flexibleServers_firewallRulesComponentOutputs {
	readonly apiVersion: "2021-06-01";
	readonly id: string;
	readonly type: "Microsoft.DBforPostgreSQL/flexibleServers/firewallRules";
}
export interface flexibleServers_firewallRulesComponentInputs {
	readonly name: string;
	readonly properties: FirewallRuleProperties;
	readonly systemData?: SystemData;
}
export interface Backup {
	readonly backupRetentionDays?: number;
	readonly earliestRestoreDate?: string;
	readonly geoRedundantBackup?: "Disabled" | "Enabled";
}
export interface ConfigurationProperties {
	readonly allowedValues?: string;
	readonly dataType?: "Boolean" | "Enumeration" | "Integer" | "Numeric";
	readonly defaultValue?: string;
	readonly description?: string;
	readonly documentationLink?: string;
	readonly isConfigPendingRestart?: boolean;
	readonly isDynamicConfig?: boolean;
	readonly isReadOnly?: boolean;
	readonly source?: string;
	readonly unit?: string;
	readonly value?: string;
}
export interface DatabaseProperties {
	readonly charset?: string;
	readonly collation?: string;
}
export interface FirewallRuleProperties {
	readonly endIpAddress: string;
	readonly startIpAddress: string;
}
export interface HighAvailability {
	readonly mode?: "Disabled" | "ZoneRedundant";
	readonly standbyAvailabilityZone?: string;
	readonly state?: "CreatingStandby" | "FailingOver" | "Healthy" | "NotEnabled" | "RemovingStandby" | "ReplicatingData";
}
export interface MaintenanceWindow {
	readonly customWindow?: string;
	readonly dayOfWeek?: number;
	readonly startHour?: number;
	readonly startMinute?: number;
}
export interface Network {
	readonly delegatedSubnetResourceId?: string;
	readonly privateDnsZoneArmResourceId?: string;
	readonly publicNetworkAccess?: "Disabled" | "Enabled";
}
export interface ServerProperties {
	readonly administratorLogin?: string;
	readonly administratorLoginPassword?: string;
	readonly availabilityZone?: string;
	readonly backup?: Backup;
	readonly createMode?: "Create" | "Default" | "PointInTimeRestore" | "Update";
	readonly fullyQualifiedDomainName?: string;
	readonly highAvailability?: HighAvailability;
	readonly maintenanceWindow?: MaintenanceWindow;
	readonly minorVersion?: string;
	readonly network?: Network;
	readonly pointInTimeUTC?: string;
	readonly sourceServerResourceId?: string;
	readonly state?: "Disabled" | "Dropping" | "Ready" | "Starting" | "Stopped" | "Stopping" | "Updating";
	readonly storage?: Storage;
	readonly version?: "11" | "12" | "13" | "14";
}
export interface Sku {
	readonly name: string;
	readonly tier: "Burstable" | "GeneralPurpose" | "MemoryOptimized";
}
export interface Storage {
	readonly storageSizeGB?: number;
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
	"flexibleServers/configurations": flexibleServers_configurations,
	"flexibleServers/databases": flexibleServers_databases,
	"flexibleServers/firewallRules": flexibleServers_firewallRules,
};

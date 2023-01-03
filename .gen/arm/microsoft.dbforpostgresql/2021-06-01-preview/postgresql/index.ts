import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class flexibleServers
	extends ArmResource<flexibleServersComponentInputs>
	implements flexibleServersComponentOutputs
{
	constructor(entity: ADKEntity, options: flexibleServersComponentInputs) {
		super(entity, options.name, "Microsoft.DBforPostgreSQL/flexibleServers", "2021-06-01-preview", options);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DBforPostgreSQL/flexibleServers";
}
export interface flexibleServersComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DBforPostgreSQL/flexibleServers";
}
export interface flexibleServersComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: ServerProperties | undefined;
	readonly sku?: Sku | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class flexibleServers_advisors
	extends ArmResource<flexibleServers_advisorsComponentInputs>
	implements flexibleServers_advisorsComponentOutputs
{
	constructor(entity: ADKEntity, options: flexibleServers_advisorsComponentInputs) {
		super(entity, options.name, "Microsoft.DBforPostgreSQL/flexibleServers/advisors", "2021-06-01-preview", options);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DBforPostgreSQL/flexibleServers/advisors";
}
export interface flexibleServers_advisorsComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DBforPostgreSQL/flexibleServers/advisors";
}
export interface flexibleServers_advisorsComponentInputs {
	readonly name: string;
	readonly properties?: any | undefined;
}
export class flexibleServers_configurations
	extends ArmResource<flexibleServers_configurationsComponentInputs>
	implements flexibleServers_configurationsComponentOutputs
{
	constructor(entity: ADKEntity, options: flexibleServers_configurationsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.DBforPostgreSQL/flexibleServers/configurations",
			"2021-06-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DBforPostgreSQL/flexibleServers/configurations";
}
export interface flexibleServers_configurationsComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DBforPostgreSQL/flexibleServers/configurations";
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
		super(entity, options.name, "Microsoft.DBforPostgreSQL/flexibleServers/databases", "2021-06-01-preview", options);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DBforPostgreSQL/flexibleServers/databases";
}
export interface flexibleServers_databasesComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DBforPostgreSQL/flexibleServers/databases";
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
		super(
			entity,
			options.name,
			"Microsoft.DBforPostgreSQL/flexibleServers/firewallRules",
			"2021-06-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DBforPostgreSQL/flexibleServers/firewallRules";
}
export interface flexibleServers_firewallRulesComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DBforPostgreSQL/flexibleServers/firewallRules";
}
export interface flexibleServers_firewallRulesComponentInputs {
	readonly name: string;
	readonly properties: FirewallRuleProperties;
	readonly systemData?: SystemData | undefined;
}
export class flexibleServers_queryTexts
	extends ArmResource<flexibleServers_queryTextsComponentInputs>
	implements flexibleServers_queryTextsComponentOutputs
{
	constructor(entity: ADKEntity, options: flexibleServers_queryTextsComponentInputs) {
		super(entity, options.name, "Microsoft.DBforPostgreSQL/flexibleServers/queryTexts", "2021-06-01-preview", options);
	}
	public readonly apiVersion: "2021-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DBforPostgreSQL/flexibleServers/queryTexts";
}
export interface flexibleServers_queryTextsComponentOutputs {
	readonly apiVersion: "2021-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DBforPostgreSQL/flexibleServers/queryTexts";
}
export interface flexibleServers_queryTextsComponentInputs {
	readonly name: string;
	readonly properties?: QueryTextProperties | undefined;
}
export interface Backup {
	readonly backupRetentionDays?: number | undefined;
	readonly earliestRestoreDate?: string | undefined;
	readonly geoRedundantBackup?: ("Disabled" | "Enabled") | undefined;
}
export interface ConfigurationProperties {
	readonly allowedValues?: string | undefined;
	readonly dataType?: ("Boolean" | "Enumeration" | "Integer" | "Numeric") | undefined;
	readonly defaultValue?: string | undefined;
	readonly description?: string | undefined;
	readonly documentationLink?: string | undefined;
	readonly isConfigPendingRestart?: boolean | undefined;
	readonly isDynamicConfig?: boolean | undefined;
	readonly isReadOnly?: boolean | undefined;
	readonly source?: string | undefined;
	readonly unit?: string | undefined;
	readonly value?: string | undefined;
}
export interface DatabaseProperties {
	readonly charset?: string | undefined;
	readonly collation?: string | undefined;
}
export interface FirewallRuleProperties {
	readonly endIpAddress: string;
	readonly startIpAddress: string;
}
export interface HighAvailability {
	readonly mode?: ("Disabled" | "ZoneRedundant") | undefined;
	readonly standbyAvailabilityZone?: string | undefined;
	readonly state?:
		| ("CreatingStandby" | "FailingOver" | "Healthy" | "NotEnabled" | "RemovingStandby" | "ReplicatingData")
		| undefined;
}
export interface MaintenanceWindow {
	readonly customWindow?: string | undefined;
	readonly dayOfWeek?: number | undefined;
	readonly startHour?: number | undefined;
	readonly startMinute?: number | undefined;
}
export interface Network {
	readonly delegatedSubnetResourceId?: string | undefined;
	readonly privateDnsZoneArmResourceId?: string | undefined;
	readonly publicNetworkAccess?: ("Disabled" | "Enabled") | undefined;
}
export interface QueryTextProperties {
	readonly queryId?: string | undefined;
	readonly queryText?: string | undefined;
}
export interface ServerProperties {
	readonly administratorLogin?: string | undefined;
	readonly administratorLoginPassword?: string | undefined;
	readonly availabilityZone?: string | undefined;
	readonly backup?: Backup | undefined;
	readonly createMode?: ("Create" | "Default" | "PointInTimeRestore" | "Update") | undefined;
	readonly fullyQualifiedDomainName?: string | undefined;
	readonly highAvailability?: HighAvailability | undefined;
	readonly maintenanceWindow?: MaintenanceWindow | undefined;
	readonly minorVersion?: string | undefined;
	readonly network?: Network | undefined;
	readonly pointInTimeUTC?: string | undefined;
	readonly sourceServerResourceId?: string | undefined;
	readonly state?: ("Disabled" | "Dropping" | "Ready" | "Starting" | "Stopped" | "Stopping" | "Updating") | undefined;
	readonly storage?: Storage | undefined;
	readonly version?: ("11" | "12" | "13") | undefined;
}
export interface Sku {
	readonly name: string;
	readonly tier: "Burstable" | "GeneralPurpose" | "MemoryOptimized";
}
export interface Storage {
	readonly storageSizeGB?: number | undefined;
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
	"flexibleServers/advisors": flexibleServers_advisors,
	"flexibleServers/configurations": flexibleServers_configurations,
	"flexibleServers/databases": flexibleServers_databases,
	"flexibleServers/firewallRules": flexibleServers_firewallRules,
	"flexibleServers/queryTexts": flexibleServers_queryTexts,
};

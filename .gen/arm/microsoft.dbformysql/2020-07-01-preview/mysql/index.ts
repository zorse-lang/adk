import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class flexibleServers
	extends ArmResource<flexibleServersComponentInputs>
	implements flexibleServersComponentOutputs
{
	constructor(entity: ADKEntity, options: flexibleServersComponentInputs) {
		super(entity, options.name, "Microsoft.DBForMySql/flexibleServers", "2020-07-01-preview", options);
	}
	public readonly apiVersion: "2020-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DBForMySql/flexibleServers";
}
export interface flexibleServersComponentOutputs {
	readonly apiVersion: "2020-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DBForMySql/flexibleServers";
}
export interface flexibleServersComponentInputs {
	readonly identity?: Identity;
	readonly location: string;
	readonly name: string;
	readonly properties?: ServerProperties;
	readonly sku?: Sku;
	readonly tags?: TrackedResourceTags;
}
export class flexibleServers_configurations
	extends ArmResource<flexibleServers_configurationsComponentInputs>
	implements flexibleServers_configurationsComponentOutputs
{
	constructor(entity: ADKEntity, options: flexibleServers_configurationsComponentInputs) {
		super(entity, options.name, "Microsoft.DBForMySql/flexibleServers/configurations", "2020-07-01-preview", options);
	}
	public readonly apiVersion: "2020-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DBForMySql/flexibleServers/configurations";
}
export interface flexibleServers_configurationsComponentOutputs {
	readonly apiVersion: "2020-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DBForMySql/flexibleServers/configurations";
}
export interface flexibleServers_configurationsComponentInputs {
	readonly name: string;
	readonly properties?: ConfigurationProperties;
}
export class flexibleServers_databases
	extends ArmResource<flexibleServers_databasesComponentInputs>
	implements flexibleServers_databasesComponentOutputs
{
	constructor(entity: ADKEntity, options: flexibleServers_databasesComponentInputs) {
		super(entity, options.name, "Microsoft.DBForMySql/flexibleServers/databases", "2020-07-01-preview", options);
	}
	public readonly apiVersion: "2020-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DBForMySql/flexibleServers/databases";
}
export interface flexibleServers_databasesComponentOutputs {
	readonly apiVersion: "2020-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DBForMySql/flexibleServers/databases";
}
export interface flexibleServers_databasesComponentInputs {
	readonly name: string;
	readonly properties?: DatabaseProperties;
}
export class flexibleServers_firewallRules
	extends ArmResource<flexibleServers_firewallRulesComponentInputs>
	implements flexibleServers_firewallRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: flexibleServers_firewallRulesComponentInputs) {
		super(entity, options.name, "Microsoft.DBForMySql/flexibleServers/firewallRules", "2020-07-01-preview", options);
	}
	public readonly apiVersion: "2020-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DBForMySql/flexibleServers/firewallRules";
}
export interface flexibleServers_firewallRulesComponentOutputs {
	readonly apiVersion: "2020-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DBForMySql/flexibleServers/firewallRules";
}
export interface flexibleServers_firewallRulesComponentInputs {
	readonly name: string;
	readonly properties: FirewallRuleProperties;
}
export class flexibleServers_keys
	extends ArmResource<flexibleServers_keysComponentInputs>
	implements flexibleServers_keysComponentOutputs
{
	constructor(entity: ADKEntity, options: flexibleServers_keysComponentInputs) {
		super(entity, options.name, "Microsoft.DBForMySql/flexibleServers/keys", "2020-07-01-preview", options);
	}
	public readonly apiVersion: "2020-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DBForMySql/flexibleServers/keys";
}
export interface flexibleServers_keysComponentOutputs {
	readonly apiVersion: "2020-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DBForMySql/flexibleServers/keys";
}
export interface flexibleServers_keysComponentInputs {
	readonly kind?: string;
	readonly name: string;
	readonly properties?: ServerKeyProperties;
}
export interface ConfigurationProperties {
	readonly allowedValues?: string;
	readonly dataType?: string;
	readonly defaultValue?: string;
	readonly description?: string;
	readonly isConfigPendingRestart?: "False" | "True";
	readonly isDynamicConfig?: "False" | "True";
	readonly isReadOnly?: "False" | "True";
	readonly source?: string;
	readonly value?: string;
}
export interface DatabaseProperties {
	readonly charset?: string;
	readonly collation?: string;
}
export interface DelegatedSubnetArguments {
	readonly subnetArmResourceId?: string;
}
export interface FirewallRuleProperties {
	readonly endIpAddress: string;
	readonly startIpAddress: string;
}
export interface Identity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "SystemAssigned";
}
export interface MaintenanceWindow {
	readonly customWindow?: string;
	readonly dayOfWeek?: number;
	readonly startHour?: number;
	readonly startMinute?: number;
}
export interface PrivateDnsZoneArguments {
	readonly privateDnsZoneArmResourceId?: string;
}
export interface ServerKeyProperties {
	readonly creationDate?: string;
	readonly serverKeyType: "AzureKeyVault";
	readonly uri?: string;
}
export interface ServerProperties {
	readonly administratorLogin?: string;
	readonly administratorLoginPassword?: string;
	readonly availabilityZone?: string;
	readonly byokEnforcement?: string;
	readonly createMode?: "Default" | "PointInTimeRestore" | "Replica";
	readonly delegatedSubnetArguments?: DelegatedSubnetArguments;
	readonly earliestRestoreDate?: string;
	readonly fullyQualifiedDomainName?: string;
	readonly haEnabled?: "Disabled" | "Enabled";
	readonly haState?:
		| "CreatingStandby"
		| "FailingOver"
		| "Healthy"
		| "NotEnabled"
		| "RemovingStandby"
		| "ReplicatingData";
	readonly infrastructureEncryption?: "Disabled" | "Enabled";
	readonly maintenanceWindow?: MaintenanceWindow;
	readonly privateDnsZoneArguments?: PrivateDnsZoneArguments;
	readonly publicNetworkAccess?: "Disabled" | "Enabled";
	readonly replicaCapacity?: number;
	readonly replicationRole?: string;
	readonly restorePointInTime?: string;
	readonly sourceServerId?: string;
	readonly sslEnforcement?: "Disabled" | "Enabled";
	readonly standbyAvailabilityZone?: string;
	readonly state?: "Disabled" | "Dropping" | "Ready" | "Starting" | "Stopped" | "Stopping" | "Updating";
	readonly storageProfile?: StorageProfile;
	readonly tags?: ServerPropertiesTags;
	readonly version?: "5.7";
}
export interface ServerPropertiesTags {
	readonly [key: string]: string;
}
export interface Sku {
	readonly name: string;
	readonly tier: "Burstable" | "GeneralPurpose" | "MemoryOptimized";
}
export interface StorageProfile {
	readonly backupRetentionDays?: number;
	readonly fileStorageSkuName?: string;
	readonly storageAutogrow?: "Disabled" | "Enabled";
	readonly storageIops?: number;
	readonly storageMB?: number;
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export default {
	flexibleServers: flexibleServers,
	"flexibleServers/configurations": flexibleServers_configurations,
	"flexibleServers/databases": flexibleServers_databases,
	"flexibleServers/firewallRules": flexibleServers_firewallRules,
	"flexibleServers/keys": flexibleServers_keys,
};

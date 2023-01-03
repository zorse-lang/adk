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
	readonly identity?: Identity | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: ServerProperties | undefined;
	readonly sku?: Sku | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly properties?: ConfigurationProperties | undefined;
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
	readonly properties?: DatabaseProperties | undefined;
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
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: ServerKeyProperties | undefined;
}
export interface ConfigurationProperties {
	readonly allowedValues?: string | undefined;
	readonly dataType?: string | undefined;
	readonly defaultValue?: string | undefined;
	readonly description?: string | undefined;
	readonly isConfigPendingRestart?: ("False" | "True") | undefined;
	readonly isDynamicConfig?: ("False" | "True") | undefined;
	readonly isReadOnly?: ("False" | "True") | undefined;
	readonly source?: string | undefined;
	readonly value?: string | undefined;
}
export interface DatabaseProperties {
	readonly charset?: string | undefined;
	readonly collation?: string | undefined;
}
export interface DelegatedSubnetArguments {
	readonly subnetArmResourceId?: string | undefined;
}
export interface FirewallRuleProperties {
	readonly endIpAddress: string;
	readonly startIpAddress: string;
}
export interface Identity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: "SystemAssigned" | undefined;
}
export interface MaintenanceWindow {
	readonly customWindow?: string | undefined;
	readonly dayOfWeek?: number | undefined;
	readonly startHour?: number | undefined;
	readonly startMinute?: number | undefined;
}
export interface PrivateDnsZoneArguments {
	readonly privateDnsZoneArmResourceId?: string | undefined;
}
export interface ServerKeyProperties {
	readonly creationDate?: string | undefined;
	readonly serverKeyType: "AzureKeyVault";
	readonly uri?: string | undefined;
}
export interface ServerProperties {
	readonly administratorLogin?: string | undefined;
	readonly administratorLoginPassword?: string | undefined;
	readonly availabilityZone?: string | undefined;
	readonly byokEnforcement?: string | undefined;
	readonly createMode?: ("Default" | "PointInTimeRestore" | "Replica") | undefined;
	readonly delegatedSubnetArguments?: DelegatedSubnetArguments | undefined;
	readonly earliestRestoreDate?: string | undefined;
	readonly fullyQualifiedDomainName?: string | undefined;
	readonly haEnabled?: ("Disabled" | "Enabled") | undefined;
	readonly haState?:
		| ("CreatingStandby" | "FailingOver" | "Healthy" | "NotEnabled" | "RemovingStandby" | "ReplicatingData")
		| undefined;
	readonly infrastructureEncryption?: ("Disabled" | "Enabled") | undefined;
	readonly maintenanceWindow?: MaintenanceWindow | undefined;
	readonly privateDnsZoneArguments?: PrivateDnsZoneArguments | undefined;
	readonly publicNetworkAccess?: ("Disabled" | "Enabled") | undefined;
	readonly replicaCapacity?: number | undefined;
	readonly replicationRole?: string | undefined;
	readonly restorePointInTime?: string | undefined;
	readonly sourceServerId?: string | undefined;
	readonly sslEnforcement?: ("Disabled" | "Enabled") | undefined;
	readonly standbyAvailabilityZone?: string | undefined;
	readonly state?: ("Disabled" | "Dropping" | "Ready" | "Starting" | "Stopped" | "Stopping" | "Updating") | undefined;
	readonly storageProfile?: StorageProfile | undefined;
	readonly tags?: ServerPropertiesTags | undefined;
	readonly version?: "5.7" | undefined;
}
export interface ServerPropertiesTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface Sku {
	readonly name: string;
	readonly tier: "Burstable" | "GeneralPurpose" | "MemoryOptimized";
}
export interface StorageProfile {
	readonly backupRetentionDays?: number | undefined;
	readonly fileStorageSkuName?: string | undefined;
	readonly storageAutogrow?: ("Disabled" | "Enabled") | undefined;
	readonly storageIops?: number | undefined;
	readonly storageMB?: number | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	flexibleServers: flexibleServers,
	"flexibleServers/configurations": flexibleServers_configurations,
	"flexibleServers/databases": flexibleServers_databases,
	"flexibleServers/firewallRules": flexibleServers_firewallRules,
	"flexibleServers/keys": flexibleServers_keys,
};

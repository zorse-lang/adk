import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class flexibleServers
	extends ArmResource<flexibleServersComponentInputs>
	implements flexibleServersComponentOutputs
{
	constructor(entity: ADKEntity, options: flexibleServersComponentInputs) {
		super(entity, options.name, "Microsoft.DBForPostgreSql/flexibleServers", "2020-02-14-preview", options);
	}
	public readonly apiVersion: "2020-02-14-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DBForPostgreSql/flexibleServers";
}
export interface flexibleServersComponentOutputs {
	readonly apiVersion: "2020-02-14-preview";
	readonly id: string;
	readonly type: "Microsoft.DBForPostgreSql/flexibleServers";
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
		super(
			entity,
			options.name,
			"Microsoft.DBForPostgreSql/flexibleServers/configurations",
			"2020-02-14-preview",
			options,
		);
	}
	public readonly apiVersion: "2020-02-14-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DBForPostgreSql/flexibleServers/configurations";
}
export interface flexibleServers_configurationsComponentOutputs {
	readonly apiVersion: "2020-02-14-preview";
	readonly id: string;
	readonly type: "Microsoft.DBForPostgreSql/flexibleServers/configurations";
}
export interface flexibleServers_configurationsComponentInputs {
	readonly name: string;
	readonly properties?: ConfigurationProperties | undefined;
}
export class flexibleServers_firewallRules
	extends ArmResource<flexibleServers_firewallRulesComponentInputs>
	implements flexibleServers_firewallRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: flexibleServers_firewallRulesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.DBForPostgreSql/flexibleServers/firewallRules",
			"2020-02-14-preview",
			options,
		);
	}
	public readonly apiVersion: "2020-02-14-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DBForPostgreSql/flexibleServers/firewallRules";
}
export interface flexibleServers_firewallRulesComponentOutputs {
	readonly apiVersion: "2020-02-14-preview";
	readonly id: string;
	readonly type: "Microsoft.DBForPostgreSql/flexibleServers/firewallRules";
}
export interface flexibleServers_firewallRulesComponentInputs {
	readonly name: string;
	readonly properties: FirewallRuleProperties;
}
export interface ConfigurationProperties {
	readonly allowedValues?: string | undefined;
	readonly dataType?: ("Boolean" | "Enumeration" | "Integer" | "Numeric") | undefined;
	readonly defaultValue?: string | undefined;
	readonly description?: string | undefined;
	readonly source?: string | undefined;
	readonly value?: string | undefined;
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
export interface ServerProperties {
	readonly administratorLogin?: string | undefined;
	readonly administratorLoginPassword?: string | undefined;
	readonly availabilityZone?: string | undefined;
	readonly byokEnforcement?: string | undefined;
	readonly createMode?: ("Default" | "PointInTimeRestore") | undefined;
	readonly delegatedSubnetArguments?: ServerPropertiesDelegatedSubnetArguments | undefined;
	readonly displayName?: string | undefined;
	readonly earliestRestoreDate?: string | undefined;
	readonly fullyQualifiedDomainName?: string | undefined;
	readonly haEnabled?: "Disabled" | undefined;
	readonly haState?:
		| ("CreatingStandby" | "FailingOver" | "Healthy" | "NotEnabled" | "RemovingStandby" | "ReplicatingData")
		| undefined;
	readonly logBackupStorageSku?: string | undefined;
	readonly maintenanceWindow?: MaintenanceWindow | undefined;
	readonly minorVersion?: string | undefined;
	readonly pointInTimeUTC?: string | undefined;
	readonly privateDnsZoneArguments?: ServerPropertiesPrivateDnsZoneArguments | undefined;
	readonly publicNetworkAccess?: ("Disabled" | "Enabled") | undefined;
	readonly sourceResourceGroupName?: string | undefined;
	readonly sourceServerName?: string | undefined;
	readonly sourceSubscriptionId?: string | undefined;
	readonly standbyAvailabilityZone?: string | undefined;
	readonly standbyCount?: number | undefined;
	readonly state?: ("Disabled" | "Dropping" | "Ready" | "Starting" | "Stopped" | "Stopping" | "Updating") | undefined;
	readonly storageProfile?: StorageProfile | undefined;
	readonly tags?: ServerPropertiesTags | undefined;
	readonly version?: ("11" | "12") | undefined;
}
export interface ServerPropertiesDelegatedSubnetArguments {
	readonly subnetArmResourceId?: string | undefined;
}
export interface ServerPropertiesPrivateDnsZoneArguments {
	readonly privateDnsZoneArmResourceId?: string | undefined;
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
	readonly geoRedundantBackup?: ("Disabled" | "Enabled") | undefined;
	readonly storageMB?: number | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	flexibleServers: flexibleServers,
	"flexibleServers/configurations": flexibleServers_configurations,
	"flexibleServers/firewallRules": flexibleServers_firewallRules,
};

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
	readonly properties?: ConfigurationProperties;
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
	readonly allowedValues?: string;
	readonly dataType?: "Boolean" | "Enumeration" | "Integer" | "Numeric";
	readonly defaultValue?: string;
	readonly description?: string;
	readonly source?: string;
	readonly value?: string;
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
export interface ServerProperties {
	readonly administratorLogin?: string;
	readonly administratorLoginPassword?: string;
	readonly availabilityZone?: string;
	readonly byokEnforcement?: string;
	readonly createMode?: "Default" | "PointInTimeRestore";
	readonly delegatedSubnetArguments?: ServerPropertiesDelegatedSubnetArguments;
	readonly displayName?: string;
	readonly earliestRestoreDate?: string;
	readonly fullyQualifiedDomainName?: string;
	readonly haEnabled?: "Disabled";
	readonly haState?:
		| "CreatingStandby"
		| "FailingOver"
		| "Healthy"
		| "NotEnabled"
		| "RemovingStandby"
		| "ReplicatingData";
	readonly logBackupStorageSku?: string;
	readonly maintenanceWindow?: MaintenanceWindow;
	readonly minorVersion?: string;
	readonly pointInTimeUTC?: string;
	readonly privateDnsZoneArguments?: ServerPropertiesPrivateDnsZoneArguments;
	readonly publicNetworkAccess?: "Disabled" | "Enabled";
	readonly sourceResourceGroupName?: string;
	readonly sourceServerName?: string;
	readonly sourceSubscriptionId?: string;
	readonly standbyAvailabilityZone?: string;
	readonly standbyCount?: number;
	readonly state?: "Disabled" | "Dropping" | "Ready" | "Starting" | "Stopped" | "Stopping" | "Updating";
	readonly storageProfile?: StorageProfile;
	readonly tags?: ServerPropertiesTags;
	readonly version?: "11" | "12";
}
export interface ServerPropertiesDelegatedSubnetArguments {
	readonly subnetArmResourceId?: string;
}
export interface ServerPropertiesPrivateDnsZoneArguments {
	readonly privateDnsZoneArmResourceId?: string;
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
	readonly geoRedundantBackup?: "Disabled" | "Enabled";
	readonly storageMB?: number;
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export default {
	flexibleServers: flexibleServers,
	"flexibleServers/configurations": flexibleServers_configurations,
	"flexibleServers/firewallRules": flexibleServers_firewallRules,
};

import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class servers extends ArmResource<serversComponentInputs> implements serversComponentOutputs {
	constructor(entity: ADKEntity, options: serversComponentInputs) {
		super(entity, options.name, "Microsoft.DBforPostgreSQL/servers", "2017-12-01-preview", options);
	}
	public readonly apiVersion: "2017-12-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DBforPostgreSQL/servers";
}
export interface serversComponentOutputs {
	readonly apiVersion: "2017-12-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DBforPostgreSQL/servers";
}
export interface serversComponentInputs {
	readonly identity?: ResourceIdentity;
	readonly location: string;
	readonly name: string;
	readonly properties: ServerPropertiesForCreateOrServerProperties;
	readonly sku?: Sku;
	readonly tags?: ServerForCreateTags;
}
export class servers_administrators
	extends ArmResource<servers_administratorsComponentInputs>
	implements servers_administratorsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_administratorsComponentInputs) {
		super(entity, options.name, "Microsoft.DBforPostgreSQL/servers/administrators", "2017-12-01-preview", options);
	}
	public readonly apiVersion: "2017-12-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DBforPostgreSQL/servers/administrators";
}
export interface servers_administratorsComponentOutputs {
	readonly apiVersion: "2017-12-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DBforPostgreSQL/servers/administrators";
}
export interface servers_administratorsComponentInputs {
	readonly name: string;
	readonly properties?: ServerAdministratorProperties;
}
export class servers_configurations
	extends ArmResource<servers_configurationsComponentInputs>
	implements servers_configurationsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_configurationsComponentInputs) {
		super(entity, options.name, "Microsoft.DBforPostgreSQL/servers/configurations", "2017-12-01-preview", options);
	}
	public readonly apiVersion: "2017-12-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DBforPostgreSQL/servers/configurations";
}
export interface servers_configurationsComponentOutputs {
	readonly apiVersion: "2017-12-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DBforPostgreSQL/servers/configurations";
}
export interface servers_configurationsComponentInputs {
	readonly name: string;
	readonly properties?: ConfigurationProperties;
}
export class servers_databases
	extends ArmResource<servers_databasesComponentInputs>
	implements servers_databasesComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_databasesComponentInputs) {
		super(entity, options.name, "Microsoft.DBforPostgreSQL/servers/databases", "2017-12-01-preview", options);
	}
	public readonly apiVersion: "2017-12-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DBforPostgreSQL/servers/databases";
}
export interface servers_databasesComponentOutputs {
	readonly apiVersion: "2017-12-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DBforPostgreSQL/servers/databases";
}
export interface servers_databasesComponentInputs {
	readonly name: string;
	readonly properties?: DatabaseProperties;
}
export class servers_firewallRules
	extends ArmResource<servers_firewallRulesComponentInputs>
	implements servers_firewallRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_firewallRulesComponentInputs) {
		super(entity, options.name, "Microsoft.DBforPostgreSQL/servers/firewallRules", "2017-12-01-preview", options);
	}
	public readonly apiVersion: "2017-12-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DBforPostgreSQL/servers/firewallRules";
}
export interface servers_firewallRulesComponentOutputs {
	readonly apiVersion: "2017-12-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DBforPostgreSQL/servers/firewallRules";
}
export interface servers_firewallRulesComponentInputs {
	readonly name: string;
	readonly properties: FirewallRuleProperties;
}
export class servers_securityAlertPolicies
	extends ArmResource<servers_securityAlertPoliciesComponentInputs>
	implements servers_securityAlertPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_securityAlertPoliciesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.DBforPostgreSQL/servers/securityAlertPolicies",
			"2017-12-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2017-12-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DBforPostgreSQL/servers/securityAlertPolicies";
}
export interface servers_securityAlertPoliciesComponentOutputs {
	readonly apiVersion: "2017-12-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DBforPostgreSQL/servers/securityAlertPolicies";
}
export interface servers_securityAlertPoliciesComponentInputs {
	readonly name: string;
	readonly properties?: SecurityAlertPolicyProperties;
}
export class servers_virtualNetworkRules
	extends ArmResource<servers_virtualNetworkRulesComponentInputs>
	implements servers_virtualNetworkRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_virtualNetworkRulesComponentInputs) {
		super(entity, options.name, "Microsoft.DBforPostgreSQL/servers/virtualNetworkRules", "2017-12-01-preview", options);
	}
	public readonly apiVersion: "2017-12-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.DBforPostgreSQL/servers/virtualNetworkRules";
}
export interface servers_virtualNetworkRulesComponentOutputs {
	readonly apiVersion: "2017-12-01-preview";
	readonly id: string;
	readonly type: "Microsoft.DBforPostgreSQL/servers/virtualNetworkRules";
}
export interface servers_virtualNetworkRulesComponentInputs {
	readonly name: string;
	readonly properties?: VirtualNetworkRuleProperties;
}
export interface ConfigurationProperties {
	readonly allowedValues?: string;
	readonly dataType?: string;
	readonly defaultValue?: string;
	readonly description?: string;
	readonly source?: string;
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
export interface PrivateEndpointConnectionProperties {
	readonly privateEndpoint?: PrivateEndpointProperty;
	readonly privateLinkServiceConnectionState?: PrivateLinkServiceConnectionStateProperty;
	readonly provisioningState?: "Approving" | "Dropping" | "Failed" | "Ready" | "Rejecting";
}
export interface PrivateEndpointProperty {
	readonly id?: string;
}
export interface PrivateLinkServiceConnectionStateProperty {
	readonly actionsRequired?: "None";
	readonly description: string;
	readonly status: "Approved" | "Disconnected" | "Pending" | "Rejected";
}
export interface ResourceIdentity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "SystemAssigned";
}
export interface SecurityAlertPolicyProperties {
	readonly disabledAlerts?: string[];
	readonly emailAccountAdmins?: boolean;
	readonly emailAddresses?: string[];
	readonly retentionDays?: number;
	readonly state: "Disabled";
	readonly storageAccountAccessKey?: string;
	readonly storageEndpoint?: string;
}
export interface ServerAdministratorProperties {
	readonly administratorType: "ActiveDirectory";
	readonly login: string;
	readonly sid: string;
	readonly tenantId: string;
}
export interface ServerForCreateTags {
	readonly [key: string]: string;
}
export interface ServerPrivateEndpointConnection {
	readonly id?: string;
	readonly properties?: PrivateEndpointConnectionProperties;
}
export interface ServerPropertiesForCreateOrServerProperties {
	readonly administratorLogin?: string;
	readonly byokEnforcement?: string;
	readonly earliestRestoreDate?: string;
	readonly fullyQualifiedDomainName?: string;
	readonly infrastructureEncryption?: "Disabled" | "Enabled";
	readonly masterServerId?: string;
	readonly minimalTlsVersion?: "TLS1_0" | "TLS1_1" | "TLS1_2" | "TLSEnforcementDisabled";
	readonly privateEndpointConnections?: ServerPrivateEndpointConnection[];
	readonly publicNetworkAccess?: "Disabled" | "Enabled";
	readonly replicaCapacity?: number;
	readonly replicationRole?: string;
	readonly sslEnforcement?: "Disabled";
	readonly storageProfile?: StorageProfile;
	readonly userVisibleState?: "Disabled" | "Dropping" | "Inaccessible" | "Ready";
	readonly version?: "10" | "10.0" | "10.2" | "11" | "9.5" | "9.6";
}
export interface Sku {
	readonly capacity?: number;
	readonly family?: string;
	readonly name: string;
	readonly size?: string;
	readonly tier?: "Basic" | "GeneralPurpose" | "MemoryOptimized";
}
export interface StorageProfile {
	readonly backupRetentionDays?: number;
	readonly geoRedundantBackup?: "Disabled" | "Enabled";
	readonly storageAutogrow?: "Disabled" | "Enabled";
	readonly storageMB?: number;
}
export interface VirtualNetworkRuleProperties {
	readonly ignoreMissingVnetServiceEndpoint?: boolean;
	readonly state?: "Deleting" | "InProgress" | "Initializing" | "Ready" | "Unknown";
	readonly virtualNetworkSubnetId: string;
}
export default {
	servers: servers,
	"servers/administrators": servers_administrators,
	"servers/configurations": servers_configurations,
	"servers/databases": servers_databases,
	"servers/firewallRules": servers_firewallRules,
	"servers/securityAlertPolicies": servers_securityAlertPolicies,
	"servers/virtualNetworkRules": servers_virtualNetworkRules,
};

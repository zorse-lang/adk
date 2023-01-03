import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class servers extends ArmResource<serversComponentInputs> implements serversComponentOutputs {
	constructor(entity: ADKEntity, options: serversComponentInputs) {
		super(entity, options.name, "Microsoft.DBforPostgreSQL/servers", "2017-12-01", options);
	}
	public readonly apiVersion: "2017-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.DBforPostgreSQL/servers";
}
export interface serversComponentOutputs {
	readonly apiVersion: "2017-12-01";
	readonly id: string;
	readonly type: "Microsoft.DBforPostgreSQL/servers";
}
export interface serversComponentInputs {
	readonly identity?: ResourceIdentity | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties: ServerPropertiesForCreateOrServerProperties;
	readonly sku?: Sku | undefined;
	readonly tags?: ServerForCreateTags | undefined;
}
export class servers_administrators
	extends ArmResource<servers_administratorsComponentInputs>
	implements servers_administratorsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_administratorsComponentInputs) {
		super(entity, options.name, "Microsoft.DBforPostgreSQL/servers/administrators", "2017-12-01", options);
	}
	public readonly apiVersion: "2017-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.DBforPostgreSQL/servers/administrators";
}
export interface servers_administratorsComponentOutputs {
	readonly apiVersion: "2017-12-01";
	readonly id: string;
	readonly type: "Microsoft.DBforPostgreSQL/servers/administrators";
}
export interface servers_administratorsComponentInputs {
	readonly name: string;
	readonly properties?: ServerAdministratorProperties | undefined;
}
export class servers_configurations
	extends ArmResource<servers_configurationsComponentInputs>
	implements servers_configurationsComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_configurationsComponentInputs) {
		super(entity, options.name, "Microsoft.DBforPostgreSQL/servers/configurations", "2017-12-01", options);
	}
	public readonly apiVersion: "2017-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.DBforPostgreSQL/servers/configurations";
}
export interface servers_configurationsComponentOutputs {
	readonly apiVersion: "2017-12-01";
	readonly id: string;
	readonly type: "Microsoft.DBforPostgreSQL/servers/configurations";
}
export interface servers_configurationsComponentInputs {
	readonly name: string;
	readonly properties?: ConfigurationProperties | undefined;
}
export class servers_databases
	extends ArmResource<servers_databasesComponentInputs>
	implements servers_databasesComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_databasesComponentInputs) {
		super(entity, options.name, "Microsoft.DBforPostgreSQL/servers/databases", "2017-12-01", options);
	}
	public readonly apiVersion: "2017-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.DBforPostgreSQL/servers/databases";
}
export interface servers_databasesComponentOutputs {
	readonly apiVersion: "2017-12-01";
	readonly id: string;
	readonly type: "Microsoft.DBforPostgreSQL/servers/databases";
}
export interface servers_databasesComponentInputs {
	readonly name: string;
	readonly properties?: DatabaseProperties | undefined;
}
export class servers_firewallRules
	extends ArmResource<servers_firewallRulesComponentInputs>
	implements servers_firewallRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_firewallRulesComponentInputs) {
		super(entity, options.name, "Microsoft.DBforPostgreSQL/servers/firewallRules", "2017-12-01", options);
	}
	public readonly apiVersion: "2017-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.DBforPostgreSQL/servers/firewallRules";
}
export interface servers_firewallRulesComponentOutputs {
	readonly apiVersion: "2017-12-01";
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
		super(entity, options.name, "Microsoft.DBforPostgreSQL/servers/securityAlertPolicies", "2017-12-01", options);
	}
	public readonly apiVersion: "2017-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.DBforPostgreSQL/servers/securityAlertPolicies";
}
export interface servers_securityAlertPoliciesComponentOutputs {
	readonly apiVersion: "2017-12-01";
	readonly id: string;
	readonly type: "Microsoft.DBforPostgreSQL/servers/securityAlertPolicies";
}
export interface servers_securityAlertPoliciesComponentInputs {
	readonly name: string;
	readonly properties?: SecurityAlertPolicyProperties | undefined;
}
export class servers_virtualNetworkRules
	extends ArmResource<servers_virtualNetworkRulesComponentInputs>
	implements servers_virtualNetworkRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: servers_virtualNetworkRulesComponentInputs) {
		super(entity, options.name, "Microsoft.DBforPostgreSQL/servers/virtualNetworkRules", "2017-12-01", options);
	}
	public readonly apiVersion: "2017-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.DBforPostgreSQL/servers/virtualNetworkRules";
}
export interface servers_virtualNetworkRulesComponentOutputs {
	readonly apiVersion: "2017-12-01";
	readonly id: string;
	readonly type: "Microsoft.DBforPostgreSQL/servers/virtualNetworkRules";
}
export interface servers_virtualNetworkRulesComponentInputs {
	readonly name: string;
	readonly properties?: VirtualNetworkRuleProperties | undefined;
}
export interface ConfigurationProperties {
	readonly allowedValues?: string | undefined;
	readonly dataType?: string | undefined;
	readonly defaultValue?: string | undefined;
	readonly description?: string | undefined;
	readonly source?: string | undefined;
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
export interface PrivateEndpointProperty {
	readonly id?: string | undefined;
}
export interface ResourceIdentity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: "SystemAssigned" | undefined;
}
export interface SecurityAlertPolicyProperties {
	readonly disabledAlerts?: string[] | undefined;
	readonly emailAccountAdmins?: boolean | undefined;
	readonly emailAddresses?: string[] | undefined;
	readonly retentionDays?: number | undefined;
	readonly state: "Disabled";
	readonly storageAccountAccessKey?: string | undefined;
	readonly storageEndpoint?: string | undefined;
}
export interface ServerAdministratorProperties {
	readonly administratorType: "ActiveDirectory";
	readonly login: string;
	readonly sid: string;
	readonly tenantId: string;
}
export interface ServerForCreateTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ServerPrivateEndpointConnection {
	readonly id?: string | undefined;
	readonly properties?: ServerPrivateEndpointConnectionProperties | undefined;
}
export interface ServerPrivateEndpointConnectionProperties {
	readonly privateEndpoint?: PrivateEndpointProperty | undefined;
	readonly privateLinkServiceConnectionState?: ServerPrivateLinkServiceConnectionStateProperty | undefined;
	readonly provisioningState?: ("Approving" | "Dropping" | "Failed" | "Ready" | "Rejecting") | undefined;
}
export interface ServerPrivateLinkServiceConnectionStateProperty {
	readonly actionsRequired?: "None" | undefined;
	readonly description: string;
	readonly status: "Approved" | "Disconnected" | "Pending" | "Rejected";
}
export interface ServerPropertiesForCreateOrServerProperties {
	readonly administratorLogin?: string | undefined;
	readonly byokEnforcement?: string | undefined;
	readonly earliestRestoreDate?: string | undefined;
	readonly fullyQualifiedDomainName?: string | undefined;
	readonly infrastructureEncryption?: ("Disabled" | "Enabled") | undefined;
	readonly masterServerId?: string | undefined;
	readonly minimalTlsVersion?: ("TLS1_0" | "TLS1_1" | "TLS1_2" | "TLSEnforcementDisabled") | undefined;
	readonly privateEndpointConnections?: ServerPrivateEndpointConnection[] | undefined;
	readonly publicNetworkAccess?: ("Disabled" | "Enabled") | undefined;
	readonly replicaCapacity?: number | undefined;
	readonly replicationRole?: string | undefined;
	readonly sslEnforcement?: "Disabled" | undefined;
	readonly storageProfile?: StorageProfile | undefined;
	readonly userVisibleState?: ("Disabled" | "Dropping" | "Inaccessible" | "Ready") | undefined;
	readonly version?: ("10" | "10.0" | "10.2" | "11" | "9.5" | "9.6") | undefined;
}
export interface Sku {
	readonly capacity?: number | undefined;
	readonly family?: string | undefined;
	readonly name: string;
	readonly size?: string | undefined;
	readonly tier?: ("Basic" | "GeneralPurpose" | "MemoryOptimized") | undefined;
}
export interface StorageProfile {
	readonly backupRetentionDays?: number | undefined;
	readonly geoRedundantBackup?: ("Disabled" | "Enabled") | undefined;
	readonly storageAutogrow?: ("Disabled" | "Enabled") | undefined;
	readonly storageMB?: number | undefined;
}
export interface VirtualNetworkRuleProperties {
	readonly ignoreMissingVnetServiceEndpoint?: boolean | undefined;
	readonly state?: ("Deleting" | "InProgress" | "Initializing" | "Ready" | "Unknown") | undefined;
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

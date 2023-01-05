import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class monitors extends ArmResource<monitorsComponentInputs> implements monitorsComponentOutputs {
	constructor(entity: ADKEntity, options: monitorsComponentInputs) {
		super(entity, options.name, "Microsoft.Logz/monitors", "2022-01-01-preview", options);
	}
	public readonly apiVersion: "2022-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Logz/monitors";
}
export interface monitorsComponentOutputs {
	readonly apiVersion: "2022-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Logz/monitors";
}
export interface monitorsComponentInputs {
	readonly identity?: IdentityProperties;
	readonly location: string;
	readonly name: string;
	readonly properties?: MonitorProperties;
	readonly systemData?: SystemData;
	readonly tags?: LogzMonitorResourceTags;
}
export class monitors_accounts
	extends ArmResource<monitors_accountsComponentInputs>
	implements monitors_accountsComponentOutputs
{
	constructor(entity: ADKEntity, options: monitors_accountsComponentInputs) {
		super(entity, options.name, "Microsoft.Logz/monitors/accounts", "2022-01-01-preview", options);
	}
	public readonly apiVersion: "2022-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Logz/monitors/accounts";
}
export interface monitors_accountsComponentOutputs {
	readonly apiVersion: "2022-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Logz/monitors/accounts";
}
export interface monitors_accountsComponentInputs {
	readonly identity?: IdentityProperties;
	readonly location: string;
	readonly name: string;
	readonly properties?: MonitorProperties;
	readonly systemData?: SystemData;
	readonly tags?: LogzMonitorResourceTags;
}
export class monitors_accounts_tagRules
	extends ArmResource<monitors_accounts_tagRulesComponentInputs>
	implements monitors_accounts_tagRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: monitors_accounts_tagRulesComponentInputs) {
		super(entity, options.name, "Microsoft.Logz/monitors/accounts/tagRules", "2022-01-01-preview", options);
	}
	public readonly apiVersion: "2022-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Logz/monitors/accounts/tagRules";
}
export interface monitors_accounts_tagRulesComponentOutputs {
	readonly apiVersion: "2022-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Logz/monitors/accounts/tagRules";
}
export interface monitors_accounts_tagRulesComponentInputs {
	readonly name: string;
	readonly properties?: MonitoringTagRulesProperties;
	readonly systemData?: SystemData;
}
export class monitors_metricsSource
	extends ArmResource<monitors_metricsSourceComponentInputs>
	implements monitors_metricsSourceComponentOutputs
{
	constructor(entity: ADKEntity, options: monitors_metricsSourceComponentInputs) {
		super(entity, options.name, "Microsoft.Logz/monitors/metricsSource", "2022-01-01-preview", options);
	}
	public readonly apiVersion: "2022-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Logz/monitors/metricsSource";
}
export interface monitors_metricsSourceComponentOutputs {
	readonly apiVersion: "2022-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Logz/monitors/metricsSource";
}
export interface monitors_metricsSourceComponentInputs {
	readonly identity?: IdentityProperties;
	readonly location: string;
	readonly name: string;
	readonly properties?: MonitorProperties;
	readonly systemData?: SystemData;
	readonly tags?: LogzMonitorResourceTags;
}
export class monitors_metricsSource_tagRules
	extends ArmResource<monitors_metricsSource_tagRulesComponentInputs>
	implements monitors_metricsSource_tagRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: monitors_metricsSource_tagRulesComponentInputs) {
		super(entity, options.name, "Microsoft.Logz/monitors/metricsSource/tagRules", "2022-01-01-preview", options);
	}
	public readonly apiVersion: "2022-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Logz/monitors/metricsSource/tagRules";
}
export interface monitors_metricsSource_tagRulesComponentOutputs {
	readonly apiVersion: "2022-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Logz/monitors/metricsSource/tagRules";
}
export interface monitors_metricsSource_tagRulesComponentInputs {
	readonly name: string;
	readonly properties?: MetricsTagRulesProperties;
	readonly systemData?: SystemData;
}
export class monitors_singleSignOnConfigurations
	extends ArmResource<monitors_singleSignOnConfigurationsComponentInputs>
	implements monitors_singleSignOnConfigurationsComponentOutputs
{
	constructor(entity: ADKEntity, options: monitors_singleSignOnConfigurationsComponentInputs) {
		super(entity, options.name, "Microsoft.Logz/monitors/singleSignOnConfigurations", "2022-01-01-preview", options);
	}
	public readonly apiVersion: "2022-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Logz/monitors/singleSignOnConfigurations";
}
export interface monitors_singleSignOnConfigurationsComponentOutputs {
	readonly apiVersion: "2022-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Logz/monitors/singleSignOnConfigurations";
}
export interface monitors_singleSignOnConfigurationsComponentInputs {
	readonly name: string;
	readonly properties?: LogzSingleSignOnProperties;
	readonly systemData?: SystemData;
}
export class monitors_tagRules
	extends ArmResource<monitors_tagRulesComponentInputs>
	implements monitors_tagRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: monitors_tagRulesComponentInputs) {
		super(entity, options.name, "Microsoft.Logz/monitors/tagRules", "2022-01-01-preview", options);
	}
	public readonly apiVersion: "2022-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Logz/monitors/tagRules";
}
export interface monitors_tagRulesComponentOutputs {
	readonly apiVersion: "2022-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Logz/monitors/tagRules";
}
export interface monitors_tagRulesComponentInputs {
	readonly name: string;
	readonly properties?: MonitoringTagRulesProperties;
	readonly systemData?: SystemData;
}
export function listMonitoredResources(resource: monitors): MonitoredResourceListResponse {
	if (resource.apiVersion !== "2022-01-01-preview") {
		throw new Error(`listMonitoredResources is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Logz/monitors") {
		throw new Error(`listMonitoredResources is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listUserRoles(resource: monitors, input: UserRoleRequest): UserRoleListResponse {
	if (resource.apiVersion !== "2022-01-01-preview") {
		throw new Error(`listUserRoles is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Logz/monitors") {
		throw new Error(`listUserRoles is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listVMHosts(resource: monitors): VMResourcesListResponse {
	if (resource.apiVersion !== "2022-01-01-preview") {
		throw new Error(`listVMHosts is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Logz/monitors") {
		throw new Error(`listVMHosts is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface FilteringTag {
	readonly action?: "Exclude" | "Include";
	readonly name?: string;
	readonly value?: string;
}
export interface IdentityProperties {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "SystemAssigned" | "UserAssigned";
}
export interface LogRules {
	readonly filteringTags?: FilteringTag[];
	readonly sendAadLogs?: boolean;
	readonly sendActivityLogs?: boolean;
	readonly sendSubscriptionLogs?: boolean;
}
export interface LogzMonitorResourceTags {
	readonly [key: string]: string;
}
export interface LogzOrganizationProperties {
	readonly companyName?: string;
	readonly enterpriseAppId?: string;
	readonly id?: string;
	readonly singleSignOnUrl?: string;
}
export interface LogzSingleSignOnProperties {
	readonly enterpriseAppId?: string;
	readonly provisioningState?:
		| "Accepted"
		| "Canceled"
		| "Creating"
		| "Deleted"
		| "Deleting"
		| "Failed"
		| "NotSpecified"
		| "Succeeded"
		| "Updating";
	readonly singleSignOnState?: "Disable" | "Enable" | "Existing" | "Initial";
	readonly singleSignOnUrl?: string;
}
export interface MetricRules {
	readonly filteringTags?: FilteringTag[];
	readonly subscriptionId?: string;
}
export interface MetricsTagRulesProperties {
	readonly metricRules?: MetricRules[];
	readonly provisioningState?:
		| "Accepted"
		| "Canceled"
		| "Creating"
		| "Deleted"
		| "Deleting"
		| "Failed"
		| "NotSpecified"
		| "Succeeded"
		| "Updating";
	readonly sendMetrics?: boolean;
	readonly systemData?: SystemData;
}
export interface MonitoredResource {
	readonly id?: string;
	readonly reasonForLogsStatus?: string;
	readonly reasonForMetricsStatus?: string;
	readonly sendingLogs?: boolean;
	readonly sendingMetrics?: boolean;
	readonly systemData?: SystemData;
}
export interface MonitoredResourceListResponse {
	readonly nextLink?: string;
	readonly value?: MonitoredResource[];
}
export interface MonitoringTagRulesProperties {
	readonly logRules?: LogRules;
	readonly provisioningState?:
		| "Accepted"
		| "Canceled"
		| "Creating"
		| "Deleted"
		| "Deleting"
		| "Failed"
		| "NotSpecified"
		| "Succeeded"
		| "Updating";
	readonly systemData?: SystemData;
}
export interface MonitorProperties {
	readonly liftrResourceCategory?: "MonitorLogs" | "Unknown";
	readonly liftrResourcePreference?: number;
	readonly logzOrganizationProperties?: LogzOrganizationProperties;
	readonly marketplaceSubscriptionStatus?: "Active" | "Suspended";
	readonly monitoringStatus?: "Disabled" | "Enabled";
	readonly planData?: PlanData;
	readonly provisioningState?:
		| "Accepted"
		| "Canceled"
		| "Creating"
		| "Deleted"
		| "Deleting"
		| "Failed"
		| "NotSpecified"
		| "Succeeded"
		| "Updating";
	readonly userInfo?: UserInfo;
}
export interface PlanData {
	readonly billingCycle?: string;
	readonly effectiveDate?: string;
	readonly planDetails?: string;
	readonly usageType?: string;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface UserInfo {
	readonly emailAddress?: string;
	readonly firstName?: string;
	readonly lastName?: string;
	readonly phoneNumber?: string;
}
export interface UserRoleListResponse {
	readonly nextLink?: string;
	readonly value?: UserRoleResponse[];
}
export interface UserRoleRequest {
	readonly emailAddress?: string;
}
export interface UserRoleResponse {
	readonly role?: "Admin" | "None" | "User";
}
export interface VMResources {
	readonly agentVersion?: string;
	readonly id?: string;
}
export interface VMResourcesListResponse {
	readonly nextLink?: string;
	readonly value?: VMResources[];
}
export default {
	monitors: monitors,
	"monitors/accounts": monitors_accounts,
	"monitors/accounts/tagRules": monitors_accounts_tagRules,
	"monitors/metricsSource": monitors_metricsSource,
	"monitors/metricsSource/tagRules": monitors_metricsSource_tagRules,
	"monitors/singleSignOnConfigurations": monitors_singleSignOnConfigurations,
	"monitors/tagRules": monitors_tagRules,
};

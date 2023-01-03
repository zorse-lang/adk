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
	readonly identity?: IdentityProperties | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: MonitorProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: LogzMonitorResourceTags | undefined;
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
	readonly identity?: IdentityProperties | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: MonitorProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: LogzMonitorResourceTags | undefined;
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
	readonly properties?: MonitoringTagRulesProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly identity?: IdentityProperties | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: MonitorProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: LogzMonitorResourceTags | undefined;
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
	readonly properties?: MetricsTagRulesProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly properties?: LogzSingleSignOnProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly properties?: MonitoringTagRulesProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly action?: ("Exclude" | "Include") | undefined;
	readonly name?: string | undefined;
	readonly value?: string | undefined;
}
export interface IdentityProperties {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: ("SystemAssigned" | "UserAssigned") | undefined;
}
export interface LogRules {
	readonly filteringTags?: FilteringTag[] | undefined;
	readonly sendAadLogs?: boolean | undefined;
	readonly sendActivityLogs?: boolean | undefined;
	readonly sendSubscriptionLogs?: boolean | undefined;
}
export interface LogzMonitorResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface LogzOrganizationProperties {
	readonly companyName?: string | undefined;
	readonly enterpriseAppId?: string | undefined;
	readonly id?: string | undefined;
	readonly singleSignOnUrl?: string | undefined;
}
export interface LogzSingleSignOnProperties {
	readonly enterpriseAppId?: string | undefined;
	readonly provisioningState?:
		| (
				| "Accepted"
				| "Canceled"
				| "Creating"
				| "Deleted"
				| "Deleting"
				| "Failed"
				| "NotSpecified"
				| "Succeeded"
				| "Updating"
		  )
		| undefined;
	readonly singleSignOnState?: ("Disable" | "Enable" | "Existing" | "Initial") | undefined;
	readonly singleSignOnUrl?: string | undefined;
}
export interface MetricRules {
	readonly filteringTags?: FilteringTag[] | undefined;
	readonly subscriptionId?: string | undefined;
}
export interface MetricsTagRulesProperties {
	readonly metricRules?: MetricRules[] | undefined;
	readonly provisioningState?:
		| (
				| "Accepted"
				| "Canceled"
				| "Creating"
				| "Deleted"
				| "Deleting"
				| "Failed"
				| "NotSpecified"
				| "Succeeded"
				| "Updating"
		  )
		| undefined;
	readonly sendMetrics?: boolean | undefined;
	readonly systemData?: SystemData | undefined;
}
export interface MonitoredResource {
	readonly id?: string | undefined;
	readonly reasonForLogsStatus?: string | undefined;
	readonly reasonForMetricsStatus?: string | undefined;
	readonly sendingLogs?: boolean | undefined;
	readonly sendingMetrics?: boolean | undefined;
	readonly systemData?: SystemData | undefined;
}
export interface MonitoredResourceListResponse {
	readonly nextLink?: string | undefined;
	readonly value?: MonitoredResource[] | undefined;
}
export interface MonitoringTagRulesProperties {
	readonly logRules?: LogRules | undefined;
	readonly provisioningState?:
		| (
				| "Accepted"
				| "Canceled"
				| "Creating"
				| "Deleted"
				| "Deleting"
				| "Failed"
				| "NotSpecified"
				| "Succeeded"
				| "Updating"
		  )
		| undefined;
	readonly systemData?: SystemData | undefined;
}
export interface MonitorProperties {
	readonly liftrResourceCategory?: ("MonitorLogs" | "Unknown") | undefined;
	readonly liftrResourcePreference?: number | undefined;
	readonly logzOrganizationProperties?: LogzOrganizationProperties | undefined;
	readonly marketplaceSubscriptionStatus?: ("Active" | "Suspended") | undefined;
	readonly monitoringStatus?: ("Disabled" | "Enabled") | undefined;
	readonly planData?: PlanData | undefined;
	readonly provisioningState?:
		| (
				| "Accepted"
				| "Canceled"
				| "Creating"
				| "Deleted"
				| "Deleting"
				| "Failed"
				| "NotSpecified"
				| "Succeeded"
				| "Updating"
		  )
		| undefined;
	readonly userInfo?: UserInfo | undefined;
}
export interface PlanData {
	readonly billingCycle?: string | undefined;
	readonly effectiveDate?: string | undefined;
	readonly planDetails?: string | undefined;
	readonly usageType?: string | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface UserInfo {
	readonly emailAddress?: string | undefined;
	readonly firstName?: string | undefined;
	readonly lastName?: string | undefined;
	readonly phoneNumber?: string | undefined;
}
export interface UserRoleListResponse {
	readonly nextLink?: string | undefined;
	readonly value?: UserRoleResponse[] | undefined;
}
export interface UserRoleRequest {
	readonly emailAddress?: string | undefined;
}
export interface UserRoleResponse {
	readonly role?: ("Admin" | "None" | "User") | undefined;
}
export interface VMResources {
	readonly agentVersion?: string | undefined;
	readonly id?: string | undefined;
}
export interface VMResourcesListResponse {
	readonly nextLink?: string | undefined;
	readonly value?: VMResources[] | undefined;
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

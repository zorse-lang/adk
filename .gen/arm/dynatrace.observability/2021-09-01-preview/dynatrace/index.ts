import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class monitors extends ArmResource<monitorsComponentInputs> implements monitorsComponentOutputs {
	constructor(entity: ADKEntity, options: monitorsComponentInputs) {
		super(entity, options.name, "Dynatrace.Observability/monitors", "2021-09-01-preview", options);
	}
	public readonly apiVersion: "2021-09-01-preview";
	public readonly id: string;
	public readonly type: "Dynatrace.Observability/monitors";
}
export interface monitorsComponentOutputs {
	readonly apiVersion: "2021-09-01-preview";
	readonly id: string;
	readonly type: "Dynatrace.Observability/monitors";
}
export interface monitorsComponentInputs {
	readonly identity?: IdentityProperties;
	readonly location: string;
	readonly name: string;
	readonly properties: MonitorProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class monitors_singleSignOnConfigurations
	extends ArmResource<monitors_singleSignOnConfigurationsComponentInputs>
	implements monitors_singleSignOnConfigurationsComponentOutputs
{
	constructor(entity: ADKEntity, options: monitors_singleSignOnConfigurationsComponentInputs) {
		super(
			entity,
			options.name,
			"Dynatrace.Observability/monitors/singleSignOnConfigurations",
			"2021-09-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-09-01-preview";
	public readonly id: string;
	public readonly type: "Dynatrace.Observability/monitors/singleSignOnConfigurations";
}
export interface monitors_singleSignOnConfigurationsComponentOutputs {
	readonly apiVersion: "2021-09-01-preview";
	readonly id: string;
	readonly type: "Dynatrace.Observability/monitors/singleSignOnConfigurations";
}
export interface monitors_singleSignOnConfigurationsComponentInputs {
	readonly name: string;
	readonly properties: DynatraceSingleSignOnProperties;
	readonly systemData?: SystemData;
}
export class monitors_tagRules
	extends ArmResource<monitors_tagRulesComponentInputs>
	implements monitors_tagRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: monitors_tagRulesComponentInputs) {
		super(entity, options.name, "Dynatrace.Observability/monitors/tagRules", "2021-09-01-preview", options);
	}
	public readonly apiVersion: "2021-09-01-preview";
	public readonly id: string;
	public readonly type: "Dynatrace.Observability/monitors/tagRules";
}
export interface monitors_tagRulesComponentOutputs {
	readonly apiVersion: "2021-09-01-preview";
	readonly id: string;
	readonly type: "Dynatrace.Observability/monitors/tagRules";
}
export interface monitors_tagRulesComponentInputs {
	readonly name: string;
	readonly properties: MonitoringTagRulesProperties;
	readonly systemData?: SystemData;
}
export function listAppServices(resource: monitors): AppServiceListResponse {
	if (resource.apiVersion !== "2021-09-01-preview") {
		throw new Error(`listAppServices is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Dynatrace.Observability/monitors") {
		throw new Error(`listAppServices is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listHosts(resource: monitors): VMHostsListResponse {
	if (resource.apiVersion !== "2021-09-01-preview") {
		throw new Error(`listHosts is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Dynatrace.Observability/monitors") {
		throw new Error(`listHosts is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listLinkableEnvironments(
	resource: monitors,
	input: LinkableEnvironmentRequest,
): LinkableEnvironmentListResponse {
	if (resource.apiVersion !== "2021-09-01-preview") {
		throw new Error(`listLinkableEnvironments is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Dynatrace.Observability/monitors") {
		throw new Error(`listLinkableEnvironments is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listMonitoredResources(resource: monitors): MonitoredResourceListResponse {
	if (resource.apiVersion !== "2021-09-01-preview") {
		throw new Error(`listMonitoredResources is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Dynatrace.Observability/monitors") {
		throw new Error(`listMonitoredResources is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AccountInfo {
	readonly accountId?: string;
	readonly regionId?: string;
}
export interface AppServiceInfo {
	readonly autoUpdateSetting?: "DISABLED" | "ENABLED";
	readonly availabilityState?:
		| "CRASHED"
		| "LOST"
		| "MONITORED"
		| "PRE_MONITORED"
		| "SHUTDOWN"
		| "UNEXPECTED_SHUTDOWN"
		| "UNKNOWN"
		| "UNMONITORED";
	readonly hostGroup?: string;
	readonly hostName?: string;
	readonly logModule?: "DISABLED" | "ENABLED";
	readonly monitoringType?: "CLOUD_INFRASTRUCTURE" | "FULL_STACK";
	readonly resourceId?: string;
	readonly updateStatus?:
		| "INCOMPATIBLE"
		| "OUTDATED"
		| "SCHEDULED"
		| "SUPPRESSED"
		| "UNKNOWN"
		| "UP2DATE"
		| "UPDATE_IN_PROGRESS"
		| "UPDATE_PENDING"
		| "UPDATE_PROBLEM";
	readonly version?: string;
}
export interface AppServiceListResponse {
	readonly nextLink?: string;
	readonly value?: AppServiceInfo[];
}
export interface DynatraceEnvironmentProperties {
	readonly accountInfo?: AccountInfo;
	readonly environmentInfo?: EnvironmentInfo;
	readonly singleSignOnProperties?: DynatraceSingleSignOnProperties;
	readonly userId?: string;
}
export interface DynatraceSingleSignOnProperties {
	readonly aadDomains?: string[];
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
export interface EnvironmentInfo {
	readonly environmentId?: string;
	readonly ingestionKey?: string;
	readonly landingURL?: string;
	readonly logsIngestionEndpoint?: string;
}
export interface FilteringTag {
	readonly action?: "Exclude" | "Include";
	readonly name?: string;
	readonly value?: string;
}
export interface IdentityProperties {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type: "SystemAndUserAssigned" | "SystemAssigned" | "UserAssigned";
	readonly userAssignedIdentities?: IdentityPropertiesUserAssignedIdentities;
}
export interface IdentityPropertiesUserAssignedIdentities {
	readonly [key: string]: UserAssignedIdentity;
}
export interface LinkableEnvironmentListResponse {
	readonly nextLink?: string;
	readonly value?: LinkableEnvironmentResponse[];
}
export interface LinkableEnvironmentRequest {
	readonly region?: string;
	readonly tenantId?: string;
	readonly userPrincipal?: string;
}
export interface LinkableEnvironmentResponse {
	readonly environmentId?: string;
	readonly environmentName?: string;
	readonly planData?: PlanData;
}
export interface LogRules {
	readonly filteringTags?: FilteringTag[];
	readonly sendAadLogs?: "Disabled" | "Enabled";
	readonly sendActivityLogs?: "Disabled" | "Enabled";
	readonly sendSubscriptionLogs?: "Disabled" | "Enabled";
}
export interface MetricRules {
	readonly filteringTags?: FilteringTag[];
}
export interface MonitoredResource {
	readonly id?: string;
	readonly reasonForLogsStatus?: string;
	readonly reasonForMetricsStatus?: string;
	readonly sendingLogs?: "Disabled" | "Enabled";
	readonly sendingMetrics?: "Disabled" | "Enabled";
}
export interface MonitoredResourceListResponse {
	readonly nextLink?: string;
	readonly value?: MonitoredResource[];
}
export interface MonitoringTagRulesProperties {
	readonly logRules?: LogRules;
	readonly metricRules?: MetricRules;
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
}
export interface MonitorProperties {
	readonly dynatraceEnvironmentProperties?: DynatraceEnvironmentProperties;
	readonly liftrResourceCategory?: "MonitorLogs" | "Unknown";
	readonly liftrResourcePreference?: number;
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
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export interface UserAssignedIdentity {
	readonly clientId: string;
	readonly principalId: string;
}
export interface UserInfo {
	readonly country?: string;
	readonly emailAddress?: string;
	readonly firstName?: string;
	readonly lastName?: string;
	readonly phoneNumber?: string;
}
export interface VMHostsListResponse {
	readonly nextLink?: string;
	readonly value?: VMInfo[];
}
export interface VMInfo {
	readonly autoUpdateSetting?: "DISABLED" | "ENABLED";
	readonly availabilityState?:
		| "CRASHED"
		| "LOST"
		| "MONITORED"
		| "PRE_MONITORED"
		| "SHUTDOWN"
		| "UNEXPECTED_SHUTDOWN"
		| "UNKNOWN"
		| "UNMONITORED";
	readonly hostGroup?: string;
	readonly hostName?: string;
	readonly logModule?: "DISABLED" | "ENABLED";
	readonly monitoringType?: "CLOUD_INFRASTRUCTURE" | "FULL_STACK";
	readonly resourceId?: string;
	readonly updateStatus?:
		| "INCOMPATIBLE"
		| "OUTDATED"
		| "SCHEDULED"
		| "SUPPRESSED"
		| "UNKNOWN"
		| "UP2DATE"
		| "UPDATE_IN_PROGRESS"
		| "UPDATE_PENDING"
		| "UPDATE_PROBLEM";
	readonly version?: string;
}
export default {
	monitors: monitors,
	"monitors/singleSignOnConfigurations": monitors_singleSignOnConfigurations,
	"monitors/tagRules": monitors_tagRules,
};

import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class monitors extends ArmResource<monitorsComponentInputs> implements monitorsComponentOutputs {
	constructor(entity: ADKEntity, options: monitorsComponentInputs) {
		super(entity, options.name, "Dynatrace.Observability/monitors", "2021-09-01", options);
	}
	public readonly apiVersion: "2021-09-01";
	public readonly id: string;
	public readonly type: "Dynatrace.Observability/monitors";
}
export interface monitorsComponentOutputs {
	readonly apiVersion: "2021-09-01";
	readonly id: string;
	readonly type: "Dynatrace.Observability/monitors";
}
export interface monitorsComponentInputs {
	readonly identity?: IdentityProperties | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties: MonitorProperties;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class monitors_singleSignOnConfigurations
	extends ArmResource<monitors_singleSignOnConfigurationsComponentInputs>
	implements monitors_singleSignOnConfigurationsComponentOutputs
{
	constructor(entity: ADKEntity, options: monitors_singleSignOnConfigurationsComponentInputs) {
		super(entity, options.name, "Dynatrace.Observability/monitors/singleSignOnConfigurations", "2021-09-01", options);
	}
	public readonly apiVersion: "2021-09-01";
	public readonly id: string;
	public readonly type: "Dynatrace.Observability/monitors/singleSignOnConfigurations";
}
export interface monitors_singleSignOnConfigurationsComponentOutputs {
	readonly apiVersion: "2021-09-01";
	readonly id: string;
	readonly type: "Dynatrace.Observability/monitors/singleSignOnConfigurations";
}
export interface monitors_singleSignOnConfigurationsComponentInputs {
	readonly name: string;
	readonly properties: DynatraceSingleSignOnProperties;
	readonly systemData?: SystemData | undefined;
}
export class monitors_tagRules
	extends ArmResource<monitors_tagRulesComponentInputs>
	implements monitors_tagRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: monitors_tagRulesComponentInputs) {
		super(entity, options.name, "Dynatrace.Observability/monitors/tagRules", "2021-09-01", options);
	}
	public readonly apiVersion: "2021-09-01";
	public readonly id: string;
	public readonly type: "Dynatrace.Observability/monitors/tagRules";
}
export interface monitors_tagRulesComponentOutputs {
	readonly apiVersion: "2021-09-01";
	readonly id: string;
	readonly type: "Dynatrace.Observability/monitors/tagRules";
}
export interface monitors_tagRulesComponentInputs {
	readonly name: string;
	readonly properties: MonitoringTagRulesProperties;
	readonly systemData?: SystemData | undefined;
}
export function listAppServices(resource: monitors): AppServiceListResponse {
	if (resource.apiVersion !== "2021-09-01") {
		throw new Error(`listAppServices is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Dynatrace.Observability/monitors") {
		throw new Error(`listAppServices is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listHosts(resource: monitors): VMHostsListResponse {
	if (resource.apiVersion !== "2021-09-01") {
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
	if (resource.apiVersion !== "2021-09-01") {
		throw new Error(`listLinkableEnvironments is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Dynatrace.Observability/monitors") {
		throw new Error(`listLinkableEnvironments is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listMonitoredResources(resource: monitors): MonitoredResourceListResponse {
	if (resource.apiVersion !== "2021-09-01") {
		throw new Error(`listMonitoredResources is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Dynatrace.Observability/monitors") {
		throw new Error(`listMonitoredResources is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AccountInfo {
	readonly accountId?: string | undefined;
	readonly regionId?: string | undefined;
}
export interface AppServiceInfo {
	readonly autoUpdateSetting?: ("DISABLED" | "ENABLED") | undefined;
	readonly availabilityState?:
		| (
				| "CRASHED"
				| "LOST"
				| "MONITORED"
				| "PRE_MONITORED"
				| "SHUTDOWN"
				| "UNEXPECTED_SHUTDOWN"
				| "UNKNOWN"
				| "UNMONITORED"
		  )
		| undefined;
	readonly hostGroup?: string | undefined;
	readonly hostName?: string | undefined;
	readonly logModule?: ("DISABLED" | "ENABLED") | undefined;
	readonly monitoringType?: ("CLOUD_INFRASTRUCTURE" | "FULL_STACK") | undefined;
	readonly resourceId?: string | undefined;
	readonly updateStatus?:
		| (
				| "INCOMPATIBLE"
				| "OUTDATED"
				| "SCHEDULED"
				| "SUPPRESSED"
				| "UNKNOWN"
				| "UP2DATE"
				| "UPDATE_IN_PROGRESS"
				| "UPDATE_PENDING"
				| "UPDATE_PROBLEM"
		  )
		| undefined;
	readonly version?: string | undefined;
}
export interface AppServiceListResponse {
	readonly nextLink?: string | undefined;
	readonly value?: AppServiceInfo[] | undefined;
}
export interface DynatraceEnvironmentProperties {
	readonly accountInfo?: AccountInfo | undefined;
	readonly environmentInfo?: EnvironmentInfo | undefined;
	readonly singleSignOnProperties?: DynatraceSingleSignOnProperties | undefined;
	readonly userId?: string | undefined;
}
export interface DynatraceSingleSignOnProperties {
	readonly aadDomains?: string[] | undefined;
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
export interface EnvironmentInfo {
	readonly environmentId?: string | undefined;
	readonly ingestionKey?: string | undefined;
	readonly landingURL?: string | undefined;
	readonly logsIngestionEndpoint?: string | undefined;
}
export interface FilteringTag {
	readonly action?: ("Exclude" | "Include") | undefined;
	readonly name?: string | undefined;
	readonly value?: string | undefined;
}
export interface IdentityProperties {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type: "SystemAndUserAssigned" | "SystemAssigned" | "UserAssigned";
	readonly userAssignedIdentities?: IdentityPropertiesUserAssignedIdentities | undefined;
}
export interface IdentityPropertiesUserAssignedIdentities {
	readonly "[ key: string ]"?: UserAssignedIdentity | undefined;
}
export interface LinkableEnvironmentListResponse {
	readonly nextLink?: string | undefined;
	readonly value?: LinkableEnvironmentResponse[] | undefined;
}
export interface LinkableEnvironmentRequest {
	readonly region?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly userPrincipal?: string | undefined;
}
export interface LinkableEnvironmentResponse {
	readonly environmentId?: string | undefined;
	readonly environmentName?: string | undefined;
	readonly planData?: PlanData | undefined;
}
export interface LogRules {
	readonly filteringTags?: FilteringTag[] | undefined;
	readonly sendAadLogs?: ("Disabled" | "Enabled") | undefined;
	readonly sendActivityLogs?: ("Disabled" | "Enabled") | undefined;
	readonly sendSubscriptionLogs?: ("Disabled" | "Enabled") | undefined;
}
export interface MetricRules {
	readonly filteringTags?: FilteringTag[] | undefined;
}
export interface MonitoredResource {
	readonly id?: string | undefined;
	readonly reasonForLogsStatus?: string | undefined;
	readonly reasonForMetricsStatus?: string | undefined;
	readonly sendingLogs?: ("Disabled" | "Enabled") | undefined;
	readonly sendingMetrics?: ("Disabled" | "Enabled") | undefined;
}
export interface MonitoredResourceListResponse {
	readonly nextLink?: string | undefined;
	readonly value?: MonitoredResource[] | undefined;
}
export interface MonitoringTagRulesProperties {
	readonly logRules?: LogRules | undefined;
	readonly metricRules?: MetricRules | undefined;
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
}
export interface MonitorProperties {
	readonly dynatraceEnvironmentProperties?: DynatraceEnvironmentProperties | undefined;
	readonly liftrResourceCategory?: ("MonitorLogs" | "Unknown") | undefined;
	readonly liftrResourcePreference?: number | undefined;
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
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface UserAssignedIdentity {
	readonly clientId: string;
	readonly principalId: string;
}
export interface UserInfo {
	readonly country?: string | undefined;
	readonly emailAddress?: string | undefined;
	readonly firstName?: string | undefined;
	readonly lastName?: string | undefined;
	readonly phoneNumber?: string | undefined;
}
export interface VMHostsListResponse {
	readonly nextLink?: string | undefined;
	readonly value?: VMInfo[] | undefined;
}
export interface VMInfo {
	readonly autoUpdateSetting?: ("DISABLED" | "ENABLED") | undefined;
	readonly availabilityState?:
		| (
				| "CRASHED"
				| "LOST"
				| "MONITORED"
				| "PRE_MONITORED"
				| "SHUTDOWN"
				| "UNEXPECTED_SHUTDOWN"
				| "UNKNOWN"
				| "UNMONITORED"
		  )
		| undefined;
	readonly hostGroup?: string | undefined;
	readonly hostName?: string | undefined;
	readonly logModule?: ("DISABLED" | "ENABLED") | undefined;
	readonly monitoringType?: ("CLOUD_INFRASTRUCTURE" | "FULL_STACK") | undefined;
	readonly resourceId?: string | undefined;
	readonly updateStatus?:
		| (
				| "INCOMPATIBLE"
				| "OUTDATED"
				| "SCHEDULED"
				| "SUPPRESSED"
				| "UNKNOWN"
				| "UP2DATE"
				| "UPDATE_IN_PROGRESS"
				| "UPDATE_PENDING"
				| "UPDATE_PROBLEM"
		  )
		| undefined;
	readonly version?: string | undefined;
}
export default {
	monitors: monitors,
	"monitors/singleSignOnConfigurations": monitors_singleSignOnConfigurations,
	"monitors/tagRules": monitors_tagRules,
};

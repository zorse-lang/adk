import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class agreements extends ArmResource<agreementsComponentInputs> implements agreementsComponentOutputs {
	constructor(entity: ADKEntity, options: agreementsComponentInputs) {
		super(entity, options.name, "Microsoft.Datadog/agreements", "2022-06-01", options);
	}
	public readonly apiVersion: "2022-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Datadog/agreements";
}
export interface agreementsComponentOutputs {
	readonly apiVersion: "2022-06-01";
	readonly id: string;
	readonly type: "Microsoft.Datadog/agreements";
}
export interface agreementsComponentInputs {
	readonly name: string;
	readonly properties?: DatadogAgreementProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class monitors extends ArmResource<monitorsComponentInputs> implements monitorsComponentOutputs {
	constructor(entity: ADKEntity, options: monitorsComponentInputs) {
		super(entity, options.name, "Microsoft.Datadog/monitors", "2022-06-01", options);
	}
	public readonly apiVersion: "2022-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Datadog/monitors";
}
export interface monitorsComponentOutputs {
	readonly apiVersion: "2022-06-01";
	readonly id: string;
	readonly type: "Microsoft.Datadog/monitors";
}
export interface monitorsComponentInputs {
	readonly identity?: IdentityProperties | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: MonitorProperties | undefined;
	readonly sku?: ResourceSku | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: DatadogMonitorResourceTags | undefined;
}
export class monitors_singleSignOnConfigurations
	extends ArmResource<monitors_singleSignOnConfigurationsComponentInputs>
	implements monitors_singleSignOnConfigurationsComponentOutputs
{
	constructor(entity: ADKEntity, options: monitors_singleSignOnConfigurationsComponentInputs) {
		super(entity, options.name, "Microsoft.Datadog/monitors/singleSignOnConfigurations", "2022-06-01", options);
	}
	public readonly apiVersion: "2022-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Datadog/monitors/singleSignOnConfigurations";
}
export interface monitors_singleSignOnConfigurationsComponentOutputs {
	readonly apiVersion: "2022-06-01";
	readonly id: string;
	readonly type: "Microsoft.Datadog/monitors/singleSignOnConfigurations";
}
export interface monitors_singleSignOnConfigurationsComponentInputs {
	readonly name: string;
	readonly properties?: DatadogSingleSignOnProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class monitors_tagRules
	extends ArmResource<monitors_tagRulesComponentInputs>
	implements monitors_tagRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: monitors_tagRulesComponentInputs) {
		super(entity, options.name, "Microsoft.Datadog/monitors/tagRules", "2022-06-01", options);
	}
	public readonly apiVersion: "2022-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Datadog/monitors/tagRules";
}
export interface monitors_tagRulesComponentOutputs {
	readonly apiVersion: "2022-06-01";
	readonly id: string;
	readonly type: "Microsoft.Datadog/monitors/tagRules";
}
export interface monitors_tagRulesComponentInputs {
	readonly name: string;
	readonly properties?: MonitoringTagRulesProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export function listApiKeys(resource: monitors): DatadogApiKeyListResponse {
	if (resource.apiVersion !== "2022-06-01") {
		throw new Error(`listApiKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Datadog/monitors") {
		throw new Error(`listApiKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listHosts(resource: monitors): DatadogHostListResponse {
	if (resource.apiVersion !== "2022-06-01") {
		throw new Error(`listHosts is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Datadog/monitors") {
		throw new Error(`listHosts is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listLinkedResources(resource: monitors): LinkedResourceListResponse {
	if (resource.apiVersion !== "2022-06-01") {
		throw new Error(`listLinkedResources is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Datadog/monitors") {
		throw new Error(`listLinkedResources is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listMonitoredResources(resource: monitors): MonitoredResourceListResponse {
	if (resource.apiVersion !== "2022-06-01") {
		throw new Error(`listMonitoredResources is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Datadog/monitors") {
		throw new Error(`listMonitoredResources is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface DatadogAgreementProperties {
	readonly accepted?: boolean | undefined;
	readonly licenseTextLink?: string | undefined;
	readonly plan?: string | undefined;
	readonly privacyPolicyLink?: string | undefined;
	readonly product?: string | undefined;
	readonly publisher?: string | undefined;
	readonly retrieveDatetime?: string | undefined;
	readonly signature?: string | undefined;
}
export interface DatadogApiKey {
	readonly created?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly key: string;
	readonly name?: string | undefined;
}
export interface DatadogApiKeyListResponse {
	readonly nextLink?: string | undefined;
	readonly value?: DatadogApiKey[] | undefined;
}
export interface DatadogHost {
	readonly aliases?: string[] | undefined;
	readonly apps?: string[] | undefined;
	readonly meta?: DatadogHostMetadata | undefined;
	readonly name?: string | undefined;
}
export interface DatadogHostListResponse {
	readonly nextLink?: string | undefined;
	readonly value?: DatadogHost[] | undefined;
}
export interface DatadogHostMetadata {
	readonly agentVersion?: string | undefined;
	readonly installMethod?: DatadogInstallMethod | undefined;
	readonly logsAgent?: DatadogLogsAgent | undefined;
}
export interface DatadogInstallMethod {
	readonly installerVersion?: string | undefined;
	readonly tool?: string | undefined;
	readonly toolVersion?: string | undefined;
}
export interface DatadogLogsAgent {
	readonly transport?: string | undefined;
}
export interface DatadogMonitorResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface DatadogOrganizationProperties {
	readonly apiKey?: string | undefined;
	readonly applicationKey?: string | undefined;
	readonly enterpriseAppId?: string | undefined;
	readonly id?: string | undefined;
	readonly linkingAuthCode?: string | undefined;
	readonly linkingClientId?: string | undefined;
	readonly name?: string | undefined;
	readonly redirectUri?: string | undefined;
}
export interface DatadogSingleSignOnProperties {
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
export interface LinkedResource {
	readonly id?: string | undefined;
}
export interface LinkedResourceListResponse {
	readonly nextLink?: string | undefined;
	readonly value?: LinkedResource[] | undefined;
}
export interface LogRules {
	readonly filteringTags?: FilteringTag[] | undefined;
	readonly sendAadLogs?: boolean | undefined;
	readonly sendResourceLogs?: boolean | undefined;
	readonly sendSubscriptionLogs?: boolean | undefined;
}
export interface MetricRules {
	readonly filteringTags?: FilteringTag[] | undefined;
}
export interface MonitoredResource {
	readonly id?: string | undefined;
	readonly reasonForLogsStatus?: string | undefined;
	readonly reasonForMetricsStatus?: string | undefined;
	readonly sendingLogs?: boolean | undefined;
	readonly sendingMetrics?: boolean | undefined;
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
	readonly datadogOrganizationProperties?: DatadogOrganizationProperties | undefined;
	readonly liftrResourceCategory?: ("MonitorLogs" | "Unknown") | undefined;
	readonly liftrResourcePreference?: number | undefined;
	readonly marketplaceSubscriptionStatus?: ("Active" | "Provisioning" | "Suspended" | "Unsubscribed") | undefined;
	readonly monitoringStatus?: ("Disabled" | "Enabled") | undefined;
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
export interface ResourceSku {
	readonly name: string;
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
	readonly name?: string | undefined;
	readonly phoneNumber?: string | undefined;
}
export default {
	agreements: agreements,
	monitors: monitors,
	"monitors/singleSignOnConfigurations": monitors_singleSignOnConfigurations,
	"monitors/tagRules": monitors_tagRules,
};

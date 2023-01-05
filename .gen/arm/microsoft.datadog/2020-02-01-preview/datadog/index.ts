import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class agreements extends ArmResource<agreementsComponentInputs> implements agreementsComponentOutputs {
	constructor(entity: ADKEntity, options: agreementsComponentInputs) {
		super(entity, options.name, "Microsoft.Datadog/agreements", "2020-02-01-preview", options);
	}
	public readonly apiVersion: "2020-02-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Datadog/agreements";
}
export interface agreementsComponentOutputs {
	readonly apiVersion: "2020-02-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Datadog/agreements";
}
export interface agreementsComponentInputs {
	readonly name: string;
	readonly properties?: DatadogAgreementProperties;
}
export class monitors extends ArmResource<monitorsComponentInputs> implements monitorsComponentOutputs {
	constructor(entity: ADKEntity, options: monitorsComponentInputs) {
		super(entity, options.name, "Microsoft.Datadog/monitors", "2020-02-01-preview", options);
	}
	public readonly apiVersion: "2020-02-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Datadog/monitors";
}
export interface monitorsComponentOutputs {
	readonly apiVersion: "2020-02-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Datadog/monitors";
}
export interface monitorsComponentInputs {
	readonly identity?: IdentityProperties;
	readonly location: string;
	readonly name: string;
	readonly properties?: MonitorProperties;
	readonly sku?: ResourceSku;
	readonly tags?: DatadogMonitorResourceTags;
}
export class monitors_singleSignOnConfigurations
	extends ArmResource<monitors_singleSignOnConfigurationsComponentInputs>
	implements monitors_singleSignOnConfigurationsComponentOutputs
{
	constructor(entity: ADKEntity, options: monitors_singleSignOnConfigurationsComponentInputs) {
		super(entity, options.name, "Microsoft.Datadog/monitors/singleSignOnConfigurations", "2020-02-01-preview", options);
	}
	public readonly apiVersion: "2020-02-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Datadog/monitors/singleSignOnConfigurations";
}
export interface monitors_singleSignOnConfigurationsComponentOutputs {
	readonly apiVersion: "2020-02-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Datadog/monitors/singleSignOnConfigurations";
}
export interface monitors_singleSignOnConfigurationsComponentInputs {
	readonly name: string;
	readonly properties?: DatadogSingleSignOnProperties;
}
export class monitors_tagRules
	extends ArmResource<monitors_tagRulesComponentInputs>
	implements monitors_tagRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: monitors_tagRulesComponentInputs) {
		super(entity, options.name, "Microsoft.Datadog/monitors/tagRules", "2020-02-01-preview", options);
	}
	public readonly apiVersion: "2020-02-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Datadog/monitors/tagRules";
}
export interface monitors_tagRulesComponentOutputs {
	readonly apiVersion: "2020-02-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Datadog/monitors/tagRules";
}
export interface monitors_tagRulesComponentInputs {
	readonly name: string;
	readonly properties?: MonitoringTagRulesProperties;
}
export function listApiKeys(resource: monitors): DatadogApiKeyListResponse {
	if (resource.apiVersion !== "2020-02-01-preview") {
		throw new Error(`listApiKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Datadog/monitors") {
		throw new Error(`listApiKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listHosts(resource: monitors): DatadogHostListResponse {
	if (resource.apiVersion !== "2020-02-01-preview") {
		throw new Error(`listHosts is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Datadog/monitors") {
		throw new Error(`listHosts is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listLinkedResources(resource: monitors): LinkedResourceListResponse {
	if (resource.apiVersion !== "2020-02-01-preview") {
		throw new Error(`listLinkedResources is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Datadog/monitors") {
		throw new Error(`listLinkedResources is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listMonitoredResources(resource: monitors): MonitoredResourceListResponse {
	if (resource.apiVersion !== "2020-02-01-preview") {
		throw new Error(`listMonitoredResources is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Datadog/monitors") {
		throw new Error(`listMonitoredResources is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface DatadogAgreementProperties {
	readonly accepted?: boolean;
	readonly licenseTextLink?: string;
	readonly plan?: string;
	readonly privacyPolicyLink?: string;
	readonly product?: string;
	readonly publisher?: string;
	readonly retrieveDatetime?: string;
	readonly signature?: string;
}
export interface DatadogApiKey {
	readonly created?: string;
	readonly createdBy?: string;
	readonly key: string;
	readonly name?: string;
}
export interface DatadogApiKeyListResponse {
	readonly nextLink?: string;
	readonly value?: DatadogApiKey[];
}
export interface DatadogHost {
	readonly aliases?: string[];
	readonly apps?: string[];
	readonly meta?: DatadogHostMetadata;
	readonly name?: string;
}
export interface DatadogHostListResponse {
	readonly nextLink?: string;
	readonly value?: DatadogHost[];
}
export interface DatadogHostMetadata {
	readonly agentVersion?: string;
	readonly installMethod?: DatadogInstallMethod;
	readonly logsAgent?: DatadogLogsAgent;
}
export interface DatadogInstallMethod {
	readonly installerVersion?: string;
	readonly tool?: string;
	readonly toolVersion?: string;
}
export interface DatadogLogsAgent {
	readonly transport?: string;
}
export interface DatadogMonitorResourceTags {
	readonly [key: string]: string;
}
export interface DatadogOrganizationProperties {
	readonly apiKey?: string;
	readonly applicationKey?: string;
	readonly enterpriseAppId?: string;
	readonly id?: string;
	readonly linkingAuthCode?: string;
	readonly linkingClientId?: string;
	readonly name?: string;
	readonly redirectUri?: string;
}
export interface DatadogSingleSignOnProperties {
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
export interface LinkedResource {
	readonly id?: string;
}
export interface LinkedResourceListResponse {
	readonly nextLink?: string;
	readonly value?: LinkedResource[];
}
export interface LogRules {
	readonly filteringTags?: FilteringTag[];
	readonly sendAadLogs?: boolean;
	readonly sendResourceLogs?: boolean;
	readonly sendSubscriptionLogs?: boolean;
}
export interface MetricRules {
	readonly filteringTags?: FilteringTag[];
}
export interface MonitoredResource {
	readonly id?: string;
	readonly reasonForLogsStatus?: string;
	readonly reasonForMetricsStatus?: string;
	readonly sendingLogs?: boolean;
	readonly sendingMetrics?: boolean;
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
	readonly datadogOrganizationProperties?: DatadogOrganizationProperties;
	readonly liftrResourceCategory?: "MonitorLogs" | "Unknown";
	readonly liftrResourcePreference?: number;
	readonly marketplaceSubscriptionStatus?: "Active" | "Provisioning" | "Suspended" | "Unsubscribed";
	readonly monitoringStatus?: "Disabled" | "Enabled";
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
export interface ResourceSku {
	readonly name: string;
}
export interface UserInfo {
	readonly emailAddress?: string;
	readonly name?: string;
	readonly phoneNumber?: string;
}
export default {
	agreements: agreements,
	monitors: monitors,
	"monitors/singleSignOnConfigurations": monitors_singleSignOnConfigurations,
	"monitors/tagRules": monitors_tagRules,
};

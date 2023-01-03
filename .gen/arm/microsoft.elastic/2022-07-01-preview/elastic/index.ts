import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class monitors extends ArmResource<monitorsComponentInputs> implements monitorsComponentOutputs {
	constructor(entity: ADKEntity, options: monitorsComponentInputs) {
		super(entity, options.name, "Microsoft.Elastic/monitors", "2022-07-01-preview", options);
	}
	public readonly apiVersion: "2022-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Elastic/monitors";
}
export interface monitorsComponentOutputs {
	readonly apiVersion: "2022-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Elastic/monitors";
}
export interface monitorsComponentInputs {
	readonly identity?: IdentityProperties | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: MonitorProperties | undefined;
	readonly sku?: ResourceSku | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: ElasticMonitorResourceTags | undefined;
}
export class monitors_tagRules
	extends ArmResource<monitors_tagRulesComponentInputs>
	implements monitors_tagRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: monitors_tagRulesComponentInputs) {
		super(entity, options.name, "Microsoft.Elastic/monitors/tagRules", "2022-07-01-preview", options);
	}
	public readonly apiVersion: "2022-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Elastic/monitors/tagRules";
}
export interface monitors_tagRulesComponentOutputs {
	readonly apiVersion: "2022-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Elastic/monitors/tagRules";
}
export interface monitors_tagRulesComponentInputs {
	readonly name: string;
	readonly properties?: MonitoringTagRulesProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export function listAllTrafficFilters(resource: monitors): ElasticTrafficFilterResponse {
	if (resource.apiVersion !== "2022-07-01-preview") {
		throw new Error(`listAllTrafficFilters is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Elastic/monitors") {
		throw new Error(`listAllTrafficFilters is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listAssociatedTrafficFilters(resource: monitors): ElasticTrafficFilterResponse {
	if (resource.apiVersion !== "2022-07-01-preview") {
		throw new Error(`listAssociatedTrafficFilters is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Elastic/monitors") {
		throw new Error(`listAssociatedTrafficFilters is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listDeploymentInfo(resource: monitors): DeploymentInfoResponse {
	if (resource.apiVersion !== "2022-07-01-preview") {
		throw new Error(`listDeploymentInfo is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Elastic/monitors") {
		throw new Error(`listDeploymentInfo is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listMonitoredResources(resource: monitors): MonitoredResourceListResponse {
	if (resource.apiVersion !== "2022-07-01-preview") {
		throw new Error(`listMonitoredResources is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Elastic/monitors") {
		throw new Error(`listMonitoredResources is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listUpgradableVersions(resource: monitors): UpgradableVersionsList {
	if (resource.apiVersion !== "2022-07-01-preview") {
		throw new Error(`listUpgradableVersions is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Elastic/monitors") {
		throw new Error(`listUpgradableVersions is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listVMHost(resource: monitors): VMHostListResponse {
	if (resource.apiVersion !== "2022-07-01-preview") {
		throw new Error(`listVMHost is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Elastic/monitors") {
		throw new Error(`listVMHost is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface CompanyInfo {
	readonly business?: string | undefined;
	readonly country?: string | undefined;
	readonly domain?: string | undefined;
	readonly employeesNumber?: string | undefined;
	readonly state?: string | undefined;
}
export interface DeploymentInfoResponse {
	readonly diskCapacity?: string | undefined;
	readonly memoryCapacity?: string | undefined;
	readonly status?: ("Healthy" | "Unhealthy") | undefined;
	readonly version?: string | undefined;
}
export interface ElasticCloudDeployment {
	readonly azureSubscriptionId?: string | undefined;
	readonly deploymentId?: string | undefined;
	readonly elasticsearchRegion?: string | undefined;
	readonly elasticsearchServiceUrl?: string | undefined;
	readonly kibanaServiceUrl?: string | undefined;
	readonly kibanaSsoUrl?: string | undefined;
	readonly name?: string | undefined;
}
export interface ElasticCloudUser {
	readonly elasticCloudSsoDefaultUrl?: string | undefined;
	readonly emailAddress?: string | undefined;
	readonly id?: string | undefined;
}
export interface ElasticMonitorResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ElasticProperties {
	readonly elasticCloudDeployment?: ElasticCloudDeployment | undefined;
	readonly elasticCloudUser?: ElasticCloudUser | undefined;
}
export interface ElasticTrafficFilter {
	readonly description?: string | undefined;
	readonly id?: string | undefined;
	readonly includeByDefault?: boolean | undefined;
	readonly name?: string | undefined;
	readonly region?: string | undefined;
	readonly rules?: ElasticTrafficFilterRule[] | undefined;
	readonly type?: ("azure_private_endpoint" | "ip") | undefined;
}
export interface ElasticTrafficFilterResponse {
	readonly rulesets?: ElasticTrafficFilter[] | undefined;
}
export interface ElasticTrafficFilterRule {
	readonly azureEndpointGuid?: string | undefined;
	readonly azureEndpointName?: string | undefined;
	readonly description?: string | undefined;
	readonly id?: string | undefined;
	readonly source?: string | undefined;
}
export interface FilteringTag {
	readonly action?: ("Exclude" | "Include") | undefined;
	readonly name?: string | undefined;
	readonly value?: string | undefined;
}
export interface IdentityProperties {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: "SystemAssigned" | undefined;
}
export interface LogRules {
	readonly filteringTags?: FilteringTag[] | undefined;
	readonly sendAadLogs?: boolean | undefined;
	readonly sendActivityLogs?: boolean | undefined;
	readonly sendSubscriptionLogs?: boolean | undefined;
}
export interface MonitoredResource {
	readonly id?: string | undefined;
	readonly reasonForLogsStatus?: string | undefined;
	readonly sendingLogs?: ("False" | "True") | undefined;
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
}
export interface MonitorProperties {
	readonly elasticProperties?: ElasticProperties | undefined;
	readonly liftrResourceCategory?: ("MonitorLogs" | "Unknown") | undefined;
	readonly liftrResourcePreference?: number | undefined;
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
	readonly version?: string | undefined;
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
export interface UpgradableVersionsList {
	readonly currentVersion?: string | undefined;
	readonly upgradableVersions?: string[] | undefined;
}
export interface UserInfo {
	readonly companyInfo?: CompanyInfo | undefined;
	readonly companyName?: string | undefined;
	readonly emailAddress?: string | undefined;
	readonly firstName?: string | undefined;
	readonly lastName?: string | undefined;
}
export interface VMHostListResponse {
	readonly nextLink?: string | undefined;
	readonly value?: VMResources[] | undefined;
}
export interface VMResources {
	readonly vmResourceId?: string | undefined;
}
export default {
	monitors: monitors,
	"monitors/tagRules": monitors_tagRules,
};

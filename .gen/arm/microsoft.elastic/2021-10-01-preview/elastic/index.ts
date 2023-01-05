import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class monitors extends ArmResource<monitorsComponentInputs> implements monitorsComponentOutputs {
	constructor(entity: ADKEntity, options: monitorsComponentInputs) {
		super(entity, options.name, "Microsoft.Elastic/monitors", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Elastic/monitors";
}
export interface monitorsComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Elastic/monitors";
}
export interface monitorsComponentInputs {
	readonly identity?: IdentityProperties;
	readonly location: string;
	readonly name: string;
	readonly properties?: MonitorProperties;
	readonly sku?: ResourceSku;
	readonly systemData?: SystemData;
	readonly tags?: ElasticMonitorResourceTags;
}
export class monitors_tagRules
	extends ArmResource<monitors_tagRulesComponentInputs>
	implements monitors_tagRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: monitors_tagRulesComponentInputs) {
		super(entity, options.name, "Microsoft.Elastic/monitors/tagRules", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Elastic/monitors/tagRules";
}
export interface monitors_tagRulesComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Elastic/monitors/tagRules";
}
export interface monitors_tagRulesComponentInputs {
	readonly name: string;
	readonly properties?: MonitoringTagRulesProperties;
	readonly systemData?: SystemData;
}
export function listDeploymentInfo(resource: monitors): DeploymentInfoResponse {
	if (resource.apiVersion !== "2021-10-01-preview") {
		throw new Error(`listDeploymentInfo is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Elastic/monitors") {
		throw new Error(`listDeploymentInfo is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listMonitoredResources(resource: monitors): MonitoredResourceListResponse {
	if (resource.apiVersion !== "2021-10-01-preview") {
		throw new Error(`listMonitoredResources is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Elastic/monitors") {
		throw new Error(`listMonitoredResources is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listUpgradableVersions(resource: monitors): UpgradableVersionsList {
	if (resource.apiVersion !== "2021-10-01-preview") {
		throw new Error(`listUpgradableVersions is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Elastic/monitors") {
		throw new Error(`listUpgradableVersions is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listVMHost(resource: monitors): VMHostListResponse {
	if (resource.apiVersion !== "2021-10-01-preview") {
		throw new Error(`listVMHost is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Elastic/monitors") {
		throw new Error(`listVMHost is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface CompanyInfo {
	readonly business?: string;
	readonly country?: string;
	readonly domain?: string;
	readonly employeesNumber?: string;
	readonly state?: string;
}
export interface DeploymentInfoResponse {
	readonly diskCapacity?: string;
	readonly memoryCapacity?: string;
	readonly status?: "Healthy" | "Unhealthy";
	readonly version?: string;
}
export interface ElasticCloudDeployment {
	readonly azureSubscriptionId?: string;
	readonly deploymentId?: string;
	readonly elasticsearchRegion?: string;
	readonly elasticsearchServiceUrl?: string;
	readonly kibanaServiceUrl?: string;
	readonly kibanaSsoUrl?: string;
	readonly name?: string;
}
export interface ElasticCloudUser {
	readonly elasticCloudSsoDefaultUrl?: string;
	readonly emailAddress?: string;
	readonly id?: string;
}
export interface ElasticMonitorResourceTags {
	readonly [key: string]: string;
}
export interface ElasticProperties {
	readonly elasticCloudDeployment?: ElasticCloudDeployment;
	readonly elasticCloudUser?: ElasticCloudUser;
}
export interface FilteringTag {
	readonly action?: "Exclude" | "Include";
	readonly name?: string;
	readonly value?: string;
}
export interface IdentityProperties {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "SystemAssigned";
}
export interface LogRules {
	readonly filteringTags?: FilteringTag[];
	readonly sendAadLogs?: boolean;
	readonly sendActivityLogs?: boolean;
	readonly sendSubscriptionLogs?: boolean;
}
export interface MonitoredResource {
	readonly id?: string;
	readonly reasonForLogsStatus?: string;
	readonly sendingLogs?: "False" | "True";
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
}
export interface MonitorProperties {
	readonly elasticProperties?: ElasticProperties;
	readonly liftrResourceCategory?: "MonitorLogs" | "Unknown";
	readonly liftrResourcePreference?: number;
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
	readonly version?: string;
}
export interface ResourceSku {
	readonly name: string;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface UpgradableVersionsList {
	readonly currentVersion?: string;
	readonly upgradableVersions?: string[];
}
export interface UserInfo {
	readonly companyInfo?: CompanyInfo;
	readonly companyName?: string;
	readonly emailAddress?: string;
	readonly firstName?: string;
	readonly lastName?: string;
}
export interface VMHostListResponse {
	readonly nextLink?: string;
	readonly value?: VMResources[];
}
export interface VMResources {
	readonly vmResourceId?: string;
}
export default {
	monitors: monitors,
	"monitors/tagRules": monitors_tagRules,
};

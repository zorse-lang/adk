import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class deviceSecurityGroups
	extends ArmResource<deviceSecurityGroupsComponentInputs>
	implements deviceSecurityGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: deviceSecurityGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.Security/deviceSecurityGroups", "2019-08-01", options);
	}
	public readonly apiVersion: "2019-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Security/deviceSecurityGroups";
}
export interface deviceSecurityGroupsComponentOutputs {
	readonly apiVersion: "2019-08-01";
	readonly id: string;
	readonly type: "Microsoft.Security/deviceSecurityGroups";
}
export interface deviceSecurityGroupsComponentInputs {
	readonly name: string;
	readonly properties?: DeviceSecurityGroupProperties;
}
export class iotSecuritySolutions
	extends ArmResource<iotSecuritySolutionsComponentInputs>
	implements iotSecuritySolutionsComponentOutputs
{
	constructor(entity: ADKEntity, options: iotSecuritySolutionsComponentInputs) {
		super(entity, options.name, "Microsoft.Security/iotSecuritySolutions", "2019-08-01", options);
	}
	public readonly apiVersion: "2019-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Security/iotSecuritySolutions";
}
export interface iotSecuritySolutionsComponentOutputs {
	readonly apiVersion: "2019-08-01";
	readonly id: string;
	readonly type: "Microsoft.Security/iotSecuritySolutions";
}
export interface iotSecuritySolutionsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: IoTSecuritySolutionProperties;
	readonly systemData?: SystemData;
	readonly tags?: TagsResourceTags;
}
export class iotSecuritySolutions_analyticsModels
	extends ArmResource<iotSecuritySolutions_analyticsModelsComponentInputs>
	implements iotSecuritySolutions_analyticsModelsComponentOutputs
{
	constructor(entity: ADKEntity, options: iotSecuritySolutions_analyticsModelsComponentInputs) {
		super(entity, options.name, "Microsoft.Security/iotSecuritySolutions/analyticsModels", "2019-08-01", options);
	}
	public readonly apiVersion: "2019-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Security/iotSecuritySolutions/analyticsModels";
}
export interface iotSecuritySolutions_analyticsModelsComponentOutputs {
	readonly apiVersion: "2019-08-01";
	readonly id: string;
	readonly type: "Microsoft.Security/iotSecuritySolutions/analyticsModels";
}
export interface iotSecuritySolutions_analyticsModelsComponentInputs {
	readonly name: string;
	readonly properties?: IoTSecuritySolutionAnalyticsModelProperties;
}
export class iotSecuritySolutions_analyticsModels_aggregatedAlerts
	extends ArmResource<iotSecuritySolutions_analyticsModels_aggregatedAlertsComponentInputs>
	implements iotSecuritySolutions_analyticsModels_aggregatedAlertsComponentOutputs
{
	constructor(entity: ADKEntity, options: iotSecuritySolutions_analyticsModels_aggregatedAlertsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Security/iotSecuritySolutions/analyticsModels/aggregatedAlerts",
			"2019-08-01",
			options,
		);
	}
	public readonly apiVersion: "2019-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Security/iotSecuritySolutions/analyticsModels/aggregatedAlerts";
}
export interface iotSecuritySolutions_analyticsModels_aggregatedAlertsComponentOutputs {
	readonly apiVersion: "2019-08-01";
	readonly id: string;
	readonly type: "Microsoft.Security/iotSecuritySolutions/analyticsModels/aggregatedAlerts";
}
export interface iotSecuritySolutions_analyticsModels_aggregatedAlertsComponentInputs {
	readonly name: string;
	readonly properties?: IoTSecurityAggregatedAlertProperties;
	readonly tags?: TagsResourceTags;
}
export class iotSecuritySolutions_analyticsModels_aggregatedRecommendations
	extends ArmResource<iotSecuritySolutions_analyticsModels_aggregatedRecommendationsComponentInputs>
	implements iotSecuritySolutions_analyticsModels_aggregatedRecommendationsComponentOutputs
{
	constructor(
		entity: ADKEntity,
		options: iotSecuritySolutions_analyticsModels_aggregatedRecommendationsComponentInputs,
	) {
		super(
			entity,
			options.name,
			"Microsoft.Security/iotSecuritySolutions/analyticsModels/aggregatedRecommendations",
			"2019-08-01",
			options,
		);
	}
	public readonly apiVersion: "2019-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Security/iotSecuritySolutions/analyticsModels/aggregatedRecommendations";
}
export interface iotSecuritySolutions_analyticsModels_aggregatedRecommendationsComponentOutputs {
	readonly apiVersion: "2019-08-01";
	readonly id: string;
	readonly type: "Microsoft.Security/iotSecuritySolutions/analyticsModels/aggregatedRecommendations";
}
export interface iotSecuritySolutions_analyticsModels_aggregatedRecommendationsComponentInputs {
	readonly name: string;
	readonly properties?: IoTSecurityAggregatedRecommendationProperties;
	readonly tags?: TagsResourceTags;
}
export class iotSecuritySolutions_iotAlerts
	extends ArmResource<iotSecuritySolutions_iotAlertsComponentInputs>
	implements iotSecuritySolutions_iotAlertsComponentOutputs
{
	constructor(entity: ADKEntity, options: iotSecuritySolutions_iotAlertsComponentInputs) {
		super(entity, options.name, "Microsoft.Security/iotSecuritySolutions/iotAlerts", "2019-08-01", options);
	}
	public readonly apiVersion: "2019-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Security/iotSecuritySolutions/iotAlerts";
}
export interface iotSecuritySolutions_iotAlertsComponentOutputs {
	readonly apiVersion: "2019-08-01";
	readonly id: string;
	readonly type: "Microsoft.Security/iotSecuritySolutions/iotAlerts";
}
export interface iotSecuritySolutions_iotAlertsComponentInputs {
	readonly name: string;
	readonly properties?: IotAlertProperties;
}
export class iotSecuritySolutions_iotAlertTypes
	extends ArmResource<iotSecuritySolutions_iotAlertTypesComponentInputs>
	implements iotSecuritySolutions_iotAlertTypesComponentOutputs
{
	constructor(entity: ADKEntity, options: iotSecuritySolutions_iotAlertTypesComponentInputs) {
		super(entity, options.name, "Microsoft.Security/iotSecuritySolutions/iotAlertTypes", "2019-08-01", options);
	}
	public readonly apiVersion: "2019-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Security/iotSecuritySolutions/iotAlertTypes";
}
export interface iotSecuritySolutions_iotAlertTypesComponentOutputs {
	readonly apiVersion: "2019-08-01";
	readonly id: string;
	readonly type: "Microsoft.Security/iotSecuritySolutions/iotAlertTypes";
}
export interface iotSecuritySolutions_iotAlertTypesComponentInputs {
	readonly name: string;
	readonly properties?: IotAlertTypeProperties;
}
export class iotSecuritySolutions_iotRecommendations
	extends ArmResource<iotSecuritySolutions_iotRecommendationsComponentInputs>
	implements iotSecuritySolutions_iotRecommendationsComponentOutputs
{
	constructor(entity: ADKEntity, options: iotSecuritySolutions_iotRecommendationsComponentInputs) {
		super(entity, options.name, "Microsoft.Security/iotSecuritySolutions/iotRecommendations", "2019-08-01", options);
	}
	public readonly apiVersion: "2019-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Security/iotSecuritySolutions/iotRecommendations";
}
export interface iotSecuritySolutions_iotRecommendationsComponentOutputs {
	readonly apiVersion: "2019-08-01";
	readonly id: string;
	readonly type: "Microsoft.Security/iotSecuritySolutions/iotRecommendations";
}
export interface iotSecuritySolutions_iotRecommendationsComponentInputs {
	readonly name: string;
	readonly properties?: IotRecommendationProperties;
}
export class iotSecuritySolutions_iotRecommendationTypes
	extends ArmResource<iotSecuritySolutions_iotRecommendationTypesComponentInputs>
	implements iotSecuritySolutions_iotRecommendationTypesComponentOutputs
{
	constructor(entity: ADKEntity, options: iotSecuritySolutions_iotRecommendationTypesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Security/iotSecuritySolutions/iotRecommendationTypes",
			"2019-08-01",
			options,
		);
	}
	public readonly apiVersion: "2019-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Security/iotSecuritySolutions/iotRecommendationTypes";
}
export interface iotSecuritySolutions_iotRecommendationTypesComponentOutputs {
	readonly apiVersion: "2019-08-01";
	readonly id: string;
	readonly type: "Microsoft.Security/iotSecuritySolutions/iotRecommendationTypes";
}
export interface iotSecuritySolutions_iotRecommendationTypesComponentInputs {
	readonly name: string;
	readonly properties?: IotRecommendationTypeProperties;
}
export interface AdditionalWorkspacesProperties {
	readonly dataTypes?: "Alerts" | "RawEvents"[];
	readonly type?: "Sentinel";
	readonly workspace?: string;
}
export interface AllowlistCustomAlertRule {
	readonly allowlistValues: string[];
	readonly description?: string;
	readonly displayName?: string;
	readonly isEnabled: boolean;
	readonly valueType?: "IpCidr" | "String";
}
export interface DenylistCustomAlertRule {
	readonly denylistValues: string[];
	readonly description?: string;
	readonly displayName?: string;
	readonly isEnabled: boolean;
	readonly ruleType: string;
	readonly valueType?: "IpCidr" | "String";
}
export interface DeviceSecurityGroupProperties {
	readonly allowlistRules?: AllowlistCustomAlertRule[];
	readonly denylistRules?: DenylistCustomAlertRule[];
	readonly thresholdRules?: ThresholdCustomAlertRule[];
	readonly timeWindowRules?: TimeWindowCustomAlertRule[];
}
export interface IotAlertProperties {
	readonly alertType?: string;
	readonly compromisedEntity?: string;
	readonly endTimeUtc?: string;
	readonly entities?: any[];
	readonly extendedProperties?: any;
	readonly startTimeUtc?: string;
	readonly systemAlertId?: string;
}
export interface IotAlertTypeProperties {
	readonly alertDisplayName?: string;
	readonly description?: string;
	readonly intent?:
		| "Collection"
		| "CommandAndControl"
		| "CredentialAccess"
		| "DefenseEvasion"
		| "Discovery"
		| "Execution"
		| "Exfiltration"
		| "Exploitation"
		| "Impact"
		| "InitialAccess"
		| "LateralMovement"
		| "Persistence"
		| "PreAttack"
		| "PrivilegeEscalation"
		| "Probing"
		| "Unknown";
	readonly productComponentName?: string;
	readonly productName?: string;
	readonly providerName?: string;
	readonly remediationSteps?: string[];
	readonly severity?: "High" | "Informational" | "Low" | "Medium";
	readonly vendorName?: string;
}
export interface IotRecommendationProperties {
	readonly deviceId?: string;
	readonly discoveredTimeUtc?: string;
	readonly recommendationAdditionalData?: any;
	readonly recommendationType?: string;
}
export interface IotRecommendationTypeProperties {
	readonly control?: string;
	readonly dataSource?: string;
	readonly description?: string;
	readonly productComponentName?: string;
	readonly productName?: string;
	readonly recommendationDisplayName?: string;
	readonly remediationSteps?: string[];
	readonly severity?: "Healthy" | "High" | "Low" | "Medium" | "NotApplicable" | "OffByPolicy" | "Unknown";
	readonly vendorName?: string;
}
export interface IoTSecurityAggregatedAlertProperties {
	readonly actionTaken?: string;
	readonly aggregatedDateUtc?: string;
	readonly alertDisplayName?: string;
	readonly alertType?: string;
	readonly count?: number;
	readonly description?: string;
	readonly effectedResourceType?: string;
	readonly logAnalyticsQuery?: string;
	readonly remediationSteps?: string;
	readonly reportedSeverity?: "High" | "Informational" | "Low" | "Medium";
	readonly systemSource?: string;
	readonly topDevicesList?: IoTSecurityAggregatedAlertPropertiesTopDevicesListItem[];
	readonly vendorName?: string;
}
export interface IoTSecurityAggregatedAlertPropertiesTopDevicesListItem {
	readonly alertsCount?: number;
	readonly deviceId?: string;
	readonly lastOccurrence?: string;
}
export interface IoTSecurityAggregatedRecommendationProperties {
	readonly description?: string;
	readonly detectedBy?: string;
	readonly healthyDevices?: number;
	readonly logAnalyticsQuery?: string;
	readonly recommendationDisplayName?: string;
	readonly recommendationName?: string;
	readonly recommendationTypeId?: string;
	readonly remediationSteps?: string;
	readonly reportedSeverity?: "High" | "Informational" | "Low" | "Medium";
	readonly unhealthyDeviceCount?: number;
}
export interface IoTSecurityAlertedDevice {
	readonly alertsCount?: number;
	readonly deviceId?: string;
}
export interface IoTSecurityDeviceAlert {
	readonly alertDisplayName?: string;
	readonly alertsCount?: number;
	readonly reportedSeverity?: "High" | "Informational" | "Low" | "Medium";
}
export interface IoTSecurityDeviceRecommendation {
	readonly devicesCount?: number;
	readonly recommendationDisplayName?: string;
	readonly reportedSeverity?: "High" | "Informational" | "Low" | "Medium";
}
export interface IoTSecuritySolutionAnalyticsModelProperties {
	readonly devicesMetrics?: IoTSecuritySolutionAnalyticsModelPropertiesDevicesMetricsItem[];
	readonly metrics?: IoTSeverityMetrics;
	readonly mostPrevalentDeviceAlerts?: IoTSecurityDeviceAlert[];
	readonly mostPrevalentDeviceRecommendations?: IoTSecurityDeviceRecommendation[];
	readonly topAlertedDevices?: IoTSecurityAlertedDevice[];
	readonly unhealthyDeviceCount?: number;
}
export interface IoTSecuritySolutionAnalyticsModelPropertiesDevicesMetricsItem {
	readonly date?: string;
	readonly devicesMetrics?: IoTSeverityMetrics;
}
export interface IoTSecuritySolutionProperties {
	readonly additionalWorkspaces?: AdditionalWorkspacesProperties[];
	readonly autoDiscoveredResources?: string[];
	readonly disabledDataSources?: "TwinData"[];
	readonly displayName: string;
	readonly export?: "RawEvents"[];
	readonly iotHubs: string[];
	readonly recommendationsConfiguration?: RecommendationConfigurationProperties[];
	readonly status?: "Disabled" | "Enabled";
	readonly unmaskedIpLoggingStatus?: "Disabled" | "Enabled";
	readonly userDefinedResources?: UserDefinedResourcesProperties;
	readonly workspace?: string;
}
export interface IoTSeverityMetrics {
	readonly high?: number;
	readonly low?: number;
	readonly medium?: number;
}
export interface RecommendationConfigurationProperties {
	readonly name?: string;
	readonly recommendationType:
		| "IoT_ACRAuthentication"
		| "IoT_AgentSendsUnutilizedMessages"
		| "IoT_Baseline"
		| "IoT_EdgeHubMemOptimize"
		| "IoT_EdgeLoggingOptions"
		| "IoT_IPFilter_DenyAll"
		| "IoT_IPFilter_PermissiveRule"
		| "IoT_InconsistentModuleSettings"
		| "IoT_InstallAgent"
		| "IoT_OpenPorts"
		| "IoT_PermissiveFirewallPolicy"
		| "IoT_PermissiveInputFirewallRules"
		| "IoT_PermissiveOutputFirewallRules"
		| "IoT_PrivilegedDockerOptions"
		| "IoT_SharedCredentials"
		| "IoT_VulnerableTLSCipherSuite";
	readonly status: "Disabled" | "Enabled";
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface TagsResourceTags {
	readonly [key: string]: string;
}
export interface ThresholdCustomAlertRule {
	readonly description?: string;
	readonly displayName?: string;
	readonly isEnabled: boolean;
	readonly maxThreshold: number;
	readonly minThreshold: number;
}
export interface TimeWindowCustomAlertRule {
	readonly description?: string;
	readonly displayName?: string;
	readonly isEnabled: boolean;
	readonly maxThreshold: number;
	readonly minThreshold: number;
	readonly timeWindowSize: string;
}
export interface UserDefinedResourcesProperties {
	readonly query: string;
	readonly querySubscriptions: string[];
}
export default {
	deviceSecurityGroups: deviceSecurityGroups,
	iotSecuritySolutions: iotSecuritySolutions,
	"iotSecuritySolutions/analyticsModels": iotSecuritySolutions_analyticsModels,
	"iotSecuritySolutions/analyticsModels/aggregatedAlerts": iotSecuritySolutions_analyticsModels_aggregatedAlerts,
	"iotSecuritySolutions/analyticsModels/aggregatedRecommendations":
		iotSecuritySolutions_analyticsModels_aggregatedRecommendations,
	"iotSecuritySolutions/iotAlerts": iotSecuritySolutions_iotAlerts,
	"iotSecuritySolutions/iotAlertTypes": iotSecuritySolutions_iotAlertTypes,
	"iotSecuritySolutions/iotRecommendations": iotSecuritySolutions_iotRecommendations,
	"iotSecuritySolutions/iotRecommendationTypes": iotSecuritySolutions_iotRecommendationTypes,
};

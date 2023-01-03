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
	readonly properties?: DeviceSecurityGroupProperties | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: IoTSecuritySolutionProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TagsResourceTags | undefined;
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
	readonly properties?: IoTSecuritySolutionAnalyticsModelProperties | undefined;
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
	readonly properties?: IoTSecurityAggregatedAlertProperties | undefined;
	readonly tags?: TagsResourceTags | undefined;
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
	readonly properties?: IoTSecurityAggregatedRecommendationProperties | undefined;
	readonly tags?: TagsResourceTags | undefined;
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
	readonly properties?: IotAlertProperties | undefined;
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
	readonly properties?: IotAlertTypeProperties | undefined;
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
	readonly properties?: IotRecommendationProperties | undefined;
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
	readonly properties?: IotRecommendationTypeProperties | undefined;
}
export interface AdditionalWorkspacesProperties {
	readonly dataTypes?: ("Alerts" | "RawEvents"[]) | undefined;
	readonly type?: "Sentinel" | undefined;
	readonly workspace?: string | undefined;
}
export interface AllowlistCustomAlertRule {
	readonly allowlistValues: string[];
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly isEnabled: boolean;
	readonly valueType?: ("IpCidr" | "String") | undefined;
}
export interface DenylistCustomAlertRule {
	readonly denylistValues: string[];
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly isEnabled: boolean;
	readonly ruleType: string;
	readonly valueType?: ("IpCidr" | "String") | undefined;
}
export interface DeviceSecurityGroupProperties {
	readonly allowlistRules?: AllowlistCustomAlertRule[] | undefined;
	readonly denylistRules?: DenylistCustomAlertRule[] | undefined;
	readonly thresholdRules?: ThresholdCustomAlertRule[] | undefined;
	readonly timeWindowRules?: TimeWindowCustomAlertRule[] | undefined;
}
export interface IotAlertProperties {
	readonly alertType?: string | undefined;
	readonly compromisedEntity?: string | undefined;
	readonly endTimeUtc?: string | undefined;
	readonly entities?: any[] | undefined;
	readonly extendedProperties?: any | undefined;
	readonly startTimeUtc?: string | undefined;
	readonly systemAlertId?: string | undefined;
}
export interface IotAlertTypeProperties {
	readonly alertDisplayName?: string | undefined;
	readonly description?: string | undefined;
	readonly intent?:
		| (
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
				| "Unknown"
		  )
		| undefined;
	readonly productComponentName?: string | undefined;
	readonly productName?: string | undefined;
	readonly providerName?: string | undefined;
	readonly remediationSteps?: string[] | undefined;
	readonly severity?: ("High" | "Informational" | "Low" | "Medium") | undefined;
	readonly vendorName?: string | undefined;
}
export interface IotRecommendationProperties {
	readonly deviceId?: string | undefined;
	readonly discoveredTimeUtc?: string | undefined;
	readonly recommendationAdditionalData?: any | undefined;
	readonly recommendationType?: string | undefined;
}
export interface IotRecommendationTypeProperties {
	readonly control?: string | undefined;
	readonly dataSource?: string | undefined;
	readonly description?: string | undefined;
	readonly productComponentName?: string | undefined;
	readonly productName?: string | undefined;
	readonly recommendationDisplayName?: string | undefined;
	readonly remediationSteps?: string[] | undefined;
	readonly severity?: ("Healthy" | "High" | "Low" | "Medium" | "NotApplicable" | "OffByPolicy" | "Unknown") | undefined;
	readonly vendorName?: string | undefined;
}
export interface IoTSecurityAggregatedAlertProperties {
	readonly actionTaken?: string | undefined;
	readonly aggregatedDateUtc?: string | undefined;
	readonly alertDisplayName?: string | undefined;
	readonly alertType?: string | undefined;
	readonly count?: number | undefined;
	readonly description?: string | undefined;
	readonly effectedResourceType?: string | undefined;
	readonly logAnalyticsQuery?: string | undefined;
	readonly remediationSteps?: string | undefined;
	readonly reportedSeverity?: ("High" | "Informational" | "Low" | "Medium") | undefined;
	readonly systemSource?: string | undefined;
	readonly topDevicesList?: IoTSecurityAggregatedAlertPropertiesTopDevicesListItem[] | undefined;
	readonly vendorName?: string | undefined;
}
export interface IoTSecurityAggregatedAlertPropertiesTopDevicesListItem {
	readonly alertsCount?: number | undefined;
	readonly deviceId?: string | undefined;
	readonly lastOccurrence?: string | undefined;
}
export interface IoTSecurityAggregatedRecommendationProperties {
	readonly description?: string | undefined;
	readonly detectedBy?: string | undefined;
	readonly healthyDevices?: number | undefined;
	readonly logAnalyticsQuery?: string | undefined;
	readonly recommendationDisplayName?: string | undefined;
	readonly recommendationName?: string | undefined;
	readonly recommendationTypeId?: string | undefined;
	readonly remediationSteps?: string | undefined;
	readonly reportedSeverity?: ("High" | "Informational" | "Low" | "Medium") | undefined;
	readonly unhealthyDeviceCount?: number | undefined;
}
export interface IoTSecurityAlertedDevice {
	readonly alertsCount?: number | undefined;
	readonly deviceId?: string | undefined;
}
export interface IoTSecurityDeviceAlert {
	readonly alertDisplayName?: string | undefined;
	readonly alertsCount?: number | undefined;
	readonly reportedSeverity?: ("High" | "Informational" | "Low" | "Medium") | undefined;
}
export interface IoTSecurityDeviceRecommendation {
	readonly devicesCount?: number | undefined;
	readonly recommendationDisplayName?: string | undefined;
	readonly reportedSeverity?: ("High" | "Informational" | "Low" | "Medium") | undefined;
}
export interface IoTSecuritySolutionAnalyticsModelProperties {
	readonly devicesMetrics?: IoTSecuritySolutionAnalyticsModelPropertiesDevicesMetricsItem[] | undefined;
	readonly metrics?: IoTSeverityMetrics | undefined;
	readonly mostPrevalentDeviceAlerts?: IoTSecurityDeviceAlert[] | undefined;
	readonly mostPrevalentDeviceRecommendations?: IoTSecurityDeviceRecommendation[] | undefined;
	readonly topAlertedDevices?: IoTSecurityAlertedDevice[] | undefined;
	readonly unhealthyDeviceCount?: number | undefined;
}
export interface IoTSecuritySolutionAnalyticsModelPropertiesDevicesMetricsItem {
	readonly date?: string | undefined;
	readonly devicesMetrics?: IoTSeverityMetrics | undefined;
}
export interface IoTSecuritySolutionProperties {
	readonly additionalWorkspaces?: AdditionalWorkspacesProperties[] | undefined;
	readonly autoDiscoveredResources?: string[] | undefined;
	readonly disabledDataSources?: "TwinData"[] | undefined;
	readonly displayName: string;
	readonly export?: "RawEvents"[] | undefined;
	readonly iotHubs: string[];
	readonly recommendationsConfiguration?: RecommendationConfigurationProperties[] | undefined;
	readonly status?: ("Disabled" | "Enabled") | undefined;
	readonly unmaskedIpLoggingStatus?: ("Disabled" | "Enabled") | undefined;
	readonly userDefinedResources?: UserDefinedResourcesProperties | undefined;
	readonly workspace?: string | undefined;
}
export interface IoTSeverityMetrics {
	readonly high?: number | undefined;
	readonly low?: number | undefined;
	readonly medium?: number | undefined;
}
export interface RecommendationConfigurationProperties {
	readonly name?: string | undefined;
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
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface TagsResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ThresholdCustomAlertRule {
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly isEnabled: boolean;
	readonly maxThreshold: number;
	readonly minThreshold: number;
}
export interface TimeWindowCustomAlertRule {
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
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

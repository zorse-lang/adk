import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class advancedThreatProtectionSettings
	extends ArmResource<advancedThreatProtectionSettingsComponentInputs>
	implements advancedThreatProtectionSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: advancedThreatProtectionSettingsComponentInputs) {
		super(entity, options.name, "Microsoft.Security/advancedThreatProtectionSettings", "2017-08-01-preview", options);
	}
	public readonly apiVersion: "2017-08-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Security/advancedThreatProtectionSettings";
}
export interface advancedThreatProtectionSettingsComponentOutputs {
	readonly apiVersion: "2017-08-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Security/advancedThreatProtectionSettings";
}
export interface advancedThreatProtectionSettingsComponentInputs {
	readonly name: string;
	readonly properties?: AdvancedThreatProtectionProperties;
}
export class autoProvisioningSettings
	extends ArmResource<autoProvisioningSettingsComponentInputs>
	implements autoProvisioningSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: autoProvisioningSettingsComponentInputs) {
		super(entity, options.name, "Microsoft.Security/autoProvisioningSettings", "2017-08-01-preview", options);
	}
	public readonly apiVersion: "2017-08-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Security/autoProvisioningSettings";
}
export interface autoProvisioningSettingsComponentOutputs {
	readonly apiVersion: "2017-08-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Security/autoProvisioningSettings";
}
export interface autoProvisioningSettingsComponentInputs {
	readonly name: string;
	readonly properties?: AutoProvisioningSettingProperties;
}
export class compliances extends ArmResource<compliancesComponentInputs> implements compliancesComponentOutputs {
	constructor(entity: ADKEntity, options: compliancesComponentInputs) {
		super(entity, options.name, "Microsoft.Security/compliances", "2017-08-01-preview", options);
	}
	public readonly apiVersion: "2017-08-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Security/compliances";
}
export interface compliancesComponentOutputs {
	readonly apiVersion: "2017-08-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Security/compliances";
}
export interface compliancesComponentInputs {
	readonly name: string;
	readonly properties?: ComplianceProperties;
}
export class deviceSecurityGroups
	extends ArmResource<deviceSecurityGroupsComponentInputs>
	implements deviceSecurityGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: deviceSecurityGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.Security/deviceSecurityGroups", "2017-08-01-preview", options);
	}
	public readonly apiVersion: "2017-08-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Security/deviceSecurityGroups";
}
export interface deviceSecurityGroupsComponentOutputs {
	readonly apiVersion: "2017-08-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Security/deviceSecurityGroups";
}
export interface deviceSecurityGroupsComponentInputs {
	readonly name: string;
	readonly properties?: DeviceSecurityGroupProperties;
}
export class informationProtectionPolicies
	extends ArmResource<informationProtectionPoliciesComponentInputs>
	implements informationProtectionPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: informationProtectionPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.Security/informationProtectionPolicies", "2017-08-01-preview", options);
	}
	public readonly apiVersion: "2017-08-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Security/informationProtectionPolicies";
}
export interface informationProtectionPoliciesComponentOutputs {
	readonly apiVersion: "2017-08-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Security/informationProtectionPolicies";
}
export interface informationProtectionPoliciesComponentInputs {
	readonly name: string;
	readonly properties?: InformationProtectionPolicyProperties;
}
export class iotSecuritySolutions
	extends ArmResource<iotSecuritySolutionsComponentInputs>
	implements iotSecuritySolutionsComponentOutputs
{
	constructor(entity: ADKEntity, options: iotSecuritySolutionsComponentInputs) {
		super(entity, options.name, "Microsoft.Security/iotSecuritySolutions", "2017-08-01-preview", options);
	}
	public readonly apiVersion: "2017-08-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Security/iotSecuritySolutions";
}
export interface iotSecuritySolutionsComponentOutputs {
	readonly apiVersion: "2017-08-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Security/iotSecuritySolutions";
}
export interface iotSecuritySolutionsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: IoTSecuritySolutionProperties;
	readonly tags?: TagsResourceTags;
}
export class iotSecuritySolutions_analyticsModels
	extends ArmResource<iotSecuritySolutions_analyticsModelsComponentInputs>
	implements iotSecuritySolutions_analyticsModelsComponentOutputs
{
	constructor(entity: ADKEntity, options: iotSecuritySolutions_analyticsModelsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Security/iotSecuritySolutions/analyticsModels",
			"2017-08-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2017-08-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Security/iotSecuritySolutions/analyticsModels";
}
export interface iotSecuritySolutions_analyticsModelsComponentOutputs {
	readonly apiVersion: "2017-08-01-preview";
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
			"2017-08-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2017-08-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Security/iotSecuritySolutions/analyticsModels/aggregatedAlerts";
}
export interface iotSecuritySolutions_analyticsModels_aggregatedAlertsComponentOutputs {
	readonly apiVersion: "2017-08-01-preview";
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
			"2017-08-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2017-08-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Security/iotSecuritySolutions/analyticsModels/aggregatedRecommendations";
}
export interface iotSecuritySolutions_analyticsModels_aggregatedRecommendationsComponentOutputs {
	readonly apiVersion: "2017-08-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Security/iotSecuritySolutions/analyticsModels/aggregatedRecommendations";
}
export interface iotSecuritySolutions_analyticsModels_aggregatedRecommendationsComponentInputs {
	readonly name: string;
	readonly properties?: IoTSecurityAggregatedRecommendationProperties;
	readonly tags?: TagsResourceTags;
}
export class pricings extends ArmResource<pricingsComponentInputs> implements pricingsComponentOutputs {
	constructor(entity: ADKEntity, options: pricingsComponentInputs) {
		super(entity, options.name, "Microsoft.Security/pricings", "2017-08-01-preview", options);
	}
	public readonly apiVersion: "2017-08-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Security/pricings";
}
export interface pricingsComponentOutputs {
	readonly apiVersion: "2017-08-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Security/pricings";
}
export interface pricingsComponentInputs {
	readonly name: string;
	readonly properties?: PricingProperties;
}
export class securityContacts
	extends ArmResource<securityContactsComponentInputs>
	implements securityContactsComponentOutputs
{
	constructor(entity: ADKEntity, options: securityContactsComponentInputs) {
		super(entity, options.name, "Microsoft.Security/securityContacts", "2017-08-01-preview", options);
	}
	public readonly apiVersion: "2017-08-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Security/securityContacts";
}
export interface securityContactsComponentOutputs {
	readonly apiVersion: "2017-08-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Security/securityContacts";
}
export interface securityContactsComponentInputs {
	readonly name: string;
	readonly properties?: SecurityContactProperties;
}
export class settings_DataExportSetting
	extends ArmResource<settings_DataExportSettingComponentInputs>
	implements settings_DataExportSettingComponentOutputs
{
	constructor(entity: ADKEntity, options: settings_DataExportSettingComponentInputs) {
		super(entity, options.name, "Microsoft.Security/settings", "2017-08-01-preview", options);
	}
	public readonly apiVersion: "2017-08-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Security/settings";
}
export interface settings_DataExportSettingComponentOutputs {
	readonly apiVersion: "2017-08-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Security/settings";
}
export interface settings_DataExportSettingComponentInputs {
	readonly name: string;
	readonly kind: "DataExportSetting";
	readonly properties?: DataExportSettingProperties;
}
export class workspaceSettings
	extends ArmResource<workspaceSettingsComponentInputs>
	implements workspaceSettingsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaceSettingsComponentInputs) {
		super(entity, options.name, "Microsoft.Security/workspaceSettings", "2017-08-01-preview", options);
	}
	public readonly apiVersion: "2017-08-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Security/workspaceSettings";
}
export interface workspaceSettingsComponentOutputs {
	readonly apiVersion: "2017-08-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Security/workspaceSettings";
}
export interface workspaceSettingsComponentInputs {
	readonly name: string;
	readonly properties?: WorkspaceSettingProperties;
}
export interface AdvancedThreatProtectionProperties {
	readonly isEnabled?: boolean;
}
export interface AllowlistCustomAlertRule {
	readonly allowlistValues: string[];
	readonly description?: string;
	readonly displayName?: string;
	readonly isEnabled: boolean;
	readonly valueType?: "IpCidr" | "String";
}
export interface AutoProvisioningSettingProperties {
	readonly autoProvision: "Off" | "On";
}
export interface ComplianceProperties {
	readonly assessmentResult?: ComplianceSegment[];
	readonly assessmentTimestampUtcDate?: string;
	readonly resourceCount?: number;
}
export interface ComplianceSegment {
	readonly percentage?: number;
	readonly segmentType?: string;
}
export interface DataExportSettingProperties {
	readonly enabled: boolean;
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
export interface InformationProtectionKeyword {
	readonly canBeNumeric?: boolean;
	readonly custom?: boolean;
	readonly excluded?: boolean;
	readonly pattern?: string;
}
export interface InformationProtectionPolicyProperties {
	readonly informationTypes?: InformationProtectionPolicyPropertiesInformationTypes;
	readonly labels?: InformationProtectionPolicyPropertiesLabels;
	readonly lastModifiedUtc?: string;
	readonly version?: string;
}
export interface InformationProtectionPolicyPropertiesInformationTypes {
	readonly [key: string]: InformationType;
}
export interface InformationProtectionPolicyPropertiesLabels {
	readonly [key: string]: SensitivityLabel;
}
export interface InformationType {
	readonly custom?: boolean;
	readonly description?: string;
	readonly displayName?: string;
	readonly enabled?: boolean;
	readonly keywords?: InformationProtectionKeyword[];
	readonly order?: number;
	readonly recommendedLabelId?: string;
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
	readonly vendorName?: string;
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
export interface IoTSecurityAlertedDevicesList {
	readonly nextLink?: string;
	readonly value: IoTSecurityAlertedDevice[];
}
export interface IoTSecurityDeviceAlert {
	readonly alertDisplayName?: string;
	readonly alertsCount?: number;
	readonly reportedSeverity?: "High" | "Informational" | "Low" | "Medium";
}
export interface IoTSecurityDeviceAlertsList {
	readonly nextLink?: string;
	readonly value: IoTSecurityDeviceAlert[];
}
export interface IoTSecurityDeviceRecommendation {
	readonly devicesCount?: number;
	readonly recommendationDisplayName?: string;
	readonly reportedSeverity?: "High" | "Informational" | "Low" | "Medium";
}
export interface IoTSecurityDeviceRecommendationsList {
	readonly nextLink?: string;
	readonly value: IoTSecurityDeviceRecommendation[];
}
export interface IoTSecuritySolutionAnalyticsModelProperties {
	readonly devicesMetrics?: IoTSecuritySolutionAnalyticsModelPropertiesDevicesMetricsItem[];
	readonly metrics?: IoTSeverityMetrics;
	readonly mostPrevalentDeviceAlerts?: IoTSecurityDeviceAlertsList;
	readonly mostPrevalentDeviceRecommendations?: IoTSecurityDeviceRecommendationsList;
	readonly topAlertedDevices?: IoTSecurityAlertedDevicesList;
	readonly unhealthyDeviceCount?: number;
}
export interface IoTSecuritySolutionAnalyticsModelPropertiesDevicesMetricsItem {
	readonly date?: string;
	readonly devicesMetrics?: IoTSeverityMetrics;
}
export interface IoTSecuritySolutionProperties {
	readonly autoDiscoveredResources?: string[];
	readonly disabledDataSources?: "TwinData"[];
	readonly displayName: string;
	readonly export?: "RawEvents"[];
	readonly iotHubs: string[];
	readonly recommendationsConfiguration?: RecommendationConfigurationProperties[];
	readonly status?: "Disabled" | "Enabled";
	readonly userDefinedResources?: UserDefinedResourcesProperties;
	readonly workspace: string;
}
export interface IoTSeverityMetrics {
	readonly high?: number;
	readonly low?: number;
	readonly medium?: number;
}
export interface PricingProperties {
	readonly pricingTier: "Free" | "Standard";
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
export interface SecurityContactProperties {
	readonly alertNotifications: "Off" | "On";
	readonly alertsToAdmins: "Off" | "On";
	readonly email: string;
	readonly phone?: string;
}
export interface SensitivityLabel {
	readonly description?: string;
	readonly displayName?: string;
	readonly enabled?: boolean;
	readonly order?: number;
	readonly rank?: "Critical" | "High" | "Low" | "Medium";
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
export interface WorkspaceSettingProperties {
	readonly scope: string;
	readonly workspaceId: string;
}
export type settings = settings_DataExportSetting;
export default {
	advancedThreatProtectionSettings: advancedThreatProtectionSettings,
	autoProvisioningSettings: autoProvisioningSettings,
	compliances: compliances,
	deviceSecurityGroups: deviceSecurityGroups,
	informationProtectionPolicies: informationProtectionPolicies,
	iotSecuritySolutions: iotSecuritySolutions,
	"iotSecuritySolutions/analyticsModels": iotSecuritySolutions_analyticsModels,
	"iotSecuritySolutions/analyticsModels/aggregatedAlerts": iotSecuritySolutions_analyticsModels_aggregatedAlerts,
	"iotSecuritySolutions/analyticsModels/aggregatedRecommendations":
		iotSecuritySolutions_analyticsModels_aggregatedRecommendations,
	pricings: pricings,
	securityContacts: securityContacts,
	"settings/DataExportSetting": settings_DataExportSetting,
	workspaceSettings: workspaceSettings,
};

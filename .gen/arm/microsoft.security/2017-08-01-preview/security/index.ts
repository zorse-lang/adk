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
	readonly properties?: AdvancedThreatProtectionProperties | undefined;
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
	readonly properties?: AutoProvisioningSettingProperties | undefined;
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
	readonly properties?: ComplianceProperties | undefined;
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
	readonly properties?: DeviceSecurityGroupProperties | undefined;
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
	readonly properties?: InformationProtectionPolicyProperties | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: IoTSecuritySolutionProperties | undefined;
	readonly tags?: TagsResourceTags | undefined;
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
	readonly properties?: IoTSecurityAggregatedRecommendationProperties | undefined;
	readonly tags?: TagsResourceTags | undefined;
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
	readonly properties?: PricingProperties | undefined;
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
	readonly properties?: SecurityContactProperties | undefined;
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
	readonly properties?: DataExportSettingProperties | undefined;
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
	readonly properties?: WorkspaceSettingProperties | undefined;
}
export interface AdvancedThreatProtectionProperties {
	readonly isEnabled?: boolean | undefined;
}
export interface AllowlistCustomAlertRule {
	readonly allowlistValues: string[];
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly isEnabled: boolean;
	readonly valueType?: ("IpCidr" | "String") | undefined;
}
export interface AutoProvisioningSettingProperties {
	readonly autoProvision: "Off" | "On";
}
export interface ComplianceProperties {
	readonly assessmentResult?: ComplianceSegment[] | undefined;
	readonly assessmentTimestampUtcDate?: string | undefined;
	readonly resourceCount?: number | undefined;
}
export interface ComplianceSegment {
	readonly percentage?: number | undefined;
	readonly segmentType?: string | undefined;
}
export interface DataExportSettingProperties {
	readonly enabled: boolean;
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
export interface InformationProtectionKeyword {
	readonly canBeNumeric?: boolean | undefined;
	readonly custom?: boolean | undefined;
	readonly excluded?: boolean | undefined;
	readonly pattern?: string | undefined;
}
export interface InformationProtectionPolicyProperties {
	readonly informationTypes?: InformationProtectionPolicyPropertiesInformationTypes | undefined;
	readonly labels?: InformationProtectionPolicyPropertiesLabels | undefined;
	readonly lastModifiedUtc?: string | undefined;
	readonly version?: string | undefined;
}
export interface InformationProtectionPolicyPropertiesInformationTypes {
	readonly "[ key: string ]"?: InformationType | undefined;
}
export interface InformationProtectionPolicyPropertiesLabels {
	readonly "[ key: string ]"?: SensitivityLabel | undefined;
}
export interface InformationType {
	readonly custom?: boolean | undefined;
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly enabled?: boolean | undefined;
	readonly keywords?: InformationProtectionKeyword[] | undefined;
	readonly order?: number | undefined;
	readonly recommendedLabelId?: string | undefined;
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
	readonly vendorName?: string | undefined;
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
export interface IoTSecurityAlertedDevicesList {
	readonly nextLink?: string | undefined;
	readonly value: IoTSecurityAlertedDevice[];
}
export interface IoTSecurityDeviceAlert {
	readonly alertDisplayName?: string | undefined;
	readonly alertsCount?: number | undefined;
	readonly reportedSeverity?: ("High" | "Informational" | "Low" | "Medium") | undefined;
}
export interface IoTSecurityDeviceAlertsList {
	readonly nextLink?: string | undefined;
	readonly value: IoTSecurityDeviceAlert[];
}
export interface IoTSecurityDeviceRecommendation {
	readonly devicesCount?: number | undefined;
	readonly recommendationDisplayName?: string | undefined;
	readonly reportedSeverity?: ("High" | "Informational" | "Low" | "Medium") | undefined;
}
export interface IoTSecurityDeviceRecommendationsList {
	readonly nextLink?: string | undefined;
	readonly value: IoTSecurityDeviceRecommendation[];
}
export interface IoTSecuritySolutionAnalyticsModelProperties {
	readonly devicesMetrics?: IoTSecuritySolutionAnalyticsModelPropertiesDevicesMetricsItem[] | undefined;
	readonly metrics?: IoTSeverityMetrics | undefined;
	readonly mostPrevalentDeviceAlerts?: IoTSecurityDeviceAlertsList | undefined;
	readonly mostPrevalentDeviceRecommendations?: IoTSecurityDeviceRecommendationsList | undefined;
	readonly topAlertedDevices?: IoTSecurityAlertedDevicesList | undefined;
	readonly unhealthyDeviceCount?: number | undefined;
}
export interface IoTSecuritySolutionAnalyticsModelPropertiesDevicesMetricsItem {
	readonly date?: string | undefined;
	readonly devicesMetrics?: IoTSeverityMetrics | undefined;
}
export interface IoTSecuritySolutionProperties {
	readonly autoDiscoveredResources?: string[] | undefined;
	readonly disabledDataSources?: "TwinData"[] | undefined;
	readonly displayName: string;
	readonly export?: "RawEvents"[] | undefined;
	readonly iotHubs: string[];
	readonly recommendationsConfiguration?: RecommendationConfigurationProperties[] | undefined;
	readonly status?: ("Disabled" | "Enabled") | undefined;
	readonly userDefinedResources?: UserDefinedResourcesProperties | undefined;
	readonly workspace: string;
}
export interface IoTSeverityMetrics {
	readonly high?: number | undefined;
	readonly low?: number | undefined;
	readonly medium?: number | undefined;
}
export interface PricingProperties {
	readonly pricingTier: "Free" | "Standard";
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
export interface SecurityContactProperties {
	readonly alertNotifications: "Off" | "On";
	readonly alertsToAdmins: "Off" | "On";
	readonly email: string;
	readonly phone?: string | undefined;
}
export interface SensitivityLabel {
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly enabled?: boolean | undefined;
	readonly order?: number | undefined;
	readonly rank?: ("Critical" | "High" | "Low" | "Medium") | undefined;
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

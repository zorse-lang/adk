import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class alertRules_Fusion
	extends ArmResource<alertRules_FusionComponentInputs>
	implements alertRules_FusionComponentOutputs
{
	constructor(entity: ADKEntity, options: alertRules_FusionComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/alertRules", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/alertRules";
}
export interface alertRules_FusionComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/alertRules";
}
export interface alertRules_FusionComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "Fusion";
	readonly properties?: FusionAlertRuleProperties;
}
export class alertRules_MicrosoftSecurityIncidentCreation
	extends ArmResource<alertRules_MicrosoftSecurityIncidentCreationComponentInputs>
	implements alertRules_MicrosoftSecurityIncidentCreationComponentOutputs
{
	constructor(entity: ADKEntity, options: alertRules_MicrosoftSecurityIncidentCreationComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/alertRules", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/alertRules";
}
export interface alertRules_MicrosoftSecurityIncidentCreationComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/alertRules";
}
export interface alertRules_MicrosoftSecurityIncidentCreationComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "MicrosoftSecurityIncidentCreation";
	readonly properties?: MicrosoftSecurityIncidentCreationAlertRuleProperties;
}
export class alertRules_MLBehaviorAnalytics
	extends ArmResource<alertRules_MLBehaviorAnalyticsComponentInputs>
	implements alertRules_MLBehaviorAnalyticsComponentOutputs
{
	constructor(entity: ADKEntity, options: alertRules_MLBehaviorAnalyticsComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/alertRules", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/alertRules";
}
export interface alertRules_MLBehaviorAnalyticsComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/alertRules";
}
export interface alertRules_MLBehaviorAnalyticsComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "MLBehaviorAnalytics";
	readonly properties?: MLBehaviorAnalyticsAlertRuleProperties;
}
export class alertRules_NRT extends ArmResource<alertRules_NRTComponentInputs> implements alertRules_NRTComponentOutputs {
	constructor(entity: ADKEntity, options: alertRules_NRTComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/alertRules", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/alertRules";
}
export interface alertRules_NRTComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/alertRules";
}
export interface alertRules_NRTComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "NRT";
	readonly properties?: NrtAlertRuleProperties;
}
export class alertRules_Scheduled
	extends ArmResource<alertRules_ScheduledComponentInputs>
	implements alertRules_ScheduledComponentOutputs
{
	constructor(entity: ADKEntity, options: alertRules_ScheduledComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/alertRules", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/alertRules";
}
export interface alertRules_ScheduledComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/alertRules";
}
export interface alertRules_ScheduledComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "Scheduled";
	readonly properties?: ScheduledAlertRuleProperties;
}
export class alertRules_ThreatIntelligence
	extends ArmResource<alertRules_ThreatIntelligenceComponentInputs>
	implements alertRules_ThreatIntelligenceComponentOutputs
{
	constructor(entity: ADKEntity, options: alertRules_ThreatIntelligenceComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/alertRules", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/alertRules";
}
export interface alertRules_ThreatIntelligenceComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/alertRules";
}
export interface alertRules_ThreatIntelligenceComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "ThreatIntelligence";
	readonly properties?: ThreatIntelligenceAlertRuleProperties;
}
export class alertRules_actions
	extends ArmResource<alertRules_actionsComponentInputs>
	implements alertRules_actionsComponentOutputs
{
	constructor(entity: ADKEntity, options: alertRules_actionsComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/alertRules/actions", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/alertRules/actions";
}
export interface alertRules_actionsComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/alertRules/actions";
}
export interface alertRules_actionsComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: ActionRequestPropertiesOrActionResponseProperties;
	readonly systemData?: SystemData;
}
export class alertRuleTemplates_Fusion
	extends ArmResource<alertRuleTemplates_FusionComponentInputs>
	implements alertRuleTemplates_FusionComponentOutputs
{
	constructor(entity: ADKEntity, options: alertRuleTemplates_FusionComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/alertRuleTemplates", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/alertRuleTemplates";
}
export interface alertRuleTemplates_FusionComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/alertRuleTemplates";
}
export interface alertRuleTemplates_FusionComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "Fusion";
	readonly properties?: FusionAlertRuleTemplateProperties;
}
export class alertRuleTemplates_MicrosoftSecurityIncidentCreation
	extends ArmResource<alertRuleTemplates_MicrosoftSecurityIncidentCreationComponentInputs>
	implements alertRuleTemplates_MicrosoftSecurityIncidentCreationComponentOutputs
{
	constructor(entity: ADKEntity, options: alertRuleTemplates_MicrosoftSecurityIncidentCreationComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/alertRuleTemplates", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/alertRuleTemplates";
}
export interface alertRuleTemplates_MicrosoftSecurityIncidentCreationComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/alertRuleTemplates";
}
export interface alertRuleTemplates_MicrosoftSecurityIncidentCreationComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "MicrosoftSecurityIncidentCreation";
	readonly properties?: MicrosoftSecurityIncidentCreationAlertRuleTemplateProperties;
}
export class alertRuleTemplates_MLBehaviorAnalytics
	extends ArmResource<alertRuleTemplates_MLBehaviorAnalyticsComponentInputs>
	implements alertRuleTemplates_MLBehaviorAnalyticsComponentOutputs
{
	constructor(entity: ADKEntity, options: alertRuleTemplates_MLBehaviorAnalyticsComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/alertRuleTemplates", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/alertRuleTemplates";
}
export interface alertRuleTemplates_MLBehaviorAnalyticsComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/alertRuleTemplates";
}
export interface alertRuleTemplates_MLBehaviorAnalyticsComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "MLBehaviorAnalytics";
	readonly properties?: MLBehaviorAnalyticsAlertRuleTemplateProperties;
}
export class alertRuleTemplates_NRT
	extends ArmResource<alertRuleTemplates_NRTComponentInputs>
	implements alertRuleTemplates_NRTComponentOutputs
{
	constructor(entity: ADKEntity, options: alertRuleTemplates_NRTComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/alertRuleTemplates", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/alertRuleTemplates";
}
export interface alertRuleTemplates_NRTComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/alertRuleTemplates";
}
export interface alertRuleTemplates_NRTComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "NRT";
	readonly properties?: NrtAlertRuleTemplateProperties;
}
export class alertRuleTemplates_Scheduled
	extends ArmResource<alertRuleTemplates_ScheduledComponentInputs>
	implements alertRuleTemplates_ScheduledComponentOutputs
{
	constructor(entity: ADKEntity, options: alertRuleTemplates_ScheduledComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/alertRuleTemplates", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/alertRuleTemplates";
}
export interface alertRuleTemplates_ScheduledComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/alertRuleTemplates";
}
export interface alertRuleTemplates_ScheduledComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "Scheduled";
	readonly properties?: ScheduledAlertRuleTemplateProperties;
}
export class alertRuleTemplates_ThreatIntelligence
	extends ArmResource<alertRuleTemplates_ThreatIntelligenceComponentInputs>
	implements alertRuleTemplates_ThreatIntelligenceComponentOutputs
{
	constructor(entity: ADKEntity, options: alertRuleTemplates_ThreatIntelligenceComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/alertRuleTemplates", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/alertRuleTemplates";
}
export interface alertRuleTemplates_ThreatIntelligenceComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/alertRuleTemplates";
}
export interface alertRuleTemplates_ThreatIntelligenceComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "ThreatIntelligence";
	readonly properties?: ThreatIntelligenceAlertRuleTemplateProperties;
}
export class automationRules
	extends ArmResource<automationRulesComponentInputs>
	implements automationRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: automationRulesComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/automationRules", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/automationRules";
}
export interface automationRulesComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/automationRules";
}
export interface automationRulesComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties: AutomationRuleProperties;
	readonly systemData?: SystemData;
}
export class bookmarks extends ArmResource<bookmarksComponentInputs> implements bookmarksComponentOutputs {
	constructor(entity: ADKEntity, options: bookmarksComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/bookmarks", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/bookmarks";
}
export interface bookmarksComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/bookmarks";
}
export interface bookmarksComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: BookmarkProperties;
	readonly systemData?: SystemData;
}
export class bookmarks_relations
	extends ArmResource<bookmarks_relationsComponentInputs>
	implements bookmarks_relationsComponentOutputs
{
	constructor(entity: ADKEntity, options: bookmarks_relationsComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/bookmarks/relations", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/bookmarks/relations";
}
export interface bookmarks_relationsComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/bookmarks/relations";
}
export interface bookmarks_relationsComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: RelationProperties;
	readonly systemData?: SystemData;
}
export class dataConnectors_AmazonWebServicesCloudTrail
	extends ArmResource<dataConnectors_AmazonWebServicesCloudTrailComponentInputs>
	implements dataConnectors_AmazonWebServicesCloudTrailComponentOutputs
{
	constructor(entity: ADKEntity, options: dataConnectors_AmazonWebServicesCloudTrailComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_AmazonWebServicesCloudTrailComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_AmazonWebServicesCloudTrailComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "AmazonWebServicesCloudTrail";
	readonly properties?: AwsCloudTrailDataConnectorProperties;
}
export class dataConnectors_AmazonWebServicesS3
	extends ArmResource<dataConnectors_AmazonWebServicesS3ComponentInputs>
	implements dataConnectors_AmazonWebServicesS3ComponentOutputs
{
	constructor(entity: ADKEntity, options: dataConnectors_AmazonWebServicesS3ComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_AmazonWebServicesS3ComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_AmazonWebServicesS3ComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "AmazonWebServicesS3";
	readonly properties?: AwsS3DataConnectorProperties;
}
export class dataConnectors_APIPolling
	extends ArmResource<dataConnectors_APIPollingComponentInputs>
	implements dataConnectors_APIPollingComponentOutputs
{
	constructor(entity: ADKEntity, options: dataConnectors_APIPollingComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_APIPollingComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_APIPollingComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "APIPolling";
	readonly properties?: ApiPollingParameters;
}
export class dataConnectors_AzureActiveDirectory
	extends ArmResource<dataConnectors_AzureActiveDirectoryComponentInputs>
	implements dataConnectors_AzureActiveDirectoryComponentOutputs
{
	constructor(entity: ADKEntity, options: dataConnectors_AzureActiveDirectoryComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_AzureActiveDirectoryComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_AzureActiveDirectoryComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "AzureActiveDirectory";
	readonly properties?: AADDataConnectorProperties;
}
export class dataConnectors_AzureAdvancedThreatProtection
	extends ArmResource<dataConnectors_AzureAdvancedThreatProtectionComponentInputs>
	implements dataConnectors_AzureAdvancedThreatProtectionComponentOutputs
{
	constructor(entity: ADKEntity, options: dataConnectors_AzureAdvancedThreatProtectionComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_AzureAdvancedThreatProtectionComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_AzureAdvancedThreatProtectionComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "AzureAdvancedThreatProtection";
	readonly properties?: AatpDataConnectorProperties;
}
export class dataConnectors_AzureSecurityCenter
	extends ArmResource<dataConnectors_AzureSecurityCenterComponentInputs>
	implements dataConnectors_AzureSecurityCenterComponentOutputs
{
	constructor(entity: ADKEntity, options: dataConnectors_AzureSecurityCenterComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_AzureSecurityCenterComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_AzureSecurityCenterComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "AzureSecurityCenter";
	readonly properties?: ASCDataConnectorProperties;
}
export class dataConnectors_Dynamics365
	extends ArmResource<dataConnectors_Dynamics365ComponentInputs>
	implements dataConnectors_Dynamics365ComponentOutputs
{
	constructor(entity: ADKEntity, options: dataConnectors_Dynamics365ComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_Dynamics365ComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_Dynamics365ComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "Dynamics365";
	readonly properties?: Dynamics365DataConnectorProperties;
}
export class dataConnectors_GenericUI
	extends ArmResource<dataConnectors_GenericUIComponentInputs>
	implements dataConnectors_GenericUIComponentOutputs
{
	constructor(entity: ADKEntity, options: dataConnectors_GenericUIComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_GenericUIComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_GenericUIComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "GenericUI";
	readonly properties?: CodelessParameters;
}
export class dataConnectors_IOT
	extends ArmResource<dataConnectors_IOTComponentInputs>
	implements dataConnectors_IOTComponentOutputs
{
	constructor(entity: ADKEntity, options: dataConnectors_IOTComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_IOTComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_IOTComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "IOT";
	readonly properties?: IoTDataConnectorProperties;
}
export class dataConnectors_MicrosoftCloudAppSecurity
	extends ArmResource<dataConnectors_MicrosoftCloudAppSecurityComponentInputs>
	implements dataConnectors_MicrosoftCloudAppSecurityComponentOutputs
{
	constructor(entity: ADKEntity, options: dataConnectors_MicrosoftCloudAppSecurityComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_MicrosoftCloudAppSecurityComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_MicrosoftCloudAppSecurityComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "MicrosoftCloudAppSecurity";
	readonly properties?: McasDataConnectorProperties;
}
export class dataConnectors_MicrosoftDefenderAdvancedThreatProtection
	extends ArmResource<dataConnectors_MicrosoftDefenderAdvancedThreatProtectionComponentInputs>
	implements dataConnectors_MicrosoftDefenderAdvancedThreatProtectionComponentOutputs
{
	constructor(entity: ADKEntity, options: dataConnectors_MicrosoftDefenderAdvancedThreatProtectionComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_MicrosoftDefenderAdvancedThreatProtectionComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_MicrosoftDefenderAdvancedThreatProtectionComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "MicrosoftDefenderAdvancedThreatProtection";
	readonly properties?: MdatpDataConnectorProperties;
}
export class dataConnectors_MicrosoftThreatIntelligence
	extends ArmResource<dataConnectors_MicrosoftThreatIntelligenceComponentInputs>
	implements dataConnectors_MicrosoftThreatIntelligenceComponentOutputs
{
	constructor(entity: ADKEntity, options: dataConnectors_MicrosoftThreatIntelligenceComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_MicrosoftThreatIntelligenceComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_MicrosoftThreatIntelligenceComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "MicrosoftThreatIntelligence";
	readonly properties?: MstiDataConnectorProperties;
}
export class dataConnectors_MicrosoftThreatProtection
	extends ArmResource<dataConnectors_MicrosoftThreatProtectionComponentInputs>
	implements dataConnectors_MicrosoftThreatProtectionComponentOutputs
{
	constructor(entity: ADKEntity, options: dataConnectors_MicrosoftThreatProtectionComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_MicrosoftThreatProtectionComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_MicrosoftThreatProtectionComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "MicrosoftThreatProtection";
	readonly properties?: MTPDataConnectorProperties;
}
export class dataConnectors_Office365
	extends ArmResource<dataConnectors_Office365ComponentInputs>
	implements dataConnectors_Office365ComponentOutputs
{
	constructor(entity: ADKEntity, options: dataConnectors_Office365ComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_Office365ComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_Office365ComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "Office365";
	readonly properties?: OfficeDataConnectorProperties;
}
export class dataConnectors_Office365Project
	extends ArmResource<dataConnectors_Office365ProjectComponentInputs>
	implements dataConnectors_Office365ProjectComponentOutputs
{
	constructor(entity: ADKEntity, options: dataConnectors_Office365ProjectComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_Office365ProjectComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_Office365ProjectComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "Office365Project";
	readonly properties?: Office365ProjectDataConnectorProperties;
}
export class dataConnectors_OfficeATP
	extends ArmResource<dataConnectors_OfficeATPComponentInputs>
	implements dataConnectors_OfficeATPComponentOutputs
{
	constructor(entity: ADKEntity, options: dataConnectors_OfficeATPComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_OfficeATPComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_OfficeATPComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "OfficeATP";
	readonly properties?: OfficeATPDataConnectorProperties;
}
export class dataConnectors_OfficeIRM
	extends ArmResource<dataConnectors_OfficeIRMComponentInputs>
	implements dataConnectors_OfficeIRMComponentOutputs
{
	constructor(entity: ADKEntity, options: dataConnectors_OfficeIRMComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_OfficeIRMComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_OfficeIRMComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "OfficeIRM";
	readonly properties?: OfficeIRMDataConnectorProperties;
}
export class dataConnectors_OfficePowerBI
	extends ArmResource<dataConnectors_OfficePowerBIComponentInputs>
	implements dataConnectors_OfficePowerBIComponentOutputs
{
	constructor(entity: ADKEntity, options: dataConnectors_OfficePowerBIComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_OfficePowerBIComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_OfficePowerBIComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "OfficePowerBI";
	readonly properties?: OfficePowerBIDataConnectorProperties;
}
export class dataConnectors_ThreatIntelligence
	extends ArmResource<dataConnectors_ThreatIntelligenceComponentInputs>
	implements dataConnectors_ThreatIntelligenceComponentOutputs
{
	constructor(entity: ADKEntity, options: dataConnectors_ThreatIntelligenceComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_ThreatIntelligenceComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_ThreatIntelligenceComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "ThreatIntelligence";
	readonly properties?: TIDataConnectorProperties;
}
export class dataConnectors_ThreatIntelligenceTaxii
	extends ArmResource<dataConnectors_ThreatIntelligenceTaxiiComponentInputs>
	implements dataConnectors_ThreatIntelligenceTaxiiComponentOutputs
{
	constructor(entity: ADKEntity, options: dataConnectors_ThreatIntelligenceTaxiiComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_ThreatIntelligenceTaxiiComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_ThreatIntelligenceTaxiiComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "ThreatIntelligenceTaxii";
	readonly properties?: TiTaxiiDataConnectorProperties;
}
export class entities_Account
	extends ArmResource<entities_AccountComponentInputs>
	implements entities_AccountComponentOutputs
{
	constructor(entity: ADKEntity, options: entities_AccountComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/entities", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_AccountComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_AccountComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "Account";
	readonly properties?: AccountEntityProperties;
}
export class entities_AzureResource
	extends ArmResource<entities_AzureResourceComponentInputs>
	implements entities_AzureResourceComponentOutputs
{
	constructor(entity: ADKEntity, options: entities_AzureResourceComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/entities", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_AzureResourceComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_AzureResourceComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "AzureResource";
	readonly properties?: AzureResourceEntityProperties;
}
export class entities_Bookmark
	extends ArmResource<entities_BookmarkComponentInputs>
	implements entities_BookmarkComponentOutputs
{
	constructor(entity: ADKEntity, options: entities_BookmarkComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/entities", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_BookmarkComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_BookmarkComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "Bookmark";
	readonly properties?: HuntingBookmarkProperties;
}
export class entities_CloudApplication
	extends ArmResource<entities_CloudApplicationComponentInputs>
	implements entities_CloudApplicationComponentOutputs
{
	constructor(entity: ADKEntity, options: entities_CloudApplicationComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/entities", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_CloudApplicationComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_CloudApplicationComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "CloudApplication";
	readonly properties?: CloudApplicationEntityProperties;
}
export class entities_DnsResolution
	extends ArmResource<entities_DnsResolutionComponentInputs>
	implements entities_DnsResolutionComponentOutputs
{
	constructor(entity: ADKEntity, options: entities_DnsResolutionComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/entities", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_DnsResolutionComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_DnsResolutionComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "DnsResolution";
	readonly properties?: DnsEntityProperties;
}
export class entities_File extends ArmResource<entities_FileComponentInputs> implements entities_FileComponentOutputs {
	constructor(entity: ADKEntity, options: entities_FileComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/entities", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_FileComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_FileComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "File";
	readonly properties?: FileEntityProperties;
}
export class entities_FileHash
	extends ArmResource<entities_FileHashComponentInputs>
	implements entities_FileHashComponentOutputs
{
	constructor(entity: ADKEntity, options: entities_FileHashComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/entities", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_FileHashComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_FileHashComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "FileHash";
	readonly properties?: FileHashEntityProperties;
}
export class entities_Host extends ArmResource<entities_HostComponentInputs> implements entities_HostComponentOutputs {
	constructor(entity: ADKEntity, options: entities_HostComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/entities", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_HostComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_HostComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "Host";
	readonly properties?: HostEntityProperties;
}
export class entities_IoTDevice
	extends ArmResource<entities_IoTDeviceComponentInputs>
	implements entities_IoTDeviceComponentOutputs
{
	constructor(entity: ADKEntity, options: entities_IoTDeviceComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/entities", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_IoTDeviceComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_IoTDeviceComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "IoTDevice";
	readonly properties?: IoTDeviceEntityProperties;
}
export class entities_Ip extends ArmResource<entities_IpComponentInputs> implements entities_IpComponentOutputs {
	constructor(entity: ADKEntity, options: entities_IpComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/entities", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_IpComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_IpComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "Ip";
	readonly properties?: IpEntityProperties;
}
export class entities_Mailbox
	extends ArmResource<entities_MailboxComponentInputs>
	implements entities_MailboxComponentOutputs
{
	constructor(entity: ADKEntity, options: entities_MailboxComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/entities", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_MailboxComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_MailboxComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "Mailbox";
	readonly properties?: MailboxEntityProperties;
}
export class entities_MailCluster
	extends ArmResource<entities_MailClusterComponentInputs>
	implements entities_MailClusterComponentOutputs
{
	constructor(entity: ADKEntity, options: entities_MailClusterComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/entities", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_MailClusterComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_MailClusterComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "MailCluster";
	readonly properties?: MailClusterEntityProperties;
}
export class entities_MailMessage
	extends ArmResource<entities_MailMessageComponentInputs>
	implements entities_MailMessageComponentOutputs
{
	constructor(entity: ADKEntity, options: entities_MailMessageComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/entities", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_MailMessageComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_MailMessageComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "MailMessage";
	readonly properties?: MailMessageEntityProperties;
}
export class entities_Malware
	extends ArmResource<entities_MalwareComponentInputs>
	implements entities_MalwareComponentOutputs
{
	constructor(entity: ADKEntity, options: entities_MalwareComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/entities", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_MalwareComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_MalwareComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "Malware";
	readonly properties?: MalwareEntityProperties;
}
export class entities_Process
	extends ArmResource<entities_ProcessComponentInputs>
	implements entities_ProcessComponentOutputs
{
	constructor(entity: ADKEntity, options: entities_ProcessComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/entities", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_ProcessComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_ProcessComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "Process";
	readonly properties?: ProcessEntityProperties;
}
export class entities_RegistryKey
	extends ArmResource<entities_RegistryKeyComponentInputs>
	implements entities_RegistryKeyComponentOutputs
{
	constructor(entity: ADKEntity, options: entities_RegistryKeyComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/entities", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_RegistryKeyComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_RegistryKeyComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "RegistryKey";
	readonly properties?: RegistryKeyEntityProperties;
}
export class entities_RegistryValue
	extends ArmResource<entities_RegistryValueComponentInputs>
	implements entities_RegistryValueComponentOutputs
{
	constructor(entity: ADKEntity, options: entities_RegistryValueComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/entities", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_RegistryValueComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_RegistryValueComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "RegistryValue";
	readonly properties?: RegistryValueEntityProperties;
}
export class entities_SecurityAlert
	extends ArmResource<entities_SecurityAlertComponentInputs>
	implements entities_SecurityAlertComponentOutputs
{
	constructor(entity: ADKEntity, options: entities_SecurityAlertComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/entities", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_SecurityAlertComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_SecurityAlertComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "SecurityAlert";
	readonly properties?: SecurityAlertProperties;
}
export class entities_SecurityGroup
	extends ArmResource<entities_SecurityGroupComponentInputs>
	implements entities_SecurityGroupComponentOutputs
{
	constructor(entity: ADKEntity, options: entities_SecurityGroupComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/entities", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_SecurityGroupComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_SecurityGroupComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "SecurityGroup";
	readonly properties?: SecurityGroupEntityProperties;
}
export class entities_SubmissionMail
	extends ArmResource<entities_SubmissionMailComponentInputs>
	implements entities_SubmissionMailComponentOutputs
{
	constructor(entity: ADKEntity, options: entities_SubmissionMailComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/entities", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_SubmissionMailComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_SubmissionMailComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "SubmissionMail";
	readonly properties?: SubmissionMailEntityProperties;
}
export class entities_Url extends ArmResource<entities_UrlComponentInputs> implements entities_UrlComponentOutputs {
	constructor(entity: ADKEntity, options: entities_UrlComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/entities", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_UrlComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_UrlComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "Url";
	readonly properties?: UrlEntityProperties;
}
export class entities_relations
	extends ArmResource<entities_relationsComponentInputs>
	implements entities_relationsComponentOutputs
{
	constructor(entity: ADKEntity, options: entities_relationsComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/entities/relations", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/entities/relations";
}
export interface entities_relationsComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/entities/relations";
}
export interface entities_relationsComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: RelationProperties;
	readonly systemData?: SystemData;
}
export class entityQueries_Activity
	extends ArmResource<entityQueries_ActivityComponentInputs>
	implements entityQueries_ActivityComponentOutputs
{
	constructor(entity: ADKEntity, options: entityQueries_ActivityComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/entityQueries", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/entityQueries";
}
export interface entityQueries_ActivityComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/entityQueries";
}
export interface entityQueries_ActivityComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "Activity";
	readonly properties?: ActivityEntityQueriesProperties;
}
export class entityQueries_Expansion
	extends ArmResource<entityQueries_ExpansionComponentInputs>
	implements entityQueries_ExpansionComponentOutputs
{
	constructor(entity: ADKEntity, options: entityQueries_ExpansionComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/entityQueries", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/entityQueries";
}
export interface entityQueries_ExpansionComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/entityQueries";
}
export interface entityQueries_ExpansionComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "Expansion";
	readonly properties?: ExpansionEntityQueriesProperties;
}
export class entityQueryTemplates_Activity
	extends ArmResource<entityQueryTemplates_ActivityComponentInputs>
	implements entityQueryTemplates_ActivityComponentOutputs
{
	constructor(entity: ADKEntity, options: entityQueryTemplates_ActivityComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/entityQueryTemplates", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/entityQueryTemplates";
}
export interface entityQueryTemplates_ActivityComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/entityQueryTemplates";
}
export interface entityQueryTemplates_ActivityComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "Activity";
	readonly properties?: ActivityEntityQueryTemplateProperties;
}
export class incidents extends ArmResource<incidentsComponentInputs> implements incidentsComponentOutputs {
	constructor(entity: ADKEntity, options: incidentsComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/incidents", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/incidents";
}
export interface incidentsComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/incidents";
}
export interface incidentsComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: IncidentProperties;
	readonly systemData?: SystemData;
}
export class incidents_comments
	extends ArmResource<incidents_commentsComponentInputs>
	implements incidents_commentsComponentOutputs
{
	constructor(entity: ADKEntity, options: incidents_commentsComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/incidents/comments", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/incidents/comments";
}
export interface incidents_commentsComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/incidents/comments";
}
export interface incidents_commentsComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: IncidentCommentProperties;
	readonly systemData?: SystemData;
}
export class incidents_relations
	extends ArmResource<incidents_relationsComponentInputs>
	implements incidents_relationsComponentOutputs
{
	constructor(entity: ADKEntity, options: incidents_relationsComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/incidents/relations", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/incidents/relations";
}
export interface incidents_relationsComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/incidents/relations";
}
export interface incidents_relationsComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: RelationProperties;
	readonly systemData?: SystemData;
}
export class metadata extends ArmResource<metadataComponentInputs> implements metadataComponentOutputs {
	constructor(entity: ADKEntity, options: metadataComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/metadata", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/metadata";
}
export interface metadataComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/metadata";
}
export interface metadataComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: MetadataProperties;
	readonly systemData?: SystemData;
}
export class officeConsents extends ArmResource<officeConsentsComponentInputs> implements officeConsentsComponentOutputs {
	constructor(entity: ADKEntity, options: officeConsentsComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/officeConsents", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/officeConsents";
}
export interface officeConsentsComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/officeConsents";
}
export interface officeConsentsComponentInputs {
	readonly name: string;
	readonly properties?: OfficeConsentProperties;
	readonly systemData?: SystemData;
}
export class onboardingStates
	extends ArmResource<onboardingStatesComponentInputs>
	implements onboardingStatesComponentOutputs
{
	constructor(entity: ADKEntity, options: onboardingStatesComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/onboardingStates", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/onboardingStates";
}
export interface onboardingStatesComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/onboardingStates";
}
export interface onboardingStatesComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: SentinelOnboardingStateProperties;
	readonly systemData?: SystemData;
}
export class securityMLAnalyticsSettings_Anomaly
	extends ArmResource<securityMLAnalyticsSettings_AnomalyComponentInputs>
	implements securityMLAnalyticsSettings_AnomalyComponentOutputs
{
	constructor(entity: ADKEntity, options: securityMLAnalyticsSettings_AnomalyComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.SecurityInsights/securityMLAnalyticsSettings",
			"2022-05-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/securityMLAnalyticsSettings";
}
export interface securityMLAnalyticsSettings_AnomalyComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/securityMLAnalyticsSettings";
}
export interface securityMLAnalyticsSettings_AnomalyComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "Anomaly";
	readonly properties?: AnomalySecurityMLAnalyticsSettingsProperties;
}
export class settings_Anomalies
	extends ArmResource<settings_AnomaliesComponentInputs>
	implements settings_AnomaliesComponentOutputs
{
	constructor(entity: ADKEntity, options: settings_AnomaliesComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/settings", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/settings";
}
export interface settings_AnomaliesComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/settings";
}
export interface settings_AnomaliesComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "Anomalies";
	readonly properties?: AnomaliesSettingsProperties;
}
export class settings_EntityAnalytics
	extends ArmResource<settings_EntityAnalyticsComponentInputs>
	implements settings_EntityAnalyticsComponentOutputs
{
	constructor(entity: ADKEntity, options: settings_EntityAnalyticsComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/settings", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/settings";
}
export interface settings_EntityAnalyticsComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/settings";
}
export interface settings_EntityAnalyticsComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "EntityAnalytics";
	readonly properties?: EntityAnalyticsProperties;
}
export class settings_EyesOn
	extends ArmResource<settings_EyesOnComponentInputs>
	implements settings_EyesOnComponentOutputs
{
	constructor(entity: ADKEntity, options: settings_EyesOnComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/settings", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/settings";
}
export interface settings_EyesOnComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/settings";
}
export interface settings_EyesOnComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "EyesOn";
	readonly properties?: EyesOnSettingsProperties;
}
export class settings_Ueba extends ArmResource<settings_UebaComponentInputs> implements settings_UebaComponentOutputs {
	constructor(entity: ADKEntity, options: settings_UebaComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/settings", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/settings";
}
export interface settings_UebaComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/settings";
}
export interface settings_UebaComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "Ueba";
	readonly properties?: UebaProperties;
}
export class sourcecontrols extends ArmResource<sourcecontrolsComponentInputs> implements sourcecontrolsComponentOutputs {
	constructor(entity: ADKEntity, options: sourcecontrolsComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/sourcecontrols", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/sourcecontrols";
}
export interface sourcecontrolsComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/sourcecontrols";
}
export interface sourcecontrolsComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: SourceControlProperties;
	readonly systemData?: SystemData;
}
export class threatIntelligence_indicators
	extends ArmResource<threatIntelligence_indicatorsComponentInputs>
	implements threatIntelligence_indicatorsComponentOutputs
{
	constructor(entity: ADKEntity, options: threatIntelligence_indicatorsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.SecurityInsights/threatIntelligence/indicators",
			"2022-05-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/threatIntelligence/indicators";
}
export interface threatIntelligence_indicatorsComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/threatIntelligence/indicators";
}
export interface threatIntelligence_indicatorsComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: ThreatIntelligenceIndicatorProperties;
	readonly systemData?: SystemData;
}
export class watchlists extends ArmResource<watchlistsComponentInputs> implements watchlistsComponentOutputs {
	constructor(entity: ADKEntity, options: watchlistsComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/watchlists", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/watchlists";
}
export interface watchlistsComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/watchlists";
}
export interface watchlistsComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: WatchlistProperties;
	readonly systemData?: SystemData;
}
export class watchlists_watchlistItems
	extends ArmResource<watchlists_watchlistItemsComponentInputs>
	implements watchlists_watchlistItemsComponentOutputs
{
	constructor(entity: ADKEntity, options: watchlists_watchlistItemsComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/watchlists/watchlistItems", "2022-05-01-preview", options);
	}
	public readonly apiVersion: "2022-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/watchlists/watchlistItems";
}
export interface watchlists_watchlistItemsComponentOutputs {
	readonly apiVersion: "2022-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/watchlists/watchlistItems";
}
export interface watchlists_watchlistItemsComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: WatchlistItemProperties;
	readonly systemData?: SystemData;
}
export interface AADDataConnectorProperties {
	readonly dataTypes?: AlertsDataTypeOfDataConnector;
	readonly tenantId: string;
}
export interface AatpDataConnectorProperties {
	readonly dataTypes?: AlertsDataTypeOfDataConnector;
	readonly tenantId: string;
}
export interface AccountEntityProperties {
	readonly aadTenantId?: string;
	readonly aadUserId?: string;
	readonly accountName?: string;
	readonly additionalData?: EntityCommonPropertiesAdditionalData;
	readonly displayName?: string;
	readonly dnsDomain?: string;
	readonly friendlyName?: string;
	readonly hostEntityId?: string;
	readonly isDomainJoined?: boolean;
	readonly ntDomain?: string;
	readonly objectGuid?: string;
	readonly puid?: string;
	readonly sid?: string;
	readonly upnSuffix?: string;
}
export interface ActionRequestPropertiesOrActionResponseProperties {
	readonly logicAppResourceId: string;
	readonly triggerUri: string;
	readonly workflowId?: string;
}
export interface ActivityEntityQueriesProperties {
	readonly content?: string;
	readonly createdTimeUtc?: string;
	readonly description?: string;
	readonly enabled?: boolean;
	readonly entitiesFilter?: ActivityEntityQueriesPropertiesEntitiesFilter;
	readonly inputEntityType?:
		| "Account"
		| "AzureResource"
		| "CloudApplication"
		| "DNS"
		| "File"
		| "FileHash"
		| "Host"
		| "HuntingBookmark"
		| "IP"
		| "IoTDevice"
		| "MailCluster"
		| "MailMessage"
		| "Mailbox"
		| "Malware"
		| "Process"
		| "RegistryKey"
		| "RegistryValue"
		| "SecurityAlert"
		| "SecurityGroup"
		| "SubmissionMail"
		| "URL";
	readonly lastModifiedTimeUtc?: string;
	readonly queryDefinitions?: ActivityEntityQueriesPropertiesQueryDefinitions;
	readonly requiredInputFieldsSets?: string[][];
	readonly templateName?: string;
	readonly title?: string;
}
export interface ActivityEntityQueriesPropertiesEntitiesFilter {
	readonly [key: string]: string[];
}
export interface ActivityEntityQueriesPropertiesQueryDefinitions {
	readonly query?: string;
}
export interface ActivityEntityQueryTemplateProperties {
	readonly content?: string;
	readonly dataTypes?: DataTypeDefinitions[];
	readonly description?: string;
	readonly entitiesFilter?: ActivityEntityQueryTemplatePropertiesEntitiesFilter;
	readonly inputEntityType?:
		| "Account"
		| "AzureResource"
		| "CloudApplication"
		| "DNS"
		| "File"
		| "FileHash"
		| "Host"
		| "HuntingBookmark"
		| "IP"
		| "IoTDevice"
		| "MailCluster"
		| "MailMessage"
		| "Mailbox"
		| "Malware"
		| "Process"
		| "RegistryKey"
		| "RegistryValue"
		| "SecurityAlert"
		| "SecurityGroup"
		| "SubmissionMail"
		| "URL";
	readonly queryDefinitions?: ActivityEntityQueryTemplatePropertiesQueryDefinitions;
	readonly requiredInputFieldsSets?: string[][];
	readonly title?: string;
}
export interface ActivityEntityQueryTemplatePropertiesEntitiesFilter {
	readonly [key: string]: string[];
}
export interface ActivityEntityQueryTemplatePropertiesQueryDefinitions {
	readonly query?: string;
	readonly summarizeBy?: string;
}
export interface AlertDetailsOverride {
	readonly alertDescriptionFormat?: string;
	readonly alertDisplayNameFormat?: string;
	readonly alertSeverityColumnName?: string;
	readonly alertTacticsColumnName?: string;
}
export interface AlertRuleTemplateDataSource {
	readonly connectorId?: string;
	readonly dataTypes?: string[];
}
export interface AlertsDataTypeOfDataConnector {
	readonly alerts: DataConnectorDataTypeCommon;
}
export interface AnomaliesSettingsProperties {
	readonly isEnabled?: boolean;
}
export interface AnomalySecurityMLAnalyticsSettingsProperties {
	readonly anomalySettingsVersion?: number;
	readonly anomalyVersion: string;
	readonly customizableObservations?: any;
	readonly description?: string;
	readonly displayName: string;
	readonly enabled: boolean;
	readonly frequency: string;
	readonly isDefaultSettings: boolean;
	readonly lastModifiedUtc?: string;
	readonly requiredDataConnectors?: SecurityMLAnalyticsSettingsDataSource[];
	readonly settingsDefinitionId?: string;
	readonly settingsStatus: "Flighting" | "Production";
	readonly tactics?:
		| "Collection"
		| "CommandAndControl"
		| "CredentialAccess"
		| "DefenseEvasion"
		| "Discovery"
		| "Execution"
		| "Exfiltration"
		| "Impact"
		| "ImpairProcessControl"
		| "InhibitResponseFunction"
		| "InitialAccess"
		| "LateralMovement"
		| "Persistence"
		| "PreAttack"
		| "PrivilegeEscalation"
		| "Reconnaissance"
		| "ResourceDevelopment"[];
	readonly techniques?: string[];
}
export interface ApiPollingParameters {
	readonly connectorUiConfig?: CodelessUiConnectorConfigProperties;
	readonly pollingConfig?: CodelessConnectorPollingConfigProperties;
}
export interface ASCDataConnectorProperties {
	readonly dataTypes?: AlertsDataTypeOfDataConnector;
	readonly subscriptionId?: string;
}
export interface AutomationRuleAction {
	readonly order: number;
}
export interface AutomationRuleCondition {}
export interface AutomationRuleProperties {
	readonly actions: AutomationRuleAction[];
	readonly createdBy?: ClientInfo;
	readonly createdTimeUtc?: string;
	readonly displayName: string;
	readonly lastModifiedBy?: ClientInfo;
	readonly lastModifiedTimeUtc?: string;
	readonly order: number;
	readonly triggeringLogic: AutomationRuleTriggeringLogic;
}
export interface AutomationRulePropertyArrayChangedValuesCondition {
	readonly arrayType?: "Alerts" | "Comments" | "Labels" | "Tactics";
	readonly changeType?: "Added";
}
export interface AutomationRulePropertyValuesChangedCondition {
	readonly changeType?: "ChangedFrom" | "ChangedTo";
	readonly operator?:
		| "Contains"
		| "EndsWith"
		| "Equals"
		| "NotContains"
		| "NotEndsWith"
		| "NotEquals"
		| "NotStartsWith"
		| "StartsWith";
	readonly propertyName?: "IncidentOwner" | "IncidentSeverity" | "IncidentStatus";
	readonly propertyValues?: string[];
}
export interface AutomationRulePropertyValuesCondition {
	readonly operator?:
		| "Contains"
		| "EndsWith"
		| "Equals"
		| "NotContains"
		| "NotEndsWith"
		| "NotEquals"
		| "NotStartsWith"
		| "StartsWith";
	readonly propertyName?:
		| "AccountAadTenantId"
		| "AccountAadUserId"
		| "AccountNTDomain"
		| "AccountName"
		| "AccountObjectGuid"
		| "AccountPUID"
		| "AccountSid"
		| "AccountUPNSuffix"
		| "AlertProductNames"
		| "AzureResourceResourceId"
		| "AzureResourceSubscriptionId"
		| "CloudApplicationAppId"
		| "CloudApplicationAppName"
		| "DNSDomainName"
		| "FileDirectory"
		| "FileHashValue"
		| "FileName"
		| "HostAzureID"
		| "HostNTDomain"
		| "HostName"
		| "HostNetBiosName"
		| "HostOSVersion"
		| "IPAddress"
		| "IncidentDescription"
		| "IncidentLabel"
		| "IncidentProviderName"
		| "IncidentRelatedAnalyticRuleIds"
		| "IncidentSeverity"
		| "IncidentStatus"
		| "IncidentTactics"
		| "IncidentTitle"
		| "IoTDeviceId"
		| "IoTDeviceModel"
		| "IoTDeviceName"
		| "IoTDeviceOperatingSystem"
		| "IoTDeviceType"
		| "IoTDeviceVendor"
		| "MailMessageDeliveryAction"
		| "MailMessageDeliveryLocation"
		| "MailMessageP1Sender"
		| "MailMessageP2Sender"
		| "MailMessageRecipient"
		| "MailMessageSenderIP"
		| "MailMessageSubject"
		| "MailboxDisplayName"
		| "MailboxPrimaryAddress"
		| "MailboxUPN"
		| "MalwareCategory"
		| "MalwareName"
		| "ProcessCommandLine"
		| "ProcessId"
		| "RegistryKey"
		| "RegistryValueData"
		| "Url";
	readonly propertyValues?: string[];
}
export interface AutomationRuleTriggeringLogic {
	readonly conditions?: AutomationRuleCondition[];
	readonly expirationTimeUtc?: string;
	readonly isEnabled: boolean;
	readonly triggersOn: "Incidents";
	readonly triggersWhen: "Created" | "Updated";
}
export interface Availability {
	readonly isPreview?: boolean;
	readonly status?: "1";
}
export interface AwsCloudTrailDataConnectorDataTypes {
	readonly logs: AwsCloudTrailDataConnectorDataTypesLogs;
}
export interface AwsCloudTrailDataConnectorDataTypesLogs {
	readonly state: "Disabled" | "Enabled";
}
export interface AwsCloudTrailDataConnectorProperties {
	readonly awsRoleArn?: string;
	readonly dataTypes: AwsCloudTrailDataConnectorDataTypes;
}
export interface AwsS3DataConnectorDataTypes {
	readonly logs: AwsS3DataConnectorDataTypesLogs;
}
export interface AwsS3DataConnectorDataTypesLogs {
	readonly state: "Disabled" | "Enabled";
}
export interface AwsS3DataConnectorProperties {
	readonly dataTypes: AwsS3DataConnectorDataTypes;
	readonly destinationTable: string;
	readonly roleArn: string;
	readonly sqsUrls: string[];
}
export interface AzureDevOpsResourceInfo {
	readonly pipelineId?: string;
	readonly serviceConnectionId?: string;
}
export interface AzureResourceEntityProperties {
	readonly additionalData?: EntityCommonPropertiesAdditionalData;
	readonly friendlyName?: string;
	readonly resourceId?: string;
	readonly subscriptionId?: string;
}
export interface BookmarkEntityMappings {
	readonly entityType?: string;
	readonly fieldMappings?: EntityFieldMapping[];
}
export interface BookmarkProperties {
	readonly created?: string;
	readonly createdBy?: UserInfo;
	readonly displayName: string;
	readonly entityMappings?: BookmarkEntityMappings[];
	readonly eventTime?: string;
	readonly incidentInfo?: IncidentInfo;
	readonly labels?: string[];
	readonly notes?: string;
	readonly query: string;
	readonly queryEndTime?: string;
	readonly queryResult?: string;
	readonly queryStartTime?: string;
	readonly tactics?:
		| "Collection"
		| "CommandAndControl"
		| "CredentialAccess"
		| "DefenseEvasion"
		| "Discovery"
		| "Execution"
		| "Exfiltration"
		| "Impact"
		| "ImpairProcessControl"
		| "InhibitResponseFunction"
		| "InitialAccess"
		| "LateralMovement"
		| "Persistence"
		| "PreAttack"
		| "PrivilegeEscalation"
		| "Reconnaissance"
		| "ResourceDevelopment"[];
	readonly techniques?: string[];
	readonly updated?: string;
	readonly updatedBy?: UserInfo;
}
export interface ClientInfo {
	readonly email?: string;
	readonly name?: string;
	readonly objectId?: string;
	readonly userPrincipalName?: string;
}
export interface CloudApplicationEntityProperties {
	readonly additionalData?: EntityCommonPropertiesAdditionalData;
	readonly appId?: number;
	readonly appName?: string;
	readonly friendlyName?: string;
	readonly instanceName?: string;
}
export interface CodelessConnectorPollingAuthProperties {
	readonly apiKeyIdentifier?: string;
	readonly apiKeyName?: string;
	readonly authorizationEndpoint?: string;
	readonly authorizationEndpointQueryParameters?: any;
	readonly authType: string;
	readonly flowName?: string;
	readonly isApiKeyInPostPayload?: string;
	readonly isClientSecretInHeader?: boolean;
	readonly redirectionEndpoint?: string;
	readonly scope?: string;
	readonly tokenEndpoint?: string;
	readonly tokenEndpointHeaders?: any;
	readonly tokenEndpointQueryParameters?: any;
}
export interface CodelessConnectorPollingConfigProperties {
	readonly auth: CodelessConnectorPollingAuthProperties;
	readonly isActive?: boolean;
	readonly paging?: CodelessConnectorPollingPagingProperties;
	readonly request: CodelessConnectorPollingRequestProperties;
	readonly response?: CodelessConnectorPollingResponseProperties;
}
export interface CodelessConnectorPollingPagingProperties {
	readonly nextPageParaName?: string;
	readonly nextPageTokenJsonPath?: string;
	readonly pageCountAttributePath?: string;
	readonly pageSize?: number;
	readonly pageSizeParaName?: string;
	readonly pageTimeStampAttributePath?: string;
	readonly pageTotalCountAttributePath?: string;
	readonly pagingType: string;
	readonly searchTheLatestTimeStampFromEventsList?: string;
}
export interface CodelessConnectorPollingRequestProperties {
	readonly apiEndpoint: string;
	readonly endTimeAttributeName?: string;
	readonly headers?: any;
	readonly httpMethod: string;
	readonly queryParameters?: any;
	readonly queryParametersTemplate?: string;
	readonly queryTimeFormat: string;
	readonly queryWindowInMin: number;
	readonly rateLimitQps?: number;
	readonly retryCount?: number;
	readonly startTimeAttributeName?: string;
	readonly timeoutInSeconds?: number;
}
export interface CodelessConnectorPollingResponseProperties {
	readonly eventsJsonPaths: string[];
	readonly isGzipCompressed?: boolean;
	readonly successStatusJsonPath?: string;
	readonly successStatusValue?: string;
}
export interface CodelessParameters {
	readonly connectorUiConfig?: CodelessUiConnectorConfigProperties;
}
export interface CodelessUiConnectorConfigProperties {
	readonly availability: Availability;
	readonly connectivityCriteria: CodelessUiConnectorConfigPropertiesConnectivityCriteriaItem[];
	readonly customImage?: string;
	readonly dataTypes: CodelessUiConnectorConfigPropertiesDataTypesItem[];
	readonly descriptionMarkdown: string;
	readonly graphQueries: CodelessUiConnectorConfigPropertiesGraphQueriesItem[];
	readonly graphQueriesTableName: string;
	readonly instructionSteps: CodelessUiConnectorConfigPropertiesInstructionStepsItem[];
	readonly permissions: Permissions;
	readonly publisher: string;
	readonly sampleQueries: CodelessUiConnectorConfigPropertiesSampleQueriesItem[];
	readonly title: string;
}
export interface CodelessUiConnectorConfigPropertiesConnectivityCriteriaItem {
	readonly type?: "IsConnectedQuery";
	readonly value?: string[];
}
export interface CodelessUiConnectorConfigPropertiesDataTypesItem {
	readonly lastDataReceivedQuery?: string;
	readonly name?: string;
}
export interface CodelessUiConnectorConfigPropertiesGraphQueriesItem {
	readonly baseQuery?: string;
	readonly legend?: string;
	readonly metricName?: string;
}
export interface CodelessUiConnectorConfigPropertiesInstructionStepsItem {
	readonly description?: string;
	readonly instructions?: InstructionStepsInstructionsItem[];
	readonly title?: string;
}
export interface CodelessUiConnectorConfigPropertiesSampleQueriesItem {
	readonly description?: string;
	readonly query?: string;
}
export interface ContentPathMap {
	readonly contentType?: "AnalyticRule" | "Workbook";
	readonly path?: string;
}
export interface DataConnectorDataTypeCommon {
	readonly state: "Disabled" | "Enabled";
}
export interface DataTypeDefinitions {
	readonly dataType?: string;
}
export interface Deployment {
	readonly deploymentId?: string;
	readonly deploymentLogsUrl?: string;
	readonly deploymentResult?: "Canceled" | "Failed" | "Success";
	readonly deploymentState?: "Canceling" | "Completed" | "In_Progress" | "Queued";
	readonly deploymentTime?: string;
}
export interface DeploymentInfo {
	readonly deployment?: Deployment;
	readonly deploymentFetchStatus?: "NotFound" | "Success" | "Unauthorized";
	readonly message?: string;
}
export interface DnsEntityProperties {
	readonly additionalData?: EntityCommonPropertiesAdditionalData;
	readonly dnsServerIpEntityId?: string;
	readonly domainName?: string;
	readonly friendlyName?: string;
	readonly hostIpAddressEntityId?: string;
	readonly ipAddressEntityIds?: string[];
}
export interface Dynamics365DataConnectorDataTypes {
	readonly dynamics365CdsActivities: Dynamics365DataConnectorDataTypesDynamics365CdsActivities;
}
export interface Dynamics365DataConnectorDataTypesDynamics365CdsActivities {
	readonly state: "Disabled" | "Enabled";
}
export interface Dynamics365DataConnectorProperties {
	readonly dataTypes: Dynamics365DataConnectorDataTypes;
	readonly tenantId: string;
}
export interface EntityAnalyticsProperties {
	readonly entityProviders?: "ActiveDirectory" | "AzureActiveDirectory"[];
}
export interface EntityCommonPropertiesAdditionalData {
	readonly [key: string]: any;
}
export interface EntityFieldMapping {
	readonly identifier?: string;
	readonly value?: string;
}
export interface EntityMapping {
	readonly entityType?:
		| "Account"
		| "AzureResource"
		| "CloudApplication"
		| "DNS"
		| "File"
		| "FileHash"
		| "Host"
		| "IP"
		| "MailCluster"
		| "MailMessage"
		| "Mailbox"
		| "Malware"
		| "Process"
		| "RegistryKey"
		| "RegistryValue"
		| "SecurityGroup"
		| "SubmissionMail"
		| "URL";
	readonly fieldMappings?: FieldMapping[];
}
export interface EventGroupingSettings {
	readonly aggregationKind?: "AlertPerResult" | "SingleAlert";
}
export interface ExpansionEntityQueriesProperties {
	readonly dataSources?: string[];
	readonly displayName?: string;
	readonly inputEntityType?:
		| "Account"
		| "AzureResource"
		| "CloudApplication"
		| "DNS"
		| "File"
		| "FileHash"
		| "Host"
		| "HuntingBookmark"
		| "IP"
		| "IoTDevice"
		| "MailCluster"
		| "MailMessage"
		| "Mailbox"
		| "Malware"
		| "Process"
		| "RegistryKey"
		| "RegistryValue"
		| "SecurityAlert"
		| "SecurityGroup"
		| "SubmissionMail"
		| "URL";
	readonly inputFields?: string[];
	readonly outputEntityTypes?:
		| "Account"
		| "AzureResource"
		| "CloudApplication"
		| "DNS"
		| "File"
		| "FileHash"
		| "Host"
		| "HuntingBookmark"
		| "IP"
		| "IoTDevice"
		| "MailCluster"
		| "MailMessage"
		| "Mailbox"
		| "Malware"
		| "Process"
		| "RegistryKey"
		| "RegistryValue"
		| "SecurityAlert"
		| "SecurityGroup"
		| "SubmissionMail"
		| "URL"[];
	readonly queryTemplate?: string;
}
export interface EyesOnSettingsProperties {
	readonly isEnabled?: boolean;
}
export interface FieldMapping {
	readonly columnName?: string;
	readonly identifier?: string;
}
export interface FileEntityProperties {
	readonly additionalData?: EntityCommonPropertiesAdditionalData;
	readonly directory?: string;
	readonly fileHashEntityIds?: string[];
	readonly fileName?: string;
	readonly friendlyName?: string;
	readonly hostEntityId?: string;
}
export interface FileHashEntityProperties {
	readonly additionalData?: EntityCommonPropertiesAdditionalData;
	readonly algorithm?: "MD5" | "SHA1" | "SHA256" | "SHA256AC" | "Unknown";
	readonly friendlyName?: string;
	readonly hashValue?: string;
}
export interface FusionAlertRuleProperties {
	readonly alertRuleTemplateName: string;
	readonly description?: string;
	readonly displayName?: string;
	readonly enabled: boolean;
	readonly lastModifiedUtc?: string;
	readonly scenarioExclusionPatterns?: FusionScenarioExclusionPattern[];
	readonly severity?: "High" | "Informational" | "Low" | "Medium";
	readonly sourceSettings?: FusionSourceSettings[];
	readonly tactics?:
		| "Collection"
		| "CommandAndControl"
		| "CredentialAccess"
		| "DefenseEvasion"
		| "Discovery"
		| "Execution"
		| "Exfiltration"
		| "Impact"
		| "ImpairProcessControl"
		| "InhibitResponseFunction"
		| "InitialAccess"
		| "LateralMovement"
		| "Persistence"
		| "PreAttack"
		| "PrivilegeEscalation"
		| "Reconnaissance"
		| "ResourceDevelopment"[];
	readonly techniques?: string[];
}
export interface FusionAlertRuleTemplateProperties {
	readonly alertRulesCreatedByTemplateCount?: number;
	readonly createdDateUTC?: string;
	readonly description?: string;
	readonly displayName?: string;
	readonly lastUpdatedDateUTC?: string;
	readonly requiredDataConnectors?: AlertRuleTemplateDataSource[];
	readonly severity?: "High" | "Informational" | "Low" | "Medium";
	readonly sourceSettings?: FusionTemplateSourceSetting[];
	readonly status?: "Available" | "Installed" | "NotAvailable";
	readonly tactics?:
		| "Collection"
		| "CommandAndControl"
		| "CredentialAccess"
		| "DefenseEvasion"
		| "Discovery"
		| "Execution"
		| "Exfiltration"
		| "Impact"
		| "ImpairProcessControl"
		| "InhibitResponseFunction"
		| "InitialAccess"
		| "LateralMovement"
		| "Persistence"
		| "PreAttack"
		| "PrivilegeEscalation"
		| "Reconnaissance"
		| "ResourceDevelopment"[];
	readonly techniques?: string[];
}
export interface FusionScenarioExclusionPattern {
	readonly dateAddedInUTC: string;
	readonly exclusionPattern: string;
}
export interface FusionSourceSettings {
	readonly enabled: boolean;
	readonly sourceName: string;
	readonly sourceSubTypes?: FusionSourceSubTypeSetting[];
}
export interface FusionSourceSubTypeSetting {
	readonly enabled: boolean;
	readonly severityFilters: FusionSubTypeSeverityFilter;
	readonly sourceSubTypeDisplayName?: string;
	readonly sourceSubTypeName: string;
}
export interface FusionSubTypeSeverityFilter {
	readonly filters?: FusionSubTypeSeverityFiltersItem[];
	readonly isSupported?: boolean;
}
export interface FusionSubTypeSeverityFiltersItem {
	readonly enabled: boolean;
	readonly severity: "High" | "Informational" | "Low" | "Medium";
}
export interface FusionTemplateSourceSetting {
	readonly sourceName: string;
	readonly sourceSubTypes?: FusionTemplateSourceSubType[];
}
export interface FusionTemplateSourceSubType {
	readonly severityFilter: FusionTemplateSubTypeSeverityFilter;
	readonly sourceSubTypeDisplayName?: string;
	readonly sourceSubTypeName: string;
}
export interface FusionTemplateSubTypeSeverityFilter {
	readonly isSupported: boolean;
	readonly severityFilters?: "High" | "Informational" | "Low" | "Medium"[];
}
export interface GeoLocation {
	readonly asn?: number;
	readonly city?: string;
	readonly countryCode?: string;
	readonly countryName?: string;
	readonly latitude?: number;
	readonly longitude?: number;
	readonly state?: string;
}
export interface GitHubResourceInfo {
	readonly appInstallationId?: string;
}
export interface GroupingConfiguration {
	readonly enabled: boolean;
	readonly groupByAlertDetails?: "DisplayName" | "Severity"[];
	readonly groupByCustomDetails?: string[];
	readonly groupByEntities?:
		| "Account"
		| "AzureResource"
		| "CloudApplication"
		| "DNS"
		| "File"
		| "FileHash"
		| "Host"
		| "IP"
		| "MailCluster"
		| "MailMessage"
		| "Mailbox"
		| "Malware"
		| "Process"
		| "RegistryKey"
		| "RegistryValue"
		| "SecurityGroup"
		| "SubmissionMail"
		| "URL"[];
	readonly lookbackDuration: string;
	readonly matchingMethod: "AllEntities" | "anyAlert" | "Selected";
	readonly reopenClosedIncident: boolean;
}
export interface HostEntityProperties {
	readonly additionalData?: EntityCommonPropertiesAdditionalData;
	readonly azureID?: string;
	readonly dnsDomain?: string;
	readonly friendlyName?: string;
	readonly hostName?: string;
	readonly isDomainJoined?: boolean;
	readonly netBiosName?: string;
	readonly ntDomain?: string;
	readonly omsAgentID?: string;
	readonly osFamily?: "Android" | "IOS" | "Linux" | "Unknown";
	readonly osVersion?: string;
}
export interface HuntingBookmarkProperties {
	readonly additionalData?: EntityCommonPropertiesAdditionalData;
	readonly created?: string;
	readonly createdBy?: UserInfo;
	readonly displayName: string;
	readonly eventTime?: string;
	readonly friendlyName?: string;
	readonly incidentInfo?: IncidentInfo;
	readonly labels?: string[];
	readonly notes?: string;
	readonly query: string;
	readonly queryResult?: string;
	readonly updated?: string;
	readonly updatedBy?: UserInfo;
}
export interface IncidentAdditionalData {
	readonly alertProductNames?: string[];
	readonly alertsCount?: number;
	readonly bookmarksCount?: number;
	readonly commentsCount?: number;
	readonly providerIncidentUrl?: string;
	readonly tactics?:
		| "Collection"
		| "CommandAndControl"
		| "CredentialAccess"
		| "DefenseEvasion"
		| "Discovery"
		| "Execution"
		| "Exfiltration"
		| "Impact"
		| "ImpairProcessControl"
		| "InhibitResponseFunction"
		| "InitialAccess"
		| "LateralMovement"
		| "Persistence"
		| "PreAttack"
		| "PrivilegeEscalation"
		| "Reconnaissance"
		| "ResourceDevelopment"[];
	readonly techniques?: string[];
}
export interface IncidentCommentProperties {
	readonly author?: ClientInfo;
	readonly createdTimeUtc?: string;
	readonly lastModifiedTimeUtc?: string;
	readonly message: string;
}
export interface IncidentConfiguration {
	readonly createIncident: boolean;
	readonly groupingConfiguration?: GroupingConfiguration;
}
export interface IncidentInfo {
	readonly incidentId?: string;
	readonly relationName?: string;
	readonly severity?: "High" | "Informational" | "Low" | "Medium";
	readonly title?: string;
}
export interface IncidentLabel {
	readonly labelName: string;
	readonly labelType?: "AutoAssigned" | "User";
}
export interface IncidentOwnerInfo {
	readonly assignedTo?: string;
	readonly email?: string;
	readonly objectId?: string;
	readonly ownerType?: "Group" | "Unknown" | "User";
	readonly userPrincipalName?: string;
}
export interface IncidentProperties {
	readonly additionalData?: IncidentAdditionalData;
	readonly classification?: "BenignPositive" | "FalsePositive" | "TruePositive" | "Undetermined";
	readonly classificationComment?: string;
	readonly classificationReason?:
		| "InaccurateData"
		| "IncorrectAlertLogic"
		| "SuspiciousActivity"
		| "SuspiciousButExpected";
	readonly createdTimeUtc?: string;
	readonly description?: string;
	readonly firstActivityTimeUtc?: string;
	readonly incidentNumber?: number;
	readonly incidentUrl?: string;
	readonly labels?: IncidentLabel[];
	readonly lastActivityTimeUtc?: string;
	readonly lastModifiedTimeUtc?: string;
	readonly owner?: IncidentOwnerInfo;
	readonly providerIncidentId?: string;
	readonly providerName?: string;
	readonly relatedAnalyticRuleIds?: string[];
	readonly severity: "High" | "Informational" | "Low" | "Medium";
	readonly status: "Active" | "Closed" | "New";
	readonly teamInformation?: TeamInformation;
	readonly title: string;
}
export interface IncidentPropertiesAction {
	readonly classification?: "BenignPositive" | "FalsePositive" | "TruePositive" | "Undetermined";
	readonly classificationComment?: string;
	readonly classificationReason?:
		| "InaccurateData"
		| "IncorrectAlertLogic"
		| "SuspiciousActivity"
		| "SuspiciousButExpected";
	readonly labels?: IncidentLabel[];
	readonly owner?: IncidentOwnerInfo;
	readonly severity?: "High" | "Informational" | "Low" | "Medium";
	readonly status?: "Active" | "Closed" | "New";
}
export interface InstructionStepsInstructionsItem {
	readonly parameters?: any;
	readonly type: "CopyableLabel" | "InfoMessage" | "InstructionStepsGroup";
}
export interface IoTDataConnectorProperties {
	readonly dataTypes?: AlertsDataTypeOfDataConnector;
	readonly subscriptionId?: string;
}
export interface IoTDeviceEntityProperties {
	readonly additionalData?: EntityCommonPropertiesAdditionalData;
	readonly deviceId?: string;
	readonly deviceName?: string;
	readonly deviceType?: string;
	readonly edgeId?: string;
	readonly firmwareVersion?: string;
	readonly friendlyName?: string;
	readonly hostEntityId?: string;
	readonly iotHubEntityId?: string;
	readonly iotSecurityAgentId?: string;
	readonly ipAddressEntityId?: string;
	readonly macAddress?: string;
	readonly model?: string;
	readonly operatingSystem?: string;
	readonly protocols?: string[];
	readonly serialNumber?: string;
	readonly source?: string;
	readonly threatIntelligence?: ThreatIntelligence[];
	readonly vendor?: string;
}
export interface IpEntityProperties {
	readonly additionalData?: EntityCommonPropertiesAdditionalData;
	readonly address?: string;
	readonly friendlyName?: string;
	readonly location?: GeoLocation;
	readonly threatIntelligence?: ThreatIntelligence[];
}
export interface MailboxEntityProperties {
	readonly additionalData?: EntityCommonPropertiesAdditionalData;
	readonly displayName?: string;
	readonly externalDirectoryObjectId?: string;
	readonly friendlyName?: string;
	readonly mailboxPrimaryAddress?: string;
	readonly upn?: string;
}
export interface MailClusterEntityProperties {
	readonly additionalData?: EntityCommonPropertiesAdditionalData;
	readonly clusterGroup?: string;
	readonly clusterQueryEndTime?: string;
	readonly clusterQueryStartTime?: string;
	readonly clusterSourceIdentifier?: string;
	readonly clusterSourceType?: string;
	readonly countByDeliveryStatus?: any;
	readonly countByProtectionStatus?: any;
	readonly countByThreatType?: any;
	readonly friendlyName?: string;
	readonly isVolumeAnomaly?: boolean;
	readonly mailCount?: number;
	readonly networkMessageIds?: string[];
	readonly query?: string;
	readonly queryTime?: string;
	readonly source?: string;
	readonly threats?: string[];
}
export interface MailMessageEntityProperties {
	readonly additionalData?: EntityCommonPropertiesAdditionalData;
	readonly antispamDirection?: "Inbound" | "Intraorg" | "Outbound" | "Unknown";
	readonly bodyFingerprintBin1?: number;
	readonly bodyFingerprintBin2?: number;
	readonly bodyFingerprintBin3?: number;
	readonly bodyFingerprintBin4?: number;
	readonly bodyFingerprintBin5?: number;
	readonly deliveryAction?: "Blocked" | "Delivered" | "DeliveredAsSpam" | "Replaced";
	readonly deliveryLocation?:
		| "DeletedFolder"
		| "Dropped"
		| "External"
		| "Failed"
		| "Forwarded"
		| "Inbox"
		| "JunkFolder"
		| "Quarantine";
	readonly fileEntityIds?: string[];
	readonly friendlyName?: string;
	readonly internetMessageId?: string;
	readonly language?: string;
	readonly networkMessageId?: string;
	readonly p1Sender?: string;
	readonly p1SenderDisplayName?: string;
	readonly p1SenderDomain?: string;
	readonly p2Sender?: string;
	readonly p2SenderDisplayName?: string;
	readonly p2SenderDomain?: string;
	readonly receiveDate?: string;
	readonly recipient?: string;
	readonly senderIP?: string;
	readonly subject?: string;
	readonly threatDetectionMethods?: string[];
	readonly threats?: string[];
	readonly urls?: string[];
}
export interface MalwareEntityProperties {
	readonly additionalData?: EntityCommonPropertiesAdditionalData;
	readonly category?: string;
	readonly fileEntityIds?: string[];
	readonly friendlyName?: string;
	readonly malwareName?: string;
	readonly processEntityIds?: string[];
}
export interface McasDataConnectorDataTypes {
	readonly alerts: DataConnectorDataTypeCommon;
	readonly discoveryLogs?: DataConnectorDataTypeCommon;
}
export interface McasDataConnectorProperties {
	readonly dataTypes: McasDataConnectorDataTypes;
	readonly tenantId: string;
}
export interface MdatpDataConnectorProperties {
	readonly dataTypes?: AlertsDataTypeOfDataConnector;
	readonly tenantId: string;
}
export interface MetadataAuthor {
	readonly email?: string;
	readonly link?: string;
	readonly name?: string;
}
export interface MetadataCategories {
	readonly domains?: string[];
	readonly verticals?: string[];
}
export interface MetadataDependencies {
	readonly contentId?: string;
	readonly criteria?: MetadataDependencies[];
	readonly kind?:
		| "AnalyticsRule"
		| "AnalyticsRuleTemplate"
		| "AutomationRule"
		| "AzureFunction"
		| "DataConnector"
		| "DataType"
		| "HuntingQuery"
		| "InvestigationQuery"
		| "LogicAppsCustomConnector"
		| "Parser"
		| "Playbook"
		| "PlaybookTemplate"
		| "Solution"
		| "Watchlist"
		| "WatchlistTemplate"
		| "Workbook"
		| "WorkbookTemplate";
	readonly name?: string;
	readonly operator?: "AND" | "OR";
	readonly version?: string;
}
export interface MetadataProperties {
	readonly author?: MetadataAuthor;
	readonly categories?: MetadataCategories;
	readonly contentId?: string;
	readonly contentSchemaVersion?: string;
	readonly customVersion?: string;
	readonly dependencies?: MetadataDependencies;
	readonly firstPublishDate?: string;
	readonly icon?: string;
	readonly kind:
		| "AnalyticsRule"
		| "AnalyticsRuleTemplate"
		| "AutomationRule"
		| "AzureFunction"
		| "DataConnector"
		| "DataType"
		| "HuntingQuery"
		| "InvestigationQuery"
		| "LogicAppsCustomConnector"
		| "Parser"
		| "Playbook"
		| "PlaybookTemplate"
		| "Solution"
		| "Watchlist"
		| "WatchlistTemplate"
		| "Workbook"
		| "WorkbookTemplate";
	readonly lastPublishDate?: string;
	readonly parentId: string;
	readonly previewImages?: string[];
	readonly previewImagesDark?: string[];
	readonly providers?: string[];
	readonly source?: MetadataSource;
	readonly support?: MetadataSupport;
	readonly threatAnalysisTactics?: string[];
	readonly threatAnalysisTechniques?: string[];
	readonly version?: string;
}
export interface MetadataSource {
	readonly kind: "Community" | "LocalWorkspace" | "Solution" | "SourceRepository";
	readonly name?: string;
	readonly sourceId?: string;
}
export interface MetadataSupport {
	readonly email?: string;
	readonly link?: string;
	readonly name?: string;
	readonly tier: "Community" | "Microsoft" | "Partner";
}
export interface MicrosoftSecurityIncidentCreationAlertRuleProperties {
	readonly alertRuleTemplateName?: string;
	readonly description?: string;
	readonly displayName: string;
	readonly displayNamesExcludeFilter?: string[];
	readonly displayNamesFilter?: string[];
	readonly enabled: boolean;
	readonly lastModifiedUtc?: string;
	readonly productFilter:
		| "Azure Active Directory Identity Protection"
		| "Azure Advanced Threat Protection"
		| "Azure Security Center for IoT"
		| "Azure Security Center"
		| "Microsoft Cloud App Security"
		| "Microsoft Defender Advanced Threat Protection"
		| "Office 365 Advanced Threat Protection";
	readonly severitiesFilter?: "High" | "Informational" | "Low" | "Medium"[];
}
export interface MicrosoftSecurityIncidentCreationAlertRuleTemplateProperties {
	readonly alertRulesCreatedByTemplateCount?: number;
	readonly createdDateUTC?: string;
	readonly description?: string;
	readonly displayName?: string;
	readonly displayNamesExcludeFilter?: string[];
	readonly displayNamesFilter?: string[];
	readonly lastUpdatedDateUTC?: string;
	readonly productFilter?:
		| "Azure Active Directory Identity Protection"
		| "Azure Advanced Threat Protection"
		| "Azure Security Center for IoT"
		| "Azure Security Center"
		| "Microsoft Cloud App Security"
		| "Microsoft Defender Advanced Threat Protection"
		| "Office 365 Advanced Threat Protection";
	readonly requiredDataConnectors?: AlertRuleTemplateDataSource[];
	readonly severitiesFilter?: "High" | "Informational" | "Low" | "Medium"[];
	readonly status?: "Available" | "Installed" | "NotAvailable";
}
export interface MLBehaviorAnalyticsAlertRuleProperties {
	readonly alertRuleTemplateName: string;
	readonly description?: string;
	readonly displayName?: string;
	readonly enabled: boolean;
	readonly lastModifiedUtc?: string;
	readonly severity?: "High" | "Informational" | "Low" | "Medium";
	readonly tactics?:
		| "Collection"
		| "CommandAndControl"
		| "CredentialAccess"
		| "DefenseEvasion"
		| "Discovery"
		| "Execution"
		| "Exfiltration"
		| "Impact"
		| "ImpairProcessControl"
		| "InhibitResponseFunction"
		| "InitialAccess"
		| "LateralMovement"
		| "Persistence"
		| "PreAttack"
		| "PrivilegeEscalation"
		| "Reconnaissance"
		| "ResourceDevelopment"[];
	readonly techniques?: string[];
}
export interface MLBehaviorAnalyticsAlertRuleTemplateProperties {
	readonly alertRulesCreatedByTemplateCount?: number;
	readonly createdDateUTC?: string;
	readonly description?: string;
	readonly displayName?: string;
	readonly lastUpdatedDateUTC?: string;
	readonly requiredDataConnectors?: AlertRuleTemplateDataSource[];
	readonly severity: "High" | "Informational" | "Low" | "Medium";
	readonly status?: "Available" | "Installed" | "NotAvailable";
	readonly tactics?:
		| "Collection"
		| "CommandAndControl"
		| "CredentialAccess"
		| "DefenseEvasion"
		| "Discovery"
		| "Execution"
		| "Exfiltration"
		| "Impact"
		| "ImpairProcessControl"
		| "InhibitResponseFunction"
		| "InitialAccess"
		| "LateralMovement"
		| "Persistence"
		| "PreAttack"
		| "PrivilegeEscalation"
		| "Reconnaissance"
		| "ResourceDevelopment"[];
	readonly techniques?: string[];
}
export interface MstiDataConnectorDataTypes {
	readonly bingSafetyPhishingURL: MstiDataConnectorDataTypesBingSafetyPhishingURL;
	readonly microsoftEmergingThreatFeed: MstiDataConnectorDataTypesMicrosoftEmergingThreatFeed;
}
export interface MstiDataConnectorDataTypesBingSafetyPhishingURL {
	readonly lookbackPeriod: string;
	readonly state: "Disabled" | "Enabled";
}
export interface MstiDataConnectorDataTypesMicrosoftEmergingThreatFeed {
	readonly lookbackPeriod: string;
	readonly state: "Disabled" | "Enabled";
}
export interface MstiDataConnectorProperties {
	readonly dataTypes: MstiDataConnectorDataTypes;
	readonly tenantId: string;
}
export interface MTPDataConnectorDataTypes {
	readonly incidents: MTPDataConnectorDataTypesIncidents;
}
export interface MTPDataConnectorDataTypesIncidents {
	readonly state: "Disabled" | "Enabled";
}
export interface MTPDataConnectorProperties {
	readonly dataTypes: MTPDataConnectorDataTypes;
	readonly tenantId: string;
}
export interface NrtAlertRuleProperties {
	readonly alertDetailsOverride?: AlertDetailsOverride;
	readonly alertRuleTemplateName?: string;
	readonly customDetails?: NrtAlertRulePropertiesCustomDetails;
	readonly description?: string;
	readonly displayName: string;
	readonly enabled: boolean;
	readonly entityMappings?: EntityMapping[];
	readonly incidentConfiguration?: IncidentConfiguration;
	readonly lastModifiedUtc?: string;
	readonly query: string;
	readonly severity: "High" | "Informational" | "Low" | "Medium";
	readonly suppressionDuration: string;
	readonly suppressionEnabled: boolean;
	readonly tactics?:
		| "Collection"
		| "CommandAndControl"
		| "CredentialAccess"
		| "DefenseEvasion"
		| "Discovery"
		| "Execution"
		| "Exfiltration"
		| "Impact"
		| "ImpairProcessControl"
		| "InhibitResponseFunction"
		| "InitialAccess"
		| "LateralMovement"
		| "Persistence"
		| "PreAttack"
		| "PrivilegeEscalation"
		| "Reconnaissance"
		| "ResourceDevelopment"[];
	readonly techniques?: string[];
	readonly templateVersion?: string;
}
export interface NrtAlertRulePropertiesCustomDetails {
	readonly [key: string]: string;
}
export interface NrtAlertRuleTemplateProperties {
	readonly alertDetailsOverride?: AlertDetailsOverride;
	readonly alertRulesCreatedByTemplateCount?: number;
	readonly createdDateUTC?: string;
	readonly customDetails?: QueryBasedAlertRuleTemplatePropertiesCustomDetails;
	readonly description?: string;
	readonly displayName?: string;
	readonly entityMappings?: EntityMapping[];
	readonly lastUpdatedDateUTC?: string;
	readonly query?: string;
	readonly requiredDataConnectors?: AlertRuleTemplateDataSource[];
	readonly severity?: "High" | "Informational" | "Low" | "Medium";
	readonly status?: "Available" | "Installed" | "NotAvailable";
	readonly tactics?:
		| "Collection"
		| "CommandAndControl"
		| "CredentialAccess"
		| "DefenseEvasion"
		| "Discovery"
		| "Execution"
		| "Exfiltration"
		| "Impact"
		| "ImpairProcessControl"
		| "InhibitResponseFunction"
		| "InitialAccess"
		| "LateralMovement"
		| "Persistence"
		| "PreAttack"
		| "PrivilegeEscalation"
		| "Reconnaissance"
		| "ResourceDevelopment"[];
	readonly techniques?: string[];
	readonly version?: string;
}
export interface Office365ProjectConnectorDataTypes {
	readonly logs: Office365ProjectConnectorDataTypesLogs;
}
export interface Office365ProjectConnectorDataTypesLogs {
	readonly state: "Disabled" | "Enabled";
}
export interface Office365ProjectDataConnectorProperties {
	readonly dataTypes: Office365ProjectConnectorDataTypes;
	readonly tenantId: string;
}
export interface OfficeATPDataConnectorProperties {
	readonly dataTypes?: AlertsDataTypeOfDataConnector;
	readonly tenantId: string;
}
export interface OfficeConsentProperties {
	readonly consentId?: string;
	readonly tenantId?: string;
}
export interface OfficeDataConnectorDataTypes {
	readonly exchange: OfficeDataConnectorDataTypesExchange;
	readonly sharePoint: OfficeDataConnectorDataTypesSharePoint;
	readonly teams: OfficeDataConnectorDataTypesTeams;
}
export interface OfficeDataConnectorDataTypesExchange {
	readonly state: "Disabled" | "Enabled";
}
export interface OfficeDataConnectorDataTypesSharePoint {
	readonly state: "Disabled" | "Enabled";
}
export interface OfficeDataConnectorDataTypesTeams {
	readonly state: "Disabled" | "Enabled";
}
export interface OfficeDataConnectorProperties {
	readonly dataTypes: OfficeDataConnectorDataTypes;
	readonly tenantId: string;
}
export interface OfficeIRMDataConnectorProperties {
	readonly dataTypes?: AlertsDataTypeOfDataConnector;
	readonly tenantId: string;
}
export interface OfficePowerBIConnectorDataTypes {
	readonly logs: OfficePowerBIConnectorDataTypesLogs;
}
export interface OfficePowerBIConnectorDataTypesLogs {
	readonly state: "Disabled" | "Enabled";
}
export interface OfficePowerBIDataConnectorProperties {
	readonly dataTypes: OfficePowerBIConnectorDataTypes;
	readonly tenantId: string;
}
export interface Permissions {
	readonly customs?: PermissionsCustomsItem[];
	readonly resourceProvider?: PermissionsResourceProviderItem[];
}
export interface PermissionsCustomsItem {
	readonly description?: string;
	readonly name?: string;
}
export interface PermissionsResourceProviderItem {
	readonly permissionsDisplayText?: string;
	readonly provider?:
		| "Microsoft.Authorization/policyAssignments"
		| "Microsoft.OperationalInsights/solutions"
		| "Microsoft.OperationalInsights/workspaces"
		| "Microsoft.OperationalInsights/workspaces/datasources"
		| "Microsoft.OperationalInsights/workspaces/sharedKeys"
		| "microsoft.aadiam/diagnosticSettings";
	readonly providerDisplayName?: string;
	readonly requiredPermissions?: RequiredPermissions;
	readonly scope?: "ResourceGroup" | "Subscription" | "Workspace";
}
export interface PlaybookActionProperties {
	readonly logicAppResourceId?: string;
	readonly tenantId?: string;
}
export interface ProcessEntityProperties {
	readonly accountEntityId?: string;
	readonly additionalData?: EntityCommonPropertiesAdditionalData;
	readonly commandLine?: string;
	readonly creationTimeUtc?: string;
	readonly elevationToken?: "Default" | "Full";
	readonly friendlyName?: string;
	readonly hostEntityId?: string;
	readonly hostLogonSessionEntityId?: string;
	readonly imageFileEntityId?: string;
	readonly parentProcessEntityId?: string;
	readonly processId?: string;
}
export interface QueryBasedAlertRuleTemplatePropertiesCustomDetails {
	readonly [key: string]: string;
}
export interface RegistryKeyEntityProperties {
	readonly additionalData?: EntityCommonPropertiesAdditionalData;
	readonly friendlyName?: string;
	readonly hive?:
		| "HKEY_A"
		| "HKEY_CLASSES_ROOT"
		| "HKEY_CURRENT_CONFIG"
		| "HKEY_CURRENT_USER"
		| "HKEY_CURRENT_USER_LOCAL_SETTINGS"
		| "HKEY_LOCAL_MACHINE"
		| "HKEY_PERFORMANCE_DATA"
		| "HKEY_PERFORMANCE_NLSTEXT"
		| "HKEY_PERFORMANCE_TEXT"
		| "HKEY_USERS";
	readonly key?: string;
}
export interface RegistryValueEntityProperties {
	readonly additionalData?: EntityCommonPropertiesAdditionalData;
	readonly friendlyName?: string;
	readonly keyEntityId?: string;
	readonly valueData?: string;
	readonly valueName?: string;
	readonly valueType?: "Binary" | "DWord" | "ExpandString" | "MultiString" | "None" | "QWord" | "String" | "Unknown";
}
export interface RelationProperties {
	readonly relatedResourceId: string;
	readonly relatedResourceKind?: string;
	readonly relatedResourceName?: string;
	readonly relatedResourceType?: string;
}
export interface Repository {
	readonly branch?: string;
	readonly deploymentLogsUrl?: string;
	readonly displayUrl?: string;
	readonly pathMapping?: ContentPathMap[];
	readonly url?: string;
}
export interface RepositoryResourceInfo {
	readonly azureDevOpsResourceInfo?: AzureDevOpsResourceInfo;
	readonly gitHubResourceInfo?: GitHubResourceInfo;
	readonly webhook?: Webhook;
}
export interface RequiredPermissions {
	readonly action?: boolean;
	readonly delete?: boolean;
	readonly read?: boolean;
	readonly write?: boolean;
}
export interface ScheduledAlertRuleCommonPropertiesCustomDetails {
	readonly [key: string]: string;
}
export interface ScheduledAlertRuleProperties {
	readonly alertDetailsOverride?: AlertDetailsOverride;
	readonly alertRuleTemplateName?: string;
	readonly customDetails?: ScheduledAlertRuleCommonPropertiesCustomDetails;
	readonly description?: string;
	readonly displayName: string;
	readonly enabled: boolean;
	readonly entityMappings?: EntityMapping[];
	readonly eventGroupingSettings?: EventGroupingSettings;
	readonly incidentConfiguration?: IncidentConfiguration;
	readonly lastModifiedUtc?: string;
	readonly query?: string;
	readonly queryFrequency?: string;
	readonly queryPeriod?: string;
	readonly severity?: "High" | "Informational" | "Low" | "Medium";
	readonly suppressionDuration: string;
	readonly suppressionEnabled: boolean;
	readonly tactics?:
		| "Collection"
		| "CommandAndControl"
		| "CredentialAccess"
		| "DefenseEvasion"
		| "Discovery"
		| "Execution"
		| "Exfiltration"
		| "Impact"
		| "ImpairProcessControl"
		| "InhibitResponseFunction"
		| "InitialAccess"
		| "LateralMovement"
		| "Persistence"
		| "PreAttack"
		| "PrivilegeEscalation"
		| "Reconnaissance"
		| "ResourceDevelopment"[];
	readonly techniques?: string[];
	readonly templateVersion?: string;
	readonly triggerOperator?: "Equal" | "GreaterThan" | "LessThan";
	readonly triggerThreshold?: number;
}
export interface ScheduledAlertRuleTemplateProperties {
	readonly alertDetailsOverride?: AlertDetailsOverride;
	readonly alertRulesCreatedByTemplateCount?: number;
	readonly createdDateUTC?: string;
	readonly customDetails?: ScheduledAlertRuleTemplatePropertiesCustomDetails;
	readonly description?: string;
	readonly displayName?: string;
	readonly entityMappings?: EntityMapping[];
	readonly eventGroupingSettings?: EventGroupingSettings;
	readonly lastUpdatedDateUTC?: string;
	readonly query?: string;
	readonly queryFrequency?: string;
	readonly queryPeriod?: string;
	readonly requiredDataConnectors?: AlertRuleTemplateDataSource[];
	readonly severity?: "High" | "Informational" | "Low" | "Medium";
	readonly status?: "Available" | "Installed" | "NotAvailable";
	readonly tactics?:
		| "Collection"
		| "CommandAndControl"
		| "CredentialAccess"
		| "DefenseEvasion"
		| "Discovery"
		| "Execution"
		| "Exfiltration"
		| "Impact"
		| "ImpairProcessControl"
		| "InhibitResponseFunction"
		| "InitialAccess"
		| "LateralMovement"
		| "Persistence"
		| "PreAttack"
		| "PrivilegeEscalation"
		| "Reconnaissance"
		| "ResourceDevelopment"[];
	readonly techniques?: string[];
	readonly triggerOperator?: "Equal" | "GreaterThan" | "LessThan";
	readonly triggerThreshold?: number;
	readonly version?: string;
}
export interface ScheduledAlertRuleTemplatePropertiesCustomDetails {
	readonly [key: string]: string;
}
export interface SecurityAlertProperties {
	readonly additionalData?: EntityCommonPropertiesAdditionalData;
	readonly alertDisplayName?: string;
	readonly alertLink?: string;
	readonly alertType?: string;
	readonly compromisedEntity?: string;
	readonly confidenceLevel?: "High" | "Low" | "Unknown";
	readonly confidenceReasons?: SecurityAlertPropertiesConfidenceReasonsItem[];
	readonly confidenceScore?: number;
	readonly confidenceScoreStatus?: "Final" | "InProcess" | "NotApplicable" | "NotFinal";
	readonly description?: string;
	readonly endTimeUtc?: string;
	readonly friendlyName?: string;
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
		| "LateralMovement"
		| "Persistence"
		| "PrivilegeEscalation"
		| "Probing"
		| "Unknown";
	readonly processingEndTime?: string;
	readonly productComponentName?: string;
	readonly productName?: string;
	readonly productVersion?: string;
	readonly providerAlertId?: string;
	readonly remediationSteps?: string[];
	readonly resourceIdentifiers?: any[];
	readonly severity?: "High" | "Informational" | "Low" | "Medium";
	readonly startTimeUtc?: string;
	readonly status?: "Dismissed" | "InProgress" | "New" | "Resolved" | "Unknown";
	readonly systemAlertId?: string;
	readonly tactics?:
		| "Collection"
		| "CommandAndControl"
		| "CredentialAccess"
		| "DefenseEvasion"
		| "Discovery"
		| "Execution"
		| "Exfiltration"
		| "Impact"
		| "ImpairProcessControl"
		| "InhibitResponseFunction"
		| "InitialAccess"
		| "LateralMovement"
		| "Persistence"
		| "PreAttack"
		| "PrivilegeEscalation"
		| "Reconnaissance"
		| "ResourceDevelopment"[];
	readonly timeGenerated?: string;
	readonly vendorName?: string;
}
export interface SecurityAlertPropertiesConfidenceReasonsItem {
	readonly reason?: string;
	readonly reasonType?: string;
}
export interface SecurityGroupEntityProperties {
	readonly additionalData?: EntityCommonPropertiesAdditionalData;
	readonly distinguishedName?: string;
	readonly friendlyName?: string;
	readonly objectGuid?: string;
	readonly sid?: string;
}
export interface SecurityMLAnalyticsSettingsDataSource {
	readonly connectorId?: string;
	readonly dataTypes?: string[];
}
export interface SentinelOnboardingStateProperties {
	readonly customerManagedKey?: boolean;
}
export interface SourceControlProperties {
	readonly contentTypes: "AnalyticRule" | "Workbook"[];
	readonly description?: string;
	readonly displayName: string;
	readonly id?: string;
	readonly lastDeploymentInfo?: DeploymentInfo;
	readonly repository: Repository;
	readonly repositoryResourceInfo?: RepositoryResourceInfo;
	readonly repoType: "DevOps" | "Github";
	readonly version?: "V1" | "V2";
}
export interface SubmissionMailEntityProperties {
	readonly additionalData?: EntityCommonPropertiesAdditionalData;
	readonly friendlyName?: string;
	readonly networkMessageId?: string;
	readonly recipient?: string;
	readonly reportType?: string;
	readonly sender?: string;
	readonly senderIp?: string;
	readonly subject?: string;
	readonly submissionDate?: string;
	readonly submissionId?: string;
	readonly submitter?: string;
	readonly timestamp?: string;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface TeamInformation {
	readonly description?: string;
	readonly name?: string;
	readonly primaryChannelUrl?: string;
	readonly teamCreationTimeUtc?: string;
	readonly teamId?: string;
}
export interface ThreatIntelligence {
	readonly confidence?: number;
	readonly providerName?: string;
	readonly reportLink?: string;
	readonly threatDescription?: string;
	readonly threatName?: string;
	readonly threatType?: string;
}
export interface ThreatIntelligenceAlertRuleProperties {
	readonly alertRuleTemplateName: string;
	readonly description?: string;
	readonly displayName?: string;
	readonly enabled: boolean;
	readonly lastModifiedUtc?: string;
	readonly severity?: "High" | "Informational" | "Low" | "Medium";
	readonly tactics?:
		| "Collection"
		| "CommandAndControl"
		| "CredentialAccess"
		| "DefenseEvasion"
		| "Discovery"
		| "Execution"
		| "Exfiltration"
		| "Impact"
		| "ImpairProcessControl"
		| "InhibitResponseFunction"
		| "InitialAccess"
		| "LateralMovement"
		| "Persistence"
		| "PreAttack"
		| "PrivilegeEscalation"
		| "Reconnaissance"
		| "ResourceDevelopment"[];
	readonly techniques?: string[];
}
export interface ThreatIntelligenceAlertRuleTemplateProperties {
	readonly alertRulesCreatedByTemplateCount?: number;
	readonly createdDateUTC?: string;
	readonly description?: string;
	readonly displayName?: string;
	readonly lastUpdatedDateUTC?: string;
	readonly requiredDataConnectors?: AlertRuleTemplateDataSource[];
	readonly severity: "High" | "Informational" | "Low" | "Medium";
	readonly status?: "Available" | "Installed" | "NotAvailable";
	readonly tactics?:
		| "Collection"
		| "CommandAndControl"
		| "CredentialAccess"
		| "DefenseEvasion"
		| "Discovery"
		| "Execution"
		| "Exfiltration"
		| "Impact"
		| "ImpairProcessControl"
		| "InhibitResponseFunction"
		| "InitialAccess"
		| "LateralMovement"
		| "Persistence"
		| "PreAttack"
		| "PrivilegeEscalation"
		| "Reconnaissance"
		| "ResourceDevelopment"[];
	readonly techniques?: string[];
}
export interface ThreatIntelligenceExternalReference {
	readonly description?: string;
	readonly externalId?: string;
	readonly hashes?: ThreatIntelligenceExternalReferenceHashes;
	readonly sourceName?: string;
	readonly url?: string;
}
export interface ThreatIntelligenceExternalReferenceHashes {
	readonly [key: string]: string;
}
export interface ThreatIntelligenceGranularMarkingModel {
	readonly language?: string;
	readonly markingRef?: number;
	readonly selectors?: string[];
}
export interface ThreatIntelligenceIndicatorProperties {
	readonly additionalData?: EntityCommonPropertiesAdditionalData;
	readonly confidence?: number;
	readonly created?: string;
	readonly createdByRef?: string;
	readonly defanged?: boolean;
	readonly description?: string;
	readonly displayName?: string;
	readonly extensions?: ThreatIntelligenceIndicatorPropertiesExtensions;
	readonly externalId?: string;
	readonly externalLastUpdatedTimeUtc?: string;
	readonly externalReferences?: ThreatIntelligenceExternalReference[];
	readonly friendlyName?: string;
	readonly granularMarkings?: ThreatIntelligenceGranularMarkingModel[];
	readonly indicatorTypes?: string[];
	readonly killChainPhases?: ThreatIntelligenceKillChainPhase[];
	readonly labels?: string[];
	readonly language?: string;
	readonly lastUpdatedTimeUtc?: string;
	readonly modified?: string;
	readonly objectMarkingRefs?: string[];
	readonly parsedPattern?: ThreatIntelligenceParsedPattern[];
	readonly pattern?: string;
	readonly patternType?: string;
	readonly patternVersion?: string;
	readonly revoked?: boolean;
	readonly source?: string;
	readonly threatIntelligenceTags?: string[];
	readonly threatTypes?: string[];
	readonly validFrom?: string;
	readonly validUntil?: string;
}
export interface ThreatIntelligenceIndicatorPropertiesExtensions {
	readonly [key: string]: any;
}
export interface ThreatIntelligenceKillChainPhase {
	readonly killChainName?: string;
	readonly phaseName?: string;
}
export interface ThreatIntelligenceParsedPattern {
	readonly patternTypeKey?: string;
	readonly patternTypeValues?: ThreatIntelligenceParsedPatternTypeValue[];
}
export interface ThreatIntelligenceParsedPatternTypeValue {
	readonly value?: string;
	readonly valueType?: string;
}
export interface TIDataConnectorDataTypes {
	readonly indicators: TIDataConnectorDataTypesIndicators;
}
export interface TIDataConnectorDataTypesIndicators {
	readonly state: "Disabled" | "Enabled";
}
export interface TIDataConnectorProperties {
	readonly dataTypes: TIDataConnectorDataTypes;
	readonly tenantId: string;
	readonly tipLookbackPeriod?: string;
}
export interface TiTaxiiDataConnectorDataTypes {
	readonly taxiiClient: TiTaxiiDataConnectorDataTypesTaxiiClient;
}
export interface TiTaxiiDataConnectorDataTypesTaxiiClient {
	readonly state: "Disabled" | "Enabled";
}
export interface TiTaxiiDataConnectorProperties {
	readonly collectionId?: string;
	readonly dataTypes: TiTaxiiDataConnectorDataTypes;
	readonly friendlyName?: string;
	readonly password?: string;
	readonly pollingFrequency: "OnceADay" | "OnceAMinute" | "OnceAnHour";
	readonly taxiiLookbackPeriod?: string;
	readonly taxiiServer?: string;
	readonly tenantId: string;
	readonly userName?: string;
	readonly workspaceId?: string;
}
export interface UebaProperties {
	readonly dataSources?: "AuditLogs" | "AzureActivity" | "SecurityEvent" | "SigninLogs"[];
}
export interface UrlEntityProperties {
	readonly additionalData?: EntityCommonPropertiesAdditionalData;
	readonly friendlyName?: string;
	readonly url?: string;
}
export interface UserInfo {
	readonly email?: string;
	readonly name?: string;
	readonly objectId?: string;
}
export interface WatchlistItemProperties {
	readonly created?: string;
	readonly createdBy?: UserInfo;
	readonly entityMapping?: WatchlistItemPropertiesEntityMapping;
	readonly isDeleted?: boolean;
	readonly itemsKeyValue: WatchlistItemPropertiesItemsKeyValue;
	readonly tenantId?: string;
	readonly updated?: string;
	readonly updatedBy?: UserInfo;
	readonly watchlistItemId?: string;
	readonly watchlistItemType?: string;
}
export interface WatchlistItemPropertiesEntityMapping {
	readonly [key: string]: any;
}
export interface WatchlistItemPropertiesItemsKeyValue {
	readonly [key: string]: any;
}
export interface WatchlistProperties {
	readonly contentType?: string;
	readonly created?: string;
	readonly createdBy?: UserInfo;
	readonly defaultDuration?: string;
	readonly description?: string;
	readonly displayName: string;
	readonly isDeleted?: boolean;
	readonly itemsSearchKey: string;
	readonly labels?: string[];
	readonly numberOfLinesToSkip?: number;
	readonly provider: string;
	readonly rawContent?: string;
	readonly source?: string;
	readonly sourceType?: "Local file" | "Remote storage";
	readonly tenantId?: string;
	readonly updated?: string;
	readonly updatedBy?: UserInfo;
	readonly uploadStatus?: string;
	readonly watchlistAlias?: string;
	readonly watchlistId?: string;
	readonly watchlistType?: string;
}
export interface Webhook {
	readonly rotateWebhookSecret?: boolean;
	readonly webhookId?: string;
	readonly webhookSecretUpdateTime?: string;
	readonly webhookUrl?: string;
}
export type alertRules =
	| alertRules_Fusion
	| alertRules_MicrosoftSecurityIncidentCreation
	| alertRules_MLBehaviorAnalytics
	| alertRules_NRT
	| alertRules_Scheduled
	| alertRules_ThreatIntelligence;
export type alertRuleTemplates =
	| alertRuleTemplates_Fusion
	| alertRuleTemplates_MicrosoftSecurityIncidentCreation
	| alertRuleTemplates_MLBehaviorAnalytics
	| alertRuleTemplates_NRT
	| alertRuleTemplates_Scheduled
	| alertRuleTemplates_ThreatIntelligence;
export type dataConnectors =
	| dataConnectors_AmazonWebServicesCloudTrail
	| dataConnectors_AmazonWebServicesS3
	| dataConnectors_APIPolling
	| dataConnectors_AzureActiveDirectory
	| dataConnectors_AzureAdvancedThreatProtection
	| dataConnectors_AzureSecurityCenter
	| dataConnectors_Dynamics365
	| dataConnectors_GenericUI
	| dataConnectors_IOT
	| dataConnectors_MicrosoftCloudAppSecurity
	| dataConnectors_MicrosoftDefenderAdvancedThreatProtection
	| dataConnectors_MicrosoftThreatIntelligence
	| dataConnectors_MicrosoftThreatProtection
	| dataConnectors_Office365
	| dataConnectors_Office365Project
	| dataConnectors_OfficeATP
	| dataConnectors_OfficeIRM
	| dataConnectors_OfficePowerBI
	| dataConnectors_ThreatIntelligence
	| dataConnectors_ThreatIntelligenceTaxii;
export type entities =
	| entities_Account
	| entities_AzureResource
	| entities_Bookmark
	| entities_CloudApplication
	| entities_DnsResolution
	| entities_File
	| entities_FileHash
	| entities_Host
	| entities_IoTDevice
	| entities_Ip
	| entities_Mailbox
	| entities_MailCluster
	| entities_MailMessage
	| entities_Malware
	| entities_Process
	| entities_RegistryKey
	| entities_RegistryValue
	| entities_SecurityAlert
	| entities_SecurityGroup
	| entities_SubmissionMail
	| entities_Url;
export type entityQueries = entityQueries_Activity | entityQueries_Expansion;
export type entityQueryTemplates = entityQueryTemplates_Activity;
export type securityMLAnalyticsSettings = securityMLAnalyticsSettings_Anomaly;
export type settings = settings_Anomalies | settings_EntityAnalytics | settings_EyesOn | settings_Ueba;
export default {
	"alertRules/Fusion": alertRules_Fusion,
	"alertRules/MicrosoftSecurityIncidentCreation": alertRules_MicrosoftSecurityIncidentCreation,
	"alertRules/MLBehaviorAnalytics": alertRules_MLBehaviorAnalytics,
	"alertRules/NRT": alertRules_NRT,
	"alertRules/Scheduled": alertRules_Scheduled,
	"alertRules/ThreatIntelligence": alertRules_ThreatIntelligence,
	"alertRules/actions": alertRules_actions,
	"alertRuleTemplates/Fusion": alertRuleTemplates_Fusion,
	"alertRuleTemplates/MicrosoftSecurityIncidentCreation": alertRuleTemplates_MicrosoftSecurityIncidentCreation,
	"alertRuleTemplates/MLBehaviorAnalytics": alertRuleTemplates_MLBehaviorAnalytics,
	"alertRuleTemplates/NRT": alertRuleTemplates_NRT,
	"alertRuleTemplates/Scheduled": alertRuleTemplates_Scheduled,
	"alertRuleTemplates/ThreatIntelligence": alertRuleTemplates_ThreatIntelligence,
	automationRules: automationRules,
	bookmarks: bookmarks,
	"bookmarks/relations": bookmarks_relations,
	"dataConnectors/AmazonWebServicesCloudTrail": dataConnectors_AmazonWebServicesCloudTrail,
	"dataConnectors/AmazonWebServicesS3": dataConnectors_AmazonWebServicesS3,
	"dataConnectors/APIPolling": dataConnectors_APIPolling,
	"dataConnectors/AzureActiveDirectory": dataConnectors_AzureActiveDirectory,
	"dataConnectors/AzureAdvancedThreatProtection": dataConnectors_AzureAdvancedThreatProtection,
	"dataConnectors/AzureSecurityCenter": dataConnectors_AzureSecurityCenter,
	"dataConnectors/Dynamics365": dataConnectors_Dynamics365,
	"dataConnectors/GenericUI": dataConnectors_GenericUI,
	"dataConnectors/IOT": dataConnectors_IOT,
	"dataConnectors/MicrosoftCloudAppSecurity": dataConnectors_MicrosoftCloudAppSecurity,
	"dataConnectors/MicrosoftDefenderAdvancedThreatProtection": dataConnectors_MicrosoftDefenderAdvancedThreatProtection,
	"dataConnectors/MicrosoftThreatIntelligence": dataConnectors_MicrosoftThreatIntelligence,
	"dataConnectors/MicrosoftThreatProtection": dataConnectors_MicrosoftThreatProtection,
	"dataConnectors/Office365": dataConnectors_Office365,
	"dataConnectors/Office365Project": dataConnectors_Office365Project,
	"dataConnectors/OfficeATP": dataConnectors_OfficeATP,
	"dataConnectors/OfficeIRM": dataConnectors_OfficeIRM,
	"dataConnectors/OfficePowerBI": dataConnectors_OfficePowerBI,
	"dataConnectors/ThreatIntelligence": dataConnectors_ThreatIntelligence,
	"dataConnectors/ThreatIntelligenceTaxii": dataConnectors_ThreatIntelligenceTaxii,
	"entities/Account": entities_Account,
	"entities/AzureResource": entities_AzureResource,
	"entities/Bookmark": entities_Bookmark,
	"entities/CloudApplication": entities_CloudApplication,
	"entities/DnsResolution": entities_DnsResolution,
	"entities/File": entities_File,
	"entities/FileHash": entities_FileHash,
	"entities/Host": entities_Host,
	"entities/IoTDevice": entities_IoTDevice,
	"entities/Ip": entities_Ip,
	"entities/Mailbox": entities_Mailbox,
	"entities/MailCluster": entities_MailCluster,
	"entities/MailMessage": entities_MailMessage,
	"entities/Malware": entities_Malware,
	"entities/Process": entities_Process,
	"entities/RegistryKey": entities_RegistryKey,
	"entities/RegistryValue": entities_RegistryValue,
	"entities/SecurityAlert": entities_SecurityAlert,
	"entities/SecurityGroup": entities_SecurityGroup,
	"entities/SubmissionMail": entities_SubmissionMail,
	"entities/Url": entities_Url,
	"entities/relations": entities_relations,
	"entityQueries/Activity": entityQueries_Activity,
	"entityQueries/Expansion": entityQueries_Expansion,
	"entityQueryTemplates/Activity": entityQueryTemplates_Activity,
	incidents: incidents,
	"incidents/comments": incidents_comments,
	"incidents/relations": incidents_relations,
	metadata: metadata,
	officeConsents: officeConsents,
	onboardingStates: onboardingStates,
	"securityMLAnalyticsSettings/Anomaly": securityMLAnalyticsSettings_Anomaly,
	"settings/Anomalies": settings_Anomalies,
	"settings/EntityAnalytics": settings_EntityAnalytics,
	"settings/EyesOn": settings_EyesOn,
	"settings/Ueba": settings_Ueba,
	sourcecontrols: sourcecontrols,
	"threatIntelligence/indicators": threatIntelligence_indicators,
	watchlists: watchlists,
	"watchlists/watchlistItems": watchlists_watchlistItems,
};

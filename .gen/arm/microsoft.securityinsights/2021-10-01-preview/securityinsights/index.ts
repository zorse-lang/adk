import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class alertRules_Fusion
	extends ArmResource<alertRules_FusionComponentInputs>
	implements alertRules_FusionComponentOutputs
{
	constructor(entity: ADKEntity, options: alertRules_FusionComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/alertRules", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/alertRules";
}
export interface alertRules_FusionComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/alertRules";
}
export interface alertRules_FusionComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "Fusion";
	readonly properties?: FusionAlertRuleProperties | undefined;
}
export class alertRules_MicrosoftSecurityIncidentCreation
	extends ArmResource<alertRules_MicrosoftSecurityIncidentCreationComponentInputs>
	implements alertRules_MicrosoftSecurityIncidentCreationComponentOutputs
{
	constructor(entity: ADKEntity, options: alertRules_MicrosoftSecurityIncidentCreationComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/alertRules", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/alertRules";
}
export interface alertRules_MicrosoftSecurityIncidentCreationComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/alertRules";
}
export interface alertRules_MicrosoftSecurityIncidentCreationComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "MicrosoftSecurityIncidentCreation";
	readonly properties?: MicrosoftSecurityIncidentCreationAlertRuleProperties | undefined;
}
export class alertRules_MLBehaviorAnalytics
	extends ArmResource<alertRules_MLBehaviorAnalyticsComponentInputs>
	implements alertRules_MLBehaviorAnalyticsComponentOutputs
{
	constructor(entity: ADKEntity, options: alertRules_MLBehaviorAnalyticsComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/alertRules", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/alertRules";
}
export interface alertRules_MLBehaviorAnalyticsComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/alertRules";
}
export interface alertRules_MLBehaviorAnalyticsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "MLBehaviorAnalytics";
	readonly properties?: MLBehaviorAnalyticsAlertRuleProperties | undefined;
}
export class alertRules_NRT extends ArmResource<alertRules_NRTComponentInputs> implements alertRules_NRTComponentOutputs {
	constructor(entity: ADKEntity, options: alertRules_NRTComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/alertRules", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/alertRules";
}
export interface alertRules_NRTComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/alertRules";
}
export interface alertRules_NRTComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "NRT";
	readonly properties?: NrtAlertRuleProperties | undefined;
}
export class alertRules_Scheduled
	extends ArmResource<alertRules_ScheduledComponentInputs>
	implements alertRules_ScheduledComponentOutputs
{
	constructor(entity: ADKEntity, options: alertRules_ScheduledComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/alertRules", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/alertRules";
}
export interface alertRules_ScheduledComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/alertRules";
}
export interface alertRules_ScheduledComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "Scheduled";
	readonly properties?: ScheduledAlertRuleProperties | undefined;
}
export class alertRules_ThreatIntelligence
	extends ArmResource<alertRules_ThreatIntelligenceComponentInputs>
	implements alertRules_ThreatIntelligenceComponentOutputs
{
	constructor(entity: ADKEntity, options: alertRules_ThreatIntelligenceComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/alertRules", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/alertRules";
}
export interface alertRules_ThreatIntelligenceComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/alertRules";
}
export interface alertRules_ThreatIntelligenceComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "ThreatIntelligence";
	readonly properties?: ThreatIntelligenceAlertRuleProperties | undefined;
}
export class alertRules_actions
	extends ArmResource<alertRules_actionsComponentInputs>
	implements alertRules_actionsComponentOutputs
{
	constructor(entity: ADKEntity, options: alertRules_actionsComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/alertRules/actions", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/alertRules/actions";
}
export interface alertRules_actionsComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/alertRules/actions";
}
export interface alertRules_actionsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: ActionRequestPropertiesOrActionResponseProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class alertRuleTemplates_Fusion
	extends ArmResource<alertRuleTemplates_FusionComponentInputs>
	implements alertRuleTemplates_FusionComponentOutputs
{
	constructor(entity: ADKEntity, options: alertRuleTemplates_FusionComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/alertRuleTemplates", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/alertRuleTemplates";
}
export interface alertRuleTemplates_FusionComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/alertRuleTemplates";
}
export interface alertRuleTemplates_FusionComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "Fusion";
	readonly properties?: FusionAlertRuleTemplateProperties | undefined;
}
export class alertRuleTemplates_MicrosoftSecurityIncidentCreation
	extends ArmResource<alertRuleTemplates_MicrosoftSecurityIncidentCreationComponentInputs>
	implements alertRuleTemplates_MicrosoftSecurityIncidentCreationComponentOutputs
{
	constructor(entity: ADKEntity, options: alertRuleTemplates_MicrosoftSecurityIncidentCreationComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/alertRuleTemplates", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/alertRuleTemplates";
}
export interface alertRuleTemplates_MicrosoftSecurityIncidentCreationComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/alertRuleTemplates";
}
export interface alertRuleTemplates_MicrosoftSecurityIncidentCreationComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "MicrosoftSecurityIncidentCreation";
	readonly properties?: MicrosoftSecurityIncidentCreationAlertRuleTemplateProperties | undefined;
}
export class alertRuleTemplates_MLBehaviorAnalytics
	extends ArmResource<alertRuleTemplates_MLBehaviorAnalyticsComponentInputs>
	implements alertRuleTemplates_MLBehaviorAnalyticsComponentOutputs
{
	constructor(entity: ADKEntity, options: alertRuleTemplates_MLBehaviorAnalyticsComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/alertRuleTemplates", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/alertRuleTemplates";
}
export interface alertRuleTemplates_MLBehaviorAnalyticsComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/alertRuleTemplates";
}
export interface alertRuleTemplates_MLBehaviorAnalyticsComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "MLBehaviorAnalytics";
	readonly properties?: MLBehaviorAnalyticsAlertRuleTemplateProperties | undefined;
}
export class alertRuleTemplates_NRT
	extends ArmResource<alertRuleTemplates_NRTComponentInputs>
	implements alertRuleTemplates_NRTComponentOutputs
{
	constructor(entity: ADKEntity, options: alertRuleTemplates_NRTComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/alertRuleTemplates", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/alertRuleTemplates";
}
export interface alertRuleTemplates_NRTComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/alertRuleTemplates";
}
export interface alertRuleTemplates_NRTComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "NRT";
	readonly properties?: NrtAlertRuleTemplateProperties | undefined;
}
export class alertRuleTemplates_Scheduled
	extends ArmResource<alertRuleTemplates_ScheduledComponentInputs>
	implements alertRuleTemplates_ScheduledComponentOutputs
{
	constructor(entity: ADKEntity, options: alertRuleTemplates_ScheduledComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/alertRuleTemplates", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/alertRuleTemplates";
}
export interface alertRuleTemplates_ScheduledComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/alertRuleTemplates";
}
export interface alertRuleTemplates_ScheduledComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "Scheduled";
	readonly properties?: ScheduledAlertRuleTemplateProperties | undefined;
}
export class alertRuleTemplates_ThreatIntelligence
	extends ArmResource<alertRuleTemplates_ThreatIntelligenceComponentInputs>
	implements alertRuleTemplates_ThreatIntelligenceComponentOutputs
{
	constructor(entity: ADKEntity, options: alertRuleTemplates_ThreatIntelligenceComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/alertRuleTemplates", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/alertRuleTemplates";
}
export interface alertRuleTemplates_ThreatIntelligenceComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/alertRuleTemplates";
}
export interface alertRuleTemplates_ThreatIntelligenceComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "ThreatIntelligence";
	readonly properties?: ThreatIntelligenceAlertRuleTemplateProperties | undefined;
}
export class automationRules
	extends ArmResource<automationRulesComponentInputs>
	implements automationRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: automationRulesComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/automationRules", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/automationRules";
}
export interface automationRulesComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/automationRules";
}
export interface automationRulesComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties: AutomationRuleProperties;
	readonly systemData?: SystemData | undefined;
}
export class bookmarks extends ArmResource<bookmarksComponentInputs> implements bookmarksComponentOutputs {
	constructor(entity: ADKEntity, options: bookmarksComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/bookmarks", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/bookmarks";
}
export interface bookmarksComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/bookmarks";
}
export interface bookmarksComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: BookmarkProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class bookmarks_relations
	extends ArmResource<bookmarks_relationsComponentInputs>
	implements bookmarks_relationsComponentOutputs
{
	constructor(entity: ADKEntity, options: bookmarks_relationsComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/bookmarks/relations", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/bookmarks/relations";
}
export interface bookmarks_relationsComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/bookmarks/relations";
}
export interface bookmarks_relationsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: RelationProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class dataConnectors_AmazonWebServicesCloudTrail
	extends ArmResource<dataConnectors_AmazonWebServicesCloudTrailComponentInputs>
	implements dataConnectors_AmazonWebServicesCloudTrailComponentOutputs
{
	constructor(entity: ADKEntity, options: dataConnectors_AmazonWebServicesCloudTrailComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_AmazonWebServicesCloudTrailComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_AmazonWebServicesCloudTrailComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "AmazonWebServicesCloudTrail";
	readonly properties?: AwsCloudTrailDataConnectorProperties | undefined;
}
export class dataConnectors_AmazonWebServicesS3
	extends ArmResource<dataConnectors_AmazonWebServicesS3ComponentInputs>
	implements dataConnectors_AmazonWebServicesS3ComponentOutputs
{
	constructor(entity: ADKEntity, options: dataConnectors_AmazonWebServicesS3ComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_AmazonWebServicesS3ComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_AmazonWebServicesS3ComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "AmazonWebServicesS3";
	readonly properties?: AwsS3DataConnectorProperties | undefined;
}
export class dataConnectors_APIPolling
	extends ArmResource<dataConnectors_APIPollingComponentInputs>
	implements dataConnectors_APIPollingComponentOutputs
{
	constructor(entity: ADKEntity, options: dataConnectors_APIPollingComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_APIPollingComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_APIPollingComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "APIPolling";
	readonly properties?: ApiPollingParameters | undefined;
}
export class dataConnectors_AzureActiveDirectory
	extends ArmResource<dataConnectors_AzureActiveDirectoryComponentInputs>
	implements dataConnectors_AzureActiveDirectoryComponentOutputs
{
	constructor(entity: ADKEntity, options: dataConnectors_AzureActiveDirectoryComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_AzureActiveDirectoryComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_AzureActiveDirectoryComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "AzureActiveDirectory";
	readonly properties?: AADDataConnectorProperties | undefined;
}
export class dataConnectors_AzureAdvancedThreatProtection
	extends ArmResource<dataConnectors_AzureAdvancedThreatProtectionComponentInputs>
	implements dataConnectors_AzureAdvancedThreatProtectionComponentOutputs
{
	constructor(entity: ADKEntity, options: dataConnectors_AzureAdvancedThreatProtectionComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_AzureAdvancedThreatProtectionComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_AzureAdvancedThreatProtectionComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "AzureAdvancedThreatProtection";
	readonly properties?: AatpDataConnectorProperties | undefined;
}
export class dataConnectors_AzureSecurityCenter
	extends ArmResource<dataConnectors_AzureSecurityCenterComponentInputs>
	implements dataConnectors_AzureSecurityCenterComponentOutputs
{
	constructor(entity: ADKEntity, options: dataConnectors_AzureSecurityCenterComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_AzureSecurityCenterComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_AzureSecurityCenterComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "AzureSecurityCenter";
	readonly properties?: ASCDataConnectorProperties | undefined;
}
export class dataConnectors_Dynamics365
	extends ArmResource<dataConnectors_Dynamics365ComponentInputs>
	implements dataConnectors_Dynamics365ComponentOutputs
{
	constructor(entity: ADKEntity, options: dataConnectors_Dynamics365ComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_Dynamics365ComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_Dynamics365ComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "Dynamics365";
	readonly properties?: Dynamics365DataConnectorProperties | undefined;
}
export class dataConnectors_GenericUI
	extends ArmResource<dataConnectors_GenericUIComponentInputs>
	implements dataConnectors_GenericUIComponentOutputs
{
	constructor(entity: ADKEntity, options: dataConnectors_GenericUIComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_GenericUIComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_GenericUIComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "GenericUI";
	readonly properties?: CodelessParameters | undefined;
}
export class dataConnectors_MicrosoftCloudAppSecurity
	extends ArmResource<dataConnectors_MicrosoftCloudAppSecurityComponentInputs>
	implements dataConnectors_MicrosoftCloudAppSecurityComponentOutputs
{
	constructor(entity: ADKEntity, options: dataConnectors_MicrosoftCloudAppSecurityComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_MicrosoftCloudAppSecurityComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_MicrosoftCloudAppSecurityComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "MicrosoftCloudAppSecurity";
	readonly properties?: McasDataConnectorProperties | undefined;
}
export class dataConnectors_MicrosoftDefenderAdvancedThreatProtection
	extends ArmResource<dataConnectors_MicrosoftDefenderAdvancedThreatProtectionComponentInputs>
	implements dataConnectors_MicrosoftDefenderAdvancedThreatProtectionComponentOutputs
{
	constructor(entity: ADKEntity, options: dataConnectors_MicrosoftDefenderAdvancedThreatProtectionComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_MicrosoftDefenderAdvancedThreatProtectionComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_MicrosoftDefenderAdvancedThreatProtectionComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "MicrosoftDefenderAdvancedThreatProtection";
	readonly properties?: MdatpDataConnectorProperties | undefined;
}
export class dataConnectors_MicrosoftThreatIntelligence
	extends ArmResource<dataConnectors_MicrosoftThreatIntelligenceComponentInputs>
	implements dataConnectors_MicrosoftThreatIntelligenceComponentOutputs
{
	constructor(entity: ADKEntity, options: dataConnectors_MicrosoftThreatIntelligenceComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_MicrosoftThreatIntelligenceComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_MicrosoftThreatIntelligenceComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "MicrosoftThreatIntelligence";
	readonly properties?: MstiDataConnectorProperties | undefined;
}
export class dataConnectors_MicrosoftThreatProtection
	extends ArmResource<dataConnectors_MicrosoftThreatProtectionComponentInputs>
	implements dataConnectors_MicrosoftThreatProtectionComponentOutputs
{
	constructor(entity: ADKEntity, options: dataConnectors_MicrosoftThreatProtectionComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_MicrosoftThreatProtectionComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_MicrosoftThreatProtectionComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "MicrosoftThreatProtection";
	readonly properties?: MTPDataConnectorProperties | undefined;
}
export class dataConnectors_Office365
	extends ArmResource<dataConnectors_Office365ComponentInputs>
	implements dataConnectors_Office365ComponentOutputs
{
	constructor(entity: ADKEntity, options: dataConnectors_Office365ComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_Office365ComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_Office365ComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "Office365";
	readonly properties?: OfficeDataConnectorProperties | undefined;
}
export class dataConnectors_Office365Project
	extends ArmResource<dataConnectors_Office365ProjectComponentInputs>
	implements dataConnectors_Office365ProjectComponentOutputs
{
	constructor(entity: ADKEntity, options: dataConnectors_Office365ProjectComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_Office365ProjectComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_Office365ProjectComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "Office365Project";
	readonly properties?: Office365ProjectDataConnectorProperties | undefined;
}
export class dataConnectors_OfficeATP
	extends ArmResource<dataConnectors_OfficeATPComponentInputs>
	implements dataConnectors_OfficeATPComponentOutputs
{
	constructor(entity: ADKEntity, options: dataConnectors_OfficeATPComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_OfficeATPComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_OfficeATPComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "OfficeATP";
	readonly properties?: OfficeATPDataConnectorProperties | undefined;
}
export class dataConnectors_OfficeIRM
	extends ArmResource<dataConnectors_OfficeIRMComponentInputs>
	implements dataConnectors_OfficeIRMComponentOutputs
{
	constructor(entity: ADKEntity, options: dataConnectors_OfficeIRMComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_OfficeIRMComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_OfficeIRMComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "OfficeIRM";
	readonly properties?: OfficeIRMDataConnectorProperties | undefined;
}
export class dataConnectors_OfficePowerBI
	extends ArmResource<dataConnectors_OfficePowerBIComponentInputs>
	implements dataConnectors_OfficePowerBIComponentOutputs
{
	constructor(entity: ADKEntity, options: dataConnectors_OfficePowerBIComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_OfficePowerBIComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_OfficePowerBIComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "OfficePowerBI";
	readonly properties?: OfficePowerBIDataConnectorProperties | undefined;
}
export class dataConnectors_ThreatIntelligence
	extends ArmResource<dataConnectors_ThreatIntelligenceComponentInputs>
	implements dataConnectors_ThreatIntelligenceComponentOutputs
{
	constructor(entity: ADKEntity, options: dataConnectors_ThreatIntelligenceComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_ThreatIntelligenceComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_ThreatIntelligenceComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "ThreatIntelligence";
	readonly properties?: TIDataConnectorProperties | undefined;
}
export class dataConnectors_ThreatIntelligenceTaxii
	extends ArmResource<dataConnectors_ThreatIntelligenceTaxiiComponentInputs>
	implements dataConnectors_ThreatIntelligenceTaxiiComponentOutputs
{
	constructor(entity: ADKEntity, options: dataConnectors_ThreatIntelligenceTaxiiComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_ThreatIntelligenceTaxiiComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_ThreatIntelligenceTaxiiComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "ThreatIntelligenceTaxii";
	readonly properties?: TiTaxiiDataConnectorProperties | undefined;
}
export class entities_Account
	extends ArmResource<entities_AccountComponentInputs>
	implements entities_AccountComponentOutputs
{
	constructor(entity: ADKEntity, options: entities_AccountComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/entities", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_AccountComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_AccountComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "Account";
	readonly properties?: AccountEntityProperties | undefined;
}
export class entities_AzureResource
	extends ArmResource<entities_AzureResourceComponentInputs>
	implements entities_AzureResourceComponentOutputs
{
	constructor(entity: ADKEntity, options: entities_AzureResourceComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/entities", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_AzureResourceComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_AzureResourceComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "AzureResource";
	readonly properties?: AzureResourceEntityProperties | undefined;
}
export class entities_Bookmark
	extends ArmResource<entities_BookmarkComponentInputs>
	implements entities_BookmarkComponentOutputs
{
	constructor(entity: ADKEntity, options: entities_BookmarkComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/entities", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_BookmarkComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_BookmarkComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "Bookmark";
	readonly properties?: HuntingBookmarkProperties | undefined;
}
export class entities_CloudApplication
	extends ArmResource<entities_CloudApplicationComponentInputs>
	implements entities_CloudApplicationComponentOutputs
{
	constructor(entity: ADKEntity, options: entities_CloudApplicationComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/entities", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_CloudApplicationComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_CloudApplicationComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "CloudApplication";
	readonly properties?: CloudApplicationEntityProperties | undefined;
}
export class entities_DnsResolution
	extends ArmResource<entities_DnsResolutionComponentInputs>
	implements entities_DnsResolutionComponentOutputs
{
	constructor(entity: ADKEntity, options: entities_DnsResolutionComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/entities", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_DnsResolutionComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_DnsResolutionComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "DnsResolution";
	readonly properties?: DnsEntityProperties | undefined;
}
export class entities_File extends ArmResource<entities_FileComponentInputs> implements entities_FileComponentOutputs {
	constructor(entity: ADKEntity, options: entities_FileComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/entities", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_FileComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_FileComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "File";
	readonly properties?: FileEntityProperties | undefined;
}
export class entities_FileHash
	extends ArmResource<entities_FileHashComponentInputs>
	implements entities_FileHashComponentOutputs
{
	constructor(entity: ADKEntity, options: entities_FileHashComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/entities", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_FileHashComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_FileHashComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "FileHash";
	readonly properties?: FileHashEntityProperties | undefined;
}
export class entities_Host extends ArmResource<entities_HostComponentInputs> implements entities_HostComponentOutputs {
	constructor(entity: ADKEntity, options: entities_HostComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/entities", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_HostComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_HostComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "Host";
	readonly properties?: HostEntityProperties | undefined;
}
export class entities_IoTDevice
	extends ArmResource<entities_IoTDeviceComponentInputs>
	implements entities_IoTDeviceComponentOutputs
{
	constructor(entity: ADKEntity, options: entities_IoTDeviceComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/entities", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_IoTDeviceComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_IoTDeviceComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "IoTDevice";
	readonly properties?: IoTDeviceEntityProperties | undefined;
}
export class entities_Ip extends ArmResource<entities_IpComponentInputs> implements entities_IpComponentOutputs {
	constructor(entity: ADKEntity, options: entities_IpComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/entities", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_IpComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_IpComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "Ip";
	readonly properties?: IpEntityProperties | undefined;
}
export class entities_Mailbox
	extends ArmResource<entities_MailboxComponentInputs>
	implements entities_MailboxComponentOutputs
{
	constructor(entity: ADKEntity, options: entities_MailboxComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/entities", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_MailboxComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_MailboxComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "Mailbox";
	readonly properties?: MailboxEntityProperties | undefined;
}
export class entities_MailCluster
	extends ArmResource<entities_MailClusterComponentInputs>
	implements entities_MailClusterComponentOutputs
{
	constructor(entity: ADKEntity, options: entities_MailClusterComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/entities", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_MailClusterComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_MailClusterComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "MailCluster";
	readonly properties?: MailClusterEntityProperties | undefined;
}
export class entities_MailMessage
	extends ArmResource<entities_MailMessageComponentInputs>
	implements entities_MailMessageComponentOutputs
{
	constructor(entity: ADKEntity, options: entities_MailMessageComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/entities", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_MailMessageComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_MailMessageComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "MailMessage";
	readonly properties?: MailMessageEntityProperties | undefined;
}
export class entities_Malware
	extends ArmResource<entities_MalwareComponentInputs>
	implements entities_MalwareComponentOutputs
{
	constructor(entity: ADKEntity, options: entities_MalwareComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/entities", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_MalwareComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_MalwareComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "Malware";
	readonly properties?: MalwareEntityProperties | undefined;
}
export class entities_Process
	extends ArmResource<entities_ProcessComponentInputs>
	implements entities_ProcessComponentOutputs
{
	constructor(entity: ADKEntity, options: entities_ProcessComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/entities", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_ProcessComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_ProcessComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "Process";
	readonly properties?: ProcessEntityProperties | undefined;
}
export class entities_RegistryKey
	extends ArmResource<entities_RegistryKeyComponentInputs>
	implements entities_RegistryKeyComponentOutputs
{
	constructor(entity: ADKEntity, options: entities_RegistryKeyComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/entities", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_RegistryKeyComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_RegistryKeyComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "RegistryKey";
	readonly properties?: RegistryKeyEntityProperties | undefined;
}
export class entities_RegistryValue
	extends ArmResource<entities_RegistryValueComponentInputs>
	implements entities_RegistryValueComponentOutputs
{
	constructor(entity: ADKEntity, options: entities_RegistryValueComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/entities", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_RegistryValueComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_RegistryValueComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "RegistryValue";
	readonly properties?: RegistryValueEntityProperties | undefined;
}
export class entities_SecurityAlert
	extends ArmResource<entities_SecurityAlertComponentInputs>
	implements entities_SecurityAlertComponentOutputs
{
	constructor(entity: ADKEntity, options: entities_SecurityAlertComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/entities", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_SecurityAlertComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_SecurityAlertComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "SecurityAlert";
	readonly properties?: SecurityAlertProperties | undefined;
}
export class entities_SecurityGroup
	extends ArmResource<entities_SecurityGroupComponentInputs>
	implements entities_SecurityGroupComponentOutputs
{
	constructor(entity: ADKEntity, options: entities_SecurityGroupComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/entities", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_SecurityGroupComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_SecurityGroupComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "SecurityGroup";
	readonly properties?: SecurityGroupEntityProperties | undefined;
}
export class entities_SubmissionMail
	extends ArmResource<entities_SubmissionMailComponentInputs>
	implements entities_SubmissionMailComponentOutputs
{
	constructor(entity: ADKEntity, options: entities_SubmissionMailComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/entities", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_SubmissionMailComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_SubmissionMailComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "SubmissionMail";
	readonly properties?: SubmissionMailEntityProperties | undefined;
}
export class entities_Url extends ArmResource<entities_UrlComponentInputs> implements entities_UrlComponentOutputs {
	constructor(entity: ADKEntity, options: entities_UrlComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/entities", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_UrlComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entities_UrlComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "Url";
	readonly properties?: UrlEntityProperties | undefined;
}
export class entities_relations
	extends ArmResource<entities_relationsComponentInputs>
	implements entities_relationsComponentOutputs
{
	constructor(entity: ADKEntity, options: entities_relationsComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/entities/relations", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/entities/relations";
}
export interface entities_relationsComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/entities/relations";
}
export interface entities_relationsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: RelationProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class entityQueries_Activity
	extends ArmResource<entityQueries_ActivityComponentInputs>
	implements entityQueries_ActivityComponentOutputs
{
	constructor(entity: ADKEntity, options: entityQueries_ActivityComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/entityQueries", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/entityQueries";
}
export interface entityQueries_ActivityComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/entityQueries";
}
export interface entityQueries_ActivityComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "Activity";
	readonly properties?: ActivityEntityQueriesProperties | undefined;
}
export class entityQueries_Expansion
	extends ArmResource<entityQueries_ExpansionComponentInputs>
	implements entityQueries_ExpansionComponentOutputs
{
	constructor(entity: ADKEntity, options: entityQueries_ExpansionComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/entityQueries", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/entityQueries";
}
export interface entityQueries_ExpansionComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/entityQueries";
}
export interface entityQueries_ExpansionComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "Expansion";
	readonly properties?: ExpansionEntityQueriesProperties | undefined;
}
export class entityQueryTemplates_Activity
	extends ArmResource<entityQueryTemplates_ActivityComponentInputs>
	implements entityQueryTemplates_ActivityComponentOutputs
{
	constructor(entity: ADKEntity, options: entityQueryTemplates_ActivityComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/entityQueryTemplates", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/entityQueryTemplates";
}
export interface entityQueryTemplates_ActivityComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/entityQueryTemplates";
}
export interface entityQueryTemplates_ActivityComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "Activity";
	readonly properties?: ActivityEntityQueryTemplateProperties | undefined;
}
export class incidents extends ArmResource<incidentsComponentInputs> implements incidentsComponentOutputs {
	constructor(entity: ADKEntity, options: incidentsComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/incidents", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/incidents";
}
export interface incidentsComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/incidents";
}
export interface incidentsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: IncidentProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class incidents_comments
	extends ArmResource<incidents_commentsComponentInputs>
	implements incidents_commentsComponentOutputs
{
	constructor(entity: ADKEntity, options: incidents_commentsComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/incidents/comments", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/incidents/comments";
}
export interface incidents_commentsComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/incidents/comments";
}
export interface incidents_commentsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: IncidentCommentProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class incidents_relations
	extends ArmResource<incidents_relationsComponentInputs>
	implements incidents_relationsComponentOutputs
{
	constructor(entity: ADKEntity, options: incidents_relationsComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/incidents/relations", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/incidents/relations";
}
export interface incidents_relationsComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/incidents/relations";
}
export interface incidents_relationsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: RelationProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class metadata extends ArmResource<metadataComponentInputs> implements metadataComponentOutputs {
	constructor(entity: ADKEntity, options: metadataComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/metadata", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/metadata";
}
export interface metadataComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/metadata";
}
export interface metadataComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: MetadataProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class officeConsents extends ArmResource<officeConsentsComponentInputs> implements officeConsentsComponentOutputs {
	constructor(entity: ADKEntity, options: officeConsentsComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/officeConsents", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/officeConsents";
}
export interface officeConsentsComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/officeConsents";
}
export interface officeConsentsComponentInputs {
	readonly name: string;
	readonly properties?: OfficeConsentProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class onboardingStates
	extends ArmResource<onboardingStatesComponentInputs>
	implements onboardingStatesComponentOutputs
{
	constructor(entity: ADKEntity, options: onboardingStatesComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/onboardingStates", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/onboardingStates";
}
export interface onboardingStatesComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/onboardingStates";
}
export interface onboardingStatesComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: SentinelOnboardingStateProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class settings_Anomalies
	extends ArmResource<settings_AnomaliesComponentInputs>
	implements settings_AnomaliesComponentOutputs
{
	constructor(entity: ADKEntity, options: settings_AnomaliesComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/settings", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/settings";
}
export interface settings_AnomaliesComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/settings";
}
export interface settings_AnomaliesComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "Anomalies";
	readonly properties?: AnomaliesSettingsProperties | undefined;
}
export class settings_EntityAnalytics
	extends ArmResource<settings_EntityAnalyticsComponentInputs>
	implements settings_EntityAnalyticsComponentOutputs
{
	constructor(entity: ADKEntity, options: settings_EntityAnalyticsComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/settings", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/settings";
}
export interface settings_EntityAnalyticsComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/settings";
}
export interface settings_EntityAnalyticsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "EntityAnalytics";
	readonly properties?: EntityAnalyticsProperties | undefined;
}
export class settings_EyesOn
	extends ArmResource<settings_EyesOnComponentInputs>
	implements settings_EyesOnComponentOutputs
{
	constructor(entity: ADKEntity, options: settings_EyesOnComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/settings", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/settings";
}
export interface settings_EyesOnComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/settings";
}
export interface settings_EyesOnComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "EyesOn";
	readonly properties?: EyesOnSettingsProperties | undefined;
}
export class settings_Ueba extends ArmResource<settings_UebaComponentInputs> implements settings_UebaComponentOutputs {
	constructor(entity: ADKEntity, options: settings_UebaComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/settings", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/settings";
}
export interface settings_UebaComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/settings";
}
export interface settings_UebaComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "Ueba";
	readonly properties?: UebaProperties | undefined;
}
export class sourcecontrols extends ArmResource<sourcecontrolsComponentInputs> implements sourcecontrolsComponentOutputs {
	constructor(entity: ADKEntity, options: sourcecontrolsComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/sourcecontrols", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/sourcecontrols";
}
export interface sourcecontrolsComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/sourcecontrols";
}
export interface sourcecontrolsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: SourceControlProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
			"2021-10-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/threatIntelligence/indicators";
}
export interface threatIntelligence_indicatorsComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/threatIntelligence/indicators";
}
export interface threatIntelligence_indicatorsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: ThreatIntelligenceIndicatorProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class watchlists extends ArmResource<watchlistsComponentInputs> implements watchlistsComponentOutputs {
	constructor(entity: ADKEntity, options: watchlistsComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/watchlists", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/watchlists";
}
export interface watchlistsComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/watchlists";
}
export interface watchlistsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: WatchlistProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class watchlists_watchlistItems
	extends ArmResource<watchlists_watchlistItemsComponentInputs>
	implements watchlists_watchlistItemsComponentOutputs
{
	constructor(entity: ADKEntity, options: watchlists_watchlistItemsComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/watchlists/watchlistItems", "2021-10-01-preview", options);
	}
	public readonly apiVersion: "2021-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/watchlists/watchlistItems";
}
export interface watchlists_watchlistItemsComponentOutputs {
	readonly apiVersion: "2021-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/watchlists/watchlistItems";
}
export interface watchlists_watchlistItemsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: WatchlistItemProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export interface AADDataConnectorProperties {
	readonly dataTypes?: AlertsDataTypeOfDataConnector | undefined;
	readonly tenantId: string;
}
export interface AatpDataConnectorProperties {
	readonly dataTypes?: AlertsDataTypeOfDataConnector | undefined;
	readonly tenantId: string;
}
export interface AccountEntityProperties {
	readonly aadTenantId?: string | undefined;
	readonly aadUserId?: string | undefined;
	readonly accountName?: string | undefined;
	readonly additionalData?: EntityCommonPropertiesAdditionalData | undefined;
	readonly displayName?: string | undefined;
	readonly dnsDomain?: string | undefined;
	readonly friendlyName?: string | undefined;
	readonly hostEntityId?: string | undefined;
	readonly isDomainJoined?: boolean | undefined;
	readonly ntDomain?: string | undefined;
	readonly objectGuid?: string | undefined;
	readonly puid?: string | undefined;
	readonly sid?: string | undefined;
	readonly upnSuffix?: string | undefined;
}
export interface ActionRequestPropertiesOrActionResponseProperties {
	readonly logicAppResourceId: string;
	readonly triggerUri: string;
	readonly workflowId?: string | undefined;
}
export interface ActivityEntityQueriesProperties {
	readonly content?: string | undefined;
	readonly createdTimeUtc?: string | undefined;
	readonly description?: string | undefined;
	readonly enabled?: boolean | undefined;
	readonly entitiesFilter?: ActivityEntityQueriesPropertiesEntitiesFilter | undefined;
	readonly inputEntityType?:
		| (
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
				| "URL"
		  )
		| undefined;
	readonly lastModifiedTimeUtc?: string | undefined;
	readonly queryDefinitions?: ActivityEntityQueriesPropertiesQueryDefinitions | undefined;
	readonly requiredInputFieldsSets?: string[][] | undefined;
	readonly templateName?: string | undefined;
	readonly title?: string | undefined;
}
export interface ActivityEntityQueriesPropertiesEntitiesFilter {
	readonly "[ key: string ]"?: string[] | undefined;
}
export interface ActivityEntityQueriesPropertiesQueryDefinitions {
	readonly query?: string | undefined;
}
export interface ActivityEntityQueryTemplateProperties {
	readonly content?: string | undefined;
	readonly dataTypes?: DataTypeDefinitions[] | undefined;
	readonly description?: string | undefined;
	readonly entitiesFilter?: ActivityEntityQueryTemplatePropertiesEntitiesFilter | undefined;
	readonly inputEntityType?:
		| (
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
				| "URL"
		  )
		| undefined;
	readonly queryDefinitions?: ActivityEntityQueryTemplatePropertiesQueryDefinitions | undefined;
	readonly requiredInputFieldsSets?: string[][] | undefined;
	readonly title?: string | undefined;
}
export interface ActivityEntityQueryTemplatePropertiesEntitiesFilter {
	readonly "[ key: string ]"?: string[] | undefined;
}
export interface ActivityEntityQueryTemplatePropertiesQueryDefinitions {
	readonly query?: string | undefined;
	readonly summarizeBy?: string | undefined;
}
export interface AlertDetailsOverride {
	readonly alertDescriptionFormat?: string | undefined;
	readonly alertDisplayNameFormat?: string | undefined;
	readonly alertSeverityColumnName?: string | undefined;
	readonly alertTacticsColumnName?: string | undefined;
}
export interface AlertRuleTemplateDataSource {
	readonly connectorId?: string | undefined;
	readonly dataTypes?: string[] | undefined;
}
export interface AlertsDataTypeOfDataConnector {
	readonly alerts: DataConnectorDataTypeCommon;
}
export interface AnomaliesSettingsProperties {
	readonly isEnabled?: boolean | undefined;
}
export interface ApiPollingParameters {
	readonly connectorUiConfig?: CodelessUiConnectorConfigProperties | undefined;
	readonly pollingConfig?: CodelessConnectorPollingConfigProperties | undefined;
}
export interface ASCDataConnectorProperties {
	readonly dataTypes?: AlertsDataTypeOfDataConnector | undefined;
	readonly subscriptionId?: string | undefined;
}
export interface AutomationRuleAction {
	readonly order: number;
}
export interface AutomationRuleCondition {}
export interface AutomationRuleProperties {
	readonly actions: AutomationRuleAction[];
	readonly createdBy?: ClientInfo | undefined;
	readonly createdTimeUtc?: string | undefined;
	readonly displayName: string;
	readonly lastModifiedBy?: ClientInfo | undefined;
	readonly lastModifiedTimeUtc?: string | undefined;
	readonly order: number;
	readonly triggeringLogic: AutomationRuleTriggeringLogic;
}
export interface AutomationRulePropertyValuesCondition {
	readonly operator?:
		| (
				| "Contains"
				| "EndsWith"
				| "Equals"
				| "NotContains"
				| "NotEndsWith"
				| "NotEquals"
				| "NotStartsWith"
				| "StartsWith"
		  )
		| undefined;
	readonly propertyName?:
		| (
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
				| "Url"
		  )
		| undefined;
	readonly propertyValues?: string[] | undefined;
}
export interface AutomationRuleTriggeringLogic {
	readonly conditions?: AutomationRuleCondition[] | undefined;
	readonly expirationTimeUtc?: string | undefined;
	readonly isEnabled: boolean;
	readonly triggersOn: "Incidents";
	readonly triggersWhen: "Created";
}
export interface Availability {
	readonly isPreview?: boolean | undefined;
	readonly status?: "1" | undefined;
}
export interface AwsCloudTrailDataConnectorDataTypes {
	readonly logs: AwsCloudTrailDataConnectorDataTypesLogs;
}
export interface AwsCloudTrailDataConnectorDataTypesLogs {
	readonly state: "Disabled" | "Enabled";
}
export interface AwsCloudTrailDataConnectorProperties {
	readonly awsRoleArn?: string | undefined;
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
export interface AzureResourceEntityProperties {
	readonly additionalData?: EntityCommonPropertiesAdditionalData | undefined;
	readonly friendlyName?: string | undefined;
	readonly resourceId?: string | undefined;
	readonly subscriptionId?: string | undefined;
}
export interface BookmarkEntityMappings {
	readonly entityType?: string | undefined;
	readonly fieldMappings?: EntityFieldMapping[] | undefined;
}
export interface BookmarkProperties {
	readonly created?: string | undefined;
	readonly createdBy?: UserInfo | undefined;
	readonly displayName: string;
	readonly entityMappings?: BookmarkEntityMappings[] | undefined;
	readonly eventTime?: string | undefined;
	readonly incidentInfo?: IncidentInfo | undefined;
	readonly labels?: string[] | undefined;
	readonly notes?: string | undefined;
	readonly query: string;
	readonly queryEndTime?: string | undefined;
	readonly queryResult?: string | undefined;
	readonly queryStartTime?: string | undefined;
	readonly tactics?:
		| (
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
				| "ResourceDevelopment"[]
		  )
		| undefined;
	readonly techniques?: string[] | undefined;
	readonly updated?: string | undefined;
	readonly updatedBy?: UserInfo | undefined;
}
export interface ClientInfo {
	readonly email?: string | undefined;
	readonly name?: string | undefined;
	readonly objectId?: string | undefined;
	readonly userPrincipalName?: string | undefined;
}
export interface CloudApplicationEntityProperties {
	readonly additionalData?: EntityCommonPropertiesAdditionalData | undefined;
	readonly appId?: number | undefined;
	readonly appName?: string | undefined;
	readonly friendlyName?: string | undefined;
	readonly instanceName?: string | undefined;
}
export interface CodelessConnectorPollingAuthProperties {
	readonly apiKeyIdentifier?: string | undefined;
	readonly apiKeyName?: string | undefined;
	readonly authorizationEndpoint?: string | undefined;
	readonly authorizationEndpointQueryParameters?: any | undefined;
	readonly authType: string;
	readonly flowName?: string | undefined;
	readonly isApiKeyInPostPayload?: string | undefined;
	readonly isClientSecretInHeader?: boolean | undefined;
	readonly redirectionEndpoint?: string | undefined;
	readonly scope?: string | undefined;
	readonly tokenEndpoint?: string | undefined;
	readonly tokenEndpointHeaders?: any | undefined;
	readonly tokenEndpointQueryParameters?: any | undefined;
}
export interface CodelessConnectorPollingConfigProperties {
	readonly auth: CodelessConnectorPollingAuthProperties;
	readonly isActive?: boolean | undefined;
	readonly paging?: CodelessConnectorPollingPagingProperties | undefined;
	readonly request: CodelessConnectorPollingRequestProperties;
	readonly response?: CodelessConnectorPollingResponseProperties | undefined;
}
export interface CodelessConnectorPollingPagingProperties {
	readonly nextPageParaName?: string | undefined;
	readonly nextPageTokenJsonPath?: string | undefined;
	readonly pageCountAttributePath?: string | undefined;
	readonly pageSize?: number | undefined;
	readonly pageSizeParaName?: string | undefined;
	readonly pageTimeStampAttributePath?: string | undefined;
	readonly pageTotalCountAttributePath?: string | undefined;
	readonly pagingType: string;
	readonly searchTheLatestTimeStampFromEventsList?: string | undefined;
}
export interface CodelessConnectorPollingRequestProperties {
	readonly apiEndpoint: string;
	readonly endTimeAttributeName?: string | undefined;
	readonly headers?: any | undefined;
	readonly httpMethod: string;
	readonly queryParameters?: any | undefined;
	readonly queryParametersTemplate?: string | undefined;
	readonly queryTimeFormat: string;
	readonly queryWindowInMin: number;
	readonly rateLimitQps?: number | undefined;
	readonly retryCount?: number | undefined;
	readonly startTimeAttributeName?: string | undefined;
	readonly timeoutInSeconds?: number | undefined;
}
export interface CodelessConnectorPollingResponseProperties {
	readonly eventsJsonPaths: string[];
	readonly isGzipCompressed?: boolean | undefined;
	readonly successStatusJsonPath?: string | undefined;
	readonly successStatusValue?: string | undefined;
}
export interface CodelessParameters {
	readonly connectorUiConfig?: CodelessUiConnectorConfigProperties | undefined;
}
export interface CodelessUiConnectorConfigProperties {
	readonly availability: Availability;
	readonly connectivityCriteria: CodelessUiConnectorConfigPropertiesConnectivityCriteriaItem[];
	readonly customImage?: string | undefined;
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
	readonly type?: "IsConnectedQuery" | undefined;
	readonly value?: string[] | undefined;
}
export interface CodelessUiConnectorConfigPropertiesDataTypesItem {
	readonly lastDataReceivedQuery?: string | undefined;
	readonly name?: string | undefined;
}
export interface CodelessUiConnectorConfigPropertiesGraphQueriesItem {
	readonly baseQuery?: string | undefined;
	readonly legend?: string | undefined;
	readonly metricName?: string | undefined;
}
export interface CodelessUiConnectorConfigPropertiesInstructionStepsItem {
	readonly description?: string | undefined;
	readonly instructions?: InstructionStepsInstructionsItem[] | undefined;
	readonly title?: string | undefined;
}
export interface CodelessUiConnectorConfigPropertiesSampleQueriesItem {
	readonly description?: string | undefined;
	readonly query?: string | undefined;
}
export interface ContentPathMap {
	readonly contentType?: ("AnalyticRule" | "Workbook") | undefined;
	readonly path?: string | undefined;
}
export interface DataConnectorDataTypeCommon {
	readonly state: "Disabled" | "Enabled";
}
export interface DataTypeDefinitions {
	readonly dataType?: string | undefined;
}
export interface DnsEntityProperties {
	readonly additionalData?: EntityCommonPropertiesAdditionalData | undefined;
	readonly dnsServerIpEntityId?: string | undefined;
	readonly domainName?: string | undefined;
	readonly friendlyName?: string | undefined;
	readonly hostIpAddressEntityId?: string | undefined;
	readonly ipAddressEntityIds?: string[] | undefined;
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
	readonly isEnabled?: boolean | undefined;
}
export interface EntityCommonPropertiesAdditionalData {
	readonly "[ key: string ]"?: any | undefined;
}
export interface EntityFieldMapping {
	readonly identifier?: string | undefined;
	readonly value?: string | undefined;
}
export interface EntityMapping {
	readonly entityType?:
		| (
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
				| "URL"
		  )
		| undefined;
	readonly fieldMappings?: FieldMapping[] | undefined;
}
export interface EventGroupingSettings {
	readonly aggregationKind?: ("AlertPerResult" | "SingleAlert") | undefined;
}
export interface ExpansionEntityQueriesProperties {
	readonly dataSources?: string[] | undefined;
	readonly displayName?: string | undefined;
	readonly inputEntityType?:
		| (
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
				| "URL"
		  )
		| undefined;
	readonly inputFields?: string[] | undefined;
	readonly outputEntityTypes?:
		| (
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
				| "URL"[]
		  )
		| undefined;
	readonly queryTemplate?: string | undefined;
}
export interface EyesOnSettingsProperties {
	readonly isEnabled?: boolean | undefined;
}
export interface FieldMapping {
	readonly columnName?: string | undefined;
	readonly identifier?: string | undefined;
}
export interface FileEntityProperties {
	readonly additionalData?: EntityCommonPropertiesAdditionalData | undefined;
	readonly directory?: string | undefined;
	readonly fileHashEntityIds?: string[] | undefined;
	readonly fileName?: string | undefined;
	readonly friendlyName?: string | undefined;
	readonly hostEntityId?: string | undefined;
}
export interface FileHashEntityProperties {
	readonly additionalData?: EntityCommonPropertiesAdditionalData | undefined;
	readonly algorithm?: ("MD5" | "SHA1" | "SHA256" | "SHA256AC" | "Unknown") | undefined;
	readonly friendlyName?: string | undefined;
	readonly hashValue?: string | undefined;
}
export interface FusionAlertRuleProperties {
	readonly alertRuleTemplateName: string;
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly enabled: boolean;
	readonly lastModifiedUtc?: string | undefined;
	readonly scenarioExclusionPatterns?: FusionScenarioExclusionPattern[] | undefined;
	readonly severity?: ("High" | "Informational" | "Low" | "Medium") | undefined;
	readonly sourceSettings: FusionSourceSettings[];
	readonly tactics?:
		| (
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
				| "ResourceDevelopment"[]
		  )
		| undefined;
	readonly techniques?: string[] | undefined;
}
export interface FusionAlertRuleTemplateProperties {
	readonly alertRulesCreatedByTemplateCount?: number | undefined;
	readonly createdDateUTC?: string | undefined;
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly lastUpdatedDateUTC?: string | undefined;
	readonly requiredDataConnectors?: AlertRuleTemplateDataSource[] | undefined;
	readonly severity?: ("High" | "Informational" | "Low" | "Medium") | undefined;
	readonly sourceSettings?: FusionTemplateSourceSetting[] | undefined;
	readonly status?: ("Available" | "Installed" | "NotAvailable") | undefined;
	readonly tactics?:
		| (
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
				| "ResourceDevelopment"[]
		  )
		| undefined;
	readonly techniques?: string[] | undefined;
}
export interface FusionScenarioExclusionPattern {
	readonly dateAddedInUTC: string;
	readonly exclusionPattern: string;
}
export interface FusionSourceSettings {
	readonly enabled: boolean;
	readonly sourceName: string;
	readonly sourceSubTypes?: FusionSourceSubTypeSetting[] | undefined;
}
export interface FusionSourceSubTypeSetting {
	readonly enabled: boolean;
	readonly severityFilters: FusionSubTypeSeverityFilter;
	readonly sourceSubTypeDisplayName?: string | undefined;
	readonly sourceSubTypeName: string;
}
export interface FusionSubTypeSeverityFilter {
	readonly filters?: FusionSubTypeSeverityFiltersItem[] | undefined;
	readonly isSupported?: boolean | undefined;
}
export interface FusionSubTypeSeverityFiltersItem {
	readonly enabled: boolean;
	readonly severity: "High" | "Informational" | "Low" | "Medium";
}
export interface FusionTemplateSourceSetting {
	readonly sourceName: string;
	readonly sourceSubTypes?: FusionTemplateSourceSubType[] | undefined;
}
export interface FusionTemplateSourceSubType {
	readonly severityFilter: FusionTemplateSubTypeSeverityFilter;
	readonly sourceSubTypeDisplayName?: string | undefined;
	readonly sourceSubTypeName: string;
}
export interface FusionTemplateSubTypeSeverityFilter {
	readonly isSupported: boolean;
	readonly severityFilters?: ("High" | "Informational" | "Low" | "Medium"[]) | undefined;
}
export interface GeoLocation {
	readonly asn?: number | undefined;
	readonly city?: string | undefined;
	readonly countryCode?: string | undefined;
	readonly countryName?: string | undefined;
	readonly latitude?: number | undefined;
	readonly longitude?: number | undefined;
	readonly state?: string | undefined;
}
export interface GroupingConfiguration {
	readonly enabled: boolean;
	readonly groupByAlertDetails?: ("DisplayName" | "Severity"[]) | undefined;
	readonly groupByCustomDetails?: string[] | undefined;
	readonly groupByEntities?:
		| (
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
				| "URL"[]
		  )
		| undefined;
	readonly lookbackDuration: string;
	readonly matchingMethod: "AllEntities" | "anyAlert" | "Selected";
	readonly reopenClosedIncident: boolean;
}
export interface HostEntityProperties {
	readonly additionalData?: EntityCommonPropertiesAdditionalData | undefined;
	readonly azureID?: string | undefined;
	readonly dnsDomain?: string | undefined;
	readonly friendlyName?: string | undefined;
	readonly hostName?: string | undefined;
	readonly isDomainJoined?: boolean | undefined;
	readonly netBiosName?: string | undefined;
	readonly ntDomain?: string | undefined;
	readonly omsAgentID?: string | undefined;
	readonly osFamily?: ("Android" | "IOS" | "Linux" | "Unknown") | undefined;
	readonly osVersion?: string | undefined;
}
export interface HuntingBookmarkProperties {
	readonly additionalData?: EntityCommonPropertiesAdditionalData | undefined;
	readonly created?: string | undefined;
	readonly createdBy?: UserInfo | undefined;
	readonly displayName: string;
	readonly eventTime?: string | undefined;
	readonly friendlyName?: string | undefined;
	readonly incidentInfo?: IncidentInfo | undefined;
	readonly labels?: string[] | undefined;
	readonly notes?: string | undefined;
	readonly query: string;
	readonly queryResult?: string | undefined;
	readonly updated?: string | undefined;
	readonly updatedBy?: UserInfo | undefined;
}
export interface IncidentAdditionalData {
	readonly alertProductNames?: string[] | undefined;
	readonly alertsCount?: number | undefined;
	readonly bookmarksCount?: number | undefined;
	readonly commentsCount?: number | undefined;
	readonly providerIncidentUrl?: string | undefined;
	readonly tactics?:
		| (
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
				| "ResourceDevelopment"[]
		  )
		| undefined;
	readonly techniques?: string[] | undefined;
}
export interface IncidentCommentProperties {
	readonly author?: ClientInfo | undefined;
	readonly createdTimeUtc?: string | undefined;
	readonly lastModifiedTimeUtc?: string | undefined;
	readonly message: string;
}
export interface IncidentConfiguration {
	readonly createIncident: boolean;
	readonly groupingConfiguration?: GroupingConfiguration | undefined;
}
export interface IncidentInfo {
	readonly incidentId?: string | undefined;
	readonly relationName?: string | undefined;
	readonly severity?: ("High" | "Informational" | "Low" | "Medium") | undefined;
	readonly title?: string | undefined;
}
export interface IncidentLabel {
	readonly labelName: string;
	readonly labelType?: ("System" | "User") | undefined;
}
export interface IncidentOwnerInfo {
	readonly assignedTo?: string | undefined;
	readonly email?: string | undefined;
	readonly objectId?: string | undefined;
	readonly ownerType?: ("Group" | "Unknown" | "User") | undefined;
	readonly userPrincipalName?: string | undefined;
}
export interface IncidentProperties {
	readonly additionalData?: IncidentAdditionalData | undefined;
	readonly classification?: ("BenignPositive" | "FalsePositive" | "TruePositive" | "Undetermined") | undefined;
	readonly classificationComment?: string | undefined;
	readonly classificationReason?:
		| ("InaccurateData" | "IncorrectAlertLogic" | "SuspiciousActivity" | "SuspiciousButExpected")
		| undefined;
	readonly createdTimeUtc?: string | undefined;
	readonly description?: string | undefined;
	readonly firstActivityTimeUtc?: string | undefined;
	readonly incidentNumber?: number | undefined;
	readonly incidentUrl?: string | undefined;
	readonly labels?: IncidentLabel[] | undefined;
	readonly lastActivityTimeUtc?: string | undefined;
	readonly lastModifiedTimeUtc?: string | undefined;
	readonly owner?: IncidentOwnerInfo | undefined;
	readonly providerIncidentId?: string | undefined;
	readonly providerName?: string | undefined;
	readonly relatedAnalyticRuleIds?: string[] | undefined;
	readonly severity: "High" | "Informational" | "Low" | "Medium";
	readonly status: "Active" | "Closed" | "New";
	readonly teamInformation?: TeamInformation | undefined;
	readonly title: string;
}
export interface IncidentPropertiesAction {
	readonly classification?: ("BenignPositive" | "FalsePositive" | "TruePositive" | "Undetermined") | undefined;
	readonly classificationComment?: string | undefined;
	readonly classificationReason?:
		| ("InaccurateData" | "IncorrectAlertLogic" | "SuspiciousActivity" | "SuspiciousButExpected")
		| undefined;
	readonly labels?: IncidentLabel[] | undefined;
	readonly owner?: IncidentOwnerInfo | undefined;
	readonly severity?: ("High" | "Informational" | "Low" | "Medium") | undefined;
	readonly status?: ("Active" | "Closed" | "New") | undefined;
}
export interface InstructionStepsInstructionsItem {
	readonly parameters?: any | undefined;
	readonly type: "CopyableLabel" | "InfoMessage" | "InstructionStepsGroup";
}
export interface IoTDeviceEntityProperties {
	readonly additionalData?: EntityCommonPropertiesAdditionalData | undefined;
	readonly deviceId?: string | undefined;
	readonly deviceName?: string | undefined;
	readonly deviceType?: string | undefined;
	readonly edgeId?: string | undefined;
	readonly firmwareVersion?: string | undefined;
	readonly friendlyName?: string | undefined;
	readonly hostEntityId?: string | undefined;
	readonly iotHubEntityId?: string | undefined;
	readonly iotSecurityAgentId?: string | undefined;
	readonly ipAddressEntityId?: string | undefined;
	readonly macAddress?: string | undefined;
	readonly model?: string | undefined;
	readonly operatingSystem?: string | undefined;
	readonly protocols?: string[] | undefined;
	readonly serialNumber?: string | undefined;
	readonly source?: string | undefined;
	readonly threatIntelligence?: ThreatIntelligence[] | undefined;
	readonly vendor?: string | undefined;
}
export interface IpEntityProperties {
	readonly additionalData?: EntityCommonPropertiesAdditionalData | undefined;
	readonly address?: string | undefined;
	readonly friendlyName?: string | undefined;
	readonly location?: GeoLocation | undefined;
	readonly threatIntelligence?: ThreatIntelligence[] | undefined;
}
export interface MailboxEntityProperties {
	readonly additionalData?: EntityCommonPropertiesAdditionalData | undefined;
	readonly displayName?: string | undefined;
	readonly externalDirectoryObjectId?: string | undefined;
	readonly friendlyName?: string | undefined;
	readonly mailboxPrimaryAddress?: string | undefined;
	readonly upn?: string | undefined;
}
export interface MailClusterEntityProperties {
	readonly additionalData?: EntityCommonPropertiesAdditionalData | undefined;
	readonly clusterGroup?: string | undefined;
	readonly clusterQueryEndTime?: string | undefined;
	readonly clusterQueryStartTime?: string | undefined;
	readonly clusterSourceIdentifier?: string | undefined;
	readonly clusterSourceType?: string | undefined;
	readonly countByDeliveryStatus?: any | undefined;
	readonly countByProtectionStatus?: any | undefined;
	readonly countByThreatType?: any | undefined;
	readonly friendlyName?: string | undefined;
	readonly isVolumeAnomaly?: boolean | undefined;
	readonly mailCount?: number | undefined;
	readonly networkMessageIds?: string[] | undefined;
	readonly query?: string | undefined;
	readonly queryTime?: string | undefined;
	readonly source?: string | undefined;
	readonly threats?: string[] | undefined;
}
export interface MailMessageEntityProperties {
	readonly additionalData?: EntityCommonPropertiesAdditionalData | undefined;
	readonly antispamDirection?: ("Inbound" | "Intraorg" | "Outbound" | "Unknown") | undefined;
	readonly bodyFingerprintBin1?: number | undefined;
	readonly bodyFingerprintBin2?: number | undefined;
	readonly bodyFingerprintBin3?: number | undefined;
	readonly bodyFingerprintBin4?: number | undefined;
	readonly bodyFingerprintBin5?: number | undefined;
	readonly deliveryAction?: ("Blocked" | "Delivered" | "DeliveredAsSpam" | "Replaced") | undefined;
	readonly deliveryLocation?:
		| ("DeletedFolder" | "Dropped" | "External" | "Failed" | "Forwarded" | "Inbox" | "JunkFolder" | "Quarantine")
		| undefined;
	readonly fileEntityIds?: string[] | undefined;
	readonly friendlyName?: string | undefined;
	readonly internetMessageId?: string | undefined;
	readonly language?: string | undefined;
	readonly networkMessageId?: string | undefined;
	readonly p1Sender?: string | undefined;
	readonly p1SenderDisplayName?: string | undefined;
	readonly p1SenderDomain?: string | undefined;
	readonly p2Sender?: string | undefined;
	readonly p2SenderDisplayName?: string | undefined;
	readonly p2SenderDomain?: string | undefined;
	readonly receiveDate?: string | undefined;
	readonly recipient?: string | undefined;
	readonly senderIP?: string | undefined;
	readonly subject?: string | undefined;
	readonly threatDetectionMethods?: string[] | undefined;
	readonly threats?: string[] | undefined;
	readonly urls?: string[] | undefined;
}
export interface MalwareEntityProperties {
	readonly additionalData?: EntityCommonPropertiesAdditionalData | undefined;
	readonly category?: string | undefined;
	readonly fileEntityIds?: string[] | undefined;
	readonly friendlyName?: string | undefined;
	readonly malwareName?: string | undefined;
	readonly processEntityIds?: string[] | undefined;
}
export interface McasDataConnectorDataTypes {
	readonly alerts: DataConnectorDataTypeCommon;
	readonly discoveryLogs?: DataConnectorDataTypeCommon | undefined;
}
export interface McasDataConnectorProperties {
	readonly dataTypes: McasDataConnectorDataTypes;
	readonly tenantId: string;
}
export interface MdatpDataConnectorProperties {
	readonly dataTypes?: AlertsDataTypeOfDataConnector | undefined;
	readonly tenantId: string;
}
export interface MetadataAuthor {
	readonly email?: string | undefined;
	readonly link?: string | undefined;
	readonly name?: string | undefined;
}
export interface MetadataCategories {
	readonly domains?: string[] | undefined;
	readonly verticals?: string[] | undefined;
}
export interface MetadataDependencies {
	readonly contentId?: string | undefined;
	readonly criteria?: MetadataDependencies[] | undefined;
	readonly kind?:
		| (
				| "AnalyticsRule"
				| "AnalyticsRuleTemplate"
				| "DataConnector"
				| "DataType"
				| "HuntingQuery"
				| "InvestigationQuery"
				| "Parser"
				| "Playbook"
				| "PlaybookTemplate"
				| "Solution"
				| "Watchlist"
				| "WatchlistTemplate"
				| "Workbook"
				| "WorkbookTemplate"
		  )
		| undefined;
	readonly name?: string | undefined;
	readonly operator?: ("AND" | "OR") | undefined;
	readonly version?: string | undefined;
}
export interface MetadataProperties {
	readonly author?: MetadataAuthor | undefined;
	readonly categories?: MetadataCategories | undefined;
	readonly contentId?: string | undefined;
	readonly dependencies?: MetadataDependencies | undefined;
	readonly firstPublishDate?: string | undefined;
	readonly kind:
		| "AnalyticsRule"
		| "AnalyticsRuleTemplate"
		| "DataConnector"
		| "DataType"
		| "HuntingQuery"
		| "InvestigationQuery"
		| "Parser"
		| "Playbook"
		| "PlaybookTemplate"
		| "Solution"
		| "Watchlist"
		| "WatchlistTemplate"
		| "Workbook"
		| "WorkbookTemplate";
	readonly lastPublishDate?: string | undefined;
	readonly parentId: string;
	readonly providers?: string[] | undefined;
	readonly source?: MetadataSource | undefined;
	readonly support?: MetadataSupport | undefined;
	readonly version?: string | undefined;
}
export interface MetadataSource {
	readonly kind: "Community" | "LocalWorkspace" | "Solution" | "SourceRepository";
	readonly name?: string | undefined;
	readonly sourceId?: string | undefined;
}
export interface MetadataSupport {
	readonly email?: string | undefined;
	readonly link?: string | undefined;
	readonly name?: string | undefined;
	readonly tier: "Community" | "Microsoft" | "Partner";
}
export interface MicrosoftSecurityIncidentCreationAlertRuleProperties {
	readonly alertRuleTemplateName?: string | undefined;
	readonly description?: string | undefined;
	readonly displayName: string;
	readonly displayNamesExcludeFilter?: string[] | undefined;
	readonly displayNamesFilter?: string[] | undefined;
	readonly enabled: boolean;
	readonly lastModifiedUtc?: string | undefined;
	readonly productFilter:
		| "Azure Active Directory Identity Protection"
		| "Azure Advanced Threat Protection"
		| "Azure Security Center for IoT"
		| "Azure Security Center"
		| "Microsoft Cloud App Security"
		| "Microsoft Defender Advanced Threat Protection"
		| "Office 365 Advanced Threat Protection";
	readonly severitiesFilter?: ("High" | "Informational" | "Low" | "Medium"[]) | undefined;
}
export interface MicrosoftSecurityIncidentCreationAlertRuleTemplateProperties {
	readonly alertRulesCreatedByTemplateCount?: number | undefined;
	readonly createdDateUTC?: string | undefined;
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly displayNamesExcludeFilter?: string[] | undefined;
	readonly displayNamesFilter?: string[] | undefined;
	readonly lastUpdatedDateUTC?: string | undefined;
	readonly productFilter?:
		| (
				| "Azure Active Directory Identity Protection"
				| "Azure Advanced Threat Protection"
				| "Azure Security Center for IoT"
				| "Azure Security Center"
				| "Microsoft Cloud App Security"
				| "Microsoft Defender Advanced Threat Protection"
				| "Office 365 Advanced Threat Protection"
		  )
		| undefined;
	readonly requiredDataConnectors?: AlertRuleTemplateDataSource[] | undefined;
	readonly severitiesFilter?: ("High" | "Informational" | "Low" | "Medium"[]) | undefined;
	readonly status?: ("Available" | "Installed" | "NotAvailable") | undefined;
}
export interface MLBehaviorAnalyticsAlertRuleProperties {
	readonly alertRuleTemplateName: string;
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly enabled: boolean;
	readonly lastModifiedUtc?: string | undefined;
	readonly severity?: ("High" | "Informational" | "Low" | "Medium") | undefined;
	readonly tactics?:
		| (
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
				| "ResourceDevelopment"[]
		  )
		| undefined;
	readonly techniques?: string[] | undefined;
}
export interface MLBehaviorAnalyticsAlertRuleTemplateProperties {
	readonly alertRulesCreatedByTemplateCount?: number | undefined;
	readonly createdDateUTC?: string | undefined;
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly lastUpdatedDateUTC?: string | undefined;
	readonly requiredDataConnectors?: AlertRuleTemplateDataSource[] | undefined;
	readonly severity: "High" | "Informational" | "Low" | "Medium";
	readonly status?: ("Available" | "Installed" | "NotAvailable") | undefined;
	readonly tactics?:
		| (
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
				| "ResourceDevelopment"[]
		  )
		| undefined;
	readonly techniques?: string[] | undefined;
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
	readonly alertDetailsOverride?: AlertDetailsOverride | undefined;
	readonly alertRuleTemplateName?: string | undefined;
	readonly customDetails?: QueryBasedAlertRulePropertiesCustomDetails | undefined;
	readonly description?: string | undefined;
	readonly displayName: string;
	readonly enabled: boolean;
	readonly entityMappings?: EntityMapping[] | undefined;
	readonly incidentConfiguration?: IncidentConfiguration | undefined;
	readonly lastModifiedUtc?: string | undefined;
	readonly query?: string | undefined;
	readonly severity?: ("High" | "Informational" | "Low" | "Medium") | undefined;
	readonly suppressionDuration: string;
	readonly suppressionEnabled: boolean;
	readonly tactics?:
		| (
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
				| "ResourceDevelopment"[]
		  )
		| undefined;
	readonly techniques?: string[] | undefined;
	readonly templateVersion?: string | undefined;
}
export interface NrtAlertRuleTemplateProperties {
	readonly alertDetailsOverride?: AlertDetailsOverride | undefined;
	readonly alertRulesCreatedByTemplateCount?: number | undefined;
	readonly createdDateUTC?: string | undefined;
	readonly customDetails?: QueryBasedAlertRuleTemplatePropertiesCustomDetails | undefined;
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly entityMappings?: EntityMapping[] | undefined;
	readonly lastUpdatedDateUTC?: string | undefined;
	readonly query?: string | undefined;
	readonly requiredDataConnectors?: AlertRuleTemplateDataSource[] | undefined;
	readonly severity?: ("High" | "Informational" | "Low" | "Medium") | undefined;
	readonly status?: ("Available" | "Installed" | "NotAvailable") | undefined;
	readonly tactics?:
		| (
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
				| "ResourceDevelopment"[]
		  )
		| undefined;
	readonly techniques?: string[] | undefined;
	readonly version?: string | undefined;
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
	readonly dataTypes?: AlertsDataTypeOfDataConnector | undefined;
	readonly tenantId: string;
}
export interface OfficeConsentProperties {
	readonly consentId?: string | undefined;
	readonly tenantId?: string | undefined;
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
	readonly dataTypes?: AlertsDataTypeOfDataConnector | undefined;
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
	readonly customs?: PermissionsCustomsItem[] | undefined;
	readonly resourceProvider?: PermissionsResourceProviderItem[] | undefined;
}
export interface PermissionsCustomsItem {
	readonly description?: string | undefined;
	readonly name?: string | undefined;
}
export interface PermissionsResourceProviderItem {
	readonly permissionsDisplayText?: string | undefined;
	readonly provider?:
		| (
				| "Microsoft.Authorization/policyAssignments"
				| "Microsoft.OperationalInsights/solutions"
				| "Microsoft.OperationalInsights/workspaces"
				| "Microsoft.OperationalInsights/workspaces/datasources"
				| "Microsoft.OperationalInsights/workspaces/sharedKeys"
				| "microsoft.aadiam/diagnosticSettings"
		  )
		| undefined;
	readonly providerDisplayName?: string | undefined;
	readonly requiredPermissions?: RequiredPermissions | undefined;
	readonly scope?: ("ResourceGroup" | "Subscription" | "Workspace") | undefined;
}
export interface PlaybookActionProperties {
	readonly logicAppResourceId?: string | undefined;
	readonly tenantId?: string | undefined;
}
export interface ProcessEntityProperties {
	readonly accountEntityId?: string | undefined;
	readonly additionalData?: EntityCommonPropertiesAdditionalData | undefined;
	readonly commandLine?: string | undefined;
	readonly creationTimeUtc?: string | undefined;
	readonly elevationToken?: ("Default" | "Full") | undefined;
	readonly friendlyName?: string | undefined;
	readonly hostEntityId?: string | undefined;
	readonly hostLogonSessionEntityId?: string | undefined;
	readonly imageFileEntityId?: string | undefined;
	readonly parentProcessEntityId?: string | undefined;
	readonly processId?: string | undefined;
}
export interface QueryBasedAlertRulePropertiesCustomDetails {
	readonly "[ key: string ]"?: string | undefined;
}
export interface QueryBasedAlertRuleTemplatePropertiesCustomDetails {
	readonly "[ key: string ]"?: string | undefined;
}
export interface RegistryKeyEntityProperties {
	readonly additionalData?: EntityCommonPropertiesAdditionalData | undefined;
	readonly friendlyName?: string | undefined;
	readonly hive?:
		| (
				| "HKEY_A"
				| "HKEY_CLASSES_ROOT"
				| "HKEY_CURRENT_CONFIG"
				| "HKEY_CURRENT_USER"
				| "HKEY_CURRENT_USER_LOCAL_SETTINGS"
				| "HKEY_LOCAL_MACHINE"
				| "HKEY_PERFORMANCE_DATA"
				| "HKEY_PERFORMANCE_NLSTEXT"
				| "HKEY_PERFORMANCE_TEXT"
				| "HKEY_USERS"
		  )
		| undefined;
	readonly key?: string | undefined;
}
export interface RegistryValueEntityProperties {
	readonly additionalData?: EntityCommonPropertiesAdditionalData | undefined;
	readonly friendlyName?: string | undefined;
	readonly keyEntityId?: string | undefined;
	readonly valueData?: string | undefined;
	readonly valueName?: string | undefined;
	readonly valueType?:
		| ("Binary" | "DWord" | "ExpandString" | "MultiString" | "None" | "QWord" | "String" | "Unknown")
		| undefined;
}
export interface RelationProperties {
	readonly relatedResourceId: string;
	readonly relatedResourceKind?: string | undefined;
	readonly relatedResourceName?: string | undefined;
	readonly relatedResourceType?: string | undefined;
}
export interface Repository {
	readonly branch?: string | undefined;
	readonly deploymentLogsUrl?: string | undefined;
	readonly displayUrl?: string | undefined;
	readonly pathMapping?: ContentPathMap[] | undefined;
	readonly url?: string | undefined;
}
export interface RequiredPermissions {
	readonly action?: boolean | undefined;
	readonly delete?: boolean | undefined;
	readonly read?: boolean | undefined;
	readonly write?: boolean | undefined;
}
export interface ScheduledAlertRuleProperties {
	readonly alertDetailsOverride?: AlertDetailsOverride | undefined;
	readonly alertRuleTemplateName?: string | undefined;
	readonly customDetails?: QueryBasedAlertRulePropertiesCustomDetails | undefined;
	readonly description?: string | undefined;
	readonly displayName: string;
	readonly enabled: boolean;
	readonly entityMappings?: EntityMapping[] | undefined;
	readonly eventGroupingSettings?: EventGroupingSettings | undefined;
	readonly incidentConfiguration?: IncidentConfiguration | undefined;
	readonly lastModifiedUtc?: string | undefined;
	readonly query?: string | undefined;
	readonly queryFrequency?: string | undefined;
	readonly queryPeriod?: string | undefined;
	readonly severity?: ("High" | "Informational" | "Low" | "Medium") | undefined;
	readonly suppressionDuration: string;
	readonly suppressionEnabled: boolean;
	readonly tactics?:
		| (
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
				| "ResourceDevelopment"[]
		  )
		| undefined;
	readonly techniques?: string[] | undefined;
	readonly templateVersion?: string | undefined;
	readonly triggerOperator?: ("Equal" | "GreaterThan" | "LessThan") | undefined;
	readonly triggerThreshold?: number | undefined;
}
export interface ScheduledAlertRuleTemplateProperties {
	readonly alertDetailsOverride?: AlertDetailsOverride | undefined;
	readonly alertRulesCreatedByTemplateCount?: number | undefined;
	readonly createdDateUTC?: string | undefined;
	readonly customDetails?: QueryBasedAlertRuleTemplatePropertiesCustomDetails | undefined;
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly entityMappings?: EntityMapping[] | undefined;
	readonly eventGroupingSettings?: EventGroupingSettings | undefined;
	readonly lastUpdatedDateUTC?: string | undefined;
	readonly query?: string | undefined;
	readonly queryFrequency?: string | undefined;
	readonly queryPeriod?: string | undefined;
	readonly requiredDataConnectors?: AlertRuleTemplateDataSource[] | undefined;
	readonly severity?: ("High" | "Informational" | "Low" | "Medium") | undefined;
	readonly status?: ("Available" | "Installed" | "NotAvailable") | undefined;
	readonly tactics?:
		| (
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
				| "ResourceDevelopment"[]
		  )
		| undefined;
	readonly techniques?: string[] | undefined;
	readonly triggerOperator?: ("Equal" | "GreaterThan" | "LessThan") | undefined;
	readonly triggerThreshold?: number | undefined;
	readonly version?: string | undefined;
}
export interface SecurityAlertProperties {
	readonly additionalData?: EntityCommonPropertiesAdditionalData | undefined;
	readonly alertDisplayName?: string | undefined;
	readonly alertLink?: string | undefined;
	readonly alertType?: string | undefined;
	readonly compromisedEntity?: string | undefined;
	readonly confidenceLevel?: ("High" | "Low" | "Unknown") | undefined;
	readonly confidenceReasons?: SecurityAlertPropertiesConfidenceReasonsItem[] | undefined;
	readonly confidenceScore?: number | undefined;
	readonly confidenceScoreStatus?: ("Final" | "InProcess" | "NotApplicable" | "NotFinal") | undefined;
	readonly description?: string | undefined;
	readonly endTimeUtc?: string | undefined;
	readonly friendlyName?: string | undefined;
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
				| "LateralMovement"
				| "Persistence"
				| "PrivilegeEscalation"
				| "Probing"
				| "Unknown"
		  )
		| undefined;
	readonly processingEndTime?: string | undefined;
	readonly productComponentName?: string | undefined;
	readonly productName?: string | undefined;
	readonly productVersion?: string | undefined;
	readonly providerAlertId?: string | undefined;
	readonly remediationSteps?: string[] | undefined;
	readonly resourceIdentifiers?: any[] | undefined;
	readonly severity?: ("High" | "Informational" | "Low" | "Medium") | undefined;
	readonly startTimeUtc?: string | undefined;
	readonly status?: ("Dismissed" | "InProgress" | "New" | "Resolved" | "Unknown") | undefined;
	readonly systemAlertId?: string | undefined;
	readonly tactics?:
		| (
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
				| "ResourceDevelopment"[]
		  )
		| undefined;
	readonly timeGenerated?: string | undefined;
	readonly vendorName?: string | undefined;
}
export interface SecurityAlertPropertiesConfidenceReasonsItem {
	readonly reason?: string | undefined;
	readonly reasonType?: string | undefined;
}
export interface SecurityGroupEntityProperties {
	readonly additionalData?: EntityCommonPropertiesAdditionalData | undefined;
	readonly distinguishedName?: string | undefined;
	readonly friendlyName?: string | undefined;
	readonly objectGuid?: string | undefined;
	readonly sid?: string | undefined;
}
export interface SentinelOnboardingStateProperties {
	readonly customerManagedKey?: boolean | undefined;
}
export interface SourceControlProperties {
	readonly contentTypes: "AnalyticRule" | "Workbook"[];
	readonly description?: string | undefined;
	readonly displayName: string;
	readonly id?: string | undefined;
	readonly repository: Repository;
	readonly repoType: "DevOps" | "Github";
}
export interface SubmissionMailEntityProperties {
	readonly additionalData?: EntityCommonPropertiesAdditionalData | undefined;
	readonly friendlyName?: string | undefined;
	readonly networkMessageId?: string | undefined;
	readonly recipient?: string | undefined;
	readonly reportType?: string | undefined;
	readonly sender?: string | undefined;
	readonly senderIp?: string | undefined;
	readonly subject?: string | undefined;
	readonly submissionDate?: string | undefined;
	readonly submissionId?: string | undefined;
	readonly submitter?: string | undefined;
	readonly timestamp?: string | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface TeamInformation {
	readonly description?: string | undefined;
	readonly name?: string | undefined;
	readonly primaryChannelUrl?: string | undefined;
	readonly teamCreationTimeUtc?: string | undefined;
	readonly teamId?: string | undefined;
}
export interface ThreatIntelligence {
	readonly confidence?: number | undefined;
	readonly providerName?: string | undefined;
	readonly reportLink?: string | undefined;
	readonly threatDescription?: string | undefined;
	readonly threatName?: string | undefined;
	readonly threatType?: string | undefined;
}
export interface ThreatIntelligenceAlertRuleProperties {
	readonly alertRuleTemplateName: string;
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly enabled: boolean;
	readonly lastModifiedUtc?: string | undefined;
	readonly severity?: ("High" | "Informational" | "Low" | "Medium") | undefined;
	readonly tactics?:
		| (
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
				| "ResourceDevelopment"[]
		  )
		| undefined;
	readonly techniques?: string[] | undefined;
}
export interface ThreatIntelligenceAlertRuleTemplateProperties {
	readonly alertRulesCreatedByTemplateCount?: number | undefined;
	readonly createdDateUTC?: string | undefined;
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly lastUpdatedDateUTC?: string | undefined;
	readonly requiredDataConnectors?: AlertRuleTemplateDataSource[] | undefined;
	readonly severity: "High" | "Informational" | "Low" | "Medium";
	readonly status?: ("Available" | "Installed" | "NotAvailable") | undefined;
	readonly tactics?:
		| (
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
				| "ResourceDevelopment"[]
		  )
		| undefined;
	readonly techniques?: string[] | undefined;
}
export interface ThreatIntelligenceExternalReference {
	readonly description?: string | undefined;
	readonly externalId?: string | undefined;
	readonly hashes?: ThreatIntelligenceExternalReferenceHashes | undefined;
	readonly sourceName?: string | undefined;
	readonly url?: string | undefined;
}
export interface ThreatIntelligenceExternalReferenceHashes {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ThreatIntelligenceGranularMarkingModel {
	readonly language?: string | undefined;
	readonly markingRef?: number | undefined;
	readonly selectors?: string[] | undefined;
}
export interface ThreatIntelligenceIndicatorProperties {
	readonly additionalData?: EntityCommonPropertiesAdditionalData | undefined;
	readonly confidence?: number | undefined;
	readonly created?: string | undefined;
	readonly createdByRef?: string | undefined;
	readonly defanged?: boolean | undefined;
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly extensions?: ThreatIntelligenceIndicatorPropertiesExtensions | undefined;
	readonly externalId?: string | undefined;
	readonly externalLastUpdatedTimeUtc?: string | undefined;
	readonly externalReferences?: ThreatIntelligenceExternalReference[] | undefined;
	readonly friendlyName?: string | undefined;
	readonly granularMarkings?: ThreatIntelligenceGranularMarkingModel[] | undefined;
	readonly indicatorTypes?: string[] | undefined;
	readonly killChainPhases?: ThreatIntelligenceKillChainPhase[] | undefined;
	readonly labels?: string[] | undefined;
	readonly language?: string | undefined;
	readonly lastUpdatedTimeUtc?: string | undefined;
	readonly modified?: string | undefined;
	readonly objectMarkingRefs?: string[] | undefined;
	readonly parsedPattern?: ThreatIntelligenceParsedPattern[] | undefined;
	readonly pattern?: string | undefined;
	readonly patternType?: string | undefined;
	readonly patternVersion?: string | undefined;
	readonly revoked?: boolean | undefined;
	readonly source?: string | undefined;
	readonly threatIntelligenceTags?: string[] | undefined;
	readonly threatTypes?: string[] | undefined;
	readonly validFrom?: string | undefined;
	readonly validUntil?: string | undefined;
}
export interface ThreatIntelligenceIndicatorPropertiesExtensions {
	readonly "[ key: string ]"?: any | undefined;
}
export interface ThreatIntelligenceKillChainPhase {
	readonly killChainName?: string | undefined;
	readonly phaseName?: string | undefined;
}
export interface ThreatIntelligenceParsedPattern {
	readonly patternTypeKey?: string | undefined;
	readonly patternTypeValues?: ThreatIntelligenceParsedPatternTypeValue[] | undefined;
}
export interface ThreatIntelligenceParsedPatternTypeValue {
	readonly value?: string | undefined;
	readonly valueType?: string | undefined;
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
	readonly tipLookbackPeriod?: string | undefined;
}
export interface TiTaxiiDataConnectorDataTypes {
	readonly taxiiClient: TiTaxiiDataConnectorDataTypesTaxiiClient;
}
export interface TiTaxiiDataConnectorDataTypesTaxiiClient {
	readonly state: "Disabled" | "Enabled";
}
export interface TiTaxiiDataConnectorProperties {
	readonly collectionId?: string | undefined;
	readonly dataTypes: TiTaxiiDataConnectorDataTypes;
	readonly friendlyName?: string | undefined;
	readonly password?: string | undefined;
	readonly pollingFrequency: "OnceADay" | "OnceAMinute" | "OnceAnHour";
	readonly taxiiLookbackPeriod?: string | undefined;
	readonly taxiiServer?: string | undefined;
	readonly tenantId: string;
	readonly userName?: string | undefined;
	readonly workspaceId?: string | undefined;
}
export interface UebaProperties {
	readonly dataSources?: ("AuditLogs" | "AzureActivity" | "SecurityEvent" | "SigninLogs"[]) | undefined;
}
export interface UrlEntityProperties {
	readonly additionalData?: EntityCommonPropertiesAdditionalData | undefined;
	readonly friendlyName?: string | undefined;
	readonly url?: string | undefined;
}
export interface UserInfo {
	readonly email?: string | undefined;
	readonly name?: string | undefined;
	readonly objectId?: string | undefined;
}
export interface WatchlistItemProperties {
	readonly created?: string | undefined;
	readonly createdBy?: UserInfo | undefined;
	readonly entityMapping?: any | undefined;
	readonly isDeleted?: boolean | undefined;
	readonly itemsKeyValue: any;
	readonly tenantId?: string | undefined;
	readonly updated?: string | undefined;
	readonly updatedBy?: UserInfo | undefined;
	readonly watchlistItemId?: string | undefined;
	readonly watchlistItemType?: string | undefined;
}
export interface WatchlistProperties {
	readonly contentType?: string | undefined;
	readonly created?: string | undefined;
	readonly createdBy?: UserInfo | undefined;
	readonly defaultDuration?: string | undefined;
	readonly description?: string | undefined;
	readonly displayName: string;
	readonly isDeleted?: boolean | undefined;
	readonly itemsSearchKey: string;
	readonly labels?: string[] | undefined;
	readonly numberOfLinesToSkip?: number | undefined;
	readonly provider: string;
	readonly rawContent?: string | undefined;
	readonly source: "Local file" | "Remote storage";
	readonly tenantId?: string | undefined;
	readonly updated?: string | undefined;
	readonly updatedBy?: UserInfo | undefined;
	readonly uploadStatus?: string | undefined;
	readonly watchlistAlias?: string | undefined;
	readonly watchlistId?: string | undefined;
	readonly watchlistItemsCount?: number | undefined;
	readonly watchlistType?: string | undefined;
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
	"settings/Anomalies": settings_Anomalies,
	"settings/EntityAnalytics": settings_EntityAnalytics,
	"settings/EyesOn": settings_EyesOn,
	"settings/Ueba": settings_Ueba,
	sourcecontrols: sourcecontrols,
	"threatIntelligence/indicators": threatIntelligence_indicators,
	watchlists: watchlists,
	"watchlists/watchlistItems": watchlists_watchlistItems,
};

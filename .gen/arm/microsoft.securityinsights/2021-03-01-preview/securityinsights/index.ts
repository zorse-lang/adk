import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class alertRules_Fusion
	extends ArmResource<alertRules_FusionComponentInputs>
	implements alertRules_FusionComponentOutputs
{
	constructor(entity: ADKEntity, options: alertRules_FusionComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/alertRules", "2021-03-01-preview", options);
	}
	public readonly apiVersion: "2021-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/alertRules";
}
export interface alertRules_FusionComponentOutputs {
	readonly apiVersion: "2021-03-01-preview";
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
		super(entity, options.name, "Microsoft.SecurityInsights/alertRules", "2021-03-01-preview", options);
	}
	public readonly apiVersion: "2021-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/alertRules";
}
export interface alertRules_MicrosoftSecurityIncidentCreationComponentOutputs {
	readonly apiVersion: "2021-03-01-preview";
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
		super(entity, options.name, "Microsoft.SecurityInsights/alertRules", "2021-03-01-preview", options);
	}
	public readonly apiVersion: "2021-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/alertRules";
}
export interface alertRules_MLBehaviorAnalyticsComponentOutputs {
	readonly apiVersion: "2021-03-01-preview";
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
export class alertRules_Scheduled
	extends ArmResource<alertRules_ScheduledComponentInputs>
	implements alertRules_ScheduledComponentOutputs
{
	constructor(entity: ADKEntity, options: alertRules_ScheduledComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/alertRules", "2021-03-01-preview", options);
	}
	public readonly apiVersion: "2021-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/alertRules";
}
export interface alertRules_ScheduledComponentOutputs {
	readonly apiVersion: "2021-03-01-preview";
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
		super(entity, options.name, "Microsoft.SecurityInsights/alertRules", "2021-03-01-preview", options);
	}
	public readonly apiVersion: "2021-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/alertRules";
}
export interface alertRules_ThreatIntelligenceComponentOutputs {
	readonly apiVersion: "2021-03-01-preview";
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
		super(entity, options.name, "Microsoft.SecurityInsights/alertRules/actions", "2021-03-01-preview", options);
	}
	public readonly apiVersion: "2021-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/alertRules/actions";
}
export interface alertRules_actionsComponentOutputs {
	readonly apiVersion: "2021-03-01-preview";
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
		super(entity, options.name, "Microsoft.SecurityInsights/alertRuleTemplates", "2021-03-01-preview", options);
	}
	public readonly apiVersion: "2021-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/alertRuleTemplates";
}
export interface alertRuleTemplates_FusionComponentOutputs {
	readonly apiVersion: "2021-03-01-preview";
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
		super(entity, options.name, "Microsoft.SecurityInsights/alertRuleTemplates", "2021-03-01-preview", options);
	}
	public readonly apiVersion: "2021-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/alertRuleTemplates";
}
export interface alertRuleTemplates_MicrosoftSecurityIncidentCreationComponentOutputs {
	readonly apiVersion: "2021-03-01-preview";
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
		super(entity, options.name, "Microsoft.SecurityInsights/alertRuleTemplates", "2021-03-01-preview", options);
	}
	public readonly apiVersion: "2021-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/alertRuleTemplates";
}
export interface alertRuleTemplates_MLBehaviorAnalyticsComponentOutputs {
	readonly apiVersion: "2021-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/alertRuleTemplates";
}
export interface alertRuleTemplates_MLBehaviorAnalyticsComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "MLBehaviorAnalytics";
	readonly properties?: MLBehaviorAnalyticsAlertRuleTemplateProperties;
}
export class alertRuleTemplates_Scheduled
	extends ArmResource<alertRuleTemplates_ScheduledComponentInputs>
	implements alertRuleTemplates_ScheduledComponentOutputs
{
	constructor(entity: ADKEntity, options: alertRuleTemplates_ScheduledComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/alertRuleTemplates", "2021-03-01-preview", options);
	}
	public readonly apiVersion: "2021-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/alertRuleTemplates";
}
export interface alertRuleTemplates_ScheduledComponentOutputs {
	readonly apiVersion: "2021-03-01-preview";
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
		super(entity, options.name, "Microsoft.SecurityInsights/alertRuleTemplates", "2021-03-01-preview", options);
	}
	public readonly apiVersion: "2021-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/alertRuleTemplates";
}
export interface alertRuleTemplates_ThreatIntelligenceComponentOutputs {
	readonly apiVersion: "2021-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/alertRuleTemplates";
}
export interface alertRuleTemplates_ThreatIntelligenceComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "ThreatIntelligence";
	readonly properties?: ThreatIntelligenceAlertRuleTemplateProperties;
}
export class dataConnectors_AmazonWebServicesCloudTrail
	extends ArmResource<dataConnectors_AmazonWebServicesCloudTrailComponentInputs>
	implements dataConnectors_AmazonWebServicesCloudTrailComponentOutputs
{
	constructor(entity: ADKEntity, options: dataConnectors_AmazonWebServicesCloudTrailComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2021-03-01-preview", options);
	}
	public readonly apiVersion: "2021-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_AmazonWebServicesCloudTrailComponentOutputs {
	readonly apiVersion: "2021-03-01-preview";
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
export class dataConnectors_AzureActiveDirectory
	extends ArmResource<dataConnectors_AzureActiveDirectoryComponentInputs>
	implements dataConnectors_AzureActiveDirectoryComponentOutputs
{
	constructor(entity: ADKEntity, options: dataConnectors_AzureActiveDirectoryComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2021-03-01-preview", options);
	}
	public readonly apiVersion: "2021-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_AzureActiveDirectoryComponentOutputs {
	readonly apiVersion: "2021-03-01-preview";
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
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2021-03-01-preview", options);
	}
	public readonly apiVersion: "2021-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_AzureAdvancedThreatProtectionComponentOutputs {
	readonly apiVersion: "2021-03-01-preview";
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
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2021-03-01-preview", options);
	}
	public readonly apiVersion: "2021-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_AzureSecurityCenterComponentOutputs {
	readonly apiVersion: "2021-03-01-preview";
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
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2021-03-01-preview", options);
	}
	public readonly apiVersion: "2021-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_Dynamics365ComponentOutputs {
	readonly apiVersion: "2021-03-01-preview";
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
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2021-03-01-preview", options);
	}
	public readonly apiVersion: "2021-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_GenericUIComponentOutputs {
	readonly apiVersion: "2021-03-01-preview";
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
export class dataConnectors_MicrosoftCloudAppSecurity
	extends ArmResource<dataConnectors_MicrosoftCloudAppSecurityComponentInputs>
	implements dataConnectors_MicrosoftCloudAppSecurityComponentOutputs
{
	constructor(entity: ADKEntity, options: dataConnectors_MicrosoftCloudAppSecurityComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2021-03-01-preview", options);
	}
	public readonly apiVersion: "2021-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_MicrosoftCloudAppSecurityComponentOutputs {
	readonly apiVersion: "2021-03-01-preview";
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
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2021-03-01-preview", options);
	}
	public readonly apiVersion: "2021-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_MicrosoftDefenderAdvancedThreatProtectionComponentOutputs {
	readonly apiVersion: "2021-03-01-preview";
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
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2021-03-01-preview", options);
	}
	public readonly apiVersion: "2021-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_MicrosoftThreatIntelligenceComponentOutputs {
	readonly apiVersion: "2021-03-01-preview";
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
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2021-03-01-preview", options);
	}
	public readonly apiVersion: "2021-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_MicrosoftThreatProtectionComponentOutputs {
	readonly apiVersion: "2021-03-01-preview";
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
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2021-03-01-preview", options);
	}
	public readonly apiVersion: "2021-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_Office365ComponentOutputs {
	readonly apiVersion: "2021-03-01-preview";
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
export class dataConnectors_OfficeATP
	extends ArmResource<dataConnectors_OfficeATPComponentInputs>
	implements dataConnectors_OfficeATPComponentOutputs
{
	constructor(entity: ADKEntity, options: dataConnectors_OfficeATPComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2021-03-01-preview", options);
	}
	public readonly apiVersion: "2021-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_OfficeATPComponentOutputs {
	readonly apiVersion: "2021-03-01-preview";
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
export class dataConnectors_ThreatIntelligence
	extends ArmResource<dataConnectors_ThreatIntelligenceComponentInputs>
	implements dataConnectors_ThreatIntelligenceComponentOutputs
{
	constructor(entity: ADKEntity, options: dataConnectors_ThreatIntelligenceComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2021-03-01-preview", options);
	}
	public readonly apiVersion: "2021-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_ThreatIntelligenceComponentOutputs {
	readonly apiVersion: "2021-03-01-preview";
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
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2021-03-01-preview", options);
	}
	public readonly apiVersion: "2021-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_ThreatIntelligenceTaxiiComponentOutputs {
	readonly apiVersion: "2021-03-01-preview";
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
export class entityQueries_Activity
	extends ArmResource<entityQueries_ActivityComponentInputs>
	implements entityQueries_ActivityComponentOutputs
{
	constructor(entity: ADKEntity, options: entityQueries_ActivityComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/entityQueries", "2021-03-01-preview", options);
	}
	public readonly apiVersion: "2021-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/entityQueries";
}
export interface entityQueries_ActivityComponentOutputs {
	readonly apiVersion: "2021-03-01-preview";
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
		super(entity, options.name, "Microsoft.SecurityInsights/entityQueries", "2021-03-01-preview", options);
	}
	public readonly apiVersion: "2021-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/entityQueries";
}
export interface entityQueries_ExpansionComponentOutputs {
	readonly apiVersion: "2021-03-01-preview";
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
		super(entity, options.name, "Microsoft.SecurityInsights/entityQueryTemplates", "2021-03-01-preview", options);
	}
	public readonly apiVersion: "2021-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/entityQueryTemplates";
}
export interface entityQueryTemplates_ActivityComponentOutputs {
	readonly apiVersion: "2021-03-01-preview";
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
		super(entity, options.name, "Microsoft.SecurityInsights/incidents", "2021-03-01-preview", options);
	}
	public readonly apiVersion: "2021-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/incidents";
}
export interface incidentsComponentOutputs {
	readonly apiVersion: "2021-03-01-preview";
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
		super(entity, options.name, "Microsoft.SecurityInsights/incidents/comments", "2021-03-01-preview", options);
	}
	public readonly apiVersion: "2021-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/incidents/comments";
}
export interface incidents_commentsComponentOutputs {
	readonly apiVersion: "2021-03-01-preview";
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
		super(entity, options.name, "Microsoft.SecurityInsights/incidents/relations", "2021-03-01-preview", options);
	}
	public readonly apiVersion: "2021-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/incidents/relations";
}
export interface incidents_relationsComponentOutputs {
	readonly apiVersion: "2021-03-01-preview";
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
		super(entity, options.name, "Microsoft.SecurityInsights/metadata", "2021-03-01-preview", options);
	}
	public readonly apiVersion: "2021-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/metadata";
}
export interface metadataComponentOutputs {
	readonly apiVersion: "2021-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/metadata";
}
export interface metadataComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: MetadataProperties;
	readonly systemData?: SystemData;
}
export class onboardingStates
	extends ArmResource<onboardingStatesComponentInputs>
	implements onboardingStatesComponentOutputs
{
	constructor(entity: ADKEntity, options: onboardingStatesComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/onboardingStates", "2021-03-01-preview", options);
	}
	public readonly apiVersion: "2021-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/onboardingStates";
}
export interface onboardingStatesComponentOutputs {
	readonly apiVersion: "2021-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/onboardingStates";
}
export interface onboardingStatesComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: SentinelOnboardingStateProperties;
	readonly systemData?: SystemData;
}
export class settings_Anomalies
	extends ArmResource<settings_AnomaliesComponentInputs>
	implements settings_AnomaliesComponentOutputs
{
	constructor(entity: ADKEntity, options: settings_AnomaliesComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/settings", "2021-03-01-preview", options);
	}
	public readonly apiVersion: "2021-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/settings";
}
export interface settings_AnomaliesComponentOutputs {
	readonly apiVersion: "2021-03-01-preview";
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
		super(entity, options.name, "Microsoft.SecurityInsights/settings", "2021-03-01-preview", options);
	}
	public readonly apiVersion: "2021-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/settings";
}
export interface settings_EntityAnalyticsComponentOutputs {
	readonly apiVersion: "2021-03-01-preview";
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
		super(entity, options.name, "Microsoft.SecurityInsights/settings", "2021-03-01-preview", options);
	}
	public readonly apiVersion: "2021-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/settings";
}
export interface settings_EyesOnComponentOutputs {
	readonly apiVersion: "2021-03-01-preview";
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
		super(entity, options.name, "Microsoft.SecurityInsights/settings", "2021-03-01-preview", options);
	}
	public readonly apiVersion: "2021-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/settings";
}
export interface settings_UebaComponentOutputs {
	readonly apiVersion: "2021-03-01-preview";
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
		super(entity, options.name, "Microsoft.SecurityInsights/sourcecontrols", "2021-03-01-preview", options);
	}
	public readonly apiVersion: "2021-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/sourcecontrols";
}
export interface sourcecontrolsComponentOutputs {
	readonly apiVersion: "2021-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/sourcecontrols";
}
export interface sourcecontrolsComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: SourceControlProperties;
	readonly systemData?: SystemData;
}
export class watchlists extends ArmResource<watchlistsComponentInputs> implements watchlistsComponentOutputs {
	constructor(entity: ADKEntity, options: watchlistsComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/watchlists", "2021-03-01-preview", options);
	}
	public readonly apiVersion: "2021-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/watchlists";
}
export interface watchlistsComponentOutputs {
	readonly apiVersion: "2021-03-01-preview";
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
		super(entity, options.name, "Microsoft.SecurityInsights/watchlists/watchlistItems", "2021-03-01-preview", options);
	}
	public readonly apiVersion: "2021-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/watchlists/watchlistItems";
}
export interface watchlists_watchlistItemsComponentOutputs {
	readonly apiVersion: "2021-03-01-preview";
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
export interface ASCDataConnectorProperties {
	readonly dataTypes?: AlertsDataTypeOfDataConnector;
	readonly subscriptionId?: string;
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
export interface ClientInfo {
	readonly email?: string;
	readonly name?: string;
	readonly objectId?: string;
	readonly userPrincipalName?: string;
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
	readonly isEnabled?: boolean;
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
export interface FusionAlertRuleProperties {
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
		| "InitialAccess"
		| "LateralMovement"
		| "Persistence"
		| "PreAttack"
		| "PrivilegeEscalation"[];
}
export interface FusionAlertRuleTemplateProperties {
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
		| "InitialAccess"
		| "LateralMovement"
		| "Persistence"
		| "PreAttack"
		| "PrivilegeEscalation"[];
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
export interface IncidentAdditionalData {
	readonly alertProductNames?: string[];
	readonly alertsCount?: number;
	readonly bookmarksCount?: number;
	readonly commentsCount?: number;
	readonly tactics?:
		| "Collection"
		| "CommandAndControl"
		| "CredentialAccess"
		| "DefenseEvasion"
		| "Discovery"
		| "Execution"
		| "Exfiltration"
		| "Impact"
		| "InitialAccess"
		| "LateralMovement"
		| "Persistence"
		| "PreAttack"
		| "PrivilegeEscalation"[];
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
export interface IncidentLabel {
	readonly labelName: string;
	readonly labelType?: "System" | "User";
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
export interface InstructionStepsInstructionsItem {
	readonly parameters?: any;
	readonly type: "CopyableLabel" | "InfoMessage" | "InstructionStepsGroup";
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
	readonly name?: string;
	readonly operator?: "AND" | "OR";
	readonly version?: string;
}
export interface MetadataProperties {
	readonly author?: MetadataAuthor;
	readonly categories?: MetadataCategories;
	readonly contentId?: string;
	readonly dependencies?: MetadataDependencies;
	readonly firstPublishDate?: string;
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
	readonly lastPublishDate?: string;
	readonly parentId: string;
	readonly providers?: string[];
	readonly source?: MetadataSource;
	readonly support?: MetadataSupport;
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
	readonly productFilter:
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
		| "InitialAccess"
		| "LateralMovement"
		| "Persistence"
		| "PreAttack"
		| "PrivilegeEscalation"[];
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
		| "InitialAccess"
		| "LateralMovement"
		| "Persistence"
		| "PreAttack"
		| "PrivilegeEscalation"[];
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
export interface OfficeATPDataConnectorProperties {
	readonly dataTypes?: AlertsDataTypeOfDataConnector;
	readonly tenantId: string;
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
		| "InitialAccess"
		| "LateralMovement"
		| "Persistence"
		| "PreAttack"
		| "PrivilegeEscalation"[];
	readonly triggerOperator?: "Equal" | "GreaterThan" | "LessThan";
	readonly triggerThreshold?: number;
}
export interface ScheduledAlertRuleTemplateProperties {
	readonly alertDetailsOverride?: AlertDetailsOverride;
	readonly alertRulesCreatedByTemplateCount?: number;
	readonly createdDateUTC?: string;
	readonly customDetails?: ScheduledAlertRuleCommonPropertiesCustomDetails;
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
		| "InitialAccess"
		| "LateralMovement"
		| "Persistence"
		| "PreAttack"
		| "PrivilegeEscalation"[];
	readonly triggerOperator?: "Equal" | "GreaterThan" | "LessThan";
	readonly triggerThreshold?: number;
}
export interface SentinelOnboardingStateProperties {
	readonly customerManagedKey?: boolean;
}
export interface SourceControlProperties {
	readonly contentTypes: "AnalyticRule" | "Workbook"[];
	readonly description?: string;
	readonly displayName: string;
	readonly id?: string;
	readonly repository: Repository;
	readonly repoType: "DevOps" | "Github";
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
		| "InitialAccess"
		| "LateralMovement"
		| "Persistence"
		| "PreAttack"
		| "PrivilegeEscalation"[];
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
		| "InitialAccess"
		| "LateralMovement"
		| "Persistence"
		| "PreAttack"
		| "PrivilegeEscalation"[];
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
export interface UserInfo {
	readonly email?: string;
	readonly name?: string;
	readonly objectId?: string;
}
export interface WatchlistItemProperties {
	readonly created?: string;
	readonly createdBy?: UserInfo;
	readonly entityMapping?: any;
	readonly isDeleted?: boolean;
	readonly itemsKeyValue: any;
	readonly tenantId?: string;
	readonly updated?: string;
	readonly updatedBy?: UserInfo;
	readonly watchlistItemId?: string;
	readonly watchlistItemType?: string;
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
	readonly source: "Local file" | "Remote storage";
	readonly tenantId?: string;
	readonly updated?: string;
	readonly updatedBy?: UserInfo;
	readonly uploadStatus?: string;
	readonly watchlistAlias?: string;
	readonly watchlistId?: string;
	readonly watchlistItemsCount?: number;
	readonly watchlistType?: string;
}
export type alertRules =
	| alertRules_Fusion
	| alertRules_MicrosoftSecurityIncidentCreation
	| alertRules_MLBehaviorAnalytics
	| alertRules_Scheduled
	| alertRules_ThreatIntelligence;
export type alertRuleTemplates =
	| alertRuleTemplates_Fusion
	| alertRuleTemplates_MicrosoftSecurityIncidentCreation
	| alertRuleTemplates_MLBehaviorAnalytics
	| alertRuleTemplates_Scheduled
	| alertRuleTemplates_ThreatIntelligence;
export type dataConnectors =
	| dataConnectors_AmazonWebServicesCloudTrail
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
	| dataConnectors_OfficeATP
	| dataConnectors_ThreatIntelligence
	| dataConnectors_ThreatIntelligenceTaxii;
export type entityQueries = entityQueries_Activity | entityQueries_Expansion;
export type entityQueryTemplates = entityQueryTemplates_Activity;
export type settings = settings_Anomalies | settings_EntityAnalytics | settings_EyesOn | settings_Ueba;
export default {
	"alertRules/Fusion": alertRules_Fusion,
	"alertRules/MicrosoftSecurityIncidentCreation": alertRules_MicrosoftSecurityIncidentCreation,
	"alertRules/MLBehaviorAnalytics": alertRules_MLBehaviorAnalytics,
	"alertRules/Scheduled": alertRules_Scheduled,
	"alertRules/ThreatIntelligence": alertRules_ThreatIntelligence,
	"alertRules/actions": alertRules_actions,
	"alertRuleTemplates/Fusion": alertRuleTemplates_Fusion,
	"alertRuleTemplates/MicrosoftSecurityIncidentCreation": alertRuleTemplates_MicrosoftSecurityIncidentCreation,
	"alertRuleTemplates/MLBehaviorAnalytics": alertRuleTemplates_MLBehaviorAnalytics,
	"alertRuleTemplates/Scheduled": alertRuleTemplates_Scheduled,
	"alertRuleTemplates/ThreatIntelligence": alertRuleTemplates_ThreatIntelligence,
	"dataConnectors/AmazonWebServicesCloudTrail": dataConnectors_AmazonWebServicesCloudTrail,
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
	"dataConnectors/OfficeATP": dataConnectors_OfficeATP,
	"dataConnectors/ThreatIntelligence": dataConnectors_ThreatIntelligence,
	"dataConnectors/ThreatIntelligenceTaxii": dataConnectors_ThreatIntelligenceTaxii,
	"entityQueries/Activity": entityQueries_Activity,
	"entityQueries/Expansion": entityQueries_Expansion,
	"entityQueryTemplates/Activity": entityQueryTemplates_Activity,
	incidents: incidents,
	"incidents/comments": incidents_comments,
	"incidents/relations": incidents_relations,
	metadata: metadata,
	onboardingStates: onboardingStates,
	"settings/Anomalies": settings_Anomalies,
	"settings/EntityAnalytics": settings_EntityAnalytics,
	"settings/EyesOn": settings_EyesOn,
	"settings/Ueba": settings_Ueba,
	sourcecontrols: sourcecontrols,
	watchlists: watchlists,
	"watchlists/watchlistItems": watchlists_watchlistItems,
};

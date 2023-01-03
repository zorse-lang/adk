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
	readonly etag?: string | undefined;
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "MLBehaviorAnalytics";
	readonly properties?: MLBehaviorAnalyticsAlertRuleProperties | undefined;
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
	readonly systemData?: SystemData | undefined;
	readonly kind: "Fusion";
	readonly properties?: FusionAlertRuleTemplateProperties | undefined;
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
	readonly systemData?: SystemData | undefined;
	readonly kind: "MicrosoftSecurityIncidentCreation";
	readonly properties?: MicrosoftSecurityIncidentCreationAlertRuleTemplateProperties | undefined;
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
	readonly systemData?: SystemData | undefined;
	readonly kind: "MLBehaviorAnalytics";
	readonly properties?: MLBehaviorAnalyticsAlertRuleTemplateProperties | undefined;
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
	readonly systemData?: SystemData | undefined;
	readonly kind: "Scheduled";
	readonly properties?: ScheduledAlertRuleTemplateProperties | undefined;
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
	readonly systemData?: SystemData | undefined;
	readonly kind: "ThreatIntelligence";
	readonly properties?: ThreatIntelligenceAlertRuleTemplateProperties | undefined;
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
	readonly etag?: string | undefined;
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "AmazonWebServicesCloudTrail";
	readonly properties?: AwsCloudTrailDataConnectorProperties | undefined;
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
	readonly etag?: string | undefined;
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "Office365";
	readonly properties?: OfficeDataConnectorProperties | undefined;
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
	readonly etag?: string | undefined;
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "OfficeATP";
	readonly properties?: OfficeATPDataConnectorProperties | undefined;
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
	readonly etag?: string | undefined;
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "ThreatIntelligenceTaxii";
	readonly properties?: TiTaxiiDataConnectorProperties | undefined;
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
	readonly systemData?: SystemData | undefined;
	readonly kind: "Activity";
	readonly properties?: ActivityEntityQueryTemplateProperties | undefined;
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
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: RelationProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: MetadataProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
	readonly etag?: string | undefined;
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "EyesOn";
	readonly properties?: EyesOnSettingsProperties | undefined;
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
	readonly etag?: string | undefined;
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "Ueba";
	readonly properties?: UebaProperties | undefined;
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
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: SourceControlProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
export interface ASCDataConnectorProperties {
	readonly dataTypes?: AlertsDataTypeOfDataConnector | undefined;
	readonly subscriptionId?: string | undefined;
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
export interface ClientInfo {
	readonly email?: string | undefined;
	readonly name?: string | undefined;
	readonly objectId?: string | undefined;
	readonly userPrincipalName?: string | undefined;
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
export interface FusionAlertRuleProperties {
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
				| "InitialAccess"
				| "LateralMovement"
				| "Persistence"
				| "PreAttack"
				| "PrivilegeEscalation"[]
		  )
		| undefined;
}
export interface FusionAlertRuleTemplateProperties {
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
				| "InitialAccess"
				| "LateralMovement"
				| "Persistence"
				| "PreAttack"
				| "PrivilegeEscalation"[]
		  )
		| undefined;
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
export interface IncidentAdditionalData {
	readonly alertProductNames?: string[] | undefined;
	readonly alertsCount?: number | undefined;
	readonly bookmarksCount?: number | undefined;
	readonly commentsCount?: number | undefined;
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
				| "InitialAccess"
				| "LateralMovement"
				| "Persistence"
				| "PreAttack"
				| "PrivilegeEscalation"[]
		  )
		| undefined;
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
export interface InstructionStepsInstructionsItem {
	readonly parameters?: any | undefined;
	readonly type: "CopyableLabel" | "InfoMessage" | "InstructionStepsGroup";
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
	readonly productFilter:
		| "Azure Active Directory Identity Protection"
		| "Azure Advanced Threat Protection"
		| "Azure Security Center for IoT"
		| "Azure Security Center"
		| "Microsoft Cloud App Security"
		| "Microsoft Defender Advanced Threat Protection"
		| "Office 365 Advanced Threat Protection";
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
				| "InitialAccess"
				| "LateralMovement"
				| "Persistence"
				| "PreAttack"
				| "PrivilegeEscalation"[]
		  )
		| undefined;
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
				| "InitialAccess"
				| "LateralMovement"
				| "Persistence"
				| "PreAttack"
				| "PrivilegeEscalation"[]
		  )
		| undefined;
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
	readonly dataTypes?: AlertsDataTypeOfDataConnector | undefined;
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
export interface ScheduledAlertRuleCommonPropertiesCustomDetails {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ScheduledAlertRuleProperties {
	readonly alertDetailsOverride?: AlertDetailsOverride | undefined;
	readonly alertRuleTemplateName?: string | undefined;
	readonly customDetails?: ScheduledAlertRuleCommonPropertiesCustomDetails | undefined;
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
				| "InitialAccess"
				| "LateralMovement"
				| "Persistence"
				| "PreAttack"
				| "PrivilegeEscalation"[]
		  )
		| undefined;
	readonly triggerOperator?: ("Equal" | "GreaterThan" | "LessThan") | undefined;
	readonly triggerThreshold?: number | undefined;
}
export interface ScheduledAlertRuleTemplateProperties {
	readonly alertDetailsOverride?: AlertDetailsOverride | undefined;
	readonly alertRulesCreatedByTemplateCount?: number | undefined;
	readonly createdDateUTC?: string | undefined;
	readonly customDetails?: ScheduledAlertRuleCommonPropertiesCustomDetails | undefined;
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
				| "InitialAccess"
				| "LateralMovement"
				| "Persistence"
				| "PreAttack"
				| "PrivilegeEscalation"[]
		  )
		| undefined;
	readonly triggerOperator?: ("Equal" | "GreaterThan" | "LessThan") | undefined;
	readonly triggerThreshold?: number | undefined;
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
				| "InitialAccess"
				| "LateralMovement"
				| "Persistence"
				| "PreAttack"
				| "PrivilegeEscalation"[]
		  )
		| undefined;
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
				| "InitialAccess"
				| "LateralMovement"
				| "Persistence"
				| "PreAttack"
				| "PrivilegeEscalation"[]
		  )
		| undefined;
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

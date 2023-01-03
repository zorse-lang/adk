import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class alertRules_Fusion
	extends ArmResource<alertRules_FusionComponentInputs>
	implements alertRules_FusionComponentOutputs
{
	constructor(entity: ADKEntity, options: alertRules_FusionComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/alertRules", "2022-11-01", options);
	}
	public readonly apiVersion: "2022-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/alertRules";
}
export interface alertRules_FusionComponentOutputs {
	readonly apiVersion: "2022-11-01";
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
		super(entity, options.name, "Microsoft.SecurityInsights/alertRules", "2022-11-01", options);
	}
	public readonly apiVersion: "2022-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/alertRules";
}
export interface alertRules_MicrosoftSecurityIncidentCreationComponentOutputs {
	readonly apiVersion: "2022-11-01";
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
export class alertRules_Scheduled
	extends ArmResource<alertRules_ScheduledComponentInputs>
	implements alertRules_ScheduledComponentOutputs
{
	constructor(entity: ADKEntity, options: alertRules_ScheduledComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/alertRules", "2022-11-01", options);
	}
	public readonly apiVersion: "2022-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/alertRules";
}
export interface alertRules_ScheduledComponentOutputs {
	readonly apiVersion: "2022-11-01";
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
export class alertRules_actions
	extends ArmResource<alertRules_actionsComponentInputs>
	implements alertRules_actionsComponentOutputs
{
	constructor(entity: ADKEntity, options: alertRules_actionsComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/alertRules/actions", "2022-11-01", options);
	}
	public readonly apiVersion: "2022-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/alertRules/actions";
}
export interface alertRules_actionsComponentOutputs {
	readonly apiVersion: "2022-11-01";
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
		super(entity, options.name, "Microsoft.SecurityInsights/alertRuleTemplates", "2022-11-01", options);
	}
	public readonly apiVersion: "2022-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/alertRuleTemplates";
}
export interface alertRuleTemplates_FusionComponentOutputs {
	readonly apiVersion: "2022-11-01";
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
		super(entity, options.name, "Microsoft.SecurityInsights/alertRuleTemplates", "2022-11-01", options);
	}
	public readonly apiVersion: "2022-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/alertRuleTemplates";
}
export interface alertRuleTemplates_MicrosoftSecurityIncidentCreationComponentOutputs {
	readonly apiVersion: "2022-11-01";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/alertRuleTemplates";
}
export interface alertRuleTemplates_MicrosoftSecurityIncidentCreationComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "MicrosoftSecurityIncidentCreation";
	readonly properties?: MicrosoftSecurityIncidentCreationAlertRuleTemplateProperties | undefined;
}
export class alertRuleTemplates_Scheduled
	extends ArmResource<alertRuleTemplates_ScheduledComponentInputs>
	implements alertRuleTemplates_ScheduledComponentOutputs
{
	constructor(entity: ADKEntity, options: alertRuleTemplates_ScheduledComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/alertRuleTemplates", "2022-11-01", options);
	}
	public readonly apiVersion: "2022-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/alertRuleTemplates";
}
export interface alertRuleTemplates_ScheduledComponentOutputs {
	readonly apiVersion: "2022-11-01";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/alertRuleTemplates";
}
export interface alertRuleTemplates_ScheduledComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "Scheduled";
	readonly properties?: ScheduledAlertRuleTemplateProperties | undefined;
}
export class automationRules
	extends ArmResource<automationRulesComponentInputs>
	implements automationRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: automationRulesComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/automationRules", "2022-11-01", options);
	}
	public readonly apiVersion: "2022-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/automationRules";
}
export interface automationRulesComponentOutputs {
	readonly apiVersion: "2022-11-01";
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
		super(entity, options.name, "Microsoft.SecurityInsights/bookmarks", "2022-11-01", options);
	}
	public readonly apiVersion: "2022-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/bookmarks";
}
export interface bookmarksComponentOutputs {
	readonly apiVersion: "2022-11-01";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/bookmarks";
}
export interface bookmarksComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: BookmarkProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class dataConnectors_AmazonWebServicesCloudTrail
	extends ArmResource<dataConnectors_AmazonWebServicesCloudTrailComponentInputs>
	implements dataConnectors_AmazonWebServicesCloudTrailComponentOutputs
{
	constructor(entity: ADKEntity, options: dataConnectors_AmazonWebServicesCloudTrailComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2022-11-01", options);
	}
	public readonly apiVersion: "2022-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_AmazonWebServicesCloudTrailComponentOutputs {
	readonly apiVersion: "2022-11-01";
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
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2022-11-01", options);
	}
	public readonly apiVersion: "2022-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_AzureActiveDirectoryComponentOutputs {
	readonly apiVersion: "2022-11-01";
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
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2022-11-01", options);
	}
	public readonly apiVersion: "2022-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_AzureAdvancedThreatProtectionComponentOutputs {
	readonly apiVersion: "2022-11-01";
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
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2022-11-01", options);
	}
	public readonly apiVersion: "2022-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_AzureSecurityCenterComponentOutputs {
	readonly apiVersion: "2022-11-01";
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
export class dataConnectors_MicrosoftCloudAppSecurity
	extends ArmResource<dataConnectors_MicrosoftCloudAppSecurityComponentInputs>
	implements dataConnectors_MicrosoftCloudAppSecurityComponentOutputs
{
	constructor(entity: ADKEntity, options: dataConnectors_MicrosoftCloudAppSecurityComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2022-11-01", options);
	}
	public readonly apiVersion: "2022-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_MicrosoftCloudAppSecurityComponentOutputs {
	readonly apiVersion: "2022-11-01";
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
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2022-11-01", options);
	}
	public readonly apiVersion: "2022-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_MicrosoftDefenderAdvancedThreatProtectionComponentOutputs {
	readonly apiVersion: "2022-11-01";
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
export class dataConnectors_Office365
	extends ArmResource<dataConnectors_Office365ComponentInputs>
	implements dataConnectors_Office365ComponentOutputs
{
	constructor(entity: ADKEntity, options: dataConnectors_Office365ComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2022-11-01", options);
	}
	public readonly apiVersion: "2022-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_Office365ComponentOutputs {
	readonly apiVersion: "2022-11-01";
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
export class dataConnectors_ThreatIntelligence
	extends ArmResource<dataConnectors_ThreatIntelligenceComponentInputs>
	implements dataConnectors_ThreatIntelligenceComponentOutputs
{
	constructor(entity: ADKEntity, options: dataConnectors_ThreatIntelligenceComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2022-11-01", options);
	}
	public readonly apiVersion: "2022-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_ThreatIntelligenceComponentOutputs {
	readonly apiVersion: "2022-11-01";
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
export class incidents extends ArmResource<incidentsComponentInputs> implements incidentsComponentOutputs {
	constructor(entity: ADKEntity, options: incidentsComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/incidents", "2022-11-01", options);
	}
	public readonly apiVersion: "2022-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/incidents";
}
export interface incidentsComponentOutputs {
	readonly apiVersion: "2022-11-01";
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
		super(entity, options.name, "Microsoft.SecurityInsights/incidents/comments", "2022-11-01", options);
	}
	public readonly apiVersion: "2022-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/incidents/comments";
}
export interface incidents_commentsComponentOutputs {
	readonly apiVersion: "2022-11-01";
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
		super(entity, options.name, "Microsoft.SecurityInsights/incidents/relations", "2022-11-01", options);
	}
	public readonly apiVersion: "2022-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/incidents/relations";
}
export interface incidents_relationsComponentOutputs {
	readonly apiVersion: "2022-11-01";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/incidents/relations";
}
export interface incidents_relationsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: RelationProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class onboardingStates
	extends ArmResource<onboardingStatesComponentInputs>
	implements onboardingStatesComponentOutputs
{
	constructor(entity: ADKEntity, options: onboardingStatesComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/onboardingStates", "2022-11-01", options);
	}
	public readonly apiVersion: "2022-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/onboardingStates";
}
export interface onboardingStatesComponentOutputs {
	readonly apiVersion: "2022-11-01";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/onboardingStates";
}
export interface onboardingStatesComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: SentinelOnboardingStateProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class securityMLAnalyticsSettings_Anomaly
	extends ArmResource<securityMLAnalyticsSettings_AnomalyComponentInputs>
	implements securityMLAnalyticsSettings_AnomalyComponentOutputs
{
	constructor(entity: ADKEntity, options: securityMLAnalyticsSettings_AnomalyComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/securityMLAnalyticsSettings", "2022-11-01", options);
	}
	public readonly apiVersion: "2022-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/securityMLAnalyticsSettings";
}
export interface securityMLAnalyticsSettings_AnomalyComponentOutputs {
	readonly apiVersion: "2022-11-01";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/securityMLAnalyticsSettings";
}
export interface securityMLAnalyticsSettings_AnomalyComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly systemData?: SystemData | undefined;
	readonly kind: "Anomaly";
	readonly properties?: AnomalySecurityMLAnalyticsSettingsProperties | undefined;
}
export class threatIntelligence_indicators
	extends ArmResource<threatIntelligence_indicatorsComponentInputs>
	implements threatIntelligence_indicatorsComponentOutputs
{
	constructor(entity: ADKEntity, options: threatIntelligence_indicatorsComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/threatIntelligence/indicators", "2022-11-01", options);
	}
	public readonly apiVersion: "2022-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/threatIntelligence/indicators";
}
export interface threatIntelligence_indicatorsComponentOutputs {
	readonly apiVersion: "2022-11-01";
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
		super(entity, options.name, "Microsoft.SecurityInsights/watchlists", "2022-11-01", options);
	}
	public readonly apiVersion: "2022-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/watchlists";
}
export interface watchlistsComponentOutputs {
	readonly apiVersion: "2022-11-01";
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
		super(entity, options.name, "Microsoft.SecurityInsights/watchlists/watchlistItems", "2022-11-01", options);
	}
	public readonly apiVersion: "2022-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/watchlists/watchlistItems";
}
export interface watchlists_watchlistItemsComponentOutputs {
	readonly apiVersion: "2022-11-01";
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
	readonly tenantId?: string | undefined;
}
export interface AatpDataConnectorProperties {
	readonly dataTypes?: AlertsDataTypeOfDataConnector | undefined;
	readonly tenantId?: string | undefined;
}
export interface ActionRequestPropertiesOrActionResponseProperties {
	readonly logicAppResourceId: string;
	readonly triggerUri: string;
	readonly workflowId?: string | undefined;
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
	readonly alerts?: DataConnectorDataTypeCommon | undefined;
}
export interface AnomalySecurityMLAnalyticsSettingsProperties {
	readonly anomalySettingsVersion?: number | undefined;
	readonly anomalyVersion: string;
	readonly customizableObservations?: any | undefined;
	readonly description?: string | undefined;
	readonly displayName: string;
	readonly enabled: boolean;
	readonly frequency: string;
	readonly isDefaultSettings: boolean;
	readonly lastModifiedUtc?: string | undefined;
	readonly requiredDataConnectors?: SecurityMLAnalyticsSettingsDataSource[] | undefined;
	readonly settingsDefinitionId?: string | undefined;
	readonly settingsStatus: "Flighting" | "Production";
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
export interface AutomationRulePropertyArrayChangedValuesCondition {
	readonly arrayType?: ("Alerts" | "Comments" | "Labels" | "Tactics") | undefined;
	readonly changeType?: "Added" | undefined;
}
export interface AutomationRulePropertyValuesChangedCondition {
	readonly changeType?: ("ChangedFrom" | "ChangedTo") | undefined;
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
	readonly propertyName?: ("IncidentOwner" | "IncidentSeverity" | "IncidentStatus") | undefined;
	readonly propertyValues?: string[] | undefined;
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
				| "AlertAnalyticRuleIds"
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
				| "IncidentUpdatedBySource"
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
	readonly triggersOn: "Alerts" | "Incidents";
	readonly triggersWhen: "Created" | "Updated";
}
export interface AwsCloudTrailDataConnectorDataTypes {
	readonly logs?: AwsCloudTrailDataConnectorDataTypesLogs | undefined;
}
export interface AwsCloudTrailDataConnectorDataTypesLogs {
	readonly state?: ("Disabled" | "Enabled") | undefined;
}
export interface AwsCloudTrailDataConnectorProperties {
	readonly awsRoleArn?: string | undefined;
	readonly dataTypes?: AwsCloudTrailDataConnectorDataTypes | undefined;
}
export interface BookmarkProperties {
	readonly created?: string | undefined;
	readonly createdBy?: UserInfo | undefined;
	readonly displayName: string;
	readonly eventTime?: string | undefined;
	readonly incidentInfo?: IncidentInfo | undefined;
	readonly labels?: string[] | undefined;
	readonly notes?: string | undefined;
	readonly query: string;
	readonly queryEndTime?: string | undefined;
	readonly queryResult?: string | undefined;
	readonly queryStartTime?: string | undefined;
	readonly updated?: string | undefined;
	readonly updatedBy?: UserInfo | undefined;
}
export interface ClientInfo {
	readonly email?: string | undefined;
	readonly name?: string | undefined;
	readonly objectId?: string | undefined;
	readonly userPrincipalName?: string | undefined;
}
export interface DataConnectorDataTypeCommon {
	readonly state?: ("Disabled" | "Enabled") | undefined;
}
export interface EntityCommonPropertiesAdditionalData {
	readonly "[ key: string ]"?: any | undefined;
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
	readonly labelType?: ("AutoAssigned" | "User") | undefined;
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
	readonly relatedAnalyticRuleIds?: string[] | undefined;
	readonly severity: "High" | "Informational" | "Low" | "Medium";
	readonly status: "Active" | "Closed" | "New";
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
export interface McasDataConnectorDataTypes {
	readonly alerts?: DataConnectorDataTypeCommon | undefined;
	readonly discoveryLogs?: DataConnectorDataTypeCommon | undefined;
}
export interface McasDataConnectorProperties {
	readonly dataTypes?: McasDataConnectorDataTypes | undefined;
	readonly tenantId?: string | undefined;
}
export interface MdatpDataConnectorProperties {
	readonly dataTypes?: AlertsDataTypeOfDataConnector | undefined;
	readonly tenantId?: string | undefined;
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
		| "Microsoft Cloud App Security";
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
		| "Microsoft Cloud App Security";
	readonly requiredDataConnectors?: AlertRuleTemplateDataSource[] | undefined;
	readonly severitiesFilter?: ("High" | "Informational" | "Low" | "Medium"[]) | undefined;
	readonly status?: ("Available" | "Installed" | "NotAvailable") | undefined;
}
export interface OfficeDataConnectorDataTypes {
	readonly exchange?: OfficeDataConnectorDataTypesExchange | undefined;
	readonly sharePoint?: OfficeDataConnectorDataTypesSharePoint | undefined;
	readonly teams?: OfficeDataConnectorDataTypesTeams | undefined;
}
export interface OfficeDataConnectorDataTypesExchange {
	readonly state?: ("Disabled" | "Enabled") | undefined;
}
export interface OfficeDataConnectorDataTypesSharePoint {
	readonly state?: ("Disabled" | "Enabled") | undefined;
}
export interface OfficeDataConnectorDataTypesTeams {
	readonly state?: ("Disabled" | "Enabled") | undefined;
}
export interface OfficeDataConnectorProperties {
	readonly dataTypes?: OfficeDataConnectorDataTypes | undefined;
	readonly tenantId?: string | undefined;
}
export interface PlaybookActionProperties {
	readonly logicAppResourceId: string;
	readonly tenantId?: string | undefined;
}
export interface RelationProperties {
	readonly relatedResourceId: string;
	readonly relatedResourceKind?: string | undefined;
	readonly relatedResourceName?: string | undefined;
	readonly relatedResourceType?: string | undefined;
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
	readonly customDetails?: ScheduledAlertRuleTemplatePropertiesCustomDetails | undefined;
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
export interface ScheduledAlertRuleTemplatePropertiesCustomDetails {
	readonly "[ key: string ]"?: string | undefined;
}
export interface SecurityMLAnalyticsSettingsDataSource {
	readonly connectorId?: string | undefined;
	readonly dataTypes?: string[] | undefined;
}
export interface SentinelOnboardingStateProperties {
	readonly customerManagedKey?: boolean | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
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
	readonly indicators?: TIDataConnectorDataTypesIndicators | undefined;
}
export interface TIDataConnectorDataTypesIndicators {
	readonly state?: ("Disabled" | "Enabled") | undefined;
}
export interface TIDataConnectorProperties {
	readonly dataTypes?: TIDataConnectorDataTypes | undefined;
	readonly tenantId?: string | undefined;
	readonly tipLookbackPeriod?: string | undefined;
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
	readonly watchlistType?: string | undefined;
}
export type alertRules = alertRules_Fusion | alertRules_MicrosoftSecurityIncidentCreation | alertRules_Scheduled;
export type alertRuleTemplates =
	| alertRuleTemplates_Fusion
	| alertRuleTemplates_MicrosoftSecurityIncidentCreation
	| alertRuleTemplates_Scheduled;
export type dataConnectors =
	| dataConnectors_AmazonWebServicesCloudTrail
	| dataConnectors_AzureActiveDirectory
	| dataConnectors_AzureAdvancedThreatProtection
	| dataConnectors_AzureSecurityCenter
	| dataConnectors_MicrosoftCloudAppSecurity
	| dataConnectors_MicrosoftDefenderAdvancedThreatProtection
	| dataConnectors_Office365
	| dataConnectors_ThreatIntelligence;
export type securityMLAnalyticsSettings = securityMLAnalyticsSettings_Anomaly;
export default {
	"alertRules/Fusion": alertRules_Fusion,
	"alertRules/MicrosoftSecurityIncidentCreation": alertRules_MicrosoftSecurityIncidentCreation,
	"alertRules/Scheduled": alertRules_Scheduled,
	"alertRules/actions": alertRules_actions,
	"alertRuleTemplates/Fusion": alertRuleTemplates_Fusion,
	"alertRuleTemplates/MicrosoftSecurityIncidentCreation": alertRuleTemplates_MicrosoftSecurityIncidentCreation,
	"alertRuleTemplates/Scheduled": alertRuleTemplates_Scheduled,
	automationRules: automationRules,
	bookmarks: bookmarks,
	"dataConnectors/AmazonWebServicesCloudTrail": dataConnectors_AmazonWebServicesCloudTrail,
	"dataConnectors/AzureActiveDirectory": dataConnectors_AzureActiveDirectory,
	"dataConnectors/AzureAdvancedThreatProtection": dataConnectors_AzureAdvancedThreatProtection,
	"dataConnectors/AzureSecurityCenter": dataConnectors_AzureSecurityCenter,
	"dataConnectors/MicrosoftCloudAppSecurity": dataConnectors_MicrosoftCloudAppSecurity,
	"dataConnectors/MicrosoftDefenderAdvancedThreatProtection": dataConnectors_MicrosoftDefenderAdvancedThreatProtection,
	"dataConnectors/Office365": dataConnectors_Office365,
	"dataConnectors/ThreatIntelligence": dataConnectors_ThreatIntelligence,
	incidents: incidents,
	"incidents/comments": incidents_comments,
	"incidents/relations": incidents_relations,
	onboardingStates: onboardingStates,
	"securityMLAnalyticsSettings/Anomaly": securityMLAnalyticsSettings_Anomaly,
	"threatIntelligence/indicators": threatIntelligence_indicators,
	watchlists: watchlists,
	"watchlists/watchlistItems": watchlists_watchlistItems,
};

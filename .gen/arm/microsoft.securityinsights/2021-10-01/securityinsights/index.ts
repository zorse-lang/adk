import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class alertRules_Fusion
	extends ArmResource<alertRules_FusionComponentInputs>
	implements alertRules_FusionComponentOutputs
{
	constructor(entity: ADKEntity, options: alertRules_FusionComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/alertRules", "2021-10-01", options);
	}
	public readonly apiVersion: "2021-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/alertRules";
}
export interface alertRules_FusionComponentOutputs {
	readonly apiVersion: "2021-10-01";
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
		super(entity, options.name, "Microsoft.SecurityInsights/alertRules", "2021-10-01", options);
	}
	public readonly apiVersion: "2021-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/alertRules";
}
export interface alertRules_MicrosoftSecurityIncidentCreationComponentOutputs {
	readonly apiVersion: "2021-10-01";
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
export class alertRules_Scheduled
	extends ArmResource<alertRules_ScheduledComponentInputs>
	implements alertRules_ScheduledComponentOutputs
{
	constructor(entity: ADKEntity, options: alertRules_ScheduledComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/alertRules", "2021-10-01", options);
	}
	public readonly apiVersion: "2021-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/alertRules";
}
export interface alertRules_ScheduledComponentOutputs {
	readonly apiVersion: "2021-10-01";
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
export class alertRules_actions
	extends ArmResource<alertRules_actionsComponentInputs>
	implements alertRules_actionsComponentOutputs
{
	constructor(entity: ADKEntity, options: alertRules_actionsComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/alertRules/actions", "2021-10-01", options);
	}
	public readonly apiVersion: "2021-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/alertRules/actions";
}
export interface alertRules_actionsComponentOutputs {
	readonly apiVersion: "2021-10-01";
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
		super(entity, options.name, "Microsoft.SecurityInsights/alertRuleTemplates", "2021-10-01", options);
	}
	public readonly apiVersion: "2021-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/alertRuleTemplates";
}
export interface alertRuleTemplates_FusionComponentOutputs {
	readonly apiVersion: "2021-10-01";
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
		super(entity, options.name, "Microsoft.SecurityInsights/alertRuleTemplates", "2021-10-01", options);
	}
	public readonly apiVersion: "2021-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/alertRuleTemplates";
}
export interface alertRuleTemplates_MicrosoftSecurityIncidentCreationComponentOutputs {
	readonly apiVersion: "2021-10-01";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/alertRuleTemplates";
}
export interface alertRuleTemplates_MicrosoftSecurityIncidentCreationComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "MicrosoftSecurityIncidentCreation";
	readonly properties?: MicrosoftSecurityIncidentCreationAlertRuleTemplateProperties;
}
export class alertRuleTemplates_Scheduled
	extends ArmResource<alertRuleTemplates_ScheduledComponentInputs>
	implements alertRuleTemplates_ScheduledComponentOutputs
{
	constructor(entity: ADKEntity, options: alertRuleTemplates_ScheduledComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/alertRuleTemplates", "2021-10-01", options);
	}
	public readonly apiVersion: "2021-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/alertRuleTemplates";
}
export interface alertRuleTemplates_ScheduledComponentOutputs {
	readonly apiVersion: "2021-10-01";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/alertRuleTemplates";
}
export interface alertRuleTemplates_ScheduledComponentInputs {
	readonly name: string;
	readonly systemData?: SystemData;
	readonly kind: "Scheduled";
	readonly properties?: ScheduledAlertRuleTemplateProperties;
}
export class automationRules
	extends ArmResource<automationRulesComponentInputs>
	implements automationRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: automationRulesComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/automationRules", "2021-10-01", options);
	}
	public readonly apiVersion: "2021-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/automationRules";
}
export interface automationRulesComponentOutputs {
	readonly apiVersion: "2021-10-01";
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
		super(entity, options.name, "Microsoft.SecurityInsights/bookmarks", "2021-10-01", options);
	}
	public readonly apiVersion: "2021-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/bookmarks";
}
export interface bookmarksComponentOutputs {
	readonly apiVersion: "2021-10-01";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/bookmarks";
}
export interface bookmarksComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: BookmarkProperties;
	readonly systemData?: SystemData;
}
export class dataConnectors_AmazonWebServicesCloudTrail
	extends ArmResource<dataConnectors_AmazonWebServicesCloudTrailComponentInputs>
	implements dataConnectors_AmazonWebServicesCloudTrailComponentOutputs
{
	constructor(entity: ADKEntity, options: dataConnectors_AmazonWebServicesCloudTrailComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2021-10-01", options);
	}
	public readonly apiVersion: "2021-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_AmazonWebServicesCloudTrailComponentOutputs {
	readonly apiVersion: "2021-10-01";
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
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2021-10-01", options);
	}
	public readonly apiVersion: "2021-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_AzureActiveDirectoryComponentOutputs {
	readonly apiVersion: "2021-10-01";
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
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2021-10-01", options);
	}
	public readonly apiVersion: "2021-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_AzureAdvancedThreatProtectionComponentOutputs {
	readonly apiVersion: "2021-10-01";
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
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2021-10-01", options);
	}
	public readonly apiVersion: "2021-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_AzureSecurityCenterComponentOutputs {
	readonly apiVersion: "2021-10-01";
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
export class dataConnectors_MicrosoftCloudAppSecurity
	extends ArmResource<dataConnectors_MicrosoftCloudAppSecurityComponentInputs>
	implements dataConnectors_MicrosoftCloudAppSecurityComponentOutputs
{
	constructor(entity: ADKEntity, options: dataConnectors_MicrosoftCloudAppSecurityComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2021-10-01", options);
	}
	public readonly apiVersion: "2021-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_MicrosoftCloudAppSecurityComponentOutputs {
	readonly apiVersion: "2021-10-01";
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
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2021-10-01", options);
	}
	public readonly apiVersion: "2021-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_MicrosoftDefenderAdvancedThreatProtectionComponentOutputs {
	readonly apiVersion: "2021-10-01";
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
export class dataConnectors_Office365
	extends ArmResource<dataConnectors_Office365ComponentInputs>
	implements dataConnectors_Office365ComponentOutputs
{
	constructor(entity: ADKEntity, options: dataConnectors_Office365ComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2021-10-01", options);
	}
	public readonly apiVersion: "2021-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_Office365ComponentOutputs {
	readonly apiVersion: "2021-10-01";
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
export class dataConnectors_ThreatIntelligence
	extends ArmResource<dataConnectors_ThreatIntelligenceComponentInputs>
	implements dataConnectors_ThreatIntelligenceComponentOutputs
{
	constructor(entity: ADKEntity, options: dataConnectors_ThreatIntelligenceComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2021-10-01", options);
	}
	public readonly apiVersion: "2021-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_ThreatIntelligenceComponentOutputs {
	readonly apiVersion: "2021-10-01";
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
export class incidents extends ArmResource<incidentsComponentInputs> implements incidentsComponentOutputs {
	constructor(entity: ADKEntity, options: incidentsComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/incidents", "2021-10-01", options);
	}
	public readonly apiVersion: "2021-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/incidents";
}
export interface incidentsComponentOutputs {
	readonly apiVersion: "2021-10-01";
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
		super(entity, options.name, "Microsoft.SecurityInsights/incidents/comments", "2021-10-01", options);
	}
	public readonly apiVersion: "2021-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/incidents/comments";
}
export interface incidents_commentsComponentOutputs {
	readonly apiVersion: "2021-10-01";
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
		super(entity, options.name, "Microsoft.SecurityInsights/incidents/relations", "2021-10-01", options);
	}
	public readonly apiVersion: "2021-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/incidents/relations";
}
export interface incidents_relationsComponentOutputs {
	readonly apiVersion: "2021-10-01";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/incidents/relations";
}
export interface incidents_relationsComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: RelationProperties;
	readonly systemData?: SystemData;
}
export class onboardingStates
	extends ArmResource<onboardingStatesComponentInputs>
	implements onboardingStatesComponentOutputs
{
	constructor(entity: ADKEntity, options: onboardingStatesComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/onboardingStates", "2021-10-01", options);
	}
	public readonly apiVersion: "2021-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/onboardingStates";
}
export interface onboardingStatesComponentOutputs {
	readonly apiVersion: "2021-10-01";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/onboardingStates";
}
export interface onboardingStatesComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: SentinelOnboardingStateProperties;
	readonly systemData?: SystemData;
}
export class threatIntelligence_indicators
	extends ArmResource<threatIntelligence_indicatorsComponentInputs>
	implements threatIntelligence_indicatorsComponentOutputs
{
	constructor(entity: ADKEntity, options: threatIntelligence_indicatorsComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/threatIntelligence/indicators", "2021-10-01", options);
	}
	public readonly apiVersion: "2021-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/threatIntelligence/indicators";
}
export interface threatIntelligence_indicatorsComponentOutputs {
	readonly apiVersion: "2021-10-01";
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
		super(entity, options.name, "Microsoft.SecurityInsights/watchlists", "2021-10-01", options);
	}
	public readonly apiVersion: "2021-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/watchlists";
}
export interface watchlistsComponentOutputs {
	readonly apiVersion: "2021-10-01";
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
		super(entity, options.name, "Microsoft.SecurityInsights/watchlists/watchlistItems", "2021-10-01", options);
	}
	public readonly apiVersion: "2021-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/watchlists/watchlistItems";
}
export interface watchlists_watchlistItemsComponentOutputs {
	readonly apiVersion: "2021-10-01";
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
	readonly tenantId?: string;
}
export interface AatpDataConnectorProperties {
	readonly dataTypes?: AlertsDataTypeOfDataConnector;
	readonly tenantId?: string;
}
export interface ActionRequestPropertiesOrActionResponseProperties {
	readonly logicAppResourceId: string;
	readonly triggerUri: string;
	readonly workflowId?: string;
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
	readonly alerts?: DataConnectorDataTypeCommon;
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
	readonly triggersWhen: "Created";
}
export interface AwsCloudTrailDataConnectorDataTypes {
	readonly logs?: AwsCloudTrailDataConnectorDataTypesLogs;
}
export interface AwsCloudTrailDataConnectorDataTypesLogs {
	readonly state?: "Disabled" | "Enabled";
}
export interface AwsCloudTrailDataConnectorProperties {
	readonly awsRoleArn?: string;
	readonly dataTypes?: AwsCloudTrailDataConnectorDataTypes;
}
export interface BookmarkProperties {
	readonly created?: string;
	readonly createdBy?: UserInfo;
	readonly displayName: string;
	readonly eventTime?: string;
	readonly incidentInfo?: IncidentInfo;
	readonly labels?: string[];
	readonly notes?: string;
	readonly query: string;
	readonly queryEndTime?: string;
	readonly queryResult?: string;
	readonly queryStartTime?: string;
	readonly updated?: string;
	readonly updatedBy?: UserInfo;
}
export interface ClientInfo {
	readonly email?: string;
	readonly name?: string;
	readonly objectId?: string;
	readonly userPrincipalName?: string;
}
export interface DataConnectorDataTypeCommon {
	readonly state?: "Disabled" | "Enabled";
}
export interface EntityCommonPropertiesAdditionalData {
	readonly [key: string]: any;
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
	readonly userPrincipalName?: string;
}
export interface IncidentOwnerInfoAutoGenerated {
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
	readonly relatedAnalyticRuleIds?: string[];
	readonly severity: "High" | "Informational" | "Low" | "Medium";
	readonly status: "Active" | "Closed" | "New";
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
	readonly owner?: IncidentOwnerInfoAutoGenerated;
	readonly severity?: "High" | "Informational" | "Low" | "Medium";
	readonly status?: "Active" | "Closed" | "New";
}
export interface McasDataConnectorDataTypes {
	readonly alerts?: DataConnectorDataTypeCommon;
	readonly discoveryLogs?: DataConnectorDataTypeCommon;
}
export interface McasDataConnectorProperties {
	readonly dataTypes?: McasDataConnectorDataTypes;
	readonly tenantId?: string;
}
export interface MdatpDataConnectorProperties {
	readonly dataTypes?: AlertsDataTypeOfDataConnector;
	readonly tenantId?: string;
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
		| "Microsoft Cloud App Security";
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
		| "Microsoft Cloud App Security";
	readonly requiredDataConnectors?: AlertRuleTemplateDataSource[];
	readonly severitiesFilter?: "High" | "Informational" | "Low" | "Medium"[];
	readonly status?: "Available" | "Installed" | "NotAvailable";
}
export interface OfficeDataConnectorDataTypes {
	readonly exchange?: OfficeDataConnectorDataTypesExchange;
	readonly sharePoint?: OfficeDataConnectorDataTypesSharePoint;
	readonly teams?: OfficeDataConnectorDataTypesTeams;
}
export interface OfficeDataConnectorDataTypesExchange {
	readonly state?: "Disabled" | "Enabled";
}
export interface OfficeDataConnectorDataTypesSharePoint {
	readonly state?: "Disabled" | "Enabled";
}
export interface OfficeDataConnectorDataTypesTeams {
	readonly state?: "Disabled" | "Enabled";
}
export interface OfficeDataConnectorProperties {
	readonly dataTypes?: OfficeDataConnectorDataTypes;
	readonly tenantId?: string;
}
export interface PlaybookActionProperties {
	readonly logicAppResourceId: string;
	readonly tenantId?: string;
}
export interface RelationProperties {
	readonly relatedResourceId: string;
	readonly relatedResourceKind?: string;
	readonly relatedResourceName?: string;
	readonly relatedResourceType?: string;
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
		| "InitialAccess"
		| "LateralMovement"
		| "Persistence"
		| "PreAttack"
		| "PrivilegeEscalation"[];
	readonly triggerOperator?: "Equal" | "GreaterThan" | "LessThan";
	readonly triggerThreshold?: number;
	readonly version?: string;
}
export interface ScheduledAlertRuleTemplatePropertiesCustomDetails {
	readonly [key: string]: string;
}
export interface SentinelOnboardingStateProperties {
	readonly customerManagedKey?: boolean;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
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
	readonly indicators?: TIDataConnectorDataTypesIndicators;
}
export interface TIDataConnectorDataTypesIndicators {
	readonly state?: "Disabled" | "Enabled";
}
export interface TIDataConnectorProperties {
	readonly dataTypes?: TIDataConnectorDataTypes;
	readonly tenantId?: string;
	readonly tipLookbackPeriod?: string;
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
	readonly watchlistType?: string;
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
	"threatIntelligence/indicators": threatIntelligence_indicators,
	watchlists: watchlists,
	"watchlists/watchlistItems": watchlists_watchlistItems,
};

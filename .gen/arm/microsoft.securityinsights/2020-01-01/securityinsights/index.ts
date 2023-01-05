import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class alertRules_Fusion
	extends ArmResource<alertRules_FusionComponentInputs>
	implements alertRules_FusionComponentOutputs
{
	constructor(entity: ADKEntity, options: alertRules_FusionComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/alertRules", "2020-01-01", options);
	}
	public readonly apiVersion: "2020-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/alertRules";
}
export interface alertRules_FusionComponentOutputs {
	readonly apiVersion: "2020-01-01";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/alertRules";
}
export interface alertRules_FusionComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly kind: "Fusion";
	readonly properties?: FusionAlertRuleProperties;
}
export class alertRules_MicrosoftSecurityIncidentCreation
	extends ArmResource<alertRules_MicrosoftSecurityIncidentCreationComponentInputs>
	implements alertRules_MicrosoftSecurityIncidentCreationComponentOutputs
{
	constructor(entity: ADKEntity, options: alertRules_MicrosoftSecurityIncidentCreationComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/alertRules", "2020-01-01", options);
	}
	public readonly apiVersion: "2020-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/alertRules";
}
export interface alertRules_MicrosoftSecurityIncidentCreationComponentOutputs {
	readonly apiVersion: "2020-01-01";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/alertRules";
}
export interface alertRules_MicrosoftSecurityIncidentCreationComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly kind: "MicrosoftSecurityIncidentCreation";
	readonly properties?: MicrosoftSecurityIncidentCreationAlertRuleProperties;
}
export class alertRules_Scheduled
	extends ArmResource<alertRules_ScheduledComponentInputs>
	implements alertRules_ScheduledComponentOutputs
{
	constructor(entity: ADKEntity, options: alertRules_ScheduledComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/alertRules", "2020-01-01", options);
	}
	public readonly apiVersion: "2020-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/alertRules";
}
export interface alertRules_ScheduledComponentOutputs {
	readonly apiVersion: "2020-01-01";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/alertRules";
}
export interface alertRules_ScheduledComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly kind: "Scheduled";
	readonly properties?: ScheduledAlertRuleProperties;
}
export class alertRules_actions
	extends ArmResource<alertRules_actionsComponentInputs>
	implements alertRules_actionsComponentOutputs
{
	constructor(entity: ADKEntity, options: alertRules_actionsComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/alertRules/actions", "2020-01-01", options);
	}
	public readonly apiVersion: "2020-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/alertRules/actions";
}
export interface alertRules_actionsComponentOutputs {
	readonly apiVersion: "2020-01-01";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/alertRules/actions";
}
export interface alertRules_actionsComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: ActionRequestPropertiesOrActionResponseProperties;
}
export class alertRuleTemplates_Fusion
	extends ArmResource<alertRuleTemplates_FusionComponentInputs>
	implements alertRuleTemplates_FusionComponentOutputs
{
	constructor(entity: ADKEntity, options: alertRuleTemplates_FusionComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/alertRuleTemplates", "2020-01-01", options);
	}
	public readonly apiVersion: "2020-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/alertRuleTemplates";
}
export interface alertRuleTemplates_FusionComponentOutputs {
	readonly apiVersion: "2020-01-01";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/alertRuleTemplates";
}
export interface alertRuleTemplates_FusionComponentInputs {
	readonly name: string;
	readonly kind: "Fusion";
	readonly properties?: FusionAlertRuleTemplateProperties;
}
export class alertRuleTemplates_MicrosoftSecurityIncidentCreation
	extends ArmResource<alertRuleTemplates_MicrosoftSecurityIncidentCreationComponentInputs>
	implements alertRuleTemplates_MicrosoftSecurityIncidentCreationComponentOutputs
{
	constructor(entity: ADKEntity, options: alertRuleTemplates_MicrosoftSecurityIncidentCreationComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/alertRuleTemplates", "2020-01-01", options);
	}
	public readonly apiVersion: "2020-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/alertRuleTemplates";
}
export interface alertRuleTemplates_MicrosoftSecurityIncidentCreationComponentOutputs {
	readonly apiVersion: "2020-01-01";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/alertRuleTemplates";
}
export interface alertRuleTemplates_MicrosoftSecurityIncidentCreationComponentInputs {
	readonly name: string;
	readonly kind: "MicrosoftSecurityIncidentCreation";
	readonly properties?: MicrosoftSecurityIncidentCreationAlertRuleTemplateProperties;
}
export class alertRuleTemplates_Scheduled
	extends ArmResource<alertRuleTemplates_ScheduledComponentInputs>
	implements alertRuleTemplates_ScheduledComponentOutputs
{
	constructor(entity: ADKEntity, options: alertRuleTemplates_ScheduledComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/alertRuleTemplates", "2020-01-01", options);
	}
	public readonly apiVersion: "2020-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/alertRuleTemplates";
}
export interface alertRuleTemplates_ScheduledComponentOutputs {
	readonly apiVersion: "2020-01-01";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/alertRuleTemplates";
}
export interface alertRuleTemplates_ScheduledComponentInputs {
	readonly name: string;
	readonly kind: "Scheduled";
	readonly properties?: ScheduledAlertRuleTemplateProperties;
}
export class bookmarks extends ArmResource<bookmarksComponentInputs> implements bookmarksComponentOutputs {
	constructor(entity: ADKEntity, options: bookmarksComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/bookmarks", "2020-01-01", options);
	}
	public readonly apiVersion: "2020-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/bookmarks";
}
export interface bookmarksComponentOutputs {
	readonly apiVersion: "2020-01-01";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/bookmarks";
}
export interface bookmarksComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: BookmarkProperties;
}
export class dataConnectors_AmazonWebServicesCloudTrail
	extends ArmResource<dataConnectors_AmazonWebServicesCloudTrailComponentInputs>
	implements dataConnectors_AmazonWebServicesCloudTrailComponentOutputs
{
	constructor(entity: ADKEntity, options: dataConnectors_AmazonWebServicesCloudTrailComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2020-01-01", options);
	}
	public readonly apiVersion: "2020-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_AmazonWebServicesCloudTrailComponentOutputs {
	readonly apiVersion: "2020-01-01";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_AmazonWebServicesCloudTrailComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly kind: "AmazonWebServicesCloudTrail";
	readonly properties?: AwsCloudTrailDataConnectorProperties;
}
export class dataConnectors_AzureActiveDirectory
	extends ArmResource<dataConnectors_AzureActiveDirectoryComponentInputs>
	implements dataConnectors_AzureActiveDirectoryComponentOutputs
{
	constructor(entity: ADKEntity, options: dataConnectors_AzureActiveDirectoryComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2020-01-01", options);
	}
	public readonly apiVersion: "2020-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_AzureActiveDirectoryComponentOutputs {
	readonly apiVersion: "2020-01-01";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_AzureActiveDirectoryComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly kind: "AzureActiveDirectory";
	readonly properties?: AADDataConnectorProperties;
}
export class dataConnectors_AzureAdvancedThreatProtection
	extends ArmResource<dataConnectors_AzureAdvancedThreatProtectionComponentInputs>
	implements dataConnectors_AzureAdvancedThreatProtectionComponentOutputs
{
	constructor(entity: ADKEntity, options: dataConnectors_AzureAdvancedThreatProtectionComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2020-01-01", options);
	}
	public readonly apiVersion: "2020-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_AzureAdvancedThreatProtectionComponentOutputs {
	readonly apiVersion: "2020-01-01";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_AzureAdvancedThreatProtectionComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly kind: "AzureAdvancedThreatProtection";
	readonly properties?: AatpDataConnectorProperties;
}
export class dataConnectors_AzureSecurityCenter
	extends ArmResource<dataConnectors_AzureSecurityCenterComponentInputs>
	implements dataConnectors_AzureSecurityCenterComponentOutputs
{
	constructor(entity: ADKEntity, options: dataConnectors_AzureSecurityCenterComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2020-01-01", options);
	}
	public readonly apiVersion: "2020-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_AzureSecurityCenterComponentOutputs {
	readonly apiVersion: "2020-01-01";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_AzureSecurityCenterComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly kind: "AzureSecurityCenter";
	readonly properties?: ASCDataConnectorProperties;
}
export class dataConnectors_MicrosoftCloudAppSecurity
	extends ArmResource<dataConnectors_MicrosoftCloudAppSecurityComponentInputs>
	implements dataConnectors_MicrosoftCloudAppSecurityComponentOutputs
{
	constructor(entity: ADKEntity, options: dataConnectors_MicrosoftCloudAppSecurityComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2020-01-01", options);
	}
	public readonly apiVersion: "2020-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_MicrosoftCloudAppSecurityComponentOutputs {
	readonly apiVersion: "2020-01-01";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_MicrosoftCloudAppSecurityComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly kind: "MicrosoftCloudAppSecurity";
	readonly properties?: McasDataConnectorProperties;
}
export class dataConnectors_MicrosoftDefenderAdvancedThreatProtection
	extends ArmResource<dataConnectors_MicrosoftDefenderAdvancedThreatProtectionComponentInputs>
	implements dataConnectors_MicrosoftDefenderAdvancedThreatProtectionComponentOutputs
{
	constructor(entity: ADKEntity, options: dataConnectors_MicrosoftDefenderAdvancedThreatProtectionComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2020-01-01", options);
	}
	public readonly apiVersion: "2020-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_MicrosoftDefenderAdvancedThreatProtectionComponentOutputs {
	readonly apiVersion: "2020-01-01";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_MicrosoftDefenderAdvancedThreatProtectionComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly kind: "MicrosoftDefenderAdvancedThreatProtection";
	readonly properties?: MdatpDataConnectorProperties;
}
export class dataConnectors_Office365
	extends ArmResource<dataConnectors_Office365ComponentInputs>
	implements dataConnectors_Office365ComponentOutputs
{
	constructor(entity: ADKEntity, options: dataConnectors_Office365ComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2020-01-01", options);
	}
	public readonly apiVersion: "2020-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_Office365ComponentOutputs {
	readonly apiVersion: "2020-01-01";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_Office365ComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly kind: "Office365";
	readonly properties?: OfficeDataConnectorProperties;
}
export class dataConnectors_ThreatIntelligence
	extends ArmResource<dataConnectors_ThreatIntelligenceComponentInputs>
	implements dataConnectors_ThreatIntelligenceComponentOutputs
{
	constructor(entity: ADKEntity, options: dataConnectors_ThreatIntelligenceComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2020-01-01", options);
	}
	public readonly apiVersion: "2020-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_ThreatIntelligenceComponentOutputs {
	readonly apiVersion: "2020-01-01";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectors_ThreatIntelligenceComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly kind: "ThreatIntelligence";
	readonly properties?: TIDataConnectorProperties;
}
export class incidents extends ArmResource<incidentsComponentInputs> implements incidentsComponentOutputs {
	constructor(entity: ADKEntity, options: incidentsComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/incidents", "2020-01-01", options);
	}
	public readonly apiVersion: "2020-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/incidents";
}
export interface incidentsComponentOutputs {
	readonly apiVersion: "2020-01-01";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/incidents";
}
export interface incidentsComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: IncidentProperties;
}
export class incidents_comments
	extends ArmResource<incidents_commentsComponentInputs>
	implements incidents_commentsComponentOutputs
{
	constructor(entity: ADKEntity, options: incidents_commentsComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/incidents/comments", "2020-01-01", options);
	}
	public readonly apiVersion: "2020-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/incidents/comments";
}
export interface incidents_commentsComponentOutputs {
	readonly apiVersion: "2020-01-01";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/incidents/comments";
}
export interface incidents_commentsComponentInputs {
	readonly name: string;
	readonly properties?: IncidentCommentProperties;
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
		| "PrivilegeEscalation"[];
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
		| "PrivilegeEscalation"[];
}
export interface IncidentCommentProperties {
	readonly author?: ClientInfo;
	readonly createdTimeUtc?: string;
	readonly message: string;
}
export interface IncidentInfo {
	readonly incidentId?: string;
	readonly relationName?: string;
	readonly severity?: "High" | "Informational" | "Low" | "Medium";
	readonly title?: string;
}
export interface IncidentLabel {
	readonly labelName: string;
	readonly labelType?: "System" | "User";
}
export interface IncidentOwnerInfo {
	readonly assignedTo?: string;
	readonly email?: string;
	readonly objectId?: string;
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
export interface ScheduledAlertRuleProperties {
	readonly alertRuleTemplateName?: string;
	readonly description?: string;
	readonly displayName: string;
	readonly enabled: boolean;
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
		| "PrivilegeEscalation"[];
	readonly triggerOperator?: "Equal" | "GreaterThan" | "LessThan";
	readonly triggerThreshold?: number;
}
export interface ScheduledAlertRuleTemplateProperties {
	readonly alertRulesCreatedByTemplateCount?: number;
	readonly createdDateUTC?: string;
	readonly description?: string;
	readonly displayName?: string;
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
		| "PrivilegeEscalation"[];
	readonly triggerOperator?: "Equal" | "GreaterThan" | "LessThan";
	readonly triggerThreshold?: number;
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
	readonly objectId: string;
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
};

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
	readonly etag?: string | undefined;
	readonly name: string;
	readonly kind: "Fusion";
	readonly properties?: FusionAlertRuleProperties | undefined;
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
	readonly etag?: string | undefined;
	readonly name: string;
	readonly kind: "MicrosoftSecurityIncidentCreation";
	readonly properties?: MicrosoftSecurityIncidentCreationAlertRuleProperties | undefined;
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
	readonly etag?: string | undefined;
	readonly name: string;
	readonly kind: "Scheduled";
	readonly properties?: ScheduledAlertRuleProperties | undefined;
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
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: ActionRequestPropertiesOrActionResponseProperties | undefined;
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
	readonly properties?: FusionAlertRuleTemplateProperties | undefined;
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
	readonly properties?: MicrosoftSecurityIncidentCreationAlertRuleTemplateProperties | undefined;
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
	readonly properties?: ScheduledAlertRuleTemplateProperties | undefined;
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
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: BookmarkProperties | undefined;
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
	readonly etag?: string | undefined;
	readonly name: string;
	readonly kind: "AmazonWebServicesCloudTrail";
	readonly properties?: AwsCloudTrailDataConnectorProperties | undefined;
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
	readonly etag?: string | undefined;
	readonly name: string;
	readonly kind: "AzureActiveDirectory";
	readonly properties?: AADDataConnectorProperties | undefined;
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
	readonly etag?: string | undefined;
	readonly name: string;
	readonly kind: "AzureAdvancedThreatProtection";
	readonly properties?: AatpDataConnectorProperties | undefined;
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
	readonly etag?: string | undefined;
	readonly name: string;
	readonly kind: "AzureSecurityCenter";
	readonly properties?: ASCDataConnectorProperties | undefined;
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
	readonly etag?: string | undefined;
	readonly name: string;
	readonly kind: "MicrosoftCloudAppSecurity";
	readonly properties?: McasDataConnectorProperties | undefined;
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
	readonly etag?: string | undefined;
	readonly name: string;
	readonly kind: "MicrosoftDefenderAdvancedThreatProtection";
	readonly properties?: MdatpDataConnectorProperties | undefined;
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
	readonly etag?: string | undefined;
	readonly name: string;
	readonly kind: "Office365";
	readonly properties?: OfficeDataConnectorProperties | undefined;
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
	readonly etag?: string | undefined;
	readonly name: string;
	readonly kind: "ThreatIntelligence";
	readonly properties?: TIDataConnectorProperties | undefined;
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
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: IncidentProperties | undefined;
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
	readonly properties?: IncidentCommentProperties | undefined;
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
export interface AlertRuleTemplateDataSource {
	readonly connectorId?: string | undefined;
	readonly dataTypes?: string[] | undefined;
}
export interface AlertsDataTypeOfDataConnector {
	readonly alerts?: DataConnectorDataTypeCommon | undefined;
}
export interface ASCDataConnectorProperties {
	readonly dataTypes?: AlertsDataTypeOfDataConnector | undefined;
	readonly subscriptionId?: string | undefined;
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
				| "PrivilegeEscalation"[]
		  )
		| undefined;
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
				| "PrivilegeEscalation"[]
		  )
		| undefined;
}
export interface IncidentCommentProperties {
	readonly author?: ClientInfo | undefined;
	readonly createdTimeUtc?: string | undefined;
	readonly message: string;
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
export interface ScheduledAlertRuleProperties {
	readonly alertRuleTemplateName?: string | undefined;
	readonly description?: string | undefined;
	readonly displayName: string;
	readonly enabled: boolean;
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
				| "PrivilegeEscalation"[]
		  )
		| undefined;
	readonly triggerOperator?: ("Equal" | "GreaterThan" | "LessThan") | undefined;
	readonly triggerThreshold?: number | undefined;
}
export interface ScheduledAlertRuleTemplateProperties {
	readonly alertRulesCreatedByTemplateCount?: number | undefined;
	readonly createdDateUTC?: string | undefined;
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
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
				| "PrivilegeEscalation"[]
		  )
		| undefined;
	readonly triggerOperator?: ("Equal" | "GreaterThan" | "LessThan") | undefined;
	readonly triggerThreshold?: number | undefined;
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

import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class aggregations extends ArmResource<aggregationsComponentInputs> implements aggregationsComponentOutputs {
	constructor(entity: ADKEntity, options: aggregationsComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/aggregations", "2019-01-01-preview", options);
	}
	public readonly apiVersion: "2019-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/aggregations";
}
export interface aggregationsComponentOutputs {
	readonly apiVersion: "2019-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/aggregations";
}
export interface aggregationsComponentInputs {
	readonly kind?: "CasesAggregation" | undefined;
	readonly name: string;
}
export class alertRules extends ArmResource<alertRulesComponentInputs> implements alertRulesComponentOutputs {
	constructor(entity: ADKEntity, options: alertRulesComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/alertRules", "2019-01-01-preview", options);
	}
	public readonly apiVersion: "2019-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/alertRules";
}
export interface alertRulesComponentOutputs {
	readonly apiVersion: "2019-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/alertRules";
}
export interface alertRulesComponentInputs {
	readonly etag?: string | undefined;
	readonly kind:
		| "Fusion"
		| "MLBehaviorAnalytics"
		| "MicrosoftSecurityIncidentCreation"
		| "Scheduled"
		| "ThreatIntelligence";
	readonly name: string;
}
export class alertRules_actions
	extends ArmResource<alertRules_actionsComponentInputs>
	implements alertRules_actionsComponentOutputs
{
	constructor(entity: ADKEntity, options: alertRules_actionsComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/alertRules/actions", "2019-01-01-preview", options);
	}
	public readonly apiVersion: "2019-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/alertRules/actions";
}
export interface alertRules_actionsComponentOutputs {
	readonly apiVersion: "2019-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/alertRules/actions";
}
export interface alertRules_actionsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: ActionRequestPropertiesOrActionResponseProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class alertRuleTemplates
	extends ArmResource<alertRuleTemplatesComponentInputs>
	implements alertRuleTemplatesComponentOutputs
{
	constructor(entity: ADKEntity, options: alertRuleTemplatesComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/alertRuleTemplates", "2019-01-01-preview", options);
	}
	public readonly apiVersion: "2019-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/alertRuleTemplates";
}
export interface alertRuleTemplatesComponentOutputs {
	readonly apiVersion: "2019-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/alertRuleTemplates";
}
export interface alertRuleTemplatesComponentInputs {
	readonly kind?:
		| ("Fusion" | "MLBehaviorAnalytics" | "MicrosoftSecurityIncidentCreation" | "Scheduled" | "ThreatIntelligence")
		| undefined;
	readonly name: string;
}
export class automationRules
	extends ArmResource<automationRulesComponentInputs>
	implements automationRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: automationRulesComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/automationRules", "2019-01-01-preview", options);
	}
	public readonly apiVersion: "2019-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/automationRules";
}
export interface automationRulesComponentOutputs {
	readonly apiVersion: "2019-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/automationRules";
}
export interface automationRulesComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: AutomationRuleProperties | undefined;
}
export class bookmarks extends ArmResource<bookmarksComponentInputs> implements bookmarksComponentOutputs {
	constructor(entity: ADKEntity, options: bookmarksComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/bookmarks", "2019-01-01-preview", options);
	}
	public readonly apiVersion: "2019-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/bookmarks";
}
export interface bookmarksComponentOutputs {
	readonly apiVersion: "2019-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/bookmarks";
}
export interface bookmarksComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: BookmarkProperties | undefined;
}
export class bookmarks_relations
	extends ArmResource<bookmarks_relationsComponentInputs>
	implements bookmarks_relationsComponentOutputs
{
	constructor(entity: ADKEntity, options: bookmarks_relationsComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/bookmarks/relations", "2019-01-01-preview", options);
	}
	public readonly apiVersion: "2019-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/bookmarks/relations";
}
export interface bookmarks_relationsComponentOutputs {
	readonly apiVersion: "2019-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/bookmarks/relations";
}
export interface bookmarks_relationsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: RelationProperties | undefined;
}
export class cases extends ArmResource<casesComponentInputs> implements casesComponentOutputs {
	constructor(entity: ADKEntity, options: casesComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/cases", "2019-01-01-preview", options);
	}
	public readonly apiVersion: "2019-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/cases";
}
export interface casesComponentOutputs {
	readonly apiVersion: "2019-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/cases";
}
export interface casesComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: CaseProperties | undefined;
}
export class cases_comments extends ArmResource<cases_commentsComponentInputs> implements cases_commentsComponentOutputs {
	constructor(entity: ADKEntity, options: cases_commentsComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/cases/comments", "2019-01-01-preview", options);
	}
	public readonly apiVersion: "2019-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/cases/comments";
}
export interface cases_commentsComponentOutputs {
	readonly apiVersion: "2019-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/cases/comments";
}
export interface cases_commentsComponentInputs {
	readonly name: string;
	readonly properties?: CaseCommentProperties | undefined;
}
export class cases_relations
	extends ArmResource<cases_relationsComponentInputs>
	implements cases_relationsComponentOutputs
{
	constructor(entity: ADKEntity, options: cases_relationsComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/cases/relations", "2019-01-01-preview", options);
	}
	public readonly apiVersion: "2019-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/cases/relations";
}
export interface cases_relationsComponentOutputs {
	readonly apiVersion: "2019-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/cases/relations";
}
export interface cases_relationsComponentInputs {
	readonly etag?: string | undefined;
	readonly kind?: "CasesToBookmarks" | undefined;
	readonly name: string;
	readonly properties?: RelationsModelInputPropertiesOrCaseRelationProperties | undefined;
}
export class dataConnectors extends ArmResource<dataConnectorsComponentInputs> implements dataConnectorsComponentOutputs {
	constructor(entity: ADKEntity, options: dataConnectorsComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/dataConnectors", "2019-01-01-preview", options);
	}
	public readonly apiVersion: "2019-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectorsComponentOutputs {
	readonly apiVersion: "2019-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/dataConnectors";
}
export interface dataConnectorsComponentInputs {
	readonly etag?: string | undefined;
	readonly kind:
		| "AmazonWebServicesCloudTrail"
		| "AzureActiveDirectory"
		| "AzureAdvancedThreatProtection"
		| "AzureSecurityCenter"
		| "Dynamics365"
		| "MicrosoftCloudAppSecurity"
		| "MicrosoftDefenderAdvancedThreatProtection"
		| "MicrosoftThreatIntelligence"
		| "MicrosoftThreatProtection"
		| "Office365"
		| "OfficeATP"
		| "ThreatIntelligence"
		| "ThreatIntelligenceTaxii";
	readonly name: string;
}
export class entities extends ArmResource<entitiesComponentInputs> implements entitiesComponentOutputs {
	constructor(entity: ADKEntity, options: entitiesComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/entities", "2019-01-01-preview", options);
	}
	public readonly apiVersion: "2019-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entitiesComponentOutputs {
	readonly apiVersion: "2019-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/entities";
}
export interface entitiesComponentInputs {
	readonly kind?:
		| (
				| "Account"
				| "AzureResource"
				| "Bookmark"
				| "CloudApplication"
				| "DnsResolution"
				| "File"
				| "FileHash"
				| "Host"
				| "IoTDevice"
				| "Ip"
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
				| "Url"
		  )
		| undefined;
	readonly name: string;
}
export class entities_relations
	extends ArmResource<entities_relationsComponentInputs>
	implements entities_relationsComponentOutputs
{
	constructor(entity: ADKEntity, options: entities_relationsComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/entities/relations", "2019-01-01-preview", options);
	}
	public readonly apiVersion: "2019-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/entities/relations";
}
export interface entities_relationsComponentOutputs {
	readonly apiVersion: "2019-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/entities/relations";
}
export interface entities_relationsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: RelationProperties | undefined;
}
export class entityQueries extends ArmResource<entityQueriesComponentInputs> implements entityQueriesComponentOutputs {
	constructor(entity: ADKEntity, options: entityQueriesComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/entityQueries", "2019-01-01-preview", options);
	}
	public readonly apiVersion: "2019-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/entityQueries";
}
export interface entityQueriesComponentOutputs {
	readonly apiVersion: "2019-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/entityQueries";
}
export interface entityQueriesComponentInputs {
	readonly etag?: string | undefined;
	readonly kind?: ("Expansion" | "Insight") | undefined;
	readonly name: string;
}
export class incidents extends ArmResource<incidentsComponentInputs> implements incidentsComponentOutputs {
	constructor(entity: ADKEntity, options: incidentsComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/incidents", "2019-01-01-preview", options);
	}
	public readonly apiVersion: "2019-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/incidents";
}
export interface incidentsComponentOutputs {
	readonly apiVersion: "2019-01-01-preview";
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
		super(entity, options.name, "Microsoft.SecurityInsights/incidents/comments", "2019-01-01-preview", options);
	}
	public readonly apiVersion: "2019-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/incidents/comments";
}
export interface incidents_commentsComponentOutputs {
	readonly apiVersion: "2019-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/incidents/comments";
}
export interface incidents_commentsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: IncidentCommentProperties | undefined;
}
export class incidents_relations
	extends ArmResource<incidents_relationsComponentInputs>
	implements incidents_relationsComponentOutputs
{
	constructor(entity: ADKEntity, options: incidents_relationsComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/incidents/relations", "2019-01-01-preview", options);
	}
	public readonly apiVersion: "2019-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/incidents/relations";
}
export interface incidents_relationsComponentOutputs {
	readonly apiVersion: "2019-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/incidents/relations";
}
export interface incidents_relationsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: RelationProperties | undefined;
}
export class officeConsents extends ArmResource<officeConsentsComponentInputs> implements officeConsentsComponentOutputs {
	constructor(entity: ADKEntity, options: officeConsentsComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/officeConsents", "2019-01-01-preview", options);
	}
	public readonly apiVersion: "2019-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/officeConsents";
}
export interface officeConsentsComponentOutputs {
	readonly apiVersion: "2019-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/officeConsents";
}
export interface officeConsentsComponentInputs {
	readonly name: string;
	readonly properties?: OfficeConsentProperties | undefined;
}
export class settings extends ArmResource<settingsComponentInputs> implements settingsComponentOutputs {
	constructor(entity: ADKEntity, options: settingsComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/settings", "2019-01-01-preview", options);
	}
	public readonly apiVersion: "2019-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/settings";
}
export interface settingsComponentOutputs {
	readonly apiVersion: "2019-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/settings";
}
export interface settingsComponentInputs {
	readonly etag?: string | undefined;
	readonly kind: "Anomalies" | "EntityAnalytics" | "EyesOn" | "Ueba";
	readonly name: string;
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
			"2019-01-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2019-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/threatIntelligence/indicators";
}
export interface threatIntelligence_indicatorsComponentOutputs {
	readonly apiVersion: "2019-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/threatIntelligence/indicators";
}
export interface threatIntelligence_indicatorsComponentInputs {
	readonly etag?: string | undefined;
	readonly kind: "indicator";
	readonly name: string;
	readonly properties?: ThreatIntelligenceIndicatorProperties | undefined;
}
export class watchlists extends ArmResource<watchlistsComponentInputs> implements watchlistsComponentOutputs {
	constructor(entity: ADKEntity, options: watchlistsComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/watchlists", "2019-01-01-preview", options);
	}
	public readonly apiVersion: "2019-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/watchlists";
}
export interface watchlistsComponentOutputs {
	readonly apiVersion: "2019-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/watchlists";
}
export interface watchlistsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: WatchlistProperties | undefined;
}
export class watchlists_watchlistItems
	extends ArmResource<watchlists_watchlistItemsComponentInputs>
	implements watchlists_watchlistItemsComponentOutputs
{
	constructor(entity: ADKEntity, options: watchlists_watchlistItemsComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/watchlists/watchlistItems", "2019-01-01-preview", options);
	}
	public readonly apiVersion: "2019-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/watchlists/watchlistItems";
}
export interface watchlists_watchlistItemsComponentOutputs {
	readonly apiVersion: "2019-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/watchlists/watchlistItems";
}
export interface watchlists_watchlistItemsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: WatchlistItemProperties | undefined;
}
export interface ActionRequestPropertiesOrActionResponseProperties {
	readonly logicAppResourceId: string;
	readonly triggerUri: string;
	readonly workflowId?: string | undefined;
}
export interface AutomationRuleAction {
	readonly order: number;
}
export interface AutomationRuleCondition {}
export interface AutomationRuleModifyPropertiesActionConfiguration {
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
export interface AutomationRulePropertyValuesConditionProperties {
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
export interface AutomationRuleRunPlaybookActionConfiguration {
	readonly logicAppResourceId?: string | undefined;
	readonly tenantId?: string | undefined;
}
export interface AutomationRuleTriggeringLogic {
	readonly conditions?: AutomationRuleCondition[] | undefined;
	readonly expirationTimeUtc?: string | undefined;
	readonly isEnabled: boolean;
	readonly triggersOn: "Incidents";
	readonly triggersWhen: "Created";
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
export interface CaseCommentProperties {
	readonly createdTimeUtc?: string | undefined;
	readonly message: string;
	readonly userInfo?: UserInfo | undefined;
}
export interface CaseProperties {
	readonly caseNumber?: number | undefined;
	readonly closedReasonText?: string | undefined;
	readonly closeReason?: ("Dismissed" | "FalsePositive" | "Other" | "Resolved" | "TruePositive") | undefined;
	readonly createdTimeUtc?: string | undefined;
	readonly description?: string | undefined;
	readonly endTimeUtc?: string | undefined;
	readonly labels?: string[] | undefined;
	readonly lastComment?: string | undefined;
	readonly lastUpdatedTimeUtc?: string | undefined;
	readonly metrics?: CasePropertiesMetrics | undefined;
	readonly owner?: UserInfo | undefined;
	readonly relatedAlertIds?: string[] | undefined;
	readonly relatedAlertProductNames?: string[] | undefined;
	readonly severity: "Critical" | "High" | "Informational" | "Low" | "Medium";
	readonly startTimeUtc?: string | undefined;
	readonly status: "Closed" | "Draft" | "InProgress" | "New";
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
	readonly title: string;
	readonly totalComments?: number | undefined;
}
export interface CasePropertiesMetrics {
	readonly "[ key: string ]"?: number | undefined;
}
export interface ClientInfo {
	readonly email?: string | undefined;
	readonly name?: string | undefined;
	readonly objectId?: string | undefined;
	readonly userPrincipalName?: string | undefined;
}
export interface EntityCommonPropertiesAdditionalData {
	readonly "[ key: string ]"?: any | undefined;
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
	readonly providerIncidentId?: string | undefined;
	readonly providerName?: string | undefined;
	readonly relatedAnalyticRuleIds?: string[] | undefined;
	readonly severity: "High" | "Informational" | "Low" | "Medium";
	readonly status: "Active" | "Closed" | "New";
	readonly title: string;
}
export interface OfficeConsentProperties {
	readonly consentId?: string | undefined;
	readonly tenantId?: string | undefined;
}
export interface RelationNode {
	readonly etag?: string | undefined;
	readonly relationAdditionalProperties?: RelationNodeRelationAdditionalProperties | undefined;
	readonly relationNodeId?: string | undefined;
	readonly relationNodeKind?: ("Bookmark" | "Case") | undefined;
}
export interface RelationNodeRelationAdditionalProperties {
	readonly "[ key: string ]"?: string | undefined;
}
export interface RelationProperties {
	readonly relatedResourceId: string;
	readonly relatedResourceKind?: string | undefined;
	readonly relatedResourceName?: string | undefined;
	readonly relatedResourceType?: string | undefined;
}
export interface RelationsModelInputPropertiesOrCaseRelationProperties {
	readonly bookmarkId?: string | undefined;
	readonly bookmarkName?: string | undefined;
	readonly caseIdentifier?: string | undefined;
	readonly relationName?: string | undefined;
	readonly sourceRelationNode?: RelationNode | undefined;
	readonly targetRelationNode?: RelationNode | undefined;
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
export default {
	aggregations: aggregations,
	alertRules: alertRules,
	"alertRules/actions": alertRules_actions,
	alertRuleTemplates: alertRuleTemplates,
	automationRules: automationRules,
	bookmarks: bookmarks,
	"bookmarks/relations": bookmarks_relations,
	cases: cases,
	"cases/comments": cases_comments,
	"cases/relations": cases_relations,
	dataConnectors: dataConnectors,
	entities: entities,
	"entities/relations": entities_relations,
	entityQueries: entityQueries,
	incidents: incidents,
	"incidents/comments": incidents_comments,
	"incidents/relations": incidents_relations,
	officeConsents: officeConsents,
	settings: settings,
	"threatIntelligence/indicators": threatIntelligence_indicators,
	watchlists: watchlists,
	"watchlists/watchlistItems": watchlists_watchlistItems,
};

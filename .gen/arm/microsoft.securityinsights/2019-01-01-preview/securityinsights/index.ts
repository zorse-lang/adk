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
	readonly kind?: "CasesAggregation";
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
	readonly etag?: string;
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
	readonly etag?: string;
	readonly name: string;
	readonly properties?: ActionRequestPropertiesOrActionResponseProperties;
	readonly systemData?: SystemData;
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
		| "Fusion"
		| "MLBehaviorAnalytics"
		| "MicrosoftSecurityIncidentCreation"
		| "Scheduled"
		| "ThreatIntelligence";
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
	readonly etag?: string;
	readonly name: string;
	readonly properties?: AutomationRuleProperties;
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
	readonly etag?: string;
	readonly name: string;
	readonly properties?: BookmarkProperties;
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
	readonly etag?: string;
	readonly name: string;
	readonly properties?: RelationProperties;
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
	readonly etag?: string;
	readonly name: string;
	readonly properties?: CaseProperties;
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
	readonly properties?: CaseCommentProperties;
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
	readonly etag?: string;
	readonly kind?: "CasesToBookmarks";
	readonly name: string;
	readonly properties?: RelationsModelInputPropertiesOrCaseRelationProperties;
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
	readonly etag?: string;
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
		| "Url";
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
	readonly etag?: string;
	readonly name: string;
	readonly properties?: RelationProperties;
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
	readonly etag?: string;
	readonly kind?: "Expansion" | "Insight";
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
	readonly etag?: string;
	readonly name: string;
	readonly properties?: IncidentProperties;
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
	readonly etag?: string;
	readonly name: string;
	readonly properties?: IncidentCommentProperties;
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
	readonly etag?: string;
	readonly name: string;
	readonly properties?: RelationProperties;
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
	readonly properties?: OfficeConsentProperties;
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
	readonly etag?: string;
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
	readonly etag?: string;
	readonly kind: "indicator";
	readonly name: string;
	readonly properties?: ThreatIntelligenceIndicatorProperties;
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
	readonly etag?: string;
	readonly name: string;
	readonly properties?: WatchlistProperties;
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
	readonly etag?: string;
	readonly name: string;
	readonly properties?: WatchlistItemProperties;
}
export interface ActionRequestPropertiesOrActionResponseProperties {
	readonly logicAppResourceId: string;
	readonly triggerUri: string;
	readonly workflowId?: string;
}
export interface AutomationRuleAction {
	readonly order: number;
}
export interface AutomationRuleCondition {}
export interface AutomationRuleModifyPropertiesActionConfiguration {
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
export interface AutomationRulePropertyValuesConditionProperties {
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
		| "Url";
	readonly propertyValues?: string[];
}
export interface AutomationRuleRunPlaybookActionConfiguration {
	readonly logicAppResourceId?: string;
	readonly tenantId?: string;
}
export interface AutomationRuleTriggeringLogic {
	readonly conditions?: AutomationRuleCondition[];
	readonly expirationTimeUtc?: string;
	readonly isEnabled: boolean;
	readonly triggersOn: "Incidents";
	readonly triggersWhen: "Created";
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
export interface CaseCommentProperties {
	readonly createdTimeUtc?: string;
	readonly message: string;
	readonly userInfo?: UserInfo;
}
export interface CaseProperties {
	readonly caseNumber?: number;
	readonly closedReasonText?: string;
	readonly closeReason?: "Dismissed" | "FalsePositive" | "Other" | "Resolved" | "TruePositive";
	readonly createdTimeUtc?: string;
	readonly description?: string;
	readonly endTimeUtc?: string;
	readonly labels?: string[];
	readonly lastComment?: string;
	readonly lastUpdatedTimeUtc?: string;
	readonly metrics?: CasePropertiesMetrics;
	readonly owner?: UserInfo;
	readonly relatedAlertIds?: string[];
	readonly relatedAlertProductNames?: string[];
	readonly severity: "Critical" | "High" | "Informational" | "Low" | "Medium";
	readonly startTimeUtc?: string;
	readonly status: "Closed" | "Draft" | "InProgress" | "New";
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
	readonly title: string;
	readonly totalComments?: number;
}
export interface CasePropertiesMetrics {
	readonly [key: string]: number;
}
export interface ClientInfo {
	readonly email?: string;
	readonly name?: string;
	readonly objectId?: string;
	readonly userPrincipalName?: string;
}
export interface EntityCommonPropertiesAdditionalData {
	readonly [key: string]: any;
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
	readonly providerIncidentId?: string;
	readonly providerName?: string;
	readonly relatedAnalyticRuleIds?: string[];
	readonly severity: "High" | "Informational" | "Low" | "Medium";
	readonly status: "Active" | "Closed" | "New";
	readonly title: string;
}
export interface OfficeConsentProperties {
	readonly consentId?: string;
	readonly tenantId?: string;
}
export interface RelationNode {
	readonly etag?: string;
	readonly relationAdditionalProperties?: RelationNodeRelationAdditionalProperties;
	readonly relationNodeId?: string;
	readonly relationNodeKind?: "Bookmark" | "Case";
}
export interface RelationNodeRelationAdditionalProperties {
	readonly [key: string]: string;
}
export interface RelationProperties {
	readonly relatedResourceId: string;
	readonly relatedResourceKind?: string;
	readonly relatedResourceName?: string;
	readonly relatedResourceType?: string;
}
export interface RelationsModelInputPropertiesOrCaseRelationProperties {
	readonly bookmarkId?: string;
	readonly bookmarkName?: string;
	readonly caseIdentifier?: string;
	readonly relationName?: string;
	readonly sourceRelationNode?: RelationNode;
	readonly targetRelationNode?: RelationNode;
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

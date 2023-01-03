import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class incidents extends ArmResource<incidentsComponentInputs> implements incidentsComponentOutputs {
	constructor(entity: ADKEntity, options: incidentsComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/incidents", "2021-04-01", options);
	}
	public readonly apiVersion: "2021-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/incidents";
}
export interface incidentsComponentOutputs {
	readonly apiVersion: "2021-04-01";
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
		super(entity, options.name, "Microsoft.SecurityInsights/incidents/comments", "2021-04-01", options);
	}
	public readonly apiVersion: "2021-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/incidents/comments";
}
export interface incidents_commentsComponentOutputs {
	readonly apiVersion: "2021-04-01";
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
		super(entity, options.name, "Microsoft.SecurityInsights/incidents/relations", "2021-04-01", options);
	}
	public readonly apiVersion: "2021-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/incidents/relations";
}
export interface incidents_relationsComponentOutputs {
	readonly apiVersion: "2021-04-01";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/incidents/relations";
}
export interface incidents_relationsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: RelationProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class threatIntelligence_indicators
	extends ArmResource<threatIntelligence_indicatorsComponentInputs>
	implements threatIntelligence_indicatorsComponentOutputs
{
	constructor(entity: ADKEntity, options: threatIntelligence_indicatorsComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/threatIntelligence/indicators", "2021-04-01", options);
	}
	public readonly apiVersion: "2021-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/threatIntelligence/indicators";
}
export interface threatIntelligence_indicatorsComponentOutputs {
	readonly apiVersion: "2021-04-01";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/threatIntelligence/indicators";
}
export interface threatIntelligence_indicatorsComponentInputs {
	readonly etag?: string | undefined;
	readonly kind: "indicator";
	readonly name: string;
	readonly properties?: ThreatIntelligenceIndicatorProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class watchlists extends ArmResource<watchlistsComponentInputs> implements watchlistsComponentOutputs {
	constructor(entity: ADKEntity, options: watchlistsComponentInputs) {
		super(entity, options.name, "Microsoft.SecurityInsights/watchlists", "2021-04-01", options);
	}
	public readonly apiVersion: "2021-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/watchlists";
}
export interface watchlistsComponentOutputs {
	readonly apiVersion: "2021-04-01";
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
		super(entity, options.name, "Microsoft.SecurityInsights/watchlists/watchlistItems", "2021-04-01", options);
	}
	public readonly apiVersion: "2021-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.SecurityInsights/watchlists/watchlistItems";
}
export interface watchlists_watchlistItemsComponentOutputs {
	readonly apiVersion: "2021-04-01";
	readonly id: string;
	readonly type: "Microsoft.SecurityInsights/watchlists/watchlistItems";
}
export interface watchlists_watchlistItemsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: WatchlistItemProperties | undefined;
	readonly systemData?: SystemData | undefined;
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
export interface RelationProperties {
	readonly relatedResourceId: string;
	readonly relatedResourceKind?: string | undefined;
	readonly relatedResourceName?: string | undefined;
	readonly relatedResourceType?: string | undefined;
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
export default {
	incidents: incidents,
	"incidents/comments": incidents_comments,
	"incidents/relations": incidents_relations,
	"threatIntelligence/indicators": threatIntelligence_indicators,
	watchlists: watchlists,
	"watchlists/watchlistItems": watchlists_watchlistItems,
};

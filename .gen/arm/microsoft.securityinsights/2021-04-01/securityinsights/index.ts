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
	readonly etag?: string;
	readonly name: string;
	readonly properties?: RelationProperties;
	readonly systemData?: SystemData;
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
	readonly etag?: string;
	readonly kind: "indicator";
	readonly name: string;
	readonly properties?: ThreatIntelligenceIndicatorProperties;
	readonly systemData?: SystemData;
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
	readonly etag?: string;
	readonly name: string;
	readonly properties?: WatchlistItemProperties;
	readonly systemData?: SystemData;
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
		| "PrivilegeEscalation"[];
}
export interface IncidentCommentProperties {
	readonly author?: ClientInfo;
	readonly createdTimeUtc?: string;
	readonly lastModifiedTimeUtc?: string;
	readonly message: string;
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
export interface RelationProperties {
	readonly relatedResourceId: string;
	readonly relatedResourceKind?: string;
	readonly relatedResourceName?: string;
	readonly relatedResourceType?: string;
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
export default {
	incidents: incidents,
	"incidents/comments": incidents_comments,
	"incidents/relations": incidents_relations,
	"threatIntelligence/indicators": threatIntelligence_indicators,
	watchlists: watchlists,
	"watchlists/watchlistItems": watchlists_watchlistItems,
};

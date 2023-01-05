import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class hubs extends ArmResource<hubsComponentInputs> implements hubsComponentOutputs {
	constructor(entity: ADKEntity, options: hubsComponentInputs) {
		super(entity, options.name, "Microsoft.CustomerInsights/hubs", "2017-04-26", options);
	}
	public readonly apiVersion: "2017-04-26";
	public readonly id: string;
	public readonly type: "Microsoft.CustomerInsights/hubs";
}
export interface hubsComponentOutputs {
	readonly apiVersion: "2017-04-26";
	readonly id: string;
	readonly type: "Microsoft.CustomerInsights/hubs";
}
export interface hubsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: HubPropertiesFormat;
	readonly tags?: ResourceTags;
}
export class hubs_authorizationPolicies
	extends ArmResource<hubs_authorizationPoliciesComponentInputs>
	implements hubs_authorizationPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: hubs_authorizationPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.CustomerInsights/hubs/authorizationPolicies", "2017-04-26", options);
	}
	public readonly apiVersion: "2017-04-26";
	public readonly id: string;
	public readonly type: "Microsoft.CustomerInsights/hubs/authorizationPolicies";
}
export interface hubs_authorizationPoliciesComponentOutputs {
	readonly apiVersion: "2017-04-26";
	readonly id: string;
	readonly type: "Microsoft.CustomerInsights/hubs/authorizationPolicies";
}
export interface hubs_authorizationPoliciesComponentInputs {
	readonly name: string;
	readonly properties?: AuthorizationPolicy;
}
export class hubs_connectors
	extends ArmResource<hubs_connectorsComponentInputs>
	implements hubs_connectorsComponentOutputs
{
	constructor(entity: ADKEntity, options: hubs_connectorsComponentInputs) {
		super(entity, options.name, "Microsoft.CustomerInsights/hubs/connectors", "2017-04-26", options);
	}
	public readonly apiVersion: "2017-04-26";
	public readonly id: string;
	public readonly type: "Microsoft.CustomerInsights/hubs/connectors";
}
export interface hubs_connectorsComponentOutputs {
	readonly apiVersion: "2017-04-26";
	readonly id: string;
	readonly type: "Microsoft.CustomerInsights/hubs/connectors";
}
export interface hubs_connectorsComponentInputs {
	readonly name: string;
	readonly properties?: Connector;
}
export class hubs_connectors_mappings
	extends ArmResource<hubs_connectors_mappingsComponentInputs>
	implements hubs_connectors_mappingsComponentOutputs
{
	constructor(entity: ADKEntity, options: hubs_connectors_mappingsComponentInputs) {
		super(entity, options.name, "Microsoft.CustomerInsights/hubs/connectors/mappings", "2017-04-26", options);
	}
	public readonly apiVersion: "2017-04-26";
	public readonly id: string;
	public readonly type: "Microsoft.CustomerInsights/hubs/connectors/mappings";
}
export interface hubs_connectors_mappingsComponentOutputs {
	readonly apiVersion: "2017-04-26";
	readonly id: string;
	readonly type: "Microsoft.CustomerInsights/hubs/connectors/mappings";
}
export interface hubs_connectors_mappingsComponentInputs {
	readonly name: string;
	readonly properties?: ConnectorMapping;
}
export class hubs_interactions
	extends ArmResource<hubs_interactionsComponentInputs>
	implements hubs_interactionsComponentOutputs
{
	constructor(entity: ADKEntity, options: hubs_interactionsComponentInputs) {
		super(entity, options.name, "Microsoft.CustomerInsights/hubs/interactions", "2017-04-26", options);
	}
	public readonly apiVersion: "2017-04-26";
	public readonly id: string;
	public readonly type: "Microsoft.CustomerInsights/hubs/interactions";
}
export interface hubs_interactionsComponentOutputs {
	readonly apiVersion: "2017-04-26";
	readonly id: string;
	readonly type: "Microsoft.CustomerInsights/hubs/interactions";
}
export interface hubs_interactionsComponentInputs {
	readonly name: string;
	readonly properties?: InteractionTypeDefinition;
}
export class hubs_kpi extends ArmResource<hubs_kpiComponentInputs> implements hubs_kpiComponentOutputs {
	constructor(entity: ADKEntity, options: hubs_kpiComponentInputs) {
		super(entity, options.name, "Microsoft.CustomerInsights/hubs/kpi", "2017-04-26", options);
	}
	public readonly apiVersion: "2017-04-26";
	public readonly id: string;
	public readonly type: "Microsoft.CustomerInsights/hubs/kpi";
}
export interface hubs_kpiComponentOutputs {
	readonly apiVersion: "2017-04-26";
	readonly id: string;
	readonly type: "Microsoft.CustomerInsights/hubs/kpi";
}
export interface hubs_kpiComponentInputs {
	readonly name: string;
	readonly properties?: KpiDefinition;
}
export class hubs_links extends ArmResource<hubs_linksComponentInputs> implements hubs_linksComponentOutputs {
	constructor(entity: ADKEntity, options: hubs_linksComponentInputs) {
		super(entity, options.name, "Microsoft.CustomerInsights/hubs/links", "2017-04-26", options);
	}
	public readonly apiVersion: "2017-04-26";
	public readonly id: string;
	public readonly type: "Microsoft.CustomerInsights/hubs/links";
}
export interface hubs_linksComponentOutputs {
	readonly apiVersion: "2017-04-26";
	readonly id: string;
	readonly type: "Microsoft.CustomerInsights/hubs/links";
}
export interface hubs_linksComponentInputs {
	readonly name: string;
	readonly properties?: LinkDefinition;
}
export class hubs_predictions
	extends ArmResource<hubs_predictionsComponentInputs>
	implements hubs_predictionsComponentOutputs
{
	constructor(entity: ADKEntity, options: hubs_predictionsComponentInputs) {
		super(entity, options.name, "Microsoft.CustomerInsights/hubs/predictions", "2017-04-26", options);
	}
	public readonly apiVersion: "2017-04-26";
	public readonly id: string;
	public readonly type: "Microsoft.CustomerInsights/hubs/predictions";
}
export interface hubs_predictionsComponentOutputs {
	readonly apiVersion: "2017-04-26";
	readonly id: string;
	readonly type: "Microsoft.CustomerInsights/hubs/predictions";
}
export interface hubs_predictionsComponentInputs {
	readonly name: string;
	readonly properties?: Prediction;
}
export class hubs_profiles extends ArmResource<hubs_profilesComponentInputs> implements hubs_profilesComponentOutputs {
	constructor(entity: ADKEntity, options: hubs_profilesComponentInputs) {
		super(entity, options.name, "Microsoft.CustomerInsights/hubs/profiles", "2017-04-26", options);
	}
	public readonly apiVersion: "2017-04-26";
	public readonly id: string;
	public readonly type: "Microsoft.CustomerInsights/hubs/profiles";
}
export interface hubs_profilesComponentOutputs {
	readonly apiVersion: "2017-04-26";
	readonly id: string;
	readonly type: "Microsoft.CustomerInsights/hubs/profiles";
}
export interface hubs_profilesComponentInputs {
	readonly name: string;
	readonly properties?: ProfileTypeDefinition;
}
export class hubs_relationshipLinks
	extends ArmResource<hubs_relationshipLinksComponentInputs>
	implements hubs_relationshipLinksComponentOutputs
{
	constructor(entity: ADKEntity, options: hubs_relationshipLinksComponentInputs) {
		super(entity, options.name, "Microsoft.CustomerInsights/hubs/relationshipLinks", "2017-04-26", options);
	}
	public readonly apiVersion: "2017-04-26";
	public readonly id: string;
	public readonly type: "Microsoft.CustomerInsights/hubs/relationshipLinks";
}
export interface hubs_relationshipLinksComponentOutputs {
	readonly apiVersion: "2017-04-26";
	readonly id: string;
	readonly type: "Microsoft.CustomerInsights/hubs/relationshipLinks";
}
export interface hubs_relationshipLinksComponentInputs {
	readonly name: string;
	readonly properties?: RelationshipLinkDefinition;
}
export class hubs_relationships
	extends ArmResource<hubs_relationshipsComponentInputs>
	implements hubs_relationshipsComponentOutputs
{
	constructor(entity: ADKEntity, options: hubs_relationshipsComponentInputs) {
		super(entity, options.name, "Microsoft.CustomerInsights/hubs/relationships", "2017-04-26", options);
	}
	public readonly apiVersion: "2017-04-26";
	public readonly id: string;
	public readonly type: "Microsoft.CustomerInsights/hubs/relationships";
}
export interface hubs_relationshipsComponentOutputs {
	readonly apiVersion: "2017-04-26";
	readonly id: string;
	readonly type: "Microsoft.CustomerInsights/hubs/relationships";
}
export interface hubs_relationshipsComponentInputs {
	readonly name: string;
	readonly properties?: RelationshipDefinition;
}
export class hubs_roleAssignments
	extends ArmResource<hubs_roleAssignmentsComponentInputs>
	implements hubs_roleAssignmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: hubs_roleAssignmentsComponentInputs) {
		super(entity, options.name, "Microsoft.CustomerInsights/hubs/roleAssignments", "2017-04-26", options);
	}
	public readonly apiVersion: "2017-04-26";
	public readonly id: string;
	public readonly type: "Microsoft.CustomerInsights/hubs/roleAssignments";
}
export interface hubs_roleAssignmentsComponentOutputs {
	readonly apiVersion: "2017-04-26";
	readonly id: string;
	readonly type: "Microsoft.CustomerInsights/hubs/roleAssignments";
}
export interface hubs_roleAssignmentsComponentInputs {
	readonly name: string;
	readonly properties?: RoleAssignment;
}
export class hubs_views extends ArmResource<hubs_viewsComponentInputs> implements hubs_viewsComponentOutputs {
	constructor(entity: ADKEntity, options: hubs_viewsComponentInputs) {
		super(entity, options.name, "Microsoft.CustomerInsights/hubs/views", "2017-04-26", options);
	}
	public readonly apiVersion: "2017-04-26";
	public readonly id: string;
	public readonly type: "Microsoft.CustomerInsights/hubs/views";
}
export interface hubs_viewsComponentOutputs {
	readonly apiVersion: "2017-04-26";
	readonly id: string;
	readonly type: "Microsoft.CustomerInsights/hubs/views";
}
export interface hubs_viewsComponentInputs {
	readonly name: string;
	readonly properties?: View;
}
export class hubs_widgetTypes
	extends ArmResource<hubs_widgetTypesComponentInputs>
	implements hubs_widgetTypesComponentOutputs
{
	constructor(entity: ADKEntity, options: hubs_widgetTypesComponentInputs) {
		super(entity, options.name, "Microsoft.CustomerInsights/hubs/widgetTypes", "2017-04-26", options);
	}
	public readonly apiVersion: "2017-04-26";
	public readonly id: string;
	public readonly type: "Microsoft.CustomerInsights/hubs/widgetTypes";
}
export interface hubs_widgetTypesComponentOutputs {
	readonly apiVersion: "2017-04-26";
	readonly id: string;
	readonly type: "Microsoft.CustomerInsights/hubs/widgetTypes";
}
export interface hubs_widgetTypesComponentInputs {
	readonly name: string;
	readonly properties?: WidgetType;
}
export interface AssignmentPrincipal {
	readonly principalId: string;
	readonly principalMetadata?: AssignmentPrincipalMetadata;
	readonly principalType: string;
}
export interface AssignmentPrincipalMetadata {
	readonly [key: string]: string;
}
export interface AuthorizationPolicy {
	readonly permissions: "Manage" | "Read"[];
	readonly policyName?: string;
	readonly primaryKey?: string;
	readonly secondaryKey?: string;
}
export interface Connector {
	readonly connectorId?: number;
	readonly connectorName?: string;
	readonly connectorProperties: ConnectorProperties;
	readonly connectorType: "AzureBlob" | "CRM" | "ExchangeOnline" | "None" | "Outbound" | "Salesforce";
	readonly created?: string;
	readonly description?: string;
	readonly displayName?: string;
	readonly isInternal?: boolean;
	readonly lastModified?: string;
	readonly state?: "Created" | "Creating" | "Deleting" | "Expiring" | "Failed";
	readonly tenantId?: string;
}
export interface ConnectorMapping {
	readonly connectorMappingName?: string;
	readonly connectorName?: string;
	readonly connectorType?: "AzureBlob" | "CRM" | "ExchangeOnline" | "None" | "Outbound" | "Salesforce";
	readonly created?: string;
	readonly dataFormatId?: string;
	readonly description?: string;
	readonly displayName?: string;
	readonly entityType: "Interaction" | "None" | "Profile";
	readonly entityTypeName: string;
	readonly lastModified?: string;
	readonly mappingProperties: ConnectorMappingProperties;
	readonly nextRunTime?: string;
	readonly runId?: string;
	readonly state?: "Created" | "Creating" | "Expiring" | "Failed" | "Ready" | "Running";
	readonly tenantId?: string;
}
export interface ConnectorMappingAvailability {
	readonly frequency?: "Day" | "Hour" | "Minute" | "Month";
	readonly interval: number;
}
export interface ConnectorMappingCompleteOperation {
	readonly completionOperationType?: "DeleteFile" | "DoNothing";
	readonly destinationFolder?: string;
}
export interface ConnectorMappingErrorManagement {
	readonly errorLimit?: number;
	readonly errorManagementType: "RejectAndContinue" | "RejectUntilLimit";
}
export interface ConnectorMappingFormat {
	readonly acceptLanguage?: string;
	readonly arraySeparator?: string;
	readonly columnDelimiter?: string;
	readonly formatType: "TextFormat";
	readonly quoteCharacter?: string;
	readonly quoteEscapeCharacter?: string;
}
export interface ConnectorMappingProperties {
	readonly availability: ConnectorMappingAvailability;
	readonly completeOperation: ConnectorMappingCompleteOperation;
	readonly errorManagement: ConnectorMappingErrorManagement;
	readonly fileFilter?: string;
	readonly folderPath?: string;
	readonly format: ConnectorMappingFormat;
	readonly hasHeader?: boolean;
	readonly structure: ConnectorMappingStructure[];
}
export interface ConnectorMappingStructure {
	readonly columnName: string;
	readonly customFormatSpecifier?: string;
	readonly isEncrypted?: boolean;
	readonly propertyName: string;
}
export interface ConnectorProperties {
	readonly [key: string]: any;
}
export interface DataSource {
	readonly dataSourceReferenceId?: string;
	readonly dataSourceType?: "Connector" | "LinkInteraction" | "SystemDefault";
	readonly id?: number;
	readonly name?: string;
	readonly status?: "Active" | "Deleted" | "None";
}
export interface DataSourcePrecedence {
	readonly dataSource?: DataSource;
	readonly precedence?: number;
}
export interface DictionaryOfString {
	readonly [key: string]: string;
}
export interface HubBillingInfoFormat {
	readonly maxUnits?: number;
	readonly minUnits?: number;
	readonly skuName?: string;
}
export interface HubPropertiesFormat {
	readonly apiEndpoint?: string;
	readonly hubBillingInfo?: HubBillingInfoFormat;
	readonly provisioningState?: string;
	readonly tenantFeatures?: number;
	readonly webEndpoint?: string;
}
export interface InteractionTypeDefinition {
	readonly apiEntitySetName?: string;
	readonly attributes?: MetadataDefinitionBaseAttributes;
	readonly dataSourcePrecedenceRules?: DataSourcePrecedence[];
	readonly defaultDataSource?: DataSource;
	readonly description?: MetadataDefinitionBaseDescription;
	readonly displayName?: MetadataDefinitionBaseDisplayName;
	readonly entityType?: "Interaction" | "None" | "Profile";
	readonly fields?: PropertyDefinition[];
	readonly idPropertyNames?: string[];
	readonly instancesCount?: number;
	readonly isActivity?: boolean;
	readonly largeImage?: string;
	readonly lastChangedUtc?: string;
	readonly localizedAttributes?: MetadataDefinitionBaseLocalizedAttributes;
	readonly mediumImage?: string;
	readonly participantProfiles?: Participant[];
	readonly primaryParticipantProfilePropertyName?: string;
	readonly provisioningState?: "Deleting" | "Expiring" | "Failed" | "HumanIntervention" | "Provisioning" | "Succeeded";
	readonly schemaItemTypeLink?: string;
	readonly smallImage?: string;
	readonly tenantId?: string;
	readonly timestampFieldName?: string;
	readonly typeName?: string;
}
export interface KpiAlias {
	readonly aliasName: string;
	readonly expression: string;
}
export interface KpiDefinition {
	readonly aliases?: KpiAlias[];
	readonly calculationWindow: "Day" | "Hour" | "Lifetime" | "Month";
	readonly calculationWindowFieldName?: string;
	readonly description?: KpiDefinitionDescription;
	readonly displayName?: KpiDefinitionDisplayName;
	readonly entityType: "Interaction" | "None" | "Profile";
	readonly entityTypeName: string;
	readonly expression: string;
	readonly extracts?: KpiExtract[];
	readonly filter?: string;
	readonly function: "Avg" | "Count" | "CountDistinct" | "Last" | "Max" | "Min" | "None";
	readonly groupBy?: string[];
	readonly groupByMetadata?: KpiGroupByMetadata[];
	readonly kpiName?: string;
	readonly participantProfilesMetadata?: KpiParticipantProfilesMetadata[];
	readonly provisioningState?: "Deleting" | "Expiring" | "Failed" | "HumanIntervention" | "Provisioning" | "Succeeded";
	readonly tenantId?: string;
	readonly thresHolds?: KpiThresholds;
	readonly unit?: string;
}
export interface KpiDefinitionDescription {
	readonly [key: string]: string;
}
export interface KpiDefinitionDisplayName {
	readonly [key: string]: string;
}
export interface KpiExtract {
	readonly expression: string;
	readonly extractName: string;
}
export interface KpiGroupByMetadata {
	readonly displayName?: KpiGroupByMetadataDisplayName;
	readonly fieldName?: string;
	readonly fieldType?: string;
}
export interface KpiGroupByMetadataDisplayName {
	readonly [key: string]: string;
}
export interface KpiParticipantProfilesMetadata {
	readonly typeName: string;
}
export interface KpiThresholds {
	readonly increasingKpi: boolean;
	readonly lowerLimit: number;
	readonly upperLimit: number;
}
export interface LinkDefinition {
	readonly description?: LinkDefinitionDescription;
	readonly displayName?: LinkDefinitionDisplayName;
	readonly linkName?: string;
	readonly mappings?: TypePropertiesMapping[];
	readonly operationType?: "Delete";
	readonly participantPropertyReferences: ParticipantPropertyReference[];
	readonly provisioningState?: "Deleting" | "Expiring" | "Failed" | "HumanIntervention" | "Provisioning" | "Succeeded";
	readonly referenceOnly?: boolean;
	readonly sourceEntityType: "Interaction" | "None" | "Profile";
	readonly sourceEntityTypeName: string;
	readonly targetEntityType: "Interaction" | "None" | "Profile";
	readonly targetEntityTypeName: string;
	readonly tenantId?: string;
}
export interface LinkDefinitionDescription {
	readonly [key: string]: string;
}
export interface LinkDefinitionDisplayName {
	readonly [key: string]: string;
}
export interface MetadataDefinitionBaseAttributes {
	readonly [key: string]: string[];
}
export interface MetadataDefinitionBaseDescription {
	readonly [key: string]: string;
}
export interface MetadataDefinitionBaseDisplayName {
	readonly [key: string]: string;
}
export interface MetadataDefinitionBaseLocalizedAttributes {
	readonly [key: string]: DictionaryOfString;
}
export interface Participant {
	readonly description?: ParticipantDescription;
	readonly displayName?: ParticipantDisplayName;
	readonly participantName: string;
	readonly participantPropertyReferences: ParticipantPropertyReference[];
	readonly profileTypeName: string;
	readonly role?: string;
}
export interface ParticipantDescription {
	readonly [key: string]: string;
}
export interface ParticipantDisplayName {
	readonly [key: string]: string;
}
export interface ParticipantProfilePropertyReference {
	readonly interactionPropertyName: string;
	readonly profilePropertyName: string;
}
export interface ParticipantPropertyReference {
	readonly sourcePropertyName: string;
	readonly targetPropertyName: string;
}
export interface Prediction {
	readonly autoAnalyze: boolean;
	readonly description?: PredictionDescription;
	readonly displayName?: PredictionDisplayName;
	readonly grades?: PredictionGradesItem[];
	readonly involvedInteractionTypes?: string[];
	readonly involvedKpiTypes?: string[];
	readonly involvedRelationships?: string[];
	readonly mappings: PredictionMappings;
	readonly negativeOutcomeExpression: string;
	readonly positiveOutcomeExpression: string;
	readonly predictionName?: string;
	readonly primaryProfileType: string;
	readonly provisioningState?: "Deleting" | "Expiring" | "Failed" | "HumanIntervention" | "Provisioning" | "Succeeded";
	readonly scopeExpression: string;
	readonly scoreLabel: string;
	readonly systemGeneratedEntities?: PredictionSystemGeneratedEntities;
	readonly tenantId?: string;
}
export interface PredictionDescription {
	readonly [key: string]: string;
}
export interface PredictionDisplayName {
	readonly [key: string]: string;
}
export interface PredictionGradesItem {
	readonly gradeName?: string;
	readonly maxScoreThreshold?: number;
	readonly minScoreThreshold?: number;
}
export interface PredictionMappings {
	readonly grade: string;
	readonly reason: string;
	readonly score: string;
}
export interface PredictionSystemGeneratedEntities {
	readonly generatedInteractionTypes?: string[];
	readonly generatedKpis?: PredictionSystemGeneratedEntitiesGeneratedKpis;
	readonly generatedLinks?: string[];
}
export interface PredictionSystemGeneratedEntitiesGeneratedKpis {
	readonly [key: string]: string;
}
export interface ProfileEnumValidValuesFormat {
	readonly localizedValueNames?: ProfileEnumValidValuesFormatLocalizedValueNames;
	readonly value?: number;
}
export interface ProfileEnumValidValuesFormatLocalizedValueNames {
	readonly [key: string]: string;
}
export interface ProfileTypeDefinition {
	readonly apiEntitySetName?: string;
	readonly attributes?: MetadataDefinitionBaseAttributes;
	readonly description?: MetadataDefinitionBaseDescription;
	readonly displayName?: MetadataDefinitionBaseDisplayName;
	readonly entityType?: "Interaction" | "None" | "Profile";
	readonly fields?: PropertyDefinition[];
	readonly instancesCount?: number;
	readonly largeImage?: string;
	readonly lastChangedUtc?: string;
	readonly localizedAttributes?: MetadataDefinitionBaseLocalizedAttributes;
	readonly mediumImage?: string;
	readonly provisioningState?: "Deleting" | "Expiring" | "Failed" | "HumanIntervention" | "Provisioning" | "Succeeded";
	readonly schemaItemTypeLink?: string;
	readonly smallImage?: string;
	readonly strongIds?: StrongId[];
	readonly tenantId?: string;
	readonly timestampFieldName?: string;
	readonly typeName?: string;
}
export interface PropertyDefinition {
	readonly arrayValueSeparator?: string;
	readonly dataSourcePrecedenceRules?: DataSourcePrecedence[];
	readonly enumValidValues?: ProfileEnumValidValuesFormat[];
	readonly fieldName: string;
	readonly fieldType: string;
	readonly isArray?: boolean;
	readonly isAvailableInGraph?: boolean;
	readonly isEnum?: boolean;
	readonly isFlagEnum?: boolean;
	readonly isImage?: boolean;
	readonly isLocalizedString?: boolean;
	readonly isName?: boolean;
	readonly isRequired?: boolean;
	readonly maxLength?: number;
	readonly propertyId?: string;
	readonly schemaItemPropLink?: string;
}
export interface RelationshipDefinition {
	readonly cardinality?: "ManyToMany" | "OneToMany";
	readonly description?: RelationshipDefinitionDescription;
	readonly displayName?: RelationshipDefinitionDisplayName;
	readonly expiryDateTimeUtc?: string;
	readonly fields?: PropertyDefinition[];
	readonly lookupMappings?: RelationshipTypeMapping[];
	readonly profileType: string;
	readonly provisioningState?: "Deleting" | "Expiring" | "Failed" | "HumanIntervention" | "Provisioning" | "Succeeded";
	readonly relatedProfileType: string;
	readonly relationshipGuidId?: string;
	readonly relationshipName?: string;
	readonly tenantId?: string;
}
export interface RelationshipDefinitionDescription {
	readonly [key: string]: string;
}
export interface RelationshipDefinitionDisplayName {
	readonly [key: string]: string;
}
export interface RelationshipLinkDefinition {
	readonly description?: RelationshipLinkDefinitionDescription;
	readonly displayName?: RelationshipLinkDefinitionDisplayName;
	readonly interactionType: string;
	readonly linkName?: string;
	readonly mappings?: RelationshipLinkFieldMapping[];
	readonly profilePropertyReferences: ParticipantProfilePropertyReference[];
	readonly provisioningState?: "Deleting" | "Expiring" | "Failed" | "HumanIntervention" | "Provisioning" | "Succeeded";
	readonly relatedProfilePropertyReferences: ParticipantProfilePropertyReference[];
	readonly relationshipGuidId?: string;
	readonly relationshipName: string;
	readonly tenantId?: string;
}
export interface RelationshipLinkDefinitionDescription {
	readonly [key: string]: string;
}
export interface RelationshipLinkDefinitionDisplayName {
	readonly [key: string]: string;
}
export interface RelationshipLinkFieldMapping {
	readonly interactionFieldName: string;
	readonly linkType?: "CopyIfNull";
	readonly relationshipFieldName: string;
}
export interface RelationshipTypeFieldMapping {
	readonly profileFieldName: string;
	readonly relatedProfileKeyProperty: string;
}
export interface RelationshipTypeMapping {
	readonly fieldMappings: RelationshipTypeFieldMapping[];
}
export interface ResourceSetDescription {
	readonly elements?: string[];
	readonly exceptions?: string[];
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface RoleAssignment {
	readonly assignmentName?: string;
	readonly conflationPolicies?: ResourceSetDescription;
	readonly connectors?: ResourceSetDescription;
	readonly description?: RoleAssignmentDescription;
	readonly displayName?: RoleAssignmentDisplayName;
	readonly interactions?: ResourceSetDescription;
	readonly kpis?: ResourceSetDescription;
	readonly links?: ResourceSetDescription;
	readonly principals: AssignmentPrincipal[];
	readonly profiles?: ResourceSetDescription;
	readonly provisioningState?: "Deleting" | "Expiring" | "Failed" | "HumanIntervention" | "Provisioning" | "Succeeded";
	readonly relationshipLinks?: ResourceSetDescription;
	readonly relationships?: ResourceSetDescription;
	readonly role: "Admin" | "DataAdmin" | "DataReader" | "ManageAdmin" | "ManageReader";
	readonly roleAssignments?: ResourceSetDescription;
	readonly sasPolicies?: ResourceSetDescription;
	readonly segments?: ResourceSetDescription;
	readonly tenantId?: string;
	readonly views?: ResourceSetDescription;
	readonly widgetTypes?: ResourceSetDescription;
}
export interface RoleAssignmentDescription {
	readonly [key: string]: string;
}
export interface RoleAssignmentDisplayName {
	readonly [key: string]: string;
}
export interface StrongId {
	readonly description?: StrongIdDescription;
	readonly displayName?: StrongIdDisplayName;
	readonly keyPropertyNames: string[];
	readonly strongIdName: string;
}
export interface StrongIdDescription {
	readonly [key: string]: string;
}
export interface StrongIdDisplayName {
	readonly [key: string]: string;
}
export interface TypePropertiesMapping {
	readonly linkType?: "CopyIfNull";
	readonly sourcePropertyName: string;
	readonly targetPropertyName: string;
}
export interface View {
	readonly changed?: string;
	readonly created?: string;
	readonly definition: string;
	readonly displayName?: ViewDisplayName;
	readonly tenantId?: string;
	readonly userId?: string;
	readonly viewName?: string;
}
export interface ViewDisplayName {
	readonly [key: string]: string;
}
export interface WidgetType {
	readonly changed?: string;
	readonly created?: string;
	readonly definition: string;
	readonly description?: string;
	readonly displayName?: WidgetTypeDisplayName;
	readonly imageUrl?: string;
	readonly tenantId?: string;
	readonly widgetTypeName?: string;
	readonly widgetVersion?: string;
}
export interface WidgetTypeDisplayName {
	readonly [key: string]: string;
}
export default {
	hubs: hubs,
	"hubs/authorizationPolicies": hubs_authorizationPolicies,
	"hubs/connectors": hubs_connectors,
	"hubs/connectors/mappings": hubs_connectors_mappings,
	"hubs/interactions": hubs_interactions,
	"hubs/kpi": hubs_kpi,
	"hubs/links": hubs_links,
	"hubs/predictions": hubs_predictions,
	"hubs/profiles": hubs_profiles,
	"hubs/relationshipLinks": hubs_relationshipLinks,
	"hubs/relationships": hubs_relationships,
	"hubs/roleAssignments": hubs_roleAssignments,
	"hubs/views": hubs_views,
	"hubs/widgetTypes": hubs_widgetTypes,
};

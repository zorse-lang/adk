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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: HubPropertiesFormat | undefined;
	readonly tags?: ResourceTags | undefined;
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
	readonly properties?: AuthorizationPolicy | undefined;
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
	readonly properties?: Connector | undefined;
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
	readonly properties?: ConnectorMapping | undefined;
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
	readonly properties?: InteractionTypeDefinition | undefined;
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
	readonly properties?: KpiDefinition | undefined;
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
	readonly properties?: LinkDefinition | undefined;
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
	readonly properties?: Prediction | undefined;
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
	readonly properties?: ProfileTypeDefinition | undefined;
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
	readonly properties?: RelationshipLinkDefinition | undefined;
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
	readonly properties?: RelationshipDefinition | undefined;
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
	readonly properties?: RoleAssignment | undefined;
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
	readonly properties?: View | undefined;
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
	readonly properties?: WidgetType | undefined;
}
export interface AssignmentPrincipal {
	readonly principalId: string;
	readonly principalMetadata?: AssignmentPrincipalMetadata | undefined;
	readonly principalType: string;
}
export interface AssignmentPrincipalMetadata {
	readonly "[ key: string ]"?: string | undefined;
}
export interface AuthorizationPolicy {
	readonly permissions: "Manage" | "Read"[];
	readonly policyName?: string | undefined;
	readonly primaryKey?: string | undefined;
	readonly secondaryKey?: string | undefined;
}
export interface Connector {
	readonly connectorId?: number | undefined;
	readonly connectorName?: string | undefined;
	readonly connectorProperties: ConnectorProperties;
	readonly connectorType: "AzureBlob" | "CRM" | "ExchangeOnline" | "None" | "Outbound" | "Salesforce";
	readonly created?: string | undefined;
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly isInternal?: boolean | undefined;
	readonly lastModified?: string | undefined;
	readonly state?: ("Created" | "Creating" | "Deleting" | "Expiring" | "Failed") | undefined;
	readonly tenantId?: string | undefined;
}
export interface ConnectorMapping {
	readonly connectorMappingName?: string | undefined;
	readonly connectorName?: string | undefined;
	readonly connectorType?: ("AzureBlob" | "CRM" | "ExchangeOnline" | "None" | "Outbound" | "Salesforce") | undefined;
	readonly created?: string | undefined;
	readonly dataFormatId?: string | undefined;
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly entityType: "Interaction" | "None" | "Profile";
	readonly entityTypeName: string;
	readonly lastModified?: string | undefined;
	readonly mappingProperties: ConnectorMappingProperties;
	readonly nextRunTime?: string | undefined;
	readonly runId?: string | undefined;
	readonly state?: ("Created" | "Creating" | "Expiring" | "Failed" | "Ready" | "Running") | undefined;
	readonly tenantId?: string | undefined;
}
export interface ConnectorMappingAvailability {
	readonly frequency?: ("Day" | "Hour" | "Minute" | "Month") | undefined;
	readonly interval: number;
}
export interface ConnectorMappingCompleteOperation {
	readonly completionOperationType?: ("DeleteFile" | "DoNothing") | undefined;
	readonly destinationFolder?: string | undefined;
}
export interface ConnectorMappingErrorManagement {
	readonly errorLimit?: number | undefined;
	readonly errorManagementType: "RejectAndContinue" | "RejectUntilLimit";
}
export interface ConnectorMappingFormat {
	readonly acceptLanguage?: string | undefined;
	readonly arraySeparator?: string | undefined;
	readonly columnDelimiter?: string | undefined;
	readonly formatType: "TextFormat";
	readonly quoteCharacter?: string | undefined;
	readonly quoteEscapeCharacter?: string | undefined;
}
export interface ConnectorMappingProperties {
	readonly availability: ConnectorMappingAvailability;
	readonly completeOperation: ConnectorMappingCompleteOperation;
	readonly errorManagement: ConnectorMappingErrorManagement;
	readonly fileFilter?: string | undefined;
	readonly folderPath?: string | undefined;
	readonly format: ConnectorMappingFormat;
	readonly hasHeader?: boolean | undefined;
	readonly structure: ConnectorMappingStructure[];
}
export interface ConnectorMappingStructure {
	readonly columnName: string;
	readonly customFormatSpecifier?: string | undefined;
	readonly isEncrypted?: boolean | undefined;
	readonly propertyName: string;
}
export interface ConnectorProperties {
	readonly "[ key: string ]"?: any | undefined;
}
export interface DataSource {
	readonly dataSourceReferenceId?: string | undefined;
	readonly dataSourceType?: ("Connector" | "LinkInteraction" | "SystemDefault") | undefined;
	readonly id?: number | undefined;
	readonly name?: string | undefined;
	readonly status?: ("Active" | "Deleted" | "None") | undefined;
}
export interface DataSourcePrecedence {
	readonly dataSource?: DataSource | undefined;
	readonly precedence?: number | undefined;
}
export interface DictionaryOfString {
	readonly "[ key: string ]"?: string | undefined;
}
export interface HubBillingInfoFormat {
	readonly maxUnits?: number | undefined;
	readonly minUnits?: number | undefined;
	readonly skuName?: string | undefined;
}
export interface HubPropertiesFormat {
	readonly apiEndpoint?: string | undefined;
	readonly hubBillingInfo?: HubBillingInfoFormat | undefined;
	readonly provisioningState?: string | undefined;
	readonly tenantFeatures?: number | undefined;
	readonly webEndpoint?: string | undefined;
}
export interface InteractionTypeDefinition {
	readonly apiEntitySetName?: string | undefined;
	readonly attributes?: MetadataDefinitionBaseAttributes | undefined;
	readonly dataSourcePrecedenceRules?: DataSourcePrecedence[] | undefined;
	readonly defaultDataSource?: DataSource | undefined;
	readonly description?: MetadataDefinitionBaseDescription | undefined;
	readonly displayName?: MetadataDefinitionBaseDisplayName | undefined;
	readonly entityType?: ("Interaction" | "None" | "Profile") | undefined;
	readonly fields?: PropertyDefinition[] | undefined;
	readonly idPropertyNames?: string[] | undefined;
	readonly instancesCount?: number | undefined;
	readonly isActivity?: boolean | undefined;
	readonly largeImage?: string | undefined;
	readonly lastChangedUtc?: string | undefined;
	readonly localizedAttributes?: MetadataDefinitionBaseLocalizedAttributes | undefined;
	readonly mediumImage?: string | undefined;
	readonly participantProfiles?: Participant[] | undefined;
	readonly primaryParticipantProfilePropertyName?: string | undefined;
	readonly provisioningState?:
		| ("Deleting" | "Expiring" | "Failed" | "HumanIntervention" | "Provisioning" | "Succeeded")
		| undefined;
	readonly schemaItemTypeLink?: string | undefined;
	readonly smallImage?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly timestampFieldName?: string | undefined;
	readonly typeName?: string | undefined;
}
export interface KpiAlias {
	readonly aliasName: string;
	readonly expression: string;
}
export interface KpiDefinition {
	readonly aliases?: KpiAlias[] | undefined;
	readonly calculationWindow: "Day" | "Hour" | "Lifetime" | "Month";
	readonly calculationWindowFieldName?: string | undefined;
	readonly description?: KpiDefinitionDescription | undefined;
	readonly displayName?: KpiDefinitionDisplayName | undefined;
	readonly entityType: "Interaction" | "None" | "Profile";
	readonly entityTypeName: string;
	readonly expression: string;
	readonly extracts?: KpiExtract[] | undefined;
	readonly filter?: string | undefined;
	readonly function: "Avg" | "Count" | "CountDistinct" | "Last" | "Max" | "Min" | "None";
	readonly groupBy?: string[] | undefined;
	readonly groupByMetadata?: KpiGroupByMetadata[] | undefined;
	readonly kpiName?: string | undefined;
	readonly participantProfilesMetadata?: KpiParticipantProfilesMetadata[] | undefined;
	readonly provisioningState?:
		| ("Deleting" | "Expiring" | "Failed" | "HumanIntervention" | "Provisioning" | "Succeeded")
		| undefined;
	readonly tenantId?: string | undefined;
	readonly thresHolds?: KpiThresholds | undefined;
	readonly unit?: string | undefined;
}
export interface KpiDefinitionDescription {
	readonly "[ key: string ]"?: string | undefined;
}
export interface KpiDefinitionDisplayName {
	readonly "[ key: string ]"?: string | undefined;
}
export interface KpiExtract {
	readonly expression: string;
	readonly extractName: string;
}
export interface KpiGroupByMetadata {
	readonly displayName?: KpiGroupByMetadataDisplayName | undefined;
	readonly fieldName?: string | undefined;
	readonly fieldType?: string | undefined;
}
export interface KpiGroupByMetadataDisplayName {
	readonly "[ key: string ]"?: string | undefined;
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
	readonly description?: LinkDefinitionDescription | undefined;
	readonly displayName?: LinkDefinitionDisplayName | undefined;
	readonly linkName?: string | undefined;
	readonly mappings?: TypePropertiesMapping[] | undefined;
	readonly operationType?: "Delete" | undefined;
	readonly participantPropertyReferences: ParticipantPropertyReference[];
	readonly provisioningState?:
		| ("Deleting" | "Expiring" | "Failed" | "HumanIntervention" | "Provisioning" | "Succeeded")
		| undefined;
	readonly referenceOnly?: boolean | undefined;
	readonly sourceEntityType: "Interaction" | "None" | "Profile";
	readonly sourceEntityTypeName: string;
	readonly targetEntityType: "Interaction" | "None" | "Profile";
	readonly targetEntityTypeName: string;
	readonly tenantId?: string | undefined;
}
export interface LinkDefinitionDescription {
	readonly "[ key: string ]"?: string | undefined;
}
export interface LinkDefinitionDisplayName {
	readonly "[ key: string ]"?: string | undefined;
}
export interface MetadataDefinitionBaseAttributes {
	readonly "[ key: string ]"?: string[] | undefined;
}
export interface MetadataDefinitionBaseDescription {
	readonly "[ key: string ]"?: string | undefined;
}
export interface MetadataDefinitionBaseDisplayName {
	readonly "[ key: string ]"?: string | undefined;
}
export interface MetadataDefinitionBaseLocalizedAttributes {
	readonly "[ key: string ]"?: DictionaryOfString | undefined;
}
export interface Participant {
	readonly description?: ParticipantDescription | undefined;
	readonly displayName?: ParticipantDisplayName | undefined;
	readonly participantName: string;
	readonly participantPropertyReferences: ParticipantPropertyReference[];
	readonly profileTypeName: string;
	readonly role?: string | undefined;
}
export interface ParticipantDescription {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ParticipantDisplayName {
	readonly "[ key: string ]"?: string | undefined;
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
	readonly description?: PredictionDescription | undefined;
	readonly displayName?: PredictionDisplayName | undefined;
	readonly grades?: PredictionGradesItem[] | undefined;
	readonly involvedInteractionTypes?: string[] | undefined;
	readonly involvedKpiTypes?: string[] | undefined;
	readonly involvedRelationships?: string[] | undefined;
	readonly mappings: PredictionMappings;
	readonly negativeOutcomeExpression: string;
	readonly positiveOutcomeExpression: string;
	readonly predictionName?: string | undefined;
	readonly primaryProfileType: string;
	readonly provisioningState?:
		| ("Deleting" | "Expiring" | "Failed" | "HumanIntervention" | "Provisioning" | "Succeeded")
		| undefined;
	readonly scopeExpression: string;
	readonly scoreLabel: string;
	readonly systemGeneratedEntities?: PredictionSystemGeneratedEntities | undefined;
	readonly tenantId?: string | undefined;
}
export interface PredictionDescription {
	readonly "[ key: string ]"?: string | undefined;
}
export interface PredictionDisplayName {
	readonly "[ key: string ]"?: string | undefined;
}
export interface PredictionGradesItem {
	readonly gradeName?: string | undefined;
	readonly maxScoreThreshold?: number | undefined;
	readonly minScoreThreshold?: number | undefined;
}
export interface PredictionMappings {
	readonly grade: string;
	readonly reason: string;
	readonly score: string;
}
export interface PredictionSystemGeneratedEntities {
	readonly generatedInteractionTypes?: string[] | undefined;
	readonly generatedKpis?: PredictionSystemGeneratedEntitiesGeneratedKpis | undefined;
	readonly generatedLinks?: string[] | undefined;
}
export interface PredictionSystemGeneratedEntitiesGeneratedKpis {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ProfileEnumValidValuesFormat {
	readonly localizedValueNames?: ProfileEnumValidValuesFormatLocalizedValueNames | undefined;
	readonly value?: number | undefined;
}
export interface ProfileEnumValidValuesFormatLocalizedValueNames {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ProfileTypeDefinition {
	readonly apiEntitySetName?: string | undefined;
	readonly attributes?: MetadataDefinitionBaseAttributes | undefined;
	readonly description?: MetadataDefinitionBaseDescription | undefined;
	readonly displayName?: MetadataDefinitionBaseDisplayName | undefined;
	readonly entityType?: ("Interaction" | "None" | "Profile") | undefined;
	readonly fields?: PropertyDefinition[] | undefined;
	readonly instancesCount?: number | undefined;
	readonly largeImage?: string | undefined;
	readonly lastChangedUtc?: string | undefined;
	readonly localizedAttributes?: MetadataDefinitionBaseLocalizedAttributes | undefined;
	readonly mediumImage?: string | undefined;
	readonly provisioningState?:
		| ("Deleting" | "Expiring" | "Failed" | "HumanIntervention" | "Provisioning" | "Succeeded")
		| undefined;
	readonly schemaItemTypeLink?: string | undefined;
	readonly smallImage?: string | undefined;
	readonly strongIds?: StrongId[] | undefined;
	readonly tenantId?: string | undefined;
	readonly timestampFieldName?: string | undefined;
	readonly typeName?: string | undefined;
}
export interface PropertyDefinition {
	readonly arrayValueSeparator?: string | undefined;
	readonly dataSourcePrecedenceRules?: DataSourcePrecedence[] | undefined;
	readonly enumValidValues?: ProfileEnumValidValuesFormat[] | undefined;
	readonly fieldName: string;
	readonly fieldType: string;
	readonly isArray?: boolean | undefined;
	readonly isAvailableInGraph?: boolean | undefined;
	readonly isEnum?: boolean | undefined;
	readonly isFlagEnum?: boolean | undefined;
	readonly isImage?: boolean | undefined;
	readonly isLocalizedString?: boolean | undefined;
	readonly isName?: boolean | undefined;
	readonly isRequired?: boolean | undefined;
	readonly maxLength?: number | undefined;
	readonly propertyId?: string | undefined;
	readonly schemaItemPropLink?: string | undefined;
}
export interface RelationshipDefinition {
	readonly cardinality?: ("ManyToMany" | "OneToMany") | undefined;
	readonly description?: RelationshipDefinitionDescription | undefined;
	readonly displayName?: RelationshipDefinitionDisplayName | undefined;
	readonly expiryDateTimeUtc?: string | undefined;
	readonly fields?: PropertyDefinition[] | undefined;
	readonly lookupMappings?: RelationshipTypeMapping[] | undefined;
	readonly profileType: string;
	readonly provisioningState?:
		| ("Deleting" | "Expiring" | "Failed" | "HumanIntervention" | "Provisioning" | "Succeeded")
		| undefined;
	readonly relatedProfileType: string;
	readonly relationshipGuidId?: string | undefined;
	readonly relationshipName?: string | undefined;
	readonly tenantId?: string | undefined;
}
export interface RelationshipDefinitionDescription {
	readonly "[ key: string ]"?: string | undefined;
}
export interface RelationshipDefinitionDisplayName {
	readonly "[ key: string ]"?: string | undefined;
}
export interface RelationshipLinkDefinition {
	readonly description?: RelationshipLinkDefinitionDescription | undefined;
	readonly displayName?: RelationshipLinkDefinitionDisplayName | undefined;
	readonly interactionType: string;
	readonly linkName?: string | undefined;
	readonly mappings?: RelationshipLinkFieldMapping[] | undefined;
	readonly profilePropertyReferences: ParticipantProfilePropertyReference[];
	readonly provisioningState?:
		| ("Deleting" | "Expiring" | "Failed" | "HumanIntervention" | "Provisioning" | "Succeeded")
		| undefined;
	readonly relatedProfilePropertyReferences: ParticipantProfilePropertyReference[];
	readonly relationshipGuidId?: string | undefined;
	readonly relationshipName: string;
	readonly tenantId?: string | undefined;
}
export interface RelationshipLinkDefinitionDescription {
	readonly "[ key: string ]"?: string | undefined;
}
export interface RelationshipLinkDefinitionDisplayName {
	readonly "[ key: string ]"?: string | undefined;
}
export interface RelationshipLinkFieldMapping {
	readonly interactionFieldName: string;
	readonly linkType?: "CopyIfNull" | undefined;
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
	readonly elements?: string[] | undefined;
	readonly exceptions?: string[] | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface RoleAssignment {
	readonly assignmentName?: string | undefined;
	readonly conflationPolicies?: ResourceSetDescription | undefined;
	readonly connectors?: ResourceSetDescription | undefined;
	readonly description?: RoleAssignmentDescription | undefined;
	readonly displayName?: RoleAssignmentDisplayName | undefined;
	readonly interactions?: ResourceSetDescription | undefined;
	readonly kpis?: ResourceSetDescription | undefined;
	readonly links?: ResourceSetDescription | undefined;
	readonly principals: AssignmentPrincipal[];
	readonly profiles?: ResourceSetDescription | undefined;
	readonly provisioningState?:
		| ("Deleting" | "Expiring" | "Failed" | "HumanIntervention" | "Provisioning" | "Succeeded")
		| undefined;
	readonly relationshipLinks?: ResourceSetDescription | undefined;
	readonly relationships?: ResourceSetDescription | undefined;
	readonly role: "Admin" | "DataAdmin" | "DataReader" | "ManageAdmin" | "ManageReader";
	readonly roleAssignments?: ResourceSetDescription | undefined;
	readonly sasPolicies?: ResourceSetDescription | undefined;
	readonly segments?: ResourceSetDescription | undefined;
	readonly tenantId?: string | undefined;
	readonly views?: ResourceSetDescription | undefined;
	readonly widgetTypes?: ResourceSetDescription | undefined;
}
export interface RoleAssignmentDescription {
	readonly "[ key: string ]"?: string | undefined;
}
export interface RoleAssignmentDisplayName {
	readonly "[ key: string ]"?: string | undefined;
}
export interface StrongId {
	readonly description?: StrongIdDescription | undefined;
	readonly displayName?: StrongIdDisplayName | undefined;
	readonly keyPropertyNames: string[];
	readonly strongIdName: string;
}
export interface StrongIdDescription {
	readonly "[ key: string ]"?: string | undefined;
}
export interface StrongIdDisplayName {
	readonly "[ key: string ]"?: string | undefined;
}
export interface TypePropertiesMapping {
	readonly linkType?: "CopyIfNull" | undefined;
	readonly sourcePropertyName: string;
	readonly targetPropertyName: string;
}
export interface View {
	readonly changed?: string | undefined;
	readonly created?: string | undefined;
	readonly definition: string;
	readonly displayName?: ViewDisplayName | undefined;
	readonly tenantId?: string | undefined;
	readonly userId?: string | undefined;
	readonly viewName?: string | undefined;
}
export interface ViewDisplayName {
	readonly "[ key: string ]"?: string | undefined;
}
export interface WidgetType {
	readonly changed?: string | undefined;
	readonly created?: string | undefined;
	readonly definition: string;
	readonly description?: string | undefined;
	readonly displayName?: WidgetTypeDisplayName | undefined;
	readonly imageUrl?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly widgetTypeName?: string | undefined;
	readonly widgetVersion?: string | undefined;
}
export interface WidgetTypeDisplayName {
	readonly "[ key: string ]"?: string | undefined;
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

import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Services extends GdmResource<ServicesComponentInputs> implements ServicesComponentOutputs {
	constructor(entity: ADKEntity, options: ServicesComponentInputs) {
		super(entity, options.name, "serviceusage.v1.Services", options);
	}
}
export interface ServicesComponentOutputs {}
export interface ServicesComponentInputs {
	readonly config?: GoogleApiServiceusageV1ServiceConfig;
	readonly dependencyConfig?: DependencyConfig;
	readonly name: string;
	readonly parent?: string;
	readonly serviceAccounts?: ServiceAccount[];
	readonly state?: string;
}
export interface Api {
	readonly methods?: Method[];
	readonly mixins?: Mixin[];
	readonly name?: string;
	readonly options?: Option[];
	readonly sourceContext?: SourceContext;
	readonly syntax?: string;
	readonly version?: string;
}
export interface Authentication {
	readonly enableMtls?: boolean;
	readonly environment?: string;
	readonly gaiaService?: string;
	readonly peerDelegationMode?: string;
	readonly providers?: AuthProvider[];
	readonly rules?: AuthenticationRule[];
}
export interface AuthenticationRule {
	readonly allowAuthServerFailOpen?: boolean;
	readonly allowWithoutCredential?: boolean;
	readonly basicAuth?: BasicAuthRequirements;
	readonly browserFirstPartyAuth?: BrowserFirstPartyAuthRequirements;
	readonly endUserCreds?: EndUserCredsRequirements;
	readonly loas?: LoasRequirements;
	readonly oauth?: OAuthRequirements;
	readonly requirements?: AuthRequirement[];
	readonly selector?: string;
	readonly uberMint?: UberMintRequirements;
	readonly uberproxyAuth?: UberProxyAuthRequirements;
	readonly useRpcSecurityPolicy?: string;
}
export interface AuthProvider {
	readonly audiences?: string;
	readonly authorizationUrl?: string;
	readonly id?: string;
	readonly issuer?: string;
	readonly jwksUri?: string;
	readonly jwtLocations?: JwtLocation[];
}
export interface AuthRequirement {
	readonly audiences?: string;
	readonly providerId?: string;
}
export interface BackendProtoTranslation {
	readonly rules?: BackendProtoTranslationRule[];
	readonly templates?: TemplateReference[];
}
export interface BackendProtoTranslationRule {
	readonly enablePartialResponse?: boolean;
	readonly requestTemplates?: TemplateInvocation[];
	readonly responseTemplates?: TemplateInvocation[];
	readonly selector?: string;
}
export interface BasicAuthRequirements {
	readonly enableProgrammaticClientToken?: boolean;
	readonly scopeCodes?: string;
}
export interface BoqSettings {
	readonly controlPlaneConfig?: string;
}
export interface BrowserFirstPartyAuthRequirements {
	readonly allowMissingActiveSession?: boolean;
	readonly ignoreInvalidCredentials?: boolean;
	readonly scopeCodes?: string;
}
export interface ControlPlaneMigration {
	readonly migrating?: boolean;
}
export interface DependencyConfig {
	readonly dependsOn?: string[];
	readonly directlyDependsOn?: string[];
	readonly directlyRequiredBy?: string[];
	readonly requiredBy?: string[];
}
export interface DescriptorProto {
	readonly enumType?: EnumDescriptorProto[];
	readonly extension?: FieldDescriptorProto[];
	readonly extensionRange?: ExtensionRange[];
	readonly field?: FieldDescriptorProto[];
	readonly name?: string;
	readonly nestedType?: DescriptorProto[];
	readonly oneofDecl?: OneofDescriptorProto[];
	readonly options?: MessageOptions;
	readonly reservedName?: string[];
	readonly reservedRange?: ReservedRange[];
}
export interface Devconsole {
	readonly consoleApi?: string;
	readonly exampleUrl?: string;
	readonly learnmoreUrl?: string;
	readonly pricingLink?: string;
	readonly requestQuotaUrl?: string;
}
export interface Discovery {
	readonly apiName?: string;
	readonly batchPath?: string;
	readonly canonicalName: string;
	readonly discoveryPerVersion?: Discovery[];
	readonly exponentialBackoffDefault?: boolean;
	readonly launchStage?: string;
	readonly pathPrefixes?: string[];
	readonly publicDirectory?: boolean;
	readonly publicDiscovery?: boolean;
	readonly rootUrl?: string;
	readonly rules?: JsonSchemaRule[];
	readonly schemaNameTemplate?: string;
	readonly supportedSchemas?: string[];
	readonly version?: string;
}
export interface DiscoveryConfig {
	readonly allowBatchPathOverride?: boolean;
	readonly allowDiscoverableUserIpSystemParameter?: boolean;
	readonly allowSchemaInlineMessages?: boolean;
	readonly deriveCollectionFromDiscoveryPerVersion?: boolean;
	readonly deriveCollectionFromMultiLevels?: boolean;
	readonly enableTopLevelMethods?: boolean;
	readonly iconUrlOverrides?: IconUrlOverrides;
	readonly packagePath?: string;
	readonly propagateLowerCamelEnumsFlags?: boolean;
	readonly propagateUseLegacyJsonMapFormatFlags?: boolean;
	readonly servicePaths?: { [P in string]: string };
	readonly skipServiceControlForLegacyDiscoveryUrl?: boolean;
	readonly sortRequiredQueryParams?: boolean;
	readonly suppressEmptyParameterOrder?: boolean;
	readonly useProtoToApiaryMethodNames?: boolean;
	readonly warnForPropagationConflicts?: boolean;
}
export interface DiscoveryMessageConfig {
	readonly hideEmptySchema?: boolean;
	readonly inlineMessage?: boolean;
	readonly shallowInlineMessage?: boolean;
	readonly useProtoForOuterMessageName?: boolean;
}
export interface Documentation {
	readonly documentationPerVersion?: DocumentationPerVersion[];
	readonly documentationRootUrl?: string;
	readonly overview?: string;
	readonly pages?: Page[];
	readonly rules?: DocumentationRule[];
	readonly serviceRootUrl?: string;
	readonly summary?: string;
	readonly unattachedTypeBehaviors?: string;
}
export interface DocumentationPerVersion {
	readonly additionalTypeNames?: string[];
	readonly version?: string;
}
export interface DocumentationRule {
	readonly deprecationDescription?: string;
	readonly description?: string;
	readonly selector?: string;
}
export interface Endpoint {
	readonly aliases?: string[];
	readonly allowCors?: boolean;
	readonly features?: string[];
	readonly launchStage?: string;
	readonly name?: string;
	readonly target?: string;
	readonly urlMap?: string;
}
export interface EndUserCredsRequirements {
	readonly scopeCodes?: string;
}
export interface EnumDescriptorProto {
	readonly name?: string;
	readonly options?: EnumOptions;
	readonly reservedName?: string[];
	readonly reservedRange?: EnumReservedRange[];
	readonly value?: EnumValueDescriptorProto[];
}
export interface EnumOptions {
	readonly allowAlias?: boolean;
	readonly deprecated?: boolean;
	readonly proto1Name?: string;
	readonly uninterpretedOption?: UninterpretedOption[];
}
export interface EnumReservedRange {
	readonly end?: number;
	readonly start?: number;
}
export interface EnumValueDescriptorProto {
	readonly name?: string;
	readonly number?: number;
	readonly options?: EnumValueOptions;
}
export interface EnumValueOptions {
	readonly deprecated?: boolean;
	readonly uninterpretedOption?: UninterpretedOption[];
}
export interface ErrorDefinition {
	readonly domain?: string;
	readonly errorMessage?: string;
	readonly extendedHelp?: string;
	readonly externalName?: string;
	readonly httpErrorHeaders?: { [P in string]: string };
	readonly location?: string;
	readonly predicate?: ErrorPredicate;
	readonly reason?: string;
}
export interface ErrorDefinitions {
	readonly definitions?: ErrorDefinition[];
}
export interface ErrorDomain {
	readonly errorDefinitions?: { [P in string]: ErrorDefinitions };
}
export interface ErrorFallbackConfig {
	readonly forwardingHttpserviceAddress?: string;
}
export interface ErrorFilter {
	readonly errorCodePattern?: string;
	readonly subcodes?: SubcodeConfig[];
}
export interface ErrorPredicate {
	readonly location?: string;
	readonly method?: string;
}
export interface ESFGwsLogConfig {
	readonly disableGrantedScope?: boolean;
	readonly enableLogErrorOnly?: boolean;
	readonly enableLogFrontlineTlsProtocolNegotiation?: boolean;
	readonly enableLogGrpcAutobahnStreamCloseLatency?: boolean;
	readonly enableLogTaskInfo?: boolean;
	readonly logType?: string;
}
export interface ETag {
	readonly rules?: ETagRule[];
}
export interface ETagRule {
	readonly enabled?: boolean;
	readonly etagFormat?: string;
	readonly passStarToBackend?: boolean;
	readonly selector?: string;
	readonly sourceField?: string;
	readonly suppressHeader?: boolean;
	readonly useBodyResourceEtag?: boolean;
}
export interface ExtensionRange {
	readonly end?: number;
	readonly options?: ExtensionRangeOptions;
	readonly start?: number;
}
export interface ExtensionRangeOptions {
	readonly metadata?: Metadata;
	readonly uninterpretedOption?: UninterpretedOption[];
}
export interface FieldConstraintConfig {
	readonly defaultValue?: string;
	readonly description?: string;
	readonly isRequired?: boolean;
	readonly maxValue?: string;
	readonly minValue?: string;
	readonly pattern?: string;
}
export interface FieldDescriptorProto {
	readonly defaultValue?: string;
	readonly extendee?: string;
	readonly jsonName?: string;
	readonly label?: string;
	readonly name?: string;
	readonly number?: number;
	readonly oneofIndex?: number;
	readonly options?: FieldOptions;
	readonly proto3Optional?: boolean;
	readonly type?: string;
	readonly typeName?: string;
}
export interface FieldOptions {
	readonly ccOpenEnum?: boolean;
	readonly ctype?: string;
	readonly deprecated?: boolean;
	readonly deprecatedRawMessage?: boolean;
	readonly enforceUtf8?: boolean;
	readonly jstype?: string;
	readonly lazy?: boolean;
	readonly packed?: boolean;
	readonly uninterpretedOption?: UninterpretedOption[];
	readonly unverifiedLazy?: boolean;
	readonly upgradedOption?: UpgradedOption[];
	readonly weak?: boolean;
}
export interface FieldReplacementRule {
	readonly inlineSchema?: boolean;
	readonly schema?: string;
	readonly selector?: string;
}
export interface FileDescriptorProto {
	readonly dependency?: string[];
	readonly edition?: string;
	readonly enumType?: EnumDescriptorProto[];
	readonly extension?: FieldDescriptorProto[];
	readonly messageType?: DescriptorProto[];
	readonly name?: string;
	readonly options?: FileOptions;
	readonly package?: string;
	readonly publicDependency?: number[];
	readonly service?: ServiceDescriptorProto[];
	readonly sourceCodeInfo?: SourceCodeInfo;
	readonly syntax?: string;
	readonly weakDependency?: number[];
}
export interface FileDescriptorSet {
	readonly file?: FileDescriptorProto[];
}
export interface FileOptions {
	readonly ccApiVersion?: number;
	readonly ccEnableArenas?: boolean;
	readonly ccEnableMethodHandles?: boolean;
	readonly ccGenericServices?: boolean;
	readonly ccUtf8Verification?: boolean;
	readonly csharpNamespace?: string;
	readonly deprecated?: boolean;
	readonly goApiFlag?: string;
	readonly goPackage?: string;
	readonly javaAltApiPackage?: string;
	readonly javaApiVersion?: number;
	readonly javaEnableDualGenerateMutableApi?: boolean;
	readonly javaGenericServices?: boolean;
	readonly javaJava5Enums?: boolean;
	readonly javaMultipleFiles?: boolean;
	readonly javaMultipleFilesMutablePackage?: string;
	readonly javaMutableApi?: boolean;
	readonly javaOuterClassname?: string;
	readonly javaPackage?: string;
	readonly javascriptPackage?: string;
	readonly javaStringCheckUtf8?: boolean;
	readonly javaUseJavaproto2?: boolean;
	readonly jspbUseCorrectProto2Semantics?: boolean;
	readonly objcClassPrefix?: string;
	readonly optimizeFor?: string;
	readonly phpClassPrefix?: string;
	readonly phpGenericServices?: boolean;
	readonly phpMetadataNamespace?: string;
	readonly phpNamespace?: string;
	readonly pyGenericServices?: boolean;
	readonly rubyPackage?: string;
	readonly swiftPrefix?: string;
	readonly szlApiVersion?: number;
	readonly uninterpretedOption?: UninterpretedOption[];
	readonly useJavaStubbyLibrary?: boolean;
}
export interface GfeRedirectConfig {
	readonly enabledOnRequestFlow?: boolean;
	readonly enabledOnResponseFlow?: boolean;
	readonly enableInnerBatchErrorFallback?: boolean;
	readonly enableProjectOverrides?: boolean;
	readonly errorCodePattern?: string[];
	readonly errorFilters?: ErrorFilter[];
}
export interface GoogleApiServiceIdentity {
	readonly description?: string;
	readonly displayName?: string;
	readonly serviceAccountParent?: string;
}
export interface GoogleApiServiceusageV1Service {
	readonly config?: GoogleApiServiceusageV1ServiceConfig;
	readonly dependencyConfig?: DependencyConfig;
	readonly name?: string;
	readonly parent?: string;
	readonly serviceAccounts?: ServiceAccount[];
	readonly state?: string;
}
export interface GoogleApiServiceusageV1ServiceConfig {
	readonly apis?: Api[];
	readonly authentication?: Authentication;
	readonly discovery?: Discovery;
	readonly documentation?: Documentation;
	readonly endpoints?: Endpoint[];
	readonly features?: string[];
	readonly legacy?: Legacy;
	readonly metrics?: MetricDescriptor[];
	readonly migration?: Migration;
	readonly monitoredResources?: MonitoredResourceDescriptor[];
	readonly monitoring?: Monitoring;
	readonly name?: string;
	readonly quota?: Quota;
	readonly title?: string;
	readonly usage?: Usage;
}
export interface IconUrlOverrides {
	readonly x16?: string;
	readonly x32?: string;
}
export interface Impersonation {
	readonly allowedOauthClientIds?: string[];
	readonly allowFirstPartyAuth?: boolean;
	readonly allowOauth?: boolean;
}
export interface JsonFixupConfig {
	readonly enableJsonFixup?: boolean;
}
export interface JsonSchema {
	readonly $ref?: string;
	readonly additionalPropertiesAllowed?: boolean;
	readonly additionalPropertyRestrictions?: JsonSchema;
	readonly annotations?: JsonSchemaAnnotations;
	readonly default?: string;
	readonly description?: string;
	readonly format?: string;
	readonly id?: string;
	readonly items?: JsonSchema;
	readonly maximum?: string;
	readonly minimum?: string;
	readonly pattern?: string;
	readonly properties?: { [P in string]: JsonSchema };
	readonly readOnly?: boolean;
	readonly required?: string;
	readonly type?: string;
}
export interface JsonSchemaAnnotations {
	readonly required?: string[];
}
export interface JsonSchemaProperties {
	readonly hideFromSchemas?: string[];
	readonly version?: string;
}
export interface JsonSchemaRule {
	readonly excluded?: boolean;
	readonly schemaNameTemplate?: string;
	readonly selector: string;
}
export interface JwtLocation {
	readonly cookie?: string;
	readonly header?: string;
	readonly query?: string;
	readonly valuePrefix?: string;
}
export interface LabelDescriptor {
	readonly description?: string;
	readonly key?: string;
	readonly valueType?: string;
}
export interface LabelMapping {
	readonly destinationMetricLabel?: string;
	readonly destinationResourceLabel?: string;
	readonly sourceLabel?: string;
}
export interface Legacy {
	readonly apiV1Name?: string;
	readonly boqSettings?: BoqSettings;
	readonly bugComponentId?: string;
	readonly bugId?: string;
	readonly controlPlaneMigration?: ControlPlaneMigration;
	readonly devconsole?: Devconsole;
	readonly disableQuotaProjectOverride?: boolean;
	readonly doNotSendQuotaOverridesToQuotaserver?: boolean;
	readonly email?: string;
	readonly enableDirectPathForGrpc?: boolean;
	readonly enableOrgQuotaForAllConsumers?: boolean;
	readonly excludedVersionsInPackagePath?: string[];
	readonly forwardJwtKnownIssuers?: boolean;
	readonly gwslog?: ESFGwsLogConfig;
	readonly healthz?: string;
	readonly hiddenFromList?: boolean;
	readonly includeDebugTrackingId?: boolean;
	readonly mdb?: string;
	readonly oncall?: string;
	readonly restrictedQuotaBucketTrustedTesters?: { [P in string]: TrustedTesterList };
	readonly rules?: LegacyRule[];
	readonly support?: string;
	readonly taxonomyId?: string;
	readonly useLoasProjectWithProjectlessCredentials?: boolean;
	readonly usesApiaryProxy?: boolean;
}
export interface LegacyRule {
	readonly disableEsfUserAgentDetection?: boolean;
	readonly enableEsfChecksum?: boolean;
	readonly enableEsfFastPath?: boolean;
	readonly enableEsfSherlog?: boolean;
	readonly selector?: string;
}
export interface LoasRequirements {
	readonly allowServiceAccount?: boolean;
}
export interface Location {
	readonly leadingComments?: string;
	readonly leadingDetachedComments?: string[];
	readonly path?: number[];
	readonly span?: number[];
	readonly trailingComments?: string;
}
export interface MessageOptions {
	readonly deprecated?: boolean;
	readonly goApiFlag?: string;
	readonly mapEntry?: boolean;
	readonly messageSetWireFormat?: boolean;
	readonly noStandardDescriptorAccessor?: boolean;
	readonly uninterpretedOption?: UninterpretedOption[];
}
export interface Metadata {
	readonly isRepeated?: boolean;
	readonly name?: string;
	readonly type?: string;
}
export interface Method {
	readonly name?: string;
	readonly options?: Option[];
	readonly requestStreaming?: boolean;
	readonly requestTypeUrl?: string;
	readonly responseStreaming?: boolean;
	readonly responseTypeUrl?: string;
	readonly syntax?: string;
}
export interface MethodDescriptorProto {
	readonly clientStreaming?: boolean;
	readonly inputType?: string;
	readonly name?: string;
	readonly options?: MethodOptions;
	readonly outputType?: string;
	readonly serverStreaming?: boolean;
}
export interface MethodOptions {
	readonly clientLogging?: number;
	readonly clientStreaming?: boolean;
	readonly deadline?: number;
	readonly deprecated?: boolean;
	readonly duplicateSuppression?: boolean;
	readonly endUserCredsRequested?: boolean;
	readonly failFast?: boolean;
	readonly goLegacyChannelApi?: boolean;
	readonly idempotencyLevel?: string;
	readonly legacyClientInitialTokens?: string;
	readonly legacyResultType?: string;
	readonly legacyServerInitialTokens?: string;
	readonly legacyStreamType?: string;
	readonly legacyTokenUnit?: string;
	readonly logLevel?: string;
	readonly protocol?: string;
	readonly requestFormat?: string;
	readonly responseFormat?: string;
	readonly securityLabel?: string;
	readonly securityLevel?: string;
	readonly serverLogging?: number;
	readonly serverRequiredSecurityLevel?: string;
	readonly serverStreaming?: boolean;
	readonly uninterpretedOption?: UninterpretedOption[];
}
export interface MethodParameterRule {
	readonly parameters?: ParameterConfig[];
	readonly selector?: string;
}
export interface MethodReplacementRule {
	readonly hideRequestBodyFromDiscovery?: boolean;
	readonly hideResponseBodyFromDiscovery?: boolean;
	readonly inlineRequestSchema?: boolean;
	readonly inlineResponseSchema?: boolean;
	readonly parameterOrder?: string[];
	readonly requestParameterName?: string;
	readonly requestSchema?: string;
	readonly responseSchema?: string;
	readonly selector?: string;
	readonly supportsSubscription?: boolean;
}
export interface MetricDescriptor {
	readonly description?: string;
	readonly displayName?: string;
	readonly labels?: LabelDescriptor[];
	readonly launchStage?: string;
	readonly metadata?: MetricDescriptorMetadata;
	readonly metricKind?: string;
	readonly monitoredResourceTypes?: string[];
	readonly monitoringMigration?: MonitoringMigration;
	readonly name?: string;
	readonly type?: string;
	readonly unit?: string;
	readonly valueType?: string;
	readonly visibilityRestriction?: string;
}
export interface MetricDescriptorMetadata {
	readonly ingestDelay?: string;
	readonly launchStage?: string;
	readonly samplePeriod?: string;
}
export interface MetricMapping {
	readonly labelMappings?: LabelMapping[];
	readonly metric?: string;
	readonly monitoredResource?: string;
}
export interface MetricRule {
	readonly dynamicMetricCosts?: { [P in string]: string };
	readonly metricCosts?: { [P in string]: string };
	readonly selector?: string;
}
export interface Migration {
	readonly allowBackendBatchRequestWithoutContentId?: boolean;
	readonly allowBatchInnerPathWithoutLeadingSlash?: boolean;
	readonly allowCredentialProjectFallbackForMalformedApiKey?: boolean;
	readonly apiaryDiscoveryName?: string;
	readonly apiRules?: MigrationApiRule[];
	readonly batchInnerRequestsCountSoftLimit?: number;
	readonly batchRedirectConfig?: GfeRedirectConfig;
	readonly disableApiaryMethodNamesCheck?: boolean;
	readonly discoveryConfig?: DiscoveryConfig;
	readonly enableDomainRestriction?: boolean;
	readonly enumRules?: MigrationEnumRule[];
	readonly enumValueRules?: MigrationEnumValueRule[];
	readonly errorFallbackConfig?: ErrorFallbackConfig;
	readonly errors?: { [P in string]: ErrorDomain };
	readonly fieldReplacementRules?: FieldReplacementRule[];
	readonly fieldRules?: MigrationFieldRule[];
	readonly forceAlternativeServiceHeader?: string;
	readonly messageRules?: MigrationMessageRule[];
	readonly methodParameterRules?: MethodParameterRule[];
	readonly methodReplacementRules?: MethodReplacementRule[];
	readonly preferDistribDiscovery?: boolean;
	readonly protoToApiaryMethodNames?: { [P in string]: string };
	readonly quotaUserOverride?: QuotaUserOverrideConfig;
	readonly retryForUnavailableRetriableErr?: boolean;
	readonly return403ForBatchQuotaErrors?: boolean;
	readonly rules?: MigrationRule[];
	readonly schemaPropertiesPerVersion?: JsonSchemaProperties[];
	readonly schemas?: { [P in string]: JsonSchema };
	readonly serviceSuspendedEnforcementId?: number;
	readonly tex?: Tex;
	readonly usageManagerConfig?: UsageManagerConfig;
	readonly useApiaryBatchResponseHeaderAllowlist?: boolean;
	readonly useApiaryStyleDiscoveryUrl?: boolean;
}
export interface MigrationApiRule {
	readonly disableApiPackageVersionConsistencyCheck?: boolean;
	readonly selector?: string;
}
export interface MigrationEnumRule {
	readonly discoverySortEnumValues?: boolean;
	readonly hideFromDiscovery?: boolean;
	readonly lowerCamelEnums?: boolean;
	readonly protoToJsonValueNames?: { [P in string]: string };
	readonly selector?: string;
}
export interface MigrationEnumValueRule {
	readonly hideFromDiscovery?: boolean;
	readonly selector?: string;
}
export interface MigrationFieldRule {
	readonly alternativeFieldName?: string;
	readonly alwaysOutput?: boolean;
	readonly constraintConfig?: FieldConstraintConfig;
	readonly defaultValue?: string;
	readonly disableInlining?: boolean;
	readonly enableDiscoveryFieldMaskPathsQueryParam?: boolean;
	readonly hideFromDiscovery?: boolean;
	readonly httpParam?: boolean;
	readonly mapKey?: boolean;
	readonly pattern?: string;
	readonly requiringMethods?: string[];
	readonly selector?: string;
}
export interface MigrationMessageRule {
	readonly discoveryHideEmptySchema?: boolean;
	readonly discoveryMessageConfig?: DiscoveryMessageConfig;
	readonly discoveryUseProtoForOuterMessageName?: boolean;
	readonly hideFromDiscovery?: boolean;
	readonly schemaNameOverride?: string;
	readonly selector?: string;
}
export interface MigrationRule {
	readonly allowAuthSub?: boolean;
	readonly allowFirstPartyAuthV1?: boolean;
	readonly allowHttpMultipartFormData?: boolean;
	readonly allowIntToStringConversion?: boolean;
	readonly allowLiberalUnsignedParsing?: boolean;
	readonly allowPrimitiveTypeConversion?: boolean;
	readonly allowScottyDownloadUseHttpHead?: boolean;
	readonly allowUnregisteredRequests?: boolean;
	readonly alwaysOutputEmptyRepeatedFields?: boolean;
	readonly apiaryMethodName?: string;
	readonly apiaryRpcErrorFilter?: string;
	readonly chemistIsSourceOfTruthInDualCheckMode?: boolean;
	readonly clearJsonBodyForBackend204Response?: boolean;
	readonly concatRepeatedHttpHeadersInContext?: boolean;
	readonly defaultAltType?: string;
	readonly defaultFieldMask?: string;
	readonly disableImplicitList?: boolean;
	readonly doNotRequireWildcardForMapKeyField?: boolean;
	readonly dropJsonPrimitiveTypeDataToMessageField?: boolean;
	readonly enableAlternativeFieldForJsonArrayDeserialization?: boolean;
	readonly enableProjectBlacklistRedirection?: boolean;
	readonly enableQuotaUserOverride?: boolean;
	readonly gaiaMintOptions?: string[];
	readonly gfeRedirectConfig?: GfeRedirectConfig;
	readonly hideAdditionalBindingsFromDiscovery?: boolean;
	readonly hideFromDiscovery?: boolean;
	readonly ignoreAccessToken?: boolean;
	readonly ignoreAnonymousCredentialProjects?: boolean;
	readonly ignoreFieldMask?: boolean;
	readonly ignoreFieldsMaskForHttpbodyResponse?: boolean;
	readonly ignoreInvalidEnums?: boolean;
	readonly ignoreNonMessageJsonPayload?: boolean;
	readonly ignoreNullValueMapEntry?: boolean;
	readonly ignorePseudoAnonymousCredentialProjects?: boolean;
	readonly ignoreRequestPayload?: boolean;
	readonly ignoreRequestPayloadIfContentTypeIsEmpty?: boolean;
	readonly ignoreSpatula?: boolean;
	readonly ignoreUnknownFields?: boolean;
	readonly ignoreUnknownQueryParams?: boolean;
	readonly impersonation?: Impersonation;
	readonly jsonFixupConfig?: JsonFixupConfig;
	readonly lowerCamelEnums?: boolean;
	readonly passThroughAccessToken?: boolean;
	readonly respectRootWildcardInFieldMask?: boolean;
	readonly return204ForEmptyResponse?: boolean;
	readonly return401ForSessionError?: boolean;
	readonly return403ForQuotaErrors?: boolean;
	readonly return500ForClientError?: boolean;
	readonly returnEmptyResponseForEmptyFieldMask?: boolean;
	readonly selector?: string;
	readonly skipActivationCheck?: boolean;
	readonly supportedAltTypes?: string[];
	readonly suppressEmptyObjectInJsonResponse?: boolean;
	readonly suppressEmptyRepeatedFields?: boolean;
	readonly treatInvalidBooleanStringAsFalse?: boolean;
	readonly useApiaryFieldsParameterSyntax?: boolean;
	readonly useApiaryMethodNameForGwsLog?: boolean;
	readonly useApiaryMethodNameForReporting?: boolean;
	readonly useBackendCanonicalErrorReason?: boolean;
	readonly useClientIpAsQuotaUser?: boolean;
	readonly useDefaultAltIfInferredAltUnsupported?: boolean;
	readonly useGdataErrorCodeForV1LegacyError?: boolean;
	readonly useIntsForEnums?: boolean;
	readonly useLegacyJsonMapFormat?: boolean;
	readonly useLocationFromGdataError?: boolean;
	readonly useResourceProjectOverride?: boolean;
	readonly useV1ErrorFormat?: boolean;
	readonly useV1ErrorLegacyFormat?: boolean;
	readonly useWebSafeBase64ForByteFields?: boolean;
}
export interface Mixin {
	readonly name?: string;
	readonly root?: string;
}
export interface MonitoredResourceDescriptor {
	readonly description?: string;
	readonly displayName?: string;
	readonly labelExtractor?: string;
	readonly labels: LabelDescriptor[];
	readonly launchStage?: string;
	readonly monitoringMigration?: MonitoringMigration;
	readonly name?: string;
	readonly type: string;
}
export interface Monitoring {
	readonly consumerDestinations?: MonitoringDestination[];
	readonly producerDestinations?: MonitoringDestination[];
}
export interface MonitoringDestination {
	readonly aggregationType?: string;
	readonly metrics?: string[];
	readonly monitoredResource?: string;
	readonly precomputationFlags?: string;
	readonly queryOptimizations?: QueryOptimization[];
}
export interface MonitoringMigration {
	readonly metricMappings?: MetricMapping;
	readonly monitoringBackend?: string;
}
export interface NamePart {
	readonly isExtension?: boolean;
	readonly namePart?: string;
}
export interface OAuthRequirements {
	readonly allowAnyScope?: boolean;
	readonly canonicalScopes?: string;
}
export interface OneofDescriptorProto {
	readonly name?: string;
	readonly options?: OneofOptions;
}
export interface OneofOptions {
	readonly uninterpretedOption?: UninterpretedOption[];
}
export interface Option {
	readonly name?: string;
	readonly value?: { [P in string]: any };
}
export interface Page {
	readonly content?: string;
	readonly name?: string;
	readonly subpages?: Page[];
}
export interface Parameter {
	readonly defaultValue?: string;
	readonly maxValue?: string;
	readonly minValue?: string;
	readonly path?: string;
	readonly pattern?: string;
	readonly repeated?: boolean;
	readonly required?: boolean;
	readonly type?: string;
}
export interface ParameterConfig {
	readonly constraintConfig?: FieldConstraintConfig;
	readonly isRepeated?: boolean;
	readonly isRequired?: boolean;
	readonly paramName?: string;
	readonly type?: string;
}
export interface ParameterRule {
	readonly parameters?: Parameter[];
	readonly selector?: string;
}
export interface QueryOptimization {
	readonly aggregatedLabels?: string[];
	readonly flags?: string;
}
export interface Quota {
	readonly groups?: QuotaGroup[];
	readonly limits?: QuotaLimit[];
	readonly metricRules?: MetricRule[];
	readonly rules?: QuotaRule[];
	readonly supportedLocations?: string;
	readonly supportedRegions?: string;
}
export interface QuotaGroup {
	readonly billable?: boolean;
	readonly description?: string;
	readonly limits?: QuotaLimit[];
	readonly name?: string;
}
export interface QuotaGroupMapping {
	readonly cost?: number;
	readonly group?: string;
}
export interface QuotaLimit {
	readonly defaultLimit?: string;
	readonly description?: string;
	readonly displayName?: string;
	readonly duration?: string;
	readonly enablePerCellRateLimiting?: boolean;
	readonly freeTier?: string;
	readonly isConcurrent?: boolean;
	readonly isFixed?: boolean;
	readonly isPrecise?: boolean;
	readonly launchStage?: string;
	readonly limitBy?: string;
	readonly maxLimit?: string;
	readonly metric?: string;
	readonly name?: string;
	readonly supportedLocations?: string;
	readonly supportedRegions?: string;
	readonly unit?: string;
	readonly values?: { [P in string]: string };
	readonly visibilityRestriction?: string;
}
export interface QuotaRule {
	readonly disableQuota?: boolean;
	readonly groups?: QuotaGroupMapping[];
	readonly selector?: string;
}
export interface QuotaUserOverrideConfig {
	readonly allowedProjects?: string[];
	readonly deniedProjects?: string[];
}
export interface ReservedRange {
	readonly end?: number;
	readonly start?: number;
}
export interface ServiceAccount {
	readonly email?: string;
	readonly role?: string;
	readonly tag?: string;
}
export interface ServiceDescriptorProto {
	readonly method?: MethodDescriptorProto[];
	readonly name?: string;
	readonly options?: ServiceOptions;
	readonly stream?: StreamDescriptorProto[];
}
export interface ServiceOptions {
	readonly ccDefaultInvocableApi?: boolean;
	readonly deprecated?: boolean;
	readonly failureDetectionDelay?: number;
	readonly multicastStub?: boolean;
	readonly uninterpretedOption?: UninterpretedOption[];
}
export interface SourceCodeInfo {
	readonly location?: Location[];
}
export interface SourceContext {
	readonly fileName?: string;
}
export interface StreamDescriptorProto {
	readonly clientMessageType?: string;
	readonly name?: string;
	readonly options?: StreamOptions;
	readonly serverMessageType?: string;
}
export interface StreamOptions {
	readonly clientInitialTokens?: string;
	readonly clientLogging?: number;
	readonly deadline?: number;
	readonly deprecated?: boolean;
	readonly endUserCredsRequested?: boolean;
	readonly failFast?: boolean;
	readonly logLevel?: string;
	readonly securityLabel?: string;
	readonly securityLevel?: string;
	readonly serverInitialTokens?: string;
	readonly serverLogging?: number;
	readonly tokenUnit?: string;
	readonly uninterpretedOption?: UninterpretedOption[];
}
export interface StrictParsingRule {
	readonly hideMergeConflictValues?: boolean;
	readonly resolveMultipleValuesForSingularFields?: boolean;
	readonly selector?: string;
	readonly strictParsingChecks?: string[];
}
export interface SubcodeConfig {
	readonly fractionRedirected?: number;
	readonly subcode?: string;
}
export interface TemplateInfo {
	readonly assignmentDirection?: string;
	readonly path?: string;
}
export interface TemplateInvocation {
	readonly args?: string[];
	readonly output?: string;
	readonly template?: string;
}
export interface TemplateReference {
	readonly info?: { [P in string]: TemplateInfo };
	readonly name?: string;
}
export interface TemplateSource {
	readonly content?: string;
	readonly path?: string;
}
export interface Tex {
	readonly backendProtoDescriptors?: FileDescriptorSet;
	readonly backendProtoTranslation?: BackendProtoTranslation;
	readonly etag?: ETag;
	readonly frontendProtoDescriptors?: FileDescriptorSet;
	readonly parameters?: ParameterRule[];
	readonly strictParsingRules?: StrictParsingRule[];
	readonly templateSources?: TemplateSource[];
}
export interface TrustedTesterList {
	readonly gaiaGroupIds?: string[];
}
export interface UberMintRequirements {
	readonly mode?: string;
	readonly rolloutRatio?: number;
}
export interface UberProxyAuthRequirements {
	readonly mode?: string;
	readonly uptickDatPolicy?: string;
}
export interface UninterpretedOption {
	readonly aggregateValue?: string;
	readonly doubleValue?: number;
	readonly identifierValue?: string;
	readonly name?: NamePart[];
	readonly negativeIntValue?: string;
	readonly positiveIntValue?: string;
	readonly stringValue?: string;
}
export interface UpgradedOption {
	readonly name?: string;
	readonly value?: string;
}
export interface Usage {
	readonly activationHooks?: string[];
	readonly deactivationHooks?: string[];
	readonly dependsOnServices?: string[];
	readonly producerNotificationChannel?: string;
	readonly requirements?: string[];
	readonly rules?: UsageRule[];
	readonly serviceAccess?: string;
	readonly serviceIdentity?: GoogleApiServiceIdentity;
}
export interface UsageManagerConfig {
	readonly apiName?: string;
	readonly rules?: UsageManagerConfigRule[];
}
export interface UsageManagerConfigRule {
	readonly address?: string;
	readonly apiVersion?: string;
	readonly quotaBucketName?: string;
	readonly selector?: string;
}
export interface UsageRule {
	readonly allowUnregisteredCalls?: boolean;
	readonly defaultApiKey?: string;
	readonly selector?: string;
	readonly skipServiceControl?: boolean;
	readonly skipServiceControlForStubby?: boolean;
	readonly skipStreamingApiMetrics?: boolean;
}
export default {
	Services: Services,
};

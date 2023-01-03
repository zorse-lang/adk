import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class VirtualService extends GdmResource<VirtualServiceComponentInputs> implements VirtualServiceComponentOutputs {
	constructor(entity: ADKEntity, options: VirtualServiceComponentInputs) {
		super(entity, options.name, "serviceusage.v1beta1.VirtualService", options);
	}
}
export interface VirtualServiceComponentOutputs {}
export interface VirtualServiceComponentInputs {
	readonly config?: ServiceConfig | undefined;
	readonly ignoreCurrentState?: boolean | undefined;
	readonly name: string;
	readonly parent?: string | undefined;
	readonly state?: string | undefined;
	readonly type: string;
}
export interface Api {
	readonly methods?: Method[] | undefined;
	readonly mixins?: Mixin[] | undefined;
	readonly name?: string | undefined;
	readonly options?: Option[] | undefined;
	readonly sourceContext?: SourceContext | undefined;
	readonly syntax?: string | undefined;
	readonly version?: string | undefined;
}
export interface Authentication {
	readonly enableMtls?: boolean | undefined;
	readonly environment?: string | undefined;
	readonly gaiaService?: string | undefined;
	readonly peerDelegationMode?: string | undefined;
	readonly providers?: AuthProvider[] | undefined;
	readonly rules?: AuthenticationRule[] | undefined;
}
export interface AuthenticationRule {
	readonly allowAuthServerFailOpen?: boolean | undefined;
	readonly allowWithoutCredential?: boolean | undefined;
	readonly basicAuth?: BasicAuthRequirements | undefined;
	readonly browserFirstPartyAuth?: BrowserFirstPartyAuthRequirements | undefined;
	readonly endUserCreds?: EndUserCredsRequirements | undefined;
	readonly loas?: LoasRequirements | undefined;
	readonly oauth?: OAuthRequirements | undefined;
	readonly requirements?: AuthRequirement[] | undefined;
	readonly selector?: string | undefined;
	readonly uberMint?: UberMintRequirements | undefined;
	readonly uberproxyAuth?: UberProxyAuthRequirements | undefined;
	readonly useRpcSecurityPolicy?: string | undefined;
}
export interface AuthProvider {
	readonly audiences?: string | undefined;
	readonly authorizationUrl?: string | undefined;
	readonly id?: string | undefined;
	readonly issuer?: string | undefined;
	readonly jwksUri?: string | undefined;
	readonly jwtLocations?: JwtLocation[] | undefined;
}
export interface AuthRequirement {
	readonly audiences?: string | undefined;
	readonly providerId?: string | undefined;
}
export interface BackendProtoTranslation {
	readonly rules?: BackendProtoTranslationRule[] | undefined;
	readonly templates?: TemplateReference[] | undefined;
}
export interface BackendProtoTranslationRule {
	readonly enablePartialResponse?: boolean | undefined;
	readonly requestTemplates?: TemplateInvocation[] | undefined;
	readonly responseTemplates?: TemplateInvocation[] | undefined;
	readonly selector?: string | undefined;
}
export interface BasicAuthRequirements {
	readonly enableProgrammaticClientToken?: boolean | undefined;
	readonly scopeCodes?: string | undefined;
}
export interface BoqSettings {
	readonly controlPlaneConfig?: string | undefined;
}
export interface BrowserFirstPartyAuthRequirements {
	readonly allowMissingActiveSession?: boolean | undefined;
	readonly ignoreInvalidCredentials?: boolean | undefined;
	readonly scopeCodes?: string | undefined;
}
export interface ControlPlaneMigration {
	readonly migrating?: boolean | undefined;
}
export interface DescriptorProto {
	readonly enumType?: EnumDescriptorProto[] | undefined;
	readonly extension?: FieldDescriptorProto[] | undefined;
	readonly extensionRange?: ExtensionRange[] | undefined;
	readonly field?: FieldDescriptorProto[] | undefined;
	readonly name?: string | undefined;
	readonly nestedType?: DescriptorProto[] | undefined;
	readonly oneofDecl?: OneofDescriptorProto[] | undefined;
	readonly options?: MessageOptions | undefined;
	readonly reservedName?: string[] | undefined;
	readonly reservedRange?: ReservedRange[] | undefined;
}
export interface Devconsole {
	readonly consoleApi?: string | undefined;
	readonly exampleUrl?: string | undefined;
	readonly learnmoreUrl?: string | undefined;
	readonly pricingLink?: string | undefined;
	readonly requestQuotaUrl?: string | undefined;
}
export interface Discovery {
	readonly apiName?: string | undefined;
	readonly batchPath?: string | undefined;
	readonly canonicalName: string;
	readonly discoveryPerVersion?: Discovery[] | undefined;
	readonly exponentialBackoffDefault?: boolean | undefined;
	readonly launchStage?: string | undefined;
	readonly pathPrefixes?: string[] | undefined;
	readonly publicDirectory?: boolean | undefined;
	readonly publicDiscovery?: boolean | undefined;
	readonly rootUrl?: string | undefined;
	readonly rules?: JsonSchemaRule[] | undefined;
	readonly schemaNameTemplate?: string | undefined;
	readonly supportedSchemas?: string[] | undefined;
	readonly version?: string | undefined;
}
export interface DiscoveryConfig {
	readonly allowBatchPathOverride?: boolean | undefined;
	readonly allowDiscoverableUserIpSystemParameter?: boolean | undefined;
	readonly allowSchemaInlineMessages?: boolean | undefined;
	readonly deriveCollectionFromDiscoveryPerVersion?: boolean | undefined;
	readonly deriveCollectionFromMultiLevels?: boolean | undefined;
	readonly enableTopLevelMethods?: boolean | undefined;
	readonly iconUrlOverrides?: IconUrlOverrides | undefined;
	readonly packagePath?: string | undefined;
	readonly propagateLowerCamelEnumsFlags?: boolean | undefined;
	readonly propagateUseLegacyJsonMapFormatFlags?: boolean | undefined;
	readonly servicePaths?: { [P in string]: string } | undefined;
	readonly skipServiceControlForLegacyDiscoveryUrl?: boolean | undefined;
	readonly sortRequiredQueryParams?: boolean | undefined;
	readonly suppressEmptyParameterOrder?: boolean | undefined;
	readonly useProtoToApiaryMethodNames?: boolean | undefined;
	readonly warnForPropagationConflicts?: boolean | undefined;
}
export interface DiscoveryMessageConfig {
	readonly hideEmptySchema?: boolean | undefined;
	readonly inlineMessage?: boolean | undefined;
	readonly shallowInlineMessage?: boolean | undefined;
	readonly useProtoForOuterMessageName?: boolean | undefined;
}
export interface Documentation {
	readonly documentationPerVersion?: DocumentationPerVersion[] | undefined;
	readonly documentationRootUrl?: string | undefined;
	readonly overview?: string | undefined;
	readonly pages?: Page[] | undefined;
	readonly rules?: DocumentationRule[] | undefined;
	readonly serviceRootUrl?: string | undefined;
	readonly summary?: string | undefined;
	readonly unattachedTypeBehaviors?: string | undefined;
}
export interface DocumentationPerVersion {
	readonly additionalTypeNames?: string[] | undefined;
	readonly version?: string | undefined;
}
export interface DocumentationRule {
	readonly deprecationDescription?: string | undefined;
	readonly description?: string | undefined;
	readonly selector?: string | undefined;
}
export interface EnableServiceRequest {
	readonly ignoreCurrentState?: boolean | undefined;
}
export interface Endpoint {
	readonly aliases?: string[] | undefined;
	readonly allowCors?: boolean | undefined;
	readonly features?: string[] | undefined;
	readonly launchStage?: string | undefined;
	readonly name?: string | undefined;
	readonly target?: string | undefined;
	readonly urlMap?: string | undefined;
}
export interface EndUserCredsRequirements {
	readonly scopeCodes?: string | undefined;
}
export interface EnumDescriptorProto {
	readonly name?: string | undefined;
	readonly options?: EnumOptions | undefined;
	readonly reservedName?: string[] | undefined;
	readonly reservedRange?: EnumReservedRange[] | undefined;
	readonly value?: EnumValueDescriptorProto[] | undefined;
}
export interface EnumOptions {
	readonly allowAlias?: boolean | undefined;
	readonly deprecated?: boolean | undefined;
	readonly proto1Name?: string | undefined;
	readonly uninterpretedOption?: UninterpretedOption[] | undefined;
}
export interface EnumReservedRange {
	readonly end?: number | undefined;
	readonly start?: number | undefined;
}
export interface EnumValueDescriptorProto {
	readonly name?: string | undefined;
	readonly number?: number | undefined;
	readonly options?: EnumValueOptions | undefined;
}
export interface EnumValueOptions {
	readonly deprecated?: boolean | undefined;
	readonly uninterpretedOption?: UninterpretedOption[] | undefined;
}
export interface ErrorDefinition {
	readonly domain?: string | undefined;
	readonly errorMessage?: string | undefined;
	readonly extendedHelp?: string | undefined;
	readonly externalName?: string | undefined;
	readonly httpErrorHeaders?: { [P in string]: string } | undefined;
	readonly location?: string | undefined;
	readonly predicate?: ErrorPredicate | undefined;
	readonly reason?: string | undefined;
}
export interface ErrorDefinitions {
	readonly definitions?: ErrorDefinition[] | undefined;
}
export interface ErrorDomain {
	readonly errorDefinitions?: { [P in string]: ErrorDefinitions } | undefined;
}
export interface ErrorFallbackConfig {
	readonly forwardingHttpserviceAddress?: string | undefined;
}
export interface ErrorFilter {
	readonly errorCodePattern?: string | undefined;
	readonly subcodes?: SubcodeConfig[] | undefined;
}
export interface ErrorPredicate {
	readonly location?: string | undefined;
	readonly method?: string | undefined;
}
export interface ESFGwsLogConfig {
	readonly disableGrantedScope?: boolean | undefined;
	readonly enableLogErrorOnly?: boolean | undefined;
	readonly enableLogFrontlineTlsProtocolNegotiation?: boolean | undefined;
	readonly enableLogGrpcAutobahnStreamCloseLatency?: boolean | undefined;
	readonly enableLogTaskInfo?: boolean | undefined;
	readonly logType?: string | undefined;
}
export interface ETag {
	readonly rules?: ETagRule[] | undefined;
}
export interface ETagRule {
	readonly enabled?: boolean | undefined;
	readonly etagFormat?: string | undefined;
	readonly passStarToBackend?: boolean | undefined;
	readonly selector?: string | undefined;
	readonly sourceField?: string | undefined;
	readonly suppressHeader?: boolean | undefined;
	readonly useBodyResourceEtag?: boolean | undefined;
}
export interface ExtensionRange {
	readonly end?: number | undefined;
	readonly options?: ExtensionRangeOptions | undefined;
	readonly start?: number | undefined;
}
export interface ExtensionRangeOptions {
	readonly metadata?: Metadata | undefined;
	readonly uninterpretedOption?: UninterpretedOption[] | undefined;
}
export interface FieldConstraintConfig {
	readonly defaultValue?: string | undefined;
	readonly description?: string | undefined;
	readonly isRequired?: boolean | undefined;
	readonly maxValue?: string | undefined;
	readonly minValue?: string | undefined;
	readonly pattern?: string | undefined;
}
export interface FieldDescriptorProto {
	readonly defaultValue?: string | undefined;
	readonly extendee?: string | undefined;
	readonly jsonName?: string | undefined;
	readonly label?: string | undefined;
	readonly name?: string | undefined;
	readonly number?: number | undefined;
	readonly oneofIndex?: number | undefined;
	readonly options?: FieldOptions | undefined;
	readonly proto3Optional?: boolean | undefined;
	readonly type?: string | undefined;
	readonly typeName?: string | undefined;
}
export interface FieldOptions {
	readonly ccOpenEnum?: boolean | undefined;
	readonly ctype?: string | undefined;
	readonly deprecated?: boolean | undefined;
	readonly deprecatedRawMessage?: boolean | undefined;
	readonly enforceUtf8?: boolean | undefined;
	readonly jstype?: string | undefined;
	readonly lazy?: boolean | undefined;
	readonly packed?: boolean | undefined;
	readonly uninterpretedOption?: UninterpretedOption[] | undefined;
	readonly unverifiedLazy?: boolean | undefined;
	readonly upgradedOption?: UpgradedOption[] | undefined;
	readonly weak?: boolean | undefined;
}
export interface FieldReplacementRule {
	readonly inlineSchema?: boolean | undefined;
	readonly schema?: string | undefined;
	readonly selector?: string | undefined;
}
export interface FileDescriptorProto {
	readonly dependency?: string[] | undefined;
	readonly edition?: string | undefined;
	readonly enumType?: EnumDescriptorProto[] | undefined;
	readonly extension?: FieldDescriptorProto[] | undefined;
	readonly messageType?: DescriptorProto[] | undefined;
	readonly name?: string | undefined;
	readonly options?: FileOptions | undefined;
	readonly package?: string | undefined;
	readonly publicDependency?: number[] | undefined;
	readonly service?: ServiceDescriptorProto[] | undefined;
	readonly sourceCodeInfo?: SourceCodeInfo | undefined;
	readonly syntax?: string | undefined;
	readonly weakDependency?: number[] | undefined;
}
export interface FileDescriptorSet {
	readonly file?: FileDescriptorProto[] | undefined;
}
export interface FileOptions {
	readonly ccApiVersion?: number | undefined;
	readonly ccEnableArenas?: boolean | undefined;
	readonly ccEnableMethodHandles?: boolean | undefined;
	readonly ccGenericServices?: boolean | undefined;
	readonly ccUtf8Verification?: boolean | undefined;
	readonly csharpNamespace?: string | undefined;
	readonly deprecated?: boolean | undefined;
	readonly goApiFlag?: string | undefined;
	readonly goPackage?: string | undefined;
	readonly javaAltApiPackage?: string | undefined;
	readonly javaApiVersion?: number | undefined;
	readonly javaEnableDualGenerateMutableApi?: boolean | undefined;
	readonly javaGenericServices?: boolean | undefined;
	readonly javaJava5Enums?: boolean | undefined;
	readonly javaMultipleFiles?: boolean | undefined;
	readonly javaMultipleFilesMutablePackage?: string | undefined;
	readonly javaMutableApi?: boolean | undefined;
	readonly javaOuterClassname?: string | undefined;
	readonly javaPackage?: string | undefined;
	readonly javascriptPackage?: string | undefined;
	readonly javaStringCheckUtf8?: boolean | undefined;
	readonly javaUseJavaproto2?: boolean | undefined;
	readonly jspbUseCorrectProto2Semantics?: boolean | undefined;
	readonly objcClassPrefix?: string | undefined;
	readonly optimizeFor?: string | undefined;
	readonly phpClassPrefix?: string | undefined;
	readonly phpGenericServices?: boolean | undefined;
	readonly phpMetadataNamespace?: string | undefined;
	readonly phpNamespace?: string | undefined;
	readonly pyGenericServices?: boolean | undefined;
	readonly rubyPackage?: string | undefined;
	readonly swiftPrefix?: string | undefined;
	readonly szlApiVersion?: number | undefined;
	readonly uninterpretedOption?: UninterpretedOption[] | undefined;
	readonly useJavaStubbyLibrary?: boolean | undefined;
}
export interface GfeRedirectConfig {
	readonly enabledOnRequestFlow?: boolean | undefined;
	readonly enabledOnResponseFlow?: boolean | undefined;
	readonly enableInnerBatchErrorFallback?: boolean | undefined;
	readonly enableProjectOverrides?: boolean | undefined;
	readonly errorCodePattern?: string[] | undefined;
	readonly errorFilters?: ErrorFilter[] | undefined;
}
export interface GoogleApiServiceIdentity {
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly serviceAccountParent?: string | undefined;
}
export interface IconUrlOverrides {
	readonly x16?: string | undefined;
	readonly x32?: string | undefined;
}
export interface Impersonation {
	readonly allowedOauthClientIds?: string[] | undefined;
	readonly allowFirstPartyAuth?: boolean | undefined;
	readonly allowOauth?: boolean | undefined;
}
export interface JsonFixupConfig {
	readonly enableJsonFixup?: boolean | undefined;
}
export interface JsonSchema {
	readonly $ref?: string | undefined;
	readonly additionalPropertiesAllowed?: boolean | undefined;
	readonly additionalPropertyRestrictions?: JsonSchema | undefined;
	readonly annotations?: JsonSchemaAnnotations | undefined;
	readonly default?: string | undefined;
	readonly description?: string | undefined;
	readonly format?: string | undefined;
	readonly id?: string | undefined;
	readonly items?: JsonSchema | undefined;
	readonly maximum?: string | undefined;
	readonly minimum?: string | undefined;
	readonly pattern?: string | undefined;
	readonly properties?: { [P in string]: JsonSchema } | undefined;
	readonly readOnly?: boolean | undefined;
	readonly required?: string | undefined;
	readonly type?: string | undefined;
}
export interface JsonSchemaAnnotations {
	readonly required?: string[] | undefined;
}
export interface JsonSchemaProperties {
	readonly hideFromSchemas?: string[] | undefined;
	readonly version?: string | undefined;
}
export interface JsonSchemaRule {
	readonly excluded?: boolean | undefined;
	readonly schemaNameTemplate?: string | undefined;
	readonly selector: string;
}
export interface JwtLocation {
	readonly cookie?: string | undefined;
	readonly header?: string | undefined;
	readonly query?: string | undefined;
	readonly valuePrefix?: string | undefined;
}
export interface LabelDescriptor {
	readonly description?: string | undefined;
	readonly key?: string | undefined;
	readonly valueType?: string | undefined;
}
export interface LabelMapping {
	readonly destinationMetricLabel?: string | undefined;
	readonly destinationResourceLabel?: string | undefined;
	readonly sourceLabel?: string | undefined;
}
export interface Legacy {
	readonly apiV1Name?: string | undefined;
	readonly boqSettings?: BoqSettings | undefined;
	readonly bugComponentId?: string | undefined;
	readonly bugId?: string | undefined;
	readonly controlPlaneMigration?: ControlPlaneMigration | undefined;
	readonly devconsole?: Devconsole | undefined;
	readonly disableQuotaProjectOverride?: boolean | undefined;
	readonly doNotSendQuotaOverridesToQuotaserver?: boolean | undefined;
	readonly email?: string | undefined;
	readonly enableDirectPathForGrpc?: boolean | undefined;
	readonly enableOrgQuotaForAllConsumers?: boolean | undefined;
	readonly excludedVersionsInPackagePath?: string[] | undefined;
	readonly forwardJwtKnownIssuers?: boolean | undefined;
	readonly gwslog?: ESFGwsLogConfig | undefined;
	readonly healthz?: string | undefined;
	readonly hiddenFromList?: boolean | undefined;
	readonly includeDebugTrackingId?: boolean | undefined;
	readonly mdb?: string | undefined;
	readonly oncall?: string | undefined;
	readonly restrictedQuotaBucketTrustedTesters?: { [P in string]: TrustedTesterList } | undefined;
	readonly rules?: LegacyRule[] | undefined;
	readonly support?: string | undefined;
	readonly taxonomyId?: string | undefined;
	readonly useLoasProjectWithProjectlessCredentials?: boolean | undefined;
	readonly usesApiaryProxy?: boolean | undefined;
}
export interface LegacyRule {
	readonly disableEsfUserAgentDetection?: boolean | undefined;
	readonly enableEsfChecksum?: boolean | undefined;
	readonly enableEsfFastPath?: boolean | undefined;
	readonly enableEsfSherlog?: boolean | undefined;
	readonly selector?: string | undefined;
}
export interface LoasRequirements {
	readonly allowServiceAccount?: boolean | undefined;
}
export interface Location {
	readonly leadingComments?: string | undefined;
	readonly leadingDetachedComments?: string[] | undefined;
	readonly path?: number[] | undefined;
	readonly span?: number[] | undefined;
	readonly trailingComments?: string | undefined;
}
export interface MessageOptions {
	readonly deprecated?: boolean | undefined;
	readonly goApiFlag?: string | undefined;
	readonly mapEntry?: boolean | undefined;
	readonly messageSetWireFormat?: boolean | undefined;
	readonly noStandardDescriptorAccessor?: boolean | undefined;
	readonly uninterpretedOption?: UninterpretedOption[] | undefined;
}
export interface Metadata {
	readonly isRepeated?: boolean | undefined;
	readonly name?: string | undefined;
	readonly type?: string | undefined;
}
export interface Method {
	readonly name?: string | undefined;
	readonly options?: Option[] | undefined;
	readonly requestStreaming?: boolean | undefined;
	readonly requestTypeUrl?: string | undefined;
	readonly responseStreaming?: boolean | undefined;
	readonly responseTypeUrl?: string | undefined;
	readonly syntax?: string | undefined;
}
export interface MethodDescriptorProto {
	readonly clientStreaming?: boolean | undefined;
	readonly inputType?: string | undefined;
	readonly name?: string | undefined;
	readonly options?: MethodOptions | undefined;
	readonly outputType?: string | undefined;
	readonly serverStreaming?: boolean | undefined;
}
export interface MethodOptions {
	readonly clientLogging?: number | undefined;
	readonly clientStreaming?: boolean | undefined;
	readonly deadline?: number | undefined;
	readonly deprecated?: boolean | undefined;
	readonly duplicateSuppression?: boolean | undefined;
	readonly endUserCredsRequested?: boolean | undefined;
	readonly failFast?: boolean | undefined;
	readonly goLegacyChannelApi?: boolean | undefined;
	readonly idempotencyLevel?: string | undefined;
	readonly legacyClientInitialTokens?: string | undefined;
	readonly legacyResultType?: string | undefined;
	readonly legacyServerInitialTokens?: string | undefined;
	readonly legacyStreamType?: string | undefined;
	readonly legacyTokenUnit?: string | undefined;
	readonly logLevel?: string | undefined;
	readonly protocol?: string | undefined;
	readonly requestFormat?: string | undefined;
	readonly responseFormat?: string | undefined;
	readonly securityLabel?: string | undefined;
	readonly securityLevel?: string | undefined;
	readonly serverLogging?: number | undefined;
	readonly serverRequiredSecurityLevel?: string | undefined;
	readonly serverStreaming?: boolean | undefined;
	readonly uninterpretedOption?: UninterpretedOption[] | undefined;
}
export interface MethodParameterRule {
	readonly parameters?: ParameterConfig[] | undefined;
	readonly selector?: string | undefined;
}
export interface MethodReplacementRule {
	readonly hideRequestBodyFromDiscovery?: boolean | undefined;
	readonly hideResponseBodyFromDiscovery?: boolean | undefined;
	readonly inlineRequestSchema?: boolean | undefined;
	readonly inlineResponseSchema?: boolean | undefined;
	readonly parameterOrder?: string[] | undefined;
	readonly requestParameterName?: string | undefined;
	readonly requestSchema?: string | undefined;
	readonly responseSchema?: string | undefined;
	readonly selector?: string | undefined;
	readonly supportsSubscription?: boolean | undefined;
}
export interface MetricDescriptor {
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly labels?: LabelDescriptor[] | undefined;
	readonly launchStage?: string | undefined;
	readonly metadata?: MetricDescriptorMetadata | undefined;
	readonly metricKind?: string | undefined;
	readonly monitoredResourceTypes?: string[] | undefined;
	readonly monitoringMigration?: MonitoringMigration | undefined;
	readonly name?: string | undefined;
	readonly type?: string | undefined;
	readonly unit?: string | undefined;
	readonly valueType?: string | undefined;
	readonly visibilityRestriction?: string | undefined;
}
export interface MetricDescriptorMetadata {
	readonly ingestDelay?: string | undefined;
	readonly launchStage?: string | undefined;
	readonly samplePeriod?: string | undefined;
}
export interface MetricMapping {
	readonly labelMappings?: LabelMapping[] | undefined;
	readonly metric?: string | undefined;
	readonly monitoredResource?: string | undefined;
}
export interface MetricRule {
	readonly dynamicMetricCosts?: { [P in string]: string } | undefined;
	readonly metricCosts?: { [P in string]: string } | undefined;
	readonly selector?: string | undefined;
}
export interface Migration {
	readonly allowBackendBatchRequestWithoutContentId?: boolean | undefined;
	readonly allowBatchInnerPathWithoutLeadingSlash?: boolean | undefined;
	readonly allowCredentialProjectFallbackForMalformedApiKey?: boolean | undefined;
	readonly apiaryDiscoveryName?: string | undefined;
	readonly apiRules?: MigrationApiRule[] | undefined;
	readonly batchInnerRequestsCountSoftLimit?: number | undefined;
	readonly batchRedirectConfig?: GfeRedirectConfig | undefined;
	readonly disableApiaryMethodNamesCheck?: boolean | undefined;
	readonly discoveryConfig?: DiscoveryConfig | undefined;
	readonly enableDomainRestriction?: boolean | undefined;
	readonly enumRules?: MigrationEnumRule[] | undefined;
	readonly enumValueRules?: MigrationEnumValueRule[] | undefined;
	readonly errorFallbackConfig?: ErrorFallbackConfig | undefined;
	readonly errors?: { [P in string]: ErrorDomain } | undefined;
	readonly fieldReplacementRules?: FieldReplacementRule[] | undefined;
	readonly fieldRules?: MigrationFieldRule[] | undefined;
	readonly forceAlternativeServiceHeader?: string | undefined;
	readonly messageRules?: MigrationMessageRule[] | undefined;
	readonly methodParameterRules?: MethodParameterRule[] | undefined;
	readonly methodReplacementRules?: MethodReplacementRule[] | undefined;
	readonly preferDistribDiscovery?: boolean | undefined;
	readonly protoToApiaryMethodNames?: { [P in string]: string } | undefined;
	readonly quotaUserOverride?: QuotaUserOverrideConfig | undefined;
	readonly retryForUnavailableRetriableErr?: boolean | undefined;
	readonly return403ForBatchQuotaErrors?: boolean | undefined;
	readonly rules?: MigrationRule[] | undefined;
	readonly schemaPropertiesPerVersion?: JsonSchemaProperties[] | undefined;
	readonly schemas?: { [P in string]: JsonSchema } | undefined;
	readonly serviceSuspendedEnforcementId?: number | undefined;
	readonly tex?: Tex | undefined;
	readonly usageManagerConfig?: UsageManagerConfig | undefined;
	readonly useApiaryBatchResponseHeaderAllowlist?: boolean | undefined;
	readonly useApiaryStyleDiscoveryUrl?: boolean | undefined;
}
export interface MigrationApiRule {
	readonly disableApiPackageVersionConsistencyCheck?: boolean | undefined;
	readonly selector?: string | undefined;
}
export interface MigrationEnumRule {
	readonly discoverySortEnumValues?: boolean | undefined;
	readonly hideFromDiscovery?: boolean | undefined;
	readonly lowerCamelEnums?: boolean | undefined;
	readonly protoToJsonValueNames?: { [P in string]: string } | undefined;
	readonly selector?: string | undefined;
}
export interface MigrationEnumValueRule {
	readonly hideFromDiscovery?: boolean | undefined;
	readonly selector?: string | undefined;
}
export interface MigrationFieldRule {
	readonly alternativeFieldName?: string | undefined;
	readonly alwaysOutput?: boolean | undefined;
	readonly constraintConfig?: FieldConstraintConfig | undefined;
	readonly defaultValue?: string | undefined;
	readonly disableInlining?: boolean | undefined;
	readonly enableDiscoveryFieldMaskPathsQueryParam?: boolean | undefined;
	readonly hideFromDiscovery?: boolean | undefined;
	readonly httpParam?: boolean | undefined;
	readonly mapKey?: boolean | undefined;
	readonly pattern?: string | undefined;
	readonly requiringMethods?: string[] | undefined;
	readonly selector?: string | undefined;
}
export interface MigrationMessageRule {
	readonly discoveryHideEmptySchema?: boolean | undefined;
	readonly discoveryMessageConfig?: DiscoveryMessageConfig | undefined;
	readonly discoveryUseProtoForOuterMessageName?: boolean | undefined;
	readonly hideFromDiscovery?: boolean | undefined;
	readonly schemaNameOverride?: string | undefined;
	readonly selector?: string | undefined;
}
export interface MigrationRule {
	readonly allowAuthSub?: boolean | undefined;
	readonly allowFirstPartyAuthV1?: boolean | undefined;
	readonly allowHttpMultipartFormData?: boolean | undefined;
	readonly allowIntToStringConversion?: boolean | undefined;
	readonly allowLiberalUnsignedParsing?: boolean | undefined;
	readonly allowPrimitiveTypeConversion?: boolean | undefined;
	readonly allowScottyDownloadUseHttpHead?: boolean | undefined;
	readonly allowUnregisteredRequests?: boolean | undefined;
	readonly alwaysOutputEmptyRepeatedFields?: boolean | undefined;
	readonly apiaryMethodName?: string | undefined;
	readonly apiaryRpcErrorFilter?: string | undefined;
	readonly chemistIsSourceOfTruthInDualCheckMode?: boolean | undefined;
	readonly clearJsonBodyForBackend204Response?: boolean | undefined;
	readonly concatRepeatedHttpHeadersInContext?: boolean | undefined;
	readonly defaultAltType?: string | undefined;
	readonly defaultFieldMask?: string | undefined;
	readonly disableImplicitList?: boolean | undefined;
	readonly doNotRequireWildcardForMapKeyField?: boolean | undefined;
	readonly dropJsonPrimitiveTypeDataToMessageField?: boolean | undefined;
	readonly enableAlternativeFieldForJsonArrayDeserialization?: boolean | undefined;
	readonly enableProjectBlacklistRedirection?: boolean | undefined;
	readonly enableQuotaUserOverride?: boolean | undefined;
	readonly gaiaMintOptions?: string[] | undefined;
	readonly gfeRedirectConfig?: GfeRedirectConfig | undefined;
	readonly hideAdditionalBindingsFromDiscovery?: boolean | undefined;
	readonly hideFromDiscovery?: boolean | undefined;
	readonly ignoreAccessToken?: boolean | undefined;
	readonly ignoreAnonymousCredentialProjects?: boolean | undefined;
	readonly ignoreFieldMask?: boolean | undefined;
	readonly ignoreFieldsMaskForHttpbodyResponse?: boolean | undefined;
	readonly ignoreInvalidEnums?: boolean | undefined;
	readonly ignoreNonMessageJsonPayload?: boolean | undefined;
	readonly ignoreNullValueMapEntry?: boolean | undefined;
	readonly ignorePseudoAnonymousCredentialProjects?: boolean | undefined;
	readonly ignoreRequestPayload?: boolean | undefined;
	readonly ignoreRequestPayloadIfContentTypeIsEmpty?: boolean | undefined;
	readonly ignoreSpatula?: boolean | undefined;
	readonly ignoreUnknownFields?: boolean | undefined;
	readonly ignoreUnknownQueryParams?: boolean | undefined;
	readonly impersonation?: Impersonation | undefined;
	readonly jsonFixupConfig?: JsonFixupConfig | undefined;
	readonly lowerCamelEnums?: boolean | undefined;
	readonly passThroughAccessToken?: boolean | undefined;
	readonly respectRootWildcardInFieldMask?: boolean | undefined;
	readonly return204ForEmptyResponse?: boolean | undefined;
	readonly return401ForSessionError?: boolean | undefined;
	readonly return403ForQuotaErrors?: boolean | undefined;
	readonly return500ForClientError?: boolean | undefined;
	readonly returnEmptyResponseForEmptyFieldMask?: boolean | undefined;
	readonly selector?: string | undefined;
	readonly skipActivationCheck?: boolean | undefined;
	readonly supportedAltTypes?: string[] | undefined;
	readonly suppressEmptyObjectInJsonResponse?: boolean | undefined;
	readonly suppressEmptyRepeatedFields?: boolean | undefined;
	readonly treatInvalidBooleanStringAsFalse?: boolean | undefined;
	readonly useApiaryFieldsParameterSyntax?: boolean | undefined;
	readonly useApiaryMethodNameForGwsLog?: boolean | undefined;
	readonly useApiaryMethodNameForReporting?: boolean | undefined;
	readonly useBackendCanonicalErrorReason?: boolean | undefined;
	readonly useClientIpAsQuotaUser?: boolean | undefined;
	readonly useDefaultAltIfInferredAltUnsupported?: boolean | undefined;
	readonly useGdataErrorCodeForV1LegacyError?: boolean | undefined;
	readonly useIntsForEnums?: boolean | undefined;
	readonly useLegacyJsonMapFormat?: boolean | undefined;
	readonly useLocationFromGdataError?: boolean | undefined;
	readonly useResourceProjectOverride?: boolean | undefined;
	readonly useV1ErrorFormat?: boolean | undefined;
	readonly useV1ErrorLegacyFormat?: boolean | undefined;
	readonly useWebSafeBase64ForByteFields?: boolean | undefined;
}
export interface Mixin {
	readonly name?: string | undefined;
	readonly root?: string | undefined;
}
export interface MonitoredResourceDescriptor {
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly labelExtractor?: string | undefined;
	readonly labels: LabelDescriptor[];
	readonly launchStage?: string | undefined;
	readonly monitoringMigration?: MonitoringMigration | undefined;
	readonly name?: string | undefined;
	readonly type: string;
}
export interface Monitoring {
	readonly consumerDestinations?: MonitoringDestination[] | undefined;
	readonly producerDestinations?: MonitoringDestination[] | undefined;
}
export interface MonitoringDestination {
	readonly aggregationType?: string | undefined;
	readonly metrics?: string[] | undefined;
	readonly monitoredResource?: string | undefined;
	readonly precomputationFlags?: string | undefined;
	readonly queryOptimizations?: QueryOptimization[] | undefined;
}
export interface MonitoringMigration {
	readonly metricMappings?: MetricMapping | undefined;
	readonly monitoringBackend?: string | undefined;
}
export interface NamePart {
	readonly isExtension?: boolean | undefined;
	readonly namePart?: string | undefined;
}
export interface OAuthRequirements {
	readonly allowAnyScope?: boolean | undefined;
	readonly canonicalScopes?: string | undefined;
}
export interface OneofDescriptorProto {
	readonly name?: string | undefined;
	readonly options?: OneofOptions | undefined;
}
export interface OneofOptions {
	readonly uninterpretedOption?: UninterpretedOption[] | undefined;
}
export interface Option {
	readonly name?: string | undefined;
	readonly value?: { [P in string]: any } | undefined;
}
export interface Page {
	readonly content?: string | undefined;
	readonly name?: string | undefined;
	readonly subpages?: Page[] | undefined;
}
export interface Parameter {
	readonly defaultValue?: string | undefined;
	readonly maxValue?: string | undefined;
	readonly minValue?: string | undefined;
	readonly path?: string | undefined;
	readonly pattern?: string | undefined;
	readonly repeated?: boolean | undefined;
	readonly required?: boolean | undefined;
	readonly type?: string | undefined;
}
export interface ParameterConfig {
	readonly constraintConfig?: FieldConstraintConfig | undefined;
	readonly isRepeated?: boolean | undefined;
	readonly isRequired?: boolean | undefined;
	readonly paramName?: string | undefined;
	readonly type?: string | undefined;
}
export interface ParameterRule {
	readonly parameters?: Parameter[] | undefined;
	readonly selector?: string | undefined;
}
export interface QueryOptimization {
	readonly aggregatedLabels?: string[] | undefined;
	readonly flags?: string | undefined;
}
export interface Quota {
	readonly groups?: QuotaGroup[] | undefined;
	readonly limits?: QuotaLimit[] | undefined;
	readonly metricRules?: MetricRule[] | undefined;
	readonly rules?: QuotaRule[] | undefined;
	readonly supportedLocations?: string | undefined;
	readonly supportedRegions?: string | undefined;
}
export interface QuotaGroup {
	readonly billable?: boolean | undefined;
	readonly description?: string | undefined;
	readonly limits?: QuotaLimit[] | undefined;
	readonly name?: string | undefined;
}
export interface QuotaGroupMapping {
	readonly cost?: number | undefined;
	readonly group?: string | undefined;
}
export interface QuotaLimit {
	readonly defaultLimit?: string | undefined;
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly duration?: string | undefined;
	readonly enablePerCellRateLimiting?: boolean | undefined;
	readonly freeTier?: string | undefined;
	readonly isConcurrent?: boolean | undefined;
	readonly isFixed?: boolean | undefined;
	readonly isPrecise?: boolean | undefined;
	readonly launchStage?: string | undefined;
	readonly limitBy?: string | undefined;
	readonly maxLimit?: string | undefined;
	readonly metric?: string | undefined;
	readonly name?: string | undefined;
	readonly supportedLocations?: string | undefined;
	readonly supportedRegions?: string | undefined;
	readonly unit?: string | undefined;
	readonly values?: { [P in string]: string } | undefined;
	readonly visibilityRestriction?: string | undefined;
}
export interface QuotaRule {
	readonly disableQuota?: boolean | undefined;
	readonly groups?: QuotaGroupMapping[] | undefined;
	readonly selector?: string | undefined;
}
export interface QuotaUserOverrideConfig {
	readonly allowedProjects?: string[] | undefined;
	readonly deniedProjects?: string[] | undefined;
}
export interface ReservedRange {
	readonly end?: number | undefined;
	readonly start?: number | undefined;
}
export interface Service {
	readonly config?: ServiceConfig | undefined;
	readonly name?: string | undefined;
	readonly parent?: string | undefined;
	readonly state?: string | undefined;
}
export interface ServiceConfig {
	readonly apis?: Api[] | undefined;
	readonly authentication?: Authentication | undefined;
	readonly discovery?: Discovery | undefined;
	readonly documentation?: Documentation | undefined;
	readonly endpoints?: Endpoint[] | undefined;
	readonly features?: string[] | undefined;
	readonly legacy?: Legacy | undefined;
	readonly metrics?: MetricDescriptor[] | undefined;
	readonly migration?: Migration | undefined;
	readonly monitoredResources?: MonitoredResourceDescriptor[] | undefined;
	readonly monitoring?: Monitoring | undefined;
	readonly name?: string | undefined;
	readonly quota?: Quota | undefined;
	readonly title?: string | undefined;
	readonly usage?: Usage | undefined;
}
export interface ServiceDescriptorProto {
	readonly method?: MethodDescriptorProto[] | undefined;
	readonly name?: string | undefined;
	readonly options?: ServiceOptions | undefined;
	readonly stream?: StreamDescriptorProto[] | undefined;
}
export interface ServiceOptions {
	readonly ccDefaultInvocableApi?: boolean | undefined;
	readonly deprecated?: boolean | undefined;
	readonly failureDetectionDelay?: number | undefined;
	readonly multicastStub?: boolean | undefined;
	readonly uninterpretedOption?: UninterpretedOption[] | undefined;
}
export interface SourceCodeInfo {
	readonly location?: Location[] | undefined;
}
export interface SourceContext {
	readonly fileName?: string | undefined;
}
export interface StreamDescriptorProto {
	readonly clientMessageType?: string | undefined;
	readonly name?: string | undefined;
	readonly options?: StreamOptions | undefined;
	readonly serverMessageType?: string | undefined;
}
export interface StreamOptions {
	readonly clientInitialTokens?: string | undefined;
	readonly clientLogging?: number | undefined;
	readonly deadline?: number | undefined;
	readonly deprecated?: boolean | undefined;
	readonly endUserCredsRequested?: boolean | undefined;
	readonly failFast?: boolean | undefined;
	readonly logLevel?: string | undefined;
	readonly securityLabel?: string | undefined;
	readonly securityLevel?: string | undefined;
	readonly serverInitialTokens?: string | undefined;
	readonly serverLogging?: number | undefined;
	readonly tokenUnit?: string | undefined;
	readonly uninterpretedOption?: UninterpretedOption[] | undefined;
}
export interface StrictParsingRule {
	readonly hideMergeConflictValues?: boolean | undefined;
	readonly resolveMultipleValuesForSingularFields?: boolean | undefined;
	readonly selector?: string | undefined;
	readonly strictParsingChecks?: string[] | undefined;
}
export interface SubcodeConfig {
	readonly fractionRedirected?: number | undefined;
	readonly subcode?: string | undefined;
}
export interface TemplateInfo {
	readonly assignmentDirection?: string | undefined;
	readonly path?: string | undefined;
}
export interface TemplateInvocation {
	readonly args?: string[] | undefined;
	readonly output?: string | undefined;
	readonly template?: string | undefined;
}
export interface TemplateReference {
	readonly info?: { [P in string]: TemplateInfo } | undefined;
	readonly name?: string | undefined;
}
export interface TemplateSource {
	readonly content?: string | undefined;
	readonly path?: string | undefined;
}
export interface Tex {
	readonly backendProtoDescriptors?: FileDescriptorSet | undefined;
	readonly backendProtoTranslation?: BackendProtoTranslation | undefined;
	readonly etag?: ETag | undefined;
	readonly frontendProtoDescriptors?: FileDescriptorSet | undefined;
	readonly parameters?: ParameterRule[] | undefined;
	readonly strictParsingRules?: StrictParsingRule[] | undefined;
	readonly templateSources?: TemplateSource[] | undefined;
}
export interface TrustedTesterList {
	readonly gaiaGroupIds?: string[] | undefined;
}
export interface UberMintRequirements {
	readonly mode?: string | undefined;
	readonly rolloutRatio?: number | undefined;
}
export interface UberProxyAuthRequirements {
	readonly mode?: string | undefined;
	readonly uptickDatPolicy?: string | undefined;
}
export interface UninterpretedOption {
	readonly aggregateValue?: string | undefined;
	readonly doubleValue?: number | undefined;
	readonly identifierValue?: string | undefined;
	readonly name?: NamePart[] | undefined;
	readonly negativeIntValue?: string | undefined;
	readonly positiveIntValue?: string | undefined;
	readonly stringValue?: string | undefined;
}
export interface UpgradedOption {
	readonly name?: string | undefined;
	readonly value?: string | undefined;
}
export interface Usage {
	readonly activationHooks?: string[] | undefined;
	readonly deactivationHooks?: string[] | undefined;
	readonly dependsOnServices?: string[] | undefined;
	readonly producerNotificationChannel?: string | undefined;
	readonly requirements?: string[] | undefined;
	readonly rules?: UsageRule[] | undefined;
	readonly serviceAccess?: string | undefined;
	readonly serviceIdentity?: GoogleApiServiceIdentity | undefined;
}
export interface UsageManagerConfig {
	readonly apiName?: string | undefined;
	readonly rules?: UsageManagerConfigRule[] | undefined;
}
export interface UsageManagerConfigRule {
	readonly address?: string | undefined;
	readonly apiVersion?: string | undefined;
	readonly quotaBucketName?: string | undefined;
	readonly selector?: string | undefined;
}
export interface UsageRule {
	readonly allowUnregisteredCalls?: boolean | undefined;
	readonly defaultApiKey?: string | undefined;
	readonly selector?: string | undefined;
	readonly skipServiceControl?: boolean | undefined;
	readonly skipServiceControlForStubby?: boolean | undefined;
	readonly skipStreamingApiMetrics?: boolean | undefined;
}
export default {
	VirtualService: VirtualService,
};

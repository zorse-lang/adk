import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ServicesConfigs
	extends GdmResource<ServicesConfigsComponentInputs>
	implements ServicesConfigsComponentOutputs
{
	constructor(entity: ADKEntity, options: ServicesConfigsComponentInputs) {
		super(entity, options.name, "servicemanagement.v1.ServicesConfigs", options);
	}
	public readonly sourceInfo?: SourceInfo;
}
export interface ServicesConfigsComponentOutputs {
	readonly sourceInfo?: SourceInfo;
}
export interface ServicesConfigsComponentInputs {
	readonly analytics?: Analytics;
	readonly apis?: Api[];
	readonly auditing?: Auditing;
	readonly authentication?: Authentication;
	readonly backend?: Backend;
	readonly billing?: Billing;
	readonly census?: Census;
	readonly configVersion?: number;
	readonly context?: Context;
	readonly control?: Control;
	readonly customError?: CustomError;
	readonly derivedData?: { [P in string]: any };
	readonly discovery?: Discovery;
	readonly documentation?: Documentation;
	readonly endpoints?: Endpoint[];
	readonly enums?: Enum[];
	readonly experimental?: Experimental;
	readonly features?: string[];
	readonly filtering?: Filtering;
	readonly http?: Http;
	readonly iam?: Iam;
	readonly id?: string;
	readonly indexedResources?: IndexedResource;
	readonly labels?: LabelDescriptor[];
	readonly legacy?: Legacy;
	readonly logging?: Logging;
	readonly logs?: LogDescriptor[];
	readonly metrics?: MetricDescriptor[];
	readonly migration?: Migration;
	readonly monitoredResources?: MonitoredResourceDescriptor[];
	readonly monitoring?: Monitoring;
	readonly name: string;
	readonly operations?: Operations;
	readonly producerProjectId?: string;
	readonly projectProperties?: ProjectProperties;
	readonly publishing?: Publishing;
	readonly quota?: Quota;
	readonly resourceContainer?: ResourceContainer;
	readonly resources?: ResourceDescriptor[];
	readonly rpcSecurityPolicy?: RpcSecurityPolicy;
	readonly serviceName: string;
	readonly sharing?: Sharing[];
	readonly slo?: Slo;
	readonly supportedLocation?: SupportedLocation;
	readonly systemParameters?: SystemParameters;
	readonly systemTypes?: Type[];
	readonly title?: string;
	readonly types?: Type[];
	readonly urlMaps?: UrlMap[];
	readonly usage?: Usage;
	readonly visibility?: Visibility;
}
export interface AdminAccessControlConfig {
	readonly allowBreakGlass?: boolean;
	readonly allowBreakGlassAccess?: BreakGlassConfig;
	readonly baselineControls?: string;
	readonly defaultRequirements?: string;
	readonly enforcement?: string;
	readonly ginLoggingFailureBehavior?: string;
	readonly requireMpa?: MultiPartyAuthorizationConfig;
}
export interface AdminPolicy {
	readonly allowBreakGlassAccess?: BreakGlassConfigV1;
	readonly baselineControls?: string;
	readonly defaultRequirements?: string;
	readonly disableImplicitPersonLogging?: boolean;
	readonly emergencyAdmins?: string[];
	readonly enableFailClosedGinLogging?: boolean;
	readonly enforcement?: string;
	readonly policyValidationLevel?: string;
	readonly requireMpa?: MultiPartyAuthorizationConfigV1;
}
export interface AdvancedServiceConfig {
	readonly batch?: BatchConfig;
	readonly chemistCache?: CacheConfig;
	readonly chemistConfig?: ChemistConfig;
	readonly jwtCache?: CacheConfig;
	readonly messageLimitsRules?: MessageLimitsRule[];
	readonly oauthCache?: CacheConfig;
	readonly quota?: QuotaConfig;
	readonly quotaCache?: CacheConfig;
	readonly quotaRules?: ExtendedQuotaRule[];
	readonly renameRules?: RenameMethodRule[];
	readonly translatorConfig?: TranslatorConfig[];
	readonly ubermintConfig?: UbermintConfig;
	readonly usageManagerCache?: CacheConfig;
	readonly usageManagerRules?: UsageManagerRule[];
	readonly webchannelConfig?: WebChannelConfig[];
}
export interface Analytics {
	readonly producerDestinations?: AnalyticsDestination[];
	readonly rules?: AnalyticsRule[];
}
export interface AnalyticsConfig {
	readonly dataTier?: string;
	readonly description?: string;
	readonly destinations?: AnalyticsConfigDestination[];
	readonly retentionAndBackfillPolicy?: RetentionBackfillPolicy;
}
export interface AnalyticsConfigDestination {
	readonly metrics?: string[];
	readonly monitoredResource?: string;
}
export interface AnalyticsDestination {
	readonly metrics?: string[];
	readonly monitoredResource?: string;
}
export interface AnalyticsRule {
	readonly businessIntelligence?: BusinessIntelligenceConfig;
	readonly samplingConfiguration?: AnalyticsSamplingConfiguration;
	readonly selector?: string;
}
export interface AnalyticsSamplingConfiguration {
	readonly enableSampling?: boolean;
	readonly samplingRatio?: number;
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
export interface ApplicationAuthorizationCheckCondition {}
export interface AreaUnderCurveParams {
	readonly aggregationLabels?: string[];
	readonly changeMetric?: string;
	readonly generatedMetric?: string;
	readonly snapshotMetric?: string;
}
export interface AuditConfig {
	readonly auditLogConfigs?: AuditLogConfig[];
	readonly service?: string;
}
export interface Auditing {
	readonly labels?: { [P in string]: string };
	readonly rules?: AuditingRule[];
}
export interface AuditingConfig {
	readonly auditing?: Auditing;
	readonly http?: HttpExtractionRules;
}
export interface AuditingRule {
	readonly directive?: string;
	readonly selector?: string;
}
export interface AuditLogConfig {
	readonly exemptedMembers?: string[];
	readonly ignoreChildExemptions?: boolean;
	readonly logType?: string;
}
export interface Authentication {
	readonly enableMtls?: boolean;
	readonly environment?: string;
	readonly gaiaService?: string;
	readonly peerDelegationMode?: string;
	readonly providers?: AuthProvider[];
	readonly rules?: AuthenticationRule[];
}
export interface AuthenticationConfig {
	readonly additionalUbermintPlatforms?: string[];
	readonly defaultAnonymousMode?: boolean;
	readonly thinmintControl?: string;
}
export interface AuthenticationMethods {
	readonly cloudUbermint?: CloudUberMintConfig;
	readonly ubermint?: UberMintConfig;
	readonly useDefaultMethods?: boolean;
}
export interface AuthenticationPolicy {
	readonly authenticationMethods?: AuthenticationMethods;
	readonly credsPolicy?: Policy;
	readonly defaultAnonymousMode?: boolean;
	readonly impersonationPolicy?: Policy;
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
export interface AuthorizationConfig {
	readonly provider?: string;
}
export interface AuthorizationLoggingOptions {
	readonly permissionType?: string;
}
export interface AuthorizationMethod {
	readonly ccfeAuthorizationAlreadyDone?: any;
	readonly cloudIam?: any;
	readonly custom?: any;
	readonly delegated?: any;
	readonly localIam?: any;
	readonly zanzibar?: any;
}
export interface AuthorizationRule {
	readonly permissions?: string;
	readonly selector?: string;
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
export interface AvailabilityCriteria {}
export interface Backend {
	readonly renameRules?: RenameRule[];
	readonly rules?: BackendRule[];
}
export interface BackendOptions {
	readonly backendResponsiveness?: string;
	readonly healthzString?: string;
	readonly maxConnections?: string;
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
export interface BackendRule {
	readonly address?: string;
	readonly deadline?: number;
	readonly disableAuth?: boolean;
	readonly jwtAudience?: string;
	readonly minDeadline?: number;
	readonly operationDeadline?: number;
	readonly pathTranslation?: string;
	readonly protocol?: string;
	readonly selector?: string;
}
export interface BasicAuthRequirements {
	readonly enableProgrammaticClientToken?: boolean;
	readonly scopeCodes?: string;
}
export interface BatchConfig {
	readonly innerRequestCountLimit?: number;
	readonly outerRequestSizeLimit?: number;
}
export interface Billing {
	readonly areaUnderCurveParams?: AreaUnderCurveParams[];
	readonly billingServiceName?: string;
	readonly consumerDestinations?: BillingDestination[];
	readonly metrics?: string[];
	readonly rules?: BillingStatusRule[];
}
export interface BillingDestination {
	readonly metrics?: string[];
	readonly monitoredResource?: string;
}
export interface BillingStatusRule {
	readonly allowedStatuses?: string[];
	readonly flags?: string;
	readonly selector?: string;
}
export interface Binding {
	readonly bindingId?: string;
	readonly condition?: Expr;
	readonly members?: string[];
	readonly role?: string;
}
export interface BindingCondition {
	readonly applicationAuthorizationCheck?: any;
	readonly description?: string;
	readonly excludeInsecureUsers?: ExcludeInsecureUsersCondition;
	readonly impersonationTarget?: ImpersonationTargetCondition;
	readonly peerSecurityRealm?: PeerSecurityRealmCondition;
	readonly peerUser?: PeerUserCondition;
	readonly primaryPeerUser?: PeerUserCondition;
	readonly userAttribution?: UserAttributionCondition;
	readonly zanzibarAuthorizationCheck?: any;
}
export interface BoqSettings {
	readonly controlPlaneConfig?: string;
}
export interface BreakGlassConfig {
	readonly requireMpa?: any;
}
export interface BreakGlassConfigV1 {
	readonly emergencyAdmins?: string[];
	readonly requireMpa?: BreakGlassMpaConfigV1;
}
export interface BreakGlassMpaConfig {}
export interface BreakGlassMpaConfigV1 {
	readonly reviewers?: string[];
	readonly reviewGuidance?: string;
}
export interface BrowserFirstPartyAuthRequirements {
	readonly allowMissingActiveSession?: boolean;
	readonly ignoreInvalidCredentials?: boolean;
	readonly scopeCodes?: string;
}
export interface BusinessIntelligenceConfig {
	readonly activeDeveloperMethod?: boolean;
}
export interface CacheConfig {
	readonly disabled?: boolean;
	readonly lifetimeSeconds?: number;
	readonly localCacheSizeBytes?: number;
	readonly memcachegRpcTimeoutMs?: number;
	readonly refreshThresholdSeconds?: number;
	readonly strategy?: string;
}
export interface CcfeAuthorizationAlreadyDone {}
export interface Census {
	readonly rules?: CensusRule[];
}
export interface CensusRule {
	readonly logProductCui?: boolean;
	readonly productCui?: string;
	readonly selector?: string;
}
export interface ChemistConfig {
	readonly address?: string;
}
export interface ClientLibrarySettings {
	readonly cppSettings?: CppSettings;
	readonly dotnetSettings?: DotnetSettings;
	readonly goSettings?: GoSettings;
	readonly javaSettings?: JavaSettings;
	readonly launchStage?: string;
	readonly nodeSettings?: NodeSettings;
	readonly phpSettings?: PhpSettings;
	readonly pythonSettings?: PythonSettings;
	readonly restNumericEnums?: boolean;
	readonly rubySettings?: RubySettings;
	readonly version?: string;
}
export interface CloudAuditOptions {
	readonly authorizationLoggingOptions?: AuthorizationLoggingOptions;
	readonly logName?: string;
}
export interface CloudIam {}
export interface CloudUberMintConfig {
	readonly mode: string;
}
export interface Codegen {
	readonly rules?: CodegenRule[];
}
export interface CodegenRule {
	readonly jsonName?: string;
	readonly resourceReference?: boolean;
	readonly selector?: string;
}
export interface CommonLanguageSettings {
	readonly destinations?: string[];
	readonly referenceDocsUri?: string;
}
export interface Condition {
	readonly iam?: string;
	readonly op?: string;
	readonly svc?: string;
	readonly sys?: string;
	readonly values?: string[];
}
export interface Context {
	readonly rules?: ContextRule[];
}
export interface ContextRule {
	readonly allowedRequestExtensions?: string[];
	readonly allowedResponseExtensions?: string[];
	readonly provided?: string[];
	readonly requested?: string[];
	readonly selector?: string;
}
export interface Control {
	readonly environment?: string;
	readonly failureMode?: string;
	readonly methodPolicies?: MethodPolicy[];
	readonly policyCallbacks?: PolicyCallback[];
}
export interface ControlPlaneMigration {
	readonly migrating?: boolean;
}
export interface CounterOptions {
	readonly customFields?: CustomField[];
	readonly field?: string;
	readonly metric?: string;
}
export interface CppSettings {
	readonly common?: CommonLanguageSettings;
}
export interface CredsAssertion {
	readonly deviceTrustLevel?: DeviceTrustLevelAssertion;
	readonly name: string;
	readonly oauthScope?: OauthScopeAssertion;
	readonly osidDomain?: OsidDomainAssertion;
}
export interface CrossProductSharing {
	readonly enableConsentCheck: any;
	readonly serviceTeamGraphProductId: number;
}
export interface CrossProductSharingCondition {
	readonly enableConsentCheck: any;
}
export interface Custom {}
export interface CustomError {
	readonly rules?: CustomErrorRule[];
	readonly types?: string[];
}
export interface CustomErrorRule {
	readonly isErrorType?: boolean;
	readonly selector?: string;
}
export interface CustomField {
	readonly name?: string;
	readonly value?: string;
}
export interface CustomHttpPattern {
	readonly kind?: string;
	readonly path?: string;
}
export interface DataAccessOptions {
	readonly logMode?: string;
}
export interface Date {
	readonly day?: number;
	readonly month?: number;
	readonly year?: number;
}
export interface Delegated {}
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
export interface Destination {
	readonly acl?: ServiceControlAcl;
	readonly labelKeyTransformationName?: string;
	readonly logNames?: string[];
	readonly metricNames?: string[];
	readonly owner?: string;
	readonly type?: string;
}
export interface Devconsole {
	readonly consoleApi?: string;
	readonly exampleUrl?: string;
	readonly learnmoreUrl?: string;
	readonly pricingLink?: string;
	readonly requestQuotaUrl?: string;
}
export interface DeviceTrustLevelAssertion {
	readonly loasOriginTrusted: boolean;
	readonly minimum: string;
}
export interface DisabledAdminAccessControlConfig {
	readonly disableAuditLogging?: boolean;
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
export interface DotnetSettings {
	readonly common?: CommonLanguageSettings;
}
export interface Empty {}
export interface EnableConsentCheck {}
export interface Endpoint {
	readonly aliases?: string[];
	readonly allowCors?: boolean;
	readonly features?: string[];
	readonly launchStage?: string;
	readonly name?: string;
	readonly target?: string;
	readonly urlMap?: string;
}
export interface EndpointPolicy {
	readonly actions?: string[];
	readonly authenticationConfig?: AuthenticationConfig;
	readonly bindings?: RoleBinding[];
	readonly conditions?: EndpointPolicyCondition[];
	readonly dataGovernanceAnnotations?: PrivacyDataGovernanceAttributesAnnotations;
	readonly disableChecks?: string[];
	readonly disableRewrites?: string[];
	readonly enableChecks?: string[];
	readonly enableRewrites?: string[];
	readonly httpHandlers?: string[];
	readonly labels?: string[];
	readonly methodQualifier?: MethodQualifier;
	readonly proxyServiceConfig?: any;
	readonly rpcMethods?: string[];
}
export interface EndpointPolicyCondition {
	readonly crossProductSharing?: CrossProductSharingCondition;
	readonly description?: string;
	readonly peerSecurityRealm?: PeerSecurityRealmCondition;
	readonly peerUser?: PeerUserCondition;
}
export interface EndUserCredsRequirements {
	readonly scopeCodes?: string;
}
export interface Enum {
	readonly enumvalue?: EnumValue[];
	readonly name?: string;
	readonly options?: Option[];
	readonly sourceContext?: SourceContext;
	readonly syntax?: string;
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
export interface EnumValue {
	readonly name?: string;
	readonly number?: number;
	readonly options?: Option[];
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
export interface EsfConfig {
	readonly allowUntrustedRequests?: boolean;
	readonly enablePeerDelegation?: boolean;
	readonly trustedEsfRoles?: string[];
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
export interface ExcludeInsecureUsersCondition {
	readonly prodUsers?: string[];
}
export interface Experimental {
	readonly advanced?: AdvancedServiceConfig;
	readonly authorization?: AuthorizationConfig;
	readonly cargoContainerPrefixes?: string;
	readonly codegen?: Codegen;
	readonly mediation?: MediationConfig;
	readonly provisioning?: Provisioning;
	readonly serviceControl?: ServiceControlConfig;
	readonly serviceManagement?: ServiceManagementConfig;
}
export interface Expr {
	readonly description?: string;
	readonly expression?: string;
	readonly location?: string;
	readonly title?: string;
}
export interface ExtendedQuotaRule {
	readonly enableCache?: boolean;
	readonly quotaCacheLifetimeSeconds?: number;
	readonly selector?: string;
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
export interface Field {
	readonly cardinality?: string;
	readonly defaultValue?: string;
	readonly jsonName?: string;
	readonly kind?: string;
	readonly name?: string;
	readonly number?: number;
	readonly oneofIndex?: number;
	readonly options?: Option[];
	readonly packed?: boolean;
	readonly typeUrl?: string;
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
export interface FieldPolicy {
	readonly auditing?: string;
	readonly childResourceNameExtractor?: string;
	readonly childResourceType?: string;
	readonly cmekKeySelector?: string;
	readonly customOrgPolicyAccessibility?: string;
	readonly isServiceConsumer?: boolean;
	readonly locationSelector?: string;
	readonly metadataPolicies?: MetadataPolicy[];
	readonly monitoredResourceLabelExtractor?: string;
	readonly monitoredResourceType?: string;
	readonly orgPolicies?: OrgPolicy[];
	readonly resourceAccessType?: string;
	readonly resourceLocationSelector?: string;
	readonly resourcePermission?: string;
	readonly resourceType?: string;
	readonly selector?: string;
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
export interface Filtering {
	readonly rules?: FilterRule[];
}
export interface FilterRule {
	readonly selector?: string;
	readonly skipFilters?: string[];
}
export interface GfeRedirectConfig {
	readonly enabledOnRequestFlow?: boolean;
	readonly enabledOnResponseFlow?: boolean;
	readonly enableInnerBatchErrorFallback?: boolean;
	readonly enableProjectOverrides?: boolean;
	readonly errorCodePattern?: string[];
	readonly errorFilters?: ErrorFilter[];
}
export interface GfeTarget {
	readonly backendOptions?: BackendOptions;
	readonly target?: string;
}
export interface GoSettings {
	readonly common?: CommonLanguageSettings;
}
export interface Http {
	readonly fullyDecodeReservedExpansion?: boolean;
	readonly rules?: HttpRule[];
}
export interface HttpExtractionRules {
	readonly resource?: HttpResourceRule[];
}
export interface HttpFieldSelector {
	readonly header?: string;
	readonly param?: string;
}
export interface HttpFrontendOptions {
	readonly allowInternalRedirects?: boolean;
	readonly blockInEmbargoedCountries?: boolean;
	readonly cacheHitLogFallthroughDenom?: number;
	readonly dosService?: string;
	readonly grpcMode?: string;
	readonly qosClass?: string;
	readonly requestSize?: string;
}
export interface HttpResourceRule {
	readonly resourceRegistryType?: string;
	readonly selector?: HttpFieldSelector;
}
export interface HttpRule {
	readonly additionalBindings?: HttpRule[];
	readonly allowHalfDuplex?: boolean;
	readonly authorizations?: AuthorizationRule[];
	readonly body?: string;
	readonly custom?: CustomHttpPattern;
	readonly delete?: string;
	readonly get?: string;
	readonly mediaDownload?: MediaDownload;
	readonly mediaUpload?: MediaUpload;
	readonly patch?: string;
	readonly post?: string;
	readonly put?: string;
	readonly responseBody?: string;
	readonly restCollection?: string;
	readonly restMethodName?: string;
	readonly selector?: string;
}
export interface Iam {
	readonly environment?: string;
	readonly internal?: IamServiceConfigInternal;
	readonly launchStage?: string;
	readonly reader?: string;
	readonly resources?: IamResourceDescriptor[];
	readonly roles?: IamRole[];
	readonly writer?: string;
}
export interface IamPermission {
	readonly basicRole?: string;
	readonly description?: string;
	readonly displayName?: string;
	readonly internal?: IamPermissionInternal;
	readonly launchStage?: string;
	readonly name?: string;
	readonly parentOnly?: boolean;
	readonly scope?: string;
	readonly type?: string;
}
export interface IamPermissionInternal {
	readonly calOnboardingTicket?: string;
	readonly customRoleSupportLevelOverride?: string;
	readonly usedForRpcSecurityPolicy?: boolean;
}
export interface IamResourceDescriptor {
	readonly internal?: IamResourceDescriptorInternal;
	readonly launchStage?: string;
	readonly memberTypeRestriction?: string;
	readonly permissions?: IamPermission[];
	readonly resourceNameMappings?: IamResourceNameMapping[];
	readonly type?: string;
}
export interface IamResourceDescriptorInternal {
	readonly disableConvertProjectIdOrNumber?: boolean;
	readonly nameForResource?: string;
	readonly singleParentOverride?: boolean;
}
export interface IamResourceNameMapping {
	readonly policyLocationExtractor?: string;
	readonly policyNameExtractor?: string;
	readonly resourceNamePattern?: string;
}
export interface IamRole {
	readonly description: string;
	readonly displayName: string;
	readonly launchStage?: string;
	readonly name?: string;
	readonly permissions?: string[];
	readonly roles?: string[];
}
export interface IamServiceConfigInternal {
	readonly roleGroup?: string;
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
export interface ImpersonationTargetCondition {
	readonly allNormalUsers?: any;
	readonly allProdUsers?: any;
}
export interface IndexedResource {
	readonly permissions: string[];
	readonly resourceType: string;
}
export interface JavaSettings {
	readonly common?: CommonLanguageSettings;
	readonly libraryPackage?: string;
	readonly serviceClassNames?: { [P in string]: string };
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
export interface LatencyCriteria {
	readonly latencyExperience?: string;
	readonly threshold?: string;
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
export interface LegacyGfeService {
	readonly service?: string;
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
export interface LocalIam {}
export interface Location {
	readonly leadingComments?: string;
	readonly leadingDetachedComments?: string[];
	readonly path?: number[];
	readonly span?: number[];
	readonly trailingComments?: string;
}
export interface LocationGroup {
	readonly groupId?: string;
	readonly locations?: string;
}
export interface LocationPolicy {
	readonly locationProperties?: LocationProperties[];
}
export interface LocationProperties {
	readonly displayName?: string;
	readonly forTesting?: boolean;
	readonly labels?: { [P in string]: string };
	readonly locationId?: string;
}
export interface LogConfig {
	readonly cloudAudit?: CloudAuditOptions;
	readonly counter?: CounterOptions;
	readonly dataAccess?: DataAccessOptions;
}
export interface LogDescriptor {
	readonly description?: string;
	readonly displayName?: string;
	readonly labels?: LabelDescriptor[];
	readonly name?: string;
}
export interface Logging {
	readonly consumerDestinations?: LoggingDestination[];
	readonly producerDestinations?: LoggingDestination[];
}
export interface LoggingDestination {
	readonly logs?: string[];
	readonly monitoredResource?: string;
}
export interface LongRunning {
	readonly initialPollDelay?: string;
	readonly maxPollDelay?: string;
	readonly pollDelayMultiplier?: number;
	readonly totalPollTimeout?: string;
}
export interface MediaDownload {
	readonly completeNotification?: boolean;
	readonly downloadService?: string;
	readonly dropzone?: string;
	readonly enabled?: boolean;
	readonly maxDirectDownloadSize?: string;
	readonly servePartialContentOnFullRangeRequest?: boolean;
	readonly useDirectDownload?: boolean;
}
export interface MediationConfig {
	readonly mediationServerStartupDelay?: number;
	readonly rules?: MediationRule[];
}
export interface MediationMethodConfig {
	readonly enabled?: boolean;
	readonly messageTypeUrl?: string;
	readonly providedContexts?: string[];
	readonly requestedContexts?: string[];
}
export interface MediationRule {
	readonly request?: MediationMethodConfig;
	readonly response?: MediationMethodConfig;
	readonly selector?: string;
}
export interface MediaUpload {
	readonly completeNotification?: boolean;
	readonly dropzone?: string;
	readonly enabled?: boolean;
	readonly maxSize?: string;
	readonly mimeTypes?: string[];
	readonly progressNotification?: boolean;
	readonly startNotification?: boolean;
	readonly supportResumable?: boolean;
	readonly uploadService?: string;
}
export interface Members {
	readonly all?: any;
	readonly allExceptAnonymous?: any;
	readonly allNormalUsers?: any;
	readonly includes?: string[];
	readonly localProdGroups?: string[];
	readonly prodAuthoritySelectors?: string[];
	readonly prodGroups?: string[];
	readonly prodUsers?: string[];
	readonly self?: any;
}
export interface MessageLimitsRule {
	readonly requestLimit?: number;
	readonly selector?: string;
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
export interface MetadataPolicy {
	readonly type?: string;
	readonly valueExtractors?: string[];
	readonly valueSelector?: string;
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
export interface MethodPolicy {
	readonly action?: string;
	readonly activeDeveloperMethod?: boolean;
	readonly auditing?: string;
	readonly authorization?: string;
	readonly flags?: string;
	readonly metadata?: { [P in string]: string };
	readonly requestPolicies?: FieldPolicy[];
	readonly responsePolicies?: FieldPolicy[];
	readonly selector?: string;
}
export interface MethodQualifier {
	readonly actions?: string[];
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
export interface MethodSettings {
	readonly longRunning?: LongRunning;
	readonly selector?: string;
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
export interface MpaReviewerConfig {
	readonly preferredReviewers?: string[];
	readonly preferredReviewersFromRotations?: string[];
}
export interface MultiPartyAuthorizationConfig {
	readonly approvalCacheDuration?: string;
	readonly reviewGuidance?: string;
}
export interface MultiPartyAuthorizationConfigV1 {
	readonly approvalCacheDuration?: string;
	readonly preferredReviewers?: string[];
	readonly preferredReviewersFromRotations?: string[];
	readonly reviewers?: string[];
	readonly reviewGuidance?: string;
}
export interface NamePart {
	readonly isExtension?: boolean;
	readonly namePart?: string;
}
export interface NodeSettings {
	readonly common?: CommonLanguageSettings;
}
export interface OAuthRequirements {
	readonly allowAnyScope?: boolean;
	readonly canonicalScopes?: string;
}
export interface OauthScopeAssertion {
	readonly allowNonOauth?: boolean;
	readonly allowScope?: number[];
}
export interface OneofDescriptorProto {
	readonly name?: string;
	readonly options?: OneofOptions;
}
export interface OneofOptions {
	readonly uninterpretedOption?: UninterpretedOption[];
}
export interface OperationAvailabilityCriteria {}
export interface OperationLatencyCriteria {
	readonly latencyExperience?: string;
	readonly threshold?: string;
}
export interface OperationRule {
	readonly lroMetadataType?: string;
	readonly lroResponseType?: string;
	readonly selector?: string;
}
export interface Operations {
	readonly rules?: OperationRule[];
}
export interface Option {
	readonly name?: string;
	readonly value?: { [P in string]: any };
}
export interface OrgPolicy {
	readonly constraint?: string;
	readonly enabled?: string;
	readonly valueExtractors?: string[];
	readonly valueSelector?: string;
}
export interface OsidDomainAssertion {
	readonly allowDomain?: string[];
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
export interface PeerSecurityRealmCondition {
	readonly alwaysAllowPersons?: any;
	readonly guardianRealms?: any;
	readonly includes?: string[];
	readonly localCampus?: any;
	readonly localCloudRegion?: any;
	readonly localMetro?: any;
	readonly localProdRegion?: any;
	readonly realms?: string[];
}
export interface PeerUserCondition {
	readonly includes?: string[];
	readonly localProdGroups?: string[];
	readonly prodGroups?: string[];
	readonly prodUsers?: string[];
	readonly self?: any;
}
export interface PhpSettings {
	readonly common?: CommonLanguageSettings;
}
export interface Policy {
	readonly auditConfigs?: AuditConfig[];
	readonly bindings?: Binding[];
	readonly etag?: string;
	readonly rules?: Rule[];
	readonly version?: number;
}
export interface PolicyCallback {
	readonly locationExtractor?: string;
	readonly policyCallbackAddress?: string;
	readonly policyCallbackBackendAddress?: string;
	readonly resourcePatterns?: string[];
	readonly resourceType?: string;
	readonly selector?: string;
}
export interface PolicyRequirement {
	readonly axtLevel?: string;
}
export interface PrivacyDataGovernanceAttributesAdsData {
	readonly anonymizationBugId?: string;
	readonly dataCategory?: string;
	readonly dataOrigin?: string[];
	readonly dataType?: string[];
	readonly environment?: string;
	readonly eventualAction?: string;
	readonly identifier?: string;
	readonly survey402?: PrivacyDataGovernanceAttributesAdsDataSurvey402;
	readonly usagePurpose?: string;
	readonly userContract?: string;
	readonly userType?: string;
}
export interface PrivacyDataGovernanceAttributesAdsDataSurvey402 {
	readonly surveyDataSource?: string;
	readonly surveyDataType?: string;
}
export interface PrivacyDataGovernanceAttributesAdsProcess {
	readonly dataReceivedFromOutsideGoogle?: PrivacyDataGovernanceAttributesAdsProcessExternallyExchangedData;
	readonly dataSentOutsideGoogle?: PrivacyDataGovernanceAttributesAdsProcessExternallyExchangedData;
	readonly intendedJobPurposes?: string[];
	readonly providingPa?: string[];
}
export interface PrivacyDataGovernanceAttributesAdsProcessExternallyExchangedData {
	readonly dataGroupings?: string[];
	readonly dataProperties?: PrivacyDataGovernanceAttributesClassificationCategory;
	readonly entityDataType?: string[];
	readonly externalDataExchanger?: string[];
}
export interface PrivacyDataGovernanceAttributesAdsStorage {
	readonly customerControl?: string;
	readonly retentionControl?: string;
	readonly ttlControl?: string;
	readonly userControl?: string;
}
export interface PrivacyDataGovernanceAttributesAllowedLocations {
	readonly locations?: PrivacyDataGovernanceAttributesLocation[];
	readonly semanticContext?: string;
	readonly source?: string;
}
export interface PrivacyDataGovernanceAttributesAnnotations {
	readonly annotationId?: string;
	readonly custom?: PrivacyDataGovernanceAttributesAnnotationsCustom;
	readonly data?: PrivacyDataGovernanceAttributesAnnotationsData;
	readonly process?: PrivacyDataGovernanceAttributesAnnotationsProcess;
	readonly rpc?: PrivacyDataGovernanceAttributesAnnotationsRpc;
	readonly storage?: PrivacyDataGovernanceAttributesAnnotationsStorage;
	readonly version?: string;
}
export interface PrivacyDataGovernanceAttributesAnnotationsCustom {
	readonly productionImpact?: PrivacyDataGovernanceAttributesProductionImpact;
	readonly productionInfrastructure?: PrivacyDataGovernanceAttributesProductionInfrastructure;
}
export interface PrivacyDataGovernanceAttributesAnnotationsData {
	readonly allowedLocations?: PrivacyDataGovernanceAttributesAllowedLocations[];
	readonly anonymizationBugId?: string;
	readonly category?: PrivacyDataGovernanceAttributesClassificationCategory;
	readonly confidentiality?: string;
	readonly custom?: PrivacyDataGovernanceAttributesAnnotationsDataCustom;
	readonly datasetTags?: string[];
	readonly identifiability?: string;
	readonly identifiers?: string[];
	readonly productAssociation?: PrivacyDataGovernanceAttributesDataProductAssociation;
	readonly pseudonymization?: string;
	readonly semanticContext?: string;
	readonly source?: string[];
}
export interface PrivacyDataGovernanceAttributesAnnotationsDataCustom {
	readonly ads?: PrivacyDataGovernanceAttributesAdsData;
	readonly apps?: PrivacyDataGovernanceAttributesAppsData;
	readonly assurant?: PrivacyDataGovernanceAttributesAssurantData;
	readonly audio?: PrivacyDataGovernanceAttributesAudioData;
	readonly encryptionKeyProperties?: PrivacyDataGovernanceAttributesEncryptionKeyProperties;
	readonly essentialOnlyMode?: PrivacyDataGovernanceAttributesEssentialOnlyModeData;
	readonly experimental?: PrivacyDataGovernanceAttributesExperimentalData;
	readonly faceAuthentication?: PrivacyDataGovernanceAttributesFaceAuthenticationData;
	readonly geo?: PrivacyDataGovernanceAttributesGeoData;
	readonly medical?: PrivacyDataGovernanceAttributesMedicalData;
	readonly mlModel?: PrivacyDataGovernanceAttributesMlModelData;
	readonly payments?: PrivacyDataGovernanceAttributesPaymentsData;
	readonly photos?: PrivacyDataGovernanceAttributesPhotosData;
	readonly residency?: PrivacyDataGovernanceAttributesResidencyData[];
	readonly search?: PrivacyDataGovernanceAttributesSearchDataSpecs;
}
export interface PrivacyDataGovernanceAttributesAnnotationsProcess {
	readonly custom?: PrivacyDataGovernanceAttributesAnnotationsProcessCustom;
	readonly geoLocation?: PrivacyDataGovernanceAttributesAnnotationsProcessGeoLocation;
	readonly processingPurpose?: PrivacyDataGovernanceAttributesProcessingPurpose[];
	readonly serviceType?: string;
}
export interface PrivacyDataGovernanceAttributesAnnotationsProcessCustom {
	readonly ads?: PrivacyDataGovernanceAttributesAdsProcess;
	readonly audio?: PrivacyDataGovernanceAttributesAudioProcess;
	readonly essentialOnlyMode?: PrivacyDataGovernanceAttributesEssentialOnlyModeProcess;
	readonly residency?: PrivacyDataGovernanceAttributesResidencyProcess;
}
export interface PrivacyDataGovernanceAttributesAnnotationsProcessGeoLocation {
	readonly coarseningTransformation?: string;
	readonly locationType?: string;
}
export interface PrivacyDataGovernanceAttributesAnnotationsRpc {
	readonly primaryForPortability?: PrivacyDataGovernanceAttributesPrimaryForPortability;
	readonly reads?: PrivacyDataGovernanceAttributesAnnotationsData;
	readonly returns?: PrivacyDataGovernanceAttributesAnnotationsData;
	readonly serviceType?: string;
	readonly writes?: PrivacyDataGovernanceAttributesAnnotationsData;
}
export interface PrivacyDataGovernanceAttributesAnnotationsStorage {
	readonly custom?: PrivacyDataGovernanceAttributesAnnotationsStorageCustom;
	readonly encryption?: PrivacyDataGovernanceAttributesEncryptionProperties;
	readonly primaryForPortability?: PrivacyDataGovernanceAttributesPrimaryForPortability;
	readonly retention?: PrivacyDataGovernanceAttributesAnnotationsStorageRetention;
}
export interface PrivacyDataGovernanceAttributesAnnotationsStorageCustom {
	readonly ads?: PrivacyDataGovernanceAttributesAdsStorage;
	readonly residency?: PrivacyDataGovernanceAttributesResidencyStorage;
	readonly search?: PrivacyDataGovernanceAttributesSearchStorage;
}
export interface PrivacyDataGovernanceAttributesAnnotationsStorageRetention {
	readonly exemptReason?: string;
	readonly planId?: string;
	readonly wipeoutProcessor?: string[];
}
export interface PrivacyDataGovernanceAttributesAppsCommon {
	readonly content?: string[];
	readonly metadata?: string[];
	readonly resourceLevelScope?: string[];
	readonly workspaceClass?: PrivacyDataGovernanceAttributesAppsCommonWorkspaceClass[];
}
export interface PrivacyDataGovernanceAttributesAppsCommonWorkspaceClass {
	readonly dataClass?: string;
}
export interface PrivacyDataGovernanceAttributesAppsData {
	readonly data?: PrivacyDataGovernanceAttributesAppsDataType;
	readonly product?: string[];
}
export interface PrivacyDataGovernanceAttributesAppsDataType {
	readonly appsCommon?: PrivacyDataGovernanceAttributesAppsCommon;
	readonly gmail?: PrivacyDataGovernanceAttributesGmail;
}
export interface PrivacyDataGovernanceAttributesAssurantData {
	readonly customerTenancy?: PrivacyDataGovernanceAttributesAssurantDataCustomerTenancy[];
}
export interface PrivacyDataGovernanceAttributesAssurantDataCustomerTenancy {
	readonly context?: string;
	readonly encryption?: PrivacyDataGovernanceAttributesEncryptionProperties;
	readonly product?: string;
}
export interface PrivacyDataGovernanceAttributesAudioData {
	readonly audioCategory?: PrivacyDataGovernanceAttributesAudioDataAudioCategory;
	readonly identifiesSensitivePersonalCharacteristics?: string;
	readonly isCopy?: string;
}
export interface PrivacyDataGovernanceAttributesAudioDataAudioCategory {
	readonly audioAcquired?: string;
	readonly enterpriseAudio?: PrivacyDataGovernanceAttributesAudioDataAudioCategoryEnterpriseAudio;
	readonly publicAudio?: string;
	readonly syntheticAudio?: PrivacyDataGovernanceAttributesAudioDataAudioCategorySyntheticAudio;
	readonly userAudio?: PrivacyDataGovernanceAttributesAudioDataAudioCategoryUserAudio;
}
export interface PrivacyDataGovernanceAttributesAudioDataAudioCategoryEnterpriseAudio {
	readonly donated?: string;
	readonly nonDonated?: string;
}
export interface PrivacyDataGovernanceAttributesAudioDataAudioCategorySyntheticAudio {
	readonly limitedUse?: string;
	readonly preApproved?: string;
}
export interface PrivacyDataGovernanceAttributesAudioDataAudioCategoryUserAudio {
	readonly privateDonated?: string;
	readonly privateNonDonated?: string;
	readonly publicAudio?: string;
}
export interface PrivacyDataGovernanceAttributesAudioProcess {
	readonly processingPurpose?: string[];
}
export interface PrivacyDataGovernanceAttributesClassificationCategory {
	readonly audioData?: string;
	readonly biometric?: string;
	readonly childrenData?: string;
	readonly childrenProduct?: string;
	readonly consumerHealthAndFitness?: string;
	readonly employee?: string;
	readonly financial?: string;
	readonly geoLocation?: PrivacyDataGovernanceAttributesClassificationCategoryGeoLocation;
	readonly hasXfood?: string;
	readonly health?: string;
	readonly hipaa?: string;
	readonly location?: string;
	readonly paymentInstrument?: string;
	readonly publicUserData?: string[];
}
export interface PrivacyDataGovernanceAttributesClassificationCategoryGeoLocation {
	readonly coarse?: string;
	readonly locationType?: string;
	readonly traces?: string;
}
export interface PrivacyDataGovernanceAttributesDataProductAssociation {
	readonly anyProduct?: any;
	readonly products?: PrivacyDataGovernanceAttributesDataProductAssociationProducts;
}
export interface PrivacyDataGovernanceAttributesDataProductAssociationanyProduct {}
export interface PrivacyDataGovernanceAttributesDataProductAssociationProducts {
	readonly productId?: number[];
}
export interface PrivacyDataGovernanceAttributesEncryptionKeyProperties {
	readonly protectedData?: PrivacyDataGovernanceAttributesEncryptionKeyPropertiesProtectedData;
}
export interface PrivacyDataGovernanceAttributesEncryptionKeyPropertiesProtectedData {
	readonly semanticContext?: string;
	readonly source?: string[];
}
export interface PrivacyDataGovernanceAttributesEncryptionProperties {
	readonly status?: string;
}
export interface PrivacyDataGovernanceAttributesEssentialOnlyModeData {
	readonly usagePurposes?: string[];
}
export interface PrivacyDataGovernanceAttributesEssentialOnlyModeProcess {
	readonly usagePurposes?: string[];
}
export interface PrivacyDataGovernanceAttributesExperimentalData {
	readonly dataCopy?: string;
	readonly datasetTag?: string;
}
export interface PrivacyDataGovernanceAttributesFaceAuthenticationData {
	readonly faceData?: string;
	readonly faceDerivedData?: string;
}
export interface PrivacyDataGovernanceAttributesGeoData {
	readonly dataCategory?: PrivacyDataGovernanceAttributesGeoDataDataCategory;
}
export interface PrivacyDataGovernanceAttributesGeoDataDataCategory {
	readonly userQuery?: string;
}
export interface PrivacyDataGovernanceAttributesGmail {
	readonly content?: string[];
	readonly metadata?: string[];
}
export interface PrivacyDataGovernanceAttributesLocation {
	readonly cloudRegion?: string;
	readonly cloudZone?: string;
	readonly cluster?: string;
	readonly iso3166Region?: string;
}
export interface PrivacyDataGovernanceAttributesMedicalData {
	readonly sandbox?: PrivacyDataGovernanceAttributesMedicalSandbox;
}
export interface PrivacyDataGovernanceAttributesMedicalSandbox {
	readonly codename?: string;
	readonly dataType?: string;
	readonly prefix?: string;
	readonly riskLevel?: string;
	readonly sensitivityLevel?: string;
}
export interface PrivacyDataGovernanceAttributesMlModelData {
	readonly donated?: string;
	readonly modelAnonymization?: string;
	readonly modelArchitectures?: string[];
	readonly modelDeployment?: string;
	readonly modelPersonalization?: string;
	readonly study?: string;
	readonly synthesis?: string;
}
export interface PrivacyDataGovernanceAttributesPaymentsData {
	readonly dataType?: string[];
	readonly environment?: string;
}
export interface PrivacyDataGovernanceAttributesPhotosData {
	readonly benchmarks?: PrivacyDataGovernanceAttributesPhotosDataBenchmarks;
	readonly dataContents?: PrivacyDataGovernanceAttributesPhotosDataDataContents;
	readonly mediaType?: string;
	readonly mediaTypes?: string[];
}
export interface PrivacyDataGovernanceAttributesPhotosDataBenchmarks {
	readonly benchmarks?: string;
	readonly donated?: string;
}
export interface PrivacyDataGovernanceAttributesPhotosDataDataContents {
	readonly derivedResourceData?: string;
	readonly faceContents?: PrivacyDataGovernanceAttributesPhotosDataDataContentsFaceRelatedContents;
	readonly locationContents?: PrivacyDataGovernanceAttributesPhotosDataDataContentsLocationRelatedContents;
	readonly sharingOrOwnershipState?: string;
}
export interface PrivacyDataGovernanceAttributesPhotosDataDataContentsFaceRelatedContents {
	readonly faceLandmark?: string;
	readonly faceRelated?: string;
	readonly faceTemplate?: string;
	readonly furtherDerivedFields?: string;
}
export interface PrivacyDataGovernanceAttributesPhotosDataDataContentsLocationRelatedContents {
	readonly mediaLocation?: string;
	readonly mediaLocationCoarse?: string;
}
export interface PrivacyDataGovernanceAttributesPrimaryForPortability {
	readonly isPrimaryForTgId?: { [P in string]: string };
}
export interface PrivacyDataGovernanceAttributesProcessingPurpose {
	readonly adsProcessingPurpose?: string[];
	readonly crossProductProcessing?: string;
	readonly purpose?: string;
}
export interface PrivacyDataGovernanceAttributesProductionImpact {
	readonly bypassAccessControls?: string;
	readonly bypassLogging?: string;
	readonly bypassProductionControls?: string;
	readonly changeProductionEnvironment?: string;
	readonly impactedTeamProductId?: string[];
	readonly other?: boolean;
	readonly tamperPrimaryData?: string;
	readonly unconstrainedAccess?: string;
}
export interface PrivacyDataGovernanceAttributesProductionInfrastructure {
	readonly blastRadiusContained?: boolean;
	readonly environment?: string;
	readonly grantsAccessToMpaProtectedEndpointOnly?: boolean;
	readonly grantsInnocuousWriteAccessOnly?: boolean;
	readonly grantsReadAccessOnly?: boolean;
	readonly impactedTeamProductId?: string[];
	readonly reason?: PrivacyDataGovernanceAttributesProductionImpact;
}
export interface PrivacyDataGovernanceAttributesResidencyData {
	readonly contentSubclassification?: string;
	readonly intendedDataLocations?: string[];
	readonly lifecycleState?: string;
	readonly semanticContext?: string;
}
export interface PrivacyDataGovernanceAttributesResidencyProcess {
	readonly dataLocationsThatCanBeProcessed?: PrivacyDataGovernanceAttributesResidencyResidencyPolicy[];
}
export interface PrivacyDataGovernanceAttributesResidencyResidencyPolicy {
	readonly drData?: PrivacyDataGovernanceAttributesResidencyResidencyPolicyResidencyData;
	readonly intendedDataLocation?: PrivacyDataGovernanceAttributesLocation[];
}
export interface PrivacyDataGovernanceAttributesResidencyResidencyPolicyResidencyData {
	readonly contentSubclassification?: string;
	readonly lifecycleState?: string;
	readonly semanticContext?: string;
	readonly source?: string;
}
export interface PrivacyDataGovernanceAttributesResidencyStorage {
	readonly dataLocationsThatCanBeStored?: PrivacyDataGovernanceAttributesResidencyResidencyPolicy[];
}
export interface PrivacyDataGovernanceAttributesSearchDataSpecs {
	readonly assistantRequestAcceptStatus?: string[];
	readonly dataCategory?: PrivacyDataGovernanceAttributesSearchDataSpecsDataCategory;
	readonly dataSources?: string[];
	readonly hasFinalIntentHealthFitness?: string;
	readonly identifierTypes?: string[];
	readonly productSources?: string[];
	readonly transformationCategories?: string[];
	readonly usagePurposes?: string[];
}
export interface PrivacyDataGovernanceAttributesSearchDataSpecsDataCategory {
	readonly userQuery?: string;
}
export interface PrivacyDataGovernanceAttributesSearchStorage {
	readonly useControlMethods?: string[];
}
export interface ProjectProperties {
	readonly properties?: Property[];
}
export interface Property {
	readonly description?: string;
	readonly name?: string;
	readonly type?: string;
}
export interface Provisioning {
	readonly provider?: string;
	readonly settings?: { [P in string]: any };
}
export interface ProxyServiceConfig {}
export interface Publishing {
	readonly apiShortName?: string;
	readonly bugAssigneeEmail?: string;
	readonly codeownerGithubTeams?: string[];
	readonly docTagPrefix?: string;
	readonly documentationUri?: string;
	readonly githubLabel?: string;
	readonly librarySettings?: ClientLibrarySettings[];
	readonly methodSettings?: MethodSettings[];
	readonly newIssueUri?: string;
	readonly organization?: string;
	readonly publishingDelay?: string;
}
export interface PythonSettings {
	readonly common?: CommonLanguageSettings;
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
export interface QuotaConfig {
	readonly customEnforcementMetrics?: string[];
	readonly forceRegionalizedEnforcementMetrics?: string[];
	readonly ignoreProjectDefaultMetrics?: string[];
	readonly maxCreditPercentages?: { [P in string]: number };
	readonly orgQuotaMetrics?: string[];
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
export interface RenameMethodRule {
	readonly renameTo?: string;
	readonly selector?: string;
}
export interface RenameRule {
	readonly renameTo?: string;
	readonly selector?: string;
}
export interface ReservedRange {
	readonly end?: number;
	readonly start?: number;
}
export interface ResourceContainer {
	readonly rules?: ResourceContainerRule[];
}
export interface ResourceContainerRule {
	readonly selector?: string;
	readonly type?: string;
}
export interface ResourceDescriptor {
	readonly history?: string;
	readonly nameDescriptor?: ResourceNameDescriptor[];
	readonly nameField?: string;
	readonly pattern?: string[];
	readonly plural?: string;
	readonly singular?: string;
	readonly style?: string[];
	readonly type?: string;
}
export interface ResourceNameDescriptor {
	readonly locationExtractor?: string;
	readonly parentNameExtractor?: string;
	readonly parentType?: string;
	readonly pattern?: string;
}
export interface RetentionBackfillPolicy {
	readonly fromDate?: Date;
	readonly mostRecentDays?: number;
	readonly reprocessingStrategy?: string;
	readonly reprocessingVersion?: number;
}
export interface RoleBinding {
	readonly adminAccessControl?: AdminAccessControlConfig;
	readonly conditions?: BindingCondition[];
	readonly description?: string;
	readonly disableAdminAccessControl?: DisabledAdminAccessControlConfig;
	readonly members: Members;
	readonly reviewerConfig?: MpaReviewerConfig;
	readonly role: string;
}
export interface RpcSecurityPolicy {
	readonly audit?: AuditingConfig;
	readonly disableChecks?: string[];
	readonly disableRewrites?: string[];
	readonly enableChecks?: string[];
	readonly enableLabelEnforcement?: boolean;
	readonly enableRewrites?: string[];
	readonly endpointPolicies?: EndpointPolicy[];
	readonly legacyAllowLabelMappingsWithoutLabelEnforcement?: boolean;
	readonly mapping?: RpcSecurityPolicyMapping[];
	readonly methodPolicies?: MethodPolicy[];
	readonly policyRequirement?: PolicyRequirement;
	readonly rpcServices?: RpcService[];
	readonly systemAuthorizationPolicy?: Policy;
	readonly trustEsfAuthentication?: boolean;
}
export interface RpcSecurityPolicyMapping {
	readonly action?: string[];
	readonly admin?: AdminPolicy;
	readonly authenticationPolicy: AuthenticationPolicy;
	readonly authorizationMethod?: AuthorizationMethod[];
	readonly authorizationMode?: string;
	readonly credsAssertion?: CredsAssertion[];
	readonly crossProductSharing?: CrossProductSharing;
	readonly crossProductSharingDryRun?: CrossProductSharing;
	readonly dataGovernanceAnnotations?: PrivacyDataGovernanceAttributesAnnotations;
	readonly disableChecks?: string[];
	readonly disableRewrites?: string[];
	readonly enableChecks?: string[];
	readonly enableRewrites?: string[];
	readonly esfConfig?: EsfConfig;
	readonly httpPath?: string[];
	readonly label?: string[];
	readonly methodQualifier?: MethodQualifier;
	readonly permissionToCheck?: string;
	readonly rpcMethod?: string[];
}
export interface RpcService {
	readonly name?: string;
	readonly renamedAs?: string;
}
export interface RubySettings {
	readonly common?: CommonLanguageSettings;
}
export interface Rule {
	readonly action: string;
	readonly conditions?: Condition[];
	readonly description?: string;
	readonly in?: string[];
	readonly logConfig?: LogConfig[];
	readonly notIn?: string[];
	readonly permissions?: string[];
}
export interface Service {
	readonly analytics?: Analytics;
	readonly apis?: Api[];
	readonly auditing?: Auditing;
	readonly authentication?: Authentication;
	readonly backend?: Backend;
	readonly billing?: Billing;
	readonly census?: Census;
	readonly configVersion?: number;
	readonly context?: Context;
	readonly control?: Control;
	readonly customError?: CustomError;
	readonly derivedData?: { [P in string]: any };
	readonly discovery?: Discovery;
	readonly documentation?: Documentation;
	readonly endpoints?: Endpoint[];
	readonly enums?: Enum[];
	readonly experimental?: Experimental;
	readonly features?: string[];
	readonly filtering?: Filtering;
	readonly http?: Http;
	readonly iam?: Iam;
	readonly id?: string;
	readonly indexedResources?: IndexedResource;
	readonly labels?: LabelDescriptor[];
	readonly legacy?: Legacy;
	readonly logging?: Logging;
	readonly logs?: LogDescriptor[];
	readonly metrics?: MetricDescriptor[];
	readonly migration?: Migration;
	readonly monitoredResources?: MonitoredResourceDescriptor[];
	readonly monitoring?: Monitoring;
	readonly name?: string;
	readonly operations?: Operations;
	readonly producerProjectId?: string;
	readonly projectProperties?: ProjectProperties;
	readonly publishing?: Publishing;
	readonly quota?: Quota;
	readonly resourceContainer?: ResourceContainer;
	readonly resources?: ResourceDescriptor[];
	readonly rpcSecurityPolicy?: RpcSecurityPolicy;
	readonly sharing?: Sharing[];
	readonly slo?: Slo;
	readonly sourceInfo?: SourceInfo;
	readonly supportedLocation?: SupportedLocation;
	readonly systemParameters?: SystemParameters;
	readonly systemTypes?: Type[];
	readonly title?: string;
	readonly types?: Type[];
	readonly urlMaps?: UrlMap[];
	readonly usage?: Usage;
	readonly visibility?: Visibility;
}
export interface ServiceControlAcl {
	readonly labelKey?: string;
	readonly model?: string;
}
export interface ServiceControlConfig {
	readonly analytics?: AnalyticsConfig;
	readonly destinations?: Destination[];
}
export interface ServiceDescriptorProto {
	readonly method?: MethodDescriptorProto[];
	readonly name?: string;
	readonly options?: ServiceOptions;
	readonly stream?: StreamDescriptorProto[];
}
export interface ServiceIdentity {
	readonly description?: string;
	readonly displayName?: string;
	readonly serviceAccountParent?: string;
}
export interface ServiceManagementConfig {
	readonly buildMode?: string;
	readonly configDestination?: string;
	readonly deploymentMode?: string;
	readonly includeLegacyComponents?: boolean;
	readonly prodServiceName?: string;
	readonly universeConfig?: UniverseConfig;
}
export interface ServiceOptions {
	readonly ccDefaultInvocableApi?: boolean;
	readonly deprecated?: boolean;
	readonly failureDetectionDelay?: number;
	readonly multicastStub?: boolean;
	readonly uninterpretedOption?: UninterpretedOption[];
}
export interface Sharing {
	readonly iamPermissions?: string[];
	readonly iamRoles?: string[];
	readonly resourceTypes?: string[];
	readonly targetServices?: string[];
}
export interface Slo {
	readonly calendarPeriod?: string;
	readonly metadata?: SloRepoMetadata;
	readonly objectives?: SloObjective[];
	readonly reportResourceLocation?: boolean;
	readonly rollingPeriod?: string;
	readonly rules?: SloRule[];
}
export interface SloObjective {
	readonly availability?: any;
	readonly goal?: number;
	readonly latency?: LatencyCriteria;
	readonly locations?: string;
	readonly name?: string;
	readonly operationAvailability?: any;
	readonly operationLatency?: OperationLatencyCriteria;
}
export interface SloRepoMetadata {
	readonly approvers?: string[];
	readonly approveTime?: string;
	readonly emails?: string[];
	readonly enablePerConsumerSli?: boolean;
	readonly enableSlomatic?: boolean;
	readonly learnmoreUrl?: string;
	readonly owningGroup?: string;
	readonly taxonomyId?: string;
	readonly teams?: string[];
}
export interface SloRule {
	readonly name?: string;
	readonly objectives?: string[];
	readonly selector?: string;
}
export interface SourceCodeInfo {
	readonly location?: Location[];
}
export interface SourceContext {
	readonly fileName?: string;
}
export interface SourceInfo {
	readonly sourceFiles?: Array<{ [P in string]: any }>;
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
export interface SupportedLocation {
	readonly groups?: LocationGroup[];
	readonly locationId?: string;
	readonly locationPolicyOverride?: LocationPolicy;
	readonly regions?: string;
	readonly zones?: string;
}
export interface SystemParameter {
	readonly httpHeader?: string;
	readonly name?: string;
	readonly urlQueryParameter?: string;
}
export interface SystemParameterRule {
	readonly parameters?: SystemParameter[];
	readonly selector?: string;
}
export interface SystemParameters {
	readonly rules?: SystemParameterRule[];
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
export interface TranslatorConfig {
	readonly addTrailingZerosForTimestampAndDuration?: boolean;
	readonly dropEmptyFields?: boolean;
	readonly jsonTranslationMaxRecursionDepth?: number;
	readonly jspbAcceptNegativeUnsignedNumber?: boolean;
	readonly jspbPivot?: number;
	readonly jspbVariant?: string;
	readonly outputAllPrimitiveFieldsToJson?: boolean;
	readonly selector?: string;
	readonly structIntegersAsStrings?: boolean;
	readonly useWebSafeBase64ForByteFields?: boolean;
}
export interface TrustedTesterList {
	readonly gaiaGroupIds?: string[];
}
export interface Type {
	readonly fields?: Field[];
	readonly name?: string;
	readonly oneofs?: string[];
	readonly options?: Option[];
	readonly sourceContext?: SourceContext;
	readonly syntax?: string;
}
export interface UbermintConfig {
	readonly consumerAddress?: string;
	readonly serviceAccountAddress?: string;
	readonly yawnsOnlyServiceAccountUberminterAddress?: string;
}
export interface UberMintConfig {
	readonly platforms?: string[];
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
export interface UniverseConfig {
	readonly name?: string;
}
export interface UpgradedOption {
	readonly name?: string;
	readonly value?: string;
}
export interface UrlMap {
	readonly defaultBackend?: GfeTarget;
	readonly description?: string;
	readonly httpConfig?: HttpFrontendOptions;
	readonly name?: string;
	readonly rules?: UrlMapRule[];
}
export interface UrlMapRule {
	readonly backend?: GfeTarget;
	readonly examplePaths?: string[];
	readonly legacyGfeService?: LegacyGfeService;
	readonly pathRegex?: string[];
	readonly selector?: string;
}
export interface Usage {
	readonly activationHooks?: string[];
	readonly deactivationHooks?: string[];
	readonly dependsOnServices?: string[];
	readonly producerNotificationChannel?: string;
	readonly requirements?: string[];
	readonly rules?: UsageRule[];
	readonly serviceAccess?: string;
	readonly serviceIdentity?: ServiceIdentity;
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
export interface UsageManagerRule {
	readonly address?: string;
	readonly enableCache?: boolean;
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
export interface UserAttributionCondition {
	readonly includes?: string[];
	readonly localProdGroups?: string[];
	readonly prodGroups?: string[];
	readonly prodUsers?: string[];
	readonly self?: any;
}
export interface Visibility {
	readonly rules?: VisibilityRule[];
}
export interface VisibilityRule {
	readonly restriction?: string;
	readonly selector?: string;
}
export interface WebChannelConfig {
	readonly selector?: string;
	readonly urlPaths?: string[];
}
export interface Zanzibar {}
export interface ZanzibarAuthorizationCheckCondition {}
export default {
	ServicesConfigs: ServicesConfigs,
};

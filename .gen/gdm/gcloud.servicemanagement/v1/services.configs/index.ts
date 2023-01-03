import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ServicesConfigs
	extends GdmResource<ServicesConfigsComponentInputs>
	implements ServicesConfigsComponentOutputs
{
	constructor(entity: ADKEntity, options: ServicesConfigsComponentInputs) {
		super(entity, options.name, "servicemanagement.v1.ServicesConfigs", options);
	}
	public readonly sourceInfo?: SourceInfo | undefined;
}
export interface ServicesConfigsComponentOutputs {
	readonly sourceInfo?: SourceInfo | undefined;
}
export interface ServicesConfigsComponentInputs {
	readonly analytics?: Analytics | undefined;
	readonly apis?: Api[] | undefined;
	readonly auditing?: Auditing | undefined;
	readonly authentication?: Authentication | undefined;
	readonly backend?: Backend | undefined;
	readonly billing?: Billing | undefined;
	readonly census?: Census | undefined;
	readonly configVersion?: number | undefined;
	readonly context?: Context | undefined;
	readonly control?: Control | undefined;
	readonly customError?: CustomError | undefined;
	readonly derivedData?: { [P in string]: any } | undefined;
	readonly discovery?: Discovery | undefined;
	readonly documentation?: Documentation | undefined;
	readonly endpoints?: Endpoint[] | undefined;
	readonly enums?: Enum[] | undefined;
	readonly experimental?: Experimental | undefined;
	readonly features?: string[] | undefined;
	readonly filtering?: Filtering | undefined;
	readonly http?: Http | undefined;
	readonly iam?: Iam | undefined;
	readonly id?: string | undefined;
	readonly indexedResources?: IndexedResource | undefined;
	readonly labels?: LabelDescriptor[] | undefined;
	readonly legacy?: Legacy | undefined;
	readonly logging?: Logging | undefined;
	readonly logs?: LogDescriptor[] | undefined;
	readonly metrics?: MetricDescriptor[] | undefined;
	readonly migration?: Migration | undefined;
	readonly monitoredResources?: MonitoredResourceDescriptor[] | undefined;
	readonly monitoring?: Monitoring | undefined;
	readonly name: string;
	readonly operations?: Operations | undefined;
	readonly producerProjectId?: string | undefined;
	readonly projectProperties?: ProjectProperties | undefined;
	readonly publishing?: Publishing | undefined;
	readonly quota?: Quota | undefined;
	readonly resourceContainer?: ResourceContainer | undefined;
	readonly resources?: ResourceDescriptor[] | undefined;
	readonly rpcSecurityPolicy?: RpcSecurityPolicy | undefined;
	readonly serviceName: string;
	readonly sharing?: Sharing[] | undefined;
	readonly slo?: Slo | undefined;
	readonly supportedLocation?: SupportedLocation | undefined;
	readonly systemParameters?: SystemParameters | undefined;
	readonly systemTypes?: Type[] | undefined;
	readonly title?: string | undefined;
	readonly types?: Type[] | undefined;
	readonly urlMaps?: UrlMap[] | undefined;
	readonly usage?: Usage | undefined;
	readonly visibility?: Visibility | undefined;
	readonly type: string;
}
export interface AdminAccessControlConfig {
	readonly allowBreakGlass?: boolean | undefined;
	readonly allowBreakGlassAccess?: BreakGlassConfig | undefined;
	readonly baselineControls?: string | undefined;
	readonly defaultRequirements?: string | undefined;
	readonly enforcement?: string | undefined;
	readonly ginLoggingFailureBehavior?: string | undefined;
	readonly requireMpa?: MultiPartyAuthorizationConfig | undefined;
}
export interface AdminPolicy {
	readonly allowBreakGlassAccess?: BreakGlassConfigV1 | undefined;
	readonly baselineControls?: string | undefined;
	readonly defaultRequirements?: string | undefined;
	readonly disableImplicitPersonLogging?: boolean | undefined;
	readonly emergencyAdmins?: string[] | undefined;
	readonly enableFailClosedGinLogging?: boolean | undefined;
	readonly enforcement?: string | undefined;
	readonly policyValidationLevel?: string | undefined;
	readonly requireMpa?: MultiPartyAuthorizationConfigV1 | undefined;
}
export interface AdvancedServiceConfig {
	readonly batch?: BatchConfig | undefined;
	readonly chemistCache?: CacheConfig | undefined;
	readonly chemistConfig?: ChemistConfig | undefined;
	readonly jwtCache?: CacheConfig | undefined;
	readonly messageLimitsRules?: MessageLimitsRule[] | undefined;
	readonly oauthCache?: CacheConfig | undefined;
	readonly quota?: QuotaConfig | undefined;
	readonly quotaCache?: CacheConfig | undefined;
	readonly quotaRules?: ExtendedQuotaRule[] | undefined;
	readonly renameRules?: RenameMethodRule[] | undefined;
	readonly translatorConfig?: TranslatorConfig[] | undefined;
	readonly ubermintConfig?: UbermintConfig | undefined;
	readonly usageManagerCache?: CacheConfig | undefined;
	readonly usageManagerRules?: UsageManagerRule[] | undefined;
	readonly webchannelConfig?: WebChannelConfig[] | undefined;
}
export interface Analytics {
	readonly producerDestinations?: AnalyticsDestination[] | undefined;
	readonly rules?: AnalyticsRule[] | undefined;
}
export interface AnalyticsConfig {
	readonly dataTier?: string | undefined;
	readonly description?: string | undefined;
	readonly destinations?: AnalyticsConfigDestination[] | undefined;
	readonly retentionAndBackfillPolicy?: RetentionBackfillPolicy | undefined;
}
export interface AnalyticsConfigDestination {
	readonly metrics?: string[] | undefined;
	readonly monitoredResource?: string | undefined;
}
export interface AnalyticsDestination {
	readonly metrics?: string[] | undefined;
	readonly monitoredResource?: string | undefined;
}
export interface AnalyticsRule {
	readonly businessIntelligence?: BusinessIntelligenceConfig | undefined;
	readonly samplingConfiguration?: AnalyticsSamplingConfiguration | undefined;
	readonly selector?: string | undefined;
}
export interface AnalyticsSamplingConfiguration {
	readonly enableSampling?: boolean | undefined;
	readonly samplingRatio?: number | undefined;
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
export interface ApplicationAuthorizationCheckCondition {}
export interface AreaUnderCurveParams {
	readonly aggregationLabels?: string[] | undefined;
	readonly changeMetric?: string | undefined;
	readonly generatedMetric?: string | undefined;
	readonly snapshotMetric?: string | undefined;
}
export interface AuditConfig {
	readonly auditLogConfigs?: AuditLogConfig[] | undefined;
	readonly service?: string | undefined;
}
export interface Auditing {
	readonly labels?: { [P in string]: string } | undefined;
	readonly rules?: AuditingRule[] | undefined;
}
export interface AuditingConfig {
	readonly auditing?: Auditing | undefined;
	readonly http?: HttpExtractionRules | undefined;
}
export interface AuditingRule {
	readonly directive?: string | undefined;
	readonly selector?: string | undefined;
}
export interface AuditLogConfig {
	readonly exemptedMembers?: string[] | undefined;
	readonly ignoreChildExemptions?: boolean | undefined;
	readonly logType?: string | undefined;
}
export interface Authentication {
	readonly enableMtls?: boolean | undefined;
	readonly environment?: string | undefined;
	readonly gaiaService?: string | undefined;
	readonly peerDelegationMode?: string | undefined;
	readonly providers?: AuthProvider[] | undefined;
	readonly rules?: AuthenticationRule[] | undefined;
}
export interface AuthenticationConfig {
	readonly additionalUbermintPlatforms?: string[] | undefined;
	readonly defaultAnonymousMode?: boolean | undefined;
	readonly thinmintControl?: string | undefined;
}
export interface AuthenticationMethods {
	readonly cloudUbermint?: CloudUberMintConfig | undefined;
	readonly ubermint?: UberMintConfig | undefined;
	readonly useDefaultMethods?: boolean | undefined;
}
export interface AuthenticationPolicy {
	readonly authenticationMethods?: AuthenticationMethods | undefined;
	readonly credsPolicy?: Policy | undefined;
	readonly defaultAnonymousMode?: boolean | undefined;
	readonly impersonationPolicy?: Policy | undefined;
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
export interface AuthorizationConfig {
	readonly provider?: string | undefined;
}
export interface AuthorizationLoggingOptions {
	readonly permissionType?: string | undefined;
}
export interface AuthorizationMethod {
	readonly ccfeAuthorizationAlreadyDone?: any | undefined;
	readonly cloudIam?: any | undefined;
	readonly custom?: any | undefined;
	readonly delegated?: any | undefined;
	readonly localIam?: any | undefined;
	readonly zanzibar?: any | undefined;
}
export interface AuthorizationRule {
	readonly permissions?: string | undefined;
	readonly selector?: string | undefined;
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
export interface AvailabilityCriteria {}
export interface Backend {
	readonly renameRules?: RenameRule[] | undefined;
	readonly rules?: BackendRule[] | undefined;
}
export interface BackendOptions {
	readonly backendResponsiveness?: string | undefined;
	readonly healthzString?: string | undefined;
	readonly maxConnections?: string | undefined;
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
export interface BackendRule {
	readonly address?: string | undefined;
	readonly deadline?: number | undefined;
	readonly disableAuth?: boolean | undefined;
	readonly jwtAudience?: string | undefined;
	readonly minDeadline?: number | undefined;
	readonly operationDeadline?: number | undefined;
	readonly pathTranslation?: string | undefined;
	readonly protocol?: string | undefined;
	readonly selector?: string | undefined;
}
export interface BasicAuthRequirements {
	readonly enableProgrammaticClientToken?: boolean | undefined;
	readonly scopeCodes?: string | undefined;
}
export interface BatchConfig {
	readonly innerRequestCountLimit?: number | undefined;
	readonly outerRequestSizeLimit?: number | undefined;
}
export interface Billing {
	readonly areaUnderCurveParams?: AreaUnderCurveParams[] | undefined;
	readonly billingServiceName?: string | undefined;
	readonly consumerDestinations?: BillingDestination[] | undefined;
	readonly metrics?: string[] | undefined;
	readonly rules?: BillingStatusRule[] | undefined;
}
export interface BillingDestination {
	readonly metrics?: string[] | undefined;
	readonly monitoredResource?: string | undefined;
}
export interface BillingStatusRule {
	readonly allowedStatuses?: string[] | undefined;
	readonly flags?: string | undefined;
	readonly selector?: string | undefined;
}
export interface Binding {
	readonly bindingId?: string | undefined;
	readonly condition?: Expr | undefined;
	readonly members?: string[] | undefined;
	readonly role?: string | undefined;
}
export interface BindingCondition {
	readonly applicationAuthorizationCheck?: any | undefined;
	readonly description?: string | undefined;
	readonly excludeInsecureUsers?: ExcludeInsecureUsersCondition | undefined;
	readonly impersonationTarget?: ImpersonationTargetCondition | undefined;
	readonly peerSecurityRealm?: PeerSecurityRealmCondition | undefined;
	readonly peerUser?: PeerUserCondition | undefined;
	readonly primaryPeerUser?: PeerUserCondition | undefined;
	readonly userAttribution?: UserAttributionCondition | undefined;
	readonly zanzibarAuthorizationCheck?: any | undefined;
}
export interface BoqSettings {
	readonly controlPlaneConfig?: string | undefined;
}
export interface BreakGlassConfig {
	readonly requireMpa?: any | undefined;
}
export interface BreakGlassConfigV1 {
	readonly emergencyAdmins?: string[] | undefined;
	readonly requireMpa?: BreakGlassMpaConfigV1 | undefined;
}
export interface BreakGlassMpaConfig {}
export interface BreakGlassMpaConfigV1 {
	readonly reviewers?: string[] | undefined;
	readonly reviewGuidance?: string | undefined;
}
export interface BrowserFirstPartyAuthRequirements {
	readonly allowMissingActiveSession?: boolean | undefined;
	readonly ignoreInvalidCredentials?: boolean | undefined;
	readonly scopeCodes?: string | undefined;
}
export interface BusinessIntelligenceConfig {
	readonly activeDeveloperMethod?: boolean | undefined;
}
export interface CacheConfig {
	readonly disabled?: boolean | undefined;
	readonly lifetimeSeconds?: number | undefined;
	readonly localCacheSizeBytes?: number | undefined;
	readonly memcachegRpcTimeoutMs?: number | undefined;
	readonly refreshThresholdSeconds?: number | undefined;
	readonly strategy?: string | undefined;
}
export interface CcfeAuthorizationAlreadyDone {}
export interface Census {
	readonly rules?: CensusRule[] | undefined;
}
export interface CensusRule {
	readonly logProductCui?: boolean | undefined;
	readonly productCui?: string | undefined;
	readonly selector?: string | undefined;
}
export interface ChemistConfig {
	readonly address?: string | undefined;
}
export interface ClientLibrarySettings {
	readonly cppSettings?: CppSettings | undefined;
	readonly dotnetSettings?: DotnetSettings | undefined;
	readonly goSettings?: GoSettings | undefined;
	readonly javaSettings?: JavaSettings | undefined;
	readonly launchStage?: string | undefined;
	readonly nodeSettings?: NodeSettings | undefined;
	readonly phpSettings?: PhpSettings | undefined;
	readonly pythonSettings?: PythonSettings | undefined;
	readonly restNumericEnums?: boolean | undefined;
	readonly rubySettings?: RubySettings | undefined;
	readonly version?: string | undefined;
}
export interface CloudAuditOptions {
	readonly authorizationLoggingOptions?: AuthorizationLoggingOptions | undefined;
	readonly logName?: string | undefined;
}
export interface CloudIam {}
export interface CloudUberMintConfig {
	readonly mode: string;
}
export interface Codegen {
	readonly rules?: CodegenRule[] | undefined;
}
export interface CodegenRule {
	readonly jsonName?: string | undefined;
	readonly resourceReference?: boolean | undefined;
	readonly selector?: string | undefined;
}
export interface CommonLanguageSettings {
	readonly destinations?: string[] | undefined;
	readonly referenceDocsUri?: string | undefined;
}
export interface Condition {
	readonly iam?: string | undefined;
	readonly op?: string | undefined;
	readonly svc?: string | undefined;
	readonly sys?: string | undefined;
	readonly values?: string[] | undefined;
}
export interface Context {
	readonly rules?: ContextRule[] | undefined;
}
export interface ContextRule {
	readonly allowedRequestExtensions?: string[] | undefined;
	readonly allowedResponseExtensions?: string[] | undefined;
	readonly provided?: string[] | undefined;
	readonly requested?: string[] | undefined;
	readonly selector?: string | undefined;
}
export interface Control {
	readonly environment?: string | undefined;
	readonly failureMode?: string | undefined;
	readonly methodPolicies?: MethodPolicy[] | undefined;
	readonly policyCallbacks?: PolicyCallback[] | undefined;
}
export interface ControlPlaneMigration {
	readonly migrating?: boolean | undefined;
}
export interface CounterOptions {
	readonly customFields?: CustomField[] | undefined;
	readonly field?: string | undefined;
	readonly metric?: string | undefined;
}
export interface CppSettings {
	readonly common?: CommonLanguageSettings | undefined;
}
export interface CredsAssertion {
	readonly deviceTrustLevel?: DeviceTrustLevelAssertion | undefined;
	readonly name: string;
	readonly oauthScope?: OauthScopeAssertion | undefined;
	readonly osidDomain?: OsidDomainAssertion | undefined;
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
	readonly rules?: CustomErrorRule[] | undefined;
	readonly types?: string[] | undefined;
}
export interface CustomErrorRule {
	readonly isErrorType?: boolean | undefined;
	readonly selector?: string | undefined;
}
export interface CustomField {
	readonly name?: string | undefined;
	readonly value?: string | undefined;
}
export interface CustomHttpPattern {
	readonly kind?: string | undefined;
	readonly path?: string | undefined;
}
export interface DataAccessOptions {
	readonly logMode?: string | undefined;
}
export interface Date {
	readonly day?: number | undefined;
	readonly month?: number | undefined;
	readonly year?: number | undefined;
}
export interface Delegated {}
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
export interface Destination {
	readonly acl?: ServiceControlAcl | undefined;
	readonly labelKeyTransformationName?: string | undefined;
	readonly logNames?: string[] | undefined;
	readonly metricNames?: string[] | undefined;
	readonly owner?: string | undefined;
	readonly type?: string | undefined;
}
export interface Devconsole {
	readonly consoleApi?: string | undefined;
	readonly exampleUrl?: string | undefined;
	readonly learnmoreUrl?: string | undefined;
	readonly pricingLink?: string | undefined;
	readonly requestQuotaUrl?: string | undefined;
}
export interface DeviceTrustLevelAssertion {
	readonly loasOriginTrusted: boolean;
	readonly minimum: string;
}
export interface DisabledAdminAccessControlConfig {
	readonly disableAuditLogging?: boolean | undefined;
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
export interface DotnetSettings {
	readonly common?: CommonLanguageSettings | undefined;
}
export interface Empty {}
export interface EnableConsentCheck {}
export interface Endpoint {
	readonly aliases?: string[] | undefined;
	readonly allowCors?: boolean | undefined;
	readonly features?: string[] | undefined;
	readonly launchStage?: string | undefined;
	readonly name?: string | undefined;
	readonly target?: string | undefined;
	readonly urlMap?: string | undefined;
}
export interface EndpointPolicy {
	readonly actions?: string[] | undefined;
	readonly authenticationConfig?: AuthenticationConfig | undefined;
	readonly bindings?: RoleBinding[] | undefined;
	readonly conditions?: EndpointPolicyCondition[] | undefined;
	readonly dataGovernanceAnnotations?: PrivacyDataGovernanceAttributesAnnotations | undefined;
	readonly disableChecks?: string[] | undefined;
	readonly disableRewrites?: string[] | undefined;
	readonly enableChecks?: string[] | undefined;
	readonly enableRewrites?: string[] | undefined;
	readonly httpHandlers?: string[] | undefined;
	readonly labels?: string[] | undefined;
	readonly methodQualifier?: MethodQualifier | undefined;
	readonly proxyServiceConfig?: any | undefined;
	readonly rpcMethods?: string[] | undefined;
}
export interface EndpointPolicyCondition {
	readonly crossProductSharing?: CrossProductSharingCondition | undefined;
	readonly description?: string | undefined;
	readonly peerSecurityRealm?: PeerSecurityRealmCondition | undefined;
	readonly peerUser?: PeerUserCondition | undefined;
}
export interface EndUserCredsRequirements {
	readonly scopeCodes?: string | undefined;
}
export interface Enum {
	readonly enumvalue?: EnumValue[] | undefined;
	readonly name?: string | undefined;
	readonly options?: Option[] | undefined;
	readonly sourceContext?: SourceContext | undefined;
	readonly syntax?: string | undefined;
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
export interface EnumValue {
	readonly name?: string | undefined;
	readonly number?: number | undefined;
	readonly options?: Option[] | undefined;
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
export interface EsfConfig {
	readonly allowUntrustedRequests?: boolean | undefined;
	readonly enablePeerDelegation?: boolean | undefined;
	readonly trustedEsfRoles?: string[] | undefined;
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
export interface ExcludeInsecureUsersCondition {
	readonly prodUsers?: string[] | undefined;
}
export interface Experimental {
	readonly advanced?: AdvancedServiceConfig | undefined;
	readonly authorization?: AuthorizationConfig | undefined;
	readonly cargoContainerPrefixes?: string | undefined;
	readonly codegen?: Codegen | undefined;
	readonly mediation?: MediationConfig | undefined;
	readonly provisioning?: Provisioning | undefined;
	readonly serviceControl?: ServiceControlConfig | undefined;
	readonly serviceManagement?: ServiceManagementConfig | undefined;
}
export interface Expr {
	readonly description?: string | undefined;
	readonly expression?: string | undefined;
	readonly location?: string | undefined;
	readonly title?: string | undefined;
}
export interface ExtendedQuotaRule {
	readonly enableCache?: boolean | undefined;
	readonly quotaCacheLifetimeSeconds?: number | undefined;
	readonly selector?: string | undefined;
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
export interface Field {
	readonly cardinality?: string | undefined;
	readonly defaultValue?: string | undefined;
	readonly jsonName?: string | undefined;
	readonly kind?: string | undefined;
	readonly name?: string | undefined;
	readonly number?: number | undefined;
	readonly oneofIndex?: number | undefined;
	readonly options?: Option[] | undefined;
	readonly packed?: boolean | undefined;
	readonly typeUrl?: string | undefined;
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
export interface FieldPolicy {
	readonly auditing?: string | undefined;
	readonly childResourceNameExtractor?: string | undefined;
	readonly childResourceType?: string | undefined;
	readonly cmekKeySelector?: string | undefined;
	readonly customOrgPolicyAccessibility?: string | undefined;
	readonly isServiceConsumer?: boolean | undefined;
	readonly locationSelector?: string | undefined;
	readonly metadataPolicies?: MetadataPolicy[] | undefined;
	readonly monitoredResourceLabelExtractor?: string | undefined;
	readonly monitoredResourceType?: string | undefined;
	readonly orgPolicies?: OrgPolicy[] | undefined;
	readonly resourceAccessType?: string | undefined;
	readonly resourceLocationSelector?: string | undefined;
	readonly resourcePermission?: string | undefined;
	readonly resourceType?: string | undefined;
	readonly selector?: string | undefined;
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
export interface Filtering {
	readonly rules?: FilterRule[] | undefined;
}
export interface FilterRule {
	readonly selector?: string | undefined;
	readonly skipFilters?: string[] | undefined;
}
export interface GfeRedirectConfig {
	readonly enabledOnRequestFlow?: boolean | undefined;
	readonly enabledOnResponseFlow?: boolean | undefined;
	readonly enableInnerBatchErrorFallback?: boolean | undefined;
	readonly enableProjectOverrides?: boolean | undefined;
	readonly errorCodePattern?: string[] | undefined;
	readonly errorFilters?: ErrorFilter[] | undefined;
}
export interface GfeTarget {
	readonly backendOptions?: BackendOptions | undefined;
	readonly target?: string | undefined;
}
export interface GoSettings {
	readonly common?: CommonLanguageSettings | undefined;
}
export interface Http {
	readonly fullyDecodeReservedExpansion?: boolean | undefined;
	readonly rules?: HttpRule[] | undefined;
}
export interface HttpExtractionRules {
	readonly resource?: HttpResourceRule[] | undefined;
}
export interface HttpFieldSelector {
	readonly header?: string | undefined;
	readonly param?: string | undefined;
}
export interface HttpFrontendOptions {
	readonly allowInternalRedirects?: boolean | undefined;
	readonly blockInEmbargoedCountries?: boolean | undefined;
	readonly cacheHitLogFallthroughDenom?: number | undefined;
	readonly dosService?: string | undefined;
	readonly grpcMode?: string | undefined;
	readonly qosClass?: string | undefined;
	readonly requestSize?: string | undefined;
}
export interface HttpResourceRule {
	readonly resourceRegistryType?: string | undefined;
	readonly selector?: HttpFieldSelector | undefined;
}
export interface HttpRule {
	readonly additionalBindings?: HttpRule[] | undefined;
	readonly allowHalfDuplex?: boolean | undefined;
	readonly authorizations?: AuthorizationRule[] | undefined;
	readonly body?: string | undefined;
	readonly custom?: CustomHttpPattern | undefined;
	readonly delete?: string | undefined;
	readonly get?: string | undefined;
	readonly mediaDownload?: MediaDownload | undefined;
	readonly mediaUpload?: MediaUpload | undefined;
	readonly patch?: string | undefined;
	readonly post?: string | undefined;
	readonly put?: string | undefined;
	readonly responseBody?: string | undefined;
	readonly restCollection?: string | undefined;
	readonly restMethodName?: string | undefined;
	readonly selector?: string | undefined;
}
export interface Iam {
	readonly environment?: string | undefined;
	readonly internal?: IamServiceConfigInternal | undefined;
	readonly launchStage?: string | undefined;
	readonly reader?: string | undefined;
	readonly resources?: IamResourceDescriptor[] | undefined;
	readonly roles?: IamRole[] | undefined;
	readonly writer?: string | undefined;
}
export interface IamPermission {
	readonly basicRole?: string | undefined;
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly internal?: IamPermissionInternal | undefined;
	readonly launchStage?: string | undefined;
	readonly name?: string | undefined;
	readonly parentOnly?: boolean | undefined;
	readonly scope?: string | undefined;
	readonly type?: string | undefined;
}
export interface IamPermissionInternal {
	readonly calOnboardingTicket?: string | undefined;
	readonly customRoleSupportLevelOverride?: string | undefined;
	readonly usedForRpcSecurityPolicy?: boolean | undefined;
}
export interface IamResourceDescriptor {
	readonly internal?: IamResourceDescriptorInternal | undefined;
	readonly launchStage?: string | undefined;
	readonly memberTypeRestriction?: string | undefined;
	readonly permissions?: IamPermission[] | undefined;
	readonly resourceNameMappings?: IamResourceNameMapping[] | undefined;
	readonly type?: string | undefined;
}
export interface IamResourceDescriptorInternal {
	readonly disableConvertProjectIdOrNumber?: boolean | undefined;
	readonly nameForResource?: string | undefined;
	readonly singleParentOverride?: boolean | undefined;
}
export interface IamResourceNameMapping {
	readonly policyLocationExtractor?: string | undefined;
	readonly policyNameExtractor?: string | undefined;
	readonly resourceNamePattern?: string | undefined;
}
export interface IamRole {
	readonly description: string;
	readonly displayName: string;
	readonly launchStage?: string | undefined;
	readonly name?: string | undefined;
	readonly permissions?: string[] | undefined;
	readonly roles?: string[] | undefined;
}
export interface IamServiceConfigInternal {
	readonly roleGroup?: string | undefined;
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
export interface ImpersonationTargetCondition {
	readonly allNormalUsers?: any | undefined;
	readonly allProdUsers?: any | undefined;
}
export interface IndexedResource {
	readonly permissions: string[];
	readonly resourceType: string;
}
export interface JavaSettings {
	readonly common?: CommonLanguageSettings | undefined;
	readonly libraryPackage?: string | undefined;
	readonly serviceClassNames?: { [P in string]: string } | undefined;
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
export interface LatencyCriteria {
	readonly latencyExperience?: string | undefined;
	readonly threshold?: string | undefined;
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
export interface LegacyGfeService {
	readonly service?: string | undefined;
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
export interface LocalIam {}
export interface Location {
	readonly leadingComments?: string | undefined;
	readonly leadingDetachedComments?: string[] | undefined;
	readonly path?: number[] | undefined;
	readonly span?: number[] | undefined;
	readonly trailingComments?: string | undefined;
}
export interface LocationGroup {
	readonly groupId?: string | undefined;
	readonly locations?: string | undefined;
}
export interface LocationPolicy {
	readonly locationProperties?: LocationProperties[] | undefined;
}
export interface LocationProperties {
	readonly displayName?: string | undefined;
	readonly forTesting?: boolean | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly locationId?: string | undefined;
}
export interface LogConfig {
	readonly cloudAudit?: CloudAuditOptions | undefined;
	readonly counter?: CounterOptions | undefined;
	readonly dataAccess?: DataAccessOptions | undefined;
}
export interface LogDescriptor {
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly labels?: LabelDescriptor[] | undefined;
	readonly name?: string | undefined;
}
export interface Logging {
	readonly consumerDestinations?: LoggingDestination[] | undefined;
	readonly producerDestinations?: LoggingDestination[] | undefined;
}
export interface LoggingDestination {
	readonly logs?: string[] | undefined;
	readonly monitoredResource?: string | undefined;
}
export interface LongRunning {
	readonly initialPollDelay?: string | undefined;
	readonly maxPollDelay?: string | undefined;
	readonly pollDelayMultiplier?: number | undefined;
	readonly totalPollTimeout?: string | undefined;
}
export interface MediaDownload {
	readonly completeNotification?: boolean | undefined;
	readonly downloadService?: string | undefined;
	readonly dropzone?: string | undefined;
	readonly enabled?: boolean | undefined;
	readonly maxDirectDownloadSize?: string | undefined;
	readonly servePartialContentOnFullRangeRequest?: boolean | undefined;
	readonly useDirectDownload?: boolean | undefined;
}
export interface MediationConfig {
	readonly mediationServerStartupDelay?: number | undefined;
	readonly rules?: MediationRule[] | undefined;
}
export interface MediationMethodConfig {
	readonly enabled?: boolean | undefined;
	readonly messageTypeUrl?: string | undefined;
	readonly providedContexts?: string[] | undefined;
	readonly requestedContexts?: string[] | undefined;
}
export interface MediationRule {
	readonly request?: MediationMethodConfig | undefined;
	readonly response?: MediationMethodConfig | undefined;
	readonly selector?: string | undefined;
}
export interface MediaUpload {
	readonly completeNotification?: boolean | undefined;
	readonly dropzone?: string | undefined;
	readonly enabled?: boolean | undefined;
	readonly maxSize?: string | undefined;
	readonly mimeTypes?: string[] | undefined;
	readonly progressNotification?: boolean | undefined;
	readonly startNotification?: boolean | undefined;
	readonly supportResumable?: boolean | undefined;
	readonly uploadService?: string | undefined;
}
export interface Members {
	readonly all?: any | undefined;
	readonly allExceptAnonymous?: any | undefined;
	readonly allNormalUsers?: any | undefined;
	readonly includes?: string[] | undefined;
	readonly localProdGroups?: string[] | undefined;
	readonly prodAuthoritySelectors?: string[] | undefined;
	readonly prodGroups?: string[] | undefined;
	readonly prodUsers?: string[] | undefined;
	readonly self?: any | undefined;
}
export interface MessageLimitsRule {
	readonly requestLimit?: number | undefined;
	readonly selector?: string | undefined;
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
export interface MetadataPolicy {
	readonly type?: string | undefined;
	readonly valueExtractors?: string[] | undefined;
	readonly valueSelector?: string | undefined;
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
export interface MethodPolicy {
	readonly action?: string | undefined;
	readonly activeDeveloperMethod?: boolean | undefined;
	readonly auditing?: string | undefined;
	readonly authorization?: string | undefined;
	readonly flags?: string | undefined;
	readonly metadata?: { [P in string]: string } | undefined;
	readonly requestPolicies?: FieldPolicy[] | undefined;
	readonly responsePolicies?: FieldPolicy[] | undefined;
	readonly selector?: string | undefined;
}
export interface MethodQualifier {
	readonly actions?: string[] | undefined;
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
export interface MethodSettings {
	readonly longRunning?: LongRunning | undefined;
	readonly selector?: string | undefined;
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
export interface MpaReviewerConfig {
	readonly preferredReviewers?: string[] | undefined;
	readonly preferredReviewersFromRotations?: string[] | undefined;
}
export interface MultiPartyAuthorizationConfig {
	readonly approvalCacheDuration?: string | undefined;
	readonly reviewGuidance?: string | undefined;
}
export interface MultiPartyAuthorizationConfigV1 {
	readonly approvalCacheDuration?: string | undefined;
	readonly preferredReviewers?: string[] | undefined;
	readonly preferredReviewersFromRotations?: string[] | undefined;
	readonly reviewers?: string[] | undefined;
	readonly reviewGuidance?: string | undefined;
}
export interface NamePart {
	readonly isExtension?: boolean | undefined;
	readonly namePart?: string | undefined;
}
export interface NodeSettings {
	readonly common?: CommonLanguageSettings | undefined;
}
export interface OAuthRequirements {
	readonly allowAnyScope?: boolean | undefined;
	readonly canonicalScopes?: string | undefined;
}
export interface OauthScopeAssertion {
	readonly allowNonOauth?: boolean | undefined;
	readonly allowScope?: number[] | undefined;
}
export interface OneofDescriptorProto {
	readonly name?: string | undefined;
	readonly options?: OneofOptions | undefined;
}
export interface OneofOptions {
	readonly uninterpretedOption?: UninterpretedOption[] | undefined;
}
export interface OperationAvailabilityCriteria {}
export interface OperationLatencyCriteria {
	readonly latencyExperience?: string | undefined;
	readonly threshold?: string | undefined;
}
export interface OperationRule {
	readonly lroMetadataType?: string | undefined;
	readonly lroResponseType?: string | undefined;
	readonly selector?: string | undefined;
}
export interface Operations {
	readonly rules?: OperationRule[] | undefined;
}
export interface Option {
	readonly name?: string | undefined;
	readonly value?: { [P in string]: any } | undefined;
}
export interface OrgPolicy {
	readonly constraint?: string | undefined;
	readonly enabled?: string | undefined;
	readonly valueExtractors?: string[] | undefined;
	readonly valueSelector?: string | undefined;
}
export interface OsidDomainAssertion {
	readonly allowDomain?: string[] | undefined;
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
export interface PeerSecurityRealmCondition {
	readonly alwaysAllowPersons?: any | undefined;
	readonly guardianRealms?: any | undefined;
	readonly includes?: string[] | undefined;
	readonly localCampus?: any | undefined;
	readonly localCloudRegion?: any | undefined;
	readonly localMetro?: any | undefined;
	readonly localProdRegion?: any | undefined;
	readonly realms?: string[] | undefined;
}
export interface PeerUserCondition {
	readonly includes?: string[] | undefined;
	readonly localProdGroups?: string[] | undefined;
	readonly prodGroups?: string[] | undefined;
	readonly prodUsers?: string[] | undefined;
	readonly self?: any | undefined;
}
export interface PhpSettings {
	readonly common?: CommonLanguageSettings | undefined;
}
export interface Policy {
	readonly auditConfigs?: AuditConfig[] | undefined;
	readonly bindings?: Binding[] | undefined;
	readonly etag?: string | undefined;
	readonly rules?: Rule[] | undefined;
	readonly version?: number | undefined;
}
export interface PolicyCallback {
	readonly locationExtractor?: string | undefined;
	readonly policyCallbackAddress?: string | undefined;
	readonly policyCallbackBackendAddress?: string | undefined;
	readonly resourcePatterns?: string[] | undefined;
	readonly resourceType?: string | undefined;
	readonly selector?: string | undefined;
}
export interface PolicyRequirement {
	readonly axtLevel?: string | undefined;
}
export interface PrivacyDataGovernanceAttributesAdsData {
	readonly anonymizationBugId?: string | undefined;
	readonly dataCategory?: string | undefined;
	readonly dataOrigin?: string[] | undefined;
	readonly dataType?: string[] | undefined;
	readonly environment?: string | undefined;
	readonly eventualAction?: string | undefined;
	readonly identifier?: string | undefined;
	readonly survey402?: PrivacyDataGovernanceAttributesAdsDataSurvey402 | undefined;
	readonly usagePurpose?: string | undefined;
	readonly userContract?: string | undefined;
	readonly userType?: string | undefined;
}
export interface PrivacyDataGovernanceAttributesAdsDataSurvey402 {
	readonly surveyDataSource?: string | undefined;
	readonly surveyDataType?: string | undefined;
}
export interface PrivacyDataGovernanceAttributesAdsProcess {
	readonly dataReceivedFromOutsideGoogle?: PrivacyDataGovernanceAttributesAdsProcessExternallyExchangedData | undefined;
	readonly dataSentOutsideGoogle?: PrivacyDataGovernanceAttributesAdsProcessExternallyExchangedData | undefined;
	readonly intendedJobPurposes?: string[] | undefined;
	readonly providingPa?: string[] | undefined;
}
export interface PrivacyDataGovernanceAttributesAdsProcessExternallyExchangedData {
	readonly dataGroupings?: string[] | undefined;
	readonly dataProperties?: PrivacyDataGovernanceAttributesClassificationCategory | undefined;
	readonly entityDataType?: string[] | undefined;
	readonly externalDataExchanger?: string[] | undefined;
}
export interface PrivacyDataGovernanceAttributesAdsStorage {
	readonly customerControl?: string | undefined;
	readonly retentionControl?: string | undefined;
	readonly ttlControl?: string | undefined;
	readonly userControl?: string | undefined;
}
export interface PrivacyDataGovernanceAttributesAllowedLocations {
	readonly locations?: PrivacyDataGovernanceAttributesLocation[] | undefined;
	readonly semanticContext?: string | undefined;
	readonly source?: string | undefined;
}
export interface PrivacyDataGovernanceAttributesAnnotations {
	readonly annotationId?: string | undefined;
	readonly custom?: PrivacyDataGovernanceAttributesAnnotationsCustom | undefined;
	readonly data?: PrivacyDataGovernanceAttributesAnnotationsData | undefined;
	readonly process?: PrivacyDataGovernanceAttributesAnnotationsProcess | undefined;
	readonly rpc?: PrivacyDataGovernanceAttributesAnnotationsRpc | undefined;
	readonly storage?: PrivacyDataGovernanceAttributesAnnotationsStorage | undefined;
	readonly version?: string | undefined;
}
export interface PrivacyDataGovernanceAttributesAnnotationsCustom {
	readonly productionImpact?: PrivacyDataGovernanceAttributesProductionImpact | undefined;
	readonly productionInfrastructure?: PrivacyDataGovernanceAttributesProductionInfrastructure | undefined;
}
export interface PrivacyDataGovernanceAttributesAnnotationsData {
	readonly allowedLocations?: PrivacyDataGovernanceAttributesAllowedLocations[] | undefined;
	readonly anonymizationBugId?: string | undefined;
	readonly category?: PrivacyDataGovernanceAttributesClassificationCategory | undefined;
	readonly confidentiality?: string | undefined;
	readonly custom?: PrivacyDataGovernanceAttributesAnnotationsDataCustom | undefined;
	readonly datasetTags?: string[] | undefined;
	readonly identifiability?: string | undefined;
	readonly identifiers?: string[] | undefined;
	readonly productAssociation?: PrivacyDataGovernanceAttributesDataProductAssociation | undefined;
	readonly pseudonymization?: string | undefined;
	readonly semanticContext?: string | undefined;
	readonly source?: string[] | undefined;
}
export interface PrivacyDataGovernanceAttributesAnnotationsDataCustom {
	readonly ads?: PrivacyDataGovernanceAttributesAdsData | undefined;
	readonly apps?: PrivacyDataGovernanceAttributesAppsData | undefined;
	readonly assurant?: PrivacyDataGovernanceAttributesAssurantData | undefined;
	readonly audio?: PrivacyDataGovernanceAttributesAudioData | undefined;
	readonly encryptionKeyProperties?: PrivacyDataGovernanceAttributesEncryptionKeyProperties | undefined;
	readonly essentialOnlyMode?: PrivacyDataGovernanceAttributesEssentialOnlyModeData | undefined;
	readonly experimental?: PrivacyDataGovernanceAttributesExperimentalData | undefined;
	readonly faceAuthentication?: PrivacyDataGovernanceAttributesFaceAuthenticationData | undefined;
	readonly geo?: PrivacyDataGovernanceAttributesGeoData | undefined;
	readonly medical?: PrivacyDataGovernanceAttributesMedicalData | undefined;
	readonly mlModel?: PrivacyDataGovernanceAttributesMlModelData | undefined;
	readonly payments?: PrivacyDataGovernanceAttributesPaymentsData | undefined;
	readonly photos?: PrivacyDataGovernanceAttributesPhotosData | undefined;
	readonly residency?: PrivacyDataGovernanceAttributesResidencyData[] | undefined;
	readonly search?: PrivacyDataGovernanceAttributesSearchDataSpecs | undefined;
}
export interface PrivacyDataGovernanceAttributesAnnotationsProcess {
	readonly custom?: PrivacyDataGovernanceAttributesAnnotationsProcessCustom | undefined;
	readonly geoLocation?: PrivacyDataGovernanceAttributesAnnotationsProcessGeoLocation | undefined;
	readonly processingPurpose?: PrivacyDataGovernanceAttributesProcessingPurpose[] | undefined;
	readonly serviceType?: string | undefined;
}
export interface PrivacyDataGovernanceAttributesAnnotationsProcessCustom {
	readonly ads?: PrivacyDataGovernanceAttributesAdsProcess | undefined;
	readonly audio?: PrivacyDataGovernanceAttributesAudioProcess | undefined;
	readonly essentialOnlyMode?: PrivacyDataGovernanceAttributesEssentialOnlyModeProcess | undefined;
	readonly residency?: PrivacyDataGovernanceAttributesResidencyProcess | undefined;
}
export interface PrivacyDataGovernanceAttributesAnnotationsProcessGeoLocation {
	readonly coarseningTransformation?: string | undefined;
	readonly locationType?: string | undefined;
}
export interface PrivacyDataGovernanceAttributesAnnotationsRpc {
	readonly primaryForPortability?: PrivacyDataGovernanceAttributesPrimaryForPortability | undefined;
	readonly reads?: PrivacyDataGovernanceAttributesAnnotationsData | undefined;
	readonly returns?: PrivacyDataGovernanceAttributesAnnotationsData | undefined;
	readonly serviceType?: string | undefined;
	readonly writes?: PrivacyDataGovernanceAttributesAnnotationsData | undefined;
}
export interface PrivacyDataGovernanceAttributesAnnotationsStorage {
	readonly custom?: PrivacyDataGovernanceAttributesAnnotationsStorageCustom | undefined;
	readonly encryption?: PrivacyDataGovernanceAttributesEncryptionProperties | undefined;
	readonly primaryForPortability?: PrivacyDataGovernanceAttributesPrimaryForPortability | undefined;
	readonly retention?: PrivacyDataGovernanceAttributesAnnotationsStorageRetention | undefined;
}
export interface PrivacyDataGovernanceAttributesAnnotationsStorageCustom {
	readonly ads?: PrivacyDataGovernanceAttributesAdsStorage | undefined;
	readonly residency?: PrivacyDataGovernanceAttributesResidencyStorage | undefined;
	readonly search?: PrivacyDataGovernanceAttributesSearchStorage | undefined;
}
export interface PrivacyDataGovernanceAttributesAnnotationsStorageRetention {
	readonly exemptReason?: string | undefined;
	readonly planId?: string | undefined;
	readonly wipeoutProcessor?: string[] | undefined;
}
export interface PrivacyDataGovernanceAttributesAppsCommon {
	readonly content?: string[] | undefined;
	readonly metadata?: string[] | undefined;
	readonly resourceLevelScope?: string[] | undefined;
	readonly workspaceClass?: PrivacyDataGovernanceAttributesAppsCommonWorkspaceClass[] | undefined;
}
export interface PrivacyDataGovernanceAttributesAppsCommonWorkspaceClass {
	readonly dataClass?: string | undefined;
}
export interface PrivacyDataGovernanceAttributesAppsData {
	readonly data?: PrivacyDataGovernanceAttributesAppsDataType | undefined;
	readonly product?: string[] | undefined;
}
export interface PrivacyDataGovernanceAttributesAppsDataType {
	readonly appsCommon?: PrivacyDataGovernanceAttributesAppsCommon | undefined;
	readonly gmail?: PrivacyDataGovernanceAttributesGmail | undefined;
}
export interface PrivacyDataGovernanceAttributesAssurantData {
	readonly customerTenancy?: PrivacyDataGovernanceAttributesAssurantDataCustomerTenancy[] | undefined;
}
export interface PrivacyDataGovernanceAttributesAssurantDataCustomerTenancy {
	readonly context?: string | undefined;
	readonly encryption?: PrivacyDataGovernanceAttributesEncryptionProperties | undefined;
	readonly product?: string | undefined;
}
export interface PrivacyDataGovernanceAttributesAudioData {
	readonly audioCategory?: PrivacyDataGovernanceAttributesAudioDataAudioCategory | undefined;
	readonly identifiesSensitivePersonalCharacteristics?: string | undefined;
	readonly isCopy?: string | undefined;
}
export interface PrivacyDataGovernanceAttributesAudioDataAudioCategory {
	readonly audioAcquired?: string | undefined;
	readonly enterpriseAudio?: PrivacyDataGovernanceAttributesAudioDataAudioCategoryEnterpriseAudio | undefined;
	readonly publicAudio?: string | undefined;
	readonly syntheticAudio?: PrivacyDataGovernanceAttributesAudioDataAudioCategorySyntheticAudio | undefined;
	readonly userAudio?: PrivacyDataGovernanceAttributesAudioDataAudioCategoryUserAudio | undefined;
}
export interface PrivacyDataGovernanceAttributesAudioDataAudioCategoryEnterpriseAudio {
	readonly donated?: string | undefined;
	readonly nonDonated?: string | undefined;
}
export interface PrivacyDataGovernanceAttributesAudioDataAudioCategorySyntheticAudio {
	readonly limitedUse?: string | undefined;
	readonly preApproved?: string | undefined;
}
export interface PrivacyDataGovernanceAttributesAudioDataAudioCategoryUserAudio {
	readonly privateDonated?: string | undefined;
	readonly privateNonDonated?: string | undefined;
	readonly publicAudio?: string | undefined;
}
export interface PrivacyDataGovernanceAttributesAudioProcess {
	readonly processingPurpose?: string[] | undefined;
}
export interface PrivacyDataGovernanceAttributesClassificationCategory {
	readonly audioData?: string | undefined;
	readonly biometric?: string | undefined;
	readonly childrenData?: string | undefined;
	readonly childrenProduct?: string | undefined;
	readonly consumerHealthAndFitness?: string | undefined;
	readonly employee?: string | undefined;
	readonly financial?: string | undefined;
	readonly geoLocation?: PrivacyDataGovernanceAttributesClassificationCategoryGeoLocation | undefined;
	readonly hasXfood?: string | undefined;
	readonly health?: string | undefined;
	readonly hipaa?: string | undefined;
	readonly location?: string | undefined;
	readonly paymentInstrument?: string | undefined;
	readonly publicUserData?: string[] | undefined;
}
export interface PrivacyDataGovernanceAttributesClassificationCategoryGeoLocation {
	readonly coarse?: string | undefined;
	readonly locationType?: string | undefined;
	readonly traces?: string | undefined;
}
export interface PrivacyDataGovernanceAttributesDataProductAssociation {
	readonly anyProduct?: any | undefined;
	readonly products?: PrivacyDataGovernanceAttributesDataProductAssociationProducts | undefined;
}
export interface PrivacyDataGovernanceAttributesDataProductAssociationanyProduct {}
export interface PrivacyDataGovernanceAttributesDataProductAssociationProducts {
	readonly productId?: number[] | undefined;
}
export interface PrivacyDataGovernanceAttributesEncryptionKeyProperties {
	readonly protectedData?: PrivacyDataGovernanceAttributesEncryptionKeyPropertiesProtectedData | undefined;
}
export interface PrivacyDataGovernanceAttributesEncryptionKeyPropertiesProtectedData {
	readonly semanticContext?: string | undefined;
	readonly source?: string[] | undefined;
}
export interface PrivacyDataGovernanceAttributesEncryptionProperties {
	readonly status?: string | undefined;
}
export interface PrivacyDataGovernanceAttributesEssentialOnlyModeData {
	readonly usagePurposes?: string[] | undefined;
}
export interface PrivacyDataGovernanceAttributesEssentialOnlyModeProcess {
	readonly usagePurposes?: string[] | undefined;
}
export interface PrivacyDataGovernanceAttributesExperimentalData {
	readonly dataCopy?: string | undefined;
	readonly datasetTag?: string | undefined;
}
export interface PrivacyDataGovernanceAttributesFaceAuthenticationData {
	readonly faceData?: string | undefined;
	readonly faceDerivedData?: string | undefined;
}
export interface PrivacyDataGovernanceAttributesGeoData {
	readonly dataCategory?: PrivacyDataGovernanceAttributesGeoDataDataCategory | undefined;
}
export interface PrivacyDataGovernanceAttributesGeoDataDataCategory {
	readonly userQuery?: string | undefined;
}
export interface PrivacyDataGovernanceAttributesGmail {
	readonly content?: string[] | undefined;
	readonly metadata?: string[] | undefined;
}
export interface PrivacyDataGovernanceAttributesLocation {
	readonly cloudRegion?: string | undefined;
	readonly cloudZone?: string | undefined;
	readonly cluster?: string | undefined;
	readonly iso3166Region?: string | undefined;
}
export interface PrivacyDataGovernanceAttributesMedicalData {
	readonly sandbox?: PrivacyDataGovernanceAttributesMedicalSandbox | undefined;
}
export interface PrivacyDataGovernanceAttributesMedicalSandbox {
	readonly codename?: string | undefined;
	readonly dataType?: string | undefined;
	readonly prefix?: string | undefined;
	readonly riskLevel?: string | undefined;
	readonly sensitivityLevel?: string | undefined;
}
export interface PrivacyDataGovernanceAttributesMlModelData {
	readonly donated?: string | undefined;
	readonly modelAnonymization?: string | undefined;
	readonly modelArchitectures?: string[] | undefined;
	readonly modelDeployment?: string | undefined;
	readonly modelPersonalization?: string | undefined;
	readonly study?: string | undefined;
	readonly synthesis?: string | undefined;
}
export interface PrivacyDataGovernanceAttributesPaymentsData {
	readonly dataType?: string[] | undefined;
	readonly environment?: string | undefined;
}
export interface PrivacyDataGovernanceAttributesPhotosData {
	readonly benchmarks?: PrivacyDataGovernanceAttributesPhotosDataBenchmarks | undefined;
	readonly dataContents?: PrivacyDataGovernanceAttributesPhotosDataDataContents | undefined;
	readonly mediaType?: string | undefined;
	readonly mediaTypes?: string[] | undefined;
}
export interface PrivacyDataGovernanceAttributesPhotosDataBenchmarks {
	readonly benchmarks?: string | undefined;
	readonly donated?: string | undefined;
}
export interface PrivacyDataGovernanceAttributesPhotosDataDataContents {
	readonly derivedResourceData?: string | undefined;
	readonly faceContents?: PrivacyDataGovernanceAttributesPhotosDataDataContentsFaceRelatedContents | undefined;
	readonly locationContents?: PrivacyDataGovernanceAttributesPhotosDataDataContentsLocationRelatedContents | undefined;
	readonly sharingOrOwnershipState?: string | undefined;
}
export interface PrivacyDataGovernanceAttributesPhotosDataDataContentsFaceRelatedContents {
	readonly faceLandmark?: string | undefined;
	readonly faceRelated?: string | undefined;
	readonly faceTemplate?: string | undefined;
	readonly furtherDerivedFields?: string | undefined;
}
export interface PrivacyDataGovernanceAttributesPhotosDataDataContentsLocationRelatedContents {
	readonly mediaLocation?: string | undefined;
	readonly mediaLocationCoarse?: string | undefined;
}
export interface PrivacyDataGovernanceAttributesPrimaryForPortability {
	readonly isPrimaryForTgId?: { [P in string]: string } | undefined;
}
export interface PrivacyDataGovernanceAttributesProcessingPurpose {
	readonly adsProcessingPurpose?: string[] | undefined;
	readonly crossProductProcessing?: string | undefined;
	readonly purpose?: string | undefined;
}
export interface PrivacyDataGovernanceAttributesProductionImpact {
	readonly bypassAccessControls?: string | undefined;
	readonly bypassLogging?: string | undefined;
	readonly bypassProductionControls?: string | undefined;
	readonly changeProductionEnvironment?: string | undefined;
	readonly impactedTeamProductId?: string[] | undefined;
	readonly other?: boolean | undefined;
	readonly tamperPrimaryData?: string | undefined;
	readonly unconstrainedAccess?: string | undefined;
}
export interface PrivacyDataGovernanceAttributesProductionInfrastructure {
	readonly blastRadiusContained?: boolean | undefined;
	readonly environment?: string | undefined;
	readonly grantsAccessToMpaProtectedEndpointOnly?: boolean | undefined;
	readonly grantsInnocuousWriteAccessOnly?: boolean | undefined;
	readonly grantsReadAccessOnly?: boolean | undefined;
	readonly impactedTeamProductId?: string[] | undefined;
	readonly reason?: PrivacyDataGovernanceAttributesProductionImpact | undefined;
}
export interface PrivacyDataGovernanceAttributesResidencyData {
	readonly contentSubclassification?: string | undefined;
	readonly intendedDataLocations?: string[] | undefined;
	readonly lifecycleState?: string | undefined;
	readonly semanticContext?: string | undefined;
}
export interface PrivacyDataGovernanceAttributesResidencyProcess {
	readonly dataLocationsThatCanBeProcessed?: PrivacyDataGovernanceAttributesResidencyResidencyPolicy[] | undefined;
}
export interface PrivacyDataGovernanceAttributesResidencyResidencyPolicy {
	readonly drData?: PrivacyDataGovernanceAttributesResidencyResidencyPolicyResidencyData | undefined;
	readonly intendedDataLocation?: PrivacyDataGovernanceAttributesLocation[] | undefined;
}
export interface PrivacyDataGovernanceAttributesResidencyResidencyPolicyResidencyData {
	readonly contentSubclassification?: string | undefined;
	readonly lifecycleState?: string | undefined;
	readonly semanticContext?: string | undefined;
	readonly source?: string | undefined;
}
export interface PrivacyDataGovernanceAttributesResidencyStorage {
	readonly dataLocationsThatCanBeStored?: PrivacyDataGovernanceAttributesResidencyResidencyPolicy[] | undefined;
}
export interface PrivacyDataGovernanceAttributesSearchDataSpecs {
	readonly assistantRequestAcceptStatus?: string[] | undefined;
	readonly dataCategory?: PrivacyDataGovernanceAttributesSearchDataSpecsDataCategory | undefined;
	readonly dataSources?: string[] | undefined;
	readonly hasFinalIntentHealthFitness?: string | undefined;
	readonly identifierTypes?: string[] | undefined;
	readonly productSources?: string[] | undefined;
	readonly transformationCategories?: string[] | undefined;
	readonly usagePurposes?: string[] | undefined;
}
export interface PrivacyDataGovernanceAttributesSearchDataSpecsDataCategory {
	readonly userQuery?: string | undefined;
}
export interface PrivacyDataGovernanceAttributesSearchStorage {
	readonly useControlMethods?: string[] | undefined;
}
export interface ProjectProperties {
	readonly properties?: Property[] | undefined;
}
export interface Property {
	readonly description?: string | undefined;
	readonly name?: string | undefined;
	readonly type?: string | undefined;
}
export interface Provisioning {
	readonly provider?: string | undefined;
	readonly settings?: { [P in string]: any } | undefined;
}
export interface ProxyServiceConfig {}
export interface Publishing {
	readonly apiShortName?: string | undefined;
	readonly bugAssigneeEmail?: string | undefined;
	readonly codeownerGithubTeams?: string[] | undefined;
	readonly docTagPrefix?: string | undefined;
	readonly documentationUri?: string | undefined;
	readonly githubLabel?: string | undefined;
	readonly librarySettings?: ClientLibrarySettings[] | undefined;
	readonly methodSettings?: MethodSettings[] | undefined;
	readonly newIssueUri?: string | undefined;
	readonly organization?: string | undefined;
	readonly publishingDelay?: string | undefined;
}
export interface PythonSettings {
	readonly common?: CommonLanguageSettings | undefined;
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
export interface QuotaConfig {
	readonly customEnforcementMetrics?: string[] | undefined;
	readonly forceRegionalizedEnforcementMetrics?: string[] | undefined;
	readonly ignoreProjectDefaultMetrics?: string[] | undefined;
	readonly maxCreditPercentages?: { [P in string]: number } | undefined;
	readonly orgQuotaMetrics?: string[] | undefined;
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
export interface RenameMethodRule {
	readonly renameTo?: string | undefined;
	readonly selector?: string | undefined;
}
export interface RenameRule {
	readonly renameTo?: string | undefined;
	readonly selector?: string | undefined;
}
export interface ReservedRange {
	readonly end?: number | undefined;
	readonly start?: number | undefined;
}
export interface ResourceContainer {
	readonly rules?: ResourceContainerRule[] | undefined;
}
export interface ResourceContainerRule {
	readonly selector?: string | undefined;
	readonly type?: string | undefined;
}
export interface ResourceDescriptor {
	readonly history?: string | undefined;
	readonly nameDescriptor?: ResourceNameDescriptor[] | undefined;
	readonly nameField?: string | undefined;
	readonly pattern?: string[] | undefined;
	readonly plural?: string | undefined;
	readonly singular?: string | undefined;
	readonly style?: string[] | undefined;
	readonly type?: string | undefined;
}
export interface ResourceNameDescriptor {
	readonly locationExtractor?: string | undefined;
	readonly parentNameExtractor?: string | undefined;
	readonly parentType?: string | undefined;
	readonly pattern?: string | undefined;
}
export interface RetentionBackfillPolicy {
	readonly fromDate?: Date | undefined;
	readonly mostRecentDays?: number | undefined;
	readonly reprocessingStrategy?: string | undefined;
	readonly reprocessingVersion?: number | undefined;
}
export interface RoleBinding {
	readonly adminAccessControl?: AdminAccessControlConfig | undefined;
	readonly conditions?: BindingCondition[] | undefined;
	readonly description?: string | undefined;
	readonly disableAdminAccessControl?: DisabledAdminAccessControlConfig | undefined;
	readonly members: Members;
	readonly reviewerConfig?: MpaReviewerConfig | undefined;
	readonly role: string;
}
export interface RpcSecurityPolicy {
	readonly audit?: AuditingConfig | undefined;
	readonly disableChecks?: string[] | undefined;
	readonly disableRewrites?: string[] | undefined;
	readonly enableChecks?: string[] | undefined;
	readonly enableLabelEnforcement?: boolean | undefined;
	readonly enableRewrites?: string[] | undefined;
	readonly endpointPolicies?: EndpointPolicy[] | undefined;
	readonly legacyAllowLabelMappingsWithoutLabelEnforcement?: boolean | undefined;
	readonly mapping?: RpcSecurityPolicyMapping[] | undefined;
	readonly methodPolicies?: MethodPolicy[] | undefined;
	readonly policyRequirement?: PolicyRequirement | undefined;
	readonly rpcServices?: RpcService[] | undefined;
	readonly systemAuthorizationPolicy?: Policy | undefined;
	readonly trustEsfAuthentication?: boolean | undefined;
}
export interface RpcSecurityPolicyMapping {
	readonly action?: string[] | undefined;
	readonly admin?: AdminPolicy | undefined;
	readonly authenticationPolicy: AuthenticationPolicy;
	readonly authorizationMethod?: AuthorizationMethod[] | undefined;
	readonly authorizationMode?: string | undefined;
	readonly credsAssertion?: CredsAssertion[] | undefined;
	readonly crossProductSharing?: CrossProductSharing | undefined;
	readonly crossProductSharingDryRun?: CrossProductSharing | undefined;
	readonly dataGovernanceAnnotations?: PrivacyDataGovernanceAttributesAnnotations | undefined;
	readonly disableChecks?: string[] | undefined;
	readonly disableRewrites?: string[] | undefined;
	readonly enableChecks?: string[] | undefined;
	readonly enableRewrites?: string[] | undefined;
	readonly esfConfig?: EsfConfig | undefined;
	readonly httpPath?: string[] | undefined;
	readonly label?: string[] | undefined;
	readonly methodQualifier?: MethodQualifier | undefined;
	readonly permissionToCheck?: string | undefined;
	readonly rpcMethod?: string[] | undefined;
}
export interface RpcService {
	readonly name?: string | undefined;
	readonly renamedAs?: string | undefined;
}
export interface RubySettings {
	readonly common?: CommonLanguageSettings | undefined;
}
export interface Rule {
	readonly action: string;
	readonly conditions?: Condition[] | undefined;
	readonly description?: string | undefined;
	readonly in?: string[] | undefined;
	readonly logConfig?: LogConfig[] | undefined;
	readonly notIn?: string[] | undefined;
	readonly permissions?: string[] | undefined;
}
export interface Service {
	readonly analytics?: Analytics | undefined;
	readonly apis?: Api[] | undefined;
	readonly auditing?: Auditing | undefined;
	readonly authentication?: Authentication | undefined;
	readonly backend?: Backend | undefined;
	readonly billing?: Billing | undefined;
	readonly census?: Census | undefined;
	readonly configVersion?: number | undefined;
	readonly context?: Context | undefined;
	readonly control?: Control | undefined;
	readonly customError?: CustomError | undefined;
	readonly derivedData?: { [P in string]: any } | undefined;
	readonly discovery?: Discovery | undefined;
	readonly documentation?: Documentation | undefined;
	readonly endpoints?: Endpoint[] | undefined;
	readonly enums?: Enum[] | undefined;
	readonly experimental?: Experimental | undefined;
	readonly features?: string[] | undefined;
	readonly filtering?: Filtering | undefined;
	readonly http?: Http | undefined;
	readonly iam?: Iam | undefined;
	readonly id?: string | undefined;
	readonly indexedResources?: IndexedResource | undefined;
	readonly labels?: LabelDescriptor[] | undefined;
	readonly legacy?: Legacy | undefined;
	readonly logging?: Logging | undefined;
	readonly logs?: LogDescriptor[] | undefined;
	readonly metrics?: MetricDescriptor[] | undefined;
	readonly migration?: Migration | undefined;
	readonly monitoredResources?: MonitoredResourceDescriptor[] | undefined;
	readonly monitoring?: Monitoring | undefined;
	readonly name?: string | undefined;
	readonly operations?: Operations | undefined;
	readonly producerProjectId?: string | undefined;
	readonly projectProperties?: ProjectProperties | undefined;
	readonly publishing?: Publishing | undefined;
	readonly quota?: Quota | undefined;
	readonly resourceContainer?: ResourceContainer | undefined;
	readonly resources?: ResourceDescriptor[] | undefined;
	readonly rpcSecurityPolicy?: RpcSecurityPolicy | undefined;
	readonly sharing?: Sharing[] | undefined;
	readonly slo?: Slo | undefined;
	readonly sourceInfo?: SourceInfo | undefined;
	readonly supportedLocation?: SupportedLocation | undefined;
	readonly systemParameters?: SystemParameters | undefined;
	readonly systemTypes?: Type[] | undefined;
	readonly title?: string | undefined;
	readonly types?: Type[] | undefined;
	readonly urlMaps?: UrlMap[] | undefined;
	readonly usage?: Usage | undefined;
	readonly visibility?: Visibility | undefined;
}
export interface ServiceControlAcl {
	readonly labelKey?: string | undefined;
	readonly model?: string | undefined;
}
export interface ServiceControlConfig {
	readonly analytics?: AnalyticsConfig | undefined;
	readonly destinations?: Destination[] | undefined;
}
export interface ServiceDescriptorProto {
	readonly method?: MethodDescriptorProto[] | undefined;
	readonly name?: string | undefined;
	readonly options?: ServiceOptions | undefined;
	readonly stream?: StreamDescriptorProto[] | undefined;
}
export interface ServiceIdentity {
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly serviceAccountParent?: string | undefined;
}
export interface ServiceManagementConfig {
	readonly buildMode?: string | undefined;
	readonly configDestination?: string | undefined;
	readonly deploymentMode?: string | undefined;
	readonly includeLegacyComponents?: boolean | undefined;
	readonly prodServiceName?: string | undefined;
	readonly universeConfig?: UniverseConfig | undefined;
}
export interface ServiceOptions {
	readonly ccDefaultInvocableApi?: boolean | undefined;
	readonly deprecated?: boolean | undefined;
	readonly failureDetectionDelay?: number | undefined;
	readonly multicastStub?: boolean | undefined;
	readonly uninterpretedOption?: UninterpretedOption[] | undefined;
}
export interface Sharing {
	readonly iamPermissions?: string[] | undefined;
	readonly iamRoles?: string[] | undefined;
	readonly resourceTypes?: string[] | undefined;
	readonly targetServices?: string[] | undefined;
}
export interface Slo {
	readonly calendarPeriod?: string | undefined;
	readonly metadata?: SloRepoMetadata | undefined;
	readonly objectives?: SloObjective[] | undefined;
	readonly reportResourceLocation?: boolean | undefined;
	readonly rollingPeriod?: string | undefined;
	readonly rules?: SloRule[] | undefined;
}
export interface SloObjective {
	readonly availability?: any | undefined;
	readonly goal?: number | undefined;
	readonly latency?: LatencyCriteria | undefined;
	readonly locations?: string | undefined;
	readonly name?: string | undefined;
	readonly operationAvailability?: any | undefined;
	readonly operationLatency?: OperationLatencyCriteria | undefined;
}
export interface SloRepoMetadata {
	readonly approvers?: string[] | undefined;
	readonly approveTime?: string | undefined;
	readonly emails?: string[] | undefined;
	readonly enablePerConsumerSli?: boolean | undefined;
	readonly enableSlomatic?: boolean | undefined;
	readonly learnmoreUrl?: string | undefined;
	readonly owningGroup?: string | undefined;
	readonly taxonomyId?: string | undefined;
	readonly teams?: string[] | undefined;
}
export interface SloRule {
	readonly name?: string | undefined;
	readonly objectives?: string[] | undefined;
	readonly selector?: string | undefined;
}
export interface SourceCodeInfo {
	readonly location?: Location[] | undefined;
}
export interface SourceContext {
	readonly fileName?: string | undefined;
}
export interface SourceInfo {
	readonly sourceFiles?: Array<{ [P in string]: any }> | undefined;
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
export interface SupportedLocation {
	readonly groups?: LocationGroup[] | undefined;
	readonly locationId?: string | undefined;
	readonly locationPolicyOverride?: LocationPolicy | undefined;
	readonly regions?: string | undefined;
	readonly zones?: string | undefined;
}
export interface SystemParameter {
	readonly httpHeader?: string | undefined;
	readonly name?: string | undefined;
	readonly urlQueryParameter?: string | undefined;
}
export interface SystemParameterRule {
	readonly parameters?: SystemParameter[] | undefined;
	readonly selector?: string | undefined;
}
export interface SystemParameters {
	readonly rules?: SystemParameterRule[] | undefined;
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
export interface TranslatorConfig {
	readonly addTrailingZerosForTimestampAndDuration?: boolean | undefined;
	readonly dropEmptyFields?: boolean | undefined;
	readonly jsonTranslationMaxRecursionDepth?: number | undefined;
	readonly jspbAcceptNegativeUnsignedNumber?: boolean | undefined;
	readonly jspbPivot?: number | undefined;
	readonly jspbVariant?: string | undefined;
	readonly outputAllPrimitiveFieldsToJson?: boolean | undefined;
	readonly selector?: string | undefined;
	readonly structIntegersAsStrings?: boolean | undefined;
	readonly useWebSafeBase64ForByteFields?: boolean | undefined;
}
export interface TrustedTesterList {
	readonly gaiaGroupIds?: string[] | undefined;
}
export interface Type {
	readonly fields?: Field[] | undefined;
	readonly name?: string | undefined;
	readonly oneofs?: string[] | undefined;
	readonly options?: Option[] | undefined;
	readonly sourceContext?: SourceContext | undefined;
	readonly syntax?: string | undefined;
}
export interface UbermintConfig {
	readonly consumerAddress?: string | undefined;
	readonly serviceAccountAddress?: string | undefined;
	readonly yawnsOnlyServiceAccountUberminterAddress?: string | undefined;
}
export interface UberMintConfig {
	readonly platforms?: string[] | undefined;
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
export interface UniverseConfig {
	readonly name?: string | undefined;
}
export interface UpgradedOption {
	readonly name?: string | undefined;
	readonly value?: string | undefined;
}
export interface UrlMap {
	readonly defaultBackend?: GfeTarget | undefined;
	readonly description?: string | undefined;
	readonly httpConfig?: HttpFrontendOptions | undefined;
	readonly name?: string | undefined;
	readonly rules?: UrlMapRule[] | undefined;
}
export interface UrlMapRule {
	readonly backend?: GfeTarget | undefined;
	readonly examplePaths?: string[] | undefined;
	readonly legacyGfeService?: LegacyGfeService | undefined;
	readonly pathRegex?: string[] | undefined;
	readonly selector?: string | undefined;
}
export interface Usage {
	readonly activationHooks?: string[] | undefined;
	readonly deactivationHooks?: string[] | undefined;
	readonly dependsOnServices?: string[] | undefined;
	readonly producerNotificationChannel?: string | undefined;
	readonly requirements?: string[] | undefined;
	readonly rules?: UsageRule[] | undefined;
	readonly serviceAccess?: string | undefined;
	readonly serviceIdentity?: ServiceIdentity | undefined;
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
export interface UsageManagerRule {
	readonly address?: string | undefined;
	readonly enableCache?: boolean | undefined;
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
export interface UserAttributionCondition {
	readonly includes?: string[] | undefined;
	readonly localProdGroups?: string[] | undefined;
	readonly prodGroups?: string[] | undefined;
	readonly prodUsers?: string[] | undefined;
	readonly self?: any | undefined;
}
export interface Visibility {
	readonly rules?: VisibilityRule[] | undefined;
}
export interface VisibilityRule {
	readonly restriction?: string | undefined;
	readonly selector?: string | undefined;
}
export interface WebChannelConfig {
	readonly selector?: string | undefined;
	readonly urlPaths?: string[] | undefined;
}
export interface Zanzibar {}
export interface ZanzibarAuthorizationCheckCondition {}
export default {
	ServicesConfigs: ServicesConfigs,
};

import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class CdnWebApplicationFirewallPolicies
	extends ArmResource<CdnWebApplicationFirewallPoliciesComponentInputs>
	implements CdnWebApplicationFirewallPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: CdnWebApplicationFirewallPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.Cdn/CdnWebApplicationFirewallPolicies", "2020-09-01", options);
	}
	public readonly apiVersion: "2020-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.Cdn/CdnWebApplicationFirewallPolicies";
}
export interface CdnWebApplicationFirewallPoliciesComponentOutputs {
	readonly apiVersion: "2020-09-01";
	readonly id: string;
	readonly type: "Microsoft.Cdn/CdnWebApplicationFirewallPolicies";
}
export interface CdnWebApplicationFirewallPoliciesComponentInputs {
	readonly etag?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: CdnWebApplicationFirewallPolicyProperties;
	readonly sku: Sku;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class profiles extends ArmResource<profilesComponentInputs> implements profilesComponentOutputs {
	constructor(entity: ADKEntity, options: profilesComponentInputs) {
		super(entity, options.name, "Microsoft.Cdn/profiles", "2020-09-01", options);
	}
	public readonly apiVersion: "2020-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.Cdn/profiles";
}
export interface profilesComponentOutputs {
	readonly apiVersion: "2020-09-01";
	readonly id: string;
	readonly type: "Microsoft.Cdn/profiles";
}
export interface profilesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: ProfileProperties;
	readonly sku: Sku;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class profiles_afdEndpoints
	extends ArmResource<profiles_afdEndpointsComponentInputs>
	implements profiles_afdEndpointsComponentOutputs
{
	constructor(entity: ADKEntity, options: profiles_afdEndpointsComponentInputs) {
		super(entity, options.name, "Microsoft.Cdn/profiles/afdEndpoints", "2020-09-01", options);
	}
	public readonly apiVersion: "2020-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.Cdn/profiles/afdEndpoints";
}
export interface profiles_afdEndpointsComponentOutputs {
	readonly apiVersion: "2020-09-01";
	readonly id: string;
	readonly type: "Microsoft.Cdn/profiles/afdEndpoints";
}
export interface profiles_afdEndpointsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: AFDEndpointProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class profiles_afdEndpoints_routes
	extends ArmResource<profiles_afdEndpoints_routesComponentInputs>
	implements profiles_afdEndpoints_routesComponentOutputs
{
	constructor(entity: ADKEntity, options: profiles_afdEndpoints_routesComponentInputs) {
		super(entity, options.name, "Microsoft.Cdn/profiles/afdEndpoints/routes", "2020-09-01", options);
	}
	public readonly apiVersion: "2020-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.Cdn/profiles/afdEndpoints/routes";
}
export interface profiles_afdEndpoints_routesComponentOutputs {
	readonly apiVersion: "2020-09-01";
	readonly id: string;
	readonly type: "Microsoft.Cdn/profiles/afdEndpoints/routes";
}
export interface profiles_afdEndpoints_routesComponentInputs {
	readonly name: string;
	readonly properties?: RouteProperties;
	readonly systemData?: SystemData;
}
export class profiles_customDomains
	extends ArmResource<profiles_customDomainsComponentInputs>
	implements profiles_customDomainsComponentOutputs
{
	constructor(entity: ADKEntity, options: profiles_customDomainsComponentInputs) {
		super(entity, options.name, "Microsoft.Cdn/profiles/customDomains", "2020-09-01", options);
	}
	public readonly apiVersion: "2020-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.Cdn/profiles/customDomains";
}
export interface profiles_customDomainsComponentOutputs {
	readonly apiVersion: "2020-09-01";
	readonly id: string;
	readonly type: "Microsoft.Cdn/profiles/customDomains";
}
export interface profiles_customDomainsComponentInputs {
	readonly name: string;
	readonly properties?: AFDDomainProperties;
	readonly systemData?: SystemData;
}
export class profiles_endpoints
	extends ArmResource<profiles_endpointsComponentInputs>
	implements profiles_endpointsComponentOutputs
{
	constructor(entity: ADKEntity, options: profiles_endpointsComponentInputs) {
		super(entity, options.name, "Microsoft.Cdn/profiles/endpoints", "2020-09-01", options);
	}
	public readonly apiVersion: "2020-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.Cdn/profiles/endpoints";
}
export interface profiles_endpointsComponentOutputs {
	readonly apiVersion: "2020-09-01";
	readonly id: string;
	readonly type: "Microsoft.Cdn/profiles/endpoints";
}
export interface profiles_endpointsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: EndpointProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class profiles_endpoints_customDomains
	extends ArmResource<profiles_endpoints_customDomainsComponentInputs>
	implements profiles_endpoints_customDomainsComponentOutputs
{
	constructor(entity: ADKEntity, options: profiles_endpoints_customDomainsComponentInputs) {
		super(entity, options.name, "Microsoft.Cdn/profiles/endpoints/customDomains", "2020-09-01", options);
	}
	public readonly apiVersion: "2020-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.Cdn/profiles/endpoints/customDomains";
}
export interface profiles_endpoints_customDomainsComponentOutputs {
	readonly apiVersion: "2020-09-01";
	readonly id: string;
	readonly type: "Microsoft.Cdn/profiles/endpoints/customDomains";
}
export interface profiles_endpoints_customDomainsComponentInputs {
	readonly name: string;
	readonly properties?: CustomDomainPropertiesParametersOrCustomDomainProperties;
	readonly systemData?: SystemData;
}
export class profiles_endpoints_originGroups
	extends ArmResource<profiles_endpoints_originGroupsComponentInputs>
	implements profiles_endpoints_originGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: profiles_endpoints_originGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.Cdn/profiles/endpoints/originGroups", "2020-09-01", options);
	}
	public readonly apiVersion: "2020-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.Cdn/profiles/endpoints/originGroups";
}
export interface profiles_endpoints_originGroupsComponentOutputs {
	readonly apiVersion: "2020-09-01";
	readonly id: string;
	readonly type: "Microsoft.Cdn/profiles/endpoints/originGroups";
}
export interface profiles_endpoints_originGroupsComponentInputs {
	readonly name: string;
	readonly properties?: OriginGroupProperties;
	readonly systemData?: SystemData;
}
export class profiles_endpoints_origins
	extends ArmResource<profiles_endpoints_originsComponentInputs>
	implements profiles_endpoints_originsComponentOutputs
{
	constructor(entity: ADKEntity, options: profiles_endpoints_originsComponentInputs) {
		super(entity, options.name, "Microsoft.Cdn/profiles/endpoints/origins", "2020-09-01", options);
	}
	public readonly apiVersion: "2020-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.Cdn/profiles/endpoints/origins";
}
export interface profiles_endpoints_originsComponentOutputs {
	readonly apiVersion: "2020-09-01";
	readonly id: string;
	readonly type: "Microsoft.Cdn/profiles/endpoints/origins";
}
export interface profiles_endpoints_originsComponentInputs {
	readonly name: string;
	readonly properties?: OriginProperties;
	readonly systemData?: SystemData;
}
export class profiles_originGroups
	extends ArmResource<profiles_originGroupsComponentInputs>
	implements profiles_originGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: profiles_originGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.Cdn/profiles/originGroups", "2020-09-01", options);
	}
	public readonly apiVersion: "2020-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.Cdn/profiles/originGroups";
}
export interface profiles_originGroupsComponentOutputs {
	readonly apiVersion: "2020-09-01";
	readonly id: string;
	readonly type: "Microsoft.Cdn/profiles/originGroups";
}
export interface profiles_originGroupsComponentInputs {
	readonly name: string;
	readonly properties?: AFDOriginGroupProperties;
	readonly systemData?: SystemData;
}
export class profiles_originGroups_origins
	extends ArmResource<profiles_originGroups_originsComponentInputs>
	implements profiles_originGroups_originsComponentOutputs
{
	constructor(entity: ADKEntity, options: profiles_originGroups_originsComponentInputs) {
		super(entity, options.name, "Microsoft.Cdn/profiles/originGroups/origins", "2020-09-01", options);
	}
	public readonly apiVersion: "2020-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.Cdn/profiles/originGroups/origins";
}
export interface profiles_originGroups_originsComponentOutputs {
	readonly apiVersion: "2020-09-01";
	readonly id: string;
	readonly type: "Microsoft.Cdn/profiles/originGroups/origins";
}
export interface profiles_originGroups_originsComponentInputs {
	readonly name: string;
	readonly properties?: AFDOriginProperties;
	readonly systemData?: SystemData;
}
export class profiles_ruleSets
	extends ArmResource<profiles_ruleSetsComponentInputs>
	implements profiles_ruleSetsComponentOutputs
{
	constructor(entity: ADKEntity, options: profiles_ruleSetsComponentInputs) {
		super(entity, options.name, "Microsoft.Cdn/profiles/ruleSets", "2020-09-01", options);
	}
	public readonly apiVersion: "2020-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.Cdn/profiles/ruleSets";
}
export interface profiles_ruleSetsComponentOutputs {
	readonly apiVersion: "2020-09-01";
	readonly id: string;
	readonly type: "Microsoft.Cdn/profiles/ruleSets";
}
export interface profiles_ruleSetsComponentInputs {
	readonly name: string;
	readonly properties?: RuleSetProperties;
	readonly systemData?: SystemData;
}
export class profiles_ruleSets_rules
	extends ArmResource<profiles_ruleSets_rulesComponentInputs>
	implements profiles_ruleSets_rulesComponentOutputs
{
	constructor(entity: ADKEntity, options: profiles_ruleSets_rulesComponentInputs) {
		super(entity, options.name, "Microsoft.Cdn/profiles/ruleSets/rules", "2020-09-01", options);
	}
	public readonly apiVersion: "2020-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.Cdn/profiles/ruleSets/rules";
}
export interface profiles_ruleSets_rulesComponentOutputs {
	readonly apiVersion: "2020-09-01";
	readonly id: string;
	readonly type: "Microsoft.Cdn/profiles/ruleSets/rules";
}
export interface profiles_ruleSets_rulesComponentInputs {
	readonly name: string;
	readonly properties?: RuleProperties;
	readonly systemData?: SystemData;
}
export class profiles_secrets
	extends ArmResource<profiles_secretsComponentInputs>
	implements profiles_secretsComponentOutputs
{
	constructor(entity: ADKEntity, options: profiles_secretsComponentInputs) {
		super(entity, options.name, "Microsoft.Cdn/profiles/secrets", "2020-09-01", options);
	}
	public readonly apiVersion: "2020-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.Cdn/profiles/secrets";
}
export interface profiles_secretsComponentOutputs {
	readonly apiVersion: "2020-09-01";
	readonly id: string;
	readonly type: "Microsoft.Cdn/profiles/secrets";
}
export interface profiles_secretsComponentInputs {
	readonly name: string;
	readonly properties?: SecretProperties;
	readonly systemData?: SystemData;
}
export class profiles_securityPolicies
	extends ArmResource<profiles_securityPoliciesComponentInputs>
	implements profiles_securityPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: profiles_securityPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.Cdn/profiles/securityPolicies", "2020-09-01", options);
	}
	public readonly apiVersion: "2020-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.Cdn/profiles/securityPolicies";
}
export interface profiles_securityPoliciesComponentOutputs {
	readonly apiVersion: "2020-09-01";
	readonly id: string;
	readonly type: "Microsoft.Cdn/profiles/securityPolicies";
}
export interface profiles_securityPoliciesComponentInputs {
	readonly name: string;
	readonly properties?: SecurityPolicyProperties;
	readonly systemData?: SystemData;
}
export interface AFDDomainHttpsParameters {
	readonly certificateType: "CustomerCertificate" | "ManagedCertificate";
	readonly minimumTlsVersion?: "TLS10";
	readonly secret?: ResourceReference;
}
export interface AFDDomainProperties {
	readonly azureDnsZone?: ResourceReference;
	readonly deploymentStatus?: "Failed" | "InProgress" | "NotStarted" | "Succeeded";
	readonly domainValidationState?:
		| "Approved"
		| "Pending"
		| "PendingRevalidation"
		| "Submitting"
		| "TimedOut"
		| "Unknown";
	readonly hostName: string;
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly tlsSettings?: AFDDomainHttpsParameters;
	readonly validationProperties?: DomainValidationProperties;
}
export interface AFDEndpointProperties {
	readonly deploymentStatus?: "Failed" | "InProgress" | "NotStarted" | "Succeeded";
	readonly enabledState?: "Disabled" | "Enabled";
	readonly hostName?: string;
	readonly originResponseTimeoutSeconds?: number;
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface AFDOriginGroupProperties {
	readonly deploymentStatus?: "Failed" | "InProgress" | "NotStarted" | "Succeeded";
	readonly healthProbeSettings?: HealthProbeParameters;
	readonly loadBalancingSettings?: LoadBalancingSettingsParameters;
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly responseBasedAfdOriginErrorDetectionSettings?: ResponseBasedOriginErrorDetectionParameters;
	readonly sessionAffinityState?: "Disabled" | "Enabled";
	readonly trafficRestorationTimeToHealedOrNewEndpointsInMinutes?: number;
}
export interface AFDOriginProperties {
	readonly azureOrigin?: ResourceReference;
	readonly deploymentStatus?: "Failed" | "InProgress" | "NotStarted" | "Succeeded";
	readonly enabledState?: "Disabled" | "Enabled";
	readonly hostName?: string;
	readonly httpPort?: number;
	readonly httpsPort?: number;
	readonly originHostHeader?: string;
	readonly priority?: number;
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly sharedPrivateLinkResource?: SharedPrivateLinkResourceProperties;
	readonly weight?: number;
}
export interface CacheExpirationActionParameters {
	readonly "@odata.type": "#Microsoft.Azure.Cdn.Models.DeliveryRuleCacheExpirationActionParameters";
	readonly cacheBehavior: "BypassCache" | "Override" | "SetIfMissing";
	readonly cacheDuration?: string;
	readonly cacheType: "All";
}
export interface CacheKeyQueryStringActionParameters {
	readonly "@odata.type": "#Microsoft.Azure.Cdn.Models.DeliveryRuleCacheKeyQueryStringBehaviorActionParameters";
	readonly queryParameters?: string;
	readonly queryStringBehavior: "Exclude" | "ExcludeAll" | "Include" | "IncludeAll";
}
export interface CdnCertificateSourceParameters {
	readonly "@odata.type": "#Microsoft.Azure.Cdn.Models.CdnCertificateSourceParameters";
	readonly certificateType: "Dedicated" | "Shared";
}
export interface CdnEndpoint {
	readonly id?: string;
}
export interface CdnWebApplicationFirewallPolicyProperties {
	readonly customRules?: CustomRuleList;
	readonly endpointLinks?: CdnEndpoint[];
	readonly managedRules?: ManagedRuleSetList;
	readonly policySettings?: PolicySettings;
	readonly provisioningState?: "Creating" | "Failed" | "Succeeded";
	readonly rateLimitRules?: RateLimitRuleList;
	readonly resourceState?: "Creating" | "Deleting" | "Disabled" | "Disabling" | "Enabled" | "Enabling";
}
export interface CompressionSettings {
	readonly contentTypesToCompress?: string[];
	readonly isCompressionEnabled?: boolean;
}
export interface CookiesMatchConditionParameters {
	readonly "@odata.type": "#Microsoft.Azure.Cdn.Models.DeliveryRuleCookiesConditionParameters";
	readonly matchValues?: string[];
	readonly negateCondition?: boolean;
	readonly operator:
		| "any"
		| "BeginsWith"
		| "Contains"
		| "EndsWith"
		| "Equal"
		| "GreaterThan"
		| "GreaterThanOrEqual"
		| "LessThan"
		| "LessThanOrEqual"
		| "RegEx";
	readonly selector?: string;
	readonly transforms?: "Lowercase" | "RemoveNulls" | "Trim" | "Uppercase" | "UrlDecode" | "UrlEncode"[];
}
export interface CustomDomainHttpsParameters {
	readonly minimumTlsVersion?: "None" | "TLS10";
	readonly protocolType: "IPBased" | "ServerNameIndication";
}
export interface CustomDomainPropertiesParametersOrCustomDomainProperties {
	readonly customHttpsParameters?: CustomDomainHttpsParameters;
	readonly customHttpsProvisioningState?: "Disabled" | "Disabling" | "Enabled" | "Enabling" | "Failed";
	readonly customHttpsProvisioningSubstate?:
		| "CertificateDeleted"
		| "CertificateDeployed"
		| "DeletingCertificate"
		| "DeployingCertificate"
		| "DomainControlValidationRequestApproved"
		| "DomainControlValidationRequestRejected"
		| "DomainControlValidationRequestTimedOut"
		| "IssuingCertificate"
		| "PendingDomainControlValidationREquestApproval"
		| "SubmittingDomainControlValidationRequest";
	readonly hostName: string;
	readonly provisioningState?: string;
	readonly resourceState?: "Active" | "Creating" | "Deleting";
	readonly validationData?: string;
}
export interface CustomRule {
	readonly action: "Allow" | "Block" | "Log" | "Redirect";
	readonly enabledState?: "Disabled" | "Enabled";
	readonly matchConditions: MatchCondition[];
	readonly name: string;
	readonly priority: number;
}
export interface CustomRuleList {
	readonly rules?: CustomRule[];
}
export interface DeepCreatedOrigin {
	readonly name: string;
	readonly properties?: DeepCreatedOriginProperties;
}
export interface DeepCreatedOriginGroup {
	readonly name: string;
	readonly properties?: DeepCreatedOriginGroupProperties;
}
export interface DeepCreatedOriginGroupProperties {
	readonly healthProbeSettings?: HealthProbeParameters;
	readonly origins: ResourceReference[];
	readonly responseBasedOriginErrorDetectionSettings?: ResponseBasedOriginErrorDetectionParameters;
	readonly trafficRestorationTimeToHealedOrNewEndpointsInMinutes?: number;
}
export interface DeepCreatedOriginProperties {
	readonly enabled?: boolean;
	readonly hostName: string;
	readonly httpPort?: number;
	readonly httpsPort?: number;
	readonly originHostHeader?: string;
	readonly priority?: number;
	readonly privateLinkAlias?: string;
	readonly privateLinkApprovalMessage?: string;
	readonly privateLinkLocation?: string;
	readonly privateLinkResourceId?: string;
	readonly weight?: number;
}
export interface DeliveryRule {
	readonly actions: DeliveryRuleActionAutoGenerated[];
	readonly conditions?: DeliveryRuleCondition[];
	readonly name?: string;
	readonly order: number;
}
export interface DeliveryRuleActionAutoGenerated {}
export interface DeliveryRuleCondition {}
export interface DomainValidationProperties {
	readonly expirationDate?: string;
	readonly validationToken?: string;
}
export interface EndpointProperties {
	readonly contentTypesToCompress?: string[];
	readonly defaultOriginGroup?: ResourceReference;
	readonly deliveryPolicy?: EndpointPropertiesUpdateParametersDeliveryPolicy;
	readonly geoFilters?: GeoFilter[];
	readonly hostName?: string;
	readonly isCompressionEnabled?: boolean;
	readonly isHttpAllowed?: boolean;
	readonly isHttpsAllowed?: boolean;
	readonly optimizationType?:
		| "DynamicSiteAcceleration"
		| "GeneralMediaStreaming"
		| "GeneralWebDelivery"
		| "LargeFileDownload"
		| "VideoOnDemandMediaStreaming";
	readonly originGroups?: DeepCreatedOriginGroup[];
	readonly originHostHeader?: string;
	readonly originPath?: string;
	readonly origins: DeepCreatedOrigin[];
	readonly probePath?: string;
	readonly provisioningState?: string;
	readonly queryStringCachingBehavior?: "BypassCaching" | "IgnoreQueryString" | "NotSet";
	readonly resourceState?: "Creating" | "Deleting" | "Running" | "Starting" | "Stopped" | "Stopping";
	readonly urlSigningKeys?: UrlSigningKey[];
	readonly webApplicationFirewallPolicyLink?: EndpointPropertiesUpdateParametersWebApplicationFirewallPolicyLink;
}
export interface EndpointPropertiesUpdateParametersDeliveryPolicy {
	readonly description?: string;
	readonly rules: DeliveryRule[];
}
export interface EndpointPropertiesUpdateParametersWebApplicationFirewallPolicyLink {
	readonly id?: string;
}
export interface GeoFilter {
	readonly action: "Allow";
	readonly countryCodes: string[];
	readonly relativePath: string;
}
export interface HeaderActionParameters {
	readonly "@odata.type": "#Microsoft.Azure.Cdn.Models.DeliveryRuleHeaderActionParameters";
	readonly headerAction: "Append" | "Delete" | "Overwrite";
	readonly headerName: string;
	readonly value?: string;
}
export interface HealthProbeParameters {
	readonly probeIntervalInSeconds?: number;
	readonly probePath?: string;
	readonly probeProtocol?: "Http" | "Https";
	readonly probeRequestType?: "GET" | "HEAD";
}
export interface HttpErrorRangeParameters {
	readonly begin?: number;
	readonly end?: number;
}
export interface HttpVersionMatchConditionParameters {
	readonly "@odata.type": "#Microsoft.Azure.Cdn.Models.DeliveryRuleHttpVersionConditionParameters";
	readonly matchValues?: string[];
	readonly negateCondition?: boolean;
	readonly operator: "Equal";
}
export interface IsDeviceMatchConditionParameters {
	readonly "@odata.type": "#Microsoft.Azure.Cdn.Models.DeliveryRuleIsDeviceConditionParameters";
	readonly matchValues?: "Desktop" | "Mobile"[];
	readonly negateCondition?: boolean;
	readonly operator: "Equal";
	readonly transforms?: "Lowercase" | "RemoveNulls" | "Trim" | "Uppercase" | "UrlDecode" | "UrlEncode"[];
}
export interface KeyVaultCertificateSourceParameters {
	readonly "@odata.type": "#Microsoft.Azure.Cdn.Models.KeyVaultCertificateSourceParameters";
	readonly deleteRule: "NoAction";
	readonly resourceGroupName: string;
	readonly secretName: string;
	readonly secretVersion?: string;
	readonly subscriptionId: string;
	readonly updateRule: "NoAction";
	readonly vaultName: string;
}
export interface KeyVaultSigningKeyParameters {
	readonly "@odata.type": "#Microsoft.Azure.Cdn.Models.KeyVaultSigningKeyParameters";
	readonly resourceGroupName: string;
	readonly secretName: string;
	readonly secretVersion: string;
	readonly subscriptionId: string;
	readonly vaultName: string;
}
export interface LoadBalancingSettingsParameters {
	readonly additionalLatencyInMilliseconds?: number;
	readonly sampleSize?: number;
	readonly successfulSamplesRequired?: number;
}
export interface ManagedRuleGroupOverride {
	readonly ruleGroupName: string;
	readonly rules?: ManagedRuleOverride[];
}
export interface ManagedRuleOverride {
	readonly action?: "Allow" | "Block" | "Log" | "Redirect";
	readonly enabledState?: "Disabled" | "Enabled";
	readonly ruleId: string;
}
export interface ManagedRuleSet {
	readonly anomalyScore?: number;
	readonly ruleGroupOverrides?: ManagedRuleGroupOverride[];
	readonly ruleSetType: string;
	readonly ruleSetVersion: string;
}
export interface ManagedRuleSetList {
	readonly managedRuleSets?: ManagedRuleSet[];
}
export interface MatchCondition {
	readonly matchValue: string[];
	readonly matchVariable:
		| "Cookies"
		| "HttpVersion"
		| "IsDevice"
		| "PostArgs"
		| "QueryString"
		| "RemoteAddr"
		| "RemoteAddress"
		| "RequestBody"
		| "RequestHeader"
		| "RequestMethod"
		| "RequestScheme"
		| "RequestUri"
		| "SocketAddr"
		| "UrlFileExtension"
		| "UrlFileName"
		| "UrlPath";
	readonly negateCondition?: boolean;
	readonly operator:
		| "any"
		| "BeginsWith"
		| "Contains"
		| "EndsWith"
		| "Equal"
		| "GeoMatch"
		| "GreaterThan"
		| "GreaterThanOrEqual"
		| "IPMatch"
		| "LessThan"
		| "LessThanOrEqual"
		| "RegEx";
	readonly selector?: string;
	readonly transforms?: "Lowercase" | "RemoveNulls" | "Trim" | "Uppercase" | "UrlDecode" | "UrlEncode"[];
}
export interface OriginGroupOverrideActionParameters {
	readonly "@odata.type": "#Microsoft.Azure.Cdn.Models.DeliveryRuleOriginGroupOverrideActionParameters";
	readonly originGroup: ResourceReference;
}
export interface OriginGroupProperties {
	readonly healthProbeSettings?: HealthProbeParameters;
	readonly origins?: ResourceReference[];
	readonly provisioningState?: string;
	readonly resourceState?: "Active" | "Creating" | "Deleting";
	readonly responseBasedOriginErrorDetectionSettings?: ResponseBasedOriginErrorDetectionParameters;
	readonly trafficRestorationTimeToHealedOrNewEndpointsInMinutes?: number;
}
export interface OriginProperties {
	readonly enabled?: boolean;
	readonly hostName?: string;
	readonly httpPort?: number;
	readonly httpsPort?: number;
	readonly originHostHeader?: string;
	readonly priority?: number;
	readonly privateEndpointStatus?: "Approved" | "Disconnected" | "Pending" | "Rejected" | "Timeout";
	readonly privateLinkAlias?: string;
	readonly privateLinkApprovalMessage?: string;
	readonly privateLinkLocation?: string;
	readonly privateLinkResourceId?: string;
	readonly provisioningState?: string;
	readonly resourceState?: "Active" | "Creating" | "Deleting";
	readonly weight?: number;
}
export interface PolicySettings {
	readonly defaultCustomBlockResponseBody?: string;
	readonly defaultCustomBlockResponseStatusCode?: number;
	readonly defaultRedirectUrl?: string;
	readonly enabledState?: "Disabled" | "Enabled";
	readonly mode?: "Detection" | "Prevention";
}
export interface PostArgsMatchConditionParameters {
	readonly "@odata.type": "#Microsoft.Azure.Cdn.Models.DeliveryRulePostArgsConditionParameters";
	readonly matchValues?: string[];
	readonly negateCondition?: boolean;
	readonly operator:
		| "any"
		| "BeginsWith"
		| "Contains"
		| "EndsWith"
		| "Equal"
		| "GreaterThan"
		| "GreaterThanOrEqual"
		| "LessThan"
		| "LessThanOrEqual"
		| "RegEx";
	readonly selector?: string;
	readonly transforms?: "Lowercase" | "RemoveNulls" | "Trim" | "Uppercase" | "UrlDecode" | "UrlEncode"[];
}
export interface ProfileProperties {
	readonly frontdoorId?: string;
	readonly provisioningState?: string;
	readonly resourceState?: "Active" | "Creating" | "Deleting" | "Disabled";
}
export interface QueryStringMatchConditionParameters {
	readonly "@odata.type": "#Microsoft.Azure.Cdn.Models.DeliveryRuleQueryStringConditionParameters";
	readonly matchValues?: string[];
	readonly negateCondition?: boolean;
	readonly operator:
		| "any"
		| "BeginsWith"
		| "Contains"
		| "EndsWith"
		| "Equal"
		| "GreaterThan"
		| "GreaterThanOrEqual"
		| "LessThan"
		| "LessThanOrEqual"
		| "RegEx";
	readonly transforms?: "Lowercase" | "RemoveNulls" | "Trim" | "Uppercase" | "UrlDecode" | "UrlEncode"[];
}
export interface RateLimitRule {
	readonly action: "Allow" | "Block" | "Log" | "Redirect";
	readonly enabledState?: "Disabled" | "Enabled";
	readonly matchConditions: MatchCondition[];
	readonly name: string;
	readonly priority: number;
	readonly rateLimitDurationInMinutes: number;
	readonly rateLimitThreshold: number;
}
export interface RateLimitRuleList {
	readonly rules?: RateLimitRule[];
}
export interface RemoteAddressMatchConditionParameters {
	readonly "@odata.type": "#Microsoft.Azure.Cdn.Models.DeliveryRuleRemoteAddressConditionParameters";
	readonly matchValues?: string[];
	readonly negateCondition?: boolean;
	readonly operator: "any" | "GeoMatch" | "IPMatch";
	readonly transforms?: "Lowercase" | "RemoveNulls" | "Trim" | "Uppercase" | "UrlDecode" | "UrlEncode"[];
}
export interface RequestBodyMatchConditionParameters {
	readonly "@odata.type": "#Microsoft.Azure.Cdn.Models.DeliveryRuleRequestBodyConditionParameters";
	readonly matchValues?: string[];
	readonly negateCondition?: boolean;
	readonly operator:
		| "any"
		| "BeginsWith"
		| "Contains"
		| "EndsWith"
		| "Equal"
		| "GreaterThan"
		| "GreaterThanOrEqual"
		| "LessThan"
		| "LessThanOrEqual"
		| "RegEx";
	readonly transforms?: "Lowercase" | "RemoveNulls" | "Trim" | "Uppercase" | "UrlDecode" | "UrlEncode"[];
}
export interface RequestHeaderMatchConditionParameters {
	readonly "@odata.type": "#Microsoft.Azure.Cdn.Models.DeliveryRuleRequestHeaderConditionParameters";
	readonly matchValues?: string[];
	readonly negateCondition?: boolean;
	readonly operator:
		| "any"
		| "BeginsWith"
		| "Contains"
		| "EndsWith"
		| "Equal"
		| "GreaterThan"
		| "GreaterThanOrEqual"
		| "LessThan"
		| "LessThanOrEqual"
		| "RegEx";
	readonly selector?: string;
	readonly transforms?: "Lowercase" | "RemoveNulls" | "Trim" | "Uppercase" | "UrlDecode" | "UrlEncode"[];
}
export interface RequestMethodMatchConditionParameters {
	readonly "@odata.type": "#Microsoft.Azure.Cdn.Models.DeliveryRuleRequestMethodConditionParameters";
	readonly matchValues?: "DELETE" | "GET" | "HEAD" | "OPTIONS" | "POST" | "PUT" | "TRACE"[];
	readonly negateCondition?: boolean;
	readonly operator: "Equal";
}
export interface RequestSchemeMatchConditionParameters {
	readonly "@odata.type": "#Microsoft.Azure.Cdn.Models.DeliveryRuleRequestSchemeConditionParameters";
	readonly matchValues?: "HTTP" | "HTTPS"[];
	readonly negateCondition?: boolean;
	readonly operator: "Equal";
}
export interface RequestUriMatchConditionParameters {
	readonly "@odata.type": "#Microsoft.Azure.Cdn.Models.DeliveryRuleRequestUriConditionParameters";
	readonly matchValues?: string[];
	readonly negateCondition?: boolean;
	readonly operator:
		| "any"
		| "BeginsWith"
		| "Contains"
		| "EndsWith"
		| "Equal"
		| "GreaterThan"
		| "GreaterThanOrEqual"
		| "LessThan"
		| "LessThanOrEqual"
		| "RegEx";
	readonly transforms?: "Lowercase" | "RemoveNulls" | "Trim" | "Uppercase" | "UrlDecode" | "UrlEncode"[];
}
export interface ResourceReference {
	readonly id?: string;
}
export interface ResponseBasedOriginErrorDetectionParameters {
	readonly httpErrorRanges?: HttpErrorRangeParameters[];
	readonly responseBasedDetectedErrorTypes?: "None" | "TcpAndHttpErrors";
	readonly responseBasedFailoverThresholdPercentage?: number;
}
export interface RouteProperties {
	readonly compressionSettings?: CompressionSettings;
	readonly customDomains?: ResourceReference[];
	readonly deploymentStatus?: "Failed" | "InProgress" | "NotStarted" | "Succeeded";
	readonly enabledState?: "Disabled" | "Enabled";
	readonly forwardingProtocol?: "HttpOnly" | "HttpsOnly" | "MatchRequest";
	readonly httpsRedirect?: "Disabled" | "Enabled";
	readonly linkToDefaultDomain?: "Disabled" | "Enabled";
	readonly originGroup?: ResourceReference;
	readonly originPath?: string;
	readonly patternsToMatch?: string[];
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly queryStringCachingBehavior?: "IgnoreQueryString" | "NotSet";
	readonly ruleSets?: ResourceReference[];
	readonly supportedProtocols?: "Http" | "Https"[];
}
export interface RuleProperties {
	readonly actions?: DeliveryRuleActionAutoGenerated[];
	readonly conditions?: DeliveryRuleCondition[];
	readonly deploymentStatus?: "Failed" | "InProgress" | "NotStarted" | "Succeeded";
	readonly matchProcessingBehavior?: "Continue" | "Stop";
	readonly order?: number;
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface RuleSetProperties {
	readonly deploymentStatus?: "Failed" | "InProgress" | "NotStarted" | "Succeeded";
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface SecretParameters {}
export interface SecretProperties {
	readonly deploymentStatus?: "Failed" | "InProgress" | "NotStarted" | "Succeeded";
	readonly parameters?: SecretParameters;
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface SecurityPolicyParameters {}
export interface SecurityPolicyProperties {
	readonly deploymentStatus?: "Failed" | "InProgress" | "NotStarted" | "Succeeded";
	readonly parameters?: SecurityPolicyParameters;
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface SecurityPolicyWebApplicationFirewallAssociation {
	readonly domains?: ResourceReference[];
	readonly patternsToMatch?: string[];
}
export interface SharedPrivateLinkResourceProperties {
	readonly groupId?: string;
	readonly privateLink?: ResourceReference;
	readonly privateLinkLocation?: string;
	readonly requestMessage?: string;
	readonly status?: "Approved" | "Disconnected" | "Pending" | "Rejected";
}
export interface Sku {
	readonly name?:
		| "Custom_Verizon"
		| "Premium_AzureFrontDoor"
		| "Premium_ChinaCdn"
		| "Premium_Verizon"
		| "StandardPlus_955BandWidth_ChinaCdn"
		| "StandardPlus_AvgBandWidth_ChinaCdn"
		| "StandardPlus_ChinaCdn"
		| "Standard_955BandWidth_ChinaCdn"
		| "Standard_Akamai"
		| "Standard_AvgBandWidth_ChinaCdn"
		| "Standard_AzureFrontDoor"
		| "Standard_ChinaCdn"
		| "Standard_Microsoft"
		| "Standard_Verizon";
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "application" | "key" | "managedIdentity" | "user";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "application" | "key" | "managedIdentity" | "user";
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export interface UrlFileExtensionMatchConditionParameters {
	readonly "@odata.type": "#Microsoft.Azure.Cdn.Models.DeliveryRuleUrlFileExtensionMatchConditionParameters";
	readonly matchValues?: string[];
	readonly negateCondition?: boolean;
	readonly operator:
		| "any"
		| "BeginsWith"
		| "Contains"
		| "EndsWith"
		| "Equal"
		| "GreaterThan"
		| "GreaterThanOrEqual"
		| "LessThan"
		| "LessThanOrEqual"
		| "RegEx";
	readonly transforms?: "Lowercase" | "RemoveNulls" | "Trim" | "Uppercase" | "UrlDecode" | "UrlEncode"[];
}
export interface UrlFileNameMatchConditionParameters {
	readonly "@odata.type": "#Microsoft.Azure.Cdn.Models.DeliveryRuleUrlFilenameConditionParameters";
	readonly matchValues?: string[];
	readonly negateCondition?: boolean;
	readonly operator:
		| "any"
		| "BeginsWith"
		| "Contains"
		| "EndsWith"
		| "Equal"
		| "GreaterThan"
		| "GreaterThanOrEqual"
		| "LessThan"
		| "LessThanOrEqual"
		| "RegEx";
	readonly transforms?: "Lowercase" | "RemoveNulls" | "Trim" | "Uppercase" | "UrlDecode" | "UrlEncode"[];
}
export interface UrlPathMatchConditionParameters {
	readonly "@odata.type": "#Microsoft.Azure.Cdn.Models.DeliveryRuleUrlPathMatchConditionParameters";
	readonly matchValues?: string[];
	readonly negateCondition?: boolean;
	readonly operator:
		| "any"
		| "BeginsWith"
		| "Contains"
		| "EndsWith"
		| "Equal"
		| "GreaterThan"
		| "GreaterThanOrEqual"
		| "LessThan"
		| "LessThanOrEqual"
		| "RegEx"
		| "Wildcard";
	readonly transforms?: "Lowercase" | "RemoveNulls" | "Trim" | "Uppercase" | "UrlDecode" | "UrlEncode"[];
}
export interface UrlRedirectActionParameters {
	readonly "@odata.type": "#Microsoft.Azure.Cdn.Models.DeliveryRuleUrlRedirectActionParameters";
	readonly customFragment?: string;
	readonly customHostname?: string;
	readonly customPath?: string;
	readonly customQueryString?: string;
	readonly destinationProtocol?: "Http" | "Https" | "MatchRequest";
	readonly redirectType: "Found" | "Moved" | "PermanentRedirect" | "TemporaryRedirect";
}
export interface UrlRewriteActionParameters {
	readonly "@odata.type": "#Microsoft.Azure.Cdn.Models.DeliveryRuleUrlRewriteActionParameters";
	readonly destination: string;
	readonly preserveUnmatchedPath?: boolean;
	readonly sourcePattern: string;
}
export interface UrlSigningActionParameters {
	readonly "@odata.type": "#Microsoft.Azure.Cdn.Models.DeliveryRuleUrlSigningActionParameters";
	readonly algorithm?: "SHA256";
	readonly parameterNameOverride?: UrlSigningParamIdentifier[];
}
export interface UrlSigningKey {
	readonly keyId: string;
	readonly keySourceParameters: KeyVaultSigningKeyParameters;
}
export interface UrlSigningParamIdentifier {
	readonly paramIndicator: "Expires" | "KeyId" | "Signature";
	readonly paramName: string;
}
export default {
	CdnWebApplicationFirewallPolicies: CdnWebApplicationFirewallPolicies,
	profiles: profiles,
	"profiles/afdEndpoints": profiles_afdEndpoints,
	"profiles/afdEndpoints/routes": profiles_afdEndpoints_routes,
	"profiles/customDomains": profiles_customDomains,
	"profiles/endpoints": profiles_endpoints,
	"profiles/endpoints/customDomains": profiles_endpoints_customDomains,
	"profiles/endpoints/originGroups": profiles_endpoints_originGroups,
	"profiles/endpoints/origins": profiles_endpoints_origins,
	"profiles/originGroups": profiles_originGroups,
	"profiles/originGroups/origins": profiles_originGroups_origins,
	"profiles/ruleSets": profiles_ruleSets,
	"profiles/ruleSets/rules": profiles_ruleSets_rules,
	"profiles/secrets": profiles_secrets,
	"profiles/securityPolicies": profiles_securityPolicies,
};

import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class CdnWebApplicationFirewallPolicies
	extends ArmResource<CdnWebApplicationFirewallPoliciesComponentInputs>
	implements CdnWebApplicationFirewallPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: CdnWebApplicationFirewallPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.Cdn/CdnWebApplicationFirewallPolicies", "2019-06-15", options);
	}
	public readonly apiVersion: "2019-06-15";
	public readonly id: string;
	public readonly type: "Microsoft.Cdn/CdnWebApplicationFirewallPolicies";
}
export interface CdnWebApplicationFirewallPoliciesComponentOutputs {
	readonly apiVersion: "2019-06-15";
	readonly id: string;
	readonly type: "Microsoft.Cdn/CdnWebApplicationFirewallPolicies";
}
export interface CdnWebApplicationFirewallPoliciesComponentInputs {
	readonly etag?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: CdnWebApplicationFirewallPolicyProperties | undefined;
	readonly sku: Sku;
	readonly tags?: TrackedResourceTags | undefined;
}
export class profiles extends ArmResource<profilesComponentInputs> implements profilesComponentOutputs {
	constructor(entity: ADKEntity, options: profilesComponentInputs) {
		super(entity, options.name, "Microsoft.Cdn/profiles", "2019-06-15", options);
	}
	public readonly apiVersion: "2019-06-15";
	public readonly id: string;
	public readonly type: "Microsoft.Cdn/profiles";
}
export interface profilesComponentOutputs {
	readonly apiVersion: "2019-06-15";
	readonly id: string;
	readonly type: "Microsoft.Cdn/profiles";
}
export interface profilesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: ProfileProperties | undefined;
	readonly sku: Sku;
	readonly tags?: TrackedResourceTags | undefined;
}
export class profiles_endpoints
	extends ArmResource<profiles_endpointsComponentInputs>
	implements profiles_endpointsComponentOutputs
{
	constructor(entity: ADKEntity, options: profiles_endpointsComponentInputs) {
		super(entity, options.name, "Microsoft.Cdn/profiles/endpoints", "2019-06-15", options);
	}
	public readonly apiVersion: "2019-06-15";
	public readonly id: string;
	public readonly type: "Microsoft.Cdn/profiles/endpoints";
}
export interface profiles_endpointsComponentOutputs {
	readonly apiVersion: "2019-06-15";
	readonly id: string;
	readonly type: "Microsoft.Cdn/profiles/endpoints";
}
export interface profiles_endpointsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: EndpointProperties | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class profiles_endpoints_customDomains
	extends ArmResource<profiles_endpoints_customDomainsComponentInputs>
	implements profiles_endpoints_customDomainsComponentOutputs
{
	constructor(entity: ADKEntity, options: profiles_endpoints_customDomainsComponentInputs) {
		super(entity, options.name, "Microsoft.Cdn/profiles/endpoints/customDomains", "2019-06-15", options);
	}
	public readonly apiVersion: "2019-06-15";
	public readonly id: string;
	public readonly type: "Microsoft.Cdn/profiles/endpoints/customDomains";
}
export interface profiles_endpoints_customDomainsComponentOutputs {
	readonly apiVersion: "2019-06-15";
	readonly id: string;
	readonly type: "Microsoft.Cdn/profiles/endpoints/customDomains";
}
export interface profiles_endpoints_customDomainsComponentInputs {
	readonly name: string;
	readonly properties?: CustomDomainPropertiesParametersOrCustomDomainProperties | undefined;
}
export class profiles_endpoints_origins
	extends ArmResource<profiles_endpoints_originsComponentInputs>
	implements profiles_endpoints_originsComponentOutputs
{
	constructor(entity: ADKEntity, options: profiles_endpoints_originsComponentInputs) {
		super(entity, options.name, "Microsoft.Cdn/profiles/endpoints/origins", "2019-06-15", options);
	}
	public readonly apiVersion: "2019-06-15";
	public readonly id: string;
	public readonly type: "Microsoft.Cdn/profiles/endpoints/origins";
}
export interface profiles_endpoints_originsComponentOutputs {
	readonly apiVersion: "2019-06-15";
	readonly id: string;
	readonly type: "Microsoft.Cdn/profiles/endpoints/origins";
}
export interface profiles_endpoints_originsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: OriginProperties | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export interface CacheExpirationActionParameters {
	readonly "@odata.type": "#Microsoft.Azure.Cdn.Models.DeliveryRuleCacheExpirationActionParameters";
	readonly cacheBehavior: "BypassCache" | "Override" | "SetIfMissing";
	readonly cacheDuration?: string | undefined;
	readonly cacheType: "All";
}
export interface CacheKeyQueryStringActionParameters {
	readonly "@odata.type": "#Microsoft.Azure.Cdn.Models.DeliveryRuleCacheKeyQueryStringBehaviorActionParameters";
	readonly queryParameters?: string | undefined;
	readonly queryStringBehavior: "Exclude" | "ExcludeAll" | "Include" | "IncludeAll";
}
export interface CdnCertificateSourceParameters {
	readonly "@odata.type": "#Microsoft.Azure.Cdn.Models.CdnCertificateSourceParameters";
	readonly certificateType: "Dedicated" | "Shared";
}
export interface CdnEndpoint {
	readonly id?: string | undefined;
}
export interface CdnWebApplicationFirewallPolicyProperties {
	readonly customRules?: CustomRuleList | undefined;
	readonly endpointLinks?: CdnEndpoint[] | undefined;
	readonly managedRules?: ManagedRuleSetList | undefined;
	readonly policySettings?: PolicySettings | undefined;
	readonly provisioningState?: ("Creating" | "Failed" | "Succeeded") | undefined;
	readonly rateLimitRules?: RateLimitRuleList | undefined;
	readonly resourceState?: ("Creating" | "Deleting" | "Disabled" | "Disabling" | "Enabled" | "Enabling") | undefined;
}
export interface CookiesMatchConditionParameters {
	readonly "@odata.type": "#Microsoft.Azure.Cdn.Models.DeliveryRuleCookiesConditionParameters";
	readonly matchValues?: string[] | undefined;
	readonly negateCondition?: boolean | undefined;
	readonly operator:
		| "any"
		| "BeginsWith"
		| "Contains"
		| "EndsWith"
		| "Equal"
		| "GreaterThan"
		| "GreaterThanOrEqual"
		| "LessThan"
		| "LessThanOrEqual";
	readonly selector?: string | undefined;
	readonly transforms?: ("Lowercase" | "RemoveNulls" | "Trim" | "Uppercase" | "UrlDecode" | "UrlEncode"[]) | undefined;
}
export interface CustomDomainHttpsParameters {
	readonly minimumTlsVersion?: ("None" | "TLS10") | undefined;
	readonly protocolType: "IPBased" | "ServerNameIndication";
}
export interface CustomDomainPropertiesParametersOrCustomDomainProperties {
	readonly customHttpsParameters?: CustomDomainHttpsParameters | undefined;
	readonly customHttpsProvisioningState?: ("Disabled" | "Disabling" | "Enabled" | "Enabling" | "Failed") | undefined;
	readonly customHttpsProvisioningSubstate?:
		| (
				| "CertificateDeleted"
				| "CertificateDeployed"
				| "DeletingCertificate"
				| "DeployingCertificate"
				| "DomainControlValidationRequestApproved"
				| "DomainControlValidationRequestRejected"
				| "DomainControlValidationRequestTimedOut"
				| "IssuingCertificate"
				| "PendingDomainControlValidationREquestApproval"
				| "SubmittingDomainControlValidationRequest"
		  )
		| undefined;
	readonly hostName: string;
	readonly provisioningState?: string | undefined;
	readonly resourceState?: ("Active" | "Creating" | "Deleting") | undefined;
	readonly validationData?: string | undefined;
}
export interface CustomRule {
	readonly action: "Allow" | "Block" | "Log" | "Redirect";
	readonly enabledState?: ("Disabled" | "Enabled") | undefined;
	readonly matchConditions: MatchCondition[];
	readonly name: string;
	readonly priority: number;
}
export interface CustomRuleList {
	readonly rules?: CustomRule[] | undefined;
}
export interface DeepCreatedOrigin {
	readonly name: string;
	readonly properties?: DeepCreatedOriginProperties | undefined;
}
export interface DeepCreatedOriginProperties {
	readonly hostName: string;
	readonly httpPort?: number | undefined;
	readonly httpsPort?: number | undefined;
}
export interface DeliveryRule {
	readonly actions: DeliveryRuleActionAutoGenerated[];
	readonly conditions?: DeliveryRuleCondition[] | undefined;
	readonly name?: string | undefined;
	readonly order: number;
}
export interface DeliveryRuleActionAutoGenerated {}
export interface DeliveryRuleCondition {}
export interface EndpointProperties {
	readonly contentTypesToCompress?: string[] | undefined;
	readonly deliveryPolicy?: EndpointPropertiesUpdateParametersDeliveryPolicy | undefined;
	readonly geoFilters?: GeoFilter[] | undefined;
	readonly hostName?: string | undefined;
	readonly isCompressionEnabled?: boolean | undefined;
	readonly isHttpAllowed?: boolean | undefined;
	readonly isHttpsAllowed?: boolean | undefined;
	readonly optimizationType?:
		| (
				| "DynamicSiteAcceleration"
				| "GeneralMediaStreaming"
				| "GeneralWebDelivery"
				| "LargeFileDownload"
				| "VideoOnDemandMediaStreaming"
		  )
		| undefined;
	readonly originHostHeader?: string | undefined;
	readonly originPath?: string | undefined;
	readonly origins: DeepCreatedOrigin[];
	readonly probePath?: string | undefined;
	readonly provisioningState?: string | undefined;
	readonly queryStringCachingBehavior?: ("BypassCaching" | "IgnoreQueryString" | "NotSet") | undefined;
	readonly resourceState?: ("Creating" | "Deleting" | "Running" | "Starting" | "Stopped" | "Stopping") | undefined;
	readonly webApplicationFirewallPolicyLink?:
		| EndpointPropertiesUpdateParametersWebApplicationFirewallPolicyLink
		| undefined;
}
export interface EndpointPropertiesUpdateParametersDeliveryPolicy {
	readonly description?: string | undefined;
	readonly rules: DeliveryRule[];
}
export interface EndpointPropertiesUpdateParametersWebApplicationFirewallPolicyLink {
	readonly id?: string | undefined;
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
	readonly value?: string | undefined;
}
export interface HttpVersionMatchConditionParameters {
	readonly "@odata.type": "#Microsoft.Azure.Cdn.Models.DeliveryRuleHttpVersionConditionParameters";
	readonly matchValues?: string[] | undefined;
	readonly negateCondition?: boolean | undefined;
	readonly operator: "Equal";
}
export interface IsDeviceMatchConditionParameters {
	readonly "@odata.type": "#Microsoft.Azure.Cdn.Models.DeliveryRuleIsDeviceConditionParameters";
	readonly matchValues?: ("Desktop" | "Mobile"[]) | undefined;
	readonly negateCondition?: boolean | undefined;
	readonly operator: "Equal";
	readonly transforms?: ("Lowercase" | "RemoveNulls" | "Trim" | "Uppercase" | "UrlDecode" | "UrlEncode"[]) | undefined;
}
export interface KeyVaultCertificateSourceParameters {
	readonly "@odata.type": "#Microsoft.Azure.Cdn.Models.KeyVaultCertificateSourceParameters";
	readonly deleteRule: "NoAction";
	readonly resourceGroupName: string;
	readonly secretName: string;
	readonly secretVersion?: string | undefined;
	readonly subscriptionId: string;
	readonly updateRule: "NoAction";
	readonly vaultName: string;
}
export interface ManagedRuleGroupOverride {
	readonly ruleGroupName: string;
	readonly rules?: ManagedRuleOverride[] | undefined;
}
export interface ManagedRuleOverride {
	readonly action?: ("Allow" | "Block" | "Log" | "Redirect") | undefined;
	readonly enabledState?: ("Disabled" | "Enabled") | undefined;
	readonly ruleId: string;
}
export interface ManagedRuleSet {
	readonly anomalyScore?: number | undefined;
	readonly ruleGroupOverrides?: ManagedRuleGroupOverride[] | undefined;
	readonly ruleSetType: string;
	readonly ruleSetVersion: string;
}
export interface ManagedRuleSetList {
	readonly managedRuleSets?: ManagedRuleSet[] | undefined;
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
	readonly negateCondition?: boolean | undefined;
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
	readonly selector?: string | undefined;
	readonly transforms?: ("Lowercase" | "RemoveNulls" | "Trim" | "Uppercase" | "UrlDecode" | "UrlEncode"[]) | undefined;
}
export interface OriginProperties {
	readonly hostName: string;
	readonly httpPort?: number | undefined;
	readonly httpsPort?: number | undefined;
	readonly provisioningState?: string | undefined;
	readonly resourceState?: ("Active" | "Creating" | "Deleting") | undefined;
}
export interface PolicySettings {
	readonly defaultCustomBlockResponseBody?: string | undefined;
	readonly defaultCustomBlockResponseStatusCode?: number | undefined;
	readonly defaultRedirectUrl?: string | undefined;
	readonly enabledState?: ("Disabled" | "Enabled") | undefined;
	readonly mode?: ("Detection" | "Prevention") | undefined;
}
export interface PostArgsMatchConditionParameters {
	readonly "@odata.type": "#Microsoft.Azure.Cdn.Models.DeliveryRulePostArgsConditionParameters";
	readonly matchValues?: string[] | undefined;
	readonly negateCondition?: boolean | undefined;
	readonly operator:
		| "any"
		| "BeginsWith"
		| "Contains"
		| "EndsWith"
		| "Equal"
		| "GreaterThan"
		| "GreaterThanOrEqual"
		| "LessThan"
		| "LessThanOrEqual";
	readonly selector?: string | undefined;
	readonly transforms?: ("Lowercase" | "RemoveNulls" | "Trim" | "Uppercase" | "UrlDecode" | "UrlEncode"[]) | undefined;
}
export interface ProfileProperties {
	readonly provisioningState?: string | undefined;
	readonly resourceState?: ("Active" | "Creating" | "Deleting" | "Disabled") | undefined;
}
export interface QueryStringMatchConditionParameters {
	readonly "@odata.type": "#Microsoft.Azure.Cdn.Models.DeliveryRuleQueryStringConditionParameters";
	readonly matchValues?: string[] | undefined;
	readonly negateCondition?: boolean | undefined;
	readonly operator:
		| "any"
		| "BeginsWith"
		| "Contains"
		| "EndsWith"
		| "Equal"
		| "GreaterThan"
		| "GreaterThanOrEqual"
		| "LessThan"
		| "LessThanOrEqual";
	readonly transforms?: ("Lowercase" | "RemoveNulls" | "Trim" | "Uppercase" | "UrlDecode" | "UrlEncode"[]) | undefined;
}
export interface RateLimitRule {
	readonly action: "Allow" | "Block" | "Log" | "Redirect";
	readonly enabledState?: ("Disabled" | "Enabled") | undefined;
	readonly matchConditions: MatchCondition[];
	readonly name: string;
	readonly priority: number;
	readonly rateLimitDurationInMinutes: number;
	readonly rateLimitThreshold: number;
}
export interface RateLimitRuleList {
	readonly rules?: RateLimitRule[] | undefined;
}
export interface RemoteAddressMatchConditionParameters {
	readonly "@odata.type": "#Microsoft.Azure.Cdn.Models.DeliveryRuleRemoteAddressConditionParameters";
	readonly matchValues?: string[] | undefined;
	readonly negateCondition?: boolean | undefined;
	readonly operator: "any" | "GeoMatch" | "IPMatch";
	readonly transforms?: ("Lowercase" | "RemoveNulls" | "Trim" | "Uppercase" | "UrlDecode" | "UrlEncode"[]) | undefined;
}
export interface RequestBodyMatchConditionParameters {
	readonly "@odata.type": "#Microsoft.Azure.Cdn.Models.DeliveryRuleRequestBodyConditionParameters";
	readonly matchValues?: string[] | undefined;
	readonly negateCondition?: boolean | undefined;
	readonly operator:
		| "any"
		| "BeginsWith"
		| "Contains"
		| "EndsWith"
		| "Equal"
		| "GreaterThan"
		| "GreaterThanOrEqual"
		| "LessThan"
		| "LessThanOrEqual";
	readonly transforms?: ("Lowercase" | "RemoveNulls" | "Trim" | "Uppercase" | "UrlDecode" | "UrlEncode"[]) | undefined;
}
export interface RequestHeaderMatchConditionParameters {
	readonly "@odata.type": "#Microsoft.Azure.Cdn.Models.DeliveryRuleRequestHeaderConditionParameters";
	readonly matchValues?: string[] | undefined;
	readonly negateCondition?: boolean | undefined;
	readonly operator:
		| "any"
		| "BeginsWith"
		| "Contains"
		| "EndsWith"
		| "Equal"
		| "GreaterThan"
		| "GreaterThanOrEqual"
		| "LessThan"
		| "LessThanOrEqual";
	readonly selector?: string | undefined;
	readonly transforms?: ("Lowercase" | "RemoveNulls" | "Trim" | "Uppercase" | "UrlDecode" | "UrlEncode"[]) | undefined;
}
export interface RequestMethodMatchConditionParameters {
	readonly "@odata.type": "#Microsoft.Azure.Cdn.Models.DeliveryRuleRequestMethodConditionParameters";
	readonly matchValues?: ("DELETE" | "GET" | "HEAD" | "OPTIONS" | "POST" | "PUT" | "TRACE"[]) | undefined;
	readonly negateCondition?: boolean | undefined;
	readonly operator: "Equal";
}
export interface RequestSchemeMatchConditionParameters {
	readonly "@odata.type": "#Microsoft.Azure.Cdn.Models.DeliveryRuleRequestSchemeConditionParameters";
	readonly matchValues?: ("HTTP" | "HTTPS"[]) | undefined;
	readonly negateCondition?: boolean | undefined;
	readonly operator: "Equal";
}
export interface RequestUriMatchConditionParameters {
	readonly "@odata.type": "#Microsoft.Azure.Cdn.Models.DeliveryRuleRequestUriConditionParameters";
	readonly matchValues?: string[] | undefined;
	readonly negateCondition?: boolean | undefined;
	readonly operator:
		| "any"
		| "BeginsWith"
		| "Contains"
		| "EndsWith"
		| "Equal"
		| "GreaterThan"
		| "GreaterThanOrEqual"
		| "LessThan"
		| "LessThanOrEqual";
	readonly transforms?: ("Lowercase" | "RemoveNulls" | "Trim" | "Uppercase" | "UrlDecode" | "UrlEncode"[]) | undefined;
}
export interface Sku {
	readonly name?:
		| (
				| "Custom_Verizon"
				| "Premium_ChinaCdn"
				| "Premium_Verizon"
				| "Standard_Akamai"
				| "Standard_ChinaCdn"
				| "Standard_Microsoft"
				| "Standard_Verizon"
		  )
		| undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface UrlFileExtensionMatchConditionParameters {
	readonly "@odata.type": "#Microsoft.Azure.Cdn.Models.DeliveryRuleUrlFileExtensionMatchConditionParameters";
	readonly matchValues?: string[] | undefined;
	readonly negateCondition?: boolean | undefined;
	readonly operator:
		| "any"
		| "BeginsWith"
		| "Contains"
		| "EndsWith"
		| "Equal"
		| "GreaterThan"
		| "GreaterThanOrEqual"
		| "LessThan"
		| "LessThanOrEqual";
	readonly transforms?: ("Lowercase" | "RemoveNulls" | "Trim" | "Uppercase" | "UrlDecode" | "UrlEncode"[]) | undefined;
}
export interface UrlFileNameMatchConditionParameters {
	readonly "@odata.type": "#Microsoft.Azure.Cdn.Models.DeliveryRuleUrlFilenameConditionParameters";
	readonly matchValues?: string[] | undefined;
	readonly negateCondition?: boolean | undefined;
	readonly operator:
		| "any"
		| "BeginsWith"
		| "Contains"
		| "EndsWith"
		| "Equal"
		| "GreaterThan"
		| "GreaterThanOrEqual"
		| "LessThan"
		| "LessThanOrEqual";
	readonly transforms?: ("Lowercase" | "RemoveNulls" | "Trim" | "Uppercase" | "UrlDecode" | "UrlEncode"[]) | undefined;
}
export interface UrlPathMatchConditionParameters {
	readonly "@odata.type": "#Microsoft.Azure.Cdn.Models.DeliveryRuleUrlPathMatchConditionParameters";
	readonly matchValues?: string[] | undefined;
	readonly negateCondition?: boolean | undefined;
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
		| "Wildcard";
	readonly transforms?: ("Lowercase" | "RemoveNulls" | "Trim" | "Uppercase" | "UrlDecode" | "UrlEncode"[]) | undefined;
}
export interface UrlRedirectActionParameters {
	readonly "@odata.type": "#Microsoft.Azure.Cdn.Models.DeliveryRuleUrlRedirectActionParameters";
	readonly customFragment?: string | undefined;
	readonly customHostname?: string | undefined;
	readonly customPath?: string | undefined;
	readonly customQueryString?: string | undefined;
	readonly destinationProtocol?: ("Http" | "Https" | "MatchRequest") | undefined;
	readonly redirectType: "Found" | "Moved" | "PermanentRedirect" | "TemporaryRedirect";
}
export interface UrlRewriteActionParameters {
	readonly "@odata.type": "#Microsoft.Azure.Cdn.Models.DeliveryRuleUrlRewriteActionParameters";
	readonly destination: string;
	readonly preserveUnmatchedPath?: boolean | undefined;
	readonly sourcePattern: string;
}
export default {
	CdnWebApplicationFirewallPolicies: CdnWebApplicationFirewallPolicies,
	profiles: profiles,
	"profiles/endpoints": profiles_endpoints,
	"profiles/endpoints/customDomains": profiles_endpoints_customDomains,
	"profiles/endpoints/origins": profiles_endpoints_origins,
};

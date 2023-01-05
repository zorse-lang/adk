import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class profiles extends ArmResource<profilesComponentInputs> implements profilesComponentOutputs {
	constructor(entity: ADKEntity, options: profilesComponentInputs) {
		super(entity, options.name, "Microsoft.Cdn/profiles", "2019-12-31", options);
	}
	public readonly apiVersion: "2019-12-31";
	public readonly id: string;
	public readonly type: "Microsoft.Cdn/profiles";
}
export interface profilesComponentOutputs {
	readonly apiVersion: "2019-12-31";
	readonly id: string;
	readonly type: "Microsoft.Cdn/profiles";
}
export interface profilesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: ProfileProperties;
	readonly sku: Sku;
	readonly tags?: TrackedResourceTags;
}
export class profiles_endpoints
	extends ArmResource<profiles_endpointsComponentInputs>
	implements profiles_endpointsComponentOutputs
{
	constructor(entity: ADKEntity, options: profiles_endpointsComponentInputs) {
		super(entity, options.name, "Microsoft.Cdn/profiles/endpoints", "2019-12-31", options);
	}
	public readonly apiVersion: "2019-12-31";
	public readonly id: string;
	public readonly type: "Microsoft.Cdn/profiles/endpoints";
}
export interface profiles_endpointsComponentOutputs {
	readonly apiVersion: "2019-12-31";
	readonly id: string;
	readonly type: "Microsoft.Cdn/profiles/endpoints";
}
export interface profiles_endpointsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: EndpointProperties;
	readonly tags?: TrackedResourceTags;
}
export class profiles_endpoints_customDomains
	extends ArmResource<profiles_endpoints_customDomainsComponentInputs>
	implements profiles_endpoints_customDomainsComponentOutputs
{
	constructor(entity: ADKEntity, options: profiles_endpoints_customDomainsComponentInputs) {
		super(entity, options.name, "Microsoft.Cdn/profiles/endpoints/customDomains", "2019-12-31", options);
	}
	public readonly apiVersion: "2019-12-31";
	public readonly id: string;
	public readonly type: "Microsoft.Cdn/profiles/endpoints/customDomains";
}
export interface profiles_endpoints_customDomainsComponentOutputs {
	readonly apiVersion: "2019-12-31";
	readonly id: string;
	readonly type: "Microsoft.Cdn/profiles/endpoints/customDomains";
}
export interface profiles_endpoints_customDomainsComponentInputs {
	readonly name: string;
	readonly properties?: CustomDomainPropertiesParametersOrCustomDomainProperties;
}
export class profiles_endpoints_originGroups
	extends ArmResource<profiles_endpoints_originGroupsComponentInputs>
	implements profiles_endpoints_originGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: profiles_endpoints_originGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.Cdn/profiles/endpoints/originGroups", "2019-12-31", options);
	}
	public readonly apiVersion: "2019-12-31";
	public readonly id: string;
	public readonly type: "Microsoft.Cdn/profiles/endpoints/originGroups";
}
export interface profiles_endpoints_originGroupsComponentOutputs {
	readonly apiVersion: "2019-12-31";
	readonly id: string;
	readonly type: "Microsoft.Cdn/profiles/endpoints/originGroups";
}
export interface profiles_endpoints_originGroupsComponentInputs {
	readonly name: string;
	readonly properties?: OriginGroupProperties;
}
export class profiles_endpoints_origins
	extends ArmResource<profiles_endpoints_originsComponentInputs>
	implements profiles_endpoints_originsComponentOutputs
{
	constructor(entity: ADKEntity, options: profiles_endpoints_originsComponentInputs) {
		super(entity, options.name, "Microsoft.Cdn/profiles/endpoints/origins", "2019-12-31", options);
	}
	public readonly apiVersion: "2019-12-31";
	public readonly id: string;
	public readonly type: "Microsoft.Cdn/profiles/endpoints/origins";
}
export interface profiles_endpoints_originsComponentOutputs {
	readonly apiVersion: "2019-12-31";
	readonly id: string;
	readonly type: "Microsoft.Cdn/profiles/endpoints/origins";
}
export interface profiles_endpoints_originsComponentInputs {
	readonly name: string;
	readonly properties?: OriginProperties;
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
		| "LessThanOrEqual";
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
}
export interface EndpointPropertiesUpdateParametersDeliveryPolicy {
	readonly description?: string;
	readonly rules: DeliveryRule[];
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
	readonly provisioningState?: string;
	readonly resourceState?: "Active" | "Creating" | "Deleting";
	readonly weight?: number;
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
		| "LessThanOrEqual";
	readonly selector?: string;
	readonly transforms?: "Lowercase" | "RemoveNulls" | "Trim" | "Uppercase" | "UrlDecode" | "UrlEncode"[];
}
export interface ProfileProperties {
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
		| "LessThanOrEqual";
	readonly transforms?: "Lowercase" | "RemoveNulls" | "Trim" | "Uppercase" | "UrlDecode" | "UrlEncode"[];
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
		| "LessThanOrEqual";
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
		| "LessThanOrEqual";
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
		| "LessThanOrEqual";
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
export interface Sku {
	readonly name?:
		| "Custom_Verizon"
		| "Premium_ChinaCdn"
		| "Premium_Verizon"
		| "Standard_Akamai"
		| "Standard_ChinaCdn"
		| "Standard_Microsoft"
		| "Standard_Verizon";
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
		| "LessThanOrEqual";
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
		| "LessThanOrEqual";
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
export default {
	profiles: profiles,
	"profiles/endpoints": profiles_endpoints,
	"profiles/endpoints/customDomains": profiles_endpoints_customDomains,
	"profiles/endpoints/originGroups": profiles_endpoints_originGroups,
	"profiles/endpoints/origins": profiles_endpoints_origins,
};

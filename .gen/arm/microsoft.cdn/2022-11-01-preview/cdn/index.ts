import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class cdnWebApplicationFirewallPolicies
	extends ArmResource<cdnWebApplicationFirewallPoliciesComponentInputs>
	implements cdnWebApplicationFirewallPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: cdnWebApplicationFirewallPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.Cdn/cdnWebApplicationFirewallPolicies", "2022-11-01-preview", options);
	}
	public readonly apiVersion: "2022-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Cdn/cdnWebApplicationFirewallPolicies";
}
export interface cdnWebApplicationFirewallPoliciesComponentOutputs {
	readonly apiVersion: "2022-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Cdn/cdnWebApplicationFirewallPolicies";
}
export interface cdnWebApplicationFirewallPoliciesComponentInputs {
	readonly etag?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: CdnWebApplicationFirewallPolicyProperties | undefined;
	readonly sku: Sku;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class profiles extends ArmResource<profilesComponentInputs> implements profilesComponentOutputs {
	constructor(entity: ADKEntity, options: profilesComponentInputs) {
		super(entity, options.name, "Microsoft.Cdn/profiles", "2022-11-01-preview", options);
	}
	public readonly apiVersion: "2022-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Cdn/profiles";
}
export interface profilesComponentOutputs {
	readonly apiVersion: "2022-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Cdn/profiles";
}
export interface profilesComponentInputs {
	readonly identity?: ManagedServiceIdentity | undefined;
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: ProfileProperties | undefined;
	readonly sku: Sku;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class profiles_afdEndpoints
	extends ArmResource<profiles_afdEndpointsComponentInputs>
	implements profiles_afdEndpointsComponentOutputs
{
	constructor(entity: ADKEntity, options: profiles_afdEndpointsComponentInputs) {
		super(entity, options.name, "Microsoft.Cdn/profiles/afdEndpoints", "2022-11-01-preview", options);
	}
	public readonly apiVersion: "2022-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Cdn/profiles/afdEndpoints";
}
export interface profiles_afdEndpointsComponentOutputs {
	readonly apiVersion: "2022-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Cdn/profiles/afdEndpoints";
}
export interface profiles_afdEndpointsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: AFDEndpointProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class profiles_afdEndpoints_routes
	extends ArmResource<profiles_afdEndpoints_routesComponentInputs>
	implements profiles_afdEndpoints_routesComponentOutputs
{
	constructor(entity: ADKEntity, options: profiles_afdEndpoints_routesComponentInputs) {
		super(entity, options.name, "Microsoft.Cdn/profiles/afdEndpoints/routes", "2022-11-01-preview", options);
	}
	public readonly apiVersion: "2022-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Cdn/profiles/afdEndpoints/routes";
}
export interface profiles_afdEndpoints_routesComponentOutputs {
	readonly apiVersion: "2022-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Cdn/profiles/afdEndpoints/routes";
}
export interface profiles_afdEndpoints_routesComponentInputs {
	readonly name: string;
	readonly properties?: RouteProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class profiles_customDomains
	extends ArmResource<profiles_customDomainsComponentInputs>
	implements profiles_customDomainsComponentOutputs
{
	constructor(entity: ADKEntity, options: profiles_customDomainsComponentInputs) {
		super(entity, options.name, "Microsoft.Cdn/profiles/customDomains", "2022-11-01-preview", options);
	}
	public readonly apiVersion: "2022-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Cdn/profiles/customDomains";
}
export interface profiles_customDomainsComponentOutputs {
	readonly apiVersion: "2022-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Cdn/profiles/customDomains";
}
export interface profiles_customDomainsComponentInputs {
	readonly name: string;
	readonly properties?: AFDDomainProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class profiles_endpoints
	extends ArmResource<profiles_endpointsComponentInputs>
	implements profiles_endpointsComponentOutputs
{
	constructor(entity: ADKEntity, options: profiles_endpointsComponentInputs) {
		super(entity, options.name, "Microsoft.Cdn/profiles/endpoints", "2022-11-01-preview", options);
	}
	public readonly apiVersion: "2022-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Cdn/profiles/endpoints";
}
export interface profiles_endpointsComponentOutputs {
	readonly apiVersion: "2022-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Cdn/profiles/endpoints";
}
export interface profiles_endpointsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: EndpointProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class profiles_endpoints_customDomains
	extends ArmResource<profiles_endpoints_customDomainsComponentInputs>
	implements profiles_endpoints_customDomainsComponentOutputs
{
	constructor(entity: ADKEntity, options: profiles_endpoints_customDomainsComponentInputs) {
		super(entity, options.name, "Microsoft.Cdn/profiles/endpoints/customDomains", "2022-11-01-preview", options);
	}
	public readonly apiVersion: "2022-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Cdn/profiles/endpoints/customDomains";
}
export interface profiles_endpoints_customDomainsComponentOutputs {
	readonly apiVersion: "2022-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Cdn/profiles/endpoints/customDomains";
}
export interface profiles_endpoints_customDomainsComponentInputs {
	readonly name: string;
	readonly properties?: CustomDomainPropertiesParametersOrCustomDomainProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class profiles_endpoints_originGroups
	extends ArmResource<profiles_endpoints_originGroupsComponentInputs>
	implements profiles_endpoints_originGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: profiles_endpoints_originGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.Cdn/profiles/endpoints/originGroups", "2022-11-01-preview", options);
	}
	public readonly apiVersion: "2022-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Cdn/profiles/endpoints/originGroups";
}
export interface profiles_endpoints_originGroupsComponentOutputs {
	readonly apiVersion: "2022-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Cdn/profiles/endpoints/originGroups";
}
export interface profiles_endpoints_originGroupsComponentInputs {
	readonly name: string;
	readonly properties?: OriginGroupProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class profiles_endpoints_origins
	extends ArmResource<profiles_endpoints_originsComponentInputs>
	implements profiles_endpoints_originsComponentOutputs
{
	constructor(entity: ADKEntity, options: profiles_endpoints_originsComponentInputs) {
		super(entity, options.name, "Microsoft.Cdn/profiles/endpoints/origins", "2022-11-01-preview", options);
	}
	public readonly apiVersion: "2022-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Cdn/profiles/endpoints/origins";
}
export interface profiles_endpoints_originsComponentOutputs {
	readonly apiVersion: "2022-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Cdn/profiles/endpoints/origins";
}
export interface profiles_endpoints_originsComponentInputs {
	readonly name: string;
	readonly properties?: OriginProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class profiles_originGroups
	extends ArmResource<profiles_originGroupsComponentInputs>
	implements profiles_originGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: profiles_originGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.Cdn/profiles/originGroups", "2022-11-01-preview", options);
	}
	public readonly apiVersion: "2022-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Cdn/profiles/originGroups";
}
export interface profiles_originGroupsComponentOutputs {
	readonly apiVersion: "2022-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Cdn/profiles/originGroups";
}
export interface profiles_originGroupsComponentInputs {
	readonly name: string;
	readonly properties?: AFDOriginGroupProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class profiles_originGroups_origins
	extends ArmResource<profiles_originGroups_originsComponentInputs>
	implements profiles_originGroups_originsComponentOutputs
{
	constructor(entity: ADKEntity, options: profiles_originGroups_originsComponentInputs) {
		super(entity, options.name, "Microsoft.Cdn/profiles/originGroups/origins", "2022-11-01-preview", options);
	}
	public readonly apiVersion: "2022-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Cdn/profiles/originGroups/origins";
}
export interface profiles_originGroups_originsComponentOutputs {
	readonly apiVersion: "2022-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Cdn/profiles/originGroups/origins";
}
export interface profiles_originGroups_originsComponentInputs {
	readonly name: string;
	readonly properties?: AFDOriginProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class profiles_ruleSets
	extends ArmResource<profiles_ruleSetsComponentInputs>
	implements profiles_ruleSetsComponentOutputs
{
	constructor(entity: ADKEntity, options: profiles_ruleSetsComponentInputs) {
		super(entity, options.name, "Microsoft.Cdn/profiles/ruleSets", "2022-11-01-preview", options);
	}
	public readonly apiVersion: "2022-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Cdn/profiles/ruleSets";
}
export interface profiles_ruleSetsComponentOutputs {
	readonly apiVersion: "2022-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Cdn/profiles/ruleSets";
}
export interface profiles_ruleSetsComponentInputs {
	readonly name: string;
	readonly properties?: RuleSetProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class profiles_ruleSets_rules
	extends ArmResource<profiles_ruleSets_rulesComponentInputs>
	implements profiles_ruleSets_rulesComponentOutputs
{
	constructor(entity: ADKEntity, options: profiles_ruleSets_rulesComponentInputs) {
		super(entity, options.name, "Microsoft.Cdn/profiles/ruleSets/rules", "2022-11-01-preview", options);
	}
	public readonly apiVersion: "2022-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Cdn/profiles/ruleSets/rules";
}
export interface profiles_ruleSets_rulesComponentOutputs {
	readonly apiVersion: "2022-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Cdn/profiles/ruleSets/rules";
}
export interface profiles_ruleSets_rulesComponentInputs {
	readonly name: string;
	readonly properties?: RuleProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class profiles_secrets
	extends ArmResource<profiles_secretsComponentInputs>
	implements profiles_secretsComponentOutputs
{
	constructor(entity: ADKEntity, options: profiles_secretsComponentInputs) {
		super(entity, options.name, "Microsoft.Cdn/profiles/secrets", "2022-11-01-preview", options);
	}
	public readonly apiVersion: "2022-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Cdn/profiles/secrets";
}
export interface profiles_secretsComponentOutputs {
	readonly apiVersion: "2022-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Cdn/profiles/secrets";
}
export interface profiles_secretsComponentInputs {
	readonly name: string;
	readonly properties?: SecretProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class profiles_securityPolicies
	extends ArmResource<profiles_securityPoliciesComponentInputs>
	implements profiles_securityPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: profiles_securityPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.Cdn/profiles/securityPolicies", "2022-11-01-preview", options);
	}
	public readonly apiVersion: "2022-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Cdn/profiles/securityPolicies";
}
export interface profiles_securityPoliciesComponentOutputs {
	readonly apiVersion: "2022-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Cdn/profiles/securityPolicies";
}
export interface profiles_securityPoliciesComponentInputs {
	readonly name: string;
	readonly properties?: SecurityPolicyProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export interface ActivatedResourceReference {
	readonly id?: string | undefined;
	readonly isActive?: boolean | undefined;
}
export interface AFDDomainHttpsParameters {
	readonly certificateType: "AzureFirstPartyManagedCertificate" | "CustomerCertificate" | "ManagedCertificate";
	readonly minimumTlsVersion?: "TLS10" | undefined;
	readonly secret?: ResourceReference | undefined;
}
export interface AFDDomainProperties {
	readonly azureDnsZone?: ResourceReference | undefined;
	readonly deploymentStatus?: ("Failed" | "InProgress" | "NotStarted" | "Succeeded") | undefined;
	readonly domainValidationState?:
		| (
				| "Approved"
				| "InternalError"
				| "Pending"
				| "PendingRevalidation"
				| "RefreshingValidationToken"
				| "Rejected"
				| "Submitting"
				| "TimedOut"
				| "Unknown"
		  )
		| undefined;
	readonly extendedProperties?: AFDDomainPropertiesExtendedProperties | undefined;
	readonly hostName: string;
	readonly preValidatedCustomDomainResourceId?: ResourceReference | undefined;
	readonly profileName?: string | undefined;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly tlsSettings?: AFDDomainHttpsParameters | undefined;
	readonly validationProperties?: DomainValidationProperties | undefined;
}
export interface AFDDomainPropertiesExtendedProperties {
	readonly "[ key: string ]"?: string | undefined;
}
export interface AFDEndpointProperties {
	readonly autoGeneratedDomainNameLabelScope?:
		| ("NoReuse" | "ResourceGroupReuse" | "SubscriptionReuse" | "TenantReuse")
		| undefined;
	readonly deploymentStatus?: ("Failed" | "InProgress" | "NotStarted" | "Succeeded") | undefined;
	readonly enabledState?: ("Disabled" | "Enabled") | undefined;
	readonly hostName?: string | undefined;
	readonly profileName?: string | undefined;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface AFDOriginGroupProperties {
	readonly deploymentStatus?: ("Failed" | "InProgress" | "NotStarted" | "Succeeded") | undefined;
	readonly healthProbeSettings?: HealthProbeParameters | undefined;
	readonly loadBalancingSettings?: LoadBalancingSettingsParameters | undefined;
	readonly profileName?: string | undefined;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly sessionAffinityState?: ("Disabled" | "Enabled") | undefined;
	readonly trafficRestorationTimeToHealedOrNewEndpointsInMinutes?: number | undefined;
}
export interface AFDOriginProperties {
	readonly azureOrigin?: ResourceReference | undefined;
	readonly deploymentStatus?: ("Failed" | "InProgress" | "NotStarted" | "Succeeded") | undefined;
	readonly enabledState?: ("Disabled" | "Enabled") | undefined;
	readonly enforceCertificateNameCheck?: boolean | undefined;
	readonly hostName?: string | undefined;
	readonly httpPort?: number | undefined;
	readonly httpsPort?: number | undefined;
	readonly originGroupName?: string | undefined;
	readonly originHostHeader?: string | undefined;
	readonly priority?: number | undefined;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly sharedPrivateLinkResource?: SharedPrivateLinkResourceProperties | undefined;
	readonly weight?: number | undefined;
}
export interface AfdRouteCacheConfiguration {
	readonly compressionSettings?: CompressionSettings | undefined;
	readonly queryParameters?: string | undefined;
	readonly queryStringCachingBehavior?:
		| ("IgnoreQueryString" | "IgnoreSpecifiedQueryStrings" | "IncludeSpecifiedQueryStrings" | "UseQueryString")
		| undefined;
}
export interface CacheConfiguration {
	readonly cacheBehavior?: ("HonorOrigin" | "OverrideAlways" | "OverrideIfOriginMissing") | undefined;
	readonly cacheDuration?: string | undefined;
	readonly isCompressionEnabled?: ("Disabled" | "Enabled") | undefined;
	readonly queryParameters?: string | undefined;
	readonly queryStringCachingBehavior?:
		| ("IgnoreQueryString" | "IgnoreSpecifiedQueryStrings" | "IncludeSpecifiedQueryStrings" | "UseQueryString")
		| undefined;
}
export interface CacheExpirationActionParameters {
	readonly cacheBehavior: "BypassCache" | "Override" | "SetIfMissing";
	readonly cacheDuration?: string | undefined;
	readonly cacheType: "All";
	readonly typeName: "DeliveryRuleCacheExpirationActionParameters";
}
export interface CacheKeyQueryStringActionParameters {
	readonly queryParameters?: string | undefined;
	readonly queryStringBehavior: "Exclude" | "ExcludeAll" | "Include" | "IncludeAll";
	readonly typeName: "DeliveryRuleCacheKeyQueryStringBehaviorActionParameters";
}
export interface CdnCertificateSourceParameters {
	readonly certificateType: "Dedicated" | "Shared";
	readonly typeName: "CdnCertificateSourceParameters";
}
export interface CdnEndpoint {
	readonly id?: string | undefined;
}
export interface CdnWebApplicationFirewallPolicyProperties {
	readonly customRules?: CustomRuleList | undefined;
	readonly endpointLinks?: CdnEndpoint[] | undefined;
	readonly extendedProperties?: CdnWebApplicationFirewallPolicyPropertiesExtendedProperties | undefined;
	readonly managedRules?: ManagedRuleSetList | undefined;
	readonly policySettings?: PolicySettings | undefined;
	readonly provisioningState?: ("Creating" | "Failed" | "Succeeded") | undefined;
	readonly rateLimitRules?: RateLimitRuleList | undefined;
	readonly resourceState?: ("Creating" | "Deleting" | "Disabled" | "Disabling" | "Enabled" | "Enabling") | undefined;
}
export interface CdnWebApplicationFirewallPolicyPropertiesExtendedProperties {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ClientPortMatchConditionParameters {
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
		| "RegEx";
	readonly transforms?: ("Lowercase" | "RemoveNulls" | "Trim" | "Uppercase" | "UrlDecode" | "UrlEncode"[]) | undefined;
	readonly typeName: "DeliveryRuleClientPortConditionParameters";
}
export interface CompressionSettings {
	readonly contentTypesToCompress?: string[] | undefined;
	readonly isCompressionEnabled?: boolean | undefined;
}
export interface CookiesMatchConditionParameters {
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
		| "RegEx";
	readonly selector?: string | undefined;
	readonly transforms?: ("Lowercase" | "RemoveNulls" | "Trim" | "Uppercase" | "UrlDecode" | "UrlEncode"[]) | undefined;
	readonly typeName: "DeliveryRuleCookiesConditionParameters";
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
	readonly provisioningState?: ("Disabled" | "Disabling" | "Enabled" | "Enabling" | "Failed") | undefined;
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
export interface DeepCreatedCustomDomain {
	readonly name: string;
	readonly properties?: DeepCreatedCustomDomainProperties | undefined;
}
export interface DeepCreatedCustomDomainProperties {
	readonly hostName: string;
	readonly validationData?: string | undefined;
}
export interface DeepCreatedOrigin {
	readonly name: string;
	readonly properties?: DeepCreatedOriginProperties | undefined;
}
export interface DeepCreatedOriginGroup {
	readonly name: string;
	readonly properties?: DeepCreatedOriginGroupProperties | undefined;
}
export interface DeepCreatedOriginGroupProperties {
	readonly healthProbeSettings?: HealthProbeParameters | undefined;
	readonly origins: ResourceReference[];
	readonly responseBasedOriginErrorDetectionSettings?: ResponseBasedOriginErrorDetectionParameters | undefined;
	readonly trafficRestorationTimeToHealedOrNewEndpointsInMinutes?: number | undefined;
}
export interface DeepCreatedOriginProperties {
	readonly enabled?: boolean | undefined;
	readonly hostName: string;
	readonly httpPort?: number | undefined;
	readonly httpsPort?: number | undefined;
	readonly originHostHeader?: string | undefined;
	readonly priority?: number | undefined;
	readonly privateEndpointStatus?: ("Approved" | "Disconnected" | "Pending" | "Rejected" | "Timeout") | undefined;
	readonly privateLinkAlias?: string | undefined;
	readonly privateLinkApprovalMessage?: string | undefined;
	readonly privateLinkLocation?: string | undefined;
	readonly privateLinkResourceId?: string | undefined;
	readonly weight?: number | undefined;
}
export interface DeliveryRule {
	readonly actions: DeliveryRuleActionAutoGenerated[];
	readonly conditions?: DeliveryRuleCondition[] | undefined;
	readonly name?: string | undefined;
	readonly order: number;
}
export interface DeliveryRuleActionAutoGenerated {}
export interface DeliveryRuleCondition {}
export interface DomainValidationProperties {
	readonly expirationDate?: string | undefined;
	readonly validationToken?: string | undefined;
}
export interface EndpointProperties {
	readonly contentTypesToCompress?: string[] | undefined;
	readonly customDomains?: DeepCreatedCustomDomain[] | undefined;
	readonly defaultOriginGroup?: ResourceReference | undefined;
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
	readonly originGroups?: DeepCreatedOriginGroup[] | undefined;
	readonly originHostHeader?: string | undefined;
	readonly originPath?: string | undefined;
	readonly origins: DeepCreatedOrigin[];
	readonly probePath?: string | undefined;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly queryStringCachingBehavior?: ("BypassCaching" | "IgnoreQueryString" | "NotSet") | undefined;
	readonly resourceState?: ("Creating" | "Deleting" | "Running" | "Starting" | "Stopped" | "Stopping") | undefined;
	readonly urlSigningKeys?: UrlSigningKey[] | undefined;
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
	readonly headerAction: "Append" | "Delete" | "Overwrite";
	readonly headerName: string;
	readonly typeName: "DeliveryRuleHeaderActionParameters";
	readonly value?: string | undefined;
}
export interface HealthProbeParameters {
	readonly probeIntervalInSeconds?: number | undefined;
	readonly probePath?: string | undefined;
	readonly probeProtocol?: ("Http" | "Https") | undefined;
	readonly probeRequestType?: ("GET" | "HEAD") | undefined;
}
export interface HostNameMatchConditionParameters {
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
		| "RegEx";
	readonly transforms?: ("Lowercase" | "RemoveNulls" | "Trim" | "Uppercase" | "UrlDecode" | "UrlEncode"[]) | undefined;
	readonly typeName: "DeliveryRuleHostNameConditionParameters";
}
export interface HttpErrorRangeParameters {
	readonly begin?: number | undefined;
	readonly end?: number | undefined;
}
export interface HttpVersionMatchConditionParameters {
	readonly matchValues?: string[] | undefined;
	readonly negateCondition?: boolean | undefined;
	readonly operator: "Equal";
	readonly transforms?: ("Lowercase" | "RemoveNulls" | "Trim" | "Uppercase" | "UrlDecode" | "UrlEncode"[]) | undefined;
	readonly typeName: "DeliveryRuleHttpVersionConditionParameters";
}
export interface IsDeviceMatchConditionParameters {
	readonly matchValues?: ("Desktop" | "Mobile"[]) | undefined;
	readonly negateCondition?: boolean | undefined;
	readonly operator: "Equal";
	readonly transforms?: ("Lowercase" | "RemoveNulls" | "Trim" | "Uppercase" | "UrlDecode" | "UrlEncode"[]) | undefined;
	readonly typeName: "DeliveryRuleIsDeviceConditionParameters";
}
export interface KeyVaultCertificateSourceParameters {
	readonly deleteRule: "NoAction";
	readonly resourceGroupName: string;
	readonly secretName: string;
	readonly secretVersion?: string | undefined;
	readonly subscriptionId: string;
	readonly typeName: "KeyVaultCertificateSourceParameters";
	readonly updateRule: "NoAction";
	readonly vaultName: string;
}
export interface KeyVaultSigningKeyParameters {
	readonly resourceGroupName: string;
	readonly secretName: string;
	readonly secretVersion: string;
	readonly subscriptionId: string;
	readonly typeName: "KeyVaultSigningKeyParameters";
	readonly vaultName: string;
}
export interface LoadBalancingSettingsParameters {
	readonly additionalLatencyInMilliseconds?: number | undefined;
	readonly sampleSize?: number | undefined;
	readonly successfulSamplesRequired?: number | undefined;
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
export interface ManagedServiceIdentity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type: "None" | "SystemAssigned" | "SystemAssigned, UserAssigned" | "UserAssigned";
	readonly userAssignedIdentities?: UserAssignedIdentities | undefined;
}
export interface MatchCondition {
	readonly matchValue: string[];
	readonly matchVariable:
		| "Cookies"
		| "PostArgs"
		| "QueryString"
		| "RemoteAddr"
		| "RequestBody"
		| "RequestHeader"
		| "RequestMethod"
		| "RequestUri"
		| "SocketAddr";
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
export interface OriginGroupOverride {
	readonly forwardingProtocol?: ("HttpOnly" | "HttpsOnly" | "MatchRequest") | undefined;
	readonly originGroup?: ResourceReference | undefined;
}
export interface OriginGroupOverrideActionParameters {
	readonly originGroup: ResourceReference;
	readonly typeName: "DeliveryRuleOriginGroupOverrideActionParameters";
}
export interface OriginGroupProperties {
	readonly healthProbeSettings?: HealthProbeParameters | undefined;
	readonly origins?: ResourceReference[] | undefined;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly resourceState?: ("Active" | "Creating" | "Deleting") | undefined;
	readonly responseBasedOriginErrorDetectionSettings?: ResponseBasedOriginErrorDetectionParameters | undefined;
	readonly trafficRestorationTimeToHealedOrNewEndpointsInMinutes?: number | undefined;
}
export interface OriginProperties {
	readonly enabled?: boolean | undefined;
	readonly hostName?: string | undefined;
	readonly httpPort?: number | undefined;
	readonly httpsPort?: number | undefined;
	readonly originHostHeader?: string | undefined;
	readonly priority?: number | undefined;
	readonly privateEndpointStatus?: ("Approved" | "Disconnected" | "Pending" | "Rejected" | "Timeout") | undefined;
	readonly privateLinkAlias?: string | undefined;
	readonly privateLinkApprovalMessage?: string | undefined;
	readonly privateLinkLocation?: string | undefined;
	readonly privateLinkResourceId?: string | undefined;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly resourceState?: ("Active" | "Creating" | "Deleting") | undefined;
	readonly weight?: number | undefined;
}
export interface PolicySettings {
	readonly defaultCustomBlockResponseBody?: string | undefined;
	readonly defaultCustomBlockResponseStatusCode?: number | undefined;
	readonly defaultRedirectUrl?: string | undefined;
	readonly enabledState?: ("Disabled" | "Enabled") | undefined;
	readonly mode?: ("Detection" | "Prevention") | undefined;
}
export interface PostArgsMatchConditionParameters {
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
		| "RegEx";
	readonly selector?: string | undefined;
	readonly transforms?: ("Lowercase" | "RemoveNulls" | "Trim" | "Uppercase" | "UrlDecode" | "UrlEncode"[]) | undefined;
	readonly typeName: "DeliveryRulePostArgsConditionParameters";
}
export interface ProfileProperties {
	readonly extendedProperties?: ProfilePropertiesExtendedProperties | undefined;
	readonly frontDoorId?: string | undefined;
	readonly originResponseTimeoutSeconds?: number | undefined;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly resourceState?:
		| (
				| "AbortingMigration"
				| "Active"
				| "CommittingMigration"
				| "Creating"
				| "Deleting"
				| "Disabled"
				| "Migrated"
				| "Migrating"
				| "PendingMigrationCommit"
		  )
		| undefined;
}
export interface ProfilePropertiesExtendedProperties {
	readonly "[ key: string ]"?: string | undefined;
}
export interface QueryStringMatchConditionParameters {
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
		| "RegEx";
	readonly transforms?: ("Lowercase" | "RemoveNulls" | "Trim" | "Uppercase" | "UrlDecode" | "UrlEncode"[]) | undefined;
	readonly typeName: "DeliveryRuleQueryStringConditionParameters";
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
	readonly matchValues?: string[] | undefined;
	readonly negateCondition?: boolean | undefined;
	readonly operator: "any" | "GeoMatch" | "IPMatch";
	readonly transforms?: ("Lowercase" | "RemoveNulls" | "Trim" | "Uppercase" | "UrlDecode" | "UrlEncode"[]) | undefined;
	readonly typeName: "DeliveryRuleRemoteAddressConditionParameters";
}
export interface RequestBodyMatchConditionParameters {
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
		| "RegEx";
	readonly transforms?: ("Lowercase" | "RemoveNulls" | "Trim" | "Uppercase" | "UrlDecode" | "UrlEncode"[]) | undefined;
	readonly typeName: "DeliveryRuleRequestBodyConditionParameters";
}
export interface RequestHeaderMatchConditionParameters {
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
		| "RegEx";
	readonly selector?: string | undefined;
	readonly transforms?: ("Lowercase" | "RemoveNulls" | "Trim" | "Uppercase" | "UrlDecode" | "UrlEncode"[]) | undefined;
	readonly typeName: "DeliveryRuleRequestHeaderConditionParameters";
}
export interface RequestMethodMatchConditionParameters {
	readonly matchValues?: ("DELETE" | "GET" | "HEAD" | "OPTIONS" | "POST" | "PUT" | "TRACE"[]) | undefined;
	readonly negateCondition?: boolean | undefined;
	readonly operator: "Equal";
	readonly transforms?: ("Lowercase" | "RemoveNulls" | "Trim" | "Uppercase" | "UrlDecode" | "UrlEncode"[]) | undefined;
	readonly typeName: "DeliveryRuleRequestMethodConditionParameters";
}
export interface RequestSchemeMatchConditionParameters {
	readonly matchValues?: ("HTTP" | "HTTPS"[]) | undefined;
	readonly negateCondition?: boolean | undefined;
	readonly operator: "Equal";
	readonly transforms?: ("Lowercase" | "RemoveNulls" | "Trim" | "Uppercase" | "UrlDecode" | "UrlEncode"[]) | undefined;
	readonly typeName: "DeliveryRuleRequestSchemeConditionParameters";
}
export interface RequestUriMatchConditionParameters {
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
		| "RegEx";
	readonly transforms?: ("Lowercase" | "RemoveNulls" | "Trim" | "Uppercase" | "UrlDecode" | "UrlEncode"[]) | undefined;
	readonly typeName: "DeliveryRuleRequestUriConditionParameters";
}
export interface ResourceReference {
	readonly id?: string | undefined;
}
export interface ResponseBasedOriginErrorDetectionParameters {
	readonly httpErrorRanges?: HttpErrorRangeParameters[] | undefined;
	readonly responseBasedDetectedErrorTypes?: ("None" | "TcpAndHttpErrors") | undefined;
	readonly responseBasedFailoverThresholdPercentage?: number | undefined;
}
export interface RouteConfigurationOverrideActionParameters {
	readonly cacheConfiguration?: CacheConfiguration | undefined;
	readonly originGroupOverride?: OriginGroupOverride | undefined;
	readonly typeName: "DeliveryRuleRouteConfigurationOverrideActionParameters";
}
export interface RouteProperties {
	readonly cacheConfiguration?: AfdRouteCacheConfiguration | undefined;
	readonly customDomains?: ActivatedResourceReference[] | undefined;
	readonly deploymentStatus?: ("Failed" | "InProgress" | "NotStarted" | "Succeeded") | undefined;
	readonly enabledState?: ("Disabled" | "Enabled") | undefined;
	readonly endpointName?: string | undefined;
	readonly forwardingProtocol?: ("HttpOnly" | "HttpsOnly" | "MatchRequest") | undefined;
	readonly httpsRedirect?: ("Disabled" | "Enabled") | undefined;
	readonly linkToDefaultDomain?: ("Disabled" | "Enabled") | undefined;
	readonly originGroup?: ResourceReference | undefined;
	readonly originPath?: string | undefined;
	readonly patternsToMatch?: string[] | undefined;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly ruleSets?: ResourceReference[] | undefined;
	readonly supportedProtocols?: ("Http" | "Https"[]) | undefined;
}
export interface RuleProperties {
	readonly actions?: DeliveryRuleActionAutoGenerated[] | undefined;
	readonly conditions?: DeliveryRuleCondition[] | undefined;
	readonly deploymentStatus?: ("Failed" | "InProgress" | "NotStarted" | "Succeeded") | undefined;
	readonly matchProcessingBehavior?: ("Continue" | "Stop") | undefined;
	readonly order?: number | undefined;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly ruleSetName?: string | undefined;
}
export interface RuleSetProperties {
	readonly deploymentStatus?: ("Failed" | "InProgress" | "NotStarted" | "Succeeded") | undefined;
	readonly profileName?: string | undefined;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface SecretParameters {}
export interface SecretProperties {
	readonly deploymentStatus?: ("Failed" | "InProgress" | "NotStarted" | "Succeeded") | undefined;
	readonly parameters?: SecretParameters | undefined;
	readonly profileName?: string | undefined;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface SecurityPolicyProperties {
	readonly deploymentStatus?: ("Failed" | "InProgress" | "NotStarted" | "Succeeded") | undefined;
	readonly parameters?: SecurityPolicyPropertiesParameters | undefined;
	readonly profileName?: string | undefined;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface SecurityPolicyPropertiesParameters {}
export interface SecurityPolicyWebApplicationFirewallAssociation {
	readonly domains?: ActivatedResourceReference[] | undefined;
	readonly patternsToMatch?: string[] | undefined;
}
export interface ServerPortMatchConditionParameters {
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
		| "RegEx";
	readonly transforms?: ("Lowercase" | "RemoveNulls" | "Trim" | "Uppercase" | "UrlDecode" | "UrlEncode"[]) | undefined;
	readonly typeName: "DeliveryRuleServerPortConditionParameters";
}
export interface SharedPrivateLinkResourceProperties {
	readonly groupId?: string | undefined;
	readonly privateLink?: ResourceReference | undefined;
	readonly privateLinkLocation?: string | undefined;
	readonly requestMessage?: string | undefined;
	readonly status?: ("Approved" | "Disconnected" | "Pending" | "Rejected") | undefined;
}
export interface Sku {
	readonly name?:
		| (
				| "Custom_Verizon"
				| "Premium_AzureFrontDoor"
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
				| "Standard_Verizon"
		  )
		| undefined;
}
export interface SocketAddrMatchConditionParameters {
	readonly matchValues?: string[] | undefined;
	readonly negateCondition?: boolean | undefined;
	readonly operator: "any" | "IPMatch";
	readonly transforms?: ("Lowercase" | "RemoveNulls" | "Trim" | "Uppercase" | "UrlDecode" | "UrlEncode"[]) | undefined;
	readonly typeName: "DeliveryRuleSocketAddrConditionParameters";
}
export interface SslProtocolMatchConditionParameters {
	readonly matchValues?: ("TLSv1" | "TLSv1.1" | "TLSv1.2"[]) | undefined;
	readonly negateCondition?: boolean | undefined;
	readonly operator: "Equal";
	readonly transforms?: ("Lowercase" | "RemoveNulls" | "Trim" | "Uppercase" | "UrlDecode" | "UrlEncode"[]) | undefined;
	readonly typeName: "DeliveryRuleSslProtocolConditionParameters";
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("application" | "key" | "managedIdentity" | "user") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("application" | "key" | "managedIdentity" | "user") | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface UrlFileExtensionMatchConditionParameters {
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
		| "RegEx";
	readonly transforms?: ("Lowercase" | "RemoveNulls" | "Trim" | "Uppercase" | "UrlDecode" | "UrlEncode"[]) | undefined;
	readonly typeName: "DeliveryRuleUrlFileExtensionMatchConditionParameters";
}
export interface UrlFileNameMatchConditionParameters {
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
		| "RegEx";
	readonly transforms?: ("Lowercase" | "RemoveNulls" | "Trim" | "Uppercase" | "UrlDecode" | "UrlEncode"[]) | undefined;
	readonly typeName: "DeliveryRuleUrlFilenameConditionParameters";
}
export interface UrlPathMatchConditionParameters {
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
		| "RegEx"
		| "Wildcard";
	readonly transforms?: ("Lowercase" | "RemoveNulls" | "Trim" | "Uppercase" | "UrlDecode" | "UrlEncode"[]) | undefined;
	readonly typeName: "DeliveryRuleUrlPathMatchConditionParameters";
}
export interface UrlRedirectActionParameters {
	readonly customFragment?: string | undefined;
	readonly customHostname?: string | undefined;
	readonly customPath?: string | undefined;
	readonly customQueryString?: string | undefined;
	readonly destinationProtocol?: ("Http" | "Https" | "MatchRequest") | undefined;
	readonly redirectType: "Found" | "Moved" | "PermanentRedirect" | "TemporaryRedirect";
	readonly typeName: "DeliveryRuleUrlRedirectActionParameters";
}
export interface UrlRewriteActionParameters {
	readonly destination: string;
	readonly preserveUnmatchedPath?: boolean | undefined;
	readonly sourcePattern: string;
	readonly typeName: "DeliveryRuleUrlRewriteActionParameters";
}
export interface UrlSigningActionParameters {
	readonly algorithm?: "SHA256" | undefined;
	readonly parameterNameOverride?: UrlSigningParamIdentifier[] | undefined;
	readonly typeName: "DeliveryRuleUrlSigningActionParameters";
}
export interface UrlSigningKey {
	readonly keyId: string;
	readonly keySourceParameters: KeyVaultSigningKeyParameters;
}
export interface UrlSigningParamIdentifier {
	readonly paramIndicator: "Expires" | "KeyId" | "Signature";
	readonly paramName: string;
}
export interface UserAssignedIdentities {
	readonly "[ key: string ]"?: UserAssignedIdentity | undefined;
}
export interface UserAssignedIdentity {
	readonly clientId?: string | undefined;
	readonly principalId?: string | undefined;
}
export default {
	cdnWebApplicationFirewallPolicies: cdnWebApplicationFirewallPolicies,
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

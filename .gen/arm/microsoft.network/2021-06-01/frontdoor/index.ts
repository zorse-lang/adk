import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class frontDoors extends ArmResource<frontDoorsComponentInputs> implements frontDoorsComponentOutputs {
	constructor(entity: ADKEntity, options: frontDoorsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/frontDoors", "2021-06-01", options);
	}
	public readonly apiVersion: "2021-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/frontDoors";
}
export interface frontDoorsComponentOutputs {
	readonly apiVersion: "2021-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/frontDoors";
}
export interface frontDoorsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: FrontDoorProperties;
	readonly tags?: ResourceTags;
}
export class frontDoors_frontendEndpoints
	extends ArmResource<frontDoors_frontendEndpointsComponentInputs>
	implements frontDoors_frontendEndpointsComponentOutputs
{
	constructor(entity: ADKEntity, options: frontDoors_frontendEndpointsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/frontDoors/frontendEndpoints", "2021-06-01", options);
	}
	public readonly apiVersion: "2021-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/frontDoors/frontendEndpoints";
}
export interface frontDoors_frontendEndpointsComponentOutputs {
	readonly apiVersion: "2021-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/frontDoors/frontendEndpoints";
}
export interface frontDoors_frontendEndpointsComponentInputs {
	readonly name: string;
	readonly properties?: FrontendEndpointProperties;
}
export class frontDoors_rulesEngines
	extends ArmResource<frontDoors_rulesEnginesComponentInputs>
	implements frontDoors_rulesEnginesComponentOutputs
{
	constructor(entity: ADKEntity, options: frontDoors_rulesEnginesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/frontDoors/rulesEngines", "2021-06-01", options);
	}
	public readonly apiVersion: "2021-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/frontDoors/rulesEngines";
}
export interface frontDoors_rulesEnginesComponentOutputs {
	readonly apiVersion: "2021-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/frontDoors/rulesEngines";
}
export interface frontDoors_rulesEnginesComponentInputs {
	readonly name: string;
	readonly properties?: RulesEngineProperties;
}
export class FrontDoorWebApplicationFirewallPolicies
	extends ArmResource<FrontDoorWebApplicationFirewallPoliciesComponentInputs>
	implements FrontDoorWebApplicationFirewallPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: FrontDoorWebApplicationFirewallPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/FrontDoorWebApplicationFirewallPolicies", "2021-06-01", options);
	}
	public readonly apiVersion: "2021-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/FrontDoorWebApplicationFirewallPolicies";
}
export interface FrontDoorWebApplicationFirewallPoliciesComponentOutputs {
	readonly apiVersion: "2021-06-01";
	readonly id: string;
	readonly type: "Microsoft.Network/FrontDoorWebApplicationFirewallPolicies";
}
export interface FrontDoorWebApplicationFirewallPoliciesComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: WebApplicationFirewallPolicyProperties;
	readonly sku?: Sku;
	readonly tags?: ResourceTags;
}
export interface Backend {
	readonly address?: string;
	readonly backendHostHeader?: string;
	readonly enabledState?: "Disabled" | "Enabled";
	readonly httpPort?: number;
	readonly httpsPort?: number;
	readonly priority?: number;
	readonly privateEndpointStatus?: "Approved" | "Disconnected" | "Pending" | "Rejected" | "Timeout";
	readonly privateLinkAlias?: string;
	readonly privateLinkApprovalMessage?: string;
	readonly privateLinkLocation?: string;
	readonly privateLinkResourceId?: string;
	readonly weight?: number;
}
export interface BackendPool {
	readonly id?: string;
	readonly name?: string;
	readonly properties?: BackendPoolProperties;
	readonly type?: string;
}
export interface BackendPoolProperties {
	readonly backends?: Backend[];
	readonly healthProbeSettings?: SubResource;
	readonly loadBalancingSettings?: SubResource;
	readonly resourceState?:
		| "Creating"
		| "Deleting"
		| "Disabled"
		| "Disabling"
		| "Enabled"
		| "Enabling"
		| "Migrated"
		| "Migrating";
}
export interface BackendPoolsSettings {
	readonly enforceCertificateNameCheck?: "Disabled" | "Enabled";
	readonly sendRecvTimeoutSeconds?: number;
}
export interface CacheConfiguration {
	readonly cacheDuration?: string;
	readonly dynamicCompression?: "Disabled" | "Enabled";
	readonly queryParameters?: string;
	readonly queryParameterStripDirective?: "StripAll" | "StripAllExcept" | "StripNone" | "StripOnly";
}
export interface CustomHttpsConfiguration {
	readonly certificateSource: "AzureKeyVault" | "FrontDoor";
	readonly frontDoorCertificateSourceParameters?: FrontDoorCertificateSourceParameters;
	readonly keyVaultCertificateSourceParameters?: KeyVaultCertificateSourceParameters;
	readonly minimumTlsVersion: "1.0" | "1.2";
	readonly protocolType: "ServerNameIndication";
}
export interface CustomRule {
	readonly action: "Allow" | "Block" | "Log" | "Redirect";
	readonly enabledState?: "Disabled" | "Enabled";
	readonly matchConditions: MatchCondition[];
	readonly name?: string;
	readonly priority: number;
	readonly rateLimitDurationInMinutes?: number;
	readonly rateLimitThreshold?: number;
	readonly ruleType: "MatchRule" | "RateLimitRule";
}
export interface CustomRuleList {
	readonly rules?: CustomRule[];
}
export interface FrontDoorCertificateSourceParameters {
	readonly certificateType?: "Dedicated";
}
export interface FrontDoorProperties {
	readonly backendPools?: BackendPool[];
	readonly backendPoolsSettings?: BackendPoolsSettings;
	readonly cname?: string;
	readonly enabledState?: "Disabled" | "Enabled";
	readonly extendedProperties?: FrontDoorPropertiesExtendedProperties;
	readonly friendlyName?: string;
	readonly frontdoorId?: string;
	readonly frontendEndpoints?: FrontendEndpoint[];
	readonly healthProbeSettings?: HealthProbeSettingsModel[];
	readonly loadBalancingSettings?: LoadBalancingSettingsModel[];
	readonly provisioningState?: string;
	readonly resourceState?:
		| "Creating"
		| "Deleting"
		| "Disabled"
		| "Disabling"
		| "Enabled"
		| "Enabling"
		| "Migrated"
		| "Migrating";
	readonly routingRules?: RoutingRule[];
	readonly rulesEngines?: RulesEngine[];
}
export interface FrontDoorPropertiesExtendedProperties {
	readonly [key: string]: string;
}
export interface FrontendEndpoint {
	readonly id?: string;
	readonly name?: string;
	readonly properties?: FrontendEndpointProperties;
	readonly type?: string;
}
export interface FrontendEndpointLink {
	readonly id?: string;
}
export interface FrontendEndpointProperties {
	readonly customHttpsConfiguration?: CustomHttpsConfiguration;
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
	readonly hostName?: string;
	readonly resourceState?:
		| "Creating"
		| "Deleting"
		| "Disabled"
		| "Disabling"
		| "Enabled"
		| "Enabling"
		| "Migrated"
		| "Migrating";
	readonly sessionAffinityEnabledState?: "Disabled" | "Enabled";
	readonly sessionAffinityTtlSeconds?: number;
	readonly webApplicationFirewallPolicyLink?: FrontendEndpointUpdateParametersWebApplicationFirewallPolicyLink;
}
export interface FrontendEndpointUpdateParametersWebApplicationFirewallPolicyLink {
	readonly id?: string;
}
export interface HeaderAction {
	readonly headerActionType: "Append" | "Delete" | "Overwrite";
	readonly headerName: string;
	readonly value?: string;
}
export interface HealthProbeSettingsModel {
	readonly id?: string;
	readonly name?: string;
	readonly properties?: HealthProbeSettingsProperties;
	readonly type?: string;
}
export interface HealthProbeSettingsProperties {
	readonly enabledState?: "Disabled" | "Enabled";
	readonly healthProbeMethod?: "GET" | "HEAD";
	readonly intervalInSeconds?: number;
	readonly path?: string;
	readonly protocol?: "Http" | "Https";
	readonly resourceState?:
		| "Creating"
		| "Deleting"
		| "Disabled"
		| "Disabling"
		| "Enabled"
		| "Enabling"
		| "Migrated"
		| "Migrating";
}
export interface KeyVaultCertificateSourceParameters {
	readonly secretName?: string;
	readonly secretVersion?: string;
	readonly vault?: KeyVaultCertificateSourceParametersVault;
}
export interface KeyVaultCertificateSourceParametersVault {
	readonly id?: string;
}
export interface LoadBalancingSettingsModel {
	readonly id?: string;
	readonly name?: string;
	readonly properties?: LoadBalancingSettingsProperties;
	readonly type?: string;
}
export interface LoadBalancingSettingsProperties {
	readonly additionalLatencyMilliseconds?: number;
	readonly resourceState?:
		| "Creating"
		| "Deleting"
		| "Disabled"
		| "Disabling"
		| "Enabled"
		| "Enabling"
		| "Migrated"
		| "Migrating";
	readonly sampleSize?: number;
	readonly successfulSamplesRequired?: number;
}
export interface ManagedRuleExclusion {
	readonly matchVariable:
		| "QueryStringArgNames"
		| "RequestBodyJsonArgNames"
		| "RequestBodyPostArgNames"
		| "RequestCookieNames"
		| "RequestHeaderNames";
	readonly selector: string;
	readonly selectorMatchOperator: "Contains" | "EndsWith" | "Equals" | "Equalsany" | "StartsWith";
}
export interface ManagedRuleGroupOverride {
	readonly exclusions?: ManagedRuleExclusion[];
	readonly ruleGroupName: string;
	readonly rules?: ManagedRuleOverride[];
}
export interface ManagedRuleOverride {
	readonly action?: "Allow" | "Block" | "Log" | "Redirect";
	readonly enabledState?: "Disabled" | "Enabled";
	readonly exclusions?: ManagedRuleExclusion[];
	readonly ruleId: string;
}
export interface ManagedRuleSet {
	readonly exclusions?: ManagedRuleExclusion[];
	readonly ruleGroupOverrides?: ManagedRuleGroupOverride[];
	readonly ruleSetAction?: "Block" | "Log" | "Redirect";
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
		| "PostArgs"
		| "QueryString"
		| "RemoteAddr"
		| "RequestBody"
		| "RequestHeader"
		| "RequestMethod"
		| "RequestUri"
		| "SocketAddr";
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
export interface PolicySettings {
	readonly customBlockResponseBody?: string;
	readonly customBlockResponseStatusCode?: number;
	readonly enabledState?: "Disabled" | "Enabled";
	readonly mode?: "Detection" | "Prevention";
	readonly redirectUrl?: string;
	readonly requestBodyCheck?: "Disabled" | "Enabled";
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface RouteConfiguration {}
export interface RoutingRule {
	readonly id?: string;
	readonly name?: string;
	readonly properties?: RoutingRuleProperties;
	readonly type?: string;
}
export interface RoutingRuleLink {
	readonly id?: string;
}
export interface RoutingRuleProperties {
	readonly acceptedProtocols?: "Http" | "Https"[];
	readonly enabledState?: "Disabled" | "Enabled";
	readonly frontendEndpoints?: SubResource[];
	readonly patternsToMatch?: string[];
	readonly resourceState?:
		| "Creating"
		| "Deleting"
		| "Disabled"
		| "Disabling"
		| "Enabled"
		| "Enabling"
		| "Migrated"
		| "Migrating";
	readonly routeConfiguration?: RouteConfiguration;
	readonly rulesEngine?: SubResource;
	readonly webApplicationFirewallPolicyLink?: RoutingRuleUpdateParametersWebApplicationFirewallPolicyLink;
}
export interface RoutingRuleUpdateParametersWebApplicationFirewallPolicyLink {
	readonly id?: string;
}
export interface RulesEngine {
	readonly id?: string;
	readonly name?: string;
	readonly properties?: RulesEngineProperties;
	readonly type?: string;
}
export interface RulesEngineAction {
	readonly requestHeaderActions?: HeaderAction[];
	readonly responseHeaderActions?: HeaderAction[];
	readonly routeConfigurationOverride?: RouteConfiguration;
}
export interface RulesEngineMatchCondition {
	readonly negateCondition?: boolean;
	readonly rulesEngineMatchValue: string[];
	readonly rulesEngineMatchVariable:
		| "IsMobile"
		| "PostArgs"
		| "QueryString"
		| "RemoteAddr"
		| "RequestBody"
		| "RequestFilename"
		| "RequestFilenameExtension"
		| "RequestHeader"
		| "RequestMethod"
		| "RequestPath"
		| "RequestScheme"
		| "RequestUri";
	readonly rulesEngineOperator:
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
		| "LessThanOrEqual";
	readonly selector?: string;
	readonly transforms?: "Lowercase" | "RemoveNulls" | "Trim" | "Uppercase" | "UrlDecode" | "UrlEncode"[];
}
export interface RulesEngineProperties {
	readonly resourceState?:
		| "Creating"
		| "Deleting"
		| "Disabled"
		| "Disabling"
		| "Enabled"
		| "Enabling"
		| "Migrated"
		| "Migrating";
	readonly rules?: RulesEngineRule[];
}
export interface RulesEngineRule {
	readonly action: RulesEngineAction;
	readonly matchConditions?: RulesEngineMatchCondition[];
	readonly matchProcessingBehavior?: "Continue" | "Stop";
	readonly name: string;
	readonly priority: number;
}
export interface SecurityPolicyLink {
	readonly id?: string;
}
export interface Sku {
	readonly name?: "Classic_AzureFrontDoor" | "Premium_AzureFrontDoor" | "Standard_AzureFrontDoor";
}
export interface SubResource {
	readonly id?: string;
}
export interface WebApplicationFirewallPolicyProperties {
	readonly customRules?: CustomRuleList;
	readonly extendedProperties?: WebApplicationFirewallPolicyPropertiesExtendedProperties;
	readonly frontendEndpointLinks?: FrontendEndpointLink[];
	readonly managedRules?: ManagedRuleSetList;
	readonly policySettings?: PolicySettings;
	readonly provisioningState?: "Canceled" | "Creating" | "Failed" | "Succeeded";
	readonly resourceState?: "Creating" | "Deleting" | "Disabled" | "Disabling" | "Enabled" | "Enabling";
	readonly routingRuleLinks?: RoutingRuleLink[];
	readonly securityPolicyLinks?: SecurityPolicyLink[];
}
export interface WebApplicationFirewallPolicyPropertiesExtendedProperties {
	readonly [key: string]: string;
}
export default {
	frontDoors: frontDoors,
	"frontDoors/frontendEndpoints": frontDoors_frontendEndpoints,
	"frontDoors/rulesEngines": frontDoors_rulesEngines,
	FrontDoorWebApplicationFirewallPolicies: FrontDoorWebApplicationFirewallPolicies,
};

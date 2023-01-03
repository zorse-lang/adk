import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class FrontDoorWebApplicationFirewallPolicies
	extends ArmResource<FrontDoorWebApplicationFirewallPoliciesComponentInputs>
	implements FrontDoorWebApplicationFirewallPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: FrontDoorWebApplicationFirewallPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/FrontDoorWebApplicationFirewallPolicies", "2022-05-01", options);
	}
	public readonly apiVersion: "2022-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/FrontDoorWebApplicationFirewallPolicies";
}
export interface FrontDoorWebApplicationFirewallPoliciesComponentOutputs {
	readonly apiVersion: "2022-05-01";
	readonly id: string;
	readonly type: "Microsoft.Network/FrontDoorWebApplicationFirewallPolicies";
}
export interface FrontDoorWebApplicationFirewallPoliciesComponentInputs {
	readonly etag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: WebApplicationFirewallPolicyProperties | undefined;
	readonly sku?: Sku | undefined;
	readonly tags?: ResourceTags | undefined;
}
export interface CustomRule {
	readonly action: "Allow" | "Block" | "Log" | "Redirect";
	readonly enabledState?: ("Disabled" | "Enabled") | undefined;
	readonly matchConditions: MatchCondition[];
	readonly name?: string | undefined;
	readonly priority: number;
	readonly rateLimitDurationInMinutes?: number | undefined;
	readonly rateLimitThreshold?: number | undefined;
	readonly ruleType: "MatchRule" | "RateLimitRule";
}
export interface CustomRuleList {
	readonly rules?: CustomRule[] | undefined;
}
export interface FrontendEndpointLink {
	readonly id?: string | undefined;
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
	readonly exclusions?: ManagedRuleExclusion[] | undefined;
	readonly ruleGroupName: string;
	readonly rules?: ManagedRuleOverride[] | undefined;
}
export interface ManagedRuleOverride {
	readonly action?: ("Allow" | "Block" | "Log" | "Redirect") | undefined;
	readonly enabledState?: ("Disabled" | "Enabled") | undefined;
	readonly exclusions?: ManagedRuleExclusion[] | undefined;
	readonly ruleId: string;
}
export interface ManagedRuleSet {
	readonly exclusions?: ManagedRuleExclusion[] | undefined;
	readonly ruleGroupOverrides?: ManagedRuleGroupOverride[] | undefined;
	readonly ruleSetAction?: ("Block" | "Log" | "Redirect") | undefined;
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
export interface PolicySettings {
	readonly customBlockResponseBody?: string | undefined;
	readonly customBlockResponseStatusCode?: number | undefined;
	readonly enabledState?: ("Disabled" | "Enabled") | undefined;
	readonly mode?: ("Detection" | "Prevention") | undefined;
	readonly redirectUrl?: string | undefined;
	readonly requestBodyCheck?: ("Disabled" | "Enabled") | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface RoutingRuleLink {
	readonly id?: string | undefined;
}
export interface SecurityPolicyLink {
	readonly id?: string | undefined;
}
export interface Sku {
	readonly name?: ("Classic_AzureFrontDoor" | "Premium_AzureFrontDoor" | "Standard_AzureFrontDoor") | undefined;
}
export interface WebApplicationFirewallPolicyProperties {
	readonly customRules?: CustomRuleList | undefined;
	readonly frontendEndpointLinks?: FrontendEndpointLink[] | undefined;
	readonly managedRules?: ManagedRuleSetList | undefined;
	readonly policySettings?: PolicySettings | undefined;
	readonly provisioningState?: string | undefined;
	readonly resourceState?: ("Creating" | "Deleting" | "Disabled" | "Disabling" | "Enabled" | "Enabling") | undefined;
	readonly routingRuleLinks?: RoutingRuleLink[] | undefined;
	readonly securityPolicyLinks?: SecurityPolicyLink[] | undefined;
}
export default {
	FrontDoorWebApplicationFirewallPolicies: FrontDoorWebApplicationFirewallPolicies,
};

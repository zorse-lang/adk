import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class FrontDoorWebApplicationFirewallPolicies
	extends ArmResource<FrontDoorWebApplicationFirewallPoliciesComponentInputs>
	implements FrontDoorWebApplicationFirewallPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: FrontDoorWebApplicationFirewallPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/FrontDoorWebApplicationFirewallPolicies", "2020-11-01", options);
	}
	public readonly apiVersion: "2020-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/FrontDoorWebApplicationFirewallPolicies";
}
export interface FrontDoorWebApplicationFirewallPoliciesComponentOutputs {
	readonly apiVersion: "2020-11-01";
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
export interface FrontendEndpointLink {
	readonly id?: string;
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
export interface RoutingRuleLink {
	readonly id?: string;
}
export interface SecurityPolicyLink {
	readonly id?: string;
}
export interface Sku {
	readonly name?: "Classic_AzureFrontDoor" | "Premium_AzureFrontDoor" | "Standard_AzureFrontDoor";
}
export interface WebApplicationFirewallPolicyProperties {
	readonly customRules?: CustomRuleList;
	readonly frontendEndpointLinks?: FrontendEndpointLink[];
	readonly managedRules?: ManagedRuleSetList;
	readonly policySettings?: PolicySettings;
	readonly provisioningState?: string;
	readonly resourceState?: "Creating" | "Deleting" | "Disabled" | "Disabling" | "Enabled" | "Enabling";
	readonly routingRuleLinks?: RoutingRuleLink[];
	readonly securityPolicyLinks?: SecurityPolicyLink[];
}
export default {
	FrontDoorWebApplicationFirewallPolicies: FrontDoorWebApplicationFirewallPolicies,
};

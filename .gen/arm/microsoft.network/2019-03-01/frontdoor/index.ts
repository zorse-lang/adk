import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class FrontDoorWebApplicationFirewallPolicies
	extends ArmResource<FrontDoorWebApplicationFirewallPoliciesComponentInputs>
	implements FrontDoorWebApplicationFirewallPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: FrontDoorWebApplicationFirewallPoliciesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/FrontDoorWebApplicationFirewallPolicies", "2019-03-01", options);
	}
	public readonly apiVersion: "2019-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/FrontDoorWebApplicationFirewallPolicies";
}
export interface FrontDoorWebApplicationFirewallPoliciesComponentOutputs {
	readonly apiVersion: "2019-03-01";
	readonly id: string;
	readonly type: "Microsoft.Network/FrontDoorWebApplicationFirewallPolicies";
}
export interface FrontDoorWebApplicationFirewallPoliciesComponentInputs {
	readonly etag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: WebApplicationFirewallPolicyProperties;
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
		| "PostArgs"
		| "QueryString"
		| "RemoteAddr"
		| "RequestBody"
		| "RequestHeader"
		| "RequestMethod"
		| "RequestUri";
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
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface WebApplicationFirewallPolicyProperties {
	readonly customRules?: CustomRuleList;
	readonly frontendEndpointLinks?: FrontendEndpointLink[];
	readonly managedRules?: ManagedRuleSetList;
	readonly policySettings?: PolicySettings;
	readonly provisioningState?: string;
	readonly resourceState?: "Creating" | "Deleting" | "Disabled" | "Disabling" | "Enabled" | "Enabling";
}
export default {
	FrontDoorWebApplicationFirewallPolicies: FrontDoorWebApplicationFirewallPolicies,
};

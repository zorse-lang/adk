import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class SecurityPolicies
	extends GdmResource<SecurityPoliciesComponentInputs>
	implements SecurityPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: SecurityPoliciesComponentInputs) {
		super(entity, options.name, "compute.v1.SecurityPolicies", options);
	}
	public readonly creationTimestamp?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly region?: string;
	public readonly selfLink?: string;
}
export interface SecurityPoliciesComponentOutputs {
	readonly creationTimestamp?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly region?: string;
	readonly selfLink?: string;
}
export interface SecurityPoliciesComponentInputs {
	readonly adaptiveProtectionConfig?: SecurityPolicyAdaptiveProtectionConfig;
	readonly advancedOptionsConfig?: SecurityPolicyAdvancedOptionsConfig;
	readonly ddosProtectionConfig?: SecurityPolicyDdosProtectionConfig;
	readonly description?: string;
	readonly fingerprint?: string;
	readonly name: string;
	readonly recaptchaOptionsConfig?: SecurityPolicyRecaptchaOptionsConfig;
	readonly requestId?: string;
	readonly rules?: SecurityPolicyRule[];
	readonly validateOnly?: boolean;
}
export interface Expr {
	readonly description?: string;
	readonly expression?: string;
	readonly location?: string;
	readonly title?: string;
}
export interface SecurityPolicy {
	readonly adaptiveProtectionConfig?: SecurityPolicyAdaptiveProtectionConfig;
	readonly advancedOptionsConfig?: SecurityPolicyAdvancedOptionsConfig;
	readonly creationTimestamp?: string;
	readonly ddosProtectionConfig?: SecurityPolicyDdosProtectionConfig;
	readonly description?: string;
	readonly fingerprint?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly name?: string;
	readonly recaptchaOptionsConfig?: SecurityPolicyRecaptchaOptionsConfig;
	readonly region?: string;
	readonly rules?: SecurityPolicyRule[];
	readonly selfLink?: string;
	readonly type?: string;
}
export interface SecurityPolicyAdaptiveProtectionConfig {
	readonly layer7DdosDefenseConfig?: SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig;
}
export interface SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig {
	readonly enable?: boolean;
	readonly ruleVisibility?: string;
}
export interface SecurityPolicyAdvancedOptionsConfig {
	readonly jsonCustomConfig?: SecurityPolicyAdvancedOptionsConfigJsonCustomConfig;
	readonly jsonParsing?: string;
	readonly logLevel?: string;
}
export interface SecurityPolicyAdvancedOptionsConfigJsonCustomConfig {
	readonly contentTypes?: string[];
}
export interface SecurityPolicyDdosProtectionConfig {
	readonly ddosProtection?: string;
}
export interface SecurityPolicyRecaptchaOptionsConfig {
	readonly redirectSiteKey?: string;
}
export interface SecurityPolicyRule {
	readonly action?: string;
	readonly description?: string;
	readonly headerAction?: SecurityPolicyRuleHttpHeaderAction;
	readonly kind?: string;
	readonly match?: SecurityPolicyRuleMatcher;
	readonly preview?: boolean;
	readonly priority?: number;
	readonly rateLimitOptions?: SecurityPolicyRuleRateLimitOptions;
	readonly redirectOptions?: SecurityPolicyRuleRedirectOptions;
}
export interface SecurityPolicyRuleHttpHeaderAction {
	readonly requestHeadersToAdds?: SecurityPolicyRuleHttpHeaderActionHttpHeaderOption[];
}
export interface SecurityPolicyRuleHttpHeaderActionHttpHeaderOption {
	readonly headerName?: string;
	readonly headerValue?: string;
}
export interface SecurityPolicyRuleMatcher {
	readonly config?: SecurityPolicyRuleMatcherConfig;
	readonly expr?: Expr;
	readonly versionedExpr?: string;
}
export interface SecurityPolicyRuleMatcherConfig {
	readonly srcIpRanges?: string[];
}
export interface SecurityPolicyRuleRateLimitOptions {
	readonly banDurationSec?: number;
	readonly banThreshold?: SecurityPolicyRuleRateLimitOptionsThreshold;
	readonly conformAction?: string;
	readonly enforceOnKey?: string;
	readonly enforceOnKeyName?: string;
	readonly exceedAction?: string;
	readonly exceedRedirectOptions?: SecurityPolicyRuleRedirectOptions;
	readonly rateLimitThreshold?: SecurityPolicyRuleRateLimitOptionsThreshold;
}
export interface SecurityPolicyRuleRateLimitOptionsThreshold {
	readonly count?: number;
	readonly intervalSec?: number;
}
export interface SecurityPolicyRuleRedirectOptions {
	readonly target?: string;
	readonly type?: string;
}
export default {
	SecurityPolicies: SecurityPolicies,
};

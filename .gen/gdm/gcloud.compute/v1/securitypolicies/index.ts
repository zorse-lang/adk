import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class SecurityPolicies
	extends GdmResource<SecurityPoliciesComponentInputs>
	implements SecurityPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: SecurityPoliciesComponentInputs) {
		super(entity, options.name, "compute.v1.SecurityPolicies", options);
	}
	public readonly creationTimestamp?: string | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly region?: string | undefined;
	public readonly selfLink?: string | undefined;
}
export interface SecurityPoliciesComponentOutputs {
	readonly creationTimestamp?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly region?: string | undefined;
	readonly selfLink?: string | undefined;
}
export interface SecurityPoliciesComponentInputs {
	readonly adaptiveProtectionConfig?: SecurityPolicyAdaptiveProtectionConfig | undefined;
	readonly advancedOptionsConfig?: SecurityPolicyAdvancedOptionsConfig | undefined;
	readonly ddosProtectionConfig?: SecurityPolicyDdosProtectionConfig | undefined;
	readonly description?: string | undefined;
	readonly fingerprint?: string | undefined;
	readonly name: string;
	readonly recaptchaOptionsConfig?: SecurityPolicyRecaptchaOptionsConfig | undefined;
	readonly requestId?: string | undefined;
	readonly rules?: SecurityPolicyRule[] | undefined;
	readonly type: string;
	readonly validateOnly?: boolean | undefined;
}
export interface Expr {
	readonly description?: string | undefined;
	readonly expression?: string | undefined;
	readonly location?: string | undefined;
	readonly title?: string | undefined;
}
export interface SecurityPolicy {
	readonly adaptiveProtectionConfig?: SecurityPolicyAdaptiveProtectionConfig | undefined;
	readonly advancedOptionsConfig?: SecurityPolicyAdvancedOptionsConfig | undefined;
	readonly creationTimestamp?: string | undefined;
	readonly ddosProtectionConfig?: SecurityPolicyDdosProtectionConfig | undefined;
	readonly description?: string | undefined;
	readonly fingerprint?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly name?: string | undefined;
	readonly recaptchaOptionsConfig?: SecurityPolicyRecaptchaOptionsConfig | undefined;
	readonly region?: string | undefined;
	readonly rules?: SecurityPolicyRule[] | undefined;
	readonly selfLink?: string | undefined;
	readonly type?: string | undefined;
}
export interface SecurityPolicyAdaptiveProtectionConfig {
	readonly layer7DdosDefenseConfig?: SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig | undefined;
}
export interface SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig {
	readonly enable?: boolean | undefined;
	readonly ruleVisibility?: string | undefined;
}
export interface SecurityPolicyAdvancedOptionsConfig {
	readonly jsonCustomConfig?: SecurityPolicyAdvancedOptionsConfigJsonCustomConfig | undefined;
	readonly jsonParsing?: string | undefined;
	readonly logLevel?: string | undefined;
}
export interface SecurityPolicyAdvancedOptionsConfigJsonCustomConfig {
	readonly contentTypes?: string[] | undefined;
}
export interface SecurityPolicyDdosProtectionConfig {
	readonly ddosProtection?: string | undefined;
}
export interface SecurityPolicyRecaptchaOptionsConfig {
	readonly redirectSiteKey?: string | undefined;
}
export interface SecurityPolicyRule {
	readonly action?: string | undefined;
	readonly description?: string | undefined;
	readonly headerAction?: SecurityPolicyRuleHttpHeaderAction | undefined;
	readonly kind?: string | undefined;
	readonly match?: SecurityPolicyRuleMatcher | undefined;
	readonly preview?: boolean | undefined;
	readonly priority?: number | undefined;
	readonly rateLimitOptions?: SecurityPolicyRuleRateLimitOptions | undefined;
	readonly redirectOptions?: SecurityPolicyRuleRedirectOptions | undefined;
}
export interface SecurityPolicyRuleHttpHeaderAction {
	readonly requestHeadersToAdds?: SecurityPolicyRuleHttpHeaderActionHttpHeaderOption[] | undefined;
}
export interface SecurityPolicyRuleHttpHeaderActionHttpHeaderOption {
	readonly headerName?: string | undefined;
	readonly headerValue?: string | undefined;
}
export interface SecurityPolicyRuleMatcher {
	readonly config?: SecurityPolicyRuleMatcherConfig | undefined;
	readonly expr?: Expr | undefined;
	readonly versionedExpr?: string | undefined;
}
export interface SecurityPolicyRuleMatcherConfig {
	readonly srcIpRanges?: string[] | undefined;
}
export interface SecurityPolicyRuleRateLimitOptions {
	readonly banDurationSec?: number | undefined;
	readonly banThreshold?: SecurityPolicyRuleRateLimitOptionsThreshold | undefined;
	readonly conformAction?: string | undefined;
	readonly enforceOnKey?: string | undefined;
	readonly enforceOnKeyName?: string | undefined;
	readonly exceedAction?: string | undefined;
	readonly exceedRedirectOptions?: SecurityPolicyRuleRedirectOptions | undefined;
	readonly rateLimitThreshold?: SecurityPolicyRuleRateLimitOptionsThreshold | undefined;
}
export interface SecurityPolicyRuleRateLimitOptionsThreshold {
	readonly count?: number | undefined;
	readonly intervalSec?: number | undefined;
}
export interface SecurityPolicyRuleRedirectOptions {
	readonly target?: string | undefined;
	readonly type?: string | undefined;
}
export default {
	SecurityPolicies: SecurityPolicies,
};

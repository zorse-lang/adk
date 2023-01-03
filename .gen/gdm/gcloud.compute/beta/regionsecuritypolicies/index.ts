import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class RegionSecurityPolicies
	extends GdmResource<RegionSecurityPoliciesComponentInputs>
	implements RegionSecurityPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: RegionSecurityPoliciesComponentInputs) {
		super(entity, options.name, "compute.beta.RegionSecurityPolicies", options);
	}
	public readonly creationTimestamp?: string | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly parent?: string | undefined;
	public readonly region?: string | undefined;
	public readonly ruleTupleCount?: number | undefined;
	public readonly selfLink?: string | undefined;
	public readonly selfLinkWithId?: string | undefined;
}
export interface RegionSecurityPoliciesComponentOutputs {
	readonly creationTimestamp?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly parent?: string | undefined;
	readonly region?: string | undefined;
	readonly ruleTupleCount?: number | undefined;
	readonly selfLink?: string | undefined;
	readonly selfLinkWithId?: string | undefined;
}
export interface RegionSecurityPoliciesComponentInputs {
	readonly adaptiveProtectionConfig?: SecurityPolicyAdaptiveProtectionConfig | undefined;
	readonly advancedOptionsConfig?: SecurityPolicyAdvancedOptionsConfig | undefined;
	readonly associations?: SecurityPolicyAssociation[] | undefined;
	readonly ddosProtectionConfig?: SecurityPolicyDdosProtectionConfig | undefined;
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly fingerprint?: string | undefined;
	readonly labelFingerprint?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
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
	readonly associations?: SecurityPolicyAssociation[] | undefined;
	readonly creationTimestamp?: string | undefined;
	readonly ddosProtectionConfig?: SecurityPolicyDdosProtectionConfig | undefined;
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly fingerprint?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly labelFingerprint?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly name?: string | undefined;
	readonly parent?: string | undefined;
	readonly recaptchaOptionsConfig?: SecurityPolicyRecaptchaOptionsConfig | undefined;
	readonly region?: string | undefined;
	readonly rules?: SecurityPolicyRule[] | undefined;
	readonly ruleTupleCount?: number | undefined;
	readonly selfLink?: string | undefined;
	readonly selfLinkWithId?: string | undefined;
	readonly type?: string | undefined;
}
export interface SecurityPolicyAdaptiveProtectionConfig {
	readonly autoDeployConfig?: SecurityPolicyAdaptiveProtectionConfigAutoDeployConfig | undefined;
	readonly layer7DdosDefenseConfig?: SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig | undefined;
}
export interface SecurityPolicyAdaptiveProtectionConfigAutoDeployConfig {
	readonly confidenceThreshold?: number | undefined;
	readonly expirationSec?: number | undefined;
	readonly impactedBaselineThreshold?: number | undefined;
	readonly loadThreshold?: number | undefined;
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
export interface SecurityPolicyAssociation {
	readonly attachmentId?: string | undefined;
	readonly displayName?: string | undefined;
	readonly name?: string | undefined;
	readonly securityPolicyId?: string | undefined;
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
	readonly direction?: string | undefined;
	readonly enableLogging?: boolean | undefined;
	readonly headerAction?: SecurityPolicyRuleHttpHeaderAction | undefined;
	readonly kind?: string | undefined;
	readonly match?: SecurityPolicyRuleMatcher | undefined;
	readonly preconfiguredWafConfig?: SecurityPolicyRulePreconfiguredWafConfig | undefined;
	readonly preview?: boolean | undefined;
	readonly priority?: number | undefined;
	readonly rateLimitOptions?: SecurityPolicyRuleRateLimitOptions | undefined;
	readonly redirectOptions?: SecurityPolicyRuleRedirectOptions | undefined;
	readonly ruleNumber?: string | undefined;
	readonly ruleTupleCount?: number | undefined;
	readonly targetResources?: string[] | undefined;
	readonly targetServiceAccounts?: string[] | undefined;
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
	readonly destIpRanges?: string[] | undefined;
	readonly layer4Configs?: SecurityPolicyRuleMatcherConfigLayer4Config[] | undefined;
	readonly srcIpRanges?: string[] | undefined;
}
export interface SecurityPolicyRuleMatcherConfigLayer4Config {
	readonly ipProtocol?: string | undefined;
	readonly ports?: string[] | undefined;
}
export interface SecurityPolicyRulePreconfiguredWafConfig {
	readonly exclusions?: SecurityPolicyRulePreconfiguredWafConfigExclusion[] | undefined;
}
export interface SecurityPolicyRulePreconfiguredWafConfigExclusion {
	readonly requestCookiesToExclude?: SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[] | undefined;
	readonly requestHeadersToExclude?: SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[] | undefined;
	readonly requestQueryParamsToExclude?: SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[] | undefined;
	readonly requestUrisToExclude?: SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[] | undefined;
	readonly targetRuleIds?: string[] | undefined;
	readonly targetRuleSet?: string | undefined;
}
export interface SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams {
	readonly op?: string | undefined;
	readonly val?: string | undefined;
}
export interface SecurityPolicyRuleRateLimitOptions {
	readonly banDurationSec?: number | undefined;
	readonly banThreshold?: SecurityPolicyRuleRateLimitOptionsThreshold | undefined;
	readonly conformAction?: string | undefined;
	readonly enforceOnKey?: string | undefined;
	readonly enforceOnKeyConfigs?: SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig[] | undefined;
	readonly enforceOnKeyName?: string | undefined;
	readonly exceedAction?: string | undefined;
	readonly exceedRedirectOptions?: SecurityPolicyRuleRedirectOptions | undefined;
	readonly rateLimitThreshold?: SecurityPolicyRuleRateLimitOptionsThreshold | undefined;
}
export interface SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig {
	readonly enforceOnKeyName?: string | undefined;
	readonly enforceOnKeyType?: string | undefined;
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
	RegionSecurityPolicies: RegionSecurityPolicies,
};

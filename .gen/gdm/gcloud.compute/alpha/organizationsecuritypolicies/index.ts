import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class OrganizationSecurityPolicies
	extends GdmResource<OrganizationSecurityPoliciesComponentInputs>
	implements OrganizationSecurityPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: OrganizationSecurityPoliciesComponentInputs) {
		super(entity, options.name, "compute.alpha.OrganizationSecurityPolicies", options);
	}
	public readonly creationTimestamp?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly parent?: string;
	public readonly region?: string;
	public readonly ruleTupleCount?: number;
	public readonly selfLink?: string;
	public readonly selfLinkWithId?: string;
}
export interface OrganizationSecurityPoliciesComponentOutputs {
	readonly creationTimestamp?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly parent?: string;
	readonly region?: string;
	readonly ruleTupleCount?: number;
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
}
export interface OrganizationSecurityPoliciesComponentInputs {
	readonly adaptiveProtectionConfig?: SecurityPolicyAdaptiveProtectionConfig;
	readonly advancedOptionsConfig?: SecurityPolicyAdvancedOptionsConfig;
	readonly associations?: SecurityPolicyAssociation[];
	readonly cloudArmorConfig?: SecurityPolicyCloudArmorConfig;
	readonly ddosProtectionConfig?: SecurityPolicyDdosProtectionConfig;
	readonly description?: string;
	readonly displayName?: string;
	readonly fingerprint?: string;
	readonly labelFingerprint?: string;
	readonly labels?: { [P in string]: string };
	readonly name: string;
	readonly parentId?: string;
	readonly recaptchaOptionsConfig?: SecurityPolicyRecaptchaOptionsConfig;
	readonly requestId?: string;
	readonly rules?: SecurityPolicyRule[];
	readonly userDefinedFields?: SecurityPolicyUserDefinedField[];
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
	readonly associations?: SecurityPolicyAssociation[];
	readonly cloudArmorConfig?: SecurityPolicyCloudArmorConfig;
	readonly creationTimestamp?: string;
	readonly ddosProtectionConfig?: SecurityPolicyDdosProtectionConfig;
	readonly description?: string;
	readonly displayName?: string;
	readonly fingerprint?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly labelFingerprint?: string;
	readonly labels?: { [P in string]: string };
	readonly name?: string;
	readonly parent?: string;
	readonly recaptchaOptionsConfig?: SecurityPolicyRecaptchaOptionsConfig;
	readonly region?: string;
	readonly rules?: SecurityPolicyRule[];
	readonly ruleTupleCount?: number;
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
	readonly type?: string;
	readonly userDefinedFields?: SecurityPolicyUserDefinedField[];
}
export interface SecurityPolicyAdaptiveProtectionConfig {
	readonly autoDeployConfig?: SecurityPolicyAdaptiveProtectionConfigAutoDeployConfig;
	readonly layer7DdosDefenseConfig?: SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig;
}
export interface SecurityPolicyAdaptiveProtectionConfigAutoDeployConfig {
	readonly confidenceThreshold?: number;
	readonly expirationSec?: number;
	readonly impactedBaselineThreshold?: number;
	readonly loadThreshold?: number;
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
export interface SecurityPolicyAssociation {
	readonly attachmentId?: string;
	readonly displayName?: string;
	readonly name?: string;
	readonly securityPolicyId?: string;
}
export interface SecurityPolicyCloudArmorConfig {
	readonly enableMl?: boolean;
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
	readonly direction?: string;
	readonly enableLogging?: boolean;
	readonly headerAction?: SecurityPolicyRuleHttpHeaderAction;
	readonly kind?: string;
	readonly match?: SecurityPolicyRuleMatcher;
	readonly networkMatch?: SecurityPolicyRuleNetworkMatcher;
	readonly preconfiguredWafConfig?: SecurityPolicyRulePreconfiguredWafConfig;
	readonly preview?: boolean;
	readonly priority?: number;
	readonly rateLimitOptions?: SecurityPolicyRuleRateLimitOptions;
	readonly redirectOptions?: SecurityPolicyRuleRedirectOptions;
	readonly redirectTarget?: string;
	readonly ruleManagedProtectionTier?: string;
	readonly ruleNumber?: string;
	readonly ruleTupleCount?: number;
	readonly targetResources?: string[];
	readonly targetServiceAccounts?: string[];
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
	readonly destIpRanges?: string[];
	readonly destPorts?: SecurityPolicyRuleMatcherConfigDestinationPort[];
	readonly layer4Configs?: SecurityPolicyRuleMatcherConfigLayer4Config[];
	readonly srcIpRanges?: string[];
}
export interface SecurityPolicyRuleMatcherConfigDestinationPort {
	readonly ipProtocol?: string;
	readonly ports?: string[];
}
export interface SecurityPolicyRuleMatcherConfigLayer4Config {
	readonly ipProtocol?: string;
	readonly ports?: string[];
}
export interface SecurityPolicyRuleNetworkMatcher {
	readonly destIpRanges?: string[];
	readonly destPorts?: string[];
	readonly ipProtocols?: string[];
	readonly srcAsns?: number[];
	readonly srcIpRanges?: string[];
	readonly srcPorts?: string[];
	readonly srcRegionCodes?: string[];
	readonly userDefinedFields?: SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch[];
}
export interface SecurityPolicyRuleNetworkMatcherUserDefinedFieldMatch {
	readonly name?: string;
	readonly values?: string[];
}
export interface SecurityPolicyRulePreconfiguredWafConfig {
	readonly exclusions?: SecurityPolicyRulePreconfiguredWafConfigExclusion[];
}
export interface SecurityPolicyRulePreconfiguredWafConfigExclusion {
	readonly requestCookiesToExclude?: SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[];
	readonly requestHeadersToExclude?: SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[];
	readonly requestQueryParamsToExclude?: SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[];
	readonly requestUrisToExclude?: SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams[];
	readonly targetRuleIds?: string[];
	readonly targetRuleSet?: string;
}
export interface SecurityPolicyRulePreconfiguredWafConfigExclusionFieldParams {
	readonly op?: string;
	readonly val?: string;
}
export interface SecurityPolicyRuleRateLimitOptions {
	readonly banDurationSec?: number;
	readonly banThreshold?: SecurityPolicyRuleRateLimitOptionsThreshold;
	readonly conformAction?: string;
	readonly enforceOnKey?: string;
	readonly enforceOnKeyConfigs?: SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig[];
	readonly enforceOnKeyName?: string;
	readonly exceedAction?: string;
	readonly exceedActionRpcStatus?: SecurityPolicyRuleRateLimitOptionsRpcStatus;
	readonly exceedRedirectOptions?: SecurityPolicyRuleRedirectOptions;
	readonly rateLimitThreshold?: SecurityPolicyRuleRateLimitOptionsThreshold;
}
export interface SecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfig {
	readonly enforceOnKeyName?: string;
	readonly enforceOnKeyType?: string;
}
export interface SecurityPolicyRuleRateLimitOptionsRpcStatus {
	readonly code?: number;
	readonly message?: string;
}
export interface SecurityPolicyRuleRateLimitOptionsThreshold {
	readonly count?: number;
	readonly intervalSec?: number;
}
export interface SecurityPolicyRuleRedirectOptions {
	readonly target?: string;
	readonly type?: string;
}
export interface SecurityPolicyUserDefinedField {
	readonly base?: string;
	readonly mask?: string;
	readonly name?: string;
	readonly offset?: number;
	readonly size?: number;
}
export default {
	OrganizationSecurityPolicies: OrganizationSecurityPolicies,
};

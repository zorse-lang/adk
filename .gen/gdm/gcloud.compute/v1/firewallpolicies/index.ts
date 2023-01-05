import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class FirewallPolicies
	extends GdmResource<FirewallPoliciesComponentInputs>
	implements FirewallPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: FirewallPoliciesComponentInputs) {
		super(entity, options.name, "compute.v1.FirewallPolicies", options);
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
export interface FirewallPoliciesComponentOutputs {
	readonly creationTimestamp?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly parent?: string;
	readonly region?: string;
	readonly ruleTupleCount?: number;
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
}
export interface FirewallPoliciesComponentInputs {
	readonly associations?: FirewallPolicyAssociation[];
	readonly description?: string;
	readonly displayName?: string;
	readonly fingerprint?: string;
	readonly name: string;
	readonly parentId?: string;
	readonly requestId?: string;
	readonly rules?: FirewallPolicyRule[];
	readonly shortName?: string;
}
export interface FirewallPolicy {
	readonly associations?: FirewallPolicyAssociation[];
	readonly creationTimestamp?: string;
	readonly description?: string;
	readonly displayName?: string;
	readonly fingerprint?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly name?: string;
	readonly parent?: string;
	readonly region?: string;
	readonly rules?: FirewallPolicyRule[];
	readonly ruleTupleCount?: number;
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
	readonly shortName?: string;
}
export interface FirewallPolicyAssociation {
	readonly attachmentTarget?: string;
	readonly displayName?: string;
	readonly firewallPolicyId?: string;
	readonly name?: string;
	readonly shortName?: string;
}
export interface FirewallPolicyRule {
	readonly action?: string;
	readonly description?: string;
	readonly direction?: string;
	readonly disabled?: boolean;
	readonly enableLogging?: boolean;
	readonly kind?: string;
	readonly match?: FirewallPolicyRuleMatcher;
	readonly priority?: number;
	readonly ruleName?: string;
	readonly ruleTupleCount?: number;
	readonly targetResources?: string[];
	readonly targetSecureTags?: FirewallPolicyRuleSecureTag[];
	readonly targetServiceAccounts?: string[];
}
export interface FirewallPolicyRuleMatcher {
	readonly destIpRanges?: string[];
	readonly layer4Configs?: FirewallPolicyRuleMatcherLayer4Config[];
	readonly srcIpRanges?: string[];
	readonly srcSecureTags?: FirewallPolicyRuleSecureTag[];
}
export interface FirewallPolicyRuleMatcherLayer4Config {
	readonly ipProtocol?: string;
	readonly ports?: string[];
}
export interface FirewallPolicyRuleSecureTag {
	readonly name?: string;
	readonly state?: string;
}
export default {
	FirewallPolicies: FirewallPolicies,
};

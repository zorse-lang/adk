import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class RegionNetworkFirewallPolicies
	extends GdmResource<RegionNetworkFirewallPoliciesComponentInputs>
	implements RegionNetworkFirewallPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: RegionNetworkFirewallPoliciesComponentInputs) {
		super(entity, options.name, "compute.v1.RegionNetworkFirewallPolicies", options);
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
export interface RegionNetworkFirewallPoliciesComponentOutputs {
	readonly creationTimestamp?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly parent?: string | undefined;
	readonly region?: string | undefined;
	readonly ruleTupleCount?: number | undefined;
	readonly selfLink?: string | undefined;
	readonly selfLinkWithId?: string | undefined;
}
export interface RegionNetworkFirewallPoliciesComponentInputs {
	readonly associations?: FirewallPolicyAssociation[] | undefined;
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly fingerprint?: string | undefined;
	readonly name: string;
	readonly requestId?: string | undefined;
	readonly rules?: FirewallPolicyRule[] | undefined;
	readonly shortName?: string | undefined;
	readonly type: string;
}
export interface FirewallPolicy {
	readonly associations?: FirewallPolicyAssociation[] | undefined;
	readonly creationTimestamp?: string | undefined;
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly fingerprint?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly name?: string | undefined;
	readonly parent?: string | undefined;
	readonly region?: string | undefined;
	readonly rules?: FirewallPolicyRule[] | undefined;
	readonly ruleTupleCount?: number | undefined;
	readonly selfLink?: string | undefined;
	readonly selfLinkWithId?: string | undefined;
	readonly shortName?: string | undefined;
}
export interface FirewallPolicyAssociation {
	readonly attachmentTarget?: string | undefined;
	readonly displayName?: string | undefined;
	readonly firewallPolicyId?: string | undefined;
	readonly name?: string | undefined;
	readonly shortName?: string | undefined;
}
export interface FirewallPolicyRule {
	readonly action?: string | undefined;
	readonly description?: string | undefined;
	readonly direction?: string | undefined;
	readonly disabled?: boolean | undefined;
	readonly enableLogging?: boolean | undefined;
	readonly kind?: string | undefined;
	readonly match?: FirewallPolicyRuleMatcher | undefined;
	readonly priority?: number | undefined;
	readonly ruleName?: string | undefined;
	readonly ruleTupleCount?: number | undefined;
	readonly targetResources?: string[] | undefined;
	readonly targetSecureTags?: FirewallPolicyRuleSecureTag[] | undefined;
	readonly targetServiceAccounts?: string[] | undefined;
}
export interface FirewallPolicyRuleMatcher {
	readonly destIpRanges?: string[] | undefined;
	readonly layer4Configs?: FirewallPolicyRuleMatcherLayer4Config[] | undefined;
	readonly srcIpRanges?: string[] | undefined;
	readonly srcSecureTags?: FirewallPolicyRuleSecureTag[] | undefined;
}
export interface FirewallPolicyRuleMatcherLayer4Config {
	readonly ipProtocol?: string | undefined;
	readonly ports?: string[] | undefined;
}
export interface FirewallPolicyRuleSecureTag {
	readonly name?: string | undefined;
	readonly state?: string | undefined;
}
export default {
	RegionNetworkFirewallPolicies: RegionNetworkFirewallPolicies,
};

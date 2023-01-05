import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class RegionNetworkFirewallPolicies
	extends GdmResource<RegionNetworkFirewallPoliciesComponentInputs>
	implements RegionNetworkFirewallPoliciesComponentOutputs
{
	constructor(entity: ADKEntity, options: RegionNetworkFirewallPoliciesComponentInputs) {
		super(entity, options.name, "compute.beta.RegionNetworkFirewallPolicies", options);
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
export interface RegionNetworkFirewallPoliciesComponentOutputs {
	readonly creationTimestamp?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly parent?: string;
	readonly region?: string;
	readonly ruleTupleCount?: number;
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
}
export interface RegionNetworkFirewallPoliciesComponentInputs {
	readonly associations?: FirewallPolicyAssociation[];
	readonly description?: string;
	readonly displayName?: string;
	readonly fingerprint?: string;
	readonly name: string;
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
	readonly destAddressGroups?: string[];
	readonly destFqdns?: string[];
	readonly destIpRanges?: string[];
	readonly destRegionCodes?: string[];
	readonly destThreatIntelligences?: string[];
	readonly layer4Configs?: FirewallPolicyRuleMatcherLayer4Config[];
	readonly srcAddressGroups?: string[];
	readonly srcFqdns?: string[];
	readonly srcIpRanges?: string[];
	readonly srcRegionCodes?: string[];
	readonly srcSecureTags?: FirewallPolicyRuleSecureTag[];
	readonly srcThreatIntelligences?: string[];
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
	RegionNetworkFirewallPolicies: RegionNetworkFirewallPolicies,
};

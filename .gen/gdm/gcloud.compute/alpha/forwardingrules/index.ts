import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ForwardingRules
	extends GdmResource<ForwardingRulesComponentInputs>
	implements ForwardingRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: ForwardingRulesComponentInputs) {
		super(entity, options.name, "compute.alpha.ForwardingRules", options);
	}
	public readonly baseForwardingRule?: string;
	public readonly creationTimestamp?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly pscConnectionId?: string;
	public readonly region?: string;
	public readonly selfLink?: string;
	public readonly selfLinkWithId?: string;
	public readonly serviceName?: string;
}
export interface ForwardingRulesComponentOutputs {
	readonly baseForwardingRule?: string;
	readonly creationTimestamp?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly pscConnectionId?: string;
	readonly region?: string;
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
	readonly serviceName?: string;
}
export interface ForwardingRulesComponentInputs {
	readonly allowGlobalAccess?: boolean;
	readonly allowPscGlobalAccess?: boolean;
	readonly allPorts?: boolean;
	readonly backendService?: string;
	readonly description?: string;
	readonly fingerprint?: string;
	readonly IPAddress?: string;
	readonly IPProtocol?: string;
	readonly ipVersion?: string;
	readonly isMirroringCollector?: boolean;
	readonly labelFingerprint?: string;
	readonly labels?: { [P in string]: string };
	readonly loadBalancingScheme?: string;
	readonly metadataFilters?: MetadataFilter[];
	readonly name: string;
	readonly network?: string;
	readonly networkTier?: string;
	readonly noAutomateDnsZone?: boolean;
	readonly portRange?: string;
	readonly ports?: string[];
	readonly pscConnectionStatus?: string;
	readonly requestId?: string;
	readonly serviceDirectoryRegistrations?: ForwardingRuleServiceDirectoryRegistration[];
	readonly serviceLabel?: string;
	readonly sourceIpRanges?: string[];
	readonly subnetwork?: string;
	readonly target?: string;
}
export interface ForwardingRule {
	readonly allowGlobalAccess?: boolean;
	readonly allowPscGlobalAccess?: boolean;
	readonly allPorts?: boolean;
	readonly backendService?: string;
	readonly baseForwardingRule?: string;
	readonly creationTimestamp?: string;
	readonly description?: string;
	readonly fingerprint?: string;
	readonly id?: string;
	readonly IPAddress?: string;
	readonly IPProtocol?: string;
	readonly ipVersion?: string;
	readonly isMirroringCollector?: boolean;
	readonly kind?: string;
	readonly labelFingerprint?: string;
	readonly labels?: { [P in string]: string };
	readonly loadBalancingScheme?: string;
	readonly metadataFilters?: MetadataFilter[];
	readonly name?: string;
	readonly network?: string;
	readonly networkTier?: string;
	readonly noAutomateDnsZone?: boolean;
	readonly portRange?: string;
	readonly ports?: string[];
	readonly pscConnectionId?: string;
	readonly pscConnectionStatus?: string;
	readonly region?: string;
	readonly selfLink?: string;
	readonly selfLinkWithId?: string;
	readonly serviceDirectoryRegistrations?: ForwardingRuleServiceDirectoryRegistration[];
	readonly serviceLabel?: string;
	readonly serviceName?: string;
	readonly sourceIpRanges?: string[];
	readonly subnetwork?: string;
	readonly target?: string;
}
export interface ForwardingRuleServiceDirectoryRegistration {
	readonly namespace?: string;
	readonly service?: string;
	readonly serviceDirectoryRegion?: string;
}
export interface MetadataFilter {
	readonly filterLabels?: MetadataFilterLabelMatch[];
	readonly filterMatchCriteria?: string;
}
export interface MetadataFilterLabelMatch {
	readonly name?: string;
	readonly value?: string;
}
export default {
	ForwardingRules: ForwardingRules,
};

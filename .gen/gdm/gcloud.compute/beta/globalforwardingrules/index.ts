import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class GlobalForwardingRules
	extends GdmResource<GlobalForwardingRulesComponentInputs>
	implements GlobalForwardingRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: GlobalForwardingRulesComponentInputs) {
		super(entity, options.name, "compute.beta.GlobalForwardingRules", options);
	}
	public readonly baseForwardingRule?: string | undefined;
	public readonly creationTimestamp?: string | undefined;
	public readonly id?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly pscConnectionId?: string | undefined;
	public readonly region?: string | undefined;
	public readonly selfLink?: string | undefined;
	public readonly serviceName?: string | undefined;
}
export interface GlobalForwardingRulesComponentOutputs {
	readonly baseForwardingRule?: string | undefined;
	readonly creationTimestamp?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly pscConnectionId?: string | undefined;
	readonly region?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly serviceName?: string | undefined;
}
export interface GlobalForwardingRulesComponentInputs {
	readonly allowGlobalAccess?: boolean | undefined;
	readonly allPorts?: boolean | undefined;
	readonly backendService?: string | undefined;
	readonly description?: string | undefined;
	readonly fingerprint?: string | undefined;
	readonly IPAddress?: string | undefined;
	readonly IPProtocol?: string | undefined;
	readonly ipVersion?: string | undefined;
	readonly isMirroringCollector?: boolean | undefined;
	readonly labelFingerprint?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly loadBalancingScheme?: string | undefined;
	readonly metadataFilters?: MetadataFilter[] | undefined;
	readonly name: string;
	readonly network?: string | undefined;
	readonly networkTier?: string | undefined;
	readonly noAutomateDnsZone?: boolean | undefined;
	readonly portRange?: string | undefined;
	readonly ports?: string[] | undefined;
	readonly pscConnectionStatus?: string | undefined;
	readonly requestId?: string | undefined;
	readonly serviceDirectoryRegistrations?: ForwardingRuleServiceDirectoryRegistration[] | undefined;
	readonly serviceLabel?: string | undefined;
	readonly sourceIpRanges?: string[] | undefined;
	readonly subnetwork?: string | undefined;
	readonly target?: string | undefined;
	readonly type: string;
}
export interface ForwardingRule {
	readonly allowGlobalAccess?: boolean | undefined;
	readonly allPorts?: boolean | undefined;
	readonly backendService?: string | undefined;
	readonly baseForwardingRule?: string | undefined;
	readonly creationTimestamp?: string | undefined;
	readonly description?: string | undefined;
	readonly fingerprint?: string | undefined;
	readonly id?: string | undefined;
	readonly IPAddress?: string | undefined;
	readonly IPProtocol?: string | undefined;
	readonly ipVersion?: string | undefined;
	readonly isMirroringCollector?: boolean | undefined;
	readonly kind?: string | undefined;
	readonly labelFingerprint?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly loadBalancingScheme?: string | undefined;
	readonly metadataFilters?: MetadataFilter[] | undefined;
	readonly name?: string | undefined;
	readonly network?: string | undefined;
	readonly networkTier?: string | undefined;
	readonly noAutomateDnsZone?: boolean | undefined;
	readonly portRange?: string | undefined;
	readonly ports?: string[] | undefined;
	readonly pscConnectionId?: string | undefined;
	readonly pscConnectionStatus?: string | undefined;
	readonly region?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly serviceDirectoryRegistrations?: ForwardingRuleServiceDirectoryRegistration[] | undefined;
	readonly serviceLabel?: string | undefined;
	readonly serviceName?: string | undefined;
	readonly sourceIpRanges?: string[] | undefined;
	readonly subnetwork?: string | undefined;
	readonly target?: string | undefined;
}
export interface ForwardingRuleServiceDirectoryRegistration {
	readonly namespace?: string | undefined;
	readonly service?: string | undefined;
	readonly serviceDirectoryRegion?: string | undefined;
}
export interface MetadataFilter {
	readonly filterLabels?: MetadataFilterLabelMatch[] | undefined;
	readonly filterMatchCriteria?: string | undefined;
}
export interface MetadataFilterLabelMatch {
	readonly name?: string | undefined;
	readonly value?: string | undefined;
}
export default {
	GlobalForwardingRules: GlobalForwardingRules,
};
import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class GlobalForwardingRules
	extends GdmResource<GlobalForwardingRulesComponentInputs>
	implements GlobalForwardingRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: GlobalForwardingRulesComponentInputs) {
		super(entity, options.name, "compute.v1.GlobalForwardingRules", options);
	}
	public readonly creationTimestamp?: string;
	public readonly id?: string;
	public readonly kind?: string;
	public readonly pscConnectionId?: string;
	public readonly region?: string;
	public readonly selfLink?: string;
	public readonly serviceName?: string;
}
export interface GlobalForwardingRulesComponentOutputs {
	readonly creationTimestamp?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly pscConnectionId?: string;
	readonly region?: string;
	readonly selfLink?: string;
	readonly serviceName?: string;
}
export interface GlobalForwardingRulesComponentInputs {
	readonly allowGlobalAccess?: boolean;
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
	readonly subnetwork?: string;
	readonly target?: string;
}
export interface ForwardingRule {
	readonly allowGlobalAccess?: boolean;
	readonly allPorts?: boolean;
	readonly backendService?: string;
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
	readonly serviceDirectoryRegistrations?: ForwardingRuleServiceDirectoryRegistration[];
	readonly serviceLabel?: string;
	readonly serviceName?: string;
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
	GlobalForwardingRules: GlobalForwardingRules,
};
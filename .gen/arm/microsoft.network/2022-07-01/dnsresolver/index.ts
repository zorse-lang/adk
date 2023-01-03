import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class dnsForwardingRulesets
	extends ArmResource<dnsForwardingRulesetsComponentInputs>
	implements dnsForwardingRulesetsComponentOutputs
{
	constructor(entity: ADKEntity, options: dnsForwardingRulesetsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/dnsForwardingRulesets", "2022-07-01", options);
	}
	public readonly apiVersion: "2022-07-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/dnsForwardingRulesets";
}
export interface dnsForwardingRulesetsComponentOutputs {
	readonly apiVersion: "2022-07-01";
	readonly id: string;
	readonly type: "Microsoft.Network/dnsForwardingRulesets";
}
export interface dnsForwardingRulesetsComponentInputs {
	readonly etag?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties: DnsForwardingRulesetProperties;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class dnsForwardingRulesets_forwardingRules
	extends ArmResource<dnsForwardingRulesets_forwardingRulesComponentInputs>
	implements dnsForwardingRulesets_forwardingRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: dnsForwardingRulesets_forwardingRulesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/dnsForwardingRulesets/forwardingRules", "2022-07-01", options);
	}
	public readonly apiVersion: "2022-07-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/dnsForwardingRulesets/forwardingRules";
}
export interface dnsForwardingRulesets_forwardingRulesComponentOutputs {
	readonly apiVersion: "2022-07-01";
	readonly id: string;
	readonly type: "Microsoft.Network/dnsForwardingRulesets/forwardingRules";
}
export interface dnsForwardingRulesets_forwardingRulesComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties: ForwardingRuleProperties;
	readonly systemData?: SystemData | undefined;
}
export class dnsForwardingRulesets_virtualNetworkLinks
	extends ArmResource<dnsForwardingRulesets_virtualNetworkLinksComponentInputs>
	implements dnsForwardingRulesets_virtualNetworkLinksComponentOutputs
{
	constructor(entity: ADKEntity, options: dnsForwardingRulesets_virtualNetworkLinksComponentInputs) {
		super(entity, options.name, "Microsoft.Network/dnsForwardingRulesets/virtualNetworkLinks", "2022-07-01", options);
	}
	public readonly apiVersion: "2022-07-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/dnsForwardingRulesets/virtualNetworkLinks";
}
export interface dnsForwardingRulesets_virtualNetworkLinksComponentOutputs {
	readonly apiVersion: "2022-07-01";
	readonly id: string;
	readonly type: "Microsoft.Network/dnsForwardingRulesets/virtualNetworkLinks";
}
export interface dnsForwardingRulesets_virtualNetworkLinksComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties: VirtualNetworkLinkProperties;
	readonly systemData?: SystemData | undefined;
}
export class dnsResolvers extends ArmResource<dnsResolversComponentInputs> implements dnsResolversComponentOutputs {
	constructor(entity: ADKEntity, options: dnsResolversComponentInputs) {
		super(entity, options.name, "Microsoft.Network/dnsResolvers", "2022-07-01", options);
	}
	public readonly apiVersion: "2022-07-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/dnsResolvers";
}
export interface dnsResolversComponentOutputs {
	readonly apiVersion: "2022-07-01";
	readonly id: string;
	readonly type: "Microsoft.Network/dnsResolvers";
}
export interface dnsResolversComponentInputs {
	readonly etag?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties: DnsResolverProperties;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class dnsResolvers_inboundEndpoints
	extends ArmResource<dnsResolvers_inboundEndpointsComponentInputs>
	implements dnsResolvers_inboundEndpointsComponentOutputs
{
	constructor(entity: ADKEntity, options: dnsResolvers_inboundEndpointsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/dnsResolvers/inboundEndpoints", "2022-07-01", options);
	}
	public readonly apiVersion: "2022-07-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/dnsResolvers/inboundEndpoints";
}
export interface dnsResolvers_inboundEndpointsComponentOutputs {
	readonly apiVersion: "2022-07-01";
	readonly id: string;
	readonly type: "Microsoft.Network/dnsResolvers/inboundEndpoints";
}
export interface dnsResolvers_inboundEndpointsComponentInputs {
	readonly etag?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties: InboundEndpointProperties;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class dnsResolvers_outboundEndpoints
	extends ArmResource<dnsResolvers_outboundEndpointsComponentInputs>
	implements dnsResolvers_outboundEndpointsComponentOutputs
{
	constructor(entity: ADKEntity, options: dnsResolvers_outboundEndpointsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/dnsResolvers/outboundEndpoints", "2022-07-01", options);
	}
	public readonly apiVersion: "2022-07-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/dnsResolvers/outboundEndpoints";
}
export interface dnsResolvers_outboundEndpointsComponentOutputs {
	readonly apiVersion: "2022-07-01";
	readonly id: string;
	readonly type: "Microsoft.Network/dnsResolvers/outboundEndpoints";
}
export interface dnsResolvers_outboundEndpointsComponentInputs {
	readonly etag?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties: OutboundEndpointProperties;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export function listDnsForwardingRulesets(resource: ArmResource): VirtualNetworkDnsForwardingRulesetListResult {
	if (resource.apiVersion !== "2022-07-01") {
		throw new Error(`listDnsForwardingRulesets is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Network/virtualNetworks") {
		throw new Error(`listDnsForwardingRulesets is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listDnsResolvers(resource: ArmResource): SubResourceListResult {
	if (resource.apiVersion !== "2022-07-01") {
		throw new Error(`listDnsResolvers is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Network/virtualNetworks") {
		throw new Error(`listDnsResolvers is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface DnsForwardingRulesetProperties {
	readonly dnsResolverOutboundEndpoints: SubResource[];
	readonly provisioningState?: ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly resourceGuid?: string | undefined;
}
export interface DnsResolverProperties {
	readonly dnsResolverState?: ("Connected" | "Disconnected") | undefined;
	readonly provisioningState?: ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly resourceGuid?: string | undefined;
	readonly virtualNetwork: SubResource;
}
export interface ForwardingRuleProperties {
	readonly domainName: string;
	readonly forwardingRuleState?: ("Disabled" | "Enabled") | undefined;
	readonly metadata?: ForwardingRulePropertiesMetadata | undefined;
	readonly provisioningState?: ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly targetDnsServers: TargetDnsServer[];
}
export interface ForwardingRulePropertiesMetadata {
	readonly "[ key: string ]"?: string | undefined;
}
export interface InboundEndpointProperties {
	readonly ipConfigurations: IpConfiguration[];
	readonly provisioningState?: ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly resourceGuid?: string | undefined;
}
export interface IpConfiguration {
	readonly privateIpAddress?: string | undefined;
	readonly privateIpAllocationMethod?: ("Dynamic" | "Static") | undefined;
	readonly subnet: SubResource;
}
export interface OutboundEndpointProperties {
	readonly provisioningState?: ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly resourceGuid?: string | undefined;
	readonly subnet: SubResource;
}
export interface SubResource {
	readonly id: string;
}
export interface SubResourceListResult {
	readonly nextLink?: string | undefined;
	readonly value?: SubResource[] | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface TargetDnsServer {
	readonly ipAddress: string;
	readonly port?: number | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface VirtualNetworkDnsForwardingRuleset {
	readonly id?: string | undefined;
	readonly properties?: VirtualNetworkLinkSubResourceProperties | undefined;
}
export interface VirtualNetworkDnsForwardingRulesetListResult {
	readonly nextLink?: string | undefined;
	readonly value?: VirtualNetworkDnsForwardingRuleset[] | undefined;
}
export interface VirtualNetworkLinkProperties {
	readonly metadata?: VirtualNetworkLinkPropertiesMetadata | undefined;
	readonly provisioningState?: ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly virtualNetwork: SubResource;
}
export interface VirtualNetworkLinkPropertiesMetadata {
	readonly "[ key: string ]"?: string | undefined;
}
export interface VirtualNetworkLinkSubResourceProperties {
	readonly virtualNetworkLink?: SubResource | undefined;
}
export default {
	dnsForwardingRulesets: dnsForwardingRulesets,
	"dnsForwardingRulesets/forwardingRules": dnsForwardingRulesets_forwardingRules,
	"dnsForwardingRulesets/virtualNetworkLinks": dnsForwardingRulesets_virtualNetworkLinks,
	dnsResolvers: dnsResolvers,
	"dnsResolvers/inboundEndpoints": dnsResolvers_inboundEndpoints,
	"dnsResolvers/outboundEndpoints": dnsResolvers_outboundEndpoints,
};

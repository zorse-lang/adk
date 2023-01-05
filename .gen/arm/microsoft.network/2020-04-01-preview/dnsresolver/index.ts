import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class dnsForwardingRulesets
	extends ArmResource<dnsForwardingRulesetsComponentInputs>
	implements dnsForwardingRulesetsComponentOutputs
{
	constructor(entity: ADKEntity, options: dnsForwardingRulesetsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/dnsForwardingRulesets", "2020-04-01-preview", options);
	}
	public readonly apiVersion: "2020-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Network/dnsForwardingRulesets";
}
export interface dnsForwardingRulesetsComponentOutputs {
	readonly apiVersion: "2020-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Network/dnsForwardingRulesets";
}
export interface dnsForwardingRulesetsComponentInputs {
	readonly etag?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: DnsForwardingRulesetProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class dnsForwardingRulesets_forwardingRules
	extends ArmResource<dnsForwardingRulesets_forwardingRulesComponentInputs>
	implements dnsForwardingRulesets_forwardingRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: dnsForwardingRulesets_forwardingRulesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Network/dnsForwardingRulesets/forwardingRules",
			"2020-04-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2020-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Network/dnsForwardingRulesets/forwardingRules";
}
export interface dnsForwardingRulesets_forwardingRulesComponentOutputs {
	readonly apiVersion: "2020-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Network/dnsForwardingRulesets/forwardingRules";
}
export interface dnsForwardingRulesets_forwardingRulesComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: ForwardingRuleProperties;
	readonly systemData?: SystemData;
}
export class dnsForwardingRulesets_virtualNetworkLinks
	extends ArmResource<dnsForwardingRulesets_virtualNetworkLinksComponentInputs>
	implements dnsForwardingRulesets_virtualNetworkLinksComponentOutputs
{
	constructor(entity: ADKEntity, options: dnsForwardingRulesets_virtualNetworkLinksComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Network/dnsForwardingRulesets/virtualNetworkLinks",
			"2020-04-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2020-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Network/dnsForwardingRulesets/virtualNetworkLinks";
}
export interface dnsForwardingRulesets_virtualNetworkLinksComponentOutputs {
	readonly apiVersion: "2020-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Network/dnsForwardingRulesets/virtualNetworkLinks";
}
export interface dnsForwardingRulesets_virtualNetworkLinksComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: VirtualNetworkLinkProperties;
	readonly systemData?: SystemData;
}
export class dnsResolvers extends ArmResource<dnsResolversComponentInputs> implements dnsResolversComponentOutputs {
	constructor(entity: ADKEntity, options: dnsResolversComponentInputs) {
		super(entity, options.name, "Microsoft.Network/dnsResolvers", "2020-04-01-preview", options);
	}
	public readonly apiVersion: "2020-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Network/dnsResolvers";
}
export interface dnsResolversComponentOutputs {
	readonly apiVersion: "2020-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Network/dnsResolvers";
}
export interface dnsResolversComponentInputs {
	readonly etag?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: DnsResolverProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class dnsResolvers_inboundEndpoints
	extends ArmResource<dnsResolvers_inboundEndpointsComponentInputs>
	implements dnsResolvers_inboundEndpointsComponentOutputs
{
	constructor(entity: ADKEntity, options: dnsResolvers_inboundEndpointsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/dnsResolvers/inboundEndpoints", "2020-04-01-preview", options);
	}
	public readonly apiVersion: "2020-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Network/dnsResolvers/inboundEndpoints";
}
export interface dnsResolvers_inboundEndpointsComponentOutputs {
	readonly apiVersion: "2020-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Network/dnsResolvers/inboundEndpoints";
}
export interface dnsResolvers_inboundEndpointsComponentInputs {
	readonly etag?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: InboundEndpointProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class dnsResolvers_outboundEndpoints
	extends ArmResource<dnsResolvers_outboundEndpointsComponentInputs>
	implements dnsResolvers_outboundEndpointsComponentOutputs
{
	constructor(entity: ADKEntity, options: dnsResolvers_outboundEndpointsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/dnsResolvers/outboundEndpoints", "2020-04-01-preview", options);
	}
	public readonly apiVersion: "2020-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Network/dnsResolvers/outboundEndpoints";
}
export interface dnsResolvers_outboundEndpointsComponentOutputs {
	readonly apiVersion: "2020-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Network/dnsResolvers/outboundEndpoints";
}
export interface dnsResolvers_outboundEndpointsComponentInputs {
	readonly etag?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: OutboundEndpointProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export function listDnsForwardingRulesets(resource: ArmResource): VirtualNetworkDnsForwardingRulesetListResult {
	if (resource.apiVersion !== "2020-04-01-preview") {
		throw new Error(`listDnsForwardingRulesets is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Network/virtualNetworks") {
		throw new Error(`listDnsForwardingRulesets is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listDnsResolvers(resource: ArmResource): SubResourceListResult {
	if (resource.apiVersion !== "2020-04-01-preview") {
		throw new Error(`listDnsResolvers is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Network/virtualNetworks") {
		throw new Error(`listDnsResolvers is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface DnsForwardingRulesetProperties {
	readonly dnsResolverOutboundEndpoints?: SubResource[];
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly resourceGuid?: string;
}
export interface DnsResolverProperties {
	readonly dnsResolverState?: "Connected" | "Disconnected";
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly resourceGuid?: string;
	readonly virtualNetwork: SubResource;
}
export interface ForwardingRuleProperties {
	readonly domainName: string;
	readonly forwardingRuleState?: "Disabled" | "Enabled";
	readonly metadata?: ForwardingRulePropertiesMetadata;
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly targetDnsServers: TargetDnsServer[];
}
export interface ForwardingRulePropertiesMetadata {
	readonly [key: string]: string;
}
export interface InboundEndpointProperties {
	readonly ipConfigurations?: IpConfiguration[];
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly resourceGuid?: string;
}
export interface IpConfiguration {
	readonly privateIpAddress?: string;
	readonly privateIpAllocationMethod?: "Dynamic" | "Static";
	readonly subnet?: SubResource;
}
export interface OutboundEndpointProperties {
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly resourceGuid?: string;
	readonly subnet?: SubResource;
}
export interface SubResource {
	readonly id?: string;
}
export interface SubResourceListResult {
	readonly nextLink?: string;
	readonly value?: SubResource[];
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface TargetDnsServer {
	readonly ipAddress?: string;
	readonly port?: number;
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export interface VirtualNetworkDnsForwardingRuleset {
	readonly id?: string;
	readonly properties?: VirtualNetworkLinkSubResourceProperties;
}
export interface VirtualNetworkDnsForwardingRulesetListResult {
	readonly nextLink?: string;
	readonly value?: VirtualNetworkDnsForwardingRuleset[];
}
export interface VirtualNetworkLinkProperties {
	readonly metadata?: VirtualNetworkLinkPropertiesMetadata;
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly virtualNetwork?: SubResource;
}
export interface VirtualNetworkLinkPropertiesMetadata {
	readonly [key: string]: string;
}
export interface VirtualNetworkLinkSubResourceProperties {
	readonly virtualNetworkLink?: SubResource;
}
export default {
	dnsForwardingRulesets: dnsForwardingRulesets,
	"dnsForwardingRulesets/forwardingRules": dnsForwardingRulesets_forwardingRules,
	"dnsForwardingRulesets/virtualNetworkLinks": dnsForwardingRulesets_virtualNetworkLinks,
	dnsResolvers: dnsResolvers,
	"dnsResolvers/inboundEndpoints": dnsResolvers_inboundEndpoints,
	"dnsResolvers/outboundEndpoints": dnsResolvers_outboundEndpoints,
};

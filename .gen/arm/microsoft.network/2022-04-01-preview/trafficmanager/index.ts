import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class trafficManagerGeographicHierarchies
	extends ArmResource<trafficManagerGeographicHierarchiesComponentInputs>
	implements trafficManagerGeographicHierarchiesComponentOutputs
{
	constructor(entity: ADKEntity, options: trafficManagerGeographicHierarchiesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/trafficManagerGeographicHierarchies", "2022-04-01-preview", options);
	}
	public readonly apiVersion: "2022-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Network/trafficManagerGeographicHierarchies";
}
export interface trafficManagerGeographicHierarchiesComponentOutputs {
	readonly apiVersion: "2022-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Network/trafficManagerGeographicHierarchies";
}
export interface trafficManagerGeographicHierarchiesComponentInputs {
	readonly name: string;
	readonly properties?: GeographicHierarchyProperties;
}
export class trafficmanagerprofiles
	extends ArmResource<trafficmanagerprofilesComponentInputs>
	implements trafficmanagerprofilesComponentOutputs
{
	constructor(entity: ADKEntity, options: trafficmanagerprofilesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/trafficmanagerprofiles", "2022-04-01-preview", options);
	}
	public readonly apiVersion: "2022-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Network/trafficmanagerprofiles";
}
export interface trafficmanagerprofilesComponentOutputs {
	readonly apiVersion: "2022-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Network/trafficmanagerprofiles";
}
export interface trafficmanagerprofilesComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: ProfileProperties;
	readonly tags?: TrackedResourceTags;
}
export class trafficmanagerprofiles_AzureEndpoints
	extends ArmResource<trafficmanagerprofiles_AzureEndpointsComponentInputs>
	implements trafficmanagerprofiles_AzureEndpointsComponentOutputs
{
	constructor(entity: ADKEntity, options: trafficmanagerprofiles_AzureEndpointsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Network/trafficmanagerprofiles/AzureEndpoints",
			"2022-04-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Network/trafficmanagerprofiles/AzureEndpoints";
}
export interface trafficmanagerprofiles_AzureEndpointsComponentOutputs {
	readonly apiVersion: "2022-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Network/trafficmanagerprofiles/AzureEndpoints";
}
export interface trafficmanagerprofiles_AzureEndpointsComponentInputs {
	readonly name: string;
	readonly properties?: EndpointProperties;
}
export class trafficmanagerprofiles_ExternalEndpoints
	extends ArmResource<trafficmanagerprofiles_ExternalEndpointsComponentInputs>
	implements trafficmanagerprofiles_ExternalEndpointsComponentOutputs
{
	constructor(entity: ADKEntity, options: trafficmanagerprofiles_ExternalEndpointsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Network/trafficmanagerprofiles/ExternalEndpoints",
			"2022-04-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Network/trafficmanagerprofiles/ExternalEndpoints";
}
export interface trafficmanagerprofiles_ExternalEndpointsComponentOutputs {
	readonly apiVersion: "2022-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Network/trafficmanagerprofiles/ExternalEndpoints";
}
export interface trafficmanagerprofiles_ExternalEndpointsComponentInputs {
	readonly name: string;
	readonly properties?: EndpointProperties;
}
export class trafficmanagerprofiles_heatMaps
	extends ArmResource<trafficmanagerprofiles_heatMapsComponentInputs>
	implements trafficmanagerprofiles_heatMapsComponentOutputs
{
	constructor(entity: ADKEntity, options: trafficmanagerprofiles_heatMapsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/trafficmanagerprofiles/heatMaps", "2022-04-01-preview", options);
	}
	public readonly apiVersion: "2022-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Network/trafficmanagerprofiles/heatMaps";
}
export interface trafficmanagerprofiles_heatMapsComponentOutputs {
	readonly apiVersion: "2022-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Network/trafficmanagerprofiles/heatMaps";
}
export interface trafficmanagerprofiles_heatMapsComponentInputs {
	readonly name: string;
	readonly properties?: HeatMapProperties;
}
export class trafficmanagerprofiles_NestedEndpoints
	extends ArmResource<trafficmanagerprofiles_NestedEndpointsComponentInputs>
	implements trafficmanagerprofiles_NestedEndpointsComponentOutputs
{
	constructor(entity: ADKEntity, options: trafficmanagerprofiles_NestedEndpointsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Network/trafficmanagerprofiles/NestedEndpoints",
			"2022-04-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2022-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Network/trafficmanagerprofiles/NestedEndpoints";
}
export interface trafficmanagerprofiles_NestedEndpointsComponentOutputs {
	readonly apiVersion: "2022-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Network/trafficmanagerprofiles/NestedEndpoints";
}
export interface trafficmanagerprofiles_NestedEndpointsComponentInputs {
	readonly name: string;
	readonly properties?: EndpointProperties;
}
export class trafficManagerUserMetricsKeys
	extends ArmResource<trafficManagerUserMetricsKeysComponentInputs>
	implements trafficManagerUserMetricsKeysComponentOutputs
{
	constructor(entity: ADKEntity, options: trafficManagerUserMetricsKeysComponentInputs) {
		super(entity, options.name, "Microsoft.Network/trafficManagerUserMetricsKeys", "2022-04-01-preview", options);
	}
	public readonly apiVersion: "2022-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Network/trafficManagerUserMetricsKeys";
}
export interface trafficManagerUserMetricsKeysComponentOutputs {
	readonly apiVersion: "2022-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Network/trafficManagerUserMetricsKeys";
}
export interface trafficManagerUserMetricsKeysComponentInputs {
	readonly name: string;
	readonly properties?: UserMetricsProperties;
}
export interface DnsConfig {
	readonly fqdn?: string;
	readonly relativeName?: string;
	readonly ttl?: number;
}
export interface Endpoint {
	readonly id?: string;
	readonly name?: string;
	readonly properties?: EndpointProperties;
	readonly type?: string;
}
export interface EndpointProperties {
	readonly alwaysServe?: "Disabled" | "Enabled";
	readonly customHeaders?: EndpointPropertiesCustomHeadersItem[];
	readonly endpointLocation?: string;
	readonly endpointMonitorStatus?: "CheckingEndpoint" | "Degraded" | "Disabled" | "Inactive" | "Online" | "Stopped";
	readonly endpointStatus?: "Disabled" | "Enabled";
	readonly geoMapping?: string[];
	readonly minChildEndpoints?: number;
	readonly minChildEndpointsIPv4?: number;
	readonly minChildEndpointsIPv6?: number;
	readonly priority?: number;
	readonly subnets?: EndpointPropertiesSubnetsItem[];
	readonly target?: string;
	readonly targetResourceId?: string;
	readonly weight?: number;
}
export interface EndpointPropertiesCustomHeadersItem {
	readonly name?: string;
	readonly value?: string;
}
export interface EndpointPropertiesSubnetsItem {
	readonly first?: string;
	readonly last?: string;
	readonly scope?: number;
}
export interface GeographicHierarchyProperties {
	readonly geographicHierarchy?: Region;
}
export interface HeatMapEndpoint {
	readonly endpointId?: number;
	readonly resourceId?: string;
}
export interface HeatMapProperties {
	readonly endpoints?: HeatMapEndpoint[];
	readonly endTime?: string;
	readonly startTime?: string;
	readonly trafficFlows?: TrafficFlow[];
}
export interface MonitorConfig {
	readonly customHeaders?: MonitorConfigCustomHeadersItem[];
	readonly expectedStatusCodeRanges?: MonitorConfigExpectedStatusCodeRangesItem[];
	readonly intervalInSeconds?: number;
	readonly path?: string;
	readonly port?: number;
	readonly profileMonitorStatus?: "CheckingEndpoints" | "Degraded" | "Disabled" | "Inactive" | "Online";
	readonly protocol?: "HTTP" | "HTTPS" | "TCP";
	readonly timeoutInSeconds?: number;
	readonly toleratedNumberOfFailures?: number;
}
export interface MonitorConfigCustomHeadersItem {
	readonly name?: string;
	readonly value?: string;
}
export interface MonitorConfigExpectedStatusCodeRangesItem {
	readonly max?: number;
	readonly min?: number;
}
export interface ProfileProperties {
	readonly allowedEndpointRecordTypes?: "any" | "DomainName" | "IPv4Address" | "IPv6Address"[];
	readonly dnsConfig?: DnsConfig;
	readonly endpoints?: Endpoint[];
	readonly maxReturn?: number;
	readonly monitorConfig?: MonitorConfig;
	readonly profileStatus?: "Disabled" | "Enabled";
	readonly trafficRoutingMethod?: "Geographic" | "MultiValue" | "Performance" | "Priority" | "Subnet" | "Weighted";
	readonly trafficViewEnrollmentStatus?: "Disabled" | "Enabled";
}
export interface QueryExperience {
	readonly endpointId: number;
	readonly latency?: number;
	readonly queryCount: number;
}
export interface Region {
	readonly code?: string;
	readonly name?: string;
	readonly regions?: Region[];
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export interface TrafficFlow {
	readonly latitude?: number;
	readonly longitude?: number;
	readonly queryExperiences?: QueryExperience[];
	readonly sourceIp?: string;
}
export interface UserMetricsProperties {
	readonly key?: string;
}
export default {
	trafficManagerGeographicHierarchies: trafficManagerGeographicHierarchies,
	trafficmanagerprofiles: trafficmanagerprofiles,
	"trafficmanagerprofiles/AzureEndpoints": trafficmanagerprofiles_AzureEndpoints,
	"trafficmanagerprofiles/ExternalEndpoints": trafficmanagerprofiles_ExternalEndpoints,
	"trafficmanagerprofiles/heatMaps": trafficmanagerprofiles_heatMaps,
	"trafficmanagerprofiles/NestedEndpoints": trafficmanagerprofiles_NestedEndpoints,
	trafficManagerUserMetricsKeys: trafficManagerUserMetricsKeys,
};

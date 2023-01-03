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
	readonly properties?: GeographicHierarchyProperties | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ProfileProperties | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly properties?: EndpointProperties | undefined;
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
	readonly properties?: EndpointProperties | undefined;
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
	readonly properties?: HeatMapProperties | undefined;
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
	readonly properties?: EndpointProperties | undefined;
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
	readonly properties?: UserMetricsProperties | undefined;
}
export interface DnsConfig {
	readonly fqdn?: string | undefined;
	readonly relativeName?: string | undefined;
	readonly ttl?: number | undefined;
}
export interface Endpoint {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: EndpointProperties | undefined;
	readonly type?: string | undefined;
}
export interface EndpointProperties {
	readonly alwaysServe?: ("Disabled" | "Enabled") | undefined;
	readonly customHeaders?: EndpointPropertiesCustomHeadersItem[] | undefined;
	readonly endpointLocation?: string | undefined;
	readonly endpointMonitorStatus?:
		| ("CheckingEndpoint" | "Degraded" | "Disabled" | "Inactive" | "Online" | "Stopped")
		| undefined;
	readonly endpointStatus?: ("Disabled" | "Enabled") | undefined;
	readonly geoMapping?: string[] | undefined;
	readonly minChildEndpoints?: number | undefined;
	readonly minChildEndpointsIPv4?: number | undefined;
	readonly minChildEndpointsIPv6?: number | undefined;
	readonly priority?: number | undefined;
	readonly subnets?: EndpointPropertiesSubnetsItem[] | undefined;
	readonly target?: string | undefined;
	readonly targetResourceId?: string | undefined;
	readonly weight?: number | undefined;
}
export interface EndpointPropertiesCustomHeadersItem {
	readonly name?: string | undefined;
	readonly value?: string | undefined;
}
export interface EndpointPropertiesSubnetsItem {
	readonly first?: string | undefined;
	readonly last?: string | undefined;
	readonly scope?: number | undefined;
}
export interface GeographicHierarchyProperties {
	readonly geographicHierarchy?: Region | undefined;
}
export interface HeatMapEndpoint {
	readonly endpointId?: number | undefined;
	readonly resourceId?: string | undefined;
}
export interface HeatMapProperties {
	readonly endpoints?: HeatMapEndpoint[] | undefined;
	readonly endTime?: string | undefined;
	readonly startTime?: string | undefined;
	readonly trafficFlows?: TrafficFlow[] | undefined;
}
export interface MonitorConfig {
	readonly customHeaders?: MonitorConfigCustomHeadersItem[] | undefined;
	readonly expectedStatusCodeRanges?: MonitorConfigExpectedStatusCodeRangesItem[] | undefined;
	readonly intervalInSeconds?: number | undefined;
	readonly path?: string | undefined;
	readonly port?: number | undefined;
	readonly profileMonitorStatus?: ("CheckingEndpoints" | "Degraded" | "Disabled" | "Inactive" | "Online") | undefined;
	readonly protocol?: ("HTTP" | "HTTPS" | "TCP") | undefined;
	readonly timeoutInSeconds?: number | undefined;
	readonly toleratedNumberOfFailures?: number | undefined;
}
export interface MonitorConfigCustomHeadersItem {
	readonly name?: string | undefined;
	readonly value?: string | undefined;
}
export interface MonitorConfigExpectedStatusCodeRangesItem {
	readonly max?: number | undefined;
	readonly min?: number | undefined;
}
export interface ProfileProperties {
	readonly allowedEndpointRecordTypes?: ("any" | "DomainName" | "IPv4Address" | "IPv6Address"[]) | undefined;
	readonly dnsConfig?: DnsConfig | undefined;
	readonly endpoints?: Endpoint[] | undefined;
	readonly maxReturn?: number | undefined;
	readonly monitorConfig?: MonitorConfig | undefined;
	readonly profileStatus?: ("Disabled" | "Enabled") | undefined;
	readonly trafficRoutingMethod?:
		| ("Geographic" | "MultiValue" | "Performance" | "Priority" | "Subnet" | "Weighted")
		| undefined;
	readonly trafficViewEnrollmentStatus?: ("Disabled" | "Enabled") | undefined;
}
export interface QueryExperience {
	readonly endpointId: number;
	readonly latency?: number | undefined;
	readonly queryCount: number;
}
export interface Region {
	readonly code?: string | undefined;
	readonly name?: string | undefined;
	readonly regions?: Region[] | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface TrafficFlow {
	readonly latitude?: number | undefined;
	readonly longitude?: number | undefined;
	readonly queryExperiences?: QueryExperience[] | undefined;
	readonly sourceIp?: string | undefined;
}
export interface UserMetricsProperties {
	readonly key?: string | undefined;
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

import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class trafficManagerGeographicHierarchies
	extends ArmResource<trafficManagerGeographicHierarchiesComponentInputs>
	implements trafficManagerGeographicHierarchiesComponentOutputs
{
	constructor(entity: ADKEntity, options: trafficManagerGeographicHierarchiesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/trafficManagerGeographicHierarchies", "2018-03-01", options);
	}
	public readonly apiVersion: "2018-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/trafficManagerGeographicHierarchies";
}
export interface trafficManagerGeographicHierarchiesComponentOutputs {
	readonly apiVersion: "2018-03-01";
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
		super(entity, options.name, "Microsoft.Network/trafficmanagerprofiles", "2018-03-01", options);
	}
	public readonly apiVersion: "2018-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/trafficmanagerprofiles";
}
export interface trafficmanagerprofilesComponentOutputs {
	readonly apiVersion: "2018-03-01";
	readonly id: string;
	readonly type: "Microsoft.Network/trafficmanagerprofiles";
}
export interface trafficmanagerprofilesComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: ProfileProperties;
	readonly tags?: TrackedResourceTags;
}
export class trafficmanagerprofiles_heatMaps
	extends ArmResource<trafficmanagerprofiles_heatMapsComponentInputs>
	implements trafficmanagerprofiles_heatMapsComponentOutputs
{
	constructor(entity: ADKEntity, options: trafficmanagerprofiles_heatMapsComponentInputs) {
		super(entity, options.name, "Microsoft.Network/trafficmanagerprofiles/heatMaps", "2018-03-01", options);
	}
	public readonly apiVersion: "2018-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/trafficmanagerprofiles/heatMaps";
}
export interface trafficmanagerprofiles_heatMapsComponentOutputs {
	readonly apiVersion: "2018-03-01";
	readonly id: string;
	readonly type: "Microsoft.Network/trafficmanagerprofiles/heatMaps";
}
export interface trafficmanagerprofiles_heatMapsComponentInputs {
	readonly name: string;
	readonly properties?: HeatMapProperties;
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
	readonly customHeaders?: EndpointPropertiesCustomHeadersItem[];
	readonly endpointLocation?: string;
	readonly endpointMonitorStatus?: "CheckingEndpoint" | "Degraded" | "Disabled" | "Inactive" | "Online" | "Stopped";
	readonly endpointStatus?: "Disabled" | "Enabled";
	readonly geoMapping?: string[];
	readonly minChildEndpoints?: number;
	readonly priority?: number;
	readonly target?: string;
	readonly targetResourceId?: string;
	readonly weight?: number;
}
export interface EndpointPropertiesCustomHeadersItem {
	readonly name?: string;
	readonly value?: string;
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
	readonly dnsConfig?: DnsConfig;
	readonly endpoints?: Endpoint[];
	readonly monitorConfig?: MonitorConfig;
	readonly profileStatus?: "Disabled" | "Enabled";
	readonly trafficRoutingMethod?: "Geographic" | "Performance" | "Priority" | "Weighted";
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
export default {
	trafficManagerGeographicHierarchies: trafficManagerGeographicHierarchies,
	trafficmanagerprofiles: trafficmanagerprofiles,
	"trafficmanagerprofiles/heatMaps": trafficmanagerprofiles_heatMaps,
};

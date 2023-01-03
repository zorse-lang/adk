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
	readonly properties?: GeographicHierarchyProperties | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ProfileProperties | undefined;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly properties?: HeatMapProperties | undefined;
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
	readonly customHeaders?: EndpointPropertiesCustomHeadersItem[] | undefined;
	readonly endpointLocation?: string | undefined;
	readonly endpointMonitorStatus?:
		| ("CheckingEndpoint" | "Degraded" | "Disabled" | "Inactive" | "Online" | "Stopped")
		| undefined;
	readonly endpointStatus?: ("Disabled" | "Enabled") | undefined;
	readonly geoMapping?: string[] | undefined;
	readonly minChildEndpoints?: number | undefined;
	readonly priority?: number | undefined;
	readonly target?: string | undefined;
	readonly targetResourceId?: string | undefined;
	readonly weight?: number | undefined;
}
export interface EndpointPropertiesCustomHeadersItem {
	readonly name?: string | undefined;
	readonly value?: string | undefined;
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
	readonly dnsConfig?: DnsConfig | undefined;
	readonly endpoints?: Endpoint[] | undefined;
	readonly monitorConfig?: MonitorConfig | undefined;
	readonly profileStatus?: ("Disabled" | "Enabled") | undefined;
	readonly trafficRoutingMethod?: ("Geographic" | "Performance" | "Priority" | "Weighted") | undefined;
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
export default {
	trafficManagerGeographicHierarchies: trafficManagerGeographicHierarchies,
	trafficmanagerprofiles: trafficmanagerprofiles,
	"trafficmanagerprofiles/heatMaps": trafficmanagerprofiles_heatMaps,
};

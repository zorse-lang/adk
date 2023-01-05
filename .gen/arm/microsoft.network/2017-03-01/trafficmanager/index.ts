import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class trafficManagerGeographicHierarchies
	extends ArmResource<trafficManagerGeographicHierarchiesComponentInputs>
	implements trafficManagerGeographicHierarchiesComponentOutputs
{
	constructor(entity: ADKEntity, options: trafficManagerGeographicHierarchiesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/trafficManagerGeographicHierarchies", "2017-03-01", options);
	}
	public readonly apiVersion: "2017-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/trafficManagerGeographicHierarchies";
}
export interface trafficManagerGeographicHierarchiesComponentOutputs {
	readonly apiVersion: "2017-03-01";
	readonly id: string;
	readonly type: "Microsoft.Network/trafficManagerGeographicHierarchies";
}
export interface trafficManagerGeographicHierarchiesComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: GeographicHierarchyProperties;
	readonly tags?: ResourceTags;
}
export class trafficmanagerprofiles
	extends ArmResource<trafficmanagerprofilesComponentInputs>
	implements trafficmanagerprofilesComponentOutputs
{
	constructor(entity: ADKEntity, options: trafficmanagerprofilesComponentInputs) {
		super(entity, options.name, "Microsoft.Network/trafficmanagerprofiles", "2017-03-01", options);
	}
	public readonly apiVersion: "2017-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.Network/trafficmanagerprofiles";
}
export interface trafficmanagerprofilesComponentOutputs {
	readonly apiVersion: "2017-03-01";
	readonly id: string;
	readonly type: "Microsoft.Network/trafficmanagerprofiles";
}
export interface trafficmanagerprofilesComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: ProfileProperties;
	readonly tags?: ResourceTags;
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
	readonly endpointLocation?: string;
	readonly endpointMonitorStatus?: string;
	readonly endpointStatus?: string;
	readonly geoMapping?: string[];
	readonly minChildEndpoints?: number;
	readonly priority?: number;
	readonly target?: string;
	readonly targetResourceId?: string;
	readonly weight?: number;
}
export interface GeographicHierarchyProperties {
	readonly geographicHierarchy?: Region;
}
export interface MonitorConfig {
	readonly path?: string;
	readonly port?: number;
	readonly profileMonitorStatus?: string;
	readonly protocol?: string;
}
export interface ProfileProperties {
	readonly dnsConfig?: DnsConfig;
	readonly endpoints?: Endpoint[];
	readonly monitorConfig?: MonitorConfig;
	readonly profileStatus?: string;
	readonly trafficRoutingMethod?: string;
}
export interface Region {
	readonly code?: string;
	readonly name?: string;
	readonly regions?: Region[];
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export default {
	trafficManagerGeographicHierarchies: trafficManagerGeographicHierarchies,
	trafficmanagerprofiles: trafficmanagerprofiles,
};

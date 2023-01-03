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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: GeographicHierarchyProperties | undefined;
	readonly tags?: ResourceTags | undefined;
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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ProfileProperties | undefined;
	readonly tags?: ResourceTags | undefined;
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
	readonly endpointLocation?: string | undefined;
	readonly endpointMonitorStatus?: string | undefined;
	readonly endpointStatus?: string | undefined;
	readonly geoMapping?: string[] | undefined;
	readonly minChildEndpoints?: number | undefined;
	readonly priority?: number | undefined;
	readonly target?: string | undefined;
	readonly targetResourceId?: string | undefined;
	readonly weight?: number | undefined;
}
export interface GeographicHierarchyProperties {
	readonly geographicHierarchy?: Region | undefined;
}
export interface MonitorConfig {
	readonly path?: string | undefined;
	readonly port?: number | undefined;
	readonly profileMonitorStatus?: string | undefined;
	readonly protocol?: string | undefined;
}
export interface ProfileProperties {
	readonly dnsConfig?: DnsConfig | undefined;
	readonly endpoints?: Endpoint[] | undefined;
	readonly monitorConfig?: MonitorConfig | undefined;
	readonly profileStatus?: string | undefined;
	readonly trafficRoutingMethod?: string | undefined;
}
export interface Region {
	readonly code?: string | undefined;
	readonly name?: string | undefined;
	readonly regions?: Region[] | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	trafficManagerGeographicHierarchies: trafficManagerGeographicHierarchies,
	trafficmanagerprofiles: trafficmanagerprofiles,
};

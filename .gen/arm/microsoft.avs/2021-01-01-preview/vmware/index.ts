import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class privateClouds extends ArmResource<privateCloudsComponentInputs> implements privateCloudsComponentOutputs {
	constructor(entity: ADKEntity, options: privateCloudsComponentInputs) {
		super(entity, options.name, "Microsoft.AVS/privateClouds", "2021-01-01-preview", options);
	}
	public readonly apiVersion: "2021-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AVS/privateClouds";
}
export interface privateCloudsComponentOutputs {
	readonly apiVersion: "2021-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AVS/privateClouds";
}
export interface privateCloudsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: PrivateCloudProperties;
	readonly sku: Sku;
	readonly tags?: ResourceTags;
}
export class privateClouds_addons
	extends ArmResource<privateClouds_addonsComponentInputs>
	implements privateClouds_addonsComponentOutputs
{
	constructor(entity: ADKEntity, options: privateClouds_addonsComponentInputs) {
		super(entity, options.name, "Microsoft.AVS/privateClouds/addons", "2021-01-01-preview", options);
	}
	public readonly apiVersion: "2021-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AVS/privateClouds/addons";
}
export interface privateClouds_addonsComponentOutputs {
	readonly apiVersion: "2021-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AVS/privateClouds/addons";
}
export interface privateClouds_addonsComponentInputs {
	readonly name: string;
	readonly properties?: AddonProperties;
}
export class privateClouds_authorizations
	extends ArmResource<privateClouds_authorizationsComponentInputs>
	implements privateClouds_authorizationsComponentOutputs
{
	constructor(entity: ADKEntity, options: privateClouds_authorizationsComponentInputs) {
		super(entity, options.name, "Microsoft.AVS/privateClouds/authorizations", "2021-01-01-preview", options);
	}
	public readonly apiVersion: "2021-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AVS/privateClouds/authorizations";
}
export interface privateClouds_authorizationsComponentOutputs {
	readonly apiVersion: "2021-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AVS/privateClouds/authorizations";
}
export interface privateClouds_authorizationsComponentInputs {
	readonly name: string;
	readonly properties?: ExpressRouteAuthorizationProperties;
}
export class privateClouds_clusters
	extends ArmResource<privateClouds_clustersComponentInputs>
	implements privateClouds_clustersComponentOutputs
{
	constructor(entity: ADKEntity, options: privateClouds_clustersComponentInputs) {
		super(entity, options.name, "Microsoft.AVS/privateClouds/clusters", "2021-01-01-preview", options);
	}
	public readonly apiVersion: "2021-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AVS/privateClouds/clusters";
}
export interface privateClouds_clustersComponentOutputs {
	readonly apiVersion: "2021-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AVS/privateClouds/clusters";
}
export interface privateClouds_clustersComponentInputs {
	readonly name: string;
	readonly properties?: ClusterProperties;
	readonly sku: Sku;
}
export class privateClouds_clusters_datastores
	extends ArmResource<privateClouds_clusters_datastoresComponentInputs>
	implements privateClouds_clusters_datastoresComponentOutputs
{
	constructor(entity: ADKEntity, options: privateClouds_clusters_datastoresComponentInputs) {
		super(entity, options.name, "Microsoft.AVS/privateClouds/clusters/datastores", "2021-01-01-preview", options);
	}
	public readonly apiVersion: "2021-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AVS/privateClouds/clusters/datastores";
}
export interface privateClouds_clusters_datastoresComponentOutputs {
	readonly apiVersion: "2021-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AVS/privateClouds/clusters/datastores";
}
export interface privateClouds_clusters_datastoresComponentInputs {
	readonly name: string;
	readonly properties?: DatastoreProperties;
}
export class privateClouds_globalReachConnections
	extends ArmResource<privateClouds_globalReachConnectionsComponentInputs>
	implements privateClouds_globalReachConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: privateClouds_globalReachConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.AVS/privateClouds/globalReachConnections", "2021-01-01-preview", options);
	}
	public readonly apiVersion: "2021-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AVS/privateClouds/globalReachConnections";
}
export interface privateClouds_globalReachConnectionsComponentOutputs {
	readonly apiVersion: "2021-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AVS/privateClouds/globalReachConnections";
}
export interface privateClouds_globalReachConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: GlobalReachConnectionProperties;
}
export class privateClouds_hcxEnterpriseSites
	extends ArmResource<privateClouds_hcxEnterpriseSitesComponentInputs>
	implements privateClouds_hcxEnterpriseSitesComponentOutputs
{
	constructor(entity: ADKEntity, options: privateClouds_hcxEnterpriseSitesComponentInputs) {
		super(entity, options.name, "Microsoft.AVS/privateClouds/hcxEnterpriseSites", "2021-01-01-preview", options);
	}
	public readonly apiVersion: "2021-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AVS/privateClouds/hcxEnterpriseSites";
}
export interface privateClouds_hcxEnterpriseSitesComponentOutputs {
	readonly apiVersion: "2021-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AVS/privateClouds/hcxEnterpriseSites";
}
export interface privateClouds_hcxEnterpriseSitesComponentInputs {
	readonly name: string;
	readonly properties?: HcxEnterpriseSiteProperties;
}
export class privateClouds_workloadNetworks_dhcpConfigurations
	extends ArmResource<privateClouds_workloadNetworks_dhcpConfigurationsComponentInputs>
	implements privateClouds_workloadNetworks_dhcpConfigurationsComponentOutputs
{
	constructor(entity: ADKEntity, options: privateClouds_workloadNetworks_dhcpConfigurationsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.AVS/privateClouds/workloadNetworks/dhcpConfigurations",
			"2021-01-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AVS/privateClouds/workloadNetworks/dhcpConfigurations";
}
export interface privateClouds_workloadNetworks_dhcpConfigurationsComponentOutputs {
	readonly apiVersion: "2021-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AVS/privateClouds/workloadNetworks/dhcpConfigurations";
}
export interface privateClouds_workloadNetworks_dhcpConfigurationsComponentInputs {
	readonly name: string;
	readonly properties?: WorkloadNetworkDhcpEntity;
}
export class privateClouds_workloadNetworks_dnsServices
	extends ArmResource<privateClouds_workloadNetworks_dnsServicesComponentInputs>
	implements privateClouds_workloadNetworks_dnsServicesComponentOutputs
{
	constructor(entity: ADKEntity, options: privateClouds_workloadNetworks_dnsServicesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.AVS/privateClouds/workloadNetworks/dnsServices",
			"2021-01-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AVS/privateClouds/workloadNetworks/dnsServices";
}
export interface privateClouds_workloadNetworks_dnsServicesComponentOutputs {
	readonly apiVersion: "2021-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AVS/privateClouds/workloadNetworks/dnsServices";
}
export interface privateClouds_workloadNetworks_dnsServicesComponentInputs {
	readonly name: string;
	readonly properties?: WorkloadNetworkDnsServiceProperties;
}
export class privateClouds_workloadNetworks_dnsZones
	extends ArmResource<privateClouds_workloadNetworks_dnsZonesComponentInputs>
	implements privateClouds_workloadNetworks_dnsZonesComponentOutputs
{
	constructor(entity: ADKEntity, options: privateClouds_workloadNetworks_dnsZonesComponentInputs) {
		super(entity, options.name, "Microsoft.AVS/privateClouds/workloadNetworks/dnsZones", "2021-01-01-preview", options);
	}
	public readonly apiVersion: "2021-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AVS/privateClouds/workloadNetworks/dnsZones";
}
export interface privateClouds_workloadNetworks_dnsZonesComponentOutputs {
	readonly apiVersion: "2021-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AVS/privateClouds/workloadNetworks/dnsZones";
}
export interface privateClouds_workloadNetworks_dnsZonesComponentInputs {
	readonly name: string;
	readonly properties?: WorkloadNetworkDnsZoneProperties;
}
export class privateClouds_workloadNetworks_gateways
	extends ArmResource<privateClouds_workloadNetworks_gatewaysComponentInputs>
	implements privateClouds_workloadNetworks_gatewaysComponentOutputs
{
	constructor(entity: ADKEntity, options: privateClouds_workloadNetworks_gatewaysComponentInputs) {
		super(entity, options.name, "Microsoft.AVS/privateClouds/workloadNetworks/gateways", "2021-01-01-preview", options);
	}
	public readonly apiVersion: "2021-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AVS/privateClouds/workloadNetworks/gateways";
}
export interface privateClouds_workloadNetworks_gatewaysComponentOutputs {
	readonly apiVersion: "2021-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AVS/privateClouds/workloadNetworks/gateways";
}
export interface privateClouds_workloadNetworks_gatewaysComponentInputs {
	readonly name: string;
	readonly properties?: WorkloadNetworkGatewayProperties;
}
export class privateClouds_workloadNetworks_portMirroringProfiles
	extends ArmResource<privateClouds_workloadNetworks_portMirroringProfilesComponentInputs>
	implements privateClouds_workloadNetworks_portMirroringProfilesComponentOutputs
{
	constructor(entity: ADKEntity, options: privateClouds_workloadNetworks_portMirroringProfilesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.AVS/privateClouds/workloadNetworks/portMirroringProfiles",
			"2021-01-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AVS/privateClouds/workloadNetworks/portMirroringProfiles";
}
export interface privateClouds_workloadNetworks_portMirroringProfilesComponentOutputs {
	readonly apiVersion: "2021-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AVS/privateClouds/workloadNetworks/portMirroringProfiles";
}
export interface privateClouds_workloadNetworks_portMirroringProfilesComponentInputs {
	readonly name: string;
	readonly properties?: WorkloadNetworkPortMirroringProperties;
}
export class privateClouds_workloadNetworks_segments
	extends ArmResource<privateClouds_workloadNetworks_segmentsComponentInputs>
	implements privateClouds_workloadNetworks_segmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: privateClouds_workloadNetworks_segmentsComponentInputs) {
		super(entity, options.name, "Microsoft.AVS/privateClouds/workloadNetworks/segments", "2021-01-01-preview", options);
	}
	public readonly apiVersion: "2021-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AVS/privateClouds/workloadNetworks/segments";
}
export interface privateClouds_workloadNetworks_segmentsComponentOutputs {
	readonly apiVersion: "2021-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AVS/privateClouds/workloadNetworks/segments";
}
export interface privateClouds_workloadNetworks_segmentsComponentInputs {
	readonly name: string;
	readonly properties?: WorkloadNetworkSegmentProperties;
}
export class privateClouds_workloadNetworks_virtualMachines
	extends ArmResource<privateClouds_workloadNetworks_virtualMachinesComponentInputs>
	implements privateClouds_workloadNetworks_virtualMachinesComponentOutputs
{
	constructor(entity: ADKEntity, options: privateClouds_workloadNetworks_virtualMachinesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.AVS/privateClouds/workloadNetworks/virtualMachines",
			"2021-01-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AVS/privateClouds/workloadNetworks/virtualMachines";
}
export interface privateClouds_workloadNetworks_virtualMachinesComponentOutputs {
	readonly apiVersion: "2021-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AVS/privateClouds/workloadNetworks/virtualMachines";
}
export interface privateClouds_workloadNetworks_virtualMachinesComponentInputs {
	readonly name: string;
	readonly properties?: WorkloadNetworkVirtualMachineProperties;
}
export class privateClouds_workloadNetworks_vmGroups
	extends ArmResource<privateClouds_workloadNetworks_vmGroupsComponentInputs>
	implements privateClouds_workloadNetworks_vmGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: privateClouds_workloadNetworks_vmGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.AVS/privateClouds/workloadNetworks/vmGroups", "2021-01-01-preview", options);
	}
	public readonly apiVersion: "2021-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.AVS/privateClouds/workloadNetworks/vmGroups";
}
export interface privateClouds_workloadNetworks_vmGroupsComponentOutputs {
	readonly apiVersion: "2021-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.AVS/privateClouds/workloadNetworks/vmGroups";
}
export interface privateClouds_workloadNetworks_vmGroupsComponentInputs {
	readonly name: string;
	readonly properties?: WorkloadNetworkVMGroupProperties;
}
export function listAdminCredentials(resource: privateClouds): AdminCredentials {
	if (resource.apiVersion !== "2021-01-01-preview") {
		throw new Error(`listAdminCredentials is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.AVS/privateClouds") {
		throw new Error(`listAdminCredentials is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AddonProperties {
	readonly addonType?: "SRM" | "VR";
	readonly licenseKey?: string;
	readonly provisioningState?: "Building" | "Cancelled" | "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface AdminCredentials {
	readonly nsxtPassword?: string;
	readonly nsxtUsername?: string;
	readonly vcenterPassword?: string;
	readonly vcenterUsername?: string;
}
export interface Circuit {
	readonly expressRouteID?: string;
	readonly expressRoutePrivatePeeringID?: string;
	readonly primarySubnet?: string;
	readonly secondarySubnet?: string;
}
export interface ClusterProperties {
	readonly clusterId?: number;
	readonly clusterSize?: number;
	readonly hosts?: string[];
	readonly provisioningState?: "Cancelled" | "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface DatastoreProperties {
	readonly diskPoolVolume?: DiskPoolVolume;
	readonly netAppVolume?: NetAppVolume;
	readonly provisioningState?: "Cancelled" | "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface DiskPoolVolume {
	readonly endpoints?: string[];
	readonly lunName?: string;
}
export interface Endpoints {
	readonly hcxCloudManager?: string;
	readonly nsxtManager?: string;
	readonly vcsa?: string;
}
export interface ExpressRouteAuthorizationProperties {
	readonly expressRouteAuthorizationId?: string;
	readonly expressRouteAuthorizationKey?: string;
	readonly provisioningState?: "Failed" | "Succeeded" | "Updating";
}
export interface GlobalReachConnectionProperties {
	readonly addressPrefix?: string;
	readonly authorizationKey?: string;
	readonly circuitConnectionStatus?: "Connected" | "Connecting" | "Disconnected";
	readonly peerExpressRouteCircuit?: string;
	readonly provisioningState?: "Failed" | "Succeeded" | "Updating";
}
export interface HcxEnterpriseSiteProperties {
	readonly activationKey?: string;
	readonly status?: "Available" | "Consumed" | "Deactivated" | "Deleted";
}
export interface IdentitySource {
	readonly alias?: string;
	readonly baseGroupDN?: string;
	readonly baseUserDN?: string;
	readonly domain?: string;
	readonly name?: string;
	readonly password?: string;
	readonly primaryServer?: string;
	readonly secondaryServer?: string;
	readonly ssl?: "Disabled" | "Enabled";
	readonly username?: string;
}
export interface ManagementCluster {
	readonly clusterId?: number;
	readonly clusterSize?: number;
	readonly hosts?: string[];
	readonly provisioningState?: "Cancelled" | "Deleting" | "Failed" | "Succeeded" | "Updating";
}
export interface NetAppVolume {
	readonly nfsFilePath?: string;
	readonly nfsProviderIp?: string;
}
export interface PrivateCloudProperties {
	readonly circuit?: Circuit;
	readonly endpoints?: Endpoints;
	readonly identitySources?: IdentitySource[];
	readonly internet?: "Disabled" | "Enabled";
	readonly managementCluster?: ManagementCluster;
	readonly managementNetwork?: string;
	readonly networkBlock: string;
	readonly nsxtCertificateThumbprint?: string;
	readonly nsxtPassword?: string;
	readonly provisioningNetwork?: string;
	readonly provisioningState?: "Building" | "Cancelled" | "Deleting" | "Failed" | "Pending" | "Succeeded" | "Updating";
	readonly vcenterCertificateThumbprint?: string;
	readonly vcenterPassword?: string;
	readonly vmotionNetwork?: string;
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface Sku {
	readonly name: string;
}
export interface WorkloadNetworkDhcpEntity {
	readonly displayName?: string;
	readonly provisioningState?: "Building" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly revision?: number;
	readonly segments?: string[];
}
export interface WorkloadNetworkDnsServiceProperties {
	readonly defaultDnsZone?: string;
	readonly displayName?: string;
	readonly dnsServiceIp?: string;
	readonly fqdnZones?: string[];
	readonly logLevel?: "DEBUG" | "ERROR" | "FATAL" | "INFO" | "WARNING";
	readonly provisioningState?: "Building" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly revision?: number;
	readonly status?: "FAILURE" | "SUCCESS";
}
export interface WorkloadNetworkDnsZoneProperties {
	readonly displayName?: string;
	readonly dnsServerIps?: string[];
	readonly dnsServices?: number;
	readonly domain?: string[];
	readonly provisioningState?: "Building" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly revision?: number;
	readonly sourceIp?: string;
}
export interface WorkloadNetworkGatewayProperties {
	readonly displayName?: string;
	readonly path?: string;
}
export interface WorkloadNetworkPortMirroringProperties {
	readonly destination?: string;
	readonly direction?: "INGRESS, EGRESS, BIDIRECTIONAL";
	readonly displayName?: string;
	readonly provisioningState?: "Building" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly revision?: number;
	readonly source?: string;
	readonly status?: "SUCCESS, FAILURE";
}
export interface WorkloadNetworkSegmentPortVif {
	readonly portName?: string;
}
export interface WorkloadNetworkSegmentProperties {
	readonly connectedGateway?: string;
	readonly displayName?: string;
	readonly portVif?: WorkloadNetworkSegmentPortVif[];
	readonly provisioningState?: "Building" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly revision?: number;
	readonly status?: "SUCCESS, FAILURE";
	readonly subnet?: WorkloadNetworkSegmentSubnet;
}
export interface WorkloadNetworkSegmentSubnet {
	readonly dhcpRanges?: string[];
	readonly gatewayAddress?: string;
}
export interface WorkloadNetworkVirtualMachineProperties {
	readonly displayName?: string;
	readonly vmType?: "REGULAR, EDGE, SERVICE";
}
export interface WorkloadNetworkVMGroupProperties {
	readonly displayName?: string;
	readonly members?: string[];
	readonly provisioningState?: "Building" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly revision?: number;
	readonly status?: "SUCCESS, FAILURE";
}
export default {
	privateClouds: privateClouds,
	"privateClouds/addons": privateClouds_addons,
	"privateClouds/authorizations": privateClouds_authorizations,
	"privateClouds/clusters": privateClouds_clusters,
	"privateClouds/clusters/datastores": privateClouds_clusters_datastores,
	"privateClouds/globalReachConnections": privateClouds_globalReachConnections,
	"privateClouds/hcxEnterpriseSites": privateClouds_hcxEnterpriseSites,
	"privateClouds/workloadNetworks/dhcpConfigurations": privateClouds_workloadNetworks_dhcpConfigurations,
	"privateClouds/workloadNetworks/dnsServices": privateClouds_workloadNetworks_dnsServices,
	"privateClouds/workloadNetworks/dnsZones": privateClouds_workloadNetworks_dnsZones,
	"privateClouds/workloadNetworks/gateways": privateClouds_workloadNetworks_gateways,
	"privateClouds/workloadNetworks/portMirroringProfiles": privateClouds_workloadNetworks_portMirroringProfiles,
	"privateClouds/workloadNetworks/segments": privateClouds_workloadNetworks_segments,
	"privateClouds/workloadNetworks/virtualMachines": privateClouds_workloadNetworks_virtualMachines,
	"privateClouds/workloadNetworks/vmGroups": privateClouds_workloadNetworks_vmGroups,
};

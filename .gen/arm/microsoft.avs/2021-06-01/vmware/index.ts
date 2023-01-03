import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class privateClouds extends ArmResource<privateCloudsComponentInputs> implements privateCloudsComponentOutputs {
	constructor(entity: ADKEntity, options: privateCloudsComponentInputs) {
		super(entity, options.name, "Microsoft.AVS/privateClouds", "2021-06-01", options);
	}
	public readonly apiVersion: "2021-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.AVS/privateClouds";
}
export interface privateCloudsComponentOutputs {
	readonly apiVersion: "2021-06-01";
	readonly id: string;
	readonly type: "Microsoft.AVS/privateClouds";
}
export interface privateCloudsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: PrivateCloudProperties | undefined;
	readonly sku: Sku;
	readonly tags?: ResourceTags | undefined;
}
export class privateClouds_addons
	extends ArmResource<privateClouds_addonsComponentInputs>
	implements privateClouds_addonsComponentOutputs
{
	constructor(entity: ADKEntity, options: privateClouds_addonsComponentInputs) {
		super(entity, options.name, "Microsoft.AVS/privateClouds/addons", "2021-06-01", options);
	}
	public readonly apiVersion: "2021-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.AVS/privateClouds/addons";
}
export interface privateClouds_addonsComponentOutputs {
	readonly apiVersion: "2021-06-01";
	readonly id: string;
	readonly type: "Microsoft.AVS/privateClouds/addons";
}
export interface privateClouds_addonsComponentInputs {
	readonly name: string;
	readonly properties?: AddonProperties | undefined;
}
export class privateClouds_authorizations
	extends ArmResource<privateClouds_authorizationsComponentInputs>
	implements privateClouds_authorizationsComponentOutputs
{
	constructor(entity: ADKEntity, options: privateClouds_authorizationsComponentInputs) {
		super(entity, options.name, "Microsoft.AVS/privateClouds/authorizations", "2021-06-01", options);
	}
	public readonly apiVersion: "2021-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.AVS/privateClouds/authorizations";
}
export interface privateClouds_authorizationsComponentOutputs {
	readonly apiVersion: "2021-06-01";
	readonly id: string;
	readonly type: "Microsoft.AVS/privateClouds/authorizations";
}
export interface privateClouds_authorizationsComponentInputs {
	readonly name: string;
	readonly properties?: ExpressRouteAuthorizationProperties | undefined;
}
export class privateClouds_cloudLinks
	extends ArmResource<privateClouds_cloudLinksComponentInputs>
	implements privateClouds_cloudLinksComponentOutputs
{
	constructor(entity: ADKEntity, options: privateClouds_cloudLinksComponentInputs) {
		super(entity, options.name, "Microsoft.AVS/privateClouds/cloudLinks", "2021-06-01", options);
	}
	public readonly apiVersion: "2021-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.AVS/privateClouds/cloudLinks";
}
export interface privateClouds_cloudLinksComponentOutputs {
	readonly apiVersion: "2021-06-01";
	readonly id: string;
	readonly type: "Microsoft.AVS/privateClouds/cloudLinks";
}
export interface privateClouds_cloudLinksComponentInputs {
	readonly name: string;
	readonly properties?: CloudLinkProperties | undefined;
}
export class privateClouds_clusters
	extends ArmResource<privateClouds_clustersComponentInputs>
	implements privateClouds_clustersComponentOutputs
{
	constructor(entity: ADKEntity, options: privateClouds_clustersComponentInputs) {
		super(entity, options.name, "Microsoft.AVS/privateClouds/clusters", "2021-06-01", options);
	}
	public readonly apiVersion: "2021-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.AVS/privateClouds/clusters";
}
export interface privateClouds_clustersComponentOutputs {
	readonly apiVersion: "2021-06-01";
	readonly id: string;
	readonly type: "Microsoft.AVS/privateClouds/clusters";
}
export interface privateClouds_clustersComponentInputs {
	readonly name: string;
	readonly properties?: ClusterProperties | undefined;
	readonly sku: Sku;
}
export class privateClouds_clusters_datastores
	extends ArmResource<privateClouds_clusters_datastoresComponentInputs>
	implements privateClouds_clusters_datastoresComponentOutputs
{
	constructor(entity: ADKEntity, options: privateClouds_clusters_datastoresComponentInputs) {
		super(entity, options.name, "Microsoft.AVS/privateClouds/clusters/datastores", "2021-06-01", options);
	}
	public readonly apiVersion: "2021-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.AVS/privateClouds/clusters/datastores";
}
export interface privateClouds_clusters_datastoresComponentOutputs {
	readonly apiVersion: "2021-06-01";
	readonly id: string;
	readonly type: "Microsoft.AVS/privateClouds/clusters/datastores";
}
export interface privateClouds_clusters_datastoresComponentInputs {
	readonly name: string;
	readonly properties?: DatastoreProperties | undefined;
}
export class privateClouds_globalReachConnections
	extends ArmResource<privateClouds_globalReachConnectionsComponentInputs>
	implements privateClouds_globalReachConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: privateClouds_globalReachConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.AVS/privateClouds/globalReachConnections", "2021-06-01", options);
	}
	public readonly apiVersion: "2021-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.AVS/privateClouds/globalReachConnections";
}
export interface privateClouds_globalReachConnectionsComponentOutputs {
	readonly apiVersion: "2021-06-01";
	readonly id: string;
	readonly type: "Microsoft.AVS/privateClouds/globalReachConnections";
}
export interface privateClouds_globalReachConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: GlobalReachConnectionProperties | undefined;
}
export class privateClouds_hcxEnterpriseSites
	extends ArmResource<privateClouds_hcxEnterpriseSitesComponentInputs>
	implements privateClouds_hcxEnterpriseSitesComponentOutputs
{
	constructor(entity: ADKEntity, options: privateClouds_hcxEnterpriseSitesComponentInputs) {
		super(entity, options.name, "Microsoft.AVS/privateClouds/hcxEnterpriseSites", "2021-06-01", options);
	}
	public readonly apiVersion: "2021-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.AVS/privateClouds/hcxEnterpriseSites";
}
export interface privateClouds_hcxEnterpriseSitesComponentOutputs {
	readonly apiVersion: "2021-06-01";
	readonly id: string;
	readonly type: "Microsoft.AVS/privateClouds/hcxEnterpriseSites";
}
export interface privateClouds_hcxEnterpriseSitesComponentInputs {
	readonly name: string;
	readonly properties?: HcxEnterpriseSiteProperties | undefined;
}
export class privateClouds_scriptExecutions
	extends ArmResource<privateClouds_scriptExecutionsComponentInputs>
	implements privateClouds_scriptExecutionsComponentOutputs
{
	constructor(entity: ADKEntity, options: privateClouds_scriptExecutionsComponentInputs) {
		super(entity, options.name, "Microsoft.AVS/privateClouds/scriptExecutions", "2021-06-01", options);
	}
	public readonly apiVersion: "2021-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.AVS/privateClouds/scriptExecutions";
}
export interface privateClouds_scriptExecutionsComponentOutputs {
	readonly apiVersion: "2021-06-01";
	readonly id: string;
	readonly type: "Microsoft.AVS/privateClouds/scriptExecutions";
}
export interface privateClouds_scriptExecutionsComponentInputs {
	readonly name: string;
	readonly properties?: ScriptExecutionProperties | undefined;
}
export class privateClouds_scriptPackages
	extends ArmResource<privateClouds_scriptPackagesComponentInputs>
	implements privateClouds_scriptPackagesComponentOutputs
{
	constructor(entity: ADKEntity, options: privateClouds_scriptPackagesComponentInputs) {
		super(entity, options.name, "Microsoft.AVS/privateClouds/scriptPackages", "2021-06-01", options);
	}
	public readonly apiVersion: "2021-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.AVS/privateClouds/scriptPackages";
}
export interface privateClouds_scriptPackagesComponentOutputs {
	readonly apiVersion: "2021-06-01";
	readonly id: string;
	readonly type: "Microsoft.AVS/privateClouds/scriptPackages";
}
export interface privateClouds_scriptPackagesComponentInputs {
	readonly name: string;
	readonly properties?: ScriptPackageProperties | undefined;
}
export class privateClouds_scriptPackages_scriptCmdlets
	extends ArmResource<privateClouds_scriptPackages_scriptCmdletsComponentInputs>
	implements privateClouds_scriptPackages_scriptCmdletsComponentOutputs
{
	constructor(entity: ADKEntity, options: privateClouds_scriptPackages_scriptCmdletsComponentInputs) {
		super(entity, options.name, "Microsoft.AVS/privateClouds/scriptPackages/scriptCmdlets", "2021-06-01", options);
	}
	public readonly apiVersion: "2021-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.AVS/privateClouds/scriptPackages/scriptCmdlets";
}
export interface privateClouds_scriptPackages_scriptCmdletsComponentOutputs {
	readonly apiVersion: "2021-06-01";
	readonly id: string;
	readonly type: "Microsoft.AVS/privateClouds/scriptPackages/scriptCmdlets";
}
export interface privateClouds_scriptPackages_scriptCmdletsComponentInputs {
	readonly name: string;
	readonly properties?: ScriptCmdletProperties | undefined;
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
			"2021-06-01",
			options,
		);
	}
	public readonly apiVersion: "2021-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.AVS/privateClouds/workloadNetworks/dhcpConfigurations";
}
export interface privateClouds_workloadNetworks_dhcpConfigurationsComponentOutputs {
	readonly apiVersion: "2021-06-01";
	readonly id: string;
	readonly type: "Microsoft.AVS/privateClouds/workloadNetworks/dhcpConfigurations";
}
export interface privateClouds_workloadNetworks_dhcpConfigurationsComponentInputs {
	readonly name: string;
	readonly properties?: WorkloadNetworkDhcpEntity | undefined;
}
export class privateClouds_workloadNetworks_dnsServices
	extends ArmResource<privateClouds_workloadNetworks_dnsServicesComponentInputs>
	implements privateClouds_workloadNetworks_dnsServicesComponentOutputs
{
	constructor(entity: ADKEntity, options: privateClouds_workloadNetworks_dnsServicesComponentInputs) {
		super(entity, options.name, "Microsoft.AVS/privateClouds/workloadNetworks/dnsServices", "2021-06-01", options);
	}
	public readonly apiVersion: "2021-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.AVS/privateClouds/workloadNetworks/dnsServices";
}
export interface privateClouds_workloadNetworks_dnsServicesComponentOutputs {
	readonly apiVersion: "2021-06-01";
	readonly id: string;
	readonly type: "Microsoft.AVS/privateClouds/workloadNetworks/dnsServices";
}
export interface privateClouds_workloadNetworks_dnsServicesComponentInputs {
	readonly name: string;
	readonly properties?: WorkloadNetworkDnsServiceProperties | undefined;
}
export class privateClouds_workloadNetworks_dnsZones
	extends ArmResource<privateClouds_workloadNetworks_dnsZonesComponentInputs>
	implements privateClouds_workloadNetworks_dnsZonesComponentOutputs
{
	constructor(entity: ADKEntity, options: privateClouds_workloadNetworks_dnsZonesComponentInputs) {
		super(entity, options.name, "Microsoft.AVS/privateClouds/workloadNetworks/dnsZones", "2021-06-01", options);
	}
	public readonly apiVersion: "2021-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.AVS/privateClouds/workloadNetworks/dnsZones";
}
export interface privateClouds_workloadNetworks_dnsZonesComponentOutputs {
	readonly apiVersion: "2021-06-01";
	readonly id: string;
	readonly type: "Microsoft.AVS/privateClouds/workloadNetworks/dnsZones";
}
export interface privateClouds_workloadNetworks_dnsZonesComponentInputs {
	readonly name: string;
	readonly properties?: WorkloadNetworkDnsZoneProperties | undefined;
}
export class privateClouds_workloadNetworks_gateways
	extends ArmResource<privateClouds_workloadNetworks_gatewaysComponentInputs>
	implements privateClouds_workloadNetworks_gatewaysComponentOutputs
{
	constructor(entity: ADKEntity, options: privateClouds_workloadNetworks_gatewaysComponentInputs) {
		super(entity, options.name, "Microsoft.AVS/privateClouds/workloadNetworks/gateways", "2021-06-01", options);
	}
	public readonly apiVersion: "2021-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.AVS/privateClouds/workloadNetworks/gateways";
}
export interface privateClouds_workloadNetworks_gatewaysComponentOutputs {
	readonly apiVersion: "2021-06-01";
	readonly id: string;
	readonly type: "Microsoft.AVS/privateClouds/workloadNetworks/gateways";
}
export interface privateClouds_workloadNetworks_gatewaysComponentInputs {
	readonly name: string;
	readonly properties?: WorkloadNetworkGatewayProperties | undefined;
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
			"2021-06-01",
			options,
		);
	}
	public readonly apiVersion: "2021-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.AVS/privateClouds/workloadNetworks/portMirroringProfiles";
}
export interface privateClouds_workloadNetworks_portMirroringProfilesComponentOutputs {
	readonly apiVersion: "2021-06-01";
	readonly id: string;
	readonly type: "Microsoft.AVS/privateClouds/workloadNetworks/portMirroringProfiles";
}
export interface privateClouds_workloadNetworks_portMirroringProfilesComponentInputs {
	readonly name: string;
	readonly properties?: WorkloadNetworkPortMirroringProperties | undefined;
}
export class privateClouds_workloadNetworks_publicIPs
	extends ArmResource<privateClouds_workloadNetworks_publicIPsComponentInputs>
	implements privateClouds_workloadNetworks_publicIPsComponentOutputs
{
	constructor(entity: ADKEntity, options: privateClouds_workloadNetworks_publicIPsComponentInputs) {
		super(entity, options.name, "Microsoft.AVS/privateClouds/workloadNetworks/publicIPs", "2021-06-01", options);
	}
	public readonly apiVersion: "2021-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.AVS/privateClouds/workloadNetworks/publicIPs";
}
export interface privateClouds_workloadNetworks_publicIPsComponentOutputs {
	readonly apiVersion: "2021-06-01";
	readonly id: string;
	readonly type: "Microsoft.AVS/privateClouds/workloadNetworks/publicIPs";
}
export interface privateClouds_workloadNetworks_publicIPsComponentInputs {
	readonly name: string;
	readonly properties?: WorkloadNetworkPublicIPProperties | undefined;
}
export class privateClouds_workloadNetworks_segments
	extends ArmResource<privateClouds_workloadNetworks_segmentsComponentInputs>
	implements privateClouds_workloadNetworks_segmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: privateClouds_workloadNetworks_segmentsComponentInputs) {
		super(entity, options.name, "Microsoft.AVS/privateClouds/workloadNetworks/segments", "2021-06-01", options);
	}
	public readonly apiVersion: "2021-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.AVS/privateClouds/workloadNetworks/segments";
}
export interface privateClouds_workloadNetworks_segmentsComponentOutputs {
	readonly apiVersion: "2021-06-01";
	readonly id: string;
	readonly type: "Microsoft.AVS/privateClouds/workloadNetworks/segments";
}
export interface privateClouds_workloadNetworks_segmentsComponentInputs {
	readonly name: string;
	readonly properties?: WorkloadNetworkSegmentProperties | undefined;
}
export class privateClouds_workloadNetworks_virtualMachines
	extends ArmResource<privateClouds_workloadNetworks_virtualMachinesComponentInputs>
	implements privateClouds_workloadNetworks_virtualMachinesComponentOutputs
{
	constructor(entity: ADKEntity, options: privateClouds_workloadNetworks_virtualMachinesComponentInputs) {
		super(entity, options.name, "Microsoft.AVS/privateClouds/workloadNetworks/virtualMachines", "2021-06-01", options);
	}
	public readonly apiVersion: "2021-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.AVS/privateClouds/workloadNetworks/virtualMachines";
}
export interface privateClouds_workloadNetworks_virtualMachinesComponentOutputs {
	readonly apiVersion: "2021-06-01";
	readonly id: string;
	readonly type: "Microsoft.AVS/privateClouds/workloadNetworks/virtualMachines";
}
export interface privateClouds_workloadNetworks_virtualMachinesComponentInputs {
	readonly name: string;
	readonly properties?: WorkloadNetworkVirtualMachineProperties | undefined;
}
export class privateClouds_workloadNetworks_vmGroups
	extends ArmResource<privateClouds_workloadNetworks_vmGroupsComponentInputs>
	implements privateClouds_workloadNetworks_vmGroupsComponentOutputs
{
	constructor(entity: ADKEntity, options: privateClouds_workloadNetworks_vmGroupsComponentInputs) {
		super(entity, options.name, "Microsoft.AVS/privateClouds/workloadNetworks/vmGroups", "2021-06-01", options);
	}
	public readonly apiVersion: "2021-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.AVS/privateClouds/workloadNetworks/vmGroups";
}
export interface privateClouds_workloadNetworks_vmGroupsComponentOutputs {
	readonly apiVersion: "2021-06-01";
	readonly id: string;
	readonly type: "Microsoft.AVS/privateClouds/workloadNetworks/vmGroups";
}
export interface privateClouds_workloadNetworks_vmGroupsComponentInputs {
	readonly name: string;
	readonly properties?: WorkloadNetworkVMGroupProperties | undefined;
}
export function listAdminCredentials(resource: privateClouds): AdminCredentials {
	if (resource.apiVersion !== "2021-06-01") {
		throw new Error(`listAdminCredentials is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.AVS/privateClouds") {
		throw new Error(`listAdminCredentials is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AddonProperties {
	readonly provisioningState?:
		| ("Building" | "Cancelled" | "Deleting" | "Failed" | "Succeeded" | "Updating")
		| undefined;
}
export interface AdminCredentials {
	readonly nsxtPassword?: string | undefined;
	readonly nsxtUsername?: string | undefined;
	readonly vcenterPassword?: string | undefined;
	readonly vcenterUsername?: string | undefined;
}
export interface Circuit {
	readonly expressRouteID?: string | undefined;
	readonly expressRoutePrivatePeeringID?: string | undefined;
	readonly primarySubnet?: string | undefined;
	readonly secondarySubnet?: string | undefined;
}
export interface CloudLinkProperties {
	readonly linkedCloud?: string | undefined;
	readonly status?: ("Active" | "Building" | "Deleting" | "Disconnected" | "Failed") | undefined;
}
export interface ClusterProperties {
	readonly clusterId?: number | undefined;
	readonly clusterSize?: number | undefined;
	readonly hosts?: string[] | undefined;
	readonly provisioningState?: ("Cancelled" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface DatastoreProperties {
	readonly diskPoolVolume?: DiskPoolVolume | undefined;
	readonly netAppVolume?: NetAppVolume | undefined;
	readonly provisioningState?:
		| ("Cancelled" | "Creating" | "Deleting" | "Failed" | "Pending" | "Succeeded" | "Updating")
		| undefined;
}
export interface DiskPoolVolume {
	readonly lunName: string;
	readonly mountOption?: ("ATTACH" | "MOUNT") | undefined;
	readonly path?: string | undefined;
	readonly targetId: string;
}
export interface Endpoints {
	readonly hcxCloudManager?: string | undefined;
	readonly nsxtManager?: string | undefined;
	readonly vcsa?: string | undefined;
}
export interface ExpressRouteAuthorizationProperties {
	readonly expressRouteAuthorizationId?: string | undefined;
	readonly expressRouteAuthorizationKey?: string | undefined;
	readonly provisioningState?: ("Failed" | "Succeeded" | "Updating") | undefined;
}
export interface GlobalReachConnectionProperties {
	readonly addressPrefix?: string | undefined;
	readonly authorizationKey?: string | undefined;
	readonly circuitConnectionStatus?: ("Connected" | "Connecting" | "Disconnected") | undefined;
	readonly peerExpressRouteCircuit?: string | undefined;
	readonly provisioningState?: ("Failed" | "Succeeded" | "Updating") | undefined;
}
export interface HcxEnterpriseSiteProperties {
	readonly activationKey?: string | undefined;
	readonly status?: ("Available" | "Consumed" | "Deactivated" | "Deleted") | undefined;
}
export interface IdentitySource {
	readonly alias?: string | undefined;
	readonly baseGroupDN?: string | undefined;
	readonly baseUserDN?: string | undefined;
	readonly domain?: string | undefined;
	readonly name?: string | undefined;
	readonly password?: string | undefined;
	readonly primaryServer?: string | undefined;
	readonly secondaryServer?: string | undefined;
	readonly ssl?: ("Disabled" | "Enabled") | undefined;
	readonly username?: string | undefined;
}
export interface ManagementCluster {
	readonly clusterId?: number | undefined;
	readonly clusterSize?: number | undefined;
	readonly hosts?: string[] | undefined;
	readonly provisioningState?: ("Cancelled" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
}
export interface NetAppVolume {
	readonly id: string;
}
export interface PrivateCloudProperties {
	readonly circuit?: Circuit | undefined;
	readonly endpoints?: Endpoints | undefined;
	readonly externalCloudLinks?: string[] | undefined;
	readonly identitySources?: IdentitySource[] | undefined;
	readonly internet?: ("Disabled" | "Enabled") | undefined;
	readonly managementCluster?: ManagementCluster | undefined;
	readonly managementNetwork?: string | undefined;
	readonly networkBlock: string;
	readonly nsxtCertificateThumbprint?: string | undefined;
	readonly nsxtPassword?: string | undefined;
	readonly provisioningNetwork?: string | undefined;
	readonly provisioningState?:
		| ("Building" | "Cancelled" | "Deleting" | "Failed" | "Pending" | "Succeeded" | "Updating")
		| undefined;
	readonly vcenterCertificateThumbprint?: string | undefined;
	readonly vcenterPassword?: string | undefined;
	readonly vmotionNetwork?: string | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ScriptCmdletProperties {
	readonly description?: string | undefined;
	readonly parameters?: ScriptParameter[] | undefined;
	readonly timeout?: string | undefined;
}
export interface ScriptExecutionParameter {
	readonly name: string;
}
export interface ScriptExecutionProperties {
	readonly errors?: string[] | undefined;
	readonly failureReason?: string | undefined;
	readonly finishedAt?: string | undefined;
	readonly hiddenParameters?: ScriptExecutionParameter[] | undefined;
	readonly information?: string[] | undefined;
	readonly namedOutputs?: ScriptExecutionPropertiesNamedOutputs | undefined;
	readonly output?: string[] | undefined;
	readonly parameters?: ScriptExecutionParameter[] | undefined;
	readonly provisioningState?:
		| ("Cancelled" | "Cancelling" | "Deleting" | "Failed" | "Pending" | "Running" | "Succeeded")
		| undefined;
	readonly retention?: string | undefined;
	readonly scriptCmdletId?: string | undefined;
	readonly startedAt?: string | undefined;
	readonly submittedAt?: string | undefined;
	readonly timeout: string;
	readonly warnings?: string[] | undefined;
}
export interface ScriptExecutionPropertiesNamedOutputs {
	readonly "[ key: string ]"?: any | undefined;
}
export interface ScriptPackageProperties {
	readonly description?: string | undefined;
	readonly version?: string | undefined;
}
export interface ScriptParameter {
	readonly description?: string | undefined;
	readonly name?: string | undefined;
	readonly optional?: ("Optional" | "Required") | undefined;
	readonly type?: ("Bool" | "Credential" | "Float" | "Int" | "SecureString" | "String") | undefined;
	readonly visibility?: ("Hidden" | "Visible") | undefined;
}
export interface Sku {
	readonly name: string;
}
export interface WorkloadNetworkDhcpEntity {
	readonly displayName?: string | undefined;
	readonly provisioningState?: ("Building" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly revision?: number | undefined;
	readonly segments?: string[] | undefined;
}
export interface WorkloadNetworkDnsServiceProperties {
	readonly defaultDnsZone?: string | undefined;
	readonly displayName?: string | undefined;
	readonly dnsServiceIp?: string | undefined;
	readonly fqdnZones?: string[] | undefined;
	readonly logLevel?: ("DEBUG" | "ERROR" | "FATAL" | "INFO" | "WARNING") | undefined;
	readonly provisioningState?: ("Building" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly revision?: number | undefined;
	readonly status?: ("FAILURE" | "SUCCESS") | undefined;
}
export interface WorkloadNetworkDnsZoneProperties {
	readonly displayName?: string | undefined;
	readonly dnsServerIps?: string[] | undefined;
	readonly dnsServices?: number | undefined;
	readonly domain?: string[] | undefined;
	readonly provisioningState?: ("Building" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly revision?: number | undefined;
	readonly sourceIp?: string | undefined;
}
export interface WorkloadNetworkGatewayProperties {
	readonly displayName?: string | undefined;
	readonly path?: string | undefined;
}
export interface WorkloadNetworkPortMirroringProperties {
	readonly destination?: string | undefined;
	readonly direction?: "INGRESS, EGRESS, BIDIRECTIONAL" | undefined;
	readonly displayName?: string | undefined;
	readonly provisioningState?: ("Building" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly revision?: number | undefined;
	readonly source?: string | undefined;
	readonly status?: "SUCCESS, FAILURE" | undefined;
}
export interface WorkloadNetworkPublicIPProperties {
	readonly displayName?: string | undefined;
	readonly numberOfPublicIPs?: number | undefined;
	readonly provisioningState?: ("Building" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly publicIPBlock?: string | undefined;
}
export interface WorkloadNetworkSegmentPortVif {
	readonly portName?: string | undefined;
}
export interface WorkloadNetworkSegmentProperties {
	readonly connectedGateway?: string | undefined;
	readonly displayName?: string | undefined;
	readonly portVif?: WorkloadNetworkSegmentPortVif[] | undefined;
	readonly provisioningState?: ("Building" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly revision?: number | undefined;
	readonly status?: "SUCCESS, FAILURE" | undefined;
	readonly subnet?: WorkloadNetworkSegmentSubnet | undefined;
}
export interface WorkloadNetworkSegmentSubnet {
	readonly dhcpRanges?: string[] | undefined;
	readonly gatewayAddress?: string | undefined;
}
export interface WorkloadNetworkVirtualMachineProperties {
	readonly displayName?: string | undefined;
	readonly vmType?: "REGULAR, EDGE, SERVICE" | undefined;
}
export interface WorkloadNetworkVMGroupProperties {
	readonly displayName?: string | undefined;
	readonly members?: string[] | undefined;
	readonly provisioningState?: ("Building" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly revision?: number | undefined;
	readonly status?: "SUCCESS, FAILURE" | undefined;
}
export default {
	privateClouds: privateClouds,
	"privateClouds/addons": privateClouds_addons,
	"privateClouds/authorizations": privateClouds_authorizations,
	"privateClouds/cloudLinks": privateClouds_cloudLinks,
	"privateClouds/clusters": privateClouds_clusters,
	"privateClouds/clusters/datastores": privateClouds_clusters_datastores,
	"privateClouds/globalReachConnections": privateClouds_globalReachConnections,
	"privateClouds/hcxEnterpriseSites": privateClouds_hcxEnterpriseSites,
	"privateClouds/scriptExecutions": privateClouds_scriptExecutions,
	"privateClouds/scriptPackages": privateClouds_scriptPackages,
	"privateClouds/scriptPackages/scriptCmdlets": privateClouds_scriptPackages_scriptCmdlets,
	"privateClouds/workloadNetworks/dhcpConfigurations": privateClouds_workloadNetworks_dhcpConfigurations,
	"privateClouds/workloadNetworks/dnsServices": privateClouds_workloadNetworks_dnsServices,
	"privateClouds/workloadNetworks/dnsZones": privateClouds_workloadNetworks_dnsZones,
	"privateClouds/workloadNetworks/gateways": privateClouds_workloadNetworks_gateways,
	"privateClouds/workloadNetworks/portMirroringProfiles": privateClouds_workloadNetworks_portMirroringProfiles,
	"privateClouds/workloadNetworks/publicIPs": privateClouds_workloadNetworks_publicIPs,
	"privateClouds/workloadNetworks/segments": privateClouds_workloadNetworks_segments,
	"privateClouds/workloadNetworks/virtualMachines": privateClouds_workloadNetworks_virtualMachines,
	"privateClouds/workloadNetworks/vmGroups": privateClouds_workloadNetworks_vmGroups,
};

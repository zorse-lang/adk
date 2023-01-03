import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class HyperVSites extends ArmResource<HyperVSitesComponentInputs> implements HyperVSitesComponentOutputs {
	constructor(entity: ADKEntity, options: HyperVSitesComponentInputs) {
		super(entity, options.name, "Microsoft.OffAzure/HyperVSites", "2020-07-07", options);
	}
	public readonly apiVersion: "2020-07-07";
	public readonly id: string;
	public readonly type: "Microsoft.OffAzure/HyperVSites";
}
export interface HyperVSitesComponentOutputs {
	readonly apiVersion: "2020-07-07";
	readonly id: string;
	readonly type: "Microsoft.OffAzure/HyperVSites";
}
export interface HyperVSitesComponentInputs {
	readonly eTag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: SiteProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: HyperVSiteTags | undefined;
}
export class HyperVSites_clusters
	extends ArmResource<HyperVSites_clustersComponentInputs>
	implements HyperVSites_clustersComponentOutputs
{
	constructor(entity: ADKEntity, options: HyperVSites_clustersComponentInputs) {
		super(entity, options.name, "Microsoft.OffAzure/HyperVSites/clusters", "2020-07-07", options);
	}
	public readonly apiVersion: "2020-07-07";
	public readonly id: string;
	public readonly type: "Microsoft.OffAzure/HyperVSites/clusters";
}
export interface HyperVSites_clustersComponentOutputs {
	readonly apiVersion: "2020-07-07";
	readonly id: string;
	readonly type: "Microsoft.OffAzure/HyperVSites/clusters";
}
export interface HyperVSites_clustersComponentInputs {
	readonly name: string;
	readonly properties?: HyperVClusterProperties | undefined;
}
export class HyperVSites_hosts
	extends ArmResource<HyperVSites_hostsComponentInputs>
	implements HyperVSites_hostsComponentOutputs
{
	constructor(entity: ADKEntity, options: HyperVSites_hostsComponentInputs) {
		super(entity, options.name, "Microsoft.OffAzure/HyperVSites/hosts", "2020-07-07", options);
	}
	public readonly apiVersion: "2020-07-07";
	public readonly id: string;
	public readonly type: "Microsoft.OffAzure/HyperVSites/hosts";
}
export interface HyperVSites_hostsComponentOutputs {
	readonly apiVersion: "2020-07-07";
	readonly id: string;
	readonly type: "Microsoft.OffAzure/HyperVSites/hosts";
}
export interface HyperVSites_hostsComponentInputs {
	readonly name: string;
	readonly properties?: HyperVHostProperties | undefined;
}
export class MasterSites extends ArmResource<MasterSitesComponentInputs> implements MasterSitesComponentOutputs {
	constructor(entity: ADKEntity, options: MasterSitesComponentInputs) {
		super(entity, options.name, "Microsoft.OffAzure/MasterSites", "2020-07-07", options);
	}
	public readonly apiVersion: "2020-07-07";
	public readonly id: string;
	public readonly type: "Microsoft.OffAzure/MasterSites";
}
export interface MasterSitesComponentOutputs {
	readonly apiVersion: "2020-07-07";
	readonly id: string;
	readonly type: "Microsoft.OffAzure/MasterSites";
}
export interface MasterSitesComponentInputs {
	readonly eTag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: MasterSiteProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class masterSites_privateEndpointConnections
	extends ArmResource<masterSites_privateEndpointConnectionsComponentInputs>
	implements masterSites_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: masterSites_privateEndpointConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.OffAzure/masterSites/privateEndpointConnections", "2020-07-07", options);
	}
	public readonly apiVersion: "2020-07-07";
	public readonly id: string;
	public readonly type: "Microsoft.OffAzure/masterSites/privateEndpointConnections";
}
export interface masterSites_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2020-07-07";
	readonly id: string;
	readonly type: "Microsoft.OffAzure/masterSites/privateEndpointConnections";
}
export interface masterSites_privateEndpointConnectionsComponentInputs {
	readonly eTag?: string | undefined;
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class VMwareSites extends ArmResource<VMwareSitesComponentInputs> implements VMwareSitesComponentOutputs {
	constructor(entity: ADKEntity, options: VMwareSitesComponentInputs) {
		super(entity, options.name, "Microsoft.OffAzure/VMwareSites", "2020-07-07", options);
	}
	public readonly apiVersion: "2020-07-07";
	public readonly id: string;
	public readonly type: "Microsoft.OffAzure/VMwareSites";
}
export interface VMwareSitesComponentOutputs {
	readonly apiVersion: "2020-07-07";
	readonly id: string;
	readonly type: "Microsoft.OffAzure/VMwareSites";
}
export interface VMwareSitesComponentInputs {
	readonly eTag?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: SiteProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: VMwareSiteTags | undefined;
}
export class VMwareSites_vCenters
	extends ArmResource<VMwareSites_vCentersComponentInputs>
	implements VMwareSites_vCentersComponentOutputs
{
	constructor(entity: ADKEntity, options: VMwareSites_vCentersComponentInputs) {
		super(entity, options.name, "Microsoft.OffAzure/VMwareSites/vCenters", "2020-07-07", options);
	}
	public readonly apiVersion: "2020-07-07";
	public readonly id: string;
	public readonly type: "Microsoft.OffAzure/VMwareSites/vCenters";
}
export interface VMwareSites_vCentersComponentOutputs {
	readonly apiVersion: "2020-07-07";
	readonly id: string;
	readonly type: "Microsoft.OffAzure/VMwareSites/vCenters";
}
export interface VMwareSites_vCentersComponentInputs {
	readonly name: string;
	readonly properties?: VCenterProperties | undefined;
}
export interface HealthErrorDetails {
	readonly code?: string | undefined;
	readonly id?: number | undefined;
	readonly message?: string | undefined;
	readonly messageParameters?: HealthErrorDetailsMessageParameters | undefined;
	readonly possibleCauses?: string | undefined;
	readonly recommendedAction?: string | undefined;
	readonly severity?: string | undefined;
	readonly source?: string | undefined;
	readonly summaryMessage?: string | undefined;
}
export interface HealthErrorDetailsMessageParameters {
	readonly "[ key: string ]"?: string | undefined;
}
export interface HyperVClusterProperties {
	readonly createdTimestamp?: string | undefined;
	readonly errors?: HealthErrorDetails[] | undefined;
	readonly fqdn?: string | undefined;
	readonly functionalLevel?: number | undefined;
	readonly hostFqdnList?: string[] | undefined;
	readonly runAsAccountId?: string | undefined;
	readonly status?: string | undefined;
	readonly updatedTimestamp?: string | undefined;
}
export interface HyperVHostProperties {
	readonly createdTimestamp?: string | undefined;
	readonly errors?: HealthErrorDetails[] | undefined;
	readonly fqdn?: string | undefined;
	readonly runAsAccountId?: string | undefined;
	readonly updatedTimestamp?: string | undefined;
	readonly version?: string | undefined;
}
export interface HyperVSiteTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface MasterSiteProperties {
	readonly allowMultipleSites?: boolean | undefined;
	readonly customerStorageAccountArmId?: string | undefined;
	readonly privateEndpointConnections?: PrivateEndpointConnection[] | undefined;
	readonly publicNetworkAccess?: ("Disabled" | "Enabled" | "NotSpecified") | undefined;
	readonly sites?: string[] | undefined;
}
export interface PrivateEndpointConnection {
	readonly eTag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly type?: string | undefined;
}
export interface PrivateEndpointConnectionProperties {
	readonly privateEndpoint?: ResourceId | undefined;
	readonly privateLinkServiceConnectionState?: PrivateLinkServiceConnectionState | undefined;
	readonly provisioningState?: ("Accepted" | "Failed" | "InProgress" | "Succeeded") | undefined;
}
export interface PrivateLinkServiceConnectionState {
	readonly actionsRequired?: string | undefined;
	readonly description?: string | undefined;
	readonly status?: ("Approved" | "Disconnected" | "Pending" | "Rejected") | undefined;
}
export interface ResourceId {
	readonly id?: string | undefined;
}
export interface SiteAgentProperties {
	readonly id?: string | undefined;
	readonly keyVaultId?: string | undefined;
	readonly keyVaultUri?: string | undefined;
	readonly lastHeartBeatUtc?: string | undefined;
	readonly version?: string | undefined;
}
export interface SiteProperties {
	readonly agentDetails?: SiteAgentProperties | undefined;
	readonly applianceName?: string | undefined;
	readonly discoverySolutionId?: string | undefined;
	readonly serviceEndpoint?: string | undefined;
	readonly servicePrincipalIdentityDetails?: SiteSpnProperties | undefined;
}
export interface SiteSpnProperties {
	readonly aadAuthority?: string | undefined;
	readonly applicationId?: string | undefined;
	readonly audience?: string | undefined;
	readonly objectId?: string | undefined;
	readonly rawCertData?: string | undefined;
	readonly tenantId?: string | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface VCenterProperties {
	readonly createdTimestamp?: string | undefined;
	readonly errors?: HealthErrorDetails[] | undefined;
	readonly fqdn?: string | undefined;
	readonly instanceUuid?: string | undefined;
	readonly perfStatisticsLevel?: string | undefined;
	readonly port?: string | undefined;
	readonly runAsAccountId?: string | undefined;
	readonly updatedTimestamp?: string | undefined;
	readonly version?: string | undefined;
}
export interface VMwareSiteTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	HyperVSites: HyperVSites,
	"HyperVSites/clusters": HyperVSites_clusters,
	"HyperVSites/hosts": HyperVSites_hosts,
	MasterSites: MasterSites,
	"masterSites/privateEndpointConnections": masterSites_privateEndpointConnections,
	VMwareSites: VMwareSites,
	"VMwareSites/vCenters": VMwareSites_vCenters,
};

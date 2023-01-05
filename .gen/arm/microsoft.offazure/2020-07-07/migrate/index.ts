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
	readonly eTag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: SiteProperties;
	readonly systemData?: SystemData;
	readonly tags?: HyperVSiteTags;
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
	readonly properties?: HyperVClusterProperties;
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
	readonly properties?: HyperVHostProperties;
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
	readonly eTag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: MasterSiteProperties;
	readonly systemData?: SystemData;
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
	readonly eTag?: string;
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties;
	readonly systemData?: SystemData;
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
	readonly eTag?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: SiteProperties;
	readonly systemData?: SystemData;
	readonly tags?: VMwareSiteTags;
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
	readonly properties?: VCenterProperties;
}
export interface HealthErrorDetails {
	readonly code?: string;
	readonly id?: number;
	readonly message?: string;
	readonly messageParameters?: HealthErrorDetailsMessageParameters;
	readonly possibleCauses?: string;
	readonly recommendedAction?: string;
	readonly severity?: string;
	readonly source?: string;
	readonly summaryMessage?: string;
}
export interface HealthErrorDetailsMessageParameters {
	readonly [key: string]: string;
}
export interface HyperVClusterProperties {
	readonly createdTimestamp?: string;
	readonly errors?: HealthErrorDetails[];
	readonly fqdn?: string;
	readonly functionalLevel?: number;
	readonly hostFqdnList?: string[];
	readonly runAsAccountId?: string;
	readonly status?: string;
	readonly updatedTimestamp?: string;
}
export interface HyperVHostProperties {
	readonly createdTimestamp?: string;
	readonly errors?: HealthErrorDetails[];
	readonly fqdn?: string;
	readonly runAsAccountId?: string;
	readonly updatedTimestamp?: string;
	readonly version?: string;
}
export interface HyperVSiteTags {
	readonly [key: string]: string;
}
export interface MasterSiteProperties {
	readonly allowMultipleSites?: boolean;
	readonly customerStorageAccountArmId?: string;
	readonly privateEndpointConnections?: PrivateEndpointConnection[];
	readonly publicNetworkAccess?: "Disabled" | "Enabled" | "NotSpecified";
	readonly sites?: string[];
}
export interface PrivateEndpointConnection {
	readonly eTag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: PrivateEndpointConnectionProperties;
	readonly systemData?: SystemData;
	readonly type?: string;
}
export interface PrivateEndpointConnectionProperties {
	readonly privateEndpoint?: ResourceId;
	readonly privateLinkServiceConnectionState?: PrivateLinkServiceConnectionState;
	readonly provisioningState?: "Accepted" | "Failed" | "InProgress" | "Succeeded";
}
export interface PrivateLinkServiceConnectionState {
	readonly actionsRequired?: string;
	readonly description?: string;
	readonly status?: "Approved" | "Disconnected" | "Pending" | "Rejected";
}
export interface ResourceId {
	readonly id?: string;
}
export interface SiteAgentProperties {
	readonly id?: string;
	readonly keyVaultId?: string;
	readonly keyVaultUri?: string;
	readonly lastHeartBeatUtc?: string;
	readonly version?: string;
}
export interface SiteProperties {
	readonly agentDetails?: SiteAgentProperties;
	readonly applianceName?: string;
	readonly discoverySolutionId?: string;
	readonly serviceEndpoint?: string;
	readonly servicePrincipalIdentityDetails?: SiteSpnProperties;
}
export interface SiteSpnProperties {
	readonly aadAuthority?: string;
	readonly applicationId?: string;
	readonly audience?: string;
	readonly objectId?: string;
	readonly rawCertData?: string;
	readonly tenantId?: string;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface VCenterProperties {
	readonly createdTimestamp?: string;
	readonly errors?: HealthErrorDetails[];
	readonly fqdn?: string;
	readonly instanceUuid?: string;
	readonly perfStatisticsLevel?: string;
	readonly port?: string;
	readonly runAsAccountId?: string;
	readonly updatedTimestamp?: string;
	readonly version?: string;
}
export interface VMwareSiteTags {
	readonly [key: string]: string;
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

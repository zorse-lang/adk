import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class privateClouds extends ArmResource<privateCloudsComponentInputs> implements privateCloudsComponentOutputs {
	constructor(entity: ADKEntity, options: privateCloudsComponentInputs) {
		super(entity, options.name, "Microsoft.AVS/privateClouds", "2020-03-20", options);
	}
	public readonly apiVersion: "2020-03-20";
	public readonly id: string;
	public readonly type: "Microsoft.AVS/privateClouds";
}
export interface privateCloudsComponentOutputs {
	readonly apiVersion: "2020-03-20";
	readonly id: string;
	readonly type: "Microsoft.AVS/privateClouds";
}
export interface privateCloudsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties: PrivateCloudProperties;
	readonly sku: Sku;
	readonly tags?: TrackedResourceTags;
}
export class privateClouds_authorizations
	extends ArmResource<privateClouds_authorizationsComponentInputs>
	implements privateClouds_authorizationsComponentOutputs
{
	constructor(entity: ADKEntity, options: privateClouds_authorizationsComponentInputs) {
		super(entity, options.name, "Microsoft.AVS/privateClouds/authorizations", "2020-03-20", options);
	}
	public readonly apiVersion: "2020-03-20";
	public readonly id: string;
	public readonly type: "Microsoft.AVS/privateClouds/authorizations";
}
export interface privateClouds_authorizationsComponentOutputs {
	readonly apiVersion: "2020-03-20";
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
		super(entity, options.name, "Microsoft.AVS/privateClouds/clusters", "2020-03-20", options);
	}
	public readonly apiVersion: "2020-03-20";
	public readonly id: string;
	public readonly type: "Microsoft.AVS/privateClouds/clusters";
}
export interface privateClouds_clustersComponentOutputs {
	readonly apiVersion: "2020-03-20";
	readonly id: string;
	readonly type: "Microsoft.AVS/privateClouds/clusters";
}
export interface privateClouds_clustersComponentInputs {
	readonly name: string;
	readonly properties: ClusterProperties;
	readonly sku: Sku;
}
export class privateClouds_hcxEnterpriseSites
	extends ArmResource<privateClouds_hcxEnterpriseSitesComponentInputs>
	implements privateClouds_hcxEnterpriseSitesComponentOutputs
{
	constructor(entity: ADKEntity, options: privateClouds_hcxEnterpriseSitesComponentInputs) {
		super(entity, options.name, "Microsoft.AVS/privateClouds/hcxEnterpriseSites", "2020-03-20", options);
	}
	public readonly apiVersion: "2020-03-20";
	public readonly id: string;
	public readonly type: "Microsoft.AVS/privateClouds/hcxEnterpriseSites";
}
export interface privateClouds_hcxEnterpriseSitesComponentOutputs {
	readonly apiVersion: "2020-03-20";
	readonly id: string;
	readonly type: "Microsoft.AVS/privateClouds/hcxEnterpriseSites";
}
export interface privateClouds_hcxEnterpriseSitesComponentInputs {
	readonly name: string;
	readonly properties?: HcxEnterpriseSiteProperties;
}
export function listAdminCredentials(resource: privateClouds): AdminCredentials {
	if (resource.apiVersion !== "2020-03-20") {
		throw new Error(`listAdminCredentials is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.AVS/privateClouds") {
		throw new Error(`listAdminCredentials is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
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
export interface Sku {
	readonly name: string;
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export default {
	privateClouds: privateClouds,
	"privateClouds/authorizations": privateClouds_authorizations,
	"privateClouds/clusters": privateClouds_clusters,
	"privateClouds/hcxEnterpriseSites": privateClouds_hcxEnterpriseSites,
};

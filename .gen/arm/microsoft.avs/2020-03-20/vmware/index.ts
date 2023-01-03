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
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties: PrivateCloudProperties;
	readonly sku: Sku;
	readonly tags?: TrackedResourceTags | undefined;
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
	readonly properties?: ExpressRouteAuthorizationProperties | undefined;
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
	readonly properties?: HcxEnterpriseSiteProperties | undefined;
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
export interface ClusterProperties {
	readonly clusterId?: number | undefined;
	readonly clusterSize?: number | undefined;
	readonly hosts?: string[] | undefined;
	readonly provisioningState?: ("Cancelled" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
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
export interface PrivateCloudProperties {
	readonly circuit?: Circuit | undefined;
	readonly endpoints?: Endpoints | undefined;
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
export interface Sku {
	readonly name: string;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	privateClouds: privateClouds,
	"privateClouds/authorizations": privateClouds_authorizations,
	"privateClouds/clusters": privateClouds_clusters,
	"privateClouds/hcxEnterpriseSites": privateClouds_hcxEnterpriseSites,
};

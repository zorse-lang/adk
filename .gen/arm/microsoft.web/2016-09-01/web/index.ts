import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class hostingEnvironments
	extends ArmResource<hostingEnvironmentsComponentInputs>
	implements hostingEnvironmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: hostingEnvironmentsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/hostingEnvironments", "2016-09-01", options);
	}
	public readonly apiVersion: "2016-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/hostingEnvironments";
}
export interface hostingEnvironmentsComponentOutputs {
	readonly apiVersion: "2016-09-01";
	readonly id: string;
	readonly type: "Microsoft.Web/hostingEnvironments";
}
export interface hostingEnvironmentsComponentInputs {
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: AppServiceEnvironment | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class hostingEnvironments_multiRolePools
	extends ArmResource<hostingEnvironments_multiRolePoolsComponentInputs>
	implements hostingEnvironments_multiRolePoolsComponentOutputs
{
	constructor(entity: ADKEntity, options: hostingEnvironments_multiRolePoolsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/hostingEnvironments/multiRolePools", "2016-09-01", options);
	}
	public readonly apiVersion: "2016-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/hostingEnvironments/multiRolePools";
}
export interface hostingEnvironments_multiRolePoolsComponentOutputs {
	readonly apiVersion: "2016-09-01";
	readonly id: string;
	readonly type: "Microsoft.Web/hostingEnvironments/multiRolePools";
}
export interface hostingEnvironments_multiRolePoolsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: WorkerPool | undefined;
	readonly sku?: SkuDescription | undefined;
}
export class hostingEnvironments_workerPools
	extends ArmResource<hostingEnvironments_workerPoolsComponentInputs>
	implements hostingEnvironments_workerPoolsComponentOutputs
{
	constructor(entity: ADKEntity, options: hostingEnvironments_workerPoolsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/hostingEnvironments/workerPools", "2016-09-01", options);
	}
	public readonly apiVersion: "2016-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/hostingEnvironments/workerPools";
}
export interface hostingEnvironments_workerPoolsComponentOutputs {
	readonly apiVersion: "2016-09-01";
	readonly id: string;
	readonly type: "Microsoft.Web/hostingEnvironments/workerPools";
}
export interface hostingEnvironments_workerPoolsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: WorkerPool | undefined;
	readonly sku?: SkuDescription | undefined;
}
export class serverfarms extends ArmResource<serverfarmsComponentInputs> implements serverfarmsComponentOutputs {
	constructor(entity: ADKEntity, options: serverfarmsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/serverfarms", "2016-09-01", options);
	}
	public readonly apiVersion: "2016-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/serverfarms";
}
export interface serverfarmsComponentOutputs {
	readonly apiVersion: "2016-09-01";
	readonly id: string;
	readonly type: "Microsoft.Web/serverfarms";
}
export interface serverfarmsComponentInputs {
	readonly kind?: string | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: AppServicePlanProperties | undefined;
	readonly sku?: SkuDescription | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class serverfarms_hybridConnectionNamespaces_relays
	extends ArmResource<serverfarms_hybridConnectionNamespaces_relaysComponentInputs>
	implements serverfarms_hybridConnectionNamespaces_relaysComponentOutputs
{
	constructor(entity: ADKEntity, options: serverfarms_hybridConnectionNamespaces_relaysComponentInputs) {
		super(entity, options.name, "Microsoft.Web/serverfarms/hybridConnectionNamespaces/relays", "2016-09-01", options);
	}
	public readonly apiVersion: "2016-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/serverfarms/hybridConnectionNamespaces/relays";
}
export interface serverfarms_hybridConnectionNamespaces_relaysComponentOutputs {
	readonly apiVersion: "2016-09-01";
	readonly id: string;
	readonly type: "Microsoft.Web/serverfarms/hybridConnectionNamespaces/relays";
}
export interface serverfarms_hybridConnectionNamespaces_relaysComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: HybridConnectionProperties | undefined;
}
export class serverfarms_hybridConnectionPlanLimits
	extends ArmResource<serverfarms_hybridConnectionPlanLimitsComponentInputs>
	implements serverfarms_hybridConnectionPlanLimitsComponentOutputs
{
	constructor(entity: ADKEntity, options: serverfarms_hybridConnectionPlanLimitsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/serverfarms/hybridConnectionPlanLimits", "2016-09-01", options);
	}
	public readonly apiVersion: "2016-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/serverfarms/hybridConnectionPlanLimits";
}
export interface serverfarms_hybridConnectionPlanLimitsComponentOutputs {
	readonly apiVersion: "2016-09-01";
	readonly id: string;
	readonly type: "Microsoft.Web/serverfarms/hybridConnectionPlanLimits";
}
export interface serverfarms_hybridConnectionPlanLimitsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: HybridConnectionLimitsProperties | undefined;
}
export class serverfarms_virtualNetworkConnections
	extends ArmResource<serverfarms_virtualNetworkConnectionsComponentInputs>
	implements serverfarms_virtualNetworkConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: serverfarms_virtualNetworkConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Web/serverfarms/virtualNetworkConnections", "2016-09-01", options);
	}
	public readonly apiVersion: "2016-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/serverfarms/virtualNetworkConnections";
}
export interface serverfarms_virtualNetworkConnectionsComponentOutputs {
	readonly apiVersion: "2016-09-01";
	readonly id: string;
	readonly type: "Microsoft.Web/serverfarms/virtualNetworkConnections";
}
export interface serverfarms_virtualNetworkConnectionsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: VnetInfoProperties | undefined;
}
export class serverfarms_virtualNetworkConnections_gateways
	extends ArmResource<serverfarms_virtualNetworkConnections_gatewaysComponentInputs>
	implements serverfarms_virtualNetworkConnections_gatewaysComponentOutputs
{
	constructor(entity: ADKEntity, options: serverfarms_virtualNetworkConnections_gatewaysComponentInputs) {
		super(entity, options.name, "Microsoft.Web/serverfarms/virtualNetworkConnections/gateways", "2016-09-01", options);
	}
	public readonly apiVersion: "2016-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/serverfarms/virtualNetworkConnections/gateways";
}
export interface serverfarms_virtualNetworkConnections_gatewaysComponentOutputs {
	readonly apiVersion: "2016-09-01";
	readonly id: string;
	readonly type: "Microsoft.Web/serverfarms/virtualNetworkConnections/gateways";
}
export interface serverfarms_virtualNetworkConnections_gatewaysComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: VnetGatewayProperties | undefined;
}
export class serverfarms_virtualNetworkConnections_routes
	extends ArmResource<serverfarms_virtualNetworkConnections_routesComponentInputs>
	implements serverfarms_virtualNetworkConnections_routesComponentOutputs
{
	constructor(entity: ADKEntity, options: serverfarms_virtualNetworkConnections_routesComponentInputs) {
		super(entity, options.name, "Microsoft.Web/serverfarms/virtualNetworkConnections/routes", "2016-09-01", options);
	}
	public readonly apiVersion: "2016-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.Web/serverfarms/virtualNetworkConnections/routes";
}
export interface serverfarms_virtualNetworkConnections_routesComponentOutputs {
	readonly apiVersion: "2016-09-01";
	readonly id: string;
	readonly type: "Microsoft.Web/serverfarms/virtualNetworkConnections/routes";
}
export interface serverfarms_virtualNetworkConnections_routesComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: VnetRouteProperties | undefined;
}
export function listKeys(resource: serverfarms_hybridConnectionNamespaces_relays): HybridConnectionKey {
	if (resource.apiVersion !== "2016-09-01") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Web/serverfarms/hybridConnectionNamespaces/relays") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AppServiceEnvironment {
	readonly allowedMultiSizes?: string | undefined;
	readonly allowedWorkerSizes?: string | undefined;
	readonly apiManagementAccountId?: string | undefined;
	readonly clusterSettings?: NameValuePair[] | undefined;
	readonly databaseEdition?: string | undefined;
	readonly databaseServiceObjective?: string | undefined;
	readonly defaultFrontEndScaleFactor?: number | undefined;
	readonly dnsSuffix?: string | undefined;
	readonly dynamicCacheEnabled?: boolean | undefined;
	readonly environmentCapacities?: StampCapacity[] | undefined;
	readonly environmentIsHealthy?: boolean | undefined;
	readonly environmentStatus?: string | undefined;
	readonly frontEndScaleFactor?: number | undefined;
	readonly internalLoadBalancingMode?: ("None" | "Publishing") | undefined;
	readonly ipsslAddressCount?: number | undefined;
	readonly lastAction?: string | undefined;
	readonly lastActionResult?: string | undefined;
	readonly location: string;
	readonly maximumNumberOfMachines?: number | undefined;
	readonly multiRoleCount?: number | undefined;
	readonly multiSize?: string | undefined;
	readonly name: string;
	readonly networkAccessControlList?: NetworkAccessControlEntry[] | undefined;
	readonly provisioningState?: ("Canceled" | "Deleting" | "Failed" | "InProgress") | undefined;
	readonly resourceGroup?: string | undefined;
	readonly status?: ("Deleting" | "Preparing" | "Ready") | undefined;
	readonly subscriptionId?: string | undefined;
	readonly suspended?: boolean | undefined;
	readonly upgradeDomains?: number | undefined;
	readonly userWhitelistedIpRanges?: string[] | undefined;
	readonly vipMappings?: VirtualIPMapping[] | undefined;
	readonly virtualNetwork: VirtualNetworkProfile;
	readonly vnetName?: string | undefined;
	readonly vnetResourceGroupName?: string | undefined;
	readonly vnetSubnetName?: string | undefined;
	readonly workerPools: WorkerPool[];
}
export interface AppServicePlanProperties {
	readonly adminSiteName?: string | undefined;
	readonly geoRegion?: string | undefined;
	readonly hostingEnvironmentProfile?: HostingEnvironmentProfile | undefined;
	readonly isSpot?: boolean | undefined;
	readonly maximumNumberOfWorkers?: number | undefined;
	readonly name: string;
	readonly numberOfSites?: number | undefined;
	readonly perSiteScaling?: boolean | undefined;
	readonly provisioningState?: ("Canceled" | "Deleting" | "Failed" | "InProgress") | undefined;
	readonly reserved?: boolean | undefined;
	readonly resourceGroup?: string | undefined;
	readonly spotExpirationTime?: string | undefined;
	readonly status?: ("Creating" | "Pending") | undefined;
	readonly subscription?: string | undefined;
	readonly targetWorkerCount?: number | undefined;
	readonly targetWorkerSizeId?: number | undefined;
	readonly workerTierName?: string | undefined;
}
export interface Capability {
	readonly name?: string | undefined;
	readonly reason?: string | undefined;
	readonly value?: string | undefined;
}
export interface HostingEnvironmentProfile {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly type?: string | undefined;
}
export interface HybridConnectionKey {
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: HybridConnectionKeyProperties | undefined;
	readonly type?: string | undefined;
}
export interface HybridConnectionKeyProperties {
	readonly sendKeyName?: string | undefined;
	readonly sendKeyValue?: string | undefined;
}
export interface HybridConnectionLimitsProperties {
	readonly current?: number | undefined;
	readonly maximum?: number | undefined;
}
export interface HybridConnectionProperties {
	readonly hostname?: string | undefined;
	readonly port?: number | undefined;
	readonly relayArmUri?: string | undefined;
	readonly relayName?: string | undefined;
	readonly sendKeyName?: string | undefined;
	readonly sendKeyValue?: string | undefined;
	readonly serviceBusNamespace?: string | undefined;
	readonly serviceBusSuffix?: string | undefined;
}
export interface NameValuePair {
	readonly name?: string | undefined;
	readonly value?: string | undefined;
}
export interface NetworkAccessControlEntry {
	readonly action?: "Deny" | undefined;
	readonly description?: string | undefined;
	readonly order?: number | undefined;
	readonly remoteSubnet?: string | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface SkuCapacity {
	readonly default?: number | undefined;
	readonly maximum?: number | undefined;
	readonly minimum?: number | undefined;
	readonly scaleType?: string | undefined;
}
export interface SkuDescription {
	readonly capabilities?: Capability[] | undefined;
	readonly capacity?: number | undefined;
	readonly family?: string | undefined;
	readonly locations?: string[] | undefined;
	readonly name?: string | undefined;
	readonly size?: string | undefined;
	readonly skuCapacity?: SkuCapacity | undefined;
	readonly tier?: string | undefined;
}
export interface StampCapacity {
	readonly availableCapacity?: number | undefined;
	readonly computeMode?: ("Dedicated" | "Dynamic") | undefined;
	readonly excludeFromCapacityAllocation?: boolean | undefined;
	readonly isApplicableForAllComputeModes?: boolean | undefined;
	readonly name?: string | undefined;
	readonly siteMode?: string | undefined;
	readonly totalCapacity?: number | undefined;
	readonly unit?: string | undefined;
	readonly workerSize?: ("D1" | "D2" | "D3" | "Default" | "Large" | "Medium") | undefined;
	readonly workerSizeId?: number | undefined;
}
export interface VirtualIPMapping {
	readonly internalHttpPort?: number | undefined;
	readonly internalHttpsPort?: number | undefined;
	readonly inUse?: boolean | undefined;
	readonly virtualIP?: string | undefined;
}
export interface VirtualNetworkProfile {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly subnet?: string | undefined;
	readonly type?: string | undefined;
}
export interface VnetGatewayProperties {
	readonly vnetName?: string | undefined;
	readonly vpnPackageUri: string;
}
export interface VnetInfoProperties {
	readonly certBlob?: any | undefined;
	readonly certThumbprint?: string | undefined;
	readonly dnsServers?: string | undefined;
	readonly resyncRequired?: boolean | undefined;
	readonly routes?: VnetRoute[] | undefined;
	readonly vnetResourceId?: string | undefined;
}
export interface VnetRoute {
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: VnetRouteProperties | undefined;
	readonly type?: string | undefined;
}
export interface VnetRouteProperties {
	readonly endAddress?: string | undefined;
	readonly name?: string | undefined;
	readonly routeType?: ("DEFAULT" | "INHERITED" | "STATIC") | undefined;
}
export interface WorkerPool {
	readonly computeMode?: ("Dedicated" | "Dynamic") | undefined;
	readonly instanceNames?: string[] | undefined;
	readonly workerCount?: number | undefined;
	readonly workerSize?: string | undefined;
	readonly workerSizeId?: number | undefined;
}
export default {
	hostingEnvironments: hostingEnvironments,
	"hostingEnvironments/multiRolePools": hostingEnvironments_multiRolePools,
	"hostingEnvironments/workerPools": hostingEnvironments_workerPools,
	serverfarms: serverfarms,
	"serverfarms/hybridConnectionNamespaces/relays": serverfarms_hybridConnectionNamespaces_relays,
	"serverfarms/hybridConnectionPlanLimits": serverfarms_hybridConnectionPlanLimits,
	"serverfarms/virtualNetworkConnections": serverfarms_virtualNetworkConnections,
	"serverfarms/virtualNetworkConnections/gateways": serverfarms_virtualNetworkConnections_gateways,
	"serverfarms/virtualNetworkConnections/routes": serverfarms_virtualNetworkConnections_routes,
};

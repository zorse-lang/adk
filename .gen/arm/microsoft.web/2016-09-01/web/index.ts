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
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: AppServiceEnvironment;
	readonly tags?: ResourceTags;
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
	readonly kind?: string;
	readonly name: string;
	readonly properties?: WorkerPool;
	readonly sku?: SkuDescription;
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
	readonly kind?: string;
	readonly name: string;
	readonly properties?: WorkerPool;
	readonly sku?: SkuDescription;
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
	readonly kind?: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: AppServicePlanProperties;
	readonly sku?: SkuDescription;
	readonly tags?: ResourceTags;
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
	readonly kind?: string;
	readonly name: string;
	readonly properties?: HybridConnectionProperties;
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
	readonly kind?: string;
	readonly name: string;
	readonly properties?: HybridConnectionLimitsProperties;
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
	readonly kind?: string;
	readonly name: string;
	readonly properties?: VnetInfoProperties;
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
	readonly kind?: string;
	readonly name: string;
	readonly properties?: VnetGatewayProperties;
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
	readonly kind?: string;
	readonly name: string;
	readonly properties?: VnetRouteProperties;
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
	readonly allowedMultiSizes?: string;
	readonly allowedWorkerSizes?: string;
	readonly apiManagementAccountId?: string;
	readonly clusterSettings?: NameValuePair[];
	readonly databaseEdition?: string;
	readonly databaseServiceObjective?: string;
	readonly defaultFrontEndScaleFactor?: number;
	readonly dnsSuffix?: string;
	readonly dynamicCacheEnabled?: boolean;
	readonly environmentCapacities?: StampCapacity[];
	readonly environmentIsHealthy?: boolean;
	readonly environmentStatus?: string;
	readonly frontEndScaleFactor?: number;
	readonly internalLoadBalancingMode?: "None" | "Publishing";
	readonly ipsslAddressCount?: number;
	readonly lastAction?: string;
	readonly lastActionResult?: string;
	readonly location: string;
	readonly maximumNumberOfMachines?: number;
	readonly multiRoleCount?: number;
	readonly multiSize?: string;
	readonly name: string;
	readonly networkAccessControlList?: NetworkAccessControlEntry[];
	readonly provisioningState?: "Canceled" | "Deleting" | "Failed" | "InProgress";
	readonly resourceGroup?: string;
	readonly status?: "Deleting" | "Preparing" | "Ready";
	readonly subscriptionId?: string;
	readonly suspended?: boolean;
	readonly upgradeDomains?: number;
	readonly userWhitelistedIpRanges?: string[];
	readonly vipMappings?: VirtualIPMapping[];
	readonly virtualNetwork: VirtualNetworkProfile;
	readonly vnetName?: string;
	readonly vnetResourceGroupName?: string;
	readonly vnetSubnetName?: string;
	readonly workerPools: WorkerPool[];
}
export interface AppServicePlanProperties {
	readonly adminSiteName?: string;
	readonly geoRegion?: string;
	readonly hostingEnvironmentProfile?: HostingEnvironmentProfile;
	readonly isSpot?: boolean;
	readonly maximumNumberOfWorkers?: number;
	readonly name: string;
	readonly numberOfSites?: number;
	readonly perSiteScaling?: boolean;
	readonly provisioningState?: "Canceled" | "Deleting" | "Failed" | "InProgress";
	readonly reserved?: boolean;
	readonly resourceGroup?: string;
	readonly spotExpirationTime?: string;
	readonly status?: "Creating" | "Pending";
	readonly subscription?: string;
	readonly targetWorkerCount?: number;
	readonly targetWorkerSizeId?: number;
	readonly workerTierName?: string;
}
export interface Capability {
	readonly name?: string;
	readonly reason?: string;
	readonly value?: string;
}
export interface HostingEnvironmentProfile {
	readonly id?: string;
	readonly name?: string;
	readonly type?: string;
}
export interface HybridConnectionKey {
	readonly id?: string;
	readonly kind?: string;
	readonly name?: string;
	readonly properties?: HybridConnectionKeyProperties;
	readonly type?: string;
}
export interface HybridConnectionKeyProperties {
	readonly sendKeyName?: string;
	readonly sendKeyValue?: string;
}
export interface HybridConnectionLimitsProperties {
	readonly current?: number;
	readonly maximum?: number;
}
export interface HybridConnectionProperties {
	readonly hostname?: string;
	readonly port?: number;
	readonly relayArmUri?: string;
	readonly relayName?: string;
	readonly sendKeyName?: string;
	readonly sendKeyValue?: string;
	readonly serviceBusNamespace?: string;
	readonly serviceBusSuffix?: string;
}
export interface NameValuePair {
	readonly name?: string;
	readonly value?: string;
}
export interface NetworkAccessControlEntry {
	readonly action?: "Deny";
	readonly description?: string;
	readonly order?: number;
	readonly remoteSubnet?: string;
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface SkuCapacity {
	readonly default?: number;
	readonly maximum?: number;
	readonly minimum?: number;
	readonly scaleType?: string;
}
export interface SkuDescription {
	readonly capabilities?: Capability[];
	readonly capacity?: number;
	readonly family?: string;
	readonly locations?: string[];
	readonly name?: string;
	readonly size?: string;
	readonly skuCapacity?: SkuCapacity;
	readonly tier?: string;
}
export interface StampCapacity {
	readonly availableCapacity?: number;
	readonly computeMode?: "Dedicated" | "Dynamic";
	readonly excludeFromCapacityAllocation?: boolean;
	readonly isApplicableForAllComputeModes?: boolean;
	readonly name?: string;
	readonly siteMode?: string;
	readonly totalCapacity?: number;
	readonly unit?: string;
	readonly workerSize?: "D1" | "D2" | "D3" | "Default" | "Large" | "Medium";
	readonly workerSizeId?: number;
}
export interface VirtualIPMapping {
	readonly internalHttpPort?: number;
	readonly internalHttpsPort?: number;
	readonly inUse?: boolean;
	readonly virtualIP?: string;
}
export interface VirtualNetworkProfile {
	readonly id?: string;
	readonly name?: string;
	readonly subnet?: string;
	readonly type?: string;
}
export interface VnetGatewayProperties {
	readonly vnetName?: string;
	readonly vpnPackageUri: string;
}
export interface VnetInfoProperties {
	readonly certBlob?: any;
	readonly certThumbprint?: string;
	readonly dnsServers?: string;
	readonly resyncRequired?: boolean;
	readonly routes?: VnetRoute[];
	readonly vnetResourceId?: string;
}
export interface VnetRoute {
	readonly id?: string;
	readonly kind?: string;
	readonly name?: string;
	readonly properties?: VnetRouteProperties;
	readonly type?: string;
}
export interface VnetRouteProperties {
	readonly endAddress?: string;
	readonly name?: string;
	readonly routeType?: "DEFAULT" | "INHERITED" | "STATIC";
}
export interface WorkerPool {
	readonly computeMode?: "Dedicated" | "Dynamic";
	readonly instanceNames?: string[];
	readonly workerCount?: number;
	readonly workerSize?: string;
	readonly workerSizeId?: number;
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

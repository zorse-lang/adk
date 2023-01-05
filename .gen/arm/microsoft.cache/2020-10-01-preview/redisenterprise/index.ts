import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class redisEnterprise
	extends ArmResource<redisEnterpriseComponentInputs>
	implements redisEnterpriseComponentOutputs
{
	constructor(entity: ADKEntity, options: redisEnterpriseComponentInputs) {
		super(entity, options.name, "Microsoft.Cache/redisEnterprise", "2020-10-01-preview", options);
	}
	public readonly apiVersion: "2020-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Cache/redisEnterprise";
}
export interface redisEnterpriseComponentOutputs {
	readonly apiVersion: "2020-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Cache/redisEnterprise";
}
export interface redisEnterpriseComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: ClusterProperties;
	readonly sku: Sku;
	readonly tags?: TrackedResourceTags;
	readonly zones?: string[];
}
export class redisEnterprise_databases
	extends ArmResource<redisEnterprise_databasesComponentInputs>
	implements redisEnterprise_databasesComponentOutputs
{
	constructor(entity: ADKEntity, options: redisEnterprise_databasesComponentInputs) {
		super(entity, options.name, "Microsoft.Cache/redisEnterprise/databases", "2020-10-01-preview", options);
	}
	public readonly apiVersion: "2020-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Cache/redisEnterprise/databases";
}
export interface redisEnterprise_databasesComponentOutputs {
	readonly apiVersion: "2020-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Cache/redisEnterprise/databases";
}
export interface redisEnterprise_databasesComponentInputs {
	readonly name: string;
	readonly properties?: DatabaseProperties;
}
export class redisEnterprise_privateEndpointConnections
	extends ArmResource<redisEnterprise_privateEndpointConnectionsComponentInputs>
	implements redisEnterprise_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: redisEnterprise_privateEndpointConnectionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Cache/redisEnterprise/privateEndpointConnections",
			"2020-10-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2020-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Cache/redisEnterprise/privateEndpointConnections";
}
export interface redisEnterprise_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2020-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Cache/redisEnterprise/privateEndpointConnections";
}
export interface redisEnterprise_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties;
}
export function listKeys(resource: redisEnterprise_databases): AccessKeys {
	if (resource.apiVersion !== "2020-10-01-preview") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Cache/redisEnterprise/databases") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AccessKeys {
	readonly primaryKey?: string;
	readonly secondaryKey?: string;
}
export interface ClusterProperties {
	readonly hostName?: string;
	readonly minimumTlsVersion?: string;
	readonly privateEndpointConnections?: PrivateEndpointConnection[];
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly redisVersion?: string;
	readonly resourceState?:
		| "CreateFailed"
		| "Creating"
		| "DeleteFailed"
		| "Deleting"
		| "DisableFailed"
		| "Disabled"
		| "Disabling"
		| "EnableFailed"
		| "Enabling"
		| "Running"
		| "UpdateFailed"
		| "Updating";
}
export interface DatabaseProperties {
	readonly clientProtocol?: "Encrypted" | "Plaintext";
	readonly clusteringPolicy?: "EnterpriseCluster" | "OSSCluster";
	readonly evictionPolicy?:
		| "AllKeysLFU"
		| "AllKeysLRU"
		| "AllKeysRandom"
		| "NoEviction"
		| "VolatileLFU"
		| "VolatileLRU"
		| "VolatileRandom"
		| "VolatileTTL";
	readonly modules?: Module[];
	readonly port?: number;
	readonly provisioningState?: "Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating";
	readonly resourceState?:
		| "CreateFailed"
		| "Creating"
		| "DeleteFailed"
		| "Deleting"
		| "DisableFailed"
		| "Disabled"
		| "Disabling"
		| "EnableFailed"
		| "Enabling"
		| "Running"
		| "UpdateFailed"
		| "Updating";
}
export interface Module {
	readonly args?: string;
	readonly name: string;
	readonly version?: string;
}
export interface PrivateEndpoint {
	readonly id?: string;
}
export interface PrivateEndpointConnection {
	readonly id?: string;
	readonly name?: string;
	readonly properties?: PrivateEndpointConnectionProperties;
	readonly type?: string;
}
export interface PrivateEndpointConnectionProperties {
	readonly privateEndpoint?: PrivateEndpoint;
	readonly privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
	readonly provisioningState?: "Creating" | "Deleting" | "Failed" | "Succeeded";
}
export interface PrivateLinkServiceConnectionState {
	readonly actionsRequired?: string;
	readonly description?: string;
	readonly status?: "Approved" | "Pending" | "Rejected";
}
export interface Sku {
	readonly capacity?: number;
	readonly name:
		| "EnterpriseFlash_F1500"
		| "EnterpriseFlash_F300"
		| "EnterpriseFlash_F700"
		| "Enterprise_E10"
		| "Enterprise_E100"
		| "Enterprise_E20"
		| "Enterprise_E50";
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export default {
	redisEnterprise: redisEnterprise,
	"redisEnterprise/databases": redisEnterprise_databases,
	"redisEnterprise/privateEndpointConnections": redisEnterprise_privateEndpointConnections,
};

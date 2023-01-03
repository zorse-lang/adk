import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class redisEnterprise
	extends ArmResource<redisEnterpriseComponentInputs>
	implements redisEnterpriseComponentOutputs
{
	constructor(entity: ADKEntity, options: redisEnterpriseComponentInputs) {
		super(entity, options.name, "Microsoft.Cache/redisEnterprise", "2021-03-01", options);
	}
	public readonly apiVersion: "2021-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.Cache/redisEnterprise";
}
export interface redisEnterpriseComponentOutputs {
	readonly apiVersion: "2021-03-01";
	readonly id: string;
	readonly type: "Microsoft.Cache/redisEnterprise";
}
export interface redisEnterpriseComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: ClusterProperties | undefined;
	readonly sku: Sku;
	readonly tags?: TrackedResourceTags | undefined;
	readonly zones?: string[] | undefined;
}
export class redisEnterprise_databases
	extends ArmResource<redisEnterprise_databasesComponentInputs>
	implements redisEnterprise_databasesComponentOutputs
{
	constructor(entity: ADKEntity, options: redisEnterprise_databasesComponentInputs) {
		super(entity, options.name, "Microsoft.Cache/redisEnterprise/databases", "2021-03-01", options);
	}
	public readonly apiVersion: "2021-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.Cache/redisEnterprise/databases";
}
export interface redisEnterprise_databasesComponentOutputs {
	readonly apiVersion: "2021-03-01";
	readonly id: string;
	readonly type: "Microsoft.Cache/redisEnterprise/databases";
}
export interface redisEnterprise_databasesComponentInputs {
	readonly name: string;
	readonly properties?: DatabaseProperties | undefined;
}
export class redisEnterprise_privateEndpointConnections
	extends ArmResource<redisEnterprise_privateEndpointConnectionsComponentInputs>
	implements redisEnterprise_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: redisEnterprise_privateEndpointConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Cache/redisEnterprise/privateEndpointConnections", "2021-03-01", options);
	}
	public readonly apiVersion: "2021-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.Cache/redisEnterprise/privateEndpointConnections";
}
export interface redisEnterprise_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2021-03-01";
	readonly id: string;
	readonly type: "Microsoft.Cache/redisEnterprise/privateEndpointConnections";
}
export interface redisEnterprise_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
}
export function listKeys(resource: redisEnterprise_databases): AccessKeys {
	if (resource.apiVersion !== "2021-03-01") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Cache/redisEnterprise/databases") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AccessKeys {
	readonly primaryKey?: string | undefined;
	readonly secondaryKey?: string | undefined;
}
export interface ClusterProperties {
	readonly hostName?: string | undefined;
	readonly minimumTlsVersion?: ("1.0" | "1.1" | "1.2") | undefined;
	readonly privateEndpointConnections?: PrivateEndpointConnection[] | undefined;
	readonly provisioningState?: ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly redisVersion?: string | undefined;
	readonly resourceState?:
		| (
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
				| "Updating"
		  )
		| undefined;
}
export interface DatabaseProperties {
	readonly clientProtocol?: ("Encrypted" | "Plaintext") | undefined;
	readonly clusteringPolicy?: ("EnterpriseCluster" | "OSSCluster") | undefined;
	readonly evictionPolicy?:
		| (
				| "AllKeysLFU"
				| "AllKeysLRU"
				| "AllKeysRandom"
				| "NoEviction"
				| "VolatileLFU"
				| "VolatileLRU"
				| "VolatileRandom"
				| "VolatileTTL"
		  )
		| undefined;
	readonly modules?: Module[] | undefined;
	readonly persistence?: Persistence | undefined;
	readonly port?: number | undefined;
	readonly provisioningState?: ("Canceled" | "Creating" | "Deleting" | "Failed" | "Succeeded" | "Updating") | undefined;
	readonly resourceState?:
		| (
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
				| "Updating"
		  )
		| undefined;
}
export interface Module {
	readonly args?: string | undefined;
	readonly name: string;
	readonly version?: string | undefined;
}
export interface Persistence {
	readonly aofEnabled?: boolean | undefined;
	readonly aofFrequency?: ("1s" | "always") | undefined;
	readonly rdbEnabled?: boolean | undefined;
	readonly rdbFrequency?: ("12h" | "1h" | "6h") | undefined;
}
export interface PrivateEndpoint {
	readonly id?: string | undefined;
}
export interface PrivateEndpointConnection {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
	readonly type?: string | undefined;
}
export interface PrivateEndpointConnectionProperties {
	readonly privateEndpoint?: PrivateEndpoint | undefined;
	readonly privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
	readonly provisioningState?: ("Creating" | "Deleting" | "Failed" | "Succeeded") | undefined;
}
export interface PrivateLinkServiceConnectionState {
	readonly actionsRequired?: string | undefined;
	readonly description?: string | undefined;
	readonly status?: ("Approved" | "Pending" | "Rejected") | undefined;
}
export interface Sku {
	readonly capacity?: number | undefined;
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
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	redisEnterprise: redisEnterprise,
	"redisEnterprise/databases": redisEnterprise_databases,
	"redisEnterprise/privateEndpointConnections": redisEnterprise_privateEndpointConnections,
};

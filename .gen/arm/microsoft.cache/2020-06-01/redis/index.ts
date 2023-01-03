import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class redis extends ArmResource<redisComponentInputs> implements redisComponentOutputs {
	constructor(entity: ADKEntity, options: redisComponentInputs) {
		super(entity, options.name, "Microsoft.Cache/redis", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Cache/redis";
}
export interface redisComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Cache/redis";
}
export interface redisComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: RedisCreatePropertiesOrRedisProperties;
	readonly tags?: RedisCreateParametersTags | undefined;
	readonly zones?: string[] | undefined;
}
export class redis_firewallRules
	extends ArmResource<redis_firewallRulesComponentInputs>
	implements redis_firewallRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: redis_firewallRulesComponentInputs) {
		super(entity, options.name, "Microsoft.Cache/redis/firewallRules", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Cache/redis/firewallRules";
}
export interface redis_firewallRulesComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Cache/redis/firewallRules";
}
export interface redis_firewallRulesComponentInputs {
	readonly name: string;
	readonly properties: RedisFirewallRuleProperties;
}
export class redis_linkedServers
	extends ArmResource<redis_linkedServersComponentInputs>
	implements redis_linkedServersComponentOutputs
{
	constructor(entity: ADKEntity, options: redis_linkedServersComponentInputs) {
		super(entity, options.name, "Microsoft.Cache/redis/linkedServers", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Cache/redis/linkedServers";
}
export interface redis_linkedServersComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Cache/redis/linkedServers";
}
export interface redis_linkedServersComponentInputs {
	readonly name: string;
	readonly properties: RedisLinkedServerCreatePropertiesOrRedisLinkedServerProperties;
}
export class redis_patchSchedules
	extends ArmResource<redis_patchSchedulesComponentInputs>
	implements redis_patchSchedulesComponentOutputs
{
	constructor(entity: ADKEntity, options: redis_patchSchedulesComponentInputs) {
		super(entity, options.name, "Microsoft.Cache/redis/patchSchedules", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Cache/redis/patchSchedules";
}
export interface redis_patchSchedulesComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Cache/redis/patchSchedules";
}
export interface redis_patchSchedulesComponentInputs {
	readonly name: string;
	readonly properties: ScheduleEntries;
}
export class redis_privateEndpointConnections
	extends ArmResource<redis_privateEndpointConnectionsComponentInputs>
	implements redis_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: redis_privateEndpointConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Cache/redis/privateEndpointConnections", "2020-06-01", options);
	}
	public readonly apiVersion: "2020-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Cache/redis/privateEndpointConnections";
}
export interface redis_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2020-06-01";
	readonly id: string;
	readonly type: "Microsoft.Cache/redis/privateEndpointConnections";
}
export interface redis_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties | undefined;
}
export function listKeys(resource: redis): RedisAccessKeys {
	if (resource.apiVersion !== "2020-06-01") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Cache/redis") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
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
export interface RedisAccessKeys {
	readonly primaryKey?: string | undefined;
	readonly secondaryKey?: string | undefined;
}
export interface RedisCommonPropertiesRedisConfiguration {
	readonly "aof-storage-connection-string-0"?: string | undefined;
	readonly "aof-storage-connection-string-1"?: string | undefined;
	readonly maxclients?: string | undefined;
	readonly "maxfragmentationmemory-reserved"?: string | undefined;
	readonly "maxmemory-delta"?: string | undefined;
	readonly "maxmemory-policy"?: string | undefined;
	readonly "maxmemory-reserved"?: string | undefined;
	readonly "rdb-backup-enabled"?: string | undefined;
	readonly "rdb-backup-frequency"?: string | undefined;
	readonly "rdb-backup-max-snapshot-count"?: string | undefined;
	readonly "rdb-storage-connection-string"?: string | undefined;
	readonly "[ key: string ]"?: string | undefined;
}
export interface RedisCommonPropertiesTenantSettings {
	readonly "[ key: string ]"?: string | undefined;
}
export interface RedisCreateParametersTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface RedisCreatePropertiesOrRedisProperties {
	readonly accessKeys?: RedisAccessKeys | undefined;
	readonly enableNonSslPort?: boolean | undefined;
	readonly hostName?: string | undefined;
	readonly instances?: RedisInstanceDetails[] | undefined;
	readonly linkedServers?: RedisLinkedServer[] | undefined;
	readonly minimumTlsVersion?: ("1.0" | "1.1" | "1.2") | undefined;
	readonly port?: number | undefined;
	readonly privateEndpointConnections?: PrivateEndpointConnection[] | undefined;
	readonly provisioningState?:
		| (
				| "Creating"
				| "Deleting"
				| "Disabled"
				| "Failed"
				| "Linking"
				| "Provisioning"
				| "RecoveringScaleFailure"
				| "Scaling"
				| "Succeeded"
				| "Unlinking"
				| "Unprovisioning"
				| "Updating"
		  )
		| undefined;
	readonly publicNetworkAccess?: ("Disabled" | "Enabled") | undefined;
	readonly redisConfiguration?: RedisCommonPropertiesRedisConfiguration | undefined;
	readonly redisVersion?: string | undefined;
	readonly replicasPerMaster?: number | undefined;
	readonly shardCount?: number | undefined;
	readonly sku: Sku;
	readonly sslPort?: number | undefined;
	readonly staticIP?: string | undefined;
	readonly subnetId?: string | undefined;
	readonly tenantSettings?: RedisCommonPropertiesTenantSettings | undefined;
}
export interface RedisFirewallRuleProperties {
	readonly endIP: string;
	readonly startIP: string;
}
export interface RedisInstanceDetails {
	readonly isMaster?: boolean | undefined;
	readonly nonSslPort?: number | undefined;
	readonly shardId?: number | undefined;
	readonly sslPort?: number | undefined;
	readonly zone?: string | undefined;
}
export interface RedisLinkedServer {
	readonly id?: string | undefined;
}
export interface RedisLinkedServerCreatePropertiesOrRedisLinkedServerProperties {
	readonly linkedRedisCacheId: string;
	readonly linkedRedisCacheLocation: string;
	readonly provisioningState?: string | undefined;
	readonly serverRole: "Primary";
}
export interface ScheduleEntries {
	readonly scheduleEntries: ScheduleEntry[];
}
export interface ScheduleEntry {
	readonly dayOfWeek: "Everyday" | "Friday" | "Monday" | "Saturday" | "Sunday" | "Thursday" | "Tuesday" | "Wednesday";
	readonly maintenanceWindow?: string | undefined;
	readonly startHourUtc: number;
}
export interface Sku {
	readonly capacity: number;
	readonly family: "C" | "P";
	readonly name: "Basic" | "Premium" | "Standard";
}
export default {
	redis: redis,
	"redis/firewallRules": redis_firewallRules,
	"redis/linkedServers": redis_linkedServers,
	"redis/patchSchedules": redis_patchSchedules,
	"redis/privateEndpointConnections": redis_privateEndpointConnections,
};

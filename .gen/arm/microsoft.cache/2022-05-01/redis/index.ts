import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class redis extends ArmResource<redisComponentInputs> implements redisComponentOutputs {
	constructor(entity: ADKEntity, options: redisComponentInputs) {
		super(entity, options.name, "Microsoft.Cache/redis", "2022-05-01", options);
	}
	public readonly apiVersion: "2022-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Cache/redis";
}
export interface redisComponentOutputs {
	readonly apiVersion: "2022-05-01";
	readonly id: string;
	readonly type: "Microsoft.Cache/redis";
}
export interface redisComponentInputs {
	readonly identity?: ManagedServiceIdentity;
	readonly location: string;
	readonly name: string;
	readonly properties: RedisCreatePropertiesOrRedisProperties;
	readonly tags?: RedisCreateParametersTags;
	readonly zones?: string[];
}
export class redis_firewallRules
	extends ArmResource<redis_firewallRulesComponentInputs>
	implements redis_firewallRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: redis_firewallRulesComponentInputs) {
		super(entity, options.name, "Microsoft.Cache/redis/firewallRules", "2022-05-01", options);
	}
	public readonly apiVersion: "2022-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Cache/redis/firewallRules";
}
export interface redis_firewallRulesComponentOutputs {
	readonly apiVersion: "2022-05-01";
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
		super(entity, options.name, "Microsoft.Cache/redis/linkedServers", "2022-05-01", options);
	}
	public readonly apiVersion: "2022-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Cache/redis/linkedServers";
}
export interface redis_linkedServersComponentOutputs {
	readonly apiVersion: "2022-05-01";
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
		super(entity, options.name, "Microsoft.Cache/redis/patchSchedules", "2022-05-01", options);
	}
	public readonly apiVersion: "2022-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Cache/redis/patchSchedules";
}
export interface redis_patchSchedulesComponentOutputs {
	readonly apiVersion: "2022-05-01";
	readonly id: string;
	readonly type: "Microsoft.Cache/redis/patchSchedules";
}
export interface redis_patchSchedulesComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties: ScheduleEntries;
}
export class redis_privateEndpointConnections
	extends ArmResource<redis_privateEndpointConnectionsComponentInputs>
	implements redis_privateEndpointConnectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: redis_privateEndpointConnectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Cache/redis/privateEndpointConnections", "2022-05-01", options);
	}
	public readonly apiVersion: "2022-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Cache/redis/privateEndpointConnections";
}
export interface redis_privateEndpointConnectionsComponentOutputs {
	readonly apiVersion: "2022-05-01";
	readonly id: string;
	readonly type: "Microsoft.Cache/redis/privateEndpointConnections";
}
export interface redis_privateEndpointConnectionsComponentInputs {
	readonly name: string;
	readonly properties?: PrivateEndpointConnectionProperties;
}
export function listKeys(resource: redis): RedisAccessKeys {
	if (resource.apiVersion !== "2022-05-01") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Cache/redis") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface ManagedServiceIdentity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type: "None" | "SystemAssigned" | "SystemAssigned, UserAssigned" | "UserAssigned";
	readonly userAssignedIdentities?: UserAssignedIdentities;
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
export interface RedisAccessKeys {
	readonly primaryKey?: string;
	readonly secondaryKey?: string;
}
export interface RedisCommonPropertiesRedisConfiguration {
	readonly "aof-backup-enabled"?: string;
	readonly "aof-storage-connection-string-0"?: string;
	readonly "aof-storage-connection-string-1"?: string;
	readonly authnotrequired?: string;
	readonly maxclients?: string;
	readonly "maxfragmentationmemory-reserved"?: string;
	readonly "maxmemory-delta"?: string;
	readonly "maxmemory-policy"?: string;
	readonly "maxmemory-reserved"?: string;
	readonly "preferred-data-archive-auth-method"?: string;
	readonly "preferred-data-persistence-auth-method"?: string;
	readonly "rdb-backup-enabled"?: string;
	readonly "rdb-backup-frequency"?: string;
	readonly "rdb-backup-max-snapshot-count"?: string;
	readonly "rdb-storage-connection-string"?: string;
	readonly "zonal-configuration"?: string;
	readonly [key: string]: any;
}
export interface RedisCommonPropertiesTenantSettings {
	readonly [key: string]: string;
}
export interface RedisCreateParametersTags {
	readonly [key: string]: string;
}
export interface RedisCreatePropertiesOrRedisProperties {
	readonly accessKeys?: RedisAccessKeys;
	readonly enableNonSslPort?: boolean;
	readonly hostName?: string;
	readonly instances?: RedisInstanceDetails[];
	readonly linkedServers?: RedisLinkedServer[];
	readonly minimumTlsVersion?: "1.0" | "1.1" | "1.2";
	readonly port?: number;
	readonly privateEndpointConnections?: PrivateEndpointConnection[];
	readonly provisioningState?:
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
		| "Updating";
	readonly publicNetworkAccess?: "Disabled" | "Enabled";
	readonly redisConfiguration?: RedisCommonPropertiesRedisConfiguration;
	readonly redisVersion?: string;
	readonly replicasPerMaster?: number;
	readonly replicasPerPrimary?: number;
	readonly shardCount?: number;
	readonly sku: Sku;
	readonly sslPort?: number;
	readonly staticIP?: string;
	readonly subnetId?: string;
	readonly tenantSettings?: RedisCommonPropertiesTenantSettings;
}
export interface RedisFirewallRuleProperties {
	readonly endIP: string;
	readonly startIP: string;
}
export interface RedisInstanceDetails {
	readonly isMaster?: boolean;
	readonly isPrimary?: boolean;
	readonly nonSslPort?: number;
	readonly shardId?: number;
	readonly sslPort?: number;
	readonly zone?: string;
}
export interface RedisLinkedServer {
	readonly id?: string;
}
export interface RedisLinkedServerCreatePropertiesOrRedisLinkedServerProperties {
	readonly linkedRedisCacheId: string;
	readonly linkedRedisCacheLocation: string;
	readonly provisioningState?: string;
	readonly serverRole: "Primary";
}
export interface ScheduleEntries {
	readonly scheduleEntries: ScheduleEntry[];
}
export interface ScheduleEntry {
	readonly dayOfWeek: "Everyday" | "Friday" | "Monday" | "Saturday" | "Sunday" | "Thursday" | "Tuesday" | "Wednesday";
	readonly maintenanceWindow?: string;
	readonly startHourUtc: number;
}
export interface Sku {
	readonly capacity: number;
	readonly family: "C" | "P";
	readonly name: "Basic" | "Premium" | "Standard";
}
export interface UserAssignedIdentities {
	readonly [key: string]: UserAssignedIdentity;
}
export interface UserAssignedIdentity {
	readonly clientId?: string;
	readonly principalId?: string;
}
export default {
	redis: redis,
	"redis/firewallRules": redis_firewallRules,
	"redis/linkedServers": redis_linkedServers,
	"redis/patchSchedules": redis_patchSchedules,
	"redis/privateEndpointConnections": redis_privateEndpointConnections,
};

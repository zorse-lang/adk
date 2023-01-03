import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class Redis extends ArmResource<RedisComponentInputs> implements RedisComponentOutputs {
	constructor(entity: ADKEntity, options: RedisComponentInputs) {
		super(entity, options.name, "Microsoft.Cache/Redis", "2017-10-01", options);
	}
	public readonly apiVersion: "2017-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.Cache/Redis";
}
export interface RedisComponentOutputs {
	readonly apiVersion: "2017-10-01";
	readonly id: string;
	readonly type: "Microsoft.Cache/Redis";
}
export interface RedisComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: RedisCreatePropertiesOrRedisProperties;
	readonly tags?: RedisCreateParametersTags | undefined;
	readonly zones?: string[] | undefined;
}
export class Redis_firewallRules
	extends ArmResource<Redis_firewallRulesComponentInputs>
	implements Redis_firewallRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: Redis_firewallRulesComponentInputs) {
		super(entity, options.name, "Microsoft.Cache/Redis/firewallRules", "2017-10-01", options);
	}
	public readonly apiVersion: "2017-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.Cache/Redis/firewallRules";
}
export interface Redis_firewallRulesComponentOutputs {
	readonly apiVersion: "2017-10-01";
	readonly id: string;
	readonly type: "Microsoft.Cache/Redis/firewallRules";
}
export interface Redis_firewallRulesComponentInputs {
	readonly name: string;
	readonly properties: RedisFirewallRuleProperties;
}
export class Redis_linkedServers
	extends ArmResource<Redis_linkedServersComponentInputs>
	implements Redis_linkedServersComponentOutputs
{
	constructor(entity: ADKEntity, options: Redis_linkedServersComponentInputs) {
		super(entity, options.name, "Microsoft.Cache/Redis/linkedServers", "2017-10-01", options);
	}
	public readonly apiVersion: "2017-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.Cache/Redis/linkedServers";
}
export interface Redis_linkedServersComponentOutputs {
	readonly apiVersion: "2017-10-01";
	readonly id: string;
	readonly type: "Microsoft.Cache/Redis/linkedServers";
}
export interface Redis_linkedServersComponentInputs {
	readonly name: string;
	readonly properties: RedisLinkedServerCreatePropertiesOrRedisLinkedServerProperties;
}
export class Redis_patchSchedules
	extends ArmResource<Redis_patchSchedulesComponentInputs>
	implements Redis_patchSchedulesComponentOutputs
{
	constructor(entity: ADKEntity, options: Redis_patchSchedulesComponentInputs) {
		super(entity, options.name, "Microsoft.Cache/Redis/patchSchedules", "2017-10-01", options);
	}
	public readonly apiVersion: "2017-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.Cache/Redis/patchSchedules";
}
export interface Redis_patchSchedulesComponentOutputs {
	readonly apiVersion: "2017-10-01";
	readonly id: string;
	readonly type: "Microsoft.Cache/Redis/patchSchedules";
}
export interface Redis_patchSchedulesComponentInputs {
	readonly name: string;
	readonly properties: ScheduleEntries;
}
export function listKeys(resource: Redis): RedisAccessKeys {
	if (resource.apiVersion !== "2017-10-01") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Cache/Redis") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface RedisAccessKeys {
	readonly primaryKey?: string | undefined;
	readonly secondaryKey?: string | undefined;
}
export interface RedisCommonPropertiesRedisConfiguration {
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
	readonly linkedServers?: RedisLinkedServer[] | undefined;
	readonly port?: number | undefined;
	readonly provisioningState?: string | undefined;
	readonly redisConfiguration?: RedisCommonPropertiesRedisConfiguration | undefined;
	readonly redisVersion?: string | undefined;
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
	Redis: Redis,
	"Redis/firewallRules": Redis_firewallRules,
	"Redis/linkedServers": Redis_linkedServers,
	"Redis/patchSchedules": Redis_patchSchedules,
};

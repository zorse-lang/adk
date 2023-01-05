import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class Redis extends ArmResource<RedisComponentInputs> implements RedisComponentOutputs {
	constructor(entity: ADKEntity, options: RedisComponentInputs) {
		super(entity, options.name, "Microsoft.Cache/Redis", "2016-04-01", options);
	}
	public readonly apiVersion: "2016-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Cache/Redis";
}
export interface RedisComponentOutputs {
	readonly apiVersion: "2016-04-01";
	readonly id: string;
	readonly type: "Microsoft.Cache/Redis";
}
export interface RedisComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: RedisCreatePropertiesOrRedisResourceProperties;
	readonly tags?: ResourceTags;
}
export class Redis_firewallRules
	extends ArmResource<Redis_firewallRulesComponentInputs>
	implements Redis_firewallRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: Redis_firewallRulesComponentInputs) {
		super(entity, options.name, "Microsoft.Cache/Redis/firewallRules", "2016-04-01", options);
	}
	public readonly apiVersion: "2016-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Cache/Redis/firewallRules";
}
export interface Redis_firewallRulesComponentOutputs {
	readonly apiVersion: "2016-04-01";
	readonly id: string;
	readonly type: "Microsoft.Cache/Redis/firewallRules";
}
export interface Redis_firewallRulesComponentInputs {
	readonly name: string;
	readonly properties: RedisFirewallRuleProperties;
}
export class Redis_patchSchedules
	extends ArmResource<Redis_patchSchedulesComponentInputs>
	implements Redis_patchSchedulesComponentOutputs
{
	constructor(entity: ADKEntity, options: Redis_patchSchedulesComponentInputs) {
		super(entity, options.name, "Microsoft.Cache/Redis/patchSchedules", "2016-04-01", options);
	}
	public readonly apiVersion: "2016-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Cache/Redis/patchSchedules";
}
export interface Redis_patchSchedulesComponentOutputs {
	readonly apiVersion: "2016-04-01";
	readonly id: string;
	readonly type: "Microsoft.Cache/Redis/patchSchedules";
}
export interface Redis_patchSchedulesComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties: ScheduleEntries;
}
export function listKeys(resource: Redis): RedisAccessKeys {
	if (resource.apiVersion !== "2016-04-01") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Cache/Redis") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface RedisAccessKeys {
	readonly primaryKey?: string;
	readonly secondaryKey?: string;
}
export interface RedisCreatePropertiesOrRedisResourceProperties {
	readonly accessKeys?: RedisAccessKeys;
	readonly enableNonSslPort?: boolean;
	readonly hostName?: string;
	readonly port?: number;
	readonly provisioningState?: string;
	readonly redisConfiguration?: RedisPropertiesRedisConfiguration;
	readonly redisVersion?: string;
	readonly shardCount?: number;
	readonly sku: Sku;
	readonly sslPort?: number;
	readonly staticIP?: string;
	readonly subnetId?: string;
	readonly tenantSettings?: RedisPropertiesTenantSettings;
}
export interface RedisFirewallRuleProperties {
	readonly endIP: string;
	readonly startIP: string;
}
export interface RedisPropertiesRedisConfiguration {
	readonly [key: string]: string;
}
export interface RedisPropertiesTenantSettings {
	readonly [key: string]: string;
}
export interface ResourceTags {
	readonly [key: string]: string;
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
export default {
	Redis: Redis,
	"Redis/firewallRules": Redis_firewallRules,
	"Redis/patchSchedules": Redis_patchSchedules,
};

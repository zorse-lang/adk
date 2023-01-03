import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class Redis extends ArmResource<RedisComponentInputs> implements RedisComponentOutputs {
	constructor(entity: ADKEntity, options: RedisComponentInputs) {
		super(entity, options.name, "Microsoft.Cache/Redis", "2015-08-01", options);
	}
	public readonly apiVersion: "2015-08-01";
	public readonly id: string;
	public readonly type: "Microsoft.Cache/Redis";
}
export interface RedisComponentOutputs {
	readonly apiVersion: "2015-08-01";
	readonly id: string;
	readonly type: "Microsoft.Cache/Redis";
}
export interface RedisComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: RedisPropertiesOrRedisReadableProperties;
	readonly tags?: ResourceTags | undefined;
}
export function listKeys(resource: Redis): RedisListKeysResult {
	if (resource.apiVersion !== "2015-08-01") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Cache/Redis") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface RedisListKeysResult {
	readonly primaryKey?: string | undefined;
	readonly secondaryKey?: string | undefined;
}
export interface RedisPropertiesOrRedisReadableProperties {
	readonly enableNonSslPort?: boolean | undefined;
	readonly hostName?: string | undefined;
	readonly port?: number | undefined;
	readonly provisioningState?: string | undefined;
	readonly redisConfiguration?: RedisPropertiesRedisConfiguration | undefined;
	readonly redisVersion?: string | undefined;
	readonly shardCount?: number | undefined;
	readonly sku: Sku;
	readonly sslPort?: number | undefined;
	readonly staticIP?: string | undefined;
	readonly subnet?: string | undefined;
	readonly tenantSettings?: RedisPropertiesTenantSettings | undefined;
	readonly virtualNetwork?: string | undefined;
}
export interface RedisPropertiesRedisConfiguration {
	readonly "[ key: string ]"?: string | undefined;
}
export interface RedisPropertiesTenantSettings {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface Sku {
	readonly capacity: number;
	readonly family: "C" | "P";
	readonly name: "Basic" | "Premium" | "Standard";
}
export default {
	Redis: Redis,
};

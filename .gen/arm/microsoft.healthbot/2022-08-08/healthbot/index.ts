import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class healthBots extends ArmResource<healthBotsComponentInputs> implements healthBotsComponentOutputs {
	constructor(entity: ADKEntity, options: healthBotsComponentInputs) {
		super(entity, options.name, "Microsoft.HealthBot/healthBots", "2022-08-08", options);
	}
	public readonly apiVersion: "2022-08-08";
	public readonly id: string;
	public readonly type: "Microsoft.HealthBot/healthBots";
}
export interface healthBotsComponentOutputs {
	readonly apiVersion: "2022-08-08";
	readonly id: string;
	readonly type: "Microsoft.HealthBot/healthBots";
}
export interface healthBotsComponentInputs {
	readonly identity?: Identity;
	readonly location: string;
	readonly name: string;
	readonly properties?: HealthBotProperties;
	readonly sku: Sku;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export function listSecrets(resource: healthBots): HealthBotKeysResponse {
	if (resource.apiVersion !== "2022-08-08") {
		throw new Error(`listSecrets is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.HealthBot/healthBots") {
		throw new Error(`listSecrets is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface HealthBotKey {
	readonly keyName?: string;
	readonly value?: string;
}
export interface HealthBotKeysResponse {
	readonly secrets?: HealthBotKey[];
}
export interface HealthBotProperties {
	readonly botManagementPortalLink?: string;
	readonly keyVaultProperties?: KeyVaultProperties;
	readonly provisioningState?: string;
}
export interface Identity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "None" | "SystemAssigned" | "SystemAssigned, UserAssigned";
	readonly userAssignedIdentities?: UserAssignedIdentityMap;
}
export interface KeyVaultProperties {
	readonly keyName: string;
	readonly keyVaultUri: string;
	readonly keyVersion?: string;
	readonly userIdentity?: string;
}
export interface Sku {
	readonly name: "C0" | "F0";
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export interface UserAssignedIdentity {
	readonly clientId?: string;
	readonly principalId?: string;
}
export interface UserAssignedIdentityMap {
	readonly [key: string]: UserAssignedIdentity;
}
export default {
	healthBots: healthBots,
};

import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class healthBots extends ArmResource<healthBotsComponentInputs> implements healthBotsComponentOutputs {
	constructor(entity: ADKEntity, options: healthBotsComponentInputs) {
		super(entity, options.name, "Microsoft.HealthBot/healthBots", "2021-06-10", options);
	}
	public readonly apiVersion: "2021-06-10";
	public readonly id: string;
	public readonly type: "Microsoft.HealthBot/healthBots";
}
export interface healthBotsComponentOutputs {
	readonly apiVersion: "2021-06-10";
	readonly id: string;
	readonly type: "Microsoft.HealthBot/healthBots";
}
export interface healthBotsComponentInputs {
	readonly identity?: Identity | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: HealthBotProperties | undefined;
	readonly sku: Sku;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export interface HealthBotProperties {
	readonly botManagementPortalLink?: string | undefined;
	readonly provisioningState?: string | undefined;
}
export interface Identity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: ("None" | "SystemAssigned" | "SystemAssigned, UserAssigned") | undefined;
	readonly userAssignedIdentities?: UserAssignedIdentityMap | undefined;
}
export interface Sku {
	readonly name: "C0" | "F0";
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface UserAssignedIdentity {
	readonly clientId?: string | undefined;
	readonly principalId?: string | undefined;
}
export interface UserAssignedIdentityMap {
	readonly "[ key: string ]"?: UserAssignedIdentity | undefined;
}
export default {
	healthBots: healthBots,
};
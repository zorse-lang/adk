import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class healthBots extends ArmResource<healthBotsComponentInputs> implements healthBotsComponentOutputs {
	constructor(entity: ADKEntity, options: healthBotsComponentInputs) {
		super(entity, options.name, "Microsoft.HealthBot/healthBots", "2020-10-20", options);
	}
	public readonly apiVersion: "2020-10-20";
	public readonly id: string;
	public readonly type: "Microsoft.HealthBot/healthBots";
}
export interface healthBotsComponentOutputs {
	readonly apiVersion: "2020-10-20";
	readonly id: string;
	readonly type: "Microsoft.HealthBot/healthBots";
}
export interface healthBotsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: HealthBotProperties;
	readonly sku?: Sku;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export interface HealthBotProperties {
	readonly botManagementPortalLink?: string;
	readonly provisioningState?: string;
}
export interface Sku {
	readonly capacity?: number;
	readonly family?: string;
	readonly name: "F0" | "S1";
	readonly size?: string;
	readonly tier?: "Free";
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
export default {
	healthBots: healthBots,
};

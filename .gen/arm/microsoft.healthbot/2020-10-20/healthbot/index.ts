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
	readonly properties?: HealthBotProperties | undefined;
	readonly sku?: Sku | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export interface HealthBotProperties {
	readonly botManagementPortalLink?: string | undefined;
	readonly provisioningState?: string | undefined;
}
export interface Sku {
	readonly capacity?: number | undefined;
	readonly family?: string | undefined;
	readonly name: "F0" | "S1";
	readonly size?: string | undefined;
	readonly tier?: "Free" | undefined;
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
export default {
	healthBots: healthBots,
};

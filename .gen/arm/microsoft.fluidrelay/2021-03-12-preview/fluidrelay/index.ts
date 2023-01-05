import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class fluidRelayServers
	extends ArmResource<fluidRelayServersComponentInputs>
	implements fluidRelayServersComponentOutputs
{
	constructor(entity: ADKEntity, options: fluidRelayServersComponentInputs) {
		super(entity, options.name, "Microsoft.FluidRelay/fluidRelayServers", "2021-03-12-preview", options);
	}
	public readonly apiVersion: "2021-03-12-preview";
	public readonly id: string;
	public readonly type: "Microsoft.FluidRelay/fluidRelayServers";
}
export interface fluidRelayServersComponentOutputs {
	readonly apiVersion: "2021-03-12-preview";
	readonly id: string;
	readonly type: "Microsoft.FluidRelay/fluidRelayServers";
}
export interface fluidRelayServersComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: FluidRelayServerProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export interface FluidRelayEndpoints {
	readonly ordererEndpoints?: string[];
	readonly storageEndpoints?: string[];
}
export interface FluidRelayServerProperties {
	readonly fluidRelayEndpoints?: FluidRelayEndpoints;
	readonly frsTenantId?: string;
	readonly provisioningState?: "Canceled" | "Failed" | "Succeeded";
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
	fluidRelayServers: fluidRelayServers,
};

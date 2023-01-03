import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class fluidRelayServers
	extends ArmResource<fluidRelayServersComponentInputs>
	implements fluidRelayServersComponentOutputs
{
	constructor(entity: ADKEntity, options: fluidRelayServersComponentInputs) {
		super(entity, options.name, "Microsoft.FluidRelay/fluidRelayServers", "2021-06-15-preview", options);
	}
	public readonly apiVersion: "2021-06-15-preview";
	public readonly id: string;
	public readonly type: "Microsoft.FluidRelay/fluidRelayServers";
}
export interface fluidRelayServersComponentOutputs {
	readonly apiVersion: "2021-06-15-preview";
	readonly id: string;
	readonly type: "Microsoft.FluidRelay/fluidRelayServers";
}
export interface fluidRelayServersComponentInputs {
	readonly identity?: Identity | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: FluidRelayServerProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export interface FluidRelayEndpoints {
	readonly ordererEndpoints?: string[] | undefined;
	readonly storageEndpoints?: string[] | undefined;
}
export interface FluidRelayServerProperties {
	readonly fluidRelayEndpoints?: FluidRelayEndpoints | undefined;
	readonly frsTenantId?: string | undefined;
	readonly provisioningState?: ("Canceled" | "Failed" | "Succeeded") | undefined;
}
export interface Identity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: ("None" | "SystemAssigned") | undefined;
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
	fluidRelayServers: fluidRelayServers,
};

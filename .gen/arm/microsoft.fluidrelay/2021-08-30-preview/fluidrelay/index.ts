import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class fluidRelayServers
	extends ArmResource<fluidRelayServersComponentInputs>
	implements fluidRelayServersComponentOutputs
{
	constructor(entity: ADKEntity, options: fluidRelayServersComponentInputs) {
		super(entity, options.name, "Microsoft.FluidRelay/fluidRelayServers", "2021-08-30-preview", options);
	}
	public readonly apiVersion: "2021-08-30-preview";
	public readonly id: string;
	public readonly type: "Microsoft.FluidRelay/fluidRelayServers";
}
export interface fluidRelayServersComponentOutputs {
	readonly apiVersion: "2021-08-30-preview";
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
export class fluidRelayServers_fluidRelayContainers
	extends ArmResource<fluidRelayServers_fluidRelayContainersComponentInputs>
	implements fluidRelayServers_fluidRelayContainersComponentOutputs
{
	constructor(entity: ADKEntity, options: fluidRelayServers_fluidRelayContainersComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.FluidRelay/fluidRelayServers/fluidRelayContainers",
			"2021-08-30-preview",
			options,
		);
	}
	public readonly apiVersion: "2021-08-30-preview";
	public readonly id: string;
	public readonly type: "Microsoft.FluidRelay/fluidRelayServers/fluidRelayContainers";
}
export interface fluidRelayServers_fluidRelayContainersComponentOutputs {
	readonly apiVersion: "2021-08-30-preview";
	readonly id: string;
	readonly type: "Microsoft.FluidRelay/fluidRelayServers/fluidRelayContainers";
}
export interface fluidRelayServers_fluidRelayContainersComponentInputs {
	readonly name: string;
	readonly properties?: FluidRelayContainerProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export interface FluidRelayContainerProperties {
	readonly frsContainerId?: string | undefined;
	readonly frsTenantId?: string | undefined;
	readonly provisioningState?: ("Canceled" | "Failed" | "Succeeded") | undefined;
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
	"fluidRelayServers/fluidRelayContainers": fluidRelayServers_fluidRelayContainers,
};

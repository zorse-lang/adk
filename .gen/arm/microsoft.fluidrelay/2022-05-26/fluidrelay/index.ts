import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class fluidRelayServers
	extends ArmResource<fluidRelayServersComponentInputs>
	implements fluidRelayServersComponentOutputs
{
	constructor(entity: ADKEntity, options: fluidRelayServersComponentInputs) {
		super(entity, options.name, "Microsoft.FluidRelay/fluidRelayServers", "2022-05-26", options);
	}
	public readonly apiVersion: "2022-05-26";
	public readonly id: string;
	public readonly type: "Microsoft.FluidRelay/fluidRelayServers";
}
export interface fluidRelayServersComponentOutputs {
	readonly apiVersion: "2022-05-26";
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
		super(entity, options.name, "Microsoft.FluidRelay/fluidRelayServers/fluidRelayContainers", "2022-05-26", options);
	}
	public readonly apiVersion: "2022-05-26";
	public readonly id: string;
	public readonly type: "Microsoft.FluidRelay/fluidRelayServers/fluidRelayContainers";
}
export interface fluidRelayServers_fluidRelayContainersComponentOutputs {
	readonly apiVersion: "2022-05-26";
	readonly id: string;
	readonly type: "Microsoft.FluidRelay/fluidRelayServers/fluidRelayContainers";
}
export interface fluidRelayServers_fluidRelayContainersComponentInputs {
	readonly name: string;
	readonly properties?: FluidRelayContainerProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export function listKeys(resource: fluidRelayServers): FluidRelayServerKeys {
	if (resource.apiVersion !== "2022-05-26") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.FluidRelay/fluidRelayServers") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface CustomerManagedKeyEncryptionProperties {
	readonly keyEncryptionKeyIdentity?: CustomerManagedKeyEncryptionPropertiesKeyEncryptionKeyIdentity | undefined;
	readonly keyEncryptionKeyUrl?: string | undefined;
}
export interface CustomerManagedKeyEncryptionPropertiesKeyEncryptionKeyIdentity {
	readonly identityType?: "SystemAssigned" | undefined;
	readonly userAssignedIdentityResourceId?: string | undefined;
}
export interface EncryptionProperties {
	readonly customerManagedKeyEncryption?: CustomerManagedKeyEncryptionProperties | undefined;
}
export interface FluidRelayContainerProperties {
	readonly creationTime?: string | undefined;
	readonly frsContainerId?: string | undefined;
	readonly frsTenantId?: string | undefined;
	readonly lastAccessTime?: string | undefined;
	readonly provisioningState?: ("Canceled" | "Failed" | "Succeeded") | undefined;
}
export interface FluidRelayEndpoints {
	readonly ordererEndpoints?: string[] | undefined;
	readonly serviceEndpoints?: string[] | undefined;
	readonly storageEndpoints?: string[] | undefined;
}
export interface FluidRelayServerKeys {
	readonly key1?: string | undefined;
	readonly key2?: string | undefined;
}
export interface FluidRelayServerProperties {
	readonly encryption?: EncryptionProperties | undefined;
	readonly fluidRelayEndpoints?: FluidRelayEndpoints | undefined;
	readonly frsTenantId?: string | undefined;
	readonly provisioningState?: ("Canceled" | "Failed" | "Succeeded") | undefined;
	readonly storagesku?: ("basic" | "standard") | undefined;
}
export interface Identity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: ("None" | "SystemAssigned" | "SystemAssigned, UserAssigned") | undefined;
	readonly userAssignedIdentities?: IdentityUserAssignedIdentities | undefined;
}
export interface IdentityUserAssignedIdentities {
	readonly "[ key: string ]"?: UserAssignedIdentitiesValue | undefined;
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
export interface UserAssignedIdentitiesValue {
	readonly clientId?: string | undefined;
	readonly principalId?: string | undefined;
}
export default {
	fluidRelayServers: fluidRelayServers,
	"fluidRelayServers/fluidRelayContainers": fluidRelayServers_fluidRelayContainers,
};

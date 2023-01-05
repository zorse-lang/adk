import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class fluidRelayServers
	extends ArmResource<fluidRelayServersComponentInputs>
	implements fluidRelayServersComponentOutputs
{
	constructor(entity: ADKEntity, options: fluidRelayServersComponentInputs) {
		super(entity, options.name, "Microsoft.FluidRelay/fluidRelayServers", "2022-05-11", options);
	}
	public readonly apiVersion: "2022-05-11";
	public readonly id: string;
	public readonly type: "Microsoft.FluidRelay/fluidRelayServers";
}
export interface fluidRelayServersComponentOutputs {
	readonly apiVersion: "2022-05-11";
	readonly id: string;
	readonly type: "Microsoft.FluidRelay/fluidRelayServers";
}
export interface fluidRelayServersComponentInputs {
	readonly identity?: Identity;
	readonly location: string;
	readonly name: string;
	readonly properties?: FluidRelayServerProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export class fluidRelayServers_fluidRelayContainers
	extends ArmResource<fluidRelayServers_fluidRelayContainersComponentInputs>
	implements fluidRelayServers_fluidRelayContainersComponentOutputs
{
	constructor(entity: ADKEntity, options: fluidRelayServers_fluidRelayContainersComponentInputs) {
		super(entity, options.name, "Microsoft.FluidRelay/fluidRelayServers/fluidRelayContainers", "2022-05-11", options);
	}
	public readonly apiVersion: "2022-05-11";
	public readonly id: string;
	public readonly type: "Microsoft.FluidRelay/fluidRelayServers/fluidRelayContainers";
}
export interface fluidRelayServers_fluidRelayContainersComponentOutputs {
	readonly apiVersion: "2022-05-11";
	readonly id: string;
	readonly type: "Microsoft.FluidRelay/fluidRelayServers/fluidRelayContainers";
}
export interface fluidRelayServers_fluidRelayContainersComponentInputs {
	readonly name: string;
	readonly properties?: FluidRelayContainerProperties;
	readonly systemData?: SystemData;
}
export function listKeys(resource: fluidRelayServers): FluidRelayServerKeys {
	if (resource.apiVersion !== "2022-05-11") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.FluidRelay/fluidRelayServers") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface CustomerManagedKeyEncryptionProperties {
	readonly keyEncryptionKeyIdentity?: CustomerManagedKeyEncryptionPropertiesKeyEncryptionKeyIdentity;
	readonly keyEncryptionKeyUrl?: string;
}
export interface CustomerManagedKeyEncryptionPropertiesKeyEncryptionKeyIdentity {
	readonly identityType?: "SystemAssigned";
	readonly userAssignedIdentityResourceId?: string;
}
export interface EncryptionProperties {
	readonly customerManagedKeyEncryption?: CustomerManagedKeyEncryptionProperties;
}
export interface FluidRelayContainerProperties {
	readonly creationTime?: string;
	readonly frsContainerId?: string;
	readonly frsTenantId?: string;
	readonly lastAccessTime?: string;
	readonly provisioningState?: "Canceled" | "Failed" | "Succeeded";
}
export interface FluidRelayEndpoints {
	readonly ordererEndpoints?: string[];
	readonly storageEndpoints?: string[];
}
export interface FluidRelayServerKeys {
	readonly key1?: string;
	readonly key2?: string;
}
export interface FluidRelayServerProperties {
	readonly encryption?: EncryptionProperties;
	readonly fluidRelayEndpoints?: FluidRelayEndpoints;
	readonly frsTenantId?: string;
	readonly provisioningState?: "Canceled" | "Failed" | "Succeeded";
}
export interface Identity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "None" | "SystemAssigned" | "SystemAssigned, UserAssigned";
	readonly userAssignedIdentities?: IdentityUserAssignedIdentities;
}
export interface IdentityUserAssignedIdentities {
	readonly [key: string]: UserAssignedIdentitiesValue;
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
export interface UserAssignedIdentitiesValue {
	readonly clientId?: string;
	readonly principalId?: string;
}
export default {
	fluidRelayServers: fluidRelayServers,
	"fluidRelayServers/fluidRelayContainers": fluidRelayServers_fluidRelayContainers,
};

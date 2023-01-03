import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class workspaces extends ArmResource<workspacesComponentInputs> implements workspacesComponentOutputs {
	constructor(entity: ADKEntity, options: workspacesComponentInputs) {
		super(entity, options.name, "Microsoft.Quantum/workspaces", "2019-11-04-preview", options);
	}
	public readonly apiVersion: "2019-11-04-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Quantum/workspaces";
}
export interface workspacesComponentOutputs {
	readonly apiVersion: "2019-11-04-preview";
	readonly id: string;
	readonly type: "Microsoft.Quantum/workspaces";
}
export interface workspacesComponentInputs {
	readonly identity?: QuantumWorkspaceIdentity | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: WorkspaceResourceProperties | undefined;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export interface Provider {
	readonly applicationName?: string | undefined;
	readonly instanceUri?: string | undefined;
	readonly providerId?: string | undefined;
	readonly providerSku?: string | undefined;
	readonly provisioningState?: ("Deleted" | "Deleting" | "Failed" | "Launching" | "Succeeded" | "Updating") | undefined;
	readonly resourceUsageId?: string | undefined;
}
export interface QuantumWorkspaceIdentity {
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
export interface WorkspaceResourceProperties {
	readonly endpointUri?: string | undefined;
	readonly providers?: Provider[] | undefined;
	readonly provisioningState?:
		| ("Failed" | "ProviderDeleting" | "ProviderLaunching" | "ProviderProvisioning" | "ProviderUpdating" | "Succeeded")
		| undefined;
	readonly storageAccount?: string | undefined;
	readonly usable?: ("No" | "Partial" | "Yes") | undefined;
}
export default {
	workspaces: workspaces,
};

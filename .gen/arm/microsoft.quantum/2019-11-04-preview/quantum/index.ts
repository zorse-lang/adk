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
	readonly identity?: QuantumWorkspaceIdentity;
	readonly location: string;
	readonly name: string;
	readonly properties?: WorkspaceResourceProperties;
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export interface Provider {
	readonly applicationName?: string;
	readonly instanceUri?: string;
	readonly providerId?: string;
	readonly providerSku?: string;
	readonly provisioningState?: "Deleted" | "Deleting" | "Failed" | "Launching" | "Succeeded" | "Updating";
	readonly resourceUsageId?: string;
}
export interface QuantumWorkspaceIdentity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "None" | "SystemAssigned";
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
export interface WorkspaceResourceProperties {
	readonly endpointUri?: string;
	readonly providers?: Provider[];
	readonly provisioningState?:
		| "Failed"
		| "ProviderDeleting"
		| "ProviderLaunching"
		| "ProviderProvisioning"
		| "ProviderUpdating"
		| "Succeeded";
	readonly storageAccount?: string;
	readonly usable?: "No" | "Partial" | "Yes";
}
export default {
	workspaces: workspaces,
};

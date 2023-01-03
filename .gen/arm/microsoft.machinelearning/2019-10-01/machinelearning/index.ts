import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class workspaces extends ArmResource<workspacesComponentInputs> implements workspacesComponentOutputs {
	constructor(entity: ADKEntity, options: workspacesComponentInputs) {
		super(entity, options.name, "Microsoft.MachineLearning/workspaces", "2019-10-01", options);
	}
	public readonly apiVersion: "2019-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.MachineLearning/workspaces";
}
export interface workspacesComponentOutputs {
	readonly apiVersion: "2019-10-01";
	readonly id: string;
	readonly type: "Microsoft.MachineLearning/workspaces";
}
export interface workspacesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties?: WorkspaceProperties | undefined;
	readonly sku?: Sku | undefined;
	readonly tags?: ResourceTags | undefined;
}
export function listWorkspaceKeys(resource: workspaces): WorkspaceKeysResponse {
	if (resource.apiVersion !== "2019-10-01") {
		throw new Error(`listWorkspaceKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.MachineLearning/workspaces") {
		throw new Error(`listWorkspaceKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface Sku {
	readonly name?: string | undefined;
	readonly tier?: string | undefined;
}
export interface WorkspaceKeysResponse {
	readonly primaryToken?: string | undefined;
	readonly secondaryToken?: string | undefined;
}
export interface WorkspaceProperties {
	readonly creationTime?: string | undefined;
	readonly keyVaultIdentifierId?: string | undefined;
	readonly ownerEmail: string;
	readonly studioEndpoint?: string | undefined;
	readonly userStorageAccountId: string;
	readonly workspaceId?: string | undefined;
	readonly workspaceState?:
		| ("Deleted" | "Disabled" | "Enabled" | "Migrated" | "Registered" | "Unregistered")
		| undefined;
	readonly workspaceType?: ("Anonymous" | "Free" | "PaidPremium" | "PaidStandard") | undefined;
}
export default {
	workspaces: workspaces,
};

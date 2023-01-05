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
	readonly properties?: WorkspaceProperties;
	readonly sku?: Sku;
	readonly tags?: ResourceTags;
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
	readonly [key: string]: string;
}
export interface Sku {
	readonly name?: string;
	readonly tier?: string;
}
export interface WorkspaceKeysResponse {
	readonly primaryToken?: string;
	readonly secondaryToken?: string;
}
export interface WorkspaceProperties {
	readonly creationTime?: string;
	readonly keyVaultIdentifierId?: string;
	readonly ownerEmail: string;
	readonly studioEndpoint?: string;
	readonly userStorageAccountId: string;
	readonly workspaceId?: string;
	readonly workspaceState?: "Deleted" | "Disabled" | "Enabled" | "Migrated" | "Registered" | "Unregistered";
	readonly workspaceType?: "Anonymous" | "Free" | "PaidPremium" | "PaidStandard";
}
export default {
	workspaces: workspaces,
};

import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class workspaceCollections
	extends ArmResource<workspaceCollectionsComponentInputs>
	implements workspaceCollectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: workspaceCollectionsComponentInputs) {
		super(entity, options.name, "Microsoft.PowerBI/workspaceCollections", "2016-01-29", options);
	}
	public readonly apiVersion: "2016-01-29";
	public readonly id: string;
	public readonly type: "Microsoft.PowerBI/workspaceCollections";
}
export interface workspaceCollectionsComponentOutputs {
	readonly apiVersion: "2016-01-29";
	readonly id: string;
	readonly type: "Microsoft.PowerBI/workspaceCollections";
}
export interface workspaceCollectionsComponentInputs {
	readonly location?: string;
	readonly name: string;
	readonly properties?: any;
	readonly sku?: AzureSku;
	readonly tags?: CreateWorkspaceCollectionRequestTags;
}
export function listKeys(resource: workspaceCollections): WorkspaceCollectionAccessKeys {
	if (resource.apiVersion !== "2016-01-29") {
		throw new Error(`listKeys is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.PowerBI/workspaceCollections") {
		throw new Error(`listKeys is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AzureSku {
	readonly name: "S1";
	readonly tier: "Standard";
}
export interface CreateWorkspaceCollectionRequestTags {
	readonly [key: string]: string;
}
export interface WorkspaceCollectionAccessKeys {
	readonly key1?: string;
	readonly key2?: string;
}
export default {
	workspaceCollections: workspaceCollections,
};

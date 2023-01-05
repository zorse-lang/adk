import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Folders extends GdmResource<FoldersComponentInputs> implements FoldersComponentOutputs {
	constructor(entity: ADKEntity, options: FoldersComponentInputs) {
		super(entity, options.name, "cloudresourcemanager.v2.Folders", options);
	}
	public readonly createTime?: string;
	public readonly lifecycleState?: string;
}
export interface FoldersComponentOutputs {
	readonly createTime?: string;
	readonly lifecycleState?: string;
}
export interface FoldersComponentInputs {
	readonly displayName?: string;
	readonly name: string;
	readonly parent: string;
}
export interface Folder {
	readonly createTime?: string;
	readonly displayName?: string;
	readonly lifecycleState?: string;
	readonly name?: string;
	readonly parent: string;
}
export default {
	Folders: Folders,
};

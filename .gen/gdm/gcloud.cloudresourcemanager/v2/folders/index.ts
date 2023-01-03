import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Folders extends GdmResource<FoldersComponentInputs> implements FoldersComponentOutputs {
	constructor(entity: ADKEntity, options: FoldersComponentInputs) {
		super(entity, options.name, "cloudresourcemanager.v2.Folders", options);
	}
	public readonly createTime?: string | undefined;
	public readonly lifecycleState?: string | undefined;
}
export interface FoldersComponentOutputs {
	readonly createTime?: string | undefined;
	readonly lifecycleState?: string | undefined;
}
export interface FoldersComponentInputs {
	readonly displayName?: string | undefined;
	readonly name: string;
	readonly parent: string;
	readonly type: string;
}
export interface Folder {
	readonly createTime?: string | undefined;
	readonly displayName?: string | undefined;
	readonly lifecycleState?: string | undefined;
	readonly name?: string | undefined;
	readonly parent: string;
}
export default {
	Folders: Folders,
};

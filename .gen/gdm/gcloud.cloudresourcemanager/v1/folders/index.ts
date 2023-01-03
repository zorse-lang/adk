import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Folders extends GdmResource<FoldersComponentInputs> implements FoldersComponentOutputs {
	constructor(entity: ADKEntity, options: FoldersComponentInputs) {
		super(entity, options.name, "cloudresourcemanager.v1.Folders", options);
	}
}
export interface FoldersComponentOutputs {}
export interface FoldersComponentInputs {
	readonly type: string;
	readonly name: string;
}
export default {
	Folders: Folders,
};

import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class FoldersResourceKeys
	extends GdmResource<FoldersResourceKeysComponentInputs>
	implements FoldersResourceKeysComponentOutputs
{
	constructor(entity: ADKEntity, options: FoldersResourceKeysComponentInputs) {
		super(entity, options.name, "logging.v2.FoldersResourceKeys", options);
	}
}
export interface FoldersResourceKeysComponentOutputs {}
export interface FoldersResourceKeysComponentInputs {
	readonly name: string;
}
export default {
	FoldersResourceKeys: FoldersResourceKeys,
};

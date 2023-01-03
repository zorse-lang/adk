import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class FoldersExclusions
	extends GdmResource<FoldersExclusionsComponentInputs>
	implements FoldersExclusionsComponentOutputs
{
	constructor(entity: ADKEntity, options: FoldersExclusionsComponentInputs) {
		super(entity, options.name, "logging.v2.FoldersExclusions", options);
	}
	public readonly createTime?: string | undefined;
	public readonly updateTime?: string | undefined;
}
export interface FoldersExclusionsComponentOutputs {
	readonly createTime?: string | undefined;
	readonly updateTime?: string | undefined;
}
export interface FoldersExclusionsComponentInputs {
	readonly description?: string | undefined;
	readonly disabled?: boolean | undefined;
	readonly filter: string;
	readonly name: string;
	readonly parent: string;
	readonly type: string;
}
export interface LogExclusion {
	readonly createTime?: string | undefined;
	readonly description?: string | undefined;
	readonly disabled?: boolean | undefined;
	readonly filter: string;
	readonly name: string;
	readonly updateTime?: string | undefined;
}
export default {
	FoldersExclusions: FoldersExclusions,
};

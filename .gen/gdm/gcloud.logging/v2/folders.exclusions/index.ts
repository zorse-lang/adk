import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class FoldersExclusions
	extends GdmResource<FoldersExclusionsComponentInputs>
	implements FoldersExclusionsComponentOutputs
{
	constructor(entity: ADKEntity, options: FoldersExclusionsComponentInputs) {
		super(entity, options.name, "logging.v2.FoldersExclusions", options);
	}
	public readonly createTime?: string;
	public readonly updateTime?: string;
}
export interface FoldersExclusionsComponentOutputs {
	readonly createTime?: string;
	readonly updateTime?: string;
}
export interface FoldersExclusionsComponentInputs {
	readonly description?: string;
	readonly disabled?: boolean;
	readonly filter: string;
	readonly name: string;
	readonly parent: string;
}
export interface LogExclusion {
	readonly createTime?: string;
	readonly description?: string;
	readonly disabled?: boolean;
	readonly filter: string;
	readonly name: string;
	readonly updateTime?: string;
}
export default {
	FoldersExclusions: FoldersExclusions,
};

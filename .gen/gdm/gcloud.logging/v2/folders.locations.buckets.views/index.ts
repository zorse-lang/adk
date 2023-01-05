import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class FoldersLocationsBucketsViews
	extends GdmResource<FoldersLocationsBucketsViewsComponentInputs>
	implements FoldersLocationsBucketsViewsComponentOutputs
{
	constructor(entity: ADKEntity, options: FoldersLocationsBucketsViewsComponentInputs) {
		super(entity, options.name, "logging.v2.FoldersLocationsBucketsViews", options);
	}
	public readonly createTime?: string;
	public readonly schema?: TableSchema;
	public readonly updateTime?: string;
}
export interface FoldersLocationsBucketsViewsComponentOutputs {
	readonly createTime?: string;
	readonly schema?: TableSchema;
	readonly updateTime?: string;
}
export interface FoldersLocationsBucketsViewsComponentInputs {
	readonly description?: string;
	readonly filter?: string;
	readonly name: string;
	readonly parent: string;
	readonly viewId: string;
}
export interface LogView {
	readonly createTime?: string;
	readonly description?: string;
	readonly filter?: string;
	readonly name?: string;
	readonly schema?: TableSchema;
	readonly updateTime?: string;
}
export interface TableFieldSchema {
	readonly description?: string;
	readonly fields?: TableFieldSchema[];
	readonly mode?: string;
	readonly name: string;
	readonly type: string;
}
export interface TableSchema {
	readonly fields?: TableFieldSchema[];
}
export default {
	FoldersLocationsBucketsViews: FoldersLocationsBucketsViews,
};

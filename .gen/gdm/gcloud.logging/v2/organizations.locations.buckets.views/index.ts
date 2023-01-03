import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class OrganizationsLocationsBucketsViews
	extends GdmResource<OrganizationsLocationsBucketsViewsComponentInputs>
	implements OrganizationsLocationsBucketsViewsComponentOutputs
{
	constructor(entity: ADKEntity, options: OrganizationsLocationsBucketsViewsComponentInputs) {
		super(entity, options.name, "logging.v2.OrganizationsLocationsBucketsViews", options);
	}
	public readonly createTime?: string | undefined;
	public readonly schema?: TableSchema | undefined;
	public readonly updateTime?: string | undefined;
}
export interface OrganizationsLocationsBucketsViewsComponentOutputs {
	readonly createTime?: string | undefined;
	readonly schema?: TableSchema | undefined;
	readonly updateTime?: string | undefined;
}
export interface OrganizationsLocationsBucketsViewsComponentInputs {
	readonly description?: string | undefined;
	readonly filter?: string | undefined;
	readonly name: string;
	readonly parent: string;
	readonly viewId: string;
	readonly type: string;
}
export interface LogView {
	readonly createTime?: string | undefined;
	readonly description?: string | undefined;
	readonly filter?: string | undefined;
	readonly name?: string | undefined;
	readonly schema?: TableSchema | undefined;
	readonly updateTime?: string | undefined;
}
export interface TableFieldSchema {
	readonly description?: string | undefined;
	readonly fields?: TableFieldSchema[] | undefined;
	readonly mode?: string | undefined;
	readonly name: string;
	readonly type: string;
}
export interface TableSchema {
	readonly fields?: TableFieldSchema[] | undefined;
}
export default {
	OrganizationsLocationsBucketsViews: OrganizationsLocationsBucketsViews,
};

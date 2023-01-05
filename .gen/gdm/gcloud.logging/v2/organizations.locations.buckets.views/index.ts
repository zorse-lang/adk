import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class OrganizationsLocationsBucketsViews
	extends GdmResource<OrganizationsLocationsBucketsViewsComponentInputs>
	implements OrganizationsLocationsBucketsViewsComponentOutputs
{
	constructor(entity: ADKEntity, options: OrganizationsLocationsBucketsViewsComponentInputs) {
		super(entity, options.name, "logging.v2.OrganizationsLocationsBucketsViews", options);
	}
	public readonly createTime?: string;
	public readonly schema?: TableSchema;
	public readonly updateTime?: string;
}
export interface OrganizationsLocationsBucketsViewsComponentOutputs {
	readonly createTime?: string;
	readonly schema?: TableSchema;
	readonly updateTime?: string;
}
export interface OrganizationsLocationsBucketsViewsComponentInputs {
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
	OrganizationsLocationsBucketsViews: OrganizationsLocationsBucketsViews,
};

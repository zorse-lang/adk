import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class BillingAccountsLocationsBucketsViews
	extends GdmResource<BillingAccountsLocationsBucketsViewsComponentInputs>
	implements BillingAccountsLocationsBucketsViewsComponentOutputs
{
	constructor(entity: ADKEntity, options: BillingAccountsLocationsBucketsViewsComponentInputs) {
		super(entity, options.name, "logging.v2.BillingAccountsLocationsBucketsViews", options);
	}
	public readonly createTime?: string;
	public readonly schema?: TableSchema;
	public readonly updateTime?: string;
}
export interface BillingAccountsLocationsBucketsViewsComponentOutputs {
	readonly createTime?: string;
	readonly schema?: TableSchema;
	readonly updateTime?: string;
}
export interface BillingAccountsLocationsBucketsViewsComponentInputs {
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
	BillingAccountsLocationsBucketsViews: BillingAccountsLocationsBucketsViews,
};

import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class LocationsBucketsViews
	extends GdmResource<LocationsBucketsViewsComponentInputs>
	implements LocationsBucketsViewsComponentOutputs
{
	constructor(entity: ADKEntity, options: LocationsBucketsViewsComponentInputs) {
		super(entity, options.name, "logging.v2.LocationsBucketsViews", options);
	}
	public readonly createTime?: string;
	public readonly schema?: TableSchema;
	public readonly updateTime?: string;
}
export interface LocationsBucketsViewsComponentOutputs {
	readonly createTime?: string;
	readonly schema?: TableSchema;
	readonly updateTime?: string;
}
export interface LocationsBucketsViewsComponentInputs {
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
	LocationsBucketsViews: LocationsBucketsViews,
};

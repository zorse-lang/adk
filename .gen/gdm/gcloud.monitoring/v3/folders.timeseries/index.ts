import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class FoldersTimeSeries
	extends GdmResource<FoldersTimeSeriesComponentInputs>
	implements FoldersTimeSeriesComponentOutputs
{
	constructor(entity: ADKEntity, options: FoldersTimeSeriesComponentInputs) {
		super(entity, options.name, "monitoring.v3.FoldersTimeSeries", options);
	}
}
export interface FoldersTimeSeriesComponentOutputs {}
export interface FoldersTimeSeriesComponentInputs {
	readonly type: string;
	readonly name: string;
}
export default {
	FoldersTimeSeries: FoldersTimeSeries,
};

import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class FoldersLocationsBucketsViewsLogs
	extends GdmResource<FoldersLocationsBucketsViewsLogsComponentInputs>
	implements FoldersLocationsBucketsViewsLogsComponentOutputs
{
	constructor(entity: ADKEntity, options: FoldersLocationsBucketsViewsLogsComponentInputs) {
		super(entity, options.name, "logging.v2.FoldersLocationsBucketsViewsLogs", options);
	}
}
export interface FoldersLocationsBucketsViewsLogsComponentOutputs {}
export interface FoldersLocationsBucketsViewsLogsComponentInputs {
	readonly type: string;
	readonly name: string;
}
export default {
	FoldersLocationsBucketsViewsLogs: FoldersLocationsBucketsViewsLogs,
};

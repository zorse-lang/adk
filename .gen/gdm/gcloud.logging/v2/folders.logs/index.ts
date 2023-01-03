import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class FoldersLogs extends GdmResource<FoldersLogsComponentInputs> implements FoldersLogsComponentOutputs {
	constructor(entity: ADKEntity, options: FoldersLogsComponentInputs) {
		super(entity, options.name, "logging.v2.FoldersLogs", options);
	}
}
export interface FoldersLogsComponentOutputs {}
export interface FoldersLogsComponentInputs {
	readonly type: string;
	readonly name: string;
}
export default {
	FoldersLogs: FoldersLogs,
};

import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class FoldersLocationsOperations
	extends GdmResource<FoldersLocationsOperationsComponentInputs>
	implements FoldersLocationsOperationsComponentOutputs
{
	constructor(entity: ADKEntity, options: FoldersLocationsOperationsComponentInputs) {
		super(entity, options.name, "logging.v2.FoldersLocationsOperations", options);
	}
}
export interface FoldersLocationsOperationsComponentOutputs {}
export interface FoldersLocationsOperationsComponentInputs {
	readonly done?: boolean | undefined;
	readonly error?: Status | undefined;
	readonly metadata?: { [P in string]: any } | undefined;
	readonly name: string;
	readonly response?: { [P in string]: any } | undefined;
	readonly type: string;
}
export interface Operation {
	readonly done?: boolean | undefined;
	readonly error?: Status | undefined;
	readonly metadata?: { [P in string]: any } | undefined;
	readonly name?: string | undefined;
	readonly response?: { [P in string]: any } | undefined;
}
export interface Status {
	readonly code?: number | undefined;
	readonly details?: Array<{ [P in string]: any }> | undefined;
	readonly message?: string | undefined;
}
export default {
	FoldersLocationsOperations: FoldersLocationsOperations,
};

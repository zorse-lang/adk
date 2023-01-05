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
	readonly done?: boolean;
	readonly error?: Status;
	readonly metadata?: { [P in string]: any };
	readonly name: string;
	readonly response?: { [P in string]: any };
}
export interface Operation {
	readonly done?: boolean;
	readonly error?: Status;
	readonly metadata?: { [P in string]: any };
	readonly name?: string;
	readonly response?: { [P in string]: any };
}
export interface Status {
	readonly code?: number;
	readonly details?: Array<{ [P in string]: any }>;
	readonly message?: string;
}
export default {
	FoldersLocationsOperations: FoldersLocationsOperations,
};

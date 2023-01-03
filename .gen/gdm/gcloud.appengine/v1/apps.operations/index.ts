import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class AppsOperations extends GdmResource<AppsOperationsComponentInputs> implements AppsOperationsComponentOutputs {
	constructor(entity: ADKEntity, options: AppsOperationsComponentInputs) {
		super(entity, options.name, "appengine.v1.AppsOperations", options);
	}
}
export interface AppsOperationsComponentOutputs {}
export interface AppsOperationsComponentInputs {
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
	AppsOperations: AppsOperations,
};

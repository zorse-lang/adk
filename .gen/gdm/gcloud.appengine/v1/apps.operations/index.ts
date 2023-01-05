import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class AppsOperations extends GdmResource<AppsOperationsComponentInputs> implements AppsOperationsComponentOutputs {
	constructor(entity: ADKEntity, options: AppsOperationsComponentInputs) {
		super(entity, options.name, "appengine.v1.AppsOperations", options);
	}
}
export interface AppsOperationsComponentOutputs {}
export interface AppsOperationsComponentInputs {
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
	AppsOperations: AppsOperations,
};

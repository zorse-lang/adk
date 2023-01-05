import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Operations extends GdmResource<OperationsComponentInputs> implements OperationsComponentOutputs {
	constructor(entity: ADKEntity, options: OperationsComponentInputs) {
		super(entity, options.name, "cloudresourcemanager.v1.Operations", options);
	}
}
export interface OperationsComponentOutputs {}
export interface OperationsComponentInputs {
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
	Operations: Operations,
};

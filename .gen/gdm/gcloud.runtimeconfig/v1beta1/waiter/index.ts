import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Waiter extends GdmResource<WaiterComponentInputs> implements WaiterComponentOutputs {
	constructor(entity: ADKEntity, options: WaiterComponentInputs) {
		super(entity, options.name, "runtimeconfig.v1beta1.waiter", options);
	}
	public readonly createTime?: string;
	public readonly done?: boolean;
	public readonly error?: Status;
}
export interface WaiterComponentOutputs {
	readonly createTime?: string;
	readonly done?: boolean;
	readonly error?: Status;
}
export interface WaiterComponentInputs {
	readonly failure?: EndCondition;
	readonly name: string;
	readonly success?: EndCondition;
	readonly timeout?: string;
}
export interface Cardinality {
	readonly number?: number;
	readonly path?: string;
}
export interface EndCondition {
	readonly cardinality?: Cardinality;
}
export interface Status {
	readonly code?: number;
	readonly details?: Array<{ [P in string]: any }>;
	readonly message?: string;
}
export default {
	Waiter: Waiter,
};

import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Waiter extends GdmResource<WaiterComponentInputs> implements WaiterComponentOutputs {
	constructor(entity: ADKEntity, options: WaiterComponentInputs) {
		super(entity, options.name, "runtimeconfig.v1beta1.waiter", options);
	}
	public readonly createTime?: string | undefined;
	public readonly done?: boolean | undefined;
	public readonly error?: Status | undefined;
}
export interface WaiterComponentOutputs {
	readonly createTime?: string | undefined;
	readonly done?: boolean | undefined;
	readonly error?: Status | undefined;
}
export interface WaiterComponentInputs {
	readonly failure?: EndCondition | undefined;
	readonly name: string;
	readonly success?: EndCondition | undefined;
	readonly timeout?: string | undefined;
	readonly type: string;
}
export interface Cardinality {
	readonly number?: number | undefined;
	readonly path?: string | undefined;
}
export interface EndCondition {
	readonly cardinality?: Cardinality | undefined;
}
export interface Status {
	readonly code?: number | undefined;
	readonly details?: Array<{ [P in string]: any }> | undefined;
	readonly message?: string | undefined;
}
export default {
	Waiter: Waiter,
};

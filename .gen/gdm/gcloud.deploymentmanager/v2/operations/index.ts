import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Operations extends GdmResource<OperationsComponentInputs> implements OperationsComponentOutputs {
	constructor(entity: ADKEntity, options: OperationsComponentInputs) {
		super(entity, options.name, "deploymentmanager.v2.Operations", options);
	}
	public readonly clientOperationId?: string | undefined;
	public readonly description?: string | undefined;
	public readonly endTime?: string | undefined;
	public readonly error?: { errors?: Array<{ code?: string; location?: string; message?: string }> } | undefined;
	public readonly httpErrorMessage?: string | undefined;
	public readonly httpErrorStatusCode?: number | undefined;
	public readonly id?: string | undefined;
	public readonly insertTime?: string | undefined;
	public readonly kind?: string | undefined;
	public readonly operationGroupId?: string | undefined;
	public readonly operationType?: string | undefined;
	public readonly progress?: number | undefined;
	public readonly region?: string | undefined;
	public readonly selfLink?: string | undefined;
	public readonly startTime?: string | undefined;
	public readonly status?: string | undefined;
	public readonly statusMessage?: string | undefined;
	public readonly targetId?: string | undefined;
	public readonly targetLink?: string | undefined;
	public readonly user?: string | undefined;
	public readonly warnings?:
		| Array<{ code?: string; data?: Array<{ key?: string; value?: string }>; message?: string }>
		| undefined;
	public readonly zone?: string | undefined;
}
export interface OperationsComponentOutputs {
	readonly clientOperationId?: string | undefined;
	readonly description?: string | undefined;
	readonly endTime?: string | undefined;
	readonly error?: { errors?: Array<{ code?: string; location?: string; message?: string }> } | undefined;
	readonly httpErrorMessage?: string | undefined;
	readonly httpErrorStatusCode?: number | undefined;
	readonly id?: string | undefined;
	readonly insertTime?: string | undefined;
	readonly kind?: string | undefined;
	readonly operationGroupId?: string | undefined;
	readonly operationType?: string | undefined;
	readonly progress?: number | undefined;
	readonly region?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly startTime?: string | undefined;
	readonly status?: string | undefined;
	readonly statusMessage?: string | undefined;
	readonly targetId?: string | undefined;
	readonly targetLink?: string | undefined;
	readonly user?: string | undefined;
	readonly warnings?:
		| Array<{ code?: string; data?: Array<{ key?: string; value?: string }>; message?: string }>
		| undefined;
	readonly zone?: string | undefined;
}
export interface OperationsComponentInputs {
	readonly creationTimestamp?: string | undefined;
	readonly name: string;
	readonly type: string;
}
export interface Operation {
	readonly clientOperationId?: string | undefined;
	readonly creationTimestamp?: string | undefined;
	readonly description?: string | undefined;
	readonly endTime?: string | undefined;
	readonly error?: { errors?: Array<{ code?: string; location?: string; message?: string }> } | undefined;
	readonly httpErrorMessage?: string | undefined;
	readonly httpErrorStatusCode?: number | undefined;
	readonly id?: string | undefined;
	readonly insertTime?: string | undefined;
	readonly kind?: string | undefined;
	readonly name?: string | undefined;
	readonly operationGroupId?: string | undefined;
	readonly operationType?: string | undefined;
	readonly progress?: number | undefined;
	readonly region?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly startTime?: string | undefined;
	readonly status?: string | undefined;
	readonly statusMessage?: string | undefined;
	readonly targetId?: string | undefined;
	readonly targetLink?: string | undefined;
	readonly user?: string | undefined;
	readonly warnings?:
		| Array<{ code?: string; data?: Array<{ key?: string; value?: string }>; message?: string }>
		| undefined;
	readonly zone?: string | undefined;
}
export default {
	Operations: Operations,
};

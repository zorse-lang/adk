import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Operations extends GdmResource<OperationsComponentInputs> implements OperationsComponentOutputs {
	constructor(entity: ADKEntity, options: OperationsComponentInputs) {
		super(entity, options.name, "deploymentmanager.alpha.Operations", options);
	}
	public readonly clientOperationId?: string;
	public readonly description?: string;
	public readonly endTime?: string;
	public readonly error?: { errors?: Array<{ code?: string; location?: string; message?: string }> };
	public readonly httpErrorMessage?: string;
	public readonly httpErrorStatusCode?: number;
	public readonly id?: string;
	public readonly insertTime?: string;
	public readonly kind?: string;
	public readonly operationGroupId?: string;
	public readonly operationType?: string;
	public readonly progress?: number;
	public readonly region?: string;
	public readonly selfLink?: string;
	public readonly startTime?: string;
	public readonly status?: string;
	public readonly statusMessage?: string;
	public readonly targetId?: string;
	public readonly targetLink?: string;
	public readonly user?: string;
	public readonly warnings?: Array<{ code?: string; data?: Array<{ key?: string; value?: string }>; message?: string }>;
	public readonly zone?: string;
}
export interface OperationsComponentOutputs {
	readonly clientOperationId?: string;
	readonly description?: string;
	readonly endTime?: string;
	readonly error?: { errors?: Array<{ code?: string; location?: string; message?: string }> };
	readonly httpErrorMessage?: string;
	readonly httpErrorStatusCode?: number;
	readonly id?: string;
	readonly insertTime?: string;
	readonly kind?: string;
	readonly operationGroupId?: string;
	readonly operationType?: string;
	readonly progress?: number;
	readonly region?: string;
	readonly selfLink?: string;
	readonly startTime?: string;
	readonly status?: string;
	readonly statusMessage?: string;
	readonly targetId?: string;
	readonly targetLink?: string;
	readonly user?: string;
	readonly warnings?: Array<{ code?: string; data?: Array<{ key?: string; value?: string }>; message?: string }>;
	readonly zone?: string;
}
export interface OperationsComponentInputs {
	readonly creationTimestamp?: string;
	readonly name: string;
}
export interface Operation {
	readonly clientOperationId?: string;
	readonly creationTimestamp?: string;
	readonly description?: string;
	readonly endTime?: string;
	readonly error?: { errors?: Array<{ code?: string; location?: string; message?: string }> };
	readonly httpErrorMessage?: string;
	readonly httpErrorStatusCode?: number;
	readonly id?: string;
	readonly insertTime?: string;
	readonly kind?: string;
	readonly name?: string;
	readonly operationGroupId?: string;
	readonly operationType?: string;
	readonly progress?: number;
	readonly region?: string;
	readonly selfLink?: string;
	readonly startTime?: string;
	readonly status?: string;
	readonly statusMessage?: string;
	readonly targetId?: string;
	readonly targetLink?: string;
	readonly user?: string;
	readonly warnings?: Array<{ code?: string; data?: Array<{ key?: string; value?: string }>; message?: string }>;
	readonly zone?: string;
}
export default {
	Operations: Operations,
};

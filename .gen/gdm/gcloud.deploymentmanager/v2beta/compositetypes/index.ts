import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class CompositeTypes extends GdmResource<CompositeTypesComponentInputs> implements CompositeTypesComponentOutputs {
	constructor(entity: ADKEntity, options: CompositeTypesComponentInputs) {
		super(entity, options.name, "deploymentmanager.v2beta.CompositeTypes", options);
	}
	public readonly insertTime?: string | undefined;
	public readonly operation?: Operation | undefined;
	public readonly selfLink?: string | undefined;
}
export interface CompositeTypesComponentOutputs {
	readonly insertTime?: string | undefined;
	readonly operation?: Operation | undefined;
	readonly selfLink?: string | undefined;
}
export interface CompositeTypesComponentInputs {
	readonly description?: string | undefined;
	readonly id?: string | undefined;
	readonly labels?: CompositeTypeLabelEntry[] | undefined;
	readonly name: string;
	readonly status?: string | undefined;
	readonly templateContents?: TemplateContents | undefined;
	readonly type: string;
}
export interface CompositeType {
	readonly description?: string | undefined;
	readonly id?: string | undefined;
	readonly insertTime?: string | undefined;
	readonly labels?: CompositeTypeLabelEntry[] | undefined;
	readonly name?: string | undefined;
	readonly operation?: Operation | undefined;
	readonly selfLink?: string | undefined;
	readonly status?: string | undefined;
	readonly templateContents?: TemplateContents | undefined;
}
export interface CompositeTypeLabelEntry {
	readonly key?: string | undefined;
	readonly value?: string | undefined;
}
export interface ImportFile {
	readonly content?: string | undefined;
	readonly name?: string | undefined;
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
export interface TemplateContents {
	readonly imports?: ImportFile[] | undefined;
	readonly interpreter?: string | undefined;
	readonly mainTemplate?: string | undefined;
	readonly schema?: string | undefined;
	readonly template?: string | undefined;
}
export default {
	CompositeTypes: CompositeTypes,
};

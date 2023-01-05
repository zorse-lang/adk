import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class CompositeTypes extends GdmResource<CompositeTypesComponentInputs> implements CompositeTypesComponentOutputs {
	constructor(entity: ADKEntity, options: CompositeTypesComponentInputs) {
		super(entity, options.name, "deploymentmanager.v2beta.CompositeTypes", options);
	}
	public readonly insertTime?: string;
	public readonly operation?: Operation;
	public readonly selfLink?: string;
}
export interface CompositeTypesComponentOutputs {
	readonly insertTime?: string;
	readonly operation?: Operation;
	readonly selfLink?: string;
}
export interface CompositeTypesComponentInputs {
	readonly description?: string;
	readonly id?: string;
	readonly labels?: CompositeTypeLabelEntry[];
	readonly name: string;
	readonly status?: string;
	readonly templateContents?: TemplateContents;
}
export interface CompositeType {
	readonly description?: string;
	readonly id?: string;
	readonly insertTime?: string;
	readonly labels?: CompositeTypeLabelEntry[];
	readonly name?: string;
	readonly operation?: Operation;
	readonly selfLink?: string;
	readonly status?: string;
	readonly templateContents?: TemplateContents;
}
export interface CompositeTypeLabelEntry {
	readonly key?: string;
	readonly value?: string;
}
export interface ImportFile {
	readonly content?: string;
	readonly name?: string;
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
export interface TemplateContents {
	readonly imports?: ImportFile[];
	readonly interpreter?: string;
	readonly mainTemplate?: string;
	readonly schema?: string;
	readonly template?: string;
}
export default {
	CompositeTypes: CompositeTypes,
};

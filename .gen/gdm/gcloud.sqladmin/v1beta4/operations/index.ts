import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Operations extends GdmResource<OperationsComponentInputs> implements OperationsComponentOutputs {
	constructor(entity: ADKEntity, options: OperationsComponentInputs) {
		super(entity, options.name, "sqladmin.v1beta4.Operations", options);
	}
}
export interface OperationsComponentOutputs {}
export interface OperationsComponentInputs {
	readonly endTime?: string | undefined;
	readonly error?: OperationErrors | undefined;
	readonly exportContext?: ExportContext | undefined;
	readonly importContext?: ImportContext | undefined;
	readonly insertTime?: string | undefined;
	readonly kind?: string | undefined;
	readonly name: string;
	readonly operationType?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly startTime?: string | undefined;
	readonly status?: string | undefined;
	readonly targetId?: string | undefined;
	readonly targetLink?: string | undefined;
	readonly targetProject?: string | undefined;
	readonly user?: string | undefined;
	readonly type: string;
}
export interface ExportContext {
	readonly csvExportOptions?: { selectQuery?: string } | undefined;
	readonly databases?: string[] | undefined;
	readonly fileType?: string | undefined;
	readonly kind?: string | undefined;
	readonly sqlExportOptions?:
		| { mysqlExportOptions?: { masterData?: number }; schemaOnly?: boolean; tables?: string[] }
		| undefined;
	readonly uri?: string | undefined;
}
export interface ImportContext {
	readonly csvImportOptions?: { columns?: string[]; table?: string } | undefined;
	readonly database?: string | undefined;
	readonly fileType?: string | undefined;
	readonly importUser?: string | undefined;
	readonly kind?: string | undefined;
	readonly uri?: string | undefined;
}
export interface Operation {
	readonly endTime?: string | undefined;
	readonly error?: OperationErrors | undefined;
	readonly exportContext?: ExportContext | undefined;
	readonly importContext?: ImportContext | undefined;
	readonly insertTime?: string | undefined;
	readonly kind?: string | undefined;
	readonly name?: string | undefined;
	readonly operationType?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly startTime?: string | undefined;
	readonly status?: string | undefined;
	readonly targetId?: string | undefined;
	readonly targetLink?: string | undefined;
	readonly targetProject?: string | undefined;
	readonly user?: string | undefined;
}
export interface OperationError {
	readonly code?: string | undefined;
	readonly kind?: string | undefined;
	readonly message?: string | undefined;
}
export interface OperationErrors {
	readonly errors?: OperationError[] | undefined;
	readonly kind?: string | undefined;
}
export default {
	Operations: Operations,
};

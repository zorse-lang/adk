import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Operations extends GdmResource<OperationsComponentInputs> implements OperationsComponentOutputs {
	constructor(entity: ADKEntity, options: OperationsComponentInputs) {
		super(entity, options.name, "sqladmin.v1beta4.Operations", options);
	}
}
export interface OperationsComponentOutputs {}
export interface OperationsComponentInputs {
	readonly endTime?: string;
	readonly error?: OperationErrors;
	readonly exportContext?: ExportContext;
	readonly importContext?: ImportContext;
	readonly insertTime?: string;
	readonly kind?: string;
	readonly name: string;
	readonly operationType?: string;
	readonly selfLink?: string;
	readonly startTime?: string;
	readonly status?: string;
	readonly targetId?: string;
	readonly targetLink?: string;
	readonly targetProject?: string;
	readonly user?: string;
}
export interface ExportContext {
	readonly csvExportOptions?: { selectQuery?: string };
	readonly databases?: string[];
	readonly fileType?: string;
	readonly kind?: string;
	readonly sqlExportOptions?: { mysqlExportOptions?: { masterData?: number }; schemaOnly?: boolean; tables?: string[] };
	readonly uri?: string;
}
export interface ImportContext {
	readonly csvImportOptions?: { columns?: string[]; table?: string };
	readonly database?: string;
	readonly fileType?: string;
	readonly importUser?: string;
	readonly kind?: string;
	readonly uri?: string;
}
export interface Operation {
	readonly endTime?: string;
	readonly error?: OperationErrors;
	readonly exportContext?: ExportContext;
	readonly importContext?: ImportContext;
	readonly insertTime?: string;
	readonly kind?: string;
	readonly name?: string;
	readonly operationType?: string;
	readonly selfLink?: string;
	readonly startTime?: string;
	readonly status?: string;
	readonly targetId?: string;
	readonly targetLink?: string;
	readonly targetProject?: string;
	readonly user?: string;
}
export interface OperationError {
	readonly code?: string;
	readonly kind?: string;
	readonly message?: string;
}
export interface OperationErrors {
	readonly errors?: OperationError[];
	readonly kind?: string;
}
export default {
	Operations: Operations,
};

import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class BackupRuns extends GdmResource<BackupRunsComponentInputs> implements BackupRunsComponentOutputs {
	constructor(entity: ADKEntity, options: BackupRunsComponentInputs) {
		super(entity, options.name, "sqladmin.v1beta4.BackupRuns", options);
	}
}
export interface BackupRunsComponentOutputs {}
export interface BackupRunsComponentInputs {
	readonly description?: string;
	readonly endTime?: string;
	readonly enqueuedTime?: string;
	readonly error?: OperationError;
	readonly id?: string;
	readonly instance?: string;
	readonly kind?: string;
	readonly location?: string;
	readonly selfLink?: string;
	readonly startTime?: string;
	readonly status?: string;
	readonly windowStartTime?: string;
	readonly name: string;
}
export interface BackupRun {
	readonly description?: string;
	readonly endTime?: string;
	readonly enqueuedTime?: string;
	readonly error?: OperationError;
	readonly id?: string;
	readonly instance?: string;
	readonly kind?: string;
	readonly location?: string;
	readonly selfLink?: string;
	readonly startTime?: string;
	readonly status?: string;
	readonly type?: string;
	readonly windowStartTime?: string;
}
export interface OperationError {
	readonly code?: string;
	readonly kind?: string;
	readonly message?: string;
}
export default {
	BackupRuns: BackupRuns,
};

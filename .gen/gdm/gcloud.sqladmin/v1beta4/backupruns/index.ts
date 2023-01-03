import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class BackupRuns extends GdmResource<BackupRunsComponentInputs> implements BackupRunsComponentOutputs {
	constructor(entity: ADKEntity, options: BackupRunsComponentInputs) {
		super(entity, options.name, "sqladmin.v1beta4.BackupRuns", options);
	}
}
export interface BackupRunsComponentOutputs {}
export interface BackupRunsComponentInputs {
	readonly description?: string | undefined;
	readonly endTime?: string | undefined;
	readonly enqueuedTime?: string | undefined;
	readonly error?: OperationError | undefined;
	readonly id?: string | undefined;
	readonly instance?: string | undefined;
	readonly kind?: string | undefined;
	readonly location?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly startTime?: string | undefined;
	readonly status?: string | undefined;
	readonly type: string;
	readonly windowStartTime?: string | undefined;
	readonly name: string;
}
export interface BackupRun {
	readonly description?: string | undefined;
	readonly endTime?: string | undefined;
	readonly enqueuedTime?: string | undefined;
	readonly error?: OperationError | undefined;
	readonly id?: string | undefined;
	readonly instance?: string | undefined;
	readonly kind?: string | undefined;
	readonly location?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly startTime?: string | undefined;
	readonly status?: string | undefined;
	readonly type?: string | undefined;
	readonly windowStartTime?: string | undefined;
}
export interface OperationError {
	readonly code?: string | undefined;
	readonly kind?: string | undefined;
	readonly message?: string | undefined;
}
export default {
	BackupRuns: BackupRuns,
};

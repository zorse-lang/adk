import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsInstancesBackupsOperations
	extends GdmResource<ProjectsInstancesBackupsOperationsComponentInputs>
	implements ProjectsInstancesBackupsOperationsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsInstancesBackupsOperationsComponentInputs) {
		super(entity, options.name, "spanner.v1.ProjectsInstancesBackupsOperations", options);
	}
}
export interface ProjectsInstancesBackupsOperationsComponentOutputs {}
export interface ProjectsInstancesBackupsOperationsComponentInputs {
	readonly done?: boolean | undefined;
	readonly error?: Status | undefined;
	readonly metadata?: { [P in string]: any } | undefined;
	readonly name: string;
	readonly response?: { [P in string]: any } | undefined;
	readonly type: string;
}
export interface Operation {
	readonly done?: boolean | undefined;
	readonly error?: Status | undefined;
	readonly metadata?: { [P in string]: any } | undefined;
	readonly name?: string | undefined;
	readonly response?: { [P in string]: any } | undefined;
}
export interface Status {
	readonly code?: number | undefined;
	readonly details?: Array<{ [P in string]: any }> | undefined;
	readonly message?: string | undefined;
}
export default {
	ProjectsInstancesBackupsOperations: ProjectsInstancesBackupsOperations,
};

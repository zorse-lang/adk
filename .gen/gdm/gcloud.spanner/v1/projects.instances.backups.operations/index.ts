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
	readonly done?: boolean;
	readonly error?: Status;
	readonly metadata?: { [P in string]: any };
	readonly name: string;
	readonly response?: { [P in string]: any };
}
export interface Operation {
	readonly done?: boolean;
	readonly error?: Status;
	readonly metadata?: { [P in string]: any };
	readonly name?: string;
	readonly response?: { [P in string]: any };
}
export interface Status {
	readonly code?: number;
	readonly details?: Array<{ [P in string]: any }>;
	readonly message?: string;
}
export default {
	ProjectsInstancesBackupsOperations: ProjectsInstancesBackupsOperations,
};

import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsInstancesBackupOperations
	extends GdmResource<ProjectsInstancesBackupOperationsComponentInputs>
	implements ProjectsInstancesBackupOperationsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsInstancesBackupOperationsComponentInputs) {
		super(entity, options.name, "spanner.v1.ProjectsInstancesBackupOperations", options);
	}
}
export interface ProjectsInstancesBackupOperationsComponentOutputs {}
export interface ProjectsInstancesBackupOperationsComponentInputs {
	readonly type: string;
	readonly name: string;
}
export default {
	ProjectsInstancesBackupOperations: ProjectsInstancesBackupOperations,
};

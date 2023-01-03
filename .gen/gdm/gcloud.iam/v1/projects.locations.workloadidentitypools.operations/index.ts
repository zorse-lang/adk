import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationsWorkloadIdentityPoolsOperations
	extends GdmResource<ProjectsLocationsWorkloadIdentityPoolsOperationsComponentInputs>
	implements ProjectsLocationsWorkloadIdentityPoolsOperationsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsWorkloadIdentityPoolsOperationsComponentInputs) {
		super(entity, options.name, "iam.v1.ProjectsLocationsWorkloadIdentityPoolsOperations", options);
	}
}
export interface ProjectsLocationsWorkloadIdentityPoolsOperationsComponentOutputs {}
export interface ProjectsLocationsWorkloadIdentityPoolsOperationsComponentInputs {
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
	ProjectsLocationsWorkloadIdentityPoolsOperations: ProjectsLocationsWorkloadIdentityPoolsOperations,
};

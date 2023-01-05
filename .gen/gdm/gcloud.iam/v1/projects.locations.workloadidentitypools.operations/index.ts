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
	ProjectsLocationsWorkloadIdentityPoolsOperations: ProjectsLocationsWorkloadIdentityPoolsOperations,
};

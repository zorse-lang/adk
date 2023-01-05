import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationsWorkloadIdentityPoolsProvidersOperations
	extends GdmResource<ProjectsLocationsWorkloadIdentityPoolsProvidersOperationsComponentInputs>
	implements ProjectsLocationsWorkloadIdentityPoolsProvidersOperationsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsWorkloadIdentityPoolsProvidersOperationsComponentInputs) {
		super(entity, options.name, "iam.v1.ProjectsLocationsWorkloadIdentityPoolsProvidersOperations", options);
	}
}
export interface ProjectsLocationsWorkloadIdentityPoolsProvidersOperationsComponentOutputs {}
export interface ProjectsLocationsWorkloadIdentityPoolsProvidersOperationsComponentInputs {
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
	ProjectsLocationsWorkloadIdentityPoolsProvidersOperations: ProjectsLocationsWorkloadIdentityPoolsProvidersOperations,
};

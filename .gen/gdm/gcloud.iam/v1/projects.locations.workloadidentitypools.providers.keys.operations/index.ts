import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationsWorkloadIdentityPoolsProvidersKeysOperations
	extends GdmResource<ProjectsLocationsWorkloadIdentityPoolsProvidersKeysOperationsComponentInputs>
	implements ProjectsLocationsWorkloadIdentityPoolsProvidersKeysOperationsComponentOutputs
{
	constructor(
		entity: ADKEntity,
		options: ProjectsLocationsWorkloadIdentityPoolsProvidersKeysOperationsComponentInputs,
	) {
		super(entity, options.name, "iam.v1.ProjectsLocationsWorkloadIdentityPoolsProvidersKeysOperations", options);
	}
}
export interface ProjectsLocationsWorkloadIdentityPoolsProvidersKeysOperationsComponentOutputs {}
export interface ProjectsLocationsWorkloadIdentityPoolsProvidersKeysOperationsComponentInputs {
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
	ProjectsLocationsWorkloadIdentityPoolsProvidersKeysOperations:
		ProjectsLocationsWorkloadIdentityPoolsProvidersKeysOperations,
};

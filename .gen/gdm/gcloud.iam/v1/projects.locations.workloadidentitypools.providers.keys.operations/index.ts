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
	ProjectsLocationsWorkloadIdentityPoolsProvidersKeysOperations:
		ProjectsLocationsWorkloadIdentityPoolsProvidersKeysOperations,
};

import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationsWorkloadIdentityPools
	extends GdmResource<ProjectsLocationsWorkloadIdentityPoolsComponentInputs>
	implements ProjectsLocationsWorkloadIdentityPoolsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsWorkloadIdentityPoolsComponentInputs) {
		super(entity, options.name, "iam.v1.ProjectsLocationsWorkloadIdentityPools", options);
	}
	public readonly state?: string;
}
export interface ProjectsLocationsWorkloadIdentityPoolsComponentOutputs {
	readonly state?: string;
}
export interface ProjectsLocationsWorkloadIdentityPoolsComponentInputs {
	readonly description?: string;
	readonly disabled?: boolean;
	readonly displayName?: string;
	readonly name: string;
	readonly parent: string;
	readonly workloadIdentityPoolId: string;
}
export interface WorkloadIdentityPool {
	readonly description?: string;
	readonly disabled?: boolean;
	readonly displayName?: string;
	readonly name?: string;
	readonly state?: string;
}
export default {
	ProjectsLocationsWorkloadIdentityPools: ProjectsLocationsWorkloadIdentityPools,
};

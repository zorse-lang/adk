import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationsWorkloadIdentityPools
	extends GdmResource<ProjectsLocationsWorkloadIdentityPoolsComponentInputs>
	implements ProjectsLocationsWorkloadIdentityPoolsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsWorkloadIdentityPoolsComponentInputs) {
		super(entity, options.name, "iam.v1.ProjectsLocationsWorkloadIdentityPools", options);
	}
	public readonly state?: string | undefined;
}
export interface ProjectsLocationsWorkloadIdentityPoolsComponentOutputs {
	readonly state?: string | undefined;
}
export interface ProjectsLocationsWorkloadIdentityPoolsComponentInputs {
	readonly description?: string | undefined;
	readonly disabled?: boolean | undefined;
	readonly displayName?: string | undefined;
	readonly name: string;
	readonly parent: string;
	readonly workloadIdentityPoolId: string;
	readonly type: string;
}
export interface WorkloadIdentityPool {
	readonly description?: string | undefined;
	readonly disabled?: boolean | undefined;
	readonly displayName?: string | undefined;
	readonly name?: string | undefined;
	readonly state?: string | undefined;
}
export default {
	ProjectsLocationsWorkloadIdentityPools: ProjectsLocationsWorkloadIdentityPools,
};

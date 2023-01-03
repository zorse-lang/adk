import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationsRepositories
	extends GdmResource<ProjectsLocationsRepositoriesComponentInputs>
	implements ProjectsLocationsRepositoriesComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsRepositoriesComponentInputs) {
		super(entity, options.name, "artifactregistry.v1beta1.ProjectsLocationsRepositories", options);
	}
	public readonly satisfiesPzs?: boolean | undefined;
	public readonly sizeBytes?: string | undefined;
}
export interface ProjectsLocationsRepositoriesComponentOutputs {
	readonly satisfiesPzs?: boolean | undefined;
	readonly sizeBytes?: string | undefined;
}
export interface ProjectsLocationsRepositoriesComponentInputs {
	readonly createTime?: string | undefined;
	readonly description?: string | undefined;
	readonly format?: string | undefined;
	readonly kmsKeyName?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly name: string;
	readonly parent: string;
	readonly repositoryId?: string | undefined;
	readonly updateTime?: string | undefined;
	readonly type: string;
}
export interface Repository {
	readonly createTime?: string | undefined;
	readonly description?: string | undefined;
	readonly format?: string | undefined;
	readonly kmsKeyName?: string | undefined;
	readonly labels?: { [P in string]: string } | undefined;
	readonly name?: string | undefined;
	readonly satisfiesPzs?: boolean | undefined;
	readonly sizeBytes?: string | undefined;
	readonly updateTime?: string | undefined;
}
export default {
	ProjectsLocationsRepositories: ProjectsLocationsRepositories,
};

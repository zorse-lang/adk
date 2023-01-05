import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationsRepositories
	extends GdmResource<ProjectsLocationsRepositoriesComponentInputs>
	implements ProjectsLocationsRepositoriesComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsRepositoriesComponentInputs) {
		super(entity, options.name, "artifactregistry.v1beta1.ProjectsLocationsRepositories", options);
	}
	public readonly satisfiesPzs?: boolean;
	public readonly sizeBytes?: string;
}
export interface ProjectsLocationsRepositoriesComponentOutputs {
	readonly satisfiesPzs?: boolean;
	readonly sizeBytes?: string;
}
export interface ProjectsLocationsRepositoriesComponentInputs {
	readonly createTime?: string;
	readonly description?: string;
	readonly format?: string;
	readonly kmsKeyName?: string;
	readonly labels?: { [P in string]: string };
	readonly name: string;
	readonly parent: string;
	readonly repositoryId?: string;
	readonly updateTime?: string;
}
export interface Repository {
	readonly createTime?: string;
	readonly description?: string;
	readonly format?: string;
	readonly kmsKeyName?: string;
	readonly labels?: { [P in string]: string };
	readonly name?: string;
	readonly satisfiesPzs?: boolean;
	readonly sizeBytes?: string;
	readonly updateTime?: string;
}
export default {
	ProjectsLocationsRepositories: ProjectsLocationsRepositories,
};

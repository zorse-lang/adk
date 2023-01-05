import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationsRepositoriesPackages
	extends GdmResource<ProjectsLocationsRepositoriesPackagesComponentInputs>
	implements ProjectsLocationsRepositoriesPackagesComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsRepositoriesPackagesComponentInputs) {
		super(entity, options.name, "artifactregistry.v1beta1.ProjectsLocationsRepositoriesPackages", options);
	}
}
export interface ProjectsLocationsRepositoriesPackagesComponentOutputs {}
export interface ProjectsLocationsRepositoriesPackagesComponentInputs {
	readonly createTime?: string;
	readonly displayName?: string;
	readonly name: string;
	readonly updateTime?: string;
}
export interface Package {
	readonly createTime?: string;
	readonly displayName?: string;
	readonly name?: string;
	readonly updateTime?: string;
}
export default {
	ProjectsLocationsRepositoriesPackages: ProjectsLocationsRepositoriesPackages,
};

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
	readonly createTime?: string | undefined;
	readonly displayName?: string | undefined;
	readonly name: string;
	readonly updateTime?: string | undefined;
	readonly type: string;
}
export interface Package {
	readonly createTime?: string | undefined;
	readonly displayName?: string | undefined;
	readonly name?: string | undefined;
	readonly updateTime?: string | undefined;
}
export default {
	ProjectsLocationsRepositoriesPackages: ProjectsLocationsRepositoriesPackages,
};

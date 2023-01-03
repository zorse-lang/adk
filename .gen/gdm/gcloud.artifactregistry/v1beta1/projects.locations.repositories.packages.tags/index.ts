import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationsRepositoriesPackagesTags
	extends GdmResource<ProjectsLocationsRepositoriesPackagesTagsComponentInputs>
	implements ProjectsLocationsRepositoriesPackagesTagsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsRepositoriesPackagesTagsComponentInputs) {
		super(entity, options.name, "artifactregistry.v1beta1.ProjectsLocationsRepositoriesPackagesTags", options);
	}
}
export interface ProjectsLocationsRepositoriesPackagesTagsComponentOutputs {}
export interface ProjectsLocationsRepositoriesPackagesTagsComponentInputs {
	readonly name: string;
	readonly parent: string;
	readonly tagId?: string | undefined;
	readonly version?: string | undefined;
	readonly type: string;
}
export interface Tag {
	readonly name?: string | undefined;
	readonly version?: string | undefined;
}
export default {
	ProjectsLocationsRepositoriesPackagesTags: ProjectsLocationsRepositoriesPackagesTags,
};

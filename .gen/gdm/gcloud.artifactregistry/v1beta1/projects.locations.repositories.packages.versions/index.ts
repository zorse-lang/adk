import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationsRepositoriesPackagesVersions
	extends GdmResource<ProjectsLocationsRepositoriesPackagesVersionsComponentInputs>
	implements ProjectsLocationsRepositoriesPackagesVersionsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsRepositoriesPackagesVersionsComponentInputs) {
		super(entity, options.name, "artifactregistry.v1beta1.ProjectsLocationsRepositoriesPackagesVersions", options);
	}
	public readonly relatedTags?: Tag[];
}
export interface ProjectsLocationsRepositoriesPackagesVersionsComponentOutputs {
	readonly relatedTags?: Tag[];
}
export interface ProjectsLocationsRepositoriesPackagesVersionsComponentInputs {
	readonly createTime?: string;
	readonly description?: string;
	readonly name: string;
	readonly updateTime?: string;
}
export interface Tag {
	readonly name?: string;
	readonly version?: string;
}
export interface Version {
	readonly createTime?: string;
	readonly description?: string;
	readonly name?: string;
	readonly relatedTags?: Tag[];
	readonly updateTime?: string;
}
export default {
	ProjectsLocationsRepositoriesPackagesVersions: ProjectsLocationsRepositoriesPackagesVersions,
};

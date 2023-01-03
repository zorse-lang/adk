import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationsRepositoriesPackagesVersions
	extends GdmResource<ProjectsLocationsRepositoriesPackagesVersionsComponentInputs>
	implements ProjectsLocationsRepositoriesPackagesVersionsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsRepositoriesPackagesVersionsComponentInputs) {
		super(entity, options.name, "artifactregistry.v1beta1.ProjectsLocationsRepositoriesPackagesVersions", options);
	}
	public readonly relatedTags?: Tag[] | undefined;
}
export interface ProjectsLocationsRepositoriesPackagesVersionsComponentOutputs {
	readonly relatedTags?: Tag[] | undefined;
}
export interface ProjectsLocationsRepositoriesPackagesVersionsComponentInputs {
	readonly createTime?: string | undefined;
	readonly description?: string | undefined;
	readonly name: string;
	readonly updateTime?: string | undefined;
	readonly type: string;
}
export interface Tag {
	readonly name?: string | undefined;
	readonly version?: string | undefined;
}
export interface Version {
	readonly createTime?: string | undefined;
	readonly description?: string | undefined;
	readonly name?: string | undefined;
	readonly relatedTags?: Tag[] | undefined;
	readonly updateTime?: string | undefined;
}
export default {
	ProjectsLocationsRepositoriesPackagesVersions: ProjectsLocationsRepositoriesPackagesVersions,
};

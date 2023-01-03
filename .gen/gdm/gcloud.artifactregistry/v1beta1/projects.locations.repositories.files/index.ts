import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationsRepositoriesFiles
	extends GdmResource<ProjectsLocationsRepositoriesFilesComponentInputs>
	implements ProjectsLocationsRepositoriesFilesComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsRepositoriesFilesComponentInputs) {
		super(entity, options.name, "artifactregistry.v1beta1.ProjectsLocationsRepositoriesFiles", options);
	}
}
export interface ProjectsLocationsRepositoriesFilesComponentOutputs {}
export interface ProjectsLocationsRepositoriesFilesComponentInputs {
	readonly createTime?: string | undefined;
	readonly hashes?: Hash[] | undefined;
	readonly name: string;
	readonly owner?: string | undefined;
	readonly sizeBytes?: string | undefined;
	readonly updateTime?: string | undefined;
	readonly type: string;
}
export interface File {
	readonly createTime?: string | undefined;
	readonly hashes?: Hash[] | undefined;
	readonly name?: string | undefined;
	readonly owner?: string | undefined;
	readonly sizeBytes?: string | undefined;
	readonly updateTime?: string | undefined;
}
export interface Hash {
	readonly type?: string | undefined;
	readonly value?: string | undefined;
}
export default {
	ProjectsLocationsRepositoriesFiles: ProjectsLocationsRepositoriesFiles,
};

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
	readonly createTime?: string;
	readonly hashes?: Hash[];
	readonly name: string;
	readonly owner?: string;
	readonly sizeBytes?: string;
	readonly updateTime?: string;
}
export interface File {
	readonly createTime?: string;
	readonly hashes?: Hash[];
	readonly name?: string;
	readonly owner?: string;
	readonly sizeBytes?: string;
	readonly updateTime?: string;
}
export interface Hash {
	readonly type?: string;
	readonly value?: string;
}
export default {
	ProjectsLocationsRepositoriesFiles: ProjectsLocationsRepositoriesFiles,
};

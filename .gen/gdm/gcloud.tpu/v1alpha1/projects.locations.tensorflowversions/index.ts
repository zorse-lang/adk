import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationsTensorflowVersions
	extends GdmResource<ProjectsLocationsTensorflowVersionsComponentInputs>
	implements ProjectsLocationsTensorflowVersionsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsTensorflowVersionsComponentInputs) {
		super(entity, options.name, "tpu.v1alpha1.ProjectsLocationsTensorflowVersions", options);
	}
}
export interface ProjectsLocationsTensorflowVersionsComponentOutputs {}
export interface ProjectsLocationsTensorflowVersionsComponentInputs {
	readonly name: string;
	readonly version?: string | undefined;
	readonly type: string;
}
export interface TensorFlowVersion {
	readonly name?: string | undefined;
	readonly version?: string | undefined;
}
export default {
	ProjectsLocationsTensorflowVersions: ProjectsLocationsTensorflowVersions,
};

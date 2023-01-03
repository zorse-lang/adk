import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationsAcceleratorTypes
	extends GdmResource<ProjectsLocationsAcceleratorTypesComponentInputs>
	implements ProjectsLocationsAcceleratorTypesComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsAcceleratorTypesComponentInputs) {
		super(entity, options.name, "tpu.v1alpha1.ProjectsLocationsAcceleratorTypes", options);
	}
}
export interface ProjectsLocationsAcceleratorTypesComponentOutputs {}
export interface ProjectsLocationsAcceleratorTypesComponentInputs {
	readonly name: string;
	readonly type: string;
}
export interface AcceleratorType {
	readonly name?: string | undefined;
	readonly type?: string | undefined;
}
export default {
	ProjectsLocationsAcceleratorTypes: ProjectsLocationsAcceleratorTypes,
};

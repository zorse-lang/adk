import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationsKeyRings
	extends GdmResource<ProjectsLocationsKeyRingsComponentInputs>
	implements ProjectsLocationsKeyRingsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsKeyRingsComponentInputs) {
		super(entity, options.name, "cloudkms.v1.ProjectsLocationsKeyRings", options);
	}
	public readonly createTime?: string;
}
export interface ProjectsLocationsKeyRingsComponentOutputs {
	readonly createTime?: string;
}
export interface ProjectsLocationsKeyRingsComponentInputs {
	readonly keyRingId: string;
	readonly name: string;
	readonly parent: string;
}
export interface KeyRing {
	readonly createTime?: string;
	readonly name?: string;
}
export default {
	ProjectsLocationsKeyRings: ProjectsLocationsKeyRings,
};

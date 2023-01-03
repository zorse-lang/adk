import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsLocationsKeyRings
	extends GdmResource<ProjectsLocationsKeyRingsComponentInputs>
	implements ProjectsLocationsKeyRingsComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsLocationsKeyRingsComponentInputs) {
		super(entity, options.name, "cloudkms.v1.ProjectsLocationsKeyRings", options);
	}
	public readonly createTime?: string | undefined;
}
export interface ProjectsLocationsKeyRingsComponentOutputs {
	readonly createTime?: string | undefined;
}
export interface ProjectsLocationsKeyRingsComponentInputs {
	readonly keyRingId: string;
	readonly name: string;
	readonly parent: string;
	readonly type: string;
}
export interface KeyRing {
	readonly createTime?: string | undefined;
	readonly name?: string | undefined;
}
export default {
	ProjectsLocationsKeyRings: ProjectsLocationsKeyRings,
};

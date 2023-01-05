import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ProjectsManagedZones
	extends GdmResource<ProjectsManagedZonesComponentInputs>
	implements ProjectsManagedZonesComponentOutputs
{
	constructor(entity: ADKEntity, options: ProjectsManagedZonesComponentInputs) {
		super(entity, options.name, "dns.v1alpha2.ProjectsManagedZones", options);
	}
}
export interface ProjectsManagedZonesComponentOutputs {}
export interface ProjectsManagedZonesComponentInputs {
	readonly name: string;
}
export default {
	ProjectsManagedZones: ProjectsManagedZones,
};

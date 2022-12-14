import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class RegionInstances
	extends GdmResource<RegionInstancesComponentInputs>
	implements RegionInstancesComponentOutputs
{
	constructor(entity: ADKEntity, options: RegionInstancesComponentInputs) {
		super(entity, options.name, "compute.v1.RegionInstances", options);
	}
}
export interface RegionInstancesComponentOutputs {}
export interface RegionInstancesComponentInputs {
	readonly name: string;
}
export default {
	RegionInstances: RegionInstances,
};

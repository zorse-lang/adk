import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class MonitoredResourceDescriptors
	extends GdmResource<MonitoredResourceDescriptorsComponentInputs>
	implements MonitoredResourceDescriptorsComponentOutputs
{
	constructor(entity: ADKEntity, options: MonitoredResourceDescriptorsComponentInputs) {
		super(entity, options.name, "logging.v2.MonitoredResourceDescriptors", options);
	}
}
export interface MonitoredResourceDescriptorsComponentOutputs {}
export interface MonitoredResourceDescriptorsComponentInputs {
	readonly name: string;
}
export default {
	MonitoredResourceDescriptors: MonitoredResourceDescriptors,
};

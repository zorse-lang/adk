import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ServicesConsumers
	extends GdmResource<ServicesConsumersComponentInputs>
	implements ServicesConsumersComponentOutputs
{
	constructor(entity: ADKEntity, options: ServicesConsumersComponentInputs) {
		super(entity, options.name, "servicemanagement.v1.ServicesConsumers", options);
	}
}
export interface ServicesConsumersComponentOutputs {}
export interface ServicesConsumersComponentInputs {
	readonly type: string;
	readonly name: string;
}
export default {
	ServicesConsumers: ServicesConsumers,
};

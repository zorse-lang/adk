import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ResourceKeys extends GdmResource<ResourceKeysComponentInputs> implements ResourceKeysComponentOutputs {
	constructor(entity: ADKEntity, options: ResourceKeysComponentInputs) {
		super(entity, options.name, "logging.v2.ResourceKeys", options);
	}
}
export interface ResourceKeysComponentOutputs {}
export interface ResourceKeysComponentInputs {
	readonly type: string;
	readonly name: string;
}
export default {
	ResourceKeys: ResourceKeys,
};

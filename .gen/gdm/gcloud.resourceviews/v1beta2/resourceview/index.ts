import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ResourceView extends GdmResource<ResourceViewComponentInputs> implements ResourceViewComponentOutputs {
	constructor(entity: ADKEntity, options: ResourceViewComponentInputs) {
		super(entity, options.name, "resourceviews.v1beta2.ResourceView", options);
	}
	public readonly id?: string;
	public readonly selfLink?: string;
}
export interface ResourceViewComponentOutputs {
	readonly id?: string;
	readonly selfLink?: string;
}
export interface ResourceViewComponentInputs {
	readonly creationTimestamp?: string;
	readonly description?: string;
	readonly endpoints?: ServiceEndpoint[];
	readonly fingerprint?: string;
	readonly kind?: string;
	readonly labels?: Label[];
	readonly name: string;
	readonly network?: string;
	readonly resources?: string[];
	readonly size?: number;
}
export interface Label {
	readonly key?: string;
	readonly value?: string;
}
export interface ServiceEndpoint {
	readonly name?: string;
	readonly port?: number;
}
export default {
	ResourceView: ResourceView,
};

import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ResourceView extends GdmResource<ResourceViewComponentInputs> implements ResourceViewComponentOutputs {
	constructor(entity: ADKEntity, options: ResourceViewComponentInputs) {
		super(entity, options.name, "resourceviews.v1beta2.ResourceView", options);
	}
	public readonly id?: string | undefined;
	public readonly selfLink?: string | undefined;
}
export interface ResourceViewComponentOutputs {
	readonly id?: string | undefined;
	readonly selfLink?: string | undefined;
}
export interface ResourceViewComponentInputs {
	readonly creationTimestamp?: string | undefined;
	readonly description?: string | undefined;
	readonly endpoints?: ServiceEndpoint[] | undefined;
	readonly fingerprint?: string | undefined;
	readonly kind?: string | undefined;
	readonly labels?: Label[] | undefined;
	readonly name: string;
	readonly network?: string | undefined;
	readonly resources?: string[] | undefined;
	readonly size?: number | undefined;
	readonly type: string;
}
export interface Label {
	readonly key?: string | undefined;
	readonly value?: string | undefined;
}
export interface ServiceEndpoint {
	readonly name?: string | undefined;
	readonly port?: number | undefined;
}
export default {
	ResourceView: ResourceView,
};

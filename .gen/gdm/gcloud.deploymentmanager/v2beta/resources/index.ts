import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Resources extends GdmResource<ResourcesComponentInputs> implements ResourcesComponentOutputs {
	constructor(entity: ADKEntity, options: ResourcesComponentInputs) {
		super(entity, options.name, "deploymentmanager.v2beta.Resources", options);
	}
	public readonly finalProperties?: string;
	public readonly insertTime?: string;
	public readonly manifest?: string;
	public readonly update?: ResourceUpdate;
	public readonly updateTime?: string;
	public readonly url?: string;
	public readonly warnings?: Array<{ code?: string; data?: Array<{ key?: string; value?: string }>; message?: string }>;
}
export interface ResourcesComponentOutputs {
	readonly finalProperties?: string;
	readonly insertTime?: string;
	readonly manifest?: string;
	readonly update?: ResourceUpdate;
	readonly updateTime?: string;
	readonly url?: string;
	readonly warnings?: Array<{ code?: string; data?: Array<{ key?: string; value?: string }>; message?: string }>;
}
export interface ResourcesComponentInputs {
	readonly accessControl?: ResourceAccessControl;
	readonly id?: string;
	readonly name: string;
}
export interface Resource {
	readonly accessControl?: ResourceAccessControl;
	readonly finalProperties?: string;
	readonly id?: string;
	readonly insertTime?: string;
	readonly manifest?: string;
	readonly name?: string;
	readonly properties?: string;
	readonly type?: string;
	readonly update?: ResourceUpdate;
	readonly updateTime?: string;
	readonly url?: string;
	readonly warnings?: Array<{ code?: string; data?: Array<{ key?: string; value?: string }>; message?: string }>;
}
export interface ResourceAccessControl {
	readonly gcpIamPolicy?: string;
}
export interface ResourceUpdate {
	readonly accessControl?: ResourceAccessControl;
	readonly error?: { errors?: Array<{ code?: string; location?: string; message?: string }> };
	readonly finalProperties?: string;
	readonly intent?: string;
	readonly manifest?: string;
	readonly properties?: string;
	readonly state?: string;
	readonly warnings?: Array<{ code?: string; data?: Array<{ key?: string; value?: string }>; message?: string }>;
}
export default {
	Resources: Resources,
};

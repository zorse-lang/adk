import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Resources extends GdmResource<ResourcesComponentInputs> implements ResourcesComponentOutputs {
	constructor(entity: ADKEntity, options: ResourcesComponentInputs) {
		super(entity, options.name, "deploymentmanager.v2beta.Resources", options);
	}
	public readonly finalProperties?: string | undefined;
	public readonly insertTime?: string | undefined;
	public readonly manifest?: string | undefined;
	public readonly update?: ResourceUpdate | undefined;
	public readonly updateTime?: string | undefined;
	public readonly url?: string | undefined;
	public readonly warnings?:
		| Array<{ code?: string; data?: Array<{ key?: string; value?: string }>; message?: string }>
		| undefined;
}
export interface ResourcesComponentOutputs {
	readonly finalProperties?: string | undefined;
	readonly insertTime?: string | undefined;
	readonly manifest?: string | undefined;
	readonly update?: ResourceUpdate | undefined;
	readonly updateTime?: string | undefined;
	readonly url?: string | undefined;
	readonly warnings?:
		| Array<{ code?: string; data?: Array<{ key?: string; value?: string }>; message?: string }>
		| undefined;
}
export interface ResourcesComponentInputs {
	readonly accessControl?: ResourceAccessControl | undefined;
	readonly id?: string | undefined;
	readonly name: string;
	readonly type: string;
}
export interface Resource {
	readonly accessControl?: ResourceAccessControl | undefined;
	readonly finalProperties?: string | undefined;
	readonly id?: string | undefined;
	readonly insertTime?: string | undefined;
	readonly manifest?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: string | undefined;
	readonly type?: string | undefined;
	readonly update?: ResourceUpdate | undefined;
	readonly updateTime?: string | undefined;
	readonly url?: string | undefined;
	readonly warnings?:
		| Array<{ code?: string; data?: Array<{ key?: string; value?: string }>; message?: string }>
		| undefined;
}
export interface ResourceAccessControl {
	readonly gcpIamPolicy?: string | undefined;
}
export interface ResourceUpdate {
	readonly accessControl?: ResourceAccessControl | undefined;
	readonly error?: { errors?: Array<{ code?: string; location?: string; message?: string }> } | undefined;
	readonly finalProperties?: string | undefined;
	readonly intent?: string | undefined;
	readonly manifest?: string | undefined;
	readonly properties?: string | undefined;
	readonly state?: string | undefined;
	readonly warnings?:
		| Array<{ code?: string; data?: Array<{ key?: string; value?: string }>; message?: string }>
		| undefined;
}
export default {
	Resources: Resources,
};

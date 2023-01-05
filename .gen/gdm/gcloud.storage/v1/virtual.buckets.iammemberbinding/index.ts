import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class VirtualBucketsIamMemberBinding
	extends GdmResource<VirtualBucketsIamMemberBindingComponentInputs>
	implements VirtualBucketsIamMemberBindingComponentOutputs
{
	constructor(entity: ADKEntity, options: VirtualBucketsIamMemberBindingComponentInputs) {
		super(entity, options.name, "storage.v1.VirtualBucketsIamMemberBinding", options);
	}
}
export interface VirtualBucketsIamMemberBindingComponentOutputs {}
export interface VirtualBucketsIamMemberBindingComponentInputs {
	readonly bindings?: Array<{ condition?: Expr; members?: string[]; role?: string }>;
	readonly bucket: string;
	readonly etag?: string;
	readonly kind?: string;
	readonly resourceId?: string;
	readonly userProject?: string;
	readonly version?: number;
	readonly name: string;
}
export interface Expr {
	readonly description?: string;
	readonly expression?: string;
	readonly location?: string;
	readonly title?: string;
}
export interface Policy {
	readonly bindings?: Array<{ condition?: Expr; members?: string[]; role?: string }>;
	readonly etag?: string;
	readonly kind?: string;
	readonly resourceId?: string;
	readonly version?: number;
}
export default {
	VirtualBucketsIamMemberBinding: VirtualBucketsIamMemberBinding,
};

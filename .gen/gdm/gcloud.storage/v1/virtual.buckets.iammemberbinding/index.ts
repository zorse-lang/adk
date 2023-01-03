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
	readonly bindings?: Array<{ condition?: Expr; members?: string[]; role?: string }> | undefined;
	readonly bucket: string;
	readonly etag?: string | undefined;
	readonly kind?: string | undefined;
	readonly resourceId?: string | undefined;
	readonly userProject?: string | undefined;
	readonly version?: number | undefined;
	readonly type: string;
	readonly name: string;
}
export interface Expr {
	readonly description?: string | undefined;
	readonly expression?: string | undefined;
	readonly location?: string | undefined;
	readonly title?: string | undefined;
}
export interface Policy {
	readonly bindings?: Array<{ condition?: Expr; members?: string[]; role?: string }> | undefined;
	readonly etag?: string | undefined;
	readonly kind?: string | undefined;
	readonly resourceId?: string | undefined;
	readonly version?: number | undefined;
}
export default {
	VirtualBucketsIamMemberBinding: VirtualBucketsIamMemberBinding,
};

import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class BucketAccessControl
	extends GdmResource<BucketAccessControlComponentInputs>
	implements BucketAccessControlComponentOutputs
{
	constructor(entity: ADKEntity, options: BucketAccessControlComponentInputs) {
		super(entity, options.name, "storage.v1.bucketAccessControl", options);
	}
}
export interface BucketAccessControlComponentOutputs {}
export interface BucketAccessControlComponentInputs {
	readonly bucket?: string | undefined;
	readonly domain?: string | undefined;
	readonly email?: string | undefined;
	readonly entity?: string | undefined;
	readonly entityId?: string | undefined;
	readonly etag?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly projectTeam?: { projectNumber?: string; team?: string } | undefined;
	readonly role?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly type: string;
	readonly name: string;
}
export default {
	BucketAccessControl: BucketAccessControl,
};

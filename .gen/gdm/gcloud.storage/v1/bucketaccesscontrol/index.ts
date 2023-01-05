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
	readonly bucket?: string;
	readonly domain?: string;
	readonly email?: string;
	readonly entity?: string;
	readonly entityId?: string;
	readonly etag?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly projectTeam?: { projectNumber?: string; team?: string };
	readonly role?: string;
	readonly selfLink?: string;
	readonly name: string;
}
export default {
	BucketAccessControl: BucketAccessControl,
};

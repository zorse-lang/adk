import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class BucketAccessControls
	extends GdmResource<BucketAccessControlsComponentInputs>
	implements BucketAccessControlsComponentOutputs
{
	constructor(entity: ADKEntity, options: BucketAccessControlsComponentInputs) {
		super(entity, options.name, "storage.v1.BucketAccessControls", options);
	}
}
export interface BucketAccessControlsComponentOutputs {}
export interface BucketAccessControlsComponentInputs {
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
	readonly userProject?: string | undefined;
	readonly type: string;
	readonly name: string;
}
export interface BucketAccessControl {
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
}
export default {
	BucketAccessControls: BucketAccessControls,
};

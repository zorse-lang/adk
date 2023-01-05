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
	readonly userProject?: string;
	readonly name: string;
}
export interface BucketAccessControl {
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
}
export default {
	BucketAccessControls: BucketAccessControls,
};

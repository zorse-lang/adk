import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ObjectAccessControls
	extends GdmResource<ObjectAccessControlsComponentInputs>
	implements ObjectAccessControlsComponentOutputs
{
	constructor(entity: ADKEntity, options: ObjectAccessControlsComponentInputs) {
		super(entity, options.name, "storage.v1.ObjectAccessControls", options);
	}
}
export interface ObjectAccessControlsComponentOutputs {}
export interface ObjectAccessControlsComponentInputs {
	readonly bucket?: string;
	readonly domain?: string;
	readonly email?: string;
	readonly entity?: string;
	readonly entityId?: string;
	readonly etag?: string;
	readonly generation?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly object?: string;
	readonly projectTeam?: { projectNumber?: string; team?: string };
	readonly role?: string;
	readonly selfLink?: string;
	readonly userProject?: string;
	readonly name: string;
}
export interface ObjectAccessControl {
	readonly bucket?: string;
	readonly domain?: string;
	readonly email?: string;
	readonly entity?: string;
	readonly entityId?: string;
	readonly etag?: string;
	readonly generation?: string;
	readonly id?: string;
	readonly kind?: string;
	readonly object?: string;
	readonly projectTeam?: { projectNumber?: string; team?: string };
	readonly role?: string;
	readonly selfLink?: string;
}
export default {
	ObjectAccessControls: ObjectAccessControls,
};

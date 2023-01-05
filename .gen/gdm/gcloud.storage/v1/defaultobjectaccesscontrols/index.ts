import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class DefaultObjectAccessControls
	extends GdmResource<DefaultObjectAccessControlsComponentInputs>
	implements DefaultObjectAccessControlsComponentOutputs
{
	constructor(entity: ADKEntity, options: DefaultObjectAccessControlsComponentInputs) {
		super(entity, options.name, "storage.v1.DefaultObjectAccessControls", options);
	}
}
export interface DefaultObjectAccessControlsComponentOutputs {}
export interface DefaultObjectAccessControlsComponentInputs {
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
	DefaultObjectAccessControls: DefaultObjectAccessControls,
};

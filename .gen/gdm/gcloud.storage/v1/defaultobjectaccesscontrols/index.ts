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
	readonly bucket?: string | undefined;
	readonly domain?: string | undefined;
	readonly email?: string | undefined;
	readonly entity?: string | undefined;
	readonly entityId?: string | undefined;
	readonly etag?: string | undefined;
	readonly generation?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly object?: string | undefined;
	readonly projectTeam?: { projectNumber?: string; team?: string } | undefined;
	readonly role?: string | undefined;
	readonly selfLink?: string | undefined;
	readonly userProject?: string | undefined;
	readonly type: string;
	readonly name: string;
}
export interface ObjectAccessControl {
	readonly bucket?: string | undefined;
	readonly domain?: string | undefined;
	readonly email?: string | undefined;
	readonly entity?: string | undefined;
	readonly entityId?: string | undefined;
	readonly etag?: string | undefined;
	readonly generation?: string | undefined;
	readonly id?: string | undefined;
	readonly kind?: string | undefined;
	readonly object?: string | undefined;
	readonly projectTeam?: { projectNumber?: string; team?: string } | undefined;
	readonly role?: string | undefined;
	readonly selfLink?: string | undefined;
}
export default {
	DefaultObjectAccessControls: DefaultObjectAccessControls,
};

import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class ObjectAccessControl
	extends GdmResource<ObjectAccessControlComponentInputs>
	implements ObjectAccessControlComponentOutputs
{
	constructor(entity: ADKEntity, options: ObjectAccessControlComponentInputs) {
		super(entity, options.name, "storage.v1.objectAccessControl", options);
	}
}
export interface ObjectAccessControlComponentOutputs {}
export interface ObjectAccessControlComponentInputs {
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
	readonly type: string;
	readonly name: string;
}
export default {
	ObjectAccessControl: ObjectAccessControl,
};

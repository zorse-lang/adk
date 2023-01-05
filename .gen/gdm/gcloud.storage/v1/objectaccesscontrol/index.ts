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
	readonly name: string;
}
export default {
	ObjectAccessControl: ObjectAccessControl,
};

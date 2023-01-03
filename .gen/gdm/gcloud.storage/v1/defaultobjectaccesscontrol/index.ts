import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

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
export default {};

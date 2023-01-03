import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export interface ServiceAccount {
	readonly description?: string | undefined;
	readonly disabled?: boolean | undefined;
	readonly displayName?: string | undefined;
	readonly email?: string | undefined;
	readonly etag?: string | undefined;
	readonly name?: string | undefined;
	readonly oauth2ClientId?: string | undefined;
	readonly projectId?: string | undefined;
	readonly uniqueId?: string | undefined;
}
export default {};

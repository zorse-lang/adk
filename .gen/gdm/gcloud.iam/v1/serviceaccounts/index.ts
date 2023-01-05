import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export interface ServiceAccount {
	readonly description?: string;
	readonly disabled?: boolean;
	readonly displayName?: string;
	readonly email?: string;
	readonly etag?: string;
	readonly name?: string;
	readonly oauth2ClientId?: string;
	readonly projectId?: string;
	readonly uniqueId?: string;
}
export default {};

import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Apps extends GdmResource<AppsComponentInputs> implements AppsComponentOutputs {
	constructor(entity: ADKEntity, options: AppsComponentInputs) {
		super(entity, options.name, "appengine.v1.Apps", options);
	}
}
export interface AppsComponentOutputs {}
export interface AppsComponentInputs {
	readonly authDomain?: string | undefined;
	readonly codeBucket?: string | undefined;
	readonly databaseType?: string | undefined;
	readonly defaultBucket?: string | undefined;
	readonly defaultCookieExpiration?: string | undefined;
	readonly defaultHostname?: string | undefined;
	readonly dispatchRules?: UrlDispatchRule[] | undefined;
	readonly featureSettings?: FeatureSettings | undefined;
	readonly gcrDomain?: string | undefined;
	readonly iap?: IdentityAwareProxy | undefined;
	readonly id?: string | undefined;
	readonly locationId?: string | undefined;
	readonly name: string;
	readonly serviceAccount?: string | undefined;
	readonly servingStatus?: string | undefined;
	readonly type: string;
}
export interface Application {
	readonly authDomain?: string | undefined;
	readonly codeBucket?: string | undefined;
	readonly databaseType?: string | undefined;
	readonly defaultBucket?: string | undefined;
	readonly defaultCookieExpiration?: string | undefined;
	readonly defaultHostname?: string | undefined;
	readonly dispatchRules?: UrlDispatchRule[] | undefined;
	readonly featureSettings?: FeatureSettings | undefined;
	readonly gcrDomain?: string | undefined;
	readonly iap?: IdentityAwareProxy | undefined;
	readonly id?: string | undefined;
	readonly locationId?: string | undefined;
	readonly name?: string | undefined;
	readonly serviceAccount?: string | undefined;
	readonly servingStatus?: string | undefined;
}
export interface FeatureSettings {
	readonly splitHealthChecks?: boolean | undefined;
	readonly useContainerOptimizedOs?: boolean | undefined;
}
export interface IdentityAwareProxy {
	readonly enabled?: boolean | undefined;
	readonly oauth2ClientId?: string | undefined;
	readonly oauth2ClientSecret?: string | undefined;
	readonly oauth2ClientSecretSha256?: string | undefined;
}
export interface UrlDispatchRule {
	readonly domain?: string | undefined;
	readonly path?: string | undefined;
	readonly service?: string | undefined;
}
export default {
	Apps: Apps,
};

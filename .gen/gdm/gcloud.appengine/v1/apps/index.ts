import { GdmResource, Entity as ADKEntity } from "@zorse/adk";

export class Apps extends GdmResource<AppsComponentInputs> implements AppsComponentOutputs {
	constructor(entity: ADKEntity, options: AppsComponentInputs) {
		super(entity, options.name, "appengine.v1.Apps", options);
	}
}
export interface AppsComponentOutputs {}
export interface AppsComponentInputs {
	readonly authDomain?: string;
	readonly codeBucket?: string;
	readonly databaseType?: string;
	readonly defaultBucket?: string;
	readonly defaultCookieExpiration?: string;
	readonly defaultHostname?: string;
	readonly dispatchRules?: UrlDispatchRule[];
	readonly featureSettings?: FeatureSettings;
	readonly gcrDomain?: string;
	readonly iap?: IdentityAwareProxy;
	readonly id?: string;
	readonly locationId?: string;
	readonly name: string;
	readonly serviceAccount?: string;
	readonly servingStatus?: string;
}
export interface Application {
	readonly authDomain?: string;
	readonly codeBucket?: string;
	readonly databaseType?: string;
	readonly defaultBucket?: string;
	readonly defaultCookieExpiration?: string;
	readonly defaultHostname?: string;
	readonly dispatchRules?: UrlDispatchRule[];
	readonly featureSettings?: FeatureSettings;
	readonly gcrDomain?: string;
	readonly iap?: IdentityAwareProxy;
	readonly id?: string;
	readonly locationId?: string;
	readonly name?: string;
	readonly serviceAccount?: string;
	readonly servingStatus?: string;
}
export interface FeatureSettings {
	readonly splitHealthChecks?: boolean;
	readonly useContainerOptimizedOs?: boolean;
}
export interface IdentityAwareProxy {
	readonly enabled?: boolean;
	readonly oauth2ClientId?: string;
	readonly oauth2ClientSecret?: string;
	readonly oauth2ClientSecretSha256?: string;
}
export interface UrlDispatchRule {
	readonly domain?: string;
	readonly path?: string;
	readonly service?: string;
}
export default {
	Apps: Apps,
};

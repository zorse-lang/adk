import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class webtests extends ArmResource<webtestsComponentInputs> implements webtestsComponentOutputs {
	constructor(entity: ADKEntity, options: webtestsComponentInputs) {
		super(entity, options.name, "Microsoft.Insights/webtests", "2022-06-15", options);
	}
	public readonly apiVersion: "2022-06-15";
	public readonly id: string;
	public readonly type: "Microsoft.Insights/webtests";
}
export interface webtestsComponentOutputs {
	readonly apiVersion: "2022-06-15";
	readonly id: string;
	readonly type: "Microsoft.Insights/webtests";
}
export interface webtestsComponentInputs {
	readonly kind?: "multistep" | "ping";
	readonly location: string;
	readonly name: string;
	readonly properties?: WebTestProperties;
	readonly tags?: WebtestsResourceTags;
}
export interface HeaderField {
	readonly key?: string;
	readonly value?: string;
}
export interface WebTestGeolocation {
	readonly Id?: string;
}
export interface WebTestProperties {
	readonly Configuration?: WebTestPropertiesConfiguration;
	readonly Description?: string;
	readonly Enabled?: boolean;
	readonly Frequency?: number;
	readonly Kind: "multistep" | "ping";
	readonly Locations: WebTestGeolocation[];
	readonly Name: string;
	readonly provisioningState?: string;
	readonly Request?: WebTestPropertiesRequest;
	readonly RetryEnabled?: boolean;
	readonly SyntheticMonitorId: string;
	readonly Timeout?: number;
	readonly ValidationRules?: WebTestPropertiesValidationRules;
}
export interface WebTestPropertiesConfiguration {
	readonly WebTest?: string;
}
export interface WebTestPropertiesRequest {
	readonly FollowRedirects?: boolean;
	readonly Headers?: HeaderField[];
	readonly HttpVerb?: string;
	readonly ParseDependentRequests?: boolean;
	readonly RequestBody?: string;
	readonly RequestUrl?: string;
}
export interface WebTestPropertiesValidationRules {
	readonly ContentValidation?: WebTestPropertiesValidationRulesContentValidation;
	readonly ExpectedHttpStatusCode?: number;
	readonly IgnoreHttpsStatusCode?: boolean;
	readonly SSLCertRemainingLifetimeCheck?: number;
	readonly SSLCheck?: boolean;
}
export interface WebTestPropertiesValidationRulesContentValidation {
	readonly ContentMatch?: string;
	readonly IgnoreCase?: boolean;
	readonly PassIfTextFound?: boolean;
}
export interface WebtestsResourceTags {
	readonly [key: string]: string;
}
export default {
	webtests: webtests,
};

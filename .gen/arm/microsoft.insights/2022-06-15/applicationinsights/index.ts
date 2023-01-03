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
	readonly kind?: ("multistep" | "ping") | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: WebTestProperties | undefined;
	readonly tags?: WebtestsResourceTags | undefined;
}
export interface HeaderField {
	readonly key?: string | undefined;
	readonly value?: string | undefined;
}
export interface WebTestGeolocation {
	readonly Id?: string | undefined;
}
export interface WebTestProperties {
	readonly Configuration?: WebTestPropertiesConfiguration | undefined;
	readonly Description?: string | undefined;
	readonly Enabled?: boolean | undefined;
	readonly Frequency?: number | undefined;
	readonly Kind: "multistep" | "ping";
	readonly Locations: WebTestGeolocation[];
	readonly Name: string;
	readonly provisioningState?: string | undefined;
	readonly Request?: WebTestPropertiesRequest | undefined;
	readonly RetryEnabled?: boolean | undefined;
	readonly SyntheticMonitorId: string;
	readonly Timeout?: number | undefined;
	readonly ValidationRules?: WebTestPropertiesValidationRules | undefined;
}
export interface WebTestPropertiesConfiguration {
	readonly WebTest?: string | undefined;
}
export interface WebTestPropertiesRequest {
	readonly FollowRedirects?: boolean | undefined;
	readonly Headers?: HeaderField[] | undefined;
	readonly HttpVerb?: string | undefined;
	readonly ParseDependentRequests?: boolean | undefined;
	readonly RequestBody?: string | undefined;
	readonly RequestUrl?: string | undefined;
}
export interface WebTestPropertiesValidationRules {
	readonly ContentValidation?: WebTestPropertiesValidationRulesContentValidation | undefined;
	readonly ExpectedHttpStatusCode?: number | undefined;
	readonly IgnoreHttpsStatusCode?: boolean | undefined;
	readonly SSLCertRemainingLifetimeCheck?: number | undefined;
	readonly SSLCheck?: boolean | undefined;
}
export interface WebTestPropertiesValidationRulesContentValidation {
	readonly ContentMatch?: string | undefined;
	readonly IgnoreCase?: boolean | undefined;
	readonly PassIfTextFound?: boolean | undefined;
}
export interface WebtestsResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	webtests: webtests,
};

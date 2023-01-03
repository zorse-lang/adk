import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class components extends ArmResource<componentsComponentInputs> implements componentsComponentOutputs {
	constructor(entity: ADKEntity, options: componentsComponentInputs) {
		super(entity, options.name, "Microsoft.Insights/components", "2018-05-01-preview", options);
	}
	public readonly apiVersion: "2018-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Insights/components";
}
export interface componentsComponentOutputs {
	readonly apiVersion: "2018-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Insights/components";
}
export interface componentsComponentInputs {
	readonly kind: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: ApplicationInsightsComponentProperties | undefined;
	readonly tags?: ComponentsResourceTags | undefined;
}
export class components_ProactiveDetectionConfigs
	extends ArmResource<components_ProactiveDetectionConfigsComponentInputs>
	implements components_ProactiveDetectionConfigsComponentOutputs
{
	constructor(entity: ADKEntity, options: components_ProactiveDetectionConfigsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Insights/components/ProactiveDetectionConfigs",
			"2018-05-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2018-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Insights/components/ProactiveDetectionConfigs";
}
export interface components_ProactiveDetectionConfigsComponentOutputs {
	readonly apiVersion: "2018-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Insights/components/ProactiveDetectionConfigs";
}
export interface components_ProactiveDetectionConfigsComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ApplicationInsightsComponentProactiveDetectionConfigurationProperties | undefined;
}
export class webtests extends ArmResource<webtestsComponentInputs> implements webtestsComponentOutputs {
	constructor(entity: ADKEntity, options: webtestsComponentInputs) {
		super(entity, options.name, "Microsoft.Insights/webtests", "2018-05-01-preview", options);
	}
	public readonly apiVersion: "2018-05-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Insights/webtests";
}
export interface webtestsComponentOutputs {
	readonly apiVersion: "2018-05-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Insights/webtests";
}
export interface webtestsComponentInputs {
	readonly kind?: "multistep" | undefined;
	readonly location: string;
	readonly name: string;
	readonly properties?: WebTestProperties | undefined;
	readonly tags?: WebtestsResourceTags | undefined;
}
export interface ApplicationInsightsComponentProactiveDetectionConfigurationProperties {
	readonly CustomEmails?: string[] | undefined;
	readonly Enabled?: boolean | undefined;
	readonly LastUpdatedTime?: string | undefined;
	readonly Name?: string | undefined;
	readonly RuleDefinitions?:
		| ApplicationInsightsComponentProactiveDetectionConfigurationPropertiesRuleDefinitions
		| undefined;
	readonly SendEmailsToSubscriptionOwners?: boolean | undefined;
}
export interface ApplicationInsightsComponentProactiveDetectionConfigurationPropertiesRuleDefinitions {
	readonly Description?: string | undefined;
	readonly DisplayName?: string | undefined;
	readonly HelpUrl?: string | undefined;
	readonly IsEnabledByDefault?: boolean | undefined;
	readonly IsHidden?: boolean | undefined;
	readonly IsInPreview?: boolean | undefined;
	readonly Name?: string | undefined;
	readonly SupportsEmailNotifications?: boolean | undefined;
}
export interface ApplicationInsightsComponentProperties {
	readonly AppId?: string | undefined;
	readonly Application_Type: "other" | "web";
	readonly ApplicationId?: string | undefined;
	readonly ConnectionString?: string | undefined;
	readonly CreationDate?: string | undefined;
	readonly DisableIpMasking?: boolean | undefined;
	readonly Flow_Type?: "Bluefield" | undefined;
	readonly HockeyAppId?: string | undefined;
	readonly HockeyAppToken?: string | undefined;
	readonly ImmediatePurgeDataOn30Days?: boolean | undefined;
	readonly IngestionMode?:
		| ("ApplicationInsights" | "ApplicationInsightsWithDiagnosticSettings" | "LogAnalytics")
		| undefined;
	readonly InstrumentationKey?: string | undefined;
	readonly PrivateLinkScopedResources?: PrivateLinkScopedResource[] | undefined;
	readonly provisioningState?: string | undefined;
	readonly publicNetworkAccessForIngestion?: ("Disabled" | "Enabled") | undefined;
	readonly publicNetworkAccessForQuery?: ("Disabled" | "Enabled") | undefined;
	readonly Request_Source?: "rest" | undefined;
	readonly RetentionInDays?: number | undefined;
	readonly SamplingPercentage?: number | undefined;
	readonly TenantId?: string | undefined;
}
export interface ComponentsResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface HeaderField {
	readonly key?: string | undefined;
	readonly value?: string | undefined;
}
export interface PrivateLinkScopedResource {
	readonly ResourceId?: string | undefined;
	readonly ScopeId?: string | undefined;
}
export interface WebTestGeolocation {
	readonly Id?: string | undefined;
}
export interface WebTestProperties {
	readonly Configuration?: WebTestPropertiesConfiguration | undefined;
	readonly Description?: string | undefined;
	readonly Enabled?: boolean | undefined;
	readonly Frequency?: number | undefined;
	readonly Kind: "basic" | "multistep" | "ping";
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
	components: components,
	"components/ProactiveDetectionConfigs": components_ProactiveDetectionConfigs,
	webtests: webtests,
};

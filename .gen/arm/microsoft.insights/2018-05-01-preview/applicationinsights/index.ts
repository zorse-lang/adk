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
	readonly properties?: ApplicationInsightsComponentProperties;
	readonly tags?: ComponentsResourceTags;
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
	readonly location?: string;
	readonly name: string;
	readonly properties?: ApplicationInsightsComponentProactiveDetectionConfigurationProperties;
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
	readonly kind?: "multistep";
	readonly location: string;
	readonly name: string;
	readonly properties?: WebTestProperties;
	readonly tags?: WebtestsResourceTags;
}
export interface ApplicationInsightsComponentProactiveDetectionConfigurationProperties {
	readonly CustomEmails?: string[];
	readonly Enabled?: boolean;
	readonly LastUpdatedTime?: string;
	readonly Name?: string;
	readonly RuleDefinitions?: ApplicationInsightsComponentProactiveDetectionConfigurationPropertiesRuleDefinitions;
	readonly SendEmailsToSubscriptionOwners?: boolean;
}
export interface ApplicationInsightsComponentProactiveDetectionConfigurationPropertiesRuleDefinitions {
	readonly Description?: string;
	readonly DisplayName?: string;
	readonly HelpUrl?: string;
	readonly IsEnabledByDefault?: boolean;
	readonly IsHidden?: boolean;
	readonly IsInPreview?: boolean;
	readonly Name?: string;
	readonly SupportsEmailNotifications?: boolean;
}
export interface ApplicationInsightsComponentProperties {
	readonly AppId?: string;
	readonly Application_Type: "other" | "web";
	readonly ApplicationId?: string;
	readonly ConnectionString?: string;
	readonly CreationDate?: string;
	readonly DisableIpMasking?: boolean;
	readonly Flow_Type?: "Bluefield";
	readonly HockeyAppId?: string;
	readonly HockeyAppToken?: string;
	readonly ImmediatePurgeDataOn30Days?: boolean;
	readonly IngestionMode?: "ApplicationInsights" | "ApplicationInsightsWithDiagnosticSettings" | "LogAnalytics";
	readonly InstrumentationKey?: string;
	readonly PrivateLinkScopedResources?: PrivateLinkScopedResource[];
	readonly provisioningState?: string;
	readonly publicNetworkAccessForIngestion?: "Disabled" | "Enabled";
	readonly publicNetworkAccessForQuery?: "Disabled" | "Enabled";
	readonly Request_Source?: "rest";
	readonly RetentionInDays?: number;
	readonly SamplingPercentage?: number;
	readonly TenantId?: string;
}
export interface ComponentsResourceTags {
	readonly [key: string]: string;
}
export interface HeaderField {
	readonly key?: string;
	readonly value?: string;
}
export interface PrivateLinkScopedResource {
	readonly ResourceId?: string;
	readonly ScopeId?: string;
}
export interface WebTestGeolocation {
	readonly Id?: string;
}
export interface WebTestProperties {
	readonly Configuration?: WebTestPropertiesConfiguration;
	readonly Description?: string;
	readonly Enabled?: boolean;
	readonly Frequency?: number;
	readonly Kind: "basic" | "multistep" | "ping";
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
	components: components,
	"components/ProactiveDetectionConfigs": components_ProactiveDetectionConfigs,
	webtests: webtests,
};

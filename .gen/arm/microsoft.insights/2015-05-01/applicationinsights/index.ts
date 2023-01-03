import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class components extends ArmResource<componentsComponentInputs> implements componentsComponentOutputs {
	constructor(entity: ADKEntity, options: componentsComponentInputs) {
		super(entity, options.name, "Microsoft.Insights/components", "2015-05-01", options);
	}
	public readonly apiVersion: "2015-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Insights/components";
}
export interface componentsComponentOutputs {
	readonly apiVersion: "2015-05-01";
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
export class microsoft_insights_components_analyticsItems
	extends ArmResource<microsoft_insights_components_analyticsItemsComponentInputs>
	implements microsoft_insights_components_analyticsItemsComponentOutputs
{
	constructor(entity: ADKEntity, options: microsoft_insights_components_analyticsItemsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Insights/microsoft.insights/components/analyticsItems",
			"2015-05-01",
			options,
		);
	}
	public readonly apiVersion: "2015-05-01";
	public readonly id: string;
	public readonly type: "microsoft.insights/components/analyticsItems";
}
export interface microsoft_insights_components_analyticsItemsComponentOutputs {
	readonly apiVersion: "2015-05-01";
	readonly id: string;
	readonly type: "microsoft.insights/components/analyticsItems";
}
export interface microsoft_insights_components_analyticsItemsComponentInputs {
	readonly Content?: string | undefined;
	readonly Id?: string | undefined;
	readonly name: string;
	readonly Name?: string | undefined;
	readonly Properties?: ApplicationInsightsComponentAnalyticsItemProperties | undefined;
	readonly Scope?: ("shared" | "user") | undefined;
	readonly TimeCreated?: string | undefined;
	readonly TimeModified?: string | undefined;
	readonly Type?: ("function" | "none" | "query" | "recent") | undefined;
	readonly Version?: string | undefined;
}
export class components_exportconfiguration
	extends ArmResource<components_exportconfigurationComponentInputs>
	implements components_exportconfigurationComponentOutputs
{
	constructor(entity: ADKEntity, options: components_exportconfigurationComponentInputs) {
		super(entity, options.name, "Microsoft.Insights/components/exportconfiguration", "2015-05-01", options);
	}
	public readonly apiVersion: "2015-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Insights/components/exportconfiguration";
}
export interface components_exportconfigurationComponentOutputs {
	readonly apiVersion: "2015-05-01";
	readonly id: string;
	readonly type: "Microsoft.Insights/components/exportconfiguration";
}
export interface components_exportconfigurationComponentInputs {
	readonly ApplicationName?: string | undefined;
	readonly ContainerName?: string | undefined;
	readonly DestinationAccountId?: string | undefined;
	readonly DestinationAddress?: string | undefined;
	readonly DestinationStorageLocationId?: string | undefined;
	readonly DestinationStorageSubscriptionId?: string | undefined;
	readonly DestinationType?: string | undefined;
	readonly ExportId?: string | undefined;
	readonly ExportStatus?: string | undefined;
	readonly InstrumentationKey?: string | undefined;
	readonly IsEnabled?: string | undefined;
	readonly IsUserEnabled?: string | undefined;
	readonly LastGapTime?: string | undefined;
	readonly LastSuccessTime?: string | undefined;
	readonly LastUserUpdate?: string | undefined;
	readonly name: string;
	readonly NotificationQueueEnabled?: string | undefined;
	readonly NotificationQueueUri?: string | undefined;
	readonly PermanentErrorReason?: string | undefined;
	readonly RecordTypes?: string | undefined;
	readonly ResourceGroup?: string | undefined;
	readonly StorageName?: string | undefined;
	readonly SubscriptionId?: string | undefined;
}
export class components_favorites
	extends ArmResource<components_favoritesComponentInputs>
	implements components_favoritesComponentOutputs
{
	constructor(entity: ADKEntity, options: components_favoritesComponentInputs) {
		super(entity, options.name, "Microsoft.Insights/components/favorites", "2015-05-01", options);
	}
	public readonly apiVersion: "2015-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Insights/components/favorites";
}
export interface components_favoritesComponentOutputs {
	readonly apiVersion: "2015-05-01";
	readonly id: string;
	readonly type: "Microsoft.Insights/components/favorites";
}
export interface components_favoritesComponentInputs {
	readonly Category?: string | undefined;
	readonly Config?: string | undefined;
	readonly FavoriteId?: string | undefined;
	readonly FavoriteType?: "shared" | undefined;
	readonly IsGeneratedFromTemplate?: boolean | undefined;
	readonly name: string;
	readonly Name?: string | undefined;
	readonly SourceType?: string | undefined;
	readonly Tags?: string[] | undefined;
	readonly TimeModified?: string | undefined;
	readonly UserId?: string | undefined;
	readonly Version?: string | undefined;
}
export class microsoft_insights_components_myanalyticsItems
	extends ArmResource<microsoft_insights_components_myanalyticsItemsComponentInputs>
	implements microsoft_insights_components_myanalyticsItemsComponentOutputs
{
	constructor(entity: ADKEntity, options: microsoft_insights_components_myanalyticsItemsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Insights/microsoft.insights/components/myanalyticsItems",
			"2015-05-01",
			options,
		);
	}
	public readonly apiVersion: "2015-05-01";
	public readonly id: string;
	public readonly type: "microsoft.insights/components/myanalyticsItems";
}
export interface microsoft_insights_components_myanalyticsItemsComponentOutputs {
	readonly apiVersion: "2015-05-01";
	readonly id: string;
	readonly type: "microsoft.insights/components/myanalyticsItems";
}
export interface microsoft_insights_components_myanalyticsItemsComponentInputs {
	readonly Content?: string | undefined;
	readonly Id?: string | undefined;
	readonly name: string;
	readonly Name?: string | undefined;
	readonly Properties?: ApplicationInsightsComponentAnalyticsItemProperties | undefined;
	readonly Scope?: ("shared" | "user") | undefined;
	readonly TimeCreated?: string | undefined;
	readonly TimeModified?: string | undefined;
	readonly Type?: ("function" | "none" | "query" | "recent") | undefined;
	readonly Version?: string | undefined;
}
export class components_ProactiveDetectionConfigs
	extends ArmResource<components_ProactiveDetectionConfigsComponentInputs>
	implements components_ProactiveDetectionConfigsComponentOutputs
{
	constructor(entity: ADKEntity, options: components_ProactiveDetectionConfigsComponentInputs) {
		super(entity, options.name, "Microsoft.Insights/components/ProactiveDetectionConfigs", "2015-05-01", options);
	}
	public readonly apiVersion: "2015-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Insights/components/ProactiveDetectionConfigs";
}
export interface components_ProactiveDetectionConfigsComponentOutputs {
	readonly apiVersion: "2015-05-01";
	readonly id: string;
	readonly type: "Microsoft.Insights/components/ProactiveDetectionConfigs";
}
export interface components_ProactiveDetectionConfigsComponentInputs {
	readonly CustomEmails?: string[] | undefined;
	readonly Enabled?: boolean | undefined;
	readonly LastUpdatedTime?: string | undefined;
	readonly name: string;
	readonly Name?: string | undefined;
	readonly RuleDefinitions?: ApplicationInsightsComponentProactiveDetectionConfigurationRuleDefinitions | undefined;
	readonly SendEmailsToSubscriptionOwners?: boolean | undefined;
}
export class myWorkbooks extends ArmResource<myWorkbooksComponentInputs> implements myWorkbooksComponentOutputs {
	constructor(entity: ADKEntity, options: myWorkbooksComponentInputs) {
		super(entity, options.name, "Microsoft.Insights/myWorkbooks", "2015-05-01", options);
	}
	public readonly apiVersion: "2015-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Insights/myWorkbooks";
}
export interface myWorkbooksComponentOutputs {
	readonly apiVersion: "2015-05-01";
	readonly id: string;
	readonly type: "Microsoft.Insights/myWorkbooks";
}
export interface myWorkbooksComponentInputs {
	readonly kind?: ("shared" | "user") | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: MyWorkbookProperties | undefined;
	readonly tags?: MyWorkbookResourceTags | undefined;
}
export class webtests extends ArmResource<webtestsComponentInputs> implements webtestsComponentOutputs {
	constructor(entity: ADKEntity, options: webtestsComponentInputs) {
		super(entity, options.name, "Microsoft.Insights/webtests", "2015-05-01", options);
	}
	public readonly apiVersion: "2015-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Insights/webtests";
}
export interface webtestsComponentOutputs {
	readonly apiVersion: "2015-05-01";
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
export class microsoft_insights_workbooks
	extends ArmResource<microsoft_insights_workbooksComponentInputs>
	implements microsoft_insights_workbooksComponentOutputs
{
	constructor(entity: ADKEntity, options: microsoft_insights_workbooksComponentInputs) {
		super(entity, options.name, "Microsoft.Insights/microsoft.insights/workbooks", "2015-05-01", options);
	}
	public readonly apiVersion: "2015-05-01";
	public readonly id: string;
	public readonly type: "microsoft.insights/workbooks";
}
export interface microsoft_insights_workbooksComponentOutputs {
	readonly apiVersion: "2015-05-01";
	readonly id: string;
	readonly type: "microsoft.insights/workbooks";
}
export interface microsoft_insights_workbooksComponentInputs {
	readonly kind?: ("shared" | "user") | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: WorkbookProperties | undefined;
	readonly tags?: WorkbookResourceTags | undefined;
}
export interface ApplicationInsightsComponentAnalyticsItemProperties {
	readonly functionAlias?: string | undefined;
}
export interface ApplicationInsightsComponentProactiveDetectionConfigurationRuleDefinitions {
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
	readonly Request_Source?: "rest" | undefined;
	readonly RetentionInDays?: number | undefined;
	readonly SamplingPercentage?: number | undefined;
	readonly TenantId?: string | undefined;
}
export interface ComponentsResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface MyWorkbookProperties {
	readonly category: string;
	readonly displayName: string;
	readonly serializedData: string;
	readonly sourceId?: string | undefined;
	readonly tags?: string[] | undefined;
	readonly timeModified?: string | undefined;
	readonly userId?: string | undefined;
	readonly version?: string | undefined;
}
export interface MyWorkbookResourceTags {
	readonly "[ key: string ]"?: string | undefined;
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
	readonly Kind: "multistep";
	readonly Locations: WebTestGeolocation[];
	readonly Name: string;
	readonly provisioningState?: string | undefined;
	readonly RetryEnabled?: boolean | undefined;
	readonly SyntheticMonitorId: string;
	readonly Timeout?: number | undefined;
}
export interface WebTestPropertiesConfiguration {
	readonly WebTest?: string | undefined;
}
export interface WebtestsResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface WorkbookProperties {
	readonly category: string;
	readonly kind: "shared" | "user";
	readonly name: string;
	readonly serializedData: string;
	readonly sourceResourceId?: string | undefined;
	readonly tags?: string[] | undefined;
	readonly timeModified?: string | undefined;
	readonly userId: string;
	readonly version?: string | undefined;
	readonly workbookId: string;
}
export interface WorkbookResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	components: components,
	"microsoft.insights/components/analyticsItems": microsoft_insights_components_analyticsItems,
	"components/exportconfiguration": components_exportconfiguration,
	"components/favorites": components_favorites,
	"microsoft.insights/components/myanalyticsItems": microsoft_insights_components_myanalyticsItems,
	"components/ProactiveDetectionConfigs": components_ProactiveDetectionConfigs,
	myWorkbooks: myWorkbooks,
	webtests: webtests,
	"microsoft.insights/workbooks": microsoft_insights_workbooks,
};

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
	readonly properties?: ApplicationInsightsComponentProperties;
	readonly tags?: ComponentsResourceTags;
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
	readonly Content?: string;
	readonly Id?: string;
	readonly name: string;
	readonly Name?: string;
	readonly Properties?: ApplicationInsightsComponentAnalyticsItemProperties;
	readonly Scope?: "shared" | "user";
	readonly TimeCreated?: string;
	readonly TimeModified?: string;
	readonly Type?: "function" | "none" | "query" | "recent";
	readonly Version?: string;
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
	readonly ApplicationName?: string;
	readonly ContainerName?: string;
	readonly DestinationAccountId?: string;
	readonly DestinationAddress?: string;
	readonly DestinationStorageLocationId?: string;
	readonly DestinationStorageSubscriptionId?: string;
	readonly DestinationType?: string;
	readonly ExportId?: string;
	readonly ExportStatus?: string;
	readonly InstrumentationKey?: string;
	readonly IsEnabled?: string;
	readonly IsUserEnabled?: string;
	readonly LastGapTime?: string;
	readonly LastSuccessTime?: string;
	readonly LastUserUpdate?: string;
	readonly name: string;
	readonly NotificationQueueEnabled?: string;
	readonly NotificationQueueUri?: string;
	readonly PermanentErrorReason?: string;
	readonly RecordTypes?: string;
	readonly ResourceGroup?: string;
	readonly StorageName?: string;
	readonly SubscriptionId?: string;
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
	readonly Category?: string;
	readonly Config?: string;
	readonly FavoriteId?: string;
	readonly FavoriteType?: "shared";
	readonly IsGeneratedFromTemplate?: boolean;
	readonly name: string;
	readonly Name?: string;
	readonly SourceType?: string;
	readonly Tags?: string[];
	readonly TimeModified?: string;
	readonly UserId?: string;
	readonly Version?: string;
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
	readonly Content?: string;
	readonly Id?: string;
	readonly name: string;
	readonly Name?: string;
	readonly Properties?: ApplicationInsightsComponentAnalyticsItemProperties;
	readonly Scope?: "shared" | "user";
	readonly TimeCreated?: string;
	readonly TimeModified?: string;
	readonly Type?: "function" | "none" | "query" | "recent";
	readonly Version?: string;
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
	readonly CustomEmails?: string[];
	readonly Enabled?: boolean;
	readonly LastUpdatedTime?: string;
	readonly name: string;
	readonly Name?: string;
	readonly RuleDefinitions?: ApplicationInsightsComponentProactiveDetectionConfigurationRuleDefinitions;
	readonly SendEmailsToSubscriptionOwners?: boolean;
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
	readonly kind?: "shared" | "user";
	readonly location?: string;
	readonly name: string;
	readonly properties?: MyWorkbookProperties;
	readonly tags?: MyWorkbookResourceTags;
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
	readonly kind?: "multistep";
	readonly location: string;
	readonly name: string;
	readonly properties?: WebTestProperties;
	readonly tags?: WebtestsResourceTags;
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
	readonly kind?: "shared" | "user";
	readonly location?: string;
	readonly name: string;
	readonly properties?: WorkbookProperties;
	readonly tags?: WorkbookResourceTags;
}
export interface ApplicationInsightsComponentAnalyticsItemProperties {
	readonly functionAlias?: string;
}
export interface ApplicationInsightsComponentProactiveDetectionConfigurationRuleDefinitions {
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
	readonly Request_Source?: "rest";
	readonly RetentionInDays?: number;
	readonly SamplingPercentage?: number;
	readonly TenantId?: string;
}
export interface ComponentsResourceTags {
	readonly [key: string]: string;
}
export interface MyWorkbookProperties {
	readonly category: string;
	readonly displayName: string;
	readonly serializedData: string;
	readonly sourceId?: string;
	readonly tags?: string[];
	readonly timeModified?: string;
	readonly userId?: string;
	readonly version?: string;
}
export interface MyWorkbookResourceTags {
	readonly [key: string]: string;
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
	readonly Kind: "multistep";
	readonly Locations: WebTestGeolocation[];
	readonly Name: string;
	readonly provisioningState?: string;
	readonly RetryEnabled?: boolean;
	readonly SyntheticMonitorId: string;
	readonly Timeout?: number;
}
export interface WebTestPropertiesConfiguration {
	readonly WebTest?: string;
}
export interface WebtestsResourceTags {
	readonly [key: string]: string;
}
export interface WorkbookProperties {
	readonly category: string;
	readonly kind: "shared" | "user";
	readonly name: string;
	readonly serializedData: string;
	readonly sourceResourceId?: string;
	readonly tags?: string[];
	readonly timeModified?: string;
	readonly userId: string;
	readonly version?: string;
	readonly workbookId: string;
}
export interface WorkbookResourceTags {
	readonly [key: string]: string;
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

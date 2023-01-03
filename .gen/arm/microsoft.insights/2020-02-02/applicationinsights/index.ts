import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class components extends ArmResource<componentsComponentInputs> implements componentsComponentOutputs {
	constructor(entity: ADKEntity, options: componentsComponentInputs) {
		super(entity, options.name, "Microsoft.Insights/components", "2020-02-02", options);
	}
	public readonly apiVersion: "2020-02-02";
	public readonly id: string;
	public readonly type: "Microsoft.Insights/components";
}
export interface componentsComponentOutputs {
	readonly apiVersion: "2020-02-02";
	readonly id: string;
	readonly type: "Microsoft.Insights/components";
}
export interface componentsComponentInputs {
	readonly etag?: string | undefined;
	readonly kind: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: ApplicationInsightsComponentProperties | undefined;
	readonly tags?: ComponentsResourceTags | undefined;
}
export interface ApplicationInsightsComponentProperties {
	readonly AppId?: string | undefined;
	readonly Application_Type: "other" | "web";
	readonly ApplicationId?: string | undefined;
	readonly ConnectionString?: string | undefined;
	readonly CreationDate?: string | undefined;
	readonly DisableIpMasking?: boolean | undefined;
	readonly DisableLocalAuth?: boolean | undefined;
	readonly Flow_Type?: "Bluefield" | undefined;
	readonly ForceCustomerStorageForProfiler?: boolean | undefined;
	readonly HockeyAppId?: string | undefined;
	readonly HockeyAppToken?: string | undefined;
	readonly ImmediatePurgeDataOn30Days?: boolean | undefined;
	readonly IngestionMode?:
		| ("ApplicationInsights" | "ApplicationInsightsWithDiagnosticSettings" | "LogAnalytics")
		| undefined;
	readonly InstrumentationKey?: string | undefined;
	readonly LaMigrationDate?: string | undefined;
	readonly Name?: string | undefined;
	readonly PrivateLinkScopedResources?: PrivateLinkScopedResource[] | undefined;
	readonly provisioningState?: string | undefined;
	readonly publicNetworkAccessForIngestion?: ("Disabled" | "Enabled") | undefined;
	readonly publicNetworkAccessForQuery?: ("Disabled" | "Enabled") | undefined;
	readonly Request_Source?: "rest" | undefined;
	readonly RetentionInDays?: number | undefined;
	readonly SamplingPercentage?: number | undefined;
	readonly TenantId?: string | undefined;
	readonly WorkspaceResourceId?: string | undefined;
}
export interface ComponentsResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface PrivateLinkScopedResource {
	readonly ResourceId?: string | undefined;
	readonly ScopeId?: string | undefined;
}
export default {
	components: components,
};

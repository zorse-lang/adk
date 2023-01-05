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
	readonly etag?: string;
	readonly kind: string;
	readonly location: string;
	readonly name: string;
	readonly properties?: ApplicationInsightsComponentProperties;
	readonly tags?: ComponentsResourceTags;
}
export interface ApplicationInsightsComponentProperties {
	readonly AppId?: string;
	readonly Application_Type: "other" | "web";
	readonly ApplicationId?: string;
	readonly ConnectionString?: string;
	readonly CreationDate?: string;
	readonly DisableIpMasking?: boolean;
	readonly DisableLocalAuth?: boolean;
	readonly Flow_Type?: "Bluefield";
	readonly ForceCustomerStorageForProfiler?: boolean;
	readonly HockeyAppId?: string;
	readonly HockeyAppToken?: string;
	readonly ImmediatePurgeDataOn30Days?: boolean;
	readonly IngestionMode?: "ApplicationInsights" | "ApplicationInsightsWithDiagnosticSettings" | "LogAnalytics";
	readonly InstrumentationKey?: string;
	readonly LaMigrationDate?: string;
	readonly Name?: string;
	readonly PrivateLinkScopedResources?: PrivateLinkScopedResource[];
	readonly provisioningState?: string;
	readonly publicNetworkAccessForIngestion?: "Disabled" | "Enabled";
	readonly publicNetworkAccessForQuery?: "Disabled" | "Enabled";
	readonly Request_Source?: "rest";
	readonly RetentionInDays?: number;
	readonly SamplingPercentage?: number;
	readonly TenantId?: string;
	readonly WorkspaceResourceId?: string;
}
export interface ComponentsResourceTags {
	readonly [key: string]: string;
}
export interface PrivateLinkScopedResource {
	readonly ResourceId?: string;
	readonly ScopeId?: string;
}
export default {
	components: components,
};

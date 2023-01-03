import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class alerts extends ArmResource<alertsComponentInputs> implements alertsComponentOutputs {
	constructor(entity: ADKEntity, options: alertsComponentInputs) {
		super(entity, options.name, "Microsoft.CostManagement/alerts", "2019-11-01", options);
	}
	public readonly apiVersion: "2019-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.CostManagement/alerts";
}
export interface alertsComponentOutputs {
	readonly apiVersion: "2019-11-01";
	readonly id: string;
	readonly type: "Microsoft.CostManagement/alerts";
}
export interface alertsComponentInputs {
	readonly name: string;
	readonly properties?: AlertProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export class exports extends ArmResource<exportsComponentInputs> implements exportsComponentOutputs {
	constructor(entity: ADKEntity, options: exportsComponentInputs) {
		super(entity, options.name, "Microsoft.CostManagement/exports", "2019-11-01", options);
	}
	public readonly apiVersion: "2019-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.CostManagement/exports";
}
export interface exportsComponentOutputs {
	readonly apiVersion: "2019-11-01";
	readonly id: string;
	readonly type: "Microsoft.CostManagement/exports";
}
export interface exportsComponentInputs {
	readonly eTag?: string | undefined;
	readonly name: string;
	readonly properties?: ExportProperties | undefined;
}
export class settings extends ArmResource<settingsComponentInputs> implements settingsComponentOutputs {
	constructor(entity: ADKEntity, options: settingsComponentInputs) {
		super(entity, options.name, "Microsoft.CostManagement/settings", "2019-11-01", options);
	}
	public readonly apiVersion: "2019-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.CostManagement/settings";
}
export interface settingsComponentOutputs {
	readonly apiVersion: "2019-11-01";
	readonly id: string;
	readonly type: "Microsoft.CostManagement/settings";
}
export interface settingsComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: SettingsProperties | undefined;
}
export class views extends ArmResource<viewsComponentInputs> implements viewsComponentOutputs {
	constructor(entity: ADKEntity, options: viewsComponentInputs) {
		super(entity, options.name, "Microsoft.CostManagement/views", "2019-11-01", options);
	}
	public readonly apiVersion: "2019-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.CostManagement/views";
}
export interface viewsComponentOutputs {
	readonly apiVersion: "2019-11-01";
	readonly id: string;
	readonly type: "Microsoft.CostManagement/views";
}
export interface viewsComponentInputs {
	readonly eTag?: string | undefined;
	readonly name: string;
	readonly properties?: ViewProperties | undefined;
}
export interface AlertProperties {
	readonly closeTime?: string | undefined;
	readonly costEntityId?: string | undefined;
	readonly creationTime?: string | undefined;
	readonly definition?: AlertPropertiesDefinition | undefined;
	readonly description?: string | undefined;
	readonly details?: AlertPropertiesDetails | undefined;
	readonly modificationTime?: string | undefined;
	readonly source?: ("Preset" | "User") | undefined;
	readonly status?: ("Active" | "Dismissed" | "None" | "Overridden" | "Resolved") | undefined;
	readonly statusModificationTime?: string | undefined;
	readonly statusModificationUserName?: string | undefined;
}
export interface AlertPropertiesDefinition {
	readonly category?: ("Billing" | "Cost" | "System" | "Usage") | undefined;
	readonly criteria?:
		| (
				| "CostThresholdExceeded"
				| "CreditThresholdApproaching"
				| "CreditThresholdReached"
				| "CrossCloudCollectionError"
				| "CrossCloudNewDataAvailable"
				| "ForecastCostThresholdExceeded"
				| "ForecastUsageThresholdExceeded"
				| "GeneralThresholdError"
				| "InvoiceDueDateApproaching"
				| "InvoiceDueDateReached"
				| "MultiCurrency"
				| "QuotaThresholdApproaching"
				| "QuotaThresholdReached"
				| "UsageThresholdExceeded"
		  )
		| undefined;
	readonly type?: ("Budget" | "BudgetForecast" | "Credit" | "General" | "Invoice" | "Quota" | "xCloud") | undefined;
}
export interface AlertPropertiesDetails {
	readonly amount?: number | undefined;
	readonly contactEmails?: string[] | undefined;
	readonly contactGroups?: string[] | undefined;
	readonly contactRoles?: string[] | undefined;
	readonly currentSpend?: number | undefined;
	readonly meterFilter?: any[] | undefined;
	readonly operator?:
		| ("EqualTo" | "GreaterThan" | "GreaterThanOrEqualTo" | "LessThan" | "LessThanOrEqualTo" | "None")
		| undefined;
	readonly overridingAlert?: string | undefined;
	readonly periodStartDate?: string | undefined;
	readonly resourceFilter?: any[] | undefined;
	readonly resourceGroupFilter?: any[] | undefined;
	readonly tagFilter?: any | undefined;
	readonly threshold?: number | undefined;
	readonly timeGrainType?:
		| ("Annually" | "BillingAnnual" | "BillingMonth" | "BillingQuarter" | "Monthly" | "None" | "Quarterly")
		| undefined;
	readonly triggeredBy?: string | undefined;
	readonly unit?: string | undefined;
}
export interface CacheItem {
	readonly channel: string;
	readonly id: string;
	readonly name: string;
	readonly parent?: string | undefined;
	readonly status?: string | undefined;
	readonly subchannel: string;
}
export interface ExportDefinition {
	readonly dataSet?: QueryDatasetAutoGenerated | undefined;
	readonly timeframe:
		| "BillingMonthToDate"
		| "Custom"
		| "MonthToDate"
		| "TheLastBillingMonth"
		| "TheLastMonth"
		| "WeekToDate";
	readonly timePeriod?: QueryTimePeriod | undefined;
	readonly type: "ActualCost" | "AmortizedCost" | "Usage";
}
export interface ExportDeliveryDestination {
	readonly container: string;
	readonly resourceId: string;
	readonly rootFolderPath?: string | undefined;
}
export interface ExportDeliveryInfo {
	readonly destination: ExportDeliveryDestination;
}
export interface ExportProperties {
	readonly definition: ExportDefinition;
	readonly deliveryInfo: ExportDeliveryInfo;
	readonly format?: "Csv" | undefined;
	readonly schedule?: ExportSchedule | undefined;
}
export interface ExportRecurrencePeriod {
	readonly from: string;
	readonly to?: string | undefined;
}
export interface ExportSchedule {
	readonly recurrence: "Annually" | "Daily" | "Monthly" | "Weekly";
	readonly recurrencePeriod?: ExportRecurrencePeriod | undefined;
	readonly status?: ("Active" | "Inactive") | undefined;
}
export interface KpiProperties {
	readonly enabled?: boolean | undefined;
	readonly id?: string | undefined;
	readonly type?: ("Budget" | "Forecast") | undefined;
}
export interface PivotProperties {
	readonly name?: string | undefined;
	readonly type?: ("Dimension" | "TagKey") | undefined;
}
export interface QueryAggregation {
	readonly function: "Avg" | "Max" | "Min" | "Sum";
	readonly name: string;
}
export interface QueryComparisonExpression {
	readonly name: string;
	readonly operator: "Contains" | "In";
	readonly values: string[];
}
export interface QueryDatasetAggregation {
	readonly "[ key: string ]"?: QueryAggregation | undefined;
}
export interface QueryDatasetAutoGenerated {
	readonly aggregation?: QueryDatasetAggregation | undefined;
	readonly configuration?: QueryDatasetConfiguration | undefined;
	readonly filter?: QueryFilterAutoGenerated | undefined;
	readonly granularity?: "Daily" | undefined;
	readonly grouping?: QueryGrouping[] | undefined;
}
export interface QueryDatasetConfiguration {
	readonly columns?: string[] | undefined;
}
export interface QueryFilterAutoGenerated {
	readonly and?: QueryFilterAutoGenerated[] | undefined;
	readonly dimensions?: QueryComparisonExpression | undefined;
	readonly or?: QueryFilterAutoGenerated[] | undefined;
	readonly tags?: QueryComparisonExpression | undefined;
}
export interface QueryGrouping {
	readonly name: string;
	readonly type: "Dimension" | "Tag";
}
export interface QueryTimePeriod {
	readonly from: string;
	readonly to: string;
}
export interface ReportConfigAggregation {
	readonly function: "Avg" | "Max" | "Min" | "Sum";
	readonly name: string;
}
export interface ReportConfigComparisonExpression {
	readonly name: string;
	readonly operator: "Contains" | "In";
	readonly values: string[];
}
export interface ReportConfigDataset {
	readonly aggregation?: ReportConfigDatasetAggregation | undefined;
	readonly configuration?: ReportConfigDatasetConfiguration | undefined;
	readonly filter?: ReportConfigFilter | undefined;
	readonly granularity?: ("Daily" | "Monthly") | undefined;
	readonly grouping?: ReportConfigGrouping[] | undefined;
	readonly sorting?: ReportConfigSorting[] | undefined;
}
export interface ReportConfigDatasetAggregation {
	readonly "[ key: string ]"?: ReportConfigAggregation | undefined;
}
export interface ReportConfigDatasetConfiguration {
	readonly columns?: string[] | undefined;
}
export interface ReportConfigDefinition {
	readonly dataSet?: ReportConfigDataset | undefined;
	readonly includeMonetaryCommitment?: boolean | undefined;
	readonly timeframe: "Custom" | "MonthToDate" | "WeekToDate" | "YearToDate";
	readonly timePeriod?: ReportConfigTimePeriod | undefined;
	readonly type: "Usage";
}
export interface ReportConfigFilter {
	readonly and?: ReportConfigFilter[] | undefined;
	readonly dimensions?: ReportConfigComparisonExpression | undefined;
	readonly or?: ReportConfigFilter[] | undefined;
	readonly tagKey?: ReportConfigComparisonExpression | undefined;
	readonly tags?: ReportConfigComparisonExpression | undefined;
	readonly tagValue?: ReportConfigComparisonExpression | undefined;
}
export interface ReportConfigGrouping {
	readonly name: string;
	readonly type: "Dimension" | "Tag";
}
export interface ReportConfigSorting {
	readonly direction?: ("Ascending" | "Descending") | undefined;
	readonly name: string;
}
export interface ReportConfigTimePeriod {
	readonly from: string;
	readonly to: string;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface SettingsProperties {
	readonly cache?: CacheItem[] | undefined;
	readonly scope: string;
	readonly startOn?: ("LastUsed" | "ScopePicker" | "SpecificScope") | undefined;
}
export interface ViewProperties {
	readonly accumulated?: ("false" | "true") | undefined;
	readonly chart?: ("Area" | "GroupedColumn" | "Line" | "StackedColumn" | "Table") | undefined;
	readonly createdOn?: string | undefined;
	readonly currency?: string | undefined;
	readonly dateRange?: string | undefined;
	readonly displayName?: string | undefined;
	readonly kpis?: KpiProperties[] | undefined;
	readonly metric?: ("AHUB" | "ActualCost" | "AmortizedCost") | undefined;
	readonly modifiedOn?: string | undefined;
	readonly pivots?: PivotProperties[] | undefined;
	readonly query?: ReportConfigDefinition | undefined;
	readonly scope?: string | undefined;
}
export default {
	alerts: alerts,
	exports: exports,
	settings: settings,
	views: views,
};

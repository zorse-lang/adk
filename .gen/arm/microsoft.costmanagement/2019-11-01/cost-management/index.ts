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
	readonly properties?: AlertProperties;
	readonly tags?: ResourceTags;
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
	readonly eTag?: string;
	readonly name: string;
	readonly properties?: ExportProperties;
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
	readonly kind?: string;
	readonly name: string;
	readonly properties?: SettingsProperties;
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
	readonly eTag?: string;
	readonly name: string;
	readonly properties?: ViewProperties;
}
export interface AlertProperties {
	readonly closeTime?: string;
	readonly costEntityId?: string;
	readonly creationTime?: string;
	readonly definition?: AlertPropertiesDefinition;
	readonly description?: string;
	readonly details?: AlertPropertiesDetails;
	readonly modificationTime?: string;
	readonly source?: "Preset" | "User";
	readonly status?: "Active" | "Dismissed" | "None" | "Overridden" | "Resolved";
	readonly statusModificationTime?: string;
	readonly statusModificationUserName?: string;
}
export interface AlertPropertiesDefinition {
	readonly category?: "Billing" | "Cost" | "System" | "Usage";
	readonly criteria?:
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
		| "UsageThresholdExceeded";
	readonly type?: "Budget" | "BudgetForecast" | "Credit" | "General" | "Invoice" | "Quota" | "xCloud";
}
export interface AlertPropertiesDetails {
	readonly amount?: number;
	readonly contactEmails?: string[];
	readonly contactGroups?: string[];
	readonly contactRoles?: string[];
	readonly currentSpend?: number;
	readonly meterFilter?: any[];
	readonly operator?: "EqualTo" | "GreaterThan" | "GreaterThanOrEqualTo" | "LessThan" | "LessThanOrEqualTo" | "None";
	readonly overridingAlert?: string;
	readonly periodStartDate?: string;
	readonly resourceFilter?: any[];
	readonly resourceGroupFilter?: any[];
	readonly tagFilter?: any;
	readonly threshold?: number;
	readonly timeGrainType?:
		| "Annually"
		| "BillingAnnual"
		| "BillingMonth"
		| "BillingQuarter"
		| "Monthly"
		| "None"
		| "Quarterly";
	readonly triggeredBy?: string;
	readonly unit?: string;
}
export interface CacheItem {
	readonly channel: string;
	readonly id: string;
	readonly name: string;
	readonly parent?: string;
	readonly status?: string;
	readonly subchannel: string;
}
export interface ExportDefinition {
	readonly dataSet?: QueryDatasetAutoGenerated;
	readonly timeframe:
		| "BillingMonthToDate"
		| "Custom"
		| "MonthToDate"
		| "TheLastBillingMonth"
		| "TheLastMonth"
		| "WeekToDate";
	readonly timePeriod?: QueryTimePeriod;
	readonly type: "ActualCost" | "AmortizedCost" | "Usage";
}
export interface ExportDeliveryDestination {
	readonly container: string;
	readonly resourceId: string;
	readonly rootFolderPath?: string;
}
export interface ExportDeliveryInfo {
	readonly destination: ExportDeliveryDestination;
}
export interface ExportProperties {
	readonly definition: ExportDefinition;
	readonly deliveryInfo: ExportDeliveryInfo;
	readonly format?: "Csv";
	readonly schedule?: ExportSchedule;
}
export interface ExportRecurrencePeriod {
	readonly from: string;
	readonly to?: string;
}
export interface ExportSchedule {
	readonly recurrence: "Annually" | "Daily" | "Monthly" | "Weekly";
	readonly recurrencePeriod?: ExportRecurrencePeriod;
	readonly status?: "Active" | "Inactive";
}
export interface KpiProperties {
	readonly enabled?: boolean;
	readonly id?: string;
	readonly type?: "Budget" | "Forecast";
}
export interface PivotProperties {
	readonly name?: string;
	readonly type?: "Dimension" | "TagKey";
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
	readonly [key: string]: QueryAggregation;
}
export interface QueryDatasetAutoGenerated {
	readonly aggregation?: QueryDatasetAggregation;
	readonly configuration?: QueryDatasetConfiguration;
	readonly filter?: QueryFilterAutoGenerated;
	readonly granularity?: "Daily";
	readonly grouping?: QueryGrouping[];
}
export interface QueryDatasetConfiguration {
	readonly columns?: string[];
}
export interface QueryFilterAutoGenerated {
	readonly and?: QueryFilterAutoGenerated[];
	readonly dimensions?: QueryComparisonExpression;
	readonly or?: QueryFilterAutoGenerated[];
	readonly tags?: QueryComparisonExpression;
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
	readonly aggregation?: ReportConfigDatasetAggregation;
	readonly configuration?: ReportConfigDatasetConfiguration;
	readonly filter?: ReportConfigFilter;
	readonly granularity?: "Daily" | "Monthly";
	readonly grouping?: ReportConfigGrouping[];
	readonly sorting?: ReportConfigSorting[];
}
export interface ReportConfigDatasetAggregation {
	readonly [key: string]: ReportConfigAggregation;
}
export interface ReportConfigDatasetConfiguration {
	readonly columns?: string[];
}
export interface ReportConfigDefinition {
	readonly dataSet?: ReportConfigDataset;
	readonly includeMonetaryCommitment?: boolean;
	readonly timeframe: "Custom" | "MonthToDate" | "WeekToDate" | "YearToDate";
	readonly timePeriod?: ReportConfigTimePeriod;
	readonly type: "Usage";
}
export interface ReportConfigFilter {
	readonly and?: ReportConfigFilter[];
	readonly dimensions?: ReportConfigComparisonExpression;
	readonly or?: ReportConfigFilter[];
	readonly tagKey?: ReportConfigComparisonExpression;
	readonly tags?: ReportConfigComparisonExpression;
	readonly tagValue?: ReportConfigComparisonExpression;
}
export interface ReportConfigGrouping {
	readonly name: string;
	readonly type: "Dimension" | "Tag";
}
export interface ReportConfigSorting {
	readonly direction?: "Ascending" | "Descending";
	readonly name: string;
}
export interface ReportConfigTimePeriod {
	readonly from: string;
	readonly to: string;
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export interface SettingsProperties {
	readonly cache?: CacheItem[];
	readonly scope: string;
	readonly startOn?: "LastUsed" | "ScopePicker" | "SpecificScope";
}
export interface ViewProperties {
	readonly accumulated?: "false" | "true";
	readonly chart?: "Area" | "GroupedColumn" | "Line" | "StackedColumn" | "Table";
	readonly createdOn?: string;
	readonly currency?: string;
	readonly dateRange?: string;
	readonly displayName?: string;
	readonly kpis?: KpiProperties[];
	readonly metric?: "AHUB" | "ActualCost" | "AmortizedCost";
	readonly modifiedOn?: string;
	readonly pivots?: PivotProperties[];
	readonly query?: ReportConfigDefinition;
	readonly scope?: string;
}
export default {
	alerts: alerts,
	exports: exports,
	settings: settings,
	views: views,
};

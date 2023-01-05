import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class alerts extends ArmResource<alertsComponentInputs> implements alertsComponentOutputs {
	constructor(entity: ADKEntity, options: alertsComponentInputs) {
		super(entity, options.name, "Microsoft.CostManagement/alerts", "2022-10-01-preview", options);
	}
	public readonly apiVersion: "2022-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.CostManagement/alerts";
}
export interface alertsComponentOutputs {
	readonly apiVersion: "2022-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.CostManagement/alerts";
}
export interface alertsComponentInputs {
	readonly eTag?: string;
	readonly name: string;
	readonly properties?: AlertProperties;
}
export class settings_taginheritance
	extends ArmResource<settings_taginheritanceComponentInputs>
	implements settings_taginheritanceComponentOutputs
{
	constructor(entity: ADKEntity, options: settings_taginheritanceComponentInputs) {
		super(entity, options.name, "Microsoft.CostManagement/settings", "2022-10-01-preview", options);
	}
	public readonly apiVersion: "2022-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.CostManagement/settings";
}
export interface settings_taginheritanceComponentOutputs {
	readonly apiVersion: "2022-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.CostManagement/settings";
}
export interface settings_taginheritanceComponentInputs {
	readonly eTag?: string;
	readonly name: string;
	readonly kind: "taginheritance";
	readonly properties?: TagInheritanceProperties;
}
export class views extends ArmResource<viewsComponentInputs> implements viewsComponentOutputs {
	constructor(entity: ADKEntity, options: viewsComponentInputs) {
		super(entity, options.name, "Microsoft.CostManagement/views", "2022-10-01-preview", options);
	}
	public readonly apiVersion: "2022-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.CostManagement/views";
}
export interface viewsComponentOutputs {
	readonly apiVersion: "2022-10-01-preview";
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
	readonly companyName?: string;
	readonly contactEmails?: string[];
	readonly contactGroups?: string[];
	readonly contactRoles?: string[];
	readonly currentSpend?: number;
	readonly departmentName?: string;
	readonly enrollmentEndDate?: string;
	readonly enrollmentNumber?: string;
	readonly enrollmentStartDate?: string;
	readonly invoicingThreshold?: number;
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
export interface KpiProperties {
	readonly enabled?: boolean;
	readonly id?: string;
	readonly type?: "Budget" | "Forecast";
}
export interface PivotProperties {
	readonly name?: string;
	readonly type?: "Dimension" | "TagKey";
}
export interface ReportConfigAggregation {
	readonly function: "Sum";
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
	readonly tags?: ReportConfigComparisonExpression;
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
export interface TagInheritanceProperties {
	readonly preferContainerTags: boolean;
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
export type settings = settings_taginheritance;
export default {
	alerts: alerts,
	"settings/taginheritance": settings_taginheritance,
	views: views,
};

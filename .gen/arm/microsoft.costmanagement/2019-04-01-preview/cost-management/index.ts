import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class budgets extends ArmResource<budgetsComponentInputs> implements budgetsComponentOutputs {
	constructor(entity: ADKEntity, options: budgetsComponentInputs) {
		super(entity, options.name, "Microsoft.CostManagement/budgets", "2019-04-01-preview", options);
	}
	public readonly apiVersion: "2019-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.CostManagement/budgets";
}
export interface budgetsComponentOutputs {
	readonly apiVersion: "2019-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.CostManagement/budgets";
}
export interface budgetsComponentInputs {
	readonly eTag?: string;
	readonly name: string;
	readonly properties?: BudgetProperties;
}
export class views extends ArmResource<viewsComponentInputs> implements viewsComponentOutputs {
	constructor(entity: ADKEntity, options: viewsComponentInputs) {
		super(entity, options.name, "Microsoft.CostManagement/views", "2019-04-01-preview", options);
	}
	public readonly apiVersion: "2019-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.CostManagement/views";
}
export interface viewsComponentOutputs {
	readonly apiVersion: "2019-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.CostManagement/views";
}
export interface viewsComponentInputs {
	readonly eTag?: string;
	readonly name: string;
	readonly properties?: ViewProperties;
}
export interface BudgetProperties {
	readonly amount: number;
	readonly category: "Cost" | "Usage";
	readonly currentSpend?: CurrentSpend;
	readonly filter?: ReportConfigFilter;
	readonly notifications?: BudgetPropertiesNotifications;
	readonly timeGrain: "Annually" | "Monthly" | "Quarterly";
	readonly timePeriod: BudgetTimePeriod;
}
export interface BudgetPropertiesNotifications {
	readonly [key: string]: Notification;
}
export interface BudgetTimePeriod {
	readonly endDate?: string;
	readonly startDate: string;
}
export interface CurrentSpend {
	readonly amount?: number;
	readonly unit?: string;
}
export interface KpiProperties {
	readonly enabled?: boolean;
	readonly id?: string;
	readonly type?: "Budget" | "Forecast";
}
export interface Notification {
	readonly contactEmails: string[];
	readonly contactGroups?: string[];
	readonly contactRoles?: string[];
	readonly enabled: boolean;
	readonly operator: "EqualTo" | "GreaterThan" | "GreaterThanOrEqualTo";
	readonly threshold: number;
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
	readonly dataset?: ReportConfigDataset;
	readonly timeframe: "Custom" | "MonthToDate" | "WeekToDate" | "YearToDate";
	readonly timePeriod?: ReportConfigTimePeriod;
	readonly type: "Usage";
}
export interface ReportConfigFilter {
	readonly and?: ReportConfigFilter[];
	readonly dimension?: ReportConfigComparisonExpression;
	readonly not?: ReportConfigFilter;
	readonly or?: ReportConfigFilter[];
	readonly tag?: ReportConfigComparisonExpression;
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
export interface ViewProperties {
	readonly accumulated?: "false" | "true";
	readonly chart?: "Area" | "GroupedColumn" | "Line" | "StackedColumn" | "Table";
	readonly createdOn?: string;
	readonly displayName?: string;
	readonly kpis?: KpiProperties[];
	readonly metric?: "AHUB" | "ActualCost" | "AmortizedCost";
	readonly modifiedOn?: string;
	readonly pivots?: PivotProperties[];
	readonly query?: ReportConfigDefinition;
	readonly scope?: string;
}
export default {
	budgets: budgets,
	views: views,
};

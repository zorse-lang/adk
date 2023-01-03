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
	readonly eTag?: string | undefined;
	readonly name: string;
	readonly properties?: BudgetProperties | undefined;
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
	readonly eTag?: string | undefined;
	readonly name: string;
	readonly properties?: ViewProperties | undefined;
}
export interface BudgetProperties {
	readonly amount: number;
	readonly category: "Cost" | "Usage";
	readonly currentSpend?: CurrentSpend | undefined;
	readonly filter?: ReportConfigFilter | undefined;
	readonly notifications?: BudgetPropertiesNotifications | undefined;
	readonly timeGrain: "Annually" | "Monthly" | "Quarterly";
	readonly timePeriod: BudgetTimePeriod;
}
export interface BudgetPropertiesNotifications {
	readonly "[ key: string ]"?: Notification | undefined;
}
export interface BudgetTimePeriod {
	readonly endDate?: string | undefined;
	readonly startDate: string;
}
export interface CurrentSpend {
	readonly amount?: number | undefined;
	readonly unit?: string | undefined;
}
export interface KpiProperties {
	readonly enabled?: boolean | undefined;
	readonly id?: string | undefined;
	readonly type?: ("Budget" | "Forecast") | undefined;
}
export interface Notification {
	readonly contactEmails: string[];
	readonly contactGroups?: string[] | undefined;
	readonly contactRoles?: string[] | undefined;
	readonly enabled: boolean;
	readonly operator: "EqualTo" | "GreaterThan" | "GreaterThanOrEqualTo";
	readonly threshold: number;
}
export interface PivotProperties {
	readonly name?: string | undefined;
	readonly type?: ("Dimension" | "TagKey") | undefined;
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
	readonly dataset?: ReportConfigDataset | undefined;
	readonly timeframe: "Custom" | "MonthToDate" | "WeekToDate" | "YearToDate";
	readonly timePeriod?: ReportConfigTimePeriod | undefined;
	readonly type: "Usage";
}
export interface ReportConfigFilter {
	readonly and?: ReportConfigFilter[] | undefined;
	readonly dimension?: ReportConfigComparisonExpression | undefined;
	readonly not?: ReportConfigFilter | undefined;
	readonly or?: ReportConfigFilter[] | undefined;
	readonly tag?: ReportConfigComparisonExpression | undefined;
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
export interface ViewProperties {
	readonly accumulated?: ("false" | "true") | undefined;
	readonly chart?: ("Area" | "GroupedColumn" | "Line" | "StackedColumn" | "Table") | undefined;
	readonly createdOn?: string | undefined;
	readonly displayName?: string | undefined;
	readonly kpis?: KpiProperties[] | undefined;
	readonly metric?: ("AHUB" | "ActualCost" | "AmortizedCost") | undefined;
	readonly modifiedOn?: string | undefined;
	readonly pivots?: PivotProperties[] | undefined;
	readonly query?: ReportConfigDefinition | undefined;
	readonly scope?: string | undefined;
}
export default {
	budgets: budgets,
	views: views,
};

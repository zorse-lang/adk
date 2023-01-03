import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class alerts extends ArmResource<alertsComponentInputs> implements alertsComponentOutputs {
	constructor(entity: ADKEntity, options: alertsComponentInputs) {
		super(entity, options.name, "Microsoft.CostManagement/alerts", "2022-10-05-preview", options);
	}
	public readonly apiVersion: "2022-10-05-preview";
	public readonly id: string;
	public readonly type: "Microsoft.CostManagement/alerts";
}
export interface alertsComponentOutputs {
	readonly apiVersion: "2022-10-05-preview";
	readonly id: string;
	readonly type: "Microsoft.CostManagement/alerts";
}
export interface alertsComponentInputs {
	readonly eTag?: string | undefined;
	readonly name: string;
	readonly properties?: AlertProperties | undefined;
}
export class markupRules extends ArmResource<markupRulesComponentInputs> implements markupRulesComponentOutputs {
	constructor(entity: ADKEntity, options: markupRulesComponentInputs) {
		super(entity, options.name, "Microsoft.CostManagement/markupRules", "2022-10-05-preview", options);
	}
	public readonly apiVersion: "2022-10-05-preview";
	public readonly id: string;
	public readonly type: "Microsoft.CostManagement/markupRules";
}
export interface markupRulesComponentOutputs {
	readonly apiVersion: "2022-10-05-preview";
	readonly id: string;
	readonly type: "Microsoft.CostManagement/markupRules";
}
export interface markupRulesComponentInputs {
	readonly eTag?: string | undefined;
	readonly name: string;
	readonly properties?: MarkupRuleProperties | undefined;
}
export class settings_taginheritance
	extends ArmResource<settings_taginheritanceComponentInputs>
	implements settings_taginheritanceComponentOutputs
{
	constructor(entity: ADKEntity, options: settings_taginheritanceComponentInputs) {
		super(entity, options.name, "Microsoft.CostManagement/settings", "2022-10-05-preview", options);
	}
	public readonly apiVersion: "2022-10-05-preview";
	public readonly id: string;
	public readonly type: "Microsoft.CostManagement/settings";
}
export interface settings_taginheritanceComponentOutputs {
	readonly apiVersion: "2022-10-05-preview";
	readonly id: string;
	readonly type: "Microsoft.CostManagement/settings";
}
export interface settings_taginheritanceComponentInputs {
	readonly eTag?: string | undefined;
	readonly name: string;
	readonly kind: "taginheritance";
	readonly properties?: TagInheritanceProperties | undefined;
}
export class views extends ArmResource<viewsComponentInputs> implements viewsComponentOutputs {
	constructor(entity: ADKEntity, options: viewsComponentInputs) {
		super(entity, options.name, "Microsoft.CostManagement/views", "2022-10-05-preview", options);
	}
	public readonly apiVersion: "2022-10-05-preview";
	public readonly id: string;
	public readonly type: "Microsoft.CostManagement/views";
}
export interface viewsComponentOutputs {
	readonly apiVersion: "2022-10-05-preview";
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
	readonly companyName?: string | undefined;
	readonly contactEmails?: string[] | undefined;
	readonly contactGroups?: string[] | undefined;
	readonly contactRoles?: string[] | undefined;
	readonly currentSpend?: number | undefined;
	readonly departmentName?: string | undefined;
	readonly enrollmentEndDate?: string | undefined;
	readonly enrollmentNumber?: string | undefined;
	readonly enrollmentStartDate?: string | undefined;
	readonly invoicingThreshold?: number | undefined;
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
export interface CustomerMetadata {
	readonly billingAccountId: string;
	readonly billingProfileId: string;
}
export interface KpiProperties {
	readonly enabled?: boolean | undefined;
	readonly id?: string | undefined;
	readonly type?: ("Budget" | "Forecast") | undefined;
}
export interface MarkupRuleProperties {
	readonly customerDetails: CustomerMetadata;
	readonly description?: string | undefined;
	readonly endDate?: string | undefined;
	readonly percentage: number;
	readonly startDate: string;
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
	readonly tags?: ReportConfigComparisonExpression | undefined;
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
export interface TagInheritanceProperties {
	readonly preferContainerTags: boolean;
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
export type settings = settings_taginheritance;
export default {
	alerts: alerts,
	markupRules: markupRules,
	"settings/taginheritance": settings_taginheritance,
	views: views,
};

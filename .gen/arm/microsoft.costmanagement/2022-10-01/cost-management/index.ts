import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class alerts extends ArmResource<alertsComponentInputs> implements alertsComponentOutputs {
	constructor(entity: ADKEntity, options: alertsComponentInputs) {
		super(entity, options.name, "Microsoft.CostManagement/alerts", "2022-10-01", options);
	}
	public readonly apiVersion: "2022-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.CostManagement/alerts";
}
export interface alertsComponentOutputs {
	readonly apiVersion: "2022-10-01";
	readonly id: string;
	readonly type: "Microsoft.CostManagement/alerts";
}
export interface alertsComponentInputs {
	readonly eTag?: string | undefined;
	readonly name: string;
	readonly properties?: AlertProperties | undefined;
}
export class exports extends ArmResource<exportsComponentInputs> implements exportsComponentOutputs {
	constructor(entity: ADKEntity, options: exportsComponentInputs) {
		super(entity, options.name, "Microsoft.CostManagement/exports", "2022-10-01", options);
	}
	public readonly apiVersion: "2022-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.CostManagement/exports";
}
export interface exportsComponentOutputs {
	readonly apiVersion: "2022-10-01";
	readonly id: string;
	readonly type: "Microsoft.CostManagement/exports";
}
export interface exportsComponentInputs {
	readonly eTag?: string | undefined;
	readonly name: string;
	readonly properties?: ExportProperties | undefined;
}
export class scheduledActions
	extends ArmResource<scheduledActionsComponentInputs>
	implements scheduledActionsComponentOutputs
{
	constructor(entity: ADKEntity, options: scheduledActionsComponentInputs) {
		super(entity, options.name, "Microsoft.CostManagement/scheduledActions", "2022-10-01", options);
	}
	public readonly apiVersion: "2022-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.CostManagement/scheduledActions";
}
export interface scheduledActionsComponentOutputs {
	readonly apiVersion: "2022-10-01";
	readonly id: string;
	readonly type: "Microsoft.CostManagement/scheduledActions";
}
export interface scheduledActionsComponentInputs {
	readonly eTag?: string | undefined;
	readonly kind?: ("Email" | "InsightAlert") | undefined;
	readonly name: string;
	readonly properties?: ScheduledActionProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class views extends ArmResource<viewsComponentInputs> implements viewsComponentOutputs {
	constructor(entity: ADKEntity, options: viewsComponentInputs) {
		super(entity, options.name, "Microsoft.CostManagement/views", "2022-10-01", options);
	}
	public readonly apiVersion: "2022-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.CostManagement/views";
}
export interface viewsComponentOutputs {
	readonly apiVersion: "2022-10-01";
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
export interface CommonExportProperties {
	readonly definition: ExportDefinition;
	readonly deliveryInfo: ExportDeliveryInfo;
	readonly format?: "Csv" | undefined;
	readonly nextRunTimeEstimate?: string | undefined;
	readonly partitionData?: boolean | undefined;
	readonly runHistory?: ExportExecutionListResult | undefined;
}
export interface ErrorDetails {
	readonly code?: string | undefined;
	readonly message?: string | undefined;
}
export interface ExportDataset {
	readonly configuration?: ExportDatasetConfiguration | undefined;
	readonly granularity?: "Daily" | undefined;
}
export interface ExportDatasetConfiguration {
	readonly columns?: string[] | undefined;
}
export interface ExportDefinition {
	readonly dataSet?: ExportDataset | undefined;
	readonly timeframe:
		| "BillingMonthToDate"
		| "Custom"
		| "MonthToDate"
		| "TheLastBillingMonth"
		| "TheLastMonth"
		| "WeekToDate";
	readonly timePeriod?: ExportTimePeriod | undefined;
	readonly type: "ActualCost" | "AmortizedCost" | "Usage";
}
export interface ExportDeliveryDestination {
	readonly container: string;
	readonly resourceId?: string | undefined;
	readonly rootFolderPath?: string | undefined;
	readonly sasToken?: string | undefined;
	readonly storageAccount?: string | undefined;
}
export interface ExportDeliveryInfo {
	readonly destination: ExportDeliveryDestination;
}
export interface ExportExecutionListResult {
	readonly value?: ExportRun[] | undefined;
}
export interface ExportProperties {
	readonly definition: ExportDefinition;
	readonly deliveryInfo: ExportDeliveryInfo;
	readonly format?: "Csv" | undefined;
	readonly nextRunTimeEstimate?: string | undefined;
	readonly partitionData?: boolean | undefined;
	readonly runHistory?: ExportExecutionListResult | undefined;
	readonly schedule?: ExportSchedule | undefined;
}
export interface ExportRecurrencePeriod {
	readonly from: string;
	readonly to?: string | undefined;
}
export interface ExportRun {
	readonly eTag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: ExportRunProperties | undefined;
	readonly type?: string | undefined;
}
export interface ExportRunProperties {
	readonly error?: ErrorDetails | undefined;
	readonly executionType?: ("OnDemand" | "Scheduled") | undefined;
	readonly fileName?: string | undefined;
	readonly processingEndTime?: string | undefined;
	readonly processingStartTime?: string | undefined;
	readonly runSettings?: CommonExportProperties | undefined;
	readonly status?:
		| ("Completed" | "DataNotAvailable" | "Failed" | "InProgress" | "NewDataNotAvailable" | "Queued" | "Timeout")
		| undefined;
	readonly submittedBy?: string | undefined;
	readonly submittedTime?: string | undefined;
}
export interface ExportSchedule {
	readonly recurrence?: ("Annually" | "Daily" | "Monthly" | "Weekly") | undefined;
	readonly recurrencePeriod?: ExportRecurrencePeriod | undefined;
	readonly status?: ("Active" | "Inactive") | undefined;
}
export interface ExportTimePeriod {
	readonly from: string;
	readonly to: string;
}
export interface FileDestination {
	readonly fileFormats?: "Csv"[] | undefined;
}
export interface KpiProperties {
	readonly enabled?: boolean | undefined;
	readonly id?: string | undefined;
	readonly type?: ("Budget" | "Forecast") | undefined;
}
export interface NotificationProperties {
	readonly language?: string | undefined;
	readonly message?: string | undefined;
	readonly regionalFormat?: string | undefined;
	readonly subject: string;
	readonly to: string[];
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
export interface ScheduledActionProperties {
	readonly displayName: string;
	readonly fileDestination?: FileDestination | undefined;
	readonly notification: NotificationProperties;
	readonly notificationEmail?: string | undefined;
	readonly schedule: ScheduleProperties;
	readonly scope?: string | undefined;
	readonly status: "Disabled" | "Enabled" | "Expired";
	readonly viewId: string;
}
export interface ScheduleProperties {
	readonly dayOfMonth?: number | undefined;
	readonly daysOfWeek?:
		| ("Friday" | "Monday" | "Saturday" | "Sunday" | "Thursday" | "Tuesday" | "Wednesday"[])
		| undefined;
	readonly endDate: string;
	readonly frequency: "Daily" | "Monthly" | "Weekly";
	readonly hourOfDay?: number | undefined;
	readonly startDate: string;
	readonly weeksOfMonth?: ("First" | "Fourth" | "Last" | "Second" | "Third"[]) | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
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
	scheduledActions: scheduledActions,
	views: views,
};

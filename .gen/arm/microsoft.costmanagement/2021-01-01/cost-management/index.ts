import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class exports extends ArmResource<exportsComponentInputs> implements exportsComponentOutputs {
	constructor(entity: ADKEntity, options: exportsComponentInputs) {
		super(entity, options.name, "Microsoft.CostManagement/exports", "2021-01-01", options);
	}
	public readonly apiVersion: "2021-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.CostManagement/exports";
}
export interface exportsComponentOutputs {
	readonly apiVersion: "2021-01-01";
	readonly id: string;
	readonly type: "Microsoft.CostManagement/exports";
}
export interface exportsComponentInputs {
	readonly eTag?: string | undefined;
	readonly name: string;
	readonly properties?: ExportProperties | undefined;
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
export interface ExportExecution {
	readonly eTag?: string | undefined;
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: ExportExecutionProperties | undefined;
	readonly type?: string | undefined;
}
export interface ExportExecutionListResult {
	readonly value?: ExportExecution[] | undefined;
}
export interface ExportExecutionProperties {
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
export interface ExportSchedule {
	readonly recurrence?: ("Annually" | "Daily" | "Monthly" | "Weekly") | undefined;
	readonly recurrencePeriod?: ExportRecurrencePeriod | undefined;
	readonly status?: ("Active" | "Inactive") | undefined;
}
export interface ExportTimePeriod {
	readonly from: string;
	readonly to: string;
}
export default {
	exports: exports,
};

import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class exports extends ArmResource<exportsComponentInputs> implements exportsComponentOutputs {
	constructor(entity: ADKEntity, options: exportsComponentInputs) {
		super(entity, options.name, "Microsoft.CostManagement/exports", "2020-12-01-preview", options);
	}
	public readonly apiVersion: "2020-12-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.CostManagement/exports";
}
export interface exportsComponentOutputs {
	readonly apiVersion: "2020-12-01-preview";
	readonly id: string;
	readonly type: "Microsoft.CostManagement/exports";
}
export interface exportsComponentInputs {
	readonly eTag?: string;
	readonly name: string;
	readonly properties?: ExportProperties;
}
export interface CommonExportProperties {
	readonly definition: ExportDefinition;
	readonly deliveryInfo: ExportDeliveryInfo;
	readonly format?: "Csv";
	readonly nextRunTimeEstimate?: string;
	readonly runHistory?: ExportExecutionListResult;
}
export interface ErrorDetails {
	readonly code?: string;
	readonly message?: string;
}
export interface ExportDataset {
	readonly configuration?: ExportDatasetConfiguration;
	readonly granularity?: "Daily";
}
export interface ExportDatasetConfiguration {
	readonly columns?: string[];
}
export interface ExportDefinition {
	readonly dataSet?: ExportDataset;
	readonly timeframe:
		| "BillingMonthToDate"
		| "Custom"
		| "MonthToDate"
		| "TheLastBillingMonth"
		| "TheLastMonth"
		| "WeekToDate";
	readonly timePeriod?: ExportTimePeriod;
	readonly type: "ActualCost" | "AmortizedCost" | "Usage";
}
export interface ExportDeliveryDestination {
	readonly container: string;
	readonly resourceId?: string;
	readonly rootFolderPath?: string;
	readonly sasToken?: string;
	readonly storageAccount?: string;
}
export interface ExportDeliveryInfo {
	readonly destination: ExportDeliveryDestination;
}
export interface ExportExecution {
	readonly eTag?: string;
	readonly id?: string;
	readonly name?: string;
	readonly properties?: ExportExecutionProperties;
	readonly type?: string;
}
export interface ExportExecutionListResult {
	readonly value?: ExportExecution[];
}
export interface ExportExecutionProperties {
	readonly error?: ErrorDetails;
	readonly executionType?: "OnDemand" | "Scheduled";
	readonly fileName?: string;
	readonly processingEndTime?: string;
	readonly processingStartTime?: string;
	readonly runSettings?: CommonExportProperties;
	readonly status?:
		| "Completed"
		| "DataNotAvailable"
		| "Failed"
		| "InProgress"
		| "NewDataNotAvailable"
		| "Queued"
		| "Timeout";
	readonly submittedBy?: string;
	readonly submittedTime?: string;
}
export interface ExportProperties {
	readonly definition: ExportDefinition;
	readonly deliveryInfo: ExportDeliveryInfo;
	readonly format?: "Csv";
	readonly nextRunTimeEstimate?: string;
	readonly runHistory?: ExportExecutionListResult;
	readonly schedule?: ExportSchedule;
}
export interface ExportRecurrencePeriod {
	readonly from: string;
	readonly to?: string;
}
export interface ExportSchedule {
	readonly recurrence?: "Annually" | "Daily" | "Monthly" | "Weekly";
	readonly recurrencePeriod?: ExportRecurrencePeriod;
	readonly status?: "Active" | "Inactive";
}
export interface ExportTimePeriod {
	readonly from: string;
	readonly to: string;
}
export default {
	exports: exports,
};

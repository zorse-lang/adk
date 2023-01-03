import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class connectors extends ArmResource<connectorsComponentInputs> implements connectorsComponentOutputs {
	constructor(entity: ADKEntity, options: connectorsComponentInputs) {
		super(entity, options.name, "Microsoft.CostManagement/connectors", "2018-08-01-preview", options);
	}
	public readonly apiVersion: "2018-08-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.CostManagement/connectors";
}
export interface connectorsComponentOutputs {
	readonly apiVersion: "2018-08-01-preview";
	readonly id: string;
	readonly type: "Microsoft.CostManagement/connectors";
}
export interface connectorsComponentInputs {
	readonly kind?: string | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ConnectorProperties | undefined;
	readonly tags?: ConnectorDefinitionTags | undefined;
}
export class reports extends ArmResource<reportsComponentInputs> implements reportsComponentOutputs {
	constructor(entity: ADKEntity, options: reportsComponentInputs) {
		super(entity, options.name, "Microsoft.CostManagement/reports", "2018-08-01-preview", options);
	}
	public readonly apiVersion: "2018-08-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.CostManagement/reports";
}
export interface reportsComponentOutputs {
	readonly apiVersion: "2018-08-01-preview";
	readonly id: string;
	readonly type: "Microsoft.CostManagement/reports";
}
export interface reportsComponentInputs {
	readonly name: string;
	readonly properties?: ReportProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export interface ConnectorCollectionErrorInfo {
	readonly errorCode?: string | undefined;
	readonly errorMessage?: string | undefined;
	readonly errorStartTime?: string | undefined;
}
export interface ConnectorCollectionInfo {
	readonly error?: ConnectorCollectionErrorInfo | undefined;
	readonly lastRun?: string | undefined;
	readonly lastUpdated?: string | undefined;
	readonly sourceLastUpdated?: string | undefined;
}
export interface ConnectorDefinitionTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface ConnectorProperties {
	readonly collection?: ConnectorCollectionInfo | undefined;
	readonly createdOn?: string | undefined;
	readonly credentialsKey?: string | undefined;
	readonly credentialsSecret?: string | undefined;
	readonly displayName?: string | undefined;
	readonly modifiedOn?: string | undefined;
	readonly providerAccountId?: string | undefined;
	readonly reportId?: string | undefined;
	readonly status?: ("active" | "error" | "suspended") | undefined;
}
export interface ReportAggregation {
	readonly function: "Sum";
	readonly name: string;
}
export interface ReportComparisonExpression {
	readonly name: string;
	readonly operator: "In";
	readonly values: string[];
}
export interface ReportDataset {
	readonly aggregation?: ReportDatasetAggregation | undefined;
	readonly configuration?: ReportDatasetConfiguration | undefined;
	readonly filter?: ReportFilter | undefined;
	readonly granularity?: ("Daily" | "Hourly") | undefined;
	readonly grouping?: ReportGrouping[] | undefined;
}
export interface ReportDatasetAggregation {
	readonly "[ key: string ]"?: ReportAggregation | undefined;
}
export interface ReportDatasetConfiguration {
	readonly columns?: string[] | undefined;
}
export interface ReportDefinition {
	readonly dataset?: ReportDataset | undefined;
	readonly timeframe: "Custom" | "MonthToDate" | "WeekToDate";
	readonly timePeriod?: ReportTimePeriod | undefined;
	readonly type: "Usage";
}
export interface ReportDeliveryDestination {
	readonly container: string;
	readonly resourceId: string;
	readonly rootFolderPath?: string | undefined;
}
export interface ReportDeliveryInfo {
	readonly destination: ReportDeliveryDestination;
}
export interface ReportFilter {
	readonly and?: ReportFilter[] | undefined;
	readonly dimension?: ReportComparisonExpression | undefined;
	readonly not?: ReportFilter | undefined;
	readonly or?: ReportFilter[] | undefined;
	readonly tag?: ReportComparisonExpression | undefined;
}
export interface ReportGrouping {
	readonly name: string;
	readonly type: "Dimension" | "Tag";
}
export interface ReportProperties {
	readonly definition: ReportDefinition;
	readonly deliveryInfo: ReportDeliveryInfo;
	readonly format?: "Csv" | undefined;
	readonly schedule?: ReportSchedule | undefined;
}
export interface ReportRecurrencePeriod {
	readonly from: string;
	readonly to?: string | undefined;
}
export interface ReportSchedule {
	readonly recurrence: "Annually" | "Daily" | "Monthly" | "Weekly";
	readonly recurrencePeriod?: ReportRecurrencePeriod | undefined;
	readonly status?: ("Active" | "Inactive") | undefined;
}
export interface ReportTimePeriod {
	readonly from: string;
	readonly to: string;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	connectors: connectors,
	reports: reports,
};

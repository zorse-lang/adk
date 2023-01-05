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
	readonly kind?: string;
	readonly location?: string;
	readonly name: string;
	readonly properties?: ConnectorProperties;
	readonly tags?: ConnectorDefinitionTags;
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
	readonly properties?: ReportProperties;
	readonly tags?: ResourceTags;
}
export interface ConnectorCollectionErrorInfo {
	readonly errorCode?: string;
	readonly errorMessage?: string;
	readonly errorStartTime?: string;
}
export interface ConnectorCollectionInfo {
	readonly error?: ConnectorCollectionErrorInfo;
	readonly lastRun?: string;
	readonly lastUpdated?: string;
	readonly sourceLastUpdated?: string;
}
export interface ConnectorDefinitionTags {
	readonly [key: string]: string;
}
export interface ConnectorProperties {
	readonly collection?: ConnectorCollectionInfo;
	readonly createdOn?: string;
	readonly credentialsKey?: string;
	readonly credentialsSecret?: string;
	readonly displayName?: string;
	readonly modifiedOn?: string;
	readonly providerAccountId?: string;
	readonly reportId?: string;
	readonly status?: "active" | "error" | "suspended";
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
	readonly aggregation?: ReportDatasetAggregation;
	readonly configuration?: ReportDatasetConfiguration;
	readonly filter?: ReportFilter;
	readonly granularity?: "Daily" | "Hourly";
	readonly grouping?: ReportGrouping[];
}
export interface ReportDatasetAggregation {
	readonly [key: string]: ReportAggregation;
}
export interface ReportDatasetConfiguration {
	readonly columns?: string[];
}
export interface ReportDefinition {
	readonly dataset?: ReportDataset;
	readonly timeframe: "Custom" | "MonthToDate" | "WeekToDate";
	readonly timePeriod?: ReportTimePeriod;
	readonly type: "Usage";
}
export interface ReportDeliveryDestination {
	readonly container: string;
	readonly resourceId: string;
	readonly rootFolderPath?: string;
}
export interface ReportDeliveryInfo {
	readonly destination: ReportDeliveryDestination;
}
export interface ReportFilter {
	readonly and?: ReportFilter[];
	readonly dimension?: ReportComparisonExpression;
	readonly not?: ReportFilter;
	readonly or?: ReportFilter[];
	readonly tag?: ReportComparisonExpression;
}
export interface ReportGrouping {
	readonly name: string;
	readonly type: "Dimension" | "Tag";
}
export interface ReportProperties {
	readonly definition: ReportDefinition;
	readonly deliveryInfo: ReportDeliveryInfo;
	readonly format?: "Csv";
	readonly schedule?: ReportSchedule;
}
export interface ReportRecurrencePeriod {
	readonly from: string;
	readonly to?: string;
}
export interface ReportSchedule {
	readonly recurrence: "Annually" | "Daily" | "Monthly" | "Weekly";
	readonly recurrencePeriod?: ReportRecurrencePeriod;
	readonly status?: "Active" | "Inactive";
}
export interface ReportTimePeriod {
	readonly from: string;
	readonly to: string;
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export default {
	connectors: connectors,
	reports: reports,
};

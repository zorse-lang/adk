import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class exports extends ArmResource<exportsComponentInputs> implements exportsComponentOutputs {
	constructor(entity: ADKEntity, options: exportsComponentInputs) {
		super(entity, options.name, "Microsoft.CostManagement/exports", "2019-10-01", options);
	}
	public readonly apiVersion: "2019-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.CostManagement/exports";
}
export interface exportsComponentOutputs {
	readonly apiVersion: "2019-10-01";
	readonly id: string;
	readonly type: "Microsoft.CostManagement/exports";
}
export interface exportsComponentInputs {
	readonly name: string;
	readonly properties?: ExportProperties;
	readonly tags?: ResourceTags;
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
	readonly definition: QueryDefinition;
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
export interface QueryAggregation {
	readonly function: "Sum";
	readonly name: string;
}
export interface QueryComparisonExpression {
	readonly name: string;
	readonly operator: "In";
	readonly values: string[];
}
export interface QueryDataset {
	readonly aggregation?: QueryDatasetAggregation;
	readonly configuration?: QueryDatasetConfiguration;
	readonly filter?: QueryFilter;
	readonly granularity?: "Daily" | "Hourly";
	readonly grouping?: QueryGrouping[];
	readonly sorting?: QuerySortingConfiguration[];
}
export interface QueryDatasetAggregation {
	readonly [key: string]: QueryAggregation;
}
export interface QueryDatasetConfiguration {
	readonly columns?: string[];
}
export interface QueryDefinition {
	readonly dataset?: QueryDataset;
	readonly timeframe:
		| "Custom"
		| "MonthToDate"
		| "TheLastMonth"
		| "TheLastWeek"
		| "TheLastYear"
		| "WeekToDate"
		| "YearToDate";
	readonly timePeriod?: QueryTimePeriod;
	readonly type: "Usage";
}
export interface QueryFilter {
	readonly and?: QueryFilter[];
	readonly dimension?: QueryComparisonExpression;
	readonly not?: QueryFilter;
	readonly or?: QueryFilter[];
	readonly tag?: QueryComparisonExpression;
}
export interface QueryGrouping {
	readonly name: string;
	readonly type: "Dimension" | "Tag";
}
export interface QuerySortingConfiguration {
	readonly name?: string;
	readonly querySortingDirection?: "Ascending" | "Descending";
}
export interface QueryTimePeriod {
	readonly from: string;
	readonly to: string;
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export default {
	exports: exports,
};

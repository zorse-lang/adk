import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class exports extends ArmResource<exportsComponentInputs> implements exportsComponentOutputs {
	constructor(entity: ADKEntity, options: exportsComponentInputs) {
		super(entity, options.name, "Microsoft.CostManagement/exports", "2019-09-01", options);
	}
	public readonly apiVersion: "2019-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.CostManagement/exports";
}
export interface exportsComponentOutputs {
	readonly apiVersion: "2019-09-01";
	readonly id: string;
	readonly type: "Microsoft.CostManagement/exports";
}
export interface exportsComponentInputs {
	readonly name: string;
	readonly properties?: ExportProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export interface ExportDeliveryDestination {
	readonly container: string;
	readonly resourceId: string;
	readonly rootFolderPath?: string | undefined;
}
export interface ExportDeliveryInfo {
	readonly destination: ExportDeliveryDestination;
}
export interface ExportProperties {
	readonly definition: QueryDefinition;
	readonly deliveryInfo: ExportDeliveryInfo;
	readonly format?: "Csv" | undefined;
	readonly schedule?: ExportSchedule | undefined;
}
export interface ExportRecurrencePeriod {
	readonly from: string;
	readonly to?: string | undefined;
}
export interface ExportSchedule {
	readonly recurrence: "Annually" | "Daily" | "Monthly" | "Weekly";
	readonly recurrencePeriod?: ExportRecurrencePeriod | undefined;
	readonly status?: ("Active" | "Inactive") | undefined;
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
	readonly aggregation?: QueryDatasetAggregation | undefined;
	readonly configuration?: QueryDatasetConfiguration | undefined;
	readonly filter?: QueryFilter | undefined;
	readonly granularity?: ("Daily" | "Hourly") | undefined;
	readonly grouping?: QueryGrouping[] | undefined;
	readonly sorting?: QuerySortingConfiguration[] | undefined;
}
export interface QueryDatasetAggregation {
	readonly "[ key: string ]"?: QueryAggregation | undefined;
}
export interface QueryDatasetConfiguration {
	readonly columns?: string[] | undefined;
}
export interface QueryDefinition {
	readonly dataset?: QueryDataset | undefined;
	readonly timeframe:
		| "Custom"
		| "MonthToDate"
		| "TheLastMonth"
		| "TheLastWeek"
		| "TheLastYear"
		| "WeekToDate"
		| "YearToDate";
	readonly timePeriod?: QueryTimePeriod | undefined;
	readonly type: "Usage";
}
export interface QueryFilter {
	readonly and?: QueryFilter[] | undefined;
	readonly dimension?: QueryComparisonExpression | undefined;
	readonly not?: QueryFilter | undefined;
	readonly or?: QueryFilter[] | undefined;
	readonly tag?: QueryComparisonExpression | undefined;
}
export interface QueryGrouping {
	readonly name: string;
	readonly type: "Dimension" | "Tag";
}
export interface QuerySortingConfiguration {
	readonly name?: string | undefined;
	readonly querySortingDirection?: ("Ascending" | "Descending") | undefined;
}
export interface QueryTimePeriod {
	readonly from: string;
	readonly to: string;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	exports: exports,
};

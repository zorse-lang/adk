import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class reportconfigs extends ArmResource<reportconfigsComponentInputs> implements reportconfigsComponentOutputs {
	constructor(entity: ADKEntity, options: reportconfigsComponentInputs) {
		super(entity, options.name, "Microsoft.CostManagement/reportconfigs", "2018-05-31", options);
	}
	public readonly apiVersion: "2018-05-31";
	public readonly id: string;
	public readonly type: "Microsoft.CostManagement/reportconfigs";
}
export interface reportconfigsComponentOutputs {
	readonly apiVersion: "2018-05-31";
	readonly id: string;
	readonly type: "Microsoft.CostManagement/reportconfigs";
}
export interface reportconfigsComponentInputs {
	readonly name: string;
	readonly properties?: ReportConfigProperties;
	readonly tags?: ResourceTags;
}
export interface ReportConfigAggregation {
	readonly function: "Sum";
	readonly name: string;
}
export interface ReportConfigComparisonExpression {
	readonly name: string;
	readonly operator: "In";
	readonly values: string[];
}
export interface ReportConfigDataset {
	readonly aggregation?: ReportConfigDatasetAggregation;
	readonly configuration?: ReportConfigDatasetConfiguration;
	readonly filter?: ReportConfigFilter;
	readonly granularity?: "Daily";
	readonly grouping?: ReportConfigGrouping[];
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
export interface ReportConfigDeliveryDestination {
	readonly container: string;
	readonly resourceId: string;
	readonly rootFolderPath?: string;
}
export interface ReportConfigDeliveryInfo {
	readonly destination: ReportConfigDeliveryDestination;
}
export interface ReportConfigFilter {
	readonly and?: ReportConfigFilter[];
	readonly dimension?: ReportConfigComparisonExpression;
	readonly not?: ReportConfigFilter;
	readonly or?: ReportConfigFilter[];
	readonly tag?: ReportConfigComparisonExpression;
}
export interface ReportConfigGrouping {
	readonly columnType: "Dimension" | "Tag";
	readonly name: string;
}
export interface ReportConfigProperties {
	readonly definition: ReportConfigDefinition;
	readonly deliveryInfo: ReportConfigDeliveryInfo;
	readonly format?: "Csv";
	readonly schedule?: ReportConfigSchedule;
}
export interface ReportConfigRecurrencePeriod {
	readonly from: string;
	readonly to?: string;
}
export interface ReportConfigSchedule {
	readonly recurrence: "Annually" | "Daily" | "Monthly" | "Weekly";
	readonly recurrencePeriod: ReportConfigRecurrencePeriod;
	readonly status?: "Active" | "Inactive";
}
export interface ReportConfigTimePeriod {
	readonly from: string;
	readonly to: string;
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export default {
	reportconfigs: reportconfigs,
};

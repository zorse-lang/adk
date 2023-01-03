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
	readonly properties?: ReportConfigProperties | undefined;
	readonly tags?: ResourceTags | undefined;
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
	readonly aggregation?: ReportConfigDatasetAggregation | undefined;
	readonly configuration?: ReportConfigDatasetConfiguration | undefined;
	readonly filter?: ReportConfigFilter | undefined;
	readonly granularity?: "Daily" | undefined;
	readonly grouping?: ReportConfigGrouping[] | undefined;
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
export interface ReportConfigDeliveryDestination {
	readonly container: string;
	readonly resourceId: string;
	readonly rootFolderPath?: string | undefined;
}
export interface ReportConfigDeliveryInfo {
	readonly destination: ReportConfigDeliveryDestination;
}
export interface ReportConfigFilter {
	readonly and?: ReportConfigFilter[] | undefined;
	readonly dimension?: ReportConfigComparisonExpression | undefined;
	readonly not?: ReportConfigFilter | undefined;
	readonly or?: ReportConfigFilter[] | undefined;
	readonly tag?: ReportConfigComparisonExpression | undefined;
}
export interface ReportConfigGrouping {
	readonly columnType: "Dimension" | "Tag";
	readonly name: string;
}
export interface ReportConfigProperties {
	readonly definition: ReportConfigDefinition;
	readonly deliveryInfo: ReportConfigDeliveryInfo;
	readonly format?: "Csv" | undefined;
	readonly schedule?: ReportConfigSchedule | undefined;
}
export interface ReportConfigRecurrencePeriod {
	readonly from: string;
	readonly to?: string | undefined;
}
export interface ReportConfigSchedule {
	readonly recurrence: "Annually" | "Daily" | "Monthly" | "Weekly";
	readonly recurrencePeriod: ReportConfigRecurrencePeriod;
	readonly status?: ("Active" | "Inactive") | undefined;
}
export interface ReportConfigTimePeriod {
	readonly from: string;
	readonly to: string;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	reportconfigs: reportconfigs,
};

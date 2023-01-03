import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class budgets extends ArmResource<budgetsComponentInputs> implements budgetsComponentOutputs {
	constructor(entity: ADKEntity, options: budgetsComponentInputs) {
		super(entity, options.name, "Microsoft.Consumption/budgets", "2019-04-01-preview", options);
	}
	public readonly apiVersion: "2019-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Consumption/budgets";
}
export interface budgetsComponentOutputs {
	readonly apiVersion: "2019-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Consumption/budgets";
}
export interface budgetsComponentInputs {
	readonly eTag?: string | undefined;
	readonly name: string;
	readonly properties?: BudgetProperties | undefined;
}
export class pricesheets extends ArmResource<pricesheetsComponentInputs> implements pricesheetsComponentOutputs {
	constructor(entity: ADKEntity, options: pricesheetsComponentInputs) {
		super(entity, options.name, "Microsoft.Consumption/pricesheets", "2019-04-01-preview", options);
	}
	public readonly apiVersion: "2019-04-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Consumption/pricesheets";
}
export interface pricesheetsComponentOutputs {
	readonly apiVersion: "2019-04-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Consumption/pricesheets";
}
export interface pricesheetsComponentInputs {
	readonly name: string;
	readonly properties?: PriceSheetModel | undefined;
	readonly tags?: ResourceTags | undefined;
}
export interface BudgetProperties {
	readonly amount: number;
	readonly category: "Cost" | "Usage";
	readonly currentSpend?: CurrentSpend | undefined;
	readonly filters?: Filters | undefined;
	readonly notifications?: BudgetPropertiesNotifications | undefined;
	readonly timeGrain: "Annually" | "Monthly" | "Quarterly";
	readonly timePeriod: BudgetTimePeriod;
}
export interface BudgetPropertiesNotifications {
	readonly "[ key: string ]"?: Notification | undefined;
}
export interface BudgetTimePeriod {
	readonly endDate?: string | undefined;
	readonly startDate: string;
}
export interface CurrentSpend {
	readonly amount?: number | undefined;
	readonly unit?: string | undefined;
}
export interface Filters {
	readonly meters?: string[] | undefined;
	readonly resourceGroups?: string[] | undefined;
	readonly resources?: string[] | undefined;
	readonly tags?: FiltersTags | undefined;
}
export interface FiltersTags {
	readonly "[ key: string ]"?: string[] | undefined;
}
export interface MeterDetails {
	readonly meterCategory?: string | undefined;
	readonly meterLocation?: string | undefined;
	readonly meterName?: string | undefined;
	readonly meterSubCategory?: string | undefined;
	readonly pretaxStandardRate?: number | undefined;
	readonly serviceName?: string | undefined;
	readonly serviceTier?: string | undefined;
	readonly totalIncludedQuantity?: number | undefined;
	readonly unit?: string | undefined;
}
export interface Notification {
	readonly contactEmails: string[];
	readonly contactGroups?: string[] | undefined;
	readonly contactRoles?: string[] | undefined;
	readonly enabled: boolean;
	readonly operator: "EqualTo" | "GreaterThan" | "GreaterThanOrEqualTo";
	readonly threshold: number;
}
export interface PriceSheetModel {
	readonly nextLink?: string | undefined;
	readonly pricesheets?: PriceSheetProperties[] | undefined;
}
export interface PriceSheetProperties {
	readonly billingPeriodId?: string | undefined;
	readonly currencyCode?: string | undefined;
	readonly includedQuantity?: number | undefined;
	readonly meterDetails?: MeterDetails | undefined;
	readonly meterId?: string | undefined;
	readonly offerId?: string | undefined;
	readonly partNumber?: string | undefined;
	readonly unitOfMeasure?: string | undefined;
	readonly unitPrice?: number | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	budgets: budgets,
	pricesheets: pricesheets,
};

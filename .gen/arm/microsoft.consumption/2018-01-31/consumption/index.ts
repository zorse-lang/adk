import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class budgets extends ArmResource<budgetsComponentInputs> implements budgetsComponentOutputs {
	constructor(entity: ADKEntity, options: budgetsComponentInputs) {
		super(entity, options.name, "Microsoft.Consumption/budgets", "2018-01-31", options);
	}
	public readonly apiVersion: "2018-01-31";
	public readonly id: string;
	public readonly type: "Microsoft.Consumption/budgets";
}
export interface budgetsComponentOutputs {
	readonly apiVersion: "2018-01-31";
	readonly id: string;
	readonly type: "Microsoft.Consumption/budgets";
}
export interface budgetsComponentInputs {
	readonly eTag?: string;
	readonly name: string;
	readonly properties?: BudgetProperties;
}
export class pricesheets extends ArmResource<pricesheetsComponentInputs> implements pricesheetsComponentOutputs {
	constructor(entity: ADKEntity, options: pricesheetsComponentInputs) {
		super(entity, options.name, "Microsoft.Consumption/pricesheets", "2018-01-31", options);
	}
	public readonly apiVersion: "2018-01-31";
	public readonly id: string;
	public readonly type: "Microsoft.Consumption/pricesheets";
}
export interface pricesheetsComponentOutputs {
	readonly apiVersion: "2018-01-31";
	readonly id: string;
	readonly type: "Microsoft.Consumption/pricesheets";
}
export interface pricesheetsComponentInputs {
	readonly name: string;
	readonly properties?: PriceSheetModel;
	readonly tags?: ResourceTags;
}
export interface BudgetProperties {
	readonly amount: number;
	readonly category: "Cost" | "Usage";
	readonly currentSpend?: CurrentSpend;
	readonly filters?: Filters;
	readonly notifications?: BudgetPropertiesNotifications;
	readonly timeGrain: "Annually" | "Monthly" | "Quarterly";
	readonly timePeriod: BudgetTimePeriod;
}
export interface BudgetPropertiesNotifications {
	readonly [key: string]: Notification;
}
export interface BudgetTimePeriod {
	readonly endDate?: string;
	readonly startDate: string;
}
export interface CurrentSpend {
	readonly amount?: number;
	readonly unit?: string;
}
export interface Filters {
	readonly meters?: string[];
	readonly resourceGroups?: string[];
	readonly resources?: string[];
}
export interface MeterDetails {
	readonly meterCategory?: string;
	readonly meterLocation?: string;
	readonly meterName?: string;
	readonly meterSubCategory?: string;
	readonly pretaxStandardRate?: number;
	readonly totalIncludedQuantity?: number;
	readonly unit?: string;
}
export interface Notification {
	readonly contactEmails: string[];
	readonly contactGroups?: string[];
	readonly contactRoles?: string[];
	readonly enabled: boolean;
	readonly operator: "EqualTo" | "GreaterThan" | "GreaterThanOrEqualTo";
	readonly threshold: number;
}
export interface PriceSheetModel {
	readonly nextLink?: string;
	readonly pricesheets?: PriceSheetProperties[];
}
export interface PriceSheetProperties {
	readonly billingPeriodId?: string;
	readonly currencyCode?: string;
	readonly includedQuantity?: number;
	readonly meterDetails?: MeterDetails;
	readonly meterId?: string;
	readonly partNumber?: string;
	readonly unitOfMeasure?: string;
	readonly unitPrice?: number;
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export default {
	budgets: budgets,
	pricesheets: pricesheets,
};

import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class budgets extends ArmResource<budgetsComponentInputs> implements budgetsComponentOutputs {
	constructor(entity: ADKEntity, options: budgetsComponentInputs) {
		super(entity, options.name, "Microsoft.Consumption/budgets", "2019-11-01", options);
	}
	public readonly apiVersion: "2019-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Consumption/budgets";
}
export interface budgetsComponentOutputs {
	readonly apiVersion: "2019-11-01";
	readonly id: string;
	readonly type: "Microsoft.Consumption/budgets";
}
export interface budgetsComponentInputs {
	readonly eTag?: string;
	readonly name: string;
	readonly properties?: BudgetProperties;
}
export class credits extends ArmResource<creditsComponentInputs> implements creditsComponentOutputs {
	constructor(entity: ADKEntity, options: creditsComponentInputs) {
		super(entity, options.name, "Microsoft.Consumption/credits", "2019-11-01", options);
	}
	public readonly apiVersion: "2019-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Consumption/credits";
}
export interface creditsComponentOutputs {
	readonly apiVersion: "2019-11-01";
	readonly id: string;
	readonly type: "Microsoft.Consumption/credits";
}
export interface creditsComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: CreditSummaryProperties;
	readonly tags?: ResourceTags;
}
export class pricesheets extends ArmResource<pricesheetsComponentInputs> implements pricesheetsComponentOutputs {
	constructor(entity: ADKEntity, options: pricesheetsComponentInputs) {
		super(entity, options.name, "Microsoft.Consumption/pricesheets", "2019-11-01", options);
	}
	public readonly apiVersion: "2019-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Consumption/pricesheets";
}
export interface pricesheetsComponentOutputs {
	readonly apiVersion: "2019-11-01";
	readonly id: string;
	readonly type: "Microsoft.Consumption/pricesheets";
}
export interface pricesheetsComponentInputs {
	readonly etag?: string;
	readonly name: string;
	readonly properties?: PriceSheetModel;
	readonly tags?: ResourceTags;
}
export interface Amount {
	readonly currency?: string;
	readonly value?: number;
}
export interface BudgetComparisonExpression {
	readonly name: string;
	readonly operator: "In";
	readonly values: string[];
}
export interface BudgetFilter {
	readonly and?: BudgetFilterProperties[];
	readonly dimensions?: BudgetComparisonExpression;
	readonly not?: BudgetFilterProperties;
	readonly tags?: BudgetComparisonExpression;
}
export interface BudgetFilterProperties {
	readonly dimensions?: BudgetComparisonExpression;
	readonly tags?: BudgetComparisonExpression;
}
export interface BudgetProperties {
	readonly amount: number;
	readonly category: "Cost";
	readonly currentSpend?: CurrentSpend;
	readonly filter?: BudgetFilter;
	readonly forecastSpend?: ForecastSpend;
	readonly notifications?: BudgetPropertiesNotifications;
	readonly timeGrain: "Annually" | "BillingAnnual" | "BillingMonth" | "BillingQuarter" | "Monthly" | "Quarterly";
	readonly timePeriod: BudgetTimePeriod;
}
export interface BudgetPropertiesNotifications {
	readonly [key: string]: Notification;
}
export interface BudgetTimePeriod {
	readonly endDate?: string;
	readonly startDate: string;
}
export interface CreditBalanceSummary {
	readonly currentBalance?: Amount;
	readonly estimatedBalance?: Amount;
}
export interface CreditSummaryProperties {
	readonly balanceSummary?: CreditBalanceSummary;
	readonly expiredCredit?: Amount;
	readonly pendingCreditAdjustments?: Amount;
	readonly pendingEligibleCharges?: Amount;
}
export interface CurrentSpend {
	readonly amount?: number;
	readonly unit?: string;
}
export interface ForecastSpend {
	readonly amount?: number;
	readonly unit?: string;
}
export interface MeterDetails {
	readonly meterCategory?: string;
	readonly meterLocation?: string;
	readonly meterName?: string;
	readonly meterSubCategory?: string;
	readonly pretaxStandardRate?: number;
	readonly serviceName?: string;
	readonly serviceTier?: string;
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
	readonly thresholdType?: "Actual" | "Forecasted";
}
export interface PriceSheetModel {
	readonly download?: MeterDetails;
	readonly nextLink?: string;
	readonly pricesheets?: PriceSheetProperties[];
}
export interface PriceSheetProperties {
	readonly billingPeriodId?: string;
	readonly currencyCode?: string;
	readonly includedQuantity?: number;
	readonly meterDetails?: MeterDetails;
	readonly meterId?: string;
	readonly offerId?: string;
	readonly partNumber?: string;
	readonly unitOfMeasure?: string;
	readonly unitPrice?: number;
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export default {
	budgets: budgets,
	credits: credits,
	pricesheets: pricesheets,
};

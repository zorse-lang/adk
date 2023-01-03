import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class budgets extends ArmResource<budgetsComponentInputs> implements budgetsComponentOutputs {
	constructor(entity: ADKEntity, options: budgetsComponentInputs) {
		super(entity, options.name, "Microsoft.Consumption/budgets", "2021-10-01", options);
	}
	public readonly apiVersion: "2021-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.Consumption/budgets";
}
export interface budgetsComponentOutputs {
	readonly apiVersion: "2021-10-01";
	readonly id: string;
	readonly type: "Microsoft.Consumption/budgets";
}
export interface budgetsComponentInputs {
	readonly eTag?: string | undefined;
	readonly name: string;
	readonly properties?: BudgetProperties | undefined;
}
export class credits extends ArmResource<creditsComponentInputs> implements creditsComponentOutputs {
	constructor(entity: ADKEntity, options: creditsComponentInputs) {
		super(entity, options.name, "Microsoft.Consumption/credits", "2021-10-01", options);
	}
	public readonly apiVersion: "2021-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.Consumption/credits";
}
export interface creditsComponentOutputs {
	readonly apiVersion: "2021-10-01";
	readonly id: string;
	readonly type: "Microsoft.Consumption/credits";
}
export interface creditsComponentInputs {
	readonly eTag?: string | undefined;
	readonly name: string;
	readonly properties?: CreditSummaryProperties | undefined;
}
export class pricesheets extends ArmResource<pricesheetsComponentInputs> implements pricesheetsComponentOutputs {
	constructor(entity: ADKEntity, options: pricesheetsComponentInputs) {
		super(entity, options.name, "Microsoft.Consumption/pricesheets", "2021-10-01", options);
	}
	public readonly apiVersion: "2021-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.Consumption/pricesheets";
}
export interface pricesheetsComponentOutputs {
	readonly apiVersion: "2021-10-01";
	readonly id: string;
	readonly type: "Microsoft.Consumption/pricesheets";
}
export interface pricesheetsComponentInputs {
	readonly etag?: string | undefined;
	readonly name: string;
	readonly properties?: PriceSheetModel | undefined;
	readonly tags?: ResourceTags | undefined;
}
export interface Amount {
	readonly currency?: string | undefined;
	readonly value?: number | undefined;
}
export interface AmountWithExchangeRate {
	readonly currency?: string | undefined;
	readonly exchangeRate?: number | undefined;
	readonly exchangeRateMonth?: number | undefined;
	readonly value?: number | undefined;
}
export interface BudgetComparisonExpression {
	readonly name: string;
	readonly operator: "In";
	readonly values: string[];
}
export interface BudgetFilter {
	readonly and?: BudgetFilterProperties[] | undefined;
	readonly dimensions?: BudgetComparisonExpression | undefined;
	readonly tags?: BudgetComparisonExpression | undefined;
}
export interface BudgetFilterProperties {
	readonly dimensions?: BudgetComparisonExpression | undefined;
	readonly tags?: BudgetComparisonExpression | undefined;
}
export interface BudgetProperties {
	readonly amount: number;
	readonly category: "Cost";
	readonly currentSpend?: CurrentSpend | undefined;
	readonly filter?: BudgetFilter | undefined;
	readonly forecastSpend?: ForecastSpend | undefined;
	readonly notifications?: BudgetPropertiesNotifications | undefined;
	readonly timeGrain: "Annually" | "BillingAnnual" | "BillingMonth" | "BillingQuarter" | "Monthly" | "Quarterly";
	readonly timePeriod: BudgetTimePeriod;
}
export interface BudgetPropertiesNotifications {
	readonly "[ key: string ]"?: Notification | undefined;
}
export interface BudgetTimePeriod {
	readonly endDate?: string | undefined;
	readonly startDate: string;
}
export interface CreditBalanceSummary {
	readonly currentBalance?: Amount | undefined;
	readonly estimatedBalance?: Amount | undefined;
	readonly estimatedBalanceInBillingCurrency?: AmountWithExchangeRate | undefined;
}
export interface CreditSummaryProperties {
	readonly balanceSummary?: CreditBalanceSummary | undefined;
	readonly billingCurrency?: string | undefined;
	readonly creditCurrency?: string | undefined;
	readonly eTag?: string | undefined;
	readonly expiredCredit?: Amount | undefined;
	readonly pendingCreditAdjustments?: Amount | undefined;
	readonly pendingEligibleCharges?: Amount | undefined;
	readonly reseller?: Reseller | undefined;
}
export interface CurrentSpend {
	readonly amount?: number | undefined;
	readonly unit?: string | undefined;
}
export interface ForecastSpend {
	readonly amount?: number | undefined;
	readonly unit?: string | undefined;
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
	readonly locale?:
		| (
				| "cs-cz"
				| "da-dk"
				| "de-de"
				| "en-gb"
				| "en-us"
				| "es-es"
				| "fr-fr"
				| "hu-hu"
				| "it-it"
				| "ja-jp"
				| "ko-kr"
				| "nb-no"
				| "nl-nl"
				| "pl-pl"
				| "pt-br"
				| "pt-pt"
				| "ru-ru"
				| "sv-se"
				| "tr-tr"
				| "zh-cn"
				| "zh-tw"
		  )
		| undefined;
	readonly operator: "EqualTo" | "GreaterThan" | "GreaterThanOrEqualTo";
	readonly threshold: number;
	readonly thresholdType?: ("Actual" | "Forecasted") | undefined;
}
export interface PriceSheetModel {
	readonly download?: MeterDetails | undefined;
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
export interface Reseller {
	readonly resellerDescription?: string | undefined;
	readonly resellerId?: string | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	budgets: budgets,
	credits: credits,
	pricesheets: pricesheets,
};

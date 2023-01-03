import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class budgets extends ArmResource<budgetsComponentInputs> implements budgetsComponentOutputs {
	constructor(entity: ADKEntity, options: budgetsComponentInputs) {
		super(entity, options.name, "Microsoft.Consumption/budgets", "2017-12-30-preview", options);
	}
	public readonly apiVersion: "2017-12-30-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Consumption/budgets";
}
export interface budgetsComponentOutputs {
	readonly apiVersion: "2017-12-30-preview";
	readonly id: string;
	readonly type: "Microsoft.Consumption/budgets";
}
export interface budgetsComponentInputs {
	readonly eTag?: string | undefined;
	readonly name: string;
	readonly properties?: BudgetProperties | undefined;
}
export interface BudgetProperties {
	readonly amount: number;
	readonly category: "Cost";
	readonly currentSpend?: CurrentSpend | undefined;
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
export interface Notification {
	readonly contactEmails: string[];
	readonly contactRoles?: string[] | undefined;
	readonly enabled: boolean;
	readonly operator: "EqualTo" | "GreaterThan" | "GreaterThanOrEqualTo";
	readonly threshold: number;
}
export default {
	budgets: budgets,
};

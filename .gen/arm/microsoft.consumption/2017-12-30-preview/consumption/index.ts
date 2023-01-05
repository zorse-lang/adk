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
	readonly eTag?: string;
	readonly name: string;
	readonly properties?: BudgetProperties;
}
export interface BudgetProperties {
	readonly amount: number;
	readonly category: "Cost";
	readonly currentSpend?: CurrentSpend;
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
export interface Notification {
	readonly contactEmails: string[];
	readonly contactRoles?: string[];
	readonly enabled: boolean;
	readonly operator: "EqualTo" | "GreaterThan" | "GreaterThanOrEqualTo";
	readonly threshold: number;
}
export default {
	budgets: budgets,
};

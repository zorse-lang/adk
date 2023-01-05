import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class billingPeriods extends ArmResource<billingPeriodsComponentInputs> implements billingPeriodsComponentOutputs {
	constructor(entity: ADKEntity, options: billingPeriodsComponentInputs) {
		super(entity, options.name, "Microsoft.Billing/billingPeriods", "2018-03-01-preview", options);
	}
	public readonly apiVersion: "2018-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/billingPeriods";
}
export interface billingPeriodsComponentOutputs {
	readonly apiVersion: "2018-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Billing/billingPeriods";
}
export interface billingPeriodsComponentInputs {
	readonly name: string;
	readonly properties?: BillingPeriodProperties;
}
export class enrollmentAccounts
	extends ArmResource<enrollmentAccountsComponentInputs>
	implements enrollmentAccountsComponentOutputs
{
	constructor(entity: ADKEntity, options: enrollmentAccountsComponentInputs) {
		super(entity, options.name, "Microsoft.Billing/enrollmentAccounts", "2018-03-01-preview", options);
	}
	public readonly apiVersion: "2018-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/enrollmentAccounts";
}
export interface enrollmentAccountsComponentOutputs {
	readonly apiVersion: "2018-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Billing/enrollmentAccounts";
}
export interface enrollmentAccountsComponentInputs {
	readonly name: string;
	readonly properties?: EnrollmentAccountProperties;
}
export class invoices extends ArmResource<invoicesComponentInputs> implements invoicesComponentOutputs {
	constructor(entity: ADKEntity, options: invoicesComponentInputs) {
		super(entity, options.name, "Microsoft.Billing/invoices", "2018-03-01-preview", options);
	}
	public readonly apiVersion: "2018-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/invoices";
}
export interface invoicesComponentOutputs {
	readonly apiVersion: "2018-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Billing/invoices";
}
export interface invoicesComponentInputs {
	readonly name: string;
	readonly properties?: InvoiceProperties;
}
export interface BillingPeriodProperties {
	readonly billingPeriodEndDate?: string;
	readonly billingPeriodStartDate?: string;
	readonly invoiceIds?: string[];
}
export interface DownloadUrl {
	readonly expiryTime?: string;
	readonly url?: string;
}
export interface EnrollmentAccountProperties {
	readonly principalName?: string;
}
export interface InvoiceProperties {
	readonly billingPeriodIds?: string[];
	readonly downloadUrl?: DownloadUrl;
	readonly invoicePeriodEndDate?: string;
	readonly invoicePeriodStartDate?: string;
}
export default {
	billingPeriods: billingPeriods,
	enrollmentAccounts: enrollmentAccounts,
	invoices: invoices,
};

import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class billingPeriods extends ArmResource<billingPeriodsComponentInputs> implements billingPeriodsComponentOutputs {
	constructor(entity: ADKEntity, options: billingPeriodsComponentInputs) {
		super(entity, options.name, "Microsoft.Billing/billingPeriods", "2017-04-24-preview", options);
	}
	public readonly apiVersion: "2017-04-24-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/billingPeriods";
}
export interface billingPeriodsComponentOutputs {
	readonly apiVersion: "2017-04-24-preview";
	readonly id: string;
	readonly type: "Microsoft.Billing/billingPeriods";
}
export interface billingPeriodsComponentInputs {
	readonly name: string;
	readonly properties?: BillingPeriodProperties | undefined;
}
export class invoices extends ArmResource<invoicesComponentInputs> implements invoicesComponentOutputs {
	constructor(entity: ADKEntity, options: invoicesComponentInputs) {
		super(entity, options.name, "Microsoft.Billing/invoices", "2017-04-24-preview", options);
	}
	public readonly apiVersion: "2017-04-24-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/invoices";
}
export interface invoicesComponentOutputs {
	readonly apiVersion: "2017-04-24-preview";
	readonly id: string;
	readonly type: "Microsoft.Billing/invoices";
}
export interface invoicesComponentInputs {
	readonly name: string;
	readonly properties?: InvoiceProperties | undefined;
}
export interface BillingPeriodProperties {
	readonly billingPeriodEndDate?: string | undefined;
	readonly billingPeriodStartDate?: string | undefined;
	readonly invoiceIds?: string[] | undefined;
}
export interface DownloadUrl {
	readonly expiryTime?: string | undefined;
	readonly url?: string | undefined;
}
export interface InvoiceProperties {
	readonly billingPeriodIds?: string[] | undefined;
	readonly downloadUrl?: DownloadUrl | undefined;
	readonly invoicePeriodEndDate?: string | undefined;
	readonly invoicePeriodStartDate?: string | undefined;
}
export default {
	billingPeriods: billingPeriods,
	invoices: invoices,
};

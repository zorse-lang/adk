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
	readonly properties?: BillingPeriodProperties;
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
export interface InvoiceProperties {
	readonly billingPeriodIds?: string[];
	readonly downloadUrl?: DownloadUrl;
	readonly invoicePeriodEndDate?: string;
	readonly invoicePeriodStartDate?: string;
}
export default {
	billingPeriods: billingPeriods,
	invoices: invoices,
};

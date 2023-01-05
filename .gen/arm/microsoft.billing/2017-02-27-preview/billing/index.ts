import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class invoices extends ArmResource<invoicesComponentInputs> implements invoicesComponentOutputs {
	constructor(entity: ADKEntity, options: invoicesComponentInputs) {
		super(entity, options.name, "Microsoft.Billing/invoices", "2017-02-27-preview", options);
	}
	public readonly apiVersion: "2017-02-27-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/invoices";
}
export interface invoicesComponentOutputs {
	readonly apiVersion: "2017-02-27-preview";
	readonly id: string;
	readonly type: "Microsoft.Billing/invoices";
}
export interface invoicesComponentInputs {
	readonly name: string;
	readonly properties?: InvoiceProperties;
}
export interface DownloadUrl {
	readonly expiryTime?: string;
	readonly url?: string;
}
export interface InvoiceProperties {
	readonly downloadUrl?: DownloadUrl;
	readonly invoicePeriodEndDate?: string;
	readonly invoicePeriodStartDate?: string;
}
export default {
	invoices: invoices,
};

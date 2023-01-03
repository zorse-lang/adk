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
	readonly properties?: InvoiceProperties | undefined;
}
export interface DownloadUrl {
	readonly expiryTime?: string | undefined;
	readonly url?: string | undefined;
}
export interface InvoiceProperties {
	readonly downloadUrl?: DownloadUrl | undefined;
	readonly invoicePeriodEndDate?: string | undefined;
	readonly invoicePeriodStartDate?: string | undefined;
}
export default {
	invoices: invoices,
};

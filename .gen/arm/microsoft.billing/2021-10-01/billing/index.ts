import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class billingAccounts_billingProfiles_paymentMethodLinks
	extends ArmResource<billingAccounts_billingProfiles_paymentMethodLinksComponentInputs>
	implements billingAccounts_billingProfiles_paymentMethodLinksComponentOutputs
{
	constructor(entity: ADKEntity, options: billingAccounts_billingProfiles_paymentMethodLinksComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Billing/billingAccounts/billingProfiles/paymentMethodLinks",
			"2021-10-01",
			options,
		);
	}
	public readonly apiVersion: "2021-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/billingAccounts/billingProfiles/paymentMethodLinks";
}
export interface billingAccounts_billingProfiles_paymentMethodLinksComponentOutputs {
	readonly apiVersion: "2021-10-01";
	readonly id: string;
	readonly type: "Microsoft.Billing/billingAccounts/billingProfiles/paymentMethodLinks";
}
export interface billingAccounts_billingProfiles_paymentMethodLinksComponentInputs {
	readonly name: string;
	readonly properties?: PaymentMethodLinkProperties | undefined;
}
export class billingAccounts_billingSubscriptionAliases
	extends ArmResource<billingAccounts_billingSubscriptionAliasesComponentInputs>
	implements billingAccounts_billingSubscriptionAliasesComponentOutputs
{
	constructor(entity: ADKEntity, options: billingAccounts_billingSubscriptionAliasesComponentInputs) {
		super(entity, options.name, "Microsoft.Billing/billingAccounts/billingSubscriptionAliases", "2021-10-01", options);
	}
	public readonly apiVersion: "2021-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/billingAccounts/billingSubscriptionAliases";
}
export interface billingAccounts_billingSubscriptionAliasesComponentOutputs {
	readonly apiVersion: "2021-10-01";
	readonly id: string;
	readonly type: "Microsoft.Billing/billingAccounts/billingSubscriptionAliases";
}
export interface billingAccounts_billingSubscriptionAliasesComponentInputs {
	readonly name: string;
	readonly properties?: BillingSubscriptionAliasProperties | undefined;
}
export class billingAccounts_billingSubscriptions
	extends ArmResource<billingAccounts_billingSubscriptionsComponentInputs>
	implements billingAccounts_billingSubscriptionsComponentOutputs
{
	constructor(entity: ADKEntity, options: billingAccounts_billingSubscriptionsComponentInputs) {
		super(entity, options.name, "Microsoft.Billing/billingAccounts/billingSubscriptions", "2021-10-01", options);
	}
	public readonly apiVersion: "2021-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/billingAccounts/billingSubscriptions";
}
export interface billingAccounts_billingSubscriptionsComponentOutputs {
	readonly apiVersion: "2021-10-01";
	readonly id: string;
	readonly type: "Microsoft.Billing/billingAccounts/billingSubscriptions";
}
export interface billingAccounts_billingSubscriptionsComponentInputs {
	readonly name: string;
	readonly properties?: BillingSubscriptionProperties | undefined;
}
export class billingAccounts_paymentMethods
	extends ArmResource<billingAccounts_paymentMethodsComponentInputs>
	implements billingAccounts_paymentMethodsComponentOutputs
{
	constructor(entity: ADKEntity, options: billingAccounts_paymentMethodsComponentInputs) {
		super(entity, options.name, "Microsoft.Billing/billingAccounts/paymentMethods", "2021-10-01", options);
	}
	public readonly apiVersion: "2021-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/billingAccounts/paymentMethods";
}
export interface billingAccounts_paymentMethodsComponentOutputs {
	readonly apiVersion: "2021-10-01";
	readonly id: string;
	readonly type: "Microsoft.Billing/billingAccounts/paymentMethods";
}
export interface billingAccounts_paymentMethodsComponentInputs {
	readonly name: string;
	readonly properties?: PaymentMethodProperties | undefined;
}
export class paymentMethods extends ArmResource<paymentMethodsComponentInputs> implements paymentMethodsComponentOutputs {
	constructor(entity: ADKEntity, options: paymentMethodsComponentInputs) {
		super(entity, options.name, "Microsoft.Billing/paymentMethods", "2021-10-01", options);
	}
	public readonly apiVersion: "2021-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/paymentMethods";
}
export interface paymentMethodsComponentOutputs {
	readonly apiVersion: "2021-10-01";
	readonly id: string;
	readonly type: "Microsoft.Billing/paymentMethods";
}
export interface paymentMethodsComponentInputs {
	readonly name: string;
	readonly properties?: PaymentMethodProperties | undefined;
}
export interface Amount {
	readonly currency?: string | undefined;
	readonly value?: number | undefined;
}
export interface BillingSubscriptionAliasProperties {
	readonly autoRenew?: ("Off" | "On") | undefined;
	readonly beneficiaryTenantId?: string | undefined;
	readonly billingFrequency?: string | undefined;
	readonly billingPolicies?: BillingSubscriptionPropertiesBillingPolicies | undefined;
	readonly billingProfileDisplayName?: string | undefined;
	readonly billingProfileId?: string | undefined;
	readonly billingProfileName?: string | undefined;
	readonly billingSubscriptionId?: string | undefined;
	readonly consumptionCostCenter?: string | undefined;
	readonly customerDisplayName?: string | undefined;
	readonly customerId?: string | undefined;
	readonly displayName?: string | undefined;
	readonly enrollmentAccountDisplayName?: string | undefined;
	readonly enrollmentAccountId?: string | undefined;
	readonly enrollmentAccountSubscriptionDetails?: EnrollmentAccountSubscriptionDetails | undefined;
	readonly invoiceSectionDisplayName?: string | undefined;
	readonly invoiceSectionId?: string | undefined;
	readonly invoiceSectionName?: string | undefined;
	readonly lastMonthCharges?: Amount | undefined;
	readonly monthToDateCharges?: Amount | undefined;
	readonly nextBillingCycleDetails?: NextBillingCycleDetails | undefined;
	readonly offerId?: string | undefined;
	readonly productCategory?: string | undefined;
	readonly productType?: string | undefined;
	readonly productTypeId?: string | undefined;
	readonly purchaseDate?: string | undefined;
	readonly quantity?: number | undefined;
	readonly renewalTermDetails?: RenewalTermDetails | undefined;
	readonly reseller?: Reseller | undefined;
	readonly skuDescription?: string | undefined;
	readonly skuId?: string | undefined;
	readonly status?:
		| (
				| "Active"
				| "AutoRenew"
				| "Cancelled"
				| "Deleted"
				| "Disabled"
				| "Expired"
				| "Expiring"
				| "Suspended"
				| "Unknown"
				| "Warned"
		  )
		| undefined;
	readonly subscriptionId?: string | undefined;
	readonly suspensionReasons?: string[] | undefined;
	readonly termDuration?: string | undefined;
	readonly termEndDate?: string | undefined;
	readonly termStartDate?: string | undefined;
}
export interface BillingSubscriptionProperties {
	readonly autoRenew?: ("Off" | "On") | undefined;
	readonly beneficiaryTenantId?: string | undefined;
	readonly billingFrequency?: string | undefined;
	readonly billingPolicies?: BillingSubscriptionPropertiesBillingPolicies | undefined;
	readonly billingProfileDisplayName?: string | undefined;
	readonly billingProfileId?: string | undefined;
	readonly billingProfileName?: string | undefined;
	readonly consumptionCostCenter?: string | undefined;
	readonly customerDisplayName?: string | undefined;
	readonly customerId?: string | undefined;
	readonly displayName?: string | undefined;
	readonly enrollmentAccountDisplayName?: string | undefined;
	readonly enrollmentAccountId?: string | undefined;
	readonly enrollmentAccountSubscriptionDetails?: EnrollmentAccountSubscriptionDetails | undefined;
	readonly invoiceSectionDisplayName?: string | undefined;
	readonly invoiceSectionId?: string | undefined;
	readonly invoiceSectionName?: string | undefined;
	readonly lastMonthCharges?: Amount | undefined;
	readonly monthToDateCharges?: Amount | undefined;
	readonly nextBillingCycleDetails?: NextBillingCycleDetails | undefined;
	readonly offerId?: string | undefined;
	readonly productCategory?: string | undefined;
	readonly productType?: string | undefined;
	readonly productTypeId?: string | undefined;
	readonly purchaseDate?: string | undefined;
	readonly quantity?: number | undefined;
	readonly renewalTermDetails?: RenewalTermDetails | undefined;
	readonly reseller?: Reseller | undefined;
	readonly skuDescription?: string | undefined;
	readonly skuId?: string | undefined;
	readonly status?:
		| (
				| "Active"
				| "AutoRenew"
				| "Cancelled"
				| "Deleted"
				| "Disabled"
				| "Expired"
				| "Expiring"
				| "Suspended"
				| "Unknown"
				| "Warned"
		  )
		| undefined;
	readonly subscriptionId?: string | undefined;
	readonly suspensionReasons?: string[] | undefined;
	readonly termDuration?: string | undefined;
	readonly termEndDate?: string | undefined;
	readonly termStartDate?: string | undefined;
}
export interface BillingSubscriptionPropertiesBillingPolicies {
	readonly "[ key: string ]"?: string | undefined;
}
export interface EnrollmentAccountSubscriptionDetails {
	readonly enrollmentAccountStartDate?: string | undefined;
	readonly subscriptionEnrollmentAccountStatus?:
		| ("Active" | "Cancelled" | "Deleted" | "Expired" | "TransferredOut" | "Transferring")
		| undefined;
}
export interface NextBillingCycleDetails {
	readonly billingFrequency?: string | undefined;
}
export interface PaymentMethodLinkProperties {
	readonly paymentMethod?: PaymentMethodProjectionProperties | undefined;
}
export interface PaymentMethodLogo {
	readonly mimeType?: string | undefined;
	readonly url?: string | undefined;
}
export interface PaymentMethodProjectionProperties {
	readonly accountHolderName?: string | undefined;
	readonly displayName?: string | undefined;
	readonly expiration?: string | undefined;
	readonly family?: ("CheckWire" | "CreditCard") | undefined;
	readonly id?: string | undefined;
	readonly lastFourDigits?: string | undefined;
	readonly logos?: PaymentMethodLogo[] | undefined;
	readonly status?: ("active" | "inactive") | undefined;
	readonly type?: string | undefined;
}
export interface PaymentMethodProperties {
	readonly accountHolderName?: string | undefined;
	readonly displayName?: string | undefined;
	readonly expiration?: string | undefined;
	readonly family?: ("CheckWire" | "CreditCard") | undefined;
	readonly lastFourDigits?: string | undefined;
	readonly logos?: PaymentMethodLogo[] | undefined;
	readonly status?: ("active" | "inactive") | undefined;
	readonly type?: string | undefined;
}
export interface RenewalTermDetails {
	readonly billingFrequency?: string | undefined;
	readonly productTypeId?: string | undefined;
	readonly quantity?: number | undefined;
	readonly skuId?: string | undefined;
	readonly termDuration?: string | undefined;
}
export interface Reseller {
	readonly description?: string | undefined;
	readonly resellerId?: string | undefined;
}
export default {
	"billingAccounts/billingProfiles/paymentMethodLinks": billingAccounts_billingProfiles_paymentMethodLinks,
	"billingAccounts/billingSubscriptionAliases": billingAccounts_billingSubscriptionAliases,
	"billingAccounts/billingSubscriptions": billingAccounts_billingSubscriptions,
	"billingAccounts/paymentMethods": billingAccounts_paymentMethods,
	paymentMethods: paymentMethods,
};

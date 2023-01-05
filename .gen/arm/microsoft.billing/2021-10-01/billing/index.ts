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
	readonly properties?: PaymentMethodLinkProperties;
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
	readonly properties?: BillingSubscriptionAliasProperties;
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
	readonly properties?: BillingSubscriptionProperties;
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
	readonly properties?: PaymentMethodProperties;
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
	readonly properties?: PaymentMethodProperties;
}
export interface Amount {
	readonly currency?: string;
	readonly value?: number;
}
export interface BillingSubscriptionAliasProperties {
	readonly autoRenew?: "Off" | "On";
	readonly beneficiaryTenantId?: string;
	readonly billingFrequency?: string;
	readonly billingPolicies?: BillingSubscriptionPropertiesBillingPolicies;
	readonly billingProfileDisplayName?: string;
	readonly billingProfileId?: string;
	readonly billingProfileName?: string;
	readonly billingSubscriptionId?: string;
	readonly consumptionCostCenter?: string;
	readonly customerDisplayName?: string;
	readonly customerId?: string;
	readonly displayName?: string;
	readonly enrollmentAccountDisplayName?: string;
	readonly enrollmentAccountId?: string;
	readonly enrollmentAccountSubscriptionDetails?: EnrollmentAccountSubscriptionDetails;
	readonly invoiceSectionDisplayName?: string;
	readonly invoiceSectionId?: string;
	readonly invoiceSectionName?: string;
	readonly lastMonthCharges?: Amount;
	readonly monthToDateCharges?: Amount;
	readonly nextBillingCycleDetails?: NextBillingCycleDetails;
	readonly offerId?: string;
	readonly productCategory?: string;
	readonly productType?: string;
	readonly productTypeId?: string;
	readonly purchaseDate?: string;
	readonly quantity?: number;
	readonly renewalTermDetails?: RenewalTermDetails;
	readonly reseller?: Reseller;
	readonly skuDescription?: string;
	readonly skuId?: string;
	readonly status?:
		| "Active"
		| "AutoRenew"
		| "Cancelled"
		| "Deleted"
		| "Disabled"
		| "Expired"
		| "Expiring"
		| "Suspended"
		| "Unknown"
		| "Warned";
	readonly subscriptionId?: string;
	readonly suspensionReasons?: string[];
	readonly termDuration?: string;
	readonly termEndDate?: string;
	readonly termStartDate?: string;
}
export interface BillingSubscriptionProperties {
	readonly autoRenew?: "Off" | "On";
	readonly beneficiaryTenantId?: string;
	readonly billingFrequency?: string;
	readonly billingPolicies?: BillingSubscriptionPropertiesBillingPolicies;
	readonly billingProfileDisplayName?: string;
	readonly billingProfileId?: string;
	readonly billingProfileName?: string;
	readonly consumptionCostCenter?: string;
	readonly customerDisplayName?: string;
	readonly customerId?: string;
	readonly displayName?: string;
	readonly enrollmentAccountDisplayName?: string;
	readonly enrollmentAccountId?: string;
	readonly enrollmentAccountSubscriptionDetails?: EnrollmentAccountSubscriptionDetails;
	readonly invoiceSectionDisplayName?: string;
	readonly invoiceSectionId?: string;
	readonly invoiceSectionName?: string;
	readonly lastMonthCharges?: Amount;
	readonly monthToDateCharges?: Amount;
	readonly nextBillingCycleDetails?: NextBillingCycleDetails;
	readonly offerId?: string;
	readonly productCategory?: string;
	readonly productType?: string;
	readonly productTypeId?: string;
	readonly purchaseDate?: string;
	readonly quantity?: number;
	readonly renewalTermDetails?: RenewalTermDetails;
	readonly reseller?: Reseller;
	readonly skuDescription?: string;
	readonly skuId?: string;
	readonly status?:
		| "Active"
		| "AutoRenew"
		| "Cancelled"
		| "Deleted"
		| "Disabled"
		| "Expired"
		| "Expiring"
		| "Suspended"
		| "Unknown"
		| "Warned";
	readonly subscriptionId?: string;
	readonly suspensionReasons?: string[];
	readonly termDuration?: string;
	readonly termEndDate?: string;
	readonly termStartDate?: string;
}
export interface BillingSubscriptionPropertiesBillingPolicies {
	readonly [key: string]: string;
}
export interface EnrollmentAccountSubscriptionDetails {
	readonly enrollmentAccountStartDate?: string;
	readonly subscriptionEnrollmentAccountStatus?:
		| "Active"
		| "Cancelled"
		| "Deleted"
		| "Expired"
		| "TransferredOut"
		| "Transferring";
}
export interface NextBillingCycleDetails {
	readonly billingFrequency?: string;
}
export interface PaymentMethodLinkProperties {
	readonly paymentMethod?: PaymentMethodProjectionProperties;
}
export interface PaymentMethodLogo {
	readonly mimeType?: string;
	readonly url?: string;
}
export interface PaymentMethodProjectionProperties {
	readonly accountHolderName?: string;
	readonly displayName?: string;
	readonly expiration?: string;
	readonly family?: "CheckWire" | "CreditCard";
	readonly id?: string;
	readonly lastFourDigits?: string;
	readonly logos?: PaymentMethodLogo[];
	readonly status?: "active" | "inactive";
	readonly type?: string;
}
export interface PaymentMethodProperties {
	readonly accountHolderName?: string;
	readonly displayName?: string;
	readonly expiration?: string;
	readonly family?: "CheckWire" | "CreditCard";
	readonly lastFourDigits?: string;
	readonly logos?: PaymentMethodLogo[];
	readonly status?: "active" | "inactive";
	readonly type?: string;
}
export interface RenewalTermDetails {
	readonly billingFrequency?: string;
	readonly productTypeId?: string;
	readonly quantity?: number;
	readonly skuId?: string;
	readonly termDuration?: string;
}
export interface Reseller {
	readonly description?: string;
	readonly resellerId?: string;
}
export default {
	"billingAccounts/billingProfiles/paymentMethodLinks": billingAccounts_billingProfiles_paymentMethodLinks,
	"billingAccounts/billingSubscriptionAliases": billingAccounts_billingSubscriptionAliases,
	"billingAccounts/billingSubscriptions": billingAccounts_billingSubscriptions,
	"billingAccounts/paymentMethods": billingAccounts_paymentMethods,
	paymentMethods: paymentMethods,
};

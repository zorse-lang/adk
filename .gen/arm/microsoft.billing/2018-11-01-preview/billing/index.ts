import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class billingAccounts
	extends ArmResource<billingAccountsComponentInputs>
	implements billingAccountsComponentOutputs
{
	constructor(entity: ADKEntity, options: billingAccountsComponentInputs) {
		super(entity, options.name, "Microsoft.Billing/billingAccounts", "2018-11-01-preview", options);
	}
	public readonly apiVersion: "2018-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/billingAccounts";
}
export interface billingAccountsComponentOutputs {
	readonly apiVersion: "2018-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Billing/billingAccounts";
}
export interface billingAccountsComponentInputs {
	readonly name: string;
	readonly properties?: BillingAccountProperties | undefined;
}
export class billingAccounts_agreements
	extends ArmResource<billingAccounts_agreementsComponentInputs>
	implements billingAccounts_agreementsComponentOutputs
{
	constructor(entity: ADKEntity, options: billingAccounts_agreementsComponentInputs) {
		super(entity, options.name, "Microsoft.Billing/billingAccounts/agreements", "2018-11-01-preview", options);
	}
	public readonly apiVersion: "2018-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/billingAccounts/agreements";
}
export interface billingAccounts_agreementsComponentOutputs {
	readonly apiVersion: "2018-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Billing/billingAccounts/agreements";
}
export interface billingAccounts_agreementsComponentInputs {
	readonly name: string;
	readonly properties?: AgreementProperties | undefined;
}
export class billingAccounts_billingProfiles
	extends ArmResource<billingAccounts_billingProfilesComponentInputs>
	implements billingAccounts_billingProfilesComponentOutputs
{
	constructor(entity: ADKEntity, options: billingAccounts_billingProfilesComponentInputs) {
		super(entity, options.name, "Microsoft.Billing/billingAccounts/billingProfiles", "2018-11-01-preview", options);
	}
	public readonly apiVersion: "2018-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/billingAccounts/billingProfiles";
}
export interface billingAccounts_billingProfilesComponentOutputs {
	readonly apiVersion: "2018-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Billing/billingAccounts/billingProfiles";
}
export interface billingAccounts_billingProfilesComponentInputs {
	readonly name: string;
	readonly properties?: BillingProfileProperties | undefined;
}
export class billingAccounts_billingProfiles_availableBalance
	extends ArmResource<billingAccounts_billingProfiles_availableBalanceComponentInputs>
	implements billingAccounts_billingProfiles_availableBalanceComponentOutputs
{
	constructor(entity: ADKEntity, options: billingAccounts_billingProfiles_availableBalanceComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Billing/billingAccounts/billingProfiles/availableBalance",
			"2018-11-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2018-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/billingAccounts/billingProfiles/availableBalance";
}
export interface billingAccounts_billingProfiles_availableBalanceComponentOutputs {
	readonly apiVersion: "2018-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Billing/billingAccounts/billingProfiles/availableBalance";
}
export interface billingAccounts_billingProfiles_availableBalanceComponentInputs {
	readonly name: string;
	readonly properties?: AvailableBalanceProperties | undefined;
}
export class billingAccounts_billingProfiles_invoices
	extends ArmResource<billingAccounts_billingProfiles_invoicesComponentInputs>
	implements billingAccounts_billingProfiles_invoicesComponentOutputs
{
	constructor(entity: ADKEntity, options: billingAccounts_billingProfiles_invoicesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Billing/billingAccounts/billingProfiles/invoices",
			"2018-11-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2018-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/billingAccounts/billingProfiles/invoices";
}
export interface billingAccounts_billingProfiles_invoicesComponentOutputs {
	readonly apiVersion: "2018-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Billing/billingAccounts/billingProfiles/invoices";
}
export interface billingAccounts_billingProfiles_invoicesComponentInputs {
	readonly name: string;
	readonly properties?: InvoiceSummaryProperties | undefined;
}
export class billingAccounts_billingProfiles_policies
	extends ArmResource<billingAccounts_billingProfiles_policiesComponentInputs>
	implements billingAccounts_billingProfiles_policiesComponentOutputs
{
	constructor(entity: ADKEntity, options: billingAccounts_billingProfiles_policiesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Billing/billingAccounts/billingProfiles/policies",
			"2018-11-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2018-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/billingAccounts/billingProfiles/policies";
}
export interface billingAccounts_billingProfiles_policiesComponentOutputs {
	readonly apiVersion: "2018-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Billing/billingAccounts/billingProfiles/policies";
}
export interface billingAccounts_billingProfiles_policiesComponentInputs {
	readonly name: string;
	readonly properties?: PolicyProperties | undefined;
}
export class billingAccounts_customers
	extends ArmResource<billingAccounts_customersComponentInputs>
	implements billingAccounts_customersComponentOutputs
{
	constructor(entity: ADKEntity, options: billingAccounts_customersComponentInputs) {
		super(entity, options.name, "Microsoft.Billing/billingAccounts/customers", "2018-11-01-preview", options);
	}
	public readonly apiVersion: "2018-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/billingAccounts/customers";
}
export interface billingAccounts_customersComponentOutputs {
	readonly apiVersion: "2018-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Billing/billingAccounts/customers";
}
export interface billingAccounts_customersComponentInputs {
	readonly name: string;
	readonly properties?: CustomerProperties | undefined;
}
export class billingAccounts_customers_billingSubscriptions
	extends ArmResource<billingAccounts_customers_billingSubscriptionsComponentInputs>
	implements billingAccounts_customers_billingSubscriptionsComponentOutputs
{
	constructor(entity: ADKEntity, options: billingAccounts_customers_billingSubscriptionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Billing/billingAccounts/customers/billingSubscriptions",
			"2018-11-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2018-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/billingAccounts/customers/billingSubscriptions";
}
export interface billingAccounts_customers_billingSubscriptionsComponentOutputs {
	readonly apiVersion: "2018-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Billing/billingAccounts/customers/billingSubscriptions";
}
export interface billingAccounts_customers_billingSubscriptionsComponentInputs {
	readonly name: string;
	readonly properties?: BillingSubscriptionProperties | undefined;
}
export class billingAccounts_departments
	extends ArmResource<billingAccounts_departmentsComponentInputs>
	implements billingAccounts_departmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: billingAccounts_departmentsComponentInputs) {
		super(entity, options.name, "Microsoft.Billing/billingAccounts/departments", "2018-11-01-preview", options);
	}
	public readonly apiVersion: "2018-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/billingAccounts/departments";
}
export interface billingAccounts_departmentsComponentOutputs {
	readonly apiVersion: "2018-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Billing/billingAccounts/departments";
}
export interface billingAccounts_departmentsComponentInputs {
	readonly name: string;
	readonly properties?: DepartmentProperties | undefined;
}
export class billingAccounts_enrollmentAccounts
	extends ArmResource<billingAccounts_enrollmentAccountsComponentInputs>
	implements billingAccounts_enrollmentAccountsComponentOutputs
{
	constructor(entity: ADKEntity, options: billingAccounts_enrollmentAccountsComponentInputs) {
		super(entity, options.name, "Microsoft.Billing/billingAccounts/enrollmentAccounts", "2018-11-01-preview", options);
	}
	public readonly apiVersion: "2018-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/billingAccounts/enrollmentAccounts";
}
export interface billingAccounts_enrollmentAccountsComponentOutputs {
	readonly apiVersion: "2018-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Billing/billingAccounts/enrollmentAccounts";
}
export interface billingAccounts_enrollmentAccountsComponentInputs {
	readonly name: string;
	readonly properties?: EnrollmentAccountProperties | undefined;
}
export class billingAccounts_invoiceSections
	extends ArmResource<billingAccounts_invoiceSectionsComponentInputs>
	implements billingAccounts_invoiceSectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: billingAccounts_invoiceSectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Billing/billingAccounts/invoiceSections", "2018-11-01-preview", options);
	}
	public readonly apiVersion: "2018-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/billingAccounts/invoiceSections";
}
export interface billingAccounts_invoiceSectionsComponentOutputs {
	readonly apiVersion: "2018-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Billing/billingAccounts/invoiceSections";
}
export interface billingAccounts_invoiceSectionsComponentInputs {
	readonly name: string;
	readonly properties?: InvoiceSectionProperties | undefined;
}
export class billingAccounts_invoiceSections_billingSubscriptions
	extends ArmResource<billingAccounts_invoiceSections_billingSubscriptionsComponentInputs>
	implements billingAccounts_invoiceSections_billingSubscriptionsComponentOutputs
{
	constructor(entity: ADKEntity, options: billingAccounts_invoiceSections_billingSubscriptionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Billing/billingAccounts/invoiceSections/billingSubscriptions",
			"2018-11-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2018-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/billingAccounts/invoiceSections/billingSubscriptions";
}
export interface billingAccounts_invoiceSections_billingSubscriptionsComponentOutputs {
	readonly apiVersion: "2018-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Billing/billingAccounts/invoiceSections/billingSubscriptions";
}
export interface billingAccounts_invoiceSections_billingSubscriptionsComponentInputs {
	readonly name: string;
	readonly properties?: BillingSubscriptionProperties | undefined;
}
export class billingAccounts_invoiceSections_products
	extends ArmResource<billingAccounts_invoiceSections_productsComponentInputs>
	implements billingAccounts_invoiceSections_productsComponentOutputs
{
	constructor(entity: ADKEntity, options: billingAccounts_invoiceSections_productsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Billing/billingAccounts/invoiceSections/products",
			"2018-11-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2018-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/billingAccounts/invoiceSections/products";
}
export interface billingAccounts_invoiceSections_productsComponentOutputs {
	readonly apiVersion: "2018-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Billing/billingAccounts/invoiceSections/products";
}
export interface billingAccounts_invoiceSections_productsComponentInputs {
	readonly name: string;
	readonly properties?: ProductSummaryProperties | undefined;
}
export class billingAccounts_lineOfCredit
	extends ArmResource<billingAccounts_lineOfCreditComponentInputs>
	implements billingAccounts_lineOfCreditComponentOutputs
{
	constructor(entity: ADKEntity, options: billingAccounts_lineOfCreditComponentInputs) {
		super(entity, options.name, "Microsoft.Billing/billingAccounts/lineOfCredit", "2018-11-01-preview", options);
	}
	public readonly apiVersion: "2018-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/billingAccounts/lineOfCredit";
}
export interface billingAccounts_lineOfCreditComponentOutputs {
	readonly apiVersion: "2018-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Billing/billingAccounts/lineOfCredit";
}
export interface billingAccounts_lineOfCreditComponentInputs {
	readonly name: string;
	readonly properties?: LineOfCreditProperties | undefined;
}
export class billingRoleAssignments
	extends ArmResource<billingRoleAssignmentsComponentInputs>
	implements billingRoleAssignmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: billingRoleAssignmentsComponentInputs) {
		super(entity, options.name, "Microsoft.Billing/billingRoleAssignments", "2018-11-01-preview", options);
	}
	public readonly apiVersion: "2018-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/billingRoleAssignments";
}
export interface billingRoleAssignmentsComponentOutputs {
	readonly apiVersion: "2018-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Billing/billingRoleAssignments";
}
export interface billingRoleAssignmentsComponentInputs {
	readonly name: string;
	readonly properties?: BillingRoleAssignmentProperties | undefined;
}
export class billingRoleDefinitions
	extends ArmResource<billingRoleDefinitionsComponentInputs>
	implements billingRoleDefinitionsComponentOutputs
{
	constructor(entity: ADKEntity, options: billingRoleDefinitionsComponentInputs) {
		super(entity, options.name, "Microsoft.Billing/billingRoleDefinitions", "2018-11-01-preview", options);
	}
	public readonly apiVersion: "2018-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/billingRoleDefinitions";
}
export interface billingRoleDefinitionsComponentOutputs {
	readonly apiVersion: "2018-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Billing/billingRoleDefinitions";
}
export interface billingRoleDefinitionsComponentInputs {
	readonly name: string;
	readonly properties?: BillingRoleDefinitionProperties | undefined;
}
export interface Address {
	readonly addressLine1?: string | undefined;
	readonly addressLine2?: string | undefined;
	readonly addressLine3?: string | undefined;
	readonly city?: string | undefined;
	readonly companyName?: string | undefined;
	readonly country?: string | undefined;
	readonly firstName?: string | undefined;
	readonly lastName?: string | undefined;
	readonly postalCode?: string | undefined;
	readonly region?: string | undefined;
}
export interface AgreementProperties {
	readonly agreementLink?: string | undefined;
	readonly effectiveDate?: string | undefined;
	readonly expirationDate?: string | undefined;
	readonly participants?: Participants[] | undefined;
	readonly status?: string | undefined;
}
export interface Amount {
	readonly currency?: string | undefined;
	readonly value?: number | undefined;
}
export interface AvailableBalanceProperties {
	readonly amount?: Amount | undefined;
}
export interface BillingAccountProperties {
	readonly accountType?: ("Enrollment" | "Organization") | undefined;
	readonly address?: Address | undefined;
	readonly billingProfiles?: BillingProfile[] | undefined;
	readonly company?: string | undefined;
	readonly country?: string | undefined;
	readonly departments?: Department[] | undefined;
	readonly displayName?: string | undefined;
	readonly enrollmentAccounts?: EnrollmentAccount[] | undefined;
	readonly enrollmentDetails?: Enrollment | undefined;
	readonly hasReadAccess?: boolean | undefined;
	readonly invoiceSections?: InvoiceSection[] | undefined;
}
export interface BillingPermissionsListResult {
	readonly value?: BillingPermissionsProperties[] | undefined;
}
export interface BillingPermissionsProperties {
	readonly actions?: string[] | undefined;
	readonly notActions?: string[] | undefined;
}
export interface BillingProfile {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: BillingProfileProperties | undefined;
	readonly type?: string | undefined;
}
export interface BillingProfileProperties {
	readonly address?: Address | undefined;
	readonly currency?: string | undefined;
	readonly displayName?: string | undefined;
	readonly enabledAzureSKUs?: EnabledAzureSKUs[] | undefined;
	readonly invoiceDay?: number | undefined;
	readonly invoiceEmailOptIn?: boolean | undefined;
	readonly invoiceSections?: InvoiceSection[] | undefined;
	readonly isClassic?: boolean | undefined;
	readonly poNumber?: string | undefined;
}
export interface BillingRoleAssignmentProperties {
	readonly createdByPrincipalId?: string | undefined;
	readonly createdByPrincipalTenantId?: string | undefined;
	readonly createdOn?: string | undefined;
	readonly name?: string | undefined;
	readonly principalId?: string | undefined;
	readonly roleDefinitionName?: string | undefined;
	readonly scope?: string | undefined;
}
export interface BillingRoleDefinitionProperties {
	readonly description?: string | undefined;
	readonly permissions?: BillingPermissionsListResult | undefined;
	readonly roleName?: string | undefined;
}
export interface BillingSubscriptionProperties {
	readonly billingProfileId?: string | undefined;
	readonly billingProfileName?: string | undefined;
	readonly customerDisplayName?: string | undefined;
	readonly customerId?: string | undefined;
	readonly displayName?: string | undefined;
	readonly invoiceSectionId?: string | undefined;
	readonly invoiceSectionName?: string | undefined;
	readonly lastMonthCharges?: Amount | undefined;
	readonly monthToDateCharges?: Amount | undefined;
	readonly reseller?: Reseller | undefined;
	readonly skuDescription?: string | undefined;
	readonly skuId?: string | undefined;
	readonly subscriptionBillingStatus?: ("Abandoned" | "Active" | "Deleted" | "Inactive" | "Warning") | undefined;
	readonly subscriptionId?: string | undefined;
}
export interface CustomerProperties {
	readonly displayName?: string | undefined;
	readonly enabledAzureSKUs?: EnabledAzureSKUs[] | undefined;
	readonly resellers?: Reseller[] | undefined;
}
export interface Department {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: DepartmentProperties | undefined;
	readonly type?: string | undefined;
}
export interface DepartmentProperties {
	readonly costCenter?: string | undefined;
	readonly departmentName?: string | undefined;
	readonly enrollmentAccounts?: EnrollmentAccount[] | undefined;
	readonly status?: string | undefined;
}
export interface DownloadProperties {
	readonly kind?: ("CreditNote" | "Invoice" | "Receipt" | "VoidNote") | undefined;
	readonly url?: string | undefined;
}
export interface EnabledAzureSKUs {
	readonly skuDescription?: string | undefined;
	readonly skuId?: string | undefined;
}
export interface Enrollment {
	readonly billingCycle?: string | undefined;
	readonly channel?: string | undefined;
	readonly countryCode?: string | undefined;
	readonly currency?: string | undefined;
	readonly endDate?: string | undefined;
	readonly language?: string | undefined;
	readonly policies?: EnrollmentPolicies | undefined;
	readonly startDate?: string | undefined;
	readonly status?: string | undefined;
}
export interface EnrollmentAccount {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: EnrollmentAccountProperties | undefined;
	readonly type?: string | undefined;
}
export interface EnrollmentAccountProperties {
	readonly accountName?: string | undefined;
	readonly accountOwner?: string | undefined;
	readonly costCenter?: string | undefined;
	readonly department?: Department | undefined;
	readonly endDate?: string | undefined;
	readonly startDate?: string | undefined;
	readonly status?: string | undefined;
}
export interface EnrollmentPolicies {
	readonly accountOwnerViewCharges?: boolean | undefined;
	readonly departmentAdminViewCharges?: boolean | undefined;
	readonly marketplacesEnabled?: boolean | undefined;
	readonly reservedInstancesEnabled?: boolean | undefined;
}
export interface InvoiceSection {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: InvoiceSectionProperties | undefined;
	readonly type?: string | undefined;
}
export interface InvoiceSectionProperties {
	readonly billingProfiles?: BillingProfile[] | undefined;
	readonly displayName?: string | undefined;
}
export interface InvoiceSummaryProperties {
	readonly amountDue?: Amount | undefined;
	readonly billedAmount?: Amount | undefined;
	readonly billingProfileId?: string | undefined;
	readonly billingProfileName?: string | undefined;
	readonly documentUrls?: DownloadProperties[] | undefined;
	readonly dueDate?: string | undefined;
	readonly invoiceDate?: string | undefined;
	readonly invoicePeriodEndDate?: string | undefined;
	readonly invoicePeriodStartDate?: string | undefined;
	readonly payments?: PaymentProperties[] | undefined;
	readonly purchaseOrderNumber?: string | undefined;
	readonly status?: ("Due" | "Paid" | "PastDue" | "Void") | undefined;
}
export interface LineOfCreditProperties {
	readonly creditLimit?: Amount | undefined;
	readonly reason?: string | undefined;
	readonly remainingBalance?: Amount | undefined;
	readonly status?: ("Approved" | "Rejected") | undefined;
}
export interface Participants {
	readonly email?: string | undefined;
	readonly status?: string | undefined;
	readonly statusDate?: string | undefined;
}
export interface PaymentProperties {
	readonly amount?: Amount | undefined;
	readonly date?: string | undefined;
	readonly paymentType?: string | undefined;
}
export interface PolicyProperties {
	readonly marketplacePurchasesAllowed?: boolean | undefined;
	readonly reservationPurchasesAllowed?: boolean | undefined;
	readonly subscriptionOwnerCanViewCharges?: boolean | undefined;
}
export interface ProductSummaryProperties {
	readonly availabilityId?: string | undefined;
	readonly billingFrequency?: ("Monthly" | "OneTime" | "UsageBased") | undefined;
	readonly billingProfileId?: string | undefined;
	readonly billingProfileName?: string | undefined;
	readonly displayName?: string | undefined;
	readonly endDate?: string | undefined;
	readonly invoiceSectionId?: string | undefined;
	readonly invoiceSectionName?: string | undefined;
	readonly lastCharge?: Amount | undefined;
	readonly lastChargeDate?: string | undefined;
	readonly parentProductId?: string | undefined;
	readonly productType?: string | undefined;
	readonly productTypeId?: string | undefined;
	readonly purchaseDate?: string | undefined;
	readonly quantity?: number | undefined;
	readonly skuDescription?: string | undefined;
	readonly skuId?: string | undefined;
	readonly status?:
		| ("Active" | "AutoRenew" | "Cancelled" | "Disabled" | "Expired" | "Expiring" | "Inactive" | "PastDue")
		| undefined;
}
export interface Reseller {
	readonly description?: string | undefined;
	readonly resellerId?: string | undefined;
}
export default {
	billingAccounts: billingAccounts,
	"billingAccounts/agreements": billingAccounts_agreements,
	"billingAccounts/billingProfiles": billingAccounts_billingProfiles,
	"billingAccounts/billingProfiles/availableBalance": billingAccounts_billingProfiles_availableBalance,
	"billingAccounts/billingProfiles/invoices": billingAccounts_billingProfiles_invoices,
	"billingAccounts/billingProfiles/policies": billingAccounts_billingProfiles_policies,
	"billingAccounts/customers": billingAccounts_customers,
	"billingAccounts/customers/billingSubscriptions": billingAccounts_customers_billingSubscriptions,
	"billingAccounts/departments": billingAccounts_departments,
	"billingAccounts/enrollmentAccounts": billingAccounts_enrollmentAccounts,
	"billingAccounts/invoiceSections": billingAccounts_invoiceSections,
	"billingAccounts/invoiceSections/billingSubscriptions": billingAccounts_invoiceSections_billingSubscriptions,
	"billingAccounts/invoiceSections/products": billingAccounts_invoiceSections_products,
	"billingAccounts/lineOfCredit": billingAccounts_lineOfCredit,
	billingRoleAssignments: billingRoleAssignments,
	billingRoleDefinitions: billingRoleDefinitions,
};

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
	readonly properties?: BillingAccountProperties;
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
	readonly properties?: AgreementProperties;
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
	readonly properties?: BillingProfileProperties;
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
	readonly properties?: AvailableBalanceProperties;
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
	readonly properties?: InvoiceSummaryProperties;
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
	readonly properties?: PolicyProperties;
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
	readonly properties?: CustomerProperties;
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
	readonly properties?: BillingSubscriptionProperties;
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
	readonly properties?: DepartmentProperties;
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
	readonly properties?: EnrollmentAccountProperties;
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
	readonly properties?: InvoiceSectionProperties;
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
	readonly properties?: BillingSubscriptionProperties;
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
	readonly properties?: ProductSummaryProperties;
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
	readonly properties?: LineOfCreditProperties;
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
	readonly properties?: BillingRoleAssignmentProperties;
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
	readonly properties?: BillingRoleDefinitionProperties;
}
export interface Address {
	readonly addressLine1?: string;
	readonly addressLine2?: string;
	readonly addressLine3?: string;
	readonly city?: string;
	readonly companyName?: string;
	readonly country?: string;
	readonly firstName?: string;
	readonly lastName?: string;
	readonly postalCode?: string;
	readonly region?: string;
}
export interface AgreementProperties {
	readonly agreementLink?: string;
	readonly effectiveDate?: string;
	readonly expirationDate?: string;
	readonly participants?: Participants[];
	readonly status?: string;
}
export interface Amount {
	readonly currency?: string;
	readonly value?: number;
}
export interface AvailableBalanceProperties {
	readonly amount?: Amount;
}
export interface BillingAccountProperties {
	readonly accountType?: "Enrollment" | "Organization";
	readonly address?: Address;
	readonly billingProfiles?: BillingProfile[];
	readonly company?: string;
	readonly country?: string;
	readonly departments?: Department[];
	readonly displayName?: string;
	readonly enrollmentAccounts?: EnrollmentAccount[];
	readonly enrollmentDetails?: Enrollment;
	readonly hasReadAccess?: boolean;
	readonly invoiceSections?: InvoiceSection[];
}
export interface BillingPermissionsListResult {
	readonly value?: BillingPermissionsProperties[];
}
export interface BillingPermissionsProperties {
	readonly actions?: string[];
	readonly notActions?: string[];
}
export interface BillingProfile {
	readonly id?: string;
	readonly name?: string;
	readonly properties?: BillingProfileProperties;
	readonly type?: string;
}
export interface BillingProfileProperties {
	readonly address?: Address;
	readonly currency?: string;
	readonly displayName?: string;
	readonly enabledAzureSKUs?: EnabledAzureSKUs[];
	readonly invoiceDay?: number;
	readonly invoiceEmailOptIn?: boolean;
	readonly invoiceSections?: InvoiceSection[];
	readonly isClassic?: boolean;
	readonly poNumber?: string;
}
export interface BillingRoleAssignmentProperties {
	readonly createdByPrincipalId?: string;
	readonly createdByPrincipalTenantId?: string;
	readonly createdOn?: string;
	readonly name?: string;
	readonly principalId?: string;
	readonly roleDefinitionName?: string;
	readonly scope?: string;
}
export interface BillingRoleDefinitionProperties {
	readonly description?: string;
	readonly permissions?: BillingPermissionsListResult;
	readonly roleName?: string;
}
export interface BillingSubscriptionProperties {
	readonly billingProfileId?: string;
	readonly billingProfileName?: string;
	readonly customerDisplayName?: string;
	readonly customerId?: string;
	readonly displayName?: string;
	readonly invoiceSectionId?: string;
	readonly invoiceSectionName?: string;
	readonly lastMonthCharges?: Amount;
	readonly monthToDateCharges?: Amount;
	readonly reseller?: Reseller;
	readonly skuDescription?: string;
	readonly skuId?: string;
	readonly subscriptionBillingStatus?: "Abandoned" | "Active" | "Deleted" | "Inactive" | "Warning";
	readonly subscriptionId?: string;
}
export interface CustomerProperties {
	readonly displayName?: string;
	readonly enabledAzureSKUs?: EnabledAzureSKUs[];
	readonly resellers?: Reseller[];
}
export interface Department {
	readonly id?: string;
	readonly name?: string;
	readonly properties?: DepartmentProperties;
	readonly type?: string;
}
export interface DepartmentProperties {
	readonly costCenter?: string;
	readonly departmentName?: string;
	readonly enrollmentAccounts?: EnrollmentAccount[];
	readonly status?: string;
}
export interface DownloadProperties {
	readonly kind?: "CreditNote" | "Invoice" | "Receipt" | "VoidNote";
	readonly url?: string;
}
export interface EnabledAzureSKUs {
	readonly skuDescription?: string;
	readonly skuId?: string;
}
export interface Enrollment {
	readonly billingCycle?: string;
	readonly channel?: string;
	readonly countryCode?: string;
	readonly currency?: string;
	readonly endDate?: string;
	readonly language?: string;
	readonly policies?: EnrollmentPolicies;
	readonly startDate?: string;
	readonly status?: string;
}
export interface EnrollmentAccount {
	readonly id?: string;
	readonly name?: string;
	readonly properties?: EnrollmentAccountProperties;
	readonly type?: string;
}
export interface EnrollmentAccountProperties {
	readonly accountName?: string;
	readonly accountOwner?: string;
	readonly costCenter?: string;
	readonly department?: Department;
	readonly endDate?: string;
	readonly startDate?: string;
	readonly status?: string;
}
export interface EnrollmentPolicies {
	readonly accountOwnerViewCharges?: boolean;
	readonly departmentAdminViewCharges?: boolean;
	readonly marketplacesEnabled?: boolean;
	readonly reservedInstancesEnabled?: boolean;
}
export interface InvoiceSection {
	readonly id?: string;
	readonly name?: string;
	readonly properties?: InvoiceSectionProperties;
	readonly type?: string;
}
export interface InvoiceSectionProperties {
	readonly billingProfiles?: BillingProfile[];
	readonly displayName?: string;
}
export interface InvoiceSummaryProperties {
	readonly amountDue?: Amount;
	readonly billedAmount?: Amount;
	readonly billingProfileId?: string;
	readonly billingProfileName?: string;
	readonly documentUrls?: DownloadProperties[];
	readonly dueDate?: string;
	readonly invoiceDate?: string;
	readonly invoicePeriodEndDate?: string;
	readonly invoicePeriodStartDate?: string;
	readonly payments?: PaymentProperties[];
	readonly purchaseOrderNumber?: string;
	readonly status?: "Due" | "Paid" | "PastDue" | "Void";
}
export interface LineOfCreditProperties {
	readonly creditLimit?: Amount;
	readonly reason?: string;
	readonly remainingBalance?: Amount;
	readonly status?: "Approved" | "Rejected";
}
export interface Participants {
	readonly email?: string;
	readonly status?: string;
	readonly statusDate?: string;
}
export interface PaymentProperties {
	readonly amount?: Amount;
	readonly date?: string;
	readonly paymentType?: string;
}
export interface PolicyProperties {
	readonly marketplacePurchasesAllowed?: boolean;
	readonly reservationPurchasesAllowed?: boolean;
	readonly subscriptionOwnerCanViewCharges?: boolean;
}
export interface ProductSummaryProperties {
	readonly availabilityId?: string;
	readonly billingFrequency?: "Monthly" | "OneTime" | "UsageBased";
	readonly billingProfileId?: string;
	readonly billingProfileName?: string;
	readonly displayName?: string;
	readonly endDate?: string;
	readonly invoiceSectionId?: string;
	readonly invoiceSectionName?: string;
	readonly lastCharge?: Amount;
	readonly lastChargeDate?: string;
	readonly parentProductId?: string;
	readonly productType?: string;
	readonly productTypeId?: string;
	readonly purchaseDate?: string;
	readonly quantity?: number;
	readonly skuDescription?: string;
	readonly skuId?: string;
	readonly status?: "Active" | "AutoRenew" | "Cancelled" | "Disabled" | "Expired" | "Expiring" | "Inactive" | "PastDue";
}
export interface Reseller {
	readonly description?: string;
	readonly resellerId?: string;
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

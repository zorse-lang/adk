import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class billingAccounts
	extends ArmResource<billingAccountsComponentInputs>
	implements billingAccountsComponentOutputs
{
	constructor(entity: ADKEntity, options: billingAccountsComponentInputs) {
		super(entity, options.name, "Microsoft.Billing/billingAccounts", "2020-05-01", options);
	}
	public readonly apiVersion: "2020-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/billingAccounts";
}
export interface billingAccountsComponentOutputs {
	readonly apiVersion: "2020-05-01";
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
		super(entity, options.name, "Microsoft.Billing/billingAccounts/agreements", "2020-05-01", options);
	}
	public readonly apiVersion: "2020-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/billingAccounts/agreements";
}
export interface billingAccounts_agreementsComponentOutputs {
	readonly apiVersion: "2020-05-01";
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
		super(entity, options.name, "Microsoft.Billing/billingAccounts/billingProfiles", "2020-05-01", options);
	}
	public readonly apiVersion: "2020-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/billingAccounts/billingProfiles";
}
export interface billingAccounts_billingProfilesComponentOutputs {
	readonly apiVersion: "2020-05-01";
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
			"2020-05-01",
			options,
		);
	}
	public readonly apiVersion: "2020-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/billingAccounts/billingProfiles/availableBalance";
}
export interface billingAccounts_billingProfiles_availableBalanceComponentOutputs {
	readonly apiVersion: "2020-05-01";
	readonly id: string;
	readonly type: "Microsoft.Billing/billingAccounts/billingProfiles/availableBalance";
}
export interface billingAccounts_billingProfiles_availableBalanceComponentInputs {
	readonly name: string;
	readonly properties?: AvailableBalanceProperties;
}
export class billingAccounts_billingProfiles_billingRoleAssignments
	extends ArmResource<billingAccounts_billingProfiles_billingRoleAssignmentsComponentInputs>
	implements billingAccounts_billingProfiles_billingRoleAssignmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: billingAccounts_billingProfiles_billingRoleAssignmentsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Billing/billingAccounts/billingProfiles/billingRoleAssignments",
			"2020-05-01",
			options,
		);
	}
	public readonly apiVersion: "2020-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/billingAccounts/billingProfiles/billingRoleAssignments";
}
export interface billingAccounts_billingProfiles_billingRoleAssignmentsComponentOutputs {
	readonly apiVersion: "2020-05-01";
	readonly id: string;
	readonly type: "Microsoft.Billing/billingAccounts/billingProfiles/billingRoleAssignments";
}
export interface billingAccounts_billingProfiles_billingRoleAssignmentsComponentInputs {
	readonly name: string;
	readonly properties?: BillingRoleAssignmentProperties;
}
export class billingAccounts_billingProfiles_billingRoleDefinitions
	extends ArmResource<billingAccounts_billingProfiles_billingRoleDefinitionsComponentInputs>
	implements billingAccounts_billingProfiles_billingRoleDefinitionsComponentOutputs
{
	constructor(entity: ADKEntity, options: billingAccounts_billingProfiles_billingRoleDefinitionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Billing/billingAccounts/billingProfiles/billingRoleDefinitions",
			"2020-05-01",
			options,
		);
	}
	public readonly apiVersion: "2020-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/billingAccounts/billingProfiles/billingRoleDefinitions";
}
export interface billingAccounts_billingProfiles_billingRoleDefinitionsComponentOutputs {
	readonly apiVersion: "2020-05-01";
	readonly id: string;
	readonly type: "Microsoft.Billing/billingAccounts/billingProfiles/billingRoleDefinitions";
}
export interface billingAccounts_billingProfiles_billingRoleDefinitionsComponentInputs {
	readonly name: string;
	readonly properties?: BillingRoleDefinitionProperties;
}
export class billingAccounts_billingProfiles_instructions
	extends ArmResource<billingAccounts_billingProfiles_instructionsComponentInputs>
	implements billingAccounts_billingProfiles_instructionsComponentOutputs
{
	constructor(entity: ADKEntity, options: billingAccounts_billingProfiles_instructionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Billing/billingAccounts/billingProfiles/instructions",
			"2020-05-01",
			options,
		);
	}
	public readonly apiVersion: "2020-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/billingAccounts/billingProfiles/instructions";
}
export interface billingAccounts_billingProfiles_instructionsComponentOutputs {
	readonly apiVersion: "2020-05-01";
	readonly id: string;
	readonly type: "Microsoft.Billing/billingAccounts/billingProfiles/instructions";
}
export interface billingAccounts_billingProfiles_instructionsComponentInputs {
	readonly name: string;
	readonly properties?: InstructionProperties;
}
export class billingAccounts_billingProfiles_invoiceSections
	extends ArmResource<billingAccounts_billingProfiles_invoiceSectionsComponentInputs>
	implements billingAccounts_billingProfiles_invoiceSectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: billingAccounts_billingProfiles_invoiceSectionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Billing/billingAccounts/billingProfiles/invoiceSections",
			"2020-05-01",
			options,
		);
	}
	public readonly apiVersion: "2020-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/billingAccounts/billingProfiles/invoiceSections";
}
export interface billingAccounts_billingProfiles_invoiceSectionsComponentOutputs {
	readonly apiVersion: "2020-05-01";
	readonly id: string;
	readonly type: "Microsoft.Billing/billingAccounts/billingProfiles/invoiceSections";
}
export interface billingAccounts_billingProfiles_invoiceSectionsComponentInputs {
	readonly name: string;
	readonly properties?: InvoiceSectionProperties;
}
export class billingAccounts_billingProfiles_invoiceSections_billingRoleAssignments
	extends ArmResource<billingAccounts_billingProfiles_invoiceSections_billingRoleAssignmentsComponentInputs>
	implements billingAccounts_billingProfiles_invoiceSections_billingRoleAssignmentsComponentOutputs
{
	constructor(
		entity: ADKEntity,
		options: billingAccounts_billingProfiles_invoiceSections_billingRoleAssignmentsComponentInputs,
	) {
		super(
			entity,
			options.name,
			"Microsoft.Billing/billingAccounts/billingProfiles/invoiceSections/billingRoleAssignments",
			"2020-05-01",
			options,
		);
	}
	public readonly apiVersion: "2020-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/billingAccounts/billingProfiles/invoiceSections/billingRoleAssignments";
}
export interface billingAccounts_billingProfiles_invoiceSections_billingRoleAssignmentsComponentOutputs {
	readonly apiVersion: "2020-05-01";
	readonly id: string;
	readonly type: "Microsoft.Billing/billingAccounts/billingProfiles/invoiceSections/billingRoleAssignments";
}
export interface billingAccounts_billingProfiles_invoiceSections_billingRoleAssignmentsComponentInputs {
	readonly name: string;
	readonly properties?: BillingRoleAssignmentProperties;
}
export class billingAccounts_billingProfiles_invoiceSections_billingRoleDefinitions
	extends ArmResource<billingAccounts_billingProfiles_invoiceSections_billingRoleDefinitionsComponentInputs>
	implements billingAccounts_billingProfiles_invoiceSections_billingRoleDefinitionsComponentOutputs
{
	constructor(
		entity: ADKEntity,
		options: billingAccounts_billingProfiles_invoiceSections_billingRoleDefinitionsComponentInputs,
	) {
		super(
			entity,
			options.name,
			"Microsoft.Billing/billingAccounts/billingProfiles/invoiceSections/billingRoleDefinitions",
			"2020-05-01",
			options,
		);
	}
	public readonly apiVersion: "2020-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/billingAccounts/billingProfiles/invoiceSections/billingRoleDefinitions";
}
export interface billingAccounts_billingProfiles_invoiceSections_billingRoleDefinitionsComponentOutputs {
	readonly apiVersion: "2020-05-01";
	readonly id: string;
	readonly type: "Microsoft.Billing/billingAccounts/billingProfiles/invoiceSections/billingRoleDefinitions";
}
export interface billingAccounts_billingProfiles_invoiceSections_billingRoleDefinitionsComponentInputs {
	readonly name: string;
	readonly properties?: BillingRoleDefinitionProperties;
}
export class billingAccounts_billingProfiles_policies
	extends ArmResource<billingAccounts_billingProfiles_policiesComponentInputs>
	implements billingAccounts_billingProfiles_policiesComponentOutputs
{
	constructor(entity: ADKEntity, options: billingAccounts_billingProfiles_policiesComponentInputs) {
		super(entity, options.name, "Microsoft.Billing/billingAccounts/billingProfiles/policies", "2020-05-01", options);
	}
	public readonly apiVersion: "2020-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/billingAccounts/billingProfiles/policies";
}
export interface billingAccounts_billingProfiles_policiesComponentOutputs {
	readonly apiVersion: "2020-05-01";
	readonly id: string;
	readonly type: "Microsoft.Billing/billingAccounts/billingProfiles/policies";
}
export interface billingAccounts_billingProfiles_policiesComponentInputs {
	readonly name: string;
	readonly properties?: PolicyProperties;
}
export class billingAccounts_billingRoleAssignments
	extends ArmResource<billingAccounts_billingRoleAssignmentsComponentInputs>
	implements billingAccounts_billingRoleAssignmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: billingAccounts_billingRoleAssignmentsComponentInputs) {
		super(entity, options.name, "Microsoft.Billing/billingAccounts/billingRoleAssignments", "2020-05-01", options);
	}
	public readonly apiVersion: "2020-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/billingAccounts/billingRoleAssignments";
}
export interface billingAccounts_billingRoleAssignmentsComponentOutputs {
	readonly apiVersion: "2020-05-01";
	readonly id: string;
	readonly type: "Microsoft.Billing/billingAccounts/billingRoleAssignments";
}
export interface billingAccounts_billingRoleAssignmentsComponentInputs {
	readonly name: string;
	readonly properties?: BillingRoleAssignmentProperties;
}
export class billingAccounts_billingRoleDefinitions
	extends ArmResource<billingAccounts_billingRoleDefinitionsComponentInputs>
	implements billingAccounts_billingRoleDefinitionsComponentOutputs
{
	constructor(entity: ADKEntity, options: billingAccounts_billingRoleDefinitionsComponentInputs) {
		super(entity, options.name, "Microsoft.Billing/billingAccounts/billingRoleDefinitions", "2020-05-01", options);
	}
	public readonly apiVersion: "2020-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/billingAccounts/billingRoleDefinitions";
}
export interface billingAccounts_billingRoleDefinitionsComponentOutputs {
	readonly apiVersion: "2020-05-01";
	readonly id: string;
	readonly type: "Microsoft.Billing/billingAccounts/billingRoleDefinitions";
}
export interface billingAccounts_billingRoleDefinitionsComponentInputs {
	readonly name: string;
	readonly properties?: BillingRoleDefinitionProperties;
}
export class billingAccounts_billingSubscriptions
	extends ArmResource<billingAccounts_billingSubscriptionsComponentInputs>
	implements billingAccounts_billingSubscriptionsComponentOutputs
{
	constructor(entity: ADKEntity, options: billingAccounts_billingSubscriptionsComponentInputs) {
		super(entity, options.name, "Microsoft.Billing/billingAccounts/billingSubscriptions", "2020-05-01", options);
	}
	public readonly apiVersion: "2020-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/billingAccounts/billingSubscriptions";
}
export interface billingAccounts_billingSubscriptionsComponentOutputs {
	readonly apiVersion: "2020-05-01";
	readonly id: string;
	readonly type: "Microsoft.Billing/billingAccounts/billingSubscriptions";
}
export interface billingAccounts_billingSubscriptionsComponentInputs {
	readonly name: string;
	readonly properties?: BillingSubscriptionProperties;
}
export class billingAccounts_billingSubscriptions_invoices
	extends ArmResource<billingAccounts_billingSubscriptions_invoicesComponentInputs>
	implements billingAccounts_billingSubscriptions_invoicesComponentOutputs
{
	constructor(entity: ADKEntity, options: billingAccounts_billingSubscriptions_invoicesComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Billing/billingAccounts/billingSubscriptions/invoices",
			"2020-05-01",
			options,
		);
	}
	public readonly apiVersion: "2020-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/billingAccounts/billingSubscriptions/invoices";
}
export interface billingAccounts_billingSubscriptions_invoicesComponentOutputs {
	readonly apiVersion: "2020-05-01";
	readonly id: string;
	readonly type: "Microsoft.Billing/billingAccounts/billingSubscriptions/invoices";
}
export interface billingAccounts_billingSubscriptions_invoicesComponentInputs {
	readonly name: string;
	readonly properties?: InvoiceProperties;
}
export class billingAccounts_customers
	extends ArmResource<billingAccounts_customersComponentInputs>
	implements billingAccounts_customersComponentOutputs
{
	constructor(entity: ADKEntity, options: billingAccounts_customersComponentInputs) {
		super(entity, options.name, "Microsoft.Billing/billingAccounts/customers", "2020-05-01", options);
	}
	public readonly apiVersion: "2020-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/billingAccounts/customers";
}
export interface billingAccounts_customersComponentOutputs {
	readonly apiVersion: "2020-05-01";
	readonly id: string;
	readonly type: "Microsoft.Billing/billingAccounts/customers";
}
export interface billingAccounts_customersComponentInputs {
	readonly name: string;
	readonly properties?: CustomerProperties;
}
export class billingAccounts_customers_policies
	extends ArmResource<billingAccounts_customers_policiesComponentInputs>
	implements billingAccounts_customers_policiesComponentOutputs
{
	constructor(entity: ADKEntity, options: billingAccounts_customers_policiesComponentInputs) {
		super(entity, options.name, "Microsoft.Billing/billingAccounts/customers/policies", "2020-05-01", options);
	}
	public readonly apiVersion: "2020-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/billingAccounts/customers/policies";
}
export interface billingAccounts_customers_policiesComponentOutputs {
	readonly apiVersion: "2020-05-01";
	readonly id: string;
	readonly type: "Microsoft.Billing/billingAccounts/customers/policies";
}
export interface billingAccounts_customers_policiesComponentInputs {
	readonly name: string;
	readonly properties?: CustomerPolicyProperties;
}
export class billingAccounts_invoices
	extends ArmResource<billingAccounts_invoicesComponentInputs>
	implements billingAccounts_invoicesComponentOutputs
{
	constructor(entity: ADKEntity, options: billingAccounts_invoicesComponentInputs) {
		super(entity, options.name, "Microsoft.Billing/billingAccounts/invoices", "2020-05-01", options);
	}
	public readonly apiVersion: "2020-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/billingAccounts/invoices";
}
export interface billingAccounts_invoicesComponentOutputs {
	readonly apiVersion: "2020-05-01";
	readonly id: string;
	readonly type: "Microsoft.Billing/billingAccounts/invoices";
}
export interface billingAccounts_invoicesComponentInputs {
	readonly name: string;
	readonly properties?: InvoiceProperties;
}
export class billingAccounts_products
	extends ArmResource<billingAccounts_productsComponentInputs>
	implements billingAccounts_productsComponentOutputs
{
	constructor(entity: ADKEntity, options: billingAccounts_productsComponentInputs) {
		super(entity, options.name, "Microsoft.Billing/billingAccounts/products", "2020-05-01", options);
	}
	public readonly apiVersion: "2020-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/billingAccounts/products";
}
export interface billingAccounts_productsComponentOutputs {
	readonly apiVersion: "2020-05-01";
	readonly id: string;
	readonly type: "Microsoft.Billing/billingAccounts/products";
}
export interface billingAccounts_productsComponentInputs {
	readonly name: string;
	readonly properties?: ProductProperties;
}
export class billingProperty
	extends ArmResource<billingPropertyComponentInputs>
	implements billingPropertyComponentOutputs
{
	constructor(entity: ADKEntity, options: billingPropertyComponentInputs) {
		super(entity, options.name, "Microsoft.Billing/billingProperty", "2020-05-01", options);
	}
	public readonly apiVersion: "2020-05-01";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/billingProperty";
}
export interface billingPropertyComponentOutputs {
	readonly apiVersion: "2020-05-01";
	readonly id: string;
	readonly type: "Microsoft.Billing/billingProperty";
}
export interface billingPropertyComponentInputs {
	readonly name: string;
	readonly properties?: BillingPropertyProperties;
}
export function listInvoiceSectionsWithCreateSubscriptionPermission(
	resource: billingAccounts,
): InvoiceSectionListWithCreateSubPermissionResult {
	if (resource.apiVersion !== "2020-05-01") {
		throw new Error(
			`listInvoiceSectionsWithCreateSubscriptionPermission is not available for api version ${resource.apiVersion}`,
		);
	}
	if (resource.type !== "Microsoft.Billing/billingAccounts") {
		throw new Error(
			`listInvoiceSectionsWithCreateSubscriptionPermission is not available for resource type ${resource.type}`,
		);
	}
	throw new Error("not implemented");
}
export interface AddressDetails {
	readonly addressLine1: string;
	readonly addressLine2?: string;
	readonly addressLine3?: string;
	readonly city?: string;
	readonly companyName?: string;
	readonly country: string;
	readonly district?: string;
	readonly email?: string;
	readonly firstName?: string;
	readonly lastName?: string;
	readonly middleName?: string;
	readonly phoneNumber?: string;
	readonly postalCode?: string;
	readonly region?: string;
}
export interface AgreementProperties {
	readonly acceptanceMode?: "ClickToAccept" | "ESignEmbedded" | "ESignOffline";
	readonly agreementLink?: string;
	readonly billingProfileInfo?: BillingProfileInfo;
	readonly category?: "AffiliatePurchaseTerms" | "MicrosoftCustomerAgreement" | "Other";
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
export interface AzurePlan {
	readonly skuDescription?: string;
	readonly skuId?: string;
}
export interface BillingAccountProperties {
	readonly accountStatus?: "Active" | "Deleted" | "Disabled" | "Expired" | "Extended" | "Terminated" | "Transferred";
	readonly accountType?: "Enterprise" | "Individual" | "Partner";
	readonly agreementType?:
		| "EnterpriseAgreement"
		| "MicrosoftCustomerAgreement"
		| "MicrosoftOnlineServicesProgram"
		| "MicrosoftPartnerAgreement";
	readonly billingProfiles?: BillingProfilesOnExpand;
	readonly departments?: Department[];
	readonly displayName?: string;
	readonly enrollmentAccounts?: EnrollmentAccount[];
	readonly enrollmentDetails?: Enrollment;
	readonly hasReadAccess?: boolean;
	readonly notificationEmailAddress?: string;
	readonly soldTo?: AddressDetails;
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
export interface BillingProfileInfo {
	readonly billingProfileDisplayName?: string;
	readonly billingProfileId?: string;
	readonly indirectRelationshipOrganizationName?: string;
}
export interface BillingProfileProperties {
	readonly billingRelationshipType?: "CSPPartner" | "Direct" | "IndirectCustomer" | "IndirectPartner";
	readonly billTo?: AddressDetails;
	readonly currency?: string;
	readonly displayName?: string;
	readonly enabledAzurePlans?: AzurePlan[];
	readonly hasReadAccess?: boolean;
	readonly indirectRelationshipInfo?: IndirectRelationshipInfo;
	readonly invoiceDay?: number;
	readonly invoiceEmailOptIn?: boolean;
	readonly invoiceSections?: InvoiceSectionsOnExpand;
	readonly poNumber?: string;
	readonly spendingLimit?: "Off" | "On";
	readonly status?: "Active" | "Disabled" | "Warned";
	readonly statusReasonCode?: "PastDue" | "SpendingLimitExpired" | "SpendingLimitReached";
	readonly systemId?: string;
	readonly tags?: BillingProfilePropertiesTags;
	readonly targetClouds?: "USGov" | "USNat" | "USSec"[];
}
export interface BillingProfilePropertiesTags {
	readonly [key: string]: string;
}
export interface BillingProfilesOnExpand {
	readonly hasMoreResults?: boolean;
	readonly value?: BillingProfile[];
}
export interface BillingPropertyProperties {
	readonly accountAdminNotificationEmailAddress?: string;
	readonly billingAccountDisplayName?: string;
	readonly billingAccountId?: string;
	readonly billingProfileDisplayName?: string;
	readonly billingProfileId?: string;
	readonly billingProfileSpendingLimit?: "Off" | "On";
	readonly billingProfileStatus?: "Active" | "Disabled" | "Warned";
	readonly billingProfileStatusReasonCode?: "PastDue" | "SpendingLimitExpired" | "SpendingLimitReached";
	readonly billingTenantId?: string;
	readonly costCenter?: string;
	readonly invoiceSectionDisplayName?: string;
	readonly invoiceSectionId?: string;
	readonly isAccountAdmin?: boolean;
	readonly productId?: string;
	readonly productName?: string;
	readonly skuDescription?: string;
	readonly skuId?: string;
}
export interface BillingRoleAssignmentProperties {
	readonly createdByPrincipalId?: string;
	readonly createdByPrincipalTenantId?: string;
	readonly createdByUserEmailAddress?: string;
	readonly createdOn?: string;
	readonly principalId?: string;
	readonly principalTenantId?: string;
	readonly roleDefinitionId?: string;
	readonly scope?: string;
	readonly userAuthenticationType?: string;
	readonly userEmailAddress?: string;
}
export interface BillingRoleDefinitionProperties {
	readonly description?: string;
	readonly permissions?: BillingPermissionsProperties[];
	readonly roleName?: string;
}
export interface BillingSubscriptionProperties {
	readonly billingProfileDisplayName?: string;
	readonly billingProfileId?: string;
	readonly costCenter?: string;
	readonly customerDisplayName?: string;
	readonly customerId?: string;
	readonly displayName?: string;
	readonly invoiceSectionDisplayName?: string;
	readonly invoiceSectionId?: string;
	readonly lastMonthCharges?: Amount;
	readonly monthToDateCharges?: Amount;
	readonly reseller?: Reseller;
	readonly skuDescription?: string;
	readonly skuId?: string;
	readonly subscriptionBillingStatus?: "Abandoned" | "Active" | "Deleted" | "Inactive" | "Warning";
	readonly subscriptionId?: string;
	readonly suspensionReasons?: string[];
}
export interface CustomerPolicyProperties {
	readonly viewCharges?: "Allowed" | "NotAllowed";
}
export interface CustomerProperties {
	readonly billingProfileDisplayName?: string;
	readonly billingProfileId?: string;
	readonly displayName?: string;
	readonly enabledAzurePlans?: AzurePlan[];
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
export interface Document {
	readonly kind?: "CreditNote" | "Invoice" | "TaxReceipt" | "VoidNote";
	readonly source?: "DRS" | "ENF";
	readonly url?: string;
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
	readonly accountOwnerEmail?: string;
	readonly costCenter?: string;
	readonly department?: Department;
	readonly endDate?: string;
	readonly startDate?: string;
	readonly status?: string;
}
export interface EnrollmentPolicies {
	readonly accountOwnerViewCharges?: boolean;
	readonly departmentAdminViewCharges?: boolean;
	readonly marketplaceEnabled?: boolean;
	readonly reservedInstancesEnabled?: boolean;
}
export interface IndirectRelationshipInfo {
	readonly billingAccountName?: string;
	readonly billingProfileName?: string;
	readonly displayName?: string;
}
export interface InstructionProperties {
	readonly amount: number;
	readonly creationDate?: string;
	readonly endDate: string;
	readonly startDate: string;
}
export interface InvoiceProperties {
	readonly amountDue?: Amount;
	readonly azurePrepaymentApplied?: Amount;
	readonly billedAmount?: Amount;
	readonly billedDocumentId?: string;
	readonly billingProfileDisplayName?: string;
	readonly billingProfileId?: string;
	readonly creditAmount?: Amount;
	readonly creditForDocumentId?: string;
	readonly documents?: Document[];
	readonly documentType?: "CreditNote" | "Invoice";
	readonly dueDate?: string;
	readonly freeAzureCreditApplied?: Amount;
	readonly invoiceDate?: string;
	readonly invoicePeriodEndDate?: string;
	readonly invoicePeriodStartDate?: string;
	readonly invoiceType?: "AzureMarketplace" | "AzureService" | "AzureSupport";
	readonly isMonthlyInvoice?: boolean;
	readonly payments?: PaymentProperties[];
	readonly purchaseOrderNumber?: string;
	readonly rebillDetails?: InvoicePropertiesRebillDetails;
	readonly status?: "Due" | "OverDue" | "Paid" | "Void";
	readonly subscriptionId?: string;
	readonly subTotal?: Amount;
	readonly taxAmount?: Amount;
	readonly totalAmount?: Amount;
}
export interface InvoicePropertiesRebillDetails {
	readonly [key: string]: RebillDetails;
}
export interface InvoiceSection {
	readonly id?: string;
	readonly name?: string;
	readonly properties?: InvoiceSectionProperties;
	readonly type?: string;
}
export interface InvoiceSectionListWithCreateSubPermissionResult {
	readonly nextLink?: string;
	readonly value?: InvoiceSectionWithCreateSubPermission[];
}
export interface InvoiceSectionProperties {
	readonly displayName?: string;
	readonly labels?: InvoiceSectionPropertiesLabels;
	readonly state?: "Active" | "Restricted";
	readonly systemId?: string;
	readonly tags?: InvoiceSectionPropertiesTags;
	readonly targetCloud?: "USGov" | "USNat" | "USSec";
}
export interface InvoiceSectionPropertiesLabels {
	readonly [key: string]: string;
}
export interface InvoiceSectionPropertiesTags {
	readonly [key: string]: string;
}
export interface InvoiceSectionsOnExpand {
	readonly hasMoreResults?: boolean;
	readonly value?: InvoiceSection[];
}
export interface InvoiceSectionWithCreateSubPermission {
	readonly billingProfileDisplayName?: string;
	readonly billingProfileId?: string;
	readonly billingProfileSpendingLimit?: "Off" | "On";
	readonly billingProfileStatus?: "Active" | "Disabled" | "Warned";
	readonly billingProfileStatusReasonCode?: "PastDue" | "SpendingLimitExpired" | "SpendingLimitReached";
	readonly billingProfileSystemId?: string;
	readonly enabledAzurePlans?: AzurePlan[];
	readonly invoiceSectionDisplayName?: string;
	readonly invoiceSectionId?: string;
	readonly invoiceSectionSystemId?: string;
}
export interface Participants {
	readonly email?: string;
	readonly status?: string;
	readonly statusDate?: string;
}
export interface PaymentProperties {
	readonly amount?: Amount;
	readonly date?: string;
	readonly paymentMethodFamily?: "CheckWire" | "CreditCard" | "Credits" | "None";
	readonly paymentMethodType?: string;
	readonly paymentType?: string;
}
export interface PolicyProperties {
	readonly marketplacePurchases?: "AllAllowed" | "NotAllowed" | "OnlyFreeAllowed";
	readonly reservationPurchases?: "Allowed" | "NotAllowed";
	readonly viewCharges?: "Allowed" | "NotAllowed";
}
export interface ProductProperties {
	readonly autoRenew?: "Off" | "On";
	readonly availabilityId?: string;
	readonly billingFrequency?: "Monthly" | "OneTime" | "UsageBased";
	readonly billingProfileDisplayName?: string;
	readonly billingProfileId?: string;
	readonly customerDisplayName?: string;
	readonly customerId?: string;
	readonly displayName?: string;
	readonly endDate?: string;
	readonly invoiceSectionDisplayName?: string;
	readonly invoiceSectionId?: string;
	readonly lastCharge?: Amount;
	readonly lastChargeDate?: string;
	readonly productType?: string;
	readonly productTypeId?: string;
	readonly purchaseDate?: string;
	readonly quantity?: number;
	readonly reseller?: Reseller;
	readonly skuDescription?: string;
	readonly skuId?: string;
	readonly status?: "Active" | "AutoRenew" | "Cancelled" | "Disabled" | "Expired" | "Expiring" | "Inactive" | "PastDue";
	readonly tenantId?: string;
}
export interface RebillDetails {
	readonly creditNoteDocumentId?: string;
	readonly invoiceDocumentId?: string;
	readonly rebillDetails?: RebillDetails;
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
	"billingAccounts/billingProfiles/billingRoleAssignments": billingAccounts_billingProfiles_billingRoleAssignments,
	"billingAccounts/billingProfiles/billingRoleDefinitions": billingAccounts_billingProfiles_billingRoleDefinitions,
	"billingAccounts/billingProfiles/instructions": billingAccounts_billingProfiles_instructions,
	"billingAccounts/billingProfiles/invoiceSections": billingAccounts_billingProfiles_invoiceSections,
	"billingAccounts/billingProfiles/invoiceSections/billingRoleAssignments":
		billingAccounts_billingProfiles_invoiceSections_billingRoleAssignments,
	"billingAccounts/billingProfiles/invoiceSections/billingRoleDefinitions":
		billingAccounts_billingProfiles_invoiceSections_billingRoleDefinitions,
	"billingAccounts/billingProfiles/policies": billingAccounts_billingProfiles_policies,
	"billingAccounts/billingRoleAssignments": billingAccounts_billingRoleAssignments,
	"billingAccounts/billingRoleDefinitions": billingAccounts_billingRoleDefinitions,
	"billingAccounts/billingSubscriptions": billingAccounts_billingSubscriptions,
	"billingAccounts/billingSubscriptions/invoices": billingAccounts_billingSubscriptions_invoices,
	"billingAccounts/customers": billingAccounts_customers,
	"billingAccounts/customers/policies": billingAccounts_customers_policies,
	"billingAccounts/invoices": billingAccounts_invoices,
	"billingAccounts/products": billingAccounts_products,
	billingProperty: billingProperty,
};

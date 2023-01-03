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
	readonly properties?: BillingAccountProperties | undefined;
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
	readonly properties?: AgreementProperties | undefined;
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
	readonly properties?: AvailableBalanceProperties | undefined;
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
	readonly properties?: BillingRoleAssignmentProperties | undefined;
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
	readonly properties?: BillingRoleDefinitionProperties | undefined;
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
	readonly properties?: InstructionProperties | undefined;
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
	readonly properties?: InvoiceSectionProperties | undefined;
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
	readonly properties?: BillingRoleAssignmentProperties | undefined;
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
	readonly properties?: BillingRoleDefinitionProperties | undefined;
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
	readonly properties?: PolicyProperties | undefined;
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
	readonly properties?: BillingRoleAssignmentProperties | undefined;
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
	readonly properties?: BillingRoleDefinitionProperties | undefined;
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
	readonly properties?: BillingSubscriptionProperties | undefined;
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
	readonly properties?: InvoiceProperties | undefined;
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
	readonly properties?: CustomerProperties | undefined;
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
	readonly properties?: CustomerPolicyProperties | undefined;
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
	readonly properties?: InvoiceProperties | undefined;
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
	readonly properties?: ProductProperties | undefined;
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
	readonly properties?: BillingPropertyProperties | undefined;
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
	readonly addressLine2?: string | undefined;
	readonly addressLine3?: string | undefined;
	readonly city?: string | undefined;
	readonly companyName?: string | undefined;
	readonly country: string;
	readonly district?: string | undefined;
	readonly email?: string | undefined;
	readonly firstName?: string | undefined;
	readonly lastName?: string | undefined;
	readonly middleName?: string | undefined;
	readonly phoneNumber?: string | undefined;
	readonly postalCode?: string | undefined;
	readonly region?: string | undefined;
}
export interface AgreementProperties {
	readonly acceptanceMode?: ("ClickToAccept" | "ESignEmbedded" | "ESignOffline") | undefined;
	readonly agreementLink?: string | undefined;
	readonly billingProfileInfo?: BillingProfileInfo | undefined;
	readonly category?: ("AffiliatePurchaseTerms" | "MicrosoftCustomerAgreement" | "Other") | undefined;
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
export interface AzurePlan {
	readonly skuDescription?: string | undefined;
	readonly skuId?: string | undefined;
}
export interface BillingAccountProperties {
	readonly accountStatus?:
		| ("Active" | "Deleted" | "Disabled" | "Expired" | "Extended" | "Terminated" | "Transferred")
		| undefined;
	readonly accountType?: ("Enterprise" | "Individual" | "Partner") | undefined;
	readonly agreementType?:
		| (
				| "EnterpriseAgreement"
				| "MicrosoftCustomerAgreement"
				| "MicrosoftOnlineServicesProgram"
				| "MicrosoftPartnerAgreement"
		  )
		| undefined;
	readonly billingProfiles?: BillingProfilesOnExpand | undefined;
	readonly departments?: Department[] | undefined;
	readonly displayName?: string | undefined;
	readonly enrollmentAccounts?: EnrollmentAccount[] | undefined;
	readonly enrollmentDetails?: Enrollment | undefined;
	readonly hasReadAccess?: boolean | undefined;
	readonly notificationEmailAddress?: string | undefined;
	readonly soldTo?: AddressDetails | undefined;
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
export interface BillingProfileInfo {
	readonly billingProfileDisplayName?: string | undefined;
	readonly billingProfileId?: string | undefined;
	readonly indirectRelationshipOrganizationName?: string | undefined;
}
export interface BillingProfileProperties {
	readonly billingRelationshipType?: ("CSPPartner" | "Direct" | "IndirectCustomer" | "IndirectPartner") | undefined;
	readonly billTo?: AddressDetails | undefined;
	readonly currency?: string | undefined;
	readonly displayName?: string | undefined;
	readonly enabledAzurePlans?: AzurePlan[] | undefined;
	readonly hasReadAccess?: boolean | undefined;
	readonly indirectRelationshipInfo?: IndirectRelationshipInfo | undefined;
	readonly invoiceDay?: number | undefined;
	readonly invoiceEmailOptIn?: boolean | undefined;
	readonly invoiceSections?: InvoiceSectionsOnExpand | undefined;
	readonly poNumber?: string | undefined;
	readonly spendingLimit?: ("Off" | "On") | undefined;
	readonly status?: ("Active" | "Disabled" | "Warned") | undefined;
	readonly statusReasonCode?: ("PastDue" | "SpendingLimitExpired" | "SpendingLimitReached") | undefined;
	readonly systemId?: string | undefined;
	readonly tags?: BillingProfilePropertiesTags | undefined;
	readonly targetClouds?: ("USGov" | "USNat" | "USSec"[]) | undefined;
}
export interface BillingProfilePropertiesTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface BillingProfilesOnExpand {
	readonly hasMoreResults?: boolean | undefined;
	readonly value?: BillingProfile[] | undefined;
}
export interface BillingPropertyProperties {
	readonly accountAdminNotificationEmailAddress?: string | undefined;
	readonly billingAccountDisplayName?: string | undefined;
	readonly billingAccountId?: string | undefined;
	readonly billingProfileDisplayName?: string | undefined;
	readonly billingProfileId?: string | undefined;
	readonly billingProfileSpendingLimit?: ("Off" | "On") | undefined;
	readonly billingProfileStatus?: ("Active" | "Disabled" | "Warned") | undefined;
	readonly billingProfileStatusReasonCode?: ("PastDue" | "SpendingLimitExpired" | "SpendingLimitReached") | undefined;
	readonly billingTenantId?: string | undefined;
	readonly costCenter?: string | undefined;
	readonly invoiceSectionDisplayName?: string | undefined;
	readonly invoiceSectionId?: string | undefined;
	readonly isAccountAdmin?: boolean | undefined;
	readonly productId?: string | undefined;
	readonly productName?: string | undefined;
	readonly skuDescription?: string | undefined;
	readonly skuId?: string | undefined;
}
export interface BillingRoleAssignmentProperties {
	readonly createdByPrincipalId?: string | undefined;
	readonly createdByPrincipalTenantId?: string | undefined;
	readonly createdByUserEmailAddress?: string | undefined;
	readonly createdOn?: string | undefined;
	readonly principalId?: string | undefined;
	readonly principalTenantId?: string | undefined;
	readonly roleDefinitionId?: string | undefined;
	readonly scope?: string | undefined;
	readonly userAuthenticationType?: string | undefined;
	readonly userEmailAddress?: string | undefined;
}
export interface BillingRoleDefinitionProperties {
	readonly description?: string | undefined;
	readonly permissions?: BillingPermissionsProperties[] | undefined;
	readonly roleName?: string | undefined;
}
export interface BillingSubscriptionProperties {
	readonly billingProfileDisplayName?: string | undefined;
	readonly billingProfileId?: string | undefined;
	readonly costCenter?: string | undefined;
	readonly customerDisplayName?: string | undefined;
	readonly customerId?: string | undefined;
	readonly displayName?: string | undefined;
	readonly invoiceSectionDisplayName?: string | undefined;
	readonly invoiceSectionId?: string | undefined;
	readonly lastMonthCharges?: Amount | undefined;
	readonly monthToDateCharges?: Amount | undefined;
	readonly reseller?: Reseller | undefined;
	readonly skuDescription?: string | undefined;
	readonly skuId?: string | undefined;
	readonly subscriptionBillingStatus?: ("Abandoned" | "Active" | "Deleted" | "Inactive" | "Warning") | undefined;
	readonly subscriptionId?: string | undefined;
	readonly suspensionReasons?: string[] | undefined;
}
export interface CustomerPolicyProperties {
	readonly viewCharges?: ("Allowed" | "NotAllowed") | undefined;
}
export interface CustomerProperties {
	readonly billingProfileDisplayName?: string | undefined;
	readonly billingProfileId?: string | undefined;
	readonly displayName?: string | undefined;
	readonly enabledAzurePlans?: AzurePlan[] | undefined;
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
export interface Document {
	readonly kind?: ("CreditNote" | "Invoice" | "TaxReceipt" | "VoidNote") | undefined;
	readonly source?: ("DRS" | "ENF") | undefined;
	readonly url?: string | undefined;
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
	readonly accountOwnerEmail?: string | undefined;
	readonly costCenter?: string | undefined;
	readonly department?: Department | undefined;
	readonly endDate?: string | undefined;
	readonly startDate?: string | undefined;
	readonly status?: string | undefined;
}
export interface EnrollmentPolicies {
	readonly accountOwnerViewCharges?: boolean | undefined;
	readonly departmentAdminViewCharges?: boolean | undefined;
	readonly marketplaceEnabled?: boolean | undefined;
	readonly reservedInstancesEnabled?: boolean | undefined;
}
export interface IndirectRelationshipInfo {
	readonly billingAccountName?: string | undefined;
	readonly billingProfileName?: string | undefined;
	readonly displayName?: string | undefined;
}
export interface InstructionProperties {
	readonly amount: number;
	readonly creationDate?: string | undefined;
	readonly endDate: string;
	readonly startDate: string;
}
export interface InvoiceProperties {
	readonly amountDue?: Amount | undefined;
	readonly azurePrepaymentApplied?: Amount | undefined;
	readonly billedAmount?: Amount | undefined;
	readonly billedDocumentId?: string | undefined;
	readonly billingProfileDisplayName?: string | undefined;
	readonly billingProfileId?: string | undefined;
	readonly creditAmount?: Amount | undefined;
	readonly creditForDocumentId?: string | undefined;
	readonly documents?: Document[] | undefined;
	readonly documentType?: ("CreditNote" | "Invoice") | undefined;
	readonly dueDate?: string | undefined;
	readonly freeAzureCreditApplied?: Amount | undefined;
	readonly invoiceDate?: string | undefined;
	readonly invoicePeriodEndDate?: string | undefined;
	readonly invoicePeriodStartDate?: string | undefined;
	readonly invoiceType?: ("AzureMarketplace" | "AzureService" | "AzureSupport") | undefined;
	readonly isMonthlyInvoice?: boolean | undefined;
	readonly payments?: PaymentProperties[] | undefined;
	readonly purchaseOrderNumber?: string | undefined;
	readonly rebillDetails?: InvoicePropertiesRebillDetails | undefined;
	readonly status?: ("Due" | "OverDue" | "Paid" | "Void") | undefined;
	readonly subscriptionId?: string | undefined;
	readonly subTotal?: Amount | undefined;
	readonly taxAmount?: Amount | undefined;
	readonly totalAmount?: Amount | undefined;
}
export interface InvoicePropertiesRebillDetails {
	readonly "[ key: string ]"?: RebillDetails | undefined;
}
export interface InvoiceSection {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: InvoiceSectionProperties | undefined;
	readonly type?: string | undefined;
}
export interface InvoiceSectionListWithCreateSubPermissionResult {
	readonly nextLink?: string | undefined;
	readonly value?: InvoiceSectionWithCreateSubPermission[] | undefined;
}
export interface InvoiceSectionProperties {
	readonly displayName?: string | undefined;
	readonly labels?: InvoiceSectionPropertiesLabels | undefined;
	readonly state?: ("Active" | "Restricted") | undefined;
	readonly systemId?: string | undefined;
	readonly tags?: InvoiceSectionPropertiesTags | undefined;
	readonly targetCloud?: ("USGov" | "USNat" | "USSec") | undefined;
}
export interface InvoiceSectionPropertiesLabels {
	readonly "[ key: string ]"?: string | undefined;
}
export interface InvoiceSectionPropertiesTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface InvoiceSectionsOnExpand {
	readonly hasMoreResults?: boolean | undefined;
	readonly value?: InvoiceSection[] | undefined;
}
export interface InvoiceSectionWithCreateSubPermission {
	readonly billingProfileDisplayName?: string | undefined;
	readonly billingProfileId?: string | undefined;
	readonly billingProfileSpendingLimit?: ("Off" | "On") | undefined;
	readonly billingProfileStatus?: ("Active" | "Disabled" | "Warned") | undefined;
	readonly billingProfileStatusReasonCode?: ("PastDue" | "SpendingLimitExpired" | "SpendingLimitReached") | undefined;
	readonly billingProfileSystemId?: string | undefined;
	readonly enabledAzurePlans?: AzurePlan[] | undefined;
	readonly invoiceSectionDisplayName?: string | undefined;
	readonly invoiceSectionId?: string | undefined;
	readonly invoiceSectionSystemId?: string | undefined;
}
export interface Participants {
	readonly email?: string | undefined;
	readonly status?: string | undefined;
	readonly statusDate?: string | undefined;
}
export interface PaymentProperties {
	readonly amount?: Amount | undefined;
	readonly date?: string | undefined;
	readonly paymentMethodFamily?: ("CheckWire" | "CreditCard" | "Credits" | "None") | undefined;
	readonly paymentMethodType?: string | undefined;
	readonly paymentType?: string | undefined;
}
export interface PolicyProperties {
	readonly marketplacePurchases?: ("AllAllowed" | "NotAllowed" | "OnlyFreeAllowed") | undefined;
	readonly reservationPurchases?: ("Allowed" | "NotAllowed") | undefined;
	readonly viewCharges?: ("Allowed" | "NotAllowed") | undefined;
}
export interface ProductProperties {
	readonly autoRenew?: ("Off" | "On") | undefined;
	readonly availabilityId?: string | undefined;
	readonly billingFrequency?: ("Monthly" | "OneTime" | "UsageBased") | undefined;
	readonly billingProfileDisplayName?: string | undefined;
	readonly billingProfileId?: string | undefined;
	readonly customerDisplayName?: string | undefined;
	readonly customerId?: string | undefined;
	readonly displayName?: string | undefined;
	readonly endDate?: string | undefined;
	readonly invoiceSectionDisplayName?: string | undefined;
	readonly invoiceSectionId?: string | undefined;
	readonly lastCharge?: Amount | undefined;
	readonly lastChargeDate?: string | undefined;
	readonly productType?: string | undefined;
	readonly productTypeId?: string | undefined;
	readonly purchaseDate?: string | undefined;
	readonly quantity?: number | undefined;
	readonly reseller?: Reseller | undefined;
	readonly skuDescription?: string | undefined;
	readonly skuId?: string | undefined;
	readonly status?:
		| ("Active" | "AutoRenew" | "Cancelled" | "Disabled" | "Expired" | "Expiring" | "Inactive" | "PastDue")
		| undefined;
	readonly tenantId?: string | undefined;
}
export interface RebillDetails {
	readonly creditNoteDocumentId?: string | undefined;
	readonly invoiceDocumentId?: string | undefined;
	readonly rebillDetails?: RebillDetails | undefined;
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

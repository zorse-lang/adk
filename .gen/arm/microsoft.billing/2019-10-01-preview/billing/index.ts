import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class billingAccounts
	extends ArmResource<billingAccountsComponentInputs>
	implements billingAccountsComponentOutputs
{
	constructor(entity: ADKEntity, options: billingAccountsComponentInputs) {
		super(entity, options.name, "Microsoft.Billing/billingAccounts", "2019-10-01-preview", options);
	}
	public readonly apiVersion: "2019-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/billingAccounts";
}
export interface billingAccountsComponentOutputs {
	readonly apiVersion: "2019-10-01-preview";
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
		super(entity, options.name, "Microsoft.Billing/billingAccounts/agreements", "2019-10-01-preview", options);
	}
	public readonly apiVersion: "2019-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/billingAccounts/agreements";
}
export interface billingAccounts_agreementsComponentOutputs {
	readonly apiVersion: "2019-10-01-preview";
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
		super(entity, options.name, "Microsoft.Billing/billingAccounts/billingProfiles", "2019-10-01-preview", options);
	}
	public readonly apiVersion: "2019-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/billingAccounts/billingProfiles";
}
export interface billingAccounts_billingProfilesComponentOutputs {
	readonly apiVersion: "2019-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Billing/billingAccounts/billingProfiles";
}
export interface billingAccounts_billingProfilesComponentInputs {
	readonly address?: AddressDetails | undefined;
	readonly displayName?: string | undefined;
	readonly enabledAzurePlans?: AzurePlan[] | undefined;
	readonly invoiceEmailOptIn?: boolean | undefined;
	readonly name: string;
	readonly poNumber?: string | undefined;
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
			"2019-10-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2019-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/billingAccounts/billingProfiles/availableBalance";
}
export interface billingAccounts_billingProfiles_availableBalanceComponentOutputs {
	readonly apiVersion: "2019-10-01-preview";
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
			"2019-10-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2019-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/billingAccounts/billingProfiles/billingRoleAssignments";
}
export interface billingAccounts_billingProfiles_billingRoleAssignmentsComponentOutputs {
	readonly apiVersion: "2019-10-01-preview";
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
			"2019-10-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2019-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/billingAccounts/billingProfiles/billingRoleDefinitions";
}
export interface billingAccounts_billingProfiles_billingRoleDefinitionsComponentOutputs {
	readonly apiVersion: "2019-10-01-preview";
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
			"2019-10-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2019-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/billingAccounts/billingProfiles/instructions";
}
export interface billingAccounts_billingProfiles_instructionsComponentOutputs {
	readonly apiVersion: "2019-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Billing/billingAccounts/billingProfiles/instructions";
}
export interface billingAccounts_billingProfiles_instructionsComponentInputs {
	readonly name: string;
	readonly properties?: InstructionProperties | undefined;
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
			"2019-10-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2019-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/billingAccounts/billingProfiles/invoices";
}
export interface billingAccounts_billingProfiles_invoicesComponentOutputs {
	readonly apiVersion: "2019-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Billing/billingAccounts/billingProfiles/invoices";
}
export interface billingAccounts_billingProfiles_invoicesComponentInputs {
	readonly name: string;
	readonly properties?: InvoiceProperties | undefined;
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
			"2019-10-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2019-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/billingAccounts/billingProfiles/invoiceSections";
}
export interface billingAccounts_billingProfiles_invoiceSectionsComponentOutputs {
	readonly apiVersion: "2019-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Billing/billingAccounts/billingProfiles/invoiceSections";
}
export interface billingAccounts_billingProfiles_invoiceSectionsComponentInputs {
	readonly displayName?: string | undefined;
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
			"2019-10-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2019-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/billingAccounts/billingProfiles/invoiceSections/billingRoleAssignments";
}
export interface billingAccounts_billingProfiles_invoiceSections_billingRoleAssignmentsComponentOutputs {
	readonly apiVersion: "2019-10-01-preview";
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
			"2019-10-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2019-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/billingAccounts/billingProfiles/invoiceSections/billingRoleDefinitions";
}
export interface billingAccounts_billingProfiles_invoiceSections_billingRoleDefinitionsComponentOutputs {
	readonly apiVersion: "2019-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Billing/billingAccounts/billingProfiles/invoiceSections/billingRoleDefinitions";
}
export interface billingAccounts_billingProfiles_invoiceSections_billingRoleDefinitionsComponentInputs {
	readonly name: string;
	readonly properties?: BillingRoleDefinitionProperties | undefined;
}
export class billingAccounts_billingProfiles_invoiceSections_billingSubscriptions
	extends ArmResource<billingAccounts_billingProfiles_invoiceSections_billingSubscriptionsComponentInputs>
	implements billingAccounts_billingProfiles_invoiceSections_billingSubscriptionsComponentOutputs
{
	constructor(
		entity: ADKEntity,
		options: billingAccounts_billingProfiles_invoiceSections_billingSubscriptionsComponentInputs,
	) {
		super(
			entity,
			options.name,
			"Microsoft.Billing/billingAccounts/billingProfiles/invoiceSections/billingSubscriptions",
			"2019-10-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2019-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/billingAccounts/billingProfiles/invoiceSections/billingSubscriptions";
}
export interface billingAccounts_billingProfiles_invoiceSections_billingSubscriptionsComponentOutputs {
	readonly apiVersion: "2019-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Billing/billingAccounts/billingProfiles/invoiceSections/billingSubscriptions";
}
export interface billingAccounts_billingProfiles_invoiceSections_billingSubscriptionsComponentInputs {
	readonly name: string;
	readonly properties?: BillingSubscriptionProperties | undefined;
}
export class billingAccounts_billingProfiles_invoiceSections_products
	extends ArmResource<billingAccounts_billingProfiles_invoiceSections_productsComponentInputs>
	implements billingAccounts_billingProfiles_invoiceSections_productsComponentOutputs
{
	constructor(entity: ADKEntity, options: billingAccounts_billingProfiles_invoiceSections_productsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Billing/billingAccounts/billingProfiles/invoiceSections/products",
			"2019-10-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2019-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/billingAccounts/billingProfiles/invoiceSections/products";
}
export interface billingAccounts_billingProfiles_invoiceSections_productsComponentOutputs {
	readonly apiVersion: "2019-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Billing/billingAccounts/billingProfiles/invoiceSections/products";
}
export interface billingAccounts_billingProfiles_invoiceSections_productsComponentInputs {
	readonly name: string;
	readonly properties?: ProductProperties | undefined;
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
			"2019-10-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2019-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/billingAccounts/billingProfiles/policies";
}
export interface billingAccounts_billingProfiles_policiesComponentOutputs {
	readonly apiVersion: "2019-10-01-preview";
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
		super(
			entity,
			options.name,
			"Microsoft.Billing/billingAccounts/billingRoleAssignments",
			"2019-10-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2019-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/billingAccounts/billingRoleAssignments";
}
export interface billingAccounts_billingRoleAssignmentsComponentOutputs {
	readonly apiVersion: "2019-10-01-preview";
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
		super(
			entity,
			options.name,
			"Microsoft.Billing/billingAccounts/billingRoleDefinitions",
			"2019-10-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2019-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/billingAccounts/billingRoleDefinitions";
}
export interface billingAccounts_billingRoleDefinitionsComponentOutputs {
	readonly apiVersion: "2019-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Billing/billingAccounts/billingRoleDefinitions";
}
export interface billingAccounts_billingRoleDefinitionsComponentInputs {
	readonly name: string;
	readonly properties?: BillingRoleDefinitionProperties | undefined;
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
			"2019-10-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2019-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/billingAccounts/billingSubscriptions/invoices";
}
export interface billingAccounts_billingSubscriptions_invoicesComponentOutputs {
	readonly apiVersion: "2019-10-01-preview";
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
		super(entity, options.name, "Microsoft.Billing/billingAccounts/customers", "2019-10-01-preview", options);
	}
	public readonly apiVersion: "2019-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/billingAccounts/customers";
}
export interface billingAccounts_customersComponentOutputs {
	readonly apiVersion: "2019-10-01-preview";
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
			"2019-10-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2019-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/billingAccounts/customers/billingSubscriptions";
}
export interface billingAccounts_customers_billingSubscriptionsComponentOutputs {
	readonly apiVersion: "2019-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Billing/billingAccounts/customers/billingSubscriptions";
}
export interface billingAccounts_customers_billingSubscriptionsComponentInputs {
	readonly name: string;
	readonly properties?: BillingSubscriptionProperties | undefined;
}
export class billingAccounts_customers_policies
	extends ArmResource<billingAccounts_customers_policiesComponentInputs>
	implements billingAccounts_customers_policiesComponentOutputs
{
	constructor(entity: ADKEntity, options: billingAccounts_customers_policiesComponentInputs) {
		super(entity, options.name, "Microsoft.Billing/billingAccounts/customers/policies", "2019-10-01-preview", options);
	}
	public readonly apiVersion: "2019-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/billingAccounts/customers/policies";
}
export interface billingAccounts_customers_policiesComponentOutputs {
	readonly apiVersion: "2019-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Billing/billingAccounts/customers/policies";
}
export interface billingAccounts_customers_policiesComponentInputs {
	readonly name: string;
	readonly properties?: CustomerPolicyProperties | undefined;
}
export class billingAccounts_customers_products
	extends ArmResource<billingAccounts_customers_productsComponentInputs>
	implements billingAccounts_customers_productsComponentOutputs
{
	constructor(entity: ADKEntity, options: billingAccounts_customers_productsComponentInputs) {
		super(entity, options.name, "Microsoft.Billing/billingAccounts/customers/products", "2019-10-01-preview", options);
	}
	public readonly apiVersion: "2019-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/billingAccounts/customers/products";
}
export interface billingAccounts_customers_productsComponentOutputs {
	readonly apiVersion: "2019-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Billing/billingAccounts/customers/products";
}
export interface billingAccounts_customers_productsComponentInputs {
	readonly name: string;
	readonly properties?: ProductProperties | undefined;
}
export class billingAccounts_departments
	extends ArmResource<billingAccounts_departmentsComponentInputs>
	implements billingAccounts_departmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: billingAccounts_departmentsComponentInputs) {
		super(entity, options.name, "Microsoft.Billing/billingAccounts/departments", "2019-10-01-preview", options);
	}
	public readonly apiVersion: "2019-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/billingAccounts/departments";
}
export interface billingAccounts_departmentsComponentOutputs {
	readonly apiVersion: "2019-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Billing/billingAccounts/departments";
}
export interface billingAccounts_departmentsComponentInputs {
	readonly name: string;
	readonly properties?: DepartmentProperties | undefined;
}
export class billingAccounts_departments_billingRoleAssignments
	extends ArmResource<billingAccounts_departments_billingRoleAssignmentsComponentInputs>
	implements billingAccounts_departments_billingRoleAssignmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: billingAccounts_departments_billingRoleAssignmentsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Billing/billingAccounts/departments/billingRoleAssignments",
			"2019-10-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2019-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/billingAccounts/departments/billingRoleAssignments";
}
export interface billingAccounts_departments_billingRoleAssignmentsComponentOutputs {
	readonly apiVersion: "2019-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Billing/billingAccounts/departments/billingRoleAssignments";
}
export interface billingAccounts_departments_billingRoleAssignmentsComponentInputs {
	readonly name: string;
	readonly properties?: BillingRoleAssignmentProperties | undefined;
}
export class billingAccounts_departments_billingRoleDefinitions
	extends ArmResource<billingAccounts_departments_billingRoleDefinitionsComponentInputs>
	implements billingAccounts_departments_billingRoleDefinitionsComponentOutputs
{
	constructor(entity: ADKEntity, options: billingAccounts_departments_billingRoleDefinitionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Billing/billingAccounts/departments/billingRoleDefinitions",
			"2019-10-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2019-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/billingAccounts/departments/billingRoleDefinitions";
}
export interface billingAccounts_departments_billingRoleDefinitionsComponentOutputs {
	readonly apiVersion: "2019-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Billing/billingAccounts/departments/billingRoleDefinitions";
}
export interface billingAccounts_departments_billingRoleDefinitionsComponentInputs {
	readonly name: string;
	readonly properties?: BillingRoleDefinitionProperties | undefined;
}
export class billingAccounts_enrollmentAccounts
	extends ArmResource<billingAccounts_enrollmentAccountsComponentInputs>
	implements billingAccounts_enrollmentAccountsComponentOutputs
{
	constructor(entity: ADKEntity, options: billingAccounts_enrollmentAccountsComponentInputs) {
		super(entity, options.name, "Microsoft.Billing/billingAccounts/enrollmentAccounts", "2019-10-01-preview", options);
	}
	public readonly apiVersion: "2019-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/billingAccounts/enrollmentAccounts";
}
export interface billingAccounts_enrollmentAccountsComponentOutputs {
	readonly apiVersion: "2019-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Billing/billingAccounts/enrollmentAccounts";
}
export interface billingAccounts_enrollmentAccountsComponentInputs {
	readonly name: string;
	readonly properties?: EnrollmentAccountProperties | undefined;
}
export class billingAccounts_enrollmentAccounts_billingRoleAssignments
	extends ArmResource<billingAccounts_enrollmentAccounts_billingRoleAssignmentsComponentInputs>
	implements billingAccounts_enrollmentAccounts_billingRoleAssignmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: billingAccounts_enrollmentAccounts_billingRoleAssignmentsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Billing/billingAccounts/enrollmentAccounts/billingRoleAssignments",
			"2019-10-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2019-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/billingAccounts/enrollmentAccounts/billingRoleAssignments";
}
export interface billingAccounts_enrollmentAccounts_billingRoleAssignmentsComponentOutputs {
	readonly apiVersion: "2019-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Billing/billingAccounts/enrollmentAccounts/billingRoleAssignments";
}
export interface billingAccounts_enrollmentAccounts_billingRoleAssignmentsComponentInputs {
	readonly name: string;
	readonly properties?: BillingRoleAssignmentProperties | undefined;
}
export class billingAccounts_enrollmentAccounts_billingRoleDefinitions
	extends ArmResource<billingAccounts_enrollmentAccounts_billingRoleDefinitionsComponentInputs>
	implements billingAccounts_enrollmentAccounts_billingRoleDefinitionsComponentOutputs
{
	constructor(entity: ADKEntity, options: billingAccounts_enrollmentAccounts_billingRoleDefinitionsComponentInputs) {
		super(
			entity,
			options.name,
			"Microsoft.Billing/billingAccounts/enrollmentAccounts/billingRoleDefinitions",
			"2019-10-01-preview",
			options,
		);
	}
	public readonly apiVersion: "2019-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/billingAccounts/enrollmentAccounts/billingRoleDefinitions";
}
export interface billingAccounts_enrollmentAccounts_billingRoleDefinitionsComponentOutputs {
	readonly apiVersion: "2019-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Billing/billingAccounts/enrollmentAccounts/billingRoleDefinitions";
}
export interface billingAccounts_enrollmentAccounts_billingRoleDefinitionsComponentInputs {
	readonly name: string;
	readonly properties?: BillingRoleDefinitionProperties | undefined;
}
export class billingAccounts_invoices
	extends ArmResource<billingAccounts_invoicesComponentInputs>
	implements billingAccounts_invoicesComponentOutputs
{
	constructor(entity: ADKEntity, options: billingAccounts_invoicesComponentInputs) {
		super(entity, options.name, "Microsoft.Billing/billingAccounts/invoices", "2019-10-01-preview", options);
	}
	public readonly apiVersion: "2019-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/billingAccounts/invoices";
}
export interface billingAccounts_invoicesComponentOutputs {
	readonly apiVersion: "2019-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Billing/billingAccounts/invoices";
}
export interface billingAccounts_invoicesComponentInputs {
	readonly name: string;
	readonly properties?: InvoiceProperties | undefined;
}
export class billingProperty
	extends ArmResource<billingPropertyComponentInputs>
	implements billingPropertyComponentOutputs
{
	constructor(entity: ADKEntity, options: billingPropertyComponentInputs) {
		super(entity, options.name, "Microsoft.Billing/billingProperty", "2019-10-01-preview", options);
	}
	public readonly apiVersion: "2019-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/billingProperty";
}
export interface billingPropertyComponentOutputs {
	readonly apiVersion: "2019-10-01-preview";
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
	if (resource.apiVersion !== "2019-10-01-preview") {
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
	readonly acceptanceMode?: ("ClickToAccept" | "ESignEmbedded" | "ESignOffline") | undefined;
	readonly agreementLink?: string | undefined;
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
	readonly accountType?: ("Enterprise" | "Individual" | "Partner") | undefined;
	readonly address?: AddressDetails | undefined;
	readonly agreementType?:
		| (
				| "EnterpriseAgreement"
				| "MicrosoftCustomerAgreement"
				| "MicrosoftOnlineServicesProgram"
				| "MicrosoftPartnerAgreement"
		  )
		| undefined;
	readonly billingProfiles?: BillingProfile[] | undefined;
	readonly customerType?: ("Enterprise" | "Individual" | "Partner") | undefined;
	readonly departments?: Department[] | undefined;
	readonly displayName?: string | undefined;
	readonly enrollmentAccounts?: EnrollmentAccount[] | undefined;
	readonly enrollmentDetails?: Enrollment | undefined;
	readonly organizationId?: string | undefined;
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
	readonly address?: AddressDetails | undefined;
	readonly billingRelationshipType?: ("CSPPartner" | "Direct" | "IndirectCustomer" | "IndirectPartner") | undefined;
	readonly currency?: string | undefined;
	readonly displayName?: string | undefined;
	readonly enabledAzurePlans?: AzurePlan[] | undefined;
	readonly indirectRelationshipInfo?: IndirectRelationshipInfo | undefined;
	readonly invoiceDay?: number | undefined;
	readonly invoiceEmailOptIn?: boolean | undefined;
	readonly invoiceSections?: InvoiceSection[] | undefined;
	readonly poNumber?: string | undefined;
	readonly spendingLimit?: ("Off" | "On") | undefined;
	readonly status?: ("Active" | "Disabled" | "Warned") | undefined;
	readonly statusReasonCode?: ("PastDue" | "SpendingLimitExpired" | "SpendingLimitReached") | undefined;
	readonly targetClouds?: ("USGov" | "USNat" | "USSec"[]) | undefined;
}
export interface BillingPropertyProperties {
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
	readonly name?: string | undefined;
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
}
export interface CustomerPolicyProperties {
	readonly viewCharges?: ("Allowed" | "NotAllowed") | undefined;
}
export interface CustomerProperties {
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
	readonly documentNumbers?: string[] | undefined;
	readonly kind?: ("CreditNote" | "Invoice" | "TaxReceipt" | "VoidNote") | undefined;
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
	readonly billingProfileDisplayName?: string | undefined;
	readonly billingProfileId?: string | undefined;
	readonly creditAmount?: Amount | undefined;
	readonly documents?: Document[] | undefined;
	readonly dueDate?: string | undefined;
	readonly freeAzureCreditApplied?: Amount | undefined;
	readonly invoiceDate?: string | undefined;
	readonly invoicePeriodEndDate?: string | undefined;
	readonly invoicePeriodStartDate?: string | undefined;
	readonly invoiceType?: ("AzureMarketplace" | "AzureService" | "AzureSupport") | undefined;
	readonly isMonthlyInvoice?: boolean | undefined;
	readonly payments?: PaymentProperties[] | undefined;
	readonly purchaseOrderNumber?: string | undefined;
	readonly rebillDetails?: InvoiceRebillDetails | undefined;
	readonly status?: ("Due" | "OverDue" | "Paid" | "Void") | undefined;
	readonly subscriptionId?: string | undefined;
	readonly subTotal?: Amount | undefined;
	readonly taxAmount?: Amount | undefined;
	readonly totalAmount?: Amount | undefined;
}
export interface InvoiceRebillDetails {
	readonly latestInvoiceId?: string | undefined;
	readonly rebillDocumentType?: ("Credit" | "Original" | "Rebill") | undefined;
	readonly rebilledInvoiceId?: string | undefined;
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
	readonly state?: ("Active" | "Restricted") | undefined;
	readonly targetCloud?: ("USGov" | "USNat" | "USSec") | undefined;
}
export interface InvoiceSectionWithCreateSubPermission {
	readonly billingProfileDisplayName?: string | undefined;
	readonly billingProfileId?: string | undefined;
	readonly billingProfileSpendingLimit?: ("Off" | "On") | undefined;
	readonly billingProfileStatus?: ("Active" | "Disabled" | "Warned") | undefined;
	readonly billingProfileStatusReasonCode?: ("PastDue" | "SpendingLimitExpired" | "SpendingLimitReached") | undefined;
	readonly enabledAzurePlans?: AzurePlan[] | undefined;
	readonly invoiceSectionDisplayName?: string | undefined;
	readonly invoiceSectionId?: string | undefined;
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
	readonly parentProductId?: string | undefined;
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
	"billingAccounts/billingProfiles/invoices": billingAccounts_billingProfiles_invoices,
	"billingAccounts/billingProfiles/invoiceSections": billingAccounts_billingProfiles_invoiceSections,
	"billingAccounts/billingProfiles/invoiceSections/billingRoleAssignments":
		billingAccounts_billingProfiles_invoiceSections_billingRoleAssignments,
	"billingAccounts/billingProfiles/invoiceSections/billingRoleDefinitions":
		billingAccounts_billingProfiles_invoiceSections_billingRoleDefinitions,
	"billingAccounts/billingProfiles/invoiceSections/billingSubscriptions":
		billingAccounts_billingProfiles_invoiceSections_billingSubscriptions,
	"billingAccounts/billingProfiles/invoiceSections/products": billingAccounts_billingProfiles_invoiceSections_products,
	"billingAccounts/billingProfiles/policies": billingAccounts_billingProfiles_policies,
	"billingAccounts/billingRoleAssignments": billingAccounts_billingRoleAssignments,
	"billingAccounts/billingRoleDefinitions": billingAccounts_billingRoleDefinitions,
	"billingAccounts/billingSubscriptions/invoices": billingAccounts_billingSubscriptions_invoices,
	"billingAccounts/customers": billingAccounts_customers,
	"billingAccounts/customers/billingSubscriptions": billingAccounts_customers_billingSubscriptions,
	"billingAccounts/customers/policies": billingAccounts_customers_policies,
	"billingAccounts/customers/products": billingAccounts_customers_products,
	"billingAccounts/departments": billingAccounts_departments,
	"billingAccounts/departments/billingRoleAssignments": billingAccounts_departments_billingRoleAssignments,
	"billingAccounts/departments/billingRoleDefinitions": billingAccounts_departments_billingRoleDefinitions,
	"billingAccounts/enrollmentAccounts": billingAccounts_enrollmentAccounts,
	"billingAccounts/enrollmentAccounts/billingRoleAssignments":
		billingAccounts_enrollmentAccounts_billingRoleAssignments,
	"billingAccounts/enrollmentAccounts/billingRoleDefinitions":
		billingAccounts_enrollmentAccounts_billingRoleDefinitions,
	"billingAccounts/invoices": billingAccounts_invoices,
	billingProperty: billingProperty,
};

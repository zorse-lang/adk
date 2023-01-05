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
	readonly properties?: BillingAccountProperties;
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
	readonly properties?: AgreementProperties;
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
	readonly address?: AddressDetails;
	readonly displayName?: string;
	readonly enabledAzurePlans?: AzurePlan[];
	readonly invoiceEmailOptIn?: boolean;
	readonly name: string;
	readonly poNumber?: string;
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
	readonly properties?: InstructionProperties;
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
	readonly properties?: InvoiceProperties;
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
	readonly displayName?: string;
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
	readonly properties?: BillingRoleDefinitionProperties;
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
	readonly properties?: BillingSubscriptionProperties;
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
	readonly properties?: ProductProperties;
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
	readonly properties?: PolicyProperties;
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
	readonly properties?: BillingRoleAssignmentProperties;
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
	readonly properties?: BillingRoleDefinitionProperties;
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
	readonly properties?: InvoiceProperties;
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
	readonly properties?: BillingSubscriptionProperties;
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
	readonly properties?: CustomerPolicyProperties;
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
	readonly properties?: ProductProperties;
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
	readonly properties?: DepartmentProperties;
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
	readonly properties?: BillingRoleAssignmentProperties;
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
	readonly properties?: BillingRoleDefinitionProperties;
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
	readonly properties?: EnrollmentAccountProperties;
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
	readonly properties?: BillingRoleAssignmentProperties;
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
	readonly properties?: BillingRoleDefinitionProperties;
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
	readonly properties?: InvoiceProperties;
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
	readonly properties?: BillingPropertyProperties;
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
	readonly acceptanceMode?: "ClickToAccept" | "ESignEmbedded" | "ESignOffline";
	readonly agreementLink?: string;
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
	readonly accountType?: "Enterprise" | "Individual" | "Partner";
	readonly address?: AddressDetails;
	readonly agreementType?:
		| "EnterpriseAgreement"
		| "MicrosoftCustomerAgreement"
		| "MicrosoftOnlineServicesProgram"
		| "MicrosoftPartnerAgreement";
	readonly billingProfiles?: BillingProfile[];
	readonly customerType?: "Enterprise" | "Individual" | "Partner";
	readonly departments?: Department[];
	readonly displayName?: string;
	readonly enrollmentAccounts?: EnrollmentAccount[];
	readonly enrollmentDetails?: Enrollment;
	readonly organizationId?: string;
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
	readonly address?: AddressDetails;
	readonly billingRelationshipType?: "CSPPartner" | "Direct" | "IndirectCustomer" | "IndirectPartner";
	readonly currency?: string;
	readonly displayName?: string;
	readonly enabledAzurePlans?: AzurePlan[];
	readonly indirectRelationshipInfo?: IndirectRelationshipInfo;
	readonly invoiceDay?: number;
	readonly invoiceEmailOptIn?: boolean;
	readonly invoiceSections?: InvoiceSection[];
	readonly poNumber?: string;
	readonly spendingLimit?: "Off" | "On";
	readonly status?: "Active" | "Disabled" | "Warned";
	readonly statusReasonCode?: "PastDue" | "SpendingLimitExpired" | "SpendingLimitReached";
	readonly targetClouds?: "USGov" | "USNat" | "USSec"[];
}
export interface BillingPropertyProperties {
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
	readonly name?: string;
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
}
export interface CustomerPolicyProperties {
	readonly viewCharges?: "Allowed" | "NotAllowed";
}
export interface CustomerProperties {
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
	readonly documentNumbers?: string[];
	readonly kind?: "CreditNote" | "Invoice" | "TaxReceipt" | "VoidNote";
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
	readonly billingProfileDisplayName?: string;
	readonly billingProfileId?: string;
	readonly creditAmount?: Amount;
	readonly documents?: Document[];
	readonly dueDate?: string;
	readonly freeAzureCreditApplied?: Amount;
	readonly invoiceDate?: string;
	readonly invoicePeriodEndDate?: string;
	readonly invoicePeriodStartDate?: string;
	readonly invoiceType?: "AzureMarketplace" | "AzureService" | "AzureSupport";
	readonly isMonthlyInvoice?: boolean;
	readonly payments?: PaymentProperties[];
	readonly purchaseOrderNumber?: string;
	readonly rebillDetails?: InvoiceRebillDetails;
	readonly status?: "Due" | "OverDue" | "Paid" | "Void";
	readonly subscriptionId?: string;
	readonly subTotal?: Amount;
	readonly taxAmount?: Amount;
	readonly totalAmount?: Amount;
}
export interface InvoiceRebillDetails {
	readonly latestInvoiceId?: string;
	readonly rebillDocumentType?: "Credit" | "Original" | "Rebill";
	readonly rebilledInvoiceId?: string;
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
	readonly state?: "Active" | "Restricted";
	readonly targetCloud?: "USGov" | "USNat" | "USSec";
}
export interface InvoiceSectionWithCreateSubPermission {
	readonly billingProfileDisplayName?: string;
	readonly billingProfileId?: string;
	readonly billingProfileSpendingLimit?: "Off" | "On";
	readonly billingProfileStatus?: "Active" | "Disabled" | "Warned";
	readonly billingProfileStatusReasonCode?: "PastDue" | "SpendingLimitExpired" | "SpendingLimitReached";
	readonly enabledAzurePlans?: AzurePlan[];
	readonly invoiceSectionDisplayName?: string;
	readonly invoiceSectionId?: string;
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
	readonly parentProductId?: string;
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

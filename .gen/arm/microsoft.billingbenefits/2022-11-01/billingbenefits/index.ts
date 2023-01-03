import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class reservationOrderAliases
	extends ArmResource<reservationOrderAliasesComponentInputs>
	implements reservationOrderAliasesComponentOutputs
{
	constructor(entity: ADKEntity, options: reservationOrderAliasesComponentInputs) {
		super(entity, options.name, "Microsoft.BillingBenefits/reservationOrderAliases", "2022-11-01", options);
	}
	public readonly apiVersion: "2022-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.BillingBenefits/reservationOrderAliases";
}
export interface reservationOrderAliasesComponentOutputs {
	readonly apiVersion: "2022-11-01";
	readonly id: string;
	readonly type: "Microsoft.BillingBenefits/reservationOrderAliases";
}
export interface reservationOrderAliasesComponentInputs {
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ReservationOrderAliasRequestPropertiesOrReservationOrderAliasResponseProperties | undefined;
	readonly sku: Sku;
	readonly systemData?: SystemData | undefined;
}
export class savingsPlanOrderAliases
	extends ArmResource<savingsPlanOrderAliasesComponentInputs>
	implements savingsPlanOrderAliasesComponentOutputs
{
	constructor(entity: ADKEntity, options: savingsPlanOrderAliasesComponentInputs) {
		super(entity, options.name, "Microsoft.BillingBenefits/savingsPlanOrderAliases", "2022-11-01", options);
	}
	public readonly apiVersion: "2022-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.BillingBenefits/savingsPlanOrderAliases";
}
export interface savingsPlanOrderAliasesComponentOutputs {
	readonly apiVersion: "2022-11-01";
	readonly id: string;
	readonly type: "Microsoft.BillingBenefits/savingsPlanOrderAliases";
}
export interface savingsPlanOrderAliasesComponentInputs {
	readonly kind?: string | undefined;
	readonly name: string;
	readonly properties?: SavingsPlanOrderAliasProperties | undefined;
	readonly sku: Sku;
	readonly systemData?: SystemData | undefined;
}
export class savingsPlanOrders
	extends ArmResource<savingsPlanOrdersComponentInputs>
	implements savingsPlanOrdersComponentOutputs
{
	constructor(entity: ADKEntity, options: savingsPlanOrdersComponentInputs) {
		super(entity, options.name, "Microsoft.BillingBenefits/savingsPlanOrders", "2022-11-01", options);
	}
	public readonly apiVersion: "2022-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.BillingBenefits/savingsPlanOrders";
}
export interface savingsPlanOrdersComponentOutputs {
	readonly apiVersion: "2022-11-01";
	readonly id: string;
	readonly type: "Microsoft.BillingBenefits/savingsPlanOrders";
}
export interface savingsPlanOrdersComponentInputs {
	readonly name: string;
	readonly properties?: SavingsPlanOrderModelProperties | undefined;
	readonly sku?: Sku | undefined;
	readonly systemData?: SystemData | undefined;
}
export class savingsPlanOrders_savingsPlans
	extends ArmResource<savingsPlanOrders_savingsPlansComponentInputs>
	implements savingsPlanOrders_savingsPlansComponentOutputs
{
	constructor(entity: ADKEntity, options: savingsPlanOrders_savingsPlansComponentInputs) {
		super(entity, options.name, "Microsoft.BillingBenefits/savingsPlanOrders/savingsPlans", "2022-11-01", options);
	}
	public readonly apiVersion: "2022-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.BillingBenefits/savingsPlanOrders/savingsPlans";
}
export interface savingsPlanOrders_savingsPlansComponentOutputs {
	readonly apiVersion: "2022-11-01";
	readonly id: string;
	readonly type: "Microsoft.BillingBenefits/savingsPlanOrders/savingsPlans";
}
export interface savingsPlanOrders_savingsPlansComponentInputs {
	readonly name: string;
	readonly properties?: SavingsPlanModelProperties | undefined;
	readonly sku?: Sku | undefined;
	readonly systemData?: SystemData | undefined;
}
export interface AppliedScopeProperties {
	readonly displayName?: string | undefined;
	readonly managementGroupId?: string | undefined;
	readonly resourceGroupId?: string | undefined;
	readonly subscriptionId?: string | undefined;
	readonly tenantId?: string | undefined;
}
export interface BillingPlanInformation {
	readonly nextPaymentDueDate?: string | undefined;
	readonly pricingCurrencyTotal?: Price | undefined;
	readonly startDate?: string | undefined;
	readonly transactions?: PaymentDetail[] | undefined;
}
export interface Commitment {
	readonly amount?: number | undefined;
	readonly currencyCode?: string | undefined;
	readonly grain?: "Hourly" | undefined;
}
export interface ExtendedStatusInfo {
	readonly message?: string | undefined;
	readonly statusCode?: string | undefined;
}
export interface PaymentDetail {
	readonly billingAccount?: string | undefined;
	readonly billingCurrencyTotal?: Price | undefined;
	readonly dueDate?: string | undefined;
	readonly extendedStatusInfo?: ExtendedStatusInfo | undefined;
	readonly paymentDate?: string | undefined;
	readonly pricingCurrencyTotal?: Price | undefined;
	readonly status?: ("Cancelled" | "Failed" | "Scheduled" | "Succeeded") | undefined;
}
export interface Price {
	readonly amount?: number | undefined;
	readonly currencyCode?: string | undefined;
}
export interface PurchaseRequest {
	readonly properties?: PurchaseRequestProperties | undefined;
	readonly sku?: Sku | undefined;
}
export interface PurchaseRequestProperties {
	readonly appliedScopeProperties?: AppliedScopeProperties | undefined;
	readonly appliedScopeType?: ("ManagementGroup" | "Shared" | "Single") | undefined;
	readonly billingPlan?: "P1M" | undefined;
	readonly billingScopeId?: string | undefined;
	readonly commitment?: Commitment | undefined;
	readonly displayName?: string | undefined;
	readonly effectiveDateTime?: string | undefined;
	readonly renew?: boolean | undefined;
	readonly term?: ("P1Y" | "P3Y" | "P5Y") | undefined;
}
export interface ReservationOrderAliasRequestPropertiesOrReservationOrderAliasResponseProperties {
	readonly appliedScopeProperties?: AppliedScopeProperties | undefined;
	readonly appliedScopeType?: ("ManagementGroup" | "Shared" | "Single") | undefined;
	readonly billingPlan?: "P1M" | undefined;
	readonly billingScopeId?: string | undefined;
	readonly displayName?: string | undefined;
	readonly provisioningState?:
		| (
				| "Cancelled"
				| "ConfirmedBilling"
				| "Created"
				| "Creating"
				| "Expired"
				| "Failed"
				| "PendingBilling"
				| "Succeeded"
		  )
		| undefined;
	readonly quantity?: number | undefined;
	readonly renew?: boolean | undefined;
	readonly reservationOrderId?: string | undefined;
	readonly reservedResourceProperties?:
		| ReservationOrderAliasRequestPropertiesReservedResourcePropertiesOrReservationOrderAliasResponsePropertiesReservedResourceProperties
		| undefined;
	readonly reservedResourceType?:
		| (
				| "AVS"
				| "AppService"
				| "AzureDataExplorer"
				| "AzureFiles"
				| "BlockBlob"
				| "CosmosDb"
				| "DataFactory"
				| "Databricks"
				| "DedicatedHost"
				| "ManagedDisk"
				| "MariaDb"
				| "MySql"
				| "NetAppStorage"
				| "PostgreSql"
				| "RedHat"
				| "RedHatOsa"
				| "RedisCache"
				| "SapHana"
				| "SqlAzureHybridBenefit"
				| "SqlDataWarehouse"
				| "SqlDatabases"
				| "SqlEdge"
				| "SuseLinux"
				| "VMwareCloudSimple"
				| "VirtualMachineSoftware"
				| "VirtualMachines"
		  )
		| undefined;
	readonly reviewDateTime?: string | undefined;
	readonly term?: ("P1Y" | "P3Y" | "P5Y") | undefined;
}
export interface ReservationOrderAliasRequestPropertiesReservedResourcePropertiesOrReservationOrderAliasResponsePropertiesReservedResourceProperties {
	readonly instanceFlexibility?: ("Off" | "On") | undefined;
}
export interface SavingsPlanModelProperties {
	readonly appliedScopeProperties?: AppliedScopeProperties | undefined;
	readonly appliedScopeType?: ("ManagementGroup" | "Shared" | "Single") | undefined;
	readonly benefitStartTime?: string | undefined;
	readonly billingAccountId?: string | undefined;
	readonly billingPlan?: "P1M" | undefined;
	readonly billingProfileId?: string | undefined;
	readonly billingScopeId?: string | undefined;
	readonly commitment?: Commitment | undefined;
	readonly customerId?: string | undefined;
	readonly displayName?: string | undefined;
	readonly displayProvisioningState?: string | undefined;
	readonly effectiveDateTime?: string | undefined;
	readonly expiryDateTime?: string | undefined;
	readonly extendedStatusInfo?: ExtendedStatusInfo | undefined;
	readonly provisioningState?:
		| (
				| "Cancelled"
				| "ConfirmedBilling"
				| "Created"
				| "Creating"
				| "Expired"
				| "Failed"
				| "PendingBilling"
				| "Succeeded"
		  )
		| undefined;
	readonly purchaseDateTime?: string | undefined;
	readonly renew?: boolean | undefined;
	readonly renewProperties?: SavingsPlanModelPropertiesRenewProperties | undefined;
	readonly term?: ("P1Y" | "P3Y" | "P5Y") | undefined;
	readonly userFriendlyAppliedScopeType?: string | undefined;
	readonly utilization?: Utilization | undefined;
}
export interface SavingsPlanModelPropertiesRenewProperties {
	readonly purchaseProperties?: PurchaseRequest | undefined;
}
export interface SavingsPlanOrderAliasProperties {
	readonly appliedScopeProperties?: AppliedScopeProperties | undefined;
	readonly appliedScopeType?: ("ManagementGroup" | "Shared" | "Single") | undefined;
	readonly billingPlan?: "P1M" | undefined;
	readonly billingScopeId?: string | undefined;
	readonly commitment?: Commitment | undefined;
	readonly displayName?: string | undefined;
	readonly provisioningState?:
		| (
				| "Cancelled"
				| "ConfirmedBilling"
				| "Created"
				| "Creating"
				| "Expired"
				| "Failed"
				| "PendingBilling"
				| "Succeeded"
		  )
		| undefined;
	readonly savingsPlanOrderId?: string | undefined;
	readonly term?: ("P1Y" | "P3Y" | "P5Y") | undefined;
}
export interface SavingsPlanOrderModelProperties {
	readonly benefitStartTime?: string | undefined;
	readonly billingAccountId?: string | undefined;
	readonly billingPlan?: "P1M" | undefined;
	readonly billingProfileId?: string | undefined;
	readonly billingScopeId?: string | undefined;
	readonly customerId?: string | undefined;
	readonly displayName?: string | undefined;
	readonly expiryDateTime?: string | undefined;
	readonly extendedStatusInfo?: ExtendedStatusInfo | undefined;
	readonly planInformation?: BillingPlanInformation | undefined;
	readonly provisioningState?:
		| (
				| "Cancelled"
				| "ConfirmedBilling"
				| "Created"
				| "Creating"
				| "Expired"
				| "Failed"
				| "PendingBilling"
				| "Succeeded"
		  )
		| undefined;
	readonly savingsPlans?: string[] | undefined;
	readonly term?: ("P1Y" | "P3Y" | "P5Y") | undefined;
}
export interface Sku {
	readonly name?: string | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface Utilization {
	readonly aggregates?: UtilizationAggregates[] | undefined;
	readonly trend?: string | undefined;
}
export interface UtilizationAggregates {
	readonly grain?: number | undefined;
	readonly grainUnit?: string | undefined;
	readonly value?: number | undefined;
	readonly valueUnit?: string | undefined;
}
export default {
	reservationOrderAliases: reservationOrderAliases,
	savingsPlanOrderAliases: savingsPlanOrderAliases,
	savingsPlanOrders: savingsPlanOrders,
	"savingsPlanOrders/savingsPlans": savingsPlanOrders_savingsPlans,
};

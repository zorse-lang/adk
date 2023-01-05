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
	readonly location?: string;
	readonly name: string;
	readonly properties?: ReservationOrderAliasRequestPropertiesOrReservationOrderAliasResponseProperties;
	readonly sku: Sku;
	readonly systemData?: SystemData;
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
	readonly kind?: string;
	readonly name: string;
	readonly properties?: SavingsPlanOrderAliasProperties;
	readonly sku: Sku;
	readonly systemData?: SystemData;
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
	readonly properties?: SavingsPlanOrderModelProperties;
	readonly sku?: Sku;
	readonly systemData?: SystemData;
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
	readonly properties?: SavingsPlanModelProperties;
	readonly sku?: Sku;
	readonly systemData?: SystemData;
}
export interface AppliedScopeProperties {
	readonly displayName?: string;
	readonly managementGroupId?: string;
	readonly resourceGroupId?: string;
	readonly subscriptionId?: string;
	readonly tenantId?: string;
}
export interface BillingPlanInformation {
	readonly nextPaymentDueDate?: string;
	readonly pricingCurrencyTotal?: Price;
	readonly startDate?: string;
	readonly transactions?: PaymentDetail[];
}
export interface Commitment {
	readonly amount?: number;
	readonly currencyCode?: string;
	readonly grain?: "Hourly";
}
export interface ExtendedStatusInfo {
	readonly message?: string;
	readonly statusCode?: string;
}
export interface PaymentDetail {
	readonly billingAccount?: string;
	readonly billingCurrencyTotal?: Price;
	readonly dueDate?: string;
	readonly extendedStatusInfo?: ExtendedStatusInfo;
	readonly paymentDate?: string;
	readonly pricingCurrencyTotal?: Price;
	readonly status?: "Cancelled" | "Failed" | "Scheduled" | "Succeeded";
}
export interface Price {
	readonly amount?: number;
	readonly currencyCode?: string;
}
export interface PurchaseRequest {
	readonly properties?: PurchaseRequestProperties;
	readonly sku?: Sku;
}
export interface PurchaseRequestProperties {
	readonly appliedScopeProperties?: AppliedScopeProperties;
	readonly appliedScopeType?: "ManagementGroup" | "Shared" | "Single";
	readonly billingPlan?: "P1M";
	readonly billingScopeId?: string;
	readonly commitment?: Commitment;
	readonly displayName?: string;
	readonly effectiveDateTime?: string;
	readonly renew?: boolean;
	readonly term?: "P1Y" | "P3Y" | "P5Y";
}
export interface ReservationOrderAliasRequestPropertiesOrReservationOrderAliasResponseProperties {
	readonly appliedScopeProperties?: AppliedScopeProperties;
	readonly appliedScopeType?: "ManagementGroup" | "Shared" | "Single";
	readonly billingPlan?: "P1M";
	readonly billingScopeId?: string;
	readonly displayName?: string;
	readonly provisioningState?:
		| "Cancelled"
		| "ConfirmedBilling"
		| "Created"
		| "Creating"
		| "Expired"
		| "Failed"
		| "PendingBilling"
		| "Succeeded";
	readonly quantity?: number;
	readonly renew?: boolean;
	readonly reservationOrderId?: string;
	readonly reservedResourceProperties?: ReservationOrderAliasRequestPropertiesReservedResourcePropertiesOrReservationOrderAliasResponsePropertiesReservedResourceProperties;
	readonly reservedResourceType?:
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
		| "VirtualMachines";
	readonly reviewDateTime?: string;
	readonly term?: "P1Y" | "P3Y" | "P5Y";
}
export interface ReservationOrderAliasRequestPropertiesReservedResourcePropertiesOrReservationOrderAliasResponsePropertiesReservedResourceProperties {
	readonly instanceFlexibility?: "Off" | "On";
}
export interface SavingsPlanModelProperties {
	readonly appliedScopeProperties?: AppliedScopeProperties;
	readonly appliedScopeType?: "ManagementGroup" | "Shared" | "Single";
	readonly benefitStartTime?: string;
	readonly billingAccountId?: string;
	readonly billingPlan?: "P1M";
	readonly billingProfileId?: string;
	readonly billingScopeId?: string;
	readonly commitment?: Commitment;
	readonly customerId?: string;
	readonly displayName?: string;
	readonly displayProvisioningState?: string;
	readonly effectiveDateTime?: string;
	readonly expiryDateTime?: string;
	readonly extendedStatusInfo?: ExtendedStatusInfo;
	readonly provisioningState?:
		| "Cancelled"
		| "ConfirmedBilling"
		| "Created"
		| "Creating"
		| "Expired"
		| "Failed"
		| "PendingBilling"
		| "Succeeded";
	readonly purchaseDateTime?: string;
	readonly renew?: boolean;
	readonly renewProperties?: SavingsPlanModelPropertiesRenewProperties;
	readonly term?: "P1Y" | "P3Y" | "P5Y";
	readonly userFriendlyAppliedScopeType?: string;
	readonly utilization?: Utilization;
}
export interface SavingsPlanModelPropertiesRenewProperties {
	readonly purchaseProperties?: PurchaseRequest;
}
export interface SavingsPlanOrderAliasProperties {
	readonly appliedScopeProperties?: AppliedScopeProperties;
	readonly appliedScopeType?: "ManagementGroup" | "Shared" | "Single";
	readonly billingPlan?: "P1M";
	readonly billingScopeId?: string;
	readonly commitment?: Commitment;
	readonly displayName?: string;
	readonly provisioningState?:
		| "Cancelled"
		| "ConfirmedBilling"
		| "Created"
		| "Creating"
		| "Expired"
		| "Failed"
		| "PendingBilling"
		| "Succeeded";
	readonly savingsPlanOrderId?: string;
	readonly term?: "P1Y" | "P3Y" | "P5Y";
}
export interface SavingsPlanOrderModelProperties {
	readonly benefitStartTime?: string;
	readonly billingAccountId?: string;
	readonly billingPlan?: "P1M";
	readonly billingProfileId?: string;
	readonly billingScopeId?: string;
	readonly customerId?: string;
	readonly displayName?: string;
	readonly expiryDateTime?: string;
	readonly extendedStatusInfo?: ExtendedStatusInfo;
	readonly planInformation?: BillingPlanInformation;
	readonly provisioningState?:
		| "Cancelled"
		| "ConfirmedBilling"
		| "Created"
		| "Creating"
		| "Expired"
		| "Failed"
		| "PendingBilling"
		| "Succeeded";
	readonly savingsPlans?: string[];
	readonly term?: "P1Y" | "P3Y" | "P5Y";
}
export interface Sku {
	readonly name?: string;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface Utilization {
	readonly aggregates?: UtilizationAggregates[];
	readonly trend?: string;
}
export interface UtilizationAggregates {
	readonly grain?: number;
	readonly grainUnit?: string;
	readonly value?: number;
	readonly valueUnit?: string;
}
export default {
	reservationOrderAliases: reservationOrderAliases,
	savingsPlanOrderAliases: savingsPlanOrderAliases,
	savingsPlanOrders: savingsPlanOrders,
	"savingsPlanOrders/savingsPlans": savingsPlanOrders_savingsPlans,
};

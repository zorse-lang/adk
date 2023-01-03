import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class reservationOrders
	extends ArmResource<reservationOrdersComponentInputs>
	implements reservationOrdersComponentOutputs
{
	constructor(entity: ADKEntity, options: reservationOrdersComponentInputs) {
		super(entity, options.name, "Microsoft.Capacity/reservationOrders", "2022-03-01", options);
	}
	public readonly apiVersion: "2022-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.Capacity/reservationOrders";
}
export interface reservationOrdersComponentOutputs {
	readonly apiVersion: "2022-03-01";
	readonly id: string;
	readonly type: "Microsoft.Capacity/reservationOrders";
}
export interface reservationOrdersComponentInputs {
	readonly etag?: number | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: PurchaseRequestPropertiesOrReservationOrderProperties | undefined;
	readonly sku?: SkuName | undefined;
	readonly systemData?: SystemData | undefined;
}
export class reservationOrders_reservations
	extends ArmResource<reservationOrders_reservationsComponentInputs>
	implements reservationOrders_reservationsComponentOutputs
{
	constructor(entity: ADKEntity, options: reservationOrders_reservationsComponentInputs) {
		super(entity, options.name, "Microsoft.Capacity/reservationOrders/reservations", "2022-03-01", options);
	}
	public readonly apiVersion: "2022-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.Capacity/reservationOrders/reservations";
}
export interface reservationOrders_reservationsComponentOutputs {
	readonly apiVersion: "2022-03-01";
	readonly id: string;
	readonly type: "Microsoft.Capacity/reservationOrders/reservations";
}
export interface reservationOrders_reservationsComponentInputs {
	readonly etag?: number | undefined;
	readonly kind?: "Microsoft.Compute" | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: ReservationsProperties | undefined;
	readonly sku?: SkuName | undefined;
	readonly systemData?: SystemData | undefined;
}
export interface AppliedScopeProperties {
	readonly displayName?: string | undefined;
	readonly managementGroupId?: string | undefined;
	readonly tenantId?: string | undefined;
}
export interface ExtendedStatusInfo {
	readonly message?: string | undefined;
	readonly statusCode?:
		| (
				| "Active"
				| "Expired"
				| "Merged"
				| "None"
				| "PaymentInstrumentError"
				| "Pending"
				| "Processing"
				| "PurchaseError"
				| "Split"
				| "Succeeded"
		  )
		| undefined;
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
	readonly location?: string | undefined;
	readonly properties?: PurchaseRequestProperties | undefined;
	readonly sku?: SkuName | undefined;
}
export interface PurchaseRequestProperties {
	readonly appliedScopes?: string[] | undefined;
	readonly appliedScopeType?: ("Shared" | "Single") | undefined;
	readonly billingPlan?: ("Monthly" | "Upfront") | undefined;
	readonly billingScopeId?: string | undefined;
	readonly displayName?: string | undefined;
	readonly quantity?: number | undefined;
	readonly renew?: boolean | undefined;
	readonly reservedResourceProperties?: PurchaseRequestPropertiesReservedResourceProperties | undefined;
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
	readonly term?: ("P1Y" | "P3Y" | "P5Y") | undefined;
}
export interface PurchaseRequestPropertiesOrReservationOrderProperties {
	readonly appliedScopes?: string[] | undefined;
	readonly appliedScopeType?: ("Shared" | "Single") | undefined;
	readonly benefitStartTime?: string | undefined;
	readonly billingPlan?: ("Monthly" | "Upfront") | undefined;
	readonly billingScopeId?: string | undefined;
	readonly createdDateTime?: string | undefined;
	readonly displayName?: string | undefined;
	readonly expiryDate?: string | undefined;
	readonly originalQuantity?: number | undefined;
	readonly planInformation?: ReservationOrderBillingPlanInformation | undefined;
	readonly provisioningState?:
		| (
				| "BillingFailed"
				| "Cancelled"
				| "ConfirmedBilling"
				| "ConfirmedResourceHold"
				| "Created"
				| "Creating"
				| "Expired"
				| "Failed"
				| "Merged"
				| "PendingBilling"
				| "PendingResourceHold"
				| "Split"
				| "Succeeded"
		  )
		| undefined;
	readonly quantity?: number | undefined;
	readonly renew?: boolean | undefined;
	readonly requestDateTime?: string | undefined;
	readonly reservations?: ReservationResponse[] | undefined;
	readonly reservedResourceProperties?: PurchaseRequestPropertiesReservedResourceProperties | undefined;
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
	readonly term?: ("P1Y" | "P3Y" | "P5Y") | undefined;
}
export interface PurchaseRequestPropertiesReservedResourceProperties {
	readonly instanceFlexibility?: ("Off" | "On") | undefined;
}
export interface RenewPropertiesResponse {
	readonly billingCurrencyTotal?: RenewPropertiesResponseBillingCurrencyTotal | undefined;
	readonly pricingCurrencyTotal?: RenewPropertiesResponsePricingCurrencyTotal | undefined;
	readonly purchaseProperties?: PurchaseRequest | undefined;
}
export interface RenewPropertiesResponseBillingCurrencyTotal {
	readonly amount?: number | undefined;
	readonly currencyCode?: string | undefined;
}
export interface RenewPropertiesResponsePricingCurrencyTotal {
	readonly amount?: number | undefined;
	readonly currencyCode?: string | undefined;
}
export interface ReservationMergeProperties {
	readonly mergeDestination?: string | undefined;
	readonly mergeSources?: string[] | undefined;
}
export interface ReservationOrderBillingPlanInformation {
	readonly nextPaymentDueDate?: string | undefined;
	readonly pricingCurrencyTotal?: Price | undefined;
	readonly startDate?: string | undefined;
	readonly transactions?: PaymentDetail[] | undefined;
}
export interface ReservationResponse {
	readonly etag?: number | undefined;
	readonly id?: string | undefined;
	readonly kind?: "Microsoft.Compute" | undefined;
	readonly location?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: ReservationsProperties | undefined;
	readonly sku?: SkuName | undefined;
	readonly systemData?: SystemData | undefined;
	readonly type?: string | undefined;
}
export interface ReservationSplitProperties {
	readonly splitDestinations?: string[] | undefined;
	readonly splitSource?: string | undefined;
}
export interface ReservationsProperties {
	readonly appliedScopeProperties?: AppliedScopeProperties | undefined;
	readonly appliedScopes?: string[] | undefined;
	readonly appliedScopeType?: ("Shared" | "Single") | undefined;
	readonly archived?: boolean | undefined;
	readonly benefitStartTime?: string | undefined;
	readonly billingPlan?: ("Monthly" | "Upfront") | undefined;
	readonly billingScopeId?: string | undefined;
	readonly capabilities?: string | undefined;
	readonly displayName?: string | undefined;
	readonly displayProvisioningState?: string | undefined;
	readonly effectiveDateTime?: string | undefined;
	readonly expiryDate?: string | undefined;
	readonly extendedStatusInfo?: ExtendedStatusInfo | undefined;
	readonly instanceFlexibility?: ("Off" | "On") | undefined;
	readonly lastUpdatedDateTime?: string | undefined;
	readonly mergeProperties?: ReservationMergeProperties | undefined;
	readonly provisioningState?:
		| (
				| "BillingFailed"
				| "Cancelled"
				| "ConfirmedBilling"
				| "ConfirmedResourceHold"
				| "Created"
				| "Creating"
				| "Expired"
				| "Failed"
				| "Merged"
				| "PendingBilling"
				| "PendingResourceHold"
				| "Split"
				| "Succeeded"
		  )
		| undefined;
	readonly provisioningSubState?: string | undefined;
	readonly purchaseDate?: string | undefined;
	readonly quantity?: number | undefined;
	readonly renew?: boolean | undefined;
	readonly renewDestination?: string | undefined;
	readonly renewProperties?: RenewPropertiesResponse | undefined;
	readonly renewSource?: string | undefined;
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
	readonly skuDescription?: string | undefined;
	readonly splitProperties?: ReservationSplitProperties | undefined;
	readonly swapProperties?: ReservationSwapProperties | undefined;
	readonly term?: ("P1Y" | "P3Y" | "P5Y") | undefined;
	readonly userFriendlyAppliedScopeType?: string | undefined;
	readonly userFriendlyRenewState?: string | undefined;
	readonly utilization?: ReservationsPropertiesUtilization | undefined;
}
export interface ReservationsPropertiesUtilization {
	readonly aggregates?: ReservationUtilizationAggregates[] | undefined;
	readonly trend?: string | undefined;
}
export interface ReservationSwapProperties {
	readonly swapDestination?: string | undefined;
	readonly swapSource?: string | undefined;
}
export interface ReservationUtilizationAggregates {
	readonly grain?: number | undefined;
	readonly grainUnit?: string | undefined;
	readonly value?: number | undefined;
	readonly valueUnit?: string | undefined;
}
export interface SkuName {
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
export default {
	reservationOrders: reservationOrders,
	"reservationOrders/reservations": reservationOrders_reservations,
};

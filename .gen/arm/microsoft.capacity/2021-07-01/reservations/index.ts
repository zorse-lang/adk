import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class reservationOrders
	extends ArmResource<reservationOrdersComponentInputs>
	implements reservationOrdersComponentOutputs
{
	constructor(entity: ADKEntity, options: reservationOrdersComponentInputs) {
		super(entity, options.name, "Microsoft.Capacity/reservationOrders", "2021-07-01", options);
	}
	public readonly apiVersion: "2021-07-01";
	public readonly id: string;
	public readonly type: "Microsoft.Capacity/reservationOrders";
}
export interface reservationOrdersComponentOutputs {
	readonly apiVersion: "2021-07-01";
	readonly id: string;
	readonly type: "Microsoft.Capacity/reservationOrders";
}
export interface reservationOrdersComponentInputs {
	readonly etag?: number;
	readonly location?: string;
	readonly name: string;
	readonly properties?: PurchaseRequestPropertiesOrReservationOrderProperties;
	readonly sku?: SkuName;
	readonly systemData?: SystemData;
}
export class reservationOrders_reservations
	extends ArmResource<reservationOrders_reservationsComponentInputs>
	implements reservationOrders_reservationsComponentOutputs
{
	constructor(entity: ADKEntity, options: reservationOrders_reservationsComponentInputs) {
		super(entity, options.name, "Microsoft.Capacity/reservationOrders/reservations", "2021-07-01", options);
	}
	public readonly apiVersion: "2021-07-01";
	public readonly id: string;
	public readonly type: "Microsoft.Capacity/reservationOrders/reservations";
}
export interface reservationOrders_reservationsComponentOutputs {
	readonly apiVersion: "2021-07-01";
	readonly id: string;
	readonly type: "Microsoft.Capacity/reservationOrders/reservations";
}
export interface reservationOrders_reservationsComponentInputs {
	readonly etag?: number;
	readonly kind?: "Microsoft.Compute";
	readonly location?: string;
	readonly name: string;
	readonly properties?: ReservationsProperties;
	readonly sku?: SkuName;
	readonly systemData?: SystemData;
}
export interface ExtendedStatusInfo {
	readonly message?: string;
	readonly statusCode?:
		| "Active"
		| "Expired"
		| "Merged"
		| "None"
		| "PaymentInstrumentError"
		| "Pending"
		| "Processing"
		| "PurchaseError"
		| "Split"
		| "Succeeded";
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
	readonly location?: string;
	readonly properties?: PurchaseRequestProperties;
	readonly sku?: SkuName;
}
export interface PurchaseRequestProperties {
	readonly appliedScopes?: string[];
	readonly appliedScopeType?: "Shared" | "Single";
	readonly billingPlan?: "Monthly" | "Upfront";
	readonly billingScopeId?: string;
	readonly displayName?: string;
	readonly quantity?: number;
	readonly renew?: boolean;
	readonly reservedResourceProperties?: PurchaseRequestPropertiesReservedResourceProperties;
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
		| "VirtualMachines";
	readonly term?: "P1Y" | "P3Y" | "P5Y";
}
export interface PurchaseRequestPropertiesOrReservationOrderProperties {
	readonly appliedScopes?: string[];
	readonly appliedScopeType?: "Shared" | "Single";
	readonly billingPlan?: "Monthly" | "Upfront";
	readonly billingScopeId?: string;
	readonly createdDateTime?: string;
	readonly displayName?: string;
	readonly expiryDate?: string;
	readonly originalQuantity?: number;
	readonly planInformation?: ReservationOrderBillingPlanInformation;
	readonly provisioningState?:
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
		| "Succeeded";
	readonly quantity?: number;
	readonly renew?: boolean;
	readonly requestDateTime?: string;
	readonly reservations?: ReservationResponse[];
	readonly reservedResourceProperties?: PurchaseRequestPropertiesReservedResourceProperties;
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
		| "VirtualMachines";
	readonly term?: "P1Y" | "P3Y" | "P5Y";
}
export interface PurchaseRequestPropertiesReservedResourceProperties {
	readonly instanceFlexibility?: "Off" | "On";
}
export interface RenewPropertiesResponse {
	readonly billingCurrencyTotal?: RenewPropertiesResponseBillingCurrencyTotal;
	readonly pricingCurrencyTotal?: RenewPropertiesResponsePricingCurrencyTotal;
	readonly purchaseProperties?: PurchaseRequest;
}
export interface RenewPropertiesResponseBillingCurrencyTotal {
	readonly amount?: number;
	readonly currencyCode?: string;
}
export interface RenewPropertiesResponsePricingCurrencyTotal {
	readonly amount?: number;
	readonly currencyCode?: string;
}
export interface ReservationMergeProperties {
	readonly mergeDestination?: string;
	readonly mergeSources?: string[];
}
export interface ReservationOrderBillingPlanInformation {
	readonly nextPaymentDueDate?: string;
	readonly pricingCurrencyTotal?: Price;
	readonly startDate?: string;
	readonly transactions?: PaymentDetail[];
}
export interface ReservationResponse {
	readonly etag?: number;
	readonly id?: string;
	readonly kind?: "Microsoft.Compute";
	readonly location?: string;
	readonly name?: string;
	readonly properties?: ReservationsProperties;
	readonly sku?: SkuName;
	readonly systemData?: SystemData;
	readonly type?: string;
}
export interface ReservationSplitProperties {
	readonly splitDestinations?: string[];
	readonly splitSource?: string;
}
export interface ReservationsProperties {
	readonly appliedScopes?: string[];
	readonly appliedScopeType?: "Shared" | "Single";
	readonly archived?: boolean;
	readonly billingPlan?: "Monthly" | "Upfront";
	readonly billingScopeId?: string;
	readonly capabilities?: string;
	readonly displayName?: string;
	readonly displayProvisioningState?: string;
	readonly effectiveDateTime?: string;
	readonly expiryDate?: string;
	readonly extendedStatusInfo?: ExtendedStatusInfo;
	readonly instanceFlexibility?: "Off" | "On";
	readonly lastUpdatedDateTime?: string;
	readonly mergeProperties?: ReservationMergeProperties;
	readonly provisioningState?:
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
		| "Succeeded";
	readonly provisioningSubState?: string;
	readonly purchaseDate?: string;
	readonly quantity?: number;
	readonly renew?: boolean;
	readonly renewDestination?: string;
	readonly renewProperties?: RenewPropertiesResponse;
	readonly renewSource?: string;
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
		| "VirtualMachines";
	readonly skuDescription?: string;
	readonly splitProperties?: ReservationSplitProperties;
	readonly term?: "P1Y" | "P3Y" | "P5Y";
	readonly userFriendlyAppliedScopeType?: string;
	readonly userFriendlyRenewState?: string;
	readonly utilization?: ReservationsPropertiesUtilization;
}
export interface ReservationsPropertiesUtilization {
	readonly aggregates?: ReservationUtilizationAggregates[];
	readonly trend?: string;
}
export interface ReservationUtilizationAggregates {
	readonly grain?: number;
	readonly grainUnit?: string;
	readonly value?: number;
	readonly valueUnit?: string;
}
export interface SkuName {
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
export default {
	reservationOrders: reservationOrders,
	"reservationOrders/reservations": reservationOrders_reservations,
};

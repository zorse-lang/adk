import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class reservationOrders
	extends ArmResource<reservationOrdersComponentInputs>
	implements reservationOrdersComponentOutputs
{
	constructor(entity: ADKEntity, options: reservationOrdersComponentInputs) {
		super(entity, options.name, "Microsoft.Capacity/reservationOrders", "2017-11-01", options);
	}
	public readonly apiVersion: "2017-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Capacity/reservationOrders";
}
export interface reservationOrdersComponentOutputs {
	readonly apiVersion: "2017-11-01";
	readonly id: string;
	readonly type: "Microsoft.Capacity/reservationOrders";
}
export interface reservationOrdersComponentInputs {
	readonly etag?: number;
	readonly name: string;
	readonly properties?: ReservationOrderProperties;
}
export class reservationOrders_reservations
	extends ArmResource<reservationOrders_reservationsComponentInputs>
	implements reservationOrders_reservationsComponentOutputs
{
	constructor(entity: ADKEntity, options: reservationOrders_reservationsComponentInputs) {
		super(entity, options.name, "Microsoft.Capacity/reservationOrders/reservations", "2017-11-01", options);
	}
	public readonly apiVersion: "2017-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Capacity/reservationOrders/reservations";
}
export interface reservationOrders_reservationsComponentOutputs {
	readonly apiVersion: "2017-11-01";
	readonly id: string;
	readonly type: "Microsoft.Capacity/reservationOrders/reservations";
}
export interface reservationOrders_reservationsComponentInputs {
	readonly etag?: number;
	readonly kind?: "Microsoft.Compute";
	readonly location?:
		| "australiaeast"
		| "australiasoutheast"
		| "brazilsouth"
		| "canadacentral"
		| "canadaeast"
		| "centralindia"
		| "centralus"
		| "eastasia"
		| "eastus"
		| "eastus2"
		| "japaneast"
		| "japanwest"
		| "northcentralus"
		| "northeurope"
		| "southcentralus"
		| "southeastasia"
		| "southindia"
		| "uksouth"
		| "ukwest"
		| "westcentralus"
		| "westeurope"
		| "westindia"
		| "westus"
		| "westus2";
	readonly name: string;
	readonly properties?: ReservationProperties;
	readonly sku?: SkuName;
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
		| "PurchaseError"
		| "Split"
		| "Succeeded";
}
export interface ReservationMergeProperties {
	readonly mergeDestination?: string;
	readonly mergeSources?: string[];
}
export interface ReservationOrderProperties {
	readonly createdDateTime?: string;
	readonly displayName?: string;
	readonly expiryDate?: string;
	readonly originalQuantity?: number;
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
		| "Processing"
		| "Split"
		| "Succeeded";
	readonly requestDateTime?: string;
	readonly reservations?: ReservationResponse[];
	readonly term?: "P1Y" | "P3Y";
}
export interface ReservationProperties {
	readonly appliedScopes?: string[];
	readonly appliedScopeType?: "Shared" | "Single";
	readonly displayName?: string;
	readonly effectiveDateTime?: string;
	readonly expiryDate?: string;
	readonly extendedStatusInfo?: ExtendedStatusInfo;
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
		| "Processing"
		| "Split"
		| "Succeeded";
	readonly quantity?: number;
	readonly splitProperties?: ReservationSplitProperties;
}
export interface ReservationResponse {
	readonly etag?: number;
	readonly id?: string;
	readonly kind?: "Microsoft.Compute";
	readonly location?:
		| "australiaeast"
		| "australiasoutheast"
		| "brazilsouth"
		| "canadacentral"
		| "canadaeast"
		| "centralindia"
		| "centralus"
		| "eastasia"
		| "eastus"
		| "eastus2"
		| "japaneast"
		| "japanwest"
		| "northcentralus"
		| "northeurope"
		| "southcentralus"
		| "southeastasia"
		| "southindia"
		| "uksouth"
		| "ukwest"
		| "westcentralus"
		| "westeurope"
		| "westindia"
		| "westus"
		| "westus2";
	readonly name?: string;
	readonly properties?: ReservationProperties;
	readonly sku?: SkuName;
	readonly type?: string;
}
export interface ReservationSplitProperties {
	readonly splitDestinations?: string[];
	readonly splitSource?: string;
}
export interface SkuName {
	readonly name?: string;
}
export default {
	reservationOrders: reservationOrders,
	"reservationOrders/reservations": reservationOrders_reservations,
};

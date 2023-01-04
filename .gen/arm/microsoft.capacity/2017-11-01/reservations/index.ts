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
	readonly etag?: number | undefined;
	readonly name: string;
	readonly properties?: ReservationOrderProperties | undefined;
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
	readonly etag?: number | undefined;
	readonly kind?: "Microsoft.Compute" | undefined;
	readonly location?:
		| (
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
				| "westus2"
		  )
		| undefined;
	readonly name: string;
	readonly properties?: ReservationProperties | undefined;
	readonly sku?: SkuName | undefined;
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
				| "PurchaseError"
				| "Split"
				| "Succeeded"
		  )
		| undefined;
}
export interface ReservationMergeProperties {
	readonly mergeDestination?: string | undefined;
	readonly mergeSources?: string[] | undefined;
}
export interface ReservationOrderProperties {
	readonly createdDateTime?: string | undefined;
	readonly displayName?: string | undefined;
	readonly expiryDate?: string | undefined;
	readonly originalQuantity?: number | undefined;
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
				| "Processing"
				| "Split"
				| "Succeeded"
		  )
		| undefined;
	readonly requestDateTime?: string | undefined;
	readonly reservations?: ReservationResponse[] | undefined;
	readonly term?: ("P1Y" | "P3Y") | undefined;
}
export interface ReservationProperties {
	readonly appliedScopes?: string[] | undefined;
	readonly appliedScopeType?: ("Shared" | "Single") | undefined;
	readonly displayName?: string | undefined;
	readonly effectiveDateTime?: string | undefined;
	readonly expiryDate?: string | undefined;
	readonly extendedStatusInfo?: ExtendedStatusInfo | undefined;
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
				| "Processing"
				| "Split"
				| "Succeeded"
		  )
		| undefined;
	readonly quantity?: number | undefined;
	readonly splitProperties?: ReservationSplitProperties | undefined;
}
export interface ReservationResponse {
	readonly etag?: number | undefined;
	readonly id?: string | undefined;
	readonly kind?: "Microsoft.Compute" | undefined;
	readonly location?:
		| (
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
				| "westus2"
		  )
		| undefined;
	readonly name?: string | undefined;
	readonly properties?: ReservationProperties | undefined;
	readonly sku?: SkuName | undefined;
	readonly type?: string | undefined;
}
export interface ReservationSplitProperties {
	readonly splitDestinations?: string[] | undefined;
	readonly splitSource?: string | undefined;
}
export interface SkuName {
	readonly name?: string | undefined;
}
export default {
	reservationOrders: reservationOrders,
	"reservationOrders/reservations": reservationOrders_reservations,
};
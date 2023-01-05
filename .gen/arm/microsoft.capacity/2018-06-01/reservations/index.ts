import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class reservationOrders
	extends ArmResource<reservationOrdersComponentInputs>
	implements reservationOrdersComponentOutputs
{
	constructor(entity: ADKEntity, options: reservationOrdersComponentInputs) {
		super(entity, options.name, "Microsoft.Capacity/reservationOrders", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Capacity/reservationOrders";
}
export interface reservationOrdersComponentOutputs {
	readonly apiVersion: "2018-06-01";
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
		super(entity, options.name, "Microsoft.Capacity/reservationOrders/reservations", "2018-06-01", options);
	}
	public readonly apiVersion: "2018-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Capacity/reservationOrders/reservations";
}
export interface reservationOrders_reservationsComponentOutputs {
	readonly apiVersion: "2018-06-01";
	readonly id: string;
	readonly type: "Microsoft.Capacity/reservationOrders/reservations";
}
export interface reservationOrders_reservationsComponentInputs {
	readonly etag?: number;
	readonly location?: string;
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
	readonly provisioningState?: string;
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
	readonly instanceFlexibility?: "NotSupported" | "Off" | "On";
	readonly lastUpdatedDateTime?: string;
	readonly mergeProperties?: ReservationMergeProperties;
	readonly provisioningState?: string;
	readonly quantity?: number;
	readonly reservedResourceType?: "CosmosDb" | "RedHat" | "SqlDatabases" | "SuseLinux" | "VirtualMachines";
	readonly skuDescription?: string;
	readonly splitProperties?: ReservationSplitProperties;
}
export interface ReservationResponse {
	readonly etag?: number;
	readonly id?: string;
	readonly location?: string;
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

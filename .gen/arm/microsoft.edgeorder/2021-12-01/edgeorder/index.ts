import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class addresses extends ArmResource<addressesComponentInputs> implements addressesComponentOutputs {
	constructor(entity: ADKEntity, options: addressesComponentInputs) {
		super(entity, options.name, "Microsoft.EdgeOrder/addresses", "2021-12-01", options);
	}
	public readonly apiVersion: "2021-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.EdgeOrder/addresses";
}
export interface addressesComponentOutputs {
	readonly apiVersion: "2021-12-01";
	readonly id: string;
	readonly type: "Microsoft.EdgeOrder/addresses";
}
export interface addressesComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: AddressProperties;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export class locations_orders
	extends ArmResource<locations_ordersComponentInputs>
	implements locations_ordersComponentOutputs
{
	constructor(entity: ADKEntity, options: locations_ordersComponentInputs) {
		super(entity, options.name, "Microsoft.EdgeOrder/locations/orders", "2021-12-01", options);
	}
	public readonly apiVersion: "2021-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.EdgeOrder/locations/orders";
}
export interface locations_ordersComponentOutputs {
	readonly apiVersion: "2021-12-01";
	readonly id: string;
	readonly type: "Microsoft.EdgeOrder/locations/orders";
}
export interface locations_ordersComponentInputs {
	readonly name: string;
	readonly properties?: OrderProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class orderItems extends ArmResource<orderItemsComponentInputs> implements orderItemsComponentOutputs {
	constructor(entity: ADKEntity, options: orderItemsComponentInputs) {
		super(entity, options.name, "Microsoft.EdgeOrder/orderItems", "2021-12-01", options);
	}
	public readonly apiVersion: "2021-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.EdgeOrder/orderItems";
}
export interface orderItemsComponentOutputs {
	readonly apiVersion: "2021-12-01";
	readonly id: string;
	readonly type: "Microsoft.EdgeOrder/orderItems";
}
export interface orderItemsComponentInputs {
	readonly location: string;
	readonly name: string;
	readonly properties: OrderItemProperties;
	readonly systemData?: SystemData | undefined;
	readonly tags?: TrackedResourceTags | undefined;
}
export interface AddressDetails {
	readonly forwardAddress: AddressProperties;
	readonly returnAddress?: AddressProperties | undefined;
}
export interface AddressProperties {
	readonly addressValidationStatus?: ("Ambiguous" | "Invalid" | "Valid") | undefined;
	readonly contactDetails: ContactDetails;
	readonly shippingAddress?: ShippingAddress | undefined;
}
export interface ContactDetails {
	readonly contactName: string;
	readonly emailList: string[];
	readonly mobile?: string | undefined;
	readonly phone: string;
	readonly phoneExtension?: string | undefined;
}
export interface DeviceDetails {
	readonly managementResourceId?: string | undefined;
	readonly managementResourceTenantId?: string | undefined;
	readonly serialNumber?: string | undefined;
}
export interface DisplayInfo {
	readonly configurationDisplayName?: string | undefined;
	readonly productFamilyDisplayName?: string | undefined;
}
export interface EncryptionPreferences {
	readonly doubleEncryptionStatus?: ("Disabled" | "Enabled") | undefined;
}
export interface ErrorAdditionalInfo {
	readonly info?: any | undefined;
	readonly type?: string | undefined;
}
export interface ErrorDetail {
	readonly additionalInfo?: ErrorAdditionalInfo[] | undefined;
	readonly code?: string | undefined;
	readonly details?: ErrorDetail[] | undefined;
	readonly message?: string | undefined;
	readonly target?: string | undefined;
}
export interface ForwardShippingDetails {
	readonly carrierDisplayName?: string | undefined;
	readonly carrierName?: string | undefined;
	readonly trackingId?: string | undefined;
	readonly trackingUrl?: string | undefined;
}
export interface HierarchyInformation {
	readonly configurationName?: string | undefined;
	readonly productFamilyName?: string | undefined;
	readonly productLineName?: string | undefined;
	readonly productName?: string | undefined;
}
export interface ManagementResourcePreferences {
	readonly preferredManagementResourceId?: string | undefined;
}
export interface NotificationPreference {
	readonly sendNotification: boolean;
	readonly stageName: "Delivered" | "Shipped";
}
export interface OrderItemDetails {
	readonly cancellationReason?: string | undefined;
	readonly cancellationStatus?: ("Cancellable" | "CancellableWithFee" | "NotCancellable") | undefined;
	readonly currentStage?: StageDetails | undefined;
	readonly deletionStatus?: ("Allowed" | "NotAllowed") | undefined;
	readonly error?: ErrorDetail | undefined;
	readonly forwardShippingDetails?: ForwardShippingDetails | undefined;
	readonly managementRpDetails?: ResourceProviderDetails | undefined;
	readonly managementRpDetailsList?: ResourceProviderDetails[] | undefined;
	readonly notificationEmailList?: string[] | undefined;
	readonly orderItemStageHistory?: StageDetails[] | undefined;
	readonly orderItemType: "Purchase" | "Rental";
	readonly preferences?: Preferences | undefined;
	readonly productDetails: ProductDetails;
	readonly returnReason?: string | undefined;
	readonly returnStatus?: ("NotReturnable" | "Returnable" | "ReturnableWithFee") | undefined;
	readonly reverseShippingDetails?: ReverseShippingDetails | undefined;
}
export interface OrderItemProperties {
	readonly addressDetails: AddressDetails;
	readonly orderId: string;
	readonly orderItemDetails: OrderItemDetails;
	readonly startTime?: string | undefined;
}
export interface OrderProperties {
	readonly currentStage?: StageDetails | undefined;
	readonly orderItemIds?: string[] | undefined;
	readonly orderStageHistory?: StageDetails[] | undefined;
}
export interface Preferences {
	readonly encryptionPreferences?: EncryptionPreferences | undefined;
	readonly managementResourcePreferences?: ManagementResourcePreferences | undefined;
	readonly notificationPreferences?: NotificationPreference[] | undefined;
	readonly transportPreferences?: TransportPreferences | undefined;
}
export interface ProductDetails {
	readonly count?: number | undefined;
	readonly deviceDetails?: DeviceDetails[] | undefined;
	readonly displayInfo?: DisplayInfo | undefined;
	readonly hierarchyInformation: HierarchyInformation;
	readonly productDoubleEncryptionStatus?: ("Disabled" | "Enabled") | undefined;
}
export interface ResourceProviderDetails {
	readonly resourceProviderNamespace?: string | undefined;
}
export interface ReverseShippingDetails {
	readonly carrierDisplayName?: string | undefined;
	readonly carrierName?: string | undefined;
	readonly sasKeyForLabel?: string | undefined;
	readonly trackingId?: string | undefined;
	readonly trackingUrl?: string | undefined;
}
export interface ShippingAddress {
	readonly addressType?: ("Commercial" | "None" | "Residential") | undefined;
	readonly city?: string | undefined;
	readonly companyName?: string | undefined;
	readonly country: string;
	readonly postalCode?: string | undefined;
	readonly stateOrProvince?: string | undefined;
	readonly streetAddress1: string;
	readonly streetAddress2?: string | undefined;
	readonly streetAddress3?: string | undefined;
	readonly zipExtendedCode?: string | undefined;
}
export interface StageDetails {
	readonly displayName?: string | undefined;
	readonly stageName?:
		| (
				| "Cancelled"
				| "Confirmed"
				| "Delivered"
				| "InReview"
				| "InUse"
				| "Placed"
				| "ReadyToShip"
				| "ReturnCompleted"
				| "ReturnInitiated"
				| "ReturnPickedUp"
				| "ReturnedToMicrosoft"
				| "Shipped"
		  )
		| undefined;
	readonly stageStatus?: ("Cancelled" | "Cancelling" | "Failed" | "InProgress" | "None" | "Succeeded") | undefined;
	readonly startTime?: string | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface TrackedResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export interface TransportPreferences {
	readonly preferredShipmentType: "CustomerManaged" | "MicrosoftManaged";
}
export default {
	addresses: addresses,
	"locations/orders": locations_orders,
	orderItems: orderItems,
};

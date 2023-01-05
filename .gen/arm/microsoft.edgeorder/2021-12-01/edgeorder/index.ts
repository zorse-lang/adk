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
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
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
	readonly properties?: OrderProperties;
	readonly systemData?: SystemData;
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
	readonly systemData?: SystemData;
	readonly tags?: TrackedResourceTags;
}
export interface AddressDetails {
	readonly forwardAddress: AddressProperties;
	readonly returnAddress?: AddressProperties;
}
export interface AddressProperties {
	readonly addressValidationStatus?: "Ambiguous" | "Invalid" | "Valid";
	readonly contactDetails: ContactDetails;
	readonly shippingAddress?: ShippingAddress;
}
export interface ContactDetails {
	readonly contactName: string;
	readonly emailList: string[];
	readonly mobile?: string;
	readonly phone: string;
	readonly phoneExtension?: string;
}
export interface DeviceDetails {
	readonly managementResourceId?: string;
	readonly managementResourceTenantId?: string;
	readonly serialNumber?: string;
}
export interface DisplayInfo {
	readonly configurationDisplayName?: string;
	readonly productFamilyDisplayName?: string;
}
export interface EncryptionPreferences {
	readonly doubleEncryptionStatus?: "Disabled" | "Enabled";
}
export interface ErrorAdditionalInfo {
	readonly info?: any;
	readonly type?: string;
}
export interface ErrorDetail {
	readonly additionalInfo?: ErrorAdditionalInfo[];
	readonly code?: string;
	readonly details?: ErrorDetail[];
	readonly message?: string;
	readonly target?: string;
}
export interface ForwardShippingDetails {
	readonly carrierDisplayName?: string;
	readonly carrierName?: string;
	readonly trackingId?: string;
	readonly trackingUrl?: string;
}
export interface HierarchyInformation {
	readonly configurationName?: string;
	readonly productFamilyName?: string;
	readonly productLineName?: string;
	readonly productName?: string;
}
export interface ManagementResourcePreferences {
	readonly preferredManagementResourceId?: string;
}
export interface NotificationPreference {
	readonly sendNotification: boolean;
	readonly stageName: "Delivered" | "Shipped";
}
export interface OrderItemDetails {
	readonly cancellationReason?: string;
	readonly cancellationStatus?: "Cancellable" | "CancellableWithFee" | "NotCancellable";
	readonly currentStage?: StageDetails;
	readonly deletionStatus?: "Allowed" | "NotAllowed";
	readonly error?: ErrorDetail;
	readonly forwardShippingDetails?: ForwardShippingDetails;
	readonly managementRpDetails?: ResourceProviderDetails;
	readonly managementRpDetailsList?: ResourceProviderDetails[];
	readonly notificationEmailList?: string[];
	readonly orderItemStageHistory?: StageDetails[];
	readonly orderItemType: "Purchase" | "Rental";
	readonly preferences?: Preferences;
	readonly productDetails: ProductDetails;
	readonly returnReason?: string;
	readonly returnStatus?: "NotReturnable" | "Returnable" | "ReturnableWithFee";
	readonly reverseShippingDetails?: ReverseShippingDetails;
}
export interface OrderItemProperties {
	readonly addressDetails: AddressDetails;
	readonly orderId: string;
	readonly orderItemDetails: OrderItemDetails;
	readonly startTime?: string;
}
export interface OrderProperties {
	readonly currentStage?: StageDetails;
	readonly orderItemIds?: string[];
	readonly orderStageHistory?: StageDetails[];
}
export interface Preferences {
	readonly encryptionPreferences?: EncryptionPreferences;
	readonly managementResourcePreferences?: ManagementResourcePreferences;
	readonly notificationPreferences?: NotificationPreference[];
	readonly transportPreferences?: TransportPreferences;
}
export interface ProductDetails {
	readonly count?: number;
	readonly deviceDetails?: DeviceDetails[];
	readonly displayInfo?: DisplayInfo;
	readonly hierarchyInformation: HierarchyInformation;
	readonly productDoubleEncryptionStatus?: "Disabled" | "Enabled";
}
export interface ResourceProviderDetails {
	readonly resourceProviderNamespace?: string;
}
export interface ReverseShippingDetails {
	readonly carrierDisplayName?: string;
	readonly carrierName?: string;
	readonly sasKeyForLabel?: string;
	readonly trackingId?: string;
	readonly trackingUrl?: string;
}
export interface ShippingAddress {
	readonly addressType?: "Commercial" | "None" | "Residential";
	readonly city?: string;
	readonly companyName?: string;
	readonly country: string;
	readonly postalCode?: string;
	readonly stateOrProvince?: string;
	readonly streetAddress1: string;
	readonly streetAddress2?: string;
	readonly streetAddress3?: string;
	readonly zipExtendedCode?: string;
}
export interface StageDetails {
	readonly displayName?: string;
	readonly stageName?:
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
		| "Shipped";
	readonly stageStatus?: "Cancelled" | "Cancelling" | "Failed" | "InProgress" | "None" | "Succeeded";
	readonly startTime?: string;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface TrackedResourceTags {
	readonly [key: string]: string;
}
export interface TransportPreferences {
	readonly preferredShipmentType: "CustomerManaged" | "MicrosoftManaged";
}
export default {
	addresses: addresses,
	"locations/orders": locations_orders,
	orderItems: orderItems,
};

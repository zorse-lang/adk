import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class privateStores extends ArmResource<privateStoresComponentInputs> implements privateStoresComponentOutputs {
	constructor(entity: ADKEntity, options: privateStoresComponentInputs) {
		super(entity, options.name, "Microsoft.Marketplace/privateStores", "2021-12-01", options);
	}
	public readonly apiVersion: "2021-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Marketplace/privateStores";
}
export interface privateStoresComponentOutputs {
	readonly apiVersion: "2021-12-01";
	readonly id: string;
	readonly type: "Microsoft.Marketplace/privateStores";
}
export interface privateStoresComponentInputs {
	readonly name: string;
	readonly properties?: PrivateStoreProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class privateStores_adminRequestApprovals
	extends ArmResource<privateStores_adminRequestApprovalsComponentInputs>
	implements privateStores_adminRequestApprovalsComponentOutputs
{
	constructor(entity: ADKEntity, options: privateStores_adminRequestApprovalsComponentInputs) {
		super(entity, options.name, "Microsoft.Marketplace/privateStores/adminRequestApprovals", "2021-12-01", options);
	}
	public readonly apiVersion: "2021-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Marketplace/privateStores/adminRequestApprovals";
}
export interface privateStores_adminRequestApprovalsComponentOutputs {
	readonly apiVersion: "2021-12-01";
	readonly id: string;
	readonly type: "Microsoft.Marketplace/privateStores/adminRequestApprovals";
}
export interface privateStores_adminRequestApprovalsComponentInputs {
	readonly name: string;
	readonly properties?: AdminRequestApprovalProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class privateStores_collections
	extends ArmResource<privateStores_collectionsComponentInputs>
	implements privateStores_collectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: privateStores_collectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Marketplace/privateStores/collections", "2021-12-01", options);
	}
	public readonly apiVersion: "2021-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Marketplace/privateStores/collections";
}
export interface privateStores_collectionsComponentOutputs {
	readonly apiVersion: "2021-12-01";
	readonly id: string;
	readonly type: "Microsoft.Marketplace/privateStores/collections";
}
export interface privateStores_collectionsComponentInputs {
	readonly name: string;
	readonly properties?: CollectionProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class privateStores_collections_offers
	extends ArmResource<privateStores_collections_offersComponentInputs>
	implements privateStores_collections_offersComponentOutputs
{
	constructor(entity: ADKEntity, options: privateStores_collections_offersComponentInputs) {
		super(entity, options.name, "Microsoft.Marketplace/privateStores/collections/offers", "2021-12-01", options);
	}
	public readonly apiVersion: "2021-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Marketplace/privateStores/collections/offers";
}
export interface privateStores_collections_offersComponentOutputs {
	readonly apiVersion: "2021-12-01";
	readonly id: string;
	readonly type: "Microsoft.Marketplace/privateStores/collections/offers";
}
export interface privateStores_collections_offersComponentInputs {
	readonly name: string;
	readonly properties?: OfferProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export class privateStores_requestApprovals
	extends ArmResource<privateStores_requestApprovalsComponentInputs>
	implements privateStores_requestApprovalsComponentOutputs
{
	constructor(entity: ADKEntity, options: privateStores_requestApprovalsComponentInputs) {
		super(entity, options.name, "Microsoft.Marketplace/privateStores/requestApprovals", "2021-12-01", options);
	}
	public readonly apiVersion: "2021-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Marketplace/privateStores/requestApprovals";
}
export interface privateStores_requestApprovalsComponentOutputs {
	readonly apiVersion: "2021-12-01";
	readonly id: string;
	readonly type: "Microsoft.Marketplace/privateStores/requestApprovals";
}
export interface privateStores_requestApprovalsComponentInputs {
	readonly name: string;
	readonly properties?: RequestApprovalProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export function listNewPlansNotifications(resource: privateStores): NewPlansNotificationsList {
	if (resource.apiVersion !== "2021-12-01") {
		throw new Error(`listNewPlansNotifications is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Marketplace/privateStores") {
		throw new Error(`listNewPlansNotifications is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listStopSellOffersPlansNotifications(
	resource: privateStores,
	input: StopSellSubscriptions,
): StopSellOffersPlansNotificationsList {
	if (resource.apiVersion !== "2021-12-01") {
		throw new Error(`listStopSellOffersPlansNotifications is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Marketplace/privateStores") {
		throw new Error(`listStopSellOffersPlansNotifications is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export function listSubscriptionsContext(resource: privateStores): SubscriptionsContextList {
	if (resource.apiVersion !== "2021-12-01") {
		throw new Error(`listSubscriptionsContext is not available for api version ${resource.apiVersion}`);
	}
	if (resource.type !== "Microsoft.Marketplace/privateStores") {
		throw new Error(`listSubscriptionsContext is not available for resource type ${resource.type}`);
	}
	throw new Error("not implemented");
}
export interface AdminRequestApprovalProperties {
	readonly adminAction?: ("Approved" | "Rejected") | undefined;
	readonly administrator?: string | undefined;
	readonly approvedPlans?: string[] | undefined;
	readonly collectionIds?: string[] | undefined;
	readonly comment?: string | undefined;
	readonly displayName?: string | undefined;
	readonly offerId?: string | undefined;
	readonly plans?: PlanRequesterDetails[] | undefined;
	readonly publisherId?: string | undefined;
}
export interface CollectionProperties {
	readonly allSubscriptions?: boolean | undefined;
	readonly claim?: string | undefined;
	readonly collectionId?: string | undefined;
	readonly collectionName?: string | undefined;
	readonly enabled?: boolean | undefined;
	readonly numberOfOffers?: number | undefined;
	readonly subscriptionsList?: string[] | undefined;
}
export interface NewNotifications {
	readonly displayName?: string | undefined;
	readonly icon?: string | undefined;
	readonly isFuturePlansEnabled?: boolean | undefined;
	readonly messageCode?: number | undefined;
	readonly offerId?: string | undefined;
	readonly plans?: PlanNotificationDetails[] | undefined;
}
export interface NewPlansNotificationsList {
	readonly newPlansNotifications?: NewNotifications[] | undefined;
}
export interface NotificationsSettingsProperties {
	readonly recipients?: Recipient[] | undefined;
	readonly sendToAllMarketplaceAdmins?: boolean | undefined;
}
export interface OfferProperties {
	readonly createdAt?: string | undefined;
	readonly eTag?: string | undefined;
	readonly iconFileUris?: OfferPropertiesIconFileUris | undefined;
	readonly modifiedAt?: string | undefined;
	readonly offerDisplayName?: string | undefined;
	readonly plans?: Plan[] | undefined;
	readonly privateStoreId?: string | undefined;
	readonly publisherDisplayName?: string | undefined;
	readonly specificPlanIdsLimitation?: string[] | undefined;
	readonly uniqueOfferId?: string | undefined;
	readonly updateSuppressedDueIdempotence?: boolean | undefined;
}
export interface OfferPropertiesIconFileUris {
	readonly "[ key: string ]"?: string | undefined;
}
export interface Plan {
	readonly accessibility?: ("PrivateSubscriptionOnLevel" | "PrivateTenantOnLevel" | "Public" | "Unknown") | undefined;
	readonly altStackReference?: string | undefined;
	readonly planDisplayName?: string | undefined;
	readonly planId?: string | undefined;
	readonly skuId?: string | undefined;
	readonly stackType?: string | undefined;
}
export interface PlanDetails {
	readonly justification?: string | undefined;
	readonly planId?: string | undefined;
	readonly requestDate?: any | undefined;
	readonly status?: ("Approved" | "None" | "Pending" | "Rejected") | undefined;
	readonly subscriptionId?: string | undefined;
	readonly subscriptionName?: string | undefined;
}
export interface PlanNotificationDetails {
	readonly planDisplayName?: string | undefined;
	readonly planId?: string | undefined;
}
export interface PlanRequesterDetails {
	readonly planDisplayName?: string | undefined;
	readonly planId?: string | undefined;
	readonly requesters?: UserRequestDetails[] | undefined;
}
export interface PrivateStoreProperties {
	readonly availability?: ("disabled" | "enabled") | undefined;
	readonly branding?: PrivateStorePropertiesBranding | undefined;
	readonly collectionIds?: string[] | undefined;
	readonly eTag?: string | undefined;
	readonly isGov?: boolean | undefined;
	readonly notificationsSettings?: NotificationsSettingsProperties | undefined;
	readonly privateStoreId?: string | undefined;
	readonly privateStoreName?: string | undefined;
	readonly tenantId?: string | undefined;
}
export interface PrivateStorePropertiesBranding {
	readonly "[ key: string ]"?: string | undefined;
}
export interface Recipient {
	readonly displayName?: string | undefined;
	readonly emailAddress?: string | undefined;
	readonly principalId?: string | undefined;
}
export interface RequestApprovalProperties {
	readonly isClosed?: boolean | undefined;
	readonly messageCode?: number | undefined;
	readonly offerDisplayName?: string | undefined;
	readonly offerId?: string | undefined;
	readonly plansDetails?: PlanDetails[] | undefined;
	readonly publisherId?: string | undefined;
}
export interface StopSellOffersPlansNotificationsList {
	readonly stopSellNotifications?: StopSellOffersPlansNotificationsListProperties[] | undefined;
}
export interface StopSellOffersPlansNotificationsListProperties {
	readonly displayName?: string | undefined;
	readonly icon?: string | undefined;
	readonly isEntire?: boolean | undefined;
	readonly messageCode?: number | undefined;
	readonly offerId?: string | undefined;
	readonly plans?: PlanNotificationDetails[] | undefined;
	readonly publicContext?: boolean | undefined;
	readonly subscriptionsIds?: string[] | undefined;
}
export interface StopSellSubscriptions {
	readonly subscriptions?: string[] | undefined;
}
export interface SubscriptionsContextList {
	readonly subscriptionsIds?: string[] | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface UserRequestDetails {
	readonly date?: string | undefined;
	readonly justification?: string | undefined;
	readonly subscriptionId?: string | undefined;
	readonly subscriptionName?: string | undefined;
	readonly user?: string | undefined;
}
export default {
	privateStores: privateStores,
	"privateStores/adminRequestApprovals": privateStores_adminRequestApprovals,
	"privateStores/collections": privateStores_collections,
	"privateStores/collections/offers": privateStores_collections_offers,
	"privateStores/requestApprovals": privateStores_requestApprovals,
};

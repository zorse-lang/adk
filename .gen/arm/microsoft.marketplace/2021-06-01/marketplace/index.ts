import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class privateStores extends ArmResource<privateStoresComponentInputs> implements privateStoresComponentOutputs {
	constructor(entity: ADKEntity, options: privateStoresComponentInputs) {
		super(entity, options.name, "Microsoft.Marketplace/privateStores", "2021-06-01", options);
	}
	public readonly apiVersion: "2021-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Marketplace/privateStores";
}
export interface privateStoresComponentOutputs {
	readonly apiVersion: "2021-06-01";
	readonly id: string;
	readonly type: "Microsoft.Marketplace/privateStores";
}
export interface privateStoresComponentInputs {
	readonly name: string;
	readonly properties?: PrivateStoreProperties;
	readonly systemData?: SystemData;
}
export class privateStores_adminRequestApprovals
	extends ArmResource<privateStores_adminRequestApprovalsComponentInputs>
	implements privateStores_adminRequestApprovalsComponentOutputs
{
	constructor(entity: ADKEntity, options: privateStores_adminRequestApprovalsComponentInputs) {
		super(entity, options.name, "Microsoft.Marketplace/privateStores/adminRequestApprovals", "2021-06-01", options);
	}
	public readonly apiVersion: "2021-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Marketplace/privateStores/adminRequestApprovals";
}
export interface privateStores_adminRequestApprovalsComponentOutputs {
	readonly apiVersion: "2021-06-01";
	readonly id: string;
	readonly type: "Microsoft.Marketplace/privateStores/adminRequestApprovals";
}
export interface privateStores_adminRequestApprovalsComponentInputs {
	readonly name: string;
	readonly properties?: AdminRequestApprovalProperties;
	readonly systemData?: SystemData;
}
export class privateStores_collections
	extends ArmResource<privateStores_collectionsComponentInputs>
	implements privateStores_collectionsComponentOutputs
{
	constructor(entity: ADKEntity, options: privateStores_collectionsComponentInputs) {
		super(entity, options.name, "Microsoft.Marketplace/privateStores/collections", "2021-06-01", options);
	}
	public readonly apiVersion: "2021-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Marketplace/privateStores/collections";
}
export interface privateStores_collectionsComponentOutputs {
	readonly apiVersion: "2021-06-01";
	readonly id: string;
	readonly type: "Microsoft.Marketplace/privateStores/collections";
}
export interface privateStores_collectionsComponentInputs {
	readonly name: string;
	readonly properties?: CollectionProperties;
	readonly systemData?: SystemData;
}
export class privateStores_collections_offers
	extends ArmResource<privateStores_collections_offersComponentInputs>
	implements privateStores_collections_offersComponentOutputs
{
	constructor(entity: ADKEntity, options: privateStores_collections_offersComponentInputs) {
		super(entity, options.name, "Microsoft.Marketplace/privateStores/collections/offers", "2021-06-01", options);
	}
	public readonly apiVersion: "2021-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Marketplace/privateStores/collections/offers";
}
export interface privateStores_collections_offersComponentOutputs {
	readonly apiVersion: "2021-06-01";
	readonly id: string;
	readonly type: "Microsoft.Marketplace/privateStores/collections/offers";
}
export interface privateStores_collections_offersComponentInputs {
	readonly name: string;
	readonly properties?: OfferProperties;
	readonly systemData?: SystemData;
}
export class privateStores_requestApprovals
	extends ArmResource<privateStores_requestApprovalsComponentInputs>
	implements privateStores_requestApprovalsComponentOutputs
{
	constructor(entity: ADKEntity, options: privateStores_requestApprovalsComponentInputs) {
		super(entity, options.name, "Microsoft.Marketplace/privateStores/requestApprovals", "2021-06-01", options);
	}
	public readonly apiVersion: "2021-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Marketplace/privateStores/requestApprovals";
}
export interface privateStores_requestApprovalsComponentOutputs {
	readonly apiVersion: "2021-06-01";
	readonly id: string;
	readonly type: "Microsoft.Marketplace/privateStores/requestApprovals";
}
export interface privateStores_requestApprovalsComponentInputs {
	readonly name: string;
	readonly properties?: RequestApprovalProperties;
	readonly systemData?: SystemData;
}
export interface AdminRequestApprovalProperties {
	readonly adminAction?: "Approved" | "Rejected";
	readonly administrator?: string;
	readonly approvedPlans?: string[];
	readonly collectionIds?: string[];
	readonly comment?: string;
	readonly displayName?: string;
	readonly offerId?: string;
	readonly plans?: PlanRequesterDetails[];
	readonly publisherId?: string;
}
export interface CollectionProperties {
	readonly allSubscriptions?: boolean;
	readonly claim?: string;
	readonly collectionId?: string;
	readonly collectionName?: string;
	readonly enabled?: boolean;
	readonly numberOfOffers?: number;
	readonly subscriptionsList?: string[];
}
export interface NotificationsSettingsProperties {
	readonly recipients?: Recipient[];
	readonly sendToAllMarketplaceAdmins?: boolean;
}
export interface OfferProperties {
	readonly createdAt?: string;
	readonly eTag?: string;
	readonly iconFileUris?: OfferPropertiesIconFileUris;
	readonly modifiedAt?: string;
	readonly offerDisplayName?: string;
	readonly plans?: Plan[];
	readonly privateStoreId?: string;
	readonly publisherDisplayName?: string;
	readonly specificPlanIdsLimitation?: string[];
	readonly uniqueOfferId?: string;
	readonly updateSuppressedDueIdempotence?: boolean;
}
export interface OfferPropertiesIconFileUris {
	readonly [key: string]: string;
}
export interface Plan {
	readonly accessibility?: "PrivateSubscriptionOnLevel" | "PrivateTenantOnLevel" | "Public" | "Unknown";
	readonly altStackReference?: string;
	readonly planDisplayName?: string;
	readonly planId?: string;
	readonly skuId?: string;
	readonly stackType?: string;
}
export interface PlanDetails {
	readonly justification?: string;
	readonly planId?: string;
	readonly requestDate?: any;
	readonly status?: "Approved" | "None" | "Pending" | "Rejected";
	readonly subscriptionId?: string;
	readonly subscriptionName?: string;
}
export interface PlanRequesterDetails {
	readonly planDisplayName?: string;
	readonly planId?: string;
	readonly requesters?: UserRequestDetails[];
}
export interface PrivateStoreProperties {
	readonly availability?: "disabled" | "enabled";
	readonly branding?: PrivateStorePropertiesBranding;
	readonly collectionIds?: string[];
	readonly eTag?: string;
	readonly isGov?: boolean;
	readonly notificationsSettings?: NotificationsSettingsProperties;
	readonly privateStoreId?: string;
	readonly privateStoreName?: string;
	readonly tenantId?: string;
}
export interface PrivateStorePropertiesBranding {
	readonly [key: string]: string;
}
export interface Recipient {
	readonly displayName?: string;
	readonly emailAddress?: string;
	readonly principalId?: string;
}
export interface RequestApprovalProperties {
	readonly isClosed?: boolean;
	readonly messageCode?: number;
	readonly offerDisplayName?: string;
	readonly offerId?: string;
	readonly plansDetails?: PlanDetails[];
	readonly publisherId?: string;
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface UserRequestDetails {
	readonly date?: string;
	readonly justification?: string;
	readonly subscriptionId?: string;
	readonly subscriptionName?: string;
	readonly user?: string;
}
export default {
	privateStores: privateStores,
	"privateStores/adminRequestApprovals": privateStores_adminRequestApprovals,
	"privateStores/collections": privateStores_collections,
	"privateStores/collections/offers": privateStores_collections_offers,
	"privateStores/requestApprovals": privateStores_requestApprovals,
};

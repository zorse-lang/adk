import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class privateStores extends ArmResource<privateStoresComponentInputs> implements privateStoresComponentOutputs {
	constructor(entity: ADKEntity, options: privateStoresComponentInputs) {
		super(entity, options.name, "Microsoft.Marketplace/privateStores", "2020-01-01", options);
	}
	public readonly apiVersion: "2020-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Marketplace/privateStores";
}
export interface privateStoresComponentOutputs {
	readonly apiVersion: "2020-01-01";
	readonly id: string;
	readonly type: "Microsoft.Marketplace/privateStores";
}
export interface privateStoresComponentInputs {
	readonly name: string;
	readonly properties?: PrivateStoreProperties;
}
export class privateStores_offers
	extends ArmResource<privateStores_offersComponentInputs>
	implements privateStores_offersComponentOutputs
{
	constructor(entity: ADKEntity, options: privateStores_offersComponentInputs) {
		super(entity, options.name, "Microsoft.Marketplace/privateStores/offers", "2020-01-01", options);
	}
	public readonly apiVersion: "2020-01-01";
	public readonly id: string;
	public readonly type: "Microsoft.Marketplace/privateStores/offers";
}
export interface privateStores_offersComponentOutputs {
	readonly apiVersion: "2020-01-01";
	readonly id: string;
	readonly type: "Microsoft.Marketplace/privateStores/offers";
}
export interface privateStores_offersComponentInputs {
	readonly name: string;
	readonly properties?: OfferProperties;
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
export interface PrivateStoreProperties {
	readonly availability?: "disabled" | "enabled";
	readonly customerTag?: string;
	readonly eTag?: string;
	readonly hasCommercialAssociation?: boolean;
	readonly hasMultiTenantAssociation?: boolean;
	readonly isGov?: boolean;
	readonly privateStoreId?: string;
	readonly privateStoreName?: string;
	readonly tenantIds?: string[];
	readonly tenantTag?: string;
}
export default {
	privateStores: privateStores,
	"privateStores/offers": privateStores_offers,
};

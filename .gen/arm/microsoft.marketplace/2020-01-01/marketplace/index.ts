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
	readonly properties?: PrivateStoreProperties | undefined;
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
	readonly properties?: OfferProperties | undefined;
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
export interface PrivateStoreProperties {
	readonly availability?: ("disabled" | "enabled") | undefined;
	readonly customerTag?: string | undefined;
	readonly eTag?: string | undefined;
	readonly hasCommercialAssociation?: boolean | undefined;
	readonly hasMultiTenantAssociation?: boolean | undefined;
	readonly isGov?: boolean | undefined;
	readonly privateStoreId?: string | undefined;
	readonly privateStoreName?: string | undefined;
	readonly tenantIds?: string[] | undefined;
	readonly tenantTag?: string | undefined;
}
export default {
	privateStores: privateStores,
	"privateStores/offers": privateStores_offers,
};

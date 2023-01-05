import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class promotions extends ArmResource<promotionsComponentInputs> implements promotionsComponentOutputs {
	constructor(entity: ADKEntity, options: promotionsComponentInputs) {
		super(entity, options.name, "Microsoft.Billing/promotions", "2020-11-01-preview", options);
	}
	public readonly apiVersion: "2020-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/promotions";
}
export interface promotionsComponentOutputs {
	readonly apiVersion: "2020-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Billing/promotions";
}
export interface promotionsComponentInputs {
	readonly etag?: number;
	readonly name: string;
	readonly properties?: PromotionCreateRequestPropertiesOrPromotionResponseProperties;
	readonly sku?: PromotionCreateSkuNameRequestProperties;
}
export interface PromotionCreateRequestPropertiesOrPromotionResponseProperties {
	readonly appliedScopes?: string[];
	readonly displayName?: string;
	readonly effectiveDateTime?: string;
	readonly expiryDate?: string;
	readonly lastUpdatedDateTime?: string;
	readonly orderId?: string;
	readonly provisioningState?: string;
}
export interface PromotionCreateSkuNameRequestProperties {
	readonly name?: string;
}
export default {
	promotions: promotions,
};

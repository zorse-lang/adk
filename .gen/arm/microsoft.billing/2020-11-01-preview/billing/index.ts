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
	readonly etag?: number | undefined;
	readonly name: string;
	readonly properties?: PromotionCreateRequestPropertiesOrPromotionResponseProperties | undefined;
	readonly sku?: PromotionCreateSkuNameRequestProperties | undefined;
}
export interface PromotionCreateRequestPropertiesOrPromotionResponseProperties {
	readonly appliedScopes?: string[] | undefined;
	readonly displayName?: string | undefined;
	readonly effectiveDateTime?: string | undefined;
	readonly expiryDate?: string | undefined;
	readonly lastUpdatedDateTime?: string | undefined;
	readonly orderId?: string | undefined;
	readonly provisioningState?: string | undefined;
}
export interface PromotionCreateSkuNameRequestProperties {
	readonly name?: string | undefined;
}
export default {
	promotions: promotions,
};

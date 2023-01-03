import { RosResource, Entity as ADKEntity } from "@zorse/adk";

export class Order extends RosResource<OrderComponentInputs> implements OrderComponentOutputs {
	constructor(entity: ADKEntity, options: OrderComponentInputs) {
		super(entity, options.LogicalId, "ALIYUN::MarketPlace::Order", options);
	}
	public readonly OrderId: any;
}
export interface OrderComponentOutputs {
	readonly OrderId: any;
}
export interface OrderComponentInputs {
	readonly ProductCode: string;
	readonly SkuCode: string;
	readonly ChargeType?: (string | undefined) | undefined;
	readonly Duration?: (number | undefined) | undefined;
	readonly Preference?: ({ [key: string]: any } | undefined) | undefined;
	readonly PricingCycle?: (string | undefined) | undefined;
	readonly Quantity?: (number | undefined) | undefined;
	readonly LogicalId: string;
}
export default {
	Order: Order,
};

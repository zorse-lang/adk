import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class components_pricingPlans
	extends ArmResource<components_pricingPlansComponentInputs>
	implements components_pricingPlansComponentOutputs
{
	constructor(entity: ADKEntity, options: components_pricingPlansComponentInputs) {
		super(entity, options.name, "microsoft.insights/components/pricingPlans", "2017-10-01", options);
	}
	public readonly apiVersion: "2017-10-01";
	public readonly id: string;
	public readonly type: "microsoft.insights/components/pricingPlans";
}
export interface components_pricingPlansComponentOutputs {
	readonly apiVersion: "2017-10-01";
	readonly id: string;
	readonly type: "microsoft.insights/components/pricingPlans";
}
export interface components_pricingPlansComponentInputs {
	readonly name: string;
	readonly properties?: PricingPlanProperties;
}
export interface PricingPlanProperties {
	readonly cap?: number;
	readonly maxHistoryCap?: number;
	readonly planType?: string;
	readonly resetHour?: number;
	readonly stopSendNotificationWhenHitCap?: boolean;
	readonly stopSendNotificationWhenHitThreshold?: boolean;
	readonly warningThreshold?: number;
}
export default {
	"components/pricingPlans": components_pricingPlans,
};

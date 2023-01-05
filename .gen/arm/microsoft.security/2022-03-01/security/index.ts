import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class pricings extends ArmResource<pricingsComponentInputs> implements pricingsComponentOutputs {
	constructor(entity: ADKEntity, options: pricingsComponentInputs) {
		super(entity, options.name, "Microsoft.Security/pricings", "2022-03-01", options);
	}
	public readonly apiVersion: "2022-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.Security/pricings";
}
export interface pricingsComponentOutputs {
	readonly apiVersion: "2022-03-01";
	readonly id: string;
	readonly type: "Microsoft.Security/pricings";
}
export interface pricingsComponentInputs {
	readonly name: string;
	readonly properties?: PricingProperties;
}
export interface PricingProperties {
	readonly deprecated?: boolean;
	readonly freeTrialRemainingTime?: string;
	readonly pricingTier: "Free" | "Standard";
	readonly replacedBy?: string[];
	readonly subPlan?: string;
}
export default {
	pricings: pricings,
};

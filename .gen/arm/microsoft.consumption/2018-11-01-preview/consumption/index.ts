import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class credits extends ArmResource<creditsComponentInputs> implements creditsComponentOutputs {
	constructor(entity: ADKEntity, options: creditsComponentInputs) {
		super(entity, options.name, "Microsoft.Consumption/credits", "2018-11-01-preview", options);
	}
	public readonly apiVersion: "2018-11-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Consumption/credits";
}
export interface creditsComponentOutputs {
	readonly apiVersion: "2018-11-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Consumption/credits";
}
export interface creditsComponentInputs {
	readonly name: string;
	readonly properties?: CreditSummaryProperties;
	readonly tags?: ResourceTags;
}
export interface Amount {
	readonly currency?: string;
	readonly value?: number;
}
export interface CreditBalanceSummary {
	readonly currentBalance?: Amount;
	readonly estimatedBalance?: Amount;
}
export interface CreditSummaryProperties {
	readonly balanceSummary?: CreditBalanceSummary;
	readonly expiredCredit?: Amount;
	readonly pendingCreditAdjustments?: Amount;
	readonly pendingEligibleCharges?: Amount;
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export default {
	credits: credits,
};

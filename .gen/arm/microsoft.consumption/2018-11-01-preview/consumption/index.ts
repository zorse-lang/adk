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
	readonly properties?: CreditSummaryProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export interface Amount {
	readonly currency?: string | undefined;
	readonly value?: number | undefined;
}
export interface CreditBalanceSummary {
	readonly currentBalance?: Amount | undefined;
	readonly estimatedBalance?: Amount | undefined;
}
export interface CreditSummaryProperties {
	readonly balanceSummary?: CreditBalanceSummary | undefined;
	readonly expiredCredit?: Amount | undefined;
	readonly pendingCreditAdjustments?: Amount | undefined;
	readonly pendingEligibleCharges?: Amount | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	credits: credits,
};

import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class billingPeriods_Microsoft_Consumption
	extends ArmResource<billingPeriods_Microsoft_ConsumptionComponentInputs>
	implements billingPeriods_Microsoft_ConsumptionComponentOutputs
{
	constructor(entity: ADKEntity, options: billingPeriods_Microsoft_ConsumptionComponentInputs) {
		super(entity, options.name, "Microsoft.Billing/billingPeriods/Microsoft.Consumption", "2018-08-31", options);
	}
	public readonly apiVersion: "2018-08-31";
	public readonly id: string;
	public readonly type: "Microsoft.Billing/billingPeriods/Microsoft.Consumption";
}
export interface billingPeriods_Microsoft_ConsumptionComponentOutputs {
	readonly apiVersion: "2018-08-31";
	readonly id: string;
	readonly type: "Microsoft.Billing/billingPeriods/Microsoft.Consumption";
}
export interface billingPeriods_Microsoft_ConsumptionComponentInputs {
	readonly name: string;
	readonly properties?: ManagementGroupAggregatedCostProperties;
	readonly tags?: ResourceTags;
}
export interface ManagementGroupAggregatedCostProperties {
	readonly azureCharges?: number;
	readonly billingPeriodId?: string;
	readonly chargesBilledSeparately?: number;
	readonly children?: ManagementGroupAggregatedCostResult[];
	readonly currency?: string;
	readonly marketplaceCharges?: number;
	readonly usageEnd?: string;
	readonly usageStart?: string;
}
export interface ManagementGroupAggregatedCostResult {
	readonly id?: string;
	readonly name?: string;
	readonly properties?: ManagementGroupAggregatedCostProperties;
	readonly tags?: ResourceTags;
	readonly type?: string;
}
export interface ResourceTags {
	readonly [key: string]: string;
}
export default {
	"billingPeriods/Microsoft.Consumption": billingPeriods_Microsoft_Consumption,
};

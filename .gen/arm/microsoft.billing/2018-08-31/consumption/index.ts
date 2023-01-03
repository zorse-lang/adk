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
	readonly properties?: ManagementGroupAggregatedCostProperties | undefined;
	readonly tags?: ResourceTags | undefined;
}
export interface ManagementGroupAggregatedCostProperties {
	readonly azureCharges?: number | undefined;
	readonly billingPeriodId?: string | undefined;
	readonly chargesBilledSeparately?: number | undefined;
	readonly children?: ManagementGroupAggregatedCostResult[] | undefined;
	readonly currency?: string | undefined;
	readonly marketplaceCharges?: number | undefined;
	readonly usageEnd?: string | undefined;
	readonly usageStart?: string | undefined;
}
export interface ManagementGroupAggregatedCostResult {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly properties?: ManagementGroupAggregatedCostProperties | undefined;
	readonly tags?: ResourceTags | undefined;
	readonly type?: string | undefined;
}
export interface ResourceTags {
	readonly "[ key: string ]"?: string | undefined;
}
export default {
	"billingPeriods/Microsoft.Consumption": billingPeriods_Microsoft_Consumption,
};

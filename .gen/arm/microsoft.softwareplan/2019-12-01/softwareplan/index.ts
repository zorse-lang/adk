import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class hybridUseBenefits
	extends ArmResource<hybridUseBenefitsComponentInputs>
	implements hybridUseBenefitsComponentOutputs
{
	constructor(entity: ADKEntity, options: hybridUseBenefitsComponentInputs) {
		super(entity, options.name, "Microsoft.SoftwarePlan/hybridUseBenefits", "2019-12-01", options);
	}
	public readonly apiVersion: "2019-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.SoftwarePlan/hybridUseBenefits";
}
export interface hybridUseBenefitsComponentOutputs {
	readonly apiVersion: "2019-12-01";
	readonly id: string;
	readonly type: "Microsoft.SoftwarePlan/hybridUseBenefits";
}
export interface hybridUseBenefitsComponentInputs {
	readonly etag?: number;
	readonly name: string;
	readonly properties?: HybridUseBenefitProperties;
	readonly sku: Sku;
}
export interface HybridUseBenefitProperties {
	readonly createdDate?: string;
	readonly lastUpdatedDate?: string;
	readonly provisioningState?: "Cancelled" | "Failed" | "Succeeded";
}
export interface Sku {
	readonly name?: string;
}
export default {
	hybridUseBenefits: hybridUseBenefits,
};

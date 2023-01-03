import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class hybridUseBenefits
	extends ArmResource<hybridUseBenefitsComponentInputs>
	implements hybridUseBenefitsComponentOutputs
{
	constructor(entity: ADKEntity, options: hybridUseBenefitsComponentInputs) {
		super(entity, options.name, "Microsoft.SoftwarePlan/hybridUseBenefits", "2019-06-01-preview", options);
	}
	public readonly apiVersion: "2019-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.SoftwarePlan/hybridUseBenefits";
}
export interface hybridUseBenefitsComponentOutputs {
	readonly apiVersion: "2019-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.SoftwarePlan/hybridUseBenefits";
}
export interface hybridUseBenefitsComponentInputs {
	readonly etag?: number | undefined;
	readonly name: string;
	readonly properties?: HybridUseBenefitProperties | undefined;
	readonly sku: Sku;
}
export interface HybridUseBenefitProperties {
	readonly createdDate?: string | undefined;
	readonly lastUpdatedDate?: string | undefined;
	readonly provisioningState?: ("Cancelled" | "Failed" | "Succeeded") | undefined;
}
export interface Sku {
	readonly name?: string | undefined;
}
export default {
	hybridUseBenefits: hybridUseBenefits,
};

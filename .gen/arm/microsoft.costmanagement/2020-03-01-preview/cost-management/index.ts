import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class costAllocationRules
	extends ArmResource<costAllocationRulesComponentInputs>
	implements costAllocationRulesComponentOutputs
{
	constructor(entity: ADKEntity, options: costAllocationRulesComponentInputs) {
		super(entity, options.name, "Microsoft.CostManagement/costAllocationRules", "2020-03-01-preview", options);
	}
	public readonly apiVersion: "2020-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.CostManagement/costAllocationRules";
}
export interface costAllocationRulesComponentOutputs {
	readonly apiVersion: "2020-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.CostManagement/costAllocationRules";
}
export interface costAllocationRulesComponentInputs {
	readonly name: string;
	readonly properties?: CostAllocationRuleProperties;
}
export interface CostAllocationProportion {
	readonly name: string;
	readonly percentage: number;
}
export interface CostAllocationRuleDetails {
	readonly sourceResources?: SourceCostAllocationResource[];
	readonly targetResources?: TargetCostAllocationResource[];
}
export interface CostAllocationRuleProperties {
	readonly createdDate?: string;
	readonly description?: string;
	readonly details: CostAllocationRuleDetails;
	readonly status: "Active" | "NotActive" | "Processing";
	readonly updatedDate?: string;
}
export interface SourceCostAllocationResource {
	readonly name: string;
	readonly resourceType: "Dimension" | "Tag";
	readonly values: string[];
}
export interface TargetCostAllocationResource {
	readonly name: string;
	readonly policyType: "FixedProportion";
	readonly resourceType: "Dimension" | "Tag";
	readonly values: CostAllocationProportion[];
}
export default {
	costAllocationRules: costAllocationRules,
};

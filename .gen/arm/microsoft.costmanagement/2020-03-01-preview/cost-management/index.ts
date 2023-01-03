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
	readonly properties?: CostAllocationRuleProperties | undefined;
}
export interface CostAllocationProportion {
	readonly name: string;
	readonly percentage: number;
}
export interface CostAllocationRuleDetails {
	readonly sourceResources?: SourceCostAllocationResource[] | undefined;
	readonly targetResources?: TargetCostAllocationResource[] | undefined;
}
export interface CostAllocationRuleProperties {
	readonly createdDate?: string | undefined;
	readonly description?: string | undefined;
	readonly details: CostAllocationRuleDetails;
	readonly status: "Active" | "NotActive" | "Processing";
	readonly updatedDate?: string | undefined;
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

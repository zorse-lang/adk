import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class policyAssignments
	extends ArmResource<policyAssignmentsComponentInputs>
	implements policyAssignmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: policyAssignmentsComponentInputs) {
		super(entity, options.name, "Microsoft.Authorization/policyAssignments", "2017-06-01-preview", options);
	}
	public readonly apiVersion: "2017-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Authorization/policyAssignments";
}
export interface policyAssignmentsComponentOutputs {
	readonly apiVersion: "2017-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Authorization/policyAssignments";
}
export interface policyAssignmentsComponentInputs {
	readonly name: string;
	readonly properties?: PolicyAssignmentProperties;
	readonly sku?: PolicySku;
}
export class policySetDefinitions
	extends ArmResource<policySetDefinitionsComponentInputs>
	implements policySetDefinitionsComponentOutputs
{
	constructor(entity: ADKEntity, options: policySetDefinitionsComponentInputs) {
		super(entity, options.name, "Microsoft.Authorization/policySetDefinitions", "2017-06-01-preview", options);
	}
	public readonly apiVersion: "2017-06-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Authorization/policySetDefinitions";
}
export interface policySetDefinitionsComponentOutputs {
	readonly apiVersion: "2017-06-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Authorization/policySetDefinitions";
}
export interface policySetDefinitionsComponentInputs {
	readonly name: string;
	readonly properties?: PolicySetDefinitionProperties;
}
export interface PolicyAssignmentProperties {
	readonly description?: string;
	readonly displayName?: string;
	readonly metadata?: any;
	readonly notScopes?: string[];
	readonly parameters?: any;
	readonly policyDefinitionId?: string;
	readonly scope?: string;
}
export interface PolicyDefinitionReference {
	readonly parameters?: any;
	readonly policyDefinitionId?: string;
}
export interface PolicySetDefinitionProperties {
	readonly description?: string;
	readonly displayName?: string;
	readonly metadata?: any;
	readonly parameters?: any;
	readonly policyDefinitions: PolicyDefinitionReference[];
	readonly policyType?: "BuiltIn" | "Custom" | "NotSpecified";
}
export interface PolicySku {
	readonly name: string;
	readonly tier?: string;
}
export default {
	policyAssignments: policyAssignments,
	policySetDefinitions: policySetDefinitions,
};

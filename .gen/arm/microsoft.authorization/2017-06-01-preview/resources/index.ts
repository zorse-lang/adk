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
	readonly properties?: PolicyAssignmentProperties | undefined;
	readonly sku?: PolicySku | undefined;
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
	readonly properties?: PolicySetDefinitionProperties | undefined;
}
export interface PolicyAssignmentProperties {
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly metadata?: any | undefined;
	readonly notScopes?: string[] | undefined;
	readonly parameters?: any | undefined;
	readonly policyDefinitionId?: string | undefined;
	readonly scope?: string | undefined;
}
export interface PolicyDefinitionReference {
	readonly parameters?: any | undefined;
	readonly policyDefinitionId?: string | undefined;
}
export interface PolicySetDefinitionProperties {
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly metadata?: any | undefined;
	readonly parameters?: any | undefined;
	readonly policyDefinitions: PolicyDefinitionReference[];
	readonly policyType?: ("BuiltIn" | "Custom" | "NotSpecified") | undefined;
}
export interface PolicySku {
	readonly name: string;
	readonly tier?: string | undefined;
}
export default {
	policyAssignments: policyAssignments,
	policySetDefinitions: policySetDefinitions,
};

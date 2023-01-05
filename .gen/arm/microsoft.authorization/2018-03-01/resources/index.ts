import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class policyAssignments
	extends ArmResource<policyAssignmentsComponentInputs>
	implements policyAssignmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: policyAssignmentsComponentInputs) {
		super(entity, options.name, "Microsoft.Authorization/policyAssignments", "2018-03-01", options);
	}
	public readonly apiVersion: "2018-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.Authorization/policyAssignments";
}
export interface policyAssignmentsComponentOutputs {
	readonly apiVersion: "2018-03-01";
	readonly id: string;
	readonly type: "Microsoft.Authorization/policyAssignments";
}
export interface policyAssignmentsComponentInputs {
	readonly name: string;
	readonly properties?: PolicyAssignmentProperties;
	readonly sku?: PolicySku;
}
export class policyDefinitions
	extends ArmResource<policyDefinitionsComponentInputs>
	implements policyDefinitionsComponentOutputs
{
	constructor(entity: ADKEntity, options: policyDefinitionsComponentInputs) {
		super(entity, options.name, "Microsoft.Authorization/policyDefinitions", "2018-03-01", options);
	}
	public readonly apiVersion: "2018-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.Authorization/policyDefinitions";
}
export interface policyDefinitionsComponentOutputs {
	readonly apiVersion: "2018-03-01";
	readonly id: string;
	readonly type: "Microsoft.Authorization/policyDefinitions";
}
export interface policyDefinitionsComponentInputs {
	readonly name: string;
	readonly properties?: PolicyDefinitionProperties;
}
export class policySetDefinitions
	extends ArmResource<policySetDefinitionsComponentInputs>
	implements policySetDefinitionsComponentOutputs
{
	constructor(entity: ADKEntity, options: policySetDefinitionsComponentInputs) {
		super(entity, options.name, "Microsoft.Authorization/policySetDefinitions", "2018-03-01", options);
	}
	public readonly apiVersion: "2018-03-01";
	public readonly id: string;
	public readonly type: "Microsoft.Authorization/policySetDefinitions";
}
export interface policySetDefinitionsComponentOutputs {
	readonly apiVersion: "2018-03-01";
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
export interface PolicyDefinitionProperties {
	readonly description?: string;
	readonly displayName?: string;
	readonly metadata?: any;
	readonly mode?: "All" | "Indexed" | "NotSpecified";
	readonly parameters?: any;
	readonly policyRule?: any;
	readonly policyType?: "BuiltIn" | "Custom" | "NotSpecified";
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
	policyDefinitions: policyDefinitions,
	policySetDefinitions: policySetDefinitions,
};

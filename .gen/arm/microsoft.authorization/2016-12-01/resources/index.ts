import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class policyAssignments
	extends ArmResource<policyAssignmentsComponentInputs>
	implements policyAssignmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: policyAssignmentsComponentInputs) {
		super(entity, options.name, "Microsoft.Authorization/policyAssignments", "2016-12-01", options);
	}
	public readonly apiVersion: "2016-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Authorization/policyAssignments";
}
export interface policyAssignmentsComponentOutputs {
	readonly apiVersion: "2016-12-01";
	readonly id: string;
	readonly type: "Microsoft.Authorization/policyAssignments";
}
export interface policyAssignmentsComponentInputs {
	readonly name: string;
	readonly properties?: PolicyAssignmentProperties;
}
export class policyDefinitions
	extends ArmResource<policyDefinitionsComponentInputs>
	implements policyDefinitionsComponentOutputs
{
	constructor(entity: ADKEntity, options: policyDefinitionsComponentInputs) {
		super(entity, options.name, "Microsoft.Authorization/policyDefinitions", "2016-12-01", options);
	}
	public readonly apiVersion: "2016-12-01";
	public readonly id: string;
	public readonly type: "Microsoft.Authorization/policyDefinitions";
}
export interface policyDefinitionsComponentOutputs {
	readonly apiVersion: "2016-12-01";
	readonly id: string;
	readonly type: "Microsoft.Authorization/policyDefinitions";
}
export interface policyDefinitionsComponentInputs {
	readonly name: string;
	readonly properties?: PolicyDefinitionProperties;
}
export interface PolicyAssignmentProperties {
	readonly description?: string;
	readonly displayName?: string;
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
export default {
	policyAssignments: policyAssignments,
	policyDefinitions: policyDefinitions,
};

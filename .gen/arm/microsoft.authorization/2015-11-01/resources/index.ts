import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class policyAssignments
	extends ArmResource<policyAssignmentsComponentInputs>
	implements policyAssignmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: policyAssignmentsComponentInputs) {
		super(entity, options.name, "Microsoft.Authorization/policyAssignments", "2015-11-01", options);
	}
	public readonly apiVersion: "2015-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Authorization/policyAssignments";
}
export interface policyAssignmentsComponentOutputs {
	readonly apiVersion: "2015-11-01";
	readonly id: string;
	readonly type: "Microsoft.Authorization/policyAssignments";
}
export interface policyAssignmentsComponentInputs {
	readonly name: string;
	readonly properties?: PolicyAssignmentProperties | undefined;
}
export class policydefinitions
	extends ArmResource<policydefinitionsComponentInputs>
	implements policydefinitionsComponentOutputs
{
	constructor(entity: ADKEntity, options: policydefinitionsComponentInputs) {
		super(entity, options.name, "Microsoft.Authorization/policydefinitions", "2015-11-01", options);
	}
	public readonly apiVersion: "2015-11-01";
	public readonly id: string;
	public readonly type: "Microsoft.Authorization/policydefinitions";
}
export interface policydefinitionsComponentOutputs {
	readonly apiVersion: "2015-11-01";
	readonly id: string;
	readonly type: "Microsoft.Authorization/policydefinitions";
}
export interface policydefinitionsComponentInputs {
	readonly name: string;
	readonly properties?: PolicyDefinitionProperties | undefined;
}
export interface PolicyAssignmentProperties {
	readonly displayName?: string | undefined;
	readonly policyDefinitionId?: string | undefined;
	readonly scope?: string | undefined;
}
export interface PolicyDefinitionProperties {
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly policyRule?: any | undefined;
}
export default {
	policyAssignments: policyAssignments,
	policydefinitions: policydefinitions,
};

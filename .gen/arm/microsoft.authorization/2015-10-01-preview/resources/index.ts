import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class policyassignments
	extends ArmResource<policyassignmentsComponentInputs>
	implements policyassignmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: policyassignmentsComponentInputs) {
		super(entity, options.name, "Microsoft.Authorization/policyassignments", "2015-10-01-preview", options);
	}
	public readonly apiVersion: "2015-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Authorization/policyassignments";
}
export interface policyassignmentsComponentOutputs {
	readonly apiVersion: "2015-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Authorization/policyassignments";
}
export interface policyassignmentsComponentInputs {
	readonly name: string;
	readonly properties?: PolicyAssignmentProperties;
}
export class policydefinitions
	extends ArmResource<policydefinitionsComponentInputs>
	implements policydefinitionsComponentOutputs
{
	constructor(entity: ADKEntity, options: policydefinitionsComponentInputs) {
		super(entity, options.name, "Microsoft.Authorization/policydefinitions", "2015-10-01-preview", options);
	}
	public readonly apiVersion: "2015-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Authorization/policydefinitions";
}
export interface policydefinitionsComponentOutputs {
	readonly apiVersion: "2015-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Authorization/policydefinitions";
}
export interface policydefinitionsComponentInputs {
	readonly name: string;
	readonly properties?: PolicyDefinitionProperties;
}
export interface PolicyAssignmentProperties {
	readonly displayName?: string;
	readonly policyDefinitionId?: string;
	readonly scope?: string;
}
export interface PolicyDefinitionProperties {
	readonly description?: string;
	readonly displayName?: string;
	readonly policyRule?: any;
	readonly policyType?: "BuiltIn" | "Custom" | "NotSpecified";
}
export default {
	policyassignments: policyassignments,
	policydefinitions: policydefinitions,
};

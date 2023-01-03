import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class policyassignments
	extends ArmResource<policyassignmentsComponentInputs>
	implements policyassignmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: policyassignmentsComponentInputs) {
		super(entity, options.name, "Microsoft.Authorization/policyassignments", "2016-04-01", options);
	}
	public readonly apiVersion: "2016-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Authorization/policyassignments";
}
export interface policyassignmentsComponentOutputs {
	readonly apiVersion: "2016-04-01";
	readonly id: string;
	readonly type: "Microsoft.Authorization/policyassignments";
}
export interface policyassignmentsComponentInputs {
	readonly name: string;
	readonly properties?: PolicyAssignmentProperties | undefined;
}
export class policydefinitions
	extends ArmResource<policydefinitionsComponentInputs>
	implements policydefinitionsComponentOutputs
{
	constructor(entity: ADKEntity, options: policydefinitionsComponentInputs) {
		super(entity, options.name, "Microsoft.Authorization/policydefinitions", "2016-04-01", options);
	}
	public readonly apiVersion: "2016-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Authorization/policydefinitions";
}
export interface policydefinitionsComponentOutputs {
	readonly apiVersion: "2016-04-01";
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
	readonly policyType?: ("BuiltIn" | "Custom" | "NotSpecified") | undefined;
}
export default {
	policyassignments: policyassignments,
	policydefinitions: policydefinitions,
};

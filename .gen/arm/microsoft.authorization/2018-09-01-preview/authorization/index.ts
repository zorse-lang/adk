import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class roleAssignments
	extends ArmResource<roleAssignmentsComponentInputs>
	implements roleAssignmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: roleAssignmentsComponentInputs) {
		super(entity, options.name, "Microsoft.Authorization/roleAssignments", "2018-09-01-preview", options);
	}
	public readonly apiVersion: "2018-09-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Authorization/roleAssignments";
}
export interface roleAssignmentsComponentOutputs {
	readonly apiVersion: "2018-09-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Authorization/roleAssignments";
}
export interface roleAssignmentsComponentInputs {
	readonly name: string;
	readonly properties: RoleAssignmentPropertiesOrRoleAssignmentPropertiesWithScope;
}
export interface RoleAssignmentPropertiesOrRoleAssignmentPropertiesWithScope {
	readonly canDelegate?: boolean | undefined;
	readonly principalId: string;
	readonly principalType?: ("ForeignGroup" | "Group" | "ServicePrincipal" | "User") | undefined;
	readonly roleDefinitionId: string;
	readonly scope?: string | undefined;
}
export default {
	roleAssignments: roleAssignments,
};

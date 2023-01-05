import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class roleAssignments
	extends ArmResource<roleAssignmentsComponentInputs>
	implements roleAssignmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: roleAssignmentsComponentInputs) {
		super(entity, options.name, "Microsoft.Authorization/roleAssignments", "2017-10-01-preview", options);
	}
	public readonly apiVersion: "2017-10-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Authorization/roleAssignments";
}
export interface roleAssignmentsComponentOutputs {
	readonly apiVersion: "2017-10-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Authorization/roleAssignments";
}
export interface roleAssignmentsComponentInputs {
	readonly name: string;
	readonly properties?: RoleAssignmentPropertiesOrRoleAssignmentPropertiesWithScope;
}
export interface RoleAssignmentPropertiesOrRoleAssignmentPropertiesWithScope {
	readonly canDelegate?: boolean;
	readonly principalId?: string;
	readonly roleDefinitionId?: string;
	readonly scope?: string;
}
export default {
	roleAssignments: roleAssignments,
};

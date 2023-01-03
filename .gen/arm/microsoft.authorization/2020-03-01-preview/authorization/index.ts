import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class roleAssignments
	extends ArmResource<roleAssignmentsComponentInputs>
	implements roleAssignmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: roleAssignmentsComponentInputs) {
		super(entity, options.name, "Microsoft.Authorization/roleAssignments", "2020-03-01-preview", options);
	}
	public readonly apiVersion: "2020-03-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Authorization/roleAssignments";
}
export interface roleAssignmentsComponentOutputs {
	readonly apiVersion: "2020-03-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Authorization/roleAssignments";
}
export interface roleAssignmentsComponentInputs {
	readonly name: string;
	readonly properties: RoleAssignmentProperties;
}
export interface RoleAssignmentProperties {
	readonly canDelegate?: boolean | undefined;
	readonly condition?: string | undefined;
	readonly conditionVersion?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdOn?: string | undefined;
	readonly delegatedManagedIdentityResourceId?: string | undefined;
	readonly principalId: string;
	readonly principalType?: ("ForeignGroup" | "Group" | "ServicePrincipal" | "User") | undefined;
	readonly roleDefinitionId: string;
	readonly scope?: string | undefined;
	readonly updatedBy?: string | undefined;
	readonly updatedOn?: string | undefined;
}
export default {
	roleAssignments: roleAssignments,
};

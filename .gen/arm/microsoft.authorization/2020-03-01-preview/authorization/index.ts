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
	readonly canDelegate?: boolean;
	readonly condition?: string;
	readonly conditionVersion?: string;
	readonly createdBy?: string;
	readonly createdOn?: string;
	readonly delegatedManagedIdentityResourceId?: string;
	readonly principalId: string;
	readonly principalType?: "ForeignGroup" | "Group" | "ServicePrincipal" | "User";
	readonly roleDefinitionId: string;
	readonly scope?: string;
	readonly updatedBy?: string;
	readonly updatedOn?: string;
}
export default {
	roleAssignments: roleAssignments,
};

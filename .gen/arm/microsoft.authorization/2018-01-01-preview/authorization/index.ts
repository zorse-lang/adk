import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class roleAssignments
	extends ArmResource<roleAssignmentsComponentInputs>
	implements roleAssignmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: roleAssignmentsComponentInputs) {
		super(entity, options.name, "Microsoft.Authorization/roleAssignments", "2018-01-01-preview", options);
	}
	public readonly apiVersion: "2018-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Authorization/roleAssignments";
}
export interface roleAssignmentsComponentOutputs {
	readonly apiVersion: "2018-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Authorization/roleAssignments";
}
export interface roleAssignmentsComponentInputs {
	readonly name: string;
	readonly properties: RoleAssignmentPropertiesOrRoleAssignmentPropertiesWithScope;
}
export class roleDefinitions
	extends ArmResource<roleDefinitionsComponentInputs>
	implements roleDefinitionsComponentOutputs
{
	constructor(entity: ADKEntity, options: roleDefinitionsComponentInputs) {
		super(entity, options.name, "Microsoft.Authorization/roleDefinitions", "2018-01-01-preview", options);
	}
	public readonly apiVersion: "2018-01-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Authorization/roleDefinitions";
}
export interface roleDefinitionsComponentOutputs {
	readonly apiVersion: "2018-01-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Authorization/roleDefinitions";
}
export interface roleDefinitionsComponentInputs {
	readonly name: string;
	readonly properties?: RoleDefinitionProperties | undefined;
}
export interface Permission {
	readonly actions?: string[] | undefined;
	readonly dataActions?: string[] | undefined;
	readonly notActions?: string[] | undefined;
	readonly notDataActions?: string[] | undefined;
}
export interface RoleAssignmentPropertiesOrRoleAssignmentPropertiesWithScope {
	readonly canDelegate?: boolean | undefined;
	readonly principalId: string;
	readonly roleDefinitionId: string;
	readonly scope?: string | undefined;
}
export interface RoleDefinitionProperties {
	readonly assignableScopes?: string[] | undefined;
	readonly description?: string | undefined;
	readonly permissions?: Permission[] | undefined;
	readonly roleName?: string | undefined;
	readonly type?: string | undefined;
}
export default {
	roleAssignments: roleAssignments,
	roleDefinitions: roleDefinitions,
};

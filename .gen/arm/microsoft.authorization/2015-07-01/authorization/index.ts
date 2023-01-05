import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class roleAssignments
	extends ArmResource<roleAssignmentsComponentInputs>
	implements roleAssignmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: roleAssignmentsComponentInputs) {
		super(entity, options.name, "Microsoft.Authorization/roleAssignments", "2015-07-01", options);
	}
	public readonly apiVersion: "2015-07-01";
	public readonly id: string;
	public readonly type: "Microsoft.Authorization/roleAssignments";
}
export interface roleAssignmentsComponentOutputs {
	readonly apiVersion: "2015-07-01";
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
		super(entity, options.name, "Microsoft.Authorization/roleDefinitions", "2015-07-01", options);
	}
	public readonly apiVersion: "2015-07-01";
	public readonly id: string;
	public readonly type: "Microsoft.Authorization/roleDefinitions";
}
export interface roleDefinitionsComponentOutputs {
	readonly apiVersion: "2015-07-01";
	readonly id: string;
	readonly type: "Microsoft.Authorization/roleDefinitions";
}
export interface roleDefinitionsComponentInputs {
	readonly name: string;
	readonly properties?: RoleDefinitionProperties;
}
export interface Permission {
	readonly actions?: string[];
	readonly notActions?: string[];
}
export interface RoleAssignmentPropertiesOrRoleAssignmentPropertiesWithScope {
	readonly principalId: string;
	readonly roleDefinitionId: string;
	readonly scope?: string;
}
export interface RoleDefinitionProperties {
	readonly assignableScopes?: string[];
	readonly description?: string;
	readonly permissions?: Permission[];
	readonly roleName?: string;
	readonly type?: string;
}
export default {
	roleAssignments: roleAssignments,
	roleDefinitions: roleDefinitions,
};

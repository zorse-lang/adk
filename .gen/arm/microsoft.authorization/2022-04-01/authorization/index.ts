import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class roleAssignments
	extends ArmResource<roleAssignmentsComponentInputs>
	implements roleAssignmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: roleAssignmentsComponentInputs) {
		super(entity, options.name, "Microsoft.Authorization/roleAssignments", "2022-04-01", options);
	}
	public readonly apiVersion: "2022-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Authorization/roleAssignments";
}
export interface roleAssignmentsComponentOutputs {
	readonly apiVersion: "2022-04-01";
	readonly id: string;
	readonly type: "Microsoft.Authorization/roleAssignments";
}
export interface roleAssignmentsComponentInputs {
	readonly name: string;
	readonly properties: RoleAssignmentProperties;
}
export class roleDefinitions
	extends ArmResource<roleDefinitionsComponentInputs>
	implements roleDefinitionsComponentOutputs
{
	constructor(entity: ADKEntity, options: roleDefinitionsComponentInputs) {
		super(entity, options.name, "Microsoft.Authorization/roleDefinitions", "2022-04-01", options);
	}
	public readonly apiVersion: "2022-04-01";
	public readonly id: string;
	public readonly type: "Microsoft.Authorization/roleDefinitions";
}
export interface roleDefinitionsComponentOutputs {
	readonly apiVersion: "2022-04-01";
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
export interface RoleAssignmentProperties {
	readonly condition?: string | undefined;
	readonly conditionVersion?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdOn?: string | undefined;
	readonly delegatedManagedIdentityResourceId?: string | undefined;
	readonly description?: string | undefined;
	readonly principalId: string;
	readonly principalType?: ("Device" | "ForeignGroup" | "Group" | "ServicePrincipal" | "User") | undefined;
	readonly roleDefinitionId: string;
	readonly scope?: string | undefined;
	readonly updatedBy?: string | undefined;
	readonly updatedOn?: string | undefined;
}
export interface RoleDefinitionProperties {
	readonly assignableScopes?: string[] | undefined;
	readonly createdBy?: string | undefined;
	readonly createdOn?: string | undefined;
	readonly description?: string | undefined;
	readonly permissions?: Permission[] | undefined;
	readonly roleName?: string | undefined;
	readonly type?: string | undefined;
	readonly updatedBy?: string | undefined;
	readonly updatedOn?: string | undefined;
}
export default {
	roleAssignments: roleAssignments,
	roleDefinitions: roleDefinitions,
};

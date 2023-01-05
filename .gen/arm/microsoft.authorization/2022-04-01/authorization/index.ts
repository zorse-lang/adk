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
	readonly properties?: RoleDefinitionProperties;
}
export interface Permission {
	readonly actions?: string[];
	readonly dataActions?: string[];
	readonly notActions?: string[];
	readonly notDataActions?: string[];
}
export interface RoleAssignmentProperties {
	readonly condition?: string;
	readonly conditionVersion?: string;
	readonly createdBy?: string;
	readonly createdOn?: string;
	readonly delegatedManagedIdentityResourceId?: string;
	readonly description?: string;
	readonly principalId: string;
	readonly principalType?: "Device" | "ForeignGroup" | "Group" | "ServicePrincipal" | "User";
	readonly roleDefinitionId: string;
	readonly scope?: string;
	readonly updatedBy?: string;
	readonly updatedOn?: string;
}
export interface RoleDefinitionProperties {
	readonly assignableScopes?: string[];
	readonly createdBy?: string;
	readonly createdOn?: string;
	readonly description?: string;
	readonly permissions?: Permission[];
	readonly roleName?: string;
	readonly type?: string;
	readonly updatedBy?: string;
	readonly updatedOn?: string;
}
export default {
	roleAssignments: roleAssignments,
	roleDefinitions: roleDefinitions,
};

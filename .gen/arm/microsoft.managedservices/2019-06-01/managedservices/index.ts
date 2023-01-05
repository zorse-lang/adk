import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class registrationAssignments
	extends ArmResource<registrationAssignmentsComponentInputs>
	implements registrationAssignmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: registrationAssignmentsComponentInputs) {
		super(entity, options.name, "Microsoft.ManagedServices/registrationAssignments", "2019-06-01", options);
	}
	public readonly apiVersion: "2019-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.ManagedServices/registrationAssignments";
}
export interface registrationAssignmentsComponentOutputs {
	readonly apiVersion: "2019-06-01";
	readonly id: string;
	readonly type: "Microsoft.ManagedServices/registrationAssignments";
}
export interface registrationAssignmentsComponentInputs {
	readonly name: string;
	readonly properties?: RegistrationAssignmentProperties;
}
export class registrationDefinitions
	extends ArmResource<registrationDefinitionsComponentInputs>
	implements registrationDefinitionsComponentOutputs
{
	constructor(entity: ADKEntity, options: registrationDefinitionsComponentInputs) {
		super(entity, options.name, "Microsoft.ManagedServices/registrationDefinitions", "2019-06-01", options);
	}
	public readonly apiVersion: "2019-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.ManagedServices/registrationDefinitions";
}
export interface registrationDefinitionsComponentOutputs {
	readonly apiVersion: "2019-06-01";
	readonly id: string;
	readonly type: "Microsoft.ManagedServices/registrationDefinitions";
}
export interface registrationDefinitionsComponentInputs {
	readonly name: string;
	readonly plan?: Plan;
	readonly properties?: RegistrationDefinitionProperties;
}
export interface Authorization {
	readonly delegatedRoleDefinitionIds?: string[];
	readonly principalId: string;
	readonly principalIdDisplayName?: string;
	readonly roleDefinitionId: string;
}
export interface Plan {
	readonly name: string;
	readonly product: string;
	readonly publisher: string;
	readonly version: string;
}
export interface RegistrationAssignmentProperties {
	readonly provisioningState?:
		| "Accepted"
		| "Canceled"
		| "Created"
		| "Creating"
		| "Deleted"
		| "Deleting"
		| "Failed"
		| "NotSpecified"
		| "Ready"
		| "Running"
		| "Succeeded"
		| "Updating";
	readonly registrationDefinition?: RegistrationAssignmentPropertiesRegistrationDefinition;
	readonly registrationDefinitionId: string;
}
export interface RegistrationAssignmentPropertiesRegistrationDefinition {
	readonly id?: string;
	readonly name?: string;
	readonly plan?: Plan;
	readonly properties?: RegistrationAssignmentPropertiesRegistrationDefinitionProperties;
	readonly type?: string;
}
export interface RegistrationAssignmentPropertiesRegistrationDefinitionProperties {
	readonly authorizations?: Authorization[];
	readonly description?: string;
	readonly managedByTenantId?: string;
	readonly managedByTenantName?: string;
	readonly manageeTenantId?: string;
	readonly manageeTenantName?: string;
	readonly provisioningState?:
		| "Accepted"
		| "Canceled"
		| "Created"
		| "Creating"
		| "Deleted"
		| "Deleting"
		| "Failed"
		| "NotSpecified"
		| "Ready"
		| "Running"
		| "Succeeded"
		| "Updating";
	readonly registrationDefinitionName?: string;
}
export interface RegistrationDefinitionProperties {
	readonly authorizations: Authorization[];
	readonly description?: string;
	readonly managedByTenantId: string;
	readonly managedByTenantName?: string;
	readonly provisioningState?:
		| "Accepted"
		| "Canceled"
		| "Created"
		| "Creating"
		| "Deleted"
		| "Deleting"
		| "Failed"
		| "NotSpecified"
		| "Ready"
		| "Running"
		| "Succeeded"
		| "Updating";
	readonly registrationDefinitionName?: string;
}
export default {
	registrationAssignments: registrationAssignments,
	registrationDefinitions: registrationDefinitions,
};

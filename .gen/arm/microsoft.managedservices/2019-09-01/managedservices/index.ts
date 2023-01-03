import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class marketplaceRegistrationDefinitions
	extends ArmResource<marketplaceRegistrationDefinitionsComponentInputs>
	implements marketplaceRegistrationDefinitionsComponentOutputs
{
	constructor(entity: ADKEntity, options: marketplaceRegistrationDefinitionsComponentInputs) {
		super(entity, options.name, "Microsoft.ManagedServices/marketplaceRegistrationDefinitions", "2019-09-01", options);
	}
	public readonly apiVersion: "2019-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.ManagedServices/marketplaceRegistrationDefinitions";
}
export interface marketplaceRegistrationDefinitionsComponentOutputs {
	readonly apiVersion: "2019-09-01";
	readonly id: string;
	readonly type: "Microsoft.ManagedServices/marketplaceRegistrationDefinitions";
}
export interface marketplaceRegistrationDefinitionsComponentInputs {
	readonly name: string;
	readonly plan?: Plan | undefined;
	readonly properties?: MarketplaceRegistrationDefinitionProperties | undefined;
}
export class registrationAssignments
	extends ArmResource<registrationAssignmentsComponentInputs>
	implements registrationAssignmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: registrationAssignmentsComponentInputs) {
		super(entity, options.name, "Microsoft.ManagedServices/registrationAssignments", "2019-09-01", options);
	}
	public readonly apiVersion: "2019-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.ManagedServices/registrationAssignments";
}
export interface registrationAssignmentsComponentOutputs {
	readonly apiVersion: "2019-09-01";
	readonly id: string;
	readonly type: "Microsoft.ManagedServices/registrationAssignments";
}
export interface registrationAssignmentsComponentInputs {
	readonly name: string;
	readonly properties?: RegistrationAssignmentProperties | undefined;
}
export class registrationDefinitions
	extends ArmResource<registrationDefinitionsComponentInputs>
	implements registrationDefinitionsComponentOutputs
{
	constructor(entity: ADKEntity, options: registrationDefinitionsComponentInputs) {
		super(entity, options.name, "Microsoft.ManagedServices/registrationDefinitions", "2019-09-01", options);
	}
	public readonly apiVersion: "2019-09-01";
	public readonly id: string;
	public readonly type: "Microsoft.ManagedServices/registrationDefinitions";
}
export interface registrationDefinitionsComponentOutputs {
	readonly apiVersion: "2019-09-01";
	readonly id: string;
	readonly type: "Microsoft.ManagedServices/registrationDefinitions";
}
export interface registrationDefinitionsComponentInputs {
	readonly name: string;
	readonly plan?: Plan | undefined;
	readonly properties?: RegistrationDefinitionProperties | undefined;
}
export interface Authorization {
	readonly delegatedRoleDefinitionIds?: string[] | undefined;
	readonly principalId: string;
	readonly principalIdDisplayName?: string | undefined;
	readonly roleDefinitionId: string;
}
export interface MarketplaceRegistrationDefinitionProperties {
	readonly authorizations: Authorization[];
	readonly managedByTenantId: string;
	readonly offerDisplayName?: string | undefined;
	readonly planDisplayName?: string | undefined;
	readonly publisherDisplayName?: string | undefined;
}
export interface Plan {
	readonly name: string;
	readonly product: string;
	readonly publisher: string;
	readonly version: string;
}
export interface RegistrationAssignmentProperties {
	readonly provisioningState?:
		| (
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
				| "Updating"
		  )
		| undefined;
	readonly registrationDefinition?: RegistrationAssignmentPropertiesRegistrationDefinition | undefined;
	readonly registrationDefinitionId: string;
}
export interface RegistrationAssignmentPropertiesRegistrationDefinition {
	readonly id?: string | undefined;
	readonly name?: string | undefined;
	readonly plan?: Plan | undefined;
	readonly properties?: RegistrationAssignmentPropertiesRegistrationDefinitionProperties | undefined;
	readonly type?: string | undefined;
}
export interface RegistrationAssignmentPropertiesRegistrationDefinitionProperties {
	readonly authorizations?: Authorization[] | undefined;
	readonly description?: string | undefined;
	readonly managedByTenantId?: string | undefined;
	readonly managedByTenantName?: string | undefined;
	readonly manageeTenantId?: string | undefined;
	readonly manageeTenantName?: string | undefined;
	readonly provisioningState?:
		| (
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
				| "Updating"
		  )
		| undefined;
	readonly registrationDefinitionName?: string | undefined;
}
export interface RegistrationDefinitionProperties {
	readonly authorizations: Authorization[];
	readonly description?: string | undefined;
	readonly managedByTenantId: string;
	readonly managedByTenantName?: string | undefined;
	readonly provisioningState?:
		| (
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
				| "Updating"
		  )
		| undefined;
	readonly registrationDefinitionName?: string | undefined;
}
export default {
	marketplaceRegistrationDefinitions: marketplaceRegistrationDefinitions,
	registrationAssignments: registrationAssignments,
	registrationDefinitions: registrationDefinitions,
};

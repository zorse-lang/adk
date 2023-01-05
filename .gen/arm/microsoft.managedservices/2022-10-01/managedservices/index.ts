import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class marketplaceRegistrationDefinitions
	extends ArmResource<marketplaceRegistrationDefinitionsComponentInputs>
	implements marketplaceRegistrationDefinitionsComponentOutputs
{
	constructor(entity: ADKEntity, options: marketplaceRegistrationDefinitionsComponentInputs) {
		super(entity, options.name, "Microsoft.ManagedServices/marketplaceRegistrationDefinitions", "2022-10-01", options);
	}
	public readonly apiVersion: "2022-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.ManagedServices/marketplaceRegistrationDefinitions";
}
export interface marketplaceRegistrationDefinitionsComponentOutputs {
	readonly apiVersion: "2022-10-01";
	readonly id: string;
	readonly type: "Microsoft.ManagedServices/marketplaceRegistrationDefinitions";
}
export interface marketplaceRegistrationDefinitionsComponentInputs {
	readonly name: string;
	readonly plan?: Plan;
	readonly properties?: MarketplaceRegistrationDefinitionProperties;
}
export class registrationAssignments
	extends ArmResource<registrationAssignmentsComponentInputs>
	implements registrationAssignmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: registrationAssignmentsComponentInputs) {
		super(entity, options.name, "Microsoft.ManagedServices/registrationAssignments", "2022-10-01", options);
	}
	public readonly apiVersion: "2022-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.ManagedServices/registrationAssignments";
}
export interface registrationAssignmentsComponentOutputs {
	readonly apiVersion: "2022-10-01";
	readonly id: string;
	readonly type: "Microsoft.ManagedServices/registrationAssignments";
}
export interface registrationAssignmentsComponentInputs {
	readonly name: string;
	readonly properties?: RegistrationAssignmentProperties;
	readonly systemData?: SystemData;
}
export class registrationDefinitions
	extends ArmResource<registrationDefinitionsComponentInputs>
	implements registrationDefinitionsComponentOutputs
{
	constructor(entity: ADKEntity, options: registrationDefinitionsComponentInputs) {
		super(entity, options.name, "Microsoft.ManagedServices/registrationDefinitions", "2022-10-01", options);
	}
	public readonly apiVersion: "2022-10-01";
	public readonly id: string;
	public readonly type: "Microsoft.ManagedServices/registrationDefinitions";
}
export interface registrationDefinitionsComponentOutputs {
	readonly apiVersion: "2022-10-01";
	readonly id: string;
	readonly type: "Microsoft.ManagedServices/registrationDefinitions";
}
export interface registrationDefinitionsComponentInputs {
	readonly name: string;
	readonly plan?: Plan;
	readonly properties?: RegistrationDefinitionProperties;
	readonly systemData?: SystemData;
}
export interface Authorization {
	readonly delegatedRoleDefinitionIds?: string[];
	readonly principalId: string;
	readonly principalIdDisplayName?: string;
	readonly roleDefinitionId: string;
}
export interface EligibleApprover {
	readonly principalId: string;
	readonly principalIdDisplayName?: string;
}
export interface EligibleAuthorization {
	readonly justInTimeAccessPolicy?: JustInTimeAccessPolicy;
	readonly principalId: string;
	readonly principalIdDisplayName?: string;
	readonly roleDefinitionId: string;
}
export interface JustInTimeAccessPolicy {
	readonly managedByTenantApprovers?: EligibleApprover[];
	readonly maximumActivationDuration?: string;
	readonly multiFactorAuthProvider: "Azure" | "None";
}
export interface MarketplaceRegistrationDefinitionProperties {
	readonly authorizations: Authorization[];
	readonly eligibleAuthorizations?: EligibleAuthorization[];
	readonly managedByTenantId: string;
	readonly offerDisplayName?: string;
	readonly planDisplayName?: string;
	readonly publisherDisplayName?: string;
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
	readonly systemData?: SystemData;
	readonly type?: string;
}
export interface RegistrationAssignmentPropertiesRegistrationDefinitionProperties {
	readonly authorizations?: Authorization[];
	readonly description?: string;
	readonly eligibleAuthorizations?: EligibleAuthorization[];
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
	readonly eligibleAuthorizations?: EligibleAuthorization[];
	readonly managedByTenantId: string;
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
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export default {
	marketplaceRegistrationDefinitions: marketplaceRegistrationDefinitions,
	registrationAssignments: registrationAssignments,
	registrationDefinitions: registrationDefinitions,
};

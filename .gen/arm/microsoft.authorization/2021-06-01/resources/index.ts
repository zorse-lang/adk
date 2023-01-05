import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class policyAssignments
	extends ArmResource<policyAssignmentsComponentInputs>
	implements policyAssignmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: policyAssignmentsComponentInputs) {
		super(entity, options.name, "Microsoft.Authorization/policyAssignments", "2021-06-01", options);
	}
	public readonly apiVersion: "2021-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Authorization/policyAssignments";
}
export interface policyAssignmentsComponentOutputs {
	readonly apiVersion: "2021-06-01";
	readonly id: string;
	readonly type: "Microsoft.Authorization/policyAssignments";
}
export interface policyAssignmentsComponentInputs {
	readonly identity?: Identity;
	readonly location?: string;
	readonly name: string;
	readonly properties?: PolicyAssignmentProperties;
	readonly systemData?: SystemData;
}
export class policyDefinitions
	extends ArmResource<policyDefinitionsComponentInputs>
	implements policyDefinitionsComponentOutputs
{
	constructor(entity: ADKEntity, options: policyDefinitionsComponentInputs) {
		super(entity, options.name, "Microsoft.Authorization/policyDefinitions", "2021-06-01", options);
	}
	public readonly apiVersion: "2021-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Authorization/policyDefinitions";
}
export interface policyDefinitionsComponentOutputs {
	readonly apiVersion: "2021-06-01";
	readonly id: string;
	readonly type: "Microsoft.Authorization/policyDefinitions";
}
export interface policyDefinitionsComponentInputs {
	readonly name: string;
	readonly properties?: PolicyDefinitionProperties;
	readonly systemData?: SystemData;
}
export class policySetDefinitions
	extends ArmResource<policySetDefinitionsComponentInputs>
	implements policySetDefinitionsComponentOutputs
{
	constructor(entity: ADKEntity, options: policySetDefinitionsComponentInputs) {
		super(entity, options.name, "Microsoft.Authorization/policySetDefinitions", "2021-06-01", options);
	}
	public readonly apiVersion: "2021-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Authorization/policySetDefinitions";
}
export interface policySetDefinitionsComponentOutputs {
	readonly apiVersion: "2021-06-01";
	readonly id: string;
	readonly type: "Microsoft.Authorization/policySetDefinitions";
}
export interface policySetDefinitionsComponentInputs {
	readonly name: string;
	readonly properties?: PolicySetDefinitionProperties;
	readonly systemData?: SystemData;
}
export interface Identity {
	readonly principalId?: string;
	readonly tenantId?: string;
	readonly type?: "None" | "SystemAssigned";
	readonly userAssignedIdentities?: IdentityUserAssignedIdentities;
}
export interface IdentityUserAssignedIdentities {
	readonly [key: string]: UserAssignedIdentitiesValue;
}
export interface NonComplianceMessage {
	readonly message: string;
	readonly policyDefinitionReferenceId?: string;
}
export interface ParameterDefinitions {
	readonly [key: string]: ParameterDefinitionsValue;
}
export interface ParameterDefinitionsValue {
	readonly allowedValues?: any[];
	readonly defaultValue?: any;
	readonly metadata?: ParameterDefinitionsValueMetadata;
	readonly type?: "Array" | "Boolean" | "DateTime" | "Float" | "Integer" | "Object" | "String";
}
export interface ParameterDefinitionsValueMetadata {
	readonly assignPermissions?: boolean;
	readonly description?: string;
	readonly displayName?: string;
	readonly strongType?: string;
	readonly [key: string]: any;
}
export interface ParameterValues {
	readonly [key: string]: ParameterValuesValue;
}
export interface ParameterValuesValue {
	readonly value?: any;
}
export interface PolicyAssignmentProperties {
	readonly description?: string;
	readonly displayName?: string;
	readonly enforcementMode?: "Default" | "DoNotEnforce";
	readonly metadata?: any;
	readonly nonComplianceMessages?: NonComplianceMessage[];
	readonly notScopes?: string[];
	readonly parameters?: ParameterValues;
	readonly policyDefinitionId?: string;
	readonly scope?: string;
}
export interface PolicyDefinitionGroup {
	readonly additionalMetadataId?: string;
	readonly category?: string;
	readonly description?: string;
	readonly displayName?: string;
	readonly name: string;
}
export interface PolicyDefinitionProperties {
	readonly description?: string;
	readonly displayName?: string;
	readonly metadata?: any;
	readonly mode?: string;
	readonly parameters?: ParameterDefinitions;
	readonly policyRule?: any;
	readonly policyType?: "BuiltIn" | "Custom" | "NotSpecified" | "Static";
}
export interface PolicyDefinitionReference {
	readonly groupNames?: string[];
	readonly parameters?: ParameterValues;
	readonly policyDefinitionId: string;
	readonly policyDefinitionReferenceId?: string;
}
export interface PolicySetDefinitionProperties {
	readonly description?: string;
	readonly displayName?: string;
	readonly metadata?: any;
	readonly parameters?: ParameterDefinitions;
	readonly policyDefinitionGroups?: PolicyDefinitionGroup[];
	readonly policyDefinitions: PolicyDefinitionReference[];
	readonly policyType?: "BuiltIn" | "Custom" | "NotSpecified" | "Static";
}
export interface SystemData {
	readonly createdAt?: string;
	readonly createdBy?: string;
	readonly createdByType?: "Application" | "Key" | "ManagedIdentity" | "User";
	readonly lastModifiedAt?: string;
	readonly lastModifiedBy?: string;
	readonly lastModifiedByType?: "Application" | "Key" | "ManagedIdentity" | "User";
}
export interface UserAssignedIdentitiesValue {
	readonly clientId?: string;
	readonly principalId?: string;
}
export default {
	policyAssignments: policyAssignments,
	policyDefinitions: policyDefinitions,
	policySetDefinitions: policySetDefinitions,
};

import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class policyAssignments
	extends ArmResource<policyAssignmentsComponentInputs>
	implements policyAssignmentsComponentOutputs
{
	constructor(entity: ADKEntity, options: policyAssignmentsComponentInputs) {
		super(entity, options.name, "Microsoft.Authorization/policyAssignments", "2022-06-01", options);
	}
	public readonly apiVersion: "2022-06-01";
	public readonly id: string;
	public readonly type: "Microsoft.Authorization/policyAssignments";
}
export interface policyAssignmentsComponentOutputs {
	readonly apiVersion: "2022-06-01";
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
export interface Override {
	readonly kind?: "policyEffect";
	readonly selectors?: Selector[];
	readonly value?: string;
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
	readonly overrides?: Override[];
	readonly parameters?: ParameterValues;
	readonly policyDefinitionId?: string;
	readonly resourceSelectors?: ResourceSelector[];
	readonly scope?: string;
}
export interface ResourceSelector {
	readonly name?: string;
	readonly selectors?: Selector[];
}
export interface Selector {
	readonly in?: string[];
	readonly kind?: "policyDefinitionReferenceId" | "resourceLocation" | "resourceType" | "resourceWithoutLocation";
	readonly notIn?: string[];
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
};

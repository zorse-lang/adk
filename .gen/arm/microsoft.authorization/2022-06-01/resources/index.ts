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
	readonly identity?: Identity | undefined;
	readonly location?: string | undefined;
	readonly name: string;
	readonly properties?: PolicyAssignmentProperties | undefined;
	readonly systemData?: SystemData | undefined;
}
export interface Identity {
	readonly principalId?: string | undefined;
	readonly tenantId?: string | undefined;
	readonly type?: ("None" | "SystemAssigned") | undefined;
	readonly userAssignedIdentities?: IdentityUserAssignedIdentities | undefined;
}
export interface IdentityUserAssignedIdentities {
	readonly "[ key: string ]"?: UserAssignedIdentitiesValue | undefined;
}
export interface NonComplianceMessage {
	readonly message: string;
	readonly policyDefinitionReferenceId?: string | undefined;
}
export interface Override {
	readonly kind?: "policyEffect" | undefined;
	readonly selectors?: Selector[] | undefined;
	readonly value?: string | undefined;
}
export interface ParameterValues {
	readonly "[ key: string ]"?: ParameterValuesValue | undefined;
}
export interface ParameterValuesValue {
	readonly value?: any | undefined;
}
export interface PolicyAssignmentProperties {
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly enforcementMode?: ("Default" | "DoNotEnforce") | undefined;
	readonly metadata?: any | undefined;
	readonly nonComplianceMessages?: NonComplianceMessage[] | undefined;
	readonly notScopes?: string[] | undefined;
	readonly overrides?: Override[] | undefined;
	readonly parameters?: ParameterValues | undefined;
	readonly policyDefinitionId?: string | undefined;
	readonly resourceSelectors?: ResourceSelector[] | undefined;
	readonly scope?: string | undefined;
}
export interface ResourceSelector {
	readonly name?: string | undefined;
	readonly selectors?: Selector[] | undefined;
}
export interface Selector {
	readonly in?: string[] | undefined;
	readonly kind?:
		| ("policyDefinitionReferenceId" | "resourceLocation" | "resourceType" | "resourceWithoutLocation")
		| undefined;
	readonly notIn?: string[] | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export interface UserAssignedIdentitiesValue {
	readonly clientId?: string | undefined;
	readonly principalId?: string | undefined;
}
export default {
	policyAssignments: policyAssignments,
};

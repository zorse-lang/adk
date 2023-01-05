import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class policyExemptions
	extends ArmResource<policyExemptionsComponentInputs>
	implements policyExemptionsComponentOutputs
{
	constructor(entity: ADKEntity, options: policyExemptionsComponentInputs) {
		super(entity, options.name, "Microsoft.Authorization/policyExemptions", "2022-07-01-preview", options);
	}
	public readonly apiVersion: "2022-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Authorization/policyExemptions";
}
export interface policyExemptionsComponentOutputs {
	readonly apiVersion: "2022-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Authorization/policyExemptions";
}
export interface policyExemptionsComponentInputs {
	readonly name: string;
	readonly properties: PolicyExemptionProperties;
	readonly systemData?: SystemData;
}
export interface PolicyExemptionProperties {
	readonly assignmentScopeValidation?: "Default" | "DoNotValidate";
	readonly description?: string;
	readonly displayName?: string;
	readonly exemptionCategory: "Mitigated" | "Waiver";
	readonly expiresOn?: string;
	readonly metadata?: any;
	readonly policyAssignmentId: string;
	readonly policyDefinitionReferenceIds?: string[];
	readonly resourceSelectors?: ResourceSelector[];
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
export default {
	policyExemptions: policyExemptions,
};

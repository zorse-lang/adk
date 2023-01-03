import { ArmResource, Entity as ADKEntity } from "@zorse/adk";

export class policyExemptions
	extends ArmResource<policyExemptionsComponentInputs>
	implements policyExemptionsComponentOutputs
{
	constructor(entity: ADKEntity, options: policyExemptionsComponentInputs) {
		super(entity, options.name, "Microsoft.Authorization/policyExemptions", "2020-07-01-preview", options);
	}
	public readonly apiVersion: "2020-07-01-preview";
	public readonly id: string;
	public readonly type: "Microsoft.Authorization/policyExemptions";
}
export interface policyExemptionsComponentOutputs {
	readonly apiVersion: "2020-07-01-preview";
	readonly id: string;
	readonly type: "Microsoft.Authorization/policyExemptions";
}
export interface policyExemptionsComponentInputs {
	readonly name: string;
	readonly properties: PolicyExemptionProperties;
	readonly systemData?: SystemData | undefined;
}
export interface PolicyExemptionProperties {
	readonly description?: string | undefined;
	readonly displayName?: string | undefined;
	readonly exemptionCategory: "Mitigated" | "Waiver";
	readonly expiresOn?: string | undefined;
	readonly metadata?: any | undefined;
	readonly policyAssignmentId: string;
	readonly policyDefinitionReferenceIds?: string[] | undefined;
}
export interface SystemData {
	readonly createdAt?: string | undefined;
	readonly createdBy?: string | undefined;
	readonly createdByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
	readonly lastModifiedAt?: string | undefined;
	readonly lastModifiedBy?: string | undefined;
	readonly lastModifiedByType?: ("Application" | "Key" | "ManagedIdentity" | "User") | undefined;
}
export default {
	policyExemptions: policyExemptions,
};
